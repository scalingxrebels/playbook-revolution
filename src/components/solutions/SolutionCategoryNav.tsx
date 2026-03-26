import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { solutionCategories } from '@/data/solutionCategoryData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const SolutionCategoryNav: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="text-center">
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {language === 'de' ? 'Nach Situation filtern' : 'Filter by situation'}
          </p>
          <h2 className={`font-display text-display-md text-foreground mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {language === 'de' ? (
              <>Sechs Situationen. Sechs Wege.<br /><span className="italic text-gradient">Eine ist deine.</span></>
            ) : (
              <>Six situations. Six paths.<br /><span className="italic text-gradient">One is yours.</span></>
            )}
          </h2>
        </div>

        {/* 2×3 Grid */}
        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionCategories.map((cat, i) => {
            const Icon = cat.icon;
            const headline = language === 'de' ? cat.headlineDe : cat.headlineEn;
            const forWhom = language === 'de' ? cat.forWhomDe : cat.forWhomEn;

            return (
              <button
                key={cat.id}
                onClick={() => navigate(cat.route)}
                className={`group text-left bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-500 hover:-translate-y-0.5 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {language === 'de' ? cat.labelDe : cat.labelEn}
                  </h3>
                </div>

                {/* Headline */}
                <p className="text-sm text-muted-foreground mb-3">
                  {headline}
                </p>

                {/* For whom + count */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="uppercase tracking-wider text-accent font-semibold">
                    {forWhom}
                  </span>
                  <span className="text-muted-foreground">
                    {cat.solutionCount} Solutions
                  </span>
                </div>

                {/* CTA */}
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  {language === 'de' ? 'Kategorie entdecken' : 'Explore category'}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionCategoryNav;
