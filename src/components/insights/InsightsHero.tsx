import React from 'react';
import SharedHero from '@/components/shared/SharedHero';

const InsightsHero: React.FC = () => {
  return (
    <SharedHero
      overlineEn="KNOWLEDGE THAT WORKS"
      overlineDe="WISSEN, DAS WIRKT"
      headlineLine1En="We publish what"
      headlineLine1De="Wir publizieren was"
      headlineLine2En="CEOs actually need."
      headlineLine2De="CEOs wirklich brauchen."
      subheadlineEn="No opinions. No trends. Six topics. Everything with consequence."
      subheadlineDe="Keine Meinungen. Keine Trends. Sechs Themengebiete. Alles mit Konsequenz."
    />
  );
};

export default InsightsHero;
