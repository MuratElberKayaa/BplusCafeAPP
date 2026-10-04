# B+ Wellness Café — REST API Blueprint Specification

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** APPROVED FOR PHASE 1 (FROZEN CANDIDATE)  
**Referans:** [docs/architecture/DOMAIN_BOUNDARIES.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/DOMAIN_BOUNDARIES.md), [docs/contracts/FRONTEND_DATA_REQUIREMENTS.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/contracts/FRONTEND_DATA_REQUIREMENTS.md)

Bu doküman, NestJS Modular Monolith backend mimarisinin implement edeceği REST API sözleşmelerini domain bazında listeler.

---

## 1. Domain Bazlı Endpoint Envanteri Özeti

| Domain | Endpoint Sayısı | Temel Sorumluluk |
| :--- | :---: | :--- |
| **Auth** | 4 | Kimlik doğrulama, token yenileme, kayıt ve oturum kapatma |
| **Users** | 2 | Profil sorgulama ve diyet tercihlerini güncelleme |
| **Stores** | 3 | Şube bilgisi, çalışma saatleri ve anlık açık/kapalı durumu |
| **Menu** | 4 | Kategoriler, ürün listesi, ürün detayı ve arama/filtreleme |
| **Cart** | 2 | Sunucu taraflı sepet tutarı hesaplama ve stok doğrulama |
| **Orders** | 5 | İdempotent checkout, geçmiş siparişler, canlı takip ve iptal |
| **Payments** | 3 | Ödeme başlatma, webhook işleme ve sandbox simülasyonu |
| **Rewards** | 2 | Puan bakiyesi ve geçmiş hareketler (`RULE TBD / DEMO_RULE`) |
| **Wallet** | 2 | Sandbox test bakiyesi ve sanal para yükleme (`DEMO ONLY`) |
| **Notifications**| 2 | FCM cihaz token kaydı ve bildirim izinleri |
| **AI Barista** | 2 | Doğal dil ile öneri motoru ve başlangıç diyalog hapları |
| **Store Ops** | 4 | KDS canlı sipariş kuyruğu, SSE akışı, durum geçişi ve 86 stok |
| **Admin** | 8 | Dashboard analitiği, Menü/Ürün/Sipariş/Kullanıcı/Kural yönetimi |
| **TOPLAM** | **43** | Uçtan uca platform API sözleşmesi |

---

## 2. Detaylı Endpoint Spesifikasyonu

### 2.1. Auth Domain
- `POST /v1/auth/register` (Public)
  - Body: `{ email, password, firstName, lastName, phone }`
  - Response: `201 Created` `{ accessToken, refreshToken, user }`
- `POST /v1/auth/login` (Public)
  - Body: `{ email, password }`
  - Response: `200 OK` `{ accessToken, refreshToken, user }`
- `POST /v1/auth/refresh` (Public)
  - Body: `{ refreshToken }`
  - Response: `200 OK` `{ accessToken, refreshToken }`
- `POST /v1/auth/logout` (Bearer: Authenticated)
  - Response: `200 OK` `{ message: "Logged out" }`

### 2.2. Users Domain
- `GET /v1/users/me` (Bearer: Customer)
  - Response: `200 OK` `{ id, email, firstName, lastName, phone, dietaryPreferences }`
- `PATCH /v1/users/me/preferences` (Bearer: Customer)
  - Body: `{ dietaryPreferences: ["vegan", "dairy-free"] }`
  - Response: `200 OK` `{ success: true }`

### 2.3. Stores Domain
- `GET /v1/stores` (Public)
  - Response: `200 OK` `Store[]`
- `GET /v1/stores/{storeId}` (Public)
  - Response: `200 OK` `{ id, name, address, latitude, longitude, isOpen, prepTimeMinutes }`
- `GET /v1/stores/{storeId}/hours` (Public)
  - Response: `200 OK` `{ hours: DayHour[], orderCutoffMinutes: number }` *(Configurable - e.g. 15 DEMO VALUE ONLY)*

### 2.4. Menu Domain
- `GET /v1/menu/categories?storeId={id}` (Public)
  - Response: `200 OK` `Category[]`
- `GET /v1/menu/products?storeId={id}&categoryId={id}&dietary={tag}&search={q}` (Public)
  - Response: `200 OK` `ProductSummary[]`
- `GET /v1/products/{productId}?storeId={id}` (Public)
  - Response: `200 OK` `ProductDetailWithCustomizations`
- `GET /v1/menu/filters` (Public)
  - Response: `200 OK` `{ dietaryTags: string[], tasteTags: string[], maxCaffeineRange: [0, 300] }`

### 2.5. Cart Domain
- `POST /v1/cart/validate` (Public / Guest & User)
  - Body: `{ storeId, items: CartItemInput[] }`
  - Response: `200 OK` `{ isValid, priceSnapshot: PriceSnapshot, unavailableItems }`
- `POST /v1/cart/estimate-time` (Public)
  - Body: `{ storeId, itemsCount }`
  - Response: `200 OK` `{ estimatedMinutes: number }`

