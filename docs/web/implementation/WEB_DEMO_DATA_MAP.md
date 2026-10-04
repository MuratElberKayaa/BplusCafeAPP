# B+ Wellness Café — Web Demo Data & Content Source Map

**Workstream:** Website Workstream — Web Phase 3  
**Doküman Sürümü:** 1.0.0 (Demo Data & Domain Mapping)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — DATA MAP  
**Roller:** Senior Frontend Engineer, Information Architect  

---

## 1. Genel Veri Mimarisi ve Kaynak Politikası

Tüm web verileri, bileşenler arasına rastgele gömülmeksizin tek bir merkezi kaynakta toplanmıştır:
- **Merkezi Dosya:** `apps/web/src/data/webData.ts`
- **Türetildiği Yer:** `packages/types/src/mocks/index.ts` ve `docs/web/design/WEB_COPY_DECK.md`
- **Kural:** Tüm fiyatlar, ürün gramajları, duyusal puanlar ve saatler açıkça `DEMO DATA — NON-PRODUCTION` statüsündedir.

---

## 2. Kategori Veri Haritası (`WEB_CATEGORIES`)

| Kategori ID | Slug | Görünen Ad (Label) | Tanım & Kapsam | İlgili Ürün Sayısı |
| :--- | :--- | :--- | :--- | :--- |
| `cat_all` | `all` | **Tümü** | Tüm kataloğun tek sayfada listelenmesi | 12 Ürün |
| `cat_coffee` | `coffee` | **Kahve** | Single-origin filtre kahveler, cold brew ve specialty espresso | 4 Ürün |
| `cat_matcha` | `matcha` | **Matcha** | Uji seremoniyel yeşil çay, kolajen ve bitkisel süt harmanları | 2 Ürün |
| `cat_tea` | `tea` | **Bitkisel Çay** | Ege adaçayı, lavanta ve kafeinsiz bütün yaprak demlemeler | 1 Ürün |
| `cat_smoothies` | `smoothies` | **Smoothie** | Taze avokado, ıspanak ve chia tohumlu koyu kıvamlı içecekler | 1 Ürün |
| `cat_juices` | `juices` | **Taze Sıkım / Detox\*** | Soğuk sıkım zencefil, narenciye ve taze yeşil elma karışımları | 1 Ürün |
| `cat_snacks` | `snacks` | **Sağlıklı Atıştırmalıklar** | Rafine şekersiz kinoa kaseleri ve çiğ meyve/kuruyemiş barları | 2 Ürün |
| `cat_homemade` | `homemade` | **Ev Yapımı** | Ev yapımı taze badem sütü bazlı adaptojen ve artisanal içecekler | 2 Ürün |

*\*Not: Detox terimi ferahlatıcı meyve/sebze karışımı ürün çeşidi adıdır; tıbbi organ arınması iddiası taşımaz.*

---

## 3. Ürün Kataloğu Özet Matrisi (`WEB_PRODUCTS`)

