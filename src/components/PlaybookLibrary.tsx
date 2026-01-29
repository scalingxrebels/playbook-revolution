import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import SharedHero from '@/components/shared/SharedHero';
import { Search, Calendar, ArrowRight } from 'lucide-react';
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
    { value: '13', label: { en: 'Playbooks', de: 'Playbooks' }, color: 'primary' as const },
    { value: '5', label: { en: 'Areas', de: 'Bereiche' }, color: 'accent' as const },
    { value: '4', label: { en: 'Filters', de: 'Filter' }, color: 'primary' as const },
    { value: '7', label: { en: 'Roles', de: 'Rollen' }, color: 'accent' as const },
  ];

  return (
    <section className="pb-20 bg-background relative overflow-hidden">
      <SharedHero
        overlineEn="Expertise × Speed = Impact"
        overlineDe="Expertise × Speed = Impact"
        headlineLine1En="Playbook Library"
        headlineLine1De="Playbook Bibliothek"
        headlineLine2En="for AI-Native Scaling"
        headlineLine2De="für AI-Native Scaling"
        subheadlineEn="Find the right playbook for your scaling challenge."
        subheadlineDe="Finden Sie das richtige Playbook für Ihre Skalierungs-Challenge."
        stats={playbookStats}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-6 md:pt-8">
        {/* Search */}
        <div className="mb-8">
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
        <div className="mb-8">
          <PlaybookOnboardingHint />
        </div>

        {/* 4-Filter Panel - Michel's Definition */}
        <div className="mb-8 space-y-6">
          <PlaybookFilterPanel 
            filters={filters} 
            onFilterChange={updateFilter} 
          />
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            {language === 'en' 
              ? `Showing ${filteredPlaybooks.length} of ${totalPlaybooks} playbooks`
              : `Zeige ${filteredPlaybooks.length} von ${totalPlaybooks} Playbooks`}
          </p>
        </div>

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

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              {language === 'en' 
                ? 'Need help choosing the right playbook?'
                : 'Brauchen Sie Hilfe bei der Auswahl des richtigen Playbooks?'}
            </span>
          </div>
          <div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8"
              onClick={() => window.location.href = '/#assessment'}
            >
              {language === 'en' ? 'Take Assessment' : 'Assessment starten'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Playbook Detail Modal */}
      <PlaybookModal
        playbook={selectedPlaybook}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        language={language}
        onDownload={handleDownloadTemplate}
      />
    </section>
  );
};

export default PlaybookLibrary;
