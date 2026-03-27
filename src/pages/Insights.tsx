import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InsightsHero from '@/components/insights/InsightsHero';
import InsightsCategoryNav from '@/components/insights/InsightsCategoryNav';
import InsightsFeatured from '@/components/insights/InsightsFeatured';
import InsightsFilterSection from '@/components/insights/InsightsFilterSection';
import InsightsGrid from '@/components/insights/InsightsGrid';
import InsightsCTA from '@/components/insights/InsightsCTA';
import { sampleInsights, InsightArticle } from '@/data/insights';
import { useContentVisibilityContext } from '@/contexts/ContentVisibilityContext';

const Insights: React.FC = () => {
  const { isHidden } = useContentVisibilityContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  // Sync URL state
  useEffect(() => {
    if (activeCategory === 'all') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ category: activeCategory }, { replace: true });
    }
  }, [activeCategory, setSearchParams]);

  // Read URL on mount
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, []);

  // Only articles, exclude hidden
  const allArticles = useMemo(
    () => sampleInsights.filter(
      i => i.type === 'article' && !isHidden('insight', i.slug, i.hidden)
    ) as InsightArticle[],
    [isHidden]
  );

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return allArticles;
    return allArticles.filter(a => a.category === activeCategory);
  }, [activeCategory, allArticles]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* S1 — Hero */}
      <InsightsHero />

      {/* S2 — Category Navigation */}
      <InsightsCategoryNav />

      {/* S3 — Featured Article */}
      <InsightsFeatured />

      {/* S4 — All Articles with Filter */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <span className="block text-sm font-semibold uppercase tracking-widest text-accent text-center mb-4">
            Alle Artikel
          </span>
          <h2 className="font-display text-display-md text-foreground text-center mb-12">
            Substanz.{' '}
            <span className="italic text-gradient">Nicht Marketing.</span>
          </h2>

          <InsightsFilterSection
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            filteredCount={filteredArticles.length}
            totalCount={allArticles.length}
          />

          <div className="mt-8">
            <InsightsGrid articles={filteredArticles} />
          </div>
        </div>
      </section>

      {/* S5 — Soft CTA */}
      <InsightsCTA />

      <Footer />
    </div>
  );
};

export default Insights;
