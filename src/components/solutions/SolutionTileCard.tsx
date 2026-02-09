import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SolutionTile, getTransformationTierLabel, SolutionTypeId } from '@/data/solutionTiles';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, ExternalLink, Lightbulb, Target, Rocket, Compass, Mic, Wrench, Building2, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

interface SolutionTileCardProps {
  tile: SolutionTile;
  index?: number;
}

// Gradient mapping per solution type
const typeGradients: Record<Exclude<SolutionTypeId, 'all'>, string> = {
  'insights': 'from-blue-500 to-cyan-500',
  'decision-support': 'from-purple-500 to-violet-500',
  'tools': 'from-slate-500 to-zinc-500',
  'transformation': 'from-orange-500 to-amber-500',
  'advisory': 'from-rose-500 to-pink-500',
  'keynote': 'from-yellow-500 to-orange-500',
};

// Icon mapping per solution type
const typeIcons: Record<Exclude<SolutionTypeId, 'all'>, React.ElementType> = {
  'insights': Lightbulb,
  'decision-support': Target,
  'tools': Wrench,
  'transformation': Rocket,
  'advisory': Compass,
  'keynote': Mic,
};

// Map primaryCtaUrl to valid FormSlug types
type FormSlug = 'inflection-call' | 'expert-session' | 'ml-sync' | 'ml-deep-dive' | 'ah-sync' | 'ah-deep-dive' | 'fm-sync' | 'fm-deep-dive';

const isValidFormSlug = (slug: string): slug is FormSlug => {
  return ['inflection-call', 'expert-session', 'ml-sync', 'ml-deep-dive', 'ah-sync', 'ah-deep-dive', 'fm-sync', 'fm-deep-dive'].includes(slug);
};

const SolutionTileCard: React.FC<SolutionTileCardProps> = ({ tile, index = 0 }) => {
  const { language } = useLanguage();
  const lang = language as 'en' | 'de';
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const headline = lang === 'de' ? tile.headlineDe : tile.headlineEn;
  const problem = lang === 'de' ? tile.problemDe : tile.problemEn;
  const solution = lang === 'de' ? tile.solutionDe : tile.solutionEn;
  const deliverables = lang === 'de' ? tile.deliverablesDe : tile.deliverablesEn;
  const impact = lang === 'de' ? tile.impactDe : tile.impactEn;
  const primaryCta = lang === 'de' ? tile.primaryCtaDe : tile.primaryCtaEn;
  const secondaryCta = lang === 'de' ? tile.secondaryCtaDe : tile.secondaryCtaEn;

  const gradient = typeGradients[tile.solutionType];
  const Icon = typeIcons[tile.solutionType];

  const handlePrimaryClick = () => {
    if (tile.primaryCtaAction === 'disabled') {
      return; // Do nothing for disabled buttons
    }
    // Handle book-call action with modal instead of external link
    if (tile.primaryCtaAction === 'book-call' && isValidFormSlug(tile.primaryCtaUrl)) {
      setIsBookingModalOpen(true);
      return;
    }
    if (tile.primaryCtaAction === 'external' || tile.primaryCtaAction === 'open-tool') {
      window.open(tile.primaryCtaUrl, '_blank');
    } else if (tile.primaryCtaUrl) {
      window.location.href = tile.primaryCtaUrl;
    }
  };

  // Determine the form slug for the booking modal
  const formSlug: FormSlug = isValidFormSlug(tile.primaryCtaUrl) ? tile.primaryCtaUrl : 'inflection-call';

  const getSolutionTypeLabel = () => {
    if (tile.transformationTier) {
      return getTransformationTierLabel(tile.transformationTier, lang);
    }
    const typeLabels: Record<string, { en: string; de: string }> = {
      'insights': { en: 'Insights & Clarity', de: 'Insights & Clarity' },
      'decision-support': { en: 'Decision Support', de: 'Decision Support' },
      'tools': { en: 'AI-Powered Tools', de: 'AI-Powered Tools' },
      'transformation': { en: 'Transformation', de: 'Transformation' },
      'advisory': { en: 'Strategic Advisory', de: 'Strategic Advisory' },
      'keynote': { en: 'Workshops & Keynotes', de: 'Workshops & Keynotes' },
      'portfolio': { en: 'Portfolio & Investment', de: 'Portfolio & Investment' }
    };
    return typeLabels[tile.solutionType]?.[lang] || tile.solutionType;
  };

  const isExternalAction = tile.primaryCtaAction === 'external' || tile.primaryCtaAction === 'open-tool';
  const isDisabled = tile.primaryCtaAction === 'disabled';

  return (
    <Card 
      className={cn(
        "group relative h-full flex flex-col overflow-hidden transition-all duration-300",
        "hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30",
        (tile.priceTag === 'free' || tile.solutionType === 'tools') && "border-accent/50"
      )}
      style={{
        animationDelay: `${index * 50}ms`
      }}
    >
      {/* Gradient Accent on hover */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300",
        gradient
      )} />

      {/* Hover Arrow */}
      <ArrowRight className="absolute top-5 right-5 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 z-10" />

      <CardContent className="p-5 flex flex-col h-full relative">
        {/* Gradient Icon */}
        <div className={cn(
          "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300",
          gradient
        )}>
          <Icon className="w-6 h-6" />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge 
            variant="outline" 
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
          {tile.partnerBadge && (
            <Badge 
              className="text-xs font-medium bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
            >
              <Star className="w-3 h-3 mr-1" />
              {lang === 'de' ? tile.partnerBadge.labelDe : tile.partnerBadge.labelEn}
            </Badge>
          )}
        </div>

        {/* Headline */}
        <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
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
            {deliverables.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
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
                {lang === 'de' ? 'Basis:' : 'Base:'}
              </span>
              <span className="font-semibold">{tile.addOnPricing.base}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-muted-foreground">
                {lang === 'de' ? 'Mit Roadmap:' : 'With Roadmap:'}
              </span>
              <span className="font-semibold text-accent">{tile.addOnPricing.bridge}</span>
            </div>
          </div>
        )}

        {/* CTAs */}
        {(() => {
          const useAccentStyle = tile.priceTag === 'free' || tile.solutionType === 'tools';
          return (
            <div className="mt-4 pt-4 border-t border-border space-y-2">
              <Button 
                onClick={handlePrimaryClick}
                className={cn(
                  "w-full",
                  useAccentStyle && !isDisabled && "bg-gradient-to-r from-primary to-primary/80",
                  isDisabled && "cursor-not-allowed opacity-60"
                )}
                variant={isDisabled ? 'outline' : (useAccentStyle ? 'default' : 'outline')}
                disabled={isDisabled}
              >
                {primaryCta}
                {!isDisabled && (isExternalAction ? (
                  <ExternalLink className="w-4 h-4 ml-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2" />
                ))}
              </Button>
              
              {secondaryCta && tile.secondaryCtaUrl && (
                <a 
                  href={tile.secondaryCtaUrl}
                  className="block text-center text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {secondaryCta}
                </a>
              )}
            </div>
          );
        })()}
      </CardContent>
      
      {/* Booking Modal for book-call actions */}
      {tile.primaryCtaAction === 'book-call' && (
        <FilloutBookingModal
          formSlug={formSlug}
          source={`solutions-tile-${tile.id}`}
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}
    </Card>
  );
};

export default SolutionTileCard;
