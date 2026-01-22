import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SolutionTile, getTransformationTierLabel } from '@/data/solutionTiles';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SolutionTileCardProps {
  tile: SolutionTile;
}

const SolutionTileCard: React.FC<SolutionTileCardProps> = ({ tile }) => {
  const { language } = useLanguage();
  const lang = language as 'en' | 'de';

  const headline = lang === 'de' ? tile.headlineDe : tile.headlineEn;
  const problem = lang === 'de' ? tile.problemDe : tile.problemEn;
  const solution = lang === 'de' ? tile.solutionDe : tile.solutionEn;
  const deliverables = lang === 'de' ? tile.deliverablesDe : tile.deliverablesEn;
  const impact = lang === 'de' ? tile.impactDe : tile.impactEn;
  const primaryCta = lang === 'de' ? tile.primaryCtaDe : tile.primaryCtaEn;
  const secondaryCta = lang === 'de' ? tile.secondaryCtaDe : tile.secondaryCtaEn;

  const handlePrimaryClick = () => {
    if (tile.primaryCtaAction === 'external' && tile.primaryCtaUrl) {
      window.open(tile.primaryCtaUrl, '_blank');
    } else if (tile.primaryCtaAction === 'book-call' && tile.primaryCtaUrl) {
      window.open(tile.primaryCtaUrl, '_blank');
    } else {
      // For 'request' action, could open a modal or navigate
      window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank');
    }
  };

  const getSolutionTypeLabel = () => {
    if (tile.transformationTier) {
      return getTransformationTierLabel(tile.transformationTier, lang);
    }
    const typeLabels: Record<string, { en: string; de: string }> = {
      'insights': { en: 'Insights', de: 'Insights' },
      'decision-support': { en: 'Decision Support', de: 'Decision Support' },
      'transformation': { en: 'Transformation', de: 'Transformation' },
      'training': { en: 'Training', de: 'Training' },
      'bespoke': { en: 'Bespoke', de: 'Bespoke' },
      'retainer': { en: 'Retainer', de: 'Retainer' },
      'keynote': { en: 'Keynote', de: 'Keynote' },
      'tools': { en: 'Tools', de: 'Tools' }
    };
    return typeLabels[tile.solutionType]?.[lang] || tile.solutionType;
  };

  return (
    <Card className={cn(
      "group relative h-full flex flex-col overflow-hidden transition-all duration-300",
      "hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30",
      tile.priceTag === 'free' && "border-accent/50"
    )}>
      <CardContent className="p-5 flex flex-col h-full">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge 
            variant="secondary" 
            className="text-xs font-medium"
          >
            {getSolutionTypeLabel()}
          </Badge>
          <Badge 
            variant={tile.priceTag === 'free' ? 'default' : 'outline'}
            className={cn(
              "text-xs font-semibold",
              tile.priceTag === 'free' && "bg-accent text-accent-foreground"
            )}
          >
            {tile.price}
          </Badge>
        </div>

        {/* Headline */}
        <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
          {headline}
        </h3>

        {/* Content */}
        <div className="flex-1 space-y-3 text-sm">
          {/* Problem */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">{lang === 'de' ? 'Problem: ' : 'Problem: '}</span>
              {problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">{lang === 'de' ? 'Lösung: ' : 'Solution: '}</span>
              {solution}
            </p>
          </div>

          {/* Deliverables */}
          <div className="space-y-1.5">
            {deliverables.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Impact */}
          <div className="pt-2 border-t border-border">
            <p className="text-sm font-medium text-accent">
              {impact}
            </p>
          </div>
        </div>

        {/* Add-on Pricing (if applicable) */}
        {tile.addOnPricing && (
          <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                {lang === 'de' ? tile.addOnPricing.baseLabelDe : tile.addOnPricing.baseLabelEn}:
              </span>
              <span className="font-semibold">{tile.addOnPricing.basePrice}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-muted-foreground">
                {lang === 'de' ? tile.addOnPricing.bridgeLabelDe : tile.addOnPricing.bridgeLabelEn}:
              </span>
              <span className="font-semibold text-accent">{tile.addOnPricing.bridgePrice}</span>
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="mt-4 pt-4 border-t border-border space-y-2">
          <Button 
            onClick={handlePrimaryClick}
            className="w-full"
            variant={tile.priceTag === 'free' ? 'default' : 'outline'}
          >
            {primaryCta}
            {tile.primaryCtaAction === 'external' ? (
              <ExternalLink className="w-4 h-4 ml-2" />
            ) : (
              <ArrowRight className="w-4 h-4 ml-2" />
            )}
          </Button>
          
          <a 
            href={tile.secondaryCtaUrl}
            className="block text-center text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            {secondaryCta}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionTileCard;
