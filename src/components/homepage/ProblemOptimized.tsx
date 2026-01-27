import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, TrendingDown, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

const problems = [
  {
    icon: Target,
    titleEn: 'One weak area blocks everything',
    titleDe: 'Ein schwacher Bereich blockiert alles',
    descEn: 'Your sales is running well, but operations can\'t keep up. Or vice versa. One area is slowing down your entire company.',
    descDe: 'Dein Sales läuft gut, aber Operations kommt nicht nach. Oder umgekehrt. Ein Bereich bremst das ganze Unternehmen.',
    stat: '1',
    statLabel: { en: 'Weak spot is enough', de: 'Schwachstelle reicht' },
  },
  {
    icon: TrendingDown,
    titleEn: 'Chaos grows faster than your team',
    titleDe: 'Chaos wächst schneller als dein Team',
    descEn: 'With every new employee, coordination becomes more complex. Meetings explode. Decisions take forever.',
    descDe: 'Mit jedem neuen Mitarbeiter wird die Koordination komplexer. Meetings explodieren. Entscheidungen dauern ewig.',
    stat: '2x Team = 4x',
    statLabel: { en: 'Complexity', de: 'Chaos' },
  },
  {
    icon: Zap,
    titleEn: 'Your competitors are faster',
    titleDe: 'Deine Competitors sind schneller',
    descEn: 'Other startups reach €100M ARR in 18 months. You need 72 months. The difference? They use AI differently.',
    descDe: 'Andere Startups erreichen €100M ARR in 18 Monaten. Du brauchst 72 Monate. Der Unterschied? Sie nutzen AI anders.',
    stat: '4x',
    statLabel: { en: 'slower than AI-Native', de: 'langsamer als AI-Native' },
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
              ? 'Warum Wachstum sich so schwer anfühlt' 
              : 'Why Growth Feels So Hard'
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
                    {language === 'de' ? problem.statLabel.de : problem.statLabel.en}
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
