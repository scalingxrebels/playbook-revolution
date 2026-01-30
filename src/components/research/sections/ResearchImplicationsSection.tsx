import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ImplicationsData } from '@/data/research/types';
import { ArrowRight } from 'lucide-react';

interface ResearchImplicationsSectionProps {
  data: ImplicationsData;
}

const ResearchImplicationsSection: React.FC<ResearchImplicationsSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Implication Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.items.map((item, index) => (
            <div
              key={item.number}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Number Badge */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">{item.number}</span>
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
                      <span className="text-primary">•</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchImplicationsSection;
