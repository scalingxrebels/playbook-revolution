import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('portfolio-transformation')!;

export const portfolioTransformationData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Portfolio Transformation · Domain Playbook", de: "Portfolio Transformation · Domain Playbook" },
    title: "AI-Native Portfolio Transformation Playbook",
    subtitle: { 
      en: "How to transform entire portfolios to AI-native at scale", 
      de: "Wie du ganze Portfolios auf AI-native Skalierung transformierst" 
    },
    description: { 
      en: "Traditional portfolio management is broken. VCs/PEs rely on manual portfolio operations (5-7 days per company per quarter), reactive value creation, and fragmented portfolio intelligence. The result? Low portfolio IRR (15% vs. 40%+ for AI-native), 60-80% portfolio companies underperforming, and missed exit opportunities. They can't scale portfolio value creation without proportional overhead.\n\nAI-native VCs/PEs use a different playbook. They leverage the Portfolio Transformation Framework (Portfolio Excellence × AI × Scale) to transform 10-30 companies simultaneously, achieve 3-5x portfolio value increase, and improve portfolio IRR from 15% to 40%+. They scale portfolio operations superlinearly: Portfolio Value >>> Overhead.\n\nThis playbook gives you the complete framework used by top-tier VCs/PEs to build world-class portfolio operations. Learn from 1 detailed sub-playbook, implementation guides, and real-world case studies.", 
      de: "Traditionelles Portfolio-Management ist kaputt. VCs/PEs verlassen sich auf manuelle Portfolio-Operationen (5-7 Tage pro Unternehmen pro Quartal), reaktive Wertschöpfung und fragmentierte Portfolio-Intelligence. Das Ergebnis? Niedriger Portfolio-IRR (15% vs. 40%+ für AI-native), 60-80% der Portfolio-Unternehmen underperformen, und verpasste Exit-Möglichkeiten. Sie können Portfolio-Wertschöpfung nicht ohne proportionalen Overhead skalieren.\n\nAI-native VCs/PEs nutzen ein anderes Playbook. Sie nutzen das Portfolio Transformation Framework (Portfolio Excellence × AI × Scale), um 10-30 Unternehmen gleichzeitig zu transformieren, 3-5x Portfolio-Wertsteigerung zu erzielen und Portfolio-IRR von 15% auf 40%+ zu verbessern. Sie skalieren Portfolio-Operationen superlinear: Portfolio Value >>> Overhead.\n\nDieses Playbook gibt dir das komplette Framework, das Top-Tier VCs/PEs nutzen, um erstklassige Portfolio-Operationen aufzubauen. Lerne von 1 detaillierten Sub-Playbook, Implementierungsguides und echten Case Studies." 
    },
    trustBadges: [
      { en: "~3,000 Words", de: "~3.000 Wörter" },
      { en: "1 Sub-Playbook", de: "1 Sub-Playbook" },
      { en: "3 Case Studies", de: "3 Case Studies" },
      { en: "90-Day Roadmap", de: "90-Tage-Roadmap" },
    ],
    bookingUrl: "https://scalingx.fillout.com/inflection-call",
    downloadUrl: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  summary: {
    problem: { 
      title: { en: "The Problem", de: "Das Problem" }, 
      text: { 
        en: "Low Portfolio IRR (15% vs. 40%+), portfolio underperformance (60-80%), manual operations (5-7 days/company/quarter), reactive value creation (70-90%).", 
        de: "Niedriger Portfolio-IRR (15% vs. 40%+), Portfolio-Underperformance (60-80%), manuelle Operationen (5-7 Tage/Unternehmen/Quartal), reaktive Wertschöpfung (70-90%)." 
      } 
    },
    whyItMatters: { 
      title: { en: "Why It Matters", de: "Warum es wichtig ist" }, 
      text: { 
        en: "Portfolio Transformation is MULTIPLICATIVE (not additive). Portfolio Value = Portfolio Excellence × AI × Scale. Weak any component = bottleneck.", 
        de: "Portfolio Transformation ist MULTIPLIKATIV (nicht additiv). Portfolio Value = Portfolio Excellence × AI × Scale. Schwache Komponente = Engpass." 
      } 
    },
    solution: { 
      title: { en: "The Solution", de: "Die Lösung" }, 
      text: { 
        en: "The Portfolio Transformation Framework with 5 components (Intelligence, Value Creation, Operating Partner, Governance, AI-Powered Ops) to achieve 3-5x portfolio value.", 
        de: "Das Portfolio Transformation Framework mit 5 Komponenten (Intelligence, Value Creation, Operating Partner, Governance, AI-Powered Ops) für 3-5x Portfolio-Wertsteigerung." 
      } 
    }
  },
  problem: { 
    title: { en: "Why Traditional Portfolio Management is Broken", de: "Warum traditionelles Portfolio-Management kaputt ist" }, 
    subtitle: { 
      en: "The 4 critical failures holding back portfolio performance", 
      de: "Die 4 kritischen Fehler, die Portfolio-Performance zurückhalten" 
    }, 
    bullets: [
      { text: { en: "Low Portfolio IRR: 15% (vs. 40%+ for AI-native VCs/PEs)", de: "Niedriger Portfolio-IRR: 15% (vs. 40%+ für AI-native VCs/PEs)" }, icon: "TrendingDown" },
      { text: { en: "Portfolio Underperformance: 60-80% companies underperforming (vs. 20-40% for AI-native)", de: "Portfolio-Underperformance: 60-80% Unternehmen underperformen (vs. 20-40% für AI-native)" }, icon: "AlertTriangle" },
      { text: { en: "Manual Portfolio Operations: 5-7 days per company per quarter (vs. 1-2 days for AI-native)", de: "Manuelle Portfolio-Operationen: 5-7 Tage pro Unternehmen pro Quartal (vs. 1-2 Tage für AI-native)" }, icon: "Clock" },
      { text: { en: "Reactive Value Creation: 70-90% reactive (vs. 10-30% for AI-native)", de: "Reaktive Wertschöpfung: 70-90% reaktiv (vs. 10-30% für AI-native)" }, icon: "AlertCircle" },
    ], 
    metrics: [
      { label: { en: "Traditional IRR", de: "Traditioneller IRR" }, value: "15%", trend: "down" },
      { label: { en: "AI-Native IRR", de: "AI-Native IRR" }, value: "40%+", trend: "up" },
      { label: { en: "Underperformance", de: "Underperformance" }, value: "60-80%", trend: "down" },
      { label: { en: "Portfolio Value Increase", de: "Portfolio-Wertsteigerung" }, value: "3-5x", trend: "up" },
    ] 
  },
  framework: { 
    title: { en: "The Portfolio Transformation Framework", de: "Das Portfolio Transformation Framework" }, 
    subtitle: { 
      en: "How AI-native VCs/PEs build portfolio operations that scale superlinearly", 
      de: "Wie AI-native VCs/PEs Portfolio-Operationen aufbauen, die superlinear skalieren" 
    }, 
    items: [
      {
        id: "portfolio-intelligence",
        icon: "BarChart3",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        title: { en: "Portfolio Intelligence & Analytics", de: "Portfolio Intelligence & Analytics" },
        subtitle: { en: "Component 1 of 5", de: "Komponente 1 von 5" },
        description: { 
          en: "How you collect, analyze, and visualize portfolio data. Includes Portfolio Dashboard, Company Benchmarking, Performance Tracking, Risk Monitoring, AI-Powered Portfolio Analytics.", 
          de: "Wie du Portfolio-Daten sammelst, analysierst und visualisierst. Beinhaltet Portfolio Dashboard, Company Benchmarking, Performance Tracking, Risk Monitoring, AI-Powered Portfolio Analytics." 
        },
        metrics: [
          { label: { en: "Portfolio Visibility", de: "Portfolio Visibility" }, value: "+100%" },
          { label: { en: "Data Collection Time", de: "Datenerfassungszeit" }, value: "-80%" },
          { label: { en: "Risk Detection", de: "Risk Detection" }, value: "+70-90%" },
        ],
        actions: [
          { en: "Deploy portfolio dashboard", de: "Portfolio Dashboard deployen" },
          { en: "Implement company benchmarking", de: "Company Benchmarking implementieren" },
          { en: "Set up AI-powered analytics", de: "AI-powered Analytics einrichten" },
        ]
      },
      {
        id: "value-creation",
        icon: "Layers",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        title: { en: "Value Creation Playbooks", de: "Value Creation Playbooks" },
        subtitle: { en: "Component 2 of 5", de: "Komponente 2 von 5" },
        description: { 
          en: "How you systematically create value across portfolio companies. Includes Growth Playbooks, Operations Playbooks, Governance Playbooks, Exit Playbooks, AI-Powered Value Creation.", 
          de: "Wie du systematisch Wert über Portfolio-Unternehmen hinweg schaffst. Beinhaltet Growth Playbooks, Operations Playbooks, Governance Playbooks, Exit Playbooks, AI-Powered Value Creation." 
        },
        metrics: [
          { label: { en: "Value Creation Velocity", de: "Value Creation Velocity" }, value: "+3-5x" },
          { label: { en: "Playbook Adoption", de: "Playbook Adoption" }, value: "+100-300%" },
          { label: { en: "Portfolio Value", de: "Portfolio Value" }, value: "+3-5x" },
        ],
        actions: [
          { en: "Deploy growth playbooks", de: "Growth Playbooks deployen" },
          { en: "Implement AI value creation", de: "AI Value Creation implementieren" },
          { en: "Track playbook adoption", de: "Playbook Adoption tracken" },
        ]
      },
      {
        id: "operating-partner",
        icon: "Users",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        title: { en: "Operating Partner System", de: "Operating Partner System" },
        subtitle: { en: "Component 3 of 5", de: "Komponente 3 von 5" },
        description: { 
          en: "How you scale operating partner support across portfolio. Includes Operating Partner Network, Company Matching, Support Delivery, Impact Tracking, AI-Powered Operating Partner System.", 
          de: "Wie du Operating Partner Support über das Portfolio skalierst. Beinhaltet Operating Partner Network, Company Matching, Support Delivery, Impact Tracking, AI-Powered Operating Partner System." 
        },
        metrics: [
          { label: { en: "Operating Partner Efficiency", de: "Operating Partner Effizienz" }, value: "+2-5x" },
          { label: { en: "Company Coverage", de: "Company Coverage" }, value: "+100-300%" },
          { label: { en: "Support Quality", de: "Support Quality" }, value: "+50-100%" },
        ],
        actions: [
          { en: "Build operating partner network", de: "Operating Partner Network aufbauen" },
          { en: "Deploy AI company matching", de: "AI Company Matching deployen" },
          { en: "Track support impact", de: "Support Impact tracken" },
        ]
      },
      {
        id: "portfolio-governance",
        icon: "Shield",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
        title: { en: "Portfolio Governance", de: "Portfolio Governance" },
        subtitle: { en: "Component 4 of 5", de: "Komponente 4 von 5" },
        description: { 
          en: "How you govern portfolio companies at scale. Includes Board Intelligence, Portfolio Reporting, Risk Management, Compliance Monitoring, AI-Powered Portfolio Governance.", 
          de: "Wie du Portfolio-Unternehmen im großen Maßstab governst. Beinhaltet Board Intelligence, Portfolio Reporting, Risk Management, Compliance Monitoring, AI-Powered Portfolio Governance." 
        },
        metrics: [
          { label: { en: "Board Prep Time", de: "Board Prep Time" }, value: "-80%" },
          { label: { en: "Portfolio Reporting Time", de: "Portfolio Reporting Time" }, value: "-70%" },
          { label: { en: "Risk Detection", de: "Risk Detection" }, value: "+70-90%" },
        ],
        actions: [
          { en: "Deploy board intelligence", de: "Board Intelligence deployen" },
          { en: "Automate portfolio reporting", de: "Portfolio Reporting automatisieren" },
          { en: "Set up AI risk monitoring", de: "AI Risk Monitoring einrichten" },
        ]
      },
      {
        id: "ai-portfolio-ops",
        icon: "Zap",
        color: "text-fuchsia-500",
        bgColor: "bg-fuchsia-500/10",
        title: { en: "AI-Powered Portfolio Operations", de: "AI-Powered Portfolio Operations" },
        subtitle: { en: "Component 5 of 5", de: "Komponente 5 von 5" },
        description: { 
          en: "How you leverage AI to scale portfolio operations. Includes AI Portfolio Intelligence, AI Value Creation, AI Operating Partner Support, AI Portfolio Governance, AI-Native Portfolio Platform.", 
          de: "Wie du AI nutzt, um Portfolio-Operationen zu skalieren. Beinhaltet AI Portfolio Intelligence, AI Value Creation, AI Operating Partner Support, AI Portfolio Governance, AI-Native Portfolio Platform." 
        },
        metrics: [
          { label: { en: "Portfolio Operations Time", de: "Portfolio Operations Time" }, value: "-70-80%" },
          { label: { en: "Portfolio Value", de: "Portfolio Value" }, value: "+3-5x" },
          { label: { en: "Portfolio IRR", de: "Portfolio IRR" }, value: "+167%" },
        ],
        actions: [
          { en: "Deploy AI portfolio platform", de: "AI Portfolio Platform deployen" },
          { en: "Integrate all AI systems", de: "Alle AI-Systeme integrieren" },
          { en: "Achieve θ_index 0.8-1.0", de: "θ_index 0.8-1.0 erreichen" },
        ]
      },
    ] 
  },
  bestPractices: { 
    title: { en: "Best Practices", de: "Best Practices" }, 
    categories: [
      {
        category: { en: "Portfolio Intelligence", de: "Portfolio Intelligence" },
        items: [
          { do: { en: "Deploy real-time portfolio dashboards", de: "Real-time Portfolio Dashboards deployen" }, dont: { en: "Rely on quarterly manual reports", de: "Auf quartalsweise manuelle Reports verlassen" } },
          { do: { en: "Use AI-powered company benchmarking", de: "AI-powered Company Benchmarking nutzen" }, dont: { en: "Compare companies manually", de: "Unternehmen manuell vergleichen" } },
        ]
      },
      {
        category: { en: "Value Creation", de: "Value Creation" },
        items: [
          { do: { en: "Deploy standardized value creation playbooks", de: "Standardisierte Value Creation Playbooks deployen" }, dont: { en: "Create ad-hoc value creation plans", de: "Ad-hoc Value Creation Pläne erstellen" } },
          { do: { en: "Use AI to match playbooks to companies", de: "AI nutzen, um Playbooks zu Unternehmen zu matchen" }, dont: { en: "Apply same playbook to all companies", de: "Gleiches Playbook auf alle Unternehmen anwenden" } },
        ]
      },
    ] 
  },
  roadmap: { 
    title: { en: "90-Day Implementation Roadmap", de: "90-Tage Implementierungs-Roadmap" }, 
    subtitle: { 
      en: "From assessment to portfolio transformation in 12 weeks", 
      de: "Von der Bewertung zur Portfolio-Transformation in 12 Wochen" 
    }, 
    phases: [
      {
        phase: 1,
        title: { en: "Assessment", de: "Assessment" },
        timeline: { en: "Week 1-2", de: "Woche 1-2" },
        focus: { en: "Assess portfolio, identify top 5 companies for transformation, create roadmap", de: "Portfolio bewerten, Top 5 Unternehmen für Transformation identifizieren, Roadmap erstellen" },
        deliverables: [
          { en: "Portfolio Assessment (All companies scored on θ_index, performance, potential)", de: "Portfolio Assessment (Alle Unternehmen auf θ_index, Performance, Potential bewertet)" },
          { en: "Top 5 Companies Identified (Highest impact, highest potential)", de: "Top 5 Unternehmen identifiziert (Höchster Impact, höchstes Potential)" },
          { en: "Portfolio Transformation Roadmap (12-24 month roadmap)", de: "Portfolio Transformation Roadmap (12-24 Monate Roadmap)" },
          { en: "Quick Wins (3-5 quick wins per company)", de: "Quick Wins (3-5 Quick Wins pro Unternehmen)" },
        ],
        gradient: "from-purple-500 to-violet-500"
      },
      {
        phase: 2,
        title: { en: "Build", de: "Build" },
        timeline: { en: "Week 3-8", de: "Woche 3-8" },
        focus: { en: "Transform top 5 companies, build portfolio operations infrastructure", de: "Top 5 Unternehmen transformieren, Portfolio Operations Infrastruktur aufbauen" },
        deliverables: [
          { en: "Portfolio Intelligence & Analytics deployed", de: "Portfolio Intelligence & Analytics deployed" },
          { en: "Value Creation Playbooks implemented", de: "Value Creation Playbooks implementiert" },
          { en: "Operating Partner System built", de: "Operating Partner System aufgebaut" },
          { en: "AI Integration across all components", de: "AI Integration über alle Komponenten" },
        ],
        gradient: "from-violet-500 to-pink-500"
      },
      {
        phase: 3,
        title: { en: "Scale", de: "Scale" },
        timeline: { en: "Week 9-12", de: "Woche 9-12" },
        focus: { en: "Scale to all portfolio companies, optimize, continuous improvement", de: "Auf alle Portfolio-Unternehmen skalieren, optimieren, kontinuierliche Verbesserung" },
        deliverables: [
          { en: "Portfolio Scaling (Scale to all 10-30 companies)", de: "Portfolio Scaling (Auf alle 10-30 Unternehmen skalieren)" },
          { en: "Portfolio Optimization (Continuous improvement)", de: "Portfolio Optimization (Kontinuierliche Verbesserung)" },
          { en: "Portfolio Tracking (Monthly/quarterly reviews)", de: "Portfolio Tracking (Monatliche/quartalsweise Reviews)" },
          { en: "Portfolio Excellence (Maintain high performance)", de: "Portfolio Excellence (Hohe Performance aufrechterhalten)" },
        ],
        gradient: "from-pink-500 to-fuchsia-500"
      },
    ] 
  },
  caseStudies: { 
    title: { en: "Real-World Results", de: "Echte Ergebnisse" }, 
    subtitle: { 
      en: "How 3 VC/PE firms transformed their portfolios with the framework", 
      de: "Wie 3 VC/PE-Firmen ihre Portfolios mit dem Framework transformiert haben" 
    }, 
    cases: [
      {
        company: { en: "Series A-B VC Firm", de: "Series A-B VC Firm" },
        problem: { 
          en: "Portfolio underperformance (60% companies below plan), manual portfolio operations (7 days per company per quarter), need to improve portfolio IRR for fundraising.", 
          de: "Portfolio-Underperformance (60% Unternehmen unter Plan), manuelle Portfolio-Operationen (7 Tage pro Unternehmen pro Quartal), Portfolio-IRR für Fundraising verbessern." 
        },
        solution: { 
          en: "Deployed full Portfolio Excellence Stack: Portfolio Intelligence, Value Creation Playbooks, Operating Partner System, Portfolio Governance, AI Integration (θ_index 0.28 → 0.72).", 
          de: "Volles Portfolio Excellence Stack deployed: Portfolio Intelligence, Value Creation Playbooks, Operating Partner System, Portfolio Governance, AI Integration (θ_index 0.28 → 0.72)." 
        },
        results: [
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "15%", after: "35%", change: "+133%" },
          { metric: { en: "Portfolio Value", de: "Portfolio Value" }, before: "€500M", after: "€650M", change: "+€150M" },
          { metric: { en: "Operations Time", de: "Operations Time" }, before: "7 days", after: "1.5 days", change: "-79%" },
          { metric: { en: "Underperformance", de: "Underperformance" }, before: "60%", after: "30%", change: "-50%" },
        ],
        timeline: { en: "12 months | Portfolio Transformation (€360K-€500K)", de: "12 Monate | Portfolio Transformation (€360K-€500K)" }
      },
      {
        company: { en: "Series B-C VC Firm", de: "Series B-C VC Firm" },
        problem: { 
          en: "Need to improve portfolio IRR for Fund II fundraising, LP pressure, 25 portfolio companies with varying performance.", 
          de: "Portfolio-IRR für Fund II Fundraising verbessern, LP-Druck, 25 Portfolio-Unternehmen mit unterschiedlicher Performance." 
        },
        solution: { 
          en: "Full Portfolio Excellence Stack with focus on AI-native portfolio operations, full AI integration (θ_index 0.35 → 0.85), 18-month transformation.", 
          de: "Volles Portfolio Excellence Stack mit Fokus auf AI-native Portfolio Operations, volle AI Integration (θ_index 0.35 → 0.85), 18-Monate Transformation." 
        },
        results: [
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "18%", after: "42%", change: "+133%" },
          { metric: { en: "Portfolio Value", de: "Portfolio Value" }, before: "€1.2B", after: "€3.5B", change: "+192%" },
          { metric: { en: "Operations Time", de: "Operations Time" }, before: "6 days", after: "1 day", change: "-83%" },
          { metric: { en: "Fund II Size", de: "Fund II Größe" }, before: "€150M", after: "€300M", change: "+100%" },
        ],
        timeline: { en: "18 months | Portfolio Transformation × 1.5 (€500K-€720K)", de: "18 Monate | Portfolio Transformation × 1.5 (€500K-€720K)" }
      },
      {
        company: { en: "PE Firm (30 Companies)", de: "PE Firm (30 Unternehmen)" },
        problem: { 
          en: "Need to reach €3B portfolio value for exit, LP pressure, 30 portfolio companies with €1.5B total ARR.", 
          de: "€3B Portfolio-Wert für Exit erreichen, LP-Druck, 30 Portfolio-Unternehmen mit €1.5B Gesamt-ARR." 
        },
        solution: { 
          en: "All 5 components with comprehensive transformation, full AI-native Portfolio Excellence, AI integration (θ_index 0.42 → 0.92), 24-month transformation.", 
          de: "Alle 5 Komponenten mit umfassender Transformation, volle AI-native Portfolio Excellence, AI Integration (θ_index 0.42 → 0.92), 24-Monate Transformation." 
        },
        results: [
          { metric: { en: "Portfolio IRR", de: "Portfolio IRR" }, before: "20%", after: "45%", change: "+125%" },
          { metric: { en: "Portfolio Value", de: "Portfolio Value" }, before: "€2B", after: "€2.5B", change: "+€500M" },
          { metric: { en: "Operations Time", de: "Operations Time" }, before: "8 days", after: "1.5 days", change: "-81%" },
          { metric: { en: "Exit Readiness", de: "Exit Readiness" }, before: "40%", after: "100%", change: "+150%" },
        ],
        timeline: { en: "24 months | Portfolio Transformation × 2 (€720K-€1M)", de: "24 Monate | Portfolio Transformation × 2 (€720K-€1M)" }
      },
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
        type: "power-up",
        name: { en: "Portfolio Performance", de: "Portfolio Performance" },
        duration: { en: "30 Days", de: "30 Tage" },
        price: { en: "From €23.6K", de: "Ab €23.6K" },
        outcome: { en: "Portfolio Assessment, Top 5 Companies Identified, Transformation Roadmap", de: "Portfolio Assessment, Top 5 Unternehmen identifiziert, Transformation Roadmap" },
        cta: { en: "Start Power Up", de: "Power Up starten" },
        link: "/solutions/power-up/portfolio-performance",
        icon: "Zap",
        color: "orange"
      },
      {
        type: "boost",
        name: { en: "Portfolio Value", de: "Portfolio Value" },
        duration: { en: "90 Days", de: "90 Tage" },
        price: { en: "€200K-€500K", de: "€200K-€500K" },
        outcome: { en: "Top 5 Companies Transformed, Portfolio Operations Infrastructure, Portfolio Value +30-50%", de: "Top 5 Unternehmen transformiert, Portfolio Operations Infrastruktur, Portfolio Value +30-50%" },
        cta: { en: "Start Boost", de: "Boost starten" },
        link: "/solutions/boost/portfolio-value",
        icon: "Rocket",
        color: "purple"
      },
      {
        type: "accelerate",
        name: { en: "Portfolio Transformation", de: "Portfolio Transformation" },
        duration: { en: "12-24 Months", de: "12-24 Monate" },
        price: { en: "€360K-€720K", de: "€360K-€720K" },
        outcome: { en: "Full Portfolio Transformed (10-30 Companies), Portfolio IRR +20-30pp, Portfolio Value +3-5x", de: "Volles Portfolio transformiert (10-30 Unternehmen), Portfolio IRR +20-30pp, Portfolio Value +3-5x" },
        cta: { en: "Start Accelerate", de: "Accelerate starten" },
        link: "/solutions/accelerate/portfolio-transformation",
        icon: "TrendingUp",
        color: "violet"
      },
    ] 
  },
  whoThisIsFor: { 
    title: { en: "Who Should Use This Playbook?", de: "Für wen ist dieses Playbook?" }, 
    subtitle: { 
      en: "This playbook is designed for VC/PE professionals responsible for portfolio value creation", 
      de: "Dieses Playbook ist für VC/PE-Profis, die für Portfolio-Wertschöpfung verantwortlich sind" 
    }, 
    icp: { 
      en: "VC/PE firms with 10-30 portfolio companies seeking to improve portfolio IRR and value creation through AI-native transformation.", 
      de: "VC/PE-Firmen mit 10-30 Portfolio-Unternehmen, die Portfolio-IRR und Wertschöpfung durch AI-native Transformation verbessern wollen." 
    }, 
    personas: [
      {
        icon: "Briefcase",
        role: { en: "VC Partners", de: "VC Partners" },
        pain: { en: "Need to transform entire portfolio to AI-native and improve fund IRR", de: "Müssen gesamtes Portfolio auf AI-native transformieren und Fund IRR verbessern" },
        outcome: { en: "Portfolio IRR 40%+, 3-5x portfolio value increase", de: "Portfolio IRR 40%+, 3-5x Portfolio-Wertsteigerung" },
        color: "purple"
      },
      {
        icon: "Building2",
        role: { en: "PE Partners", de: "PE Partners" },
        pain: { en: "Responsible for portfolio value creation and exit readiness", de: "Verantwortlich für Portfolio-Wertschöpfung und Exit-Readiness" },
        outcome: { en: "Exit readiness 100%, portfolio value +€500M+", de: "Exit Readiness 100%, Portfolio Value +€500M+" },
        color: "violet"
      },
      {
        icon: "Crown",
        role: { en: "Managing Partners", de: "Managing Partners" },
        pain: { en: "Need to improve portfolio IRR for fundraising and LP satisfaction", de: "Müssen Portfolio-IRR für Fundraising und LP-Zufriedenheit verbessern" },
        outcome: { en: "Fund II 2x larger, LP satisfaction 95%+", de: "Fund II 2x größer, LP-Zufriedenheit 95%+" },
        color: "pink"
      },
      {
        icon: "Users",
        role: { en: "Operating Partners", de: "Operating Partners" },
        pain: { en: "Responsible for portfolio operations and support delivery", de: "Verantwortlich für Portfolio-Operationen und Support-Delivery" },
        outcome: { en: "Operating efficiency +2-5x, company coverage +100-300%", de: "Operating Effizienz +2-5x, Company Coverage +100-300%" },
        color: "fuchsia"
      },
    ] 
  },
  finalCta: { 
    headline: { en: "Get Started Today", de: "Starte heute" }, 
    subline: { 
      en: "Transform your portfolio to AI-native and achieve 3-5x value increase", 
      de: "Transformiere dein Portfolio auf AI-native und erreiche 3-5x Wertsteigerung" 
    }, 
    trustSignals: [
      { en: "50-page playbook", de: "50-Seiten Playbook" },
      { en: "1 detailed sub-playbook", de: "1 detailliertes Sub-Playbook" },
      { en: "3 case studies", de: "3 Case Studies" },
      { en: "90-day roadmap", de: "90-Tage-Roadmap" },
    ], 
    bookingUrl: "https://scalingx.fillout.com/inflection-call", 
    downloadUrl: "#" 
  },
  subPlaybooks: {
    title: { en: "Portfolio Excellence Sub-Playbook", de: "Portfolio Excellence Sub-Playbook" },
    subtitle: { 
      en: "Deep-dive into portfolio operations with detailed playbook", 
      de: "Deep-dive in Portfolio-Operationen mit detailliertem Playbook" 
    },
    items: [
      {
        id: 17,
        slug: "portfolio/excellence",
        title: { en: "Portfolio Excellence Playbook", de: "Portfolio Excellence Playbook" },
        teaser: { 
          en: "How to build portfolio operations that scale without chaos. Learn the 5 components (Portfolio Intelligence & Analytics, Value Creation Playbooks, Operating Partner System, Portfolio Governance, AI-Powered Portfolio Operations) used by top-tier VCs/PEs to transform 10-30 companies, achieve 3-5x portfolio value increase, and improve portfolio IRR from 15% to 40%+.", 
          de: "Wie du Portfolio-Operationen aufbaust, die ohne Chaos skalieren. Lerne die 5 Komponenten (Portfolio Intelligence & Analytics, Value Creation Playbooks, Operating Partner System, Portfolio Governance, AI-Powered Portfolio Operations), die Top-Tier VCs/PEs nutzen, um 10-30 Unternehmen zu transformieren, 3-5x Portfolio-Wertsteigerung zu erzielen und Portfolio-IRR von 15% auf 40%+ zu verbessern." 
        },
        icon: "Briefcase",
        color: "purple"
      },
    ]
  }
};
