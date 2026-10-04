# B+ Wellness Café — Web Screen & Section Matrix

**Workstream:** Website Workstream — Web Phase 1  
**Doküman Sürümü:** 1.0.0 (Screen Section Matrix Blueprint)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — SCREEN MATRIX  
**Roller:** Senior UX Architect, Senior Product Designer, Information Architect  

---

## 1. Genel Matris Açıklaması

Bu matris, B+ Wellness Café müşteri web sitesinin 14 bölüm ve modalını teknik, görsel, etkileşimsel ve işveren bağımlılıkları açısından tek bir kapsamlı tabloda kilit altına alır.

---

## 2. Bölüm ve Ekran Analiz Matrisi (14 Bileşen)

| ID | Section Adı | Mobile Düzen (`375px`) | Desktop Düzen (`1440px`) | Interactive? | Modal? | Demo Label / Sınır Rozeti | Required Data Modeli | Employer Data Dependency |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. SEC-NAV** | Sabit Üst Gezinme & Çekmece | Sticky bar, logo + hamburger butonu, tam ekran kayan çekmece | 1200px ortalanmış sabit bar, 5 anchor linki, `Menüyü Keşfet (CTA)` | Evet (Scroll blur, hamburger aç/kapa, anchor tıklaması) | Hayır (Mobil Drawer içerir) | — | Statik rota linkleri | Bağımsız (Tasarım Sistemi) |
| **2. SEC-HERO** | Marka Açılışı & Görsel Bildiri | Tek sütun dikey yığın, önce başlık/slogan, CTA'lar, altta görsel | 12 sütunlu editorial split (Sol 6 sütun metin & rozetler, Sağ 6 sütun hero görseli) | Evet (Buton hover/active, pürüzsüz kaydırma) | Hayır | `[Rafine Şekersiz • Bitkisel • Nitelikli Çekirdek]` | Statik marka sloganı, hero görsel varlıkları | Bağımsız |
| **3. SEC-MOMENTS** | Şehirli İş Günü Anları (08:00, 12:30, 15:00) | Dikey yığılmış 3 kart veya yatay kaydırılabilir karusel | 3 eşit sütun yan yana kart ızgarası | Evet (Kart seçimi, "Reçeteyi Gör" tıklamasıyla menü filtreleme) | Hayır | `[DEMO DATA — NON-PRODUCTION]` | 3 Zaman kartı modeli (saat, başlık, açıklama, mock ürün eşleşmesi) | `DEC-05` (Menü reçeteleri onaylandığında güncellenir) |
| **4. SEC-CONCEPT** | B+ Felsefesi & Üçüncü Nesil Wellness | Tek sütun dikey manifesto ve görsel | Asimetrik editorial iki sütun (Sol: Kavurma görseli, Sağ: 3 Değer sütunu) | Evet (Hafif scroll efekti, link tıklaması) | Hayır | — | Statik manifesto metinleri, konsept görselleri | Bağımsız |
| **5. SEC-MENU-NAV** | İnteraktif Menü Kategori Seçici | Yatay kaydırılabilir snap çipleri (8 adet) | Ortalanmış tek satır 8 çip barı | Evet (Kategori filtresi seçimi, anlık ürün gridi güncelleme) | Hayır | — | 8 Kategori listesi (`Category[]`) | `DEC-05` (Nihai menü kategorileri) |
| **6. SEC-MENU-GRID** | Kategorize Ürün Kartları Vitrini | Tek sütun geniş dokunmatik kartlar (`1 col`) | 3 veya 4 sütunlu zengin ürün ızgarası (`3-4 cols`) | Evet (Karta hover, tıklama ile modal tetikleme) | Hayır | `[DEMO DATA — NON-PRODUCTION]` | 12+ Mock Ürün nesnesi (`Product[]`) | `DEC-05` (Onaylı ürün kataloğu ve fiyat listesi) |
| **7. MOD-PRODUCT** | Ürün Detay & Duyusal Profil Modalı | Alttan kayan Bottom Sheet (%85 yükseklik) | Ortalanmış kart penceresi (`max-width: 680px`), overlay | Evet (Açılış, ESC/dış tık ile kapanış, focus trap) | **EVET** | `[DEMO DATA — NON-PRODUCTION]` | Seçili `Product` nesnesi (Duyusal puanlar, reçete, alerjenler) | `DEC-05` (Alerjen ve besin değerleri verisi) |
| **8. SEC-AI-TEASER** | B+ AI Barista İnovasyon Vitrini | Dikey yığın: Başlık ➔ 3 Mood Çipi ➔ Simüle Öneri Kartı | Geniş interaktif panel: Sol tarafta mod butonları, sağ tarafta dinamik kart | Evet (Mood çipi tıklamasıyla 300ms local animasyonla öneri değişimi) | Hayır | `[PROTOTİP / DEMO VİTRİNİ]` | 3 Simüle AI mod eşleşmesi (Odak, Zen, Enerji) | Bağımsız (ADR-004 Mock veri kuralı) |
| **9. SEC-PREORDER-DEMO** | Ön Sipariş Teaser & Mobil Deneyim | Tek sütun: 3 adım alt alta, tam genişlik e-posta kutusu | Split düzen: Sol 3 adımlı infografik, Sağ bülten & CTA | Evet (Buton tıklamasıyla modal açma, yerel form doğrulama) | Hayır | `[YAKINDA • DEMO SİMÜLATÖRÜ]` | Statik adımlar, yerel bülten state'i | Bağımsız |
| **10. MOD-PREORDER** | Ön Sipariş Demo Simülatörü Modalı | Alttan açılan tam ekran/yüksek bottom sheet | Ortalanmış kart penceresi (`max-width: 560px`), koyu overlay | Evet (Adım geçiş simülasyonu, kapat butonu) | **EVET** | `[PROTOTİP MODU — GERÇEK SİPARİŞ / ÖDEME ALINMAZ]` | Simüle adımlar (Ürün, Gel-Al saati, Mock sepet toplamı) | `DEC-02`, `DEC-03` (Ödeme ve sipariş altyapısı) |
| **11. SEC-DELIVERY-PREVIEW** | Teslimat Ön Gösterimi (Opsiyonel / Gelecek Faz) | Tek kart dikey hafif banner | Yatay minimalist şerit banner | Evet (Hafif buton hover) | Hayır | `[GELECEK FAZ • DELIVERY MODEL TBD]` | Statik gelecek vizyonu metni | Gelecek Faz (Kurye / Lojistik işveren kararı) |
| **12. SEC-LOCATION-HOURS** | Şube Lokasyonu, Saatler & Ulaşım | Dikey yığın: Adres & saatler, altta statik kroki kartı | İki sütun: Sol panel operasyonel saatler, Sağ panel interaktif harita kartı | Evet (Harita kartı hover, harici rota bağlantısı) | Hayır | `[ÖRNEK LOKASYON / TBD — EMPLOYER DATA REQUIRED]` | Adres, Çalışma Saatleri, Cutoff Kuralı, Koordinatlar | `ASSUMPTION` (Şube yeri), `DEC-10` (Saatler & Cutoff kuralı) |
| **13. SEC-CONTACT-SOCIAL** | İletişim, Topluluk & Instagram | 2x2 Küçük görsel ızgarası + alt alta iletişim satırları | Sol tarafta 4 fotoğraflı Instagram ızgarası, sağ tarafta iletişim & mesaj formu | Evet (Görsel hover parlama, form simülasyonu) | Hayır | `[DEMO / ÖRNEK İLETİŞİM BİLGİLERİ]` | 4 Mock görsel, e-posta/telefon metni | `TBD` (Kurumsal telefon & e-posta hesabı) |
| **14. SEC-FOOTER** | Alt Bilgi & Yasal Feragatname | Dikey yığın: Logo ➔ Linkler ➔ Disclaimer ➔ Telif hakkı | 4 Sütunlu kurumsal alt bilgi: Marka imzası, Site Haritası, Yasal Uyarılar | Evet (Yukarı çık smooth scroll, link hover) | Hayır | `[ZORUNLU PROTOTİP FERAGATNAMESİ]` | Statik telif hakları, yasal metinler | Bağımsız |
