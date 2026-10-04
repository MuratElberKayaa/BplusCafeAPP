# B+ Wellness Café — Web Implementation Handoff & Technical Blueprint

**Workstream:** Website Workstream — Web Phase 2  
**Doküman Sürümü:** 1.0.0 (Implementation Handoff Specification for Web Phase 3)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — IMPLEMENTATION HANDOFF  
**Roller:** Senior Web Product Designer, Senior Frontend Architect, Design System Specialist  

---

## 1. Genel Geliştirici Yönergeleri (Developer Guidelines for Web Phase 3)

Bu doküman, **Web Phase 3 (Frontend Implementation)** geliştirme aşamasına girdiğinde mühendislik ekibinin takip edeceği ana uygulama kılavuzudur:
- **Teknoloji Yönelimi:** Modern Single-Page Application (SPA) yaklaşımı (Next.js / React / TypeScript / Tailwind CSS mimarisi).
- **Tasarım Jetonları:** Tüm renkler, fontlar, boşluklar ve gölgeler doğrudan `docs/design/DESIGN_SYSTEM.md` dosyasındaki token karşılıklarıyla kullanılmalıdır.
- **İçerik Kaynağı:** Tüm metinler harfiyen `docs/web/design/WEB_COPY_DECK.md` üzerinden alınmalı; hiçbir uydurma veya tıbbi iddia eklenmemelidir.
- **Demo Güvencesi:** Hiçbir gerçek sunucuya sipariş, ödeme veya yapay zeka isteği gönderilmeyecektir.

---

## 2. 14 Bölümün Eksiksiz Geliştirici El Kitabı (Handoff Specifications)

### 1. SEC-NAV
- **Component Name:** `Navbar` / `MobileDrawer`
- **Design Tokens:**
  - Zemin: `color.surface.warmWhite` (`rgba(255, 253, 248, 0.88)`), Blur: `backdrop-blur-md`
  - Metin / Link: `color.primary.deepOlive` (`#34422D`), Hover: `color.primary.olive` (`#68734B`)
  - Kenarlık: `1px solid color.neutral.border` (`#E3DEC3`)
- **Layout:** Flex row, justify-between, items-center. Desktop max-width: 1200px.
- **Assets:** `b-plus-monogram.svg`, `icon-menu.svg`, `icon-close.svg`.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 1.
- **Interaction:** Scroll dinleyicisi (`scrollY > 40px` ise zemin ve gölge aktifleşir). Hamburger tıklandığında çekmece açılır. Anchor tıklamalarında smooth scroll.
- **Responsive:** <1024px Hamburger + Çekmece; >=1025px Tam yatay gezinme barı.
- **Accessibility:** `<header role="banner">`, `<nav aria-label="Ana Gezinme">`, butonlarda `aria-label`, çekmecede focus trap.
- **Demo Boundary:** Tamamen yerel gezinme, dış API bağımlılığı yoktur.

---

### 2. SEC-HERO
- **Component Name:** `HeroSection`
- **Design Tokens:**
  - Display Font: `text-display` (56px Desktop / 36px Mobile), ExtraBold, Deep Olive.
  - Slogan / Rozet: `color.primary.sage`, `color.surface.cream`.
  - Primary CTA: Deep Olive dolgu, Warm White yazı (`color.surface.warmWhite`).
- **Layout:** Desktop: 12-sütun split (%45 metin / %55 görsel). Mobile: dikey yığın.
- **Assets:** `hero-coldbrew-travertine.webp` (16:9 Desktop, 4:5 Mobile).
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 2.
- **Interaction:** Mount anında 400ms fade-in-up animasyonu. CTA hover'da translateY(-2px).
- **Responsive:** Dikey akıştan 12-sütunlu masaüstü düzenine akıcı genişleme.
- **Accessibility:** Sayfadaki tek `<h1 id="hero-title">` başlığı burada yer alır.
- **Demo Boundary:** Statik marka vitrini.

---

### 3. SEC-MOMENTS
- **Component Name:** `MomentsSection` & `MomentCard`
- **Design Tokens:**
  - Kart Zemin: `color.surface.warmWhite`, Kenarlık: `color.neutral.border`, Radius: `radius.xl` (20px).
  - Zaman Rozeti: `color.accent.latte` zemin üstünde Deep Olive.
