import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { FourFormulasData } from '@/data/research/types';

interface ResearchFourFormulasSectionProps {
  data: FourFormulasData;
}

const colorClasses: Record<string, { border: string; badge: string; bg: string }> = {
  violet: {
    border: 'border-violet-500/30 hover:border-violet-500/50',
    badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    bg: 'from-violet-500/5 to-transparent'
  },
  blue: {
    border: 'border-blue-500/30 hover:border-blue-500/50',
    badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    bg: 'from-blue-500/5 to-transparent'
  },
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-500/50',
    badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    bg: 'from-emerald-500/5 to-transparent'
  },
  amber: {
    border: 'border-amber-500/30 hover:border-amber-500/50',
    badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    bg: 'from-amber-500/5 to-transparent'
  }
};

const ResearchFourFormulasSection: React.FC<ResearchFourFormulasSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="formulas"
      className="relative py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
            <Layers className="w-4 h-4 mr-2" />
            {language === 'en' ? 'The 4 Formulas' : 'Die 4 Formeln'}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.formulas.map((formula, index) => {
            const colors = colorClasses[formula.color];
            return (
              <div
                key={formula.id}
                className={`group relative p-6 rounded-2xl border ${colors.border} bg-gradient-to-b ${colors.bg} bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-lg`}
                style={{ transitionDelay: `${index * 100}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
              >
                {/* Formula Badge */}
                <Badge className={`${colors.badge} border mb-4 font-mono text-lg px-3 py-1`}>
                  {formula.name[language]}
                </Badge>

                {/* Full Name */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {formula.fullName[language]}
                </h3>

                {/* Question */}
                <p className="text-sm font-medium text-primary mb-4">
                  {formula.question[language]}
                </p>

                {/* Input */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    {language === 'en' ? 'Input' : 'Input'}
                  </p>
                  <p className="text-sm text-foreground font-medium mb-1">
                    {formula.input[language]}
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {formula.inputDetails.slice(0, 3).map((detail, i) => (
                      <li key={i}>• {detail[language]}</li>
                    ))}
                    {formula.inputDetails.length > 3 && (
                      <li className="text-muted-foreground/60">+{formula.inputDetails.length - 3} more</li>
                    )}
                  </ul>
                </div>

                {/* Output */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    {language === 'en' ? 'Output' : 'Output'}
                  </p>
                  <p className="text-sm text-foreground font-medium mb-1">
                    {formula.output[language]}
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {formula.outputDetails.slice(0, 2).map((detail, i) => (
                      <li key={i}>• {detail[language]}</li>
                    ))}
                  </ul>
                </div>

                {/* Validation */}
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-400">✓</span> {formula.validation[language]}
                  </p>
                </div>

                {/* CTA */}
                <Link to={formula.href}>
                  <Button variant="ghost" size="sm" className="w-full group/btn">
                    {language === 'en' ? 'Learn More' : 'Mehr erfahren'}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchFourFormulasSection;
