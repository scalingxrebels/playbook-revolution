import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SharedHero from '@/components/shared/SharedHero';

const SolutionHero: React.FC = () => {
  const { language } = useLanguage();

  const stats = [
    { value: '40', label: { en: 'Solutions', de: 'Lösungen' }, color: 'primary' as const },
    { value: '9', label: { en: 'Challenges', de: 'Challenges' }, color: 'accent' as const },
    { value: '15-80x', label: { en: 'Avg ROI', de: 'Ø ROI' }, color: 'primary' as const },
    { value: '92%', label: { en: 'Success Rate', de: 'Erfolgsrate' }, color: 'accent' as const },
  ];

  return (
    <SharedHero
      overlineEn="Growth Engines × Scaling Systems × AI = Hypergrowth"
      overlineDe="Growth Engines × Scaling Systems × AI = Hypergrowth"
      headlineLine1En="Find the Right Solution"
      headlineLine1De="Finde die richtige Lösung"
      headlineLine2En="for Your Growth Challenge"
      headlineLine2De="für deine Growth Challenge"
      subheadlineEn="40 solutions across 9 challenges. Filter by challenge or solution type to find what you need."
      subheadlineDe="40 Lösungen für 9 Challenges. Filtere nach Challenge oder Solution Type, um das Richtige zu finden."
      stats={stats}
    />
  );
};

export default SolutionHero;
