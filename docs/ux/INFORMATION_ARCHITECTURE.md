# B+ Wellness Café — Information Architecture (IA)

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** APPROVED FOR PHASE 1 (FROZEN CANDIDATE)  
**Kaynak:** [docs/product/PRODUCT_DEFINITION.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/product/PRODUCT_DEFINITION.md) (Phase 0 FROZEN)

---

## 1. Genel Bilgi Mimarisi Ağacı (System-Wide IA Tree)

Platform 3 ana kullanıcı arayüzünden oluşur:
1. **Customer Mobile App** (iOS / Android — React Native Expo)
2. **Store Operations (KDS)** (Tablet / Desktop Web — Next.js)
3. **Admin Panel** (Desktop Web — Next.js)

```
B+ Wellness Café Platform
│
├── 1. Customer Mobile App
│   ├── [Root / Lifecycle]
│   │   ├── Splash Screen
│   │   └── Welcome / Onboarding Screen
│   ├── [Auth Stack]
│   │   ├── Login (Email / Phone + Password)
│   │   ├── Register (Name, Email, Phone, Pass, Terms)
│   │   └── Forgot Password (Optional Reset Flow)
│   ├── [Main Tab Navigation] (Bottom Tabs - 5 Tabs)
│   │   ├── Tab 1: Home (Highlights, Store Banner, Fast Reorder, AI Widget)
│   │   ├── Tab 2: Menu (Categories, Search Bar, Wellness Filter Pills, Product Grid)
│   │   ├── Tab 3: AI Barista (Conversational Wellness & Drink Advisor)
│   │   ├── Tab 4: Rewards (Tier Progress, Point Balance, History, Redeemable Offers - RULE TBD)
│   │   └── Tab 5: Profile (User Details, Dietary Prefs, Wallet Shortcut, History, Settings)
│   ├── [Product & Customization Stack / Modals]
│   │   ├── Search & Filter Modal (Dietary, Caffeine, Temperature, Calories)
│   │   ├── Product Detail Screen (Image, Nutrition, Allergens, Base Price)
│   │   └── Customize Product Modal (Size, Milk, Syrups, Wellness Boosts, Temperature)
│   ├── [Order & Checkout Stack]
│   │   ├── Cart Drawer / Screen (Item breakdown, Customization tags, Subtotal)
│   │   ├── Auth Guard (Intercepts guest checkout -> prompts Login/Register)
│   │   ├── Checkout Screen (Pickup Store, Time ETA, Sandbox Wallet / Card Toggle)
│   │   ├── Payment Screen / Gateway Simulator (Provider-agnostic / Sandbox)
│   │   ├── Order Confirmation Screen (Success splash, Order Number, Pickup instructions)
│   │   └── Order Tracking Screen (Live status bar: NEW -> PREPARING -> READY -> COMPLETED)
│   ├── [Wallet Stack] (Accessed from Profile & Checkout)
│   │   ├── B+ Wallet Screen (Sandbox Balance, Past Ledger Entries - DEMO ONLY)
│   │   └── Wallet Add Balance Screen (Sandbox top-up amounts: 100, 250, 500 TL - DEMO ONLY)
│   └── [Account & Support Stack]
│       ├── Order History Screen (Past receipts, "Reorder" action)
│       └── Settings Screen (Notifications, Language, Legal/Privacy, Logout)
│
├── 2. Store Operations (KDS — Kitchen Display System)
│   ├── Authentication (PIN / Staff Credentials Guard)
│   ├── Store Selector (Multi-store ready header, defaults to Pilot Store)
│   ├── Order Board Screen (Live Kanban: NEW -> CONFIRMED -> PREPARING -> READY -> COMPLETED)
│   ├── Order Detail Modal / Flyout (Customer info, item list with explicit customizations, timers)
│   └── Quick Stock Toggle Modal ("86 Board" — Anlık tükenen ürün/malzeme aç/kapa)
│
└── 3. Admin Panel (HQ Management Console)
    ├── Auth Guard (Role: ADMIN / STORE_MANAGER)
    ├── Dashboard (Daily Metrics, Order Volume, Peak Hours, Active Users)
    ├── Menu Management (Category hierarchy, display order)
    ├── Product Management (CRUD: Base info, Variants, Customization groups, Ingredients, Allergens, Nutrition, AI metadata, Availability)
    ├── Orders Management (Full historical log, order drilldown, manual refund/cancel placeholder - REFUND POLICY TBD)
    ├── Users Management (Customer list, staff roles, account status)
    ├── Rewards Engine Settings (Configurable point rules, active campaigns — NO hardcoded points, RULE TBD)
    ├── AI Barista Settings (Prompt parameters, guardrail thresholds, embedding sync status)
    └── Store Settings (Operating hours, configurable order cutoff minutes, prep time buffer)
```

