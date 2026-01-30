import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { PracticalApplicationData } from '@/data/research/types';

interface ResearchPracticalApplicationSectionProps {
  data: PracticalApplicationData;
}

const colorClasses: Record<string, { border: string; badge: string; bg: string; number: string }> = {
  violet: {
    border: 'border-violet-500/30 hover:border-violet-500/50',
    badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    bg: 'from-violet-500/10 to-transparent',
    number: 'bg-violet-500/20 text-violet-400 border-violet-500/30'
  },
  blue: {
    border: 'border-blue-500/30 hover:border-blue-500/50',
    badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    bg: 'from-blue-500/10 to-transparent',
    number: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  },
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-500/50',
    badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    bg: 'from-emerald-500/10 to-transparent',
    number: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
  }
};

const formulaBadgeColors: Record<string, string> = {
  AMF: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  ANST: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  SST: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  META: 'bg-amber-500/20 text-amber-400 border-amber-500/30'
};

const ResearchPracticalApplicationSection: React.FC<ResearchPracticalApplicationSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="application"
      className="relative py-24 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
            <Wrench className="w-4 h-4 mr-2" />
            {language === 'en' ? 'How to Use' : 'Anwendung'}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.applications.map((app, index) => {
            const colors = colorClasses[app.color];
            return (
              <div
                key={app.number}
                className={`group relative p-8 rounded-2xl border ${colors.border} bg-gradient-to-b ${colors.bg} bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {/* Number Badge */}
                <div className={`w-12 h-12 rounded-full ${colors.number} border flex items-center justify-center font-bold text-xl mb-6`}>
                  {app.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {app.title[language]}
                </h3>

                {/* Use Formulas */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-sm text-muted-foreground mr-2">
                    {language === 'en' ? 'Use:' : 'Nutze:'}
                  </span>
                  {app.useFormulas.map((formula) => (
                    <Badge key={formula} className={`${formulaBadgeColors[formula]} border text-xs`}>
                      {formula}
                    </Badge>
                  ))}
                </div>

                {/* Steps */}
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                    {language === 'en' ? 'Steps' : 'Schritte'}
                  </p>
                  <ol className="space-y-2">
                    {app.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-medium">{i + 1}.</span>
                        {step[language]}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Output */}
                <div className="mb-8">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                    {language === 'en' ? 'Output' : 'Ergebnis'}
                  </p>
                  <ul className="space-y-1">
                    {app.output.map((out, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="text-emerald-400">✓</span>
                        {out[language]}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                {app.cta.href.startsWith('http') ? (
                  <a href={app.cta.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group/btn">
                      {app.cta.text[language]}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </a>
                ) : (
                  <Link to={app.cta.href}>
                    <Button variant="outline" className="w-full group/btn">
                      {app.cta.text[language]}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchPracticalApplicationSection;
