import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('operating-systems/data-tech')!;

export const dataTechData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Data/Tech · Operating Systems", de: "Data/Tech · Operating Systems" },
    title: "Data/Tech Playbook",
    subtitle: { 
      en: "How to build data and tech infrastructure that scales with AI", 
      de: "Wie du Daten- und Tech-Infrastruktur aufbaust, die mit AI skaliert" 
    },
    description: { 
      en: "Traditional data and tech infrastructure is fragmented. Companies have data in 10+ systems, tech debt at 60%, and no AI platform. Data quality is 40%, deployment takes weeks, and scaling is painful. The problem? Manual infrastructure doesn't scale.\n\nAI-native companies use a different playbook. They leverage the 5-component framework to improve data quality by 80%, reduce tech debt by 60%, and deploy AI models in hours (not weeks). They build once, scale infinitely.\n\nThis playbook gives you the exact framework used by Series A-C companies to build world-class data and tech infrastructure. Learn from real-world case studies and get actionable implementation guides.",
      de: "Traditionelle Daten- und Tech-Infrastruktur ist fragmentiert. Unternehmen haben Daten in 10+ Systemen, Tech Debt bei 60%, und keine AI-Plattform. Datenqualität liegt bei 40%, Deployment dauert Wochen, und Skalierung ist schmerzhaft.\n\nAI-native Unternehmen nutzen ein anderes Playbook. Sie nutzen das 5-Komponenten-Framework, um Datenqualität um 80% zu verbessern, Tech Debt um 60% zu reduzieren und AI-Modelle in Stunden (nicht Wochen) zu deployen.\n\nDieses Playbook gibt dir das exakte Framework, das Series A-C Unternehmen nutzen, um erstklassige Daten- und Tech-Infrastruktur aufzubauen."
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#download",
    gradient: "from-cyan-500 to-blue-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "Data in 10+ systems, 60% tech debt, 40% data quality, 2-4 weeks to deploy models. Manual infrastructure doesn't scale.",
        de: "Daten in 10+ Systemen, 60% Tech Debt, 40% Datenqualität, 2-4 Wochen für Model Deployment. Manuelle Infrastruktur skaliert nicht."
      }
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Data/Tech is the foundation for AI-native scaling. Without unified data and modern tech stack, AI initiatives fail. The best companies deploy models 10x faster.",
        de: "Data/Tech ist das Fundament für AI-native Skalierung. Ohne vereinheitlichte Daten und modernen Tech Stack scheitern AI-Initiativen. Die besten Unternehmen deployen Modelle 10x schneller."
      }
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The 5-component framework: Data Architecture, Tech Stack Excellence, Analytics & BI, ML Ops & AI Platform, and AI-Powered Data/Tech.",
        de: "Das 5-Komponenten-Framework: Data Architecture, Tech Stack Excellence, Analytics & BI, ML Ops & AI Platform und AI-Powered Data/Tech."
      }
    }
  },
  problem: {
    title: { en: "Why Traditional Data/Tech Infrastructure is Broken", de: "Warum traditionelle Data/Tech-Infrastruktur kaputt ist" },
    subtitle: { 
      en: "Most companies have fragmented data, massive tech debt, and no AI platform", 
      de: "Die meisten Unternehmen haben fragmentierte Daten, massive Tech Debt und keine AI-Plattform" 
    },
    bullets: [
      { text: { en: "Data Fragmentation: Data in 10+ systems (vs. 1 unified platform for AI-native)", de: "Daten-Fragmentierung: Daten in 10+ Systemen (vs. 1 vereinheitlichte Plattform für AI-native)" } },
      { text: { en: "Tech Debt: Average tech debt is 60% (vs. 15% for AI-native companies)", de: "Tech Debt: Durchschnittliche Tech Debt liegt bei 60% (vs. 15% für AI-native Unternehmen)" } },
      { text: { en: "Data Quality: Average data quality is 40% (vs. 95% for AI-native)", de: "Datenqualität: Durchschnittliche Datenqualität liegt bei 40% (vs. 95% für AI-native)" } },
      { text: { en: "Deployment Speed: Average deployment time is 2-4 weeks (vs. 1 day for AI-native)", de: "Deployment-Geschwindigkeit: Durchschnittliche Deployment-Zeit liegt bei 2-4 Wochen (vs. 1 Tag für AI-native)" } }
    ],
    metrics: [
      { label: { en: "Data Sources", de: "Datenquellen" }, value: "10+", trend: "up" },
      { label: { en: "Tech Debt", de: "Tech Debt" }, value: "60%", trend: "up" },
      { label: { en: "Data Quality", de: "Datenqualität" }, value: "40%", trend: "down" },
      { label: { en: "Deployment Time", de: "Deployment-Zeit" }, value: "2-4wk", trend: "up" }
    ]
  },
  framework: {
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" },
    subtitle: { 
      en: "How AI-native companies build data and tech infrastructure that scales", 
      de: "Wie AI-native Unternehmen Daten- und Tech-Infrastruktur aufbauen, die skaliert" 
    },
    items: [
      {
        id: "data-architecture",
        icon: "Database",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        title: { en: "Data Architecture & Infrastructure", de: "Data Architecture & Infrastructure" },
        subtitle: { en: "Build a unified, scalable data platform", de: "Baue eine vereinheitlichte, skalierbare Datenplattform" },
        description: { en: "Build a unified, scalable data platform that enables AI and analytics at scale.", de: "Baue eine vereinheitlichte, skalierbare Datenplattform, die AI und Analytics im großen Maßstab ermöglicht." },
        metrics: [
          { label: { en: "Data Quality", de: "Datenqualität" }, value: "+80%" },
          { label: { en: "Data Access Time", de: "Datenzugriffszeit" }, value: "-90%" }
        ],
        actions: [
          { en: "Define data strategy (vision, principles, roadmap)", de: "Definiere Data Strategy (Vision, Prinzipien, Roadmap)" },
          { en: "Build data architecture (warehouse, lake, mesh)", de: "Baue Data Architecture auf (Warehouse, Lake, Mesh)" },
          { en: "Implement data pipelines (ETL/ELT, streaming, batch)", de: "Implementiere Data Pipelines (ETL/ELT, Streaming, Batch)" },
          { en: "Deploy data quality (validation, cleaning, monitoring)", de: "Deploye Data Quality (Validierung, Cleaning, Monitoring)" },
          { en: "Enable AI-powered data (auto-schema, lineage, cataloging)", de: "Aktiviere AI-Powered Data (Auto-Schema, Lineage, Cataloging)" }
        ]
      },
      {
        id: "tech-stack",
        icon: "Puzzle",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Tech Stack Excellence & Integration", de: "Tech Stack Excellence & Integration" },
        subtitle: { en: "Build an integrated, scalable tech stack", de: "Baue einen integrierten, skalierbaren Tech Stack" },
        description: { en: "Build an integrated, scalable tech stack that eliminates silos and enables automation.", de: "Baue einen integrierten, skalierbaren Tech Stack, der Silos eliminiert und Automatisierung ermöglicht." },
        metrics: [
          { label: { en: "Tech Debt", de: "Tech Debt" }, value: "-60%" },
          { label: { en: "Integration Time", de: "Integrationszeit" }, value: "-80%" }
        ],
        actions: [
          { en: "Define tech stack strategy (selection, integration, consolidation)", de: "Definiere Tech Stack Strategy (Auswahl, Integration, Konsolidierung)" },
          { en: "Build architecture (microservices, APIs, event-driven)", de: "Baue Architecture auf (Microservices, APIs, Event-Driven)" },
          { en: "Deploy integration platform (iPaaS, API gateway, webhooks)", de: "Deploye Integration Platform (iPaaS, API Gateway, Webhooks)" },
          { en: "Implement tech debt management (refactoring, deprecation)", de: "Implementiere Tech Debt Management (Refactoring, Deprecation)" },
          { en: "Enable AI-powered tech stack (auto-integration, self-healing)", de: "Aktiviere AI-Powered Tech Stack (Auto-Integration, Self-Healing)" }
        ]
      },
      {
        id: "analytics-bi",
        icon: "BarChart3",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Analytics & BI Systems", de: "Analytics & BI Systeme" },
        subtitle: { en: "Build self-service analytics and BI", de: "Baue Self-Service Analytics und BI" },
        description: { en: "Build self-service analytics and BI that enables data-driven decisions across the organization.", de: "Baue Self-Service Analytics und BI, das datengetriebene Entscheidungen in der gesamten Organisation ermöglicht." },
        metrics: [
          { label: { en: "Analytics Adoption", de: "Analytics Adoption" }, value: "+200%" },
          { label: { en: "Time-to-Insight", de: "Time-to-Insight" }, value: "-80%" }
        ],
        actions: [
          { en: "Define analytics strategy (metrics, KPIs, dashboards)", de: "Definiere Analytics Strategy (Metriken, KPIs, Dashboards)" },
          { en: "Deploy BI platform (Tableau, Looker, Metabase)", de: "Deploye BI Platform (Tableau, Looker, Metabase)" },
          { en: "Build data modeling (semantic layer, metrics layer, dbt)", de: "Baue Data Modeling auf (Semantic Layer, Metrics Layer, dbt)" },
          { en: "Enable self-service analytics (ad-hoc queries, notebooks)", de: "Aktiviere Self-Service Analytics (Ad-Hoc Queries, Notebooks)" },
          { en: "Deploy AI-powered analytics (NL queries, auto-insights)", de: "Deploye AI-Powered Analytics (NL Queries, Auto-Insights)" }
        ]
      },
      {
        id: "ml-ops",
        icon: "Bot",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "ML Ops & AI Platform", de: "ML Ops & AI Platform" },
        subtitle: { en: "Build infrastructure for AI/ML at scale", de: "Baue Infrastruktur für AI/ML im großen Maßstab" },
        description: { en: "Build infrastructure for AI/ML at scale with automated model lifecycle management.", de: "Baue Infrastruktur für AI/ML im großen Maßstab mit automatisiertem Model Lifecycle Management." },
        metrics: [
          { label: { en: "Deployment Time", de: "Deployment-Zeit" }, value: "-90%" },
          { label: { en: "Model Performance", de: "Model Performance" }, value: "+50%" }
        ],
        actions: [
          { en: "Define ML Ops strategy (lifecycle, deployment, monitoring)", de: "Definiere ML Ops Strategy (Lifecycle, Deployment, Monitoring)" },
          { en: "Build ML platform (training, serving, registry)", de: "Baue ML Platform auf (Training, Serving, Registry)" },
          { en: "Deploy feature store (engineering, storage, serving)", de: "Deploye Feature Store (Engineering, Storage, Serving)" },
          { en: "Implement model monitoring (drift detection, retraining)", de: "Implementiere Model Monitoring (Drift Detection, Retraining)" },
          { en: "Enable AI-powered ML Ops (auto-retraining, auto-scaling)", de: "Aktiviere AI-Powered ML Ops (Auto-Retraining, Auto-Scaling)" }
        ]
      },
      {
        id: "ai-powered",
        icon: "Sparkles",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered Data/Tech (AI Multiplier)", de: "AI-Powered Data/Tech (AI Multiplikator)" },
        subtitle: { en: "AI that optimizes infrastructure", de: "AI, die Infrastruktur optimiert" },
        description: { en: "AI that continuously optimizes data and tech infrastructure for maximum efficiency.", de: "AI, die Daten- und Tech-Infrastruktur kontinuierlich für maximale Effizienz optimiert." },
        metrics: [
          { label: { en: "Infrastructure Efficiency", de: "Infrastruktur-Effizienz" }, value: "+300%" },
          { label: { en: "Data Quality", de: "Datenqualität" }, value: "+50%" }
        ],
        actions: [
          { en: "Implement AI data quality (auto-validation, auto-cleaning)", de: "Implementiere AI Data Quality (Auto-Validierung, Auto-Cleaning)" },
          { en: "Deploy AI data discovery (auto-cataloging, smart search)", de: "Deploye AI Data Discovery (Auto-Cataloging, Smart Search)" },
          { en: "Enable AI infrastructure optimization (auto-scaling, cost)", de: "Aktiviere AI Infrastructure Optimization (Auto-Scaling, Kosten)" },
          { en: "Build AI incident management (detection, root cause)", de: "Baue AI Incident Management auf (Detection, Root Cause)" },
          { en: "Deploy AI platform intelligence (usage analytics, maintenance)", de: "Deploye AI Platform Intelligence (Usage Analytics, Maintenance)" }
        ]
      }
    ]
  },
  bestPractices: {
    title: { en: "Best Practices", de: "Best Practices" },
    categories: [
      {
        category: { en: "Data Architecture", de: "Data Architecture" },
        items: [
          { do: { en: "Design for single source of truth from day one", de: "Designe für Single Source of Truth von Tag eins" }, dont: { en: "Let data sprawl across 10+ disconnected systems", de: "Lass Daten über 10+ unverbundene Systeme verteilen" } },
          { do: { en: "Implement data contracts between teams", de: "Implementiere Data Contracts zwischen Teams" }, dont: { en: "Allow schema changes without coordination", de: "Erlaube Schema-Änderungen ohne Koordination" } },
          { do: { en: "Build data quality into pipelines, not after", de: "Baue Datenqualität in Pipelines ein, nicht danach" }, dont: { en: "Treat data quality as an afterthought", de: "Behandle Datenqualität als Nachgedanken" } }
        ]
      },
      {
        category: { en: "Tech Stack Excellence", de: "Tech Stack Excellence" },
        items: [
          { do: { en: "Consolidate before adding new tools", de: "Konsolidiere bevor du neue Tools hinzufügst" }, dont: { en: "Add new tools without evaluating existing stack", de: "Füge neue Tools ohne Bewertung des bestehenden Stacks hinzu" } },
          { do: { en: "API-first architecture for everything", de: "API-first Architecture für alles" }, dont: { en: "Build point-to-point integrations", de: "Baue Punkt-zu-Punkt Integrationen" } },
          { do: { en: "Plan for tech debt reduction quarterly", de: "Plane Tech Debt Reduktion quartalsweise" }, dont: { en: "Let tech debt accumulate unchecked", de: "Lass Tech Debt unkontrolliert anwachsen" } }
        ]
      },
      {
        category: { en: "ML Ops Excellence", de: "ML Ops Excellence" },
        items: [
          { do: { en: "Start with model monitoring, not just deployment", de: "Starte mit Model Monitoring, nicht nur Deployment" }, dont: { en: "Deploy models without observability", de: "Deploye Modelle ohne Observability" } },
          { do: { en: "Use feature stores to enable model reusability", de: "Nutze Feature Stores für Model Reusability" }, dont: { en: "Rebuild features for each model", de: "Baue Features für jedes Modell neu" } },
          { do: { en: "Automate retraining pipelines early", de: "Automatisiere Retraining Pipelines früh" }, dont: { en: "Manually retrain models", de: "Trainiere Modelle manuell nach" } }
        ]
      }
    ]
  },
  roadmap: {
    title: { en: "How to Implement (90-Day Roadmap)", de: "Wie du es implementierst (90-Tage-Roadmap)" },
    subtitle: { 
      en: "A proven implementation path from strategy to execution", 
      de: "Ein bewährter Implementierungspfad von Strategie bis Execution" 
    },
    phases: [
      {
        phase: 1,
        title: { en: "Strategy", de: "Strategie" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Assess current state, design data architecture, define tech stack strategy", de: "Bewerte aktuellen Stand, designe Data Architecture, definiere Tech Stack Strategy" },
        deliverables: [
          { en: "Data Strategy (Data Vision, Architecture, Roadmap)", de: "Data Strategy (Data Vision, Architecture, Roadmap)" },
          { en: "Tech Stack Strategy (Tool Consolidation, Integration, Roadmap)", de: "Tech Stack Strategy (Tool-Konsolidierung, Integration, Roadmap)" },
          { en: "Analytics Strategy (Metrics, Dashboards, Self-Service)", de: "Analytics Strategy (Metriken, Dashboards, Self-Service)" },
          { en: "ML Ops Strategy (Model Lifecycle, Deployment, Monitoring)", de: "ML Ops Strategy (Model Lifecycle, Deployment, Monitoring)" },
          { en: "Data/Tech Strategy Deck (5 pages)", de: "Data/Tech Strategy Deck (5 Seiten)" }
        ],
        gradient: "from-cyan-500 to-blue-500"
      },
      {
        phase: 2,
        title: { en: "Setup", de: "Setup" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Build data platform, integrate tech stack, deploy BI, setup ML Ops", de: "Baue Datenplattform, integriere Tech Stack, deploye BI, richte ML Ops ein" },
        deliverables: [
          { en: "Data Platform (Data warehouse, ETL pipelines, data quality)", de: "Data Platform (Data Warehouse, ETL Pipelines, Datenqualität)" },
          { en: "Tech Stack Integration (API gateway, iPaaS, webhooks)", de: "Tech Stack Integration (API Gateway, iPaaS, Webhooks)" },
          { en: "BI Platform (Self-service BI, dashboards, metrics layer)", de: "BI Platform (Self-Service BI, Dashboards, Metrics Layer)" },
          { en: "ML Ops Platform (Feature store, model registry, serving)", de: "ML Ops Platform (Feature Store, Model Registry, Serving)" },
          { en: "Training Materials (Slides, Videos, Checklists)", de: "Trainingsmaterialien (Slides, Videos, Checklisten)" }
        ],
        gradient: "from-blue-500 to-indigo-500"
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Execution" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { en: "Migrate data, roll out BI, deploy models, monitor infrastructure", de: "Migriere Daten, rolle BI aus, deploye Modelle, überwache Infrastruktur" },
        deliverables: [
          { en: "Data Migration (All data sources → unified platform)", de: "Data Migration (Alle Datenquellen → vereinheitlichte Plattform)" },
          { en: "BI Rollout (Self-service analytics, training, adoption)", de: "BI Rollout (Self-Service Analytics, Training, Adoption)" },
          { en: "ML Models (First 5-10 models in production)", de: "ML Models (Erste 5-10 Modelle in Produktion)" },
          { en: "Infrastructure Monitoring (Real-time dashboards, alerts)", de: "Infrastructure Monitoring (Echtzeit-Dashboards, Alerts)" },
          { en: "Optimization Playbook (Continuous improvement)", de: "Optimization Playbook (Kontinuierliche Verbesserung)" }
        ],
        gradient: "from-indigo-500 to-violet-500"
      }
    ]
  },
  caseStudies: {
    title: { en: "Real-World Results", de: "Echte Ergebnisse" },
    subtitle: { 
      en: "How 3 companies transformed their data/tech infrastructure with the 5-component framework", 
      de: "Wie 3 Unternehmen ihre Daten-/Tech-Infrastruktur mit dem 5-Komponenten-Framework transformiert haben" 
    },
    cases: [
      {
        company: { en: "Series A SaaS Company (Fintech)", de: "Series A SaaS Unternehmen (Fintech)" },
        problem: { en: "Data in 10+ systems, data quality 40%, no data platform, analytics adoption at 10%", de: "Daten in 10+ Systemen, Datenqualität 40%, keine Datenplattform, Analytics Adoption bei 10%" },
        solution: { en: "Unified data platform with AI data quality, self-service BI, and feature store", de: "Vereinheitlichte Datenplattform mit AI Data Quality, Self-Service BI und Feature Store" },
        results: [
          { metric: { en: "Data Quality", de: "Datenqualität" }, before: "40%", after: "95%", change: "+138%" },
          { metric: { en: "Data Sources", de: "Datenquellen" }, before: "10+", after: "1", change: "-90%" },
          { metric: { en: "Analytics Adoption", de: "Analytics Adoption" }, before: "10%", after: "80%", change: "+700%" }
        ],
        timeline: { en: "6 months | Power Up + Boost", de: "6 Monate | Power Up + Boost" }
      },
      {
        company: { en: "Series B SaaS Company (HR Tech)", de: "Series B SaaS Unternehmen (HR Tech)" },
        problem: { en: "Tech debt 70%, deployment time 3 weeks, no ML Ops, infrastructure costs rising", de: "Tech Debt 70%, Deployment-Zeit 3 Wochen, keine ML Ops, steigende Infrastrukturkosten" },
        solution: { en: "Full ML Ops stack with API-first architecture, auto-scaling, and AI infrastructure optimization", de: "Voller ML Ops Stack mit API-first Architecture, Auto-Scaling und AI Infrastructure Optimization" },
        results: [
          { metric: { en: "Tech Debt", de: "Tech Debt" }, before: "70%", after: "20%", change: "-71%" },
          { metric: { en: "Deployment Time", de: "Deployment-Zeit" }, before: "3 weeks", after: "1 day", change: "-95%" },
          { metric: { en: "ML Models", de: "ML Modelle" }, before: "0", after: "50+", change: "from 0" }
        ],
        timeline: { en: "12 months | Boost + Accelerate", de: "12 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series C Company (E-Commerce Tech)", de: "Series C Unternehmen (E-Commerce Tech)" },
        problem: { en: "Need to scale AI 10x without 10x data/ML team, model deployment taking 2 weeks", de: "AI 10x skalieren ohne 10x Data/ML Team, Model Deployment dauert 2 Wochen" },
        solution: { en: "Comprehensive data/tech transformation with AI-powered ML Ops and infrastructure automation", de: "Umfassende Data/Tech Transformation mit AI-Powered ML Ops und Infrastructure Automation" },
        results: [
          { metric: { en: "ML Models", de: "ML Modelle" }, before: "10", after: "100+", change: "+900%" },
          { metric: { en: "Deployment Time", de: "Deployment-Zeit" }, before: "2 weeks", after: "2 hours", change: "-99%" },
          { metric: { en: "Data Quality", de: "Datenqualität" }, before: "60%", after: "98%", change: "+63%" }
        ],
        timeline: { en: "18 months | Accelerate × 2", de: "18 Monate | Accelerate × 2" }
      }
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
        name: { en: "Data/Tech Assessment", de: "Data/Tech Assessment" },
        duration: { en: "2-3 Days", de: "2-3 Tage" },
        price: { en: "€2.5K-€10K", de: "€2.5K-€10K" },
        outcome: { en: "Full data/tech maturity report + 90-day roadmap", de: "Vollständiger Data/Tech-Maturity-Report + 90-Tage-Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Data/Tech Sprint", de: "Data/Tech Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "Data Quality +60-80%, Tech Debt -40-60%", de: "Datenqualität +60-80%, Tech Debt -40-60%" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/scaling-velocity",
        icon: "Zap",
        color: "bg-cyan-500/10 text-cyan-500"
      },
      {
        type: "boost",
        name: { en: "Data/Tech Excellence", de: "Data/Tech Excellence" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Data Quality +80-100%, Tech Debt -60-80%, ML Ops deployed", de: "Datenqualität +80-100%, Tech Debt -60-80%, ML Ops deployed" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/scaling-os",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "AI-Native Data/Tech", de: "AI-Native Data/Tech" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full data/tech transformation, AI Maturity Level 3, Data Quality +80%, Tech Debt -60%", de: "Vollständige Data/Tech-Transformation, AI Maturity Level 3, Datenqualität +80%, Tech Debt -60%" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ]
  },
  whoThisIsFor: {
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" },
    subtitle: { 
      en: "This playbook is designed for leaders building scalable data and tech infrastructure", 
      de: "Dieses Playbook ist für Führungskräfte, die skalierbare Daten- und Tech-Infrastruktur aufbauen" 
    },
    icp: {
      en: "Series A-C companies that need to build AI-ready data and tech infrastructure",
      de: "Series A-C Unternehmen, die AI-ready Daten- und Tech-Infrastruktur aufbauen müssen"
    },
    personas: [
      {
        icon: "User",
        role: { en: "CEO", de: "CEO" },
        pain: { en: "Need scalable data and tech infrastructure to enable AI-native growth", de: "Brauche skalierbare Daten- und Tech-Infrastruktur für AI-native Wachstum" },
        outcome: { en: "Data becomes competitive advantage, AI initiatives succeed", de: "Daten werden Wettbewerbsvorteil, AI-Initiativen erfolgreich" },
        color: "cyan"
      },
      {
        icon: "Code",
        role: { en: "CTO", de: "CTO" },
        pain: { en: "Responsible for data architecture, tech stack, and reducing tech debt", de: "Verantwortlich für Data Architecture, Tech Stack und Tech Debt Reduktion" },
        outcome: { en: "Modern, scalable infrastructure that enables rapid AI deployment", de: "Moderne, skalierbare Infrastruktur für schnelles AI Deployment" },
        color: "blue"
      },
      {
        icon: "Database",
        role: { en: "CDO / Head of Data", de: "CDO / Head of Data" },
        pain: { en: "Need to build a world-class data platform that enables AI at scale", de: "Muss erstklassige Datenplattform aufbauen, die AI im großen Maßstab ermöglicht" },
        outcome: { en: "Unified data platform with 95%+ data quality and self-service analytics", de: "Vereinheitlichte Datenplattform mit 95%+ Datenqualität und Self-Service Analytics" },
        color: "violet"
      },
      {
        icon: "Terminal",
        role: { en: "VP Engineering", de: "VP Engineering" },
        pain: { en: "Need to reduce tech debt and deploy AI/ML models efficiently", de: "Muss Tech Debt reduzieren und AI/ML Modelle effizient deployen" },
        outcome: { en: "Tech debt under control, models deployed in hours not weeks", de: "Tech Debt unter Kontrolle, Modelle in Stunden statt Wochen deployed" },
        color: "amber"
      }
    ]
  },
  finalCta: {
    headline: { en: "Get Started Today", de: "Starte noch heute" },
    subline: { 
      en: "Transform your data and tech infrastructure with the 5-component framework", 
      de: "Transformiere deine Daten- und Tech-Infrastruktur mit dem 5-Komponenten-Framework" 
    },
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-seitiges Playbook mit Templates" },
      { en: "3 real-world case studies", de: "3 echte Case Studies" },
      { en: "90-day implementation roadmap", de: "90-Tage-Implementierungs-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#download"
  }
};
