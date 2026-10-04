# B+ Wellness Café — Web Information Architecture (IA)
**Workstream:** Website Workstream — Web Phase 0  
**Doküman Sürümü:** 1.0.0 (Web Scope Lock)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED & SCOPE LOCKED  

---

## 1. Mimari Seçeneklerin Değerlendirilmesi (Architecture Evaluation)

Müşteri-facing pazarlama web sitesi için iki temel mimari yaklaşım değerlendirilmiştir:

### 1.1. Seçenek A: Mobil Öncelikli Zengin Tek Sayfa Deneyimi (Mobile-First High-Fidelity Single-Page)
- **Yapı:** Tüm ana anlatı (Hero, Anlar, Konsept, Menü, AI Barista, Lokasyon, İletişim) tek bir akıcı sayfada sıralanır.
- **Etkileşim:** Sabit üst gezinme çubuğu yumuşak kaydırma (smooth scroll) ile bölümlere atlar; menü kategorileri sayfa yenilenmeden filtreler; ürün detayları ve demo ön sipariş akışları modal/çekmece (drawer) pencerelerinde açılır.
- **Avantajlar:**
  - Mobil cihazlarda başparmakla kaydırmaya (thumb-scrolling) dayalı sürtünmesiz, kesintisiz hikaye anlatımı.
  - Tek sayfa gezinimi sayfa geçiş maliyetlerini azaltır ve akıcı bir sunum deneyimi sağlar (single-page navigation reduces route transitions and supports a fluid presentation experience). Gerçek performans ölçümleri Web Phase 4 aşamasında test edilecektir.
  - Paydaşlara, yatırımcılara ve işverene sunumu en kolay ve en etkili prototip modelidir.
  - Gereksiz kod karmaşıklığı oluşturmaz, hafif ve odaklıdır.
- **Geleceğe Uyumluluk:** İleride gerçek sipariş akışları veya e-ticaret sayfaları eklendiğinde modüler bileşenler kolayca çok sayfalı rotalara dönüştürülebilir.

### 1.2. Seçenek B: Hafif Çok Sayfalı Deneyim (Light Multi-Page Experience)
- **Yapı:** Ayrık sayfalar: Ana Sayfa (`/`), Tam Menü (`/menu`), Konsept & Hikaye (`/about`), Lokasyon & İletişim (`/locations`).
- **Avantajlar:**
  - Klasik e-ticaret yapısına benzer ayrık URL yapıları (`/menu?cat=coffee`).
  - Geleneksel masaüstü gezinme alışkanlığına uygundur.
- **Dezavantajlar:**
  - Bir pazarlama vitrini ve prototip aşamasında kullanıcıyı sayfalar arasında gezdirerek hikaye bütünlüğünü böler.
  - Mobilde her sayfa geçişi ağ gecikmesi ve yeniden render maliyeti üretir.
  - Bu fazda gereksiz mühendislik (over-engineering) yükü oluşturur.

---

### 1.3. Mimari Karar & Tavsiye (Architectural Recommendation)

> **TAVSİYE EDİLEN VE KİLİTLENEN MİMARİ: SEÇENEK A (Mobil Öncelikli Zengin Tek Sayfa Deneyimi + İnteraktif Modal/Çekmece Katmanı)**

**Gerekçeler:**
1. **Hedef Kitle Uyumu:** Hedef kitlemiz olan yoğun şehirli profesyoneller mobil cihazda Instagram/TikTok benzeri dikey akış ve hızlı tüketim bekler. Tek sayfada baştan sona kurgulanmış bir ritim (Sabah 08:00 ➔ Öğle 12:30 ➔ İkindi 15:00 ➔ Menü ➔ Lokasyon) en yüksek dönüşüm ve algı gücünü sağlar.
2. **Sunum Gücü (Presentation Fidelity):** İşveren ve vaka değerlendiricileri için tek bir bağlantı üzerinden tüm marka deneyimini kesintisiz gösterebilmek en güvenilir yoldur.
3. **Mühendislik Sadeliği:** "Do not over-engineer" kuralına tam uyar. Next.js App Router yapısında tek bir `app/page.tsx` omurgası ve alt bileşen modülleriyle son derece temiz, bakımı kolay ve performanslıdır.

---

## 2. Önerilen Bilgi Mimarisi Hiyerarşisi (Site Hierarchy)

