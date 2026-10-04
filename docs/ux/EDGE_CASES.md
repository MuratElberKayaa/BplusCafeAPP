# B+ Wellness Café — Comprehensive Edge Cases & Failure Modes

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** APPROVED FOR PHASE 1 (FROZEN CANDIDATE)  
**Referans:** [docs/product/RISK_REGISTER.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/product/RISK_REGISTER.md)

Bu doküman, B+ platformundaki olası sınır durumları (Edge Cases), sistem kesintilerini ve bunların mimari/UX çözüm mekanizmalarını tanımlar.

---

## 1. Mağaza & Çalışma Saatleri ile İlgili Sınır Durumlar

### EC-01: Mağaza Kapalıyken Sipariş Verme Girişimi
- **Tetikleyici:** Kullanıcı çalışma saatleri dışındayken sepeti onaylamaya çalışır.
- **Sistem Davranışı:** `GET /stores/pilot/status` şubenin kapalı olduğunu döndürür.
- **UX Aksiyonu:** "Siparişi Tamamla" butonu pasifleşir. Bilgi kartı gösterilir: *"B+ Pilot Şube şu anda kapalıdır. Çalışma saatlerimizde sizi bekliyoruz!"*. Kullanıcı menüyü inceleyebilir.

### EC-02: Kapanıştan Hemen Önce Sipariş (Cutoff Penceresi)
- **Tetikleyici:** Şube kapanışına yapılandırılabilir `order_cutoff_minutes` süresinden az kalmıştır (Örnek: 15 dakika — `DEMO VALUE ONLY`).
- **Sistem Davranışı:** Kapanış hazırlığı başladığı için sipariş kabulü otomatik durdurulur.
- **UX Aksiyonu:** *"Kapanış hazırlığı sebebiyle bu akşam için son mobil siparişler tamamlanmıştır."* uyarısı sunulur.

---

## 2. Ürün & Stok Durumu Sınır Durumları

### EC-03: Sepette Beklerken Malzemenin Tükenmesi (Stock Race Condition)
- **Tetikleyici:** Kullanıcı sepetine ekledikten sonra barista KDS üzerinden ilgili sütü veya malzemeyi "Unavailable" yapar.
- **Sistem Davranışı:** Checkout validasyonunda `409 Conflict - Item Unavailable` döner.
- **UX Aksiyonu:** Sepet korunur; tükenen kalemin altında uyarı belirir: *"Seçilen malzeme az önce tükendi. Lütfen başka bir alternatif seçiniz."*.

### EC-04: AI Barista'nın Menüde Eşleşen Ürün Bulamaması
- **Tetikleyici:** Kullanıcı aşırı kısıtlayıcı bir istek girer (Örn: *"Kerevizli, sıcak, 600 kalori tatlı kahve"*).
- **Sistem Davranışı:** PostgreSQL ve pgvector eşleşme skoru eşiğin altında kalır.
- **UX Aksiyonu:** Asistan menü dışı hayali tarif uydurmaz. Fallback cevabı verir: *"Tam aradığın tarife uyan bir ürünümüz şu an menüde yok; ancak tatlı ve zengin lezzet profili için Salted Caramel Latte veya besleyici Matcha içeceğimize göz atmak ister misin?"*.

---

## 3. Ödeme, Ağ ve Güvenlik Sınır Durumları

### EC-05: Mükerrer Tıklama (Double-Tap / Rapid Submit)
- **Tetikleyici:** Kullanıcı zayıf internette "Ödemeyi Yap" butonuna peş peşe basar.
- **Sistem Davranışı:** İstemci ilk dokunuşta butonu disabled yapar. Header'da tek bir `Idempotency-Key` (UUIDv4) gönderilir. Backend Redis distributed lock ile mükerrer istekleri bloke eder.
- **UX Aksiyonu:** Kullanıcı tek bir tahsilat yaşar ve tek bir sipariş oluşturulur.

### EC-06: Ödeme Sırasında Ağ Kesintisi (Network Drop During Payment)
- **Tetikleyici:** 3D Secure doğrulaması yapıldı ancak bankadan dönerken kullanıcının telefonu sinyal kaybetti.
- **Sistem Davranışı:** Ödeme sağlayıcısının webhook'u backend'e arka planda ulaşır ve sipariş `CONFIRMED` statüsüne geçer.
- **UX Aksiyonu:** İnternet geldiğinde aktif sipariş algılanır ve doğrudan "Sipariş Takip" ekranı açılır.

### EC-07: Yetersiz Sandbox Cüzdan Bakiyesi
- **Tetikleyici:** Sepet tutarı 180 TL, kullanıcının sandbox cüzdan bakiyesi 50 TL.
- **Sistem Davranışı:** Cüzdan ile ödeme butonu pasif görünür.
- **UX Aksiyonu:** *"B+ Cüzdan bakiyeniz yetersiz (50 TL). Lütfen test bakiyesi yükleyin veya Kredi Kartı seçiniz."* yönlendirmesi sunulur.

---

## 4. Sipariş Yaşam Döngüsü & Mağaza İçi Sınır Durumlar

### EC-08: Hazırlanmaya Başlandıktan Sonra İptal Girişimi
- **Tetikleyici:** Barista KDS'te siparişi `PREPARING` durumuna almıştır. Müşteri siparişi iptal etmek ister.
- **Sistem Davranışı:** Sipariş durumu `PREPARING` olduğu için müşteri iptal isteği `400 Bad Request` döner.
- **UX Aksiyonu:** Mobil iptal butonu gizlenir: *"Kahveniz hazırlanmaya başlandığı için mobil iptal yapılamamaktadır. Lütfen barista ile iletişime geçiniz."*.

### EC-09: Siparişin Mağazadan Teslim Alınmaması (No-Show)
- **Tetikleyici:** Sipariş hazırlandı (`READY`), müşteri 45 dakika boyunca teslim almaya gelmedi.
- **Sistem Davranışı:** Sipariş `COMPLETED_UNCLAIMED` statüsünde arşivlenir; iade politikası: `REFUND POLICY TBD (DEC-07)`.

### EC-10: KDS Tabletinin İnternet Bağlantısının Kopması
- **Tetikleyici:** Mağazadaki Wi-Fi geçici olarak kesildi.
- **Sistem Davranışı:** KDS arayüzü `RECONNECTING` moduna geçer, ekranda kırmızı uyarı bandı belirir.
- **İyileşme:** Bağlantı kurulduğunda `GET /ops/orders` ile sunucudaki son durum çekilir ve ekran senkronize edilir.

---

## 5. Güvenlik & Kötüye Kullanım Sınır Durumları

### EC-11: AI Prompt Injection ve Manipülasyon Girişimi
- **Tetikleyici:** Kullanıcı asistan arayüzüne sistem promptunu sızdırmaya veya sistem kurallarını delmeye yönelik metin yazar.
- **Sistem Davranışı:** Guardrail katmanı devreye girer; istek sipariş dışı kabul edilir.
- **UX Aksiyonu:** Asistan güvenli ve standart bir barista yanıtı üretir: *"Ben sadece B+ menüsündeki içecekler hakkında yardımcı olabiliyorum. Sana enerji verecek bir içecek bakalım mı?"*.

### EC-12: Sepet Manipülasyonu ve Negatif Fiyat Gönderimi
- **Tetikleyici:** Kötü niyetli kullanıcı sepete negatif adet (`quantity: -1`) veya değiştirilmiş baz fiyat göndermeye çalışır.
- **Sistem Davranışı:** Backend istemciden gelen fiyata güvenmez; tutarı sunucu tarafında baştan hesaplar. Negatif adet istekleri reddedilir.
