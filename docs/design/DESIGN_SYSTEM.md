# B+ Wellness Café — Design System Specification

**Doküman Sürümü:** 1.0.0 (Phase 2 — High-Fidelity UI/UX & Interactive Prototype)  
**Tarih:** 2026-09-30  
**Statü:** ACTIVE — DESIGN SPECIFICATION  
**Tasarım Dili:** Premium Wellness Café • Natural & Modern • Warm & Clean  

---

## 1. Marka Görsel Kimliği ve Ruh Hali (Visual Identity & Mood)

B+ Wellness Café by Mineiro Coffee görsel kimliği, geleneksel steril teknoloji arayüzleri ile endüstriyel kahve dükkanı görünümleri arasına dengeli bir köprü kurar:
- **Doğal & Yaşayan:** Zeytin yeşili ve adaçayı yaprak tonları, süt kreması ve latte tonlarıyla organik bir uyum oluşturur.
- **Sakin & Modern:** Yüksek negatif alan (whitespace), yumuşak köşe yuvarlatmaları (smooth radii) ve göz yormayan derinlik gölgeleri.
- **Teknolojik Ama İnsani:** AI Barista bir "robot kafa" olarak değil; kullanıcının kişisel sağlıklı yaşam ve kahve danışmanı (Personal Digital Coffee Advisor) olarak konumlanır.

---

## 2. Renk Sistemi (Color Tokens)

### 2.1. Temel Marka Paleti (Primary Brand Palette)

| Token Adı | HEX Kodu | RGB | Kullanım Alanı |
| :--- | :--- | :--- | :--- |
| `color.primary.olive` | `#68734B` | `rgb(104, 115, 75)` | Birincil CTA butonları, aktif sekme ikonları, marka vurguları |
| `color.primary.deepOlive` | `#34422D` | `rgb(52, 66, 45)` | Koyu metin başlıkları, KDS odak durumları, yüksek kontrastlı yüzeyler |
| `color.primary.sage` | `#AEB997` | `rgb(174, 185, 151)` | İkincil rozetler, yumuşak arka planlar, etiket filtreleri |
| `color.surface.cream` | `#F4F0E6` | `rgb(244, 240, 230)` | Ana arka plan (Warm Background), kart altlıkları, KDS zemin rengi |
| `color.surface.warmWhite` | `#FFFDF8` | `rgb(255, 253, 248)` | Yükseltilmiş kart yüzeyleri (Elevated Cards), modal pencereleri |
| `color.accent.latte` | `#D8B98C` | `rgb(216, 185, 140)` | İkincil aksanlar, ödül/yıldız öğeleri, AI öneri kart vurguları |
| `color.neutral.espresso` | `#2B231E` | `rgb(43, 35, 30)` | Birincil gövde metinleri, koyu simgeler (yüksek okunabilirlik) |
| `color.neutral.mutedText` | `#6B675F` | `rgb(107, 103, 95)` | İkincil açıklamalar, pasif metinler, meta etiketler |
| `color.neutral.border` | `#E3DEC3` | `rgb(227, 222, 195)` | İnce ayırıcı çizgiler, kart sınırları |

### 2.2. Durum ve Bildirim Renkleri (Functional & Semantic Colors)

| Token Adı | HEX Kodu | Anlamı & Kullanım |
| :--- | :--- | :--- |
| `color.status.success` | `#4B7354` | Onaylandı (`CONFIRMED`), Ödeme Başarılı, Hazır (`READY`) rozeti |
| `color.status.warning` | `#B8863B` | Hazırlanıyor (`PREPARING`), Bekleme süresi uyarısı |
| `color.status.error` | `#9E3E37` | Hata, Ödeme Reddedildi, Tükendi (`86 / Unavailable`) rozeti |
| `color.status.info` | `#4A6D7C` | Bilgilendirme afişleri, çalışma saatleri notu |

---

## 3. Tipografi Sistemi (Typography Hierarchy)

Tercih edilen yazı tipi ailesi: **Plus Jakarta Sans** / **Inter** / **Manrope** (Sistem alternatifi: `System-UI, -apple-system, sans-serif`).

| Tipografi Adı | Boyut (px / rem) | Satır Yüksekliği (Line Height) | Kalınlık (Weight) | Harf Aralığı (Tracking) |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | 36px / 2.25rem | 44px | 800 (Bold) | -0.02em |
| **H1 (Heading 1)** | 28px / 1.75rem | 34px | 700 (Bold) | -0.01em |
| **H2 (Heading 2)** | 22px / 1.375rem | 28px | 600 (SemiBold) | -0.01em |
| **H3 (Heading 3)** | 18px / 1.125rem | 24px | 600 (SemiBold) | 0 |
| **Body (Gövde)** | 15px / 0.9375rem | 22px | 400 (Regular) | 0 |
| **Body Medium** | 15px / 0.9375rem | 22px | 500 (Medium) | 0 |
| **Body Small** | 13px / 0.8125rem | 18px | 400 (Regular) | 0 |
| **Caption** | 11px / 0.6875rem | 15px | 500 (Medium) | +0.02em |
| **Label / Button** | 14px / 0.875rem | 20px | 600 (SemiBold) | +0.01em |

