import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Rocket, Target, GitBranch } from 'lucide-react';

const solutions = [
  {
    icon: Rocket,
    titleEn: '10-30x Faster',
    titleDe: '10-30x Schneller',
    descEn: 'Development velocity through AI-native workflows',
    descDe: 'Entwicklungsgeschwindigkeit durch AI-native Workflows',
    stat: '10-30x',
    color: 'primary',
  },
  {
    icon: Target,
    titleEn: '€100M in 18-30 Months',
    titleDe: '€100M in 18-30 Monaten',
    descEn: 'Accelerated path to scale with proven systems',
    descDe: 'Beschleunigter Weg zur Skalierung mit bewährten Systemen',
    stat: '18-30',
    statSuffix: 'mo',
    color: 'accent',
  },
  {
    icon: GitBranch,
    titleEn: 'O(n log n) Coordination',
    titleDe: 'O(n log n) Koordination',
    descEn: 'Efficient scaling without complexity explosion',
    descDe: 'Effiziente Skalierung ohne Komplexitätsexplosion',
    stat: 'O(n log n)',
    color: 'primary',
  },
];

const SolutionOptimized: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-[50vh] py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            {language === 'de' ? 'Die Lösung' : 'The Solution'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-6">
            {language === 'de' 
              ? 'AI-Native Scaling Systeme' 
              : 'AI-Native Scaling Systems'
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
                  {solution.stat}{solution.statSuffix && <span className="text-sm ml-1">{solution.statSuffix}</span>}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg ${isAccent ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-primary/10 group-hover:bg-primary/20'} flex items-center justify-center mb-6 transition-colors`}>
                  <Icon className={`w-7 h-7 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                </div>

                {/* Content */}
                <h3 className="font-sans text-xl font-bold text-foreground mb-3">
                  {language === 'de' ? solution.titleDe : solution.titleEn}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'de' ? solution.descDe : solution.descEn}
                </p>

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
