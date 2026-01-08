import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import TwinklingStars from '@/components/TwinklingStars';
const SolutionHero: React.FC = () => {
  const { language } = useLanguage();

  const scrollToCategories = () => {
    document.getElementById('solution-categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden noise pt-20">
      {/* Background - consistent with Home */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-mesh opacity-60" />

      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        <TwinklingStars />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />
      
      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center">
          {/* Overline - consistent with Home "AI-Native Execution Consulting" style */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <span className="h-px w-12 bg-gradient-primary" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              Expertise × Speed = Impact
            </span>
            <span className="h-px w-12 bg-gradient-primary" />
          </div>
          
          {/* Headline - same size as Home (text-hero-lg) */}
          <h1 className="font-display text-hero-lg mb-8 animate-blur-in">
            <span className="block text-foreground">
              {language === 'de' ? 'Finde die richtige Lösung' : 'Find the Right Solution'}
            </span>
            <span className="block text-gradient animate-gradient bg-gradient-primary">
              {language === 'de' ? 'für deine Growth Challenge' : 'for Your Growth Challenge'}
            </span>
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
