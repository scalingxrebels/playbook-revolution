import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SSTCapabilitiesData } from '@/data/research/types';
import { Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ResearchSSTCapabilitiesSectionProps {
  data: SSTCapabilitiesData;
}

const colorClasses = {
  violet: {
    border: 'border-violet-500/50',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    badge: 'bg-violet-500/20 text-violet-300',
  },
  blue: {
    border: 'border-blue-500/50',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    badge: 'bg-blue-500/20 text-blue-300',
  },
  emerald: {
    border: 'border-emerald-500/50',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-300',
  },
  amber: {
    border: 'border-amber-500/50',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    badge: 'bg-amber-500/20 text-amber-300',
  },
};

const ResearchSSTCapabilitiesSection: React.FC<ResearchSSTCapabilitiesSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary">
            <Layers className="w-4 h-4 mr-2" />
            Framework
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* 4 Capability Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {data.capabilities.map((capability, index) => {
            const colors = colorClasses[capability.color];
            return (
              <Card 
                key={capability.id}
                className={`p-6 bg-card/50 backdrop-blur-sm border-2 ${colors.border} hover:shadow-lg hover:shadow-${capability.color}-500/10 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl font-bold ${colors.text}`}>
                      {capability.symbol}
                    </span>
                    <span className="font-semibold text-foreground">
                      {capability.name[language]}
                    </span>
                  </div>
                </div>

                {/* Tagline */}
                <p className={`text-sm font-medium ${colors.text} mb-4`}>
                  {capability.tagline[language]}
                </p>

                {/* What it is */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    {language === 'en' ? 'What it is' : 'Was es ist'}
                  </h4>
                  <ul className="space-y-1">
                    {capability.whatItIs.map((item, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                        <span className={`${colors.text} mt-1`}>•</span>
                        {item[language]}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why it matters */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    {language === 'en' ? 'Why it matters' : 'Warum es wichtig ist'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {capability.whyItMatters[language]}
                  </p>
                </div>

                {/* Bottleneck Badge */}
                <div className={`mt-auto pt-4 border-t border-border/50`}>
                  <Badge className={colors.badge}>
                    {language === 'en' ? 'Common bottleneck:' : 'Häufiger Bottleneck:'} {capability.bottleneckPercentage}%
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchSSTCapabilitiesSection;
