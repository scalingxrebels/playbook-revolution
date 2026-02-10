import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('board-governance/operational-governance')!;

export const operationalGovernanceData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Operational Governance · Board & Governance", de: "Operational Governance · Board & Governance" },
    title: "Operational Governance Playbook",
    subtitle: { 
      en: "How to build operational governance systems that scale with AI", 
      de: "Wie du Operational Governance Systeme aufbaust, die mit AI skalieren" 
    },
    description: { 
      en: "Traditional operational governance is reactive. Companies discover compliance issues during audits, data quality is 40%, and AI governance is non-existent. The problem? Manual governance doesn't scale and creates massive risk.\n\nAI-native companies use a different playbook. They leverage the 5-component framework to improve data quality by 80%, reduce compliance risk by 70%, and build AI governance from day one. They govern proactively, not reactively.\n\nThis playbook gives you the exact framework used by Series A-C companies to build world-class operational governance systems.", 
      de: "Traditionelle Operational Governance ist reaktiv. Unternehmen entdecken Compliance-Probleme bei Audits, Datenqualität liegt bei 40%, und AI Governance existiert nicht. Das Problem? Manuelle Governance skaliert nicht und erzeugt massives Risiko.\n\nAI-native Unternehmen nutzen ein anderes Playbook. Sie nutzen das 5-Komponenten-Framework, um Datenqualität um 80% zu verbessern, Compliance-Risiko um 70% zu reduzieren und AI Governance von Tag eins aufzubauen.\n\nDieses Playbook gibt dir das exakte Framework, das Series A-C Unternehmen nutzen." 
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://cal.scalingx.io/inflection-call",
    downloadUrl: "#",
    assetId: "playbook-operational-governance",
    gradient: "from-amber-500 to-orange-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "Data quality averages 40%, compliance is reactive (discovered during audits), 80% of companies lack AI governance frameworks, and incident response takes 48 hours instead of 2.", 
        de: "Datenqualität liegt im Schnitt bei 40%, Compliance ist reaktiv (entdeckt bei Audits), 80% der Unternehmen haben keine AI Governance Frameworks, und Incident Response dauert 48 Stunden statt 2." 
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Operational governance protects against risk, enables trust with customers and regulators, and creates the foundation for sustainable AI adoption. Without it, you're one audit away from disaster.", 
        de: "Operational Governance schützt vor Risiken, ermöglicht Vertrauen bei Kunden und Regulatoren, und schafft die Grundlage für nachhaltige AI-Adoption. Ohne sie bist du ein Audit von der Katastrophe entfernt." 
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The 5-component framework: Data Governance & Quality, Legal & Compliance Management, AI Governance & Ethics, Operational Risk Management, and AI-Powered Operational Governance.", 
        de: "Das 5-Komponenten-Framework: Data Governance & Quality, Legal & Compliance Management, AI Governance & Ethics, Operational Risk Management, und AI-Powered Operational Governance." 
      } 
    }
  },
  problem: { 
    title: { en: "Why Traditional Operational Governance is Broken", de: "Warum traditionelle Operational Governance nicht funktioniert" }, 
    subtitle: { en: "The gap between traditional and AI-native companies is massive", de: "Der Unterschied zwischen traditionellen und AI-native Unternehmen ist enorm" }, 
    bullets: [
      { text: { en: "Data Quality: Average data quality is 40% (vs. 95% for AI-native)", de: "Datenqualität: Durchschnittliche Datenqualität liegt bei 40% (vs. 95% bei AI-native)" }, icon: "Database" },
      { text: { en: "Compliance Risk: Reactive compliance — discover issues during audits", de: "Compliance-Risiko: Reaktive Compliance — Probleme werden bei Audits entdeckt" }, icon: "AlertTriangle" },
      { text: { en: "AI Governance: 80% of companies have no AI governance framework", de: "AI Governance: 80% der Unternehmen haben kein AI Governance Framework" }, icon: "Brain" },
      { text: { en: "Operational Risk: 48 hours incident response (vs. 2 hours for AI-native)", de: "Operatives Risiko: 48 Stunden Incident Response (vs. 2 Stunden bei AI-native)" }, icon: "Clock" }
    ], 
    metrics: [
      { label: { en: "Data Quality", de: "Datenqualität" }, value: "40%", trend: "down" },
      { label: { en: "Compliance", de: "Compliance" }, value: "Reactive", trend: "down" },
      { label: { en: "AI Governance", de: "AI Governance" }, value: "20%", trend: "down" },
      { label: { en: "Incident Response", de: "Incident Response" }, value: "48h", trend: "up" }
    ] 
  },
  framework: { 
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" }, 
    subtitle: { en: "How AI-native companies build operational governance systems that scale", de: "Wie AI-native Unternehmen Operational Governance Systeme aufbauen, die skalieren" }, 
    items: [
      {
        id: "data-governance",
        icon: "Database",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        title: { en: "Data Governance & Quality", de: "Data Governance & Quality" },
        subtitle: { en: "Systematic data governance and quality management", de: "Systematische Data Governance und Quality Management" },
        description: { 
          en: "Bad data = bad decisions. Build comprehensive data governance with policies, ownership, stewardship, quality management, data catalog & discovery, access control, and AI-powered automation.", 
          de: "Schlechte Daten = schlechte Entscheidungen. Baue umfassende Data Governance mit Policies, Ownership, Stewardship, Quality Management, Data Catalog & Discovery, Access Control und AI-powered Automation." 
        },
        metrics: [
          { label: { en: "Data Quality", de: "Datenqualität" }, value: "+80%" },
          { label: { en: "Data Access Time", de: "Datenzugriffszeit" }, value: "-90%" }
        ],
        actions: [
          { en: "Data Governance Framework (Policies, Ownership, Stewardship)", de: "Data Governance Framework (Policies, Ownership, Stewardship)" },
          { en: "Data Quality Management (Validation, Cleaning, Monitoring)", de: "Data Quality Management (Validation, Cleaning, Monitoring)" },
          { en: "Data Catalog & Discovery (Cataloging, Metadata, Lineage)", de: "Data Catalog & Discovery (Cataloging, Metadata, Lineage)" },
          { en: "Data Access & Security (Access Control, Encryption, Privacy)", de: "Data Access & Security (Access Control, Encryption, Privacy)" },
          { en: "AI-Powered Data Governance (Auto-Validation, Smart Cataloging)", de: "AI-Powered Data Governance (Auto-Validation, Smart Cataloging)" }
        ]
      },
      {
        id: "legal-compliance",
        icon: "Scale",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Legal & Compliance Management", de: "Legal & Compliance Management" },
        subtitle: { en: "Proactive legal and compliance management", de: "Proaktives Legal und Compliance Management" },
        description: { 
          en: "Reactive compliance = fines and reputation damage. Build proactive compliance with GDPR, SOC 2, ISO 27001, automated audits, contract management, and AI-powered compliance checks.", 
          de: "Reaktive Compliance = Strafen und Reputationsschäden. Baue proaktive Compliance mit GDPR, SOC 2, ISO 27001, automatisierten Audits, Contract Management und AI-powered Compliance Checks." 
        },
        metrics: [
          { label: { en: "Compliance Risk", de: "Compliance-Risiko" }, value: "-70%" },
          { label: { en: "Audit Time", de: "Audit-Zeit" }, value: "-80%" }
        ],
        actions: [
          { en: "Compliance Framework (GDPR, SOC 2, ISO 27001, HIPAA)", de: "Compliance Framework (GDPR, SOC 2, ISO 27001, HIPAA)" },
          { en: "Compliance Automation (Checklists, Automated Audits, Monitoring)", de: "Compliance Automation (Checklists, Automated Audits, Monitoring)" },
          { en: "Contract Management (Repository, Lifecycle, Analytics)", de: "Contract Management (Repository, Lifecycle, Analytics)" },
          { en: "Legal Operations (Workflows, Tech Stack, Analytics)", de: "Legal Operations (Workflows, Tech Stack, Analytics)" },
          { en: "AI-Powered Compliance (Auto-Checks, Predictive Risk, Smart Contracts)", de: "AI-Powered Compliance (Auto-Checks, Predictive Risk, Smart Contracts)" }
        ]
      },
      {
        id: "ai-governance",
        icon: "Brain",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "AI Governance & Ethics", de: "AI Governance & Ethics" },
        subtitle: { en: "Framework for responsible AI development and deployment", de: "Framework für verantwortungsvolle AI-Entwicklung und -Einsatz" },
        description: { 
          en: "Unethical AI = reputation damage and regulatory risk. Build responsible AI with ethics frameworks, bias detection, fairness testing, model governance, and explainability tools.", 
          de: "Unethische AI = Reputationsschäden und regulatorisches Risiko. Baue verantwortungsvolle AI mit Ethics Frameworks, Bias Detection, Fairness Testing, Model Governance und Explainability Tools." 
        },
        metrics: [
          { label: { en: "AI Risk", de: "AI-Risiko" }, value: "-60%" },
          { label: { en: "AI Trust", de: "AI-Vertrauen" }, value: "+100%" }
        ],
        actions: [
          { en: "AI Ethics Framework (Fairness, Accountability, Transparency)", de: "AI Ethics Framework (Fairness, Accountability, Transparency)" },
          { en: "AI Risk Management (Assessment, Bias Detection, Fairness Testing)", de: "AI Risk Management (Assessment, Bias Detection, Fairness Testing)" },
          { en: "AI Model Governance (Registry, Approval, Monitoring)", de: "AI Model Governance (Registry, Approval, Monitoring)" },
          { en: "AI Explainability & Transparency (SHAP, LIME, Audit Trail)", de: "AI Explainability & Transparency (SHAP, LIME, Audit Trail)" },
          { en: "AI-Powered AI Governance (Auto-Bias Detection, Risk Scoring)", de: "AI-Powered AI Governance (Auto-Bias Detection, Risk Scoring)" }
        ]
      },
      {
        id: "operational-risk",
        icon: "ShieldAlert",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "Operational Risk Management", de: "Operational Risk Management" },
        subtitle: { en: "Proactive operational risk identification and mitigation", de: "Proaktive Identifikation und Mitigation operativer Risiken" },
        description: { 
          en: "Reactive risk = incidents and downtime. Build proactive risk management with frameworks, incident management, business continuity, vendor risk, and AI-powered detection.", 
          de: "Reaktives Risiko = Incidents und Ausfallzeiten. Baue proaktives Risk Management mit Frameworks, Incident Management, Business Continuity, Vendor Risk und AI-powered Detection." 
        },
        metrics: [
          { label: { en: "Operational Risk", de: "Operatives Risiko" }, value: "-50%" },
          { label: { en: "Incident Response", de: "Incident Response" }, value: "-80%" }
        ],
        actions: [
          { en: "Risk Framework (Categories, Assessment, Mitigation, Monitoring)", de: "Risk Framework (Kategorien, Assessment, Mitigation, Monitoring)" },
          { en: "Incident Management (Detection, Response, Post-Mortems)", de: "Incident Management (Detection, Response, Post-Mortems)" },
          { en: "Business Continuity (DR, BCP, Crisis Management)", de: "Business Continuity (DR, BCP, Crisis Management)" },
          { en: "Vendor Risk Management (Assessment, Monitoring, Contracts)", de: "Vendor Risk Management (Assessment, Monitoring, Contracts)" },
          { en: "AI-Powered Risk Management (Predictive Detection, Auto-Alerts)", de: "AI-Powered Risk Management (Predictive Detection, Auto-Alerts)" }
        ]
      },
      {
        id: "ai-powered-governance",
        icon: "Sparkles",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered Operational Governance", de: "AI-Powered Operational Governance" },
        subtitle: { en: "AI that continuously optimizes operational governance", de: "AI, die Operational Governance kontinuierlich optimiert" },
        description: { 
          en: "Manual governance = falling behind. Deploy AI to automate data governance, compliance checks, ethics monitoring, and risk management. Achieve 5x scale with 1.25x team.", 
          de: "Manuelle Governance = Rückstand. Setze AI ein für automatisierte Data Governance, Compliance Checks, Ethics Monitoring und Risk Management. Erreiche 5x Skalierung mit 1.25x Team." 
        },
        metrics: [
          { label: { en: "Governance Efficiency", de: "Governance-Effizienz" }, value: "+300%" },
          { label: { en: "Risk Reduction", de: "Risiko-Reduktion" }, value: "-60%" }
        ],
        actions: [
          { en: "AI Data Governance (Auto-Validation, Smart Cataloging, Quality Prediction)", de: "AI Data Governance (Auto-Validation, Smart Cataloging, Quality Prediction)" },
          { en: "AI Compliance (Auto-Checks, Predictive Risk, Smart Audits)", de: "AI Compliance (Auto-Checks, Predictive Risk, Smart Audits)" },
          { en: "AI Ethics Monitoring (Auto-Bias Detection, Fairness Monitoring)", de: "AI Ethics Monitoring (Auto-Bias Detection, Fairness Monitoring)" },
          { en: "AI Risk Management (Predictive Detection, Auto-Alerts, Smart Remediation)", de: "AI Risk Management (Predictive Detection, Auto-Alerts, Smart Remediation)" },
          { en: "AI Governance Intelligence (Effectiveness Scoring, Optimization)", de: "AI Governance Intelligence (Effectiveness Scoring, Optimization)" }
        ]
      }
    ] 
  },
  bestPractices: { 
    title: { en: "Best Practices", de: "Best Practices" }, 
    categories: [
      {
        category: { en: "Data Governance", de: "Data Governance" },
        items: [
          { do: { en: "Implement data quality monitoring from day one", de: "Implementiere Data Quality Monitoring von Tag eins" }, dont: { en: "Wait until data quality becomes a crisis", de: "Warte bis Datenqualität zur Krise wird" } },
          { do: { en: "Assign clear data owners for every dataset", de: "Weise klare Data Owner für jeden Datensatz zu" }, dont: { en: "Leave data ownership undefined", de: "Lass Data Ownership undefiniert" } }
        ]
      },
      {
        category: { en: "Compliance", de: "Compliance" },
        items: [
          { do: { en: "Automate compliance checks and evidence collection", de: "Automatisiere Compliance Checks und Evidence Collection" }, dont: { en: "Rely on manual compliance processes", de: "Verlasse dich auf manuelle Compliance-Prozesse" } },
          { do: { en: "Build compliance into the development process", de: "Baue Compliance in den Entwicklungsprozess ein" }, dont: { en: "Treat compliance as an afterthought", de: "Behandle Compliance als Nachgedanken" } }
        ]
      }
    ] 
  },
  roadmap: { 
    title: { en: "How to Implement (90-Day Roadmap)", de: "Wie du implementierst (90-Tage-Roadmap)" }, 
    subtitle: { en: "A phased approach to operational governance transformation", de: "Ein phasenweiser Ansatz zur Operational Governance Transformation" }, 
    phases: [
      {
        phase: 1,
        title: { en: "Strategy", de: "Strategie" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Assess current state, design frameworks, define roadmap", de: "Aktuellen Zustand bewerten, Frameworks designen, Roadmap definieren" },
        deliverables: [
          { en: "Data Governance Framework (Policies, Ownership, Standards)", de: "Data Governance Framework (Policies, Ownership, Standards)" },
          { en: "Compliance Roadmap (SOC 2, GDPR, ISO 27001 timeline)", de: "Compliance Roadmap (SOC 2, GDPR, ISO 27001 Timeline)" },
          { en: "AI Governance Framework (Ethics, Risk, Model Governance)", de: "AI Governance Framework (Ethics, Risk, Model Governance)" },
          { en: "Operational Risk Framework (Categories, Assessment, Mitigation)", de: "Operational Risk Framework (Kategorien, Assessment, Mitigation)" }
        ],
        gradient: "from-amber-500 to-orange-500"
      },
      {
        phase: 2,
        title: { en: "Setup", de: "Setup" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Build infrastructure, deploy tools, configure systems", de: "Infrastruktur aufbauen, Tools deployen, Systeme konfigurieren" },
        deliverables: [
          { en: "Data Catalog (Discovery, Metadata, Lineage)", de: "Data Catalog (Discovery, Metadata, Lineage)" },
          { en: "Compliance Automation (Checklists, Monitoring, Evidence)", de: "Compliance Automation (Checklists, Monitoring, Evidence)" },
          { en: "AI Governance System (Model Registry, Bias Detection)", de: "AI Governance System (Model Registry, Bias Detection)" },
          { en: "Risk Dashboard (Heatmap, Incident Management, BCP)", de: "Risk Dashboard (Heatmap, Incident Management, BCP)" }
        ],
        gradient: "from-orange-500 to-red-500"
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Execution" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { en: "Roll out, achieve compliance, monitor and optimize", de: "Ausrollen, Compliance erreichen, monitoren und optimieren" },
        deliverables: [
          { en: "Data Governance Tracking (Quality Monitoring, Access Management)", de: "Data Governance Tracking (Quality Monitoring, Access Management)" },
          { en: "Compliance Execution (SOC 2 Audit, GDPR Compliance)", de: "Compliance Execution (SOC 2 Audit, GDPR Compliance)" },
          { en: "AI Governance Monitoring (Model Monitoring, Fairness Testing)", de: "AI Governance Monitoring (Model Monitoring, Fairness Testing)" },
          { en: "Risk Monitoring (Dashboard, Incident Response, Continuous Improvement)", de: "Risk Monitoring (Dashboard, Incident Response, Continuous Improvement)" }
        ],
        gradient: "from-red-500 to-rose-500"
      }
    ] 
  },
  caseStudies: { 
    title: { en: "Real-World Results", de: "Echte Ergebnisse" }, 
    subtitle: { en: "How 3 companies transformed their operational governance with the 5-component framework", de: "Wie 3 Unternehmen ihre Operational Governance mit dem 5-Komponenten-Framework transformiert haben" }, 
    cases: [
      {
        company: { en: "Series A SaaS Company (Fintech)", de: "Series A SaaS Unternehmen (Fintech)" },
        problem: { en: "Data quality 40%, no data governance, high compliance risk, SOC 2 needed urgently", de: "Datenqualität 40%, keine Data Governance, hohes Compliance-Risiko, SOC 2 dringend benötigt" },
        solution: { en: "Implemented all 5 components with focus on Data Governance + Compliance. AI data quality deployed for continuous monitoring.", de: "Alle 5 Komponenten implementiert mit Fokus auf Data Governance + Compliance. AI Data Quality für kontinuierliches Monitoring deployed." },
        results: [
          { metric: { en: "Data Quality", de: "Datenqualität" }, before: "40%", after: "95%", change: "+138%" },
          { metric: { en: "Compliance Risk", de: "Compliance-Risiko" }, before: "High", after: "Low", change: "-70%" },
          { metric: { en: "SOC 2 Timeline", de: "SOC 2 Timeline" }, before: "12 months", after: "3 months", change: "-75%" },
          { metric: { en: "Data Access Time", de: "Datenzugriffszeit" }, before: "3 days", after: "5 min", change: "-99.9%" }
        ],
        timeline: { en: "6 months | Power Up + Boost", de: "6 Monate | Power Up + Boost" }
      },
      {
        company: { en: "Series B SaaS Company (Healthcare Tech)", de: "Series B SaaS Unternehmen (Healthcare Tech)" },
        problem: { en: "No compliance framework, high regulatory risk (HIPAA), no AI governance, audit preparation took 40 hours", de: "Kein Compliance Framework, hohes regulatorisches Risiko (HIPAA), keine AI Governance, Audit-Vorbereitung dauerte 40 Stunden" },
        solution: { en: "Full operational governance transformation. HIPAA + SOC 2 compliance achieved. AI compliance and AI risk detection deployed.", de: "Volle Operational Governance Transformation. HIPAA + SOC 2 Compliance erreicht. AI Compliance und AI Risk Detection deployed." },
        results: [
          { metric: { en: "Compliance Risk", de: "Compliance-Risiko" }, before: "Critical", after: "Minimal", change: "-80%" },
          { metric: { en: "HIPAA + SOC 2", de: "HIPAA + SOC 2" }, before: "None", after: "Certified", change: "Achieved" },
          { metric: { en: "Audit Time", de: "Audit-Zeit" }, before: "40 hours", after: "4 hours", change: "-90%" },
          { metric: { en: "Contract Review", de: "Vertrags-Review" }, before: "3 days", after: "2 hours", change: "-97%" }
        ],
        timeline: { en: "12 months | Boost + Accelerate", de: "12 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series C Company (E-Commerce Tech)", de: "Series C Unternehmen (E-Commerce Tech)" },
        problem: { en: "Need to scale governance 5x without 5x governance team. Data quality at 60%, incident response at 48 hours.", de: "Governance 5x skalieren ohne 5x Governance Team. Datenqualität bei 60%, Incident Response bei 48 Stunden." },
        solution: { en: "Comprehensive AI-powered operational governance. All 5 components with maximum AI integration for efficiency at scale.", de: "Umfassende AI-powered Operational Governance. Alle 5 Komponenten mit maximaler AI-Integration für Effizienz bei Skalierung." },
        results: [
          { metric: { en: "Data Quality", de: "Datenqualität" }, before: "60%", after: "98%", change: "+63%" },
          { metric: { en: "Governance Team", de: "Governance Team" }, before: "8 people", after: "10 people", change: "+25%" },
          { metric: { en: "Incident Response", de: "Incident Response" }, before: "48 hours", after: "2 hours", change: "-96%" },
          { metric: { en: "Governance Efficiency", de: "Governance-Effizienz" }, before: "1x", after: "5x", change: "+400%" }
        ],
        timeline: { en: "18 months | Accelerate × 2", de: "18 Monate | Accelerate × 2" }
      }
    ] 
  },
  solutionsConnection: { 
    title: { en: "Ready to Execute? Here's How We Can Help", de: "Bereit zur Umsetzung? So können wir helfen" }, 
    subtitle: { en: "Choose the right engagement model for your timeline and budget", de: "Wähle das richtige Engagement-Modell für deine Timeline und dein Budget" }, 
    items: [
      {
        type: "assessment",
        name: { en: "Governance Assessment", de: "Governance Assessment" },
        duration: { en: "2-3 Days", de: "2-3 Tage" },
        price: { en: "€2.5K-€10K", de: "€2.5K-€10K" },
        outcome: { en: "Full governance maturity report + 90-day roadmap", de: "Vollständiger Governance-Reifegrad-Report + 90-Tage-Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/scaling-readiness-assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Power Up: Governance Sprint", de: "Power Up: Governance Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "Fix one governance component, Data Quality +60-80%", de: "Eine Governance-Komponente fixen, Datenqualität +60-80%" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/board-readiness",
        icon: "Zap",
        color: "bg-amber-500/10 text-amber-500"
      },
      {
        type: "boost",
        name: { en: "Boost: Governance Excellence", de: "Boost: Governance Excellence" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Transform 2-3 components, Compliance Costs -40-60%", de: "2-3 Komponenten transformieren, Compliance-Kosten -40-60%" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/board-excellence",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "Accelerate: AI-Native Governance", de: "Accelerate: AI-Native Governance" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full governance transformation, AI Maturity Level 3, Compliance Costs -60%", de: "Vollständige Governance-Transformation, AI Maturity Level 3, Compliance-Kosten -60%" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/hypergrowth",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ]
  },
  whoThisIsFor: { 
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" }, 
    subtitle: { en: "This playbook is designed for scaling companies ready to professionalize operational governance", de: "Dieses Playbook ist für skalierende Unternehmen, die bereit sind, Operational Governance zu professionalisieren" }, 
    icp: { en: "Series A-C SaaS companies with €5M-€100M ARR looking to reduce risk and improve data quality", de: "Series A-C SaaS Unternehmen mit €5M-€100M ARR, die Risiken reduzieren und Datenqualität verbessern wollen" }, 
    personas: [
      {
        icon: "User",
        role: { en: "CEO", de: "CEO" },
        pain: { en: "You need to reduce governance risk and improve data quality to scale confidently", de: "Du musst Governance-Risiken reduzieren und Datenqualität verbessern, um selbstbewusst zu skalieren" },
        outcome: { en: "Sleep well knowing your governance is bulletproof and AI-ready", de: "Schlaf gut mit dem Wissen, dass deine Governance kugelsicher und AI-ready ist" },
        color: "amber"
      },
      {
        icon: "Code",
        role: { en: "CTO", de: "CTO" },
        pain: { en: "You're responsible for data governance and AI governance but lack frameworks", de: "Du bist verantwortlich für Data Governance und AI Governance, aber dir fehlen Frameworks" },
        outcome: { en: "Implement world-class data and AI governance with proven frameworks", de: "Implementiere erstklassige Data und AI Governance mit bewährten Frameworks" },
        color: "cyan"
      },
      {
        icon: "Settings",
        role: { en: "COO", de: "COO" },
        pain: { en: "You need operational risk management and business continuity that scales", de: "Du brauchst Operational Risk Management und Business Continuity, die skaliert" },
        outcome: { en: "Build resilient operations with 2-hour incident response", de: "Baue resiliente Operations mit 2-Stunden Incident Response" },
        color: "blue"
      },
      {
        icon: "Scale",
        role: { en: "Legal/Compliance", de: "Legal/Compliance" },
        pain: { en: "You need to achieve compliance faster and reduce audit burden", de: "Du musst schneller Compliance erreichen und den Audit-Aufwand reduzieren" },
        outcome: { en: "Achieve SOC 2 in 3 months instead of 12 with automated compliance", de: "Erreiche SOC 2 in 3 Monaten statt 12 mit automatisierter Compliance" },
        color: "violet"
      }
    ] 
  },
  finalCta: { 
    headline: { en: "Get Started Today", de: "Starte heute" }, 
    subline: { en: "Transform your operational governance from reactive to proactive", de: "Transformiere deine Operational Governance von reaktiv zu proaktiv" }, 
    trustSignals: [
      { en: "50-page playbook with templates and checklists", de: "50-seitiges Playbook mit Templates und Checklisten" },
      { en: "3 real-world case studies with metrics", de: "3 echte Case Studies mit Metriken" },
      { en: "90-day implementation roadmap", de: "90-Tage-Implementierungs-Roadmap" }
    ], 
    bookingUrl: "https://cal.scalingx.io/inflection-call", 
    downloadUrl: "#" 
  }
};
