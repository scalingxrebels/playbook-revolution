import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('portfolio/portfolio-excellence')!;

export const portfolioExcellenceData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Portfolio Excellence · Portfolio", de: "Portfolio Excellence · Portfolio" },
    title: "Portfolio Excellence Playbook",
    subtitle: { 
      en: "How to transform portfolio performance with AI-native operations", 
      de: "Wie du Portfolio-Performance mit AI-native Operations transformierst" 
    },
    description: { 
      en: "Traditional portfolio management is reactive. VCs/PEs manage portfolios manually, portfolio companies operate independently, and value creation is ad-hoc. The result? 70% of portfolio companies underperform, portfolio valuation is 30-50% below potential, and LP returns suffer.\n\nAI-native VCs/PEs use a different playbook. They leverage the 5-component framework to increase portfolio valuation by 200-400%, achieve 3-5x faster growth, and deliver top-quartile LP returns. They transform portfolios systematically, not reactively.\n\nThis playbook gives you the exact framework used by top-quartile VCs/PEs to build world-class portfolio operations.", 
      de: "Traditionelles Portfolio-Management ist reaktiv. VCs/PEs verwalten Portfolios manuell, Portfolio-Unternehmen arbeiten unabhängig, und Wertschöpfung erfolgt ad-hoc. Das Ergebnis? 70% der Portfolio-Unternehmen underperformen, Portfolio-Bewertungen liegen 30-50% unter dem Potenzial, und LP-Returns leiden.\n\nAI-native VCs/PEs nutzen ein anderes Playbook. Sie nutzen das 5-Komponenten-Framework, um Portfolio-Bewertungen um 200-400% zu steigern, 3-5x schnelleres Wachstum zu erzielen, und Top-Quartil LP-Returns zu liefern.\n\nDieses Playbook gibt dir das exakte Framework, das Top-Quartil VCs/PEs nutzen, um erstklassige Portfolio-Operations aufzubauen." 
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    gradient: "from-purple-500 to-indigo-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "70% of portfolio companies underperform. Portfolio valuation is 30-50% below potential. Value creation is ad-hoc and reactive. Portfolio operations are manual and inefficient.", 
        de: "70% der Portfolio-Unternehmen underperformen. Portfolio-Bewertungen liegen 30-50% unter dem Potenzial. Wertschöpfung ist ad-hoc und reaktiv. Portfolio-Operations sind manuell und ineffizient." 
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Portfolio excellence is the foundation for top-quartile LP returns. Without systematic portfolio management, you leave 30-50% of value on the table.", 
        de: "Portfolio-Exzellenz ist die Grundlage für Top-Quartil LP-Returns. Ohne systematisches Portfolio-Management lässt du 30-50% des Wertes liegen." 
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The 5-component framework: Portfolio Assessment & Scoring, Portfolio Transformation & Value Creation, Portfolio Operations & Synergies, Portfolio Intelligence & Reporting, and AI-Powered Portfolio Excellence.", 
        de: "Das 5-Komponenten-Framework: Portfolio Assessment & Scoring, Portfolio Transformation & Value Creation, Portfolio Operations & Synergies, Portfolio Intelligence & Reporting, und AI-Powered Portfolio Excellence." 
      } 
    }
  },
  problem: {
    title: { en: "Why Traditional Portfolio Management is Broken", de: "Warum traditionelles Portfolio-Management nicht funktioniert" },
    subtitle: { 
      en: "The gap between traditional and AI-native portfolio management is widening", 
      de: "Die Kluft zwischen traditionellem und AI-native Portfolio-Management wird größer" 
    },
    bullets: [
      { text: { en: "Portfolio Performance: 70% of companies underperform (vs. 30% for AI-native)", de: "Portfolio-Performance: 70% der Unternehmen underperformen (vs. 30% bei AI-native)" }, icon: "TrendingDown" },
      { text: { en: "Portfolio Valuation: 30-50% below potential (vs. 0-10% for AI-native)", de: "Portfolio-Bewertung: 30-50% unter Potenzial (vs. 0-10% bei AI-native)" }, icon: "DollarSign" },
      { text: { en: "Value Creation: Ad-hoc, reactive approach (vs. systematic for AI-native)", de: "Wertschöpfung: Ad-hoc, reaktiver Ansatz (vs. systematisch bei AI-native)" }, icon: "RefreshCw" },
      { text: { en: "Portfolio Operations: Manual, inefficient (vs. AI-powered for AI-native)", de: "Portfolio-Operations: Manuell, ineffizient (vs. AI-gestützt bei AI-native)" }, icon: "Settings" }
    ],
    metrics: [
      { label: { en: "Companies Underperforming", de: "Unternehmen mit Underperformance" }, value: "70%", trend: "down" },
      { label: { en: "Valuation Gap", de: "Bewertungslücke" }, value: "30-50%", trend: "up" },
      { label: { en: "Value Creation", de: "Wertschöpfung" }, value: "Ad-hoc", trend: "down" },
      { label: { en: "Operations", de: "Operations" }, value: "Manual", trend: "down" }
    ]
  },
  framework: {
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" },
    subtitle: { 
      en: "How AI-native VCs/PEs build portfolio excellence that delivers top-quartile returns", 
      de: "Wie AI-native VCs/PEs Portfolio-Exzellenz aufbauen, die Top-Quartil Returns liefert" 
    },
    items: [
      {
        id: "portfolio-assessment",
        icon: "ClipboardCheck",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        title: { en: "Portfolio Assessment & Scoring (θ_INDEX)", de: "Portfolio Assessment & Scoring (θ_INDEX)" },
        subtitle: { en: "Systematic portfolio assessment using θ_index framework", de: "Systematisches Portfolio-Assessment mit θ_index Framework" },
        description: { 
          en: "Score all portfolio companies using the θ_index framework (4 Capabilities × 8 Dimensions × 3 AI Maturity Levels). You can't improve what you don't measure.", 
          de: "Alle Portfolio-Unternehmen mit dem θ_index Framework scoren (4 Capabilities × 8 Dimensionen × 3 AI Maturity Levels). Was du nicht misst, kannst du nicht verbessern." 
        },
        metrics: [
          { label: { en: "Portfolio Visibility", de: "Portfolio-Sichtbarkeit" }, value: "+100%" },
          { label: { en: "Assessment Time", de: "Assessment-Zeit" }, value: "-90%" }
        ],
        actions: [
          { en: "θ_index Framework (4 Capabilities × 8 Dimensions × 3 AI Maturity Levels)", de: "θ_index Framework (4 Capabilities × 8 Dimensionen × 3 AI Maturity Levels)" },
          { en: "Portfolio Scoring (Score all portfolio companies, identify gaps)", de: "Portfolio Scoring (Alle Portfolio-Unternehmen scoren, Gaps identifizieren)" },
          { en: "Portfolio Benchmarking (Compare to best-in-class, identify opportunities)", de: "Portfolio Benchmarking (Mit Best-in-Class vergleichen, Opportunities identifizieren)" },
          { en: "Portfolio Prioritization (Prioritize by potential, focus resources)", de: "Portfolio-Priorisierung (Nach Potenzial priorisieren, Ressourcen fokussieren)" },
          { en: "AI-Powered Portfolio Assessment (Auto-Scoring via LASR.io, 12 min/company)", de: "AI-Powered Portfolio Assessment (Auto-Scoring via LASR.io, 12 Min/Unternehmen)" }
        ]
      },
      {
        id: "portfolio-transformation",
        icon: "TrendingUp",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "Portfolio Transformation & Value Creation", de: "Portfolio Transformation & Value Creation" },
        subtitle: { en: "Systematic portfolio transformation to maximize value creation", de: "Systematische Portfolio-Transformation zur Maximierung der Wertschöpfung" },
        description: { 
          en: "Transform portfolios systematically with value creation plans, playbooks, and execution tracking. Ad-hoc value creation leaves 30-50% on the table.", 
          de: "Portfolios systematisch transformieren mit Value Creation Plans, Playbooks und Execution Tracking. Ad-hoc Wertschöpfung lässt 30-50% liegen." 
        },
        metrics: [
          { label: { en: "Portfolio Valuation", de: "Portfolio-Bewertung" }, value: "+200-400%" },
          { label: { en: "Growth Rate", de: "Wachstumsrate" }, value: "+3-5x" }
        ],
        actions: [
          { en: "Portfolio Strategy (Vision, transformation roadmap, resource allocation)", de: "Portfolio-Strategie (Vision, Transformations-Roadmap, Ressourcenallokation)" },
          { en: "Value Creation Plans (Company-specific plans, KPIs, milestones)", de: "Value Creation Plans (Unternehmens-spezifische Pläne, KPIs, Meilensteine)" },
          { en: "Portfolio Playbooks (8 Playbooks: GTM, Product, Ops, Finance, Talent, CS, Data, Governance)", de: "Portfolio Playbooks (8 Playbooks: GTM, Product, Ops, Finance, Talent, CS, Data, Governance)" },
          { en: "Portfolio Execution (Execute transformation, track progress, adjust plans)", de: "Portfolio-Execution (Transformation ausführen, Fortschritt tracken, Pläne anpassen)" },
          { en: "AI-Powered Portfolio Transformation (Predictive Value Creation, Smart Recommendations)", de: "AI-Powered Portfolio Transformation (Predictive Value Creation, Smart Recommendations)" }
        ]
      },
      {
        id: "portfolio-operations",
        icon: "Network",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Portfolio Operations & Synergies", de: "Portfolio Operations & Synergies" },
        subtitle: { en: "Systematic portfolio operations to maximize synergies", de: "Systematische Portfolio-Operations zur Maximierung von Synergien" },
        description: { 
          en: "Build portfolio operations that unlock cross-portfolio synergies. Portfolio companies operating independently miss critical synergy opportunities.", 
          de: "Portfolio-Operations aufbauen, die Cross-Portfolio Synergien erschließen. Unabhängig operierende Portfolio-Unternehmen verpassen kritische Synergien." 
        },
        metrics: [
          { label: { en: "Portfolio Synergies", de: "Portfolio-Synergien" }, value: "+50-100%" },
          { label: { en: "Portfolio Efficiency", de: "Portfolio-Effizienz" }, value: "+30-50%" }
        ],
        actions: [
          { en: "Portfolio Operations (Shared services, best practices, cross-portfolio collaboration)", de: "Portfolio-Operations (Shared Services, Best Practices, Cross-Portfolio Collaboration)" },
          { en: "Portfolio Synergies (Cross-sell, co-marketing, product integration, resource sharing)", de: "Portfolio-Synergien (Cross-Sell, Co-Marketing, Produktintegration, Resource Sharing)" },
          { en: "Portfolio Community (Events, peer learning, expert sessions, network effects)", de: "Portfolio-Community (Events, Peer Learning, Expert Sessions, Network Effects)" },
          { en: "Portfolio Support (Operational support, strategic advice, crisis management)", de: "Portfolio-Support (Operational Support, strategische Beratung, Krisenmanagement)" },
          { en: "AI-Powered Portfolio Operations (Smart Synergy Detection, Auto-Collaboration)", de: "AI-Powered Portfolio Operations (Smart Synergy Detection, Auto-Collaboration)" }
        ]
      },
      {
        id: "portfolio-intelligence",
        icon: "BarChart3",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Portfolio Intelligence & Reporting", de: "Portfolio Intelligence & Reporting" },
        subtitle: { en: "Real-time portfolio intelligence and automated reporting", de: "Echtzeit Portfolio-Intelligence und automatisiertes Reporting" },
        description: { 
          en: "Build real-time portfolio dashboards and automated reporting. Manual portfolio reporting delivers outdated insights.", 
          de: "Echtzeit Portfolio-Dashboards und automatisiertes Reporting aufbauen. Manuelles Portfolio-Reporting liefert veraltete Insights." 
        },
        metrics: [
          { label: { en: "Portfolio Visibility", de: "Portfolio-Sichtbarkeit" }, value: "+100%" },
          { label: { en: "Reporting Time", de: "Reporting-Zeit" }, value: "-80%" }
        ],
        actions: [
          { en: "Portfolio Dashboard (Real-time metrics, KPIs, alerts)", de: "Portfolio Dashboard (Echtzeit-Metriken, KPIs, Alerts)" },
          { en: "Portfolio Reporting (Automated LP reports, board reports, company reports)", de: "Portfolio-Reporting (Automatisierte LP-Reports, Board-Reports, Company-Reports)" },
          { en: "Portfolio Analytics (Trends, benchmarking, cohort analysis, predictive analytics)", de: "Portfolio-Analytics (Trends, Benchmarking, Kohorten-Analyse, Predictive Analytics)" },
          { en: "Portfolio Alerts (Risk alerts, opportunity alerts, performance alerts)", de: "Portfolio-Alerts (Risiko-Alerts, Opportunity-Alerts, Performance-Alerts)" },
          { en: "AI-Powered Portfolio Intelligence (Predictive Insights, Smart Recommendations)", de: "AI-Powered Portfolio Intelligence (Predictive Insights, Smart Recommendations)" }
        ]
      },
      {
        id: "ai-portfolio-excellence",
        icon: "Sparkles",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered Portfolio Excellence", de: "AI-Powered Portfolio Excellence" },
        subtitle: { en: "AI that continuously optimizes portfolio operations", de: "KI, die Portfolio-Operations kontinuierlich optimiert" },
        description: { 
          en: "Deploy AI across all portfolio operations for continuous optimization. Manual portfolio management falls behind competitors using AI.", 
          de: "KI über alle Portfolio-Operations für kontinuierliche Optimierung einsetzen. Manuelles Portfolio-Management fällt hinter Wettbewerber zurück, die KI nutzen." 
        },
        metrics: [
          { label: { en: "Portfolio Efficiency", de: "Portfolio-Effizienz" }, value: "+300%" },
          { label: { en: "Portfolio Valuation", de: "Portfolio-Bewertung" }, value: "+50-100%" }
        ],
        actions: [
          { en: "AI Portfolio Assessment (Auto-Scoring, Predictive Analytics, Risk Detection)", de: "AI Portfolio Assessment (Auto-Scoring, Predictive Analytics, Risk Detection)" },
          { en: "AI Portfolio Transformation (Predictive Value Creation, Smart Recommendations)", de: "AI Portfolio Transformation (Predictive Value Creation, Smart Recommendations)" },
          { en: "AI Portfolio Operations (Smart Synergy Detection, Auto-Collaboration)", de: "AI Portfolio Operations (Smart Synergy Detection, Auto-Collaboration)" },
          { en: "AI Portfolio Intelligence (Predictive Insights, Smart Alerts, Auto-Reports)", de: "AI Portfolio Intelligence (Predictive Insights, Smart Alerts, Auto-Reports)" },
          { en: "AI Portfolio Excellence (Portfolio Optimization, Continuous Improvement)", de: "AI Portfolio Excellence (Portfolio-Optimierung, Continuous Improvement)" }
        ]
      }
    ]
  },
  bestPractices: {
    title: { en: "Best Practices", de: "Best Practices" },
    categories: [
      {
        category: { en: "Assessment", de: "Assessment" },
        items: [
          { do: { en: "Score all portfolio companies with θ_index within first 30 days", de: "Alle Portfolio-Unternehmen mit θ_index innerhalb der ersten 30 Tage scoren" }, dont: { en: "Wait for quarterly reviews to assess companies", de: "Auf quartalsweise Reviews warten, um Unternehmen zu bewerten" } },
          { do: { en: "Benchmark against best-in-class to identify gaps", de: "Mit Best-in-Class benchmarken, um Gaps zu identifizieren" }, dont: { en: "Compare only within your portfolio", de: "Nur innerhalb des eigenen Portfolios vergleichen" } },
          { do: { en: "Prioritize by potential (high potential + low score = high priority)", de: "Nach Potenzial priorisieren (hohes Potenzial + niedriger Score = hohe Priorität)" }, dont: { en: "Spread resources evenly across all companies", de: "Ressourcen gleichmäßig über alle Unternehmen verteilen" } }
        ]
      },
      {
        category: { en: "Transformation", de: "Transformation" },
        items: [
          { do: { en: "Create company-specific value creation plans with clear KPIs", de: "Unternehmens-spezifische Value Creation Plans mit klaren KPIs erstellen" }, dont: { en: "Use one-size-fits-all transformation approaches", de: "One-size-fits-all Transformationsansätze verwenden" } },
          { do: { en: "Deploy portfolio playbooks for consistency across companies", de: "Portfolio Playbooks für Konsistenz über alle Unternehmen einsetzen" }, dont: { en: "Let each company reinvent the wheel", de: "Jedes Unternehmen das Rad neu erfinden lassen" } },
          { do: { en: "Track progress monthly, adjust quarterly", de: "Fortschritt monatlich tracken, quartalsweise anpassen" }, dont: { en: "Set-and-forget transformation plans", de: "Set-and-Forget Transformationspläne" } }
        ]
      },
      {
        category: { en: "Operations", de: "Operations" },
        items: [
          { do: { en: "Identify cross-portfolio synergies proactively", de: "Cross-Portfolio Synergien proaktiv identifizieren" }, dont: { en: "Wait for companies to discover synergies on their own", de: "Warten, bis Unternehmen Synergien selbst entdecken" } },
          { do: { en: "Host quarterly portfolio events for peer learning", de: "Quartalsweise Portfolio-Events für Peer Learning veranstalten" }, dont: { en: "Keep portfolio companies siloed", de: "Portfolio-Unternehmen isoliert halten" } },
          { do: { en: "Consolidate vendors for better terms", de: "Vendors konsolidieren für bessere Konditionen" }, dont: { en: "Let each company negotiate independently", de: "Jedes Unternehmen unabhängig verhandeln lassen" } }
        ]
      }
    ]
  },
  roadmap: {
    title: { en: "How to Implement (90-Day Roadmap)", de: "Wie du implementierst (90-Tage-Roadmap)" },
    subtitle: { 
      en: "A phased approach to portfolio excellence", 
      de: "Ein phasenbasierter Ansatz für Portfolio-Exzellenz" 
    },
    phases: [
      {
        phase: 1,
        title: { en: "Assessment", de: "Assessment" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { 
          en: "Assess all portfolio companies, score with θ_index, prioritize", 
          de: "Alle Portfolio-Unternehmen bewerten, mit θ_index scoren, priorisieren" 
        },
        deliverables: [
          { en: "Portfolio Assessment (θ_index scores for all companies)", de: "Portfolio Assessment (θ_index Scores für alle Unternehmen)" },
          { en: "Portfolio Benchmarking (Compare to best-in-class)", de: "Portfolio Benchmarking (Mit Best-in-Class vergleichen)" },
          { en: "Portfolio Prioritization (High potential + low score = high priority)", de: "Portfolio-Priorisierung (Hohes Potenzial + niedriger Score = hohe Priorität)" },
          { en: "Portfolio Strategy Deck (Vision, transformation roadmap)", de: "Portfolio Strategy Deck (Vision, Transformations-Roadmap)" }
        ],
        gradient: "from-cyan-500 to-blue-500"
      },
      {
        phase: 2,
        title: { en: "Planning", de: "Planung" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { 
          en: "Create value creation plans, portfolio playbooks, operations plan", 
          de: "Value Creation Plans, Portfolio Playbooks, Operations Plan erstellen" 
        },
        deliverables: [
          { en: "Value Creation Plans (Per company, 3-5 initiatives, KPIs)", de: "Value Creation Plans (Pro Unternehmen, 3-5 Initiativen, KPIs)" },
          { en: "Portfolio Playbooks (8 playbooks for key domains)", de: "Portfolio Playbooks (8 Playbooks für Kernbereiche)" },
          { en: "Portfolio Operations Plan (Shared services, synergies)", de: "Portfolio Operations Plan (Shared Services, Synergien)" },
          { en: "Portfolio Dashboard (Real-time metrics, KPIs)", de: "Portfolio Dashboard (Echtzeit-Metriken, KPIs)" }
        ],
        gradient: "from-purple-500 to-violet-500"
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Execution" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { 
          en: "Execute transformations, track progress, optimize portfolio operations", 
          de: "Transformationen ausführen, Fortschritt tracken, Portfolio-Operations optimieren" 
        },
        deliverables: [
          { en: "Portfolio Transformations (Execute value creation plans)", de: "Portfolio-Transformationen (Value Creation Plans ausführen)" },
          { en: "Portfolio Operations (Shared services, synergies, events)", de: "Portfolio-Operations (Shared Services, Synergien, Events)" },
          { en: "Portfolio Tracking (Monthly progress reviews)", de: "Portfolio-Tracking (Monatliche Progress Reviews)" },
          { en: "Portfolio Optimization Playbook (Lessons learned)", de: "Portfolio Optimization Playbook (Lessons Learned)" }
        ],
        gradient: "from-pink-500 to-rose-500"
      }
    ]
  },
  caseStudies: {
    title: { en: "Real-World Results", de: "Echte Ergebnisse" },
    subtitle: { 
      en: "How 3 VCs/PEs transformed their portfolio performance with the 5-component framework", 
      de: "Wie 3 VCs/PEs ihre Portfolio-Performance mit dem 5-Komponenten-Framework transformiert haben" 
    },
    cases: [
      {
        company: { en: "Series A-B VC (Portfolio Valuation +250%)", de: "Series A-B VC (Portfolio-Bewertung +250%)" },
        problem: { 
          en: "Portfolio of 15 Series A-B SaaS companies underperforming, with 70% below expectations and significant LP pressure.", 
          de: "Portfolio von 15 Series A-B SaaS Unternehmen underperformt, 70% unter Erwartungen und erheblicher LP-Druck." 
        },
        solution: { 
          en: "Deployed all 5 components: Portfolio Assessment, Transformation, Operations, Intelligence, and AI Portfolio Excellence.", 
          de: "Alle 5 Komponenten eingesetzt: Portfolio Assessment, Transformation, Operations, Intelligence und AI Portfolio Excellence." 
        },
        results: [
          { metric: { en: "Portfolio Valuation", de: "Portfolio-Bewertung" }, before: "€200M", after: "€700M", change: "+250%" },
          { metric: { en: "θ_index Score", de: "θ_index Score" }, before: "0.35", after: "0.72", change: "+106%" },
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "15%", after: "32%", change: "+113%" },
          { metric: { en: "Companies at Risk", de: "At-Risk Unternehmen" }, before: "70%", after: "20%", change: "-71%" }
        ],
        timeline: { en: "18 months | Portfolio Assessment + Transformation", de: "18 Monate | Portfolio Assessment + Transformation" }
      },
      {
        company: { en: "Series B-C PE (Portfolio IRR 35%)", de: "Series B-C PE (Portfolio IRR 35%)" },
        problem: { 
          en: "Portfolio of 10 Series B-C SaaS companies needed to increase IRR from 18% to 30%+ for LP commitments.", 
          de: "Portfolio von 10 Series B-C SaaS Unternehmen musste IRR von 18% auf 30%+ steigern für LP-Commitments." 
        },
        solution: { 
          en: "Aggressive value creation plans with AI Portfolio Intelligence for predictive insights and optimization.", 
          de: "Aggressive Value Creation Plans mit AI Portfolio Intelligence für Predictive Insights und Optimierung." 
        },
        results: [
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "18%", after: "35%", change: "+94%" },
          { metric: { en: "Portfolio Valuation", de: "Portfolio-Bewertung" }, before: "€500M", after: "€1.5B", change: "+200%" },
          { metric: { en: "Rule of 40", de: "Rule of 40" }, before: "28", after: "62", change: "+121%" },
          { metric: { en: "θ_index Score", de: "θ_index Score" }, before: "0.42", after: "0.81", change: "+93%" }
        ],
        timeline: { en: "24 months | Portfolio Transformation + AI Intelligence", de: "24 Monate | Portfolio Transformation + AI Intelligence" }
      },
      {
        company: { en: "Multi-Stage VC (4-Hour Reporting)", de: "Multi-Stage VC (4-Stunden Reporting)" },
        problem: { 
          en: "Portfolio of 30 Series A-D companies needed to scale operations 3x without proportionally increasing team size.", 
          de: "Portfolio von 30 Series A-D Unternehmen musste Operations 3x skalieren ohne proportionale Team-Vergrößerung." 
        },
        solution: { 
          en: "AI-powered portfolio intelligence with LASR.io for automated assessment and reporting across all companies.", 
          de: "AI-gestützte Portfolio Intelligence mit LASR.io für automatisiertes Assessment und Reporting über alle Unternehmen." 
        },
        results: [
          { metric: { en: "Portfolio Size", de: "Portfolio-Größe" }, before: "30", after: "45", change: "+50%" },
          { metric: { en: "Team Size", de: "Team-Größe" }, before: "8", after: "10", change: "+25%" },
          { metric: { en: "Reporting Time", de: "Reporting-Zeit" }, before: "40h/Q", after: "4h/Q", change: "-90%" },
          { metric: { en: "Portfolio Efficiency", de: "Portfolio-Effizienz" }, before: "Base", after: "+400%", change: "+400%" }
        ],
        timeline: { en: "24 months | Portfolio Transformation + LASR.io", de: "24 Monate | Portfolio Transformation + LASR.io" }
      }
    ]
  },
  solutionsConnection: {
    title: { en: "Ready to Execute? Here's How We Can Help", de: "Bereit zur Umsetzung? So können wir helfen" },
    subtitle: { 
      en: "Choose the right engagement model for your portfolio size and timeline", 
      de: "Wähle das richtige Engagement-Modell für deine Portfolio-Größe und Timeline" 
    },
    items: [
      {
        type: "boost",
        name: { en: "Portfolio Assessment", de: "Portfolio Assessment" },
        duration: { en: "4-6 Weeks", de: "4-6 Wochen" },
        price: { en: "€50K-€150K", de: "€50K-€150K" },
        outcome: { 
          en: "θ_index scoring for all companies, benchmarking, prioritization, and portfolio strategy deck.", 
          de: "θ_index Scoring für alle Unternehmen, Benchmarking, Priorisierung und Portfolio Strategy Deck." 
        },
        cta: { en: "Start Assessment", de: "Assessment starten" },
        link: "/solutions/portfolio-assessment",
        icon: "ClipboardCheck",
        color: "cyan"
      },
      {
        type: "accelerate",
        name: { en: "Portfolio Transformation", de: "Portfolio Transformation" },
        duration: { en: "12-24 Months", de: "12-24 Monate" },
        price: { en: "€360K-€720K", de: "€360K-€720K" },
        outcome: { 
          en: "Full portfolio transformation with all 5 components, value creation plans, playbooks, and AI integration.", 
          de: "Volle Portfolio-Transformation mit allen 5 Komponenten, Value Creation Plans, Playbooks und AI-Integration." 
        },
        cta: { en: "Start Transformation", de: "Transformation starten" },
        link: "/solutions/accelerate/portfolio-transformation",
        icon: "TrendingUp",
        color: "green"
      },
      {
        type: "boost",
        name: { en: "Portfolio Excellence", de: "Portfolio Excellence" },
        duration: { en: "Annual", de: "Jährlich" },
        price: { en: "€50K-€200K/year", de: "€50K-€200K/Jahr" },
        outcome: { 
          en: "Ongoing portfolio support with LASR.io access, real-time dashboard, and AI portfolio intelligence.", 
          de: "Laufender Portfolio-Support mit LASR.io Zugang, Echtzeit-Dashboard und AI Portfolio Intelligence." 
        },
        cta: { en: "Start Excellence", de: "Excellence starten" },
        link: "/solutions/boost/portfolio-value",
        icon: "Sparkles",
        color: "purple"
      }
    ]
  },
  whoThisIsFor: {
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" },
    subtitle: { 
      en: "This playbook is designed for VCs, PEs, and portfolio teams", 
      de: "Dieses Playbook ist für VCs, PEs und Portfolio-Teams konzipiert" 
    },
    icp: { 
      en: "VCs and PEs with 10+ portfolio companies seeking to maximize portfolio value and LP returns", 
      de: "VCs und PEs mit 10+ Portfolio-Unternehmen, die Portfolio-Wert und LP-Returns maximieren wollen" 
    },
    personas: [
      {
        icon: "TrendingUp",
        role: { en: "VCs", de: "VCs" },
        pain: { en: "Portfolio companies underperforming against benchmarks", de: "Portfolio-Unternehmen underperformen gegen Benchmarks" },
        outcome: { en: "Top-quartile LP returns with systematic portfolio excellence", de: "Top-Quartil LP-Returns mit systematischer Portfolio-Exzellenz" },
        color: "green"
      },
      {
        icon: "Briefcase",
        role: { en: "PE Partners", de: "PE-Partner" },
        pain: { en: "Need to increase IRR for LP commitments", de: "Müssen IRR für LP-Commitments steigern" },
        outcome: { en: "Portfolio valuation +200-400% with value creation plans", de: "Portfolio-Bewertung +200-400% mit Value Creation Plans" },
        color: "purple"
      },
      {
        icon: "Users",
        role: { en: "Board Members", de: "Board-Mitglieder" },
        pain: { en: "Lack visibility into portfolio company performance", de: "Fehlende Sichtbarkeit in Portfolio-Unternehmen Performance" },
        outcome: { en: "Real-time portfolio dashboard and automated reporting", de: "Echtzeit Portfolio-Dashboard und automatisiertes Reporting" },
        color: "blue"
      },
      {
        icon: "Settings",
        role: { en: "Portfolio Teams", de: "Portfolio-Teams" },
        pain: { en: "Manual portfolio operations don't scale", de: "Manuelle Portfolio-Operations skalieren nicht" },
        outcome: { en: "AI-powered operations handling 3x portfolio with 1.25x team", de: "AI-gestützte Operations für 3x Portfolio mit 1.25x Team" },
        color: "violet"
      }
    ]
  },
  finalCta: {
    headline: { en: "Get Started Today", de: "Starte heute" },
    subline: { 
      en: "Download the playbook or book a call to discuss your portfolio strategy", 
      de: "Lade das Playbook herunter oder buche einen Call, um deine Portfolio-Strategie zu besprechen" 
    },
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-seitiges Playbook mit Templates" },
      { en: "3 real-world case studies", de: "3 echte Case Studies" },
      { en: "90-day implementation roadmap", de: "90-Tage-Implementierungs-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#"
  }
};
