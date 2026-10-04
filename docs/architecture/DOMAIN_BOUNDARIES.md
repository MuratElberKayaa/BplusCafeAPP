# B+ Wellness Café Digital Platform — Domain Boundaries

**Doküman Sürümü:** 1.0.0 (Phase 0 — Foundation)  
**Tarih:** 2026-09-29  
**Statü:** ACCEPTED  
**Mimari Model:** Modular Monolith Boundaries  

Bu doküman, B+ platformundaki temel iş alanlarının (Bounded Contexts) sorumluluklarını, sahip oldukları birincil varlıkları (Entities), modüller arası bağımlılık kurallarını ve domain event'lerini tanımlar.

---

## 1. Domain Haritası ve İlişkiler

```
+---------------------------------------------------------------------------------------------------+
|                                             AUTH & IDENTITY                                       |
|  [ AuthDomain ] <----------------------------------------+                                        |
|         |                                                |                                        |
|         v                                                |                                        |
|  [ UserDomain ]                                          |                                        |
+---------+------------------------------------------------+----------------------------------------+
          |                                                |
          | (UserId)                                       | (StoreId)
          v                                                v
+------------------------+  +------------------------+  +------------------------+  +---------------+
|     MenuDomain         |  |      OrderDomain       |  |      StoreDomain       |  |   AiDomain    |
| - Products             |  | - Orders               |  | - Stores               |  | - Intent      |
| - Categories           |  | - OrderItems           |  | - StoreHours           |  | - Embeddings  |
| - Customizations       |  | - State Machine        |  | - StoreSettings        |  | - Guardrails  |
+-----------+------------+  +-----------+------------+  +-----------+------------+  +-------+-------+
            ^                           |                           ^                         |
            | (Read Avail)              |                           |                         |
            |                           | (OrderCreated / Paid)     | (Store Status)          | (Product IDs)
            |                           v                           |                         |
+-----------+------------+  +-----------+------------+              |                         |
|    PaymentDomain       |  |     RewardsDomain      |              |                         |
| - PaymentTransactions  |  | - PointLedger          |              |                         |
| - IdempotencyLog       |  | - DynamicRulesEngine   |              |                         |
+-----------+------------+  +-----------+------------+              |                         |
            |                           |                           |                         |
            v                           v                           v                         v
+------------------------+  +------------------------+  +-------------------------------------------+
|      WalletDomain      |  |  NotificationDomain    |  |              PosAdapterDomain             |
| - SandboxLedger        |  | - DeviceTokens (FCM)   |  | - KDS Web Bridge (LocalOperations)       |
| - WalletBalance        |  | - PushTemplates        |  | - Future External POS                     |
+------------------------+  +------------------------+  +-------------------------------------------+
```

---

## 2. Modül Bazlı Sorumluluk Matrisi

### 2.1. Auth Domain (`AuthModule`)
- **Sorumluluk:** Kimlik doğrulama, JWT access ve refresh token üretimi, şifre sıfırlama, rol bazlı yetkilendirme (RBAC: `CUSTOMER`, `BARISTA`, `STORE_MANAGER`, `ADMIN`).
- **Birincil Varlıklar:** `Credential`, `RefreshToken`, `Role`, `Permission`.
- **Kural:** Şifreler argon2id ile hashlenir. Token doğrulama stateless'tır, logout için Redis blacklist kullanılır.

### 2.2. User Domain (`UserModule`)
- **Sorumluluk:** Müşteri ve personel profil bilgileri, iletişim tercihleri, kayıtlı adresler (opsiyonel), beslenme/diyet tercihleri (vegan, laktozsuz vb.).
- **Birincil Varlıklar:** `User`, `UserProfile`, `DietaryPreference`.
- **Kural:** Finansal veya sipariş geçmişi doğrudan burada tutulmaz; sadece kullanıcı kimliği (`userId`) diğer domainlere referans verilir.

### 2.3. Store Domain (`StoreModule`)
- **Sorumluluk:** Fiziksel şube kayıtları, şube çalışma saatleri, sipariş kabul açık/kapalı durumu, şube bazlı operasyonel ayarlar (hazırlık süresi, yoğunluk çarpanı).
- **Birincil Varlıklar:** `Store`, `StoreHours`, `StoreSetting`.
- **Kural:** Sistem multi-store mimarisine tam uyumludur. Şube ID'si asla kod içinde hardcode edilmez.

### 2.4. Menu Domain (`MenuModule`)
- **Sorumluluk:** Kategoriler, ürünler, ürün varyantları (boyut, baz reçete), özelleştirme grupları (süt seçimi, ekstra shot), besin değerleri, alerjenler, tat ve wellness etiketleri, şube bazlı ürün mevcudiyeti (`StoreProductAvailability`).
- **Birincil Varlıklar:** `Category`, `Product`, `ProductVariant`, `CustomizationGroup`, `CustomizationOption`, `NutritionInfo`, `Allergen`, `ProductTag`, `StoreProduct`.
- **Kural:** Menü fiyatları ve içerikleri dinamiktir. Ürün devre dışı bırakıldığında `ProductAvailabilityChangedEvent` yayınlar.

