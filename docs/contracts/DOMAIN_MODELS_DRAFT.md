# B+ Wellness Café — Domain Models Draft (Conceptual Blueprint)

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** DRAFT MODEL — NON-PRODUCTION — PRE-DATABASE MIGRATION  
**Referans:** [docs/architecture/DOMAIN_BOUNDARIES.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/DOMAIN_BOUNDARIES.md) (Phase 0 FROZEN)

> [!IMPORTANT]
> Bu dokümandaki modeller **kavramsal etki alanı modelleridir (Conceptual Domain Models)**.
> ORM şeması veya fiziksel veritabanı migration dosyası değildir.
> Gerçek veritabanı kurulumu Phase 3 (Technical Foundation) aşamasına bırakılmıştır.

---

## 1. Varlık İlişki Diyagramı (Conceptual Entity Relationships)

```
[Store] ───<1:N>─── [StoreHours]
   │
   └──<1:N>─── [StoreProduct] >───<N:1>─── [Product]
                                              │
           ┌──────────────────────────────────┼──────────────────────────────────┐
           │                                  │                                  │
         <1:N>                              <1:N>                              <1:1>
           ▼                                  ▼                                  ▼
    [ProductVariant]                 [CustomizationGroup]                 [NutritionInfo]
                                              │                           (Value Object)
                                            <1:N>
                                              ▼
                                    [CustomizationOption]

[User] ───<1:1>─── [UserProfile]
  │
  ├──<1:1>─── [RewardAccount] ───<1:N>─── [RewardTransaction]
  ├──<1:1>─── [WalletAccount] ───<1:N>─── [WalletTransaction] (SANDBOX ONLY)
  ├──<1:N>─── [DeviceToken]
  ├──<1:1>─── [Cart] ───<1:N>─── [CartItem]
  └──<1:N>─── [Order]
                │
              <1:N>
                ▼
           [OrderItem] ───<1:N>─── [OrderItemCustomization]
                │
              <1:1>
                ▼
       [PaymentTransaction]

[AI Engine] ───► [AiPreference] (In-memory Slot Extraction)
            ───► [AiRecommendation] (Grounded to Product.id)
```

---

## 2. Detaylı Kavramsal Modeller (TypeScript Draft Contracts)

### 2.1. Store & Hours Domain
```typescript
export interface Store {
  id: string; // UUIDv4
  name: string; // "B+ Pilot Store"
  slug: string;
  address: string;
  latitude: number;
  longitude: number;
  isActive: boolean;
  estimatedPrepTimeMinutes: number; // Varsayılan: 10
  createdAt: Date;
  updatedAt: Date;
}

export interface StoreHours {
  id: string;
  storeId: string;
  dayOfWeek: number; // 0 = Pazar ... 6 = Cumartesi
  openTime: string; // "07:30"
  closeTime: string; // "21:00"
  orderCutoffMinutes: number; // Configurable (e.g. 15 min - DEMO VALUE ONLY)
  isClosed: boolean;
}
```

### 2.2. Menu & Product Domain (İçerik, Alerjen ve Besin Modellemesi)
> [!NOTE]
> `NutritionInfo`, `Ingredient` ve `Allergen` modelleri kavramsal olarak `Product` varlığı altında **Gömülü Yapı (Embedded / Value Object)** olarak modellenmiştir.

```typescript
export interface Category {
  id: string;
  name: string;
  slug: string;
  displayOrder: number;
  isActive: boolean;
}

/**
 * Value Object: Porsiyon besin değerleri
 */
export interface NutritionInfo {
  caloriesKcal: number;
  proteinG: number;
  carbG: number;
  sugarG: number;
  fatG: number;
  fiberG?: number;
}

/**
 * Value Object: Reçete bileşeni
 */
export interface Ingredient {
  name: string; // "Organik Zerdeçal", "Yulaf Sütü"
  isOrganic?: boolean;
}

/**
 * Value Object: Alerjen uyarısı
 */
export interface Allergen {
  code: string; // "SOY", "GLUTEN", "DAIRY", "NUTS"
  name: string;
  severity: 'CONTAINS' | 'MAY_CONTAIN';
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  basePrice: number;
  isGlobalActive: boolean;
  nutrition: NutritionInfo; // Embedded Value Object
  ingredients: Ingredient[]; // Embedded List
  allergens: Allergen[]; // Embedded List
  caffeineMg: number;
  sweetnessScore: number; // 1-5
  intensityScore: number; // 1-5
  supportedTemperatures: ('HOT' | 'COLD')[];
  tasteTags: string[]; // ["nutty", "spicy", "creamy"]
  dietaryTags: string[]; // ["vegan", "gluten-free"]
  embedding?: number[]; // pgvector 1536 float representation
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductVariant {
  id: string;
  productId: string;
  name: string; // "Küçük", "Standart", "Büyük"
  priceDelta: number; // +0, +20.00
}

export interface StoreProduct {
  id: string;
  storeId: string;
  productId: string;
  isAvailable: boolean; // Mağazada stokta mı ("86" anahtarı)
  priceOverride?: number;
}

export interface CustomizationGroup {
  id: string;
  name: string; // "Süt Seçimi", "Şurup", "Wellness Boost"
  type: 'SINGLE_SELECT' | 'MULTI_SELECT';
  isRequired: boolean;
  minSelections: number;
  maxSelections: number;
  displayOrder: number;
}

export interface CustomizationOption {
  id: string;
  groupId: string;
  name: string; // "Yulaf Sütü", "Kolajen Peptit"
  extraPrice: number; // 15.00
  isDefault: boolean;
  isAvailable: boolean;
}
```

