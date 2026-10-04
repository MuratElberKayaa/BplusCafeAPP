# B+ Wellness Café — AI Barista User Flow & Architecture Blueprint

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** APPROVED FOR PHASE 1 (FROZEN CANDIDATE)  
**Referans:** [docs/architecture/ADR-004-AI-MENU-GROUNDING.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/ADR-004-AI-MENU-GROUNDING.md) (Phase 0 FROZEN)

---

## 1. AI Barista Deneyim Akışı (Conceptual AI Flow)

AI Barista, kullanıcının serbest doğal dille belirttiği hisleri, enerji arayışını ve beslenme kısıtlarını anlayan; menüdeki doğrulanmış ürünlerle eşleştirip doğrudan sepete aktarılabilen öneri kartları sunan akıllı bir danışmandır.

> [!NOTE]
> AI Barista öneri sözleşmesi mimari olarak doğrulanmış `productId` değerlerine kısıtlanmıştır (Menu Grounding).
> Menü zeminlemesi, stok mevcudiyet filtrelemesi (`is_available = true`) ve çıktı doğrulaması zorunlu kontroller olarak tanımlanmıştır.
> Nihai etkinlik ve uç senaryo performansı Phase 8 (AI Barista Implementation) ve Phase 9 (Hardening) sırasında doğrulanacaktır.

```
[ HOME / BOTTOM TAB ]
        │
        ▼
[ 1. AI BARISTA CHAT SCREEN ]
        │ ├── Karşılama: "Merhaba! Bugün nasıl hissediyorsun veya neye ihtiyacın var?"
        │ └── Hızlı Başlangıç Çipleri (Starter Prompts)
        │
        ▼
[ 2. USER MESSAGE INPUT ] ──► "Öğleden sonra spora gideceğim, uykumu kaçırmayacak hafif tatlı bir şey öner."
        │
        ▼
[ 3. PREFERENCE EXTRACTION ] (LLM Intent & Slot Parsing -> AiPreference)
        │ ├── Intent: RECOMMENDATION
        │ ├── Constraints: Max caffeine: 60mg, Sweetness: Low/Medium, Goal: Pre-workout energy
        │ └── Extracted Query: "light pre workout functional energy low caffeine sweet"
        │
        ▼
[ 4. OPTIONAL CLARIFICATION ] ──► (Gerekirse: "Sıcak mı yoksa buzlu mu tercih edersin?")
        │
        ▼
[ 5. HARD FILTERS (SQL WHERE) ]
        │ ├── store_id = 'pilot_store'
        │ ├── is_available = true (Stokta olanlar)
        │ └── caffeine_mg <= 60
        │
        ▼
[ 6. MENU RETRIEVAL & VECTOR MATCHING ]
        │ └── pgvector Cosine Similarity: Ürün tat profili ile arama vektörü karşılaştırması
        │
        ▼
[ 7. RANKING & RECOMMENDATION ENGINE ]
        │ └── En yüksek skorlu 2-3 gerçek ürün seçilir
        │
        ▼
[ 8. STRUCTURED RECOMMENDATION CARD ] (AiRecommendation)
        │ ├── productId: "prod_102"
        │ ├── matchScore: 0.94
        │ ├── explanation: "Spor öncesi temiz enerji için zerdeçal ve yulaf sütlü bu harman tam sana göre!"
        │ └── matchedPreferences: ["Düşük Kafein", "Hafif Tatlı", "Pre-workout"]
        │
        ▼
[ 9. USER ACTION ] ──┬──► A) "Hemen Sepete Ekle" ─────────────► [ SEPETE EKLENDİ ]
                     │
                     └──► B) "İncele & Özelleştir" ───────────► [ PRODUCT DETAIL / CUSTOMIZE ]
                                                                      │
                                                                      ▼
                                                                [ CART ]
```

---

## 2. Arayüz ve Diyalog Adımları (Step-by-Step UX)

