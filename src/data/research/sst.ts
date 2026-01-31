import { SSTPageData } from './types';

export const sstPageData: SSTPageData = {
  hero: {
    breadcrumb: {
      home: { en: 'Home', de: 'Home' },
      parent: { en: 'Expertise', de: 'Expertise' },
      current: { en: 'Scaling Stack Theory', de: 'Scaling Stack Theory' },
    },
    headline: {
      en: "What's Blocking Your Growth?",
      de: 'Was blockiert dein Wachstum?',
    },
    subheadline: {
      en: 'Why your weakest capability determines your scaling speed—and how to fix it',
      de: 'Warum deine schwächste Capability deine Skalierungsgeschwindigkeit bestimmt—und wie du sie behebst',
    },
    description: {
      en: "Most companies don't have a growth problem. They have a bottleneck problem. We analyzed 22 high-growth companies and found a pattern: Companies with bottlenecks (weakest capability < 0.6) scale 50% slower than companies without bottlenecks. Your weakest capability determines your scaling speed. Not your strongest. Not your average. Your weakest.",
      de: 'Die meisten Unternehmen haben kein Wachstumsproblem. Sie haben ein Bottleneck-Problem. Wir haben 22 Hypergrowth-Unternehmen analysiert und ein Muster gefunden: Unternehmen mit Bottlenecks (schwächste Capability < 0.6) skalieren 50% langsamer als Unternehmen ohne Bottlenecks. Deine schwächste Capability bestimmt deine Skalierungsgeschwindigkeit. Nicht deine stärkste. Nicht der Durchschnitt. Deine schwächste.',
    },
    stats: [
      { value: '22', label: { en: 'companies analyzed', de: 'Unternehmen analysiert' } },
      { value: '36%', label: { en: 'Setup bottleneck', de: 'Setup-Bottleneck' } },
      { value: 'r=0.72', label: { en: 'strong correlation', de: 'starke Korrelation' } },
      { value: '1.5-2.2×', label: { en: 'faster after fix', de: 'schneller nach Fix' } },
    ],
    primaryCta: {
      text: { en: 'Diagnose Your Bottleneck', de: 'Diagnostiziere deinen Bottleneck' },
      href: '/tools/bottleneck-diagnosis',
    },
    secondaryCta: {
      text: { en: 'Download Research', de: 'Research herunterladen' },
      href: '#download',
    },
  },
  bottleneckDistribution: {
    headline: {
      en: 'The Problem: Most Companies Have a Bottleneck',
      de: 'Das Problem: Die meisten Unternehmen haben einen Bottleneck',
    },
    content: {
      en: 'We analyzed 22 AI-native companies (2021-2025) and found a clear pattern. Most companies have at least one capability significantly weaker than the others. This bottleneck—the constraint that limits scaling—determines how fast a company can grow.',
      de: 'Wir haben 22 AI-native Unternehmen (2021-2025) analysiert und ein klares Muster gefunden. Die meisten Unternehmen haben mindestens eine Capability, die deutlich schwächer ist als die anderen. Dieser Bottleneck—die Beschränkung, die das Skalieren limitiert—bestimmt, wie schnell ein Unternehmen wachsen kann.',
    },
    findings: [
      {
        number: 1,
        title: { en: '68% have a bottleneck', de: '68% haben einen Bottleneck' },
        content: {
          en: 'Most companies (68%) have at least one capability below 0.6. This is their bottleneck—the constraint that limits scaling.',
          de: 'Die meisten Unternehmen (68%) haben mindestens eine Capability unter 0.6. Das ist ihr Bottleneck—die Beschränkung, die das Skalieren limitiert.',
        },
      },
      {
        number: 2,
        title: { en: 'Setup is the most common bottleneck', de: 'Setup ist der häufigste Bottleneck' },
        content: {
          en: '36% of companies have a Setup bottleneck (org structure, systems, processes). 23% Strategy, 23% Operationalization, 18% Execution.',
          de: '36% der Unternehmen haben einen Setup-Bottleneck (Org-Struktur, Systeme, Prozesse). 23% Strategy, 23% Operationalization, 18% Execution.',
        },
      },
      {
        number: 3,
        title: { en: 'Bottlenecks slow scaling by 50%', de: 'Bottlenecks verlangsamen Skalierung um 50%' },
        content: {
          en: 'Companies with bottlenecks (C_min < 0.6) take 50% longer to reach €100M ARR compared to companies without bottlenecks.',
          de: 'Unternehmen mit Bottlenecks (C_min < 0.6) brauchen 50% länger bis €100M ARR als Unternehmen ohne Bottlenecks.',
        },
      },
    ],
    chartTitle: { en: 'Bottleneck Distribution', de: 'Bottleneck-Verteilung' },
    chartData: [
      { capability: 'C₂', name: { en: 'Setup', de: 'Setup' }, percentage: 36, color: 'hsl(217, 91%, 60%)' },
      { capability: 'C₁', name: { en: 'Strategy', de: 'Strategy' }, percentage: 23, color: 'hsl(263, 70%, 50%)' },
      { capability: 'C₄', name: { en: 'Operationalization', de: 'Operationalization' }, percentage: 23, color: 'hsl(45, 93%, 47%)' },
      { capability: 'C₃', name: { en: 'Execution', de: 'Execution' }, percentage: 18, color: 'hsl(160, 84%, 39%)' },
    ],
    callout: {
      title: { en: 'The Bottleneck Principle', de: 'Das Bottleneck-Prinzip' },
      content: {
        en: 'Your scaling speed is determined by your weakest capability (C_min), not your strongest or average. Example: If C₁=0.9, C₂=0.5, C₃=0.8, C₄=0.7, then C_min=0.5 (Setup). Your scaling speed is limited by Setup, not Strategy or Execution.',
        de: 'Deine Skalierungsgeschwindigkeit wird durch deine schwächste Capability (C_min) bestimmt, nicht durch die stärkste oder den Durchschnitt. Beispiel: Wenn C₁=0.9, C₂=0.5, C₃=0.8, C₄=0.7, dann ist C_min=0.5 (Setup). Deine Skalierungsgeschwindigkeit wird durch Setup limitiert, nicht durch Strategy oder Execution.',
      },
    },
  },
  capabilities: {
    headline: { en: 'The 4 Capabilities', de: 'Die 4 Capabilities' },
    subheadline: {
      en: 'Every scaling company needs these four capabilities—and most have a bottleneck in one',
      de: 'Jedes skalierende Unternehmen braucht diese vier Capabilities—und die meisten haben einen Bottleneck in einer davon',
    },
    capabilities: [
      {
        id: 'strategy',
        symbol: 'C₁',
        name: { en: 'Strategy', de: 'Strategy' },
        tagline: { en: 'WHERE you play', de: 'WO du spielst' },
        whatItIs: [
          { en: 'Vision & positioning', de: 'Vision & Positionierung' },
          { en: 'Product-market fit', de: 'Product-Market Fit' },
          { en: 'Go-to-market strategy', de: 'Go-to-Market Strategie' },
        ],
        whyItMatters: {
          en: 'Strategy determines WHERE you play (market, segment, positioning). Without clear strategy, you\'re scaling in the wrong direction.',
          de: 'Strategy bestimmt, WO du spielst (Markt, Segment, Positionierung). Ohne klare Strategy skalierst du in die falsche Richtung.',
        },
        bottleneckPercentage: 23,
        color: 'violet',
      },
      {
        id: 'setup',
        symbol: 'C₂',
        name: { en: 'Setup', de: 'Setup' },
        tagline: { en: 'HOW you operate', de: 'WIE du operierst' },
        whatItIs: [
          { en: 'Org structure (flat, 2-3 levels)', de: 'Org-Struktur (flach, 2-3 Ebenen)' },
          { en: 'Systems & tools (AI-powered)', de: 'Systeme & Tools (AI-gestützt)' },
          { en: 'Processes (automated)', de: 'Prozesse (automatisiert)' },
        ],
        whyItMatters: {
          en: 'Setup determines HOW you operate. Traditional hierarchies (4-5 levels) create coordination bottlenecks. Manual processes slow execution.',
          de: 'Setup bestimmt, WIE du operierst. Traditionelle Hierarchien (4-5 Ebenen) erzeugen Koordinations-Bottlenecks. Manuelle Prozesse verlangsamen die Execution.',
        },
        bottleneckPercentage: 36,
        color: 'blue',
      },
      {
        id: 'execution',
        symbol: 'C₃',
        name: { en: 'Execution', de: 'Execution' },
        tagline: { en: 'HOW FAST you move', de: 'WIE SCHNELL du dich bewegst' },
        whatItIs: [
          { en: 'Speed (days, not weeks)', de: 'Geschwindigkeit (Tage, nicht Wochen)' },
          { en: 'Quality (AI-powered QA)', de: 'Qualität (AI-gestützte QA)' },
          { en: 'Iteration (weekly releases)', de: 'Iteration (wöchentliche Releases)' },
        ],
        whyItMatters: {
          en: 'Execution determines HOW FAST you move. AI-native companies execute 10x faster than traditional companies. Weekly releases, not quarterly.',
          de: 'Execution bestimmt, WIE SCHNELL du dich bewegst. AI-native Unternehmen führen 10x schneller aus als traditionelle Unternehmen. Wöchentliche Releases, nicht quartalsweise.',
        },
        bottleneckPercentage: 18,
        color: 'emerald',
      },
      {
        id: 'operationalization',
        symbol: 'C₄',
        name: { en: 'Operationalization', de: 'Operationalization' },
        tagline: { en: 'HOW SMART you get', de: 'WIE SMART du wirst' },
        whatItIs: [
          { en: 'Learning (AI-powered insights)', de: 'Lernen (AI-gestützte Insights)' },
          { en: 'Optimization (continuous)', de: 'Optimierung (kontinuierlich)' },
          { en: 'Scaling (automated)', de: 'Skalierung (automatisiert)' },
        ],
        whyItMatters: {
          en: 'Operationalization determines HOW SMART you get. AI-native companies learn 100x faster than traditional companies. Data-driven optimization, not gut feel.',
          de: 'Operationalization bestimmt, WIE SMART du wirst. AI-native Unternehmen lernen 100x schneller als traditionelle Unternehmen. Datengetriebene Optimierung, nicht Bauchgefühl.',
        },
        bottleneckPercentage: 23,
        color: 'amber',
      },
    ],
  },
  evidence: {
    headline: { en: 'The Evidence: 22 Companies', de: 'Die Evidenz: 22 Unternehmen' },
    subheadline: {
      en: 'Empirical validation of the Bottleneck Principle',
      de: 'Empirische Validierung des Bottleneck-Prinzips',
    },
    intro: {
      en: 'We analyzed 22 AI-native companies (2021-2025) to validate our theory.',
      de: 'Wir haben 22 AI-native Unternehmen (2021-2025) analysiert, um unsere Theorie zu validieren.',
    },
    findings: [
      {
        number: 1,
        title: { en: 'Strong correlation between C_min and scaling speed', de: 'Starke Korrelation zwischen C_min und Skalierungsgeschwindigkeit' },
        content: {
          en: 'The correlation between C_min (weakest capability) and Time to €100M ARR is strong (r=0.72, p<0.001). Companies with lower C_min take longer to reach €100M ARR.',
          de: 'Die Korrelation zwischen C_min (schwächste Capability) und Time to €100M ARR ist stark (r=0.72, p<0.001). Unternehmen mit niedrigerem C_min brauchen länger bis €100M ARR.',
        },
      },
      {
        number: 2,
        title: { en: 'Bottlenecks slow scaling by 50%', de: 'Bottlenecks verlangsamen Skalierung um 50%' },
        content: {
          en: 'Companies with bottlenecks (C_min < 0.6) take 50% longer to reach €100M ARR compared to companies without bottlenecks (C_min > 0.8).',
          de: 'Unternehmen mit Bottlenecks (C_min < 0.6) brauchen 50% länger bis €100M ARR als Unternehmen ohne Bottlenecks (C_min > 0.8).',
        },
      },
      {
        number: 3,
        title: { en: 'Fixing bottlenecks yields 1.5-2.2× improvement', de: 'Bottleneck-Behebung bringt 1.5-2.2× Verbesserung' },
        content: {
          en: 'Companies that fix their bottleneck (C_min: 0.4 → 0.7) improve scaling velocity by 1.5-2.2×. This is the highest ROI intervention.',
          de: 'Unternehmen, die ihren Bottleneck beheben (C_min: 0.4 → 0.7), verbessern die Skalierungsgeschwindigkeit um 1.5-2.2×. Das ist die Intervention mit dem höchsten ROI.',
        },
      },
    ],
    caveat: {
      title: { en: 'Strong Correlation, Not Causation', de: 'Starke Korrelation, keine Kausalität' },
      content: {
        en: 'We observed that companies with bottlenecks (C_min < 0.6) scale slower. The correlation is strong (r=0.72). But correlation doesn\'t prove causation. What we can say: C_min is a strong predictor of scaling speed.',
        de: 'Wir haben beobachtet, dass Unternehmen mit Bottlenecks (C_min < 0.6) langsamer skalieren. Die Korrelation ist stark (r=0.72). Aber Korrelation beweist keine Kausalität. Was wir sagen können: C_min ist ein starker Prädiktor für Skalierungsgeschwindigkeit.',
      },
    },
    chartTitle: { en: 'C_min vs. Time to €100M ARR', de: 'C_min vs. Time to €100M ARR' },
    chartAnnotation: { en: 'Bottlenecks slow scaling by 50%', de: 'Bottlenecks verlangsamen Skalierung um 50%' },
    chartData: [
      { cMin: 0.35, timeToRevenue: 72, hasBottleneck: true },
      { cMin: 0.42, timeToRevenue: 66, hasBottleneck: true },
      { cMin: 0.45, timeToRevenue: 60, hasBottleneck: true },
      { cMin: 0.48, timeToRevenue: 58, hasBottleneck: true },
      { cMin: 0.52, timeToRevenue: 54, hasBottleneck: true },
      { cMin: 0.55, timeToRevenue: 50, hasBottleneck: true },
      { cMin: 0.58, timeToRevenue: 48, hasBottleneck: true },
      { cMin: 0.62, timeToRevenue: 42, hasBottleneck: false },
      { cMin: 0.65, timeToRevenue: 38, hasBottleneck: false },
      { cMin: 0.68, timeToRevenue: 35, hasBottleneck: false },
      { cMin: 0.72, timeToRevenue: 30, hasBottleneck: false },
      { cMin: 0.75, timeToRevenue: 28, hasBottleneck: false },
      { cMin: 0.78, timeToRevenue: 24, hasBottleneck: false },
      { cMin: 0.80, timeToRevenue: 22, hasBottleneck: false },
      { cMin: 0.82, timeToRevenue: 20, hasBottleneck: false },
      { cMin: 0.85, timeToRevenue: 18, hasBottleneck: false },
      { cMin: 0.87, timeToRevenue: 16, hasBottleneck: false },
      { cMin: 0.88, timeToRevenue: 15, hasBottleneck: false },
      { cMin: 0.90, timeToRevenue: 14, hasBottleneck: false },
      { cMin: 0.91, timeToRevenue: 12, hasBottleneck: false },
      { cMin: 0.93, timeToRevenue: 10, hasBottleneck: false },
      { cMin: 0.95, timeToRevenue: 8, hasBottleneck: false },
    ],
  },
  bottleneckPrinciple: {
    headline: { en: 'The Bottleneck Principle', de: 'Das Bottleneck-Prinzip' },
    subheadline: {
      en: 'Why your weakest capability determines your scaling speed',
      de: 'Warum deine schwächste Capability deine Skalierungsgeschwindigkeit bestimmt',
    },
    formulaDisplay: 'C_min = min(C₁, C₂, C₃, C₄)',
    principle: {
      en: 'Your scaling speed is determined by your weakest capability (C_min), not your strongest or average.',
      de: 'Deine Skalierungsgeschwindigkeit wird durch deine schwächste Capability (C_min) bestimmt, nicht durch die stärkste oder den Durchschnitt.',
    },
    whyMultiplicative: {
      en: 'Capabilities are multiplicative, not additive. If one capability is weak, it drags down the entire system.',
      de: 'Capabilities sind multiplikativ, nicht additiv. Wenn eine Capability schwach ist, zieht sie das gesamte System herunter.',
    },
    example: {
      companyA: {
        scores: 'C₁=0.9, C₂=0.9, C₃=0.9, C₄=0.9',
        product: '0.66',
        label: { en: 'Strong (balanced)', de: 'Stark (ausbalanciert)' },
      },
      companyB: {
        scores: 'C₁=0.9, C₂=0.5, C₃=0.9, C₄=0.9',
        product: '0.36',
        label: { en: 'Weak (Setup bottleneck)', de: 'Schwach (Setup-Bottleneck)' },
      },
    },
    implication: {
      en: 'Fix the bottleneck, not the average. Improving C₂ from 0.5 → 0.9 yields 83% improvement. Improving C₁ from 0.9 → 1.0 yields only 11% improvement.',
      de: 'Behebe den Bottleneck, nicht den Durchschnitt. C₂ von 0.5 → 0.9 zu verbessern bringt 83% Verbesserung. C₁ von 0.9 → 1.0 zu verbessern bringt nur 11% Verbesserung.',
    },
    callout: {
      title: { en: 'Why Multiplicative, Not Additive?', de: 'Warum multiplikativ, nicht additiv?' },
      content: {
        en: 'Capabilities are multiplicative because they depend on each other: Strategy (WHERE) × Setup (HOW) × Execution (HOW FAST) × Operationalization (HOW SMART). If one is weak, the others can\'t compensate. You can\'t execute fast (C₃=0.9) if your setup is broken (C₂=0.5).',
        de: 'Capabilities sind multiplikativ, weil sie voneinander abhängen: Strategy (WO) × Setup (WIE) × Execution (WIE SCHNELL) × Operationalization (WIE SMART). Wenn eine schwach ist, können die anderen nicht kompensieren. Du kannst nicht schnell ausführen (C₃=0.9), wenn dein Setup kaputt ist (C₂=0.5).',
      },
    },
  },
  caseStudies: {
    headline: { en: 'Bottlenecks in Action', de: 'Bottlenecks in Aktion' },
    subheadline: {
      en: 'Three companies that had bottlenecks—and what happened',
      de: 'Drei Unternehmen, die Bottlenecks hatten—und was passiert ist',
    },
    cases: [
      {
        id: 'company-a',
        name: { en: 'Company A (Anonymized)', de: 'Unternehmen A (Anonymisiert)' },
        bottleneck: 'strategy',
        bottleneckName: { en: 'Strategy (C₁=0.4)', de: 'Strategy (C₁=0.4)' },
        before: {
          scores: 'C₁=0.4, C₂=0.7, C₃=0.8, C₄=0.7',
          cMin: '0.4',
          timeToRevenue: '60 months',
        },
        after: {
          fixedScore: 'C₁=0.8',
          timeToRevenue: '36 months',
          improvement: '40% faster',
        },
        problem: {
          en: 'Strong execution but weak strategy. They moved fast—in the wrong direction.',
          de: 'Starke Execution, aber schwache Strategy. Sie waren schnell—in die falsche Richtung.',
        },
        observations: [
          { en: 'Unclear market positioning (trying to serve everyone)', de: 'Unklare Marktpositionierung (versuchten, alle zu bedienen)' },
          { en: 'Weak product-market fit (high churn)', de: 'Schwacher Product-Market Fit (hohe Churn)' },
          { en: 'Unfocused GTM (too many channels)', de: 'Unfokussiertes GTM (zu viele Kanäle)' },
        ],
        fix: [
          { en: 'Narrowed positioning (focused on one segment)', de: 'Positionierung verengt (auf ein Segment fokussiert)' },
          { en: 'Improved product-market fit (reduced churn by 50%)', de: 'Product-Market Fit verbessert (Churn um 50% reduziert)' },
          { en: 'Focused GTM (2 channels instead of 5)', de: 'GTM fokussiert (2 Kanäle statt 5)' },
        ],
        result: {
          en: 'Time to €100M: 60 → 36 months (40% faster). ROI: 1.7× improvement.',
          de: 'Time to €100M: 60 → 36 Monate (40% schneller). ROI: 1.7× Verbesserung.',
        },
        roi: '1.7×',
        color: 'violet',
      },
      {
        id: 'company-b',
        name: { en: 'Company B (Anonymized)', de: 'Unternehmen B (Anonymisiert)' },
        bottleneck: 'setup',
        bottleneckName: { en: 'Setup (C₂=0.4)', de: 'Setup (C₂=0.4)' },
        before: {
          scores: 'C₁=0.8, C₂=0.4, C₃=0.7, C₄=0.7',
          cMin: '0.4',
          timeToRevenue: '60 months',
        },
        after: {
          fixedScore: 'C₂=0.8',
          timeToRevenue: '30 months',
          improvement: '50% faster',
        },
        problem: {
          en: 'Strong strategy but weak setup. They knew WHERE to play, but couldn\'t execute.',
          de: 'Starke Strategy, aber schwaches Setup. Sie wussten, WO sie spielen sollten, konnten aber nicht ausführen.',
        },
        observations: [
          { en: 'Hierarchical org structure (5 levels, slow decisions)', de: 'Hierarchische Org-Struktur (5 Ebenen, langsame Entscheidungen)' },
          { en: 'Manual processes (no automation)', de: 'Manuelle Prozesse (keine Automatisierung)' },
          { en: 'Legacy systems (no AI integration)', de: 'Legacy-Systeme (keine AI-Integration)' },
        ],
        fix: [
          { en: 'Flattened org structure (3 levels, fast decisions)', de: 'Org-Struktur verflacht (3 Ebenen, schnelle Entscheidungen)' },
          { en: 'Automated processes (AI-powered workflows)', de: 'Prozesse automatisiert (AI-gestützte Workflows)' },
          { en: 'Modern systems (AI-native tech stack)', de: 'Moderne Systeme (AI-native Tech Stack)' },
        ],
        result: {
          en: 'Time to €100M: 60 → 30 months (50% faster). ROI: 2.0× improvement.',
          de: 'Time to €100M: 60 → 30 Monate (50% schneller). ROI: 2.0× Verbesserung.',
        },
        roi: '2.0×',
        color: 'blue',
      },
      {
        id: 'company-c',
        name: { en: 'Company C (Anonymized)', de: 'Unternehmen C (Anonymisiert)' },
        bottleneck: 'execution',
        bottleneckName: { en: 'Execution (C₃=0.4)', de: 'Execution (C₃=0.4)' },
        before: {
          scores: 'C₁=0.8, C₂=0.7, C₃=0.4, C₄=0.7',
          cMin: '0.4',
          timeToRevenue: '60 months',
        },
        after: {
          fixedScore: 'C₃=0.8',
          timeToRevenue: '32 months',
          improvement: '47% faster',
        },
        problem: {
          en: 'Strong strategy and setup but weak execution. They knew WHERE and HOW, but moved too slowly.',
          de: 'Starke Strategy und Setup, aber schwache Execution. Sie wussten WO und WIE, aber waren zu langsam.',
        },
        observations: [
          { en: 'Slow decision-making (weeks, not days)', de: 'Langsame Entscheidungsfindung (Wochen, nicht Tage)' },
          { en: 'Manual QA (no automation)', de: 'Manuelle QA (keine Automatisierung)' },
          { en: 'Quarterly releases (not weekly)', de: 'Quartalsweise Releases (nicht wöchentlich)' },
        ],
        fix: [
          { en: 'Fast decision-making (days, not weeks)', de: 'Schnelle Entscheidungsfindung (Tage, nicht Wochen)' },
          { en: 'Automated QA (AI-powered testing)', de: 'Automatisierte QA (AI-gestütztes Testing)' },
          { en: 'Weekly releases (continuous deployment)', de: 'Wöchentliche Releases (Continuous Deployment)' },
        ],
        result: {
          en: 'Time to €100M: 60 → 32 months (47% faster). ROI: 1.9× improvement.',
          de: 'Time to €100M: 60 → 32 Monate (47% schneller). ROI: 1.9× Verbesserung.',
        },
        roi: '1.9×',
        color: 'emerald',
      },
    ],
  },
  implications: {
    headline: { en: 'What This Means for You', de: 'Was das für dich bedeutet' },
    subheadline: {
      en: 'Three practical implications for CEOs',
      de: 'Drei praktische Implikationen für CEOs',
    },
    items: [
      {
        number: 1,
        title: { en: 'Diagnose Your Bottleneck', de: 'Diagnostiziere deinen Bottleneck' },
        question: {
          en: 'What\'s your C_min? Which capability is your bottleneck?',
          de: 'Was ist dein C_min? Welche Capability ist dein Bottleneck?',
        },
        bullets: [
          { en: 'Score each capability 0-1 (Strategy, Setup, Execution, Operationalization)', de: 'Bewerte jede Capability 0-1 (Strategy, Setup, Execution, Operationalization)' },
          { en: 'Identify your weakest capability (C_min)', de: 'Identifiziere deine schwächste Capability (C_min)' },
          { en: 'This is your bottleneck', de: 'Das ist dein Bottleneck' },
        ],
        action: {
          en: 'Your bottleneck determines your scaling speed. Fix the bottleneck, unlock growth.',
          de: 'Dein Bottleneck bestimmt deine Skalierungsgeschwindigkeit. Behebe den Bottleneck, unlock Wachstum.',
        },
        cta: {
          text: { en: 'Diagnose Bottleneck', de: 'Bottleneck diagnostizieren' },
          href: '/tools/bottleneck-diagnosis',
        },
      },
      {
        number: 2,
        title: { en: 'Fix the Bottleneck, Not the Average', de: 'Behebe den Bottleneck, nicht den Durchschnitt' },
        question: {
          en: 'How do you fix your bottleneck?',
          de: 'Wie behebst du deinen Bottleneck?',
        },
        bullets: [
          { en: 'Focus on C_min (not average)', de: 'Fokus auf C_min (nicht Durchschnitt)' },
          { en: 'Improving C_min from 0.4 → 0.7 yields 1.5-2.2× improvement', de: 'C_min von 0.4 → 0.7 zu verbessern bringt 1.5-2.2× Verbesserung' },
          { en: 'Improving non-bottleneck capabilities yields <20% improvement', de: 'Nicht-Bottleneck-Capabilities zu verbessern bringt <20% Verbesserung' },
        ],
        action: {
          en: 'Fixing the bottleneck yields highest ROI. Don\'t spread resources—focus on the weakest.',
          de: 'Den Bottleneck zu beheben bringt den höchsten ROI. Verteile keine Ressourcen—fokussiere auf die schwächste.',
        },
        cta: {
          text: { en: 'View Playbooks', de: 'Playbooks ansehen' },
          href: '/playbooks',
        },
      },
      {
        number: 3,
        title: { en: 'Measure Progress', de: 'Messe den Fortschritt' },
        question: {
          en: 'How do you know if you fixed the bottleneck?',
          de: 'Wie weißt du, ob du den Bottleneck behoben hast?',
        },
        bullets: [
          { en: 'Re-assess capabilities after 90 days', de: 'Capabilities nach 90 Tagen neu bewerten' },
          { en: 'Measure C_min improvement (before vs. after)', de: 'C_min-Verbesserung messen (vorher vs. nachher)' },
          { en: 'Measure scaling velocity improvement', de: 'Skalierungsgeschwindigkeits-Verbesserung messen' },
        ],
        action: {
          en: 'Fixing one bottleneck often reveals another. Continuous diagnosis and improvement is key.',
          de: 'Einen Bottleneck zu beheben enthüllt oft einen anderen. Kontinuierliche Diagnose und Verbesserung ist der Schlüssel.',
        },
        cta: {
          text: { en: 'Book Strategy Call', de: 'Strategy Call buchen' },
          href: 'https://calendar.app.google/ScalingX-Strategy-Call',
        },
      },
    ],
  },
  download: {
    headline: { en: 'Get the Complete Research', de: 'Hol dir die vollständige Forschung' },
    subheadline: {
      en: 'Download the Scaling Stack Theory (SST v4.5.1) Executive Summary',
      de: 'Lade die Scaling Stack Theory (SST v4.5.1) Executive Summary herunter',
    },
    document: {
      title: { en: 'Scaling Stack Theory v4.5.1', de: 'Scaling Stack Theory v4.5.1' },
      subtitle: { en: 'Executive Summary', de: 'Executive Summary' },
      wordCount: '3,000',
      style: { en: 'HBR-style, accessible', de: 'HBR-Stil, zugänglich' },
      whatsInside: [
        { en: 'The 4 Capabilities (detailed)', de: 'Die 4 Capabilities (detailliert)' },
        { en: 'The Bottleneck Principle', de: 'Das Bottleneck-Prinzip' },
        { en: 'Case Studies (3 companies)', de: 'Case Studies (3 Unternehmen)' },
        { en: 'Empirical Evidence (n=22)', de: 'Empirische Evidenz (n=22)' },
        { en: 'How to Diagnose Bottlenecks', de: 'Wie man Bottlenecks diagnostiziert' },
      ],
    },
    cta: {
      text: { en: 'Download PDF', de: 'PDF herunterladen' },
      href: '/downloads/sst-executive-summary.pdf',
    },
    note: { en: 'Free download, no email required', de: 'Kostenloser Download, keine E-Mail erforderlich' },
  },
  finalCta: {
    headline: { en: "What's Your Bottleneck?", de: 'Was ist dein Bottleneck?' },
    content: {
      en: "Diagnose your bottleneck in 10 minutes. You'll get your 4 capability scores (C₁, C₂, C₃, C₄), your bottleneck (C_min), personalized recommendations (how to fix it), and comparison with 22 companies. Or book a Strategy Call to discuss your bottleneck.",
      de: 'Diagnostiziere deinen Bottleneck in 10 Minuten. Du erhältst deine 4 Capability-Scores (C₁, C₂, C₃, C₄), deinen Bottleneck (C_min), personalisierte Empfehlungen (wie du ihn behebst) und einen Vergleich mit 22 Unternehmen. Oder buche einen Strategy Call, um deinen Bottleneck zu besprechen.',
    },
    benefits: [
      { en: 'Your 4 capability scores (C₁, C₂, C₃, C₄)', de: 'Deine 4 Capability-Scores (C₁, C₂, C₃, C₄)' },
      { en: 'Your bottleneck (C_min)', de: 'Dein Bottleneck (C_min)' },
      { en: 'Personalized recommendations', de: 'Personalisierte Empfehlungen' },
      { en: 'Comparison with 22 companies', de: 'Vergleich mit 22 Unternehmen' },
    ],
    primaryCta: {
      text: { en: 'Diagnose Your Bottleneck', de: 'Diagnostiziere deinen Bottleneck' },
      href: '/tools/bottleneck-diagnosis',
    },
    secondaryCta: {
      text: { en: 'Book Strategy Call', de: 'Strategy Call buchen' },
      href: 'https://calendar.app.google/ScalingX-Strategy-Call',
    },
    subtext: { en: 'Free tool, no credit card required', de: 'Kostenloses Tool, keine Kreditkarte erforderlich' },
  },
};
