'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Check, Clock, AlertTriangle, ArrowRight, Store } from 'lucide-react';
import { WebProduct, WEB_PRODUCTS } from '../../data/webData';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: WebProduct | null;
}

export const PreOrderModal: React.FC<PreOrderModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState<WebProduct>(
    initialProduct || WEB_PRODUCTS[0]
  );
  const [pickupTime, setPickupTime] = useState<string>('10 dakika sonra (08:45)');
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
    }
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement;
      setCurrentStep(1);
      document.body.style.overflow = 'hidden';

      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
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
  }, [isOpen, initialProduct, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preorder-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-bplus-espresso/65 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-lg max-h-[90vh] overflow-y-auto bg-bplus-warmWhite rounded-t-3xl sm:rounded-2xl shadow-modal border border-bplus-border flex flex-col justify-between"
      >
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-bplus-border/70 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-bplus-olive">
              Simülatör • Order Ahead
            </div>
            <h2 id="preorder-modal-title" className="text-lg font-bold text-bplus-deepOlive">
              B+ Ön Sipariş Deneyimi (Demo)
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-bplus-cream flex items-center justify-center text-bplus-deepOlive hover:bg-bplus-border/60 transition-colors"
            aria-label="Ön sipariş penceresini kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Stepper Indicator */}
        <div className="px-6 pt-4 pb-2 bg-bplus-cream/40 flex items-center justify-between border-b border-bplus-border/50 text-xs font-semibold text-bplus-mutedText">
          <span className={currentStep >= 1 ? 'text-bplus-deepOlive font-bold' : ''}>
            1. Ürün Seçimi
          </span>
          <span>→</span>
          <span className={currentStep >= 2 ? 'text-bplus-deepOlive font-bold' : ''}>
            2. Gel-Al Zamanı
          </span>
          <span>→</span>
          <span className={currentStep === 3 ? 'text-bplus-deepOlive font-bold' : ''}>
            3. Simülasyon Özeti
          </span>
        </div>

        {/* Modal Body Step Content */}
        <div className="p-6 space-y-5">
          {/* STEP 1: Product Selection */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-bplus-deepOlive uppercase tracking-wider">
                Adım 1: Denemek İstediğiniz Ürünü Seçin
              </div>
              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {WEB_PRODUCTS.slice(0, 5).map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      selectedProduct.id === prod.id
                        ? 'bg-bplus-cream border-bplus-olive shadow-sm'
                        : 'bg-bplus-warmWhite border-bplus-border hover:bg-bplus-cream/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={prod.imageUrl}
                        alt=""
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-bplus-deepOlive">{prod.name}</div>
                        <div className="text-[11px] text-bplus-mutedText">{prod.tags.join(' • ')}</div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-bplus-olive">{prod.priceFormatted}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Pickup Time */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-bplus-deepOlive uppercase tracking-wider">
                Adım 2: Mağazadan Ne Zaman Teslim Alacaksınız?
              </div>
              <div className="space-y-2.5">
                {[
                  '10 dakika sonra (08:45)',
                  '20 dakika sonra (08:55)',
                  '30 dakika sonra (09:05)',
                ].map((timeOption) => (
                  <label
                    key={timeOption}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      pickupTime === timeOption
                        ? 'bg-bplus-cream border-bplus-olive'
                        : 'bg-bplus-warmWhite border-bplus-border hover:bg-bplus-cream/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="pickupTime"
                      checked={pickupTime === timeOption}
                      onChange={() => setPickupTime(timeOption)}
                      className="accent-bplus-olive"
                    />
                    <Clock className="w-4 h-4 text-bplus-olive" />
                    <span className="text-xs font-medium text-bplus-espresso">{timeOption}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Summary & Prominent Prototype Warning */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-bplus-deepOlive uppercase tracking-wider">
                Adım 3: Demo Sipariş Özeti
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-xl bg-bplus-cream/70 border border-bplus-border space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-bplus-mutedText">Seçili Ürün:</span>
                  <span className="font-bold text-bplus-deepOlive">{selectedProduct.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-bplus-mutedText">Teslimat Zamanı:</span>
                  <span className="font-semibold text-bplus-deepOlive">{pickupTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-bplus-mutedText">Örnek Şube:</span>
                  <span className="font-semibold text-bplus-deepOlive flex items-center gap-1">
                    <Store className="w-3.5 h-3.5 text-bplus-olive" />
                    Mecidiyeköy Şubesi (Büyükdere Cd., Şişli)
                  </span>
                </div>
                <div className="text-[10px] text-bplus-mutedText italic">
                  * Mecidiyeköy Mahallesi, Büyükdere Cd., 34394 Şişli/İstanbul
                </div>
                <div className="flex justify-between pt-2 border-t border-bplus-border/60 text-sm font-bold text-bplus-deepOlive">
                  <span>Demo Tutar:</span>
                  <span>{selectedProduct.priceFormatted}</span>
                </div>
              </div>

              {/* STRICT DEMO NOTICE BOX */}
              <div className="p-4 rounded-xl bg-[#FDF2F2] border border-[#F5C2C7] text-[#842029] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-[#842029]" />
                  <span>PROTOTİP TAMAMLANDI — GERÇEK SİPARİŞ / ÖDEME OLUŞTURULMADI</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Bu web sitesi konsept vitrinidir. Gerçek temassız ödeme ve sipariş alımı, şubemizin açılışıyla birlikte B+ Müşteri Mobil Uygulaması üzerinden sunulacaktır. Hiçbir finansal kart veya kişisel veri talep edilmemiştir.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="p-5 bg-bplus-cream/60 border-t border-bplus-border flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-4 py-2 rounded-full text-xs font-semibold text-bplus-espresso hover:bg-bplus-warmWhite"
            >
              Geri
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold text-bplus-espresso hover:bg-bplus-warmWhite"
            >
              İptal
            </button>
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-bplus-deepOlive text-bplus-warmWhite text-xs font-bold hover:bg-bplus-olive"
            >
              <span>Devam Et</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-bplus-deepOlive text-bplus-warmWhite text-xs font-bold hover:bg-bplus-olive"
            >
              Anladım & Kapat
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

