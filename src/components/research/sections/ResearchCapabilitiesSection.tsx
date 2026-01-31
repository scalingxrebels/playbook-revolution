import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SolutionSectionData } from '@/data/research/types';
import { Zap, Target, Settings, Play, RefreshCw, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ResearchCapabilitiesSectionProps {
  data: SolutionSectionData;
}

const capabilityIcons: Record<string, React.ElementType> = {
  strategy: Target,
  setup: Settings,
  execution: Play,
  operationalization: RefreshCw,
};

const capabilityColors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  violet: {
    bg: 'bg-violet-500/5',
    border: 'border-violet-500/30 hover:border-violet-500/50',
    text: 'text-violet-600 dark:text-violet-400',
    badge: 'bg-violet-500/20 text-violet-600 dark:text-violet-400',
  },
  blue: {
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/30 hover:border-blue-500/50',
    text: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-500/20 text-blue-600 dark:text-blue-400',
  },
  emerald: {
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/30 hover:border-emerald-500/50',
    text: 'text-emerald-600 dark:text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  },
  amber: {
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/30 hover:border-amber-500/50',
    text: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-500/20 text-amber-600 dark:text-amber-400',
  },
};

const ResearchCapabilitiesSection: React.FC<ResearchCapabilitiesSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Die Lösung' : 'The Solution'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.content[language]}
          </p>
        </div>

        {/* Pattern Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {data.pattern.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm text-center"
            >
              <p className="text-muted-foreground">{item[language]}</p>
            </div>
          ))}
        </div>

        {/* Secret & Result */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm">
            <h3 className="font-semibold text-lg mb-2 text-primary">
              {language === 'de' ? 'Das Geheimnis' : 'The Secret'}
            </h3>
            <p className="text-muted-foreground">{data.secret[language]}</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm">
            <h3 className="font-semibold text-lg mb-2 text-emerald-600 dark:text-emerald-400">
              {language === 'de' ? 'Das Ergebnis' : 'The Result'}
            </h3>
            <p className="text-muted-foreground">{data.result[language]}</p>
          </div>
        </div>

        {/* Formula Visual */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/80 border border-border/50 backdrop-blur-sm">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-mono text-lg md:text-xl font-medium">
              {data.formula[language]}
            </span>
          </div>
        </div>

        {/* 4 Capability Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.capabilities.map((capability, index) => {
            const Icon = capabilityIcons[capability.id] || Target;
            const colors = capabilityColors[capability.color];

            return (
              <div
                key={capability.id}
                className={`p-6 rounded-2xl ${colors.bg} border-2 ${colors.border} backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div>
                      <span className={`text-sm font-mono ${colors.text}`}>{capability.tagline[language]}</span>
                      <h3 className="font-bold text-xl">{capability.name[language]}</h3>
                    </div>
                  </div>
                  {capability.exponent && (
                    <Badge className={`${colors.badge} font-mono text-xs`}>
                      ^{capability.exponent}
                    </Badge>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                      {language === 'de' ? 'Was es ist' : 'What it is'}
                    </h4>
                    <ul className="space-y-1">
                      {capability.whatItIs.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-').replace('dark:', '').split(' ')[0]}`} />
                          {item[language]}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                      {language === 'de' ? 'Warum es wichtig ist' : 'Why it matters'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {capability.whyItMatters[language]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchCapabilitiesSection;
