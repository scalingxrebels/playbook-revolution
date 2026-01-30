import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { icons, ArrowRight, Zap, Rocket, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { PlaybookSolutionsConnection, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: PlaybookSolutionsConnection;
}

const PlaybookSolutionsSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getIcon = (name: string) => {
    const Icon = icons[name as keyof typeof icons];
    return Icon || icons.Circle;
  };

  const typeConfig = {
    'power-up': { 
      label: 'Power Up', 
      gradient: 'from-orange-500 to-amber-500',
      bgGlow: 'hover:shadow-orange-500/20',
      border: 'hover:border-orange-500/50',
      icon: Zap
    },
    'boost': { 
      label: 'Boost', 
      gradient: 'from-blue-500 to-cyan-500',
      bgGlow: 'hover:shadow-blue-500/20',
      border: 'hover:border-blue-500/50',
      icon: Rocket
    },
    'accelerate': { 
      label: 'Accelerate', 
      gradient: 'from-violet-500 to-purple-500',
      bgGlow: 'hover:shadow-violet-500/20',
      border: 'hover:border-violet-500/50',
      icon: TrendingUp
    },
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Nächste Schritte' : 'Next Steps'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        {/* Solution Cards with Glow Effects */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.items.map((item, idx) => {
            const Icon = getIcon(item.icon);
            const config = typeConfig[item.type];
            const TypeIcon = config.icon;
            
            return (
              <Card 
                key={idx} 
                className={`group border-2 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl ${config.bgGlow} ${config.border} hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardContent className="p-6">
                  {/* Type Badge */}
                  <Badge 
                    className={`mb-4 bg-gradient-to-r ${config.gradient} text-white border-0`}
                  >
                    <TypeIcon className="w-3 h-3 mr-1" />
                    {config.label}
                  </Badge>
                  
                  {/* Icon */}
                  <div className={`p-3 rounded-xl ${item.color} inline-block mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-lg mb-2">{t(item.name)}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t(item.outcome)}</p>
                  
                  {/* Duration & Price */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-5 pb-5 border-b border-border">
                    <Badge variant="outline" className="text-xs">{t(item.duration)}</Badge>
                    <span className="font-medium">{t(item.price)}</span>
                  </div>
                  
                  {/* CTA Button with Arrow Animation */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300" 
                    asChild
                  >
                    <a href={item.link}>
                      {t(item.cta)}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
