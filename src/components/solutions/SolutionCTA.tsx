import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Check } from 'lucide-react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

const SolutionCTA: React.FC = () => {
  const { language } = useLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />
      
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Headline */}
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' ? (
              <>
                Nicht sicher welche Situation
                <span className="block italic text-gradient">deine ist?</span>
              </>
            ) : (
              <>
                Not sure which situation
                <span className="block italic text-gradient">is yours?</span>
              </>
            )}
          </h2>
          
          {/* Subline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {language === 'de' 
              ? '30 Minuten. Kein Pitch. Wir finden gemeinsam den richtigen Hebel.'
              : '30 minutes. No pitch. We\'ll find the right lever together.'
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
              {language === 'de' ? 'Kostenloses Gespräch buchen' : 'Book a free call'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Trust Signal */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? 'Direkt mit Michel' : 'Directly with Michel'}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? 'Kein Formular' : 'No form'}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              {language === 'de' ? '30 Minuten' : '30 minutes'}
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
