import React, { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SharedHero from '@/components/shared/SharedHero';
import { solutionTiles, challenges } from '@/data/solutionTiles';
import { useContentVisibilityContext } from '@/contexts/ContentVisibilityContext';

const SolutionHero: React.FC = () => {
  const { language } = useLanguage();
  const { isHidden } = useContentVisibilityContext();

  // Dynamic counts from data
  const visibleCount = useMemo(
    () => solutionTiles.filter(t => !isHidden('solution', t.slug, t.hidden)).length,
    [isHidden]
  );
  const solutionCount = visibleCount;
  const challengeCount = challenges.length - 1; // Minus "all"

  const stats = [
    { value: String(challengeCount), label: { en: 'Challenges', de: 'Challenges' }, color: 'accent' as const },
    { value: String(solutionCount), label: { en: 'Solutions', de: 'Lösungen' }, color: 'primary' as const },
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
      subheadlineEn={`${solutionCount} solutions across ${challengeCount} challenges. Filter by challenge or solution type to find what you need.`}
      subheadlineDe={`${solutionCount} Lösungen für ${challengeCount} Challenges. Filtere nach Challenge oder Solution Type, um das Richtige zu finden.`}
      stats={stats}
    />
  );
};

export default SolutionHero;
