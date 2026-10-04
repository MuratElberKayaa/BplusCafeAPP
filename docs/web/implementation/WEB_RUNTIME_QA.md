# B+ Wellness Café — Web Runtime QA & Verification Report

**Workstream:** Website Workstream — Web Phase 3  
**Doküman Sürümü:** 1.0.0 (Runtime QA & User Flow Verification)  
**Tarih:** 2026-10-04  
**Statü:** PASS — ALL CHECKS VERIFIED  
**Roller:** Senior Frontend Engineer, Accessibility-Focused Web Developer, QA Specialist  

---

## 1. Test Ortamı ve Çalışma Koşulları

- **Sunucu:** Next.js 14 Production Server (`next start -p 3000`)
- **Protokol & Port:** HTTP `localhost:3000`
- **Tarayıcı Motoru:** Chromium / Safari WebKit Standartları
- **Sonuç:** HTTP 200 OK yanıtı, statik prerender doğrulaması (`4/4 static pages generated`).

---

## 2. Kullanıcı Akışları Doğrulama Matrisi (User Flows QA)

| Akış Kodu | Akış Adı | Test Edilen Adımlar | Beklenen Sonuç | Gerçekleşen Sonuç | Statü |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **WEB-A** | **Marka ve Felsefe Keşfi** | `Hero` ➔ `Konsepti Gör` tıklaması ➔ `#concept` kayması ➔ 3 Değer Sütunu incelemesi ➔ `Menüyü Keşfet` | Sayfa pürüzsüzce kayar, Mineiro hikayesi okunur, menü alanına odaklanır. | Akıcı geçiş, doğru anchor hedefi. | **PASS** |
| **WEB-B** | **Menü & Ürün Keşfi** | `SEC-MENU-NAV` çip tıklaması (örn. `Matcha & Glow`) ➔ Ürün kartı seçimi ➔ `MOD-PRODUCT` açılışı ➔ ESC veya Kapat | Ürün listesi anlık filtrelenir, modal duyusal puanlarla açılır, arka plan kilitlenir, ESC ile kapanır. | Filtreleme gecikmesiz, modal focus trap ve ESC çalışıyor. | **PASS** |
| **WEB-C** | **AI Barista Deneyimi** | `SEC-AI-TEASER` mod çipi seçimi (`Sakin Bir An`) ➔ Eşleşen kart incelemesi ➔ `AI Barista'yı Keşfet` | Seçili niyet vurgulanır, Matcha Zen Latte (%96 Uyum [DEMO SCORE]) görünür, toast bildirimi çıkar. | Yerel simülasyon kusursuz, dış API çağrısı yapılmıyor. | **PASS** |
| **WEB-D** | **Pre-Order Simülatörü** | Navigasyon veya Hero'dan `Ön Sipariş` ➔ Adım 1 Ürün ➔ Adım 2 Zaman ➔ Adım 3 Özet & Bildirim | 3 adımlı akış ilerler, kırmızı/amber [PROTOTİP TAMAMLANDI] kutusu çıkar, kart bilgisi istemez. | Kredi kartı alanı yok, demo bildirimi belirgin. | **PASS** |
| **WEB-E** | **Mağaza & Rota Keşfi** | `Lokasyon` linki ➔ `#location` ➔ Saatler ve cutoff kuralı ➔ `Örnek Rotayı Gör` tıklaması | Kadıköy Moda Örnek Şube, Hafta içi 07:30–22:00, 15 dk cutoff okunur; yerel rota bildirimi döner. | Örnek lokasyon etiketleri görünür, harita stilize kroki. | **PASS** |

---

## 3. Etkileşim ve Bileşen Doğrulama Matrisi (Interaction QA)

| Etkileşim Öğesi | Test Edilen Davranış | Sonuç |
| :--- | :--- | :--- |
| **Sticky Navbar** | Sayfa aşağı kaydırıldığında zemin Warm White olur ve `backdrop-blur-md` aktifleşir. | **PASS** |
| **Mobil Çekmece (Drawer)** | Hamburger ikonuna tıklandığında sağdan çekmece kayarak açılır; link seçildiğinde otomatik kapanır. | **PASS** |
| **Anchor Linkleri** | Tüm bağlantılar (`#concept`, `#menu`, `#ai-barista`, `#location`, `#contact`) doğru bölümlere kayar. | **PASS** |
| **Menü Kategori Çipleri** | 8 Kategori çipinin tamamı tıklandığında seçili duruma geçer ve ürün gridini filtreler. | **PASS** |
| **Ürün Kartı Erişilebilirliği**| Klavyeden `Tab` ile odaklanıp `Enter` veya `Space` tuşuna basıldığında modal açılır. | **PASS** |
| **Modal Odak Yönetimi** | Modal açıkken klavye odağı modal içinde kalır (`focus trap`), `Escape` tuşuna basıldığında modal kapanır. | **PASS** |
| **Pre-Order Adım Geçişleri**| Adım 1'den Adım 2 ve Adım 3'e geçişler hatasızdır; geri dön butonu önceki adımı açar. | **PASS** |
| **Form Simülasyonları** | Bülten ve İletişim formları sunucuya istek atmadan yerel teşekkür/demo uyarısı verir. | **PASS** |
| **Başa Dön Butonu** | Footer içindeki `^ Başa Dön` butonu tıklandığında sayfa başına pürüzsüz kaydırır. | **PASS** |

---

## 4. Ekran Boyutları ve Duyarlı Tasarım Doğrulaması (Responsive Targets)

- **320px (En Küçük Mobil):** Yatay taşma (horizontal scrollbar) yok, metinler kırılmadan okunuyor.
- **375px (Mobil Baseline):** Tek sütun düzen, dokunmatik çip kaydırma, tam ekran alt çekmece.
- **768px (Tablet Baseline):** 2 Sütunlu ürün ızgarası, genişletilmiş padding.
- **1024px (Küçük Masaüstü):** Tam gezinme çubuğu görünür, hamburger gizlenir.
- **1280px / 1440px (Geniş Masaüstü):** 3 Sütunlu vitrin, 1200px ortalanmış konteyner, asimetrik split hero.

---

## 5. Erişilebilirlik ve Semantik Doğrulama (Accessibility QA)

- **Heading Hiyerarşisi:** Sayfa boyunca tek bir `<h1>` (`#hero-title`), mantıksal `<h2>` ve `<h3>` alt başlıkları.
- **Landmark Etiketleri:** `<header role="banner">`, `<nav aria-label="Ana Gezinme">`, `<main id="main-content">`, `<footer role="contentinfo">`.
- **Skip Link:** Klavyeyle ilk Tab basıldığında sol üstte `#main-content` atlama linki belirir.
- **Odak Halkası:** `focus-visible` durumunda 2px zeytin yeşili (`#68734B`) halka görünür.
- **Dokunma Hedefleri:** Tüm tıklanabilir butonlar ve çipler minimum **44px × 44px**.
