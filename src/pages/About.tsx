import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import { PersonSchema } from '@/components/seo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import GrowthTrails from '@/components/GrowthTrails';
import {
  ArrowRight, Linkedin, Eye, ArrowRightLeft, Settings, Cpu,
  ExternalLink, PiggyBank, Target, Zap, Handshake, ChevronDown,
} from 'lucide-react';

// =============================================================================
// DATA
// =============================================================================

const teamMembers = [
  {
    name: 'Michel Lason',
    role: { de: 'Gründer & CEO', en: 'Founder & CEO' },
    keyLine: {
      de: 'Hat €1,3M auf €13,7M ARR gebracht — in 2 Jahren.',
      en: 'Grew €1.3M to €13.7M ARR — in 2 years.',
    },
    body: {
      de: '19 Jahre Startups gebaut, skaliert und repariert. Findet den Hebel der wirklich zieht — und setzt ihn um. Autor „Fix Growth. Scale Faster."',
      en: '19 years building, scaling, and fixing startups. Finds the lever that actually moves — and pulls it. Author "Fix Growth. Scale Faster."',
    },
    badge: { de: 'Rule of 40 +10 Pkt · EBITDA –€300k → +€150k', en: 'Rule of 40 +10 pts · EBITDA –€300k → +€150k' },
    tags: ['Revenue Architecture', 'GTM Motions', 'AI Orchestration', 'Investor Readiness'],
    image: '/images/team-michel.png',
    linkedin: 'https://www.linkedin.com/in/michellason/',
    profileLink: '/about/ml',
  },
  {
    name: 'Alban Halili',
    role: { de: 'Partner', en: 'Partner' },
    keyLine: {
      de: 'Hat B2B Sales von 0 auf €8,5M ARR skaliert.',
      en: 'Scaled B2B sales from 0 to €8.5M ARR.',
    },
    body: {
      de: '10+ Jahre Sales-Systeme gebaut die ohne den Gründer laufen. Baut AI Agents und Automations die Sales-Teams 10x produktiver machen. Kein Konzern-Berater. Operator.',
      en: '10+ years building sales systems that run without the founder. Builds AI agents and automations that make sales teams 10x more productive. Not a consultant. Operator.',
    },
    badge: { de: '3,8% Conversion · €15K Durchschnitts-Deal', en: '3.8% Conversion · €15K Avg Deal' },
    tags: ['B2B Sales', 'AI Agents', 'Automation', 'Performance Analytics'],
    image: '/images/team-alban.png',
    linkedin: 'https://www.linkedin.com/in/alban-halili/',
    profileLink: '/about/ah',
  },
  {
    name: 'Florian Metzger',
    role: { de: 'Partner', en: 'Partner' },
    keyLine: {
      de: 'Baut die Systeme die Strategie in operative Realität übersetzen.',
      en: 'Builds the systems that translate strategy into operational reality.',
    },
    body: {
      de: 'RevOps, GTM Engineering, Venture Architect — hands-on. Co-Founder Mindset: denkt wie ein Gründer, baut wie ein Engineer. Architekt von Fördermittelnavigator.',
      en: 'RevOps, GTM engineering, venture architect — hands-on. Co-founder mindset: thinks like a founder, builds like an engineer. Architect of Fördermittelnavigator.',
    },
    badge: { de: 'Sales Cycle –30% · Lead Throughput optimiert', en: 'Sales Cycle –30% · Lead Throughput Optimized' },
    tags: ['RevOps', 'GTM Engineering', 'Marketing Automation', 'Venturing'],
    image: '/images/team-florian-square.png',
    linkedin: 'https://www.linkedin.com/in/florianmetzger/',
    profileLink: '/about/fm',
  },
];

