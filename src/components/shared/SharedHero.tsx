import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import TwinklingStars from '@/components/TwinklingStars';
import { useParallaxLayers } from '@/hooks/useParallax';
import { useTheme } from 'next-themes';

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
  enableParallax = false
}) => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';
  const overline = language === 'de' ? overlineDe : overlineEn;
  const headlineLine1 = language === 'de' ? headlineLine1De : headlineLine1En;
  const headlineLine2 = language === 'de' ? headlineLine2De : headlineLine2En;
  const subheadline = language === 'de' ? subheadlineDe : subheadlineEn;

  return (
    <section 
      ref={enableParallax ? containerRef as React.RefObject<HTMLElement> : undefined}
      className="relative overflow-hidden noise pt-32 pb-16"
    >
      {/* Background - Theme Aware */}
      {variant === 'dark' && (
        <>
          {isDark ? (
            <>
              {/* Dark Mode: Deep Space Background */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]"
                style={enableParallax ? { transform: `translateY(${offsets[0]}px)` } : undefined}
              />
              <div 
                className="absolute inset-0 bg-mesh opacity-60"
                style={enableParallax ? { transform: `translateY(${offsets[0]}px)` } : undefined}
              />
            </>
          ) : (
            <>
              {/* Light Mode: Warm Cream Gradient */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-bg-start))] via-[hsl(var(--hero-bg-mid))] to-[hsl(var(--hero-bg-end))]"
                style={enableParallax ? { transform: `translateY(${offsets[0]}px)` } : undefined}
              />
              <div 
                className="absolute inset-0"
                style={{
                  ...(enableParallax ? { transform: `translateY(${offsets[0]}px)` } : {}),
                  backgroundImage: 'var(--gradient-mesh-hero)'
                }}
              />
            </>
          )}
          
          {/* Stars/Orbs Layer */}
          <div 
            className="absolute inset-0"
            style={enableParallax ? { transform: `translateY(${offsets[1]}px)` } : undefined}
          >
            <TwinklingStars />
          </div>
          
          {/* Grid Pattern */}
          <div 
            className={`absolute inset-0 bg-grid-pattern bg-grid-lg ${
              isDark ? 'opacity-20' : 'opacity-10'
            }`}
            style={enableParallax ? { transform: `translateY(${offsets[2]}px)` } : undefined}
          />
        </>
      )}

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Overline */}
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
            <span className="h-px w-12 bg-gradient-primary" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              {overline}
            </span>
            <span className="h-px w-12 bg-gradient-primary" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-blur-in">
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
                  } shadow-brutal-sm rounded-lg`}
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
    </section>
  );
};

export default SharedHero;
