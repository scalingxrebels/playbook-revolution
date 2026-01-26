import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { solutionTypes, SolutionTypeId } from '@/data/solutionTiles';
import { cn } from '@/lib/utils';

interface SolutionTypeChipsProps {
  activeSolutionType: SolutionTypeId;
  onSolutionTypeChange: (typeId: SolutionTypeId) => void;
}

const SolutionTypeChips: React.FC<SolutionTypeChipsProps> = ({
  activeSolutionType,
  onSolutionTypeChange
}) => {
  const { language } = useLanguage();

  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-2">
      <div className="flex gap-2 min-w-max px-1">
        {solutionTypes.map((type) => {
          const isActive = activeSolutionType === type.id;
          const label = language === 'de' ? type.labelDe : type.labelEn;
          
          return (
            <button
              key={type.id}
              onClick={() => onSolutionTypeChange(type.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                "border focus:outline-none focus:ring-2 focus:ring-accent/50",
                isActive
                  ? "bg-accent text-accent-foreground border-accent shadow-md"
                  : "bg-background text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SolutionTypeChips;
