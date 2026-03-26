import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { solutionTiles } from '@/data/solutionTiles';
import { featuredSolutionCopy } from '@/data/solutionCategoryData';
import { useContentVisibilityContext } from '@/contexts/ContentVisibilityContext';
import { ArrowRight } from 'lucide-react';

const SolutionFeatured: React.FC = () => {
  const { language } = useLanguage();
  const { isHidden } = useContentVisibilityContext();
  const navigate = useNavigate();

  const featuredTiles = solutionTiles
    .filter(t => t.featured && !isHidden('solution', t.slug, t.hidden))
    .slice(0, 7);

  if (featuredTiles.length === 0) return null;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <span className="block text-sm font-semibold uppercase tracking-widest text-accent text-center mb-4">
          {language === 'de' ? 'Empfohlen' : 'Recommended'}
        </span>
        <h2 className="font-display text-display-md text-foreground text-center mb-4">
          {language === 'de' ? (
            <>Die häufigsten <span className="italic text-gradient">ersten Schritte.</span></>
          ) : (
            <>The most common <span className="italic text-gradient">first steps.</span></>
          )}
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">
          {language === 'de'
            ? 'Händisch kuratiert. Aktuell: 7 Solutions.'
            : 'Hand-curated. Currently: 7 solutions.'}
        </p>

        {/* Grid: 3+2+2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTiles.map((tile) => {
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
                className="group text-left bg-card border-2 border-border hover:border-primary/50 p-6 transition-all duration-200 hover:-translate-y-0.5"
              >
                {/* Badge */}
                {badge && (
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 mb-3">
                    {badge}
                  </span>
                )}
                
                {/* Title */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {headline}
                </h3>
                
                {/* Copy */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {description}
                </p>

                {/* Link */}
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
