// Research Page Types - AMF (AI Maturity Framework)
// HBR-Style: Scientific but accessible, correlation language

export interface BilingualText {
  en: string;
  de: string;
}

// Hero Section
export interface AMFHeroData {
  breadcrumb: {
    home: BilingualText;
    parent: BilingualText;
    current: BilingualText;
  };
  headline: BilingualText;
  subheadline: BilingualText;
  description: BilingualText;
  stats: Array<{
    value: string;
    label: BilingualText;
  }>;
  primaryCta: {
    text: BilingualText;
    href: string;
  };
  secondaryCta: {
    text: BilingualText;
    href: string;
  };
}

// Why It Matters Section
export interface WhyItMattersData {
  headline: BilingualText;
  content: BilingualText;
  chartTitle: BilingualText;
  chartAnnotation: BilingualText;
  callout: {
    title: BilingualText;
    content: BilingualText;
  };
  // Simulated data points for scatter chart (47 companies)
  chartData: Array<{
    maturity: number; // 0-100
    timeToRevenue: number; // months
    level: 1 | 2 | 3;
  }>;
}

// Three Levels Section
export interface MaturityLevel {
  level: 1 | 2 | 3;
  name: BilingualText;
  tagline: BilingualText;
  whatItLooksLike: BilingualText[];
  whatWeObserved: {
    productivity: BilingualText;
    timeToRevenue: BilingualText;
    revenuePerEmployee: BilingualText;
  };
  example: BilingualText;
  description: BilingualText;
  color: 'amber' | 'blue' | 'emerald';
}

export interface ThreeLevelsData {
  headline: BilingualText;
  subheadline: BilingualText;
  levels: MaturityLevel[];
  comparisonTable: {
    headers: BilingualText[];
    rows: Array<{
      dimension: BilingualText;
      level1: BilingualText;
      level2: BilingualText;
      level3: BilingualText;
    }>;
  };
}

// Measurement Section (6 Dimensions)
export interface MeasurementDimension {
  id: string;
  icon: string; // Lucide icon name
  title: BilingualText;
  question: BilingualText;
  levels: {
    low: BilingualText;
    medium: BilingualText;
    high: BilingualText;
  };
  example: {
    level: 'high';
    company: string;
    description: BilingualText;
  };
  whyItMatters: BilingualText;
}

export interface MeasurementData {
  headline: BilingualText;
  subheadline: BilingualText;
  description: BilingualText;
  dimensions: MeasurementDimension[];
}

// Findings Section
export interface FindingsData {
  headline: BilingualText;
  subheadline: BilingualText;
  findings: Array<{
    number: number;
    title: BilingualText;
    content: BilingualText;
  }>;
  stats: Array<{
    value: string;
    label: BilingualText;
  }>;
  caveat: {
    title: BilingualText;
    content: BilingualText;
  };
}

// Case Studies Section
export interface CaseStudyAMF {
  id: string;
  company: string;
  logo?: string;
  level: 3;
  metrics: {
    revenue: string;
    employees: string;
    revenuePerEmployee: string;
    valuation?: string;
    queries?: string;
  };
  whatMakesThemLevel3: BilingualText[];
  keyInsights: BilingualText[];
  pattern: BilingualText;
}

export interface CaseStudiesData {
  headline: BilingualText;
  subheadline: BilingualText;
  cases: CaseStudyAMF[];
}

// Implications Section
export interface ImplicationItem {
  number: number;
  title: BilingualText;
  question: BilingualText;
  bullets: BilingualText[];
  action: BilingualText;
  cta: {
    text: BilingualText;
    href: string;
  };
}

export interface ImplicationsData {
  headline: BilingualText;
  subheadline: BilingualText;
  items: ImplicationItem[];
}

// Download Section
export interface DownloadData {
  headline: BilingualText;
  subheadline: BilingualText;
  document: {
    title: BilingualText;
    subtitle: BilingualText;
    wordCount: string;
    style: BilingualText;
    whatsInside: BilingualText[];
  };
  cta: {
    text: BilingualText;
    href: string;
  };
  note: BilingualText;
}

// Final CTA Section
export interface FinalCTAData {
  headline: BilingualText;
  content: BilingualText;
  benefits: BilingualText[];
  primaryCta: {
    text: BilingualText;
    href: string;
  };
  secondaryCta: {
    text: BilingualText;
    href: string;
  };
  subtext: BilingualText;
}

// Complete AMF Page Data
export interface AMFPageData {
  hero: AMFHeroData;
  whyItMatters: WhyItMattersData;
  threeLevels: ThreeLevelsData;
  measurement: MeasurementData;
  findings: FindingsData;
  caseStudies: CaseStudiesData;
  implications: ImplicationsData;
  download: DownloadData;
  finalCta: FinalCTAData;
}

