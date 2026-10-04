'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { MomentsSection } from '../components/sections/MomentsSection';
import { ConceptSection } from '../components/sections/ConceptSection';
import { MenuSection } from '../components/sections/MenuSection';
import { ProductModal } from '../components/menu/ProductModal';
import { AiBaristaSection } from '../components/sections/AiBaristaSection';
import { PreOrderSection } from '../components/sections/PreOrderSection';
import { PreOrderModal } from '../components/preorder/PreOrderModal';
import { DeliveryPreviewSection } from '../components/sections/DeliveryPreviewSection';
import { LocationSection } from '../components/sections/LocationSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/layout/Footer';
import { WebProduct } from '../data/webData';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProductModal, setActiveProductModal] = useState<WebProduct | null>(null);
  const [isPreOrderOpen, setIsPreOrderOpen] = useState<boolean>(false);
  const [preOrderProduct, setPreOrderProduct] = useState<WebProduct | null>(null);

  // Moments interaction: filters menu and smoothly scrolls to #menu
  const handleSelectMoment = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
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
      {/* 1. SEC-NAV */}
      <Navbar onOpenPreOrder={() => handleOpenPreOrder()} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 2. SEC-HERO */}
        <HeroSection />

        {/* 3. SEC-MOMENTS */}
        <MomentsSection onSelectMoment={handleSelectMoment} />

        {/* 4. SEC-CONCEPT */}
        <ConceptSection />

        {/* 5. SEC-MENU-NAV & 6. SEC-MENU-GRID */}
        <MenuSection
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onSelectProduct={handleOpenProduct}
        />

        {/* 8. SEC-AI-TEASER */}
        <AiBaristaSection onInspectProduct={handleOpenProduct} />

        {/* 9. SEC-PREORDER-DEMO */}
        <PreOrderSection onOpenPreOrderModal={() => handleOpenPreOrder()} />

        {/* 11. SEC-DELIVERY-PREVIEW */}
        <DeliveryPreviewSection />

        {/* 12. SEC-LOCATION-HOURS */}
        <LocationSection />

        {/* 13. SEC-CONTACT-SOCIAL */}
        <ContactSection />
      </main>

      {/* 14. SEC-FOOTER */}
      <Footer />

      {/* 7. MOD-PRODUCT (Overlay Modal) */}
      <ProductModal
        product={activeProductModal}
        onClose={handleCloseProduct}
        onPreOrder={(prod) => {
          handleCloseProduct();
          handleOpenPreOrder(prod);
        }}
      />

      {/* 10. MOD-PREORDER (Simulator Modal) */}
      <PreOrderModal
        isOpen={isPreOrderOpen}
        onClose={handleClosePreOrder}
        initialProduct={preOrderProduct}
      />
    </div>
  );
}

