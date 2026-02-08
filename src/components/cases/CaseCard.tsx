import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ClientCaseStudy } from '@/data/cases/types';
import FilloutDownloadModal from '@/components/forms/FilloutDownloadModal';
import { getAssetById } from '@/data/downloadRegistry';

interface CaseCardProps {
  caseStudy: ClientCaseStudy;
  index: number;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseStudy, index }) => {
  const { language } = useLanguage();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  
  // Asset-ID from Case-Slug
  const assetId = `case-${caseStudy.slug}`;
  const downloadAsset = getAssetById(assetId);
  
  // Use cardSummary if available, otherwise fall back to result
  const description = caseStudy.cardSummary 
    ? (language === 'de' ? caseStudy.cardSummary.de : caseStudy.cardSummary.en)
    : (language === 'de' ? caseStudy.result.de : caseStudy.result.en);

  return (
    <>
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

          {/* Controlled 2-Line Description from result field */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>

          {/* Key Metrics - Short single-line labels */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {caseStudy.heroMetrics.slice(0, 3).map((metric, idx) => (
              <div 
                key={idx} 
                className="text-center p-2 bg-muted/50 rounded-lg"
              >
                <p className="text-lg font-bold text-primary">{metric.impact}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide truncate">
                  {metric.label}
                </p>
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

          {/* Dual CTA Layout */}
          <div className="flex gap-2">
            {/* Primary: Read Case */}
            <Button 
              asChild
              variant="outline" 
              size="sm" 
              className="flex-1"
            >
              <Link to={`/cases/${caseStudy.slug}`}>
                {language === 'de' ? 'Case lesen' : 'Read Case'}
              </Link>
            </Button>
            
            {/* Secondary: Download PDF (only when asset available) */}
            {downloadAsset && downloadAsset.isAvailable && (
              <Button
                size="sm"
                className="flex-1 bg-primary text-primary-foreground"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                {language === 'de' ? 'PDF' : 'PDF'}
                <Download className="w-3 h-3 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Download Modal */}
      <FilloutDownloadModal
        asset={downloadAsset}
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </>
  );
};

export default CaseCard;
