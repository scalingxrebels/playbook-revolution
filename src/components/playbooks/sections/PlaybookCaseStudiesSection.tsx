import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, TrendingUp, TrendingDown, Trophy, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { CaseStudy, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: {
    title: BilingualText;
    subtitle: BilingualText;
    cases: CaseStudy[];
  };
}

const PlaybookCaseStudiesSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Determine trend direction from change string
  const getTrend = (change: string) => {
    if (change.startsWith('+') || change.includes('↑')) return 'up';
    if (change.startsWith('-') || change.includes('↓')) return 'down';
    return 'neutral';
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Erfolgsgeschichten' : 'Success Stories'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.cases.map((cs, idx) => (
            <Card 
              key={idx} 
              className={`border-2 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + idx * 150}ms` }}
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-t-lg" />
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{t(cs.company)}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {t(cs.timeline)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-5">
                {/* Challenge & Solution */}
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                    <p className="text-xs uppercase tracking-wide text-destructive font-medium mb-2">
                      {language === 'de' ? 'Herausforderung' : 'Challenge'}
                    </p>
                    <p className="text-sm text-muted-foreground">{t(cs.problem)}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-xs uppercase tracking-wide text-primary font-medium mb-2">
                      {language === 'de' ? 'Lösung' : 'Solution'}
                    </p>
                    <p className="text-sm text-muted-foreground">{t(cs.solution)}</p>
                  </div>
                </div>

                {/* Results Grid with Trend Indicators */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
                      {language === 'de' ? 'Ergebnisse' : 'Results'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {cs.results.map((r, i) => {
                      const trend = getTrend(r.change);
                      return (
                        <div 
                          key={i} 
                          className={`text-center p-4 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 transition-all duration-500 hover:border-primary/30 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                          style={{ transitionDelay: `${400 + idx * 150 + i * 100}ms` }}
                        >
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-sm font-medium text-muted-foreground">{r.before}</span>
                            <ArrowRight className="w-4 h-4 text-primary" />
                            <span className="text-lg font-bold text-foreground">{r.after}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{t(r.metric)}</p>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${trend === 'up' ? 'bg-green-500/10 text-green-600' : trend === 'down' ? 'bg-red-500/10 text-red-600' : ''}`}
                          >
                            {trend === 'up' && <TrendingUp className="w-3 h-3 mr-1" />}
                            {trend === 'down' && <TrendingDown className="w-3 h-3 mr-1" />}
                            {r.change}
                          </Badge>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaybookCaseStudiesSection;
