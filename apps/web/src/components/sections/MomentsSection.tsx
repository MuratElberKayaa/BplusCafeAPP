'use client';

import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { WORKDAY_MOMENTS, WorkdayMoment } from '../../data/webData';

interface MomentsSectionProps {
  onSelectMoment: (categorySlug: string) => void;
}

export const MomentsSection: React.FC<MomentsSectionProps> = ({ onSelectMoment }) => {
  return (
    <section
      id="moments"
      aria-labelledby="moments-title"
      className="py-20 lg:py-28 bg-bplus-cream border-t border-bplus-border/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-bplus-olive uppercase mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Ritmini Yakala</span>
          </div>
          <h2
            id="moments-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bplus-deepOlive tracking-tight mb-4"
          >
            Günün 3 Kritik Anında, Bedenine İyi Gelen Seçimler
          </h2>
          <p className="text-sm sm:text-base text-bplus-mutedText leading-relaxed">
            Masa başı temposunda enerjini ve dengeni korumak için tasarlanmış fonksiyonel reçeteler.
          </p>
        </div>

        {/* 3 Moment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WORKDAY_MOMENTS.map((moment: WorkdayMoment) => (
            <div
              key={moment.time}
              className="group bg-bplus-warmWhite rounded-2xl p-7 lg:p-8 border border-bplus-border/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Time Capsule Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-bplus-latte/30 border border-bplus-latte/60 text-bplus-deepOlive font-bold text-xs mb-5">
                  {moment.time}
                </div>

                {/* Moment Title */}
                <h3 className="text-xl font-bold text-bplus-deepOlive mb-2 group-hover:text-bplus-olive transition-colors">
                  {moment.title}
                </h3>

                {/* Safe Headline & Description */}
                <p className="text-sm font-semibold text-bplus-espresso/90 mb-2 leading-snug">
                  {moment.headline}
                </p>
                <p className="text-xs text-bplus-mutedText leading-relaxed mb-6">
                  {moment.description}
                </p>
              </div>

              {/* Recipe Cue & CTA Link */}
              <div className="pt-4 border-t border-bplus-border/50">
                <div className="text-[11px] font-semibold text-bplus-mutedText uppercase tracking-wider mb-1">
                  Örnek Eşleşme [Demo]
                </div>
                <div className="text-xs font-bold text-bplus-deepOlive mb-3">
                  {moment.recipeCue}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectMoment(moment.categorySlug)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-bplus-olive hover:text-bplus-deepOlive group-hover:translate-x-1 transition-all"
                >
                  Bu Anın Reçetesini Gör
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

