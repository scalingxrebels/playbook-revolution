import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { problemTags, ProblemTag } from '@/data/solutions';
import { cn } from '@/lib/utils';

interface ProblemTagNavigationProps {
  context: 'solutions' | 'playbooks';
  activeTag?: string | null;
  onTagClick: (tag: ProblemTag) => void;
  className?: string;
}

const ProblemTagNavigation: React.FC<ProblemTagNavigationProps> = ({
  context,
  activeTag,
  onTagClick,
  className
}) => {
  const { language } = useLanguage();

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-wrap gap-3 justify-center">
        {problemTags.map((tag) => {
          const isActive = activeTag === tag.id;
          const label = language === 'de' ? tag.labelDe : tag.labelEn;
          
          return (
            <button
              key={tag.id}
              onClick={() => onTagClick(tag)}
              className={cn(
                "group flex items-center gap-2 px-4 py-2 border transition-all duration-300",
                "text-sm font-medium rounded-sm",
                isActive 
                  ? "bg-accent/20 border-accent text-accent-foreground shadow-brutal-sm" 
                  : "bg-accent/5 border-accent/20 text-muted-foreground hover:border-accent hover:bg-accent/10 hover:text-foreground"
              )}
            >
              <span className="text-lg">{tag.emoji}</span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>
      
      {/* Mobile: Horizontal scroll hint */}
      <div className="md:hidden mt-2 text-center text-xs text-muted-foreground">
        {language === 'de' ? '← Scrollen für mehr →' : '← Scroll for more →'}
      </div>
    </div>
  );
};

export default ProblemTagNavigation;
