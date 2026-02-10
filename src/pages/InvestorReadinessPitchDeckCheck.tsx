import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TwinklingStars from '@/components/TwinklingStars';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import { 
  Presentation, 
  TrendingUp, 
  Target, 
  Code, 
  DollarSign, 
  Users, 
  Calculator, 
  HandCoins, 
  Palette, 
  CheckCircle,
  XCircle,
  ArrowRight,
  ChevronDown,
  Calendar,
  AlertTriangle,
  Clock,
  FileText,
  Eye,
  Shield
} from 'lucide-react';

const InvestorReadinessPitchDeckCheck = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const content = {
    breadcrumb: isGerman ? 'Solutions > Investor-Readiness Pitch Deck Check' : 'Solutions > Investor-Readiness Pitch Deck Check',
    badge: isGerman ? 'Decision Support · 3-5 Tage · €1.9K-€2.5K' : 'Decision Support · 3-5 Days · €1.9K-€2.5K',
    
    // Hero
    heroHeadline: isGerman ? 'Expert Pitch Deck Review—In 3-5 Tagen' : 'Expert Pitch Deck Review—In 3-5 Days',
    heroSubheadline: isGerman 
      ? 'Mache dein Pitch Deck investor-ready in 3-5 Tagen. Typische Ergebnisse: Deck Quality +80%, Investor Questions Prepared 20-30, Fundraising Success Rate +30-50pp—mit Investor-Grade Report.'
      : 'Get your pitch deck investor-ready in 3-5 days. Typical outcomes: Deck Quality +80%, Investor Questions Prepared 20-30, Fundraising Success Rate +30-50pp—with investor-grade report.',
    
    heroStats: [
      { label: 'Deck Quality', value: '+80%', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' },
      { label: 'Investor Q&A', value: '20-30', sublabel: isGerman ? 'Prepared' : 'Prepared' },
      { label: 'Fundraising Rate', value: '+30-50pp', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' }
    ],
    
    primaryCta: isGerman ? 'Deck Check anfragen (€1.9K)' : 'Request Deck Check (€1.9K)',
    secondaryCta: isGerman ? 'So funktioniert es ↓' : 'See How It Works ↓',
    
    trustBadges: [
      { icon: Clock, label: isGerman ? '3-5 Tage (Schnelle Lieferung)' : '3-5 Days (Fast Turnaround)' },
      { icon: FileText, label: isGerman ? 'Investor-Grade Report (10-15 Seiten)' : 'Investor-Grade Report (10-15 Pages)' },
      { icon: Eye, label: isGerman ? 'Investor-Perspektive (Was VCs wirklich prüfen)' : 'Investor Perspective (What VCs Actually Check)' }
    ],
    
    // Problem Section
    problemHeadline: isGerman ? 'Dein Pitch Deck ist nicht Investor-Ready—und du weißt es nicht' : "Your Pitch Deck Isn't Investor-Ready—And You Don't Know It",
    problemIntro: isGerman
      ? 'Dein Pitch Deck ist schwach (keine Story, unklare Traction, fehlende Metriken). Du hast es an 20 VCs geschickt—nur 2 Meetings. Deine Deck Quality ist 30% (Benchmark: 90%+ für Series B+). Und das Schlimmste—du weißt nicht, was kaputt ist.'
      : "Your pitch deck is weak (no story, unclear traction, missing metrics). You've sent it to 20 VCs—only 2 meetings. Your deck quality is 30% (benchmark: 90%+ for Series B+). And worst of all—you don't know what's broken.",
    
    symptoms: [
      { 
        title: isGerman ? 'Schwaches Deck' : 'Weak deck',
        description: isGerman ? 'Keine Story, unklare Traction, fehlende Metriken (Deck Quality 30%)' : 'No story, unclear traction, missing metrics (deck quality 30%)',
        icon: Presentation
      },
      { 
        title: isGerman ? 'Niedrige Meeting Rate' : 'Low meeting rate',
        description: isGerman ? '10-20% (Benchmark: 40-60% für starkes Deck)' : '10-20% (benchmark: 40-60% for strong deck)',
        icon: TrendingUp
      },
      { 
        title: isGerman ? 'Keine Investor-Perspektive' : 'No investor perspective',
        description: isGerman ? 'Weißt nicht, was VCs wirklich prüfen' : "Don't know what VCs actually check",
        icon: Eye
      },
      { 
        title: isGerman ? 'Unklare Positionierung' : 'Unclear positioning',
        description: isGerman ? 'Nicht klar, warum du besser bist als Wettbewerber' : "Not clear why you're better than competitors",
        icon: Target
      },
      { 
        title: isGerman ? 'Fundraising-Risiko' : 'Fundraising risk',
        description: isGerman ? 'Kannst nächste Runde nicht mit schwachem Deck raisen' : "Can't raise next round with weak deck",
        icon: AlertTriangle
      }
    ],
    
    realCostTitle: isGerman ? 'Die echten Kosten:' : 'The real cost:',
    realCosts: [
      isGerman ? 'Zerstört Fundraising-Fähigkeit (schwaches Deck = keine Meetings)' : 'Destroys fundraising ability (weak deck = no meetings)',
      isGerman ? 'Begrenzt Bewertung (20-30% Discount für schwaches Deck)' : 'Limits valuation (20-30% discount for weak deck)',
      isGerman ? 'Verlängert Deal-Timeline (3-6 Monate länger)' : 'Extends deal timeline (3-6 months longer)',
      isGerman ? 'Erhöht Down-Round-Risiko (kannst nicht bei Zielbewertung raisen)' : "Increases down-round risk (can't raise at target valuation)"
    ],
    
    problemConclusion: isGerman 
      ? 'Du brauchst ein investor-ready Deck. Schnell.' 
      : 'You need investor-ready deck. Fast.',
    
    // Solution Section
    solutionHeadline: isGerman ? 'Wie Investor-Readiness Pitch Deck Check funktioniert' : 'How Investor-Readiness Pitch Deck Check Works',
    solutionSubheadline: isGerman
      ? 'Wir reviewen nicht nur Slides. Wir führen eine Experten-Deck-Analyse durch—aus Investor-Perspektive—damit du genau weißt, was du fixen sollst.'
      : "We don't just review slides. We conduct expert deck analysis—from investor perspective—so you know exactly what to fix.",
    
    dimensions: [
      {
        icon: Presentation,
        title: isGerman ? 'Story & Narrative' : 'Story & Narrative',
        items: isGerman 
          ? ['Story-Struktur (gibt es eine klare Narrative?)', 'Problem-Solution Fit (ist das Problem überzeugend?)', 'Emotionale Verbindung (resoniert es?)', 'Narrative Flow (fließt es logisch?)']
          : ['Story structure (is there a clear narrative?)', 'Problem-solution fit (is the problem compelling?)', 'Emotional connection (does it resonate?)', 'Narrative flow (does it flow logically?)']
      },
      {
        icon: TrendingUp,
        title: isGerman ? 'Traction & Metrics' : 'Traction & Metrics',
        items: isGerman
          ? ['Traction Clarity (ist Traction klar?)', 'Metrics Quality (sind Metriken investor-grade?)', 'Growth Story (ist Growth überzeugend?)', 'Unit Economics (sind Unit Economics klar?)']
          : ['Traction clarity (is traction clear?)', 'Metrics quality (are metrics investor-grade?)', 'Growth story (is growth compelling?)', 'Unit economics (are unit economics clear?)']
      },
      {
        icon: Target,
        title: isGerman ? 'Market & Opportunity' : 'Market & Opportunity',
        items: isGerman
          ? ['Market Size (ist TAM/SAM/SOM klar?)', 'Market Timing (warum jetzt?)', 'Competitive Positioning (warum du vs. Wettbewerber?)', 'Category Leadership (definierst du die Kategorie?)']
          : ['Market size (is TAM/SAM/SOM clear?)', 'Market timing (why now?)', 'Competitive positioning (why you vs. competitors?)', 'Category leadership (are you defining category?)']
      },
      {
        icon: Code,
        title: isGerman ? 'Product & Technology' : 'Product & Technology',
        items: isGerman
          ? ['Product Clarity (ist Produkt klar?)', 'Technology Moat (ist Technology defensible?)', 'Product Roadmap (ist Roadmap klar?)', 'AI Integration (ist AI Teil des Produkts?)']
          : ['Product clarity (is product clear?)', 'Technology moat (is technology defensible?)', 'Product roadmap (is roadmap clear?)', 'AI integration (is AI part of product?)']
      },
      {
        icon: DollarSign,
        title: isGerman ? 'Business Model' : 'Business Model',
        items: isGerman
          ? ['Revenue Model (ist Revenue Model klar?)', 'Pricing Strategy (ist Pricing klar?)', 'Go-to-Market (ist GTM klar?)', 'Unit Economics (sind Unit Economics stark?)']
          : ['Revenue model (is revenue model clear?)', 'Pricing strategy (is pricing clear?)', 'Go-to-market (is GTM clear?)', 'Unit economics (are unit economics strong?)']
      },
      {
        icon: Users,
        title: isGerman ? 'Team' : 'Team',
        items: isGerman
          ? ['Team Strength (ist Team stark?)', 'Team Completeness (sind Key Roles besetzt?)', 'Team Credibility (ist Team glaubwürdig?)', 'Advisors (hast du starke Advisors?)']
          : ['Team strength (is team strong?)', 'Team completeness (are key roles filled?)', 'Team credibility (is team credible?)', 'Advisors (do you have strong advisors?)']
      },
      {
        icon: Calculator,
        title: isGerman ? 'Financials' : 'Financials',
        items: isGerman
          ? ['Financial Clarity (sind Financials klar?)', 'Financial Projections (sind Projections realistisch?)', 'Capital Efficiency (ist Burn Rate klar?)', 'Path to Profitability (ist Pfad klar?)']
          : ['Financial clarity (are financials clear?)', 'Financial projections (are projections realistic?)', 'Capital efficiency (is burn rate clear?)', 'Path to profitability (is path clear?)']
      },
      {
        icon: HandCoins,
        title: isGerman ? 'Ask & Use of Funds' : 'Ask & Use of Funds',
        items: isGerman
          ? ['Ask Clarity (ist Ask klar?)', 'Use of Funds (ist Verwendung klar?)', 'Milestones (sind Milestones klar?)', 'Next Round (ist nächste Runde klar?)']
          : ['Ask clarity (is ask clear?)', 'Use of funds (is use clear?)', 'Milestones (are milestones clear?)', 'Next round (is next round clear?)']
      },
      {
        icon: Palette,
        title: isGerman ? 'Design & Visual' : 'Design & Visual',
        items: isGerman
          ? ['Design Quality (ist Design professionell?)', 'Visual Clarity (sind Visuals klar?)', 'Slide Consistency (ist Design konsistent?)', 'Readability (ist Text lesbar?)']
          : ['Design quality (is design professional?)', 'Visual clarity (are visuals clear?)', 'Slide consistency (is design consistent?)', 'Readability (is text readable?)']
      },
      {
        icon: CheckCircle,
        title: isGerman ? 'Investor Readiness' : 'Investor Readiness',
        items: isGerman
          ? ['Investor Perspective (beantwortet Deck Investor-Fragen?)', 'Red Flags (gibt es Red Flags?)', 'Missing Elements (was fehlt?)', 'Overall Quality (ist Deck investor-ready?)']
          : ['Investor perspective (does deck answer investor questions?)', 'Red flags (are there red flags?)', "Missing elements (what's missing?)", 'Overall quality (is deck investor-ready?)']
      }
    ],
    
    day12Title: isGerman ? 'TAG 1-2: DECK REVIEW & ANALYSE' : 'DAY 1-2: DECK REVIEW & ANALYSIS',
    day12Description: isGerman
      ? 'Wir reviewen dein Pitch Deck über 10 Dimensionen.'
      : 'We review your pitch deck across 10 dimensions.',
    day12Output: isGerman
      ? 'Output: Pitch Deck Review Report (10-15 Seiten, investor-grade)'
      : 'Output: Pitch Deck Review Report (10-15 pages, investor-grade)',
    
    day35Title: isGerman ? 'TAG 3-5: INVESTOR Q&A SIMULATION (OPTIONAL +€600)' : 'DAY 3-5: INVESTOR Q&A SIMULATION (OPTIONAL +€600)',
    day35Items: isGerman
      ? ['20-30 Investor Questions: Was VCs fragen werden (basierend auf deinem Deck)', 'Recommended Answers: Wie jede Frage beantworten (mit Beispielen)', 'Red Flag Analysis: Welche Red Flags VCs sehen werden (und wie adressieren)', 'Deck Revision Guide: Was im Deck ändern (Slide-by-Slide)']
      : ['20-30 Investor Questions: What VCs will ask (based on your deck)', 'Recommended Answers: How to answer each question (with examples)', 'Red Flag Analysis: What red flags VCs will see (and how to address)', 'Deck Revision Guide: What to change in deck (slide-by-slide)'],
    day35Output: isGerman
      ? 'Output: Investor Q&A Prep Report (5-10 Seiten, umsetzbar)'
      : 'Output: Investor Q&A Prep Report (5-10 pages, actionable)',
    
    whatMakesDifferent: isGerman ? 'Was uns unterscheidet:' : 'What makes this different:',
    differentiators: [
      isGerman ? 'Experten-Analyse (Investor-Perspektive, nicht nur Design-Feedback)' : 'Expert analysis (investor perspective, not just design feedback)',
      isGerman ? '10 Dimensionen (Story, Traction, Market, Product, Business Model, Team, Financials, Ask, Design, Investor Readiness)' : '10 dimensions (story, traction, market, product, business model, team, financials, ask, design, investor readiness)',
      isGerman ? 'Investor-Grade Report (10-15 Seiten, VC-Quality Feedback)' : 'Investor-grade report (10-15 pages, VC-quality feedback)',
      isGerman ? 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' : 'Fast turnaround (3-5 days, not 2-4 weeks)'
    ],
    
    // Outcome Section
    outcomeHeadline: isGerman ? 'Typische Ergebnisse (3-5 Tage)' : 'Typical Outcomes (3-5 Days)',
    outcomeSubheadline: isGerman
      ? 'Das sind echte Ergebnisse von Companies wie dir (Series A-B, €5M-€30M ARR).'
      : "These are real results from companies like yours (Series A-B, €5M-€30M ARR).",
    
    metrics: [
      {
        title: 'Deck Quality +80%',
        whatItMeans: isGerman ? 'Deine Deck Quality steigt um 80%.' : 'Your deck quality increases by 80%.',
        before: isGerman ? 'Deck Quality = 30% (schwache Story, unklare Traction, fehlende Metriken)' : 'Deck Quality = 30% (weak story, unclear traction, missing metrics)',
        after: isGerman ? 'Deck Quality = 90%+ (starke Story, klare Traction, investor-grade Metriken)' : 'Deck Quality = 90%+ (strong story, clear traction, investor-grade metrics)',
        impact: isGerman ? 'Von "schwaches Deck" zu "investor-ready Deck"' : 'From "weak deck" to "investor-ready deck"'
      },
      {
        title: isGerman ? 'Investor Q&A Prepared (20-30 Fragen)' : 'Investor Q&A Prepared (20-30 Questions)',
        whatItMeans: isGerman ? 'Du bist auf 20-30 Investor-Fragen vorbereitet.' : "You're prepared for 20-30 investor questions.",
        before: isGerman ? 'Investor Q&A = Unvorbereitet (weißt nicht, was VCs fragen werden)' : "Investor Q&A = Unprepared (don't know what VCs will ask)",
        after: isGerman ? 'Investor Q&A = Prepared (20-30 Fragen beantwortet, Red Flags adressiert)' : 'Investor Q&A = Prepared (20-30 questions answered, red flags addressed)',
        impact: isGerman ? 'Von "unvorbereitet" zu "investor-ready"' : 'From "unprepared" to "investor-ready"'
      },
      {
        title: 'Fundraising Success Rate +30-50pp',
        whatItMeans: isGerman ? 'Deine Fundraising Success Rate steigt um 30-50pp.' : 'Your fundraising success rate increases by 30-50pp.',
        before: isGerman ? 'Fundraising Success Rate = 10% (20 VCs → 2 Meetings)' : 'Fundraising Success Rate = 10% (20 VCs → 2 meetings)',
        after: isGerman ? 'Fundraising Success Rate = 40-60% (20 VCs → 8-12 Meetings)' : 'Fundraising Success Rate = 40-60% (20 VCs → 8-12 meetings)',
        impact: isGerman ? 'Von "niedrige Meeting Rate" zu "hohe Meeting Rate"' : 'From "low meeting rate" to "high meeting rate"'
      }
    ],
    
    realExampleTitle: isGerman ? 'ECHTES BEISPIEL:' : 'REAL EXAMPLE:',
    realExample: {
      company: isGerman ? 'Series A SaaS, €8M ARR, 60 Mitarbeiter' : 'Series A SaaS, €8M ARR, 60 employees',
      challenge: isGerman 
        ? 'Schwaches Deck (keine Story, unklare Traction), niedrige Meeting Rate (10%), Fundraising stagniert'
        : 'Weak deck (no story, unclear traction), Low meeting rate (10%), Fundraising stalled',
      problems: isGerman
        ? 'Keine Story (nur Fakten), unklare Traction (Metriken nicht investor-grade), fehlende Elemente (kein Competitive Positioning, keine Use of Funds)'
        : 'No story (just facts), unclear traction (metrics not investor-grade), missing elements (no competitive positioning, no use of funds)',
      transformation: isGerman
        ? 'Pitch Deck Check (3-5 Tage, 10 Dimensionen reviewed)'
        : 'Pitch Deck Check (3-5 days, 10 dimensions reviewed)',
      outcomes: [
        isGerman ? 'Deck Quality +85% (30% → 90%+)' : 'Deck Quality +85% (30% → 90%+)',
        isGerman ? 'Investor Q&A Prepared (25 Fragen)' : 'Investor Q&A Prepared (25 questions)',
        isGerman ? 'Fundraising Success Rate +45pp (10% → 55%)' : 'Fundraising Success Rate +45pp (10% → 55%)',
        isGerman ? 'Valuation +20% (€30M → €36M)' : 'Valuation +20% (€30M → €36M)'
      ]
    },
    
    // Process Section
    processHeadline: isGerman ? 'Der Pitch Deck Check Prozess' : 'The Pitch Deck Check Process',
    processSubheadline: isGerman
      ? 'Transparenter Zeitplan. Klare Deliverables. Investor-Grade Qualität.'
      : 'Transparent timeline. Clear deliverables. Investor-grade quality.',
    
    processDay12: {
      title: isGerman ? 'TAG 1-2: DECK REVIEW & ANALYSE' : 'DAY 1-2: DECK REVIEW & ANALYSIS',
      whatWeDo: isGerman
        ? ['Deck anfordern (PDF oder PowerPoint)', '10 Dimensionen reviewen (Story, Traction, Market, Product, Business Model, Team, Financials, Ask, Design, Investor Readiness)', 'Deck Gaps identifizieren (was fehlt oder kaputt ist?)', 'Pitch Deck Review Report erstellen (10-15 Seiten)']
        : ['Request deck (PDF or PowerPoint)', 'Review 10 dimensions (story, traction, market, product, business model, team, financials, ask, design, investor readiness)', "Identify deck gaps (what's missing or broken?)", 'Create Pitch Deck Review Report (10-15 pages)'],
      whatYouGet: isGerman
        ? ['Pitch Deck Review Report (10-15 Seiten, investor-grade)', 'Deck Quality Score (0-100%, Benchmark gegen Series B+ Decks)', 'Dimension-by-Dimension Analyse (10 Dimensionen, was kaputt ist und warum)', 'Slide-by-Slide Feedback (was auf jeder Slide fixen)', 'Experten-Empfehlungen (5-10 Schlüsselaktionen)']
        : ['Pitch Deck Review Report (10-15 pages, investor-grade)', 'Deck Quality Score (0-100%, benchmark against Series B+ decks)', "Dimension-by-Dimension Analysis (10 dimensions, what's broken and why)", 'Slide-by-Slide Feedback (what to fix on each slide)', 'Expert Recommendations (5-10 key actions)'],
      timeCommitment: isGerman ? '1-2 Stunden (Deck teilen, Q&A)' : '1-2 hours (deck sharing, Q&A)'
    },
    
    processDay35: {
      title: isGerman ? 'TAG 3-5: INVESTOR Q&A SIMULATION (OPTIONAL +€600)' : 'DAY 3-5: INVESTOR Q&A SIMULATION (OPTIONAL +€600)',
      whatWeDo: isGerman
        ? ['Investor-Fragen simulieren (20-30 Fragen, die VCs stellen werden)', 'Recommended Answers vorbereiten (wie jede Frage beantworten)', 'Red Flags identifizieren (was VCs als Red Flags sehen werden)', 'Deck Revision Guide erstellen (Slide-by-Slide Änderungen)']
        : ['Simulate investor questions (20-30 questions VCs will ask)', 'Prepare recommended answers (how to answer each question)', 'Identify red flags (what VCs will see as red flags)', 'Create Deck Revision Guide (slide-by-slide changes)'],
      whatYouGet: isGerman
        ? ['Investor Q&A Prep Report (5-10 Seiten, umsetzbar)', '20-30 Investor Questions (was VCs fragen werden)', 'Recommended Answers (wie jede Frage beantworten)', 'Red Flag Analysis (was adressieren)', 'Deck Revision Guide (Slide-by-Slide Änderungen)']
        : ['Investor Q&A Prep Report (5-10 pages, actionable)', '20-30 Investor Questions (what VCs will ask)', 'Recommended Answers (how to answer each question)', 'Red Flag Analysis (what to address)', 'Deck Revision Guide (slide-by-slide changes)'],
      timeCommitment: isGerman ? '1 Stunde (Q&A Review)' : '1 hour (Q&A review)'
    },
    
    pricingTitle: isGerman ? 'INVESTITION:' : 'PRICING:',
    pricingBase: {
      title: isGerman ? 'Base Package (€1.9K):' : 'Base Package (€1.9K):',
      items: isGerman
        ? ['Pitch Deck Review Report (10-15 Seiten)', '10 Dimensionen reviewed', 'Deck Quality Score (0-100%)', 'Slide-by-Slide Feedback', 'Experten-Empfehlungen', '3-5 Tage Turnaround']
        : ['Pitch Deck Review Report (10-15 pages)', '10 Dimensions reviewed', 'Deck Quality Score (0-100%)', 'Slide-by-Slide Feedback', 'Expert recommendations', '3-5 days turnaround']
    },
    pricingExecution: {
      title: isGerman ? '+ Investor Q&A Simulation (€600):' : '+ Investor Q&A Simulation (€600):',
      items: isGerman
        ? ['20-30 Investor Questions', 'Recommended Answers', 'Red Flag Analysis', 'Deck Revision Guide']
        : ['20-30 Investor Questions', 'Recommended Answers', 'Red Flag Analysis', 'Deck Revision Guide']
    },
    pricingTotal: isGerman ? 'Gesamt: €1.9K (Base) oder €2.5K (Base + Q&A Simulation)' : 'Total Investment: €1.9K (Base) or €2.5K (Base + Q&A Simulation)',
    
    qualityGuarantee: isGerman ? 'QUALITÄTSGARANTIE:' : 'QUALITY GUARANTEE:',
    guarantees: isGerman
      ? ['Investor-Grade Qualität (VC-Level Feedback)', '10 Dimensionen reviewed (umfassendes Deck Review)', 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)', 'Referenz-Calls verfügbar (sprich mit Foundern, die das genutzt haben)']
      : ['Investor-grade quality (VC-level feedback)', '10 dimensions reviewed (comprehensive deck review)', 'Fast turnaround (3-5 days, not 2-4 weeks)', "Reference calls available (talk to founders who've used this)"],
    
    // Qualification Section
    qualificationHeadline: isGerman ? 'Ist das richtig für dich?' : 'Is This Right for You?',
    qualificationSubheadline: isGerman
      ? 'Pitch Deck Check funktioniert am besten für Companies in dieser Situation.'
      : 'Pitch Deck Check works best for companies in this situation.',
    
    goodFitTitle: isGerman ? '✅ DAS IST EIN GUTER FIT, WENN:' : '✅ THIS IS A GOOD FIT IF:',
    goodFitItems: [
      {
        title: isGerman ? 'Du hast ein Pitch Deck, aber weißt nicht, ob es investor-ready ist' : "You have a pitch deck but don't know if it's investor-ready",
        items: isGerman
          ? ['Deine Deck Quality ist 30-50% (schwache Story, unklare Traction)', 'Deine Meeting Rate ist 10-20% (20 VCs → 2-4 Meetings)', 'Du weißt nicht, was VCs fragen werden', 'Du weißt nicht, was in deinem Deck kaputt ist']
          : ['Your deck quality is 30-50% (weak story, unclear traction)', 'Your meeting rate is 10-20% (20 VCs → 2-4 meetings)', "You don't know what VCs will ask", "You don't know what's broken in your deck"]
      },
      {
        title: isGerman ? 'Du brauchst Experten-Deck-Review (nicht nur Design-Feedback)' : 'You need expert deck review (not just design feedback)',
        items: isGerman
          ? ['Brauchst du Investor-Perspektive? (nicht nur Design-Feedback?)', 'Brauchst du Investor-Grade Report? (nicht nur Slide-Feedback?)', 'Brauchst du Investor Q&A Prep? (20-30 Fragen prepared?)', 'Brauchst du schnelle Lieferung? (3-5 Tage, nicht 2-4 Wochen?)']
          : ['Do you need investor perspective? (not just design feedback?)', 'Do you need investor-grade report? (not just slide feedback?)', 'Do you need investor Q&A prep? (20-30 questions prepared?)', 'Do you need fast turnaround? (3-5 days, not 2-4 weeks?)']
      },
      {
        title: isGerman ? 'Du bist Series A-B, €5M-€30M ARR' : "You're Series A-B, €5M-€30M ARR",
        items: isGerman
          ? ['Du hast Seed/Series A geraised', 'Du hast Revenue (€5M-€30M ARR)', 'Du bist im Fundraising (Series A/B)']
          : ["You've raised Seed/Series A", 'You have revenue (€5M-€30M ARR)', "You're fundraising (Series A/B)"]
      },
      {
        title: isGerman ? 'Du brauchst schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' : 'You need fast turnaround (3-5 days, not 2-4 weeks)',
        items: isGerman
          ? ['Du brauchst Ergebnisse in 3-5 Tagen (nicht 2-4 Wochen)', 'Du bist bereit, Deck zu teilen (PDF oder PowerPoint)', 'Du commitest 1-2 Stunden für Deck teilen + Q&A']
          : ['You need results in 3-5 days (not 2-4 weeks)', "You're willing to share deck (PDF or PowerPoint)", "You'll commit 1-2 hours for deck sharing + Q&A"]
      },
      {
        title: isGerman ? 'Du hast Budget (€1.9K-€2.5K)' : 'You have budget (€1.9K-€2.5K)',
        items: isGerman
          ? ['Du kannst €1.9K (Base) oder €2.5K (Base + Q&A Simulation) investieren', 'ROI ist 10-30x (basierend auf Fundraising Success Rate und Valuation Increase)']
          : ['You can invest €1.9K (Base) or €2.5K (Base + Q&A Simulation)', 'ROI is 10-30x (based on fundraising success rate and valuation increase)']
      }
    ],
    
    notFitTitle: isGerman ? '❌ DAS IST KEIN GUTER FIT, WENN:' : '❌ THIS IS NOT A GOOD FIT IF:',
    notFitItems: [
      {
        title: isGerman ? 'Du brauchst Hands-on Deck Creation (nicht nur Review)' : 'You need hands-on deck creation (not just review)',
        description: isGerman
          ? 'Wenn du Hands-on Deck Creation brauchst (nicht nur Review), reicht Pitch Deck Check nicht.'
          : 'If you need hands-on deck creation (not just review), Pitch Deck Check is not enough.',
        betterFit: isGerman ? 'Besser: Power Up: Investor-Readiness (30 Tage, €23.6K) für Hands-on Deck Creation' : 'Better fit: Power Up: Investor-Readiness (30 days, €23.6K) for hands-on deck creation'
      },
      {
        title: isGerman ? 'Du hast schon ein investor-ready Deck (brauchst nur Refinement)' : 'You already have investor-ready deck (just need refinement)',
        description: isGerman
          ? 'Wenn dein Deck schon investor-ready ist, brauchst du kein Full Review.'
          : "If your deck is already investor-ready, you don't need full review.",
        betterFit: isGerman ? 'Besser: Expert Session: Investor-Readiness (45-90 min, €490-€890) für Quick Refinement' : 'Better fit: Expert Session: Investor-Readiness (45-90 min, €490-€890) for quick refinement'
      },
      {
        title: isGerman ? 'Du brauchst Full Fundraising Support (nicht nur Deck Review)' : 'You need full fundraising support (not just deck review)',
        description: isGerman
          ? 'Wenn du Full Fundraising Support brauchst (nicht nur Deck Review), reicht Pitch Deck Check nicht.'
          : 'If you need full fundraising support (not just deck review), Pitch Deck Check is not enough.',
        betterFit: isGerman ? 'Besser: Power Up: Investor-Readiness (30 Tage, €23.6K) oder Boost: Board Excellence (90 Tage, €60K-€78K)' : 'Better fit: Power Up: Investor-Readiness (30 days, €23.6K) or Boost: Board Excellence (90 days, €60K-€78K)'
      },
      {
        title: isGerman ? 'Du hast noch kein Deck (brauchst Creation from Scratch)' : "You don't have a deck yet (need to create from scratch)",
        description: isGerman
          ? 'Wenn du noch kein Deck hast, brauchst du Deck Creation (nicht Review).'
          : "If you don't have a deck yet, you need deck creation (not review).",
        betterFit: isGerman ? 'Besser: Power Up: Investor-Readiness (30 Tage, €23.6K) für Deck Creation' : 'Better fit: Power Up: Investor-Readiness (30 days, €23.6K) for deck creation'
      }
    ],
    
    notSureText: isGerman
      ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-min Inflection Call. Wir bewerten dein Deck und empfehlen den besten Pfad.'
      : "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll assess your deck and recommend the best path forward.",
    
    // Final CTA Section
    finalCtaHeadline: isGerman ? 'Bereit für ein Investor-Ready Deck?' : 'Ready to Get Investor-Ready Deck?',
    finalCtaSubheadline: isGerman ? "Hier ist, was als nächstes passiert." : "Here's what happens next.",
    
    step1Title: isGerman ? 'SCHRITT 1: PITCH DECK CHECK ANFRAGEN (€1.9K)' : 'STEP 1: REQUEST PITCH DECK CHECK (€1.9K)',
    step1Items: isGerman
      ? ['Wir senden dir einen Deck-Upload-Link (PDF oder PowerPoint)', 'Du teilst Deck (1-2 Stunden)', 'Wir reviewen dein Deck (10 Dimensionen)', 'Du erhältst Pitch Deck Review Report (10-15 Seiten, 3-5 Tage)']
      : ["We'll send you a deck upload link (PDF or PowerPoint)", 'You share deck (1-2 hours)', 'We review your deck (10 dimensions)', 'You get Pitch Deck Review Report (10-15 pages, 3-5 days)'],
    step1Conclusion: isGerman ? 'Wisse genau, was du fixen sollst.' : 'Know exactly what to fix.',
    
    step2Title: isGerman ? 'SCHRITT 2: ENTSCHEIDE, OB DU INVESTOR Q&A SIMULATION BRAUCHST (+€600)' : 'STEP 2: DECIDE IF YOU NEED INVESTOR Q&A SIMULATION (+€600)',
    step2Items: isGerman
      ? ['20-30 Investor Questions (was VCs fragen werden)', 'Recommended Answers (wie jede Frage beantworten)', 'Red Flag Analysis (was adressieren)', 'Deck Revision Guide (Slide-by-Slide Änderungen)']
      : ['20-30 Investor Questions (what VCs will ask)', 'Recommended Answers (how to answer each question)', 'Red Flag Analysis (what to address)', 'Deck Revision Guide (slide-by-slide changes)'],
    step2Conclusion: isGerman ? 'Du entscheidest. Kein Druck.' : 'You decide. No pressure.',
    
    alternativeTitle: isGerman ? 'ALTERNATIVE: STARTE MIT EINEM INFLECTION CALL (KOSTENLOS)' : 'ALTERNATIVE: START WITH AN INFLECTION CALL (FREE)',
    alternativeDescription: isGerman
      ? 'Nicht sicher, ob du Deck Check brauchst? Starte mit einem kostenlosen Call:'
      : 'Not sure if you need deck check? Start with a free call:',
    alternativeItems: isGerman
      ? ['Bewerte dein Deck (Deck Quality, Meeting Rate, Fundraising Readiness?)', 'Identifiziere Deck Gaps (was ist kaputt?)', 'Erhalte Empfehlung (Deck Check, Power Up, oder Boost)']
      : ['Assess your deck (deck quality, meeting rate, fundraising readiness?)', "Identify deck gaps (what's broken?)", 'Get recommendation (Deck check, Power Up, or Boost)'],
    
    inflectionCallCta: isGerman ? 'Kostenlosen Inflection Call buchen' : 'Book Free Inflection Call',
    
    faqTitle: 'FAQ:',
    faqItems: [
      {
        question: isGerman ? 'Wie lange dauert Pitch Deck Check?' : 'How long does pitch deck check take?',
        answer: isGerman ? '3-5 Tage (vom Deck teilen bis zum Pitch Deck Review Report)' : '3-5 days (from deck sharing to Pitch Deck Review Report)'
      },
      {
        question: isGerman ? 'Was ist die Investition?' : "What's the investment?",
        answer: isGerman ? '€1.9K (Base) oder €2.5K (Base + Investor Q&A Simulation)' : '€1.9K (Base) or €2.5K (Base + Investor Q&A Simulation)'
      },
      {
        question: isGerman ? 'Welches Format braucht ihr?' : 'What format do you need?',
        answer: isGerman ? 'PDF oder PowerPoint (wir akzeptieren beides)' : 'PDF or PowerPoint (we accept both)'
      },
      {
        question: isGerman ? 'Kann ich mit einer Referenz sprechen?' : 'Can I talk to a reference?',
        answer: isGerman ? 'Ja. Wir verbinden dich mit einem Founder, der Pitch Deck Check genutzt hat (gleiche Stage, gleiche Challenge).' : "Yes. We'll connect you with a founder who's used Pitch Deck Check (same stage, same challenge)."
      },
      {
        question: isGerman ? 'Was ist der ROI?' : "What's the ROI?",
        answer: isGerman ? 'Typischer ROI ist 10-30x (basierend auf Fundraising Success Rate und Valuation Increase).' : 'Typical ROI is 10-30x (based on fundraising success rate and valuation increase).'
      },
      {
        question: isGerman ? 'Wie unterscheidet sich das von einem Consultant?' : 'How is this different from hiring a consultant?',
        answer: isGerman ? 'Consultants brauchen 2-4 Wochen und kosten €5K-€15K. Wir liefern in 3-5 Tagen für €1.9K-€2.5K mit Investor-Grade Qualität.' : 'Consultants take 2-4 weeks and cost €5K-€15K. We deliver in 3-5 days for €1.9K-€2.5K with investor-grade quality.'
      },
      {
        question: isGerman ? 'Helft ihr beim Deck Redesign?' : 'Do you help with deck redesign?',
        answer: isGerman ? 'Nein. Wir liefern Experten-Feedback (was fixen), aber du implementierst Änderungen. Wenn du Hands-on Redesign brauchst, erwäge Power Up: Investor-Readiness (30 Tage, €23.6K).' : 'No. We provide expert feedback (what to fix), but you implement changes. If you need hands-on redesign, consider Power Up: Investor-Readiness (30 days, €23.6K).'
      }
    ],
    
    finalText: isGerman ? 'Noch Fragen? Schreib uns an team@scalingx.io oder buche einen Call.' : 'Still have questions? Email us at team@scalingx.io or book a call.'
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <TwinklingStars />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <p className="text-sm text-muted-foreground mb-4">{content.breadcrumb}</p>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Presentation className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{content.badge}</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {content.heroHeadline}
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {content.heroSubheadline}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 max-w-2xl mx-auto">
              {content.heroStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-card/50 border border-border/50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => setIsBookingModalOpen(true)}
              >
                {content.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('solution')}
              >
                {content.secondaryCta}
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {content.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>
      
      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              {content.problemHeadline}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 text-center">
              {content.problemIntro}
            </p>
            
            {/* Symptoms */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {content.symptoms.map((symptom, index) => (
                <div key={index} className="p-4 bg-card border border-border rounded-lg">
                  <div className="flex items-start gap-3">
                    <symptom.icon className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{symptom.title}</h4>
                      <p className="text-sm text-muted-foreground">{symptom.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Real Cost */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">{content.realCostTitle}</h3>
              <ul className="space-y-2">
                {content.realCosts.map((cost, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-sm">{cost}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-xl font-bold text-center text-primary">
              {content.problemConclusion}
            </p>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section id="solution" className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {content.solutionHeadline}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              {content.solutionSubheadline}
            </p>
            
            {/* 10 Dimensions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
              {content.dimensions.map((dimension, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <dimension.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{dimension.title}</h3>
                  </div>
                  <ul className="space-y-1">
                    {dimension.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-xs text-muted-foreground flex items-start gap-1">
                        <span className="text-primary">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Day 1-2 */}
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-2">{content.day12Title}</h3>
              <p className="text-muted-foreground mb-2">{content.day12Description}</p>
              <p className="text-sm text-primary font-medium">{content.day12Output}</p>
            </div>
            
            {/* Day 3-5 */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">{content.day35Title}</h3>
              <ul className="space-y-2 mb-4">
                {content.day35Items.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-primary font-medium">{content.day35Output}</p>
            </div>
            
            {/* Differentiators */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-bold mb-4">{content.whatMakesDifferent}</h3>
              <ul className="space-y-2">
                {content.differentiators.map((diff, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Outcome Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {content.outcomeHeadline}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              {content.outcomeSubheadline}
            </p>
            
            {/* Metrics */}
            <div className="space-y-6 mb-12">
              {content.metrics.map((metric, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-2 text-primary">{metric.title}</h3>
                  <p className="text-muted-foreground mb-4">{metric.whatItMeans}</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-muted/50 rounded">
                      <span className="font-medium">{isGerman ? 'Vorher:' : 'Before:'}</span>
                      <p className="text-muted-foreground">{metric.before}</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded">
                      <span className="font-medium">{isGerman ? 'Nachher:' : 'After:'}</span>
                      <p className="text-muted-foreground">{metric.after}</p>
                    </div>
                    <div className="p-3 bg-primary/20 rounded">
                      <span className="font-medium">Impact:</span>
                      <p className="text-primary font-medium">{metric.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Real Example */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">{content.realExampleTitle}</h3>
              <div className="space-y-3 text-sm">
                <p><span className="font-medium">Company:</span> {content.realExample.company}</p>
                <p><span className="font-medium">Challenge:</span> {content.realExample.challenge}</p>
                <p><span className="font-medium">{isGerman ? 'Deck-Probleme:' : 'Deck Problems:'}</span> {content.realExample.problems}</p>
                <p><span className="font-medium">Transformation:</span> {content.realExample.transformation}</p>
                <div>
                  <span className="font-medium">{isGerman ? 'Ergebnisse:' : 'Outcomes:'}</span>
                  <ul className="mt-2 space-y-1">
                    {content.realExample.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => setIsBookingModalOpen(true)}
              >
                {content.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                {isGerman ? 'Erhalte deinen Investor-Ready Deck Report in 3-5 Tagen. Wisse genau, was du fixen sollst.' : 'Get your investor-ready deck report in 3-5 days. Know exactly what to fix.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {content.processHeadline}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              {content.processSubheadline}
            </p>
            
            {/* Day 1-2 Process */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">{content.processDay12.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">{isGerman ? 'Was wir tun:' : 'What we do:'}</h4>
                  <ul className="space-y-1">
                    {content.processDay12.whatWeDo.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span>•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">{isGerman ? 'Was du bekommst:' : 'What you get:'}</h4>
                  <ul className="space-y-1">
                    {content.processDay12.whatYouGet.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <Calendar className="w-4 h-4 inline mr-1" />
                {isGerman ? 'Zeitaufwand (dein Team):' : 'Time commitment (your team):'} {content.processDay12.timeCommitment}
              </p>
            </div>
            
            {/* Day 3-5 Process */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">{content.processDay35.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">{isGerman ? 'Was wir tun:' : 'What we do:'}</h4>
                  <ul className="space-y-1">
                    {content.processDay35.whatWeDo.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span>•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">{isGerman ? 'Was du bekommst:' : 'What you get:'}</h4>
                  <ul className="space-y-1">
                    {content.processDay35.whatYouGet.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <Calendar className="w-4 h-4 inline mr-1" />
                {isGerman ? 'Zeitaufwand (dein Team):' : 'Time commitment (your team):'} {content.processDay35.timeCommitment}
              </p>
            </div>
            
            {/* Pricing */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-bold mb-3">{content.pricingBase.title}</h4>
                <ul className="space-y-2">
                  {content.pricingBase.items.map((item, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                <h4 className="font-bold mb-3">{content.pricingExecution.title}</h4>
                <ul className="space-y-2">
                  {content.pricingExecution.items.map((item, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <p className="text-center font-bold text-lg mb-8">{content.pricingTotal}</p>
            
            {/* Quality Guarantee */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-bold mb-3">{content.qualityGuarantee}</h4>
              <ul className="space-y-2">
                {content.guarantees.map((guarantee, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {guarantee}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Qualification Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {content.qualificationHeadline}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              {content.qualificationSubheadline}
            </p>
            
            {/* Good Fit */}
            <div className="bg-card border border-primary/30 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-6 text-primary">{content.goodFitTitle}</h3>
              <div className="space-y-6">
                {content.goodFitItems.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2">{index + 1}. {item.title}</h4>
                    <ul className="space-y-1 pl-4">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" /> {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Not Fit */}
            <div className="bg-card border border-destructive/30 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-6 text-destructive">{content.notFitTitle}</h3>
              <div className="space-y-6">
                {content.notFitItems.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-1">{index + 1}. {item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <p className="text-sm text-primary">{item.betterFit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              {content.notSureText}
            </p>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {content.finalCtaHeadline}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              {content.finalCtaSubheadline}
            </p>
            
            {/* Step 1 */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">{content.step1Title}</h3>
              <ul className="space-y-2 mb-4">
                {content.step1Items.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-primary font-medium">{index + 1}.</span> {item}
                  </li>
                ))}
              </ul>
              <p className="font-medium text-primary">{content.step1Conclusion}</p>
              <Button 
                size="lg" 
                className="w-full mt-4 gap-2"
                onClick={() => setIsBookingModalOpen(true)}
              >
                {content.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Step 2 */}
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">{content.step2Title}</h3>
              <ul className="space-y-2 mb-4">
                {content.step2Items.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">{content.step2Conclusion}</p>
            </div>
            
            {/* Alternative */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-2">{content.alternativeTitle}</h3>
              <p className="text-sm text-muted-foreground mb-4">{content.alternativeDescription}</p>
              <ul className="space-y-2 mb-4">
                {content.alternativeItems.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                onClick={() => setIsBookingModalOpen(true)}
              >
                {content.inflectionCallCta}
              </Button>
            </div>
            
            {/* FAQ */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">{content.faqTitle}</h3>
              <Accordion type="single" collapsible className="w-full">
                {content.faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* Final CTA */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => setIsBookingModalOpen(true)}
              >
                {content.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                {content.finalText}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FilloutBookingModal
        formSlug="inflection-call"
        source="investor-readiness"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={isGerman ? 'Inflection Call buchen' : 'Book Inflection Call'}
      />
      
      <Footer />
    </div>
  );
};

export default InvestorReadinessPitchDeckCheck;
