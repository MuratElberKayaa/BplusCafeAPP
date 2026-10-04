# B+ Wellness Café — Accessibility & Usability Checklist (WCAG 2.1 AA)

**Doküman Sürümü:** 1.0.0 (Phase 2 — High-Fidelity UI/UX & Interactive Prototype)  
**Tarih:** 2026-09-30  
**Statü:** ACTIVE — AUDIT CHECKLIST  
**Hedef Standart:** WCAG 2.1 AA Uyumlu  

---

## 1. Görsel Kontrast ve Okunabilirlik (Visual Contrast & Typography)

- [x] **Metin Kontrast Oranı:** Normal metinler için en az `4.5:1`, büyük başlıklar için en az `3.0:1` kontrast oranı sağlanmıştır.
  - `#2B231E` (Espresso) metin rengi `#FFFDF8` ve `#F4F0E6` zemin üzerinde `12.8:1` ile AAA seviyesindedir.
  - `#68734B` (Olive) birincil buton rengi `#FFFDF8` beyaz metinle `4.6:1` ile AA seviyesindedir.
- [x] **Minimum Okunabilir Metin Boyutu:** Mobil arayüzde en küçük gövde metni 13px, ikincil meta etiketler en az 11px olarak sınırlandırılmıştır.
- [x] **Yalnızca Renk ile Bilgi İletmeme İlkesi:** Durumlar (Hazır, Hazırlanıyor, Hata vb.) yalnızca renkle değil; metin etiketi ve ikonlarla (`✓`, `⏳`, `!`, `✕`) birlikte sunulur.

---

## 2. Dokunma ve Tıklama Hedefleri (Touch Targets)

- [x] **Minimum Dokunma Alanı (Mobile):** Tüm mobil butonlar, filtre hapları ve sepet adet artırıcılar en az `44px x 44px` fiziksel dokunma alanına sahiptir.
- [x] **Tablet KDS Dokunma Alanı:** Mağaza içi yoğun saatlerde hata yapmayı önlemek için KDS butonları (Hazırla, Hazır, Tamamla) en az `56px x 56px` yüksekliğe sahiptir.
- [x] **Dokunma Hedefleri Arası Boşluk:** Yan yana veya alt alta duran tıklanabilir öğeler arasında en az 8px fiziksel mesafe bırakılmıştır.

---

## 3. Formlar, Giriş Alanları ve Hata Yönetimi

- [x] **Kalıcı Form Etiketleri:** Tüm input alanlarında placeholder'a ek olarak kalıcı ve görünür alan etiketleri (`<label>`) bulunur.
- [x] **Açıklayıcı Hata Mesajları:** Hata durumlarında genel kodlar yerine kullanıcının anlayacağı samimi ve aksiyon sunan mesajlar verilir.
- [x] **Odak Durumu (Focus States):** Klavye veya ekran okuyucu ile gezinen kullanıcılar için tüm odaklanabilir elemanlarda belirgin kontrastlı odak halkası (`outline: 2px solid #68734B`) mevcuttur.

---

## 4. Semantik HTML ve Web Navigasyonu (Store Ops & Admin)

- [x] **Semantik Elemanlar:** Next.js web arayüzlerinde `<div>` yığını yerine `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>` ve `<button>` etiketleri kullanılmıştır.
- [x] **Klavye ile Gezinme:** Admin paneli ve KDS ekranları sadece `Tab`, `Enter` ve `Space` tuşlarıyla kullanılabilir.
- [x] **ARIA Rolleri:** Açılır çekmecelerde (`role="dialog"`), canlı bildirimlerde (`aria-live="polite"`) ve KDS sayaçlarında gerekli ARIA etiketleri tanımlanmıştır.
