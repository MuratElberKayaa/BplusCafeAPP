# B+ Wellness Café — Responsive Visual Specification

**Workstream:** Website Workstream — Web Phase 2  
**Doküman Sürümü:** 1.0.0 (High-Fidelity Responsive Visual Guide)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — RESPONSIVE VISUAL SPECIFICATION  
**Roller:** Senior UI Designer, Senior Web Experience Designer, Design System Specialist  

---

## 1. Responsive Tasarım Temelleri ve Ölçekleme

B+ Wellness Café web arayüzü, 3 ana ekran genişliği baz alınarak tasarlanmıştır:
- **Mobile (`375px`):** iPhone/Android dikey kullanım, tek el ergonomisi, dokunmatik öncelik.
- **Tablet (`768px`):** iPad/tablet dikey ve yatay kullanım, esnek 2 sütunlu geçiş düzeni.
- **Desktop (`1440px`):** Retina dizüstü ve masaüstü monitörler, 12 sütunlu editorial grid, maksimum 1200px ortalanmış konteyner.

---

## 2. Ana Bölümlerin Ekran Bazlı Görsel Spesifikasyonu

### 2.1. SEC-NAV (Gezinme Çubuğu)
| Parametre | Mobile (`375px`) | Tablet (`768px`) | Desktop (`1440px`) |
| :--- | :--- | :--- | :--- |
| **Yükseklik** | `64px` | `72px` | `80px` |
| **Düzen** | İki uçlu: Logo sol, Hamburger sağ | Logo sol, mini gezinme orta, mini CTA sağ | Logo sol, 5 anchor linki orta, `Menüyü Keşfet (CTA)` sağ |
| **Mobil Çekmece** | `%80` ekran genişliği (max 320px) | Açılır mini panel veya hamburger | Yok (Tam yatay link barı) |
| **Konteyner PX** | `16px` | `24px` | `1200px max (ortalama)` |

---

### 2.2. SEC-HERO (Açılış Vitrini)
| Parametre | Mobile (`375px`) | Tablet (`768px`) | Desktop (`1440px`) |
| :--- | :--- | :--- | :--- |
| **Düzen** | Dikey yığın (önce metin, sonra görsel) | 2 Sütun asimetrik (%55 metin / %45 görsel) | 12 Sütun split (%45 metin / %55 görsel) |
| **Display Fontu** | `36px / 44px` ExtraBold | `44px / 52px` ExtraBold | `56px / 66px` ExtraBold |
| **Görsel Oranı** | `4:5` dikey kadraj | `1:1` kare kadraj | `16:9` veya `4:3` zengin editorial |
| **Dikey Boşluk (PY)**| `64px` üst, `48px` alt | `96px` üst, `72px` alt | `144px` üst, `120px` alt |
| **CTA Butonları** | Tam genişlik dikey 2 buton (stacked) | Yan yana 2 buton | Yan yana 2 buton (Primary + Secondary) |

---

### 2.3. SEC-MOMENTS (İş Günü Anları)
| Parametre | Mobile (`375px`) | Tablet (`768px`) | Desktop (`1440px`) |
| :--- | :--- | :--- | :--- |
| **Grid / Düzen** | Yatay snap-karusel (1 kart görünür) | 2+1 kart düzeni veya yatay kaydırma | `grid-cols-3` (3 eşit sütun yan yana) |
| **Kart Boyutu** | Genişlik: `300px`, Yükseklik: `auto` | Akışkan 2 sütun | Akışkan 3 sütun (her biri yakl. 360px) |
| **Kart İçi Boşluk** | `20px` | `24px` | `32px` |
| **Dikey Boşluk (PY)**| `64px` | `80px` | `112px` |

---

### 2.4. SEC-CONCEPT (Hikaye & Felsefe)
| Parametre | Mobile (`375px`) | Tablet (`768px`) | Desktop (`1440px`) |
| :--- | :--- | :--- | :--- |
| **Düzen** | Dikey sıra: Başlık ➔ Görsel ➔ 3 Madde | 2 Sütun (Sol: Metin, Sağ: Görsel) | 2 Sütun editorial (Sol: 450x560 Görsel, Sağ: Manifesto) |
| **Görsel Oranı** | `16:9` kompakt | `4:5` dikey | `3:4` yüksek çözünürlüklü artisanal |
| **H1 Fontu** | `28px / 36px` | `36px / 44px` | `44px / 54px` |
| **Dikey Boşluk (PY)**| `64px` | `88px` | `120px` |

---

### 2.5. SEC-MENU-NAV & SEC-MENU-GRID (Menü Vitrini)
| Parametre | Mobile (`375px`) | Tablet (`768px`) | Desktop (`1440px`) |
| :--- | :--- | :--- | :--- |
| **Kategori Çipleri** | Yatay kaydırılabilir taşan bar (`overflow-x`) | 2 satırlı sarıcı çip alanı (wrap) | Ortalanmış tek satır 8 çip barı |
| **Ürün Izgarası** | **1 Sütun (`grid-cols-1`)** | **2 Sütun (`grid-cols-2`)** | **3 Sütun (`grid-cols-3`)** |
| **Kart Görsel Oranı**| `1:1` kare | `4:3` yatay | `4:3` yatay |
| **Kart Boşluğu** | `16px` | `24px` | `32px` |
| **Dikey Boşluk (PY)**| `72px` | `96px` | `128px` |

---

### 2.6. MOD-PRODUCT (Ürün Detay Penceresi)
| Parametre | Mobile (`375px`) | Tablet (`768px`) | Desktop (`1440px`) |
| :--- | :--- | :--- | :--- |
| **Pencere Tipi** | **Bottom Sheet (Alttan Kayan)** | Merkez Modal | **Merkez Modal (2 Sütun Split)** |
| **Boyut / Sınır** | Genişlik: `%100`, Yükseklik: `85vh` | Max-Width: `580px` | Max-Width: `720px`, Max-Height: `85vh` |
| **Görsel Yerleşimi** | En üstte tam genişlik görsel | Üstte kare görsel | Sol sütunda dikey görsel (%45 alan) |
| **Köşe Yarıçapı** | Üst köşeler: `24px` | Tüm köşeler: `24px` | Tüm köşeler: `24px` |

---

### 2.7. SEC-AI-TEASER (AI Barista İnovasyon Vitrini)
| Parametre | Mobile (`375px`) | Tablet (`768px`) | Desktop (`1440px`) |
| :--- | :--- | :--- | :--- |
| **Düzen** | Dikey yığın: Çipler üstte, öneri altta | Genişletilmiş yatay panel | 1200px Yükseltilmiş Ada Kartı (İki sütun) |
| **Niyet Çipleri** | 2x2 Grid çip butonları | Tek sıra yatay 4 çip | Sol panelde 4 dikey niyet butonu |
| **Öneri Kartı** | Tam genişlik dikey kart | Sağ panelde dinamik kart | Sağ panelde zengin botanik kart |

---

### 2.8. SEC-LOCATION-HOURS (Şube & Saatler)
| Parametre | Mobile (`375px`) | Tablet (`768px`) | Desktop (`1440px`) |
| :--- | :--- | :--- | :--- |
| **Düzen** | Dikey yığın: Saat tablosu üstte, harita altta | 2 Sütun eşit genişlik | 2 Sütun (Sol: Saatler & Cutoff, Sağ: Harita Kartı) |
| **Harita Görseli** | `16:9` statik kroki kartı | `4:3` kroki kartı | `4:3` stilize Kadıköy Moda vektörel kroki |
| **Saat Tablosu** | Kompakt liste görünümü | 2 satırlı tablo | Geniş ferah tipografik tablo |
