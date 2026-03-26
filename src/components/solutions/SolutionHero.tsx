import React from 'react';
import SharedHero from '@/components/shared/SharedHero';

const SolutionHero: React.FC = () => {
  const stats = [
    { value: '9', label: { en: 'Challenges', de: 'Challenges' }, color: 'accent' as const },
    { value: '6', label: { en: 'Solutions', de: 'Solutions' }, color: 'primary' as const },
    { value: '15-80x', label: { en: 'Avg ROI', de: 'Ø ROI' }, color: 'primary' as const },
    { value: '92%', label: { en: 'Success Rate', de: 'Erfolgsrate' }, color: 'accent' as const },
  ];

  return (
    <SharedHero
      overlineEn="GROWTH ENGINES × SCALING SYSTEMS × AI = HYPERGROWTH"
      overlineDe="GROWTH ENGINES × SCALING SYSTEMS × AI = HYPERGROWTH"
      headlineLine1En="Find the Right Solution"
      headlineLine1De="Finde die richtige Lösung"
      headlineLine2En="for Your Growth Challenge."
      headlineLine2De="für deine Growth Challenge."
      subheadlineEn="How we work · Series A–B · DACH"
      subheadlineDe="Wie wir arbeiten · Series A–B · DACH"
      stats={stats}
    />
  );
};

export default SolutionHero;