### Adım 1: Sohbet Başlangıcı & Hazır Öneri Hapları
- Kullanıcı alt menüden **AI Barista** sekmesine bastığında samimi bir sohbet ekranı karşılar.
- Üstte hızlı başlangıç için tıklanabilir haplar (Starter Chips) yer alır:
  - *⚡ "Spor öncesi enerji"*
  - *🧘 "Stres azaltıcı & kafeinsiz"*
  - *🍓 "Tatlı krizindeyim ama şekersiz"*
  - *🥛 "Laktozsuz & yüksek protein"*

### Adım 2: Kullanıcı Mesajı ve Niyet Çıkarımı
- Kullanıcı doğal dille yazar:
  > *"Bugün biraz yorgunum ama saat 16:00, gece uyuyabilmem lazım. Sütlü ve aromatik bir içecek var mı?"*
- Arka planda LLM intent ve filtre çıkarımı yaparak kavramsal `AiPreference` modelini üretir.

### Adım 3: Netleştirme Sorusu (Opsiyonel / Multi-Turn Clarification)
- Eğer kullanıcı girdisi çok belirsizse (Örn: *"Bana güzel bir kahve ver"*), asistan tek bir netleştirme sorusu sorar:
  > *"Harika! Günün bu saati için sıcak mı yoksa ferahlatıcı buzlu bir kahve mi istersin?"*

### Adım 4 & 5: Veritabanı Zeminlemesi & Filtreleme (Grounding)
- LLM doğrudan serbest ürün adı üretmez; çıkarılan parametreler SQL ve pgvector üzerinde sorgulanır:
  ```sql
  WHERE store_id = 'pilot_store' 
    AND is_available = true 
    AND caffeine_mg <= 40
  ```

### Adım 6: Zengin Öneri Kartı Sunumu (AiRecommendation Cards)
- Dönen her öneri kartı veritabanındaki geçerli bir `productId` taşır.
- Kart üzerinde ürün adı, görseli, eşleşme skoru, barista açıklaması ve "Hemen Ekle" / "Özelleştir" butonları yer alır.

---

## 3. Kavramsal AI Veri Modelleri (DRAFT MODEL — NON-PRODUCTION)

```typescript
/**
 * [DRAFT MODEL — NON-PRODUCTION]
 * Kullanıcının serbest metninden çıkarılan niyet ve kısıt modeli
 */
export interface AiPreference {
  milkPreference?: 'OAT' | 'ALMOND' | 'SOY' | 'DAIRY' | 'NONE';
  sweetness?: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';
  intensity?: 'MILD' | 'BALANCED' | 'STRONG';
  temperature?: 'HOT' | 'COLD' | 'ANY';
  caffeineExpectation?: 'ZERO' | 'LOW' | 'MEDIUM' | 'HIGH';
  dietaryPreferences?: string[]; // ["vegan", "dairy-free", "gluten-free"]
  tasteTags?: string[]; // ["nutty", "creamy", "spicy"]
}

/**
 * [DRAFT MODEL — NON-PRODUCTION]
 * AI Barista'nın menüden eşleştirip döndüğü yapılandırılmış öneri kartı
 */
export interface AiRecommendation {
  productId: string;
  productName: string;
  imageUrl: string;
  basePrice: number;
  matchScore: number; // 0.00 - 1.00
  explanation: string;
  matchedPreferences: string[];
  isAvailable: boolean;
}
```

---

## 4. Hata ve Uç Senaryolar (Edge Cases in AI Flow)

1. **Kullanıcının Menüde Karşılığı Olmayan Kısıt Belirtmesi:**
   - Asistan menü dışı hayali tarif uydurmaz. Mevcut menüdeki en yakın alternatifi sunar veya aranan içeriğin olmadığını nazikçe belirtir.
2. **Önerilen Ürünün Anlık Olarak Tükenmesi:**
   - Baristanın KDS'te tükendi işaretlediği ürün SQL filtresi (`is_available = true`) sayesinde öneri havuzundan derhal düşer.
3. **Kötü Niyetli / Konu Dışı İstekler (Prompt Injection & Jailbreak):**
   - Guardrail kuralları sipariş dışı konuları filtreleyerek nazikçe barista rolüne geri yönlendirir.
