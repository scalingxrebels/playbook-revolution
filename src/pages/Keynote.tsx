import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FilloutBookingModal from "@/components/forms/FilloutBookingModal";
import TwinklingStars from "@/components/TwinklingStars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { useParallaxLayers } from "@/hooks/useParallax";
import { 
  Mic, 
  Brain, 
  TrendingUp, 
  DollarSign, 
  HeartHandshake, 
  Users, 
  Sparkles,
  Clock,
  Lightbulb,
  Target,
  Video,
  CheckCircle,
  XCircle,
  ArrowRight,
  Calendar,
  Shield,
  ChevronDown,
  Plane,
  FileText
} from "lucide-react";

const Keynote = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const keynoteTopics = [
    {
      id: 'ai-native',
      icon: Brain,
      titleEn: 'AI-Native Scaling',
      titleDe: 'AI-Native Scaling',
      keynoteTitleEn: '"How AI-Native Companies Scale 10x Faster"',
      keynoteTitleDe: '"Wie AI-Native Unternehmen 10x schneller skalieren"',
      whenEn: 'Your audience needs AI inspiration (AI strategy unclear), your team is skeptical about AI (AI FOMO, no clear path), you want to create AI momentum (not just theory).',
      whenDe: 'Dein Publikum braucht AI-Inspiration (AI-Strategie unklar), dein Team ist skeptisch gegenüber AI (AI FOMO, kein klarer Weg), du willst AI-Momentum schaffen (nicht nur Theorie).',
      coverEn: ['Why AI-Native companies scale 10x faster (data + stories)', 'The AI-Native Framework (AI Maturity Levels, 4 levels)', 'How to become AI-Native (tactical roadmap)', 'Real examples (Series A-B companies that became AI-Native)'],
      coverDe: ['Warum AI-Native Unternehmen 10x schneller skalieren (Daten + Stories)', 'Das AI-Native Framework (AI Maturity Levels, 4 Level)', 'Wie man AI-Native wird (taktische Roadmap)', 'Echte Beispiele (Series A-B Unternehmen, die AI-Native wurden)'],
      outcomeEn: 'High Inspiration, 3-5 Takeaways (AI roadmap, AI Maturity assessment)',
      outcomeDe: 'High Inspiration, 3-5 Takeaways (AI-Roadmap, AI Maturity Assessment)'
    },
    {
      id: 'hypergrowth',
      icon: TrendingUp,
      titleEn: 'Efficient Hypergrowth',
      titleDe: 'Efficient Hypergrowth',
      keynoteTitleEn: '"The New Playbook for Efficient Hypergrowth"',
      keynoteTitleDe: '"Das neue Playbook für effizientes Hypergrowth"',
      whenEn: 'Your audience needs growth inspiration (growth stalling), your team is confused about efficient growth (CAC vs. Growth trade-off), you want to create growth momentum (not just theory).',
      whenDe: 'Dein Publikum braucht Growth-Inspiration (Wachstum stockt), dein Team ist verwirrt über effizientes Wachstum (CAC vs. Growth Trade-off), du willst Growth-Momentum schaffen (nicht nur Theorie).',
      coverEn: ['Why efficient hypergrowth is the new standard (data + stories)', 'The Efficient Hypergrowth Framework (CAC Payback, LTV/CAC, Rule of 40)', 'How to achieve efficient hypergrowth (tactical roadmap)', 'Real examples (Series A-B companies that achieved efficient hypergrowth)'],
      coverDe: ['Warum effizientes Hypergrowth der neue Standard ist (Daten + Stories)', 'Das Efficient Hypergrowth Framework (CAC Payback, LTV/CAC, Rule of 40)', 'Wie man effizientes Hypergrowth erreicht (taktische Roadmap)', 'Echte Beispiele (Series A-B Unternehmen mit effizientem Hypergrowth)'],
      outcomeEn: 'High Inspiration, 3-5 Takeaways (CAC optimization, LTV improvement)',
      outcomeDe: 'High Inspiration, 3-5 Takeaways (CAC-Optimierung, LTV-Verbesserung)'
    },
    {
      id: 'pricing',
      icon: DollarSign,
      titleEn: 'Pricing Strategy',
      titleDe: 'Pricing Strategy',
      keynoteTitleEn: '"The New Math of SaaS Pricing"',
      keynoteTitleDe: '"Die neue Mathematik des SaaS-Pricing"',
      whenEn: 'Your audience needs pricing inspiration (pricing broken), your team is confused about pricing (value-based vs. cost-based), you want to create pricing momentum (not just theory).',
      whenDe: 'Dein Publikum braucht Pricing-Inspiration (Pricing kaputt), dein Team ist verwirrt über Pricing (wertbasiert vs. kostenbasiert), du willst Pricing-Momentum schaffen (nicht nur Theorie).',
      coverEn: ['Why pricing is the fastest growth lever (data + stories)', 'The Pricing Strategy Framework (value-based, packaging, expansion)', 'How to optimize pricing (tactical roadmap)', 'Real examples (Series A-B companies that 2x ARPU through pricing)'],
      coverDe: ['Warum Pricing der schnellste Growth-Hebel ist (Daten + Stories)', 'Das Pricing Strategy Framework (wertbasiert, Packaging, Expansion)', 'Wie man Pricing optimiert (taktische Roadmap)', 'Echte Beispiele (Series A-B Unternehmen mit 2x ARPU durch Pricing)'],
      outcomeEn: 'High Inspiration, 3-5 Takeaways (pricing audit, packaging redesign)',
      outcomeDe: 'High Inspiration, 3-5 Takeaways (Pricing Audit, Packaging Redesign)'
    },
    {
      id: 'cs',
      icon: HeartHandshake,
      titleEn: 'Customer Success Excellence',
      titleDe: 'Customer Success Excellence',
      keynoteTitleEn: '"How to Build a Net Retention Machine"',
      keynoteTitleDe: '"Wie man eine Net Retention Machine baut"',
      whenEn: 'Your audience needs retention inspiration (churn high), your team is confused about customer success (reactive vs. proactive), you want to create retention momentum (not just theory).',
      whenDe: 'Dein Publikum braucht Retention-Inspiration (Churn hoch), dein Team ist verwirrt über Customer Success (reaktiv vs. proaktiv), du willst Retention-Momentum schaffen (nicht nur Theorie).',
      coverEn: ['Why net retention is the most important metric (data + stories)', 'The Customer Success Framework (onboarding, expansion, retention loops)', 'How to build net retention machine (tactical roadmap)', 'Real examples (Series A-B companies that achieved 120%+ NRR)'],
      coverDe: ['Warum Net Retention die wichtigste Metrik ist (Daten + Stories)', 'Das Customer Success Framework (Onboarding, Expansion, Retention Loops)', 'Wie man eine Net Retention Machine baut (taktische Roadmap)', 'Echte Beispiele (Series A-B Unternehmen mit 120%+ NRR)'],
      outcomeEn: 'High Inspiration, 3-5 Takeaways (retention audit, expansion playbook)',
      outcomeDe: 'High Inspiration, 3-5 Takeaways (Retention Audit, Expansion Playbook)'
    },
    {
      id: 'board',
      icon: Users,
      titleEn: 'Board Governance',
      titleDe: 'Board Governance',
      keynoteTitleEn: '"How to Work with Your Board (Not Against It)"',
      keynoteTitleDe: '"Wie man mit dem Board arbeitet (nicht dagegen)"',
      whenEn: 'Your audience needs board inspiration (board relationship broken), your team is confused about board governance (board meetings unproductive), you want to create board momentum (not just theory).',
      whenDe: 'Dein Publikum braucht Board-Inspiration (Board-Beziehung kaputt), dein Team ist verwirrt über Board Governance (Board Meetings unproduktiv), du willst Board-Momentum schaffen (nicht nur Theorie).',
      coverEn: ['Why board governance matters (data + stories)', 'The Board Governance Framework (board strategy, meetings, reporting)', 'How to work with board effectively (tactical roadmap)', 'Real examples (Series A-B CEOs who transformed board relationship)'],
      coverDe: ['Warum Board Governance wichtig ist (Daten + Stories)', 'Das Board Governance Framework (Board-Strategie, Meetings, Reporting)', 'Wie man effektiv mit dem Board arbeitet (taktische Roadmap)', 'Echte Beispiele (Series A-B CEOs, die ihre Board-Beziehung transformiert haben)'],
      outcomeEn: 'High Inspiration, 3-5 Takeaways (board meeting redesign, reporting framework)',
      outcomeDe: 'High Inspiration, 3-5 Takeaways (Board Meeting Redesign, Reporting Framework)'
    },
    {
      id: 'bespoke',
      icon: Sparkles,
      titleEn: 'Bespoke Keynote (Custom Topic)',
      titleDe: 'Bespoke Keynote (Custom Topic)',
      keynoteTitleEn: 'Custom keynote tailored to your event',
      keynoteTitleDe: 'Maßgeschneiderte Keynote für dein Event',
      whenEn: 'Your topic isn\'t covered by standard keynotes, you need custom keynote (tailored to your event).',
      whenDe: 'Dein Thema wird von Standard-Keynotes nicht abgedeckt, du brauchst eine Custom Keynote (auf dein Event zugeschnitten).',
      coverEn: ['Custom topic (based on your event theme)', 'Custom frameworks (tailored to your audience)', 'Custom stories (relevant to your industry)'],
      coverDe: ['Custom Topic (basierend auf deinem Event-Thema)', 'Custom Frameworks (auf dein Publikum zugeschnitten)', 'Custom Stories (relevant für deine Branche)'],
      outcomeEn: 'Custom pricing—contact us',
      outcomeDe: 'Custom Pricing—kontaktiere uns'
    }
  ];

  const symptoms = [
    {
      titleEn: 'Generic speakers',
      titleDe: 'Generische Speaker',
      descEn: 'Motivational speakers who don\'t understand your business',
      descDe: 'Motivational Speaker, die dein Business nicht verstehen'
    },
    {
      titleEn: 'No tactical value',
      titleDe: 'Kein taktischer Wert',
      descEn: 'Just inspiration, no frameworks',
      descDe: 'Nur Inspiration, keine Frameworks'
    },
    {
      titleEn: 'Audience disengagement',
      titleDe: 'Publikum nicht engagiert',
      descEn: 'People checking phones during talk',
      descDe: 'Leute checken ihre Handys während des Talks'
    },
    {
      titleEn: 'No takeaways',
      titleDe: 'Keine Takeaways',
      descEn: 'Audience leaves without actionable insights',
      descDe: 'Publikum geht ohne umsetzbare Erkenntnisse'
    },
    {
      titleEn: 'Wasted budget',
      titleDe: 'Verschwendetes Budget',
      descEn: '€5K-€10K spent on generic motivation',
      descDe: '€5K-€10K für generische Motivation ausgegeben'
    }
  ];

  const examples = [
    {
      typeEn: 'AI-Native Scaling Keynote',
      typeDe: 'AI-Native Scaling Keynote',
      eventEn: 'Series B SaaS Company Offsite, 150 employees',
      eventDe: 'Series B SaaS Company Offsite, 150 Mitarbeiter',
      challengeEn: 'Team skeptical about AI, no clear AI strategy',
      challengeDe: 'Team skeptisch gegenüber AI, keine klare AI-Strategie',
      formatEn: 'AI-Native Scaling (90 min + 30 min Q&A)',
      formatDe: 'AI-Native Scaling (90 Min + 30 Min Q&A)',
      outcomeEn: 'Audience Inspiration High, 5 Actionable Takeaways (AI Maturity assessment, AI roadmap), Team AI Momentum +80%',
      outcomeDe: 'Audience Inspiration High, 5 umsetzbare Takeaways (AI Maturity Assessment, AI-Roadmap), Team AI Momentum +80%'
    },
    {
      typeEn: 'Efficient Hypergrowth Keynote',
      typeDe: 'Efficient Hypergrowth Keynote',
      eventEn: 'VC Portfolio Conference, 200 attendees (founders + operators)',
      eventDe: 'VC Portfolio Conference, 200 Teilnehmer (Founder + Operators)',
      challengeEn: 'Portfolio companies struggling with efficient growth',
      challengeDe: 'Portfolio-Unternehmen kämpfen mit effizientem Wachstum',
      formatEn: 'Efficient Hypergrowth (60 min + 20 min Q&A)',
      formatDe: 'Efficient Hypergrowth (60 Min + 20 Min Q&A)',
      outcomeEn: 'Audience Inspiration High, 4 Actionable Takeaways (CAC optimization, LTV improvement), Portfolio Momentum +70%',
      outcomeDe: 'Audience Inspiration High, 4 umsetzbare Takeaways (CAC-Optimierung, LTV-Verbesserung), Portfolio Momentum +70%'
    },
    {
      typeEn: 'Board Governance Keynote',
      typeDe: 'Board Governance Keynote',
      eventEn: 'CEO Peer Group Event, 50 CEOs',
      eventDe: 'CEO Peer Group Event, 50 CEOs',
      challengeEn: 'CEOs struggling with board relationships',
      challengeDe: 'CEOs kämpfen mit Board-Beziehungen',
      formatEn: 'Board Governance (75 min + 30 min Q&A)',
      formatDe: 'Board Governance (75 Min + 30 Min Q&A)',
      outcomeEn: 'Audience Inspiration High, 5 Actionable Takeaways (board meeting redesign, reporting framework), CEO Confidence +85%',
      outcomeDe: 'Audience Inspiration High, 5 umsetzbare Takeaways (Board Meeting Redesign, Reporting Framework), CEO Confidence +85%'
    }
  ];

  const faqs = [
    {
      questionEn: 'How long is the keynote?',
      questionDe: 'Wie lange dauert die Keynote?',
      answerEn: '60-90 minutes (keynote) + 15-30 minutes (Q&A)',
      answerDe: '60-90 Minuten (Keynote) + 15-30 Minuten (Q&A)'
    },
    {
      questionEn: 'What\'s the investment?',
      questionDe: 'Was ist das Investment?',
      answerEn: '€4.9K (keynote) + travel costs (if on-site)',
      answerDe: '€4.9K (Keynote) + Reisekosten (bei Vor-Ort)'
    },
    {
      questionEn: 'How many participants?',
      questionDe: 'Wie viele Teilnehmer?',
      answerEn: '50-500 participants (optimal for keynote format)',
      answerDe: '50-500 Teilnehmer (optimal für Keynote-Format)'
    },
    {
      questionEn: 'Can I talk to a reference?',
      questionDe: 'Kann ich mit einer Referenz sprechen?',
      answerEn: 'Yes. We\'ll connect you with an event organizer who\'s booked keynote (same audience, same topic).',
      answerDe: 'Ja. Wir verbinden dich mit einem Event-Organisator, der eine Keynote gebucht hat (gleiches Publikum, gleiches Thema).'
    },
    {
      questionEn: 'What\'s the ROI?',
      questionDe: 'Wie ist der ROI?',
      answerEn: 'Typical ROI is 5-10x (based on audience inspiration and event momentum).',
      answerDe: 'Typischer ROI ist 5-10x (basierend auf Audience Inspiration und Event Momentum).'
    },
    {
      questionEn: 'Is this remote or on-site?',
      questionDe: 'Remote oder vor Ort?',
      answerEn: 'Both. Remote (Zoom) or on-site (travel costs extra).',
      answerDe: 'Beides. Remote (Zoom) oder vor Ort (Reisekosten extra).'
    },
    {
      questionEn: 'What if my topic isn\'t listed?',
      questionDe: 'Was wenn mein Thema nicht gelistet ist?',
      answerEn: 'Choose Bespoke Keynote (custom topic, custom pricing).',
      answerDe: 'Wähle Bespoke Keynote (Custom Topic, Custom Pricing).'
    },
    {
      questionEn: 'Do you provide recording?',
      questionDe: 'Gibt es eine Aufzeichnung?',
      answerEn: 'Yes, for +€500 (professional recording, edited version).',
      answerDe: 'Ja, für +€500 (professionelle Aufzeichnung, bearbeitete Version).'
    },
    {
      questionEn: 'How far in advance should I book?',
      questionDe: 'Wie weit im Voraus sollte ich buchen?',
      answerEn: '2-3 weeks minimum (for pre-keynote preparation).',
      answerDe: '2-3 Wochen Minimum (für Pre-Keynote-Vorbereitung).'
    }
  ];

  const goodFit = [
    {
      titleEn: 'You need tactical inspiration (not generic motivation)',
      titleDe: 'Du brauchst taktische Inspiration (keine generische Motivation)',
      descEn: 'Expert speaker with frameworks and actionable takeaways',
      descDe: 'Experten-Speaker mit Frameworks und umsetzbaren Takeaways'
    },
    {
      titleEn: 'You have 50-500 participants',
      titleDe: 'Du hast 50-500 Teilnehmer',
      descEn: 'Company offsite, conference, or peer group event',
      descDe: 'Company Offsite, Konferenz oder Peer Group Event'
    },
    {
      titleEn: 'You\'re Series A-B (or VC/PE organizing event)',
      titleDe: 'Du bist Series A-B (oder VC/PE, das Event organisiert)',
      descEn: 'Your audience needs tactical inspiration, not motivation',
      descDe: 'Dein Publikum braucht taktische Inspiration, keine Motivation'
    },
    {
      titleEn: 'You have budget (€4.9K + travel)',
      titleDe: 'Du hast Budget (€4.9K + Reise)',
      descEn: 'ROI is 5-10x from audience inspiration and event momentum',
      descDe: 'ROI ist 5-10x durch Audience Inspiration und Event Momentum'
    }
  ];

  const notFit = [
    {
      titleEn: 'You need generic motivation (not tactical frameworks)',
      titleDe: 'Du brauchst generische Motivation (keine taktischen Frameworks)',
      alternativeEn: 'Better fit: Hire motivational speaker (€2K-€5K)',
      alternativeDe: 'Besser: Motivational Speaker engagieren (€2K-€5K)'
    },
    {
      titleEn: 'You need hands-on training (not just keynote)',
      titleDe: 'Du brauchst Hands-on Training (nicht nur Keynote)',
      alternativeEn: 'Better fit: Workshop (1-2 days, €9.6K-€12.9K)',
      alternativeDe: 'Besser: Workshop (1-2 Tage, €9.6K-€12.9K)'
    },
    {
      titleEn: 'You have <50 participants',
      titleDe: 'Du hast <50 Teilnehmer',
      alternativeEn: 'Better fit: Workshop (1-2 days, €9.6K-€12.9K)',
      alternativeDe: 'Besser: Workshop (1-2 Tage, €9.6K-€12.9K)'
    },
    {
      titleEn: 'You have >500 participants',
      titleDe: 'Du hast >500 Teilnehmer',
      alternativeEn: 'Contact us for custom pricing',
      alternativeDe: 'Kontaktiere uns für Custom Pricing'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      {/* SECTION 1: HERO */}
      <section ref={containerRef as React.RefObject<HTMLElement>} className="dark-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20">
        {/* Deep Space Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" style={{ transform: `translateY(${offsets[0]}px)` }} />
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-mesh opacity-60" style={{ transform: `translateY(${offsets[0]}px)` }} />
        {/* Twinkling Stars */}
        <div className="absolute inset-0" style={{ transform: `translateY(${offsets[1]}px)` }}>
          <TwinklingStars />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" style={{ transform: `translateY(${offsets[2]}px)` }} />
        
        <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
          {/* Breadcrumb */}
          <Breadcrumb className="justify-center mb-6 animate-fade-in">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">Solutions</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-foreground font-medium">Keynote</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Badge */}
          <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Mic className="w-4 h-4 mr-2" />
            Training & Enablement · 60-90 Min · €4.9K
          </Badge>

          {/* Headline */}
          <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
            <span className="block text-foreground">{isEnglish ? 'Inspirational Keynote' : 'Inspirational Keynote'}</span>
            <span className="block text-gradient animate-gradient bg-gradient-primary">
              {isEnglish ? 'In 60-90 Minutes' : 'In 60-90 Minuten'}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {isEnglish 
              ? 'Inspire your team or event audience in 60-90 minutes. Choose from 5 keynote topics: AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success Excellence, Board Governance—with actionable takeaways and Q&A.'
              : 'Inspiriere dein Team oder Event-Publikum in 60-90 Minuten. Wähle aus 5 Keynote-Themen: AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success Excellence, Board Governance—mit umsetzbaren Takeaways und Q&A.'}
          </p>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">50-500</div>
              <div className="text-sm text-muted-foreground">{isEnglish ? 'Audience (Scalable)' : 'Audience (Skalierbar)'}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
              <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">{isEnglish ? 'High' : 'High'}</div>
              <div className="text-sm text-muted-foreground">{isEnglish ? 'Impact Inspiration' : 'Impact Inspiration'}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">3-5</div>
              <div className="text-sm text-muted-foreground">{isEnglish ? 'Actionable Takeaways' : 'Umsetzbare Takeaways'}</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="xl" 
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400" 
              onClick={() => setIsBookingModalOpen(true)}
            >
              {isEnglish ? 'Book Keynote (€4.9K)' : 'Keynote buchen (€4.9K)'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#keynote-topics">
                {isEnglish ? 'See Keynote Topics' : 'Keynote-Themen ansehen'}
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{isEnglish ? '60-90 Minutes (Fast Impact)' : '60-90 Minuten (Schneller Impact)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>{isEnglish ? '50-500 Participants (Scalable)' : '50-500 Teilnehmer (Skalierbar)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span>{isEnglish ? 'Actionable Takeaways (Not Just Theory)' : 'Umsetzbare Takeaways (Nicht nur Theorie)'}</span>
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
            {isEnglish ? 'Your Event Needs Inspiration—Not Generic Motivation' : 'Dein Event braucht Inspiration—Keine generische Motivation'}
          </h2>
          
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {isEnglish 
              ? 'Your event is important. It\'s your company offsite. It\'s your industry conference. It\'s your investor event. But generic motivational speakers don\'t cut it. Your audience needs tactical inspiration—not just "think big" platitudes.'
              : 'Dein Event ist wichtig. Es ist dein Company Offsite. Es ist deine Branchenkonferenz. Es ist dein Investor Event. Aber generische Motivational Speaker reichen nicht. Dein Publikum braucht taktische Inspiration—nicht nur "think big" Plattitüden.'}
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
                <span>{isEnglish ? 'Destroys momentum (event doesn\'t create change)' : 'Zerstört Momentum (Event schafft keinen Wandel)'}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>{isEnglish ? 'Limits team engagement (team skeptical of "motivational talks")' : 'Begrenzt Team-Engagement (Team skeptisch gegenüber "Motivationsreden")'}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>{isEnglish ? 'Weakens culture (no shared frameworks or language)' : 'Schwächt Kultur (keine gemeinsamen Frameworks oder Sprache)'}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span>{isEnglish ? 'Wastes opportunity (could have created real impact)' : 'Verschwendet Chance (hätte echten Impact schaffen können)'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: 5 KEYNOTE TOPICS */}
      <section id="keynote-topics" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            {isEnglish ? '5 Keynote Topics—Choose Your Focus' : '5 Keynote-Themen—Wähle deinen Fokus'}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {isEnglish 
              ? 'We don\'t just deliver motivation. We deliver tactical keynotes—with frameworks, stories, and actionable takeaways—so your audience leaves inspired and ready to execute.'
              : 'Wir liefern nicht nur Motivation. Wir liefern taktische Keynotes—mit Frameworks, Stories und umsetzbaren Takeaways—damit dein Publikum inspiriert und bereit zur Umsetzung geht.'}
          </p>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {keynoteTopics.map((topic) => (
                <AccordionItem key={topic.id} value={topic.id} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <topic.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-lg font-semibold block">
                          {isEnglish ? topic.titleEn : topic.titleDe}
                        </span>
                        <span className="text-sm text-muted-foreground italic">
                          {isEnglish ? topic.keynoteTitleEn : topic.keynoteTitleDe}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-6 pl-16">
                      {/* When to choose */}
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">
                          {isEnglish ? 'When to choose:' : 'Wann wählen:'}
                        </h4>
                        <p className="text-muted-foreground">
                          {isEnglish ? topic.whenEn : topic.whenDe}
                        </p>
                      </div>

                      {/* What we cover */}
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">
                          {isEnglish ? 'What we cover:' : 'Was wir abdecken:'}
                        </h4>
                        <ul className="space-y-2">
                          {(isEnglish ? topic.coverEn : topic.coverDe).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What you get */}
                      {topic.id !== 'bespoke' && (
                        <div>
                          <h4 className="font-semibold mb-2 text-primary">
                            {isEnglish ? 'What you get:' : 'Was du bekommst:'}
                          </h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Mic className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span>{isEnglish ? '60-90 Min Keynote (on-site or remote)' : '60-90 Min Keynote (vor Ort oder remote)'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Users className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span>{isEnglish ? 'Q&A Session (15-30 min)' : 'Q&A Session (15-30 Min)'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span>{isEnglish ? 'Keynote Slides (40-60 slides, PDF)' : 'Keynote Slides (40-60 Slides, PDF)'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Video className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span>{isEnglish ? 'Recording (optional, +€500)' : 'Aufzeichnung (optional, +€500)'}</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* Typical outcome */}
                      <div className="bg-primary/5 rounded-lg p-4">
                        <h4 className="font-semibold mb-1">
                          {isEnglish ? 'Typical outcome:' : 'Typisches Ergebnis:'}
                        </h4>
                        <p className="text-primary font-medium">
                          {isEnglish ? topic.outcomeEn : topic.outcomeDe}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8" onClick={() => setIsBookingModalOpen(true)}>
              {isEnglish ? 'Book Keynote (€4.9K)' : 'Keynote buchen (€4.9K)'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUTCOME / PROOF */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            {isEnglish ? 'Typical Outcomes (60-90 Minutes)' : 'Typische Ergebnisse (60-90 Minuten)'}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isEnglish ? 'These are real results from events like yours.' : 'Das sind echte Ergebnisse von Events wie deinem.'}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{isEnglish ? 'High Impact' : 'High Impact'}</h3>
              <p className="text-muted-foreground">{isEnglish ? 'Audience Inspiration' : 'Audience Inspiration'}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {isEnglish ? 'Memorable stories + frameworks' : 'Unvergessliche Stories + Frameworks'}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">3-5 {isEnglish ? 'Actions' : 'Aktionen'}</h3>
              <p className="text-muted-foreground">{isEnglish ? 'Actionable Takeaways' : 'Umsetzbare Takeaways'}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {isEnglish ? 'Frameworks, templates, roadmaps' : 'Frameworks, Templates, Roadmaps'}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{isEnglish ? 'Lasting' : 'Dauerhaft'}</h3>
              <p className="text-muted-foreground">{isEnglish ? 'Event Momentum' : 'Event Momentum'}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {isEnglish ? 'Team uses frameworks after event' : 'Team nutzt Frameworks nach Event'}
              </p>
            </div>
          </div>

          {/* Real Examples */}
          <h3 className="text-2xl font-bold mb-8 text-center">
            {isEnglish ? 'Real Examples' : 'Echte Beispiele'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {examples.map((example, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="text-sm font-medium text-primary mb-2">
                  {isEnglish ? example.typeEn : example.typeDe}
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {isEnglish ? example.eventEn : example.eventDe}
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">{isEnglish ? 'Challenge:' : 'Challenge:'}</span>
                    <span className="text-muted-foreground ml-2">{isEnglish ? example.challengeEn : example.challengeDe}</span>
                  </div>
                  <div>
                    <span className="font-medium">{isEnglish ? 'Format:' : 'Format:'}</span>
                    <span className="text-muted-foreground ml-2">{isEnglish ? example.formatEn : example.formatDe}</span>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 mt-4">
                    <span className="font-medium text-primary">{isEnglish ? 'Outcome:' : 'Ergebnis:'}</span>
                    <p className="text-sm mt-1">{isEnglish ? example.outcomeEn : example.outcomeDe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE WORK / PROCESS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            {isEnglish ? 'The Keynote Process' : 'Der Keynote-Prozess'}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isEnglish ? 'Transparent timeline. Clear deliverables. High-impact quality.' : 'Transparenter Zeitplan. Klare Deliverables. High-Impact Qualität.'}
          </p>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {/* Pre-Keynote */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                <h3 className="text-xl font-semibold">{isEnglish ? 'Pre-Keynote' : 'Pre-Keynote'}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {isEnglish ? '2-3 Weeks Before' : '2-3 Wochen vorher'}
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Pre-keynote questionnaire' : 'Pre-Keynote Fragebogen'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Audience research' : 'Audience Research'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Topic alignment' : 'Topic Alignment'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Slide customization' : 'Slide-Anpassung'}</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                {isEnglish ? 'Your time: 1-2 hours' : 'Deine Zeit: 1-2 Stunden'}
              </p>
            </div>

            {/* Keynote Day */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                <h3 className="text-xl font-semibold">{isEnglish ? 'Keynote Day' : 'Keynote-Tag'}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {isEnglish ? '60-90 Minutes' : '60-90 Minuten'}
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Mic className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Opening (5-10 min): Hook + Context' : 'Opening (5-10 Min): Hook + Kontext'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Main Content (40-60 min): Frameworks + Stories' : 'Main Content (40-60 Min): Frameworks + Stories'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Closing (5-10 min): Summary + CTA' : 'Closing (5-10 Min): Summary + CTA'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Q&A (15-30 min): Audience questions' : 'Q&A (15-30 Min): Fragen vom Publikum'}</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                {isEnglish ? 'Your time: 90-120 minutes' : 'Deine Zeit: 90-120 Minuten'}
              </p>
            </div>

            {/* Post-Keynote */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                <h3 className="text-xl font-semibold">{isEnglish ? 'Post-Keynote' : 'Post-Keynote'}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {isEnglish ? '1-2 Days After' : '1-2 Tage danach'}
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Keynote slides (PDF, 40-60 slides)' : 'Keynote Slides (PDF, 40-60 Slides)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Post-keynote resources' : 'Post-Keynote Ressourcen'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Video className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{isEnglish ? 'Recording (if requested)' : 'Aufzeichnung (falls gewünscht)'}</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                {isEnglish ? 'Your time: 0 hours' : 'Deine Zeit: 0 Stunden'}
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">{isEnglish ? 'Pricing' : 'Pricing'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="font-medium">{isEnglish ? 'Standard Keynote' : 'Standard Keynote'}</span>
                  <span className="text-primary font-bold">€4.9K</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {isEnglish ? '60-90 min keynote' : '60-90 Min Keynote'}</li>
                  <li>• {isEnglish ? '15-30 min Q&A' : '15-30 Min Q&A'}</li>
                  <li>• {isEnglish ? '50-500 participants' : '50-500 Teilnehmer'}</li>
                  <li>• {isEnglish ? 'Keynote slides (PDF)' : 'Keynote Slides (PDF)'}</li>
                  <li>• {isEnglish ? 'On-site or remote' : 'Vor Ort oder remote'}</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="font-medium">{isEnglish ? 'Add-ons' : 'Add-ons'}</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-primary" />
                    <span>{isEnglish ? '+ Recording: +€500' : '+ Aufzeichnung: +€500'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-primary" />
                    <span>{isEnglish ? '+ Travel: Billed separately' : '+ Reise: Separat berechnet'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>{isEnglish ? 'Bespoke: Custom pricing' : 'Bespoke: Custom Pricing'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality Guarantee */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">{isEnglish ? 'Quality Guarantee' : 'Qualitätsgarantie'}</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{isEnglish ? 'High-impact quality' : 'High-Impact Qualität'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{isEnglish ? 'Actionable takeaways' : 'Umsetzbare Takeaways'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{isEnglish ? 'Audience engagement' : 'Audience Engagement'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{isEnglish ? 'References available' : 'Referenzen verfügbar'}</span>
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
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {isEnglish ? 'Keynote works best for events in this situation.' : 'Keynote funktioniert am besten für Events in dieser Situation.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Good Fit */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{isEnglish ? 'This is a good fit if:' : 'Das passt gut wenn:'}</h3>
              </div>
              <ul className="space-y-4">
                {goodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{isEnglish ? item.titleEn : item.titleDe}</span>
                      <p className="text-sm text-muted-foreground">{isEnglish ? item.descEn : item.descDe}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Fit */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">{isEnglish ? 'This is not a good fit if:' : 'Das passt nicht wenn:'}</h3>
              </div>
              <ul className="space-y-4">
                {notFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{isEnglish ? item.titleEn : item.titleDe}</span>
                      <p className="text-sm text-muted-foreground">{isEnglish ? item.alternativeEn : item.alternativeDe}</p>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {isEnglish ? 'Ready to Inspire Your Audience?' : 'Bereit, dein Publikum zu inspirieren?'}
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              {isEnglish ? 'Here\'s what happens next.' : 'So geht\'s weiter.'}
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="font-semibold mb-2">{isEnglish ? 'Book Keynote' : 'Keynote buchen'}</h3>
                <p className="text-sm text-muted-foreground">
                  {isEnglish ? 'We\'ll send you a questionnaire to understand your event.' : 'Wir senden dir einen Fragebogen, um dein Event zu verstehen.'}
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="font-semibold mb-2">{isEnglish ? 'Choose Topic' : 'Thema wählen'}</h3>
                <p className="text-sm text-muted-foreground">
                  {isEnglish ? 'Select from 5 topics: AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success Excellence, Board Governance.' : 'Wähle aus 5 Themen: AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success Excellence, Board Governance.'}
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="font-semibold mb-2">{isEnglish ? 'Prepare Event' : 'Event vorbereiten'}</h3>
                <p className="text-sm text-muted-foreground">
                  {isEnglish ? 'Complete pre-keynote questionnaire, provide event details, confirm logistics.' : 'Pre-Keynote Fragebogen ausfüllen, Event-Details bereitstellen, Logistik bestätigen.'}
                </p>
              </div>
            </div>

            {/* Primary CTA */}
            <Button size="lg" className="text-lg px-10 py-6 mb-6" onClick={() => setIsBookingModalOpen(true)}>
              {isEnglish ? 'Book Keynote (€4.9K)' : 'Keynote buchen (€4.9K)'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mb-8">
              {isEnglish ? 'Inspire your audience in 60-90 minutes. Actionable takeaways guaranteed.' : 'Inspiriere dein Publikum in 60-90 Minuten. Umsetzbare Takeaways garantiert.'}
            </p>

            {/* Alternative CTA */}
            <div className="bg-muted/50 rounded-xl p-6 max-w-md mx-auto mb-12">
              <p className="text-sm text-muted-foreground mb-4">
                {isEnglish ? 'Not sure if you need keynote? Start with a free call:' : 'Nicht sicher, ob du eine Keynote brauchst? Starte mit einem kostenlosen Call:'}
              </p>
              <Button variant="outline" onClick={() => setIsBookingModalOpen(true)}>
                <Calendar className="mr-2 w-4 h-4" />
                {isEnglish ? 'Book Free Inflection Call (30 min)' : 'Kostenloses Inflection Call buchen (30 Min)'}
              </Button>
            </div>

            {/* FAQ */}
            <div className="text-left max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">{isEnglish ? 'FAQ' : 'FAQ'}</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline py-4 text-left">
                      <span className="font-medium">{isEnglish ? faq.questionEn : faq.questionDe}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-muted-foreground">
                      {isEnglish ? faq.answerEn : faq.answerDe}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Final Note */}
            <p className="text-sm text-muted-foreground mt-12">
              {isEnglish 
                ? 'Still have questions? Email us at team@scalingx.io or book a call.' 
                : 'Noch Fragen? Schreib uns an team@scalingx.io oder buche einen Call.'}
            </p>
          </div>
        </div>
      </section>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="keynote"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={isEnglish ? 'Book Inflection Call' : 'Inflection Call buchen'}
      />

      <Footer />
    </div>
  );
};

export default Keynote;
