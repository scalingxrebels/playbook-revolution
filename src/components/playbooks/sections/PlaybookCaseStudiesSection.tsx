import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2 } from 'lucide-react';
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

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.cases.map((cs, idx) => (
            <Card key={idx} className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{t(cs.company)}</CardTitle>
                </div>
                <Badge variant="outline">{t(cs.timeline)}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    {language === 'de' ? 'Herausforderung' : 'Challenge'}
                  </p>
                  <p className="text-sm">{t(cs.problem)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    {language === 'de' ? 'Lösung' : 'Solution'}
                  </p>
                  <p className="text-sm">{t(cs.solution)}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                  {cs.results.map((r, i) => (
                    <div key={i} className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-sm font-bold text-primary">
                        <span>{r.before}</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>{r.after}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{t(r.metric)}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">{r.change}</Badge>
                    </div>
                  ))}
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
