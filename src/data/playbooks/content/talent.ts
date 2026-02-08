import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('operating-systems/talent')!;

export const talentData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Talent · Operating Systems", de: "Talent · Operating Systems" },
    title: "Talent Playbook",
    subtitle: { 
      en: "How to build talent systems that scale with AI", 
      de: "Wie du Talent-Systeme aufbaust, die mit AI skalieren" 
    },
    description: { 
      en: "Traditional talent operations are broken. Companies hire slowly, onboard chaotically, and lose top performers. Time-to-hire is 90+ days, onboarding takes 6 months, and retention is 75%. The problem? Manual talent processes don't scale.\n\nAI-native companies use a different playbook. They leverage the 5-component framework to reduce time-to-hire by 60%, cut onboarding time by 70%, and increase retention by 40%. They hire faster, onboard better, and retain longer.\n\nThis playbook gives you the exact framework used by Series A-C companies to build world-class talent systems. Learn from real-world case studies and get actionable implementation guides.",
      de: "Traditionelle Talent-Operationen sind kaputt. Unternehmen stellen langsam ein, onboarden chaotisch und verlieren Top-Performer. Time-to-Hire liegt bei 90+ Tagen, Onboarding dauert 6 Monate und die Retention bei 75%. Das Problem? Manuelle Talent-Prozesse skalieren nicht.\n\nAI-native Unternehmen nutzen ein anderes Playbook. Sie setzen das 5-Komponenten-Framework ein, um Time-to-Hire um 60% zu reduzieren, Onboarding-Zeit um 70% zu verkürzen und Retention um 40% zu steigern.\n\nDieses Playbook gibt dir das exakte Framework, das Series A-C Unternehmen nutzen, um Weltklasse-Talent-Systeme aufzubauen. Lerne aus echten Case Studies und erhalte umsetzbare Implementierungsguides."
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#download",
    assetId: "playbook-talent",
    gradient: "from-violet-500 to-purple-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "90+ days time-to-hire, 70% have no structured onboarding, 75% retention rate. Manual talent processes don't scale.",
        de: "90+ Tage Time-to-Hire, 70% haben kein strukturiertes Onboarding, 75% Retention Rate. Manuelle Talent-Prozesse skalieren nicht."
      }
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Talent is the foundation for hypergrowth. Without world-class teams, scaling becomes impossible. The best companies hire 3x faster, retain 40% better.",
        de: "Talent ist das Fundament für Hypergrowth. Ohne Weltklasse-Teams wird Skalierung unmöglich. Die besten Unternehmen stellen 3x schneller ein und halten 40% besser."
      }
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The 5-component framework: Hiring Pipeline, Onboarding Excellence, Performance Management, Talent Analytics, and AI-Powered Talent.",
        de: "Das 5-Komponenten-Framework: Hiring Pipeline, Onboarding Excellence, Performance Management, Talent Analytics und AI-Powered Talent."
      }
    }
  },
  problem: {
    title: { en: "Why Traditional Talent Operations is Broken", de: "Warum traditionelle Talent-Operations kaputt sind" },
    subtitle: { 
      en: "Most companies hire slowly, onboard chaotically, and struggle with retention", 
      de: "Die meisten Unternehmen stellen langsam ein, onboarden chaotisch und kämpfen mit Retention" 
    },
    bullets: [
      { text: { en: "Slow Hiring: Average time-to-hire is 90+ days (vs. 30 days for AI-native)", de: "Langsames Hiring: Durchschnittliche Time-to-Hire liegt bei 90+ Tagen (vs. 30 Tage für AI-native)" } },
      { text: { en: "Chaotic Onboarding: 70% of companies have no structured onboarding program", de: "Chaotisches Onboarding: 70% der Unternehmen haben kein strukturiertes Onboarding-Programm" } },
      { text: { en: "Low Retention: Average retention is 75% (vs. 95% for AI-native companies)", de: "Niedrige Retention: Durchschnittliche Retention liegt bei 75% (vs. 95% für AI-native Unternehmen)" } },
      { text: { en: "No Performance Management: 60% of companies have no performance system in place", de: "Kein Performance Management: 60% der Unternehmen haben kein Performance-System" } }
    ],
    metrics: [
      { label: { en: "Time-to-Hire", de: "Time-to-Hire" }, value: "90+ days", trend: "up" },
      { label: { en: "Structured Onboarding", de: "Strukturiertes Onboarding" }, value: "30%", trend: "down" },
      { label: { en: "Retention Rate", de: "Retention Rate" }, value: "75%", trend: "down" },
      { label: { en: "Performance Systems", de: "Performance-Systeme" }, value: "40%", trend: "down" }
    ]
  },
  framework: {
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" },
    subtitle: { 
      en: "How AI-native companies build talent systems that scale", 
      de: "Wie AI-native Unternehmen Talent-Systeme aufbauen, die skalieren" 
    },
    items: [
      {
        id: "hiring-pipeline",
        icon: "UserPlus",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "Hiring Pipeline & Recruiting Excellence", de: "Hiring Pipeline & Recruiting Excellence" },
        subtitle: { en: "Build a systematic hiring machine", de: "Baue eine systematische Hiring-Maschine" },
        description: { en: "Build a systematic hiring machine that attracts, screens, and closes top talent faster than competitors.", de: "Baue eine systematische Hiring-Maschine, die Top-Talent schneller als die Konkurrenz anzieht, screent und gewinnt." },
        metrics: [
          { label: { en: "Time-to-Hire", de: "Time-to-Hire" }, value: "-60%" },
          { label: { en: "Quality of Hire", de: "Quality of Hire" }, value: "+50%" }
        ],
        actions: [
          { en: "Define hiring strategy with roles, competencies, and hiring plan", de: "Definiere Hiring-Strategie mit Rollen, Kompetenzen und Hiring-Plan" },
          { en: "Build sourcing pipeline (active, passive, referrals, agencies)", de: "Baue Sourcing-Pipeline auf (aktiv, passiv, Referrals, Agenturen)" },
          { en: "Implement structured screening process with assessments", de: "Implementiere strukturierten Screening-Prozess mit Assessments" },
          { en: "Create interview process with scorecards and debriefs", de: "Erstelle Interview-Prozess mit Scorecards und Debriefs" },
          { en: "Deploy AI-powered recruiting (screening, skill matching, scoring)", de: "Setze AI-gestütztes Recruiting ein (Screening, Skill Matching, Scoring)" }
        ]
      },
      {
        id: "onboarding-excellence",
        icon: "GraduationCap",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Onboarding Excellence & Time-to-Value", de: "Onboarding Excellence & Time-to-Value" },
        subtitle: { en: "Systematize new hire onboarding", de: "Systematisiere das Onboarding neuer Mitarbeiter" },
        description: { en: "Systematize new hire onboarding to reduce time-to-productivity and improve retention from day one.", de: "Systematisiere das Onboarding neuer Mitarbeiter, um Time-to-Productivity zu reduzieren und Retention ab Tag eins zu verbessern." },
        metrics: [
          { label: { en: "Onboarding Time", de: "Onboarding-Zeit" }, value: "-70%" },
          { label: { en: "Time-to-Productivity", de: "Time-to-Productivity" }, value: "-50%" }
        ],
        actions: [
          { en: "Create 30-60-90 day onboarding plan with milestones", de: "Erstelle 30-60-90 Tage Onboarding-Plan mit Meilensteinen" },
          { en: "Build onboarding checklist (equipment, access, training, meetings)", de: "Erstelle Onboarding-Checkliste (Equipment, Zugang, Training, Meetings)" },
          { en: "Implement role-specific training (product, process, tools, culture)", de: "Implementiere rollenspezifisches Training (Produkt, Prozess, Tools, Kultur)" },
          { en: "Enable managers with 1-on-1s, feedback, and goal setting", de: "Befähige Manager mit 1-on-1s, Feedback und Zielsetzung" },
          { en: "Deploy AI-powered onboarding (adaptive learning, personalized paths)", de: "Setze AI-gestütztes Onboarding ein (adaptives Lernen, personalisierte Pfade)" }
        ]
      },
      {
        id: "performance-management",
        icon: "Target",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Performance Management & Development", de: "Performance Management & Development" },
        subtitle: { en: "Build systems for performance and growth", de: "Baue Systeme für Performance und Wachstum" },
        description: { en: "Build systems for performance tracking, feedback, and career development that retain top talent.", de: "Baue Systeme für Performance-Tracking, Feedback und Karriereentwicklung, die Top-Talent halten." },
        metrics: [
          { label: { en: "Performance", de: "Performance" }, value: "+30%" },
          { label: { en: "Retention", de: "Retention" }, value: "+40%" }
        ],
        actions: [
          { en: "Implement performance framework (OKRs, KPIs, goals, reviews)", de: "Implementiere Performance-Framework (OKRs, KPIs, Ziele, Reviews)" },
          { en: "Build feedback culture (1-on-1s, 360 reviews, continuous feedback)", de: "Baue Feedback-Kultur auf (1-on-1s, 360 Reviews, kontinuierliches Feedback)" },
          { en: "Create career development paths (career paths, promotion criteria)", de: "Erstelle Karriereentwicklungspfade (Karrierepfade, Beförderungskriterien)" },
          { en: "Design compensation framework (salary bands, equity, bonuses)", de: "Designe Vergütungs-Framework (Gehaltsbänder, Equity, Boni)" },
          { en: "Deploy AI-powered performance (real-time feedback, skill gap analysis)", de: "Setze AI-gestützte Performance ein (Echtzeit-Feedback, Skill Gap Analyse)" }
        ]
      },
      {
        id: "talent-analytics",
        icon: "BarChart3",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "Talent Analytics & Insights", de: "Talent Analytics & Insights" },
        subtitle: { en: "Real-time visibility into talent metrics", de: "Echtzeit-Sichtbarkeit in Talent-Metriken" },
        description: { en: "Real-time visibility into talent metrics with predictive analytics for proactive talent management.", de: "Echtzeit-Sichtbarkeit in Talent-Metriken mit prädiktiver Analytik für proaktives Talent-Management." },
        metrics: [
          { label: { en: "Talent Visibility", de: "Talent-Sichtbarkeit" }, value: "+100%" },
          { label: { en: "Predictive Accuracy", de: "Prädiktive Genauigkeit" }, value: "+50%" }
        ],
        actions: [
          { en: "Build talent dashboards (hiring, retention, performance, engagement)", de: "Erstelle Talent-Dashboards (Hiring, Retention, Performance, Engagement)" },
          { en: "Track hiring metrics (time-to-hire, cost-per-hire, quality of hire)", de: "Tracke Hiring-Metriken (Time-to-Hire, Cost-per-Hire, Quality of Hire)" },
          { en: "Monitor retention metrics (turnover rate, churn by role/team)", de: "Überwache Retention-Metriken (Turnover Rate, Churn nach Rolle/Team)" },
          { en: "Measure performance metrics (OKR achievement, promotion rate)", de: "Messe Performance-Metriken (OKR-Erreichung, Beförderungsrate)" },
          { en: "Deploy AI-powered analytics (predictive attrition, talent forecasting)", de: "Setze AI-gestützte Analytics ein (prädiktive Attrition, Talent-Forecasting)" }
        ]
      },
      {
        id: "ai-powered-talent",
        icon: "Sparkles",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered Talent (AI Multiplier)", de: "AI-Powered Talent (AI Multiplikator)" },
        subtitle: { en: "AI that optimizes talent operations", de: "AI, die Talent-Operations optimiert" },
        description: { en: "AI that continuously optimizes talent operations across recruiting, onboarding, performance, and retention.", de: "AI, die Talent-Operations kontinuierlich über Recruiting, Onboarding, Performance und Retention optimiert." },
        metrics: [
          { label: { en: "Talent Efficiency", de: "Talent-Effizienz" }, value: "+200-400%" },
          { label: { en: "Time-to-Hire", de: "Time-to-Hire" }, value: "-60-80%" }
        ],
        actions: [
          { en: "Implement AI recruiting (automated screening, skill matching, scoring)", de: "Implementiere AI-Recruiting (automatisiertes Screening, Skill Matching, Scoring)" },
          { en: "Deploy AI onboarding (adaptive learning paths, progress tracking)", de: "Setze AI-Onboarding ein (adaptive Lernpfade, Fortschrittstracking)" },
          { en: "Use AI performance (real-time feedback, career recommendations)", de: "Nutze AI-Performance (Echtzeit-Feedback, Karriereempfehlungen)" },
          { en: "Enable AI retention (attrition prediction, intervention triggers)", de: "Aktiviere AI-Retention (Attrition-Vorhersage, Interventions-Trigger)" },
          { en: "Build AI talent intelligence (forecasting, succession planning)", de: "Baue AI-Talent-Intelligence auf (Forecasting, Nachfolgeplanung)" }
        ]
      }
    ]
  },
  bestPractices: {
    title: { en: "Best Practices", de: "Best Practices" },
    categories: [
      {
        category: { en: "Hiring Excellence", de: "Hiring Excellence" },
        items: [
          { do: { en: "Use structured interviews with scorecards", de: "Nutze strukturierte Interviews mit Scorecards" }, dont: { en: "Rely on gut feeling or unstructured conversations", de: "Verlasse dich auf Bauchgefühl oder unstrukturierte Gespräche" } },
          { do: { en: "Define clear competency models for each role", de: "Definiere klare Kompetenzmodelle für jede Rolle" }, dont: { en: "Hire without clear criteria", de: "Stelle ohne klare Kriterien ein" } },
          { do: { en: "Implement take-home assessments or work trials", de: "Implementiere Take-Home Assessments oder Arbeitsproben" }, dont: { en: "Skip technical validation", de: "Überspringe technische Validierung" } }
        ]
      },
      {
        category: { en: "Onboarding Success", de: "Onboarding-Erfolg" },
        items: [
          { do: { en: "Start onboarding before day one (pre-boarding)", de: "Starte Onboarding vor Tag eins (Pre-Boarding)" }, dont: { en: "Wait until start date to begin", de: "Warte bis zum Startdatum um zu beginnen" } },
          { do: { en: "Assign a buddy for every new hire", de: "Weise jedem neuen Mitarbeiter einen Buddy zu" }, dont: { en: "Leave new hires to figure things out alone", de: "Lasse neue Mitarbeiter alleine zurechtkommen" } },
          { do: { en: "Set clear 30-60-90 day goals and milestones", de: "Setze klare 30-60-90 Tage Ziele und Meilensteine" }, dont: { en: "Have vague expectations", de: "Habe vage Erwartungen" } }
        ]
      },
      {
        category: { en: "Performance Management", de: "Performance Management" },
        items: [
          { do: { en: "Weekly 1-on-1s between manager and direct report", de: "Wöchentliche 1-on-1s zwischen Manager und Mitarbeiter" }, dont: { en: "Only give feedback during annual reviews", de: "Gib nur Feedback während Jahresgesprächen" } },
          { do: { en: "Quarterly OKR reviews with calibration", de: "Vierteljährliche OKR-Reviews mit Kalibrierung" }, dont: { en: "Set goals once and forget them", de: "Setze Ziele einmal und vergiss sie" } },
          { do: { en: "Clear promotion criteria and career paths", de: "Klare Beförderungskriterien und Karrierepfade" }, dont: { en: "Make promotions arbitrary", de: "Mache Beförderungen willkürlich" } }
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
        focus: { en: "Assess current state, design hiring pipeline, define performance framework", de: "Bewerte aktuellen Stand, designe Hiring-Pipeline, definiere Performance-Framework" },
        deliverables: [
          { en: "Hiring Plan (Roles, Timeline, Budget, Competencies)", de: "Hiring-Plan (Rollen, Timeline, Budget, Kompetenzen)" },
          { en: "Onboarding Framework (30-60-90 Day Plan, Checklists)", de: "Onboarding-Framework (30-60-90 Tage Plan, Checklisten)" },
          { en: "Performance Framework (OKRs, KPIs, Review Process)", de: "Performance-Framework (OKRs, KPIs, Review-Prozess)" },
          { en: "Talent Analytics Design (Dashboards, Metrics, Reports)", de: "Talent-Analytics-Design (Dashboards, Metriken, Reports)" },
          { en: "Talent Strategy (5-page deck)", de: "Talent-Strategie (5-Seiten-Deck)" }
        ],
        gradient: "from-violet-500 to-purple-500"
      },
      {
        phase: 2,
        title: { en: "Setup", de: "Setup" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Build hiring pipeline, create onboarding program, deploy tools", de: "Baue Hiring-Pipeline auf, erstelle Onboarding-Programm, deploye Tools" },
        deliverables: [
          { en: "Hiring Process (5-7 stages, scorecards, interview guides)", de: "Hiring-Prozess (5-7 Stufen, Scorecards, Interview-Guides)" },
          { en: "Onboarding Program (30-60-90 day plan, training materials)", de: "Onboarding-Programm (30-60-90 Tage Plan, Trainingsmaterialien)" },
          { en: "Performance System (OKR templates, 1-on-1 templates, reviews)", de: "Performance-System (OKR-Templates, 1-on-1-Templates, Reviews)" },
          { en: "Talent Dashboard (Real-time metrics, hiring funnel, retention)", de: "Talent-Dashboard (Echtzeit-Metriken, Hiring-Funnel, Retention)" },
          { en: "Training Materials (Slides, Videos, Checklists)", de: "Trainingsmaterialien (Slides, Videos, Checklisten)" }
        ],
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Execution" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { en: "Roll out hiring process, onboard new hires, track metrics", de: "Rolle Hiring-Prozess aus, onboarde neue Mitarbeiter, tracke Metriken" },
        deliverables: [
          { en: "Hiring Pipeline Tracking (Real-time funnel, conversion rates)", de: "Hiring-Pipeline-Tracking (Echtzeit-Funnel, Conversion Rates)" },
          { en: "Onboarding Execution (New hire progress, completion rates)", de: "Onboarding-Execution (Fortschritt neuer Mitarbeiter, Completion Rates)" },
          { en: "Performance Tracking (OKR progress, 1-on-1 cadence)", de: "Performance-Tracking (OKR-Fortschritt, 1-on-1-Kadenz)" },
          { en: "Talent Metrics Monitoring (Time-to-hire, retention, performance)", de: "Talent-Metriken-Monitoring (Time-to-Hire, Retention, Performance)" },
          { en: "Optimization Playbook (Continuous improvement)", de: "Optimierungs-Playbook (Kontinuierliche Verbesserung)" }
        ],
        gradient: "from-green-500 to-emerald-500"
      }
    ]
  },
  caseStudies: {
    title: { en: "Real-World Results", de: "Echte Ergebnisse" },
    subtitle: { 
      en: "How 3 companies transformed their talent systems with the 5-component framework", 
      de: "Wie 3 Unternehmen ihre Talent-Systeme mit dem 5-Komponenten-Framework transformiert haben" 
    },
    cases: [
      {
        company: { en: "Series A SaaS Company", de: "Series A SaaS Unternehmen" },
        problem: { en: "Slow hiring (90 days), no structured onboarding, high churn (25%)", de: "Langsames Hiring (90 Tage), kein strukturiertes Onboarding, hoher Churn (25%)" },
        solution: { en: "Implemented 5-stage hiring process with scorecards, 30-60-90 day onboarding plan, OKR-based performance management, and AI screening", de: "Implementierte 5-stufigen Hiring-Prozess mit Scorecards, 30-60-90 Tage Onboarding-Plan, OKR-basiertes Performance Management und AI-Screening" },
        results: [
          { metric: { en: "Time-to-Hire", de: "Time-to-Hire" }, before: "90 days", after: "30 days", change: "-67%" },
          { metric: { en: "Onboarding Time", de: "Onboarding-Zeit" }, before: "6 months", after: "6 weeks", change: "-75%" },
          { metric: { en: "Retention Rate", de: "Retention Rate" }, before: "75%", after: "90%", change: "+20%" },
          { metric: { en: "Hiring Cost", de: "Hiring-Kosten" }, before: "€8k/hire", after: "€4k/hire", change: "-50%" }
        ],
        timeline: { en: "6 months (Power Up + Boost)", de: "6 Monate (Power Up + Boost)" }
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS Unternehmen" },
        problem: { en: "High churn (25%), no performance management system, no career paths", de: "Hoher Churn (25%), kein Performance Management System, keine Karrierepfade" },
        solution: { en: "Deployed OKR system with 360 reviews, career paths with promotion criteria, predictive attrition model, and AI performance management", de: "Setzte OKR-System mit 360 Reviews ein, Karrierepfade mit Beförderungskriterien, prädiktives Attrition-Modell und AI Performance Management" },
        results: [
          { metric: { en: "Retention Rate", de: "Retention Rate" }, before: "75%", after: "95%", change: "+27%" },
          { metric: { en: "Voluntary Turnover", de: "Freiwillige Fluktuation" }, before: "25%", after: "5%", change: "-80%" },
          { metric: { en: "OKR Achievement", de: "OKR-Erreichung" }, before: "60%", after: "85%", change: "+42%" },
          { metric: { en: "eNPS Score", de: "eNPS Score" }, before: "20", after: "65", change: "+225%" }
        ],
        timeline: { en: "12 months (Boost + Accelerate)", de: "12 Monate (Boost + Accelerate)" }
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: { en: "Need to scale hiring 3x without 3x recruiting team", de: "Musste Hiring 3x skalieren ohne 3x Recruiting-Team" },
        solution: { en: "All 5 components with focus on AI-powered recruiting and AI performance management across the organization", de: "Alle 5 Komponenten mit Fokus auf AI-gestütztes Recruiting und AI Performance Management im gesamten Unternehmen" },
        results: [
          { metric: { en: "Time-to-Hire", de: "Time-to-Hire" }, before: "90 days", after: "20 days", change: "-78%" },
          { metric: { en: "Hiring Volume", de: "Hiring-Volumen" }, before: "50/year", after: "150/year", change: "+200%" },
          { metric: { en: "Recruiting Team", de: "Recruiting-Team" }, before: "10", after: "12", change: "+20%" },
          { metric: { en: "Talent Efficiency", de: "Talent-Effizienz" }, before: "5/recruiter", after: "12.5/recruiter", change: "+150%" }
        ],
        timeline: { en: "18 months (Accelerate × 2)", de: "18 Monate (Accelerate × 2)" }
      }
    ]
  },
  solutionsConnection: {
    title: { en: "How We Can Help", de: "Wie wir helfen können" },
    subtitle: { 
      en: "Choose the right engagement model for your timeline and budget", 
      de: "Wähle das richtige Engagement-Modell für deine Timeline und dein Budget" 
    },
    items: [
      {
        type: "assessment",
        name: { en: "Talent Assessment", de: "Talent Assessment" },
        duration: { en: "2-3 Days", de: "2-3 Tage" },
        price: { en: "€2.5K-€10K", de: "€2.5K-€10K" },
        outcome: { en: "Full talent maturity report + 90-day roadmap", de: "Vollständiger Talent-Maturity-Report + 90-Tage-Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/scaling-readiness-assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Talent Sprint", de: "Talent Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "Fix one talent component with measurable results", de: "Eine Talent-Komponente mit messbaren Ergebnissen verbessern" },
        cta: { en: "Start Sprint", de: "Sprint starten" },
        link: "/solutions/power-up/scaling-velocity",
        icon: "Zap",
        color: "bg-violet-500/10 text-violet-500"
      },
      {
        type: "boost",
        name: { en: "Talent Excellence", de: "Talent Excellence" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Transform 2-3 talent components with AI integration", de: "2-3 Talent-Komponenten mit AI-Integration transformieren" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/scaling-os",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "AI-Native Talent", de: "AI-Native Talent" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full talent transformation, AI Maturity Level 3, Time-to-Hire -60%, Retention +30-50pp", de: "Vollständige Talent-Transformation, AI Maturity Level 3, Time-to-Hire -60%, Retention +30-50pp" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/hypergrowth",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ]
  },
  whoThisIsFor: {
    title: { en: "Who Should Use This Playbook?", de: "Wer sollte dieses Playbook nutzen?" },
    subtitle: { 
      en: "This playbook is designed for leaders who need to scale their talent operations", 
      de: "Dieses Playbook ist für Führungskräfte konzipiert, die ihre Talent-Operations skalieren müssen" 
    },
    icp: { 
      en: "Series A-C SaaS companies with 30-300 employees looking to build world-class talent systems", 
      de: "Series A-C SaaS Unternehmen mit 30-300 Mitarbeitern, die Weltklasse-Talent-Systeme aufbauen wollen" 
    },
    personas: [
      {
        icon: "Crown",
        role: { en: "CEOs", de: "CEOs" },
        pain: { en: "Need to scale hiring without scaling recruiting team", de: "Müssen Hiring skalieren ohne das Recruiting-Team zu skalieren" },
        outcome: { en: "3x hiring velocity with 1.2x team size", de: "3x Hiring-Geschwindigkeit mit 1,2x Teamgröße" },
        color: "violet"
      },
      {
        icon: "Settings",
        role: { en: "COOs", de: "COOs" },
        pain: { en: "Responsible for talent operations and retention", de: "Verantwortlich für Talent-Operations und Retention" },
        outcome: { en: "95% retention rate, -70% onboarding time", de: "95% Retention Rate, -70% Onboarding-Zeit" },
        color: "blue"
      },
      {
        icon: "Users",
        role: { en: "CHROs / HR Leaders", de: "CHROs / HR-Leiter" },
        pain: { en: "Need to build world-class talent systems", de: "Müssen Weltklasse-Talent-Systeme aufbauen" },
        outcome: { en: "AI-powered talent operations at scale", de: "AI-gestützte Talent-Operations in großem Maßstab" },
        color: "green"
      },
      {
        icon: "UserPlus",
        role: { en: "Hiring Managers", de: "Hiring Manager" },
        pain: { en: "Need to hire faster and onboard better", de: "Müssen schneller einstellen und besser onboarden" },
        outcome: { en: "30-day hiring, 6-week onboarding", de: "30-Tage-Hiring, 6-Wochen-Onboarding" },
        color: "amber"
      }
    ]
  },
  finalCta: {
    headline: { en: "Get Started Today", de: "Starte noch heute" },
    subline: { 
      en: "Download the playbook or book a call to discuss your talent strategy", 
      de: "Lade das Playbook herunter oder buche einen Call, um deine Talent-Strategie zu besprechen" 
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
