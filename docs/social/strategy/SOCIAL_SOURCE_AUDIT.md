# B+ Wellness Café by Mineiro Coffee
# SOCIAL SOURCE AUDIT & CLAIM SAFETY REGISTER
**Workstream:** Social Media | **Phase:** Social Phase 0 (Source Truth Hardening)  
**Evaluator:** Senior Social Media Strategist, Brand Strategist & Content Safety Reviewer  
**Reference Document:** `docs/social/reference/SOSYAL_MEDYA_PAKETI_GEMINI.md` (Kreatif Referans Kaynağı — İşveren Doğrulaması Değildir)  
**Status:** READY FOR FREEZE  

---

## 1. Yönetici Özeti (Executive Summary)

Bu denetim belgesi, `SOSYAL_MEDYA_PAKETI_GEMINI.md` referans metnindeki her bir içerik unsurunu, ürün reçetesini, operasyonel veriyi ve pazarlama iddiasını **kaynak doğruluğu sertleştirme (source truth hardening)** süzgecinden geçirir.

### Temel Kaynak İlkesi
* Gemini tarafından üretilen sosyal medya paketi **resmi bir işveren belgesi değil, bir KREATİF REFERANS (Creative Reference)** taslağıdır.
* Gemini metninde yer alan ürün adları, içerik listeleri, diyet iddiaları, adres veya operasyonel detaylar **kendiliğinden doğrulanmış sayılamaz**.
* Sistem genelinde kesin olarak yalnızca 3 olgusal sınıflandırma (factual classification) kullanılır:
  1. **CONFIRMED PROJECT DATA (Doğrulanmış Proje Verisi)**
  2. **DEMO / CREATIVE PROTOTYPE DATA (Demo / Kreatif Prototip Verisi)**
  3. **EMPLOYER DATA REQUIRED (İşveren Onayı Gereken Veri)**

---

## 2. Üç Seviyeli Olgusal Sınıflandırma Sistemi (Factual Classification)

### A) CONFIRMED PROJECT DATA (Yalnızca Orijinal Proje Tanımında Bulunanlar)
* **Marka İsmi:** B+ Wellness Café
* **İş Birliği / İsimlendirme:** by Mineiro Coffee
* **Hedef Kitle:** Yoğun tempoda çalışan beyaz yaka profesyoneller
* **Hizmet Modeli:** Gel-al ağırlıklı (takeaway-heavy) / self-servis konsepti
* **Gelecek Yönelimi:** İleride teslimat (delivery as future direction)
* **Menü Çerçevesi:** Geniş kategori çerçevesi (Kahve, fonksiyonel içecekler, taze alternatifler)
* **Görsel Yönelim:** Koyu yeşil / krem kurumsal renk yönelimi
* **Görsel Dil:** Botanik ve editoryal görsel dil

### B) DEMO / CREATIVE PROTOTYPE DATA (Tasarım/Örnek Amaçlı Kurgular)
* **Ürün İsimleri:** Lion's Mane Cold Brew, Spirulina Kase, Golden Turmeric Elixir vb. (**DEMO PRODUCT**)
* **İçerik & Reçeteler:** Lion's Mane, Ashwagandha, Cordyceps, Spirulina formülasyonları
* **Demleme & Hazırlama Detayları:** "16 saatlik soğuk demleme", demleme süreleri ve metodolojileri
* **Çekirdek Kökenleri:** "Kolombiya Huila" vb. spesifik orijinler
* **Diyet & İçerik İddiaları:** "Rafine şeker yok", "Sentetik şurup yok", "Organik", "Glutensiz" (İşveren doğrulaması olmaksızın marka taahhüdü yapılamaz; demo ürün içeriği dilinde kalmalıdır)
* **Fiyatlar:** ₺140, ₺180, ₺220 vb. menü fiyatları
* **İletişim & Lokasyon:** `@bpluswellnesscafe` kullanıcı adı, `bpluswellnesscafe.com` alan adı, Mecidiyeköy adresi, metroya yürüme mesafesi
* **Fiziksel Donanım:** Wi-Fi hızı, priz altyapısı, evcil hayvan alanı, coworking olanakları
* **Operasyon:** Çalışma saatleri, mobil sipariş (order-ahead), teslimatın bugünden varlığı
* **AI Metrikleri:** %98 eşleşme vb. tüm oranlar (Demo simülasyon puanıdır)

### C) EMPLOYER DATA REQUIRED (Gerçek Hayata Geçişte İşveren Onayı Gerekenler)
* Resmi tescilli Instagram handle ve alan adı
* Fiziksel kira/şube sözleşmesi ve resmi adres
* Ruhsatlı çalışma saatleri ve açılış takvimi
* Resmi menü reçeteleri, alerjen bildirimleri ve fiyat listesi
* Sipariş entegrasyonu ve operasyonel teslimat ortaklıkları

---

## 3. Ayrıntılı Kaynak Denetim Matrisi (Detailed Audit Register)

