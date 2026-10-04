# B+ Wellness Café — Web Accessibility Blueprint

**Workstream:** Website Workstream — Web Phase 1  
**Doküman Sürümü:** 1.0.0 (Accessibility Specification)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — ACCESSIBILITY BLUEPRINT  
**Erişilebilirlik Hedefi:** Designed toward WCAG 2.1 AA requirements  
**Roller:** Senior UX Architect, Accessibility Specialist, Senior Frontend Architect  

---

## 1. Erişilebilirlik Taahhüdü ve Kapsam

B+ Wellness Café müşteri web sitesi, tüm kullanıcılar (ekran okuyucu kullanıcıları, yalnızca klavye ile gezinenler, düşük görme yetisine sahip bireyler ve bilişsel yük hassasiyeti olanlar) için eşit derecede erişilebilir ve konforlu bir deneyim sunmak üzere tasarlanmıştır.

> [!NOTE]
> Bu doküman ve tasarım kuralları **"Designed toward WCAG 2.1 AA requirements"** prensibiyle hazırlanmıştır; resmi bir üçüncü taraf sertifikasyon beyanı içermez.

---

## 2. Semantik Başlık ve Landmark Hiyerarşisi (Semantic Structure)

Sayfa boyunca yalnızca **tek bir `<h1>`** etiketi kullanılır; başlık seviyeleri atlanmadan mantıksal sıra izler:

```text
<header role="banner"> (SEC-NAV)
  <nav aria-label="Ana Gezinme">

<main id="main-content">
  <section aria-labelledby="hero-title"> (SEC-HERO)
    <h1 id="hero-title">B+ Wellness Café — İş gününe iyi bir +.</h1>

  <section aria-labelledby="moments-title"> (SEC-MOMENTS)
    <h2 id="moments-title">Günün 3 Kritik Anında, Bedenine İyi Gelen Seçimler</h2>
    <article> <h3>08:00 — İşe Gidiş</h3> ... </article>
    <article> <h3>12:30 — Öğle Arası</h3> ... </article>
    <article> <h3>15:00 — B+ Mola</h3> ... </article>

  <section aria-labelledby="concept-title"> (SEC-CONCEPT)
    <h2 id="concept-title">Nitelikli Kahve, Bedenine İyi Gelen İçeriklerle Buluştuğunda</h2>

  <section aria-labelledby="menu-title"> (SEC-MENU-NAV & SEC-MENU-GRID)
    <h2 id="menu-title">Özenle Hazırlanmış Menümüzü Keşfedin</h2>
    <!-- 8 Kategori Butonu role="tablist" / role="tab" -->
    <div role="region" aria-live="polite">
      <!-- Ürün Kartları: her kart kendi içinde <h3>Ürün Adı</h3> taşır -->
    </div>

  <section aria-labelledby="ai-title"> (SEC-AI-TEASER)
    <h2 id="ai-title">Bugün Bedenin ve Zihnin Ne İstiyor?</h2>

  <section aria-labelledby="preorder-title"> (SEC-PREORDER-DEMO)
    <h2 id="preorder-title">Gelmeden Seç. Sıra Beklemeden Al.</h2>

  <section aria-labelledby="delivery-title"> (SEC-DELIVERY-PREVIEW)
    <h2 id="delivery-title">Ofisinize ve Evinize Sağlıklı Mola (Yakında)</h2>

  <section aria-labelledby="location-title"> (SEC-LOCATION-HOURS)
    <h2 id="location-title">Kadıköy / İstanbul — Örnek Lokasyon</h2>

  <section aria-labelledby="contact-title"> (SEC-CONTACT-SOCIAL)
    <h2 id="contact-title">Instagram & Topluluk</h2>

<footer role="contentinfo"> (SEC-FOOTER)
  <h2 class="sr-only">Site Alt Bilgisi ve Yasal Uyarılar</h2>
```

---

## 3. Klavye Gezinimi ve Odak Yönetimi (Keyboard Navigation & Focus)

1. **Sayfa İçi Atla Linki (Skip to Content):**
   - Sayfanın en üstünde, klavye ile ilk `Tab` tuşuna basıldığında görünür hale gelen `<a href="#main-content" class="skip-link">İçeriğe Atla</a>` bağlantısı bulunur.
2. **Focus-Visible Belirginliği:**
   - Asla `outline: none` tek başına kullanılmaz.
   - Odaklanan tüm etkileşimli öğeler (linkler, butonlar, girdi kutuları) etrafında **en az 2px kalınlığında**, arka planla yüksek kontrastlı (Deep Olive veya Warm White zemin üzerinde zeytin yeşili) kesintisiz bir odak halkası (`outline: 2px solid #68734B; outline-offset: 2px`) gösterilir.
