# B+ Wellness Café Digital Platform — Product Definition

**Marka:** B+ Wellness Café by Mineiro Coffee  
**Doküman Sürümü:** 1.0.0 (Phase 0 — Foundation)  
**Tarih:** 2026-09-29  
**Statü:** DRAFT / APPROVED FOR PHASE 0  
**Rol Sahipleri:** Product Architect, Solution Architect, Senior Full-Stack Engineer, AI Product Engineer  

---

## 1. Ürün Vizyonu (Product Vision)

B+ Wellness Café by Mineiro Coffee, premium kahve kültürünü fonksiyonel beslenme ve wellness konseptiyle birleştiren modern bir yaşam tarzı café zinciridir.

**Dijital Platformun Amacı:**  
Starbucks standartlarında sürtünmesiz bir "Order Ahead", kişiselleştirilmiş sadakat (Rewards) ve dijital sipariş deneyimi sunarken; B+ markasının wellness odaklı kimliğini yenilikçi bir **AI Barista** (doğal dil ile kişiselleştirilmiş içecek/gıda önerisi) ile farklılaştırmaktır.

Platform yalnızca bir mobil uygulama değil; mağaza içi operasyonları, yönetim konsolunu, akıllı menü sorgulamalarını ve ödeme/cüzdan altyapısını uçtan uca yöneten bütünleşik bir ekosistemdir.

---

## 2. Hedef Kullanıcı Profilleri (Target Personas)

| Persona | Tanım | Temel İhtiyaç / Beklenti | Platform Temas Noktası |
| :--- | :--- | :--- | :--- |
| **Sağlık & Wellness Odaklı Müşteri** (Defne, 29) | Beslenme tercihleri (laktozsuz, şekersiz, keto, vegan vb.) olan, fonksiyonel içerik ve temiz enerji arayan bilinçli tüketici. | Kolay alerjen filtreleme, besin değeri şeffaflığı, AI Barista ile ihtiyacına uygun özelleştirilmiş öneriler alma. | Customer Mobile App |
| **Hızlı Şehirli Tüketici** (Kaan, 34) | Yoğun çalışan, mağazada sıra beklemek istemeyen, premium kahve tüketicisi. | Hızlı "Order Ahead", güvenli tek dokunuşla ödeme, hazır olduğunda teslim alma bildirimi, favorilerden hızlı sipariş. | Customer Mobile App |
| **Barista & Mağaza Personeli** (Barista Can, 24) | Yoğun saatlerde fiziksel ve dijital siparişleri hatasız ve hızlı hazırlamakla yükümlü personel. | Anlaşılır KDS (Mutfak Ekranı) / Store Operations ekranı, net özelleştirme listesi, tek dokunuşla durum güncelleme (Hazırlanıyor -> Hazır). | Store Operations Web App (Tablet/Masaüstü) |
| **Mağaza Yöneticisi & İşletmeci** (Merve, 38) | Günlük operasyonu, stok tükenmelerini ve personel iş yükünü denetleyen yönetici. | Anlık ürün tükenme ("86 / Unavailable") işaretleme, gün sonu satış ve sipariş özetlerini izleme. | Store Operations & Admin Panel |
| **Merkez Yönetim / İşveren** (Genel Merkez) | Menü fiyatlandırmasını, kampanyaları, içerik etiketlerini ve sistem ayarlarını yöneten karar vericiler. | Merkezi menü ve kategori yönetimi, sadakat kuralları kontrolü, AI parametreleri ve satış analitiği. | Admin Panel |

---

## 3. Platform Bileşenleri (Platform Components)

Platform, birbiriyle sıkı entegre 6 ana bileşenden oluşur:

```
+---------------------------------------------------------------------------------------+
|                                    B+ PLATFORM                                        |
+---------------------------------------------------------------------------------------+
|  [1] Customer Mobile App  |  [2] Store Operations (KDS)  |  [3] Admin Panel (HQ)      |
|  (React Native / Expo)    |  (Next.js Web / Tablet)      |  (Next.js Web / Masaüstü)  |
+---------------------------+------------------------------+----------------------------+
|                                         ^                                             |
|                                         | REST API + SSE / WebSockets                 |
|                                         v                                             |
+---------------------------------------------------------------------------------------+
|  [4] Backend Platform (NestJS Modular Monolith)                                       |
|      - Auth & User Domain       - Menu & Inventory Domain   - Order Lifecycle Domain  |
|      - Store Domain             - Payment Abstraction       - Rewards Engine          |
+---------------------------------------------------------------------------------------+
|  [5] AI Barista Engine           |  [6] Payment / Wallet / Rewards Altyapısı          |
|      - Intent & Slot Extraction  |      - Provider Agnostic Payment Gateway           |
|      - pgvector Menu Similarity  |      - B+ Sandbox Wallet Engine                    |
|      - Hard Constraint Guardrail |      - Dynamic Rule-based Rewards Engine           |
+---------------------------------------------------------------------------------------+
| Veri & Altyapı: PostgreSQL + pgvector | Redis / Valkey | Firebase Cloud Messaging     |
+---------------------------------------------------------------------------------------+
```

