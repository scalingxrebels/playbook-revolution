import React from 'react';
import { ArrowDown, Lightbulb, Workflow } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { FrameworkFlowData } from '@/data/research/types';

interface ResearchFrameworkFlowSectionProps {
  data: FrameworkFlowData;
}

const colorClasses: Record<string, { border: string; badge: string; bg: string; text: string }> = {
  violet: {
    border: 'border-violet-500/50',
    badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400'
  },
  blue: {
    border: 'border-blue-500/50',
    badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400'
  },
  emerald: {
    border: 'border-emerald-500/50',
    badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400'
  },
  amber: {
    border: 'border-amber-500/50',
    badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400'
  }
};

const ResearchFrameworkFlowSection: React.FC<ResearchFrameworkFlowSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="flow"
      className="relative py-24 bg-[#0A0A0F] overflow-hidden"
    >
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
            <Workflow className="w-4 h-4 mr-2" />
            {language === 'en' ? 'The Flow' : 'Der Ablauf'}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Vertical Flow */}
        <div className="space-y-4 mb-12">
          {data.steps.map((step, index) => {
            const colors = colorClasses[step.color];
            return (
              <React.Fragment key={step.number}>
                {/* Step Card */}
                <div
                  className={`relative p-6 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-500`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Step Number & Formula */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className={`w-10 h-10 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center font-bold ${colors.text}`}>
                        {step.number}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{step.name[language]}</p>
                        <Badge className={`${colors.badge} border text-xs`}>{step.formula}</Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        {step.description[language]}
                      </p>
                    </div>

                    {/* Output */}
                    <div className="flex items-center gap-2 sm:text-right">
                      <span className="text-muted-foreground">→</span>
                      <div>
                        <p className="text-xs text-muted-foreground">{step.output[language]}</p>
                        <p className={`font-mono font-bold text-lg ${colors.text}`}>{step.outputValue}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < data.steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className={`w-6 h-6 ${colorClasses[data.steps[index + 1].color].text} animate-pulse`} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Result */}
        <div className={`text-center mb-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-block p-6 rounded-xl border border-primary/30 bg-primary/10">
            <p className="text-foreground">
              {data.result[language]}
            </p>
          </div>
        </div>

        {/* Callout */}
        <div className={`p-6 rounded-xl border border-amber-500/30 bg-amber-500/10 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {data.callout.title[language]}
              </h4>
              <p className="text-sm text-muted-foreground">
                {data.callout.content[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchFrameworkFlowSection;
