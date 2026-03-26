import { Search, Rocket, Settings, Bot, ArrowRightLeft, Wrench, LucideIcon } from 'lucide-react';

export type CategoryId = 'insights-and-levers' | 'growth-engines' | 'scaling-systems' | 'ai-orchestration' | 'translating-strategy' | 'tools';

export interface SolutionCategory {
  id: CategoryId;
  labelEn: string;
  labelDe: string;
  headlineEn: string;
  headlineDe: string;
  forWhomEn: string;
  forWhomDe: string;
  icon: LucideIcon;
  solutionCount: number;
  route: string;
  // Hero copy for category page
  hero: {
    overlineEn: string;
    overlineDe: string;
    h1En: string;
    h1De: string;
    sublineEn: string;
    sublineDe: string;
    stats: { value: string; labelEn: string; labelDe: string }[];
  };
  // "Für wen" section
  situations: {
    titleEn: string;
    titleDe: string;
  }[];
  // Mechanism section
  mechanism: {
    titleEn: string;
    titleDe: string;
    bodyEn: string;
    bodyDe: string;
  };
  // Cases
  cases: {
    tagEn: string;
    tagDe: string;
    outcomeEn: string;
    outcomeDe: string;
    caseUrl?: string;
  }[];
}

// Mapping: slug → category (primary + secondary)
export const categoryMapping: Record<string, { category: CategoryId; categorySecondary?: CategoryId }> = {
  // INSIGHTS & LEVERS
  'inflection-call': { category: 'insights-and-levers' },
  'expert-session': { category: 'insights-and-levers' },
  'gtm-effectiveness-review': { category: 'insights-and-levers' },
  'pricing-packaging-review': { category: 'insights-and-levers' },
  'scaling-readiness-assessment': { category: 'insights-and-levers' },
  'ai-maturity-assessment': { category: 'insights-and-levers', categorySecondary: 'ai-orchestration' },
  'investor-readiness-pitch-deck-check': { category: 'insights-and-levers' },
  'vc-dd-simulation': { category: 'insights-and-levers' },
  'portfolio-assessment': { category: 'insights-and-levers' },
  'custom-analysis-report': { category: 'insights-and-levers' },
  'fix-growth-scale-faster': { category: 'insights-and-levers' },

  // GROWTH ENGINES
  'power-up-cac': { category: 'growth-engines' },
  'power-up-growth': { category: 'growth-engines' },
  'power-up-pricing': { category: 'growth-engines' },
  'power-up-nrr': { category: 'growth-engines' },
  'power-up-custom-sprint': { category: 'growth-engines' },
  'boost-efficient-hypergrowth': { category: 'growth-engines' },
  'boost-growth-engine': { category: 'growth-engines' },
  'boost-pricing-dominance': { category: 'growth-engines' },
  'boost-nrr-machine': { category: 'growth-engines' },
  'boost-custom-program': { category: 'growth-engines' },
  'accelerate-hypergrowth': { category: 'growth-engines', categorySecondary: 'translating-strategy' },
  'accelerate-sustainable-growth': { category: 'growth-engines' },

  // SCALING SYSTEMS
  'power-up-scaling-velocity': { category: 'scaling-systems' },
  'power-up-board-readiness': { category: 'scaling-systems' },
  'boost-scaling-os': { category: 'scaling-systems' },
  'boost-board-excellence': { category: 'scaling-systems' },
  'accelerate-exit-readiness': { category: 'scaling-systems' },
  'workshop': { category: 'scaling-systems' },
  'strategic-advisory': { category: 'scaling-systems', categorySecondary: 'translating-strategy' },
  'keynote': { category: 'scaling-systems' },
  'revenue-architecture-system': { category: 'scaling-systems' },

  // AI ORCHESTRATION
  'power-up-ai-quick-wins': { category: 'ai-orchestration' },
  'boost-ai-maturity': { category: 'ai-orchestration' },
  'accelerate-ai-native-scaling': { category: 'ai-orchestration' },
  'roi-calculator': { category: 'ai-orchestration', categorySecondary: 'tools' },

  // TRANSLATING STRATEGY
  'power-up-portfolio-performance': { category: 'translating-strategy' },
  'boost-portfolio-value': { category: 'translating-strategy' },
  'accelerate-portfolio-transformation': { category: 'translating-strategy' },

  // TOOLS
  'lasr-io': { category: 'tools', categorySecondary: 'translating-strategy' },
  'scaling-calculator': { category: 'tools' },
  'keypitchs': { category: 'tools', categorySecondary: 'translating-strategy' },
  'dealdeskr-io': { category: 'tools', categorySecondary: 'translating-strategy' },
  'maxxeed': { category: 'tools' },
  'funding-navigator': { category: 'tools' },
  'gtm-stack-map': { category: 'tools' },
};