- **Layout:** Desktop: `grid-cols-3 gap-8`. Mobile: `scroll-snap-x mandatory` yatay karusel.
- **Assets:** `icon-time-0800.svg`, `icon-time-1230.svg`, `icon-time-1500.svg`.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 3. Safe copy: *"dengeli asidite"*, *"hafiflik"*.
- **Interaction:** Kart linkine basıldığında sayfayı `#menu` alanına kaydırır ve ilgili kategoriyi aktif eder.
- **Responsive:** Mobilde parmakla kaydırma; masaüstünde 3 sütunlu sabit ızgara.
- **Accessibility:** `<section aria-labelledby="moments-title">`, her kart için `<h3>`.
- **Demo Boundary:** Reçeteler mock veridir (`DEMO DATA — NON-PRODUCTION`).

---

### 4. SEC-CONCEPT
- **Component Name:** `ConceptSection`
- **Design Tokens:**
  - Zemin: `color.surface.cream`, Tipografi: Deep Olive & Espresso.
  - Vurgular: 1px Sage monoline botanik çizgiler.
- **Layout:** Desktop: 2 Sütun (%45 görsel sol, %55 manifesto sağ). Mobile: Dikey sıra.
- **Assets:** `concept-roasting-matcha.webp`, `botanical-olive-branch.svg`.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 4.
- **Interaction:** Görsel ve metin bloklarında hafif dikey paralaks veya fade-in.
- **Responsive:** Mobilde dikey tek sütun; tablette ve masaüstünde 2 sütun.
- **Accessibility:** `<section aria-labelledby="concept-title">`, semantik liste (`<ul>/<li>`).
- **Demo Boundary:** Marka manifestosu, işveren bağımsız.

---

### 5. SEC-MENU-NAV
- **Component Name:** `MenuNavFilter` & `CategoryPill`
- **Design Tokens:**
  - Çip Boyut: H: 42px, Radius: 999px.
  - Default: Warm White zemin, Border kenarlık.
  - Active: Deep Olive dolgulu zemin, Warm White metin.
- **Layout:** Desktop: Ortalanmış flex-row. Mobile: `overflow-x-auto` yatay kaydırılabilir bar.
- **Assets:** İsteğe bağlı minimalist kategori SVG ikonları.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 5. 8 Kategori listesi.
- **Interaction:** Çip tıklandığında `activeCategory` state'i güncellenir; `SEC-MENU-GRID` 250ms içinde solup filtrelenir.
- **Responsive:** Mobilde kenardan taşan swipe bar; masaüstünde ortalanmış sabit bar.
- **Accessibility:** `role="tablist"`, her çip için `role="tab"`, `aria-selected="true/false"`.
- **Demo Boundary:** Başlık altında zorunlu not: *"Menü ve fiyatlar örnek içeriktir."*

---

### 6. SEC-MENU-GRID
- **Component Name:** `MenuGrid` & `ProductCard`
- **Design Tokens:**
  - Kart Zemin: `color.surface.warmWhite`, Gölge: `shadow.soft` (Hover: `shadow.card`).
  - Rozet: Sage zemin, Deep Olive metin (`radius.sm`).
  - Fiyat: 16px SemiBold Deep Olive.
- **Layout:** Desktop: `grid-cols-3 gap-8`. Mobile: `grid-cols-1 gap-6`.
- **Assets:** 12 Mock ürün görseli (`packages/types/src/mocks/index.ts` türevi).
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 6.
- **Interaction:** Karta veya "Detaylı İncele" butonuna tıklandığında `selectedProduct` state'i atanır ve `MOD-PRODUCT` açılır.
- **Responsive:** 1 sütundan (mobil) 2 sütuna (tablet) ve 3 sütuna (masaüstü) geçiş.
- **Accessibility:** Her kart `article`, ürün adı `<h3>`, buton `aria-haspopup="dialog"`.
- **Demo Boundary:** Fiyatlar `₺XX.XX [DEMO]` olarak sunulur; e-ticaret sepet butonu yoktur.

---

### 7. MOD-PRODUCT
- **Component Name:** `ProductModal` / `ProductBottomSheet`
- **Design Tokens:**
  - Desktop Modal: Max-width 720px, Radius: 24px, Overlay: `rgba(43, 35, 30, 0.65)`.
  - Mobile Sheet: Height 85vh, Radius-top: 24px.
  - Puan Göstergeleri: 5 basamaklı daire dizisi (Aktif: Olive, Pasif: Border).
