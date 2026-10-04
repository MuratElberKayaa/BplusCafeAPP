# B+ Wellness Café — Web Visual Direction & Creative Platform

**Workstream:** Website Workstream — Web Phase 2  
**Doküman Sürümü:** 1.0.0 (High-Fidelity Visual Direction)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — CREATIVE & VISUAL DIRECTION  
**Roller:** Senior Digital Art Director, Senior UI Designer, Senior Brand Designer  

---

## 1. Yaratıcı Platform ve Marka Ruhu (Creative Platform & Brand Essence)

B+ Wellness Café web deneyimi, "İş gününe iyi bir +." yaratıcı platformu üzerine oturur.

### 1.1. Marka Duygusu (Brand Feeling)
- **Nitelikli & Sakin (Quietly Confident & Calm):** Gürültülü, agresif veya telaşlı bir e-ticaret sitesi değil; içeri adım atıldığında nefes aldıran, ferah bir üçüncü nesil kafe ortamı.
- **Editorial & Çağdaş (Editorial & Contemporary):** Büyük tipografi, asimetrik kompozisyonlar, cömert beyaz alan ve yüksek çözünürlüklü doğal ışık fotoğrafçılığı.
- **Şehirli & Fonksiyonel (Urban & Purposeful):** Metropol temposunda çalışan profesyonelin zamanına saygılı, taranabilir ve pratik bilgi hiyerarşisi.
- **Üçüncü Nesil Kahve Kültürü (Third-Wave Coffee Sensibility):** Mineiro Coffee kökenli artisanal çekirdek kalitesi ile adaptojenik botanik bileşenlerin dengeli sentezi.

### 1.2. Ne Olduğu ve Ne OLMADIĞI (Visual Anti-Patterns)
| B+ Web Sitesi Budur: | B+ Web Sitesi KESİNLİKLE Bu Değildir: |
| :--- | :--- |
| Çağdaş, seçkin ve sıcak bir kafe markası vitrini | Koyu/neon renkli genel bir SaaS teknoloji platformu |
| Doğal malzemeler (traverten, keten, seramik) | Kaslı modellerin olduğu agresif spor supplement sitesi |
| Botanik çizgiler ve yumuşak asidite vurgusu | Soğuk, steril medikal klinik veya eczane web sitesi |
| İnsani bir kahve ve yaşam tarzı danışmanı | Robot kafa, fütüristik yapay zeka klişesi |
| Doğal gün ışığında çekilmiş artisanal ürünler | Stüdyoda flaşla parlatılmış kitlesel fast-food görselleri |

---

## 2. Renk Sistemi ve Yüzey Rolleri (Color Roles & Surface Hierarchy)

Mevcut B+ tasarım sistemi paleti aynen korunur; yeşil rengin aşırı kullanımından kaçınılarak **Cream** ve **Warm White** tonlarına geniş nefes alma alanı tanınır:

```
[ Cream #F4F0E6 ] ---------> Ana Sayfa Tuvali (60% Yüzey)
[ Warm White #FFFDF8 ] ----> Yükseltilmiş Kartlar & Modallar (30% Yüzey)
[ Deep Olive #34422D ] ----> Tipografi, Hero Aksanları & Primary CTA (10% Vurgu)
```

### 2.1. Renk Token Haritası
- `color.surface.cream` (`#F4F0E6`): Sayfanın temel arka plan tuvali. Gözü dinlendiren sıcak kireçtaşı ve kalsit tonu.
- `color.surface.warmWhite` (`#FFFDF8`): Ürün kartları, modal pencereleri, bülten kutuları ve yükseltilmiş yüzeyler.
- `color.primary.deepOlive` (`#34422D`): Display ve H1/H2 başlıkları, birincil eylem butonları (Primary CTA), navigasyon vurgusu ve Footer zemini.
- `color.primary.olive` (`#68734B`): Buton hover durumları, seçili filtre çipleri ve ikincil interaktif aksanlar.
- `color.primary.sage` (`#AEB997`): Yumuşak botanik göstergeler, ince rozet zeminleri ve pasif ayırıcılar.
- `color.accent.latte` (`#D8B98C`): AI Barista kart vurguları, özel reçete rozetleri ve editorial altın oran detayları.
- `color.neutral.espresso` (`#2B231E`): Birincil gövde metinleri (Body Text) ve yüksek kontrastlı okuma metinleri.
- `color.neutral.mutedText` (`#6B675F`): İkincil ürün açıklamaları, meta etiketler ve duyusal puan göstergeleri.
- `color.neutral.border` (`#E3DEC3`): Kart sınırları ve minimalist bölücü çizgiler (1px).

