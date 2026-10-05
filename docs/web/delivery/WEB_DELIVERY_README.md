# B+ Wellness Café — Web Delivery Readme

**Workstream:** Website Workstream — Web Phase 5 (Final QA, Preview Deployment & Case Delivery)  
**Doküman Sürümü:** 1.0.0 (Master Delivery Guide)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — DELIVERY READY  
**Roller:** Technical Delivery Lead, Senior Release Engineer  

---

## 1. Neler Geliştirildi? (What Was Built)
Web Phase 0–5 workstream'i boyunca **B+ Wellness Café by Mineiro Coffee** için uçtan uca modern bir dijital vitrin web uygulaması inşa edilmiştir:
- **Tasarım ve Marka Uyumu:** Toprak tonları (Cream `#FBF9F5`, Travertine `#EFECE6`, Espresso `#1C1917`), botanik adaçayı (Sage `#94A3B8`/`#8FA382`) ve derin zeytin yeşili (Deep Olive `#2D3A29`) ile lüks wellness kimliği.
- **Hero & Anlar Filtresi:** 4 farklı gün dilimine (Sabah, Öğle, İkindi, Akşamüstü) göre dinamik menü önerisi sunan etkileşimli filtre yapısı.
- **8 Kategorili Nitelikli Menü:** Tek kökenli kahveler, matcha, adaptojenik içecekler, fonksiyonel çaylar, smoothie, taze sıkım, hafif kaseler ve barlar.
- **İçerik & Alerjen Modalı:** Detaylı kalori, makro, adaptojen bileşenleri ve alerjen etiketleri sunan erişilebilir dialog penceresi.
- **AI Barista Öneri Simülatörü:** Kullanıcının ruh hali ve fonksiyonel ihtiyacına göre kural tabanlı içecek eşleştiren konsept simülatör.
- **3 Adımlı Ön Sipariş Akışı:** Kişiselleştirme, teslim saati seçimi ve özet onay adımlarını içeren ön sipariş simülatörü.
- **Lokasyon & Çalışma Saatleri:** Şube bilgileri, çalışma saatleri ve stilize vektör harita krokisi.
- **İletişim & Sosyal Medya:** Mock bülten kaydı ve iletişim formu.

---

## 2. Yerel Ortamda Çalıştırma (How to Run Locally)
```bash
# Web dizinine geçiş
cd apps/web

# Bağımlılıkların yüklenmesi
npm install

# Geliştirme sunucusunun başlatılması
npm run dev

# Optimize üretim derlemesi
npm run build

# Üretim sunucusunun yerel testi
npm run start -p 3000
```
Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı test edebilirsiniz.

---

## 3. Önizleme Ortamına Erişim (How to Access Preview)
- **Yerel Üretim Önizlemesi:** `http://localhost:3000` (tam production build).
- **Vercel Önizleme Durumu:** CLI seviyesinde interaktif kullanıcı girişi (`npx vercel login`) gerektiği için güvenlik protokolü uyarınca otomatik token oluşturulmamış, deploy işlemi askıya alınmıştır (**DEPLOYMENT AUTHENTICATION REQUIRED**). Yetkili kullanıcı tek komutla (`npx vercel`) canlı önizleme bağlantısı alabilir.

---

## 4. Gerçek Olan vs. Simüle Edilen Bileşenler
| Bileşen | Statü | Teknik Detay |
| :--- | :--- | :--- |
| **UI & Render Motoru** | **GERÇEK (Real)** | Next.js 15.5.27 App Router, React 19.3.0, SSR/SSG statik prerender. |
| **Responsive Düzen** | **GERÇEK (Real)** | 320px–1920px arası 0 yatay taşma ile fluid flex/grid düzeni. |
| **Erişilebilirlik (A11y)** | **GERÇEK (Real)** | WCAG 2.1 AA, klavye focus trap, aria etiketleri, skip-link. |
| **Görsel Optimizasyonu** | **GERÇEK (Real)** | Yerel WebP formatı, önceden tanımlı en-boy oranları (CLS 0.0000). |
| **AI Barista** | **SİMÜLE (Prototype)** | İstemci tarafı deterministik eşleştirme algoritması (LLM API entegrasyonu yok). |
| **Ön Sipariş** | **SİMÜLE (Prototype)** | İstemci tarafı state simülatörü (Backend sipariş kuyruğu yok). |
| **Ödeme** | **YOK (Not Present)** | Hiçbir ödeme formu, sepet veya kredi kartı alanı bulunmaz. |
| **İletişim / Bülten** | **SİMÜLE (Mock)** | Formlar dış ağa veri göndermez; yerel React state ile görsel teyit verir. |

---

## 5. Eksik İşveren Verileri (Missing Employer Data)
Aşağıdaki veriler işveren onayı beklemektedir (**EMPLOYER DATA REQUIRED**):
1. Onaylanmış pilot şube açık adresi, resmi telefon numarası ve kurumsal e-posta.
2. Gerçek şube ve stüdyo fotoğraf çekimleri (şu anda Unsplash demo lisanslı yerel WebP görseller kullanılmaktadır).
3. Onaylı menü fiyatları, gramaj ve besin değerleri.
4. Tescilli sosyal medya hesapları (@bpluswellnesscafe).

---

## 6. Teknoloji Özeti (Technology Summary)
- Next.js `15.5.27` (Maintenance LTS)
- React `19.3.0`
- TypeScript `5.6.3`
- Tailwind CSS `3.4.14` + PostCSS `8.5.28` (Override ile 0 üretim zafiyeti)
- Lucide React `^0.475.0`
- Playwright `^1.55.1` (QA test otomasyonu)

---

## 7. Dizin Haritası (Folder Map)
```
apps/web/
├── public/
│   ├── favicon.svg             # B+ Monogram Deep Olive vektörel rozet
│   ├── robots.txt              # Allow: / (Botların noindex direktifini okuması için)
│   └── images/
│       └── demo/*.webp         # 14 adet yerel optimize edilmiş WebP ürün görseli
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Kök yerleşim, noindex/nofollow robots metadata
│   │   ├── page.tsx            # Ana sayfa tek sayfa (SPA) orkestrasyonu
│   │   └── globals.css         # Tasarım tokenları, tipografi ve animasyonlar
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, Mobile Drawer
│   │   ├── menu/               # ProductCard, ProductModal, NutritionalBadges
│   │   ├── preorder/           # PreOrderModal, 3 adımlı simülatör
│   │   └── sections/           # Hero, Moments, Concept, Menu, AiBarista, Location, Contact
│   └── data/
│       └── webData.ts          # Menü ürünleri, anlar ve filtre verileri
├── package.json                # Next 15, React 19, PostCSS 8.5.28 override
└── README.md                   # Proje dokümantasyonu
```
