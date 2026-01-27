import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Rocket, Target, GitBranch } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

const solutions = [
  {
    icon: Rocket,
    titleEn: 'Strategy + Execution + AI',
    titleDe: 'Strategie + Umsetzung + AI',
    descEn: 'Other consultants deliver PowerPoint. We build with you. Hands-on. In 8-12 weeks, not 6-18 months.',
    descDe: 'Andere Consultants liefern PowerPoint. Wir bauen mit dir zusammen. Hands-on. In 8-12 Wochen, nicht 6-18 Monaten.',
    stat: '8-12',
    statSuffix: { en: 'weeks', de: 'Wochen' },
    contrast: { en: 'instead of 6-18 months', de: 'statt 6-18 Monate' },
    color: 'primary',
  },
  {
    icon: Target,
    titleEn: 'Guaranteed Results',
    titleDe: 'Garantierte Ergebnisse',
    descEn: 'We guarantee 2 out of 3 results – or you get 50% back. No other consultant does that.',
    descDe: 'Wir garantieren 2 von 3 Ergebnissen – oder du bekommst 50% zurück. Kein anderer Consultant macht das.',
    stat: '2 of 3',
    statSuffix: { en: 'guaranteed', de: 'garantiert' },
    contrast: { en: 'or money back', de: 'oder Geld zurück' },
    color: 'accent',
  },
  {
    icon: GitBranch,
    titleEn: 'From 0 to 100 in 90 days',
    titleDe: 'Von 0 auf 100 in 90 Tagen',
    descEn: 'We transform your company in 90 days. From chaotic growth to systematic hypergrowth.',
    descDe: 'Wir transformieren dein Unternehmen in 90 Tagen. Von chaotischem Wachstum zu systematischem Hypergrowth.',
    stat: '90',
    statSuffix: { en: 'days', de: 'Tage' },
    contrast: { en: 'instead of 12-18 months', de: 'statt 12-18 Monate' },
    color: 'primary',
  },
];

const SolutionOptimized: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const parallax = useParallax({ speed: 0.25, direction: 'down' });

  return (
    <section 
      id="solution"
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background with Parallax */}
      <div 
        ref={parallax.ref as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 bg-mesh transition-transform duration-100"
        style={{ transform: `translateY(${parallax.offset * 0.5}px) scale(1.1)` }}
      />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Lösung' : 'The Solution'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' 
              ? 'Systeme, die mit dir skalieren' 
              : 'Systems That Scale With You'
            }
          </h2>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isAccent = solution.color === 'accent';
            return (
              <div 
                key={index}
                className={`group relative bg-card border-2 ${isAccent ? 'border-accent/30 hover:border-accent' : 'border-primary/30 hover:border-primary'} p-8 transition-all duration-400 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Stat Badge */}
                <div className={`absolute -top-4 -right-4 ${isAccent ? 'bg-gradient-accent' : 'bg-gradient-primary'} text-primary-foreground px-4 py-2 font-bold text-lg shadow-brutal-sm`}>
                  {solution.stat}
                  {solution.statSuffix && (
                    <span className="text-sm ml-1">
                      {language === 'de' ? solution.statSuffix.de : solution.statSuffix.en}
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg ${isAccent ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-primary/10 group-hover:bg-primary/20'} flex items-center justify-center mb-6 transition-colors`}>
                  <Icon className={`w-7 h-7 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                </div>

                {/* Content */}
                <h3 className="font-sans text-xl font-bold text-foreground mb-3">
                  {language === 'de' ? solution.titleDe : solution.titleEn}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'de' ? solution.descDe : solution.descEn}
                </p>

                {/* Contrast Label */}
                <div className="pt-4 border-t border-border">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${isAccent ? 'text-accent' : 'text-primary'}`}>
                    {language === 'de' ? solution.contrast.de : solution.contrast.en}
                  </span>
                </div>

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 ${isAccent ? 'shadow-accent-glow' : 'shadow-glow'} opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionOptimized;