### 2.6. Orders Domain
- `POST /v1/orders/checkout` (Bearer: Customer)
  - Headers: `Idempotency-Key: uuid-v4` (Zorunlu)
  - Body: `{ storeId, paymentMethod, items, pickupTimeType: "ASAP" }`
  - Response: `201 Created` `{ orderId, orderNumber, paymentStatus, totalAmount, redirectUrl? }`
- `GET /v1/orders/my-orders` (Bearer: Customer)
  - Response: `200 OK` `OrderSummary[]`
- `GET /v1/orders/{orderId}` (Bearer: Customer)
  - Response: `200 OK` `OrderDetail`
- `GET /v1/orders/{orderId}/live-status` (Bearer: Customer)
  - Response: `200 OK` `{ status: "PREPARING", estimatedReadyAt, step: 2 }`
- `POST /v1/orders/{orderId}/cancel` (Bearer: Customer)
  - Response: `200 OK` *(Yalnızca NEW durumundayken geçerlidir; iade politikası: REFUND POLICY TBD - DEC-07)*

### 2.7. Payments Domain
- `POST /v1/payments/init` (Internal / Service Call)
  - Body: `PaymentInitRequest`
  - Response: `200 OK` `PaymentInitResult`
- `POST /v1/payments/webhook/{provider}` (Public - Callback)
  - Headers: `X-Signature: hmac-sha256`
  - Response: `200 OK`
- `POST /v1/payments/sandbox-complete` (Bearer: Customer / Test Only)
  - Body: `{ paymentId, outcome: "SUCCESS" | "FAILURE" }`
  - Response: `200 OK`

### 2.8. Rewards Domain
- `GET /v1/rewards/me` (Bearer: Customer)
  - Response: `200 OK` `{ currentPoints: number, tier: string, history: RewardTransaction[] }` *(RULE TBD)*
- `GET /v1/rewards/available-offers` (Bearer: Customer)
  - Response: `200 OK` `RewardOffer[]`

### 2.9. Wallet Domain (Sandbox Only)
- `GET /v1/wallet/me` (Bearer: Customer)
  - Response: `200 OK` `{ balance: number, currency: "TRY", isSandbox: true, ledger: WalletTransaction[] }`
- `POST /v1/wallet/add-sandbox-balance` (Bearer: Customer)
  - Body: `{ amount: 100 | 250 | 500 }`
  - Response: `200 OK` `{ newBalance: number }`

### 2.10. Notifications Domain
- `POST /v1/notifications/device-token` (Bearer: Customer)
  - Body: `{ fcmToken: string, devicePlatform: "ios" | "android" }`
  - Response: `200 OK` `{ registered: true }`
- `PATCH /v1/notifications/settings` (Bearer: Customer)
  - Body: `{ orderUpdates: boolean, promoAlerts: boolean }`
  - Response: `200 OK`

### 2.11. AI Barista Domain
- `POST /v1/ai/recommend` (Public / Guest & User)
  - Body: `AiRecommendRequest` (userMessage, currentPreferences: AiPreference)
  - Response: `200 OK` `AiRecommendResponse` (recommendations: AiRecommendation[])
- `GET /v1/ai/starter-chips` (Public)
  - Response: `200 OK` `{ chips: string[] }`

### 2.12. Store Operations Domain (KDS)
- `GET /v1/ops/orders?storeId={id}` (Bearer: Barista / Staff)
  - Response: `200 OK` `KdsOrder[]`
- `GET /v1/ops/orders/live?storeId={id}` (Bearer: Barista - SSE Stream)
  - Events: `order_created`, `order_status_updated`
- `PATCH /v1/ops/orders/{orderId}/status` (Bearer: Barista)
  - Body: `{ newStatus: "PREPARING" | "READY" | "COMPLETED" | "CANCELLED", reason? }`
  - Response: `200 OK` `{ updatedStatus: string }`
- `PATCH /v1/ops/stock/toggle` (Bearer: Barista)
  - Body: `{ storeId, itemType: "PRODUCT" | "CUSTOMIZATION_OPTION", itemId, isAvailable }`
  - Response: `200 OK` `{ success: true }`

### 2.13. Admin Management Domain
- `GET /v1/admin/dashboard` (Bearer: Admin)
  - Response: `200 OK` Dashboard metrikleri
- `GET /v1/admin/categories` & `POST /v1/admin/categories` (Bearer: Admin)
  - CRUD kategoriler
- `GET /v1/admin/products` & `POST /v1/admin/products` & `PUT /v1/admin/products/{id}` (Bearer: Admin)
  - 7 sekmeli ürün verisi CRUD
- `GET /v1/admin/orders` (Bearer: Admin)
  - Filtreli sipariş günlüğü
- `POST /v1/admin/orders/{id}/refund` (Bearer: Admin)
  - Status: `[ TBD / DISABLED UNTIL POLICY CONFIRMED - DEC-07 ]`
- `GET /v1/admin/users` (Bearer: Admin)
  - Kullanıcı listesi & rol yönetimi
- `GET /v1/admin/rewards/rules` & `PUT /v1/admin/rewards/rules` (Bearer: Admin)
  - Puan kuralı parametreleri yönetimi (`Configurable Engine`)
- `PUT /v1/admin/stores/{id}/settings` (Bearer: Admin)
  - Çalışma saatleri ve yapılandırılabilir cutoff süresi
