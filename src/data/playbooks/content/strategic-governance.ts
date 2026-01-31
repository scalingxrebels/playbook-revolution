import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('board-governance/strategic-governance')!;

export const strategicGovernanceData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Strategic Governance · Board & Governance", de: "Strategic Governance · Board & Governance" },
    title: "Strategic Governance Playbook",
    subtitle: { 
      en: "How to build board and governance systems that scale with AI", 
      de: "Wie du Board- und Governance-Systeme aufbaust, die mit AI skalieren" 
    },
    description: { 
      en: "Traditional board governance is broken. CEOs spend 20-40 hours preparing for board meetings, board confidence is low (40-60%), and strategic decisions take weeks. The problem? Manual governance doesn't scale. AI-native companies use a different playbook. They leverage the 5-component framework to reduce board prep time by 80%, increase board confidence by 100%, and accelerate strategic decisions by 200%. They govern better, faster, and smarter. This playbook gives you the exact framework used by Series A-C companies to build world-class board and governance systems.", 
      de: "Traditionelle Board Governance ist kaputt. CEOs verbringen 20-40 Stunden mit Board-Vorbereitung, Board Confidence ist niedrig (40-60%), und strategische Entscheidungen dauern Wochen. Das Problem? Manuelle Governance skaliert nicht. AI-native Unternehmen nutzen ein anderes Playbook. Sie nutzen das 5-Komponenten-Framework, um Board Prep Time um 80% zu reduzieren, Board Confidence um 100% zu steigern und strategische Entscheidungen um 200% zu beschleunigen. Dieses Playbook gibt dir das exakte Framework, das Series A-C Unternehmen nutzen." 
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    gradient: "from-orange-500 to-amber-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "20-40 hours board prep, 40-60% board confidence, 2-4 weeks for strategic decisions. Manual governance doesn't scale.", 
        de: "20-40 Stunden Board Prep, 40-60% Board Confidence, 2-4 Wochen für strategische Entscheidungen. Manuelle Governance skaliert nicht." 
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Board governance is the foundation for strategic clarity and investor confidence. Poor governance = slow decisions, lost trust, missed opportunities.", 
        de: "Board Governance ist das Fundament für strategische Klarheit und Investorenvertrauen. Schlechte Governance = langsame Entscheidungen, verlorenes Vertrauen, verpasste Chancen." 
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The 5-component framework: Board Intelligence & Reporting, Strategic Planning & OKRs, Risk Management & Compliance, Investor Relations & Communication, AI-Powered Governance.", 
        de: "Das 5-Komponenten-Framework: Board Intelligence & Reporting, Strategic Planning & OKRs, Risk Management & Compliance, Investor Relations & Communication, AI-Powered Governance." 
      } 
    }
  },
  problem: { 
    title: { en: "Why Traditional Board Governance is Broken", de: "Warum traditionelle Board Governance nicht funktioniert" }, 
    subtitle: { 
      en: "Manual processes don't scale with growth", 
      de: "Manuelle Prozesse skalieren nicht mit dem Wachstum" 
    }, 
    bullets: [
      { text: { en: "Board Prep Time: Average 20-40 hours per board meeting (vs. 4-8 hours for AI-native)", de: "Board Prep Time: Durchschnittlich 20-40 Stunden pro Board Meeting (vs. 4-8 Stunden bei AI-native)" }, icon: "Clock" },
      { text: { en: "Board Confidence: Average 40-60% (vs. 95% for AI-native)", de: "Board Confidence: Durchschnittlich 40-60% (vs. 95% bei AI-native)" }, icon: "TrendingDown" },
      { text: { en: "Strategic Decision Speed: Average 2-4 weeks (vs. 2-4 days for AI-native)", de: "Strategic Decision Speed: Durchschnittlich 2-4 Wochen (vs. 2-4 Tage bei AI-native)" }, icon: "Zap" },
      { text: { en: "Investor Relations: Reactive communication (vs. proactive for AI-native)", de: "Investor Relations: Reaktive Kommunikation (vs. proaktiv bei AI-native)" }, icon: "AlertTriangle" }
    ], 
    metrics: [
      { label: { en: "Board Prep Time", de: "Board Prep Time" }, value: "20-40h", trend: "up" },
      { label: { en: "Board Confidence", de: "Board Confidence" }, value: "40-60%", trend: "down" },
      { label: { en: "Decision Speed", de: "Entscheidungsgeschwindigkeit" }, value: "2-4 weeks", trend: "up" },
      { label: { en: "Investor Communication", de: "Investor-Kommunikation" }, value: "Reactive", trend: "down" }
    ] 
  },
  framework: { 
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" }, 
    subtitle: { 
      en: "How AI-native companies build board and governance systems that scale", 
      de: "Wie AI-native Unternehmen Board- und Governance-Systeme aufbauen, die skalieren" 
    }, 
    items: [
      {
        id: "board-intelligence",
        icon: "BarChart3",
        color: "cyan",
        bgColor: "bg-cyan-500/10",
        title: { en: "Board Intelligence & Reporting", de: "Board Intelligence & Reporting" },
        subtitle: { en: "Real-time board intelligence and automated reporting", de: "Echtzeit-Board-Intelligence und automatisiertes Reporting" },
        description: { 
          en: "Manual board prep = 20-40 hours wasted. Build real-time dashboards, auto-generated board decks, and AI-powered insights to reduce prep time by 80% and increase board confidence by 100%.", 
          de: "Manuelle Board-Vorbereitung = 20-40 Stunden verschwendet. Baue Echtzeit-Dashboards, auto-generierte Board-Decks und AI-powered Insights, um Prep Time um 80% zu reduzieren und Board Confidence um 100% zu steigern." 
        },
        metrics: [
          { label: { en: "Board Prep Time", de: "Board Prep Time" }, value: "-80%" },
          { label: { en: "Board Confidence", de: "Board Confidence" }, value: "+100%" }
        ],
        actions: [
          { en: "Board Dashboard (Real-Time KPIs, Board Metrics, Investor Metrics)", de: "Board Dashboard (Echtzeit-KPIs, Board Metrics, Investor Metrics)" },
          { en: "Board Materials (Board Deck, Board Memo, Appendix, Data Visualization)", de: "Board Materialien (Board Deck, Board Memo, Appendix, Data Visualization)" },
          { en: "Board Reporting Automation (Auto-Generated Reports, Templates, Workflows)", de: "Board Reporting Automation (Auto-generierte Reports, Templates, Workflows)" },
          { en: "Board Intelligence (Insights, Trends, Anomalies, Recommendations)", de: "Board Intelligence (Insights, Trends, Anomalien, Empfehlungen)" },
          { en: "AI-Powered Board Intelligence (Auto-Insights, Natural Language, Predictive Analytics)", de: "AI-Powered Board Intelligence (Auto-Insights, Natural Language, Predictive Analytics)" }
        ]
      },
      {
        id: "strategic-planning",
        icon: "Target",
        color: "blue",
        bgColor: "bg-blue-500/10",
        title: { en: "Strategic Planning & OKRs", de: "Strategic Planning & OKRs" },
        subtitle: { en: "Systematic strategic planning and OKR management", de: "Systematische strategische Planung und OKR-Management" },
        description: { 
          en: "No strategy = no alignment. Build a comprehensive OKR framework, strategic initiatives tracking, and AI-powered scenario planning to increase strategic clarity by 200% and OKR achievement by 50%.", 
          de: "Keine Strategie = kein Alignment. Baue ein umfassendes OKR-Framework, Strategic Initiatives Tracking und AI-powered Szenarioplanung, um strategische Klarheit um 200% und OKR-Erreichung um 50% zu steigern." 
        },
        metrics: [
          { label: { en: "Strategic Clarity", de: "Strategische Klarheit" }, value: "+200%" },
          { label: { en: "OKR Achievement", de: "OKR-Erreichung" }, value: "+50%" }
        ],
        actions: [
          { en: "Strategic Planning (Vision, Mission, Strategy, Goals, Roadmap)", de: "Strategic Planning (Vision, Mission, Strategie, Ziele, Roadmap)" },
          { en: "OKR Framework (Objectives, Key Results, Quarterly Reviews)", de: "OKR Framework (Objectives, Key Results, Quarterly Reviews)" },
          { en: "Strategic Initiatives (Projects, Milestones, Owners, Timelines)", de: "Strategic Initiatives (Projekte, Milestones, Owner, Timelines)" },
          { en: "Strategic Reviews (Quarterly, Annual, Board Reviews)", de: "Strategic Reviews (Quartals-, Jahres-, Board Reviews)" },
          { en: "AI-Powered Strategic Planning (Scenario Planning, Predictive Models, Strategic Insights)", de: "AI-Powered Strategic Planning (Szenarioplanung, Predictive Models, Strategic Insights)" }
        ]
      },
      {
        id: "risk-management",
        icon: "ShieldCheck",
        color: "violet",
        bgColor: "bg-violet-500/10",
        title: { en: "Risk Management & Compliance", de: "Risk Management & Compliance" },
        subtitle: { en: "Proactive risk management and compliance systems", de: "Proaktives Risikomanagement und Compliance-Systeme" },
        description: { 
          en: "Reactive risk = crisis management. Build a comprehensive risk framework, compliance automation, and AI-powered risk detection to reduce risks by 50% and increase compliance confidence by 100%.", 
          de: "Reaktives Risiko = Krisenmanagement. Baue ein umfassendes Risk Framework, Compliance Automation und AI-powered Risk Detection, um Risiken um 50% zu reduzieren und Compliance Confidence um 100% zu steigern." 
        },
        metrics: [
          { label: { en: "Risk Reduction", de: "Risikoreduktion" }, value: "-50%" },
          { label: { en: "Compliance Confidence", de: "Compliance Confidence" }, value: "+100%" }
        ],
        actions: [
          { en: "Risk Framework (Risk Identification, Assessment, Mitigation, Monitoring)", de: "Risk Framework (Risikoidentifikation, Bewertung, Mitigation, Monitoring)" },
          { en: "Compliance Management (Regulatory Compliance, Policies, Audits)", de: "Compliance Management (Regulatory Compliance, Policies, Audits)" },
          { en: "Risk Dashboard (Real-Time Risk Metrics, Risk Heatmap, Alerts)", de: "Risk Dashboard (Echtzeit-Risikometriken, Risk Heatmap, Alerts)" },
          { en: "Crisis Management (Crisis Playbooks, Communication Plans, Response Teams)", de: "Krisenmanagement (Crisis Playbooks, Kommunikationspläne, Response Teams)" },
          { en: "AI-Powered Risk Management (Predictive Risk Detection, Auto-Alerts, Risk Scoring)", de: "AI-Powered Risk Management (Predictive Risk Detection, Auto-Alerts, Risk Scoring)" }
        ]
      },
      {
        id: "investor-relations",
        icon: "Users",
        color: "amber",
        bgColor: "bg-amber-500/10",
        title: { en: "Investor Relations & Communication", de: "Investor Relations & Communication" },
        subtitle: { en: "Proactive investor communication and relationship management", de: "Proaktive Investorkommunikation und Beziehungsmanagement" },
        description: { 
          en: "Reactive communication = loss of trust. Build a proactive investor communication strategy, automated updates, and AI-powered personalization to increase investor confidence by 100% and fundraising success by 50%.", 
          de: "Reaktive Kommunikation = Vertrauensverlust. Baue eine proaktive Investor-Kommunikationsstrategie, automatisierte Updates und AI-powered Personalisierung, um Investor Confidence um 100% und Fundraising-Erfolg um 50% zu steigern." 
        },
        metrics: [
          { label: { en: "Investor Confidence", de: "Investor Confidence" }, value: "+100%" },
          { label: { en: "Fundraising Success", de: "Fundraising-Erfolg" }, value: "+50%" }
        ],
        actions: [
          { en: "Investor Communication Strategy (Frequency, Format, Content, Channels)", de: "Investor-Kommunikationsstrategie (Frequenz, Format, Inhalt, Kanäle)" },
          { en: "Investor Updates (Monthly/Quarterly Updates, Newsletters, Emails)", de: "Investor Updates (Monatliche/Quartals-Updates, Newsletters, E-Mails)" },
          { en: "Investor Relations Materials (Pitch Deck, Data Room, Board Materials)", de: "Investor Relations Materialien (Pitch Deck, Data Room, Board Materialien)" },
          { en: "Investor Engagement (1-on-1s, Board Meetings, Investor Events)", de: "Investor Engagement (1-on-1s, Board Meetings, Investor Events)" },
          { en: "AI-Powered Investor Relations (Auto-Updates, Personalized Insights, Predictive Analytics)", de: "AI-Powered Investor Relations (Auto-Updates, Personalisierte Insights, Predictive Analytics)" }
        ]
      },
      {
        id: "ai-governance",
        icon: "Sparkles",
        color: "pink",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered Governance", de: "AI-Powered Governance" },
        subtitle: { en: "AI that continuously optimizes governance operations", de: "AI, die Governance-Operationen kontinuierlich optimiert" },
        description: { 
          en: "Manual governance = falling behind. Deploy AI across board intelligence, strategic planning, risk management, and investor relations to increase governance efficiency by 300% and board confidence by 100%.", 
          de: "Manuelle Governance = Rückstand. Setze AI über Board Intelligence, Strategic Planning, Risk Management und Investor Relations ein, um Governance-Effizienz um 300% und Board Confidence um 100% zu steigern." 
        },
        metrics: [
          { label: { en: "Governance Efficiency", de: "Governance-Effizienz" }, value: "+300%" },
          { label: { en: "Board Confidence", de: "Board Confidence" }, value: "+100%" }
        ],
        actions: [
          { en: "AI Board Intelligence (Auto-Generated Board Decks, Natural Language Queries, Predictive Analytics)", de: "AI Board Intelligence (Auto-generierte Board Decks, Natural Language Queries, Predictive Analytics)" },
          { en: "AI Strategic Planning (Scenario Modeling, Predictive OKRs, Strategic Recommendations)", de: "AI Strategic Planning (Szenariomodellierung, Predictive OKRs, Strategische Empfehlungen)" },
          { en: "AI Risk Management (Predictive Risk Detection, Auto-Alerts, Risk Scoring)", de: "AI Risk Management (Predictive Risk Detection, Auto-Alerts, Risk Scoring)" },
          { en: "AI Investor Relations (Auto-Generated Updates, Personalized Insights, Sentiment Analysis)", de: "AI Investor Relations (Auto-generierte Updates, Personalisierte Insights, Sentiment Analysis)" },
          { en: "AI Governance Intelligence (Board Effectiveness Scoring, Governance Recommendations)", de: "AI Governance Intelligence (Board Effectiveness Scoring, Governance-Empfehlungen)" }
        ]
      }
    ] 
  },
  bestPractices: { 
    title: { en: "Best Practices", de: "Best Practices" }, 
    categories: [
      {
        category: { en: "Board Intelligence", de: "Board Intelligence" },
        items: [
          { do: { en: "Build real-time dashboards with auto-refresh", de: "Baue Echtzeit-Dashboards mit Auto-Refresh" }, dont: { en: "Create static monthly reports manually", de: "Erstelle statische Monatsberichte manuell" } },
          { do: { en: "Auto-generate board decks from data", de: "Auto-generiere Board Decks aus Daten" }, dont: { en: "Spend 20+ hours on manual deck creation", de: "Verbringe 20+ Stunden mit manueller Deck-Erstellung" } }
        ]
      },
      {
        category: { en: "Strategic Planning", de: "Strategische Planung" },
        items: [
          { do: { en: "Implement quarterly OKR reviews with alignment checks", de: "Implementiere quartalsweise OKR Reviews mit Alignment-Checks" }, dont: { en: "Set annual goals and never revisit", de: "Setze jährliche Ziele und überprüfe nie" } },
          { do: { en: "Use scenario planning for strategic decisions", de: "Nutze Szenarioplanung für strategische Entscheidungen" }, dont: { en: "Make decisions based on gut feeling alone", de: "Triff Entscheidungen nur aus dem Bauch heraus" } }
        ]
      },
      {
        category: { en: "Risk Management", de: "Risikomanagement" },
        items: [
          { do: { en: "Implement proactive risk monitoring with alerts", de: "Implementiere proaktives Risiko-Monitoring mit Alerts" }, dont: { en: "React to risks only when crises occur", de: "Reagiere auf Risiken nur bei Krisen" } },
          { do: { en: "Automate compliance tracking and reporting", de: "Automatisiere Compliance-Tracking und Reporting" }, dont: { en: "Track compliance manually in spreadsheets", de: "Tracke Compliance manuell in Spreadsheets" } }
        ]
      }
    ] 
  },
  roadmap: { 
    title: { en: "How to Implement (90-Day Roadmap)", de: "So implementierst du es (90-Tage-Roadmap)" }, 
    subtitle: { 
      en: "A step-by-step guide to transform your board and governance systems", 
      de: "Eine Schritt-für-Schritt-Anleitung zur Transformation deiner Board- und Governance-Systeme" 
    }, 
    phases: [
      {
        phase: 1,
        title: { en: "Strategy", de: "Strategie" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Assess current state and design governance framework", de: "Aktuellen Stand analysieren und Governance-Framework designen" },
        deliverables: [
          { en: "Board Intelligence Design (Dashboard, Board Deck Template, Reporting Automation)", de: "Board Intelligence Design (Dashboard, Board Deck Template, Reporting Automation)" },
          { en: "Strategic Planning Framework (OKR framework, Strategic Initiatives)", de: "Strategic Planning Framework (OKR-Framework, Strategic Initiatives)" },
          { en: "Risk Management Framework (Risk categories, Assessment, Mitigation)", de: "Risk Management Framework (Risikokategorien, Bewertung, Mitigation)" },
          { en: "Investor Relations Strategy (Communication plan, Investor Portal)", de: "Investor Relations Strategie (Kommunikationsplan, Investor Portal)" },
          { en: "Governance Strategy Deck (5-page deck)", de: "Governance Strategy Deck (5-seitiges Deck)" }
        ],
        gradient: "from-orange-500 to-amber-500"
      },
      {
        phase: 2,
        title: { en: "Setup", de: "Setup" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Build board intelligence and deploy governance systems", de: "Board Intelligence aufbauen und Governance-Systeme deployen" },
        deliverables: [
          { en: "Board Dashboard (Real-time KPIs, Board Metrics)", de: "Board Dashboard (Echtzeit-KPIs, Board Metrics)" },
          { en: "Board Reporting Automation (Auto-generated Board Deck, Board Memo)", de: "Board Reporting Automation (Auto-generiertes Board Deck, Board Memo)" },
          { en: "OKR System (Company OKRs, Department OKRs, Tracking)", de: "OKR System (Company OKRs, Department OKRs, Tracking)" },
          { en: "Risk Dashboard (Risk Heatmap, Compliance Status)", de: "Risk Dashboard (Risk Heatmap, Compliance Status)" },
          { en: "Training Materials (Slides, Videos, Checklists)", de: "Trainingsmaterialien (Slides, Videos, Checklists)" }
        ],
        gradient: "from-amber-500 to-yellow-500"
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Execution" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { en: "Roll out board intelligence and operationalize governance", de: "Board Intelligence ausrollen und Governance operationalisieren" },
        deliverables: [
          { en: "Board Intelligence Tracking (Real-time Dashboard, Automated Reporting)", de: "Board Intelligence Tracking (Echtzeit-Dashboard, Automatisiertes Reporting)" },
          { en: "OKR Tracking (Weekly Check-ins, Quarterly Reviews)", de: "OKR Tracking (Wöchentliche Check-ins, Quarterly Reviews)" },
          { en: "Risk Monitoring (Risk Dashboard, Compliance Tracking)", de: "Risiko-Monitoring (Risk Dashboard, Compliance Tracking)" },
          { en: "Investor Communication (Monthly Updates, Quarterly Board Meetings)", de: "Investor-Kommunikation (Monatliche Updates, Quarterly Board Meetings)" },
          { en: "Optimization Playbook (Continuous Improvement)", de: "Optimization Playbook (Kontinuierliche Verbesserung)" }
        ],
        gradient: "from-yellow-500 to-orange-500"
      }
    ] 
  },
  caseStudies: { 
    title: { en: "Real-World Results", de: "Echte Ergebnisse" }, 
    subtitle: { 
      en: "How 3 companies transformed their board and governance systems with the 5-component framework", 
      de: "Wie 3 Unternehmen ihre Board- und Governance-Systeme mit dem 5-Komponenten-Framework transformiert haben" 
    }, 
    cases: [
      {
        company: { en: "Series A SaaS Company (Fintech)", de: "Series A SaaS Unternehmen (Fintech)" },
        problem: { 
          en: "Board prep time 40 hours, board confidence 50%, no board intelligence. Manual processes consuming CEO time.", 
          de: "Board Prep Time 40 Stunden, Board Confidence 50%, keine Board Intelligence. Manuelle Prozesse verbrauchen CEO-Zeit." 
        },
        solution: { 
          en: "Deployed all 5 components with focus on Board Intelligence and Strategic Planning. AI-powered dashboards and OKR framework implemented.", 
          de: "Alle 5 Komponenten deployed mit Fokus auf Board Intelligence und Strategic Planning. AI-powered Dashboards und OKR-Framework implementiert." 
        },
        results: [
          { metric: { en: "Board Prep Time", de: "Board Prep Time" }, before: "40 hours", after: "6 hours", change: "-85%" },
          { metric: { en: "Board Confidence", de: "Board Confidence" }, before: "50%", after: "90%", change: "+80%" },
          { metric: { en: "Strategic Decision Speed", de: "Strategische Entscheidungsgeschwindigkeit" }, before: "3 weeks", after: "3 days", change: "-90%" },
          { metric: { en: "OKR Achievement", de: "OKR-Erreichung" }, before: "60%", after: "85%", change: "+42%" }
        ],
        timeline: { en: "6 months | Power Up + Boost", de: "6 Monate | Power Up + Boost" }
      },
      {
        company: { en: "Series B SaaS Company (HR Tech)", de: "Series B SaaS Unternehmen (HR Tech)" },
        problem: { 
          en: "Board confidence 60%, no risk management, reactive investor relations. Fundraising taking 6+ months.", 
          de: "Board Confidence 60%, kein Risikomanagement, reaktive Investor Relations. Fundraising dauert 6+ Monate." 
        },
        solution: { 
          en: "Comprehensive governance transformation with AI risk detection, compliance automation, and proactive investor communication.", 
          de: "Umfassende Governance-Transformation mit AI Risk Detection, Compliance Automation und proaktiver Investor-Kommunikation." 
        },
        results: [
          { metric: { en: "Board Confidence", de: "Board Confidence" }, before: "60%", after: "95%", change: "+58%" },
          { metric: { en: "Board Prep Time", de: "Board Prep Time" }, before: "30 hours", after: "4 hours", change: "-87%" },
          { metric: { en: "Risk Score Reduction", de: "Risikoscore-Reduktion" }, before: "High", after: "Low", change: "-50%" },
          { metric: { en: "Series C Fundraising", de: "Series C Fundraising" }, before: "6 months avg", after: "30 days", change: "-83%" }
        ],
        timeline: { en: "12 months | Boost + Accelerate", de: "12 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series C Company (E-Commerce Tech)", de: "Series C Unternehmen (E-Commerce Tech)" },
        problem: { 
          en: "Need to scale governance 5x without 5x governance team. Board prep consuming entire week before meetings.", 
          de: "Governance muss 5x skalieren ohne 5x Governance-Team. Board Prep verbraucht ganze Woche vor Meetings." 
        },
        solution: { 
          en: "Full AI governance stack deployed: AI board intelligence, AI risk management, AI investor relations. Automated 90% of governance operations.", 
          de: "Vollständiger AI Governance Stack deployed: AI Board Intelligence, AI Risk Management, AI Investor Relations. 90% der Governance-Operationen automatisiert." 
        },
        results: [
          { metric: { en: "Board Prep Time", de: "Board Prep Time" }, before: "35 hours", after: "4 hours", change: "-89%" },
          { metric: { en: "Governance Team", de: "Governance-Team" }, before: "5 people", after: "6 people", change: "+20% (not 5x)" },
          { metric: { en: "Board Confidence", de: "Board Confidence" }, before: "65%", after: "98%", change: "+51%" },
          { metric: { en: "Governance Efficiency", de: "Governance-Effizienz" }, before: "Baseline", after: "+400%", change: "+400%" }
        ],
        timeline: { en: "18 months | Accelerate × 2", de: "18 Monate | Accelerate × 2" }
      }
    ] 
  },
  solutionsConnection: { 
    title: { en: "Ready to Execute? Here's How We Can Help", de: "Bereit zur Umsetzung? So können wir helfen" }, 
    subtitle: { 
      en: "Choose the right engagement model for your timeline and budget", 
      de: "Wähle das richtige Engagement-Modell für deine Timeline und dein Budget" 
    }, 
    items: [
      {
        type: "assessment",
        name: { en: "Governance Assessment", de: "Governance-Assessment" },
        duration: { en: "2-3 Days", de: "2-3 Tage" },
        price: { en: "€2.5K-€10K", de: "€2.5K-€10K" },
        outcome: { en: "Full governance maturity report + 90-day roadmap", de: "Vollständiger Governance-Reifebericht + 90-Tage-Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Board Readiness Sprint", de: "Board-Bereitschaft Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "One governance component transformed, board prep time reduced", de: "Eine Governance-Komponente transformiert, Board-Vorbereitungszeit reduziert" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/board-readiness",
        icon: "Zap",
        color: "bg-amber-500/10 text-amber-500"
      },
      {
        type: "boost",
        name: { en: "Board Excellence", de: "Board-Exzellenz" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "2-3 governance components transformed, AI integration, board confidence +100%", de: "2-3 Governance-Komponenten transformiert, KI-Integration, Board-Vertrauen +100%" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/board-excellence",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "AI-Native Governance", de: "KI-Native Governance" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full governance transformation, AI Maturity Level 3, Board Prep Time -80%", de: "Vollständige Governance-Transformation, KI-Reifegrad Level 3, Board-Vorbereitungszeit -80%" },
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
      en: "This playbook is designed for leaders who need to scale governance with AI", 
      de: "Dieses Playbook ist für Führungskräfte, die Governance mit AI skalieren müssen" 
    }, 
    icp: { 
      en: "Series A-C SaaS companies with boards seeking to optimize governance operations and increase board confidence", 
      de: "Series A-C SaaS-Unternehmen mit Boards, die Governance-Operationen optimieren und Board Confidence steigern möchten" 
    }, 
    personas: [
      {
        icon: "User",
        role: { en: "CEOs", de: "CEOs" },
        pain: { en: "Spending 20-40 hours on board prep, low board confidence", de: "20-40 Stunden für Board Prep, niedrige Board Confidence" },
        outcome: { en: "4-hour board prep, 95% board confidence, strategic decisions in days", de: "4-Stunden Board Prep, 95% Board Confidence, strategische Entscheidungen in Tagen" },
        color: "orange"
      },
      {
        icon: "Users",
        role: { en: "Board Members", de: "Board Members" },
        pain: { en: "Lack of real-time insights, unclear strategic direction", de: "Keine Echtzeit-Insights, unklare strategische Richtung" },
        outcome: { en: "Real-time dashboards, strategic clarity, data-driven decisions", de: "Echtzeit-Dashboards, strategische Klarheit, datengetriebene Entscheidungen" },
        color: "blue"
      },
      {
        icon: "Briefcase",
        role: { en: "VCs / Investors", de: "VCs / Investoren" },
        pain: { en: "Portfolio governance chaos, reactive communication", de: "Portfolio Governance Chaos, reaktive Kommunikation" },
        outcome: { en: "Portfolio-wide governance systems, proactive investor relations", de: "Portfolio-weite Governance-Systeme, proaktive Investor Relations" },
        color: "violet"
      },
      {
        icon: "Calculator",
        role: { en: "CFOs / COOs", de: "CFOs / COOs" },
        pain: { en: "Manual reporting, compliance tracking in spreadsheets", de: "Manuelles Reporting, Compliance-Tracking in Spreadsheets" },
        outcome: { en: "Automated reporting, AI-powered compliance, risk dashboards", de: "Automatisiertes Reporting, AI-powered Compliance, Risk Dashboards" },
        color: "emerald"
      }
    ] 
  },
  finalCta: { 
    headline: { en: "Get Started Today", de: "Starte heute" }, 
    subline: { 
      en: "Transform your board and governance systems with the 5-component framework", 
      de: "Transformiere deine Board- und Governance-Systeme mit dem 5-Komponenten-Framework" 
    }, 
    trustSignals: [
      { en: "50-page playbook with templates and checklists", de: "50-seitiges Playbook mit Templates und Checklists" },
      { en: "3 real-world case studies from Series A-C companies", de: "3 echte Case Studies von Series A-C Unternehmen" },
      { en: "90-day implementation roadmap", de: "90-Tage Implementierungs-Roadmap" }
    ], 
    bookingUrl: "https://scalingx.fillout.com/inflection-call", 
    downloadUrl: "#" 
  }
};
