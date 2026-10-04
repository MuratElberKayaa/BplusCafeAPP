# B+ Wellness Café — Web Functional & Content Requirements
**Workstream:** Website Workstream — Web Phase 0  
**Doküman Sürümü:** 1.0.0 (Web Scope Lock)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED & SCOPE LOCKED  

---

## 1. Fonksiyonel Gereksinimler (Functional Requirements)

| ID | Gereksinim Adı | Açıklama | Davranış & Kural |
| :--- | :--- | :--- | :--- |
| **FR-01** | **Sabit / Şeffaf Üst Gezinme (Sticky Navigation)** | Kullanıcı sayfayı kaydırdıkça üstte kalan, şeffaftan koyu zeytin/krem yüzeye yumuşak geçiş yapan menü çubuğu. | Logo (B+), linkler (Konsept, Günün Anları, Menü, AI Barista, Lokasyon, İletişim), "Ön Sipariş (Demo)" CTA butonu ve mobilde hamburger çekmecesi. |
| **FR-02** | **İnteraktif Kategori Değiştirici (Menu Filter Switcher)** | Kullanıcının sayfa yenilemeden menü kategorileri arasında anlık geçiş yapabilmesi. | Çip/Pill butonlar: Tümü, Kahveler, Matcha & Glow, Fonksiyonel Wellness, Bitkisel Çaylar, Smoothies, Taze Sıkım İçecekler (Detox Drinks Kategori Adı), Sağlıklı Atıştırmalıklar. Tıklandığında ilgili ürün gridi yumuşak animasyonla güncellenir. |
| **FR-03** | **Duyusal Ürün Kartı Etkileşimi (Product Card Interaction)** | Her ürün kartı üzerine gelindiğinde (hover) veya tıklandığında hafif derinleşir; görsel, ad, duyusal etiketler, diyet rozetleri ve örnek fiyat gösterilir. | Mobil dokunuşta veya masaüstü tıklamasında `FR-04` detay modalı tetiklenir. Kartta "Hızlı İncele" veya "+" butonu bulunur. |
| **FR-04** | **Ürün Detay Modalı / Çekmecesi (Product Detail Modal)** | Seçilen ürünün ayrıntılı hikayesi, tam botanik reçetesi, besin değerleri (kalori, protein vb.), alerjen uyarıları ve duyusal profilini (tatlılık/yoğunluk) gösteren modal. | Ekranı kilitleyen karartmalı overlay, ESC tuşu veya kapat butonu ile kapanır. Gerçek sepete ekleme yapmaz; "Mobil Uygulamada Sipariş Ver (Yakında)" yönlendirmesi sunar. |
| **FR-05** | **İş Günü Anları Sekmesi (Workday Moments Interactive Tabs)** | 08:00, 12:30 ve 15:00 saat dilimleri arasında interaktif geçiş. | Seçilen saate göre önerilen içecek ikilisi, ruh hali/ihtiyaç açıklaması ve duyusal ton değişir. |
| **FR-06** | **Demo Ön Sipariş Simülatörü (Demo Pre-Order Modal)** | "Sipariş Ver" veya "Order Ahead (Demo)" butonuna tıklandığında açılan prototip bilgilendirme penceresi. | "B+ Order Ahead Deneyimi Çok Yakında!" başlığı, çalışma adımları (1. Menüden seç, 2. Hazırlanma süresini gör, 3. Sıra beklemeden teslim al) ve e-posta kayıt alanı (bülten). **Açıkça `DEMO / NON-PRODUCTION` etiketi taşır.** |
| **FR-07** | **İnteraktif Lokasyon & Rota (Location & Map Anchor)** | Örnek şube adresini (Kadıköy / İstanbul — ÖRNEK LOKASYON / TBD), krokisini ve yol tarifi butonunu ("Haritada Aç") içeren bölüm. | Google Maps / Apple Maps dış bağlantısı. Çalışma saatleri ve inşaat durumu açıkça `DEMO VALUE ONLY / TBD` olarak belirtilir. |
| **FR-08** | **Teslimat Ön Gösterimi (Delivery Teaser - Opsiyonel)** | Gelecekte planlanan paket servis modeli hakkında bilgilendirici kart. | "Adresinize Sağlıklı Mola (Yakında)" bilgilendirme rozeti. Hiçbir kurye API'si veya harici sipariş platformu çalıştırmaz. |
| **FR-09** | **AI Barista İnovasyon Vitrini (AI Barista Feature Teaser)** | Mobil uygulamadaki yapay zeka destekli kişiselleştirme motorunun web üzerindeki interaktif demosu. | Kullanıcı 3 ruh halinden birini (Odak, Zen, Enerji) seçtiğinde örnek içecek eşleşmesini simüle eder. |
| **FR-10** | **Bülten & İletişim Formu (Newsletter & Contact Form)** | Ziyaretçinin mağaza açılışından ve menü yeniliklerinden haberdar olmak için e-posta bırakabilmesi. | İstemci tarafı doğrulama (e-mail format check), başarı geri bildirimi ("Aramıza hoş geldin!"). Gerçek backend'e post etmez; local state simülasyonu çalışır. |

