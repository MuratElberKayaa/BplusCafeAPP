'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { PreOrderModal } from '../../components/preorder/PreOrderModal';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Instagram,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Info,
} from 'lucide-react';

export default function ContactPage() {
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Genel Bilgi', message: '' });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'Genel Bilgi', message: '' });
      setFormSent(false);
    }, 4000);
  };

  const faqs = [
    {
      q: 'Kahveleriniz hangi çekirdeklerden ve nasıl kavruluyor?',
      a: 'Tüm kahvelerimiz Mineiro Coffee ortaklığıyla temin edilen %100 Specialty Grade tek kökenli Arabica çekirdeklerinden hazırlanır. Düşük asidite ve kadifemsi gövde için özel profil kavurma teknikleri uygulanır.',
    },
    {
      q: 'Adaptojenik bitkiler nedir ve vücuda etkisi nasıldır?',
      a: 'Adaptojenler (Lion’s Mane, Ashwagandha, Cordyceps vb.), vücudun zihinsel ve fiziksel yorgunluğa karşı direncini artırmaya yardımcı olan doğal bitkisel kök ve mantar ekstraktlarıdır. Ağır kafein dalgalanması yaşatmadan dengeli odaklanma sağlar.',
    },
    {
      q: 'Menüde rafine şekersiz ve vegan alternatifler var mı?',
      a: 'Evet, B+ menüsünün tamamı rafine şekerden arındırılmıştır. Tatlandırıcı olarak yalnızca organik hurma püresi ve saf akçaağaç özü kullanılır. Tüm içeceklerimizde organik yulaf, badem ve soya sütü alternatifleri ücretsiz sunulur.',
    },
    {
      q: 'Mobil gel-al veya kurumsal ofis aboneliği hizmetiniz var mı?',
      a: 'Şu an web platformumuz üzerinde ön sipariş ve dijital gel-al simülatörümüz test aşamasındadır. Yakında plaza çalışanları için sabah teslimatlı kurumsal abonelik paketlerimiz devreye girecektir.',
    },
  ];

  const instagramTiles = [
    { id: '1', title: 'Seremoniyel Matcha Hazırlığı', img: '/images/demo/matcha-latte.webp' },
    { id: '2', title: 'Kavrulmuş Çekirdekler & V60', img: '/images/demo/v60-pourover.webp' },
    { id: '3', title: 'Yeşil Kase Sunumu', img: '/images/demo/spirulina-bowl.webp' },
    { id: '4', title: 'Doğal Işıklı Kafe Ortamı', img: '/images/demo/insta-cafe.webp' },
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
                İletişim
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bplus-warmWhite border border-bplus-border shadow-soft mb-4">
              <Mail className="w-3.5 h-3.5 text-bplus-olive" />
              <span className="text-xs font-semibold uppercase tracking-wider text-bplus-deepOlive">
                İletişim &amp; Topluluk
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bplus-deepOlive tracking-tight mb-4 leading-tight">
              Bize Ulaşın
            </h1>

            <p className="text-sm sm:text-base text-bplus-mutedText leading-relaxed mb-6">
              Sorularınız, kurumsal etkinlik iş birlikleriniz, ofis teslimatı talepleriniz veya sadece kahve üzerine sohbet etmek için buradayız.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-bplus-deepOlive px-4 py-2 rounded-full bg-bplus-latte/30 border border-bplus-latte">
              <Info className="w-4 h-4 text-bplus-olive shrink-0" />
              <span>
                <strong>PROTOTİP BİLDİRİMİ:</strong> İletişim formu ve kurumsal bilgiler demo simülasyonudur.
              </span>
            </div>
          </div>

          {/* 2-Column: Form & Direct Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            {/* Direct Contact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-2xl bg-bplus-warmWhite border border-bplus-border/80 shadow-soft space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-bplus-deepOlive mb-2">
                    Doğrudan İletişim Kanalları
                  </h2>
                  <p className="text-xs text-bplus-mutedText leading-relaxed">
                    Müşteri deneyimi ekibimiz iş günlerinde saat 09:00 - 18:00 arasında yanıt verir.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-bplus-cream/60 border border-bplus-border/60">
                    <div className="w-9 h-9 rounded-full bg-bplus-deepOlive text-bplus-warmWhite flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-bplus-sage" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-bplus-mutedText">E-Posta</div>
                      <a href="mailto:hello@bpluswellnesscafe.com" className="font-bold text-bplus-deepOlive hover:text-bplus-olive">
                        hello@bpluswellnesscafe.com [DEMO]
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-bplus-cream/60 border border-bplus-border/60">
                    <div className="w-9 h-9 rounded-full bg-bplus-deepOlive text-bplus-warmWhite flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-bplus-sage" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-bplus-mutedText">Telefon</div>
                      <a href="tel:+902125550124" className="font-bold text-bplus-deepOlive hover:text-bplus-olive">
                        +90 (212) 555 01 24 [DEMO]
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-bplus-cream/60 border border-bplus-border/60">
                    <div className="w-9 h-9 rounded-full bg-bplus-deepOlive text-bplus-warmWhite flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-bplus-sage" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-bplus-mutedText">Adres</div>
                      <a
                        href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cac64c07925733:0x96ea14ba8be2cdb6?sa=X&ved=1t:8290&ictx=111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-bplus-deepOlive hover:text-bplus-olive block leading-snug"
                      >
                        Mecidiyeköy Mahallesi, Büyükdere Cd., 34394 Şişli/İstanbul ↗
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-bplus-border/60">
                  <div className="text-[11px] font-bold text-bplus-deepOlive uppercase tracking-wider mb-2">
                    Topluluk Hesabı
                  </div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-bplus-olive hover:underline"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>@bpluswellnesscafe [DEMO / PLACEHOLDER]</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-bplus-warmWhite rounded-2xl p-7 sm:p-8 border border-bplus-border/80 shadow-soft">
              <h2 className="text-xl font-bold text-bplus-deepOlive mb-2">
                Mesajınızı Gönderin
              </h2>
              <p className="text-xs text-bplus-mutedText mb-6">
                Aşağıdaki formu doldurarak bize geri bildirim bırakabilir veya demo talebinde bulunabilirsiniz.
              </p>

              {formSent ? (
                <div className="p-8 rounded-xl bg-bplus-sage/20 border border-bplus-sage/60 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-bplus-olive mx-auto" />
                  <h3 className="text-base font-bold text-bplus-deepOlive">Mesajınız Alındı! [DEMO SİMÜLASYONU]</h3>
                  <p className="text-xs text-bplus-mutedText max-w-md mx-auto">
                    Bu bir demo prototipidir. Gerçek bir arka yüz veritabanına bağlanmadan başarılı gönderim durumu simüle edilmiştir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-bplus-deepOlive mb-1.5">
                        Adınız Soyadınız
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Örn. Selin Yılmaz"
                        className="w-full px-4 py-2.5 rounded-xl border border-bplus-border bg-bplus-cream/40 text-xs text-bplus-espresso focus:outline-none focus:ring-2 focus:ring-bplus-olive focus:bg-bplus-warmWhite"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-bplus-deepOlive mb-1.5">
                        E-Posta Adresiniz
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="selin@ornek.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-bplus-border bg-bplus-cream/40 text-xs text-bplus-espresso focus:outline-none focus:ring-2 focus:ring-bplus-olive focus:bg-bplus-warmWhite"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-bplus-deepOlive mb-1.5">
                      Konu
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-bplus-border bg-bplus-cream/40 text-xs text-bplus-espresso focus:outline-none focus:ring-2 focus:ring-bplus-olive focus:bg-bplus-warmWhite"
                    >
                      <option value="Genel Bilgi">Genel Bilgi &amp; Geri Bildirim</option>
                      <option value="Kurumsal Abonelik">Kurumsal Ofis Kahve Çözümleri</option>
                      <option value="Etkinlik">Özel Etkinlik &amp; Atölye Talebi</option>
                      <option value="Kariyer">Barista &amp; Mağaza Kariyer Fırsatları</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-bplus-deepOlive mb-1.5">
                      Mesajınız
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mesajınızı buraya yazabilirsiniz..."
                      className="w-full px-4 py-2.5 rounded-xl border border-bplus-border bg-bplus-cream/40 text-xs text-bplus-espresso focus:outline-none focus:ring-2 focus:ring-bplus-olive focus:bg-bplus-warmWhite resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-bplus-deepOlive text-bplus-warmWhite text-xs font-bold hover:bg-bplus-olive transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Mesajı Gönder (Demo)</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="mb-20 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-bplus-olive uppercase mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Merak Edilenler</span>
              </div>
              <h2 className="text-2xl font-bold text-bplus-deepOlive tracking-tight">
                Sıkça Sorulan Sorular
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-bplus-border/80 bg-bplus-warmWhite overflow-hidden shadow-soft transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-bplus-olive"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-bplus-deepOlive">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-bplus-olive shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs text-bplus-mutedText leading-relaxed border-t border-bplus-border/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instagram Community Tiles */}
          <div className="mb-12">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-bplus-olive mb-1">
                <Instagram className="w-3.5 h-3.5" />
                <span>Topluluk Vitrini</span>
              </div>
              <h2 className="text-xl font-bold text-bplus-deepOlive tracking-tight">
                @bpluswellnesscafe Topluluğu
              </h2>
              <p className="text-xs text-bplus-mutedText">
                Günlük ilhamlar, taze kavrumlar ve iyi hissettiren anlar.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {instagramTiles.map((tile) => (
                <div
                  key={tile.id}
                  className="group relative rounded-2xl overflow-hidden aspect-square border border-bplus-border/70 shadow-soft bg-bplus-warmWhite"
                >
                  <img
                    src={tile.img}
                    alt={tile.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-bplus-deepOlive/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                    <span className="text-[11px] font-semibold text-bplus-warmWhite">
                      {tile.title}
                    </span>
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
