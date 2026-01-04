import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Calendar, Check, ArrowRight } from 'lucide-react';

const FinalCTAOptimized: React.FC = () => {
  const { language } = useLanguage();

  const trustSignals = [
    { en: 'Free', de: 'Kostenlos' },
    { en: 'No Credit Card', de: 'Keine Kreditkarte' },
    { en: '30 Minutes', de: '30 Minuten' },
  ];

  const handleBooking = () => {
    // Scroll to existing booking form or open calendar
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="final-cta" className="relative min-h-[40vh] py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center animate-slide-up">
          {/* Headline */}
          <h2 className="font-display text-display-md lg:text-display-lg text-foreground mb-6">
            {language === 'de' 
              ? 'Bereit für die Transformation?' 
              : 'Ready to Transform Your Scaling?'
            }
          </h2>
          
          {/* Subheadline */}
          <p className="text-editorial text-muted-foreground max-w-2xl mx-auto mb-10">
            {language === 'de' 
              ? 'Erhalten Sie eine personalisierte Scaling-Roadmap in 30 Minuten'
              : 'Get a personalized scaling roadmap in 30 minutes'
            }
          </p>

          {/* Large CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg"
              onClick={handleBooking}
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-12 py-8 text-xl shadow-accent-glow hover:shadow-glow transition-all duration-400 hover-brutal"
            >
              <Calendar className="w-6 h-6 mr-3" />
              {language === 'de' ? 'Beratung buchen' : 'Book Your Consultation'}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustSignals.map((signal, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Check className="w-5 h-5 text-accent" />
                <span className="font-medium">
                  {language === 'de' ? signal.de : signal.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAOptimized;