| # | Bölüm / Bileşen | Orijinal Gemini İfadesi | Risk / Doğruluk Durumu | Olgusal Sınıf | Karar & Yeniden Yazım Yönü | Durum |
|---|---|---|---|---|---|---|
| **01** | Profil / Handle | `@bpluswellnesscafe` | Tescil teyit edilmedi. | **DEMO / PLACEHOLDER** | Tasarım mockup'larında estetik yer tutucu; gerçek hesap açılmaz. | READY FOR FREEZE |
| **02** | Profil / İsim | `B+ Wellness Café \| by Mineiro Coffee` | Proje şartnamesiyle uyumlu. | **CONFIRMED PROJECT DATA** | Aynen kullanılır. | READY FOR FREEZE |
| **03** | Profil / Biyografi | "Rafine şekersiz, katkısız, bitkisel alternatifler" | Reçete taahhüdü işverence onaylanmadı. | **DEMO / CREATIVE PROTOTYPE** | "Coffee, matcha ve bitkisel alternatifler. İş gününe iyi bir +." | READY FOR FREEZE |
| **04** | Profil / Lokasyon | "Mecidiyeköy Mah., Büyükdere Cd., Şişli" | Pilot senaryo adresi. | **DEMO / CREATIVE PROTOTYPE** | "DEMO / Örnek Lokasyon Senaryosu — gerçek şube bilgisi değildir." | READY FOR FREEZE |
| **05** | Profil / Link | `bpluswellnesscafe.com` | Prototip web yayını. | **DEMO / PLACEHOLDER** | Prototip web arayüzü linki olarak işaretlenir. | READY FOR FREEZE |
| **06** | Highlights / 1 | "İmza adaptojenik soğuk demlemeler..." | Ürün adları kurgusaldır. | **DEMO / CREATIVE PROTOTYPE** | "Örnek Menü Seçkisi (Demo)". | READY FOR FREEZE |
| **07** | Highlights / 2 | "Adaptojenler: Lion's Mane, Ashwagandha..." | Takviye gıda ve sağlık iddiası riski. | **DEMO / CREATIVE PROTOTYPE** | "Botanik İçerikler: Tat profilleri ve bitkisel alternatifler." | READY FOR FREEZE |
| **08** | Highlights / 3 | "Mecidiyeköy: Ulaşım krokisi, prizli masalar..." | Fiziksel kafe donanımı doğrulanmadı. | **DEMO / CREATIVE PROTOTYPE** | "Konsept Mekân & Çalışma Ritmi Atmosferi". | READY FOR FREEZE |
| **09** | Highlights / 4 | "AI Barista: Simülatör ekran kayıtları" | Kesin AI sipariş algısı riski. | **DEMO / CREATIVE PROTOTYPE** | "AI Barista — Prototip Simülasyonu". | READY FOR FREEZE |
| **10** | Post 1 / Görsel | Dış cephe ve tabela çekimi | Gerçek mekân fotoğrafı yok. | **DEMO / CREATIVE PROTOTYPE** | Tabela logolu konsept görsel/mockup. | READY FOR FREEZE |
| **11** | Post 1 / Metin | "Rafine şeker yok. Sentetik şuruplar yok. Kafein çarpıntısı yok." | Çarpıntı medikal iddia; şeker/şurup taahhüdü işveren onayı gerektirir. | **DEMO / CREATIVE PROTOTYPE** | "Nitelikli çekirdekler, dengeli tat profilleri ve iş gününe eşlik eden bitkisel alternatifler." (Duyusal dil). | READY FOR FREEZE |
| **12** | Post 1 / Lokasyon | "Metro ve metrobüse 2 dakika mesafede" | Kesin yürüme mesafesi doğrulanmadı. | **DEMO / CREATIVE PROTOTYPE** | "Kentsel iş temposunda, taze bir mola noktası." | READY FOR FREEZE |
| **13** | Post 2 / Ürün Adı | Lion's Mane Cold Brew | Gemini tarafından türetildi. | **DEMO PRODUCT** | Tasarımda DEMO PRODUCT statüsüyle kullanılır; işveren onaylı menü değildir. | READY FOR FREEZE |
| **14** | Post 2 / Metin | "Nörolojik odaklanma... 16 saatlik soğuk demleme... Kolombiya Huila" | Tıbbi iddia + doğrulanmamış orijin/süre. | **DEMO PRODUCT COPY** | "Soğuk demleme kahveye eşlik eden yumuşak fındıksı notalar. Sabah temposu için dengeli bir fincan." (Tıbbi iddia yok). | READY FOR FREEZE |
| **15** | Post 2 / Etiket | `#BiohackingCoffee #MasaBaşıEnerji` | Biohacking klinik jargondur. | **REMOVED** | Tamamen kaldırıldı. Yerine: `#BPlusCafe #SpecialtyCoffee #MindfulWorkday`. | READY FOR FREEZE |
| **16** | Post 3 / Ürün Adı | Spirulina Yeşil Kase | Gemini tarafından türetildi. | **DEMO PRODUCT** | Tasarımda DEMO PRODUCT statüsüyle kullanılır. | READY FOR FREEZE |
| **17** | Post 3 / Metin | "Sindirimi destekleyen zencefil... enerjin hiç düşmesin" | Sindirim tıbbi beyandır; enerji vaat içerir. | **DEMO PRODUCT COPY** | "Taze zencefil ve narenciye ferahlığı. Ağır yemekler yerine masa başında hafif bir öğle molası seçeneği." | READY FOR FREEZE |
| **18** | Post 3 / CTA | "Paket servis veya gel-al için sipariş ver" | Aktif teslimat operasyonu yok. | **DEMO / CREATIVE PROTOTYPE** | "Örnek menümüzü web prototipimizden keşfedin." | READY FOR FREEZE |
| **19** | Post 4 / Konsept | Adaptojenler 101 Karusel (Kortizol, Hafıza) | Tıbbi / farmakolojik risk. | **DEMO / CREATIVE PROTOTYPE** | 15:00 Molası: Bitkisel tat profilleri ve matcha ritüeli editoryal içeriği. | READY FOR FREEZE |
| **20** | Post 4 / Metin | "4 mucizevi bitki... kortizol kontrolü" | "Mucizevi" sansasyoneldir; kortizol yasaktır. | **REMOVED** | Yasaklı kelimeler silindi. Çay ve bitkilerin aromatik zenginliği vurgulanır. | READY FOR FREEZE |
| **21** | Post 5 / Donanım | "Fiber Wi-Fi, her masada Type-C priz" | Kesin fiziksel donanım doğrulanmadı. | **DEMO / CREATIVE PROTOTYPE** | Atmosfer anlatımı; operasyonel kesinlik içermez. | READY FOR FREEZE |
| **22** | Post 5 / Saat | "Sabah 07:30 - Akşam 22:00" | İşveren teyidi şarttır. | **EMPLOYER DATA REQUIRED** | Tasarımlarda "Örnek Çalışma Saatleri (TBD)" yer tutucusu. | READY FOR FREEZE |
| **23** | Post 6 / AI Barista | "AI 10 saniyede mükemmel içeceği seçer (%98)" | Yanıltıcı üretim vaadi, sahte doğruluk oranı. | **DEMO / CREATIVE PROTOTYPE** | "B+ AI Barista — Prototip: Tercihlerine göre demo katalogdan ilham verici bir öneri sunar." | READY FOR FREEZE |
| **24** | Story 1 / Anket | "Pil durumu: %20 -> Çift shot reçetesi" | Medikal tedavi/takviye reçetesi riski. | **DEMO / CREATIVE PROTOTYPE** | 08:00 Ritüeli: Sabah Kahvesi vs. Matcha anketi (Yaşam tarzı seçimi). | READY FOR FREEZE |
| **25** | Story 2 / Quiz | "B: Zerdeçal & Zencefil (Bağışıklık)" | "Bağışıklık" sağlık iddiasıdır. | **DEMO / CREATIVE PROTOTYPE** | "B: Isıtıcı Baharatlar (Zerdeçal & Zencefil Tat Profili)". | READY FOR FREEZE |
| **26** | Story 3 / S&C | Baristaya Sor: Tat profilleri ve çekirdekler | Eğitici ve duyusal topluluk diyaloğu. | **DEMO / CREATIVE PROTOTYPE** | Aynen kullanılır; tıbbi tavsiye verilmez. | READY FOR FREEZE |
| **27** | Reels / Metin | "Kafein çarpıntısı yok. Berrak odaklanma." | Çarpıntı ve nörolojik odak medikaldir. | **DEMO / CREATIVE PROTOTYPE** | "Yumuşak içim. Dengeli bir iş günü ritmi." | READY FOR FREEZE |
| **28** | Fiyatlar | ₺140, ₺180, ₺220 | İşveren fiyatlandırması yok. | **EMPLOYER DATA REQUIRED** | Tasarımlarda demo fiyat olarak işaretlenir. | READY FOR FREEZE |

