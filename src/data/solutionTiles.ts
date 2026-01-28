// Solution Tiles Data - Complete briefing-compliant version
// Last updated: 2026-01-22 (Briefing 04b)

export type SolutionTypeId = 'all' | 'insights' | 'decision-support' | 'tools' | 'transformation' | 'advisory' | 'keynote';

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
}

export interface Challenge {
  id: ChallengeId;
  labelEn: string;
  labelDe: string;
}

export interface SolutionTile {
  id: number;
  slug: string;
  solutionType: Exclude<SolutionTypeId, 'all'>;
  transformationTier?: 'power-up' | 'boost' | 'accelerate';
  challenges: Exclude<ChallengeId, 'all'>[] | 'universal';
  price: string;
  priceTag: 'free' | 'paid' | 'custom';
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
  primaryCtaAction: 'book-call' | 'open-tool' | 'download' | 'learn-more' | 'external';
  primaryCtaUrl: string;
  secondaryCtaEn?: string;
  secondaryCtaDe?: string;
  secondaryCtaUrl?: string;
  addOnPricing?: {
    base: string;
    bridge: string;
  };
}

export const solutionTypes: SolutionType[] = [
  { id: 'all', labelEn: 'All Types', labelDe: 'Alle Typen' },
  { id: 'insights', labelEn: 'Insights & Clarity', labelDe: 'Insights & Clarity' },
  { id: 'decision-support', labelEn: 'Decision Support', labelDe: 'Decision Support' },
  { id: 'tools', labelEn: 'AI-Powered Tools', labelDe: 'AI-Powered Tools' },
  { id: 'transformation', labelEn: 'Transformation', labelDe: 'Transformation' },
  { id: 'advisory', labelEn: 'Strategic Advisory', labelDe: 'Strategic Advisory' },
  { id: 'keynote', labelEn: 'Workshops & Keynotes', labelDe: 'Workshops & Keynotes' }
];

