import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SolutionHero from '@/components/solutions/SolutionHero';
import ChallengeTabNavigation from '@/components/solutions/ChallengeTabNavigation';
import ChallengeCard from '@/components/solutions/ChallengeCard';
import ChallengeDetailModal from '@/components/solutions/ChallengeDetailModal';
import SolutionCheatSheet from '@/components/solutions/SolutionCheatSheet';
import SolutionCTA from '@/components/solutions/SolutionCTA';
import { useLanguage } from '@/contexts/LanguageContext';
import { challenges, getDefaultChallenge, getChallengeById, Challenge } from '@/data/challenges';

const Solutions: React.FC = () => {
  const { language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get challenge from URL or use default
  const challengeParam = searchParams.get('challenge');
  const [activeChallenge, setActiveChallenge] = useState<string>(
    challengeParam || getDefaultChallenge().id
  );
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(
    searchParams.get('detail') === 'true'
  );

  // Get current challenge object
  const currentChallenge: Challenge | undefined = getChallengeById(activeChallenge);

  // Sync URL with state
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('challenge', activeChallenge);
    if (detailModalOpen) {
      newParams.set('detail', 'true');
    } else {
      newParams.delete('detail');
    }
    setSearchParams(newParams, { replace: true });
  }, [activeChallenge, detailModalOpen]);

  // Handle tab change
  const handleChallengeChange = (challengeId: string) => {
    setActiveChallenge(challengeId);
  };

  // Handle modal open
  const handleOpenDetail = () => {
    setDetailModalOpen(true);
  };

  // Handle modal close
  const handleCloseDetail = (open: boolean) => {
    setDetailModalOpen(open);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <SolutionHero />
      
      {/* Challenge Tab Navigation */}
      <section id="challenges" className="py-8 md:py-12 bg-muted/30 border-y border-border">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              {language === 'de' ? '9 Challenges · 45 Lösungen' : '9 Challenges · 45 Solutions'}
            </span>
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
              {language === 'de' ? 'Was ist deine größte Challenge?' : "What's Your Biggest Challenge?"}
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              {language === 'de' 
                ? 'Wähle eine Challenge und entdecke passende Lösungen von FREE bis Full Transformation.'
                : 'Select a challenge and discover matching solutions from FREE to Full Transformation.'
              }
            </p>
          </div>
          <ChallengeTabNavigation
            activeChallenge={activeChallenge}
            onChallengeChange={handleChallengeChange}
          />
        </div>
      </section>
      
      {/* Challenge Card */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          {currentChallenge && (
            <ChallengeCard
              challenge={currentChallenge}
              onOpenDetail={handleOpenDetail}
            />
          )}
        </div>
      </section>
      
      {/* Challenge Detail Modal */}
      <ChallengeDetailModal
        challenge={currentChallenge || null}
        open={detailModalOpen}
        onOpenChange={handleCloseDetail}
      />
      
      {/* Cheat Sheet */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted/30 border-y border-border">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              {language === 'de' ? 'Quick Reference' : 'Quick Reference'}
            </span>
            <h2 className="font-display text-2xl md:text-display-md tracking-tight mb-4">
              {language === 'de' ? 'Solution Cheat Sheet' : 'Solution Cheat Sheet'}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
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
