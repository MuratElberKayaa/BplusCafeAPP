# B+ Wellness Café — Web Visual Asset Inventory

**Workstream:** Website Workstream — Web Phase 2  
**Doküman Sürümü:** 1.0.0 (Asset Inventory Blueprint)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — ASSET INVENTORY  
**Roller:** Senior Digital Art Director, Senior UI Designer, Design System Specialist  

---

## 1. Genel Varlık Politikası (Asset Policy & Sourcing)

Bu envanter, B+ Wellness Café web vitrininde yer alacak tüm görsel, vektör ve ikon varlıklarını (assets) detaylandırır.
- **Gerçekçi Olmayan İşveren Varlığı Yasağı:** İşveren tarafından henüz teslim edilmemiş gerçek pilot şube fotoğrafları veya gerçek sözleşmeli menü çekimleri kesin gibi sunulamaz; açıkça `Placeholder / Curated Mock` olarak işaretlenir.
- **Format Standardı:** Fotoğraflar modern, yüksek sıkıştırmalı `WebP` / `AVIF` formatında; vektörler ve logolar `SVG` formatında tutulacaktır.

---

## 2. Görsel Varlıklar Envanteri (Asset Matrix)

| Asset ID | İlgili Bölüm | Varlık Türü (Type) | Konu & Açıklama (Subject) | Aspect Ratio | Desktop / Mobile | Statü (Final / Placeholder) | Kaynak & Lisans Durumu (Source Status) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `AST-LOGO-01` | `SEC-NAV`, `SEC-FOOTER` | Vektör Logo | B+ Monogram & Wordmark Logosu (Deep Olive & White) | `3:1` (Vektör) | Her İkisi | **Final Brand Asset** | Dahili Tasarım Sistemi (`docs/design`) |
| `AST-HERO-01` | `SEC-HERO` | Fotoğraf (Hero) | Artisanal Cold Brew, buğulu bardak, traverten taş & zeytin yaprağı | `16:9` (D) / `4:5` (M) | Her İkisi | **Art-Directed Placeholder** | Curated Editorial Unsplash/Pexels Mock |
| `AST-TIME-01` | `SEC-MOMENTS` | Vektör İkon | 08:00 İşe Gidiş minimal saat motifi | `1:1` (24px) | Her İkisi | **Final UI Icon** | Dahili SVG Line-Art |
| `AST-TIME-02` | `SEC-MOMENTS` | Vektör İkon | 12:30 Öğle Arası kase / güneş motifi | `1:1` (24px) | Her İkisi | **Final UI Icon** | Dahili SVG Line-Art |
| `AST-TIME-03` | `SEC-MOMENTS` | Vektör İkon | 15:00 B+ Mola kahve fincanı / yaprak motifi | `1:1` (24px) | Her İkisi | **Final UI Icon** | Dahili SVG Line-Art |
| `AST-CONC-01` | `SEC-CONCEPT` | Fotoğraf | Çekirdek kavurma profili & seremoniyel matcha kasesi | `4:5` (D) / `16:9` (M) | Her İkisi | **Art-Directed Placeholder** | Curated Editorial Coffee Mock |
| `AST-BOTN-01` | `SEC-CONCEPT` | Vektör İllüstrasyon | 1px İnce zeytin dalı monoline çizimi | Serbest Vektör | Desktop | **Final Design Graphic** | Dahili Botanik İllüstrasyon Kütüphanesi |
| `AST-PROD-01` | `SEC-MENU-GRID` | Fotoğraf | Lion's Mane Cold Brew cam bardakta | `4:3` / `1:1` | Her İkisi | **Curated Mock** | Mock Ürün Kataloğu (`packages/types`) |
| `AST-PROD-02` | `SEC-MENU-GRID` | Fotoğraf | Matcha Glow Latte kasede | `4:3` / `1:1` | Her İkisi | **Curated Mock** | Mock Ürün Kataloğu |
| `AST-PROD-03` | `SEC-MENU-GRID` | Fotoğraf | Spirulina Yeşil Kase avokadolu | `4:3` / `1:1` | Her İkisi | **Curated Mock** | Mock Ürün Kataloğu |
| `AST-PROD-04` | `SEC-MENU-GRID` | Fotoğraf | Taze Zencefil & Narenciye Taze Sıkım | `4:3` / `1:1` | Her İkisi | **Curated Mock** | Mock Ürün Kataloğu |
| `AST-PROD-05` | `SEC-MENU-GRID` | Fotoğraf | Raw Kakaolu Enerji Barı | `4:3` / `1:1` | Her İkisi | **Curated Mock** | Mock Ürün Kataloğu |
| `AST-PROD-06` | `SEC-MENU-GRID` | Fotoğraf | Bitkisel Adaçayı & Lavanta Demlemesi | `4:3` / `1:1` | Her İkisi | **Curated Mock** | Mock Ürün Kataloğu |
| `AST-AI-01` | `SEC-AI-TEASER` | Fotoğraf | Matcha Zen Latte öneri görseli | `1:1` (Kare) | Her İkisi | **Curated Mock** | Mock AI Senaryo Görseli |
| `AST-MOCK-01` | `SEC-PREORDER-DEMO` | Mockup Grafik | B+ Müşteri Mobil Uygulaması Ekran Tasarımı Mockup'ı | `9:16` (Dikey) | Her İkisi | **Prototype Screen Asset** | Phase 2 Mobil UI Ekranı Mockup |
| `AST-MAP-01` | `SEC-LOCATION-HOURS` | Vektör Harita | Kadıköy Moda Örnek Sokak Krokisi (B+ renk paletinde) | `4:3` (D) / `16:9` (M) | Her İkisi | **Stylized Placeholder** | Stilize Vektör Kroki (Gerçek API Değil) |
| `AST-SOC-01` | `SEC-CONTACT-SOCIAL`| Fotoğraf | Instagram Karesi 1 (Matcha çırpma anı) | `1:1` (Kare) | Her İkisi | **Curated Mock** | Sosyal Medya Vitrin Koleksiyonu |
| `AST-SOC-02` | `SEC-CONTACT-SOCIAL`| Fotoğraf | Instagram Karesi 2 (Kavrulmuş çekirdekler) | `1:1` (Kare) | Her İkisi | **Curated Mock** | Sosyal Medya Vitrin Koleksiyonu |
| `AST-SOC-03` | `SEC-CONTACT-SOCIAL`| Fotoğraf | Instagram Karesi 3 (Güneşli ahşap masa) | `1:1` (Kare) | Her İkisi | **Curated Mock** | Sosyal Medya Vitrin Koleksiyonu |
| `AST-SOC-04` | `SEC-CONTACT-SOCIAL`| Fotoğraf | Instagram Karesi 4 (Taze avokado kasesi) | `1:1` (Kare) | Her İkisi | **Curated Mock** | Sosyal Medya Vitrin Koleksiyonu |
