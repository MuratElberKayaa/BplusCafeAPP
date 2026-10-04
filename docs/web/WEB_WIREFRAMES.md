# B+ Wellness Café — Mobile & Desktop Wireframes

**Workstream:** Website Workstream — Web Phase 1  
**Doküman Sürümü:** 1.0.0 (Low & Mid-Fidelity Wireframes)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — WIREFRAMES BLUEPRINT  
**Roller:** Senior UX Architect, Senior Product Designer, Senior Web Experience Designer  

---

## 1. Genel Wireframe Standartları

Bu doküman, B+ Wellness Café müşteri web sitesinin 14 bölüm ve modalı için **Mobile (375px)** ve **Desktop (1440px)** baz genişliklerinde yapısal yerleşim (wireframe) mimarisini tanımlar.

- **Mobile Baseline:** 375px ekran genişliği, 16px/20px kenar marjinleri, 8px/16px bileşen arası boşluklar.
- **Desktop Baseline:** 1440px ekran genişliği, 12 sütunlu grid, maksimum 1200px içerik konteyneri, ortalanmış düzen.
- **Tablet Baseline (768px):** Esnek 2 sütunlu geçiş düzeni.

---

## 2. Mobil Wireframe Mimarisi (375px Baseline)

### 2.1. Mobil Genel Sayfa Akışı (375px Skeleton)

