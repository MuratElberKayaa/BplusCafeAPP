'use client';

import React, { useEffect, useRef } from 'react';
import { X, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { WebProduct } from '../../data/webData';

interface ProductModalProps {
  product: WebProduct | null;
  onClose: () => void;
  onPreOrder: (product: WebProduct) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onPreOrder }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (product) {
      triggerElementRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      // Auto focus the close button or first focusable element
      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    } else {
      document.body.style.overflow = 'unset';
      if (triggerElementRef.current) {
        triggerElementRef.current.focus();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      if (triggerElementRef.current) {
        triggerElementRef.current.focus();
      }
    };
  }, [product, onClose]);

  if (!product) return null;

  const renderDots = (value: number) => {
    return (
      <div className="flex items-center gap-1.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((level) => (
          <span
            key={level}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              level <= value ? 'bg-bplus-olive' : 'bg-bplus-border'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-bplus-espresso/65 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-bplus-warmWhite rounded-t-3xl sm:rounded-2xl shadow-modal border border-bplus-border flex flex-col justify-between"
      >
        {/* Header / Hero Area */}
        <div>
          {/* Top Bar with Drag Handle & Close Button */}
          <div className="relative">
            <div className="sm:hidden pt-3 pb-1 flex justify-center">
              <div className="w-10 h-1 bg-bplus-border rounded-full" />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-bplus-warmWhite/90 backdrop-blur-md border border-bplus-border flex items-center justify-center text-bplus-deepOlive hover:bg-bplus-cream transition-colors focus-visible:ring-2 focus-visible:ring-bplus-olive"
              aria-label="Ürün detay penceresini kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Product Media & Title Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 border-b border-bplus-border/60">
            <div className="sm:col-span-5 h-48 sm:h-full min-h-[200px] relative bg-bplus-cream overflow-hidden">
              <img
                src={product.imageUrl}
                alt={`${product.name} detaylı görseli`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-center">
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-bplus-sage/30 text-bplus-deepOlive border border-bplus-sage/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2
                id="modal-product-title"
                className="text-2xl font-extrabold text-bplus-deepOlive tracking-tight mb-2"
              >
                {product.name}
              </h2>
              <div className="text-lg font-bold text-bplus-olive mb-3">
                {product.priceFormatted}
              </div>
              <p className="text-xs text-bplus-mutedText leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-7 space-y-6">
            {/* Sensory Profile Section */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-bplus-deepOlive mb-3.5">
                Duyusal Profil
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 bg-bplus-cream/60 p-4 rounded-xl border border-bplus-border/70">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-bplus-deepOlive mb-1.5">
                    <span>Tatlılık</span>
                    <span className="text-[11px] text-bplus-mutedText">{product.sensory.sweetness}/5</span>
                  </div>
                  {renderDots(product.sensory.sweetness)}
                  <div className="text-[10px] text-bplus-mutedText mt-1.5">{product.sensory.sweetnessLabel}</div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-bplus-deepOlive mb-1.5">
                    <span>Gövde / Yoğunluk</span>
                    <span className="text-[11px] text-bplus-mutedText">{product.sensory.intensity}/5</span>
                  </div>
                  {renderDots(product.sensory.intensity)}
                  <div className="text-[10px] text-bplus-mutedText mt-1.5">{product.sensory.intensityLabel}</div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-bplus-deepOlive mb-1.5">
                    <span>Asidite</span>
                    <span className="text-[11px] text-bplus-mutedText">{product.sensory.acidity}/5</span>
                  </div>
                  {renderDots(product.sensory.acidity)}
                  <div className="text-[10px] text-bplus-mutedText mt-1.5">{product.sensory.acidityLabel}</div>
                </div>
              </div>
            </div>

            {/* Ingredients Section */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-bplus-deepOlive mb-2.5">
                İçindekiler & Botanik Reçete
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-bplus-espresso/90">
                {product.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-bplus-olive shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Allergens & Nutrition Sample */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-bplus-border/50">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-bplus-mutedText mb-1.5">
                  Alerjen Bildirimi
                </h4>
                <p className="text-xs text-bplus-espresso/80 leading-relaxed">
                  {product.allergens.join(' ')}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-bplus-mutedText mb-1.5">
                  Besin Değerleri (Örnek Porsiyon)
                </h4>
                <div className="flex flex-wrap gap-2 text-[11px] text-bplus-deepOlive font-medium">
                  <span className="px-2 py-0.5 rounded bg-bplus-cream">{product.nutritionSample.calories}</span>
                  <span className="px-2 py-0.5 rounded bg-bplus-cream">Protein: {product.nutritionSample.protein}</span>
                  <span className="px-2 py-0.5 rounded bg-bplus-cream">Şeker: {product.nutritionSample.sugar}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Demo Boundaries & Actions */}
        <div className="p-6 bg-bplus-cream/70 border-t border-bplus-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-bplus-mutedText">
            <ShieldCheck className="w-4 h-4 text-bplus-olive shrink-0" />
            <span>Demo ürün verisi — Bu prototipte gerçek sipariş alınmaz.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-bplus-border text-xs font-semibold text-bplus-espresso hover:bg-bplus-warmWhite transition-colors"
            >
              Kapat
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onPreOrder(product);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-bplus-deepOlive text-bplus-warmWhite font-bold text-xs hover:bg-bplus-olive active:scale-[0.98] transition-all shadow-sm w-full sm:w-auto"
            >
              <span>Demo Ön Sipariş</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

