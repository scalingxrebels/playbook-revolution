import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroOptimized: React.FC = () => {
  const { language } = useLanguage();
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToNext = () => {
    document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAssessment = () => {
    document.getElementById('assessment-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-mesh" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/30 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-30" />

      {/* Main Content */}
      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
        {/* Overline */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <span className="h-px w-12 bg-gradient-primary" />
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            ScalingX
          </span>
          <span className="h-px w-12 bg-gradient-primary" />
        </div>

        {/* Main Headline - Large Serif Typography */}
        <h1 className="font-display text-display-xl leading-[0.9] mb-8 animate-blur-in">
          <span className="block text-foreground">
            {language === 'de' ? 'Skalierung' : 'Scaling'}
          </span>
          <span className="block text-gradient animate-gradient bg-gradient-primary italic">
            {language === 'de' ? 'scheitert' : 'fails'}
          </span>
          <span className="block text-foreground">
            {language === 'de' ? 'am System.' : 'at the system.'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-editorial text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {language === 'de' 
            ? 'Wir liefern Systeme und schaffen Impact. Wachstum sollte kein Kampf sein – es sollte System haben.'
            : 'We deliver systems and create impact. Growth shouldn\'t be a struggle – it should have a system.'
          }
        </p>

        {/* CTA Button - Liquid Gold Style */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            onClick={scrollToAssessment}
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-lg shadow-accent-glow hover:shadow-glow transition-all duration-400"
          >
            {language === 'de' ? 'Starte deine Journey' : 'Start Your Journey'}
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
