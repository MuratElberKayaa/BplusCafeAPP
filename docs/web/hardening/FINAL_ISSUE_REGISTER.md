# B+ Wellness Café — Web Phase 4 Final Issue Register

**Workstream:** Website Workstream — Web Phase 4  
**Doküman Sürümü:** 1.0.0 (Issue Register)  
**Tarih:** 2026-10-04  
**Statü:** AUDITED  
**Roller:** QA Engineer, Senior Frontend Performance Engineer  

---

## Issue Matrix

| ID | Alan | Şiddet (Severity) | Gözlemlenen Durum | Düzeltme (Fix) | Doğrulama (Verification) | Statü |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ISS-01** | Accessibility | **MEDIUM** | `ProductCard` üzerinde `<article role="button">` ve `aria-label` kullanımı ekran okuyucu başlık metni uyuşmazlığına yol açıyordu. | Dış taşıyıcı temiz bir `<div>` yapıldı; kart içerisindeki `"Detaylı Gör"` butonu gerçek bir erişilebilir `<button>` haline getirildi. | Lighthouse Erişilebilirlik puanı 96'ya yükseldi; `aria-allowed-role` hatası 0'a indi. | **RESOLVED** |
| **ISS-02** | Accessibility | **LOW** | Footer'da Deep Olive zemin üzerindeki `text-bplus-sage/70` metinler 3.4:1 kontrast veriyordu. | Metin sınıfları `text-bplus-cream/90` olarak güncellendi ve kontrast oranı 4.5:1 üzerine çıkarıldı. | Lighthouse Color Contrast denetimi başarıyla geçti. | **RESOLVED** |
| **ISS-03** | Performance / CLS | **MEDIUM** | Hero ve Concept fotoğraflarında açık boyut tanımlanmaması nedeniyle masaüstü yüklemelerinde layout shift riski vardı. | Görsellere `width`, `height` ve `aspect-[3/2]` nitelikleri eklendi. | Masaüstü ve mobil testlerde görsel alan rezervasyonu doğrulandı. | **RESOLVED** |
| **ISS-04** | SEO & Assets | **LOW** | `/favicon.ico` eksikliği nedeniyle tarayıcı konsolunda 404 ağ hatası oluşuyordu. | `apps/web/public/favicon.svg` ve `favicon.ico` oluşturuldu; `layout.tsx` metadata içine eklendi. | Konsol hatası ortadan kalktı; Lighthouse SEO 100/100 ölçüldü. | **RESOLVED** |
| **ISS-05** | Security | **HIGH** | Next.js 14.2.35 sürümünde 1 Kritik, 1 Yüksek üretim güvenlik açığı (GHSA-p293-qw3h-jr36 vb.) mevcuttu. | Next.js 15.5.27 Maintenance LTS, React 19.3.0 ve PostCSS 8.5.28 override ile güvenli bakım sürümüne taşındı. `sharp` kaldırıldı, `playwright` güncellendi. | `npm audit --omit=dev --json` çıktısında 0 Critical, 0 High, 0 Moderate, 0 Low tescillendi. | **RESOLVED** |
| **ISS-06** | Data & Content | **INFO** | Pilot şube adresi, fotoğraflar ve sosyal medya hesapları gerçek işletme verisi gerektirir. | Şube adresi "Örnek Şube (TBD)", hesaplar "(DEMO / PLACEHOLDER)" olarak etiketlendi. | İşveren onayı bekleniyor (**EMPLOYER DATA REQUIRED**). | **OPEN / TRACKED** |
| **ISS-07** | Git & Repository | **LOW** | Raporlardaki `7c53641` commit referansı ile gerçek baseline hash arasındaki tutarsızlık. | Git log ve reflog incelendi; baseline commit'in `8d1d9639e182...` olduğu ve `web-phase-3-frozen` tag'inin doğrudan bu commiti işaret ettiği ve hiç taşınmadığı doğrulandı. Dokümantasyon düzeltildi. | `git rev-parse HEAD`, `git show -s web-phase-3-frozen` ile doğrulandı. | **RESOLVED** |
| **ISS-08** | Performance / CLS | **HIGH** | Desktop Lighthouse CLS değerinin 0.653 seviyesinde olması. | 14 demo görselin tamamı yerel WebP formatına dönüştürüldü (`apps/web/public/images/demo/*.webp`); CDN ağ gecikmesi sıfırlandı ve layout shift tamamen yok edildi. | 3 tekrarlı Desktop Lighthouse koşumunun medyanında CLS **0.0000** olarak doğrulandı. | **RESOLVED** |
| **ISS-09** | Asset / Favicon | **LOW** | Favicon dosyasının `.ico` uzantılı sahte SVG formatında olması. | Sahte `.ico` dosyası silindi; `layout.tsx` doğrudan geçerli `/favicon.svg` MIME tipi ile güncellendi. | Favicon HTTP 200 ve temiz SVG render ile doğrulandı. | **RESOLVED** |
| **ISS-10** | SEO / Domain Safety | **LOW** | `robots.txt` ve `sitemap.xml` dosyalarında `http://localhost:3000` referansının bulunması. | `localhost` referansları temizlendi; kanonik alan adı işveren teyidine bağlandı. | Arama motorları için güvenli prototip yapılandırması doğrulandı. | **RESOLVED** |
| **ISS-11** | SEO / Preview Indexing | **HIGH** | `robots.txt Disallow: /` kuralının indekslemeyi tek başına engelleyeceği varsayımı teknik olarak eksikti. | `layout.tsx` metadata içine `robots: { index: false, follow: false, googleBot: { index: false, follow: false } }` eklendi; `robots.txt` `Allow: /` yapılarak botların noindex etiketini okuması sağlandı. | Render edilen HTML'de `<meta name="robots" content="noindex, nofollow">` doğrulandı. | **RESOLVED** |
| **ISS-12** | SEO / Sitemap Removal | **LOW** | Onaylanmış işveren alan adı olmadan sitemap bulunması kafa karışıklığı yaratıyordu. | `apps/web/public/sitemap.xml` tamamen kaldırıldı; canlı alan adı onaylanana kadar sitemap devre dışı bırakıldı. | Dizin temizlendi; kanonik alan adı varsayımı sıfırlandı. | **RESOLVED** |

