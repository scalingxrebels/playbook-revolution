import React from 'react';
import { Challenge, ChallengeSolution, solutionTypeConfig } from '@/data/challenges';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, AlertTriangle, Zap, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChallengeCardProps {
  challenge: Challenge;
  onOpenDetail: () => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onOpenDetail }) => {
  const { language } = useLanguage();
  const Icon = challenge.icon;

  const isPremium = (type: string) => type === 'sprint' || type === 'transformation';

  return (
    <Card className="shadow-brutal border-2 border-border bg-card overflow-hidden animate-fade-in">
      <CardContent className="p-6 md:p-8 lg:p-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
            <Icon className="w-6 h-6 md:w-7 md:h-7" />
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
        <div className="mb-8 p-4 md:p-6 rounded-xl bg-destructive/5 border border-destructive/10">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">
              {language === 'de' ? 'Warum das passiert' : 'Why This Happens'}
            </h3>
          </div>
          <p className="text-foreground font-medium mb-3">
            {language === 'de' ? challenge.whyThisHappensHeadlineDe : challenge.whyThisHappensHeadlineEn}
          </p>
          <ul className="space-y-2">
            {(language === 'de' ? challenge.whyThisHappensDe : challenge.whyThisHappensEn).map((reason, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-destructive/50 mt-0.5 shrink-0" />
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions Journey */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">
              {language === 'de' ? 'Deine Lösungswege' : 'Your Solution Paths'}
            </h3>
          </div>
          
          {/* Solution Tier Cards */}
          <div className="space-y-3">
            {challenge.solutions.map((solution: ChallengeSolution, idx) => {
              const config = solutionTypeConfig[solution.type];
              const premium = isPremium(solution.type);
              
              return (
                <div
                  key={solution.id}
                  onClick={onOpenDetail}
                  className={cn(
                    "group relative flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200",
                    premium
                      ? "bg-primary/5 border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                      : "bg-background border-border hover:border-primary/30 hover:bg-muted/30"
                  )}
                >

                    {/* Tier Badge */}
                    <Badge 
                      variant="outline" 
                      className={cn("shrink-0 text-xs font-bold", config.colorClass)}
                    >
                      {config.badge}
                    </Badge>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <solution.icon className="w-4 h-4 text-primary shrink-0" />
                        <span className="font-semibold text-foreground">
                          {language === 'de' ? solution.nameDe : solution.nameEn}
                        </span>
                        {premium && (
                          <Badge variant="secondary" className="text-[10px] bg-primary/10 text-primary border-0">
                            {language === 'de' ? 'EMPFOHLEN' : 'RECOMMENDED'}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                        {language === 'de' ? solution.impactDe : solution.impactEn}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="hidden sm:flex items-center gap-3 shrink-0">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {solution.duration}
                      </div>
                      <Badge 
                        variant={solution.investment === 'FREE' ? 'default' : 'outline'}
                        className={cn(
                          "font-bold",
                          solution.investment === 'FREE' && "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                        )}
                      >
                        {solution.investment === 'FREE' 
                          ? (language === 'de' ? 'KOSTENLOS' : 'FREE')
                          : solution.investment
                        }
                      </Badge>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                );
            })}
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
