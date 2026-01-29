import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { icons } from 'lucide-react';
import type { FrameworkItem, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: {
    title: BilingualText;
    subtitle: BilingualText;
    items: FrameworkItem[];
  };
}

const PlaybookFrameworkSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

  const getIcon = (name: string) => {
    const Icon = icons[name as keyof typeof icons];
    return Icon || icons.Circle;
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

        <Accordion type="single" collapsible className="space-y-4">
          {data.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <AccordionItem key={item.id} value={item.id} className="border-2 rounded-lg bg-background">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${item.bgColor}`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">{t(item.title)}</h3>
                      <p className="text-sm text-muted-foreground">{t(item.subtitle)}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground mb-4">{t(item.description)}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {item.metrics.map((m, i) => (
                      <div key={i} className="p-3 bg-muted/50 rounded-lg">
                        <span className="font-bold text-lg">{m.value}</span>
                        <span className="text-sm text-muted-foreground ml-2">{t(m.label)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.actions.map((action, i) => (
                      <Badge key={i} variant="outline">{t(action)}</Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default PlaybookFrameworkSection;
