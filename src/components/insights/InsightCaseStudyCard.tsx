import React from 'react';
import { Card } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { InsightCaseStudy, getCategoryBadgeColor } from '@/data/insights';
import InsightReactions from './InsightReactions';

interface InsightCaseStudyCardProps {
  caseStudy: InsightCaseStudy;
  index: number;
}

const InsightCaseStudyCard: React.FC<InsightCaseStudyCardProps> = ({ caseStudy, index }) => {
  const { language } = useLanguage();
  const badgeColor = getCategoryBadgeColor(caseStudy.category);

  return (
    <Card
      className="group overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in cursor-pointer bg-card/80"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="p-6">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-bold rounded-full bg-muted text-foreground uppercase tracking-wider">
            <FileText className="w-3 h-3" />
            Case Study
          </span>
          {caseStudy.isAnonymized && (
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-muted/50 text-muted-foreground">
              {language === 'de' ? 'Anonymisiert' : 'Anonymized'}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3">
          {language === 'de' ? caseStudy.title.de : caseStudy.title.en}
        </h3>

        {/* Teaser */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {language === 'de' ? caseStudy.teaser.de : caseStudy.teaser.en}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <span>{caseStudy.persona}</span>
          <span>·</span>
          <span>{caseStudy.readingTime} min</span>
        </div>

        {/* Reactions */}
        <div className="border-t border-border/50 pt-3">
          <InsightReactions
            insightId={caseStudy.id}
            reactions={caseStudy.reactions}
            size="sm"
          />
        </div>
      </div>
    </Card>
  );
};

export default InsightCaseStudyCard;
