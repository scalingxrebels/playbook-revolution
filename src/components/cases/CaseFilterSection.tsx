import React from 'react';
import { Search, X, AlertCircle, Briefcase, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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

        {/* Results count + Clear (centered) */}
        <div className="text-center mt-6 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            {language === 'de' 
              ? `${filteredCount} von ${totalCount} Cases`
              : `Showing ${filteredCount} of ${totalCount} cases`
            }
          </p>
          
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="mt-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-1" />
              {language === 'de' ? 'Filter zurücksetzen' : 'Clear filters'}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseFilterSection;
