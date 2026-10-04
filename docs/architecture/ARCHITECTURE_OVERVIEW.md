# B+ Wellness Café Digital Platform — Architecture Overview

**Doküman Sürümü:** 1.0.0 (Phase 0 — Foundation)  
**Tarih:** 2026-09-29  
**Statü:** APPROVED  
**Mimari Yaklaşım:** Modular Monolith First  

Bu doküman, B+ Wellness Café platformunun uçtan uca sistem mimarisini, veri akışını, entegrasyon noktalarını ve altyapı bileşenlerini açıklar.

---

## 1. Yüksek Seviye Sistem Mimarisi (System Context Diagram)

Aşağıdaki metin diyagramı (C4 Container seviyesi), istemci uygulamaları, backend platformu, veri katmanı ve harici servisler arasındaki ilişkiyi gösterir:

```
+---------------------------------------------------------------------------------------------------------+
|                                             CLIENT APPLICATIONS                                         |
+---------------------------------------------------------------------------------------------------------+
|   [ Customer Mobile App ]          [ Store Operations (KDS) ]             [ Admin Panel (HQ) ]          |
|    - React Native / Expo            - Next.js / TypeScript                 - Next.js / TypeScript        |
|    - TypeScript                     - Tablet / Desktop Browser             - Desktop Browser             |
|    - iOS & Android                  - Barista / Mağaza Ekranı              - İşletme & Menü Yönetimi     |
+-------------------+----------------------------+----------------------------------+---------------------+
                    |                            |                                  |
                    | HTTPS / REST               | HTTPS / REST + SSE               | HTTPS / REST
                    v                            v                                  v
+---------------------------------------------------------------------------------------------------------+
|                                    API GATEWAY / REVERSE PROXY                                          |
|                                         (Nginx / Traefik)                                               |
+---------------------------------------------------------------------------------------------------------+
                                                 |
                                                 v
+---------------------------------------------------------------------------------------------------------+
|                                     BACKEND PLATFORM (NestJS API)                                       |
|                                         [ Modular Monolith ]                                            |
|                                                                                                         |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+         |
|  |     AuthModule     |  |     UserModule     |  |    StoreModule     |  |     MenuModule     |         |
|  | (JWT, RBAC Guards) |  | (Profile, Prefs)   |  | (Hours, Settings)  |  | (Categories, Items)|         |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+         |
|                                                                                                         |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+         |
|  |    OrderModule     |  |   PaymentModule    |  |   RewardsModule    |  |    WalletModule    |         |
|  | (State Machine,KDS)|  | (Provider Gateway) |  | (Rules & Points)   |  | (Sandbox Balances) |         |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+         |
|                                                                                                         |
|  +--------------------+  +--------------------+  +--------------------+                                 |
|  | NotificationModule |  |      AiModule      |  | PosAdapterModule   |                                 |
|  | (FCM Push Service) |  | (pgvector, Guard)  |  | (KDS & POS Sync)   |                                 |
|  +--------------------+  +--------------------+  +--------------------+                                 |
+-------------------+--------------------+-------------------+--------------------+-----------------------+
                    |                    |                   |                    |
                    v                    v                   v                    v
+---------------------------------------------------------------------------------------------------------+
|                                            DATA & CACHE LAYER                                           |
+---------------------------------------------------------------------------------------------------------+
|  [ PostgreSQL + pgvector ]                      [ Redis / Valkey ]                                      |
|   - İlişkisel veriler (Users, Orders, Payments)   - Session & JWT Blacklist                             |
|   - Menü & Özelleştirme Şeması                    - Menü ve Mağaza Çalışma Saatleri Cache                |
|   - pgvector: Ürün Tat/Wellness Vektörleri        - Distributed Lock & Idempotency Keys                 |
|   - Read/Write Transaction Bütünlüğü              - Pub/Sub (KDS canlı sipariş & stok invalidation)     |
+---------------------------------------------------------------------------------------------------------+
                                                 |
                                                 v
+---------------------------------------------------------------------------------------------------------+
|                                          EXTERNAL SERVICES LAYER                                        |
+---------------------------------------------------------------------------------------------------------+
|  [ Payment Provider ]       [ AI Provider ]         [ Push Notifications ]        [ Monitoring ]        |
|  - MockPaymentProvider      - LLM API               - Firebase Cloud Messaging   - Sentry               |
|    (Prototype V1)             (OpenAI/Gemini/Deep-    (FCM)                        (Error tracking &    |
|  - Future: Iyzico/PayTR/      Seek / Anthropic)     - Müşteri Durum Bildirimleri   Performance APM)     |
|    Banka Sanal POS          - Guardrail & Niyet                                                         |
+---------------------------------------------------------------------------------------------------------+
```

---

## 2. Mimari Prensipler ve Tasarım Tercihleri

### 2.1. Modular Monolith First Yaklaşımı
Projenin ilk fazında mikroservis mimarisi kesinlikle **uygulanmayacaktır**. 
- Tüm iş alanları tek bir NestJS uygulaması içinde, bağımsız klasör ve modül sınırlarıyla (`src/modules/*`) geliştirilir.
- Modüller arası veri transferi doğrudan veritabanı tablolarını birbirine bağlamak yerine **Service Call**, **DTO'lar** veya **In-Memory Event Bus** (`@nestjs/event-emitter`) ile yapılır.
- Bu yapı, tek şubeli başlangıç için sıfır distributed network gecikmesi ve düşük bulut maliyeti sağlarken, gelecekte ihtiyaç duyulduğunda (örn: sipariş trafiği milyonlara ulaştığında) `OrderService` veya `AiService`'in mikroservise ayrılmasını kolaylaştırır. (Ayrıntılar için bkz: `ADR-001`).

