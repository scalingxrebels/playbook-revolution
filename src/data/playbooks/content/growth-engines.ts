import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('growth-engines')!;

export const growthEnginesData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Growth Engines · Domain Playbook", de: "Growth Engines · Domain Playbook" },
    title: "Growth Engines Playbook",
    subtitle: { 
      en: "How to transform revenue generation with AI-native growth engines", 
      de: "Wie du Revenue-Generierung mit AI-native Growth Engines transformierst" 
    },
    description: { 
      en: "Most companies struggle with revenue growth because they focus on individual tactics instead of systematic growth engines. They optimize CAC, improve product features, or enhance customer success—but don't integrate all three into a cohesive growth system.\n\nThis playbook teaches you the complete framework used by AI-native companies to achieve 3-5x faster growth, reduce CAC by 60-75%, and increase LTV/CAC by 50-100%.\n\nYou'll learn how to build AI-native GTM/Revenue engines, create AI-powered Product engines, scale Customer Success with AI, integrate all 3 engines into one growth system, and measure progress with Growth Maturity Levels. Includes 3 detailed sub-playbooks, implementation guides, and real-world case studies.", 
      de: "Die meisten Unternehmen kämpfen mit Revenue-Wachstum, weil sie sich auf einzelne Taktiken statt auf systematische Growth Engines konzentrieren. Sie optimieren CAC, verbessern Product Features oder erweitern Customer Success—aber integrieren nicht alle drei in ein kohärentes Wachstumssystem.\n\nDieses Playbook lehrt dich das komplette Framework, das AI-native Unternehmen nutzen, um 3-5x schnelleres Wachstum zu erzielen, CAC um 60-75% zu senken und LTV/CAC um 50-100% zu steigern.\n\nDu lernst, wie du AI-native GTM/Revenue Engines baust, AI-powered Product Engines erstellst, Customer Success mit AI skalierst, alle 3 Engines in ein Growth System integrierst und Fortschritt mit Growth Maturity Levels misst. Inklusive 3 detaillierter Sub-Playbooks, Implementierungsguides und echten Case Studies." 
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Sub-Playbooks", de: "3 Sub-Playbooks" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" },
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    gradient: "from-green-500 to-emerald-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "High CAC (€10k-€50k), low LTV/CAC (2-3x), slow growth (30-50% YoY), and linear scaling where revenue equals headcount.", 
        de: "Hohe CAC (€10k-€50k), niedriger LTV/CAC (2-3x), langsames Wachstum (30-50% YoY), und lineares Skalieren wo Revenue gleich Headcount ist." 
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "GTM, Product, and Customer Success must work together as one integrated system. A weak engine becomes a bottleneck for the entire growth system.", 
        de: "GTM, Product und Customer Success müssen als ein integriertes System zusammenarbeiten. Eine schwache Engine wird zum Bottleneck für das gesamte Wachstumssystem." 
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The Growth Engines Framework: Build all 3 engines (GTM, Product, CS) systematically with AI integration at each level.", 
        de: "Das Growth Engines Framework: Baue alle 3 Engines (GTM, Product, CS) systematisch mit AI-Integration auf jeder Ebene." 
      } 
    }
  },
  problem: { 
    title: { en: "Why Traditional Growth Engines are Broken", de: "Warum traditionelle Growth Engines kaputt sind" }, 
    subtitle: { 
      en: "Traditional companies scale linearly. AI-native companies scale exponentially.", 
      de: "Traditionelle Unternehmen skalieren linear. AI-native Unternehmen skalieren exponentiell." 
    }, 
    bullets: [
      { text: { en: "High CAC: €10k-€50k per customer (vs. €2k-€10k for AI-native)", de: "Hohe CAC: €10k-€50k pro Kunde (vs. €2k-€10k für AI-native)" }, icon: "TrendingDown" },
      { text: { en: "Low LTV/CAC: 2-3x (vs. 5-20x for AI-native)", de: "Niedriger LTV/CAC: 2-3x (vs. 5-20x für AI-native)" }, icon: "AlertTriangle" },
      { text: { en: "Slow Growth: 30-50% YoY (vs. 100-300% for AI-native)", de: "Langsames Wachstum: 30-50% YoY (vs. 100-300% für AI-native)" }, icon: "Clock" },
      { text: { en: "Linear Scaling: Revenue ≈ People (vs. Revenue >>> People for AI-native)", de: "Lineares Skalieren: Revenue ≈ People (vs. Revenue >>> People für AI-native)" }, icon: "Users" },
    ], 
    metrics: [
      { label: { en: "Average CAC", de: "Durchschnittliche CAC" }, value: "€30k", trend: "down" },
      { label: { en: "Typical LTV/CAC", de: "Typischer LTV/CAC" }, value: "2.5x", trend: "down" },
      { label: { en: "Growth Rate", de: "Wachstumsrate" }, value: "40%", trend: "down" },
      { label: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, value: "€150k", trend: "down" },
    ] 
  },
  framework: { 
    title: { en: "The Growth Engines Framework", de: "Das Growth Engines Framework" }, 
    subtitle: { 
      en: "A systematic approach to transform GTM, Product, and Customer Success", 
      de: "Ein systematischer Ansatz zur Transformation von GTM, Product und Customer Success" 
    },
    items: [
      {
        id: "gtm-revenue",
        icon: "TrendingUp",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        title: { en: "GTM/Revenue Engine", de: "GTM/Revenue Engine" },
        subtitle: { en: "Dimension 1: How you acquire customers", de: "Dimension 1: Wie du Kunden gewinnst" },
        description: { 
          en: "The engine that drives customer acquisition. Components: ICP, Positioning, Channels, Sales Process, Marketing, PLG, Revenue Operations. AI Multiplier: AI SDRs, AI Lead Scoring, AI Personalization.", 
          de: "Der Motor, der Kundenakquise antreibt. Komponenten: ICP, Positioning, Channels, Sales Process, Marketing, PLG, Revenue Operations. AI Multiplier: AI SDRs, AI Lead Scoring, AI Personalization." 
        },
        metrics: [
          { label: { en: "CAC Reduction", de: "CAC-Reduktion" }, value: "-60-75%" },
          { label: { en: "Win Rate", de: "Win Rate" }, value: "+50-100%" },
          { label: { en: "Sales Cycle", de: "Sales Cycle" }, value: "-40-60%" },
        ],
        actions: [
          { en: "Define ICP with AI-powered segmentation", de: "Definiere ICP mit AI-gestützter Segmentierung" },
          { en: "Build multi-channel GTM with AI automation", de: "Baue Multi-Channel GTM mit AI-Automation" },
          { en: "Implement AI-powered sales process", de: "Implementiere AI-gestützten Sales Process" },
          { en: "Create PLG loops with AI optimization", de: "Erstelle PLG Loops mit AI-Optimierung" },
          { en: "Deploy AI SDRs and lead scoring", de: "Deploy AI SDRs und Lead Scoring" },
        ],
      },
      {
        id: "product",
        icon: "Rocket",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "Product Engine", de: "Product Engine" },
        subtitle: { en: "Dimension 2: How you deliver value", de: "Dimension 2: Wie du Wert lieferst" },
        description: { 
          en: "The engine that creates customer value. Components: Product-Market Fit, Product Development, Innovation, Analytics. AI Multiplier: AI-Powered Features, AI Product Analytics, AI Roadmap.", 
          de: "Der Motor, der Kundenwert schafft. Komponenten: Product-Market Fit, Product Development, Innovation, Analytics. AI Multiplier: AI-Powered Features, AI Product Analytics, AI Roadmap." 
        },
        metrics: [
          { label: { en: "Feature Velocity", de: "Feature Velocity" }, value: "+3-5x" },
          { label: { en: "Time to PMF", de: "Zeit bis PMF" }, value: "-50-70%" },
          { label: { en: "User Engagement", de: "User Engagement" }, value: "+50-100%" },
        ],
        actions: [
          { en: "Achieve Product-Market Fit with AI insights", de: "Erreiche Product-Market Fit mit AI Insights" },
          { en: "Build AI-powered product features", de: "Baue AI-gestützte Product Features" },
          { en: "Implement AI product analytics", de: "Implementiere AI Product Analytics" },
          { en: "Create AI-driven product roadmap", de: "Erstelle AI-getriebene Product Roadmap" },
          { en: "Accelerate shipping with AI development", de: "Beschleunige Shipping mit AI Development" },
        ],
      },
      {
        id: "customer-success",
        icon: "Heart",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "Customer Success Engine", de: "Customer Success Engine" },
        subtitle: { en: "Dimension 6: How you retain and expand", de: "Dimension 6: Wie du bindest und erweiterst" },
        description: { 
          en: "The engine that maximizes customer lifetime value. Components: Onboarding, Retention, Expansion, Support. AI Multiplier: AI Health Scoring, AI Churn Prediction, AI Expansion.", 
          de: "Der Motor, der Customer Lifetime Value maximiert. Komponenten: Onboarding, Retention, Expansion, Support. AI Multiplier: AI Health Scoring, AI Churn Prediction, AI Expansion." 
        },
        metrics: [
          { label: { en: "Churn Reduction", de: "Churn-Reduktion" }, value: "-40-60%" },
          { label: { en: "NRR Increase", de: "NRR-Steigerung" }, value: "+20-50pp" },
          { label: { en: "Expansion Rate", de: "Expansion Rate" }, value: "+50-100%" },
        ],
        actions: [
          { en: "Build AI-powered onboarding excellence", de: "Baue AI-gestützte Onboarding Excellence" },
          { en: "Implement AI health scoring", de: "Implementiere AI Health Scoring" },
          { en: "Deploy AI churn prediction", de: "Deploy AI Churn Prediction" },
          { en: "Create AI-driven expansion playbooks", de: "Erstelle AI-getriebene Expansion Playbooks" },
          { en: "Build AI-powered CS operations", de: "Baue AI-gestützte CS Operations" },
        ],
      },
    ] 
  },
  bestPractices: { 
    title: { en: "Best Practices", de: "Best Practices" }, 
    categories: [
      {
        category: { en: "Growth Strategy", de: "Wachstumsstrategie" },
        items: [
          { 
            do: { en: "Build all 3 engines in parallel", de: "Baue alle 3 Engines parallel" }, 
            dont: { en: "Focus only on GTM", de: "Fokussiere nur auf GTM" } 
          },
          { 
            do: { en: "Integrate AI across all engines", de: "Integriere AI in alle Engines" }, 
            dont: { en: "Add AI as an afterthought", de: "Füge AI nachträglich hinzu" } 
          },
        ]
      },
      {
        category: { en: "Execution", de: "Umsetzung" },
        items: [
          { 
            do: { en: "Fix bottleneck engine first", de: "Fixe Bottleneck Engine zuerst" }, 
            dont: { en: "Optimize already strong engines", de: "Optimiere bereits starke Engines" } 
          },
          { 
            do: { en: "Measure LTV/CAC as north star", de: "Miss LTV/CAC als North Star" }, 
            dont: { en: "Focus only on top-line growth", de: "Fokussiere nur auf Top-Line Growth" } 
          },
        ]
      },
    ] 
  },
  roadmap: { 
    title: { en: "90-Day Implementation Roadmap", de: "90-Tage-Implementierungs-Roadmap" }, 
    subtitle: { 
      en: "From assessment to hypergrowth in 12 weeks", 
      de: "Von Assessment zu Hypergrowth in 12 Wochen" 
    }, 
    phases: [
      {
        phase: 1,
        title: { en: "Assessment", de: "Assessment" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Assess all 3 growth engines, identify bottleneck, create roadmap", de: "Bewerte alle 3 Growth Engines, identifiziere Bottleneck, erstelle Roadmap" },
        deliverables: [
          { en: "Growth Engines Assessment (GTM, Product, CS scores)", de: "Growth Engines Assessment (GTM, Product, CS Scores)" },
          { en: "Bottleneck Analysis (Which engine is weakest?)", de: "Bottleneck-Analyse (Welche Engine ist am schwächsten?)" },
          { en: "Growth Engines Roadmap (12-24 month plan)", de: "Growth Engines Roadmap (12-24 Monats-Plan)" },
          { en: "Quick Wins (3-5 per engine)", de: "Quick Wins (3-5 pro Engine)" },
        ],
        gradient: "from-green-500 to-emerald-500"
      },
      {
        phase: 2,
        title: { en: "Build", de: "Build" },
        timeline: { en: "Week 3-8", de: "Woche 3-8" },
        focus: { en: "Fix bottleneck engine, improve all 3 engines with AI integration", de: "Fixe Bottleneck Engine, verbessere alle 3 Engines mit AI-Integration" },
        deliverables: [
          { en: "GTM Engine: ICP, Positioning, Channels, Sales Process, PLG", de: "GTM Engine: ICP, Positioning, Channels, Sales Process, PLG" },
          { en: "Product Engine: PMF, Development, Innovation, Analytics", de: "Product Engine: PMF, Development, Innovation, Analytics" },
          { en: "CS Engine: Onboarding, Health Scoring, Retention, Expansion", de: "CS Engine: Onboarding, Health Scoring, Retention, Expansion" },
          { en: "AI Integration across all 3 engines", de: "AI-Integration über alle 3 Engines" },
        ],
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        phase: 3,
        title: { en: "Scale", de: "Scale" },
        timeline: { en: "Week 9-12", de: "Woche 9-12" },
        focus: { en: "Scale all 3 engines, optimize, continuous improvement", de: "Skaliere alle 3 Engines, optimiere, kontinuierliche Verbesserung" },
        deliverables: [
          { en: "Growth Engines Scaling (Scale GTM, Product, CS)", de: "Growth Engines Scaling (Skaliere GTM, Product, CS)" },
          { en: "Growth Engines Optimization (Continuous improvement)", de: "Growth Engines Optimierung (Kontinuierliche Verbesserung)" },
          { en: "Growth Engines Tracking (Monthly/quarterly reviews)", de: "Growth Engines Tracking (Monatliche/vierteljährliche Reviews)" },
          { en: "Growth Engines Excellence Playbook", de: "Growth Engines Excellence Playbook" },
        ],
        gradient: "from-violet-500 to-purple-500"
      },
    ] 
  },
  caseStudies: { 
    title: { en: "Real-World Results", de: "Echte Ergebnisse" }, 
    subtitle: { 
      en: "How 3 companies transformed their growth engines with the framework", 
      de: "Wie 3 Unternehmen ihre Growth Engines mit dem Framework transformiert haben" 
    }, 
    cases: [
      {
        company: { en: "Series A SaaS Company", de: "Series A SaaS Unternehmen" },
        problem: { 
          en: "High CAC (€40k), low growth (35% YoY), need to scale 3x in 18 months", 
          de: "Hohe CAC (€40k), niedriges Wachstum (35% YoY), müssen 3x in 18 Monaten skalieren" 
        },
        solution: { 
          en: "GTM Engine (ICP refinement, PLG loops, AI SDRs) + Product Engine (PMF optimization, AI-powered features) + CS Engine (Onboarding automation, AI health scoring)", 
          de: "GTM Engine (ICP-Verfeinerung, PLG Loops, AI SDRs) + Product Engine (PMF-Optimierung, AI-gestützte Features) + CS Engine (Onboarding-Automation, AI Health Scoring)" 
        },
        results: [
          { metric: { en: "CAC", de: "CAC" }, before: "€40k", after: "€12k", change: "-70%" },
          { metric: { en: "LTV/CAC", de: "LTV/CAC" }, before: "2.5x", after: "8x", change: "+220%" },
          { metric: { en: "Growth Rate", de: "Wachstumsrate" }, before: "35%", after: "120%", change: "+243%" },
          { metric: { en: "ARR", de: "ARR" }, before: "€10M", after: "€35M", change: "+250%" },
        ],
        timeline: { en: "18 months | Boost + Accelerate", de: "18 Monate | Boost + Accelerate" },
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS Unternehmen" },
        problem: { 
          en: "Need to achieve hypergrowth (100%+ YoY) for Series C funding", 
          de: "Muss Hypergrowth (100%+ YoY) für Series C Finanzierung erreichen" 
        },
        solution: { 
          en: "Multi-channel GTM + AI-powered sales + AI-native product features + rapid iteration + Expansion playbooks + AI-powered CS. AI Maturity: Level 1 → Level 3", 
          de: "Multi-Channel GTM + AI-gestützter Vertrieb + AI-native Product Features + schnelle Iteration + Expansion Playbooks + AI-gestützter CS. AI Maturity: Level 1 → Level 3" 
        },
        results: [
          { metric: { en: "CAC", de: "CAC" }, before: "€25k", after: "€8k", change: "-68%" },
          { metric: { en: "LTV/CAC", de: "LTV/CAC" }, before: "3x", after: "15x", change: "+400%" },
          { metric: { en: "Growth Rate", de: "Wachstumsrate" }, before: "50%", after: "130%", change: "+160%" },
          { metric: { en: "ARR", de: "ARR" }, before: "€30M", after: "€100M", change: "+233%" },
        ],
        timeline: { en: "24 months | Accelerate × 2 phases", de: "24 Monate | Accelerate × 2 Phasen" },
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: { 
          en: "Need to reach €100M ARR in 18 months for IPO readiness", 
          de: "Muss €100M ARR in 18 Monaten für IPO-Bereitschaft erreichen" 
        },
        solution: { 
          en: "All 3 Growth Engines (comprehensive transformation). Full AI-native GTM + Product + CS stack. AI Maturity: Level 1 → Level 3", 
          de: "Alle 3 Growth Engines (umfassende Transformation). Voller AI-native GTM + Product + CS Stack. AI Maturity: Level 1 → Level 3" 
        },
        results: [
          { metric: { en: "CAC", de: "CAC" }, before: "€30k", after: "€10k", change: "-67%" },
          { metric: { en: "LTV/CAC", de: "LTV/CAC" }, before: "3.5x", after: "18x", change: "+414%" },
          { metric: { en: "Growth Rate", de: "Wachstumsrate" }, before: "60%", after: "150%", change: "+150%" },
          { metric: { en: "ARR", de: "ARR" }, before: "€40M", after: "€100M", change: "+150%" },
        ],
        timeline: { en: "18 months | Accelerate + Extension", de: "18 Monate | Accelerate + Extension" },
      },
    ] 
  },
  solutionsConnection: { 
    title: { en: "Ready to Execute?", de: "Bereit für die Umsetzung?" }, 
    subtitle: { 
      en: "Choose the right engagement model for your timeline and budget", 
      de: "Wähle das richtige Engagement-Modell für deinen Zeitplan und Budget" 
    }, 
    items: [
      {
        type: 'assessment',
        name: { en: "GTM Effectiveness Review", de: "GTM Effectiveness Review" },
        duration: { en: "3-5 Days", de: "3-5 Tage" },
        price: { en: "€3.9K-€5.9K", de: "€3.9K-€5.9K" },
        outcome: { en: "Full growth engine assessment (GTM, Product, CS), maturity scoring, bottleneck identification, 90-day roadmap", de: "Volle Growth Engine Bewertung (GTM, Product, CS), Maturity Scoring, Bottleneck-Identifikation, 90-Tage-Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/gtm-effectiveness-review",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: 'power-up',
        name: { en: "Growth Momentum", de: "Growth Momentum" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "Fix one growth engine in 30 days: focused sprint, one engine improvement, quick wins", de: "Fixe eine Growth Engine in 30 Tagen: fokussierter Sprint, eine Engine-Verbesserung, Quick Wins" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/growth-momentum",
        icon: "Zap",
        color: "bg-orange-500/10 text-orange-500"
      },
      {
        type: 'boost',
        name: { en: "Growth Engine", de: "Growth Engine" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Transform 2-3 growth engines in 90 days: full transformation, AI integration, systematic improvement", de: "Transformiere 2-3 Growth Engines in 90 Tagen: volle Transformation, AI-Integration, systematische Verbesserung" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/growth-engine",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: 'accelerate',
        name: { en: "Full AI-Native Transformation", de: "Volle AI-Native Transformation" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full AI-native transformation, all 3 growth engines, AI Maturity Level 3, 3-5x scaling velocity", de: "Volle AI-native Transformation, alle 3 Growth Engines, AI Maturity Level 3, 3-5x Skalierungsgeschwindigkeit" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      },
    ]
  },
  whoThisIsFor: { 
    title: { en: "Who Should Use This Playbook?", de: "Wer sollte dieses Playbook nutzen?" }, 
    subtitle: { 
      en: "This playbook is designed for scaling B2B SaaS companies", 
      de: "Dieses Playbook ist für skalierende B2B SaaS Unternehmen konzipiert" 
    }, 
    icp: { 
      en: "Series A-C B2B SaaS companies with €5-100M ARR looking to achieve hypergrowth", 
      de: "Series A-C B2B SaaS Unternehmen mit €5-100M ARR, die Hypergrowth erreichen wollen" 
    }, 
    personas: [
      { 
        icon: "Target", 
        role: { en: "CEOs", de: "CEOs" }, 
        pain: { en: "Need to achieve hypergrowth and scale 3-5x faster", de: "Müssen Hypergrowth erreichen und 3-5x schneller skalieren" }, 
        outcome: { en: "Clear growth engine framework and roadmap", de: "Klares Growth Engine Framework und Roadmap" },
        color: "green"
      },
      { 
        icon: "TrendingUp", 
        role: { en: "CMOs/CROs", de: "CMOs/CROs" }, 
        pain: { en: "High CAC, low win rates, long sales cycles", de: "Hohe CAC, niedrige Win Rates, lange Sales Cycles" }, 
        outcome: { en: "AI-powered GTM engine that scales", de: "AI-gestützte GTM Engine, die skaliert" },
        color: "orange"
      },
      { 
        icon: "Rocket", 
        role: { en: "CPOs", de: "CPOs" }, 
        pain: { en: "Slow shipping, low feature success rate", de: "Langsames Shipping, niedrige Feature-Erfolgsrate" }, 
        outcome: { en: "AI-powered product engine with 3-5x velocity", de: "AI-gestützte Product Engine mit 3-5x Velocity" },
        color: "blue"
      },
      { 
        icon: "Heart", 
        role: { en: "VP Customer Success", de: "VP Customer Success" }, 
        pain: { en: "High churn, low NRR, reactive CS", de: "Hohe Churn, niedriger NRR, reaktiver CS" }, 
        outcome: { en: "AI-powered CS engine with predictive retention", de: "AI-gestützte CS Engine mit prädiktiver Retention" },
        color: "pink"
      },
    ] 
  },
  finalCta: { 
    headline: { en: "Get Started Today", de: "Starte noch heute" }, 
    subline: { 
      en: "Download the playbook, book a call, or explore the 3 sub-playbooks", 
      de: "Lade das Playbook herunter, buche einen Call, oder erkunde die 3 Sub-Playbooks" 
    }, 
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-Seiten Playbook mit Templates" },
      { en: "3 detailed sub-playbooks included", de: "3 detaillierte Sub-Playbooks inklusive" },
      { en: "3 real-world case studies", de: "3 echte Case Studies" },
      { en: "90-day implementation roadmap", de: "90-Tage-Implementierungs-Roadmap" },
    ], 
    bookingUrl: "https://scalingx.fillout.com/inflection-call", 
    downloadUrl: "#" 
  },
  subPlaybooks: {
    title: { en: "The 3 Sub-Playbooks", de: "Die 3 Sub-Playbooks" },
    subtitle: { 
      en: "Deep-dive into each growth engine with detailed playbooks", 
      de: "Tauche tief in jede Growth Engine ein mit detaillierten Playbooks" 
    },
    items: [
      {
        id: 7,
        slug: "growth-engines/gtm-revenue",
        title: { en: "GTM/Revenue Playbook", de: "GTM/Revenue Playbook" },
        teaser: { 
          en: "How to build repeatable customer acquisition that scales. Learn the 7-lever framework used by AI-native companies to reduce CAC by 60-75% and increase win rate by 50-100%.", 
          de: "Wie du wiederholbare Kundenakquise aufbaust, die skaliert. Lerne das 7-Hebel-Framework, das AI-native Unternehmen nutzen, um CAC um 60-75% zu senken und Win Rate um 50-100% zu steigern." 
        },
        icon: "TrendingUp",
        color: "orange"
      },
      {
        id: 8,
        slug: "growth-engines/product",
        title: { en: "Product Playbook", de: "Product Playbook" },
        teaser: { 
          en: "How to build products that customers love and scale fast. Learn the 5-component framework used by AI-native companies to achieve 3-5x faster feature velocity and 50-70% faster time to PMF.", 
          de: "Wie du Produkte baust, die Kunden lieben und schnell skalieren. Lerne das 5-Komponenten-Framework, das AI-native Unternehmen nutzen, um 3-5x schnellere Feature Velocity und 50-70% schnellere Zeit zu PMF zu erreichen." 
        },
        icon: "Rocket",
        color: "green"
      },
      {
        id: 9,
        slug: "growth-engines/customer-success",
        title: { en: "Customer Success Playbook", de: "Customer Success Playbook" },
        teaser: { 
          en: "How to retain and expand customers with AI-native CS. Learn the 5-component framework used by AI-native companies to reduce churn by 40-60% and increase NRR by 20-50pp.", 
          de: "Wie du Kunden mit AI-nativem CS bindest und erweiterst. Lerne das 5-Komponenten-Framework, das AI-native Unternehmen nutzen, um Churn um 40-60% zu senken und NRR um 20-50pp zu steigern." 
        },
        icon: "Heart",
        color: "pink"
      },
    ]
  }
};
