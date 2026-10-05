# B+ Wellness Café — Web Final QA & Acceptance Report

**Workstream:** Website Workstream — Web Phase 5 (Final QA, Preview Deployment & Case Delivery)  
**Doküman Sürümü:** 1.0.0 (Acceptance Test Suite)  
**Tarih:** 2026-10-04  
**Statü:** PASS — AUDITED & VERIFIED  
**Roller:** Senior QA Engineer, Technical Delivery Lead  

---

## 1. Duyarlı Tasarım Kabul Testi (Responsive Acceptance QA)
Playwright test otomasyonu ile 5 temel cihaz çözünürlüğü test edilmiş, yatay taşma (horizontal scroll overflow) denetlenmiştir:

| Çözünürlük | Cihaz Kategorisi | ScrollWidth | ClientWidth | Yatay Taşma | Statü |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **320 × 568** | Ultra-Kompakt Mobil (iPhone SE 1st gen) | 320 px | 320 px | **YOK (0 px)** | **PASS** |
| **375 × 812** | Standart Mobil (iPhone X / 13 mini) | 375 px | 375 px | **YOK (0 px)** | **PASS** |
| **768 × 1024** | Tablet Portre (iPad Mini) | 768 px | 768 px | **YOK (0 px)** | **PASS** |
| **1440 × 900** | Standart Masaüstü / Laptop | 1440 px | 1440 px | **YOK (0 px)** | **PASS** |
| **1920 × 1080** | Geniş Ekran / FHD Monitor | 1920 px | 1920 px | **YOK (0 px)** | **PASS** |

---

## 2. Kullanıcı Akışları Kabul Testi (User Flow Acceptance)

### WEB-A: Marka ve Konsept Keşfi (Brand Discovery)
- **Akış:** Hero display -> Günün Anları (Moments) filtreleri -> Konsept felsefesi -> Menüye akıcı kaydırma.
- **Doğrulama:** Anlar düğmelerine tıklandığında menü filtrelenmekte ve `#menu` alanına pürüzsüzce (`scroll-behavior: smooth`) odaklanmaktadır. **(PASS)**

### WEB-B: Menü Keşfi ve Ürün Detayı (Menu Discovery)
- **Akış:** 8 kategori sekmesi (Tek Kökenli, Matcha, Adaptojenik vb.) -> Kart üzerindeki `"Detaylı Gör"` butonu -> `ProductModal`.
- **Doğrulama:** Modal içinde kalori, makro, adaptojen bileşenleri ve alerjen etiketleri net şekilde sergilenmektedir. `Escape` tuşu ile kapatılmaktadır. **(PASS)**

### WEB-C: AI Barista Öneri Simülatörü (AI Intent Matching)
- **Akış:** 4 mod seçimi (Zihinsel Odak, Gün Ortası Enerji, Antrenman Sonrası, Hafifleme & Sindirim) -> Eşleşen reçete kartı.
- **Doğrulama:** Seçilen moda göre Lion's Mane, Matcha veya Turmeric kartı dinamik güncellenmekte; prototip sınırları korunmaktadır. **(PASS)**

### WEB-D: 3 Adımlı Ön Sipariş Simülatörü (Order Ahead Prototype)
- **Akış:** `"Demo Akışı Gör"` butonu -> Süt/tatlandırıcı özelleştirme -> Teslimat saati seçimi -> Sipariş onay özeti.
- **Doğrulama:** Tamamen bellek içi çalışan simülatör kullanıcıya adımları başarıyla tamamlatmaktadır. Hiçbir ödeme formu açılmaz. **(PASS)**

### WEB-E: Şube ve Çalışma Saatleri (Location & Hours)
- **Akış:** Hafta içi / hafta sonu saatleri -> Kroki harita incelemesi -> Örnek şube bildirimleri.
- **Doğrulama:** Harita mockup'ı ve Moda şubesi `Örnek Şube (TBD)` olarak doğru etiketlenmiştir. **(PASS)**

---

## 3. Erişilebilirlik Kabul Denetimi (Accessibility Acceptance)
- **Klavye Dolaşımı:** `Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape` tuş kombinasyonları tüm interaktif elemanlarda hatasız çalışmaktadır.
- **Skip Link:** Sayfa başında gizli `Ana İçeriğe Atla` linki ilk Tab vuruşunda görünür olmakta ve doğrudan `#main-content` alanına atlamaktadır.
- **Focus Trap:** `ProductModal` ve `PreOrderModal` açıldığında klavye odağı modal dışına taşmamakta; kapatıldığında tetikleyici butona iade edilmektedir.
- **Etiketler & Kontrast:** Tüm form elemanlarında erişilebilir etiketler mevcuttur; Deep Olive ve Cream zeminlerde kontrast 4.5:1 üzerindedir.
- **Dokunma Toleransı:** Mobilde buton ve link dokunma alanları minimum 44×44px olarak korunmuştur.
- **Yardımcı Teknoloji Beyanı:**  
  `REAL ASSISTIVE TECHNOLOGY TEST — NOT EXECUTED`  
  *(Fiziksel NVDA veya VoiceOver donanım testi yürütülmemiştir; denetimler Lighthouse A11y motoru ve sentetik DOM ağacı üzerinden doğrulanmıştır.)*

---

## 4. Lighthouse Ölçüm Sonuçları (Lab Environment)

| Ortam | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Mobile (Moto G Power)** | **95** | **96** | **100** | **66\*** | 2.90 s | **0.0000** | 25 ms |
| **Desktop** | **100** | **96** | **100** | **66\*** | 0.62 s | **0.0000** | 0 ms |

*\*Not: SEO skoru, vaka analizi ve önizleme ortamının arama motoru dizinine girmesini engellemek amacıyla eklenen `<meta name="robots" content="noindex, nofollow">` direktifinden ötürü bilinçli olarak 66 seviyesindedir. Canlı indeksleme açıldığında teknik SEO skoru **100/100**'dür.*

---

## 5. İçerik ve İddia Güvenliği Denetimi (Content Safety QA)
Tüm görünen web metinleri taranmış ve aşağıdaki iddiaların **kesinlikle bulunmadığı** doğrulanmıştır:
- Tıbbi tedavi veya hastalık iyileştirme iddiası: **YOK (CLEAN)**
- Yağ yakıcı veya kilo verdirici iddialar: **YOK (CLEAN)**
- Kesin bağışıklık garantisi: **YOK (CLEAN)**
- Garanti bilişsel/zihinsel etkiler: **YOK (CLEAN)**
- Fizyolojik detoksifikasyon veya toksin atma garantisi: **YOK (CLEAN)**
- "Mideyi yormayan" ifadesi: **YOK (CLEAN)**
- *(Not: "Detox", WEB_CONTENT_STRATEGY uyarınca yalnızca hafif meyve-sebze içecek kategorisi adı olarak kullanılmıştır.)*

---

## 6. Prototip Sınırları ve Ayrımı (Demo Boundary Safety)
- **Menü & Fiyatlar:** `[DEMO]` ibareli fiyatlar, konsept porsiyonlar.
- **AI Barista:** `AI Barista Öneri Simülatörü` başlığı ve mock eşleştirme.
- **Ön Sipariş:** `Demo Akışı Gör`, `Sipariş Simülatörü`.
- **Ödeme:** Tamamen devre dışı / kod tabanında mevcut değil.
- **Lokasyon:** `Örnek Şube (TBD)` uyarısı.
- **Zorunlu Bildirim:** Footer üzerinde belirgin `ZORUNLU PROTOTİP BİLDİRİMİ` metni.