export const solutionCategories: SolutionCategory[] = [
  {
    id: 'insights-and-levers',
    labelEn: 'Insights & Levers',
    labelDe: 'Insights & Levers',
    headlineEn: 'You don\'t know where the lever is.',
    headlineDe: 'Du weißt nicht wo der Hebel ist.',
    forWhomEn: 'Diagnosis before action',
    forWhomDe: 'Diagnose vor Aktion',
    icon: Search,
    solutionCount: 11,
    route: '/solutions/insights-and-levers',
    hero: {
      overlineEn: 'SOLUTIONS · INSIGHTS & LEVERS',
      overlineDe: 'SOLUTIONS · INSIGHTS & LEVERS',
      h1En: 'You know something\'s off.\nBut you don\'t know where the lever is.',
      h1De: 'Du weißt dass etwas nicht stimmt.\nAber du weißt nicht wo der Hebel ist.',
      sublineEn: 'We find it. In 3–5 days. With substance.',
      sublineDe: 'Wir finden ihn. In 3–5 Tagen. Mit Substanz.',
      stats: [
        { value: '11', labelEn: 'Solutions', labelDe: 'Solutions' },
        { value: '3–5', labelEn: 'Days', labelDe: 'Tage' },
        { value: 'Free+', labelEn: 'Starting at', labelDe: 'Ab' },
      ],
    },
    situations: [
      { titleEn: 'The impact isn\'t coming — but you don\'t know why.', titleDe: 'Der Impact kommt nicht — aber du weißt nicht warum.' },
      { titleEn: 'Board meeting in 4 weeks — you need clarity now.', titleDe: 'Board-Meeting in 4 Wochen — du brauchst Klarheit jetzt.' },
      { titleEn: 'You want to understand before you act.', titleDe: 'Du willst verstehen bevor du handelst.' },
    ],
    mechanism: {
      titleEn: 'M1 — Hypothesis Machine',
      titleDe: 'M1 — Hypothesen-Maschine',
      bodyEn: 'We see patterns others don\'t. Through market understanding, methodology and AI orchestration, we generate hypotheses that others don\'t have. That\'s the first lever.',
      bodyDe: 'Wir sehen Muster die andere nicht sehen. Durch Marktverständnis, Methodik und AI-Orchestration generieren wir Hypothesen die andere nicht haben. Das ist der erste Hebel.',
    },
    cases: [
      { tagEn: 'Series B · B2B SaaS · DACH', tagDe: 'Series B · B2B SaaS · DACH', outcomeEn: 'GTM bottleneck identified in 3 days → CAC -40% in 90 days', outcomeDe: 'GTM-Engpass in 3 Tagen identifiziert → CAC -40% in 90 Tagen', caseUrl: '/cases/cac-crisis-turnaround' },
      { tagEn: 'Series A · €8M ARR', tagDe: 'Series A · €8M ARR', outcomeEn: 'Pricing lever found → ARPU +35% in 60 days', outcomeDe: 'Pricing-Hebel gefunden → ARPU +35% in 60 Tagen', caseUrl: '/cases/pricing-redesigned-scalable-growth' },
    ],
  },
  {
    id: 'growth-engines',
    labelEn: 'Growth Engines',
    labelDe: 'Growth Engines',
    headlineEn: 'Growth isn\'t coming — or not fast enough.',
    headlineDe: 'Wachstum kommt nicht — oder nicht schnell genug.',
    forWhomEn: 'CAC, NRR, Pricing, GTM',
    forWhomDe: 'CAC, NRR, Pricing, GTM',
    icon: Rocket,
    solutionCount: 12,
    route: '/solutions/growth-engines',
    hero: {
      overlineEn: 'SOLUTIONS · GROWTH ENGINES',
      overlineDe: 'SOLUTIONS · GROWTH ENGINES',
      h1En: 'Growth isn\'t coming.\nOr not fast enough.',
      h1De: 'Wachstum kommt nicht.\nOder nicht schnell genug.',
      sublineEn: 'CAC too high. NRR too low. Pricing not optimal. Here are the levers — and how we activate them.',
      sublineDe: 'CAC zu hoch. NRR zu niedrig. Pricing nicht optimal. Hier sind die Hebel — und wie wir sie aktivieren.',
      stats: [
        { value: '12', labelEn: 'Solutions', labelDe: 'Solutions' },
        { value: '30–90', labelEn: 'Days', labelDe: 'Tage' },
        { value: '80x', labelEn: 'Max ROI', labelDe: 'Max ROI' },
      ],
    },
    situations: [
      { titleEn: 'CAC has been rising for 3 quarters.', titleDe: 'CAC steigt seit 3 Quartalen.' },
      { titleEn: 'NRR below 100% — churn is eating growth.', titleDe: 'NRR unter 100% — Churn frisst Wachstum.' },
      { titleEn: 'Pricing conversations — you lose too often.', titleDe: 'Pricing-Gespräche verlierst du zu oft.' },
    ],
    mechanism: {
      titleEn: 'M2 — Translation Competence',
      titleDe: 'M2 — Übersetzungskompetenz',
      bodyEn: 'Translating strategy into operational reality — completely, without compromise. Not as a concept. As a working system that carries.',
      bodyDe: 'Strategie in operative Realität übersetzen — vollständig, ohne Kompromiss. Nicht als Konzept. Als funktionierendes System das trägt.',
    },
    cases: [
      { tagEn: 'Series B · B2B SaaS · DACH', tagDe: 'Series B · B2B SaaS · DACH', outcomeEn: 'CAC -40%, Win Rate +30% in 90 days', outcomeDe: 'CAC -40%, Win Rate +30% in 90 Tagen', caseUrl: '/cases/cac-crisis-turnaround' },
      { tagEn: 'Series A · €5M ARR', tagDe: 'Series A · €5M ARR', outcomeEn: 'NRR from 85% to 115% in 6 months', outcomeDe: 'NRR von 85% auf 115% in 6 Monaten', caseUrl: '/cases/nrr-machine-breakthrough' },
    ],
  },
  {
    id: 'scaling-systems',
    labelEn: 'Scaling Systems',
    labelDe: 'Scaling Systems',
    headlineEn: 'The company is growing — but the structure can\'t support it.',
    headlineDe: 'Das Unternehmen wächst — aber die Struktur trägt nicht.',
    forWhomEn: 'Ops, Board, OS, Exit',
    forWhomDe: 'Ops, Board, OS, Exit',
    icon: Settings,
    solutionCount: 9,
    route: '/solutions/scaling-systems',
    hero: {
      overlineEn: 'SOLUTIONS · SCALING SYSTEMS',
      overlineDe: 'SOLUTIONS · SCALING SYSTEMS',
      h1En: 'The company is growing.\nBut the structure can\'t support it.',
      h1De: 'Das Unternehmen wächst.\nAber die Struktur trägt nicht mehr.',
      sublineEn: 'Ops, Board, OS — all under pressure simultaneously. We build the systems that carry.',
      sublineDe: 'Ops, Board, OS — alles gleichzeitig unter Druck. Wir bauen die Systeme die tragen.',
      stats: [
        { value: '9', labelEn: 'Solutions', labelDe: 'Solutions' },
        { value: '30d–12Mo', labelEn: 'Timeline', labelDe: 'Zeitrahmen' },
        { value: 'A–B', labelEn: 'Series', labelDe: 'Series' },
      ],
    },
    situations: [
      { titleEn: 'Board pressure rising — investor-readiness missing.', titleDe: 'Board-Druck steigt — Investor-Readiness fehlt.' },
      { titleEn: 'Ops is breaking under growth.', titleDe: 'Ops bricht unter dem Wachstum zusammen.' },
      { titleEn: 'Exit in 12–18 months — you need structure now.', titleDe: 'Exit in 12–18 Monaten — du brauchst Struktur jetzt.' },
    ],
    mechanism: {
      titleEn: 'M3 — Functioning Synthesis',
      titleDe: 'M3 — Funktionierende Synthese',
      bodyEn: 'Concept × operational reality = it actually works. Not on the slide deck. In the company.',
      bodyDe: 'Konzept × operative Realität = es funktioniert wirklich. Nicht auf dem Slide Deck. Im Unternehmen.',
    },
    cases: [
      { tagEn: 'Series B · €15M ARR', tagDe: 'Series B · €15M ARR', outcomeEn: 'Exit-readiness achieved in 12 months', outcomeDe: 'Exit-Readiness in 12 Monaten erreicht', caseUrl: '/cases/exit-readiness-achieved' },
      { tagEn: 'Series A · B2B SaaS', tagDe: 'Series A · B2B SaaS', outcomeEn: 'Decision velocity +200% in 90 days', outcomeDe: 'Decision Velocity +200% in 90 Tagen', caseUrl: '/cases/strategic-transformation-market-leadership' },
    ],
  },
  {
    id: 'ai-orchestration',
    labelEn: 'AI Orchestration',
    labelDe: 'AI Orchestration',
    headlineEn: 'AI is in the stack. But no multiplier.',
    headlineDe: 'AI ist im Stack. Aber kein Multiplier.',
    forWhomEn: 'AI as structural advantage',
    forWhomDe: 'AI als struktureller Vorteil',
    icon: Bot,
    solutionCount: 5,
    route: '/solutions/ai-orchestration',
    hero: {
      overlineEn: 'SOLUTIONS · AI ORCHESTRATION',
      overlineDe: 'SOLUTIONS · AI ORCHESTRATION',
      h1En: 'AI is in the stack.\nBut no multiplier.',
      h1De: 'AI ist im Stack.\nAber kein Multiplier.',
      sublineEn: 'The difference between AI user and AI orchestrator is the difference between 1x and 10x.',
      sublineDe: 'Der Unterschied zwischen AI-User und AI-Orchestrator ist der Unterschied zwischen 1x und 10x.',
      stats: [
        { value: '5', labelEn: 'Solutions', labelDe: 'Solutions' },
        { value: '30–90', labelEn: 'Days', labelDe: 'Tage' },
        { value: 'M4', labelEn: 'Multiplier', labelDe: 'Verstärker' },
      ],
    },
    situations: [
      { titleEn: 'AI tools are deployed — but no structural advantage emerges.', titleDe: 'AI-Tools sind im Einsatz — aber kein struktureller Vorteil entsteht.' },
      { titleEn: 'AI maturity unclear — you don\'t know where you really stand.', titleDe: 'AI-Maturity unklar — du weißt nicht wo du wirklich stehst.' },
      { titleEn: 'AI should amplify M1–M3 — not replace.', titleDe: 'AI soll M1–M3 verstärken — nicht ersetzen.' },
    ],
    mechanism: {
      titleEn: 'M4 — AI Orchestration as Structural Advantage',
      titleDe: 'M4 — AI Orchestration als struktureller Vorteil',
      bodyEn: 'M4 is not another capability. It\'s the multiplier on M1–M3. Without M4: M1–M3 work. Fine. With M4: M1–M3 work. Faster, sharper, deeper.',
      bodyDe: 'M4 ist nicht eine weitere Fähigkeit. Es ist der Multiplier auf M1–M3. Ohne M4: M1–M3 funktionieren. Gut. Mit M4: M1–M3 funktionieren. Schneller, schärfer, tiefer.',
    },
    cases: [
      { tagEn: 'Series B · B2B SaaS', tagDe: 'Series B · B2B SaaS', outcomeEn: 'AI Maturity from Level 1 to Level 3 in 90 days', outcomeDe: 'AI Maturity von Level 1 auf Level 3 in 90 Tagen', caseUrl: '/cases/diagnostic-led-acquisition-scaled' },
    ],
  },
  {
    id: 'translating-strategy',
    labelEn: 'Translating Strategy',
    labelDe: 'Translating Strategy',
    headlineEn: 'The strategy is set. The execution isn\'t.',
    headlineDe: 'Die Strategie steht. Die Umsetzung nicht.',
    forWhomEn: 'Strategy → operational reality',
    forWhomDe: 'Strategie → operative Realität',
    icon: ArrowRightLeft,
    solutionCount: 7,
    route: '/solutions/translating-strategy',
    hero: {
      overlineEn: 'SOLUTIONS · TRANSLATING STRATEGY',
      overlineDe: 'SOLUTIONS · TRANSLATING STRATEGY',
      h1En: 'The strategy is set.\nThe execution isn\'t.',
      h1De: 'Die Strategie steht.\nDie Umsetzung nicht.',
      sublineEn: 'The gap between slide deck and operational reality is the actual problem. We close it.',
      sublineDe: 'Die Lücke zwischen Slide Deck und operativer Realität ist das eigentliche Problem. Wir schliessen sie.',
      stats: [
        { value: '7', labelEn: 'Solutions', labelDe: 'Solutions' },
        { value: '30d–12Mo', labelEn: 'Timeline', labelDe: 'Zeitrahmen' },
        { value: 'M2+M3', labelEn: 'Mechanisms', labelDe: 'Mechanismen' },
      ],
    },
    situations: [
      { titleEn: 'Strategy is clear — but nothing happens in the company.', titleDe: 'Strategie ist klar — aber im Unternehmen passiert nichts.' },
      { titleEn: 'Portfolio needs operational transformation — not just analysis.', titleDe: 'Portfolio braucht operative Transformation — nicht nur Analyse.' },
      { titleEn: 'Pitch deck, investor-readiness, exit — structure is missing.', titleDe: 'Pitch Deck, Investor-Readiness, Exit — Struktur fehlt.' },
    ],
    mechanism: {
      titleEn: 'M2 + M3 Combined',
      titleDe: 'M2 + M3 Kombiniert',
      bodyEn: 'Translation competence × Functioning synthesis. Strategy that isn\'t translated into operational reality is opinion. We translate. Completely. Without compromise.',
      bodyDe: 'Übersetzungskompetenz × Funktionierende Synthese. Strategie die nicht in operative Realität übersetzt wird, ist Meinung. Wir übersetzen. Vollständig. Ohne Kompromiss.',
    },
    cases: [
      { tagEn: 'Series B · €20M ARR', tagDe: 'Series B · €20M ARR', outcomeEn: 'Strategy → operational system in 90 days', outcomeDe: 'Strategie → operatives System in 90 Tagen', caseUrl: '/cases/strategic-transformation-market-leadership' },
    ],
  },
  {
    id: 'tools',
    labelEn: 'Tools',
    labelDe: 'Tools',
    headlineEn: 'Self-service. Start immediately.',
    headlineDe: 'Self-Service. Sofort starten.',
    forWhomEn: 'No call, no waiting',
    forWhomDe: 'Ohne Gespräch, ohne Wartezeit',
    icon: Wrench,
    solutionCount: 8,
    route: '/solutions/tools',
    hero: {
      overlineEn: 'SOLUTIONS · TOOLS',
      overlineDe: 'SOLUTIONS · TOOLS',
      h1En: 'Self-Service.\nStart immediately.',
      h1De: 'Self-Service.\nSofort starten.',
      sublineEn: 'No call needed. No waiting. Eight tools — for every step.',
      sublineDe: 'Kein Gespräch nötig. Keine Wartezeit. Acht Tools — für jeden Schritt.',
      stats: [
        { value: '8', labelEn: 'Tools', labelDe: 'Tools' },
        { value: 'Now', labelEn: 'Available', labelDe: 'Verfügbar' },
        { value: 'Free+', labelEn: 'Pricing', labelDe: 'Pricing' },
      ],
    },
    situations: [
      { titleEn: 'You want to analyze yourself before you book.', titleDe: 'Du willst selbst analysieren bevor du buchst.' },
      { titleEn: 'You need numbers before you book a call.', titleDe: 'Du brauchst Zahlen bevor du ein Gespräch buchst.' },
      { titleEn: 'You want to understand without investing directly.', titleDe: 'Du willst verstehen ohne direkt zu investieren.' },
    ],
    mechanism: {
      titleEn: 'Tools Are the Entry Point',
      titleDe: 'Tools sind der Einstieg',
      bodyEn: 'Not the replacement for expertise — but the first step. Those who start with a tool understand faster where the lever is.',
      bodyDe: 'Nicht der Ersatz für Expertise — sondern der erste Schritt. Wer mit einem Tool startet, versteht schneller wo der Hebel ist.',
    },
    cases: [
      { tagEn: 'Self-Service · B2B SaaS', tagDe: 'Self-Service · B2B SaaS', outcomeEn: '200+ teams use GTM Stack Map', outcomeDe: '200+ Teams nutzen GTM Stack Map' },
    ],
  },
];

