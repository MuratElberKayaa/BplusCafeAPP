# B+ Wellness Café — Web Application (@bplus/web)

B+ Wellness Café by Mineiro Coffee dijital vitrin ve prototip web uygulaması.

---

## 1. Proje Amacı ve Kapsamı
Bu uygulama, **B+ Wellness Café** konsepti için geliştirilmiş; nitelikli tek kökenli kahveler, adaptojenik içecekler ve fonksiyonel beslenme felsefesini modern, erişilebilir ve yüksek performanslı bir kullanıcı deneyimi ile sergileyen ön yüz (frontend-only) prototipidir.

> **Zorunlu Prototip Bildirimi:**  
> Bu proje bir vaka analizi ve konsept sunumudur. Gerçek ödeme alma, kullanıcı yetkilendirme, canlı sipariş iletimi veya dış servis entegrasyonu (gerçek AI/harita API'leri) içermez.

---

## 2. Teknoloji Yığını ve Sürümler
- **Framework:** Next.js `15.5.27` (Maintenance LTS — App Router)
- **UI Kütüphanesi:** React `19.3.0` & React DOM `19.3.0`
- **Dil:** TypeScript `5.6.3`
- **Stil & Tasarım Sistemi:** Tailwind CSS `3.4.14` + PostCSS `8.5.28` (Override ile sıfır üretim zafiyeti)
- **İkon Seti:** Lucide React `^0.475.0`
- **Görsel Varlıklar:** Yerel WebP formatında optimize edilmiş editoryal demo fotoğrafları

---

## 3. Önkoşullar
- **Node.js:** `>= 20.18.0` (Önerilen: Node.js 22 LTS)
- **npm:** `>= 10.0.0`

---

## 4. Kurulum ve Çalıştırma

### Bağımlılıkları Yükleme
```bash
cd apps/web
npm install
```

### Yerel Geliştirme Ortamı
```bash
npm run dev
```
Uygulama varsayılan olarak `http://localhost:3000` adresinde başlar.

### Kalite Kontrolleri
```bash
# TypeScript tip kontrolü
npm run typecheck

# ESLint statik kod analizi
npm run lint
```

### Üretim Derlemesi ve Başlatma
```bash
# Optimize production build üretme
npm run build

# Üretim sunucusunu başlatma
npm run start
```

---

## 5. Vitrin Özellikleri (Interactive Demos)
1. **Hero & Günün Reçetesi (WEB-A):**
   - *"İş gününe iyi bir +"* sloganı, güven rozetleri ve öne çıkan artisanal Lion's Mane Cold Brew reçete kartı.
2. **Günün Anları Filtresi (Moments):**
   - 08:00 (Güne Başlangıç), 12:30 (Öğle Molası), 15:00 (Öğleden Sonra Canlanması), 17:30 (Akşamüstü Denge) saatlik öneri filtreleri.
3. **8 Kategorili Menü ve Ürün Modalı (WEB-B):**
   - Tek kökenli kahveler, matcha, adaptojenik içecekler, fonksiyonel çaylar, smoothie, taze sıkım, hafif tabaklar ve sağlıklı atıştırmalıklar.
   - Detaylı besin etiketleri, içerik listesi ve alerjen uyarıları içeren erişilebilir `ProductModal`.
4. **AI Barista Öneri Simülatörü (WEB-C):**
   - Enerji, odaklanma, antrenman sonrası ve hafifleme modlarına göre akıllı mock içecek eşleştirme kartı.
5. **3 Adımlı Ön Sipariş Simülatörü (WEB-D):**
   - Özelleştirme -> Teslim Alma Saati -> Sipariş Özeti adımlarını canlandıran interaktif mock sipariş akışı.
6. **Şube, Çalışma Saatleri ve Kroki Harita (WEB-E):**
   - Hafta içi / hafta sonu çalışma saatleri ve stilize vektör harita mockup'ı.
7. **İletişim ve Topluluk:**
   - Mock bülten kaydı ve iletişim formu (ağ dışına veri göndermez).

---

## 6. Prototip Sınırları ve Ayrımı (Demo Boundaries)
| Özellik | Statü | Açıklama |
| :--- | :--- | :--- |
| **Menü & Fiyatlar** | **DEMO DATA** | Fiyatlar ve porsiyon bilgileri prototip sunumu niteliğindedir. |
| **AI Barista** | **PROTOTYPE** | Kural tabanlı ön yüz mock simülatörüdür; dış LLM API'sine bağlanmaz. |
| **Ön Sipariş** | **DEMO SIMULATOR** | Sipariş state'i yalnızca yerel bellek üzerindedir; arka ofise iletilmez. |
| **Ödeme** | **NOT PRESENT** | Hiçbir ödeme formu, kredi kartı alanı veya POS entegrasyonu bulunmaz. |
| **Şube Adresi** | **EXAMPLE / TBD** | Gerçek işveren sözleşmeli adresi teslim edilene kadar Moda şubesi örnek olarak tutulur. |
| **İletişim Formu** | **DEMO FORM** | Form gönderimleri yalnızca React local state (`useState`) ile görsel geri bildirim üretir. |

---

## 7. Erişilebilirlik (A11y) Notları
- **Lighthouse Erişilebilirlik Skoru:** **96 / 100**
- **Klavye Desteği:** Sayfa başında gizli `Ana İçeriğe Atla` skip-link'i, `Tab` / `Shift+Tab` ile tüm butonlara erişim.
- **Odak Yönetimi:** Modallar (`role="dialog"`, `aria-modal="true"`) açıldığında odak içeriye kilitlenir; `Escape` tuşu ile kapanır ve tetikleyici butona odak iade edilir.
- **Kontrast:** WCAG 2.1 AA uyumlu 4.5:1+ kontrast oranları.
- **Hedef Boyutları:** Mobilde 44x44px dokunma toleransı.

---

## 8. Görsel Varlıklar ve Provenans (Image Provenance)
- Sitede yer alan tüm fotoğraflar `apps/web/public/images/demo/*.webp` altında yerel olarak barındırılmaktadır.
- Unsplash açık lisansı kapsamında derlenmiş editoryal demo fotoğraflarıdır.
- Çalışma zamanında hiçbir dış CDN (`images.unsplash.com`) isteği atılmaz.
- Gerçek şube ve stüdyo çekimleri işveren tarafından teslim edildiğinde (**EMPLOYER DATA REQUIRED**) yerel dosyalar değiştirilecektir.

---

## 9. Önizleme İndeksleme Politikası (Preview Indexing Policy)
- **Robots Meta:** `<meta name="robots" content="noindex, nofollow">` ve `<meta name="googlebot" content="noindex, nofollow">` direktifleri aktiftir.
- **Robots.txt:** Arama motoru botlarının HTML'deki `noindex` direktifini doğrudan okuyabilmesi için `Allow: /` kuralı mevcuttur.
- **Kanonik URL:** Sahte alan adı üretilmemiştir; kanonik URL yayını yapılmamaktadır.
- **Sitemap:** Canlı alan adı atanana kadar sitemap devre dışıdır.

---

## 10. Eksik İşveren Verileri (Pending Employer Data)
1. Onaylı pilot şube adresi ve resmi çalışma saatleri.
2. Tescilli müşteri destek telefonu ve resmi kurumsal e-posta adresi.
3. Onaylı Instagram profil bağlantısı.
4. Nihai stüdyo menü fotoğraf çekimleri ve onaylı gramaj/fiyat listesi.
