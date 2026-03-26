import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SolutionHero from '@/components/solutions/SolutionHero';
import SolutionFeatured from '@/components/solutions/SolutionFeatured';
import SolutionCategoryNav from '@/components/solutions/SolutionCategoryNav';
import FilterOnboardingHint from '@/components/solutions/FilterOnboardingHint';
import ChallengeTabNavigation from '@/components/solutions/ChallengeTabNavigation';
import SolutionTypeChips from '@/components/solutions/SolutionTypeChips';
import SolutionCategoryChips from '@/components/solutions/SolutionCategoryChips';
import SolutionTileGrid from '@/components/solutions/SolutionTileGrid';
import SolutionCTA from '@/components/solutions/SolutionCTA';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContentVisibilityContext } from '@/contexts/ContentVisibilityContext';
import { Search, X } from 'lucide-react';
import { 
  ChallengeId, 
  SolutionTypeId, 
  solutionTiles,
  challenges,
  solutionTypes
} from '@/data/solutionTiles';
import { CategoryId, categoryMapping } from '@/data/solutionCategoryData';

const Solutions: React.FC = () => {
  const { language } = useLanguage();
  const { isHidden } = useContentVisibilityContext();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const challengeParam = searchParams.get('challenge') as ChallengeId | null;
  const typeParam = searchParams.get('type') as SolutionTypeId | null;
  const categoryParam = searchParams.get('category') as CategoryId | null;
  const searchParam = searchParams.get('q') || '';
  
  const [challengeFilter, setChallengeFilter] = useState<ChallengeId>(challengeParam || 'all');
  const [solutionTypeFilter, setSolutionTypeFilter] = useState<SolutionTypeId>(typeParam || 'all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryId | 'all'>(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState(searchParam);

  const visibleTilesTotal = useMemo(() => 
    solutionTiles.filter(t => !isHidden('solution', t.slug, t.hidden)),
    [isHidden]
  );

  const filteredTiles = useMemo(() => {
    const challenge = challengeFilter === 'all' ? null : challengeFilter;
    const type = solutionTypeFilter === 'all' ? null : solutionTypeFilter;
    const cat = categoryFilter === 'all' ? null : categoryFilter;
    
    let tiles = solutionTiles.filter(t => !isHidden('solution', t.slug, t.hidden));
    
    tiles = tiles.filter(tile => {
      const matchesChallenge = !challenge || tile.challenges === 'universal' || 
        (Array.isArray(tile.challenges) && tile.challenges.includes(challenge));
      const matchesType = !type || tile.solutionType === type;
      const matchesCategory = !cat || (() => {
        const mapping = categoryMapping[tile.slug];
        return mapping && (mapping.category === cat || mapping.categorySecondary === cat);
      })();
      return matchesChallenge && matchesType && matchesCategory;
    });
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      tiles = tiles.filter(tile => {
        const headline = language === 'de' ? tile.headlineDe : tile.headlineEn;
        const problem = language === 'de' ? tile.problemDe : tile.problemEn;
        const solution = language === 'de' ? tile.solutionDe : tile.solutionEn;
        return headline.toLowerCase().includes(query) ||
          problem.toLowerCase().includes(query) ||
          solution.toLowerCase().includes(query);
      });
    }
    
    tiles.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return tiles;
  }, [challengeFilter, solutionTypeFilter, categoryFilter, searchQuery, language, isHidden]);

  useEffect(() => {
    const newParams = new URLSearchParams();
    if (challengeFilter !== 'all') newParams.set('challenge', challengeFilter);
    if (solutionTypeFilter !== 'all') newParams.set('type', solutionTypeFilter);
    if (categoryFilter !== 'all') newParams.set('category', categoryFilter);
    if (searchQuery.trim()) newParams.set('q', searchQuery);
    setSearchParams(newParams, { replace: true });
  }, [challengeFilter, solutionTypeFilter, categoryFilter, searchQuery, setSearchParams]);

  const hasActiveFilters = challengeFilter !== 'all' || solutionTypeFilter !== 'all' || categoryFilter !== 'all' || searchQuery.trim();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* S1 — Hero */}
      <SolutionHero />
      
      {/* S2 — Featured */}
      <SolutionFeatured />
      
      {/* S3 — Category Navigation */}
      <SolutionCategoryNav />
      
      {/* S4 — All Solutions Filter Grid */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          {/* Section header */}
          <span className="block text-sm font-semibold uppercase tracking-widest text-accent text-center mb-4">
            {language === 'de' ? 'Alle Solutions' : 'All Solutions'}
          </span>
          <h2 className="font-display text-display-md text-foreground text-center mb-4">
            Growth Engines × Scaling Systems × AI<br />={' '}
            <span className="italic text-gradient">Hypergrowth</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
            {language === 'de'
              ? 'Finde die richtige Lösung für deine Growth Challenge.'
              : 'Find the right solution for your growth challenge.'}
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8">
            {[
              { value: `${challenges.length - 1}`, labelDe: 'Challenges', labelEn: 'Challenges' },
              { value: `${visibleTilesTotal.length}`, labelDe: 'Solutions', labelEn: 'Solutions' },
              { value: '15-80x', labelDe: 'Ø ROI', labelEn: 'Avg ROI' },
              { value: '92%', labelDe: 'Erfolgsrate', labelEn: 'Success Rate' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="text-xl font-bold text-foreground">{stat.value}</span>
                <span className="ml-1.5 text-sm text-muted-foreground">{language === 'de' ? stat.labelDe : stat.labelEn}</span>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="space-y-6 bg-muted/30 border border-border p-6 mb-8">
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={language === 'de' ? 'Solutions durchsuchen...' : 'Search solutions...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-card border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder:text-muted-foreground transition-all"
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

            <FilterOnboardingHint />

            {/* Challenge Tabs */}
            <ChallengeTabNavigation
              activeChallenge={challengeFilter}
              onChallengeChange={(id) => setChallengeFilter(id)}
            />

            {/* Solution Type Chips */}
            <div className="flex justify-center">
              <SolutionTypeChips
                activeSolutionType={solutionTypeFilter}
                onSolutionTypeChange={(id) => setSolutionTypeFilter(id)}
              />
            </div>

            {/* Category Chips */}
            <div className="flex justify-center">
              <SolutionCategoryChips
                activeCategoryId={categoryFilter}
                onCategoryChange={(id) => setCategoryFilter(id)}
              />
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? `Zeige ${filteredTiles.length} von ${visibleTilesTotal.length} Solutions`
                  : `Showing ${filteredTiles.length} of ${visibleTilesTotal.length} solutions`}
              </p>
            </div>
          </div>

          {/* Active Filters */}
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
                  "{searchQuery}" <X className="w-3 h-3 ml-1" />
                </button>
              )}
              {challengeFilter !== 'all' && (
                <button
                  onClick={() => setChallengeFilter('all')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors"
                >
                  {challenges.find(c => c.id === challengeFilter)?.[language === 'de' ? 'labelDe' : 'labelEn']}
                  <X className="w-3 h-3 ml-1" />
                </button>
              )}
              {solutionTypeFilter !== 'all' && (
                <button
                  onClick={() => setSolutionTypeFilter('all')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                >
                  {solutionTypes.find(t => t.id === solutionTypeFilter)?.[language === 'de' ? 'labelDe' : 'labelEn']}
                  <X className="w-3 h-3 ml-1" />
                </button>
              )}
              {categoryFilter !== 'all' && (
                <button
                  onClick={() => setCategoryFilter('all')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors"
                >
                  {categoryFilter}
                  <X className="w-3 h-3 ml-1" />
                </button>
              )}
              <button
                onClick={() => {
                  setChallengeFilter('all');
                  setSolutionTypeFilter('all');
                  setCategoryFilter('all');
                  setSearchQuery('');
                }}
                className="text-xs text-muted-foreground hover:text-foreground underline ml-2"
              >
                {language === 'de' ? 'Alle zurücksetzen' : 'Reset all'}
              </button>
            </div>
          )}

          <SolutionTileGrid tiles={filteredTiles} maxVisible={50} />
        </div>
      </section>
      
      {/* S5 — Fallback CTA */}
      <SolutionCTA />
      
      <Footer />
    </div>
  );
};

export default Solutions;
