# B+ Wellness Café — Comprehensive Screen Inventory & State Coverage

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** APPROVED FOR PHASE 1 (FROZEN CANDIDATE)  
**Referans:** [docs/ux/INFORMATION_ARCHITECTURE.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/ux/INFORMATION_ARCHITECTURE.md)

---

## 1. Customer Mobile App Ekran Envanteri (23 Ekran)

| # | Ekran Adı | Ekran ID | Erişim / Tetikleyici | Yetki (Auth) | Anlamlı UI Durumları (State Coverage) |
| :- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Splash** | `SCR-CUST-01` | Uygulama açılışı | Anonim | Loading (Init), Success (Yönlendirme), Offline |
| 2 | **Welcome / Onboarding** | `SCR-CUST-02` | İlk açılış | Anonim | Success |
| 3 | **Login** | `SCR-CUST-03` | Auth Gate / Profile | Anonim | Success, Loading (Submitting), Error (Invalid Credentials) |
| 4 | **Register** | `SCR-CUST-04` | Welcome / Login | Anonim | Success, Loading, Error (Validation / Conflict) |
| 5 | **Home** | `SCR-CUST-05` | Alt Sekme (Tab 1) | Misafir / Üye | Loading (Shimmer), Success, Empty (No featured items), Offline, Unavailable (Store Closed) |
| 6 | **Menu** | `SCR-CUST-06` | Alt Sekme (Tab 2) | Misafir / Üye | Loading (Skeleton), Success, Empty (Filtreye uygun yok), Error, Offline |
| 7 | **Search** | `SCR-CUST-07` | Menu arama çubuğu | Misafir / Üye | Empty (Arama yapılmadı / Eşleşme yok), Success, Loading |
| 8 | **Filters** | `SCR-CUST-08` | Menu filtre butonu | Misafir / Üye | Success (Form), Reset |
| 9 | **Product Detail** | `SCR-CUST-09` | Ürün kartı dokunma | Misafir / Üye | Loading, Success, Unavailable (Out of Stock), Error |
| 10 | **Customize Product** | `SCR-CUST-10` | Product Detail modalı | Misafir / Üye | Success, Unavailable (Seçilen opsiyon tükendi) |
| 11 | **AI Barista** | `SCR-CUST-11` | Alt Sekme (Tab 3) | Misafir / Üye | Success (Chat), Loading (Thinking/Generating), Empty (Başlangıç), Offline |
| 12 | **AI Recommendation**| `SCR-CUST-12` | AI yanıt kartları | Misafir / Üye | Success (Cards), Empty (Uygun ürün bulunamadı fallback), Unavailable (Tükenmiş ürün filtresi) |
| 13 | **Cart** | `SCR-CUST-13` | Header sepet ikonu | Misafir / Üye | Empty (Sepet boş), Success, Unavailable (Sepetteki malzeme tükendi uyarı rozeti) |
| 14 | **Checkout** | `SCR-CUST-14` | Cart -> Tamamla | **ZORUNLU (Auth)** | Unauthenticated (Auth Gate yönlendirir), Success, Loading, Unavailable (Cutoff / Kapalı) |
| 15 | **Payment** | `SCR-CUST-15` | Checkout -> Öde | **ZORUNLU (Auth)** | Loading (3D / Processing), Success, Error (Card Declined), Offline |
| 16 | **Order Confirmation**| `SCR-CUST-16` | Başarılı ödeme sonrası | **ZORUNLU (Auth)** | Success |
| 17 | **Order Tracking** | `SCR-CUST-17` | Confirmation / Bildirim | **ZORUNLU (Auth)** | Loading, Success (4 adımlı çubuk), Error, Offline |
| 18 | **Rewards** | `SCR-CUST-18` | Alt Sekme (Tab 4) | **ZORUNLU (Auth)** | Unauthenticated (Giriş yap CTA), Loading, Success (`RULE TBD`), Empty (Hareket yok) |
| 19 | **Wallet** | `SCR-CUST-19` | Profile / Checkout | **ZORUNLU (Auth)** | Unauthenticated, Success (`SANDBOX ONLY`), Empty (Hareket yok) |
| 20 | **Wallet Add Balance**| `SCR-CUST-20` | Wallet ekranı | **ZORUNLU (Auth)** | Success (Sandbox yükleme), Loading |
| 21 | **Order History** | `SCR-CUST-21` | Profile menüsü | **ZORUNLU (Auth)** | Unauthenticated, Loading, Success, Empty (Geçmiş sipariş yok) |
| 22 | **Profile** | `SCR-CUST-22` | Alt Sekme (Tab 5) | Misafir / Üye | Unauthenticated (Misafir görünümü), Success (Üye görünümü) |
| 23 | **Settings** | `SCR-CUST-23` | Profile ayarlar | Misafir / Üye | Success |

---

## 2. Store Operations (KDS) Ekran Envanteri (2 Ekran + 1 Modal)

| # | Ekran Adı | Ekran ID | Platform | Yetki | Anlamlı UI Durumları |
| :- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Order Board (KDS Panosu)** | `SCR-OPS-01` | Tablet Web | `BARISTA` / `STORE_MANAGER` | Loading, Success (Kanban), Empty (Bekleyen sipariş yok), Offline (Reconnecting bandı) |
| 2 | **Order Detail Drawer** | `SCR-OPS-02` | Tablet Web | `BARISTA` / `STORE_MANAGER` | Success, Loading (Status updating) |
| 3 | **Quick Stock Toggle Modal ("86")**| `SCR-OPS-03` | Tablet Web | `BARISTA` / `STORE_MANAGER` | Success, Loading (Toggling) |

---

## 3. Admin Panel Ekran Envanteri (8 Ekran)

| # | Ekran Adı | Ekran ID | Platform | Yetki | Anlamlı UI Durumları |
| :- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Dashboard** | `SCR-ADM-01` | Desktop Web | `ADMIN` / `STORE_MANAGER` | Loading, Success, Empty (Henüz veri yok) |
| 2 | **Menu Management** | `SCR-ADM-02` | Desktop Web | `ADMIN` | Loading, Success, Error |
| 3 | **Products Management** | `SCR-ADM-03` | Desktop Web | `ADMIN` | Loading, Success, Empty, Error |
| 4 | **Orders Management** | `SCR-ADM-04` | Desktop Web | `ADMIN` / `STORE_MANAGER` | Loading, Success, Empty (Filtreye uygun sipariş yok) *(İade: TBD - DEC-07)* |
| 5 | **Users Management** | `SCR-ADM-05` | Desktop Web | `ADMIN` | Loading, Success, Empty |
| 6 | **Rewards Management** | `SCR-ADM-06` | Desktop Web | `ADMIN` | Loading, Success (`Configurable Rules - RULE TBD`) |
| 7 | **AI Settings** | `SCR-ADM-07` | Desktop Web | `ADMIN` | Loading, Success |
| 8 | **Settings** | `SCR-ADM-08` | Desktop Web | `ADMIN` / `STORE_MANAGER` | Loading, Success (`order_cutoff_minutes = configurable`) |
