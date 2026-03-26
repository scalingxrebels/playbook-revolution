import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, X, Lightbulb, Target, Star, Linkedin, BookOpen, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';
import TwinklingStars from '@/components/TwinklingStars';
import GrowthTrails from '@/components/GrowthTrails';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import PersonSchema from '@/components/seo/PersonSchema';
import PageSEO from '@/components/seo/PageSEO';

/* ─────────────── SECTION WRAPPER (Home pattern) ─────────────── */
const Section: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
}> = ({ children, dark, id }) => {
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.05, 0.15] });

  return (
    <section
      id={id}
      ref={containerRef as React.RefObject<HTMLElement>}
      className={`relative py-24 md:py-32 overflow-hidden ${dark ? 'dark-section' : ''}`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[0]}px) scale(1.05)` }}
      />
      <div
        className="absolute inset-0 bg-mesh opacity-40 transition-transform duration-100"
        style={{ transform: `translateY(${offsets[1]}px) scale(1.05)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════ */
/*  ML PAGE                                                       */
/* ═══════════════════════════════════════════════════════════════ */
const ML: React.FC = () => {
  const { language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const de = language === 'de';

  /* ─── HERO ─── */
  const heroRef = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  const badges = ['Revenue Architecture', 'GTM Motions', 'AI Orchestration', 'Investor Readiness'];

  /* ─── SECTION 2: DIE FORMEL ─── */
  const s2 = useScrollAnimation({ threshold: 0.15 });
  const formulaParagraphs = de
    ? [
        'Expertise ohne Speed ist Zeitverschwendung. Speed ohne Expertise ist Pfusch. Beides zusammen — das ist Impact.',
        'Ich erfasse komplexe Zusammenhänge in Minuten. Was andere Wochen kostet, kostet mich Stunden. Nicht weil ich oberflächlich bin — sondern weil ich Muster erkenne die andere nicht sehen.',
        'Das ist M1: Ich komme in jedes Gespräch mit einer Theorie. Nicht mit einer Frage.',
      ]
    : [
        "Expertise without speed is a waste of time. Speed without expertise is shoddy work. Both together — that's impact.",
        "I grasp complex relationships in minutes. What costs others weeks, costs me hours. Not because I'm superficial — but because I recognize patterns others don't see.",
        "That's M1: I come into every conversation with a theory. Not with a question.",
      ];

  /* ─── SECTION 3: STORY ─── */
  const s3 = useScrollAnimation({ threshold: 0.1 });
  const stations = [
    {
      label: de ? 'DIE ERKENNTNIS' : 'THE INSIGHT',
      title: de
        ? 'Menschen können Dinge tun, die sie selbst nicht für möglich halten.'
        : "People can do things they didn't think possible.",
      body: de
        ? 'Das ist die Grundüberzeugung die alles andere antreibt. Wenn du ihnen die richtigen Systeme gibst. Wenn du ihnen Vertrauen schenkst. Wenn du ihnen Wissen zugänglich machst. Das ist Leadership. Und das ist der Grund warum ich Systeme baue — nicht Slides.'
        : "That's the core belief driving everything else. When you give them the right systems. When you give them trust. When you make knowledge accessible. That's leadership. And that's why I build systems — not slides.",
    },
    {
      label: de ? 'DER BEWEIS' : 'THE PROOF',
      title: de ? '€1,3M auf €13,7M ARR. In 2 Jahren.' : '€1.3M to €13.7M ARR. In 2 years.',
      body: de
        ? 'Bei smapOne habe ich gelernt was wirklich skaliert. Nicht Ideen. Nicht Strategien. Systeme. AI erkannt bevor ChatGPT kam. Marktleadership ausgebaut. Schneller gewachsen als der Markt. Rule of 40 +10 Punkte. EBITDA von –€300k auf +€150k. Das ist nicht Theorie. Das ist Erfahrung.'
        : "At smapOne I learned what truly scales. Not ideas. Not strategies. Systems. Recognized AI before ChatGPT arrived. Expanded market leadership. Grew faster than the market. Rule of 40 +10 points. EBITDA from –€300k to +€150k. That's not theory. That's experience.",
    },
    {
      label: de ? 'DIE KONSEQUENZ' : 'THE CONSEQUENCE',
      title: de
        ? 'ScalingX. Weil die Lücke zwischen Strategie und Realität zu gross ist.'
        : 'ScalingX. Because the gap between strategy and reality is too wide.',
      body: de
        ? '2024: ScalingX gegründet. 2025: ScalingX Hypergrowth. Das Buch. 8 Kunden. 11 Projekte. Jedes Startup hat heute eine Strategie. Das Problem ist nicht die Strategie — es ist die Übersetzung in operative Realität. Das ist was wir tun. Nicht irgendwann. In 30 Tagen.'
        : '2024: Founded ScalingX. 2025: ScalingX Hypergrowth. The book. 8 customers. 11 projects. Every startup has a strategy today. The problem isn\'t strategy — it\'s the translation into operational reality. That\'s what we do. Not someday. In 30 days.',
    },
  ];

  /* ─── SECTION 4: TESTIMONIALS ─── */
  const s4 = useScrollAnimation({ threshold: 0.1 });
  const prominentTestimonials = [
    {
      text: de
        ? 'Das Projekt war inspirierend, herausfordernd und strukturiert. Das Resultat war atemberaubend. Uneingeschränkte Empfehlung.'
        : 'The project was inspiring, challenging and structured. The result was breathtaking. Unreserved recommendation.',
    },
    {
      text: de
        ? 'Du hast super viel bewegt und vor allem Professionalität reingebracht. Du bist ein echter Typ mit viel Empathie und hast eine Menge auf dem Kasten.'
        : "You've accomplished a lot and above all brought professionalism. You're a genuine person with a lot of empathy and have a lot going for you.",
    },
    {
      text: de
        ? 'Deine Art zu begeistern, deine offene, freundliche und gewinnende Art zu kommunizieren — damit hast du mich eingenommen. Du hast Power ohne Ende und Wissen.'
        : "Your way of inspiring, your open, friendly and winning way of communicating — that's what won me over. You have endless power and knowledge.",
    },
  ];
  const secondaryTestimonials = [
    de ? 'Du bist einer der brillantesten Redner, die ich je gesehen habe.' : 'You are one of the most brilliant speakers I have ever seen.',
    de ? 'Durch deine Führung lerne ich, mir selbst zu vertrauen. Du bist Coach, Mentor und Vorbild — und gibst mir trotzdem immer das Gefühl von Augenhöhe.' : "Through your leadership I learn to trust myself. You are coach, mentor and role model — and yet you always make me feel like we're on the same level.",
    de ? 'Tausendsassa. Erster Mentor. So möchte ich sein.' : "Jack of all trades. First mentor. That's who I want to be.",
    de ? 'Ich habe an dir sehr geschätzt, dass du Business-Themen so nahbar gemacht hast. Du warst oft ein Fels der Vernunft.' : 'I really appreciated that you made business topics so approachable. You were often a voice of reason.',
  ];

  /* ─── SECTION 5: NOT ─── */
  const s5 = useScrollAnimation({ threshold: 0.1 });
  const nots = [
    {
      title: de ? 'Pfusch' : 'Shoddy Work',
      body: de
        ? 'Dinge oberflächlich machen weil der Aufwand scheut. Das ist nicht Effizienz. Das ist Respektlosigkeit.'
        : "Doing things superficially because effort is avoided. That's not efficiency. That's disrespect.",
    },
    {
      title: de ? 'Zeitverschwendung' : 'Wasting Time',
      body: de
        ? 'Falsche Entscheidungen. Verschleppte Themen. Dinge nicht tun, zu spät tun, falsch tun. Das kostet Startups ihre Zukunft.'
        : "Wrong decisions. Delayed topics. Not doing things, doing them too late, doing them wrong. That costs startups their future.",
    },
    {
      title: 'Change Resistance',
      body: de
        ? 'Startups sind per Design Unternehmen die sich konstant verändern müssen. Wer träge ist, ist am falschen Ort.'
        : 'Startups are by design companies that must constantly change. Those who are sluggish are in the wrong place.',
    },
  ];

  /* ─── SECTION 6: DRIVES ─── */
  const s6 = useScrollAnimation({ threshold: 0.1 });
  const moments = [
    {
      icon: Lightbulb,
      title: de ? 'WENN JEMAND ES VERSTANDEN HAT' : 'WHEN SOMEONE GETS IT',
      body: de
        ? 'Der Moment wo Klarheit entsteht. Wo der CEO sieht: Das ist der Hebel.'
        : 'The moment clarity emerges. When the CEO sees: This is the lever.',
    },
    {
      icon: Target,
      title: de ? 'WENN JEMAND ES ANGEWENDET HAT' : 'WHEN SOMEONE APPLIES IT',
      body: de
        ? 'Der Moment wo das System läuft. Nicht in der Theorie. In der Realität.'
        : 'The moment the system runs. Not in theory. In reality.',
    },
    {
      icon: Star,
      title: de ? 'WENN JEMAND DAMIT ERFOLG HAT' : 'WHEN SOMEONE SUCCEEDS',
      body: de
        ? 'Und wir das gemeinsam feiern. Das ist der Grund für alles andere.'
        : "And we celebrate it together. That's the reason for everything else.",
    },
  ];

  /* ─── SECTION 7: CTA ─── */
  const s7 = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <PageSEO path="/about/ml" />
      <PersonSchema
        name="Michel Lason"
        jobTitle="Founder & CEO"
        description="Grew €1.3M to €13.7M ARR in 2 years. Expertise × Speed = Impact."
        image="/images/ml-hero-new.png"
        url="/about/ml"
        sameAs={['https://www.linkedin.com/in/michellason']}
      />

      {/* ════════════════════ SECTION 1 — HERO ════════════════════ */}
      <section
        ref={heroRef.containerRef as React.RefObject<HTMLElement>}
        className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] transition-transform duration-100"
          style={{ transform: `translateY(${heroRef.offsets[0]}px) scale(1.1)` }}
        />
        <div
          className="absolute inset-0 bg-mesh opacity-60 transition-transform duration-100"
          style={{ transform: `translateY(${heroRef.offsets[0]}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 transition-transform duration-100" style={{ transform: `translateY(${heroRef.offsets[1]}px)` }}>
          <TwinklingStars />
        </div>
        <div className="absolute inset-0 transition-transform duration-100" style={{ transform: `translateY(${heroRef.offsets[1]}px)` }}>
          <GrowthTrails />
        </div>
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20 transition-transform duration-100"
          style={{ transform: `translateY(${heroRef.offsets[2]}px) scale(1.1)` }}
        />

        <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10">
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow">
                <img
                  src="/images/ml-hero-new.png"
                  alt="Michel Lason"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-3 animate-fade-in">
                {de ? 'GRÜNDER & CEO · SCALINGX HYPERGROWTH' : 'FOUNDER & CEO · SCALINGX HYPERGROWTH'}
              </p>
              <h1 className="font-display text-hero-lg mb-4 animate-blur-in">
                Michel Lason
              </h1>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.15s' }}>
                {de ? 'Hat €1,3M auf €13,7M ARR gebracht.' : 'Grew €1.3M to €13.7M ARR.'}
                <br />
                {de ? 'In 2 Jahren.' : 'In 2 years.'}
              </h2>
              <p className="text-body-lg text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.25s' }}>
                {de
                  ? 'Findet den Hebel der wirklich zieht. Setzt ihn um — fucking fast.'
                  : 'Finds the lever that actually works. Executes it — fucking fast.'}
              </p>

              {/* Expertise Badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4 animate-slide-up" style={{ animationDelay: '0.35s' }}>
                {badges.map((b) => (
                  <span key={b} className="text-xs text-muted-foreground border border-border px-3 py-1">
                    {b}
                  </span>
                ))}
              </div>

              {/* Result Badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {['Rule of 40 +10 Pkt', 'EBITDA –€300k → +€150k', de ? '18 Jahre Operator' : '18 years Operator'].map((b) => (
                  <span key={b} className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1">
                    {b}
                  </span>
                ))}
              </div>

              {/* Formula Badge */}
              <div className="animate-slide-up" style={{ animationDelay: '0.45s' }}>
                <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent border border-accent/30 bg-card shadow-brutal-sm">
                  EXPERTISE × SPEED = IMPACT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ SECTION 2 — DIE FORMEL ════════════════════ */}
      <Section>
        <div
          ref={s2.ref as React.RefObject<HTMLDivElement>}
          className="container max-w-3xl mx-auto px-6"
        >
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${s2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'DIE FORMEL' : 'THE FORMULA'}
          </p>
          <h2 className={`font-display text-display-md mb-12 text-center transition-all duration-700 ${s2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de
              ? <>Expertise × Speed = Impact.<br />Nicht als Slogan. Als Arbeitsweise.</>
              : <>Expertise × Speed = Impact.<br />Not a slogan. A way of working.</>}
          </h2>

          <div className="space-y-6">
            {formulaParagraphs.map((p, i) => (
              <div
                key={i}
                className={`flex gap-4 transition-all duration-700 ${s2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="w-0.5 flex-shrink-0 bg-accent/30 rounded-full" />
                <p className="text-lg text-muted-foreground leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════ SECTION 3 — DIE STORY ════════════════════ */}
      <Section>
        <div
          ref={s3.ref as React.RefObject<HTMLDivElement>}
          className="container max-w-5xl mx-auto px-6"
        >
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${s3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'DIE STORY' : 'THE STORY'}
          </p>
          <h2 className={`font-display text-display-md mb-12 text-center transition-all duration-700 ${s3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? <>Nicht Biographie.<br />Fähigkeit.</> : <>Not biography.<br />Capability.</>}
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {stations.map((s, i) => (
              <div
                key={i}
                className={`relative pl-8 border-l-2 border-accent/20 transition-all duration-700 ${s3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 200}ms` }}
              >
                <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                  {s.label}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════ SECTION 4 — TESTIMONIALS ════════════════════ */}
      <Section>
        <div
          ref={s4.ref as React.RefObject<HTMLDivElement>}
          className="container max-w-5xl mx-auto px-6"
        >
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${s4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'STIMMEN' : 'VOICES'}
          </p>
          <h2 className={`font-display text-display-md mb-12 text-center transition-all duration-700 ${s4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'Was andere sagen.' : 'What others say.'}
          </h2>

          {/* 3 Prominent */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {prominentTestimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-card border-2 border-border p-6 md:p-8 transition-all duration-700 ${s4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <Quote className="h-5 w-5 text-accent/40 mb-4" />
                <p className="text-foreground italic leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>

          {/* 4 Secondary */}
          <div className="grid md:grid-cols-2 gap-4">
            {secondaryTestimonials.map((t, i) => (
              <div
                key={i}
                className={`border border-border p-4 transition-all duration-700 ${s4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 4) * 120}ms` }}
              >
                <p className="text-sm text-muted-foreground italic">"{t}"</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════ SECTION 5 — KLARHEIT ════════════════════ */}
      <Section>
        <div
          ref={s5.ref as React.RefObject<HTMLDivElement>}
          className="container max-w-5xl mx-auto px-6"
        >
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${s5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'KLARHEIT' : 'CLARITY'}
          </p>
          <h2 className={`font-display text-display-md mb-4 text-center transition-all duration-700 ${s5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'Womit ich nicht arbeite.' : "What I don't work with."}
          </h2>
          <p className={`text-muted-foreground text-center mb-12 transition-all duration-700 ${s5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'Klare Grenzen machen bessere Partnerschaften.' : 'Clear boundaries make better partnerships.'}
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {nots.map((n, i) => (
              <div
                key={i}
                className={`bg-card border-2 border-border p-6 md:p-8 transition-all duration-700 ${s5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <X className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{n.title}</h3>
                <p className="text-sm text-muted-foreground">{n.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════ SECTION 6 — ANTRIEB ════════════════════ */}
      <Section>
        <div
          ref={s6.ref as React.RefObject<HTMLDivElement>}
          className="container max-w-5xl mx-auto px-6"
        >
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center transition-all duration-700 ${s6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'ANTRIEB' : 'DRIVE'}
          </p>
          <h2 className={`font-display text-display-md mb-12 text-center transition-all duration-700 ${s6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de
              ? <>Drei Momente.<br />Das ist warum ich tue, was ich tue.</>
              : <>Three moments.<br />That's why I do what I do.</>}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {moments.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={i}
                  className={`bg-card border-2 border-border p-6 md:p-8 text-center transition-all duration-700 ${s6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(i + 1) * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                    {m.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{m.body}</p>
                </div>
              );
            })}
          </div>

          {/* Closing Quote */}
          <div className={`text-center transition-all duration-700 ${s6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            <p className="font-display text-2xl md:text-3xl text-muted-foreground italic">
              "Happiness is a problem (solved)."
            </p>
            <p className="text-sm text-muted-foreground mt-2">— Michel Lason</p>
          </div>
        </div>
      </Section>

      {/* ════════════════════ SECTION 7 — FINAL CTA ════════════════════ */}
      <Section id="final-cta">
        <div
          ref={s7.ref as React.RefObject<HTMLDivElement>}
          className="container max-w-3xl mx-auto px-6 text-center"
        >
          <p className={`text-sm font-semibold uppercase tracking-widest text-accent mb-4 transition-all duration-700 ${s7.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de ? 'NÄCHSTER SCHRITT' : 'NEXT STEP'}
          </p>
          <h2 className={`font-display text-display-md mb-6 transition-all duration-700 ${s7.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {de
              ? <>30 Minuten. Kein Pitch.<br />Direkt mit mir.</>
              : <>30 minutes. No pitch.<br />Directly with me.</>}
          </h2>
          <p className={`text-body-lg text-muted-foreground mb-4 transition-all duration-700 ${s7.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {de
              ? 'Wir schauen gemeinsam wo dein Engpass liegt. Du gehst mit 3 konkreten nächsten Schritten raus.'
              : "We'll look together at where your bottleneck is. You leave with 3 concrete next steps."}
          </p>

          <div className={`transition-all duration-700 ${s7.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <Button
              size="lg"
              className="bg-gradient-accent text-accent-foreground font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow whitespace-nowrap"
              onClick={() => setIsBookingOpen(true)}
            >
              {de ? 'Kostenloses Gespräch buchen' : 'Book a free call'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              {de ? 'Unverbindlich · Kein Formular · Direkt mit Michel' : 'No commitment · No form · Directly with Michel'}
            </p>
          </div>

          {/* Secondary Links */}
          <div className={`flex flex-wrap justify-center gap-4 mt-8 transition-all duration-700 ${s7.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '350ms' }}>
            <a
              href="https://www.linkedin.com/in/michellason"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-4 w-4 mr-1.5" /> LinkedIn
            </a>
            <Link to="/solutions" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors">
              <Layers className="h-4 w-4 mr-1.5" /> Solutions
            </Link>
            <Link to="/insights" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors">
              <BookOpen className="h-4 w-4 mr-1.5" /> Fix Growth. Scale Faster.
            </Link>
          </div>
        </div>
      </Section>

      <Footer />

      <FilloutBookingModal
        formSlug="ml-sync"
        source="team-ml"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default ML;
