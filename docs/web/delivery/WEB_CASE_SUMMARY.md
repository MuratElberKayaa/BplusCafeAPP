# B+ Wellness Café — Dijital Platform Vaka Özeti (Case Summary)

**Workstream:** Website Workstream — Web Phase 5  
**Doküman Türü:** Case Study Executive Summary (Portfolyo & Proje Dosyası İçin)  
**Rol:** Case Study Delivery Specialist, Senior Product Designer  

---

## 1. Problem Tanımı (The Problem)
Geleneksel üçüncü nesil kahveciler kaliteli çekirdek sunmalarına rağmen, modern şehir çalışanlarının yoğun iş temposundaki beslenme ve iyi yaşam (wellness) ihtiyaçlarına odaklanmakta yetersiz kalmaktadır. Şekerli şuruplarla dolu endüstriyel içecekler öğleden sonra enerji çöküşlerine yol açarken; fonksiyonel botanikler, adaptojenler (Lion's Mane, Ashwagandha, Cordyceps) ve rafine şekersiz alternatifler dijital dünyada yeterince şık ve anlaşılır bir vitrine sahip değildir.

---

## 2. Hedef Kitle (Target Audience)
- **Birincil Persona:** Yoğun iş temposunda çalışan, toplantı aralarında hızlı ama temiz enerji arayan beyaz yakalı profesyoneller ve kurumsal çalışanlar.
- **İkincil Persona:** Aktif spor yapan, sağlıklı beslenmeye özen gösteren, fonksiyonel botaniklere ve matcha kültürüne ilgi duyan bilinçli tüketiciler.

---

## 3. Tasarım Yaklaşımı (Design Approach)
- **Görsel Dil & Atmosfer:** Sıcak ve organik toprak tonları (Cream, Travertine, Warm White), botanik dinginlik veren Adaçayı yeşili (Sage) ve kurumsal zarafeti simgeleyen Derin Zeytin (Deep Olive).
- **Tipografi & Hiyerarşi:** Kararlı, modern ve okunabilir display başlıklar; mikro etkileşimleri destekleyen zarif etiket kapsülleri.
- **İçerik Dili:** Abartılı tıbbi iddialardan arındırılmış, şeffaf, samimi ve dürüst bir editoryal ton (*"İş gününe iyi bir +"*).

---

## 4. Kullanıcı Deneyimi Mimarisi (UX Architecture)
- **Günün Anları (Time-based Curation):** Kullanıcıyı doğrudan saat dilimine uygun içecekle buluşturan bağlamsal filtreleme.
- **Şeffaf Menü Hiyerarşisi:** 8 net kategori, makro besin değerleri, net alerjen etiketleri ve porsiyon bilgileri.
- **Klavye Dostu Modallar:** Kullanıcı odağını dağıtmadan detaylı reçete bilgilerini sunan ve `Escape` ile hızla kapanan dialog pencereleri.

---

## 5. Mühendislik ve Uygulama (Implementation)
- **Modern Yığın:** Next.js `15.5.27` (App Router) + React `19.3.0` + TypeScript `5.6.3`.
- **Sıfır Dış CDN Bağımlılığı:** Tüm editoryal demo fotoğrafları yerel WebP formatına indirgenmiş; network darboğazı ve dış kaynak gecikmeleri sıfırlanmıştır.
- **CSS Mimarisi:** Tailwind CSS 3.4.14 ve PostCSS 8.5.28 ile optimize edilmiş minimal bundle boyutu (İlk yükleme JS: ~124 kB).

---

## 6. AI Barista Rolü (AI Prototype Role)
Karmaşık botanik ve adaptojen dünyasını kullanıcı için anlaşılır kılmak amacıyla kural tabanlı bir **AI Barista Öneri Simülatörü** entegre edilmiştir. Kullanıcının o anki fiziksel veya zihinsel ihtiyacına (odaklanma, canlanma, antrenman sonrası onarım) en uygun reçeteyi gerekçesiyle eşleştiren akıllı bir ön yüz vizyonudur.

---

## 7. Erişilebilirlik ve Kapsayıcılık (Accessibility - WCAG 2.1 AA)
- **Lighthouse Skoru:** **96 / 100**
- Klavye ile tam dolaşım (`Tab`, `Shift+Tab`, `Space`, `Enter`).
- Sayfa başı gizli `Ana İçeriğe Atla` (skip-link) bileşeni.
- Modallarda katı focus trap ve odak iadesi mekanizması.
- 4.5:1 kontrast oranları ve 44×44px mobil dokunma alanları.

---

## 8. Performans ve Core Web Vitals (Performance Benchmarks)
- **Masaüstü Performans:** **100 / 100** (LCP: 0.62 s, FCP: 0.26 s, TBT: 0 ms)
- **Mobil Performans:** **95–96 / 100** (LCP: 2.90 s, FCP: 0.96 s, TBT: 25 ms)
- **CLS (Cumulative Layout Shift):** **0.0000** (Yerel WebP ve önceden rezerve edilmiş en-boy oranları ile kusursuz sıfır düzen kayması).

---

## 9. Güvenlik ve Bağımlılık Disiplini (Security Closure)
- **Üretim Zafiyetleri (`npm audit --omit=dev`):** **0 Kritik, 0 Yüksek, 0 Toplam**.
- **Gizli Bilgi Denetimi:** 0 secret, 0 API key, 0 hassas kimlik bilgisi.
- **Form İzolasyonu:** İletişim ve bülten kutuları ağ dışına veri sızdırmaz; tamamen yerel React state ile mock geri bildirim üretir.

---

## 10. Prototip Sınırları ve Ayrımı (Demo Boundaries)
- Sipariş akışı, AI eşleştirme ve lokasyon bilgileri tamamen prototip sunumu niteliğindedir.
- Gerçek ödeme, canlı kullanıcı oturumu veya dış sipariş kuyruğu kurgulanmamıştır.
- İşveren onayını bekleyen pilot şube ve fiyat verileri açıkça `[DEMO]` ve `Örnek Şube (TBD)` olarak etiketlenmiştir.

---

## 11. Nihai Sonuç (Final Result)
B+ Wellness Café web platformu; marka kimliği, kullanıcı deneyimi, erişilebilirlik ve teknik mükemmeliyeti bir araya getiren, üretime hazır standartta sertleştirilmiş örnek bir dijital vitrin projesidir.
