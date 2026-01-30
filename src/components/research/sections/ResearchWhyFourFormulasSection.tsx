import React from 'react';
import { HelpCircle, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { WhyFourFormulasData } from '@/data/research/types';

interface ResearchWhyFourFormulasSectionProps {
  data: WhyFourFormulasData;
}

const formulaColors: Record<string, string> = {
  AMF: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  ANST: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  SST: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  META: 'bg-amber-500/20 text-amber-400 border-amber-500/30'
};

const ResearchWhyFourFormulasSection: React.FC<ResearchWhyFourFormulasSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">
            <HelpCircle className="w-4 h-4 mr-2" />
            {language === 'en' ? 'The Challenge' : 'Die Herausforderung'}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Questions */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'en' 
                ? 'Most frameworks answer one question. But scaling AI-native companies requires answering four:'
                : 'Die meisten Frameworks beantworten eine Frage. Aber das Skalieren von AI-nativen Unternehmen erfordert die Beantwortung von vier:'}
            </p>
            
            {data.questions.map((q, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <Badge className={`${formulaColors[q.formula]} border shrink-0 font-mono`}>
                    {q.formula}
                  </Badge>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {q.question[language]}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {q.explanation[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Insight */}
            <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-primary font-medium">
                {data.insight[language]}
              </p>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Visual: 4 Questions = 4 Formulas */}
            <div className="p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
                {language === 'en' ? '4 Questions = 4 Formulas' : '4 Fragen = 4 Formeln'}
              </h3>
              
              <div className="space-y-4">
                {[
                  { q: 'WHAT?', formula: 'AMF', desc: language === 'en' ? 'AI Maturity' : 'AI-Reife', color: 'violet' },
                  { q: 'WHY?', formula: 'ANST', desc: language === 'en' ? 'Scaling Velocity' : 'Skalierungsgeschwindigkeit', color: 'blue' },
                  { q: 'WHAT?', formula: 'SST', desc: language === 'en' ? 'Bottleneck' : 'Engpass', color: 'emerald' },
                  { q: 'WHEN?', formula: 'META', desc: language === 'en' ? 'Time to €100M' : 'Zeit bis €100M', color: 'amber' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg border border-${item.color}-500/30 bg-${item.color}-500/10`}
                  >
                    <span className="font-mono font-bold text-lg text-foreground">{item.q}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">→</span>
                      <Badge className={formulaColors[item.formula]}>
                        {item.formula}
                      </Badge>
                      <span className="text-sm text-muted-foreground hidden sm:block">({item.desc})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Callout Box */}
            <div className="mt-8 p-6 rounded-xl border border-amber-500/30 bg-amber-500/10">
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
        </div>
      </div>
    </section>
  );
};

export default ResearchWhyFourFormulasSection;
