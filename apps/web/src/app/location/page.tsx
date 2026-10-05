'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { PreOrderModal } from '../../components/preorder/PreOrderModal';
import {
  MapPin,
  Clock,
  Wifi,
  Laptop,
  Heart,
  Bike,
  Coffee,
  Navigation,
  Sparkles,
  Info,
  CheckCircle2,
} from 'lucide-react';

export default function LocationPage() {
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);
  const [routeNotif, setRouteNotif] = useState<string | null>(null);

  const handleRouteSimulate = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      'https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cac64c07925733:0x96ea14ba8be2cdb6?sa=X&ved=1t:8290&ictx=111',
      '_blank',
      'noopener,noreferrer'
    );
    setRouteNotif('Google Haritalar yeni sekmede açıldı: Mecidiyeköy Mahallesi, Büyükdere Cd., 34394 Şişli/İstanbul');
    setTimeout(() => {
      setRouteNotif(null);
    }, 4500);
  };

  const amenities = [
    {
      icon: Wifi,
      title: 'Yüksek Hızlı Fiber Wi-Fi',
      desc: 'Kesintisiz video konferans ve yüksek bant genişliği.',
    },
    {
      icon: Laptop,
      title: 'Prizli Çalışma Masaları',
      desc: 'Her masada Type-C ve 220V şarj girişleri.',
    },
    {
      icon: Coffee,
      title: 'Artisanal Brew Bar',
      desc: 'V60, Chemex ve Aeropress tek kökenli demlemeler.',
    },
    {
      icon: Heart,
      title: 'Evcil Hayvan Dostu Bahçe',
      desc: 'Dostlarınızla açık havada keyifli bir mola.',
    },
    {
      icon: Bike,
      title: 'Bisiklet Parkı',
      desc: 'Güvenli bisiklet kilitleme istasyonu.',
    },
    {
      icon: Sparkles,
      title: 'Akustik Konfor',
      desc: 'Odaklanmayı destekleyen düşük desibelli ambiyans müziği.',
    },
  ];

  const upcomingLocations = [
    {
      name: 'Levent / Plaza Hub',
      type: 'İş Kulesi Express Formatı',
      timing: 'Q3 2026 Hazırlık',
      features: 'Hızlı Gel-Al, Ön Sipariş Dolabı, Fonksiyonel Grab & Go',
    },
    {
      name: 'Maslak / Teknoloji Vadisi',
      type: 'Büyük Konsept Mağaza',
      timing: 'Q4 2026 Projelendiriliyor',
      features: 'Ortak Çalışma Alanı, Podcast Odası, Açık Teras',
    },
    {
      name: 'Bağdat Caddesi / Caddebostan',
      type: 'Cadde Mağazası & Wellness Studio',
      timing: '2027 Planlama',
      features: 'Sabah Koşu Topluluğu Buluşma Noktası, Matcha Bar',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenPreOrder={() => setIsPreOrderOpen(true)} />

      <main id="main-content" className="flex-1 pt-28 pb-20 lg:pt-36 lg:pb-28 bg-bplus-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Sayfa Yolu" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-bplus-mutedText">
              <li>
                <Link href="/" className="hover:text-bplus-deepOlive transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-bplus-deepOlive" aria-current="page">
                Şubelerimiz
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bplus-warmWhite border border-bplus-border shadow-soft mb-4">
              <MapPin className="w-3.5 h-3.5 text-bplus-olive" />
              <span className="text-xs font-semibold uppercase tracking-wider text-bplus-deepOlive">
                Şubelerimiz &amp; Deneyim Alanı
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bplus-deepOlive tracking-tight mb-4 leading-tight">
              Sana En Yakın B+ Noktası
            </h1>

            <p className="text-sm sm:text-base text-bplus-mutedText leading-relaxed mb-6">
              İş temposunun ortasında nefes alabileceğin, odaklanarak çalışabileceğin ve bedeninle barışık taze kahveler deneyimleyebileceğin modern yaşam alanı.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-bplus-deepOlive px-4 py-2 rounded-full bg-bplus-latte/30 border border-bplus-latte">
              <Info className="w-4 h-4 text-bplus-olive shrink-0" />
              <span>
                <strong>LOKASYON:</strong> Mecidiyeköy Mahallesi, Büyükdere Caddesi pilot mağazamız hizmetinizdedir.
              </span>
            </div>
          </div>

          {/* Pilot Branch Showcase Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            {/* Left: Info & Hours (5 cols) */}
            <div className="lg:col-span-5 bg-bplus-warmWhite rounded-2xl p-7 sm:p-8 border border-bplus-border/80 shadow-soft flex flex-col justify-between">
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-bplus-border/80 shadow-soft">
                  <img
                    src="/images/demo/store-signage.webp"
                    alt="B+ Wellness Café Şişli Mecidiyeköy Şubesi Tabelası ve Girişi"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <div className="inline-block px-2.5 py-1 rounded-full bg-bplus-sage/30 text-bplus-deepOlive text-[10px] font-bold uppercase tracking-wider mb-2">
                    Pilot Şube
                  </div>
                  <h2 className="text-2xl font-bold text-bplus-deepOlive">
                    Mecidiyeköy Şubesi
                  </h2>
                  <p className="text-xs text-bplus-mutedText mt-1">
                    Mecidiyeköy Mahallesi, Büyükdere Cd., 34394 Şişli/İstanbul
                  </p>
                </div>

                <div className="pt-4 border-t border-bplus-border/50">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bplus-deepOlive mb-3">
                    <Clock className="w-4 h-4 text-bplus-olive" />
                    <span>Çalışma Saatleri</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-bplus-border/40">
                      <span className="text-bplus-mutedText">Pazartesi – Cuma</span>
                      <strong className="text-bplus-deepOlive">07:30 – 22:00</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-bplus-border/40">
                      <span className="text-bplus-mutedText">Cumartesi</span>
                      <strong className="text-bplus-deepOlive">08:30 – 23:00</strong>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-bplus-mutedText">Pazar</span>
                      <strong className="text-bplus-deepOlive">08:30 – 22:00</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-bplus-border/50">
                  <div className="text-xs font-bold text-bplus-deepOlive mb-2">
                    Ulaşım Bilgisi
                  </div>
                  <p className="text-xs text-bplus-mutedText leading-relaxed">
                    M2 Yenikapı-Hacıosman ve M7 Yıldız-Mahmutbey Metro Hatları Mecidiyeköy İstasyonu ile Metrobüs durağına 2-3 dakika yürüme mesafesinde. Büyükdere Caddesi iş ve plaza aksında yer alır.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-bplus-border/50 space-y-3">
                <button
                  type="button"
                  onClick={handleRouteSimulate}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-bplus-deepOlive text-bplus-warmWhite text-xs font-bold hover:bg-bplus-olive transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Haritalar&apos;da Aç</span>
                </button>

                {routeNotif && (
                  <div className="p-3 rounded-lg bg-bplus-sage/20 border border-bplus-sage/40 text-[11px] text-bplus-deepOlive font-medium text-center">
                    {routeNotif}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Stylized Vector Map Preview (7 cols) */}
            <div className="lg:col-span-7 bg-bplus-warmWhite rounded-2xl p-6 sm:p-8 border border-bplus-border/80 shadow-soft flex flex-col justify-between">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-bplus-deepOlive">
                  Şişli / Mecidiyeköy Harita Konumu
                </div>
                <a
                  href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cac64c07925733:0x96ea14ba8be2cdb6?sa=X&ved=1t:8290&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-bplus-olive hover:underline"
                >
                  Google Maps&apos;te Gör ↗
                </a>
              </div>

              {/* Stylized Vector Architectural Map Container */}
              <div className="relative w-full h-[320px] sm:h-[360px] rounded-xl overflow-hidden bg-[#e8e2d2] border border-bplus-border/60 flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 500"
                  preserveAspectRatio="none"
                >
                  <path d="M 0 100 Q 200 150 400 80 T 800 120" stroke="#7d8b6a" strokeWidth="16" fill="none" />
                  <path d="M 150 0 L 150 500" stroke="#c4beaa" strokeWidth="10" />
                  <path d="M 350 0 L 350 500" stroke="#c4beaa" strokeWidth="12" />
                  <path d="M 550 0 L 550 500" stroke="#c4beaa" strokeWidth="8" />
                  <path d="M 0 250 L 800 250" stroke="#c4beaa" strokeWidth="14" />
                  <path d="M 0 380 L 800 380" stroke="#c4beaa" strokeWidth="8" />
                  <circle cx="350" cy="250" r="180" fill="#7d8b6a" opacity="0.08" />
                </svg>

                {/* Central Branch Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-bplus-deepOlive text-bplus-warmWhite flex items-center justify-center shadow-elevated border-2 border-bplus-warmWhite animate-pulse">
                    <MapPin className="w-6 h-6 text-bplus-sage" />
                  </div>
                  <div className="mt-2 px-3 py-1.5 rounded-lg bg-bplus-warmWhite shadow-card border border-bplus-border text-center">
                    <div className="text-xs font-bold text-bplus-deepOlive">B+ Wellness Café Mecidiyeköy</div>
                    <div className="text-[10px] text-bplus-olive font-semibold">Büyükdere Cad. • Açık (22:00)</div>
                  </div>
                </div>

                {/* Floating Map Legend */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-bplus-warmWhite/90 backdrop-blur-sm border border-bplus-border text-[10px] text-bplus-mutedText">
                  Mecidiyeköy Mah., Büyükdere Cd., Şişli
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-bplus-mutedText">
                <span>Mecidiyeköy Metro &amp; Metrobüs 200m</span>
                <span>Cevahir AVM 350m</span>
                <span>Büyükdere Caddesi İş Aksı</span>
              </div>
            </div>
          </div>

          {/* Store Amenities Grid */}
          <div className="mb-20">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-bplus-olive mb-2">
                Konfor &amp; Altyapı
              </div>
              <h2 className="text-2xl font-bold text-bplus-deepOlive tracking-tight">
                Mağaza Olanakları
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-bplus-warmWhite border border-bplus-border/80 shadow-soft flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-bplus-cream border border-bplus-sage/60 text-bplus-olive flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-bplus-deepOlive mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-bplus-mutedText leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming Expansion Pipeline */}
          <div className="p-8 sm:p-10 rounded-2xl bg-bplus-warmWhite border border-bplus-border/80 shadow-soft">
            <div className="max-w-2xl mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-bplus-latte/30 text-bplus-deepOlive text-[10px] font-bold uppercase tracking-wider mb-2">
                Büyüme Yol Haritası
              </div>
              <h2 className="text-2xl font-bold text-bplus-deepOlive tracking-tight mb-2">
                Yakında Açılacak B+ Lokasyonları
              </h2>
              <p className="text-xs sm:text-sm text-bplus-mutedText leading-relaxed">
                Şehirli çalışanların yoğun olduğu ana iş akslarında ve dinamik cadde merkezlerinde yeni şube hazırlıklarımız sürüyor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-bplus-cream/70 border border-bplus-border/70 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-bplus-deepOlive text-bplus-warmWhite inline-block mb-3">
                      {loc.timing}
                    </span>
                    <h3 className="text-base font-bold text-bplus-deepOlive mb-1">
                      {loc.name}
                    </h3>
                    <div className="text-xs font-semibold text-bplus-olive mb-2">
                      {loc.type}
                    </div>
                    <p className="text-xs text-bplus-mutedText leading-relaxed">
                      {loc.features}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-bplus-border/50 flex items-center gap-1.5 text-[11px] text-bplus-deepOlive font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-bplus-olive" />
                    <span>Lokasyon Değerlendirmesi Tamamlandı</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <PreOrderModal
        isOpen={isPreOrderOpen}
        onClose={() => setIsPreOrderOpen(false)}
      />
    </div>
  );
}