### 2.5. Order Domain (`OrderModule`)
- **Sorumluluk:** Sepet doğrulama, sipariş oluşturma, sipariş yaşam döngüsü durum makinesi (`NEW` -> `PREPARING` -> `READY` -> `COMPLETED` / `CANCELLED`), mutfak sipariş sırası yönetimi.
- **Birincil Varlıklar:** `Order`, `OrderItem`, `OrderItemCustomization`, `OrderStatusHistory`.
- **Kural:** Sipariş, ödeme onaylanmadan (`PAID`) mağazanın KDS ekranına düşmez. Statü geçişleri katı bir durum makinesi ile yönetilir.

### 2.6. Payment Domain (`PaymentModule`)
- **Sorumluluk:** Ödeme başlatma, 3D secure yönlendirme, webhook alma ve imza doğrulama, mükerrer istekleri engelleme (Idempotency), iade işlemleri.
- **Birincil Varlıklar:** `PaymentTransaction`, `PaymentWebhookLog`, `IdempotencyRecord`.
- **Kural:** B+ backend üzerinde hassas kart verisi saklanmaz; tokenized/hosted akışlar tercih edilir (Nihai PCI kapsamı entegrasyon fazında doğrulanır). Webhook imzası başarıyla doğrulanmadan `PaymentSucceededEvent` fırlatılamaz.

### 2.7. Rewards Domain (`RewardsModule`)
- **Sorumluluk:** Sadakat puanlarının kazanımı, harcanması, bakiye hesaplaması ve kampanya kurallarının işletilmesi.
- **Birincil Varlıklar:** `RewardAccount`, `PointTransaction`, `RewardRule`.
- **Kural:** Sabit oran hardcode edilmez. Kural motoru üzerinden sipariş tutarı, ürün kategorisi veya sipariş frekansına göre dinamik hesaplanır.

### 2.8. Wallet Domain (`WalletModule`)
- **Sorumluluk:** Uygulama içi cüzdan bakiyesinin tutulması, sanal para yükleme/düşme hareket defteri (ledger).
- **Birincil Varlıklar:** `WalletAccount`, `WalletLedgerEntry`.
- **Kural (Phase 0):** 6493 sayılı Kanun ve TCMB düzenlemeleri kapsamında yasal, kurumsal ve ödeme kuruluşu değerlendirmeleri tamamlanana kadar production gerçek para cüzdanı geliştirilmez (`RISK-01`). Yalnızca test/sandbox bakiye ile sipariş ödeme simülasyonu planlanmıştır.

### 2.9. Notification Domain (`NotificationModule`)
- **Sorumluluk:** Mobil istemcilerin FCM token kayıtları, sipariş durumu değiştiğinde müşteriye push bildirim gönderimi, bildirim şablonları.
- **Birincil Varlıklar:** `DeviceToken`, `NotificationLog`.
- **Kural:** Bildirim hataları sipariş akışını bloke etmez (asenkron / fire-and-forget).

### 2.10. AI Domain (`AiModule`)
- **Sorumluluk:** Kullanıcı serbest metin girdisinden niyet ve kısıt çıkarma, embedding üretimi, pgvector ile menü arama, guardrail filtrelemesi ve öneri sunumu.
- **Birincil Varlıklar:** `ProductEmbedding` (Menu ile ortak referans), `AiConversationLog`.
- **Kural:** Yapay zekanın serbest metin uydurma riski mimari olarak pgvector ve guardrail katmanlarıyla kısıtlanır; dönen ürün mutlaka `MenuModule` içindeki aktif bir `productId` ile eşleştirilir. Doğrulama ilerleyen AI test fazlarında yapılacaktır.

---

## 3. Modüller Arası Etkileşim Kuralları (Inter-Module Communication)

1. **Doğrudan Veritabanı Paylaşımı Yasaktır:** `OrderModule`, doğrudan `Menu` veya `Payment` tablolarına SQL sorgusu atamaz. İhtiyaç duyulan veriler ilgili modülün injectable Service sınıfı üzerinden alınır.
2. **Asenkron Olaylar (Domain Events):** Modüller arası gevşek bağımlılık (Loose Coupling) için `@nestjs/event-emitter` kullanılır.

| Tetiklenen Event | Yayınlayan Modül | Dinleyen Modüller & Aksiyonlar |
| :--- | :--- | :--- |
| `PaymentSucceededEvent` | `PaymentModule` | `OrderModule` -> Siparişi `CONFIRMED` yapar ve KDS'e iletir.<br>`RewardsModule` -> Puan hesaplar ve yükler. |
| `OrderStatusChangedEvent` | `OrderModule` | `NotificationModule` -> Müşteriye push bildirim gönderir.<br>`PosAdapterModule` -> KDS ekranını günceller. |
| `ProductAvailabilityChangedEvent` | `StoreModule` / `MenuModule` | `AiModule` -> Öneri havuzundan ürünü anında çıkarır.<br>Redis -> Menü cache'ini temizler. |

---

## 4. Bounded Context Bütünlüğü Özeti

Bu modüler sınırlar sayesinde sistem monolitik olarak tek bir repository ve tek bir deploy edilebilir birim (`api`) halinde kalırken, her domain'in kendi bağımsız iş kuralları temiz bir şekilde izole edilmiş olur.
