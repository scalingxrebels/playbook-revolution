import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import GrowthTrails from '@/components/GrowthTrails';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

const HomeHero: React.FC = () => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToNext = () => {
    document.getElementById('shift-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section
        ref={containerRef as React.RefObject<HTMLElement>}
        className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise"
      >
        {/* Deep Space Background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
          style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
        />
        <div
          className="absolute inset-0 bg-mesh opacity-60 transition-transform duration-100"
          style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
        />
        <div
          className="absolute inset-0 transition-transform duration-100"
          style={{ transform: `translateY(${offsets[1]}px)` }}
        >
          <TwinklingStars />
        </div>
        {/* GrowthTrails — animated S-curves */}
        <div
          className="absolute inset-0 transition-transform duration-100"
          style={{ transform: `translateY(${offsets[1]}px)` }}
        >
          <GrowthTrails />
        </div>
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100"
          style={{ transform: `translateY(${offsets[2]}px) scale(1.1)` }}
        />

        {/* Content */}
        <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
          {/* Overline */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <span className="h-px w-12 bg-gradient-primary" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              Expertise × Speed = Impact
            </span>
            <span className="h-px w-12 bg-gradient-primary" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-hero-lg mb-8 animate-blur-in">
            <span className="block text-foreground">
              {language === 'de'
                ? 'Deine Strategie funktioniert'
                : 'Your strategy works'}
            </span>
            <span className="block text-foreground">
              {language === 'de'
                ? 'auf dem Slide Deck.'
                : 'on the slide deck.'}
            </span>
            <span className="block text-gradient animate-gradient bg-gradient-primary mt-2">
              {language === 'de'
                ? 'In der Realität nicht.'
                : 'Not in reality.'}
            </span>
          </h1>

          {/* Subline */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {language === 'de'
              ? 'Wir finden den Hebel der wirklich zieht — und setzen ihn um. Fucking fast.'
              : 'We find the lever that actually works — and execute it. Fucking fast.'}
          </p>

          {/* Badge */}
          <div className="flex justify-center mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent border border-accent/30 rounded-full <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent border border-accent/30 rounded-full bg-card shadow-brutal-sm">">
              {language === 'de'
                ? 'Für CEOs von finanzierten Startups · Series A–B · DACH'
                : 'For CEOs of funded startups · Series A–B · DACH'}
            </span>
          </div>

          {/* CTA */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base shadow-accent-glow whitespace-nowrap"
              onClick={() => setIsBookingOpen(true)}
            >
              {language === 'de' ? 'Kostenloses Gespräch buchen' : 'Book a free call'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              {language === 'de'
                ? '30 Minuten · Kein Pitch · Direkt mit Michel'
                : '30 minutes · No pitch · Directly with Michel'}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce z-10"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </section>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="homepage-hero"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default HomeHero;
