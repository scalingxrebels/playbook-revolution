import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { icons, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getIcon = (name: string) => {
    const Icon = icons[name as keyof typeof icons];
    return Icon || icons.Circle;
  };

  // Phase colors for visual distinction
  const phaseColors = [
    { border: 'border-l-violet-500', bg: 'hover:bg-violet-500/5' },
    { border: 'border-l-blue-500', bg: 'hover:bg-blue-500/5' },
    { border: 'border-l-emerald-500', bg: 'hover:bg-emerald-500/5' },
    { border: 'border-l-amber-500', bg: 'hover:bg-amber-500/5' },
    { border: 'border-l-rose-500', bg: 'hover:bg-rose-500/5' },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header with animation */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Die Lösung' : 'The Solution'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        {/* Framework Accordion with staggered animations */}
        <Accordion type="single" collapsible className="space-y-4">
          {data.items.map((item, index) => {
            const Icon = getIcon(item.icon);
            const colorScheme = phaseColors[index % phaseColors.length];
            
            return (
              <AccordionItem 
                key={item.id} 
                value={item.id} 
                className={`border-2 border-l-4 ${colorScheme.border} rounded-lg bg-card/50 backdrop-blur-sm transition-all duration-500 ${colorScheme.bg} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${item.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs mb-1">
                          {language === 'de' ? `Phase ${index + 1}` : `Phase ${index + 1}`}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-lg">{t(item.title)}</h3>
                      <p className="text-sm text-muted-foreground">{t(item.subtitle)}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-16">
                    <p className="text-muted-foreground mb-6">{t(item.description)}</p>
                    
                    {/* Metrics Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {item.metrics.map((m, i) => (
                        <div 
                          key={i} 
                          className="p-4 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg border border-border/50"
                        >
                          <span className="font-bold text-2xl text-primary">{m.value}</span>
                          <span className="text-sm text-muted-foreground ml-2">{t(m.label)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Badges */}
                    <div className="flex flex-wrap gap-2">
                      {item.actions.map((action, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="bg-background/80 hover:bg-primary/10 transition-colors"
                        >
                          {t(action)}
                        </Badge>
                      ))}
                    </div>

                    {/* Examples (wenn vorhanden) */}
                    {item.examples && item.examples.length > 0 && (
                      <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
                          {language === 'de' ? 'Beispiele' : 'Examples'}
                        </p>
                        <ul className="space-y-1">
                          {item.examples.map((ex, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">→</span>
                              {t(ex)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
