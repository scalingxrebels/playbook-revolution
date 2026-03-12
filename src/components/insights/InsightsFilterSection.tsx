import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { insightCategories } from '@/data/insights';

export type InsightTab = 'all' | 'articles' | 'events';

interface InsightsFilterSectionProps {
  activeTab: InsightTab;
  onTabChange: (tab: InsightTab) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  filteredCount: number;
  totalCount: number;
}

const tabs: { id: InsightTab; label: { en: string; de: string } }[] = [
  { id: 'all', label: { en: 'All', de: 'Alle' } },
  { id: 'articles', label: { en: 'Articles', de: 'Artikel' } },
  { id: 'events', label: { en: 'Events', de: 'Events' } },
];

const InsightsFilterSection: React.FC<InsightsFilterSectionProps> = ({
  activeTab,
  onTabChange,
  activeCategory,
  onCategoryChange,
  filteredCount,
  totalCount,
}) => {
  const { language } = useLanguage();

  return (
    <section id="insights-content" className="bg-muted/30 border-y border-border py-6 md:py-8 sticky top-16 z-30 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-card border-2 border-border rounded-lg p-1 shadow-brutal-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'px-5 py-2 text-sm font-medium rounded-md transition-all duration-200',
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                )}
              >
                {language === 'de' ? tab.label.de : tab.label.en}
              </button>
            ))}
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex gap-2 justify-center flex-wrap md:flex-nowrap overflow-x-auto pb-2 scrollbar-hide">
          {insightCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={cn(
                  'flex-shrink-0 px-3 py-1.5 text-sm rounded-full transition-all duration-200 border whitespace-nowrap',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50'
                )}
              >
                {language === 'de' ? cat.label.de : cat.label.en}
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground text-center mt-4">
          {language === 'de'
            ? `${filteredCount} von ${totalCount} Beiträgen`
            : `Showing ${filteredCount} of ${totalCount} insights`}
        </p>
      </div>
    </section>
  );
};

export default InsightsFilterSection;
