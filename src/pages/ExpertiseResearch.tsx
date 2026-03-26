import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, BookOpen, FlaskConical, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FilloutBookingModal } from '@/components/forms';

const ExpertiseResearch: React.FC = () => {
  const { language } = useLanguage();
  const t = <T,>(de: T, en: T): T => (language === 'de' ? de : en);
  const [bookingOpen, setBookingOpen] = useState(false);

  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: mappingRef, isVisible: mappingVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: crossRef, isVisible: crossVisible } = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    { value: '3', labelDe: 'Frameworks\nentwickelt', labelEn: 'Frameworks\ndeveloped' },
    { value: '62+', labelDe: 'Unternehmen\nanalysiert', labelEn: 'Companies\nanalyzed' },
    { value: 'R²=0.76', labelDe: 'Korrelation\nθ→ Scaling', labelEn: 'Correlation\nθ→ Scaling' },
    { value: '2024–2026', labelDe: 'Zeitraum', labelEn: 'Period' },
  ];

  const mappingRows = [
    {
      abbr: 'AMF',
      nameDe: 'AI Maturity Framework',
      nameEn: 'AI Maturity Framework',
      questionDe: 'Wie reif ist ein Unternehmen im Umgang mit AI?',
      questionEn: 'How mature is a company in its use of AI?',
      descDe: '6-dimensionales Scoring · θ_index (0–1) · n=62 Unternehmen',
      descEn: '6-dimensional scoring · θ_index (0–1) · n=62 companies',
    },
    {
      abbr: 'ANST',
      nameDe: 'AI-Native Scaling Theory',
      nameEn: 'AI-Native Scaling Theory',
      questionDe: 'Warum skalieren AI-native Unternehmen superlinear?',
      questionEn: 'Why do AI-native companies scale superlinearly?',
      descDe: 'Formales Modell · R²=0.76 · n=22 Unternehmen validiert',
      descEn: 'Formal model · R²=0.76 · n=22 companies validated',
    },
    {
      abbr: 'SST',
      nameDe: 'Scaling Stack Theory',
      nameEn: 'Scaling Stack Theory',
      questionDe: 'Welche Schichten müssen zusammenspielen damit Scaling gelingt?',
      questionEn: 'Which layers need to align for scaling to succeed?',
      descDe: '4 Capabilities · Bottleneck-Diagnose · strukturelle Analyse',
      descEn: '4 capabilities · bottleneck diagnosis · structural analysis',
    },
  ];

  const frameworkCards = [
    {
      overline: 'FRAMEWORK 1',
      titleDe: 'AI Maturity\nFramework',
      titleEn: 'AI Maturity\nFramework',
      subDe: 'Wie reif ist ein Unternehmen im Umgang mit AI?',
      subEn: 'How mature is a company in its use of AI?',
      bodyDe: 'AMF klassifiziert Unternehmen in 3 Maturity-Levels anhand von 6 Dimensionen. Output: θ_index (0–1).',
      bodyEn: 'AMF classifies companies into 3 maturity levels across 6 dimensions. Output: θ_index (0–1).',
      stats: ['n=62 · 6 Dimensionen', 'θ_index · 3 Maturity Levels'],
      statsEn: ['n=62 · 6 dimensions', 'θ_index · 3 maturity levels'],
      href: '/expertise/amf',
      icon: FlaskConical,
    },
    {
      overline: 'FRAMEWORK 2',
      titleDe: 'AI-Native Scaling\nTheory',
      titleEn: 'AI-Native Scaling\nTheory',
      subDe: 'Warum skalieren AI-native Unternehmen superlinear?',
      subEn: 'Why do AI-native companies scale superlinearly?',
      bodyDe: 'ANST erklärt den Mechanismus hinter dem Wachstumsunterschied — formal modelliert und empirisch validiert.',
      bodyEn: 'ANST explains the mechanism behind the growth difference — formally modeled and empirically validated.',
      stats: ['n=22 · R²=0.76', '2024–2026'],
      statsEn: ['n=22 · R²=0.76', '2024–2026'],
      href: '/expertise/anst',
      icon: BookOpen,
    },
    {
      overline: 'FRAMEWORK 3',
      titleDe: 'Scaling Stack\nTheory',
      titleEn: 'Scaling Stack\nTheory',
      subDe: 'Welche Schichten müssen zusammenspielen?',
      subEn: 'Which layers need to align?',
      bodyDe: 'SST beschreibt die 4 strukturellen Capabilities, die für Hypergrowth zusammenspielen müssen.',
      bodyEn: 'SST describes the 4 structural capabilities that must align for hypergrowth.',
      stats: ['4 Capabilities (C₁–C₄)', 'Bottleneck-Diagnose · C_min-Logik'],
      statsEn: ['4 Capabilities (C₁–C₄)', 'Bottleneck diagnosis · C_min logic'],
      href: '/expertise/sst',
      icon: Layers,
    },
  ];

  const pills = [
    { label: 'AMF', href: '/expertise/amf' },
    { label: 'ANST', href: '/expertise/anst' },
    { label: 'SST', href: '/expertise/sst' },
    { label: t('Fallstudien', 'Case Studies'), href: '/cases' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* ── Section 0: Positioning Header ── */}
      <section className="relative pt-32 pb-12 border-b border-border/30">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        <div className="container max-w-3xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>→</span>
            <Link to="/expertise" className="hover:text-foreground transition-colors">Expertise</Link>
            <span>→</span>
            <span className="text-foreground">AI-Native Scaling Research</span>
          </nav>

          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
            AI-NATIVE SCALING RESEARCH · 2024–2026
          </p>
          <h1 className="font-display text-display-md mb-6">
            {t(
              <>Warum skalieren AI-native Unternehmen <span className="italic text-gradient">schneller?</span></>,
              <>Why do AI-native companies scale <span className="italic text-gradient">faster?</span></>
            )}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t(
              'Das ist die Frage, die uns nicht losgelassen hat. Drei Frameworks. 62+ Unternehmen. Eine klare Antwort.',
              'That\'s the question that wouldn\'t let us go. Three frameworks. 62+ companies. One clear answer.'
            )}
          </p>

          {/* Navigation Pills */}
          <div className="flex flex-wrap gap-2">
            {pills.map((pill) => (
              <Link
                key={pill.label}
                to={pill.href}
                className="inline-flex items-center h-8 px-4 text-xs font-medium border border-border rounded-full text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
              >
                {pill.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 1: Stat Row ── */}
      <section className="py-10 border-b border-border/20">
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className={`container max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center md:border-r md:last:border-r-0 border-border/20">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider whitespace-pre-line">
                {t(s.labelDe, s.labelEn)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: Mapping ── */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center">
            {t('DREI FRAMEWORKS · DREI FRAGEN', 'THREE FRAMEWORKS · THREE QUESTIONS')}
          </p>
          <h2 className="font-display text-display-md mb-12 text-center">
            {t(
              <>Jedes Framework beantwortet<br />eine eigene <span className="italic text-gradient">Frage.</span></>,
              <>Each framework answers<br />its own <span className="italic text-gradient">question.</span></>
            )}
          </h2>
          <div
            ref={mappingRef as React.RefObject<HTMLDivElement>}
            className={`border border-border/30 bg-card divide-y divide-border/20 transition-all duration-700 ${mappingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {mappingRows.map((row, i) => (
              <div key={i} className="px-6 md:px-8 py-6">
                <p className="text-sm font-bold text-foreground mb-1">
                  {row.abbr} — {t(row.nameDe, row.nameEn)}
                </p>
                <p className="text-base text-foreground/80 mb-1">
                  {t(row.questionDe, row.questionEn)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t(row.descDe, row.descEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Framework Cards ── */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="container max-w-5xl mx-auto px-6">
          <div
            ref={cardsRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {frameworkCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Link
                  key={i}
                  to={card.href}
                  className={`group block p-8 border border-border/30 bg-card rounded-xl hover:border-primary/40 hover:bg-card/80 transition-all duration-500 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-3">
                    {card.overline}
                  </p>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent/10 mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 whitespace-pre-line">
                    {t(card.titleDe, card.titleEn)}
                  </h3>
                  <p className="text-sm text-muted-foreground italic mb-3">
                    {t(card.subDe, card.subEn)}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(card.bodyDe, card.bodyEn)}
                  </p>
                  <div className="space-y-1 mb-4">
                    {(t(card.stats, card.statsEn) as string[]).map((stat, j) => (
                      <p key={j} className="text-xs font-bold text-primary">{stat}</p>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-sm text-accent group-hover:gap-2 transition-all">
                    {t('Framework lesen', 'Read framework')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 4: Cross-Links ── */}
      <section className="py-16 md:py-24 border-t border-border/20">
        <div
          ref={crossRef as React.RefObject<HTMLDivElement>}
          className={`container max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${crossVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            {t('WO DAS RESEARCH HINFÜHRT', 'WHERE THE RESEARCH LEADS')}
          </p>
          <h2 className="font-display text-display-md mb-6">
            {t(
              <>Vom Verstehen zum <span className="italic text-gradient">Handeln.</span></>,
              <>From understanding to <span className="italic text-gradient">action.</span></>
            )}
          </h2>
          <p className="text-base text-muted-foreground mb-8">
            {t(
              'Das Research erklärt warum. Die Playbooks zeigen wie. Wer beides will, findet hier den Weg.',
              'The research explains why. The playbooks show how. If you want both, start here.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/playbooks">
              <Button variant="outline" size="lg" className="gap-2">
                {t('Playbooks ansehen', 'View Playbooks')} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/cases">
              <Button variant="outline" size="lg" className="gap-2">
                {t('Cases lesen', 'Read Cases')} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-gradient-accent text-accent-foreground shadow-accent-glow gap-2"
              onClick={() => setBookingOpen(true)}
            >
              {t('Gespräch buchen', 'Book a call')} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FilloutBookingModal formSlug="inflection-call" source="expertise-research" isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
};

export default ExpertiseResearch;
