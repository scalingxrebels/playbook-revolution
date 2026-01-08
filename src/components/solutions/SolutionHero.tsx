import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import SharedHero from '@/components/shared/SharedHero';

const SolutionHero: React.FC = () => {
  const { language } = useLanguage();

  const scrollToCategories = () => {
    document.getElementById('solution-categories')?.scrollIntoView({ behavior: 'smooth' });
  };

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
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          onClick={scrollToCategories}
          className="shadow-brutal hover-brutal group"
        >
          {language === 'de' ? 'Kategorien erkunden' : 'Explore Categories'}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          className="shadow-brutal-sm hover-brutal"
          onClick={() => window.open('https://calendly.com/scalingx', '_blank')}
        >
          <Phone className="mr-2 w-4 h-4" />
          {language === 'de' ? 'Beratung buchen' : 'Book a Call'}
        </Button>
      </div>
    </SharedHero>
  );
};

export default SolutionHero;
