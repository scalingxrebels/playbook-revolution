import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('strategic-capabilities')!;

export const strategicCapabilitiesData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Strategic Capabilities · Domain Playbook", de: "Strategic Capabilities · Domain Playbook" },
    title: "Strategic Capabilities Playbook",
    subtitle: { 
      en: "How to improve the 4 core capabilities that drive AI-native scaling", 
      de: "Wie du die 4 Kern-Capabilities verbesserst, die AI-native Skalierung antreiben" 
    },
    description: { 
      en: "Traditional companies improve capabilities randomly. They invest in strategy without setup, or execution without operationalization. The result? 70% of companies have capability bottlenecks (C_min < 0.5), θ_index scores below 0.35, and scaling velocity 5-10x slower than AI-native competitors. AI-native companies use a different playbook. They leverage the 5-component framework to improve all 4 capabilities systematically, increase θ_index from 0.35 to 0.75+, and achieve 3-5x faster scaling.",
      de: "Traditionelle Unternehmen verbessern Capabilities zufällig. Sie investieren in Strategie ohne Setup, oder Execution ohne Operationalisierung. Das Ergebnis? 70% der Unternehmen haben Capability-Bottlenecks (C_min < 0.5), θ_index-Scores unter 0.35, und Skalierungsgeschwindigkeit 5-10x langsamer als AI-native Wettbewerber. AI-native Unternehmen nutzen ein anderes Playbook."
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "θ_index Framework", de: "θ_index Framework" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    gradient: "from-red-500 to-rose-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "70% of companies have capability bottlenecks (C_min < 0.5). Random capability investment leaves massive gaps. Average θ_index is 0.35, scaling velocity 5-10x slower than AI-native.",
        de: "70% der Unternehmen haben Capability-Bottlenecks (C_min < 0.5). Zufällige Capability-Investitionen hinterlassen massive Lücken. Durchschnittlicher θ_index ist 0.35."
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Capabilities are multiplicative, not additive. S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index. One weak capability (C_min) creates a bottleneck that limits entire company performance.",
        de: "Capabilities sind multiplikativ, nicht additiv. S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index. Eine schwache Capability (C_min) erzeugt einen Bottleneck."
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The 5-component framework: Capability Assessment, Development, Integration, Optimization, and AI-Powered Excellence. Systematically improve all 4 capabilities to achieve θ_index 0.75+.",
        de: "Das 5-Komponenten-Framework: Capability Assessment, Development, Integration, Optimization und AI-Powered Excellence. Systematisch alle 4 Capabilities verbessern."
      } 
    }
  },
  problem: { 
    title: { en: "Why Traditional Capability Development is Broken", de: "Warum traditionelle Capability-Entwicklung kaputt ist" }, 
    subtitle: { 
      en: "The hidden bottlenecks destroying your scaling velocity", 
      de: "Die versteckten Bottlenecks, die deine Skalierungsgeschwindigkeit zerstören" 
    }, 
    bullets: [
      { text: { en: "Random Capability Investment: Invest in strategy without setup, execution without operationalization", de: "Zufällige Capability-Investition: Investiere in Strategie ohne Setup, Execution ohne Operationalisierung" } },
      { text: { en: "Capability Bottlenecks: 70% of companies have C_min < 0.5 (vs. C_min > 0.7 for AI-native)", de: "Capability Bottlenecks: 70% der Unternehmen haben C_min < 0.5 (vs. C_min > 0.7 bei AI-native)" } },
      { text: { en: "Low θ_index: Average θ_index 0.35 (vs. 0.75+ for AI-native)", de: "Niedriger θ_index: Durchschnittlicher θ_index 0.35 (vs. 0.75+ bei AI-native)" } },
      { text: { en: "Slow Scaling: 5-10x slower scaling velocity compared to AI-native competitors", de: "Langsame Skalierung: 5-10x langsamere Skalierungsgeschwindigkeit verglichen mit AI-native Wettbewerbern" } }
    ], 
    metrics: [
      { label: { en: "Bottleneck Rate", de: "Bottleneck Rate" }, value: "70%", trend: "down" as const },
      { label: { en: "Avg θ_index", de: "Ø θ_index" }, value: "0.35", trend: "down" as const },
      { label: { en: "C₂ (Setup) Gap", de: "C₂ (Setup) Lücke" }, value: "36%", trend: "down" as const },
      { label: { en: "Scaling Gap", de: "Skalierungs-Gap" }, value: "5-10x", trend: "down" as const }
    ]
  },
  framework: { 
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" }, 
    subtitle: { 
      en: "How AI-native companies build strategic capabilities that drive 3-5x faster scaling", 
      de: "Wie AI-native Unternehmen strategische Capabilities aufbauen, die 3-5x schnellere Skalierung ermöglichen" 
    }, 
    items: [
      {
        id: "capability-assessment",
        icon: "ClipboardCheck",
        color: "cyan",
        bgColor: "bg-cyan-500/10",
        title: { en: "Capability Assessment & Bottleneck Identification", de: "Capability Assessment & Bottleneck-Identifikation" },
        subtitle: { en: "Score C₁-C₄ across 8 dimensions, identify C_min", de: "Score C₁-C₄ über 8 Dimensionen, identifiziere C_min" },
        description: { 
          en: "Systematic assessment of all 4 capabilities using θ_index framework. Score C₁-C₄ across 8 dimensions, identify C_min (bottleneck), and create improvement roadmap.",
          de: "Systematische Bewertung aller 4 Capabilities mit dem θ_index Framework. Score C₁-C₄ über 8 Dimensionen, identifiziere C_min (Bottleneck)."
        },
        metrics: [
          { label: { en: "Capability Visibility", de: "Capability Sichtbarkeit" }, value: "+100%" },
          { label: { en: "Assessment Time", de: "Assessment Zeit" }, value: "-90%" }
        ],
        actions: [
          { en: "θ_index Assessment (4 Capabilities × 8 Dimensions)", de: "θ_index Assessment (4 Capabilities × 8 Dimensionen)" },
          { en: "Capability Benchmarking (vs. best-in-class)", de: "Capability Benchmarking (vs. Best-in-Class)" },
          { en: "Bottleneck Analysis (identify C_min)", de: "Bottleneck-Analyse (identifiziere C_min)" },
          { en: "AI-Powered Assessment (LASR.io, 12 min)", de: "AI-Powered Assessment (LASR.io, 12 min)" }
        ]
      },
      {
        id: "capability-development",
        icon: "TrendingUp",
        color: "green",
        bgColor: "bg-green-500/10",
        title: { en: "Capability Development & Improvement (C₁-C₄)", de: "Capability Entwicklung & Verbesserung (C₁-C₄)" },
        subtitle: { en: "Fix C_min first for highest ROI", de: "Fix C_min zuerst für höchsten ROI" },
        description: { 
          en: "Systematic development of all 4 capabilities: C₁ (Strategy), C₂ (Setup), C₃ (Execution), C₄ (Operationalization). Fix C_min first for highest ROI.",
          de: "Systematische Entwicklung aller 4 Capabilities: C₁ (Strategie), C₂ (Setup), C₃ (Execution), C₄ (Operationalisierung)."
        },
        metrics: [
          { label: { en: "θ_index Improvement", de: "θ_index Verbesserung" }, value: "+50-100%" },
          { label: { en: "Scaling Velocity", de: "Skalierungsgeschwindigkeit" }, value: "+3-5x" }
        ],
        actions: [
          { en: "C₁ (Strategy) Development: ICP, Value Prop, OKRs", de: "C₁ (Strategie) Entwicklung: ICP, Value Prop, OKRs" },
          { en: "C₂ (Setup) Development: Org, Systems, Processes", de: "C₂ (Setup) Entwicklung: Org, Systeme, Prozesse" },
          { en: "C₃ (Execution) Development: GTM, Product, CS", de: "C₃ (Execution) Entwicklung: GTM, Product, CS" },
          { en: "C₄ (Operationalization) Development: Ops, Finance, Talent", de: "C₄ (Operationalisierung) Entwicklung: Ops, Finance, Talent" }
        ]
      },
      {
        id: "capability-integration",
        icon: "Network",
        color: "blue",
        bgColor: "bg-blue-500/10",
        title: { en: "Capability Integration & Interdependencies", de: "Capability Integration & Abhängigkeiten" },
        subtitle: { en: "Capabilities are multiplicative, not additive", de: "Capabilities sind multiplikativ, nicht additiv" },
        description: { 
          en: "Understanding and leveraging capability interdependencies. Capabilities are multiplicative: S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index.",
          de: "Verstehen und Nutzen von Capability-Abhängigkeiten. Capabilities sind multiplikativ: S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index."
        },
        metrics: [
          { label: { en: "Capability Synergies", de: "Capability Synergien" }, value: "+50-100%" },
          { label: { en: "Coordination", de: "Koordination" }, value: "+3-5x" }
        ],
        actions: [
          { en: "Multiplicative Formula: S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄)", de: "Multiplikative Formel: S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄)" },
          { en: "Bottleneck Principle: C_min limits performance", de: "Bottleneck-Prinzip: C_min limitiert Performance" },
          { en: "Capability Sequencing: Fix C_min → C₂ → C₁ → C₃ → C₄", de: "Capability Sequenzierung: Fix C_min → C₂ → C₁ → C₃ → C₄" },
          { en: "AI-Powered Integration & Synergy Detection", de: "AI-Powered Integration & Synergy-Erkennung" }
        ]
      },
      {
        id: "capability-optimization",
        icon: "RefreshCw",
        color: "violet",
        bgColor: "bg-violet-500/10",
        title: { en: "Capability Optimization & Continuous Improvement", de: "Capability Optimierung & Kontinuierliche Verbesserung" },
        subtitle: { en: "Capabilities decay without continuous improvement", de: "Capabilities verfallen ohne kontinuierliche Verbesserung" },
        description: { 
          en: "Continuous optimization of all 4 capabilities. Capabilities decay without continuous improvement. Track, review, benchmark, experiment.",
          de: "Kontinuierliche Optimierung aller 4 Capabilities. Capabilities verfallen ohne kontinuierliche Verbesserung."
        },
        metrics: [
          { label: { en: "Capability Maintenance", de: "Capability Maintenance" }, value: "+100%" },
          { label: { en: "Continuous Improvement", de: "Kontinuierliche Verbesserung" }, value: "+3-5x" }
        ],
        actions: [
          { en: "Capability Monitoring (Real-time dashboard)", de: "Capability Monitoring (Echtzeit-Dashboard)" },
          { en: "Quarterly Capability Reviews", de: "Vierteljährliche Capability Reviews" },
          { en: "Capability Benchmarking (n=22 dataset)", de: "Capability Benchmarking (n=22 Datensatz)" },
          { en: "AI-Powered Optimization", de: "AI-Powered Optimierung" }
        ]
      },
      {
        id: "ai-capability-excellence",
        icon: "Sparkles",
        color: "pink",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered Capability Excellence", de: "AI-Powered Capability Excellence" },
        subtitle: { en: "AI that continuously optimizes all 4 capabilities", de: "AI, die kontinuierlich alle 4 Capabilities optimiert" },
        description: { 
          en: "AI that continuously optimizes all 4 capabilities. Auto-scoring, predictive analytics, smart recommendations, autonomous optimization.",
          de: "AI, die kontinuierlich alle 4 Capabilities optimiert. Auto-Scoring, Predictive Analytics, Smart Recommendations."
        },
        metrics: [
          { label: { en: "Capability Efficiency", de: "Capability Effizienz" }, value: "+300%" },
          { label: { en: "θ_index", de: "θ_index" }, value: "+50-100%" }
        ],
        actions: [
          { en: "AI Capability Assessment (LASR.io, 12 min)", de: "AI Capability Assessment (LASR.io, 12 min)" },
          { en: "AI Capability Development (Predictive Plans)", de: "AI Capability Development (Predictive Plans)" },
          { en: "AI Capability Integration (Smart Coordination)", de: "AI Capability Integration (Smart Coordination)" },
          { en: "AI Capability Excellence (Autonomous)", de: "AI Capability Excellence (Autonom)" }
        ]
      }
    ]
  },
  bestPractices: { 
    title: { en: "θ_index Framework Deep Dive", de: "θ_index Framework Deep Dive" }, 
    categories: [
      {
        category: { en: "4 Capabilities (C₁-C₄)", de: "4 Capabilities (C₁-C₄)" },
        items: [
          { do: { en: "C₁ (Strategy): Where to play, how to win (0-1 score)", de: "C₁ (Strategie): Wo spielen, wie gewinnen (0-1 Score)" }, dont: { en: "Random strategy without clear ICP and value proposition", de: "Zufällige Strategie ohne klares ICP und Value Proposition" } },
          { do: { en: "C₂ (Setup): Org structure, systems, processes (0-1 score)", de: "C₂ (Setup): Org-Struktur, Systeme, Prozesse (0-1 Score)" }, dont: { en: "Executing without proper infrastructure and systems", de: "Execution ohne richtige Infrastruktur und Systeme" } }
        ]
      },
      {
        category: { en: "Bottleneck Distribution (n=22)", de: "Bottleneck Verteilung (n=22)" },
        items: [
          { do: { en: "Fix C_min first - highest ROI for capability improvement", de: "Fix C_min zuerst - höchster ROI für Capability-Verbesserung" }, dont: { en: "Investing in strongest capability while bottleneck persists", de: "In stärkste Capability investieren während Bottleneck besteht" } },
          { do: { en: "C₂ (Setup) is most common bottleneck at 36%", de: "C₂ (Setup) ist häufigster Bottleneck bei 36%" }, dont: { en: "Assuming execution is the problem when setup is broken", de: "Annehmen dass Execution das Problem ist wenn Setup kaputt ist" } }
        ]
      },
      {
        category: { en: "θ_index Targets", de: "θ_index Ziele" },
        items: [
          { do: { en: "Target θ_index > 0.7 and C_min > 0.7 for AI-Native", de: "Ziel θ_index > 0.7 und C_min > 0.7 für AI-Native" }, dont: { en: "Accepting θ_index < 0.5 as 'good enough'", de: "θ_index < 0.5 als 'gut genug' akzeptieren" } },
          { do: { en: "Track capability improvements quarterly", de: "Capability-Verbesserungen vierteljährlich tracken" }, dont: { en: "Annual capability reviews are too infrequent", de: "Jährliche Capability Reviews sind zu selten" } }
        ]
      }
    ]
  },
  roadmap: { 
    title: { en: "90-Day Implementation Roadmap", de: "90-Tage-Implementierungs-Roadmap" }, 
    subtitle: { 
      en: "From capability bottleneck to AI-native excellence in 90 days", 
      de: "Von Capability-Bottleneck zu AI-native Excellence in 90 Tagen" 
    }, 
    phases: [
      {
        phase: 1,
        title: { en: "Assessment", de: "Assessment" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "θ_index Assessment and C_min identification", de: "θ_index Assessment und C_min-Identifikation" },
        deliverables: [
          { en: "θ_index Assessment Report (20-30 pages)", de: "θ_index Assessment Report (20-30 Seiten)" },
          { en: "Capability Benchmarking Report", de: "Capability Benchmarking Report" },
          { en: "Bottleneck Analysis with C_min identification", de: "Bottleneck-Analyse mit C_min-Identifikation" },
          { en: "Capability Improvement Roadmap", de: "Capability Improvement Roadmap" }
        ],
        gradient: "from-cyan-500 to-blue-500"
      },
      {
        phase: 2,
        title: { en: "Development", de: "Entwicklung" },
        timeline: { en: "Week 3-6", de: "Woche 3-6" },
        focus: { en: "Fix C_min and develop all capabilities", de: "Fix C_min und entwickle alle Capabilities" },
        deliverables: [
          { en: "C_min Improvement Plan (3-6 months)", de: "C_min Verbesserungsplan (3-6 Monate)" },
          { en: "Capability Development Plans (C₁-C₄)", de: "Capability-Entwicklungspläne (C₁-C₄)" },
          { en: "Capability Integration Plan", de: "Capability-Integrationsplan" },
          { en: "Real-time Capability Dashboard", de: "Echtzeit-Capability-Dashboard" }
        ],
        gradient: "from-green-500 to-emerald-500"
      },
      {
        phase: 3,
        title: { en: "Optimization", de: "Optimierung" },
        timeline: { en: "Week 7-12", de: "Woche 7-12" },
        focus: { en: "Continuous optimization and AI integration", de: "Kontinuierliche Optimierung und AI-Integration" },
        deliverables: [
          { en: "Capability Optimization Dashboard", de: "Capability-Optimierungs-Dashboard" },
          { en: "Capability Experiment Results", de: "Capability-Experiment-Ergebnisse" },
          { en: "AI Capability Intelligence (LASR.io)", de: "AI Capability Intelligence (LASR.io)" },
          { en: "Capability Excellence Scorecard", de: "Capability Excellence Scorecard" }
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
        company: { en: "Series A SaaS Company", de: "Series A SaaS Unternehmen" },
        problem: { 
          en: "θ_index 0.35, C₂ (Setup) bottleneck at 0.31, slow scaling at 40% growth. Random capability investment wasn't working.",
          de: "θ_index 0.35, C₂ (Setup) Bottleneck bei 0.31, langsame Skalierung bei 40% Wachstum."
        },
        solution: { 
          en: "Applied all 5 components: Assessment identified C₂ as bottleneck, Development fixed C₂ first, Integration aligned all capabilities.",
          de: "Alle 5 Komponenten angewendet: Assessment identifizierte C₂ als Bottleneck, Development fixte C₂ zuerst."
        },
        results: [
          { metric: { en: "θ_index", de: "θ_index" }, before: "0.35", after: "0.78", change: "+123%" },
          { metric: { en: "C₂ (Setup)", de: "C₂ (Setup)" }, before: "0.31", after: "0.75", change: "+142%" },
          { metric: { en: "ARR Growth", de: "ARR Wachstum" }, before: "40%", after: "120%", change: "+200%" },
          { metric: { en: "Scaling Velocity", de: "Skalierung" }, before: "1x", after: "3.2x", change: "+220%" }
        ],
        timeline: { en: "12 months | Boost + Accelerate", de: "12 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS Unternehmen" },
        problem: { 
          en: "θ_index 0.42, multiple capability gaps, needed to scale 3x in 18 months. No clear capability strategy.",
          de: "θ_index 0.42, mehrere Capability-Lücken, musste 3x in 18 Monaten skalieren."
        },
        solution: { 
          en: "Systematic capability development: Assessed all gaps, developed all 4 capabilities in parallel, deployed full AI capability stack.",
          de: "Systematische Capability-Entwicklung: Alle Lücken bewertet, alle 4 Capabilities parallel entwickelt."
        },
        results: [
          { metric: { en: "θ_index", de: "θ_index" }, before: "0.42", after: "0.78", change: "+86%" },
          { metric: { en: "All C > 0.7", de: "Alle C > 0.7" }, before: "0/4", after: "4/4", change: "+100%" },
          { metric: { en: "ARR Growth", de: "ARR Wachstum" }, before: "50%", after: "95%", change: "+90%" },
          { metric: { en: "Scaling Velocity", de: "Skalierung" }, before: "1x", after: "2.8x", change: "+180%" }
        ],
        timeline: { en: "18 months | Boost + Accelerate + Extension", de: "18 Monate | Boost + Accelerate + Extension" }
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: { 
          en: "Needed to maintain θ_index 0.85+ while scaling 5x. Previous approach wasn't sustainable at scale.",
          de: "Musste θ_index 0.85+ halten während 5x Skalierung. Bisheriger Ansatz war nicht nachhaltig."
        },
        solution: { 
          en: "Full AI capability excellence: Deployed LASR.io for continuous assessment, AI-powered development, predictive optimization.",
          de: "Volle AI Capability Excellence: LASR.io für kontinuierliches Assessment deployed, AI-powered Entwicklung."
        },
        results: [
          { metric: { en: "θ_index", de: "θ_index" }, before: "0.55", after: "0.88", change: "+60%" },
          { metric: { en: "C_min", de: "C_min" }, before: "0.55", after: "0.85", change: "+55%" },
          { metric: { en: "ARR Growth", de: "ARR Wachstum" }, before: "60%", after: "110%", change: "+83%" },
          { metric: { en: "Scaling Velocity", de: "Skalierung" }, before: "1x", after: "4.2x", change: "+320%" }
        ],
        timeline: { en: "24 months | Accelerate × 2 phases", de: "24 Monate | Accelerate × 2 Phasen" }
      }
    ]
  },
  solutionsConnection: { 
    title: { en: "Ready to Execute?", de: "Bereit zur Umsetzung?" }, 
    subtitle: { 
      en: "Choose the right engagement model for your timeline and budget", 
      de: "Wähle das richtige Engagement-Modell für deine Timeline und dein Budget" 
    }, 
    items: [
      {
        type: "power-up",
        name: { en: "Scaling Velocity Sprint", de: "Scaling Velocity Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K", de: "€23.6K" },
        outcome: { 
          en: "θ_index assessment, C_min identification, and 12-24 month improvement roadmap. Perfect for understanding your capability bottleneck.",
          de: "θ_index Assessment, C_min-Identifikation und 12-24 Monate Verbesserungs-Roadmap. Perfekt um deinen Capability-Bottleneck zu verstehen."
        },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/scaling-velocity",
        icon: "Zap",
        color: "amber"
      },
      {
        type: "boost",
        name: { en: "Scaling OS", de: "Scaling OS" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { 
          en: "Full capability transformation in 90 days. Fix C_min, develop all capabilities, implement AI capability intelligence.",
          de: "Volle Capability-Transformation in 90 Tagen. Fix C_min, entwickle alle Capabilities, implementiere AI Capability Intelligence."
        },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/scaling-os",
        icon: "Rocket",
        color: "blue"
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
      en: "Series A-C SaaS companies looking to improve θ_index from 0.35 to 0.75+ and achieve 3-5x faster scaling",
      de: "Series A-C SaaS-Unternehmen, die θ_index von 0.35 auf 0.75+ verbessern und 3-5x schnellere Skalierung erreichen wollen"
    }, 
    personas: [
      {
        icon: "Crown",
        role: { en: "CEOs", de: "CEOs" },
        pain: { en: "Need to improve all 4 strategic capabilities and achieve 3-5x faster scaling", de: "Müssen alle 4 strategischen Capabilities verbessern und 3-5x schnellere Skalierung erreichen" },
        outcome: { en: "Clear capability roadmap, θ_index 0.75+, systematic scaling", de: "Klare Capability-Roadmap, θ_index 0.75+, systematische Skalierung" },
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
        outcome: { en: "θ_index visibility, capability tracking, strategic oversight", de: "θ_index Sichtbarkeit, Capability-Tracking, strategische Aufsicht" },
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
    headline: { en: "Get Started Today", de: "Starte noch heute" }, 
    subline: { 
      en: "Download the playbook or book a call to get personalized advice on your capability development strategy",
      de: "Lade das Playbook herunter oder buche einen Call für personalisierte Beratung zu deiner Capability-Entwicklungsstrategie"
    }, 
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-seitiges Playbook mit Templates" },
      { en: "θ_index Framework (4×8 Matrix)", de: "θ_index Framework (4×8 Matrix)" },
      { en: "3 anonymized case studies", de: "3 anonymisierte Case Studies" },
      { en: "90-day implementation roadmap", de: "90-Tage-Implementierungs-Roadmap" }
    ], 
    bookingUrl: "https://scalingx.fillout.com/inflection-call", 
    downloadUrl: "#" 
  }
};
