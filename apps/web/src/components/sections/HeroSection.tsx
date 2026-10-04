'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-bplus-cream"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions (~45%) */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bplus-warmWhite border border-bplus-border shadow-soft mb-6">
              <Sparkles className="w-3.5 h-3.5 text-bplus-olive" />
              <span className="text-xs font-semibold uppercase tracking-wider text-bplus-deepOlive">
                B+ Wellness Café by Mineiro Coffee
              </span>
            </div>

            {/* Display Headline */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-bplus-deepOlive leading-[1.12] tracking-tight mb-5"
            >
              İş gününe iyi bir <span className="text-bplus-olive">+</span>.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-bplus-mutedText leading-relaxed mb-8 max-w-lg">
              Nitelikli tek kökenli kahveler, adaptojenik botanikler ve şehir temposuna hafiflik katan fonksiyonel lezzetler.
            </p>

            {/* Trust Badge Capsule */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-medium text-bplus-deepOlive">
              <span className="px-3 py-1.5 rounded-full bg-bplus-warmWhite border border-bplus-sage/60">
                Rafine Şekersiz
              </span>
              <span className="text-bplus-sage">•</span>
              <span className="px-3 py-1.5 rounded-full bg-bplus-warmWhite border border-bplus-sage/60">
                Bitkisel Alternatifler
              </span>
              <span className="text-bplus-sage">•</span>
              <span className="px-3 py-1.5 rounded-full bg-bplus-warmWhite border border-bplus-sage/60">
                Nitelikli Çekirdek
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-bplus-deepOlive text-bplus-warmWhite font-bold text-sm hover:bg-bplus-olive active:scale-[0.98] transition-all shadow-card"
              >
                Menüyü Keşfet
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#concept"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-bplus-deepOlive/80 text-bplus-deepOlive font-semibold text-sm hover:bg-bplus-warmWhite/80 transition-colors"
              >
                Konsepti Gör
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition (~55%) */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Subtle Background Aura */}
              <div className="absolute -inset-4 bg-bplus-sage/20 rounded-3xl blur-2xl -z-10" />

              {/* Main Editorial Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-bplus-border/60 bg-bplus-warmWhite">
                <img
                  src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1200&auto=format&fit=crop"
                  alt="B+ Artisanal Single-Origin Cold Brew cam bardakta, doğal sabah ışığında traverten zemin üzerinde"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Editorial Floating Card */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-bplus-warmWhite/95 backdrop-blur-md p-4 rounded-xl shadow-card border border-bplus-border/80">
                  <div className="flex items-center justify-between text-xs font-semibold text-bplus-deepOlive mb-1">
                    <span>Günün Reçetesi</span>
                    <span className="text-bplus-olive font-bold">₺145.00 [DEMO]</span>
                  </div>
                  <div className="text-sm font-bold text-bplus-espresso mb-1">
                    Lion&apos;s Mane Cold Brew
                  </div>
                  <div className="text-xs text-bplus-mutedText leading-snug">
                    16 saat yavaş demleme tek kökenli çekirdek ve organik yulaf sütü.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

