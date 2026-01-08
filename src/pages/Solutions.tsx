import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SolutionHero from '@/components/solutions/SolutionHero';
import SolutionCategoryGrid from '@/components/solutions/SolutionCategoryGrid';
import SolutionDecisionTree from '@/components/solutions/SolutionDecisionTree';
import SolutionCheatSheet from '@/components/solutions/SolutionCheatSheet';
import SolutionCTA from '@/components/solutions/SolutionCTA';
import ProblemTagNavigation from '@/components/ProblemTagNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProblemTag } from '@/data/solutions';

const Solutions: React.FC = () => {
  const { language } = useLanguage();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleTagClick = (tag: ProblemTag) => {
    if (activeTag === tag.id) {
      setActiveTag(null);
    } else {
      setActiveTag(tag.id);
      // Scroll to categories
      document.getElementById('solution-categories')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <SolutionHero />
      
      {/* Problem Tag Navigation */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              {language === 'de' ? 'Was ist deine größte Challenge?' : "What's Your Biggest Challenge?"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {language === 'de' ? 'Klicke auf ein Problem, um passende Lösungen zu sehen' : 'Click a problem to see matching solutions'}
            </p>
          </div>
          <ProblemTagNavigation
            context="solutions"
            activeTag={activeTag}
            onTagClick={handleTagClick}
          />
        </div>
      </section>
      
      {/* Solution Categories Grid */}
      <section id="solution-categories" className="py-24 lg:py-32">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              {language === 'de' ? '6 Kategorien' : '6 Categories'}
            </span>
            <h2 className="font-display text-display-md tracking-tight mb-4">
              {language === 'de' ? 'Wähle dein Format' : 'Choose Your Format'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'de' 
                ? 'Von punktueller Beratung bis zur vollständigen Transformation – finde das richtige Engagement-Modell.'
                : 'From point advisory to full transformation – find the right engagement model.'
              }
            </p>
          </div>
          <SolutionCategoryGrid activeTag={activeTag} />
        </div>
      </section>
      
      {/* Decision Tree */}
      <section className="py-24 lg:py-32 bg-muted/30 border-y border-border">
        <div className="container max-w-5xl mx-auto px-6">
          <SolutionDecisionTree />
        </div>
      </section>
      
      {/* Cheat Sheet */}
      <section className="py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              {language === 'de' ? 'Quick Reference' : 'Quick Reference'}
            </span>
            <h2 className="font-display text-display-md tracking-tight mb-4">
              {language === 'de' ? 'Solution Cheat Sheet' : 'Solution Cheat Sheet'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'de' 
                ? 'Auf einen Blick: Wann welche Kategorie wählen.'
                : 'At a glance: When to choose which category.'
              }
            </p>
          </div>
          <SolutionCheatSheet />
        </div>
      </section>
      
      {/* Final CTA */}
      <SolutionCTA />
      
      <Footer />
    </div>
  );
};

export default Solutions;
