# B+ Wellness Café — High-Fidelity Section Specification

**Workstream:** Website Workstream — Web Phase 2  
**Doküman Sürümü:** 1.0.0 (High-Fidelity Section Design Specification)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — SECTION DESIGN SPECIFICATION  
**Roller:** Senior UI Designer, Senior Web Product Designer, Design System Specialist  

---

## 1. Genel Bölüm Standartları ve Dikey Ritim (Vertical Rhythm)

Sayfa boyunca bölümler arası dikey boşluklar monotonluktan kaçınmak üzere ritmik olarak çeşitlendirilmiştir:
- **Hero & Menü Bölümleri:** `120px – 144px` (Geniş nefes alanı)
- **Hikaye & İnovasyon Bölümleri (Moments, Concept, AI Teaser):** `96px – 112px`
- **İkincil / Geçiş Bölümleri (Delivery Preview, Contact):** `72px – 88px`
- **Mobil Ekranlarda:** `64px – 80px` standart dikey boşluk.

---

## 2. 14 Bölümün Detaylı High-Fidelity Tasarım Spesifikasyonu

### 1. SEC-NAV — Sabit Üst Gezinme & Çekmece
- **Düzen:**
  - *Desktop (1440px):* Sabit yükseklik `80px`, içerik genişliği `1200px` ortalanmış. Sol tarafta B+ monogram ve wordmark logosu, merkezde 5 adet metin linki (16px, Regular), sağda `Menüyü Keşfet` Primary CTA butonu (Hap formunda, 44px yükseklik).
  - *Mobile (375px):* Yükseklik `64px`, iki uçlu düzen (Sol: Logo 32px, Sağ: 24px minimalist çizgi hamburger butonu).
- **Renk & Yüzey:**
  - *Sayfa Başında (Top):* Şeffaf veya Cream zemin (`#F4F0E6`), Deep Olive logo ve linkler.
  - *Kaydırıldığında (Scrolled):* `rgba(255, 253, 248, 0.88)` (Warm White), `backdrop-filter: blur(16px)`, alt sınır `1px solid rgba(227, 222, 195, 0.7)`.
- **Mobil Çekmece (Drawer):** Sağdan açılır `300px` genişlik, Deep Olive zemin (`#34422D`), Warm White linkler (20px H3), altta şube ve demo rozeti.
- **Duyarlı Davranış:** 1024px altında hamburger menüye geçer; 1025px üzerinde tam link barına açılır.

---

### 2. SEC-HERO — Marka Açılışı ve İlk 5 Saniye
- **Düzen:**
  - *Desktop:* 12 Sütunlu asimetrik editorial split düzen. Sol %45 sütun tipografi ve butonlar; sağ %55 sütun yüksek çözünürlüklü görsel kompozisyonu. Dikey padding `144px top / 120px bottom`.
  - *Mobile:* Dikey akış; üstte büyük başlık ve slogan, altında iki buton, en altta 4:5 oranında dikey ürün görseli.
- **Tipografi & Hiyerarşi:**
  - *Eyebrow:* `13px` Bold, Deep Olive, Takip: `+0.08em` (B+ WELLNESS CAFÉ by Mineiro Coffee).
  - *Display Başlık:* `56px / 66px` ExtraBold (Desktop), `36px / 44px` (Mobile) — *"İş gününe iyi bir +."*
  - *Alt Metin:* `18px / 28px` Regular, Muted Text (`#6B675F`) — Nitelikli tek kökenli kahveler, adaptojenik botanikler ve şehir temposuna hafiflik katan fonksiyonel lezzetler.
  - *Güven Rozeti:* 3'lü yatay kapsül (`Rafine Şekersiz • Bitkisel Alternatifler • Nitelikli Çekirdek`), Warm White zemin, Sage kenarlık.
- **Butonlar:**
  - Primary CTA: `Menüyü Keşfet` (Deep Olive dolgulu, Warm White metin, 48px yükseklik).
  - Secondary CTA: `Konsepti Gör` (Şeffaf zemin, 1.5px Deep Olive kenarlık).
- **Görsel:** Artisanal tek kökenli Cold Brew bardağı, traverten taş zemin, taze adaçayı yaprakları ve yumuşak doğal sabah ışığı.

---

### 3. SEC-MOMENTS — Şehirli İş Günü Anları
- **Düzen:**
  - *Desktop:* Ortalanmış başlık bloğu, altında yan yana 3 eşit kart sütunu (`grid-cols-3`, boşluk `32px`).
  - *Mobile:* Başlık altında yatay kaydırılabilir karusel (`scroll-snap-type: x mandatory`) veya dikey 3 kart.
