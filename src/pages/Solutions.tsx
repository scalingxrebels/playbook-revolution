import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SolutionHero from '@/components/solutions/SolutionHero';
import ChallengeTabNavigation from '@/components/solutions/ChallengeTabNavigation';
import SolutionTypeChips from '@/components/solutions/SolutionTypeChips';
import SolutionTileGrid from '@/components/solutions/SolutionTileGrid';
import SolutionCTA from '@/components/solutions/SolutionCTA';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ChallengeId, 
  SolutionTypeId, 
  getFilteredTiles,
  solutionTiles
} from '@/data/solutionTiles';

const Solutions: React.FC = () => {
  const { language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get filters from URL or use defaults
  const challengeParam = searchParams.get('challenge') as ChallengeId | null;
  const typeParam = searchParams.get('type') as SolutionTypeId | null;
  
  const [challengeFilter, setChallengeFilter] = useState<ChallengeId>(
    challengeParam || 'all'
  );
  const [solutionTypeFilter, setSolutionTypeFilter] = useState<SolutionTypeId>(
    typeParam || 'all'
  );

  // Get filtered tiles
  const filteredTiles = useMemo(() => {
    return getFilteredTiles(challengeFilter, solutionTypeFilter);
  }, [challengeFilter, solutionTypeFilter]);

  // Sync URL with state
  useEffect(() => {
    const newParams = new URLSearchParams();
    if (challengeFilter !== 'all') {
      newParams.set('challenge', challengeFilter);
    }
    if (solutionTypeFilter !== 'all') {
      newParams.set('type', solutionTypeFilter);
    }
    setSearchParams(newParams, { replace: true });
  }, [challengeFilter, solutionTypeFilter, setSearchParams]);

  // Handle challenge filter change
  const handleChallengeChange = (challengeId: ChallengeId) => {
    setChallengeFilter(challengeId);
  };

  // Handle solution type filter change
  const handleSolutionTypeChange = (typeId: SolutionTypeId) => {
    setSolutionTypeFilter(typeId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <SolutionHero />
      
      {/* Dual-Logic Navigation Section */}
      <section id="challenges" className="py-8 md:py-12 bg-muted/30 border-y border-border sticky top-16 z-40 backdrop-blur-sm bg-muted/80">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              {language === 'de' 
                ? `${solutionTiles.length} Solutions · 9 Challenges` 
                : `${solutionTiles.length} Solutions · 9 Challenges`
              }
            </span>
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
              {language === 'de' ? 'Finde deine Lösung' : 'Find Your Solution'}
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              {language === 'de' 
                ? 'Filtere nach Challenge und Solution Type, um die passende Lösung zu finden.'
                : 'Filter by challenge and solution type to find the right fit.'
              }
            </p>
          </div>
          
          {/* Level 1: Challenge Tabs */}
          <div className="mb-4">
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
        </div>
      </section>
      
      {/* Solution Tile Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          {/* Active Filter Display */}
          {(challengeFilter !== 'all' || solutionTypeFilter !== 'all') && (
            <div className="mb-8 flex flex-wrap items-center gap-2 justify-center">
              <span className="text-sm text-muted-foreground">
                {language === 'de' ? 'Aktive Filter:' : 'Active filters:'}
              </span>
              {challengeFilter !== 'all' && (
                <button
                  onClick={() => setChallengeFilter('all')}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors"
                >
                  {challengeFilter}
                  <span className="ml-1">×</span>
                </button>
              )}
              {solutionTypeFilter !== 'all' && (
                <button
                  onClick={() => setSolutionTypeFilter('all')}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                >
                  {solutionTypeFilter}
                  <span className="ml-1">×</span>
                </button>
              )}
              <button
                onClick={() => {
                  setChallengeFilter('all');
                  setSolutionTypeFilter('all');
                }}
                className="text-xs text-muted-foreground hover:text-foreground underline"
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
