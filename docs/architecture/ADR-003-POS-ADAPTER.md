# ADR-003: POS Integration Strategy & Adapter Pattern

**Konu:** Bilinmeyen Kasa / POS Sistemi İçin Adaptör Mimarisi ve Store Operations KDS  
**Tarih:** 2026-09-29  
**Statü:** ACCEPTED  
**Karar Vericiler:** Solution Architect, Product Architect, Retail Operations Consultant  

---

## 1. Bağlam ve Problem Tanımı (Context)

B+ Wellness Café'nin ilk fiziksel şubesi şu anda inşaat halindedir. Mağazada hangi marka/model fiziksel kasa, mali yazar kasa (ÖKC) veya POS yazılımı (Simpra, Centum, Mikro, NarPOS vb.) kullanılacağı henüz işletme tarafından netleştirilmemiştir.

Eğer sistem mimarisi belirli bir POS yazılımına bağımlı tasarlanırsa:
- POS seçimi ve sözleşme süreci yazılım geliştirmesini tamamen bloke eder.
- POS firmalarının API entegrasyonu izinleri ve dokümantasyon eksiklikleri projeyi aylarca geciktirebilir.
- Gelecekte ikinci bir şubede farklı bir POS kullanılması gerekirse sistem çöker.

---

## 2. Karar (Decision)

1. **Bağımsız Mağaza Operasyon Ekranı (Store Operations KDS):**
   - Prototip ve ilk pilot mağaza için sistem harici bir POS API'sine bağımlı olmayacaktır.
   - Baristalar için özel olarak tasarlanmış responsive web uygulaması olan **Store Operations (Mutfak Ekranı / KDS)** ana operasyon arayüzü olacaktır.
   - Mobil uygulamadan gelen siparişler doğrudan bu ekrana düşecek; sipariş kabulü ve durum değişiklikleri bu ekrandan yapılacaktır.

2. **Adapter Deseni ile POS Soyutlaması (`PosProvider`):**
   - Sipariş yaşam döngüsü POS sistemine doğrudan bağlanmak yerine bir `PosProvider` kontratı arkasına alınacaktır.
   - Sipariş durumu değiştiğinde backend ilgili sağlayıcıya bildirim yapar.
   - İlk etapta `LocalOperationsProvider` adaptörü planlanmıştır.

---

## 3. Sipariş Akışı Mimarisi (Order Flow Comparison)

### 3.1. Prototip & Pilot Şube Akışı (Mevcut Karar)

```
[ Customer App ] 
       |
       | 1. Place Order & Pay
       v
[ NestJS Backend ] 
       |
       | 2. Emit OrderCreatedEvent
       v
[ PosAdapterModule ] 
       |
       | (Aktif: LocalOperationsProvider)
       v
[ Store Operations Web KDS ]
       | (Barista tableti: Sesli uyarı & Sipariş listesi)
       | 
       | 3. Barista tıklar: "PREPARING" -> "READY"
       v
[ NestJS Backend ]
       |
       | 4. FCM Push Notification
       v
[ Customer App: "Kahveniz hazır!" ]
```

### 3.2. Gelecekteki Hibrit Fiziksel POS Akışı

```
[ Customer App ]
       |
       v
[ NestJS Backend ]
       |
       +---> [ PosAdapterModule ]
                   |
                   | (Aktif: FutureExternalPosProvider)
                   v
             [ External POS Gateway API ]
                   |
                   v
             [ Fiziksel Kasa / Mali Fiş Yazıcısı ]
                   |
             (Eşzamanlı KDS Ekranı Güncellemesi)
```

---

## 4. Kod Arayüzü (Adapter Contract)

```typescript
export interface PosOrderPayload {
  orderId: string;
  orderNumber: string;
  storeId: string;
  customerName: string;
  items: Array<{
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    customizations: Array<{
      groupName: string;
      optionName: string;
      extraPrice: number;
    }>;
  }>;
  totalAmount: number;
  paymentStatus: 'PAID' | 'REFUNDED';
  createdAt: Date;
}

export interface PosProvider {
  /**
   * Siparişi POS sistemine iletir (KDS ekranına veya fiziksel kasaya)
   */
  dispatchOrder(order: PosOrderPayload): Promise<{ success: boolean; externalPosReference?: string }>;

  /**
   * POS'tan gelen sipariş durumu güncellemesini işler (örn: kasa kapandı/iptal)
   */
  handleStatusUpdate(externalReference: string, status: string): Promise<void>;

  /**
   * Mağaza stok ve ürün mevcudiyet durumunu senkronize eder
   */
  syncProductAvailability(storeId: string): Promise<Record<string, boolean>>;
}
```

### 4.1. Sağlayıcı Implementasyonları
- **`LocalOperationsProvider` (Planlanan Temel Adaptör):** Siparişleri veritabanına ve Redis Pub/Sub üzerinden anlık olarak Store Operations KDS web arayüzüne iletmek üzere tasarlanmıştır. Harici POS entegrasyonu gerektirmez.
- **`MockPosProvider`:** Birim ve entegrasyon testlerinde POS yanıtlarını ve hata senaryolarını taklit eder.
- **`FutureExternalPosProvider`:** Şube POS sistemi (örn: Simpra Rest API veya Mikro entegrasyonu) kesinleştiğinde yazılacak somut adaptördür.

---

## 5. Sonuçlar ve Avantajlar (Consequences)

1. **Sıfır Blokaj:** POS seçimi yapılmamış olsa dahi mobil uygulama, backend ve mağaza operasyonları eksiksiz geliştirilebilir ve test edilebilir.
2. **Kendi Kendine Yetebilen KDS:** Store Operations ekranı, bağımsız bir KDS (Kitchen Display System) olarak çalıştığı için fiziksel kasanın çökmesi durumunda dahi sipariş akışının kesilmemesini sağlar.
3. **Mali Fiş Ayrımı:** İleride mali onaylı e-Arşiv Fatura veya ÖKC entegrasyonu gerektiğinde, bu süreç `PosAdapter` veya `InvoiceService` üzerinden asenkron yönetilebilir.
