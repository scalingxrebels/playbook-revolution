import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TwinklingStars from "@/components/TwinklingStars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParallaxLayers } from "@/hooks/useParallax";
import { 
  GraduationCap, 
  TrendingUp, 
  DollarSign, 
  HeartHandshake, 
  Settings, 
  Rocket, 
  Brain, 
  Users, 
  Briefcase, 
  Sparkles,
  Clock,
  FileText,
  Zap,
  UserCheck,
  Video,
  CheckCircle,
  XCircle,
  ArrowRight,
  Calendar,
  Shield,
  ChevronDown
} from "lucide-react";

const Workshop = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });

  const workshopTypes = [
    {
      id: 'gtm',
      icon: TrendingUp,
      titleEn: 'GTM Strategy Workshop',
      titleDe: 'GTM Strategy Workshop',
      whenEn: 'Your GTM strategy is unclear (CAC rising, growth stalling), your team isn\'t aligned on GTM (Marketing, Sales, Product misaligned), you need tactical GTM frameworks (not just theory).',
      whenDe: 'Deine GTM-Strategie ist unklar (CAC steigt, Wachstum stockt), dein Team ist nicht auf GTM ausgerichtet (Marketing, Sales, Product nicht aligned), du brauchst taktische GTM-Frameworks (nicht nur Theorie).',
      coverEn: ['ICP Definition (who to target)', 'Value Proposition (how to position)', 'GTM Channels (where to focus)', 'GTM Playbooks (how to execute)'],
      coverDe: ['ICP Definition (wen ansprechen)', 'Value Proposition (wie positionieren)', 'GTM Channels (wo fokussieren)', 'GTM Playbooks (wie umsetzen)'],
      outcomeEn: 'Team Alignment +85%, GTM Clarity +80%',
      outcomeDe: 'Team Alignment +85%, GTM Clarity +80%'
    },
    {
      id: 'growth',
      icon: TrendingUp,
      titleEn: 'Growth Strategy Workshop',
      titleDe: 'Growth Strategy Workshop',
      whenEn: 'Your growth strategy is unclear (growth stalling), your team doesn\'t know which growth lever to pull, you need growth frameworks (not just ideas).',
      whenDe: 'Deine Wachstumsstrategie ist unklar (Wachstum stockt), dein Team weiß nicht, welchen Growth-Hebel es ziehen soll, du brauchst Growth-Frameworks (nicht nur Ideen).',
      coverEn: ['Growth Engines (GTM, Product, Customer Success)', 'Growth Drivers (what\'s working, what\'s not)', 'Growth Bottlenecks (what\'s blocking growth)', 'Growth Playbooks (how to accelerate)'],
      coverDe: ['Growth Engines (GTM, Product, Customer Success)', 'Growth Drivers (was funktioniert, was nicht)', 'Growth Bottlenecks (was blockiert Wachstum)', 'Growth Playbooks (wie beschleunigen)'],
      outcomeEn: 'Team Alignment +85%, Growth Clarity +80%',
      outcomeDe: 'Team Alignment +85%, Growth Clarity +80%'
    },
    {
      id: 'pricing',
      icon: DollarSign,
      titleEn: 'Pricing Strategy Workshop',
      titleDe: 'Pricing Strategy Workshop',
      whenEn: 'Your pricing is broken (ARPU stagnant, discounting high), your team isn\'t aligned on pricing (Sales discounting, Marketing confused), you need pricing frameworks (not just theory).',
      whenDe: 'Dein Pricing ist kaputt (ARPU stagniert, hohe Rabatte), dein Team ist nicht auf Pricing ausgerichtet (Sales gibt Rabatte, Marketing verwirrt), du brauchst Pricing-Frameworks (nicht nur Theorie).',
      coverEn: ['Pricing Strategy (value-based vs. cost-based)', 'Pricing Models (per-user, per-feature, usage-based)', 'Packaging (how to package features)', 'Pricing Playbooks (how to execute)'],
      coverDe: ['Pricing Strategy (wertbasiert vs. kostenbasiert)', 'Pricing Models (pro User, pro Feature, nutzungsbasiert)', 'Packaging (wie Features bündeln)', 'Pricing Playbooks (wie umsetzen)'],
      outcomeEn: 'Team Alignment +85%, Pricing Clarity +80%',
      outcomeDe: 'Team Alignment +85%, Pricing Clarity +80%'
    },
    {
      id: 'cs',
      icon: HeartHandshake,
      titleEn: 'Customer Success Workshop',
      titleDe: 'Customer Success Workshop',
      whenEn: 'Your customer success is broken (churn >5%, NRR <100%), your team doesn\'t know how to reduce churn, you need CS frameworks (not just theory).',
      whenDe: 'Dein Customer Success ist kaputt (Churn >5%, NRR <100%), dein Team weiß nicht, wie es Churn reduzieren kann, du brauchst CS-Frameworks (nicht nur Theorie).',
      coverEn: ['CS Strategy (onboarding, support, expansion)', 'Retention Drivers (what drives retention)', 'Churn Drivers (what drives churn)', 'CS Playbooks (how to execute)'],
      coverDe: ['CS Strategy (Onboarding, Support, Expansion)', 'Retention Drivers (was treibt Retention)', 'Churn Drivers (was treibt Churn)', 'CS Playbooks (wie umsetzen)'],
      outcomeEn: 'Team Alignment +85%, CS Clarity +80%',
      outcomeDe: 'Team Alignment +85%, CS Clarity +80%'
    },
    {
      id: 'operations',
      icon: Settings,
      titleEn: 'Operations Excellence Workshop',
      titleDe: 'Operations Excellence Workshop',
      whenEn: 'Your operations are chaotic (meetings 50/week, decision velocity 10 days), your team doesn\'t know how to improve operations, you need operations frameworks (not just theory).',
      whenDe: 'Deine Operations sind chaotisch (50 Meetings/Woche, Decision Velocity 10 Tage), dein Team weiß nicht, wie es Operations verbessern kann, du brauchst Operations-Frameworks (nicht nur Theorie).',
      coverEn: ['Operational Efficiency (meetings, decision velocity, coordination)', 'Operational Debt (manual processes, broken systems)', 'Scaling Readiness (can operations scale?)', 'Operations Playbooks (how to execute)'],
      coverDe: ['Operational Efficiency (Meetings, Decision Velocity, Koordination)', 'Operational Debt (manuelle Prozesse, kaputte Systeme)', 'Scaling Readiness (können Operations skalieren?)', 'Operations Playbooks (wie umsetzen)'],
      outcomeEn: 'Team Alignment +85%, Operations Clarity +80%',
      outcomeDe: 'Team Alignment +85%, Operations Clarity +80%'
    },
    {
      id: 'scaling',
      icon: Rocket,
      titleEn: 'Scaling Workshop',
      titleDe: 'Scaling Workshop',
      whenEn: 'Your scaling is broken (operational debt high, decision velocity slow), your team doesn\'t know how to scale, you need scaling frameworks (not just theory).',
      whenDe: 'Dein Scaling ist kaputt (Operational Debt hoch, Decision Velocity langsam), dein Team weiß nicht, wie es skalieren kann, du brauchst Scaling-Frameworks (nicht nur Theorie).',
      coverEn: ['Scaling Readiness (are you ready to scale?)', 'Scaling Bottlenecks (what\'s blocking scaling?)', 'Scaling Playbooks (how to scale)', 'Organizational Design (how to structure team)'],
      coverDe: ['Scaling Readiness (bereit zum Skalieren?)', 'Scaling Bottlenecks (was blockiert Scaling?)', 'Scaling Playbooks (wie skalieren)', 'Organizational Design (wie Team strukturieren)'],
      outcomeEn: 'Team Alignment +85%, Scaling Clarity +80%',
      outcomeDe: 'Team Alignment +85%, Scaling Clarity +80%'
    },
    {
      id: 'ai',
      icon: Brain,
      titleEn: 'AI Transformation Workshop',
      titleDe: 'AI Transformation Workshop',
      whenEn: 'Your AI strategy is missing (θ_index 0.2-0.4, no clear AI roadmap), your team doesn\'t know how to become AI-Native, you need AI frameworks (not just theory).',
      whenDe: 'Deine AI-Strategie fehlt (θ_index 0.2-0.4, keine klare AI-Roadmap), dein Team weiß nicht, wie es AI-Native werden kann, du brauchst AI-Frameworks (nicht nur Theorie).',
      coverEn: ['AI Maturity (θ_index assessment)', 'AI Use Cases (which AI use cases to prioritize)', 'AI ROI (which AI investments to make)', 'AI Playbooks (how to become AI-Native)'],
      coverDe: ['AI Maturity (θ_index Assessment)', 'AI Use Cases (welche AI Use Cases priorisieren)', 'AI ROI (welche AI-Investments tätigen)', 'AI Playbooks (wie AI-Native werden)'],
      outcomeEn: 'Team Alignment +85%, AI Clarity +90%',
      outcomeDe: 'Team Alignment +85%, AI Clarity +90%'
    },
    {
      id: 'board',
      icon: Users,
      titleEn: 'Board Governance Workshop',
      titleDe: 'Board Governance Workshop',
      whenEn: 'Your board governance is broken (board meetings unproductive), your team doesn\'t know how to work with board, you need board frameworks (not just theory).',
      whenDe: 'Deine Board Governance ist kaputt (Board Meetings unproduktiv), dein Team weiß nicht, wie es mit dem Board arbeiten soll, du brauchst Board-Frameworks (nicht nur Theorie).',
      coverEn: ['Board Strategy (how to work with board)', 'Board Meetings (how to run productive meetings)', 'Board Reporting (what to report)', 'Board Playbooks (how to execute)'],
      coverDe: ['Board Strategy (wie mit Board arbeiten)', 'Board Meetings (wie produktive Meetings führen)', 'Board Reporting (was berichten)', 'Board Playbooks (wie umsetzen)'],
      outcomeEn: 'Team Alignment +85%, Board Clarity +80%',
      outcomeDe: 'Team Alignment +85%, Board Clarity +80%'
    },
    {
      id: 'portfolio',
      icon: Briefcase,
      titleEn: 'Portfolio Excellence Workshop',
      titleDe: 'Portfolio Excellence Workshop',
      whenEn: 'Your portfolio lacks synergy (15 companies, no cross-portfolio value), your operating partners don\'t know how to support portfolio, you need portfolio frameworks (not just theory).',
      whenDe: 'Deinem Portfolio fehlt Synergie (15 Unternehmen, kein Cross-Portfolio-Wert), deine Operating Partner wissen nicht, wie sie das Portfolio unterstützen sollen, du brauchst Portfolio-Frameworks (nicht nur Theorie).',
      coverEn: ['Portfolio Strategy (how to create portfolio value)', 'Portfolio Synergies (where can companies collaborate?)', 'Portfolio Playbooks (how to execute)', 'Operating Partner Enablement (how to support portfolio)'],
      coverDe: ['Portfolio Strategy (wie Portfolio-Wert schaffen)', 'Portfolio Synergies (wo können Unternehmen zusammenarbeiten?)', 'Portfolio Playbooks (wie umsetzen)', 'Operating Partner Enablement (wie Portfolio unterstützen)'],
      outcomeEn: 'Team Alignment +85%, Portfolio Clarity +80%',
      outcomeDe: 'Team Alignment +85%, Portfolio Clarity +80%'
    },
    {
      id: 'bespoke',
      icon: Sparkles,
      titleEn: 'Bespoke Workshop (Custom Topic)',
      titleDe: 'Bespoke Workshop (Custom Topic)',
      whenEn: 'Your challenge isn\'t covered by standard workshops, you need custom workshop (tailored to your situation).',
      whenDe: 'Deine Herausforderung wird von Standard-Workshops nicht abgedeckt, du brauchst einen Custom Workshop (auf deine Situation zugeschnitten).',
      coverEn: ['Custom topic (based on your challenge)', 'Custom frameworks (tailored to your situation)', 'Custom playbooks (how to execute)'],
      coverDe: ['Custom Topic (basierend auf deiner Herausforderung)', 'Custom Frameworks (auf deine Situation zugeschnitten)', 'Custom Playbooks (wie umsetzen)'],
      outcomeEn: 'Custom pricing—contact us',
      outcomeDe: 'Custom Pricing—kontaktiere uns'
    }
  ];

  const symptoms = [
    {
      titleEn: 'Team misalignment',
      titleDe: 'Team Misalignment',
      descEn: 'Marketing, Sales, Product not aligned (different priorities)',
      descDe: 'Marketing, Sales, Product nicht aligned (unterschiedliche Prioritäten)'
    },
    {
      titleEn: 'No frameworks',
      titleDe: 'Keine Frameworks',
      descEn: 'Team lacks playbooks (no standardized approach)',
      descDe: 'Team hat keine Playbooks (kein standardisierter Ansatz)'
    },
    {
      titleEn: 'Low execution velocity',
      titleDe: 'Niedrige Execution Velocity',
      descEn: 'Decisions take 7-14 days (no clarity)',
      descDe: 'Entscheidungen dauern 7-14 Tage (keine Klarheit)'
    },
    {
      titleEn: 'Strategic confusion',
      titleDe: 'Strategische Verwirrung',
      descEn: 'Team doesn\'t understand strategy (no shared language)',
      descDe: 'Team versteht Strategie nicht (keine gemeinsame Sprache)'
    },
    {
      titleEn: 'Training gap',
      titleDe: 'Training Gap',
      descEn: 'Team needs tactical training (not just theory)',
      descDe: 'Team braucht taktisches Training (nicht nur Theorie)'
    }
  ];

  const examples = [
    {
      typeEn: 'GTM Strategy Workshop',
      typeDe: 'GTM Strategy Workshop',
      companyEn: 'Series B SaaS, €20M ARR, 100 employees',
      companyDe: 'Series B SaaS, €20M ARR, 100 Mitarbeiter',
      challengeEn: 'GTM misalignment (Marketing, Sales, Product not aligned), CAC rising',
      challengeDe: 'GTM Misalignment (Marketing, Sales, Product nicht aligned), CAC steigt',
      transformationEn: 'GTM Strategy Workshop (1 day, 25 participants)',
      transformationDe: 'GTM Strategy Workshop (1 Tag, 25 Teilnehmer)',
      outcomeEn: 'Team Alignment +85%, GTM Clarity +80%, CAC Reduction Plan -40%',
      outcomeDe: 'Team Alignment +85%, GTM Clarity +80%, CAC Reduction Plan -40%'
    },
    {
      typeEn: 'AI Transformation Workshop',
      typeDe: 'AI Transformation Workshop',
      companyEn: 'Series A SaaS, €10M ARR, 70 employees',
      companyDe: 'Series A SaaS, €10M ARR, 70 Mitarbeiter',
      challengeEn: 'No AI strategy (θ_index 0.35), team doesn\'t know how to become AI-Native',
      challengeDe: 'Keine AI-Strategie (θ_index 0.35), Team weiß nicht, wie es AI-Native werden kann',
      transformationEn: 'AI Transformation Workshop (2 days, 30 participants)',
      transformationDe: 'AI Transformation Workshop (2 Tage, 30 Teilnehmer)',
      outcomeEn: 'Team Alignment +90%, AI Clarity +95%, θ_index Roadmap +114%',
      outcomeDe: 'Team Alignment +90%, AI Clarity +95%, θ_index Roadmap +114%'
    },
    {
      typeEn: 'Portfolio Excellence Workshop',
      typeDe: 'Portfolio Excellence Workshop',
      companyEn: 'Series A-B VC, €250M AUM, 20 portfolio companies',
      companyDe: 'Series A-B VC, €250M AUM, 20 Portfolio-Unternehmen',
      challengeEn: 'Operating partners overwhelmed (1:20 ratio), no portfolio frameworks',
      challengeDe: 'Operating Partner überlastet (1:20 Ratio), keine Portfolio-Frameworks',
      transformationEn: 'Portfolio Excellence Workshop (1 day, 8 operating partners)',
      transformationDe: 'Portfolio Excellence Workshop (1 Tag, 8 Operating Partner)',
      outcomeEn: 'Team Alignment +85%, Portfolio Clarity +80%, Operating Partner Efficiency +80%',
      outcomeDe: 'Team Alignment +85%, Portfolio Clarity +80%, Operating Partner Efficiency +80%'
    }
  ];

  const faqs = [
    {
      questionEn: 'How long is the workshop?',
      questionDe: 'Wie lange dauert der Workshop?',
      answerEn: '1 day (6-8 hours) or 2 days (12-16 hours)',
      answerDe: '1 Tag (6-8 Stunden) oder 2 Tage (12-16 Stunden)'
    },
    {
      questionEn: 'What\'s the investment?',
      questionDe: 'Was ist das Investment?',
      answerEn: '€9.6K (1 Day) or €12.9K (2 Days)',
      answerDe: '€9.6K (1 Tag) oder €12.9K (2 Tage)'
    },
    {
      questionEn: 'How many participants?',
      questionDe: 'Wie viele Teilnehmer?',
      answerEn: '3+ participants (scalable for larger groups)',
      answerDe: '3+ Teilnehmer (skalierbar für größere Gruppen)'
    },
    {
      questionEn: 'Can I talk to a reference?',
      questionDe: 'Kann ich mit einer Referenz sprechen?',
      answerEn: 'Yes. We\'ll connect you with a company/VC who\'s used Workshop (same challenge, same workshop type).',
      answerDe: 'Ja. Wir verbinden dich mit einem Unternehmen/VC, das Workshop genutzt hat (gleiche Challenge, gleicher Workshop-Typ).'
    },
    {
      questionEn: 'What\'s the ROI?',
      questionDe: 'Wie ist der ROI?',
      answerEn: 'Typical ROI is 5-10x (based on team alignment and execution velocity).',
      answerDe: 'Typischer ROI ist 5-10x (basierend auf Team Alignment und Execution Velocity).'
    },
    {
      questionEn: 'Is this remote or on-site?',
      questionDe: 'Remote oder vor Ort?',
      answerEn: 'Both. Remote (Zoom) or on-site (travel costs extra).',
      answerDe: 'Beides. Remote (Zoom) oder vor Ort (Reisekosten extra).'
    },
    {
      questionEn: 'What if my challenge isn\'t listed?',
      questionDe: 'Was wenn meine Challenge nicht gelistet ist?',
      answerEn: 'Choose Bespoke Workshop (custom topic, custom pricing).',
      answerDe: 'Wähle Bespoke Workshop (Custom Topic, Custom Pricing).'
    },
    {
      questionEn: 'Do you provide recording?',
      questionDe: 'Gibt es eine Aufzeichnung?',
      answerEn: 'Yes. 90 days access to workshop recording.',
      answerDe: 'Ja. 90 Tage Zugang zur Workshop-Aufzeichnung.'
    }
  ];

  const goodFit = [
    {
      titleEn: 'You need team alignment on a specific challenge',
      titleDe: 'Du brauchst Team Alignment für eine spezifische Challenge',
      descEn: 'Your team is misaligned and needs tactical frameworks',
      descDe: 'Dein Team ist nicht aligned und braucht taktische Frameworks'
    },
    {
      titleEn: 'You have 3+ participants',
      titleDe: 'Du hast 3+ Teilnehmer',
      descEn: 'Scalable for any team size',
      descDe: 'Skalierbar für jede Teamgröße'
    },
    {
      titleEn: 'You\'re Series A-B (or VC/PE with portfolio)',
      titleDe: 'Du bist Series A-B (oder VC/PE mit Portfolio)',
      descEn: 'You have revenue (€5M-€30M ARR) or portfolio (10-50 companies)',
      descDe: 'Du hast Revenue (€5M-€30M ARR) oder Portfolio (10-50 Unternehmen)'
    },
    {
      titleEn: 'You have budget (€9.6K-€12.9K)',
      titleDe: 'Du hast Budget (€9.6K-€12.9K)',
      descEn: 'ROI is 5-10x from team alignment and execution velocity',
      descDe: 'ROI ist 5-10x durch Team Alignment und Execution Velocity'
    }
  ];

  const notFit = [
    {
      titleEn: 'You need hands-on implementation (not just training)',
      titleDe: 'Du brauchst Hands-on Implementation (nicht nur Training)',
      alternativeEn: 'Better fit: Power Up (30 days, €23.6K) or Boost (90 days, €60K-€78K)',
      alternativeDe: 'Besser: Power Up (30 Tage, €23.6K) oder Boost (90 Tage, €60K-€78K)'
    },
    {
      titleEn: 'You have <3 participants',
      titleDe: 'Du hast <3 Teilnehmer',
      alternativeEn: 'Better fit: Expert Session (45-90 min, €490-€890)',
      alternativeDe: 'Besser: Expert Session (45-90 Min, €490-€890)'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* SECTION 1: HERO */}
      <section 
        ref={containerRef as React.RefObject<HTMLElement>}
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
      >
        {/* Deep Space Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]"
          style={{ transform: `translateY(${offsets[0]}px)` }}
        />
        
        {/* Mesh Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-mesh opacity-60"
          style={{ transform: `translateY(${offsets[0]}px)` }}
        />
        
        {/* Twinkling Stars */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${offsets[1]}px)` }}
        >
          <TwinklingStars />
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20"
          style={{ transform: `translateY(${offsets[2]}px)` }}
        />
        
        <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
          {/* Breadcrumb */}
          <Breadcrumb className="justify-center mb-6 animate-fade-in">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">Solutions</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-foreground font-medium">Workshop</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Badge */}
          <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <GraduationCap className="w-4 h-4 mr-2" />
            Training & Enablement · 1-2 {isEnglish ? 'Days' : 'Tage'} · €9.6K-€12.9K
          </Badge>

          {/* Headline */}
          <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
            <span className="block text-foreground">{isEnglish ? 'Tactical Workshop' : 'Taktischer Workshop'}</span>
            <span className="block text-gradient animate-gradient bg-gradient-primary">
              {isEnglish ? 'In 1-2 Days' : 'In 1-2 Tagen'}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {isEnglish 
              ? 'Get your team aligned and trained in 1-2 days. Choose from 9 workshop types: GTM Strategy, Growth Strategy, Pricing Strategy, Customer Success, Operations Excellence, Scaling, AI Transformation, Board Governance, Portfolio Excellence—with actionable playbook.'
              : 'Bringe dein Team in 1-2 Tagen auf eine Linie. Wähle aus 9 Workshop-Typen: GTM Strategy, Growth Strategy, Pricing Strategy, Customer Success, Operations Excellence, Scaling, AI Transformation, Board Governance, Portfolio Excellence—mit umsetzbarem Playbook.'}
          </p>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">+80%</div>
              <div className="text-sm text-muted-foreground">{isEnglish ? 'Team Alignment' : 'Team Alignment'}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center">
              <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">30-40</div>
              <div className="text-sm text-muted-foreground">{isEnglish ? 'Playbook Pages' : 'Playbook-Seiten'}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">{isEnglish ? 'Day 1' : 'Tag 1'}</div>
              <div className="text-sm text-muted-foreground">{isEnglish ? 'Execution Ready' : 'Execution Ready'}</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://calendly.com/michel-scalingx/workshop" target="_blank" rel="noopener noreferrer">
                {isEnglish ? 'Book Workshop (€9.6K)' : 'Workshop buchen (€9.6K)'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#workshop-types">
                {isEnglish ? 'See Workshop Types' : 'Workshop-Typen ansehen'}
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{isEnglish ? '1-2 Days (Fast Alignment)' : '1-2 Tage (Schnelles Alignment)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-primary" />
              <span>{isEnglish ? '3+ Participants' : '3+ Teilnehmer'}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              <span>{isEnglish ? 'Actionable Playbook (30-40 Pages)' : 'Umsetzbares Playbook (30-40 Seiten)'}</span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            {isEnglish ? 'Your Team Isn\'t Aligned—And You\'re Losing Velocity' : 'Dein Team ist nicht aligned—Und du verlierst Velocity'}
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {isEnglish 
              ? 'Your team is misaligned. Marketing says one thing, sales says another, product is building the wrong features. Your GTM strategy is unclear. Your pricing is inconsistent. Your operations are chaotic. And worst of all—your team doesn\'t have the frameworks to execute.'
              : 'Dein Team ist nicht aligned. Marketing sagt das Eine, Sales das Andere, Product baut die falschen Features. Deine GTM-Strategie ist unklar. Dein Pricing ist inkonsistent. Deine Operations sind chaotisch. Und das Schlimmste—dein Team hat keine Frameworks zur Umsetzung.'}
          </p>

          {/* Symptoms */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {symptoms.map((symptom, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-2 text-destructive">
                  {isEnglish ? symptom.titleEn : symptom.titleDe}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isEnglish ? symptom.descEn : symptom.descDe}
                </p>
              </div>
            ))}
          </div>

          {/* Real Cost */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-destructive">
              {isEnglish ? 'The Real Cost' : 'Die wahren Kosten'}
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>{isEnglish ? 'Destroys execution velocity (misalignment kills speed)' : 'Zerstört Execution Velocity (Misalignment tötet Geschwindigkeit)'}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>{isEnglish ? 'Limits growth potential (wrong priorities = wasted resources)' : 'Begrenzt Wachstumspotenzial (falsche Prioritäten = verschwendete Ressourcen)'}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>{isEnglish ? 'Weakens team confidence (no frameworks = no execution)' : 'Schwächt Team-Vertrauen (keine Frameworks = keine Umsetzung)'}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>{isEnglish ? 'Increases competitive risk (competitors move faster)' : 'Erhöht Wettbewerbsrisiko (Wettbewerber sind schneller)'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: 9 WORKSHOP TYPES */}
      <section id="workshop-types" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            {isEnglish ? '9 Workshop Types—Choose Your Focus' : '9 Workshop-Typen—Wähle deinen Fokus'}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {isEnglish 
              ? 'We don\'t just present theory. We deliver tactical workshops—with hands-on exercises and actionable playbooks—so your team can execute immediately.'
              : 'Wir präsentieren nicht nur Theorie. Wir liefern taktische Workshops—mit Hands-on Übungen und umsetzbaren Playbooks—damit dein Team sofort umsetzen kann.'}
          </p>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {workshopTypes.map((workshop) => (
                <AccordionItem key={workshop.id} value={workshop.id} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <workshop.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg font-semibold">
                        {isEnglish ? workshop.titleEn : workshop.titleDe}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="grid gap-6 pl-16">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">
                          {isEnglish ? 'When to choose:' : 'Wann wählen:'}
                        </h4>
                        <p className="text-muted-foreground">
                          {isEnglish ? workshop.whenEn : workshop.whenDe}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">
                          {isEnglish ? 'What we cover:' : 'Was wir abdecken:'}
                        </h4>
                        <ul className="space-y-1 text-muted-foreground">
                          {(isEnglish ? workshop.coverEn : workshop.coverDe).map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">
                          {isEnglish ? 'What you get:' : 'Was du bekommst:'}
                        </h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{isEnglish ? '1-2 Day Workshop (6-16 hours, 3+ participants)' : '1-2 Tage Workshop (6-16 Stunden, 3+ Teilnehmer)'}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-primary" />
                            <span>{isEnglish ? 'Workshop Playbook (30-40 pages)' : 'Workshop Playbook (30-40 Seiten)'}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Video className="w-4 h-4 text-primary" />
                            <span>{isEnglish ? 'Recording (90 days access)' : 'Aufzeichnung (90 Tage Zugang)'}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <h4 className="font-semibold mb-1">
                          {isEnglish ? 'Typical outcome:' : 'Typisches Ergebnis:'}
                        </h4>
                        <p className="text-primary font-medium">
                          {isEnglish ? workshop.outcomeEn : workshop.outcomeDe}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://calendly.com/michel-scalingx/workshop" target="_blank" rel="noopener noreferrer">
                {isEnglish ? 'Book Workshop (€9.6K)' : 'Workshop buchen (€9.6K)'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE OUTCOME */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            {isEnglish ? 'Typical Outcomes (1-2 Days)' : 'Typische Ergebnisse (1-2 Tage)'}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {isEnglish ? 'These are real results from companies and VCs like yours.' : 'Dies sind echte Ergebnisse von Unternehmen und VCs wie dir.'}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">+80%</h3>
              <p className="font-semibold mb-2">{isEnglish ? 'Team Alignment' : 'Team Alignment'}</p>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'From misaligned to aligned' : 'Von nicht aligned zu aligned'}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">30-40</h3>
              <p className="font-semibold mb-2">{isEnglish ? 'Playbook Pages' : 'Playbook-Seiten'}</p>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'Actionable, tactical' : 'Umsetzbar, taktisch'}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary mb-2">{isEnglish ? 'Day 1' : 'Tag 1'}</h3>
              <p className="font-semibold mb-2">{isEnglish ? 'Execution Ready' : 'Execution Ready'}</p>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'Immediate action' : 'Sofortige Aktion'}
              </p>
            </div>
          </div>

          {/* Real Examples */}
          <h3 className="text-2xl font-bold mb-8 text-center">
            {isEnglish ? 'Real Examples' : 'Echte Beispiele'}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {examples.map((example, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                  {isEnglish ? example.typeEn : example.typeDe}
                </div>
                <h4 className="font-semibold mb-2">{isEnglish ? example.companyEn : example.companyDe}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>{isEnglish ? 'Challenge:' : 'Herausforderung:'}</strong> {isEnglish ? example.challengeEn : example.challengeDe}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>{isEnglish ? 'Transformation:' : 'Transformation:'}</strong> {isEnglish ? example.transformationEn : example.transformationDe}
                </p>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-sm font-medium text-primary">
                    {isEnglish ? example.outcomeEn : example.outcomeDe}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE WORK */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            {isEnglish ? 'The Workshop Process' : 'Der Workshop-Prozess'}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {isEnglish ? 'Transparent timeline. Clear deliverables. Hands-on quality.' : 'Transparente Timeline. Klare Deliverables. Hands-on Qualität.'}
          </p>

          {/* Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {isEnglish ? 'Pre-Workshop' : 'Pre-Workshop'}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {isEnglish ? '1-2 Weeks Before' : '1-2 Wochen vorher'}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{isEnglish ? 'Pre-workshop questionnaire' : 'Pre-Workshop Fragebogen'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{isEnglish ? 'Pre-workshop materials' : 'Pre-Workshop Materialien'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{isEnglish ? 'Pre-workshop call' : 'Pre-Workshop Call'}</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                {isEnglish ? 'Your time: 2-4 hours' : 'Deine Zeit: 2-4 Stunden'}
              </p>
            </div>
            <div className="bg-card border border-primary/50 rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {isEnglish ? 'Workshop Day' : 'Workshop-Tag'}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {isEnglish ? '1-2 Days' : '1-2 Tage'}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{isEnglish ? 'Workshop facilitation' : 'Workshop-Moderation'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{isEnglish ? 'Hands-on exercises' : 'Hands-on Übungen'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{isEnglish ? 'Framework training' : 'Framework-Training'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{isEnglish ? 'Playbook creation' : 'Playbook-Erstellung'}</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                {isEnglish ? 'Your time: 6-16 hours' : 'Deine Zeit: 6-16 Stunden'}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {isEnglish ? 'Post-Workshop' : 'Post-Workshop'}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {isEnglish ? '1-2 Weeks After' : '1-2 Wochen danach'}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{isEnglish ? 'Finalized playbook' : 'Finalisiertes Playbook'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{isEnglish ? 'Recording (90 days)' : 'Aufzeichnung (90 Tage)'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{isEnglish ? 'Follow-up call (60 min)' : 'Follow-up Call (60 Min)'}</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                {isEnglish ? 'Your time: 1 hour' : 'Deine Zeit: 1 Stunde'}
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-2">
                {isEnglish ? '1-Day Workshop' : '1-Tages-Workshop'}
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">€9.6K</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {isEnglish ? '6-8 hours workshop' : '6-8 Stunden Workshop'}</li>
                <li>• {isEnglish ? '3+ participants' : '3+ Teilnehmer'}</li>
                <li>• {isEnglish ? 'Workshop Playbook (30-40 pages)' : 'Workshop Playbook (30-40 Seiten)'}</li>
                <li>• {isEnglish ? 'Recording (90 days access)' : 'Aufzeichnung (90 Tage Zugang)'}</li>
                <li>• {isEnglish ? 'Follow-up call (60 min)' : 'Follow-up Call (60 Min)'}</li>
              </ul>
            </div>
            <div className="bg-card border border-primary rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                {isEnglish ? 'Most Popular' : 'Am beliebtesten'}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {isEnglish ? '2-Day Workshop' : '2-Tages-Workshop'}
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">€12.9K</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {isEnglish ? '12-16 hours workshop' : '12-16 Stunden Workshop'}</li>
                <li>• {isEnglish ? '3+ participants' : '3+ Teilnehmer'}</li>
                <li>• {isEnglish ? 'Workshop Playbook (30-40 pages)' : 'Workshop Playbook (30-40 Seiten)'}</li>
                <li>• {isEnglish ? 'Recording (90 days access)' : 'Aufzeichnung (90 Tage Zugang)'}</li>
                <li>• {isEnglish ? 'Follow-up call (60 min)' : 'Follow-up Call (60 Min)'}</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-2">
                {isEnglish ? 'Bespoke Workshop' : 'Bespoke Workshop'}
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">{isEnglish ? 'Custom' : 'Individuell'}</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {isEnglish ? 'Custom topic' : 'Individuelles Thema'}</li>
                <li>• {isEnglish ? 'Custom duration' : 'Individuelle Dauer'}</li>
                <li>• {isEnglish ? 'Custom participants' : 'Individuelle Teilnehmerzahl'}</li>
                <li>• {isEnglish ? 'Contact us for pricing' : 'Kontaktiere uns für Pricing'}</li>
              </ul>
            </div>
          </div>

          {/* Quality Guarantee */}
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">{isEnglish ? 'Quality Guarantee' : 'Qualitätsgarantie'}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{isEnglish ? 'Hands-on quality (not just presentation)' : 'Hands-on Qualität (nicht nur Präsentation)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{isEnglish ? 'Actionable playbook (30-40 pages)' : 'Umsetzbares Playbook (30-40 Seiten)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{isEnglish ? 'Execution-ready (Day 1)' : 'Execution-ready (Tag 1)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{isEnglish ? 'Reference calls available' : 'Referenzgespräche verfügbar'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO IT'S FOR */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            {isEnglish ? 'Is This Right for You?' : 'Ist das richtig für dich?'}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {isEnglish ? 'Workshop works best for companies and VCs in this situation.' : 'Workshop funktioniert am besten für Unternehmen und VCs in dieser Situation.'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Good Fit */}
            <div className="bg-card border border-primary/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold">{isEnglish ? 'Good Fit' : 'Guter Fit'}</h3>
              </div>
              <ul className="space-y-4">
                {goodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{isEnglish ? item.titleEn : item.titleDe}</p>
                      <p className="text-sm text-muted-foreground">{isEnglish ? item.descEn : item.descDe}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-muted-foreground" />
                <h3 className="text-2xl font-semibold">{isEnglish ? 'Not a Fit' : 'Kein Fit'}</h3>
              </div>
              <ul className="space-y-4">
                {notFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{isEnglish ? item.titleEn : item.titleDe}</p>
                      <p className="text-sm text-primary">{isEnglish ? item.alternativeEn : item.alternativeDe}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            {isEnglish ? 'Ready to Align Your Team?' : 'Bereit, dein Team auszurichten?'}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {isEnglish ? 'Here\'s what happens next.' : 'Das passiert als nächstes.'}
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">{isEnglish ? 'Book Workshop' : 'Workshop buchen'}</h3>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'We\'ll send you a questionnaire to understand your challenge' : 'Wir senden dir einen Fragebogen, um deine Challenge zu verstehen'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">{isEnglish ? 'Choose Workshop Type' : 'Workshop-Typ wählen'}</h3>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'Select from 9 types or choose Bespoke' : 'Wähle aus 9 Typen oder wähle Bespoke'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">{isEnglish ? 'Prepare Your Team' : 'Team vorbereiten'}</h3>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'Complete pre-work and block the workshop date' : 'Pre-Work abschließen und Workshop-Datum blocken'}
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://calendly.com/michel-scalingx/workshop" target="_blank" rel="noopener noreferrer">
                {isEnglish ? 'Book Workshop (€9.6K)' : 'Workshop buchen (€9.6K)'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="https://calendly.com/michel-scalingx/inflection" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-5 h-5" />
                {isEnglish ? 'Book Free Inflection Call' : 'Kostenlosen Inflection Call buchen'}
              </a>
            </Button>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">{isEnglish ? 'FAQ' : 'FAQ'}</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4 text-left">
                    {isEnglish ? faq.questionEn : faq.questionDe}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {isEnglish ? faq.answerEn : faq.answerDe}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Final subtext */}
          <p className="text-center text-muted-foreground mt-12">
            {isEnglish 
              ? 'Still have questions? Email us at team@scalingx.io or book a call.'
              : 'Noch Fragen? Schreib uns an team@scalingx.io oder buche einen Call.'}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshop;
