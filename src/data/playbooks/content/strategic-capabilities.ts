import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('strategic-capabilities')!;

export const strategicCapabilitiesData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Strategic Capabilities · Standalone Playbook", de: "Strategic Capabilities · Standalone Playbook" },
    title: "Strategic Capabilities Playbook",
    subtitle: { 
      en: "How to improve the 4 core capabilities that drive AI-native scaling", 
      de: "Wie du die 4 Kern-Capabilities verbesserst, die AI-native Skalierung antreiben" 
    },
    description: { 
      en: "Most companies struggle with AI-native scaling because they focus on tools instead of capabilities. They buy AI software but don't improve their core capabilities (Strategy, Setup, Execution, Operationalization). This playbook teaches you the practical framework used by AI-native companies to reach AI-Native Maturity (Level 3) and achieve 3-5x faster scaling. You'll learn how to assess your current capability maturity, identify your capability bottlenecks, improve each capability systematically, integrate AI into all 4 capabilities, and measure progress with AI Maturity Levels.",
      de: "Die meisten Unternehmen scheitern an AI-native Skalierung, weil sie sich auf Tools statt auf Capabilities fokussieren. Sie kaufen AI-Software, aber verbessern nicht ihre Kern-Capabilities (Strategy, Setup, Execution, Operationalization). Dieses Playbook lehrt dich das praktische Framework, das AI-native Unternehmen nutzen, um AI-Native Maturity (Level 3) zu erreichen und 3-5x schnellere Skalierung zu erzielen."
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "4 Capabilities Framework", de: "4 Capabilities Framework" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://www.cal.scalingx.io/inflection-call",
    downloadUrl: "#",
    assetId: "playbook-strategic-capabilities",
    gradient: "from-red-500 to-rose-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "70% of companies have low capability maturity with no AI integration. Random capability investment leaves massive gaps. Scaling is 5-10x slower than AI-native competitors.",
        de: "70% der Unternehmen haben niedrige Capability-Reife ohne AI-Integration. Zufällige Capability-Investitionen hinterlassen massive Lücken. Skalierung ist 5-10x langsamer als AI-native Wettbewerber."
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Capabilities are multiplicative, not additive. One weak capability creates a bottleneck that limits entire company performance. Your lowest maturity capability determines your scaling speed.",
        de: "Capabilities sind multiplikativ, nicht additiv. Eine schwache Capability erzeugt einen Bottleneck, der die gesamte Unternehmensperformance limitiert. Deine niedrigste Capability-Reife bestimmt deine Skalierungsgeschwindigkeit."
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The 5-component framework: Capability Assessment, Bottleneck Identification, Improvement Roadmap, AI Integration Plan, Progress Measurement. Systematically improve all 4 capabilities to reach AI-Native Maturity (Level 3).",
        de: "Das 5-Komponenten-Framework: Capability Assessment, Bottleneck-Identifikation, Improvement Roadmap, AI-Integrationsplan, Fortschrittsmessung. Systematisch alle 4 Capabilities verbessern, um AI-Native Maturity (Level 3) zu erreichen."
      } 
    }
  },
  problem: { 
    title: { en: "Why Most Companies Struggle with AI-Native Scaling", de: "Warum die meisten Unternehmen mit AI-Native Skalierung kämpfen" }, 
    subtitle: { 
      en: "The hidden bottlenecks destroying your scaling velocity", 
      de: "Die versteckten Bottlenecks, die deine Skalierungsgeschwindigkeit zerstören" 
    }, 
    bullets: [
      { text: { en: "Low Capability Maturity: Manual processes, no AI integration, reactive decision-making across all 4 capabilities", de: "Niedrige Capability-Reife: Manuelle Prozesse, keine AI-Integration, reaktive Entscheidungsfindung über alle 4 Capabilities" } },
      { text: { en: "Capability Bottlenecks: One weak capability limits the entire system—trying to improve everything at once doesn't work", de: "Capability-Bottlenecks: Eine schwache Capability limitiert das gesamte System—alles gleichzeitig verbessern zu wollen funktioniert nicht" } },
      { text: { en: "No AI Maturity Roadmap: Buying AI tools without strategy, no clear path from Level 1 (AI-Powered) to Level 3 (AI-Native)", de: "Keine AI-Maturity-Roadmap: AI-Tools ohne Strategie kaufen, kein klarer Weg von Level 1 (AI-Powered) zu Level 3 (AI-Native)" } },
      { text: { en: "Wasted Investment: Low AI adoption, no ROI, 5-10x slower scaling compared to AI-native competitors", de: "Verschwendete Investition: Geringe AI-Adoption, kein ROI, 5-10x langsamere Skalierung verglichen mit AI-native Wettbewerbern" } }
    ], 
    metrics: [
      { label: { en: "Bottleneck Rate", de: "Bottleneck Rate" }, value: "70%", trend: "down" as const },
      { label: { en: "Avg Maturity", de: "Ø Reife" }, value: "Low", trend: "down" as const },
      { label: { en: "Setup Gap", de: "Setup Lücke" }, value: "36%", trend: "down" as const },
      { label: { en: "Scaling Gap", de: "Skalierungs-Gap" }, value: "5-10x", trend: "down" as const }
    ]
  },
  framework: { 
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" }, 
    subtitle: { 
      en: "How to improve Strategy, Setup, Execution, and Operationalization systematically", 
      de: "Wie du Strategy, Setup, Execution und Operationalization systematisch verbesserst" 
    }, 
    items: [
      {
        id: "capability-assessment",
        icon: "ClipboardCheck",
        color: "cyan",
        bgColor: "bg-cyan-500/10",
        title: { en: "Capability Assessment", de: "Capability Assessment" },
        subtitle: { en: "Assess current maturity across all 4 capabilities", de: "Aktuelle Reife über alle 4 Capabilities bewerten" },
        description: { 
          en: "Systematic assessment of all 4 capabilities (Strategy, Setup, Execution, Operationalization). Score each capability as low/medium/high maturity and identify which capability is limiting your scaling.",
          de: "Systematische Bewertung aller 4 Capabilities (Strategy, Setup, Execution, Operationalization). Bewerte jede Capability als niedrig/mittel/hoch und identifiziere, welche Capability deine Skalierung limitiert."
        },
        metrics: [
          { label: { en: "Capability Visibility", de: "Capability Sichtbarkeit" }, value: "+100%" },
          { label: { en: "Assessment Time", de: "Assessment Zeit" }, value: "1-2 days" }
        ],
        actions: [
          { en: "Score Strategy capability (ICP, positioning, GTM strategy)", de: "Strategy Capability bewerten (ICP, Positionierung, GTM-Strategie)" },
          { en: "Score Setup capability (infrastructure, processes, systems)", de: "Setup Capability bewerten (Infrastruktur, Prozesse, Systeme)" },
          { en: "Score Execution capability (delivery, customer success, operations)", de: "Execution Capability bewerten (Delivery, Customer Success, Operations)" },
          { en: "Score Operationalization capability (continuous improvement, optimization)", de: "Operationalization Capability bewerten (Kontinuierliche Verbesserung, Optimierung)" }
        ]
      },
      {
        id: "bottleneck-identification",
        icon: "Target",
        color: "red",
        bgColor: "bg-red-500/10",
        title: { en: "Bottleneck Identification", de: "Bottleneck-Identifikation" },
        subtitle: { en: "Find your lowest maturity capability", de: "Finde deine niedrigste Capability-Reife" },
        description: { 
          en: "Identify which capability is limiting your scaling. The lowest maturity capability is your bottleneck—fix this first for highest ROI. Don't try to improve everything at once.",
          de: "Identifiziere, welche Capability deine Skalierung limitiert. Die niedrigste Capability-Reife ist dein Bottleneck—fixe diesen zuerst für höchsten ROI. Versuche nicht, alles gleichzeitig zu verbessern."
        },
        metrics: [
          { label: { en: "Bottleneck Clarity", de: "Bottleneck Klarheit" }, value: "+100%" },
          { label: { en: "Focus", de: "Fokus" }, value: "1 capability" }
        ],
        actions: [
          { en: "Identify lowest maturity capability (your bottleneck)", de: "Identifiziere niedrigste Capability-Reife (dein Bottleneck)" },
          { en: "Analyze root causes of the bottleneck", de: "Analysiere Ursachen des Bottlenecks" },
          { en: "Prioritize improvement (bottleneck first, then expand)", de: "Priorisiere Verbesserung (Bottleneck zuerst, dann erweitern)" },
          { en: "Create bottleneck report with specific recommendations", de: "Erstelle Bottleneck-Report mit spezifischen Empfehlungen" }
        ]
      },
      {
        id: "improvement-roadmap",
        icon: "Map",
        color: "green",
        bgColor: "bg-green-500/10",
        title: { en: "Improvement Roadmap", de: "Improvement Roadmap" },
        subtitle: { en: "Create systematic plan to improve bottleneck capability", de: "Erstelle systematischen Plan zur Bottleneck-Verbesserung" },
        description: { 
          en: "Create a 90-day improvement roadmap focused on your bottleneck capability. Define milestones, allocate resources, set timelines. Then expand to other capabilities.",
          de: "Erstelle eine 90-Tage-Improvement-Roadmap fokussiert auf deine Bottleneck-Capability. Definiere Meilensteine, allokiere Ressourcen, setze Timelines. Dann erweitere auf andere Capabilities."
        },
        metrics: [
          { label: { en: "Roadmap Clarity", de: "Roadmap Klarheit" }, value: "+100%" },
          { label: { en: "Timeline", de: "Timeline" }, value: "90 days" }
        ],
        actions: [
          { en: "Define 90-day improvement milestones", de: "Definiere 90-Tage-Improvement-Meilensteine" },
          { en: "Allocate resources (budget, team, time)", de: "Allokiere Ressourcen (Budget, Team, Zeit)" },
          { en: "Set weekly/monthly checkpoints", de: "Setze wöchentliche/monatliche Checkpoints" },
          { en: "Create resource plan and responsibility matrix", de: "Erstelle Ressourcenplan und Verantwortungsmatrix" }
        ]
      },
      {
        id: "ai-integration-plan",
        icon: "Zap",
        color: "violet",
        bgColor: "bg-violet-500/10",
        title: { en: "AI Integration Plan", de: "AI-Integrationsplan" },
        subtitle: { en: "Integrate AI into all 4 capabilities", de: "Integriere AI in alle 4 Capabilities" },
        description: { 
          en: "Define how to integrate AI into each capability. Progress from Level 1 (AI-Powered: AI as tool) to Level 2 (AI-Enhanced: AI as system) to Level 3 (AI-Native: AI as architecture).",
          de: "Definiere, wie AI in jede Capability integriert wird. Fortschritt von Level 1 (AI-Powered: AI als Tool) zu Level 2 (AI-Enhanced: AI als System) zu Level 3 (AI-Native: AI als Architektur)."
        },
        metrics: [
          { label: { en: "AI Maturity Target", de: "AI-Maturity-Ziel" }, value: "Level 3" },
          { label: { en: "Timeline", de: "Timeline" }, value: "18-36 mo" }
        ],
        actions: [
          { en: "Level 1: AI-Powered (AI as tool, bolt-on)", de: "Level 1: AI-Powered (AI als Tool, Add-on)" },
          { en: "Level 2: AI-Enhanced (AI as system, integrated)", de: "Level 2: AI-Enhanced (AI als System, integriert)" },
          { en: "Level 3: AI-Native (AI as architecture, core)", de: "Level 3: AI-Native (AI als Architektur, Kern)" },
          { en: "Define AI use cases for each capability", de: "Definiere AI-Use-Cases für jede Capability" }
        ]
      },
      {
        id: "progress-measurement",
        icon: "TrendingUp",
        color: "blue",
        bgColor: "bg-blue-500/10",
        title: { en: "Progress Measurement", de: "Fortschrittsmessung" },
        subtitle: { en: "Track capability improvement and AI maturity progress", de: "Tracke Capability-Verbesserung und AI-Maturity-Fortschritt" },
        description: { 
          en: "Track capability improvement and AI maturity progress monthly. Measure each capability's maturity and overall AI maturity level. Adjust roadmap based on results.",
          de: "Tracke Capability-Verbesserung und AI-Maturity-Fortschritt monatlich. Miss die Reife jeder Capability und das gesamte AI-Maturity-Level. Passe Roadmap basierend auf Ergebnissen an."
        },
        metrics: [
          { label: { en: "Measurement Cadence", de: "Messungsrhythmus" }, value: "Monthly" },
          { label: { en: "Dashboard", de: "Dashboard" }, value: "Real-time" }
        ],
        actions: [
          { en: "Monthly capability assessments", de: "Monatliche Capability Assessments" },
          { en: "AI maturity level tracking (Level 1-3)", de: "AI Maturity Level Tracking (Level 1-3)" },
          { en: "Progress dashboard with KPIs", de: "Fortschritts-Dashboard mit KPIs" },
          { en: "Quarterly reviews and roadmap adjustments", de: "Vierteljährliche Reviews und Roadmap-Anpassungen" }
        ]
      }
    ]
  },
  bestPractices: { 
    title: { en: "4 Capabilities Overview", de: "4 Capabilities Übersicht" }, 
    categories: [
      {
        category: { en: "Strategy & Setup", de: "Strategy & Setup" },
        items: [
          { do: { en: "Strategy: Define ICP, build positioning, create GTM strategy (where to play, how to win)", de: "Strategy: Definiere ICP, baue Positionierung, erstelle GTM-Strategie (wo spielen, wie gewinnen)" }, dont: { en: "Random strategy without clear ICP and value proposition", de: "Zufällige Strategie ohne klares ICP und Value Proposition" } },
          { do: { en: "Setup: Build AI-native infrastructure, automate processes, establish systems", de: "Setup: Baue AI-native Infrastruktur, automatisiere Prozesse, etabliere Systeme" }, dont: { en: "Executing without proper infrastructure and systems in place", de: "Execution ohne richtige Infrastruktur und Systeme" } }
        ]
      },
      {
        category: { en: "Execution & Operationalization", de: "Execution & Operationalization" },
        items: [
          { do: { en: "Execution: Build AI-powered execution, automate workflows, deliver consistently", de: "Execution: Baue AI-powered Execution, automatisiere Workflows, liefere konsistent" }, dont: { en: "Manual execution without automation or AI integration", de: "Manuelle Execution ohne Automatisierung oder AI-Integration" } },
          { do: { en: "Operationalization: Continuous improvement, optimization, sustainable scaling", de: "Operationalization: Kontinuierliche Verbesserung, Optimierung, nachhaltige Skalierung" }, dont: { en: "One-time improvements without continuous optimization", de: "Einmalige Verbesserungen ohne kontinuierliche Optimierung" } }
        ]
      },
      {
        category: { en: "AI Maturity Levels", de: "AI Maturity Levels" },
        items: [
          { do: { en: "Target AI-Native Maturity (Level 3) with all capabilities at high maturity", de: "Ziel AI-Native Maturity (Level 3) mit allen Capabilities auf hoher Reife" }, dont: { en: "Accepting low AI maturity (Level 1) as 'good enough'", de: "Niedrige AI-Maturity (Level 1) als 'gut genug' akzeptieren" } },
          { do: { en: "Fix bottleneck capability first—highest ROI for improvement", de: "Fixe Bottleneck-Capability zuerst—höchster ROI für Verbesserung" }, dont: { en: "Investing in strongest capability while bottleneck persists", de: "In stärkste Capability investieren während Bottleneck besteht" } }
        ]
      }
    ]
  },
  roadmap: { 
    title: { en: "90-Day Implementation Roadmap", de: "90-Tage-Implementierungs-Roadmap" }, 
    subtitle: { 
      en: "From capability bottleneck to systematic improvement in 90 days", 
      de: "Von Capability-Bottleneck zu systematischer Verbesserung in 90 Tagen" 
    }, 
    phases: [
      {
        phase: 1,
        title: { en: "Assessment", de: "Assessment" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Capability assessment and bottleneck identification", de: "Capability Assessment und Bottleneck-Identifikation" },
        deliverables: [
          { en: "Full capability assessment (all 4 capabilities)", de: "Volles Capability Assessment (alle 4 Capabilities)" },
          { en: "Bottleneck identification and root cause analysis", de: "Bottleneck-Identifikation und Ursachenanalyse" },
          { en: "AI maturity level assessment (Level 1-3)", de: "AI-Maturity-Level-Assessment (Level 1-3)" },
          { en: "90-day improvement roadmap", de: "90-Tage-Improvement-Roadmap" }
        ],
        gradient: "from-cyan-500 to-blue-500"
      },
      {
        phase: 2,
        title: { en: "Development", de: "Entwicklung" },
        timeline: { en: "Week 3-6", de: "Woche 3-6" },
        focus: { en: "Fix bottleneck capability and start AI integration", de: "Fixe Bottleneck-Capability und starte AI-Integration" },
        deliverables: [
          { en: "Bottleneck capability improvement plan", de: "Bottleneck-Capability-Verbesserungsplan" },
          { en: "AI integration plan for each capability", de: "AI-Integrationsplan für jede Capability" },
          { en: "Resource allocation and team assignments", de: "Ressourcenallokation und Team-Zuweisungen" },
          { en: "Weekly progress tracking dashboard", de: "Wöchentliches Fortschritts-Dashboard" }
        ],
        gradient: "from-green-500 to-emerald-500"
      },
      {
        phase: 3,
        title: { en: "Optimization", de: "Optimierung" },
        timeline: { en: "Week 7-12", de: "Woche 7-12" },
        focus: { en: "Expand improvements and measure progress", de: "Erweitere Verbesserungen und messe Fortschritt" },
        deliverables: [
          { en: "Capability improvement results and validation", de: "Capability-Verbesserungs-Ergebnisse und Validierung" },
          { en: "AI maturity level progress report", de: "AI-Maturity-Level-Fortschrittsbericht" },
          { en: "Expanded improvement plan (additional capabilities)", de: "Erweiterter Verbesserungsplan (weitere Capabilities)" },
          { en: "12-month capability excellence roadmap", de: "12-Monate-Capability-Excellence-Roadmap" }
        ],
        gradient: "from-violet-500 to-purple-500"
      }
    ]
  },
  caseStudies: { 
    title: { en: "Real-World Results", de: "Echte Ergebnisse" }, 
    subtitle: { 
      en: "How 3 companies transformed their strategic capabilities with the 5-component framework", 
      de: "Wie 3 Unternehmen ihre strategischen Capabilities mit dem 5-Komponenten-Framework transformiert haben" 
    }, 
    cases: [
      {
        company: { en: "Series B SaaS – Strategy Bottleneck", de: "Series B SaaS – Strategy Bottleneck" },
        problem: { 
          en: "Low Strategy maturity, no clear ICP, high CAC (€12k). Random capability investment wasn't working, scaling stalled at €15M ARR.",
          de: "Niedrige Strategy-Reife, kein klares ICP, hohe CAC (€12k). Zufällige Capability-Investitionen funktionierten nicht, Skalierung bei €15M ARR gestoppt."
        },
        solution: { 
          en: "Applied 5-component framework: Assessment identified Strategy as bottleneck, improved Strategy capability (ICP, positioning, GTM), then expanded to other capabilities.",
          de: "5-Komponenten-Framework angewendet: Assessment identifizierte Strategy als Bottleneck, verbesserte Strategy-Capability (ICP, Positionierung, GTM), dann auf andere Capabilities erweitert."
        },
        results: [
          { metric: { en: "Strategy Maturity", de: "Strategy Reife" }, before: "Low", after: "High", change: "+2 levels" },
          { metric: { en: "CAC", de: "CAC" }, before: "€12k", after: "€6k", change: "-50%" },
          { metric: { en: "Win Rate", de: "Win Rate" }, before: "15%", after: "25%", change: "+67%" },
          { metric: { en: "ARR Growth", de: "ARR Wachstum" }, before: "€15M", after: "€21M", change: "+40%" }
        ],
        timeline: { en: "6 months | Boost", de: "6 Monate | Boost" }
      },
      {
        company: { en: "Series A SaaS – Execution Bottleneck", de: "Series A SaaS – Execution Bottleneck" },
        problem: { 
          en: "Low Execution maturity, manual processes, slow delivery (8 weeks). Team working hard but results not scaling with effort.",
          de: "Niedrige Execution-Reife, manuelle Prozesse, langsame Delivery (8 Wochen). Team arbeitete hart aber Ergebnisse skalierten nicht mit Aufwand."
        },
        solution: { 
          en: "Improved Execution capability with AI integration: automated workflows, AI-powered delivery, streamlined processes. Moved from Level 1 to Level 2 AI maturity.",
          de: "Execution-Capability mit AI-Integration verbessert: automatisierte Workflows, AI-powered Delivery, optimierte Prozesse. Von Level 1 zu Level 2 AI-Maturity bewegt."
        },
        results: [
          { metric: { en: "Execution Maturity", de: "Execution Reife" }, before: "Low", after: "High", change: "+2 levels" },
          { metric: { en: "Delivery Speed", de: "Delivery-Geschwindigkeit" }, before: "8 weeks", after: "2 weeks", change: "-75%" },
          { metric: { en: "Team Productivity", de: "Team-Produktivität" }, before: "1x", after: "2.5x", change: "+150%" },
          { metric: { en: "ARR Growth", de: "ARR Wachstum" }, before: "€5M", after: "€8M", change: "+60%" }
        ],
        timeline: { en: "9 months | Boost + Accelerate", de: "9 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series C SaaS – AI-Native Transformation", de: "Series C SaaS – AI-Native Transformation" },
        problem: { 
          en: "Level 1 AI maturity (AI-Powered), no AI integration across capabilities, high operating costs. Needed to reach AI-Native Maturity (Level 3) to compete.",
          de: "Level 1 AI-Maturity (AI-Powered), keine AI-Integration über Capabilities, hohe Betriebskosten. Musste AI-Native Maturity (Level 3) erreichen um zu konkurrieren."
        },
        solution: { 
          en: "Full AI-native transformation: improved all 4 capabilities systematically, integrated AI across all workflows, moved from Level 1 to Level 3 AI maturity.",
          de: "Volle AI-native Transformation: alle 4 Capabilities systematisch verbessert, AI über alle Workflows integriert, von Level 1 zu Level 3 AI-Maturity bewegt."
        },
        results: [
          { metric: { en: "AI Maturity", de: "AI Maturity" }, before: "Level 1", after: "Level 3", change: "+2 levels" },
          { metric: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, before: "€250k", after: "€500k", change: "+100%" },
          { metric: { en: "Operating Costs", de: "Betriebskosten" }, before: "100%", after: "70%", change: "-30%" },
          { metric: { en: "Valuation", de: "Bewertung" }, before: "1x", after: "2.5x", change: "+150%" }
        ],
        timeline: { en: "18 months | Accelerate × 2 phases", de: "18 Monate | Accelerate × 2 Phasen" }
      }
    ]
  },
  solutionsConnection: { 
    title: { en: "How We Can Help", de: "Wie wir helfen können" }, 
    subtitle: { 
      en: "Choose the right engagement model for your timeline and budget", 
      de: "Wähle das richtige Engagement-Modell für deine Timeline und dein Budget" 
    }, 
    items: [
      {
        type: "assessment",
        name: { en: "Scaling Readiness Assessment", de: "Scaling Readiness Assessment" },
        duration: { en: "3-5 Days", de: "3-5 Tage" },
        price: { en: "€3.9K-€5.9K", de: "€3.9K-€5.9K" },
        outcome: { 
          en: "Full capability assessment (Strategy, Setup, Execution, Operationalization), bottleneck identification, 90-day roadmap",
          de: "Volles Capability Assessment (Strategy, Setup, Execution, Operationalization), Bottleneck-Identifikation, 90-Tage-Roadmap"
        },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/scaling-readiness-assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Capability Sprint", de: "Capability Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { 
          en: "Full capability assessment, bottleneck identification, and 90-day improvement roadmap. Perfect for understanding your capability bottleneck and creating a clear action plan.",
          de: "Volles Capability Assessment, Bottleneck-Identifikation und 90-Tage-Improvement-Roadmap. Perfekt um deinen Capability-Bottleneck zu verstehen und einen klaren Aktionsplan zu erstellen."
        },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/scaling-velocity",
        icon: "Zap",
        color: "bg-orange-500/10 text-orange-500"
      },
      {
        type: "boost",
        name: { en: "Capability Excellence", de: "Capability Excellence" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { 
          en: "Full capability transformation in 90 days. Fix your bottleneck capability, improve all 4 capabilities, start AI integration. Measurable results guaranteed.",
          de: "Volle Capability-Transformation in 90 Tagen. Fixe deinen Bottleneck, verbessere alle 4 Capabilities, starte AI-Integration. Messbare Ergebnisse garantiert."
        },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/scaling-os",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "AI-Native Capabilities", de: "AI-Native Capabilities" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { 
          en: "Full capability transformation, all 4 capabilities × AI Maturity Level 3, 3-5x scaling velocity",
          de: "Volle Capability-Transformation, alle 4 Capabilities × AI Maturity Level 3, 3-5x Skalierungsgeschwindigkeit"
        },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/ai-native-scaling",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ]
  },
  whoThisIsFor: { 
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" }, 
    subtitle: { 
      en: "The Strategic Capabilities Playbook is designed for leaders who want to build systematic capability development", 
      de: "Das Strategic Capabilities Playbook ist für Führungskräfte, die systematische Capability-Entwicklung aufbauen wollen" 
    }, 
    icp: { 
      en: "Series A-C SaaS companies looking to improve their 4 core capabilities and reach AI-Native Maturity (Level 3)",
      de: "Series A-C SaaS-Unternehmen, die ihre 4 Kern-Capabilities verbessern und AI-Native Maturity (Level 3) erreichen wollen"
    }, 
    personas: [
      {
        icon: "Crown",
        role: { en: "CEOs", de: "CEOs" },
        pain: { en: "Need to improve all 4 strategic capabilities and achieve 3-5x faster scaling", de: "Müssen alle 4 strategischen Capabilities verbessern und 3-5x schnellere Skalierung erreichen" },
        outcome: { en: "Clear capability roadmap, AI-Native Maturity (Level 3), systematic scaling", de: "Klare Capability-Roadmap, AI-Native Maturity (Level 3), systematische Skalierung" },
        color: "red"
      },
      {
        icon: "Users",
        role: { en: "C-Level Executives", de: "C-Level Executives" },
        pain: { en: "Responsible for capability development in your function", de: "Verantwortlich für Capability-Entwicklung in deinem Bereich" },
        outcome: { en: "Functional capability excellence, integration with other capabilities", de: "Funktionale Capability Excellence, Integration mit anderen Capabilities" },
        color: "blue"
      },
      {
        icon: "Briefcase",
        role: { en: "Board Members", de: "Board Members" },
        pain: { en: "Need to understand capability bottlenecks and improvement plans", de: "Müssen Capability-Bottlenecks und Verbesserungspläne verstehen" },
        outcome: { en: "Capability visibility, progress tracking, strategic oversight", de: "Capability-Sichtbarkeit, Fortschritts-Tracking, strategische Aufsicht" },
        color: "orange"
      },
      {
        icon: "Target",
        role: { en: "All Teams", de: "Alle Teams" },
        pain: { en: "Working in company with capability gaps that limit performance", de: "Arbeiten in Unternehmen mit Capability-Lücken" },
        outcome: { en: "Better systems, faster execution, improved scaling velocity", de: "Bessere Systeme, schnellere Execution, verbesserte Skalierungsgeschwindigkeit" },
        color: "green"
      }
    ]
  },
  finalCta: { 
    headline: { en: "Ready to Improve Your Capabilities?", de: "Bereit deine Capabilities zu verbessern?" }, 
    subline: { 
      en: "Start with a capability assessment to identify your bottleneck and create a 90-day improvement roadmap",
      de: "Starte mit einem Capability Assessment um deinen Bottleneck zu identifizieren und eine 90-Tage-Improvement-Roadmap zu erstellen"
    }, 
    trustSignals: [
      { en: "Complete playbook with templates", de: "Komplettes Playbook mit Templates" },
      { en: "4 Capabilities × AI Maturity Levels", de: "4 Capabilities × AI Maturity Levels" },
      { en: "3 anonymized case studies", de: "3 anonymisierte Case Studies" },
      { en: "90-day implementation roadmap", de: "90-Tage-Implementierungs-Roadmap" }
    ], 
    bookingUrl: "https://www.cal.scalingx.io/inflection-call", 
    downloadUrl: "#" 
  }
};
