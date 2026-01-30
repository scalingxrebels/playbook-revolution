import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  Rocket, 
  Settings, 
  DollarSign, 
  Users, 
  Heart, 
  Database, 
  Shield 
} from 'lucide-react';
import type { PlaybookDimensionsSection, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: PlaybookDimensionsSection;
}

const iconMap: Record<string, React.ReactNode> = {
  'TrendingUp': <TrendingUp className="w-6 h-6" />,
  'Rocket': <Rocket className="w-6 h-6" />,
  'Settings': <Settings className="w-6 h-6" />,
  'DollarSign': <DollarSign className="w-6 h-6" />,
  'Users': <Users className="w-6 h-6" />,
  'Heart': <Heart className="w-6 h-6" />,
  'Database': <Database className="w-6 h-6" />,
  'Shield': <Shield className="w-6 h-6" />,
};

const PlaybookDimensionsSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        {/* 2×4 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data.items.map((dimension) => (
            <Card 
              key={dimension.id} 
              className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.15)]"
            >
              <CardContent className="p-5">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {iconMap[dimension.icon] || <Settings className="w-6 h-6" />}
                  </div>
                  <h3 className="font-bold text-lg">
                    {t(dimension.title)}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {t(dimension.description)}
                </p>

                {/* AI-Powered vs AI-Native */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      L1
                    </span>
                    <p className="text-xs text-muted-foreground flex-1">
                      {t(dimension.aiPowered)}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      L3
                    </span>
                    <p className="text-xs text-muted-foreground flex-1">
                      {t(dimension.aiNative)}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                <div className="pt-3 border-t border-border">
                  <p className="text-xs font-medium text-primary">
                    {t(dimension.impact)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaybookDimensionsSection;