1. **Customer Mobile App (Müşteri Mobil Uygulaması):**  
   React Native / Expo ile iOS ve Android için tek kod tabanı. Dijital menü, özelleştirme, sipariş takibi, cüzdan/rewards ve AI Barista arayüzü.
2. **Store Operations (Mağaza Operasyon Ekranı / KDS):**  
   Baristaların tezgah üstü tablet veya dokunmatik ekranlarında çalışan, anlık sipariş akışını (`NEW` -> `PREPARING` -> `READY` -> `COMPLETED`) yöneten ve ürün mevcudiyetini (Available/Unavailable) anında değiştiren web tabanlı operasyonel arayüz.
3. **Admin Panel (Merkezi Yönetim Konsolu):**  
   İşletme yöneticilerinin menü ağacını, ürün varyantlarını, besin/alerjen bilgilerini, AI etiketlerini (tasteTags, caffeineLevel vb.), mağaza çalışma saatlerini ve genel sipariş raporlarını yönettiği Next.js tabanlı arayüz.
4. **Backend Platform (Merkezi API Servisi):**  
   NestJS ile Modular Monolith mimarisinde kurgulanmış, tüm istemcilere güvenli REST API sunan omurga sistem.
5. **AI Barista (Akıllı İçecek & Wellness Danışmanı):**  
   Kullanıcının doğal dildeki ruh hali, beslenme ve lezzet tercihlerini ayrıştırıp veritabanındaki gerçek ve stokta olan ürünlerle eşleştiren akıllı katman.
6. **Payment / Wallet / Rewards Altyapısı:**  
   Herhangi bir ödeme altyapısına (Iyzico, PayTR, Banka Sanal POS) tak-çıkar uyumlu soyut katman; prototip seviyesinde sandbox çalışan B+ Wallet ve esnek puan motoru.

---

## 4. Temel Ürün Özellikleri (Core Features)

### 4.1. Dijital Menü & Ürün Detay
- Kategori bazlı gezinme (Sıcak Kahveler, Soğuk İçecekler, Fonksiyonel/Wellness Karışımları, Yiyecekler).
- Arama ve filtreleme (Kafeinsiz, Glutensiz, Vegan, Yüksek Protein, Şekersiz vb.).
- Zengin ürün kartı: Besin değerleri (Kalori, Protein, Karbonhidrat, Şeker), alerjen uyarıları, kafein/yoğunluk/tat profilleri.

### 4.2. Gelişmiş Ürün Özelleştirme (Customization Engine)
- Boyut seçimi (Örn: Standart, Büyük).
- Süt alternatifleri (Yulaf, Badem, Soya, Yağsız, Laktozsuz, Tam Yağlı).
- Ekstra shot, şurup/tatlandırıcı oranı (Şekersiz, %25, %50, Standart).
- Sıcaklık/Buz tercihi (Az buzlu, ekstra sıcak vb.).
- Fonksiyonel wellness eklemeleri (Kolajen, Matcha tozu, Protein tozu vb. — *menü onayına bağlı*).
- Özelleştirmelerin fiyata dinamik yansıması.

### 4.3. Order Ahead & Sepet & Checkout
- Mağaza çalışma saatleri kontrolü.
- Tahmini hazırlık süresi gösterimi.
- Sepet validasyonu (özelleştirmelerin ve fiyatların doğrulanması).
- Checkout aşamasında kimlik doğrulama zorunluluğu (Guest browsing desteklenir, satın almada login zorunludur).

### 4.4. Online Ödeme & Idempotency
- Sanal POS / Kredi Kartı ödeme formu (veya Tokenized Kart/Sandbox).
- Çift çekim ve webhook tekrarını engelleyen idempotency anahtarı mimarisi.
- Ödeme doğrulanmadan siparişin kesinleşmemesi güvencesi.

### 4.5. Sipariş Durumu Takibi & Push Bildirimler
- Sipariş yaşam döngüsü:
  $$\text{NEW} \longrightarrow \text{PREPARING} \longrightarrow \text{READY} \longrightarrow \text{COMPLETED}$$
- Mağaza personeli durumu değiştirdiğinde anlık FCM push bildirimi ("Kahveniz hazırlanıyor", "Siparişiniz tezgahta hazır!").

### 4.6. B+ Rewards & Sadakat Programı
- Kullanıcı profilinde güncel puan/yıldız bakiyesi ve geçmiş hareketler.
- İş kurallarından bağımsız esnek motor (spending-based, sipariş adedi veya kampanya bazlı).
- Prototip fazında simüle edilmiş DEMO_RULE ile puan kazanımı ve harcanması.

