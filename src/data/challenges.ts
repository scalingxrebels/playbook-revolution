import { LucideIcon, TrendingUp, TrendingDown, DollarSign, Users, Workflow, Bot, Building2, Briefcase, Compass, Rocket, Target, Sparkles, BarChart3, GraduationCap, Phone } from 'lucide-react';

export type SolutionType = 'free' | 'diagnostic' | 'sprint' | 'transformation' | 'advisory';

export interface ChallengeSolution {
  id: string;
  type: SolutionType;
  icon: LucideIcon;
  nameEn: string;
  nameDe: string;
  duration: string;
  investment: string;
  impactEn: string;
  impactDe: string;
  whatWeDoEn: string[];
  whatWeDoDe: string[];
  guaranteeEn?: string;
  guaranteeDe?: string;
  roi?: string;
  relatedPlaybooks?: string[];
  relatedCases?: string[];
}

export interface Challenge {
  id: string;
  icon: LucideIcon;
  nameEn: string;
  nameDe: string;
  shortNameEn: string;
  shortNameDe: string;
  order: number;
  isDefault?: boolean;
  
  // Card content
  problemEn: string;
  problemDe: string;
  whyThisHappensHeadlineEn: string;
  whyThisHappensHeadlineDe: string;
  whyThisHappensEn: string[];
  whyThisHappensDe: string[];
  symptomsEn: string[];
  symptomsDe: string[];
  
  // CTA
  ctaTextEn: string;
  ctaTextDe: string;
  
  // Solutions
  solutions: ChallengeSolution[];
}

export const solutionTypeConfig: Record<SolutionType, { labelEn: string; labelDe: string; badge: string; colorClass: string }> = {
  free: {
    labelEn: 'Free',
    labelDe: 'Kostenlos',
    badge: 'Entry',
    colorClass: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'
  },
  diagnostic: {
    labelEn: 'Diagnostic',
    labelDe: 'Diagnose',
    badge: 'Core',
    colorClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
  },
  sprint: {
    labelEn: 'Sprint',
    labelDe: 'Sprint',
    badge: 'Premium',
    colorClass: 'bg-primary/10 text-primary border-primary/20'
  },
  transformation: {
    labelEn: 'Transformation',
    labelDe: 'Transformation',
    badge: 'Premium',
    colorClass: 'bg-accent/10 text-accent border-accent/20'
  },
  advisory: {
    labelEn: 'Advisory',
    labelDe: 'Beratung',
    badge: 'Core',
    colorClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
  }
};

