import React, { useRef, useEffect, useState } from 'react';
import { SolutionTile } from '@/data/solutionTiles';
import SolutionTileCard from './SolutionTileCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface SolutionTileGridProps {
  tiles: SolutionTile[];
  maxVisible?: number;
}

const SolutionTileGrid: React.FC<SolutionTileGridProps> = ({ 
  tiles,
  maxVisible = 12
}) => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = React.useState(false);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);
  
  const visibleTiles = showAll ? tiles : tiles.slice(0, maxVisible);
  const hasMore = tiles.length > maxVisible;

  // Intersection Observer for staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setVisibleIndices((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const cards = gridRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [visibleTiles]);

  // Reset visible indices when tiles change
  useEffect(() => {
    setVisibleIndices(new Set());
  }, [tiles]);

  if (tiles.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">
          {language === 'de' 
            ? 'Keine Lösungen für diese Filter gefunden.' 
            : 'No solutions found for these filters.'
          }
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          {language === 'de' 
            ? 'Versuche andere Filter oder kontaktiere uns direkt.' 
            : 'Try different filters or contact us directly.'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Grid */}
      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {visibleTiles.map((tile, index) => (
          <div
            key={tile.id}
            data-index={index}
            className={cn(
              "transition-all duration-500 ease-out",
              visibleIndices.has(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{
              transitionDelay: `${(index % 6) * 75}ms`
            }}
          >
            <SolutionTileCard tile={tile} index={index} />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {hasMore && !showAll && (
        <div className="text-center pt-4">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors border border-primary/30 rounded-full hover:bg-primary/5"
          >
            {language === 'de' 
              ? `Alle ${tiles.length} Lösungen anzeigen` 
              : `Show all ${tiles.length} solutions`
            }
            <span className="text-lg">↓</span>
          </button>
        </div>
      )}

      {/* Show Less Button */}
      {showAll && hasMore && (
        <div className="text-center pt-4">
          <button
            onClick={() => {
              setShowAll(false);
              setVisibleIndices(new Set());
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {language === 'de' ? 'Weniger anzeigen' : 'Show less'}
            <span className="text-lg">↑</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SolutionTileGrid;
