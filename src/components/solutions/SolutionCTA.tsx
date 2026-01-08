import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionCTA: React.FC = () => {
  const { language } = useLanguage();

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
                Bereit für den
                <span className="block italic text-gradient">nächsten Schritt?</span>
              </>
            ) : (
              <>
                Ready for the
                <span className="block italic text-gradient">Next Step?</span>
              </>
            )}
          </h2>
          
          {/* Subline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {language === 'de' 
              ? 'Lass uns gemeinsam herausfinden, welche Solution am besten zu deiner Situation passt.'
              : 'Let\'s find out together which solution fits your situation best.'
            }
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="xl" 
              className="shadow-brutal hover-brutal group"
              onClick={() => window.open('https://calendly.com/scalingx', '_blank')}
            >
              <Phone className="mr-2 w-5 h-5" />
              {language === 'de' ? 'Kostenlose Diagnose buchen' : 'Book Free Diagnosis'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="shadow-brutal-sm hover-brutal"
              asChild
            >
              <Link to="/playbooks">
                <FileText className="mr-2 w-5 h-5" />
                {language === 'de' ? 'Playbooks erkunden' : 'Explore Playbooks'}
              </Link>
            </Button>
          </div>
          
          {/* Trust Signal */}
          <p className="text-sm text-muted-foreground">
            {language === 'de' 
              ? '✓ Unverbindlich  ✓ 30 Minuten  ✓ Konkrete nächste Schritte'
              : '✓ No commitment  ✓ 30 minutes  ✓ Concrete next steps'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionCTA;
