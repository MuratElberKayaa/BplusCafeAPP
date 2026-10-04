/**
 * @bplus/types — Core TypeScript Type Definitions
 * Phase 2 — High-Fidelity UI/UX & Interactive Prototype
 */

export * from './src/mocks/index';

export interface NutritionInfo {
  caloriesKcal: number;
  proteinG: number;
  carbG: number;
  sugarG: number;
  fatG: number;
  fiberG?: number;
}

export interface Ingredient {
  name: string;
  isOrganic?: boolean;
}

export interface Allergen {
  code: string;
  name: string;
  severity: 'CONTAINS' | 'MAY_CONTAIN';
}

export interface CustomizationOption {
  id: string;
  groupId: string;
  name: string;
  extraPrice: number;
  isDefault?: boolean;
  isAvailable: boolean;
}

export interface CustomizationGroup {
  id: string;
  name: string;
  type: 'SINGLE_SELECT' | 'MULTI_SELECT';
  isRequired: boolean;
  minSelections: number;
  maxSelections: number;
  displayOrder: number;
  options: CustomizationOption[];
}

export interface ProductVariant {
  id: string;
  name: string;
  priceDelta: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  basePrice: number;
  isAvailable: boolean;
  nutrition: NutritionInfo;
  ingredients: Ingredient[];
  allergens: Allergen[];
  caffeineMg: number;
  sweetnessScore: number; // 1-5
  intensityScore: number; // 1-5
  supportedTemperatures: ('HOT' | 'COLD')[];
  tasteTags: string[];
  dietaryTags: string[];
  customizationGroups: CustomizationGroup[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName?: string;
  displayOrder: number;
}

export interface SelectedCustomization {
  groupId: string;
  groupName: string;
  optionId: string;
  optionName: string;
  extraPrice: number;
}

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  imageUrl: string;
  unitBasePrice: number;
  quantity: number;
  selectedCustomizations: SelectedCustomization[];
  itemTotalPrice: number;
}

export type OrderStatus = 'NEW' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED';

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  status: OrderStatus;
  paymentMethod: 'SANDBOX_WALLET' | 'CREDIT_CARD';
  createdAt: string;
  estimatedReadyAt?: string;
  elapsedMinutes?: number;
}

export interface AiPreference {
  milkPreference?: 'OAT' | 'ALMOND' | 'SOY' | 'DAIRY' | 'NONE';
  sweetness?: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';
  intensity?: 'MILD' | 'BALANCED' | 'STRONG';
  temperature?: 'HOT' | 'COLD' | 'ANY';
  caffeineExpectation?: 'ZERO' | 'LOW' | 'MEDIUM' | 'HIGH';
  dietaryPreferences?: string[];
  tasteTags?: string[];
}

export interface AiRecommendation {
  productId: string;
  productName: string;
  imageUrl: string;
  basePrice: number;
  matchScore: number;
  explanation: string;
  matchedPreferences: string[];
  isAvailable: boolean;
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isAuthenticated: boolean;
  dietaryPreferences: string[];
}

export interface RewardTransaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'EARN' | 'REDEEM';
}

export interface WalletTransaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'TOPUP' | 'PAYMENT' | 'REFUND';
  isSandbox: true;
}

export interface StoreInfo {
  id: string;
  name: string;
  isOpen: boolean;
  orderCutoffMinutes: number; // Configurable
  prepTimeMinutes: number;
  address: string;
}
