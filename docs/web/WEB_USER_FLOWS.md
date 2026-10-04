# B+ Wellness Café — Web User Flows

**Workstream:** Website Workstream — Web Phase 1  
**Doküman Sürümü:** 1.0.0 (User Flows Specification)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — UX USER FLOWS  
**Roller:** Senior UX Architect, Senior Product Designer, Information Architect  

---

## 1. Genel Bakış ve Akış Haritası

B+ Wellness Café web sitesi, kullanıcının niyetine göre 5 temel etkileşim ve keşif akışını destekler. Tüm akışlar **Single-Page Application (SPA)** bağlamında sayfa yenilenmeden, yumuşak geçişler ve odak korumalı modallarla gerçekleşir.

```mermaid
graph TD
    START((Kullanıcı Girişi)) --> HERO[SEC-HERO]
    HERO -->|Akış A: Markayı Keşfetmek İsteyen| FLOW_A[FLOW WEB-A: Marka ve Felsefe Keşfi]
    HERO -->|Akış B: Doğrudan Menüye Bakan| FLOW_B[FLOW WEB-B: Kategori & Ürün Keşfi]
    HERO -->|Akış C: AI Meraklısı| FLOW_C[FLOW WEB-C: AI Barista Teaser Keşfi]
    HERO -->|Akış D: Sipariş Vermek İsteyen| FLOW_D[FLOW WEB-D: Pre-Order Demo Simülatörü]
    HERO -->|Akış E: Kafeye Gitmek İsteyen| FLOW_E[FLOW WEB-E: Şube, Saatler & Rota]
```

---

## 2. FLOW WEB-A — Marka ve Felsefe Keşfi (Brand Discovery)

### 2.1. Kullanıcı Amacı
Ziyaretçi B+ markasını ilk defa duymuştur; konseptin ne olduğunu, neden "Wellness Café" dendiğini ve Mineiro Coffee ile bağlantısını anlamak istemektedir.

### 2.2. Akış Adımları ve Sistem Yanıtı
1. **Giriş:** Kullanıcı ana sayfaya iniş yapar (`SEC-HERO`).
2. **Değer Önerisi Algısı:** *"İş gününe iyi bir +."* sloganını ve tek kökenli nitelikli kahve + adaptojen vaadini okur (3-5 saniye).
3. **Kaydırma / Eylem:** Kullanıcı `SEC-HERO` altındaki `Konsepti İncele` butonuna basar veya aşağı kaydırır.
4. **Anlar ile Özdeşleşme (`SEC-MOMENTS`):** 08:00 (uyanış/odak), 12:30 (hafif öğle arası) ve 15:00 (ikinci rüzgar) kartlarını inceler.
5. **Hikaye & Felsefe (`SEC-CONCEPT`):** Mineiro ustalığı, katkısız rafine şekersiz reçeteler ve hızlı gel-al felsefesini öğrenir.
6. **Sonuç / Geçiş:** `SEC-CONCEPT` altındaki `Menüyü Keşfet` linkiyle pürüzsüzce menüye akar.

```mermaid
sequenceDiagram
    autonumber
    actor U as Ziyaretçi
    participant H as SEC-HERO
    participant M as SEC-MOMENTS
    participant C as SEC-CONCEPT
    participant N as SEC-MENU-NAV

    U->>H: Sayfayı açar
    H-->>U: "İş gününe iyi bir +." & Değer rozetleri
    U->>M: Aşağı kaydırır / "Keşfet" tıklar
    M-->>U: Günün 3 kritik anı kartları
    U->>C: Hikaye bölümüne ulaşır
    C-->>U: Mineiro kahvesi & botanik felsefe manifestosu
    U->>N: "Menüyü Gör" butonuna tıklar
    N-->>U: Sayfa menü kategori çubuklarına yumuşakça odaklanır
```

---

## 3. FLOW WEB-B — Menü & Ürün Keşfi (Menu Discovery)

### 3.1. Kullanıcı Amacı
Kullanıcı ne içebileceğini, fiyat düzeyini, içerik temizliğini ve alerjen durumunu incelemek ister.