const mechanisms = [
  {
    icon: Eye,
    num: 'M1',
    label: { de: 'HYPOTHESEN-MASCHINE', en: 'HYPOTHESIS ENGINE' },
    title: { de: 'Wir sehen den Hebel — bevor du ihn siehst.', en: 'We see the lever — before you do.' },
    body: {
      de: 'Durch die Kombination aus Marktverständnis, operativer Erfahrung und AI-Orchestration generieren wir Perspektiven die andere nicht haben. In 48 Stunden. Nicht in 3 Wochen.',
      en: 'By combining market understanding, operational experience, and AI orchestration, we generate perspectives others don\'t have. In 48 hours. Not 3 weeks.',
    },
    href: '/expertise/hypothesen-maschine',
    amber: false,
  },
  {
    icon: ArrowRightLeft,
    num: 'M2',
    label: { de: 'ÜBERSETZUNGSKOMPETENZ', en: 'TRANSLATION COMPETENCE' },
    title: { de: 'Strategie die auf dem Slide Deck bleibt, ist wertlos.', en: 'Strategy that stays on the slide deck is worthless.' },
    body: {
      de: 'Wir übersetzen Strategie in operative Realität — in Systeme, Prozesse und Teams die funktionieren. Nicht irgendwann. Jetzt.',
      en: 'We translate strategy into operational reality — into systems, processes, and teams that work. Not someday. Now.',
    },
    href: '/expertise/uebersetzungskompetenz',
    amber: false,
  },
  {
    icon: Settings,
    num: 'M3',
    label: { de: 'FUNKTIONIERENDE SYNTHESE', en: 'FUNCTIONING SYNTHESIS' },
    title: { de: 'Kein Slide Deck. Kein Abschlussbericht.', en: 'No slide deck. No final report.' },
    body: {
      de: 'Wir bauen Mechanismen die in der Realität funktionieren — nicht in der Präsentation. Strategie + Execution + Systeme in einem Zug.',
      en: 'We build mechanisms that work in reality — not in the presentation. Strategy + execution + systems in one move.',
    },
    href: '/expertise/funktionierende-synthese',
    amber: false,
  },
  {
    icon: Cpu,
    num: 'M4',
    label: { de: 'AI ORCHESTRATION', en: 'AI ORCHESTRATION' },
    title: { de: 'AI macht M1–M3 10x schneller.', en: 'AI makes M1–M3 10x faster.' },
    body: {
      de: 'Wir sind AI Orchestrators — nicht AI User. Das ist kein Feature. Das ist Architektur. M1–M3 funktionieren. Mit M4 funktionieren sie schneller, schärfer, tiefer.',
      en: 'We\'re AI orchestrators — not AI users. It\'s not a feature. It\'s architecture. M1–M3 work. With M4, they work faster, sharper, deeper.',
    },
    href: '/expertise/ai-orchestration',
    amber: true,
  },
];

const stats = [
  { value: '80+', label: { de: 'Unternehmen begleitet', en: 'Companies Supported' }, sub: { de: 'Series A–D · DACH · B2B SaaS', en: 'Series A–D · DACH · B2B SaaS' } },
  { value: '140+', label: { de: 'Engagements', en: 'Engagements' }, sub: { de: 'Ø 1,75 Engagements pro Unternehmen', en: 'Avg 1.75 engagements per company' } },
  { value: '€2.5B+', label: { de: 'Bewertung kumuliert', en: 'Cumulative Valuation' }, sub: { de: 'Stand März 2026', en: 'As of March 2026' }, accent: true },
  { value: '90', label: { de: 'Tage bis Ergebnis', en: 'Days to Results' }, sub: { de: 'Garantiert oder Geld zurück', en: 'Guaranteed or money back' } },
];

const caseSnippets = [
  { title: { de: 'Series B SaaS · €15M ARR', en: 'Series B SaaS · €15M ARR' }, result: { de: 'CAC €12k → €5k (–58%) in 30 Tagen', en: 'CAC €12k → €5k (–58%) in 30 days' } },
  { title: { de: 'Series C SaaS · €50M ARR', en: 'Series C SaaS · €50M ARR' }, result: { de: 'Rule of 40: 25 → 55 (+30pp) in 90 Tagen', en: 'Rule of 40: 25 → 55 (+30pp) in 90 days' } },
  { title: { de: 'VC Portfolio · 15 Unternehmen', en: 'VC Portfolio · 15 Companies' }, result: { de: 'Bewertung +€150M (+30%) in 12 Monaten', en: 'Valuation +€150M (+30%) in 12 months' } },
];

