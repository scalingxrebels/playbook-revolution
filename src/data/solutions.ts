import { 
  Compass, 
  FileText, 
  Rocket, 
  GraduationCap, 
  Lightbulb, 
  Building2,
  LucideIcon,
  Flame,
  TrendingDown,
  Target,
  Settings,
  Bot,
  DollarSign,
  Building
} from 'lucide-react';

export interface ProblemTag {
  id: string;
  icon: LucideIcon;
  labelEn: string;
  labelDe: string;
  solutionCategories: string[];
  playbookDimensions: string[];
}

export interface SolutionCategory {
  id: string;
  icon: LucideIcon;
  titleEn: string;
  titleDe: string;
  purposeEn: string;
  purposeDe: string;
  impactEn: string;
  impactDe: string;
  descriptionEn: string;
  descriptionDe: string;
  pricingMin: number;
  pricingMax: number;
  pricingUnit: string;
  playbooks: string[];
  whenToChooseEn: string;
  whenToChooseDe: string;
  typicalBuyerEn: string;
  typicalBuyerDe: string;
  programs: SolutionProgram[];
  proofPoints: ProofPoint[];
}

export interface SolutionProgram {
  id: string;
  nameEn: string;
  nameDe: string;
  whatEn: string;
  whatDe: string;
  impactEn: string;
  impactDe: string;
  timeline: string;
  pricing: string;
  deliverablesEn: string[];
  deliverablesDe: string[];
  guaranteeEn: string;
  guaranteeDe: string;
}

export interface ProofPoint {
  metricEn: string;
  metricDe: string;
  value: string;
  descriptionEn: string;
  descriptionDe: string;
}

export const problemTags: ProblemTag[] = [
  { 
    id: 'cac-crisis', 
    icon: Flame,
    labelEn: 'CAC Crisis', 
    labelDe: 'CAC Krise',
    solutionCategories: ['advisory', 'transformation'],
    playbookDimensions: ['GTM', 'Capital'] 
  },
  { 
    id: 'growth-stalled', 
    icon: TrendingDown,
    labelEn: 'Growth Stalled',
    labelDe: 'Wachstum stagniert',
    solutionCategories: ['decision-reports', 'transformation'],
    playbookDimensions: ['GTM', 'Operations'] 
  },
  { 
    id: 'board-pressure', 
    icon: Target,
    labelEn: 'Board Pressure',
    labelDe: 'Board-Druck',
    solutionCategories: ['decision-reports', 'bespoke-strategy'],
    playbookDimensions: ['Governance', 'Capital'] 
  },
  { 
    id: 'scaling-chaos', 
    icon: Settings,
    labelEn: 'Scaling Chaos',
    labelDe: 'Skalierungs-Chaos',
    solutionCategories: ['transformation', 'training'],
    playbookDimensions: ['Operations', 'Organization'] 
  },
  { 
    id: 'ai-transformation', 
    icon: Bot,
    labelEn: 'AI Transformation',
    labelDe: 'KI Transformation',
    solutionCategories: ['transformation', 'training'],
    playbookDimensions: ['Technology', 'Operations'] 
  },
  { 
    id: 'pricing', 
    icon: DollarSign,
    labelEn: 'Pricing',
    labelDe: 'Pricing',
    solutionCategories: ['bespoke-strategy', 'decision-reports'],
    playbookDimensions: ['GTM', 'Capital'] 
  },
  { 
    id: 'portfolio', 
    icon: Building,
    labelEn: 'Portfolio Transformation',
    labelDe: 'Portfolio Transformation',
    solutionCategories: ['portfolio-solutions'],
    playbookDimensions: ['All'] 
  },
];