```text
+---------------------------------------------------+ [375px Screen]
| [B+ Logo]                         [≡ Menü İkonu]   | SEC-NAV (Sticky Header)
+---------------------------------------------------+
| B+ WELLNESS CAFÉ by Mineiro Coffee                 | SEC-HERO
| "İş gününe iyi bir +."                            |
| Nitelikli tek kökenli kahveler ve fonksiyonel     |
| botanik lezzetler.                                |
| [ Rafine Şekersiz • Bitkisel • Nitelikli Çekirdek ]|
| [  MENÜYÜ KEŞFET  (Primary CTA)                  ] |
| [  Bizi Ziyaret Et (Secondary CTA)               ] |
| [ Hero Görsel Kartı: Soğuk Bardak + Botanik Bitki ]|
+---------------------------------------------------+
| RİTMİNİ YAKALA                                    | SEC-MOMENTS
| "Günün 3 Kritik Anında, Bedenine İyi Gelenler"    |
| +-----------------------------------------------+ |
| | [08:00] İŞE GİDİŞ                             | | (Swipeable / Stacked)
| | Temiz uyanış, dengeli asidite.                | |
| | Örnek: Cold Brew + Lion's Mane [DEMO DATA]    | |
| | [ Bu Anın Reçetesini Gör -> ]                 | |
| +-----------------------------------------------+ |
| | [12:30] ÖĞLE ARASI                            | |
| | Hafif öğün, sindirim dostu lif ve protein.    | |
| +-----------------------------------------------+ |
| | [15:00] B+ MOLA                               | |
| | Kafein dengeli ikinci rüzgar, tatlı molası.   | |
| +-----------------------------------------------+ |
+---------------------------------------------------+
| B+ FELSEFESİ                                      | SEC-CONCEPT
| "Nitelikli Kahve, Bedenine İyi Gelen İçeriklerle" |
| [Görsel: Çekirdek Kavurma & Organik Bitkiler]     |
| 1. Dürüst & Katkısız Reçeteler                    |
| 2. Mineiro Artisanal Çekirdek Ustalığı            |
| 3. Şehirli Hızlı Gel-Al Konsepti                  |
+---------------------------------------------------+
| MENÜMÜZ [DEMO DATA — NON-PRODUCTION]              | SEC-MENU-NAV
| [ Tümü ] [ Kahveler ] [ Matcha ] [ Wellness ] ->  | (Horizontal Scroll Chips)
+---------------------------------------------------+
| +-----------------------------------------------+ | SEC-MENU-GRID
| | [ Ürün Görseli: Lion's Mane Cold Brew ]       | | (1 Column Mobile Cards)
| | [Vegan] [Şekersiz]                            | |
| | Lion's Mane Cold Brew                         | |
| | 16 saat soğuk demlenmiş tek kökenli çekirdek. | |
| | ₺145.00 [DEMO]                [ Detaylı Gör ] | |
| +-----------------------------------------------+ |
| +-----------------------------------------------+ |
| | [ Ürün Görseli: Matcha Glow Latte ]           | |
| | [Antioksidan] [Yulaf Sütü]                    | |
| | Matcha Glow Latte                             | |
| | Uji seremoniyel matcha ve yulaf sütü.         | |
| | ₺165.00 [DEMO]                [ Detaylı Gör ] | |
| +-----------------------------------------------+ |
+---------------------------------------------------+
| AKILLI DANIŞMAN [PROTOTİP / DEMO]                 | SEC-AI-TEASER
| "Bugün Zihnin ve Bedenin Ne İstiyor?"            |
| [ 🧠 Odak ]  [ 🧘 Sakinlik ]  [ ⚡ Canlanma ]     | (Mod Çipleri)
| +-----------------------------------------------+ |
| | AI Eşleşmesi: Matcha Zen Latte (%98 Uyum)     | | (Dinamik Kart)
| | "L-Theanine ile sakin ve dengeli bir tempo."  | |
| +-----------------------------------------------+ |
| [ Mobil Uygulamada Kişisel Reçeteni Bul (Demo) ]  |
+---------------------------------------------------+
| GELMEDEN SEÇ. SIRA BEKLEMEDEN AL.                 | SEC-PREORDER-DEMO
| 1. Uygulamadan Seç -> 2. Canlı İzle -> 3. Teslim Al|
| [ YAKINDA • APP STORE & GOOGLE PLAY ]             |
| [ E-posta adresinizi girin...                 ]   |
| [ Açılış İndirimini Yakala (Demo Kayıt)       ]   |
+---------------------------------------------------+
| OFİSE VE EVE TESLİMAT (YAKINDA)                   | SEC-DELIVERY-PREVIEW
| [ GELECEK FAZ • DELIVERY MODEL TBD ]              |
| Özel ısı korumalı paketlemeyle masanıza servis.   |
+---------------------------------------------------+
| BİZİ ZİYARET EDİN                                 | SEC-LOCATION-HOURS
| Kadıköy / İstanbul — ÖRNEK LOKASYON               |
| Moda Cad. No: 42 (DEMO ADDRESS / TBD)             |
| Hafta İçi: 07:30 - 22:00 [DEMO VALUE]             |
| Hafta Sonu: 08:30 - 23:00 [DEMO VALUE]            |
| *Sipariş kesilme: Kapanıştan 15 dk önce           |
| [ Kroki / Harita Görsel Kartı ]                   |
| [ Haritada Yol Tarifi Al (Demo) ]                 |
+---------------------------------------------------+
| INSTAGRAM & TOPLULUK                              | SEC-CONTACT-SOCIAL
| @bpluswellnesscafe                                |
| [Görsel 1] [Görsel 2]                             | (2x2 Grid)
| [Görsel 3] [Görsel 4]                             |
| İletişim: merhaba@bpluscafe.com [DEMO]            |
+---------------------------------------------------+
| B+ Wellness Café by Mineiro Coffee                | SEC-FOOTER
| Menü • Konsept • Şube • İletişim                  |
| [PROTOTİP FERAGATNAMESİ METNİ]                    |
| © 2026 B+ Wellness Café. Tüm hakları saklıdır.    |
| [ ^ Başa Dön ]                                    |
+---------------------------------------------------+
```

---

## 3. Desktop Wireframe Mimarisi (1440px Baseline)

### 3.1. Desktop Üst Bölümler (Header, Hero, Moments)