---

## 2. İçerik Gereksinimleri (Content Requirements)

| ID | Alan | Zorunlu İçerik Bileşenleri | Dil & İfade Kuralı |
| :--- | :--- | :--- | :--- |
| **CR-01** | **Hero Alanı** | - B+ Logosu ve Mineiro Coffee imzası<br>- Ana Başlık: "İş gününe iyi bir +."<br>- Alt Başlık: Nitelikli kahve kültürü ile fonksiyonel beslenmenin buluştuğu modern şehirli vaha.<br>- CTA Butonları: "Menüyü Keşfet", "Bizi Ziyaret Et" | Dinamik, canlandırıcı, şehirli ve premium ton. Abartısız özgüven. |
| **CR-02** | **Konsept & Hikaye** | - Üçüncü nesil kahve çekirdeklerinin kökeni (Mineiro Coffee mirası)<br>- Doğal adaptojenler, mantar özleri ve fonksiyonel bileşenler<br>- Şehir temposunda tükenmişlik (burnout) hissini kıran mindful mola anlayışı | Organik botanik dili, gastronomi ve yaşam tarzı odağı. |
| **CR-03** | **Kategorize Menü** | - 7 Kategori: Kahveler, Matcha & Glow, Fonksiyonel Wellness, Bitkisel Çaylar, Smoothies, Taze Sıkım İçecekler (Detox Drinks Kategori Adı), Sağlıklı Atıştırmalıklar<br>- En az 12 örnek ürün kartı<br>- Ürün adı, açıklama, duyusal rozetler, örnek fiyat | **Tüm fiyatlar ve ürünler `DEMO DATA — NON-PRODUCTION` olarak etiketlenmelidir.** |
| **CR-04** | **Sağlık & Beslenme Sınırları** | - Alerjenler (Gluten, Soya, Badem, Fındık vb.)<br>- Diyet etiketleri (Vegan, Şekersiz, Laktozsuz)<br>- Besin makroları (Kalori, Protein, vb.) | **KESİNLİKLE TIBBİ İDDİA YASAKTIR:** "Hastalığı önler", "Zayıflatır", "Toksinleri temizler", "Bağışıklığı %100 artırır", "Bilişsel fonksiyonları tedavi eder" ifadeleri kullanılamaz. Bunun yerine "zindelik desteği", "canlandırıcı lezzet", "dengeli protein", "odaklanma anlarına eşlik eden botanikler" gibi yaşam tarzı dili kullanılır. "Detox" yalnızca brief kategori adıdır, fizyolojik arınma vaadi içermez. |
| **CR-05** | **Şube & Çalışma Saatleri** | - Örnek Şube: Kadıköy / İstanbul — ÖRNEK LOKASYON (TBD — EMPLOYER DATA REQUIRED)<br>- Örnek Adres: Moda Cad. No: 42 (DEMO ADDRESS / KURULUM AŞAMASINDA — TBD)<br>- Çalışma Saatleri: Hafta İçi 07:30 - 22:00, Hafta Sonu 08:30 - 23:00 (DEMO VALUE ONLY / TBD — EMPLOYER DECISION REQUIRED)<br>- Sipariş Kesilme Kuralı: Kapanıştan 15 dk önce (DEMO VALUE ONLY / CONFIGURABLE — DEC-10) | Tüm saat ve adres bilgileri `DEMO VALUE ONLY / TBD` olarak işaretlenmelidir. |
| **CR-06** | **AI Barista Tanıtımı** | - "Kişisel Biyoritminize Göre İçecek Seçimi"<br>- Mobil uygulamada yer alan ADR-004 menü grounding motorunun tanıtımı<br>- Örnek sorgu: "Öğleden sonra zihnimi toparlayacak kafeinsiz ne içebilirim?" | Gerçek AI API çağrısı yapılmadığı, konsept tanıtımı olduğu şeffafça belirtilir. |
| **CR-07** | **Demo Ön Sipariş & Gel-Al** | - "Sıra Beklemeden Al (Order Ahead)" konsept açıklaması<br>- Mobil uygulama indirme bağlantısı için "Çok Yakında App Store & Google Play'de" rozeti | "Gerçek sipariş veya ödeme alınmamaktadır (Prototip Modu)" uyarısı zorunludur. |
| **CR-08** | **Footer & Yasal Şeffaflık** | - Marka Telif Hakkı: © 2026 B+ Wellness Café by Mineiro Coffee<br>- Çerez & Aydınlatma Metni bağlantıları (Örnek)<br>- Prototip Feragatnamesi (Disclaimer) | Alt kısımda projenin bir vaka çalışması / dijital platform prototipi olduğu açıkça yer alır. |

