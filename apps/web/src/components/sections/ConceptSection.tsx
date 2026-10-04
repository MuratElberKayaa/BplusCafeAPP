'use client';

import React from 'react';
import { CheckCircle2, Coffee, Feather, Zap } from 'lucide-react';

export const ConceptSection: React.FC = () => {
  return (
    <section
      id="concept"
      aria-labelledby="concept-title"
      className="py-20 lg:py-28 bg-bplus-cream border-t border-bplus-border/60 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Photo Composition (~45%) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-bplus-border/70 bg-bplus-warmWhite">
              <img
                src="/images/demo/concept-roasting.webp"
                alt="Mineiro Coffee kavurma çekirdekleri ve seremoniyel matcha kasesi artisanal kompozisyonu"
                width={900}
                height={600}
                className="w-full h-[400px] sm:h-[480px] aspect-[3/2] object-cover"
              />

              {/* Minimalist Botanical Badge Tag */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-bplus-warmWhite/90 backdrop-blur-md border border-bplus-border/80 text-[11px] font-bold text-bplus-deepOlive flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-bplus-olive" />
                <span>Mineiro Coffee Roasting</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Manifesto & 3 Pillars (~55%) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-xs font-bold uppercase tracking-widest text-bplus-olive mb-3">
              B+ Manifestosu
            </div>
            <h2
              id="concept-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bplus-deepOlive tracking-tight mb-6 leading-tight"
            >
              Nitelikli Kahve, Bedenine İyi Gelen İçeriklerle Buluştuğunda.
            </h2>
            <p className="text-sm sm:text-base text-bplus-mutedText leading-relaxed mb-8">
              Biz kahveyi yalnızca bir kafein kaynağı olarak değil; günün akışını güzelleştiren, zihne ferahlık katan bir zanaat olarak görüyoruz. Geleneksel zincirlerin ağır şuruplu tarifleri yerine temiz, organik ve fonksiyonel bitkileri merkezimize alıyoruz.
            </p>

            {/* 3 Pillars List */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-bplus-warmWhite border border-bplus-sage/70 flex items-center justify-center shrink-0 text-bplus-olive mt-0.5 shadow-sm">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-bplus-deepOlive mb-1">
                    1. Dürüst & Katkısız Reçeteler
                  </h3>
                  <p className="text-xs sm:text-sm text-bplus-mutedText leading-relaxed">
                    Yapay şuruplara ve rafine şekere yer yok. Reçetelerimizde yalnızca sertifikalı botanik özler, taze çekilmiş baharatlar ve saf bitkisel sütler kullanılır.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-bplus-warmWhite border border-bplus-sage/70 flex items-center justify-center shrink-0 text-bplus-olive mt-0.5 shadow-sm">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-bplus-deepOlive mb-1">
                    2. Artisanal Çekirdek Ustalığı
                  </h3>
                  <p className="text-xs sm:text-sm text-bplus-mutedText leading-relaxed">
                    Mineiro Coffee deneyimiyle profillendirilmiş, yumuşak asidite profiline sahip tek kökenli Arabica çekirdekleri ile demlenir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-bplus-warmWhite border border-bplus-sage/70 flex items-center justify-center shrink-0 text-bplus-olive mt-0.5 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-bplus-deepOlive mb-1">
                    3. Şehirli Kolaylık & Hız
                  </h3>
                  <p className="text-xs sm:text-sm text-bplus-mutedText leading-relaxed">
                    Yoğun iş gününde sıra beklemeden, pratik self-servis ve mobil gel-al (Order Ahead) standardıyla anında taze teslimat.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-sm font-bold text-bplus-olive hover:text-bplus-deepOlive hover:underline transition-colors"
            >
              <span>Seçkin Menümüzü İnceleyin</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

