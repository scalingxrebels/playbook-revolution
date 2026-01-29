import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Lightbulb, Target } from 'lucide-react';
import type { PlaybookSummaryData, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: PlaybookSummaryData;
}

const PlaybookSummarySection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

  const cards = [
    { icon: AlertTriangle, color: 'text-destructive', data: data.problem },
    { icon: Lightbulb, color: 'text-yellow-500', data: data.whyItMatters },
    { icon: Target, color: 'text-primary', data: data.solution },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Card key={i} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <card.icon className={`w-8 h-8 ${card.color} mb-4`} />
                <h3 className="font-bold text-lg mb-2">
                  {t(card.data.title)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(card.data.text)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaybookSummarySection;
