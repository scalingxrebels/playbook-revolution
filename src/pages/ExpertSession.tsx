import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TwinklingStars from "@/components/TwinklingStars";
import { Button } from "@/components/ui/button";
import FilloutBookingModal from "@/components/forms/FilloutBookingModal";
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
  GraduationCap, 
  Brain, 
  TrendingUp, 
  DollarSign, 
  HeartHandshake, 
  Settings, 
  Zap,
  Rocket,
  Building2,
  Presentation,
  Users, 
  Sparkles,
  Clock,
  Target,
  FileText,
  Video,
  CheckCircle,
  XCircle,
  ArrowRight,
  Calendar,
  Shield,
  ChevronDown,
  AlertTriangle,
  MessageSquare,
  TrendingDown,
  Ban
} from "lucide-react";

const ExpertSession = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });
  const [isExpertSessionModalOpen, setIsExpertSessionModalOpen] = useState(false);
  const [isInflectionCallModalOpen, setIsInflectionCallModalOpen] = useState(false);

  const sessionTypes = [
    {
      id: 'cac-optimization',
      icon: TrendingUp,
      titleEn: 'CAC Optimization',
      titleDe: 'CAC Optimierung',
      whenEn: 'Your CAC is rising (€5K → €10K, benchmark: €500-€2K). You don\'t know which GTM lever to pull. You need expert guidance on CAC reduction.',
      whenDe: 'Dein CAC steigt (€5K → €10K, Benchmark: €500-€2K). Du weißt nicht, welchen GTM-Hebel du ziehen sollst. Du brauchst Experten-Guidance zur CAC-Reduktion.',
      coverEn: ['CAC drivers (what\'s causing high CAC?)', 'GTM bottlenecks (ICP, positioning, channels, sales process)', 'Quick wins (what to fix in first 30 days)', '90-day roadmap (how to reduce CAC by 30-50%)'],
      coverDe: ['CAC-Treiber (was verursacht hohen CAC?)', 'GTM-Engpässe (ICP, Positionierung, Kanäle, Sales-Prozess)', 'Quick Wins (was in den ersten 30 Tagen zu fixen)', '90-Tage-Roadmap (wie CAC um 30-50% reduzieren)'],
      getEn: ['45-90 Min Expert Session (1-on-1, video call)', 'Action Plan (3-5 initiatives)', '90-Day Roadmap (week-by-week)', 'Session Recording (90 days access)'],
      getDe: ['45-90 Min Expert Session (1-on-1, Video Call)', 'Aktionsplan (3-5 Initiativen)', '90-Tage-Roadmap (Woche für Woche)', 'Session-Aufzeichnung (90 Tage Zugang)'],
      outcomeEn: 'CAC Clarity +80% (unclear → clear drivers), Action Plan: 3-5 initiatives (prioritized), ROI: 3-5x (€490-€890 → €1.5K-€4.5K value)',
      outcomeDe: 'CAC Clarity +80% (unklar → klare Treiber), Aktionsplan: 3-5 Initiativen (priorisiert), ROI: 3-5x (€490-€890 → €1.5K-€4.5K Wert)'
    },
    {
      id: 'growth-momentum',
      icon: Rocket,
      titleEn: 'Growth Momentum',
      titleDe: 'Growth Momentum',
      whenEn: 'Your growth is stalling (150% → 50% YoY). You don\'t know which growth lever to pull. You need expert guidance on growth acceleration.',
      whenDe: 'Dein Wachstum stockt (150% → 50% YoY). Du weißt nicht, welchen Growth-Hebel du ziehen sollst. Du brauchst Experten-Guidance zur Wachstumsbeschleunigung.',
      coverEn: ['Growth bottlenecks (what\'s blocking growth?)', 'Growth engines (GTM, Product, Customer Success)', 'Quick wins (what to fix in first 30 days)', '90-day roadmap (how to reactivate growth)'],
      coverDe: ['Growth-Engpässe (was blockiert Wachstum?)', 'Growth Engines (GTM, Product, Customer Success)', 'Quick Wins (was in den ersten 30 Tagen zu fixen)', '90-Tage-Roadmap (wie Wachstum reaktivieren)'],
      getEn: ['45-90 Min Expert Session (1-on-1, video call)', 'Action Plan (3-5 initiatives)', '90-Day Roadmap (week-by-week)', 'Session Recording (90 days access)'],
      getDe: ['45-90 Min Expert Session (1-on-1, Video Call)', 'Aktionsplan (3-5 Initiativen)', '90-Tage-Roadmap (Woche für Woche)', 'Session-Aufzeichnung (90 Tage Zugang)'],
      outcomeEn: 'Growth Clarity +80% (unclear → clear bottlenecks), Action Plan: 3-5 initiatives (prioritized), ROI: 3-5x (€490-€890 → €1.5K-€4.5K value)',
      outcomeDe: 'Growth Clarity +80% (unklar → klare Engpässe), Aktionsplan: 3-5 Initiativen (priorisiert), ROI: 3-5x (€490-€890 → €1.5K-€4.5K Wert)'
    },
    {
      id: 'pricing-strategy',
      icon: DollarSign,
      titleEn: 'Pricing Strategy',
      titleDe: 'Pricing Strategie',
      whenEn: 'Your pricing is broken (ARPU stagnant, discounting high). You don\'t know how to optimize pricing. You need expert guidance on pricing strategy.',
      whenDe: 'Dein Pricing ist kaputt (ARPU stagniert, Rabatte hoch). Du weißt nicht, wie du Pricing optimieren sollst. Du brauchst Experten-Guidance zur Pricing-Strategie.',
      coverEn: ['Pricing bottlenecks (what\'s broken and why?)', 'Pricing strategy (value-based vs. cost-based)', 'Packaging (how to package features)', '90-day roadmap (how to 2x ARPU)'],
      coverDe: ['Pricing-Engpässe (was ist kaputt und warum?)', 'Pricing-Strategie (wertbasiert vs. kostenbasiert)', 'Packaging (wie Features bündeln)', '90-Tage-Roadmap (wie ARPU verdoppeln)'],
      getEn: ['45-90 Min Expert Session (1-on-1, video call)', 'Action Plan (3-5 initiatives)', '90-Day Roadmap (week-by-week)', 'Session Recording (90 days access)'],
      getDe: ['45-90 Min Expert Session (1-on-1, Video Call)', 'Aktionsplan (3-5 Initiativen)', '90-Tage-Roadmap (Woche für Woche)', 'Session-Aufzeichnung (90 Tage Zugang)'],
      outcomeEn: 'Pricing Clarity +80% (unclear → clear strategy), Action Plan: 3-5 initiatives (prioritized), ROI: 3-5x (€490-€890 → €1.5K-€4.5K value)',
      outcomeDe: 'Pricing Clarity +80% (unklar → klare Strategie), Aktionsplan: 3-5 Initiativen (priorisiert), ROI: 3-5x (€490-€890 → €1.5K-€4.5K Wert)'
    },
    {
      id: 'retention-excellence',
      icon: HeartHandshake,
      titleEn: 'Retention Excellence',
      titleDe: 'Retention Excellence',
      whenEn: 'Your retention is dropping (NRR 120% → 95%, churn >5%). You don\'t know how to reduce churn. You need expert guidance on retention strategy.',
      whenDe: 'Deine Retention sinkt (NRR 120% → 95%, Churn >5%). Du weißt nicht, wie du Churn reduzieren sollst. Du brauchst Experten-Guidance zur Retention-Strategie.',
      coverEn: ['Retention bottlenecks (what\'s causing churn?)', 'Customer success strategy (onboarding, support, expansion)', 'Quick wins (what to fix in first 30 days)', '90-day roadmap (how to achieve 120%+ NRR)'],
      coverDe: ['Retention-Engpässe (was verursacht Churn?)', 'Customer Success Strategie (Onboarding, Support, Expansion)', 'Quick Wins (was in den ersten 30 Tagen zu fixen)', '90-Tage-Roadmap (wie 120%+ NRR erreichen)'],
      getEn: ['45-90 Min Expert Session (1-on-1, video call)', 'Action Plan (3-5 initiatives)', '90-Day Roadmap (week-by-week)', 'Session Recording (90 days access)'],
      getDe: ['45-90 Min Expert Session (1-on-1, Video Call)', 'Aktionsplan (3-5 Initiativen)', '90-Tage-Roadmap (Woche für Woche)', 'Session-Aufzeichnung (90 Tage Zugang)'],
      outcomeEn: 'Retention Clarity +80% (unclear → clear drivers), Action Plan: 3-5 initiatives (prioritized), ROI: 3-5x (€490-€890 → €1.5K-€4.5K value)',
      outcomeDe: 'Retention Clarity +80% (unklar → klare Treiber), Aktionsplan: 3-5 Initiativen (priorisiert), ROI: 3-5x (€490-€890 → €1.5K-€4.5K Wert)'
    },
    {
      id: 'operations-excellence',
      icon: Settings,
      titleEn: 'Operations Excellence',
      titleDe: 'Operations Excellence',
      whenEn: 'Your operations are chaotic (meetings 50/week, decision velocity 10 days). You don\'t know how to improve operations. You need expert guidance on operations strategy.',
      whenDe: 'Deine Operations sind chaotisch (Meetings 50/Woche, Decision Velocity 10 Tage). Du weißt nicht, wie du Operations verbessern sollst. Du brauchst Experten-Guidance zur Operations-Strategie.',
      coverEn: ['Operations bottlenecks (what\'s broken and why?)', 'Operational efficiency (meetings, decision velocity, coordination)', 'Quick wins (what to fix in first 30 days)', '90-day roadmap (how to reduce meetings by 60%)'],
      coverDe: ['Operations-Engpässe (was ist kaputt und warum?)', 'Operative Effizienz (Meetings, Decision Velocity, Koordination)', 'Quick Wins (was in den ersten 30 Tagen zu fixen)', '90-Tage-Roadmap (wie Meetings um 60% reduzieren)'],
      getEn: ['45-90 Min Expert Session (1-on-1, video call)', 'Action Plan (3-5 initiatives)', '90-Day Roadmap (week-by-week)', 'Session Recording (90 days access)'],
      getDe: ['45-90 Min Expert Session (1-on-1, Video Call)', 'Aktionsplan (3-5 Initiativen)', '90-Tage-Roadmap (Woche für Woche)', 'Session-Aufzeichnung (90 Tage Zugang)'],
      outcomeEn: 'Operations Clarity +80% (unclear → clear bottlenecks), Action Plan: 3-5 initiatives (prioritized), ROI: 3-5x (€490-€890 → €1.5K-€4.5K value)',
      outcomeDe: 'Operations Clarity +80% (unklar → klare Engpässe), Aktionsplan: 3-5 Initiativen (priorisiert), ROI: 3-5x (€490-€890 → €1.5K-€4.5K Wert)'
    },
    {
      id: 'scaling-velocity',
      icon: Zap,
      titleEn: 'Scaling Velocity',
      titleDe: 'Scaling Velocity',
      whenEn: 'Your scaling is stuck (operational debt high, decision velocity slow). You don\'t know how to scale. You need expert guidance on scaling strategy.',
      whenDe: 'Dein Scaling steckt fest (Operational Debt hoch, Decision Velocity langsam). Du weißt nicht, wie du skalieren sollst. Du brauchst Experten-Guidance zur Scaling-Strategie.',
      coverEn: ['Scaling bottlenecks (what\'s blocking scaling?)', 'Scaling readiness (are you ready to scale?)', 'Quick wins (what to fix in first 30 days)', '90-day roadmap (how to scale 2x faster)'],
      coverDe: ['Scaling-Engpässe (was blockiert Scaling?)', 'Scaling Readiness (bist du bereit zu skalieren?)', 'Quick Wins (was in den ersten 30 Tagen zu fixen)', '90-Tage-Roadmap (wie 2x schneller skalieren)'],
      getEn: ['45-90 Min Expert Session (1-on-1, video call)', 'Action Plan (3-5 initiatives)', '90-Day Roadmap (week-by-week)', 'Session Recording (90 days access)'],
      getDe: ['45-90 Min Expert Session (1-on-1, Video Call)', 'Aktionsplan (3-5 Initiativen)', '90-Tage-Roadmap (Woche für Woche)', 'Session-Aufzeichnung (90 Tage Zugang)'],
      outcomeEn: 'Scaling Clarity +80% (unclear → clear bottlenecks), Action Plan: 3-5 initiatives (prioritized), ROI: 3-5x (€490-€890 → €1.5K-€4.5K value)',
      outcomeDe: 'Scaling Clarity +80% (unklar → klare Engpässe), Aktionsplan: 3-5 Initiativen (priorisiert), ROI: 3-5x (€490-€890 → €1.5K-€4.5K Wert)'
    },
    {
      id: 'ai-transformation',
      icon: Brain,
      titleEn: 'AI Transformation',
      titleDe: 'AI Transformation',
      whenEn: 'Your AI strategy is missing (θ_index 0.2-0.4, no clear AI roadmap). You don\'t know how to become AI-Native. You need expert guidance on AI strategy.',
      whenDe: 'Deine AI-Strategie fehlt (θ_index 0.2-0.4, keine klare AI-Roadmap). Du weißt nicht, wie du AI-Native werden sollst. Du brauchst Experten-Guidance zur AI-Strategie.',
      coverEn: ['AI maturity (θ_index assessment)', 'AI bottlenecks (what\'s blocking AI adoption?)', 'Quick wins (what to implement in first 30 days)', '90-day roadmap (how to increase θ_index by 50-150%)'],
      coverDe: ['AI-Reife (θ_index Assessment)', 'AI-Engpässe (was blockiert AI-Adoption?)', 'Quick Wins (was in den ersten 30 Tagen implementieren)', '90-Tage-Roadmap (wie θ_index um 50-150% steigern)'],
      getEn: ['45-90 Min Expert Session (1-on-1, video call)', 'Action Plan (3-5 initiatives)', '90-Day Roadmap (week-by-week)', 'Session Recording (90 days access)'],
      getDe: ['45-90 Min Expert Session (1-on-1, Video Call)', 'Aktionsplan (3-5 Initiativen)', '90-Tage-Roadmap (Woche für Woche)', 'Session-Aufzeichnung (90 Tage Zugang)'],
      outcomeEn: 'AI Clarity +90% (unclear → clear strategy), Action Plan: 3-5 initiatives (prioritized), ROI: 3-5x (€490-€890 → €1.5K-€4.5K value)',
      outcomeDe: 'AI Clarity +90% (unklar → klare Strategie), Aktionsplan: 3-5 Initiativen (priorisiert), ROI: 3-5x (€490-€890 → €1.5K-€4.5K Wert)'
    },
    {
      id: 'investor-readiness',
      icon: Presentation,
      titleEn: 'Investor-Readiness',
      titleDe: 'Investor-Readiness',
      whenEn: 'Your deck isn\'t investor-ready (deck quality <70%). You don\'t know how to improve your pitch. You need expert guidance on investor-readiness.',
      whenDe: 'Dein Deck ist nicht investor-ready (Deck-Qualität <70%). Du weißt nicht, wie du deinen Pitch verbessern sollst. Du brauchst Experten-Guidance zur Investor-Readiness.',
      coverEn: ['Deck quality (what\'s missing and why?)', 'Investor expectations (what do investors want to see?)', 'Quick wins (what to fix in first 7 days)', '30-day roadmap (how to achieve 90%+ deck quality)'],
      coverDe: ['Deck-Qualität (was fehlt und warum?)', 'Investor-Erwartungen (was wollen Investoren sehen?)', 'Quick Wins (was in den ersten 7 Tagen zu fixen)', '30-Tage-Roadmap (wie 90%+ Deck-Qualität erreichen)'],
      getEn: ['45-90 Min Expert Session (1-on-1, video call)', 'Action Plan (3-5 initiatives)', '30-Day Roadmap (week-by-week)', 'Session Recording (90 days access)'],
      getDe: ['45-90 Min Expert Session (1-on-1, Video Call)', 'Aktionsplan (3-5 Initiativen)', '30-Tage-Roadmap (Woche für Woche)', 'Session-Aufzeichnung (90 Tage Zugang)'],
      outcomeEn: 'Deck Clarity +80% (unclear → clear gaps), Action Plan: 3-5 initiatives (prioritized), ROI: 3-5x (€490-€890 → €1.5K-€4.5K value)',
      outcomeDe: 'Deck Clarity +80% (unklar → klare Lücken), Aktionsplan: 3-5 Initiativen (priorisiert), ROI: 3-5x (€490-€890 → €1.5K-€4.5K Wert)'
    },
    {
      id: 'portfolio-performance',
      icon: Building2,
      titleEn: 'Portfolio Performance',
      titleDe: 'Portfolio Performance',
      whenEn: 'Your portfolio lacks synergy (15 companies, no cross-portfolio value). You don\'t know how to support portfolio companies. You need expert guidance on portfolio strategy.',
      whenDe: 'Deinem Portfolio fehlt Synergy (15 Unternehmen, kein Cross-Portfolio-Wert). Du weißt nicht, wie du Portfolio-Unternehmen unterstützen sollst. Du brauchst Experten-Guidance zur Portfolio-Strategie.',
      coverEn: ['Portfolio bottlenecks (what\'s blocking portfolio value?)', 'Portfolio synergies (where can companies collaborate?)', 'Quick wins (what to implement in first 30 days)', '90-day roadmap (how to increase portfolio value)'],
      coverDe: ['Portfolio-Engpässe (was blockiert Portfolio-Wert?)', 'Portfolio-Synergien (wo können Unternehmen zusammenarbeiten?)', 'Quick Wins (was in den ersten 30 Tagen implementieren)', '90-Tage-Roadmap (wie Portfolio-Wert steigern)'],
      getEn: ['45-90 Min Expert Session (1-on-1, video call)', 'Action Plan (3-5 initiatives)', '90-Day Roadmap (week-by-week)', 'Session Recording (90 days access)'],
      getDe: ['45-90 Min Expert Session (1-on-1, Video Call)', 'Aktionsplan (3-5 Initiativen)', '90-Tage-Roadmap (Woche für Woche)', 'Session-Aufzeichnung (90 Tage Zugang)'],
      outcomeEn: 'Portfolio Clarity +80% (unclear → clear strategy), Action Plan: 3-5 initiatives (prioritized), ROI: 3-5x (€490-€890 → €1.5K-€4.5K value)',
      outcomeDe: 'Portfolio Clarity +80% (unklar → klare Strategie), Aktionsplan: 3-5 Initiativen (priorisiert), ROI: 3-5x (€490-€890 → €1.5K-€4.5K Wert)'
    }
  ];

  const symptoms = [
    {
      titleEn: 'Specific challenge',
      titleDe: 'Spezifische Herausforderung',
      descEn: 'You have one clear problem (not everything is broken)',
      descDe: 'Du hast ein klares Problem (nicht alles ist kaputt)'
    },
    {
      titleEn: 'Need expert perspective',
      titleDe: 'Experten-Perspektive nötig',
      descEn: 'Internal team lacks expertise (need external guidance)',
      descDe: 'Internes Team hat keine Expertise (externe Guidance nötig)'
    },
    {
      titleEn: 'Fast guidance needed',
      titleDe: 'Schnelle Guidance nötig',
      descEn: 'Don\'t have time for 30-90 day programs',
      descDe: 'Keine Zeit für 30-90 Tage Programme'
    },
    {
      titleEn: 'Actionable plan missing',
      titleDe: 'Umsetzbarer Plan fehlt',
      descEn: 'Need concrete next steps (not just theory)',
      descDe: 'Brauchst konkrete nächste Schritte (nicht nur Theorie)'
    },
    {
      titleEn: 'Budget constraints',
      titleDe: 'Budget-Einschränkungen',
      descEn: 'Can\'t invest €23.6K-€153K (need smaller engagement)',
      descDe: 'Kannst keine €23.6K-€153K investieren (kleineres Engagement nötig)'
    }
  ];

  const examples = [
    {
      typeEn: 'CAC Optimization Session',
      typeDe: 'CAC Optimization Session',
      companyEn: 'Series B SaaS, €20M ARR, 100 employees',
      companyDe: 'Series B SaaS, €20M ARR, 100 Mitarbeiter',
      challengeEn: 'CAC rising (€4K → €9K), don\'t know which GTM lever to pull',
      challengeDe: 'CAC steigt (€4K → €9K), wissen nicht welchen GTM-Hebel ziehen',
      sessionEn: 'CAC Optimization (90 min, 1-on-1)',
      sessionDe: 'CAC Optimization (90 Min, 1-on-1)',
      outcomeEn: 'CAC Clarity +85%, Action Plan (5 initiatives), 90-Day Roadmap (CAC -40% target), ROI 5x (€890 → €4.5K value)',
      outcomeDe: 'CAC Clarity +85%, Aktionsplan (5 Initiativen), 90-Tage-Roadmap (CAC -40% Ziel), ROI 5x (€890 → €4.5K Wert)'
    },
    {
      typeEn: 'AI Transformation Session',
      typeDe: 'AI Transformation Session',
      companyEn: 'Series A SaaS, €10M ARR, 70 employees',
      companyDe: 'Series A SaaS, €10M ARR, 70 Mitarbeiter',
      challengeEn: 'No AI strategy (θ_index 0.35), don\'t know how to become AI-Native',
      challengeDe: 'Keine AI-Strategie (θ_index 0.35), wissen nicht wie AI-Native werden',
      sessionEn: 'AI Transformation (90 min, 1-on-1)',
      sessionDe: 'AI Transformation (90 Min, 1-on-1)',
      outcomeEn: 'AI Clarity +95%, Action Plan (4 initiatives), 90-Day Roadmap (θ_index +114% target), ROI 4x (€890 → €3.6K value)',
      outcomeDe: 'AI Clarity +95%, Aktionsplan (4 Initiativen), 90-Tage-Roadmap (θ_index +114% Ziel), ROI 4x (€890 → €3.6K Wert)'
    },
    {
      typeEn: 'Portfolio Performance Session',
      typeDe: 'Portfolio Performance Session',
      companyEn: 'Series A-B VC, €250M AUM, 20 portfolio companies',
      companyDe: 'Series A-B VC, €250M AUM, 20 Portfolio-Unternehmen',
      challengeEn: 'Portfolio lacks synergy, don\'t know how to support portfolio',
      challengeDe: 'Portfolio fehlt Synergy, wissen nicht wie Portfolio unterstützen',
      sessionEn: 'Portfolio Performance (90 min, 1-on-1)',
      sessionDe: 'Portfolio Performance (90 Min, 1-on-1)',
      outcomeEn: 'Portfolio Clarity +85%, Action Plan (5 initiatives), 90-Day Roadmap (10 synergy initiatives), ROI 5x (€890 → €4.5K value)',
      outcomeDe: 'Portfolio Clarity +85%, Aktionsplan (5 Initiativen), 90-Tage-Roadmap (10 Synergy-Initiativen), ROI 5x (€890 → €4.5K Wert)'
    }
  ];

  const faqs = [
    {
      questionEn: 'How long is the expert session?',
      questionDe: 'Wie lange dauert die Expert Session?',
      answerEn: '45 minutes (€490) or 90 minutes (€890)',
      answerDe: '45 Minuten (€490) oder 90 Minuten (€890)'
    },
    {
      questionEn: 'What\'s the investment?',
      questionDe: 'Was ist das Investment?',
      answerEn: '€490 (45 Min) or €890 (90 Min)',
      answerDe: '€490 (45 Min) oder €890 (90 Min)'
    },
    {
      questionEn: 'Which duration should I choose?',
      questionDe: 'Welche Dauer sollte ich wählen?',
      answerEn: '45 Min for quick deep dive, 90 Min for comprehensive analysis',
      answerDe: '45 Min für schnellen Deep Dive, 90 Min für umfassende Analyse'
    },
    {
      questionEn: 'Can I talk to a reference?',
      questionDe: 'Kann ich mit einer Referenz sprechen?',
      answerEn: 'Yes. We\'ll connect you with a founder who\'s used Expert Session (same challenge, same session type).',
      answerDe: 'Ja. Wir verbinden dich mit einem Founder, der Expert Session genutzt hat (gleiche Herausforderung, gleicher Session-Typ).'
    },
    {
      questionEn: 'What\'s the ROI?',
      questionDe: 'Wie ist der ROI?',
      answerEn: 'Typical ROI is 3-5x (based on time saved and clarity gained).',
      answerDe: 'Typischer ROI ist 3-5x (basierend auf Zeitersparnis und gewonnener Klarheit).'
    },
    {
      questionEn: 'Is this remote or on-site?',
      questionDe: 'Remote oder vor Ort?',
      answerEn: 'Remote (Zoom, 1-on-1 video call).',
      answerDe: 'Remote (Zoom, 1-on-1 Video Call).'
    },
    {
      questionEn: 'Do I get recording?',
      questionDe: 'Bekomme ich eine Aufzeichnung?',
      answerEn: 'Yes. 90 days access to session recording.',
      answerDe: 'Ja. 90 Tage Zugang zur Session-Aufzeichnung.'
    },
    {
      questionEn: 'What if I need more than 90 minutes?',
      questionDe: 'Was wenn ich mehr als 90 Minuten brauche?',
      answerEn: 'You can book another session or consider Decision Support (3-5 days, €3.9K-€5.9K) for comprehensive analysis.',
      answerDe: 'Du kannst eine weitere Session buchen oder Decision Support (3-5 Tage, €3.9K-€5.9K) für umfassende Analyse in Betracht ziehen.'
    }
  ];

  const goodFit = [
    {
      titleEn: 'You have a specific challenge (not everything is broken)',
      titleDe: 'Du hast eine spezifische Herausforderung (nicht alles ist kaputt)',
      descEn: 'CAC, growth, pricing, retention, operations, scaling, AI, deck, portfolio',
      descDe: 'CAC, Growth, Pricing, Retention, Operations, Scaling, AI, Deck, Portfolio'
    },
    {
      titleEn: 'You need expert perspective (not just information)',
      titleDe: 'Du brauchst Experten-Perspektive (nicht nur Informationen)',
      descEn: 'Expert analysis, prioritization, validation, 90-day roadmap',
      descDe: 'Experten-Analyse, Priorisierung, Validierung, 90-Tage-Roadmap'
    },
    {
      titleEn: 'You\'re Series A-B (or VC/PE with portfolio)',
      titleDe: 'Du bist Series A-B (oder VC/PE mit Portfolio)',
      descEn: '€5M-€30M ARR or 10-50 portfolio companies',
      descDe: '€5M-€30M ARR oder 10-50 Portfolio-Unternehmen'
    },
    {
      titleEn: 'You need fast guidance (45-90 min, not 30-90 days)',
      titleDe: 'Du brauchst schnelle Guidance (45-90 Min, nicht 30-90 Tage)',
      descEn: 'Results in one session, not weeks of work',
      descDe: 'Ergebnisse in einer Session, nicht Wochen Arbeit'
    },
    {
      titleEn: 'You have budget (€490-€890)',
      titleDe: 'Du hast Budget (€490-€890)',
      descEn: 'ROI is 3-5x based on time saved and clarity gained',
      descDe: 'ROI ist 3-5x basierend auf Zeitersparnis und gewonnener Klarheit'
    }
  ];

  const notFit = [
    {
      titleEn: 'You need hands-on implementation (not just guidance)',
      titleDe: 'Du brauchst Hands-on Implementierung (nicht nur Guidance)',
      alternativeEn: 'Better fit: Power Up (30 days, €23.6K) or Boost (90 days, €60K-€78K)',
      alternativeDe: 'Besser: Power Up (30 Tage, €23.6K) oder Boost (90 Tage, €60K-€78K)'
    },
    {
      titleEn: 'Everything is broken (not just one challenge)',
      titleDe: 'Alles ist kaputt (nicht nur eine Herausforderung)',
      alternativeEn: 'Better fit: Decision Support (3-5 days, €3.9K-€5.9K) for comprehensive analysis',
      alternativeDe: 'Besser: Decision Support (3-5 Tage, €3.9K-€5.9K) für umfassende Analyse'
    },
    {
      titleEn: 'You need full transformation (not just guidance)',
      titleDe: 'Du brauchst volle Transformation (nicht nur Guidance)',
      alternativeEn: 'Better fit: Boost (90 days, €60K-€78K) or Accelerate (12 months, €153K)',
      alternativeDe: 'Besser: Boost (90 Tage, €60K-€78K) oder Accelerate (12 Monate, €153K)'
    },
    {
      titleEn: 'You already know what to do (just need execution)',
      titleDe: 'Du weißt bereits was zu tun ist (brauchst nur Execution)',
      alternativeEn: 'Better fit: Power Up (30 days, €23.6K) for fast execution',
      alternativeDe: 'Besser: Power Up (30 Tage, €23.6K) für schnelle Execution'
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
                <span className="text-foreground font-medium">Expert Session</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Badge */}
          <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <GraduationCap className="w-4 h-4 mr-2" />
            Training & Enablement · 45-90 Min · €490-€890
          </Badge>

          {/* Headline */}
          <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
            <span className="block text-foreground">{isEnglish ? 'Expert Deep Dive' : 'Expert Deep Dive'}</span>
            <span className="block text-gradient animate-gradient bg-gradient-primary">
              {isEnglish ? 'In 45-90 Minutes' : 'In 45-90 Minuten'}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {isEnglish 
              ? 'Get expert guidance on your specific challenge in 45-90 minutes. Choose from 9 session types: CAC Optimization, Growth Momentum, Pricing Strategy, Retention Excellence, Operations Excellence, Scaling Velocity, AI Transformation, Investor-Readiness, Portfolio Performance—with actionable roadmap.'
              : 'Erhalte Experten-Guidance für deine spezifische Herausforderung in 45-90 Minuten. Wähle aus 9 Session-Typen: CAC Optimization, Growth Momentum, Pricing Strategy, Retention Excellence, Operations Excellence, Scaling Velocity, AI Transformation, Investor-Readiness, Portfolio Performance—mit umsetzbarer Roadmap.'}
          </p>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">45-90</div>
              <div className="text-sm text-muted-foreground">{isEnglish ? 'Min Expert Guidance' : 'Min Experten-Guidance'}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">3-5</div>
              <div className="text-sm text-muted-foreground">{isEnglish ? 'Actionable Initiatives' : 'Umsetzbare Initiativen'}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">3-5x</div>
              <div className="text-sm text-muted-foreground">{isEnglish ? 'Typical ROI' : 'Typischer ROI'}</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="xl" 
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow transition-all duration-400"
              onClick={() => setIsExpertSessionModalOpen(true)}
            >
              {isEnglish ? 'Book Session (€490)' : 'Session buchen (€490)'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#session-types">
                {isEnglish ? 'See Session Types' : 'Session-Typen ansehen'}
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{isEnglish ? '45-90 Minutes (Fast Guidance)' : '45-90 Minuten (Schnelle Guidance)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>{isEnglish ? '1-on-1 Expert Session (Personalized)' : '1-on-1 Expert Session (Personalisiert)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              <span>{isEnglish ? 'Actionable Roadmap (90-Day Plan)' : 'Umsetzbare Roadmap (90-Tage-Plan)'}</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="py-24 bg-card/30">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              {isEnglish ? 'You Need Expert Guidance—' : 'Du brauchst Experten-Guidance—'}
              <span className="text-gradient bg-gradient-primary">{isEnglish ? 'But Not a Full Program' : 'Aber kein volles Programm'}</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              {isEnglish 
                ? 'You have a specific challenge. Your CAC is rising. Your growth is stalling. Your pricing is broken. Your retention is dropping. Your operations are chaotic. Your scaling is stuck. Your AI strategy is missing. Your deck isn\'t investor-ready. Your portfolio lacks synergy.'
                : 'Du hast eine spezifische Herausforderung. Dein CAC steigt. Dein Wachstum stockt. Dein Pricing ist kaputt. Deine Retention sinkt. Deine Operations sind chaotisch. Dein Scaling steckt fest. Deine AI-Strategie fehlt. Dein Deck ist nicht investor-ready. Deinem Portfolio fehlt Synergy.'}
            </p>
            <p className="text-body-lg text-foreground font-semibold mt-4">
              {isEnglish 
                ? 'But you don\'t need a full transformation program. You need expert guidance. Fast.'
                : 'Aber du brauchst kein volles Transformationsprogramm. Du brauchst Experten-Guidance. Schnell.'}
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-center">{isEnglish ? 'The symptoms you\'re seeing:' : 'Die Symptome, die du siehst:'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="bg-card/50 border border-border p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">{isEnglish ? symptom.titleEn : symptom.titleDe}</div>
                      <div className="text-sm text-muted-foreground mt-1">{isEnglish ? symptom.descEn : symptom.descDe}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/30 p-8 text-center">
            <h3 className="text-xl font-bold mb-4 text-destructive">{isEnglish ? 'The real cost:' : 'Die echten Kosten:'}</h3>
            <p className="text-muted-foreground mb-4">
              {isEnglish 
                ? 'Every week without expert guidance destroys momentum, limits growth potential, weakens team confidence, and increases competitive risk.'
                : 'Jede Woche ohne Experten-Guidance zerstört Momentum, limitiert Growth-Potenzial, schwächt Team-Confidence und erhöht Wettbewerbsrisiko.'}
            </p>
            <p className="text-foreground font-semibold">
              {isEnglish ? 'You need expert guidance. Fast.' : 'Du brauchst Experten-Guidance. Schnell.'}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION - 9 SESSION TYPES */}
      <section id="session-types" className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              {isEnglish ? '9 Expert Session Types—' : '9 Expert Session Typen—'}
              <span className="text-gradient bg-gradient-primary">{isEnglish ? 'Choose Your Focus' : 'Wähle deinen Fokus'}</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              {isEnglish 
                ? 'We don\'t just give advice. We deliver expert deep dives—with tactical analysis and actionable roadmaps—so you know exactly what to do next.'
                : 'Wir geben nicht nur Ratschläge. Wir liefern Expert Deep Dives—mit taktischer Analyse und umsetzbaren Roadmaps—damit du genau weißt, was als Nächstes zu tun ist.'}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {sessionTypes.map((session, index) => {
              const IconComponent = session.icon;
              return (
                <AccordionItem key={session.id} value={session.id} className="bg-card/50 border border-border px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{index + 1}. {isEnglish ? session.titleEn : session.titleDe}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">{isEnglish ? 'When to choose:' : 'Wann wählen:'}</h4>
                        <p className="text-muted-foreground text-sm">{isEnglish ? session.whenEn : session.whenDe}</p>
                        
                        <h4 className="font-semibold text-primary mb-3 mt-6">{isEnglish ? 'What we cover:' : 'Was wir abdecken:'}</h4>
                        <ul className="space-y-2">
                          {(isEnglish ? session.coverEn : session.coverDe).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-3">{isEnglish ? 'What you get:' : 'Was du bekommst:'}</h4>
                        <ul className="space-y-2">
                          {(isEnglish ? session.getEn : session.getDe).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold text-primary mb-3 mt-6">{isEnglish ? 'Typical outcome:' : 'Typisches Ergebnis:'}</h4>
                        <p className="text-sm text-foreground font-medium">{isEnglish ? session.outcomeEn : session.outcomeDe}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => setIsExpertSessionModalOpen(true)}
            >
              {isEnglish ? 'Book Session (€490)' : 'Session buchen (€490)'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE OUTCOME */}
      <section className="py-24 bg-card/30">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              {isEnglish ? 'Typical Outcomes' : 'Typische Ergebnisse'}
              <span className="text-gradient bg-gradient-primary"> (45-90 {isEnglish ? 'Minutes' : 'Minuten'})</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              {isEnglish 
                ? 'These are real results from companies and VCs like yours.'
                : 'Das sind echte Ergebnisse von Unternehmen und VCs wie deinen.'}
            </p>
          </div>

          {/* Outcome Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border-2 border-border p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">45-90</div>
              <div className="text-lg font-semibold mb-2">{isEnglish ? 'Min Expert Guidance' : 'Min Experten-Guidance'}</div>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'From internal confusion to expert clarity' : 'Von interner Verwirrung zu Experten-Klarheit'}
              </p>
            </div>
            <div className="bg-card border-2 border-border p-8 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">3-5</div>
              <div className="text-lg font-semibold mb-2">{isEnglish ? 'Actionable Initiatives' : 'Umsetzbare Initiativen'}</div>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'From decision paralysis to actionable plan' : 'Von Entscheidungsparalyse zu umsetzbarem Plan'}
              </p>
            </div>
            <div className="bg-card border-2 border-border p-8 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">3-5x</div>
              <div className="text-lg font-semibold mb-2">{isEnglish ? 'Typical ROI' : 'Typischer ROI'}</div>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? '€490-€890 → €1.5K-€4.5K value' : '€490-€890 → €1.5K-€4.5K Wert'}
              </p>
            </div>
          </div>

          {/* Real Examples */}
          <h3 className="text-2xl font-bold mb-8 text-center">{isEnglish ? 'Real Examples:' : 'Echte Beispiele:'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-card border border-border p-6">
                <div className="text-primary font-bold mb-2">{isEnglish ? example.typeEn : example.typeDe}</div>
                <div className="text-sm text-muted-foreground mb-4">{isEnglish ? example.companyEn : example.companyDe}</div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold">{isEnglish ? 'Challenge:' : 'Herausforderung:'}</span>
                    <span className="text-muted-foreground ml-2">{isEnglish ? example.challengeEn : example.challengeDe}</span>
                  </div>
                  <div>
                    <span className="font-semibold">{isEnglish ? 'Session:' : 'Session:'}</span>
                    <span className="text-muted-foreground ml-2">{isEnglish ? example.sessionEn : example.sessionDe}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <span className="font-semibold text-primary">{isEnglish ? 'Outcome:' : 'Ergebnis:'}</span>
                    <span className="text-foreground ml-2">{isEnglish ? example.outcomeEn : example.outcomeDe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => setIsExpertSessionModalOpen(true)}
            >
              {isEnglish ? 'Book Session (€490)' : 'Session buchen (€490)'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE WORK */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              {isEnglish ? 'The Expert Session' : 'Der Expert Session'}
              <span className="text-gradient bg-gradient-primary"> {isEnglish ? 'Process' : 'Prozess'}</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              {isEnglish 
                ? 'Transparent timeline. Clear deliverables. Expert-grade quality.'
                : 'Transparente Timeline. Klare Deliverables. Experten-Qualität.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Pre-Session */}
            <div className="bg-card border-2 border-border p-8">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{isEnglish ? 'Pre-Session' : 'Vor-Session'}</h3>
              <p className="text-sm text-muted-foreground mb-4">{isEnglish ? '1-2 Days Before' : '1-2 Tage vorher'}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{isEnglish ? 'Pre-session questionnaire' : 'Vor-Session Fragebogen'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{isEnglish ? 'Materials review' : 'Materialien-Review'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{isEnglish ? 'Preparation of recommendations' : 'Vorbereitung der Empfehlungen'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                <span className="font-semibold">{isEnglish ? 'Your time:' : 'Deine Zeit:'}</span> 30-60 min
              </div>
            </div>

            {/* Session Day */}
            <div className="bg-card border-2 border-primary p-8">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{isEnglish ? 'Session Day' : 'Session Tag'}</h3>
              <p className="text-sm text-muted-foreground mb-4">45-90 {isEnglish ? 'Minutes' : 'Minuten'}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{isEnglish ? 'Expert deep dive (1-on-1)' : 'Expert Deep Dive (1-on-1)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{isEnglish ? 'Tactical analysis' : 'Taktische Analyse'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{isEnglish ? 'Action plan creation' : 'Aktionsplan-Erstellung'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{isEnglish ? '90-day roadmap' : '90-Tage-Roadmap'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                <span className="font-semibold">{isEnglish ? 'Your time:' : 'Deine Zeit:'}</span> 45-90 min
              </div>
            </div>

            {/* Post-Session */}
            <div className="bg-card border-2 border-border p-8">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{isEnglish ? 'Post-Session' : 'Nach-Session'}</h3>
              <p className="text-sm text-muted-foreground mb-4">{isEnglish ? '1-2 Days After' : '1-2 Tage danach'}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{isEnglish ? 'Action plan (PDF)' : 'Aktionsplan (PDF)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{isEnglish ? '90-day roadmap (PDF)' : '90-Tage-Roadmap (PDF)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{isEnglish ? 'Session recording (90 days)' : 'Session-Aufzeichnung (90 Tage)'}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                <span className="font-semibold">{isEnglish ? 'Your time:' : 'Deine Zeit:'}</span> 0 {isEnglish ? 'hours' : 'Stunden'}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border-2 border-border p-8">
              <div className="text-2xl font-bold mb-2">45-Min Session</div>
              <div className="text-4xl font-bold text-primary mb-4">€490</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>45 min expert session (1-on-1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Action plan (3-5 initiatives)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>90-day roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Session recording (90 days)</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                {isEnglish ? 'Best for: Quick deep dive, clear challenge, need fast guidance' : 'Am besten für: Schneller Deep Dive, klare Herausforderung, schnelle Guidance nötig'}
              </p>
            </div>
            <div className="bg-card border-2 border-primary p-8">
              <div className="text-2xl font-bold mb-2">90-Min Session</div>
              <div className="text-4xl font-bold text-primary mb-4">€890</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>90 min expert session (1-on-1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Action plan (3-5 initiatives)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>90-day roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Session recording (90 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-semibold">{isEnglish ? 'Deeper analysis (more time)' : 'Tiefere Analyse (mehr Zeit)'}</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                {isEnglish ? 'Best for: Comprehensive analysis, complex challenge, need deeper dive' : 'Am besten für: Umfassende Analyse, komplexe Herausforderung, tieferer Dive nötig'}
              </p>
            </div>
          </div>

          {/* Quality Guarantee */}
          <div className="bg-primary/5 border border-primary/20 p-8 text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">{isEnglish ? 'Quality Guarantee' : 'Qualitätsgarantie'}</h3>
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{isEnglish ? 'Expert-grade quality (not generic advice)' : 'Experten-Qualität (keine generischen Ratschläge)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{isEnglish ? 'Actionable plan (3-5 initiatives)' : 'Umsetzbarer Plan (3-5 Initiativen)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{isEnglish ? '90-day roadmap (week-by-week)' : '90-Tage-Roadmap (Woche für Woche)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{isEnglish ? 'Reference calls available' : 'Referenz-Gespräche verfügbar'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO IT'S FOR */}
      <section className="py-24 bg-card/30">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              {isEnglish ? 'Is This Right' : 'Ist das richtig'}
              <span className="text-gradient bg-gradient-primary"> {isEnglish ? 'for You?' : 'für dich?'}</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              {isEnglish 
                ? 'Expert Session works best for companies and VCs in this situation.'
                : 'Expert Session funktioniert am besten für Unternehmen und VCs in dieser Situation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Good Fit */}
            <div className="bg-card border-2 border-primary/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{isEnglish ? 'This is a Good Fit if:' : 'Das passt gut wenn:'}</h3>
              </div>
              <ul className="space-y-4">
                {goodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{isEnglish ? item.titleEn : item.titleDe}</div>
                      <div className="text-sm text-muted-foreground">{isEnglish ? item.descEn : item.descDe}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Fit */}
            <div className="bg-card border-2 border-destructive/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold">{isEnglish ? 'This is Not a Fit if:' : 'Das passt nicht wenn:'}</h3>
              </div>
              <ul className="space-y-4">
                {notFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{isEnglish ? item.titleEn : item.titleDe}</div>
                      <div className="text-sm text-muted-foreground">{isEnglish ? item.alternativeEn : item.alternativeDe}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              {isEnglish ? 'Ready to Get' : 'Bereit für'}
              <span className="text-gradient bg-gradient-primary"> {isEnglish ? 'Expert Guidance?' : 'Experten-Guidance?'}</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              {isEnglish ? 'Here\'s what happens next.' : 'Das passiert als Nächstes.'}
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-bold mb-2">{isEnglish ? 'Book Expert Session' : 'Expert Session buchen'}</h3>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? 'Choose session type and duration. We\'ll send you a questionnaire.' : 'Wähle Session-Typ und Dauer. Wir senden dir einen Fragebogen.'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-bold mb-2">{isEnglish ? 'Choose Session Type' : 'Session-Typ wählen'}</h3>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? '9 types: CAC, Growth, Pricing, Retention, Operations, Scaling, AI, Investor-Readiness, Portfolio' : '9 Typen: CAC, Growth, Pricing, Retention, Operations, Scaling, AI, Investor-Readiness, Portfolio'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-bold mb-2">{isEnglish ? 'Choose Duration' : 'Dauer wählen'}</h3>
              <p className="text-sm text-muted-foreground">
                {isEnglish ? '45 Min (€490) for quick dive, 90 Min (€890) for comprehensive analysis' : '45 Min (€490) für schnellen Dive, 90 Min (€890) für umfassende Analyse'}
              </p>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="text-center mb-12">
            <Button size="lg" className="text-lg px-12 py-6" onClick={() => setIsExpertSessionModalOpen(true)}>
              {isEnglish ? 'Book Session (€490)' : 'Session buchen (€490)'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              {isEnglish ? 'Get expert guidance in 45-90 minutes. Walk away with actionable plan.' : 'Erhalte Experten-Guidance in 45-90 Minuten. Gehe mit umsetzbarem Plan.'}
            </p>
          </div>

          {/* Alternative CTA */}
          <div className="bg-card/50 border border-border p-8 text-center mb-16">
            <h3 className="text-xl font-bold mb-4">{isEnglish ? 'Not sure which session type?' : 'Nicht sicher welcher Session-Typ?'}</h3>
            <p className="text-muted-foreground mb-6">
              {isEnglish 
                ? 'Start with a free 30-min Inflection Call. We\'ll assess your challenge and recommend the best session type.'
                : 'Starte mit einem kostenlosen 30-Min Inflection Call. Wir bewerten deine Herausforderung und empfehlen den besten Session-Typ.'}
            </p>
            <Button variant="outline" size="lg" onClick={() => setIsInflectionCallModalOpen(true)}>
              {isEnglish ? 'Book Free Inflection Call' : 'Kostenlosen Inflection Call buchen'}
            </Button>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">FAQ</h3>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card/50 border border-border px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">{isEnglish ? faq.questionEn : faq.questionDe}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {isEnglish ? faq.answerEn : faq.answerDe}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <Button size="lg" className="text-lg px-12" onClick={() => setIsExpertSessionModalOpen(true)}>
              {isEnglish ? 'Book Session (€490)' : 'Session buchen (€490)'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              {isEnglish ? 'Still have questions? Email us at team@scalingx.io or book a call.' : 'Noch Fragen? Schreib uns an team@scalingx.io oder buche einen Call.'}
            </p>
          </div>
        </div>
      </section>

      <FilloutBookingModal
        formSlug="expert-session"
        source="expert-session"
        isOpen={isExpertSessionModalOpen}
        onClose={() => setIsExpertSessionModalOpen(false)}
        title={isEnglish ? 'Book Expert Session' : 'Expert Session buchen'}
      />
      
      <FilloutBookingModal
        formSlug="inflection-call"
        source="expert-session"
        isOpen={isInflectionCallModalOpen}
        onClose={() => setIsInflectionCallModalOpen(false)}
        title={isEnglish ? 'Book Inflection Call' : 'Inflection Call buchen'}
      />

      <Footer />
    </div>
  );
};

export default ExpertSession;
