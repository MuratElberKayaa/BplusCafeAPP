# B+ Wellness Café by Mineiro Coffee
# SOCIAL LAYOUT & CANVAS SYSTEM
**Workstream:** Social Media | **Phase:** Social Phase 2 (High-Fidelity Visual System)  
**Authors:** Senior Art Director & Digital Design System Specialist  
**Status:** COMPLETE LAYOUT SPECIFICATION  

---

## 1. Üretim Kanvas Standartları (Master Canvases)

Tüm kreatif sosyal medya üretimi iki temel endüstri standardı kanvas üzerinde gerçekleştirilir:

```
┌─────────────────────────────────┐   ┌─────────────────────────────────┐
│     POST PORTRAIT (4:5)         │   │      STORY / REELS (9:16)       │
│                                 │   │                                 │
│         1080 × 1350 px          │   │         1080 × 1920 px          │
│                                 │   │                                 │
│  - Instagram Feed için en yüksek│   │  - Dikey tam ekran deneyim      │
│    ekran alanını kaplayan oran  │   │  - Instagram Hikâye ve Reels    │
│  - Profil ızgarasında 1:1 kare  │   │  - UI örtüşmelerine duyarlı     │
│    merkezi güvenli alan içerir  │   │    üst ve alt güvenlik marjları │
└─────────────────────────────────┘   └─────────────────────────────────┘
```

---

## 2. 1080 × 1350 px (4:5 Post Portrait) Düzen Mimarisi

### A) Marjlar ve Izgara (Grid & Margins)
* **Kanvas Boyutu:** `1080 px × 1350 px`
* **Dış Güvenlik Marjı (Outer Margin):** Her kenardan `72 px` (Minimum net mesafe).
* **Izgara Modeli:** 12 sütunlu modüler ızgara (Gutter: `24 px`).
* **İç Güvenli Alan (Text-Safe Zone):** `936 px × 1206 px` (Sol: `72px`, Sağ: `1008px`, Üst: `72px`, Alt: `1278px`).

### B) 1:1 Kare Kırpma Güvenlik Alanı (1:1 Center Feed Crop)
* Kullanıcı profil ızgarasını (profil sayfasındaki 3'lü kare ızgara) gezerken, 4:5 dikey görselin tam ortasındaki `1080 × 1080 px` kare alan görüntülenir.
* **Üst Kesinti Alanı:** `0 px – 135 px` (Profilde kırpılır).
* **Alt Kesinti Alanı:** `1215 px – 1350 px` (Profilde kırpılır).
* **Kural:** Ana manşetler, ürünün odak noktası ve zaman etiketleri mutlaka `135 px – 1215 px` arasındaki merkezi alanda yer almalıdır.

### C) Katman & Bölge Dağılımı (Zoning Spec)
1. **Üst Marka Bölgesi (Y: 80 – 160 px):**  
   * B+ amblemi veya kampanya zaman etiketi (`08:00 GÜNE BİR +`).  
   * Yükseklik: `80 px`.
2. **Görsel Odak Alanı (Y: 180 – 820 px):**  
   * Ürün fotoğrafı, atmosfer çekimi veya mimari detay.  
   * Yükseklik: `640 px`.
3. **Tipografik Ada / Mesaj Alanı (Y: 840 – 1180 px):**  
   * Primary Headline (H1), ikincil metin ve mikro etiket.  
   * Yükseklik: `340 px`.
4. **Alt Bilgi & Demo Etiket Bölgesi (Y: 1200 – 1278 px):**  
   * `DEMO PRODUCT` veya `PROTOTYPE` rozeti.  
   * Yükseklik: `78 px`.

---

## 3. 1080 × 1920 px (9:16 Story & Reels) Düzen Mimarisi

### A) Instagram Arayüz Çakışma Güvenlik Alanları (UI Safe Zones)
* **Üst UI Güvenlik Alanı (Top Bar Zone):** `0 – 240 px`  
  * Profil resmi, hesap ismi, hikaye ilerleme çubuğu ve kapatma 'X' ikonu yer alır.  
  * *Kural:* Hiçbir kritik başlık veya logo buraya taşamaz.
* **Alt UI Güvenlik Alanı (Bottom Engagement Zone):** `1640 – 1920 px` (Alt `280 px`)  
  * "Mesaj Gönder" kutusu, paylaşım ikonu, Reels müzik ve başlık alanı yer alır.  
  * *Kural:* Buraya buton, çıkartma veya okunması zorunlu metin konulmaz.
* **Aktif İçerik Alanı (Safe Action Zone):**  
  * `Y: 240 px – 1640 px` (Toplam yükseklik: `1400 px`).  
  * Genişlik: `936 px` (Sol ve sağdan `72 px` marj).

### B) Story İnteraktif Çıkartma Alanı (Sticker Placement Zone)
* Instagram Poll (Anket) veya Question Box (Soru Kutusu) tam olarak `Y: 960 – 1320 px` arasına ortalanır.
* Görsel odak `Y: 340 – 880 px` arasına konumlandırılarak çıkartmayla görselin çakışması engellenir.

---

## 4. Logo ve Marka Kilidi Konumlandırma Kuralları (Logo Placement)

* **Tercih Edilen Konum (Primary):** Üst sol (`X: 72 px, Y: 84 px`) veya üst merkez (`X: Ortalanmış, Y: 84 px`).
* **Minimum Güvenlik Alanı (Clear Space):** Logomuzun çevresinde "B" harfinin yüksekliği kadar (`x-height`) boşluk korunmalıdır; metin veya grafik öğeler bu sınıra yaklaşamaz.
* **Minimum Kullanım Boyutu:**  
  * Dijital ekranda dairesel amblem çapı minimum `56 px` (1080px genişlikte `84 px` idealdir).
* **Zemin Uyumları:**  
  * Koyu Zemin (`#34422D` / `#2B231E`): Beyaz veya krem (`#FFFDF8` / `#F4F0E6`) logo amblemi.  
  * Açık Zemin (`#F4F0E6` / `#FFFDF8`): Koyu zeytin (`#34422D`) logo amblemi.

---

## 5. Çerçeve ve Kart Sistemi (Island Card Structure)

Post 01, Post 03 ve Post 06'da kullanılan editoryal ada kartları şu standart parametrelerle üretilir:
* **Kart Köşe Yuvarlama (Corner Radius):** `24 px` (Web sistemindeki `rounded-3xl` ile eşdeğer).
* **Kart Bordürü:** `1.5 px` veya `2 px` düz çizgi (`#E3DEC3` veya `#D8B98C`).
* **Gölge (Shadow):** Web standardı yumuşak gölge (`0px 8px 24px rgba(43, 35, 30, 0.08)`).
