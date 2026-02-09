import React, { useState, useEffect } from 'react';
import { Challenge, ChallengeSolution, solutionTypeConfig } from '@/data/challenges';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Target, 
  Shield, 
  TrendingUp, 
  CheckCircle2, 
  Phone,
  ArrowRight,
  ChevronDown,
  AlertTriangle,
  BookOpen,
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

interface SolutionAccordionProps {
  solution: ChallengeSolution;
  isExpanded: boolean;
  onToggle: () => void;
  onOpenBooking: () => void;
}

const SolutionAccordion: React.FC<SolutionAccordionProps> = ({ solution, isExpanded, onToggle, onOpenBooking }) => {
  const { language } = useLanguage();
  const config = solutionTypeConfig[solution.type];
  const isPremium = solution.type === 'sprint' || solution.type === 'transformation';
  
  return (
    <div 
      className={cn(
        "rounded-xl border-2 overflow-hidden transition-all duration-300",
        isPremium 
          ? "border-primary/30 bg-primary/5" 
          : "border-border bg-card",
        isExpanded && "shadow-lg"
      )}
    >
      {/* Header - Always visible */}
      <button
        onClick={onToggle}
        className="w-full p-4 md:p-5 flex items-center gap-4 text-left hover:bg-muted/30 transition-colors"
      >
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <solution.icon className="w-4 h-4 text-primary shrink-0" />
            <h4 className="font-display text-lg font-bold text-foreground">
              {language === 'de' ? solution.nameDe : solution.nameEn}
            </h4>
            {isPremium && (
              <Badge variant="secondary" className="text-[10px] bg-primary/10 text-primary border-0">
                {language === 'de' ? 'BELIEBT' : 'POPULAR'}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
            {language === 'de' ? solution.impactDe : solution.impactEn}
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
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

        <ChevronDown className={cn(
          "w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0",
          isExpanded && "rotate-180"
        )} />
      </button>

      {/* Expandable Content */}
      <div className={cn(
        "grid transition-all duration-300 ease-in-out",
        isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}>
        <div className="overflow-hidden">
          <div className="p-4 md:p-5 pt-0 border-t border-border/50 space-y-4">
            {/* Mobile meta */}
            <div className="flex items-center gap-3 sm:hidden">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
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

            {/* What We Do */}
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                {language === 'de' ? 'Was wir machen' : 'What We Do'}
              </h5>
              <ul className="space-y-1.5">
                {(language === 'de' ? solution.whatWeDoDe : solution.whatWeDoEn).map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.guaranteeEn && (
                <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400 mb-1">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      {language === 'de' ? 'Garantie' : 'Guarantee'}
                    </span>
                  </div>
                  <p className="text-sm text-foreground">
                    {language === 'de' ? solution.guaranteeDe : solution.guaranteeEn}
                  </p>
                </div>
              )}
              {solution.roi && (
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-1.5 text-primary mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide">ROI</span>
                  </div>
                  <p className="text-sm text-foreground font-semibold">{solution.roi}</p>
                </div>
              )}
            </div>

            {/* Related Content */}
            {(solution.relatedPlaybooks?.length || solution.relatedCases?.length) && (
              <div className="flex flex-wrap gap-2">
                {solution.relatedPlaybooks?.map((playbook) => (
                  <Badge key={playbook} variant="outline" className="text-xs gap-1">
                    <BookOpen className="w-3 h-3" />
                    Playbook
                  </Badge>
                ))}
                {solution.relatedCases?.map((caseStudy) => (
                  <Badge key={caseStudy} variant="outline" className="text-xs gap-1">
                    <FileText className="w-3 h-3" />
                    Case Study
                  </Badge>
                ))}
              </div>
            )}

            {/* CTA */}
            <Button 
              variant={isPremium ? "default" : "outline"}
              className={cn("w-full group", isPremium && "shadow-brutal hover-brutal")}
              onClick={onOpenBooking}
            >
              <Phone className="mr-2 w-4 h-4" />
              {solution.investment === 'FREE'
                ? (language === 'de' ? 'Jetzt starten' : 'Start Now')
                : (language === 'de' ? 'Termin buchen' : 'Book a Call')
              }
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ChallengeDetailModalProps {
  challenge: Challenge | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChallengeDetailModal: React.FC<ChallengeDetailModalProps> = ({
  challenge,
  open,
  onOpenChange,
}) => {
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Auto-expand first premium solution or first solution
  useEffect(() => {
    if (open && challenge) {
      const premium = challenge.solutions.find(s => s.type === 'sprint' || s.type === 'transformation');
      setExpandedId(premium?.id || challenge.solutions[0]?.id || null);
    }
  }, [open, challenge]);

  if (!challenge) return null;

  const Icon = challenge.icon;

  const scrollToSolution = (id: string) => {
    setExpandedId(id);
    setTimeout(() => {
      document.getElementById(`solution-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto p-0">
        {/* Sticky Header */}
        <DialogHeader className="p-6 pb-4 sticky top-0 bg-background/95 backdrop-blur-sm z-10 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <DialogTitle className="font-display text-xl md:text-2xl">
                {language === 'de' ? challenge.nameDe : challenge.nameEn}
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                {language === 'de' ? 'Wähle die passende Lösung' : 'Choose the right solution'}
              </p>
            </div>
          </div>
          
          {/* Jump Links */}
          <div className="flex flex-wrap gap-2">
            {challenge.solutions.map((solution) => {
              const config = solutionTypeConfig[solution.type];
              return (
                <button
                  key={solution.id}
                  onClick={() => scrollToSolution(solution.id)}
                  className={cn(
                    "text-xs px-3 py-1.5 rounded-full border transition-all",
                    expandedId === solution.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : cn(config.colorClass, "hover:opacity-80")
                  )}
                >
                  {language === 'de' ? solution.nameDe : solution.nameEn}
                </button>
              );
            })}
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Problem Section */}
          <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/10">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              {language === 'de' ? 'Das Problem' : 'The Problem'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === 'de' ? challenge.problemDe : challenge.problemEn}
            </p>
            
            {/* Symptoms */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-destructive/80 mb-2">
                {language === 'de' ? 'Symptome:' : 'Symptoms:'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {(language === 'de' ? challenge.symptomsDe : challenge.symptomsEn).map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                    {symptom}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why This Happens */}
          <div className="p-5 rounded-xl bg-muted/50 border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              {language === 'de' ? 'Warum das passiert' : 'Why This Happens'}
            </h3>
            <p className="text-foreground font-medium mb-3">
              {language === 'de' ? challenge.whyThisHappensHeadlineDe : challenge.whyThisHappensHeadlineEn}
            </p>
            <ul className="space-y-2">
              {(language === 'de' ? challenge.whyThisHappensDe : challenge.whyThisHappensEn).map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-medium shrink-0">
                    {idx + 1}
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Accordion */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              {language === 'de' ? 'Deine Optionen' : 'Your Options'}
            </h3>
            <div className="space-y-3">
              {challenge.solutions.map((solution) => (
                <div key={solution.id} id={`solution-${solution.id}`}>
                  <SolutionAccordion
                    solution={solution}
                    isExpanded={expandedId === solution.id}
                    onToggle={() => setExpandedId(expandedId === solution.id ? null : solution.id)}
                    onOpenBooking={() => setIsBookingModalOpen(true)}
                  />
                </div>
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
              onClick={() => setIsBookingModalOpen(true)}
            >
              <Phone className="mr-2 w-4 h-4" />
              {language === 'de' ? 'Kostenloses Gespräch buchen' : 'Book a Free Call'}
            </Button>
          </div>
        </div>
        
        <FilloutBookingModal
          formSlug="inflection-call"
          source="solutions"
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          title={language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ChallengeDetailModal;