### 2.3. Cart Domain Models
```typescript
export interface SelectedCustomization {
  groupId: string;
  groupName: string;
  optionId: string;
  optionName: string;
  extraPrice: number;
}

export interface CartItem {
  id: string; // İstemci UUID
  productId: string;
  productName: string;
  unitBasePrice: number;
  quantity: number;
  selectedCustomizations: SelectedCustomization[];
  itemTotalPrice: number;
}

export interface PriceSnapshot {
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  finalTotal: number;
  currency: 'TRY';
  validatedAt: Date;
}

export interface Cart {
  id: string;
  userId?: string; // Misafir ise opsiyonel
  storeId: string;
  items: CartItem[];
  priceSnapshot?: PriceSnapshot;
  updatedAt: Date;
}
```

### 2.4. User & Auth Domain
```typescript
export interface User {
  id: string;
  email: string;
  phone: string;
  passwordHash: string;
  role: 'CUSTOMER' | 'BARISTA' | 'STORE_MANAGER' | 'ADMIN';
  isActive: boolean;
  createdAt: Date;
}

export interface UserProfile {
  userId: string;
  firstName: string;
  lastName: string;
  dietaryPreferences: string[];
  avatarUrl?: string;
}

export interface DeviceToken {
  id: string;
  userId: string;
  fcmToken: string;
  platform: 'ios' | 'android';
  lastSeenAt: Date;
}
```

### 2.5. Order Domain
```typescript
export type OrderStatus = 'NEW' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED';

export interface Order {
  id: string;
  orderNumber: string; // "B-108"
  userId: string;
  storeId: string;
  status: OrderStatus;
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  finalTotal: number;
  pickupTimeType: 'ASAP';
  estimatedReadyAt?: Date;
  completedAt?: Date;
  cancelledAt?: Date;
  cancellationReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  unitBasePrice: number;
  quantity: number;
  itemTotalPrice: number;
}

export interface OrderItemCustomization {
  id: string;
  orderItemId: string;
  groupId: string;
  groupName: string;
  optionId: string;
  optionName: string;
  extraPrice: number;
}
```

### 2.6. Payment Domain
```typescript
export interface PaymentTransaction {
  id: string;
  orderId: string;
  idempotencyKey: string;
  provider: 'MOCK_SANDBOX' | 'IYZICO' | 'PAYTR' | 'BANK_POS';
  externalTransactionId?: string;
  amount: number;
  currency: 'TRY';
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';
  rawResponse?: Record<string, any>;
  createdAt: Date;
}

export interface ProcessedWebhookEvent {
  id: string;
  provider: string;
  externalEventId: string;
  eventType: string;
  processedAt: Date;
}
```

### 2.7. Rewards & Wallet Domain (Neutral & Sandbox)
```typescript
export interface RewardAccount {
  userId: string;
  currentPoints: number;
  lifetimeEarnedPoints: number;
  tier: string; // Kural işveren onayına tabidir (DEC-04)
}

/**
 * Puan hareket defteri (Kazanma formülü henüz hardcode edilmemiştir - RULE TBD)
 */
export interface RewardTransaction {
  id: string;
  userId: string;
  orderId?: string;
  amount: number; // Pozitif (kazanım) veya negatif (harcama)
  transactionType: 'ORDER_EARN' | 'REDEEM' | 'PROMO_BONUS';
  description: string;
  createdAt: Date;
}

/**
 * B+ Wallet — Sandbox / Demo Only (Phase 0 / Phase 1 Boundary)
 */
export interface WalletAccount {
  userId: string;
  balance: number; // Sanal test bakiyesi
  currency: 'TRY';
  isSandbox: true; // Gerçek para kesinlikle tutulamaz
  updatedAt: Date;
}

/**
 * Sanal cüzdan hareket defteri
 */
export interface WalletTransaction {
  id: string;
  userId: string;
  amount: number; // +100 (test bakiye), -165 (sipariş ödeme)
  transactionType: 'SANDBOX_TOPUP' | 'ORDER_PAYMENT' | 'REFUND';
  referenceId?: string; // orderId
  createdAt: Date;
}
```

### 2.8. AI Barista Domain Models (In-Memory Contracts)
```typescript
/**
 * [DRAFT MODEL — NON-PRODUCTION]
 * Kullanıcının serbest metninden çıkarılan niyet ve kısıt parametreleri
 */
export interface AiPreference {
  milkPreference?: 'OAT' | 'ALMOND' | 'SOY' | 'DAIRY' | 'NONE';
  sweetness?: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';
  intensity?: 'MILD' | 'BALANCED' | 'STRONG';
  temperature?: 'HOT' | 'COLD' | 'ANY';
  caffeineExpectation?: 'ZERO' | 'LOW' | 'MEDIUM' | 'HIGH';
  dietaryPreferences?: string[];
  tasteTags?: string[];
}

/**
 * [DRAFT MODEL — NON-PRODUCTION]
 * Doğrulanmış productId ile zeminlenmiş AI öneri kartı
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

## 3. Temel Veri Kısıtları & Kurallar (Invariants)
1. **Negatif Değer Yasağı:** `basePrice`, `extraPrice`, `finalTotal` ve `quantity` alanları `>= 0` olmak zorundadır.
2. **Cüzdan Gerçek Para Sınırı:** `WalletAccount.isSandbox` alanı her zaman `true` kalacaktır; gerçek mevduat toplanamaz.
3. **Idempotency Benzersizliği:** `PaymentTransaction.idempotencyKey` veritabanı seviyesinde `UNIQUE` indeks ile korunur.
4. **Stok Senkronizasyonu:** `StoreProduct.isAvailable = false` ise o şubeden ilgili ürün veya opsiyon siparişe dahil edilemez.
5. **Kural Esnekliği:** Sadakat kuralları parametrik tutulmuş; hardcoded puan formülü uygulanmamıştır (`DEC-04`).
