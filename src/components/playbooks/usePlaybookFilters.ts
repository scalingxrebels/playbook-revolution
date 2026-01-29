import { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { playbooks, type Playbook } from '@/data/playbooks';
import { 
  type ActiveFilters, 
  defaultFilters,
  FILTER_WEIGHTS,
  type NeedForActionTag,
  type ImpactTag,
  type BottleneckTag,
  type RoleTag,
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
  
  // Impact: +30 points if match
  if (filters.impact === 'all' || playbook.impact.includes(filters.impact)) {
    score += FILTER_WEIGHTS.impact;
  }
  
  // Bottleneck: +25 points if match (note: 'none' means no filter = show all)
  if (filters.bottleneck === 'none' || playbook.bottleneck.includes(filters.bottleneck)) {
    score += FILTER_WEIGHTS.bottleneck;
  }
  
  // Role: +15 points if match
  if (filters.role === 'all' || playbook.role.includes(filters.role)) {
    score += FILTER_WEIGHTS.role;
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
      bottleneck: (searchParams.get('bottleneck') as BottleneckTag) || 'none',
      role: (searchParams.get('role') as RoleTag) || 'all',
    };
  });

  // Sync filters to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.needForAction !== 'all') params.set('need', filters.needForAction);
    if (filters.impact !== 'all') params.set('impact', filters.impact);
    if (filters.bottleneck !== 'none') params.set('bottleneck', filters.bottleneck);
    if (filters.role !== 'all') params.set('role', filters.role);
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

  // Check if any filter is active (not default)
  const hasActiveFilters = useMemo(() => {
    return filters.needForAction !== 'all' || 
           filters.impact !== 'all' || 
           filters.bottleneck !== 'none' || 
           filters.role !== 'all';
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

    // If any filter is active, filter by match
    if (hasActiveFilters) {
      results = results.filter(playbook => {
        // Check each non-default filter
        if (filters.needForAction !== 'all' && !playbook.needForAction.includes(filters.needForAction)) {
          return false;
        }
        if (filters.impact !== 'all' && !playbook.impact.includes(filters.impact)) {
          return false;
        }
        if (filters.bottleneck !== 'none' && !playbook.bottleneck.includes(filters.bottleneck)) {
          return false;
        }
        if (filters.role !== 'all' && !playbook.role.includes(filters.role)) {
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
