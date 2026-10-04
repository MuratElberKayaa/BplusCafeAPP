# B+ Wellness Café — Web Motion & Transition Specification

**Workstream:** Website Workstream — Web Phase 2  
**Doküman Sürümü:** 1.0.0 (Motion Design Specification)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — MOTION SPECIFICATION  
**Roller:** Senior UI Designer, Senior Frontend Architect, Design System Specialist  

---

## 1. Genel Hareket Felsefesi (Motion Philosophy)

B+ Wellness Café web arayüzündeki animasyonlar dikkat çekmek için değil, **arayüzün sakinliğini, pürüzsüzlüğünü ve zihinsel hafifliğini pekiştirmek** için tasarlanmıştır:
- **Hafif & Doğal:** Yerçekimi ve doğal ivmelenme prensiplerine uygun (Ease-out / Out-expo).
- **Gecikmesiz:** Kullanıcı aksiyonları asla animasyonun bitmesini beklemez; eylemler anında tetiklenir.
- **Scroll-Jacking Yasağı:** Sayfa kaydırma hızına müdahale edilmez (No native scroll hijacking); tarayıcının yerel yumuşak kaydırması (`scroll-behavior: smooth`) kullanılır.

---

## 2. Zamanlama ve Eğriler (Timing & Easing Tokens)

```text
motion.duration.instant : 100ms  (Mikro durum değişimleri, buton renkleri)
motion.duration.fast    : 200ms  (Hover kalkışları, çip seçimleri, ok kaymaları)
motion.duration.normal  : 300ms  (Menü filtreleme solması, AI öneri geçişi)
motion.duration.enter   : 400ms  (Modal açılışı, çekmece girişi, hero görseli belirmesi)

motion.easing.standard  : cubic-bezier(0.2, 0.0, 0, 1.0)      (Doğal arayüz akışı)
motion.easing.decelerate: cubic-bezier(0.0, 0.0, 0.2, 1.0)    (Ekrana giriş animasyonları)
motion.easing.accelerate: cubic-bezier(0.4, 0.0, 1.0, 1.0)    (Ekrandan çıkış)
```

---

## 3. Bölüm ve Bileşen Bazlı Hareket Tanımları

### 3.1. Hero Görseli Açılışı (Hero Image Reveal)
- **Tetikleyici:** Sayfa ilk yüklendiğinde (On Mount).
- **Davranış:**
  - Hero tipografi bloğu: `opacity: 0 ➔ 1`, `translateY: 20px ➔ 0px` (Süre: 400ms, Gecikme: 100ms).
  - Hero görsel kartı: `opacity: 0 ➔ 1`, `scale: 0.98 ➔ 1.0` (Süre: 500ms, Gecikme: 250ms, Easing: Decelerate).

### 3.2. Gezinme Çubuğu Yüzey Geçişi (Nav Surface Transition)
- **Tetikleyici:** Pencere dikey kaydırması `scrollY > 40px` olduğunda.
- **Davranış:**
  - Arka plan: Şeffaf ➔ `rgba(255, 253, 248, 0.88)` (Warm White).
  - Filtre: `backdrop-filter: blur(0px) ➔ blur(16px)`.
  - Alt Sınır: `border-bottom-color: transparent ➔ rgba(227, 222, 195, 0.7)`.
  - Süre: `250ms ease-in-out`.

### 3.3. An Kartları Giriş Efekti (Moment Cards Stagger Entrance)
- **Tetikleyici:** `SEC-MOMENTS` ekran görünüm alanına girdiğinde (Intersection Observer).
- **Davranış:**
  - 3 Kart sırayla hafifçe yukarı süzülür (`translateY: 24px ➔ 0px`, `opacity: 0 ➔ 1`).
  - Kart 1 (08:00): Gecikme `0ms`.
  - Kart 2 (12:30): Gecikme `100ms`.
  - Kart 3 (15:00): Gecikme `200ms`.
  - Süre: Her biri için `350ms`.

### 3.4. Menü Filtreleme Solması (Menu Grid Filtering Fade)
- **Tetikleyici:** Kullanıcı başka bir kategori çipine tıkladığında.
- **Davranış:**
  - Mevcut ürün ızgarası: `opacity: 1 ➔ 0` (100ms, Hızlı kaybolma).
  - Filtrelenen yeni liste: `opacity: 0 ➔ 1`, `translateY: 8px ➔ 0px` (200ms, Yumuşak yerleşme).
  - Toplam filtre geçiş süresi: `250ms – 300ms`.

### 3.5. Ürün Modalı & Bottom Sheet Geçişi (Product Modal & Drawer)
- **Açılış (Desktop):**
  - Koyu overlay: `opacity: 0 ➔ 1` (250ms).
  - Modal kutusu: `opacity: 0 ➔ 1`, `scale: 0.96 ➔ 1.0` (300ms, Decelerate).
- **Açılış (Mobile Bottom Sheet):**
  - Alttan yukarı kayma: `translateY: 100% ➔ 0%` (350ms, `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Kapanış:**
  - Modal/Sheet: `opacity: 1 ➔ 0` veya `translateY: 0 ➔ 100%` (200ms hızlı çıkış).

### 3.6. AI Barista Öneri Değişimi (AI Teaser Card Transition)
- **Tetikleyici:** Kullanıcı mod çiplerinden birini (`Odak Molası`, `Sakin Bir An` vb.) seçtiğinde.
- **Davranış:**
  - Seçili çip Latte altın çerçevesiyle anında vurgulanır (150ms).
  - Öneri kutusu metin ve görsel içeriği: `opacity: 0 ➔ 1`, hafif çapraz süzülme (250ms).
  - Kesinlikle yapay zeka yükleniyor çarkı veya gecikme simülasyonu uzatılmaz; pürüzsüz yanıt verilir.

---

## 4. Erişilebilirlik ve Azaltılmış Hareket (Prefers-Reduced-Motion)

Kullanıcının işletim sisteminde "Hareketi Azalt" (`prefers-reduced-motion: reduce`) seçeneği etkin olduğunda:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- Tüm `translateY`, `scale` ve kayma efektleri iptal edilir.
- Yalnızca temel opaklık değişimi (fade) veya doğrudan anlık durum geçişi (instant cut) uygulanır.
