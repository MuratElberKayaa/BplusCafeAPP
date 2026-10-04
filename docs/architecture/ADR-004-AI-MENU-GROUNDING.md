# ADR-004: AI Barista Menu Grounding & Guardrail Architecture

**Konu:** Yapay Zekanın Gerçek Menü Verisiyle Zeminlenmesi (Grounding), pgvector ve Halüsinasyon Önleme  
**Tarih:** 2026-09-29  
**Statü:** ACCEPTED  
**Karar Vericiler:** AI Product Engineer, Solution Architect, Senior Backend Engineer  

---

## 1. Bağlam ve Problem Tanımı (Context)

B+ Wellness Café'nin en önemli marka ayırt edici özelliklerinden biri, kullanıcıların ruh haline, enerji ihtiyacına ve beslenme kısıtlarına göre içecek ve fonksiyonel wellness ürünleri öneren **AI Barista** asistanıdır.

Geleneksel üretici yapay zeka (LLM) yaklaşımlarında karşılaşılan iki büyük teknik risk mevcuttur:
1. **Halüsinasyon (Hayali Ürün Uydurma):** LLM'e serbest metin üretme yetkisi verildiğinde, kafede fiziki olarak bulunmayan içecek adları (örn: "Lavanta Özlü Mavi Spirulina Latte") veya hazırlanamayacak reçeteler uydurabilir.
2. **Stok Senkronizasyonu Kopukluğu:** Menü prompt içine statik olarak gömülürse (hardcoded prompt), mağazada yulaf sütü veya matcha bittiğinde LLM bunu bilemez ve müşteriye tükenmiş bir ürünü tavsiye eder. Müşteri siparişi sepete ekleyip ödediğinde mağazada operasyonel kriz doğar.
3. **Prompt Şişmesi (Token Blowup):** Menüdeki onlarca ürün, varyant ve malzemenin her kullanıcı mesajında LLM promptuna metin olarak verilmesi yüksek token maliyeti ve kabul edilemez gecikme (latency) yaratır.

---

## 2. Karar (Decision)

1. **LLM Nihai Ürün Kaynağı Değildir (LLM is Not Source of Truth):**
   - LLM'in tek sorumluluğu **Kullanıcı Niyetini (Intent)** ve **Tercih Parametrelerini (Slots/Constraints)** serbest metinden çıkarmaktır.
   - Önerilecek ürünler yalnızca ve doğrudan **PostgreSQL + pgvector** üzerinde stokta (`is_available = true`) olan kayıtlar arasından seçilecektir.

2. **Dinamik Hibrit Sorgulama (SQL Filter + Vector Similarity):**
   - Menü asla LLM promptuna statik olarak gömülmeyecektir.
   - PostgreSQL üzerinde `pgvector` eklentisiyle ürünlerin tat, wellness faydası ve aromatik profillerini temsil eden embedding vektörleri tutulacaktır.
   - Sorgulama aşamasında:
     - *Hard Constraints (Katı Kriterler):* SQL `WHERE` koşulu olarak çalıştırılır (`is_available = true AND is_vegan = true AND caffeine_level <= 30`).
     - *Soft Preferences (Benzerlik / Zevk):* pgvector cosine distance (`<=>`) ile en yakın 3-5 aday ürün sıralanır.

3. **Gerçek Ürün Kimliği (productId) ile Eşleşme Güvencesi:**
   - AI Barista'nın kullanıcıya döndüğü her öneri, veritabanındaki geçerli bir `productId` ve geçerli `customizationOptions` ile bağlanır.
   - Mobil uygulamada kullanıcı önerinin yanındaki "Sepete Ekle" butonuna bastığında, doğrudan doğrulanmış ürün sepete aktarılır.

---

## 3. Uçtan Uca AI Barista Akış Mimarisi