---

## 4. Sağlık İddiası Güvenliği (Health Claim Safety Status: PASS)

Aşağıdaki kategoriler kesin olarak metin ve görsel sisteminden çıkarılmış ve korunmuştur:
* ❌ *Nörolojik odaklanma / Beyin sisi / Hafıza*
* ❌ *Kortizol dengesi / Stres hormonu*
* ❌ *Bağışıklık / İmmün sistem desteği*
* ❌ *Sindirimi destekler / Bağırsak sağlığı*
* ❌ *Enerji garantisi / Kesintisiz güç*
* ❌ *Kafein çarpıntısı yok / Çarpıntı yapmaz*
* ❌ *Detoksifikasyon / Toksin atma*
* ❌ *Tıbbi ve farmakolojik yararlar*

---

## 5. Dondurma Hazırlığı Kararı (Freeze Readiness Decision)

Gemini sosyal paketi resmi gerçeklik değil, **Kreatif Prototip Referansı** olarak yeniden sınıflandırılmıştır. Yukarıdaki matris uyarınca tüm ürün adları **DEMO PRODUCT**, tüm reçete/diyet iddiaları **DEMO PRODUCT COPY / CREATIVE PROTOTYPE** olarak etiketlenmiştir.

**Durum:** **READY FOR FREEZE** (Social Phase 0 kilitlenmeye hazır).
