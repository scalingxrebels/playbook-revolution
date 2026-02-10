import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TwinklingStars from '@/components/TwinklingStars';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import { 
  Brain, 
  Target, 
  Server, 
  GraduationCap, 
  Layers, 
  Workflow, 
  LineChart, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Clock, 
  FileText, 
  Shield,
  CheckCircle,
  XCircle,
  ArrowRight,
  ChevronDown,
  Calendar,
  Zap
} from 'lucide-react';

const AIMaturityAssessment = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const content = {
    breadcrumb: isGerman ? 'Solutions > AI Maturity Assessment' : 'Solutions > AI Maturity Assessment',
    badge: isGerman ? 'Decision Support · 3-5 Tage · €3.9K-€5.9K' : 'Decision Support · 3-5 Days · €3.9K-€5.9K',
    
    // Hero
    heroHeadline: isGerman ? 'Expert AI Assessment—In 3-5 Tagen' : 'Expert AI Assessment—In 3-5 Days',
    heroSubheadline: isGerman 
      ? 'Erhalte eine Experten-Analyse deiner AI-Reife in 3-5 Tagen. Typische Ergebnisse: AI Clarity +90%, AI Maturity Roadmap +50-150%, Efficiency Roadmap +30-80%—mit Board-Ready Report.'
      : 'Get expert analysis of your AI maturity in 3-5 days. Typical outcomes: AI Clarity +90%, AI Maturity Roadmap +50-150%, Efficiency Roadmap +30-80%—with board-ready report.',
    
    heroStats: [
      { label: 'AI Clarity', value: '+90%', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' },
      { label: 'AI Maturity Roadmap', value: '+50-150%', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' },
      { label: 'Efficiency Roadmap', value: '+30-80%', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' }
    ],
    
    primaryCta: isGerman ? 'Assessment anfragen (€3.9K)' : 'Request Assessment (€3.9K)',
    secondaryCta: isGerman ? 'So funktioniert es ↓' : 'See How It Works ↓',
    
    trustBadges: [
      { icon: Clock, label: isGerman ? '3-5 Tage (Schnelle Lieferung)' : '3-5 Days (Fast Turnaround)' },
      { icon: FileText, label: isGerman ? 'Board-Ready Report (20-30 Seiten)' : 'Board-Ready Report (20-30 Pages)' },
      { icon: Shield, label: isGerman ? 'Experten-Analyse (McKinsey-Level)' : 'Expert Analysis (McKinsey-Level Quality)' }
    ],
    
    // Problem Section
    problemHeadline: isGerman ? 'Du nutzt AI—aber wirst nicht AI-Native' : "You're Using AI—But Not Becoming AI-Native",
    problemIntro: isGerman
      ? 'Dein AI Maturity Score ist 30% (Level 1: AI-Powered). Du nutzt AI-Tools (ChatGPT, Copilot), aber AI ist nicht in deiner DNA. Deine Wettbewerber sind bei 70-80% (Level 2-3: AI-Enabled/AI-Native). Und das Schlimmste—du weißt nicht, welchen AI-Hebel du zuerst ziehen sollst.'
      : "Your AI Maturity Score is 30% (Level 1: AI-Powered). You're using AI tools (ChatGPT, Copilot), but AI isn't in your DNA. Your competitors are at 70-80% (Level 2-3: AI-Enabled/AI-Native). And worst of all—you don't know which AI lever to pull first.",
    
    symptoms: [
      { 
        title: isGerman ? 'Niedriger AI Maturity Score' : 'Low AI Maturity Score',
        description: isGerman ? '20-40% (Level 1: AI-Powered, Benchmark: 70-80% für AI-Native)' : '20-40% (Level 1: AI-Powered, benchmark: 70-80% for AI-Native)',
        icon: Brain
      },
      { 
        title: isGerman ? 'AI-Chaos' : 'AI chaos',
        description: isGerman ? '10+ AI-Tools, keine Strategie, keine Integration' : '10+ AI tools, no strategy, no integration',
        icon: Layers
      },
      { 
        title: isGerman ? 'Kein AI-ROI' : 'No AI ROI',
        description: isGerman ? '€50K-€200K AI-Ausgaben, unklarer Impact' : '€50K-€200K AI spend, unclear impact',
        icon: TrendingUp
      },
      { 
        title: isGerman ? 'Wettbewerber-Gap' : 'Competitor gap',
        description: isGerman ? 'Wettbewerber 2-3x schneller (AI-Native vs. AI-Powered)' : 'Competitors 2-3x faster (AI-Native vs. AI-Powered)',
        icon: Zap
      },
      { 
        title: isGerman ? 'Keine AI-Clarity' : 'No AI clarity',
        description: isGerman ? 'Weißt nicht, welchen AI-Hebel du zuerst ziehen sollst' : "Don't know which AI lever to pull first",
        icon: Target
      }
    ],
    
    realCostTitle: isGerman ? 'Die echten Kosten:' : 'The real cost:',
    realCosts: [
      isGerman ? 'Zerstört Wettbewerbsposition (Wettbewerber ziehen 2-3x davon)' : 'Destroys competitive position (competitors pull ahead 2-3x)',
      isGerman ? 'Begrenzt Wachstumspotenzial (kann ohne AI nicht skalieren)' : "Limits growth potential (can't scale without AI)",
      isGerman ? 'Schwächt Board-Vertrauen (Board verliert Vertrauen in AI-Strategie)' : 'Weakens board confidence (board losing trust in AI strategy)',
      isGerman ? 'Erhöht Down-Round-Risiko (kann nicht zu höherer Bewertung raisen)' : "Increases down-round risk (can't raise at higher valuation)"
    ],
    
    problemConclusion: isGerman 
      ? 'Du brauchst AI-Clarity. Schnell.' 
      : 'You need AI clarity. Fast.',
    
    // Solution Section
    solutionHeadline: isGerman ? 'Wie AI Maturity Assessment funktioniert' : 'How AI Maturity Assessment Works',
    solutionSubheadline: isGerman
      ? 'Wir analysieren nicht nur Tools. Wir führen eine Experten-AI-Maturity-Analyse durch—aus McKinsey-Level-Perspektive—damit du genau weißt, was du zuerst fixen sollst.'
      : "We don't just analyze tools. We conduct expert AI maturity analysis—from McKinsey-level perspective—so you know exactly what to fix first.",
    
    dimensions: [
      {
        icon: Target,
        title: isGerman ? 'AI Strategy' : 'AI Strategy',
        items: isGerman 
          ? ['AI-Vision (hast du eine?)', 'AI-Roadmap (klar und umsetzbar?)', 'AI-Governance (wer ist verantwortlich?)', 'AI-Investment (investierst du genug?)']
          : ['AI vision (do you have one?)', 'AI roadmap (is it clear and actionable?)', 'AI governance (who owns AI?)', 'AI investment (are you investing enough?)']
      },
      {
        icon: Server,
        title: isGerman ? 'AI Infrastructure' : 'AI Infrastructure',
        items: isGerman
          ? ['AI-Tools (welche nutzt du?)', 'AI-Stack (ist er integriert?)', 'Daten-Infrastruktur (hast du saubere Daten?)', 'AI-Plattformen (nutzt du die richtigen?)']
          : ['AI tools (which tools do you use?)', 'AI stack (is it integrated?)', 'Data infrastructure (do you have clean data?)', 'AI platforms (are you using the right platforms?)']
      },
      {
        icon: GraduationCap,
        title: isGerman ? 'AI Capabilities' : 'AI Capabilities',
        items: isGerman
          ? ['AI-Skills (hast du AI-Talent?)', 'AI-Team (gibt es ein AI-Team?)', 'AI-Training (sind Teams geschult?)', 'AI-Kultur (wird AI angenommen?)']
          : ['AI skills (do you have AI talent?)', 'AI team (is there an AI team?)', 'AI training (are teams trained?)', 'AI culture (is AI embraced?)']
      },
      {
        icon: Layers,
        title: isGerman ? 'AI Use Cases' : 'AI Use Cases',
        items: isGerman
          ? ['AI-Adoption (welche Funktionen nutzen AI?)', 'AI-Integration (ist AI in Workflows integriert?)', 'AI-Impact (was ist der ROI?)', 'AI-Skalierung (wie viele Use Cases?)']
          : ['AI adoption (which functions use AI?)', 'AI integration (is AI integrated into workflows?)', 'AI impact (what\'s the ROI?)', 'AI scale (how many use cases?)']
      },
      {
        icon: Workflow,
        title: isGerman ? 'AI Operations' : 'AI Operations',
        items: isGerman
          ? ['AI-Workflows (sind Prozesse AI-powered?)', 'AI-Automatisierung (was ist automatisiert?)', 'AI-Monitoring (trackst du AI-Performance?)', 'AI-Optimierung (verbesserst du AI?)']
          : ['AI workflows (are processes AI-powered?)', 'AI automation (what\'s automated?)', 'AI monitoring (do you track AI performance?)', 'AI optimization (are you improving AI?)']
      },
      {
        icon: LineChart,
        title: isGerman ? 'AI Decision-Making' : 'AI Decision-Making',
        items: isGerman
          ? ['AI-gesteuerte Entscheidungen (wie viele?)', 'AI-Insights (nutzt du AI für Insights?)', 'AI-Empfehlungen (empfiehlt AI Aktionen?)', 'AI-Autonomie (wie autonom ist AI?)']
          : ['AI-driven decisions (how many decisions are AI-powered?)', 'AI insights (do you use AI for insights?)', 'AI recommendations (does AI recommend actions?)', 'AI autonomy (how autonomous is AI?)']
      },
      {
        icon: Users,
        title: isGerman ? 'AI Customer Experience' : 'AI Customer Experience',
        items: isGerman
          ? ['AI im Produkt (ist AI in deinem Produkt?)', 'AI im Support (ist Support AI-powered?)', 'AI im Sales (ist Sales AI-powered?)', 'AI im Marketing (ist Marketing AI-powered?)']
          : ['AI in product (is AI in your product?)', 'AI in support (is support AI-powered?)', 'AI in sales (is sales AI-powered?)', 'AI in marketing (is marketing AI-powered?)']
      },
      {
        icon: Lightbulb,
        title: isGerman ? 'AI Innovation' : 'AI Innovation',
        items: isGerman
          ? ['AI-Experimente (testest du neue AI?)', 'AI-R&D (investierst du in AI-R&D?)', 'AI-Partnerschaften (partnerst du mit AI-Firmen?)', 'AI-Wettbewerbsvorteil (ist AI dein Moat?)']
          : ['AI experimentation (are you testing new AI?)', 'AI R&D (do you invest in AI R&D?)', 'AI partnerships (do you partner with AI companies?)', 'AI competitive advantage (is AI your moat?)']
      }
    ],
    
    day12Title: isGerman ? 'TAG 1-2: DATENSAMMLUNG & MATURITY-ANALYSE' : 'DAY 1-2: DATA COLLECTION & MATURITY ANALYSIS',
    day12Description: isGerman
      ? 'Wir analysieren deine AI-Reife über 8 Dimensionen mit dem AI Maturity Framework (AMF).'
      : 'We analyze your AI maturity across 8 dimensions using the AI Maturity Framework (AMF).',
    day12Output: isGerman
      ? 'Output: AI Maturity Report (20-30 Seiten, Board-ready) + AI Maturity Score (0-100%)'
      : 'Output: AI Maturity Report (20-30 pages, board-ready) + AI Maturity Score (0-100%)',
    
    day35Title: isGerman ? 'TAG 3-5: 90-TAGE AI TRANSFORMATION ROADMAP (OPTIONAL +€2K)' : 'DAY 3-5: 90-DAY AI TRANSFORMATION ROADMAP (OPTIONAL +€2K)',
    day35Items: isGerman
      ? ['Priority Matrix: Welche AI-Hebel zuerst fixen (Impact × Effort)', '90-Tage Action Plan: Schritt-für-Schritt zur AI Maturity-Steigerung', 'Quick Wins: Was in den ersten 30 Tagen fixen', 'Long-Term Strategy: Was in 90 Tagen fixen']
      : ['Priority Matrix: Which AI levers to fix first (impact × effort)', '90-Day Action Plan: Step-by-step plan to increase AI Maturity (week-by-week)', 'Quick Wins: What to fix in first 30 days (AI tools, AI workflows, AI training)', 'Long-Term Strategy: What to fix in 90 days (AI strategy, AI infrastructure, AI culture)'],
    day35Output: isGerman
      ? 'Output: 90-Tage AI Transformation Roadmap (10-15 Seiten, umsetzbar)'
      : 'Output: 90-Day AI Transformation Roadmap (10-15 pages, actionable)',
    
    whatMakesDifferent: isGerman ? 'Was uns unterscheidet:' : 'What makes this different:',
    differentiators: [
      isGerman ? 'Experten-Analyse (McKinsey-Level Qualität, nicht nur Daten-Dump)' : 'Expert analysis (McKinsey-level quality, not just data dump)',
      isGerman ? '8 Dimensionen (Strategy, Infrastructure, Capabilities, Use Cases, Operations, Decision-Making, CX, Innovation)' : '8 dimensions (strategy, infrastructure, capabilities, use cases, operations, decision-making, CX, innovation)',
      isGerman ? 'Board-Ready Report (20-30 Seiten, Investor-Grade Qualität)' : 'Board-ready report (20-30 pages, investor-grade quality)',
      isGerman ? 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' : 'Fast turnaround (3-5 days, not 2-4 weeks)',
      isGerman ? 'AI Maturity Score (0-100% Skala, Benchmark gegen AI-Native Leader)' : 'AI Maturity Score (0-100% scale, benchmark against AI-Native leaders)'
    ],
    
    // Outcome Section
    outcomeHeadline: isGerman ? 'Typische Ergebnisse (3-5 Tage)' : 'Typical Outcomes (3-5 Days)',
    outcomeSubheadline: isGerman
      ? 'Das sind echte Ergebnisse von Unternehmen wie deinem (Series A-B, €5M-€30M ARR).'
      : "These are real results from companies like yours (Series A-B, €5M-€30M ARR).",
    
    metrics: [
      {
        title: 'AI Clarity +90%',
        whatItMeans: isGerman ? 'Deine AI-Clarity steigt um 90%.' : 'Your AI clarity increases by 90%.',
        before: isGerman ? 'AI Clarity = Niedrig (weißt nicht, welchen AI-Hebel ziehen)' : "AI Clarity = Low (don't know which AI lever to pull)",
        after: isGerman ? 'AI Clarity = Hoch (klare Roadmap, Prioritäten klar)' : 'AI Clarity = High (clear roadmap, priorities clear)',
        impact: isGerman ? 'Von "AI-Chaos" zu "AI-Clarity"' : 'From "AI chaos" to "AI clarity"'
      },
      {
        title: 'AI Maturity Roadmap +50-150%',
        whatItMeans: isGerman ? 'Deine AI Maturity Roadmap zeigt 50-150% Steigerungspotenzial.' : 'Your AI Maturity roadmap shows 50-150% potential increase.',
        before: isGerman ? 'AI Maturity Score = 30% (Level 1: AI-Powered, kein klarer Pfad zu AI-Native)' : 'AI Maturity Score = 30% (Level 1: AI-Powered, no clear path to AI-Native)',
        after: isGerman ? 'AI Maturity Roadmap = 45-75% (klarer 50-150% Steigerungspfad zu Level 2-3)' : 'AI Maturity Roadmap = 45-75% (clear 50-150% increase path to Level 2-3)',
        impact: isGerman ? 'Von "AI-Powered" zu "AI-Native Roadmap"' : 'From "AI-Powered" to "AI-Native roadmap"'
      },
      {
        title: 'Efficiency Roadmap +30-80%',
        whatItMeans: isGerman ? 'Deine Efficiency Roadmap zeigt 30-80% Steigerungspotenzial.' : 'Your efficiency roadmap shows 30-80% potential increase.',
        before: isGerman ? 'Efficiency = Baseline (manuelle Prozesse, keine AI-Automatisierung)' : 'Efficiency = Baseline (manual processes, no AI automation)',
        after: isGerman ? 'Efficiency Roadmap = +30-80% (klarer AI-Automatisierungspfad)' : 'Efficiency Roadmap = +30-80% (clear AI automation path)',
        impact: isGerman ? 'Von "manuell" zu "AI-powered Efficiency"' : 'From "manual" to "AI-powered efficiency"'
      }
    ],
    
    realExampleTitle: isGerman ? 'ECHTES BEISPIEL:' : 'REAL EXAMPLE:',
    realExample: {
      company: isGerman ? 'Series A SaaS, €12M ARR, 80 Mitarbeiter' : 'Series A SaaS, €12M ARR, 80 employees',
      challenge: isGerman 
        ? 'AI Maturity Score 35%, 12 AI-Tools (ungenutzt), €120K AI-Ausgaben (kein ROI), Wettbewerber 2x schneller'
        : 'AI Maturity Score 35%, 12 AI tools (unused), €120K AI spend (no ROI), Competitors 2x faster',
      problems: isGerman
        ? 'Keine AI-Strategie, kaputte AI-Infrastruktur, niedrige AI-Adoption (20%), keine AI-Integration'
        : 'No AI strategy, broken AI infrastructure, low AI adoption (20%), no AI integration',
      transformation: isGerman
        ? 'AI Maturity Assessment (3-5 Tage, 8 Dimensionen analysiert)'
        : 'AI Maturity Assessment (3-5 days, 8 dimensions analyzed)',
      outcomes: [
        isGerman ? 'AI Clarity +95% (niedrig → hoch)' : 'AI Clarity +95% (low → high)',
        isGerman ? 'AI Maturity Roadmap +114% (35% → 75% Ziel)' : 'AI Maturity Roadmap +114% (35% → 75% target)',
        isGerman ? 'Efficiency Roadmap +60% (Baseline → +60% Ziel)' : 'Efficiency Roadmap +60% (baseline → +60% target)',
        isGerman ? 'AI ROI Roadmap +300% (€120K Ausgaben → €480K Wert Ziel)' : 'AI ROI Roadmap +300% (€120K spend → €480K value target)'
      ]
    },
    
    // Process Section
    processHeadline: isGerman ? 'Der AI Maturity Assessment Prozess' : 'The AI Maturity Assessment Process',
    processSubheadline: isGerman
      ? 'Transparenter Zeitplan. Klare Deliverables. Experten-Grade Qualität.'
      : 'Transparent timeline. Clear deliverables. Expert-grade quality.',
    
    processDay12: {
      title: isGerman ? 'TAG 1-2: DATENSAMMLUNG & AI MATURITY ANALYSE' : 'DAY 1-2: DATA COLLECTION & AI MATURITY ANALYSIS',
      whatWeDo: isGerman
        ? ['Daten anfordern (AI-Tools, AI-Ausgaben, AI Use Cases, etc.)', '8 AI-Dimensionen analysieren', 'AI Maturity Score berechnen (0-100% Skala)', 'AI Maturity Report erstellen (20-30 Seiten)']
        : ['Request data (AI tools, AI spend, AI use cases, etc.)', 'Analyze 8 AI dimensions (strategy, infrastructure, capabilities, use cases, operations, decision-making, CX, innovation)', 'Calculate AI Maturity Score (0-100% scale)', 'Create AI Maturity Report (20-30 pages)'],
      whatYouGet: isGerman
        ? ['AI Maturity Report (20-30 Seiten, Board-ready)', 'AI Maturity Score (0-100% Skala, Benchmark gegen AI-Native Leader)', 'AI Gap Analyse (8 Dimensionen, was kaputt ist und warum)', 'Priority Matrix (welche AI-Hebel zuerst fixen)', 'Experten-Empfehlungen (5-10 Schlüsselaktionen)']
        : ['AI Maturity Report (20-30 pages, board-ready)', 'AI Maturity Score (0-100% scale, benchmark against AI-Native leaders)', 'AI Gap Analysis (8 dimensions, what\'s broken and why)', 'Priority Matrix (which AI levers to fix first)', 'Expert Recommendations (5-10 key actions)'],
      timeCommitment: isGerman ? '2-4 Stunden (Daten teilen, Q&A)' : '2-4 hours (data sharing, Q&A)'
    },
    
    processDay35: {
      title: isGerman ? 'TAG 3-5: 90-TAGE AI TRANSFORMATION ROADMAP (OPTIONAL +€2K)' : 'DAY 3-5: 90-DAY AI TRANSFORMATION ROADMAP (OPTIONAL +€2K)',
      whatWeDo: isGerman
        ? ['90-Tage AI Transformation Roadmap erstellen (Woche-für-Woche Action Plan)', 'Quick Wins identifizieren (was in ersten 30 Tagen fixen)', 'Long-Term Strategy designen (was in 90 Tagen fixen)', 'Implementation Guide vorbereiten (wie ausführen)']
        : ['Create 90-day AI transformation roadmap (week-by-week action plan)', 'Identify quick wins (what to fix in first 30 days)', 'Design long-term strategy (what to fix in 90 days)', 'Prepare implementation guide (how to execute)'],
      whatYouGet: isGerman
        ? ['90-Tage AI Transformation Roadmap (10-15 Seiten, umsetzbar)', 'Quick Wins Liste (erste 30 Tage)', 'Long-Term Strategy (90 Tage)', 'Implementation Guide (wie ausführen)']
        : ['90-Day AI Transformation Roadmap (10-15 pages, actionable)', 'Quick Wins List (first 30 days)', 'Long-Term Strategy (90 days)', 'Implementation Guide (how to execute)'],
      timeCommitment: isGerman ? '1-2 Stunden (Roadmap Review, Q&A)' : '1-2 hours (roadmap review, Q&A)'
    },
    
    pricingTitle: isGerman ? 'INVESTITION:' : 'PRICING:',
    pricingBase: {
      title: isGerman ? 'Base Package (€3.9K):' : 'Base Package (€3.9K):',
      items: isGerman
        ? ['AI Maturity Report (20-30 Seiten)', '8 Dimensionen analysiert', 'θ_index Score (0-1)', 'Experten-Empfehlungen', '3-5 Tage Turnaround']
        : ['AI Maturity Report (20-30 pages)', '8 Dimensions analyzed', 'θ_index score (0-1)', 'Expert recommendations', '3-5 days turnaround']
    },
    pricingExecution: {
      title: isGerman ? '+ Execution Bridge (€2K):' : '+ Execution Bridge (€2K):',
      items: isGerman
        ? ['90-Tage AI Transformation Roadmap (Woche-für-Woche)', 'Quick Wins Liste (erste 30 Tage)', 'Implementation Guide (wie ausführen)', 'Team Training (wie implementieren)']
        : ['90-Day AI Transformation Roadmap (week-by-week)', 'Quick Wins List (first 30 days)', 'Implementation Guide (how to execute)', 'Team Training (how to implement)']
    },
    pricingTotal: isGerman ? 'Gesamt: €3.9K (Base) oder €5.9K (Base + Execution)' : 'Total Investment: €3.9K (Base) or €5.9K (Base + Execution)',
    
    qualityGuarantee: isGerman ? 'QUALITÄTSGARANTIE:' : 'QUALITY GUARANTEE:',
    guarantees: isGerman
      ? ['Experten-Grade Qualität (McKinsey-Level Analyse)', '8 Dimensionen analysiert (umfassendes AI Assessment)', 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)', 'Referenz-Calls verfügbar (sprich mit CEOs, die das genutzt haben)']
      : ['Expert-grade quality (McKinsey-level analysis)', '8 dimensions analyzed (comprehensive AI assessment)', 'Fast turnaround (3-5 days, not 2-4 weeks)', 'Reference calls available (talk to CEOs who\'ve used this)'],
    
    // Qualification Section
    qualificationHeadline: isGerman ? 'Ist das richtig für dich?' : 'Is This Right for You?',
    qualificationSubheadline: isGerman
      ? 'AI Maturity Assessment funktioniert am besten für Unternehmen in dieser Situation.'
      : 'AI Maturity Assessment works best for companies in this situation.',
    
    goodFitTitle: isGerman ? '✅ DAS IST EIN GUTER FIT, WENN:' : '✅ THIS IS A GOOD FIT IF:',
    goodFitItems: [
      {
        title: isGerman ? 'Du hast AI-Probleme, aber weißt nicht, was du zuerst fixen sollst' : "You have AI problems but don't know what to fix first",
        items: isGerman
          ? ['Dein θ_index ist 0.2-0.4 (Level 1: AI-Powered, Benchmark: 0.7-0.8 für AI-Native)', 'Du hast 10+ AI-Tools aber keine Strategie', 'Du hast €50K-€200K für AI ausgegeben mit unklarem ROI', 'Du weißt nicht, welchen AI-Hebel du zuerst ziehen sollst']
          : ['Your θ_index is 0.2-0.4 (Level 1: AI-Powered, benchmark: 0.7-0.8 for AI-Native)', 'You have 10+ AI tools but no strategy', 'You\'ve spent €50K-€200K on AI with unclear ROI', 'You don\'t know which AI lever to pull first']
      },
      {
        title: isGerman ? 'Du brauchst Experten-AI-Analyse (keine Hands-on Implementation)' : 'You need expert AI analysis (not hands-on implementation)',
        items: isGerman
          ? ['Brauchst du Experten-Analyse? (keine Hands-on Implementation?)', 'Brauchst du Board-Ready Report? (nicht nur Daten-Dump?)', 'Brauchst du klare Prioritäten? (welchen AI-Hebel zuerst?)', 'Brauchst du 90-Tage Roadmap? (umsetzbarer Plan?)']
          : ['Do you need expert analysis? (not hands-on implementation?)', 'Do you need board-ready report? (not just data dump?)', 'Do you need clear priorities? (which AI lever to pull first?)', 'Do you need 90-day roadmap? (actionable plan?)']
      },
      {
        title: isGerman ? "Du bist Series A-B, €5M-€30M ARR" : "You're Series A-B, €5M-€30M ARR",
        items: isGerman
          ? ['Du hast Series A-B geraised', 'Du hast Revenue (€5M-€30M ARR)', 'Du hast ein Team (30-150 Leute)']
          : ['You\'ve raised Series A-B', 'You have revenue (€5M-€30M ARR)', 'You have a team (30-150 people)']
      },
      {
        title: isGerman ? 'Du brauchst schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' : 'You need fast turnaround (3-5 days, not 2-4 weeks)',
        items: isGerman
          ? ['Du brauchst Ergebnisse in 3-5 Tagen (nicht 2-4 Wochen)', 'Du bist bereit, Daten zu teilen (AI-Tools, AI-Ausgaben, AI Use Cases)', 'Du commitest 2-4 Stunden für Daten teilen + Q&A']
          : ['You need results in 3-5 days (not 2-4 weeks)', 'You\'re willing to share data (AI tools, AI spend, AI use cases)', 'You\'ll commit 2-4 hours for data sharing + Q&A']
      },
      {
        title: isGerman ? 'Du hast Budget (€3.9K-€5.9K)' : 'You have budget (€3.9K-€5.9K)',
        items: isGerman
          ? ['Du kannst €3.9K (Base) oder €5.9K (Base + Execution) investieren', 'ROI ist 10-30x (basierend auf AI-Effizienz und Wettbewerbsvorteil)']
          : ['You can invest €3.9K (Base) or €5.9K (Base + Execution)', 'ROI is 10-30x (based on AI efficiency and competitive advantage)']
      }
    ],
    
    notFitTitle: isGerman ? '❌ DAS IST KEIN GUTER FIT, WENN:' : '❌ THIS IS NOT A GOOD FIT IF:',
    notFitItems: [
      {
        title: isGerman ? 'Du brauchst Hands-on AI Implementation (nicht nur Analyse)' : 'You need hands-on AI implementation (not just analysis)',
        description: isGerman
          ? 'Wenn du Hands-on Implementation brauchst (nicht nur Analyse), reicht AI Assessment nicht.'
          : 'If you need hands-on implementation (not just analysis), AI Assessment is not enough.',
        betterFit: isGerman ? 'Besser: Power Up: AI Transformation (30 Tage, €23.6K) oder Boost: AI Maturity (90 Tage, €60K-€78K)' : 'Better fit: Power Up: AI Transformation (30 days, €23.6K) or Boost: AI Maturity (90 days, €60K-€78K)'
      },
      {
        title: isGerman ? 'Du weißt schon, was zu fixen ist (brauchst nur Execution)' : 'You already know what to fix (just need execution)',
        description: isGerman
          ? 'Wenn du schon weißt, welchen AI-Hebel du fixen sollst, brauchst du keine Analyse.'
          : 'If you already know which AI lever to fix, you don\'t need analysis.',
        betterFit: isGerman ? 'Besser: Power Up: AI Transformation (30 Tage, €23.6K) für schnelle Execution' : 'Better fit: Power Up: AI Transformation (30 days, €23.6K) for fast execution'
      },
      {
        title: isGerman ? 'Du brauchst volle AI Transformation (nicht nur Assessment)' : 'You need full AI transformation (not just assessment)',
        description: isGerman
          ? 'Wenn du volle AI Transformation brauchst (nicht nur Assessment), reicht AI Assessment nicht.'
          : 'If you need full AI transformation (not just assessment), AI Assessment is not enough.',
        betterFit: isGerman ? 'Besser: Boost: AI Maturity (90 Tage, €60K-€78K) oder Accelerate: AI-Native Scaling (12 Monate, €153K)' : 'Better fit: Boost: AI Maturity (90 days, €60K-€78K) or Accelerate: AI-Native Scaling (12 months, €153K)'
      }
    ],
    
    notSureText: isGerman
      ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-min Inflection Call. Wir bewerten deine AI-Reife und empfehlen den besten Pfad.'
      : "Not sure if this is the right fit? Book a free 30-min Inflection Call. We'll assess your AI maturity and recommend the best path forward.",
    
    // Final CTA Section
    finalCtaHeadline: isGerman ? 'Bereit für AI-Clarity?' : 'Ready to Get AI Clarity?',
    finalCtaSubheadline: isGerman ? "Hier ist, was als nächstes passiert." : "Here's what happens next.",
    
    step1Title: isGerman ? 'SCHRITT 1: AI ASSESSMENT ANFRAGEN (€3.9K)' : 'STEP 1: REQUEST AI ASSESSMENT (€3.9K)',
    step1Items: isGerman
      ? ['Wir senden dir eine Daten-Checkliste (was wir brauchen)', 'Du teilst Daten (2-4 Stunden)', 'Wir analysieren deine AI-Reife (8 Dimensionen)', 'Du erhältst AI Maturity Report (20-30 Seiten, 3-5 Tage)']
      : ['We\'ll send you a data checklist (what we need)', 'You share data (2-4 hours)', 'We analyze your AI maturity (8 dimensions)', 'You get AI Maturity Report (20-30 pages, 3-5 days)'],
    step1Conclusion: isGerman ? 'Wisse genau, was du zuerst fixen sollst.' : 'Know exactly what to fix first.',
    
    step2Title: isGerman ? 'SCHRITT 2: ENTSCHEIDE, OB DU EXECUTION BRIDGE BRAUCHST (+€2K)' : 'STEP 2: DECIDE IF YOU NEED EXECUTION BRIDGE (+€2K)',
    step2Items: isGerman
      ? ['90-Tage AI Transformation Roadmap (Woche-für-Woche Action Plan)', 'Quick Wins Liste (erste 30 Tage)', 'Implementation Guide (wie ausführen)', 'Team Training (wie implementieren)']
      : ['90-Day AI Transformation Roadmap (week-by-week action plan)', 'Quick Wins List (first 30 days)', 'Implementation Guide (how to execute)', 'Team Training (how to implement)'],
    step2Conclusion: isGerman ? 'Du entscheidest. Kein Druck.' : 'You decide. No pressure.',
    
    alternativeTitle: isGerman ? 'ALTERNATIVE: STARTE MIT EINEM INFLECTION CALL (KOSTENLOS)' : 'ALTERNATIVE: START WITH AN INFLECTION CALL (FREE)',
    alternativeDescription: isGerman
      ? 'Nicht sicher, ob du AI Assessment brauchst? Starte mit einem kostenlosen Call:'
      : 'Not sure if you need AI assessment? Start with a free call:',
    alternativeItems: isGerman
      ? ['Bewerte deine AI-Reife (θ_index, AI-Tools, AI-ROI?)', 'Identifiziere AI-Gaps (was ist kaputt?)', 'Erhalte Empfehlung (AI Assessment, Power Up, oder Boost)']
      : ['Assess your AI maturity (θ_index, AI tools, AI ROI?)', 'Identify AI gaps (what\'s broken?)', 'Get recommendation (AI assessment, Power Up, or Boost)'],
    
    inflectionCallCta: isGerman ? 'Kostenlosen Inflection Call buchen' : 'Book Free Inflection Call',
    
    faqTitle: 'FAQ:',
    faqItems: [
      {
        question: isGerman ? 'Wie lange dauert AI Assessment?' : 'How long does AI assessment take?',
        answer: isGerman ? '3-5 Tage (vom Daten teilen bis zum AI Maturity Report)' : '3-5 days (from data sharing to AI Maturity Report)'
      },
      {
        question: isGerman ? 'Was ist die Investition?' : 'What\'s the investment?',
        answer: isGerman ? '€3.9K (Base) oder €5.9K (Base + Execution Bridge)' : '€3.9K (Base) or €5.9K (Base + Execution Bridge)'
      },
      {
        question: isGerman ? 'Welche Daten braucht ihr?' : 'What data do you need?',
        answer: isGerman ? 'AI-Tools (welche Tools, Nutzung, Ausgaben), AI Use Cases (welche Funktionen nutzen AI, ROI), AI-Team (Skills, Training), AI-Strategie (Vision, Roadmap)' : 'AI tools (which tools, usage, spend), AI use cases (which functions use AI, ROI), AI team (skills, training), AI strategy (vision, roadmap)'
      },
      {
        question: isGerman ? 'Kann ich mit einer Referenz sprechen?' : 'Can I talk to a reference?',
        answer: isGerman ? 'Ja. Wir verbinden dich mit einem CEO, der AI Assessment genutzt hat (gleiche Stage, gleiche Challenge).' : 'Yes. We\'ll connect you with a CEO who\'s used AI Assessment (same stage, same challenge).'
      },
      {
        question: isGerman ? 'Was ist der ROI?' : 'What\'s the ROI?',
        answer: isGerman ? 'Typischer ROI ist 10-30x (basierend auf AI-Effizienz und Wettbewerbsvorteil).' : 'Typical ROI is 10-30x (based on AI efficiency and competitive advantage).'
      },
      {
        question: isGerman ? 'Wie unterscheidet sich das von einem Consultant?' : 'How is this different from hiring a consultant?',
        answer: isGerman ? 'Consultants brauchen 2-4 Wochen und kosten €20K-€50K. Wir liefern in 3-5 Tagen für €3.9K-€5.9K mit McKinsey-Level Qualität.' : 'Consultants take 2-4 weeks and cost €20K-€50K. We deliver in 3-5 days for €3.9K-€5.9K with McKinsey-level quality.'
      },
      {
        question: isGerman ? 'Was ist der θ_index?' : 'What\'s the θ_index?',
        answer: isGerman ? 'θ_index ist der AI Maturity Index (0-1 Skala). 0.0-0.2 = Traditional, 0.2-0.5 = AI-Powered (Level 1), 0.5-0.8 = AI-Enabled (Level 2), 0.8-1.0 = AI-Native (Level 3).' : 'θ_index is the AI Maturity Index (0-1 scale). 0.0-0.2 = Traditional, 0.2-0.5 = AI-Powered, 0.5-0.8 = AI-Enabled, 0.8-1.0 = AI-Native.'
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
              <Brain className="w-4 h-4 text-primary" />
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
            
            {/* 8 Dimensions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {content.dimensions.map((dimension, index) => (
                <div key={index} className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <dimension.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-sm">{dimension.title}</h4>
                  </div>
                  <ul className="space-y-1">
                    {dimension.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-xs text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Day 1-2 */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-2">{content.day12Title}</h3>
              <p className="text-muted-foreground mb-4">{content.day12Description}</p>
              <p className="text-sm font-medium text-primary">{content.day12Output}</p>
            </div>
            
            {/* Day 3-5 */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">{content.day35Title}</h3>
              <ul className="space-y-2 mb-4">
                {content.day35Items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-primary">{content.day35Output}</p>
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
                <p><span className="font-medium">{isGerman ? 'Unternehmen:' : 'Company:'}</span> {content.realExample.company}</p>
                <p><span className="font-medium">Challenge:</span> {content.realExample.challenge}</p>
                <p><span className="font-medium">{isGerman ? 'AI-Probleme:' : 'AI Problems:'}</span> {content.realExample.problems}</p>
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
                {isGerman ? 'Erhalte deinen AI-ready Report in 3-5 Tagen. Wisse genau, was du zuerst fixen sollst.' : 'Get your AI-ready report in 3-5 days. Know exactly what to fix first.'}
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
        source="ai-assessment"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title={isGerman ? 'Inflection Call buchen' : 'Book Inflection Call'}
      />
      
      <Footer />
    </div>
  );
};

export default AIMaturityAssessment;