// ============================================
// ANST (AI-Native Scaling Theory) Types
// ============================================

// Problem Section (Traditional Scaling is Linear)
export interface ProblemSectionData {
  headline: BilingualText;
  content: BilingualText;
  pattern: BilingualText[];
  problem: BilingualText[];
  result: BilingualText;
  bottleneck: BilingualText;
  chartTitle: BilingualText;
  chartAnnotation: BilingualText;
  callout: { title: BilingualText; content: BilingualText };
}

// Solution Section (4 Capabilities × AI Multiplier)
export interface CapabilityItem {
  id: 'strategy' | 'setup' | 'execution' | 'operationalization';
  name: BilingualText;
  tagline: BilingualText;
  whatItIs: BilingualText[];
  whyItMatters: BilingualText;
  exponent?: number; // 1.5 for Strategy & Execution
  color: 'violet' | 'blue' | 'emerald' | 'amber';
}

export interface SolutionSectionData {
  headline: BilingualText;
  content: BilingualText;
  pattern: BilingualText[];
  secret: BilingualText;
  result: BilingualText;
  formula: BilingualText;
  capabilities: CapabilityItem[];
}

// Formula Section (Illustrative)
export interface FormulaSectionData {
  headline: BilingualText;
  subheadline: BilingualText;
  formulaDisplay: string;
  components: Array<{
    symbol: string;
    name: BilingualText;
    description: BilingualText;
  }>;
  explanation: BilingualText;
  exponentInsight: {
    title: BilingualText;
    content: BilingualText;
    example: BilingualText;
  };
  whyFocusOnCapabilities?: {
    headline: BilingualText;
    reasons: Array<{
      title: BilingualText;
      content: BilingualText;
    }>;
    causalChain: BilingualText;
  };
}

// Evidence Section (n=22 Companies)
export interface EvidenceSectionData {
  headline: BilingualText;
  subheadline: BilingualText;
  intro: BilingualText;
  findings: Array<{
    number: number;
    title: BilingualText;
    content: BilingualText;
  }>;
  caveat: { title: BilingualText; content: BilingualText };
  chartTitle: BilingualText;
  chartAnnotation: BilingualText;
  chartData: Array<{
    maturity: number;
    timeToRevenue: number;
    level: 1 | 2 | 3;
  }>;
}

// Complete ANST Page Data
export interface ANSTPageData {
  hero: AMFHeroData;
  problem: ProblemSectionData;
  solution: SolutionSectionData;
  evidence: EvidenceSectionData;
  formula: FormulaSectionData;
  caseStudies: CaseStudiesData;
  implications: ImplicationsData;
  download: DownloadData;
  finalCta: FinalCTAData;
}

// ============================================
// SST (Scaling Stack Theory) Types
// ============================================

// SST Problem Section (Bottleneck Distribution)
export interface SSTBottleneckDistributionData {
  headline: BilingualText;
  content: BilingualText;
  findings: Array<{
    number: number;
    title: BilingualText;
    content: BilingualText;
  }>;
  chartTitle: BilingualText;
  chartData: Array<{
    capability: 'C₁' | 'C₂' | 'C₃' | 'C₄';
    name: BilingualText;
    percentage: number;
    color: string;
  }>;
  callout: { title: BilingualText; content: BilingualText };
}

// SST Capabilities Section (with bottleneck percentage)
export interface SSTCapabilityItem {
  id: 'strategy' | 'setup' | 'execution' | 'operationalization';
  symbol: string;
  name: BilingualText;
  tagline: BilingualText;
  whatItIs: BilingualText[];
  whyItMatters: BilingualText;
  bottleneckPercentage: number;
  color: 'violet' | 'blue' | 'emerald' | 'amber';
}

export interface SSTCapabilitiesData {
  headline: BilingualText;
  subheadline: BilingualText;
  capabilities: SSTCapabilityItem[];
}

// SST Evidence Section (C_min vs Time)
export interface SSTEvidenceData {
  headline: BilingualText;
  subheadline: BilingualText;
  intro: BilingualText;
  findings: Array<{
    number: number;
    title: BilingualText;
    content: BilingualText;
  }>;
  caveat: { title: BilingualText; content: BilingualText };
  chartTitle: BilingualText;
  chartAnnotation: BilingualText;
  chartData: Array<{
    cMin: number;
    timeToRevenue: number;
    hasBottleneck: boolean;
  }>;
}

// SST Bottleneck Principle Section
export interface SSTBottleneckPrincipleData {
  headline: BilingualText;
  subheadline: BilingualText;
  formulaDisplay: string;
  principle: BilingualText;
  whyMultiplicative: BilingualText;
  example: {
    companyA: { scores: string; product: string; label: BilingualText };
    companyB: { scores: string; product: string; label: BilingualText };
  };
  implication: BilingualText;
  callout: { title: BilingualText; content: BilingualText };
}

