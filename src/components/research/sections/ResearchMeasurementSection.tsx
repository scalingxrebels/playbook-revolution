import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MeasurementData } from '@/data/research/types';
import { Target, Layers, Workflow, Database, Users, TrendingUp, LucideIcon } from 'lucide-react';

interface ResearchMeasurementSectionProps {
  data: MeasurementData;
}

const iconMap: Record<string, LucideIcon> = {
  Target,
  Layers,
  Workflow,
  Database,
  Users,
  TrendingUp,
};

const ResearchMeasurementSection: React.FC<ResearchMeasurementSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-muted/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Description */}
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          {data.description[language]}
        </p>

        {/* Dimensions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.dimensions.map((dimension, index) => {
            const Icon = iconMap[dimension.icon] || Target;
            
            return (
              <div
                key={dimension.id}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {index + 1}.
                    </span>
                    <h3 className="font-bold text-lg">{dimension.title[language]}</h3>
                  </div>
                </div>

                {/* Question */}
                <p className="text-sm font-medium mb-4 text-foreground">
                  {dimension.question[language]}
                </p>

                {/* Levels */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-amber-500 font-medium min-w-16">Low:</span>
                    <span className="text-muted-foreground">{dimension.levels.low[language]}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-blue-500 font-medium min-w-16">Medium:</span>
                    <span className="text-muted-foreground">{dimension.levels.medium[language]}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-500 font-medium min-w-16">High:</span>
                    <span className="text-muted-foreground">{dimension.levels.high[language]}</span>
                  </div>
                </div>

                {/* Example */}
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-4">
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    {language === 'en' ? 'Example (High):' : 'Beispiel (High):'}
                  </p>
                  <p className="text-sm font-medium">
                    {dimension.example.company} — {dimension.example.description[language]}
                  </p>
                </div>

                {/* Why it matters */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">
                    {language === 'en' ? 'Why it matters: ' : 'Warum es wichtig ist: '}
                  </span>
                  {dimension.whyItMatters[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchMeasurementSection;
