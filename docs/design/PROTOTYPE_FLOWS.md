# B+ Wellness Café — Interactive Prototype Flows Specification

**Doküman Sürümü:** 1.0.0 (Phase 2 — High-Fidelity UI/UX & Interactive Prototype)  
**Tarih:** 2026-09-30  
**Statü:** ACTIVE — PROTOTYPE FLOW SPECIFICATION  
**Referans:** [docs/ux/CUSTOMER_USER_FLOW.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/CUSTOMER_USER_FLOW.md), [docs/ux/AI_BARISTA_USER_FLOW.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/AI_BARISTA_USER_FLOW.md)

---

## 1. Genel Bakış

Bu doküman, Phase 2 kapsamında geliştirilen çalışan interaktif prototipin 4 ana kullanıcı yolculuğunu (User Journeys) ve bu yolculuklardaki ekran geçişlerini, mock durum değişimlerini ve kullanıcı etkileşimlerini tanımlar.

---

## 2. FLOW A — Normal Sipariş Yolculuğu (Primary Order Journey)

Müşterinin ana sayfadan başlayıp siparişini teslim alana kadar olan akışı:

```
[ 1. Home ] 
     │  (Kullanıcı "Menüyü Gör" veya Kategoriye basar)
     ▼
[ 2. Menu ] 
     │  (Kullanıcı "Golden Turmeric Oat Latte" kartına tıklar)
     ▼
[ 3. Product Detail ] 
     │  (Kullanıcı besin değerlerini inceler, "Özelleştir"e tıklar)
     ▼
[ 4. Customize Modal ] 
     │  (Büyük Boy + Yulaf Sütü + Şekersiz + Kolajen seçer, "Sepete Ekle"ye basar)
     ▼
[ 5. Cart Drawer ] 
     │  (Kalemler listelenir, ara toplam doğrulanır, "Siparişi Tamamla"ya basar)
     ▼
[ 6. Auth Gate (Login Simulation) ] 
     │  (Misafir ise "Giriş Yap" modalı açılır, "Hızlı Demo Giriş" ile token simüle edilir)
     ▼
[ 7. Checkout Screen ] 
     │  (B+ Pilot Şube seçili, ASAP teslimat, "B+ Sandbox Wallet" veya "Kart" seçilir)
     ▼
[ 8. Sandbox Payment ] 
     │  (Simüle "Ödeme Yap" basılır -> 1.5 sn spinner -> Mock Başarı)
     ▼
[ 9. Order Confirmation ] 
     │  (Başarı animasyonu, Sipariş No: #B-108, "Siparişi Takip Et"e tıklar)
     ▼
[ 10. Order Tracking ] 
        (CONFIRMED -> PREPARING -> READY -> COMPLETED simülasyon adımları)
```

---

## 3. FLOW B — AI Barista Danışmanlık ve Sipariş Yolculuğu (AI Order Flow)

Doğal dille başlayan kişiselleştirilmiş içecek siparişi:

```
[ 1. Home ] 
     │  ("Modunu Anlat, Kahveni Bulalım" banner'ına veya AI sekmesine tıklar)
     ▼
[ 2. AI Barista Chat Screen ] 
     │  (Kullanıcı "Spor öncesi enerji" hazır çipine tıklar veya metin yazar:
     │   "Bitkisel sütlü, hafif ama beni ayıltacak bir şey istiyorum.")
     ▼
[ 3. Mock AI Response Simulation ] 
     │  (1.2 sn "Barista düşünüyor..." üç nokta animasyonu çalışır)
     ▼
[ 4. AI Recommendation Card ] 
     │  ("Matcha Glow Coconut Boost" önerilir: %94 Eşleşme, Barista açıklaması)
     │  (Kullanıcı "Ürünü İncele & Özelleştir"e tıklar)
     ▼
[ 5. Product Detail / Customize ] 
     │  (Buz ve tatlılık ayarını kontrol eder)
     ▼
[ 6. Cart Drawer ] 
        (Doğrudan sepete aktarılır -> Flow A Checkout adımına bağlanır)
```

---

## 4. FLOW C — Store Operations KDS Yolculuğu (Kitchen Display)

Baristanın tezgahta siparişi karşılayıp tamamlama akışı:

```
[ 1. Order Board (KDS Panosu) ] 
     │  (Websocket/Polling simülasyonu ile yeni sipariş "#B-108 Murat K." düşer)
     │  (Sesli uyarı "Chime" çalar, NEW sütununda sarı rozetle belirir)
     ▼
[ 2. Order Detail Drawer Açılışı ] 
     │  (Barista sipariş kartına tıklar: "Büyük Boy, Yulaf Sütü, Şekersiz, +Kolajen" kalın vurgulu)
     ▼
[ 3. START PREPARING ] 
     │  (Barista "Hazırlamaya Başla"ya tıklar -> Sipariş PREPARING sütununa geçer, sayaç başlar)
     ▼
[ 4. MARK AS READY ] 
     │  (Barista "Hazır" butonuna basar -> READY sütununa taşınır, simüle push bildirimi tetiklenir)
     ▼
[ 5. COMPLETE ORDER ] 
        (Müşteri tezgaha gelir, barista "Tamamla"ya basar -> Sipariş COMPLETED sütununa arşivlenir)
```

---

## 5. FLOW D — Admin Panel Ürün Yönetimi Yolculuğu

Genel merkez yöneticisinin ürün ekleme ve anlık stok açma/kapama akışı:

```
[ 1. Admin Dashboard ] 
     │  (Sol menüden "Ürünler" sekmesine tıklar)
     ▼
[ 2. Products List Table ] 
     │  (Ürünler tablosu listelenir, "Matcha Latte" satırındaki düzenle ikonuna tıklar)
     ▼
[ 3. Product Editor (7 Sekmeli Modal) ] 
     │  ├── Sekme 1: Temel Bilgiler (Ad, Açıklama, Baz Fiyat)
     │  ├── Sekme 2: Availability (Stok Açık/Kapalı Toggle)
     │  ├── Sekme 3: Customization Grupları (Süt, Boyut eşleştirmesi)
     │  ├── Sekme 4: Ingredients (Bileşen etiketleri)
     │  ├── Sekme 5: Allergens (Alerjen kutuları)
     │  ├── Sekme 6: Nutrition (Kalori, Protein, Karb)
     │  └── Sekme 7: AI Metadata (Kafein mg, Tatlılık 1-5, Tat etiketleri)
     ▼
[ 4. Availability Toggle & Save ] 
        (Pilot şube için stok durumu değiştirilir -> "Değişiklikleri Kaydet"e basılır)
```