```
+---------------------------------------------------------------------------------------------------+
|  [1] Kullanıcı Doğal Dil Girdisi                                                                   |
|      "Öğleden sonra spora gideceğim, uykumu kaçırmayacak, hafif tatlı ve laktozsuz bir şey öner." |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
|  [2] LLM Niyet & Kısıt Çıkarımı (Structured JSON Extraction via Guardrails)                      |
|      LLM Çıktısı:                                                                                 |
|      {                                                                                            |
|        "intent": "RECOMMENDATION",                                                                |
|        "temperature": "ANY",                                                                      |
|        "max_caffeine_mg": 60,                                                                     |
|        "dietary": ["DAIRY_FREE"],                                                                 |
|        "sweetness_level": "LOW_TO_MEDIUM",                                                        |
|        "purpose": "PRE_WORKOUT_LIGHT",                                                            |
|        "search_phrase": "light pre workout functional energy low caffeine plant milk sweet"       |
|      }                                                                                            |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
|  [3] PostgreSQL + pgvector Hibrit Arama Katmanı                                                   |
|      SELECT p.id, p.name, p.base_price,                                                          |
|             (p.embedding <=> $searchEmbedding) as similarity                                      |
|      FROM products p                                                                              |
|      JOIN store_products sp ON sp.product_id = p.id                                               |
|      WHERE sp.store_id = $storeId                                                                 |
|        AND sp.is_available = true                                                                 |
|        AND p.is_dairy_free = true                                                                 |
|        AND p.caffeine_mg <= 60                                                                    |
|      ORDER BY similarity ASC                                                                      |
|      LIMIT 3;                                                                                     |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
|  [4] Yanıt Üretimi & Doğrulama (Response Generation with Grounded Context)                         |
|      Sadece filtreden geçen 3 gerçek ürün LLM'e verilir:                                          |
|      - Golden Turmeric Oat Latte (ID: prod_102)                                                   |
|      - Matcha Glow Coconut Boost (ID: prod_204)                                                   |
|      LLM kullanıcıya samimi, barista tonunda bu ürünleri neden önerdiğini açıklar.                |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
|  [5] Mobil Uygulama & Sepet                                                                       |
|      Kullanıcı arayüzünde doğrulanmış ürün kartı + "Sepete Ekle (45 TL)" butonu belirir.          |
+---------------------------------------------------------------------------------------------------+
```

---

## 4. Stok Tükenmesi (Unavailable Item) Koruması

Eğer mağaza personeli Store Operations ekranından bir ürünü veya malzemeyi "Unavailable" (Tükendi) yaparsa:
1. `store_products.is_available` değeri anında `false` olur.
2. Redis üzerindeki aktif menü cache'i geçersiz kılınır (invalidate).
3. pgvector arama sorgusunda `sp.is_available = true` koşulu bulunduğu için AI Barista bir sonraki sorguda o ürünü aday listesinden filtreler.
4. Müşteriye tükenmiş ürün önerilme riski mimari seviyede düşürülür; uç senaryolar test fazlarında doğrulanacaktır.

---

## 5. Sonuçlar ve Değerlendirme (Consequences)

1. **Halüsinasyon Riskinin Mimari Olarak Azaltılması:** Sistem doğrudan serbest metin üretimi yerine pgvector menü eşleşmesi, productId doğrulaması, stok filtrelemesi ve guardrail kontrolleri ile zeminlenmiştir (grounding). Menüde olmayan hayali içecek uydurma riski mimari düzeyde minimize edilmiştir. Nihai doğrulama ve edge-case testleri Phase 8/9 AI ve hardening aşamalarında gerçekleştirilecektir.
2. **Düşük Maliyet ve Yüksek Hız:** Tüm menüyü prompta sokmak yerine küçük bir JSON çıkarma ve yerel veritabanı vektör araması yapıldığı için LLM token maliyeti önemli ölçüde düşer, yanıt süresi optimize edilir.
3. **Operasyonel Stok Uyumu:** Baristanın stokta yok olarak işaretlediği ürünlerin veritabanı filtresiyle öneri adaylarından çıkarılması hedeflenir.
