import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Cpu, Brain } from 'lucide-react';
import type { PlaybookMaturitySection, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: PlaybookMaturitySection;
}

const levelConfig = {
  1: {
    icon: <Zap className="w-6 h-6" />,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    badgeVariant: 'outline' as const,
  },
  2: {
    icon: <Cpu className="w-6 h-6" />,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    badgeVariant: 'outline' as const,
  },
  3: {
    icon: <Brain className="w-6 h-6" />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    badgeVariant: 'default' as const,
  },
};

const PlaybookMaturitySection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        {/* 3 Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.levels.map((level) => {
            const config = levelConfig[level.level];
            const isLevel3 = level.level === 3;
            
            return (
              <Card 
                key={level.level}
                className={`relative border-2 transition-all duration-300 ${
                  isLevel3 
                    ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/10' 
                    : config.borderColor
                }`}
              >
                {isLevel3 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="default" className="bg-emerald-500 text-white">
                      Target
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  {/* Level Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${config.bgColor} ${config.color}`}>
                      {config.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Level {level.level}</p>
                      <h3 className="font-bold text-xl">
                        {t(level.name)}
                      </h3>
                    </div>
                  </div>

                  {/* Definition */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {language === 'en' ? 'Definition' : 'Definition'}
                    </p>
                    <p className="text-sm">
                      {t(level.definition)}
                    </p>
                  </div>

                  {/* Examples */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {language === 'en' ? 'Examples' : 'Beispiele'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(level.examples)}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {language === 'en' ? 'Impact' : 'Impact'}
                    </p>
                    <p className={`text-sm font-medium ${config.color}`}>
                      {t(level.impact)}
                    </p>
                  </div>

                  {/* Scaling */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {language === 'en' ? 'Scaling' : 'Skalierung'}
                    </p>
                    <p className="text-sm">
                      {t(level.scaling)}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className={`pt-4 border-t ${isLevel3 ? 'border-emerald-500/30' : 'border-border'}`}>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {language === 'en' ? 'Time to €100M ARR' : 'Zeit bis €100M ARR'}
                    </p>
                    <p className={`text-lg font-bold ${config.color}`}>
                      {t(level.timeline)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlaybookMaturitySection;