- **Layout:** Desktop: 2 Sütun (%45 görsel sol, %55 duyusal reçete sağ). Mobile: Dikey kaydırılabilir panel.
- **Assets:** Seçili ürün yüksek çözünürlüklü görseli, `icon-close.svg`.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 7. Safe copy: *"Yumuşak Asidite Profili"*.
- **Interaction:** ESC tuşu, dış tık veya Kapat butonuyla kapanır. Focus trap etkindir.
- **Responsive:** 768px altında Bottom Sheet; 769px üstünde merkez modal.
- **Accessibility:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby="product-modal-title"`, odak kilitlenir ve kapanışta geri verilir.
- **Demo Boundary:** Alt kısımda 11px zorunlu caption: *"Demo ürün verisi — Çevrim içi sepet kapalıdır."*

---

### 8. SEC-AI-TEASER
- **Component Name:** `AiTeaserSection` & `AiRecommendationCard`
- **Design Tokens:**
  - Ada Kartı: Zemin Warm White, Çerçeve: `1.5px solid #D8B98C` (Latte).
  - Rozet: Latte / Sage zemin, Deep Olive metin.
- **Layout:** Desktop: İki panel (Sol: Mod seçici, Sağ: Dinamik öneri kartı). Mobile: Dikey yığın.
- **Assets:** `ai-matcha-zen.webp`, `icon-sparkle-minimal.svg`.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 8.
- **Interaction:** Mod çipi tıklandığında yerel state güncellenir, kart 250ms fade animasyonuyla değişir. CTA tıklandığında toast açılır.
- **Responsive:** Mobilde dikey 2x2 çip ve kart; masaüstünde geniş yatay panel.
- **Accessibility:** `aria-live="polite"` (Öneri kartı değiştiğinde ekran okuyucu bildirimi).
- **Demo Boundary:** Kesin rozet: `98% Uyum [DEMO SCORE / PROTOTYPE SIMULATION]`. Hiçbir dış LLM/API çağrısı yapılmaz.

---

### 9. SEC-PREORDER-DEMO
- **Component Name:** `PreOrderTeaserSection`
- **Design Tokens:**
  - Zemin: `color.surface.cream`, Rozet: Deep Olive dolgulu.
  - Input: 48px yükseklik, Warm White zemin, Border çerçeve.
- **Layout:** Desktop: Split (%50 süreç adımları / %50 mockup ve bülten). Mobile: Dikey sıra.
- **Assets:** `mockup-mobile-app-screen.webp`.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 9.
- **Interaction:** `Demo Akışı Gör` tıklandığında `MOD-PREORDER` açılır. E-posta formuna girilip tıklandığında yerel simüle başarı mesajı döner.
- **Responsive:** Dikey 3 adımdan yatay 3 adıma geçiş.
- **Accessibility:** Form girdi alanı için açık `<label>`, hata/başarı için `aria-live`.
- **Demo Boundary:** Belirgin `DEMO / YAKINDA` rozeti.

---

### 10. MOD-PREORDER
- **Component Name:** `PreOrderSimulatorModal`
- **Design Tokens:**
  - Max-width: 540px, Radius: 24px, Warm White zemin.
  - Uyarı Kutusu: `#F9EBEA` zemin, `1px solid #9E3E37` kenarlık, `#9E3E37` metin.
- **Layout:** 3 Adımlı dikey kart yığını (Ürün ➔ Zaman ➔ Özet).
- **Assets:** `icon-check-circle.svg`, `icon-alert-triangle.svg`.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 10.
- **Interaction:** Simülasyon adımları incelenir, `Anladım & Kapat` ile modal kapanır.
- **Responsive:** Mobilde tam ekran / bottom sheet; masaüstünde ortalanmış modal.
- **Accessibility:** `role="dialog"`, odak tuzağı, ESC desteği.
- **Demo Boundary:** Kesin bildirim: `[PROTOTİP TAMAMLANDI — GERÇEK SİPARİŞ VEYA ÖDEME OLUŞTURULMADI]`. Finansal veya kredi kartı alanı bulunmaz.

---

