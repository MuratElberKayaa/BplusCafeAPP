# B+ Wellness Café — Web Responsive Rules & Breakpoint Specification

**Workstream:** Website Workstream — Web Phase 1  
**Doküman Sürümü:** 1.0.0 (Responsive Specification)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — RESPONSIVE RULES  
**Roller:** Senior Web Experience Designer, Senior Frontend Architect  

---

## 1. Kırılım Noktaları (Breakpoints Scale)

B+ Wellness Café web deneyimi, modern duyarlı tasarım standartlarına ve mobil öncelikli (mobile-first) yaklaşıma göre 3 ana breakpoint üzerinden ölçeklenir:

| Breakpoint Adı | Aralık (Width) | Hedef Cihazlar & Temsili Çözünürlük | Konteyner Genişliği (Max-Width) | Kenar Boşluğu (Gutter) |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile (`sm`)** | `320px – 480px` (Baseline: `375px`) | iPhone, Android akıllı telefonlar | `%100` akışkan | `16px – 20px` |
| **Tablet (`md`)** | `481px – 1024px` (Baseline: `768px`) | iPad, tabletler, küçük dizüstüler | `%100` (Max: `720px`) | `24px – 32px` |
| **Desktop (`lg` / `xl`)**| `1025px+` (Baseline: `1440px`) | MacBook, masaüstü monitörler | `1200px` (Ortalanmış) | `40px – 64px` |

---

## 2. Bölüm Bazında Duyarlı Davranış Matrisi

Aşağıdaki matris, 14 bölüm ve modalın her biri için kırılım noktalarına göre görsel düzen, sütun sayısı ve etkileşim dönüşümlerini tanımlar:

| Section ID & Adı | Mobile (`375px`) | Tablet (`768px`) | Desktop (`1440px`) |
| :--- | :--- | :--- | :--- |
| **1. SEC-NAV** | Monogram logo + Hamburger ikonu. Sağdan açılır tam boy çekmece (drawer). CTA gizlenir veya çekmece içindedir. | Kompakt logo + Yatay temel linkler + Sağda hamburger veya mini buton. | Sabit (Sticky) tam gezinme barı. 5 anchor linki + `Menüyü Keşfet (CTA)` butonu. |
| **2. SEC-HERO** | Tek sütunlu dikey yığın (stacked). Önce başlık, slogan ve CTA butonları, altta kompakt görsel. | 2 sütunlu asimetrik yerleşim (Sol: Metin %60, Sağ: Görsel %40). | 12 sütunlu editorial split kompozisyon (Sol 6 sütun metin ve güven rozetleri, Sağ 6 sütun hero görseli). |
| **3. SEC-MOMENTS** | Dikey yığılmış 3 kart veya parmakla yatay kaydırılabilir karusel (horizontal snap scroll). | 2+1 kart düzeni veya yatay kaydırma. | Yan yana 3 eşit sütunlu ızgara (`3 cols`). Her an için özel mikro rozet. |
| **4. SEC-CONCEPT** | Tek sütun dikey akış. Üstte başlık ve manifesto, altta tek görsel ve 3 madde alt alta. | İki sütun (Sol: Manifesto & Maddeler, Sağ: Görsel). | Asimetrik editorial düzen (Sol: Yüksek çözünürlüklü kavurma görseli, Sağ: 3 değer sütunu). |
| **5. SEC-MENU-NAV** | Parmakla yatay kaydırılabilir hap çipleri (horizontal scroll with edge fade). | İki satırlı sarıcı çip alanı (flex-wrap) veya kaydırılabilir bar. | Ortalanmış tek satır, tüm kategoriler (8 çip) görünür ve hizalı. |
| **6. SEC-MENU-GRID** | **Tek Sütun (`1 col`):** Geniş dokunmatik kartlar. Görsel üstte, metin ve demo fiyat altta. | **İki Sütun (`2 cols`):** Kartlar yan yana 2'li ızgaraya oturur. | **Üç veya Dört Sütun (`3-4 cols`):** Zengin vitrin düzeni. Hover gölge efekti aktif. |
| **7. MOD-PRODUCT** | **Bottom Sheet (Alttan Kayan Çekmece):** Ekranın %85'ini kaplar, aşağı kaydırılarak kapanır. | Ortalanmış modal pencere (`max-width: 540px`). Karartmalı overlay. | Genişletilmiş ortalanmış modal (`max-width: 680px`). İki sütun (Görsel / Duyusal Tablo). |
| **8. SEC-AI-TEASER** | Dikey yığın: Başlık ➔ 3 Mood Çipi ➔ Simüle Öneri Kartı ➔ Mobil CTA. | Genişletilmiş mod seçici ve öneri kartı yan yana yerleşim. | Geniş interaktif panel: Sol tarafta mod butonları, sağ tarafta dinamik AI öneri kartı. |
| **9. SEC-PREORDER-DEMO** | Tek sütun: 3 adım alt alta listelenir; e-posta kutusu tam genişlik butonla sunulur. | 3 adım yan yana kompakt ikonlarla gösterilir; e-posta formu tek satır. | Split düzen: Sol tarafta 3 adımlı süreç görseli, sağ tarafta bülten ve açılış rozeti. |
| **10. MOD-PREORDER** | Alttan açılan tam ekran veya %90 yükseklik bottom sheet. | Ortalanmış modal (`max-width: 500px`). | Ortalanmış kart modalı (`max-width: 560px`), net demo feragatnamesi vurgusu. |
| **11. SEC-DELIVERY-PREVIEW** | Tek kart, hafif tonlu arka plan, kompakt yazı tipi. | Yatay ince banner veya kart. | Genişletilmiş minimalist şerit banner (arka plan Cream, kenarlık Sage). |
| **12. SEC-LOCATION-HOURS** | Dikey yığın: Önce çalışma saatleri ve adres, altta statik harita görseli. | İki sütun: Sol adres & saatler, Sağ statik harita kartı. | Geniş 2 sütunlu vitrin: Sol panel detaylı saatler & cutoff kuralı, Sağ panel interaktif harita kartı. |
| **13. SEC-CONTACT-SOCIAL** | 2x2 küçük görsel ızgarası + alt alta iletişim satırları. | 4 görsel tek sıra yatay şerit + iletişim kutusu. | Sol tarafta 4 fotoğraflı Instagram ızgarası, sağ tarafta iletişim & mesaj formu. |
| **14. SEC-FOOTER** | Dikey yığın: Logo ➔ Linkler alt alta ➔ Demo disclaimer ➔ Telif hakkı. | İki sütunlu alt bilgi düzeni. | Çok sütunlu kurumsal alt bilgi: Marka imzası, Hızlı Gezinme, Yasal Linkler ve Feragatname. |

