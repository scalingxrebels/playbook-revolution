import React, { useState, useMemo, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InsightsHero from '@/components/insights/InsightsHero';
import InsightsFilterSection, { type InsightTab } from '@/components/insights/InsightsFilterSection';
import InsightsGrid from '@/components/insights/InsightsGrid';
import InsightsCTA from '@/components/insights/InsightsCTA';
import { sampleInsights } from '@/data/insights';
import { useContentVisibilityContext } from '@/contexts/ContentVisibilityContext';

const Insights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<InsightTab>('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const { isHidden } = useContentVisibilityContext();
  
  const visibleInsights = useMemo(
    () => sampleInsights.filter(i => !isHidden('insight', i.slug, i.hidden)),
    [isHidden]
  );

  // Listen for hero CTA events
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.tab) setActiveTab(detail.tab);
    };
    window.addEventListener('insights-filter', handler);
    return () => window.removeEventListener('insights-filter', handler);
  }, []);

  const filteredItems = useMemo(() => {
    let items = [...visibleInsights];

    // Tab filter
    if (activeTab === 'articles') {
      items = items.filter((i) => i.type === 'article' || i.type === 'case-study');
    } else if (activeTab === 'events') {
      items = items.filter((i) => i.type === 'event');
      // Upcoming first
      items.sort((a, b) => {
        if (a.type === 'event' && b.type === 'event') {
          if (a.isUpcoming && !b.isUpcoming) return -1;
          if (!a.isUpcoming && b.isUpcoming) return 1;
        }
        return 0;
      });
    }

    // Category filter
    if (activeCategory !== 'all') {
      items = items.filter((i) => i.category === activeCategory);
    }

    return items;
  }, [activeTab, activeCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <InsightsHero />
        <InsightsFilterSection
          activeTab={activeTab}
          onTabChange={setActiveTab}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          filteredCount={filteredItems.length}
          totalCount={visibleInsights.length}
        />
        <InsightsGrid items={filteredItems} />
        <InsightsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
