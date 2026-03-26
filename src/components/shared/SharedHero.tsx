import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import TwinklingStars from '@/components/TwinklingStars';
import GrowthTrails from '@/components/GrowthTrails';
import { useParallaxLayers } from '@/hooks/useParallax';
import { ChevronDown } from 'lucide-react';

interface StatItem {
  value: string;
  label: { en: string; de: string };
  sublabel?: { en: string; de: string };
  color?: 'primary' | 'accent';
}

interface SharedHeroProps {
  overlineEn: string;
  overlineDe: string;
  headlineLine1En: string;
  headlineLine1De: string;
  headlineLine2En?: string;
  headlineLine2De?: string;
  subheadlineEn: string;
  subheadlineDe: string;
  stats?: StatItem[];
  children?: React.ReactNode;
  variant?: 'dark' | 'light';
  enableParallax?: boolean;
}

const SharedHero: React.FC<SharedHeroProps> = ({
  overlineEn,
  overlineDe,
  headlineLine1En,
  headlineLine1De,
  headlineLine2En,
  headlineLine2De,
  subheadlineEn,
  subheadlineDe,
  stats,
  children,
  variant = 'dark',
  enableParallax = true
}) => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  const overline = language === 'de' ? overlineDe : overlineEn;
  const headlineLine1 = language === 'de' ? headlineLine1De : headlineLine1En;
  const headlineLine2 = language === 'de' ? headlineLine2De : headlineLine2En;
  const subheadline = language === 'de' ? subheadlineDe : subheadlineEn;

  const scrollToNext = () => {
    const hero = containerRef.current;
    if (hero) {
      const next = hero.nextElementSibling as HTMLElement;
      next?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={enableParallax ? containerRef as React.RefObject<HTMLElement> : undefined}
      className={`relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise ${variant === 'dark' ? 'dark-section' : ''}`}
    >
      {/* Background - only for dark variant */}
      {variant === 'dark' && (
        <>
          {/* Layer 1: Deep Space Background (slowest) */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
            style={enableParallax ? { transform: `translateY(${offsets[0]}px) scale(1.1)` } : undefined}
          />
          <div 
            className="absolute inset-0 bg-mesh opacity-60 transition-transform duration-100"
            style={enableParallax ? { transform: `translateY(${offsets[0]}px) scale(1.1)` } : undefined}
          />
          
          {/* Layer 2: Stars + GrowthTrails (medium speed) */}
          <div 
            className="absolute inset-0 transition-transform duration-100"
            style={enableParallax ? { transform: `translateY(${offsets[1]}px)` } : undefined}
          >
            <TwinklingStars />
          </div>
          <div 
            className="absolute inset-0 transition-transform duration-100"
            style={enableParallax ? { transform: `translateY(${offsets[1]}px)` } : undefined}
          >
            <GrowthTrails />
          </div>
          
          {/* Layer 3: Grid Pattern (fastest) */}
          <div 
            className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100"
            style={enableParallax ? { transform: `translateY(${offsets[2]}px) scale(1.1)` } : undefined}
          />
        </>
      )}

      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center">
          {/* Overline */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <span className="h-px w-12 bg-gradient-primary" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              {overline}
            </span>
            <span className="h-px w-12 bg-gradient-primary" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-hero-lg mb-8 animate-blur-in">
            <span className="block text-foreground">
              {headlineLine1}
            </span>
            {headlineLine2 && (
              <span className="block text-gradient animate-gradient bg-gradient-primary italic">
                {headlineLine2}
              </span>
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {subheadline}
          </p>

          {/* Stats Grid */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`px-4 py-3 bg-card border-2 ${
                    stat.color === 'accent' ? 'border-accent/30' : 'border-primary/30'
                  } shadow-brutal-sm`}
                >
                  <span className={`font-mono text-2xl font-bold ${
                    stat.color === 'accent' ? 'text-accent' : 'text-primary'
                  }`}>
                    {stat.value}
                  </span>
                  <span className="block text-xs text-muted-foreground uppercase tracking-wide">
                    {language === 'de' ? stat.label.de : stat.label.en}
                  </span>
                  {stat.sublabel && (
                    <span className="block text-[10px] text-muted-foreground/70 mt-0.5">
                      {language === 'de' ? stat.sublabel.de : stat.sublabel.en}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Children Slot (Filter/Search) */}
          {children && (
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll-down Chevron */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default SharedHero;