### 3.2. Akış Adımları ve Sistem Yanıtı
1. **Kategori Seçimi (`SEC-MENU-NAV`):** Kullanıcı kategori çiplerinden birine (örn: `Matcha & Glow` veya `Kahveler`) tıklar.
2. **Filtre Güncellemesi:** Menü gridi (`SEC-MENU-GRID`) sayfa yenilenmeden ilgili ürünleri listeleyecek şekilde anlık olarak filtrelenir (animasyon süresi: 250ms).
3. **Ürün Kartı İnceleme:** Listelenen ürün kartlarındaki diyet etiketlerine (Vegan, Rafine Şekersiz vb.), görseline ve `₺XX [DEMO]` fiyatına bakar.
4. **Detay Talebi:** Ürün kartındaki `Detaylı İncele` butonuna veya karta tıklar.
5. **Modal Açılışı (`MOD-PRODUCT`):** Ekran karartılır, ürün detay modalı açılır:
   - Şeker seviyesi ve gövde/asidite puanları.
   - Tam botanik reçete ve organik içerikler.
   - Alerjen uyarısı ve `DEMO DATA — NON-PRODUCTION` etiketi.
6. **Kapanış:** Kullanıcı `✕` butonu, ESC tuşu veya dış tık ile modalı kapatır; menüdeki önceki konumuna odak korunarak döner.

```mermaid
sequenceDiagram
    autonumber
    actor U as Ziyaretçi
    participant MN as SEC-MENU-NAV
    participant MG as SEC-MENU-GRID
    participant MP as MOD-PRODUCT

    U->>MN: "Matcha & Glow" çipine tıklar
    MN->>MG: Filtreyi günceller (Active State)
    MG-->>U: Yalnızca Matcha serisi 3 ürün kartı listelenir
    U->>MG: "Matcha Glow Latte" kartına tıklar
    MG->>MP: Modalı tetikler (Aria-expanded, focus trap)
    MP-->>U: Yüksek çözünürlüklü görsel, şeker oranı (1/5), alerjenler
    U->>MP: "Kapat" butonuna veya ESC tuşuna basar
    MP-->>U: Modal kapanır, odak karta geri döner
```

---

## 4. FLOW WEB-C — AI Barista Deneyimi (AI Discovery)

### 4.1. Kullanıcı Amacı
Kullanıcı web sitesindeki teknolojik yeniliği merak eder ve ruh haline göre kişiselleştirilmiş bir ürün önerisi görmek ister.

### 4.2. Akış Adımları ve Sistem Yanıtı
1. **Bölüme Varış (`SEC-AI-TEASER`):** Kullanıcı "Bugün Zihnin ve Bedenin Ne İstiyor?" başlığına gelir.
2. **Mod Seçimi:** Sunulan 3 ruh hali çipinden birini seçer:
   - `🧠 Zihinsel Odak`
   - `🧘 Sakinleşme & Zen`
   - `⚡ Temiz Enerji & Canlanma`
3. **Öneri Üretimi (Local Simulation):** Hiçbir dış API çağrısı yapılmaksızın, seçilen moda eşleşen mock kart yumuşak geçişle ekrana yansır (örn: *Matcha Collagen Zen Latte — %98 Eşleşme*).
4. **ADR-004 Grounding Notu:** Öneri kutusunun altında *"Yapay zekamız yalnızca menümüzdeki gerçek ürünleri önerir"* bilgilendirmesi görünür.
5. **Aksiyon:** Kullanıcı `Mobil Uygulamada AI ile Konuş (Demo)` butonuna tıklar.
6. **Sonuç:** Mobil uygulamanın yapay zeka barista özelliğini tanıtan kısa bilgilendirme bildirimi gösterilir.

```mermaid
sequenceDiagram
    autonumber
    actor U as Ziyaretçi
    participant AT as SEC-AI-TEASER
    participant ST as Local State Engine

    U->>AT: "🧠 Zihinsel Odak" çipine tıklar
    AT->>ST: Seçili mod = "FOCUS"
    ST-->>AT: Mock veri eşleşmesi döner (Lion's Mane Cold Brew)
    AT-->>U: Kart içeriği güncellenir (Fade transition 300ms)
    U->>AT: "Mobil Uygulamada AI ile Konuş (Demo)" tıklar
    AT-->>U: "AI Barista yakında B+ Mobil Uygulamasında! [PROTOTYPE]" toast mesajı
```

---

## 5. FLOW WEB-D — Ön Sipariş Simülatörü (Pre-Order Demo)

### 5.1. Kullanıcı Amacı
Kullanıcı web üzerinden kahve sipariş etmek, ödeme yapmak veya gel-al sürecinin nasıl işlediğini anlamak ister.