| Ürün ID | Ürün Adı | Kategori | Demo Fiyatı | Diyet Etiketleri | Duyusal Puanlar (Tatlılık / Gövde / Asidite) | Alerjen Bildirimi |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `prod_1` | **Lion's Mane Cold Brew** | `coffee` | `₺145.00 [DEMO]` | Bitkisel Süt, Şekersiz, Soğuk | T:1, G:4, A:2 (*Yumuşak Asidite Profili*) | Eser miktar badem/fındık |
| `prod_2` | **Matcha Glow Latte** | `matcha` | `₺165.00 [DEMO]` | Organik, Seremoniyel, Sıcak/Soğuk | T:2, G:3, A:1 (*Düşük Asidite*) | Laktozsuz, Glütensiz |
| `prod_3` | **Single-Origin V60 Pour Over** | `coffee` | `₺135.00 [DEMO]` | Tek Köken, Artisanal, Filtre | T:2, G:3, A:3 (*Dengeli Meyvemsi Asidite*) | Alerjen içermez |
| `prod_4` | **Cordyceps Clean Energy Latte** | `homemade` | `₺170.00 [DEMO]` | Ev Yapımı Badem Sütü, Ham Kakao, Şekersiz | T:1, G:4, A:2 (*Yumuşak Asidite Profili*) | Badem içerir |
| `prod_5` | **Spirulina Wellness Bowl** | `snacks` | `₺210.00 [DEMO]` | Vegan, Glutensiz, Yüksek Lif | T:1, G:3, A:2 (*Ferahlatıcı Narenciye*) | Susam içerir |
| `prod_6` | **Zencefil & Narenciye Taze Sıkım** | `juices` | `₺125.00 [DEMO]` | Soğuk Sıkım, Doğal Meyve | T:3, G:3, A:4 (*Canlandırıcı Narenciye Asiditesi*)| Kereviz içerir |
| `prod_7` | **Avocado Greens Clean Smoothie** | `smoothies` | `₺160.00 [DEMO]` | Vegan, Şekersiz, Kremamsı | T:2, G:4, A:1 (*Düşük Nötr Asidite*) | Alerjen içermez |
| `prod_8` | **Adaçayı & Lavanta Zen Demleme** | `tea` | `₺110.00 [DEMO]` | Kafeinsiz, Bütün Yaprak, Sıcak | T:1, G:2, A:1 (*Asiditesiz Yumuşak*) | Alerjen içermez |
| `prod_9` | **Ham Kakaolu Raw Bar** | `snacks` | `₺85.00 [DEMO]` | Glutensiz, Şekersiz, Çiğ | T:3, G:4, A:1 (*Asiditesiz*) | Badem içerir |
| `prod_10` | **Golden Turmeric Flat White** | `coffee` | `₺155.00 [DEMO]` | Zerdeçal, Yulaf Sütü, Sıcak | T:2, G:4, A:2 (*Yumuşak Asidite Profili*) | Laktozsuz |
| `prod_11` | **Iced Matcha Collagen Zen** | `matcha` | `₺180.00 [DEMO]` | Buzlu, Kolajen, Seremoniyel | T:1, G:3, A:1 (*Düşük Asidite*) | Balık kolajeni içerir |
| `prod_12` | **Ashwagandha Dream Cacao** | `homemade` | `₺150.00 [DEMO]` | Ev Yapımı Badem Sütü, Kafeinsiz, Adaptojen | T:2, G:4, A:1 (*Asiditesiz*) | Badem içerir |

---

## 4. İş Günü Anları Eşleşme Haritası (`WORKDAY_MOMENTS`)

| Zaman | Başlık | Güvenli Ritim Vaadi | Eşleşen Ürün | Kategori Yönlendirmesi |
| :--- | :--- | :--- | :--- | :--- |
| **08:00** | **İşe Gidiş** | Temiz uyanış, dengeli asidite ve güne dingin başlangıç | `Lion's Mane Cold Brew` | `#menu` ➔ `coffee` |
| **12:30** | **Öğle Arası** | Rehavet yapmayan hafiflik, lif ve dengeli protein desteği | `Spirulina Wellness Bowl` | `#menu` ➔ `snacks` |
| **15:00** | **B+ Mola** | Dengeli ikinci rüzgar, tatlı isteğine rafine şekersiz ferahlık | `Matcha Glow Latte` | `#menu` ➔ `matcha` |

---

## 5. AI Barista Senaryo Haritası (`AI_SCENARIOS`)

| Niyet ID | Görünen Çip (User Intent) | Eşleşen Ürün | Simüle Skor Rozeti | ADR-004 Grounding Güvencesi |
| :--- | :--- | :--- | :--- | :--- |
| `intent_focus` | **Odak Molası** | `Lion's Mane Cold Brew` | `%98 Uyum [DEMO SCORE]` | Katalog dışı ürün önerilmez |
| `intent_calm` | **Sakin Bir An** | `Matcha Glow Latte` | `%96 Uyum [DEMO SCORE]` | Katalog dışı ürün önerilmez |
| `intent_refresh` | **Tazelenme Molası** | `Zencefil & Narenciye` | `%95 Uyum [DEMO SCORE]` | Katalog dışı ürün önerilmez |
| `intent_morning` | **Yoğun Bir Sabah** | `Single-Origin V60` | `%99 Uyum [DEMO SCORE]` | Katalog dışı ürün önerilmez |
