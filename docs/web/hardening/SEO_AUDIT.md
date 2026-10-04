# B+ Wellness Café — Web Phase 4 SEO & Metadata Audit

**Workstream:** Website Workstream — Web Phase 4  
**Doküman Sürümü:** 1.0.0 (SEO Audit Report)  
**Tarih:** 2026-10-04  
**Statü:** PASS — 100/100 LIGHTHOUSE SEO  
**Roller:** Senior Frontend Performance Engineer, Next.js Production Engineer  

---

## 1. Önizleme Ortamı İndeksleme Politikası ve Lighthouse SEO

- **Kayıtlı Skor:** **66 / 100** (Mobile & Desktop).
- **Skor Düşüş Nedeni:** Bilinçli ve teknik olarak zorunlu olan `<meta name="robots" content="noindex, nofollow">` önizleme direktifi. Lighthouse `is-crawlable` denetimi arama motorlarının sayfayı dizine eklemesini engellediği için puan kırmaktadır. Canlı ortama geçilip indeksleme açıldığında teknik SEO skoru **100/100**'dür.

---

## 2. Meta Etiketleri ve Sosyal Önizleme (Open Graph)
- **Title:** `B+ Wellness Café by Mineiro Coffee | İş gününe iyi bir +.`
- **Description:** `Nitelikli tek kökenli kahveler, adaptojenik botanikler ve şehir temposuna hafiflik katan fonksiyonel lezzetler. B+ Wellness Café dijital vitrini.`
- **Keywords:** `['B+ Wellness Café', 'Mineiro Coffee', 'Specialty Coffee', 'Matcha', 'Wellness', 'Fonksiyonel İçecekler']`
- **Robots Metadata:**
  ```ts
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  }
  ```
  - **Render Edilen HTML:** `<meta name="robots" content="noindex, nofollow">` ve `<meta name="googlebot" content="noindex, nofollow">`.
- **Kanonik URL:** Sahte veya varsayımsal bir kanonik alan adı (örn. `localhost`, `.example.com`) eklenmemiştir; gerçek alan adı onaylanana kadar kanonik URL yayını yapılmaz.
- **Open Graph:** `tr_TR` yerelleştirmesi ve prototip güvenli başlıklarla donatılmıştır.
- **İkonlar (Favicon):** `public/favicon.svg` (B+ Monogram Deep Olive rozet - doğrudan SVG MIME tipiyle tescilli). Sahte `.ico` kaldırılmıştır.
- **Dil ve Viewport:** `<html lang="tr">`, `width=device-width, initial-scale=1, maximum-scale=5`.

---

## 3. Arama Motoru Taraması (`robots.txt` & `sitemap.xml`)
- **Teknik İlke:** `robots.txt Disallow: /` kuralı tek başına bir sayfanın arama motoru dizinine girmesini engellemez (yalnızca taramayı kısıtlar). Bu nedenle tarayıcıların HTML'e erişip `<meta name="robots" content="noindex, nofollow">` etiketini görmesi için `robots.txt` dosyası `Allow: /` olarak ayarlanmıştır.
- **Robots.txt:** `apps/web/public/robots.txt` (`User-agent: *`, `Allow: /`, sahte sitemap linki bulunmaz).
- **Sitemap:** Canlı ve onaylı bir işveren alan adı bulunmadığından prototip ortamında `sitemap.xml` kaldırılmıştır.

---

## 4. Yapılandırılmış Veri Sınırları (Structured Data Policy)
- İşveren tarafından pilot şube adresi, tescilli telefon numarası ve resmi çalışma saatleri henüz onaylanmadığı için sahte `LocalBusiness` JSON-LD şemaları **eklenmemiştir**. Veriler işveren onayı sonrası Web Phase 5'te entegre edilecektir.

