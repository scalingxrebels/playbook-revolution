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
    problemEn: "You need tactical guidance on a specific challenge—pricing, GTM, scaling, AI—but don't need a full program yet.",
    problemDe: 'Du brauchst taktische Anleitung für eine spezifische Herausforderung—Pricing, GTM, Skalierung, AI—aber noch kein vollständiges Programm.',
    solutionEn: '45 or 90-minute deep-dive with a ScalingX expert. Get concrete action steps and a 90-day roadmap tailored to your challenge.',
    solutionDe: '45 oder 90-minütiger Deep-Dive mit einem ScalingX-Experten. Erhalte konkrete Aktionsschritte und eine 90-Tage-Roadmap, zugeschnitten auf deine Herausforderung.',
    deliverablesEn: [
      'Expert analysis (45 or 90 min)',
      'Action plan (3-5 initiatives)',
      '90-day roadmap with milestones'
    ],
    deliverablesDe: [
      'Experten-Analyse (45 oder 90 min)',
      'Aktionsplan (3-5 Initiativen)',
      '90-Tage-Roadmap mit Meilensteinen'
    ],
    impactEn: 'Walk away with a clear action plan and 90-day roadmap. Start executing immediately.',
    impactDe: 'Gehe mit einem klaren Aktionsplan und einer 90-Tage-Roadmap. Starte sofort mit der Umsetzung.',
    primaryCtaEn: 'Book Session',
    primaryCtaDe: 'Session buchen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/expert-session',
    secondaryCtaEn: 'See topics',
    secondaryCtaDe: 'Themen ansehen',
    secondaryCtaUrl: '/expertise'
  },

  // ============================================
  // DECISION SUPPORT (8 Kacheln)
  // ============================================
  {
    id: 3,
    slug: 'gtm-review',
    solutionType: 'decision-support',
    challenges: ['cac-crisis', 'growth-stalled'],
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'GTM Effectiveness Review',
    headlineDe: 'GTM Effectiveness Review',
    problemEn: "Your CAC is rising, win rates are dropping, and you don't know why. Your GTM engine is broken, but you can't pinpoint the bottleneck.",
    problemDe: 'Dein CAC steigt, Win Rates fallen, und du weißt nicht warum. Deine GTM-Engine ist kaputt, aber du kannst den Engpass nicht lokalisieren.',
    solutionEn: 'We audit your GTM in 3-5 days: ICP, positioning, sales process, conversion rates. You get 3-5 recommendations with predicted ROI.',
    solutionDe: 'Wir auditieren dein GTM in 3-5 Tagen: ICP, Positionierung, Sales-Prozess, Conversion Rates. Du erhältst 3-5 Empfehlungen mit vorhergesagtem ROI.',
    deliverablesEn: [
      'GTM audit report (10-15 pages)',
      'Bottleneck identification (C_min)',
      '3-5 recommendations with ROI',
      'Optional: 90-Day Roadmap (+€2K)'
    ],
    deliverablesDe: [
      'GTM Audit Report (10-15 Seiten)',
      'Engpass-Identifikation (C_min)',
      '3-5 Empfehlungen mit ROI',
      'Optional: 90-Tage-Roadmap (+€2K)'
    ],
    impactEn: 'Reduce CAC by 20-30%, increase win rate by 10-15pp in 90 days.',
    impactDe: 'Reduziere CAC um 20-30%, erhöhe Win Rate um 10-15pp in 90 Tagen.',
    primaryCtaEn: 'Request Review',
    primaryCtaDe: 'Review anfragen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/gtm-review',
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
    slug: 'pricing-review',
    solutionType: 'decision-support',
    challenges: ['pricing-breakdown'],
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'Pricing & Packaging Review',
    headlineDe: 'Pricing & Packaging Review',
    problemEn: "Your pricing is stuck. ARPU isn't growing, discounting is out of control, and you're leaving money on the table.",
    problemDe: 'Dein Pricing steckt fest. ARPU wächst nicht, Rabatte sind außer Kontrolle, und du lässt Geld auf dem Tisch liegen.',
    solutionEn: 'We analyze your value metric, packaging, and discounting strategy in 3-5 days. You get a pricing optimization roadmap with predicted revenue uplift (10-30%).',
    solutionDe: 'Wir analysieren dein Value Metric, Packaging und Rabattstrategie in 3-5 Tagen. Du erhältst eine Pricing-Optimierungs-Roadmap mit vorhergesagtem Revenue-Uplift (10-30%).',
    deliverablesEn: [
      'Pricing audit report (10-15 pages)',
      'Pricing optimization roadmap',
      'Revenue impact prediction (10-30%)',
      'Optional: 90-Day Monetization Plan (+€2K)'
    ],
    deliverablesDe: [
      'Pricing Audit Report (10-15 Seiten)',
      'Pricing-Optimierungs-Roadmap',
      'Revenue-Impact-Prognose (10-30%)',
      'Optional: 90-Tage-Monetarisierungsplan (+€2K)'
    ],
    impactEn: 'Increase revenue by 10-30%, reduce discounting by 20-40% in 90 days.',
    impactDe: 'Steigere Revenue um 10-30%, reduziere Rabatte um 20-40% in 90 Tagen.',
    primaryCtaEn: 'Request Review',
    primaryCtaDe: 'Review anfragen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/pricing-review',
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
    slug: 'scaling-assessment',
    solutionType: 'decision-support',
    challenges: ['scaling-chaos'],
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'Scaling Readiness Assessment',
    headlineDe: 'Scaling Readiness Assessment',
    problemEn: "You're growing fast, but chaos is creeping in. Processes are breaking, coordination costs are exploding, and you don't know if you're ready to scale.",
    problemDe: 'Du wächst schnell, aber Chaos schleicht sich ein. Prozesse brechen, Koordinationskosten explodieren, und du weißt nicht, ob du bereit bist zu skalieren.',
    solutionEn: 'We assess your scaling readiness in 3-5 days: 4 capabilities (Strategy, Setup, Execution, Scale). You get your C_min and 3-5 next steps.',
    solutionDe: 'Wir bewerten deine Skalierungsbereitschaft in 3-5 Tagen: 4 Capabilities (Strategie, Setup, Execution, Scale). Du erhältst dein C_min und 3-5 nächste Schritte.',
    deliverablesEn: [
      'Scaling readiness report (10-15 pages)',
      'Capability assessment (C1-C4 scores)',
      'Scaling roadmap (90 days)',
      'Optional: 90-Day Level Up Plan (+€2K)'
    ],
    deliverablesDe: [
      'Scaling Readiness Report (10-15 Seiten)',
      'Capability Assessment (C1-C4 Scores)',
      'Scaling Roadmap (90 Tage)',
      'Optional: 90-Tage Level Up Plan (+€2K)'
    ],
    impactEn: 'Increase ARR/Employee by 20-40%, reduce operational debt by 30-50% in 90 days.',
    impactDe: 'Steigere ARR/Employee um 20-40%, reduziere Operational Debt um 30-50% in 90 Tagen.',
    primaryCtaEn: 'Request Assessment',
    primaryCtaDe: 'Assessment anfragen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/scaling-assessment',
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
    slug: 'ai-assessment',
    solutionType: 'decision-support',
    challenges: ['ai-transformation'],
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'AI Maturity Assessment',
    headlineDe: 'AI Maturity Assessment',
    problemEn: "AI is everywhere, but you don't know where to start. Your team is overwhelmed, and you're worried about falling behind.",
    problemDe: 'AI ist überall, aber du weißt nicht, wo du anfangen sollst. Dein Team ist überwältigt, und du machst dir Sorgen, zurückzufallen.',
    solutionEn: 'We assess your AI maturity in 3-5 days: θ_index (0-1 scale), identify AI opportunities, predict 2-5x productivity gains.',
    solutionDe: 'Wir bewerten deine AI-Reife in 3-5 Tagen: θ_index (0-1 Skala), identifizieren AI-Möglichkeiten, prognostizieren 2-5x Produktivitätssteigerungen.',
    deliverablesEn: [
      'AI maturity report (10-15 pages)',
      'θ_index score (0-1 scale)',
      'AI transformation roadmap (6-12 months)',
      'Optional: Transformation Roadmap (+€2K)'
    ],
    deliverablesDe: [
      'AI Maturity Report (10-15 Seiten)',
      'θ_index Score (0-1 Skala)',
      'AI Transformation Roadmap (6-12 Monate)',
      'Optional: Transformation Roadmap (+€2K)'
    ],
    impactEn: 'Increase θ_index by 0.2-0.3, deploy 3-5 AI use cases, predict 20-40% productivity gains in 90 days.',
    impactDe: 'Erhöhe θ_index um 0.2-0.3, deploye 3-5 AI Use Cases, prognostiziere 20-40% Produktivitätssteigerung in 90 Tagen.',
    primaryCtaEn: 'Request Assessment',
    primaryCtaDe: 'Assessment anfragen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/ai-assessment',
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
    slug: 'pitch-deck-check',
    solutionType: 'decision-support',
    challenges: ['board-pressure'],
    price: '€1.9K-€2.5K',
    priceTag: 'paid',
    headlineEn: 'Investor-Readiness Pitch Deck Check',
    headlineDe: 'Investor-Readiness Pitch Deck Check',
    problemEn: "Your pitch deck isn't landing. Investors are asking tough questions, and you're not getting to the next round.",
    problemDe: 'Dein Pitch Deck landet nicht. Investoren stellen harte Fragen, und du kommst nicht in die nächste Runde.',
    solutionEn: 'We review your pitch deck in 3-5 days: story, traction, financials. You get slide-by-slide feedback and investor Q&A prep.',
    solutionDe: 'Wir reviewen dein Pitch Deck in 3-5 Tagen: Story, Traction, Financials. Du erhältst Slide-by-Slide Feedback und Investor Q&A Vorbereitung.',
    deliverablesEn: [
      'Pitch deck review (slide-by-slide)',
      'Investor Q&A prep (20-30 questions)',
      'Revised deck (optional, +€2K)',
      'Optional: Investor Questions Simulation (+€600)'
    ],
    deliverablesDe: [
      'Pitch Deck Review (Slide-by-Slide)',
      'Investor Q&A Vorbereitung (20-30 Fragen)',
      'Überarbeitetes Deck (optional, +€2K)',
      'Optional: Investor Questions Simulation (+€600)'
    ],
    impactEn: 'Predict 20-40% higher investor confidence. Get to the next round faster.',
    impactDe: 'Prognostiziere 20-40% höheres Investor-Vertrauen. Komme schneller in die nächste Runde.',
    primaryCtaEn: 'Request Check',
    primaryCtaDe: 'Check anfragen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/pitch-deck-check',
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
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'VC Due Diligence Simulation',
    headlineDe: 'VC Due Diligence Simulation',
    problemEn: "You're raising a round, but you don't know what VCs will find. Red flags could kill your deal.",
    problemDe: 'Du raiset eine Runde, aber du weißt nicht, was VCs finden werden. Red Flags könnten deinen Deal killen.',
    solutionEn: 'We simulate VC due diligence in 5-7 days: identify red flags, prepare Q&A, optimize financials. You get a board-ready report.',
    solutionDe: 'Wir simulieren VC Due Diligence in 5-7 Tagen: identifizieren Red Flags, bereiten Q&A vor, optimieren Financials. Du erhältst einen Board-Ready Report.',
    deliverablesEn: [
      'DD simulation report (15-20 pages)',
      'Red flag mitigation plan',
      'Q&A prep (50-100 questions)',
      'Optional: Execution Bridge (+€2K discount)'
    ],
    deliverablesDe: [
      'DD Simulation Report (15-20 Seiten)',
      'Red Flag Mitigation Plan',
      'Q&A Vorbereitung (50-100 Fragen)',
      'Optional: Execution Bridge (+€2K Rabatt)'
    ],
    impactEn: 'Predict 30-50% higher success rate. Close your round faster.',
    impactDe: 'Prognostiziere 30-50% höhere Erfolgsquote. Schließe deine Runde schneller ab.',
    primaryCtaEn: 'Request Simulation',
    primaryCtaDe: 'Simulation anfragen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/vc-dd-simulation',
    secondaryCtaEn: 'See sample',
    secondaryCtaDe: 'Beispiel ansehen',
    secondaryCtaUrl: '/cases/vc-dd-simulation',
    addOnPricing: {
      base: '€3.9K',
      bridge: '€5.9K'
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
    problemEn: "Your portfolio is underperforming. Some companies are thriving, others are struggling, and you don't know why.",
    problemDe: 'Dein Portfolio underperformt. Einige Companies florieren, andere kämpfen, und du weißt nicht warum.',
    solutionEn: 'We assess your portfolio (5-30 companies) in 3-5 days: identify underperformers, AI-readiness gaps, synergy opportunities.',
    solutionDe: 'Wir bewerten dein Portfolio (5-30 Companies) in 3-5 Tagen: identifizieren Underperformer, AI-Readiness-Lücken, Synergy-Möglichkeiten.',
    deliverablesEn: [
      'Portfolio heatmap (performance matrix)',
      'AI-readiness assessment (per company)',
      'Synergy playbook (3-5 initiatives)',
      'Optional: Transformation Plan (+€2K)'
    ],
    deliverablesDe: [
      'Portfolio Heatmap (Performance Matrix)',
      'AI-Readiness Assessment (pro Company)',
      'Synergy Playbook (3-5 Initiativen)',
      'Optional: Transformation Plan (+€2K)'
    ],
    impactEn: 'Improve avg. Rule of 40 by 10-20pp, deploy AI in 3-5 companies in 90 days.',
    impactDe: 'Verbessere durchschn. Rule of 40 um 10-20pp, deploye AI in 3-5 Companies in 90 Tagen.',
    primaryCtaEn: 'Request Assessment',
    primaryCtaDe: 'Assessment anfragen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/portfolio-assessment',
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
    slug: 'custom-analysis',
    solutionType: 'decision-support',
    challenges: 'universal',
    price: '€3.9K-€5.9K',
    priceTag: 'paid',
    headlineEn: 'Custom Analysis & Report',
    headlineDe: 'Custom Analysis & Report',
    problemEn: "You have a unique challenge that doesn't fit a standard offering. You need a custom deep-dive.",
    problemDe: 'Du hast eine einzigartige Herausforderung, die nicht in ein Standardangebot passt. Du brauchst einen maßgeschneiderten Deep-Dive.',
    solutionEn: 'We create a custom analysis in 5-7 days: Growth Strategy Review, PMF Audit, Customer Success Audit, Operations Audit, AI Strategy Design, Portfolio Synergy Playbook.',
    solutionDe: 'Wir erstellen eine maßgeschneiderte Analyse in 5-7 Tagen: Growth Strategy Review, PMF Audit, Customer Success Audit, Operations Audit, AI Strategy Design, Portfolio Synergy Playbook.',
    deliverablesEn: [
      'Custom analysis report (15-25 pages)',
      'Decision-grade recommendations',
      'Implementation roadmap (90 days)',
      'Optional: Transformation Roadmap (+€2K)'
    ],
    deliverablesDe: [
      'Custom Analysis Report (15-25 Seiten)',
      'Decision-Grade Empfehlungen',
      'Implementierungs-Roadmap (90 Tage)',
      'Optional: Transformation Roadmap (+€2K)'
    ],
    impactEn: 'Get decision-ready analysis tailored to your unique challenge. Start executing in 90 days.',
    impactDe: 'Erhalte entscheidungsreife Analyse, zugeschnitten auf deine einzigartige Herausforderung. Starte in 90 Tagen mit der Umsetzung.',
    primaryCtaEn: 'Discuss Scope',
    primaryCtaDe: 'Scope besprechen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/custom-analysis',
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
    headlineEn: 'Power Up: CAC Crisis Averted',
    headlineDe: 'Power Up: CAC-Krise abgewendet',
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
    headlineEn: 'Power Up: Growth Unlocked',
    headlineDe: 'Power Up: Growth entsperrt',
    problemEn: "You hit a plateau. Growth is slowing, and you don't know what lever to pull next.",
    problemDe: 'Du hast ein Plateau erreicht. Wachstum verlangsamt sich, und du weißt nicht, welchen Hebel du als nächstes ziehen sollst.',
    solutionEn: 'We reignite your growth in 30 days: diagnose stall drivers, test new levers, build momentum. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir entfachen dein Wachstum in 30 Tagen neu: diagnostizieren Stall-Treiber, testen neue Hebel, bauen Momentum auf. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'Growth rate: +20-40%',
      'New pipeline: +30-50%',
      'Conversion rate: +10-20%'
    ],
    deliverablesDe: [
      'Wachstumsrate: +20-40%',
      'Neue Pipeline: +30-50%',
      'Conversion Rate: +10-20%'
    ],
    impactEn: 'Increase growth rate by 20-40%, new pipeline by 30-50%, conversion rate by 10-20% in 30 days. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Steigere Wachstumsrate um 20-40%, neue Pipeline um 30-50%, Conversion Rate um 10-20% in 30 Tagen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
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
    headlineEn: 'Power Up: Pricing Power',
    headlineDe: 'Power Up: Pricing Power',
    problemEn: "Your pricing is stuck. ARPU isn't growing, discounting is killing margins, and you're leaving 20-40% revenue on the table.",
    problemDe: 'Dein Pricing steckt fest. ARPU wächst nicht, Rabatte killen Margen, und du lässt 20-40% Revenue auf dem Tisch liegen.',
    solutionEn: 'We fix your pricing in 30 days: redesign value metric, packaging, discounting strategy. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir reparieren dein Pricing in 30 Tagen: redesignen Value Metric, Packaging, Rabattstrategie. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
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
    impactEn: 'Increase revenue by 10-20%, ARPU by 15-30%, reduce discounting by 20-40% in 30 days. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Steigere Revenue um 10-20%, ARPU um 15-30%, reduziere Rabatte um 20-40% in 30 Tagen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
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
    headlineEn: 'Power Up: NRR Engine',
    headlineDe: 'Power Up: NRR-Engine',
    problemEn: "Churn is eating your growth. NRR is below 100%, and upsells are random acts of heroism.",
    problemDe: 'Churn frisst dein Wachstum. NRR ist unter 100%, und Upsells sind zufällige Heldenaktionen.',
    solutionEn: 'We fix your NRR in 30 days: install health-scoring, expansion playbooks, early-warning triggers. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir reparieren dein NRR in 30 Tagen: installieren Health-Scoring, Expansion Playbooks, Frühwarnsysteme. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'NRR improvement: +10-20pp',
      'Churn reduction: -20-40%',
      'Expansion revenue: +20-40%'
    ],
    deliverablesDe: [
      'NRR-Verbesserung: +10-20pp',
      'Churn-Reduktion: -20-40%',
      'Expansion Revenue: +20-40%'
    ],
    impactEn: 'Improve NRR by 10-20pp, reduce churn by 20-40%, increase expansion revenue by 20-40% in 30 days. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Verbessere NRR um 10-20pp, reduziere Churn um 20-40%, steigere Expansion Revenue um 20-40% in 30 Tagen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
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
    headlineEn: 'Power Up: Scaling Ready',
    headlineDe: 'Power Up: Scaling Ready',
    problemEn: "You're growing headcount, but output per person is falling. Chaos is creeping in, and you're not ready to scale.",
    problemDe: 'Du wächst in Headcount, aber Output pro Person fällt. Chaos schleicht sich ein, und du bist nicht bereit zu skalieren.',
    solutionEn: 'We make you scaling-ready in 30 days: clarify roles, install operating cadences, remove process debt. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir machen dich in 30 Tagen scaling-ready: klären Rollen, installieren Operating Cadences, entfernen Process Debt. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'ARR/Employee: +20-40%',
      'Operational debt: -30-50%',
      'Team velocity: +20-30%'
    ],
    deliverablesDe: [
      'ARR/Employee: +20-40%',
      'Operational Debt: -30-50%',
      'Team Velocity: +20-30%'
    ],
    impactEn: 'Increase ARR/Employee by 20-40%, reduce operational debt by 30-50%, improve team velocity by 20-30% in 30 days. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Steigere ARR/Employee um 20-40%, reduziere Operational Debt um 30-50%, verbessere Team Velocity um 20-30% in 30 Tagen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
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
    headlineEn: 'Power Up: AI Quick Wins',
    headlineDe: 'Power Up: AI Quick Wins',
    problemEn: "You've dabbled in AI, but nothing's production-grade or ROI-proven. You need quick wins to build momentum.",
    problemDe: 'Du hast mit AI experimentiert, aber nichts ist production-grade oder ROI-bewiesen. Du brauchst Quick Wins, um Momentum aufzubauen.',
    solutionEn: 'We ship 1-2 AI use-cases in 30 days: prioritize, build MVP, deploy to production. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir shippen 1-2 AI Use-Cases in 30 Tagen: priorisieren, bauen MVP, deployen in Production. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'AI use-cases deployed: 1-2',
      'Productivity gain: +20-40%',
      'θ_index improvement: +0.1-0.2'
    ],
    deliverablesDe: [
      'AI Use-Cases deployed: 1-2',
      'Produktivitätssteigerung: +20-40%',
      'θ_index Verbesserung: +0.1-0.2'
    ],
    impactEn: 'Deploy 1-2 AI use-cases, increase productivity by 20-40%, improve θ_index by 0.1-0.2 in 30 days. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Deploye 1-2 AI Use-Cases, steigere Produktivität um 20-40%, verbessere θ_index um 0.1-0.2 in 30 Tagen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
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
    headlineEn: 'Power Up: Board Ready',
    headlineDe: 'Power Up: Board Ready',
    problemEn: "Board meetings feel like accountability theater. You need strategic partnership, not interrogation.",
    problemDe: 'Board Meetings fühlen sich wie Accountability-Theater an. Du brauchst strategische Partnerschaft, keine Verhöre.',
    solutionEn: 'We make you board-ready in 30 days: redesign board materials, install reporting cadence, prep narratives. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir machen dich in 30 Tagen board-ready: redesignen Board-Materialien, installieren Reporting-Cadence, bereiten Narrative vor. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'Board satisfaction: +30-50%',
      'Meeting efficiency: +20-40%',
      'Strategic alignment: +20-30%'
    ],
    deliverablesDe: [
      'Board-Zufriedenheit: +30-50%',
      'Meeting-Effizienz: +20-40%',
      'Strategische Ausrichtung: +20-30%'
    ],
    impactEn: 'Improve board satisfaction by 30-50%, meeting efficiency by 20-40%, strategic alignment by 20-30% in 30 days. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Verbessere Board-Zufriedenheit um 30-50%, Meeting-Effizienz um 20-40%, strategische Ausrichtung um 20-30% in 30 Tagen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
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
    headlineEn: 'Power Up: Portfolio Quick Win',
    headlineDe: 'Power Up: Portfolio Quick Win',
    problemEn: "You need to move the needle on 1-2 portcos—fast. No time for a 6-month program.",
    problemDe: 'Du musst bei 1-2 Portcos schnell die Nadel bewegen. Keine Zeit für ein 6-Monats-Programm.',
    solutionEn: 'We unblock 1-2 portcos in 30 days: diagnose #1 constraint, execute intervention, handoff playbook. You get 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir entblocken 1-2 Portcos in 30 Tagen: diagnostizieren #1 Constraint, führen Intervention durch, übergeben Playbook. Du erhältst 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'Portcos unblocked: 1-2',
      'KPI improvement: +20-40%',
      'Intervention playbook delivered'
    ],
    deliverablesDe: [
      'Portcos entblockt: 1-2',
      'KPI-Verbesserung: +20-40%',
      'Interventions-Playbook geliefert'
    ],
    impactEn: 'Unblock 1-2 portcos, improve KPIs by 20-40%, deliver intervention playbook in 30 days. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Entblocke 1-2 Portcos, verbessere KPIs um 20-40%, liefere Interventions-Playbook in 30 Tagen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
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
    headlineEn: 'Power Up: Custom Sprint',
    headlineDe: 'Power Up: Custom Sprint',
    problemEn: "Your bottleneck doesn't fit a standard track. You need a bespoke 30-day sprint.",
    problemDe: 'Dein Engpass passt nicht auf einen Standard-Track. Du brauchst einen maßgeschneiderten 30-Tage-Sprint.',
    solutionEn: 'We design a custom sprint around your unique constraint. 30 days, 3 guaranteed outcomes (2 of 3 or 50% refund).',
    solutionDe: 'Wir designen einen maßgeschneiderten Sprint um deinen einzigartigen Constraint. 30 Tage, 3 garantierte Ergebnisse (2 von 3 oder 50% Rückerstattung).',
    deliverablesEn: [
      'Custom scope design',
      '3 guaranteed outcomes',
      'Transition + handoff playbook'
    ],
    deliverablesDe: [
      'Custom Scope Design',
      '3 garantierte Ergebnisse',
      'Transition + Handoff Playbook'
    ],
    impactEn: 'Constraint-specific results in 30 days. Guaranteed: 2 of 3 or 50% refund.',
    impactDe: 'Constraint-spezifische Ergebnisse in 30 Tagen. Garantiert: 2 von 3 oder 50% Rückerstattung.',
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
    headlineEn: 'Boost: Efficient Hypergrowth',
    headlineDe: 'Boost: Effizientes Hypergrowth',
    problemEn: "You're growing fast, but burning cash. CAC is rising, LTV/CAC is below 3x, and Rule of 40 is below 20%. You need efficient hypergrowth.",
    problemDe: 'Du wächst schnell, aber verbrennst Cash. CAC steigt, LTV/CAC ist unter 3x, und Rule of 40 ist unter 20%. Du brauchst effizientes Hypergrowth.',
    solutionEn: 'We build a scalable GTM engine in 8-10 weeks: reduce CAC, increase LTV/CAC, improve Rule of 40. You get a complete growth architecture.',
    solutionDe: 'Wir bauen eine skalierbare GTM-Engine in 8-10 Wochen: reduzieren CAC, erhöhen LTV/CAC, verbessern Rule of 40. Du erhältst eine komplette Growth-Architektur.',
    deliverablesEn: [
      'CAC reduction: -30-40%',
      'LTV/CAC: 4-6x',
      'Rule of 40: +15-25pp'
    ],
    deliverablesDe: [
      'CAC-Reduktion: -30-40%',
      'LTV/CAC: 4-6x',
      'Rule of 40: +15-25pp'
    ],
    impactEn: 'Reduce CAC by 30-40%, increase LTV/CAC to 4-6x, improve Rule of 40 by 15-25pp in 8-10 weeks. Build scalable GTM engine.',
    impactDe: 'Reduziere CAC um 30-40%, erhöhe LTV/CAC auf 4-6x, verbessere Rule of 40 um 15-25pp in 8-10 Wochen. Baue skalierbare GTM-Engine.',
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
    headlineEn: 'Boost: Growth Engine',
    headlineDe: 'Boost: Growth Engine',
    problemEn: "You hit a plateau. Growth is stalling, and you need sustained momentum—not a one-off fix.",
    problemDe: 'Du hast ein Plateau erreicht. Wachstum stagniert, und du brauchst nachhaltiges Momentum—keinen einmaligen Fix.',
    solutionEn: 'We build internal growth capability in 8-10 weeks: growth team coaching, experimentation system, playbook institutionalization.',
    solutionDe: 'Wir bauen interne Growth-Capability in 8-10 Wochen auf: Growth Team Coaching, Experimentier-System, Playbook-Institutionalisierung.',
    deliverablesEn: [
      'Growth rate: +40-60%',
      'Experiment velocity: 3x',
      'Growth playbook institutionalized'
    ],
    deliverablesDe: [
      'Wachstumsrate: +40-60%',
      'Experiment-Velocity: 3x',
      'Growth Playbook institutionalisiert'
    ],
    impactEn: 'Increase growth rate by 40-60%, triple experiment velocity, institutionalize growth playbook in 8-10 weeks.',
    impactDe: 'Steigere Wachstumsrate um 40-60%, verdreifache Experiment-Velocity, institutionalisiere Growth Playbook in 8-10 Wochen.',
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
    headlineEn: 'Boost: Pricing Architecture',
    headlineDe: 'Boost: Pricing-Architektur',
    problemEn: "Your pricing needs a complete overhaul—not just tuning. You're leaving 30-50% revenue on the table.",
    problemDe: 'Dein Pricing braucht eine komplette Überholung—nicht nur Tuning. Du lässt 30-50% Revenue auf dem Tisch liegen.',
    solutionEn: 'We redesign your entire pricing architecture in 8-10 weeks: value metric, packaging, tiers, discounting strategy.',
    solutionDe: 'Wir redesignen deine gesamte Pricing-Architektur in 8-10 Wochen: Value Metric, Packaging, Tiers, Rabattstrategie.',
    deliverablesEn: [
      'Revenue increase: +20-35%',
      'ARPU increase: +25-45%',
      'Pricing architecture deployed'
    ],
    deliverablesDe: [
      'Revenue-Steigerung: +20-35%',
      'ARPU-Steigerung: +25-45%',
      'Pricing-Architektur deployed'
    ],
    impactEn: 'Increase revenue by 20-35%, ARPU by 25-45% in 8-10 weeks. Deploy complete pricing architecture.',
    impactDe: 'Steigere Revenue um 20-35%, ARPU um 25-45% in 8-10 Wochen. Deploye komplette Pricing-Architektur.',
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
    headlineEn: 'Boost: NRR Machine',
    headlineDe: 'Boost: NRR-Maschine',
    problemEn: "Customer success is a cost center. You need it to become a revenue-generating growth engine.",
    problemDe: 'Customer Success ist ein Cost Center. Du brauchst es als umsatzgenerierende Growth Engine.',
    solutionEn: 'We transform CS into a revenue function in 8-10 weeks: CS-to-revenue playbook, expansion team training, tech stack optimization.',
    solutionDe: 'Wir transformieren CS in eine Revenue-Funktion in 8-10 Wochen: CS-to-Revenue Playbook, Expansion Team Training, Tech Stack Optimierung.',
    deliverablesEn: [
      'NRR: 120%+',
      'Churn reduction: -40-60%',
      'Expansion revenue: +50-80%'
    ],
    deliverablesDe: [
      'NRR: 120%+',
      'Churn-Reduktion: -40-60%',
      'Expansion Revenue: +50-80%'
    ],
    impactEn: 'Achieve NRR of 120%+, reduce churn by 40-60%, increase expansion revenue by 50-80% in 8-10 weeks.',
    impactDe: 'Erreiche NRR von 120%+, reduziere Churn um 40-60%, steigere Expansion Revenue um 50-80% in 8-10 Wochen.',
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
    headlineEn: 'Boost: Scaling OS',
    headlineDe: 'Boost: Scaling OS',
    problemEn: "You're about to 3x headcount. You need the operating system for scale—before chaos takes over.",
    problemDe: 'Du wirst gleich 3x Headcount wachsen. Du brauchst das Operating System für Scale—bevor Chaos übernimmt.',
    solutionEn: 'We install your scaling OS in 8-10 weeks: org design 2.0, hiring playbook, operating cadence system.',
    solutionDe: 'Wir installieren dein Scaling OS in 8-10 Wochen: Org Design 2.0, Hiring Playbook, Operating Cadence System.',
    deliverablesEn: [
      'ARR/Employee: +40-60%',
      'Hiring velocity: 2x',
      'Operating cadence installed'
    ],
    deliverablesDe: [
      'ARR/Employee: +40-60%',
      'Hiring-Velocity: 2x',
      'Operating Cadence installiert'
    ],
    impactEn: 'Increase ARR/Employee by 40-60%, double hiring velocity, install operating cadence in 8-10 weeks.',
    impactDe: 'Steigere ARR/Employee um 40-60%, verdopple Hiring-Velocity, installiere Operating Cadence in 8-10 Wochen.',
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
    headlineEn: 'Boost: AI Foundation',
    headlineDe: 'Boost: AI-Foundation',
    problemEn: "You want AI woven into your product and ops—not bolted on. You need a systematic approach.",
    problemDe: 'Du willst AI in dein Produkt und Ops eingewoben—nicht angeschraubt. Du brauchst einen systematischen Ansatz.',
    solutionEn: 'We build AI capability across multiple use-cases in 8-10 weeks: AI roadmap, multi-use-case deployment, team upskilling.',
    solutionDe: 'Wir bauen AI-Capability über mehrere Use-Cases in 8-10 Wochen auf: AI Roadmap, Multi-Use-Case Deployment, Team Upskilling.',
    deliverablesEn: [
      'AI use-cases deployed: 3-5',
      'θ_index improvement: +0.2-0.3',
      'AI roadmap (12 months)'
    ],
    deliverablesDe: [
      'AI Use-Cases deployed: 3-5',
      'θ_index Verbesserung: +0.2-0.3',
      'AI Roadmap (12 Monate)'
    ],
    impactEn: 'Deploy 3-5 AI use-cases, improve θ_index by 0.2-0.3, create 12-month AI roadmap in 8-10 weeks.',
    impactDe: 'Deploye 3-5 AI Use-Cases, verbessere θ_index um 0.2-0.3, erstelle 12-Monats AI Roadmap in 8-10 Wochen.',
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
    headlineEn: 'Boost: Board Excellence',
    headlineDe: 'Boost: Board Excellence',
    problemEn: "You need to fundamentally reset board dynamics. Your board should accelerate—not decelerate.",
    problemDe: 'Du musst Board-Dynamiken fundamental resetten. Dein Board sollte beschleunigen—nicht bremsen.',
    solutionEn: 'We rebuild your board relationship in 8-10 weeks: governance framework, board relationship reset, ongoing prep coaching.',
    solutionDe: 'Wir bauen deine Board-Beziehung in 8-10 Wochen neu auf: Governance Framework, Board Relationship Reset, Ongoing Prep Coaching.',
    deliverablesEn: [
      'Board NPS: +40-60',
      'Governance framework deployed',
      'Board prep coaching (3 sessions)'
    ],
    deliverablesDe: [
      'Board NPS: +40-60',
      'Governance Framework deployed',
      'Board Prep Coaching (3 Sessions)'
    ],
    impactEn: 'Improve Board NPS by 40-60, deploy governance framework, complete 3 board prep coaching sessions in 8-10 weeks.',
    impactDe: 'Verbessere Board NPS um 40-60, deploye Governance Framework, absolviere 3 Board Prep Coaching Sessions in 8-10 Wochen.',
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
    headlineEn: 'Boost: Portfolio Lift',
    headlineDe: 'Boost: Portfolio Lift',
    problemEn: "You need to move multiple portcos simultaneously. No time for sequential interventions.",
    problemDe: 'Du musst mehrere Portcos gleichzeitig bewegen. Keine Zeit für sequenzielle Interventionen.',
    solutionEn: 'We lift 3-5 portcos in parallel in 8-10 weeks: multi-portco diagnostics, parallel interventions, cross-portfolio playbook.',
    solutionDe: 'Wir heben 3-5 Portcos parallel in 8-10 Wochen: Multi-Portco Diagnostics, parallele Interventionen, Cross-Portfolio Playbook.',
    deliverablesEn: [
      'Portcos lifted: 3-5',
      'Avg. Rule of 40: +10-15pp',
      'Cross-portfolio playbook delivered'
    ],
    deliverablesDe: [
      'Portcos gehoben: 3-5',
      'Durchschn. Rule of 40: +10-15pp',
      'Cross-Portfolio Playbook geliefert'
    ],
    impactEn: 'Lift 3-5 portcos, improve avg. Rule of 40 by 10-15pp, deliver cross-portfolio playbook in 8-10 weeks.',
    impactDe: 'Hebe 3-5 Portcos, verbessere durchschn. Rule of 40 um 10-15pp, liefere Cross-Portfolio Playbook in 8-10 Wochen.',
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
    headlineEn: 'Boost: Custom Program',
    headlineDe: 'Boost: Custom Programm',
    problemEn: "Your transformation needs span multiple domains. You need a custom 8-10 week program.",
    problemDe: 'Deine Transformationsbedürfnisse spannen mehrere Domains. Du brauchst ein maßgeschneidertes 8-10 Wochen Programm.',
    solutionEn: 'We design a custom multi-domain program for 8-10 weeks: cross-functional execution, integrated outcomes.',
    solutionDe: 'Wir designen ein maßgeschneidertes Multi-Domain Programm für 8-10 Wochen: cross-funktionale Execution, integrierte Outcomes.',
    deliverablesEn: [
      'Custom program design',
      'Cross-functional execution',
      'Integrated outcomes delivered'
    ],
    deliverablesDe: [
      'Custom Program Design',
      'Cross-funktionale Execution',
      'Integrierte Outcomes geliefert'
    ],
    impactEn: 'Multi-domain transformation shaped to your reality in 8-10 weeks.',
    impactDe: 'Multi-Domain Transformation geformt nach deiner Realität in 8-10 Wochen.',
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
    challenges: ['cac-crisis', 'growth-stalled'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: Hypergrowth',
    headlineDe: 'Accelerate: Hypergrowth',
    problemEn: "You're growing fast, but burning cash. CAC is rising, LTV/CAC is below 3x, and Rule of 40 is below 20%. You need efficient hypergrowth—now.",
    problemDe: 'Du wächst schnell, aber verbrennst Cash. CAC steigt, LTV/CAC ist unter 3x, und Rule of 40 ist unter 20%. Du brauchst jetzt effizientes Hypergrowth.',
    solutionEn: 'We build complete growth architecture in 12-16 weeks: reduce CAC, increase LTV/CAC, improve Rule of 40. You get a complete growth + scaling system.',
    solutionDe: 'Wir bauen eine komplette Growth-Architektur in 12-16 Wochen: reduzieren CAC, erhöhen LTV/CAC, verbessern Rule of 40. Du erhältst ein komplettes Growth + Scaling System.',
    deliverablesEn: [
      'CAC: -40-60%',
      'LTV/CAC: 6-8x',
      'Rule of 40: +30-50pp'
    ],
    deliverablesDe: [
      'CAC: -40-60%',
      'LTV/CAC: 6-8x',
      'Rule of 40: +30-50pp'
    ],
    impactEn: 'Reduce CAC by 40-60%, increase LTV/CAC to 6-8x, improve Rule of 40 by 30-50pp in 12-16 weeks. Build complete growth architecture.',
    impactDe: 'Reduziere CAC um 40-60%, erhöhe LTV/CAC auf 6-8x, verbessere Rule of 40 um 30-50pp in 12-16 Wochen. Baue komplette Growth-Architektur.',
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
    challenges: ['growth-stalled', 'scaling-chaos'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: Sustainable Growth',
    headlineDe: 'Accelerate: Nachhaltiges Wachstum',
    problemEn: "You want growth that compounds—not growth that burns out. You need efficient, durable growth mechanics.",
    problemDe: 'Du willst Wachstum, das compoundiert—nicht Wachstum, das ausbrennt. Du brauchst effiziente, dauerhafte Growth-Mechaniken.',
    solutionEn: 'We build sustainable growth mechanics in 12-16 weeks: efficiency playbook, sustainable unit economics, team resilience.',
    solutionDe: 'Wir bauen nachhaltige Growth-Mechaniken in 12-16 Wochen: Effizienz-Playbook, nachhaltige Unit Economics, Team Resilience.',
    deliverablesEn: [
      'Rule of 40: 40%+',
      'Burn multiple: <1.5x',
      'Team resilience index: +30-50%'
    ],
    deliverablesDe: [
      'Rule of 40: 40%+',
      'Burn Multiple: <1.5x',
      'Team Resilience Index: +30-50%'
    ],
    impactEn: 'Achieve Rule of 40 of 40%+, burn multiple below 1.5x, improve team resilience by 30-50% in 12-16 weeks.',
    impactDe: 'Erreiche Rule of 40 von 40%+, Burn Multiple unter 1.5x, verbessere Team Resilience um 30-50% in 12-16 Wochen.',
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
    challenges: ['ai-transformation', 'scaling-chaos'],
    price: '€153K',
    priceTag: 'paid',
    headlineEn: 'Accelerate: AI-Native',
    headlineDe: 'Accelerate: AI-Native',
    problemEn: "You want to become an AI-first company—not just add AI features. You need AI core to product, ops, and culture.",
    problemDe: 'Du willst eine AI-First Company werden—nicht nur AI-Features hinzufügen. Du brauchst AI als Kern von Produkt, Ops und Kultur.',
    solutionEn: 'We make you AI-native in 12-16 weeks: AI-native product strategy, org-wide AI adoption, AI talent & culture.',
    solutionDe: 'Wir machen dich AI-native in 12-16 Wochen: AI-Native Produktstrategie, org-weite AI Adoption, AI Talent & Kultur.',
    deliverablesEn: [
      'θ_index: 0.7+',
      'AI use-cases deployed: 8-12',
      'AI culture embedded'
    ],
    deliverablesDe: [
      'θ_index: 0.7+',
      'AI Use-Cases deployed: 8-12',
      'AI-Kultur embedded'
    ],
    impactEn: 'Achieve θ_index of 0.7+, deploy 8-12 AI use-cases, embed AI culture in 12-16 weeks. Become the AI leader in your category.',
    impactDe: 'Erreiche θ_index von 0.7+, deploye 8-12 AI Use-Cases, bette AI-Kultur ein in 12-16 Wochen. Werde der AI-Leader in deiner Kategorie.',
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
    problemEn: "You have 12-18 months to an exit and need to maximize valuation. Every valuation driver must be optimized.",
    problemDe: 'Du hast 12-18 Monate bis zum Exit und musst die Bewertung maximieren. Jeder Bewertungstreiber muss optimiert werden.',
    solutionEn: 'We optimize every valuation driver in 12-16 weeks: valuation driver audit, exit narrative build, ops cleanup for DD.',
    solutionDe: 'Wir optimieren jeden Bewertungstreiber in 12-16 Wochen: Bewertungstreiber Audit, Exit Narrative Build, Ops Cleanup für DD.',
    deliverablesEn: [
      'Valuation uplift: +20-40%',
      'Exit narrative deployed',
      'DD-ready operations'
    ],
    deliverablesDe: [
      'Bewertungs-Uplift: +20-40%',
      'Exit Narrative deployed',
      'DD-Ready Operations'
    ],
    impactEn: 'Increase valuation by 20-40%, deploy exit narrative, achieve DD-ready operations in 12-16 weeks. Exit at top-quartile multiples.',
    impactDe: 'Steigere Bewertung um 20-40%, deploye Exit Narrative, erreiche DD-Ready Operations in 12-16 Wochen. Exit zu Top-Quartil Multiples.',
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
    headlineEn: 'Accelerate: Portfolio Excellence',
    headlineDe: 'Accelerate: Portfolio Excellence',
    problemEn: "You want a systematic approach to lifting your entire portfolio. You need portfolio-wide growth infrastructure.",
    problemDe: 'Du willst einen systematischen Ansatz, um dein gesamtes Portfolio zu heben. Du brauchst portfolio-weite Growth-Infrastruktur.',
    solutionEn: 'We install portfolio-wide growth infrastructure in 12-16 weeks: portfolio operating model, shared services design, LP-ready reporting.',
    solutionDe: 'Wir installieren portfolio-weite Growth-Infrastruktur in 12-16 Wochen: Portfolio Operating Model, Shared Services Design, LP-Ready Reporting.',
    deliverablesEn: [
      'Portfolio TVPI: +0.3-0.5x',
      'Shared services deployed',
      'LP-ready reporting installed'
    ],
    deliverablesDe: [
      'Portfolio TVPI: +0.3-0.5x',
      'Shared Services deployed',
      'LP-Ready Reporting installiert'
    ],
    impactEn: 'Improve portfolio TVPI by 0.3-0.5x, deploy shared services, install LP-ready reporting in 12-16 weeks.',
    impactDe: 'Verbessere Portfolio TVPI um 0.3-0.5x, deploye Shared Services, installiere LP-Ready Reporting in 12-16 Wochen.',
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
    solutionType: 'keynote',
    challenges: 'universal',
    price: '€2.5K-€5K',
    priceTag: 'paid',
    headlineEn: 'Workshop',
    headlineDe: 'Workshop',
    problemEn: "Your team needs tactical training on a specific challenge—GTM, pricing, scaling, AI—but doesn't have the frameworks or playbooks to execute.",
    problemDe: 'Dein Team braucht taktisches Training zu einer spezifischen Herausforderung—GTM, Pricing, Scaling, AI—hat aber nicht die Frameworks oder Playbooks zur Umsetzung.',
    solutionEn: 'We deliver a 1-day tactical workshop (6-8 hours) for 10-30 participants. Choose from 9 workshop types: GTM Strategy, Growth Strategy, Pricing Strategy, Customer Success, Operations Excellence, Scaling, AI Transformation, Board Governance, Portfolio Excellence.',
    solutionDe: 'Wir liefern einen 1-tägigen taktischen Workshop (6-8 Stunden) für 10-30 Teilnehmer. Wähle aus 9 Workshop-Typen: GTM Strategy, Growth Strategy, Pricing Strategy, Customer Success, Operations Excellence, Scaling, AI Transformation, Board Governance, Portfolio Excellence.',
    deliverablesEn: [
      '1-day workshop (6-8 hours)',
      'Workshop playbook (30-40 pages)',
      'Recording (90 days access)'
    ],
    deliverablesDe: [
      '1-Tages-Workshop (6-8 Stunden)',
      'Workshop Playbook (30-40 Seiten)',
      'Aufzeichnung (90 Tage Zugang)'
    ],
    impactEn: 'Train 10-30 participants in 1 day. Get tactical frameworks and playbooks to execute immediately.',
    impactDe: 'Trainiere 10-30 Teilnehmer an 1 Tag. Erhalte taktische Frameworks und Playbooks zur sofortigen Umsetzung.',
    primaryCtaEn: 'Book Workshop',
    primaryCtaDe: 'Workshop buchen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/workshop',
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
    price: '€8K–€40K',
    priceTag: 'custom',
    headlineEn: 'Strategic Advisory',
    headlineDe: 'Strategic Advisory',
    problemEn: "You have a unique challenge that doesn't fit a standard offering. You need custom strategy work—designed for your specific situation.",
    problemDe: 'Du hast eine einzigartige Herausforderung, die nicht in ein Standardangebot passt. Du brauchst maßgeschneiderte Strategiearbeit—designed für deine spezifische Situation.',
    solutionEn: 'We design custom strategy in 4-24 weeks. Choose intensity: Catalyst (4-6 weeks, €8K-€15K), Accelerator (6-10 weeks, €15K-€25K), or Transformer (3-6 months, €25K-€40K).',
    solutionDe: 'Wir designen maßgeschneiderte Strategie in 4-24 Wochen. Wähle Intensität: Catalyst (4-6 Wochen, €8K-€15K), Accelerator (6-10 Wochen, €15K-€25K), oder Transformer (3-6 Monate, €25K-€40K).',
    deliverablesEn: [
      'Custom strategy design',
      'Implementation roadmap',
      'Team enablement & training'
    ],
    deliverablesDe: [
      'Custom Strategy Design',
      'Implementierungs-Roadmap',
      'Team Enablement & Training'
    ],
    impactEn: 'Get custom strategy tailored to your unique challenge. Predict 5-10x ROI in 90-180 days.',
    impactDe: 'Erhalte maßgeschneiderte Strategie, zugeschnitten auf deine einzigartige Herausforderung. Prognostiziere 5-10x ROI in 90-180 Tagen.',
    primaryCtaEn: 'Request Advisory',
    primaryCtaDe: 'Advisory anfragen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/advisory',
    secondaryCtaEn: 'See examples',
    secondaryCtaDe: 'Beispiele ansehen',
    secondaryCtaUrl: '/cases/advisory'
  },


  // ============================================
  // KEYNOTE (1 Kachel)
  // ============================================
  {
    id: 37,
    slug: 'keynote',
    solutionType: 'keynote',
    challenges: 'universal',
    price: '€5K–€15K',
    priceTag: 'paid',
    headlineEn: 'Keynote',
    headlineDe: 'Keynote',
    problemEn: "You need to inspire your team or event with a high-impact keynote—but generic motivational talks don't cut it. You need tactical insights and frameworks.",
    problemDe: 'Du musst dein Team oder Event mit einer High-Impact Keynote inspirieren—aber generische Motivationsreden reichen nicht. Du brauchst taktische Insights und Frameworks.',
    solutionEn: 'We deliver a 60-90 min keynote + Q&A. Choose topic: AI-Native Scaling, Growth Momentum, Pricing Optimization, Retention Excellence, Operational Excellence, Board Excellence, Portfolio Excellence.',
    solutionDe: 'Wir liefern eine 60-90 min Keynote + Q&A. Wähle Thema: AI-Native Scaling, Growth Momentum, Pricing Optimization, Retention Excellence, Operational Excellence, Board Excellence, Portfolio Excellence.',
    deliverablesEn: [
      'Keynote (60-90 min)',
      'Q&A session (30 min)',
      'Recording (optional)'
    ],
    deliverablesDe: [
      'Keynote (60-90 min)',
      'Q&A Session (30 min)',
      'Aufzeichnung (optional)'
    ],
    impactEn: 'Inspire 50-500 participants with tactical insights and frameworks. Get 20-30% higher team alignment.',
    impactDe: 'Inspiriere 50-500 Teilnehmer mit taktischen Insights und Frameworks. Erreiche 20-30% höhere Team-Ausrichtung.',
    primaryCtaEn: 'Book Keynote',
    primaryCtaDe: 'Keynote buchen',
    primaryCtaAction: 'book-call',
    primaryCtaUrl: 'https://calendly.com/michel-scalingx/keynote',
    secondaryCtaEn: 'See topics',
    secondaryCtaDe: 'Themen ansehen',
    secondaryCtaUrl: '/expertise'
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