---

## 2. Customer App Navigasyon Hiyerarşisi & Erişim Kuralları

### 2.1. Alt Navigasyon (Bottom Navigation Bar)
Mobil uygulamada kalıcı 5 alt sekme (Bottom Tab) bulunur:
- **Home:** Dinamik karşılama, seçili pilot şube çalışma durumu, hızlı sipariş (Recent Order), AI Barista tanıtım kartı, öne çıkan wellness içecekleri.
- **Menu:** Kategori listesi (Sıcak Kahveler, Soğuk İçecekler, Fonksiyonel Wellness, Atıştırmalıklar), arama çubuğu ve etiket filtreleri (Vegan, Glutensiz, Düşük Kafein).
- **AI Barista:** Doğal dilde içecek asistanı sohbet arayüzü ve akıllı öneri kartları.
- **Rewards:** Puan/yıldız bakiyesi, demo ödül kuralları ve kazanım geçmişi (`RULE TBD / DEMO_RULE`).
- **Profile:** Kişisel bilgiler, B+ Wallet bağlantısı (`SANDBOX ONLY`), geçmiş siparişler, diyet tercihleri ve ayarlar.

### 2.2. Misafir (Guest) vs. Kimlik Doğrulanmış (Authenticated) Durum Matrisi
Phase 0 `ASM-03` kararı gereğince:
- **Misafir Erişimi (Guest Allowed):** Splash, Welcome, Home, Menu, Search, Filter, Product Detail, Customize Product, AI Barista Chat, AI Recommendations.
- **Auth Guard Bariyeri (Authentication Required):** 
  - Cart -> "Checkout / Siparişi Tamamla" butonuna tıklandığında kullanıcı giriş yapmamışsa doğrudan `Login/Register` modalı açılır. Başarılı girişten sonra akış kesintiye uğramadan `Checkout` ekranına döner.
  - Profile tabında sipariş geçmişi ve cüzdana erişim için de kimlik doğrulama zorunludur.

---

## 3. Store Operations (KDS) Bilgi Mimarisi

KDS tablet ortamında baristanın hızlı ve hatasız aksiyon alabilmesi için yatay Kanban hiyerarşisi uygulanır:
- **Header:** Şube Adı (`B+ Pilot Store`), Çalışma Durumu (Açık/Kapalı), Canlı Saat, Bekleyen Sipariş Sayısı, "86 / Hızlı Stok" butonu.
- **Kanban Sütunları:**
  1. `NEW / CONFIRMED` (Ödemesi doğrulanmış, baristanın kabulünü bekleyen yeni siparişler)
  2. `PREPARING` (Baristanın hazırlamaya başladığı siparişler — hazırlık süresi sayacı çalışır)
  3. `READY` (Tezgahta müşteriyi bekleyen siparişler — müşteriye "Hazır" bildirimi gitmiştir)
  4. `COMPLETED` (Müşteri tarafından teslim alınmış son siparişler)
- **Order Card Detayı:** Sipariş Numarası (`#B-108`), Müşteri Adı, Kaç dakika önce verildiği, Ürünler ve **kalın/vurgulu özelleştirmeler** (Örn: **Yulaf Sütü, Ekstra Shot, Şekersiz**).

---

## 4. Admin Panel Bilgi Mimarisi

Admin paneli, genel merkezin tüm operasyonu merkezi olarak denetlemesini sağlar:
- **Sidebar Navigasyonu:** Dashboard, Menü & Kategoriler, Ürünler, Siparişler, Müşteriler & Personel, Sadakat (Rewards), AI Barista Yönetimi, Şube Ayarları.
- **Ürün Yönetimi İç Mimari Sekmeleri:**
  1. *Temel Bilgiler:* Ürün Adı, Açıklama, Kategori, Baz Fiyat, Görsel.
  2. *Varyantlar & Boyutlar:* Küçük, Standart, Büyük fiyat farkları.
  3. *Özelleştirme Grupları:* Bağlı gruplar (Süt Seçimi, Şurup, Ekstra Shot vb.).
  4. *İçerik & Reçete:* Malzemeler (Ingredients), Alerjenler (Allergens).
  5. *Besin Değerleri (Nutrition):* Kalori (kcal), Protein (g), Karbonhidrat (g), Şeker (g), Yağ (g).
  6. *AI & Wellness Metadata:* Kafein Seviyesi (mg), Tatlılık Derecesi (1-5), Yoğunluk (1-5), Tat Etiketleri (`nutty`, `fruity`, `spicy`), Beslenme Etiketleri (`vegan`, `keto`, `gluten-free`).
  7. *Şube & Stok Durumu:* Pilot şubede aktif/pasif durumu.
