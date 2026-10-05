'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { MomentsSection } from '../components/sections/MomentsSection';
import { ProductCard } from '../components/menu/ProductCard';
import { ProductModal } from '../components/menu/ProductModal';
import { AiBaristaSection } from '../components/sections/AiBaristaSection';
import { PreOrderSection } from '../components/sections/PreOrderSection';
import { PreOrderModal } from '../components/preorder/PreOrderModal';
import { DeliveryPreviewSection } from '../components/sections/DeliveryPreviewSection';
import { Footer } from '../components/layout/Footer';
import { WEB_PRODUCTS, WebProduct } from '../data/webData';
import {
  Sparkles,
  ArrowRight,
  Coffee,
  Feather,
  Zap,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  Info,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [activeProductModal, setActiveProductModal] = useState<WebProduct | null>(null);
  const [isPreOrderOpen, setIsPreOrderOpen] = useState<boolean>(false);
  const [preOrderProduct, setPreOrderProduct] = useState<WebProduct | null>(null);

  // Top 4 curated flagship recipes for homepage showcase
  const featuredProducts = WEB_PRODUCTS.slice(0, 4);

  // Moments interaction: navigates cleanly to dedicated /menu page
  const handleSelectMoment = (categorySlug: string) => {
    router.push('/menu');
  };

  // Product modal triggers
  const handleOpenProduct = (product: WebProduct) => {
    setActiveProductModal(product);
  };

  const handleCloseProduct = () => {
    setActiveProductModal(null);
  };

  // Pre-order modal triggers
  const handleOpenPreOrder = (product?: WebProduct) => {
    if (product) {
      setPreOrderProduct(product);
    }
    setIsPreOrderOpen(true);
  };

  const handleClosePreOrder = () => {
    setIsPreOrderOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Navigation */}
      <Navbar onOpenPreOrder={() => handleOpenPreOrder()} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Workday Moments Section */}
        <MomentsSection onSelectMoment={handleSelectMoment} />

        {/* 4. Concept Teaser Showcase */}
        <section
          aria-labelledby="concept-teaser-title"
          className="py-20 lg:py-24 bg-bplus-cream border-t border-bplus-border/60"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Editorial Image (~45%) */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated border border-bplus-border bg-bplus-warmWhite">
                  <img
                    src="/images/demo/concept-roasting.webp"
                    alt="Mineiro Coffee kavurma çekirdekleri ve seremoniyel matcha kasesi"
                    width={900}
                    height={600}
                    className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-4 bg-bplus-warmWhite/95 border-t border-bplus-border/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-bplus-deepOlive">
                      Mineiro Coffee Roasting Partnership
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-bplus-latte/30 text-bplus-deepOlive">
                      Specialty Grade
                    </span>
                  </div>
                </div>
              </div>

              {/* Story Copy & 3 Pillars Preview (~55%) */}
              <div className="lg:col-span-7">
                <div className="text-xs font-bold uppercase tracking-widest text-bplus-olive mb-3">
                  B+ Felsefesi &amp; Zanaatı
                </div>
                <h2
                  id="concept-teaser-title"
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bplus-deepOlive tracking-tight mb-5 leading-tight"
                >
                  Nitelikli Kahve, Bedenine İyi Gelen İçeriklerle Buluştuğunda.
                </h2>
                <p className="text-sm sm:text-base text-bplus-mutedText leading-relaxed mb-6">
                  Biz kahveyi yalnızca bir kafein uyarısı değil; günün akışını güzelleştiren, zihne ferahlık katan bir zanaat olarak görüyoruz. Geleneksel zincir kafelerin ağır yapay şurupları yerine temiz, organik adaptojenik bitkileri merkezimize alıyoruz.
                </p>

                {/* Quick Pillar Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-bplus-warmWhite border border-bplus-border/70 shadow-soft">
                    <Feather className="w-5 h-5 text-bplus-olive mb-2" />
                    <div className="text-xs font-bold text-bplus-deepOlive">Temiz İçerik</div>
                    <div className="text-[11px] text-bplus-mutedText mt-1">Sıfır rafine şeker, saf botanik özler.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-bplus-warmWhite border border-bplus-border/70 shadow-soft">
                    <Coffee className="w-5 h-5 text-bplus-olive mb-2" />
                    <div className="text-xs font-bold text-bplus-deepOlive">Mineiro Zanaatı</div>
                    <div className="text-[11px] text-bplus-mutedText mt-1">Düşük asidite, tek kökenli Arabica.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-bplus-warmWhite border border-bplus-border/70 shadow-soft">
                    <Zap className="w-5 h-5 text-bplus-olive mb-2" />
                    <div className="text-xs font-bold text-bplus-deepOlive">Adaptojen Denge</div>
                    <div className="text-[11px] text-bplus-mutedText mt-1">Lion’s Mane &amp; Ashwagandha ile odak.</div>
                  </div>
                </div>

                <Link
                  href="/concept"
                  className="inline-flex items-center gap-2 text-sm font-bold text-bplus-deepOlive hover:text-bplus-olive transition-colors group"
                >
                  <span>B+ Felsefesini &amp; Botanik Rehberini Keşfet</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Featured Curated Menu Highlights */}
        <section
          aria-labelledby="featured-menu-title"
          className="py-20 lg:py-24 bg-bplus-cream border-t border-bplus-border/60"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-bplus-olive uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>İmza Reçeteler</span>
                </div>
                <h2
                  id="featured-menu-title"
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bplus-deepOlive tracking-tight"
                >
                  Öne Çıkan Seçkin Lezzetler
                </h2>
                <p className="text-xs sm:text-sm text-bplus-mutedText mt-1">
                  En çok tercih edilen adaptojenik ve tek kökenli reçetelerimiz.
                </p>
              </div>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bplus-deepOlive text-bplus-warmWhite text-xs font-bold hover:bg-bplus-olive transition-all shadow-sm shrink-0"
              >
                <span>Tüm Menüyü Gör (8 Kategori)</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 4 Featured Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={handleOpenProduct}
                />
              ))}
            </div>

            {/* Menu Exploration Banner */}
            <div className="p-6 rounded-2xl bg-bplus-warmWhite border border-bplus-border/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bplus-cream text-bplus-olive flex items-center justify-center shrink-0 border border-bplus-border">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-bplus-deepOlive">
                    16+ Fonksiyonel Reçete, Besin Değerleri ve Diyet Filtreleri
                  </div>
                  <div className="text-[11px] text-bplus-mutedText">
                    Glutensiz, vegan ve rafine şekersiz seçenekleri filtreleyerek inceleyin.
                  </div>
                </div>
              </div>

              <Link
                href="/menu"
                className="shrink-0 text-xs font-bold text-bplus-olive hover:text-bplus-deepOlive hover:underline flex items-center gap-1"
              >
                <span>Menü Sayfasına Git</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 6. AI Barista Section */}
        <section id="ai-barista">
          <AiBaristaSection onInspectProduct={handleOpenProduct} />
        </section>

        {/* 7. Location Teaser Showcase */}
        <section
          aria-labelledby="location-teaser-title"
          className="py-20 lg:py-24 bg-bplus-cream border-t border-bplus-border/60"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Info (~6 cols) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-bplus-olive uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Şubemiz &amp; Deneyim Alanı</span>
                </div>
                <h2
                  id="location-teaser-title"
                  className="text-2xl sm:text-3xl font-extrabold text-bplus-deepOlive tracking-tight leading-tight"
                >
                  Şişli Mecidiyeköy&apos;de İyi Hissettiren Bir Mola.
                </h2>
                <p className="text-sm text-bplus-mutedText leading-relaxed">
                  Büyükdere Caddesi plaza ve iş temposunun merkezinde; yüksek hızlı fiber Wi-Fi, ergonomik çalışma masaları ve taze fonksiyonel kahve barı ile günün en verimli saatlerini geçirebileceğin alan.
                </p>

                <div className="flex items-center gap-4 text-xs text-bplus-deepOlive pt-2">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Clock className="w-4 h-4 text-bplus-olive" />
                    <span>Hafta İçi: 07:30 – 22:00</span>
                  </div>
                  <span className="text-bplus-border">•</span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <span>Hafta Sonu: 08:30 – 23:00</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/location"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bplus-deepOlive text-bplus-warmWhite text-xs font-bold hover:bg-bplus-olive transition-colors shadow-sm"
                  >
                    <span>Şube Detayları &amp; Harita Ulaşımı</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Mini Map Preview Card (~6 cols) */}
              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-bplus-warmWhite border border-bplus-border/80 shadow-soft">
                  <div className="relative h-56 rounded-xl overflow-hidden bg-[#e8e2d2] border border-bplus-border flex items-center justify-center">
                    <svg
                      className="absolute inset-0 w-full h-full opacity-30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 600 300"
                      preserveAspectRatio="none"
                    >
                      <path d="M 0 60 Q 150 100 300 50 T 600 80" stroke="#7d8b6a" strokeWidth="12" fill="none" />
                      <path d="M 100 0 L 100 300" stroke="#c4beaa" strokeWidth="8" />
                      <path d="M 280 0 L 280 300" stroke="#c4beaa" strokeWidth="10" />
                      <path d="M 460 0 L 460 300" stroke="#c4beaa" strokeWidth="6" />
                      <path d="M 0 150 L 600 150" stroke="#c4beaa" strokeWidth="10" />
                    </svg>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-bplus-deepOlive text-bplus-warmWhite flex items-center justify-center shadow-card border-2 border-bplus-warmWhite">
                        <MapPin className="w-5 h-5 text-bplus-sage" />
                      </div>
                      <div className="mt-2 px-3 py-1 rounded bg-bplus-warmWhite shadow-sm border border-bplus-border text-[11px] font-bold text-bplus-deepOlive">
                        B+ Mecidiyeköy Şubesi
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-bplus-mutedText">Mecidiyeköy Mah., Büyükdere Cd., Şişli/İstanbul</span>
                    <a
                      href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cac64c07925733:0x96ea14ba8be2cdb6?sa=X&ved=1t:8290&ictx=111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-bplus-olive hover:underline"
                    >
                      Harita ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Pre-Order Simulator & Delivery Teasers */}
        <PreOrderSection onOpenPreOrderModal={() => handleOpenPreOrder()} />
        <DeliveryPreviewSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={activeProductModal}
        onClose={handleCloseProduct}
        onPreOrder={(prod) => {
          handleCloseProduct();
          handleOpenPreOrder(prod);
        }}
      />

      {/* Pre-Order Simulator Modal */}
      <PreOrderModal
        isOpen={isPreOrderOpen}
        onClose={handleClosePreOrder}
        initialProduct={preOrderProduct}
      />
    </div>
  );
}
