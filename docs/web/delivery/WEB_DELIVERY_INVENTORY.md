# B+ Wellness Café — Web Delivery Inventory

**Workstream:** Website Workstream — Web Phase 5 (Final Delivery Inventory)  
**Doküman Sürümü:** 1.0.0 (Artifact Register)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — COMPLETE INVENTORY  
**Rol:** Technical Delivery Lead, Senior Release Engineer  

---

## 1. Teslimat Varlıkları Envanteri (Delivery Inventory Matrix)

| Varlık / Dosya Yolu | Tür / Kategori | Amacı | Durum | Teslimat Zorunlu mu? | Notlar |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `apps/web/src/` | Kaynak Kod | Next.js 15.5.27 & React 19 web uygulaması kaynak kodları | **TAMAMLANDI** | **EVET** | App Router, bileşenler ve menü veri yapısı. |
| `apps/web/public/` | Statik Varlıklar | SVG Favicon, Robots.txt, yerel optimize WebP görseller | **TAMAMLANDI** | **EVET** | 14 WebP görsel, sıfır dış CDN bağımlılığı. |
| `apps/web/package.json` | Konfigürasyon | Bağımlılık manifestosu, LTS sürümleri, PostCSS override | **TAMAMLANDI** | **EVET** | `npm audit --omit=dev`: 0 zafiyet. |
| `apps/web/README.md` | Dokümantasyon | Web uygulaması kurulum, çalıştırma ve sınır rehberi | **TAMAMLANDI** | **EVET** | Geliştirici ve paydaş rehberi. |
| `docs/web/delivery/WEB_DELIVERY_README.md` | Teslim Dokümanı | Teslimat yönetici özeti, mimari ve çalıştırma talimatı | **TAMAMLANDI** | **EVET** | Master delivery rehberi. |
| `docs/web/delivery/WEB_DEPLOYMENT_REPORT.md` | Dağıtım Raporu | Vercel değerlendirmesi, auth sınırı ve yerel QA teyidi | **TAMAMLANDI** | **EVET** | `LOCAL PASS / DEPLOYMENT AUTH REQUIRED`. |
| `docs/web/delivery/WEB_FINAL_QA.md` | QA Kabul Raporu | Responsive (5 viewport), WCAG AA, içerik ve Lighthouse | **TAMAMLANDI** | **EVET** | 0 overflow, 100/100 desktop perf, 0.0000 CLS. |
| `docs/web/delivery/WEB_DEMO_SCRIPT.md` | Sunum / Mülakat | 2–3 dakikalık adım adım canlı demo ve konuşma senaryosu | **TAMAMLANDI** | **EVET** | Vaka savunması ve mülakatlar için hazır. |
| `docs/web/delivery/WEB_CASE_SUMMARY.md` | Vaka Özeti | Problem, hedef kitle, tasarım, mimari ve sonuç özeti | **TAMAMLANDI** | **EVET** | Portfolyo ve vaka analizi formatında. |
| `docs/web/delivery/WEB_PRESENTATION_HANDOFF.md`| Sunum Handoff | Ana 6–8 slaytlık desteye eklenecek modüler web materyali | **TAMAMLANDI** | **EVET** | Slayt başlığı, maddeler ve konuşma notları. |
| `docs/web/delivery/screenshots/` (9 dosya) | Görsel Varlıklar | Desktop, mobile, tablet ve modal ekran görüntüleri | **TAMAMLANDI** | **EVET** | 1440, 375, 768, Hero, Menu, AI, PreOrder, Loc. |
| `docs/web/implementation/WEB_ASSET_PROVENANCE.md`| Lisans & Provenans | Görsel lisansları ve Unsplash kaynak eşleştirme matrisi | **TAMAMLANDI** | **EVET** | İşveren verisi gereksinimi açıkça belirtilmiştir. |

---

## 2. Ekran Görüntüleri Detay Dökümü (`docs/web/delivery/screenshots/`)
1. `desktop-full-1440.png` — 1440×900 Masaüstü vitrin görünümü.
2. `mobile-full-375.png` — 375×812 Standart mobil görünüm.
3. `tablet-full-768.png` — 768×1024 Tablet portre görünümü.
4. `section-hero.png` — HeroDisplay ve Günün Reçetesi kartı.
5. `section-menu.png` — 8 Kategorili Menü ve Besin Etiketleri.
6. `modal-product.png` — Lion's Mane Cold Brew detay, makro ve alerjen modali.
7. `section-ai-barista.png` — AI Barista Öneri Simülatörü.
8. `modal-preorder.png` — 3 Adımlı Ön Sipariş Akış Modali.
9. `section-location.png` — Şube, Çalışma Saatleri ve Kroki Harita.

---

## 3. Bekleyen İşveren Verileri (Pending Employer Deliverables)
- Onaylı pilot şube açık adresi, resmi telefon numarası ve kurumsal e-posta.
- Şirket içi telifli stüdyo fotoğraf çekimleri ve şube fotoğrafları.
- Nihai onaylı menü fiyat listesi ve gramajlar.
- Tescilli sosyal medya kullanıcı adları.
