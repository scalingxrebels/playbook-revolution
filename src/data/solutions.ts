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
