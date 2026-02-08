import type { ImpactTag, BottleneckTag, RoleTag } from '../playbookFilters';

// Bilingual text for DE/EN support
export interface BilingualText {
  en: string;
  de: string;
}

// ============================================================================
// PLAYBOOK METADATA (for Tiles/Index)
// ============================================================================

export type PlaybookEbene = 1 | 2 | 3;

export interface PlaybookMeta {
  id: number;
  slug: string;
  title: BilingualText;
  description: BilingualText;
  icon: string; // Lucide icon name
  color: string; // Tailwind color (e.g., "green", "blue", "orange")
  gradient: string; // Tailwind gradient classes
  area: ImpactTag[];
  bottleneck: BottleneckTag[];
  role: RoleTag[];
  ebene: PlaybookEbene;
  parent: number | null; // Parent playbook ID
  children: number[]; // Child playbook IDs
}

// ============================================================================
// LANDING PAGE SECTIONS
// ============================================================================

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
  assetId?: string;  // Optional Asset-ID für Download-Button (z.B. 'playbook-ai-native-scaling')
  gradient: string;
}

// Summary Section Data (Problem/Why/Solution cards)
export interface PlaybookSummaryData {
  problem: { title: BilingualText; text: BilingualText };
  whyItMatters: { title: BilingualText; text: BilingualText };
  solution: { title: BilingualText; text: BilingualText };
}

// Problem Section (Section 2: Why Traditional X is Broken)
export interface ProblemBullet {
  text: BilingualText;
  icon?: string;
}

export interface ProblemMetric {
  label: BilingualText;
  value: string;
  trend?: 'up' | 'down';
}

export interface PlaybookProblemSection {
  title: BilingualText;
  subtitle: BilingualText;
  bullets: ProblemBullet[];
  metrics: ProblemMetric[];
}

// Framework Item (for Solution Section)
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
  examples?: BilingualText[];
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

// Roadmap Phase (Implementation Section)
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

// Solutions Connection (Power Up, Boost, Accelerate)
export interface SolutionConnectionItem {
  type: 'assessment' | 'power-up' | 'boost' | 'accelerate';
  name: BilingualText;
  duration: BilingualText;
  price: BilingualText;
  outcome: BilingualText;
  cta: BilingualText;
  link: string;
  icon: string;
  color: string;
}

export interface PlaybookSolutionsConnection {
  title: BilingualText;
  subtitle: BilingualText;
  items: SolutionConnectionItem[];
}

// Who This Is For Section
export interface PersonaItem {
  icon: string;
  role: BilingualText;
  pain: BilingualText;
  outcome: BilingualText;
  color: string;
}

export interface PlaybookWhoThisIsFor {
  title: BilingualText;
  subtitle: BilingualText;
  icp: BilingualText;
  personas: PersonaItem[];
}

// Next Steps / Final CTA
export interface FinalCTAData {
  headline: BilingualText;
  subline: BilingualText;
  trustSignals: BilingualText[];
  bookingUrl: string;
  downloadUrl: string;
}

// Sub-Playbooks Section (only for Ebene 2)
export interface SubPlaybookLink {
  id: number;
  slug: string;
  title: BilingualText;
  teaser: BilingualText;
  icon: string;
  color: string;
}

export interface PlaybookSubPlaybooksSection {
  title: BilingualText;
  subtitle: BilingualText;
  items: SubPlaybookLink[];
}

// Related Solution (legacy, keep for compatibility)
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

// ============================================================================
// 8 DIMENSIONS SECTION (Only for Ebene 1 Master Playbook)
// ============================================================================

export interface DimensionItem {
  id: string;
  icon: string;
  title: BilingualText;
  description: BilingualText;
  aiPowered: BilingualText;
  aiNative: BilingualText;
  impact: BilingualText;
}

export interface PlaybookDimensionsSection {
  title: BilingualText;
  subtitle: BilingualText;
  items: DimensionItem[];
}

// ============================================================================
// AI MATURITY LEVELS SECTION (Only for Ebene 1 Master Playbook)
// ============================================================================

export interface MaturityLevel {
  level: 1 | 2 | 3;
  name: BilingualText;
  definition: BilingualText;
  examples: BilingualText;
  impact: BilingualText;
  scaling: BilingualText;
  timeline: BilingualText;
}

export interface PlaybookMaturitySection {
  title: BilingualText;
  subtitle: BilingualText;
  levels: MaturityLevel[];
}

// ============================================================================
// MASTER PAGE DATA (Complete Landing Page)
// ============================================================================

export interface PlaybookPageData {
  meta: PlaybookMeta;
  hero: PlaybookHeroData;
  summary: PlaybookSummaryData;
  problem: PlaybookProblemSection;
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
  solutionsConnection: PlaybookSolutionsConnection;
  whoThisIsFor: PlaybookWhoThisIsFor;
  finalCta: FinalCTAData;
  subPlaybooks?: PlaybookSubPlaybooksSection; // Only for Ebene 1 + 2
  dimensions?: PlaybookDimensionsSection; // Only for Ebene 1 Master Playbook
  maturityLevels?: PlaybookMaturitySection; // Only for Ebene 1 Master Playbook
}
