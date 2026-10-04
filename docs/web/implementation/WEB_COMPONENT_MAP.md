# B+ Wellness Café — Web Component Architecture Map

**Workstream:** Website Workstream — Web Phase 3  
**Doküman Sürümü:** 1.0.0 (Component Architecture Map)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — COMPONENT MAP  
**Roller:** Senior Frontend Engineer, Senior UI Engineer  

---

## 1. Dizin ve Dosya Yapısı

```
apps/web/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.mjs
└── src/
    ├── app/
    │   ├── layout.tsx              # Root HTML, SEO metadata, Skip-link, Fonts
    │   ├── page.tsx                # Single-Page Orchestrator (14 bileşen sırası)
    │   └── globals.css             # Tailwind direktifleri, CSS değişkenleri, a11y kuralları
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx          # SEC-NAV (Sticky Header, Desktop Anchor Nav, Mobile Drawer)
    │   │   └── Footer.tsx          # SEC-FOOTER (Kurumsal Kapanış, Disclaimer, Başa Dön)
    │   ├── sections/
    │   │   ├── HeroSection.tsx     # SEC-HERO (Editorial Split, Manşet, Güven Rozetleri)
    │   │   ├── MomentsSection.tsx  # SEC-MOMENTS (08:00, 12:30, 15:00 Ritim Kartları)
    │   │   ├── ConceptSection.tsx  # SEC-CONCEPT (Mineiro Manifestosu, 3 Değer Sütunu)
    │   │   ├── MenuSection.tsx     # SEC-MENU-NAV & SEC-MENU-GRID (Kategori Nav & Vitrin)
    │   │   ├── AiBaristaSection.tsx# SEC-AI-TEASER (AI Barista Prototype Ada Kartı)
    │   │   ├── PreOrderSection.tsx # SEC-PREORDER-DEMO (Order Ahead 3 Adım & Bülten)
    │   │   ├── DeliveryPreviewSection.tsx # SEC-DELIVERY-PREVIEW (Gelecek Faz Banner'ı)
    │   │   ├── LocationSection.tsx # SEC-LOCATION-HOURS (Kadıköy Moda Örnek Şube & Kroki)
    │   │   └── ContactSection.tsx  # SEC-CONTACT-SOCIAL (Instagram Vitrini & Demo Form)
    │   ├── menu/
    │   │   ├── MenuCategoryNav.tsx # 8 Kategori Hap Çipi (Swipeable)
    │   │   ├── ProductCard.tsx     # Ürün Vitrin Kartı (Diyet Etiketleri, Demo Fiyat)
    │   │   └── ProductModal.tsx    # MOD-PRODUCT (Duyusal Puanlar, Reçete, Alerjenler)
    │   └── preorder/
    │       └── PreOrderModal.tsx   # MOD-PREORDER (3 Adımlı Gel-Al Simülatörü)
    └── data/
        └── webData.ts              # Merkezi Tip ve Demo Veri Deposu (Ürünler, Anlar, AI)
```

---

## 2. Bileşen Detayları ve Durum Haritası

| Bileşen Adı | Dosya Yolu | Section ID | Props | İç State | Eylemler & Tetikleyiciler |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`Navbar`** | `components/layout/Navbar.tsx` | `SEC-NAV` | `onOpenPreOrder: () => void` | `isScrolled`, `isMobileMenuOpen` | Kaydırma dinleyicisi, hamburger açma/kapama, anchor link tıklamaları |
| **`HeroSection`** | `components/sections/HeroSection.tsx` | `SEC-HERO` | — | — | `#menu` ve `#concept` anchor bağlantıları |
| **`MomentsSection`** | `components/sections/MomentsSection.tsx` | `SEC-MOMENTS` | `onSelectMoment: (slug: string) => void` | — | İlgili kategoriyi seçtirir ve `#menu` alanına yumuşak kaydırır |
| **`ConceptSection`** | `components/sections/ConceptSection.tsx` | `SEC-CONCEPT` | — | — | `#menu` yönlendirmesi |
| **`MenuSection`** | `components/sections/MenuSection.tsx` | `SEC-MENU-NAV`, `SEC-MENU-GRID` | `selectedCategory`, `onSelectCategory`, `onSelectProduct` | — | Kategori değiştirme, ürün seçimiyle modal açma |
| **`MenuCategoryNav`**| `components/menu/MenuCategoryNav.tsx` | `SEC-MENU-NAV` | `activeCategory`, `onSelectCategory` | — | 8 Çip butonundan seçim yapma |
| **`ProductCard`** | `components/menu/ProductCard.tsx` | `SEC-MENU-GRID` | `product`, `onSelectProduct` | — | Tıklama ve `Enter`/`Space` tuşu ile `MOD-PRODUCT` açılışı |
| **`ProductModal`** | `components/menu/ProductModal.tsx` | `MOD-PRODUCT` | `product`, `onClose`, `onPreOrder` | — | ESC tuşu dinleyicisi, arka plan karartmasına tıklama, `PreOrderModal` açılışı |
| **`AiBaristaSection`**| `components/sections/AiBaristaSection.tsx` | `SEC-AI-TEASER` | `onInspectProduct: (prod: WebProduct) => void` | `selectedIntentId`, `toastMessage` | 4 Niyet çipi seçimi, simüle eşleşen kart değişimi, ürün detayını açma, demo toast |
| **`PreOrderSection`**| `components/sections/PreOrderSection.tsx` | `SEC-PREORDER-DEMO` | `onOpenPreOrderModal: () => void` | `emailInput`, `isSubscribed` | E-posta bülten kaydı simülasyonu, modal açılışı |
| **`PreOrderModal`** | `components/preorder/PreOrderModal.tsx` | `MOD-PREORDER` | `isOpen`, `onClose`, `initialProduct` | `currentStep` (1..3), `selectedProduct`, `pickupTime` | Adım ilerletme (Ürün ➔ Zaman ➔ Özet), belirgin demo uyarısı |
| **`DeliveryPreviewSection`**| `components/sections/DeliveryPreviewSection.tsx` | `SEC-DELIVERY-PREVIEW` | — | `notified` | "Haber Ver" butonu yerel bildirim state'i |
| **`LocationSection`**| `components/sections/LocationSection.tsx` | `SEC-LOCATION-HOURS` | — | `mapMessage` | "Örnek Rotayı Gör" butonu yerel simülasyonu |
| **`ContactSection`** | `components/sections/ContactSection.tsx` | `SEC-CONTACT-SOCIAL` | — | `formSent`, `formData` | Demo form gönderme simülasyonu (sunucusuz) |
| **`Footer`** | `components/layout/Footer.tsx` | `SEC-FOOTER` | — | — | Smooth scroll to top, site haritası, demo feragatnamesi |
| **`HomePage`** | `app/page.tsx` | Tüm Sayfa | — | `selectedCategory`, `activeProductModal`, `isPreOrderOpen`, `preOrderProduct` | Tüm 14 bölümün veri ve durum orkestrasyonu |
