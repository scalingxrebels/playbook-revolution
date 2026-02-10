import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('portfolio-transformation')!;

export const portfolioTransformationData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Portfolio Transformation · Domain Playbook", de: "Portfolio Transformation · Domain Playbook" },
    title: "Portfolio Transformation Playbook",
    subtitle: { 
      en: "How to transform entire portfolios to AI-native at scale", 
      de: "Wie du ganze Portfolios auf AI-native Skalierung transformierst" 
    },
    description: { 
      en: "Most VC/PE firms struggle with portfolio transformation because they focus on individual company improvements instead of portfolio-wide transformation. They invest in one company at a time but don't have a systematic approach to transform the entire portfolio.\n\nThis playbook teaches you the complete framework used by top-tier VCs/PEs to transform 10-30 portfolio companies simultaneously, achieve 3-5x portfolio value increase, and improve portfolio IRR from 15% to 40%+.\n\nYou'll learn:\n• How to assess portfolio maturity across all companies\n• How to identify portfolio-wide bottlenecks and opportunities\n• How to implement Portfolio Excellence framework at scale\n• How to integrate AI into all portfolio companies\n• How to measure progress with Portfolio Maturity Levels\n\nIncludes 1 detailed sub-playbook (Portfolio Excellence), implementation guides, and real-world case studies from leading VC/PE firms.", 
      de: "Die meisten VC/PE-Firmen scheitern an der Portfolio-Transformation, weil sie sich auf einzelne Unternehmensverbesserungen statt auf portfolioweite Transformation konzentrieren. Sie investieren in ein Unternehmen nach dem anderen, haben aber keinen systematischen Ansatz zur Transformation des gesamten Portfolios.\n\nDieses Playbook lehrt dich das vollständige Framework, das Top-Tier VCs/PEs nutzen, um 10-30 Portfolio-Unternehmen gleichzeitig zu transformieren, 3-5x Portfolio-Wertsteigerung zu erzielen und Portfolio-IRR von 15% auf 40%+ zu verbessern.\n\nDu lernst:\n• Wie du Portfolio-Maturity über alle Unternehmen hinweg bewertest\n• Wie du portfolioweite Bottlenecks und Chancen identifizierst\n• Wie du das Portfolio Excellence Framework skalierst\n• Wie du AI in alle Portfolio-Unternehmen integrierst\n• Wie du Fortschritt mit Portfolio Maturity Levels misst\n\nInklusive 1 detailliertem Sub-Playbook (Portfolio Excellence), Implementierungsguides und echten Case Studies von führenden VC/PE-Firmen." 
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "1 Sub-Playbook", de: "1 Sub-Playbook" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "Portfolio Excellence Framework", de: "Portfolio Excellence Framework" },
    ],
    bookingUrl: "https://www.cal.scalingx.io/inflection-call",
    downloadUrl: "#",
    assetId: "playbook-portfolio-transformation",
    gradient: "from-purple-500 to-pink-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "Low Portfolio IRR (15% vs. 40%+), portfolio underperformance (60-80%), manual operations (5-7 days/company/quarter), no systematic transformation approach.", 
        de: "Niedriger Portfolio-IRR (15% vs. 40%+), Portfolio-Underperformance (60-80%), manuelle Operationen (5-7 Tage/Unternehmen/Quartal), kein systematischer Transformationsansatz." 
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Portfolio Transformation requires a systematic approach across all companies. Single company improvements don't scale—portfolio-wide transformation does.", 
        de: "Portfolio Transformation erfordert einen systematischen Ansatz über alle Unternehmen hinweg. Einzelne Unternehmensverbesserungen skalieren nicht—portfolioweite Transformation schon." 
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The Portfolio Transformation Framework with 5 pillars (Assessment, Roadmap, Execution, AI Integration, Optimization) to achieve 3-5x portfolio value.", 
        de: "Das Portfolio Transformation Framework mit 5 Säulen (Assessment, Roadmap, Execution, AI Integration, Optimization) für 3-5x Portfolio-Wertsteigerung." 
      } 
    }
  },
  problem: { 
    title: { en: "Why Most VC/PE Firms Struggle with Portfolio Transformation", de: "Warum die meisten VC/PE-Firmen mit Portfolio Transformation kämpfen" }, 
    subtitle: { 
      en: "The 3 critical failures holding back portfolio performance", 
      de: "Die 3 kritischen Fehler, die Portfolio-Performance zurückhalten" 
    }, 
    bullets: [
      { text: { en: "Low Portfolio Maturity: Companies have low maturity across all 4 capabilities (Strategy, Setup, Execution, Operationalization)", de: "Niedrige Portfolio-Maturity: Unternehmen haben niedrige Reife über alle 4 Capabilities (Strategy, Setup, Execution, Operationalization)" }, icon: "TrendingDown" },
      { text: { en: "No Systematic Approach: Investing in one company at a time, no coordination, no portfolio-wide transformation framework", de: "Kein systematischer Ansatz: In ein Unternehmen nach dem anderen investieren, keine Koordination, kein portfolioweites Transformations-Framework" }, icon: "AlertTriangle" },
      { text: { en: "No AI Maturity Roadmap: No clear path from Level 1 (AI-Powered) to Level 3 (AI-Native) across portfolio", de: "Keine AI Maturity Roadmap: Kein klarer Weg von Level 1 (AI-Powered) zu Level 3 (AI-Native) über das Portfolio" }, icon: "AlertCircle" },
    ], 
    metrics: [
      { label: { en: "Traditional IRR", de: "Traditioneller IRR" }, value: "15%", trend: "down" },
      { label: { en: "AI-Native IRR", de: "AI-Native IRR" }, value: "40%+", trend: "up" },
      { label: { en: "Underperformance", de: "Underperformance" }, value: "60-80%", trend: "down" },
      { label: { en: "Portfolio Value Increase", de: "Portfolio-Wertsteigerung" }, value: "3-5x", trend: "up" },
    ] 
  },
  framework: { 
    title: { en: "The Portfolio Transformation Framework", de: "Das Portfolio Transformation Framework" }, 
    subtitle: { 
      en: "A systematic approach to transform 10-30 portfolio companies to AI-native", 
      de: "Ein systematischer Ansatz, um 10-30 Portfolio-Unternehmen auf AI-native zu transformieren" 
    }, 
    items: [
      {
        id: "portfolio-assessment",
        icon: "ClipboardCheck",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        title: { en: "Portfolio Assessment", de: "Portfolio Assessment" },
        subtitle: { en: "Pillar 1 of 5", de: "Säule 1 von 5" },
        description: { 
          en: "Assess maturity across all portfolio companies using the Portfolio Excellence framework. Score each company on Strategy, Setup, Execution, Operationalization.", 
          de: "Bewerte die Maturity über alle Portfolio-Unternehmen mit dem Portfolio Excellence Framework. Bewerte jedes Unternehmen auf Strategy, Setup, Execution, Operationalization." 
        },
        metrics: [
          { label: { en: "Assessment Coverage", de: "Assessment Coverage" }, value: "100%" },
          { label: { en: "Timeline", de: "Timeline" }, value: "2-4 weeks" },
          { label: { en: "Output", de: "Output" }, value: "Portfolio Maturity Map" },
        ],
        actions: [
          { en: "Score all companies on Portfolio Maturity", de: "Alle Unternehmen auf Portfolio Maturity bewerten" },
          { en: "Identify portfolio-wide bottlenecks", de: "Portfolioweite Bottlenecks identifizieren" },
          { en: "Create transformation priority list", de: "Transformations-Prioritätenliste erstellen" },
        ]
      },
      {
        id: "transformation-roadmap",
        icon: "Map",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Transformation Roadmap", de: "Transformation Roadmap" },
        subtitle: { en: "Pillar 2 of 5", de: "Säule 2 von 5" },
        description: { 
          en: "Create portfolio-wide transformation plan. Prioritize companies by potential impact, readiness, and strategic importance. Define milestones and allocate resources.", 
          de: "Portfolioweiten Transformationsplan erstellen. Unternehmen nach potenziellem Impact, Readiness und strategischer Bedeutung priorisieren. Milestones definieren und Ressourcen zuweisen." 
        },
        metrics: [
          { label: { en: "Timeline", de: "Timeline" }, value: "12-24 months" },
          { label: { en: "Companies", de: "Unternehmen" }, value: "Top 10-15" },
          { label: { en: "Output", de: "Output" }, value: "Transformation Roadmap" },
        ],
        actions: [
          { en: "Prioritize top 10-15 companies for transformation", de: "Top 10-15 Unternehmen für Transformation priorisieren" },
          { en: "Define 12-24 month transformation roadmap", de: "12-24 Monate Transformations-Roadmap definieren" },
          { en: "Allocate resources and budget", de: "Ressourcen und Budget zuweisen" },
        ]
      },
      {
        id: "systematic-execution",
        icon: "Zap",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "Systematic Execution", de: "Systematische Execution" },
        subtitle: { en: "Pillar 3 of 5", de: "Säule 3 von 5" },
        description: { 
          en: "Transform 3-5 companies simultaneously using standardized playbook and coordinated execution. Share resources across portfolio for efficiency.", 
          de: "3-5 Unternehmen gleichzeitig transformieren mit standardisiertem Playbook und koordinierter Execution. Ressourcen über das Portfolio für Effizienz teilen." 
        },
        metrics: [
          { label: { en: "Parallel Companies", de: "Parallele Unternehmen" }, value: "3-5" },
          { label: { en: "Timeline per Company", de: "Timeline pro Unternehmen" }, value: "90 days" },
          { label: { en: "Success Rate", de: "Erfolgsrate" }, value: "70-80%" },
        ],
        actions: [
          { en: "Deploy standardized transformation playbook", de: "Standardisiertes Transformations-Playbook deployen" },
          { en: "Execute coordinated transformation", de: "Koordinierte Transformation durchführen" },
          { en: "Share resources across portfolio", de: "Ressourcen über das Portfolio teilen" },
        ]
      },
      {
        id: "ai-integration",
        icon: "TrendingUp",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
        title: { en: "AI Integration", de: "AI Integration" },
        subtitle: { en: "Pillar 4 of 5", de: "Säule 4 von 5" },
        description: { 
          en: "Integrate AI into all portfolio companies. Progress from Level 1 (AI-Powered) to Level 3 (AI-Native). Define AI use cases and build AI workflows.", 
          de: "AI in alle Portfolio-Unternehmen integrieren. Von Level 1 (AI-Powered) zu Level 3 (AI-Native) fortschreiten. AI Use Cases definieren und AI Workflows aufbauen." 
        },
        metrics: [
          { label: { en: "AI Maturity Target", de: "AI Maturity Ziel" }, value: "Level 3" },
          { label: { en: "Timeline", de: "Timeline" }, value: "12-24 months" },
          { label: { en: "ROI", de: "ROI" }, value: "5-20x" },
        ],
        actions: [
          { en: "Define AI use cases per company", de: "AI Use Cases pro Unternehmen definieren" },
          { en: "Build AI workflows and integrations", de: "AI Workflows und Integrationen aufbauen" },
          { en: "Progress to AI-Native Maturity (Level 3)", de: "Zu AI-Native Maturity (Level 3) fortschreiten" },
        ]
      },
      {
        id: "portfolio-optimization",
        icon: "Target",
        color: "text-fuchsia-500",
        bgColor: "bg-fuchsia-500/10",
        title: { en: "Portfolio Optimization", de: "Portfolio Optimization" },
        subtitle: { en: "Pillar 5 of 5", de: "Säule 5 von 5" },
        description: { 
          en: "Optimize portfolio performance continuously. Monthly assessments, quarterly reviews, annual strategy updates. Track Portfolio Maturity and AI Maturity progress.", 
          de: "Portfolio-Performance kontinuierlich optimieren. Monatliche Assessments, quartalsweise Reviews, jährliche Strategie-Updates. Portfolio Maturity und AI Maturity Fortschritt tracken." 
        },
        metrics: [
          { label: { en: "Review Cycle", de: "Review Zyklus" }, value: "Monthly/Quarterly" },
          { label: { en: "IRR Target", de: "IRR Ziel" }, value: "40%+" },
          { label: { en: "Value Increase", de: "Wertsteigerung" }, value: "3-5x" },
        ],
        actions: [
          { en: "Conduct monthly company assessments", de: "Monatliche Unternehmens-Assessments durchführen" },
          { en: "Execute quarterly portfolio reviews", de: "Quartalsweise Portfolio Reviews durchführen" },
          { en: "Track Portfolio Maturity and AI Maturity", de: "Portfolio Maturity und AI Maturity tracken" },
        ]
      },
    ] 
  },
  bestPractices: { 
    title: { en: "Best Practices", de: "Best Practices" }, 
    categories: [
      {
        category: { en: "Portfolio Assessment", de: "Portfolio Assessment" },
        items: [
          { do: { en: "Score all companies on Portfolio Maturity (Strategy, Setup, Execution, Operationalization)", de: "Alle Unternehmen auf Portfolio Maturity bewerten (Strategy, Setup, Execution, Operationalization)" }, dont: { en: "Use generic or inconsistent assessment criteria", de: "Generische oder inkonsistente Bewertungskriterien nutzen" } },
          { do: { en: "Prioritize by impact, readiness, and strategic importance", de: "Nach Impact, Readiness und strategischer Bedeutung priorisieren" }, dont: { en: "Transform all companies at once", de: "Alle Unternehmen gleichzeitig transformieren" } },
        ]
      },
      {
        category: { en: "AI Integration", de: "AI Integration" },
        items: [
          { do: { en: "Progress systematically from Level 1 to Level 3", de: "Systematisch von Level 1 zu Level 3 fortschreiten" }, dont: { en: "Skip AI maturity levels", de: "AI Maturity Levels überspringen" } },
          { do: { en: "Define AI use cases per company", de: "AI Use Cases pro Unternehmen definieren" }, dont: { en: "Apply same AI strategy to all companies", de: "Gleiche AI-Strategie auf alle Unternehmen anwenden" } },
        ]
      },
    ] 
  },
  roadmap: { 
    title: { en: "12-24 Month Implementation Roadmap", de: "12-24 Monate Implementierungs-Roadmap" }, 
    subtitle: { 
      en: "From assessment to full portfolio transformation", 
      de: "Von der Bewertung zur vollständigen Portfolio-Transformation" 
    }, 
    phases: [
      {
        phase: 1,
        title: { en: "Assessment", de: "Assessment" },
        timeline: { en: "Month 1-2", de: "Monat 1-2" },
        focus: { en: "Assess portfolio, identify top companies for transformation, create roadmap", de: "Portfolio bewerten, Top-Unternehmen für Transformation identifizieren, Roadmap erstellen" },
        deliverables: [
          { en: "Portfolio Assessment (All companies scored on Portfolio Maturity)", de: "Portfolio Assessment (Alle Unternehmen auf Portfolio Maturity bewertet)" },
          { en: "Top 10-15 Companies Identified (Highest impact, highest potential)", de: "Top 10-15 Unternehmen identifiziert (Höchster Impact, höchstes Potential)" },
          { en: "Portfolio Transformation Roadmap (12-24 month roadmap)", de: "Portfolio Transformation Roadmap (12-24 Monate Roadmap)" },
          { en: "Quick Wins (3-5 quick wins per company)", de: "Quick Wins (3-5 Quick Wins pro Unternehmen)" },
        ],
        gradient: "from-purple-500 to-violet-500"
      },
      {
        phase: 2,
        title: { en: "Transformation", de: "Transformation" },
        timeline: { en: "Month 3-12", de: "Monat 3-12" },
        focus: { en: "Transform top companies systematically, build portfolio operations infrastructure", de: "Top-Unternehmen systematisch transformieren, Portfolio Operations Infrastruktur aufbauen" },
        deliverables: [
          { en: "First Wave (3-5 companies transformed)", de: "Erste Welle (3-5 Unternehmen transformiert)" },
          { en: "Second Wave (5-10 companies transformed)", de: "Zweite Welle (5-10 Unternehmen transformiert)" },
          { en: "Portfolio Operations Infrastructure deployed", de: "Portfolio Operations Infrastruktur deployed" },
          { en: "AI Integration across all transformed companies", de: "AI Integration über alle transformierten Unternehmen" },
        ],
        gradient: "from-violet-500 to-pink-500"
      },
      {
        phase: 3,
        title: { en: "Optimization", de: "Optimization" },
        timeline: { en: "Month 12-24", de: "Monat 12-24" },
        focus: { en: "Scale to remaining companies, optimize, achieve AI-Native Maturity", de: "Auf verbleibende Unternehmen skalieren, optimieren, AI-Native Maturity erreichen" },
        deliverables: [
          { en: "Full Portfolio Transformed (10-30 companies)", de: "Volles Portfolio transformiert (10-30 Unternehmen)" },
          { en: "AI Maturity: Level 2-3 across portfolio", de: "AI Maturity: Level 2-3 über das Portfolio" },
          { en: "Portfolio IRR: 40%+ achieved", de: "Portfolio IRR: 40%+ erreicht" },
          { en: "Portfolio Value: +3-5x achieved", de: "Portfolio Value: +3-5x erreicht" },
        ],
        gradient: "from-pink-500 to-fuchsia-500"
      },
    ] 
  },
  caseStudies: { 
    title: { en: "Real-World Results", de: "Echte Ergebnisse" }, 
    subtitle: { 
      en: "How 3 VC/PE firms transformed their portfolios with the framework", 
      de: "Wie 3 VC/PE-Firmen ihre Portfolios mit dem Framework transformiert haben" 
    }, 
    cases: [
      {
        company: { en: "Series B/C VC Firm", de: "Series B/C VC Firm" },
        problem: { 
          en: "Low portfolio maturity, no systematic approach, IRR 18%, need to improve portfolio for fundraising.", 
          de: "Niedrige Portfolio-Maturity, kein systematischer Ansatz, IRR 18%, Portfolio für Fundraising verbessern." 
        },
        solution: { 
          en: "Portfolio Quick Fix: Top 5 companies transformed, Portfolio Maturity from Low to Medium, AI Maturity from Level 1 to Level 2.", 
          de: "Portfolio Quick Fix: Top 5 Unternehmen transformiert, Portfolio Maturity von Niedrig zu Mittel, AI Maturity von Level 1 zu Level 2." 
        },
        results: [
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "18%", after: "28%", change: "+56%" },
          { metric: { en: "Portfolio Value", de: "Portfolio Value" }, before: "€200M", after: "€250M", change: "+€50M" },
          { metric: { en: "Portfolio Maturity", de: "Portfolio Maturity" }, before: "Low", after: "Medium", change: "Improved" },
          { metric: { en: "AI Maturity", de: "AI Maturity" }, before: "Level 1", after: "Level 2", change: "Improved" },
        ],
        timeline: { en: "6 months | Portfolio Quick Fix (€50K-€150K)", de: "6 Monate | Portfolio Quick Fix (€50K-€150K)" }
      },
      {
        company: { en: "Series A-C VC Firm", de: "Series A-C VC Firm" },
        problem: { 
          en: "Low AI maturity across portfolio, no portfolio-wide strategy, IRR 15%, 25 portfolio companies with varying performance.", 
          de: "Niedrige AI Maturity über das Portfolio, keine portfolioweite Strategie, IRR 15%, 25 Portfolio-Unternehmen mit unterschiedlicher Performance." 
        },
        solution: { 
          en: "Portfolio Transformation: Top 15 companies transformed, Portfolio Maturity from Low to High, AI Maturity from Level 1 to Level 3.", 
          de: "Portfolio Transformation: Top 15 Unternehmen transformiert, Portfolio Maturity von Niedrig zu Hoch, AI Maturity von Level 1 zu Level 3." 
        },
        results: [
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "15%", after: "35%", change: "+133%" },
          { metric: { en: "Portfolio Value", de: "Portfolio Value" }, before: "€500M", after: "€700M", change: "+€200M" },
          { metric: { en: "Portfolio Maturity", de: "Portfolio Maturity" }, before: "Low", after: "High", change: "Improved" },
          { metric: { en: "AI Maturity", de: "AI Maturity" }, before: "Level 1", after: "Level 3", change: "Improved" },
        ],
        timeline: { en: "18 months | Portfolio Transformation (€200K-€500K)", de: "18 Monate | Portfolio Transformation (€200K-€500K)" }
      },
      {
        company: { en: "Multi-Stage PE Firm (30 Companies)", de: "Multi-Stage PE Firm (30 Unternehmen)" },
        problem: { 
          en: "No AI integration across portfolio, slow transformation, IRR 20%, need to reach €3B portfolio value for exit.", 
          de: "Keine AI Integration über das Portfolio, langsame Transformation, IRR 20%, €3B Portfolio-Wert für Exit erreichen." 
        },
        solution: { 
          en: "AI-Native Portfolio Transformation: All 30 companies transformed, Portfolio Maturity from Low to High, AI Maturity from Level 1 to Level 3.", 
          de: "AI-Native Portfolio Transformation: Alle 30 Unternehmen transformiert, Portfolio Maturity von Niedrig zu Hoch, AI Maturity von Level 1 zu Level 3." 
        },
        results: [
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "20%", after: "45%", change: "+125%" },
          { metric: { en: "Portfolio Value", de: "Portfolio Value" }, before: "€2B", after: "€2.5B", change: "+€500M" },
          { metric: { en: "Portfolio Maturity", de: "Portfolio Maturity" }, before: "Low", after: "High", change: "Improved" },
          { metric: { en: "AI Maturity", de: "AI Maturity" }, before: "Level 1", after: "Level 3", change: "Improved" },
        ],
        timeline: { en: "24 months | AI-Native Portfolio (€350K-€720K)", de: "24 Monate | AI-Native Portfolio (€350K-€720K)" }
      },
    ] 
  },
  solutionsConnection: { 
    title: { en: "How We Can Help", de: "Wie wir helfen können" }, 
    subtitle: { 
      en: "Choose the right engagement model for your portfolio size and timeline", 
      de: "Wähle das richtige Engagement-Modell für deine Portfolio-Größe und Timeline" 
    }, 
    items: [
      {
        type: "assessment",
        name: { en: "Portfolio Assessment", de: "Portfolio Assessment" },
        duration: { en: "2-4 Weeks", de: "2-4 Wochen" },
        price: { en: "€10K-€25K", de: "€10K-€25K" },
        outcome: { en: "Full portfolio assessment, Portfolio Maturity scoring, transformation roadmap", de: "Volles Portfolio Assessment, Portfolio Maturity Scoring, Transformation Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/portfolio-assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Portfolio Quick Fix", de: "Portfolio Quick Fix" },
        duration: { en: "6 Months", de: "6 Monate" },
        price: { en: "€50K-€150K", de: "€50K-€150K" },
        outcome: { en: "Top 5 companies transformed, Portfolio Maturity Low → Medium, measurable results", de: "Top 5 Unternehmen transformiert, Portfolio Maturity Niedrig → Mittel, messbare Ergebnisse" },
        cta: { en: "Start Quick Fix", de: "Quick Fix starten" },
        link: "/solutions/portfolio-quick-fix",
        icon: "Zap",
        color: "bg-orange-500/10 text-orange-500"
      },
      {
        type: "boost",
        name: { en: "Portfolio Transformation", de: "Portfolio Transformation" },
        duration: { en: "12-18 Months", de: "12-18 Monate" },
        price: { en: "€200K-€500K", de: "€200K-€500K" },
        outcome: { en: "Top 10-15 companies transformed, Portfolio Maturity Low → High, AI Maturity Level 2-3", de: "Top 10-15 Unternehmen transformiert, Portfolio Maturity Niedrig → Hoch, AI Maturity Level 2-3" },
        cta: { en: "Start Transformation", de: "Transformation starten" },
        link: "/solutions/boost/portfolio-transformation",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "AI-Native Portfolio", de: "AI-Native Portfolio" },
        duration: { en: "24 Months", de: "24 Monate" },
        price: { en: "€350K-€720K", de: "€350K-€720K" },
        outcome: { en: "Full portfolio transformed (10-30 companies), AI-Native Maturity (Level 3), Portfolio Value +3-5x", de: "Volles Portfolio transformiert (10-30 Unternehmen), AI-Native Maturity (Level 3), Portfolio Value +3-5x" },
        cta: { en: "Start AI-Native", de: "AI-Native starten" },
        link: "/solutions/accelerate/portfolio-ai-native",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      },
    ]
  },
  whoThisIsFor: { 
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" }, 
    subtitle: { 
      en: "This playbook is designed for VC/PE professionals responsible for portfolio value creation", 
      de: "Dieses Playbook ist für VC/PE-Profis, die für Portfolio-Wertschöpfung verantwortlich sind" 
    }, 
    icp: { 
      en: "VC/PE firms with 10-30 portfolio companies seeking to improve portfolio IRR and value creation through AI-native transformation.", 
      de: "VC/PE-Firmen mit 10-30 Portfolio-Unternehmen, die Portfolio-IRR und Wertschöpfung durch AI-native Transformation verbessern wollen." 
    }, 
    personas: [
      {
        icon: "Briefcase",
        role: { en: "VC Partners", de: "VC Partners" },
        pain: { en: "Need to transform entire portfolio to AI-native and improve fund IRR", de: "Müssen gesamtes Portfolio auf AI-native transformieren und Fund IRR verbessern" },
        outcome: { en: "Portfolio IRR 40%+, 3-5x portfolio value increase", de: "Portfolio IRR 40%+, 3-5x Portfolio-Wertsteigerung" },
        color: "purple"
      },
      {
        icon: "Building2",
        role: { en: "PE Partners", de: "PE Partners" },
        pain: { en: "Responsible for portfolio value creation and exit readiness", de: "Verantwortlich für Portfolio-Wertschöpfung und Exit-Readiness" },
        outcome: { en: "Exit readiness 100%, portfolio value +€500M+", de: "Exit Readiness 100%, Portfolio Value +€500M+" },
        color: "violet"
      },
      {
        icon: "Crown",
        role: { en: "Managing Partners", de: "Managing Partners" },
        pain: { en: "Need to improve portfolio IRR for fundraising and LP satisfaction", de: "Müssen Portfolio-IRR für Fundraising und LP-Zufriedenheit verbessern" },
        outcome: { en: "Fund II 2x larger, LP satisfaction 95%+", de: "Fund II 2x größer, LP-Zufriedenheit 95%+" },
        color: "pink"
      },
      {
        icon: "Users",
        role: { en: "Operating Partners", de: "Operating Partners" },
        pain: { en: "Responsible for portfolio operations and support delivery", de: "Verantwortlich für Portfolio-Operationen und Support-Delivery" },
        outcome: { en: "Operating efficiency +2-5x, company coverage +100-300%", de: "Operating Effizienz +2-5x, Company Coverage +100-300%" },
        color: "fuchsia"
      },
    ] 
  },
  finalCta: { 
    headline: { en: "Ready to Transform Your Portfolio?", de: "Bereit dein Portfolio zu transformieren?" }, 
    subline: { 
      en: "Start with a Portfolio Assessment to identify your portfolio-wide bottlenecks and create a transformation roadmap", 
      de: "Starte mit einem Portfolio Assessment, um portfolioweite Bottlenecks zu identifizieren und eine Transformation Roadmap zu erstellen" 
    }, 
    trustSignals: [
      { en: "Portfolio Excellence Framework", de: "Portfolio Excellence Framework" },
      { en: "1 detailed sub-playbook", de: "1 detailliertes Sub-Playbook" },
      { en: "3 case studies", de: "3 Case Studies" },
      { en: "12-24 month roadmap", de: "12-24 Monate Roadmap" },
    ], 
    bookingUrl: "https://www.cal.scalingx.io/inflection-call", 
    downloadUrl: "#" 
  },
  subPlaybooks: {
    title: { en: "Portfolio Excellence Sub-Playbook", de: "Portfolio Excellence Sub-Playbook" },
    subtitle: { 
      en: "Deep-dive into portfolio operations with detailed playbook", 
      de: "Deep-dive in Portfolio-Operationen mit detailliertem Playbook" 
    },
    items: [
      {
        id: 17,
        slug: "portfolio/excellence",
        title: { en: "Portfolio Excellence Playbook", de: "Portfolio Excellence Playbook" },
        teaser: { 
          en: "How to build portfolio operations that scale without chaos. Learn the 5 components (Assessment, Prioritization, Playbook, Execution, Measurement) used by top-tier VCs/PEs to transform 10-30 companies, achieve 3-5x portfolio value increase, and improve portfolio IRR from 15% to 40%+.", 
          de: "Wie du Portfolio-Operationen aufbaust, die ohne Chaos skalieren. Lerne die 5 Komponenten (Assessment, Prioritization, Playbook, Execution, Measurement), die Top-Tier VCs/PEs nutzen, um 10-30 Unternehmen zu transformieren, 3-5x Portfolio-Wertsteigerung zu erzielen und Portfolio-IRR von 15% auf 40%+ zu verbessern." 
        },
        icon: "Briefcase",
        color: "purple"
      },
    ]
  }
};
