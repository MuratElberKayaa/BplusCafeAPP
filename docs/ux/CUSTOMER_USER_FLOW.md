# B+ Wellness Café — Customer User Flow

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** APPROVED FOR PHASE 1 (FROZEN CANDIDATE)  
**Referans:** [docs/product/PRODUCT_DEFINITION.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/product/PRODUCT_DEFINITION.md), [docs/architecture/ADR-002-PAYMENT-ABSTRACTION.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/ADR-002-PAYMENT-ABSTRACTION.md)

---

## 1. Birincil Sipariş Akışı (Primary Order Ahead Flow)

Müşterinin uygulamayı açmasından içeceğini teslim alıp sadakat puanı kazanmasına kadar olan uçtan uca akış:

```
[ APP OPEN ]
     │
     ▼
[ 1. HOME SCREEN ] ────► Banner: "B+ Pilot Şube Açık • Hazırlık Süresi ~10-15 dk (Tahmini)"
     │
     ▼
[ 2. MENU SCREEN ] ────► Kategori Seçimi (Örn: Fonksiyonel İçecekler) + Arama & Filtre
     │
     ▼
[ 3. PRODUCT DETAIL ] ──► Ürün İnceleme (Kalori, Kafein Seviyesi, Alerjenler)
     │
     ▼
[ 4. CUSTOMIZE MODAL ] ─► Boyut (Büyük) + Süt (Yulaf) + Şurup (Şekersiz) + Boost (Kolajen)
     │
     ▼
[ 5. CART SCREEN ] ─────► Sepet Özeti + Tutar Doğrulama (Sunucu Yetkili Fiyat)
     │
     ▼
[ 6. AUTH CHECK GATE ] ─┬─► [Kullanıcı Giriş Yapmış] ──► Doğrudan CHECKOUT
     │                  │
     │                  └─► [Misafir Kullanıcı] ──────► LOGIN / REGISTER MODAL ──► Başarılı Giriş
     │                                                                                    │
     ▼                                                                                    │
[ 7. CHECKOUT SCREEN ] ◄──────────────────────────────────────────────────────────────────┘
     │ ├── Teslimat Şubesi & Tahmini Süre (10-15 dk)
     │ └── Ödeme Yöntemi: [ B+ Sandbox Wallet (DEMO ONLY) ] veya [ Kredi Kartı / Mock Gateway ]
     │
     ▼
[ 8. PAYMENT FLOW ]
     │ ├── İstemci benzersiz Idempotency-Key üretir
     │ └── Ödeme Sağlayıcı / Sandbox Çağrısı
     │
     ▼
[ 9. PAYMENT VERIFIED ]
     │ ├── Webhook / Callback backend tarafından doğrulanır
     │ └── Sipariş statüsü: NEW / CONFIRMED
     │
     ▼
[ 10. ORDER CONFIRMATION ] ──► "Siparişiniz Alındı! Sipariş No: #B-108"
     │
     ▼
[ 11. ORDER TRACKING ] ──────► Canlı Durum İlerlemesi (FCM Push / SSE Dinleme)
     │
     ├── A) PREPARING (Barista hazırlamaya başladı • Push: "Kahveniz hazırlanıyor")
     ├── B) READY (Tezgahta hazır • Push: "Kahveniz tezgahta sizi bekliyor!")
     │
     ▼
[ 12. STORE PICKUP ] ────────► Müşteri kasaya gelir, sipariş kodunu (#B-108) gösterir
     │
     ▼
[ 13. COMPLETED ] ───────────► Barista "Teslim Edildi" işaretler
     │
     ▼
[ 14. REWARD EARNED ] ───────► REWARD EARNED (RULE TBD — DEMO_RULE: NON-PRODUCTION)
```

---

## 2. Adım Adım Ekran & Aksiyon Spesifikasyonu

### Adım 1: Uygulama Başlatma & Ana Sayfa (Home)
- **Kullanıcı Eylemi:** Uygulama simgesine dokunur.
- **Sistem Davranışı:** Şube çalışma saatlerini (`store_hours`), sipariş kabul durumunu ve yapılandırılabilir sipariş kesilme süresini (`order_cutoff_minutes`) kontrol eder.
- **Görüntülenen:** Pilot şubenin açık olduğu, tahmini hazırlık süresi, son sipariş hızlı tekrarla kartı, AI Barista danışman kartı.

### Adım 2: Menü & Filtreleme (Menu)
- **Kullanıcı Eylemi:** Alt sekmeden "Menu" sekmesine geçer veya arama çubuğuna dokunur.
- **Sistem Davranışı:** Kategorileri ve sadece o şubede mevcut (`is_available = true`) olan ürünleri listeler.
- **Kullanıcı Eylemi:** "Vegan", "Glutensiz" veya "Düşük Kafein" filtre haplarına basarak listeyi daraltır.

### Adım 3: Ürün Detayı (Product Detail)
- **Kullanıcı Eylemi:** Bir ürüne tıklar.
- **Görüntülenen:** Ürün görseli, baz fiyat, kalori, kafein (mg), içerik listesi (ingredients), alerjen uyarıları (allergens).
- **Aksiyon:** "Özelleştir ve Ekle" butonuna basar.

