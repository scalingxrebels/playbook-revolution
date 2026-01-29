import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { icons, ArrowRight } from 'lucide-react';
import type { PlaybookSolutionsConnection, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: PlaybookSolutionsConnection;
}

const PlaybookSolutionsSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

  const getIcon = (name: string) => {
    const Icon = icons[name as keyof typeof icons];
    return Icon || icons.Circle;
  };

  const typeLabels = {
    'power-up': { label: 'Power Up', color: 'bg-orange-500/10 text-orange-600 border-orange-500/30' },
    'boost': { label: 'Boost', color: 'bg-blue-500/10 text-blue-600 border-blue-500/30' },
    'accelerate': { label: 'Accelerate', color: 'bg-purple-500/10 text-purple-600 border-purple-500/30' },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.items.map((item, idx) => {
            const Icon = getIcon(item.icon);
            const typeStyle = typeLabels[item.type];
            return (
              <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Badge className={`mb-4 ${typeStyle.color}`}>{typeStyle.label}</Badge>
                  <div className={`p-3 rounded-lg ${item.color} inline-block mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t(item.name)}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t(item.outcome)}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span>{t(item.duration)}</span>
                    <span>•</span>
                    <span>{t(item.price)}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={item.link}>
                      {t(item.cta)}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlaybookSolutionsSection;
