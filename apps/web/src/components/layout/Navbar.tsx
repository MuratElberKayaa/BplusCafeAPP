'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenPreOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPreOrder }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const focusable = mobileDrawerRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMobileMenuOpen) return;

      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        hamburgerButtonRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && mobileDrawerRef.current) {
        const focusable = mobileDrawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Menü', href: '/menu' },
    { label: 'Konsept', href: '/concept' },
    { label: 'Şubelerimiz', href: '/location' },
    { label: 'İletişim', href: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bplus-warmWhite/90 backdrop-blur-md shadow-soft border-b border-bplus-border/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-bplus-deepOlive focus-visible:ring-2 focus-visible:ring-bplus-olive rounded-md"
          aria-label="B+ Wellness Café Ana Sayfası"
        >
          <img
            src="/images/demo/brand-logo.webp"
            alt="B+ Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover shadow-sm border border-bplus-sage/40"
          />
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-bplus-deepOlive leading-tight">
              B+ Wellness Café
            </span>
            <span className="text-[10px] tracking-widest text-bplus-mutedText uppercase font-medium">
              by Mineiro Coffee
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Ana Gezinme" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors py-1 relative group ${
                  isActive
                    ? 'text-bplus-deepOlive font-bold'
                    : 'text-bplus-espresso/80 hover:text-bplus-deepOlive'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-bplus-olive transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/menu"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold rounded-full bg-bplus-deepOlive text-bplus-warmWhite hover:bg-bplus-olive active:scale-[0.98] transition-all shadow-sm"
          >
            Menüyü Keşfet
          </Link>

          <button
            type="button"
            onClick={onOpenPreOrder}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-bplus-latte text-bplus-deepOlive bg-bplus-warmWhite/80 hover:bg-bplus-latte/20 transition-colors"
          >
            Ön Sipariş (Demo)
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={hamburgerButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-bplus-deepOlive hover:bg-bplus-border/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-bplus-olive"
            aria-label={isMobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[64px] z-50 bg-bplus-espresso/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            ref={mobileDrawerRef}
            className="absolute top-0 right-0 w-4/5 max-w-xs h-full bg-bplus-deepOlive text-bplus-warmWhite p-6 shadow-modal flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6 pt-4">
              <div className="text-xs uppercase tracking-widest text-bplus-sage font-semibold">
                Gezinme
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`text-lg font-medium transition-colors py-1 ${
                        isActive
                          ? 'text-bplus-sage font-bold pl-2 border-l-2 border-bplus-sage'
                          : 'text-bplus-warmWhite hover:text-bplus-sage'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-bplus-sage/30 flex flex-col gap-3">
                <Link
                  href="/menu"
                  onClick={handleLinkClick}
                  className="w-full text-center py-3 rounded-full bg-bplus-sage text-bplus-deepOlive font-bold text-sm hover:bg-bplus-latte transition-colors"
                >
                  Menüyü Keşfet
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenPreOrder();
                  }}
                  className="w-full text-center py-3 rounded-full border border-bplus-latte text-bplus-latte font-medium text-sm hover:bg-bplus-latte/10"
                >
                  Ön Sipariş Simülatörü (Demo)
                </button>
              </div>
            </div>

            <div className="text-[11px] text-bplus-sage/70 pt-6 border-t border-bplus-sage/20">
              <p>Pilot Şube: Mecidiyeköy Mahallesi, Büyükdere Cd., 34394 Şişli/İstanbul</p>
              <p className="mt-1">Prototip Modu — Bu prototipte gerçek sipariş alınmaz.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

