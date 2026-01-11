import React from 'react';
import { Challenge, ChallengeSolution } from '@/data/challenges';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  Target, 
  Shield, 
  TrendingUp, 
  CheckCircle2, 
  Phone,
  ArrowRight 
} from 'lucide-react';

interface ChallengeDetailModalProps {
  challenge: Challenge | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SolutionDetailCard: React.FC<{ solution: ChallengeSolution }> = ({ solution }) => {
  const { language } = useLanguage();
  
  return (
    <Card className="border-2 border-border shadow-brutal-sm hover:border-primary/30 transition-colors">
      <CardContent className="p-5 md:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <h4 className="font-display text-lg font-bold text-foreground mb-1">
              {language === 'de' ? solution.nameDe : solution.nameEn}
            </h4>
            <p className="text-sm text-muted-foreground">
              {language === 'de' ? solution.impactDe : solution.impactEn}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge variant="secondary">
              <Clock className="w-3 h-3 mr-1" />
              {solution.duration}
            </Badge>
            <Badge 
              variant={solution.investment === 'FREE' ? 'default' : 'outline'}
              className={solution.investment === 'FREE' ? 'bg-green-500/10 text-green-600 border-green-500/20' : ''}
            >
              {solution.investment === 'FREE' 
                ? (language === 'de' ? 'KOSTENLOS' : 'FREE')
                : solution.investment
              }
            </Badge>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-4">
          <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            {language === 'de' ? 'Was wir machen' : 'What We Do'}
          </h5>
          <ul className="space-y-1.5">
            {(language === 'de' ? solution.whatWeDoDe : solution.whatWeDoEn).map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Guarantee & ROI */}
        <div className="flex flex-wrap gap-2 mb-4">
          {solution.guaranteeEn && (
            <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20">
              <Shield className="w-3 h-3 mr-1" />
              {language === 'de' ? solution.guaranteeDe : solution.guaranteeEn}
            </Badge>
          )}
          {solution.roi && (
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              <TrendingUp className="w-3 h-3 mr-1" />
              {solution.roi} ROI
            </Badge>
          )}
        </div>

        {/* CTA */}
        <Button 
          variant="outline" 
          className="w-full shadow-brutal-sm hover-brutal group"
          onClick={() => window.open('https://calendly.com/scalingx', '_blank')}
        >
          <Phone className="mr-2 w-4 h-4" />
          {language === 'de' ? 'Termin buchen' : 'Book a Call'}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

const ChallengeDetailModal: React.FC<ChallengeDetailModalProps> = ({
  challenge,
  open,
  onOpenChange,
}) => {
  const { language } = useLanguage();

  if (!challenge) return null;

  const Icon = challenge.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0 sticky top-0 bg-background z-10 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Icon className="w-5 h-5" />
            </div>
            <DialogTitle className="font-display text-xl md:text-2xl">
              {language === 'de' ? challenge.nameDe : challenge.nameEn}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-8">
          {/* Problem */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">
              {language === 'de' ? 'Das Problem' : 'The Problem'}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'de' ? challenge.problemDe : challenge.problemEn}
            </p>
          </div>

          {/* Why This Happens */}
          <div className="p-5 rounded-xl bg-muted/50 border border-border">
            <h3 className="font-semibold text-foreground mb-3">
              {language === 'de' ? 'Warum das passiert' : 'Why This Happens'}
            </h3>
            <ul className="space-y-2">
              {(language === 'de' ? challenge.whyThisHappensDe : challenge.whyThisHappensEn).map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {idx + 1}
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {language === 'de' ? 'Deine Optionen' : 'Your Options'}
            </h3>
            <div className="grid gap-4">
              {challenge.solutions.map((solution) => (
                <SolutionDetailCard key={solution.id} solution={solution} />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-4 border-t border-border">
            <p className="text-muted-foreground mb-4">
              {language === 'de' 
                ? 'Nicht sicher, welche Option die richtige ist?' 
                : 'Not sure which option is right?'
              }
            </p>
            <Button 
              size="lg"
              className="shadow-brutal hover-brutal"
              onClick={() => window.open('https://calendly.com/scalingx', '_blank')}
            >
              <Phone className="mr-2 w-4 h-4" />
              {language === 'de' ? 'Kostenloses Gespräch buchen' : 'Book a Free Call'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChallengeDetailModal;
