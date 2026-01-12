import { LucideIcon, TrendingDown, TrendingUp, DollarSign, Users, Workflow, Bot, Building2, Briefcase, Compass } from 'lucide-react';

export interface ChallengeSolution {
  id: string;
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
  whyThisHappensEn: string[];
  whyThisHappensDe: string[];
  
  // CTA
  ctaTextEn: string;
  ctaTextDe: string;
  
  // Solutions
  solutions: ChallengeSolution[];
}

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
    ctaTextEn: 'Fix CAC',
    ctaTextDe: 'CAC fixen',
    solutions: [
      {
        id: 'cac-diagnostic',
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
        nameEn: 'GTM Audit',
        nameDe: 'GTM Audit',
        duration: '5-7 Days',
        investment: '€3.9K-€5.9K',
        impactEn: 'Complete funnel analysis with fix roadmap',
        impactDe: 'Komplette Funnel-Analyse mit Fix-Roadmap',
        whatWeDoEn: ['Full-funnel audit', 'Channel efficiency scoring', 'CAC reduction playbook'],
        whatWeDoDe: ['Full-Funnel Audit', 'Kanal-Effizienz-Scoring', 'CAC-Reduktions-Playbook'],
        roi: '3-5x within 90 days'
      },
      {
        id: 'gtm-transformation',
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
        roi: '15-25x over 12 months'
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
    ctaTextEn: 'Unlock Growth',
    ctaTextDe: 'Wachstum freischalten',
    solutions: [
      {
        id: 'theta-assessment',
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
        nameEn: 'Growth Diagnostic',
        nameDe: 'Growth Diagnostic',
        duration: '90 Min',
        investment: '€890',
        impactEn: 'Strategic clarity session with founder',
        impactDe: 'Strategische Klarheits-Session mit Founder',
        whatWeDoEn: ['Deep strategic review', 'Bottleneck identification', 'Action prioritization'],
        whatWeDoDe: ['Tiefe strategische Review', 'Engpass-Identifikation', 'Action-Priorisierung'],
        guaranteeEn: 'Clarity or refund',
        guaranteeDe: 'Klarheit oder Erstattung'
      },
      {
        id: 'scale-sprint',
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
        roi: '10-20x within 6 months'
      },
      {
        id: 'hypergrowth-program',
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
        roi: '25-80x over program duration'
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
    ctaTextEn: 'Fix Pricing',
    ctaTextDe: 'Pricing fixen',
    solutions: [
      {
        id: 'pricing-diagnostic',
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
        nameEn: 'Pricing Strategy Sprint',
        nameDe: 'Pricing Strategy Sprint',
        duration: '2-3 Weeks',
        investment: '€15K-€25K',
        impactEn: 'New pricing architecture with 15-30% revenue uplift',
        impactDe: 'Neue Pricing-Architektur mit 15-30% Umsatzsteigerung',
        whatWeDoEn: ['Value driver analysis', 'Competitive positioning', 'Implementation roadmap'],
        whatWeDoDe: ['Value-Driver Analyse', 'Wettbewerbspositionierung', 'Implementierungs-Roadmap'],
        roi: '20-50x within first year'
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
    ctaTextEn: 'Fix Retention',
    ctaTextDe: 'Retention fixen',
    solutions: [
      {
        id: 'cs-diagnostic',
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
        roi: '15-40x over 12 months'
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
    ctaTextEn: 'Fix Operations',
    ctaTextDe: 'Operations fixen',
    solutions: [
      {
        id: 'ops-diagnostic',
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
        roi: '10-15x within 6 months'
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
    ctaTextEn: 'Start AI Journey',
    ctaTextDe: 'AI-Journey starten',
    solutions: [
      {
        id: 'ai-readiness',
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
        nameEn: 'AI Strategy Sprint',
        nameDe: 'AI Strategy Sprint',
        duration: '2-4 Weeks',
        investment: '€15K-€30K',
        impactEn: 'Clear AI roadmap with prioritized use cases',
        impactDe: 'Klare AI-Roadmap mit priorisierten Use Cases',
        whatWeDoEn: ['Use case mapping', 'Build vs buy analysis', 'Implementation roadmap'],
        whatWeDoDe: ['Use-Case Mapping', 'Build vs Buy Analyse', 'Implementierungs-Roadmap'],
        roi: '5-20x over 12 months'
      },
      {
        id: 'ai-enablement',
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
    ctaTextEn: 'Prepare for Board',
    ctaTextDe: 'Board-Vorbereitung',
    solutions: [
      {
        id: 'board-prep',
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
    whyThisHappensEn: [
      'Limited visibility into portfolio health',
      'No standardized assessment framework',
      'Value creation playbooks not systematized'
    ],
    whyThisHappensDe: [
      'Begrenzte Sichtbarkeit in Portfolio-Gesundheit',
      'Kein standardisiertes Assessment-Framework',
      'Value Creation Playbooks nicht systematisiert'
    ],
    ctaTextEn: 'Optimize Portfolio',
    ctaTextDe: 'Portfolio optimieren',
    solutions: [
      {
        id: 'portfolio-scan',
        nameEn: 'Portfolio Scan',
        nameDe: 'Portfolio Scan',
        duration: '2-4 Weeks',
        investment: '€9.8K-€25K',
        impactEn: 'Full health assessment of portfolio companies',
        impactDe: 'Volle Health-Bewertung der Portfolio-Companies',
        whatWeDoEn: ['Standardized scoring', 'Priority ranking', 'Intervention roadmap'],
        whatWeDoDe: ['Standardisiertes Scoring', 'Prioritäts-Ranking', 'Interventions-Roadmap'],
      },
      {
        id: 'portfolio-partnership',
        nameEn: 'Portfolio Partnership',
        nameDe: 'Portfolio Partnership',
        duration: '12-24 Months',
        investment: '€75K-€250K+',
        impactEn: 'Systematic value creation across portfolio',
        impactDe: 'Systematische Value Creation über Portfolio',
        whatWeDoEn: ['Ongoing assessments', 'Targeted interventions', 'Best practice sharing'],
        whatWeDoDe: ['Laufende Assessments', 'Gezielte Interventionen', 'Best Practice Sharing'],
        roi: '25-50x over partnership duration'
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
    whyThisHappensEn: [
      'Multiple challenges competing for attention',
      'Unclear which problem to solve first',
      'Need external perspective to cut through noise'
    ],
    whyThisHappensDe: [
      'Mehrere Challenges konkurrieren um Aufmerksamkeit',
      'Unklar, welches Problem zuerst gelöst werden soll',
      'Externe Perspektive nötig, um durch den Lärm zu schneiden'
    ],
    ctaTextEn: 'Get Oriented',
    ctaTextDe: 'Orientierung bekommen',
    solutions: [
      {
        id: 'theta-free',
        nameEn: 'Theta Self-Assessment',
        nameDe: 'Theta Self-Assessment',
        duration: '12 Min',
        investment: 'FREE',
        impactEn: 'AI-powered diagnostic of your situation',
        impactDe: 'KI-gestützte Diagnose deiner Situation',
        whatWeDoEn: ['8-dimension analysis', 'Bottleneck identification', 'Peer benchmarking'],
        whatWeDoDe: ['8-Dimensionen-Analyse', 'Engpass-Identifikation', 'Peer-Benchmarking'],
      },
      {
        id: 'diagnostic-call',
        nameEn: 'Diagnostic Call',
        nameDe: 'Diagnostic Call',
        duration: '60 Min',
        investment: 'FREE',
        impactEn: 'Clarity conversation with experienced operator',
        impactDe: 'Klarheitsgespräch mit erfahrenem Operator',
        whatWeDoEn: ['Situation review', 'Priority identification', 'Recommended next steps'],
        whatWeDoDe: ['Situations-Review', 'Prioritäts-Identifikation', 'Empfohlene nächste Schritte'],
      },
      {
        id: 'clarity-session',
        nameEn: 'Clarity Session',
        nameDe: 'Clarity Session',
        duration: '90 Min',
        investment: '€890',
        impactEn: 'Deep strategic session with actionable roadmap',
        impactDe: 'Tiefe strategische Session mit umsetzbarer Roadmap',
        whatWeDoEn: ['Comprehensive review', 'Strategic prioritization', 'Action plan'],
        whatWeDoDe: ['Umfassende Review', 'Strategische Priorisierung', 'Action Plan'],
        guaranteeEn: 'Clarity or full refund',
        guaranteeDe: 'Klarheit oder volle Erstattung'
      }
    ]
  }
];

export const getDefaultChallenge = (): Challenge => {
  return challenges.find(c => c.isDefault) || challenges[0];
};

export const getChallengeById = (id: string): Challenge | undefined => {
  return challenges.find(c => c.id === id);
};
