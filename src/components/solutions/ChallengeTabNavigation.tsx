import React, { useRef, useState, useEffect } from 'react';
import { challenges, ChallengeId } from '@/data/solutionTiles';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Layers, TrendingDown, TrendingUp, DollarSign, Users, Zap, Bot, Briefcase, PieChart, HelpCircle, Filter } from 'lucide-react';

interface ChallengeTabNavigationProps {
  activeChallenge: ChallengeId;
  onChallengeChange: (challengeId: ChallengeId) => void;
}

// Icon mapping for challenges
const challengeIcons: Record<ChallengeId, React.ElementType> = {
  'all': Layers,
  'cac-crisis': TrendingUp,
  'growth-stalled': TrendingDown,
  'pricing-breakdown': DollarSign,
  'customer-success-broken': Users,
  'scaling-chaos': Zap,
  'ai-transformation': Bot,
  'board-pressure': Briefcase,
  'portfolio-performance': PieChart,
  'orientation': HelpCircle,
};

const ChallengeTabNavigation: React.FC<ChallengeTabNavigationProps> = ({
  activeChallenge,
  onChallengeChange,
}) => {
  const { language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  // Check scroll position to show/hide fade indicators
  const updateScrollIndicators = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftFade(scrollLeft > 10);
    setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    updateScrollIndicators();
    window.addEventListener('resize', updateScrollIndicators);
    return () => window.removeEventListener('resize', updateScrollIndicators);
  }, []);

  // Scroll to active tab on mount
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const activeButton = container.querySelector(`[data-challenge="${activeChallenge}"]`);
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeChallenge]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      const newIndex = e.key === 'ArrowLeft' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(challenges.length - 1, currentIndex + 1);
      onChallengeChange(challenges[newIndex].id);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = container.clientWidth * 0.6;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full" id="challenge-navigation">
      {/* Filter Label */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">
          {language === 'de' ? 'Challenge:' : 'Challenge:'}
        </span>
      </div>

      {/* Left scroll button */}
      <button
        onClick={() => scroll('left')}
        className={cn(
          "absolute left-0 top-1/2 mt-3 -translate-y-1/2 z-10 p-1.5 rounded-full bg-background/90 border border-border shadow-md transition-opacity duration-200 md:hidden",
          showLeftFade ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>

      {/* Left fade indicator */}
      <div 
        className={cn(
          "absolute left-0 top-8 bottom-0 w-12 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none z-[5] transition-opacity duration-200",
          showLeftFade ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        onScroll={updateScrollIndicators}
        role="tablist"
        aria-label={language === 'de' ? 'Challenge-Navigation' : 'Challenge navigation'}
        className="w-full overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <div className="flex items-center gap-2 px-6 md:px-0 justify-center py-1 flex-wrap">
          {challenges.map((challenge, index) => {
            const Icon = challengeIcons[challenge.id];
            const isActive = activeChallenge === challenge.id;
            const label = language === 'de' ? challenge.labelDe : challenge.labelEn;

            return (
              <button
                key={challenge.id}
                data-challenge={challenge.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`challenge-panel-${challenge.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => onChallengeChange(challenge.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={cn(
                  "group flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50"
                )}
              >
                <Icon className={cn(
                  "w-4 h-4 flex-shrink-0 transition-transform duration-200",
                  isActive ? "" : "group-hover:scale-110"
                )} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right fade indicator */}
      <div 
        className={cn(
          "absolute right-0 top-8 bottom-0 w-12 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none z-[5] transition-opacity duration-200",
          showRightFade ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Right scroll button */}
      <button
        onClick={() => scroll('right')}
        className={cn(
          "absolute right-0 top-1/2 mt-3 -translate-y-1/2 z-10 p-1.5 rounded-full bg-background/90 border border-border shadow-md transition-opacity duration-200 md:hidden",
          showRightFade ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>
    </div>
  );
};

export default ChallengeTabNavigation;
