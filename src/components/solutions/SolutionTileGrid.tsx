import React from 'react';
import { SolutionTile } from '@/data/solutionTiles';
import SolutionTileCard from './SolutionTileCard';
import { useLanguage } from '@/contexts/LanguageContext';

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
  
  const visibleTiles = showAll ? tiles : tiles.slice(0, maxVisible);
  const hasMore = tiles.length > maxVisible;

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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {visibleTiles.map((tile) => (
          <SolutionTileCard key={tile.id} tile={tile} />
        ))}
      </div>

      {/* Show More Button */}
      {hasMore && !showAll && (
        <div className="text-center pt-4">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
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
            onClick={() => setShowAll(false)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {language === 'de' ? 'Weniger anzeigen' : 'Show less'}
            <span className="text-lg">↑</span>
          </button>
        </div>
      )}

      {/* Results Count */}
      <div className="text-center text-sm text-muted-foreground">
        {language === 'de' 
          ? `${visibleTiles.length} von ${tiles.length} Lösungen`
          : `${visibleTiles.length} of ${tiles.length} solutions`
        }
      </div>
    </div>
  );
};

export default SolutionTileGrid;
