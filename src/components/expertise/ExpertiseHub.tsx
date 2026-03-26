import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import { Check, X, AlertTriangle, ArrowRight, Eye, ArrowRightLeft, Settings, Cpu } from 'lucide-react';
import SharedHero from '@/components/shared/SharedHero';
import MechanismFlowDiagram from './MechanismFlowDiagram';
import { mechanismCards, comparisonRows, hubCases } from '@/data/expertise/hub';
import type { ComparisonStatus } from '@/data/expertise/hub';
import { Button } from '@/components/ui/button';
import { FilloutBookingModal } from '@/components/forms';
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

const mechIcons = [Eye, ArrowRightLeft, Settings, Cpu];

/* ─────────────────────── Section wrapper ─────────────────────── */
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

const SectionHeader: React.FC<{
  overline: string;
  headline: React.ReactNode;
  sub?: string;
}> = ({ overline, headline, sub }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {overline}
      </p>
      <h2 className={`font-display text-display-md ${sub ? 'mb-6' : 'mb-12'} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
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
  const [bookingOpen, setBookingOpen] = useState(false);

  /* Scroll-reveal refs for staggered sections */
  const { ref: mechGridRef, isVisible: mechGridVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <SharedHero
        overlineEn="EXPERTISE × SPEED = IMPACT"
        overlineDe="EXPERTISE × SPEED = IMPACT"
        headlineLine1En="Expertise is not a title."
        headlineLine1De="Expertise ist kein Titel."
        headlineLine2En="It's a system."
        headlineLine2De="Es ist ein System."
        subheadlineEn="Four mechanisms. Combined with speed. That's why it works."
        subheadlineDe="Vier Mechanismen. Kombiniert mit Speed. Das ist warum es funktioniert."
        variant="dark"
      >
        <div className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent border border-accent/30 rounded-full bg-card shadow-brutal-sm">
          {t('WIE WIR DENKEN · NICHT WAS WIR WISSEN', 'HOW WE THINK · NOT WHAT WE KNOW')}
        </div>
      </SharedHero>

      {/* ── Section 2: Das System ── */}
      <Section gradient="a">
        <SectionHeader
          overline={t('DAS SYSTEM', 'THE SYSTEM')}
          headline={language === 'de' ? <>Vier Mechanismen. Ein Multiplier.<br /><span className="italic text-gradient">Fucking fast.</span></> : <>Four mechanisms. One multiplier.<br /><span className="italic text-gradient">Fucking fast.</span></>}
          sub={t('M1–M3 sind die Mechanismen. M4 ist der Verstärker auf alle drei.', 'M1–M3 are the mechanisms. M4 is the amplifier on all three.')}
        />
        <MechanismFlowDiagram />
        <p className="text-xs text-muted-foreground text-center mt-6">
          {t('M1–M3 sind die Mechanismen. M4 ist der Verstärker — nicht der vierte Mechanismus.', 'M1–M3 are the mechanisms. M4 is the amplifier — not the fourth mechanism.')}
        </p>
      </Section>

      {/* ── Section 3: Die 4 Mechanismen (2×2) — matching HomeMechanisms ── */}
      <Section gradient="b">
        <SectionHeader
          overline={t('DIE VIER MECHANISMEN', 'THE FOUR MECHANISMS')}
          headline={language === 'de' ? <>Vier Mechanismen.<br />Einer davon <span className="italic text-gradient">erklärt die Lücke.</span></> : <>Four mechanisms.<br />One of them <span className="italic text-gradient">explains the gap.</span></>}
        />
        <div ref={mechGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mechanismCards.map((m, i) => {
            const Icon = mechIcons[i];
            return (
              <Link
                key={m.num}
                to={m.href}
                className={`group relative block p-8 border-2 bg-card hover:shadow-glow transition-all duration-500 ${
                  m.color === 'amber'
                    ? 'border-amber-500/30 hover:border-amber-500/60'
                    : 'border-border hover:border-primary/50'
                } ${mechGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                {/* M-number badge — top right like Home */}
                <span className={`absolute top-4 right-4 text-xs font-bold tracking-wider ${
                  m.color === 'amber' ? 'text-amber-500/60' : 'text-accent/60'
                }`}>
                  {m.num}
                </span>

                {/* Icon container — matching Home */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  m.color === 'amber' ? 'bg-amber-500/10' : 'bg-accent/10'
                }`}>
                  <Icon className={`h-5 w-5 ${m.color === 'amber' ? 'text-amber-500' : 'text-accent'}`} />
                </div>

                <h3 className="font-display text-xl mb-2 text-foreground">
                  {t(m.titleDe, m.titleEn)}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t(m.headlineDe, m.headlineEn)}
                </p>
                <span className={`inline-flex items-center text-sm group-hover:gap-2 transition-all ${
                  m.color === 'amber' ? 'text-amber-500' : 'text-accent'
                }`}>
                  {t('Mehr erfahren', 'Learn more')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ── Section 4: Warum das funktioniert (Comparison) ── */}
      <Section gradient="a">
        <SectionHeader
          overline={t('DER UNTERSCHIED', 'THE DIFFERENCE')}
          headline={language === 'de' ? <>Viele haben Expertise.<br />Wenige haben <span className="italic text-gradient">ein System.</span></> : <>Many have expertise.<br />Few have <span className="italic text-gradient">a system.</span></>}
        />
        <div
          ref={tableRef as React.RefObject<HTMLDivElement>}
          className={`w-full overflow-x-auto border-2 border-border bg-card transition-all duration-700 ${tableVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
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
        <p className={`text-lg text-foreground mt-8 text-center font-medium transition-all duration-700 ${tableVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          {t('Das ist kein Grad-Unterschied. Das ist ein Kategorie-Unterschied.', 'This is not a degree difference. This is a category difference.')}
        </p>
      </Section>

      {/* ── Section 5: Beweis — matching HomeCases structure ── */}
      <Section gradient="b">
        <SectionHeader
          overline={t('DIE MECHANISMEN IN DER PRAXIS', 'THE MECHANISMS IN PRACTICE')}
          headline={t('Was möglich ist.', 'What\'s possible.')}
        />
        <div ref={casesRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hubCases.map((c, i) => (
            <Link
              key={i}
              to={c.href}
              className={`group block p-6 border-2 border-border bg-card hover:border-primary/50 hover:shadow-glow transition-all duration-500 ${casesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Tag pill — matching HomeCases */}
              <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 rounded-full shadow-brutal-sm mb-3">
                {t(c.tagDe, c.tagEn)}
              </span>

              {/* Mechanism badges */}
              <div className="flex gap-2 mt-2 mb-3">
                {c.mechanisms.map((m) => (
                  <span key={m} className={`text-[10px] font-bold px-2 py-0.5 border ${
                    m === 'M4' ? 'border-amber-500/30 text-amber-500' : 'border-primary/30 text-primary'
                  }`}>{m}</span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg mb-3 text-foreground leading-snug">
                {t(c.titleDe, c.titleEn)}
              </h3>

              {/* Body */}
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {t(c.bodyDe, c.bodyEn)}
              </p>

              {/* Metrics — matching HomeCases */}
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
                {t(c.investmentDe, c.investmentEn)}
              </p>

              {/* CTA */}
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

      {/* ── Section 6: Research Teaser ── */}
      <Section gradient="b">
        <SectionHeader
          overline="AI-NATIVE SCALING RESEARCH"
          headline={language === 'de' ? <>Die wissenschaftliche <span className="italic text-gradient">Basis.</span></> : <>The scientific <span className="italic text-gradient">foundation.</span></>}
          sub={t('Drei Frameworks. 62+ Unternehmen. Eine klare Antwort.', 'Three frameworks. 62+ companies. One clear answer.')}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { abbr: 'AMF', titleDe: 'AI Maturity Framework', titleEn: 'AI Maturity Framework', qDe: 'Wie reif ist ein Unternehmen im Umgang mit AI?', qEn: 'How mature is a company in its use of AI?', href: '/expertise/amf' },
            { abbr: 'ANST', titleDe: 'AI-Native Scaling Theory', titleEn: 'AI-Native Scaling Theory', qDe: 'Warum skalieren AI-native Unternehmen superlinear?', qEn: 'Why do AI-native companies scale superlinearly?', href: '/expertise/anst' },
            { abbr: 'SST', titleDe: 'Scaling Stack Theory', titleEn: 'Scaling Stack Theory', qDe: 'Welche Schichten müssen zusammenspielen?', qEn: 'Which layers need to align?', href: '/expertise/sst' },
          ].map((fw, i) => (
            <Link
              key={fw.abbr}
              to={fw.href}
              className="group block p-6 border-2 border-border bg-card hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              <span className="text-xs font-bold tracking-wider text-accent/60">{fw.abbr}</span>
              <h3 className="font-display text-lg mt-2 mb-2 text-foreground">{t(fw.titleDe, fw.titleEn)}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t(fw.qDe, fw.qEn)}</p>
              <span className="inline-flex items-center text-sm text-accent group-hover:gap-2 transition-all">
                {t('Mehr erfahren', 'Learn more')} <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/expertise/research"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
          >
            {t('Zum Research Hub', 'Go to Research Hub')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ── Section 7: CTA — matching Home buttons ── */}
      <Section gradient="a">
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`text-center transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-display-md mb-8">
            {t('Bereit den richtigen Hebel zu finden?', 'Ready to find the right lever?')}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-accent text-accent-foreground shadow-accent-glow text-lg px-8 py-4 h-auto whitespace-nowrap"
              onClick={() => setBookingOpen(true)}
            >
              {t('Gespräch buchen', 'Book a call')}
            </Button>
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

      <FilloutBookingModal formSlug="inflection-call" source="expertise-hub" isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default ExpertiseHub;