Aşağıdaki şema, sitenin dikey bilgi akışını ve toplam 14 bölüm/modal (13 ana bölüm/modal + Footer) envanterini göstermektedir:

```
[1. SEC-NAV] Global Sticky Navigation (Logo | Anlar | Konsept | Menü | AI | Lokasyon | Demo CTA)
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 2. [SEC-HERO] Hero & Brand Statement ("İş gününe iyi bir +.")          │
└────────────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 3. [SEC-MOMENTS] Workday Moments (08:00 İşe Gidiş • 12:30 Öğle • 15:00)│
└────────────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 4. [SEC-CONCEPT] B+ Philosophy & Third-Wave Wellness Story             │
└────────────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 5. [SEC-MENU-NAV] Interactive Menu Category Switcher (8 Kategori Çipi) │
└────────────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 6. [SEC-MENU-GRID] Categorized Product Cards Grid (Örnek Ürün Kartları)│
│    └── [7. MOD-PRODUCT] Product Detail & Sensory Profile Modal         │
└────────────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 8. [SEC-AI-TEASER] B+ AI Barista Innovation Spotlight (Interactive)   │
└────────────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 9. [SEC-PREORDER-DEMO] Order Ahead Experience Teaser (Pre-Order CTA)   │
│    └── [10. MOD-PREORDER] Pre-Order Simulator & Newsletter Modal       │
└────────────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 11. [SEC-DELIVERY-PREVIEW] Delivery Preview (Gelecekteki Paket Servis) │
└────────────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 12. [SEC-LOCATION-HOURS] Store Location & Hours (ÖRNEK LOKASYON / TBD) │
└────────────────────────────────────────────────────────────────────────┘
    │
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 13. [SEC-CONTACT-SOCIAL] Community, Instagram Feed & Direct Inquiry    │
└────────────────────────────────────────────────────────────────────────┘
    │
    ▼
[14. SEC-FOOTER] Footer (Telif Hakkı • Yasal Metinler • Prototip Bildirimi)
```

---

## 3. Katmanlı Gezinme ve Etkileşim Haritası (Navigation & Interaction Map)

| Gezinme Öğesi | Hedef Bölüm | Masaüstü Davranışı | Mobil Davranışı |
| :--- | :--- | :--- | :--- |
| **Logo (B+)** | `#hero` | Sayfanın en üstüne yumuşak kaydırma | Sayfa başına yumuşak kaydırma |
| **Günün Anları** | `#moments` | Smooth scroll to `SEC-MOMENTS` | Menü çekmecesini kapatır ve kaydırır |
| **Konsept** | `#concept` | Smooth scroll to `SEC-CONCEPT` | Menü çekmecesini kapatır ve kaydırır |
| **Menü** | `#menu` | Smooth scroll to `SEC-MENU` | Menü çekmecesini kapatır ve kaydırır |
| **AI Barista** | `#ai-teaser` | Smooth scroll to `SEC-AI-TEASER` | Menü çekmecesini kapatır ve kaydırır |
| **Lokasyon & Saatler** | `#location` | Smooth scroll to `SEC-LOCATION` | Menü çekmecesini kapatır ve kaydırır |
| **İletişim** | `#contact` | Smooth scroll to `SEC-CONTACT` | Menü çekmecesini kapatır ve kaydırır |
| **Ön Sipariş (Demo) CTA** | `MOD-PREORDER` | Demo Ön Sipariş Modalı açılır | Demo Ön Sipariş Modalı açılır |

---

## 4. Duyarlı Tasarım ve Kırılım Stratejisi (Responsive Breakpoint Strategy)

| Kırılım (Breakpoint) | Genişlik | Düzen Kurgusu (Layout) | Gezinme Biçimi |
| :--- | :--- | :--- | :--- |
| **Mobile (Varsayılan)** | `375px – 639px` | Tek sütun dikey akış, tam genişlikli kartlar, yatay kaydırılabilir (scroll-snap) kategori çipleri | Hamburger menü çekmecesi (Slide-in drawer) |
| **Tablet** | `640px – 1023px` | 2 sütunlu ürün gridi, yan yana kart düzenleri, genişletilmiş anlar sekmesi | Kompakt yatay menü veya çubuk |
| **Desktop** | `1024px – 1440px+`| 3 sütunlu ürün gridi, 2 sütunlu Hero / Konsept / Lokasyon yerleşimleri, zengin tipografi | Tam genişlikli sabit şeffaf/renkli menü çubuğu |
