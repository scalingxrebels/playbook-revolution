import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useParallaxLayers } from '@/hooks/useParallax';
import GrowthTrails from '@/components/GrowthTrails';
import TwinklingStars from '@/components/TwinklingStars';

const HeroOptimized: React.FC = () => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  const scrollToNext = () => {
    document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToROICalculator = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise"
    >
      {/* Deep Space Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />

      {/* Mesh Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-mesh opacity-60 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />

      {/* Twinkling Stars - Medium Parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px)` }}
      >
        <TwinklingStars />
      </div>

      {/* Superlinear Growth Trajectories - S-Curves */}
      <GrowthTrails />

      {/* Subtle Grid Pattern - Fast Parallax */}
      <div 
        className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[2]}px) scale(1.1)` }}
      />

      {/* Main Content */}
      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
        {/* Overline */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <span className="h-px w-12 bg-gradient-primary" />
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            {language === 'de' ? 'AI-Native Execution Consulting' : 'AI-Native Execution Consulting'}
          </span>
          <span className="h-px w-12 bg-gradient-primary" />
        </div>

        {/* Main Headline - Outcome-First */}
        <h1 className="font-display text-hero-lg mb-8 animate-blur-in">
          <span className="block text-foreground">
            {language === 'de' ? 'Von €2M auf €100M ARR' : 'From €2M to €100M ARR'}
          </span>
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {language === 'de' ? 'in 18-30 Monaten.' : 'in 18-30 months.'}
          </span>
        </h1>

        {/* Subheadline - Quantified */}
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de' 
            ? <>3-5x schneller wachsen. 2-4x bessere Unit Economics.<br />Mit Systemen, die skalieren und nicht brechen.</>
            : <>3-5x faster growth. 2-4x better profitability.<br />With systems that scale and don't break.</>
          }
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            onClick={scrollToROICalculator}
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
          >
            {language === 'de' ? 'Wie schnell kannst du auf €100M skalieren?' : 'How fast can you scale to €100M?'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in cursor-pointer"
        style={{ animationDelay: '1s' }}
      >
        <span className="text-xs uppercase tracking-widest">
          {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroOptimized;
