import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDownRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-20 overflow-hidden noise">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-mesh" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-40" />
      
      {/* Diagonal Lines Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-diagonal-lines opacity-20" />

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 py-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Typography Heavy */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overline with ScalingX Tagline */}
            <div className="flex items-center gap-4 animate-slide-up">
              <span className="h-px w-12 bg-gradient-primary" />
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                🚀 EXPERTISE × SPEED = IMPACT 🚀
              </span>
            </div>

            {/* Main Headline - Brutalist Typography */}
            <h1 className="font-display text-display-xl leading-none animate-blur-in">
              <span className="block text-foreground italic">
                {language === 'de' ? 'Skalierung' : 'Scaling'}
              </span>
              <span className="block text-gradient animate-gradient bg-gradient-primary">
                {language === 'de' ? 'scheitert' : 'fails'}
              </span>
              <span className="block text-foreground italic">
                {language === 'de' ? 'am System.' : 'at the system.'}
              </span>
            </h1>

            {/* Editorial Subheadline */}
            <p className="text-editorial text-muted-foreground max-w-xl editorial-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {language === 'de' 
                ? 'Wir liefern Systeme und schaffen Impact. Wachstum sollte kein Kampf sein, es sollte System haben.'
                : 'We deliver systems and create impact. Growth shouldn\'t be a struggle, it should have a system.'
              }
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                onClick={scrollToCalculator}
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 text-base shadow-brutal hover-brutal transition-all"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="font-medium text-muted-foreground hover:text-foreground group"
              >
                {t('hero.learnMore')}
                <ArrowDownRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - Stats Panel */}
          <div className="lg:col-span-4 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="border-2 border-foreground/10 bg-card/50 backdrop-blur-sm p-8 space-y-6">
              {/* Stats Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {language === 'de' ? 'Benchmark-Daten' : 'Benchmark Data'}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>

              {/* Stat Items */}
              <div className="space-y-6">
                <StatItem 
                  value="10-30x" 
                  label={language === 'de' ? 'Schnellere Entwicklung' : 'Faster Development'} 
                  highlight 
                />
                <StatItem 
                  value="+400%" 
                  label={language === 'de' ? 'Operative Effizienz' : 'Operational Efficiency'} 
                />
                <StatItem 
                  value="-75%" 
                  label={language === 'de' ? 'Time to €100M' : 'Time to €100M'} 
                />
                <StatItem 
                  value="€4.6M" 
                  label={language === 'de' ? 'ARR pro Mitarbeiter' : 'ARR per Employee'} 
                  subtext="vs €150K traditional"
                />
              </div>

              {/* Source */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  {language === 'de' ? 'Basierend auf n=22 AI-Native Unternehmen' : 'Based on n=22 AI-Native companies'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="relative z-10 border-t border-border py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <MarqueeItem text="MIDJOURNEY" />
              <MarqueeItem text="CURSOR" />
              <MarqueeItem text="PERPLEXITY" />
              <MarqueeItem text="BOLT" />
              <MarqueeItem text="V0" />
              <MarqueeItem text="LOVABLE" />
              <MarqueeItem text="REPLIT" />
              <MarqueeItem text="JASPER" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-8 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-xs uppercase tracking-widest text-muted-foreground rotate-90 origin-left translate-x-4">
          Scroll
        </span>
      </div>
    </section>
  );
};

interface StatItemProps {
  value: string;
  label: string;
  highlight?: boolean;
  subtext?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, highlight, subtext }) => (
  <div className="group">
    <div className="flex items-baseline gap-2">
      <span className={`text-3xl font-bold tracking-tight ${highlight ? 'text-gradient' : 'text-foreground'}`}>
        {value}
      </span>
      {subtext && (
        <span className="text-xs text-muted-foreground">{subtext}</span>
      )}
    </div>
    <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
      {label}
    </p>
  </div>
);

interface MarqueeItemProps {
  text: string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ text }) => (
  <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/50 flex items-center gap-2">
    <span className="w-1.5 h-1.5 rounded-full bg-gradient-primary" />
    {text}
  </span>
);

export default HeroSection;
