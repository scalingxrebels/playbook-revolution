import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TwinklingStars from '@/components/TwinklingStars';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  FileSearch,
  TrendingUp, 
  Target, 
  HeartHandshake, 
  Settings, 
  Brain, 
  Briefcase, 
  FileText, 
  Clock, 
  Shield,
  CheckCircle,
  XCircle,
  ArrowRight,
  ChevronDown,
  Calendar,
  AlertTriangle,
  Lightbulb,
  Map,
  Zap,
  Users
} from 'lucide-react';

const CustomAnalysisReport = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const content = {
    breadcrumb: isGerman ? 'Solutions > Custom Analysis & Report' : 'Solutions > Custom Analysis & Report',
    badge: isGerman ? 'Decision Support · 3-5 Tage · €3.9K-€5.9K' : 'Decision Support · 3-5 Days · €3.9K-€5.9K',
    
    // Hero
    heroHeadline: isGerman ? 'Custom Expert Analysis—In 3-5 Tagen' : 'Custom Expert Analysis—In 3-5 Days',
    heroSubheadline: isGerman 
      ? 'Erhalte Experten-Analyse, zugeschnitten auf deine Herausforderung, in 3-5 Tagen. Wähle aus 7 Analyse-Typen: Growth Strategy Review, PMF Audit, Customer Success Audit, Operations Audit, AI Strategy Design, Portfolio Synergy Playbook, Board Decision Memo—mit Board-Ready Report.'
      : 'Get expert analysis tailored to your challenge in 3-5 days. Choose from 7 analysis types: Growth Strategy Review, PMF Audit, Customer Success Audit, Operations Audit, AI Strategy Design, Portfolio Synergy Playbook, Board Decision Memo—with board-ready report.',
    
    heroStats: [
      { label: 'Analysis Clarity', value: '+85%', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' },
      { label: 'Strategic Roadmap', value: '+30-60%', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' },
      { label: 'Decision Velocity', value: '+50%', sublabel: isGerman ? '(Typischer Bereich)' : '(Typical range)' }
    ],
    
    primaryCta: isGerman ? 'Custom Analysis anfragen (€3.9K)' : 'Request Custom Analysis (€3.9K)',
    secondaryCta: isGerman ? 'Analyse-Typen ansehen ↓' : 'See Analysis Types ↓',
    
    trustBadges: [
      { icon: Clock, label: isGerman ? '3-5 Tage (Schnelle Lieferung)' : '3-5 Days (Fast Turnaround)' },
      { icon: FileText, label: isGerman ? 'Board-Ready Report (15-25 Seiten)' : 'Board-Ready Report (15-25 Pages)' },
      { icon: Shield, label: isGerman ? 'Experten-Analyse (McKinsey-Level)' : 'Expert Analysis (McKinsey-Level Quality)' }
    ],
    
    // Problem Section
    problemHeadline: isGerman ? 'Du hast eine spezifische Herausforderung—aber keine klare Antwort' : 'You Have a Specific Challenge—But No Clear Answer',
    problemIntro: isGerman
      ? 'Deine Herausforderung ist einzigartig. Es geht nicht nur um CAC, nicht nur um Scaling, nicht nur um AI. Es ist etwas Spezifisches: Deine Growth Strategy ist unklar. Dein PMF erodiert. Dein Customer Success ist kaputt. Deine Operations sind chaotisch. Deine AI Strategy fehlt. Dein Portfolio hat keine Synergy. Dein Board braucht eine Decision Memo. Und du brauchst Experten-Analyse. Schnell.'
      : "Your challenge is unique. It's not just CAC, not just scaling, not just AI. It's something specific: Your growth strategy is unclear. Your PMF is eroding. Your customer success is broken. Your operations are chaotic. Your AI strategy is missing. Your portfolio lacks synergy. Your board needs a decision memo. And you need expert analysis. Fast.",
    
    symptoms: [
      { 
        title: isGerman ? 'Strategische Unsicherheit' : 'Strategic uncertainty',
        description: isGerman ? 'Weißt nicht, welche Richtung du einschlagen sollst (keine klare Strategie)' : "Don't know which direction to take (no clear strategy)",
        icon: Target
      },
      { 
        title: isGerman ? 'Keine Experten-Perspektive' : 'No expert perspective',
        description: isGerman ? 'Internes Team hat nicht die Expertise (braucht externe Analyse)' : 'Internal team lacks expertise (need external analysis)',
        icon: Brain
      },
      { 
        title: isGerman ? 'Board-Druck' : 'Board pressure',
        description: isGerman ? 'Board stellt Fragen (keine klaren Antworten)' : 'Board asking questions (no clear answers)',
        icon: Users
      },
      { 
        title: isGerman ? 'Decision Paralysis' : 'Decision paralysis',
        description: isGerman ? 'Kann ohne Daten nicht entscheiden (braucht Experten-Analyse)' : "Can't decide without data (need expert analysis)",
        icon: AlertTriangle
      },
      { 
        title: isGerman ? 'Zeitdruck' : 'Time pressure',
        description: isGerman ? 'Braucht Antworten schnell (3-5 Tage, nicht 2-4 Wochen)' : 'Need answers fast (3-5 days, not 2-4 weeks)',
        icon: Clock
      }
    ],
    
    realCostTitle: isGerman ? 'Die echten Kosten:' : 'The real cost:',
    realCosts: [
      isGerman ? 'Zerstört strategisches Momentum (Unsicherheit killt Execution)' : 'Destroys strategic momentum (uncertainty kills execution)',
      isGerman ? 'Begrenzt Wachstumspotenzial (falsche Strategie = verschwendete Ressourcen)' : 'Limits growth potential (wrong strategy = wasted resources)',
      isGerman ? 'Schwächt Board-Vertrauen (Board verliert Vertrauen in Leadership)' : 'Weakens board confidence (board losing trust in leadership)',
      isGerman ? 'Erhöht Wettbewerbsrisiko (Konkurrenten bewegen sich schneller)' : 'Increases competitive risk (competitors move faster)'
    ],
    
    problemConclusion: isGerman 
      ? 'Du brauchst Custom Analysis. Schnell.' 
      : 'You need custom analysis. Fast.',
    
    // Solution Section - 7 Analysis Types
    solutionHeadline: isGerman ? '7 Custom Analysis Typen—Wähle deinen Fokus' : '7 Custom Analysis Types—Choose Your Focus',
    solutionSubheadline: isGerman
      ? 'Wir analysieren nicht nur Daten. Wir führen Experten-Analyse durch, zugeschnitten auf deine Herausforderung—aus McKinsey-Level-Perspektive—damit du genau weißt, was als nächstes zu tun ist.'
      : "We don't just analyze data. We conduct expert analysis tailored to your challenge—from McKinsey-level perspective—so you know exactly what to do next.",
    
    analysisTypes: [
      {
        icon: TrendingUp,
        title: isGerman ? 'Growth Strategy Review' : 'Growth Strategy Review',
        whenToChoose: isGerman 
          ? ['Deine Growth Strategy ist unklar (kein klarer Pfad zur nächsten Stage)', 'Dein Growth stagniert (50% → 30% YoY)', 'Dein Board fragt „Was ist die Growth Strategy?"']
          : ['Your growth strategy is unclear (no clear path to next stage)', 'Your growth is stalling (50% → 30% YoY)', 'Your board is asking "What\'s the growth strategy?"'],
        whatWeAnalyze: isGerman
          ? ['Growth Engines (GTM, Product, Customer Success)', 'Growth Drivers (was funktioniert, was nicht)', 'Growth Bottlenecks (was blockiert Growth)', 'Growth Opportunities (worauf fokussieren)']
          : ['Growth engines (GTM, Product, Customer Success)', 'Growth drivers (what\'s working, what\'s not)', 'Growth bottlenecks (what\'s blocking growth)', 'Growth opportunities (where to focus next)'],
        whatYouGet: isGerman
          ? ['Growth Strategy Report (15-25 Seiten)', 'Growth Roadmap (90-Tage Plan)', 'Growth Recommendations (5-10 Key Actions)']
          : ['Growth Strategy Report (15-25 pages)', 'Growth Roadmap (90-day plan)', 'Growth Recommendations (5-10 key actions)'],
        typicalOutcome: isGerman ? 'Growth Clarity +85%, Growth Roadmap +30-50%' : 'Growth Clarity +85%, Growth Roadmap +30-50%'
      },
      {
        icon: Target,
        title: isGerman ? 'Product-Market Fit (PMF) Audit' : 'Product-Market Fit (PMF) Audit',
        whenToChoose: isGerman
          ? ['Dein PMF erodiert (Churn steigt, NPS sinkt)', 'Dein Product-Market Fit ist unklar (PMF Score <0.6)', 'Dein Board fragt „Haben wir noch PMF?"']
          : ['Your PMF is eroding (churn increasing, NPS dropping)', 'Your product-market fit is unclear (PMF Score <0.6)', 'Your board is asking "Do we still have PMF?"'],
        whatWeAnalyze: isGerman
          ? ['PMF Score (quantitative Bewertung)', 'Customer Feedback (qualitative Analyse)', 'Product Usage (Feature Adoption, Engagement)', 'Market Positioning (ICP Fit, Competitive Position)']
          : ['PMF Score (quantitative assessment)', 'Customer feedback (qualitative analysis)', 'Product usage (feature adoption, engagement)', 'Market positioning (ICP fit, competitive position)'],
        whatYouGet: isGerman
          ? ['PMF Audit Report (15-25 Seiten)', 'PMF Roadmap (90-Tage Plan zur PMF-Wiederherstellung)', 'PMF Recommendations (5-10 Key Actions)']
          : ['PMF Audit Report (15-25 pages)', 'PMF Roadmap (90-day plan to restore PMF)', 'PMF Recommendations (5-10 key actions)'],
        typicalOutcome: isGerman ? 'PMF Clarity +90%, PMF Roadmap +40-60%' : 'PMF Clarity +90%, PMF Roadmap +40-60%'
      },
      {
        icon: HeartHandshake,
        title: isGerman ? 'Customer Success Audit' : 'Customer Success Audit',
        whenToChoose: isGerman
          ? ['Dein Customer Success ist kaputt (Churn >5%, NRR <100%)', 'Deine Retention sinkt (NRR 120% → 95%)', 'Dein Board fragt „Warum steigt Churn?"']
          : ['Your customer success is broken (churn >5%, NRR <100%)', 'Your retention is dropping (NRR 120% → 95%)', 'Your board is asking "Why is churn increasing?"'],
        whatWeAnalyze: isGerman
          ? ['Customer Success Operations (Onboarding, Support, Expansion)', 'Retention Drivers (was treibt Retention)', 'Churn Drivers (was treibt Churn)', 'Expansion Opportunities (wo expandieren)']
          : ['Customer success operations (onboarding, support, expansion)', 'Retention drivers (what drives retention)', 'Churn drivers (what drives churn)', 'Expansion opportunities (where to expand)'],
        whatYouGet: isGerman
          ? ['Customer Success Audit Report (15-25 Seiten)', 'Retention Roadmap (90-Tage Plan)', 'CS Recommendations (5-10 Key Actions)']
          : ['Customer Success Audit Report (15-25 pages)', 'Retention Roadmap (90-day plan)', 'CS Recommendations (5-10 key actions)'],
        typicalOutcome: isGerman ? 'CS Clarity +85%, Retention Roadmap +30-50%' : 'CS Clarity +85%, Retention Roadmap +30-50%'
      },
      {
        icon: Settings,
        title: isGerman ? 'Operations Audit' : 'Operations Audit',
        whenToChoose: isGerman
          ? ['Deine Operations sind chaotisch (50 Meetings/Woche, Decision Velocity 10 Tage)', 'Dein Scaling ist kaputt (hohe Operational Debt)', 'Dein Board fragt „Warum sind Operations so langsam?"']
          : ['Your operations are chaotic (50 meetings/week, decision velocity 10 days)', 'Your scaling is broken (operational debt high)', 'Your board is asking "Why are operations so slow?"'],
        whatWeAnalyze: isGerman
          ? ['Operational Efficiency (Meetings, Decision Velocity, Coordination)', 'Operational Debt (manuelle Prozesse, kaputte Systeme)', 'Scaling Readiness (können Operations skalieren?)', 'Organizational Design (ist Org-Struktur richtig?)']
          : ['Operational efficiency (meetings, decision velocity, coordination)', 'Operational debt (manual processes, broken systems)', 'Scaling readiness (can operations scale?)', 'Organizational design (is org structure right?)'],
        whatYouGet: isGerman
          ? ['Operations Audit Report (15-25 Seiten)', 'Operations Roadmap (90-Tage Plan)', 'Operations Recommendations (5-10 Key Actions)']
          : ['Operations Audit Report (15-25 pages)', 'Operations Roadmap (90-day plan)', 'Operations Recommendations (5-10 key actions)'],
        typicalOutcome: isGerman ? 'Operations Clarity +85%, Efficiency Roadmap +30-60%' : 'Operations Clarity +85%, Efficiency Roadmap +30-60%'
      },
      {
        icon: Brain,
        title: isGerman ? 'AI Strategy Design' : 'AI Strategy Design',
        whenToChoose: isGerman
          ? ['Deine AI Strategy fehlt (θ_index 0.2-0.4, keine klare AI Roadmap)', 'Dein AI Investment ist unklar (€50K-€200K ausgegeben, kein ROI)', 'Dein Board fragt „Was ist unsere AI Strategy?"']
          : ['Your AI strategy is missing (θ_index 0.2-0.4, no clear AI roadmap)', 'Your AI investment is unclear (€50K-€200K spent, no ROI)', 'Your board is asking "What\'s our AI strategy?"'],
        whatWeAnalyze: isGerman
          ? ['AI Maturity (θ_index Assessment)', 'AI Use Cases (welche AI Use Cases priorisieren)', 'AI ROI (welche AI Investments machen)', 'AI Roadmap (wie AI-Native werden)']
          : ['AI maturity (θ_index assessment)', 'AI use cases (which AI use cases to prioritize)', 'AI ROI (which AI investments to make)', 'AI roadmap (how to become AI-Native)'],
        whatYouGet: isGerman
          ? ['AI Strategy Report (15-25 Seiten)', 'AI Roadmap (90-Tage Plan)', 'AI Recommendations (5-10 Key Actions)']
          : ['AI Strategy Report (15-25 pages)', 'AI Roadmap (90-day plan)', 'AI Recommendations (5-10 key actions)'],
        typicalOutcome: isGerman ? 'AI Clarity +90%, θ_index Roadmap +50-150%' : 'AI Clarity +90%, θ_index Roadmap +50-150%'
      },
      {
        icon: Briefcase,
        title: isGerman ? 'Portfolio Synergy Playbook' : 'Portfolio Synergy Playbook',
        whenToChoose: isGerman
          ? ['Dein Portfolio hat keine Synergy (15 Companies, kein Cross-Portfolio Value)', 'Deine Portfolio Companies kollaborieren nicht (keine Shared Learnings)', 'Deine LPs fragen „Was ist die Portfolio Strategy?"']
          : ['Your portfolio lacks synergy (15 companies, no cross-portfolio value)', 'Your portfolio companies don\'t collaborate (no shared learnings)', 'Your LPs are asking "What\'s the portfolio strategy?"'],
        whatWeAnalyze: isGerman
          ? ['Portfolio Synergies (wo können Companies kollaborieren?)', 'Portfolio Gaps (was fehlt im Portfolio?)', 'Portfolio Value Creation (wie Portfolio Value steigern?)', 'Portfolio Strategy (was ist die portfolio-weite Strategie?)']
          : ['Portfolio synergies (where can companies collaborate?)', 'Portfolio gaps (what\'s missing across portfolio?)', 'Portfolio value creation (how to increase portfolio value?)', 'Portfolio strategy (what\'s the portfolio-wide strategy?)'],
        whatYouGet: isGerman
          ? ['Portfolio Synergy Playbook (20-30 Seiten)', 'Synergy Roadmap (90-Tage Plan)', 'Portfolio Recommendations (5-10 Key Actions)']
          : ['Portfolio Synergy Playbook (20-30 pages)', 'Synergy Roadmap (90-day plan)', 'Portfolio Recommendations (5-10 key actions)'],
        typicalOutcome: isGerman ? 'Portfolio Clarity +85%, Synergy Roadmap +30-60%' : 'Portfolio Clarity +85%, Synergy Roadmap +30-60%'
      },
      {
        icon: FileText,
        title: isGerman ? 'Board Decision Memo' : 'Board Decision Memo',
        whenToChoose: isGerman
          ? ['Dein Board braucht eine Entscheidung (M&A vs. Organic, Market Expansion, Pricing Reset)', 'Dein Board fragt nach Analyse (braucht board-ready Report)', 'Du brauchst Decision-Grade Qualität (investor-grade Analyse)']
          : ['Your board needs a decision (M&A vs. Organic, Market Expansion, Pricing Reset)', 'Your board is asking for analysis (need board-ready report)', 'You need decision-grade quality (investor-grade analysis)'],
        whatWeAnalyze: isGerman
          ? ['Decision Options (was sind die Optionen?)', 'Decision Trade-offs (was sind Pros/Cons?)', 'Decision Recommendations (was solltest du tun?)', 'Decision Roadmap (wie ausführen?)']
          : ['Decision options (what are the options?)', 'Decision trade-offs (what are the pros/cons?)', 'Decision recommendations (what should you do?)', 'Decision roadmap (how to execute?)'],
        whatYouGet: isGerman
          ? ['Board Decision Memo (10-15 Seiten)', 'Decision Framework (wie entscheiden)', 'Decision Recommendations (klare Empfehlung)']
          : ['Board Decision Memo (10-15 pages)', 'Decision Framework (how to decide)', 'Decision Recommendations (clear recommendation)'],
        typicalOutcome: isGerman ? 'Decision Clarity +90%, Board Confidence +50-70%' : 'Decision Clarity +90%, Board Confidence +50-70%'
      }
    ],
    
    // Outcome Section
    outcomeHeadline: isGerman ? 'Typische Ergebnisse (3-5 Tage)' : 'Typical Outcomes (3-5 Days)',
    outcomeSubheadline: isGerman
      ? 'Das sind echte Ergebnisse von Companies und VCs wie dir.'
      : 'These are real results from companies and VCs like yours.',
    
    metrics: [
      {
        title: 'Analysis Clarity +85%',
        whatItMeans: isGerman ? 'Deine Analysis Clarity steigt um 85%.' : 'Your analysis clarity increases by 85%.',
        before: isGerman ? 'Analysis Clarity = Niedrig (weiß nicht, was zu tun ist)' : "Analysis Clarity = Low (don't know what to do)",
        after: isGerman ? 'Analysis Clarity = Hoch (klare Roadmap, Prioritäten klar)' : 'Analysis Clarity = High (clear roadmap, priorities clear)',
        impact: isGerman ? 'Von "strategische Unsicherheit" zu "strategische Klarheit"' : 'From "strategic uncertainty" to "strategic clarity"'
      },
      {
        title: 'Strategic Roadmap +30-60%',
        whatItMeans: isGerman ? 'Deine Strategic Roadmap zeigt 30-60% Verbesserungspotenzial.' : 'Your strategic roadmap shows 30-60% potential improvement.',
        before: isGerman ? 'Strategic Roadmap = Unklar (kein klarer Pfad nach vorne)' : 'Strategic Roadmap = Unclear (no clear path forward)',
        after: isGerman ? 'Strategic Roadmap = Klar (30-60% Verbesserungspfad)' : 'Strategic Roadmap = Clear (30-60% improvement path)',
        impact: isGerman ? 'Von "strategische Unsicherheit" zu "strategische Roadmap"' : 'From "strategic uncertainty" to "strategic roadmap"'
      },
      {
        title: 'Decision Velocity +50%',
        whatItMeans: isGerman ? 'Deine Decision Velocity steigt um 50%.' : 'Your decision velocity increases by 50%.',
        before: isGerman ? 'Decision Velocity = Langsam (7-14 Tage, unklar)' : 'Decision Velocity = Slow (7-14 days, unclear)',
        after: isGerman ? 'Decision Velocity = Schnell (3-7 Tage, klare Empfehlungen)' : 'Decision Velocity = Fast (3-7 days, clear recommendations)',
        impact: isGerman ? 'Von "Decision Paralysis" zu "Decision Velocity"' : 'From "decision paralysis" to "decision velocity"'
      }
    ],
    
    realExamples: [
      {
        title: isGerman ? 'Example 1: Growth Strategy Review' : 'Example 1: Growth Strategy Review',
        company: isGerman ? 'Series B SaaS, €20M ARR, 100 Mitarbeiter' : 'Series B SaaS, €20M ARR, 100 employees',
        challenge: isGerman 
          ? 'Growth stagniert (80% → 35% YoY), unklare Growth Strategy'
          : 'Growth stalling (80% → 35% YoY), unclear growth strategy',
        transformation: isGerman
          ? 'Growth Strategy Review (3-5 Tage)'
          : 'Growth Strategy Review (3-5 days)',
        outcomes: [
          isGerman ? 'Growth Clarity +90%' : 'Growth Clarity +90%',
          isGerman ? 'Growth Roadmap +45% (klarer Pfad zu 80% YoY)' : 'Growth Roadmap +45% (clear path to 80% YoY)',
          isGerman ? 'Board Confidence +60%' : 'Board Confidence +60%'
        ]
      },
      {
        title: isGerman ? 'Example 2: PMF Audit' : 'Example 2: PMF Audit',
        company: isGerman ? 'Series A SaaS, €10M ARR, 70 Mitarbeiter' : 'Series A SaaS, €10M ARR, 70 employees',
        challenge: isGerman 
          ? 'PMF erodiert (Churn 8%, NPS 30, PMF Score 0.45)'
          : 'PMF eroding (churn 8%, NPS 30, PMF Score 0.45)',
        transformation: isGerman
          ? 'PMF Audit (3-5 Tage)'
          : 'PMF Audit (3-5 days)',
        outcomes: [
          isGerman ? 'PMF Clarity +95%' : 'PMF Clarity +95%',
          isGerman ? 'PMF Roadmap +55% (klarer Pfad zu PMF Score 0.7+)' : 'PMF Roadmap +55% (clear path to PMF Score 0.7+)',
          isGerman ? 'Churn Roadmap -40%' : 'Churn Roadmap -40%'
        ]
      },
      {
        title: isGerman ? 'Example 3: Portfolio Synergy Playbook' : 'Example 3: Portfolio Synergy Playbook',
        company: isGerman ? 'Series A-B VC, €250M AUM, 20 Portfolio Companies' : 'Series A-B VC, €250M AUM, 20 portfolio companies',
        challenge: isGerman 
          ? 'Keine Portfolio Synergy, LPs fragen "Was ist die Portfolio Strategy?"'
          : 'No portfolio synergy, LPs asking "What\'s portfolio strategy?"',
        transformation: isGerman
          ? 'Portfolio Synergy Playbook (3-5 Tage)'
          : 'Portfolio Synergy Playbook (3-5 days)',
        outcomes: [
          isGerman ? 'Portfolio Clarity +85%' : 'Portfolio Clarity +85%',
          isGerman ? 'Synergy Roadmap +50% (10 Synergy-Initiativen identifiziert)' : 'Synergy Roadmap +50% (10 synergy initiatives identified)',
          isGerman ? 'LP Confidence +65%' : 'LP Confidence +65%'
        ]
      }
    ],
    
    // Process Section
    processHeadline: isGerman ? 'Der Custom Analysis Prozess' : 'The Custom Analysis Process',
    processSubheadline: isGerman
      ? 'Transparenter Zeitplan. Klare Deliverables. Experten-Grade Qualität.'
      : 'Transparent timeline. Clear deliverables. Expert-grade quality.',
    
    processDay12: {
      title: isGerman ? 'TAG 1-2: DATENSAMMLUNG & ANALYSE' : 'DAY 1-2: DATA COLLECTION & ANALYSIS',
      whatWeDo: isGerman
        ? ['Daten anfordern (basierend auf Analyse-Typ)', 'Experten-Analyse durchführen (zugeschnitten auf deine Herausforderung)', 'Gaps und Opportunities identifizieren (was ist kaputt, was ist möglich)', 'Custom Analysis Report erstellen (15-25 Seiten)']
        : ['Request data (based on analysis type)', 'Conduct expert analysis (tailored to your challenge)', 'Identify gaps and opportunities (what\'s broken, what\'s possible)', 'Create Custom Analysis Report (15-25 pages)'],
      whatYouGet: isGerman
        ? ['Custom Analysis Report (15-25 Seiten, board-ready)', 'Analysis Summary (Executive Summary, 2-3 Seiten)', 'Gap Analysis (was ist kaputt und warum)', 'Priority Matrix (was zuerst fixen)', 'Expert Recommendations (5-10 Key Actions)']
        : ['Custom Analysis Report (15-25 pages, board-ready)', 'Analysis Summary (executive summary, 2-3 pages)', 'Gap Analysis (what\'s broken and why)', 'Priority Matrix (what to fix first)', 'Expert Recommendations (5-10 key actions)'],
      timeCommitment: isGerman ? '2-4 Stunden (Daten teilen, Q&A)' : '2-4 hours (data sharing, Q&A)'
    },
    
    processDay35: {
      title: isGerman ? 'TAG 3-5: 90-TAGE ROADMAP (OPTIONAL +€2K)' : 'DAY 3-5: 90-DAY ROADMAP (OPTIONAL +€2K)',
      whatWeDo: isGerman
        ? ['90-Tage Roadmap erstellen (Woche-für-Woche Action Plan)', 'Quick Wins identifizieren (was in ersten 30 Tagen fixen)', 'Long-Term Strategy designen (was in 90 Tagen fixen)', 'Implementation Guide vorbereiten (wie ausführen)']
        : ['Create 90-day roadmap (week-by-week action plan)', 'Identify quick wins (what to fix in first 30 days)', 'Design long-term strategy (what to fix in 90 days)', 'Prepare implementation guide (how to execute)'],
      whatYouGet: isGerman
        ? ['90-Tage Roadmap (10-15 Seiten, umsetzbar)', 'Quick Wins Liste (erste 30 Tage)', 'Long-Term Strategy (90 Tage)', 'Implementation Guide (wie ausführen)']
        : ['90-Day Roadmap (10-15 pages, actionable)', 'Quick Wins List (first 30 days)', 'Long-Term Strategy (90 days)', 'Implementation Guide (how to execute)'],
      timeCommitment: isGerman ? '1-2 Stunden (Roadmap Review, Q&A)' : '1-2 hours (roadmap review, Q&A)'
    },
    
    pricingTitle: isGerman ? 'INVESTITION:' : 'PRICING:',
    pricingBase: {
      title: isGerman ? 'Base Package (€3.9K):' : 'Base Package (€3.9K):',
      items: isGerman
        ? ['Custom Analysis Report (15-25 Seiten)', 'Analyse-Typ deiner Wahl (7 Typen verfügbar)', 'Experten-Empfehlungen', '3-5 Tage Turnaround']
        : ['Custom Analysis Report (15-25 pages)', 'Analysis type of your choice (7 types available)', 'Expert recommendations', '3-5 days turnaround']
    },
    pricingExecution: {
      title: isGerman ? '+ Execution Bridge (€2K):' : '+ Execution Bridge (€2K):',
      items: isGerman
        ? ['90-Tage Roadmap (Woche-für-Woche)', 'Quick Wins Liste (erste 30 Tage)', 'Implementation Guide (wie ausführen)', 'Team Training (wie implementieren)']
        : ['90-Day Roadmap (week-by-week)', 'Quick Wins List (first 30 days)', 'Implementation Guide (how to execute)', 'Team Training (how to implement)']
    },
    pricingTotal: isGerman ? 'Gesamt: €3.9K (Base) oder €5.9K (Base + Execution)' : 'Total Investment: €3.9K (Base) or €5.9K (Base + Execution)',
    
    analysisTypesAvailable: isGerman ? '7 ANALYSE-TYPEN VERFÜGBAR:' : '7 ANALYSIS TYPES AVAILABLE:',
    analysisTypesList: [
      isGerman ? 'Growth Strategy Review (€3.9K-€5.9K)' : 'Growth Strategy Review (€3.9K-€5.9K)',
      isGerman ? 'Product-Market Fit (PMF) Audit (€3.9K-€5.9K)' : 'Product-Market Fit (PMF) Audit (€3.9K-€5.9K)',
      isGerman ? 'Customer Success Audit (€3.9K-€5.9K)' : 'Customer Success Audit (€3.9K-€5.9K)',
      isGerman ? 'Operations Audit (€3.9K-€5.9K)' : 'Operations Audit (€3.9K-€5.9K)',
      isGerman ? 'AI Strategy Design (€3.9K-€5.9K)' : 'AI Strategy Design (€3.9K-€5.9K)',
      isGerman ? 'Portfolio Synergy Playbook (€3.9K-€5.9K)' : 'Portfolio Synergy Playbook (€3.9K-€5.9K)',
      isGerman ? 'Board Decision Memo (€3.9K)' : 'Board Decision Memo (€3.9K)'
    ],
    
    qualityGuarantee: isGerman ? 'QUALITÄTSGARANTIE:' : 'QUALITY GUARANTEE:',
    guarantees: isGerman
      ? ['Experten-Grade Qualität (McKinsey-Level Analyse)', 'Zugeschnittene Analyse (spezifisch für deine Herausforderung)', 'Schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)', 'Referenz-Calls verfügbar (sprich mit Companies/VCs, die das genutzt haben)']
      : ['Expert-grade quality (McKinsey-level analysis)', 'Tailored analysis (specific to your challenge)', 'Fast turnaround (3-5 days, not 2-4 weeks)', 'Reference calls available (talk to companies/VCs who\'ve used this)'],
    
    // Qualification Section
    qualificationHeadline: isGerman ? 'Ist das richtig für dich?' : 'Is This Right for You?',
    qualificationSubheadline: isGerman
      ? 'Custom Analysis & Report funktioniert am besten für Companies und VCs in dieser Situation.'
      : 'Custom Analysis & Report works best for companies and VCs in this situation.',
    
    goodFitTitle: isGerman ? '✅ DAS IST EIN GUTER FIT, WENN:' : '✅ THIS IS A GOOD FIT IF:',
    goodFitItems: [
      {
        title: isGerman ? 'Du hast eine spezifische Herausforderung, die Experten-Analyse braucht' : 'You have a specific challenge that needs expert analysis',
        items: isGerman
          ? ['Deine Herausforderung ist einzigartig (nicht von Standard-Assessments abgedeckt)', 'Du brauchst Experten-Perspektive (nicht nur Daten)', 'Du brauchst board-ready Analyse (investor-grade Qualität)', 'Du brauchst schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)']
          : ['Your challenge is unique (not covered by standard assessments)', 'You need expert perspective (not just data)', 'You need board-ready analysis (investor-grade quality)', 'You need fast turnaround (3-5 days, not 2-4 weeks)']
      },
      {
        title: isGerman ? 'Du brauchst Experten-Analyse (keine Hands-on Implementation)' : 'You need expert analysis (not hands-on implementation)',
        items: isGerman
          ? ['Brauchst du Experten-Analyse? (keine Hands-on Implementation?)', 'Brauchst du board-ready Report? (nicht nur Daten-Dump?)', 'Brauchst du klare Prioritäten? (was als nächstes tun?)', 'Brauchst du 90-Tage Roadmap? (umsetzbarer Plan?)']
          : ['Do you need expert analysis? (not hands-on implementation?)', 'Do you need board-ready report? (not just data dump?)', 'Do you need clear priorities? (what to do next?)', 'Do you need 90-day roadmap? (actionable plan?)']
      },
      {
        title: isGerman ? 'Du bist Series A-B (oder VC/PE mit Portfolio)' : "You're Series A-B (or VC/PE with portfolio)",
        items: isGerman
          ? ['Du hast Series A-B geraised (oder du bist VC/PE)', 'Du hast Revenue (€5M-€30M ARR) oder Portfolio (10-50 Companies)', 'Du hast ein Team (30-150 Leute)']
          : ['You\'ve raised Series A-B (or you\'re a VC/PE)', 'You have revenue (€5M-€30M ARR) or portfolio (10-50 companies)', 'You have a team (30-150 people)']
      },
      {
        title: isGerman ? 'Du brauchst schnelle Lieferung (3-5 Tage, nicht 2-4 Wochen)' : 'You need fast turnaround (3-5 days, not 2-4 weeks)',
        items: isGerman
          ? ['Du brauchst Ergebnisse in 3-5 Tagen (nicht 2-4 Wochen)', 'Du bist bereit, Daten zu teilen (basierend auf Analyse-Typ)', 'Du commitest 2-4 Stunden für Daten teilen + Q&A']
          : ['You need results in 3-5 days (not 2-4 weeks)', 'You\'re willing to share data (based on analysis type)', 'You\'ll commit 2-4 hours for data sharing + Q&A']
      },
      {
        title: isGerman ? 'Du hast Budget (€3.9K-€5.9K)' : 'You have budget (€3.9K-€5.9K)',
        items: isGerman
          ? ['Du kannst €3.9K (Base) oder €5.9K (Base + Execution) investieren', 'ROI ist 10-30x (basierend auf strategischer Klarheit und Decision Velocity)']
          : ['You can invest €3.9K (Base) or €5.9K (Base + Execution)', 'ROI is 10-30x (based on strategic clarity and decision velocity)']
      }
    ],
    
    notFitTitle: isGerman ? '❌ DAS IST KEIN GUTER FIT, WENN:' : '❌ THIS IS NOT A GOOD FIT IF:',
    notFitItems: [
      {
        title: isGerman ? 'Du brauchst Hands-on Implementation (nicht nur Analyse)' : 'You need hands-on implementation (not just analysis)',
        description: isGerman
          ? 'Wenn du Hands-on Implementation brauchst (nicht nur Analyse), reicht Custom Analysis nicht.'
          : 'If you need hands-on implementation (not just analysis), Custom Analysis is not enough.',
        betterFit: isGerman ? 'Besser: Power Up (30 Tage, €23.6K) oder Boost (90 Tage, €60K-€78K)' : 'Better fit: Power Up (30 days, €23.6K) or Boost (90 days, €60K-€78K)'
      },
      {
        title: isGerman ? 'Du weißt schon, was zu tun ist (brauchst nur Execution)' : 'You already know what to do (just need execution)',
        description: isGerman
          ? 'Wenn du schon weißt, was zu tun ist, brauchst du keine Analyse.'
          : 'If you already know what to do, you don\'t need analysis.',
        betterFit: isGerman ? 'Besser: Power Up (30 Tage, €23.6K) für schnelle Execution' : 'Better fit: Power Up (30 days, €23.6K) for fast execution'
      },
      {
        title: isGerman ? 'Du brauchst volle Transformation (nicht nur Assessment)' : 'You need full transformation (not just assessment)',
        description: isGerman
          ? 'Wenn du volle Transformation brauchst (nicht nur Assessment), reicht Custom Analysis nicht.'
          : 'If you need full transformation (not just assessment), Custom Analysis is not enough.',
        betterFit: isGerman ? 'Besser: Boost (90 Tage, €60K-€78K) oder Accelerate (12 Monate, €153K)' : 'Better fit: Boost (90 days, €60K-€78K) or Accelerate (12 months, €153K)'
      },
      {
        title: isGerman ? 'Deine Herausforderung ist von Standard-Assessment abgedeckt' : 'Your challenge is covered by standard assessment',
        description: isGerman
          ? 'Wenn deine Herausforderung CAC, Scaling, AI Maturity, oder Portfolio ist, nutze Standard Assessment.'
          : 'If your challenge is CAC, Scaling, AI Maturity, or Portfolio, use standard assessment.',
        betterFit: isGerman ? 'Besser: GTM Effectiveness Review, Scaling Readiness Assessment, AI Maturity Assessment, Portfolio Assessment' : 'Better fit: GTM Effectiveness Review, Scaling Readiness Assessment, AI Maturity Assessment, Portfolio Assessment'
      }
    ],
    
    notSureText: isGerman
      ? 'Nicht sicher, welcher Analyse-Typ? Buche einen kostenlosen 30-min Inflection Call. Wir bewerten deine Herausforderung und empfehlen den besten Analyse-Typ.'
      : "Not sure which analysis type? Book a free 30-min Inflection Call. We'll assess your challenge and recommend the best analysis type.",
    
    // Final CTA Section
    finalCtaHeadline: isGerman ? 'Bereit für Experten-Analyse?' : 'Ready to Get Expert Analysis?',
    finalCtaSubheadline: isGerman ? "Hier ist, was als nächstes passiert." : "Here's what happens next.",
    
    step1Title: isGerman ? 'SCHRITT 1: CUSTOM ANALYSIS ANFRAGEN (€3.9K)' : 'STEP 1: REQUEST CUSTOM ANALYSIS (€3.9K)',
    step1Items: isGerman
      ? ['Wir senden dir einen Fragebogen (um deine Herausforderung zu verstehen)', 'Du teilst Daten (2-4 Stunden)', 'Wir führen Experten-Analyse durch (zugeschnitten auf deine Herausforderung)', 'Du erhältst Custom Analysis Report (15-25 Seiten, 3-5 Tage)']
      : ['We\'ll send you a questionnaire (to understand your challenge)', 'You share data (2-4 hours)', 'We conduct expert analysis (tailored to your challenge)', 'You get Custom Analysis Report (15-25 pages, 3-5 days)'],
    step1Conclusion: isGerman ? 'Wisse genau, was als nächstes zu tun ist.' : 'Know exactly what to do next.',
    
    step2Title: isGerman ? 'SCHRITT 2: WÄHLE DEINEN ANALYSE-TYP' : 'STEP 2: CHOOSE YOUR ANALYSIS TYPE',
    step2Description: isGerman
      ? 'Wenn du Custom Analysis anfragst, wählst du aus 7 Typen:'
      : 'When you request Custom Analysis, you\'ll choose from 7 types:',
    step2Types: [
      isGerman ? 'Growth Strategy Review (Growth Strategy unklar)' : 'Growth Strategy Review (growth strategy unclear)',
      isGerman ? 'Product-Market Fit (PMF) Audit (PMF erodiert)' : 'Product-Market Fit (PMF) Audit (PMF eroding)',
      isGerman ? 'Customer Success Audit (Retention kaputt)' : 'Customer Success Audit (retention broken)',
      isGerman ? 'Operations Audit (Operations chaotisch)' : 'Operations Audit (operations chaotic)',
      isGerman ? 'AI Strategy Design (AI Strategy fehlt)' : 'AI Strategy Design (AI strategy missing)',
      isGerman ? 'Portfolio Synergy Playbook (Portfolio hat keine Synergy)' : 'Portfolio Synergy Playbook (portfolio lacks synergy)',
      isGerman ? 'Board Decision Memo (Board braucht Entscheidung)' : 'Board Decision Memo (board needs decision)'
    ],
    step2Conclusion: isGerman ? 'Nicht sicher, welcher Typ? Wir helfen dir bei der Auswahl.' : "Not sure which type? We'll help you choose.",
    
    step3Title: isGerman ? 'SCHRITT 3: ENTSCHEIDE, OB DU EXECUTION BRIDGE BRAUCHST (+€2K)' : 'STEP 3: DECIDE IF YOU NEED EXECUTION BRIDGE (+€2K)',
    step3Items: isGerman
      ? ['90-Tage Roadmap (Woche-für-Woche Action Plan)', 'Quick Wins Liste (erste 30 Tage)', 'Implementation Guide (wie ausführen)', 'Team Training (wie implementieren)']
      : ['90-Day Roadmap (week-by-week action plan)', 'Quick Wins List (first 30 days)', 'Implementation Guide (how to execute)', 'Team Training (how to implement)'],
    step3Conclusion: isGerman ? 'Du entscheidest. Kein Druck.' : 'You decide. No pressure.',
    
    alternativeTitle: isGerman ? 'ALTERNATIVE: STARTE MIT EINEM INFLECTION CALL (KOSTENLOS)' : 'ALTERNATIVE: START WITH AN INFLECTION CALL (FREE)',
    alternativeDescription: isGerman
      ? 'Nicht sicher, ob du Custom Analysis brauchst? Starte mit einem kostenlosen Call:'
      : 'Not sure if you need custom analysis? Start with a free call:',
    alternativeItems: isGerman
      ? ['Bewerte deine Herausforderung (was ist das spezifische Problem?)', 'Identifiziere Analyse-Typ (welcher der 7 Typen passt am besten?)', 'Erhalte Empfehlung (Custom Analysis, Power Up, oder Boost)']
      : ['Assess your challenge (what\'s the specific problem?)', 'Identify analysis type (which of 7 types fits best?)', 'Get recommendation (Custom analysis, Power Up, or Boost)'],
    
    inflectionCallCta: isGerman ? 'Kostenlosen Inflection Call buchen' : 'Book Free Inflection Call',
    
    faqTitle: 'FAQ:',
    faqItems: [
      {
        question: isGerman ? 'Wie lange dauert Custom Analysis?' : 'How long does custom analysis take?',
        answer: isGerman ? '3-5 Tage (vom Daten teilen bis zum Custom Analysis Report)' : '3-5 days (from data sharing to Custom Analysis Report)'
      },
      {
        question: isGerman ? 'Was ist die Investition?' : "What's the investment?",
        answer: isGerman ? '€3.9K (Base) oder €5.9K (Base + Execution Bridge)' : '€3.9K (Base) or €5.9K (Base + Execution Bridge)'
      },
      {
        question: isGerman ? 'Welchen Analyse-Typ sollte ich wählen?' : 'Which analysis type should I choose?',
        answer: isGerman ? 'Wir helfen dir bei der Auswahl basierend auf deiner Herausforderung. Buche einen kostenlosen Inflection Call oder fülle den Fragebogen aus.' : "We'll help you choose based on your challenge. Book a free Inflection Call or fill out the questionnaire."
      },
      {
        question: isGerman ? 'Kann ich mit einer Referenz sprechen?' : 'Can I talk to a reference?',
        answer: isGerman ? 'Ja. Wir verbinden dich mit einer Company/VC, die Custom Analysis genutzt hat (gleiche Herausforderung, gleicher Analyse-Typ).' : "Yes. We'll connect you with a company/VC who's used Custom Analysis (same challenge, same analysis type)."
      },
      {
        question: isGerman ? 'Was ist der ROI?' : "What's the ROI?",
        answer: isGerman ? 'Typischer ROI ist 10-30x (basierend auf strategischer Klarheit und Decision Velocity).' : 'Typical ROI is 10-30x (based on strategic clarity and decision velocity).'
      },
      {
        question: isGerman ? 'Wie unterscheidet sich das von einem Consultant?' : 'How is this different from hiring a consultant?',
        answer: isGerman ? 'Consultants brauchen 2-4 Wochen und kosten €20K-€50K. Wir liefern in 3-5 Tagen für €3.9K-€5.9K mit McKinsey-Level Qualität.' : 'Consultants take 2-4 weeks and cost €20K-€50K. We deliver in 3-5 days for €3.9K-€5.9K with McKinsey-level quality.'
      },
      {
        question: isGerman ? 'Was, wenn meine Herausforderung nicht gelistet ist?' : "What if my challenge isn't listed?",
        answer: isGerman ? 'Kontaktiere uns. Wir können eine Custom Analysis für deine spezifische Herausforderung erstellen.' : 'Contact us. We can create a custom analysis for your specific challenge.'
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
              <FileSearch className="w-4 h-4 text-primary" />
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
                onClick={() => window.open('https://calendly.com/michel-scalingx/custom-analysis', '_blank')}
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
      
      {/* Solution Section - 7 Analysis Types */}
      <section id="solution" className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {content.solutionHeadline}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              {content.solutionSubheadline}
            </p>
            
            {/* 7 Analysis Types Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-4">
              {content.analysisTypes.map((type, index) => (
                <AccordionItem key={index} value={`type-${index}`} className="bg-card border border-border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <type.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-left">{type.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="grid md:grid-cols-2 gap-6 mt-2">
                      <div>
                        <h4 className="font-medium mb-2 text-sm text-primary">{isGerman ? 'Wann wählen:' : 'When to choose:'}</h4>
                        <ul className="space-y-1">
                          {type.whenToChoose.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span> {item}
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-medium mb-2 mt-4 text-sm text-primary">{isGerman ? 'Was wir analysieren:' : 'What we analyze:'}</h4>
                        <ul className="space-y-1">
                          {type.whatWeAnalyze.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm text-primary">{isGerman ? 'Was du bekommst:' : 'What you get:'}</h4>
                        <ul className="space-y-1">
                          {type.whatYouGet.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                          <h4 className="font-medium text-sm">{isGerman ? 'Typisches Ergebnis:' : 'Typical outcome:'}</h4>
                          <p className="text-sm text-primary font-medium">{type.typicalOutcome}</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://calendly.com/michel-scalingx/custom-analysis', '_blank')}
              >
                {content.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Button>
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
            
            {/* Real Examples */}
            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-lg">{isGerman ? 'ECHTE BEISPIELE:' : 'REAL EXAMPLES:'}</h3>
              {content.realExamples.map((example, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
                  <h4 className="font-bold mb-3">{example.title}</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">{isGerman ? 'Company:' : 'Company:'}</span> {example.company}</p>
                    <p><span className="font-medium">Challenge:</span> {example.challenge}</p>
                    <p><span className="font-medium">Transformation:</span> {example.transformation}</p>
                    <div>
                      <span className="font-medium">{isGerman ? 'Ergebnisse:' : 'Outcomes:'}</span>
                      <ul className="mt-2 space-y-1">
                        {example.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://calendly.com/michel-scalingx/custom-analysis', '_blank')}
              >
                {content.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                {isGerman ? 'Erhalte deinen analysis-ready Report in 3-5 Tagen. Wisse genau, was als nächstes zu tun ist.' : 'Get your analysis-ready report in 3-5 days. Know exactly what to do next.'}
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
            
            {/* 7 Analysis Types List */}
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h4 className="font-bold mb-3">{content.analysisTypesAvailable}</h4>
              <ul className="grid md:grid-cols-2 gap-2">
                {content.analysisTypesList.map((type, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-primary font-medium">{index + 1}.</span> {type}
                  </li>
                ))}
              </ul>
            </div>
            
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
                onClick={() => window.open('https://calendly.com/michel-scalingx/custom-analysis', '_blank')}
              >
                {content.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Step 2 */}
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">{content.step2Title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{content.step2Description}</p>
              <ul className="space-y-2 mb-4">
                {content.step2Types.map((type, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-primary font-medium">{index + 1}.</span> {type}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground italic">{content.step2Conclusion}</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">{content.step3Title}</h3>
              <ul className="space-y-2 mb-4">
                {content.step3Items.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">{content.step3Conclusion}</p>
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
                onClick={() => window.open('https://calendly.com/michel-scalingx/custom-analysis', '_blank')}
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

export default CustomAnalysisReport;
