# B+ Wellness Café by Mineiro Coffee
# SOCIAL TYPOGRAPHY SYSTEM
**Workstream:** Social Media | **Phase:** Social Phase 2 (High-Fidelity Visual System)  
**Authors:** Editorial Designer & Senior Brand Designer  
**Status:** COMPLETE TYPOGRAPHY SPECIFICATION  

---

## 1. Yazı Tipi Aileleri (Type Families & Font Stack)

B+ projesinin web platformunda yapılandırılmış ve lisanslı açık kaynak font ailesi doğrudan sosyal medya tipografisinin omurgasını oluşturur:

1. **Birincil Başlık ve Vurgu Fontu:** `Plus Jakarta Sans`  
   *(Çağdaş, geometrik-hümanist karakter, yüksek prestijli editoryal duruş)*
2. **Gövde, Bilgi ve Etiket Fontu:** `Manrope`  
   *(Temiz, modern, mükemmel ekran okunabilirliği, dengeli x-yüksekliği)*
3. **Sistem Yedekleri (System Fallback):**  
   `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

*Not: Ticari veya harici lisanslı font dosyaları indirilmez veya yeniden dağıtılmaz; projede var olan açık kaynak fontlar kullanılır.*

---

## 2. Tipografik Hiyerarşi & Rol Haritası (Type Roles & Scale)

Tüm değerler **1080 × 1350 px** ana kanvas çözünürlüğü baz alınarak belirlenmiştir:

| Tipografik Rol (Role) | Font Ailesi | Boyut (Size) | Ağırlık (Weight) | Harf Aralığı (Tracking) | Satır Yüksekliği (Line-Height) | Harf Düzeni (Case) | Hizalama & Renk |
|:---|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **DISPLAY** | `Plus Jakarta Sans` | `72 px – 84 px` | Bold (700) / ExtraBold (800) | `-0.03em` (Sıkı) | `1.05 – 1.1` | Baş Harfler Büyük / Sentence case | Sol veya Merkez • Deep Olive (`#34422D`) / Warm White (`#FFFDF8`) |
| **H1 / SOCIAL HEADLINE** | `Plus Jakarta Sans` | `52 px – 60 px` | Bold (700) | `-0.02em` | `1.15` | Sentence case | Sol / Merkez • Deep Olive (`#34422D`) / Warm White (`#FFFDF8`) |
| **SECONDARY COPY** | `Manrope` | `26 px – 30 px` | Medium (500) | `-0.01em` | `1.35` | Sentence case | Sol / Merkez • Espresso (`#2B231E`) / Sage (`#AEB997`) |
| **BODY TEXT** | `Manrope` | `20 px – 24 px` | Regular (400) | `0em` | `1.45` | Sentence case | Sol • Espresso (`#2B231E`) / Cream (`#F4F0E6`) |
| **LABEL / TIME (Saat)** | `Plus Jakarta Sans` | `18 px – 22 px` | SemiBold (600) | `+0.08em` (Geniş) | `1.0` | **TÜMÜ BÜYÜK (ALL CAPS)** | Merkez / Sol • Olive (`#68734B`) / Latte (`#D8B98C`) |
| **MICROCOPY / FOOTER** | `Manrope` | `14 px – 16 px` | Medium (500) | `+0.02em` | `1.3` | Sentence case | Sol / Merkez • Muted Text (`#6B675F`) |
| **DEMO BADGE** | `Plus Jakarta Sans` | `12 px – 14 px` | Bold (700) | `+0.1em` (Geniş) | `1.0` | **TÜMÜ BÜYÜK (ALL CAPS)** | Merkez • Deep Olive (`#34422D`) / White |

---

## 3. Rol Bazlı Kullanım ve Uygulama Kuralları

### A) DISPLAY & H1 (Sosyal Manşetler)
* **Örnek Metin:** `İş gününe iyi bir +.` / `Güne bir +.` / `Öğle arasına bir +.`
* **Kural:** Maksimum 5 kelime. Kelimeler bölünmez, satır sonlarında tireleme (hyphenation) yapılmaz.
* **Kontrast:** Koyu zeminlerde `#FFFDF8` (Warm White), açık zeminlerde `#34422D` (Deep Olive).

### B) LABEL / TIME (08:00, 12:30, 15:00 Zaman Damgaları)
* **Örnek Metin:** `08:00 | GÜNE BİR +`
* **Kural:** Her zaman `ALL CAPS` ve genişletilmiş letter-spacing (`+0.08em`).
* **Amaç:** UI etiketi veya bilet hissi vermeden, editoryal bir dergi bölüm başlığı gibi durması sağlanır.

### C) DEMO BADGE (Prototip ve Şeffaflık Rozeti)
* **Örnek Metin:** `DEMO PRODUCT` / `PROTOTYPE` / `DEMO SCORE: %94`
* **Kural:** Minimalist pill/kapsül kutu içinde, 12-14px boyutta, `tracking-widest`.
* **Amaç:** Hukuki ve etik şeffaflığı sağlarken görsel kompozisyonun asaletini bozmaz.

---

## 4. Tipografik Anti-Paternler

* ❌ **Dashboard Arayüzü Havası:** Sosyal postları metrik gösterge paneli gibi küçük sayılar ve çizgilerle doldurmak.
* ❌ **Düşük Kontrastlı Metin:** Açık krem arka plan üzerine soluk adaçayı yeşili (`#AEB997`) metin yazmak (WCAG AA kontrastını karşılamaz; krem üzerine mutlaka `#34422D` veya `#2B231E` kullanılmalıdır).
* ❌ **Aşırı İtalik Kullanımı:** Cümlelerin tamamını italik yapmak okunabilirliği düşürür; italik yalnızca tek bir kelimelik editoryal vurgu için ayrılmıştır.
