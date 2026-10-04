# B+ Wellness Café — Web Component Visual Specification

**Workstream:** Website Workstream — Web Phase 2  
**Doküman Sürümü:** 1.0.0 (Component Visual Library Specification)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — COMPONENT SPECIFICATION  
**Roller:** Senior UI Designer, Design System Specialist  

---

## 1. Buton Sistemi (Button System)

Tüm butonlar mobil ve masaüstünde erişilebilirlik gereği **en az 44px × 44px** fiziksel dokunmatik alana (touch target) sahiptir.

```
+-------------------------------------------------------+
|  Primary Button:    [  Menüyü Keşfet               ]  | (Deep Olive dolgu)
|  Secondary Button:  [  Konsepti Gör                ]  | (1.5px Deep Olive çerçeve)
|  Text Button:          Bu Anın Reçetesini Gör ->      | (Metin linki)
|  Icon Button:       [  ✕  ]  [  ≡  ]                 | (44x44px min dokunma)
+-------------------------------------------------------+
```

### 1.1. Buton Çeşitleri ve Durum Haritası

| Buton Türü | Boyut & Padding | Default Durum | Hover Durumu | Pressed (Active) | Focus-Visible | Disabled |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Button** | H: 48px, PX: 28px, Radius: 999px | Zemin: Deep Olive (`#34422D`), Metin: Warm White (`#FFFDF8`), Ağırlık: Bold | Zemin: Olive (`#68734B`), Yükselme: -2px, Hafif gölge | Zemin: `#2B3624`, Yükselme: 0px | 2px kesintisiz Deep Olive dış halka, 2px offset | Opaklık: %40, İmleç: not-allowed |
| **Secondary Button** | H: 48px, PX: 28px, Radius: 999px | Zemin: Şeffaf, Çerçeve: 1.5px Deep Olive, Metin: Deep Olive | Zemin: Cream (`#F4F0E6`), Çerçeve: Olive | Zemin: `#E5DFD0` | 2px dış halka | Çerçeve: `#C5BFAB`, Metin: Muted Text |
| **Demo CTA Button** | H: 44px, PX: 20px, Radius: 12px | Zemin: Warm White, Çerçeve: 1px Latte (`#D8B98C`), Metin: Deep Olive | Zemin: Latte (%20 opaklık), Çerçeve: Latte | Zemin: Latte (%35 opaklık) | 2px Latte odak halkası | Opaklık: %50 |
| **Icon Button** | 44px × 44px, Radius: 999px | Zemin: Şeffaf, İkon: Deep Olive (24px line-art) | Zemin: Cream (`#F4F0E6`), İkon: Olive | Zemin: `#E3DEC3` | 2px Deep Olive odak halkası | Opaklık: %30 |
| **Text Link Button**| Satır içi, Min dokunma tamponu: 44px | Metin: Deep Olive SemiBold, Alt çizgi: Şeffaf | Metin: Olive, Alt çizgi: 1.5px Olive | Metin: Deep Olive | 2px odak kutusu | Renk: Muted Text |

---

## 2. Kategori Çipleri (Category & Intent Chips)

### 2.1. Menü Kategori Çipi (`CategoryPill`)
- **Boyut:** Yükseklik 42px, Yatay Padding 20px, Köşe yarıçapı: 999px (Tam yuvarlak hap).
- **Default:** Zemin: Warm White (`#FFFDF8`), Çerçeve: `1px solid #E3DEC3`, Metin: 14px SemiBold Espresso (`#2B231E`).
- **Hover:** Zemin: Cream (`#F4F0E6`), Çerçeve: Sage (`#AEB997`), Metin: Deep Olive.
- **Selected (Aktif):** Zemin: Deep Olive (`#34422D`), Çerçeve: Yok, Metin: Warm White (Bold), Hafif gölge (`shadow.soft`).
- **Focus:** 2px dış odak halkası (`outline: 2px solid #68734B; outline-offset: 2px`).

### 2.2. AI Niyet Çipi (`IntentChip`)
- **Boyut:** Yükseklik 40px, Yatay Padding 18px, Köşe yarıçapı: 12px.
- **Default:** Zemin: Warm White, Çerçeve: `1px solid #E3DEC3`, Metin: Deep Olive.
- **Selected:** Zemin: Deep Olive, Çerçeve: `1.5px solid #D8B98C` (Latte kenar vurgusu), Metin: Warm White.

---

## 3. Kart Sistemleri (Distinct Card Families)

Kartlar monoton tekdüzelikten kaçınmak amacıyla 4 farklı amaca özel aileye ayrılmıştır:

```
+------------------------------------+  +------------------------------------+
| MomentCard Family (Rhythm)         |  | ProductCard Family (Showcase)      |
| [08:00] İŞE GİDİŞ                  |  | +--------------------------------+ |
| Temiz uyanış, dengeli asidite.     |  | | [ Fotoğraf 1:1 Doğal Işık ]    | |
| Reçete: Cold Brew + Lion's Mane    |  | +--------------------------------+ |
| Bu Anın Reçetesini Gör ->          |  | Lion's Mane Cold Brew              |
+------------------------------------+  | ₺145.00 [DEMO]   [Detaylı İncele]  |
                                        +------------------------------------+
+------------------------------------+  +------------------------------------+
| AiRecommendationCard (Innovation)  |  | LocationCard (Place & Times)       |
| 98% Uyum [DEMO SCORE]              |  | Kadıköy / İstanbul [ÖRNEK LOKASYON]|
| Matcha Zen Latte                   |  | Hafta İçi: 07:30 - 22:00 [DEMO]    |
| L-Theanine ile dengeli mola        |  | *Kapanıştan 15 dk önce cutoff     |
+------------------------------------+  +------------------------------------+
```

