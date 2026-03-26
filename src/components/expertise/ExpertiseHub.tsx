import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import { Check, X, AlertTriangle, ArrowRight } from 'lucide-react';
import SharedHero from '@/components/shared/SharedHero';
import MechanismFlowDiagram from './MechanismFlowDiagram';
import { mechanismCards, comparisonRows, hubCases } from '@/data/expertise/hub';
import type { ComparisonStatus } from '@/data/expertise/hub';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const StatusIcon = ({ status, highlight }: { status: ComparisonStatus; highlight?: boolean }) => {
  if (status === 'yes') return <Check className={`h-5 w-5 ${highlight ? 'text-accent' : 'text-emerald-500'}`} />;
  if (status === 'partial') return <AlertTriangle className="h-5 w-5 text-amber-500" />;
  return <X className="h-5 w-5 text-muted-foreground/50" />;
};

/* ─────────────────────── Section wrapper ─────────────────────── */
const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <section className={`relative py-24 md:py-32 overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-mesh opacity-30" />
    <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />
    <div className="container max-w-5xl mx-auto px-6 relative z-10">{children}</div>
  </section>
);

const SectionHeader: React.FC<{
  overline: string;
  headline: string;
  sub?: string;
}> = ({ overline, headline, sub }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {overline}
      </p>
      <h2 className={`font-display text-display-md mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
        {headline}
      </h2>
      {sub && (
        <p className={`text-lg text-muted-foreground mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          {sub}
        </p>
      )}
    </div>
  );
};

/* ═══════════════════════ HUB ═══════════════════════ */
const ExpertiseHub: React.FC = () => {
  const { language } = useLanguage();
  const t = (de: string, en: string) => (language === 'de' ? de : en);

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <SharedHero
        overlineEn="HOW WE THINK · NOT WHAT WE KNOW"
        overlineDe="WIE WIR DENKEN · NICHT WAS WIR WISSEN"
        headlineLine1En="Expertise is not a title."
        headlineLine1De="Expertise ist kein Titel."
        headlineLine2En="It's a system."
        headlineLine2De="Es ist ein System."
        subheadlineEn="Four mechanisms. Combined with speed. That's why it works."
        subheadlineDe="Vier Mechanismen. Kombiniert mit Speed. Das ist warum es funktioniert."
        variant="dark"
      >
        {/* Badge */}
        <div className="inline-block px-5 py-2.5 border-2 border-accent/40 bg-accent/10 text-accent text-sm font-bold tracking-wider">
          EXPERTISE × SPEED = IMPACT
        </div>
      </SharedHero>

      {/* ── Section 2: Das System ── */}
      <Section>
        <SectionHeader
          overline={t('DAS SYSTEM', 'THE SYSTEM')}
          headline={t('Vier Mechanismen. Ein Multiplier. Fucking fast.', 'Four mechanisms. One multiplier. Fucking fast.')}
          sub={t('M1–M3 sind die Mechanismen. M4 ist der Verstärker auf alle drei.', 'M1–M3 are the mechanisms. M4 is the amplifier on all three.')}
        />
        <div className="mt-12">
          <MechanismFlowDiagram />
        </div>
        <p className="text-xs text-muted-foreground text-center mt-6">
          {t('M1–M3 sind die Mechanismen. M4 ist der Verstärker — nicht der vierte Mechanismus.', 'M1–M3 are the mechanisms. M4 is the amplifier — not the fourth mechanism.')}
        </p>
      </Section>

      {/* ── Section 3: Die 4 Mechanismen (2×2) ── */}
      <Section>
        <SectionHeader
          overline={t('DIE VIER MECHANISMEN', 'THE FOUR MECHANISMS')}
          headline={t('Vier Mechanismen. Einer davon erklärt die Lücke.', 'Four mechanisms. One of them explains the gap.')}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {mechanismCards.map((m) => (
            <Link
              key={m.num}
              to={m.href}
              className={`group relative block p-8 border-2 bg-card hover:shadow-glow transition-all duration-500 ${
                m.color === 'amber'
                  ? 'border-amber-500/30 hover:border-amber-500/60'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Top row: number + badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold tracking-wider ${m.color === 'amber' ? 'text-amber-500' : 'text-primary'}`}>
                  {m.num}
                </span>
                <span className={`text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 border ${
                  m.color === 'amber'
                    ? 'border-amber-500/30 text-amber-500/80'
                    : 'border-primary/30 text-primary/80'
                }`}>
                  {t(m.badge.de, m.badge.en)}
                </span>
              </div>

              <h3 className="font-display text-lg mb-2 text-foreground">
                {t(m.titleDe, m.titleEn)}
              </h3>
              <p className="text-foreground/90 italic mb-2 text-sm">
                {t(m.headlineDe, m.headlineEn)}
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                {t(m.contrastDe, m.contrastEn)}
              </p>
              <span className={`inline-flex items-center text-sm group-hover:gap-2 transition-all ${
                m.color === 'amber' ? 'text-amber-500' : 'text-accent'
              }`}>
                {t('Mehr erfahren', 'Learn more')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Section 4: Warum das funktioniert (Comparison) ── */}
      <Section>
        <SectionHeader
          overline={t('DER UNTERSCHIED', 'THE DIFFERENCE')}
          headline={t('Viele haben Expertise. Wenige haben ein System.', 'Many have expertise. Few have a system.')}
        />
        <div className="w-full overflow-x-auto border-2 border-border bg-card mt-12">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30 bg-muted/30">
                <TableHead className="min-w-[180px]" />
                <TableHead className="text-center text-muted-foreground font-medium">{t('Berater', 'Consultants')}</TableHead>
                <TableHead className="text-center text-muted-foreground font-medium">McKinsey</TableHead>
                <TableHead className="text-center text-muted-foreground font-medium">{t('Intern', 'Internal')}</TableHead>
                <TableHead className="text-center font-bold text-accent border-l-2 border-accent/30 bg-accent/10">ScalingX</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonRows.map((row, i) => (
                <TableRow key={i} className="border-border/20">
                  <TableCell className="font-medium text-foreground text-sm">{t(row.labelDe, row.labelEn)}</TableCell>
                  <TableCell className="text-center"><div className="flex justify-center"><StatusIcon status={row.berater} /></div></TableCell>
                  <TableCell className="text-center"><div className="flex justify-center"><StatusIcon status={row.mckinsey} /></div></TableCell>
                  <TableCell className="text-center"><div className="flex justify-center"><StatusIcon status={row.intern} /></div></TableCell>
                  <TableCell className="text-center border-l-2 border-accent/30 bg-accent/5"><div className="flex justify-center"><StatusIcon status={row.scalingx} highlight /></div></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-lg text-foreground mt-8 text-center font-medium">
          {t('Das ist kein Grad-Unterschied. Das ist ein Kategorie-Unterschied.', 'This is not a degree difference. This is a category difference.')}
        </p>
      </Section>

      {/* ── Section 5: Beweis ── */}
      <Section>
        <SectionHeader
          overline={t('DIE MECHANISMEN IN DER PRAXIS', 'THE MECHANISMS IN PRACTICE')}
          headline={t('Was möglich ist.', 'What\'s possible.')}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {hubCases.map((c, i) => (
            <Link key={i} to={c.href} className="group block p-8 border-2 border-border bg-card hover:border-primary/50 hover:shadow-glow transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-muted-foreground">{t(c.tagDe, c.tagEn)}</span>
              </div>
              <div className="flex gap-2 mb-4">
                {c.mechanisms.map((m) => (
                  <span key={m} className={`text-[10px] font-bold px-2 py-0.5 border ${
                    m === 'M4' ? 'border-amber-500/30 text-amber-500' : 'border-primary/30 text-primary'
                  }`}>{m}</span>
                ))}
              </div>
              <p className="text-foreground font-medium mb-4">{t(c.resultDe, c.resultEn)}</p>
              <span className="inline-flex items-center text-sm text-accent group-hover:gap-2 transition-all">
                {t(c.ctaDe, c.ctaEn)} <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-6">
          n=22 · DACH B2B SaaS · Series A–C
        </p>
      </Section>

      {/* ── Section 6: CTA ── */}
      <Section>
        <div className="text-center">
          <h2 className="font-display text-display-md mb-8">
            {t('Bereit den richtigen Hebel zu finden?', 'Ready to find the right lever?')}
          </h2>
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
              to="/insights"
              className="px-8 py-4 border-2 border-border text-foreground font-bold text-lg hover:border-primary/50 transition-colors whitespace-nowrap"
            >
              {t('Insights lesen', 'Read insights')}
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {t('30 Min · Kein Pitch · Direkt mit Michel', '30 min · No pitch · Directly with Michel')}
          </p>
        </div>
      </Section>
    </>
  );
};

export default ExpertiseHub;
