# B+ Wellness Café — Web Implementation Asset Provenance Map

**Workstream:** Website Workstream — Web Phase 3 Hardening  
**Doküman Sürümü:** 1.0.0 (Asset Provenance & License Declaration)  
**Tarih:** 2026-10-04  
**Statü:** APPROVED — AUDITED PROVENANCE  
**Roller:** Senior Frontend Engineer, Digital Art Director  

---

## 1. Genel Varlık ve Lisans İlkeleri

1. **Third-Party Demo Imagery:**  
   Mevcut frontend prototipinde (`apps/web`) sergilenen tüm dış fotoğraflar Unsplash açık içerik lisansı (`Unsplash License`) kapsamında üçüncü taraf editoryal demo görselleridir. Bu görseller **"third-party demo imagery subject to provider/license terms"** statüsündedir.
2. **Employer Production Assets (TBD):**  
   İşverene ait onaylı gerçek şube fotoğrafları, sözleşmeli menü ürün çekimleri ve kurumsal tabela çekimleri henüz teslim edilmemiştir (**EMPLOYER DATA REQUIRED / TBD**). Üretime geçiş aşamasında (Web Phase 5 / Launch) tüm demo görseller işverenin telifli stüdyo ve şube çekimleriyle değiştirilecektir.
3. **Internal Brand Assets:**  
   B+ Monogram (`B+`), botanik palet renkleri, Lucide React tabanlı UI ikonları ve stilize vektör harita krokisi telif bağımsız dahili kod varlıklarıdır.

---

## 2. Aktif Kod Tabanı Görsel Kaynak Matrisi (`apps/web`)

| Asset Referansı | Konum / URL Kaynağı | Lisans / Sağlayıcı | Statü | Nihai Değişim Gereksinimi |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Cover** (`HeroSection.tsx`) | `https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd` | Unsplash (Third-party) | Demo Placeholder | **Employer Photo TBD** |
| **Concept Cover** (`ConceptSection.tsx`) | `https://images.unsplash.com/photo-1442512595331-e89e73853f31` | Unsplash (Third-party) | Demo Placeholder | **Employer Photo TBD** |
| **Lion's Mane Cold Brew** (`webData.ts`) | `https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Matcha Glow Latte** (`webData.ts`) | `https://images.unsplash.com/photo-1536256263959-770b48d82b0a` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Single-Origin V60** (`webData.ts`) | `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Cordyceps Energy Latte** (`webData.ts`)| `https://images.unsplash.com/photo-1541167760496-1628856ab772` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Spirulina Wellness Bowl** (`webData.ts`)| `https://images.unsplash.com/photo-1540420773420-3366772f4999` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Zencefil & Narenciye** (`webData.ts`) | `https://images.unsplash.com/photo-1621506289937-a8e4df240d0b` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Avocado Smoothie** (`webData.ts`) | `https://images.unsplash.com/photo-1553530666-ba11a7da3888` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Adaçayı Demleme** (`webData.ts`) | `https://images.unsplash.com/photo-1576092768241-dec231879fc3` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Raw Kakaolu Bar** (`webData.ts`) | `https://images.unsplash.com/photo-1606313564200-e75d5e30476c` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Golden Turmeric Latte** (`webData.ts`) | `https://images.unsplash.com/photo-1544787219-7f47ccb76574` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Iced Matcha Collagen** (`webData.ts`) | `https://images.unsplash.com/photo-1556881286-fc6915169721` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Ashwagandha Cacao** (`webData.ts`) | `https://images.unsplash.com/photo-1511920170033-f8396924c348` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **AI Barista Match Card** (`AiBaristaSection.tsx`) | `https://images.unsplash.com/photo-1536256263959-770b48d82b0a` | Unsplash (Third-party) | Demo Placeholder | **Employer Menu Photo TBD** |
| **Instagram Tiles (x4)** (`ContactSection.tsx`) | `Unsplash Photos: 1536256263959, 1495474472287, 1540420773420, 1554118811` | Unsplash (Third-party) | Demo Placeholder | **Employer Social / Branch Photos TBD** |
| **Vector Map Kroki** (`LocationSection.tsx`) | Dahili SVG grid & pin markup | Dahili Kod | Final Stylized Mock | Google Maps API (Phase 4/5 Opsiyonel) |
| **UI İkonları** (Tüm Bileşenler) | `lucide-react` | ISC / MIT Lisans | Production UI Icon | Kalıcı |
