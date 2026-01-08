import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const SolutionHero: React.FC = () => {
  const { language } = useLanguage();

  const scrollToCategories = () => {
    document.getElementById('solution-categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 noise opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-6 animate-slide-up">
            {language === 'de' ? 'Finde deine Lösung' : 'Find Your Solution'}
          </span>
          
          {/* Headline */}
          <h1 className="font-display text-display-lg tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {language === 'de' ? (
              <>
                Die richtige Lösung
                <span className="block italic text-gradient">für deine Wachstums-Challenge</span>
              </>
            ) : (
              <>
                Find the Right Solution
                <span className="block italic text-gradient">for Your Growth Challenge</span>
              </>
            )}
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {language === 'de' 
              ? 'Von Advisory bis Transformation – wähle das richtige Format für deinen aktuellen Need.'
              : 'From Advisory to Transformation – choose the right format for your current need.'
            }
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="px-5 py-3 bg-card border-2 border-primary/30 shadow-brutal-sm">
              <span className="font-mono text-2xl text-primary font-bold">92%</span>
              <span className="block text-xs text-muted-foreground uppercase tracking-wide">
                {language === 'de' ? 'Outcome Delivery' : 'Outcome Delivery'}
              </span>
            </div>
            <div className="px-5 py-3 bg-card border-2 border-accent/30 shadow-brutal-sm">
              <span className="font-mono text-2xl text-accent font-bold">6</span>
              <span className="block text-xs text-muted-foreground uppercase tracking-wide">
                {language === 'de' ? 'Solution-Kategorien' : 'Solution Categories'}
              </span>
            </div>
            <div className="px-5 py-3 bg-card border-2 border-primary/30 shadow-brutal-sm">
              <span className="font-mono text-2xl text-primary font-bold">€0-500K</span>
              <span className="block text-xs text-muted-foreground uppercase tracking-wide">
                {language === 'de' ? 'Investitionsspanne' : 'Investment Range'}
              </span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={scrollToCategories}
              className="shadow-brutal hover-brutal group"
            >
              {language === 'de' ? 'Kategorien erkunden' : 'Explore Categories'}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="shadow-brutal-sm hover-brutal"
              onClick={() => window.open('https://calendly.com/scalingx', '_blank')}
            >
              <Phone className="mr-2 w-4 h-4" />
              {language === 'de' ? 'Beratung buchen' : 'Book a Call'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