### Adım 4: Ürün Özelleştirme Modalı (Customize Product)
- **Kullanıcı Eylemi:**
  - Boyut seçimi (Örn: Standart / Büyük).
  - Süt seçimi (Örn: Yulaf Sütü / Badem Sütü).
  - Tatlılık oranı (Örn: Şekersiz / Standart).
  - Fonksiyonel wellness katkısı (Örn: Kolajen Peptit).
- **Sistem Davranışı:** Seçilen opsiyonlara göre anlık dinamik toplam fiyatı günceller.
- **Aksiyon:** "Sepete Ekle" butonuna tıklar.

### Adım 5: Sepet (Cart)
- **Görüntülenen:** Eklenen ürünler, seçilen tüm özelleştirmeler maddeler halinde, adet artırma/azaltma, ara toplam, KDV ve toplam tutar.
- **Aksiyon:** "Siparişi Tamamla" butonuna tıklar.

### Adım 6: Kimlik Doğrulama Kontrolü (Auth Gate)
- **Mantıksal Kapı:** `if (!currentUser.isAuthenticated)`
  - *Misafir Kullanıcı:* Tam ekran `Login / Register` modalı açılır. Girişten sonra sepet içeriği korunarak Checkout ekranına geçilir.
  - *Giriş Yapmış Kullanıcı:* Doğrudan Adım 7'ye yönlendirilir.

### Adım 7: Ödeme & Sipariş Özeti (Checkout)
- **Görüntülenen:**
  - Teslim alma noktası: *B+ Pilot Store*.
  - Tahmini teslim alma süresi: *10-15 dakika içinde (Tahmini)*.
  - Ödeme Yöntemi Seçimi:
    - `[ B+ Sandbox Wallet ]` *(DEMO ONLY — Sanal test bakiyesi ile ödeme)*.
    - `[ Kredi / Banka Kartı ]` *(Provider-independent / Mock Gateway arayüzü)*.
- **Aksiyon:** "Ödemeyi Yap ve Siparişi Ver" butonuna basar.

### Adım 8 & 9: Ödeme Doğrulama & İdempotency
- **Sistem Davranışı:**
  - İstemci `Idempotency-Key` (UUIDv4) üretip header'da gönderir.
  - Backend ödeme işlemini `PaymentProvider` soyutlaması üzerinden yürütür.
  - Ödeme doğrulanmadan sipariş `CONFIRMED` statüsüne geçirilmez.
  - Başarılı olunca sipariş veritabanına `NEW / CONFIRMED` statüsünde işlenir ve Store Operations ekranına canlı düşer.

### Adım 10 & 11: Sipariş Onayı & Canlı Takip (Order Tracking)
- **Görüntülenen:** "Siparişiniz Alındı!" başarı mesajı, Sipariş No: `#B-108`.
- **Canlı Takip Çubuğu:**
  1. `Alındı (NEW / CONFIRMED)`
  2. `Hazırlanıyor (PREPARING)` — Push bildirimi: *"Kahveniz hazırlanıyor."*
  3. `Hazır (READY)` — Push bildirimi: *"Siparişiniz #B-108 tezgahta sizi bekliyor!"*

### Adım 12 & 13: Mağazada Teslim Alma & Tamamlama
- **Kullanıcı Eylemi:** Mağazaya girer, teslimat tezgahındaki baristaya sipariş numarasını (#B-108) gösterir.
- **Personel Eylemi:** Barista siparişi teslim eder ve KDS tabletinden "Tamamla" butonuna dokunur (`COMPLETED`).

### Adım 14: Sadakat Puanı Kazanımı (Reward Earned)
- **Sistem Davranışı:** Sipariş `COMPLETED` olduğu anda arka planda `RewardsModule` tetiklenir.
- **Kazanım Kuralı:** `REWARD EARNED (RULE TBD — DEMO_RULE: NON-PRODUCTION)`. Gerçek formül işveren onayına tabidir (`DEC-04`).

---

## 3. Alternatif ve Hata Akışları (Alternative Paths)

### 3.1. Ödeme Başarısız Senaryosu
- Ödeme banka veya sandbox simülatöründe reddedilirse sipariş `CONFIRMED` olmaz.
- Kullanıcı Checkout ekranında kalır; sepeti korunur ve farklı ödeme yöntemi seçebilir.

### 3.2. Sepette Beklerken Ürünün Tükenmesi
- Barista KDS üzerinden ürünü "Unavailable" yaparsa:
  - Checkout validasyonunda `409 Conflict` döner.
  - Ekranda uyarı belirir: *"Seçilen malzeme az önce tükendi. Lütfen sepetinizi güncelleyin."*

### 3.3. Sipariş İptali ve İade Durumu
- Sipariş `NEW` durumundayken müşteri iptal talebinde bulunabilir.
- Barista `PREPARING` durumuna geçirdikten sonra mobil iptal kapalıdır.
- İptal edilen siparişlerde para iadesi: `REFUND POLICY TBD (DEC-07)`. İade iş kuralı işveren onayı beklemektedir.
