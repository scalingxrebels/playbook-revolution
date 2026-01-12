import { LucideIcon, TrendingDown, TrendingUp, DollarSign, Users, Workflow, Bot, Building2, Briefcase, Compass } from 'lucide-react';

export type SolutionType = 'free' | 'diagnostic' | 'sprint' | 'transformation' | 'advisory';

export interface ChallengeSolution {
  id: string;
  type: SolutionType;
  nameEn: string;
  nameDe: string;
  duration: string;
  investment: string;
  impactEn: string;
  impactDe: string;
  whatWeDoEn: string[];
  whatWeDoDe: string[];
  guaranteeEn?: string;
  guaranteeDe?: string;
  roi?: string;
  relatedPlaybooks?: string[];
  relatedCases?: string[];
}

export interface Challenge {
  id: string;
  icon: LucideIcon;
  nameEn: string;
  nameDe: string;
  shortNameEn: string;
  shortNameDe: string;
  order: number;
  isDefault?: boolean;
  
  // Card content
  problemEn: string;
  problemDe: string;
  whyThisHappensHeadlineEn: string;
  whyThisHappensHeadlineDe: string;
  whyThisHappensEn: string[];
  whyThisHappensDe: string[];
  symptomsEn: string[];
  symptomsDe: string[];
  
  // CTA
  ctaTextEn: string;
  ctaTextDe: string;
  
  // Solutions
  solutions: ChallengeSolution[];
}

export const solutionTypeConfig: Record<SolutionType, { labelEn: string; labelDe: string; badge: string; colorClass: string }> = {
  free: {
    labelEn: 'Free',
    labelDe: 'Kostenlos',
    badge: 'Entry',
    colorClass: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'
  },
  diagnostic: {
    labelEn: 'Diagnostic',
    labelDe: 'Diagnose',
    badge: 'Core',
    colorClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
  },
  sprint: {
    labelEn: 'Sprint',
    labelDe: 'Sprint',
    badge: 'Premium',
    colorClass: 'bg-primary/10 text-primary border-primary/20'
  },
  transformation: {
    labelEn: 'Transformation',
    labelDe: 'Transformation',
    badge: 'Premium',
    colorClass: 'bg-accent/10 text-accent border-accent/20'
  },
  advisory: {
    labelEn: 'Advisory',
    labelDe: 'Beratung',
    badge: 'Core',
    colorClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
  }
};

