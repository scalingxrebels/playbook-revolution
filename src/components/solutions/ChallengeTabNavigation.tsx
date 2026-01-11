import React from 'react';
import { challenges, Challenge } from '@/data/challenges';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface ChallengeTabNavigationProps {
  activeChallenge: string;
  onChallengeChange: (challengeId: string) => void;
}

const ChallengeTabNavigation: React.FC<ChallengeTabNavigationProps> = ({
  activeChallenge,
  onChallengeChange,
}) => {
  const { language } = useLanguage();

  const sortedChallenges = [...challenges].sort((a, b) => a.order - b.order);

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-1 md:gap-2 min-w-max px-4 md:px-0 md:justify-center">
        {sortedChallenges.map((challenge: Challenge) => {
          const Icon = challenge.icon;
          const isActive = activeChallenge === challenge.id;

          return (
            <button
              key={challenge.id}
              onClick={() => onChallengeChange(challenge.id)}
              className={cn(
                "flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                isActive
                  ? "bg-primary text-primary-foreground shadow-brutal-sm"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">
                {language === 'de' ? challenge.nameDe : challenge.nameEn}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChallengeTabNavigation;
