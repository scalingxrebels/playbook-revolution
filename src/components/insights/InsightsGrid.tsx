import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { InsightItem } from '@/data/insights';
import InsightArticleCard from './InsightArticleCard';
import InsightEventCard from './InsightEventCard';
import InsightCaseStudyCard from './InsightCaseStudyCard';
import InsightNewsletterCTA from './InsightNewsletterCTA';

interface InsightsGridProps {
  items: InsightItem[];
}

const ITEMS_PER_PAGE = 9;
const NEWSLETTER_AFTER = 6;

const InsightsGrid: React.FC<InsightsGridProps> = ({ items }) => {
  const { language } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Separate featured items
  const featured = items.find((i) => 'featured' in i && i.featured);
  const rest = items.filter((i) => i !== featured);
  const visible = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;

  const renderItem = (item: InsightItem, index: number) => {
    switch (item.type) {
      case 'article':
        return <InsightArticleCard key={item.id} article={item} index={index} />;
      case 'event':
        return <InsightEventCard key={item.id} event={item} index={index} />;
      case 'case-study':
        return <InsightCaseStudyCard key={item.id} caseStudy={item} index={index} />;
    }
  };

  if (items.length === 0) {
    return (
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground">
            {language === 'de' ? 'Keine Beiträge gefunden.' : 'No insights found.'}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Featured Slot */}
        {featured && (
          <div className="mb-8">
            {featured.type === 'article' && (
              <InsightArticleCard article={featured} index={0} featured />
            )}
            {featured.type === 'event' && (
              <InsightEventCard event={featured} index={0} featured />
            )}
          </div>
        )}

        {/* Standard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((item, idx) => (
            <React.Fragment key={item.id}>
              {renderItem(item, idx + 1)}
              {/* Insert newsletter CTA after 6 items */}
              {idx === NEWSLETTER_AFTER - 1 && visible.length > NEWSLETTER_AFTER && (
                <InsightNewsletterCTA />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              size="lg"
              className="border-2 shadow-brutal-sm"
              onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
            >
              {language === 'de' ? 'Mehr laden' : 'Load More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightsGrid;
