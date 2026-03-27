import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContentVisibilityContext } from '@/contexts/ContentVisibilityContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { sampleInsights, getCategoryById, getCategoryAccentClass, getCategoryBadgeColor } from '@/data/insights';
import { ArrowRight } from 'lucide-react';

const InsightsFeatured: React.FC = () => {
  const { language } = useLanguage();
  const { isFeatured, isHidden } = useContentVisibilityContext();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const featuredArticle = sampleInsights.find(
    i => i.type === 'article' && 
    isFeatured('insight', i.slug, i.featured) && 
    !isHidden('insight', i.slug, i.hidden)
  );

  if (!featuredArticle || featuredArticle.type !== 'article') return null;

  const category = getCategoryById(featuredArticle.category);
  const accentClass = getCategoryAccentClass(featuredArticle.category);
  const badgeColor = getCategoryBadgeColor(featuredArticle.category);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div ref={sectionRef as React.RefObject<HTMLDivElement>} className="text-center mb-12">
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {language === 'de' ? 'Empfohlen' : 'Featured'}
          </p>
          <h2 className={`font-display text-display-md text-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {language === 'de' ? (
              <>Der relevanteste <span className="italic text-gradient">Artikel.</span></>
            ) : (
              <>The most relevant <span className="italic text-gradient">article.</span></>
            )}
          </h2>
        </div>

        {/* Featured Card with border-left accent */}
        <div className={`max-w-3xl mx-auto bg-card border-2 border-border border-l-4 ${featuredArticle.category === 'ai-orchestration' ? 'border-l-amber-500' : 'border-l-primary'} p-8 md:p-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          {/* Category Badge */}
          <span className={`inline-block text-[10px] font-semibold uppercase tracking-[0.15em] px-2 py-1 mb-4 ${badgeColor}`}>
            {category ? (language === 'de' ? category.label.de : category.label.en) : featuredArticle.category}
          </span>

          {/* Headline */}
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
            {language === 'de' ? featuredArticle.title.de : featuredArticle.title.en}
          </h3>

          {/* Teaser */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {language === 'de' ? featuredArticle.teaser.de : featuredArticle.teaser.en}
          </p>

          {/* Reading time */}
          <p className="text-xs text-muted-foreground/70 mb-5">
            {featuredArticle.readingTime} min {language === 'de' ? 'Lesezeit' : 'read'}
          </p>

          {/* Ghost CTA */}
          <button className={`inline-flex items-center gap-2 text-sm font-medium ${accentClass} border border-current px-5 py-2.5 hover:bg-primary/10 transition-colors`}>
            {language === 'de' ? 'Artikel lesen' : 'Read article'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsFeatured;
