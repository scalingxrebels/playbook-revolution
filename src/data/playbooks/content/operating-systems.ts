import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('operating-systems')!;

export const operatingSystemsData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Operating Systems · Domain Playbook", de: "Operating Systems · Domain Playbook" },
    title: "Operating Systems Playbook",
    subtitle: { 
      en: "How to transform infrastructure and processes with AI-native operating systems", 
      de: "Wie du Infrastruktur und Prozesse mit AI-native Operating Systems transformierst" 
    },
    description: { 
      en: "Most companies struggle with scaling because they focus on growth tactics instead of building scalable operating systems. They hire more people, add more tools, and create more processes—but don't build the infrastructure that enables efficient scaling.\n\nThis playbook teaches you the complete framework used by AI-native companies to achieve 2-5x efficiency gains, reduce operational costs by 30-50%, and scale without linear headcount growth.\n\nYou'll learn how to build AI-native Operations systems, AI-powered Finance systems, scale Talent systems with AI, transform Data/Tech infrastructure, and measure progress with Operations Maturity Levels. Includes 4 detailed sub-playbooks (Operations, Finance, Talent, Data/Tech), implementation guides, and real-world case studies from Series A-C companies.", 
      de: "Die meisten Unternehmen kämpfen mit der Skalierung, weil sie sich auf Wachstumstaktiken konzentrieren anstatt skalierbare Operating Systems aufzubauen. Sie stellen mehr Leute ein, fügen mehr Tools hinzu und erstellen mehr Prozesse – aber bauen nicht die Infrastruktur, die effiziente Skalierung ermöglicht.\n\nDieses Playbook lehrt dir das komplette Framework, das AI-native Unternehmen nutzen, um 2-5x Effizienzsteigerungen zu erzielen, Betriebskosten um 30-50% zu senken und ohne lineares Headcount-Wachstum zu skalieren.\n\nDu lernst, wie du AI-native Operations Systeme aufbaust, AI-powered Finance Systeme erstellst, Talent Systeme mit AI skalierst, Data/Tech Infrastruktur transformierst und Fortschritt mit Operations Maturity Levels misst. Inklusive 4 detaillierter Sub-Playbooks (Operations, Finance, Talent, Data/Tech), Implementierungsguides und echten Case Studies von Series A-C Unternehmen." 
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "4 Sub-Playbooks", de: "4 Sub-Playbooks" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://www.cal.scalingx.io/inflection-call",
    downloadUrl: "#",
    assetId: "playbook-operating-systems",
    gradient: "from-blue-500 to-cyan-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "High operational costs (30-50%), low efficiency (1-2x), linear scaling, and 70-90% manual processes make traditional operating systems impossible to scale.", 
        de: "Hohe Betriebskosten (30-50%), niedrige Effizienz (1-2x), lineares Scaling und 70-90% manuelle Prozesse machen traditionelle Operating Systems unmöglich zu skalieren." 
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Operations, Finance, Talent, and Data/Tech must work together as one integrated system. A weak system becomes a bottleneck for the entire operating infrastructure.", 
        de: "Operations, Finance, Talent und Data/Tech müssen als ein integriertes System zusammenarbeiten. Ein schwaches System wird zum Engpass für die gesamte Operating-Infrastruktur." 
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The Operating Systems Framework: Build all 4 systems (Operations, Finance, Talent, Data/Tech) systematically with AI integration at each level.", 
        de: "Das Operating Systems Framework: Baue alle 4 Systeme (Operations, Finance, Talent, Data/Tech) systematisch mit AI-Integration auf jeder Ebene." 
      } 
    }
  },
  problem: { 
    title: { en: "Why Traditional Operating Systems are Broken", de: "Warum traditionelle Operating Systems kaputt sind" }, 
    subtitle: { 
      en: "The painful reality of manual, fragmented systems", 
      de: "Die schmerzhafte Realität manueller, fragmentierter Systeme" 
    }, 
    bullets: [
      { text: { en: "High Operational Costs: 30-50% of revenue (vs. 15-25% for AI-native)", de: "Hohe Betriebskosten: 30-50% des Umsatzes (vs. 15-25% bei AI-native)" }, icon: "DollarSign" },
      { text: { en: "Low Efficiency: 1-2x (vs. 2-5x for AI-native)", de: "Niedrige Effizienz: 1-2x (vs. 2-5x bei AI-native)" }, icon: "TrendingDown" },
      { text: { en: "Linear Scaling: Revenue ≈ People (vs. Revenue >>> People for AI-native)", de: "Lineares Scaling: Revenue ≈ People (vs. Revenue >>> People bei AI-native)" }, icon: "Users" },
      { text: { en: "Manual Processes: 70-90% manual (vs. 10-30% for AI-native)", de: "Manuelle Prozesse: 70-90% manuell (vs. 10-30% bei AI-native)" }, icon: "Hand" }
    ], 
    metrics: [
      { label: { en: "Traditional Op Costs", de: "Traditionelle Betriebskosten" }, value: "30-50%", trend: "down" },
      { label: { en: "AI-Native Op Costs", de: "AI-Native Betriebskosten" }, value: "15-25%", trend: "up" },
      { label: { en: "Efficiency Improvement", de: "Effizienz-Steigerung" }, value: "2-5x", trend: "up" },
      { label: { en: "Automation Increase", de: "Automatisierung Steigerung" }, value: "+60-80pp", trend: "up" }
    ] 
  },
  framework: { 
    title: { en: "The Operating Systems Framework", de: "Das Operating Systems Framework" }, 
    subtitle: { 
      en: "A systematic approach to transform Operations, Finance, Talent, and Data/Tech", 
      de: "Ein systematischer Ansatz zur Transformation von Operations, Finance, Talent und Data/Tech" 
    },
    items: [
      {
        id: "operations",
        icon: "Settings",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Operations System", de: "Operations System" },
        subtitle: { en: "Dimension 3: How you execute and optimize processes", de: "Dimension 3: Wie du Prozesse ausführst und optimierst" },
        description: { 
          en: "Process Standardization, Workflow Automation, Operational Excellence, Operations Analytics, and AI-Powered Operations.", 
          de: "Prozess-Standardisierung, Workflow-Automatisierung, Operational Excellence, Operations Analytics und AI-Powered Operations." 
        },
        metrics: [
          { label: { en: "Operational Costs", de: "Betriebskosten" }, value: "-30-50%" },
          { label: { en: "Efficiency", de: "Effizienz" }, value: "+2-5x" },
          { label: { en: "Automation", de: "Automatisierung" }, value: "+60-80pp" }
        ],
        actions: [
          { en: "Sub-Playbook: Operations Playbook (5 Components)", de: "Sub-Playbook: Operations Playbook (5 Komponenten)" }
        ]
      },
      {
        id: "finance",
        icon: "DollarSign",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        title: { en: "Finance System", de: "Finance System" },
        subtitle: { en: "Dimension 4: How you manage cash, metrics, and unit economics", de: "Dimension 4: Wie du Cash, Metriken und Unit Economics managst" },
        description: { 
          en: "Unit Economics, FP&A Systems, Scenario Planning, Financial Reporting, and AI-Powered Finance.", 
          de: "Unit Economics, FP&A Systeme, Szenarioplanung, Financial Reporting und AI-Powered Finance." 
        },
        metrics: [
          { label: { en: "Rule of 40", de: "Rule of 40" }, value: "+8-15pp" },
          { label: { en: "Burn Multiple", de: "Burn Multiple" }, value: "-50-70%" },
          { label: { en: "Forecast Accuracy", de: "Forecast-Genauigkeit" }, value: "+30-50%" }
        ],
        actions: [
          { en: "Sub-Playbook: Finance Playbook (5 Components)", de: "Sub-Playbook: Finance Playbook (5 Komponenten)" }
        ]
      },
      {
        id: "talent",
        icon: "Users",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Talent System", de: "Talent System" },
        subtitle: { en: "Dimension 5: How you hire, retain, and develop people", de: "Dimension 5: Wie du einstellst, behältst und entwickelst" },
        description: { 
          en: "Hiring Machine, Onboarding Excellence, Performance Management, Retention & Culture, and AI-Powered Talent Operations.", 
          de: "Hiring Machine, Onboarding Excellence, Performance Management, Retention & Culture und AI-Powered Talent Operations." 
        },
        metrics: [
          { label: { en: "Time-to-Hire", de: "Time-to-Hire" }, value: "-60%" },
          { label: { en: "Onboarding Time", de: "Onboarding-Zeit" }, value: "-70%" },
          { label: { en: "Retention", de: "Retention" }, value: "+20-40%" }
        ],
        actions: [
          { en: "Sub-Playbook: Talent Playbook (5 Components)", de: "Sub-Playbook: Talent Playbook (5 Komponenten)" }
        ]
      },
      {
        id: "data-tech",
        icon: "Database",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        title: { en: "Data/Tech System", de: "Data/Tech System" },
        subtitle: { en: "Dimension 7: How you leverage data and technology", de: "Dimension 7: Wie du Daten und Technologie nutzt" },
        description: { 
          en: "Data Architecture, Tech Stack Excellence, Analytics & BI, ML Ops & AI Platform, and AI-Powered Data/Tech.", 
          de: "Data Architecture, Tech Stack Excellence, Analytics & BI, ML Ops & AI Platform und AI-Powered Data/Tech." 
        },
        metrics: [
          { label: { en: "Data Quality", de: "Datenqualität" }, value: "+50-100%" },
          { label: { en: "Tech Efficiency", de: "Tech-Effizienz" }, value: "+2-5x" },
          { label: { en: "AI Adoption", de: "AI Adoption" }, value: "+100-300%" }
        ],
        actions: [
          { en: "Sub-Playbook: Data/Tech Playbook (5 Components)", de: "Sub-Playbook: Data/Tech Playbook (5 Komponenten)" }
        ]
      }
    ] 
  },
  bestPractices: { 
    title: { en: "Best Practices", de: "Best Practices" }, 
    categories: [
      {
        category: { en: "Process Design", de: "Prozess-Design" },
        items: [
          { do: { en: "Standardize core processes before automating", de: "Kernprozesse standardisieren bevor automatisieren" }, dont: { en: "Automate broken processes", de: "Kaputte Prozesse automatisieren" } },
          { do: { en: "Design for AI-first from the start", de: "Von Anfang an AI-first designen" }, dont: { en: "Bolt AI onto legacy systems", de: "AI auf Legacy-Systeme schrauben" } }
        ]
      },
      {
        category: { en: "System Integration", de: "System-Integration" },
        items: [
          { do: { en: "Build unified data pipelines across all 4 systems", de: "Einheitliche Data Pipelines über alle 4 Systeme aufbauen" }, dont: { en: "Create siloed systems", de: "Isolierte Systeme schaffen" } },
          { do: { en: "Measure cross-system efficiency", de: "Systemübergreifende Effizienz messen" }, dont: { en: "Optimize individual systems in isolation", de: "Einzelne Systeme isoliert optimieren" } }
        ]
      }
    ] 
  },
  roadmap: { 
    title: { en: "90-Day Implementation Roadmap", de: "90-Tage-Implementierungs-Roadmap" }, 
    subtitle: { en: "From assessment to AI-native operating systems", de: "Von der Analyse zu AI-native Operating Systems" }, 
    phases: [
      {
        phase: 1,
        title: { en: "Assessment", de: "Assessment" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Assess all 4 operating systems, identify bottleneck, create roadmap", de: "Alle 4 Operating Systems bewerten, Engpass identifizieren, Roadmap erstellen" },
        deliverables: [
          { en: "Operating Systems Assessment (Ops, Finance, Talent, Data/Tech scores)", de: "Operating Systems Assessment (Ops, Finance, Talent, Data/Tech Scores)" },
          { en: "Bottleneck Analysis (Which system is weakest?)", de: "Engpass-Analyse (Welches System ist am schwächsten?)" },
          { en: "Operating Systems Roadmap (12-24 month roadmap)", de: "Operating Systems Roadmap (12-24 Monate Roadmap)" },
          { en: "Quick Wins (3-5 quick wins per system)", de: "Quick Wins (3-5 Quick Wins pro System)" }
        ],
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        phase: 2,
        title: { en: "Build", de: "Build" },
        timeline: { en: "Week 3-8", de: "Woche 3-8" },
        focus: { en: "Fix bottleneck system, improve all 4 systems, AI integration", de: "Engpass-System fixen, alle 4 Systeme verbessern, AI-Integration" },
        deliverables: [
          { en: "Operations System: Process standardization, workflow automation", de: "Operations System: Prozess-Standardisierung, Workflow-Automatisierung" },
          { en: "Finance System: Unit economics, FP&A systems, reporting", de: "Finance System: Unit Economics, FP&A Systeme, Reporting" },
          { en: "Talent System: Hiring machine, onboarding, performance management", de: "Talent System: Hiring Machine, Onboarding, Performance Management" },
          { en: "Data/Tech System: Data infrastructure, tech stack, AI platform", de: "Data/Tech System: Data Infrastructure, Tech Stack, AI Platform" }
        ],
        gradient: "from-cyan-500 to-teal-500"
      },
      {
        phase: 3,
        title: { en: "Scale", de: "Scale" },
        timeline: { en: "Week 9-12", de: "Woche 9-12" },
        focus: { en: "Scale all 4 systems, optimize, continuous improvement", de: "Alle 4 Systeme skalieren, optimieren, kontinuierliche Verbesserung" },
        deliverables: [
          { en: "Operating Systems Scaling (Scale Ops, Finance, Talent, Data/Tech)", de: "Operating Systems Skalierung (Ops, Finance, Talent, Data/Tech skalieren)" },
          { en: "Operating Systems Optimization (Continuous improvement)", de: "Operating Systems Optimierung (Kontinuierliche Verbesserung)" },
          { en: "Operating Systems Tracking (Monthly/quarterly reviews)", de: "Operating Systems Tracking (Monatliche/Quartals-Reviews)" },
          { en: "Operating Systems Excellence (Maintain high performance)", de: "Operating Systems Excellence (Hohe Performance beibehalten)" }
        ],
        gradient: "from-teal-500 to-emerald-500"
      }
    ] 
  },
  caseStudies: { 
    title: { en: "Real-World Results", de: "Echte Ergebnisse" }, 
    subtitle: { en: "How 3 companies transformed their operating systems with the framework", de: "Wie 3 Unternehmen ihre Operating Systems mit dem Framework transformiert haben" }, 
    cases: [
      {
        company: { en: "Series A SaaS Company", de: "Series A SaaS Unternehmen" },
        problem: { en: "High operational costs (40% of revenue), manual processes (80%), need to scale 3x without proportional headcount growth", de: "Hohe Betriebskosten (40% des Umsatzes), manuelle Prozesse (80%), muss 3x skalieren ohne proportionales Headcount-Wachstum" },
        solution: { en: "Full Operating Systems transformation: Operations (process standardization, automation), Finance (unit economics, FP&A), Talent (hiring machine, onboarding), Data/Tech (infrastructure, AI platform). AI Maturity: Level 1 → Level 2.", de: "Komplette Operating Systems Transformation: Operations (Prozess-Standardisierung, Automatisierung), Finance (Unit Economics, FP&A), Talent (Hiring Machine, Onboarding), Data/Tech (Infrastruktur, AI Platform). AI Maturity: Level 1 → Level 2." },
        results: [
          { metric: { en: "Operational Costs", de: "Betriebskosten" }, before: "40%", after: "22%", change: "-45%" },
          { metric: { en: "Process Automation", de: "Prozess-Automatisierung" }, before: "20%", after: "85%", change: "+325%" },
          { metric: { en: "Efficiency", de: "Effizienz" }, before: "1.2x", after: "3.8x", change: "+217%" },
          { metric: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, before: "€171k", after: "€500k", change: "+192%" }
        ],
        timeline: { en: "18 months | Boost + Accelerate", de: "18 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS Unternehmen" },
        problem: { en: "Need to improve capital efficiency (Rule of 40: 25%) for Series C fundraise, high operational costs and low forecasting accuracy", de: "Muss Kapitaleffizienz verbessern (Rule of 40: 25%) für Series C Fundraise, hohe Betriebskosten und niedrige Forecast-Genauigkeit" },
        solution: { en: "Focus on Finance and Operations systems with AI integration. Implemented FP&A systems, financial forecasting, unit economics optimization, operational excellence. AI Maturity: Level 1 → Level 3.", de: "Fokus auf Finance und Operations Systeme mit AI-Integration. Implementiert FP&A Systeme, Financial Forecasting, Unit Economics Optimierung, Operational Excellence. AI Maturity: Level 1 → Level 3." },
        results: [
          { metric: { en: "Rule of 40", de: "Rule of 40" }, before: "25%", after: "45%", change: "+20pp" },
          { metric: { en: "Burn Multiple", de: "Burn Multiple" }, before: "2.5x", after: "0.8x", change: "-68%" },
          { metric: { en: "Operational Costs", de: "Betriebskosten" }, before: "35%", after: "20%", change: "-43%" },
          { metric: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, before: "€194k", after: "€750k", change: "+287%" }
        ],
        timeline: { en: "24 months | Accelerate × 2 phases", de: "24 Monate | Accelerate × 2 Phasen" }
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: { en: "Need to reach €100M ARR without proportional headcount growth for IPO readiness, currently at €40M ARR with 200 people", de: "Muss €100M ARR erreichen ohne proportionales Headcount-Wachstum für IPO-Readiness, aktuell bei €40M ARR mit 200 Mitarbeitern" },
        solution: { en: "Full AI-native transformation across all 4 Operating Systems. Focus on automation, AI integration, and efficiency optimization. AI Maturity: Level 1 → Level 3.", de: "Komplette AI-native Transformation über alle 4 Operating Systems. Fokus auf Automatisierung, AI-Integration und Effizienz-Optimierung. AI Maturity: Level 1 → Level 3." },
        results: [
          { metric: { en: "ARR", de: "ARR" }, before: "€40M", after: "€100M", change: "+150%" },
          { metric: { en: "Headcount", de: "Headcount" }, before: "200", after: "200", change: "0%" },
          { metric: { en: "ARR/Employee", de: "ARR/Mitarbeiter" }, before: "€200k", after: "€500k", change: "+150%" },
          { metric: { en: "Operational Costs", de: "Betriebskosten" }, before: "38%", after: "18%", change: "-53%" }
        ],
        timeline: { en: "18 months | Accelerate + Extension", de: "18 Monate | Accelerate + Extension" }
      }
    ] 
  },
  solutionsConnection: { 
    title: { en: "How We Can Help", de: "Wie wir helfen können" }, 
    subtitle: { en: "Choose the right engagement model for your timeline and budget", de: "Wähle das richtige Engagement-Modell für deine Timeline und Budget" }, 
    items: [
      {
        type: 'assessment',
        name: { en: "Scaling Readiness Assessment", de: "Scaling Readiness Assessment" },
        duration: { en: "3-5 Days", de: "3-5 Tage" },
        price: { en: "€3.9K-€5.9K", de: "€3.9K-€5.9K" },
        outcome: { en: "Full operating systems assessment (Ops, Finance, Talent, Data/Tech), maturity scoring, bottleneck identification, 90-day roadmap", de: "Vollständiges Operating Systems Assessment (Ops, Finance, Talent, Data/Tech), Maturity Scoring, Engpass-Identifikation, 90-Tage-Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/scaling-readiness-assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: 'power-up',
        name: { en: "Scaling Velocity", de: "Scaling Velocity" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "Fix one operating system in 30 days: focused sprint, one system improvement, quick wins, measurable results", de: "Fixiere ein Operating System in 30 Tagen: fokussierter Sprint, eine System-Verbesserung, Quick Wins, messbare Ergebnisse" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/scaling-velocity",
        icon: "Zap",
        color: "bg-orange-500/10 text-orange-500"
      },
      {
        type: 'boost',
        name: { en: "Scaling OS", de: "Scaling OS" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Transform 2-3 operating systems in 90 days: full transformation, AI integration, systematic improvement, measurable ROI", de: "Transformiere 2-3 Operating Systems in 90 Tagen: volle Transformation, AI-Integration, systematische Verbesserung, messbarer ROI" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/scaling-os",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: 'accelerate',
        name: { en: "Full Transformation", de: "Volle Transformation" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full AI-native transformation, all 4 operating systems, AI Maturity Level 3, 2-5x scaling efficiency, market leadership", de: "Volle AI-native Transformation, alle 4 Operating Systems, AI Maturity Level 3, 2-5x Skalierungs-Effizienz, Marktführerschaft" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/ai-native-scaling",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ]
  },
  whoThisIsFor: { 
    title: { en: "Who Should Use This Playbook?", de: "Wer sollte dieses Playbook nutzen?" }, 
    subtitle: { en: "Ideal for scaling companies that need operational excellence", de: "Ideal für skalierende Unternehmen, die Operational Excellence brauchen" }, 
    icp: { 
      en: "Series A-C SaaS companies (€5M-€100M ARR) that need to scale 3-5x without proportional headcount growth", 
      de: "Series A-C SaaS Unternehmen (€5M-€100M ARR), die 3-5x skalieren müssen ohne proportionales Headcount-Wachstum" 
    }, 
    personas: [
      {
        icon: "Crown",
        role: { en: "CEOs", de: "CEOs" },
        pain: { en: "Need to scale without linear headcount growth", de: "Müssen skalieren ohne lineares Headcount-Wachstum" },
        outcome: { en: "€100M+ ARR with flat or minimal headcount increase", de: "€100M+ ARR mit flachem oder minimalem Headcount-Anstieg" },
        color: "blue"
      },
      {
        icon: "Settings",
        role: { en: "COOs", de: "COOs" },
        pain: { en: "Responsible for operations and process excellence", de: "Verantwortlich für Operations und Process Excellence" },
        outcome: { en: "2-5x efficiency gains, 70-90% process automation", de: "2-5x Effizienzsteigerungen, 70-90% Prozess-Automatisierung" },
        color: "cyan"
      },
      {
        icon: "DollarSign",
        role: { en: "CFOs", de: "CFOs" },
        pain: { en: "Responsible for financial planning and capital efficiency", de: "Verantwortlich für Finanzplanung und Kapitaleffizienz" },
        outcome: { en: "Rule of 40 improvement of +8-15pp, forecast accuracy 95%+", de: "Rule of 40 Verbesserung von +8-15pp, Forecast-Genauigkeit 95%+" },
        color: "emerald"
      },
      {
        icon: "Code",
        role: { en: "CTOs", de: "CTOs" },
        pain: { en: "Responsible for data infrastructure and tech stack", de: "Verantwortlich für Data Infrastructure und Tech Stack" },
        outcome: { en: "Data quality +50-100%, tech efficiency +2-5x, AI adoption +100-300%", de: "Datenqualität +50-100%, Tech-Effizienz +2-5x, AI Adoption +100-300%" },
        color: "violet"
      }
    ] 
  },
  subPlaybooks: {
    title: { en: "The 4 Sub-Playbooks", de: "Die 4 Sub-Playbooks" },
    subtitle: { en: "Deep-dive into each operating system with detailed playbooks", de: "Tauche tief in jedes Operating System ein mit detaillierten Playbooks" },
    items: [
      {
        id: 10,
        slug: "operating-systems/operations",
        title: { en: "Operations Playbook", de: "Operations Playbook" },
        teaser: { en: "How to build operations that scale without chaos. Learn the 5 components (Process Design, Workflow Automation, AI Orchestration, Operational Analytics, AI-Powered Ops) used by AI-native companies to reduce operational costs by 30-50% and achieve 2-5x efficiency gains.", de: "Wie du Operations aufbaust, die ohne Chaos skalieren. Lerne die 5 Komponenten (Process Design, Workflow Automation, AI Orchestration, Operational Analytics, AI-Powered Ops), die AI-native Unternehmen nutzen, um Betriebskosten um 30-50% zu senken und 2-5x Effizienzsteigerungen zu erzielen." },
        icon: "Settings",
        color: "blue"
      },
      {
        id: 11,
        slug: "operating-systems/finance",
        title: { en: "Finance Playbook", de: "Finance Playbook" },
        teaser: { en: "How to build finance systems that drive capital efficiency. Learn the 5 components (Unit Economics, FP&A Systems, Scenario Planning, Reporting, AI-Powered Finance) used by AI-native companies to improve Rule of 40 by 8-15pp and reduce burn multiple by 50-70%.", de: "Wie du Finance Systeme aufbaust, die Kapitaleffizienz treiben. Lerne die 5 Komponenten (Unit Economics, FP&A Systeme, Szenarioplanung, Reporting, AI-Powered Finance), die AI-native Unternehmen nutzen, um Rule of 40 um 8-15pp zu verbessern und Burn Multiple um 50-70% zu senken." },
        icon: "DollarSign",
        color: "emerald"
      },
      {
        id: 12,
        slug: "operating-systems/talent",
        title: { en: "Talent Playbook", de: "Talent Playbook" },
        teaser: { en: "How to build talent systems that attract and retain top performers. Learn the 5 components (Hiring Machine, Onboarding, Performance, Talent Analytics, AI-Powered Talent) used by AI-native companies to reduce time-to-hire by 60% and improve retention by 20-40%.", de: "Wie du Talent Systeme aufbaust, die Top-Performer anziehen und halten. Lerne die 5 Komponenten (Hiring Machine, Onboarding, Performance, Talent Analytics, AI-Powered Talent), die AI-native Unternehmen nutzen, um Time-to-Hire um 60% zu reduzieren und Retention um 20-40% zu verbessern." },
        icon: "Users",
        color: "violet"
      },
      {
        id: 13,
        slug: "operating-systems/data-tech",
        title: { en: "Data/Tech Playbook", de: "Data/Tech Playbook" },
        teaser: { en: "How to build data and tech infrastructure that scales. Learn the 5 components (Data Architecture, Tech Stack, Analytics & BI, ML Ops, AI-Powered Data/Tech) used by AI-native companies to improve data quality by 50-100% and achieve 2-5x tech efficiency.", de: "Wie du Data und Tech Infrastruktur aufbaust, die skaliert. Lerne die 5 Komponenten (Data Architecture, Tech Stack, Analytics & BI, ML Ops, AI-Powered Data/Tech), die AI-native Unternehmen nutzen, um Datenqualität um 50-100% zu verbessern und 2-5x Tech-Effizienz zu erzielen." },
        icon: "Database",
        color: "cyan"
      }
    ]
  },
  finalCta: { 
    headline: { en: "Get Started Today", de: "Starte heute" }, 
    subline: { en: "Transform your operating systems with AI-native efficiency", de: "Transformiere deine Operating Systems mit AI-native Effizienz" }, 
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-Seiten Playbook mit Templates" },
      { en: "4 detailed sub-playbooks", de: "4 detaillierte Sub-Playbooks" },
      { en: "3 real-world case studies", de: "3 echte Case Studies" },
      { en: "90-day implementation roadmap", de: "90-Tage-Implementierungs-Roadmap" }
    ], 
    bookingUrl: "https://www.cal.scalingx.io/inflection-call", 
    downloadUrl: "#" 
  }
};
