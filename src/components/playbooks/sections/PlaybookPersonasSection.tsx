import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { icons } from 'lucide-react';
import type { PlaybookWhoThisIsFor, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: PlaybookWhoThisIsFor;
}

const PlaybookPersonasSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

  const getIcon = (name: string) => {
    const Icon = icons[name as keyof typeof icons];
    return Icon || icons.User;
  };

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

        {/* ICP Statement */}
        <div className="text-center mb-10 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-lg font-medium">{t(data.icp)}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.personas.map((persona, idx) => {
            const Icon = getIcon(persona.icon);
            return (
              <Card key={idx} className="border-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${persona.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">{t(persona.role)}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{t(persona.pain)}</p>
                  <p className="text-xs text-primary font-medium">{t(persona.outcome)}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlaybookPersonasSection;
