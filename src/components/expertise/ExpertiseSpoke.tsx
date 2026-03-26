import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import { ArrowRight } from 'lucide-react';
import SharedHero from '@/components/shared/SharedHero';
import MechanismFlowDiagram from './MechanismFlowDiagram';
import type { SpokeData } from '@/data/expertise/types';

/* ─── Section wrapper with alternating gradients ─── */
const Section: React.FC<{ children: React.ReactNode; gradient?: 'a' | 'b' }> = ({ children, gradient = 'a' }) => {
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.05, 0.12] });
  return (
    <section ref={containerRef as React.RefObject<HTMLElement>} className="relative py-24 md:py-32 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          gradient === 'a' ? 'from-background to-secondary/30' : 'from-secondary/30 to-background'
        } transition-transform duration-100`}
        style={{ transform: `translateY(${offsets[0]}px) scale(1.05)` }}
      />
      <div className="absolute inset-0 bg-mesh opacity-40 transition-transform duration-100" style={{ transform: `translateY(${offsets[0]}px) scale(1.05)` }} />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100" style={{ transform: `translateY(${offsets[1]}px) scale(1.05)` }} />
      <div className="container max-w-5xl mx-auto px-6 relative z-10">{children}</div>
    </section>
  );
};

const SectionHeader: React.FC<{ overline: string; headline: string }> = ({ overline, headline }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {overline}
      </p>
      <h2 className={`font-display text-display-md mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
        {headline}
      </h2>
    </div>
  );
};

/* ═══════════════════ SPOKE ═══════════════════ */
const ExpertiseSpoke: React.FC<{ data: SpokeData }> = ({ data }) => {
  const { language } = useLanguage();
  const t = (de: string, en: string) => (language === 'de' ? de : en);

  const colorClass = data.color === 'amber' ? 'text-amber-500' : 'text-primary';
  const borderClass = data.color === 'amber' ? 'border-amber-500/30' : 'border-primary/30';

  /* Scroll-reveal refs */
  const { ref: notCardsRef, isVisible: notCardsVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: howRef, isVisible: howVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: caseRef, isVisible: caseVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <SharedHero
        overlineEn={data.overlineEn}
        overlineDe={data.overlineDe}
        headlineLine1En={data.headlineEn}
        headlineLine1De={data.headlineDe}
        subheadlineEn={data.sublineEn}
        subheadlineDe={data.sublineDe}
        stats={data.stats.map((s) => ({
          value: s.value,
          label: { en: s.labelEn, de: s.labelDe },
          color: data.color === 'amber' ? 'accent' as const : 'primary' as const,
        }))}
        variant="dark"
      />

      {/* ── Section 2: Was es ist ── */}
      <Section gradient="a">
        <SectionHeader
          overline={t('WAS ES IST', 'WHAT IT IS')}
          headline={t(data.whatItIs.headlineDe, data.whatItIs.headlineEn)}
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t(data.whatItIs.bodyDe, data.whatItIs.bodyEn)}
          </p>
        </div>
      </Section>

      {/* ── Section 3: Was es NICHT ist ── */}
      <Section gradient="b">
        <SectionHeader
          overline={t('WAS ES NICHT IST', 'WHAT IT IS NOT')}
          headline={t('Drei Dinge die es nicht sind.', 'Three things it is not.')}
        />
        <div ref={notCardsRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.whatItIsNot.map((card, i) => (
            <div
              key={i}
              className={`p-8 border-2 border-border bg-card transition-all duration-700 ${notCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="font-display text-lg text-foreground mb-3">
                {t(card.titleDe, card.titleEn)}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t(card.bodyDe, card.bodyEn)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Section 4: Wie es funktioniert ── */}
      <Section gradient="a">
        <SectionHeader
          overline={t('WIE ES FUNKTIONIERT', 'HOW IT WORKS')}
          headline={t(data.howItWorks.headlineDe, data.howItWorks.headlineEn)}
        />
        <div ref={howRef as React.RefObject<HTMLDivElement>} className="max-w-3xl mx-auto space-y-6">
          {data.howItWorks.levels.map((level, i) => (
            <div
              key={i}
              className={`p-8 border-2 bg-card ${borderClass} transition-all duration-700 ${howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold ${colorClass}`}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-lg text-foreground">
                  {t(level.titleDe, level.titleEn)}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {t(level.bodyDe, level.bodyEn)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Section 5: Competitive Moat ── */}
      <Section gradient="b">
        <SectionHeader
          overline={t('DER COMPETITIVE MOAT', 'THE COMPETITIVE MOAT')}
          headline={t(data.moat.headlineDe, data.moat.headlineEn)}
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t(data.moat.bodyDe, data.moat.bodyEn)}
          </p>
        </div>
      </Section>

      {/* ── Section 6: In der Praxis ── */}
      <Section gradient="a">
        <SectionHeader
          overline={t('BEWEIS', 'PROOF')}
          headline={t(`${data.num} in der Praxis.`, `${data.num} in practice.`)}
        />
        <div ref={caseRef as React.RefObject<HTMLDivElement>} className="max-w-2xl mx-auto">
          <Link
            to={data.caseStudy.href}
            className={`group block p-8 border-2 border-border bg-card hover:border-primary/50 hover:shadow-glow transition-all duration-700 ${caseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="text-xs text-muted-foreground">{t(data.caseStudy.tagDe, data.caseStudy.tagEn)}</span>
            <div className="flex gap-2 my-3">
              {data.caseStudy.mechanisms.map((m) => (
                <span key={m} className={`text-[10px] font-bold px-2 py-0.5 border ${
                  m === 'M4' ? 'border-amber-500/30 text-amber-500' : 'border-primary/30 text-primary'
                }`}>{m}</span>
              ))}
            </div>
            <p className="text-foreground font-medium mb-4">{t(data.caseStudy.resultDe, data.caseStudy.resultEn)}</p>
            <span className="inline-flex items-center text-sm text-accent group-hover:gap-2 transition-all">
              {t(data.caseStudy.ctaDe, data.caseStudy.ctaEn)} <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        </div>
      </Section>

      {/* ── Section 7: Verbindung ── */}
      <Section gradient="b">
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`text-center transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            {t('DAS SYSTEM', 'THE SYSTEM')}
          </p>
          <h2 className="font-display text-display-md mb-8">
            {t(`${data.num} steht nicht allein.`, `${data.num} doesn't stand alone.`)}
          </h2>

          <div className="mb-10">
            <MechanismFlowDiagram activeM={data.num as 'M1' | 'M2' | 'M3' | 'M4'} />
          </div>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            {t(data.connection.bodyDe, data.connection.bodyEn)}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/scalingx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-accent-foreground font-bold text-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {t('Gespräch buchen', 'Book a call')}
            </a>
            <Link
              to={data.connection.nextHref}
              className="px-8 py-4 border-2 border-border text-foreground font-bold text-lg hover:border-primary/50 transition-colors whitespace-nowrap inline-flex items-center gap-2"
            >
              {t(data.connection.nextLinkDe, data.connection.nextLinkEn)}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ExpertiseSpoke;
