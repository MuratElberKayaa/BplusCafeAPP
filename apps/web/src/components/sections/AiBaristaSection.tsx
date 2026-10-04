'use client';

import React, { useState } from 'react';
import { Sparkles, Bot, ShieldCheck, ArrowRight } from 'lucide-react';
import { AI_SCENARIOS, WEB_PRODUCTS, WebProduct } from '../../data/webData';

interface AiBaristaSectionProps {
  onInspectProduct: (product: WebProduct) => void;
}

export const AiBaristaSection: React.FC<AiBaristaSectionProps> = ({ onInspectProduct }) => {
  const [selectedIntentId, setSelectedIntentId] = useState<string>('intent_focus');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeScenario =
    AI_SCENARIOS.find((s) => s.intentId === selectedIntentId) || AI_SCENARIOS[0];

  const matchedProduct =
    WEB_PRODUCTS.find((p) => p.id === activeScenario.recommendedProductId) || WEB_PRODUCTS[0];

  const handleCtaClick = () => {
    setToastMessage('AI Barista prototip simülasyonu. Öneriler yalnızca demo katalogdaki ürünlerle sınırlandırılmıştır.');
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <section
      id="ai-barista"
      aria-labelledby="ai-title"
      className="py-20 lg:py-28 bg-bplus-cream border-t border-bplus-border/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Elevated Island Card Container */}
        <div className="relative bg-bplus-warmWhite rounded-3xl p-7 sm:p-10 lg:p-12 border-2 border-bplus-latte/60 shadow-elevated">
          {/* Top Badge: AI Prototype & Safe Grounding Claim (FIX 3) */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bplus-latte/20 border border-bplus-latte text-xs font-bold text-bplus-deepOlive">
              <Bot className="w-4 h-4 text-bplus-olive" />
              <span>AI BARISTA — PROTOTYPE</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-bplus-mutedText">
              <ShieldCheck className="w-4 h-4 text-bplus-olive" />
              <span>ADR-004: Prototip önerileri yalnızca demo katalogdaki ürünlerle sınırlandırılmıştır</span>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-2xl mb-8">
            <h2
              id="ai-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bplus-deepOlive tracking-tight mb-3"
            >
              Bugün Bedenin ve Zihnin Ne İstiyor?
            </h2>
            <p className="text-sm text-bplus-mutedText leading-relaxed">
              B+ AI Barista, gün içindeki niyetini ve damak zevkini dinler; demo menümüzdeki reçeteler arasından sana uygun seçeneği simüle eder.
            </p>
          </div>

          {/* User Intent Selector Chips */}
          <div className="mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-bplus-espresso/80 mb-3">
              Mola Niyetini Seç (User Intent):
            </div>
            <div className="flex flex-wrap gap-2.5">
              {AI_SCENARIOS.map((scenario) => {
                const isSelected = selectedIntentId === scenario.intentId;
                return (
                  <button
                    key={scenario.intentId}
                    type="button"
                    onClick={() => setSelectedIntentId(scenario.intentId)}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isSelected
                        ? 'bg-bplus-deepOlive text-bplus-warmWhite shadow-card border-2 border-bplus-latte'
                        : 'bg-bplus-cream/70 text-bplus-deepOlive border border-bplus-border hover:bg-bplus-cream'
                    }`}
                  >
                    {scenario.intentLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Suggested Drink Card */}
          <div className="bg-bplus-cream/60 rounded-2xl p-6 sm:p-8 border border-bplus-border/80 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden shrink-0 shadow-sm border border-bplus-border">
              <img
                src={matchedProduct.imageUrl}
                alt={matchedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bplus-warmWhite border border-bplus-latte/70 text-[11px] font-bold text-bplus-deepOlive mb-2">
                <Sparkles className="w-3.5 h-3.5 text-bplus-olive" />
                <span>%{activeScenario.matchScore} Uyum [DEMO SCORE / PROTOTYPE SIMULATION]</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-bplus-deepOlive mb-2">
                {matchedProduct.name}
              </h3>
              <p className="text-xs sm:text-sm text-bplus-mutedText leading-relaxed mb-4">
                {activeScenario.editorialNote}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => onInspectProduct(matchedProduct)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-bplus-olive hover:text-bplus-deepOlive transition-colors"
                >
                  <span>Reçete Detayını İncele</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full md:w-auto px-6 py-3 rounded-full bg-bplus-deepOlive text-bplus-warmWhite font-bold text-xs hover:bg-bplus-olive active:scale-[0.98] transition-all shadow-card"
              >
                AI Barista&apos;yı Keşfet (Demo)
              </button>
            </div>
          </div>

          {/* Toast notification message */}
          {toastMessage && (
            <div className="mt-4 p-3 rounded-xl bg-bplus-sage/30 border border-bplus-sage text-xs font-semibold text-bplus-deepOlive text-center animate-fadeIn">
              {toastMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