export const challenges: Challenge[] = [
  // CHALLENGE 1: CAC CRISIS
  {
    id: 'cac-crisis',
    icon: TrendingUp,
    nameEn: 'CAC Crisis',
    nameDe: 'CAC Crisis',
    shortNameEn: 'CAC',
    shortNameDe: 'CAC',
    order: 1,
    problemEn: 'CAC steigt von €2K auf €5K+ (+150%). LTV/CAC sinkt von 5x auf 2.5x. Payback Period 18+ Monate. Board fordert Efficient Growth.',
    problemDe: 'CAC steigt von €2K auf €5K+ (+150%). LTV/CAC sinkt von 5x auf 2.5x. Payback Period 18+ Monate. Board fordert Efficient Growth.',
    whyThisHappensHeadlineEn: 'Your GTM strategy is unclear and your sales execution is broken.',
    whyThisHappensHeadlineDe: 'Deine GTM-Strategie ist unklar und deine Sales-Execution ist gebrochen.',
    whyThisHappensEn: [
      "You're targeting the wrong customers (unclear ICP)",
      "Your positioning is weak (no differentiation)",
      "Your sales team has no playbook (broken process)"
    ],
    whyThisHappensDe: [
      "Du zielst auf die falschen Kunden (unklarer ICP)",
      "Deine Positionierung ist schwach (keine Differenzierung)",
      "Dein Sales-Team hat kein Playbook (gebrochener Prozess)"
    ],
    symptomsEn: [
      'CAC: €2K → €5K+ (+150%)',
      'LTV/CAC: 5x → 2.5x (-50%)',
      'Payback Period: 12mo → 18mo+ (+50%)',
      "Board Pressure: 'Why so expensive?'"
    ],
    symptomsDe: [
      'CAC: €2K → €5K+ (+150%)',
      'LTV/CAC: 5x → 2.5x (-50%)',
      'Payback Period: 12mo → 18mo+ (+50%)',
      "Board Pressure: 'Warum so teuer?'"
    ],
    ctaTextEn: 'Fix CAC',
    ctaTextDe: 'CAC fixen',
    solutions: [
      {
        id: 'cac-power-up',
        type: 'sprint',
        icon: Rocket,
        nameEn: 'Power Up: Sales Velocity',
        nameDe: 'Power Up: Sales Velocity',
        duration: '30 Tage',
        investment: '€23.6K',
        impactEn: 'CAC -40-60%, Win Rate +30-50%, Sales Cycle -40-60%',
        impactDe: 'CAC -40-60%, Win Rate +30-50%, Sales Cycle -40-60%',
        whatWeDoEn: [
          'Week 1: Diagnose (ICP, Positioning, Sales Process)',
          'Week 2-3: Design (New GTM Strategy, Sales Playbook)',
          'Week 4: Deploy (Quick Wins, First Results)'
        ],
        whatWeDoDe: [
          'Woche 1: Diagnose (ICP, Positioning, Sales Process)',
          'Woche 2-3: Design (Neue GTM-Strategie, Sales Playbook)',
          'Woche 4: Deploy (Quick Wins, Erste Ergebnisse)'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '15-30x',
        relatedPlaybooks: ['gtm-execution'],
        relatedCases: ['celonis-cac-crisis']
      },
      {
        id: 'cac-boost',
        type: 'transformation',
        icon: Target,
        nameEn: 'Boost: Revenue Engine',
        nameDe: 'Boost: Revenue Engine',
        duration: '90 Tage',
        investment: '€60K-€78K',
        impactEn: 'CAC -60-75%, Win Rate +50-100%, LTV/CAC +50-100%',
        impactDe: 'CAC -60-75%, Win Rate +50-100%, LTV/CAC +50-100%',
        whatWeDoEn: [
          'Full GTM Strategy Overhaul',
          'Sales Process Redesign',
          'Team Enablement & Coaching'
        ],
        whatWeDoDe: [
          'Komplette GTM-Strategie-Überholung',
          'Sales Process Redesign',
          'Team Enablement & Coaching'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '20-50x'
      },
      {
        id: 'cac-accelerate',
        type: 'transformation',
        icon: Sparkles,
        nameEn: 'Accelerate: AI-Native Hypergrowth',
        nameDe: 'Accelerate: AI-Native Hypergrowth',
        duration: '12 Monate',
        investment: '€132K-€269K',
        impactEn: 'CAC -60-80%, Win Rate +100-200%, LTV/CAC +100-300%',
        impactDe: 'CAC -60-80%, Win Rate +100-200%, LTV/CAC +100-300%',
        whatWeDoEn: [
          'Complete GTM Transformation',
          'AI-Native Sales Infrastructure',
          'Sustainable Growth Engine'
        ],
        whatWeDoDe: [
          'Komplette GTM-Transformation',
          'AI-Native Sales-Infrastruktur',
          'Nachhaltige Wachstumsmaschine'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '30-80x'
      },
      {
        id: 'cac-report',
        type: 'diagnostic',
        icon: BarChart3,
        nameEn: 'GTM Effectiveness Report',
        nameDe: 'GTM Effectiveness Report',
        duration: '3-5 Tage',
        investment: '€3.9K-€5.9K',
        impactEn: 'CAC -40-60% Roadmap, Win Rate +30-50% Plan',
        impactDe: 'CAC -40-60% Roadmap, Win Rate +30-50% Plan',
        whatWeDoEn: [
          'Full-funnel audit',
          'Channel efficiency scoring',
          'CAC reduction playbook'
        ],
        whatWeDoDe: [
          'Full-Funnel Audit',
          'Kanal-Effizienz-Scoring',
          'CAC-Reduktions-Playbook'
        ],
        roi: '3-5x'
      },
      {
        id: 'cac-workshop',
        type: 'advisory',
        icon: GraduationCap,
        nameEn: 'Workshop: Efficient Growth',
        nameDe: 'Workshop: Efficient Growth',
        duration: '1-2 Tage',
        investment: '€9.6K-€12.9K',
        impactEn: 'Team Alignment, CAC -20-40% Roadmap, 3-5x ROI',
        impactDe: 'Team Alignment, CAC -20-40% Roadmap, 3-5x ROI',
        whatWeDoEn: [
          'Team alignment session',
          'GTM strategy workshop',
          'Action plan development'
        ],
        whatWeDoDe: [
          'Team-Alignment Session',
          'GTM-Strategie Workshop',
          'Action-Plan Entwicklung'
        ],
        roi: '3-5x'
      }
    ]
  },
  
  // CHALLENGE 2: GROWTH STALLED (DEFAULT)
  {
    id: 'growth-stalled',
    icon: TrendingDown,
    nameEn: 'Growth Stalled',
    nameDe: 'Growth Stalled',
    shortNameEn: 'Growth',
    shortNameDe: 'Growth',
    order: 2,
    isDefault: true,
    problemEn: "Growth sinkt von 150% auf 80%. Win Rate von 40% auf 20%. Pipeline stagniert. Board fragt: 'Why so slow?'",
    problemDe: "Growth sinkt von 150% auf 80%. Win Rate von 40% auf 20%. Pipeline stagniert. Board fragt: 'Why so slow?'",
    whyThisHappensHeadlineEn: "You've lost product-market fit or your GTM motion has stopped working.",
    whyThisHappensHeadlineDe: "Du hast Product-Market Fit verloren oder deine GTM-Motion funktioniert nicht mehr.",
    whyThisHappensEn: [
      "Your ICP has shifted (you're selling to the wrong people)",
      "Your competitors have caught up (no differentiation)",
      "Your sales process is outdated (what worked at €5M doesn't work at €20M)"
    ],
    whyThisHappensDe: [
      "Dein ICP hat sich verschoben (du verkaufst an die falschen Leute)",
      "Deine Wettbewerber haben aufgeholt (keine Differenzierung)",
      "Dein Sales-Prozess ist veraltet (was bei €5M funktionierte, funktioniert nicht bei €20M)"
    ],
    symptomsEn: [
      'ARR Growth: 150% → 80%',
      'Win Rate: 40% → 20%',
      'Pipeline stagniert',
      "Board fragt: 'Why so slow?'"
    ],
    symptomsDe: [
      'ARR Growth: 150% → 80%',
      'Win Rate: 40% → 20%',
      'Pipeline stagniert',
      "Board fragt: 'Why so slow?'"
    ],
    ctaTextEn: 'Fix Growth',
    ctaTextDe: 'Growth fixen',
    solutions: [
      {
        id: 'growth-power-up',
        type: 'sprint',
        icon: Rocket,
        nameEn: 'Power Up: Growth Momentum',
        nameDe: 'Power Up: Growth Momentum',
        duration: '30 Tage',
        investment: '€23.6K',
        impactEn: 'ARR Growth +50-100%, Win Rate +30-50%, Sales Cycle -30-50%',
        impactDe: 'ARR Growth +50-100%, Win Rate +30-50%, Sales Cycle -30-50%',
        whatWeDoEn: [
          'Week 1: Diagnose (ICP, Positioning, Sales Process)',
          'Week 2-3: Design (New GTM Strategy, Sales Playbook)',
          'Week 4: Deploy (Quick Wins, First Results)'
        ],
        whatWeDoDe: [
          'Woche 1: Diagnose (ICP, Positioning, Sales Process)',
          'Woche 2-3: Design (Neue GTM-Strategie, Sales Playbook)',
          'Woche 4: Deploy (Quick Wins, Erste Ergebnisse)'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '15-30x'
      },
      {
        id: 'growth-boost',
        type: 'transformation',
        icon: Target,
        nameEn: 'Boost: Market Leadership',
        nameDe: 'Boost: Market Leadership',
        duration: '90 Tage',
        investment: '€60K-€78K',
        impactEn: 'ARR Growth +100-200%, Market Share +20-30%, Category Leadership',
        impactDe: 'ARR Growth +100-200%, Market Share +20-30%, Category Leadership',
        whatWeDoEn: [
          'Market positioning overhaul',
          'Competitive strategy development',
          'GTM execution acceleration'
        ],
        whatWeDoDe: [
          'Marktpositionierungs-Überholung',
          'Wettbewerbsstrategie-Entwicklung',
          'GTM-Execution-Beschleunigung'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '20-50x'
      },
      {
        id: 'growth-accelerate',
        type: 'transformation',
        icon: Sparkles,
        nameEn: 'Accelerate: Sustainable Growth',
        nameDe: 'Accelerate: Sustainable Growth',
        duration: '12 Monate',
        investment: '€132K-€269K',
        impactEn: 'Level 2→3, θ_index +0.3-0.5, ARR Growth 150%+',
        impactDe: 'Level 2→3, θ_index +0.3-0.5, ARR Growth 150%+',
        whatWeDoEn: [
          'Full company transformation',
          'AI-native operating model',
          'Sustainable growth infrastructure'
        ],
        whatWeDoDe: [
          'Volle Company-Transformation',
          'AI-native Operating Model',
          'Nachhaltige Wachstumsinfrastruktur'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '30-80x'
      },
      {
        id: 'growth-report',
        type: 'diagnostic',
        icon: BarChart3,
        nameEn: 'GTM Effectiveness Report',
        nameDe: 'GTM Effectiveness Report',
        duration: '3-5 Tage',
        investment: '€3.9K-€5.9K',
        impactEn: 'ARR Growth +30-50% Roadmap, Win Rate +30-50% Plan',
        impactDe: 'ARR Growth +30-50% Roadmap, Win Rate +30-50% Plan',
        whatWeDoEn: [
          'Growth bottleneck analysis',
          'Market opportunity mapping',
          'Prioritized action roadmap'
        ],
        whatWeDoDe: [
          'Growth-Engpass-Analyse',
          'Marktchancen-Mapping',
          'Priorisierte Action-Roadmap'
        ],
        roi: '3-5x'
      },
      {
        id: 'growth-workshop',
        type: 'advisory',
        icon: GraduationCap,
        nameEn: 'Workshop: Velocity Regained',
        nameDe: 'Workshop: Velocity Regained',
        duration: '1-2 Tage',
        investment: '€9.6K-€12.9K',
        impactEn: 'Team Alignment, OKRs, Action Plan, 3-5x ROI',
        impactDe: 'Team Alignment, OKRs, Action Plan, 3-5x ROI',
        whatWeDoEn: [
          'Team alignment session',
          'OKR development',
          'Action plan creation'
        ],
        whatWeDoDe: [
          'Team-Alignment Session',
          'OKR-Entwicklung',
          'Action-Plan Erstellung'
        ],
        roi: '3-5x'
      }
    ]
  },
  
  // CHALLENGE 3: PRICING BREAKDOWN
  {
    id: 'pricing-breakdown',
    icon: DollarSign,
    nameEn: 'Pricing Breakdown',
    nameDe: 'Pricing Breakdown',
    shortNameEn: 'Pricing',
    shortNameDe: 'Pricing',
    order: 3,
    problemEn: "ARPU stagniert. Discounting 30%+. Gross Margin sinkt. Pricing-Strategie fehlt. Board fragt: 'Why no pricing power?'",
    problemDe: "ARPU stagniert. Discounting 30%+. Gross Margin sinkt. Pricing-Strategie fehlt. Board fragt: 'Why no pricing power?'",
    whyThisHappensHeadlineEn: "Your pricing doesn't reflect your value, and you're discounting too much.",
    whyThisHappensHeadlineDe: "Dein Pricing reflektiert nicht deinen Wert, und du gibst zu viel Rabatt.",
    whyThisHappensEn: [
      "You have no value-based pricing (cost-plus instead)",
      "Your packaging is unclear (customers don't see the value)",
      "Your sales team discounts by default (no pricing discipline)"
    ],
    whyThisHappensDe: [
      "Du hast kein Value-Based Pricing (stattdessen Cost-Plus)",
      "Dein Packaging ist unklar (Kunden sehen den Wert nicht)",
      "Dein Sales-Team gibt standardmäßig Rabatt (keine Pricing-Disziplin)"
    ],
    symptomsEn: [
      'ARPU stagniert',
      'Discounting 30%+',
      'Gross Margin sinkt',
      "Board fragt: 'Why no pricing power?'"
    ],
    symptomsDe: [
      'ARPU stagniert',
      'Discounting 30%+',
      'Gross Margin sinkt',
      "Board fragt: 'Warum keine Pricing Power?'"
    ],
    ctaTextEn: 'Fix Pricing',
    ctaTextDe: 'Pricing fixen',
    solutions: [
      {
        id: 'pricing-power-up',
        type: 'sprint',
        icon: Rocket,
        nameEn: 'Power Up: Top & Bottom Line',
        nameDe: 'Power Up: Top & Bottom Line',
        duration: '30 Tage',
        investment: '€23.6K',
        impactEn: 'ARPU +30-50%, Gross Margin +10-15pp, Discounting -30-50%',
        impactDe: 'ARPU +30-50%, Gross Margin +10-15pp, Discounting -30-50%',
        whatWeDoEn: [
          'Value driver analysis',
          'Pricing architecture redesign',
          'Sales enablement on pricing'
        ],
        whatWeDoDe: [
          'Value-Driver Analyse',
          'Pricing-Architektur Redesign',
          'Sales Enablement für Pricing'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '15-30x'
      },
      {
        id: 'pricing-boost',
        type: 'transformation',
        icon: Target,
        nameEn: 'Boost: Pricing Power',
        nameDe: 'Boost: Pricing Power',
        duration: '90 Tage',
        investment: '€60K-€78K',
        impactEn: 'ARPU +50-100%, Gross Margin +15-20pp, Pricing Discipline',
        impactDe: 'ARPU +50-100%, Gross Margin +15-20pp, Pricing-Disziplin',
        whatWeDoEn: [
          'Complete pricing strategy overhaul',
          'Packaging redesign',
          'Team training & enablement'
        ],
        whatWeDoDe: [
          'Komplette Pricing-Strategie-Überholung',
          'Packaging Redesign',
          'Team-Training & Enablement'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '20-50x'
      },
      {
        id: 'pricing-accelerate',
        type: 'transformation',
        icon: Sparkles,
        nameEn: 'Accelerate: Competitive Advantage',
        nameDe: 'Accelerate: Competitive Advantage',
        duration: '12 Monate',
        investment: '€132K-€269K',
        impactEn: 'Level 2→3, ARPU +100-200%, Market Leadership',
        impactDe: 'Level 2→3, ARPU +100-200%, Market Leadership',
        whatWeDoEn: [
          'Full monetization transformation',
          'Value-based pricing mastery',
          'Sustainable competitive advantage'
        ],
        whatWeDoDe: [
          'Volle Monetarisierungs-Transformation',
          'Value-Based Pricing Meisterschaft',
          'Nachhaltiger Wettbewerbsvorteil'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '30-80x'
      },
      {
        id: 'pricing-report',
        type: 'diagnostic',
        icon: BarChart3,
        nameEn: 'Pricing & Packaging Review',
        nameDe: 'Pricing & Packaging Review',
        duration: '3-5 Tage',
        investment: '€3.9K-€5.9K',
        impactEn: 'ARPU +30-50% Roadmap, Pricing Strategy',
        impactDe: 'ARPU +30-50% Roadmap, Pricing-Strategie',
        whatWeDoEn: [
          'Current pricing analysis',
          'Competitive benchmarking',
          'Optimization roadmap'
        ],
        whatWeDoDe: [
          'Aktuelle Pricing-Analyse',
          'Wettbewerbs-Benchmarking',
          'Optimierungs-Roadmap'
        ],
        roi: '3-5x'
      },
      {
        id: 'pricing-workshop',
        type: 'advisory',
        icon: GraduationCap,
        nameEn: 'Workshop: Pricing Power',
        nameDe: 'Workshop: Pricing Power',
        duration: '1-2 Tage',
        investment: '€9.6K-€12.9K',
        impactEn: 'Team Alignment, Pricing Framework, 3-5x ROI',
        impactDe: 'Team Alignment, Pricing Framework, 3-5x ROI',
        whatWeDoEn: [
          'Team alignment session',
          'Pricing framework development',
          'Implementation planning'
        ],
        whatWeDoDe: [
          'Team-Alignment Session',
          'Pricing-Framework Entwicklung',
          'Implementierungs-Planung'
        ],
        roi: '3-5x'
      }
    ]
  },
  
  // CHALLENGE 4: CUSTOMER SUCCESS BROKEN
  {
    id: 'customer-success-broken',
    icon: Users,
    nameEn: 'Customer Success Broken',
    nameDe: 'Customer Success Broken',
    shortNameEn: 'CS',
    shortNameDe: 'CS',
    order: 4,
    problemEn: "Churn 15% → 25%. NRR 90%. Expansion Revenue fehlt. Onboarding schwach. Board fragt: 'Why can't we retain?'",
    problemDe: "Churn 15% → 25%. NRR 90%. Expansion Revenue fehlt. Onboarding schwach. Board fragt: 'Why can't we retain?'",
    whyThisHappensHeadlineEn: "You're not delivering value after the sale, and customers are churning.",
    whyThisHappensHeadlineDe: "Du lieferst keinen Wert nach dem Verkauf, und Kunden churnen.",
    whyThisHappensEn: [
      "Your onboarding is weak (customers don't see value fast enough)",
      "Your product adoption is low (customers don't use key features)",
      "You have no expansion playbook (you're not growing accounts)"
    ],
    whyThisHappensDe: [
      "Dein Onboarding ist schwach (Kunden sehen Wert nicht schnell genug)",
      "Deine Produkt-Adoption ist niedrig (Kunden nutzen wichtige Features nicht)",
      "Du hast kein Expansion-Playbook (du wächst Accounts nicht)"
    ],
    symptomsEn: [
      'Churn: 15% → 25%',
      'NRR: 90%',
      'Expansion Revenue fehlt',
      "Board fragt: 'Why can't we retain?'"
    ],
    symptomsDe: [
      'Churn: 15% → 25%',
      'NRR: 90%',
      'Expansion Revenue fehlt',
      "Board fragt: 'Warum können wir nicht halten?'"
    ],
    ctaTextEn: 'Fix Retention',
    ctaTextDe: 'Retention fixen',
    solutions: [
      {
        id: 'cs-power-up',
        type: 'sprint',
        icon: Rocket,
        nameEn: 'Power Up: NRR Boost',
        nameDe: 'Power Up: NRR Boost',
        duration: '30 Tage',
        investment: '€23.6K',
        impactEn: 'Churn -30-50%, NRR +20-30pp, Expansion Revenue +30-50%',
        impactDe: 'Churn -30-50%, NRR +20-30pp, Expansion Revenue +30-50%',
        whatWeDoEn: [
          'Churn root cause analysis',
          'Quick-win interventions',
          'Expansion opportunity mapping'
        ],
        whatWeDoDe: [
          'Churn Root-Cause Analyse',
          'Quick-Win Interventionen',
          'Expansion-Opportunity Mapping'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '15-30x'
      },
      {
        id: 'cs-boost',
        type: 'transformation',
        icon: Target,
        nameEn: 'Boost: Net Retention',
        nameDe: 'Boost: Net Retention',
        duration: '90 Tage',
        investment: '€60K-€78K',
        impactEn: 'Churn -50-75%, NRR +30-50pp, Customer LTV +50-100%',
        impactDe: 'Churn -50-75%, NRR +30-50pp, Customer LTV +50-100%',
        whatWeDoEn: [
          'CS operating model redesign',
          'Health scoring implementation',
          'Expansion playbook development'
        ],
        whatWeDoDe: [
          'CS Operating Model Redesign',
          'Health-Scoring Implementierung',
          'Expansion-Playbook Entwicklung'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '20-50x'
      },
      {
        id: 'cs-accelerate',
        type: 'transformation',
        icon: Sparkles,
        nameEn: 'Accelerate: Customer Base Growth',
        nameDe: 'Accelerate: Customer Base Growth',
        duration: '12 Monate',
        investment: '€132K-€269K',
        impactEn: 'Level 2→3, Churn -70-90%, NRR 120%+',
        impactDe: 'Level 2→3, Churn -70-90%, NRR 120%+',
        whatWeDoEn: [
          'Full CS transformation',
          'Customer success engine build',
          'Sustainable retention infrastructure'
        ],
        whatWeDoDe: [
          'Volle CS-Transformation',
          'Customer Success Engine Aufbau',
          'Nachhaltige Retention-Infrastruktur'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '30-80x'
      },
      {
        id: 'cs-report',
        type: 'diagnostic',
        icon: BarChart3,
        nameEn: 'Customer Success Audit',
        nameDe: 'Customer Success Audit',
        duration: '3-5 Tage',
        investment: '€3.9K-€5.9K',
        impactEn: 'Churn -30-50% Roadmap, NRR +20-30pp Plan',
        impactDe: 'Churn -30-50% Roadmap, NRR +20-30pp Plan',
        whatWeDoEn: [
          'Churn pattern analysis',
          'Customer health assessment',
          'Improvement roadmap'
        ],
        whatWeDoDe: [
          'Churn-Muster-Analyse',
          'Customer Health Assessment',
          'Verbesserungs-Roadmap'
        ],
        roi: '3-5x'
      },
      {
        id: 'cs-workshop',
        type: 'advisory',
        icon: GraduationCap,
        nameEn: 'Workshop: Retention Mastered',
        nameDe: 'Workshop: Retention Mastered',
        duration: '1-2 Tage',
        investment: '€9.6K-€12.9K',
        impactEn: 'Team Alignment, CS Playbook, 3-5x ROI',
        impactDe: 'Team Alignment, CS Playbook, 3-5x ROI',
        whatWeDoEn: [
          'Team alignment session',
          'CS playbook development',
          'Action plan creation'
        ],
        whatWeDoDe: [
          'Team-Alignment Session',
          'CS-Playbook Entwicklung',
          'Action-Plan Erstellung'
        ],
        roi: '3-5x'
      }
    ]
  },
  
  // CHALLENGE 5: SCALING CHAOS
  {
    id: 'scaling-chaos',
    icon: Workflow,
    nameEn: 'Scaling Chaos',
    nameDe: 'Scaling Chaos',
    shortNameEn: 'Ops',
    shortNameDe: 'Ops',
    order: 5,
    problemEn: "Decision Velocity 1 Tag → 7 Tage. Meetings +300%. Coordination Cost explodiert. Prozesse brechen. Board fragt: 'Why so slow?'",
    problemDe: "Decision Velocity 1 Tag → 7 Tage. Meetings +300%. Coordination Cost explodiert. Prozesse brechen. Board fragt: 'Why so slow?'",
    whyThisHappensHeadlineEn: "Your organization wasn't built to scale, and processes are breaking.",
    whyThisHappensHeadlineDe: "Deine Organisation wurde nicht für Skalierung gebaut, und Prozesse brechen.",
    whyThisHappensEn: [
      "Your org structure is flat (no clear reporting lines)",
      "Your processes are manual (no systems)",
      "Decisions take forever (no decision framework)"
    ],
    whyThisHappensDe: [
      "Deine Org-Struktur ist flach (keine klaren Reporting-Lines)",
      "Deine Prozesse sind manuell (keine Systeme)",
      "Entscheidungen dauern ewig (kein Decision Framework)"
    ],
    symptomsEn: [
      'Decision Velocity: 1 Tag → 7 Tage',
      'Meetings +300%',
      'Coordination Cost explodiert',
      "Board fragt: 'Why so slow?'"
    ],
    symptomsDe: [
      'Decision Velocity: 1 Tag → 7 Tage',
      'Meetings +300%',
      'Coordination Cost explodiert',
      "Board fragt: 'Warum so langsam?'"
    ],
    ctaTextEn: 'Fix Chaos',
    ctaTextDe: 'Chaos fixen',
    solutions: [
      {
        id: 'ops-power-up',
        type: 'sprint',
        icon: Rocket,
        nameEn: 'Power Up: Scaling Velocity',
        nameDe: 'Power Up: Scaling Velocity',
        duration: '30 Tage',
        investment: '€23.6K',
        impactEn: 'Decision Velocity +50-100%, Coordination Cost -30-50%, ARR/Employee +30-50%',
        impactDe: 'Decision Velocity +50-100%, Coordination Cost -30-50%, ARR/Employee +30-50%',
        whatWeDoEn: [
          'Process bottleneck analysis',
          'Quick-win automation',
          'Decision framework implementation'
        ],
        whatWeDoDe: [
          'Prozess-Engpass-Analyse',
          'Quick-Win Automatisierung',
          'Decision Framework Implementierung'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '15-30x'
      },
      {
        id: 'ops-boost',
        type: 'transformation',
        icon: Target,
        nameEn: 'Boost: Operations Excellence',
        nameDe: 'Boost: Operations Excellence',
        duration: '90 Tage',
        investment: '€60K-€78K',
        impactEn: 'Decision Velocity +100-200%, ARR/Employee +50-100%, Operational Debt -40-60%',
        impactDe: 'Decision Velocity +100-200%, ARR/Employee +50-100%, Operational Debt -40-60%',
        whatWeDoEn: [
          'Operating model redesign',
          'Process automation at scale',
          'Team structure optimization'
        ],
        whatWeDoDe: [
          'Operating Model Redesign',
          'Prozess-Automatisierung at Scale',
          'Team-Struktur Optimierung'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '20-50x'
      },
      {
        id: 'ops-accelerate',
        type: 'transformation',
        icon: Sparkles,
        nameEn: 'Accelerate: AI-Native Scaling',
        nameDe: 'Accelerate: AI-Native Scaling',
        duration: '12 Monate',
        investment: '€132K-€269K',
        impactEn: 'Level 2→3, Decision Velocity +40x (7d→4h), ARR/Employee +167%',
        impactDe: 'Level 2→3, Decision Velocity +40x (7d→4h), ARR/Employee +167%',
        whatWeDoEn: [
          'Full operational transformation',
          'AI-native operating model',
          'Sustainable scaling infrastructure'
        ],
        whatWeDoDe: [
          'Volle operative Transformation',
          'AI-native Operating Model',
          'Nachhaltige Skalierungs-Infrastruktur'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '30-80x'
      },
      {
        id: 'ops-report',
        type: 'diagnostic',
        icon: BarChart3,
        nameEn: 'Scaling Readiness Assessment',
        nameDe: 'Scaling Readiness Assessment',
        duration: '3-5 Tage',
        investment: '€3.9K-€5.9K',
        impactEn: 'Decision Velocity +50-100% Roadmap, Scaling Plan',
        impactDe: 'Decision Velocity +50-100% Roadmap, Scaling Plan',
        whatWeDoEn: [
          'Process mapping',
          'Bottleneck identification',
          'Scaling roadmap'
        ],
        whatWeDoDe: [
          'Prozess-Mapping',
          'Engpass-Identifikation',
          'Scaling Roadmap'
        ],
        roi: '3-5x'
      },
      {
        id: 'ops-workshop',
        type: 'advisory',
        icon: GraduationCap,
        nameEn: 'Workshop: Operational Excellence',
        nameDe: 'Workshop: Operational Excellence',
        duration: '1-2 Tage',
        investment: '€9.6K-€12.9K',
        impactEn: 'Team Alignment, Process Framework, 3-5x ROI',
        impactDe: 'Team Alignment, Process Framework, 3-5x ROI',
        whatWeDoEn: [
          'Team alignment session',
          'Process framework development',
          'Action plan creation'
        ],
        whatWeDoDe: [
          'Team-Alignment Session',
          'Prozess-Framework Entwicklung',
          'Action-Plan Erstellung'
        ],
        roi: '3-5x'
      }
    ]
  },
  
  // CHALLENGE 6: AI TRANSFORMATION
  {
    id: 'ai-transformation',
    icon: Bot,
    nameEn: 'AI Transformation',
    nameDe: 'AI Transformation',
    shortNameEn: 'AI',
    shortNameDe: 'AI',
    order: 6,
    problemEn: "θ_index 0.3. ARR/Employee €200K. AI-native Competitors skalieren 5-10x schneller. Board fragt: 'Why are we behind?'",
    problemDe: "θ_index 0.3. ARR/Employee €200K. AI-native Competitors skalieren 5-10x schneller. Board fragt: 'Why are we behind?'",
    whyThisHappensHeadlineEn: "You're still running like a traditional company while competitors are AI-native.",
    whyThisHappensHeadlineDe: "Du arbeitest immer noch wie ein traditionelles Unternehmen, während Wettbewerber AI-native sind.",
    whyThisHappensEn: [
      "You have no AI strategy (ad-hoc tool usage)",
      "Your team lacks AI skills (no training)",
      "Your systems aren't built for AI (no data infrastructure)"
    ],
    whyThisHappensDe: [
      "Du hast keine AI-Strategie (ad-hoc Tool-Nutzung)",
      "Deinem Team fehlen AI Skills (kein Training)",
      "Deine Systeme sind nicht für AI gebaut (keine Dateninfrastruktur)"
    ],
    symptomsEn: [
      'θ_index: 0.3',
      'ARR/Employee: €200K',
      'AI-native Competitors 5-10x schneller',
      "Board fragt: 'Why are we behind?'"
    ],
    symptomsDe: [
      'θ_index: 0.3',
      'ARR/Employee: €200K',
      'AI-native Competitors 5-10x schneller',
      "Board fragt: 'Warum hinken wir hinterher?'"
    ],
    ctaTextEn: 'Go AI-Native',
    ctaTextDe: 'AI-Native werden',
    solutions: [
      {
        id: 'ai-power-up',
        type: 'sprint',
        icon: Rocket,
        nameEn: 'Power Up: AI Transformation',
        nameDe: 'Power Up: AI Transformation',
        duration: '30 Tage',
        investment: '€23.6K',
        impactEn: 'θ_index +0.1-0.2, AI Use Cases 3-5 live, Quick Wins',
        impactDe: 'θ_index +0.1-0.2, AI Use Cases 3-5 live, Quick Wins',
        whatWeDoEn: [
          'AI opportunity mapping',
          'Quick-win implementation',
          'Team enablement basics'
        ],
        whatWeDoDe: [
          'AI-Opportunity Mapping',
          'Quick-Win Implementierung',
          'Team Enablement Basics'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '15-30x'
      },
      {
        id: 'ai-boost',
        type: 'transformation',
        icon: Target,
        nameEn: 'Boost: AI-Native Scaling',
        nameDe: 'Boost: AI-Native Scaling',
        duration: '90 Tage',
        investment: '€60K-€78K',
        impactEn: 'θ_index +0.3-0.4, AI Workflows live, Efficiency +30-50%',
        impactDe: 'θ_index +0.3-0.4, AI Workflows live, Effizienz +30-50%',
        whatWeDoEn: [
          'AI workflow implementation',
          'Data infrastructure setup',
          'Team training program'
        ],
        whatWeDoDe: [
          'AI-Workflow Implementierung',
          'Dateninfrastruktur-Setup',
          'Team-Training Programm'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '20-50x'
      },
      {
        id: 'ai-accelerate',
        type: 'transformation',
        icon: Sparkles,
        nameEn: 'Accelerate: AI-Native Scaling (Velocity)',
        nameDe: 'Accelerate: AI-Native Scaling (Velocity)',
        duration: '12 Monate',
        investment: '€132K-€269K',
        impactEn: 'θ_index +0.5-0.7, Company-wide AI, ARR/Employee +100-200%',
        impactDe: 'θ_index +0.5-0.7, Company-wide AI, ARR/Employee +100-200%',
        whatWeDoEn: [
          'Full AI transformation',
          'Company-wide AI adoption',
          'AI-native operating model'
        ],
        whatWeDoDe: [
          'Volle AI-Transformation',
          'Company-wide AI Adoption',
          'AI-native Operating Model'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '30-80x'
      },
      {
        id: 'ai-report',
        type: 'diagnostic',
        icon: BarChart3,
        nameEn: 'AI Maturity Assessment',
        nameDe: 'AI Maturity Assessment',
        duration: '3-5 Tage',
        investment: '€3.9K-€5.9K',
        impactEn: 'θ_index Score, AI Roadmap, Transformation Plan',
        impactDe: 'θ_index Score, AI Roadmap, Transformation Plan',
        whatWeDoEn: [
          'AI maturity scoring',
          'Opportunity mapping',
          'Prioritized roadmap'
        ],
        whatWeDoDe: [
          'AI-Maturity Scoring',
          'Opportunity Mapping',
          'Priorisierte Roadmap'
        ],
        roi: '3-5x'
      },
      {
        id: 'ai-workshop',
        type: 'advisory',
        icon: GraduationCap,
        nameEn: 'Workshop: AI Levers',
        nameDe: 'Workshop: AI Levers',
        duration: '1-2 Tage',
        investment: '€9.6K-€12.9K',
        impactEn: 'Team Alignment, AI Strategy, 3-5x ROI',
        impactDe: 'Team Alignment, AI Strategy, 3-5x ROI',
        whatWeDoEn: [
          'AI strategy development',
          'Use case prioritization',
          'Implementation planning'
        ],
        whatWeDoDe: [
          'AI-Strategie Entwicklung',
          'Use-Case Priorisierung',
          'Implementierungs-Planung'
        ],
        roi: '3-5x'
      }
    ]
  },
  
  // CHALLENGE 7: BOARD PRESSURE
  {
    id: 'board-pressure',
    icon: Building2,
    nameEn: 'Board Pressure',
    nameDe: 'Board Pressure',
    shortNameEn: 'Board',
    shortNameDe: 'Board',
    order: 7,
    problemEn: "Board fragt: 'What's the plan?' Metrics unklar. Strategic Narrative fehlt. Kommunikation reaktiv. Board Confidence niedrig.",
    problemDe: "Board fragt: 'What's the plan?' Metrics unklar. Strategic Narrative fehlt. Kommunikation reaktiv. Board Confidence niedrig.",
    whyThisHappensHeadlineEn: "Your board doesn't understand your strategy, and you can't explain it clearly.",
    whyThisHappensHeadlineDe: "Dein Board versteht deine Strategie nicht, und du kannst sie nicht klar erklären.",
    whyThisHappensEn: [
      "You have no strategic narrative (no clear plan)",
      "Your metrics are unclear (board can't see progress)",
      "You're reactive (no proactive communication)"
    ],
    whyThisHappensDe: [
      "Du hast kein strategisches Narrativ (kein klarer Plan)",
      "Deine Metrics sind unklar (Board kann Fortschritt nicht sehen)",
      "Du bist reaktiv (keine proaktive Kommunikation)"
    ],
    symptomsEn: [
      "Board fragt: 'What's the plan?'",
      'Metrics unklar',
      'Strategic Narrative fehlt',
      'Board Confidence niedrig'
    ],
    symptomsDe: [
      "Board fragt: 'What's the plan?'",
      'Metrics unklar',
      'Strategic Narrative fehlt',
      'Board Confidence niedrig'
    ],
    ctaTextEn: 'Get Board-Ready',
    ctaTextDe: 'Board-Ready werden',
    solutions: [
      {
        id: 'board-power-up',
        type: 'sprint',
        icon: Rocket,
        nameEn: 'Power Up: Board Governance',
        nameDe: 'Power Up: Board Governance',
        duration: '30 Tage',
        investment: '€23.6K',
        impactEn: 'Board Confidence +30-50%, Strategic Clarity, Decision Framework',
        impactDe: 'Board Confidence +30-50%, Strategic Clarity, Decision Framework',
        whatWeDoEn: [
          'Board communication audit',
          'Strategic narrative development',
          'Governance framework setup'
        ],
        whatWeDoDe: [
          'Board-Kommunikations-Audit',
          'Strategisches Narrativ Entwicklung',
          'Governance Framework Setup'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '15-30x'
      },
      {
        id: 'board-boost',
        type: 'transformation',
        icon: Target,
        nameEn: 'Boost: Board Framework',
        nameDe: 'Boost: Board Framework',
        duration: '90 Tage',
        investment: '€60K-€78K',
        impactEn: 'Board Confidence +50-100%, Governance System, Board Alignment',
        impactDe: 'Board Confidence +50-100%, Governance System, Board Alignment',
        whatWeDoEn: [
          'Full governance system design',
          'Board reporting optimization',
          'Strategic alignment process'
        ],
        whatWeDoDe: [
          'Vollständiges Governance-System Design',
          'Board Reporting Optimierung',
          'Strategic Alignment Prozess'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '20-50x'
      },
      {
        id: 'board-accelerate',
        type: 'transformation',
        icon: Sparkles,
        nameEn: 'Accelerate: Strategic Confidence',
        nameDe: 'Accelerate: Strategic Confidence',
        duration: '12 Monate',
        investment: '€132K-€269K',
        impactEn: 'Level 2→3, Board Confidence +100%, Strategic Leadership',
        impactDe: 'Level 2→3, Board Confidence +100%, Strategic Leadership',
        whatWeDoEn: [
          'Full strategic transformation',
          'Board-level advisory',
          'Sustainable governance infrastructure'
        ],
        whatWeDoDe: [
          'Volle strategische Transformation',
          'Board-Level Advisory',
          'Nachhaltige Governance-Infrastruktur'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '30-80x'
      },
      {
        id: 'board-report',
        type: 'diagnostic',
        icon: BarChart3,
        nameEn: 'Board Decision Memo',
        nameDe: 'Board Decision Memo',
        duration: '5-7 Tage',
        investment: '€3.9K',
        impactEn: 'Board-Ready Report, Decision Framework, Options Analysis',
        impactDe: 'Board-Ready Report, Decision Framework, Options Analysis',
        whatWeDoEn: [
          'Situation analysis',
          'Options development',
          'Board-ready presentation'
        ],
        whatWeDoDe: [
          'Situations-Analyse',
          'Options-Entwicklung',
          'Board-Ready Präsentation'
        ],
        roi: '3-5x'
      },
      {
        id: 'board-workshop',
        type: 'advisory',
        icon: GraduationCap,
        nameEn: 'Workshop: Board-Ready Strategy',
        nameDe: 'Workshop: Board-Ready Strategy',
        duration: '1-2 Tage',
        investment: '€9.6K-€12.9K',
        impactEn: 'Team Alignment, Board Narrative, 3-5x ROI',
        impactDe: 'Team Alignment, Board Narrative, 3-5x ROI',
        whatWeDoEn: [
          'Strategic narrative workshop',
          'Board communication training',
          'Action plan development'
        ],
        whatWeDoDe: [
          'Strategisches Narrativ Workshop',
          'Board-Kommunikations-Training',
          'Action-Plan Entwicklung'
        ],
        roi: '3-5x'
      }
    ]
  },
  
  // CHALLENGE 8: PORTFOLIO PERFORMANCE
  {
    id: 'portfolio-performance',
    icon: Briefcase,
    nameEn: 'Portfolio Performance',
    nameDe: 'Portfolio Performance',
    shortNameEn: 'Portfolio',
    shortNameDe: 'Portfolio',
    order: 8,
    problemEn: "5-10 Companies ohne systematischen Ansatz. Keine Priorisierung. Keine Playbooks. Portfolio Value erodiert. LPs fragen: 'What's the plan?'",
    problemDe: "5-10 Companies ohne systematischen Ansatz. Keine Priorisierung. Keine Playbooks. Portfolio Value erodiert. LPs fragen: 'What's the plan?'",
    whyThisHappensHeadlineEn: "You're managing 5-10 companies without a systematic approach.",
    whyThisHappensHeadlineDe: "Du managst 5-10 Companies ohne systematischen Ansatz.",
    whyThisHappensEn: [
      "You have no prioritization framework (treating all companies equally)",
      "No standardized playbooks (reinventing the wheel)",
      "No portfolio-level metrics (can't see the big picture)"
    ],
    whyThisHappensDe: [
      "Du hast kein Priorisierungs-Framework (behandelst alle Companies gleich)",
      "Keine standardisierten Playbooks (das Rad neu erfinden)",
      "Keine Portfolio-Level Metrics (kannst das große Bild nicht sehen)"
    ],
    symptomsEn: [
      '5-10 Companies ohne System',
      'Keine Priorisierung',
      'Portfolio Value erodiert',
      "LPs fragen: 'What's the plan?'"
    ],
    symptomsDe: [
      '5-10 Companies ohne System',
      'Keine Priorisierung',
      'Portfolio Value erodiert',
      "LPs fragen: 'What's the plan?'"
    ],
    ctaTextEn: 'Transform Portfolio',
    ctaTextDe: 'Portfolio transformieren',
    solutions: [
      {
        id: 'portfolio-power-up',
        type: 'sprint',
        icon: Rocket,
        nameEn: 'Power Up: Portfolio Performance',
        nameDe: 'Power Up: Portfolio Performance',
        duration: '30 Tage',
        investment: '€23.6K',
        impactEn: 'Portfolio Clarity, Prioritization Framework, Quick Wins',
        impactDe: 'Portfolio Clarity, Priorisierungs-Framework, Quick Wins',
        whatWeDoEn: [
          'Portfolio assessment',
          'Prioritization framework',
          'Quick-win interventions'
        ],
        whatWeDoDe: [
          'Portfolio Assessment',
          'Priorisierungs-Framework',
          'Quick-Win Interventionen'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '15-30x'
      },
      {
        id: 'portfolio-boost',
        type: 'transformation',
        icon: Target,
        nameEn: 'Boost: Portfolio Excellence',
        nameDe: 'Boost: Portfolio Excellence',
        duration: '90 Tage',
        investment: '€60K-€78K',
        impactEn: '5-10 Companies transformed, Portfolio Value +20-30%',
        impactDe: '5-10 Companies transformiert, Portfolio Value +20-30%',
        whatWeDoEn: [
          'Portfolio operating model',
          'Company-level interventions',
          'Best practice implementation'
        ],
        whatWeDoDe: [
          'Portfolio Operating Model',
          'Company-Level Interventionen',
          'Best Practice Implementierung'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '20-50x'
      },
      {
        id: 'portfolio-accelerate',
        type: 'transformation',
        icon: Sparkles,
        nameEn: 'Accelerate: Portfolio Performance (ROI)',
        nameDe: 'Accelerate: Portfolio Performance (ROI)',
        duration: '12 Monate',
        investment: '€360K-€720K',
        impactEn: '10-15 Companies transformed, Portfolio Value +100-500%',
        impactDe: '10-15 Companies transformiert, Portfolio Value +100-500%',
        whatWeDoEn: [
          'Full portfolio transformation',
          'Systematic value creation',
          'LP-ready reporting'
        ],
        whatWeDoDe: [
          'Volle Portfolio-Transformation',
          'Systematische Value Creation',
          'LP-Ready Reporting'
        ],
        guaranteeEn: '2 of 3 or 50% refund',
        guaranteeDe: '2 von 3 oder 50% Erstattung',
        roi: '30-80x'
      },
      {
        id: 'portfolio-report',
        type: 'diagnostic',
        icon: BarChart3,
        nameEn: 'Portfolio Assessment',
        nameDe: 'Portfolio Assessment',
        duration: '2-3 Wochen',
        investment: '€50K-€80K',
        impactEn: 'Portfolio Report, Company Scorecards, Prioritization Matrix',
        impactDe: 'Portfolio Report, Company Scorecards, Priorisierungs-Matrix',
        whatWeDoEn: [
          'Full portfolio analysis',
          'Company-level scorecards',
          'Strategic recommendations'
        ],
        whatWeDoDe: [
          'Volle Portfolio-Analyse',
          'Company-Level Scorecards',
          'Strategische Empfehlungen'
        ],
        roi: '3-5x'
      },
      {
        id: 'portfolio-workshop',
        type: 'advisory',
        icon: GraduationCap,
        nameEn: 'Workshop: Portfolio Strategy',
        nameDe: 'Workshop: Portfolio Strategy',
        duration: '1-2 Tage',
        investment: '€9.6K-€12.9K',
        impactEn: 'Team Alignment, Portfolio Playbook, 3-5x ROI',
        impactDe: 'Team Alignment, Portfolio Playbook, 3-5x ROI',
        whatWeDoEn: [
          'Portfolio strategy workshop',
          'Playbook development',
          'Action plan creation'
        ],
        whatWeDoDe: [
          'Portfolio-Strategie Workshop',
          'Playbook Entwicklung',
          'Action-Plan Erstellung'
        ],
        roi: '3-5x'
      }
    ]
  },
  
  // CHALLENGE 9: ORIENTATION (NUR 3 SOLUTIONS!)
  {
    id: 'orientation',
    icon: Compass,
    nameEn: 'Orientation',
    nameDe: 'Orientierung',
    shortNameEn: 'Start',
    shortNameDe: 'Start',
    order: 9,
    problemEn: "Unsicher, wo anfangen. Multiple Challenges. Limitierte Ressourcen. Keine klare Priorisierung. Frage: 'What to tackle first?'",
    problemDe: "Unsicher, wo anfangen. Multiple Challenges. Limitierte Ressourcen. Keine klare Priorisierung. Frage: 'Was zuerst angehen?'",
    whyThisHappensHeadlineEn: "You're not sure what your biggest problem is or where to start.",
    whyThisHappensHeadlineDe: "Du bist dir nicht sicher, was dein größtes Problem ist oder wo du anfangen sollst.",
    whyThisHappensEn: [
      "You have multiple challenges (CAC, growth, chaos)",
      "Limited resources (can't fix everything)",
      "No clear prioritization (what to tackle first)"
    ],
    whyThisHappensDe: [
      "Du hast multiple Challenges (CAC, Growth, Chaos)",
      "Limitierte Ressourcen (kannst nicht alles fixen)",
      "Keine klare Priorisierung (was zuerst angehen)"
    ],
    symptomsEn: [
      'Unsicher, wo anfangen',
      'Multiple Challenges',
      'Limitierte Ressourcen',
      "'What to tackle first?'"
    ],
    symptomsDe: [
      'Unsicher, wo anfangen',
      'Multiple Challenges',
      'Limitierte Ressourcen',
      "'Was zuerst angehen?'"
    ],
    ctaTextEn: 'Get Clarity',
    ctaTextDe: 'Klarheit gewinnen',
    solutions: [
      {
        id: 'orientation-call',
        type: 'free',
        icon: Phone,
        nameEn: 'Inflection Call',
        nameDe: 'Inflection Call',
        duration: '30 Min',
        investment: 'FREE',
        impactEn: 'Bottleneck Identification, 3 Next Steps, Program Recommendation',
        impactDe: 'Engpass-Identifikation, 3 nächste Schritte, Programm-Empfehlung',
        whatWeDoEn: [
          'Quick diagnostic',
          'Bottleneck identification',
          'Next step recommendation'
        ],
        whatWeDoDe: [
          'Schnelle Diagnose',
          'Engpass-Identifikation',
          'Nächste-Schritt-Empfehlung'
        ]
      },
      {
        id: 'expert-session',
        type: 'diagnostic',
        icon: GraduationCap,
        nameEn: 'Expert Session',
        nameDe: 'Expert Session',
        duration: '45-90 Min',
        investment: '€490-€890',
        impactEn: 'Deep Dive, Action Plan, 90-Day Roadmap',
        impactDe: 'Deep Dive, Action Plan, 90-Tage Roadmap',
        whatWeDoEn: [
          'Deep strategic review',
          'Challenge prioritization',
          'Action plan development'
        ],
        whatWeDoDe: [
          'Tiefe strategische Review',
          'Challenge-Priorisierung',
          'Action-Plan Entwicklung'
        ]
      },
      {
        id: 'lasr-assessment',
        type: 'free',
        icon: Bot,
        nameEn: 'lasr.io Assessment',
        nameDe: 'lasr.io Assessment',
        duration: '12 Min',
        investment: 'FREE',
        impactEn: 'θ_index Score, Capability Breakdown, Benchmark',
        impactDe: 'θ_index Score, Capability Breakdown, Benchmark',
        whatWeDoEn: [
          'AI-powered diagnostic',
          'Capability scoring',
          'Peer benchmark'
        ],
        whatWeDoDe: [
          'KI-gestützte Diagnose',
          'Capability Scoring',
          'Peer Benchmark'
        ]
      }
    ]
  }
];

export const getChallengeById = (id: string): Challenge | undefined => {
  return challenges.find(c => c.id === id);
};

export const getDefaultChallenge = (): Challenge => {
  return challenges.find(c => c.isDefault) || challenges[0];
};
