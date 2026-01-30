import React from 'react';
import { AlertCircle, Target, Gauge, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import type { FilterOption } from '@/data/playbookFilters';

interface PlaybookFilterRowCompactProps<T extends string> {
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

function PlaybookFilterRowCompact<T extends string>({
  filterId,
  label,
  icon,
  options,
  value,
  onChange,
}: PlaybookFilterRowCompactProps<T>) {
  const { language } = useLanguage();
  const IconComponent = iconMap[icon] || AlertCircle;

  return (
    <div className="space-y-2">
      {/* Compact Centered Label */}
      <div className="flex items-center justify-center gap-1.5">
        <IconComponent className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs font-medium text-muted-foreground">
          {label[language]}
        </span>
      </div>

      {/* Compact Centered Pills */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              onClick={() => onChange(option.value as T | 'all' | 'none')}
              className={cn(
                'px-2 py-1 text-xs rounded-full transition-all duration-200 border',
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

export default PlaybookFilterRowCompact;
