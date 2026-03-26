import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { solutionCategories } from '@/data/solutionCategoryData';
import { ArrowRight } from 'lucide-react';

const SolutionCategoryNav: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <span className="block text-sm font-semibold uppercase tracking-widest text-accent text-center mb-4">
          {language === 'de' ? 'Nach Situation filtern' : 'Filter by situation'}
        </span>
        <h2 className="font-display text-display-md text-foreground text-center mb-12">
          {language === 'de' ? (
            <>Sechs Situationen. Sechs Wege. <span className="italic text-gradient">Eine ist deine.</span></>
          ) : (
            <>Six situations. Six paths. <span className="italic text-gradient">One is yours.</span></>
          )}
        </h2>

        {/* 2×3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionCategories.map((cat) => {
            const Icon = cat.icon;
            const headline = language === 'de' ? cat.headlineDe : cat.headlineEn;
            const forWhom = language === 'de' ? cat.forWhomDe : cat.forWhomEn;

            return (
              <button
                key={cat.id}
                onClick={() => navigate(cat.route)}
                className="group text-left bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-200 hover:-translate-y-0.5"
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
