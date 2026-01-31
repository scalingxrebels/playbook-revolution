import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('operating-systems/finance')!;

export const financeData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Finance · Operating Systems", de: "Finance · Operating Systems" },
    title: "Finance Playbook",
    subtitle: { 
      en: "How to build finance systems that scale with AI", 
      de: "Wie du Finanzsysteme aufbaust, die mit AI skalieren" 
    },
    description: { 
      en: "Traditional finance is reactive. Companies hire more finance managers, manually build spreadsheets, and still see forecasts being wrong and board meetings becoming painful. AI-native companies use a different playbook. They leverage the 5-component framework to improve Rule of 40 by 20-40pp, increase forecast accuracy from 60% to 95%, and reduce financial close time from 10 days to 2 days.", 
      de: "Traditionelle Finanzabteilungen sind reaktiv. Unternehmen stellen mehr Finance Manager ein, bauen manuell Spreadsheets, und trotzdem sind Forecasts falsch und Board-Meetings schmerzhaft. AI-native Unternehmen nutzen ein anderes Playbook. Sie nutzen das 5-Komponenten-Framework, um Rule of 40 um 20-40pp zu verbessern, Forecast-Genauigkeit von 60% auf 95% zu steigern und Financial Close Zeit von 10 auf 2 Tage zu reduzieren." 
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    gradient: "from-emerald-500 to-green-500"
  },
  summary: {
    problem: { 
      title: { en: "Problem", de: "Problem" }, 
      text: { 
        en: "70% of companies don't track unit economics. Finance teams spend 60-80% of time on manual data entry. Forecast accuracy averages only 60%.", 
        de: "70% der Unternehmen tracken keine Unit Economics. Finance-Teams verbringen 60-80% ihrer Zeit mit manueller Dateneingabe. Forecast-Genauigkeit liegt durchschnittlich bei nur 60%." 
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Financial clarity enables investor confidence, better decisions, and strategic agility. Without it, you're flying blind.", 
        de: "Finanzielle Klarheit ermöglicht Investorenvertrauen, bessere Entscheidungen und strategische Agilität. Ohne sie fliegst du blind." 
      } 
    },
    solution: { 
      title: { en: "Solution", de: "Lösung" }, 
      text: { 
        en: "5-component framework: Unit Economics, FP&A Systems, Scenario Planning, Financial Reporting, AI-Powered Finance", 
        de: "5-Komponenten-Framework: Unit Economics, FP&A Systeme, Szenarioplanung, Financial Reporting, AI-Powered Finance" 
      } 
    }
  },
  problem: { 
    title: { en: "Why Traditional Finance is Broken", de: "Warum traditionelle Finance nicht funktioniert" }, 
    subtitle: { 
      en: "The symptoms holding you back", 
      de: "Die Symptome, die dich zurückhalten" 
    }, 
    bullets: [
      { text: { en: "Unit Economics Unknown: 70% of companies don't track CAC, LTV, Payback Period", de: "Unit Economics unbekannt: 70% der Unternehmen tracken nicht CAC, LTV, Payback Period" } },
      { text: { en: "Manual FP&A: Finance teams spend 60-80% of time on manual data entry", de: "Manuelle FP&A: Finance-Teams verbringen 60-80% der Zeit mit manueller Dateneingabe" } },
      { text: { en: "Forecast Accuracy: Average forecast accuracy is 60% (vs. 95% for AI-native)", de: "Forecast-Genauigkeit: Durchschnittliche Genauigkeit ist 60% (vs. 95% bei AI-native)" } },
      { text: { en: "Financial Close: Average close time is 10 days (vs. 2 days for AI-native)", de: "Financial Close: Durchschnittliche Close-Zeit ist 10 Tage (vs. 2 Tage bei AI-native)" } }
    ], 
    metrics: [
      { label: { en: "Unit Economics Tracking", de: "Unit Economics Tracking" }, value: "30%", trend: "down" },
      { label: { en: "Manual FP&A Work", de: "Manuelle FP&A-Arbeit" }, value: "60-80%", trend: "up" },
      { label: { en: "Forecast Accuracy", de: "Forecast-Genauigkeit" }, value: "60%", trend: "down" },
      { label: { en: "Financial Close", de: "Financial Close" }, value: "10 days", trend: "up" }
    ] 
  },
  framework: { 
    title: { en: "The 5-Component Framework", de: "Das 5-Komponenten-Framework" }, 
    subtitle: { 
      en: "How AI-native companies build finance systems that scale", 
      de: "Wie AI-native Unternehmen Finanzsysteme aufbauen, die skalieren" 
    }, 
    items: [
      {
        id: "unit-economics",
        icon: "Calculator",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "Unit Economics & Profitability", de: "Unit Economics & Profitabilität" },
        subtitle: { en: "Track and optimize the economics of your business", de: "Tracke und optimiere die Economics deines Unternehmens" },
        description: { en: "You can't scale what you don't measure. AI-powered unit economics tracks CAC, LTV, Payback, and Rule of 40 in real-time.", de: "Du kannst nicht skalieren, was du nicht misst. AI-powered Unit Economics trackt CAC, LTV, Payback und Rule of 40 in Echtzeit." },
        metrics: [
          { label: { en: "Rule of 40", de: "Rule of 40" }, value: "+20-40pp" },
          { label: { en: "CAC Payback", de: "CAC Payback" }, value: "-30-50%" }
        ],
        actions: [
          { en: "Unit Economics Framework (CAC, LTV, Payback, Rule of 40)", de: "Unit Economics Framework (CAC, LTV, Payback, Rule of 40)" },
          { en: "Cohort Analysis (Track cohorts, identify trends)", de: "Kohortenanalyse (Tracke Kohorten, identifiziere Trends)" },
          { en: "Profitability Modeling (Gross Margin, EBITDA)", de: "Profitabilitätsmodellierung (Gross Margin, EBITDA)" },
          { en: "Pricing Optimization (Willingness-to-Pay)", de: "Pricing-Optimierung (Zahlungsbereitschaft)" },
          { en: "AI-Powered Unit Economics (Predictive LTV)", de: "AI-Powered Unit Economics (Predictive LTV)" }
        ]
      },
      {
        id: "fpa-systems",
        icon: "BarChart3",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "FP&A Systems & Forecasting", de: "FP&A Systeme & Forecasting" },
        subtitle: { en: "Build systems for planning, budgeting, and forecasting", de: "Baue Systeme für Planung, Budgetierung und Forecasting" },
        description: { en: "Manual spreadsheets don't scale. Modern FP&A platforms enable rolling forecasts, auto-reforecasting, and real-time variance analysis.", de: "Manuelle Spreadsheets skalieren nicht. Moderne FP&A-Plattformen ermöglichen Rolling Forecasts, Auto-Reforecasting und Echtzeit-Varianzanalyse." },
        metrics: [
          { label: { en: "Forecast Accuracy", de: "Forecast-Genauigkeit" }, value: "+30-50pp" },
          { label: { en: "Planning Time", de: "Planungszeit" }, value: "-60-80%" }
        ],
        actions: [
          { en: "FP&A Infrastructure (3-Statement Model)", de: "FP&A-Infrastruktur (3-Statement-Modell)" },
          { en: "Forecasting Models (Revenue, Expenses, Cash)", de: "Forecasting-Modelle (Revenue, Expenses, Cash)" },
          { en: "Budgeting Process (Rolling Forecasts)", de: "Budgetierungsprozess (Rolling Forecasts)" },
          { en: "Financial Planning (Resource Allocation)", de: "Finanzplanung (Ressourcenallokation)" },
          { en: "AI-Powered Forecasting (Predictive Models)", de: "AI-Powered Forecasting (Predictive Models)" }
        ]
      },
      {
        id: "scenario-planning",
        icon: "GitBranch",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Scenario Planning & Modeling", de: "Szenarioplanung & Modellierung" },
        subtitle: { en: "Model different scenarios and their financial impact", de: "Modelliere verschiedene Szenarien und ihre finanziellen Auswirkungen" },
        description: { en: "You need to plan for multiple futures. AI-powered scenario planning enables Monte Carlo simulations and sensitivity analysis.", de: "Du musst für mehrere Zukünfte planen. AI-powered Szenarioplanung ermöglicht Monte Carlo Simulationen und Sensitivitätsanalyse." },
        metrics: [
          { label: { en: "Strategic Clarity", de: "Strategische Klarheit" }, value: "+100%" },
          { label: { en: "Risk Mitigation", de: "Risikominderung" }, value: "+50-70%" }
        ],
        actions: [
          { en: "Scenario Design (Best/Base/Worst Case)", de: "Szenario-Design (Best/Base/Worst Case)" },
          { en: "Sensitivity Analysis (What-If Analysis)", de: "Sensitivitätsanalyse (What-If-Analyse)" },
          { en: "Strategic Planning (5-Year Plan, M&A)", de: "Strategische Planung (5-Jahres-Plan, M&A)" },
          { en: "Risk Modeling (Downside Scenarios)", de: "Risikomodellierung (Downside Scenarios)" },
          { en: "AI-Powered Scenarios (Monte Carlo)", de: "AI-Powered Scenarios (Monte Carlo)" }
        ]
      },
      {
        id: "financial-reporting",
        icon: "FileText",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        title: { en: "Financial Reporting & Analytics", de: "Financial Reporting & Analytics" },
        subtitle: { en: "Real-time visibility into financial performance", de: "Echtzeit-Sichtbarkeit in finanzielle Performance" },
        description: { en: "You can't manage what you don't see. Automated reporting reduces board prep time by 80%+ and enables real-time decision making.", de: "Du kannst nicht managen, was du nicht siehst. Automatisiertes Reporting reduziert Board-Vorbereitungszeit um 80%+ und ermöglicht Echtzeit-Entscheidungen." },
        metrics: [
          { label: { en: "Reporting Time", de: "Reporting-Zeit" }, value: "-70-90%" },
          { label: { en: "Decision Velocity", de: "Entscheidungsgeschwindigkeit" }, value: "+100-200%" }
        ],
        actions: [
          { en: "Financial Dashboards (Real-time KPIs)", de: "Finanz-Dashboards (Echtzeit-KPIs)" },
          { en: "Management Reporting (Monthly P&L)", de: "Management-Reporting (Monatliche P&L)" },
          { en: "Board Reporting (Automated Decks)", de: "Board-Reporting (Automatisierte Decks)" },
          { en: "Compliance Reporting (GAAP/IFRS)", de: "Compliance-Reporting (GAAP/IFRS)" },
          { en: "AI-Powered Reporting (Anomaly Detection)", de: "AI-Powered Reporting (Anomalie-Erkennung)" }
        ]
      },
      {
        id: "ai-powered-finance",
        icon: "Sparkles",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "AI-Powered Finance", de: "AI-Powered Finance" },
        subtitle: { en: "AI that continuously optimizes financial operations", de: "AI, die kontinuierlich Finanzoperationen optimiert" },
        description: { en: "Manual finance means falling behind. AI forecasting, anomaly detection, and decision intelligence multiply your finance team's impact.", de: "Manuelle Finance bedeutet Rückstand. AI Forecasting, Anomalie-Erkennung und Decision Intelligence multiplizieren den Impact deines Finance-Teams." },
        metrics: [
          { label: { en: "Forecast Accuracy", de: "Forecast-Genauigkeit" }, value: "+30-50pp" },
          { label: { en: "Finance Productivity", de: "Finance-Produktivität" }, value: "+200-400%" }
        ],
        actions: [
          { en: "AI Financial Forecasting (Predictive)", de: "AI Financial Forecasting (Predictive)" },
          { en: "AI Anomaly Detection (Fraud, Errors)", de: "AI Anomalie-Erkennung (Betrug, Fehler)" },
          { en: "AI Financial Planning (Optimization)", de: "AI Finanzplanung (Optimierung)" },
          { en: "AI Scenario Analysis (Monte Carlo)", de: "AI Szenarioanalyse (Monte Carlo)" },
          { en: "AI Financial Intelligence (NL Queries)", de: "AI Financial Intelligence (NL Queries)" }
        ]
      }
    ] 
  },
  bestPractices: { 
    title: { en: "Best Practices", de: "Best Practices" }, 
    categories: [] 
  },
  roadmap: { 
    title: { en: "How to Implement (90-Day Roadmap)", de: "Wie implementieren (90-Tage-Roadmap)" }, 
    subtitle: { 
      en: "From chaos to financial clarity in 12 weeks", 
      de: "Von Chaos zu finanzieller Klarheit in 12 Wochen" 
    }, 
    phases: [
      {
        phase: 1,
        title: { en: "Strategy", de: "Strategie" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Assess current state, define unit economics, design FP&A systems", de: "Bewerte aktuellen Stand, definiere Unit Economics, designe FP&A-Systeme" },
        deliverables: [
          { en: "Unit Economics Framework (CAC, LTV, Payback, Rule of 40)", de: "Unit Economics Framework (CAC, LTV, Payback, Rule of 40)" },
          { en: "FP&A System Design (3-statement model)", de: "FP&A System Design (3-Statement-Modell)" },
          { en: "Scenario Planning Framework (3-5 scenarios)", de: "Szenarioplanung Framework (3-5 Szenarien)" },
          { en: "Finance Strategy Deck (5-page summary)", de: "Finance Strategy Deck (5-Seiten-Zusammenfassung)" }
        ],
        gradient: "from-violet-500 to-purple-500"
      },
      {
        phase: 2,
        title: { en: "Setup", de: "Setup" },
        timeline: { en: "Week 3-4", de: "Woche 3-4" },
        focus: { en: "Build FP&A systems, deploy tools, create dashboards", de: "Baue FP&A-Systeme, deploye Tools, erstelle Dashboards" },
        deliverables: [
          { en: "3-Statement Model (P&L, Balance Sheet, Cash Flow)", de: "3-Statement-Modell (P&L, Bilanz, Cash Flow)" },
          { en: "Forecasting Models (Revenue, expenses, cash)", de: "Forecasting-Modelle (Revenue, Expenses, Cash)" },
          { en: "Scenario Models (3-5 scenarios modeled)", de: "Szenario-Modelle (3-5 Szenarien modelliert)" },
          { en: "Financial Dashboards (Real-time KPIs)", de: "Finanz-Dashboards (Echtzeit-KPIs)" }
        ],
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        phase: 3,
        title: { en: "Execution", de: "Execution" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { en: "Roll out systems, monitor accuracy, optimize forecasts", de: "Rolle Systeme aus, überwache Genauigkeit, optimiere Forecasts" },
        deliverables: [
          { en: "Unit Economics Tracking (Real-time dashboard)", de: "Unit Economics Tracking (Echtzeit-Dashboard)" },
          { en: "FP&A Process (Monthly forecasts, variance analysis)", de: "FP&A-Prozess (Monatliche Forecasts, Varianzanalyse)" },
          { en: "Scenario Updates (Quarterly refresh)", de: "Szenario-Updates (Quartals-Refresh)" },
          { en: "Financial Reporting (Automated board reports)", de: "Financial Reporting (Automatisierte Board-Reports)" }
        ],
        gradient: "from-emerald-500 to-green-500"
      }
    ] 
  },
  caseStudies: { 
    title: { en: "Real-World Results", de: "Echte Ergebnisse" }, 
    subtitle: { 
      en: "How 3 companies transformed their finance systems with the 5-component framework", 
      de: "Wie 3 Unternehmen ihre Finanzsysteme mit dem 5-Komponenten-Framework transformiert haben" 
    }, 
    cases: [
      {
        company: { en: "Series A SaaS Company", de: "Series A SaaS Unternehmen" },
        problem: { en: "Unit economics unknown, no FP&A systems, board pressure for financial clarity", de: "Unit Economics unbekannt, keine FP&A-Systeme, Board-Druck für finanzielle Klarheit" },
        solution: { en: "Applied all 5 components: Unit economics tracking, 3-statement model, 3 scenarios, real-time dashboard, AI forecasting", de: "Alle 5 Komponenten angewendet: Unit Economics Tracking, 3-Statement-Modell, 3 Szenarien, Echtzeit-Dashboard, AI Forecasting" },
        results: [
          { metric: { en: "Rule of 40", de: "Rule of 40" }, before: "15%", after: "45%", change: "+30pp" },
          { metric: { en: "CAC Payback", de: "CAC Payback" }, before: "18 months", after: "9 months", change: "-50%" },
          { metric: { en: "Forecast Accuracy", de: "Forecast-Genauigkeit" }, before: "60%", after: "88%", change: "+47%" },
          { metric: { en: "Financial Close", de: "Financial Close" }, before: "10 days", after: "3 days", change: "-70%" }
        ],
        timeline: { en: "6 months | Power Up + Boost", de: "6 Monate | Power Up + Boost" }
      },
      {
        company: { en: "Series B SaaS Company", de: "Series B SaaS Unternehmen" },
        problem: { en: "Manual FP&A, forecast accuracy 65%, slow financial close taking 12 days", de: "Manuelle FP&A, Forecast-Genauigkeit 65%, langsamer Financial Close von 12 Tagen" },
        solution: { en: "Focus on FP&A Systems + AI Finance: Mosaic deployment, rolling forecasts, AI forecasting + anomaly detection", de: "Fokus auf FP&A-Systeme + AI Finance: Mosaic-Deployment, Rolling Forecasts, AI Forecasting + Anomalie-Erkennung" },
        results: [
          { metric: { en: "Forecast Accuracy", de: "Forecast-Genauigkeit" }, before: "65%", after: "95%", change: "+46%" },
          { metric: { en: "Financial Close", de: "Financial Close" }, before: "12 days", after: "2 days", change: "-83%" },
          { metric: { en: "FP&A Productivity", de: "FP&A-Produktivität" }, before: "1x", after: "4x", change: "+300%" },
          { metric: { en: "Board Prep Time", de: "Board-Vorbereitungszeit" }, before: "60 hours", after: "6 hours", change: "-90%" }
        ],
        timeline: { en: "12 months | Boost + Accelerate", de: "12 Monate | Boost + Accelerate" }
      },
      {
        company: { en: "Series C Company", de: "Series C Unternehmen" },
        problem: { en: "Need to scale finance 5x without 5x team, manual processes slowing growth", de: "Finance muss 5x skalieren ohne 5x Team, manuelle Prozesse bremsen Wachstum" },
        solution: { en: "Full 5-component implementation with AI forecasting + anomaly detection + financial intelligence", de: "Vollständige 5-Komponenten-Implementierung mit AI Forecasting + Anomalie-Erkennung + Financial Intelligence" },
        results: [
          { metric: { en: "Finance Team", de: "Finance-Team" }, before: "15 FTEs", after: "18 FTEs", change: "+20%" },
          { metric: { en: "Cost Saved", de: "Gesparte Kosten" }, before: "€0", after: "€3M/year", change: "+€3M" },
          { metric: { en: "Forecast Accuracy", de: "Forecast-Genauigkeit" }, before: "70%", after: "94%", change: "+34%" },
          { metric: { en: "Decision Velocity", de: "Entscheidungsgeschwindigkeit" }, before: "5 days", after: "2 hours", change: "+99%" }
        ],
        timeline: { en: "18 months | Accelerate x2", de: "18 Monate | Accelerate x2" }
      }
    ] 
  },
  solutionsConnection: { 
    title: { en: "Ready to Execute?", de: "Bereit zur Umsetzung?" }, 
    subtitle: { 
      en: "Choose the right engagement model for your timeline and budget", 
      de: "Wähle das richtige Engagement-Modell für deinen Zeitplan und Budget" 
    }, 
    items: [
      {
        type: "assessment",
        name: { en: "Finance Assessment", de: "Finance Assessment" },
        duration: { en: "2-3 Days", de: "2-3 Tage" },
        price: { en: "€2.5K-€10K", de: "€2.5K-€10K" },
        outcome: { en: "Full finance maturity report + 90-day roadmap", de: "Vollständiger Finance-Maturity-Report + 90-Tage-Roadmap" },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Finance Sprint", de: "Finance Sprint" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "€23.6K-€45.9K", de: "€23.6K-€45.9K" },
        outcome: { en: "Rule of 40 +15-25pp, Forecast Accuracy +20-30pp", de: "Rule of 40 +15-25pp, Forecast-Genauigkeit +20-30pp" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/scaling-velocity",
        icon: "Zap",
        color: "bg-orange-500/10 text-orange-500"
      },
      {
        type: "boost",
        name: { en: "Finance Excellence", de: "Finance Excellence" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€60K-€78K", de: "€60K-€78K" },
        outcome: { en: "Rule of 40 +20-40pp, Forecast Accuracy +30-50pp", de: "Rule of 40 +20-40pp, Forecast-Genauigkeit +30-50pp" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/scaling-os",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "AI-Native Finance", de: "AI-Native Finance" },
        duration: { en: "12 Months", de: "12 Monate" },
        price: { en: "€153K", de: "€153K" },
        outcome: { en: "Full finance transformation, AI Maturity Level 3, Rule of 40 +15-30pp, Burn -40%", de: "Vollständige Finance-Transformation, AI Maturity Level 3, Rule of 40 +15-30pp, Burn -40%" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ] 
  },
  whoThisIsFor: { 
    title: { en: "Who Should Use This Playbook?", de: "Wer sollte dieses Playbook nutzen?" }, 
    subtitle: { 
      en: "This playbook is designed for scaling companies that need financial excellence", 
      de: "Dieses Playbook ist für skalierende Unternehmen, die finanzielle Exzellenz brauchen" 
    }, 
    icp: { 
      en: "Series A-C SaaS companies (€5M-€100M ARR) seeking financial clarity and investor confidence", 
      de: "Series A-C SaaS-Unternehmen (€5M-€100M ARR), die finanzielle Klarheit und Investorenvertrauen suchen" 
    }, 
    personas: [
      { 
        icon: "User",
        role: { en: "CEOs", de: "CEOs" }, 
        pain: { en: "Need financial clarity and investor confidence for strategic decisions", de: "Brauchen finanzielle Klarheit und Investorenvertrauen für strategische Entscheidungen" },
        outcome: { en: "Real-time visibility, confident board meetings, strategic agility", de: "Echtzeit-Sichtbarkeit, sichere Board-Meetings, strategische Agilität" },
        color: "green"
      },
      { 
        icon: "DollarSign",
        role: { en: "CFOs", de: "CFOs" }, 
        pain: { en: "Responsible for financial planning, reporting, and investor relations", de: "Verantwortlich für Finanzplanung, Reporting und Investor Relations" },
        outcome: { en: "Automated reporting, 95% forecast accuracy, investor confidence", de: "Automatisiertes Reporting, 95% Forecast-Genauigkeit, Investorenvertrauen" },
        color: "blue"
      },
      { 
        icon: "Settings",
        role: { en: "COOs", de: "COOs" }, 
        pain: { en: "Need to understand unit economics and profitability to optimize operations", de: "Müssen Unit Economics und Profitabilität verstehen um Operations zu optimieren" },
        outcome: { en: "Clear unit economics, profitability insights, operational efficiency", de: "Klare Unit Economics, Profitabilitäts-Insights, operative Effizienz" },
        color: "violet"
      },
      { 
        icon: "Shield",
        role: { en: "Board Members", de: "Board-Mitglieder" }, 
        pain: { en: "Need accurate forecasts and strategic scenarios for governance decisions", de: "Brauchen genaue Forecasts und strategische Szenarien für Governance-Entscheidungen" },
        outcome: { en: "Accurate forecasts, multiple scenarios, informed decisions", de: "Genaue Forecasts, mehrere Szenarien, informierte Entscheidungen" },
        color: "amber"
      }
    ] 
  },
  finalCta: { 
    headline: { en: "Get Started Today", de: "Starte noch heute" }, 
    subline: { 
      en: "Transform your finance systems from chaos to clarity in 90 days", 
      de: "Transformiere deine Finanzsysteme von Chaos zu Klarheit in 90 Tagen" 
    }, 
    trustSignals: [
      { en: "50-page playbook with templates", de: "50-Seiten-Playbook mit Templates" },
      { en: "3 real-world case studies", de: "3 echte Case Studies" },
      { en: "90-day implementation roadmap", de: "90-Tage-Implementierungs-Roadmap" }
    ], 
    bookingUrl: "https://scalingx.fillout.com/inflection-call", 
    downloadUrl: "#" 
  }
};