### 3.1. `MomentCard` Ailesi (İş Günü Anları)
- **Karakter:** Metin ve zaman damgası ağırlıklı, ritmik, sakin editorial kart.
- **Özellikler:** Zemin Warm White, Köşe yarıçapı `20px`, Padding `32px`. Üstte 14px Latte zaman kapsülü (`08:00`), ortada 22px H3 başlık, altta güvenli yaşam tarzı açıklaması ve sağa ok ikonu içeren metin linki.

### 3.2. `ProductCard` Ailesi (Menü Vitrini)
- **Karakter:** Ürün görseli dominant, iştah kabartan, duyusal rozet odaklı kart.
- **Özellikler:** Zemin Warm White, Köşe yarıçapı `16px`, Taşma gizli (overflow hidden). Üstte 4:3 oranında fotoğraf, fotoğraf üzerinde sol üstte 2 adedi geçmeyen Sage diyet etiketi (`[Vegan]`). Altta 18px H3 ürün adı, 2 satırlı duyusal açıklama, 16px demo fiyatı ve "Detaylı İncele" butonu. Fare üzerine geldiğinde `translateY(-4px)` yükselmesi.

### 3.3. `AiRecommendationCard` Ailesi (Yapay Zeka Öneri Adası)
- **Karakter:** Prestijli, teknolojik ama sıcak, Latte altın oran çerçeveli ada kartı.
- **Özellikler:** Zemin Warm White, Çerçeve `1.5px solid #D8B98C`, Köşe yarıçapı `24px`, Padding `32px`. Belirgin `98% Uyum [DEMO SCORE / PROTOTYPE SIMULATION]` rozeti, ADR-004 grounding güvence notu ve mobil uygulama yönlendirme butonu.

### 3.4. `LocationCard` Ailesi (Şube & Saatler)
- **Karakter:** Bilgilendirici, yapılandırılmış, operasyonel tablo kartı.
- **Özellikler:** Zemin Warm White, Çerçeve `1px solid #E3DEC3`, Köşe yarıçapı `16px`. Açık `[ÖRNEK LOKASYON — TBD]` rozeti, hafta içi / hafta sonu saat tablosu ve kapanıştan 15 dk önce sipariş kesilme kuralı göstergesi.

---

## 4. Giriş Alanları (Input Fields)

- **TextField (Bülten & İletişim):**
  - Yükseklik: `48px`, İç padding: `16px`, Köşe yarıçapı: `12px`.
  - *Default:* Zemin: Warm White, Çerçeve: `1px solid #E3DEC3`, Metin: 15px Espresso, Yer tutucu (Placeholder): Muted Text (`#6B675F`).
  - *Hover:* Çerçeve: Sage (`#AEB997`).
  - *Focus:* Çerçeve: `2px solid #68734B` (Olive), Odak halkası: `outline: 2px solid rgba(104, 115, 75, 0.25)`.
  - *Error:* Çerçeve: `2px solid #9E3E37` (Status Error).

---

## 5. Modallar ve Alt Çekmeceler (Modals & Bottom Sheets)

### 5.1. Modal Pencere (`MOD-PRODUCT` & `MOD-PREORDER` Desktop)
- **Genişlik:** `MOD-PRODUCT`: `720px`, `MOD-PREORDER`: `540px`.
- **Yüzey:** Zemin: Warm White (`#FFFDF8`), Köşe yarıçapı: `24px`, Koyu overlay: `rgba(43, 35, 30, 0.65)`.
- **Gölgelendirme:** `shadow.modal` (`0px 16px 48px rgba(43, 35, 30, 0.18)`).
- **Kapatma Butonu:** Sağ üst köşede 44px × 44px dairesel `✕` butonu.

### 5.2. Mobil Alt Çekmece (Bottom Sheet)
- **Genişlik & Yükseklik:** `%100` genişlik, `85vh` maksimum yükseklik.
- **Köşe Yarıçapı:** Üst sol ve üst sağ köşeler `24px`.
- **Sürükleme Çubuğu (Drag Handle):** Üst merkezde 40px × 4px yuvarlak gri çubuk (`#C5BFAB`).

---

## 6. Rozetler ve Feragatname Bildirimleri (Badges & Disclaimers)

1. **Diyet Rozeti (`DietBadge`):**
   - Zemin: Sage (`#AEB997`), Metin: Deep Olive (`#34422D`), Boyut: 12px SemiBold, Padding: `4px 10px`, Radius: 999px.
2. **Demo Uyarı Rozeti (`DemoBadge`):**
   - Zemin: Cream (`#F4F0E6`), Çerçeve: `1px solid #D8B98C`, Metin: Deep Olive 11px SemiBold, Padding: `3px 8px`.
3. **Kritik Prototip Rozeti (`StrictDemoBadge`):**
   - Zemin: `#F9EBEA`, Çerçeve: `1px solid #9E3E37`, Metin: `#9E3E37` (Kırmızı/Amber uyarı), `[PROTOTİP MODU — GERÇEK SİPARİŞ / ÖDEME ALINMAZ]`.
4. **Genel Menü Feragatnamesi (`GlobalMenuDisclaimer`):**
   - Menü başlığı altında zarif 13px Muted Text: *"Menü ve fiyatlar örnek içeriktir."*

---

## 7. İkonografi Standartları (Iconography System)

- **Çizgi Kalınlığı:** `1.75px` sabit ince monoline vektör.
- **Optik Boyut:** 24px × 24px standart (buton içi mikro ikonlar: 18px × 18px).
- **Köşeler:** Hafif yuvarlatılmış uçlar (round cap / round join).
- **Kural:** Prodüksiyon arayüzünde emoji ikon olarak kullanılmaz; SVG line-art kullanılır.