### 11. SEC-DELIVERY-PREVIEW
- **Component Name:** `DeliveryPreviewBanner`
- **Design Tokens:**
  - Zemin: `color.surface.cream`, Çerçeve: `1px solid color.primary.sage`, Padding: `48px y`.
  - Rozet: Sage zemin üstü Deep Olive.
- **Layout:** Tek satır minimalist şerit banner.
- **Assets:** `icon-eco-bottle.svg`.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 11.
- **Interaction:** `Haber Ver` tıklandığında yerel toast bildirimi ("Gelecek fazda eklenecektir").
- **Responsive:** Mobilde dikey, masaüstünde yatay tek satır.
- **Accessibility:** `role="region"`, `aria-label="Teslimat Bilgilendirmesi"`.
- **Demo Boundary:** `[GELECEK FAZ • DELIVERY MODEL TBD]`. Kurye veya adres girdisi kapalıdır.

---

### 12. SEC-LOCATION-HOURS
- **Component Name:** `LocationSection` & `LocationCard`
- **Design Tokens:**
  - Zemin: Warm White, Çerçeve: `color.neutral.border`, Radius: 16px.
  - Rozet: Cream zemin, Latte çerçeve, 12px SemiBold Deep Olive.
- **Layout:** Desktop: 2 Sütun (Sol: Saat tablosu, Sağ: Vektörel harita kartı). Mobile: Dikey yığın.
- **Assets:** `map-kadikoy-moda-placeholder.webp` / SVG sokak krokisi.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 12.
- **Interaction:** `Örnek Rotayı Gör` linki tıklandığında demo harita sorgusu açılır.
- **Responsive:** Dikey yığından iki sütuna geçiş.
- **Accessibility:** Saatler semantik `<table>` veya `<dl>` listesi olarak kodlanır.
- **Demo Boundary:** Kadıköy Moda açıkça `ÖRNEK LOKASYON — TBD EMPLOYER DATA`, saatler `DEMO SAATLER`, cutoff kuralı `DEMO KURALI / DEC-10` olarak işaretlenir.

---

### 13. SEC-CONTACT-SOCIAL
- **Component Name:** `ContactSocialSection`
- **Design Tokens:**
  - Instagram Fotoğraf Izgarası: 4 adet kare görsel (`aspect-square`), Radius: 12px.
  - İletişim Formu: TextField elemanları, Warm White zemin.
- **Layout:** Desktop: Split (%55 fotoğraflar sol, %45 iletişim sağ). Mobile: 2x2 fotoğraflar, altta form.
- **Assets:** 4 adet Instagram mock karesi (`insta-matcha.webp`, `insta-coffee.webp`, vb.).
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 13.
- **Interaction:** Fotoğraflara gelindiğinde hafif parlama; form gönderildiğinde sunucuya gitmeksizin teşekkür mesajı gösterilir.
- **Responsive:** Mobilde kompakt düzen, masaüstünde geniş split.
- **Accessibility:** Form girdileri `<label>` ile eşleştirilir; fotoğraflar için açıklayıcı `alt` etiketleri.
- **Demo Boundary:** `merhaba@bpluscafe.com [DEMO]` ve kurumsal hat demo veridir.

---

### 14. SEC-FOOTER
- **Component Name:** `Footer`
- **Design Tokens:**
  - Zemin: Deep Olive (`#34422D`), Metin: Warm White (`#FFFDF8`) ve Sage (`#AEB997`).
  - Ayrım Çizgisi: `1px solid rgba(174, 185, 151, 0.25)`.
- **Layout:** Desktop: 4 Sütunlu kurumsal ızgara, en altta feragatname bandı. Mobile: Dikey yığın.
- **Assets:** `b-plus-monogram-white.svg`.
- **Content Source:** `WEB_COPY_DECK.md` Bölüm 14.
- **Interaction:** `^ Başa Dön` butonu tıklandığında sayfa başına pürüzsüz kaydırma (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
- **Responsive:** Dikey akıştan 4 sütunlu masaüstü düzenine geçiş.
- **Accessibility:** `<footer role="contentinfo">`, bağlantılar için semantik `<a>` etiketleri.
- **Demo Boundary:** Zorunlu yasal bildirim: *"Bu çalışma demo amaçlıdır. Gerçek sipariş veya ödeme alınmaz."*