export const challenges: Challenge[] = [
  {
    id: 'cac-crisis',
    icon: TrendingDown,
    nameEn: 'CAC Crisis',
    nameDe: 'CAC Crisis',
    shortNameEn: 'CAC',
    shortNameDe: 'CAC',
    order: 1,
    problemEn: 'Your customer acquisition costs are spiraling out of control, eating into margins and threatening sustainable growth.',
    problemDe: 'Deine Kundenakquisitionskosten steigen unkontrolliert, fressen Margen und gefährden nachhaltiges Wachstum.',
    whyThisHappensHeadlineEn: 'Your GTM strategy lacks focus and efficiency',
    whyThisHappensHeadlineDe: 'Deiner GTM-Strategie fehlt Fokus und Effizienz',
    whyThisHappensEn: [
      'Channel saturation without diversification strategy',
      'Weak positioning leads to expensive customer education',
      'Missing conversion optimization across the funnel'
    ],
    whyThisHappensDe: [
      'Kanalsättigung ohne Diversifikationsstrategie',
      'Schwache Positionierung führt zu teurer Kundenaufklärung',
      'Fehlende Conversion-Optimierung im gesamten Funnel'
    ],
    symptomsEn: [
      'CAC/LTV ratio below 1:3',
      'Rising cost per lead quarter over quarter',
      'Sales closing below 15%',
      'No clear attribution'
    ],
    symptomsDe: [
      'CAC/LTV-Verhältnis unter 1:3',
      'Steigende Cost-per-Lead von Quartal zu Quartal',
      'Sales schließt unter 15%',
      'Keine klare Attribution'
    ],
    ctaTextEn: 'Fix CAC',
    ctaTextDe: 'CAC fixen',
    solutions: [
      {
        id: 'cac-diagnostic',
        type: 'free',
        nameEn: 'CAC Diagnostic Call',
        nameDe: 'CAC Diagnostic Call',
        duration: '60 Min',
        investment: 'FREE',
        impactEn: 'Identify your #1 CAC lever',
        impactDe: 'Identifiziere deinen #1 CAC-Hebel',
        whatWeDoEn: ['Deep-dive into your acquisition channels', 'Benchmark against industry standards', 'Prioritized action roadmap'],
        whatWeDoDe: ['Deep-Dive in deine Akquisitionskanäle', 'Benchmark gegen Branchenstandards', 'Priorisierte Action-Roadmap'],
        guaranteeEn: 'Actionable insights or money back',
        guaranteeDe: 'Umsetzbare Insights oder Geld zurück'
      },
      {
        id: 'gtm-audit',
        type: 'diagnostic',
        nameEn: 'GTM Audit',
        nameDe: 'GTM Audit',
        duration: '5-7 Days',
        investment: '€3.9K-€5.9K',
        impactEn: 'Complete funnel analysis with fix roadmap',
        impactDe: 'Komplette Funnel-Analyse mit Fix-Roadmap',
        whatWeDoEn: ['Full-funnel audit', 'Channel efficiency scoring', 'CAC reduction playbook'],
        whatWeDoDe: ['Full-Funnel Audit', 'Kanal-Effizienz-Scoring', 'CAC-Reduktions-Playbook'],
        roi: '3-5x within 90 days',
        relatedPlaybooks: ['gtm-optimization']
      },
      {
        id: 'gtm-transformation',
        type: 'transformation',
        nameEn: 'GTM Transformation',
        nameDe: 'GTM Transformation',
        duration: '3-6 Months',
        investment: '€47K-€89K',
        impactEn: 'Rebuild acquisition engine for 40-60% CAC reduction',
        impactDe: 'Akquisitionsmaschine neu aufbauen für 40-60% CAC-Reduktion',
        whatWeDoEn: ['Channel strategy overhaul', 'Conversion optimization', 'Team enablement'],
        whatWeDoDe: ['Kanalstrategie-Überholung', 'Conversion-Optimierung', 'Team-Enablement'],
        guaranteeEn: 'Minimum 30% CAC reduction or extended engagement',
        guaranteeDe: 'Minimum 30% CAC-Reduktion oder verlängertes Engagement',
        roi: '15-25x over 12 months',
        relatedCases: ['b2b-saas-cac']
      }
    ]
  },
  {
    id: 'growth-stalled',
    icon: TrendingUp,
    nameEn: 'Growth Stalled',
    nameDe: 'Growth Stalled',
    shortNameEn: 'Growth',
    shortNameDe: 'Growth',
    order: 2,
    isDefault: true,
    problemEn: 'You hit a ceiling. What worked to get you here won\'t get you to the next level. Growth has plateaued despite increased effort.',
    problemDe: 'Du hast eine Decke erreicht. Was dich hierher gebracht hat, bringt dich nicht zum nächsten Level. Wachstum stagniert trotz erhöhtem Einsatz.',
    whyThisHappensHeadlineEn: 'Your growth engine needs a fundamental redesign',
    whyThisHappensHeadlineDe: 'Dein Wachstumsmotor braucht ein fundamentales Redesign',
    whyThisHappensEn: [
      'Market positioning no longer differentiates',
      'Operational bottlenecks limit scale capacity',
      'Go-to-market playbook exhausted for current stage'
    ],
    whyThisHappensDe: [
      'Marktpositionierung differenziert nicht mehr',
      'Operative Engpässe begrenzen Skalierungskapazität',
      'GTM-Playbook für aktuelle Phase erschöpft'
    ],
    symptomsEn: [
      'MoM growth below 5%',
      'Same efforts yield declining results',
      'Team morale dropping',
      'Board asking hard questions'
    ],
    symptomsDe: [
      'MoM-Wachstum unter 5%',
      'Gleicher Einsatz bringt sinkende Ergebnisse',
      'Team-Moral sinkt',
      'Board stellt harte Fragen'
    ],
    ctaTextEn: 'Unlock Growth',
    ctaTextDe: 'Wachstum freischalten',
    solutions: [
      {
        id: 'theta-assessment',
        type: 'free',
        nameEn: 'Theta Assessment',
        nameDe: 'Theta Assessment',
        duration: '30 Min',
        investment: 'FREE',
        impactEn: 'Identify your #1 growth bottleneck',
        impactDe: 'Identifiziere deinen #1 Wachstums-Engpass',
        whatWeDoEn: ['AI-powered diagnostic', '8-dimension analysis', 'Benchmark vs. peers'],
        whatWeDoDe: ['KI-gestützte Diagnose', '8-Dimensionen-Analyse', 'Benchmark vs. Peers'],
      },
      {
        id: 'growth-diagnostic',
        type: 'diagnostic',
        nameEn: 'Growth Diagnostic',
        nameDe: 'Growth Diagnostic',
        duration: '90 Min',
        investment: '€890',
        impactEn: 'Strategic clarity session with founder',
        impactDe: 'Strategische Klarheits-Session mit Founder',
        whatWeDoEn: ['Deep strategic review', 'Bottleneck identification', 'Action prioritization'],
        whatWeDoDe: ['Tiefe strategische Review', 'Engpass-Identifikation', 'Action-Priorisierung'],
        guaranteeEn: 'Clarity or refund',
        guaranteeDe: 'Klarheit oder Erstattung',
        relatedPlaybooks: ['growth-diagnostic']
      },
      {
        id: 'scale-sprint',
        type: 'sprint',
        nameEn: 'Scale Sprint',
        nameDe: 'Scale Sprint',
        duration: '30 Days',
        investment: '€23.6K',
        impactEn: 'Fix one critical bottleneck completely',
        impactDe: 'Einen kritischen Engpass komplett beheben',
        whatWeDoEn: ['Focused intervention', 'Hands-on execution', 'Measurable outcome'],
        whatWeDoDe: ['Fokussierte Intervention', 'Hands-on Umsetzung', 'Messbares Outcome'],
        guaranteeEn: 'Defined outcome or money back',
        guaranteeDe: 'Definiertes Outcome oder Geld zurück',
        roi: '10-20x within 6 months',
        relatedCases: ['fintech-growth']
      },
      {
        id: 'hypergrowth-program',
        type: 'transformation',
        nameEn: 'Hypergrowth Program',
        nameDe: 'Hypergrowth Program',
        duration: '6-12 Months',
        investment: '€89K-€269K',
        impactEn: 'Full transformation to break through ceiling',
        impactDe: 'Volle Transformation zum Durchbruch',
        whatWeDoEn: ['Multi-dimensional transformation', 'Embedded team support', 'Board-level reporting'],
        whatWeDoDe: ['Multi-dimensionale Transformation', 'Embedded Team-Support', 'Board-Level Reporting'],
        guaranteeEn: 'Growth milestones or extended engagement',
        guaranteeDe: 'Wachstumsmeilensteine oder verlängertes Engagement',
        roi: '25-80x over program duration',
        relatedCases: ['series-b-hypergrowth']
      }
    ]
  },
  {
    id: 'pricing-breakdown',
    icon: DollarSign,
    nameEn: 'Pricing Breakdown',
    nameDe: 'Pricing Breakdown',
    shortNameEn: 'Pricing',
    shortNameDe: 'Pricing',
    order: 3,
    problemEn: 'Your pricing doesn\'t capture the value you deliver. You\'re leaving money on the table or losing deals to cheaper alternatives.',
    problemDe: 'Dein Pricing erfasst nicht den Wert, den du lieferst. Du lässt Geld liegen oder verlierst Deals an günstigere Alternativen.',
    whyThisHappensHeadlineEn: 'Pricing evolved organically without a strategic framework',
    whyThisHappensHeadlineDe: 'Pricing entwickelte sich organisch ohne strategisches Framework',
    whyThisHappensEn: [
      'Cost-plus pricing instead of value-based',
      'No price segmentation for different customer types',
      'Pricing evolved organically without strategy'
    ],
    whyThisHappensDe: [
      'Cost-Plus Pricing statt Value-Based',
      'Keine Preis-Segmentierung für verschiedene Kundentypen',
      'Pricing entwickelte sich organisch ohne Strategie'
    ],
    symptomsEn: [
      'Win rates vary wildly by deal size',
      'Constant discounting pressure',
      'Competitors winning on price',
      'Revenue growth lags user growth'
    ],
    symptomsDe: [
      'Win-Rates variieren stark nach Deal-Größe',
      'Konstanter Rabattdruck',
      'Wettbewerber gewinnen über Preis',
      'Umsatzwachstum hinkt Nutzerwachstum hinterher'
    ],
    ctaTextEn: 'Fix Pricing',
    ctaTextDe: 'Pricing fixen',
    solutions: [
      {
        id: 'pricing-diagnostic',
        type: 'free',
        nameEn: 'Pricing Diagnostic',
        nameDe: 'Pricing Diagnostic',
        duration: '60 Min',
        investment: 'FREE',
        impactEn: 'Identify pricing optimization potential',
        impactDe: 'Pricing-Optimierungspotenzial identifizieren',
        whatWeDoEn: ['Current model analysis', 'Quick-win identification', 'Value capture assessment'],
        whatWeDoDe: ['Aktuelle Modell-Analyse', 'Quick-Win Identifikation', 'Value-Capture Assessment'],
      },
      {
        id: 'pricing-strategy',
        type: 'sprint',
        nameEn: 'Pricing Strategy Sprint',
        nameDe: 'Pricing Strategy Sprint',
        duration: '2-3 Weeks',
        investment: '€15K-€25K',
        impactEn: 'New pricing architecture with 15-30% revenue uplift',
        impactDe: 'Neue Pricing-Architektur mit 15-30% Umsatzsteigerung',
        whatWeDoEn: ['Value driver analysis', 'Competitive positioning', 'Implementation roadmap'],
        whatWeDoDe: ['Value-Driver Analyse', 'Wettbewerbspositionierung', 'Implementierungs-Roadmap'],
        roi: '20-50x within first year',
        relatedPlaybooks: ['value-based-pricing']
      }
    ]
  },
  {
    id: 'customer-success-broken',
    icon: Users,
    nameEn: 'Customer Success Broken',
    nameDe: 'Customer Success Broken',
    shortNameEn: 'CS',
    shortNameDe: 'CS',
    order: 4,
    problemEn: 'Churn is killing your growth. Net revenue retention is below 100%, and your best customers aren\'t expanding.',
    problemDe: 'Churn killt dein Wachstum. Net Revenue Retention ist unter 100%, und deine besten Kunden expandieren nicht.',
    whyThisHappensHeadlineEn: 'CS is reactive instead of proactive and strategic',
    whyThisHappensHeadlineDe: 'CS ist reaktiv statt proaktiv und strategisch',
    whyThisHappensEn: [
      'Reactive support instead of proactive success',
      'No clear customer health scoring',
      'Expansion opportunities not systematically captured'
    ],
    whyThisHappensDe: [
      'Reaktiver Support statt proaktiver Success',
      'Kein klares Customer Health Scoring',
      'Expansionsmöglichkeiten nicht systematisch erfasst'
    ],
    symptomsEn: [
      'NRR below 100%',
      'Churn spikes unpredictable',
      'Support tickets as first warning',
      'Low NPS scores'
    ],
    symptomsDe: [
      'NRR unter 100%',
      'Churn-Spikes unvorhersehbar',
      'Support-Tickets als erste Warnung',
      'Niedrige NPS-Scores'
    ],
    ctaTextEn: 'Fix Retention',
    ctaTextDe: 'Retention fixen',
    solutions: [
      {
        id: 'cs-diagnostic',
        type: 'free',
        nameEn: 'CS Diagnostic',
        nameDe: 'CS Diagnostic',
        duration: '60 Min',
        investment: 'FREE',
        impactEn: 'Identify your retention levers',
        impactDe: 'Identifiziere deine Retention-Hebel',
        whatWeDoEn: ['Churn pattern analysis', 'Health score review', 'Quick-win roadmap'],
        whatWeDoDe: ['Churn-Muster-Analyse', 'Health Score Review', 'Quick-Win Roadmap'],
      },
      {
        id: 'cs-transformation',
        type: 'transformation',
        nameEn: 'CS Transformation',
        nameDe: 'CS Transformation',
        duration: '3-6 Months',
        investment: '€35K-€65K',
        impactEn: 'Build world-class CS engine with NRR 120%+',
        impactDe: 'Weltklasse CS-Engine mit NRR 120%+ aufbauen',
        whatWeDoEn: ['CS playbook development', 'Health scoring system', 'Team training'],
        whatWeDoDe: ['CS-Playbook Entwicklung', 'Health-Scoring System', 'Team-Training'],
        guaranteeEn: 'NRR improvement or extended engagement',
        guaranteeDe: 'NRR-Verbesserung oder verlängertes Engagement',
        roi: '15-40x over 12 months',
        relatedCases: ['saas-nrr-boost']
      }
    ]
  },
  {
    id: 'scaling-chaos',
    icon: Workflow,
    nameEn: 'Scaling Chaos',
    nameDe: 'Scaling Chaos',
    shortNameEn: 'Ops',
    shortNameDe: 'Ops',
    order: 5,
    problemEn: 'Growth is breaking your operations. What worked with 10 people doesn\'t work with 50. Chaos increases with every hire.',
    problemDe: 'Wachstum bricht deine Operations. Was mit 10 Leuten funktionierte, funktioniert nicht mit 50. Chaos steigt mit jeder Einstellung.',
    whyThisHappensHeadlineEn: 'Your org structure hasn\'t evolved with your growth',
    whyThisHappensHeadlineDe: 'Deine Org-Struktur hat sich nicht mit deinem Wachstum entwickelt',
    whyThisHappensEn: [
      'Processes not designed for scale',
      'Key person dependencies everywhere',
      'No clear operating rhythm or cadence'
    ],
    whyThisHappensDe: [
      'Prozesse nicht für Skalierung designed',
      'Key-Person-Abhängigkeiten überall',
      'Kein klarer Operating Rhythm oder Kadenz'
    ],
    symptomsEn: [
      'Everything takes 3x longer than it should',
      'Same problems solved differently',
      'New hires take months to onboard',
      'Decisions bottleneck at founders'
    ],
    symptomsDe: [
      'Alles dauert 3x länger als es sollte',
      'Gleiche Probleme werden unterschiedlich gelöst',
      'Neue Mitarbeiter brauchen Monate zum Onboarding',
      'Entscheidungen stauen sich bei Gründern'
    ],
    ctaTextEn: 'Fix Operations',
    ctaTextDe: 'Operations fixen',
    solutions: [
      {
        id: 'ops-diagnostic',
        type: 'free',
        nameEn: 'Ops Diagnostic',
        nameDe: 'Ops Diagnostic',
        duration: '60 Min',
        investment: 'FREE',
        impactEn: 'Identify operational bottlenecks',
        impactDe: 'Operative Engpässe identifizieren',
        whatWeDoEn: ['Process mapping', 'Bottleneck identification', 'Priority roadmap'],
        whatWeDoDe: ['Prozess-Mapping', 'Engpass-Identifikation', 'Prioritäts-Roadmap'],
      },
      {
        id: 'ops-sprint',
        type: 'sprint',
        nameEn: 'Ops Sprint',
        nameDe: 'Ops Sprint',
        duration: '30 Days',
        investment: '€23.6K',
        impactEn: 'Fix one critical operational bottleneck',
        impactDe: 'Einen kritischen operativen Engpass beheben',
        whatWeDoEn: ['Focused intervention', 'Process redesign', 'Team enablement'],
        whatWeDoDe: ['Fokussierte Intervention', 'Prozess-Neudesign', 'Team-Enablement'],
        guaranteeEn: 'Defined outcome or money back',
        guaranteeDe: 'Definiertes Outcome oder Geld zurück',
        roi: '10-15x within 6 months',
        relatedPlaybooks: ['ops-excellence']
      }
    ]
  },
  {
    id: 'ai-transformation',
    icon: Bot,
    nameEn: 'AI Transformation',
    nameDe: 'AI Transformation',
    shortNameEn: 'AI',
    shortNameDe: 'AI',
    order: 6,
    problemEn: 'You know AI will change everything, but you don\'t know where to start or how to avoid the hype trap.',
    problemDe: 'Du weißt, dass KI alles verändern wird, aber du weißt nicht, wo du anfangen sollst oder wie du die Hype-Falle vermeidest.',
    whyThisHappensHeadlineEn: 'AI requires a strategic approach, not just tools',
    whyThisHappensHeadlineDe: 'AI erfordert einen strategischen Ansatz, nicht nur Tools',
    whyThisHappensEn: [
      'AI landscape is overwhelming and fast-moving',
      'ROI of AI initiatives is unclear',
      'Team lacks AI-native skills and mindset'
    ],
    whyThisHappensDe: [
      'AI-Landschaft ist überwältigend und schnelllebig',
      'ROI von AI-Initiativen ist unklar',
      'Team fehlen AI-native Skills und Mindset'
    ],
    symptomsEn: [
      'Competitors shipping AI features faster',
      'Pilot projects that don\'t scale',
      'Team confused about priorities',
      'Board asking about AI strategy'
    ],
    symptomsDe: [
      'Wettbewerber launchen AI-Features schneller',
      'Pilot-Projekte die nicht skalieren',
      'Team verwirrt über Prioritäten',
      'Board fragt nach AI-Strategie'
    ],
    ctaTextEn: 'Start AI Journey',
    ctaTextDe: 'AI-Journey starten',
    solutions: [
      {
        id: 'ai-readiness',
        type: 'free',
        nameEn: 'AI Readiness Assessment',
        nameDe: 'AI Readiness Assessment',
        duration: '20 Min',
        investment: 'FREE',
        impactEn: 'Understand your AI maturity and opportunities',
        impactDe: 'Verstehe deine AI-Reife und Opportunities',
        whatWeDoEn: ['AI maturity scoring', 'Use case identification', 'Priority recommendations'],
        whatWeDoDe: ['AI-Reife-Scoring', 'Use-Case Identifikation', 'Prioritäts-Empfehlungen'],
      },
      {
        id: 'ai-strategy',
        type: 'sprint',
        nameEn: 'AI Strategy Sprint',
        nameDe: 'AI Strategy Sprint',
        duration: '2-4 Weeks',
        investment: '€15K-€30K',
        impactEn: 'Clear AI roadmap with prioritized use cases',
        impactDe: 'Klare AI-Roadmap mit priorisierten Use Cases',
        whatWeDoEn: ['Use case mapping', 'Build vs buy analysis', 'Implementation roadmap'],
        whatWeDoDe: ['Use-Case Mapping', 'Build vs Buy Analyse', 'Implementierungs-Roadmap'],
        roi: '5-20x over 12 months',
        relatedPlaybooks: ['ai-strategy']
      },
      {
        id: 'ai-enablement',
        type: 'advisory',
        nameEn: 'AI Team Enablement',
        nameDe: 'AI Team Enablement',
        duration: '4-8 Weeks',
        investment: '€5.9K-€9.5K',
        impactEn: 'Transform team into AI-native operators',
        impactDe: 'Team in AI-native Operators transformieren',
        whatWeDoEn: ['Hands-on workshops', 'Tool training', 'Process integration'],
        whatWeDoDe: ['Hands-on Workshops', 'Tool-Training', 'Prozess-Integration'],
      }
    ]
  },
  {
    id: 'board-pressure',
    icon: Building2,
    nameEn: 'Board Pressure',
    nameDe: 'Board Pressure',
    shortNameEn: 'Board',
    shortNameDe: 'Board',
    order: 7,
    problemEn: 'Investors are demanding answers. You need data-driven insights and a credible plan to regain confidence.',
    problemDe: 'Investoren verlangen Antworten. Du brauchst datengetriebene Insights und einen glaubwürdigen Plan, um Vertrauen zurückzugewinnen.',
    whyThisHappensHeadlineEn: 'Execution gaps between strategy and results',
    whyThisHappensHeadlineDe: 'Execution-Gaps zwischen Strategie und Ergebnissen',
    whyThisHappensEn: [
      'Metrics don\'t tell a compelling story',
      'Growth plan lacks conviction and specificity',
      'Board communication not strategic enough'
    ],
    whyThisHappensDe: [
      'Metriken erzählen keine überzeugende Story',
      'Wachstumsplan fehlt Überzeugung und Spezifität',
      'Board-Kommunikation nicht strategisch genug'
    ],
    symptomsEn: [
      'Board meetings feel adversarial',
      'Constant requests for more data',
      'Next funding round at risk',
      'Credibility questioned'
    ],
    symptomsDe: [
      'Board-Meetings fühlen sich konfrontativ an',
      'Ständige Anfragen nach mehr Daten',
      'Nächste Funding-Runde in Gefahr',
      'Glaubwürdigkeit in Frage gestellt'
    ],
    ctaTextEn: 'Prepare for Board',
    ctaTextDe: 'Board-Vorbereitung',
    solutions: [
      {
        id: 'board-prep',
        type: 'diagnostic',
        nameEn: 'Board Prep Session',
        nameDe: 'Board Prep Session',
        duration: '2-3 Hours',
        investment: '€1.5K',
        impactEn: 'Walk into your next board meeting with confidence',
        impactDe: 'Mit Selbstvertrauen ins nächste Board-Meeting gehen',
        whatWeDoEn: ['Narrative development', 'Data story creation', 'Q&A preparation'],
        whatWeDoDe: ['Narrativ-Entwicklung', 'Daten-Story Erstellung', 'Q&A Vorbereitung'],
      },
      {
        id: 'strategic-advisory',
        type: 'advisory',
        nameEn: 'Strategic Advisory Retainer',
        nameDe: 'Strategic Advisory Retainer',
        duration: '12+ Months',
        investment: '€3.9K-€11K/Mo',
        impactEn: 'Ongoing strategic sparring at board level',
        impactDe: 'Laufendes strategisches Sparring auf Board-Level',
        whatWeDoEn: ['Monthly strategy sessions', 'Board meeting prep', 'On-demand advisory'],
        whatWeDoDe: ['Monatliche Strategie-Sessions', 'Board-Meeting Prep', 'On-Demand Advisory'],
      }
    ]
  },
  {
    id: 'portfolio-performance',
    icon: Briefcase,
    nameEn: 'Portfolio Performance',
    nameDe: 'Portfolio Performance',
    shortNameEn: 'Portfolio',
    shortNameDe: 'Portfolio',
    order: 8,
    problemEn: 'You need to assess, prioritize, and accelerate value creation across your portfolio companies.',
    problemDe: 'Du musst Portfolio-Companies bewerten, priorisieren und Value Creation beschleunigen.',
    whyThisHappensHeadlineEn: 'Limited visibility and inconsistent support',
    whyThisHappensHeadlineDe: 'Begrenzte Sichtbarkeit und inkonsistenter Support',
    whyThisHappensEn: [
      'Inconsistent data across portfolio companies',
      'No systematic approach to value creation',
      'Limited operating partner bandwidth'
    ],
    whyThisHappensDe: [
      'Inkonsistente Daten über Portfolio-Companies',
      'Kein systematischer Ansatz für Value Creation',
      'Begrenzte Operating Partner Bandbreite'
    ],
    symptomsEn: [
      'Portfolio companies miss milestones',
      'Surprises at board meetings',
      'Unclear which companies need help',
      'Limited time for hands-on support'
    ],
    symptomsDe: [
      'Portfolio-Companies verpassen Meilensteine',
      'Überraschungen bei Board-Meetings',
      'Unklar welche Companies Hilfe brauchen',
      'Begrenzte Zeit für Hands-on Support'
    ],
    ctaTextEn: 'Boost Portfolio',
    ctaTextDe: 'Portfolio boosten',
    solutions: [
      {
        id: 'portfolio-scan',
        type: 'diagnostic',
        nameEn: 'Portfolio Scan',
        nameDe: 'Portfolio Scan',
        duration: '1-2 Weeks',
        investment: '€5.9K-€11K',
        impactEn: 'Systematic health check across portfolio',
        impactDe: 'Systematischer Health-Check über Portfolio',
        whatWeDoEn: ['Standardized assessment', 'Priority ranking', 'Intervention recommendations'],
        whatWeDoDe: ['Standardisiertes Assessment', 'Prioritäts-Ranking', 'Interventions-Empfehlungen'],
        roi: '2-5x through focused interventions'
      },
      {
        id: 'portfolio-program',
        type: 'transformation',
        nameEn: 'Portfolio Acceleration',
        nameDe: 'Portfolio Acceleration',
        duration: 'Ongoing',
        investment: '€15K-€35K/Mo',
        impactEn: 'Systematic value creation across portfolio',
        impactDe: 'Systematische Value Creation über Portfolio',
        whatWeDoEn: ['Operating model implementation', 'Best practice sharing', 'Hands-on support'],
        whatWeDoDe: ['Operating Model Implementierung', 'Best Practice Sharing', 'Hands-on Support'],
        guaranteeEn: 'Measurable portfolio performance improvement',
        guaranteeDe: 'Messbare Portfolio-Performance-Verbesserung'
      }
    ]
  },
  {
    id: 'orientation',
    icon: Compass,
    nameEn: 'Orientation',
    nameDe: 'Orientierung',
    shortNameEn: 'Start',
    shortNameDe: 'Start',
    order: 9,
    problemEn: 'You don\'t know where to start. You need clarity on your situation before making strategic decisions.',
    problemDe: 'Du weißt nicht, wo du anfangen sollst. Du brauchst Klarheit über deine Situation, bevor du strategische Entscheidungen triffst.',
    whyThisHappensHeadlineEn: 'Too close to the problem to see it clearly',
    whyThisHappensHeadlineDe: 'Zu nah am Problem um es klar zu sehen',
    whyThisHappensEn: [
      'Multiple competing priorities',
      'Information overload from all directions',
      'No external benchmark or perspective'
    ],
    whyThisHappensDe: [
      'Mehrere konkurrierende Prioritäten',
      'Informationsüberflutung von allen Seiten',
      'Kein externer Benchmark oder Perspektive'
    ],
    symptomsEn: [
      'Feeling stuck but unsure why',
      'Team has different diagnoses',
      'Trying many things, nothing sticks',
      'Analysis paralysis'
    ],
    symptomsDe: [
      'Gefühl festzustecken, aber unsicher warum',
      'Team hat unterschiedliche Diagnosen',
      'Vieles ausprobiert, nichts funktioniert',
      'Analyse-Paralyse'
    ],
    ctaTextEn: 'Get Clarity',
    ctaTextDe: 'Klarheit gewinnen',
    solutions: [
      {
        id: 'orientation-call',
        type: 'free',
        nameEn: 'Orientation Call',
        nameDe: 'Orientierungs-Call',
        duration: '30 Min',
        investment: 'FREE',
        impactEn: 'Get initial clarity on your situation',
        impactDe: 'Erste Klarheit über deine Situation gewinnen',
        whatWeDoEn: ['Quick diagnostic', 'Challenge identification', 'Next step recommendation'],
        whatWeDoDe: ['Schnelle Diagnose', 'Challenge-Identifikation', 'Nächste-Schritt-Empfehlung'],
      },
      {
        id: 'deep-diagnostic',
        type: 'diagnostic',
        nameEn: 'Deep Diagnostic',
        nameDe: 'Deep Diagnostic',
        duration: '3-5 Days',
        investment: '€5.9K-€9.5K',
        impactEn: 'Comprehensive analysis with prioritized roadmap',
        impactDe: 'Umfassende Analyse mit priorisierter Roadmap',
        whatWeDoEn: ['Full business audit', 'Stakeholder interviews', 'Strategic recommendations'],
        whatWeDoDe: ['Vollständiges Business-Audit', 'Stakeholder-Interviews', 'Strategische Empfehlungen'],
        guaranteeEn: 'Clarity and actionable roadmap',
        guaranteeDe: 'Klarheit und umsetzbare Roadmap',
        roi: 'Priceless clarity'
      }
    ]
  }
];

export const getChallengeById = (id: string): Challenge | undefined => {
  return challenges.find(c => c.id === id);
};

export const getDefaultChallenge = (): Challenge => {
  return challenges.find(c => c.isDefault) || challenges[0];
};
