import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SolutionHero from '@/components/solutions/SolutionHero';
import FilterOnboardingHint from '@/components/solutions/FilterOnboardingHint';
import ChallengeTabNavigation from '@/components/solutions/ChallengeTabNavigation';
import SolutionTypeChips from '@/components/solutions/SolutionTypeChips';
import SolutionTileGrid from '@/components/solutions/SolutionTileGrid';
import SolutionCTA from '@/components/solutions/SolutionCTA';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, X } from 'lucide-react';
import { 
  ChallengeId, 
  SolutionTypeId, 
  getFilteredTiles,
  solutionTiles,
  challenges,
  solutionTypes
} from '@/data/solutionTiles';

const Solutions: React.FC = () => {
  const { language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get filters from URL or use defaults
  const challengeParam = searchParams.get('challenge') as ChallengeId | null;
  const typeParam = searchParams.get('type') as SolutionTypeId | null;
  const searchParam = searchParams.get('q') || '';
  
  const [challengeFilter, setChallengeFilter] = useState<ChallengeId>(
    challengeParam || 'all'
  );
  const [solutionTypeFilter, setSolutionTypeFilter] = useState<SolutionTypeId>(
    typeParam || 'all'
  );
  const [searchQuery, setSearchQuery] = useState(searchParam);

  // Get filtered tiles with search
  const filteredTiles = useMemo(() => {
    const challenge = challengeFilter === 'all' ? null : challengeFilter;
    const type = solutionTypeFilter === 'all' ? null : solutionTypeFilter;
    let tiles = getFilteredTiles(challenge, type);
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      tiles = tiles.filter(tile => {
        const headline = language === 'de' ? tile.headlineDe : tile.headlineEn;
        const problem = language === 'de' ? tile.problemDe : tile.problemEn;
        const solution = language === 'de' ? tile.solutionDe : tile.solutionEn;
        return (
          headline.toLowerCase().includes(query) ||
          problem.toLowerCase().includes(query) ||
          solution.toLowerCase().includes(query)
        );
      });
    }
    
    return tiles;
  }, [challengeFilter, solutionTypeFilter, searchQuery, language]);

  // Sync URL with state
  useEffect(() => {
    const newParams = new URLSearchParams();
    if (challengeFilter !== 'all') {
      newParams.set('challenge', challengeFilter);
    }
    if (solutionTypeFilter !== 'all') {
      newParams.set('type', solutionTypeFilter);
    }
    if (searchQuery.trim()) {
      newParams.set('q', searchQuery);
    }
    setSearchParams(newParams, { replace: true });
  }, [challengeFilter, solutionTypeFilter, searchQuery, setSearchParams]);

  // Handle challenge filter change
  const handleChallengeChange = (challengeId: ChallengeId) => {
    setChallengeFilter(challengeId);
  };

  // Handle solution type filter change
  const handleSolutionTypeChange = (typeId: SolutionTypeId) => {
    setSolutionTypeFilter(typeId);
  };

  // Get label for active challenge
  const getActiveFilterLabel = (id: ChallengeId | SolutionTypeId, type: 'challenge' | 'type') => {
    if (type === 'challenge') {
      const challenge = challenges.find(c => c.id === id);
      return language === 'de' ? challenge?.labelDe : challenge?.labelEn;
    }
    const solutionType = solutionTypes.find(t => t.id === id);
    return language === 'de' ? solutionType?.labelDe : solutionType?.labelEn;
  };

  const hasActiveFilters = challengeFilter !== 'all' || solutionTypeFilter !== 'all' || searchQuery.trim();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <SolutionHero />
      
      {/* Dual-Logic Navigation Section */}
      <section id="challenges" className="py-6 md:py-8 bg-muted/30 border-y border-border">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 space-y-6">
          
          {/* Search Bar - Prominent, centered */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={language === 'de' ? 'Solutions durchsuchen...' : 'Search solutions...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder:text-muted-foreground transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {/* Onboarding Hint */}
          <FilterOnboardingHint />
          
          {/* Level 1: Challenge Tabs */}
          <div>
            <ChallengeTabNavigation
              activeChallenge={challengeFilter}
              onChallengeChange={handleChallengeChange}
            />
          </div>
          
          {/* Level 2: Solution Type Chips */}
          <div className="flex justify-center">
            <SolutionTypeChips
              activeSolutionType={solutionTypeFilter}
              onSolutionTypeChange={handleSolutionTypeChange}
            />
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {language === 'de' 
                ? `Zeige ${filteredTiles.length} von ${solutionTiles.length} Solutions`
                : `Showing ${filteredTiles.length} of ${solutionTiles.length} solutions`}
            </p>
          </div>
        </div>
      </section>
      
      {/* Solution Tile Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          {/* Active Filter Display */}
          {hasActiveFilters && (
            <div className="mb-8 flex flex-wrap items-center gap-2 justify-center">
              <span className="text-sm text-muted-foreground">
                {language === 'de' ? 'Aktive Filter:' : 'Active filters:'}
              </span>
              {searchQuery.trim() && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-foreground border border-border hover:bg-muted/80 transition-colors"
                >
                  "{searchQuery}"
                  <X className="w-3 h-3 ml-1" />
                </button>
              )}
              {challengeFilter !== 'all' && (
                <button
                  onClick={() => setChallengeFilter('all')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors"
                >
                  {getActiveFilterLabel(challengeFilter, 'challenge')}
                  <X className="w-3 h-3 ml-1" />
                </button>
              )}
              {solutionTypeFilter !== 'all' && (
                <button
                  onClick={() => setSolutionTypeFilter('all')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                >
                  {getActiveFilterLabel(solutionTypeFilter, 'type')}
                  <X className="w-3 h-3 ml-1" />
                </button>
              )}
              <button
                onClick={() => {
                  setChallengeFilter('all');
                  setSolutionTypeFilter('all');
                  setSearchQuery('');
                }}
                className="text-xs text-muted-foreground hover:text-foreground underline ml-2"
              >
                {language === 'de' ? 'Alle zurücksetzen' : 'Reset all'}
              </button>
            </div>
          )}
          
          <SolutionTileGrid tiles={filteredTiles} maxVisible={12} />
        </div>
      </section>
      
      {/* Final CTA */}
      <SolutionCTA />
      
      <Footer />
    </div>
  );
};

export default Solutions;
