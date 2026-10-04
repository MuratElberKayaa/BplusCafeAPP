# B+ Wellness Café — Web Section Inventory
**Workstream:** Website Workstream — Web Phase 0  
**Doküman Sürümü:** 1.0.0 (Web Scope Lock)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED & SCOPE LOCKED  

---

## 1. Genel Bakış

Bu envanter, B+ Wellness Café müşteri web sitesinde yer alan toplam **14 bölüm ve modalı (13 ana bölüm/modal + Footer)** eksiksiz olarak detaylandırır. Her bölüm için **Section ID**, **Amaç**, **Birincil İçerik**, **CTA**, **Gerekli Veri**, **Duyarlı Öncelik** ve **Etkileşim Kuralları** net olarak tanımlanmıştır.

---

## 2. Bölüm Bazlı Detaylı Envanter (14 Bölüm & Modal)

### 1. SEC-NAV — Sabit Üst Gezinme ve Mobil Çekmece
- **Section ID:** `SEC-NAV`
- **Amaç:** Kullanıcıya sitenin her noktasında erişilebilir gezinme sağlamak ve hızlıca ilgili bölümlere veya demo aksiyonuna yönlendirmek.
- **Birincil İçerik:**
  - B+ Wellness Café monogram logosu ("B+" rozeti).
  - Gezinme linkleri: Günün Anları, Konsept, Menü, AI Barista, Lokasyon & Saatler, İletişim.
  - "Ön Sipariş (Demo)" aksiyon butonu.
  - Mobilde: Hamburger açılış ikonu ve tam ekran/çekmece menü paneli.
- **CTA:** `Ön Sipariş (Demo)` ➔ `MOD-PREORDER` açar.
- **Gerekli Veri:** Statik link haritası, demo etiketi.
- **Duyarlı Öncelik (Responsive Priority):** P0 (Tüm cihazlarda zorunlu ve kalıcı).
- **Etkileşim:**
  - Masaüstünde sayfa kaydırıldıkça şeffaf zeminden yarı saydam Deep Olive (`#34422D`) veya Warm White (`#FFFDF8`) zemine yumuşak geçiş (blur backdrop).
  - Mobilde hamburger tıklandığında sağdan kayan yumuşak çekmece (slide-in drawer). Link tıklandığında otomatik kapanış.

---

### 2. SEC-HERO — Marka Açılışı ve Görsel Bildiri
- **Section ID:** `SEC-HERO`
- **Amaç:** İlk 3 saniyede güçlü marka algısı oluşturmak, değer önerisini ("İş gününe iyi bir +.") netleştirmek ve merak uyandırmak.
- **Birincil İçerik:**
  - Marka İmzası: "B+ Wellness Café by Mineiro Coffee"
  - Büyük Tipografi Başlık: "İş gününe iyi bir +."
  - Alt Başlık: Nitelikli tek kökenli kahveler, adaptojenik bitkiler ve şehir temposuna hafiflik katan fonksiyonel lezzetler.
  - Güven Rozeti: "Rafine Şekersiz • Bitkisel Alternatifler • Nitelikli Çekirdek"
  - Arka plan: Sıcak krem, derin zeytin ve taze adaçayı tonlarında premium görsel kompozisyonu.
- **CTA:**
  - Birincil CTA: `Menüyü Keşfet` (Anchor: `#menu`)
  - İkincil CTA: `Bizi Ziyaret Et` (Anchor: `#location`)
- **Gerekli Veri:** Statik metinler, marka rozetleri, hero görsel varlıkları.
- **Duyarlı Öncelik:** P0 (Kritik ilk ekran).
- **Etkileşim:** Sayfa yüklendiğinde hafif yukarı süzülme (fade-in-up) animasyonu; CTA butonlarında hover/active renk derinleşmesi.

---

