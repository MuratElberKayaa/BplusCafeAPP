# B+ Wellness Café — Web Demo Boundaries & Scope Guardrails
**Workstream:** Website Workstream — Web Phase 0  
**Doküman Sürümü:** 1.0.0 (Web Scope Lock)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED & SCOPE LOCKED  

---

## 1. Giriş ve Amaç

Bu doküman, B+ Wellness Café müşteri-facing web sitesinin (`apps/web`) prototip sınırlarını, ticari/hukuki bağlayıcılık kapsamını ve henüz işveren tarafından kesinleştirilmemiş (TBD) veri alanlarını net biçimde kilit altına alır.

Web sitesi, markanın vizyonunu, menüsünü ve fiziksel mağaza varlığını sergileyen bir **dijital vitrin ve konsept prototipidir**. Tüketicide veya işverende yanıltıcı bir beklenti oluşmaması için aşağıdaki sınırlar bağlayıcıdır.

---

## 2. Temel Demo Sınırları (Core Demo Boundaries)

### 2.1. DEMO MENU (Örnek Menü Verisi)
- **Durum:** Gerçek işveren menüsü henüz teslim edilmemiştir (`DEC-05` kararı açıktır).
- **Uygulama:** Sitede sergilenen tüm içecek ve yiyecekler, fiyatlar, gramajlar ve reçeteler merkezi mock veri tabanından (`packages/types/src/mocks/index.ts`) beslenen **örnek verilerdir (demo data)**.
- **Kural:** Menü bölümünün başında ve ürün kartlarında `[DEMO VERİ — NON-PRODUCTION]` etiketi yer almalıdır.

---

### 2.2. NO REAL ORDERING (Gerçek Sipariş Alınmaz)
- **Durum:** Web sitesi üzerinde çalışan gerçek bir sepet gönderme, mutfak/KDS ekranına iletme veya sipariş takip yaşam döngüsü (`NEW` ➔ `PREPARING` ➔ `READY`) **YOKTUR**.
- **Uygulama:** Sitedeki "Sipariş Ver" veya "Sepete Ekle" benzeri tüm eylemler, sipariş almaz; ziyaretçiyi bilgilendiren ve mobil uygulamayı tanıtan demo modalını (`MOD-PREORDER`) açar.
- **Kural:** Hiçbir kullanıcıya sipariş numarası, fiş veya hazırlık taahhüdü üretilmez.

---

### 2.3. NO REAL PAYMENT (Gerçek Ödeme Alınmaz)
- **Durum:** Web sitesinde hiçbir ödeme ağ geçidi (Iyzico, PayTR, Sanal POS, Stripe vb.) veya gerçek para cüzdanı entegrasyonu **YOKTUR** (`DEC-02` ve `DEC-03` sınırları).
- **Uygulama:** Kredi kartı formu, CVV girdisi veya 3D Secure akışı yer alamaz.
- **Kural:** Ziyaretçiden 1 Kuruş dahi olsa gerçek finansal tahsilat yapılamaz.

---

### 2.4. PRE-ORDER = DEMO / COMING SOON (Ön Sipariş Prototip Modundadır)
- **Durum:** Müşterinin web üzerinden önceden sipariş verip mağazadan teslim alması (Order Ahead) özelliği henüz canlı servise bağlı değildir.
- **Uygulama:** Bu özellik sitede "B+ Order Ahead — Yakında Mobil Uygulamada!" şeklinde bir yenilik vitrini olarak sunulur.
- **Kural:** Kullanılan butonlar açıkça `Ön Sipariş Deneyimi (Demo)` veya `Yakında (Prototype)` olarak etiketlenir.

---

### 2.5. DELIVERY = FUTURE / DEMO (Teslimat Gelecek Faz / TBD)
- **Durum:** B+ markasının herhangi bir kurye filosu, Yemeksepeti / Getir / Trendyol Go entegrasyonu henüz kurulmamıştır.
- **Uygulama:** Teslimat alanı yalnızca "Ofisinize ve Evinize Teslimat (Yakında)" başlığıyla bir gelecek vizyonu ön gösterimi (preview) olarak yer alabilir.
- **Kural:** Kullanıcıya anlık kurye çağırma veya adresine sipariş gönderme vaadinde bulunulamaz.

---

## 3. Henüz Kesinleşmemiş İşveren Verileri (Employer Data Remaining TBD)

