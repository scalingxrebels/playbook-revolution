// Bilingual text for DE/EN support
export interface BilingualText {
  en: string;
  de: string;
}

// Hero Section Data
export interface PlaybookHeroData {
  breadcrumb: BilingualText;
  badge: BilingualText;
  title: string;
  subtitle: BilingualText;
  description: BilingualText;
  trustBadges: BilingualText[];
  bookingUrl: string;
  downloadUrl: string;
  gradient: string;
}

// Summary Section Data
export interface PlaybookSummaryData {
  problem: { title: BilingualText; text: BilingualText };
  whyItMatters: { title: BilingualText; text: BilingualText };
  solution: { title: BilingualText; text: BilingualText };
}

// Framework Item
export interface FrameworkItem {
  id: string;
  icon: string;
  color: string;
  bgColor: string;
  title: BilingualText;
  subtitle: BilingualText;
  description: BilingualText;
  metrics: { label: BilingualText; value: string }[];
  actions: BilingualText[];
}

// Best Practices
export interface BestPracticeItem {
  do: BilingualText;
  dont: BilingualText;
}

export interface BestPractice {
  category: BilingualText;
  items: BestPracticeItem[];
}

// Roadmap Phase
export interface RoadmapPhase {
  phase: number;
  title: BilingualText;
  timeline: BilingualText;
  focus: BilingualText;
  deliverables: BilingualText[];
  gradient: string;
}

// Case Study
export interface CaseStudyResult {
  metric: BilingualText;
  before: string;
  after: string;
  change: string;
}

export interface CaseStudy {
  company: BilingualText;
  problem: BilingualText;
  solution: BilingualText;
  results: CaseStudyResult[];
  timeline: BilingualText;
}

// Persona
export interface Persona {
  icon: string;
  role: BilingualText;
  pain: BilingualText;
  outcome: BilingualText;
  color: string;
}

// Related Solution
export interface RelatedSolution {
  title: BilingualText;
  desc: BilingualText;
  timeline: BilingualText;
  investment: BilingualText;
  impact: BilingualText;
  href: string;
  icon: string;
  color: string;
}

// Final CTA
export interface FinalCTAData {
  headline: BilingualText;
  subline: BilingualText;
  trustSignals: BilingualText[];
  bookingUrl: string;
  downloadUrl: string;
}

// Master Page Data
export interface PlaybookPageData {
  hero: PlaybookHeroData;
  summary: PlaybookSummaryData;
  framework: {
    title: BilingualText;
    subtitle: BilingualText;
    items: FrameworkItem[];
  };
  bestPractices: {
    title: BilingualText;
    categories: BestPractice[];
  };
  roadmap: {
    title: BilingualText;
    subtitle: BilingualText;
    phases: RoadmapPhase[];
  };
  caseStudies: {
    title: BilingualText;
    subtitle: BilingualText;
    cases: CaseStudy[];
  };
  personas: {
    title: BilingualText;
    subtitle: BilingualText;
    items: Persona[];
  };
  relatedSolutions: {
    title: BilingualText;
    subtitle: BilingualText;
    items: RelatedSolution[];
  };
  finalCta: FinalCTAData;
}
