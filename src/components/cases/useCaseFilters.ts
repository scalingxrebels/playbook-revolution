import { useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { caseStudies, ClientCaseStudy } from '@/data/cases';

interface UseCaseFiltersReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedChallenge: string;
  setSelectedChallenge: (challenge: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
  selectedStage: string;
  setSelectedStage: (stage: string) => void;
  filteredCases: ClientCaseStudy[];
  totalCount: number;
  filteredCount: number;
  clearFilters: () => void;
  hasActiveFilters: boolean;
}

export const useCaseFilters = (): UseCaseFiltersReturn => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get initial values from URL params
  const [searchQuery, setSearchQueryState] = useState(searchParams.get('q') || '');
  const [selectedChallenge, setSelectedChallengeState] = useState(searchParams.get('challenge') || 'all');
  const [selectedIndustry, setSelectedIndustryState] = useState(searchParams.get('industry') || 'all');
  const [selectedStage, setSelectedStageState] = useState(searchParams.get('stage') || 'all');

  // Update URL params when filters change
  const updateUrlParams = useCallback((key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'all' && value !== '') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams, { replace: true });
  }, [searchParams, setSearchParams]);

  const setSearchQuery = useCallback((query: string) => {
    setSearchQueryState(query);
    updateUrlParams('q', query);
  }, [updateUrlParams]);

  const setSelectedChallenge = useCallback((challenge: string) => {
    setSelectedChallengeState(challenge);
    updateUrlParams('challenge', challenge);
  }, [updateUrlParams]);

  const setSelectedIndustry = useCallback((industry: string) => {
    setSelectedIndustryState(industry);
    updateUrlParams('industry', industry);
  }, [updateUrlParams]);

  const setSelectedStage = useCallback((stage: string) => {
    setSelectedStageState(stage);
    updateUrlParams('stage', stage);
  }, [updateUrlParams]);

  const clearFilters = useCallback(() => {
    setSearchQueryState('');
    setSelectedChallengeState('all');
    setSelectedIndustryState('all');
    setSelectedStageState('all');
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  const hasActiveFilters = useMemo(() => {
    return searchQuery !== '' || 
           selectedChallenge !== 'all' || 
           selectedIndustry !== 'all' || 
           selectedStage !== 'all';
  }, [searchQuery, selectedChallenge, selectedIndustry, selectedStage]);

  // Filter cases
  const filteredCases = useMemo(() => {
    return caseStudies.filter((caseStudy) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          caseStudy.headline.en.toLowerCase().includes(query) ||
          caseStudy.headline.de.toLowerCase().includes(query) ||
          caseStudy.challenge.en.toLowerCase().includes(query) ||
          caseStudy.challenge.de.toLowerCase().includes(query) ||
          caseStudy.company.toLowerCase().includes(query) ||
          caseStudy.industry.toLowerCase().includes(query) ||
          caseStudy.tags.some(tag => tag.toLowerCase().includes(query));
        
        if (!matchesSearch) return false;
      }

      // Challenge filter
      if (selectedChallenge !== 'all' && caseStudy.challengeType !== selectedChallenge) {
        return false;
      }

      // Industry filter - exact match on normalized stageId
      if (selectedIndustry !== 'all') {
        const industryNormalized = caseStudy.industry.toLowerCase().replace(/[\s&]+/g, '-');
        const industryMatch = industryNormalized.includes(selectedIndustry) ||
                              caseStudy.tags.some(tag => tag.toLowerCase().includes(selectedIndustry));
        if (!industryMatch) return false;
      }

      // Stage filter - exact match on normalized stageId
      if (selectedStage !== 'all') {
        if (caseStudy.stageId !== selectedStage) return false;
      }

      return true;
    });
  }, [searchQuery, selectedChallenge, selectedIndustry, selectedStage]);

  return {
    searchQuery,
    setSearchQuery,
    selectedChallenge,
    setSelectedChallenge,
    selectedIndustry,
    setSelectedIndustry,
    selectedStage,
    setSelectedStage,
    filteredCases,
    totalCount: caseStudies.length,
    filteredCount: filteredCases.length,
    clearFilters,
    hasActiveFilters,
  };
};
