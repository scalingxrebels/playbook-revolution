import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('portfolio/portfolio-excellence')!;

export const portfolioExcellenceData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Portfolio Excellence · Portfolio", de: "Portfolio Excellence · Portfolio" },
    title: "Portfolio Excellence Playbook",
    subtitle: { 
      en: "How to transform portfolio companies systematically and achieve 3-5x value increase", 
      de: "Wie du Portfolio-Unternehmen systematisch transformierst und 3-5x Wertsteigerung erreichst" 
    },
    description: { 
      en: "Most VC/PE firms struggle with portfolio transformation because they lack a systematic framework. They invest in companies one at a time but don't have a standardized approach to assess, prioritize, and transform the entire portfolio.\n\nThis playbook teaches you the 5-component framework used by top-tier VCs/PEs to transform 10-30 portfolio companies systematically, improve portfolio IRR from 15% to 40%+, and achieve faster exits.\n\nYou'll learn how to assess portfolio maturity across all companies, prioritize which companies to transform first, create a standardized transformation playbook, execute transformations at scale (3-5 companies simultaneously), and measure progress with Portfolio Maturity Levels.", 
      de: "Die meisten VC/PE-Firmen kämpfen mit Portfolio-Transformation, weil ihnen ein systematisches Framework fehlt. Sie investieren in Unternehmen einzeln, haben aber keinen standardisierten Ansatz, um das gesamte Portfolio zu bewerten, priorisieren und transformieren.\n\nDieses Playbook lehrt dich das 5-Komponenten-Framework, das Top-Tier VCs/PEs nutzen, um 10-30 Portfolio-Unternehmen systematisch zu transformieren, Portfolio-IRR von 15% auf 40%+ zu verbessern und schnellere Exits zu erzielen.\n\nDu lernst, wie du Portfolio-Maturity über alle Unternehmen bewertest, priorisierst welche Unternehmen zuerst transformiert werden, ein standardisiertes Transformations-Playbook erstellst, Transformationen skaliert ausführst (3-5 Unternehmen gleichzeitig) und Fortschritt mit Portfolio Maturity Levels misst." 
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    assetId: "playbook-portfolio-excellence",
    gradient: "from-purple-500 to-indigo-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "70% of portfolio companies underperform. Portfolio valuation is 30-50% below potential. Value creation is ad-hoc and reactive. No systematic approach to assess, prioritize, and transform.", 
        de: "70% der Portfolio-Unternehmen underperformen. Portfolio-Bewertungen liegen 30-50% unter dem Potenzial. Wertschöpfung ist ad-hoc und reaktiv. Kein systematischer Ansatz zum Bewerten, Priorisieren und Transformieren." 
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Portfolio excellence is the foundation for top-quartile LP returns. Without systematic portfolio management, you leave 30-50% of value on the table.", 
        de: "Portfolio-Exzellenz ist die Grundlage für Top-Quartil LP-Returns. Ohne systematisches Portfolio-Management lässt du 30-50% des Wertes liegen." 
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The 5-component framework: Portfolio Assessment, Company Prioritization, Transformation Playbook, Coordinated Execution, and Progress Measurement.", 
        de: "Das 5-Komponenten-Framework: Portfolio Assessment, Company Prioritization, Transformation Playbook, Coordinated Execution und Progress Measurement." 
      } 
    }
  },
  problem: {
    title: { en: "Why Most VC/PE Firms Struggle with Portfolio Excellence", de: "Warum die meisten VC/PE-Firmen mit Portfolio Excellence kämpfen" },
    subtitle: { 
      en: "The gap between traditional and systematic portfolio management is widening", 
      de: "Die Kluft zwischen traditionellem und systematischem Portfolio-Management wird größer" 
    },
    bullets: [
      { text: { en: "No Systematic Framework: Ad-hoc investments, no coordination, reactive problem-solving", de: "Kein systematisches Framework: Ad-hoc Investments, keine Koordination, reaktives Problem-Solving" }, icon: "AlertCircle" },
      { text: { en: "Poor Prioritization: Don't know which companies to transform first, diluted resources", de: "Schlechte Priorisierung: Wissen nicht welche Unternehmen zuerst transformieren, verwässerte Ressourcen" }, icon: "Target" },
      { text: { en: "No Progress Measurement: Quarterly board meetings, no real-time data, no visibility", de: "Keine Fortschrittsmessung: Quartalsweise Board-Meetings, keine Echtzeit-Daten, keine Sichtbarkeit" }, icon: "BarChart3" },
      { text: { en: "Manual Operations: Portfolio operations don't scale, team overwhelmed", de: "Manuelle Operations: Portfolio-Operations skalieren nicht, Team überlastet" }, icon: "Settings" }
    ],
    metrics: [
      { label: { en: "Companies Underperforming", de: "Unternehmen mit Underperformance" }, value: "70%", trend: "down" },
      { label: { en: "Valuation Gap", de: "Bewertungslücke" }, value: "30-50%", trend: "up" },
      { label: { en: "Value Creation", de: "Wertschöpfung" }, value: "Ad-hoc", trend: "down" },
      { label: { en: "Operations", de: "Operations" }, value: "Manual", trend: "down" }
    ]
  },
  framework: {
    title: { en: "The Portfolio Excellence Framework", de: "Das Portfolio Excellence Framework" },
    subtitle: { 
      en: "A 5-component framework to transform portfolio companies systematically", 
      de: "Ein 5-Komponenten-Framework zur systematischen Transformation von Portfolio-Unternehmen" 
    },
    items: [
      {
        id: "portfolio-assessment",
        icon: "ClipboardCheck",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        title: { en: "Portfolio Assessment", de: "Portfolio Assessment" },
        subtitle: { en: "2-4 Weeks", de: "2-4 Wochen" },
        description: { 
          en: "Assess maturity across all portfolio companies using 4 capabilities (Strategy, Setup, Execution, Operationalization). Create portfolio maturity map and identify bottlenecks.", 
          de: "Bewerte Maturity über alle Portfolio-Unternehmen mit 4 Capabilities (Strategy, Setup, Execution, Operationalization). Erstelle Portfolio Maturity Map und identifiziere Bottlenecks." 
        },
        metrics: [
          { label: { en: "Portfolio Visibility", de: "Portfolio-Sichtbarkeit" }, value: "+100%" },
          { label: { en: "Assessment Time", de: "Assessment-Zeit" }, value: "2-4 Weeks" }
        ],
        actions: [
          { en: "Define assessment framework (4 capabilities)", de: "Assessment-Framework definieren (4 Capabilities)" },
          { en: "Assess each company (Strategy, Setup, Execution, Operationalization)", de: "Jedes Unternehmen bewerten (Strategy, Setup, Execution, Operationalization)" },
          { en: "Create portfolio maturity map", de: "Portfolio Maturity Map erstellen" },
          { en: "Identify bottlenecks and opportunities", de: "Bottlenecks und Opportunities identifizieren" }
        ]
      },
      {
        id: "company-prioritization",
        icon: "Target",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        title: { en: "Company Prioritization", de: "Company Prioritization" },
        subtitle: { en: "1-2 Weeks", de: "1-2 Wochen" },
        description: { 
          en: "Prioritize which companies to transform first. Score by potential impact, readiness, and strategic importance. Focus on Top 10-15 companies.", 
          de: "Priorisiere welche Unternehmen zuerst transformiert werden. Score nach potenziellem Impact, Readiness und strategischer Wichtigkeit. Fokus auf Top 10-15 Unternehmen." 
        },
        metrics: [
          { label: { en: "Focus", de: "Fokus" }, value: "Top 10-15" },
          { label: { en: "Value Coverage", de: "Wertabdeckung" }, value: "70-80%" }
        ],
        actions: [
          { en: "Define prioritization criteria (impact, readiness, strategic importance)", de: "Priorisierungskriterien definieren (Impact, Readiness, strategische Wichtigkeit)" },
          { en: "Score each company", de: "Jedes Unternehmen scoren" },
          { en: "Create prioritization matrix (Impact × Readiness)", de: "Priorisierungsmatrix erstellen (Impact × Readiness)" },
          { en: "Select Top 10-15 companies for transformation", de: "Top 10-15 Unternehmen für Transformation auswählen" }
        ]
      },
      {
        id: "transformation-playbook",
        icon: "BookOpen",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        title: { en: "Transformation Playbook", de: "Transformation Playbook" },
        subtitle: { en: "2-4 Weeks", de: "2-4 Wochen" },
        description: { 
          en: "Create standardized transformation playbook. Define process, milestones, deliverables, and resources. Reusable across all portfolio companies.", 
          de: "Standardisiertes Transformations-Playbook erstellen. Prozess, Meilensteine, Deliverables und Ressourcen definieren. Wiederverwendbar über alle Portfolio-Unternehmen." 
        },
        metrics: [
          { label: { en: "Playbook Length", de: "Playbook-Länge" }, value: "50-100 Pages" },
          { label: { en: "Standardization", de: "Standardisierung" }, value: "High" }
        ],
        actions: [
          { en: "Define transformation process (step-by-step)", de: "Transformations-Prozess definieren (Schritt für Schritt)" },
          { en: "Create playbook template", de: "Playbook-Template erstellen" },
          { en: "Define milestones and deliverables (30/60/90 days)", de: "Meilensteine und Deliverables definieren (30/60/90 Tage)" },
          { en: "Allocate resources (team, budget, timeline)", de: "Ressourcen zuweisen (Team, Budget, Timeline)" }
        ]
      },
      {
        id: "coordinated-execution",
        icon: "Zap",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Coordinated Execution", de: "Coordinated Execution" },
        subtitle: { en: "90 Days per Company", de: "90 Tage pro Unternehmen" },
        description: { 
          en: "Transform 3-5 companies simultaneously using standardized playbook. Share resources across companies. Coordinate execution for maximum efficiency.", 
          de: "3-5 Unternehmen gleichzeitig transformieren mit standardisiertem Playbook. Ressourcen über Unternehmen teilen. Execution für maximale Effizienz koordinieren." 
        },
        metrics: [
          { label: { en: "Parallel Transformations", de: "Parallele Transformationen" }, value: "3-5" },
          { label: { en: "Success Rate", de: "Erfolgsrate" }, value: "70-80%" }
        ],
        actions: [
          { en: "Select first cohort (3-5 companies)", de: "Erste Kohorte auswählen (3-5 Unternehmen)" },
          { en: "Kick-off transformation (Week 1)", de: "Transformation Kick-off (Woche 1)" },
          { en: "Execute 90-day transformation (Week 2-13)", de: "90-Tage-Transformation ausführen (Woche 2-13)" },
          { en: "Review results and iterate (Week 14)", de: "Ergebnisse reviewen und iterieren (Woche 14)" }
        ]
      },
      {
        id: "progress-measurement",
        icon: "TrendingUp",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "Progress Measurement", de: "Progress Measurement" },
        subtitle: { en: "Ongoing", de: "Fortlaufend" },
        description: { 
          en: "Track portfolio transformation progress with monthly company assessments, quarterly portfolio reviews, and annual strategy updates.", 
          de: "Portfolio-Transformations-Fortschritt tracken mit monatlichen Company Assessments, quartalsweisen Portfolio Reviews und jährlichen Strategie-Updates." 
        },
        metrics: [
          { label: { en: "Assessment Frequency", de: "Assessment-Frequenz" }, value: "Monthly" },
          { label: { en: "Dashboard", de: "Dashboard" }, value: "Real-time" }
        ],
        actions: [
          { en: "Monthly: Assess each company (Portfolio Maturity, AI Maturity)", de: "Monatlich: Jedes Unternehmen bewerten (Portfolio Maturity, AI Maturity)" },
          { en: "Quarterly: Review portfolio performance (IRR, ARR, Valuations)", de: "Quartalsweise: Portfolio-Performance reviewen (IRR, ARR, Valuations)" },
          { en: "Annually: Update portfolio strategy (priorities, roadmap)", de: "Jährlich: Portfolio-Strategie updaten (Prioritäten, Roadmap)" },
          { en: "Ongoing: Continuous improvement (playbook, processes)", de: "Fortlaufend: Continuous Improvement (Playbook, Prozesse)" }
        ]
      }
    ]
  },
  bestPractices: {
    title: { en: "Best Practices", de: "Best Practices" },
    categories: [
      {
        category: { en: "Assessment", de: "Assessment" },
        items: [
          { do: { en: "Score all portfolio companies with Portfolio Maturity within first 30 days", de: "Alle Portfolio-Unternehmen mit Portfolio Maturity innerhalb der ersten 30 Tage scoren" }, dont: { en: "Wait for quarterly reviews to assess companies", de: "Auf quartalsweise Reviews warten, um Unternehmen zu bewerten" } },
          { do: { en: "Benchmark against best-in-class to identify gaps", de: "Mit Best-in-Class benchmarken, um Gaps zu identifizieren" }, dont: { en: "Compare only within your portfolio", de: "Nur innerhalb des eigenen Portfolios vergleichen" } },
          { do: { en: "Prioritize by potential (high potential + low maturity = high priority)", de: "Nach Potenzial priorisieren (hohes Potenzial + niedrige Maturity = hohe Priorität)" }, dont: { en: "Spread resources evenly across all companies", de: "Ressourcen gleichmäßig über alle Unternehmen verteilen" } }
        ]
      },
      {
        category: { en: "Transformation", de: "Transformation" },
        items: [
          { do: { en: "Create company-specific value creation plans with clear KPIs", de: "Unternehmens-spezifische Value Creation Plans mit klaren KPIs erstellen" }, dont: { en: "Use one-size-fits-all transformation approaches", de: "One-size-fits-all Transformationsansätze verwenden" } },
          { do: { en: "Deploy portfolio playbooks for consistency across companies", de: "Portfolio Playbooks für Konsistenz über alle Unternehmen einsetzen" }, dont: { en: "Let each company reinvent the wheel", de: "Jedes Unternehmen das Rad neu erfinden lassen" } },
          { do: { en: "Track progress monthly, adjust quarterly", de: "Fortschritt monatlich tracken, quartalsweise anpassen" }, dont: { en: "Set-and-forget transformation plans", de: "Set-and-Forget Transformationspläne" } }
        ]
      },
      {
        category: { en: "Execution", de: "Execution" },
        items: [
          { do: { en: "Transform 3-5 companies simultaneously for shared learnings", de: "3-5 Unternehmen gleichzeitig transformieren für geteilte Learnings" }, dont: { en: "Transform companies one at a time", de: "Unternehmen einzeln transformieren" } },
          { do: { en: "Use standardized playbook for consistency and speed", de: "Standardisiertes Playbook für Konsistenz und Geschwindigkeit nutzen" }, dont: { en: "Create custom approaches for each company", de: "Individuelle Ansätze für jedes Unternehmen erstellen" } },
          { do: { en: "Share resources across cohort companies", de: "Ressourcen über Kohorten-Unternehmen teilen" }, dont: { en: "Assign dedicated resources per company", de: "Dedizierte Ressourcen pro Unternehmen zuweisen" } }
        ]
      }
    ]
  },
  roadmap: {
    title: { en: "How to Implement (90-Day Roadmap)", de: "Wie du implementierst (90-Tage-Roadmap)" },
    subtitle: { 
      en: "A phased approach to portfolio excellence", 
      de: "Ein phasenbasierter Ansatz für Portfolio-Exzellenz" 
    },
    phases: [
      {
        phase: 1,
        title: { en: "Assessment & Prioritization", de: "Assessment & Priorisierung" },
        timeline: { en: "Week 1-4", de: "Woche 1-4" },
        focus: { 
          en: "Assess all portfolio companies, score with Portfolio Maturity, prioritize Top 10-15", 
          de: "Alle Portfolio-Unternehmen bewerten, mit Portfolio Maturity scoren, Top 10-15 priorisieren" 
        },
        deliverables: [
          { en: "Portfolio Assessment (Maturity scores for all companies)", de: "Portfolio Assessment (Maturity Scores für alle Unternehmen)" },
          { en: "Portfolio Benchmarking (Compare to best-in-class)", de: "Portfolio Benchmarking (Mit Best-in-Class vergleichen)" },
          { en: "Prioritization Matrix (Impact × Readiness)", de: "Priorisierungsmatrix (Impact × Readiness)" },
          { en: "Top 10-15 Companies List (Focus for transformation)", de: "Top 10-15 Unternehmen-Liste (Fokus für Transformation)" }
        ],
        gradient: "from-cyan-500 to-blue-500"
      },
      {
        phase: 2,
        title: { en: "Playbook & Planning", de: "Playbook & Planung" },
        timeline: { en: "Week 5-8", de: "Woche 5-8" },
        focus: { 
          en: "Create transformation playbook, define process, allocate resources", 
          de: "Transformations-Playbook erstellen, Prozess definieren, Ressourcen zuweisen" 
        },
        deliverables: [
          { en: "Transformation Playbook (50-100 pages)", de: "Transformations-Playbook (50-100 Seiten)" },
          { en: "Milestone Framework (30/60/90 days)", de: "Meilenstein-Framework (30/60/90 Tage)" },
          { en: "Resource Allocation Plan (Team, budget, timeline)", de: "Ressourcen-Allokationsplan (Team, Budget, Timeline)" },
          { en: "First Cohort Selection (3-5 companies)", de: "Erste Kohorten-Auswahl (3-5 Unternehmen)" }
        ],
        gradient: "from-purple-500 to-violet-500"
      },
      {
        phase: 3,
        title: { en: "Execution & Measurement", de: "Execution & Messung" },
        timeline: { en: "Week 9-12+", de: "Woche 9-12+" },
        focus: { 
          en: "Execute first cohort transformation, track progress, iterate", 
          de: "Erste Kohorten-Transformation ausführen, Fortschritt tracken, iterieren" 
        },
        deliverables: [
          { en: "First Cohort Transformation (3-5 companies, 90 days)", de: "Erste Kohorten-Transformation (3-5 Unternehmen, 90 Tage)" },
          { en: "Portfolio Dashboard (Real-time metrics)", de: "Portfolio Dashboard (Echtzeit-Metriken)" },
          { en: "Monthly Progress Reports (Per company)", de: "Monatliche Fortschrittsberichte (Pro Unternehmen)" },
          { en: "Lessons Learned & Playbook Updates", de: "Lessons Learned & Playbook-Updates" }
        ],
        gradient: "from-pink-500 to-rose-500"
      }
    ]
  },
  caseStudies: {
    title: { en: "Real-World Results", de: "Echte Ergebnisse" },
    subtitle: { 
      en: "How 3 VCs/PEs transformed their portfolio performance with the 5-component framework", 
      de: "Wie 3 VCs/PEs ihre Portfolio-Performance mit dem 5-Komponenten-Framework transformiert haben" 
    },
    cases: [
      {
        company: { en: "Series B/C VC Firm - Portfolio Quick Fix", de: "Series B/C VC Firma - Portfolio Quick Fix" },
        problem: { 
          en: "Portfolio of 15 Series B/C SaaS companies with low portfolio maturity, no systematic approach, and IRR of only 18%.", 
          de: "Portfolio von 15 Series B/C SaaS Unternehmen mit niedriger Portfolio Maturity, keinem systematischen Ansatz und IRR von nur 18%." 
        },
        solution: { 
          en: "Deployed Portfolio Excellence Framework for Top 5 companies over 6 months: Assessment, Prioritization, Playbook, Execution, Measurement.", 
          de: "Portfolio Excellence Framework für Top 5 Unternehmen über 6 Monate eingesetzt: Assessment, Priorisierung, Playbook, Execution, Measurement." 
        },
        results: [
          { metric: { en: "Portfolio Maturity", de: "Portfolio Maturity" }, before: "Low", after: "Medium", change: "+2 Levels" },
          { metric: { en: "AI Maturity", de: "AI Maturity" }, before: "Level 1", after: "Level 2", change: "+1 Level" },
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "18%", after: "28%", change: "+56%" },
          { metric: { en: "Portfolio Value", de: "Portfolio-Wert" }, before: "€200M", after: "€250M", change: "+25%" }
        ],
        timeline: { en: "6 months | Portfolio Quick Fix (€50K-€150K)", de: "6 Monate | Portfolio Quick Fix (€50K-€150K)" }
      },
      {
        company: { en: "Series A-C VC Firm - Portfolio Transformation", de: "Series A-C VC Firma - Portfolio Transformation" },
        problem: { 
          en: "Portfolio of 25 Series A-C companies with low AI maturity, no portfolio-wide strategy, and IRR of 15%.", 
          de: "Portfolio von 25 Series A-C Unternehmen mit niedriger AI Maturity, keiner portfolio-weiten Strategie und IRR von 15%." 
        },
        solution: { 
          en: "Full Portfolio Excellence Framework for Top 15 companies over 18 months: 3 cohorts of 5 companies each.", 
          de: "Volles Portfolio Excellence Framework für Top 15 Unternehmen über 18 Monate: 3 Kohorten mit je 5 Unternehmen." 
        },
        results: [
          { metric: { en: "Portfolio Maturity", de: "Portfolio Maturity" }, before: "Low", after: "High", change: "+3 Levels" },
          { metric: { en: "AI Maturity", de: "AI Maturity" }, before: "Level 1", after: "Level 2-3", change: "+1-2 Levels" },
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "15%", after: "35%", change: "+133%" },
          { metric: { en: "Portfolio Value", de: "Portfolio-Wert" }, before: "€500M", after: "€700M", change: "+40%" }
        ],
        timeline: { en: "18 months | Portfolio Transformation (€200K-€500K)", de: "18 Monate | Portfolio Transformation (€200K-€500K)" }
      },
      {
        company: { en: "Multi-Stage PE Firm - AI-Native Portfolio", de: "Multi-Stage PE Firma - AI-Native Portfolio" },
        problem: { 
          en: "Portfolio of 30 companies with no AI integration, slow transformation, and IRR of 20%.", 
          de: "Portfolio von 30 Unternehmen ohne AI-Integration, langsamer Transformation und IRR von 20%." 
        },
        solution: { 
          en: "Full AI-Native transformation for all 30 companies over 24 months: 6 cohorts of 5 companies each.", 
          de: "Volle AI-Native Transformation für alle 30 Unternehmen über 24 Monate: 6 Kohorten mit je 5 Unternehmen." 
        },
        results: [
          { metric: { en: "Portfolio Maturity", de: "Portfolio Maturity" }, before: "Low", after: "High", change: "+3 Levels" },
          { metric: { en: "AI Maturity", de: "AI Maturity" }, before: "Level 1", after: "Level 3", change: "+2 Levels" },
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "20%", after: "45%", change: "+125%" },
          { metric: { en: "Portfolio Value", de: "Portfolio-Wert" }, before: "€1B", after: "€1.5B", change: "+50%" }
        ],
        timeline: { en: "24 months | AI-Native Portfolio (€350K-€720K)", de: "24 Monate | AI-Native Portfolio (€350K-€720K)" }
      }
    ]
  },
  solutionsConnection: {
    title: { en: "How We Can Help", de: "Wie wir helfen können" },
    subtitle: { 
      en: "Choose the right engagement model for your portfolio size and timeline", 
      de: "Wähle das richtige Engagement-Modell für deine Portfolio-Größe und Timeline" 
    },
    items: [
      {
        type: "assessment",
        name: { en: "Portfolio Assessment", de: "Portfolio Assessment" },
        duration: { en: "2-4 Weeks", de: "2-4 Wochen" },
        price: { en: "€10K-€25K", de: "€10K-€25K" },
        outcome: { 
          en: "Full portfolio assessment across all companies. Portfolio maturity scoring, bottleneck identification, transformation roadmap.", 
          de: "Volles Portfolio Assessment über alle Unternehmen. Portfolio Maturity Scoring, Bottleneck-Identifikation, Transformations-Roadmap." 
        },
        cta: { en: "Book Assessment", de: "Assessment buchen" },
        link: "/solutions/portfolio-assessment",
        icon: "ClipboardCheck",
        color: "bg-emerald-500/10 text-emerald-500"
      },
      {
        type: "power-up",
        name: { en: "Portfolio Quick Fix", de: "Portfolio Quick Fix" },
        duration: { en: "6 Months", de: "6 Monate" },
        price: { en: "€50K-€150K", de: "€50K-€150K" },
        outcome: { 
          en: "Transform Top 5 portfolio companies in 6 months. Focused transformation, standardized playbook, measurable results.", 
          de: "Top 5 Portfolio-Unternehmen in 6 Monaten transformieren. Fokussierte Transformation, standardisiertes Playbook, messbare Ergebnisse." 
        },
        cta: { en: "Start Quick Fix", de: "Quick Fix starten" },
        link: "/solutions/boost/portfolio-value",
        icon: "Zap",
        color: "bg-orange-500/10 text-orange-500"
      },
      {
        type: "boost",
        name: { en: "Portfolio Transformation", de: "Portfolio Transformation" },
        duration: { en: "12-18 Months", de: "12-18 Monate" },
        price: { en: "€200K-€500K", de: "€200K-€500K" },
        outcome: { 
          en: "Transform Top 10-15 portfolio companies. Full transformation with all 5 components, AI integration, systematic improvement.", 
          de: "Top 10-15 Portfolio-Unternehmen transformieren. Volle Transformation mit allen 5 Komponenten, AI-Integration, systematische Verbesserung." 
        },
        cta: { en: "Start Transformation", de: "Transformation starten" },
        link: "/solutions/accelerate/portfolio-transformation",
        icon: "Rocket",
        color: "bg-blue-500/10 text-blue-500"
      },
      {
        type: "accelerate",
        name: { en: "AI-Native Portfolio", de: "AI-Native Portfolio" },
        duration: { en: "24 Months", de: "24 Monate" },
        price: { en: "€350K-€720K", de: "€350K-€720K" },
        outcome: { 
          en: "Full AI-native transformation for all portfolio companies. 24-month program, all companies reach AI Maturity Level 3.", 
          de: "Volle AI-native Transformation für alle Portfolio-Unternehmen. 24-Monats-Programm, alle Unternehmen erreichen AI Maturity Level 3." 
        },
        cta: { en: "Start AI-Native", de: "AI-Native starten" },
        link: "/solutions/accelerate/ai-native-scaling",
        icon: "TrendingUp",
        color: "bg-violet-500/10 text-violet-500"
      }
    ]
  },
  whoThisIsFor: {
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" },
    subtitle: { 
      en: "This playbook is designed for VCs, PEs, and portfolio teams", 
      de: "Dieses Playbook ist für VCs, PEs und Portfolio-Teams konzipiert" 
    },
    icp: { 
      en: "VCs and PEs with 10+ portfolio companies seeking to maximize portfolio value and LP returns", 
      de: "VCs und PEs mit 10+ Portfolio-Unternehmen, die Portfolio-Wert und LP-Returns maximieren wollen" 
    },
    personas: [
      {
        icon: "TrendingUp",
        role: { en: "VC Partners", de: "VC-Partner" },
        pain: { en: "Portfolio companies underperforming against benchmarks", de: "Portfolio-Unternehmen underperformen gegen Benchmarks" },
        outcome: { en: "Top-quartile LP returns with systematic portfolio excellence", de: "Top-Quartil LP-Returns mit systematischer Portfolio-Exzellenz" },
        color: "green"
      },
      {
        icon: "Briefcase",
        role: { en: "PE Partners", de: "PE-Partner" },
        pain: { en: "Need to increase IRR for LP commitments", de: "Müssen IRR für LP-Commitments steigern" },
        outcome: { en: "Portfolio IRR +100-150% with systematic transformation", de: "Portfolio IRR +100-150% mit systematischer Transformation" },
        color: "purple"
      },
      {
        icon: "Users",
        role: { en: "Operating Partners", de: "Operating Partners" },
        pain: { en: "No standardized approach to portfolio transformation", de: "Kein standardisierter Ansatz für Portfolio-Transformation" },
        outcome: { en: "Reusable playbook for consistent results across companies", de: "Wiederverwendbares Playbook für konsistente Ergebnisse über Unternehmen" },
        color: "blue"
      },
      {
        icon: "Settings",
        role: { en: "Portfolio Managers", de: "Portfolio-Manager" },
        pain: { en: "Manual portfolio operations don't scale", de: "Manuelle Portfolio-Operations skalieren nicht" },
        outcome: { en: "3-5x portfolio with 1.25x team using standardized processes", de: "3-5x Portfolio mit 1.25x Team durch standardisierte Prozesse" },
        color: "violet"
      }
    ]
  },
  finalCta: {
    headline: { en: "Ready to Transform Your Portfolio?", de: "Bereit dein Portfolio zu transformieren?" },
    subline: { 
      en: "Start with a Portfolio Assessment to identify your portfolio-wide bottlenecks and create a transformation roadmap", 
      de: "Starte mit einem Portfolio Assessment, um deine portfolio-weiten Bottlenecks zu identifizieren und eine Transformations-Roadmap zu erstellen" 
    },
    trustSignals: [
      { en: "Full portfolio assessment (all companies)", de: "Volles Portfolio Assessment (alle Unternehmen)" },
      { en: "Portfolio maturity scoring", de: "Portfolio Maturity Scoring" },
      { en: "12-24 month transformation roadmap", de: "12-24 Monats-Transformations-Roadmap" }
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#"
  }
};
