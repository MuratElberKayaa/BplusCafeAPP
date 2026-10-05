'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { PreOrderModal } from '../../components/preorder/PreOrderModal';
import { Feather, Coffee, Zap, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ConceptPage() {
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);

  const pillars = [
    {
      icon: Feather,
      title: 'Dürüst & Temiz İçerikler',
      subtitle: 'Rafine Şekersiz & Saf Botanikler',
      description:
        'Yapay aromalara, renklendiricilere ve sentetik şuruplara yer vermiyoruz. İçeceklerimizde yalnızca organik baharatlar, sertifikalı adaptojenik ekstraktlar ve saf bitkisel sütler kullanıyoruz.',
      highlight: 'Sıfır Rafine Şeker',
    },
    {
      icon: Coffee,
      title: 'Mineiro Çekirdek Ustalığı',
      subtitle: 'Tek Kökenli & Özenle Kavrulmuş',
      description:
        'Mineiro Coffee uzmanlığıyla profillendirilen tek kökenli Arabica çekirdeklerimiz, mideyi yormayan düşük asidite ve zengin gövde yapısıyla kavrulur. Her fincanda berrak bir tat profili sunar.',
      highlight: 'Specialty Grade %100 Arabica',
    },
    {
      icon: Zap,
      title: 'İş Gününe Bütünsel Zindelik',
      subtitle: 'Adaptojenler & Odaklanma',
      description:
        'Lion’s Mane, Ashwagandha, Maca ve Cordyceps gibi yüzyıllardır bilinen fonksiyonel botanikleri kahve zanaatıyla harmanlayarak çalışma temposunda enerjini dalgalanmadan korumanı sağlıyoruz.',
      highlight: 'Dengeli & Kalıcı Canlılık',
    },
    {
      icon: ShieldCheck,
      title: 'Sürdürülebilir & Hızlı Servis',
      subtitle: 'Çevre Dostu & Sıfır Bekleme',
      description:
        'Doğada çözünebilen kompostlanabilir bardaklar, çevreye duyarlı ambalajlar ve ofis çalışanları için sırasız, hızlı dijital gel-al deneyimi bir arada.',
      highlight: '%100 Kompostlanabilir Ambalaj',
    },
  ];

  const adaptogens = [
    {
      name: "Lion's Mane (Aslan Yelesi)",
      role: 'Zihinsel Odak & Berraklık',
      desc: 'Nörolojik odaklanmayı destekleyen doğal mantar özü. Sabah yoğun toplantılarında zihinsel keskinliği artırır.',
      pairing: "Lion's Mane Cold Brew",
    },
    {
      name: 'Ashwagandha (Kış Kirazı)',
      role: 'Stres Yönetimi & Denge',
      desc: 'Kortizol dengesini destekleyen adaptojenik kök. Öğleden sonraki iş stresini sakin bir dinginliğe dönüştürür.',
      pairing: 'Golden Turmeric Elixir',
    },
    {
      name: 'Cordyceps & Maca',
      role: 'Hücresel Dayanıklılık & Enerji',
      desc: 'Kafein çarpıntısı yapmadan doğal ATP üretimini ve gün boyu süren fiziksel canlılığı destekler.',
      pairing: 'Cordyceps Espresso Tonic',
    },
    {
      name: 'Seremoniyel Uji Matcha',
      role: 'Antioksidan & L-Theanine',
      desc: 'Japonya Uji bölgesinden tek hasat yeşil çay yaprakları. Kahveye alternatif sakin, odaklı bir enerji akışı sunar.',
      pairing: 'Ceremonial Matcha Latte',
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
                Konsept &amp; Felsefe
              </li>
            </ol>
          </nav>

          {/* Hero Manifesto */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bplus-warmWhite border border-bplus-border shadow-soft mb-4">
                <Sparkles className="w-3.5 h-3.5 text-bplus-olive" />
                <span className="text-xs font-semibold uppercase tracking-wider text-bplus-deepOlive">
                  B+ Wellness Manifestosu by Mineiro Coffee
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bplus-deepOlive tracking-tight mb-6 leading-[1.15]">
                Nitelikli Kahve, Bedenine İyi Gelen İçeriklerle Buluştuğunda.
              </h1>

              <p className="text-base sm:text-lg text-bplus-mutedText leading-relaxed mb-6">
                Biz kahveyi yalnızca bir kafein uyarısı değil; günün akışını güzelleştiren, zihne dinginlik ve bedene hafiflik katan bir zanaat olarak görüyoruz.
              </p>

              <p className="text-sm sm:text-base text-bplus-mutedText leading-relaxed mb-8">
                Geleneksel zincir kafelerin ağır yapay şurupları ve rafine şekerleri yerine; Mineiro Coffee&apos;nin özel kavrum tekniklerini, doğanın sunduğu fonksiyonel adaptojenik bitkilerle buluşturuyoruz.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-bplus-deepOlive text-bplus-warmWhite font-bold text-sm hover:bg-bplus-olive transition-all shadow-card"
                >
                  <span>Reçeteleri İncele</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsPreOrderOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-bplus-deepOlive/80 text-bplus-deepOlive font-semibold text-sm hover:bg-bplus-warmWhite transition-colors"
                >
                  Ön Sipariş Simülatörü
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-bplus-border bg-bplus-warmWhite">
                <img
                  src="/images/demo/concept-roasting.webp"
                  alt="Mineiro Coffee kavurma çekirdekleri ve seremoniyel matcha kasesi artisanal kompozisyonu"
                  width={900}
                  height={600}
                  className="w-full h-[420px] object-cover"
                />
                <div className="p-5 bg-bplus-warmWhite/95 border-t border-bplus-border/60">
                  <div className="text-xs font-bold text-bplus-deepOlive uppercase tracking-wider mb-1">
                    Mineiro Coffee Roasters Ortaklığı
                  </div>
                  <div className="text-xs text-bplus-mutedText leading-relaxed">
                    Özel mikro parti kavurma, izlenebilir çiftlik hasatları ve asidite profillendirmesi.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The 4 Pillars */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-bplus-olive mb-2">
                Temel Değerlerimiz
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-bplus-deepOlive tracking-tight">
                B+ Deneyimini Benzersiz Kılan 4 İlke
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-bplus-warmWhite border border-bplus-border/80 shadow-soft flex flex-col justify-between hover:shadow-card transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-full bg-bplus-cream border border-bplus-sage/60 text-bplus-olive flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-bplus-latte/25 text-bplus-deepOlive border border-bplus-latte/50">
                          {pillar.highlight}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-bplus-deepOlive mb-1">
                        {pillar.title}
                      </h3>
                      <div className="text-xs font-semibold text-bplus-olive mb-3">
                        {pillar.subtitle}
                      </div>
                      <p className="text-sm text-bplus-mutedText leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-bplus-border/50 flex items-center gap-2 text-xs font-medium text-bplus-deepOlive">
                      <CheckCircle2 className="w-4 h-4 text-bplus-olive" />
                      <span>B+ Kalite ve Sağlık Standartlarına Uygun</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Adaptogens Deep Dive */}
          <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-bplus-deepOlive text-bplus-warmWhite shadow-elevated">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-bplus-sage/20 border border-bplus-sage/40 text-bplus-sage text-xs font-bold uppercase tracking-wider mb-3">
                Fonksiyonel Botanikler Rehberi
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                İçtiğin Fincanın İçinde Ne Var?
              </h2>
              <p className="text-sm text-bplus-warmWhite/80 leading-relaxed">
                Her bir adaptojen, vücudun fiziksel ve zihinsel stres etkenlerine uyum sağlamasına destek olmak için seçildi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {adaptogens.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-bplus-deepOlive/80 border border-bplus-sage/30 hover:border-bplus-sage/60 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-bold text-bplus-warmWhite">{item.name}</h3>
                    <span className="shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full bg-bplus-sage text-bplus-deepOlive">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-xs text-bplus-warmWhite/80 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="text-xs text-bplus-sage font-semibold flex items-center gap-1.5">
                    <span>Öne Çıkan Reçete:</span>
                    <strong className="text-bplus-warmWhite">{item.pairing}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Gallery Collage */}
          <div className="mb-16">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl font-bold text-bplus-deepOlive tracking-tight">
                Atmosfer &amp; Deneyim
              </h2>
              <p className="text-xs text-bplus-mutedText mt-1">
                Doğal ışık, yalın traverten detaylar ve zanaatkar kahve sunumu.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-soft border border-bplus-border/80">
                <img
                  src="/images/demo/store-signage.webp"
                  alt="B+ Wellness Café Mağaza Girişi ve Tabelası"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft border border-bplus-border/80">
                <img
                  src="/images/demo/hero-coldbrew.webp"
                  alt="Cold brew cam sunumu"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft border border-bplus-border/80">
                <img
                  src="/images/demo/matcha-latte.webp"
                  alt="Matcha latte sunumu"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft border border-bplus-border/80">
                <img
                  src="/images/demo/v60-pourover.webp"
                  alt="V60 Pour over demleme"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
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
