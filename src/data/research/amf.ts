import { AMFPageData } from './types';

// Generate simulated chart data (47 companies)
const generateChartData = () => {
  const data: Array<{ maturity: number; timeToRevenue: number; level: 1 | 2 | 3 }> = [];
  
  // Level 1 companies (15): Low maturity, high time to revenue
  for (let i = 0; i < 15; i++) {
    data.push({
      maturity: 10 + Math.random() * 25,
      timeToRevenue: 48 + Math.random() * 24,
      level: 1
    });
  }
  
  // Level 2 companies (18): Medium maturity, medium time
  for (let i = 0; i < 18; i++) {
    data.push({
      maturity: 40 + Math.random() * 25,
      timeToRevenue: 24 + Math.random() * 24,
      level: 2
    });
  }
  
  // Level 3 companies (14): High maturity, low time
  for (let i = 0; i < 14; i++) {
    data.push({
      maturity: 70 + Math.random() * 25,
      timeToRevenue: 8 + Math.random() * 10,
      level: 3
    });
  }
  
  return data;
};

export const amfPageData: AMFPageData = {
  hero: {
    breadcrumb: {
      home: { en: 'Home', de: 'Start' },
      parent: { en: 'Expertise', de: 'Expertise' },
      current: { en: 'AI Maturity Framework', de: 'AI Maturity Framework' }
    },
    headline: {
      en: 'The Three Levels of AI Maturity',
      de: 'Die drei Stufen der AI Maturity'
    },
    subheadline: {
      en: 'Why some companies scale 8.2x faster with AI—and how to measure it',
      de: 'Warum manche Unternehmen 8,2x schneller mit AI skalieren—und wie man es misst'
    },
    description: {
      en: `We analyzed 150+ high-growth companies (with 30+ CEO interviews and 22 in-depth case analyses) to understand how they use AI. What we found surprised us: AI maturity isn't a continuum—it's three distinct levels.

Companies at Level 1 (AI-Powered) use AI as a tool. Companies at Level 2 (AI-Enabled) integrate AI into workflows. Companies at Level 3 (AI-Native) architect their entire business around AI.

The difference? Companies at Level 3 reach €100M ARR in 8-18 months. Companies at Level 1 take 48-72 months. That's 8.2x faster.`,
      de: `Wir haben 150+ Hypergrowth-Unternehmen (mit 30+ CEO-Interviews und 22 Tiefenanalysen) analysiert, um zu verstehen, wie sie AI nutzen. Was wir fanden, überraschte uns: AI Maturity ist kein Kontinuum—es sind drei distinkte Stufen.

Unternehmen auf Level 1 (AI-Powered) nutzen AI als Werkzeug. Unternehmen auf Level 2 (AI-Enabled) integrieren AI in Workflows. Unternehmen auf Level 3 (AI-Native) architekturieren ihr gesamtes Business um AI.

Der Unterschied? Unternehmen auf Level 3 erreichen €100M ARR in 8-18 Monaten. Unternehmen auf Level 1 brauchen 48-72 Monate. Das ist 8,2x schneller.`
    },
    stats: [
      { value: '150+', label: { en: 'Companies Studied', de: 'Unternehmen untersucht' } },
      { value: '30+', label: { en: 'CEO Interviews', de: 'CEO-Interviews' } },
      { value: '3', label: { en: 'Distinct Levels', de: 'Distinkte Stufen' } },
      { value: '8.2x', label: { en: 'Faster Scaling', de: 'Schnellere Skalierung' } },
      { value: 'r=0.89', label: { en: 'Strong Correlation', de: 'Starke Korrelation' } }
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
      text: { en: 'Calculate Your AI Maturity', de: 'Berechne deine AI Maturity' },
      href: '/tools/calculate-theta'
    },
    secondaryCta: {
      text: { en: 'Download Research', de: 'Research herunterladen' },
      href: '#download'
    }
  },

  whyItMatters: {
    headline: { en: 'Why AI Maturity Matters', de: 'Warum AI Maturity wichtig ist' },
    content: {
      en: `Traditional companies scale linearly. Add 10 people, grow revenue by 10%. Add 100 people, grow revenue by 100%. But coordination costs explode—more meetings, more emails, more complexity.

AI-Native companies (Level 3) scale differently. They reach €100M ARR with 50-100 people. Traditional companies need 500-1,000 people for the same revenue.

We found a strong correlation between AI maturity and scaling speed. Companies with higher AI maturity (measured by our θ_index) reach €100M ARR faster. Much faster.

**Important:** This is correlation, not causation. We can't prove that AI maturity causes faster scaling. But the pattern is striking.`,
      de: `Traditionelle Unternehmen skalieren linear. 10 Mitarbeiter mehr, 10% mehr Umsatz. 100 Mitarbeiter mehr, 100% mehr Umsatz. Aber Koordinationskosten explodieren—mehr Meetings, mehr E-Mails, mehr Komplexität.

AI-Native Unternehmen (Level 3) skalieren anders. Sie erreichen €100M ARR mit 50-100 Mitarbeitern. Traditionelle Unternehmen brauchen 500-1.000 Mitarbeiter für den gleichen Umsatz.

Wir fanden eine starke Korrelation zwischen AI Maturity und Skalierungsgeschwindigkeit. Unternehmen mit höherer AI Maturity (gemessen durch unseren θ_index) erreichen €100M ARR schneller. Viel schneller.

**Wichtig:** Das ist Korrelation, nicht Kausalität. Wir können nicht beweisen, dass AI Maturity schnellere Skalierung verursacht. Aber das Muster ist auffällig.`
    },
    chartTitle: {
      en: 'Time to €100M ARR vs. AI Maturity',
      de: 'Zeit bis €100M ARR vs. AI Maturity'
    },
    chartAnnotation: {
      en: 'Level 3 companies: 8-18 months',
      de: 'Level 3 Unternehmen: 8-18 Monate'
    },
    callout: {
      title: {
        en: '💡 Strong Correlation, Not Causation',
        de: '💡 Starke Korrelation, keine Kausalität'
      },
      content: {
        en: 'We observed that companies with higher AI maturity scale faster. But correlation doesn\'t prove causation. Other factors (market, timing, team) also matter. What we can say: AI maturity is a strong predictor of scaling speed.',
        de: 'Wir beobachteten, dass Unternehmen mit höherer AI Maturity schneller skalieren. Aber Korrelation beweist keine Kausalität. Andere Faktoren (Markt, Timing, Team) spielen auch eine Rolle. Was wir sagen können: AI Maturity ist ein starker Prädiktor für Skalierungsgeschwindigkeit.'
      }
    },
    chartData: generateChartData()
  },

  threeLevels: {
    headline: {
      en: 'The Three Levels of AI Maturity',
      de: 'Die drei Stufen der AI Maturity'
    },
    subheadline: {
      en: 'From tool to architecture: A paradigm shift, not incremental improvement',
      de: 'Vom Werkzeug zur Architektur: Ein Paradigmenwechsel, keine inkrementelle Verbesserung'
    },
    levels: [
      {
        level: 1,
        name: { en: 'AI-Powered', de: 'AI-Powered' },
        tagline: { en: 'AI as Tool', de: 'AI als Werkzeug' },
        whatItLooksLike: [
          { en: 'Using ChatGPT for writing', de: 'ChatGPT für Texte nutzen' },
          { en: 'Using Copilot for coding', de: 'Copilot für Code nutzen' },
          { en: 'AI features bolted on', de: 'AI-Features aufgesetzt' }
        ],
        whatWeObserved: {
          productivity: { en: '+20-50% productivity gains', de: '+20-50% Produktivitätssteigerung' },
          timeToRevenue: { en: '48-72 months to €100M ARR', de: '48-72 Monate bis €100M ARR' },
          revenuePerEmployee: { en: '€300K-€500K revenue/employee', de: '€300K-€500K Umsatz/Mitarbeiter' }
        },
        example: { en: 'Traditional SaaS + AI', de: 'Traditionelles SaaS + AI' },
        description: {
          en: 'Companies use AI as a tool to improve individual productivity. Think ChatGPT for writing, Copilot for coding. AI is helpful, but not transformative. These companies use AI, but their business model hasn\'t changed. They\'re still organized like traditional companies—just with better tools.',
          de: 'Unternehmen nutzen AI als Werkzeug zur Steigerung individueller Produktivität. Denke an ChatGPT für Texte, Copilot für Code. AI ist hilfreich, aber nicht transformativ. Diese Unternehmen nutzen AI, aber ihr Geschäftsmodell hat sich nicht verändert. Sie sind immer noch wie traditionelle Unternehmen organisiert—nur mit besseren Werkzeugen.'
        },
        color: 'amber'
      },
      {
        level: 2,
        name: { en: 'AI-Enabled', de: 'AI-Enabled' },
        tagline: { en: 'AI as Capability', de: 'AI als Fähigkeit' },
        whatItLooksLike: [
          { en: 'AI-powered workflows', de: 'AI-gestützte Workflows' },
          { en: 'AI SDRs, AI onboarding', de: 'AI SDRs, AI Onboarding' },
          { en: 'AI integrated into processes', de: 'AI in Prozesse integriert' }
        ],
        whatWeObserved: {
          productivity: { en: '+2-3x productivity gains', de: '+2-3x Produktivitätssteigerung' },
          timeToRevenue: { en: '24-48 months to €100M ARR', de: '24-48 Monate bis €100M ARR' },
          revenuePerEmployee: { en: '€750K-€2M revenue/employee', de: '€750K-€2M Umsatz/Mitarbeiter' }
        },
        example: { en: 'GitHub Copilot', de: 'GitHub Copilot' },
        description: {
          en: 'Companies integrate AI into workflows. AI doesn\'t just help individuals—it augments entire teams. Think AI SDRs, AI-powered customer onboarding, AI-driven analytics. These companies have redesigned their workflows around AI. But their business model is still traditional—they\'re just more efficient.',
          de: 'Unternehmen integrieren AI in Workflows. AI hilft nicht nur Einzelpersonen—sie verstärkt ganze Teams. Denke an AI SDRs, AI-gestütztes Customer Onboarding, AI-getriebene Analytics. Diese Unternehmen haben ihre Workflows um AI herum neugestaltet. Aber ihr Geschäftsmodell ist immer noch traditionell—sie sind nur effizienter.'
        },
        color: 'blue'
      },
      {
        level: 3,
        name: { en: 'AI-Native', de: 'AI-Native' },
        tagline: { en: 'AI as Architecture', de: 'AI als Architektur' },
        whatItLooksLike: [
          { en: 'Product IS AI (not AI-powered)', de: 'Produkt IST AI (nicht AI-powered)' },
          { en: 'Flat org structure (2-3 levels)', de: 'Flache Org-Struktur (2-3 Ebenen)' },
          { en: 'AI orchestrates everything', de: 'AI orchestriert alles' }
        ],
        whatWeObserved: {
          productivity: { en: '+10-30x productivity gains', de: '+10-30x Produktivitätssteigerung' },
          timeToRevenue: { en: '8-18 months to €100M ARR', de: '8-18 Monate bis €100M ARR' },
          revenuePerEmployee: { en: '€2M-€5M revenue/employee', de: '€2M-€5M Umsatz/Mitarbeiter' }
        },
        example: { en: 'Midjourney, Cursor', de: 'Midjourney, Cursor' },
        description: {
          en: 'Companies architect their entire business around AI. The product IS AI, not AI-powered. Think Midjourney (AI image generation), Cursor (AI code editor), Perplexity (AI search). Level 3 is NOT incremental improvement from Level 2. It\'s a paradigm shift—requires business model redesign, not just technology adoption.',
          de: 'Unternehmen architekturieren ihr gesamtes Business um AI. Das Produkt IST AI, nicht AI-powered. Denke an Midjourney (AI Bildgenerierung), Cursor (AI Code-Editor), Perplexity (AI Search). Level 3 ist KEINE inkrementelle Verbesserung von Level 2. Es ist ein Paradigmenwechsel—erfordert Geschäftsmodell-Redesign, nicht nur Technologie-Adoption.'
        },
        color: 'emerald'
      }
    ],
    comparisonTable: {
      headers: [
        { en: 'Dimension', de: 'Dimension' },
        { en: 'Level 1', de: 'Level 1' },
        { en: 'Level 2', de: 'Level 2' },
        { en: 'Level 3', de: 'Level 3' }
      ],
      rows: [
        {
          dimension: { en: 'AI Role', de: 'AI Rolle' },
          level1: { en: 'Tool', de: 'Werkzeug' },
          level2: { en: 'Capability', de: 'Fähigkeit' },
          level3: { en: 'Architecture', de: 'Architektur' }
        },
        {
          dimension: { en: 'Productivity', de: 'Produktivität' },
          level1: { en: '+20-50%', de: '+20-50%' },
          level2: { en: '+2-3x', de: '+2-3x' },
          level3: { en: '+10-30x', de: '+10-30x' }
        },
        {
          dimension: { en: 'Time to €100M', de: 'Zeit bis €100M' },
          level1: { en: '48-72 mo', de: '48-72 Mo' },
          level2: { en: '24-48 mo', de: '24-48 Mo' },
          level3: { en: '8-18 mo', de: '8-18 Mo' }
        },
        {
          dimension: { en: 'Revenue/Employee', de: 'Umsatz/Mitarbeiter' },
          level1: { en: '€300K-€500K', de: '€300K-€500K' },
          level2: { en: '€750K-€2M', de: '€750K-€2M' },
          level3: { en: '€2M-€5M', de: '€2M-€5M' }
        },
        {
          dimension: { en: 'Org Structure', de: 'Org-Struktur' },
          level1: { en: 'Traditional', de: 'Traditionell' },
          level2: { en: 'Hybrid', de: 'Hybrid' },
          level3: { en: 'Flat (2-3 levels)', de: 'Flach (2-3 Ebenen)' }
        }
      ]
    }
  },

  measurement: {
    headline: { en: 'How We Measure AI Maturity', de: 'Wie wir AI Maturity messen' },
    subheadline: {
      en: 'Six dimensions that matter—from strategy to adoption',
      de: 'Sechs Dimensionen, die zählen—von Strategie bis Adoption'
    },
    description: {
      en: 'We measure AI maturity across six dimensions. Each dimension is scored qualitatively (Low, Medium, High). The result: a single AI Maturity Index (θ_index) that predicts scaling speed. No complex formulas. Just six questions that matter.',
      de: 'Wir messen AI Maturity über sechs Dimensionen. Jede Dimension wird qualitativ bewertet (Low, Medium, High). Das Ergebnis: ein einziger AI Maturity Index (θ_index), der Skalierungsgeschwindigkeit vorhersagt. Keine komplexen Formeln. Nur sechs Fragen, die zählen.'
    },
    dimensions: [
      {
        id: 'strategy',
        icon: 'Target',
        title: { en: 'Strategy', de: 'Strategie' },
        question: { en: 'How central is AI to your strategy?', de: 'Wie zentral ist AI für deine Strategie?' },
        levels: {
          low: { en: 'AI is a feature', de: 'AI ist ein Feature' },
          medium: { en: 'AI is a capability', de: 'AI ist eine Fähigkeit' },
          high: { en: 'AI is the product', de: 'AI ist das Produkt' }
        },
        example: {
          level: 'high',
          company: 'Midjourney',
          description: { en: 'Product IS AI', de: 'Produkt IST AI' }
        },
        whyItMatters: {
          en: 'Companies where AI is the product (not a feature) scale faster. They don\'t compete on features—they compete on AI.',
          de: 'Unternehmen, bei denen AI das Produkt ist (nicht ein Feature), skalieren schneller. Sie konkurrieren nicht bei Features—sie konkurrieren bei AI.'
        }
      },
      {
        id: 'architecture',
        icon: 'Layers',
        title: { en: 'Architecture', de: 'Architektur' },
        question: { en: 'Is AI built into your architecture?', de: 'Ist AI in deine Architektur eingebaut?' },
        levels: {
          low: { en: 'No AI in tech stack', de: 'Keine AI im Tech Stack' },
          medium: { en: 'Using AI APIs (OpenAI)', de: 'AI APIs nutzen (OpenAI)' },
          high: { en: 'Proprietary AI models', de: 'Proprietäre AI-Modelle' }
        },
        example: {
          level: 'high',
          company: 'Cursor',
          description: { en: 'Proprietary AI models', de: 'Proprietäre AI-Modelle' }
        },
        whyItMatters: {
          en: 'Companies with proprietary AI models have a competitive moat. They don\'t depend on OpenAI—they build their own AI.',
          de: 'Unternehmen mit proprietären AI-Modellen haben einen Wettbewerbsvorteil. Sie hängen nicht von OpenAI ab—sie bauen ihre eigene AI.'
        }
      },
      {
        id: 'workflow',
        icon: 'Workflow',
        title: { en: 'Workflow', de: 'Workflow' },
        question: { en: 'Are your workflows AI-powered?', de: 'Sind deine Workflows AI-gestützt?' },
        levels: {
          low: { en: 'Manual workflows', de: 'Manuelle Workflows' },
          medium: { en: 'Some AI-powered workflows', de: 'Einige AI-gestützte Workflows' },
          high: { en: 'All workflows AI-orchestrated', de: 'Alle Workflows AI-orchestriert' }
        },
        example: {
          level: 'high',
          company: 'Perplexity',
          description: { en: 'AI-powered search', de: 'AI-gestützte Suche' }
        },
        whyItMatters: {
          en: 'Companies where AI orchestrates workflows (not just assists) scale faster. They don\'t need more people—AI handles coordination.',
          de: 'Unternehmen, bei denen AI Workflows orchestriert (nicht nur assistiert), skalieren schneller. Sie brauchen nicht mehr Leute—AI übernimmt Koordination.'
        }
      },
      {
        id: 'data',
        icon: 'Database',
        title: { en: 'Data', de: 'Daten' },
        question: { en: 'Do you have AI-ready data?', de: 'Hast du AI-ready Daten?' },
        levels: {
          low: { en: 'No data infrastructure', de: 'Keine Dateninfrastruktur' },
          medium: { en: 'Data warehouse (structured)', de: 'Data Warehouse (strukturiert)' },
          high: { en: 'Real-time data network effects', de: 'Echtzeit-Daten-Netzwerkeffekte' }
        },
        example: {
          level: 'high',
          company: 'Midjourney',
          description: { en: '10M+ prompts/day', de: '10M+ Prompts/Tag' }
        },
        whyItMatters: {
          en: 'Companies with data network effects have a compounding advantage. Their AI gets better every day—competitors can\'t catch up.',
          de: 'Unternehmen mit Daten-Netzwerkeffekten haben einen kumulativen Vorteil. Ihre AI wird jeden Tag besser—Wettbewerber können nicht aufholen.'
        }
      },
      {
        id: 'talent',
        icon: 'Users',
        title: { en: 'Talent', de: 'Talent' },
        question: { en: 'Do you have AI-native talent?', de: 'Hast du AI-native Talent?' },
        levels: {
          low: { en: 'No AI skills', de: 'Keine AI-Skills' },
          medium: { en: 'Some AI engineers', de: 'Einige AI-Engineers' },
          high: { en: 'AI-native team (100%)', de: 'AI-natives Team (100%)' }
        },
        example: {
          level: 'high',
          company: 'Cursor',
          description: { en: 'All engineers AI-native', de: 'Alle Engineers AI-native' }
        },
        whyItMatters: {
          en: 'Companies where everyone is AI-fluent move faster. They don\'t wait for "the AI team"—everyone builds with AI.',
          de: 'Unternehmen, in denen alle AI-fluent sind, bewegen sich schneller. Sie warten nicht auf "das AI-Team"—alle bauen mit AI.'
        }
      },
      {
        id: 'adoption',
        icon: 'TrendingUp',
        title: { en: 'Adoption', de: 'Adoption' },
        question: { en: 'Do your users adopt AI features?', de: 'Adoptieren deine User AI-Features?' },
        levels: {
          low: { en: '<20% adoption (optional)', de: '<20% Adoption (optional)' },
          medium: { en: '20-50% adoption (encouraged)', de: '20-50% Adoption (ermutigt)' },
          high: { en: '80-100% adoption (required)', de: '80-100% Adoption (erforderlich)' }
        },
        example: {
          level: 'high',
          company: 'Perplexity',
          description: { en: '100% AI-powered', de: '100% AI-gestützt' }
        },
        whyItMatters: {
          en: 'Companies where AI is required (not optional) scale faster. Their users are AI-native—they can\'t imagine using the product without AI.',
          de: 'Unternehmen, bei denen AI erforderlich ist (nicht optional), skalieren schneller. Ihre User sind AI-native—sie können sich nicht vorstellen, das Produkt ohne AI zu nutzen.'
        }
      }
    ]
  },

  findings: {
    headline: { en: 'What We Found', de: 'Was wir fanden' },
    subheadline: { en: 'Strong patterns across 47 companies', de: 'Starke Muster über 47 Unternehmen' },
    findings: [
      {
        number: 1,
        title: { en: 'Three distinct levels', de: 'Drei distinkte Stufen' },
        content: {
          en: 'AI maturity isn\'t a continuum—it\'s three distinct levels. Companies don\'t gradually improve from Level 1 to Level 3. They make a paradigm shift.',
          de: 'AI Maturity ist kein Kontinuum—es sind drei distinkte Stufen. Unternehmen verbessern sich nicht schrittweise von Level 1 zu Level 3. Sie machen einen Paradigmenwechsel.'
        }
      },
      {
        number: 2,
        title: { en: 'Strong correlation with scaling speed', de: 'Starke Korrelation mit Skalierungsgeschwindigkeit' },
        content: {
          en: 'Companies with higher AI maturity reach €100M ARR faster. The correlation is strong (r=0.89), but not causal. We can\'t prove that AI maturity causes faster scaling—but the pattern is striking.',
          de: 'Unternehmen mit höherer AI Maturity erreichen €100M ARR schneller. Die Korrelation ist stark (r=0.89), aber nicht kausal. Wir können nicht beweisen, dass AI Maturity schnellere Skalierung verursacht—aber das Muster ist auffällig.'
        }
      },
      {
        number: 3,
        title: { en: 'Revenue/employee varies dramatically', de: 'Umsatz/Mitarbeiter variiert dramatisch' },
        content: {
          en: 'Level 3 companies achieve €2M-€5M revenue/employee. Level 1 companies achieve €300K-€500K. That\'s 10x difference. Again: correlation, not causation.',
          de: 'Level 3 Unternehmen erreichen €2M-€5M Umsatz/Mitarbeiter. Level 1 Unternehmen erreichen €300K-€500K. Das ist 10x Unterschied. Nochmal: Korrelation, nicht Kausalität.'
        }
      },
      {
        number: 4,
        title: { en: 'Level 3 requires business model redesign', de: 'Level 3 erfordert Geschäftsmodell-Redesign' },
        content: {
          en: 'You can\'t incrementally improve from Level 2 to Level 3. It requires business model redesign—flat org structure, AI-powered coordination, proprietary AI models.',
          de: 'Man kann sich nicht inkrementell von Level 2 zu Level 3 verbessern. Es erfordert Geschäftsmodell-Redesign—flache Org-Struktur, AI-gestützte Koordination, proprietäre AI-Modelle.'
        }
      }
    ],
    stats: [
      { value: '47', label: { en: 'companies analyzed', de: 'Unternehmen analysiert' } },
      { value: '2021-2025', label: { en: 'time period', de: 'Zeitraum' } },
      { value: 'r=0.89', label: { en: 'correlation strength', de: 'Korrelationsstärke' } },
      { value: '8.2x', label: { en: 'faster scaling (L3 vs L1)', de: 'schnellere Skalierung (L3 vs L1)' } }
    ],
    caveat: {
      title: { en: '⚠️ Correlation ≠ Causation', de: '⚠️ Korrelation ≠ Kausalität' },
      content: {
        en: 'These are correlations, not causal relationships. We observe that companies with higher AI maturity scale faster. But we can\'t prove that AI maturity causes faster scaling. Other factors (market, timing, team) also matter.',
        de: 'Das sind Korrelationen, keine kausalen Beziehungen. Wir beobachten, dass Unternehmen mit höherer AI Maturity schneller skalieren. Aber wir können nicht beweisen, dass AI Maturity schnellere Skalierung verursacht. Andere Faktoren (Markt, Timing, Team) spielen auch eine Rolle.'
      }
    }
  },

  caseStudies: {
    headline: { en: 'AI Maturity in Action', de: 'AI Maturity in Aktion' },
    subheadline: {
      en: 'Three companies that reached Level 3 (AI-Native)',
      de: 'Drei Unternehmen, die Level 3 (AI-Native) erreicht haben'
    },
    cases: [
      {
        id: 'midjourney',
        company: 'Midjourney',
        level: 3,
        metrics: {
          revenue: '$492M',
          employees: '107',
          revenuePerEmployee: '$4.6M'
        },
        whatMakesThemLevel3: [
          { en: 'Product IS AI (image generation)', de: 'Produkt IST AI (Bildgenerierung)' },
          { en: '21M+ Discord members', de: '21M+ Discord-Mitglieder' },
          { en: 'Community-first growth', de: 'Community-first Wachstum' },
          { en: 'No traditional sales team', de: 'Kein traditionelles Sales-Team' }
        ],
        keyInsights: [
          { en: 'Community-first growth (21M+ Discord members)', de: 'Community-first Wachstum (21M+ Discord-Mitglieder)' },
          { en: 'No traditional sales team (100% self-serve)', de: 'Kein traditionelles Sales-Team (100% Self-Serve)' },
          { en: 'Flat org structure (2-3 levels)', de: 'Flache Org-Struktur (2-3 Ebenen)' },
          { en: 'AI handles coordination (not humans)', de: 'AI übernimmt Koordination (nicht Menschen)' }
        ],
        pattern: {
          en: 'Midjourney didn\'t gradually improve to Level 3. They started as Level 3—product IS AI, not AI-powered. That\'s the paradigm shift.',
          de: 'Midjourney hat sich nicht schrittweise zu Level 3 verbessert. Sie starteten als Level 3—Produkt IST AI, nicht AI-powered. Das ist der Paradigmenwechsel.'
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
          valuation: '$400M (Aug 2024)'
        },
        whatMakesThemLevel3: [
          { en: 'AI-native code editor', de: 'AI-nativer Code-Editor' },
          { en: 'Proprietary AI models (Cursor Tab)', de: 'Proprietäre AI-Modelle (Cursor Tab)' },
          { en: 'Developer-first growth', de: 'Developer-first Wachstum' },
          { en: '$400M valuation (Aug 2024)', de: '$400M Bewertung (Aug 2024)' }
        ],
        keyInsights: [
          { en: 'Developer-first growth (word-of-mouth)', de: 'Developer-first Wachstum (Word-of-Mouth)' },
          { en: 'Freemium model (free tier drives adoption)', de: 'Freemium-Modell (Free Tier treibt Adoption)' },
          { en: 'Rapid iteration (weekly updates)', de: 'Schnelle Iteration (wöchentliche Updates)' },
          { en: 'AI-powered competitive moat', de: 'AI-gestützter Wettbewerbsvorteil' }
        ],
        pattern: {
          en: 'Cursor didn\'t add AI to VS Code. They built an AI-native code editor from scratch. That\'s the difference between Level 2 and Level 3.',
          de: 'Cursor hat AI nicht zu VS Code hinzugefügt. Sie bauten einen AI-nativen Code-Editor von Grund auf. Das ist der Unterschied zwischen Level 2 und Level 3.'
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
          valuation: '$9B (2025)',
          queries: '780M/month'
        },
        whatMakesThemLevel3: [
          { en: 'AI-native search engine', de: 'AI-native Suchmaschine' },
          { en: 'The Google Challenger', de: 'Der Google-Herausforderer' },
          { en: '18x growth in 2 years', de: '18x Wachstum in 2 Jahren' },
          { en: '$9B valuation (2025)', de: '$9B Bewertung (2025)' }
        ],
        keyInsights: [
          { en: 'The Google Challenger (AI-native search)', de: 'Der Google-Herausforderer (AI-native Suche)' },
          { en: '18x growth in 2 years (2022-2024)', de: '18x Wachstum in 2 Jahren (2022-2024)' },
          { en: 'Freemium model (free tier drives adoption)', de: 'Freemium-Modell (Free Tier treibt Adoption)' },
          { en: 'AI-powered competitive moat', de: 'AI-gestützter Wettbewerbsvorteil' }
        ],
        pattern: {
          en: 'Perplexity didn\'t improve Google search. They built an AI-native search engine from scratch. That\'s the paradigm shift.',
          de: 'Perplexity hat Google Search nicht verbessert. Sie bauten eine AI-native Suchmaschine von Grund auf. Das ist der Paradigmenwechsel.'
        }
      }
    ]
  },

  implications: {
    headline: { en: 'What This Means for You', de: 'Was das für dich bedeutet' },
    subheadline: {
      en: 'Three practical implications for CEOs',
      de: 'Drei praktische Implikationen für CEOs'
    },
    items: [
      {
        number: 1,
        title: { en: 'Assess Your Current State', de: 'Bewerte deinen aktuellen Stand' },
        question: { en: 'Where are you today?', de: 'Wo stehst du heute?' },
        bullets: [
          { en: 'Is AI a feature or the product?', de: 'Ist AI ein Feature oder das Produkt?' },
          { en: 'Do we have proprietary AI models?', de: 'Haben wir proprietäre AI-Modelle?' },
          { en: 'Are our workflows AI-orchestrated?', de: 'Sind unsere Workflows AI-orchestriert?' }
        ],
        action: { en: 'Calculate your AI Maturity Index', de: 'Berechne deinen AI Maturity Index' },
        cta: {
          text: { en: 'Calculate θ_index', de: 'θ_index berechnen' },
          href: '/tools/calculate-theta'
        }
      },
      {
        number: 2,
        title: { en: 'Decide Your Ambition', de: 'Entscheide deine Ambition' },
        question: { en: 'Do you want to reach Level 3?', de: 'Willst du Level 3 erreichen?' },
        bullets: [
          { en: 'Do we want to scale 8.2x faster?', de: 'Wollen wir 8,2x schneller skalieren?' },
          { en: 'Are we willing to redesign our business model?', de: 'Sind wir bereit, unser Geschäftsmodell neu zu gestalten?' },
          { en: 'Can we build proprietary AI?', de: 'Können wir proprietäre AI bauen?' }
        ],
        action: { en: 'Book a Strategy Call', de: 'Strategy Call buchen' },
        cta: {
          text: { en: 'Book Call', de: 'Call buchen' },
          href: 'https://calendly.com/scalingx/strategy'
        }
      },
      {
        number: 3,
        title: { en: 'Build Your Roadmap', de: 'Baue deine Roadmap' },
        question: { en: 'How do you get to Level 3?', de: 'Wie kommst du zu Level 3?' },
        bullets: [
          { en: 'Level 1 → 2: 12-24 months', de: 'Level 1 → 2: 12-24 Monate' },
          { en: 'Level 2 → 3: 24-48 months', de: 'Level 2 → 3: 24-48 Monate' },
          { en: 'Total: 36-72 months', de: 'Gesamt: 36-72 Monate' }
        ],
        action: { en: 'Explore our Playbooks', de: 'Unsere Playbooks erkunden' },
        cta: {
          text: { en: 'View Playbooks', de: 'Playbooks ansehen' },
          href: '/playbooks'
        }
      }
    ]
  },

  download: {
    headline: { en: 'Get the Complete Research', de: 'Hole dir die vollständige Research' },
    subheadline: {
      en: 'Download the AI Maturity Framework (AMF v4.5.1) Executive Summary',
      de: 'Lade das AI Maturity Framework (AMF v4.5.1) Executive Summary herunter'
    },
    document: {
      title: { en: 'AI Maturity Framework v4.5.1', de: 'AI Maturity Framework v4.5.1' },
      subtitle: { en: 'Executive Summary', de: 'Executive Summary' },
      wordCount: '3,000',
      style: { en: 'HBR-style, accessible', de: 'HBR-Stil, zugänglich' },
      whatsInside: [
        { en: 'The 3 Levels (detailed)', de: 'Die 3 Stufen (detailliert)' },
        { en: 'The 6 Dimensions (measurement)', de: 'Die 6 Dimensionen (Messung)' },
        { en: 'Case Studies (Midjourney, Cursor, Perplexity)', de: 'Case Studies (Midjourney, Cursor, Perplexity)' },
        { en: 'Empirical Findings (n=47)', de: 'Empirische Erkenntnisse (n=47)' },
        { en: 'Practical Implications', de: 'Praktische Implikationen' }
      ]
    },
    cta: {
      text: { en: 'Download PDF', de: 'PDF herunterladen' },
      href: '/downloads/amf-executive-summary.pdf'
    },
    note: { en: 'Free download, no email required', de: 'Kostenloser Download, keine E-Mail erforderlich' }
  },

  finalCta: {
    headline: { en: 'What\'s Your AI Maturity?', de: 'Was ist deine AI Maturity?' },
    content: {
      en: 'Calculate your AI Maturity Index in 10 minutes.',
      de: 'Berechne deinen AI Maturity Index in 10 Minuten.'
    },
    benefits: [
      { en: 'Your AI Maturity Level (1, 2, or 3)', de: 'Dein AI Maturity Level (1, 2 oder 3)' },
      { en: 'Your 6-dimensional breakdown', de: 'Deine 6-dimensionale Aufschlüsselung' },
      { en: 'Personalized recommendations (how to improve)', de: 'Personalisierte Empfehlungen (wie du dich verbessern kannst)' },
      { en: 'Comparison with 47 companies', de: 'Vergleich mit 47 Unternehmen' }
    ],
    primaryCta: {
      text: { en: 'Calculate Your AI Maturity', de: 'Berechne deine AI Maturity' },
      href: '/tools/calculate-theta'
    },
    secondaryCta: {
      text: { en: 'Book Strategy Call', de: 'Strategy Call buchen' },
      href: 'https://calendly.com/scalingx/strategy'
    },
    subtext: { en: 'Free tool, no credit card required', de: 'Kostenloses Tool, keine Kreditkarte erforderlich' }
  }
};
