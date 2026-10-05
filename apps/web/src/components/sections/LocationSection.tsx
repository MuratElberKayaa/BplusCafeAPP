'use client';

import React, { useState } from 'react';
import { MapPin, Clock, AlertCircle, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [mapMessage, setMapMessage] = useState<string | null>(null);

  const handleRouteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      'https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cac64c07925733:0x96ea14ba8be2cdb6?sa=X&ved=1t:8290&ictx=111',
      '_blank',
      'noopener,noreferrer'
    );
    setMapMessage('Google Haritalar yeni sekmede açıldı.');
    setTimeout(() => {
      setMapMessage(null);
    }, 4000);
  };

  return (
    <section
      id="location"
      aria-labelledby="location-title"
      className="py-20 lg:py-28 bg-bplus-cream border-t border-bplus-border/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-bplus-olive uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Şubemiz ve Ulaşım</span>
          </div>
          <h2
            id="location-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bplus-deepOlive tracking-tight mb-3"
          >
            Şişli / İstanbul
          </h2>
          <div className="inline-block px-3 py-1 rounded-full bg-bplus-latte/25 border border-bplus-latte text-xs font-bold text-bplus-deepOlive">
            PİLOT ŞUBE — MECİDİYEKÖY BÜYÜKDERE CADDESİ
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Hours & Operational Table (5 cols) */}
          <div className="lg:col-span-5 bg-bplus-warmWhite rounded-2xl p-7 sm:p-8 border border-bplus-border/80 shadow-soft flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-bplus-mutedText mb-1">
                  Şube Adresi
                </div>
                <div className="text-base font-bold text-bplus-deepOlive">
                  Mecidiyeköy Mahallesi, Büyükdere Cd., 34394 Şişli/İstanbul
                </div>
                <div className="text-xs text-bplus-mutedText mt-1.5 leading-relaxed">
                  M2 ve M7 Metro Hatları Mecidiyeköy İstasyonu ile Metrobüs durağına 2-3 dakika yürüme mesafesinde.
                </div>
              </div>

              {/* Hours Table */}
              <div className="pt-4 border-t border-bplus-border/50">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bplus-deepOlive mb-3">
                  <Clock className="w-4 h-4 text-bplus-olive" />
                  <span>Çalışma Saatleri [DEMO SAATLER]</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-bplus-border/40">
                    <span className="text-bplus-espresso/80">Pazartesi – Cuma:</span>
                    <span className="font-bold text-bplus-deepOlive">07:30 – 22:00</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-bplus-border/40">
                    <span className="text-bplus-espresso/80">Cumartesi – Pazar:</span>
                    <span className="font-bold text-bplus-deepOlive">08:30 – 23:00</span>
                  </div>
                </div>

                {/* Cutoff Rule Notice */}
                <div className="mt-4 p-3 rounded-xl bg-bplus-cream/70 border border-bplus-border flex items-start gap-2 text-xs text-bplus-mutedText">
                  <AlertCircle className="w-4 h-4 text-bplus-olive shrink-0 mt-0.5" />
                  <span>
                    <strong>Sipariş Kesilme Kuralı:</strong> Kapanış saatinden 15 dakika önce sipariş alımı durdurulur (DEC-10).
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-6 border-t border-bplus-border/50 mt-6">
              <button
                type="button"
                onClick={handleRouteClick}
                className="w-full py-3 rounded-full bg-bplus-deepOlive text-bplus-warmWhite font-bold text-xs hover:bg-bplus-olive transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Haritalar&apos;da Aç</span>
              </button>
              {mapMessage && (
                <div className="mt-2 text-center text-xs font-medium text-bplus-olive animate-fadeIn">
                  {mapMessage}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Stylized Vector Map Card (7 cols) */}
          <div className="lg:col-span-7 bg-bplus-warmWhite rounded-2xl p-6 sm:p-8 border border-bplus-border/80 shadow-soft flex flex-col justify-between overflow-hidden relative">
            <div className="mb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-bplus-deepOlive mb-1">
                Kroki Görünümü
              </div>
              <div className="text-xs text-bplus-mutedText">
                Mecidiyeköy Mahallesi, Büyükdere Caddesi Konumu (Şişli / İstanbul)
              </div>
            </div>

            {/* Stylized SVG Map Placeholder */}
            <div className="relative w-full h-64 sm:h-80 bg-bplus-cream rounded-xl overflow-hidden border border-bplus-border flex items-center justify-center p-4">
              <svg
                viewBox="0 0 400 250"
                className="w-full h-full text-bplus-border/80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Road Grids */}
                <rect width="400" height="250" fill="#F4F0E6" />
                <path d="M 0 60 Q 150 70 400 40" stroke="#E3DEC3" strokeWidth="18" />
                <path d="M 0 160 Q 200 140 400 170" stroke="#E3DEC3" strokeWidth="22" />
                <path d="M 120 0 L 140 250" stroke="#E3DEC3" strokeWidth="16" />
                <path d="M 270 0 L 290 250" stroke="#E3DEC3" strokeWidth="16" />
                <path d="M 40 210 Q 200 230 380 210" stroke="#E3DEC3" strokeWidth="10" />

                {/* Parks / Green Areas */}
                <rect x="30" y="80" width="70" height="60" rx="8" fill="#AEB997" fillOpacity="0.25" />
                <rect x="160" y="20" width="90" height="40" rx="6" fill="#AEB997" fillOpacity="0.25" />
                <rect x="310" y="80" width="70" height="70" rx="8" fill="#AEB997" fillOpacity="0.25" />

                {/* B+ Pin Spot */}
                <circle cx="205" cy="115" r="24" fill="#34422D" fillOpacity="0.15" />
                <circle cx="205" cy="115" r="14" fill="#68734B" />
                <circle cx="205" cy="115" r="6" fill="#FFFDF8" />
              </svg>

              {/* Map Floating Pin Tag */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 bg-bplus-deepOlive text-bplus-warmWhite px-3 py-1.5 rounded-lg shadow-card text-xs font-bold flex items-center gap-1.5 border border-bplus-latte pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-bplus-latte" />
                <span>B+ Mecidiyeköy Şubesi</span>
              </div>
            </div>

            <div className="text-[11px] text-bplus-mutedText text-center mt-4">
              Mecidiyeköy Mahallesi, Büyükdere Cd., 34394 Şişli/İstanbul
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

