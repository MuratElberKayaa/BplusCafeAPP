'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { MenuCategoryNav } from '../../components/menu/MenuCategoryNav';
import { ProductCard } from '../../components/menu/ProductCard';
import { ProductModal } from '../../components/menu/ProductModal';
import { PreOrderModal } from '../../components/preorder/PreOrderModal';
import { WEB_PRODUCTS, WebProduct } from '../../data/webData';
import { Sparkles, Info, Filter, ArrowRight } from 'lucide-react';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDiet, setSelectedDiet] = useState<string>('all');
  const [activeProductModal, setActiveProductModal] = useState<WebProduct | null>(null);
  const [isPreOrderOpen, setIsPreOrderOpen] = useState<boolean>(false);
  const [preOrderProduct, setPreOrderProduct] = useState<WebProduct | null>(null);

  const dietOptions = [
    { id: 'all', label: 'Tüm Diyetler' },
    { id: 'gluten-free', label: 'Glutensiz' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'sugar-free', label: 'Rafine Şekersiz' },
  ];

  const filteredProducts = WEB_PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.categorySlug === selectedCategory;

    let matchesDiet = true;
    if (selectedDiet === 'gluten-free') {
      matchesDiet = product.tags.some((t) => t.toLowerCase().includes('gluten'));
    } else if (selectedDiet === 'vegan') {
      matchesDiet = product.tags.some((t) => t.toLowerCase().includes('vegan') || t.toLowerCase().includes('bitkisel'));
    } else if (selectedDiet === 'sugar-free') {
      matchesDiet = product.tags.some((t) => t.toLowerCase().includes('şeker') || t.toLowerCase().includes('rafine'));
    }

    return matchesCategory && matchesDiet;
  });

  const handleOpenProduct = (product: WebProduct) => {
    setActiveProductModal(product);
  };

  const handleCloseProduct = () => {
    setActiveProductModal(null);
  };

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
      <Navbar onOpenPreOrder={() => handleOpenPreOrder()} />

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
                Menü
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bplus-warmWhite border border-bplus-border shadow-soft mb-4">
              <Sparkles className="w-3.5 h-3.5 text-bplus-olive" />
              <span className="text-xs font-semibold uppercase tracking-wider text-bplus-deepOlive">
                Özenle Hazırlanmış Reçeteler
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bplus-deepOlive tracking-tight mb-4 leading-tight">
              B+ Wellness Café Menüsü
            </h1>

            <p className="text-sm sm:text-base text-bplus-mutedText leading-relaxed mb-6">
              Nitelikli tek kökenli Arabica kahveleri, adaptojenik bitkisel latte&apos;ler, 16 saat soğuk demlemeler ve temiz içerikli atıştırmalıklar. Bedeninin ritmine en uygun reçeteyi keşfet.
            </p>

            {/* Mandatory Demo Disclosure Banner */}
            <div className="inline-flex items-center gap-2 text-xs text-bplus-deepOlive px-4 py-2 rounded-full bg-bplus-latte/30 border border-bplus-latte shadow-sm">
              <Info className="w-4 h-4 text-bplus-olive shrink-0" />
              <span>
                <strong>PROTOTİP BİLDİRİMİ:</strong> Menü ve fiyatlar demo niteliğindedir. Gerçek sipariş veya ödeme alınmaz.
              </span>
            </div>
          </div>

          {/* Category Navigation Pills */}
          <div className="mb-8">
            <MenuCategoryNav
              activeCategory={selectedCategory}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
            />
          </div>

          {/* Secondary Dietary Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-bplus-border/80">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-bplus-olive" />
              <span className="text-xs font-bold text-bplus-deepOlive uppercase tracking-wider">
                Beslenme Tercihi:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {dietOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedDiet(opt.id)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                    selectedDiet === opt.id
                      ? 'bg-bplus-deepOlive text-bplus-warmWhite shadow-sm'
                      : 'bg-bplus-warmWhite text-bplus-deepOlive border border-bplus-border hover:bg-bplus-latte/20'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-bplus-mutedText font-medium">
              Toplam <strong className="text-bplus-deepOlive">{filteredProducts.length}</strong> reçete listeleniyor
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-bplus-warmWhite rounded-2xl border border-bplus-border/80 p-8">
              <p className="text-sm font-semibold text-bplus-deepOlive mb-2">
                Seçilen filtre kriterlerine uygun reçete bulunamadı.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDiet('all');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-bplus-deepOlive text-bplus-warmWhite text-xs font-semibold hover:bg-bplus-olive transition-colors mt-2"
              >
                Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={handleOpenProduct}
                />
              ))}
            </div>
          )}

          {/* AI Barista Link Banner */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-bplus-deepOlive to-bplus-deepOlive/95 text-bplus-warmWhite flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-bplus-sage/20 border border-bplus-sage/40 text-bplus-sage text-xs font-bold uppercase tracking-wider">
                Yapay Zekâ Önerisi
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                Hangi İçeceğin Sana Uygun Olduğundan Emin Değil Misin?
              </h3>
              <p className="text-xs sm:text-sm text-bplus-warmWhite/80 max-w-xl">
                AI Barista Simülatörümüz çalışma tempona, enerji ihtiyacına ve kafein hassasiyetine göre sana özel reçeteyi anında belirler.
              </p>
            </div>
            <Link
              href="/#ai-barista"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bplus-sage text-bplus-deepOlive text-xs font-bold hover:bg-bplus-latte transition-all shadow-card"
            >
              <span>AI Barista&apos;yı Dene</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

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
