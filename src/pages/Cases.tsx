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

// Helper: Parse ROI string to number
const parseRoi = (roi: string): number | null => {
  // Handle ranges like "3.5-5.3x" → take average
  if (roi.includes('-') && roi.includes('x')) {
    const parts = roi.replace('x', '').replace('+', '').split('-');
    if (parts.length === 2) {
      const low = parseFloat(parts[0]);
      const high = parseFloat(parts[1]);
      if (!isNaN(low) && !isNaN(high)) return (low + high) / 2;
    }
  }
  // Handle simple values like "5x", "8.6x", "10x+"
  const num = parseFloat(roi.replace('x', '').replace('+', '').replace(',', ''));
  return isNaN(num) ? null : num;
};

// Calculate median ROI from case studies
const calculateMedianRoi = (): string => {
  const roiValues = caseStudies
    .map(c => parseRoi(c.roi))
    .filter((v): v is number => v !== null)
    .sort((a, b) => a - b);
  
  if (roiValues.length === 0) return '5x';
  
  const mid = Math.floor(roiValues.length / 2);
  const median = roiValues.length % 2 === 0
    ? (roiValues[mid - 1] + roiValues[mid]) / 2
    : roiValues[mid];
  
  return `${median % 1 === 0 ? median : median.toFixed(1)}x`;
};

const casesStats = [
  { value: String(caseStudies.length), label: { en: 'Case Studies', de: 'Case Studies' }, color: 'primary' as const },
  { value: calculateMedianRoi(), label: { en: 'Avg ROI', de: 'Ø ROI' }, color: 'accent' as const },
  { value: '140+', label: { en: 'Engagements', de: 'Engagements' }, color: 'primary' as const },
  { value: '€2.5B', label: { en: 'Value Created', de: 'Wert geschaffen' }, color: 'accent' as const },
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

      {/* Client Ticker - Single Line */}
      <div className="relative z-10 border-y border-border py-4 bg-background/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6">
            {/* Static Label */}
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap flex-shrink-0 relative z-10 bg-background/50 pr-4">
              {language === 'de' ? 'Mit wem wir gearbeitet haben' : 'Who we have worked with'}
            </span>
            
            {/* Scrolling Ticker with Left Fade */}
            <div className="relative flex-1 overflow-hidden">
              {/* Left fade mask */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/50 to-transparent z-10 pointer-events-none" />
              
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
