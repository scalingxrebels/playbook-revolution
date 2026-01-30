import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useParallaxLayers } from '@/hooks/useParallax';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TwinklingStars from '@/components/TwinklingStars';
import { FinalCTAData } from '@/data/research/types';
import { ArrowRight, Download, CheckCircle2, Sparkles } from 'lucide-react';

interface ResearchFinalCTASectionProps {
  data: FinalCTAData;
}

const ResearchFinalCTASection: React.FC<ResearchFinalCTASectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.05, 0.15, 0.25] });
  const { ref: contentRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Deep Space Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />

      {/* Mesh Gradient Overlay */}
      <div
        className="absolute inset-0 bg-mesh opacity-40 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.1)` }}
      />

      {/* Twinkling Stars */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px)` }}
      >
        <TwinklingStars />
      </div>

      {/* Radial Glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"
        style={{ transform: `translateY(${offsets[2]}px)` }}
      />

      {/* Content */}
      <div
        ref={contentRef as React.RefObject<HTMLDivElement>}
        className="container max-w-4xl mx-auto px-4 text-center relative z-10"
      >
        {/* Badge */}
        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="gradient" className="text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'de' ? 'Bereit für AI-Native Skalierung?' : 'Ready for AI-Native Scaling?'}
          </Badge>
        </div>

        {/* Headline */}
        <h2 className={`font-display text-3xl md:text-5xl font-bold mb-6 text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {data.headline[language]}
        </h2>

        {/* Subline */}
        <p className={`text-xl text-gray-300 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {data.content[language]}
        </p>

        {/* Benefits as Trust Signals */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {data.benefits.map((benefit, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90"
              style={{ transitionDelay: `${350 + i * 50}ms` }}
            >
              <CheckCircle2 className="w-3 h-3 text-green-400" />
              {benefit[language]}
            </Badge>
          ))}
        </div>

        {/* CTAs with Glow Effects */}
        <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
            asChild
          >
            <a href={data.secondaryCta.href} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              {data.secondaryCta.text[language]}
            </a>
          </Button>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '47', label: language === 'de' ? 'Unternehmen analysiert' : 'Companies Analyzed' },
            { value: 'r=0.89', label: language === 'de' ? 'Korrelation' : 'Correlation' },
            { value: '8.2x', label: language === 'de' ? 'Schneller skalieren' : 'Faster Scaling' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className={`text-sm text-gray-400 mt-8 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {data.subtext[language]}
        </p>
      </div>
    </section>
  );
};

export default ResearchFinalCTASection;
