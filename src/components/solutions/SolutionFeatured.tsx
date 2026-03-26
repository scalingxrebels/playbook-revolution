import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { solutionTiles } from '@/data/solutionTiles';
import { featuredSolutionCopy } from '@/data/solutionCategoryData';
import { useContentVisibilityContext } from '@/contexts/ContentVisibilityContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const SolutionFeatured: React.FC = () => {
  const { language } = useLanguage();
  const { isHidden, isFeatured } = useContentVisibilityContext();
  const navigate = useNavigate();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const featuredTiles = solutionTiles
    .filter(t => isFeatured('solution', t.slug, t.featured) && !isHidden('solution', t.slug, t.hidden))
    .slice(0, 7);

  if (featuredTiles.length === 0) return null;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="text-center">
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {language === 'de' ? 'Empfohlen' : 'Recommended'}
          </p>
          <h2 className={`font-display text-display-md text-foreground mb-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {language === 'de' ? (
              <>Die häufigsten <span className="italic text-gradient">ersten Schritte.</span></>
            ) : (
              <>The most common <span className="italic text-gradient">first steps.</span></>
            )}
          </h2>
          <p className={`text-muted-foreground mb-12 text-sm transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {language === 'de'
              ? `Händisch kuratiert. Aktuell: ${featuredTiles.length} Solutions.`
              : `Hand-curated. Currently: ${featuredTiles.length} solutions.`}
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTiles.map((tile, i) => {
            const copy = featuredSolutionCopy[tile.slug];
            const headline = language === 'de' ? tile.headlineDe : tile.headlineEn;
            const badge = copy ? (language === 'de' ? copy.badgeDe : copy.badgeEn) : '';
            const description = copy ? (language === 'de' ? copy.copyDe : copy.copyEn) : (language === 'de' ? tile.solutionDe : tile.solutionEn).slice(0, 80) + '…';

            const handleClick = () => {
              if (tile.primaryCtaUrl.startsWith('http')) {
                window.open(tile.primaryCtaUrl, '_blank');
              } else if (tile.primaryCtaUrl.startsWith('/')) {
                navigate(tile.primaryCtaUrl);
              } else if (tile.secondaryCtaUrl?.startsWith('/')) {
                navigate(tile.secondaryCtaUrl);
              }
            };

            return (
              <button
                key={tile.id}
                onClick={handleClick}
                className={`group text-left bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-500 hover:-translate-y-0.5 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                {badge && (
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 mb-3">
                    {badge}
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {headline}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  {language === 'de' ? 'Details ansehen' : 'View details'}
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

export default SolutionFeatured;
