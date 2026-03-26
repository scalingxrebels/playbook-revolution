import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import { Linkedin } from 'lucide-react';

const HomeTeam: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.05, 0.1] });

  return (
    <section
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (containerRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Theme-responsive background */}
      <div
        className="absolute inset-0 bg-mesh opacity-30 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.05)` }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px) scale(1.05)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-10" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Overline */}
        <p
          className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {language === 'de' ? 'Das Team' : 'The Team'}
        </p>
        <h2
          className={`font-display text-display-md mb-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {language === 'de'
            ? 'Die Menschen hinter ScalingX.'
            : 'The people behind ScalingX.'}
        </h2>

        {/* Michel — Primary */}
        <div
          className={`flex flex-col md:flex-row items-start gap-8 mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="w-44 h-44 md:w-52 md:h-52 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-accent-glow">
            <img
              src="/images/team-michel.png"
              alt="Michel Lason"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl mb-1 text-foreground">Michel Lason</h3>
            <p className="text-sm text-accent mb-4">Founder · ScalingX Hypergrowth</p>
            <p className="text-muted-foreground leading-relaxed max-w-xl mb-3">
              {language === 'de'
                ? 'Founder von ScalingX Hypergrowth. 19 Jahre B2B SaaS GTM — als Operator, nicht als Berater. Er baut die Mechanismen selbst.'
                : 'Founder of ScalingX Hypergrowth. 19 years B2B SaaS GTM — as an operator, not a consultant. He builds the mechanisms himself.'}
            </p>
            <p className="text-xs text-muted-foreground/60 mb-3">
              n=22 · DACH B2B SaaS · Series A–C
            </p>
            <a
              href="https://www.linkedin.com/in/michellason/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Michel Lason"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Alban + Florian — Secondary */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <div className="flex items-center gap-4 p-5 rounded-xl border-2 border-border/40 bg-card/10 hover:border-accent/30 hover:shadow-glow transition-all duration-300">
            <img
              src="/images/team-alban.png"
              alt="Alban Halili"
              className="w-10 h-10 rounded-full border border-accent/20 object-cover flex-shrink-0"
              loading="lazy"
            />
            <div>
              <h4 className="font-display text-base text-foreground">Alban Halili</h4>
              <p className="text-sm text-muted-foreground">Partner · Growth · Operations · AI Solutions</p>
            </div>
            <a
              href="https://www.linkedin.com/in/albanhalili/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Alban Halili"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-xl border-2 border-border/40 bg-card/10 hover:border-accent/30 hover:shadow-glow transition-all duration-300">
            <img
              src="/images/team-florian.png"
              alt="Florian Metzger"
              className="w-10 h-10 rounded-full border border-accent/20 object-cover flex-shrink-0"
              loading="lazy"
            />
            <div>
              <h4 className="font-display text-base text-foreground">Florian Metzger</h4>
              <p className="text-sm text-muted-foreground">Partner · GTM · Venture Architect · RevOps</p>
            </div>
            <a
              href="https://www.linkedin.com/in/florianmetzger/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Florian Metzger"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* About link */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <Link
            to="/about"
            className="inline-flex items-center text-sm text-accent hover:underline"
          >
            {language === 'de' ? '→ Mehr über das Team' : '→ More about the team'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTeam;