### 4.7. B+ Wallet (Dijital Cüzdan)
- Uygulama içi bakiye gösterimi ve hızlı checkout seçeneği.
- **Phase 0 Kuralı:** Gerçek para bakiye modeli, 6493 sayılı Kanun ve TCMB düzenlemeleri kapsamında işveren, lisanslı ödeme/elektronik para kuruluşu ve gerektiğinde hukuk danışmanı ile doğrulanmalıdır. Bu değerlendirmeler tamamlanana kadar **sadece Sandbox/Simüle Bakiye** mimarisi planlanmıştır. Gerçek para yükleme production geliştirmesi için onaylanmamıştır (EMPLOYER + PAYMENT PROVIDER + LEGAL/REGULATORY REVIEW REQUIRED).

### 4.8. Favoriler & Sipariş Geçmişi
- Sık sipariş verilen ürünleri ve özel konfigürasyonları tek tıkla favorileme.
- Geçmiş siparişi "Aynısını Tekrarla" özelliği.

### 4.9. AI Barista (Wellness Asistanı)
- Sohbet arayüzü üzerinden doğal dil ile sipariş danışmanlığı:
  - *"Öğleden sonra içebileceğim, enerjimi düşürmeyen ama uykumu da kaçırmayacak hafif tatlı bir içecek önerir misin?"*
- Kullanıcının niyetinden filtre çıkarma (Düşük kafein, tatlılık seviyesi: orta, laktozsuz).
- Vektörel benzerlik ve SQL filtrelemesiyle menüden stokta bulunan gerçek ürünleri önerme.
- Önerilen ürünü tek dokunuşla sepete ekletme.

---

## 5. MVP Scope (Prototype V1 Kapsamı)

Aşağıdaki özellikler ilk çalışan prototipte (Phase 1-4) uçtan uca çalışır durumda teslim edilecektir:

1. **Mobil Uygulama (Customer App):**
   - Kullanıcı kayıt ve giriş (JWT tabanlı Auth).
   - Menü görüntüleme, arama ve wellness etiket filtreleme.
   - Detaylı ürün özelleştirme modalı.
   - Sepet ve Checkout akışı.
   - Mock / Sandbox Payment Provider ile başarılı/başarısız ödeme simülasyonu.
   - Sipariş durumu takip ekranı.
   - Firebase Cloud Messaging ile durum bildirimleri.
   - Temel B+ Rewards UI (Demo kural: Örn. her siparişte 10 B+ Puan).
   - B+ Wallet UI (Sandbox bakiye ile sipariş ödeyebilme).
   - AI Barista Chat (Metin tabanlı diyalog, pgvector menü eşleşmesi, karta ekleme).
2. **Store Operations (KDS):**
   - Tek mağaza (Pilot Şube) sipariş kuyruğu.
   - Sesli/Görsel yeni sipariş uyarısı.
   - Durum geçiş butonları: `NEW` -> `PREPARING` -> `READY` -> `COMPLETED`.
   - Ürün anlık stok açma/kapama ("Unavailable / Out of Stock").
3. **Admin Panel:**
   - Menü ve kategori yönetimi (CRUD).
   - Ürün varyant ve özelleştirme grubu yönetimi.
   - Besin, alerjen ve wellness etiketleri yönetimi (AI Barista beslemesi için).
   - Basit sipariş listesi ve günlük özet rapor.
4. **Backend:**
   - Modular Monolith mimarisinde NestJS REST API.
   - PostgreSQL veritabanı + pgvector eklentisi.
   - Redis cache ve websocket pub/sub altyapısı.

---

## 6. Out-of-Scope (İlk Aşamada Kapsam Dışı Bırakılanlar)

Aşağıdaki özellikler Phase 0 ve Prototype V1 kapsamında **kesinlikle yer almayacaktır**:

1. **Gerçek Para Cüzdanı (Production Real-Money Wallet):** 6493 sayılı Kanun ve TCMB düzenlemeleri kapsamında gerekli iş modeli, yasal/regülatif incelemeler ve lisanslı ödeme/elektronik para kuruluşu ortaklığı tamamlanana kadar gerçek para yatırma/çekme production geliştirmesi yapılmayacaktır (Bkz: `RISK-01`).
2. **Bilinmeyen POS Cihazı Donanım Entegrasyonu:** Mağazadaki fiziksel kasa markası ve API'si resmi olarak sağlanana kadar fiziksel yazarkasa entegrasyonu yapılmayacaktır. Tüm akış Store Operations KDS üzerinden yürütülecektir (Bkz: `ADR-003`).
3. **Masa Siparişi (Dine-in QR Masa Servisi):** İlk aşama yalnızca gel-al ("Order Ahead / Pickup") modelini hedefler.
4. **Adrese Teslimat (Delivery):** Kurye entegrasyonu, harita takip motoru vb. kapsam dışıdır.
5. **Gelişmiş Çok Şubeli Müşteri Seçimi:** Backend çok şubeli mimaride modellense de mobil kullanıcı arayüzü tek şube varsayımıyla sadeleştirilecektir.
6. **Abonelik Modelleri (Coffee Subscription):** Aylık kahve üyeliği paketi.
7. **Karmaşık Kurumsal CRM & Pazarlama Otomasyonu:** Segment bazlı otomatik push pazarlaması, kupon kodu jeneratörü vb. sonraki fazlara bırakılmıştır.
