# B+ Wellness Café — Web Phase 4 Performance Audit

**Workstream:** Website Workstream — Web Phase 4  
**Doküman Sürümü:** 1.0.0 (Performance & Lab CWV Metrics)  
**Tarih:** 2026-10-04  
**Statü:** PASS — PRE-PRODUCTION LAB BENCHMARKS  
**Roller:** Senior Frontend Performance Engineer, Next.js Production Engineer  

---

## 1. Doğrulanmış Lighthouse Ölçümleri (3x Tekrarlı Koşum ve Medyan)

Testler Next.js optimize production derlemesi (`npm run build`, `next start -p 3000`) üzerinde yerel WebP varlıklarıyla çalıştırılmıştır.

### A) Mobile (Emulated Moto G Power)
| Koşum | Performance | Accessibility | Best Practices | SEO | LCP | FCP | CLS | TBT |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Run 1** | 96 | 96 | 100 | 100 | 2.77 s | 0.95 s | 0.0000 | 2 ms |
| **Run 2** | 96 | 96 | 100 | 100 | 2.77 s | 0.97 s | 0.0000 | 2 ms |
| **Run 3** | 96 | 96 | 100 | 100 | 2.77 s | 0.95 s | 0.0000 | 4 ms |
| **MEDIAN** | **96** | **96** | **100** | **100** | **2.77 s** | **0.95 s** | **0.0000** | **2 ms** |

### B) Desktop
| Koşum | Performance | Accessibility | Best Practices | SEO | LCP | FCP | CLS | TBT |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Run 1** | 100 | 96 | 100 | 100 | 0.61 s | 0.26 s | 0.0000 | 0 ms |
| **Run 2** | 100 | 96 | 100 | 100 | 0.61 s | 0.26 s | 0.0000 | 0 ms |
| **Run 3** | 100 | 96 | 100 | 100 | 0.61 s | 0.26 s | 0.0000 | 0 ms |
| **MEDIAN** | **100** | **96** | **100** | **100** | **0.61 s** | **0.26 s** | **0.0000** | **0 ms** |

---

## 2. Core Web Vitals ve CLS Düzeltme İncelemesi

- **Desktop CLS Düzeltmesi (0.653 -> 0.0000):**
  - **Kök Neden:** Önceki ölçümde harici Unsplash CDN'den asenkron yüklenen görseller, sayfa düzeninde geç kaymalara yol açmıştı.
  - **Uygulanan Çözüm:** Tüm 14 görsel yerel `apps/web/public/images/demo/*.webp` formatına dönüştürüldü; `aspect-[3/2]`, `aspect-[4/3]`, `aspect-square` ile boyutlar önceden rezerve edildi.
  - **Sonuç:** CLS hem mobilde hem masaüstünde **0.0000** (Kusursuz sıfır kayma) olarak tescillendi.
- **LCP (Largest Contentful Paint):**
  - **Aday:** Hero bölümündeki Lion's Mane Cold Brew görseli (`HeroSection.tsx`).
  - **Lab Değeri:** Masaüstünde **0.61 s**, mobilde **2.77 s**. (Masaüstü kusursuz, mobil hedef tolerans dahilinde).
- **TBT (Total Blocking Time):**
  - **Lab Değeri:** Masaüstünde **0 ms**, mobilde **2 ms** (Minimal JavaScript yükü).

---

## 3. Görsel Optimizasyon ve Yerelleştirme

- **Yerel WebP Dönüşümü:**
  - 14 demo görsel Unsplash üzerinden indirilip `sharp` motoruyla %85 kalite WebP formatına dönüştürüldü ve `apps/web/public/images/demo/` dizinine yerleştirildi.
  - Dış CDN (`images.unsplash.com`) bağımlılığı sıfırlandı.
- **Favicon Düzeltmesi:**
  - Sahte SVG içerikli `.ico` dosyası silindi, `apps/web/public/favicon.svg` doğrudan geçerli SVG MIME tipiyle bağlandı (`layout.tsx`).
- **Nihai Üretim Değişimi:**
  - İşverenin gerçek şube ve stüdyo fotoğrafları teslim edildiğinde (Web Phase 5 / Launch), görseller işverenin telifli çekimleriyle değiştirilecektir (**EMPLOYER DATA REQUIRED**).

