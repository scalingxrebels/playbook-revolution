import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('operating-systems/operations')!;

export const operationsData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Ops · Operating Systems", de: "Ops · Operating Systems" },
    title: "Operations Playbook",
    subtitle: { 
      en: "How to build operations that scale with AI", 
      de: "Wie du Operations aufbaust, die mit AI skalieren" 
    },
    description: { 
      en: "Traditional operations are chaotic. Companies hire more operations managers, manually document processes, and still see costs rising and efficiency falling. AI-native companies use a different playbook. They leverage the 5-component framework to reduce operational costs by 60%, increase efficiency by 200%, and scale operations to thousands of processes with small teams.", 
      de: "Traditionelle Operations sind chaotisch. Unternehmen stellen mehr Operations Manager ein, dokumentieren Prozesse manuell und sehen trotzdem steigende Kosten und fallende Effizienz. AI-native Unternehmen nutzen ein anderes Playbook. Sie nutzen das 5-Komponenten-Framework, um Betriebskosten um 60% zu senken, Effizienz um 200% zu steigern und Operations auf tausende Prozesse mit kleinen Teams zu skalieren."
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Fallstudien" },
      { en: "90-Day Roadmap", de: "90-Tage Roadmap" }
    ],
    bookingUrl: "https://www.cal.scalingx.io/inflection-call",
    downloadUrl: "/downloads/operations-playbook.pdf",
    assetId: "playbook-operations",
    gradient: "from-blue-500 to-indigo-500"
  },
  summary: {
    problem: { 
      title: { en: "Problem", de: "Problem" }, 
      text: { en: "70% of processes undocumented, 50-70% manual work, 10-20% automation rate", de: "70% der Prozesse undokumentiert, 50-70% manuelle Arbeit, 10-20% Automatisierungsrate" } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { en: "Operations is the foundation for scaling. Broken ops = broken company at scale.", de: "Operations ist das Fundament für Skalierung. Kaputte Ops = kaputtes Unternehmen bei Skalierung." } 
    },
    solution: { 
      title: { en: "Solution", de: "Lösung" }, 
      text: { en: "5-component framework: Process Design, Workflow Automation, AI Orchestration, Operational Analytics, AI-Powered Operations", de: "5-Komponenten-Framework: Process Design, Workflow Automation, AI Orchestration, Operational Analytics, AI-Powered Operations" } 
    }
  },
  problem: {
    title: { en: "Why Traditional Operations is Broken", de: "Warum traditionelle Operations kaputt sind" },
    subtitle: { en: "The symptoms holding you back", de: "Die Symptome, die dich zurückhalten" },
    bullets: [
      { text: { en: "Processes Undocumented: 70% of processes exist only in people's heads", de: "Undokumentierte Prozesse: 70% der Prozesse existieren nur in den Köpfen der Mitarbeiter" } },
      { text: { en: "Manual Workflows: Operations teams spend 50-70% of time on manual tasks", de: "Manuelle Workflows: Operations-Teams verbringen 50-70% der Zeit mit manuellen Aufgaben" } },
      { text: { en: "No Automation: Average automation rate is 10-20% (vs. 70-90% for AI-native)", de: "Keine Automation: Durchschnittliche Automatisierungsrate ist 10-20% (vs. 70-90% bei AI-native)" } },
      { text: { en: "Scaling Chaos: Every new hire requires 2-4 weeks of training (vs. 2-3 days for AI-native)", de: "Skalierungs-Chaos: Jeder neue Mitarbeiter braucht 2-4 Wochen Einarbeitung (vs. 2-3 Tage bei AI-native)" } }
    ],
    metrics: [
      { label: { en: "Process Documentation", de: "Prozess-Dokumentation" }, value: "30%", trend: "down" },
      { label: { en: "Manual Work", de: "Manuelle Arbeit" }, value: "50-70%", trend: "up" },
      { label: { en: "Automation Rate", de: "Automatisierungsrate" }, value: "10-20%", trend: "down" },
      { label: { en: "Onboarding Time", de: "Einarbeitungszeit" }, value: "2-4 weeks", trend: "up" }
    ]
  },
  framework: {
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" },
    subtitle: { en: "How AI-native companies build operations that scale", de: "Wie AI-native Unternehmen Operations bauen, die skalieren" },
    items: [
      {
        id: "process-design",
        icon: "FileText",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "Process Design & Documentation", de: "Process Design & Documentation" },
        subtitle: { en: "Document and standardize all critical processes", de: "Dokumentiere und standardisiere alle kritischen Prozesse" },
        description: { en: "Undocumented processes = chaos at scale. AI-powered documentation auto-generates SOPs from recordings and screen captures.", de: "Undokumentierte Prozesse = Chaos bei Skalierung. AI-gestützte Dokumentation generiert SOPs automatisch aus Aufnahmen und Screen Captures." },
        metrics: [
          { label: { en: "Onboarding Time", de: "Einarbeitungszeit" }, value: "-60-80%" },
          { label: { en: "Process Compliance", de: "Prozess-Compliance" }, value: "+50-100%" }
        ],
        actions: [
          { en: "Process Inventory & Mapping", de: "Prozess-Inventar & Mapping" },
          { en: "Priority Matrix (ROI-based)", de: "Priority Matrix (ROI-basiert)" },
          { en: "SOP Template Library", de: "SOP Template Library" },
          { en: "Process Ownership Assignment", de: "Prozess-Ownership Zuweisung" },
          { en: "AI Documentation Tools (Scribe, Tango)", de: "AI Documentation Tools (Scribe, Tango)" }
        ]
      },
      {
        id: "workflow-automation",
        icon: "Workflow",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Workflow Automation & Optimization", de: "Workflow Automation & Optimization" },
        subtitle: { en: "Automate repetitive tasks and workflows", de: "Automatisiere repetitive Aufgaben und Workflows" },
        description: { en: "Manual work doesn't scale. No-code and low-code tools enable 200+ workflow automations in weeks, not months.", de: "Manuelle Arbeit skaliert nicht. No-Code und Low-Code Tools ermöglichen 200+ Workflow-Automatisierungen in Wochen, nicht Monaten." },
        metrics: [
          { label: { en: "Manual Work", de: "Manuelle Arbeit" }, value: "-50-70%" },
          { label: { en: "Operational Cost", de: "Betriebskosten" }, value: "-40-60%" }
        ],
        actions: [
          { en: "Workflow Mapping & Analysis", de: "Workflow Mapping & Analyse" },
          { en: "Automation Prioritization (ROI)", de: "Automation Priorisierung (ROI)" },
          { en: "Tool Selection (Zapier, Make, n8n)", de: "Tool-Auswahl (Zapier, Make, n8n)" },
          { en: "Automation Build & Testing", de: "Automation Build & Testing" },
          { en: "Continuous Optimization", de: "Kontinuierliche Optimierung" }
        ]
      },
      {
        id: "ai-orchestration",
        icon: "Bot",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "AI Orchestration", de: "AI Orchestration" },
        subtitle: { en: "AI agents that execute workflows autonomously", de: "AI Agents, die Workflows autonom ausführen" },
        description: { en: "Automation = rules-based, AI = intelligent. Deploy AI agents for customer support, data processing, decision-making, and content generation.", de: "Automation = regelbasiert, AI = intelligent. Deploye AI Agents für Customer Support, Datenverarbeitung, Entscheidungsfindung und Content-Generierung." },
        metrics: [
          { label: { en: "Operational Efficiency", de: "Operative Effizienz" }, value: "+200-400%" },
          { label: { en: "Cost per Task", de: "Kosten pro Aufgabe" }, value: "-80-95%" }
        ],
        actions: [
          { en: "AI Use Case Identification", de: "AI Use Case Identifikation" },
          { en: "AI Agent Design & Architecture", de: "AI Agent Design & Architektur" },
          { en: "AI Tool Selection (OpenAI, Anthropic)", de: "AI Tool Auswahl (OpenAI, Anthropic)" },
          { en: "AI Workflow Integration", de: "AI Workflow Integration" },
          { en: "AI Governance (Human-in-the-loop)", de: "AI Governance (Human-in-the-loop)" }
        ]
      },
      {
        id: "operational-analytics",
        icon: "BarChart3",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "Operational Analytics & Dashboards", de: "Operational Analytics & Dashboards" },
        subtitle: { en: "Real-time visibility into operational performance", de: "Echtzeit-Einblick in operative Performance" },
        description: { en: "You can't improve what you don't measure. Build real-time dashboards with process, resource, cost, and quality metrics.", de: "Du kannst nicht verbessern, was du nicht misst. Baue Echtzeit-Dashboards mit Prozess-, Ressourcen-, Kosten- und Qualitätsmetriken." },
        metrics: [
          { label: { en: "Decision Velocity", de: "Entscheidungsgeschwindigkeit" }, value: "+100-200%" },
          { label: { en: "Problem Detection Time", de: "Problem-Erkennungszeit" }, value: "-70-90%" }
        ],
        actions: [
          { en: "Metrics Definition (KPIs, OKRs)", de: "Metriken-Definition (KPIs, OKRs)" },
          { en: "Data Collection & ETL", de: "Datensammlung & ETL" },
          { en: "Dashboard Design & Build", de: "Dashboard Design & Build" },
          { en: "Analytics Stack Selection", de: "Analytics Stack Auswahl" },
          { en: "AI-Powered Analytics & Alerts", de: "AI-Powered Analytics & Alerts" }
        ]
      },
      {
        id: "ai-powered-ops",
        icon: "Sparkles",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered Operations", de: "AI-Powered Operations" },
        subtitle: { en: "AI that continuously optimizes operations", de: "AI, die Operations kontinuierlich optimiert" },
        description: { en: "Static processes = falling behind. Deploy AI for process mining, optimization, forecasting, and continuous improvement.", de: "Statische Prozesse = Rückstand. Deploye AI für Process Mining, Optimierung, Forecasting und kontinuierliche Verbesserung." },
        metrics: [
          { label: { en: "Operational Excellence", de: "Operative Exzellenz" }, value: "+300-500%" },
          { label: { en: "Continuous Improvement", de: "Kontinuierliche Verbesserung" }, value: "+10x" }
        ],
        actions: [
          { en: "AI Process Mining (Celonis, UiPath)", de: "AI Process Mining (Celonis, UiPath)" },
          { en: "AI Resource Optimization", de: "AI Ressourcen-Optimierung" },
          { en: "AI Demand Forecasting", de: "AI Demand Forecasting" },
          { en: "AI Decision Automation", de: "AI Decision Automation" },
          { en: "AI Continuous Improvement", de: "AI Continuous Improvement" }
        ]
      }
    ]
  },
  bestPractices: {
    title: { en: "Best Practices", de: "Best Practices" },
    categories: []
  },
  roadmap: {
    title: { en: "How to Implement (90-Day Roadmap)", de: "Wie implementieren (90-Tage Roadmap)" },
    subtitle: { en: "From chaos to operational excellence in 12 weeks", de: "Von Chaos zu operativer Exzellenz in 12 Wochen" },
    phases: [
      {
        phase: 1,
        title: { en: "Strategy", de: "Strategie" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Map processes, identify automation opportunities, define metrics", de: "Prozesse mappen, Automatisierungsmöglichkeiten identifizieren, Metriken definieren" },
        deliverables: [
          { en: "Process Inventory (all critical processes)", de: "Prozess-Inventar (alle kritischen Prozesse)" },
          { en: "Automation Opportunity Map (ROI-based)", de: "Automation Opportunity Map (ROI-basiert)" },
          { en: "Metrics Definition (KPIs, Dashboard design)", de: "Metriken-Definition (KPIs, Dashboard-Design)" },
          { en: "Operations Strategy Document", de: "Operations-Strategie Dokument" }
        ],
        gradient: "from-violet-500 to-purple-500"
      },
      {
        phase: 2,
        title: { en: "Setup", de: "Setup" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Document processes, build automations, deploy AI, build dashboards", de: "Prozesse dokumentieren, Automationen bauen, AI deployen, Dashboards bauen" },
        deliverables: [
          { en: "20-30 SOPs (critical processes)", de: "20-30 SOPs (kritische Prozesse)" },
          { en: "50+ Workflows Automated", de: "50+ Workflows automatisiert" },
          { en: "3-5 AI Agents Deployed", de: "3-5 AI Agents deployed" },
          { en: "Real-Time Ops Dashboard", de: "Echtzeit Ops Dashboard" }
        ],
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Execution" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { en: "Roll out processes, monitor automation, optimize AI, track metrics", de: "Prozesse ausrollen, Automation monitoren, AI optimieren, Metriken tracken" },
        deliverables: [
          { en: "Process Compliance Tracking Live", de: "Prozess-Compliance Tracking Live" },
          { en: "Automation Performance Dashboard", de: "Automation Performance Dashboard" },
          { en: "AI Quality Control (Human-in-the-loop)", de: "AI Quality Control (Human-in-the-loop)" },
          { en: "Continuous Optimization Playbook", de: "Continuous Optimization Playbook" }
        ],
        gradient: "from-emerald-500 to-green-500"
      }
    ]
  },
  caseStudies: {
    title: { en: "Real-World Results", de: "Echte Ergebnisse" },
    subtitle: { en: "How 3 companies transformed their operations with the 5-component framework", de: "Wie 3 Unternehmen ihre Operations mit dem 5-Komponenten-Framework transformiert haben" },
    cases: [
      {
        company: { en: "Series A SaaS Company", de: "Series A SaaS Unternehmen" },
        problem: { en: "Processes undocumented, manual workflows, scaling chaos", de: "Undokumentierte Prozesse, manuelle Workflows, Skalierungs-Chaos" },
        solution: { en: "Applied all 5 components: 50+ SOPs, 100+ workflows, 5 AI agents, real-time dashboard", de: "Alle 5 Komponenten angewendet: 50+ SOPs, 100+ Workflows, 5 AI Agents, Echtzeit-Dashboard" },
        results: [
          { metric: { en: "Operational Cost", de: "Betriebskosten" }, before: "€240k/year", after: "€96k/year", change: "-60%" },
          { metric: { en: "Manual Work", de: "Manuelle Arbeit" }, before: "500h/month", after: "150h/month", change: "-70%" },
          { metric: { en: "Onboarding Time", de: "Einarbeitungszeit" }, before: "14 days", after: "3 days", change: "-79%" },
          { metric: { en: "Process Compliance", de: "Prozess-Compliance" }, before: "40%", after: "95%", change: "+138%" }
        ],
        timeline: { en: "6 months | Power Up + Boost", de: "6 Monate | Power Up + Boost" }
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS Unternehmen" },
        problem: { en: "No automation, ops team overwhelmed, manual workflows everywhere", de: "Keine Automation, Ops-Team überlastet, überall manuelle Workflows" },
        solution: { en: "Focus on Workflow Automation + AI Orchestration: 200+ workflows, 10 AI agents", de: "Fokus auf Workflow Automation + AI Orchestration: 200+ Workflows, 10 AI Agents" },
        results: [
          { metric: { en: "Workflows Automated", de: "Automatisierte Workflows" }, before: "0", after: "200+", change: "+∞" },
          { metric: { en: "Time Saved", de: "Zeitersparnis" }, before: "0", after: "500h/month", change: "+€50k/month" },
          { metric: { en: "Automation Rate", de: "Automatisierungsrate" }, before: "15%", after: "75%", change: "+400%" },
          { metric: { en: "Ops Efficiency", de: "Ops-Effizienz" }, before: "1x", after: "3x", change: "+200%" }
        ],
        timeline: { en: "12 months | Boost + Accelerate", de: "12 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: { en: "Need to scale ops 5x without 5x team", de: "Müssen Ops 5x skalieren ohne 5x Team" },
        solution: { en: "Full 5-component implementation with 20+ AI agents + AI process mining", de: "Vollständige 5-Komponenten-Implementierung mit 20+ AI Agents + AI Process Mining" },
        results: [
          { metric: { en: "AI Agents Deployed", de: "AI Agents deployed" }, before: "0", after: "20+", change: "+20" },
          { metric: { en: "Cost Saved", de: "Kostenersparnis" }, before: "€0", after: "€2M/year", change: "+€2M" },
          { metric: { en: "Ops Team", de: "Ops Team" }, before: "25", after: "30", change: "+20%" },
          { metric: { en: "Decision Velocity", de: "Entscheidungsgeschwindigkeit" }, before: "5 days", after: "2 hours", change: "+99%" }
        ],
        timeline: { en: "18 months | Accelerate x2", de: "18 Monate | Accelerate x2" }
      }
    ]
  },
  solutionsConnection: {
    title: { en: "Ready to Execute?", de: "Bereit zur Umsetzung?" },
    subtitle: { en: "Choose the right engagement model for your timeline and budget", de: "Wähle das richtige Engagement-Modell für deinen Zeitplan und Budget" },
    items: [
      {
        type: "assessment",
        name: { en: "Operations Assessment", de: "Operations Assessment" },
        duration: { en: "2-3 Days", de: "2-3 Tage" },
        price: { en: "€2.5K-€10K", de: "€2.5K-€10K" },
        outcome: { en: "Full operations maturity report + 90-day roadmap", de: "Vollständiger Operations-Maturity-Report + 90-Tage Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/scaling-readiness-assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Operations Sprint", de: "Operations Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "Operational Cost -40-60%, Manual Work -50-70%", de: "Betriebskosten -40-60%, Manuelle Arbeit -50-70%" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/scaling-velocity",
        icon: "Zap",
        color: "bg-orange-500/10 text-orange-500"
      },
      {
        type: "boost",
        name: { en: "Operations Excellence", de: "Operations Excellence" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Efficiency +200-400%, Cost -60-80%", de: "Effizienz +200-400%, Kosten -60-80%" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/scaling-os",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "AI-Native Operations", de: "AI-Native Operations" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full operations transformation, AI Maturity Level 3, Costs -60%, Efficiency +200%", de: "Vollständige Operations-Transformation, AI Maturity Level 3, Kosten -60%, Effizienz +200%" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/hypergrowth",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ]
  },
  whoThisIsFor: {
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" },
    subtitle: { en: "Ideal for B2B SaaS companies €5M-€100M ARR", de: "Ideal für B2B SaaS Unternehmen €5M-€100M ARR" },
    icp: { en: "Series A-C B2B SaaS companies building scalable operations", de: "Series A-C B2B SaaS Unternehmen, die skalierbare Operations aufbauen" },
    personas: [
      { icon: "User", role: { en: "CEO", de: "CEO" }, pain: { en: "Need scalable operations, not just more ops managers", de: "Brauche skalierbare Operations, nicht nur mehr Ops Manager" }, outcome: { en: "5x scale with 1.2x team growth", de: "5x Skalierung mit 1,2x Team-Wachstum" }, color: "violet" },
      { icon: "Settings", role: { en: "COO", de: "COO" }, pain: { en: "Responsible for operational excellence and efficiency", de: "Verantwortlich für operative Exzellenz und Effizienz" }, outcome: { en: "60% cost reduction, 200% efficiency gain", de: "60% Kostenreduktion, 200% Effizienzsteigerung" }, color: "blue" },
      { icon: "Code", role: { en: "CTO", de: "CTO" }, pain: { en: "Need to automate workflows and deploy AI agents", de: "Muss Workflows automatisieren und AI Agents deployen" }, outcome: { en: "200+ workflows automated, 20+ AI agents", de: "200+ automatisierte Workflows, 20+ AI Agents" }, color: "green" },
      { icon: "Cog", role: { en: "VP Operations", de: "VP Operations" }, pain: { en: "Need to document processes and reduce manual work", de: "Muss Prozesse dokumentieren und manuelle Arbeit reduzieren" }, outcome: { en: "70% manual work reduction, 95% compliance", de: "70% weniger manuelle Arbeit, 95% Compliance" }, color: "amber" }
    ]
  },
  finalCta: {
    headline: { en: "Get Started Today", de: "Starte heute" },
    subline: { en: "Transform your operations with the 5-component framework", de: "Transformiere deine Operations mit dem 5-Komponenten-Framework" },
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-Seiten Playbook mit Templates" },
      { en: "3 real-world case studies", de: "3 echte Fallstudien" },
      { en: "90-day implementation roadmap", de: "90-Tage Implementierungs-Roadmap" }
    ],
    bookingUrl: "https://www.cal.scalingx.io/inflection-call",
    downloadUrl: "/downloads/operations-playbook.pdf"
  }
};