### 3. SEC-MOMENTS — Şehirli İş Günü Anları
- **Section ID:** `SEC-MOMENTS`
- **Amaç:** Ziyaretçinin gün içindeki zihinsel/fiziksel yorgunluk anlarına empati göstermek ve B+ ürünlerinin bu anlara nasıl iyi geldiğini ritmik olarak anlatmak.
- **Birincil İçerik:**
  - Bölüm Üst Başlığı: "RİTMİNİ YAKALA"
  - Ana Başlık: "Günün 3 Kritik Anında, Bedenine İyi Gelen Seçimler"
  - 3 İnteraktif Zaman Kartı:
    1. **08:00 — İşe Gidiş:** Temiz uyanış, dengeli asidite, odaklanma anlarına keyifle eşlik eden lezzet. (Örnek: *Single-Origin Cold Brew + Yulaf Sütü & Lion's Mane* `[DEMO DATA — NON-PRODUCTION]`)
    2. **12:30 — Öğle Arası:** Hafif öğün, lif ve dengeli protein desteği. (Örnek: *Spirulina Yeşil Kase + Soğuk Sıkım Zencefil & Yeşil Elma* `[DEMO DATA — NON-PRODUCTION]`)
    3. **15:00 — Afternoon Break:** Kafein dengeli ikinci rüzgar, tatlı isteğine rafine şekersiz lezzet molası. (Örnek: *Matcha Glow Latte + Ham Kakaolu Raw Bar* `[DEMO DATA — NON-PRODUCTION]`)
- **CTA:** Her an kartında `Bu Anın Reçetesini Gör` (İlgili ürünü menüde filtreler).
- **Gerekli Veri:** 3 Zaman dilimi modeli (saat, başlık, açıklama, önerilen ürün eşleşmesi, görsel ikon).
- **Duyarlı Öncelik:** P1 (Mobilde dikey kartlar veya yatay kaydırılabilir karusel; masaüstünde 3 sütunlu yan yana grid).
- **Etkileşim:** Sekme seçimi veya kart üzerine gelindiğinde zeytin yeşili vurgusu ve hafif ölçeklenme.

---

### 4. SEC-CONCEPT — B+ Felsefesi ve Üçüncü Nesil Wellness
- **Section ID:** `SEC-CONCEPT`
- **Amaç:** Markanın felsefi derinliğini (Mineiro Coffee ustalığı + fonksiyonel beslenme) anlatmak, sıradan zincirlerden ayrışmak.
- **Birincil İçerik:**
  - Başlık: "Nitelikli Kahve, Bedenine İyi Gelen İçeriklerle Buluştuğunda."
  - Anlatı: Tek kökenli kahve çekirdekleri, adaptojenik mantarlar, organik bitkisel sütler ve rafine şekersiz lezzet yaklaşımı.
  - 3 Değer Sütunu:
    1. *Dürüst & Temiz:* Şurupsuz, yapay tatlandırıcısız, sertifikalı ham maddeler.
    2. *Artisanal Kahve Kültürü:* Doğru derecede kavrulmuş, dengeli asiditede çekirdekler.
    3. *Şehirli Kolaylık:* Sıra beklemeden, pratik ve modern kafe deneyimi.
- **CTA:** `Hikayemizi Keşfet` (Detaylı manifestoyu açar veya Menüye yönlendirir).
- **Gerekli Veri:** Statik marka manifestosu ve konsept görselleri.
- **Duyarlı Öncelik:** P1.
- **Etkileşim:** Görsel ve metin bloğunun iki sütunlu asimetrik yerleşimi, hafif kaydırma paralaks hissi.

---

### 5. SEC-MENU-NAV — İnteraktif Menü Kategori Seçici
- **Section ID:** `SEC-MENU-NAV`
- **Amaç:** Menüdeki zengin kategori çeşitliliğini derli toplu sunmak ve tek tıkla ürün listesini filtrelemek.
- **Birincil İçerik:**
  - 8 Kategori Çipi (Pills):
    - `Tümü (All)`
    - `Kahveler (Specialty Coffee)`
    - `Matcha & Glow`
    - `Fonksiyonel Wellness`
    - `Bitkisel Çaylar`
    - `Smoothies`
    - `Taze Sıkım & Detoks`
    - `Sağlıklı Atıştırmalıklar`
- **CTA:** Doğrudan kategori butonları.
- **Gerekli Veri:** `Category[]` listesi (slug, name, icon).
- **Duyarlı Öncelik:** P0 (Menü keşfi için zorunlu).
- **Etkileşim:** Mobilde parmakla yatay kaydırılabilir (horizontal scroll with snap); seçili buton Deep Olive (`#34422D`) zemin ve Warm White metinle aktifleşir.

---

### 6. SEC-MENU-GRID — Kategorize Ürün Kartları Vitrini
- **Section ID:** `SEC-MENU-GRID`
- **Amaç:** Seçilen kategoriye ait ürünleri zengin görsel ve duyusal etiketlerle listelemek.
- **Birincil İçerik:**
  - En az 12 örnek ürün kartı.
  - Kart İçeriği:
    - Yüksek kaliteli ürün görseli.
    - Diyet etiketleri rozeti (Vegan, Glutensiz, vb.).
    - Ürün adı ve kısa duyusal açıklama.
    - Örnek fiyat (`₺XX.XX [DEMO]`).
    - "Detaylı İncele" butonu.
- **CTA:** Kart tıklaması ➔ `MOD-PRODUCT` açar.
- **Gerekli Veri:** `Product[]` mock veri seti ([`packages/types/src/mocks/index.ts`](file:///c:/Users/PC/Desktop/B+CafeAPP/packages/types/src/mocks/index.ts) üzerinden türetilir).
- **Duyarlı Öncelik:** P0.
- **Etkileşim:** Kategori değiştiğinde ürünler yumuşak geçişle (fade/reorder) güncellenir; karta hover yapıldığında hafif gölge artışı (`shadows.card`).

---

### 7. MOD-PRODUCT — Ürün Detay ve Duyusal Profil Modalı
- **Section ID:** `MOD-PRODUCT`
- **Amaç:** Ziyaretçiye ürünün içeriği, alerjen durumu, duyusal puanı ve hikayesi hakkında tam şeffaflık sağlamak.
- **Birincil İçerik:**
  - Ürün büyük görseli ve başlığı.
  - Duyusal Puanlar: Tatlılık Seviyesi (1-5), Gövde / Yoğunluk (1-5).
  - İçindekiler listesi (organik işaretli).
  - Alerjen Bildirimi (Badem, Laktozsuz, vb.).
  - Besin Değerleri Özeti (Kalori, Protein, vb.).
  - Demo Sipariş Notu: "Bu ürün fiziksel mağazamızda ve mobil uygulamamızda mevcuttur."
- **CTA:** `Mobil Uygulamada Sipariş Ver (Yakında)` ➔ `MOD-PREORDER` tetikler.
- **Gerekli Veri:** Seçili `Product` nesnesi.
- **Duyarlı Öncelik:** P0.
- **Etkileşim:** Ekran karartmalı modal pencere; sağ üstten "✕" veya dış alana tıklanarak kapanır. ESC tuşu desteği.

---

### 8. SEC-AI-TEASER — B+ AI Barista İnovasyon Vitrini
- **Section ID:** `SEC-AI-TEASER`
- **Amaç:** Platformun en büyük teknolojik farklılaştırıcısı olan AI Barista'yı web ziyaretçisine deneyimletmek ve mobil uygulamaya merak uyandırmak.
- **Birincil İçerik:**
  - Başlık: "Bugün Bedenin ve Zihnin Ne İstiyor?"
  - Açıklama: "B+ AI Barista, ruh halini ve beslenme hedefini dinler; menümüzdeki gerçek botanik reçetelerle seni eşleştirir."
  - 3 Örnek Mod Seçimi Çipi:
    - `🧠 Zihinsel Odak`
    - `🧘 Sakinleşme & Zen`
    - `⚡ Temiz Enerji & Canlanma`
  - Dinamik Öneri Çıkışı: Seçilen moda göre anlık eşleşen ürün kartı (Örn: *Matcha Collagen Zen Latte - %98 Uyum*).
  - ADR-004 Grounding Notu: "Yapay zekamız yalnızca menümüzdeki gerçek ve stokta olan ürünleri önerir."
- **CTA:** `Kişisel Reçeteni AI ile Bul (Mobil Uygulamada)`
- **Gerekli Veri:** 3 Mock AI Senaryosu eşleşmesi.
- **Duyarlı Öncelik:** P1.
- **Etkileşim:** Kullanıcı mod çiplerine tıkladığında öneri kutusu 400ms içinde yumuşakça değişir.

---

### 9. SEC-PREORDER-DEMO — Ön Sipariş Teaser & Mobil Deneyim
- **Section ID:** `SEC-PREORDER-DEMO`
- **Amaç:** Müşteriye "Order Ahead (Gel-Al)" rahatlığını anlatmak, mağazada bekleme süresini en aza indirmeyi hedefleyen mobil uygulamayı tanıtmak.
- **Birincil İçerik:**
  - Başlık: "Sıra Beklemeyi Geçmişte Bırakın."
  - 3 Adımlı Süreç Görseli:
    1. *Uygulamadan Seç & Özelleştir*
    2. *Hazırlanışını Canlı Takip Et*
    3. *Baristadan Sıcak Teslim Al*
  - Demo Rozeti: `YAKINDA • APP STORE & GOOGLE PLAY`
  - E-posta kayıt alanı: "Açılış gününe özel ilk kahven bizden olsun."
- **CTA:** `Ön Sipariş Deneyimini Gör (Demo)` ➔ `MOD-PREORDER` açar.
- **Gerekli Veri:** E-posta girdi state'i.
- **Duyarlı Öncelik:** P1.
- **Etkileşim:** Form gönderildiğinde anlık başarı bildirimi; gerçek sunucuya post etmez, local state simülasyonu çalıştırır.

---

### 10. MOD-PREORDER — Ön Sipariş Demo Simülatörü Modalı
- **Section ID:** `MOD-PREORDER`
- **Amaç:** Web sitesinde gerçek sipariş/ödeme olmadığını açıkça göstermek ve kullanıcının ilgisini mobil uygulama bültenine kanalize etmek.
- **Birincil İçerik:**
  - Başlık: "B+ Order Ahead Çok Yakında Hizmetinizde!"
  - Açıklama: "Bu web sitesi konsept vitrinidir. Gerçek sipariş ve temassız ödeme deneyimi, şubemizin açılışıyla birlikte (Kadıköy / İstanbul — ÖRNEK LOKASYON / TBD) B+ Müşteri Mobil Uygulaması üzerinden sunulacaktır."
  - Bilgilendirme Rozeti: `[PROTOTİP MODU — GERÇEK SİPARİŞ / ÖDEME ALINMAZ]`
  - Hızlı Kayıt Alanı: E-posta bırakarak açılış bildirimine katılma.
- **CTA:** `Anladım & Kapat`
- **Gerekli Veri:** Statik bilgilendirme metni.
- **Duyarlı Öncelik:** P0.
- **Etkileşim:** Kapat butonu veya dış tıklamayla kapanış.

---

### 11. SEC-DELIVERY-PREVIEW — Teslimat Ön Gösterimi (Opsiyonel)
- **Section ID:** `SEC-DELIVERY-PREVIEW`
- **Amaç:** Gelecekte planlanan adrese teslimat (delivery) vizyonunu göstermek; teslimatın şimdilik kapalı olduğunu dürüstçe belirtmek.
- **Birincil İçerik:**
  - Başlık: "Ofisine ve Evine Sağlıklı Mola (Yakında)"
  - Açıklama: "Özel ısı korumalı cam şişeler ve çevre dostu paketlemeyle fonksiyonel içeceklerinizi çalışma masanıza ulaştırma hazırlığındayız."
  - Durum Rozeti: `[GELECEK FAZ • DELIVERY MODEL TBD]`
- **CTA:** `Haber Ver`
- **Gerekli Veri:** Statik bilgilendirme.
- **Duyarlı Öncelik:** P2.
- **Etkileşim:** Minimalist bilgi kartı.

---

### 12. SEC-LOCATION-HOURS — Şube Lokasyonu, Saatler & Ulaşım
- **Section ID:** `SEC-LOCATION-HOURS`
- **Amaç:** Ziyaretçiyi fiziksel kafeye yönlendirmek; örnek şubenin nerede konumlanacağını, tahmini çalışma saatlerini ve açılış durumunu şeffafça sunmak.
- **Birincil İçerik:**
  - Şube Bilgisi: "Kadıköy / İstanbul — ÖRNEK LOKASYON (TBD — EMPLOYER DATA REQUIRED)"
  - Durum Rozeti: `[KURULUM AŞAMASINDA — ÖRNEK VERİ / TBD]`
  - Adres: Moda Caddesi No: 42 (DEMO ADDRESS / TBD)
  - Çalışma Saatleri:
    - Hafta İçi: 07:30 – 22:00 (DEMO VALUE ONLY / TBD — EMPLOYER DECISION REQUIRED)
    - Hafta Sonu: 08:30 – 23:00 (DEMO VALUE ONLY / TBD — EMPLOYER DECISION REQUIRED)
    - *Sipariş Kesilme Süresi: Kapanıştan 15 dk önce (DEMO VALUE ONLY / CONFIGURABLE — DEC-10)*
  - İnteraktif Harita Yerleşimi: Kadıköy Moda örnek sokak krokisi / görsel harita kartı.
- **CTA:** `Haritada Yol Tarifi Al` (Google Maps harici linki).
- **Gerekli Veri:** Adres, saatler, koordinatlar (DEMO VALUE ONLY / TBD).
- **Duyarlı Öncelik:** P0.
- **Etkileşim:** Harita kartında hover/zoom; yol tarifi tıklandığında yeni sekmede harita açılışı.

---

### 13. SEC-CONTACT-SOCIAL — İletişim, Topluluk & Instagram
- **Section ID:** `SEC-CONTACT-SOCIAL`
- **Amaç:** Ziyaretçileri sosyal medyada topluluk oluşturmaya teşvik etmek ve kurumsal/bireysel geri bildirim kanalı açmak.
- **Birincil İçerik:**
  - Instagram Akış Vitrini (4 Mock Estetik Görsel Kartı: Matcha hazırlığı, kahve demleme, kase sunumu, minimalist iç mekan).
  - Instagram Kullanıcı Adı: `@bpluswellnesscafe` (Örnek).
  - İletişim E-posta & Telefon: `merhaba@bpluscafe.com` / `+90 (216) 555 00 22` (Demo).
  - Hızlı mesaj gönderme kutusu (Ad, E-posta, Mesaj).
- **CTA:** `Instagram'da Takip Et` & `Mesaj Gönder (Demo)`
- **Gerekli Veri:** 4 Mock Instagram karesi, iletişim bilgileri.
- **Duyarlı Öncelik:** P1.
- **Etkileşim:** Görseller tıklandığında hafif parlama; mesaj formu gönderildiğinde anlık teşekkür mesajı.

---

### 14. SEC-FOOTER — Alt Bilgi, Telif Hakkı ve Yasal Feragatname
- **Section ID:** `SEC-FOOTER`
- **Amaç:** Kurumsal marka mülkiyetini doğrulamak, yasal uyarıları yapmak ve demo sınırlarını netleştirmek.
- **Birincil İçerik:**
  - B+ Wellness Café & Mineiro Coffee marka birlikteliği.
  - Hızlı Site Haritası Linkleri.
  - Çerez Politikası & Aydınlatma Metni (Örnek).
  - **Zorunlu Prototip Bildirimi (Disclaimer):**  
    *"Bu web sitesi, B+ Wellness Café Digital Platform projesi için tasarlanmış bir ön yüz ve pazarlama vitrini prototipidir. Sitede yer alan fiyatlar, saatler ve ürün bilgileri örnek amaçlıdır. Gerçek ödeme veya ticari sipariş alınmamaktadır."*
  - Telif Hakkı: `© 2026 B+ Wellness Café by Mineiro Coffee. Tüm hakları saklıdır.`
- **CTA:** `Yukarı Dön (Back to Top)`
- **Gerekli Veri:** Statik telif hakları ve yasal bağlantılar.
- **Duyarlı Öncelik:** P0.
- **Etkileşim:** Yukarı dön tıklandığında sayfa başına akıcı kaydırma (smooth scroll).
