// Solution Types
export type SolutionTypeId = 
  | 'all'
  | 'insights'
  | 'decision-support'
  | 'transformation'
  | 'training'
  | 'bespoke'
  | 'retainer'
  | 'keynote'
  | 'tools';

export type ChallengeId = 
  | 'all'
  | 'cac-crisis'
  | 'growth-stalled'
  | 'pricing-breakdown'
  | 'customer-success-broken'
  | 'scaling-chaos'
  | 'ai-transformation'
  | 'board-pressure'
  | 'portfolio-performance'
  | 'orientation';

export interface SolutionType {
  id: SolutionTypeId;
  labelEn: string;
  labelDe: string;
  icon?: string;
}

export interface Challenge {
  id: ChallengeId;
  labelEn: string;
  labelDe: string;
  icon?: string;
}

export interface SolutionTile {
  id: number;
  slug: string;
  solutionType: SolutionTypeId;
  transformationTier?: 'power-up' | 'boost' | 'accelerate';
  challenges: ChallengeId[] | 'universal';
  price: string;
  priceTag: 'free' | 'paid';
  
  headlineEn: string;
  headlineDe: string;
  
  problemEn: string;
  problemDe: string;
  
  solutionEn: string;
  solutionDe: string;
  
  deliverablesEn: string[];
  deliverablesDe: string[];
  
  impactEn: string;
  impactDe: string;
  
  primaryCtaEn: string;
  primaryCtaDe: string;
  primaryCtaAction: 'book-call' | 'request' | 'external';
  primaryCtaUrl?: string;
  
  secondaryCtaEn: string;
  secondaryCtaDe: string;
  secondaryCtaUrl: string;
  
  addOnPricing?: {
    baseLabelEn: string;
    baseLabelDe: string;
    basePrice: string;
    bridgeLabelEn: string;
    bridgeLabelDe: string;
    bridgePrice: string;
  };
}

export const solutionTypes: SolutionType[] = [
  { id: 'all', labelEn: 'All', labelDe: 'Alle' },
  { id: 'insights', labelEn: 'Insights & Clarity', labelDe: 'Insights & Clarity' },
  { id: 'decision-support', labelEn: 'Decision Support', labelDe: 'Decision Support' },
  { id: 'transformation', labelEn: 'Transformation', labelDe: 'Transformation' },
  { id: 'training', labelEn: 'Training & Enablement', labelDe: 'Training & Enablement' },
  { id: 'bespoke', labelEn: 'Bespoke Strategy', labelDe: 'Bespoke Strategy' },
  { id: 'retainer', labelEn: 'Retainer', labelDe: 'Retainer' },
  { id: 'keynote', labelEn: 'Keynote', labelDe: 'Keynote' },
  { id: 'tools', labelEn: 'Tools', labelDe: 'Tools' },
];

export const challenges: Challenge[] = [
  { id: 'all', labelEn: 'All Challenges', labelDe: 'Alle Challenges' },
  { id: 'cac-crisis', labelEn: 'CAC Crisis', labelDe: 'CAC Crisis' },
  { id: 'growth-stalled', labelEn: 'Growth Stalled', labelDe: 'Growth Stalled' },
  { id: 'pricing-breakdown', labelEn: 'Pricing Breakdown', labelDe: 'Pricing Breakdown' },
  { id: 'customer-success-broken', labelEn: 'Customer Success Broken', labelDe: 'Customer Success Broken' },
  { id: 'scaling-chaos', labelEn: 'Scaling Chaos', labelDe: 'Scaling Chaos' },
  { id: 'ai-transformation', labelEn: 'AI Transformation', labelDe: 'AI Transformation' },
  { id: 'board-pressure', labelEn: 'Board Pressure', labelDe: 'Board Pressure' },
  { id: 'portfolio-performance', labelEn: 'Portfolio Performance', labelDe: 'Portfolio Performance' },
  { id: 'orientation', labelEn: 'Orientation & Others', labelDe: 'Orientierung & Sonstiges' },
];

