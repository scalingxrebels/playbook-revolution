import React from 'react';
import { Search, X, AlertCircle, Briefcase, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { challengeFilters, industryFilters, stageFilters, CaseFilterOption } from '@/data/cases/caseFilters';
import CaseOnboardingHint from './CaseOnboardingHint';

interface CaseFilterSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedChallenge: string;
  onChallengeChange: (challenge: string) => void;
  selectedIndustry: string;
  onIndustryChange: (industry: string) => void;
  selectedStage: string;
  onStageChange: (stage: string) => void;
  filteredCount: number;
  totalCount: number;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  challenge: AlertCircle,
  industry: Briefcase,
  stage: TrendingUp,
};

// Helper to get filter label
const getFilterLabel = (
  filters: CaseFilterOption[], 
  id: string, 
  language: 'en' | 'de'
): string => {
  const filter = filters.find(f => f.id === id);
  return filter ? (language === 'de' ? filter.label.de : filter.label.en) : id;
};

// Full-width centered filter row (for Challenge)
const FilterRowCentered: React.FC<{
  filterId: string;
  label: string;
  options: CaseFilterOption[];
  selected: string;
  onChange: (value: string) => void;
}> = ({ filterId, label, options, selected, onChange }) => {
  const { language } = useLanguage();
  const IconComponent = iconMap[filterId] || AlertCircle;
  
  return (
    <div className="w-full">
      {/* Centered Label with Icon */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <IconComponent className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
      </div>

      {/* Centered Pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {options.map((option) => {
          const isActive = selected === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onChange(option.id)}
              className={cn(
                'px-3 py-1.5 text-sm rounded-full transition-all duration-200 border',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50'
              )}
            >
              {language === 'de' ? option.label.de : option.label.en}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Compact centered filter row (for Industry/Stage in 2-column grid)
const FilterRowCompact: React.FC<{
  filterId: string;
  label: string;
  options: CaseFilterOption[];
  selected: string;
  onChange: (value: string) => void;
}> = ({ filterId, label, options, selected, onChange }) => {
  const { language } = useLanguage();
  const IconComponent = iconMap[filterId] || AlertCircle;
  
  return (
    <div className="space-y-2">
      {/* Compact Centered Label */}
      <div className="flex items-center justify-center gap-1.5">
        <IconComponent className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs font-medium text-muted-foreground">
          {label}
        </span>
      </div>

      {/* Compact Centered Pills */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {options.map((option) => {
          const isActive = selected === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onChange(option.id)}
              className={cn(
                'px-2 py-1 text-xs rounded-full transition-all duration-200 border',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50'
              )}
            >
              {language === 'de' ? option.label.de : option.label.en}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Active Filter Badge Component
const ActiveFilterBadge: React.FC<{
  label: string;
  onRemove: () => void;
}> = ({ label, onRemove }) => (
  <Badge 
    variant="secondary" 
    className="flex items-center gap-1.5 px-3 py-1 cursor-pointer hover:bg-destructive/10 transition-colors"
    onClick={onRemove}
  >
    {label}
    <X className="w-3 h-3" />
  </Badge>
);

const CaseFilterSection: React.FC<CaseFilterSectionProps> = ({
  searchQuery,
  onSearchChange,
  selectedChallenge,
  onChallengeChange,
  selectedIndustry,
  onIndustryChange,
  selectedStage,
  onStageChange,
  filteredCount,
  totalCount,
  onClearFilters,
  hasActiveFilters,
}) => {
  const { language } = useLanguage();

  // Collect active filters for display
  const activeFilters: { type: string; label: string; onRemove: () => void }[] = [];
  
  if (searchQuery) {
    activeFilters.push({
      type: 'search',
      label: `"${searchQuery}"`,
      onRemove: () => onSearchChange('')
    });
  }
  if (selectedChallenge !== 'all') {
    activeFilters.push({
      type: 'challenge',
      label: getFilterLabel(challengeFilters, selectedChallenge, language),
      onRemove: () => onChallengeChange('all')
    });
  }
  if (selectedIndustry !== 'all') {
    activeFilters.push({
      type: 'industry',
      label: getFilterLabel(industryFilters, selectedIndustry, language),
      onRemove: () => onIndustryChange('all')
    });
  }
  if (selectedStage !== 'all') {
    activeFilters.push({
      type: 'stage',
      label: getFilterLabel(stageFilters, selectedStage, language),
      onRemove: () => onStageChange('all')
    });
  }

  return (
    <section className="bg-muted/30 border-y border-border py-6 md:py-8">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Search */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === 'de' ? 'Cases durchsuchen...' : 'Search cases...'}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 pr-4 py-3 text-base bg-background border-border/50 rounded-xl"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Onboarding Hint */}
        <div className="mb-6">
          <CaseOnboardingHint />
        </div>

        {/* Filter Rows */}
        <div className="space-y-6">
          {/* Full Width: Challenge */}
          <FilterRowCentered
            filterId="challenge"
            label={language === 'de' ? 'Challenge' : 'Challenge'}
            options={challengeFilters}
            selected={selectedChallenge}
            onChange={onChallengeChange}
          />

          {/* 2-Column Grid: Industry + Stage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border/50">
            <FilterRowCompact
              filterId="industry"
              label={language === 'de' ? 'Branche' : 'Industry'}
              options={industryFilters}
              selected={selectedIndustry}
              onChange={onIndustryChange}
            />
            <FilterRowCompact
              filterId="stage"
              label={language === 'de' ? 'Phase' : 'Stage'}
              options={stageFilters}
              selected={selectedStage}
              onChange={onStageChange}
            />
          </div>
        </div>

        {/* Active Filters Display + Results Count */}
        <div className="mt-6 pt-4 border-t border-border/50">
          {/* Active Filters with Remove Buttons */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="text-xs text-muted-foreground mr-2">
                {language === 'de' ? 'Aktive Filter:' : 'Active filters:'}
              </span>
              {activeFilters.map((filter, idx) => (
                <ActiveFilterBadge 
                  key={`${filter.type}-${idx}`}
                  label={filter.label}
                  onRemove={filter.onRemove}
                />
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="text-xs text-muted-foreground hover:text-destructive ml-2"
              >
                {language === 'de' ? 'Alle löschen' : 'Clear all'}
              </Button>
            </div>
          )}

          {/* Results count (centered) */}
          <p className="text-sm text-muted-foreground text-center">
            {language === 'de' 
              ? `${filteredCount} von ${totalCount} Cases`
              : `Showing ${filteredCount} of ${totalCount} cases`
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseFilterSection;
