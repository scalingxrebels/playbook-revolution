import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import { ArrowRight } from 'lucide-react';

interface CaseData {
  tagDe: string;
  tagEn: string;
  titleDe: string;
  titleEn: string;
  bodyDe: string;
  bodyEn: string;
  metrics: { label: string; value: string }[];
  investmentDe: string;
  investmentEn: string;
  slug: string;
}

const cases: CaseData[] = [
  {
    tagDe: 'Series A · B2B SaaS',
    tagEn: 'Series A · B2B SaaS',
    titleDe: 'Board Readiness gesichert — Series B in 8 Wochen.',
    titleEn: 'Board readiness secured — Series B in 8 weeks.',
    bodyDe: 'Das Board wollte Klarheit. Die Materialien waren da — aber die Logik fehlte. Wir haben sie gebaut.',
    bodyEn: 'The board wanted clarity. The materials existed — but the logic was missing. We built it.',
    metrics: [
      { label: 'Board Materials', value: '+50%' },
      { label: 'DD Readiness', value: '+137%' },
      { label: 'Term Sheets', value: '+3' },
    ],
    investmentDe: 'Investment: €9.8K · ROI: 1.224x',
    investmentEn: 'Investment: €9.8K · ROI: 1,224x',
    slug: '/cases/vc-due-diligence-passed-investment-secured',
  },
  {
    tagDe: 'Series A → B · B2B SaaS',
    tagEn: 'Series A → B · B2B SaaS',
    titleDe: 'Stage Transition gemeistert — von €5M auf €25M ARR.',
    titleEn: 'Stage transition mastered — from €5M to €25M ARR.',
    bodyDe: '18 Monate auf €5M ARR festgesteckt. Falscher ICP, fehlende GTM-Engine, kein Scaling System. Drei Mechanismen. Einer war nicht gebaut.',
    bodyEn: '18 months stuck at €5M ARR. Wrong ICP, missing GTM engine, no scaling system. Three mechanisms. One wasn\'t built.',
    metrics: [
      { label: 'ARR', value: '+400%' },
      { label: 'ARR per FTE', value: '+116%' },
      { label: 'Raised', value: '€30M' },
    ],
    investmentDe: 'Investment: €250K · ROI: 12x',
    investmentEn: 'Investment: €250K · ROI: 12x',
    slug: '/cases/stage-transition-series-b-ready',
  },
  {
    tagDe: 'Series B · B2B SaaS',
    tagEn: 'Series B · B2B SaaS',
    titleDe: 'Strategische Transformation — von Platz #15 auf Platz #3.',
    titleEn: 'Strategic transformation — from #15 to #3 market position.',
    bodyDe: 'Wachstum von 150% auf 80% YoY. Board-Druck. Kein klares Playbook. Fünf parallele Workstreams in 24 Monaten.',
    bodyEn: 'Growth from 150% to 80% YoY. Board pressure. No clear playbook. Five parallel workstreams in 24 months.',
    metrics: [
      { label: 'ARR', value: '+114%' },
      { label: 'NRR', value: '+17.8pp' },
      { label: 'Market Position', value: '#3' },
    ],
    investmentDe: 'Investment: €2.5M · ROI: 27x',
    investmentEn: 'Investment: €2.5M · ROI: 27x',
    slug: '/cases/strategic-transformation-market-leadership',
  },
];

const HomeCases: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.05, 0.1] });

  return (
    <section
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (containerRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="dark-section relative py-24 md:py-32 overflow-hidden noise"
    >
      {/* Deep space background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.05)` }}
      />
      <div
        className="absolute inset-0 bg-mesh opacity-30 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px) scale(1.05)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-10" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center">
        <p
          className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {language === 'de' ? 'Ergebnisse aus der Praxis' : 'Real-world results'}
        </p>
        <h2
          className={`font-display text-3xl md:text-4xl lg:text-5xl mb-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {language === 'de' ? (
            <>Was passiert wenn<br />der Hebel stimmt.</>
          ) : (
            <>What happens when<br />the lever is right.</>
          )}
        </h2>
        <p
          className={`text-lg text-muted-foreground mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {language === 'de'
            ? 'Anonymisierte Ergebnisse. Gleiche Methode.'
            : 'Anonymized results. Same method.'}
        </p>

        {/* Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cases.map((c, i) => (
            <Link
              key={i}
              to={c.slug}
              className={`group block p-6 border-2 border-border bg-card hover:border-accent/50 hover:shadow-accent-glow transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 2) * 120}ms` }}
            >
              {/* Tag */}
              <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 rounded-full shadow-brutal-sm mb-3">
                {language === 'de' ? c.tagDe : c.tagEn}
              </span>

              {/* Title */}
              <h3 className="font-display text-lg mt-2 mb-3 text-foreground leading-snug">
                {language === 'de' ? c.titleDe : c.titleEn}
              </h3>

              {/* Body */}
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {language === 'de' ? c.bodyDe : c.bodyEn}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {c.metrics.map((m, j) => (
                  <div key={j} className="text-center">
                    <div className="text-xl font-bold text-accent">{m.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Investment */}
              <p className="text-xs text-muted-foreground mb-4">
                {language === 'de' ? c.investmentDe : c.investmentEn}
              </p>

              {/* CTA */}
              <span className="inline-flex items-center text-sm text-accent group-hover:gap-2 transition-all">
                {language === 'de' ? 'Case lesen' : 'Read case'}
                <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* All cases link */}
        <div className="text-center">
          <Link
            to="/cases"
            className="inline-flex items-center text-sm text-accent hover:underline"
          >
            {language === 'de' ? '→ Alle Cases ansehen' : '→ View all cases'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCases;
