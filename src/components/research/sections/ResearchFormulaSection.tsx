import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FormulaSectionData } from '@/data/research/types';
import { Calculator, Info, Lightbulb } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface ResearchFormulaSectionProps {
  data: FormulaSectionData;
}

const componentColors: Record<string, string> = {
  'M': 'text-blue-400',
  'E': 'text-green-400',
  'C₁': 'text-violet-500',
  'C₂': 'text-blue-500',
  'C₃': 'text-emerald-500',
  'C₄': 'text-amber-500',
  'θ_index': 'text-primary',
  'θ': 'text-primary',
};

const ResearchFormulaSection: React.FC<ResearchFormulaSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-16 md:py-24 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 mb-6">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Die Formel' : 'The Formula'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Formula Display */}
        <div className="relative mb-12">
          <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-center">
              <div className="font-mono text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                <span className="text-muted-foreground">S</span>
                <span className="text-white/50 mx-2">=</span>
                <span className="text-blue-400">M</span>
                <span className="text-white/50 mx-2">×</span>
                <span className="text-green-400">E</span>
                <span className="text-white/50 mx-2">×</span>
                <span className="text-white/50">(</span>
                <span className="text-violet-400">C₁</span>
                <sup className="text-violet-400/70 text-sm">1.5</sup>
                <span className="text-white/50 mx-1">×</span>
                <span className="text-blue-500">C₂</span>
                <span className="text-white/50 mx-1">×</span>
                <span className="text-emerald-400">C₃</span>
                <sup className="text-emerald-400/70 text-sm">1.5</sup>
                <span className="text-white/50 mx-1">×</span>
                <span className="text-amber-400">C₄</span>
                <span className="text-white/50">)</span>
                <span className="text-white/50 mx-2">×</span>
                <span className="text-primary">θ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {data.components.map((component) => (
            <Tooltip key={component.symbol}>
              <TooltipTrigger asChild>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-help">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`font-mono text-xl font-bold ${componentColors[component.symbol] || 'text-white'}`}>
                      {component.symbol}
                    </span>
                    <span className="text-sm font-medium text-white/90">
                      {component.name[language]}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {component.description[language]}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <p>{component.description[language]}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Explanation */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-white/70 flex-shrink-0 mt-1" />
            <p className="text-white/70 leading-relaxed">
              {data.explanation[language]}
            </p>
          </div>
        </div>

        {/* Exponent Insight Callout */}
        <div className="p-6 rounded-xl bg-violet-500/10 border border-violet-500/30 mb-8">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-violet-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-lg mb-2 text-violet-300">
                {data.exponentInsight.title[language]}
              </h4>
              <p className="text-white/70 text-sm mb-3">
                {data.exponentInsight.content[language]}
              </p>
              <p className="text-sm text-violet-300/80 italic">
                {data.exponentInsight.example[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Why We Focus on C₁-C₄ */}
        {data.whyFocusOnCapabilities && (
          <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <h4 className="font-semibold text-lg mb-4 text-emerald-300">
              {data.whyFocusOnCapabilities.headline[language]}
            </h4>
            <div className="space-y-4 mb-4">
              {data.whyFocusOnCapabilities.reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400 text-sm font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">{reason.title[language]}</p>
                    <p className="text-sm text-white/60">{reason.content[language]}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm font-mono text-emerald-300 text-center">
                {data.whyFocusOnCapabilities.causalChain[language]}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResearchFormulaSection;
