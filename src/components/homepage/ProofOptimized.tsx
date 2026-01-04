import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

const caseStudies = [
  {
    name: 'Midjourney',
    industry: 'AI Image Generation',
    arr: '$200M+',
    employees: '~40',
    timeToScale: '18 months',
    thetaIndex: 0.91,
    logo: '🎨',
  },
  {
    name: 'Cursor',
    industry: 'AI Code Editor',
    arr: '$100M+',
    employees: '~20',
    timeToScale: '24 months',
    thetaIndex: 0.88,
    logo: '💻',
  },
  {
    name: 'Perplexity',
    industry: 'AI Search',
    arr: '$50M+',
    employees: '~50',
    timeToScale: '20 months',
    thetaIndex: 0.85,
    logo: '🔍',
  },
];

const ProofOptimized: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const parallax = useParallax({ speed: 0.2 });

  return (
    <section 
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
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Validierung' : 'Validation'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' 
              ? 'Validiert durch 22+ AI-Native Unternehmen' 
              : 'Validated by 22+ AI-Native Companies'
            }
          </h2>
          
          {/* Research Stats */}
          <div className="inline-flex items-center gap-6 bg-card/80 backdrop-blur-sm border border-border px-6 py-3 rounded-lg">
            <div className="text-center">
              <span className="block text-2xl font-bold text-gradient">R² = 0.76</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Correlation</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-foreground">n = 22</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Companies</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-accent">p &lt; 0.001</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Significance</span>
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
              {/* θ_index Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-accent text-accent-foreground px-3 py-1 text-sm font-bold shadow-brutal-sm">
                θ = {study.thetaIndex}
              </div>

              {/* Logo & Name */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{study.logo}</span>
                <div>
                  <h3 className="font-sans text-xl font-bold text-foreground">{study.name}</h3>
                  <p className="text-sm text-muted-foreground">{study.industry}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <span className="text-lg font-bold text-foreground">{study.arr}</span>
                  <span className="block text-xs text-muted-foreground uppercase tracking-wider">ARR</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-foreground">{study.employees}</span>
                  <span className="block text-xs text-muted-foreground uppercase tracking-wider">{language === 'de' ? 'Mitarbeiter' : 'Employees'}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-lg font-bold text-accent">{study.timeToScale}</span>
                  <span className="block text-xs text-muted-foreground uppercase tracking-wider">Time to Scale</span>
                </div>
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
            onClick={() => window.location.href = '/research'}
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
