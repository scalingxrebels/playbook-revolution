import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MichelSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-background noise">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 md:order-1">
            <img
              src="/images/ml-hero-new.png"
              alt="Michel Lason"
              className="w-full max-w-md mx-auto md:mx-0 border-2 border-border"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Michel Lason
            </h2>
            <div className="space-y-4 mb-6">
              <p className="text-muted-foreground text-base leading-relaxed">
                {language === 'de'
                  ? 'Founder von ScalingX Hypergrowth. 19 Jahre B2B SaaS GTM — als Operator, nicht als Berater. Er baut die Mechanismen selbst.'
                  : 'Founder of ScalingX Hypergrowth. 19 years of B2B SaaS GTM — as an operator, not a consultant. He builds the mechanisms himself.'}
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              n=22 · DACH B2B SaaS · Series A–C
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all"
            >
              {language === 'de' ? 'Mehr über Michel und das Team' : 'More about Michel and the team'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MichelSection;