```text
+----------------------------------------------------------------------------------------------------------------+ [1440px Screen]
|  [B+ LOGO]              Konsept    Menü    AI Barista    Lokasyon    İletişim          [ Menüyü Keşfet (CTA) ]  | SEC-NAV (Sticky)
+----------------------------------------------------------------------------------------------------------------+
|                                                                                                                | SEC-HERO
|  [ SOL SÜTUN - 6 SÜTUN ]                                    [ SAĞ SÜTUN - 6 SÜTUN ]                            |
|  B+ WELLNESS CAFÉ by Mineiro Coffee                         +------------------------------------------------+ |
|                                                             |                                                | |
|  "İş gününe iyi bir +."                                     |             [ HERO GÖRSEL VİTRİNİ ]            | |
|                                                             |        Artisanal Cold Brew + Botanik Dal       | |
|  Nitelikli tek kökenli kahveler, adaptojenik botanikler ve  |             Deep Olive / Sage Arka Plan        | |
|  şehir temposuna hafiflik katan fonksiyonel lezzetler.      |                                                | |
|                                                             | [ Rafine Şekersiz • Bitkisel • Nitelikli Çekirdek ]|
|  [ MENÜYÜ KEŞFET (P0) ]    [ Konsepti İncele (P1) ]         +------------------------------------------------+ |
|                                                                                                                |
+----------------------------------------------------------------------------------------------------------------+
|  RİTMİNİ YAKALA                                                                                                | SEC-MOMENTS
|  "Günün 3 Kritik Anında, Bedenine İyi Gelen Seçimler"                                                          |
|                                                                                                                |
|  +-----------------------------+ +-----------------------------+ +-----------------------------+               |
|  | [08:00] İŞE GİDİŞ           | | [12:30] ÖĞLE ARASI          | | [15:00] B+ MOLA             |               |
|  | Temiz uyanış, dengeli       | | Hafif öğün, sindirim        | | Kafein dengeli ikinci       |               |
|  | asidite ve duyusal odak.    | | dostu lif ve protein.       | | rüzgar, tatlı isteği molası.|               |
|  | Reçete: Cold Brew + Lion's  | | Reçete: Yeşil Kase + Soğuk  | | Reçete: Matcha Glow Latte + |               |
|  | Mane [DEMO DATA]            | | Sıkım Elma [DEMO DATA]      | | Raw Bar [DEMO DATA]         |               |
|  | [ Bu Anın Reçetesi -> ]     | | [ Bu Anın Reçetesi -> ]     | | [ Bu Anın Reçetesi -> ]     |               |
|  +-----------------------------+ +-----------------------------+ +-----------------------------+               |
+----------------------------------------------------------------------------------------------------------------+
```

### 3.2. Desktop Orta Bölümler (Concept, Menu Filter & 3-Column Grid)

```text
+----------------------------------------------------------------------------------------------------------------+
|  B+ FELSEFESİ                                                                                                  | SEC-CONCEPT
|  +-------------------------------------------+  +------------------------------------------------------------+ |
|  |                                           |  | "Nitelikli Kahve, Bedenine İyi Gelen İçeriklerle Buluştuğunda"|
|  |        [ CONCEPT EDITORIAL GÖRSEL ]       |  |                                                            | |
|  |    Kavurma Çekirdeği & Seremoniyel Matcha |  | 1. Dürüst & Katkısız: Yapay şurupsuz, saf bileşenler.       | |
|  |                                           |  | 2. Mineiro Ustalığı: Nitelikli kavurma ve temiz gövde.     | |
|  |                                           |  | 3. Şehirli Hız: Sıra beklemeden, pratik dijital servis.    | |
|  +-------------------------------------------+  +------------------------------------------------------------+ |
+----------------------------------------------------------------------------------------------------------------+
|  MENÜ KEŞFİ [DEMO DATA — NON-PRODUCTION]                                                                      | SEC-MENU-NAV
|  [ Tümü ]  [ Kahveler ]  [ Matcha & Glow ]  [ Fonksiyonel Wellness ]  [ Bitkisel Çay ]  [ Smoothies ]  [ Detoks ] | (Centred Desktop Bar)
+----------------------------------------------------------------------------------------------------------------+
|  +---------------------------+  +---------------------------+  +---------------------------+                   | SEC-MENU-GRID
|  | [ Ürün Görseli 1 ]        |  | [ Ürün Görseli 2 ]        |  | [ Ürün Görseli 3 ]        |                   | (3 Sütunlu Grid)
|  | [Vegan] [Bitkisel Süt]    |  | [Antioksidan] [Organik]   |  | [Şekersiz] [Glutensiz]    |                   |
|  | Lion's Mane Cold Brew     |  | Matcha Glow Latte         |  | Spirulina Wellness Bowl   |                   |
|  | 16 saat soğuk demleme     |  | Uji seremoniyel matcha    |  | Taze avokado & tohumlar   |                   |
|  | ₺145.00 [DEMO]            |  | ₺165.00 [DEMO]            |  | ₺210.00 [DEMO]            |                   |
|  | [ Detaylı İncele ]        |  | [ Detaylı İncele ]        |  | [ Detaylı İncele ]        |                   |
|  +---------------------------+  +---------------------------+  +---------------------------+                   |
|  +---------------------------+  +---------------------------+  +---------------------------+                   |
|  | [ Ürün Görseli 4 ]        |  | [ Ürün Görseli 5 ]        |  | [ Ürün Görseli 6 ]        |                   |
|  | ... (9 ürün daha)         |  | ...                       |  | ...                       |                   |
|  +---------------------------+  +---------------------------+  +---------------------------+                   |
+----------------------------------------------------------------------------------------------------------------+
```

