import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { XCircle, TrendingUp, TrendingDown } from 'lucide-react';
import type { PlaybookProblemSection as ProblemData, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: ProblemData;
}

const PlaybookProblemSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pain Points */}
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-6 text-destructive">
                {language === 'de' ? 'Typische Probleme' : 'Common Pain Points'}
              </h3>
              <ul className="space-y-4">
                {data.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t(bullet.text)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Metrics */}
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-6 text-primary">
                {language === 'de' ? 'Der Preis des Status Quo' : 'Cost of Inaction'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {data.metrics.map((metric, i) => (
                  <div key={i} className="p-4 bg-background rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold">{metric.value}</span>
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
