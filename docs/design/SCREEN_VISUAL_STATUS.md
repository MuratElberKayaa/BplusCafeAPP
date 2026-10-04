# B+ Wellness Café — Screen Visual & Prototype Status Matrix

**Doküman Sürümü:** 1.0.0 (Phase 2 — High-Fidelity UI/UX & Interactive Prototype)  
**Tarih:** 2026-09-30  
**Statü:** ACTIVE — VISUAL QA SPECIFICATION  
**Referans:** [docs/ux/SCREEN_INVENTORY.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/SCREEN_INVENTORY.md)

---

## 1. Müşteri Mobil Uygulaması (Customer Mobile App)

| Screen ID | Screen Name | Platform | High Fidelity | Interactive | Responsive | Loading | Empty | Error | Notes |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| `SCR-CUST-01` | Splash | Mobile | YES | YES | YES | YES | - | - | Logo, marka karşılama animasyonu |
| `SCR-CUST-02` | Welcome / Onboarding | Mobile | YES | YES | YES | - | - | - | Wellness karşılama slaytları |
| `SCR-CUST-03` | Login | Mobile | YES | YES | YES | YES | - | YES | E-posta/şifre ve tek tıkla demo giriş |
| `SCR-CUST-04` | Register | Mobile | YES | YES | YES | YES | - | YES | Kayıt formu simülasyonu |
| `SCR-CUST-05` | Home | Mobile | YES | YES | YES | YES | YES | YES | Şube bandı, hızlı sipariş, AI teaser |
| `SCR-CUST-06` | Menu | Mobile | YES | YES | YES | YES | YES | YES | Kategori sekmeleri, 2'li ürün ızgarası |
| `SCR-CUST-07` | Search | Mobile | YES | YES | YES | YES | YES | - | Anlık ürün arama ve filtre çipleri |
| `SCR-CUST-08` | Filters | Mobile | YES | YES | YES | - | - | - | Diyet/kafein filtre modalı |
| `SCR-CUST-09` | Product Detail | Mobile | YES | YES | YES | YES | - | YES | Besin değerleri, alerjenler, baz fiyat |
| `SCR-CUST-10` | Customize Product | Mobile | YES | YES | YES | - | - | - | Boyut, süt, şurup, boost dinamik fiyat |
| `SCR-CUST-11` | AI Barista | Mobile | YES | YES | YES | YES | YES | - | Sohbet balonları, hazır öneri çipleri |
| `SCR-CUST-12` | AI Recommendation | Mobile | YES | YES | YES | - | YES | - | Zengin ürün tavsiye kartı (%94 eşleşme) |
| `SCR-CUST-13` | Cart | Mobile | YES | YES | YES | YES | YES | YES | Kalem dökümü, ara toplam, sepet sil/düzenle |
| `SCR-CUST-14` | Checkout | Mobile | YES | YES | YES | YES | - | YES | Şube özeti, ödeme yöntemi seçici |
| `SCR-CUST-15` | Payment Sandbox | Mobile | YES | YES | YES | YES | - | YES | Sandbox test ödemesi simülatörü |
| `SCR-CUST-16` | Order Confirmation | Mobile | YES | YES | YES | - | - | - | Sipariş kodu (#B-108) ve başarı ekranı |
| `SCR-CUST-17` | Order Tracking | Mobile | YES | YES | YES | YES | - | YES | 4 adımlı canlı takip çubuğu simülasyonu |
| `SCR-CUST-18` | Rewards | Mobile | YES | YES | YES | YES | YES | - | Demo puan kartı, ödül listesi (RULE TBD) |
| `SCR-CUST-19` | B+ Wallet Sandbox | Mobile | YES | YES | YES | YES | YES | - | Sandbox test bakiyesi (DEMO ONLY) |
| `SCR-CUST-20` | Wallet Add Balance | Mobile | YES | YES | YES | YES | - | - | Test bakiyesi yükleme (100, 250, 500 TL) |
| `SCR-CUST-21` | Order History | Mobile | YES | YES | YES | YES | YES | - | Geçmiş siparişler ve "Aynısını Tekrarla" |
| `SCR-CUST-22` | Profile | Mobile | YES | YES | YES | - | - | - | Kişisel bilgiler, diyet tercihleri |
| `SCR-CUST-23` | Settings | Mobile | YES | YES | YES | - | - | - | Bildirim izinleri, KVKK, sürüm bilgisi |

---

## 2. Store Operations (KDS)

| Screen ID | Screen Name | Platform | High Fidelity | Interactive | Responsive | Loading | Empty | Error | Notes |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| `SCR-OPS-01` | Order Board | Tablet Web | YES | YES | YES | YES | YES | YES | 4 sütunlu Kanban (NEW -> PREPARING -> READY -> COMPLETED) |
| `SCR-OPS-02` | Order Detail Drawer | Tablet Web | YES | YES | YES | - | - | - | Kalın vurgulu reçete özelleştirmeleri |
| `SCR-OPS-03` | Quick Stock (86 Modal)| Tablet Web | YES | YES | YES | - | - | - | Malzeme/ürün anlık tükenme anahtarları |

---

## 3. Admin Panel

| Screen ID | Screen Name | Platform | High Fidelity | Interactive | Responsive | Loading | Empty | Error | Notes |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| `SCR-ADM-01` | Dashboard | Desktop Web | YES | YES | YES | YES | YES | - | Günlük özet metrikler, satış hacmi |
| `SCR-ADM-02` | Menu Management | Desktop Web | YES | YES | YES | YES | - | - | Kategori ağacı ve sıralama düzeni |
| `SCR-ADM-03` | Products Management | Desktop Web | YES | YES | YES | YES | YES | YES | Ürün tablosu + 7 sekmeli ürün editörü |
| `SCR-ADM-04` | Orders Management | Desktop Web | YES | YES | YES | YES | YES | - | Sipariş inceleme *(İade: TBD - DEC-07)* |
| `SCR-ADM-05` | Users Management | Desktop Web | YES | YES | YES | YES | YES | - | Müşteri & personel yetki yönetimi |
| `SCR-ADM-06` | Rewards Management | Desktop Web | YES | YES | YES | - | - | - | Dinamik kural motoru konfigüratörü |
| `SCR-ADM-07` | AI Settings | Desktop Web | YES | YES | YES | - | - | - | Guardrail eşikleri ve prompt ayarları |
| `SCR-ADM-08` | Settings | Desktop Web | YES | YES | YES | - | - | - | Şube çalışma saatleri ve cutoff ayarları |
