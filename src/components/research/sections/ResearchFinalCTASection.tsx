import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import { FinalCTAData } from '@/data/research/types';
import { ArrowRight, Calendar, Check } from 'lucide-react';

interface ResearchFinalCTASectionProps {
  data: FinalCTAData;
}

const ResearchFinalCTASection: React.FC<ResearchFinalCTASectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-24 overflow-hidden"
    >
      {/* Deep Space Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background"
        style={{ transform: `translateY(${offsets[0]}px)` }}
      />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translateY(${offsets[1]}px)`
        }}
      />
      
      {/* Stars */}
      <div style={{ transform: `translateY(${offsets[2]}px)` }}>
        <TwinklingStars />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {data.headline[language]}
        </h2>

        {/* Content */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {data.content[language]}
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {data.benefits.map((benefit, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50"
            >
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm">{benefit[language]}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Button asChild size="lg" className="gap-2">
            <Link to={data.primaryCta.href}>
              {data.primaryCta.text[language]}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href={data.secondaryCta.href} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              {data.secondaryCta.text[language]}
            </a>
          </Button>
        </div>

        {/* Subtext */}
        <p className="text-sm text-muted-foreground">
          {data.subtext[language]}
        </p>
      </div>
    </section>
  );
};

export default ResearchFinalCTASection;
