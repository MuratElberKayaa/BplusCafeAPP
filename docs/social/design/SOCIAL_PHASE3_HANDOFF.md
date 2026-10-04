# B+ Wellness Café by Mineiro Coffee
# SOCIAL PHASE 3 PRODUCTION HANDOFF SPECIFICATION
**Workstream:** Social Media | **Phase:** Social Phase 2 (High-Fidelity Visual System)  
**Authors:** Senior Art Director & Social Media Design Lead  
**Status:** COMPLETE PRODUCTION CONTRACT FOR PHASE 3  

---

## 1. Üretim Sözleşmesi & Çıktı Dosya Listesi (Phase 3 Output Contract)

Sosyal Faz 3'e geçildiğinde üretilecek nihai görsel varlıkların kesin dosya adları, formatları ve çözünürlükleri aşağıda tanımlanmıştır.  
*(Önemli Kural: Bu nihai dosyalar Faz 2 kapsamında üretilmez; Faz 3 üretim aşamasına aittir).*

### A) 6 Adet Instagram Feed Gönderisi (`assets/social/posts/`)
| Hedef Dosya Yolu | İçerik & Konsept | Çözünürlük | Format & Renk Profili | Öncelik Seviyesi |
|:---|:---|:---:|:---:|:---:|
| `assets/social/posts/post-01-brand-final.png` | POST 01: Marka Lansmanı ("İş gününe iyi bir +.") | `1080 × 1350 px` (4:5) | PNG-24, sRGB, < 1.8 MB | **ÖNCELİK 1 (Final Görsel Önceliği)** |
| `assets/social/posts/post-02-0800.png` | POST 02: 08:00 Sabah Kahve Ritüeli ("Güne bir +.") | `1080 × 1350 px` (4:5) | PNG-24, sRGB, < 1.8 MB | ÖNCELİK 2 |
| `assets/social/posts/post-03-1230-final.png` | POST 03: 12:30 Öğle Arası & Kase/İçecek ("Öğle arasına bir +.") | `1080 × 1350 px` (4:5) | PNG-24, sRGB, < 1.8 MB | **ÖNCELİK 1 (Final Görsel Önceliği)** |
| `assets/social/posts/post-04-1500.png` | POST 04: 15:00 İkindi Molası & Matcha ("Molaya bir +.") | `1080 × 1350 px` (4:5) | PNG-24, sRGB, < 1.8 MB | ÖNCELİK 2 |
| `assets/social/posts/post-05-menu.png` | POST 05: Menü & Kategori Keşfi ("Menüne bir +.") | `1080 × 1350 px` (4:5) | PNG-24, sRGB, < 1.8 MB | ÖNCELİK 2 |
| `assets/social/posts/post-06-ai-final.png` | POST 06: B+ AI Barista Prototip Vitrini ("Seçimine bir +.") | `1080 × 1350 px` (4:5) | PNG-24, sRGB, < 1.8 MB | **ÖNCELİK 1 (Final Görsel Önceliği)** |

---

### B) 6'lı Izgara & Profil Mockup Çıktıları (`assets/social/mockups/`)
| Hedef Dosya Yolu | İçerik & Konsept | Çözünürlük | Format |
|:---|:---|:---:|:---:|
| `assets/social/mockups/grid-6-post-final.png` | 6 gönderinin Instagram 3'lü ızgara sunumu | `1080 × 1080 px` veya `1080 × 1440 px` | PNG-24, sRGB |
| `assets/social/mockups/profile-feed-mockup.png` | Profil başlığı, demo handle, bio ve öne çıkanlar içeren Instagram profil vitrini | `1080 × 1920 px` | PNG-24, sRGB |

---

### C) 3 Adet Instagram Story Görseli (`assets/social/stories/`)
| Hedef Dosya Yolu | İçerik & Konsept | Çözünürlük | Format |
|:---|:---|:---:|:---:|
| `assets/social/stories/story-01-morning-poll.png` | 08:00 Kahve vs Matcha İkili Anket Şablonu | `1080 × 1920 px` (9:16) | PNG-24, sRGB |
| `assets/social/stories/story-02-lunch-poll.png` | 12:30 Smoothie vs Kase İkili Anket Şablonu | `1080 × 1920 px` (9:16) | PNG-24, sRGB |
| `assets/social/stories/story-03-afternoon-qa.png` | 15:00 B+ Baristaya Sor Soru Kutusu Şablonu | `1080 × 1920 px` (9:16) | PNG-24, sRGB |

---

## 2. Üretim İçin Teknik Kurallar ve Parametreler

1. **Renk Yönetimi:** Tüm grafikler web ve mobil ekran standartı olan **sRGB** renk uzayında dışa aktarılacaktır (Display P3 veya Adobe RGB kullanılmaz).
2. **Tipografi Kaynağı:** Doğrudan sistemde bulunan `Plus Jakarta Sans` ve `Manrope` fontları kullanılır.
3. **Logo Varlıkları:** `apps/web/public/images/demo/brand-logo.webp` veya `brand-logo.png` temiz amblem olarak kullanılır.
4. **Fotoğrafik Varlıklar:** Web sitesindeki gerçek demo varlıklar (`hero-coldbrew.webp`, `matcha-latte.webp`, `spirulina-bowl.webp`, `juice-citrus.webp`, `cordyceps-latte.webp`) ve gerçek barista/kafe kompozisyonları referans alınır.
5. **AI Barista Görseli:** `apps/web/src/components/sections/AiBaristaSection.tsx` bileşeninin gerçek ekran görüntüsü veya yüksek sadakatli mockup grafiği kullanılır.
6. **Örnek Ürün Görsel Sınırları (Demo Product Boundary):** Görsellerde temsil edilen tüm spesifik içecek ve yiyecekler (soğuk kahve, yeşil kase, narenciye taze sıkım, smoothie, botanik içecek) kesin olarak `DEMO PRODUCT` statüsündedir; vaka çalışması kreatif varlıklarıdır, işveren onaylı menü ürünleri değildir. Tasarımlarda şeffaf `DEMO PRODUCT` rozeti korunacaktır.