---

## 4. Boyutlandırma ve Boşluk Sistemi (Spacing System)

8-noktalı grid kuralı temel alınarak oluşturulan ölçek:

```
space.1  : 4px   (Mikro boşluk, rozet içi yatay boşluk)
space.2  : 8px   (İkon-metin arası, çip padding)
space.3  : 12px  (Kompakt eleman aralıkları)
space.4  : 16px  (Standart bileşen içi padding, kart aralıkları)
space.5  : 20px  (Ekran kenar marjini - mobile default)
space.6  : 24px  (Geniş bölüm aralıkları)
space.8  : 32px  (Başlık altı boşluklar)
space.10 : 40px  (Ana blok aralıkları)
space.12 : 48px  (Ekranlar arası geçiş marjini)
space.16 : 64px  (Hero bölümü dikey boşlukları)
```

---

## 5. Köşe Yuvarlatma ve Derinlik (Radius & Elevation)

### 5.1. Köşe Yuvarlatma (Border Radius)
- `radius.sm`: **8px** — Küçük etiketler, buton hapları içi.
- `radius.md`: **12px** — Giriş alanları (TextField), filtre çipleri.
- `radius.lg`: **16px** — Ürün kartları, alt sepet dökümü.
- `radius.xl`: **24px** — Büyük modal pencereleri, öne çıkan afişler (Hero Cards).
- `radius.2xl`: **32px** — Alt çekmece (Bottom Sheet) üst köşeleri.
- `radius.full`: **999px** — Yuvarlak hap butonlar, profil avatarları.

### 5.2. Gölgelendirme (Elevation & Shadows)
- `shadow.soft`: `0px 2px 8px rgba(43, 35, 30, 0.05)` — Düşük yükseltili ürün kartları.
- `shadow.card`: `0px 4px 16px rgba(43, 35, 30, 0.08)` — Standart tıklanabilir kartlar.
- `shadow.modal`: `0px 12px 36px rgba(43, 35, 30, 0.16)` — Modallar ve alt sekmeler.

---

## 6. Temel Bileşen Kuralları (Component Visual Rules)

### 6.1. Butonlar (Buttons)
- **Primary:** `background: #68734B`, `color: #FFFDF8`, `radius: 999px`, yükseklik `48px`. Basılınca hafif koyulaşma (`#57623E`).
- **Secondary:** `background: #F4F0E6`, `color: #34422D`, `border: 1px solid #AEB997`.
- **Ghost / Text:** Arka plansız, `color: #68734B`, aktif alt çizgi yok, net tıklama alanı (min 44px).

### 6.2. Ürün Kartları (Product Cards)
- Zemin rengi: `#FFFDF8` (Warm White).
- Kenarlık: `1px solid #E3DEC3` veya yumuşak gölge.
- Zengin görsel alanı: 1:1 veya 4:3 en-boy oranı, yumuşatılmış köşeler.
- İçerik hiyerarşisi: Üstte wellness etiket hapı (`Vegan`, `Düşük Kafein`), ortada ürün adı ve kısa lezzet özeti, altta net fiyat ve hızlı ekle butonu.

### 6.3. AI Barista Sohbet Arayüzü (AI Conversation Cards)
- Asistan baloncuğu: Açık zeytin/adaçayı tonu (`#EFECE1`), sol üstte zarif yeşil yaprak ikonu.
- Kullanıcı baloncuğu: `#68734B` zeytin yeşili zemin, beyaz metin.
- Öneri Kartı: `#FFFDF8` üzerinde altın/latte vurgulu eşleşme skoru rozeti (`%94 Uyumlu`), barista açıklama kutusu ve "Sepete Ekle" CTA'sı.

---

## 7. Cihaz ve Ekran Hedefleri (Responsive Breakpoints)

- **Mobile First (Customer App):** `375px — 430px` genişlik. Tek elle kullanıma uygun alt sekme ve dokunma hedefleri.
- **Tablet First (Store Operations KDS):** `768px — 1180px` genişlik. Yüksek kontrastlı 4 sütunlu Kanban görünümü, minimum 56px buton dokunma alanı.
- **Desktop First (Admin Panel):** `1280px — 1600px+` genişlik. Sol kalıcı sidebar, çoklu sekme formları, veri tabloları.
