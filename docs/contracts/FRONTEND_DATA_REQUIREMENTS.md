# B+ Wellness Café — Frontend Data Requirements Specification

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** APPROVED FOR PHASE 1 (FROZEN CANDIDATE)  
**Referans:** [docs/contracts/API_BLUEPRINT.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/contracts/API_BLUEPRINT.md)

Bu doküman, frontend istemcilerinin (Mobile App, KDS, Admin) backend API servislerinden talep ettiği veri yapılarını, JSON tiplerini ve mutasyon modellerini tanımlar.

---

## 1. Müşteri Mobil Uygulaması Veri Gereksinimleri

### 1.1. Home Screen (`SCR-CUST-05`)
- **İstek:** `GET /v1/home/feed?storeId={storeId}`
- **Gelen Veri (Response):**
```typescript
export interface HomeFeedResponse {
  store: {
    id: string;
    name: string;
    isOpen: boolean;
    nextOpenTime?: string;
    estimatedPrepTimeMinutes: number;
    orderCutoffMinutes: number; // Configurable (e.g. 15 - DEMO VALUE ONLY)
    announcementBanner?: {
      title: string;
      message: string;
      type: 'INFO' | 'PROMO' | 'WARNING';
    };
  };
  featuredProducts: Array<{
    id: string;
    name: string;
    shortDescription: string;
    basePrice: number;
    imageUrl: string;
    caloriesKcal: number;
    tasteTags: string[];
    isAvailable: boolean;
  }>;
  recentOrderShortcut?: {
    orderId: string;
    summaryText: string;
    totalAmount: number;
  };
  aiBaristaTeaser: {
    title: string;
    subtitle: string;
    suggestedPrompts: string[];
  };
}
```

### 1.2. Menu & Product List (`SCR-CUST-06`)
- **İstek:** `GET /v1/menu?storeId={storeId}&categoryId={catId}&search={q}&dietary={tags}&maxCaffeine={mg}`
- **Gelen Veri (Response):**
```typescript
export interface MenuResponse {
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    displayOrder: number;
    productCount: number;
  }>;
  products: Array<{
    id: string;
    categoryId: string;
    name: string;
    description: string;
    imageUrl: string;
    basePrice: number;
    caloriesKcal: number;
    caffeineMg: number;
    isAvailable: boolean;
    dietaryTags: string[];
    tasteTags: string[];
  }>;
}
```

### 1.3. Product Detail & Customization Options (`SCR-CUST-09`, `SCR-CUST-10`)
- **İstek:** `GET /v1/products/{productId}?storeId={storeId}`
- **Gelen Veri (Response):**
```typescript
export interface ProductDetailResponse {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  basePrice: number;
  isAvailable: boolean;
  nutrition: {
    caloriesKcal: number;
    proteinG: number;
    carbG: number;
    sugarG: number;
    fatG: number;
  };
  allergens: string[];
  ingredients: string[];
  aiMetadata: {
    caffeineMg: number;
    sweetnessScore: number;
    intensityScore: number;
    supportedTemperatures: ('HOT' | 'COLD')[];
  };
  customizationGroups: Array<{
    id: string;
    name: string;
    type: 'SINGLE_SELECT' | 'MULTI_SELECT';
    isRequired: boolean;
    minSelections: number;
    maxSelections: number;
    options: Array<{
      id: string;
      name: string;
      extraPrice: number;
      isDefault: boolean;
      isAvailable: boolean;
    }>;
  }>;
}
```

### 1.4. Cart & Customization Models (`SCR-CUST-13`)
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
  validatedAt: string; // ISO timestamp
}

export interface CartValidateRequest {
  storeId: string;
  items: Array<{
    productId: string;
    quantity: number;
    selectedOptions: Array<{
      groupId: string;
      optionId: string;
    }>;
  }>;
}

export interface CartValidateResponse {
  isValid: boolean;
  priceSnapshot: PriceSnapshot;
  unavailableItems: Array<{
    productId: string;
    productName: string;
    reason: 'PRODUCT_OUT_OF_STOCK' | 'OPTION_OUT_OF_STOCK';
    detail: string;
  }>;
}
```

### 1.5. Checkout & Payment (`SCR-CUST-14`, `SCR-CUST-15`)
- **İstek:** `POST /v1/orders/checkout`
- **Headers:** `Idempotency-Key: uuid-v4`, `Authorization: Bearer <token>`
- **Giden Veri (Request Payload):**
```typescript
export interface CheckoutRequest {
  storeId: string;
  paymentMethod: 'SANDBOX_WALLET' | 'CARD_GATEWAY';
  items: Array<{
    productId: string;
    quantity: number;
    selectedOptions: Array<{
      groupId: string;
      optionId: string;
    }>;
  }>;
  pickupTimeType: 'ASAP';
}
```
- **Gelen Veri (Response):**
```typescript
export interface CheckoutResponse {
  orderId: string;
  orderNumber: string;
  paymentStatus: 'PAID' | 'REQUIRES_3D' | 'FAILED';
  redirectUrl?: string;
  totalAmount: number;
  estimatedReadyAt: string;
}
```

### 1.6. AI Barista Recommendation (`SCR-CUST-11`, `SCR-CUST-12`)
- **İstek:** `POST /v1/ai/recommend`
- **Giden Veri:**
```typescript
export interface AiRecommendRequest {
  storeId: string;
  conversationId?: string;
  userMessage: string;
  currentPreferences?: {
    milkPreference?: 'OAT' | 'ALMOND' | 'SOY' | 'DAIRY' | 'NONE';
    sweetness?: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';
    intensity?: 'MILD' | 'BALANCED' | 'STRONG';
    temperature?: 'HOT' | 'COLD' | 'ANY';
    caffeineExpectation?: 'ZERO' | 'LOW' | 'MEDIUM' | 'HIGH';
    dietaryPreferences?: string[];
    tasteTags?: string[];
  };
}
```
- **Gelen Veri:**
```typescript
export interface AiRecommendResponse {
  conversationId: string;
  assistantMessage: string;
  recommendations: Array<{
    productId: string;
    productName: string;
    imageUrl: string;
    basePrice: number;
    matchScore: number;
    explanation: string;
    matchedPreferences: string[];
    isAvailable: boolean;
  }>;
  clarificationRequired: boolean;
  clarificationQuestion?: string;
}
```

---

## 2. Store Operations (KDS) Veri Gereksinimleri

### 2.1. Active Orders Board (`SCR-OPS-01`)
- **İstek:** `GET /v1/ops/orders?storeId={storeId}`
- **Gelen Veri:**
```typescript
export interface KdsOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  status: 'NEW' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED';
  createdAt: string;
  elapsedMinutes: number;
  items: Array<{
    productName: string;
    quantity: number;
    customizations: string[];
  }>;
  totalItemsCount: number;
}
```

### 2.2. Order Status Update Mutation (`SCR-OPS-02`)
- **İstek:** `PATCH /v1/ops/orders/{orderId}/status`
- **Giden Veri:**
```typescript
export interface UpdateOrderStatusRequest {
  newStatus: 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED';
  cancellationReason?: string;
}
```

### 2.3. Quick Out-of-Stock Toggle ("86 Board") (`SCR-OPS-03`)
- **İstek:** `PATCH /v1/ops/stock/toggle`
- **Giden Veri:**
```typescript
export interface ToggleStockRequest {
  storeId: string;
  itemType: 'PRODUCT' | 'CUSTOMIZATION_OPTION';
  itemId: string;
  isAvailable: boolean;
}
```
