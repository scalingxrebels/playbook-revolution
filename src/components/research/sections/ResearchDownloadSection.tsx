import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { DownloadData } from '@/data/research/types';
import { Download, FileText, Check } from 'lucide-react';
import FilloutDownloadModal from '@/components/forms/FilloutDownloadModal';
import { getAssetById } from '@/data/downloadRegistry';

interface ResearchDownloadSectionProps {
  data: DownloadData;
  researchType: 'amf' | 'anst' | 'sst' | 'unified';
}

const ResearchDownloadSection: React.FC<ResearchDownloadSectionProps> = ({ data, researchType }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const asset = getAssetById(`research-${researchType}`);

  return (
    <section
      id="download"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container max-w-4xl mx-auto px-4">
        {/* Download Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>

          {/* Title */}
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-1">{data.document.title[language]}</h2>
          <p className="text-muted-foreground mb-4">{data.document.subtitle[language]}</p>

          {/* Meta */}
          <div className="flex justify-center gap-4 mb-6 text-sm text-muted-foreground">
            <span>{data.document.wordCount} {language === 'en' ? 'words' : 'Wörter'}</span>
            <span>•</span>
            <span>{data.document.style[language]}</span>
          </div>

          {/* What's Inside */}
          <div className="text-left mb-8 p-6 rounded-xl bg-muted/50 max-w-xl mx-auto">
            <h4 className="font-medium mb-3 text-sm">
              {language === 'en' ? "What's Inside:" : 'Inhalt:'}
            </h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {data.document.whatsInside.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Button 
            size="xl" 
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            onClick={() => setIsDownloadModalOpen(true)}
          >
            <Download className="w-5 h-5 mr-2" />
            {data.cta.text[language]}
          </Button>

          {/* Note */}
          <p className="text-xs text-muted-foreground mt-4">
            {data.note[language]}
          </p>
        </div>
      </div>

      <FilloutDownloadModal
        asset={asset}
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </section>
  );
};

export default ResearchDownloadSection;
