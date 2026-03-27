import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { insightCategoryTiles, getArticleCountByCategory, getCategoryAccentClass } from '@/data/insights';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const InsightsCategoryNav: React.FC = () => {
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
            {language === 'de' ? 'Themengebiete' : 'Topics'}
          </p>
          <h2 className={`font-display text-display-md text-foreground mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {language === 'de' ? (
              <>Sechs Themen. Sechs Perspektiven.<br /><span className="italic text-gradient">Eine ist deine.</span></>
            ) : (
              <>Six topics. Six perspectives.<br /><span className="italic text-gradient">One is yours.</span></>
            )}
          </h2>
        </div>

        {/* 3×2 Grid */}
        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insightCategoryTiles.map((cat, i) => {
            const Icon = cat.icon;
            const headline = language === 'de' ? cat.headlineDe : cat.headlineEn;
            const body = language === 'de' ? cat.bodyDe : cat.bodyEn;
            const accentClass = getCategoryAccentClass(cat.id);
            const articleCount = getArticleCountByCategory(cat.id);

            return (
              <button
                key={cat.id}
                onClick={() => navigate(cat.route)}
                className={`group text-left bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-500 hover:-translate-y-0.5 flex flex-col ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms`, minHeight: '180px' }}
              >
                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${cat.id === 'ai-orchestration' ? 'bg-amber-500/10' : 'bg-primary/10'} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${accentClass}`} />
                  </div>
                  <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${accentClass}`}>
                    {language === 'de' ? cat.labelDe : cat.labelEn}
                  </p>
                </div>

                {/* Headline */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {headline}
                </h3>

                {/* Body */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {body}
                </p>

                {/* Footer: count + arrow */}
                <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${accentClass} group-hover:gap-2.5 transition-all`}>
                  {articleCount} {language === 'de' ? 'Artikel' : 'Articles'} <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsightsCategoryNav;
