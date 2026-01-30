import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import { AMFHeroData } from '@/data/research/types';

interface ResearchHeroSectionProps {
  data: AMFHeroData;
}

const ResearchHeroSection: React.FC<ResearchHeroSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Deep Space Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-muted/30"
        style={{ transform: `translateY(${offsets[0]}px)` }}
      />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
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
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
          <Link to="/" className="hover:text-foreground transition-colors">
            {data.breadcrumb.home[language]}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/expertise" className="hover:text-foreground transition-colors">
            {data.breadcrumb.parent[language]}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{data.breadcrumb.current[language]}</span>
        </nav>

        {/* Badge */}
        <Badge variant="outline" className="mb-6 animate-fade-in border-primary/50 text-primary">
          Research Framework
        </Badge>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl animate-fade-in">
          {data.headline[language]}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl animate-fade-in">
          {data.subheadline[language]}
        </p>

        {/* Description */}
        <div className="prose prose-lg dark:prose-invert max-w-3xl mb-10 animate-fade-in">
          {data.description[language].split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap gap-6 md:gap-10 mb-10 animate-fade-in">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label[language]}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-fade-in">
          <Button asChild size="lg" className="gap-2">
            <Link to={data.primaryCta.href}>
              {data.primaryCta.text[language]}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href={data.secondaryCta.href}>
              <Download className="w-4 h-4" />
              {data.secondaryCta.text[language]}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchHeroSection;
