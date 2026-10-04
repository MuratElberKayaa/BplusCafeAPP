'use client';

import React, { useState } from 'react';
import { Smartphone, CheckCircle, ArrowRight, Bell } from 'lucide-react';

interface PreOrderSectionProps {
  onOpenPreOrderModal: () => void;
}

export const PreOrderSection: React.FC<PreOrderSectionProps> = ({ onOpenPreOrderModal }) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
    }, 2000);
  };

  return (
    <section
      id="preorder"
      aria-labelledby="preorder-title"
      className="py-20 lg:py-28 bg-bplus-cream border-t border-bplus-border/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-bplus-warmWhite rounded-3xl p-8 sm:p-12 lg:p-14 border border-bplus-border/80 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Workflow Description (~60%) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bplus-sage/25 border border-bplus-sage text-xs font-bold text-bplus-deepOlive mb-4">
                <Bell className="w-3.5 h-3.5 text-bplus-olive" />
                <span>DEMO / YAKINDA • ORDER AHEAD</span>
              </div>

              <h2
                id="preorder-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bplus-deepOlive tracking-tight mb-4 leading-tight"
              >
                Gelmeden seç. Sıra beklemeden al.
              </h2>
              <p className="text-sm sm:text-base text-bplus-mutedText leading-relaxed mb-8">
                Ofisten çıkmadan önce mobil uygulamadan içeceğini özelleştir; baristan siparişini hazırlarken kasada vakit kaybetmeden sıcak teslim al.
              </p>

              {/* 3 Step Workflow */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-bplus-cream/60 border border-bplus-border">
                  <div className="w-7 h-7 rounded-full bg-bplus-deepOlive text-bplus-warmWhite text-xs font-bold flex items-center justify-center mb-2">
                    1
                  </div>
                  <div className="text-xs font-bold text-bplus-deepOlive mb-1">
                    Uygulamadan Seç
                  </div>
                  <div className="text-[11px] text-bplus-mutedText">
                    Süt, tatlılık ve boyutunu dilediğin gibi kişiselleştir.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bplus-cream/60 border border-bplus-border">
                  <div className="w-7 h-7 rounded-full bg-bplus-deepOlive text-bplus-warmWhite text-xs font-bold flex items-center justify-center mb-2">
                    2
                  </div>
                  <div className="text-xs font-bold text-bplus-deepOlive mb-1">
                    Canlı Takip Et
                  </div>
                  <div className="text-[11px] text-bplus-mutedText">
                    Baristanın hazırlık durumunu anlık ekrandan izle.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bplus-cream/60 border border-bplus-border">
                  <div className="w-7 h-7 rounded-full bg-bplus-deepOlive text-bplus-warmWhite text-xs font-bold flex items-center justify-center mb-2">
                    3
                  </div>
                  <div className="text-xs font-bold text-bplus-deepOlive mb-1">
                    Beklemeden Al
                  </div>
                  <div className="text-[11px] text-bplus-mutedText">
                    Kasada sıra beklemeden teslim noktasından bardağını al.
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenPreOrderModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-bplus-deepOlive text-bplus-warmWhite font-bold text-sm hover:bg-bplus-olive active:scale-[0.98] transition-all shadow-card"
                >
                  <span>Demo Akışı Gör</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Mobile App Teaser & Newsletter (~40%) */}
            <div className="lg:col-span-5 bg-bplus-cream/80 p-6 sm:p-8 rounded-2xl border border-bplus-border">
              <div className="flex items-center gap-2.5 text-xs font-bold text-bplus-deepOlive mb-2">
                <Smartphone className="w-4 h-4 text-bplus-olive" />
                <span>B+ Müşteri Mobil Uygulaması</span>
              </div>
              <p className="text-xs text-bplus-mutedText mb-5 leading-relaxed">
                Açılış gününe özel ilk kahveniz bizden olsun. E-posta adresinizi bırakarak mobil uygulama lansmanından haberdar olun.
              </p>

              {isSubscribed ? (
                <div className="p-4 rounded-xl bg-bplus-sage/30 border border-bplus-sage text-xs font-bold text-bplus-deepOlive flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-bplus-olive" />
                  <span>Teşekkürler! Lansman bildirimi için kaydınız alındı. [DEMO]</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div>
                    <label htmlFor="newsletter-email" className="sr-only">
                      E-posta Adresi
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      placeholder="E-posta adresiniz..."
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-bplus-warmWhite border border-bplus-border text-xs sm:text-sm text-bplus-espresso placeholder-bplus-mutedText focus:outline-none focus:ring-2 focus:ring-bplus-olive"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-bplus-olive text-bplus-warmWhite font-bold text-xs hover:bg-bplus-deepOlive transition-colors shadow-sm"
                  >
                    Haberdar Et (Demo Kayıt)
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

