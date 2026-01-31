import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import TwinklingStars from '@/components/TwinklingStars';

const CaseCTA: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <TwinklingStars />
      
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur border-primary/20 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {language === 'de' 
              ? 'Bereit für ähnliche Ergebnisse?' 
              : 'Want similar results?'}
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'de'
              ? 'Lassen Sie uns in 30 Minuten analysieren, was Ihr Unternehmen zurückhält und wie wir es beheben können.'
              : 'Let us analyze in 30 minutes what\'s holding your company back and how we can fix it.'}
          </p>

          {/* What to Expect */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-muted/50 rounded-lg">
              <span className="text-2xl font-bold text-primary">1</span>
              <p className="text-sm font-medium mt-1">
                {language === 'de' ? 'Inflection Call' : 'Inflection Call'}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === 'de' ? '30 Min, kostenlos' : '30 min, free'}
              </p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <span className="text-2xl font-bold text-primary">2</span>
              <p className="text-sm font-medium mt-1">
                {language === 'de' ? 'Sprint-Vorschlag' : 'Sprint Proposal'}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === 'de' ? 'Klarer Plan & ROI' : 'Clear plan & ROI'}
              </p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <span className="text-2xl font-bold text-primary">3</span>
              <p className="text-sm font-medium mt-1">
                {language === 'de' ? 'Ergebnisse' : 'Results'}
              </p>
              <p className="text-xs text-muted-foreground">
                {language === 'de' ? 'In 12 Wochen' : 'In 12 weeks'}
              </p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground shadow-brutal-sm hover-brutal"
            onClick={() => window.open('https://cal.com/scalingx/inflection-call', '_blank')}
          >
            <Calendar className="w-5 h-5 mr-2" />
            {language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default CaseCTA;
