import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SSTBottleneckPrincipleData } from '@/data/research/types';
import { Calculator, Lightbulb, CheckCircle2, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ResearchBottleneckPrincipleSectionProps {
  data: SSTBottleneckPrincipleData;
}

const ResearchBottleneckPrincipleSection: React.FC<ResearchBottleneckPrincipleSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary">
            <Calculator className="w-4 h-4 mr-2" />
            Core Principle
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Formula Display */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="p-8 md:p-12 bg-card/30 backdrop-blur-sm border-primary/30 text-center">
            <div className="font-mono text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 tracking-wide">
              {data.formulaDisplay}
            </div>
            <p className="text-lg text-foreground mb-4">
              {data.principle[language]}
            </p>
            <p className="text-muted-foreground">
              {data.whyMultiplicative[language]}
            </p>
          </Card>
        </div>

        {/* Side-by-Side Comparison */}
        <div className={`grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Company A - Strong */}
          <Card className="p-6 bg-emerald-500/10 border-emerald-500/30">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <span className="font-semibold text-foreground">
                {data.example.companyA.label[language]}
              </span>
            </div>
            <div className="font-mono text-sm text-muted-foreground mb-3">
              {data.example.companyA.scores}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Product =</span>
              <span className="text-2xl font-bold text-emerald-400">
                {data.example.companyA.product}
              </span>
              <span className="text-sm text-emerald-400">(strong)</span>
            </div>
          </Card>

          {/* Company B - Weak */}
          <Card className="p-6 bg-red-500/10 border-red-500/30">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-red-400" />
              <span className="font-semibold text-foreground">
                {data.example.companyB.label[language]}
              </span>
            </div>
            <div className="font-mono text-sm text-muted-foreground mb-3">
              {data.example.companyB.scores}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Product =</span>
              <span className="text-2xl font-bold text-red-400">
                {data.example.companyB.product}
              </span>
              <span className="text-sm text-red-400">(weak)</span>
            </div>
          </Card>
        </div>

        {/* Implication */}
        <div className={`max-w-3xl mx-auto mb-8 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-foreground">
            {data.implication[language]}
          </p>
        </div>

        {/* Callout */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-violet-500/10 border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">
                  {data.callout.title[language]}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {data.callout.content[language]}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchBottleneckPrincipleSection;
