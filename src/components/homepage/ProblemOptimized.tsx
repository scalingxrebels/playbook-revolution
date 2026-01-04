import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingDown, Zap, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

const problems = [
  {
    icon: TrendingDown,
    titleEn: 'Stagnation',
    titleDe: 'Stagnation',
    descEn: 'Revenue plateaus despite increasing effort',
    descDe: 'Umsatz stagniert trotz steigendem Aufwand',
    stat: '-40%',
    statLabel: 'Growth Rate',
  },
  {
    icon: Zap,
    titleEn: 'Chaos',
    titleDe: 'Chaos',
    descEn: 'Coordination costs explode with scale',
    descDe: 'Koordinationskosten explodieren mit der Skalierung',
    stat: 'O(n²)',
    statLabel: 'Complexity',
  },
  {
    icon: Users,
    titleEn: 'Board Pressure',
    titleDe: 'Board-Druck',
    descEn: 'Investors demand faster growth',
    descDe: 'Investoren fordern schnelleres Wachstum',
    stat: '3x',
    statLabel: 'Expectations',
  },
];

const ProblemOptimized: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const parallax = useParallax({ speed: 0.3 });

  return (
    <section 
      id="problem-section" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background with Parallax */}
      <div 
        ref={parallax.ref as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 transition-transform duration-100"
        style={{ transform: `translateY(${parallax.offset * 0.5}px) scale(1.1)` }}
      />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-destructive mb-4 block">
            {language === 'de' ? 'Das Problem' : 'The Problem'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' 
              ? 'Warum traditionelle Skalierung scheitert' 
              : 'Why Traditional Scaling Fails'
            }
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card border-2 border-border hover:border-destructive/50 p-8 transition-all duration-400 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Stat Badge */}
                <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground px-4 py-2 font-bold text-lg shadow-brutal-sm">
                  {problem.stat}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                  <Icon className="w-7 h-7 text-destructive" />
                </div>

                {/* Content */}
                <h3 className="font-sans text-xl font-bold text-foreground mb-3">
                  {language === 'de' ? problem.titleDe : problem.titleEn}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'de' ? problem.descDe : problem.descEn}
                </p>

                {/* Stat Label */}
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {problem.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemOptimized;
