import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { solutionCategories, CategoryId } from '@/data/solutionCategoryData';
import { cn } from '@/lib/utils';
import { FolderOpen } from 'lucide-react';

interface SolutionCategoryChipsProps {
  activeCategoryId: CategoryId | 'all';
  onCategoryChange: (id: CategoryId | 'all') => void;
}

const SolutionCategoryChips: React.FC<SolutionCategoryChipsProps> = ({
  activeCategoryId,
  onCategoryChange,
}) => {
  const { language } = useLanguage();

  const allOptions: { id: CategoryId | 'all'; label: string }[] = [
    { id: 'all', label: language === 'de' ? 'Alle Kategorien' : 'All Categories' },
    ...solutionCategories.map(c => ({
      id: c.id as CategoryId | 'all',
      label: language === 'de' ? c.labelDe : c.labelEn,
    })),
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2 mb-3">
        <FolderOpen className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">
          {language === 'de' ? 'Kategorie:' : 'Category:'}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {allOptions.map((opt) => {
          const isActive = activeCategoryId === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onCategoryChange(opt.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap",
                "focus:outline-none focus:ring-2 focus:ring-accent/50",
                isActive
                  ? "bg-accent/20 text-accent border border-accent/30"
                  : "bg-card text-muted-foreground border border-border hover:border-accent/50 hover:text-foreground"
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SolutionCategoryChips;