### 3.3. Desktop Alt Bölümler (AI Teaser, Pre-Order, Location, Contact & Footer)

```text
+----------------------------------------------------------------------------------------------------------------+
|  B+ AI BARISTA [PROTOTİP / DEMO VİTRİNİ]                                                                      | SEC-AI-TEASER
|  "Bugün Bedenin ve Zihnin Ne İstiyor?"                                                                         |
|                                                                                                                |
|  [ 🧠 Zihinsel Odak ]    [ 🧘 Sakinleşme & Zen ]    [ ⚡ Temiz Enerji & Canlanma ]                             |
|                                                                                                                |
|  +----------------------------------------------------------------------------------------------------------+  |
|  | Eşleşen Botanik Reçete: Matcha Collagen Zen Latte (%98 Eşleşme)                                           |  |
|  | L-Theanine ve seremoniyel matcha ile gün ortasında sakin, berrak ve dengeli bir tempo.                  |  |
|  | [ Mobil Uygulamada AI Barista ile Konuş (Demo) ]                                                         |  |
|  +----------------------------------------------------------------------------------------------------------+  |
+----------------------------------------------------------------------------------------------------------------+
|  GELMEDEN SEÇ. SIRA BEKLEMEDEN AL.                                                                             | SEC-PREORDER-DEMO
|  +-------------------------------------------------+  +------------------------------------------------------+ |
|  | 3 Adımlı Mobil Deneyim:                          |  | Bültene Katıl / İlk Kahven Bizden:                  | |
|  | 1. Mobil Menüden Seç & Özelleştir                |  | [ E-posta adresiniz...              ] [ Kaydol (Demo)]| |
|  | 2. Baristanın Hazırlama Durumunu Canlı İzle      |  | [ YAKINDA • APP STORE & GOOGLE PLAY ]                | |
|  | 3. Kasada Sıra Beklemeden Sıcak Teslim Al        |  | [ Demo Ön Sipariş Deneyimini Gör -> ]                | |
|  +-------------------------------------------------+  +------------------------------------------------------+ |
+----------------------------------------------------------------------------------------------------------------+
|  [ GELECEK FAZ • DELIVERY MODEL TBD ]                                                                          | SEC-DELIVERY-PREVIEW
|  Ofisinize ve Evinize Sağlıklı Mola — Özel ısı korumalı cam ambalajlarla yakında kapınızda.                    |
+----------------------------------------------------------------------------------------------------------------+
|  BİZİ ZİYARET EDİN                                                                                             | SEC-LOCATION-HOURS
|  +--------------------------------------------------+  +-----------------------------------------------------+ |
|  | Şube: Kadıköy / İstanbul — ÖRNEK LOKASYON / TBD    |  |                                                     | |
|  | Adres: Moda Cad. No: 42 (DEMO ADDRESS / TBD)       |  |          [ İNTERAKTİF KROKİ / HARİTA KARTI ]        | |
|  |                                                  |  |          Kadıköy Moda Örnek Sokak Görünümü          | |
|  | Çalışma Saatleri (DEMO VALUE ONLY / TBD):        |  |                                                     | |
|  | Hafta İçi: 07:30 – 22:00                         |  |                                                     | |
|  | Hafta Sonu: 08:30 – 23:00                        |  |                                                     | |
|  | *Sipariş kesilme: Kapanıştan 15 dk önce (DEC-10)  |  |                                                     | |
|  | [ Haritada Yol Tarifi Al (Demo Bağlantı) ]       |  |                                                     | |
|  +--------------------------------------------------+  +-----------------------------------------------------+ |
+----------------------------------------------------------------------------------------------------------------+
|  INSTAGRAM & TOPLULUK (@bpluswellnesscafe)                                                                     | SEC-CONTACT-SOCIAL
|  [ Foto 1: Matcha ]   [ Foto 2: Çekirdek ]   [ Foto 3: Kase ]   [ Foto 4: İç Mekan ]                           |
|  İletişim: merhaba@bpluscafe.com [DEMO] | +90 (216) 555 00 22 [DEMO] | [ Bize Mesaj Bırak (Demo Form) ]         |
+----------------------------------------------------------------------------------------------------------------+
|  B+ Wellness Café by Mineiro Coffee                                                                            | SEC-FOOTER
|  Gezinme: Konsept • Menü • AI Barista • Lokasyon • İletişim                                                    |
|  YASAL BİLDİRİM: Bu web sitesi konsept ve pazarlama vitrini prototipidir. Gerçek ödeme veya sipariş alınmaz.    |
|  © 2026 B+ Wellness Café by Mineiro Coffee. Tüm hakları saklıdır.                             [ ^ Başa Dön ]   |
+----------------------------------------------------------------------------------------------------------------+
```

