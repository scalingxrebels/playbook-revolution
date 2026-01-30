import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CaseStudiesData } from '@/data/research/types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ResearchCaseStudiesSectionProps {
  data: CaseStudiesData;
}

const ResearchCaseStudiesSection: React.FC<ResearchCaseStudiesSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-muted/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.cases.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-emerald-500/30 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                <Badge className="bg-emerald-500 text-white">Level 3</Badge>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-muted/50">
                <div>
                  <p className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Revenue' : 'Umsatz'}
                  </p>
                  <p className="font-semibold">{caseStudy.metrics.revenue}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Employees' : 'Mitarbeiter'}
                  </p>
                  <p className="font-semibold">{caseStudy.metrics.employees}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {language === 'en' ? 'Rev/Employee' : 'Umsatz/MA'}
                  </p>
                  <p className="font-semibold text-emerald-500">{caseStudy.metrics.revenuePerEmployee}</p>
                </div>
                {caseStudy.metrics.valuation && (
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Valuation' : 'Bewertung'}
                    </p>
                    <p className="font-semibold">{caseStudy.metrics.valuation}</p>
                  </div>
                )}
                {caseStudy.metrics.queries && (
                  <div className="col-span-2">
                    <p className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Queries' : 'Anfragen'}
                    </p>
                    <p className="font-semibold">{caseStudy.metrics.queries}</p>
                  </div>
                )}
              </div>

              {/* What makes them Level 3 */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  {language === 'en' ? 'What makes them Level 3:' : 'Was sie zu Level 3 macht:'}
                </h4>
                <ul className="space-y-1.5">
                  {caseStudy.whatMakesThemLevel3.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pattern */}
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 mb-4">
                <p className="text-sm italic text-muted-foreground">
                  "{caseStudy.pattern[language]}"
                </p>
              </div>

              {/* CTA */}
              <Button variant="ghost" className="w-full gap-2 text-primary" disabled>
                {language === 'en' ? 'View Full Case Study' : 'Vollständige Case Study'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchCaseStudiesSection;
