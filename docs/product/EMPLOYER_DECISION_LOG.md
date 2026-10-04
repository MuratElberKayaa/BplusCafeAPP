# B+ Wellness Café Digital Platform — Employer Decision Log

**Doküman Sürümü:** 1.0.0 (Phase 0 — Foundation)  
**Tarih:** 2026-09-29  
**Statü:** OPEN / PENDING EMPLOYER REVIEW  

Bu doküman, teknik ekibin ilerleyebilmesi için işveren (şirket yönetimi/ürün sahibi) tarafından yanıtlanması veya onaylanması gereken kritik iş, operasyon ve hukuki kararları kayıt altına alır.

Her madde prototip ve canlı (production) aşamaları için engelleyicilik durumunu netleştirir.

---

| Decision ID | Question (Karar Konusu & Soru) | Current Assumption (Mevcut Teknik Varsayım) | Blocks Prototype? | Blocks Production? | Required Before Phase |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **DEC-01** | **POS Sağlayıcısı:** Mağazada hangi fiziksel POS / Kasa yazılımı kullanılacak? (Örn: Simpra, Mikro, Centum, NarPOS, Ingenico vb. veya tamamen kendi KDS'imiz mi?) | **ASSUMPTION:** İlk etapta Store Operations web KDS'i doğrudan kasa/sipariş yönetim ekranı olarak planlanmıştır. POS bağımsız Adapter mimarisi tanımlanmıştır (`ADR-003`). | **NO** | **YES** *(Eğer fiziksel kasa ile mali fiş entegrasyonu şart koşulursa)* | Pilot Canlı Öncesi (Phase 2+) |
| **DEC-02** | **Ödeme Sağlayıcısı (Payment Gateway):** Hangi Sanal POS veya ödeme kuruluşu ile çalışılacak? (Örn: Iyzico, PayTR, Garanti BBVA Sanal POS, Yapı Kredi, Stripe vb.) | **ASSUMPTION:** Backend `PaymentProvider` soyutlama mimarisi tanımlanmıştır (`ADR-002`). Prototip aşamasında Sandbox/Mock provider planlanmıştır. | **NO** | **YES** | Ödeme Entegrasyonu Fazı |
| **DEC-03** | **Gerçek Para Cüzdanı (Real Money Wallet):** Müşterilerin kredi kartından B+ Wallet'a gerçek para yüklemesi talep edilecek mi? (Gerçek para bakiye modeli, 6493 sayılı Kanun ve TCMB düzenlemeleri kapsamında işveren, lisanslı ödeme/elektronik para kuruluşu ve gerektiğinde hukuk danışmanı ile doğrulanmalıdır). | **EMPLOYER DECISION REQUIRED:** Phase 0 kararı gereği production gerçek para cüzdanı ONAYLANMAMIŞTIR (`RISK-01`). Prototipte yalnızca simüle/sandbox cüzdan davranışı planlanmıştır (EMPLOYER + PAYMENT PROVIDER + LEGAL/REGULATORY REVIEW REQUIRED). | **NO** | **YES** *(Gerçek para tutulacaksa yasal/iş modeli teyidi şart)* | Cüzdan Politikası / Canlı Öncesi |
| **DEC-04** | **Rewards & Sadakat Modeli Formülü:** Müşteri nasıl puan kazanacak ve harcayacak? (Örn: Her 100 TL'ye 5 puan mı? Her içeceğe 1 yıldız mı? 10 yıldız = 1 ücretsiz kahve mi?) | **ASSUMPTION:** Configurable Puan Motoru mimarisi tasarlandı. Prototipte `DEMO_RULE` (Örn: Her sipariş = 10 Puan, 100 Puan = 1 Kahve İndirimi) simülasyonu planlanmıştır. | **NO** | **YES** | Rewards Geliştirme Fazı |
| **DEC-05** | **Nihai Menü & Fiyatlandırma Listesi:** Tam ürün listesi, reçeteler, boyutlar, eklemeler (şurup, süt, shot) ve baz fiyatlar ne zaman netleşecek? | **ASSUMPTION:** Menü şeması esnek tasarlandı. Prototip/UX geliştirilirken 15-20 kalemlik veri seti `[DEMO DATA — NON-PRODUCTION — TO BE REPLACED BY EMPLOYER MENU]` etiketiyle kullanılacaktır. | **NO** | **YES** | Canlıya Çıkış Öncesi (Pilot Launch) |
| **DEC-06** | **Müşteri Sipariş İptal Politikası:** Müşteri siparişi verdikten sonra hangi aşamaya kadar iptal edebilir? İptal durumunda ücret iadesi anlık mı yoksa provizyon iptali şeklinde mi olacak? | **ASSUMPTION:** Sipariş `PREPARING` (Hazırlanıyor) durumuna geçene kadar iptal edilebilir; baristaya düştükten sonra müşteri iptal edemez, sadece barista mağazadan iptal edebilir kuralı planlanmıştır. | **NO** | **YES** | Sipariş Yönetimi Fazı |
| **DEC-07** | **İade (Refund) Politikası:** Hazırlanmış ancak teslim alınmamış siparişlerde iade yapılacak mı? Hatalı sipariş durumunda ücret iadesi cüzdana mı karta mı dönecek? | **ASSUMPTION:** Prototipte karta ters ibraz/iade simülasyonu tasarlandı; nihai iş kuralı işveren onayı bekliyor. | **NO** | **YES** | Finans & İptal Akışları Fazı |
| **DEC-08** | **İleri Zamanlı Teslimat (Pickup Scheduling):** Müşteri sadece "hemen hazırlanacak" (ASAP) sipariş mi verebilecek, yoksa "bugün 16:30'da alacağım" şeklinde randevulu sipariş desteklenecek mi? | **ASSUMPTION:** Prototip V1 yalnızca "ASAP" (Hemen sipariş, tahmini 10-15 dk hazırlık) akışını hedefler. İleri saatli sipariş sonraki fazlara bırakılmıştır. | **NO** | **NO** *(Gelecek faz opsiyonel özellik)* | Faz Planlama |
| **DEC-09** | **Masa Servisi (Dine-in) Desteği:** İleride kafede oturan müşterinin masadaki QR kodu okutup masaya servis istemesi planlanıyor mu? | **ASSUMPTION:** İlk faz sadece gel-al ("Pickup / Order Ahead") odaklıdır. Masa servisi V1 kapsam dışıdır. | **NO** | **NO** | Gelecek Fazlar |
| **DEC-10** | **Şube Çalışma Saatleri & Sipariş Kabul Penceresi:** Mağaza saat kaçta açılıp kapanıyor? Kapanıştan kaç dakika önce mobil sipariş kabulü durdurulacak? | **ASSUMPTION:** `store_hours` tablosunda gün bazlı açılış-kapanış saatleri ve `order_cutoff_minutes: 15` (kapanıştan 15 dk önce mobil sipariş kapanır) konfigürasyonu tutulması planlanmıştır. | **NO** | **YES** | Pilot Canlı Öncesi |
| **DEC-11** | **Ürün Stok Yönetimi ve Tükenme ("86 / Out of Stock"):** Anlık tükenen ürünler (örn: badem sütü bitti) nasıl yönetilecek? Barista Store Ops ekranından mı işaretleyecek, yoksa merkezi depodan mı? | **ASSUMPTION:** Baristanın Store Operations ekranındaki ürün listesinden tek dokunuşla o şube için ürünü veya özelleştirmeyi `unavailable` yapabilmesi ve bu durumun anında AI Barista ve Mobil Menüye yansıması mimari olarak hedeflenmiştir. | **NO** | **YES** | Store Ops Geliştirme Fazı |
| **DEC-12** | **Besin Değerleri ve Alerjen Doğrulaması:** Menüdeki ürünlerin kalori, makrolar (protein/yağ/karb), kafein seviyesi ve alerjenleri kim tarafından sisteme girilecek/onaylanacak? | **ASSUMPTION:** Admin panel bilgi mimarisinde bu alanlar için veri alanları planlandı. Diyetisyen/barista şefi tarafından sağlanacağı varsayılmaktadır. | **NO** | **YES** | Canlı Menü Girişi Öncesi |
| **DEC-13** | **Kimlik Doğrulama Zamanlaması (Auth Timing):** Müşteri uygulamayı açar açmaz mı login olmalı, yoksa sepet aşamasında mı? | **ASSUMPTION:** Starbucks benzeri en iyi UX pratiği uygulanacak: Menü ve AI Barista'yı keşfetmek misafire (guest) açık; sepeti onaylayıp ödeme adımına geçerken kayıt/giriş zorunludur. | **NO** | **YES** *(UX onayı)* | Phase 1 (UX Flow) |

---

### Karar Alma Prosedürü

1. **Öncelikli Blocker'lar:** DEC-02 (Ödeme sağlayıcısı), DEC-05 (Nihai menü) ve DEC-10 (Çalışma saatleri) canlıya çıkışın ön koşuludur.
2. **Prototype Geliştirme:** Hiçbir soru prototipin başlamasını engellemez (`Blocks Prototype? = NO`). Tüm konular için güvenli endüstri standardı varsayımlar atanmıştır.
