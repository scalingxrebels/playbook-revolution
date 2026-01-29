import React from 'react';
import { AlertCircle, Target, Clock, Gauge, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import type { FilterOption } from '@/data/playbookFilters';

interface PlaybookFilterRowProps<T extends string> {
  filterId: string;
  label: { en: string; de: string };
  icon: string;
  options: FilterOption<T>[];
  value: T | 'all';
  onChange: (value: T | 'all') => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertCircle,
  Target,
  Clock,
  Gauge,
  Users,
};

function PlaybookFilterRow<T extends string>({
  filterId,
  label,
  icon,
  options,
  value,
  onChange,
}: PlaybookFilterRowProps<T>) {
  const { language } = useLanguage();
  const IconComponent = iconMap[icon] || AlertCircle;

  return (
    <div className="space-y-2">
      {/* Filter Label */}
      <div className="flex items-center gap-2">
        <IconComponent className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">
          {label[language]}
        </span>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              onClick={() => onChange(option.value as T | 'all')}
              className={cn(
                'px-3 py-1.5 text-sm rounded-full transition-all duration-200 border',
                isActive
                  ? 'bg-primary/20 text-primary border-primary/30'
                  : 'bg-card border-border hover:border-primary/50'
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

export default PlaybookFilterRow;
