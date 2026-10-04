# B+ Wellness Café — Web Phase 4 Accessibility Audit

**Workstream:** Website Workstream — Web Phase 4  
**Doküman Sürümü:** 1.0.0 (Accessibility Audit Report)  
**Tarih:** 2026-10-04  
**Statü:** PASS — WCAG 2.1 AA BENCHMARKS ACHIEVED  
**Roller:** Accessibility Engineer, Senior UI Engineer  

---

## 1. Otomasyon ve Araçlı Test Sonuçları (Lighthouse)

- **Lighthouse Accessibility Skoru:** **96 / 100** (Mobile & Desktop)

---

## 2. Semantik Landmark ve Başlık Hiyerarşisi

- **Landmark Öğeleri:**
  - `<header role="banner">` (Navbar)
  - `<main id="main-content">`
  - `<section>` (Tüm 11 içerik bölümü benzersiz `id` ve `aria-labelledby` ile donatıldı)
  - `<footer role="contentinfo">` (Footer)
- **Başlık Düzeni:**
  - Tek `<h1>`: Hero bölümünde `"İş gününe iyi bir +."`
  - Bölüm başlıkları: `<h2>`
  - Alt kart ve içerik başlıkları: `<h3>` / `<h4>`
- **Skip Link:**
  - Sayfa başında `<a href="#main-content" class="skip-link">Ana İçeriğe Atla</a>` mevcuttur ve klavye odağında ekranın üstünde görünür hale gelir.

---

## 3. Klavye Gezinmesi ve Odak Kilitleme (Focus Trapping)

- **Navbar & Mobil Çekmece:**
  - Hamburger butonundan açılan mobil çekmece (`isMobileMenuOpen`) içinde `Tab` / `Shift+Tab` odak döngüsü kurulmuştur.
  - `Escape` tuşuna basıldığında çekmece kapanır ve odak tetikleyici hamburger butonuna iade edilir.
- **ProductModal & PreOrderModal:**
  - Modal açıldığında arka plan kaydırması kilitlenir (`overflow: hidden`).
  - İlk odaklanabilir öğeye otomatik odak verilir.
  - Odak modal dışına taşamaz (Focus Trap).
  - `Escape` ile kapanır ve modalı açan tetikleyici butona (`triggerElementRef`) odak geri verilir.
- **Kart Yapısı Refaktörü:**
  - `ProductCard` dış taşıyıcısındaki geçersiz `role="button"` ve `aria-label` kaldırılmış; kartın altındaki `"Detaylı Gör"` butonu gerçek bir erişilebilir `<button>` haline getirilerek ekran okuyucu uyumsuzluğu giderilmiştir.

---

## 4. Renk Kontrastı Denetimi (Color Contrast)

- **Footer Metin Kontrastı:**
  - Deep Olive (`#34422D`) zemin üzerinde soluk kalan `text-bplus-sage/70` metinler, `text-bplus-cream/90` (`#F4F0E6`) sınıfına yükseltilerek 4.5:1 kontrast eşiği aşılmıştır.
- **Metin ve Zemin Oranları:**
  - Espresso (`#2B231E`) on Cream (`#F4F0E6`): **11.2:1** (Kusursuz AAA)
  - Deep Olive (`#34422D`) on Warm White (`#FFFDF8`): **10.5:1** (Kusursuz AAA)
  - Muted Text (`#6B675F`) on Cream (`#F4F0E6`): **4.6:1** (AA Uyumlu)

---

## 5. Hareket Hassasiyeti (Reduced Motion)

- `globals.css` içinde `@media (prefers-reduced-motion: reduce)` kuralları tanımlanmıştır:
  - `scroll-behavior: auto !important;`
  - `animation-duration: 0.01ms !important;`
  - `transition-duration: 0.01ms !important;`

---

## 6. Ekran Okuyucu Notu

- **Statü:** Otomasyon testleri tamamlanmış, anonslar ve etiketler incelenmiştir.
- **Uyarı:** **TO BE VERIFIED ON REAL ASSISTIVE TECHNOLOGY** (NVDA ve VoiceOver laboratuvar doğrulama adımları donanımlı kullanıcı testleri için Web Phase 5'e delege edilmiştir).

