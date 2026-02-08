import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('board-governance/exit-ma')!;

export const exitMaData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Exit & M&A · Board & Governance", de: "Exit & M&A · Board & Governance" },
    title: "Exit & M&A Playbook",
    subtitle: { 
      en: "How to build exit and M&A readiness that maximizes valuation", 
      de: "Wie du Exit- und M&A-Bereitschaft aufbaust, die Bewertungen maximiert" 
    },
    description: { 
      en: "Traditional exit preparation is reactive. Companies start preparing 6-12 months before exit, discover gaps during due diligence, and leave 30-50% of valuation on the table. The problem? Reactive exit planning destroys value.\n\nAI-native companies use a different playbook. They leverage the 5-component framework to increase exit valuation by 200-400%, reduce due diligence time by 60%, and achieve premium multiples. They build exit readiness from day one, not 6 months before.\n\nThis playbook gives you the exact framework used by Series A-C companies to maximize exit valuation and M&A success.", 
      de: "Traditionelle Exit-Vorbereitung ist reaktiv. Unternehmen beginnen 6-12 Monate vor dem Exit mit der Vorbereitung, entdecken Lücken während der Due Diligence und lassen 30-50% der Bewertung auf dem Tisch liegen. Das Problem? Reaktive Exit-Planung zerstört Wert.\n\nAI-native Unternehmen nutzen ein anderes Playbook. Sie setzen das 5-Komponenten-Framework ein, um Exit-Bewertungen um 200-400% zu steigern, Due Diligence Zeit um 60% zu reduzieren und Premium-Multiples zu erzielen. Sie bauen Exit-Bereitschaft ab Tag eins auf, nicht 6 Monate vorher.\n\nDieses Playbook gibt dir das exakte Framework, das Series A-C Unternehmen nutzen, um Exit-Bewertungen und M&A-Erfolg zu maximieren." 
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Fallstudien" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" },
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    assetId: "playbook-exit-ma",
    gradient: "from-rose-500 to-red-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "Reactive exit planning (6-12 months before), 30-50% valuation left on table, 6-9 months due diligence, 70% of M&A deals fail to achieve synergies.", 
        de: "Reaktive Exit-Planung (6-12 Monate vorher), 30-50% Bewertung auf dem Tisch, 6-9 Monate Due Diligence, 70% der M&A-Deals erreichen keine Synergien." 
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Exit is the ultimate test of company value. A well-prepared exit can mean the difference between a €60M and €210M outcome—for the same company.", 
        de: "Der Exit ist der ultimative Test des Unternehmenswerts. Ein gut vorbereiteter Exit kann den Unterschied zwischen €60M und €210M Ergebnis bedeuten—für dasselbe Unternehmen." 
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The 5-component framework: Valuation Optimization, Due Diligence Preparation, Exit Strategy & Timing, M&A Integration, and AI-Powered Exit Intelligence.", 
        de: "Das 5-Komponenten-Framework: Valuation Optimization, Due Diligence Preparation, Exit Strategy & Timing, M&A Integration und AI-Powered Exit Intelligence." 
      } 
    }
  },
  problem: { 
    title: { en: "Why Traditional Exit Planning is Broken", de: "Warum traditionelle Exit-Planung nicht funktioniert" }, 
    subtitle: { 
      en: "Most companies leave 30-50% of their valuation on the table due to reactive exit planning", 
      de: "Die meisten Unternehmen lassen 30-50% ihrer Bewertung auf dem Tisch aufgrund reaktiver Exit-Planung" 
    }, 
    bullets: [
      { text: { en: "Reactive Exit Planning: Start preparing 6-12 months before exit (vs. day one for AI-native companies)", de: "Reaktive Exit-Planung: Vorbereitung beginnt 6-12 Monate vor Exit (vs. Tag eins bei AI-native Unternehmen)" }, icon: "Clock" },
      { text: { en: "Valuation Gap: Leave 30-50% of valuation on table (vs. 0-10% for AI-native companies)", de: "Bewertungslücke: 30-50% der Bewertung wird verschenkt (vs. 0-10% bei AI-native Unternehmen)" }, icon: "TrendingDown" },
      { text: { en: "Due Diligence Time: Average 6-9 months (vs. 2-3 months for AI-native companies)", de: "Due Diligence Zeit: Durchschnittlich 6-9 Monate (vs. 2-3 Monate bei AI-native Unternehmen)" }, icon: "Calendar" },
      { text: { en: "M&A Integration: 70% of deals fail to achieve synergies (vs. 90% success for AI-native)", de: "M&A Integration: 70% der Deals erreichen keine Synergien (vs. 90% Erfolg bei AI-native)" }, icon: "AlertTriangle" },
    ], 
    metrics: [
      { label: { en: "Exit Planning", de: "Exit-Planung" }, value: "Reactive", trend: "down" },
      { label: { en: "Valuation Gap", de: "Bewertungslücke" }, value: "30-50%", trend: "up" },
      { label: { en: "Due Diligence", de: "Due Diligence" }, value: "6-9 mo", trend: "up" },
      { label: { en: "M&A Success", de: "M&A Erfolg" }, value: "30%", trend: "down" },
    ] 
  },
  framework: { 
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" }, 
    subtitle: { 
      en: "How AI-native companies build exit and M&A readiness that maximizes valuation", 
      de: "Wie AI-native Unternehmen Exit- und M&A-Bereitschaft aufbauen, die Bewertungen maximiert" 
    }, 
    items: [
      {
        id: "valuation-optimization",
        icon: "TrendingUp",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "Valuation Optimization & Value Creation", de: "Valuation Optimization & Value Creation" },
        subtitle: { en: "Systematic value creation to maximize exit valuation", de: "Systematische Wertschöpfung zur Maximierung der Exit-Bewertung" },
        description: { 
          en: "Build a comprehensive valuation framework with clear drivers, multiples benchmarking, and a value creation plan that optimizes financial metrics, strategic positioning, and AI-powered valuation intelligence.", 
          de: "Baue ein umfassendes Bewertungsframework mit klaren Treibern, Multiples-Benchmarking und einem Wertschöpfungsplan, der finanzielle Kennzahlen, strategische Positionierung und AI-gestützte Bewertungsintelligenz optimiert." 
        },
        metrics: [
          { label: { en: "Exit Valuation", de: "Exit-Bewertung" }, value: "+200-400%" },
          { label: { en: "Valuation Multiple", de: "Bewertungsmultiple" }, value: "+50-100%" },
        ],
        actions: [
          { en: "Valuation Framework (Drivers, Multiples, Benchmarking)", de: "Bewertungsframework (Treiber, Multiples, Benchmarking)" },
          { en: "Value Creation Plan (Strategic Initiatives, Growth Levers)", de: "Wertschöpfungsplan (Strategische Initiativen, Wachstumshebel)" },
          { en: "Financial Optimization (Unit Economics, Rule of 40)", de: "Finanzielle Optimierung (Unit Economics, Rule of 40)" },
          { en: "Strategic Positioning (Market Position, Competitive Moats)", de: "Strategische Positionierung (Marktposition, Wettbewerbsvorteile)" },
          { en: "AI-Powered Valuation (Predictive Models, Scenario Analysis)", de: "AI-Powered Valuation (Prognosemodelle, Szenarioanalyse)" },
        ],
      },
      {
        id: "due-diligence",
        icon: "FileSearch",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Due Diligence Preparation & Readiness", de: "Due Diligence Preparation & Readiness" },
        subtitle: { en: "Proactive due diligence preparation to accelerate exit", de: "Proaktive Due Diligence Vorbereitung zur Beschleunigung des Exits" },
        description: { 
          en: "Build a comprehensive data room with all documents organized, remediate red flags before due diligence, and prepare for smart Q&A with AI-powered due diligence automation.", 
          de: "Baue einen umfassenden Datenraum mit allen organisierten Dokumenten, behebe Red Flags vor der Due Diligence und bereite dich auf intelligente Q&A mit AI-gestützter Due Diligence Automation vor." 
        },
        metrics: [
          { label: { en: "Due Diligence Time", de: "Due Diligence Zeit" }, value: "-60%" },
          { label: { en: "Deal Success Rate", de: "Deal-Erfolgsrate" }, value: "+50%" },
        ],
        actions: [
          { en: "Due Diligence Checklist (Financial, Legal, Technical, Commercial, HR)", de: "Due Diligence Checkliste (Finanzen, Legal, Technik, Commercial, HR)" },
          { en: "Data Room Preparation (Documents, Contracts, Financials, IP)", de: "Datenraum-Vorbereitung (Dokumente, Verträge, Finanzen, IP)" },
          { en: "Red Flag Remediation (Identify and fix before due diligence)", de: "Red Flag Behebung (Identifizieren und beheben vor Due Diligence)" },
          { en: "Due Diligence Simulation (Mock due diligence, Q&A preparation)", de: "Due Diligence Simulation (Mock Due Diligence, Q&A-Vorbereitung)" },
          { en: "AI-Powered Due Diligence (Auto-Document Collection, Smart Q&A)", de: "AI-Powered Due Diligence (Auto-Dokumentensammlung, Intelligente Q&A)" },
        ],
      },
      {
        id: "exit-strategy",
        icon: "Timer",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Exit Strategy & Timing", de: "Exit Strategy & Timing" },
        subtitle: { en: "Strategic exit planning and optimal timing", de: "Strategische Exit-Planung und optimales Timing" },
        description: { 
          en: "Define exit options (IPO, Strategic, PE, Secondary), optimize timing based on market conditions and company readiness, and execute a professional exit process.", 
          de: "Definiere Exit-Optionen (IPO, Strategic, PE, Secondary), optimiere das Timing basierend auf Marktbedingungen und Unternehmensbereitschaft und führe einen professionellen Exit-Prozess durch." 
        },
        metrics: [
          { label: { en: "Exit Valuation", de: "Exit-Bewertung" }, value: "+50-100%" },
          { label: { en: "Exit Success Rate", de: "Exit-Erfolgsrate" }, value: "+100%" },
        ],
        actions: [
          { en: "Exit Options Analysis (IPO, Strategic, PE, Secondary)", de: "Exit-Optionen Analyse (IPO, Strategic, PE, Secondary)" },
          { en: "Exit Timing (Market Conditions, Company Readiness, Windows)", de: "Exit-Timing (Marktbedingungen, Unternehmensbereitschaft, Fenster)" },
          { en: "Exit Process (Banker Selection, Buyer Outreach, Negotiation)", de: "Exit-Prozess (Bankerauswahl, Käuferansprache, Verhandlung)" },
          { en: "Exit Preparation (12-18 month roadmap, value creation)", de: "Exit-Vorbereitung (12-18 Monate Roadmap, Wertschöpfung)" },
          { en: "AI-Powered Exit Timing (Market Prediction, Buyer Intelligence)", de: "AI-Powered Exit-Timing (Marktprognose, Käufer-Intelligence)" },
        ],
      },
      {
        id: "ma-integration",
        icon: "Merge",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "M&A Integration & Post-Merger Success", de: "M&A Integration & Post-Merger Success" },
        subtitle: { en: "Systematic M&A integration to achieve synergies", de: "Systematische M&A-Integration zur Erreichung von Synergien" },
        description: { 
          en: "Plan integration from Day 1 through 100-Day plan, manage cultural integration, execute operational integration, and track synergy realization with AI-powered integration intelligence.", 
          de: "Plane Integration von Tag 1 bis zum 100-Tage-Plan, manage kulturelle Integration, führe operative Integration durch und verfolge Synergierealisation mit AI-gestützter Integrations-Intelligence." 
        },
        metrics: [
          { label: { en: "M&A Success Rate", de: "M&A-Erfolgsrate" }, value: "+100%" },
          { label: { en: "Synergy Realization", de: "Synergierealisation" }, value: "+50%" },
        ],
        actions: [
          { en: "Integration Planning (Day 1 Plan, 100-Day Plan)", de: "Integrationsplanung (Tag 1 Plan, 100-Tage-Plan)" },
          { en: "Cultural Integration (Culture Assessment, Change Management)", de: "Kulturelle Integration (Kulturanalyse, Change Management)" },
          { en: "Operational Integration (Systems, Processes, Teams)", de: "Operative Integration (Systeme, Prozesse, Teams)" },
          { en: "Synergy Realization (Revenue Synergies, Cost Synergies)", de: "Synergierealisation (Umsatzsynergien, Kostensynergien)" },
          { en: "AI-Powered Integration (Risk Detection, Synergy Tracking)", de: "AI-Powered Integration (Risikoerkennung, Synergieverfolgung)" },
        ],
      },
      {
        id: "ai-exit-intelligence",
        icon: "Sparkles",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered Exit Intelligence", de: "AI-Powered Exit Intelligence" },
        subtitle: { en: "AI that continuously optimizes exit and M&A readiness", de: "AI, die Exit- und M&A-Bereitschaft kontinuierlich optimiert" },
        description: { 
          en: "Deploy AI for valuation intelligence, due diligence automation, exit timing prediction, and integration optimization to achieve superior exit outcomes.", 
          de: "Setze AI für Bewertungsintelligenz, Due Diligence Automation, Exit-Timing-Prognose und Integrationsoptimierung ein, um überlegene Exit-Ergebnisse zu erzielen." 
        },
        metrics: [
          { label: { en: "Exit Valuation", de: "Exit-Bewertung" }, value: "+50-100%" },
          { label: { en: "Due Diligence Time", de: "Due Diligence Zeit" }, value: "-60%" },
        ],
        actions: [
          { en: "AI Valuation Intelligence (Predictive Models, Scenario Analysis)", de: "AI Bewertungsintelligenz (Prognosemodelle, Szenarioanalyse)" },
          { en: "AI Due Diligence (Auto-Document Collection, Smart Q&A)", de: "AI Due Diligence (Auto-Dokumentensammlung, Intelligente Q&A)" },
          { en: "AI Exit Timing (Market Prediction, Buyer Intelligence)", de: "AI Exit-Timing (Marktprognose, Käufer-Intelligence)" },
          { en: "AI Integration Intelligence (Risk Detection, Synergy Tracking)", de: "AI Integrations-Intelligence (Risikoerkennung, Synergieverfolgung)" },
          { en: "AI Exit Intelligence (Readiness Scoring, Optimization)", de: "AI Exit-Intelligence (Bereitschaftsbewertung, Optimierung)" },
        ],
      },
    ] 
  },
  bestPractices: { 
    title: { en: "Best Practices", de: "Best Practices" }, 
    categories: [
      {
        category: { en: "Valuation Optimization", de: "Bewertungsoptimierung" },
        items: [
          { do: { en: "Build exit readiness from day one", de: "Baue Exit-Bereitschaft ab Tag eins auf" }, dont: { en: "Start exit prep 6 months before", de: "Beginne Exit-Vorbereitung 6 Monate vorher" } },
          { do: { en: "Track all valuation drivers continuously", de: "Verfolge alle Bewertungstreiber kontinuierlich" }, dont: { en: "Focus only on ARR growth", de: "Fokussiere nur auf ARR-Wachstum" } },
        ],
      },
      {
        category: { en: "Due Diligence", de: "Due Diligence" },
        items: [
          { do: { en: "Maintain always-ready data room", de: "Pflege einen immer bereiten Datenraum" }, dont: { en: "Build data room when asked", de: "Baue Datenraum erst auf Anfrage" } },
          { do: { en: "Run due diligence simulation quarterly", de: "Führe Due Diligence Simulation vierteljährlich durch" }, dont: { en: "Wait for actual due diligence", de: "Warte auf tatsächliche Due Diligence" } },
        ],
      },
    ] 
  },
  roadmap: { 
    title: { en: "90-Day Implementation Roadmap", de: "90-Tage-Implementierungs-Roadmap" }, 
    subtitle: { 
      en: "How to build exit and M&A readiness in 90 days", 
      de: "Wie du Exit- und M&A-Bereitschaft in 90 Tagen aufbaust" 
    }, 
    phases: [
      {
        phase: 1,
        title: { en: "Strategy", de: "Strategie" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Assess current state, design valuation optimization plan, define exit strategy", de: "Aktuellen Stand bewerten, Bewertungsoptimierungsplan entwerfen, Exit-Strategie definieren" },
        deliverables: [
          { en: "Valuation Assessment (Current valuation, drivers, gaps)", de: "Bewertungsanalyse (Aktuelle Bewertung, Treiber, Lücken)" },
          { en: "Value Creation Plan (Strategic initiatives, financial optimization)", de: "Wertschöpfungsplan (Strategische Initiativen, finanzielle Optimierung)" },
          { en: "Due Diligence Checklist (Financial, legal, technical, commercial)", de: "Due Diligence Checkliste (Finanzen, Legal, Technik, Commercial)" },
          { en: "Exit Strategy (Exit options, timing, target valuation)", de: "Exit-Strategie (Exit-Optionen, Timing, Zielbewertung)" },
        ],
        gradient: "from-rose-500 to-red-500",
      },
      {
        phase: 2,
        title: { en: "Setup", de: "Setup" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Build data room, optimize financials, prepare exit materials", de: "Datenraum aufbauen, Finanzen optimieren, Exit-Materialien vorbereiten" },
        deliverables: [
          { en: "Data Room (All documents, contracts, financials organized)", de: "Datenraum (Alle Dokumente, Verträge, Finanzen organisiert)" },
          { en: "Financial Optimization (Unit economics, Rule of 40, profitability)", de: "Finanzielle Optimierung (Unit Economics, Rule of 40, Profitabilität)" },
          { en: "Red Flag Remediation (Identify and fix red flags)", de: "Red Flag Behebung (Red Flags identifizieren und beheben)" },
          { en: "Exit Materials (Pitch deck, financial model, management presentation)", de: "Exit-Materialien (Pitch Deck, Finanzmodell, Management-Präsentation)" },
        ],
        gradient: "from-red-500 to-orange-500",
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Umsetzung" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { en: "Execute value creation plan, maintain data room, monitor exit timing", de: "Wertschöpfungsplan umsetzen, Datenraum pflegen, Exit-Timing überwachen" },
        deliverables: [
          { en: "Value Creation Execution (Execute strategic initiatives, track progress)", de: "Wertschöpfung Umsetzung (Strategische Initiativen umsetzen, Fortschritt verfolgen)" },
          { en: "Data Room Maintenance (Keep data room updated, current)", de: "Datenraum-Pflege (Datenraum aktuell halten)" },
          { en: "Exit Timing Monitoring (Monitor market conditions, optimal timing)", de: "Exit-Timing-Überwachung (Marktbedingungen überwachen, optimales Timing)" },
          { en: "Exit Readiness Tracking (Track exit readiness score, gaps)", de: "Exit-Bereitschafts-Tracking (Exit-Bereitschaftsscore verfolgen, Lücken)" },
        ],
        gradient: "from-orange-500 to-amber-500",
      },
    ] 
  },
  caseStudies: { 
    title: { en: "Real-World Results", de: "Praxisergebnisse" }, 
    subtitle: { 
      en: "How 3 companies transformed their exit and M&A readiness with the 5-component framework", 
      de: "Wie 3 Unternehmen ihre Exit- und M&A-Bereitschaft mit dem 5-Komponenten-Framework transformiert haben" 
    }, 
    cases: [
      {
        company: { en: "Series A SaaS Company", de: "Series A SaaS-Unternehmen" },
        problem: { 
          en: "Exit valuation €60M, need to increase to €150M+ for strategic exit. No systematic exit preparation.", 
          de: "Exit-Bewertung €60M, Ziel €150M+ für strategischen Exit. Keine systematische Exit-Vorbereitung." 
        },
        solution: { 
          en: "Implemented all 5 components with focus on valuation optimization, due diligence preparation, and exit timing.", 
          de: "Alle 5 Komponenten implementiert mit Fokus auf Bewertungsoptimierung, Due Diligence Vorbereitung und Exit-Timing." 
        },
        results: [
          { metric: { en: "Exit Valuation", de: "Exit-Bewertung" }, before: "€60M", after: "€210M", change: "+250%" },
          { metric: { en: "Valuation Multiple", de: "Bewertungsmultiple" }, before: "10x ARR", after: "14x ARR", change: "+40%" },
          { metric: { en: "Due Diligence Time", de: "Due Diligence Zeit" }, before: "6 months", after: "6 weeks", change: "-75%" },
        ],
        timeline: { en: "18 months | Boost + Accelerate", de: "18 Monate | Boost + Accelerate" },
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS-Unternehmen" },
        problem: { 
          en: "Unprepared for due diligence, high risk of deal delays. No data room, no exit materials.", 
          de: "Nicht vorbereitet für Due Diligence, hohes Risiko von Deal-Verzögerungen. Kein Datenraum, keine Exit-Materialien." 
        },
        solution: { 
          en: "Full due diligence preparation with data room, simulation, and AI-powered due diligence automation.", 
          de: "Vollständige Due Diligence Vorbereitung mit Datenraum, Simulation und AI-gestützter Due Diligence Automation." 
        },
        results: [
          { metric: { en: "Due Diligence Time", de: "Due Diligence Zeit" }, before: "6 months", after: "6 weeks", change: "-75%" },
          { metric: { en: "Exit Valuation", de: "Exit-Bewertung" }, before: "€240M expected", after: "€320M", change: "+33%" },
          { metric: { en: "Red Flags", de: "Red Flags" }, before: "5-10 average", after: "0 major", change: "-100%" },
        ],
        timeline: { en: "12 months | Boost + Accelerate", de: "12 Monate | Boost + Accelerate" },
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: { 
          en: "Need to prepare for IPO, maximize valuation. €100M ARR, 500 people.", 
          de: "IPO-Vorbereitung nötig, Bewertung maximieren. €100M ARR, 500 Mitarbeiter." 
        },
        solution: { 
          en: "Comprehensive exit transformation with all 5 components, AI exit intelligence, and IPO preparation.", 
          de: "Umfassende Exit-Transformation mit allen 5 Komponenten, AI Exit-Intelligence und IPO-Vorbereitung." 
        },
        results: [
          { metric: { en: "Exit Valuation", de: "Exit-Bewertung" }, before: "€1.5B expected", after: "€2.5B (25x ARR)", change: "+67%" },
          { metric: { en: "Due Diligence Time", de: "Due Diligence Zeit" }, before: "9 months avg", after: "3 months", change: "-67%" },
          { metric: { en: "Post-IPO Performance", de: "Post-IPO Performance" }, before: "-", after: "+150% Y1", change: "+150%" },
        ],
        timeline: { en: "24 months | Accelerate × 2", de: "24 Monate | Accelerate × 2" },
      },
    ] 
  },
  solutionsConnection: { 
    title: { en: "Ready to Execute? Here's How We Can Help", de: "Bereit zur Umsetzung? So können wir helfen" }, 
    subtitle: { 
      en: "Choose the right engagement model for your timeline and budget", 
      de: "Wähle das richtige Engagement-Modell für deinen Zeitplan und Budget" 
    }, 
    items: [
      {
        type: "assessment",
        name: { en: "VC Due Diligence Simulation", de: "VC Due Diligence Simulation" },
        duration: { en: "2-3 Days", de: "2-3 Tage" },
        price: { en: "€5.9K", de: "€5.9K" },
        outcome: { en: "Full exit readiness assessment, due diligence simulation, 90-day roadmap", de: "Vollständiges Exit-Readiness-Assessment, Due Diligence Simulation, 90-Tage-Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/vc-dd-simulation",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500",
      },
      {
        type: "power-up",
        name: { en: "Exit Readiness Sprint", de: "Exit Readiness Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "Exit Valuation +50-100%, Due Diligence Time -40-60%", de: "Exit-Bewertung +50-100%, Due Diligence Zeit -40-60%" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/board-readiness",
        icon: "Zap",
        color: "bg-orange-500/10 text-orange-500",
      },
      {
        type: "boost",
        name: { en: "Exit Excellence", de: "Exit Excellence" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Exit Valuation +200-400%, Due Diligence Time -60-80%", de: "Exit-Bewertung +200-400%, Due Diligence Zeit -60-80%" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/board-excellence",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500",
      },
      {
        type: "accelerate",
        name: { en: "Accelerate: AI-Native Exit", de: "Accelerate: AI-Native Exit" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full exit transformation, AI Maturity Level 3, Exit Valuation +200-400%", de: "Vollständige Exit-Transformation, AI Maturity Level 3, Exit-Bewertung +200-400%" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/exit-readiness",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500",
      },
    ]
  },
  whoThisIsFor: { 
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" }, 
    subtitle: { 
      en: "This playbook is designed for leaders preparing for exit or M&A", 
      de: "Dieses Playbook ist für Führungskräfte konzipiert, die sich auf Exit oder M&A vorbereiten" 
    }, 
    icp: { 
      en: "Series A-C SaaS companies preparing for exit within 12-36 months", 
      de: "Series A-C SaaS-Unternehmen, die sich auf Exit innerhalb von 12-36 Monaten vorbereiten" 
    }, 
    personas: [
      {
        icon: "User",
        role: { en: "CEOs", de: "CEOs" },
        pain: { en: "Need to maximize exit valuation and prepare for exit", de: "Müssen Exit-Bewertung maximieren und Exit vorbereiten" },
        outcome: { en: "Clear exit strategy and value creation plan", de: "Klare Exit-Strategie und Wertschöpfungsplan" },
        color: "rose",
      },
      {
        icon: "Users",
        role: { en: "Board Members", de: "Board Members" },
        pain: { en: "Need to optimize exit strategy and timing", de: "Müssen Exit-Strategie und Timing optimieren" },
        outcome: { en: "Strategic oversight and exit timing optimization", de: "Strategische Aufsicht und Exit-Timing-Optimierung" },
        color: "red",
      },
      {
        icon: "Briefcase",
        role: { en: "VCs & Investors", de: "VCs & Investoren" },
        pain: { en: "Need portfolio exit readiness and valuation optimization", de: "Brauchen Portfolio Exit-Bereitschaft und Bewertungsoptimierung" },
        outcome: { en: "Portfolio-wide exit readiness framework", de: "Portfolio-weites Exit-Bereitschafts-Framework" },
        color: "orange",
      },
      {
        icon: "DollarSign",
        role: { en: "CFOs", de: "CFOs" },
        pain: { en: "Responsible for due diligence and financial optimization", de: "Verantwortlich für Due Diligence und finanzielle Optimierung" },
        outcome: { en: "Always-ready data room and financial optimization", de: "Immer bereiter Datenraum und finanzielle Optimierung" },
        color: "amber",
      },
    ] 
  },
  finalCta: { 
    headline: { en: "Get Started Today", de: "Starte heute" }, 
    subline: { 
      en: "Download the playbook or book a call to discuss your exit strategy", 
      de: "Lade das Playbook herunter oder buche einen Call, um deine Exit-Strategie zu besprechen" 
    }, 
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-Seiten Playbook mit Vorlagen" },
      { en: "3 real-world case studies", de: "3 echte Fallstudien" },
      { en: "90-day implementation roadmap", de: "90-Tage-Implementierungs-Roadmap" },
    ], 
    bookingUrl: "https://scalingx.fillout.com/inflection-call", 
    downloadUrl: "#" 
  }
};
