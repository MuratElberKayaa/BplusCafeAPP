# B+ Wellness Café — Web Sunum Teslim Materyali (Presentation Handoff)

**Workstream:** Website Workstream — Web Phase 5 (Final Presentation Handoff)  
**Doküman Türü:** Slide-Ready Modular Handoff Content  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — READY FOR CASE DECK INTEGRATION  
**Rol:** Case Study Delivery Specialist, Senior Product Designer  

> **Önemli Not:** Bu doküman bağımsız tam bir sunum destesi değildir. Tüm platform workstream'lerini (Mobil Uygulama, Admin Paneli, Mağaza Operasyonları) bir araya getirecek olan 6–8 slaytlık ana proje sunumuna doğrudan entegre edilmek üzere hazırlanmış modüler web teslim paketidir.

---

## 1. Önerilen Web Slayt Başlığı (Suggested Slide Title)
> **"B+ Dijital Vitrin: Nitelikli Kahve & Fonksiyonel Wellness Deneyimi"**  
> *(Alt Başlık: Next.js 15 App Router & React 19 ile İnşa Edilmiş Yüksek Performanslı Web Vitrini)*

---

## 2. Temel Vurgu Maddeleri (3–5 Key Bullets for Slide)
- **Marka & Atmosfer:** Şehir temposuna hafiflik katan toprak ve botanik renk paleti, artisanal tipografi ve günün anlarına göre özelleşen menü kurgusu.
- **Şeffaf Menü & Sağlık Disiplini:** 8 fonksiyonel kategoride net kalori, makro besin ve adaptojen bileşenleri sergileyen erişilebilir ürün modalları.
- **İnteraktif Dijital Vizyon:** Kullanıcı ihtiyacına göre kural tabanlı içecek öneren **AI Barista** ve 3 adımlı **Order Ahead (Ön Sipariş)** simülatörü.
- **Örnek Mühendislik Disiplini:** Next.js 15 LTS mimarisi, sıfır dış CDN bağımlılığı (yerel WebP), masaüstünde 100/100, mobilde 95/100 Lighthouse performansı ve kusursuz **0.0000 CLS**.
- **WCAG 2.1 AA & Sıfır Zafiyet:** 96/100 erişilebilirlik, tam klavye desteği, focus trap ve `npm audit --omit=dev` çıktısında **0 üretim güvenlik açığı**.

---

## 3. Temel Teknik Metrikler (Key Technical Metrics Capsule)
```
┌──────────────────────────┬──────────────────────────┬──────────────────────────┐
│   DESKTOP PERFORMANCE    │    MOBILE PERFORMANCE    │       CLS STABILITY      │
│         100 / 100        │         95 / 100         │          0.0000          │
├──────────────────────────┼──────────────────────────┼──────────────────────────┤
│      ACCESSIBILITY       │      BEST PRACTICES      │   PRODUCTION VULNERABILITY│
│          96 / 100        │        100 / 100         │             0            │
└──────────────────────────┴──────────────────────────┴──────────────────────────┘
```

---

## 4. Ekran Görüntüsü Varlıkları (Key Screenshots for Slides)
Ana sunum slaytında görsel olarak kullanılmak üzere hazırlanan ekran görüntüleri `docs/web/delivery/screenshots/` dizinindedir:

| Görsel Dosyası | Slayttaki Kullanım Amacı | Önerilen Yerleşim |
| :--- | :--- | :--- |
| `desktop-full-1440.png` | Genel web arayüzü ve vitrin kompozisyonu | Büyük cihaz mockup çerçevesi içinde |
| `mobile-full-375.png` | Mobil uyumluluk ve responsive akış kanıtı | Yan yana mobil telefon çerçevesinde |
| `section-hero.png` | Marka vaadi ve Lion's Mane Cold Brew reçete kartı | Hero detay kırpımı |
| `section-menu.png` | 8 kategori ve besin değeri etiketleri | Menü kartları ızgarası |
| `modal-product.png` | Alerjen, kalori ve adaptojen bileşen şeffaflığı | Pop-up UI kartı |
| `section-ai-barista.png`| Fonksiyonel mod seçimi ve akıllı eşleştirme | AI Barista konsept kutusu |
| `modal-preorder.png` | 3 adımlı sıra beklemeden teslim alma akışı | Sipariş ergonomisi detayı |

---

## 5. Canlı Önizleme Bağlantısı (Preview URL)
- **Yerel Üretim Önizlemesi:** `http://localhost:3000`
- **Vercel Önizleme:** Kullanıcı doğrulaması sonrası tek komutla (`npx vercel`) aktifleşir.

---

## 6. Sunum Konuşma Notları (Demo Talking Points for Speaker)
1. *"Web sitesi bir e-ticaret sitesi değil; müşteriyi kapıdan girmeden önce markanın felsefesiyle tanıştıran, günün saatine göre doğru içeceği seçmesini sağlayan bir dijital karşılama alanıdır."*
2. *"Ziyaretçiye 'mideyi yormayan' veya 'yağ yakan' gibi asılsız sağlık iddiaları satmıyoruz. Bunun yerine her içeceğin reçetesini, porsiyonunu, adaptojenini ve makrosunu açıkça sergiliyoruz."*
3. *"AI Barista ve Ön Sipariş bölümlerimiz, kafenin mobil uygulamasıyla kuracağı ekosistemin ön gösterimidir. Müşteri ofisindeyken içeceğini özelleştirip hazırlanışını izleyebilir."*
4. *"Teknik tarafta ise gereksiz animasyon yüklerinden kaçındık; sıfır düzen kayması (0.0000 CLS) ve sıfır üretim güvenlik açığı ile kurumsal olgunlukta bir teslimat yaptık."*
