# B+ Wellness Café — Web Interaction Model & State Specification

**Workstream:** Website Workstream — Web Phase 1  
**Doküman Sürümü:** 1.0.0 (Interaction Model Blueprint)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — INTERACTION MODEL  
**Roller:** Senior UX Architect, Senior Frontend Architect, Design System Engineer  

---

## 1. Genel Etkileşim İlkeleri

B+ Wellness Café web etkileşim modeli; sakin, dingin, gecikmesiz ve zihni yormayan bir mikro animasyon kütüphanesi üzerine inşa edilmiştir:
- **Süreler:** Hızlı durum geçişleri `150ms – 250ms`, yapısal açılışlar (modal/drawer) `300ms – 400ms`.
- **Eğriler (Easing):** Standart arayüz geçişleri için `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) veya `ease-out`.
- **Azaltılmış Hareket (Reduced Motion):** Kullanıcının işletim sisteminde `prefers-reduced-motion: reduce` aktif olduğunda animasyonlar anlık duruma (instant cut) geçer.

---

## 2. Temel Bileşen Etkileşim Durumları

### 2.1. SEC-NAV (Sticky Header & Mobil Çekmece)
- **Normal (Default):** Şeffaf veya Cream zemin, Deep Olive logo ve linkler.
- **Scrolled (Sayfa Kaydırıldığında):** Yarı saydam Warm White zemin (`rgba(255, 253, 248, 0.9)`), `backdrop-filter: blur(12px)`, ince alt kenarlık (`color.neutral.border`), hafif gölge (`shadow.soft`).
- **Active Link:** İlgili bölüme gelindiğinde link metni kalınlaşır (SemiBold) ve altında 2px Olive vurgu çizgisi belirir.
- **Mobile Hamburger Button:**
  - *Default:* 24px zeytin yeşili 3 yatay çizgi ikonu.
  - *Tıklandığında (Open):* Sağdan açılan çekmece (`width: 80vw, max-width: 320px`), arka planda ekran karartması (`rgba(0,0,0,0.5)`). İkon ✕ işaretine dönüşür.
  - *Link Tıklandığında (Close):* Çekmece sağa kayarak kapanır (300ms), sayfa ilgili bölüme kaydırılır.

---

### 2.2. SEC-MENU-NAV (Kategori Filtre Çipleri)
Kullanıcının menüyü keşfederken kullandığı 8 çipli buton grubu:

| Durum | Görsel Özellikler | Erişilebilirlik Nitelikleri |
| :--- | :--- | :--- |
| **Unselected (Boşta)** | Arka plan: `color.surface.warmWhite`, Kenarlık: `1px solid color.neutral.border`, Metin: `color.neutral.espresso`. | `aria-selected="false"` |
| **Hover (Masaüstü)** | Arka plan: `color.surface.cream`, Kenarlık: `color.primary.sage`, Hafif yükselme (-1px). | — |
| **Selected (Aktif)** | Arka plan: `color.primary.deepOlive`, Kenarlık: Yok, Metin: `color.surface.warmWhite` (Bold). | `aria-selected="true"`, `aria-current="true"` |
| **Focus-Visible** | 2px dış çerçeve halkası (`outline: 2px solid color.primary.olive; outline-offset: 2px`). | Klavye sekme (Tab) odağı |
| **Transition** | Arka plan ve metin rengi yumuşak geçişi: `200ms ease`. | Menü gridi 250ms içinde solma (fade) ile güncellenir. |

---

### 2.3. SEC-MENU-GRID (Ürün Kartları)
- **Idle (Normal):** Kart zemini `color.surface.warmWhite`, kenarlık `1px solid color.neutral.border`, köşe yarıçapı `radius.lg` (16px), gölge `shadow.soft`.
- **Hover (Masaüstü Fare):** Kart 4px yukarı süzülür (`transform: translateY(-4px)`), gölge derinleşir (`shadow.card`), ürün görseli hafif büyür (`transform: scale(1.03)`).
- **Press / Active:** Kart 1px aşağı iner (`transform: translateY(-1px)`).
- **Focus:** Kart çevresinde belirgin odak halkası; `Enter` veya `Space` tuşuna basıldığında `MOD-PRODUCT` açılır.

---

### 2.4. MOD-PRODUCT (Ürün Detay Modalı)
- **Open Trigger:** Ürün kartına tıklandığında tetiklenir.
- **Görsel Geçiş:**
  - *Masaüstü:* Ekran karartması (overlay) kararır (250ms fade-in). Modal pencere merkezden hafif ölçeklenerek (`scale: 0.96 ➔ 1.0`, 300ms) açılır.
  - *Mobil:* Alttan yukarı kayan yumuşak Bottom Sheet olarak açılır (350ms slide-up).
- **Focus Trap:** Odak doğrudan modal içi ilk etkileşimli elemana (Kapat butonu veya Ürün Başlığı) kilitlenir. Sayfa arkasındaki tab navigasyonu engellenir.
- **Close Triggers:**
  - `✕` Kapat butonuna tıklama / dokunma.
  - Modal dışındaki karartmalı alana tıklama.
  - Klavyeden `Escape (ESC)` tuşuna basma.
  - Mobilde parmakla aşağı hızlı kaydırma (drag-to-dismiss gesture).
- **Restore Focus:** Modal kapandığında odak, modalı açan ürün kartına eksiksiz iade edilir.

---

### 2.5. SEC-AI-TEASER (AI Barista Etkileşimi)
- **Mood Chips (Odak, Zen, Enerji):**
  - Tıklandığında seçili duruma geçer (`color.accent.latte` bordür ve Deep Olive metin).
  - Öneri kartı alanı `opacity: 0` olur (100ms), 200ms içinde yeni botanik reçete içeriğiyle `opacity: 1` olarak yenilenir.
- **CTA Butonu ("Mobil Uygulamada AI Barista'yı Keşfet"):**
  - Tıklandığında gerçek bir yapay zeka servisine istek atılmaz; ekranda 3 saniye süren hafif bilgilendirme rozeti / toast açılır:
    *"AI Barista deneyimi yakında B+ Müşteri Mobil Uygulamasında! [PROTOTİP VİTRİNİ]"*

---

### 2.6. MOD-PREORDER (Ön Sipariş Demo Simülatörü)
- **Open Trigger:** `Ön Sipariş (Demo)` butonlarına basıldığında açılır.
- **Adım Geçişleri (Step 1 ➔ Step 2 ➔ Step 3):**
  - Buton tıklandığında anlık olarak bir sonraki adım kartı yatay kayarak görünür.
- **Form Alanı (E-posta Bülteni):**
  - *Default:* Açık gri kenarlık, yer tutucu: "E-posta adresinizi girin..."
  - *Focus:* Zeytin yeşili kenarlık (`2px solid color.primary.olive`).
  - *Submit (Gönder):* Local simülasyon çalışır; 400ms loading çarkı döner, ardından "Kaydınız alındı! Açılışta görüşmek üzere. [DEMO]" başarı metni çıkar. Hiçbir gerçek sunucuya POST yapılmaz.
- **Close Action:** `Anladım & Kapat` tıklandığında modal kapanır.

---

### 2.7. CTA Buton Durumları (Primary & Secondary)

| Buton Türü | Normal (Default) | Hover (Masaüstü) | Active (Basılı) | Focus-Visible | Disabled |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary CTA** (*Menüyü Keşfet*) | Zemin: Deep Olive (`#34422D`), Metin: Warm White | Zemin: Olive (`#68734B`), Hafif yukarı süzülme (-2px) | Zemin: `#2B3624` (Koyu basma hissi) | 2px dış halka (Warm White zemin üstünde Deep Olive) | Zemin: Sage opaklık %50, İmleç: not-allowed |
| **Secondary CTA** (*Bizi Ziyaret Et*) | Zemin: Şeffaf, Kenarlık: 1.5px Deep Olive, Metin: Deep Olive | Zemin: Cream (`#F4F0E6`), Kenarlık: Olive | Zemin: `#E5DFD0` | 2px dış halka | Opaklık %40, Kenarlık soluk |
