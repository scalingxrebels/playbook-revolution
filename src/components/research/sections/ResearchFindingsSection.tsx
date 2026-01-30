import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FindingsData } from '@/data/research/types';
import { AlertTriangle } from 'lucide-react';

interface ResearchFindingsSectionProps {
  data: FindingsData;
}

const ResearchFindingsSection: React.FC<ResearchFindingsSectionProps> = ({ data }) => {
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

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Findings (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            {data.findings.map((finding, index) => (
              <div 
                key={finding.number}
                className="flex gap-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">{finding.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{finding.title[language]}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {finding.content[language]}
                  </p>
                </div>
              </div>
            ))}

            {/* Caveat Box */}
            <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">{data.caveat.title[language]}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {data.caveat.content[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats (2 cols) */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 p-6 rounded-2xl bg-card border border-border/50">
              <h3 className="text-lg font-semibold mb-6 text-center text-muted-foreground">
                {language === 'en' ? 'Key Metrics' : 'Schlüsselmetriken'}
              </h3>
              
              <div className="space-y-6">
                {data.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label[language]}</div>
                  </div>
                ))}
              </div>

              {/* Visual separator */}
              <div className="my-6 border-t border-border/50" />

              {/* Bottom reminder */}
              <p className="text-xs text-center text-muted-foreground italic">
                {language === 'en' 
                  ? 'Correlation ≠ Causation'
                  : 'Korrelation ≠ Kausalität'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchFindingsSection;