### 2.2. Çok Şubeli Hazır Altyapı (Multi-Store Readiness)
Mobil arayüz ilk aşamada tek bir pilot mağaza varsayımıyla sadeleştirilecek olsa da, veritabanı şeması ve domain modelleri asla tek mağazaya kilitlenmeyecektir (`store = 'B+'` gibi statik kodlar yasaktır).
- `stores`: Şube kimliği, adı, konumu (koordinat), durumu (aktif/pasif).
- `store_hours`: Gün bazlı açılış, kapanış ve sipariş kabul kesilme süreleri (`order_cutoff_minutes`).
- `store_products`: Ürünün o şubedeki stok durumu (`is_available`, `price_override`).
- `store_settings`: Şubeye özel operasyonel parametreler (tahmini hazırlık süresi, anlık yoğunluk çarpanı).

### 2.3. POS Bağımsızlığı & Adapter Deseni
Fiziksel kasa sistemi bilinmediği için siparişlerin backend üzerinden doğrudan **Store Operations (KDS)** arayüzüne akması planlanmıştır.
- `PosAdapterModule`, `PosProvider` kontratını uygular.
- İlk sürümde `LocalOperationsProvider` planlanmıştır (siparişler doğrudan KDS ekranına düşer ve durum baristalar tarafından güncellenir).
- Gelecekte gerçek bir POS API'si geldiğinde yalnızca `ExternalPosProvider` yazılarak sisteme bağlanması hedeflenir. (Ayrıntılar için bkz: `ADR-003`).

### 2.4. Ödeme Soyutlaması & Idempotency
- Sanal POS entegrasyonu `PaymentProvider` arayüzü ile mimari olarak soyutlanmıştır.
- Prototip fazında `MockPaymentProvider` kullanılması planlanmıştır.
- Tüm checkout talepleri için istemciden gelen `Idempotency-Key` başlığı ile Redis üzerinde kilit mekanizması tasarlanmıştır.
- Ödeme sağlayıcısının webhook bildirimleri işlem geçmişi tablosu (`processed_webhook_events`) ile çift işlemeye karşı güvenceye alınacak şekilde modellenmiştir. Uygulama ve doğrulama ilgili fazda yapılacaktır. (Ayrıntılar için bkz: `ADR-002`).

### 2.5. AI Barista & Veri Tabanı Zeminlemesi (Grounding)
- LLM nihai ürün kaynağı olarak kullanılmaz.
- LLM'in görevi kullanıcının serbest metninden niyet (Intent) ve filtre (Slot) çıkarmaktır (örn: `{ max_caffeine: 50, vegan: true, temperature: "cold", sweetness: "low" }`).
- Arama katmanı `pgvector` kullanarak menüdeki ürün vektörleri ve SQL filtreleri ile sadece stokta olan gerçek ürünleri döndürmek üzere tasarlanmıştır. Halüsinasyon riski mimari olarak azaltılmıştır; nihai doğrulama AI test fazlarında yapılacaktır. (Ayrıntılar için bkz: `ADR-004`).

---

## 3. Teknoloji Yığını (Tech Stack Matrix)

| Alan | Seçilen Teknoloji | Seçim Gerekçesi |
| :--- | :--- | :--- |
| **Mobile App** | **React Native (Expo) + TypeScript** | Tek kod tabanı ile iOS ve Android desteği, hızlı iterasyon, zengin UI kütüphaneleri, kolay OTA güncelleme. |
| **Store Operations** | **Next.js (App Router) + TypeScript** | Tablet ergonomisine uygun responsive web KDS, hızlı yükleme, Server-Sent Events (SSE) ile anlık sipariş akışı. *(Major sürüm Technical Foundation fazında kilitlenecektir).* |
| **Admin Panel** | **Next.js + TailwindCSS + TypeScript** | Zengin formlar, menü hiyerarşisi yönetimi ve dashboard yetenekleri. *(Major sürüm Technical Foundation fazında kilitlenecektir).* |
| **Backend API** | **NestJS + TypeScript** | Kurumsal ölçekte modüler mimari, Dependency Injection, güçlü TypeScript desteği, OpenAPI (Swagger) entegrasyonu. |
| **Database** | **PostgreSQL** | ACID uyumluluğu, güçlü ilişkisel veri bütünlüğü, yüksek güvenilirlik. *(Sürüm Technical Foundation fazında kilitlenecektir).* |
| **Vector Search** | **pgvector** | Ayrı bir vektör veritabanı (Pinecone, Qdrant vb.) operasyonel maliyeti yaratmadan, ilişkisel veriyle tek SQL sorgusunda hibrit filtreleme yapabilme yeteneği. |
| **Cache & Queue** | **Redis / Valkey** | Yüksek performanslı in-memory caching, distributed lock (idempotency için), pub/sub olay dağıtımı. |
| **Notifications** | **Firebase Cloud Messaging (FCM)** | iOS (APNs) ve Android için endüstri standardı, güvenilir ve ücretsiz push bildirim altyapısı. |
| **Monitoring** | **Sentry** | Frontend ve backend genelinde anlık hata takibi, stack trace ve performans APM. |
| **CI/CD** | **GitHub Actions** | Otomatik test, lint kontrolü ve Docker container build/push pipeline'ı. |
| **Containerization** | **Docker & Docker Compose** | Lokal geliştirme ve production ortamları arasında tam ortam eşliği. |
