import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('ai-native-scaling')!;

export const aiNativeScalingData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "AI-Native Scaling · Master Playbook", de: "AI-Native Scaling · Master Playbook" },
    title: "AI-Native Scaling Playbook",
    subtitle: { 
      en: "The complete framework for AI-native transformation", 
      de: "Das komplette Framework für AI-native Transformation" 
    },
    description: {
      en: "Traditional scaling is broken. Companies rely on linear scaling (Revenue = People), manual processes, and fragmented systems. The result? 8-12 years to €100M ARR, €150k-€200k ARR/Employee, and 60-80% companies stalling at €10-30M ARR. They can't scale without proportional headcount.\n\nAI-native companies use a different playbook. They leverage the AI-Native Scaling Framework (4 Capabilities × 8 Dimensions × AI) to scale 10-30x faster, reach €100M ARR in 8-18 months, and achieve €500k-€1.5M ARR/Employee. They scale superlinearly: Revenue >>> People.\n\nThis playbook gives you the complete framework used by AI-native companies to transform their entire organization. Learn from 5 domain playbooks, 12 sub-playbooks, implementation guides, and real-world case studies from 22 companies.",
      de: "Traditionelles Skalieren ist kaputt. Unternehmen verlassen sich auf lineares Skalieren (Revenue = People), manuelle Prozesse und fragmentierte Systeme. Das Ergebnis? 8-12 Jahre bis €100M ARR, €150k-€200k ARR/Mitarbeiter und 60-80% der Unternehmen stagnieren bei €10-30M ARR. Sie können nicht ohne proportionales Headcount skalieren.\n\nAI-native Unternehmen nutzen ein anderes Playbook. Sie nutzen das AI-Native Scaling Framework (4 Capabilities × 8 Dimensionen × AI) um 10-30x schneller zu skalieren, €100M ARR in 8-18 Monaten zu erreichen und €500k-€1.5M ARR/Mitarbeiter zu erzielen. Sie skalieren superlinear: Revenue >>> People.\n\nDieses Playbook gibt dir das komplette Framework, das AI-native Unternehmen nutzen, um ihre gesamte Organisation zu transformieren. Lerne von 5 Domain Playbooks, 12 Sub-Playbooks, Implementierungsguides und echten Case Studies von 22 Unternehmen."
    },
    trustBadges: [
      { en: "~19,000 Words", de: "~19.000 Wörter" },
      { en: "5 Domain Playbooks", de: "5 Domain Playbooks" },
      { en: "12 Sub-Playbooks", de: "12 Sub-Playbooks" },
      { en: "22 Case Studies", de: "22 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    gradient: "from-purple-500 to-violet-500"
  },
  summary: {
    problem: {
      title: { en: "The Problem", de: "Das Problem" },
      text: {
        en: "Linear scaling (Revenue = People) leads to 8-12 years to €100M ARR, €150k-€200k ARR/Employee, and 60-80% of companies stalling at €10-30M ARR. Traditional companies can't scale without proportional headcount growth.",
        de: "Lineares Skalieren (Revenue = People) führt zu 8-12 Jahren bis €100M ARR, €150k-€200k ARR/Mitarbeiter und 60-80% der Unternehmen stagnieren bei €10-30M ARR. Traditionelle Unternehmen können nicht ohne proportionales Headcount-Wachstum skalieren."
      }
    },
    whyItMatters: {
      title: { en: "Why It Matters", de: "Warum es wichtig ist" },
      text: {
        en: "Capabilities are MULTIPLICATIVE, not additive. A weak capability bottlenecks the entire system: Strong C₁ × Weak C₂ × Strong C₃ × Strong C₄ = Bottleneck. You can only achieve hypergrowth when all 4 capabilities fire together.",
        de: "Capabilities sind MULTIPLIKATIV, nicht additiv. Eine schwache Capability bremst das gesamte System: Starke C₁ × Schwache C₂ × Starke C₃ × Starke C₄ = Bottleneck. Du kannst nur Hypergrowth erreichen, wenn alle 4 Capabilities zusammen feuern."
      }
    },
    solution: {
      title: { en: "The Solution", de: "Die Lösung" },
      text: {
        en: "AI-Native Scaling Framework (4 Capabilities × 8 Dimensions × AI) enables companies to scale 10-30x faster, reach €100M ARR in 8-18 months, and achieve €500k-€1.5M ARR/Employee with superlinear growth.",
        de: "AI-Native Scaling Framework (4 Capabilities × 8 Dimensionen × AI) ermöglicht Unternehmen 10-30x schneller zu skalieren, €100M ARR in 8-18 Monaten zu erreichen und €500k-€1.5M ARR/Mitarbeiter mit superlinearem Wachstum zu erzielen."
      }
    }
  },
  problem: {
    title: { en: "Why Traditional Scaling is Broken", de: "Warum traditionelles Skalieren kaputt ist" },
    subtitle: { 
      en: "The 4 core challenges that limit traditional scaling", 
      de: "Die 4 Kern-Herausforderungen, die traditionelles Skalieren limitieren" 
    },
    bullets: [
      { text: { en: "Linear Scaling Model: Revenue = People means every €1M ARR requires 5-10 new hires", de: "Lineares Skalierungsmodell: Revenue = People bedeutet jeder €1M ARR erfordert 5-10 neue Einstellungen" }, icon: "AlertTriangle" },
      { text: { en: "Slow Time to Scale: 8-12 years to €100M ARR vs. 8-18 months for AI-native (-90-95%)", de: "Langsame Zeit zur Skalierung: 8-12 Jahre bis €100M ARR vs. 8-18 Monate für AI-native (-90-95%)" }, icon: "Clock" },
      { text: { en: "Low Efficiency: €150k-€200k ARR/Employee vs. €500k-€1.5M for AI-native (+233-650%)", de: "Niedrige Effizienz: €150k-€200k ARR/Mitarbeiter vs. €500k-€1.5M für AI-native (+233-650%)" }, icon: "TrendingDown" },
      { text: { en: "High Stalling Rate: 60-80% companies stall at €10-30M ARR vs. 10-20% for AI-native", de: "Hohe Stagnationsrate: 60-80% Unternehmen stagnieren bei €10-30M ARR vs. 10-20% für AI-native" }, icon: "XCircle" }
    ],
    metrics: [
      { value: "8-12 Years", label: { en: "Traditional Time to €100M ARR", de: "Traditionelle Zeit bis €100M ARR" } },
      { value: "€150-200k", label: { en: "Traditional ARR/Employee", de: "Traditioneller ARR/Mitarbeiter" } },
      { value: "60-80%", label: { en: "Companies Stalling at €10-30M", de: "Unternehmen stagnieren bei €10-30M" } },
      { value: "0.2-0.4", label: { en: "Traditional θ_index", de: "Traditioneller θ_index" } }
    ]
  },
  framework: {
    title: { en: "The AI-Native Scaling Framework", de: "Das AI-Native Scaling Framework" },
    subtitle: { 
      en: "How AI-native companies scale 10-30x faster with superlinear growth", 
      de: "Wie AI-native Unternehmen 10-30x schneller mit superlinearem Wachstum skalieren" 
    },
    items: [
      {
        id: "c1-strategy",
        icon: "Target",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        title: { en: "C₁: Strategy Capability", de: "C₁: Strategie Capability" },
        subtitle: { en: "Where to play, How to win", de: "Wo spielen, Wie gewinnen" },
        description: {
          en: "How you define strategic direction. ICP Definition, Market Positioning, Competitive Strategy, Strategic Planning. Exponent: 1.5 (Most important capability)",
          de: "Wie du strategische Richtung definierst. ICP Definition, Marktpositionierung, Wettbewerbsstrategie, Strategische Planung. Exponent: 1.5 (Wichtigste Capability)"
        },
        metrics: [
          { label: { en: "Strategic Clarity", de: "Strategische Klarheit" }, value: "+100%" },
          { label: { en: "Decision Velocity", de: "Entscheidungsgeschwindigkeit" }, value: "+3-5x" },
        ],
        actions: [
          { en: "Define ICP with AI-powered market intelligence", de: "Definiere ICP mit AI-gestützter Market Intelligence" },
          { en: "Build competitive positioning with AI analysis", de: "Baue Wettbewerbspositionierung mit AI-Analyse" },
        ]
      },
      {
        id: "c2-setup",
        icon: "Settings",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "C₂: Setup Capability", de: "C₂: Setup Capability" },
        subtitle: { en: "Org structure, Systems, Processes", de: "Org-Struktur, Systeme, Prozesse" },
        description: {
          en: "How you build organizational infrastructure. Org Structure, Systems & Tools, Process Design, Documentation. Exponent: 1.0 (Foundation capability)",
          de: "Wie du organisatorische Infrastruktur aufbaust. Org-Struktur, Systeme & Tools, Prozessdesign, Dokumentation. Exponent: 1.0 (Fundament Capability)"
        },
        metrics: [
          { label: { en: "Setup Time", de: "Setup Zeit" }, value: "-60-80%" },
          { label: { en: "Process Efficiency", de: "Prozess-Effizienz" }, value: "+2-5x" },
        ],
        actions: [
          { en: "Design AI-native org structure", de: "Designe AI-native Org-Struktur" },
          { en: "Implement AI process automation", de: "Implementiere AI Prozess-Automation" },
        ]
      },
      {
        id: "c3-execution",
        icon: "Rocket",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "C₃: Execution Capability", de: "C₃: Execution Capability" },
        subtitle: { en: "GTM, Product, Customer Success", de: "GTM, Product, Customer Success" },
        description: {
          en: "How you deliver on strategy. GTM Execution, Product Execution, Customer Success Execution. Exponent: 1.5 (Most important capability)",
          de: "Wie du Strategie umsetzt. GTM Execution, Product Execution, Customer Success Execution. Exponent: 1.5 (Wichtigste Capability)"
        },
        metrics: [
          { label: { en: "Execution Velocity", de: "Execution Velocity" }, value: "+3-5x" },
          { label: { en: "GTM Efficiency", de: "GTM Effizienz" }, value: "+50-100%" },
        ],
        actions: [
          { en: "Build AI-powered GTM engine", de: "Baue AI-gestützte GTM Engine" },
          { en: "Deploy AI product development", de: "Deploy AI Product Development" },
        ]
      },
      {
        id: "c4-operationalization",
        icon: "Layers",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "C₄: Operationalization Capability", de: "C₄: Operationalisierung Capability" },
        subtitle: { en: "Operations, Finance, Talent, Governance", de: "Operations, Finance, Talent, Governance" },
        description: {
          en: "How you scale infrastructure. Operations Scaling, Financial Management, Talent Operations, Governance Systems. Exponent: 1.0 (Foundation capability)",
          de: "Wie du Infrastruktur skalierst. Operations Scaling, Finanzmanagement, Talent Operations, Governance Systeme. Exponent: 1.0 (Fundament Capability)"
        },
        metrics: [
          { label: { en: "Operational Efficiency", de: "Operative Effizienz" }, value: "+2-5x" },
          { label: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, value: "+100-300%" },
        ],
        actions: [
          { en: "Implement AI operations automation", de: "Implementiere AI Operations Automation" },
          { en: "Build AI-powered financial planning", de: "Baue AI-gestützte Finanzplanung" },
        ]
      },
      {
        id: "theta-index",
        icon: "Zap",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "θ_index: AI Multiplier", de: "θ_index: AI Multiplikator" },
        subtitle: { en: "6 dimensions, 0-1 scale", de: "6 Dimensionen, 0-1 Skala" },
        description: {
          en: "How AI multiplies all 4 capabilities. AI Strategy, AI Infrastructure, AI Operations, AI Talent, AI Culture, AI Governance. θ_index 0.75-0.95 = 10-30x scaling velocity",
          de: "Wie AI alle 4 Capabilities multipliziert. AI Strategy, AI Infrastructure, AI Operations, AI Talent, AI Culture, AI Governance. θ_index 0.75-0.95 = 10-30x Skalierungsgeschwindigkeit"
        },
        metrics: [
          { label: { en: "Scaling Velocity", de: "Skalierungsgeschwindigkeit" }, value: "10-30x" },
          { label: { en: "θ_index Target", de: "θ_index Ziel" }, value: "0.75-0.95" },
        ],
        actions: [
          { en: "Assess θ_index across all 6 dimensions", de: "Bewerte θ_index über alle 6 Dimensionen" },
          { en: "Deploy AI across all capabilities", de: "Deploy AI über alle Capabilities" },
        ]
      }
    ]
  },
  bestPractices: {
    title: { en: "Best Practices", de: "Best Practices" },
    categories: [
      {
        category: { en: "The Scaling Success Formula", de: "Die Skalierungserfolgs-Formel" },
        items: [
          { do: { en: "S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index × 100", de: "S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index × 100" }, dont: { en: "Linear thinking: S = Sum of capabilities", de: "Lineares Denken: S = Summe der Capabilities" } },
          { do: { en: "E = Enablers (Capital × Talent × Culture)", de: "E = Enablers (Kapital × Talent × Kultur)" }, dont: { en: "Ignore enabling factors", de: "Ignoriere ermöglichende Faktoren" } },
        ]
      },
      {
        category: { en: "The 8 Dimensions", de: "Die 8 Dimensionen" },
        items: [
          { do: { en: "Apply all 4 capabilities across all 8 dimensions", de: "Wende alle 4 Capabilities über alle 8 Dimensionen an" }, dont: { en: "Focus on only 1-2 dimensions", de: "Fokussiere nur auf 1-2 Dimensionen" } },
          { do: { en: "D₁: GTM, D₂: Product, D₃: Ops, D₄: Finance", de: "D₁: GTM, D₂: Product, D₃: Ops, D₄: Finance" }, dont: { en: "Neglect supporting dimensions", de: "Vernachlässige unterstützende Dimensionen" } },
          { do: { en: "D₅: Talent, D₆: CS, D₇: Data/Tech, D₈: Governance", de: "D₅: Talent, D₆: CS, D₇: Data/Tech, D₈: Governance" }, dont: { en: "Treat dimensions in isolation", de: "Behandle Dimensionen isoliert" } },
        ]
      },
      {
        category: { en: "AI-Native Execution", de: "AI-Native Execution" },
        items: [
          { do: { en: "θ_index 0.75-0.95: 10-30x scaling velocity", de: "θ_index 0.75-0.95: 10-30x Skalierungsgeschwindigkeit" }, dont: { en: "θ_index 0.2-0.4: 1-2x (traditional)", de: "θ_index 0.2-0.4: 1-2x (traditionell)" } },
          { do: { en: "Fix bottleneck capability first", de: "Fixe Bottleneck Capability zuerst" }, dont: { en: "Optimize already strong capabilities", de: "Optimiere bereits starke Capabilities" } },
        ]
      }
    ]
  },
  roadmap: {
    title: { en: "90-Day Implementation Roadmap", de: "90-Tage Implementierungs-Roadmap" },
    subtitle: { 
      en: "How to implement the AI-Native Scaling Framework in 90 days", 
      de: "Wie du das AI-Native Scaling Framework in 90 Tagen implementierst" 
    },
    phases: [
      {
        phase: 1,
        title: { en: "Assessment", de: "Assessment" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Assess all 4 capabilities, 8 dimensions, θ_index, identify bottleneck, create roadmap", de: "Bewerte alle 4 Capabilities, 8 Dimensionen, θ_index, identifiziere Bottleneck, erstelle Roadmap" },
        deliverables: [
          { en: "Strategic Capabilities Assessment (C₁-C₄ scores)", de: "Strategic Capabilities Assessment (C₁-C₄ Scores)" },
          { en: "8 Dimensions Assessment (D₁-D₈ scores)", de: "8 Dimensionen Assessment (D₁-D₈ Scores)" },
          { en: "θ_index Scoring (AI Maturity)", de: "θ_index Scoring (AI Maturity)" },
          { en: "Bottleneck Analysis & Quick Wins Identification", de: "Bottleneck-Analyse & Quick Wins Identifikation" },
          { en: "AI-Native Scaling Roadmap (12-24 months)", de: "AI-Native Scaling Roadmap (12-24 Monate)" }
        ],
        gradient: "from-purple-500 to-violet-500"
      },
      {
        phase: 2,
        title: { en: "Build", de: "Build" },
        timeline: { en: "Week 3-8", de: "Woche 3-8" },
        focus: { en: "Fix bottleneck capability, improve all 4 capabilities across key dimensions", de: "Behebe Bottleneck Capability, verbessere alle 4 Capabilities über Schlüsseldimensionen" },
        deliverables: [
          { en: "C₁ Strategy: ICP, Positioning, Strategic Planning", de: "C₁ Strategy: ICP, Positionierung, Strategische Planung" },
          { en: "C₂ Setup: Org Structure, Systems, Processes", de: "C₂ Setup: Org-Struktur, Systeme, Prozesse" },
          { en: "C₃ Execution: GTM, Product, Customer Success", de: "C₃ Execution: GTM, Product, Customer Success" },
          { en: "C₄ Operationalization: Ops, Finance, Talent, Governance", de: "C₄ Operationalization: Ops, Finance, Talent, Governance" },
          { en: "AI Integration across all capabilities and dimensions", de: "AI Integration über alle Capabilities und Dimensionen" }
        ],
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        phase: 3,
        title: { en: "Scale", de: "Scale" },
        timeline: { en: "Week 9-12", de: "Woche 9-12" },
        focus: { en: "Scale all 4 capabilities, optimize performance, establish continuous improvement", de: "Skaliere alle 4 Capabilities, optimiere Performance, etabliere kontinuierliche Verbesserung" },
        deliverables: [
          { en: "AI-Native Scaling (Scale C₁-C₄ across D₁-D₈)", de: "AI-Native Scaling (Skaliere C₁-C₄ über D₁-D₈)" },
          { en: "AI-Native Optimization (Continuous improvement)", de: "AI-Native Optimization (Kontinuierliche Verbesserung)" },
          { en: "AI-Native Tracking (Monthly/quarterly reviews)", de: "AI-Native Tracking (Monatliche/quartalsweise Reviews)" },
          { en: "AI-Native Excellence Scorecard", de: "AI-Native Excellence Scorecard" },
          { en: "Knowledge Transfer & Team Enablement", de: "Wissenstransfer & Team Enablement" }
        ],
        gradient: "from-violet-500 to-purple-500"
      }
    ]
  },
  caseStudies: {
    title: { en: "Real-World Results", de: "Echte Ergebnisse" },
    subtitle: { 
      en: "How 3 companies transformed their entire organization with the framework", 
      de: "Wie 3 Unternehmen ihre gesamte Organisation mit dem Framework transformiert haben" 
    },
    cases: [
      {
        company: { en: "Series A SaaS Company", de: "Series A SaaS Unternehmen" },
        problem: { 
          en: "Low θ_index (0.32), bottlenecks in C₁ and C₂, needed to reach €100M ARR fast", 
          de: "Niedriger θ_index (0.32), Bottlenecks in C₁ und C₂, musste schnell €100M ARR erreichen" 
        },
        solution: { 
          en: "All 4 Capabilities transformed, all 8 Dimensions optimized, AI across all capabilities (θ_index 0.32 → 0.75)", 
          de: "Alle 4 Capabilities transformiert, alle 8 Dimensionen optimiert, AI über alle Capabilities (θ_index 0.32 → 0.75)" 
        },
        results: [
          { metric: { en: "θ_index", de: "θ_index" }, before: "0.32", after: "0.75", change: "+134%" },
          { metric: { en: "Time to €100M", de: "Zeit bis €100M" }, before: "48 months", after: "14 months", change: "-71%" },
          { metric: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, before: "€160k", after: "€700k", change: "+338%" },
          { metric: { en: "ARR", de: "ARR" }, before: "€8M", after: "€100M", change: "+1,150%" },
        ],
        timeline: { en: "12 months | Accelerate", de: "12 Monate | Accelerate" }
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS Unternehmen" },
        problem: { 
          en: "Needed to reach €100M ARR in 18 months, board pressure for hypergrowth", 
          de: "Musste €100M ARR in 18 Monaten erreichen, Board-Druck für Hypergrowth" 
        },
        solution: { 
          en: "Comprehensive AI-native capability development, full stack transformation (θ_index 0.45 → 0.88)", 
          de: "Umfassende AI-native Capability-Entwicklung, Full-Stack Transformation (θ_index 0.45 → 0.88)" 
        },
        results: [
          { metric: { en: "θ_index", de: "θ_index" }, before: "0.45", after: "0.88", change: "+96%" },
          { metric: { en: "Time to €100M", de: "Zeit bis €100M" }, before: "36 months", after: "18 months", change: "-50%" },
          { metric: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, before: "€208k", after: "€833k", change: "+300%" },
          { metric: { en: "Scaling Velocity", de: "Skalierungsgeschwindigkeit" }, before: "3x", after: "25x", change: "+733%" },
        ],
        timeline: { en: "18 months | Accelerate + Extension", de: "18 Monate | Accelerate + Extension" }
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: { 
          en: "Needed to reach €150M ARR in 24 months for IPO readiness", 
          de: "Musste €150M ARR in 24 Monaten für IPO-Readiness erreichen" 
        },
        solution: { 
          en: "Full AI-native transformation, AI excellence across all dimensions (θ_index 0.58 → 0.95)", 
          de: "Volle AI-native Transformation, AI Excellence über alle Dimensionen (θ_index 0.58 → 0.95)" 
        },
        results: [
          { metric: { en: "θ_index", de: "θ_index" }, before: "0.58", after: "0.95", change: "+64%" },
          { metric: { en: "Time to €150M", de: "Zeit bis €150M" }, before: "60 months", after: "24 months", change: "-60%" },
          { metric: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, before: "€250k", after: "€750k", change: "+200%" },
          { metric: { en: "ARR", de: "ARR" }, before: "€50M", after: "€150M", change: "+200%" },
        ],
        timeline: { en: "24 months | Accelerate × 2", de: "24 Monate | Accelerate × 2" }
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
        type: 'power-up',
        name: { en: "Scaling Velocity", de: "Scaling Velocity" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K", de: "€23.6K" },
        outcome: { en: "Complete Assessment: C₁-C₄, D₁-D₈, θ_index + Roadmap + Quick Wins", de: "Komplettes Assessment: C₁-C₄, D₁-D₈, θ_index + Roadmap + Quick Wins" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/scaling-velocity",
        icon: "Zap",
        color: "orange"
      },
      {
        type: 'boost',
        name: { en: "Scaling OS", de: "Scaling OS" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Transform 2-3 capabilities: θ_index +0.2-0.4, Scaling Velocity +3-5x", de: "Transformiere 2-3 Capabilities: θ_index +0.2-0.4, Skalierungsgeschwindigkeit +3-5x" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/scaling-os",
        icon: "Rocket",
        color: "blue"
      },
      {
        type: 'accelerate',
        name: { en: "AI-Native Scaling", de: "AI-Native Scaling" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full Transformation: All C₁-C₄ × D₁-D₈, θ_index 0.75+, €100M ARR path", de: "Volle Transformation: Alle C₁-C₄ × D₁-D₈, θ_index 0.75+, €100M ARR Pfad" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/ai-native-scaling",
        icon: "TrendingUp",
        color: "purple"
      }
    ]
  },
  whoThisIsFor: {
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" },
    subtitle: { 
      en: "This playbook is designed for leaders driving AI-native transformation", 
      de: "Dieses Playbook ist für Führungskräfte, die AI-native Transformation vorantreiben" 
    },
    icp: {
      en: "Series A-C SaaS companies with €5M-€100M ARR looking to achieve 10-30x scaling velocity",
      de: "Series A-C SaaS Unternehmen mit €5M-€100M ARR, die 10-30x Skalierungsgeschwindigkeit erreichen wollen"
    },
    personas: [
      {
        icon: "Target",
        role: { en: "CEOs/Founders", de: "CEOs/Gründer" },
        pain: { en: "Need to transform entire organization to AI-native for hypergrowth", de: "Müssen die gesamte Organisation auf AI-native für Hypergrowth transformieren" },
        outcome: { en: "Complete framework and roadmap to 10-30x scaling", de: "Komplettes Framework und Roadmap zu 10-30x Skalierung" },
        color: "purple"
      },
      {
        icon: "Users",
        role: { en: "C-Level Executives", de: "C-Level Executives" },
        pain: { en: "Responsible for transformation in their specific domain", de: "Verantwortlich für Transformation in ihrem spezifischen Bereich" },
        outcome: { en: "Domain-specific playbooks and implementation guides", de: "Bereichsspezifische Playbooks und Implementierungsguides" },
        color: "blue"
      },
      {
        icon: "Shield",
        role: { en: "Board Members", de: "Board-Mitglieder" },
        pain: { en: "Need to assess and improve company capabilities for value creation", de: "Müssen Unternehmens-Capabilities für Wertschöpfung bewerten und verbessern" },
        outcome: { en: "θ_index scoring and capability assessment framework", de: "θ_index Scoring und Capability Assessment Framework" },
        color: "orange"
      },
      {
        icon: "Briefcase",
        role: { en: "VCs/PE Partners", de: "VCs/PE Partner" },
        pain: { en: "Responsible for portfolio transformation and value creation at scale", de: "Verantwortlich für Portfolio-Transformation und Wertschöpfung im großen Maßstab" },
        outcome: { en: "Portfolio-wide transformation playbook and benchmarks", de: "Portfolio-weites Transformations-Playbook und Benchmarks" },
        color: "violet"
      }
    ]
  },
  subPlaybooks: {
    title: { en: "The 5 Domain Playbooks", de: "Die 5 Domain Playbooks" },
    subtitle: { 
      en: "Deep-dive into each domain with detailed playbooks", 
      de: "Tauche tief in jeden Bereich mit detaillierten Playbooks ein" 
    },
    items: [
      {
        id: 2,
        slug: 'growth-engines',
        title: { en: "AI-Native Growth Engines Playbook", de: "AI-Native Growth Engines Playbook" },
        teaser: { 
          en: "Transform revenue generation with AI-native growth engines. GTM × Product × Customer Success × AI = 3-5x faster growth, CAC -60-75%, NRR 120-150%.", 
          de: "Transformiere Revenue-Generierung mit AI-native Growth Engines. GTM × Product × Customer Success × AI = 3-5x schnelleres Wachstum, CAC -60-75%, NRR 120-150%." 
        },
        icon: "TrendingUp",
        color: "green"
      },
      {
        id: 3,
        slug: 'operating-systems',
        title: { en: "AI-Native Operating Systems Playbook", de: "AI-Native Operating Systems Playbook" },
        teaser: { 
          en: "Transform infrastructure and processes with AI-native operating systems. Operations × Finance × Talent × Data/Tech × AI = 2-5x efficiency, Cost -30-50%.", 
          de: "Transformiere Infrastruktur und Prozesse mit AI-native Operating Systems. Operations × Finance × Talent × Data/Tech × AI = 2-5x Effizienz, Kosten -30-50%." 
        },
        icon: "Settings",
        color: "blue"
      },
      {
        id: 4,
        slug: 'board-governance',
        title: { en: "AI-Native Board & Governance Playbook", de: "AI-Native Board & Governance Playbook" },
        teaser: { 
          en: "Transform board and governance with AI-native frameworks. Strategic × Operational × Exit/M&A × AI = Board Prep -80%, Valuation +2-5x.", 
          de: "Transformiere Board und Governance mit AI-native Frameworks. Strategic × Operational × Exit/M&A × AI = Board Prep -80%, Bewertung +2-5x." 
        },
        icon: "Shield",
        color: "orange"
      },
      {
        id: 5,
        slug: 'portfolio-transformation',
        title: { en: "AI-Native Portfolio Transformation Playbook", de: "AI-Native Portfolio Transformation Playbook" },
        teaser: { 
          en: "Transform entire portfolios to AI-native at scale. Portfolio Excellence × AI = IRR 15% → 40%+, Portfolio Value +3-5x.", 
          de: "Transformiere ganze Portfolios auf AI-native im großen Maßstab. Portfolio Excellence × AI = IRR 15% → 40%+, Portfolio-Wert +3-5x." 
        },
        icon: "Briefcase",
        color: "purple"
      },
      {
        id: 6,
        slug: 'strategic-capabilities',
        title: { en: "Strategic Capabilities Playbook", de: "Strategic Capabilities Playbook" },
        teaser: { 
          en: "Improve the 4 core capabilities that drive AI-native scaling. C₁ × C₂ × C₃ × C₄ × AI = θ_index +88-275%, Scaling Velocity +900-2900%.", 
          de: "Verbessere die 4 Kern-Capabilities für AI-native Skalierung. C₁ × C₂ × C₃ × C₄ × AI = θ_index +88-275%, Skalierungsgeschwindigkeit +900-2900%." 
        },
        icon: "Target",
        color: "red"
      }
    ]
  },
  finalCta: {
    headline: { 
      en: "Transform Your Company Today", 
      de: "Transformiere dein Unternehmen heute" 
    },
    subline: { 
      en: "Get the complete AI-Native Scaling Framework and start your transformation journey", 
      de: "Hole dir das komplette AI-Native Scaling Framework und starte deine Transformationsreise" 
    },
    trustSignals: [
      { en: "100-page playbook with templates", de: "100-Seiten Playbook mit Templates" },
      { en: "5 domain playbooks included", de: "5 Domain Playbooks inklusive" },
      { en: "12 sub-playbooks included", de: "12 Sub-Playbooks inklusive" },
      { en: "22 real-world case studies", de: "22 echte Case Studies" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#"
  }
};