export const solutionCategories: SolutionCategory[] = [
  {
    id: 'advisory',
    icon: Compass,
    titleEn: 'Advisory',
    titleDe: 'Advisory',
    purposeEn: 'Create clarity fast and decide what truly matters',
    purposeDe: 'Schnell Klarheit schaffen und entscheiden, was wirklich zählt',
    impactEn: 'Identify your bottleneck in 45 min and get a prioritized 90-day roadmap with predicted 2-5x ROI.',
    impactDe: 'Identifiziere deinen Engpass in 45 Min und erhalte eine priorisierte 90-Tage-Roadmap mit 2-5x ROI-Prognose.',
    descriptionEn: 'Strategic guidance for founders and leadership teams navigating critical decisions.',
    descriptionDe: 'Strategische Beratung für Gründer und Führungsteams bei kritischen Entscheidungen.',
    pricingMin: 0,
    pricingMax: 18000,
    pricingUnit: '/Mo',
    playbooks: ['board-governance-ai', 'ai-capital-strategy'],
    whenToChooseEn: 'Need ongoing strategic sparring partner',
    whenToChooseDe: 'Brauche laufenden strategischen Sparringspartner',
    typicalBuyerEn: 'CEO / Founder',
    typicalBuyerDe: 'CEO / Gründer',
    programs: [
      {
        id: 'advisory-light',
        nameEn: 'Advisory Light',
        nameDe: 'Advisory Light',
        whatEn: 'Monthly strategic check-ins',
        whatDe: 'Monatliche strategische Check-ins',
        impactEn: 'Get your bottleneck diagnosed and receive a prioritized action plan with 3-5 high-leverage initiatives and predicted 30-50% improvement in target metric.',
        impactDe: 'Erhalte eine Engpass-Diagnose und einen priorisierten Aktionsplan mit 3-5 High-Leverage Initiativen und 30-50% prognostizierter Verbesserung der Zielmetrik.',
        timeline: 'Ongoing',
        pricing: '€0-3K/Mo',
        deliverablesEn: ['2 calls/month', 'Async support', 'Quarterly reviews'],
        deliverablesDe: ['2 Calls/Monat', 'Async Support', 'Quartals-Reviews'],
        guaranteeEn: 'Cancel anytime',
        guaranteeDe: 'Jederzeit kündbar'
      },
      {
        id: 'advisory-standard',
        nameEn: 'Advisory Standard',
        nameDe: 'Advisory Standard',
        whatEn: 'Weekly strategic guidance',
        whatDe: 'Wöchentliche strategische Begleitung',
        impactEn: 'Get expert tactical guidance with a concrete action plan: Identify 3-5 strategic initiatives with clear ROI projections and 90-day implementation roadmap.',
        impactDe: 'Erhalte taktische Expertenberatung mit konkretem Aktionsplan: 3-5 strategische Initiativen mit klaren ROI-Projektionen und 90-Tage-Umsetzungs-Roadmap.',
        timeline: '6+ Months',
        pricing: '€6-12K/Mo',
        deliverablesEn: ['Weekly calls', 'Board prep support', 'Decision frameworks'],
        deliverablesDe: ['Wöchentliche Calls', 'Board-Prep Support', 'Decision Frameworks'],
        guaranteeEn: '90-day trial period',
        guaranteeDe: '90 Tage Testphase'
      },
      {
        id: 'advisory-intensive',
        nameEn: 'Advisory Intensive',
        nameDe: 'Advisory Intensiv',
        whatEn: 'Deep-dive transformation support',
        whatDe: 'Deep-Dive Transformations-Support',
        impactEn: 'Get continuous strategic guidance: 3-5 strategic initiatives per quarter with measurable outcomes (CAC -20-40%, Decision Velocity +50-100%, Team Alignment +30%).',
        impactDe: 'Erhalte kontinuierliche strategische Begleitung: 3-5 strategische Initiativen pro Quartal mit messbaren Outcomes (CAC -20-40%, Decision Velocity +50-100%, Team Alignment +30%).',
        timeline: '12+ Months',
        pricing: '€12-18K/Mo',
        deliverablesEn: ['Unlimited access', 'On-site days', 'Full strategic ownership'],
        deliverablesDe: ['Unbegrenzter Zugang', 'Vor-Ort-Tage', 'Volle strategische Ownership'],
        guaranteeEn: 'Outcome-linked bonus',
        guaranteeDe: 'Outcome-linked Bonus'
      }
    ],
    proofPoints: [
      { metricEn: 'Decisions Accelerated', metricDe: 'Beschleunigte Entscheidungen', value: '73%', descriptionEn: 'Faster board decisions', descriptionDe: 'Schnellere Board-Entscheidungen' },
      { metricEn: 'Strategic Clarity', metricDe: 'Strategische Klarheit', value: '94%', descriptionEn: 'CEO satisfaction rate', descriptionDe: 'CEO Zufriedenheitsrate' },
      { metricEn: 'Avg. Engagement', metricDe: 'Ø Engagement', value: '18Mo', descriptionEn: 'Long-term partnerships', descriptionDe: 'Langfristige Partnerschaften' }
    ]
  },
  {
    id: 'decision-reports',
    icon: FileText,
    titleEn: 'Decision Reports',
    titleDe: 'Decision Reports',
    purposeEn: 'Get Board-ready answers to your toughest questions',
    purposeDe: 'Board-ready Antworten auf die schwierigsten Fragen',
    impactEn: 'Present your strategy to the board with 95% confidence and clear ROI projections (CAC -30-50%, LTV/CAC +50-100%, Rule of 40 +15-30pp).',
    impactDe: 'Präsentiere deine Strategie mit 95% Konfidenz und klaren ROI-Projektionen (CAC -30-50%, LTV/CAC +50-100%, Rule of 40 +15-30pp).',
    descriptionEn: 'Deep-dive analyses and actionable recommendations for specific strategic challenges.',
    descriptionDe: 'Tiefgehende Analysen und umsetzbare Empfehlungen für spezifische strategische Herausforderungen.',
    pricingMin: 9000,
    pricingMax: 27000,
    pricingUnit: '',
    playbooks: ['ai-capital-strategy', 'board-governance-ai'],
    whenToChooseEn: 'Need data-backed decision for board/investors',
    whenToChooseDe: 'Brauche datengestützte Entscheidung für Board/Investoren',
    typicalBuyerEn: 'CEO / CFO / Board',
    typicalBuyerDe: 'CEO / CFO / Board',
    programs: [
      {
        id: 'decision-report-single',
        nameEn: 'Single Report',
        nameDe: 'Einzelbericht',
        whatEn: 'One strategic question, answered definitively',
        whatDe: 'Eine strategische Frage, definitiv beantwortet',
        impactEn: 'Get a comprehensive report with 3-5 prioritized recommendations, clear ROI projections (CAC -20-40%, LTV/CAC +30-60%), and step-by-step implementation roadmap.',
        impactDe: 'Erhalte einen umfassenden Report mit 3-5 priorisierten Empfehlungen, klaren ROI-Projektionen (CAC -20-40%, LTV/CAC +30-60%) und schrittweiser Umsetzungs-Roadmap.',
        timeline: '2-3 Weeks',
        pricing: '€9-15K',
        deliverablesEn: ['40-60 page report', 'Executive summary', 'Board presentation'],
        deliverablesDe: ['40-60 Seiten Report', 'Executive Summary', 'Board-Präsentation'],
        guaranteeEn: 'Revision until satisfied',
        guaranteeDe: 'Revision bis Zufriedenheit'
      },
      {
        id: 'decision-report-series',
        nameEn: 'Report Series',
        nameDe: 'Report Serie',
        whatEn: 'Quarterly strategic deep-dives',
        whatDe: 'Quartalsweise strategische Deep-Dives',
        impactEn: 'Get ongoing strategic reports: Monthly insights with 3-5 recommendations per report, clear ROI tracking, and continuous optimization (CAC -30-50%, LTV/CAC +50-100%).',
        impactDe: 'Erhalte laufende strategische Reports: Monatliche Insights mit 3-5 Empfehlungen pro Report, klares ROI-Tracking und kontinuierliche Optimierung (CAC -30-50%, LTV/CAC +50-100%).',
        timeline: '12 Months',
        pricing: '€18-27K/Year',
        deliverablesEn: ['4 reports/year', 'Priority scheduling', 'Follow-up calls'],
        deliverablesDe: ['4 Reports/Jahr', 'Prioritäts-Scheduling', 'Follow-up Calls'],
        guaranteeEn: '20% discount vs single',
        guaranteeDe: '20% Rabatt vs Einzelkauf'
      }
    ],
    proofPoints: [
      { metricEn: 'Board Adoption', metricDe: 'Board Adoption', value: '89%', descriptionEn: 'Recommendations implemented', descriptionDe: 'Empfehlungen umgesetzt' },
      { metricEn: 'Avg. ROI', metricDe: 'Ø ROI', value: '12x', descriptionEn: 'Value created vs cost', descriptionDe: 'Wert geschaffen vs Kosten' },
      { metricEn: 'Delivery Time', metricDe: 'Lieferzeit', value: '14d', descriptionEn: 'Average turnaround', descriptionDe: 'Durchschnittliche Lieferzeit' }
    ]
  },
  {
    id: 'transformation',
    icon: Rocket,
    titleEn: 'Transformation',
    titleDe: 'Transformation',
    purposeEn: 'Fix bottlenecks and unlock your next growth phase',
    purposeDe: 'Engpässe beheben und die nächste Wachstumsphase freischalten',
    impactEn: 'Fix your bottleneck in 30-90 days: CAC -30-50%, LTV/CAC +50-100%, Decision Velocity +100%. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Behebe deinen Engpass in 30-90 Tagen: CAC -30-50%, LTV/CAC +50-100%, Decision Velocity +100%. Garantie: 2 von 3 oder 50% Rückerstattung.',
    descriptionEn: 'Hands-on transformation programs that deliver measurable business outcomes.',
    descriptionDe: 'Hands-on Transformationsprogramme mit messbaren Business-Ergebnissen.',
    pricingMin: 23600,
    pricingMax: 102000,
    pricingUnit: '',
    playbooks: ['ai-native-gtm-sales-led', 'ops-automation-foundation', 'ai-dev-velocity'],
    whenToChooseEn: 'Need hands-on execution, not just advice',
    whenToChooseDe: 'Brauche Hands-on Umsetzung, nicht nur Beratung',
    typicalBuyerEn: 'CEO / COO',
    typicalBuyerDe: 'CEO / COO',
    programs: [
      {
        id: 'power-up',
        nameEn: 'Power Up',
        nameDe: 'Power Up',
        whatEn: 'Quick fix, single bottleneck',
        whatDe: 'Quick Fix, einzelner Engpass',
        impactEn: 'Fix your bottleneck in 30 days: 1-2 key metrics improved (CAC -30-50%, LTV/CAC +50-100%, or Decision Velocity +100%). Guaranteed: 2 of 3 or 50% refund.',
        impactDe: 'Behebe deinen Engpass in 30 Tagen: 1-2 Schlüsselmetriken verbessert (CAC -30-50%, LTV/CAC +50-100%, oder Decision Velocity +100%). Garantie: 2 von 3 oder 50% Rückerstattung.',
        timeline: '30 Days',
        pricing: '€23.6K',
        deliverablesEn: ['Bottleneck fixed (C_min +0.2-0.3)', '1-2 key metrics improved', 'Playbook (how to sustain)'],
        deliverablesDe: ['Engpass behoben (C_min +0.2-0.3)', '1-2 Schlüsselmetriken verbessert', 'Playbook (Nachhaltigkeit)'],
        guaranteeEn: '2 of 3 outcomes or 50% refund',
        guaranteeDe: '2 von 3 Outcomes oder 50% Rückerstattung'
      },
      {
        id: 'boost',
        nameEn: 'Boost',
        nameDe: 'Boost',
        whatEn: 'Cross-functional transformation',
        whatDe: 'Cross-funktionale Transformation',
        impactEn: 'Transform 2-3 capabilities in 90 days: 3-5 key metrics improved (CAC -30-50%, LTV/CAC +50-100%, Rule of 40 +15-30pp, Decision Velocity +100%). Guaranteed: 2 of 3 or 50% refund.',
        impactDe: 'Transformiere 2-3 Capabilities in 90 Tagen: 3-5 Schlüsselmetriken verbessert (CAC -30-50%, LTV/CAC +50-100%, Rule of 40 +15-30pp, Decision Velocity +100%). Garantie: 2 von 3 oder 50% Rückerstattung.',
        timeline: '90 Days',
        pricing: '€54K',
        deliverablesEn: ['2-3 capabilities improved', 'Process redesign', 'Team enablement'],
        deliverablesDe: ['2-3 Capabilities verbessert', 'Prozess-Redesign', 'Team Enablement'],
        guaranteeEn: 'Defined KPIs or extension',
        guaranteeDe: 'Definierte KPIs oder Verlängerung'
      },
      {
        id: 'accelerate',
        nameEn: 'Accelerate',
        nameDe: 'Accelerate',
        whatEn: 'Full-stack company transformation',
        whatDe: 'Full-Stack Unternehmenstransformation',
        impactEn: 'Transform to AI-Native in 12 months: θ-index +60% (0.3 → 0.8+), ARR/Employee +150-300%, Time to €100M -50-75%. Guaranteed: 2 of 3 or 50% refund.',
        impactDe: 'Transformiere zu AI-Native in 12 Monaten: θ-Index +60% (0.3 → 0.8+), ARR/Mitarbeiter +150-300%, Time to €100M -50-75%. Garantie: 2 von 3 oder 50% Rückerstattung.',
        timeline: '180 Days',
        pricing: '€102K',
        deliverablesEn: ['Complete operating model redesign', 'AI-native workflows', 'Leadership coaching'],
        deliverablesDe: ['Komplettes Operating Model Redesign', 'AI-native Workflows', 'Leadership Coaching'],
        guaranteeEn: 'Outcome-linked pricing available',
        guaranteeDe: 'Outcome-linked Pricing verfügbar'
      }
    ],
    proofPoints: [
      { metricEn: 'Outcome Delivery', metricDe: 'Outcome Delivery', value: '92%', descriptionEn: 'Programs hit targets', descriptionDe: 'Programme erreichen Ziele' },
      { metricEn: 'Avg. Improvement', metricDe: 'Ø Verbesserung', value: '+47%', descriptionEn: 'Key metrics lift', descriptionDe: 'Schlüsselmetriken-Steigerung' },
      { metricEn: 'Repeat Rate', metricDe: 'Wiederkehrrate', value: '78%', descriptionEn: 'Clients return for more', descriptionDe: 'Kunden kommen wieder' }
    ]
  },
  {
    id: 'training',
    icon: GraduationCap,
    titleEn: 'Training',
    titleDe: 'Training',
    purposeEn: 'Upgrade your team\'s capabilities at scale',
    purposeDe: 'Team-Capabilities skalierbar upgraden',
    impactEn: 'Train your team to execute AI-native playbooks: 3x faster feature velocity, 50% fewer meetings, 80% reduction in coordination cost within 6-12 weeks.',
    impactDe: 'Trainiere dein Team für AI-native Playbooks: 3x schnellere Feature Velocity, 50% weniger Meetings, 80% weniger Koordinationskosten in 6-12 Wochen.',
    descriptionEn: 'Structured programs to build AI-native skills across your organization.',
    descriptionDe: 'Strukturierte Programme zum Aufbau von AI-native Skills in der gesamten Organisation.',
    pricingMin: 3000,
    pricingMax: 45000,
    pricingUnit: '',
    playbooks: ['ai-dev-velocity', 'ops-automation-foundation'],
    whenToChooseEn: 'Need to upskill team, not just leadership',
    whenToChooseDe: 'Team muss upgeskillt werden, nicht nur Leadership',
    typicalBuyerEn: 'CHRO / COO / CTO',
    typicalBuyerDe: 'CHRO / COO / CTO',
    programs: [
      {
        id: 'workshop',
        nameEn: 'Workshop',
        nameDe: 'Workshop',
        whatEn: 'Single-day intensive',
        whatDe: 'Eintägiges Intensiv-Training',
        impactEn: 'Train your team in 1-2 days: 3x faster execution, 50% fewer meetings, 80% reduction in coordination cost. Includes playbook and 90-day access to recording.',
        impactDe: 'Trainiere dein Team in 1-2 Tagen: 3x schnellere Umsetzung, 50% weniger Meetings, 80% weniger Koordinationskosten. Inkl. Playbook und 90 Tage Zugang zur Aufzeichnung.',
        timeline: '1 Day',
        pricing: '€3-6K',
        deliverablesEn: ['Hands-on exercises', 'Playbook access', 'Follow-up Q&A'],
        deliverablesDe: ['Hands-on Übungen', 'Playbook Zugang', 'Follow-up Q&A'],
        guaranteeEn: 'Satisfaction or redo',
        guaranteeDe: 'Zufriedenheit oder Wiederholung'
      },
      {
        id: 'bootcamp',
        nameEn: 'Bootcamp',
        nameDe: 'Bootcamp',
        whatEn: 'Multi-week capability building',
        whatDe: 'Mehrwöchiger Capability-Aufbau',
        impactEn: 'Build lasting capability in 4-6 weeks: 3x faster feature velocity, 50% fewer meetings, 80% coordination cost reduction. Includes certification, playbooks, and 90-day support.',
        impactDe: 'Baue nachhaltige Capability in 4-6 Wochen: 3x schnellere Feature Velocity, 50% weniger Meetings, 80% weniger Koordinationskosten. Inkl. Zertifizierung, Playbooks und 90 Tage Support.',
        timeline: '4-6 Weeks',
        pricing: '€12-18K',
        deliverablesEn: ['8-12 sessions', 'Real project application', 'Certification'],
        deliverablesDe: ['8-12 Sessions', 'Reale Projektanwendung', 'Zertifizierung'],
        guaranteeEn: 'Skill assessment included',
        guaranteeDe: 'Skill-Assessment inklusive'
      },
      {
        id: 'academy',
        nameEn: 'Academy',
        nameDe: 'Academy',
        whatEn: 'Organization-wide program',
        whatDe: 'Unternehmensweites Programm',
        impactEn: 'Build comprehensive AI-native capability: 3x faster execution, 50% fewer meetings, 80% coordination cost reduction. Includes certification, ongoing support, and community access.',
        impactDe: 'Baue umfassende AI-native Capability auf: 3x schnellere Umsetzung, 50% weniger Meetings, 80% weniger Koordinationskosten. Inkl. Zertifizierung, laufender Support und Community-Zugang.',
        timeline: '6-12 Months',
        pricing: '€30-45K',
        deliverablesEn: ['Custom curriculum', 'Train-the-trainer', 'Ongoing support'],
        deliverablesDe: ['Custom Curriculum', 'Train-the-Trainer', 'Laufender Support'],
        guaranteeEn: 'Capability metrics tracked',
        guaranteeDe: 'Capability-Metriken tracked'
      }
    ],
    proofPoints: [
      { metricEn: 'Skill Improvement', metricDe: 'Skill-Verbesserung', value: '+62%', descriptionEn: 'Pre vs post assessment', descriptionDe: 'Pre vs Post Assessment' },
      { metricEn: 'Participants', metricDe: 'Teilnehmer', value: '2.4K+', descriptionEn: 'People trained', descriptionDe: 'Geschulte Personen' },
      { metricEn: 'NPS', metricDe: 'NPS', value: '72', descriptionEn: 'Participant satisfaction', descriptionDe: 'Teilnehmer-Zufriedenheit' }
    ]
  },
  {
    id: 'bespoke-strategy',
    icon: Lightbulb,
    titleEn: 'Bespoke Strategy',
    titleDe: 'Bespoke Strategy',
    purposeEn: 'Solve unique challenges that don\'t fit a box',
    purposeDe: 'Einzigartige Herausforderungen lösen, die nicht in eine Box passen',
    impactEn: 'Get a custom playbook for your specific challenge (Pricing, M&A, Board Prep) with clear success metrics and 3-5 week delivery.',
    impactDe: 'Erhalte ein maßgeschneidertes Playbook für deine spezifische Herausforderung (Pricing, M&A, Board Prep) mit klaren Erfolgsmetriken in 3-5 Wochen.',
    descriptionEn: 'Custom-designed engagements for complex, multi-dimensional strategic challenges.',
    descriptionDe: 'Maßgeschneiderte Engagements für komplexe, mehrdimensionale strategische Herausforderungen.',
    pricingMin: 50000,
    pricingMax: 200000,
    pricingUnit: '+',
    playbooks: ['ai-capital-strategy', 'board-governance-ai', 'ai-native-gtm-sales-led'],
    whenToChooseEn: 'Problem is unique, need custom solution',
    whenToChooseDe: 'Problem ist einzigartig, brauche Custom Solution',
    typicalBuyerEn: 'CEO / Board',
    typicalBuyerDe: 'CEO / Board',
    programs: [
      {
        id: 'bespoke-engagement',
        nameEn: 'Bespoke Engagement',
        nameDe: 'Bespoke Engagement',
        whatEn: 'Fully custom scope and approach',
        whatDe: 'Vollständig individueller Scope und Ansatz',
        impactEn: 'Get a custom solution for your specific challenge: Clear success metrics, 3-5 strategic recommendations, ROI projections, and step-by-step implementation roadmap.',
        impactDe: 'Erhalte eine maßgeschneiderte Lösung für deine spezifische Herausforderung: Klare Erfolgsmetriken, 3-5 strategische Empfehlungen, ROI-Projektionen und schrittweise Umsetzungs-Roadmap.',
        timeline: 'Varies',
        pricing: '€50K+',
        deliverablesEn: ['Custom-defined outcomes', 'Dedicated team', 'Flexible structure'],
        deliverablesDe: ['Custom-definierte Outcomes', 'Dediziertes Team', 'Flexible Struktur'],
        guaranteeEn: 'Milestone-based payments',
        guaranteeDe: 'Milestone-basierte Zahlungen'
      }
    ],
    proofPoints: [
      { metricEn: 'Success Rate', metricDe: 'Erfolgsrate', value: '96%', descriptionEn: 'Outcomes delivered', descriptionDe: 'Outcomes geliefert' },
      { metricEn: 'Avg. Value', metricDe: 'Ø Wert', value: '€2.8M', descriptionEn: 'Value created per engagement', descriptionDe: 'Wert pro Engagement' },
      { metricEn: 'Complexity', metricDe: 'Komplexität', value: 'High', descriptionEn: 'Multi-stakeholder challenges', descriptionDe: 'Multi-Stakeholder Challenges' }
    ]
  },
  {
    id: 'portfolio-solutions',
    icon: Building2,
    titleEn: 'Portfolio Solutions',
    titleDe: 'Portfolio Solutions',
    purposeEn: 'Transform 5-30 companies with systematic approach',
    purposeDe: '5-30 Unternehmen mit systematischem Ansatz transformieren',
    impactEn: 'Transform 10-15 companies in 12 months: Average θ-index +60%, ARR/Employee +150%, Portfolio valuation +2-3x.',
    impactDe: 'Transformiere 10-15 Unternehmen in 12 Monaten: Ø θ-Index +60%, ARR/Mitarbeiter +150%, Portfolio-Bewertung +2-3x.',
    descriptionEn: 'Tailored solutions for VCs, PE firms, and corporate portfolios.',
    descriptionDe: 'Maßgeschneiderte Lösungen für VCs, PE-Firmen und Corporate Portfolios.',
    pricingMin: 150000,
    pricingMax: 500000,
    pricingUnit: '/Year',
    playbooks: ['board-governance-ai', 'ai-capital-strategy', 'ops-automation-foundation'],
    whenToChooseEn: 'Need to upgrade multiple portfolio companies',
    whenToChooseDe: 'Muss mehrere Portfolio-Unternehmen upgraden',
    typicalBuyerEn: 'GP / Managing Partner',
    typicalBuyerDe: 'GP / Managing Partner',
    programs: [
      {
        id: 'portfolio-diagnostic',
        nameEn: 'Portfolio Diagnostic',
        nameDe: 'Portfolio Diagnostic',
        whatEn: 'Assess all portfolio companies',
        whatDe: 'Alle Portfolio-Unternehmen bewerten',
        impactEn: 'Get portfolio assessment: θ-index scores for all companies, bottleneck analysis, prioritization matrix, and predicted portfolio ROI (+2-3x valuation).',
        impactDe: 'Erhalte Portfolio-Assessment: θ-Index Scores für alle Unternehmen, Engpass-Analyse, Priorisierungsmatrix und prognostizierter Portfolio-ROI (+2-3x Bewertung).',
        timeline: '4-6 Weeks',
        pricing: '€30-50K',
        deliverablesEn: ['Theta Index for each company', 'Priority ranking', 'Action roadmap'],
        deliverablesDe: ['Theta Index für jedes Unternehmen', 'Prioritäts-Ranking', 'Action Roadmap'],
        guaranteeEn: 'Clear ROI projection',
        guaranteeDe: 'Klare ROI-Projektion'
      },
      {
        id: 'portfolio-transformation',
        nameEn: 'Portfolio Transformation',
        nameDe: 'Portfolio Transformation',
        whatEn: 'Systematic upgrade across portfolio',
        whatDe: 'Systematisches Upgrade über Portfolio',
        impactEn: 'Transform entire portfolio: Average θ-index +60% (0.3 → 0.8+), ARR/Employee +150%, Portfolio valuation +2-3x. Guaranteed: 10-15 companies transformed or 50% refund.',
        impactDe: 'Transformiere das gesamte Portfolio: Ø θ-Index +60% (0.3 → 0.8+), ARR/Mitarbeiter +150%, Portfolio-Bewertung +2-3x. Garantie: 10-15 Unternehmen transformiert oder 50% Rückerstattung.',
        timeline: '12-24 Months',
        pricing: '€150-500K/Year',
        deliverablesEn: ['Dedicated ScalingX squad', 'Monthly progress reviews', 'GP dashboard'],
        deliverablesDe: ['Dediziertes ScalingX Squad', 'Monatliche Progress-Reviews', 'GP Dashboard'],
        guaranteeEn: 'Portfolio-level KPIs',
        guaranteeDe: 'Portfolio-level KPIs'
      }
    ],
    proofPoints: [
      { metricEn: 'Portfolio Lift', metricDe: 'Portfolio Lift', value: '+34%', descriptionEn: 'Avg. valuation increase', descriptionDe: 'Ø Bewertungssteigerung' },
      { metricEn: 'Companies', metricDe: 'Unternehmen', value: '47', descriptionEn: 'Portfolio companies served', descriptionDe: 'Portfolio-Unternehmen betreut' },
      { metricEn: 'GP Satisfaction', metricDe: 'GP Zufriedenheit', value: '98%', descriptionEn: 'Would recommend', descriptionDe: 'Würden empfehlen' }
    ]
  }
];

export const solutionToPlaybookMapping: Record<string, string[]> = {
  'advisory': ['board-governance-ai', 'ai-capital-strategy'],
  'decision-reports': ['ai-capital-strategy', 'board-governance-ai'],
  'transformation': ['ai-native-gtm-sales-led', 'ops-automation-foundation', 'ai-dev-velocity'],
  'training': ['ai-dev-velocity', 'ops-automation-foundation'],
  'bespoke-strategy': ['ai-capital-strategy', 'board-governance-ai', 'ai-native-gtm-sales-led'],
  'portfolio-solutions': ['board-governance-ai', 'ai-capital-strategy', 'ops-automation-foundation'],
};

export const formatPrice = (min: number, max: number, unit: string): string => {
  const formatK = (n: number) => n >= 1000 ? `${n/1000}K` : n.toString();
  if (min === 0) return `€0 - €${formatK(max)}${unit}`;
  return `€${formatK(min)} - €${formatK(max)}${unit}`;
};