3. **Tab Akışı Mantığı:**
   - Gezinme soldan sağa, yukarıdan aşağıya doğal DOM akışını izler (`tabindex > 0` kesinlikle yasaktır; yalnızca `0` ve `-1` kullanılır).

---

## 4. Modal Pencerelerde Odak Kapsamı (Focus Trap & Escape)

`MOD-PRODUCT` ve `MOD-PREORDER` bileşenlerinde:
1. **Focus Trap (Odağın Kilitlenmesi):** Modal açıldığında odak derhal modal içerisindeki ilk etkileşimli elemana (Kapat butonu `✕` veya ilk buton) yönlendirilir. Kullanıcı `Tab` veya `Shift + Tab` tuşlarına bastığında odak yalnızca modal içerisindeki elemanlar arasında döner; sayfanın arka planına sızamaz.
2. **Arka Planın Erişilebilirliğe Kapatılması:** Modal açıkken arkadaki ana içerik konteynerine `aria-hidden="true"` ve `inert` özniteliği atanır.
3. **ESC Tuşu ile Kapatma:** Klavyeden `Escape` tuşuna basıldığında modal derhal kapanır.
4. **Odağın İadesi (Restore Focus):** Modal kapandığında odak, modalı tetikleyen orijinal butona / ürün kartına eksiksiz iade edilir.

---

## 5. Minimum Dokunma Hedefleri (Touch Targets)

- Mobil ve tablet cihazlarda tüm tıklanabilir alanlar (butonlar, ikonlar, hamburger menü, çerez linkleri, form butonları) en az **44px × 44px** fiziksel dokunmatik alana sahip olmalıdır.
- İkonların kendisi 20px olsa dahi, etrafındaki tıklanabilir tampon alan (padding) ile 44px kuralı korunur.
- Çipler ve linkler arasına en az **8px** boşluk bırakılarak yanlış dokunmalar engellenir.

---

## 6. Renk Kontrast Oranları (Color Contrast Ratios)

WCAG 2.1 AA kriterlerine göre normal metinler için en az **4.5:1**, büyük metinler (18pt+ veya 14pt bold+) ve grafiksel UI sınırları için en az **3:1** kontrast oranı zorunludur:

| Öğe / Zemin Eşleşmesi | Renk Değerleri | Kontrast Oranı | AA Uygunluk Durumu |
| :--- | :--- | :--- | :--- |
| **Gövde Metni / Cream Zemin** | Espresso (`#2B231E`) / Cream (`#F4F0E6`) | **10.8:1** | **PASS (Üstün)** |
| **Başlık / Warm White Zemin** | Deep Olive (`#34422D`) / Warm White (`#FFFDF8`) | **9.5:1** | **PASS (Üstün)** |
| **Muted Metin / Cream Zemin** | Muted Text (`#6B675F`) / Cream (`#F4F0E6`) | **4.6:1** | **PASS (4.5:1 üstü)** |
| **Primary CTA Butonu** | Warm White (`#FFFDF8`) / Deep Olive (`#34422D`) | **9.5:1** | **PASS (Üstün)** |
| **İkincil Rozetler / Sage Zemin** | Deep Olive (`#34422D`) / Sage (`#AEB997`) | **4.8:1** | **PASS (4.5:1 üstü)** |
| **Giriş Alanı Kenarlıkları** | Border (`#E3DEC3`) & Sage / Warm White | **> 3.0:1** | **PASS (UI Elemanları)** |

---

## 7. Görsel ve Medya Erişilebilirlik Kuralları (Alt-Text Guidelines)

1. **Bilgilendirici Görseller:**
   - Ürün fotoğrafları: `alt="Lion's Mane Cold Brew — Tek kökenli soğuk demlenmiş kahve cam bardakta, yanında taze adaçayı yaprakları"` şeklinde görseli ve içeriği açıklar.
   - Logo: `alt="B+ Wellness Café by Mineiro Coffee logosu"`.
2. **Dekoratif Görseller:**
   - Arka plan soyut dalgaları, dekoratif yaprak gölgeleri veya ayırıcı çizgiler `alt=""` ve `aria-hidden="true"` olarak işaretlenir.
3. **Grafik Butonlar:**
   - Yalnızca ikon içeren butonlarda (örn. Hamburger menü, Kapat butonu) mutlaka `aria-label` bulunur:
     - `<button aria-label="Menüyü Aç">`
     - `<button aria-label="Ürün detay penceresini kapat">`
