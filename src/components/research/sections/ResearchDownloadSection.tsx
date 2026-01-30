import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { DownloadData } from '@/data/research/types';
import { Download, FileText, Check } from 'lucide-react';

interface ResearchDownloadSectionProps {
  data: DownloadData;
}

const ResearchDownloadSection: React.FC<ResearchDownloadSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="download"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-muted/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Download Card */}
        <div className="max-w-xl mx-auto">
          <div className="p-8 rounded-2xl bg-card border border-border/50 text-center">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-1">{data.document.title[language]}</h3>
            <p className="text-muted-foreground mb-4">{data.document.subtitle[language]}</p>

            {/* Meta */}
            <div className="flex justify-center gap-4 mb-6 text-sm text-muted-foreground">
              <span>{data.document.wordCount} {language === 'en' ? 'words' : 'Wörter'}</span>
              <span>•</span>
              <span>{data.document.style[language]}</span>
            </div>

            {/* What's Inside */}
            <div className="text-left mb-6 p-4 rounded-xl bg-muted/50">
              <h4 className="font-medium mb-3 text-sm">
                {language === 'en' ? "What's Inside:" : 'Inhalt:'}
              </h4>
              <ul className="space-y-2">
                {data.document.whatsInside.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Button size="lg" className="w-full gap-2" disabled>
              <Download className="w-5 h-5" />
              {data.cta.text[language]}
            </Button>

            {/* Note */}
            <p className="text-xs text-muted-foreground mt-3">
              {data.note[language]}
            </p>

            {/* Coming Soon Badge */}
            <p className="text-xs text-primary mt-2 font-medium">
              {language === 'en' ? 'Coming Soon' : 'Demnächst verfügbar'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchDownloadSection;
