import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import type { FinalCTAData, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: FinalCTAData;
}

const PlaybookFinalCTASection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          {t(data.headline)}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t(data.subline)}
        </p>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {data.trustSignals.map((signal, i) => (
            <Badge key={i} variant="outline" className="gap-2">
              <CheckCircle2 className="w-3 h-3 text-primary" />
              {t(signal)}
            </Badge>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <a href={data.bookingUrl} target="_blank" rel="noopener noreferrer">
              {language === 'de' ? 'Kostenloses Gespräch buchen' : 'Book Free Call'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={data.downloadUrl} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              {language === 'de' ? 'Playbook herunterladen' : 'Download Playbook'}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlaybookFinalCTASection;
