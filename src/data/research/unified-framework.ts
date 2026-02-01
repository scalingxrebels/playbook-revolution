// Unified Framework Research Page Data
// Route: /expertise/unified-framework
// HBR-Style: How all 4 formulas fit together

import type { UnifiedFrameworkPageData } from './types';

export const unifiedFrameworkPageData: UnifiedFrameworkPageData = {
  hero: {
    breadcrumb: {
      home: { en: 'Home', de: 'Home' },
      parent: { en: 'Expertise', de: 'Expertise' },
      current: { en: 'The Unified Framework', de: 'Das Unified Framework' }
    },
    headline: {
      en: 'How It All Fits Together',
      de: 'Wie alles zusammenpasst'
    },
    subheadline: {
      en: 'The unified framework for AI-native scaling—4 formulas, 1 system',
      de: 'Das einheitliche Framework für AI-natives Skalieren—4 Formeln, 1 System'
    },
    description: {
      en: 'We spent 3 years researching why AI-native companies scale 8.2x faster than traditional companies. What we found: You need 4 formulas, not 1. One measures WHAT level you\'re at. One explains WHY you scale faster. One diagnoses WHAT\'s blocking you. One predicts WHEN you\'ll reach €100M ARR. Together, they form a complete system—the first unified framework for AI-native scaling.',
      de: 'Wir haben 3 Jahre erforscht, warum AI-native Unternehmen 8,2x schneller skalieren als traditionelle Unternehmen. Was wir fanden: Man braucht 4 Formeln, nicht 1. Eine misst WO du stehst. Eine erklärt WARUM du schneller skalierst. Eine diagnostiziert WAS dich blockiert. Eine prognostiziert WANN du €100M ARR erreichst. Zusammen bilden sie ein vollständiges System—das erste unified Framework für AI-natives Skalieren.'
    },
    stats: [
      { value: '4', label: { en: 'Formulas', de: 'Formeln' } },
      { value: '1', label: { en: 'Unified System', de: 'Einheitliches System' } },
      { value: '22', label: { en: 'Companies Validated', de: 'Unternehmen validiert' } },
      { value: '3 yrs', label: { en: 'Research', de: 'Forschung' } }
    ],
    primaryCta: {
      text: { en: 'Download Framework', de: 'Framework herunterladen' },
      href: '#download'
    },
    secondaryCta: {
      text: { en: 'Book Strategy Call', de: 'Strategy Call buchen' },
      href: 'https://calendly.com/scalingx/strategy-call'
    }
  },

  whyFourFormulas: {
    headline: {
      en: 'Why We Need 4 Formulas',
      de: 'Warum wir 4 Formeln brauchen'
    },
    questions: [
      {
        question: { en: 'WHAT level are you at?', de: 'WO stehst du?' },
        formula: 'AMF',
        explanation: {
          en: 'Are you AI-Powered, AI-Enabled, or AI-Native? Without knowing your current state, you can\'t plan your transformation.',
          de: 'Bist du AI-Powered, AI-Enabled oder AI-Native? Ohne den aktuellen Stand zu kennen, kannst du keine Transformation planen.'
        }
      },
      {
        question: { en: 'WHY do AI-native companies scale faster?', de: 'WARUM skalieren AI-native Unternehmen schneller?' },
        formula: 'ANST',
        explanation: {
          en: 'What\'s the mechanism? Why does higher AI maturity correlate with faster scaling? Without understanding WHY, you can\'t replicate it.',
          de: 'Was ist der Mechanismus? Warum korreliert höhere AI-Reife mit schnellerem Skalieren? Ohne WARUM zu verstehen, kannst du es nicht replizieren.'
        }
      },
      {
        question: { en: 'WHAT\'s blocking you?', de: 'WAS blockiert dich?' },
        formula: 'SST',
        explanation: {
          en: 'Which capability is your bottleneck? Strategy, Setup, Execution, or Operationalization? Without diagnosing the bottleneck, you waste resources fixing the wrong thing.',
          de: 'Welche Capability ist dein Engpass? Strategie, Setup, Execution oder Operationalization? Ohne den Engpass zu diagnostizieren, verschwendest du Ressourcen.'
        }
      },
      {
        question: { en: 'WHEN will you reach €100M ARR?', de: 'WANN erreichst du €100M ARR?' },
        formula: 'META',
        explanation: {
          en: 'How long will it take? What\'s your timeline? Without a prediction, you can\'t plan resources or set expectations.',
          de: 'Wie lange wird es dauern? Was ist deine Timeline? Ohne Prognose kannst du keine Ressourcen planen oder Erwartungen setzen.'
        }
      }
    ],
    insight: {
      en: 'No single formula answers all 4 questions. You need a unified system.',
      de: 'Keine einzelne Formel beantwortet alle 4 Fragen. Du brauchst ein einheitliches System.'
    },
    callout: {
      title: { en: 'Why Not 1 Formula?', de: 'Warum nicht 1 Formel?' },
      content: {
        en: 'We tried. We spent 2 years trying to build 1 formula that does everything. It didn\'t work. Each question requires different inputs, different methods, different validation. 4 formulas, 1 system is the answer.',
        de: 'Wir haben es versucht. Wir haben 2 Jahre versucht, 1 Formel zu bauen, die alles kann. Es hat nicht funktioniert. Jede Frage erfordert andere Inputs, andere Methoden, andere Validierung. 4 Formeln, 1 System ist die Antwort.'
      }
    }
  },

  fourFormulas: {
    headline: {
      en: 'The 4 Formulas',
      de: 'Die 4 Formeln'
    },
    subheadline: {
      en: 'Each formula answers a different question—together they form a complete system',
      de: 'Jede Formel beantwortet eine andere Frage—zusammen bilden sie ein vollständiges System'
    },
    formulas: [
      {
        id: 'amf',
        name: { en: 'AMF', de: 'AMF' },
        fullName: { en: 'AI Maturity Framework', de: 'AI Maturity Framework' },
        question: { en: 'WHAT level are you at?', de: 'WO stehst du?' },
        input: { en: '6 Dimensions', de: '6 Dimensionen' },
        inputDetails: [
          { en: 'Strategy', de: 'Strategie' },
          { en: 'Architecture', de: 'Architektur' },
          { en: 'Workflow', de: 'Workflow' },
          { en: 'Data', de: 'Data' },
          { en: 'Talent', de: 'Talent' },
          { en: 'Adoption', de: 'Adoption' }
        ],
        output: { en: 'θ_index (0-1)', de: 'θ_index (0-1)' },
        outputDetails: [
          { en: 'Level 1: 0.0-0.4 (AI-Powered)', de: 'Level 1: 0.0-0.4 (AI-Powered)' },
          { en: 'Level 2: 0.4-0.7 (AI-Enabled)', de: 'Level 2: 0.4-0.7 (AI-Enabled)' },
          { en: 'Level 3: 0.7-1.0 (AI-Native)', de: 'Level 3: 0.7-1.0 (AI-Native)' }
        ],
        validation: { en: 'n=62, accuracy 94%', de: 'n=62, Genauigkeit 94%' },
        href: '/expertise/amf',
        color: 'violet'
      },
      {
        id: 'anst',
        name: { en: 'ANST', de: 'ANST' },
        fullName: { en: 'AI-Native Scaling Theory', de: 'AI-Native Scaling Theory' },
        question: { en: 'WHY scale faster?', de: 'WARUM schneller skalieren?' },
        input: { en: 'M × E × C × θ', de: 'M × E × C × θ' },
        inputDetails: [
          { en: 'Market Factor (TAM, growth, competition)', de: 'Marktfaktor (TAM, Wachstum, Wettbewerb)' },
          { en: 'Enablers (Capital, Talent, Culture)', de: 'Enablers (Kapital, Talent, Kultur)' },
          { en: 'Capabilities (C₁, C₂, C₃, C₄)', de: 'Capabilities (C₁, C₂, C₃, C₄)' },
          { en: 'AI Maturity (θ)', de: 'AI-Reife (θ)' }
        ],
        output: { en: 'Scaling Velocity (S)', de: 'Skalierungsgeschwindigkeit (S)' },
        outputDetails: [
          { en: 'S = M × E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ', de: 'S = M × E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ' },
          { en: 'Superlinear vs. Linear', de: 'Superlinear vs. Linear' }
        ],
        validation: { en: 'n=22, R²=0.76', de: 'n=22, R²=0.76' },
        href: '/expertise/anst',
        color: 'blue'
      },
      {
        id: 'sst',
        name: { en: 'SST', de: 'SST' },
        fullName: { en: 'Scaling Stack Theory', de: 'Scaling Stack Theory' },
        question: { en: 'WHAT\'s blocking you?', de: 'WAS blockiert dich?' },
        input: { en: '4 Capabilities', de: '4 Capabilities' },
        inputDetails: [
          { en: 'C₁ = Strategy', de: 'C₁ = Strategie' },
          { en: 'C₂ = Setup', de: 'C₂ = Setup' },
          { en: 'C₃ = Execution', de: 'C₃ = Execution' },
          { en: 'C₄ = Operationalization', de: 'C₄ = Operationalization' }
        ],
        output: { en: 'Bottleneck (C_min)', de: 'Engpass (C_min)' },
        outputDetails: [
          { en: 'Your weakest capability', de: 'Deine schwächste Capability' },
          { en: 'Limits scaling speed', de: 'Limitiert Skalierungsgeschwindigkeit' }
        ],
        validation: { en: 'n=22, r=0.72', de: 'n=22, r=0.72' },
        href: '/expertise/sst',
        color: 'emerald'
      },
      {
        id: 'meta',
        name: { en: 'META', de: 'META' },
        fullName: { en: 'Time to €100M Prediction', de: 'Zeit bis €100M Prognose' },
        question: { en: 'WHEN will you reach €100M?', de: 'WANN erreichst du €100M?' },
        input: { en: 'θ_index + C_min', de: 'θ_index + C_min' },
        inputDetails: [
          { en: 'AI Maturity (from AMF)', de: 'AI-Reife (aus AMF)' },
          { en: 'Bottleneck (from SST)', de: 'Engpass (aus SST)' }
        ],
        output: { en: 'Time Bands', de: 'Zeitbänder' },
        outputDetails: [
          { en: 'Fast: 8-18 months', de: 'Schnell: 8-18 Monate' },
          { en: 'Medium: 24-48 months', de: 'Mittel: 24-48 Monate' },
          { en: 'Slow: 60-84 months', de: 'Langsam: 60-84 Monate' }
        ],
        validation: { en: 'n=22, r=0.89', de: 'n=22, r=0.89' },
        href: '#case-study',
        color: 'amber'
      }
    ]
  },

  frameworkFlow: {
    headline: {
      en: 'How They Work Together',
      de: 'Wie sie zusammenarbeiten'
    },
    subheadline: {
      en: 'AMF → ANST → SST → META: The complete diagnostic and predictive system',
      de: 'AMF → ANST → SST → META: Das vollständige diagnostische und prädiktive System'
    },
    steps: [
      {
        number: 1,
        name: { en: 'Measure', de: 'Messen' },
        formula: 'AMF',
        description: {
          en: 'Start by measuring your AI maturity (θ_index). This tells you WHAT level you\'re at.',
          de: 'Beginne mit der Messung deiner AI-Reife (θ_index). Dies sagt dir WO du stehst.'
        },
        output: { en: 'θ_index', de: 'θ_index' },
        outputValue: '0.88',
        color: 'violet'
      },
      {
        number: 2,
        name: { en: 'Explain', de: 'Erklären' },
        formula: 'ANST',
        description: {
          en: 'Use θ_index to explain WHY you scale at your current speed. ANST shows the mechanism.',
          de: 'Nutze θ_index um zu erklären WARUM du mit der aktuellen Geschwindigkeit skalierst.'
        },
        output: { en: 'Scaling Velocity', de: 'Skalierungsgeschwindigkeit' },
        outputValue: 'High',
        color: 'blue'
      },
      {
        number: 3,
        name: { en: 'Diagnose', de: 'Diagnostizieren' },
        formula: 'SST',
        description: {
          en: 'Identify your bottleneck (C_min). This tells you WHAT\'s blocking your scaling.',
          de: 'Identifiziere deinen Engpass (C_min). Dies sagt dir WAS dein Skalieren blockiert.'
        },
        output: { en: 'C_min', de: 'C_min' },
        outputValue: '0.80',
        color: 'emerald'
      },
      {
        number: 4,
        name: { en: 'Predict', de: 'Prognostizieren' },
        formula: 'META',
        description: {
          en: 'Combine θ_index and C_min to predict WHEN you\'ll reach €100M ARR.',
          de: 'Kombiniere θ_index und C_min um zu prognostizieren WANN du €100M ARR erreichst.'
        },
        output: { en: 'Time to €100M', de: 'Zeit bis €100M' },
        outputValue: '8-18 mo',
        color: 'amber'
      }
    ],
    result: {
      en: 'A complete diagnostic and predictive system. You know WHERE you are, WHY you scale at your current speed, WHAT\'s blocking you, and WHEN you\'ll reach your goal.',
      de: 'Ein vollständiges diagnostisches und prädiktives System. Du weißt WO du stehst, WARUM du mit der aktuellen Geschwindigkeit skalierst, WAS dich blockiert und WANN du dein Ziel erreichst.'
    },
    callout: {
      title: { en: 'Why This Order Matters', de: 'Warum diese Reihenfolge wichtig ist' },
      content: {
        en: 'AMF must come first (you need θ_index for ANST and META). SST can run in parallel (independent measurement). META comes last (needs θ_index and C_min). This isn\'t arbitrary—it\'s the logical flow of diagnosis.',
        de: 'AMF muss zuerst kommen (du brauchst θ_index für ANST und META). SST kann parallel laufen (unabhängige Messung). META kommt zuletzt (braucht θ_index und C_min). Das ist nicht willkürlich—es ist der logische Diagnosefluss.'
      }
    }
  },

  practicalApplication: {
    headline: {
      en: 'How to Use the Framework',
      de: 'Wie man das Framework nutzt'
    },
    subheadline: {
      en: 'Three practical applications for CEOs',
      de: 'Drei praktische Anwendungen für CEOs'
    },
    applications: [
      {
        number: 1,
        title: { en: 'Diagnose Your Current State', de: 'Diagnostiziere deinen aktuellen Stand' },
        useFormulas: ['AMF', 'SST'],
        steps: [
          { en: 'Measure θ_index (AMF)', de: 'Miss θ_index (AMF)' },
          { en: 'Identify bottleneck (SST)', de: 'Identifiziere Engpass (SST)' },
          { en: 'Understand your starting point', de: 'Verstehe deinen Ausgangspunkt' }
        ],
        output: [
          { en: 'Your AI Maturity Level', de: 'Dein AI-Reife-Level' },
          { en: 'Your Bottleneck', de: 'Dein Engpass' }
        ],
        cta: { text: { en: 'Calculate Now', de: 'Jetzt berechnen' }, href: '/expertise/amf' },
        color: 'violet'
      },
      {
        number: 2,
        title: { en: 'Plan Your Transformation', de: 'Plane deine Transformation' },
        useFormulas: ['AMF', 'SST', 'META'],
        steps: [
          { en: 'Set target (Level 2 or 3)', de: 'Setze Ziel (Level 2 oder 3)' },
          { en: 'Fix bottleneck (SST)', de: 'Behebe Engpass (SST)' },
          { en: 'Predict timeline (META)', de: 'Prognostiziere Timeline (META)' }
        ],
        output: [
          { en: 'Transformation roadmap', de: 'Transformations-Roadmap' },
          { en: 'Timeline to €100M', de: 'Timeline bis €100M' }
        ],
        cta: { text: { en: 'Build Roadmap', de: 'Roadmap erstellen' }, href: 'https://calendly.com/scalingx/strategy-call' },
        color: 'blue'
      },
      {
        number: 3,
        title: { en: 'Track Progress', de: 'Verfolge Fortschritt' },
        useFormulas: ['AMF', 'SST'],
        steps: [
          { en: 'Re-measure θ_index (AMF)', de: 'Miss θ_index erneut (AMF)' },
          { en: 'Re-assess bottleneck (SST)', de: 'Bewerte Engpass erneut (SST)' },
          { en: 'Compare before vs. after', de: 'Vergleiche vorher vs. nachher' }
        ],
        output: [
          { en: 'Progress report', de: 'Fortschrittsbericht' },
          { en: 'New bottleneck (if any)', de: 'Neuer Engpass (falls vorhanden)' }
        ],
        cta: { text: { en: 'Track Progress', de: 'Fortschritt verfolgen' }, href: 'https://calendly.com/scalingx/strategy-call' },
        color: 'emerald'
      }
    ]
  },

  businessDimensions: {
    headline: {
      en: 'The 8 Business Dimensions',
      de: 'Die 8 Business-Dimensionen'
    },
    subheadline: {
      en: '4 capabilities × 8 dimensions = 32 capability areas to diagnose',
      de: '4 Capabilities × 8 Dimensionen = 32 Capability-Bereiche zur Diagnose'
    },
    intro: [
      { 
        en: 'The 4 capabilities (C₁-C₄) are the HOW of scaling. The 8 dimensions are the WHERE. Together, they create 32 capability areas—your complete diagnostic map.',
        de: 'Die 4 Capabilities (C₁-C₄) sind das WIE des Skalierens. Die 8 Dimensionen sind das WO. Zusammen ergeben sie 32 Capability-Bereiche—deine vollständige Diagnose-Map.'
      },
      {
        en: 'The SST formula uses this 4×8 matrix to find your #1 bottleneck. The META formula uses it to predict your timeline.',
        de: 'Die SST-Formel nutzt diese 4×8 Matrix, um deinen #1 Engpass zu finden. Die META-Formel nutzt sie, um deine Timeline zu prognostizieren.'
      }
    ],
    dimensions: [
      { id: 'D₁', name: { en: 'GTM/Revenue', de: 'GTM/Revenue' }, icon: 'ShoppingCart', description: { en: 'Sales, Marketing, Pricing', de: 'Sales, Marketing, Pricing' }, metric: { en: 'CAC, LTV/CAC', de: 'CAC, LTV/CAC' } },
      { id: 'D₂', name: { en: 'Product', de: 'Product' }, icon: 'Package', description: { en: 'Development, Roadmap, Quality', de: 'Entwicklung, Roadmap, Qualität' }, metric: { en: 'PMF, Retention', de: 'PMF, Retention' } },
      { id: 'D₃', name: { en: 'Customer Success', de: 'Customer Success' }, icon: 'HeartHandshake', description: { en: 'Onboarding, Retention, Expansion', de: 'Onboarding, Retention, Expansion' }, metric: { en: 'NRR, Churn', de: 'NRR, Churn' } },
      { id: 'D₄', name: { en: 'Operations', de: 'Operations' }, icon: 'Cog', description: { en: 'Processes, Workflows, Efficiency', de: 'Prozesse, Workflows, Effizienz' }, metric: { en: 'Efficiency', de: 'Effizienz' } },
      { id: 'D₅', name: { en: 'Finance', de: 'Finance' }, icon: 'Landmark', description: { en: 'Planning, Forecasting, Unit Economics', de: 'Planung, Forecasting, Unit Economics' }, metric: { en: 'Unit Economics', de: 'Unit Economics' } },
      { id: 'D₆', name: { en: 'Talent', de: 'Talent' }, icon: 'UserCog', description: { en: 'Hiring, Development, Retention', de: 'Hiring, Entwicklung, Retention' }, metric: { en: 'Team Quality', de: 'Team-Qualität' } },
      { id: 'D₇', name: { en: 'Data/Tech', de: 'Data/Tech' }, icon: 'Server', description: { en: 'Infrastructure, Data, Security', de: 'Infrastruktur, Daten, Security' }, metric: { en: 'AI Maturity', de: 'AI Maturity' } },
      { id: 'D₈', name: { en: 'Governance', de: 'Governance' }, icon: 'Scale', description: { en: 'Board, Legal, Compliance', de: 'Board, Legal, Compliance' }, metric: { en: 'Board Confidence', de: 'Board Confidence' } }
    ],
    callout: {
      title: { en: 'The Complete Diagnostic Map', de: 'Die vollständige Diagnose-Map' },
      content: {
        en: '4 Capabilities (Strategy, Setup, Execution, Operationalization) × 8 Dimensions = 32 Capability Areas. Your #1 bottleneck is hiding in one of these 32 cells. The unified framework finds it.',
        de: '4 Capabilities (Strategy, Setup, Execution, Operationalization) × 8 Dimensionen = 32 Capability-Bereiche. Dein #1 Engpass versteckt sich in einer dieser 32 Zellen. Das unified Framework findet ihn.'
      }
    }
  },

  unifiedCaseStudy: {
    headline: {
      en: 'Case Study: Midjourney',
      de: 'Fallstudie: Midjourney'
    },
    subheadline: {
      en: 'How the unified framework explains Midjourney\'s success',
      de: 'Wie das unified Framework Midjourneys Erfolg erklärt'
    },
    company: {
      name: 'Midjourney',
      founded: '2021',
      revenue: '$492M',
      employees: '107',
      timeToRevenue: '~18 months'
    },
    analysis: {
      amf: {
        headline: { en: 'Step 1: Measure AI Maturity (AMF)', de: 'Schritt 1: AI-Reife messen (AMF)' },
        thetaIndex: '0.88',
        level: 'Level 3: AI-Native',
        dimensions: [
          { name: { en: 'Strategy', de: 'Strategie' }, score: '0.95' },
          { name: { en: 'Architecture', de: 'Architektur' }, score: '0.90' },
          { name: { en: 'Workflow', de: 'Workflow' }, score: '0.85' },
          { name: { en: 'Data', de: 'Daten' }, score: '0.90' },
          { name: { en: 'Talent', de: 'Talent' }, score: '0.85' },
          { name: { en: 'Adoption', de: 'Adoption' }, score: '0.85' }
        ]
      },
      anst: {
        headline: { en: 'Step 2: Explain Scaling Velocity (ANST)', de: 'Schritt 2: Skalierungsgeschwindigkeit erklären (ANST)' },
        result: { en: 'High (Superlinear Scaling)', de: 'Hoch (Superlineares Skalieren)' },
        enablers: { en: 'High (Capital, Talent, Culture)', de: 'Hoch (Kapital, Talent, Kultur)' },
        capabilities: 'C₁=0.9, C₂=0.8, C₃=0.9, C₄=0.9'
      },
      sst: {
        headline: { en: 'Step 3: Diagnose Bottleneck (SST)', de: 'Schritt 3: Engpass diagnostizieren (SST)' },
        cMin: '0.80',
        bottleneck: { en: 'Setup (but not critical)', de: 'Setup (aber nicht kritisch)' },
        scores: [
          { capability: 'Strategy', score: '0.90' },
          { capability: 'Setup', score: '0.80' },
          { capability: 'Execution', score: '0.90' },
          { capability: 'Operationalization', score: '0.90' }
        ]
      },
      meta: {
        headline: { en: 'Step 4: Predict Time to €100M (META)', de: 'Schritt 4: Zeit bis €100M prognostizieren (META)' },
        prediction: '8-18 months',
        actual: '~18 months',
        validated: true
      }
    },
    insight: {
      en: 'All 4 formulas align. High θ_index + high C_min = fast scaling. The framework predicted Midjourney\'s success.',
      de: 'Alle 4 Formeln stimmen überein. Hoher θ_index + hoher C_min = schnelles Skalieren. Das Framework hat Midjourneys Erfolg vorhergesagt.'
    },
    callout: {
      title: { en: 'Why Midjourney Succeeded', de: 'Warum Midjourney erfolgreich war' },
      content: {
        en: 'Not just high θ_index (0.88). Not just high C_min (0.80). Both together. High θ_index without high C_min = potential but blocked. High C_min without high θ_index = efficient but slow. Both together = superlinear scaling.',
        de: 'Nicht nur hoher θ_index (0.88). Nicht nur hoher C_min (0.80). Beides zusammen. Hoher θ_index ohne hohen C_min = Potenzial aber blockiert. Hoher C_min ohne hohen θ_index = effizient aber langsam. Beides zusammen = superlineares Skalieren.'
      }
    }
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
        title: { en: 'Use the Complete System', de: 'Nutze das vollständige System' },
        question: {
          en: 'Are you using the complete system, or just 1 formula?',
          de: 'Nutzt du das vollständige System oder nur 1 Formel?'
        },
        bullets: [
          { en: 'Do I know my θ_index? (AMF)', de: 'Kenne ich meinen θ_index? (AMF)' },
          { en: 'Do I understand WHY? (ANST)', de: 'Verstehe ich WARUM? (ANST)' },
          { en: 'Do I know my bottleneck? (SST)', de: 'Kenne ich meinen Engpass? (SST)' },
          { en: 'Do I know my timeline? (META)', de: 'Kenne ich meine Timeline? (META)' }
        ],
        action: {
          en: 'Use all 4 formulas for complete visibility',
          de: 'Nutze alle 4 Formeln für vollständige Sichtbarkeit'
        },
        cta: {
          text: { en: 'Download Framework', de: 'Framework herunterladen' },
          href: '#download'
        }
      },
      {
        number: 2,
        title: { en: 'Start with Diagnosis', de: 'Beginne mit Diagnose' },
        question: {
          en: 'Are you acting without diagnosis?',
          de: 'Handelst du ohne Diagnose?'
        },
        bullets: [
          { en: 'What\'s my θ_index? (AMF)', de: 'Was ist mein θ_index? (AMF)' },
          { en: 'What\'s my C_min? (SST)', de: 'Was ist mein C_min? (SST)' },
          { en: 'Where should I focus?', de: 'Wo sollte ich mich fokussieren?' }
        ],
        action: {
          en: 'Diagnose first, act second',
          de: 'Erst diagnostizieren, dann handeln'
        },
        cta: {
          text: { en: 'Calculate Now', de: 'Jetzt berechnen' },
          href: '/expertise/amf'
        }
      },
      {
        number: 3,
        title: { en: 'Track Progress Quarterly', de: 'Verfolge Fortschritt quartalsweise' },
        question: {
          en: 'Are you tracking progress, or flying blind?',
          de: 'Verfolgst du Fortschritt oder fliegst du blind?'
        },
        bullets: [
          { en: 'Did θ_index improve? (AMF)', de: 'Hat sich θ_index verbessert? (AMF)' },
          { en: 'Did C_min improve? (SST)', de: 'Hat sich C_min verbessert? (SST)' },
          { en: 'Are we on track? (META)', de: 'Sind wir auf Kurs? (META)' }
        ],
        action: {
          en: 'Set quarterly checkpoints',
          de: 'Setze quartalsweise Checkpoints'
        },
        cta: {
          text: { en: 'Book Strategy Call', de: 'Strategy Call buchen' },
          href: 'https://calendly.com/scalingx/strategy-call'
        }
      }
    ]
  },

  download: {
    headline: {
      en: 'Get the Complete Research',
      de: 'Erhalte die vollständige Forschung'
    },
    subheadline: {
      en: 'Download the Architecture Document v4.5.1 (The Unified Framework)',
      de: 'Lade das Architektur-Dokument v4.5.1 herunter (Das Unified Framework)'
    },
    document: {
      title: { en: 'Architecture Document v4.5.1', de: 'Architektur-Dokument v4.5.1' },
      subtitle: { en: 'The Unified Framework', de: 'Das Unified Framework' },
      wordCount: '15,000',
      style: { en: 'HBR-style, accessible', de: 'HBR-Stil, zugänglich' },
      whatsInside: [
        { en: 'The 4 Formulas (detailed)', de: 'Die 4 Formeln (detailliert)' },
        { en: 'How They Work Together', de: 'Wie sie zusammenarbeiten' },
        { en: 'Empirical Validation (n=22)', de: 'Empirische Validierung (n=22)' },
        { en: 'Case Studies (Midjourney, etc.)', de: 'Fallstudien (Midjourney, etc.)' },
        { en: 'Practical Application', de: 'Praktische Anwendung' }
      ]
    },
    cta: {
      text: { en: 'Download PDF', de: 'PDF herunterladen' },
      href: '/downloads/architecture-v4.5.1.pdf'
    },
    note: {
      en: 'Free download, no email required',
      de: 'Kostenloser Download, keine E-Mail erforderlich'
    }
  },

  finalCta: {
    headline: {
      en: 'Ready to Use the Framework?',
      de: 'Bereit, das Framework zu nutzen?'
    },
    content: {
      en: 'Book a Strategy Call to apply the framework to your company. We\'ll help you measure your θ_index (AMF), identify your bottleneck (SST), predict your timeline (META), and build your transformation roadmap.',
      de: 'Buche einen Strategy Call, um das Framework auf dein Unternehmen anzuwenden. Wir helfen dir, deinen θ_index zu messen (AMF), deinen Engpass zu identifizieren (SST), deine Timeline zu prognostizieren (META) und deine Transformations-Roadmap zu erstellen.'
    },
    benefits: [
      { en: 'Measure your θ_index (AMF)', de: 'Miss deinen θ_index (AMF)' },
      { en: 'Identify your bottleneck (SST)', de: 'Identifiziere deinen Engpass (SST)' },
      { en: 'Predict your timeline (META)', de: 'Prognostiziere deine Timeline (META)' },
      { en: 'Build your transformation roadmap', de: 'Erstelle deine Transformations-Roadmap' }
    ],
    primaryCta: {
      text: { en: 'Book Strategy Call', de: 'Strategy Call buchen' },
      href: 'https://calendly.com/scalingx/strategy-call'
    },
    secondaryCta: {
      text: { en: 'Download Framework', de: 'Framework herunterladen' },
      href: '#download'
    },
    subtext: {
      en: 'Free Strategy Call, no obligation',
      de: 'Kostenloser Strategy Call, keine Verpflichtung'
    }
  }
};