---

## 4. Modal Wireframeleri (Overlays)

### 4.1. MOD-PRODUCT — Ürün Detay ve Duyusal Profil Modalı

```text
+-------------------------------------------------------------+
| [ Karartmalı Arka Plan Overlay (rgba 0,0,0,0.65) ]          |
|                                                             |
|   +-----------------------------------------------------+   |
|   | MOD-PRODUCT                             [ ✕ Kapat ] |   |
|   |-----------------------------------------------------|   |
|   | [ Ürün Yüksek Çözünürlüklü Hero Görseli ]           |   |
|   | [Vegan] [Glutensiz] [Organik Bileşen]               |   |
|   |                                                     |   |
|   | Lion's Mane Cold Brew                               |   |
|   | ₺145.00 [DEMO DATA — NON-PRODUCTION]                |   |
|   |                                                     |   |
|   | DUYUSAL PROFİL:                                     |   |
|   | Tatlılık:       ● ○ ○ ○ ○ (1/5 - Doğal / Şurupsuz)  |   |
|   | Gövde & Yoğunluk: ● ● ● ● ○ (4/5 - Dolgun / Kremamsı) |   |
|   | Asidite:        ● ● ○ ○ ○ (2/5 - Mide Dostu Yumuşak)|   |
|   |                                                     |   |
|   | İÇİNDEKİLER & REÇETE:                               |   |
|   | 16 saat demlenmiş tek kökenli Etiyopya çekirdeği,   |   |
|   | organik yulaf sütü, 500mg Lion's Mane özütü, tarçın.|   |
|   |                                                     |   |
|   | ALERJEN BİLDİRİMİ:                                  |   |
|   | Eser miktarda sert kabuklu yemiş içerebilir.        |   |
|   |                                                     |   |
|   | [ Mobil Uygulamada Ön Sipariş Ver (Yakında) ]       |   |
|   | [ Benzer Reçeteleri Gör ]                           |   |
|   |                                                     |   |
|   | *Bu ürün konsept sunumudur; online sepet kapalıdır. |   |
|   +-----------------------------------------------------+   |
+-------------------------------------------------------------+
```

### 4.2. MOD-PREORDER — Ön Sipariş Demo Simülatörü Modalı

```text
+-------------------------------------------------------------+
| [ Karartmalı Arka Plan Overlay ]                            |
|                                                             |
|   +-----------------------------------------------------+   |
|   | B+ ORDER AHEAD (DEMO SİMÜLATÖRÜ)        [ ✕ Kapat ] |   |
|   |-----------------------------------------------------|   |
|   | Adım 1: Ürün Seçimi                                 |   |
|   | [✓] Lion's Mane Cold Brew (Büyük Boy - Yulaf Sütü)   |   |
|   |-----------------------------------------------------|   |
|   | Adım 2: Gel-Al Teslimat Zamanı (Demo)               |   |
|   | (•) 10 Dakika Sonra (08:45)                         |   |
|   | ( ) 20 Dakika Sonra (08:55)                         |   |
|   |-----------------------------------------------------|   |
|   | Adım 3: Özet & Şube                                 |   |
|   | Şube: Kadıköy Moda (ÖRNEK LOKASYON / TBD)           |   |
|   | Toplam Tutar: ₺145.00 [DEMO TUTAR]                  |   |
|   |-----------------------------------------------------|   |
|   | [!] PROTOTİP BİLGİLENDİRMESİ:                       |   |
|   | Bu bir konsept simülasyonudur. Gerçek sipariş ve     |   |
|   | ödeme alınmamaktadır. Açılışta ilk kahvenizi hediye |   |
|   | almak için e-posta bırakabilirsiniz:                |   |
|   | [ E-posta adresiniz...             ] [ Gönder ]     |   |
|   |                                                     |   |
|   | [ Anladım & Simülatörü Kapat ]                      |   |
|   +-----------------------------------------------------+   |
+-------------------------------------------------------------+
```
