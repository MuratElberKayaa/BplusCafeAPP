# B+ Wellness Café — Store Operations (KDS) Flow

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** APPROVED FOR PHASE 1 (FROZEN CANDIDATE)  
**Referans:** [docs/architecture/ADR-003-POS-ADAPTER.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/ADR-003-POS-ADAPTER.md) (Phase 0 FROZEN)

---

## 1. Genel Bakış ve Operasyonel Amaç

Store Operations (KDS), baristaların mağaza tezgahındaki tablet veya dokunmatik monitör üzerinden gelen dijital siparişleri hatasız ve hızlı şekilde yönetmelerini sağlayan web tabanlı mutfak operasyon ekranıdır.

Fiziksel POS'tan bağımsız olarak çalışır (`ADR-003`) ve siparişlerin durum geçişlerini deterministik bir durum makinesi (State Machine) üzerinden yönetir.

---

## 2. Ekran Envanteri (Screen Layouts)

### 2.1. Sipariş Panosu Ekranı (Order Board Screen)
- **Yapı:** Yüksek kontrastlı, büyük dokunma hedeflerine sahip yatay Kanban panosu.
- **Sütunlar:**
  1. **YENİ / ONAYLANDI (`NEW / CONFIRMED`):** Ödemesi doğrulanmış, hazırlanmayı bekleyen siparişler.
  2. **HAZIRLANIYOR (`PREPARING`):** Baristanın tezgaha aldığı siparişler (geçen süre sayacı renk kodludur).
  3. **HAZIR (`READY`):** Bardak hazırlanmış, tezgahta bekleyen ve müşteriye push bildirimi gitmiş siparişler.
  4. **TAMAMLANDI (`COMPLETED`):** Müşteriye teslim edilmiş son siparişler.
- **Header Aksiyonları:**
  - Sesli uyarı açık/kapalı anahtarı.
  - "86 / Hızlı Stok Aç/Kapa" modal butonu.
  - Şube durumu: *Açık (Sipariş Alınıyor)*.

### 2.2. Sipariş Detay Çekmecesi (Order Detail Drawer)
Bir sipariş kartına dokunulduğunda açılır:
- Müşteri Adı ve Sipariş Numarası (`#B-108`).
- Kalem bazında ürünler ve **özelleştirmelerin belirgin gösterimi**:
  - *Golden Turmeric Oat Latte (Büyük)*
    - **[!] Süt: Yulaf Sütü**
    - **[!] Tatlılık: Şekersiz (%0)**
    - **[+] Ekstra: Kolajen Peptit**
- Aksiyon butonları: `[ Hazırlamaya Başla ]`, `[ Hazır Olarak İşaretle ]`, `[ Teslim Et / Tamamla ]`, `[ Sorun Bildir / İptal ]`.

---

## 3. Sipariş Durum Makinesi ve Eylemler (State Machine & Actions)

```
        +-------------------------------------------------------+
        |                  ONLINE ÖDEME ONAYI                   |
        +---------------------------+---------------------------+
                                    |
                                    v
                         +--------------------+
                         |   NEW / CONFIRMED  |
                         +---------+----------+
                                   |
                                   | Aksiyon: START PREPARING
                                   v
                         +--------------------+
                         |     PREPARING      |
                         +---------+----------+
                                   |
                                   | Aksiyon: MARK AS READY (FCM Push Tetikler)
                                   v
                         +--------------------+
                         |       READY        |
                         +---------+----------+
                                   |
                                   | Aksiyon: COMPLETE ORDER
                                   v
                         +--------------------+
                         |     COMPLETED      |
                         +--------------------+
```

### Durum Geçiş Tablosu (Valid State Transitions)

| Mevcut Durum | Tetikleyici Eylem | Hedef Durum | Tetiklenen Sistem Aksiyonları |
| :--- | :--- | :--- | :--- |
| `NEW / CONFIRMED` | **START PREPARING** | `PREPARING` | Süre sayacı başlar. Müşteri siparişi iptal edemez hale gelir. |
| `PREPARING` | **MARK AS READY** | `READY` | Müşteriye FCM Push bildirimi gider: *"Siparişiniz #B-108 tezgahta hazır!"*. KDS kartı READY sütununa taşınır. |
| `READY` | **COMPLETE ORDER** | `COMPLETED` | Müşteri teslim aldı. Sipariş arşivlenir. `RewardsModule` tetiklenir (`REWARD EARNED - RULE TBD`). |
| `NEW` veya `PREPARING` | **CANCEL** | `CANCELLED` | Sadece yetkili barista/yönetici iptal edebilir. *(İade Politikası: REFUND POLICY TBD - DEC-07)*. |

---

## 4. Geçersiz Durum Geçişleri (Invalid Status Transitions & Guards)

Sistem aşağıdaki mantıksal hatalı geçişleri **kesinlikle engeller**:

1. **`NEW` ➔ `READY` (Doğrudan Hazıra Atlama Engeli):** Bir sipariş hazırlanma aşamasına alınmadan doğrudan hazır yapılamaz.
2. **`NEW` ➔ `COMPLETED` (Hazırlanmadan Teslim Engeli):** Hazırlanmamış ve tezgahta beklemeyen sipariş doğrudan teslim edildi yapılamaz.
3. **`COMPLETED` ➔ `PREPARING` / `READY` (Geriye Dönüş Engeli):** Tamamlanmış ve puanı yüklenmiş bir sipariş geri alınamaz.
4. **`CANCELLED` ➔ `PREPARING` (İptal Edilmiş Siparişi Canlandırma Engeli):** İptal edilen sipariş tekrar mutfağa alınamaz.

---

## 5. Hızlı Stok Yönetimi ("86 Board / Quick Out of Stock")

Baristanın tezgahta tükenen bir malzemeyi anında kapatabilmesi için:
- Barista ekrandaki kırmızı **"86 / Hızlı Stok"** butonuna basar.
- Modalda malzeme ve ürün listesi açılır (`Yulaf Sütü`, `Buz`, `Cold Brew Konsantresi` vb.).
- Barista "Tükendi"ye bastığında:
  1. `store_products.is_available = false` olarak güncellenir.
  2. Redis menü cache'i anında temizlenir.
  3. Müşteri mobil menüsünde ürünün üstüne "Tükendi" rozeti gelir ve AI Barista öneri havuzundan derhal çıkarılır (`ADR-004`).
