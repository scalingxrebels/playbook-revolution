import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SSTCaseStudiesData } from '@/data/research/types';
import { Building, ArrowRight, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ResearchBottleneckCaseStudiesSectionProps {
  data: SSTCaseStudiesData;
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

const ResearchBottleneckCaseStudiesSection: React.FC<ResearchBottleneckCaseStudiesSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary">
            <Building className="w-4 h-4 mr-2" />
            Case Studies
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {data.cases.map((caseStudy, index) => {
            const colors = colorClasses[caseStudy.color];
            return (
              <Card 
                key={caseStudy.id}
                className={`p-6 bg-card/50 backdrop-blur-sm border-2 ${colors.border} hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">
                      {caseStudy.name[language]}
                    </h3>
                    <Badge className={colors.badge}>
                      ROI: {caseStudy.roi}
                    </Badge>
                  </div>
                  <Badge variant="outline" className={`${colors.border} ${colors.text}`}>
                    {caseStudy.bottleneckName[language]}
                  </Badge>
                </div>

                {/* Before/After Comparison */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Before */}
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                    <div className="text-xs uppercase tracking-wide text-red-400 mb-2">
                      {language === 'en' ? 'Before' : 'Vorher'}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">
                      {caseStudy.before.scores}
                    </div>
                    <div className="text-sm text-foreground">
                      C_min: <span className="text-red-400 font-semibold">{caseStudy.before.cMin}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {caseStudy.before.timeToRevenue}
                    </div>
                  </div>

                  {/* After */}
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <div className="text-xs uppercase tracking-wide text-emerald-400 mb-2">
                      {language === 'en' ? 'After' : 'Nachher'}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground mb-1">
                      {caseStudy.after.fixedScore}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm text-emerald-400 font-semibold">
                        {caseStudy.after.improvement}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {caseStudy.after.timeToRevenue}
                    </div>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    {language === 'en' ? 'The Problem' : 'Das Problem'}
                  </h4>
                  <p className="text-sm text-foreground">
                    {caseStudy.problem[language]}
                  </p>
                </div>

                {/* Observations */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    {language === 'en' ? 'What we observed' : 'Was wir beobachtet haben'}
                  </h4>
                  <ul className="space-y-1">
                    {caseStudy.observations.map((obs, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        {obs[language]}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fix */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    {language === 'en' ? 'The Fix' : 'Die Lösung'}
                  </h4>
                  <ul className="space-y-1">
                    {caseStudy.fix.map((fix, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        {fix[language]}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                  <h4 className={`text-xs uppercase tracking-wide ${colors.text} mb-1`}>
                    {language === 'en' ? 'Result' : 'Ergebnis'}
                  </h4>
                  <p className="text-sm text-foreground">
                    {caseStudy.result[language]}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchBottleneckCaseStudiesSection;
