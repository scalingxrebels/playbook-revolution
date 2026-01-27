import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, CheckCircle, Palette, Code, Search } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

const caseStudies = [
  {
    name: 'Midjourney',
    industry: { en: 'AI Image Generation', de: 'AI Bildgenerierung' },
    Icon: Palette,
    before: { 
      label: { en: 'Projected (traditional)', de: 'Projiziert (traditionell)' },
      value: { en: '200 employees for €200M ARR', de: '200 Mitarbeiter für €200M ARR' }
    },
    after: { 
      label: { en: 'Actual (AI-Native)', de: 'Tatsächlich (AI-Native)' },
      value: { en: '40 employees for €200M ARR', de: '40 Mitarbeiter für €200M ARR' }
    },
    result: '5x',
    resultLabel: { en: 'more efficient', de: 'effizienter' },
    timeToScale: '18',
  },
  {
    name: 'Cursor',
    industry: { en: 'AI Code Editor', de: 'AI Code Editor' },
    Icon: Code,
    before: { 
      label: { en: 'Projected (traditional)', de: 'Projiziert (traditionell)' },
      value: { en: '100 employees for €100M ARR', de: '100 Mitarbeiter für €100M ARR' }
    },
    after: { 
      label: { en: 'Actual (AI-Native)', de: 'Tatsächlich (AI-Native)' },
      value: { en: '20 employees for €100M ARR', de: '20 Mitarbeiter für €100M ARR' }
    },
    result: '5x',
    resultLabel: { en: 'more efficient', de: 'effizienter' },
    timeToScale: '24',
  },
  {
    name: 'Perplexity',
    industry: { en: 'AI Search', de: 'AI Suche' },
    Icon: Search,
    before: { 
      label: { en: 'Projected (traditional)', de: 'Projiziert (traditionell)' },
      value: { en: '100 employees for €50M ARR', de: '100 Mitarbeiter für €50M ARR' }
    },
    after: { 
      label: { en: 'Actual (AI-Native)', de: 'Tatsächlich (AI-Native)' },
      value: { en: '50 employees for €50M ARR', de: '50 Mitarbeiter für €50M ARR' }
    },
    result: '2x',
    resultLabel: { en: 'more efficient', de: 'effizienter' },
    timeToScale: '20',
  },
];

const ProofOptimized: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const parallax = useParallax({ speed: 0.2 });

  return (
    <section 
      id="proof"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background with Parallax */}
      <div 
        ref={parallax.ref as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 bg-mesh transition-transform duration-100"
        style={{ transform: `translateY(${parallax.offset * 0.4}px) scale(1.1)` }}
      />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Beweis' : 'Proof'}
          </span>
          
          {/* Before/After Headline */}
          <h2 className="font-display text-display-md mb-6">
            <span className="block text-foreground/50 line-through decoration-destructive/50">
              {language === 'de' 
                ? 'Traditionell: 500 Mitarbeiter für €100M ARR' 
                : 'Traditional: 500 employees for €100M ARR'
              }
            </span>
            <span className="block text-foreground">
              {language === 'de' 
                ? 'AI-Native: 40 Mitarbeiter für €200M ARR' 
                : 'AI-Native: 40 employees for €200M ARR'
              }
            </span>
          </h2>
          
          {/* Research Badge */}
          <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm border border-border px-6 py-3 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">
                {language === 'de' ? 'Basierend auf 22 analysierten Unternehmen' : 'Based on 22 analyzed companies'}
              </span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">
                {language === 'de' ? 'Wissenschaftlich validiert' : 'Scientifically validated'}
              </span>
            </div>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={study.name}
              className="group relative bg-card border-2 border-border hover:border-accent/50 p-6 transition-all duration-400 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Result Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-accent text-accent-foreground px-3 py-1 text-sm font-bold shadow-brutal-sm">
                {study.result} {language === 'de' ? study.resultLabel.de : study.resultLabel.en}
              </div>

              {/* Logo & Name */}
              <div className="flex items-center gap-4 mb-6">
                <study.Icon className="w-10 h-10 text-primary" />
                <div>
                  <h3 className="font-sans text-xl font-bold text-foreground">{study.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'de' ? study.industry.de : study.industry.en}
                  </p>
                </div>
              </div>

              {/* Before/After */}
              <div className="space-y-4 mb-6">
                {/* Before */}
                <div className="p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <span className="text-xs text-destructive uppercase tracking-wider font-semibold">
                    {language === 'de' ? study.before.label.de : study.before.label.en}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {language === 'de' ? study.before.value.de : study.before.value.en}
                  </p>
                </div>
                
                {/* After */}
                <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <span className="text-xs text-accent uppercase tracking-wider font-semibold">
                    {language === 'de' ? study.after.label.de : study.after.label.en}
                  </span>
                  <p className="text-sm text-foreground font-medium mt-1">
                    {language === 'de' ? study.after.value.de : study.after.value.en}
                  </p>
                </div>
              </div>

              {/* Time to Scale */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {language === 'de' ? 'Zeit bis zur Skalierung' : 'Time to Scale'}
                </span>
                <span className="text-lg font-bold text-accent">
                  {study.timeToScale} {language === 'de' ? 'Monate' : 'months'}
                </span>
              </div>

              {/* Hover Link */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => window.location.href = '/cases'}
            className="border-2 border-foreground/20 hover:border-foreground/40 font-semibold px-8 py-6"
          >
            {language === 'de' ? 'Alle Case Studies ansehen' : 'View All Case Studies'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProofOptimized;
