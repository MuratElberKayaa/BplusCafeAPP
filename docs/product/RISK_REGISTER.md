# B+ Wellness Café Digital Platform — Risk Register

**Doküman Sürümü:** 1.0.0 (Phase 0 — Foundation)  
**Tarih:** 2026-09-29  
**Statü:** ACTIVE  

Bu doküman, B+ Wellness Café projesinin teknik, operasyonel, yasal ve ürün boyutundaki risklerini, bunların gerçekleşme olasılıklarını, iş etkilerini ve teknik hafifletme (mitigation) stratejilerini tanımlar.

---

| ID | Risk Tanımı | Olasılık (Probability) | Etki (Impact) | Mitigation (Teknik / Operasyonel Önlem) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RISK-01** | **Real Money Wallet (Gerçek Parasal Cüzdan Yasal ve Finansal Riski):** Gerçek para bakiye modeli, 6493 sayılı Kanun ve TCMB düzenlemeleri kapsamında işveren, lisanslı ödeme/elektronik para kuruluşu ve gerektiğinde hukuk danışmanı ile doğrulanmalıdır. | Yüksek | Kritik | **Phase 0 Kararı:** Gerçek para cüzdanı production geliştirmesi ONAYLANMAMIŞTIR. Prototipte cüzdan arayüzü ve akışı yalnızca "Sandbox / Test Bakiyesi" ile simüle edilecektir. Canlıya geçişte işveren, ödeme kuruluşu ve yasal inceleme şarttır (EMPLOYER + PAYMENT PROVIDER + LEGAL/REGULATORY REVIEW REQUIRED). | **OPEN** *(Blocks Production, Does NOT Block Prototype)* |
| **RISK-02** | **Unknown POS (Bilinmeyen Fiziksel Kasa / POS Entegrasyonu):** Mağazadaki fiziksel kasa yazılımının API desteğinin olmaması, kapalı devre çalışması veya entegrasyon maliyetinin yüksek olması. | Yüksek | Yüksek | **Adapter & Store Operations Modeli:** Backend `PosProvider` soyutlaması üzerinden tasarlanır. İlk fazda mağaza operasyonunun doğrudan Store Operations (KDS Tablet) ekranı üzerinden yürütülmesi planlanmıştır. Fiziksel POS adaptörü (`FutureExternalPosProvider`) tak-çıkar mimaride tanımlanmıştır. | **MITIGATION DESIGNED** |
| **RISK-03** | **Unknown Payment Provider (Ödeme Altyapısı Belirsizliği):** Henüz Sanal POS veya aracı kurum (Iyzico, PayTR, Banka) sözleşmesinin tamamlanmamış olması ve entegrasyon sürelerinin uzaması. | Yüksek | Yüksek | **Payment Abstraction:** Backend üzerinde generic `PaymentProvider` interface mimarisi tasarlandı. Prototip fazı `MockPaymentProvider` üzerinden tüm adımları simüle edecek şekilde planlanmıştır. Sağlayıcı seçildiğinde ilgili adaptör eklenecektir. | **MITIGATION DESIGNED** |
| **RISK-04** | **Final Menu Missing (Kesinleşmemiş Menü ve Fiyatlar):** Mağaza açılışına kadar menünün, reçetelerin ve fiyatların değişebilme ihtimali. | Yüksek | Orta | **Dinamik Veritabanı Modeli:** Menü kod tabanında statik tutulmaz; ilişkisel şemada dinamik modellenir. Prototip/test sürecinde `[DEMO DATA — NON-PRODUCTION — TO BE REPLACED BY EMPLOYER MENU]` etiketli örnek veri kullanılacaktır. | **MITIGATION DESIGNED** |
| **RISK-05** | **Rewards Model Missing (Eksik Sadakat / Puanlama Formülü):** Müşteriye verilecek puanlama veya yıldız mantığının henüz kararlaştırılmamış olması. | Yüksek | Düşük | **Kural Tabanlı Parametrik Motor:** Backend `RewardsModule` sabit formüllere (`1 TL = 1 Puan` gibi) kilitlenmez. Konfigüre edilebilir strateji deseni (`RewardsStrategy`) tasarlandı. Prototipte `DEMO_RULE` simülasyonu planlanmıştır. | **MITIGATION DESIGNED** |
| **RISK-06** | **Store Workflow Not Tested (Mağaza Operasyon Akışının Sahada Test Edilmemesi):** Şubenin henüz inşaat halinde olması nedeniyle baristaların yoğun saatlerde tablet kullanım ergonomisi ve sipariş hazırlama hızının canlı ortamda denenememiş olması. | Yüksek | Yüksek | **Store Ops Ergonomisi & Pilot Test:** Store Operations ekranı yüksek kontrastlı, dokunmatik dostu KDS prensibiyle tasarlanacaktır. Şube açılışından önce personel ile sahada simülasyon testleri planlanacaktır. | **OPEN** *(İnşaat bitimine bağlı)* |
| **RISK-07** | **AI Menu Hallucination (Yapay Zekanın Menü Dışı / Hayali İçecek Önermesi):** LLM'in menüde olmayan kahve adları veya tükenmiş malzemelerle içecek üretip müşteriyi yanıltma riski. | Orta | Yüksek | **AI Menu Grounding & Guardrails:** LLM nihai ürün kaynağı değildir; sadece niyet ve kısıt çıkarır. Çıkan filtreler PostgreSQL + pgvector ile stokta olan (`is_available = true`) ürünlerle filtrelenir ve doğrulanmış `productId` döner. Risk mimari olarak düşürülmüştür; nihai doğrulama ilerleyen AI/Hardening test fazlarında yapılacaktır. | **MITIGATION DESIGNED** |
| **RISK-08** | **Duplicate Payment Webhook / Race Conditions (Mükerrer Ödeme Bildirimi ve Tahsilat):** Ağ kesintileri veya ödeme sağlayıcısının aynı webhook bildirimini birkaç kez göndermesi sonucu siparişin mükerrer işlenmesi riski. | Orta | Yüksek | **Idempotency Keys & Database Transactions:** Her checkout işlemi için `Idempotency-Key` ve webhook işlemcisi için Redis kilit mekanizması ile `processed_webhook_events` mimarisi tasarlanmıştır. Uygulama ve doğrulama Ödeme / Hardening fazlarında yapılacaktır. | **MITIGATION DESIGNED** |
| **RISK-09** | **Product Availability Sync (Tükenen Ürünün Gerçek Zamanlı Eşzamanlanamaması):** Mağazada süt veya malzeme tükendiğinde mobil uygulamaya yansımaması riski. | Orta | Yüksek | **Instant Stock Invalidation & Real-Time Sync:** Baristanın KDS üzerinden ürünü "Unavailable" işaretlemesiyle Redis cache invalidation ve WebSocket/SSE bildirimi mimarisi tasarlanmıştır. Uygulama ve doğrulama Store Ops ve Entegrasyon fazlarında yapılacaktır. | **MITIGATION DESIGNED** |

---

### Risk Matrisi Özeti

```
YÜKSEK ETKİ | [RISK-02 Unknown POS]     [RISK-01 Real Money Wallet]
            | [RISK-03 Unknown Payment] [RISK-06 Store Workflow]
            | [RISK-07 AI Hallucination]
            | [RISK-08 Duplicate Webhook]
            | [RISK-09 Stock Sync]
------------+---------------------------------------------------
ORTA /      | [RISK-04 Final Menu]      
DÜŞÜK ETKİ  | [RISK-05 Rewards Model]   
            +---------------------------------------------------
              DÜŞÜK OLASILIK             YÜKSEK OLASILIK
```

- **Kritik Risk:** `RISK-01` (Real Money Wallet) kesin Phase 0 kararıyla production geliştirmesinden izole edilmiş, prototipte sandbox ile sınırlandırılmıştır (`Status: OPEN`).
- **Teknik Mitigasyonlar:** `RISK-02`, `03`, `04`, `05`, `07`, `08`, `09` için mimari hafifletme stratejileri tanımlanmıştır (`Status: MITIGATION DESIGNED`). Gerçek implementasyon ve doğrulamalar ilgili geliştirme fazlarında icra edilecektir.