export const challenges: Challenge[] = [
  { id: 'all', labelEn: 'All Challenges', labelDe: 'Alle Challenges' },
  { id: 'cac-crisis', labelEn: 'CAC Crisis', labelDe: 'CAC-Krise' },
  { id: 'growth-stalled', labelEn: 'Growth Stalled', labelDe: 'Wachstum stagniert' },
  { id: 'pricing-breakdown', labelEn: 'Pricing Breakdown', labelDe: 'Pricing-Problem' },
  { id: 'customer-success-broken', labelEn: 'Customer Success Broken', labelDe: 'Customer Success kaputt' },
  { id: 'scaling-chaos', labelEn: 'Scaling Chaos', labelDe: 'Skalierungs-Chaos' },
  { id: 'ai-transformation', labelEn: 'AI Transformation', labelDe: 'AI-Transformation' },
  { id: 'board-pressure', labelEn: 'Board Pressure', labelDe: 'Board-Druck' },
  { id: 'portfolio-performance', labelEn: 'Portfolio Performance', labelDe: 'Portfolio-Performance' },
  { id: 'orientation', labelEn: 'Need Orientation', labelDe: 'Orientierung gesucht' }
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
    price: 'Free',
    priceTag: 'free',
    headlineEn: 'Inflection Call',
    headlineDe: 'Inflection Call',
    problemEn: "You're stuck. CAC is rising, growth is slowing, or your board is asking tough questions. You need clarity on what's holding you back—fast.",
    problemDe: 'Du steckst fest. CAC steigt, Wachstum verlangsamt sich, oder dein Board stellt harte Fragen. Du brauchst schnell Klarheit, was dich zurückhält.',
    solutionEn: 'In 30 minutes, we identify your C_min (minimum capability bottleneck) and give you 3 prioritized next steps with predicted ROI.',
    solutionDe: 'In 30 Minuten identifizieren wir dein C_min (minimaler Capability-Engpass) und geben dir 3 priorisierte nächste Schritte mit vorhergesagtem ROI.',
    deliverablesEn: [
      'Bottleneck diagnosis (C_min identification)',
      '3 next steps with ROI prediction (2-5x)',
      'Program recommendation (if applicable)'
    ],
    deliverablesDe: [
      'Engpass-Diagnose (C_min Identifikation)',
      '3 nächste Schritte mit ROI-Prognose (2-5x)',
      'Programmempfehlung (falls zutreffend)'
    ],
    impactEn: 'Get clarity in 30 minutes. Know exactly where to focus next.',
    impactDe: 'Erhalte Klarheit in 30 Minuten. Wisse genau, worauf du dich als Nächstes konzentrieren solltest.',
    primaryCtaEn: 'Book Free Call',
    primaryCtaDe: 'Kostenlos buchen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/inflection-call',
    secondaryCtaEn: 'Learn more',
    secondaryCtaDe: 'Mehr erfahren',
    secondaryCtaUrl: '/about'
  },
  {
    id: 2,
    slug: 'expert-session',
    solutionType: 'insights',
    challenges: 'universal',
    price: '€490-€890',
    priceTag: 'paid',
    headlineEn: 'Expert Session',
    headlineDe: 'Expert Session',
    problemEn: "You have a specific challenge—CAC, growth, pricing, retention, operations, scaling, AI, deck, portfolio—but you don't need a full program. You need expert guidance. Fast.",
    problemDe: 'Du hast eine spezifische Herausforderung—CAC, Growth, Pricing, Retention, Operations, Scaling, AI, Deck, Portfolio—aber du brauchst kein volles Programm. Du brauchst Experten-Guidance. Schnell.',
    solutionEn: 'Get expert guidance in 45-90 minutes. Choose from 9 session types. Walk away with 3-5 actionable initiatives and a 90-day roadmap. ROI: 3-5x typical.',
    solutionDe: 'Erhalte Experten-Guidance in 45-90 Minuten. Wähle aus 9 Session-Typen. Gehe mit 3-5 umsetzbaren Initiativen und einer 90-Tage-Roadmap. ROI: 3-5x typisch.',
    deliverablesEn: [
      'Expert Guidance: 45-90 Min',
      'Action Plan: 3-5 Initiatives',
      'ROI: 3-5x Typical'
    ],
    deliverablesDe: [
      'Experten-Guidance: 45-90 Min',
      'Aktionsplan: 3-5 Initiativen',
      'ROI: 3-5x Typisch'
    ],
    impactEn: 'Get expert guidance in 45-90 minutes. Walk away with 3-5 actionable initiatives and a 90-day roadmap. Predict 3-5x ROI from time saved and clarity gained.',
    impactDe: 'Erhalte Experten-Guidance in 45-90 Minuten. Gehe mit 3-5 umsetzbaren Initiativen und einer 90-Tage-Roadmap. Prognostiziere 3-5x ROI durch Zeitersparnis und gewonnene Klarheit.',
    primaryCtaEn: 'Book Session',
    primaryCtaDe: 'Session buchen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/expert-session',
    secondaryCtaEn: 'More About Expert Session',
    secondaryCtaDe: 'Mehr über Expert Session',
    secondaryCtaUrl: '/solutions/expert-session'
  },

  // ============================================
  // DECISION SUPPORT (8 Kacheln)
  // ============================================
  {
    id: 3,
    slug: 'gtm-effectiveness-review',
    solutionType: 'decision-support',
    challenges: ['cac-crisis', 'growth-stalled'],
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'GTM Effectiveness Review',
    headlineDe: 'GTM Effectiveness Review',
    problemEn: "Your GTM is broken—but you don't know where. CAC is €5K-€10K (benchmark: €500-€2K). Win rate is 15-25% (benchmark: 40-60%). Sales cycle is 90-180 days (benchmark: 30-60 days). You don't know which lever to pull first.",
    problemDe: 'Dein GTM ist kaputt—aber du weißt nicht wo. CAC liegt bei €5K-€10K (Benchmark: €500-€2K). Win Rate ist 15-25% (Benchmark: 40-60%). Sales Cycle ist 90-180 Tage (Benchmark: 30-60 Tage). Du weißt nicht, welchen Hebel du zuerst ziehen sollst.',
    solutionEn: 'We analyze your GTM effectiveness in 3-5 days (6 dimensions: Market, Acquisition, Messaging, Sales, Pricing, Operations). You get: GTM Clarity +80%, Decision Velocity +50-100%, CAC Reduction Roadmap 30-50%—with board-ready report.',
    solutionDe: 'Wir analysieren deine GTM-Effektivität in 3-5 Tagen (6 Dimensionen: Market, Acquisition, Messaging, Sales, Pricing, Operations). Du erhältst: GTM Clarity +80%, Decision Velocity +50-100%, CAC Reduction Roadmap 30-50%—mit Board-Ready Report.',
    deliverablesEn: [
      'GTM Clarity: +80%',
      'Decision Velocity: +50-100%',
      'CAC Roadmap: -30-50%'
    ],
    deliverablesDe: [
      'GTM Clarity: +80%',
      'Decision Velocity: +50-100%',
      'CAC Roadmap: -30-50%'
    ],
    impactEn: 'Know exactly which GTM lever to pull first. Predict 10-30x ROI from CAC reduction and growth acceleration.',
    impactDe: 'Wisse genau, welchen GTM-Hebel du zuerst ziehen sollst. Prognostiziere 10-30x ROI durch CAC-Reduktion und Wachstumsbeschleunigung.',
    primaryCtaEn: 'More About GTM Review',
    primaryCtaDe: 'Mehr über GTM Review',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/gtm-effectiveness-review',
    secondaryCtaEn: 'See sample',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/cases/gtm-review',
    addOnPricing: {
      base: '€3.9K',
      bridge: '€5.9K'
    }
  },
  {
    id: 4,
    slug: 'pricing-packaging-review',
    solutionType: 'decision-support',
    challenges: ['pricing-breakdown'],
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'Pricing & Packaging Review',
    headlineDe: 'Pricing & Packaging Review',
    problemEn: "Your pricing is broken—but you don't know why. ARPU is €5K (benchmark: €15K-€25K). Gross margin is 60% (benchmark: 75-85%). Packaging is unclear. You don't know if problem is value metric, packaging, or positioning.",
    problemDe: 'Dein Pricing ist kaputt—aber du weißt nicht warum. ARPU liegt bei €5K (Benchmark: €15K-€25K). Gross Margin ist 60% (Benchmark: 75-85%). Packaging ist unklar. Du weißt nicht, ob das Problem beim Value Metric, Packaging oder Positioning liegt.',
    solutionEn: 'We analyze your pricing & packaging in 3-5 days (5 dimensions: Value Metric, Pricing Model, Packaging, Positioning, Monetization). You get: Pricing Clarity +90%, ARPU Roadmap +30-50%, Margin Roadmap +10-15pp—with board-ready report.',
    solutionDe: 'Wir analysieren dein Pricing & Packaging in 3-5 Tagen (5 Dimensionen: Value Metric, Pricing Model, Packaging, Positioning, Monetization). Du erhältst: Pricing Clarity +90%, ARPU Roadmap +30-50%, Margin Roadmap +10-15pp—mit Board-Ready Report.',
    deliverablesEn: [
      'Pricing Clarity: +90%',
      'ARPU Roadmap: +30-50%',
      'Margin Roadmap: +10-15pp'
    ],
    deliverablesDe: [
      'Pricing Clarity: +90%',
      'ARPU Roadmap: +30-50%',
      'Margin Roadmap: +10-15pp'
    ],
    impactEn: 'Know exactly which pricing lever to pull first. Predict 10-30x ROI from ARPU increase and margin improvement.',
    impactDe: 'Wisse genau, welchen Pricing-Hebel du zuerst ziehen sollst. Prognostiziere 10-30x ROI durch ARPU-Steigerung und Margin-Verbesserung.',
    primaryCtaEn: 'More About Pricing Review',
    primaryCtaDe: 'Mehr über Pricing Review',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/pricing-packaging-review',
    secondaryCtaEn: 'See sample',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/cases/pricing-review',
    addOnPricing: {
      base: '€3.9K',
      bridge: '€5.9K'
    }
  },
  {
    id: 5,
    slug: 'scaling-readiness-assessment',
    solutionType: 'decision-support',
    challenges: ['scaling-chaos'],
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'Scaling Readiness Assessment',
    headlineDe: 'Scaling Readiness Assessment',
    problemEn: "You're growing fast—but scaling is broken. Meetings +300% (40-60/week, benchmark: 10-15). Decision velocity -50% (7-14 days, benchmark: 1-3 days). You don't know if problem is execution, setup, coordination, or culture.",
    problemDe: 'Du wächst schnell—aber das Skalieren ist kaputt. Meetings +300% (40-60/Woche, Benchmark: 10-15). Decision Velocity -50% (7-14 Tage, Benchmark: 1-3 Tage). Du weißt nicht, ob das Problem bei Execution, Setup, Coordination oder Culture liegt.',
    solutionEn: 'We analyze your scaling readiness in 3-5 days (4 capabilities: Execution, Setup, Coordination, Culture). You get: Scaling Clarity +85%, Capability Roadmap +30-50%, Decision Velocity +50-100%—with board-ready report.',
    solutionDe: 'Wir analysieren deine Scaling Readiness in 3-5 Tagen (4 Capabilities: Execution, Setup, Coordination, Culture). Du erhältst: Scaling Clarity +85%, Capability Roadmap +30-50%, Decision Velocity +50-100%—mit Board-Ready Report.',
    deliverablesEn: [
      'Scaling Clarity: +85%',
      'Capability Roadmap: +30-50%',
      'Decision Velocity: +50-100%'
    ],
    deliverablesDe: [
      'Scaling Clarity: +85%',
      'Capability Roadmap: +30-50%',
      'Decision Velocity: +50-100%'
    ],
    impactEn: 'Know exactly which capability to fix first. Predict 10-30x ROI from productivity improvement and growth acceleration.',
    impactDe: 'Wisse genau, welche Capability du zuerst fixen sollst. Prognostiziere 10-30x ROI durch Produktivitätssteigerung und Wachstumsbeschleunigung.',
    primaryCtaEn: 'More About Scaling Assessment',
    primaryCtaDe: 'Mehr über Scaling Assessment',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/scaling-readiness-assessment',
    secondaryCtaEn: 'See sample',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/cases/scaling-assessment',
    addOnPricing: {
      base: '€3.9K',
      bridge: '€5.9K'
    }
  },
  {
    id: 6,
    slug: 'ai-maturity-assessment',
    solutionType: 'decision-support',
    challenges: ['ai-transformation'],
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'AI Maturity Assessment',
    headlineDe: 'AI Maturity Assessment',
    problemEn: "You're using AI—but not becoming AI-Native. Your θ_index is 0.3 (Level 1: AI-Powered). Competitors are at θ_index 0.7-0.8 (Level 2-3: AI-Native). You don't know which AI lever to pull first.",
    problemDe: 'Du nutzt AI—aber wirst nicht AI-Native. Dein θ_index ist 0.3 (Level 1: AI-Powered). Wettbewerber sind bei θ_index 0.7-0.8 (Level 2-3: AI-Native). Du weißt nicht, welchen AI-Hebel du zuerst ziehen sollst.',
    solutionEn: 'We analyze your AI maturity in 3-5 days (8 dimensions: Strategy, Infrastructure, Capabilities, Use Cases, Operations, Decision-Making, CX, Innovation). You get: AI Clarity +90%, θ_index Roadmap +50-150%, Efficiency Roadmap +30-80%—with board-ready report.',
    solutionDe: 'Wir analysieren deine AI-Reife in 3-5 Tagen (8 Dimensionen: Strategy, Infrastructure, Capabilities, Use Cases, Operations, Decision-Making, CX, Innovation). Du erhältst: AI Clarity +90%, θ_index Roadmap +50-150%, Efficiency Roadmap +30-80%—mit Board-Ready Report.',
    deliverablesEn: [
      'AI Clarity: +90%',
      'θ_index Roadmap: +50-150%',
      'Efficiency Roadmap: +30-80%'
    ],
    deliverablesDe: [
      'AI Clarity: +90%',
      'θ_index Roadmap: +50-150%',
      'Efficiency Roadmap: +30-80%'
    ],
    impactEn: 'Know exactly which AI lever to pull first. Predict 10-30x ROI from AI efficiency and competitive advantage.',
    impactDe: 'Wisse genau, welchen AI-Hebel du zuerst ziehen sollst. Prognostiziere 10-30x ROI durch AI-Effizienz und Wettbewerbsvorteil.',
    primaryCtaEn: 'More About AI Assessment',
    primaryCtaDe: 'Mehr über AI Assessment',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/ai-maturity-assessment',
    secondaryCtaEn: 'See sample',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/cases/ai-assessment',
    addOnPricing: {
      base: '€3.9K',
      bridge: '€5.9K'
    }
  },
  {
    id: 7,
    slug: 'investor-readiness-pitch-deck-check',
    solutionType: 'decision-support',
    challenges: ['board-pressure'],
    price: '€1.9K-€2.5K',
    priceTag: 'paid',
    headlineEn: 'Investor-Readiness Pitch Deck Check',
    headlineDe: 'Investor-Readiness Pitch Deck Check',
    problemEn: "Your pitch deck isn't investor-ready—and you don't know it. Deck quality is 30% (benchmark: 90%+ for Series B+). Meeting rate is 10-20% (benchmark: 40-60%). You don't know what's broken.",
    problemDe: 'Dein Pitch Deck ist nicht investor-ready—und du weißt es nicht. Deck Quality ist 30% (Benchmark: 90%+ für Series B+). Meeting Rate ist 10-20% (Benchmark: 40-60%). Du weißt nicht, was kaputt ist.',
    solutionEn: 'We review your pitch deck in 3-5 days (10 dimensions: Story, Traction, Market, Product, Business Model, Team, Financials, Ask, Design, Investor Readiness). You get: Deck Quality +80%, Investor Q&A Prepared 20-30, Fundraising Success Rate +30-50pp—with investor-grade report.',
    solutionDe: 'Wir reviewen dein Pitch Deck in 3-5 Tagen (10 Dimensionen: Story, Traction, Market, Product, Business Model, Team, Financials, Ask, Design, Investor Readiness). Du erhältst: Deck Quality +80%, Investor Q&A Prepared 20-30, Fundraising Success Rate +30-50pp—mit Investor-Grade Report.',
    deliverablesEn: [
      'Deck Quality: +80%',
      'Investor Q&A: 20-30 Prepared',
      'Fundraising Rate: +30-50pp'
    ],
    deliverablesDe: [
      'Deck Quality: +80%',
      'Investor Q&A: 20-30 Prepared',
      'Fundraising Rate: +30-50pp'
    ],
    impactEn: 'Know exactly what to fix in your deck. Predict 10-30x ROI from fundraising success rate and valuation increase.',
    impactDe: 'Wisse genau, was du in deinem Deck fixen sollst. Prognostiziere 10-30x ROI durch Fundraising-Erfolgsrate und Bewertungssteigerung.',
    primaryCtaEn: 'More About Pitch Deck Check',
    primaryCtaDe: 'Mehr über Pitch Deck Check',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/investor-readiness-pitch-deck-check',
    secondaryCtaEn: 'See sample',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/cases/pitch-deck-check',
    addOnPricing: {
      base: '€1.9K',
      bridge: '€2.5K'
    }
  },
  {
    id: 8,
    slug: 'vc-dd-simulation',
    solutionType: 'decision-support',
    challenges: ['board-pressure', 'portfolio-performance'],
    price: '€5.9K',
    priceTag: 'paid',
    headlineEn: 'VC Due Diligence Simulation',
    headlineDe: 'VC Due Diligence Simulation',
    problemEn: "You're not ready for VC due diligence—and you don't know it. DD readiness is 0%, red flags are hidden, and your data room is incomplete.",
    problemDe: 'Du bist nicht bereit für VC Due Diligence—und weißt es nicht. DD Readiness ist 0%, Red Flags sind versteckt, und dein Data Room ist unvollständig.',
    solutionEn: 'We simulate VC due diligence in 3-5 days (8 dimensions). You get: Red Flags Fixed 100%, DD Readiness 0% → 100%, Fundraising Success Rate +40-60pp—with board-ready report.',
    solutionDe: 'Wir simulieren VC Due Diligence in 3-5 Tagen (8 Dimensionen). Du erhältst: Red Flags Fixed 100%, DD Readiness 0% → 100%, Fundraising Success Rate +40-60pp—mit Board-Ready Report.',
    deliverablesEn: [
      'Red Flags Fixed: 100%',
      'DD Readiness: 0% → 100%',
      'Fundraising Rate: +40-60pp'
    ],
    deliverablesDe: [
      'Red Flags Fixed: 100%',
      'DD Readiness: 0% → 100%',
      'Fundraising Rate: +40-60pp'
    ],
    impactEn: 'Fix red flags before VCs find them. Predict 10-50x ROI in fundraising success.',
    impactDe: 'Behebe Red Flags, bevor VCs sie finden. Prognostiziere 10-50x ROI im Fundraising-Erfolg.',
    primaryCtaEn: 'More About DD Simulation',
    primaryCtaDe: 'Mehr über DD Simulation',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/vc-dd-simulation',
    secondaryCtaEn: 'See sample',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/cases/vc-dd-simulation',
    addOnPricing: {
      base: '€5.9K',
      bridge: '€9.8K'
    }
  },
  {
    id: 9,
    slug: 'portfolio-assessment',
    solutionType: 'decision-support',
    challenges: ['portfolio-performance'],
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'Portfolio Assessment',
    headlineDe: 'Portfolio Assessment',
    problemEn: "Your portfolio is underperforming—but you don't know why. 5/15 companies struggling (33%), average θ_index 0.35 (Level 1: AI-Powered). LPs asking 'Why isn't portfolio AI-Native?' You don't know which companies to fix first.",
    problemDe: 'Dein Portfolio underperformt—aber du weißt nicht warum. 5/15 Companies strugglen (33%), durchschnittlicher θ_index 0.35 (Level 1: AI-Powered). LPs fragen „Warum ist das Portfolio nicht AI-Native?" Du weißt nicht, welche Companies du zuerst fixen sollst.',
    solutionEn: 'We analyze your portfolio in 3-5 days (6 dimensions: Growth, Unit Economics, AI Maturity, Operations, Market Position, Exit Readiness). You get: Portfolio Clarity +85%, Value Roadmap +30-60%, LP Confidence +40-70%—with LP-ready report + Portfolio Heatmap.',
    solutionDe: 'Wir analysieren dein Portfolio in 3-5 Tagen (6 Dimensionen: Growth, Unit Economics, AI Maturity, Operations, Market Position, Exit Readiness). Du erhältst: Portfolio Clarity +85%, Value Roadmap +30-60%, LP Confidence +40-70%—mit LP-Ready Report + Portfolio Heatmap.',
    deliverablesEn: [
      'Portfolio Clarity: +85%',
      'Value Roadmap: +30-60%',
      'LP Confidence: +40-70%'
    ],
    deliverablesDe: [
      'Portfolio Clarity: +85%',
      'Value Roadmap: +30-60%',
      'LP Confidence: +40-70%'
    ],
    impactEn: 'Know exactly which companies to fix first. Predict 10-30x ROI from portfolio value increase and LP confidence.',
    impactDe: 'Wisse genau, welche Companies du zuerst fixen sollst. Prognostiziere 10-30x ROI durch Portfolio-Wertsteigerung und LP-Vertrauen.',
    primaryCtaEn: 'More About Portfolio Assessment',
    primaryCtaDe: 'Mehr über Portfolio Assessment',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/portfolio-assessment',
    secondaryCtaEn: 'See sample',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/cases/portfolio-assessment',
    addOnPricing: {
      base: '€3.9K',
      bridge: '€5.9K'
    }
  },
  {
    id: 10,
    slug: 'custom-analysis-report',
    solutionType: 'decision-support',
    challenges: 'universal',
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'Custom Analysis & Report',
    headlineDe: 'Custom Analysis & Report',
    problemEn: "You have a specific challenge—but no clear answer. Your challenge is unique: growth strategy unclear, PMF eroding, customer success broken, operations chaotic, AI strategy missing, portfolio lacks synergy, or board needs a decision. You need expert analysis. Fast.",
    problemDe: 'Du hast eine spezifische Herausforderung—aber keine klare Antwort. Deine Challenge ist einzigartig: Growth Strategy unklar, PMF erodiert, Customer Success kaputt, Operations chaotisch, AI Strategy fehlt, Portfolio hat keine Synergy, oder Board braucht eine Entscheidung. Du brauchst Experten-Analyse. Schnell.',
    solutionEn: 'We conduct expert analysis in 3-5 days. Choose from 7 analysis types: Growth Strategy Review, PMF Audit, Customer Success Audit, Operations Audit, AI Strategy Design, Portfolio Synergy Playbook, Board Decision Memo. You get: Analysis Clarity +85%, Strategic Roadmap +30-60%, Decision Velocity +50%—with board-ready report.',
    solutionDe: 'Wir führen Experten-Analyse in 3-5 Tagen durch. Wähle aus 7 Analyse-Typen: Growth Strategy Review, PMF Audit, Customer Success Audit, Operations Audit, AI Strategy Design, Portfolio Synergy Playbook, Board Decision Memo. Du erhältst: Analysis Clarity +85%, Strategic Roadmap +30-60%, Decision Velocity +50%—mit Board-Ready Report.',
    deliverablesEn: [
      'Analysis Clarity: +85%',
      'Strategic Roadmap: +30-60%',
      'Decision Velocity: +50%'
    ],
    deliverablesDe: [
      'Analysis Clarity: +85%',
      'Strategic Roadmap: +30-60%',
      'Decision Velocity: +50%'
    ],
    impactEn: 'Know exactly what to do next. Predict 10-30x ROI from strategic clarity and decision velocity.',
    impactDe: 'Wisse genau, was als nächstes zu tun ist. Prognostiziere 10-30x ROI durch strategische Klarheit und Decision Velocity.',
    primaryCtaEn: 'More About Custom Analysis',
    primaryCtaDe: 'Mehr über Custom Analysis',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/custom-analysis-report',
    secondaryCtaEn: 'See examples',
    secondaryCtaDe: 'Beispiele ansehen',
    secondaryCtaUrl: '/cases/custom-analysis',
    addOnPricing: {
      base: '€3.9K',
      bridge: '€5.9K'
    }
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
    headlineEn: 'Power Up: Predictable Acquisition',
    headlineDe: 'Power Up: Predictable Acquisition',
    problemEn: "Your CAC is exploding. You're burning cash on inefficient sales, and your board is asking when GTM will be profitable.",
    problemDe: 'Dein CAC explodiert. Du verbrennst Cash mit ineffizientem Sales, und dein Board fragt, wann GTM profitabel wird.',
    solutionEn: 'We fix your CAC crisis in 30 days: optimize ICP, positioning, sales process. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir beheben deine CAC-Krise in 30 Tagen: optimieren ICP, Positionierung, Sales-Prozess. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'CAC reduction: -20-30%',
      'Win rate increase: +10-15pp',
      'Pipeline predictability: ±10%'
    ],
    deliverablesDe: [
      'CAC-Reduktion: -20-30%',
      'Win Rate Steigerung: +10-15pp',
      'Pipeline-Vorhersagbarkeit: ±10%'
    ],
    impactEn: 'Reduce CAC by 20-30%, increase win rate by 10-15pp, improve pipeline predictability to ±10% in 30 days. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Reduziere CAC um 20-30%, erhöhe Win Rate um 10-15pp, verbessere Pipeline-Vorhersagbarkeit auf ±10% in 30 Tagen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Predictable Acquisition',
    primaryCtaDe: 'Mehr über Predictable Acquisition',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/power-up/cac-crisis',
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
    headlineEn: 'Power Up: Growth Momentum',
    headlineDe: 'Power Up: Growth Momentum',
    problemEn: "You hit a plateau. Growth is slowing, and you don't know what lever to pull next.",
    problemDe: 'Du hast ein Plateau erreicht. Wachstum verlangsamt sich, und du weißt nicht, welchen Hebel du als nächstes ziehen sollst.',
    solutionEn: 'We reignite your growth in 4-6 weeks: diagnose stall drivers, test new levers, build momentum. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir entfachen dein Wachstum in 4-6 Wochen neu: diagnostizieren Stall-Treiber, testen neue Hebel, bauen Momentum auf. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'ARR Growth: +30-60pp',
      'Win Rate: +30-50%',
      'Pipeline: +50-100%'
    ],
    deliverablesDe: [
      'ARR-Wachstum: +30-60pp',
      'Win Rate: +30-50%',
      'Pipeline: +50-100%'
    ],
    impactEn: 'Increase ARR growth by 30-60pp, win rate by 30-50%, pipeline by 50-100% in 4-6 weeks. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Steigere ARR-Wachstum um 30-60pp, Win Rate um 30-50%, Pipeline um 50-100% in 4-6 Wochen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Growth Momentum',
    primaryCtaDe: 'Mehr über Growth Momentum',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/power-up/growth-momentum',
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
    headlineEn: 'Power Up: Pricing Power',
    headlineDe: 'Power Up: Pricing Power',
    problemEn: "Your pricing is stuck. ARPU isn't growing, discounting is killing margins, and you're leaving 20-40% revenue on the table.",
    problemDe: 'Dein Pricing steckt fest. ARPU wächst nicht, Rabatte killen Margen, und du lässt 20-40% Revenue auf dem Tisch liegen.',
    solutionEn: 'We fix your pricing in 4-6 weeks: redesign value metric, packaging, discounting strategy. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir reparieren dein Pricing in 4-6 Wochen: redesignen Value Metric, Packaging, Rabattstrategie. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'Revenue increase: +10-20%',
      'ARPU increase: +15-30%',
      'Discounting reduction: -20-40%'
    ],
    deliverablesDe: [
      'Revenue-Steigerung: +10-20%',
      'ARPU-Steigerung: +15-30%',
      'Rabatt-Reduktion: -20-40%'
    ],
    impactEn: 'Increase revenue by 10-20%, ARPU by 15-30%, reduce discounting by 20-40% in 4-6 weeks. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Steigere Revenue um 10-20%, ARPU um 15-30%, reduziere Rabatte um 20-40% in 4-6 Wochen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Pricing Power',
    primaryCtaDe: 'Mehr über Pricing Power',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/power-up/pricing-power',
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
    headlineEn: 'Power Up: NRR Engine',
    headlineDe: 'Power Up: NRR-Engine',
    problemEn: "Churn is eating your growth. NRR is below 100%, and upsells are random acts of heroism.",
    problemDe: 'Churn frisst dein Wachstum. NRR ist unter 100%, und Upsells sind zufällige Heldenaktionen.',
    solutionEn: 'We build your NRR engine in 4-6 weeks: install health-scoring, expansion playbooks, early-warning triggers. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir bauen deine NRR-Engine in 4-6 Wochen: installieren Health-Scoring, Expansion Playbooks, Frühwarnsysteme. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'NRR improvement: +10-20pp',
      'Churn reduction: -20-40%',
      'Expansion Rate: +50-100%'
    ],
    deliverablesDe: [
      'NRR-Verbesserung: +10-20pp',
      'Churn-Reduktion: -20-40%',
      'Expansion Rate: +50-100%'
    ],
    impactEn: 'Improve NRR by 10-20pp, reduce churn by 20-40%, increase expansion rate by 50-100% in 4-6 weeks. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Verbessere NRR um 10-20pp, reduziere Churn um 20-40%, steigere Expansion Rate um 50-100% in 4-6 Wochen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
    primaryCtaEn: 'More About NRR Engine',
    primaryCtaDe: 'Mehr über NRR Engine',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/power-up/nrr-engine',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/nrr-transformation'
  },
  {
    id: 15,
    slug: 'power-up-scaling-velocity',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['scaling-chaos'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: Scaling Velocity',
    headlineDe: 'Power Up: Scaling Velocity',
    problemEn: "Your team has grown from 50 to 100 people—but velocity has dropped 50%. Decisions that took 1 day now take 7 days. You're stuck in scaling chaos.",
    problemDe: 'Dein Team ist von 50 auf 100 Leute gewachsen—aber die Velocity ist um 50% gesunken. Entscheidungen, die 1 Tag brauchten, dauern jetzt 7 Tage. Du steckst im Scaling Chaos.',
    solutionEn: 'We unlock your scaling velocity in 4-6 weeks: fix decision-making, reduce operational debt, optimize coordination. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir entsperren deine Scaling Velocity in 4-6 Wochen: beheben Entscheidungsfindung, reduzieren Operational Debt, optimieren Koordination. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'Decision Velocity: +50-100%',
      'Operational Debt: -15-25pp',
      'ARR/Employee: +30-50%'
    ],
    deliverablesDe: [
      'Decision Velocity: +50-100%',
      'Operational Debt: -15-25pp',
      'ARR/Employee: +30-50%'
    ],
    impactEn: 'Improve Decision Velocity by 50-100%, reduce Operational Debt by 15-25pp, increase ARR/Employee by 30-50% in 4-6 weeks. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Verbessere Decision Velocity um 50-100%, reduziere Operational Debt um 15-25pp, steigere ARR/Employee um 30-50% in 4-6 Wochen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Scaling Velocity',
    primaryCtaDe: 'Mehr über Scaling Velocity',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/power-up/scaling-velocity',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/scaling-transformation'
  },
  {
    id: 16,
    slug: 'power-up-ai-quick-wins',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['ai-transformation'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: AI Quick Wins',
    headlineDe: 'Power Up: AI Quick Wins',
    problemEn: "You've dabbled in AI, but nothing's production-grade or ROI-proven. You need quick wins to build momentum.",
    problemDe: 'Du hast mit AI experimentiert, aber nichts ist production-grade oder ROI-bewiesen. Du brauchst Quick Wins, um Momentum aufzubauen.',
    solutionEn: 'We implement 3-5 AI use cases in 4-6 weeks: prioritize, build, deploy to production. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir implementieren 3-5 AI Use Cases in 4-6 Wochen: priorisieren, bauen, deployen in Production. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'AI Use Cases Implemented: 3-5',
      'Operations Speed: +30-50%',
      'θ_index Improvement: +0.2-0.3'
    ],
    deliverablesDe: [
      'AI Use Cases implementiert: 3-5',
      'Operations Speed: +30-50%',
      'θ_index Verbesserung: +0.2-0.3'
    ],
    impactEn: 'Implement 3-5 AI use cases, increase operations speed by 30-50%, improve θ_index by 0.2-0.3 in 4-6 weeks. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Implementiere 3-5 AI Use Cases, steigere Operations Speed um 30-50%, verbessere θ_index um 0.2-0.3 in 4-6 Wochen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
    primaryCtaEn: 'More About AI Quick Wins',
    primaryCtaDe: 'Mehr über AI Quick Wins',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/power-up/ai-quick-wins',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/ai-transformation'
  },
  {
    id: 17,
    slug: 'power-up-board-readiness',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['board-pressure'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: Board Readiness',
    headlineDe: 'Power Up: Board Readiness',
    problemEn: "Your board is losing confidence. Board prep takes 5-7 days, Rule of 40 is low, and the board keeps asking: 'When will we see efficient growth?'",
    problemDe: 'Dein Board verliert das Vertrauen. Board Prep dauert 5-7 Tage, Rule of 40 ist niedrig, und das Board fragt ständig: "Wann sehen wir effizientes Wachstum?"',
    solutionEn: 'We restore board confidence in 4-6 weeks: build strategic narrative, improve Rule of 40, automate board reporting. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir stellen Board Confidence in 4-6 Wochen wieder her: bauen Strategic Narrative, verbessern Rule of 40, automatisieren Board Reporting. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'Board Confidence: +20-30pp',
      'Board Prep Time: -50-70%',
      'Rule of 40: +10-20pp'
    ],
    deliverablesDe: [
      'Board Confidence: +20-30pp',
      'Board Prep Time: -50-70%',
      'Rule of 40: +10-20pp'
    ],
    impactEn: 'Increase Board Confidence by 20-30pp, reduce Board Prep Time by 50-70%, improve Rule of 40 by 10-20pp in 4-6 weeks. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Steigere Board Confidence um 20-30pp, reduziere Board Prep Time um 50-70%, verbessere Rule of 40 um 10-20pp in 4-6 Wochen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Board Readiness',
    primaryCtaDe: 'Mehr über Board Readiness',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/power-up/board-readiness',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/board-transformation'
  },
  {
    id: 18,
    slug: 'power-up-portfolio-performance',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: ['portfolio-performance'],
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: Portfolio Performance',
    headlineDe: 'Power Up: Portfolio Performance',
    problemEn: 'Your portfolio is underperforming. 5-10 companies stuck (CAC crisis, scaling chaos, board pressure). Portfolio IRR at 15% (benchmark: 25%+).',
    problemDe: 'Dein Portfolio performt unter Potenzial. 5-10 Unternehmen stecken fest (CAC-Krise, Scaling-Chaos, Board-Druck). Portfolio IRR bei 15% (Benchmark: 25%+).',
    solutionEn: 'We transform 3-5 underperforming portfolio companies in 4-6 weeks. Parallel execution: CAC Crisis Fix, Scaling Chaos Fix, Board Pressure Fix. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir transformieren 3-5 unterperformende Portfolio-Unternehmen in 4-6 Wochen. Parallele Execution: CAC-Krise Fix, Scaling-Chaos Fix, Board-Druck Fix. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'Companies Fixed: 3-5',
      'Portfolio IRR: +5-10pp',
      'Portfolio Value: +20-30%'
    ],
    deliverablesDe: [
      'Unternehmen gefixt: 3-5',
      'Portfolio IRR: +5-10pp',
      'Portfolio Value: +20-30%'
    ],
    impactEn: 'Transform 3-5 companies, increase Portfolio IRR by 5-10pp, grow Portfolio Value by 20-30% in 4-6 weeks. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Transformiere 3-5 Unternehmen, steigere Portfolio IRR um 5-10pp, erhöhe Portfolio Value um 20-30% in 4-6 Wochen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Portfolio Performance',
    primaryCtaDe: 'Mehr über Portfolio Performance',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/power-up/portfolio-performance',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/portfolio-transformation'
  },
  {
    id: 19,
    slug: 'power-up-custom-sprint',
    solutionType: 'transformation',
    transformationTier: 'power-up',
    challenges: 'universal',
    price: '€23.6K',
    priceTag: 'paid',
    headlineEn: 'Power Up: Custom Sprint',
    headlineDe: 'Power Up: Custom Sprint',
    problemEn: "Your challenge is unique. It's not CAC crisis, not scaling chaos, not board pressure. Standard solutions don't fit your unique business model.",
    problemDe: 'Deine Herausforderung ist einzigartig. Es ist keine CAC-Krise, kein Scaling-Chaos, kein Board-Druck. Standard-Lösungen passen nicht zu deinem einzigartigen Geschäftsmodell.',
    solutionEn: 'We diagnose your unique bottleneck and build a custom solution in 4-6 weeks. Hands-on execution, outcome-based risk sharing.',
    solutionDe: 'Wir diagnostizieren deinen einzigartigen Engpass und bauen eine Custom Solution in 4-6 Wochen. Hands-on Execution, ergebnisbasierte Risikoteilung.',
    deliverablesEn: [
      'Custom Bottleneck Fixed',
      'Custom Solution Deployed',
      'ROI: 2-5x'
    ],
    deliverablesDe: [
      'Custom Bottleneck gefixt',
      'Custom Solution deployed',
      'ROI: 2-5x'
    ],
    impactEn: 'Fix your unique bottleneck, deploy a custom solution, achieve 2-5x ROI in 4-6 weeks. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Fixe deinen einzigartigen Engpass, deploye eine Custom Solution, erziele 2-5x ROI in 4-6 Wochen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Custom Sprint',
    primaryCtaDe: 'Mehr über Custom Sprint',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/power-up/custom-sprint',
    secondaryCtaEn: 'See past examples',
    secondaryCtaDe: 'Frühere Beispiele ansehen',
    secondaryCtaUrl: '/cases/custom-transformation'
  },

  // ============================================
  // TRANSFORMATION – BOOST (9 Kacheln)
  // ============================================
  {
    id: 20,
    slug: 'boost-efficient-hypergrowth',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['cac-crisis', 'growth-stalled'],
    price: '€60K-€78K',
    priceTag: 'paid',
    headlineEn: 'Boost: Efficient Hypergrowth',
    headlineDe: 'Boost: Effizientes Hypergrowth',
    problemEn: "Your unit economics are broken. CAC has exploded, LTV/CAC has collapsed, Rule of 40 is at 10%. Board is asking: When will we achieve efficient growth?",
    problemDe: 'Deine Unit Economics sind kaputt. CAC ist explodiert, LTV/CAC ist eingebrochen, Rule of 40 liegt bei 10%. Das Board fragt: Wann erreichen wir effizientes Wachstum?',
    solutionEn: 'We rebuild your entire GTM engine in 90 days: CAC -40-60%, LTV/CAC +100-200%, Rule of 40 +20-40pp—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir bauen deine gesamte GTM-Engine in 90 Tagen neu auf: CAC -40-60%, LTV/CAC +100-200%, Rule of 40 +20-40pp – mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'CAC: -40-60%',
      'LTV/CAC: +100-200%',
      'Rule of 40: +20-40pp'
    ],
    deliverablesDe: [
      'CAC: -40-60%',
      'LTV/CAC: +100-200%',
      'Rule of 40: +20-40pp'
    ],
    impactEn: 'Reduce CAC by 40-60%, increase LTV/CAC by 100-200%, improve Rule of 40 by 20-40pp in 90 days. 2 of 3 outcomes guaranteed or 50% refund.',
    impactDe: 'Reduziere CAC um 40-60%, erhöhe LTV/CAC um 100-200%, verbessere Rule of 40 um 20-40pp in 90 Tagen. 2 von 3 Ergebnissen garantiert oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Efficient Hypergrowth',
    primaryCtaDe: 'Mehr über Efficient Hypergrowth',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/boost/efficient-hypergrowth',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/hypergrowth-boost'
  },
  {
    id: 21,
    slug: 'boost-growth-engine',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['growth-stalled'],
    price: '€60K-€78K',
    priceTag: 'paid',
    headlineEn: 'Boost: Growth Engine',
    headlineDe: 'Boost: Growth Engine',
    problemEn: "Your growth has stalled. ARR growth dropped from 150% to 80%. Win rate fallen from 35% to 15%. Board is asking: When will we reignite growth?",
    problemDe: 'Dein Wachstum ist zum Stillstand gekommen. ARR-Wachstum sank von 150% auf 80%. Win Rate fiel von 35% auf 15%. Das Board fragt: Wann entfachen wir das Wachstum neu?',
    solutionEn: 'We rebuild your entire growth engine in 90 days: ARR Growth +50-100%, Win Rate +30-50%, Pipeline +50-100%—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir bauen deine gesamte Growth Engine in 90 Tagen neu: ARR Wachstum +50-100%, Win Rate +30-50%, Pipeline +50-100%—mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'ARR Growth: +50-100%',
      'Win Rate: +30-50%',
      'Pipeline: +50-100%'
    ],
    deliverablesDe: [
      'ARR Wachstum: +50-100%',
      'Win Rate: +30-50%',
      'Pipeline: +50-100%'
    ],
    impactEn: 'Increase ARR growth by 50-100%, win rate by 30-50%, pipeline by 50-100% in 90 days. 2 of 3 outcomes guaranteed or 50% refund.',
    impactDe: 'Steigere ARR Wachstum um 50-100%, Win Rate um 30-50%, Pipeline um 50-100% in 90 Tagen. 2 von 3 Ergebnissen garantiert oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Growth Engine',
    primaryCtaDe: 'Mehr über Growth Engine',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/boost/growth-engine',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/growth-boost'
  },
  {
    id: 22,
    slug: 'boost-pricing-dominance',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['pricing-breakdown'],
    price: '€60K-€78K',
    priceTag: 'paid',
    headlineEn: 'Boost: Pricing Dominance',
    headlineDe: 'Boost: Pricing-Dominanz',
    problemEn: "Your pricing is broken. ARPU stagnated at €500, gross margin dropped to 50%, sales team discounting 30-50%. Board is asking: Why are we leaving money on the table?",
    problemDe: 'Dein Pricing ist kaputt. ARPU stagniert bei €500, Bruttomarge auf 50% gefallen, Sales-Team gibt 30-50% Rabatt. Das Board fragt: Warum lassen wir Geld auf dem Tisch?',
    solutionEn: 'We rebuild your entire pricing architecture in 90 days: ARPU +50-100%, Gross Margin +15-20pp, Discounting -30-50%—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir bauen deine gesamte Pricing-Architektur in 90 Tagen neu: ARPU +50-100%, Bruttomarge +15-20pp, Rabattierung -30-50% – mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'ARPU: +50-100%',
      'Gross Margin: +15-20pp',
      'Discounting: -30-50%'
    ],
    deliverablesDe: [
      'ARPU: +50-100%',
      'Bruttomarge: +15-20pp',
      'Rabattierung: -30-50%'
    ],
    impactEn: 'Increase ARPU by 50-100%, expand gross margin by 15-20pp, reduce discounting by 30-50% in 90 days. 2 of 3 outcomes guaranteed or 50% refund.',
    impactDe: 'Steigere ARPU um 50-100%, erweitere Bruttomarge um 15-20pp, reduziere Rabattierung um 30-50% in 90 Tagen. 2 von 3 Ergebnissen garantiert oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Pricing Dominance',
    primaryCtaDe: 'Mehr über Pricing Dominance',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/boost/pricing-dominance',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/pricing-boost'
  },
  {
    id: 23,
    slug: 'boost-nrr-machine',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['customer-success-broken'],
    price: '€60K-€78K',
    priceTag: 'paid',
    headlineEn: 'Boost: NRR Machine',
    headlineDe: 'Boost: NRR-Maschine',
    problemEn: "Your customer success is broken. Churn has climbed to 20%+, NRR dropped to 90%, expansion rate at 5%. Board is asking: Why are we losing customers?",
    problemDe: 'Dein Customer Success ist kaputt. Churn ist auf 20%+ gestiegen, NRR auf 90% gefallen, Expansionsrate bei 5%. Das Board fragt: Warum verlieren wir Kunden?',
    solutionEn: 'We rebuild your entire CS engine in 90 days: Churn -50-75%, NRR +30-50pp, Expansion Rate +100-200%—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir bauen deine gesamte CS-Engine in 90 Tagen neu: Churn -50-75%, NRR +30-50pp, Expansionsrate +100-200% – mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'Churn: -50-75%',
      'NRR: +30-50pp',
      'Expansion Rate: +100-200%'
    ],
    deliverablesDe: [
      'Churn: -50-75%',
      'NRR: +30-50pp',
      'Expansionsrate: +100-200%'
    ],
    impactEn: 'Reduce churn by 50-75%, increase NRR by 30-50pp, boost expansion rate by 100-200% in 90 days. 2 of 3 outcomes guaranteed or 50% refund.',
    impactDe: 'Reduziere Churn um 50-75%, steigere NRR um 30-50pp, erhöhe Expansionsrate um 100-200% in 90 Tagen. 2 von 3 Ergebnissen garantiert oder 50% Rückerstattung.',
    primaryCtaEn: 'More About NRR Machine',
    primaryCtaDe: 'Mehr über NRR Machine',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/boost/nrr-machine',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/nrr-boost'
  },
  {
    id: 24,
    slug: 'boost-scaling-os',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['scaling-chaos'],
    price: '€60K-€78K',
    priceTag: 'paid',
    headlineEn: 'Boost: Scaling OS',
    headlineDe: 'Boost: Scaling OS',
    problemEn: "Your scaling is chaotic. Team grew 200% but revenue only 50%. Decision velocity collapsed to 7 days. Operational debt at 40%. Board asking: Why isn't revenue scaling with headcount?",
    problemDe: 'Dein Scaling ist chaotisch. Team wuchs 200%, aber Umsatz nur 50%. Entscheidungsgeschwindigkeit brach auf 7 Tage ein. Operational Debt bei 40%. Board fragt: Warum skaliert der Umsatz nicht mit dem Headcount?',
    solutionEn: 'We rebuild your entire operating system in 90 days: Decision Velocity +50-100%, Operational Debt -30-50%, ARR/Employee +30-50% - with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir bauen dein gesamtes Operating System in 90 Tagen neu: Decision Velocity +50-100%, Operational Debt -30-50%, ARR/Employee +30-50% - mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'Decision Velocity: +50-100%',
      'Operational Debt: -30-50%',
      'ARR/Employee: +30-50%'
    ],
    deliverablesDe: [
      'Entscheidungsgeschwindigkeit: +50-100%',
      'Operational Debt: -30-50%',
      'ARR/Employee: +30-50%'
    ],
    impactEn: 'Increase decision velocity by 50-100%, reduce operational debt by 30-50%, improve ARR/Employee by 30-50% in 90 days. 2 of 3 outcomes guaranteed or 50% refund.',
    impactDe: 'Steigere Entscheidungsgeschwindigkeit um 50-100%, reduziere Operational Debt um 30-50%, verbessere ARR/Employee um 30-50% in 90 Tagen. 2 von 3 Ergebnissen garantiert oder 50% Rückerstattung.',
    primaryCtaEn: 'More About Scaling OS',
    primaryCtaDe: 'Mehr über Scaling OS',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/boost/scaling-os',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/scaling-boost'
  },
  {
    id: 25,
    slug: 'boost-ai-maturity',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['ai-transformation'],
    price: '€60K-€78K',
    priceTag: 'paid',
    headlineEn: 'Boost: AI Maturity',
    headlineDe: 'Boost: AI Maturity',
    problemEn: "You're AI-Powered, not AI-Native. θ_index is 0.3 (Level 1), competitors are 0.8+ (Level 3). Time to €100M is 60-84 months (benchmark: 8-18 months). Board asking: When will we become AI-native?",
    problemDe: 'Du bist AI-Powered, nicht AI-Native. θ_index liegt bei 0.3 (Level 1), Wettbewerber bei 0.8+ (Level 3). Time-to-€100M: 60-84 Monate (Benchmark: 8-18 Monate). Board fragt: Wann werden wir AI-native?',
    solutionEn: 'We rebuild your entire AI maturity in 90 days: θ_index +0.3-0.5, AI Use Cases +10-20, Process Automation +40-60%—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir bauen deine gesamte AI Maturity in 90 Tagen auf: θ_index +0.3-0.5, AI Use Cases +10-20, Process Automation +40-60%—mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'θ_index: +0.3-0.5',
      'AI Use Cases: +10-20',
      'Automation: +40-60%'
    ],
    deliverablesDe: [
      'θ_index: +0.3-0.5',
      'AI Use Cases: +10-20',
      'Automation: +40-60%'
    ],
    impactEn: 'Increase θ_index by 0.3-0.5, deploy 10-20 AI use cases, boost automation by 40-60% in 90 days.',
    impactDe: 'Erhöhe θ_index um 0.3-0.5, deploye 10-20 AI Use Cases, steigere Automation um 40-60% in 90 Tagen.',
    primaryCtaEn: 'More About AI Maturity',
    primaryCtaDe: 'Mehr über AI Maturity',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/boost/ai-maturity',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/ai-boost'
  },
  {
    id: 26,
    slug: 'boost-board-excellence',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['board-pressure'],
    price: '€60K-€78K',
    priceTag: 'paid',
    headlineEn: 'Boost: Board Excellence',
    headlineDe: 'Boost: Board Excellence',
    problemEn: "Your board is losing confidence. Board confidence is 40-60% (benchmark: 85%+). Board prep takes 5-7 days (benchmark: 24-48h). Rule of 40 is 20% (benchmark: 50%+). Board asking: When will we see a path to profitability?",
    problemDe: 'Dein Board verliert das Vertrauen. Board Confidence liegt bei 40-60% (Benchmark: 85%+). Board Prep dauert 5-7 Tage (Benchmark: 24-48h). Rule of 40 liegt bei 20% (Benchmark: 50%+). Board fragt: Wann sehen wir einen Weg zur Profitabilität?',
    solutionEn: 'We rebuild your entire board framework in 90 days: Board Confidence +50-100%, Board Prep Time -80-90%, Rule of 40 +20-30pp—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir bauen dein gesamtes Board Framework in 90 Tagen neu auf: Board Confidence +50-100%, Board Prep Time -80-90%, Rule of 40 +20-30pp – mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'Board Confidence: +50-100%',
      'Board Prep Time: -80-90%',
      'Rule of 40: +20-30pp'
    ],
    deliverablesDe: [
      'Board Confidence: +50-100%',
      'Board Prep Time: -80-90%',
      'Rule of 40: +20-30pp'
    ],
    impactEn: 'Increase Board Confidence by 50-100%, reduce Board Prep Time by 80-90%, improve Rule of 40 by 20-30pp in 90 days.',
    impactDe: 'Steigere Board Confidence um 50-100%, reduziere Board Prep Time um 80-90%, verbessere Rule of 40 um 20-30pp in 90 Tagen.',
    primaryCtaEn: 'More About Board Excellence',
    primaryCtaDe: 'Mehr über Board Excellence',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/boost/board-excellence',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/board-boost'
  },
  {
    id: 27,
    slug: 'boost-portfolio-value',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: ['portfolio-performance'],
    price: '€60K-€78K',
    priceTag: 'paid',
    headlineEn: 'Boost: Portfolio Value',
    headlineDe: 'Boost: Portfolio Value',
    problemEn: "Your portfolio is underperforming. Portfolio IRR is 15% (benchmark: 45%+). 5-10 companies struggling. No systematic support. LPs asking: Why is portfolio performance so weak?",
    problemDe: 'Dein Portfolio underperformed. Portfolio IRR liegt bei 15% (Benchmark: 45%+). 5-10 Unternehmen kämpfen. Keine systematische Unterstützung. LPs fragen: Warum ist die Portfolio-Performance so schwach?',
    solutionEn: 'We rebuild your entire portfolio operating system in 90 days: Portfolio IRR +30-50pp, Portfolio Value +50-100%, 3-5 Companies Transformed—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir bauen dein gesamtes Portfolio Operating System in 90 Tagen neu auf: Portfolio IRR +30-50pp, Portfolio Value +50-100%, 3-5 Unternehmen transformiert – mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'Portfolio IRR: +30-50pp',
      'Portfolio Value: +50-100%',
      'Companies Transformed: 3-5'
    ],
    deliverablesDe: [
      'Portfolio IRR: +30-50pp',
      'Portfolio Value: +50-100%',
      'Unternehmen transformiert: 3-5'
    ],
    impactEn: 'Increase Portfolio IRR by 30-50pp, Portfolio Value by 50-100%, transform 3-5 companies in 90 days.',
    impactDe: 'Steigere Portfolio IRR um 30-50pp, Portfolio Value um 50-100%, transformiere 3-5 Unternehmen in 90 Tagen.',
    primaryCtaEn: 'More About Portfolio Value',
    primaryCtaDe: 'Mehr über Portfolio Value',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/boost/portfolio-value',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/portfolio-boost'
  },
  {
    id: 28,
    slug: 'boost-custom-program',
    solutionType: 'transformation',
    transformationTier: 'boost',
    challenges: 'universal',
    price: '€60K-€78K',
    priceTag: 'paid',
    headlineEn: 'Boost: Custom Program',
    headlineDe: 'Boost: Custom Programm',
    problemEn: "Your problem is unique. Standard offerings don't work (CAC, NRR, Scaling, AI, Board solutions are close but not exact). You need a custom solution—but you don't have 12 months. You have 90 days to show results.",
    problemDe: 'Dein Problem ist einzigartig. Standard-Angebote funktionieren nicht (CAC, NRR, Scaling, AI, Board Lösungen sind nah dran, aber nicht exakt). Du brauchst eine Custom Solution – aber du hast keine 12 Monate. Du hast 90 Tage, um Ergebnisse zu zeigen.',
    solutionEn: 'We design and build a custom solution tailored to your unique problem in 90 days: Custom Metric 1 +100-150%, Custom Metric 2 +150-200%, Custom Solution Fully Implemented—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir designen und bauen eine maßgeschneiderte Lösung für dein einzigartiges Problem in 90 Tagen: Custom Metric 1 +100-150%, Custom Metric 2 +150-200%, Custom Solution vollständig implementiert – mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'Custom Metric 1: +100-150%',
      'Custom Metric 2: +150-200%',
      'Custom Solution: Fully Built'
    ],
    deliverablesDe: [
      'Custom Metric 1: +100-150%',
      'Custom Metric 2: +150-200%',
      'Custom Solution: Vollständig gebaut'
    ],
    impactEn: 'Build your custom solution in 90 days—with 2 of 3 outcomes guaranteed.',
    impactDe: 'Baue deine Custom Solution in 90 Tagen – mit 2 von 3 Ergebnissen garantiert.',
    primaryCtaEn: 'More About Custom Program',
    primaryCtaDe: 'Mehr über Custom Program',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/boost/custom-program',
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
    challenges: ['cac-crisis', 'growth-stalled', 'pricing-breakdown', 'customer-success-broken', 'ai-transformation'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: Hypergrowth',
    headlineDe: 'Accelerate: Hypergrowth',
    problemEn: "You're Level 1—your competitors are Level 3. Your θ_index is 0.2-0.5 (Level 1: AI-Powered). Your competitors are 0.8-1.0 (Level 3: AI-Native). Time to €100M is 60-84 months (benchmark: 8-18 months). You're losing market share every quarter.",
    problemDe: 'Du bist Level 1—deine Wettbewerber sind Level 3. Dein θ_index liegt bei 0.2-0.5 (Level 1: AI-Powered). Deine Wettbewerber liegen bei 0.8-1.0 (Level 3: AI-Native). Time to €100M ist 60-84 Monate (Benchmark: 8-18 Monate). Du verlierst jedes Quartal Marktanteile.',
    solutionEn: 'We transform your entire business model from Level 1 to Level 3 in 12 months: Time to €100M -85-91%, CAC -60-80%, ARR Growth +100-200%—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir transformieren dein gesamtes Geschäftsmodell von Level 1 zu Level 3 in 12 Monaten: Time to €100M -85-91%, CAC -60-80%, ARR Growth +100-200%—mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'Time to €100M: -85-91%',
      'CAC: -60-80%',
      'ARR Growth: +100-200%'
    ],
    deliverablesDe: [
      'Time to €100M: -85-91%',
      'CAC: -60-80%',
      'ARR Growth: +100-200%'
    ],
    impactEn: 'Transform from Level 1 (AI-Powered) to Level 3 (AI-Native) in 12 months. Reduce Time to €100M by 85-91%, CAC by 60-80%, increase ARR Growth by 100-200%.',
    impactDe: 'Transformiere von Level 1 (AI-Powered) zu Level 3 (AI-Native) in 12 Monaten. Reduziere Time to €100M um 85-91%, CAC um 60-80%, steigere ARR Growth um 100-200%.',
    primaryCtaEn: 'More About Hypergrowth',
    primaryCtaDe: 'Mehr über Hypergrowth',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/accelerate/hypergrowth',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/hypergrowth-accelerate'
  },
  {
    id: 30,
    slug: 'accelerate-sustainable-growth',
    solutionType: 'transformation',
    transformationTier: 'accelerate',
    challenges: ['growth-stalled', 'scaling-chaos'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: Sustainable Growth',
    headlineDe: 'Accelerate: Nachhaltiges Wachstum',
    problemEn: "Your growth is inefficient—and unsustainable. Rule of 40 is 15-25% (benchmark: 50%+). Burn multiple is 2.5-4.0 (benchmark: <1.5). Board is asking: When will we see a path to profitability?",
    problemDe: 'Dein Wachstum ist ineffizient—und nicht nachhaltig. Rule of 40 liegt bei 15-25% (Benchmark: 50%+). Burn Multiple liegt bei 2.5-4.0 (Benchmark: <1.5). Der Vorstand fragt: Wann sehen wir einen Weg zur Profitabilität?',
    solutionEn: 'We transform your entire growth model from Level 1 to Level 2 in 12 months: Rule of 40 +30-50pp, ARR Growth +100-200%, Burn Multiple -60-80%—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir transformieren dein gesamtes Growth-Modell von Level 1 zu Level 2 in 12 Monaten: Rule of 40 +30-50pp, ARR Growth +100-200%, Burn Multiple -60-80%—mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'Rule of 40: +30-50pp',
      'ARR Growth: +100-200%',
      'Burn Multiple: -60-80%'
    ],
    deliverablesDe: [
      'Rule of 40: +30-50pp',
      'ARR Growth: +100-200%',
      'Burn Multiple: -60-80%'
    ],
    impactEn: 'Transform from Level 1 (AI-Powered) to Level 2 (AI-Enabled) in 12 months. Improve Rule of 40 by 30-50pp, ARR Growth by 100-200%, reduce Burn Multiple by 60-80%.',
    impactDe: 'Transformiere von Level 1 (AI-Powered) zu Level 2 (AI-Enabled) in 12 Monaten. Verbessere Rule of 40 um 30-50pp, ARR Growth um 100-200%, reduziere Burn Multiple um 60-80%.',
    primaryCtaEn: 'More About Sustainable Growth',
    primaryCtaDe: 'Mehr über Sustainable Growth',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/accelerate/sustainable-growth',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/sustainable-accelerate'
  },
  {
    id: 31,
    slug: 'accelerate-ai-native-scaling',
    solutionType: 'transformation',
    transformationTier: 'accelerate',
    challenges: ['ai-transformation', 'scaling-chaos'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: AI-Native Scaling',
    headlineDe: 'Accelerate: AI-Native Scaling',
    problemEn: "Your operating system is manual—and slowing you down. Decision velocity is 7 days (benchmark: 24-48h). ARR/Employee is €200K-€400K (benchmark: €800K-€1.2M). Operational debt is 40-50% (benchmark: 10-15%).",
    problemDe: 'Dein Operating System ist manuell—und bremst dich aus. Decision Velocity liegt bei 7 Tagen (Benchmark: 24-48h). ARR/Employee bei €200K-€400K (Benchmark: €800K-€1.2M). Operational Debt bei 40-50% (Benchmark: 10-15%).',
    solutionEn: 'We transform your entire operating system from Level 1 to Level 2 in 12 months: Decision Velocity +500-900%, ARR/Employee +100-200%, Operational Debt -60-80%—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir transformieren dein gesamtes Operating System von Level 1 zu Level 2 in 12 Monaten: Decision Velocity +500-900%, ARR/Employee +100-200%, Operational Debt -60-80%—mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'Decision Velocity: +500-900%',
      'ARR/Employee: +100-200%',
      'Operational Debt: -60-80%'
    ],
    deliverablesDe: [
      'Decision Velocity: +500-900%',
      'ARR/Employee: +100-200%',
      'Operational Debt: -60-80%'
    ],
    impactEn: 'Transform from Level 1 (AI-Powered) to Level 2 (AI-Enabled) in 12 months. Improve Decision Velocity by 500-900%, ARR/Employee by 100-200%, reduce Operational Debt by 60-80%.',
    impactDe: 'Transformiere von Level 1 (AI-Powered) zu Level 2 (AI-Enabled) in 12 Monaten. Verbessere Decision Velocity um 500-900%, ARR/Employee um 100-200%, reduziere Operational Debt um 60-80%.',
    primaryCtaEn: 'More About AI-Native Scaling',
    primaryCtaDe: 'Mehr über AI-Native Scaling',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/accelerate/ai-native-scaling',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/ai-native-accelerate'
  },
  {
    id: 32,
    slug: 'accelerate-exit-readiness',
    solutionType: 'transformation',
    transformationTier: 'accelerate',
    challenges: ['board-pressure'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: Exit-Readiness',
    headlineDe: 'Accelerate: Exit-Readiness',
    problemEn: "Your board is losing confidence—and your exit is at risk. Board Confidence is 40-60% (benchmark: 85-95%). Valuation is 3-5x ARR (benchmark: 10-15x for AI-native). Exit readiness is 0% (benchmark: 100% for Series C+).",
    problemDe: 'Dein Board verliert Vertrauen—und dein Exit ist gefährdet. Board Confidence liegt bei 40-60% (Benchmark: 85-95%). Bewertung bei 3-5x ARR (Benchmark: 10-15x für AI-native). Exit-Readiness bei 0% (Benchmark: 100% für Series C+).',
    solutionEn: 'We transform your entire governance model from Level 1 to Level 2 in 12 months: Board Confidence +60-80pp, Valuation Premium +200-400%, Exit Readiness 0% → 100%—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir transformieren dein gesamtes Governance-Modell von Level 1 zu Level 2 in 12 Monaten: Board Confidence +60-80pp, Valuation Premium +200-400%, Exit Readiness 0% → 100% – mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'Board Confidence: +60-80pp',
      'Valuation Premium: +200-400%',
      'Exit Readiness: 0% → 100%'
    ],
    deliverablesDe: [
      'Board Confidence: +60-80pp',
      'Valuation Premium: +200-400%',
      'Exit Readiness: 0% → 100%'
    ],
    impactEn: 'Achieve Board Confidence +60-80pp, Valuation Premium +200-400%, Exit Readiness 0% → 100% in 12 months. Become exit-ready for Series C+ or M&A.',
    impactDe: 'Erreiche Board Confidence +60-80pp, Valuation Premium +200-400%, Exit Readiness 0% → 100% in 12 Monaten. Werde exit-ready für Series C+ oder M&A.',
    primaryCtaEn: 'More About Exit-Readiness',
    primaryCtaDe: 'Mehr über Exit-Readiness',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/accelerate/exit-readiness',
    secondaryCtaEn: 'See case study',
    secondaryCtaDe: 'Case Study ansehen',
    secondaryCtaUrl: '/cases/exit-accelerate'
  },
  {
    id: 33,
    slug: 'accelerate-portfolio-transformation',
    solutionType: 'transformation',
    transformationTier: 'accelerate',
    challenges: ['portfolio-performance'],
    price: '€360K-€720K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: Portfolio Transformation',
    headlineDe: 'Accelerate: Portfolio Transformation',
    problemEn: "Your portfolio is underperforming—and you're running out of time. Portfolio θ_index is 0.3 (benchmark: 0.8+). 60% of companies have no AI strategy. Portfolio IRR is 15% (benchmark: 40%+).",
    problemDe: 'Dein Portfolio underperformt—und die Zeit läuft ab. Portfolio θ_index liegt bei 0.3 (Benchmark: 0.8+). 60% der Companies haben keine AI-Strategie. Portfolio IRR liegt bei 15% (Benchmark: 40%+).',
    solutionEn: 'We transform your entire portfolio—10-15 companies—to AI-native in 12 months: Portfolio θ_index +60%, Portfolio Valuation +100-500%, Companies Transformed 10-15—with 2 of 3 outcomes guaranteed.',
    solutionDe: 'Wir transformieren dein gesamtes Portfolio—10-15 Companies—zu AI-native in 12 Monaten: Portfolio θ_index +60%, Portfolio Valuation +100-500%, Companies Transformed 10-15—mit 2 von 3 Ergebnissen garantiert.',
    deliverablesEn: [
      'Portfolio θ_index: +60%',
      'Portfolio Valuation: +100-500%',
      'Companies Transformed: 10-15'
    ],
    deliverablesDe: [
      'Portfolio θ_index: +60%',
      'Portfolio Valuation: +100-500%',
      'Companies Transformed: 10-15'
    ],
    impactEn: 'Transform 10-15 portfolio companies to AI-native. Achieve Portfolio θ_index +60%, Valuation +100-500% in 12 months.',
    impactDe: 'Transformiere 10-15 Portfolio-Companies zu AI-native. Erreiche Portfolio θ_index +60%, Valuation +100-500% in 12 Monaten.',
    primaryCtaEn: 'More About Portfolio Transformation',
    primaryCtaDe: 'Mehr über Portfolio Transformation',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/accelerate/portfolio-transformation',
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
    solutionType: 'keynote',
    challenges: 'universal',
    price: '€9.6K-€12.9K',
    priceTag: 'paid',
    headlineEn: 'Workshop',
    headlineDe: 'Workshop',
    problemEn: "Your team isn't aligned—and you're losing velocity. Marketing says one thing, Sales says another, Product is building the wrong features. Your team doesn't have the frameworks to execute. You need team alignment. Fast.",
    problemDe: 'Dein Team ist nicht aligned—und ihr verliert Velocity. Marketing sagt das Eine, Sales das Andere, Product baut die falschen Features. Dein Team hat keine Frameworks zur Umsetzung. Du brauchst Team Alignment. Schnell.',
    solutionEn: 'We deliver tactical workshops in 1-2 days (6-16 hours) for 10-30 participants. Choose from 9 workshop types: GTM Strategy, Growth Strategy, Pricing Strategy, Customer Success, Operations Excellence, Scaling, AI Transformation, Board Governance, Portfolio Excellence. You get: Team Alignment +80%, Playbook (30-40 pages), Execution Ready Day 1.',
    solutionDe: 'Wir liefern taktische Workshops in 1-2 Tagen (6-16 Stunden) für 10-30 Teilnehmer. Wähle aus 9 Workshop-Typen: GTM Strategy, Growth Strategy, Pricing Strategy, Customer Success, Operations Excellence, Scaling, AI Transformation, Board Governance, Portfolio Excellence. Du erhältst: Team Alignment +80%, Playbook (30-40 Seiten), Execution Ready Tag 1.',
    deliverablesEn: [
      'Team Alignment: +80%',
      'Playbook: 30-40 Pages',
      'Execution Ready: Day 1'
    ],
    deliverablesDe: [
      'Team Alignment: +80%',
      'Playbook: 30-40 Seiten',
      'Execution Ready: Tag 1'
    ],
    impactEn: 'Align 10-30 participants in 1-2 days. Get tactical frameworks and playbooks to execute immediately. Predict 5-10x ROI from team alignment and execution velocity.',
    impactDe: 'Aligniere 10-30 Teilnehmer in 1-2 Tagen. Erhalte taktische Frameworks und Playbooks zur sofortigen Umsetzung. Prognostiziere 5-10x ROI durch Team Alignment und Execution Velocity.',
    primaryCtaEn: 'More About Workshop',
    primaryCtaDe: 'Mehr über Workshop',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/workshop',
    secondaryCtaEn: 'See topics',
    secondaryCtaDe: 'Themen ansehen',
    secondaryCtaUrl: '/expertise'
  },

  // ============================================
  // BESPOKE STRATEGY (1 Kachel)
  // ============================================
  {
    id: 35,
    slug: 'strategic-advisory',
    solutionType: 'advisory',
    challenges: 'universal',
    price: '€3.9K–€11K/Mo',
    priceTag: 'custom',
    headlineEn: 'Strategic Advisory',
    headlineDe: 'Strategic Advisory',
    problemEn: "You're making critical decisions without strategic guidance. Decision velocity is 7-14 days. Strategic clarity is low. Board confidence is 40-60%.",
    problemDe: 'Du triffst kritische Entscheidungen ohne strategische Führung. Decision Velocity ist 7-14 Tage. Strategische Klarheit ist gering. Board Confidence liegt bei 40-60%.',
    solutionEn: 'We become your ongoing strategic sparring partner (min. 12 months). Choose intensity: Catalyst (1-2 days/month, €3.9K/Mo), Accelerator (3-4 days/month, €8.4K/Mo), Transformator (4-6 days/week, €11K/Mo).',
    solutionDe: 'Wir werden dein laufender strategischer Sparringspartner (mind. 12 Monate). Wähle Intensität: Catalyst (1-2 Tage/Monat, €3.9K/Mo), Accelerator (3-4 Tage/Monat, €8.4K/Mo), Transformator (4-6 Tage/Woche, €11K/Mo).',
    deliverablesEn: [
      'Decision Velocity: +50-100%',
      'Strategic Clarity: +80%',
      'Board Confidence: +30-50pp'
    ],
    deliverablesDe: [
      'Decision Velocity: +50-100%',
      'Strategic Clarity: +80%',
      'Board Confidence: +30-50pp'
    ],
    impactEn: 'Get ongoing strategic guidance that accelerates your decision-making and increases board confidence. Predict 5-10x ROI in 12+ months.',
    impactDe: 'Erhalte laufende strategische Führung, die deine Entscheidungsfindung beschleunigt und das Board-Vertrauen stärkt. Prognostiziere 5-10x ROI in 12+ Monaten.',
    primaryCtaEn: 'More About Strategic Advisory',
    primaryCtaDe: 'Mehr über Strategic Advisory',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/strategic-advisory',
    secondaryCtaEn: 'Book call',
    secondaryCtaDe: 'Call buchen',
    secondaryCtaUrl: 'https://calendly.com/michel-scalingx/advisory'
  },


  // ============================================
  // KEYNOTE (1 Kachel)
  // ============================================
  {
    id: 37,
    slug: 'keynote',
    solutionType: 'keynote',
    challenges: 'universal',
    price: '€4.9K',
    priceTag: 'paid',
    headlineEn: 'Keynote',
    headlineDe: 'Keynote',
    problemEn: "Your event needs inspiration—not generic motivation. Generic speakers don't understand your business. You need tactical inspiration with frameworks, stories, and actionable takeaways. You need expert keynote. Fast.",
    problemDe: 'Dein Event braucht Inspiration—keine generische Motivation. Generische Speaker verstehen dein Business nicht. Du brauchst taktische Inspiration mit Frameworks, Stories und umsetzbaren Takeaways. Du brauchst eine Experten-Keynote. Schnell.',
    solutionEn: 'We deliver tactical keynotes in 60-90 minutes for 50-500 participants. Choose from 5 topics: AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success Excellence, Board Governance. You get: High Impact Inspiration, 3-5 Actionable Takeaways, Keynote Slides (40-60 pages).',
    solutionDe: 'Wir liefern taktische Keynotes in 60-90 Minuten für 50-500 Teilnehmer. Wähle aus 5 Themen: AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success Excellence, Board Governance. Du erhältst: High Impact Inspiration, 3-5 umsetzbare Takeaways, Keynote Slides (40-60 Seiten).',
    deliverablesEn: [
      'Audience: 50-500 People',
      'Inspiration: High Impact',
      'Takeaways: 3-5 Actions'
    ],
    deliverablesDe: [
      'Audience: 50-500 Personen',
      'Inspiration: High Impact',
      'Takeaways: 3-5 Aktionen'
    ],
    impactEn: 'Inspire 50-500 participants in 60-90 minutes. Get tactical frameworks and 3-5 actionable takeaways. Predict 5-10x ROI from audience inspiration and event momentum.',
    impactDe: 'Inspiriere 50-500 Teilnehmer in 60-90 Minuten. Erhalte taktische Frameworks und 3-5 umsetzbare Takeaways. Prognostiziere 5-10x ROI durch Audience Inspiration und Event Momentum.',
    primaryCtaEn: 'More About Keynote',
    primaryCtaDe: 'Mehr über Keynote',
    primaryCtaAction: 'learn-more',
    primaryCtaUrl: '/solutions/keynote',
    secondaryCtaEn: 'Book Free Inflection Call',
    secondaryCtaDe: 'Kostenloses Inflection Call buchen',
    secondaryCtaUrl: 'https://calendly.com/michel-scalingx/inflection-call'
  },

  // ============================================
  // TOOLS (4 Kacheln)
  // ============================================
  {
    id: 38,
    slug: 'lasr-io',
    solutionType: 'tools',
    challenges: 'universal',
    price: 'Free',
    priceTag: 'free',
    headlineEn: 'lasr.io',
    headlineDe: 'lasr.io',
    problemEn: "You don't know if you're ready to scale. You need a quick assessment—but don't want to book a call yet.",
    problemDe: 'Du weißt nicht, ob du bereit bist zu skalieren. Du brauchst ein schnelles Assessment—willst aber noch keinen Call buchen.',
    solutionEn: 'AI-powered scaling readiness assessment. Get your θ_index score (0-1), identify C_min, and receive 3-5 next steps in 15 minutes.',
    solutionDe: 'AI-gesteuertes Scaling Readiness Assessment. Erhalte deinen θ_index Score (0-1), identifiziere C_min und erhalte 3-5 nächste Schritte in 15 Minuten.',
    deliverablesEn: [
      'θ_index score (0-1 scale)',
      'C_min identification (bottleneck)',
      '3-5 next steps with ROI'
    ],
    deliverablesDe: [
      'θ_index Score (0-1 Skala)',
      'C_min Identifikation (Engpass)',
      '3-5 nächste Schritte mit ROI'
    ],
    impactEn: 'Get your scaling readiness score in 15 minutes. Know exactly where to focus next.',
    impactDe: 'Erhalte deinen Scaling Readiness Score in 15 Minuten. Wisse genau, worauf du dich als Nächstes konzentrieren solltest.',
    primaryCtaEn: 'Try Now',
    primaryCtaDe: 'Jetzt ausprobieren',
    primaryCtaAction: 'open-tool',
    primaryCtaUrl: 'https://lasr.io',
    secondaryCtaEn: 'Learn more',
    secondaryCtaDe: 'Mehr erfahren',
    secondaryCtaUrl: '/about'
  },
  {
    id: 39,
    slug: 'roi-calculator',
    solutionType: 'tools',
    challenges: 'universal',
    price: 'Free',
    priceTag: 'free',
    headlineEn: 'ROI Calculator',
    headlineDe: 'ROI-Rechner',
    problemEn: "You're considering a ScalingX program, but you want to see predicted ROI before booking a call.",
    problemDe: 'Du erwägst ein ScalingX-Programm, aber du willst den prognostizierten ROI sehen, bevor du einen Call buchst.',
    solutionEn: 'Calculate predicted ROI for ScalingX programs. Input your metrics (CAC, LTV, Churn, etc.) and see predicted impact in 30-90 days.',
    solutionDe: 'Berechne den prognostizierten ROI für ScalingX-Programme. Gib deine Metriken ein (CAC, LTV, Churn, etc.) und sieh den prognostizierten Impact in 30-90 Tagen.',
    deliverablesEn: [
      'ROI prediction (2-10x)',
      'Metric improvement forecast',
      'Program recommendation'
    ],
    deliverablesDe: [
      'ROI-Prognose (2-10x)',
      'Metrik-Verbesserungs-Prognose',
      'Programmempfehlung'
    ],
    impactEn: 'See predicted ROI in 5 minutes. Decide which program is right for you.',
    impactDe: 'Sieh den prognostizierten ROI in 5 Minuten. Entscheide, welches Programm das richtige für dich ist.',
    primaryCtaEn: 'Try Now',
    primaryCtaDe: 'Jetzt ausprobieren',
    primaryCtaAction: 'open-tool',
    primaryCtaUrl: '/roi-calculator',
    secondaryCtaEn: 'Learn more',
    secondaryCtaDe: 'Mehr erfahren',
    secondaryCtaUrl: '/about'
  },
  {
    id: 40,
    slug: 'scaling-calculator',
    solutionType: 'tools',
    challenges: ['scaling-chaos', 'ai-transformation', 'orientation'],
    price: 'Free',
    priceTag: 'free',
    headlineEn: 'Scaling Calculator',
    headlineDe: 'Scaling-Rechner',
    problemEn: "You're growing fast, but you don't know if your processes, systems, and team are ready to scale. You need a quick assessment.",
    problemDe: 'Du wächst schnell, aber du weißt nicht, ob deine Prozesse, Systeme und dein Team bereit sind zu skalieren. Du brauchst ein schnelles Assessment.',
    solutionEn: 'Assess your scaling readiness. Evaluate 4 capabilities (C₁-C₄), identify bottlenecks, and receive a 90-day roadmap.',
    solutionDe: 'Bewerte deine Skalierungsbereitschaft. Evaluiere 4 Capabilities (C₁-C₄), identifiziere Engpässe und erhalte eine 90-Tage-Roadmap.',
    deliverablesEn: [
      'Capability scores (C₁-C₄)',
      'Bottleneck identification',
      '90-day roadmap'
    ],
    deliverablesDe: [
      'Capability Scores (C₁-C₄)',
      'Engpass-Identifikation',
      '90-Tage-Roadmap'
    ],
    impactEn: 'Get your scaling readiness score in 10 minutes. Know exactly where to focus next.',
    impactDe: 'Erhalte deinen Scaling Readiness Score in 10 Minuten. Wisse genau, worauf du dich als Nächstes konzentrieren solltest.',
    primaryCtaEn: 'Try Now',
    primaryCtaDe: 'Jetzt ausprobieren',
    primaryCtaAction: 'open-tool',
    primaryCtaUrl: '/scaling-calculator',
    secondaryCtaEn: 'Learn more',
    secondaryCtaDe: 'Mehr erfahren',
    secondaryCtaUrl: '/about'
  },
  {
    id: 41,
    slug: 'keypitchs',
    solutionType: 'tools',
    challenges: ['cac-crisis'],
    price: 'Free',
    priceTag: 'free',
    headlineEn: 'KeyPitchs',
    headlineDe: 'KeyPitchs',
    problemEn: "Your pitch deck isn't landing with investors. You need expert feedback—but don't want to book a call yet.",
    problemDe: 'Dein Pitch Deck landet nicht bei Investoren. Du brauchst Experten-Feedback—willst aber noch keinen Call buchen.',
    solutionEn: 'AI-powered pitch deck analyzer. Upload your deck, get expert feedback on story, traction, financials. Predict 20-40% higher investor confidence.',
    solutionDe: 'AI-gesteuerte Pitch Deck Analyse. Lade dein Deck hoch, erhalte Experten-Feedback zu Story, Traction, Financials. Prognostiziere 20-40% höheres Investor-Vertrauen.',
    deliverablesEn: [
      'Slide-by-slide feedback',
      'Investor Q&A prep',
      'Confidence score (0-100)'
    ],
    deliverablesDe: [
      'Slide-by-Slide Feedback',
      'Investor Q&A Vorbereitung',
      'Confidence Score (0-100)'
    ],
    impactEn: 'Get expert feedback in 15 minutes. Predict 20-40% higher investor confidence.',
    impactDe: 'Erhalte Experten-Feedback in 15 Minuten. Prognostiziere 20-40% höheres Investor-Vertrauen.',
    primaryCtaEn: 'Try Now',
    primaryCtaDe: 'Jetzt ausprobieren',
    primaryCtaAction: 'open-tool',
    primaryCtaUrl: 'https://keypitchs.com',
    secondaryCtaEn: 'Learn more',
    secondaryCtaDe: 'Mehr erfahren',
    secondaryCtaUrl: '/about'
  },
  // ID 42: DealDeskr.io - AI Deal Intelligence (paid tool)
  {
    id: 42,
    slug: 'dealdeskr-io',
    solutionType: 'tools',
    challenges: ['cac-crisis', 'growth-stalled', 'pricing-breakdown', 'board-pressure'],
    price: 'From €79/user/mo',
    priceTag: 'paid',
    headlineEn: 'DealDeskr.io',
    headlineDe: 'DealDeskr.io',
    problemEn: "Your sales team makes bad pricing decisions—no data foundation, 40-60% deal leakage, inconsistent playbooks.",
    problemDe: 'Dein Sales-Team trifft schlechte Pricing-Entscheidungen—keine Datengrundlage, 40-60% Deal-Leakage, inkonsistente Playbooks.',
    solutionEn: 'Real-time deal intelligence & AI-powered pricing recommendations in your sales workflow. Deal scoring, pricing intelligence, playbook recommendations, forecast accuracy.',
    solutionDe: 'Echtzeit-Deal-Intelligence & AI-gestützte Pricing-Empfehlungen in deinem Sales-Workflow. Deal Scoring, Pricing Intelligence, Playbook-Empfehlungen, Forecast-Genauigkeit.',
    deliverablesEn: [
      'Deal scoring (+30-50% pricing intelligence)',
      'Playbook recommendations (+20-40% conversion)',
      'Forecast accuracy (-60% errors)'
    ],
    deliverablesDe: [
      'Deal Scoring (+30-50% Pricing Intelligence)',
      'Playbook-Empfehlungen (+20-40% Conversion)',
      'Forecast-Genauigkeit (-60% Fehler)'
    ],
    impactEn: '+50-100% higher deals, +40-60% win rate, -25-33% sales cycle. €50M ARR company: +€15M ARR/year.',
    impactDe: '+50-100% höhere Deals, +40-60% Win Rate, -25-33% Sales Cycle. €50M ARR Unternehmen: +€15M ARR/Jahr.',
    primaryCtaEn: 'Try Now',
    primaryCtaDe: 'Jetzt ausprobieren',
    primaryCtaAction: 'external',
    primaryCtaUrl: 'https://dealdeskr.io/',
    secondaryCtaEn: 'Learn more',
    secondaryCtaDe: 'Mehr erfahren',
    secondaryCtaUrl: '/about'
  }
];

// Helper functions
export const getTilesByChallenge = (challengeId: Exclude<ChallengeId, 'all'>): SolutionTile[] => {
  return solutionTiles.filter(tile => 
    tile.challenges === 'universal' || 
    (Array.isArray(tile.challenges) && tile.challenges.includes(challengeId))
  );
};

export const getTilesBySolutionType = (typeId: Exclude<SolutionTypeId, 'all'>): SolutionTile[] => {
  return solutionTiles.filter(tile => tile.solutionType === typeId);
};

export const getFilteredTiles = (challengeId: Exclude<ChallengeId, 'all'> | null, typeId: Exclude<SolutionTypeId, 'all'> | null): SolutionTile[] => {
  return solutionTiles.filter(tile => {
    const matchesChallenge = !challengeId || tile.challenges === 'universal' || 
      (Array.isArray(tile.challenges) && tile.challenges.includes(challengeId));
    const matchesType = !typeId || tile.solutionType === typeId;
    return matchesChallenge && matchesType;
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
