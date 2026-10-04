'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WebProduct } from '../../data/webData';

interface ProductCardProps {
  product: WebProduct;
  onSelectProduct: (product: WebProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  return (
    <div
      className="group relative bg-bplus-warmWhite rounded-2xl border border-bplus-border/80 overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Product Image Frame */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-bplus-cream/50">
          <img
            src={product.imageUrl}
            alt={`${product.name} sunumu`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Dietary Tags Overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-bplus-warmWhite/90 backdrop-blur-md text-bplus-deepOlive border border-bplus-sage/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-bplus-deepOlive mb-2 group-hover:text-bplus-olive transition-colors leading-tight">
            {product.name}
          </h3>
          <p className="text-xs text-bplus-mutedText leading-relaxed line-clamp-2 mb-4">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Footer: Price & Inspect CTA Button */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-bplus-border/40 flex items-center justify-between">
        <div className="text-sm font-bold text-bplus-deepOlive">
          {product.priceFormatted}
        </div>
        <button
          type="button"
          onClick={() => onSelectProduct(product)}
          aria-haspopup="dialog"
          aria-label={`${product.name} detaylarını görüntüle`}
          className="inline-flex items-center gap-1 text-xs font-bold text-bplus-olive hover:text-bplus-deepOlive transition-colors px-3 py-1.5 rounded-full hover:bg-bplus-cream/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-bplus-olive"
        >
          <span>Detaylı Gör</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