// =============================================================================
// COMPONENT
// =============================================================================

const About: React.FC = () => {
  const { language } = useLanguage();
  const de = language === 'de';
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Scroll-reveal refs
  const heroAnim = useScrollAnimation({ threshold: 0.1 });
  const teamAnim = useScrollAnimation({ threshold: 0.1 });
  const mechAnim = useScrollAnimation({ threshold: 0.1 });
  const proofAnim = useScrollAnimation({ threshold: 0.1 });
  const missionAnim = useScrollAnimation({ threshold: 0.1 });
  const ventureAnim = useScrollAnimation({ threshold: 0.1 });
  const ctaAnim = useScrollAnimation({ threshold: 0.1 });

  // Parallax
  const heroParallax = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });
  const teamParallax = useParallaxLayers({ speeds: [0.05, 0.12] });
  const mechParallax = useParallaxLayers({ speeds: [0.05, 0.12] });

  const scrollToNext = () => {
    const hero = heroParallax.containerRef.current;
    if (hero) {
      const next = hero.nextElementSibling as HTMLElement;
      next?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PersonSchema name="Michel Lason" jobTitle="Founder & CEO" description="19 Jahre Startups skalieren. Autor Fix Growth. Scale Faster." image="/images/team-michel.png" url="/ml" sameAs={['https://www.linkedin.com/in/michellason/']} />
      <PersonSchema name="Alban Halili" jobTitle="Partner" description="10+ Jahre B2B Sales skalieren." image="/images/team-alban.png" url="/ah" sameAs={['https://www.linkedin.com/in/alban-halili/']} />
      <PersonSchema name="Florian Metzger" jobTitle="Partner" description="RevOps, GTM Engineering, Venture Architect." image="/images/team-florian-square.png" url="/fm" sameAs={['https://www.linkedin.com/in/florianmetzger/']} />
      <Navigation />

      {/* ================================================================= */}
      {/* SECTION 1: HERO — Deep Space, 3-Layer Parallax, min-h-screen */}
      {/* ================================================================= */}
      <section
        ref={(el) => {
          (heroAnim.ref as React.MutableRefObject<HTMLElement | null>).current = el;
          (heroParallax.containerRef as React.MutableRefObject<HTMLElement | null>).current = el;
        }}
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise dark-section"
      >
        {/* Layer 1: Deep Space */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
          style={{ transform: `translateY(${heroParallax.offsets[0]}px) scale(1.1)` }}
        />
        <div
          className="absolute inset-0 bg-mesh opacity-60 transition-transform duration-100"
          style={{ transform: `translateY(${heroParallax.offsets[0]}px) scale(1.1)` }}
        />
        {/* Layer 2: Stars + Trails */}
        <div className="absolute inset-0 transition-transform duration-100" style={{ transform: `translateY(${heroParallax.offsets[1]}px)` }}>
          <TwinklingStars />
        </div>
        <div className="absolute inset-0 transition-transform duration-100" style={{ transform: `translateY(${heroParallax.offsets[1]}px)` }}>
          <GrowthTrails />
        </div>
        {/* Layer 3: Grid */}
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100"
          style={{ transform: `translateY(${heroParallax.offsets[2]}px) scale(1.1)` }}
        />

        <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
          {/* Overline */}
          <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="h-px w-12 bg-gradient-primary" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              EXPERTISE × SPEED = IMPACT
            </span>
            <span className="h-px w-12 bg-gradient-primary" />
          </div>

          {/* H1 */}
          <h1 className={`font-display text-hero-lg mb-8 transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <span className="block text-foreground">
              {de ? 'Deine Strategie funktioniert auf dem Slide Deck.' : 'Your strategy works on the slide deck.'}
            </span>
            <span className="block text-gradient animate-gradient bg-gradient-primary italic">
              {de ? 'Wir sorgen dafür, dass sie in der Realität funktioniert.' : 'We make it work in reality.'}
            </span>
          </h1>

          {/* Subline */}
          <p className={`text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {de ? 'Nicht mit Slides. Mit Systemen, die funktionieren. Fucking schnell.' : 'Not with slides. With systems that work. Fucking fast.'}
          </p>

          {/* Badge */}
          <div className={`transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent border border-accent/30 rounded-full bg-card shadow-brutal-sm">
              {de ? 'FÜR CEOS VON FINANZIERTEN STARTUPS · SERIES A–B · DACH' : 'FOR CEOS OF FUNDED STARTUPS · SERIES A–B · DACH'}
            </span>
          </div>
        </div>

        {/* Scroll Chevron */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* ================================================================= */}
      {/* SECTION 2: DIE DREI MENSCHEN */}
      {/* ================================================================= */}
      <section
        ref={(el) => {
          (teamAnim.ref as React.MutableRefObject<HTMLElement | null>).current = el;
          (teamParallax.containerRef as React.MutableRefObject<HTMLElement | null>).current = el;
        }}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-mesh opacity-40 transition-transform duration-100" style={{ transform: `translateY(${teamParallax.offsets[0]}px) scale(1.05)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background transition-transform duration-100" style={{ transform: `translateY(${teamParallax.offsets[1]}px) scale(1.05)` }} />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${teamAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'DAS TEAM' : 'THE TEAM'}
          </p>
          <h2 className={`font-display text-display-md mb-12 text-center transition-all duration-700 ${teamAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {de ? <>Drei Menschen.<br />Ein System.</> : <>Three people.<br />One system.</>}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((m, i) => (
              <div
                key={m.name}
                className={`border-2 border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-glow ${teamAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 2) * 100}ms` }}
              >
                {/* Photo + LinkedIn */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={m.image}
                    alt={m.name}
                    className={`w-20 h-20 rounded-full object-cover ${m.name === 'Alban Halili' ? 'object-top' : ''}`}
                  />
                  <div>
                    <h3 className="font-display text-xl text-foreground">{m.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{de ? m.role.de : m.role.en}</p>
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-1 text-muted-foreground hover:text-accent transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Key Line */}
                <p className="font-semibold text-foreground mb-3">
                  {de ? m.keyLine.de : m.keyLine.en}
                </p>

                {/* Body */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {de ? m.body.de : m.body.en}
                </p>

                {/* Result Badge */}
                <span className="inline-block text-xs px-3 py-1 border border-accent/30 bg-accent/10 text-accent rounded-full mb-4">
                  {de ? m.badge.de : m.badge.en}
                </span>

                {/* Tags */}
                <p className="text-xs text-muted-foreground mb-4">
                  {m.tags.join(' · ')}
                </p>

                {/* Link */}
                <Link to={m.profileLink} className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors">
                  {de ? `Mehr über ${m.name.split(' ')[0]}` : `More about ${m.name.split(' ')[0]}`}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 3: WARUM WIR ANDERS SIND — M1–M4 */}
      {/* ================================================================= */}
      <section
        ref={(el) => {
          (mechAnim.ref as React.MutableRefObject<HTMLElement | null>).current = el;
          (mechParallax.containerRef as React.MutableRefObject<HTMLElement | null>).current = el;
        }}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-mesh opacity-40 transition-transform duration-100" style={{ transform: `translateY(${mechParallax.offsets[0]}px) scale(1.05)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 transition-transform duration-100" style={{ transform: `translateY(${mechParallax.offsets[1]}px) scale(1.05)` }} />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />

        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${mechAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'WARUM ES FUNKTIONIERT' : 'WHY IT WORKS'}
          </p>
          <h2 className={`font-display text-display-md mb-12 text-center transition-all duration-700 ${mechAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {de ? <>Andere beraten.<br />Wir bauen.</> : <>Others advise.<br />We build.</>}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mechanisms.map((m, i) => {
              const Icon = m.icon;
              const accentColor = m.amber ? 'text-amber-500' : 'text-accent';
              const bgColor = m.amber ? 'bg-amber-500/10' : 'bg-accent/10';
              const borderHover = m.amber ? 'hover:border-amber-500/50' : 'hover:border-primary/50';
              return (
                <Link
                  key={m.num}
                  to={m.href}
                  className={`group relative block p-8 border-2 border-border bg-card ${borderHover} hover:shadow-glow transition-all duration-500 ${mechAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(i + 2) * 100}ms` }}
                >
                  <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider ${accentColor} opacity-60`}>
                    {m.num} — {de ? m.label.de : m.label.en}
                  </span>
                  <div className={`w-10 h-10 flex items-center justify-center mb-4 ${bgColor}`}>
                    <Icon className={`h-5 w-5 ${accentColor}`} />
                  </div>
                  <h3 className="font-display text-xl mb-2 text-foreground">
                    {de ? m.title.de : m.title.en}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {de ? m.body.de : m.body.en}
                  </p>
                  <span className={`inline-flex items-center text-sm ${accentColor} opacity-70 group-hover:opacity-100 group-hover:gap-2 transition-all`}>
                    {de ? 'Wie das funktioniert' : 'How it works'}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 4: BEWEIS */}
      {/* ================================================================= */}
      <section
        ref={proofAnim.ref as React.RefObject<HTMLElement>}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${proofAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'EVIDENZ' : 'EVIDENCE'}
          </p>
          <h2 className={`font-display text-display-md mb-12 text-center transition-all duration-700 ${proofAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {de ? 'Zahlen die für sich sprechen.' : 'Numbers that speak for themselves.'}
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`p-6 border-2 border-border bg-card text-center transition-all duration-500 ${proofAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 2) * 100}ms` }}
              >
                <span className={`font-mono text-3xl md:text-4xl font-bold ${s.accent ? 'text-accent' : 'text-primary'}`}>
                  {s.value}
                </span>
                <span className="block text-sm text-foreground mt-2">
                  {de ? s.label.de : s.label.en}
                </span>
                <span className="block text-xs text-muted-foreground mt-1">
                  {de ? s.sub.de : s.sub.en}
                </span>
              </div>
            ))}
          </div>

          {/* Case Snippets */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {caseSnippets.map((c, i) => (
              <div
                key={i}
                className={`p-5 border-2 border-border bg-card transition-all duration-500 ${proofAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 6) * 100}ms` }}
              >
                <p className="text-sm font-medium text-foreground mb-1">{de ? c.title.de : c.title.en}</p>
                <p className="text-sm font-semibold text-accent">{de ? c.result.de : c.result.en}</p>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-700 ${proofAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '900ms' }}>
            <Link to="/cases" className="inline-flex items-center text-sm text-accent hover:underline">
              {de ? 'Alle Cases ansehen' : 'View All Cases'}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 5: WAS UNS ANTREIBT / MISSION */}
      {/* ================================================================= */}
      <section
        ref={missionAnim.ref as React.RefObject<HTMLElement>}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />

        <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 transition-all duration-700 ${missionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'WARUM WIR EXISTIEREN' : 'WHY WE EXIST'}
          </p>
          <h2 className={`font-display text-display-md mb-8 transition-all duration-700 ${missionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {de
              ? 'Die Lücke zwischen Strategie und Realität kostet Startups ihre Zukunft.'
              : 'The gap between strategy and reality costs startups their future.'}
          </h2>

          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 ${missionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {de
              ? 'Jedes Startup hat heute eine Strategie. Das Problem ist nicht die Strategie — es ist die Lücke zur Realität. Wir existieren um diese Lücke zu schließen. Schneller als jeder andere. Mit Systemen die bleiben.'
              : 'Every startup has a strategy today. The problem isn\'t the strategy — it\'s the gap to reality. We exist to close that gap. Faster than anyone. With systems that last.'}
          </p>

          {/* Quote */}
          <blockquote className={`text-xl md:text-2xl font-display italic text-accent/80 max-w-3xl mx-auto mb-16 transition-all duration-700 ${missionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            „{de
              ? 'Die Frage ist nicht ob du eine Strategie hast. Die Frage ist ob sie in der Realität funktioniert.'
              : 'The question is not whether you have a strategy. The question is whether it works in reality.'}"
            <span className="block text-sm text-muted-foreground mt-3 not-italic">— Michel Lason</span>
          </blockquote>

          {/* 3 Values */}
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${missionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            {[
              { icon: Target, title: 'Execution-First', desc: { de: 'Systeme, nicht Slides.', en: 'Systems, not slides.' } },
              { icon: Zap, title: 'Speed Matters', desc: { de: '30 Tage, nicht 6 Monate.', en: '30 days, not 6 months.' } },
              { icon: Handshake, title: 'Partnership', desc: { de: 'Co-Pilots, nicht Consultants.', en: 'Co-pilots, not consultants.' } },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display text-lg font-semibold mb-1">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{de ? v.desc.de : v.desc.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 5.5: PIGTIE VENTURE */}
      {/* ================================================================= */}
      <section
        ref={ventureAnim.ref as React.RefObject<HTMLElement>}
        className="relative py-16 md:py-20 overflow-hidden"
      >
        <div className="container max-w-3xl mx-auto px-6 relative z-10">
          <div className={`border-2 border-border bg-card p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 ${ventureAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-12 h-12 bg-pink-500/10 flex items-center justify-center flex-shrink-0">
              <PiggyBank className="w-6 h-6 text-pink-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold mb-1">Pigtie</h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">The Agentic OS for Personal Finance · Portfolio Company</p>
              <p className="text-sm text-muted-foreground">
                {de
                  ? 'Unterstützt Menschen mit KI-gesteuerter Finanzberatung und ermöglicht Banken, ihre Kunden besser zu bedienen.'
                  : 'Empowering individuals with AI-driven financial guidance, and enabling banks to better serve their customers.'}
              </p>
            </div>
            <a
              href="https://www.pigtie.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-accent hover:underline whitespace-nowrap"
            >
              Visit Pigtie
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 6: FINAL CTA */}
      {/* ================================================================= */}
      <section
        ref={ctaAnim.ref as React.RefObject<HTMLElement>}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

        <div className="container max-w-3xl mx-auto px-6 relative z-10 text-center">
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'NÄCHSTER SCHRITT' : 'NEXT STEP'}
          </p>
          <h2 className={`font-display text-display-md mb-6 transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {de ? <>30 Minuten. Kein Pitch.<br />Direkt mit Michel.</> : <>30 minutes. No pitch.<br />Directly with Michel.</>}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-xl mx-auto mb-10 transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {de
              ? 'Wir schauen gemeinsam wo dein Engpass liegt. Du gehst mit 3 konkreten nächsten Schritten raus.'
              : 'We look together at where your bottleneck is. You leave with 3 concrete next steps.'}
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-8 py-4 bg-gradient-accent text-white font-semibold shadow-accent-glow hover:shadow-lg transition-all whitespace-nowrap inline-flex items-center gap-2"
            >
              {de ? 'Kostenloses Gespräch buchen' : 'Book Free Conversation'}
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/solutions"
              className="px-6 py-3 border-2 border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all inline-flex items-center gap-2 text-sm"
            >
              {de ? 'Solutions ansehen' : 'Explore Solutions'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className={`text-xs text-muted-foreground transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            {de ? 'Unverbindlich · Kein Formular · Direkt mit Michel' : 'No commitment · No form · Directly with Michel'}
          </p>
        </div>
      </section>

      <Footer />

      <FilloutBookingModal
        formSlug="inflection-call"
        source="about"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={de ? 'Inflection Call buchen' : 'Book Inflection Call'}
      />
    </div>
  );
};

export default About;