// SST Case Study (Anonymized with Before/After)
export interface SSTCaseStudy {
  id: string;
  name: BilingualText;
  bottleneck: 'strategy' | 'setup' | 'execution' | 'operationalization';
  bottleneckName: BilingualText;
  before: {
    scores: string;
    cMin: string;
    timeToRevenue: string;
  };
  after: {
    fixedScore: string;
    timeToRevenue: string;
    improvement: string;
  };
  problem: BilingualText;
  observations: BilingualText[];
  fix: BilingualText[];
  result: BilingualText;
  roi: string;
  color: 'violet' | 'blue' | 'emerald' | 'amber';
}

export interface SSTCaseStudiesData {
  headline: BilingualText;
  subheadline: BilingualText;
  cases: SSTCaseStudy[];
}

// Complete SST Page Data
export interface SSTPageData {
  hero: AMFHeroData;
  bottleneckDistribution: SSTBottleneckDistributionData;
  capabilities: SSTCapabilitiesData;
  evidence: SSTEvidenceData;
  bottleneckPrinciple: SSTBottleneckPrincipleData;
  caseStudies: SSTCaseStudiesData;
  implications: ImplicationsData;
  download: DownloadData;
  finalCta: FinalCTAData;
}

// ============================================
// UNIFIED FRAMEWORK Types
// ============================================

// Why Four Formulas Section
export interface WhyFourFormulasData {
  headline: BilingualText;
  questions: Array<{
    question: BilingualText;
    formula: 'AMF' | 'ANST' | 'SST' | 'META';
    explanation: BilingualText;
  }>;
  insight: BilingualText;
  callout: { title: BilingualText; content: BilingualText };
}

// Four Formulas Section
export interface FormulaCard {
  id: 'amf' | 'anst' | 'sst' | 'meta';
  name: BilingualText;
  fullName: BilingualText;
  question: BilingualText;
  input: BilingualText;
  inputDetails: BilingualText[];
  output: BilingualText;
  outputDetails: BilingualText[];
  validation: BilingualText;
  href: string;
  color: 'violet' | 'blue' | 'emerald' | 'amber';
}

export interface FourFormulasData {
  headline: BilingualText;
  subheadline: BilingualText;
  formulas: FormulaCard[];
}

// Framework Flow Section
export interface FlowStep {
  number: number;
  name: BilingualText;
  formula: string;
  description: BilingualText;
  output: BilingualText;
  outputValue: string;
  color: 'violet' | 'blue' | 'emerald' | 'amber';
}

export interface FrameworkFlowData {
  headline: BilingualText;
  subheadline: BilingualText;
  steps: FlowStep[];
  result: BilingualText;
  callout: { title: BilingualText; content: BilingualText };
}

// Practical Application Section
export interface ApplicationCard {
  number: number;
  title: BilingualText;
  useFormulas: string[];
  steps: BilingualText[];
  output: BilingualText[];
  cta: { text: BilingualText; href: string };
  color: 'violet' | 'blue' | 'emerald';
}

export interface PracticalApplicationData {
  headline: BilingualText;
  subheadline: BilingualText;
  applications: ApplicationCard[];
}

// Unified Case Study Section (Midjourney with all 4 formulas)
export interface UnifiedCaseStudyData {
  headline: BilingualText;
  subheadline: BilingualText;
  company: {
    name: string;
    founded: string;
    revenue: string;
    employees: string;
    timeToRevenue: string;
  };
  analysis: {
    amf: {
      headline: BilingualText;
      thetaIndex: string;
      level: string;
      dimensions: Array<{ name: BilingualText; score: string }>;
    };
    anst: {
      headline: BilingualText;
      result: BilingualText;
      enablers: BilingualText;
      capabilities: string;
    };
    sst: {
      headline: BilingualText;
      cMin: string;
      bottleneck: BilingualText;
      scores: Array<{ capability: string; score: string }>;
    };
    meta: {
      headline: BilingualText;
      prediction: string;
      actual: string;
      validated: boolean;
    };
  };
  insight: BilingualText;
  callout: { title: BilingualText; content: BilingualText };
}

// Complete Unified Framework Page Data
export interface UnifiedFrameworkPageData {
  hero: AMFHeroData;
  whyFourFormulas: WhyFourFormulasData;
  fourFormulas: FourFormulasData;
  frameworkFlow: FrameworkFlowData;
  practicalApplication: PracticalApplicationData;
  unifiedCaseStudy: UnifiedCaseStudyData;
  implications: ImplicationsData;
  download: DownloadData;
  finalCta: FinalCTAData;
}
