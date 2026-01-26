import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import SharedHero from '@/components/shared/SharedHero';

const SolutionHero: React.FC = () => {
  const { language } = useLanguage();

  const scrollToChallenges = () => {
    document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '41', label: { en: 'Solutions', de: 'Lösungen' }, color: 'primary' as const },
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
      subheadlineEn="41 solutions across 9 challenges. Filter by challenge or solution type to find what you need."
      subheadlineDe="41 Lösungen für 9 Challenges. Filtere nach Challenge oder Solution Type, um das Richtige zu finden."
      stats={stats}
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          onClick={scrollToChallenges}
          className="shadow-brutal hover-brutal group"
        >
          {language === 'de' ? 'Solutions erkunden' : 'Explore Solutions'}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          className="shadow-brutal-sm hover-brutal"
          onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
        >
          <Phone className="mr-2 w-4 h-4" />
          {language === 'de' ? 'Kostenloses Gespräch' : 'Free Inflection Call'}
        </Button>
      </div>
    </SharedHero>
  );
};

export default SolutionHero;
