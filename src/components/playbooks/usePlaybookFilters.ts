import { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { playbooks, type Playbook } from '@/data/playbooks';
import { 
  type ActiveFilters, 
  defaultFilters,
  FILTER_WEIGHTS,
  type NeedForActionTag,
  type ImpactTag,
  type TimeframeTag,
  type CapabilityTag,
  type CapacityTag,
} from '@/data/playbookFilters';

interface PlaybookWithScore extends Playbook {
  matchScore: number;
}

function calculateMatchScore(playbook: Playbook, filters: ActiveFilters): number {
  let score = 0;
  
  // Need-for-Action: +30 points if match
  if (filters.needForAction === 'all' || playbook.needForAction.includes(filters.needForAction)) {
    score += FILTER_WEIGHTS.needForAction;
  }
  
  // Impact: +25 points if match
  if (filters.impact === 'all' || playbook.impact.includes(filters.impact)) {
    score += FILTER_WEIGHTS.impact;
  }
  
  // Timeframe: +20 points if match
  if (filters.timeframe === 'all' || playbook.timeframe === filters.timeframe) {
    score += FILTER_WEIGHTS.timeframe;
  }
  
  // Capability: +15 points if match
  if (filters.capability === 'all' || playbook.capability === filters.capability) {
    score += FILTER_WEIGHTS.capability;
  }
  
  // Capacity: +10 points if match
  if (filters.capacity === 'all' || playbook.capacity === filters.capacity) {
    score += FILTER_WEIGHTS.capacity;
  }
  
  return score;
}

export function usePlaybookFilters(searchQuery: string, language: 'en' | 'de') {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize filters from URL params
  const [filters, setFilters] = useState<ActiveFilters>(() => {
    return {
      needForAction: (searchParams.get('need') as NeedForActionTag) || 'all',
      impact: (searchParams.get('impact') as ImpactTag) || 'all',
      timeframe: (searchParams.get('timeframe') as TimeframeTag) || 'all',
      capability: (searchParams.get('capability') as CapabilityTag) || 'all',
      capacity: (searchParams.get('capacity') as CapacityTag) || 'all',
    };
  });

  // Sync filters to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.needForAction !== 'all') params.set('need', filters.needForAction);
    if (filters.impact !== 'all') params.set('impact', filters.impact);
    if (filters.timeframe !== 'all') params.set('timeframe', filters.timeframe);
    if (filters.capability !== 'all') params.set('capability', filters.capability);
    if (filters.capacity !== 'all') params.set('capacity', filters.capacity);
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  const updateFilter = useCallback(<K extends keyof ActiveFilters>(
    key: K, 
    value: ActiveFilters[K]
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  // Check if any filter is active (not 'all')
  const hasActiveFilters = useMemo(() => {
    return Object.values(filters).some(v => v !== 'all');
  }, [filters]);

  // Filter and score playbooks
  const filteredPlaybooks = useMemo(() => {
    // First, apply text search
    let results = playbooks.filter(playbook => {
      if (searchQuery === '') return true;
      const searchLower = searchQuery.toLowerCase();
      return (
        playbook.title[language].toLowerCase().includes(searchLower) ||
        playbook.description[language].toLowerCase().includes(searchLower)
      );
    });

    // If any filter is active (not all 'all'), filter by match score > 0
    // But actually, we want to show all if 'all' is selected, and filter if specific values
    if (hasActiveFilters) {
      results = results.filter(playbook => {
        // Check each non-'all' filter
        if (filters.needForAction !== 'all' && !playbook.needForAction.includes(filters.needForAction)) {
          return false;
        }
        if (filters.impact !== 'all' && !playbook.impact.includes(filters.impact)) {
          return false;
        }
        if (filters.timeframe !== 'all' && playbook.timeframe !== filters.timeframe) {
          return false;
        }
        if (filters.capability !== 'all' && playbook.capability !== filters.capability) {
          return false;
        }
        if (filters.capacity !== 'all' && playbook.capacity !== filters.capacity) {
          return false;
        }
        return true;
      });
    }

    // Calculate match scores and sort by score descending
    const withScores: PlaybookWithScore[] = results.map(playbook => ({
      ...playbook,
      matchScore: calculateMatchScore(playbook, filters),
    }));

    // Sort by match score (descending), then by title alphabetically
    withScores.sort((a, b) => {
      if (b.matchScore !== a.matchScore) {
        return b.matchScore - a.matchScore;
      }
      return a.title[language].localeCompare(b.title[language]);
    });

    return withScores;
  }, [searchQuery, language, filters, hasActiveFilters]);

  return {
    filters,
    updateFilter,
    resetFilters,
    hasActiveFilters,
    filteredPlaybooks,
    totalPlaybooks: playbooks.length,
  };
}
