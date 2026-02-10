import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ChevronDown, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import { AMFHeroData } from '@/data/research/types';
import FilloutDownloadModal from '@/components/forms/FilloutDownloadModal';
import { getAssetById } from '@/data/downloadRegistry';

interface ResearchHeroSectionProps {
  data: AMFHeroData;
  researchType?: 'amf' | 'anst' | 'sst' | 'unified';
}

const ResearchHeroSection: React.FC<ResearchHeroSectionProps> = ({ data, researchType = 'amf' }) => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const asset = getAssetById(`research-${researchType}`);

  const scrollToSection = () => {
    document.getElementById('research-why-it-matters')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
    >
      {/* Deep Space Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />

      {/* Mesh Gradient Overlay */}
      <div
        className="absolute inset-0 bg-mesh opacity-60 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />

      {/* Twinkling Stars */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px)` }}
      >
        <TwinklingStars />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[2]}px) scale(1.1)` }}
      />

      {/* Content */}
      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
        {/* Breadcrumb */}
        <Breadcrumb className="justify-center mb-6 animate-fade-in">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/expertise" className="text-muted-foreground hover:text-foreground">
                {data.breadcrumb.parent[language]}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-foreground font-medium">{data.breadcrumb.current[language]}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Badge */}
        <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <BookOpen className="w-4 h-4 mr-2" />
          Research Framework
        </Badge>

        {/* Headline */}
        <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
          <span className="block text-gradient animate-gradient bg-gradient-primary">
            {data.headline[language]}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {data.subheadline[language]}
        </p>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.25s' }}>
          {data.description[language].split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-lg text-muted-foreground/80 leading-relaxed mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {data.stats.map((stat, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-card/50 backdrop-blur-sm border border-border">
              <span className="font-bold text-primary mr-1">{stat.value}</span>
              {stat.label[language]}
            </Badge>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="xl"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
            asChild
          >
            <Link to={data.primaryCta.href}>
              {data.primaryCta.text[language]}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          {data.secondaryCta.href === '#download' ? (
            <Button
              variant="outline"
              size="lg"
              className="border-2"
              onClick={() => setIsDownloadModalOpen(true)}
            >
              <Download className="w-4 h-4 mr-2" />
              {data.secondaryCta.text[language]}
            </Button>
          ) : (
            <Button
              variant="outline"
              size="lg"
              className="border-2"
              asChild
            >
              <a href={data.secondaryCta.href} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                {data.secondaryCta.text[language]}
              </a>
            </Button>
          )}
        </div>
      </div>

      <FilloutDownloadModal
        asset={asset}
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      {/* Scroll Indicator */}
      <button
        onClick={scrollToSection}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in cursor-pointer"
        style={{ animationDelay: '1s' }}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default ResearchHeroSection;
