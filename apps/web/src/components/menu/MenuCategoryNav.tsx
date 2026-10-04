'use client';

import React from 'react';
import { WEB_CATEGORIES, WebCategory } from '../../data/webData';

interface MenuCategoryNavProps {
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
}

export const MenuCategoryNav: React.FC<MenuCategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Menü Kategorileri"
        className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-3 pt-1 px-1 lg:justify-center"
      >
        {WEB_CATEGORIES.map((category: WebCategory) => {
          const isSelected = activeCategory === category.slug;
          return (
            <button
              key={category.id}
              role="tab"
              type="button"
              id={`tab-${category.slug}`}
              aria-selected={isSelected}
              aria-controls="menu-product-grid"
              onClick={() => onSelectCategory(category.slug)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all duration-200 select-none ${
                isSelected
                  ? 'bg-bplus-deepOlive text-bplus-warmWhite shadow-card scale-[1.02]'
                  : 'bg-bplus-warmWhite text-bplus-espresso/80 border border-bplus-border hover:border-bplus-sage hover:bg-bplus-cream/80'
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

