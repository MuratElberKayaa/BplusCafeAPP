import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'B+ Wellness Café by Mineiro Coffee | İş gününe iyi bir +.',
  description:
    'Nitelikli tek kökenli kahveler, adaptojenik botanikler ve şehir temposuna hafiflik katan fonksiyonel lezzetler. B+ Wellness Café dijital vitrini.',
  keywords: ['B+ Wellness Café', 'Mineiro Coffee', 'Specialty Coffee', 'Matcha', 'Wellness', 'Fonksiyonel İçecekler'],
  authors: [{ name: 'B+ Wellness Café' }],
  openGraph: {
    title: 'B+ Wellness Café by Mineiro Coffee | İş gününe iyi bir +.',
    description: 'Nitelikli tek kökenli kahveler, adaptojenik botanikler ve şehir temposuna hafiflik katan fonksiyonel lezzetler.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-bplus-cream text-bplus-espresso min-h-screen antialiased selection:bg-bplus-sage selection:text-bplus-deepOlive">
        {/* Skip to Content for Accessibility */}
        <a href="#main-content" className="skip-link">
          Ana İçeriğe Atla
        </a>
        {children}
      </body>
    </html>
  );
}

