# ADR-002: Payment Provider Abstraction & Idempotency Strategy

**Konu:** Sağlayıcıdan Bağımsız Ödeme Mimarisi, Idempotency ve Webhook Güvenliği  
**Tarih:** 2026-09-29  
**Statü:** ACCEPTED  
**Karar Vericiler:** Solution Architect, Senior Backend Engineer, FinTech Consultant  

---

## 1. Bağlam ve Problem Tanımı (Context)

Projenin Phase 0 aşamasında işletmenin hangi banka Sanal POS'u veya hangi ödeme geçidi (Iyzico, PayTR, Sipay, Garanti vb.) ile anlaşacağı henüz kararlaştırılmamıştır. 

Buna ek olarak:
1. Finansal işlemlerde kredi kartı bilgilerinin bizim sunucularımızda saklanması yasal olarak PCI-DSS standartları gereği ağır cezai ve denetim sorumlulukları getirir.
2. Mobil ağ kesintileri ve kullanıcıların arka arkaya "Öde" butonuna basması (double-click) mükerrer tahsilat riskine yol açabilir.
3. Ödeme sağlayıcılarının asenkron webhook bildirimlerinin ağ gecikmeleri veya retry mekanizmaları sebebiyle birden fazla kez gelmesi durumunda siparişin mükerrer onaylanması veya sadakat puanlarının iki kez yüklenmesi riski mevcuttur.

---

## 2. Karar (Decision)

1. **Ödeme Soyutlama Katmanı (Payment Abstraction Layer):**
   - Backend `PaymentModule`, doğrudan hiçbir sağlayıcının SDK'sına bağlanmayacaktır.
   - Tüm ödeme işlemleri `PaymentProvider` arayüzü (Interface) arkasında soyutlanacaktır.
   - Prototip V1 için `MockPaymentProvider` (Sandbox ortamı) kullanılacaktır.

2. **Hassas Kart Verisi Saklama Yasağı (PCI-DSS Zero-Card Rule):**
   - Kredi kartı numarası (PAN), CVV/CVC ve son kullanma tarihi kesinlikle B+ Backend veritabanında saklanmayacaktır ve sunucu loglarına yazılmayacaktır.
   - Ödeme akışı ya sağlayıcının güvenli form/iFrame yapısıyla ya da doğrudan istemciden tokenize edilen kart referansı (`cardToken`) ile yönetilecektir.

3. **İki Aşamalı Sipariş Doğrulama:**
   - Bir sipariş asla istemcinin "ödeme başarılı" iddiasıyla `CONFIRMED` statüsüne geçirilmez.
   - Sipariş ancak backend'in ödeme sağlayıcısından aldığı imzalı webhook veya 3D Secure callback doğrulaması sonrasında onaylanır.

4. **Idempotency Mekanizması:**
   - İstemci `POST /orders/checkout` isteğinde benzersiz bir `Idempotency-Key` (UUIDv4) göndermek zorundadır.
   - Bu anahtar Redis üzerinde işlem süresince kilitlenir (`SET key NX EX 60`). Aynı anahtarla gelen mükerrer istekler ilk işlemin sonucunu bekler veya reddedilir.

---

## 3. Mimari Tasarım ve Arayüz Kontratı

### 3.1. Provider Interface Tanımı

```typescript
export interface PaymentInitRequest {
  orderId: string;
  amount: number;
  currency: string;
  customer: {
    id: string;
    email: string;
    ip: string;
  };
  idempotencyKey: string;
  callbackUrl: string;
}

export interface PaymentInitResult {
  paymentId: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REQUIRES_3D';
  redirectUrl?: string; // 3D Secure veya iFrame URL
  rawResponse?: Record<string, any>;
}

export interface PaymentWebhookPayload {
  paymentId: string;
  externalTransactionId: string;
  status: 'SUCCESS' | 'FAILED';
  paidAmount: number;
  signature: string;
  rawPayload: any;
}

export interface PaymentProvider {
  initializePayment(request: PaymentInitRequest): Promise<PaymentInitResult>;
  verifyWebhook(payload: PaymentWebhookPayload): Promise<boolean>;
  refundPayment(paymentId: string, amount: number, reason: string): Promise<boolean>;
}
```

### 3.2. Uygulama Sınıfları (Implementations)
- `MockPaymentProvider` *(Phase 1 — Prototype)*: Ağ çağrısı yapmadan başarılı/başarısız senaryoları simüle eder, test webhook'ları tetikler.
- `IyzicoPaymentProvider` *(Gelecek)*: Iyzico Checkout Form / API v2 adapter.
- `PayTRPaymentProvider` *(Gelecek)*: PayTR iframe ve hash doğrulama adapter.
- `BankPosPaymentProvider` *(Gelecek)*: Doğrudan banka VPAS (Virtual POS) entegrasyonu.

---

## 4. Webhook Güvenliği ve Mükerrer İşlem Koruması

```
+---------------+              +-------------------+              +-------------------------+
| Payment       |  POST Webhook| NestJS            |  Idempotent  | PostgreSQL              |
| Provider (GW) +------------->| Webhook Controller+------------->| processed_webhook_events|
+---------------+              +---------+---------+              +------------+------------+
                                         |                                     |
                                         | 1. İmza Doğrulama (HMAC/SHA256)     | 2. Event ID Kayıt
                                         |                                     v
                                         +--------------------------------> [ Event Var mı? ]
                                                                               |
                                                  +----------------------------+----------------------------+
                                                  | YES (Zaten İşlendi)                                     | NO (Yeni Event)
                                                  v                                                         v
                                            HTTP 200 OK Dön                                           Transaction Başlat:
                                            (İşlem Yapma)                                             - Order -> CONFIRMED
                                                                                                      - Store Ops KDS Bildir
                                                                                                      - FCM Push Gönder
                                                                                                      - HTTP 200 OK Dön
```

---

## 5. Sonuçlar ve Değerlendirme (Consequences)

1. **Esneklik:** İşveren ilerleyen süreçte hangi banka veya sağlayıcı ile ticari anlaşma yaparsa yapsın, çekirdek sipariş mantığı değişmeden yeni provider adaptör sınıfı ile entegre edilebilecektir.
2. **Finansal Güvenlik Mimarisi:** İdempotency anahtarı ve transaction tasarımı sayesinde çifte tahsilat veya mükerrer sipariş işleme riskleri mimari olarak hedeflenmiştir. Uygulama ve doğrulama testleri Ödeme Entegrasyonu fazında icra edilecektir.
3. **PCI-DSS Kapsamı:** 
   - Kredi kartı verileri kesinlikle B+ backend sunucularında saklanmayacaktır.
   - Tokenized veya sağlayıcı tarafından barındırılan (hosted checkout / iframe) akışlar tercih edilecektir.
   - Nihai PCI-DSS kapsamı seçilen ödeme sağlayıcısına ve entegrasyon yöntemine bağlıdır; kesin kapsam Ödeme Entegrasyonu fazında doğrulanmalıdır.
