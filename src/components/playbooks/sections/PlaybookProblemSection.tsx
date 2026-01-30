import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { XCircle, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { PlaybookProblemSection as ProblemData, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: ProblemData;
}

const PlaybookProblemSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header with staggered animation */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Das Problem' : 'The Problem'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pain Points Card */}
          <Card 
            className={`border-destructive/30 bg-gradient-to-br from-destructive/5 to-destructive/10 backdrop-blur-sm transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-6 text-destructive flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                {language === 'de' ? 'Typische Symptome' : 'Common Symptoms'}
              </h3>
              <ul className="space-y-4">
                {data.bullets.map((bullet, i) => (
                  <li 
                    key={i} 
                    className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                      <XCircle className="w-3.5 h-3.5 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{t(bullet.text)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Metrics Card */}
          <Card 
            className={`border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-6 text-primary flex items-center gap-2">
                <TrendingDown className="w-5 h-5" />
                {language === 'de' ? 'Der Preis des Status Quo' : 'Cost of Inaction'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {data.metrics.map((metric, i) => (
                  <div 
                    key={i} 
                    className={`p-4 bg-background/80 rounded-lg border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-md ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                      {metric.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                      {metric.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
                    </div>
                    <p className="text-xs text-muted-foreground">{t(metric.label)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlaybookProblemSection;
