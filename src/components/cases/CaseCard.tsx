import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ClientCaseStudy } from '@/data/cases/types';

interface CaseCardProps {
  caseStudy: ClientCaseStudy;
  index: number;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseStudy, index }) => {
  const { language } = useLanguage();
  
  // Get first sentence of challenge for teaser
  const challengeTeaser = (language === 'de' ? caseStudy.challenge.de : caseStudy.challenge.en).split('.')[0] + '.';

  return (
    <Card 
      className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient Header Bar */}
      <div className={`h-1.5 bg-gradient-to-r ${caseStudy.gradient}`} />
      
      <div className="p-6">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-xs">
            {caseStudy.stage}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {caseStudy.industry}
          </Badge>
        </div>

        {/* Headline */}
        <h3 className="font-display text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {language === 'de' ? caseStudy.headline.de : caseStudy.headline.en}
        </h3>

        {/* Challenge Teaser (Story-First) */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {challengeTeaser}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {caseStudy.heroMetrics.slice(0, 3).map((metric, idx) => (
            <div 
              key={idx} 
              className="text-center p-2 bg-muted/50 rounded-lg"
            >
              <p className="text-lg font-bold text-primary">{metric.impact}</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Investment & ROI */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 py-2 border-y border-border/50">
          <span>Investment: <span className="font-semibold text-foreground">{caseStudy.investment}</span></span>
          <span className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-emerald-500" />
            ROI: <span className="font-semibold text-emerald-500">{caseStudy.roi}</span>
          </span>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <Button 
            asChild
            variant="default" 
            size="sm" 
            className="flex-1 bg-primary text-primary-foreground"
          >
            <Link to={`/cases/${caseStudy.slug}`}>
              {language === 'de' ? 'Case lesen' : 'Read Case'}
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          {caseStudy.downloadUrl && (
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="border-border/50"
            >
              <a href={caseStudy.downloadUrl} download>
                <Download className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CaseCard;