- **Kart Tasarımı (MomentCard Ailesi):**
  - Zemin: Warm White (`#FFFDF8`), Kenarlık: `1px solid #E3DEC3`, Köşe yarıçapı: `20px`, İç padding: `32px`.
  - *Zaman Rozeti:* Latte (`#D8B98C`) zemin üstünde Deep Olive 14px SemiBold etiket (`08:00`, `12:30`, `15:00`).
  - *Başlık:* `22px` H3 Deep Olive (`İşe Gidiş`, `Öğle Arası`, `B+ Mola`).
  - *Açıklama (Safe Copy):*
    1. **08:00:** Temiz uyanış, dengeli asidite ve güne berrak başlangıç. (Örnek: *Single-Origin Cold Brew + Lion's Mane* `[DEMO DATA]`)
    2. **12:30:** Rehavet yapmayan hafif öğün, lif ve dengeli protein desteği. (Örnek: *Spirulina Kase + Soğuk Sıkım Zencefil* `[DEMO DATA]`)
    3. **15:00:** Dengeli ikinci rüzgar, tatlı isteğine rafine şekersiz ferahlık. (Örnek: *Matcha Glow Latte + Ham Kakaolu Raw Bar* `[DEMO DATA]`)
  - *Kart Eylemi:* Alt kısımda metin linki: `Bu Anın Reçetesini Gör →` (Hover durumunda sağa 4px kayar).

---

### 4. SEC-CONCEPT — B+ Felsefesi ve Üçüncü Nesil Wellness
- **Düzen:**
  - *Desktop:* 2 Sütunlu editorial kompozisyon. Sol sütunda tam boy görsel kartı (450px × 560px); sağ sütunda felsefe manifestosu ve 3 değer bloku.
  - *Mobile:* Dikey sıra; önce başlık, sonra kompakt görsel, altında 3 madde.
- **Görsel & Doku:** Kavurma profili gösteren tek kökenli kahve çekirdekleri, mat seramik kasede seremoniyel matcha ve ham keten kumaş dokusu.
- **İçerik Blokları:**
  1. *Dürüst & Katkısız:* Şurupsuz, rafine şekersiz, sertifikalı ham maddeler.
  2. *Artisanal Çekirdek:* Mineiro Coffee uzmanlığıyla profillendirilmiş dengeli asidite.
  3. *Şehirli Kolaylık:* Sıra beklemeden, pratik self-servis ve gel-al standardı.

---

### 5. SEC-MENU-NAV — Menü Kategori Seçici
- **Düzen:**
  - *Desktop:* Ortalanmış tek satır çip grubu (`flex justify-center gap-3`).
  - *Mobile:* Ekranın sağ kenarından taşan yatay kaydırılabilir bar (`overflow-x-auto`, sağ kenarda hafif fade gradient).
- **Çip Tasarımı (CategoryPill):**
  - Boyut: Yükseklik `42px`, yatay padding `20px`, `radius.full` (999px).
  - *Default:* Warm White zemin, `1px solid #E3DEC3`, Espresso metin.
  - *Active:* Deep Olive zemin (`#34422D`), Warm White metin (Bold).
- **8 Kategori:**
  `Tümü`, `Kahveler`, `Matcha & Glow`, `Fonksiyonel Wellness`, `Bitkisel Çaylar`, `Smoothies`, `Taze Sıkım & Detoks*`, `Sağlıklı Atıştırmalıklar`.  
  *(Açıklama: Detoks terimi ferahlatıcı meyve/sebze karışımı ürün çeşidini belirtir; fizyolojik arınma iddiası taşımaz).*
- **Global Bilgilendirme Notu:** Kategori başlığının hemen altında zarif 13px Muted Text:  
  *"Menü ve fiyatlar örnek içeriktir. Gerçek sipariş açılışta mobil uygulamada aktifleşecektir."*

---

### 6. SEC-MENU-GRID — Kategorize Ürün Kartları Vitrini
- **Düzen:**
  - *Desktop:* 3 Sütunlu ızgara (`grid-cols-3 gap-8`), her sayfada en az 12 ürün kartı.
  - *Mobile:* Tek sütun dikey liste (`grid-cols-1 gap-6`).
- **Kart Tasarımı (ProductCard Ailesi):**
  - Boyut: Genişlik akışkan, yükseklik yakl. 420px.
  - Yüzey: Warm White zemin, `1px solid #E3DEC3`, köşe yarıçapı `16px`.
  - *Görsel Alanı:* Üstte 1:1 veya 4:3 oranında fotoğraf, hafif kavisli üst köşeler, taşma gizli (overflow-hidden).
  - *Rozetler:* Görsel üzerinde sol üstte en fazla 2 etiket (`[Vegan]`, `[Bitkisel Süt]`), Sage zemin üstü Deep Olive.
  - *İçerik:*
    - Ürün Adı: `18px` H3 Deep Olive.
    - Kısa Duyusal Tanım: `14px` Muted Text (2 satır sınırlı).
    - Fiyat: `16px` SemiBold Deep Olive: `₺145.00 [DEMO]`.
  - *Hover Affordance:* Kart fare ile üzerine gelindiğinde 4px yükselir (`shadow.card`), altta "Detaylı İncele →" linki belirginleşir.

---

### 7. MOD-PRODUCT — Ürün Detay & Duyusal Profil Modalı
- **Düzen:**
  - *Desktop:* Ortalanmış iki sütunlu modal pencere (`width: 720px`, max-height `85vh`), koyu karartmalı overlay (`rgba(43, 35, 30, 0.65)`). Sol sütun görsel (%45), sağ sütun detaylar (%55).
  - *Mobile:* Ekranın altından yukarı kayan Bottom Sheet (`height: 85vh`, üst köşeler `24px` yuvarlak).
- **İçerik & Duyusal Profil Göstergesi:**
  - *Duyusal Puanlar:* 5 basamaklı minimalist yuvarlak göstergeler:
    - Tatlılık Seviyesi: `● ○ ○ ○ ○ (1/5 - Şurupsuz / Doğal)`
    - Gövde / Yoğunluk: `● ● ● ● ○ (4/5 - Kremamsı Yulaf Gövdesi)`
    - Asidite: `● ● ○ ○ ○ (2/5 - Dengeli ve Yumuşak Asidite Profili)`
  - *Reçete & Alerjen:* Tam hammadde listesi, eser miktar alerjen uyarısı.
  - *Alt Uyarı:* `11px` Caption: *"Demo ürün verisi — Çevrim içi sepet kapalıdır."*
  - *CTA Butonu:* `Mobil Uygulamada Sipariş Ver (Yakında)` (Deep Olive dolgulu).

---

### 8. SEC-AI-TEASER — B+ AI Barista İnovasyon Vitrini
- **Düzen:**
  - *Desktop:* 1200px genişlikte özel yükseltilmiş interaktif ada kartı. Krem zemin üzerinde Warm White panel, Latte ince çerçeve (`1.5px solid #D8B98C`).
  - *Mobile:* Dikey akış; üstte niyet çipleri, altta dinamik öneri kartı.
- **İçerik & Niyet Seçimi (User Intent Chips):**
  - Başlık: "Bugün Bedenin ve Zihnin Ne İstiyor?"
  - Çipler (Fizyolojik vaat içermeyen niyetler):
    - `[ Odak Molası ]`
    - `[ Sakin Bir An ]`
    - `[ Tazelenme Molası ]`
    - `[ Yoğun Bir Sabah ]`
- **Simüle Öneri Kartı:**
  - Başlık: *Matcha Zen Latte*
  - Skor Rozeti: `98% Uyum [DEMO SCORE / PROTOTYPE SIMULATION]`
  - Açıklama: L-Theanine ve seremoniyel matcha ile gün ortasında dengeli ve sakin bir tempo.
  - ADR-004 Grounding Notu: *"Yapay zekamız yalnızca menümüzdeki gerçek ürünleri önerir."*
  - CTA: `AI Barista'yı Keşfet (Demo)` (Tıklandığında toast uyarısı açar).

---

### 9. SEC-PREORDER-DEMO — Ön Sipariş Teaser & Mobil Deneyim
- **Düzen:**
  - *Desktop:* Sol tarafta 3 adımlı yatay veya dikey süreç kartları; sağ tarafta mobil uygulama ekran mockup'ı ve e-posta kayıt alanı.
  - *Mobile:* Dikey 3 adım ve bülten formu.
- **Metin:**
  - Başlık: *"Gelmeden seç. Sıra beklemeden al."*
  - 3 Adım: 1. Menüden seç ve özelleştir → 2. Canlı hazırlanışını izle → 3. Kasada beklemeden teslim al.
  - Rozet: `DEMO / YAKINDA • ORDER AHEAD VİTRİNİ`
- **CTA:** `Demo Akışı Gör` (MOD-PREORDER'ı açar).

---

### 10. MOD-PREORDER — Ön Sipariş Demo Simülatörü Modalı
- **Düzen:**
  - Ortalanmış 540px genişlikte modal kartı.
- **3 Adımlı Simülasyon Arayüzü:**
  - *Adım 1:* Seçili ürün kartı (*Lion's Mane Cold Brew — Büyük Boy*).
  - *Adım 2:* Gel-al teslimat saati seçici (*10 dk sonra / 08:45*).
  - *Adım 3:* Demo özeti (*Kadıköy Moda Örnek Şube — ₺145.00*).
- **Zorunlu Demo Bitişi & Rozet:**
  - Belirgin kırmızı/amber zeminli bilgilendirme kutusu:  
    `[PROTOTİP TAMAMLANDI — GERÇEK SİPARİŞ VEYA ÖDEME OLUŞTURULMADI]`
  - Kredi kartı, CVV veya ödeme girdi alanları kesinlikle bulunmaz.
  - Kapat butonu: `Anladım & Kapat`.

---

### 11. SEC-DELIVERY-PREVIEW — Teslimat Ön Gösterimi (Opsiyonel / TBD)
- **Düzen:**
  - Sayfa boyunca uzanan ince, minimalist şerit banner (padding `48px y`).
  - Zemin: Cream (`#F4F0E6`), İnce Sage çerçeve.
- **İçerik:**
  - Başlık: *"Ofisinize ve Evinize Sağlıklı Mola (Yakında)"*
  - Rozet: `[GELECEK FAZ • DELIVERY MODEL TBD]`
  - Metin: Özel ısı korumalı cam ambalajlarla yakında çalışma masanızda.

---

### 12. SEC-LOCATION-HOURS — Şube Lokasyonu, Saatler & Ulaşım
- **Düzen:**
  - *Desktop:* 2 Sütun. Sol sütunda şube bilgisi, çalışma saatleri tablosu ve sipariş kesilme kuralı; sağ sütunda stilize örnek harita kartı.
  - *Mobile:* Dikey yığın; saatler üstte, kroki altta.
- **Şube ve Saat Tasarımı (TBD / Example Data):**
  - Şube Adı: `Kadıköy / İstanbul`
  - Açık Rozet: `[ÖRNEK LOKASYON — TBD EMPLOYER DATA]`
  - Adres: `Moda Caddesi No: 42 (DEMO ADDRESS / KURULUM AŞAMASINDA)`
  - Çalışma Saatleri Tablosu:
    - Hafta İçi: `07:30 – 22:00 [DEMO SAATLER / TBD]`
    - Hafta Sonu: `08:30 – 23:00 [DEMO SAATLER / TBD]`
    - Sipariş Kesilme Süresi: `Kapanıştan 15 dk önce (DEMO KURALI / DEC-10)`
- **Harita Görseli:** Gerçek Google Maps API yerine B+ tasarım renklerinde stilize edilmiş vektörel Kadıköy Moda sokak krokisi placeholder'ı.
- **CTA:** `Örnek Rotayı Gör (Demo Link)`.

---

### 13. SEC-CONTACT-SOCIAL — İletişim, Topluluk & Instagram
- **Düzen:**
  - *Desktop:* Sol %55 sütun 4 fotoğraflı Instagram ızgarası (`grid-cols-2 gap-4`); sağ %45 sütun kurumsal iletişim ve demo mesaj alanı.
  - *Mobile:* 2x2 fotoğraf ızgarası, altta iletişim satırları.
- **Görseller:** 1. Seremoniyel matcha çırpma anı, 2. Kavrulmuş çekirdekler, 3. Taze avokado kasesi, 4. Güneş alan minimalist kafe köşesi.
- **İletişim & Form:**
  - E-posta: `merhaba@bpluscafe.com [DEMO]`
  - Telefon: `+90 (216) 555 00 22 [DEMO]`
  - Form: Ad, E-posta, Mesaj alanları. Submit butonu: `Gönder (Demo Form — Sunucuya İletilmez)`.

---

### 14. SEC-FOOTER — Alt Bilgi, Telif Hakkı ve Yasal Feragatname
- **Düzen:**
  - Arka Plan: Deep Olive (`#34422D`), Metinler: Warm White ve Sage.
  - İçerik: 4 Sütunlu düzen (Marka logosu & manifesto, Sayfa bağlantıları, Sosyal ikonlar, Yasal haklar).
- **Zorunlu Prototip Feragatnamesi (Prominent Disclaimer):**
  > *"Bu web sitesi, B+ Wellness Café Digital Platform projesi için tasarlanmış bir ön yüz ve pazarlama vitrini prototipidir. Sitede yer alan fiyatlar, saatler, lokasyonlar ve ürün bilgileri örnek amaçlıdır. Gerçek ödeme veya ticari sipariş alınmamaktadır."*
- **Telif:** `© 2026 B+ Wellness Café by Mineiro Coffee. Tüm hakları saklıdır.`
- **Başa Dön:** Sağ alt köşede `^ Başa Dön` pürüzsüz kaydırma butonu.
