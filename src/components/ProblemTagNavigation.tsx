import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { problemTags, ProblemTag } from '@/data/solutions';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
          const Icon = tag.icon;
          
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
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
      
      {/* Mobile: Horizontal scroll hint */}
      <div className="md:hidden mt-2 text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
        <ChevronLeft className="w-3 h-3" />
        {language === 'de' ? 'Scrollen für mehr' : 'Scroll for more'}
        <ChevronRight className="w-3 h-3" />
      </div>
    </div>
  );
};

export default ProblemTagNavigation;
