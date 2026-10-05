# B+ Wellness Café by Mineiro Coffee
# SOCIAL MEDIA WORKSTREAM — PHASE 4 DELIVERY README
**Workstream:** Social Media | **Phase:** Social Phase 4 (Story & Reels Production)  
**Authors:** Senior Social Art Director, Motion Designer & Production Designer  
**Status:** DELIVERY COMPLETE — STORY & REELS ASSETS PRODUCED  

---

## 1. Teslim Edilen Varlıklar Listesi (Deliverables List)

### Instagram Hikâyeleri (Stories — 1080 × 1920 px, 9:16 PNG)
1. [`assets/social/stories/story-01-0800-final.png`](file:///c:/Users/PC/Desktop/B+CafeAPP/assets/social/stories/story-01-0800-final.png)  
   * **Moment:** 08:00 İşe Gidiş Ritüeli  
   * **Etkileşim:** Kahve vs Matcha ikili anket modülü  
   * **Tema:** Sıcak Krem & Sabah Gün Işığı  
2. [`assets/social/stories/story-02-1230-final.png`](file:///c:/Users/PC/Desktop/B+CafeAPP/assets/social/stories/story-02-1230-final.png)  
   * **Moment:** 12:30 Öğle Arası Hafifliği  
   * **Etkileşim:** Smoothie vs Atıştırmalık anket modülü  
   * **Tema:** Taze Kase Gastronomi Fotoğrafı & Yeşil Botanik  
3. [`assets/social/stories/story-03-1500-final.png`](file:///c:/Users/PC/Desktop/B+CafeAPP/assets/social/stories/story-03-1500-final.png)  
   * **Moment:** 15:00 B+ Molası  
   * **Etkileşim:** "Bugün ne içmek isterdin?" soru çıkartması simülasyonu  
   * **Tema:** Koyu Zeytin (`#34422D`) & Kadifemsi Matcha  

### Reels Kampanya Filmi Varlıkları
4. [`assets/social/reels/reels-storyboard-final.png`](file:///c:/Users/PC/Desktop/B+CafeAPP/assets/social/reels/reels-storyboard-final.png)  
   * **Boyut:** `2160 × 1440 px` (Yüksek çözünürlüklü sunum storyboard'u)  
   * **Format:** 6 Karelik sıralı sahne akışı, zaman kodları, hareket ve ses yönergeleri  
5. [`assets/social/reels/bplus-workday-reels-prototype.mp4`](file:///c:/Users/PC/Desktop/B+CafeAPP/assets/social/reels/bplus-workday-reels-prototype.mp4)  
   * **Boyut:** `1080 × 1920 px` (9:16 Dikey MP4 Video)  
   * **Süre:** 28 Saniye (24 FPS, 672 kare)  
   * **Hareket Dili:** Editoryal yavaş zum (%2.5 slow zoom) ve pürüzsüz çapraz erimeler (cross-dissolve)  

---

## 2. Kampanya Anlatı Akışı (Campaign Narrative Structure)

Reels ve Hikâye serisi beyaz yakalı kentsel profesyonellerin tipik iş günü ritmini takip eder:
* **00:00 – 00:05:** `08:00 | Güne bir +.` — Şehir uyanırken berrak ve soğuk bir fincanla güne taze başlangıç.
* **00:05 – 00:11:** `Masa Başı Odak` — Zanaatkar çekirdekler ve filtrelenmiş berrak demleme ile çalışma masası anı.
* **00:11 – 00:17:** `12:30 | Öğle arasına bir +.` — Ağır yemekler yerine taze meyve kasesi ve soğuk sıkımla hafif bir ara.
* **00:17 – 00:23:** `15:00 | Molaya bir +.` — İkindi eşiğinde geleneksel matcha ve bitkisel çaylarla sakin bir soluk.
* **00:23 – 00:27:** `AI Barista • PROTOTYPE | Seçimine bir +.` — Kişisel tercihe göre demo katalogdan içecek eşleşmesi simülasyonu (`✦ %94 Uyum [DEMO SCORE]`).
* **00:27 – 00:30:** `B+ Wellness Café by Mineiro Coffee | İş gününe iyi bir +.` — Editoryal marka kapanışı.

---

## 3. Demo Sınırları ve Tüketici Güvenliği (Demo Boundaries)

* Tüm hikâyelerde `DEMO / CONCEPT` ve `DEMO MENU VISUALS` etiketleri yer almaktadır.
* Gerçek bir açılış tarihi, fiziksel şube lokasyonu veya ticari fiyat bilgisi verilmemiştir.
* AI arayüzü `PROTOTYPE` ve `DEMO SCORE` rozetleriyle netleştirilmiştir.
* Tıbbi tedavi, stres önleme veya metabolizma vaat eden abartılı ifadeler kullanılmamıştır.

---

## 4. Varlık Kökeni ve Görsel Provenans (Asset Provenance)

Tüm fotoğraflar ve grafik bileşenler onaylı B+ web demo havuzundan (`assets/social/shared/images/`) beslenmektedir:
* `brand-logo.png` — Kurumsal amblem
* `hero-coldbrew.webp` — Story 01 & Reels Sahne 1, 5
* `v60-pourover.webp` — Reels Sahne 2
* `spirulina-bowl.webp` — Story 02 & Reels Sahne 3
* `matcha-latte.webp` — Story 01, 03 & Reels Sahne 4
* Harici veya lisanssız stok görseller kullanılmamıştır.

---

## 5. Yeniden Üretilebilir Üretim Metodu (Production Method)

Tüm varlıklar otomatik ve tekrarlanabilir yerel scriptlerle üretilmiştir:
* **Hikâyeler:** [`assets/social/shared/production/render-stories.js`](file:///c:/Users/PC/Desktop/B+CafeAPP/assets/social/shared/production/render-stories.js) (Chrome Headless, 1080×1920)
* **Storyboard:** [`assets/social/shared/production/render-reels-storyboard.js`](file:///c:/Users/PC/Desktop/B+CafeAPP/assets/social/shared/production/render-reels-storyboard.js) (Chrome Headless, 2160×1440)
* **Reels Video:** [`assets/social/shared/production/render-reels-scenes.js`](file:///c:/Users/PC/Desktop/B+CafeAPP/assets/social/shared/production/render-reels-scenes.js) + [`assets/social/shared/production/generate-reels-prototype.py`](file:///c:/Users/PC/Desktop/B+CafeAPP/assets/social/shared/production/generate-reels-prototype.py) (OpenCV cv2.VideoWriter, 24 FPS, 1080×1920 MP4)
