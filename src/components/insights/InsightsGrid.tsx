import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { InsightArticle } from '@/data/insights';
import InsightArticleCard from './InsightArticleCard';

interface InsightsGridProps {
  articles: InsightArticle[];
}

const ITEMS_PER_PAGE = 9;

const InsightsGrid: React.FC<InsightsGridProps> = ({ articles }) => {
  const { language } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visible = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  if (articles.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-muted-foreground">
          {language === 'de' ? 'Keine Artikel gefunden.' : 'No articles found.'}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((article, idx) => (
          <InsightArticleCard key={article.id} article={article} index={idx} />
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
  );
};

export default InsightsGrid;
