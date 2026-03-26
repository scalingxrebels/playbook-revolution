import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import { Badge } from '@/components/ui/badge';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

const HeroV2: React.FC = () => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3] });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const scrollToNext = () => {
    document.getElementById('shift-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise"
    >
      {/* Deep Space Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />

      {/* Mesh Gradient Overlay */}
      <div
        className="absolute inset-0 bg-mesh opacity-40 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />

      {/* Twinkling Stars */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px)` }}
      >
        <TwinklingStars />
      </div>

      {/* Main Content */}
      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
        {/* Overline */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <span className="h-px w-12 bg-gradient-primary" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            {language === 'de'
              ? 'FÜR CEOS VON FINANZIERTEN STARTUPS · SERIES A–B · DACH'
              : 'FOR CEOS OF FUNDED STARTUPS · SERIES A–B · DACH'}
          </span>
          <span className="h-px w-12 bg-gradient-primary" />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-hero-lg mb-8 animate-blur-in leading-[1.1]">
          <span className="block text-foreground">
            {language === 'de' ? 'Deine Strategie funktioniert' : 'Your strategy works'}
          </span>
          <span className="block text-foreground">
            {language === 'de' ? 'auf dem Slide Deck.' : 'on the slide deck.'}
          </span>
          <span className="block text-gradient animate-gradient bg-gradient-primary mt-2">
            {language === 'de' ? 'In der Realität nicht.' : 'Not in reality.'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de'
            ? 'Wir finden den Hebel der wirklich zieht — und setzen ihn um. Fucking fast.'
            : 'We find the lever that actually works — and execute it. Fucking fast.'}
        </p>

        {/* Badge */}
        <div className="mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Badge variant="gradient" className="text-xs tracking-[0.2em] px-4 py-1.5">
            EXPERTISE × SPEED = IMPACT
          </Badge>
        </div>

        {/* CTA */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            variant="gradient"
            className="text-sm gap-2"
            onClick={() => setIsBookingModalOpen(true)}
          >
            {language === 'de' ? 'Kostenloses Gespräch buchen' : 'Book a free call'}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="text-xs text-muted-foreground mt-4 tracking-wide">
            {language === 'de'
              ? '30 Minuten · Kein Pitch · Direkt mit Michel'
              : '30 minutes · No pitch · Directly with Michel'}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="homepage-hero"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default HeroV2;
