import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { insightCategories } from '@/data/insights';

interface InsightsFilterSectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  filteredCount: number;
  totalCount: number;
}

const InsightsFilterSection: React.FC<InsightsFilterSectionProps> = ({
  activeCategory,
  onCategoryChange,
  filteredCount,
  totalCount,
}) => {
  const { language } = useLanguage();

  return (
    <div id="insights-content" className="sticky top-16 z-30 bg-background/80 backdrop-blur-sm border-b border-border py-4">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Category Chips */}
        <div className="flex gap-2 justify-center flex-wrap md:flex-nowrap overflow-x-auto pb-2 scrollbar-hide">
          {insightCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={cn(
                  'flex-shrink-0 px-4 py-1.5 text-sm rounded-full transition-all duration-200 border whitespace-nowrap',
                  isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50'
                )}
              >
                {language === 'de' ? cat.label.de : cat.label.en}
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground text-center mt-3">
          {language === 'de'
            ? `${filteredCount} von ${totalCount} Artikeln`
            : `Showing ${filteredCount} of ${totalCount} articles`}
        </p>
      </div>
    </div>
  );
};

export default InsightsFilterSection;
