import React from 'react';
import { AlertCircle, Target, Gauge, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import type { FilterOption } from '@/data/playbookFilters';

interface PlaybookFilterRowCenteredProps<T extends string> {
  filterId: string;
  label: { en: string; de: string };
  icon: string;
  options: FilterOption<T>[];
  value: T | 'all' | 'none';
  onChange: (value: T | 'all' | 'none') => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertCircle,
  Target,
  Gauge,
  User,
};

function PlaybookFilterRowCentered<T extends string>({
  filterId,
  label,
  icon,
  options,
  value,
  onChange,
}: PlaybookFilterRowCenteredProps<T>) {
  const { language } = useLanguage();
  const IconComponent = iconMap[icon] || AlertCircle;

  return (
    <div className="w-full">
      {/* Centered Label */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <IconComponent className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">
          {label[language]}
        </span>
      </div>

      {/* Centered Pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              onClick={() => onChange(option.value as T | 'all' | 'none')}
              className={cn(
                'px-3 py-1.5 text-sm rounded-full transition-all duration-200 border',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50'
              )}
            >
              {option.label[language]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PlaybookFilterRowCentered;
