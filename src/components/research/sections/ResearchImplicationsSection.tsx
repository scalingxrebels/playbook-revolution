import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ImplicationsData } from '@/data/research/types';
import { ArrowRight, Compass, Calculator, MessageCircle, BookOpen } from 'lucide-react';

interface ResearchImplicationsSectionProps {
  data: ImplicationsData;
}

const stepIcons = [Calculator, MessageCircle, BookOpen];

const ResearchImplicationsSection: React.FC<ResearchImplicationsSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Compass className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Was das bedeutet' : 'What This Means'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Implication Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.items.map((item, index) => {
            const Icon = stepIcons[index] || Compass;
            
            return (
              <div
                key={item.number}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {item.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{item.title[language]}</h3>
                
                {/* Question */}
                <p className="text-muted-foreground mb-4">{item.question[language]}</p>

                {/* Bullets */}
                <div className="mb-4 flex-grow">
                  <p className="text-sm font-medium mb-2 text-muted-foreground">
                    {language === 'en' ? 'Ask yourself:' : 'Frage dich:'}
                  </p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary">→</span>
                        {bullet[language]}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">
                      {language === 'en' ? 'Action: ' : 'Aktion: '}
                    </span>
                    {item.action[language]}
                  </p>
                  
                  {item.cta.href.startsWith('http') ? (
                    <Button asChild variant="outline" className="w-full gap-2">
                      <a href={item.cta.href} target="_blank" rel="noopener noreferrer">
                        {item.cta.text[language]}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full gap-2">
                      <Link to={item.cta.href}>
                        {item.cta.text[language]}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchImplicationsSection;
