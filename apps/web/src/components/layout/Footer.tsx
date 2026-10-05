'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      className="bg-bplus-deepOlive text-bplus-warmWhite pt-16 pb-12 border-t border-bplus-sage/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-bplus-sage/20">
          {/* Brand Info (~5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/demo/brand-logo.webp"
                alt="B+ Logo"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover border border-bplus-sage/50"
              />
              <span className="font-bold text-lg tracking-tight">
                B+ Wellness Café
              </span>
            </div>
            <p className="text-xs text-bplus-sage/80 leading-relaxed max-w-sm">
              Nitelikli tek kökenli kahveler, adaptojenik bitkiler ve şehirli iş temposuna hafiflik katan üçüncü nesil kafe deneyimi by Mineiro Coffee.
            </p>
            <div className="text-xs text-bplus-sage/70 font-medium">
              &quot;İş gününe iyi bir +.&quot;
            </div>
          </div>

          {/* Quick Links (~4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-bplus-sage">
              Gezinme
            </div>
            <ul className="space-y-2 text-xs text-bplus-warmWhite/80">
              <li>
                <Link href="/concept" className="hover:text-bplus-sage transition-colors">
                  Konsept &amp; Felsefe
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-bplus-sage transition-colors">
                  Özenle Hazırlanmış Menü
                </Link>
              </li>
              <li>
                <Link href="/#ai-barista" className="hover:text-bplus-sage transition-colors">
                  AI Barista Vitrini
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-bplus-sage transition-colors">
                  Şube &amp; Çalışma Saatleri (Örnek)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-bplus-sage transition-colors">
                  İletişim &amp; Topluluk
                </Link>
              </li>
            </ul>
          </div>

          {/* Back to top & Info (~3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-bplus-sage/40 text-xs font-semibold text-bplus-sage hover:bg-bplus-sage/15 transition-colors"
            >
              <span>Başa Dön</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="text-[11px] text-bplus-cream/90 mt-6 md:mt-0 md:text-right">
              <div>İstanbul / Türkiye</div>
              <div>Mecidiyeköy, Şişli (Pilot Şube)</div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-bplus-cream/90">
          <div className="text-center md:text-left max-w-2xl text-[11px] leading-relaxed">
            <strong className="text-bplus-warmWhite">ZORUNLU PROTOTİP BİLDİRİMİ:</strong> Bu çalışma demo amaçlıdır. Web sitesinde yer alan fiyatlar, çalışma saatleri, şube adresleri ve ürün bilgileri prototip sunumu niteliğindedir. Gerçek sipariş veya ödeme alınmaz.
          </div>
          <div className="shrink-0 text-center md:text-right text-[11px] text-bplus-cream/90">
            © 2026 B+ Wellness Café by Mineiro Coffee. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
};

