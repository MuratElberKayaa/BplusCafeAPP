# B+ Wellness Café — Component Inventory Specification

**Doküman Sürümü:** 1.0.0 (Phase 2 — High-Fidelity UI/UX & Interactive Prototype)  
**Tarih:** 2026-09-30  
**Statü:** ACTIVE — COMPONENT SPECIFICATION  
**Referans:** [docs/design/DESIGN_SYSTEM.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/design/DESIGN_SYSTEM.md)

---

## 1. Genel Bakış ve Bileşen Taksonomisi

Bu doküman, Customer Mobile App (React Native Expo), Store Operations (Next.js) ve Admin Panel (Next.js) platformlarında kullanılan tüm yeniden kullanılabilir arayüz bileşenlerini, props arayüzlerini ve durum varyantlarını tanımlar.

```
COMPONENT LIBRARY
│
├── 1. Temel Arayüz Bileşenleri (Core Primitives)
│   ├── Button & IconButton
│   ├── TextField & SearchBar
│   ├── Badge & Chip & CategoryChip
│   └── Card & Surface
│
├── 2. Ürün & Menü Bileşenleri (Product & Menu)
│   ├── ProductCard & ProductImage
│   ├── PriceTag
│   ├── CustomizationGroup & CustomizationOption
│   └── CartItemRow
│
├── 3. Sipariş & Operasyon Bileşenleri (Orders & Operations)
│   ├── OrderStatusBadge
│   ├── OrderProgressStepper
│   ├── KdsOrderCard (Kanban Card)
│   └── QuickStockToggleItem
│
├── 4. Sadakat, Cüzdan ve AI Bileşenleri (Wellness & AI)
│   ├── RewardProgressBar
│   ├── WalletBalanceCard (Sandbox)
│   ├── AiMessageBubble
│   └── AiRecommendationCard
│
└── 5. Geri Bildirim ve Durum Bileşenleri (Feedback States)
    ├── LoadingSkeleton (Card / List Shimmer)
    ├── EmptyStateCard
    └── ErrorStateBanner
```

---

## 2. Detaylı Bileşen Spesifikasyonları

### 2.1. Button (`Button.tsx`)
- **Varyantlar:** `primary` (Olive), `secondary` (Cream + Border), `outline`, `ghost`, `danger`.
- **Boyutlar:** `sm` (36px), `md` (44px), `lg` (52px).
- **Props:**
  ```typescript
  export interface ButtonProps {
    title: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    onPress: () => void;
  }
  ```

### 2.2. ProductCard (`ProductCard.tsx`)
- **Kullanım Alanı:** Menü Grid, Ana Sayfa Öne Çıkanlar.
- **Görsel Düzen:** Üstte 1:1 ürün görseli + etiket rozeti (`Vegan`, `Düşük Kafein`), ortada ürün başlığı ve lezzet tanımı, altta fiyat ve `+ Ekle` butonu.
- **Props:**
  ```typescript
  export interface ProductCardProps {
    id: string;
    name: string;
    shortDescription: string;
    basePrice: number;
    imageUrl: string;
    dietaryTags?: string[];
    isAvailable: boolean;
    onPress: () => void;
    onQuickAdd?: () => void;
  }
  ```

### 2.3. CustomizationOption (`CustomizationOption.tsx`)
- **Kullanım Alanı:** Ürün özelleştirme modalı (`SCR-CUST-10`).
- **Görsel Düzen:** Sol tarafta radyo butonu / onay kutusu + opsiyon adı (Örn: *Yulaf Sütü*), sağ tarafta ekstra fiyat farkı (+15.00 TL).
- **Props:**
  ```typescript
  export interface CustomizationOptionProps {
    id: string;
    name: string;
    extraPrice: number;
    isSelected: boolean;
    isAvailable: boolean;
    onSelect: () => void;
  }
  ```

### 2.4. AiRecommendationCard (`AiRecommendationCard.tsx`)
- **Kullanım Alanı:** AI Barista sohbet akışı (`SCR-CUST-12`).
- **Görsel Düzen:** Üstte altın latte rozet (%94 Uyumlu), ürün adı ve fotoğrafı, ortada barista tavsiye cümlesi, altta `[ İncele ]` ve `[ Sepete Ekle ]` butonları.
- **Props:**
  ```typescript
  export interface AiRecommendationCardProps {
    productId: string;
    productName: string;
    imageUrl: string;
    basePrice: number;
    matchScore: number; // 0.94
    explanation: string;
    matchedPreferences: string[];
    onInspect: () => void;
    onAddToCart: () => void;
  }
  ```

### 2.5. OrderProgressStepper (`OrderProgressStepper.tsx`)
- **Kullanım Alanı:** Sipariş Takip ekranı (`SCR-CUST-17`).
- **Aşamalar:** `NEW` (Alındı) ➔ `PREPARING` (Hazırlanıyor) ➔ `READY` (Tezgahta Hazır) ➔ `COMPLETED` (Teslim Edildi).
- **Props:**
  ```typescript
  export interface OrderProgressStepperProps {
    currentStatus: 'NEW' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED';
    estimatedReadyTime?: string;
  }
  ```

### 2.6. KdsOrderCard (`KdsOrderCard.tsx`)
- **Kullanım Alanı:** Store Operations tablet Kanban panosu (`SCR-OPS-01`).
- **Görsel Düzen:** Sipariş kodu (#B-108), müşteri adı, geçen dakika sayacı, ürün kalemleri ve kalın yazılmış reçete modifikasyonları (`Yulaf Sütü`, `Şekersiz`, `+Kolajen`).
- **Props:**
  ```typescript
  export interface KdsOrderCardProps {
    orderNumber: string;
    customerName: string;
    status: 'NEW' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED';
    elapsedMinutes: number;
    items: Array<{
      productName: string;
      quantity: number;
      customizations: string[];
    }>;
    onAction: (targetStatus: string) => void;
  }
  ```

### 2.7. WalletCard (`WalletCard.tsx`)
- **Kullanım Alanı:** B+ Wallet ekranı ve Checkout ödeme seçici.
- **Görsel Düzen:** Şık zeytin yeşili kart, "B+ Wallet (Sandbox)", büyük bakiye gösterimi (`₺250.00 TEST BAKİYESİ`), "Test Bakiye Yükle" butonu.
- **Props:**
  ```typescript
  export interface WalletCardProps {
    balance: number;
    currency?: string;
    isSandbox?: boolean;
    onAddBalancePress?: () => void;
  }
  ```

### 2.8. Feedback State Bileşenleri
- **`LoadingSkeleton`:** Menü ve ürün detay yüklenirken titreşimli (shimmer) açık krem renkli iskelet bloklar.
- **`EmptyStateCard`:** Sepet boşken veya arama sonucu bulunamadığında gösterilen zarif ikon, açıklama metni ve aksiyon butonu.
- **`ErrorStateBanner`:** Ağ kesintisi veya sepet uyuşmazlığında ortaya çıkan, kullanıcıyı suçlamayan nazik hata paneli.