export const solutionTiles: SolutionTile[] = [
  // ============================================
  // INSIGHTS & CLARITY (2 Kacheln)
  // ============================================
  {
    id: 1,
    slug: 'inflection-call',
    solutionType: 'insights',
    challenges: 'universal',
    price: 'FREE',
    priceTag: 'free',
    headlineEn: 'Inflection Call',
    headlineDe: 'Inflection Call',
    problemEn: 'You\'re unsure which lever to pull first—or if you\'re even solving the right problem.',
    problemDe: 'Du bist unsicher, welchen Hebel du zuerst bewegen sollst – oder ob du überhaupt das richtige Problem löst.',
    solutionEn: 'In 30 focused minutes we pinpoint your #1 bottleneck and map a clear next step—no pitch, no pressure.',
    solutionDe: 'In 30 fokussierten Minuten identifizieren wir deinen #1 Engpass und skizzieren den nächsten Schritt – kein Pitch, kein Druck.',
    deliverablesEn: [
      'Bottleneck diagnosis',
      'Prioritized action',
      'Optional: follow-up recommendation'
    ],
    deliverablesDe: [
      'Engpass-Diagnose',
      'Priorisierte Aktion',
      'Optional: Follow-up Empfehlung'
    ],
    impactEn: 'Clarity on your biggest lever within 30 min.',
    impactDe: 'Klarheit über deinen größten Hebel in 30 Min.',
    primaryCtaEn: 'Book Free Call',
    primaryCtaDe: 'Kostenloses Gespräch buchen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/inflection-call',
    secondaryCtaEn: 'Learn more',
    secondaryCtaDe: 'Mehr erfahren',
    secondaryCtaUrl: '/solutions/inflection-call'
  },
  {
    id: 2,
    slug: 'expert-session',
    solutionType: 'insights',
    challenges: 'universal',
    price: '€490–€890',
    priceTag: 'paid',
    headlineEn: 'Expert Session',
    headlineDe: 'Expert Session',
    problemEn: 'You need a deep-dive with a seasoned operator, not a generic coach.',
    problemDe: 'Du brauchst einen Deep-Dive mit einem erfahrenen Operator, keinen generischen Coach.',
    solutionEn: 'A 60–120 min working session tailored to your exact challenge—hands-on, actionable, no fluff.',
    solutionDe: 'Eine 60–120 Min. Arbeitssession, maßgeschneidert auf deine Herausforderung – praxisnah, umsetzbar, ohne Fluff.',
    deliverablesEn: [
      'Pre-session brief review',
      'Live working session (60-120 min)',
      'Summary memo with next steps'
    ],
    deliverablesDe: [
      'Vorab-Brief Review',
      'Live Working Session (60-120 Min.)',
      'Summary Memo mit nächsten Schritten'
    ],
    impactEn: 'Specific answers + clear actions for your toughest question.',
    impactDe: 'Konkrete Antworten + klare Aktionen für deine schwierigste Frage.',
    primaryCtaEn: 'Book Session',
    primaryCtaDe: 'Session buchen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/expert-session',
    secondaryCtaEn: 'Learn more',
    secondaryCtaDe: 'Mehr erfahren',
    secondaryCtaUrl: '/solutions/expert-session'
  },

  // ============================================
  // DECISION SUPPORT (8 Kacheln)
  // ============================================
  {
    id: 3,
    slug: 'gtm-review',
    solutionType: 'decision-support',
    challenges: ['cac-crisis', 'growth-stalled'],
    price: '€2.9K',
    priceTag: 'paid',
    headlineEn: 'GTM Review',
    headlineDe: 'GTM Review',
    problemEn: 'Your funnel feels leaky, but you can\'t isolate where conversions die.',
    problemDe: 'Dein Funnel fühlt sich undicht an, aber du kannst nicht isolieren, wo Conversions sterben.',
    solutionEn: 'We audit your entire go-to-market engine and highlight the 3 highest-ROI fixes.',
    solutionDe: 'Wir auditieren deine gesamte Go-to-Market-Engine und identifizieren die 3 höchsten ROI-Fixes.',
    deliverablesEn: [
      'Funnel & channel audit',
      'CAC/LTV breakdown',
      'Prioritized fix roadmap'
    ],
    deliverablesDe: [
      'Funnel & Channel Audit',
      'CAC/LTV Aufschlüsselung',
      'Priorisierte Fix-Roadmap'
    ],
    impactEn: 'Know exactly which GTM lever moves revenue fastest.',
    impactDe: 'Wisse genau, welcher GTM-Hebel Revenue am schnellsten bewegt.',
    primaryCtaEn: 'Request Review',
    primaryCtaDe: 'Review anfragen',
    primaryCtaAction: 'request',
    secondaryCtaEn: 'See sample output',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/solutions/gtm-review',
    addOnPricing: {
      baseLabelEn: 'Standalone',
      baseLabelDe: 'Standalone',
      basePrice: '€2.9K',
      bridgeLabelEn: 'With Transformation',
      bridgeLabelDe: 'Mit Transformation',
      bridgePrice: '€990'
    }
  },
  {
    id: 4,
    slug: 'pricing-review',
    solutionType: 'decision-support',
    challenges: ['pricing-breakdown'],
    price: '€2.9K',
    priceTag: 'paid',
    headlineEn: 'Pricing Review',
    headlineDe: 'Pricing Review',
    problemEn: 'You suspect you\'re leaving money on the table—or scaring buyers away.',
    problemDe: 'Du vermutest, dass du Geld liegen lässt – oder Käufer verschreckst.',
    solutionEn: 'We dissect your pricing architecture vs. value delivered and reveal quick-win adjustments.',
    solutionDe: 'Wir analysieren deine Preisarchitektur vs. geliefertem Wert und zeigen Quick-Win Anpassungen.',
    deliverablesEn: [
      'Pricing vs. value audit',
      'Competitive positioning map',
      'Recommended price/packaging tweaks'
    ],
    deliverablesDe: [
      'Pricing vs. Value Audit',
      'Wettbewerbspositionierungs-Map',
      'Empfohlene Preis-/Packaging-Tweaks'
    ],
    impactEn: 'Capture more revenue without losing deals.',
    impactDe: 'Mehr Umsatz ohne Deals zu verlieren.',
    primaryCtaEn: 'Request Review',
    primaryCtaDe: 'Review anfragen',
    primaryCtaAction: 'request',
    secondaryCtaEn: 'See sample output',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/solutions/pricing-review',
    addOnPricing: {
      baseLabelEn: 'Standalone',
      baseLabelDe: 'Standalone',
      basePrice: '€2.9K',
      bridgeLabelEn: 'With Transformation',
      bridgeLabelDe: 'Mit Transformation',
      bridgePrice: '€990'
    }
  },
  {
    id: 5,
    slug: 'scaling-assessment',
    solutionType: 'decision-support',
    challenges: ['scaling-chaos'],
    price: '€2.9K',
    priceTag: 'paid',
    headlineEn: 'Scaling Assessment',
    headlineDe: 'Scaling Assessment',
    problemEn: 'Ops are breaking as you grow—team, process, or tech, you\'re not sure which.',
    problemDe: 'Ops brechen beim Wachstum – Team, Prozess oder Tech, du bist nicht sicher was.',
    solutionEn: 'We benchmark your org against 150+ scale-ups and surface the structural bottleneck.',
    solutionDe: 'Wir benchmarken deine Org gegen 150+ Scale-ups und decken den strukturellen Engpass auf.',
    deliverablesEn: [
      'Org-structure benchmark',
      'Process maturity scorecard',
      'Bottleneck + fix priority list'
    ],
    deliverablesDe: [
      'Org-Struktur Benchmark',
      'Prozessreifegrad-Scorecard',
      'Engpass + Fix-Prioritätsliste'
    ],
    impactEn: 'Scale without firefighting every sprint.',
    impactDe: 'Skalieren ohne jeden Sprint zu feuerwehren.',
    primaryCtaEn: 'Request Assessment',
    primaryCtaDe: 'Assessment anfragen',
    primaryCtaAction: 'request',
    secondaryCtaEn: 'See sample output',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/solutions/scaling-assessment',
    addOnPricing: {
      baseLabelEn: 'Standalone',
      baseLabelDe: 'Standalone',
      basePrice: '€2.9K',
      bridgeLabelEn: 'With Transformation',
      bridgeLabelDe: 'Mit Transformation',
      bridgePrice: '€990'
    }
  },
  {
    id: 6,
    slug: 'ai-assessment',
    solutionType: 'decision-support',
    challenges: ['ai-transformation'],
    price: '€2.9K',
    priceTag: 'paid',
    headlineEn: 'AI Assessment',
    headlineDe: 'AI Assessment',
    problemEn: 'You know AI matters, but can\'t tell hype from real ROI for your business.',
    problemDe: 'Du weißt, dass AI wichtig ist, aber kannst Hype nicht von echtem ROI für dein Business unterscheiden.',
    solutionEn: 'We map AI opportunities to your value chain and quantify impact vs. effort.',
    solutionDe: 'Wir mappen AI-Opportunities auf deine Wertschöpfungskette und quantifizieren Impact vs. Aufwand.',
    deliverablesEn: [
      'AI opportunity map',
      'ROI-per-use-case matrix',
      '90-day pilot recommendation'
    ],
    deliverablesDe: [
      'AI Opportunity Map',
      'ROI-per-Use-Case Matrix',
      '90-Tage Pilot-Empfehlung'
    ],
    impactEn: 'Move from AI curiosity to concrete pilot in weeks.',
    impactDe: 'Von AI-Neugier zu konkretem Pilot in Wochen.',
    primaryCtaEn: 'Request Assessment',
    primaryCtaDe: 'Assessment anfragen',
    primaryCtaAction: 'request',
    secondaryCtaEn: 'See sample output',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/solutions/ai-assessment',
    addOnPricing: {
      baseLabelEn: 'Standalone',
      baseLabelDe: 'Standalone',
      basePrice: '€2.9K',
      bridgeLabelEn: 'With Transformation',
      bridgeLabelDe: 'Mit Transformation',
      bridgePrice: '€990'
    }
  },
  {
    id: 7,
    slug: 'pitch-deck-check',
    solutionType: 'decision-support',
    challenges: ['board-pressure', 'orientation'],
    price: '€1.9K',
    priceTag: 'paid',
    headlineEn: 'Pitch Deck Check',
    headlineDe: 'Pitch Deck Check',
    problemEn: 'Investors keep passing—your deck might be the weak link.',
    problemDe: 'Investoren sagen ständig ab – dein Deck könnte das schwache Glied sein.',
    solutionEn: 'Tear-down + rebuild of narrative, structure, and data with VC-lens feedback.',
    solutionDe: 'Tear-down + Rebuild von Narrativ, Struktur und Daten mit VC-Lens Feedback.',
    deliverablesEn: [
      'Deck audit (slide-by-slide)',
      'Narrative reframe',
      'Investor-ready revision notes'
    ],
    deliverablesDe: [
      'Deck Audit (Slide-by-Slide)',
      'Narrativ-Reframe',
      'Investor-ready Revisions-Notizen'
    ],
    impactEn: 'A deck that earns the next meeting.',
    impactDe: 'Ein Deck, das das nächste Meeting verdient.',
    primaryCtaEn: 'Request Check',
    primaryCtaDe: 'Check anfragen',
    primaryCtaAction: 'request',
    secondaryCtaEn: 'See sample output',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/solutions/pitch-deck-check',
    addOnPricing: {
      baseLabelEn: 'Standalone',
      baseLabelDe: 'Standalone',
      basePrice: '€1.9K',
      bridgeLabelEn: 'With Transformation',
      bridgeLabelDe: 'Mit Transformation',
      bridgePrice: '€490'
    }
  },
  {
    id: 8,
    slug: 'vc-dd-simulation',
    solutionType: 'decision-support',
    challenges: ['board-pressure'],
    price: '€4.9K',
    priceTag: 'paid',
    headlineEn: 'VC DD Simulation',
    headlineDe: 'VC DD Simulation',
    problemEn: 'Due diligence is coming and you\'re not sure where you\'re exposed.',
    problemDe: 'Due Diligence steht an und du bist nicht sicher, wo du exponiert bist.',
    solutionEn: 'A mock DD process that stress-tests financials, ops, and narrative before real investors do.',
    solutionDe: 'Ein Mock-DD-Prozess, der Financials, Ops und Narrativ testet, bevor echte Investoren es tun.',
    deliverablesEn: [
      'Full DD question battery',
      'Gap analysis + risk flags',
      'Prep playbook for real DD'
    ],
    deliverablesDe: [
      'Volle DD-Fragenbatterie',
      'Gap-Analyse + Risiko-Flags',
      'Prep-Playbook für echte DD'
    ],
    impactEn: 'Walk into DD confident, not blindsided.',
    impactDe: 'Geh in die DD selbstbewusst, nicht überrascht.',
    primaryCtaEn: 'Request Simulation',
    primaryCtaDe: 'Simulation anfragen',
    primaryCtaAction: 'request',
    secondaryCtaEn: 'See sample output',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/solutions/vc-dd-simulation',
    addOnPricing: {
      baseLabelEn: 'Standalone',
      baseLabelDe: 'Standalone',
      basePrice: '€4.9K',
      bridgeLabelEn: 'With Transformation',
      bridgeLabelDe: 'Mit Transformation',
      bridgePrice: '€1.9K'
    }
  },
  {
    id: 9,
    slug: 'portfolio-assessment',
    solutionType: 'decision-support',
    challenges: ['portfolio-performance'],
    price: '€4.9K',
    priceTag: 'paid',
    headlineEn: 'Portfolio Assessment',
    headlineDe: 'Portfolio Assessment',
    problemEn: 'You have 10-30 companies—some shine, others stall. You need a triage lens.',
    problemDe: 'Du hast 10-30 Companies – manche glänzen, andere stagnieren. Du brauchst eine Triage-Linse.',
    solutionEn: 'We score each portco on growth-readiness and flag where intervention has highest payoff.',
    solutionDe: 'Wir bewerten jedes Portco auf Growth-Readiness und flaggen, wo Intervention den höchsten Payoff hat.',
    deliverablesEn: [
      'Portfolio health scorecard',
      'Top-3 intervention targets',
      'Suggested engagement model'
    ],
    deliverablesDe: [
      'Portfolio Health Scorecard',
      'Top-3 Interventions-Targets',
      'Vorgeschlagenes Engagement-Modell'
    ],
    impactEn: 'Deploy your attention where it moves TVPI.',
    impactDe: 'Setze deine Aufmerksamkeit dort ein, wo sie TVPI bewegt.',
    primaryCtaEn: 'Request Assessment',
    primaryCtaDe: 'Assessment anfragen',
    primaryCtaAction: 'request',
    secondaryCtaEn: 'See sample output',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/solutions/portfolio-assessment',
    addOnPricing: {
      baseLabelEn: 'Standalone',
      baseLabelDe: 'Standalone',
      basePrice: '€4.9K',
      bridgeLabelEn: 'With Transformation',
      bridgeLabelDe: 'Mit Transformation',
      bridgePrice: '€1.9K'
    }
  },
  {
    id: 10,
    slug: 'custom-analysis',
    solutionType: 'decision-support',
    challenges: 'universal',
    price: '€2.9K–€9K',
    priceTag: 'paid',
    headlineEn: 'Custom Analysis',
    headlineDe: 'Custom Analysis',
    problemEn: 'Your challenge doesn\'t fit a template—you need bespoke diagnostic depth.',
    problemDe: 'Deine Herausforderung passt in kein Template – du brauchst maßgeschneiderte Diagnosetiefe.',
    solutionEn: 'Scoped to your question: we design a tailored analysis and deliver a decision-ready brief.',
    solutionDe: 'Auf deine Frage zugeschnitten: Wir designen eine maßgeschneiderte Analyse und liefern ein entscheidungsreifes Brief.',
    deliverablesEn: [
      'Custom research scope',
      'Analysis deck',
      'Exec summary + recommendations'
    ],
    deliverablesDe: [
      'Custom Research Scope',
      'Analyse-Deck',
      'Exec Summary + Empfehlungen'
    ],
    impactEn: 'Answers to the question only you are asking.',
    impactDe: 'Antworten auf die Frage, die nur du stellst.',
    primaryCtaEn: 'Discuss Scope',
    primaryCtaDe: 'Scope besprechen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/custom-analysis',
    secondaryCtaEn: 'See past examples',
    secondaryCtaDe: 'Frühere Beispiele ansehen',
    secondaryCtaUrl: '/solutions/custom-analysis'
  },

  // ============================================
  // TRANSFORMATION – POWER UP (9 Kacheln)
  // ============================================
  {
    id: 11,
    slug: 'power-up-cac',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['cac-crisis'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: CAC',
    headlineDe: 'Power Up: CAC',
    problemEn: 'Acquisition costs are eating your runway and unit economics are upside-down.',
    problemDe: 'Akquisitionskosten fressen deine Runway und Unit Economics stehen Kopf.',
    solutionEn: '8-week sprint to re-engineer your funnel, sharpen ICP, and install CAC guardrails.',
    solutionDe: '8-Wochen-Sprint, um deinen Funnel neu zu engineeren, ICP zu schärfen und CAC-Guardrails zu installieren.',
    deliverablesEn: [
      'Channel efficiency audit',
      'ICP sharpening workshop',
      'CAC reduction playbook'
    ],
    deliverablesDe: [
      'Channel Efficiency Audit',
      'ICP Sharpening Workshop',
      'CAC Reduction Playbook'
    ],
    impactEn: 'Target: 20–40% CAC reduction in 90 days.',
    impactDe: 'Ziel: 20–40% CAC-Reduktion in 90 Tagen.',
    primaryCtaEn: 'Start Transformation',
    primaryCtaDe: 'Transformation starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/transformation',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/cac-transformation'
  },
  {
    id: 12,
    slug: 'power-up-growth',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['growth-stalled'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: Growth',
    headlineDe: 'Power Up: Growth',
    problemEn: 'You hit a plateau and can\'t identify the next growth unlock.',
    problemDe: 'Du hast ein Plateau erreicht und kannst den nächsten Growth-Unlock nicht identifizieren.',
    solutionEn: '8-week sprint to diagnose stall drivers, test new levers, and reignite momentum.',
    solutionDe: '8-Wochen-Sprint, um Stall-Treiber zu diagnostizieren, neue Hebel zu testen und Momentum wiederzuentfachen.',
    deliverablesEn: [
      'Growth diagnostics',
      'Lever testing framework',
      'Reactivation playbook'
    ],
    deliverablesDe: [
      'Growth Diagnostics',
      'Hebel-Testing Framework',
      'Reaktivierungs-Playbook'
    ],
    impactEn: 'Unblock growth within one quarter.',
    impactDe: 'Growth innerhalb eines Quartals entblocken.',
    primaryCtaEn: 'Start Transformation',
    primaryCtaDe: 'Transformation starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/transformation',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/growth-transformation'
  },
  {
    id: 13,
    slug: 'power-up-pricing',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['pricing-breakdown'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: Pricing',
    headlineDe: 'Power Up: Pricing',
    problemEn: 'Your pricing feels arbitrary; you\'re likely under- or over-charging segments.',
    problemDe: 'Dein Pricing fühlt sich willkürlich an; du lädst wahrscheinlich Segmente unter- oder über.',
    solutionEn: '8-week sprint to rebuild pricing architecture, test elasticity, and roll out new tiers.',
    solutionDe: '8-Wochen-Sprint, um Preisarchitektur neu zu bauen, Elastizität zu testen und neue Tiers auszurollen.',
    deliverablesEn: [
      'Willingness-to-pay research',
      'New pricing model',
      'Rollout + comms plan'
    ],
    deliverablesDe: [
      'Willingness-to-Pay Research',
      'Neues Pricing-Modell',
      'Rollout + Kommunikationsplan'
    ],
    impactEn: 'Unlock 10–25% ARPU lift without churn spike.',
    impactDe: '10–25% ARPU-Lift ohne Churn-Spike erschließen.',
    primaryCtaEn: 'Start Transformation',
    primaryCtaDe: 'Transformation starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/transformation',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/pricing-transformation'
  },
  {
    id: 14,
    slug: 'power-up-nrr',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['customer-success-broken'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: NRR',
    headlineDe: 'Power Up: NRR',
    problemEn: 'Churn eats growth; upsells are random acts of heroism.',
    problemDe: 'Churn frisst Wachstum; Upsells sind zufällige Heldenaktionen.',
    solutionEn: '8-week sprint to install health-scoring, expansion playbooks, and early-warning triggers.',
    solutionDe: '8-Wochen-Sprint, um Health-Scoring, Expansion Playbooks und Frühwarnsysteme zu installieren.',
    deliverablesEn: [
      'Customer health model',
      'Expansion triggers',
      'NRR improvement playbook'
    ],
    deliverablesDe: [
      'Customer Health Model',
      'Expansion Triggers',
      'NRR Improvement Playbook'
    ],
    impactEn: 'Target: 10–20 pts NRR improvement.',
    impactDe: 'Ziel: 10–20 Punkte NRR-Verbesserung.',
    primaryCtaEn: 'Start Transformation',
    primaryCtaDe: 'Transformation starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/transformation',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/nrr-transformation'
  },
  {
    id: 15,
    slug: 'power-up-scaling',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['scaling-chaos'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: Scaling',
    headlineDe: 'Power Up: Scaling',
    problemEn: 'You\'re growing headcount but output per person is falling.',
    problemDe: 'Du wächst in Headcount, aber Output pro Person fällt.',
    solutionEn: '8-week sprint to clarify roles, install operating cadences, and remove process debt.',
    solutionDe: '8-Wochen-Sprint, um Rollen zu klären, Operating Cadences zu installieren und Process Debt zu entfernen.',
    deliverablesEn: [
      'Org design review',
      'Cadence installation',
      'Process debt cleanup'
    ],
    deliverablesDe: [
      'Org Design Review',
      'Cadence Installation',
      'Process Debt Cleanup'
    ],
    impactEn: 'Scale without the chaos tax.',
    impactDe: 'Skalieren ohne die Chaos-Steuer.',
    primaryCtaEn: 'Start Transformation',
    primaryCtaDe: 'Transformation starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/transformation',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/scaling-transformation'
  },
  {
    id: 16,
    slug: 'power-up-ai',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['ai-transformation'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: AI',
    headlineDe: 'Power Up: AI',
    problemEn: 'You\'ve dabbled in AI but nothing\'s production-grade or ROI-proven.',
    problemDe: 'Du hast mit AI experimentiert, aber nichts ist production-grade oder ROI-bewiesen.',
    solutionEn: '8-week sprint to ship 1–2 AI use-cases end-to-end with measurable impact.',
    solutionDe: '8-Wochen-Sprint, um 1–2 AI Use-Cases end-to-end mit messbarem Impact zu shippen.',
    deliverablesEn: [
      'Use-case prioritization',
      'MVP build + deployment',
      'ROI measurement framework'
    ],
    deliverablesDe: [
      'Use-Case Priorisierung',
      'MVP Build + Deployment',
      'ROI Measurement Framework'
    ],
    impactEn: 'First AI win live in production.',
    impactDe: 'Erster AI-Win live in Production.',
    primaryCtaEn: 'Start Transformation',
    primaryCtaDe: 'Transformation starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/transformation',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/ai-transformation'
  },
  {
    id: 17,
    slug: 'power-up-board',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['board-pressure'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: Board',
    headlineDe: 'Power Up: Board',
    problemEn: 'Board meetings feel like accountability theater; you need strategic partnership.',
    problemDe: 'Board Meetings fühlen sich wie Accountability-Theater an; du brauchst strategische Partnerschaft.',
    solutionEn: '8-week sprint to redesign board materials, install reporting cadence, and prep narratives.',
    solutionDe: '8-Wochen-Sprint, um Board-Materialien neu zu designen, Reporting-Cadence zu installieren und Narrative vorzubereiten.',
    deliverablesEn: [
      'Board pack redesign',
      'Reporting dashboard',
      'Narrative coaching'
    ],
    deliverablesDe: [
      'Board Pack Redesign',
      'Reporting Dashboard',
      'Narrativ-Coaching'
    ],
    impactEn: 'Turn your board into a strategic asset.',
    impactDe: 'Verwandle dein Board in einen strategischen Asset.',
    primaryCtaEn: 'Start Transformation',
    primaryCtaDe: 'Transformation starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/transformation',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/board-transformation'
  },
  {
    id: 18,
    slug: 'power-up-portfolio',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['portfolio-performance'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: Portfolio',
    headlineDe: 'Power Up: Portfolio',
    problemEn: 'You need to move the needle on 1-2 portcos—fast and focused.',
    problemDe: 'Du musst bei 1-2 Portcos schnell und fokussiert die Nadel bewegen.',
    solutionEn: '8-week sprint embedded with selected portco(s) to unblock their #1 growth constraint.',
    solutionDe: '8-Wochen-Sprint embedded mit ausgewählten Portco(s), um ihren #1 Growth Constraint zu entblocken.',
    deliverablesEn: [
      'Portco diagnostic',
      'Intervention execution',
      'Handoff playbook'
    ],
    deliverablesDe: [
      'Portco Diagnostic',
      'Interventions-Ausführung',
      'Handoff Playbook'
    ],
    impactEn: 'Visible KPI lift within quarter.',
    impactDe: 'Sichtbarer KPI-Lift innerhalb des Quartals.',
    primaryCtaEn: 'Start Transformation',
    primaryCtaDe: 'Transformation starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/transformation',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/portfolio-transformation'
  },
  {
    id: 19,
    slug: 'power-up-custom',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: 'universal',
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: Custom',
    headlineDe: 'Power Up: Custom',
    problemEn: 'Your bottleneck doesn\'t map to a standard track—you need a bespoke sprint.',
    problemDe: 'Dein Engpass passt nicht auf einen Standard-Track – du brauchst einen maßgeschneiderten Sprint.',
    solutionEn: '8-week sprint custom-designed around your unique constraint.',
    solutionDe: '8-Wochen-Sprint, maßgeschneidert um deinen einzigartigen Constraint.',
    deliverablesEn: [
      'Custom scope design',
      'Execution sprints',
      'Transition + handoff'
    ],
    deliverablesDe: [
      'Custom Scope Design',
      'Execution Sprints',
      'Transition + Handoff'
    ],
    impactEn: 'Constraint-specific results in 8 weeks.',
    impactDe: 'Constraint-spezifische Ergebnisse in 8 Wochen.',
    primaryCtaEn: 'Discuss Scope',
    primaryCtaDe: 'Scope besprechen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/transformation',
    secondaryCtaEn: 'See past examples',
    secondaryCtaDe: 'Frühere Beispiele ansehen',
    secondaryCtaUrl: '/cases/custom-transformation'
  },

  // ============================================
  // TRANSFORMATION – BOOST (9 Kacheln)
  // ============================================
  {
    id: 20,
    slug: 'boost-hypergrowth',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['cac-crisis', 'growth-stalled'],
    price: '€58K',
    priceTag: 'paid',
    headlineEn: 'Boost: Hypergrowth',
    headlineDe: 'Boost: Hypergrowth',
    problemEn: 'You need to compress 2 years of scaling into 6 months.',
    problemDe: 'Du musst 2 Jahre Skalierung in 6 Monate komprimieren.',
    solutionEn: '6-month intensive across GTM, ops, and team to achieve breakthrough velocity.',
    solutionDe: '6-Monats-Intensiv über GTM, Ops und Team, um Durchbruchsgeschwindigkeit zu erreichen.',
    deliverablesEn: [
      'GTM overhaul',
      'Ops scaling playbook',
      'Leadership coaching'
    ],
    deliverablesDe: [
      'GTM Overhaul',
      'Ops Scaling Playbook',
      'Leadership Coaching'
    ],
    impactEn: 'Target: 2–3× growth rate acceleration.',
    impactDe: 'Ziel: 2–3× Growth-Rate Beschleunigung.',
    primaryCtaEn: 'Start Boost',
    primaryCtaDe: 'Boost starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/boost',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/hypergrowth-boost'
  },
  {
    id: 21,
    slug: 'boost-growth',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['growth-stalled'],
    price: '€58K',
    priceTag: 'paid',
    headlineEn: 'Boost: Growth',
    headlineDe: 'Boost: Growth',
    problemEn: 'You need sustained momentum, not a one-off fix.',
    problemDe: 'Du brauchst nachhaltiges Momentum, keinen einmaligen Fix.',
    solutionEn: '6-month program to build internal growth capability and compound gains.',
    solutionDe: '6-Monats-Programm, um interne Growth-Capability aufzubauen und Gewinne zu compoundieren.',
    deliverablesEn: [
      'Growth team coaching',
      'Experimentation system',
      'Playbook institutionalization'
    ],
    deliverablesDe: [
      'Growth Team Coaching',
      'Experimentier-System',
      'Playbook Institutionalisierung'
    ],
    impactEn: 'Growth muscle that compounds after we leave.',
    impactDe: 'Growth-Muskel, der nach unserem Weggang compoundiert.',
    primaryCtaEn: 'Start Boost',
    primaryCtaDe: 'Boost starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/boost',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/growth-boost'
  },
  {
    id: 22,
    slug: 'boost-pricing',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['pricing-breakdown'],
    price: '€58K',
    priceTag: 'paid',
    headlineEn: 'Boost: Pricing',
    headlineDe: 'Boost: Pricing',
    problemEn: 'Pricing needs a complete overhaul, not just tuning.',
    problemDe: 'Pricing braucht eine komplette Überholung, nicht nur Tuning.',
    solutionEn: '6-month program to redesign, test, and roll out a new pricing & packaging strategy.',
    solutionDe: '6-Monats-Programm, um eine neue Pricing- & Packaging-Strategie zu redesignen, testen und auszurollen.',
    deliverablesEn: [
      'Pricing architecture redesign',
      'A/B testing program',
      'Change management'
    ],
    deliverablesDe: [
      'Pricing-Architektur Redesign',
      'A/B Testing Programm',
      'Change Management'
    ],
    impactEn: 'Sustainable 15–30% revenue/customer lift.',
    impactDe: 'Nachhaltiger 15–30% Revenue/Customer Lift.',
    primaryCtaEn: 'Start Boost',
    primaryCtaDe: 'Boost starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/boost',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/pricing-boost'
  },
  {
    id: 23,
    slug: 'boost-nrr',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['customer-success-broken'],
    price: '€58K',
    priceTag: 'paid',
    headlineEn: 'Boost: NRR',
    headlineDe: 'Boost: NRR',
    problemEn: 'Customer success is a cost center; you need it to become a growth engine.',
    problemDe: 'Customer Success ist ein Cost Center; du brauchst es als Growth Engine.',
    solutionEn: '6-month program to transform CS into a revenue-generating function.',
    solutionDe: '6-Monats-Programm, um CS in eine Umsatz-generierende Funktion zu transformieren.',
    deliverablesEn: [
      'CS-to-revenue playbook',
      'Expansion team training',
      'Tech stack optimization'
    ],
    deliverablesDe: [
      'CS-to-Revenue Playbook',
      'Expansion Team Training',
      'Tech Stack Optimierung'
    ],
    impactEn: 'CS that drives NRR >120%.',
    impactDe: 'CS, das NRR >120% antreibt.',
    primaryCtaEn: 'Start Boost',
    primaryCtaDe: 'Boost starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/boost',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/nrr-boost'
  },
  {
    id: 24,
    slug: 'boost-scaling',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['scaling-chaos'],
    price: '€58K',
    priceTag: 'paid',
    headlineEn: 'Boost: Scaling',
    headlineDe: 'Boost: Scaling',
    problemEn: 'You\'re about to 3× headcount and need the org to not implode.',
    problemDe: 'Du wirst gleich 3× Headcount wachsen und die Org darf nicht implodieren.',
    solutionEn: '6-month program to install the operating system for scale.',
    solutionDe: '6-Monats-Programm, um das Operating System für Scale zu installieren.',
    deliverablesEn: [
      'Org design 2.0',
      'Hiring playbook',
      'Operating cadence system'
    ],
    deliverablesDe: [
      'Org Design 2.0',
      'Hiring Playbook',
      'Operating Cadence System'
    ],
    impactEn: 'Grow 3× without 3× chaos.',
    impactDe: '3× wachsen ohne 3× Chaos.',
    primaryCtaEn: 'Start Boost',
    primaryCtaDe: 'Boost starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/boost',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/scaling-boost'
  },
  {
    id: 25,
    slug: 'boost-ai',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['ai-transformation'],
    price: '€58K',
    priceTag: 'paid',
    headlineEn: 'Boost: AI',
    headlineDe: 'Boost: AI',
    problemEn: 'You want AI woven into your product and ops, not bolted on.',
    problemDe: 'Du willst AI in dein Produkt und Ops eingewoben, nicht angeschraubt.',
    solutionEn: '6-month program to build AI capability across multiple use-cases.',
    solutionDe: '6-Monats-Programm, um AI-Capability über mehrere Use-Cases aufzubauen.',
    deliverablesEn: [
      'AI roadmap',
      'Multi-use-case deployment',
      'Team upskilling'
    ],
    deliverablesDe: [
      'AI Roadmap',
      'Multi-Use-Case Deployment',
      'Team Upskilling'
    ],
    impactEn: 'AI as a core competency, not a side project.',
    impactDe: 'AI als Kernkompetenz, nicht als Nebenprojekt.',
    primaryCtaEn: 'Start Boost',
    primaryCtaDe: 'Boost starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/boost',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/ai-boost'
  },
  {
    id: 26,
    slug: 'boost-board',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['board-pressure'],
    price: '€58K',
    priceTag: 'paid',
    headlineEn: 'Boost: Board',
    headlineDe: 'Boost: Board',
    problemEn: 'You need to fundamentally reset board dynamics and governance.',
    problemDe: 'Du musst Board-Dynamiken und Governance fundamental resetten.',
    solutionEn: '6-month program to rebuild board relationship and install governance best practices.',
    solutionDe: '6-Monats-Programm, um Board-Beziehung neu aufzubauen und Governance Best Practices zu installieren.',
    deliverablesEn: [
      'Board relationship reset',
      'Governance framework',
      'Ongoing board prep coaching'
    ],
    deliverablesDe: [
      'Board Relationship Reset',
      'Governance Framework',
      'Ongoing Board Prep Coaching'
    ],
    impactEn: 'A board that accelerates, not decelerates.',
    impactDe: 'Ein Board, das beschleunigt, nicht bremst.',
    primaryCtaEn: 'Start Boost',
    primaryCtaDe: 'Boost starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/boost',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/board-boost'
  },
  {
    id: 27,
    slug: 'boost-portfolio',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['portfolio-performance'],
    price: '€58K',
    priceTag: 'paid',
    headlineEn: 'Boost: Portfolio',
    headlineDe: 'Boost: Portfolio',
    problemEn: 'You need to move multiple portcos simultaneously.',
    problemDe: 'Du musst mehrere Portcos gleichzeitig bewegen.',
    solutionEn: '6-month program across 3-5 portfolio companies with shared learnings.',
    solutionDe: '6-Monats-Programm über 3-5 Portfolio-Companies mit geteilten Learnings.',
    deliverablesEn: [
      'Multi-portco diagnostics',
      'Parallel interventions',
      'Cross-portfolio playbook'
    ],
    deliverablesDe: [
      'Multi-Portco Diagnostics',
      'Parallele Interventionen',
      'Cross-Portfolio Playbook'
    ],
    impactEn: 'Portfolio-wide uplift, not one-off wins.',
    impactDe: 'Portfolio-weiter Uplift, keine einmaligen Wins.',
    primaryCtaEn: 'Start Boost',
    primaryCtaDe: 'Boost starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/boost',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/portfolio-boost'
  },
  {
    id: 28,
    slug: 'boost-custom',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: 'universal',
    price: '€58K',
    priceTag: 'paid',
    headlineEn: 'Boost: Custom',
    headlineDe: 'Boost: Custom',
    problemEn: 'Your transformation needs span multiple domains.',
    problemDe: 'Deine Transformationsbedürfnisse spannen mehrere Domains.',
    solutionEn: '6-month custom program designed for your unique multi-domain challenge.',
    solutionDe: '6-Monats Custom-Programm, designt für deine einzigartige Multi-Domain Herausforderung.',
    deliverablesEn: [
      'Custom program design',
      'Cross-functional execution',
      'Integrated outcomes'
    ],
    deliverablesDe: [
      'Custom Program Design',
      'Cross-funktionale Execution',
      'Integrierte Outcomes'
    ],
    impactEn: 'Transformation shaped to your reality.',
    impactDe: 'Transformation geformt nach deiner Realität.',
    primaryCtaEn: 'Discuss Scope',
    primaryCtaDe: 'Scope besprechen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/boost',
    secondaryCtaEn: 'See past examples',
    secondaryCtaDe: 'Frühere Beispiele ansehen',
    secondaryCtaUrl: '/cases/custom-boost'
  },

  // ============================================
  // TRANSFORMATION – ACCELERATE (5 Kacheln)
  // ============================================
  {
    id: 29,
    slug: 'accelerate-hypergrowth',
    solutionType: 'transformation',
    transformationTier: 'accelerate',
    challenges: ['cac-crisis', 'growth-stalled', 'scaling-chaos'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: Hypergrowth',
    headlineDe: 'Accelerate: Hypergrowth',
    problemEn: 'You\'re gunning for category leadership and need a full-stack partner.',
    problemDe: 'Du zielst auf Category Leadership und brauchst einen Full-Stack Partner.',
    solutionEn: '12-month embedded partnership covering GTM, product, ops, and team.',
    solutionDe: '12-Monats-Embedded-Partnership, die GTM, Produkt, Ops und Team abdeckt.',
    deliverablesEn: [
      'Full-stack transformation',
      'Embedded team member',
      'Quarterly strategy resets'
    ],
    deliverablesDe: [
      'Full-Stack Transformation',
      'Embedded Team Member',
      'Quartalsweise Strategie-Resets'
    ],
    impactEn: 'Category-defining trajectory.',
    impactDe: 'Kategorie-definierende Trajektorie.',
    primaryCtaEn: 'Start Accelerate',
    primaryCtaDe: 'Accelerate starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/accelerate',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/hypergrowth-accelerate'
  },
  {
    id: 30,
    slug: 'accelerate-sustainable',
    solutionType: 'transformation',
    transformationTier: 'accelerate',
    challenges: ['growth-stalled', 'scaling-chaos', 'customer-success-broken'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: Sustainable Growth',
    headlineDe: 'Accelerate: Nachhaltiges Wachstum',
    problemEn: 'You want growth that compounds, not growth that burns out.',
    problemDe: 'Du willst Wachstum, das compoundiert, nicht Wachstum, das ausbrennt.',
    solutionEn: '12-month program focused on efficient, durable growth mechanics.',
    solutionDe: '12-Monats-Programm fokussiert auf effiziente, dauerhafte Growth-Mechaniken.',
    deliverablesEn: [
      'Efficiency playbook',
      'Sustainable unit economics',
      'Team resilience coaching'
    ],
    deliverablesDe: [
      'Effizienz-Playbook',
      'Nachhaltige Unit Economics',
      'Team Resilience Coaching'
    ],
    impactEn: 'Growth you can sustain for years.',
    impactDe: 'Wachstum, das du jahrelang aufrechterhalten kannst.',
    primaryCtaEn: 'Start Accelerate',
    primaryCtaDe: 'Accelerate starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/accelerate',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/sustainable-accelerate'
  },
  {
    id: 31,
    slug: 'accelerate-ai-native',
    solutionType: 'transformation',
    transformationTier: 'accelerate',
    challenges: ['ai-transformation'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: AI-Native',
    headlineDe: 'Accelerate: AI-Native',
    problemEn: 'You want to become an AI-first company, not just add AI features.',
    problemDe: 'Du willst eine AI-First Company werden, nicht nur AI-Features hinzufügen.',
    solutionEn: '12-month transformation to make AI core to product, ops, and culture.',
    solutionDe: '12-Monats-Transformation, um AI zum Kern von Produkt, Ops und Kultur zu machen.',
    deliverablesEn: [
      'AI-native product strategy',
      'Org-wide AI adoption',
      'AI talent & culture'
    ],
    deliverablesDe: [
      'AI-Native Produktstrategie',
      'Org-weite AI Adoption',
      'AI Talent & Kultur'
    ],
    impactEn: 'Become the AI leader in your category.',
    impactDe: 'Werde der AI-Leader in deiner Kategorie.',
    primaryCtaEn: 'Start Accelerate',
    primaryCtaDe: 'Accelerate starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/accelerate',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/ai-native-accelerate'
  },
  {
    id: 32,
    slug: 'accelerate-exit',
    solutionType: 'transformation',
    transformationTier: 'accelerate',
    challenges: ['board-pressure'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: Exit-Readiness',
    headlineDe: 'Accelerate: Exit-Readiness',
    problemEn: 'You have 12-18 months to an exit and need to maximize valuation.',
    problemDe: 'Du hast 12-18 Monate bis zum Exit und musst die Bewertung maximieren.',
    solutionEn: '12-month program to optimize every valuation driver before exit.',
    solutionDe: '12-Monats-Programm, um jeden Bewertungstreiber vor dem Exit zu optimieren.',
    deliverablesEn: [
      'Valuation driver audit',
      'Exit narrative build',
      'Ops cleanup for DD'
    ],
    deliverablesDe: [
      'Bewertungstreiber Audit',
      'Exit Narrative Build',
      'Ops Cleanup für DD'
    ],
    impactEn: 'Exit at top-quartile multiples.',
    impactDe: 'Exit zu Top-Quartil Multiples.',
    primaryCtaEn: 'Start Accelerate',
    primaryCtaDe: 'Accelerate starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/accelerate',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/exit-accelerate'
  },
  {
    id: 33,
    slug: 'accelerate-portfolio',
    solutionType: 'transformation',
    transformationTier: 'accelerate',
    challenges: ['portfolio-performance'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: Portfolio',
    headlineDe: 'Accelerate: Portfolio',
    problemEn: 'You want a systematic approach to lifting your entire portfolio.',
    problemDe: 'Du willst einen systematischen Ansatz, um dein gesamtes Portfolio zu heben.',
    solutionEn: '12-month program to install portfolio-wide growth infrastructure.',
    solutionDe: '12-Monats-Programm, um portfolio-weite Growth-Infrastruktur zu installieren.',
    deliverablesEn: [
      'Portfolio operating model',
      'Shared services design',
      'LP-ready reporting'
    ],
    deliverablesDe: [
      'Portfolio Operating Model',
      'Shared Services Design',
      'LP-Ready Reporting'
    ],
    impactEn: 'Systematic TVPI improvement.',
    impactDe: 'Systematische TVPI-Verbesserung.',
    primaryCtaEn: 'Start Accelerate',
    primaryCtaDe: 'Accelerate starten',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/accelerate',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/portfolio-accelerate'
  },

  // ============================================
  // TRAINING & ENABLEMENT (1 Kachel)
  // ============================================
  {
    id: 34,
    slug: 'workshop',
    solutionType: 'training',
    challenges: 'universal',
    price: '€2.5K–€5K',
    priceTag: 'paid',
    headlineEn: 'Workshop',
    headlineDe: 'Workshop',
    problemEn: 'Your team needs shared language, frameworks, or skill upgrades.',
    problemDe: 'Dein Team braucht gemeinsame Sprache, Frameworks oder Skill-Upgrades.',
    solutionEn: 'Half- or full-day interactive workshop on scaling topics (GTM, pricing, AI, ops).',
    solutionDe: 'Halb- oder ganztägiger interaktiver Workshop zu Scaling-Themen (GTM, Pricing, AI, Ops).',
    deliverablesEn: [
      'Custom workshop design',
      'Participant workbook',
      'Action plan output'
    ],
    deliverablesDe: [
      'Custom Workshop Design',
      'Teilnehmer-Workbook',
      'Aktionsplan Output'
    ],
    impactEn: 'Aligned team with new playbook skills.',
    impactDe: 'Aligned Team mit neuen Playbook-Skills.',
    primaryCtaEn: 'Book Workshop',
    primaryCtaDe: 'Workshop buchen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/workshop',
    secondaryCtaEn: 'See workshop topics',
    secondaryCtaDe: 'Workshop-Themen ansehen',
    secondaryCtaUrl: '/solutions/workshop'
  },

  // ============================================
  // BESPOKE STRATEGY (1 Kachel)
  // ============================================
  {
    id: 35,
    slug: 'strategic-advisory',
    solutionType: 'bespoke',
    challenges: 'universal',
    price: '€8K–€40K',
    priceTag: 'paid',
    headlineEn: 'Strategic Advisory',
    headlineDe: 'Strategic Advisory',
    problemEn: 'You need a senior sparring partner for a complex, high-stakes decision.',
    problemDe: 'Du brauchst einen Senior Sparring-Partner für eine komplexe, folgenreiche Entscheidung.',
    solutionEn: 'Scoped engagement to think through a strategic question with hands-on support.',
    solutionDe: 'Scoped Engagement, um eine strategische Frage mit Hands-on Support durchzudenken.',
    deliverablesEn: [
      'Strategic framing',
      'Options analysis',
      'Decision recommendation'
    ],
    deliverablesDe: [
      'Strategisches Framing',
      'Options-Analyse',
      'Entscheidungsempfehlung'
    ],
    impactEn: 'Confident decision on your biggest bet.',
    impactDe: 'Sichere Entscheidung bei deiner größten Wette.',
    primaryCtaEn: 'Discuss Engagement',
    primaryCtaDe: 'Engagement besprechen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/strategic-advisory',
    secondaryCtaEn: 'See engagement types',
    secondaryCtaDe: 'Engagement-Typen ansehen',
    secondaryCtaUrl: '/solutions/strategic-advisory'
  },

  // ============================================
  // RETAINER (1 Kachel)
  // ============================================
  {
    id: 36,
    slug: 'retainer-advisory',
    solutionType: 'retainer',
    challenges: 'universal',
    price: '€3.9K–€11K/Mo',
    priceTag: 'paid',
    headlineEn: 'Retainer Advisory',
    headlineDe: 'Retainer Advisory',
    problemEn: 'You need ongoing access to a trusted operator, not one-off projects.',
    problemDe: 'Du brauchst laufenden Zugang zu einem vertrauenswürdigen Operator, keine Einzelprojekte.',
    solutionEn: 'Monthly retainer for on-demand advisory, reviews, and strategic sparring.',
    solutionDe: 'Monatlicher Retainer für On-Demand Advisory, Reviews und strategisches Sparring.',
    deliverablesEn: [
      'Monthly advisory hours',
      'Priority access',
      'Quarterly strategy sessions'
    ],
    deliverablesDe: [
      'Monatliche Advisory-Stunden',
      'Priority Access',
      'Quartalsweise Strategie-Sessions'
    ],
    impactEn: 'A strategic partner on speed-dial.',
    impactDe: 'Ein strategischer Partner auf Speed-Dial.',
    primaryCtaEn: 'Discuss Retainer',
    primaryCtaDe: 'Retainer besprechen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/retainer',
    secondaryCtaEn: 'See retainer tiers',
    secondaryCtaDe: 'Retainer-Stufen ansehen',
    secondaryCtaUrl: '/solutions/retainer'
  },

  // ============================================
  // KEYNOTE (1 Kachel)
  // ============================================
  {
    id: 37,
    slug: 'keynote',
    solutionType: 'keynote',
    challenges: 'universal',
    price: '€5K–€10K',
    priceTag: 'paid',
    headlineEn: 'Keynote',
    headlineDe: 'Keynote',
    problemEn: 'You need a speaker who can inspire and educate on scaling or AI.',
    problemDe: 'Du brauchst einen Speaker, der zu Scaling oder AI inspirieren und bilden kann.',
    solutionEn: 'Custom keynote for your event, conference, or offsite.',
    solutionDe: 'Custom Keynote für dein Event, Konferenz oder Offsite.',
    deliverablesEn: [
      'Custom keynote development',
      '30-60 min delivery',
      'Optional Q&A / panel'
    ],
    deliverablesDe: [
      'Custom Keynote-Entwicklung',
      '30-60 Min. Delivery',
      'Optional Q&A / Panel'
    ],
    impactEn: 'Audience leaves with new perspective + energy.',
    impactDe: 'Publikum geht mit neuer Perspektive + Energie.',
    primaryCtaEn: 'Book Keynote',
    primaryCtaDe: 'Keynote buchen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/keynote',
    secondaryCtaEn: 'See keynote topics',
    secondaryCtaDe: 'Keynote-Themen ansehen',
    secondaryCtaUrl: '/solutions/keynote'
  },

  // ============================================
  // TOOLS (4 Kacheln)
  // ============================================
  {
    id: 38,
    slug: 'lasr-io',
    solutionType: 'tools',
    challenges: 'universal',
    price: 'FREE',
    priceTag: 'free',
    headlineEn: 'lasr.io',
    headlineDe: 'lasr.io',
    problemEn: 'You want to self-diagnose your scaling readiness.',
    problemDe: 'Du willst deine Scaling-Readiness selbst diagnostizieren.',
    solutionEn: 'Free online assessment that scores your company on 5 scaling dimensions.',
    solutionDe: 'Kostenloses Online-Assessment, das dein Unternehmen auf 5 Scaling-Dimensionen bewertet.',
    deliverablesEn: [
      '5-dimension score',
      'Benchmark vs. peers',
      'Recommended next steps'
    ],
    deliverablesDe: [
      '5-Dimensionen Score',
      'Benchmark vs. Peers',
      'Empfohlene nächste Schritte'
    ],
    impactEn: 'Know where you stand in 10 minutes.',
    impactDe: 'Wisse in 10 Minuten, wo du stehst.',
    primaryCtaEn: 'Take Assessment',
    primaryCtaDe: 'Assessment starten',
    primaryCtaAction: 'external',
    primaryCtaUrl: 'https://lasr.io',
    secondaryCtaEn: 'Learn about LASR',
    secondaryCtaDe: 'Über LASR erfahren',
    secondaryCtaUrl: '/tools/lasr'
  },
  {
    id: 39,
    slug: 'roi-calculator',
    solutionType: 'tools',
    challenges: 'universal',
    price: 'FREE',
    priceTag: 'free',
    headlineEn: 'ROI Calculator',
    headlineDe: 'ROI Calculator',
    problemEn: 'You want to estimate the ROI of a transformation before committing.',
    problemDe: 'Du willst den ROI einer Transformation vor dem Commitment schätzen.',
    solutionEn: 'Interactive calculator that models potential outcomes based on your inputs.',
    solutionDe: 'Interaktiver Rechner, der potenzielle Outcomes basierend auf deinen Inputs modelliert.',
    deliverablesEn: [
      'Custom ROI projection',
      'Scenario comparison',
      'Shareable report'
    ],
    deliverablesDe: [
      'Custom ROI-Projektion',
      'Szenario-Vergleich',
      'Teilbarer Report'
    ],
    impactEn: 'Make investment decisions with data.',
    impactDe: 'Triff Investment-Entscheidungen mit Daten.',
    primaryCtaEn: 'Calculate ROI',
    primaryCtaDe: 'ROI berechnen',
    primaryCtaAction: 'external',
    primaryCtaUrl: '/tools/roi-calculator',
    secondaryCtaEn: 'See methodology',
    secondaryCtaDe: 'Methodik ansehen',
    secondaryCtaUrl: '/tools/roi-methodology'
  },
  {
    id: 40,
    slug: 'scaling-calculator',
    solutionType: 'tools',
    challenges: ['scaling-chaos'],
    price: 'FREE',
    priceTag: 'free',
    headlineEn: 'Scaling Calculator',
    headlineDe: 'Scaling Calculator',
    problemEn: 'You want to model headcount, burn, and runway as you scale.',
    problemDe: 'Du willst Headcount, Burn und Runway beim Skalieren modellieren.',
    solutionEn: 'Interactive tool to plan your scaling trajectory and resource needs.',
    solutionDe: 'Interaktives Tool, um deine Scaling-Trajektorie und Ressourcenbedürfnisse zu planen.',
    deliverablesEn: [
      'Scaling model',
      'Burn rate projection',
      'Hiring timeline'
    ],
    deliverablesDe: [
      'Scaling-Modell',
      'Burn Rate Projektion',
      'Hiring-Timeline'
    ],
    impactEn: 'Plan your scale with confidence.',
    impactDe: 'Plane deine Skalierung mit Zuversicht.',
    primaryCtaEn: 'Open Calculator',
    primaryCtaDe: 'Rechner öffnen',
    primaryCtaAction: 'external',
    primaryCtaUrl: '/tools/scaling-calculator',
    secondaryCtaEn: 'See example',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/tools/scaling-example'
  },
  {
    id: 41,
    slug: 'keypitchs',
    solutionType: 'tools',
    challenges: ['board-pressure', 'orientation'],
    price: 'FREE',
    priceTag: 'free',
    headlineEn: 'KeyPitchs',
    headlineDe: 'KeyPitchs',
    problemEn: 'You want to see real pitch decks that raised real money.',
    problemDe: 'Du willst echte Pitch Decks sehen, die echtes Geld raised haben.',
    solutionEn: 'Curated library of successful pitch decks with annotations.',
    solutionDe: 'Kuratierte Bibliothek erfolgreicher Pitch Decks mit Annotationen.',
    deliverablesEn: [
      'Deck library access',
      'Slide-by-slide annotations',
      'Pattern insights'
    ],
    deliverablesDe: [
      'Deck Library Zugang',
      'Slide-by-Slide Annotationen',
      'Pattern Insights'
    ],
    impactEn: 'Learn from decks that closed rounds.',
    impactDe: 'Lerne von Decks, die Runden geschlossen haben.',
    primaryCtaEn: 'Explore Decks',
    primaryCtaDe: 'Decks erkunden',
    primaryCtaAction: 'external',
    primaryCtaUrl: 'https://keypitchs.com',
    secondaryCtaEn: 'See featured decks',
    secondaryCtaDe: 'Featured Decks ansehen',
    secondaryCtaUrl: 'https://keypitchs.com/featured'
  }
];

// Helper functions
export const getTilesByChallenge = (challengeId: ChallengeId): SolutionTile[] => {
  if (challengeId === 'all') return solutionTiles;
  return solutionTiles.filter(tile => 
    tile.challenges === 'universal' || 
    (Array.isArray(tile.challenges) && tile.challenges.includes(challengeId))
  );
};

export const getTilesBySolutionType = (typeId: SolutionTypeId): SolutionTile[] => {
  if (typeId === 'all') return solutionTiles;
  return solutionTiles.filter(tile => tile.solutionType === typeId);
};

export const getFilteredTiles = (challengeId: ChallengeId, typeId: SolutionTypeId): SolutionTile[] => {
  return solutionTiles.filter(tile => {
    const challengeMatch = 
      challengeId === 'all' || 
      tile.challenges === 'universal' || 
      (Array.isArray(tile.challenges) && tile.challenges.includes(challengeId));
    
    const typeMatch = typeId === 'all' || tile.solutionType === typeId;
    
    return challengeMatch && typeMatch;
  });
};

export const getTileBySlug = (slug: string): SolutionTile | undefined => {
  return solutionTiles.find(tile => tile.slug === slug);
};

export const getTransformationTierLabel = (tier: 'power-up' | 'boost' | 'accelerate', language: 'en' | 'de'): string => {
  const labels = {
    'power-up': { en: 'Power Up', de: 'Power Up' },
    'boost': { en: 'Boost', de: 'Boost' },
    'accelerate': { en: 'Accelerate', de: 'Accelerate' }
  };
  return labels[tier][language];
};
