import React from 'react';
import { Challenge, ChallengeSolution } from '@/data/challenges';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, AlertTriangle, Sparkles } from 'lucide-react';

interface ChallengeCardProps {
  challenge: Challenge;
  onOpenDetail: () => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onOpenDetail }) => {
  const { language } = useLanguage();
  const Icon = challenge.icon;

  return (
    <Card className="shadow-brutal border-2 border-border bg-card overflow-hidden">
      <CardContent className="p-6 md:p-8 lg:p-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
              {language === 'de' ? challenge.nameDe : challenge.nameEn}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'de' ? challenge.problemDe : challenge.problemEn}
            </p>
          </div>
        </div>

        {/* Why This Happens */}
        <div className="mb-8 p-4 md:p-6 rounded-xl bg-muted/50 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-accent" />
            <h3 className="font-semibold text-foreground">
              {language === 'de' ? 'Warum das passiert' : 'Why This Happens'}
            </h3>
          </div>
          <ul className="space-y-2">
            {(language === 'de' ? challenge.whyThisHappensDe : challenge.whyThisHappensEn).map((reason, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions Preview */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">
              {language === 'de' ? 'Lösungsoptionen' : 'Solution Options'}
            </h3>
          </div>
          <div className="grid gap-3">
            {challenge.solutions.slice(0, 4).map((solution: ChallengeSolution) => (
              <div
                key={solution.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-foreground text-sm">
                      {language === 'de' ? solution.nameDe : solution.nameEn}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {solution.duration}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    {language === 'de' ? solution.impactDe : solution.impactEn}
                  </p>
                </div>
                <div className="flex-shrink-0">
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
            ))}
            {challenge.solutions.length > 4 && (
              <p className="text-xs text-muted-foreground text-center">
                +{challenge.solutions.length - 4} {language === 'de' ? 'weitere Optionen' : 'more options'}
              </p>
            )}
          </div>
        </div>

        {/* CTA */}
        <Button 
          size="lg" 
          onClick={onOpenDetail}
          className="w-full shadow-brutal hover-brutal group"
        >
          {language === 'de' ? challenge.ctaTextDe : challenge.ctaTextEn}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;
