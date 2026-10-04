# B+ Wellness Café — State Architecture & Data Flow

**Doküman Sürümü:** 1.1.0 (Phase 1 — Hardened)  
**Tarih:** 2026-09-30  
**Statü:** APPROVED FOR PHASE 1 (FROZEN CANDIDATE)  
**Referans:** [docs/architecture/ARCHITECTURE_OVERVIEW.md](file:///c:/Users/PC/Desktop/B+CafeAPP/docs/architecture/ARCHITECTURE_OVERVIEW.md)

---

## 1. Müşteri Mobil Uygulaması Durum Mimarisi (Customer App State)

Mobil istemcide durum (State), **Kalıcı (Persistent)** ve **Geçici (Ephemeral/In-Memory)** olmak üzere iki ana kategoriye ayrılır:

```
[ GLOBAL CLIENT STORE ] (Zustand / Redux Toolkit)
│
├── 1. Auth Slice (Persistent - SecureStore / MMKV)
│   ├── accessToken: string | null
│   ├── refreshToken: string | null
│   ├── user: { id, email, name, role } | null
│   └── isAuthenticated: boolean
│
├── 2. Cart Slice (Persistent - Local Storage)
│   ├── items: CartItem[]
│   ├── storeId: string ("pilot_store")
│   ├── subtotal: number
│   ├── totalDiscount: number
│   └── finalTotal: number
│
├── 3. Active Order Slice (Persistent / Real-Time Hydrated)
│   ├── activeOrderId: string | null
│   ├── currentStatus: 'NEW' | 'PREPARING' | 'READY' | 'COMPLETED' | null
│   ├── estimatedReadyAt: string | null
│   └── orderNumber: string | null
│
├── 4. Menu & Filter Slice (Ephemeral / React Query Cached)
│   ├── selectedCategory: string
│   ├── searchKeyword: string
│   ├── activeFilters: { dietary: string[], maxCaffeine?: number, isCold?: boolean }
│   └── cachedProducts: Map<id, ProductDetail>
│
├── 5. AI Barista Chat Slice (Session Ephemeral)
│   ├── conversationId: string
│   ├── messages: ChatMessage[]
│   ├── isTyping: boolean
│   └── latestRecommendations: AiRecommendation[]
│
└── 6. Sandbox Wallet Slice (Ephemeral / Server-Synced - DEMO ONLY)
    ├── balance: number (Sanal test bakiyesi)
    └── currency: "TRY"
```

### 1.1. Sunucu Yetkisi Kuralı (Server-Authoritative Rule)
- **Fiyat ve Stok:** İstemci asla fiyatı hesaplayıp sunucuya kabul ettiremez. Sepetteki toplam tutar her istekte backend tarafından veritabanından baştan hesaplanır.
- **Sipariş Durumu:** Sipariş durumu istemci tarafında tahmin edilmez; sunucudan gelen WebSocket/SSE event'i veya FCM push bildirimi ile güncellenir.

---

## 2. Store Operations (KDS) Durum Mimarisi

KDS tablet ekranında durum, **Canlı Sıra Yönetimi (Live Queue)** ve **Bağlantı Durumu (Connectivity State)** üzerine inşa edilmiştir:

```
[ KDS STORE ]
│
├── 1. Connection State
│   ├── status: 'CONNECTED' | 'RECONNECTING' | 'OFFLINE'
│   ├── lastHeartbeat: timestamp
│   └── pendingRetries: number
│
├── 2. Live Order Columns (Kanban)
│   ├── newOrders: OrderSummary[]       (Sıralama: FIFO)
│   ├── preparingOrders: OrderSummary[] (Sıralama: Hazırlık süresine göre)
│   ├── readyOrders: OrderSummary[]     (Sıralama: Bekleme süresine göre)
│   └── completedOrders: OrderSummary[] (Son teslimatlar)
│
├── 3. Audio & Alert State
│   ├── audioEnabled: boolean (Varsayılan: true)
│   └── pendingNewOrderChime: boolean
│
└── 4. 86 / Stock Cache
    └── unavailableItemIds: Set<string>
```

---

## 3. Ekran Durum Matrisi (State Lifecycle Matrix)

Her ekran için kullanıcıya gösterilen anlamlı durumlar:

| Ekran | Loading | Empty | Error | Success | Özel Durumlar |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Home Screen** | İskelet yükleyiciler | Öne çıkan ürün yok | Yükleme hatası kartı | Banner, hızlı sipariş, AI teaser | `Unavailable` (Şube kapalı bandı), `Offline` |
| **Menu Screen** | Skeleton grid | Seçilen filtrede ürün yok | Menü alınamadı [Yeniden Dene] | Kategori sekmeleri & ürün grid'i | `Offline` (Cache'ten gösterim) |
| **Product Detail** | Shimmer | Ürün bulunamadı | Detay alınamadı | Zengin ürün detayları | `Unavailable` (Tükenmiş ürün etiketi) |
| **Cart Screen** | Hesaplama spinner'ı | "Sepetiniz boş" | Fiyat doğrulama hatası | Sepet dökümü & toplam | `Unavailable` (Malzeme tükendi uyarısı) |
| **Checkout** | Doğrulama spinner'ı | - | Ödeme başlatma hatası | Şube, ETA ve ödeme seçimi | `Unauthenticated` (Auth Gate tetikler), `Unavailable` (Cutoff) |
| **Payment Screen**| 3D işlem spinner'ı | - | Kart reddedildi / Hata | Ödeme onaylandı | `Offline` (Bağlantı kesintisi uyarısı) |
| **Order Tracking**| Sorgulama spinner'ı| Aktif sipariş yok | Durum sorgulanamadı | 4 adımlı canlı takip çubuğu | `Offline` (Son bilinen durum) |
| **Rewards Screen**| Bakiye spinner'ı | Puan hareketi yok | Veri alınamadı | Seviye barı, puan bakiyesi | `Unauthenticated` (Giriş yap CTA'sı) |
| **KDS Board** | KDS tam ekran spinner| Bekleyen sipariş yok| Bağlantı koptu ikazı | 4 sütunlu canlı Kanban | `Offline` (Kırmızı yeniden bağlanıyor bandı) |
