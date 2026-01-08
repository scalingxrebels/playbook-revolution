import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search } from 'lucide-react';
import SharedHero from '@/components/shared/SharedHero';

interface SolutionHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SolutionHero: React.FC<SolutionHeroProps> = ({ searchQuery, setSearchQuery }) => {
  const { language } = useLanguage();

  const stats = [
    { value: '92%', label: { en: 'Outcome Delivery', de: 'Outcome Delivery' }, color: 'primary' as const },
    { value: '6', label: { en: 'Solution Categories', de: 'Solution-Kategorien' }, color: 'accent' as const },
    { value: '€0-500K', label: { en: 'Investment Range', de: 'Investitionsspanne' }, color: 'primary' as const },
  ];

  return (
    <SharedHero
      overlineEn="Expertise × Speed = Impact"
      overlineDe="Expertise × Speed = Impact"
      headlineLine1En="Find the Right Solution"
      headlineLine1De="Finde die richtige Lösung"
      headlineLine2En="for Your Growth Challenge"
      headlineLine2De="für deine Growth Challenge"
      subheadlineEn="From Advisory to Transformation – choose the right format for your current need."
      subheadlineDe="Von Advisory bis Transformation – wähle das richtige Format für deinen aktuellen Need."
      stats={stats}
    >
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder={language === 'de' ? 'Lösungen suchen...' : 'Search solutions...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </SharedHero>
  );
};

export default SolutionHero;
