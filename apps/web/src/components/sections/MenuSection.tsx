'use client';

import React from 'react';
import { MenuCategoryNav } from '../menu/MenuCategoryNav';
import { ProductCard } from '../menu/ProductCard';
import { WEB_PRODUCTS, WebProduct } from '../../data/webData';
import { Sparkles, Info } from 'lucide-react';

interface MenuSectionProps {
  selectedCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  onSelectProduct: (product: WebProduct) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
}) => {
  const filteredProducts =
    selectedCategory === 'all'
      ? WEB_PRODUCTS
      : WEB_PRODUCTS.filter((p) => p.categorySlug === selectedCategory);

  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="py-20 lg:py-28 bg-bplus-cream border-t border-bplus-border/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-bplus-olive uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seçkin Reçeteler</span>
          </div>
          <h2
            id="menu-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bplus-deepOlive tracking-tight mb-3"
          >
            Özenle Hazırlanmış Menümüzü Keşfedin
          </h2>

          {/* Hardened Global Menu Disclosure (FIX 2) */}
          <div className="inline-flex items-center gap-1.5 text-xs text-bplus-mutedText px-3.5 py-1.5 rounded-full bg-bplus-warmWhite border border-bplus-border/80 shadow-soft">
            <Info className="w-3.5 h-3.5 text-bplus-latte" />
            <span>Menü ve fiyatlar örnek içeriktir. Bu prototipte gerçek sipariş alınmaz. Dijital sipariş deneyimi gelecek ürün vizyonunun bir parçasıdır.</span>
          </div>
        </div>

        {/* Category Pills Navigation (Canonical Categories) */}
        <div className="mb-12">
          <MenuCategoryNav
            activeCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        </div>

        {/* Product Cards Grid */}
        <div
          id="menu-product-grid"
          role="region"
          aria-live="polite"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-300"
        >
          {filteredProducts.map((product: WebProduct) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-bplus-warmWhite rounded-2xl border border-bplus-border">
            <p className="text-sm font-medium text-bplus-mutedText">
              Bu kategoride şu anda listelenen örnek ürün bulunmamaktadır.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

