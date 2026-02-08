import { ANSTPageData } from './types';

// Generate simulated chart data (22 AI-native companies)
const generateEvidenceChartData = () => {
  const data: Array<{ maturity: number; timeToRevenue: number; level: 1 | 2 | 3 }> = [];
  
  // Level 1 companies (6): Low AI maturity, high time to revenue
  for (let i = 0; i < 6; i++) {
    data.push({
      maturity: 15 + Math.random() * 20,
      timeToRevenue: 54 + Math.random() * 18,
      level: 1
    });
  }
  
  // Level 2 companies (8): Medium AI maturity, medium time
  for (let i = 0; i < 8; i++) {
    data.push({
      maturity: 40 + Math.random() * 25,
      timeToRevenue: 28 + Math.random() * 20,
      level: 2
    });
  }
  
  // Level 3 companies (8): High AI maturity, low time (AI-native)
  for (let i = 0; i < 8; i++) {
    data.push({
      maturity: 75 + Math.random() * 20,
      timeToRevenue: 8 + Math.random() * 10,
      level: 3
    });
  }
  
  return data;
};

export const anstPageData: ANSTPageData = {
  hero: {
    breadcrumb: {
      home: { en: 'Home', de: 'Start' },
      parent: { en: 'Expertise', de: 'Expertise' },
      current: { en: 'AI-Native Scaling Theory', de: 'AI-Native Scaling Theory' }
    },
    headline: {
      en: 'Why AI-Native Companies Scale 8.2x Faster',
      de: 'Warum AI-Native Unternehmen 8,2x schneller skalieren'
    },
    subheadline: {
      en: 'The science behind superlinear scaling—and how to achieve it',
      de: 'Die Wissenschaft hinter superlinearem Wachstum—und wie du es erreichst'
    },
    description: {
      en: `Traditional companies scale linearly. Add 10 people, grow revenue by 10%. Add 100 people, grow revenue by 100%. But coordination costs explode.

AI-native companies scale differently. They reach €100M ARR in 8-18 months with 50-100 people. Traditional companies need 60-84 months and 500-1,000 people.

We analyzed 22 AI-native companies to understand why. What we found: AI doesn't just improve productivity—it changes how companies scale.`,
      de: `Traditionelle Unternehmen skalieren linear. 10 Mitarbeiter mehr, 10% mehr Umsatz. 100 Mitarbeiter mehr, 100% mehr Umsatz. Aber Koordinationskosten explodieren.

AI-native Unternehmen skalieren anders. Sie erreichen €100M ARR in 8-18 Monaten mit 50-100 Mitarbeitern. Traditionelle Unternehmen brauchen 60-84 Monate und 500-1.000 Mitarbeiter.

Wir haben 22 AI-native Unternehmen analysiert, um zu verstehen warum. Was wir fanden: AI verbessert nicht nur Produktivität—sie verändert wie Unternehmen skalieren.`
    },
    stats: [
      { value: '22', label: { en: 'Companies Analyzed', de: 'Unternehmen analysiert' } },
      { value: '8.2x', label: { en: 'Faster Scaling', de: 'Schnellere Skalierung' } },
      { value: 'r=0.89', label: { en: 'Strong Correlation', de: 'Starke Korrelation' } },
      { value: '8-18', label: { en: 'Months to €100M', de: 'Monate bis €100M' } }
    ],
    methodology: {
      researchPeriod: { en: 'Fall/Winter 2025', de: 'Herbst/Winter 2025' },
      observationPeriod: { en: '2021-2025', de: '2021-2025' },
      methods: {
        en: 'Public data analysis, explorative C-level & Board interviews, job posting analysis',
        de: 'Öffentliche Datenanalyse, explorative C-Level- & Board-Interviews, Stellenanzeigen-Analyse'
      }
    },
    primaryCta: {
      text: { en: 'Book Strategy Call', de: 'Strategy Call buchen' },
      href: '/solutions/strategic-advisory'
    },
    secondaryCta: {
      text: { en: 'Download Research', de: 'Research herunterladen' },
      href: '#download'
    }
  },

  problem: {
    headline: {
      en: 'The Problem: Traditional Scaling is Linear',
      de: 'Das Problem: Traditionelles Skalieren ist linear'
    },
    content: {
      en: `Traditional companies scale linearly. More people = more output. But there's a hidden cost that kills growth.`,
      de: `Traditionelle Unternehmen skalieren linear. Mehr Leute = mehr Output. Aber es gibt versteckte Kosten, die Wachstum töten.`
    },
    pattern: [
      { en: 'Add 10 people → Grow revenue by 10%', de: '10 Mitarbeiter mehr → 10% mehr Umsatz' },
      { en: 'Add 100 people → Grow revenue by 100%', de: '100 Mitarbeiter mehr → 100% mehr Umsatz' },
      { en: 'Add 1,000 people → Grow revenue by 1,000%', de: '1.000 Mitarbeiter mehr → 1.000% mehr Umsatz' }
    ],
    problem: [
      { en: 'Coordination costs explode', de: 'Koordinationskosten explodieren' },
      { en: 'More people = more meetings, more emails', de: 'Mehr Leute = mehr Meetings, mehr E-Mails' },
      { en: 'Coordination costs grow quadratically', de: 'Koordinationskosten wachsen quadratisch' }
    ],
    result: {
      en: 'Traditional companies need 500-1,000 people to reach €100M ARR. Time to €100M: 60-84 months.',
      de: 'Traditionelle Unternehmen brauchen 500-1.000 Mitarbeiter für €100M ARR. Zeit bis €100M: 60-84 Monate.'
    },
    bottleneck: {
      en: 'Human coordination. Every new person adds communication overhead. Every new team adds coordination complexity.',
      de: 'Menschliche Koordination. Jede neue Person fügt Kommunikations-Overhead hinzu. Jedes neue Team fügt Koordinationskomplexität hinzu.'
    },
    chartTitle: {
      en: 'Traditional Scaling (Linear)',
      de: 'Traditionelles Skalieren (Linear)'
    },
    chartAnnotation: {
      en: '60-84 months to €100M ARR',
      de: '60-84 Monate bis €100M ARR'
    },
    callout: {
      title: {
        en: 'The Coordination Cost Problem',
        de: 'Das Koordinationskosten-Problem'
      },
      content: {
        en: 'Traditional companies hit a coordination ceiling. More people = more complexity. At 500-1,000 people, coordination costs consume most productivity gains. This is why traditional companies scale linearly.',
        de: 'Traditionelle Unternehmen treffen eine Koordinations-Decke. Mehr Leute = mehr Komplexität. Bei 500-1.000 Leuten verbrauchen Koordinationskosten die meisten Produktivitätsgewinne. Deshalb skalieren traditionelle Unternehmen linear.'
      }
    }
  },

  solution: {
    headline: {
      en: 'The Solution: 4 Capabilities × AI Multiplier',
      de: 'Die Lösung: 4 Capabilities × AI Multiplikator'
    },
    content: {
      en: 'AI-native companies scale differently. They don\'t just add people—they multiply capabilities with AI.',
      de: 'AI-native Unternehmen skalieren anders. Sie fügen nicht nur Leute hinzu—sie multiplizieren Fähigkeiten mit AI.'
    },
    pattern: [
      { en: 'Add 10 people → Grow revenue by 50-100%', de: '10 Mitarbeiter mehr → 50-100% mehr Umsatz' },
      { en: 'Add 100 people → Grow revenue by 500-1,000%', de: '100 Mitarbeiter mehr → 500-1.000% mehr Umsatz' },
      { en: 'Revenue grows faster than headcount', de: 'Umsatz wächst schneller als Mitarbeiterzahl' }
    ],
    secret: {
      en: 'AI handles coordination. Not humans. AI orchestrates workflows, automates decisions, reduces communication overhead.',
      de: 'AI übernimmt Koordination. Nicht Menschen. AI orchestriert Workflows, automatisiert Entscheidungen, reduziert Kommunikations-Overhead.'
    },
    result: {
      en: 'AI-native companies need 50-100 people to reach €100M ARR. Time to €100M: 8-18 months.',
      de: 'AI-native Unternehmen brauchen 50-100 Mitarbeiter für €100M ARR. Zeit bis €100M: 8-18 Monate.'
    },
    formula: {
      en: '4 Capabilities (Strategy, Setup, Execution, Operationalization) × AI Multiplier (θ_index) = Superlinear Scaling',
      de: '4 Capabilities (Strategy, Setup, Execution, Operationalization) × AI Multiplikator (θ_index) = Superlineares Skalieren'
    },
    capabilities: [
      {
        id: 'strategy',
        name: { en: 'Strategy', de: 'Strategy' },
        tagline: { en: 'C₁', de: 'C₁' },
        whatItIs: [
          { en: 'Market positioning', de: 'Marktpositionierung' },
          { en: 'Product-market fit', de: 'Product-Market Fit' },
          { en: 'Go-to-market strategy', de: 'Go-to-Market Strategie' }
        ],
        whyItMatters: {
          en: 'AI-native companies have AI-first strategies (not AI bolted on). Product IS AI, not AI-powered.',
          de: 'AI-native Unternehmen haben AI-first Strategien (nicht AI angehängt). Produkt IST AI, nicht AI-powered.'
        },
        exponent: 1.5,
        color: 'violet'
      },
      {
        id: 'setup',
        name: { en: 'Setup', de: 'Setup' },
        tagline: { en: 'C₂', de: 'C₂' },
        whatItIs: [
          { en: 'Org structure (flat, 2-3 levels)', de: 'Org-Struktur (flach, 2-3 Ebenen)' },
          { en: 'Systems & tools (AI-powered)', de: 'Systeme & Tools (AI-powered)' },
          { en: 'Processes (automated)', de: 'Prozesse (automatisiert)' }
        ],
        whyItMatters: {
          en: 'AI-native companies have flat structures (not hierarchical). AI handles coordination, not managers.',
          de: 'AI-native Unternehmen haben flache Strukturen (nicht hierarchisch). AI übernimmt Koordination, nicht Manager.'
        },
        color: 'blue'
      },
      {
        id: 'execution',
        name: { en: 'Execution', de: 'Execution' },
        tagline: { en: 'C₃', de: 'C₃' },
        whatItIs: [
          { en: 'Speed (days, not weeks)', de: 'Speed (Tage, nicht Wochen)' },
          { en: 'Quality (AI-powered QA)', de: 'Qualität (AI-powered QA)' },
          { en: 'Iteration (weekly releases)', de: 'Iteration (wöchentliche Releases)' }
        ],
        whyItMatters: {
          en: 'AI-native companies execute 10x faster (not just 2x). AI accelerates every step of execution.',
          de: 'AI-native Unternehmen führen 10x schneller aus (nicht nur 2x). AI beschleunigt jeden Schritt der Ausführung.'
        },
        exponent: 1.5,
        color: 'emerald'
      },
      {
        id: 'operationalization',
        name: { en: 'Operationalization', de: 'Operationalization' },
        tagline: { en: 'C₄', de: 'C₄' },
        whatItIs: [
          { en: 'Learning (AI-powered insights)', de: 'Learning (AI-powered Insights)' },
          { en: 'Optimization (continuous)', de: 'Optimierung (kontinuierlich)' },
          { en: 'Scaling (automated)', de: 'Skalieren (automatisiert)' }
        ],
        whyItMatters: {
          en: 'AI-native companies learn 100x faster (not just 2x). Data network effects compound over time.',
          de: 'AI-native Unternehmen lernen 100x schneller (nicht nur 2x). Daten-Netzwerkeffekte kumulieren über Zeit.'
        },
        color: 'amber'
      }
    ]
  },

  evidence: {
    headline: {
      en: 'The Evidence: 22 AI-Native Companies',
      de: 'Die Evidenz: 22 AI-Native Unternehmen'
    },
    subheadline: {
      en: 'What we found when we analyzed the fastest-scaling companies',
      de: 'Was wir fanden, als wir die schnellsten Unternehmen analysierten'
    },
    intro: {
      en: 'We analyzed 22 AI-native companies (2021-2025) to validate our theory. The results were striking.',
      de: 'Wir analysierten 22 AI-native Unternehmen (2021-2025), um unsere Theorie zu validieren. Die Ergebnisse waren bemerkenswert.'
    },
    findings: [
      {
        number: 1,
        title: { en: '8.2x Faster Scaling', de: '8,2x schnelleres Skalieren' },
        content: {
          en: 'AI-native companies reach €100M ARR in 8-18 months. Traditional companies need 60-84 months. That\'s 8.2x faster.',
          de: 'AI-native Unternehmen erreichen €100M ARR in 8-18 Monaten. Traditionelle brauchen 60-84 Monate. Das ist 8,2x schneller.'
        }
      },
      {
        number: 2,
        title: { en: '10x Fewer People', de: '10x weniger Mitarbeiter' },
        content: {
          en: 'AI-native companies reach €100M ARR with 50-100 people. Traditional companies need 500-1,000 people. That\'s 10x fewer.',
          de: 'AI-native Unternehmen erreichen €100M ARR mit 50-100 Leuten. Traditionelle brauchen 500-1.000 Leute. Das sind 10x weniger.'
        }
      },
      {
        number: 3,
        title: { en: 'Strong Correlation', de: 'Starke Korrelation' },
        content: {
          en: 'The correlation between AI maturity (θ_index) and scaling speed is strong (r=0.89). But correlation ≠ causation.',
          de: 'Die Korrelation zwischen AI Maturity (θ_index) und Skalierungsgeschwindigkeit ist stark (r=0,89). Aber Korrelation ≠ Kausalität.'
        }
      },
      {
        number: 4,
        title: { en: 'Superlinear Growth', de: 'Superlineares Wachstum' },
        content: {
          en: 'Revenue grows faster than headcount. This is superlinear scaling, not linear. The AI multiplier effect is real.',
          de: 'Umsatz wächst schneller als Mitarbeiterzahl. Das ist superlineares Skalieren, nicht linear. Der AI-Multiplikator-Effekt ist real.'
        }
      }
    ],
    caveat: {
      title: { en: 'Important Caveat', de: 'Wichtiger Hinweis' },
      content: {
        en: 'These are correlations, not causal relationships. We observe that AI-native companies scale faster. But we can\'t prove that AI maturity causes faster scaling. Other factors (market, timing, team) also matter.',
        de: 'Das sind Korrelationen, keine kausalen Zusammenhänge. Wir beobachten, dass AI-native Unternehmen schneller skalieren. Aber wir können nicht beweisen, dass AI Maturity schnelleres Skalieren verursacht. Andere Faktoren (Markt, Timing, Team) spielen auch eine Rolle.'
      }
    },
    chartTitle: {
      en: 'Time to €100M ARR vs. AI Maturity',
      de: 'Zeit bis €100M ARR vs. AI Maturity'
    },
    chartAnnotation: {
      en: 'AI-native: 8-18 months',
      de: 'AI-native: 8-18 Monate'
    },
    chartData: generateEvidenceChartData()
  },

  formula: {
    headline: {
      en: 'The Complete Scaling Formula',
      de: 'Die vollständige Scaling-Formel'
    },
    subheadline: {
      en: 'How market, enablers, capabilities, and AI work together',
      de: 'Wie Markt, Enablers, Capabilities und AI zusammenwirken'
    },
    formulaDisplay: 'S = M × E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ',
    components: [
      {
        symbol: 'M',
        name: { en: 'Market Factor', de: 'Marktfaktor' },
        description: { en: 'TAM × Growth Rate × Competition. Same company scales differently in different markets.', de: 'TAM × Wachstumsrate × Wettbewerb. Dasselbe Unternehmen skaliert unterschiedlich in verschiedenen Märkten.' }
      },
      {
        symbol: 'E',
        name: { en: 'Enablers', de: 'Enablers' },
        description: { en: 'Capital × Talent × Culture. Table stakes—without them, nothing works.', de: 'Kapital × Talent × Kultur. Voraussetzungen—ohne sie funktioniert nichts.' }
      },
      {
        symbol: 'C₁',
        name: { en: 'Strategy', de: 'Strategy' },
        description: { en: 'Market positioning, PMF, GTM. Exponent 1.5—small improvements have outsized impact.', de: 'Marktpositionierung, PMF, GTM. Exponent 1,5—kleine Verbesserungen haben überproportionale Wirkung.' }
      },
      {
        symbol: 'C₂',
        name: { en: 'Setup', de: 'Setup' },
        description: { en: 'Org structure, systems, processes. Foundation for scaling.', de: 'Org-Struktur, Systeme, Prozesse. Fundament für Skalierung.' }
      },
      {
        symbol: 'C₃',
        name: { en: 'Execution', de: 'Execution' },
        description: { en: 'Speed, quality, iteration. Exponent 1.5—execution excellence compounds.', de: 'Speed, Qualität, Iteration. Exponent 1,5—Exzellenz in Ausführung kumuliert.' }
      },
      {
        symbol: 'C₄',
        name: { en: 'Operationalization', de: 'Operationalization' },
        description: { en: 'Learning, optimization, automated scaling.', de: 'Learning, Optimierung, automatisiertes Skalieren.' }
      },
      {
        symbol: 'θ',
        name: { en: 'AI Multiplier', de: 'AI Multiplikator' },
        description: { en: 'AI Maturity (0-1). The differentiator—higher AI maturity = faster scaling.', de: 'AI Maturity (0-1). Der Differentiator—höhere AI Maturity = schnelleres Skalieren.' }
      }
    ],
    explanation: {
      en: 'This formula shows how market conditions (M), enablers (E), capabilities (C₁-C₄), and AI maturity (θ) work together. Strategy and Execution have exponents (1.5) because small improvements have outsized impact. The Scaling Stack focuses on C₁-C₄ because they\'re directly controllable in 8-12 weeks.',
      de: 'Diese Formel zeigt, wie Marktbedingungen (M), Enablers (E), Capabilities (C₁-C₄) und AI-Reife (θ) zusammenwirken. Strategy und Execution haben Exponenten (1,5), weil kleine Verbesserungen überproportionale Wirkung haben. Der Scaling Stack fokussiert auf C₁-C₄, weil sie in 8-12 Wochen direkt kontrollierbar sind.'
    },
    exponentInsight: {
      title: { en: 'Why Exponents Matter', de: 'Warum Exponenten wichtig sind' },
      content: {
        en: 'Strategy (C₁) and Execution (C₃) have exponents (1.5). This means small improvements have outsized impact.',
        de: 'Strategy (C₁) und Execution (C₃) haben Exponenten (1,5). Das bedeutet, kleine Verbesserungen haben überproportionale Wirkung.'
      },
      example: {
        en: 'Example: Improving Strategy from 0.6 → 0.8 (+33%) increases scaling velocity by +54% (not +33%).',
        de: 'Beispiel: Strategy von 0,6 → 0,8 verbessern (+33%) erhöht Skalierungsgeschwindigkeit um +54% (nicht +33%).'
      }
    },
    whyFocusOnCapabilities: {
      headline: { en: 'Why We Focus on Capabilities (C₁-C₄)', de: 'Warum wir uns auf Capabilities (C₁-C₄) fokussieren' },
      reasons: [
        {
          title: { en: 'Market (M) is constant within your segment', de: 'Markt (M) ist konstant in deinem Segment' },
          content: { en: 'Changing M requires 12-24 months. C₁-C₄ can be improved in 8-12 weeks.', de: 'M zu ändern erfordert 12-24 Monate. C₁-C₄ können in 8-12 Wochen verbessert werden.' }
        },
        {
          title: { en: 'Enablers (E) are an outcome of C₁-C₄', de: 'Enablers (E) sind ein Ergebnis von C₁-C₄' },
          content: { en: 'Better capabilities → better metrics → more capital and talent.', de: 'Bessere Capabilities → bessere Metriken → mehr Kapital und Talent.' }
        },
        {
          title: { en: 'Capabilities (C₁-C₄) are directly controllable', de: 'Capabilities (C₁-C₄) sind direkt kontrollierbar' },
          content: { en: 'Highest ROI (2-5x) in 8-12 weeks because of the bottleneck principle.', de: 'Höchster ROI (2-5x) in 8-12 Wochen durch das Engpass-Prinzip.' }
        }
      ],
      causalChain: {
        en: 'C₁-C₄ (Capabilities) → E (Enablers) → S (Scaling Success)',
        de: 'C₁-C₄ (Capabilities) → E (Enablers) → S (Skalierungserfolg)'
      }
    }
  },

  businessDimensions: {
    headline: {
      en: 'The 8 Business Dimensions: Where to Apply the Framework',
      de: 'Die 8 Business-Dimensionen: Wo du das Framework anwendest'
    },
    subheadline: {
      en: 'The 4 capabilities apply across 8 business dimensions. This creates 32 capability areas—and your #1 bottleneck is hiding in one of them.',
      de: 'Die 4 Capabilities gelten für 8 Business-Dimensionen. Das ergibt 32 Capability-Bereiche—und dein #1 Engpass versteckt sich in einem davon.'
    },
    intro: [
      { 
        en: 'You now understand the 4 capabilities (Strategy, Setup, Execution, Operationalization). But where do you apply them? The answer: Across 8 business dimensions.',
        de: 'Du verstehst jetzt die 4 Capabilities (Strategy, Setup, Execution, Operationalization). Aber wo wendest du sie an? Die Antwort: Über 8 Business-Dimensionen.'
      },
      {
        en: 'Think of it like a matrix: 4 Capabilities (HOW you scale) × 8 Dimensions (WHERE you apply them) = 32 Capability Areas. Your #1 bottleneck is hiding in one of these 32 areas.',
        de: 'Denk es dir wie eine Matrix: 4 Capabilities (WIE du skalierst) × 8 Dimensionen (WO du sie anwendest) = 32 Capability-Bereiche. Dein #1 Engpass versteckt sich in einem dieser 32 Bereiche.'
      },
      {
        en: 'The 8 dimensions are MECE (Mutually Exclusive, Collectively Exhaustive)—covering every aspect of your business without overlap.',
        de: 'Die 8 Dimensionen sind MECE (Mutually Exclusive, Collectively Exhaustive)—sie decken jeden Aspekt deines Business ab, ohne Überlappung.'
      }
    ],
    dimensions: [
      { id: 'D₁', name: { en: 'GTM/Revenue', de: 'GTM/Revenue' }, icon: 'ShoppingCart', description: { en: 'Sales, Marketing, Pricing, Customer Acquisition', de: 'Sales, Marketing, Pricing, Kundenakquise' }, metric: { en: 'CAC, LTV/CAC, Growth Rate', de: 'CAC, LTV/CAC, Growth Rate' } },
      { id: 'D₂', name: { en: 'Product', de: 'Product' }, icon: 'Package', description: { en: 'Product Development, Roadmap, Quality, Innovation', de: 'Produktentwicklung, Roadmap, Qualität, Innovation' }, metric: { en: 'PMF, Retention', de: 'PMF, Retention' } },
      { id: 'D₃', name: { en: 'Customer Success', de: 'Customer Success' }, icon: 'HeartHandshake', description: { en: 'Onboarding, Retention, Expansion, Support', de: 'Onboarding, Retention, Expansion, Support' }, metric: { en: 'NRR, Churn, Expansion', de: 'NRR, Churn, Expansion' } },
      { id: 'D₄', name: { en: 'Operations', de: 'Operations' }, icon: 'Cog', description: { en: 'Processes, Workflows, Efficiency, Delivery', de: 'Prozesse, Workflows, Effizienz, Delivery' }, metric: { en: 'Efficiency, Coordination Cost', de: 'Effizienz, Koordinationskosten' } },
      { id: 'D₅', name: { en: 'Finance', de: 'Finance' }, icon: 'Landmark', description: { en: 'Planning, Forecasting, Unit Economics, Reporting', de: 'Planung, Forecasting, Unit Economics, Reporting' }, metric: { en: 'Unit Economics, Burn Rate', de: 'Unit Economics, Burn Rate' } },
      { id: 'D₆', name: { en: 'Talent', de: 'Talent' }, icon: 'UserCog', description: { en: 'Hiring, Development, Retention, Culture', de: 'Hiring, Entwicklung, Retention, Kultur' }, metric: { en: 'Team Quality, Turnover', de: 'Team-Qualität, Turnover' } },
      { id: 'D₇', name: { en: 'Data/Tech', de: 'Data/Tech' }, icon: 'Server', description: { en: 'Infrastructure, Data, Security, AI Integration', de: 'Infrastruktur, Daten, Security, AI-Integration' }, metric: { en: 'AI Maturity, Tech Debt', de: 'AI Maturity, Tech Debt' } },
      { id: 'D₈', name: { en: 'Governance', de: 'Governance' }, icon: 'Scale', description: { en: 'Board, Legal, Compliance, Risk Management', de: 'Board, Legal, Compliance, Risikomanagement' }, metric: { en: 'Board Confidence, Investor Readiness', de: 'Board Confidence, Investor Readiness' } }
    ],
    matrixExample: {
      capability: 'C₂ (Setup)',
      dimension: 'D₁ (GTM/Revenue)',
      questions: [
        { en: 'Do you have clear ICP definition?', de: 'Hast du eine klare ICP-Definition?' },
        { en: 'Do you have repeatable sales playbooks?', de: 'Hast du wiederholbare Sales Playbooks?' },
        { en: 'Do you have predictable lead generation?', de: 'Hast du vorhersagbare Lead-Generierung?' }
      ],
      implication: { en: 'If the answer is "No" → This is a bottleneck.', de: 'Wenn die Antwort "Nein" ist → Das ist ein Engpass.' }
    },
    callout: {
      title: { en: 'Why This Matters', de: 'Warum das wichtig ist' },
      content: {
        en: 'Most companies focus on 1-2 dimensions (e.g., "We need better sales" or "We need better product"). But your #1 bottleneck might be hiding in a different dimension. The 8-dimensional framework ensures you diagnose ALL 32 capability areas—not just the obvious ones.',
        de: 'Die meisten Unternehmen fokussieren auf 1-2 Dimensionen (z.B. "Wir brauchen besseren Sales" oder "Wir brauchen besseres Produkt"). Aber dein #1 Engpass könnte sich in einer anderen Dimension verstecken. Das 8-dimensionale Framework stellt sicher, dass du ALLE 32 Capability-Bereiche diagnostizierst—nicht nur die offensichtlichen.'
      }
    },
    crossLink: {
      text: { en: 'Want to see how this works in practice? Read about the Scaling Stack Theory (SST).', de: 'Willst du sehen, wie das in der Praxis funktioniert? Lies über die Scaling Stack Theory (SST).' },
      href: '/expertise/sst'
    }
  },

  caseStudies: {
    headline: {
      en: 'AI-Native Scaling in Action',
      de: 'AI-Native Skalieren in Aktion'
    },
    subheadline: {
      en: 'Three companies that achieved superlinear scaling',
      de: 'Drei Unternehmen, die superlineares Wachstum erreichten'
    },
    cases: [
      {
        id: 'midjourney',
        company: 'Midjourney',
        level: 3,
        metrics: {
          revenue: '$492M',
          employees: '107',
          revenuePerEmployee: '$4.6M',
          valuation: 'Private'
        },
        whatMakesThemLevel3: [
          { en: 'Product IS AI (image generation)', de: 'Produkt IST AI (Bildgenerierung)' },
          { en: 'Flat org structure (2-3 levels)', de: 'Flache Org-Struktur (2-3 Ebenen)' },
          { en: 'Community-first growth (no sales team)', de: 'Community-first Wachstum (kein Sales Team)' },
          { en: '10M+ prompts/day (data network effects)', de: '10M+ Prompts/Tag (Daten-Netzwerkeffekte)' }
        ],
        keyInsights: [
          { en: 'Started as AI-native—product IS AI', de: 'Startete als AI-native—Produkt IST AI' },
          { en: 'No traditional sales team', de: 'Kein traditionelles Sales Team' },
          { en: 'AI handles coordination', de: 'AI übernimmt Koordination' }
        ],
        pattern: {
          en: 'Midjourney didn\'t gradually improve to AI-native. They started as AI-native—product IS AI, not AI-powered. That\'s the difference.',
          de: 'Midjourney wurde nicht graduell AI-native. Sie starteten als AI-native—Produkt IST AI, nicht AI-powered. Das ist der Unterschied.'
        }
      },
      {
        id: 'cursor',
        company: 'Cursor',
        level: 3,
        metrics: {
          revenue: '$100M ARR',
          employees: '60',
          revenuePerEmployee: '$1.67M',
          valuation: '$400M'
        },
        whatMakesThemLevel3: [
          { en: 'AI-native code editor (not VS Code + AI)', de: 'AI-native Code-Editor (nicht VS Code + AI)' },
          { en: 'Proprietary AI models', de: 'Proprietäre AI-Modelle' },
          { en: 'Developer-first growth (freemium)', de: 'Developer-first Wachstum (Freemium)' },
          { en: 'Code data network effects', de: 'Code-Daten-Netzwerkeffekte' }
        ],
        keyInsights: [
          { en: 'Built from scratch for AI-first coding', de: 'Von Grund auf für AI-first Coding gebaut' },
          { en: '60 people to $100M ARR', de: '60 Leute bis $100M ARR' },
          { en: 'Weekly updates, rapid iteration', de: 'Wöchentliche Updates, schnelle Iteration' }
        ],
        pattern: {
          en: 'Cursor didn\'t add AI to VS Code. They built an AI-native code editor from scratch. That\'s the paradigm shift.',
          de: 'Cursor hat nicht AI zu VS Code hinzugefügt. Sie bauten einen AI-native Code-Editor von Grund auf. Das ist der Paradigmenwechsel.'
        }
      },
      {
        id: 'perplexity',
        company: 'Perplexity',
        level: 3,
        metrics: {
          revenue: '$200M+',
          employees: '80-100',
          revenuePerEmployee: '$2M+',
          queries: '780M/month',
          valuation: '$9B'
        },
        whatMakesThemLevel3: [
          { en: 'AI-native search engine (not Google + AI)', de: 'AI-native Suchmaschine (nicht Google + AI)' },
          { en: 'The Google Challenger', de: 'Der Google Herausforderer' },
          { en: 'Freemium model, fast iteration', de: 'Freemium-Modell, schnelle Iteration' },
          { en: '780M queries/month (query data network effects)', de: '780M Anfragen/Monat (Query-Daten-Netzwerkeffekte)' }
        ],
        keyInsights: [
          { en: 'Built AI-native search from scratch', de: 'AI-native Suche von Grund auf gebaut' },
          { en: '80-100 people to $200M+ revenue', de: '80-100 Leute bis $200M+ Umsatz' },
          { en: 'AI learns from every search', de: 'AI lernt von jeder Suche' }
        ],
        pattern: {
          en: 'Perplexity didn\'t improve Google search. They built an AI-native search engine from scratch. That\'s the paradigm shift.',
          de: 'Perplexity hat nicht Google-Suche verbessert. Sie bauten eine AI-native Suchmaschine von Grund auf. Das ist der Paradigmenwechsel.'
        }
      }
    ]
  },

  implications: {
    headline: {
      en: 'What This Means for You',
      de: 'Was das für dich bedeutet'
    },
    subheadline: {
      en: 'Three practical implications for CEOs',
      de: 'Drei praktische Implikationen für CEOs'
    },
    items: [
      {
        number: 1,
        title: { en: 'Assess Your Capabilities', de: 'Bewerte deine Capabilities' },
        question: {
          en: 'Where are you today? Which capability is your bottleneck?',
          de: 'Wo stehst du heute? Welche Capability ist dein Bottleneck?'
        },
        bullets: [
          { en: 'How strong is your Strategy (C₁)?', de: 'Wie stark ist deine Strategy (C₁)?' },
          { en: 'How strong is your Setup (C₂)?', de: 'Wie stark ist dein Setup (C₂)?' },
          { en: 'How strong is your Execution (C₃)?', de: 'Wie stark ist deine Execution (C₃)?' },
          { en: 'How strong is your Operationalization (C₄)?', de: 'Wie stark ist deine Operationalization (C₄)?' }
        ],
        action: {
          en: 'Diagnose your bottleneck. Your weakest capability determines your scaling speed.',
          de: 'Diagnostiziere deinen Bottleneck. Deine schwächste Capability bestimmt deine Skalierungsgeschwindigkeit.'
        },
        cta: {
          text: { en: 'Diagnose Bottleneck', de: 'Bottleneck diagnostizieren' },
          href: '/tools/bottleneck-diagnosis'
        }
      },
      {
        number: 2,
        title: { en: 'Improve Your AI Maturity', de: 'Verbessere deine AI Maturity' },
        question: {
          en: 'How AI-native are you? Level 1, 2, or 3?',
          de: 'Wie AI-native bist du? Level 1, 2 oder 3?'
        },
        bullets: [
          { en: 'Is AI a feature or the product?', de: 'Ist AI ein Feature oder das Produkt?' },
          { en: 'Do you have proprietary AI models?', de: 'Hast du proprietäre AI-Modelle?' },
          { en: 'Are your workflows AI-orchestrated?', de: 'Sind deine Workflows AI-orchestriert?' }
        ],
        action: {
          en: 'Calculate your AI maturity (θ_index). Higher AI maturity = faster scaling.',
          de: 'Berechne deine AI Maturity (θ_index). Höhere AI Maturity = schnelleres Skalieren.'
        },
        cta: {
          text: { en: 'Calculate θ_index', de: 'θ_index berechnen' },
          href: '/tools/calculate-theta'
        }
      },
      {
        number: 3,
        title: { en: 'Build Your Transformation Plan', de: 'Erstelle deinen Transformationsplan' },
        question: {
          en: 'How do you get from where you are to AI-native?',
          de: 'Wie kommst du von wo du bist zu AI-native?'
        },
        bullets: [
          { en: 'Fix bottleneck (3-6 months)', de: 'Bottleneck fixen (3-6 Monate)' },
          { en: 'Improve AI maturity (12-24 months)', de: 'AI Maturity verbessern (12-24 Monate)' },
          { en: 'Achieve superlinear scaling', de: 'Superlineares Skalieren erreichen' }
        ],
        action: {
          en: 'Build your roadmap. Transformation takes time (12-24 months), but the payoff is 8.2x faster scaling.',
          de: 'Erstelle deine Roadmap. Transformation braucht Zeit (12-24 Monate), aber die Belohnung ist 8,2x schnelleres Skalieren.'
        },
        cta: {
          text: { en: 'Book Strategy Call', de: 'Strategy Call buchen' },
          href: '/solutions/strategic-advisory'
        }
      }
    ]
  },

  download: {
    headline: {
      en: 'Get the Complete Research',
      de: 'Hole dir die komplette Research'
    },
    subheadline: {
      en: 'Download the AI-Native Scaling Theory (ANST v4.5.3) Executive Summary',
      de: 'Lade die AI-Native Scaling Theory (ANST v4.5.3) Executive Summary herunter'
    },
    document: {
      title: { en: 'AI-Native Scaling Theory v4.5.3', de: 'AI-Native Scaling Theory v4.5.3' },
      subtitle: { en: 'Executive Summary', de: 'Executive Summary' },
      wordCount: '3,000',
      style: { en: 'HBR-style, accessible', de: 'HBR-Stil, zugänglich' },
      whatsInside: [
        { en: 'Why AI-native companies scale 8.2x faster', de: 'Warum AI-native Unternehmen 8,2x schneller skalieren' },
        { en: 'The 4 Capabilities (detailed)', de: 'Die 4 Capabilities (detailliert)' },
        { en: 'The Formula (explained)', de: 'Die Formel (erklärt)' },
        { en: 'Case Studies (Midjourney, Cursor, Perplexity)', de: 'Case Studies (Midjourney, Cursor, Perplexity)' },
        { en: 'Empirical Evidence (n=22)', de: 'Empirische Evidenz (n=22)' }
      ]
    },
    cta: {
      text: { en: 'Download PDF', de: 'PDF herunterladen' },
      href: '/downloads/anst-executive-summary.pdf'
    },
    note: {
      en: 'Free download, no email required',
      de: 'Kostenloser Download, keine E-Mail erforderlich'
    }
  },

  finalCta: {
    headline: {
      en: 'Want to Achieve Superlinear Scaling?',
      de: 'Willst du superlineares Skalieren erreichen?'
    },
    content: {
      en: 'Book a Strategy Call to discuss your transformation. We\'ll help you diagnose your bottleneck, assess your AI maturity, and build your transformation plan.',
      de: 'Buche einen Strategy Call, um deine Transformation zu besprechen. Wir helfen dir, deinen Bottleneck zu diagnostizieren, deine AI Maturity zu bewerten und deinen Transformationsplan zu erstellen.'
    },
    benefits: [
      { en: 'Diagnose your bottleneck (which capability is weakest?)', de: 'Diagnostiziere deinen Bottleneck (welche Capability ist am schwächsten?)' },
      { en: 'Assess your AI maturity (Level 1, 2, or 3?)', de: 'Bewerte deine AI Maturity (Level 1, 2 oder 3?)' },
      { en: 'Build your transformation plan (12-24 months)', de: 'Erstelle deinen Transformationsplan (12-24 Monate)' }
    ],
    primaryCta: {
      text: { en: 'Book Strategy Call', de: 'Strategy Call buchen' },
      href: '/solutions/strategic-advisory'
    },
    secondaryCta: {
      text: { en: 'Calculate Your Score', de: 'Berechne deinen Score' },
      href: '/tools/calculate-theta'
    },
    subtext: {
      en: 'Free Strategy Call, no obligation',
      de: 'Kostenloser Strategy Call, keine Verpflichtung'
    }
  }
};