Aşağıdaki işveren verileri henüz kesinleşmemiştir ve sitede **EXAMPLE / DEMO / TBD** olarak yer almalıdır. Bu veriler kesin gibi sunulamaz:

| Veri Alanı | Mevcut Durum | Web Sitesindeki Placeholder / Demo Karşılığı | İlgili İşveren Kararı |
| :--- | :--- | :--- | :--- |
| **Fiziksel Adres** | 1. Şube henüz teyit edilmemiştir | `Kadıköy / İstanbul — ÖRNEK LOKASYON (TBD — EMPLOYER DATA REQUIRED) / Moda Cad. No: 42 (DEMO ADDRESS / TBD)` | `ASSUMPTION` |
| **Çalışma Saatleri** | Kesin operasyon saatleri bilinmiyor | `Hafta İçi: 07:30 - 22:00, Hafta Sonu: 08:30 - 23:00 (DEMO VALUE ONLY / TBD — EMPLOYER DECISION REQUIRED)` | `DEC-10` |
| **Sipariş Kesilme Kuralı** | Kapanış öncesi cutoff netleşmedi | `Kapanıştan 15 dakika önce (DEMO VALUE ONLY / CONFIGURABLE — DEC-10)` | `DEC-10` |
| **Telefon Numarası** | Kurumsal hat henüz açılmadı | `+90 (216) 555 00 22 (ÖRNEK / DEMO — TBD)` | `TBD` |
| **E-posta Adresi** | Kurumsal alan adı e-postası netleşmedi | `merhaba@bpluscafe.com (ÖRNEK / DEMO — TBD)` | `TBD` |
| **Nihai Menü & Fiyatlar** | Tam ürün listesi ve reçeteler onaylanmadı | `12-15 kalemlik örnek wellness kahve & kase kataloğu (DEMO DATA — NON-PRODUCTION)` | `DEC-05` |
| **Teslimat Sağlayıcısı** | Kurye modeli belirlenmedi | `Paket Servis Modeli (GELECEK FAZ / TBD)` | `Gelecek Faz` |
| **POS & Kasa Entegrasyonu**| Kasa markası bilinmiyor | `Web KDS bağımsız prototip gösterimi` | `DEC-01` |

---

## 4. Tıbbi & Sağlık İddiası Kısıtlamaları (Medical Claim Guardrails)

Tüketiciyi koruma mevzuatı ve gıda takviyesi/sağlık beyanları yönetmelikleri gereği:
1. **İlaç veya Tedavi İddiası Yasaktır:** Ürünlerin hiçbir hastalığı tedavi ettiği, önlediği veya hafiflettiği iddia edilemez.
2. **Fizyolojik Detoks / Organ Arındırma İddiası Yasaktır:** "Detoks" terimi yalnızca ferahlatıcı soğuk sıkım içecek kategori adı / ürün çeşidi olarak kullanılabilir; karaciğer/böbrek arındırma veya tıbbi toksin atımı beyanı kesinlikle yapılamaz.
3. **Garantili Bilişsel / Odak İddiaları Yasaktır:** Lion's Mane, matcha, kordiseps veya adaptojenler için kesin "odaklanma artışı", "bilişsel performans garantisi" gibi ifadeler yasaktır.
4. **Kullanılacak Güvenli Dil:** "Zindelik desteği", "günlük protein katkısı", "ferahlatıcı narenciye lezzeti", "odaklanma anlarına keyifle eşlik eden lezzet", "günlük rutininize ferah bir mola" gibi yaşam tarzı ve duyusal ifadeler kullanılır.
5. **Menü Sağlık Etiketleri Statüsü:** Sitedeki tüm fonksiyonel ürün faydaları ve wellness etiketleri `DEMO DATA — NON-PRODUCTION` statüsündedir.

---

## 5. Web Sitesi Yasal Feragatname Metni (Site Disclaimer Copy)

Web sitesinin en alt kısmında (Footer alanında) yer alması zorunlu olan bildirim:

> *"B+ Wellness Café by Mineiro Coffee web sitesi bir dijital konsept ve pazarlama vitrini prototipidir. Sitede yer alan fiyatlar, ürün açıklamaları, şube adresleri ve çalışma saatleri örnekleme amaçlı olup ticari bir taahhüt niteliği taşımaz. Sitede gerçek ödeme veya çevrim içi sipariş kabul edilmemektedir."*
