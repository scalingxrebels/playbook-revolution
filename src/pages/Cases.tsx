import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import SharedHero from '@/components/shared/SharedHero';
import CaseFilterSection from '@/components/cases/CaseFilterSection';
import CaseCard from '@/components/cases/CaseCard';
import CaseCTA from '@/components/cases/CaseCTA';
import { useCaseFilters } from '@/components/cases/useCaseFilters';
import { caseStudies } from '@/data/cases';

const casesStats = [
  { value: `${caseStudies.length}+`, label: { en: 'Case Studies', de: 'Case Studies' }, color: 'primary' as const },
  { value: '5x', label: { en: 'Avg ROI', de: 'Ø ROI' }, color: 'accent' as const },
  { value: '€2.1B', label: { en: 'Value Created', de: 'Wert geschaffen' }, color: 'primary' as const },
  { value: '92%', label: { en: 'Success Rate', de: 'Erfolgsrate' }, color: 'accent' as const },
];

const clientNames = [
  'Pigtie', 'the beautiful unleashed truth', 'KODE®', 'FILADOS', '2p Team',
  'Microsoft Surface', 'XING e-Recruiting', 'Lexware', 'Haufe Group', 'smapOne',
  'SBB E-Business', 'Swarovski', 'local.ch', 'BWK Group', 'DBA', 'Burda Media',
  'START', 'Elba', 'Semigator', 'Umantis', 'Sage', 'LifiMax', 'BeQueen', 'BonGusto'
];

const Cases: React.FC = () => {
  const { language } = useLanguage();
  const {
    searchQuery,
    setSearchQuery,
    selectedChallenge,
    setSelectedChallenge,
    selectedIndustry,
    setSelectedIndustry,
    selectedStage,
    setSelectedStage,
    filteredCases,
    totalCount,
    filteredCount,
    clearFilters,
    hasActiveFilters,
  } = useCaseFilters();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <SharedHero
        overlineEn="Expertise × Speed = Impact"
        overlineDe="Expertise × Speed = Impact"
        headlineLine1En="Real Transformations,"
        headlineLine1De="Echte Transformationen,"
        headlineLine2En="Real Results"
        headlineLine2De="Echte Ergebnisse"
        subheadlineEn="Every case study tells a story. The board meeting that changed everything. The crisis that became a catalyst. The results that exceeded expectations."
        subheadlineDe="Jede Case Study erzählt eine Geschichte. Das Board Meeting, das alles veränderte. Die Krise, die zum Katalysator wurde. Die Ergebnisse, die alle Erwartungen übertrafen."
        stats={casesStats}
      />

      {/* Client Ticker */}
      <div className="relative z-10 border-y border-border py-4 bg-background/50">
        <div className="container max-w-7xl mx-auto px-4 mb-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {language === 'de' ? 'Mit wem wir gearbeitet haben' : 'Who we have worked with'}
          </span>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 px-4">
                {clientNames.map((name, idx) => (
                  <span key={`${i}-${idx}`} className="text-sm font-medium text-muted-foreground/60 flex items-center gap-6">
                    <span className="w-1 h-1 rounded-full bg-primary/40" />
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <CaseFilterSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedChallenge={selectedChallenge}
        onChallengeChange={setSelectedChallenge}
        selectedIndustry={selectedIndustry}
        onIndustryChange={setSelectedIndustry}
        selectedStage={selectedStage}
        onStageChange={setSelectedStage}
        filteredCount={filteredCount}
        totalCount={totalCount}
        onClearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />
      
      {/* Case Card Grid */}
      <main className="py-12">
        <div className="container max-w-7xl mx-auto px-4">
          {filteredCases.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseStudy, index) => (
                <CaseCard 
                  key={caseStudy.id} 
                  caseStudy={caseStudy} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                {language === 'de' 
                  ? 'Keine Cases gefunden, die Ihren Filtern entsprechen.'
                  : 'No cases found matching your filters.'}
              </p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline"
              >
                {language === 'de' ? 'Filter zurücksetzen' : 'Clear filters'}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* CTA Section */}
      <CaseCTA />

      <Footer />
    </div>
  );
};

export default Cases;
