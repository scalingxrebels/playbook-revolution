import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TwinklingStars from '@/components/TwinklingStars';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Briefcase, 
  TrendingUp, 
  Calculator, 
  Brain, 
  Settings, 
  Target, 
  DoorOpen, 
  BarChart3, 
  Users, 
  Clock, 
  FileText, 
  Shield,
  CheckCircle,
  XCircle,
  ArrowRight,
  ChevronDown,
  Calendar,
  AlertTriangle
} from 'lucide-react';

const PortfolioAssessment = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const content = {
    breadcrumb: isGerman ? 'Solutions > Portfolio Assessment' : 'Solutions > Portfolio Assessment',
    badge: isGerman ? 'Decision Support · 3-5 Tage · €3.9K-€5.9K' : 'Decision Support · 3-5 Days · €3.9K-€5.9K',
    
    // Hero
    heroHeadline: isGerman ? 'Expert Portfolio Assessment—In 3-5 Tagen' : 'Expert Portfolio Assessment—In 3-5 Days',
    heroSubheadline: isGerman 
      ? 'Erhalte eine Experten-Analyse deiner Portfolio-Performance in 3-5 Tagen. Typische Ergebnisse: Portfolio Clarity +85%, Value Roadmap +30-60%, LP Confidence +40-70%—mit LP-Ready Report.'
      : 'Get expert analysis of your portfolio performance in 3-5 days. Typical outcomes: Portfolio Clarity +85%, Value Roadmap +30-60%, LP Confidence +40-70%—with LP-ready report.',
    
    heroStats: [
      { label: 'Portfolio Clarity', value: '+85%', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' },
      { label: 'Value Roadmap', value: '+30-60%', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' },
      { label: 'LP Confidence', value: '+40-70%', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' }
    ],
    
    primaryCta: isGerman ? 'Assessment anfragen (€3.9K)' : 'Request Assessment (€3.9K)',
    secondaryCta: isGerman ? 'So funktioniert es ↓' : 'See How It Works ↓',
    
    trustBadges: [
      { icon: Clock, label: isGerman ? '3-5 Tage (Schnelle Lieferung)' : '3-5 Days (Fast Turnaround)' },
      { icon: FileText, label: isGerman ? 'LP-Ready Report (20-30 Seiten)' : 'LP-Ready Report (20-30 Pages)' },
      { icon: Shield, label: isGerman ? 'Experten-Analyse (McKinsey-Level)' : 'Expert Analysis (McKinsey-Level Quality)' }
    ],
    
    // Problem Section
    problemHeadline: isGerman ? 'Dein Portfolio underperformt—aber du weißt nicht warum' : "Your Portfolio Is Underperforming—But You Don't Know Why",
    problemIntro: isGerman
      ? 'Dein Portfolio hat 15 Companies. 5 strugglen (Growth <50% YoY), 8 sind OK (Growth 50-100%), 2 sind Stars (Growth >150%). Dein durchschnittlicher θ_index ist 0.35 (Level 1: AI-Powered). Deine LPs fragen: „Warum ist das Portfolio nicht AI-Native?" Und das Schlimmste—du weißt nicht, welche Companies du zuerst fixen sollst.'
      : "Your portfolio has 15 companies. 5 are struggling (growth <50% YoY), 8 are OK (growth 50-100%), 2 are stars (growth >150%). Your average θ_index is 0.35 (Level 1: AI-Powered). Your LPs are asking: \"Why isn't the portfolio AI-Native?\" And worst of all—you don't know which companies to fix first.",
    
    symptoms: [
      { 
        title: isGerman ? 'Portfolio Underperformance' : 'Portfolio underperformance',
        description: isGerman ? '5/15 Companies strugglen (33% Underperformer)' : '5/15 companies struggling (33% underperformers)',
        icon: TrendingUp
      },
      { 
        title: isGerman ? 'Niedriger θ_index' : 'Low θ_index',
        description: isGerman ? 'Durchschnitt 0.35 (Level 1: AI-Powered, Benchmark: 0.7-0.8 für AI-Native)' : 'Average 0.35 (Level 1: AI-Powered, benchmark: 0.7-0.8 for AI-Native)',
        icon: Brain
      },
      { 
        title: isGerman ? 'Keine Portfolio Clarity' : 'No portfolio clarity',
        description: isGerman ? 'Weißt nicht, welche Companies zuerst fixen (keine Priorisierung)' : "Don't know which companies to fix first (no prioritization)",
        icon: Target
      },
      { 
        title: isGerman ? 'LP-Druck' : 'LP pressure',
        description: isGerman ? 'LPs fragen „Warum ist Portfolio nicht AI-Native?" (keine klare Antwort)' : 'LPs asking "Why isn\'t portfolio AI-Native?" (no clear answer)',
        icon: Users
      },
      { 
        title: isGerman ? 'Operating Partner überlastet' : 'Operating partner overwhelmed',
        description: isGerman ? '1:15 Ratio (keine Zeit für Hands-on Support)' : '1:15 ratio (no time for hands-on support)',
        icon: AlertTriangle
      }
    ],
    
    realCostTitle: isGerman ? 'Die echten Kosten:' : 'The real cost:',
    realCosts: [
      isGerman ? 'Zerstört Fund Performance (Bottom Quartile Risiko)' : 'Destroys fund performance (bottom quartile risk)',
      isGerman ? 'Begrenzt Exit-Potenzial (struggelnde Companies können nicht exiten)' : "Limits exit potential (struggling companies can't exit)",
      isGerman ? 'Schwächt LP-Vertrauen (LPs verlieren Vertrauen in Strategie)' : 'Weakens LP confidence (LPs losing trust in strategy)',
      isGerman ? 'Erhöht Down-Round-Risiko (struggelnde Companies können nicht raisen)' : "Increases down-round risk (struggling companies can't raise)"
    ],
    
    problemConclusion: isGerman 
      ? 'Du brauchst Portfolio Clarity. Schnell.' 
      : 'You need portfolio clarity. Fast.',
    
    // Solution Section
    solutionHeadline: isGerman ? 'Wie Portfolio Assessment funktioniert' : 'How Portfolio Assessment Works',
    solutionSubheadline: isGerman
      ? 'Wir analysieren nicht nur Metriken. Wir führen eine Experten-Portfolio-Analyse durch—aus McKinsey-Level-Perspektive—damit du genau weißt, welche Companies du zuerst fixen sollst.'
      : "We don't just analyze metrics. We conduct expert portfolio analysis—from McKinsey-level perspective—so you know exactly which companies to fix first.",
    
    dimensions: [
      {
        icon: TrendingUp,
        title: isGerman ? 'Growth Performance' : 'Growth Performance',
        items: isGerman 
          ? ['Growth Rate (welche Companies wachsen schnell?)', 'Growth Trajectory (beschleunigt oder verlangsamt?)', 'Growth Drivers (was treibt Growth?)', 'Growth Bottlenecks (was blockiert Growth?)']
          : ['Growth rate (which companies are growing fast?)', 'Growth trajectory (is growth accelerating or decelerating?)', 'Growth drivers (what\'s driving growth?)', 'Growth bottlenecks (what\'s blocking growth?)']
      },
      {
        icon: Calculator,
        title: isGerman ? 'Unit Economics' : 'Unit Economics',
        items: isGerman
          ? ['CAC (welche Companies haben effizienten CAC?)', 'LTV/CAC Ratio (welche haben gesunde Unit Economics?)', 'Payback Period (welche recovern CAC schnell?)', 'Gross Margin (welche haben starke Margins?)']
          : ['CAC (which companies have efficient CAC?)', 'LTV/CAC ratio (which companies have healthy unit economics?)', 'Payback period (which companies recover CAC fast?)', 'Gross margin (which companies have strong margins?)']
      },
      {
        icon: Brain,
        title: isGerman ? 'AI Maturity (θ_index)' : 'AI Maturity (θ_index)',
        items: isGerman
          ? ['θ_index Score (welche Companies sind AI-Native?)', 'AI Adoption (welche nutzen AI effektiv?)', 'AI ROI (welche bekommen Wert aus AI?)', 'AI Competitive Advantage (welche haben AI Moat?)']
          : ['θ_index score (which companies are AI-Native?)', 'AI adoption (which companies use AI effectively?)', 'AI ROI (which companies get value from AI?)', 'AI competitive advantage (which companies have AI moat?)']
      },
      {
        icon: Settings,
        title: isGerman ? 'Operational Excellence' : 'Operational Excellence',
        items: isGerman
          ? ['Execution Velocity (welche Companies shippen schnell?)', 'Decision Velocity (welche entscheiden schnell?)', 'Operational Debt (welche haben kaputte Prozesse?)', 'Scaling Readiness (welche können skalieren?)']
          : ['Execution velocity (which companies ship fast?)', 'Decision velocity (which companies decide fast?)', 'Operational debt (which companies have broken processes?)', 'Scaling readiness (which companies can scale?)']
      },
      {
        icon: Target,
        title: isGerman ? 'Market Position' : 'Market Position',
        items: isGerman
          ? ['Market Share (welche Companies führen ihren Markt?)', 'Competitive Position (welche haben starken Moat?)', 'Product-Market Fit (welche haben starken PMF?)', 'Category Leadership (welche definieren Kategorie?)']
          : ['Market share (which companies lead their market?)', 'Competitive position (which companies have strong moat?)', 'Product-market fit (which companies have strong PMF?)', 'Category leadership (which companies define category?)']
      },
      {
        icon: DoorOpen,
        title: isGerman ? 'Exit Readiness' : 'Exit Readiness',
        items: isGerman
          ? ['Valuation Potential (welche können hoch exiten?)', 'Strategic Buyer Fit (welche haben klare Käufer?)', 'Exit Timeline (welche können bald exiten?)', 'Exit Blockers (was verhindert Exit?)']
          : ['Valuation potential (which companies can exit high?)', 'Strategic buyer fit (which companies have clear buyers?)', 'Exit timeline (which companies can exit soon?)', 'Exit blockers (what\'s preventing exit?)']
      }
    ],
    
    day12Title: isGerman ? 'TAG 1-2: DATENSAMMLUNG & PORTFOLIO-ANALYSE' : 'DAY 1-2: DATA COLLECTION & PORTFOLIO ANALYSIS',
    day12Description: isGerman
      ? 'Wir analysieren dein Portfolio über 6 Dimensionen.'
      : 'We analyze your portfolio across 6 dimensions.',
    day12Output: isGerman
      ? 'Output: Portfolio Assessment Report (20-30 Seiten, LP-ready) + Portfolio Heatmap'
      : 'Output: Portfolio Assessment Report (20-30 pages, LP-ready) + Portfolio Heatmap',
    
    day35Title: isGerman ? 'TAG 3-5: 90-TAGE PORTFOLIO ROADMAP (OPTIONAL +€2K)' : 'DAY 3-5: 90-DAY PORTFOLIO ROADMAP (OPTIONAL +€2K)',
    day35Items: isGerman
      ? ['Priority Matrix: Welche Companies zuerst fixen (Impact × Effort)', '90-Tage Action Plan: Schritt-für-Schritt zur Portfolio-Verbesserung', 'Quick Wins: Top 3 Companies in ersten 30 Tagen fixen', 'Long-Term Strategy: Portfolio-weite Initiativen für 90 Tage']
      : ['Priority Matrix: Which companies to fix first (impact × effort)', '90-Day Action Plan: Step-by-step plan to improve portfolio (week-by-week)', 'Quick Wins: Top 3 companies to fix in first 30 days', 'Long-Term Strategy: Portfolio-wide initiatives for 90 days'],
    day35Output: isGerman
      ? 'Output: 90-Tage Portfolio Roadmap (10-15 Seiten, umsetzbar)'
      : 'Output: 90-Day Portfolio Roadmap (10-15 pages, actionable)',
    
    whatMakesDifferent: isGerman ? 'Was uns unterscheidet:' : 'What makes this different:',
    differentiators: [
      isGerman ? 'Experten-Analyse (McKinsey-Level Qualität, nicht nur Daten-Dump)' : 'Expert analysis (McKinsey-level quality, not just data dump)',
      isGerman ? '6 Dimensionen (Growth, Unit Economics, AI Maturity, Operations, Market, Exit)' : '6 dimensions (growth, unit economics, AI maturity, operations, market, exit)',
      isGerman ? 'LP-Ready Report (20-30 Seiten, LP-Grade Qualität)' : 'LP-ready report (20-30 pages, LP-grade quality)',
      isGerman ? 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' : 'Fast turnaround (3-5 days, not 2-4 weeks)',
      isGerman ? 'Portfolio Heatmap (visuelle Priorisierung aller Companies)' : 'Portfolio heatmap (visual prioritization of all companies)'
    ],
    
    // Outcome Section
    outcomeHeadline: isGerman ? 'Typische Ergebnisse (3-5 Tage)' : 'Typical Outcomes (3-5 Days)',
    outcomeSubheadline: isGerman
      ? 'Das sind echte Ergebnisse von VCs/PEs wie dir (10-50 Portfolio Companies).'
      : "These are real results from VCs/PEs like yours (10-50 portfolio companies).",
    
    metrics: [
      {
        title: 'Portfolio Clarity +85%',
        whatItMeans: isGerman ? 'Deine Portfolio Clarity steigt um 85%.' : 'Your portfolio clarity increases by 85%.',
        before: isGerman ? 'Portfolio Clarity = Niedrig (weißt nicht, welche Companies zuerst fixen)' : "Portfolio Clarity = Low (don't know which companies to fix first)",
        after: isGerman ? 'Portfolio Clarity = Hoch (klare Priorisierung, Roadmap klar)' : 'Portfolio Clarity = High (clear prioritization, roadmap clear)',
        impact: isGerman ? 'Von "Portfolio-Chaos" zu "Portfolio-Clarity"' : 'From "portfolio chaos" to "portfolio clarity"'
      },
      {
        title: 'Value Roadmap +30-60%',
        whatItMeans: isGerman ? 'Deine Value Roadmap zeigt 30-60% Steigerungspotenzial.' : 'Your portfolio value roadmap shows 30-60% potential increase.',
        before: isGerman ? 'Portfolio Value = €150M (kein klarer Pfad zur Steigerung)' : 'Portfolio Value = €150M (no clear path to increase)',
        after: isGerman ? 'Value Roadmap = €195M-€240M (klarer 30-60% Steigerungspfad)' : 'Value Roadmap = €195M-€240M (clear 30-60% increase path)',
        impact: isGerman ? 'Von "Value Stagnation" zu "Value Roadmap"' : 'From "value stagnation" to "value roadmap"'
      },
      {
        title: 'LP Confidence +40-70%',
        whatItMeans: isGerman ? 'Deine LP Confidence Roadmap zeigt 40-70% Steigerungspotenzial.' : 'Your LP confidence roadmap shows 40-70% potential increase.',
        before: isGerman ? 'LP Confidence = Mittel (LPs stellen Fragen, keine klaren Antworten)' : 'LP Confidence = Medium (LPs asking questions, no clear answers)',
        after: isGerman ? 'LP Confidence Roadmap = Hoch (klare Strategie, LP-Fragen beantwortet)' : 'LP Confidence Roadmap = High (clear strategy, LP questions answered)',
        impact: isGerman ? 'Von "LP-Druck" zu "LP-Confidence"' : 'From "LP pressure" to "LP confidence"'
      }
    ],
    
    realExampleTitle: isGerman ? 'ECHTES BEISPIEL:' : 'REAL EXAMPLE:',
    realExample: {
      company: isGerman ? 'Series A-B fokussierter VC, €200M AUM, 18 Portfolio Companies' : 'Series A-B focused VC, €200M AUM, 18 portfolio companies',
      challenge: isGerman 
        ? '6 Companies struggeln (33%), durchschnittlicher θ_index 0.32, LPs fragen „Warum keine AI-Strategie?", Operating Partner überlastet (1:18 Ratio)'
        : '6 companies struggling (33%), Average θ_index 0.32, LPs asking "Why no AI strategy?", Operating partner overwhelmed (1:18 ratio)',
      problems: isGerman
        ? 'Keine Priorisierung (weiß nicht, welche Companies zuerst fixen), keine AI-Strategie (Portfolio nicht AI-Native), kein LP-Narrativ (kann LP-Fragen nicht beantworten)'
        : "No prioritization (don't know which companies to fix first), no AI strategy (portfolio not AI-Native), no LP narrative (can't answer LP questions)",
      transformation: isGerman
        ? 'Portfolio Assessment (3-5 Tage, 6 Dimensionen analysiert)'
        : 'Portfolio Assessment (3-5 days, 6 dimensions analyzed)',
      outcomes: [
        isGerman ? 'Portfolio Clarity +90% (niedrig → hoch)' : 'Portfolio Clarity +90% (low → high)',
        isGerman ? 'Value Roadmap +45% (€200M → €290M Ziel)' : 'Value Roadmap +45% (€200M → €290M target)',
        isGerman ? 'LP Confidence +60% (mittel → hoch)' : 'LP Confidence +60% (medium → high)',
        isGerman ? 'Operating Partner Efficiency +80% (klare Prioritäten, fokussierter Support)' : 'Operating Partner Efficiency +80% (clear priorities, focused support)'
      ]
    },
    
    // Process Section
    processHeadline: isGerman ? 'Der Portfolio Assessment Prozess' : 'The Portfolio Assessment Process',
    processSubheadline: isGerman
      ? 'Transparenter Zeitplan. Klare Deliverables. Experten-Grade Qualität.'
      : 'Transparent timeline. Clear deliverables. Expert-grade quality.',
    
    processDay12: {
      title: isGerman ? 'TAG 1-2: DATENSAMMLUNG & PORTFOLIO-ANALYSE' : 'DAY 1-2: DATA COLLECTION & PORTFOLIO ANALYSIS',
      whatWeDo: isGerman
        ? ['Daten anfordern (Portfolio-Daten, Company-Metriken, AI-Maturity-Daten, etc.)', '6 Portfolio-Dimensionen analysieren (Growth, Unit Economics, AI Maturity, Operations, Market, Exit)', 'Portfolio Heatmap erstellen (visuelle Priorisierung)', 'Portfolio Assessment Report erstellen (20-30 Seiten)']
        : ['Request data (portfolio data, company metrics, AI maturity data, etc.)', 'Analyze 6 portfolio dimensions (growth, unit economics, AI maturity, operations, market, exit)', 'Create portfolio heatmap (visual prioritization)', 'Create Portfolio Assessment Report (20-30 pages)'],
      whatYouGet: isGerman
        ? ['Portfolio Assessment Report (20-30 Seiten, LP-ready)', 'Portfolio Heatmap (visuelle Priorisierung aller Companies)', 'Company-by-Company Analyse (6 Dimensionen pro Company)', 'Priority Matrix (welche Companies zuerst fixen)', 'Experten-Empfehlungen (5-10 Schlüsselaktionen)']
        : ['Portfolio Assessment Report (20-30 pages, LP-ready)', 'Portfolio Heatmap (visual prioritization of all companies)', 'Company-by-Company Analysis (6 dimensions per company)', 'Priority Matrix (which companies to fix first)', 'Expert Recommendations (5-10 key actions)'],
      timeCommitment: isGerman ? '2-4 Stunden (Daten teilen, Q&A)' : '2-4 hours (data sharing, Q&A)'
    },
    
    processDay35: {
      title: isGerman ? 'TAG 3-5: 90-TAGE PORTFOLIO ROADMAP (OPTIONAL +€2K)' : 'DAY 3-5: 90-DAY PORTFOLIO ROADMAP (OPTIONAL +€2K)',
      whatWeDo: isGerman
        ? ['90-Tage Portfolio Roadmap erstellen (Woche-für-Woche Action Plan)', 'Quick Wins identifizieren (Top 3 Companies in ersten 30 Tagen)', 'Long-Term Strategy designen (Portfolio-weite Initiativen für 90 Tage)', 'Implementation Guide vorbereiten (wie ausführen)']
        : ['Create 90-day portfolio roadmap (week-by-week action plan)', 'Identify quick wins (top 3 companies to fix in first 30 days)', 'Design long-term strategy (portfolio-wide initiatives for 90 days)', 'Prepare implementation guide (how to execute)'],
      whatYouGet: isGerman
        ? ['90-Tage Portfolio Roadmap (10-15 Seiten, umsetzbar)', 'Quick Wins Liste (Top 3 Companies, erste 30 Tage)', 'Long-Term Strategy (Portfolio-weit, 90 Tage)', 'Implementation Guide (wie ausführen)']
        : ['90-Day Portfolio Roadmap (10-15 pages, actionable)', 'Quick Wins List (top 3 companies, first 30 days)', 'Long-Term Strategy (portfolio-wide, 90 days)', 'Implementation Guide (how to execute)'],
      timeCommitment: isGerman ? '1-2 Stunden (Roadmap Review, Q&A)' : '1-2 hours (roadmap review, Q&A)'
    },
    
    pricingTitle: isGerman ? 'INVESTITION:' : 'PRICING:',
    pricingBase: {
      title: isGerman ? 'Base Package (€3.9K):' : 'Base Package (€3.9K):',
      items: isGerman
        ? ['Portfolio Assessment Report (20-30 Seiten)', '6 Dimensionen analysiert', 'Portfolio Heatmap', 'Experten-Empfehlungen', '3-5 Tage Turnaround']
        : ['Portfolio Assessment Report (20-30 pages)', '6 Dimensions analyzed', 'Portfolio Heatmap', 'Expert recommendations', '3-5 days turnaround']
    },
    pricingExecution: {
      title: isGerman ? '+ Execution Bridge (€2K):' : '+ Execution Bridge (€2K):',
      items: isGerman
        ? ['90-Tage Portfolio Roadmap (Woche-für-Woche)', 'Quick Wins Liste (Top 3 Companies)', 'Implementation Guide (wie ausführen)', 'Operating Partner Training (wie implementieren)']
        : ['90-Day Portfolio Roadmap (week-by-week)', 'Quick Wins List (top 3 companies)', 'Implementation Guide (how to execute)', 'Operating Partner Training (how to implement)']
    },
    pricingTotal: isGerman ? 'Gesamt: €3.9K (Base) oder €5.9K (Base + Execution)' : 'Total Investment: €3.9K (Base) or €5.9K (Base + Execution)',
    
    qualityGuarantee: isGerman ? 'QUALITÄTSGARANTIE:' : 'QUALITY GUARANTEE:',
    guarantees: isGerman
      ? ['Experten-Grade Qualität (McKinsey-Level Analyse)', '6 Dimensionen analysiert (umfassendes Portfolio Assessment)', 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)', 'Referenz-Calls verfügbar (sprich mit VCs/PEs, die das genutzt haben)']
      : ['Expert-grade quality (McKinsey-level analysis)', '6 dimensions analyzed (comprehensive portfolio assessment)', 'Fast turnaround (3-5 days, not 2-4 weeks)', 'Reference calls available (talk to VCs/PEs who\'ve used this)'],
    
    // Qualification Section
    qualificationHeadline: isGerman ? 'Ist das richtig für dich?' : 'Is This Right for You?',
    qualificationSubheadline: isGerman
      ? 'Portfolio Assessment funktioniert am besten für VCs/PEs in dieser Situation.'
      : 'Portfolio Assessment works best for VCs/PEs in this situation.',
    
    goodFitTitle: isGerman ? '✅ DAS IST EIN GUTER FIT, WENN:' : '✅ THIS IS A GOOD FIT IF:',
    goodFitItems: [
      {
        title: isGerman ? 'Du hast Portfolio-Probleme, aber weißt nicht, welche Companies zuerst fixen' : "You have portfolio problems but don't know which companies to fix first",
        items: isGerman
          ? ['Du hast 10-50 Portfolio Companies', '30-50% underperformen (Growth <50% YoY)', 'Durchschnittlicher θ_index ist 0.2-0.4 (Level 1: AI-Powered)', 'Du weißt nicht, welche Companies priorisieren']
          : ['You have 10-50 portfolio companies', '30-50% are underperforming (growth <50% YoY)', 'Average θ_index is 0.2-0.4 (Level 1: AI-Powered)', 'You don\'t know which companies to prioritize']
      },
      {
        title: isGerman ? 'Du brauchst Experten-Portfolio-Analyse (keine Hands-on Implementation)' : 'You need expert portfolio analysis (not hands-on implementation)',
        items: isGerman
          ? ['Brauchst du Experten-Analyse? (keine Hands-on Implementation?)', 'Brauchst du LP-Ready Report? (nicht nur Daten-Dump?)', 'Brauchst du klare Prioritäten? (welche Companies zuerst?)', 'Brauchst du 90-Tage Roadmap? (umsetzbarer Plan?)']
          : ['Do you need expert analysis? (not hands-on implementation?)', 'Do you need LP-ready report? (not just data dump?)', 'Do you need clear priorities? (which companies to fix first?)', 'Do you need 90-day roadmap? (actionable plan?)']
      },
      {
        title: isGerman ? 'Du bist VC/PE mit 10-50 Portfolio Companies' : "You're a VC/PE with 10-50 portfolio companies",
        items: isGerman
          ? ['Du bist VC/PE (Seed bis Series B Fokus)', 'Du hast 10-50 Portfolio Companies', 'Du hast €50M-€500M AUM']
          : ['You\'re a VC/PE (Seed to Series B focus)', 'You have 10-50 portfolio companies', 'You have €50M-€500M AUM']
      },
      {
        title: isGerman ? 'Du brauchst schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' : 'You need fast turnaround (3-5 days, not 2-4 weeks)',
        items: isGerman
          ? ['Du brauchst Ergebnisse in 3-5 Tagen (nicht 2-4 Wochen)', 'Du bist bereit, Daten zu teilen (Portfolio-Daten, Company-Metriken, AI Maturity)', 'Du commitest 2-4 Stunden für Daten teilen + Q&A']
          : ['You need results in 3-5 days (not 2-4 weeks)', 'You\'re willing to share data (portfolio data, company metrics, AI maturity)', 'You\'ll commit 2-4 hours for data sharing + Q&A']
      },
      {
        title: isGerman ? 'Du hast Budget (€3.9K-€5.9K)' : 'You have budget (€3.9K-€5.9K)',
        items: isGerman
          ? ['Du kannst €3.9K (Base) oder €5.9K (Base + Execution) investieren', 'ROI ist 10-30x (basierend auf Portfolio-Wertsteigerung und LP-Confidence)']
          : ['You can invest €3.9K (Base) or €5.9K (Base + Execution)', 'ROI is 10-30x (based on portfolio value increase and LP confidence)']
      }
    ],
    
    notFitTitle: isGerman ? '❌ DAS IST KEIN GUTER FIT, WENN:' : '❌ THIS IS NOT A GOOD FIT IF:',
    notFitItems: [
      {
        title: isGerman ? 'Du brauchst Hands-on Portfolio Transformation (nicht nur Analyse)' : 'You need hands-on portfolio transformation (not just analysis)',
        description: isGerman
          ? 'Wenn du Hands-on Implementation brauchst (nicht nur Analyse), reicht Portfolio Assessment nicht.'
          : 'If you need hands-on implementation (not just analysis), Portfolio Assessment is not enough.',
        betterFit: isGerman ? 'Besser: Accelerate: Portfolio Transformation (12 Monate, €360K-€720K)' : 'Better fit: Accelerate: Portfolio Transformation (12 months, €360K-€720K)'
      },
      {
        title: isGerman ? 'Du weißt schon, welche Companies fixen (brauchst nur Execution)' : 'You already know which companies to fix (just need execution)',
        description: isGerman
          ? 'Wenn du schon weißt, welche Companies priorisieren, brauchst du keine Analyse.'
          : 'If you already know which companies to prioritize, you don\'t need analysis.',
        betterFit: isGerman ? 'Besser: Power Up: Portfolio Performance (30 Tage, €23.6K) für schnelle Execution' : 'Better fit: Power Up: Portfolio Performance (30 days, €23.6K) for fast execution'
      },
      {
        title: isGerman ? 'Du hast <5 oder >100 Portfolio Companies' : 'You have <5 or >100 portfolio companies',
        description: isGerman
          ? 'Wenn du <5 Companies hast, brauchst du kein Portfolio Assessment (arbeite einfach mit jeder Company). Wenn du >100 hast, brauchst du Custom Solution.'
          : "If you have <5 companies, you don't need portfolio assessment (just work with each company). If you have >100 companies, you need custom solution.",
        betterFit: isGerman ? 'Kontaktiere uns für Custom Pricing' : 'Contact us for custom pricing'
      }
    ],
    
    notSureText: isGerman
      ? 'Nicht sicher, ob das der richtige Fit ist? Buche einen kostenlosen 30-min Portfolio Assessment Call. Wir bewerten dein Portfolio und empfehlen den besten Pfad.'
      : "Not sure if this is the right fit? Book a free 30-min Portfolio Assessment Call. We'll assess your portfolio and recommend the best path forward.",
    
    // Final CTA Section
    finalCtaHeadline: isGerman ? 'Bereit für Portfolio Clarity?' : 'Ready to Get Portfolio Clarity?',
    finalCtaSubheadline: isGerman ? "Hier ist, was als nächstes passiert." : "Here's what happens next.",
    
    step1Title: isGerman ? 'SCHRITT 1: PORTFOLIO ASSESSMENT ANFRAGEN (€3.9K)' : 'STEP 1: REQUEST PORTFOLIO ASSESSMENT (€3.9K)',
    step1Items: isGerman
      ? ['Wir senden dir eine Daten-Checkliste (was wir brauchen)', 'Du teilst Daten (2-4 Stunden)', 'Wir analysieren dein Portfolio (6 Dimensionen)', 'Du erhältst Portfolio Assessment Report (20-30 Seiten, 3-5 Tage)']
      : ['We\'ll send you a data checklist (what we need)', 'You share data (2-4 hours)', 'We analyze your portfolio (6 dimensions)', 'You get Portfolio Assessment Report (20-30 pages, 3-5 days)'],
    step1Conclusion: isGerman ? 'Wisse genau, welche Companies du zuerst fixen sollst.' : 'Know exactly which companies to fix first.',
    
    step2Title: isGerman ? 'SCHRITT 2: ENTSCHEIDE, OB DU EXECUTION BRIDGE BRAUCHST (+€2K)' : 'STEP 2: DECIDE IF YOU NEED EXECUTION BRIDGE (+€2K)',
    step2Items: isGerman
      ? ['90-Tage Portfolio Roadmap (Woche-für-Woche Action Plan)', 'Quick Wins Liste (Top 3 Companies, erste 30 Tage)', 'Implementation Guide (wie ausführen)', 'Operating Partner Training (wie implementieren)']
      : ['90-Day Portfolio Roadmap (week-by-week action plan)', 'Quick Wins List (top 3 companies, first 30 days)', 'Implementation Guide (how to execute)', 'Operating Partner Training (how to implement)'],
    step2Conclusion: isGerman ? 'Du entscheidest. Kein Druck.' : 'You decide. No pressure.',
    
    alternativeTitle: isGerman ? 'ALTERNATIVE: STARTE MIT EINEM PORTFOLIO ASSESSMENT CALL (KOSTENLOS)' : 'ALTERNATIVE: START WITH A PORTFOLIO ASSESSMENT CALL (FREE)',
    alternativeDescription: isGerman
      ? 'Nicht sicher, ob du Portfolio Assessment brauchst? Starte mit einem kostenlosen Call:'
      : 'Not sure if you need portfolio assessment? Start with a free call:',
    alternativeItems: isGerman
      ? ['Bewerte dein Portfolio (wie viele strugglen? durchschnittlicher θ_index?)', 'Identifiziere Portfolio-Bottlenecks (was ist kaputt?)', 'Erhalte Empfehlung (Portfolio Assessment, Power Up, oder Accelerate)']
      : ['Assess your portfolio (how many struggling? average θ_index?)', 'Identify portfolio bottlenecks (what\'s broken?)', 'Get recommendation (Portfolio assessment, Power Up, or Accelerate)'],
    
    inflectionCallCta: isGerman ? 'Kostenlosen Portfolio Assessment Call buchen' : 'Book Free Portfolio Assessment Call',
    
    faqTitle: 'FAQ:',
    faqItems: [
      {
        question: isGerman ? 'Wie lange dauert Portfolio Assessment?' : 'How long does portfolio assessment take?',
        answer: isGerman ? '3-5 Tage (vom Daten teilen bis zum Portfolio Assessment Report)' : '3-5 days (from data sharing to Portfolio Assessment Report)'
      },
      {
        question: isGerman ? 'Was ist die Investition?' : 'What\'s the investment?',
        answer: isGerman ? '€3.9K (Base) oder €5.9K (Base + Execution Bridge)' : '€3.9K (Base) or €5.9K (Base + Execution Bridge)'
      },
      {
        question: isGerman ? 'Welche Daten braucht ihr?' : 'What data do you need?',
        answer: isGerman ? 'Portfolio-Daten (Liste der Companies, Stage, ARR), Company-Metriken (Growth, CAC, LTV, Margin), AI-Maturity-Daten (θ_index oder genutzte AI-Tools)' : 'Portfolio data (list of companies, stage, ARR), company metrics (growth, CAC, LTV, margin), AI maturity data (θ_index or AI tools used)'
      },
      {
        question: isGerman ? 'Kann ich mit einer Referenz sprechen?' : 'Can I talk to a reference?',
        answer: isGerman ? 'Ja. Wir verbinden dich mit einem VC/PE, der Portfolio Assessment genutzt hat (gleiche Portfolio-Größe, gleiche Challenge).' : 'Yes. We\'ll connect you with a VC/PE who\'s used Portfolio Assessment (same portfolio size, same challenge).'
      },
      {
        question: isGerman ? 'Was ist der ROI?' : 'What\'s the ROI?',
        answer: isGerman ? 'Typischer ROI ist 10-30x (basierend auf Portfolio-Wertsteigerung und LP-Confidence).' : 'Typical ROI is 10-30x (based on portfolio value increase and LP confidence).'
      },
      {
        question: isGerman ? 'Wie unterscheidet sich das von einem Consultant?' : 'How is this different from hiring a consultant?',
        answer: isGerman ? 'Consultants brauchen 2-4 Wochen und kosten €20K-€50K. Wir liefern in 3-5 Tagen für €3.9K-€5.9K mit McKinsey-Level Qualität.' : 'Consultants take 2-4 weeks and cost €20K-€50K. We deliver in 3-5 days for €3.9K-€5.9K with McKinsey-level quality.'
      },
      {
        question: isGerman ? 'Wie viele Companies könnt ihr assessieren?' : 'How many companies can you assess?',
        answer: isGerman ? 'Wir können 5-50 Companies assessieren. Für >50 Companies kontaktiere uns für Custom Pricing.' : 'We can assess 5-50 companies. For >50 companies, contact us for custom pricing.'
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
              <Briefcase className="w-4 h-4 text-primary" />
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
                onClick={() => window.open('https://calendly.com/michel-scalingx/portfolio-assessment', '_blank')}
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
            
            {/* 6 Dimensions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {content.dimensions.map((dimension, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <dimension.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{dimension.title}</h3>
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
                <p><span className="font-medium">VC/PE:</span> {content.realExample.company}</p>
                <p><span className="font-medium">Challenge:</span> {content.realExample.challenge}</p>
                <p><span className="font-medium">{isGerman ? 'Portfolio-Probleme:' : 'Portfolio Problems:'}</span> {content.realExample.problems}</p>
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
                onClick={() => window.open('https://calendly.com/michel-scalingx/portfolio-assessment', '_blank')}
              >
                {content.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                {isGerman ? 'Erhalte deinen Portfolio-ready Report in 3-5 Tagen. Wisse genau, welche Companies du zuerst fixen sollst.' : 'Get your portfolio-ready report in 3-5 days. Know exactly which companies to fix first.'}
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
                onClick={() => window.open('https://calendly.com/michel-scalingx/portfolio-assessment', '_blank')}
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
                onClick={() => window.open('https://calendly.com/michel-scalingx/30min', '_blank')}
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
                onClick={() => window.open('https://calendly.com/michel-scalingx/portfolio-assessment', '_blank')}
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
      
      <Footer />
    </div>
  );
};

export default PortfolioAssessment;
