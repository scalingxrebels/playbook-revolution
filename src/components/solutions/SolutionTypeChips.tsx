import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { solutionTypes, SolutionTypeId } from '@/data/solutionTiles';
import { cn } from '@/lib/utils';
import { Layers } from 'lucide-react';

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
    <div className="w-full">
      {/* Label */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <Layers className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">
          {language === 'de' ? 'Typ:' : 'Type:'}
        </span>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {solutionTypes.map((type) => {
          const isActive = activeSolutionType === type.id;
          const label = language === 'de' ? type.labelDe : type.labelEn;
          
          return (
            <button
              key={type.id}
              onClick={() => onSolutionTypeChange(type.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap",
                "focus:outline-none focus:ring-2 focus:ring-accent/50",
                isActive
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground"
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