---

## 3. Tipografi Sistemi (Typography Direction)

Modern, geometrik-hümanist karakterli **Manrope** (ikincil alternatif: **Plus Jakarta Sans**) yazı tipi ailesi temel alınır. Büyük font boyutları ve cömert satır yükseklikleri (line-height) ile editorial dergi hissi sağlanır.

| Kademe | Desktop Boyut / Satır | Mobile Boyut / Satır | Ağırlık (Weight) | Harf Aralığı | Rol & Kullanım Alanı |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `56px / 68px` | `36px / 44px` | 800 (ExtraBold) | `-0.025em` | Hero ana manşeti: "İş gününe iyi bir +." |
| **H1** | `44px / 54px` | `30px / 38px` | 700 (Bold) | `-0.02em` | Ana bölüm başlıkları (Moments, Concept, Menü) |
| **H2** | `32px / 42px` | `24px / 32px` | 600 (SemiBold) | `-0.015em` | Kart ve modal ana başlıkları |
| **H3** | `22px / 30px` | `18px / 26px` | 600 (SemiBold) | `-0.01em` | Ürün adları, an başlıkları (08:00 İşe Gidiş) |
| **Body Large** | `18px / 28px` | `16px / 24px` | 400 (Regular) | `0` | Hero alt metni ve editorial manifesto girişleri |
| **Body Regular**| `16px / 26px` | `15px / 22px` | 400 (Regular) | `0` | Ürün tanımları, içerik listeleri, duyusal açıklamalar |
| **Body Small** | `14px / 22px` | `13px / 20px` | 500 (Medium) | `+0.01em` | Alerjen uyarıları, etiketler, saat/tarih meta verisi |
| **Caption / Meta**| `12px / 18px` | `11px / 16px` | 600 (SemiBold) | `+0.02em` | Yasal feragatnameler, demo bildirim rozetleri |

---

## 4. Görsel Sanat Yönetimi ve Doku (Imagery & Texture)

### 4.1. Ürün Fotoğrafçılığı
- **Işık:** Yumuşak sabah ve öğleden sonra doğal yan ışığı (directional soft natural light). Sert stüdyo flaşı veya sentetik parlamalar kullanılmaz.
- **Zemin & Dokular:** Traverten taş, sıcak kireç sıva (warm plaster), ham keten kumaş (raw linen), doğal kağıt lifleri ve mat seramik tabaklar.
- **Derinlik & Kompozisyon:** Sığ alan derinliği (soft depth of field / bokeh); ön planda kristalize soğuk cam bardak, arka planda hafif tül gölgeleri veya zeytin dalı siluetleri.
- **İçerik Şeffaflığı:** Ürünlerin yanında ham bileşenler estetik biçimde yer alabilir (taze zencefil kökü, tane kahve çekirdekleri, yeşil matcha tozu, vanilya çubuğu).

### 4.2. Yaşam Tarzı ve İnsan Varlığı (Lifestyle & Presence)
- Yapay, kameraya gülümseyen stok insan fotoğrafları kesinlikle yasaktır.
- Yalnızca **organik ve kesit anlar (candid / crop lifestyle)** kullanılır:
  - Dizüstü bilgisayarın veya defterin yanında buharı tüten seramik bir fincan.
  - Ofise yürürken elde taşınan çevre dostu paket bardak.
  - Masada molayı simgeleyen zarif bir el ve matcha latte kompozisyonu.

---

## 5. Botanik Çizim Dili (Botanical Illustration Direction)

- **Tarz:** İnce çizgili minimalist botanik illüstrasyonlar (1px monoline botanical line-art).
- **Renk:** `color.primary.sage` veya `%25` opaklıkta `color.primary.olive`.
- **Öğeler:** Zeytin dalları, kahve ağacı yaprakları, adaçayı filizleri ve ginkgo yaprakları.
- **Yerleşim:** Asla ürünün önüne geçmez; bölüm köşelerinde, ayırıcı arka planlarda veya footer kenarlarında su damgası zarafetinde yer alır.
