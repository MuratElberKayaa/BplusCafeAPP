# B+ Wellness Café — Admin Panel Flow & Management

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** APPROVED FOR PHASE 1 (FROZEN CANDIDATE)  
**Referans:** [docs/product/PRODUCT_DEFINITION.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/product/PRODUCT_DEFINITION.md), [docs/architecture/DOMAIN_BOUNDARIES.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/DOMAIN_BOUNDARIES.md)

---

## 1. Genel Bakış ve Yönetim Rolleri

Admin Panel, genel merkez yöneticilerinin, şube müdürlerinin ve operasyon ekiplerinin menü, ürün, sipariş, müşteri, sadakat kuralı ve AI parametrelerini merkezi olarak yapılandırdığı Next.js tabanlı web yönetim konsoludur.

Roller:
- `ADMIN`: Tüm sisteme, menüye, kural motorlarına ve ayarlara tam yetki.
- `STORE_MANAGER`: Şube çalışma saatleri, ürün stok aç/kapa ve şube sipariş raporlarına erişim.

---

## 2. Ekran Envanteri & Akış Detayları (8 Ekran)

```
[ ADMIN LOGIN ]
       │
       ▼
[ 1. DASHBOARD SCREEN ] ───► Günlük özet metrikler, sipariş hacmi, yoğun saatler
       │
       ├──► [ 2. MENU SCREEN ] ────────────► Kategori ağacı, sıralama, yeni kategori ekleme
       │
       ├──► [ 3. PRODUCTS SCREEN ] ────────► Ürün listesi, filtreler, Ürün Ekle / Düzenle Modalı
       │         │
       │         └── [ PRODUCT FORM TABS ]:
       │             ├── Tab 1: Temel Bilgiler (Ad, Açıklama, Görsel, Fiyat)
       │             ├── Tab 2: Availability & Şube Stok Yönetimi
       │             ├── Tab 3: Customization Grupları (Boyut, Süt, Şurup, Boost)
       │             ├── Tab 4: Ingredients & Reçete (Bileşenler)
       │             ├── Tab 5: Allergens & Güvenlik (Gluten, Laktoz, Fındık vb.)
       │             ├── Tab 6: Nutrition (Kalori, Protein, Karb, Şeker, Yağ)
       │             └── Tab 7: AI Metadata (Kafein mg, Tatlılık, Yoğunluk, Tat Etiketleri)
       │
       ├──► [ 4. ORDERS SCREEN ] ──────────► Filtreli sipariş günlüğü, müşteri geçmişi
       │                                     └── İade Aksiyonu: [ TBD / DISABLED UNTIL POLICY CONFIRMED - DEC-07 ]
       │
       ├──► [ 5. USERS SCREEN ] ───────────► Kayıtlı müşteriler, roller, hesap kilitleme/açma
       │
       ├──► [ 6. REWARDS SCREEN ] ─────────► Dinamik puan kuralı tanımlama (RULE TBD - Configurable Engine)
       │
       ├──► [ 7. AI SETTINGS SCREEN ] ─────► Guardrail eşikleri, pgvector embedding senkronizasyonu
       │
       └──► [ 8. SETTINGS SCREEN ] ────────► Şube çalışma saatleri, yapılandırılabilir cut-off süresi
```

---

## 3. Ürün Yönetimi Detay Akışı (Product Management Flow)

Bir ürünün sisteme eklenmesi veya düzenlenmesi 7 yapılandırılmış sekme üzerinden yürütülür:

### 3.1. Temel Bilgiler (Base Info)
- Ürün Adı, Kategori Seçimi, Baz Fiyat, Görsel CDN yüklemesi, Pazarlama açıklaması.

### 3.2. Stok ve Mevcudiyet (Availability)
- Global Durum: `Aktif` / `Pasif`.
- Şube Bazlı Durum (`StoreProductAvailability`): Pilot şube için anlık stok durumu anahtarı (`In Stock` / `Out of Stock`).

### 3.3. Özelleştirme Grupları (Customization Groups)
Ürüne hangi ekleme gruplarının bağlanacağı seçilir (Boyut, Süt Seçimi, Şurup, Wellness Boost vb.).

### 3.4. İçerik & Reçete (Ingredients)
Ürünün bileşenleri etiket olarak listelenir (Örn: `Organik Zerdeçal`, `Zencefil Ekstresi`, `Yulaf Sütü`).

### 3.5. Alerjenler (Allergens)
İlgili alerjen kutuları işaretlenir (`Gluten`, `Laktoz`, `Soya`, `Fındık` vb.).

### 3.6. Besin Değerleri (Nutrition Facts)
Porsiyon başına değerler girilir (Kalori, Protein, Karbonhidrat, Şeker, Yağ, Lif).

### 3.7. AI & Wellness Metadata
AI Barista'nın vektör eşleşmesi ve filtrelemesi için gerekli zengin veri seti:
- Kafein Seviyesi (mg), Tatlılık Skoru (1-5), Yoğunluk Skoru (1-5), Sıcaklık Desteği (`HOT_AND_COLD`), Tat Etiketleri (`tasteTags`), Beslenme Etiketleri (`dietaryTags`).

---

## 4. Sadakat ve Kampanya Kuralı Yönetimi (Rewards Management Flow)

Hardcoded kural yasağı gereğince sadakat kuralları parametrik yönetilir:
- **Kural Türü:** Harcama bazlı, sipariş adedi bazlı veya kampanya çarpanı.
- **Kural Statüsü:** `RULE TBD / DEMO_RULE: NON-PRODUCTION`.
- Kesin kural işveren onayından sonra konfigüre edilecektir (`DEC-04`).

---

## 5. Şube Ayarları Akışı (Store Settings Flow)

- Gün bazlı çalışma saatleri: Pazartesi-Cuma, Cumartesi-Pazar saat pencereleri.
- **Sipariş Kesilme Süresi (`order_cutoff_minutes`):** `Configurable` (Örnek test değeri: 15 dakika — `DEMO VALUE ONLY`). Nihai değer işveren onayına tabidir (`DEC-10`).
- **Varsayılan Hazırlık Tamponu:** Yapılandırılabilir dakika.
