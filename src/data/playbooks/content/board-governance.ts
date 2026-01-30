import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('board-governance')!;

export const boardGovernanceData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Board & Governance · Domain Playbook", de: "Board & Governance · Domain Playbook" },
    title: "AI-Native Board & Governance Playbook",
    subtitle: {
      en: "How to transform board and governance systems with AI-native frameworks",
      de: "Wie du Board- und Governance-Systeme mit AI-native Frameworks transformierst"
    },
    description: {
      en: "Traditional board and governance systems are broken. Companies rely on manual board prep (5-7 days), reactive risk management, and fragmented governance frameworks. The result? Low board confidence (40-60%), slow decision velocity (2-4 weeks), and missed exit opportunities. They can't scale governance without proportional overhead.\n\nAI-native companies use a different playbook. They leverage the Board & Governance Framework (Strategic Governance × Operational Governance × Exit/M&A × AI) to reduce board prep time by 80%, increase board confidence by 100%, and achieve 2-5x valuation premiums. They scale governance superlinearly: Board Effectiveness >>> Overhead.\n\nThis playbook gives you the complete framework used by AI-native companies to build world-class board and governance systems. Learn from 3 detailed sub-playbooks, implementation guides, and real-world case studies.",
      de: "Traditionelle Board- und Governance-Systeme sind kaputt. Unternehmen verlassen sich auf manuelle Board-Vorbereitung (5-7 Tage), reaktives Risikomanagement und fragmentierte Governance-Frameworks. Das Ergebnis? Niedrige Board-Confidence (40-60%), langsame Entscheidungsgeschwindigkeit (2-4 Wochen) und verpasste Exit-Chancen. Sie können Governance nicht ohne proportionalen Overhead skalieren.\n\nAI-native Unternehmen nutzen ein anderes Playbook. Sie nutzen das Board & Governance Framework (Strategic Governance × Operational Governance × Exit/M&A × AI), um Board Prep Time um 80% zu reduzieren, Board Confidence um 100% zu steigern und 2-5x Bewertungsprämien zu erzielen. Sie skalieren Governance superlinear: Board Effectiveness >>> Overhead.\n\nDieses Playbook gibt dir das komplette Framework, das AI-native Unternehmen nutzen, um erstklassige Board- und Governance-Systeme aufzubauen. Lerne von 3 detaillierten Sub-Playbooks, Implementierungsguides und echten Case Studies."
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Sub-Playbooks", de: "3 Sub-Playbooks" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    gradient: "from-orange-500 to-amber-500"
  },
  summary: {
    problem: {
      title: { en: "The Problem", de: "Das Problem" },
      text: {
        en: "Manual board prep (5-7 days), low board confidence (40-60%), slow decision velocity (2-4 weeks), and reactive risk management (70-90% reactive). Companies can't scale governance without proportional overhead.",
        de: "Manuelle Board-Vorbereitung (5-7 Tage), niedrige Board-Confidence (40-60%), langsame Entscheidungsgeschwindigkeit (2-4 Wochen) und reaktives Risikomanagement (70-90% reaktiv). Unternehmen können Governance nicht ohne proportionalen Overhead skalieren."
      }
    },
    whyItMatters: {
      title: { en: "Why It Matters", de: "Warum es wichtig ist" },
      text: {
        en: "Board & Governance is MULTIPLICATIVE (not additive). Weak strategic governance × strong operational = bottleneck. Strong strategic × weak operational = bottleneck. Only when all 3 systems fire together do you achieve Board Excellence.",
        de: "Board & Governance ist MULTIPLIKATIV (nicht additiv). Schwache strategische Governance × starke operative = Engpass. Starke strategische × schwache operative = Engpass. Nur wenn alle 3 Systeme zusammen feuern, erreichst du Board Excellence."
      }
    },
    solution: {
      title: { en: "The Solution", de: "Die Lösung" },
      text: {
        en: "The Board & Governance Framework: Board Effectiveness = Strategic Governance × Operational Governance × Exit/M&A × AI. AI-native companies achieve 80% faster board prep, 100% higher board confidence, and 2-5x valuation premiums.",
        de: "Das Board & Governance Framework: Board Effectiveness = Strategic Governance × Operational Governance × Exit/M&A × AI. AI-native Unternehmen erreichen 80% schnellere Board-Vorbereitung, 100% höhere Board-Confidence und 2-5x Bewertungsprämien."
      }
    }
  },
  problem: {
    title: { en: "Why Traditional Board & Governance is Broken", de: "Warum traditionelle Board & Governance kaputt ist" },
    subtitle: {
      en: "The 4 critical failures that prevent governance from scaling",
      de: "Die 4 kritischen Fehler, die Governance am Skalieren hindern"
    },
    bullets: [
      {
        text: {
          en: "Manual Board Prep: 5-7 days per board meeting (vs. 1-2 days for AI-native)",
          de: "Manuelle Board-Vorbereitung: 5-7 Tage pro Board-Meeting (vs. 1-2 Tage für AI-native)"
        },
        icon: "Clock"
      },
      {
        text: {
          en: "Low Board Confidence: 40-60% (vs. 80-100% for AI-native)",
          de: "Niedrige Board-Confidence: 40-60% (vs. 80-100% für AI-native)"
        },
        icon: "AlertTriangle"
      },
      {
        text: {
          en: "Slow Decision Velocity: 2-4 weeks (vs. 2-7 days for AI-native)",
          de: "Langsame Entscheidungsgeschwindigkeit: 2-4 Wochen (vs. 2-7 Tage für AI-native)"
        },
        icon: "Hourglass"
      },
      {
        text: {
          en: "Reactive Risk Management: 70-90% reactive (vs. 10-30% for AI-native)",
          de: "Reaktives Risikomanagement: 70-90% reaktiv (vs. 10-30% für AI-native)"
        },
        icon: "ShieldOff"
      }
    ],
    metrics: [
      { label: { en: "Board Prep Time", de: "Board Prep Zeit" }, value: "5-7 days", trend: "down" },
      { label: { en: "Board Confidence", de: "Board Confidence" }, value: "40-60%", trend: "down" },
      { label: { en: "Decision Velocity", de: "Entscheidungsgeschwindigkeit" }, value: "2-4 weeks", trend: "down" },
      { label: { en: "Proactive Risk", de: "Proaktives Risiko" }, value: "10-30%", trend: "down" }
    ]
  },
  framework: {
    title: { en: "The Board & Governance Framework", de: "Das Board & Governance Framework" },
    subtitle: {
      en: "Board Effectiveness = Strategic Governance × Operational Governance × Exit/M&A × AI",
      de: "Board Effectiveness = Strategic Governance × Operational Governance × Exit/M&A × AI"
    },
    items: [
      {
        id: "strategic-governance",
        icon: "Target",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        title: { en: "Strategic Governance", de: "Strategic Governance" },
        subtitle: { en: "Dimension 8 – Board Intelligence & Direction", de: "Dimension 8 – Board Intelligence & Direction" },
        description: {
          en: "How you govern strategy and direction. Board Intelligence & Reporting, Strategic Planning & OKRs, Risk Management & Compliance, Investor Relations & Communication, AI-Powered Governance.",
          de: "Wie du Strategie und Richtung steuerst. Board Intelligence & Reporting, Strategic Planning & OKRs, Risk Management & Compliance, Investor Relations & Communication, AI-Powered Governance."
        },
        metrics: [
          { label: { en: "Board Prep Time", de: "Board Prep Zeit" }, value: "-80%" },
          { label: { en: "Board Confidence", de: "Board Confidence" }, value: "+100%" },
          { label: { en: "Decision Velocity", de: "Entscheidungsgeschwindigkeit" }, value: "+3-5x" }
        ],
        actions: [
          { en: "Implement AI Board Dashboards", de: "AI Board Dashboards implementieren" },
          { en: "Deploy Strategic Planning automation", de: "Strategic Planning Automation deployen" },
          { en: "Build proactive risk detection", de: "Proaktive Risikoerkennung aufbauen" }
        ]
      },
      {
        id: "operational-governance",
        icon: "ShieldCheck",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "Operational Governance", de: "Operational Governance" },
        subtitle: { en: "Dimension 8 – Risk & Compliance", de: "Dimension 8 – Risiko & Compliance" },
        description: {
          en: "How you manage risk and compliance. Data Governance & Privacy, Legal & Compliance, AI Governance & Ethics, Operational Risk Management, AI-Powered Operational Governance.",
          de: "Wie du Risiko und Compliance managst. Data Governance & Privacy, Legal & Compliance, AI Governance & Ethics, Operational Risk Management, AI-Powered Operational Governance."
        },
        metrics: [
          { label: { en: "Compliance Cost", de: "Compliance-Kosten" }, value: "-50-70%" },
          { label: { en: "Risk Detection", de: "Risikoerkennung" }, value: "+70-90%" },
          { label: { en: "Audit Time", de: "Audit-Zeit" }, value: "-60-80%" }
        ],
        actions: [
          { en: "Deploy AI Compliance automation", de: "AI Compliance Automation deployen" },
          { en: "Implement real-time risk monitoring", de: "Echtzeit-Risikoüberwachung implementieren" },
          { en: "Build AI Governance dashboards", de: "AI Governance Dashboards aufbauen" }
        ]
      },
      {
        id: "exit-ma",
        icon: "Briefcase",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        title: { en: "Exit & M&A", de: "Exit & M&A" },
        subtitle: { en: "Dimension 8 – Valuation & Exit Readiness", de: "Dimension 8 – Bewertung & Exit-Bereitschaft" },
        description: {
          en: "How you prepare for exits and maximize valuation. Valuation Optimization, Due Diligence Preparation, Exit Strategy & Timing, M&A Integration, AI-Powered Exit Intelligence.",
          de: "Wie du dich auf Exits vorbereitest und Bewertung maximierst. Valuation Optimization, Due Diligence Preparation, Exit Strategy & Timing, M&A Integration, AI-Powered Exit Intelligence."
        },
        metrics: [
          { label: { en: "Valuation Premium", de: "Bewertungsprämie" }, value: "+2-5x" },
          { label: { en: "Exit Readiness", de: "Exit-Bereitschaft" }, value: "+100-300%" },
          { label: { en: "Time to Exit", de: "Zeit bis Exit" }, value: "-50-70%" }
        ],
        actions: [
          { en: "Deploy AI Valuation models", de: "AI Bewertungsmodelle deployen" },
          { en: "Automate Due Diligence prep", de: "Due Diligence Vorbereitung automatisieren" },
          { en: "Build Exit timing intelligence", de: "Exit-Timing Intelligence aufbauen" }
        ]
      }
    ]
  },
  bestPractices: {
    title: { en: "Best Practices", de: "Best Practices" },
    categories: [
      {
        category: { en: "Board Prep", de: "Board-Vorbereitung" },
        items: [
          {
            do: { en: "AI-generated board decks in 1-2 days", de: "AI-generierte Board Decks in 1-2 Tagen" },
            dont: { en: "Manual prep taking 5-7 days per meeting", de: "Manuelle Vorbereitung die 5-7 Tage pro Meeting dauert" }
          },
          {
            do: { en: "Real-time dashboards with live KPIs", de: "Echtzeit-Dashboards mit Live-KPIs" },
            dont: { en: "Static reports that are outdated by meeting time", de: "Statische Reports die zum Meeting-Zeitpunkt veraltet sind" }
          }
        ]
      },
      {
        category: { en: "Risk Management", de: "Risikomanagement" },
        items: [
          {
            do: { en: "Proactive AI-powered risk detection (70-90%)", de: "Proaktive AI-gestützte Risikoerkennung (70-90%)" },
            dont: { en: "Reactive risk management (70-90% reactive)", de: "Reaktives Risikomanagement (70-90% reaktiv)" }
          },
          {
            do: { en: "Continuous compliance monitoring", de: "Kontinuierliche Compliance-Überwachung" },
            dont: { en: "Annual compliance audits only", de: "Nur jährliche Compliance-Audits" }
          }
        ]
      }
    ]
  },
  roadmap: {
    title: { en: "90-Day Implementation Roadmap", de: "90-Tage Implementierungs-Roadmap" },
    subtitle: {
      en: "From assessment to board excellence in 3 phases",
      de: "Von der Bewertung zur Board Excellence in 3 Phasen"
    },
    phases: [
      {
        phase: 1,
        title: { en: "Assessment", de: "Assessment" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: {
          en: "Assess all 3 governance systems, identify bottleneck, create roadmap",
          de: "Alle 3 Governance-Systeme bewerten, Engpass identifizieren, Roadmap erstellen"
        },
        deliverables: [
          { en: "Board & Governance Assessment (Strategic, Operational, Exit scores)", de: "Board & Governance Assessment (Strategic, Operational, Exit Scores)" },
          { en: "Bottleneck Analysis (Which system is weakest?)", de: "Engpass-Analyse (Welches System ist am schwächsten?)" },
          { en: "Board & Governance Roadmap (12-24 month roadmap)", de: "Board & Governance Roadmap (12-24 Monate Roadmap)" },
          { en: "Quick Wins (3-5 per system)", de: "Quick Wins (3-5 pro System)" }
        ],
        gradient: "from-orange-500 to-amber-500"
      },
      {
        phase: 2,
        title: { en: "Build", de: "Aufbau" },
        timeline: { en: "Week 3-8", de: "Woche 3-8" },
        focus: {
          en: "Fix bottleneck system, improve all 3 systems, integrate AI",
          de: "Engpass-System beheben, alle 3 Systeme verbessern, AI integrieren"
        },
        deliverables: [
          { en: "Strategic Governance: Board Intelligence, Planning, OKRs", de: "Strategic Governance: Board Intelligence, Planung, OKRs" },
          { en: "Operational Governance: Data Governance, Compliance, Risk", de: "Operational Governance: Data Governance, Compliance, Risiko" },
          { en: "Exit/M&A: Valuation Optimization, Due Diligence Prep", de: "Exit/M&A: Valuation Optimization, Due Diligence Vorbereitung" },
          { en: "AI Integration across all 3 systems", de: "AI-Integration über alle 3 Systeme" }
        ],
        gradient: "from-amber-500 to-yellow-500"
      },
      {
        phase: 3,
        title: { en: "Scale", de: "Skalierung" },
        timeline: { en: "Week 9-12", de: "Woche 9-12" },
        focus: {
          en: "Scale all systems, optimize, continuous improvement",
          de: "Alle Systeme skalieren, optimieren, kontinuierliche Verbesserung"
        },
        deliverables: [
          { en: "Board & Governance scaling (all 3 systems)", de: "Board & Governance Skalierung (alle 3 Systeme)" },
          { en: "Continuous optimization and improvement", de: "Kontinuierliche Optimierung und Verbesserung" },
          { en: "Monthly/quarterly governance reviews", de: "Monatliche/quartalsweise Governance Reviews" },
          { en: "Board Excellence maintenance", de: "Board Excellence Wartung" }
        ],
        gradient: "from-yellow-500 to-orange-500"
      }
    ]
  },
  caseStudies: {
    title: { en: "Real-World Results", de: "Echte Ergebnisse" },
    subtitle: {
      en: "How 3 companies transformed their board and governance systems",
      de: "Wie 3 Unternehmen ihre Board- und Governance-Systeme transformiert haben"
    },
    cases: [
      {
        company: { en: "Series A SaaS Company", de: "Series A SaaS Unternehmen" },
        problem: {
          en: "Manual board prep (7 days), low board confidence (45%), need to scale governance for Series B",
          de: "Manuelle Board-Vorbereitung (7 Tage), niedrige Board-Confidence (45%), muss Governance für Series B skalieren"
        },
        solution: {
          en: "Implemented Strategic Governance (Board Intelligence, OKRs), Operational Governance (Data Governance, Compliance), Exit/M&A prep. AI integration across all systems (θ_index 0.32 → 0.75).",
          de: "Strategic Governance implementiert (Board Intelligence, OKRs), Operational Governance (Data Governance, Compliance), Exit/M&A Vorbereitung. AI-Integration über alle Systeme (θ_index 0.32 → 0.75)."
        },
        results: [
          {
            metric: { en: "Board Prep Time", de: "Board Prep Zeit" },
            before: "7 days",
            after: "1.5 days",
            change: "-79%"
          },
          {
            metric: { en: "Board Confidence", de: "Board Confidence" },
            before: "45%",
            after: "95%",
            change: "+111%"
          },
          {
            metric: { en: "Valuation", de: "Bewertung" },
            before: "€40M",
            after: "€120M",
            change: "+200%"
          }
        ],
        timeline: { en: "12 months | Boost + Accelerate", de: "12 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS Unternehmen" },
        problem: {
          en: "Need to prepare for Series C or exit, board wants exit readiness within 18 months",
          de: "Muss sich auf Series C oder Exit vorbereiten, Board will Exit-Bereitschaft innerhalb von 18 Monaten"
        },
        solution: {
          en: "Full governance transformation: Strategic (Board Intelligence, Investor Relations), Operational (GDPR, SOC 2, ISO 27001), Exit/M&A (Valuation, Due Diligence, Exit Strategy). Full AI-native transformation (θ_index 0.45 → 0.88).",
          de: "Vollständige Governance-Transformation: Strategic (Board Intelligence, Investor Relations), Operational (GDPR, SOC 2, ISO 27001), Exit/M&A (Valuation, Due Diligence, Exit Strategy). Vollständige AI-native Transformation (θ_index 0.45 → 0.88)."
        },
        results: [
          {
            metric: { en: "Compliance Cost", de: "Compliance-Kosten" },
            before: "€500k/year",
            after: "€150k/year",
            change: "-70%"
          },
          {
            metric: { en: "Valuation", de: "Bewertung" },
            before: "€100M",
            after: "€400M",
            change: "+300%"
          },
          {
            metric: { en: "Exit Readiness", de: "Exit-Bereitschaft" },
            before: "30%",
            after: "100%",
            change: "+233%"
          }
        ],
        timeline: { en: "18 months | Accelerate + Extension", de: "18 Monate | Accelerate + Extension" }
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: {
          en: "Need to reach IPO-readiness, board wants €1B valuation within 24 months",
          de: "Muss IPO-Bereitschaft erreichen, Board will €1B Bewertung innerhalb von 24 Monaten"
        },
        solution: {
          en: "Comprehensive all-3-systems transformation: AI-native Strategic + Operational + Exit governance. Full AI integration across all dimensions (θ_index 0.58 → 0.95).",
          de: "Umfassende Transformation aller 3 Systeme: AI-native Strategic + Operational + Exit Governance. Vollständige AI-Integration über alle Dimensionen (θ_index 0.58 → 0.95)."
        },
        results: [
          {
            metric: { en: "ARR", de: "ARR" },
            before: "€50M",
            after: "€150M",
            change: "+200%"
          },
          {
            metric: { en: "Valuation", de: "Bewertung" },
            before: "€200M",
            after: "€1B",
            change: "+400%"
          },
          {
            metric: { en: "IPO Readiness", de: "IPO-Bereitschaft" },
            before: "40%",
            after: "100%",
            change: "+150%"
          }
        ],
        timeline: { en: "24 months | Accelerate × 2 phases", de: "24 Monate | Accelerate × 2 Phasen" }
      }
    ]
  },
  solutionsConnection: {
    title: { en: "Ready to Execute?", de: "Bereit zur Umsetzung?" },
    subtitle: {
      en: "Choose the right engagement model for your timeline and budget",
      de: "Wähle das richtige Engagement-Modell für deinen Zeitplan und dein Budget"
    },
    items: [
      {
        type: "power-up",
        name: { en: "Board Readiness", de: "Board Readiness" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "From €23.6K", de: "Ab €23.6K" },
        outcome: {
          en: "Governance Visibility +100%, Assessment Time -90%",
          de: "Governance-Sichtbarkeit +100%, Assessment-Zeit -90%"
        },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/board-readiness",
        icon: "Zap",
        color: "orange"
      },
      {
        type: "boost",
        name: { en: "Board Excellence", de: "Board Excellence" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: {
          en: "Board Prep -80%, Board Confidence +100%, Valuation +2-5x",
          de: "Board Prep -80%, Board Confidence +100%, Bewertung +2-5x"
        },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/board-excellence",
        icon: "Rocket",
        color: "purple"
      }
    ]
  },
  whoThisIsFor: {
    title: { en: "Who Should Use This Playbook?", de: "Wer sollte dieses Playbook nutzen?" },
    subtitle: {
      en: "The ideal reader profiles for maximum impact",
      de: "Die idealen Leserprofile für maximale Wirkung"
    },
    icp: {
      en: "Series A-C SaaS companies (€5M-€100M ARR) needing to scale governance without proportional overhead",
      de: "Series A-C SaaS Unternehmen (€5M-€100M ARR), die Governance ohne proportionalen Overhead skalieren müssen"
    },
    personas: [
      {
        icon: "User",
        role: { en: "CEOs", de: "CEOs" },
        pain: { en: "Need to scale governance without proportional overhead", de: "Muss Governance ohne proportionalen Overhead skalieren" },
        outcome: { en: "Board prep in hours, not days; 2-5x valuation premium", de: "Board-Vorbereitung in Stunden, nicht Tagen; 2-5x Bewertungsprämie" },
        color: "orange"
      },
      {
        icon: "Users",
        role: { en: "Board Members", de: "Board-Mitglieder" },
        pain: { en: "Responsible for strategic oversight and risk management", de: "Verantwortlich für strategische Aufsicht und Risikomanagement" },
        outcome: { en: "100% board confidence, proactive risk detection", de: "100% Board-Confidence, proaktive Risikoerkennung" },
        color: "amber"
      },
      {
        icon: "Briefcase",
        role: { en: "VCs/PE Partners", de: "VCs/PE Partner" },
        pain: { en: "Responsible for portfolio governance and value creation", de: "Verantwortlich für Portfolio-Governance und Wertschöpfung" },
        outcome: { en: "Systematic governance excellence, 2-5x valuation gains", de: "Systematische Governance-Exzellenz, 2-5x Bewertungsgewinne" },
        color: "purple"
      },
      {
        icon: "Shield",
        role: { en: "CFOs/General Counsel", de: "CFOs/General Counsel" },
        pain: { en: "Responsible for compliance and risk management", de: "Verantwortlich für Compliance und Risikomanagement" },
        outcome: { en: "70% compliance cost reduction, 90% risk detection", de: "70% Compliance-Kosten-Reduktion, 90% Risikoerkennung" },
        color: "cyan"
      }
    ]
  },
  subPlaybooks: {
    title: { en: "The 3 Sub-Playbooks", de: "Die 3 Sub-Playbooks" },
    subtitle: {
      en: "Deep-dive into each governance system with detailed playbooks",
      de: "Tauche tief in jedes Governance-System mit detaillierten Playbooks ein"
    },
    items: [
      {
        id: 14,
        slug: "board-governance/strategic",
        title: { en: "Strategic Governance Playbook", de: "Strategic Governance Playbook" },
        teaser: {
          en: "How to build board and governance systems that scale with AI. Learn the 5 components (Board Intelligence, Strategic Planning, Risk Management, Investor Relations, AI-Powered Governance) to reduce board prep time by 80% and increase board confidence by 100%.",
          de: "Wie du Board- und Governance-Systeme aufbaust, die mit AI skalieren. Lerne die 5 Komponenten (Board Intelligence, Strategic Planning, Risk Management, Investor Relations, AI-Powered Governance), um Board Prep Time um 80% zu reduzieren und Board Confidence um 100% zu steigern."
        },
        icon: "Target",
        color: "orange"
      },
      {
        id: 15,
        slug: "board-governance/operational",
        title: { en: "Operational Governance Playbook", de: "Operational Governance Playbook" },
        teaser: {
          en: "How to build operational governance that scales without chaos. Learn the 5 components (Data Governance, Legal & Compliance, AI Governance, Operational Risk, AI-Powered Operational Governance) to reduce compliance cost by 50-70% and improve risk detection by 70-90%.",
          de: "Wie du Operational Governance aufbaust, die ohne Chaos skaliert. Lerne die 5 Komponenten (Data Governance, Legal & Compliance, AI Governance, Operational Risk, AI-Powered Operational Governance), um Compliance-Kosten um 50-70% zu senken und Risikoerkennung um 70-90% zu verbessern."
        },
        icon: "ShieldCheck",
        color: "amber"
      },
      {
        id: 16,
        slug: "board-governance/exit-ma",
        title: { en: "Exit & M&A Playbook", de: "Exit & M&A Playbook" },
        teaser: {
          en: "How to prepare for exits and maximize valuation with AI. Learn the 5 components (Valuation Optimization, Due Diligence Prep, Exit Strategy, M&A Integration, AI-Powered Exit Intelligence) to achieve 2-5x valuation premiums and reduce time to exit by 50-70%.",
          de: "Wie du dich mit AI auf Exits vorbereitest und Bewertung maximierst. Lerne die 5 Komponenten (Valuation Optimization, Due Diligence Prep, Exit Strategy, M&A Integration, AI-Powered Exit Intelligence), um 2-5x Bewertungsprämien zu erzielen und Zeit bis Exit um 50-70% zu reduzieren."
        },
        icon: "Briefcase",
        color: "purple"
      }
    ]
  },
  finalCta: {
    headline: { en: "Get Started Today", de: "Starte noch heute" },
    subline: {
      en: "Transform your board and governance systems with AI-native frameworks",
      de: "Transformiere deine Board- und Governance-Systeme mit AI-native Frameworks"
    },
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-seitiges Playbook mit Templates" },
      { en: "3 detailed sub-playbooks", de: "3 detaillierte Sub-Playbooks" },
      { en: "3 anonymized case studies", de: "3 anonymisierte Case Studies" },
      { en: "90-day implementation roadmap", de: "90-Tage Implementierungs-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#"
  }
};
