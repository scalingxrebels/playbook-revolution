import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import SharedHero from '@/components/shared/SharedHero';
import { Search, Phone, ArrowRight, Check } from 'lucide-react';
import PlaybookFilterPanel from '@/components/playbooks/PlaybookFilterPanel';
import PlaybookOnboardingHint from '@/components/playbooks/PlaybookOnboardingHint';
import PlaybookCard from '@/components/playbooks/PlaybookCard';
import PlaybookModal from '@/components/playbooks/PlaybookModal';
import { usePlaybookFilters } from '@/components/playbooks/usePlaybookFilters';
import type { Playbook } from '@/data/playbooks';

const PlaybookLibrary: React.FC = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlaybook, setSelectedPlaybook] = useState<Playbook | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    filters,
    updateFilter,
    filteredPlaybooks,
    totalPlaybooks,
  } = usePlaybookFilters(searchQuery, language);

  const openPlaybookDetail = (playbook: Playbook) => {
    setSelectedPlaybook(playbook);
    setIsDialogOpen(true);
  };

  const handleDownloadTemplate = (playbook: Playbook) => {
    toast({
      title: language === 'en' ? 'Template Download' : 'Vorlage Download',
      description: language === 'en' 
        ? `"${playbook.title.en}" template will be available soon. Contact us for early access.`
        : `"${playbook.title.de}" Vorlage wird bald verfügbar sein. Kontaktieren Sie uns für frühen Zugang.`,
    });
  };

  const playbookStats = [
    { value: '1', label: { en: 'Playbooks', de: 'Playbooks' }, color: 'primary' as const },
    { value: '5', label: { en: 'Areas', de: 'Bereiche' }, color: 'accent' as const },
    { value: '3', label: { en: 'Filters', de: 'Filter' }, color: 'primary' as const },
    { value: '7', label: { en: 'Roles', de: 'Rollen' }, color: 'accent' as const },
  ];

  return (
    <>
      {/* Hero - Standalone */}
      <SharedHero
        overlineEn="Growth Engines × Scaling Systems × AI = Hypergrowth"
        overlineDe="Growth Engines × Scaling Systems × AI = Hypergrowth"
        headlineLine1En="Playbook Library"
        headlineLine1De="Playbook Bibliothek"
        headlineLine2En="for AI-Native Scaling"
        headlineLine2De="für AI-Native Scaling"
        subheadlineEn="Find the right playbook for your scaling challenge."
        subheadlineDe="Finden Sie das richtige Playbook für Ihre Skalierungs-Challenge."
        stats={playbookStats}
      />

      {/* Filter Section - Consistent with Solutions */}
      <section className="py-6 md:py-8 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search playbooks...' : 'Playbooks suchen...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
              />
            </div>
          </div>

          {/* Onboarding Hint */}
          <div className="mb-6">
            <PlaybookOnboardingHint />
          </div>

          {/* 3-Filter Panel */}
          <div className="mb-6 space-y-6">
            <PlaybookFilterPanel 
              filters={filters} 
              onFilterChange={updateFilter} 
            />
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-muted-foreground">
              {language === 'en' 
                ? `Showing ${filteredPlaybooks.length} of ${totalPlaybooks} playbooks`
                : `Zeige ${filteredPlaybooks.length} von ${totalPlaybooks} Playbooks`}
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Playbook Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaybooks.map((playbook, index) => (
              <PlaybookCard 
                key={playbook.id} 
                playbook={playbook} 
                index={index} 
                language={language}
                matchScore={playbook.matchScore}
                onOpen={openPlaybookDetail}
                onDownload={handleDownloadTemplate}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredPlaybooks.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en' ? 'No playbooks found' : 'Keine Playbooks gefunden'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Try adjusting your filters or search query.'
                  : 'Versuchen Sie, Ihre Filter oder Suchanfrage anzupassen.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Playbook Detail Modal */}
      <PlaybookModal
        playbook={selectedPlaybook}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        language={language}
        onDownload={handleDownloadTemplate}
      />

      {/* CTA Section - Eigenständig außerhalb des Containers */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 noise opacity-30" />
        
        {/* Decorative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center">
            {/* Headline */}
            <h2 className="font-display text-display-md text-foreground mb-6">
              {language === 'de' ? (
                <>
                  Noch nicht sicher, welches
                  <span className="block italic text-gradient">Playbook passt?</span>
                </>
              ) : (
                <>
                  Still not sure which
                  <span className="block italic text-gradient">playbook is right?</span>
                </>
              )}
            </h2>
            
            {/* Subline */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              {language === 'de' 
                ? 'Buche einen kostenlosen Inflection Call. Wir identifizieren deinen Engpass in 30 Minuten und empfehlen den richtigen Weg.'
                : 'Book a free Inflection Call. We\'ll identify your bottleneck in 30 minutes and recommend the right path.'
              }
            </p>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="xl" 
                className="shadow-brutal hover-brutal group"
                onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
              >
                <Phone className="mr-2 w-5 h-5" />
                {language === 'de' ? 'Kostenlosen Inflection Call buchen' : 'Book Free Inflection Call'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-accent" />
                {language === 'de' ? 'Unverbindlich' : 'No commitment'}
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-accent" />
                {language === 'de' ? '30 Minuten' : '30 minutes'}
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-accent" />
                {language === 'de' ? 'Konkrete nächste Schritte' : 'Concrete next steps'}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaybookLibrary;
