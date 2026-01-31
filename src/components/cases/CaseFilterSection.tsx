import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { challengeFilters, industryFilters, stageFilters, CaseFilterOption } from '@/data/cases/caseFilters';

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

const FilterRow: React.FC<{
  label: string;
  options: CaseFilterOption[];
  selected: string;
  onChange: (value: string) => void;
}> = ({ label, options, selected, onChange }) => {
  const { language } = useLanguage();
  
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider min-w-[80px]">
        {label}:
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              selected === option.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            {language === 'de' ? option.label.de : option.label.en}
          </button>
        ))}
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
    <section className="bg-muted/30 border-y border-border py-6">
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

        {/* Filter Rows */}
        <div className="space-y-3">
          <FilterRow
            label={language === 'de' ? 'Challenge' : 'Challenge'}
            options={challengeFilters}
            selected={selectedChallenge}
            onChange={onChallengeChange}
          />
          <FilterRow
            label={language === 'de' ? 'Branche' : 'Industry'}
            options={industryFilters}
            selected={selectedIndustry}
            onChange={onIndustryChange}
          />
          <FilterRow
            label={language === 'de' ? 'Phase' : 'Stage'}
            options={stageFilters}
            selected={selectedStage}
            onChange={onStageChange}
          />
        </div>

        {/* Results count + Clear */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {language === 'de' 
                ? `${filteredCount} von ${totalCount} Cases`
                : `Showing ${filteredCount} of ${totalCount} cases`
              }
            </span>
            {hasActiveFilters && (
              <Badge variant="secondary" className="text-xs">
                {language === 'de' ? 'Gefiltert' : 'Filtered'}
              </Badge>
            )}
          </div>
          
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-foreground"
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