---

## 3. Fonksiyonel Olmayan Gereksinimler (Non-Functional Requirements)

1. **NFR-01: Mobil Öncelikli Duyarlılık (Mobile-First Responsive Design):**
   - Web sitesi öncelikle 375px - 430px ekran genişliğinde kusursuz görüntülenmeli, ardından tablet (768px - 1024px) ve masaüstü (1280px - 1920px) çözünürlüklerine kesintisiz ölçeklenmelidir.
2. **NFR-02: Performans & Yüklenme Hızı (Web Vitals Hedefleri):**
   - LCP (Largest Contentful Paint) hedefi < 2.0 saniye; CLS < 0.05. Tek sayfa mimarisi rota geçiş gecikmelerini azaltır ve akıcı bir sunum deneyimi sağlar. Gerçek performans ölçümleri Web Phase 4 aşamasında doğrulanacaktır.
   - Görseller optimize edilmiş modern formatlarda (WebP / AVIF) ve lazy-loading ile yüklenmelidir.
3. **NFR-03: Erişilebilirlik (Accessibility - WCAG 2.1 AA):**
   - Renk kontrastı: Gövde metinleri zeminle en az 4.5:1 kontrast oranına sahip olmalıdır (Espresso `#2B231E` / Warm White `#FFFDF8` = ~14.8:1).
   - Dokunma hedefleri: Tüm butonlar ve etkileşimli alanlar en az 48x48px tıklama alanına sahip olmalıdır.
   - Klavye navigasyonu (Tab & Focus rings) ve semantik HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
4. **NFR-04: Tasarım Sistemi Uyumu (Design System Fidelity):**
   - Dokümante edilmiş `docs/design/DESIGN_SYSTEM.md` dosyasındaki renk, tipografi, radius, shadow ve spacing kurallarından sapılmamalıdır.
5. **NFR-05: Sıfır Harici Bağımlılık Riski (No Broken External Deps):**
   - Harici harita API'leri veya ödeme scriptleri yüklenmeden, saf CSS/React ve SVG yerleşimleri ile stabil çalışmalıdır.
6. **NFR-06: SEO & Meta Etiketleri:**
   - Açık başlık, OpenGraph kartları ve wellness café odaklı semantik meta etiketleri kurgulanmalıdır.