// Featured solution copy (for the hub page featured section)
export const featuredSolutionCopy: Record<string, { badgeEn: string; badgeDe: string; copyEn: string; copyDe: string }> = {
  'inflection-call': {
    badgeEn: 'Insights & Clarity · Free · 30 Min',
    badgeDe: 'Insights & Clarity · Kostenlos · 30 Min',
    copyEn: 'We find the lever together. No pitch.',
    copyDe: 'Wir finden gemeinsam den Hebel. Kein Pitch.',
  },
  'strategic-advisory': {
    badgeEn: 'Advisory · Ongoing · On Request',
    badgeDe: 'Advisory · Ongoing · Auf Anfrage',
    copyEn: 'Strategic guidance at C-level. Directly with Michel.',
    copyDe: 'Strategische Begleitung auf C-Level. Direkt mit Michel.',
  },
  'revenue-architecture-system': {
    badgeEn: 'Transformation · Accelerate · 6 Weeks',
    badgeDe: 'Transformation · Accelerate · 6 Wochen',
    copyEn: 'The Signature Program. 23 Deliverables. Ready to deploy.',
    copyDe: 'Das Signature Program. 23 Deliverables. Einsatzbereit.',
  },
  'maxxeed': {
    badgeEn: 'Tool · Digital Buyer Experience · from €135/User/Mo',
    badgeDe: 'Tool · Digital Buyer Experience · ab €135/User/Mo',
    copyEn: 'Spark interest with high personalization. Initiation & lead generation.',
    copyDe: 'Hochindividuell Interesse wecken. Anbahnung & Lead-Generierung.',
  },
  'fix-growth-scale-faster': {
    badgeEn: 'Book · Insights & Clarity · from €8.90',
    badgeDe: 'Buch · Insights & Clarity · ab €8.90',
    copyEn: 'The playbook for funded startups. Immediately actionable.',
    copyDe: 'Das Playbook für finanzierte Startups. Sofort anwendbar.',
  },
  'power-up-ai-quick-wins': {
    badgeEn: 'Transformation · Power Up · 30 Days · €23.6K',
    badgeDe: 'Transformation · Power Up · 30 Tage · €23.6K',
    copyEn: 'AI as multiplier — activated in 30 days.',
    copyDe: 'AI als Multiplier — in 30 Tagen aktiviert.',
  },
  'power-up-growth': {
    badgeEn: 'Transformation · Power Up · 30 Days · €23.6K',
    badgeDe: 'Transformation · Power Up · 30 Tage · €23.6K',
    copyEn: 'Get growth moving again. Fucking fast.',
    copyDe: 'Wachstum wieder in Bewegung bringen. Fucking fast.',
  },
};

// Helper: get category for a slug
export const getCategoryForSlug = (slug: string): CategoryId | undefined => categoryMapping[slug]?.category;
export const getSecondaryCategoryForSlug = (slug: string): CategoryId | undefined => categoryMapping[slug]?.categorySecondary;
export const getCategoryById = (id: CategoryId): SolutionCategory | undefined => solutionCategories.find(c => c.id === id);
