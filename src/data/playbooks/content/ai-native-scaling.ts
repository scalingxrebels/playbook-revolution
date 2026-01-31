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
      en: "Your complete guide to AI-native scaling", 
      de: "Dein kompletter Guide für AI-native Skalierung" 
    },
    description: {
      en: "Learn how AI-native companies scale 10-30x faster, reach €100M ARR in 8-18 months (vs. 8-12 years traditional), and achieve 2-5x ARR/Employee.\n\nThis playbook covers the complete framework: Strategy, Setup, Execution, and Operationalization—plus 4 domain playbooks, 12 sub-playbooks, and real-world case studies from 22 companies.",
      de: "Lerne, wie AI-native Unternehmen 10-30x schneller skalieren, €100M ARR in 8-18 Monaten erreichen (vs. 8-12 Jahre traditionell) und 2-5x ARR/Mitarbeiter erzielen.\n\nDieses Playbook behandelt das komplette Framework: Strategy, Setup, Execution und Operationalization—plus 4 Domain Playbooks, 12 Sub-Playbooks und echte Case Studies von 22 Unternehmen."
    },
    trustBadges: [
      { en: "10-30x Faster Scaling", de: "10-30x schnellere Skalierung" },
      { en: "8-18 Months to €100M ARR", de: "8-18 Monate bis €100M ARR" },
      { en: "2-5x ARR/Employee", de: "2-5x ARR/Mitarbeiter" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    gradient: "from-purple-500 to-violet-500"
  },
  summary: {
    problem: {
      title: { en: "The Problem", de: "Das Problem" },
      text: {
        en: "Linear scaling (Revenue ≈ People) leads to 8-12 years to €100M ARR, low ARR/Employee, and 60-80% of companies stalling at €10-30M ARR. Traditional companies can't scale without proportional headcount growth.",
        de: "Lineares Skalieren (Revenue ≈ People) führt zu 8-12 Jahren bis €100M ARR, niedrigem ARR/Mitarbeiter und 60-80% der Unternehmen stagnieren bei €10-30M ARR. Traditionelle Unternehmen können nicht ohne proportionales Headcount-Wachstum skalieren."
      }
    },
    whyItMatters: {
      title: { en: "Why It Matters", de: "Warum es wichtig ist" },
      text: {
        en: "To scale without adding headcount, you need 4 core capabilities: Strategy (where to play), Setup (how to build), Execution (how to deliver), and Operationalization (how to run). If any one is weak, it bottlenecks your entire scaling potential—no matter how strong the others are.",
        de: "Um ohne Headcount-Wachstum zu skalieren, brauchst du 4 Kern-Capabilities: Strategy (wo spielen), Setup (wie bauen), Execution (wie liefern) und Operationalization (wie betreiben). Ist eine davon schwach, begrenzt sie dein gesamtes Skalierungspotenzial—egal wie stark die anderen sind."
      }
    },
    solution: {
      title: { en: "The Solution", de: "Die Lösung" },
      text: {
        en: "AI-Native Scaling: Apply the 4 core capabilities (Strategy, Setup, Execution, Operationalization) across 8 business dimensions with AI at the core. Result: 10-30x faster scaling and 2-5x ARR/Employee.",
        de: "AI-Native Scaling: Wende die 4 Kern-Capabilities (Strategy, Setup, Execution, Operationalization) über 8 Business-Dimensionen an mit AI im Kern. Ergebnis: 10-30x schnellere Skalierung und 2-5x ARR/Mitarbeiter."
      }
    }
  },
  problem: {
    title: { en: "Why Traditional Scaling Doesn't Work Anymore", de: "Warum traditionelles Skalieren nicht mehr funktioniert" },
    subtitle: { 
      en: "The 3 core challenges that limit traditional scaling", 
      de: "Die 3 Kern-Herausforderungen, die traditionelles Skalieren limitieren" 
    },
    bullets: [
      { text: { en: "Linear Scaling: Revenue ≈ People means every €1M ARR requires 5-10 new hires", de: "Lineares Skalieren: Revenue ≈ People bedeutet jeder €1M ARR erfordert 5-10 neue Einstellungen" }, icon: "AlertTriangle" },
      { text: { en: "Slow Growth: 8-12 years to €100M ARR vs. 8-18 months for AI-native companies", de: "Langsames Wachstum: 8-12 Jahre bis €100M ARR vs. 8-18 Monate für AI-native Unternehmen" }, icon: "Clock" },
      { text: { en: "High CAC, Low LTV: CAC €5k-€15k with LTV/CAC 2-3x vs. AI-native CAC €1k-€3k with LTV/CAC 8-15x", de: "Hohe CAC, niedriger LTV: CAC €5k-€15k mit LTV/CAC 2-3x vs. AI-native CAC €1k-€3k mit LTV/CAC 8-15x" }, icon: "TrendingDown" }
    ],
    metrics: [
      { value: "8-12 Years", label: { en: "Traditional Time to €100M ARR", de: "Traditionelle Zeit bis €100M ARR" } },
      { value: "€150-200k", label: { en: "Traditional ARR/Employee", de: "Traditioneller ARR/Mitarbeiter" } },
      { value: "60-80%", label: { en: "Companies Stalling at €10-30M", de: "Unternehmen stagnieren bei €10-30M" } }
    ]
  },
  framework: {
    title: { en: "How AI-Native Companies Scale", de: "Wie AI-native Unternehmen skalieren" },
    subtitle: { 
      en: "AI-native companies use 4 core capabilities to scale 10-30x faster", 
      de: "AI-native Unternehmen nutzen 4 Kern-Capabilities um 10-30x schneller zu skalieren" 
    },
    items: [
      {
        id: "strategy",
        icon: "Target",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        title: { en: "1. STRATEGY", de: "1. STRATEGY" },
        subtitle: { en: "Where to play, How to win", de: "Wo spielen, Wie gewinnen" },
        description: {
          en: "Clear ICP (Ideal Customer Profile), differentiated positioning, and AI-native strategy (not just 'AI features'). Without clear strategy, you're trying to serve everyone.",
          de: "Klares ICP (Ideal Customer Profile), differenzierte Positionierung und AI-native Strategie (nicht nur 'AI Features'). Ohne klare Strategie versuchst du, allen zu dienen."
        },
        metrics: [
          { label: { en: "Strategic Clarity", de: "Strategische Klarheit" }, value: "+100%" },
          { label: { en: "Decision Velocity", de: "Entscheidungsgeschwindigkeit" }, value: "+3-5x" },
        ],
        actions: [
          { en: "Define your ICP with AI-powered market intelligence", de: "Definiere dein ICP mit AI-gestützter Market Intelligence" },
          { en: "Build differentiated positioning (why should they choose you?)", de: "Baue differenzierte Positionierung (warum sollten sie dich wählen?)" },
          { en: "Make AI core to your strategy, not just a feature", de: "Mach AI zum Kern deiner Strategie, nicht nur ein Feature" },
        ],
        examples: [
          { en: "Midjourney: AI-native image generation (not 'Photoshop + AI')", de: "Midjourney: AI-native Bildgenerierung (nicht 'Photoshop + AI')" },
          { en: "Cursor: AI-native code editor (not 'VS Code + AI')", de: "Cursor: AI-nativer Code-Editor (nicht 'VS Code + AI')" }
        ]
      },
      {
        id: "setup",
        icon: "Settings",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "2. SETUP", de: "2. SETUP" },
        subtitle: { en: "Build the foundation", de: "Fundament bauen" },
        description: {
          en: "Org structure (flat, AI-native teams), systems (AI-powered workflows), and processes (automated, not manual). Without proper setup, you can't scale.",
          de: "Org-Struktur (flach, AI-native Teams), Systeme (AI-gestützte Workflows) und Prozesse (automatisiert, nicht manuell). Ohne richtiges Setup kannst du nicht skalieren."
        },
        metrics: [
          { label: { en: "Setup Time", de: "Setup Zeit" }, value: "-60-80%" },
          { label: { en: "Process Efficiency", de: "Prozess-Effizienz" }, value: "+2-5x" },
        ],
        actions: [
          { en: "Build flat org structure (not hierarchical)", de: "Baue flache Org-Struktur (nicht hierarchisch)" },
          { en: "Implement AI-powered systems (not manual tools)", de: "Implementiere AI-gestützte Systeme (nicht manuelle Tools)" },
          { en: "Automate processes (not just digitize)", de: "Automatisiere Prozesse (nicht nur digitalisieren)" },
        ],
        examples: [
          { en: "Perplexity: 40 people, €100M ARR (€2.5M/Employee)", de: "Perplexity: 40 Mitarbeiter, €100M ARR (€2.5M/Mitarbeiter)" },
          { en: "Harvey: 50 people, €300M valuation (AI-native legal)", de: "Harvey: 50 Mitarbeiter, €300M Bewertung (AI-native Legal)" }
        ]
      },
      {
        id: "execution",
        icon: "Rocket",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "3. EXECUTION", de: "3. EXECUTION" },
        subtitle: { en: "Deliver results", de: "Ergebnisse liefern" },
        description: {
          en: "GTM (AI-powered sales, marketing), Product (AI-native features, not bolt-ons), Customer Success (AI-powered onboarding, retention). Without execution, strategy is just theory.",
          de: "GTM (AI-gestützter Vertrieb, Marketing), Product (AI-native Features, keine Bolt-ons), Customer Success (AI-gestütztes Onboarding, Retention). Ohne Execution ist Strategie nur Theorie."
        },
        metrics: [
          { label: { en: "Execution Velocity", de: "Execution Velocity" }, value: "+3-5x" },
          { label: { en: "GTM Efficiency", de: "GTM Effizienz" }, value: "+50-100%" },
        ],
        actions: [
          { en: "Build AI-powered GTM (not manual sales)", de: "Baue AI-gestütztes GTM (nicht manueller Vertrieb)" },
          { en: "Build AI-native product (not 'product + AI features')", de: "Baue AI-natives Produkt (nicht 'Produkt + AI Features')" },
          { en: "Build AI-powered CS (not manual support)", de: "Baue AI-gestütztes CS (nicht manueller Support)" },
        ],
        examples: [
          { en: "Notion: AI-native product (AI writes, organizes, searches)", de: "Notion: AI-natives Produkt (AI schreibt, organisiert, sucht)" },
          { en: "Figma: AI-native design (AI generates, suggests, automates)", de: "Figma: AI-natives Design (AI generiert, schlägt vor, automatisiert)" }
        ]
      },
      {
        id: "operationalization",
        icon: "Layers",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "4. OPERATIONALIZATION", de: "4. OPERATIONALIZATION" },
        subtitle: { en: "Scale it", de: "Skalieren" },
        description: {
          en: "Dashboards (AI-powered insights), playbooks (automated, not manual), automation (AI-driven, not rule-based). Without operationalization, you can't scale.",
          de: "Dashboards (AI-gestützte Insights), Playbooks (automatisiert, nicht manuell), Automation (AI-gesteuert, nicht regelbasiert). Ohne Operationalization kannst du nicht skalieren."
        },
        metrics: [
          { label: { en: "Operational Efficiency", de: "Operative Effizienz" }, value: "+2-5x" },
          { label: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, value: "+100-300%" },
        ],
        actions: [
          { en: "Build AI-powered dashboards (not static reports)", de: "Baue AI-gestützte Dashboards (nicht statische Reports)" },
          { en: "Build automated playbooks (not manual processes)", de: "Baue automatisierte Playbooks (nicht manuelle Prozesse)" },
          { en: "Build AI-driven automation (not rule-based)", de: "Baue AI-gesteuerte Automation (nicht regelbasiert)" },
        ],
        examples: [
          { en: "Ramp: AI-powered finance (automated expense management)", de: "Ramp: AI-gestützte Finanzen (automatisiertes Expense Management)" },
          { en: "Brex: AI-native banking (automated credit decisions)", de: "Brex: AI-natives Banking (automatisierte Kreditentscheidungen)" }
        ]
      }
    ]
  },
  dimensions: {
    title: { en: "The 8 Dimensions of AI-Native Scaling", de: "Die 8 Dimensionen des AI-Native Scaling" },
    subtitle: { 
      en: "Apply the 4 core capabilities across 8 business dimensions", 
      de: "Wende die 4 Kern-Capabilities über 8 Business-Dimensionen an" 
    },
    items: [
      {
        id: "gtm",
        icon: "TrendingUp",
        title: { en: "GTM/Revenue", de: "GTM/Revenue" },
        description: { en: "ICP, Positioning, Sales Motion", de: "ICP, Positionierung, Sales Motion" },
        aiPowered: { en: "AI SDRs, AI lead scoring", de: "AI SDRs, AI Lead Scoring" },
        aiNative: { en: "AI-driven GTM engine", de: "AI-gesteuerte GTM Engine" },
        impact: { en: "CAC -30-50%, LTV/CAC +100-300%", de: "CAC -30-50%, LTV/CAC +100-300%" }
      },
      {
        id: "product",
        icon: "Rocket",
        title: { en: "Product", de: "Product" },
        description: { en: "Product Strategy, Development, AI Integration", de: "Product Strategy, Development, AI Integration" },
        aiPowered: { en: "AI features (copilot, suggestions)", de: "AI Features (Copilot, Vorschläge)" },
        aiNative: { en: "AI as core architecture", de: "AI als Kernarchitektur" },
        impact: { en: "Development Speed +200-500%", de: "Development Speed +200-500%" }
      },
      {
        id: "operations",
        icon: "Settings",
        title: { en: "Operations", de: "Operations" },
        description: { en: "Process Excellence, Workflow Automation", de: "Process Excellence, Workflow Automation" },
        aiPowered: { en: "AI automates tasks", de: "AI automatisiert Tasks" },
        aiNative: { en: "AI orchestrates workflows", de: "AI orchestriert Workflows" },
        impact: { en: "Efficiency +200-400%", de: "Effizienz +200-400%" }
      },
      {
        id: "finance",
        icon: "DollarSign",
        title: { en: "Finance", de: "Finance" },
        description: { en: "Financial Planning, Unit Economics, Dashboards", de: "Finanzplanung, Unit Economics, Dashboards" },
        aiPowered: { en: "AI forecasts, reports", de: "AI Forecasts, Reports" },
        aiNative: { en: "AI-driven financial decisions", de: "AI-gesteuerte Finanzentscheidungen" },
        impact: { en: "Forecast Accuracy +30-50%", de: "Forecast-Genauigkeit +30-50%" }
      },
      {
        id: "talent",
        icon: "Users",
        title: { en: "Talent", de: "Talent" },
        description: { en: "Recruiting, Onboarding, Performance", de: "Recruiting, Onboarding, Performance" },
        aiPowered: { en: "AI screens resumes", de: "AI screent Lebensläufe" },
        aiNative: { en: "AI-powered talent engine", de: "AI-gestützte Talent Engine" },
        impact: { en: "Time-to-Hire -50-70%", de: "Time-to-Hire -50-70%" }
      },
      {
        id: "customer-success",
        icon: "Heart",
        title: { en: "Customer Success", de: "Customer Success" },
        description: { en: "Onboarding, Retention, Expansion", de: "Onboarding, Retention, Expansion" },
        aiPowered: { en: "AI chatbots, help center", de: "AI Chatbots, Help Center" },
        aiNative: { en: "AI-driven CS engine", de: "AI-gesteuerte CS Engine" },
        impact: { en: "NRR +15-30pp", de: "NRR +15-30pp" }
      },
      {
        id: "data-tech",
        icon: "Database",
        title: { en: "Data/Tech", de: "Data/Tech" },
        description: { en: "Data Infrastructure, Tech Stack, AI Capabilities", de: "Dateninfrastruktur, Tech Stack, AI Capabilities" },
        aiPowered: { en: "AI tools, APIs", de: "AI Tools, APIs" },
        aiNative: { en: "AI-first infrastructure", de: "AI-first Infrastruktur" },
        impact: { en: "Data Quality +40-60%", de: "Datenqualität +40-60%" }
      },
      {
        id: "governance",
        icon: "Shield",
        title: { en: "Governance", de: "Governance" },
        description: { en: "Strategic Planning, Risk, Compliance", de: "Strategische Planung, Risiko, Compliance" },
        aiPowered: { en: "AI dashboards, reports", de: "AI Dashboards, Reports" },
        aiNative: { en: "AI-driven governance", de: "AI-gesteuerte Governance" },
        impact: { en: "Decision Speed +50-100%", de: "Entscheidungsgeschwindigkeit +50-100%" }
      }
    ]
  },
  maturityLevels: {
    title: { en: "The 3 AI Maturity Levels", de: "Die 3 AI Maturity Levels" },
    subtitle: { 
      en: "From AI-Powered (Level 1) to AI-Native (Level 3)", 
      de: "Von AI-Powered (Level 1) zu AI-Native (Level 3)" 
    },
    levels: [
      {
        level: 1,
        name: { en: "AI-Powered", de: "AI-Powered" },
        definition: { en: "AI as tool (bolt-on)", de: "AI als Tool (Bolt-on)" },
        examples: { en: "ChatGPT for emails, AI SDRs", de: "ChatGPT für E-Mails, AI SDRs" },
        impact: { en: "+20-50% efficiency", de: "+20-50% Effizienz" },
        scaling: { en: "Still linear (Revenue ≈ People)", de: "Noch linear (Revenue ≈ People)" },
        timeline: { en: "8-12 years", de: "8-12 Jahre" }
      },
      {
        level: 2,
        name: { en: "AI-Enabled", de: "AI-Enabled" },
        definition: { en: "AI as feature (integrated)", de: "AI als Feature (integriert)" },
        examples: { en: "AI copilot, AI suggestions", de: "AI Copilot, AI Vorschläge" },
        impact: { en: "+50-150% efficiency", de: "+50-150% Effizienz" },
        scaling: { en: "Sub-linear (Revenue > People)", de: "Sub-linear (Revenue > People)" },
        timeline: { en: "3-5 years", de: "3-5 Jahre" }
      },
      {
        level: 3,
        name: { en: "AI-Native", de: "AI-Native" },
        definition: { en: "AI as core architecture", de: "AI als Kernarchitektur" },
        examples: { en: "Midjourney, Cursor, Perplexity", de: "Midjourney, Cursor, Perplexity" },
        impact: { en: "+200-500% efficiency", de: "+200-500% Effizienz" },
        scaling: { en: "Superlinear (Revenue >>> People)", de: "Superlinear (Revenue >>> People)" },
        timeline: { en: "8-18 months", de: "8-18 Monate" }
      }
    ]
  },
  bestPractices: {
    title: { en: "Best Practices", de: "Best Practices" },
    categories: [
      {
        category: { en: "Strategy", de: "Strategy" },
        items: [
          { do: { en: "Define clear ICP with AI-powered market intelligence", de: "Definiere klares ICP mit AI-gestützter Market Intelligence" }, dont: { en: "Try to serve everyone", de: "Versuche, allen zu dienen" } },
          { do: { en: "Make AI core to your strategy, not just a feature", de: "Mach AI zum Kern deiner Strategie, nicht nur ein Feature" }, dont: { en: "Add AI features as an afterthought", de: "Füge AI Features nachträglich hinzu" } },
        ]
      },
      {
        category: { en: "Setup", de: "Setup" },
        items: [
          { do: { en: "Build flat, AI-native org structure", de: "Baue flache, AI-native Org-Struktur" }, dont: { en: "Keep hierarchical structure", de: "Behalte hierarchische Struktur" } },
          { do: { en: "Implement AI-powered systems from day one", de: "Implementiere AI-gestützte Systeme von Tag eins" }, dont: { en: "Automate manual processes later", de: "Automatisiere manuelle Prozesse später" } },
        ]
      },
      {
        category: { en: "Execution", de: "Execution" },
        items: [
          { do: { en: "Build AI-powered GTM engine", de: "Baue AI-gestützte GTM Engine" }, dont: { en: "Scale with more salespeople", de: "Skaliere mit mehr Vertriebsmitarbeitern" } },
          { do: { en: "Ship AI-native product (AI as core)", de: "Shippe AI-natives Produkt (AI als Kern)" }, dont: { en: "Add AI features to existing product", de: "Füge AI Features zu bestehendem Produkt hinzu" } },
        ]
      }
    ]
  },
  roadmap: {
    title: { en: "How to Get Started", de: "So startest du" },
    subtitle: { 
      en: "3 steps to AI-native scaling", 
      de: "3 Schritte zu AI-native Skalierung" 
    },
    phases: [
      {
        phase: 1,
        title: { en: "Assess", de: "Assess" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Assess your current state, identify bottlenecks, measure AI maturity level", de: "Bewerte deinen aktuellen Stand, identifiziere Bottlenecks, messe AI Maturity Level" },
        deliverables: [
          { en: "Strategy, Setup, Execution, Operationalization Assessment", de: "Strategy, Setup, Execution, Operationalization Assessment" },
          { en: "AI Maturity Level (Level 1-3)", de: "AI Maturity Level (Level 1-3)" },
          { en: "Bottleneck Identification", de: "Bottleneck Identifikation" },
          { en: "Assessment Report", de: "Assessment Report" }
        ],
        gradient: "from-purple-500 to-violet-500"
      },
      {
        phase: 2,
        title: { en: "Plan", de: "Plan" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Define target state (AI-Native, Level 3), build roadmap, prioritize initiatives", de: "Definiere Zielzustand (AI-Native, Level 3), baue Roadmap, priorisiere Initiativen" },
        deliverables: [
          { en: "Target State Definition (AI-Native, Level 3)", de: "Zielzustands-Definition (AI-Native, Level 3)" },
          { en: "Transformation Roadmap (30d, 90d, 12mo)", de: "Transformations-Roadmap (30d, 90d, 12mo)" },
          { en: "Quick Wins vs. Long-term Prioritization", de: "Quick Wins vs. Langfrist-Priorisierung" },
          { en: "Resource & Budget Plan", de: "Ressourcen- & Budget-Plan" }
        ],
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        phase: 3,
        title: { en: "Execute", de: "Execute" },
        timeline: { en: "Week 5+", de: "Woche 5+" },
        focus: { en: "Implement quick wins (30 days), build AI-native capabilities (90 days), scale AI-native operations (12 months)", de: "Implementiere Quick Wins (30 Tage), baue AI-native Capabilities (90 Tage), skaliere AI-native Operations (12 Monate)" },
        deliverables: [
          { en: "Quick Wins Implementation (30 days)", de: "Quick Wins Implementierung (30 Tage)" },
          { en: "AI-Native Capability Building (90 days)", de: "AI-Native Capability Aufbau (90 Tage)" },
          { en: "AI-Native Operations Scaling (12 months)", de: "AI-Native Operations Skalierung (12 Monate)" },
          { en: "AI-Native Company", de: "AI-Native Unternehmen" }
        ],
        gradient: "from-violet-500 to-purple-500"
      }
    ]
  },
  caseStudies: {
    title: { en: "Real-World Examples", de: "Echte Beispiele" },
    subtitle: { 
      en: "How AI-native companies scaled 10-30x faster", 
      de: "Wie AI-native Unternehmen 10-30x schneller skalierten" 
    },
    cases: [
      {
        company: { en: "Series A SaaS", de: "Series A SaaS" },
        problem: { 
          en: "CAC too high (€12k), LTV/CAC 2.5x", 
          de: "CAC zu hoch (€12k), LTV/CAC 2.5x" 
        },
        solution: { 
          en: "AI-powered GTM (AI SDRs, AI lead scoring)", 
          de: "AI-gestütztes GTM (AI SDRs, AI Lead Scoring)" 
        },
        results: [
          { metric: { en: "CAC", de: "CAC" }, before: "€12k", after: "€4.8k", change: "-60%" },
          { metric: { en: "LTV/CAC", de: "LTV/CAC" }, before: "2.5x", after: "7x", change: "+180%" }
        ],
        timeline: { en: "90 days", de: "90 Tage" }
      },
      {
        company: { en: "Series B SaaS", de: "Series B SaaS" },
        problem: { 
          en: "Scaling chaos: every hire requires 2-4 weeks training", 
          de: "Skalierungs-Chaos: jede Einstellung erfordert 2-4 Wochen Training" 
        },
        solution: { 
          en: "AI-native operations (automated onboarding, AI playbooks)", 
          de: "AI-native Operations (automatisiertes Onboarding, AI Playbooks)" 
        },
        results: [
          { metric: { en: "Time-to-Productivity", de: "Zeit bis Produktivität" }, before: "4 weeks", after: "1 week", change: "-70%" },
          { metric: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, before: "€200k", after: "€600k", change: "+200%" }
        ],
        timeline: { en: "180 days", de: "180 Tage" }
      },
      {
        company: { en: "Series C SaaS", de: "Series C SaaS" },
        problem: { 
          en: "AI-Powered (Level 1), competitors AI-Native (Level 3)", 
          de: "AI-Powered (Level 1), Wettbewerber AI-Native (Level 3)" 
        },
        solution: { 
          en: "Full AI-native transformation (Strategy, Setup, Execution, Operationalization)", 
          de: "Volle AI-native Transformation (Strategy, Setup, Execution, Operationalization)" 
        },
        results: [
          { metric: { en: "AI Maturity", de: "AI Maturity" }, before: "Level 1", after: "Level 3", change: "+200%" },
          { metric: { en: "Revenue", de: "Revenue" }, before: "€50M", after: "€150M", change: "+200%" }
        ],
        timeline: { en: "12 months", de: "12 Monate" }
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
        type: 'assessment',
        name: { en: "AI Maturity Assessment", de: "AI Maturity Assessment" },
        duration: { en: "3-5 Days", de: "3-5 Tage" },
        price: { en: "€3.9K-€5.9K", de: "€3.9K-€5.9K" },
        outcome: { en: "Full AI maturity assessment (8 dimensions), AI Maturity Level scoring, 90-day roadmap", de: "Vollständiges AI Maturity Assessment (8 Dimensionen), AI Maturity Level Scoring, 90-Tage-Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/ai-maturity-assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: 'power-up',
        name: { en: "AI-Native Sprint", de: "AI-Native Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K", de: "€23.6K" },
        outcome: { en: "Complete Assessment: Strategy, Setup, Execution, Operationalization + Roadmap + Quick Wins", de: "Komplettes Assessment: Strategy, Setup, Execution, Operationalization + Roadmap + Quick Wins" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/scaling-velocity",
        icon: "Zap",
        color: "bg-orange-500/10 text-orange-500"
      },
      {
        type: 'boost',
        name: { en: "AI-Native Transformation", de: "AI-Native Transformation" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Transform 2-3 capabilities, AI Maturity +1-2 Levels, Scaling Velocity +3-5x", de: "Transformiere 2-3 Capabilities, AI Maturity +1-2 Level, Skalierungsgeschwindigkeit +3-5x" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/scaling-os",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: 'accelerate',
        name: { en: "Full AI-Native Transformation", de: "Volle AI-Native Transformation" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full Transformation: All 4 capabilities × 8 dimensions, AI Maturity Level 3, €100M ARR path", de: "Volle Transformation: Alle 4 Capabilities × 8 Dimensionen, AI Maturity Level 3, €100M ARR Pfad" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/ai-native-scaling",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ]
  },
  whoThisIsFor: {
    title: { en: "Who This Playbook Is For", de: "Für wen ist dieses Playbook?" },
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
        role: { en: "CEOs & Founders", de: "CEOs & Gründer" },
        pain: { en: "Want to scale 10-30x faster, reach €100M ARR in 8-18 months (not 8-12 years)", de: "Wollen 10-30x schneller skalieren, €100M ARR in 8-18 Monaten erreichen (nicht 8-12 Jahre)" },
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
        role: { en: "Board Members & VCs", de: "Board-Mitglieder & VCs" },
        pain: { en: "Need to understand AI-native scaling and assess portfolio companies", de: "Müssen AI-native Scaling verstehen und Portfolio-Unternehmen bewerten" },
        outcome: { en: "AI Maturity Level assessment and transformation framework", de: "AI Maturity Level Assessment und Transformations-Framework" },
        color: "orange"
      }
    ]
  },
  subPlaybooks: {
    title: { en: "Explore the 4 Domain Playbooks", de: "Entdecke die 4 Domain Playbooks" },
    subtitle: { 
      en: "Deep-dive guides for each domain", 
      de: "Tiefgehende Guides für jeden Bereich" 
    },
    items: [
      {
        id: 2,
        slug: 'growth-engines',
        title: { en: "AI-Native Growth Engines", de: "AI-Native Growth Engines" },
        teaser: { 
          en: "Transform revenue generation with AI-native growth engines. GTM × Product × Customer Success with AI at the core = 3-5x faster growth, CAC -60-75%, NRR 120-150%.", 
          de: "Transformiere Revenue-Generierung mit AI-native Growth Engines. GTM × Product × Customer Success mit AI im Kern = 3-5x schnelleres Wachstum, CAC -60-75%, NRR 120-150%." 
        },
        icon: "TrendingUp",
        color: "green"
      },
      {
        id: 3,
        slug: 'operating-systems',
        title: { en: "AI-Native Operating Systems", de: "AI-Native Operating Systems" },
        teaser: { 
          en: "Transform infrastructure and processes with AI-native operating systems. Operations × Finance × Talent × Data/Tech with AI = 2-5x efficiency, Cost -30-50%.", 
          de: "Transformiere Infrastruktur und Prozesse mit AI-native Operating Systems. Operations × Finance × Talent × Data/Tech mit AI = 2-5x Effizienz, Kosten -30-50%." 
        },
        icon: "Settings",
        color: "blue"
      },
      {
        id: 4,
        slug: 'board-governance',
        title: { en: "AI-Native Board & Governance", de: "AI-Native Board & Governance" },
        teaser: { 
          en: "Transform board and governance with AI-native frameworks. Strategic × Operational × Exit/M&A with AI = Board Prep -80%, Valuation +2-5x.", 
          de: "Transformiere Board und Governance mit AI-native Frameworks. Strategic × Operational × Exit/M&A mit AI = Board Prep -80%, Bewertung +2-5x." 
        },
        icon: "Shield",
        color: "orange"
      },
      {
        id: 5,
        slug: 'portfolio-transformation',
        title: { en: "AI-Native Portfolio Transformation", de: "AI-Native Portfolio Transformation" },
        teaser: { 
          en: "Transform entire portfolios to AI-native at scale. Portfolio Excellence with AI = IRR 15% → 40%+, Portfolio Value +3-5x.", 
          de: "Transformiere ganze Portfolios auf AI-native im großen Maßstab. Portfolio Excellence mit AI = IRR 15% → 40%+, Portfolio-Wert +3-5x." 
        },
        icon: "Briefcase",
        color: "purple"
      }
    ]
  },
  finalCta: {
    headline: { 
      en: "Ready to Scale AI-Native?", 
      de: "Bereit für AI-native Skalierung?" 
    },
    subline: { 
      en: "Get the complete AI-Native Scaling Playbook and start your transformation journey", 
      de: "Hole dir das komplette AI-Native Scaling Playbook und starte deine Transformationsreise" 
    },
    trustSignals: [
      { en: "Complete playbook with templates", de: "Komplettes Playbook mit Templates" },
      { en: "4 domain playbooks included", de: "4 Domain Playbooks inklusive" },
      { en: "12 sub-playbooks included", de: "12 Sub-Playbooks inklusive" },
      { en: "22 real-world case studies", de: "22 echte Case Studies" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#"
  }
};