### 5.2. Akış Adımları ve Sistem Yanıtı
1. **Tetikleme:** Navigasyondaki `Ön Sipariş (Demo)` veya `SEC-PREORDER-DEMO` içindeki `Ön Sipariş Deneyimini Gör` butonuna basar.
2. **Modal Açılışı (`MOD-PREORDER`):** Demo sipariş penceresi ekrana gelir.
3. **Simüle Edilen Adımlar:**
   - **Adım 1:** Örnek seçili ürün gösterilir (*Lion's Mane Cold Brew*).
   - **Adım 2:** Tahmini gel-al saati seçimi (*10 dk sonra / 08:45*).
   - **Adım 3:** Sipariş özeti ve Kadıköy Moda örnek şubesi listelenir.
4. **Net Demo Sınırı Bildirimi:**
   - Modal içerisinde belirgin kırmızı/amber rozet yer alır:  
     `[PROTOTİP MODU — GERÇEK SİPARİŞ / ÖDEME ALINMAZ]`
   - Metin: *"Bu web sitesi konsept vitrinidir. Gerçek sipariş şube açılışıyla birlikte B+ Müşteri Mobil Uygulaması üzerinden alınacaktır."*
5. **Hafif E-posta Kaydı (Opsiyonel):** Kullanıcı açılış günü indiriminden haberdar olmak isterse e-posta kutucuğunu doldurur.
6. **Kapanış:** `Anladım & Kapat` butonu ile modal kapatılır.

```mermaid
sequenceDiagram
    autonumber
    actor U as Ziyaretçi
    participant B as CTA Butonu
    participant MO as MOD-PREORDER

    U->>B: "Ön Sipariş (Demo)" tıklar
    B->>MO: Modalı açar
    MO-->>U: Simüle edilmiş sipariş adımları (Ürün, Saat, Tutar)
    MO-->>U: [GERÇEK ÖDEME/SİPARİŞ ALINMAZ] rozeti ve açıklaması
    U->>MO: E-posta adresini girer ve "Gönder" tıklar (Local mock)
    MO-->>U: "Kaydınız alındı! Açılışta görüşmek üzere." bildirimi
    U->>MO: "Anladım & Kapat" tıklar
    MO-->>U: Modal kapanır
```

---

## 6. FLOW WEB-E — Mağaza & Lokasyon Keşfi (Store Discovery)

### 6.1. Kullanıcı Amacı
Kullanıcı kafenin adresini, çalışma saatlerini, sipariş kesilme kuralını öğrenmek ve yol tarifi almak ister.

### 6.2. Akış Adımları ve Sistem Yanıtı
1. **Gezinme:** Kullanıcı üst menüden `Lokasyon` linkine basar veya sayfayı aşağı kaydırır.
2. **Bölüm Görünümü (`SEC-LOCATION-HOURS`):**
   - Şube Adı: `Kadıköy / İstanbul — ÖRNEK LOKASYON (TBD — EMPLOYER DATA REQUIRED)`
   - Durum: `[KURULUM AŞAMASINDA — DEMO]`
   - Adres: `Moda Caddesi No: 42 (DEMO ADDRESS / TBD)`
   - Çalışma Saatleri: Hafta içi 07:30 – 22:00, Hafta sonu 08:30 – 23:00 `[DEMO VALUE ONLY / TBD]`
   - Sipariş Kesilme Süresi: Kapanıştan 15 dk önce `[DEMO VALUE ONLY / CONFIGURABLE — DEC-10]`
3. **Harita Kartı Etkileşimi:** Kullanıcı statik örnek krokiyi inceler.
4. **Rota Aksiyonu:** `Haritada Yol Tarifi Al (Demo)` linkine basar.
5. **Sistem Yanıtı:** Kullanıcıya örnek harita koordinatları üzerinden yeni sekmede harici arama açılır veya demo bağlantı uyarısı verilir.

```mermaid
sequenceDiagram
    autonumber
    actor U as Ziyaretçi
    participant N as SEC-NAV
    participant LH as SEC-LOCATION-HOURS
    participant Ext as Harita Servisi

    U->>N: "Lokasyon" linkine tıklar
    N->>LH: Sayfayı yumuşakça #location hedefine kaydırır
    LH-->>U: Kadıköy Moda örnek adresi ve saatleri sunar
    LH-->>U: "Kapanıştan 15 dk önce sipariş kesilir" kuralını gösterir
    U->>LH: "Haritada Yol Tarifi Al" tıklar
    LH->>Ext: Demo harita sorgusu açar (target="_blank")
```
