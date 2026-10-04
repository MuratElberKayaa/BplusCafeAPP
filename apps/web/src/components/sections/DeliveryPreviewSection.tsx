'use client';

import React, { useState } from 'react';
import { Package, Bell, CheckCircle } from 'lucide-react';

export const DeliveryPreviewSection: React.FC = () => {
  const [notified, setNotified] = useState(false);

  const handleNotify = () => {
    setNotified(true);
    setTimeout(() => {
      setNotified(false);
    }, 3000);
  };

  return (
    <section
      aria-label="Teslimat Ön Gösterimi"
      className="py-12 bg-bplus-cream border-t border-bplus-border/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-bplus-warmWhite border border-bplus-sage/50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-bplus-cream flex items-center justify-center shrink-0 text-bplus-olive border border-bplus-border">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-bplus-sage/30 text-bplus-deepOlive text-[10px] font-bold uppercase tracking-wider mb-1">
                GELECEK FAZ • DELIVERY MODEL TBD
              </div>
              <h3 className="text-base sm:text-lg font-bold text-bplus-deepOlive">
                Ofisinize ve Evinize Sağlıklı Mola (Yakında)
              </h3>
              <p className="text-xs text-bplus-mutedText">
                Özel ısı korumalı cam ambalajlar ve çevre dostu paketlemeyle fonksiyonel içeceklerinizi çalışma masanıza ulaştırma hazırlığındayız.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            {notified ? (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bplus-sage/30 text-xs font-bold text-bplus-deepOlive border border-bplus-sage">
                <CheckCircle className="w-4 h-4 text-bplus-olive" />
                <span>Bildirim Notu Alındı! [DEMO]</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleNotify}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-bplus-deepOlive text-xs font-bold text-bplus-deepOlive hover:bg-bplus-cream transition-colors"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>Haber Ver</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

