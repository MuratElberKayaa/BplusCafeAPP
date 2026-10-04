'use client';

import React, { useState } from 'react';
import { Instagram, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const instagramTiles = [
    {
      id: '1',
      title: 'Matcha Hazırlığı',
      img: '/images/demo/matcha-latte.webp',
    },
    {
      id: '2',
      title: 'Kavrulmuş Çekirdekler',
      img: '/images/demo/v60-pourover.webp',
    },
    {
      id: '3',
      title: 'Yeşil Kase Sunumu',
      img: '/images/demo/spirulina-bowl.webp',
    },
    {
      id: '4',
      title: 'Güneşli Kafe Köşesi',
      img: '/images/demo/insta-cafe.webp',
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 lg:py-28 bg-bplus-cream border-t border-bplus-border/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Instagram Gallery & Community (~55%) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-bplus-olive uppercase mb-2">
                <Instagram className="w-3.5 h-3.5" />
                <span>Topluluk & İlham</span>
              </div>
              <h2
                id="contact-title"
                className="text-2xl sm:text-3xl font-extrabold text-bplus-deepOlive tracking-tight mb-2"
              >
                @bpluswellnesscafe (DEMO / PLACEHOLDER) ile Ritmini Paylaş
              </h2>
              <p className="text-xs sm:text-sm text-bplus-mutedText leading-relaxed">
                Her gün binlerce şehirli profesyonelin çalışma anlarına eşlik eden fonksiyonel lezzetler ve minimal kafe kareleri.
              </p>
            </div>

            {/* 2x2 Photo Grid */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              {instagramTiles.map((tile) => (
                <div
                  key={tile.id}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-bplus-warmWhite border border-bplus-border/80 shadow-soft"
                >
                  <img
                    src={tile.img}
                    alt={tile.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-bplus-deepOlive/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-bplus-warmWhite text-xs font-bold">
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-bplus-deepOlive hover:text-bplus-olive transition-colors"
            >
              <span>Instagram&apos;da Bizi Takip Edin (DEMO / PLACEHOLDER)</span>
              <span>→</span>
            </a>
          </div>

          {/* Right Column: Contact & Message Demo Form (~45%) */}
          <div className="lg:col-span-6 bg-bplus-warmWhite rounded-2xl p-7 sm:p-9 border border-bplus-border/80 shadow-soft">
            <div className="text-xs font-bold uppercase tracking-wider text-bplus-olive mb-1">
              Bize Ulaşın
            </div>
            <h3 className="text-xl font-bold text-bplus-deepOlive mb-4">
              Sorularınız ve Geri Bildirimleriniz İçin
            </h3>

            {/* Contact Meta */}
            <div className="space-y-2 mb-6 text-xs text-bplus-espresso/80">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-bplus-olive shrink-0" />
                <span>merhaba@bpluscafe.com (DEMO / PLACEHOLDER)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-bplus-olive shrink-0" />
                <span>+90 (216) 555 00 22 (DEMO / PLACEHOLDER)</span>
              </div>
            </div>

            {/* Form */}
            {formSent ? (
              <div className="p-5 rounded-xl bg-bplus-sage/20 border border-bplus-sage text-center space-y-2 text-bplus-deepOlive animate-fadeIn">
                <CheckCircle2 className="w-6 h-6 mx-auto text-bplus-olive" />
                <div className="font-bold text-sm">Demo Form Gönderildi</div>
                <div className="text-xs text-bplus-mutedText">
                  Demo form — mesaj gerçek bir sunucuya gönderilmedi.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="text-[11px] font-semibold text-bplus-mutedText uppercase tracking-wider">
                  DEMO İLETİŞİM FORMU
                </div>
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Adınız
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bplus-cream/60 border border-bplus-border text-xs sm:text-sm text-bplus-espresso placeholder-bplus-mutedText focus:outline-none focus:ring-2 focus:ring-bplus-olive"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    E-posta
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="E-posta adresiniz"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bplus-cream/60 border border-bplus-border text-xs sm:text-sm text-bplus-espresso placeholder-bplus-mutedText focus:outline-none focus:ring-2 focus:ring-bplus-olive"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Mesajınız
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    placeholder="Mesajınız veya öneriniz..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bplus-cream/60 border border-bplus-border text-xs sm:text-sm text-bplus-espresso placeholder-bplus-mutedText focus:outline-none focus:ring-2 focus:ring-bplus-olive"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-bplus-deepOlive text-bplus-warmWhite font-bold text-xs hover:bg-bplus-olive transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Mesaj Gönder (Demo Form)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