---

## 3. Tipografi ve Aralıkların Duyarlı Ölçeklenmesi

| Eleman | Mobile (`375px`) | Tablet (`768px`) | Desktop (`1440px`) |
| :--- | :--- | :--- | :--- |
| **Display Başlık (Hero)** | `28px / 36px` | `36px / 44px` | `44px / 54px` (Editorial büyük puntolu) |
| **H1 (Bölüm Başlıkları)** | `22px / 28px` | `26px / 32px` | `32px / 40px` |
| **H2 (Kart Başlıkları)** | `18px / 24px` | `20px / 26px` | `22px / 28px` |
| **Gövde Metni (Body)** | `14px / 20px` | `15px / 22px` | `16px / 24px` |
| **Bölüm Dikey Padding (Y)** | `48px` | `64px` | `96px` |
| **Konteyner Kenar Boşluğu (X)**| `16px` | `32px` | `Genişlik sınırı: 1200px (Ortalanmış)` |

---

## 4. Dokunmatik ve Fare Etkileşimi Ayrımı (Touch vs Pointer)

1. **Dokunmatik Hedef Boyutları (Touch Targets - Mobile & Tablet):**
   - Tüm butonlar, filtre çipleri ve gezinme linkleri minimum **44px × 44px** tıklama alanına sahiptir.
   - Parmakla kaydırma (swipe) öğelerinde yatay ivmeli kaydırma (momentum scrolling) ve görsel sonu kenarlık tamponu (padding-right: 20px) bulunur.

2. **Fare Durumları (Pointer & Hover - Desktop):**
   - Ürün kartlarında hafif yükselme (`transform: translateY(-4px)`) ve derinleşen yumuşak gölge (`shadow.card`).
   - Butonlarda renk geçişi (Deep Olive ➔ Olive, 200ms ease).
   - Menü filtre çiplerinde aktif alt çizgi veya dolgulu zemin vurgusu.
