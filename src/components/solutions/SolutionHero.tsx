import React, { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SharedHero from '@/components/shared/SharedHero';
import { solutionTiles, challenges } from '@/data/solutionTiles';
import { useContentVisibilityContext } from '@/contexts/ContentVisibilityContext';

const SolutionHero: React.FC = () => {
  const { language } = useLanguage();
  const { isHidden } = useContentVisibilityContext();

  const visibleCount = useMemo(
    () => solutionTiles.filter(t => !isHidden('solution', t.slug, t.hidden)).length,
    [isHidden]
  );
  const solutionCount = visibleCount;
  const challengeCount = challenges.length - 1;

  const stats = [
    { value: String(challengeCount), label: { en: 'Challenges', de: 'Challenges' }, color: 'accent' as const },
    { value: String(solutionCount), label: { en: 'Solutions', de: 'Solutions' }, color: 'primary' as const },
    { value: '15-80x', label: { en: 'Avg ROI', de: 'Ø ROI' }, color: 'primary' as const },
    { value: '92%', label: { en: 'Success Rate', de: 'Erfolgsrate' }, color: 'accent' as const },
  ];

  return (
    <SharedHero
      overlineEn="HOW WE WORK · SERIES A–B · DACH"
      overlineDe="WIE WIR ARBEITEN · SERIES A–B · DACH"
      headlineLine1En="Find the Right Solution"
      headlineLine1De="Finde die richtige Lösung"
      headlineLine2En="for Your Growth Challenge."
      headlineLine2De="für deine Growth Challenge."
      subheadlineEn={`15-80x avg ROI. 92% success rate. ${solutionCount} solutions. One is yours.`}
      subheadlineDe={`15-80x Ø ROI. 92% Erfolgsrate. ${solutionCount} Solutions. Eine ist deine.`}
      stats={stats}
    />
  );
};

export default SolutionHero;
