import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Check } from 'lucide-react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

const SolutionCTA: React.FC = () => {
  const { language } = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 noise opacity-30" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Headline */}
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? (
              <>
                Noch nicht sicher, welche
                <span className="block italic text-gradient">Lösung passt?</span>
              </>
            ) : (
              <>
                Still not sure which
                <span className="block italic text-gradient">solution is right?</span>
              </>
            )}
          </h2>
          
          {/* Subline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {language === 'de' 
              ? 'Buche einen kostenlosen Inflection Call. Wir identifizieren deinen Engpass in 30 Minuten und empfehlen den richtigen Weg.'
              : 'Book a free Inflection Call. We\'ll identify your bottleneck in 30 minutes and recommend the right path.'
            }
          </p>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="xl" 
              className="shadow-brutal hover-brutal group"
              onClick={() => setIsBookingModalOpen(true)}
            >
              <Phone className="mr-2 w-5 h-5" />
              {language === 'de' ? 'Kostenlosen Inflection Call buchen' : 'Book Free Inflection Call'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Trust Signal */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? 'Unverbindlich' : 'No commitment'}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? '30 Minuten' : '30 minutes'}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? 'Konkrete nächste Schritte' : 'Concrete next steps'}
            </span>
          </div>
        </div>
      </div>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="solutions"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default SolutionCTA;
