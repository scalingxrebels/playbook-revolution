import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download } from 'lucide-react';
import type { PlaybookHeroData, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: PlaybookHeroData;
}

const PlaybookHeroSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];

  return (
    <section className={`relative min-h-[70vh] flex items-center py-24 ${data.gradient}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <p className="text-sm text-muted-foreground mb-4">
          {t(data.breadcrumb)}
        </p>

        {/* Badge */}
        <Badge variant="outline" className="mb-6 bg-background/80 backdrop-blur-sm">
          {t(data.badge)}
        </Badge>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
          {data.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl">
          {t(data.subtitle)}
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl">
          {t(data.description)}
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          {data.trustBadges.map((badge, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {t(badge)}
            </Badge>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href={data.bookingUrl} target="_blank" rel="noopener noreferrer">
              {language === 'de' ? 'Gespräch buchen' : 'Book a Call'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={data.downloadUrl} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              {language === 'de' ? 'Playbook laden' : 'Download Playbook'}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlaybookHeroSection;
