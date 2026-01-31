import { LucideIcon } from 'lucide-react';

// Shared types
export interface BilingualText {
  en: string;
  de: string;
}

export interface MetricItem {
  label: BilingualText | string;
  value: string;
  icon?: LucideIcon;
}

export interface ThetaScores {
  overall: number;
  c1: number;
  c2: number;
  c3: number;
  c4: number;
}

export interface ThetaLabels {
  c1: BilingualText;
  c2: BilingualText;
  c3: BilingualText;
  c4: BilingualText;
}

export interface TimelineItem {
  year: string;
  value: string;
  label?: string;
}

// Research Case (Real Companies) - for /expertise and /case-study/:id
export interface ResearchCase {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  darkColor?: string;
  founded: string;
  founder: string;
  focus: BilingualText;
  headline: { metric: string; label: BilingualText };
  secondaryMetrics: { value: string; label: BilingualText }[];
  thetaIndex: ThetaScores;
  thetaLabels: ThetaLabels;
  growthTimeline: TimelineItem[];
  learnings: { en: string[]; de: string[] };
  highlight: BilingualText;
  description: BilingualText;
  keyMetrics: { label: BilingualText; value: string; icon: LucideIcon }[];
  strategicInsights: { en: string[]; de: string[] };
  dataSource?: string;
}

// ============================================
// NEW: Full Case Study Types (Story-First)
// ============================================

export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
  impact: string;
}

export interface CaseStudyAction {
  name: BilingualText;
  description: BilingualText;
  deliverables: BilingualText[];
  whyItMattered: BilingualText;
}

export interface CaseStudyPhase {
  name: BilingualText;
  timeline: string;
  actions: CaseStudyAction[];
}

export interface CaseStudyLesson {
  title: BilingualText;
  whatWeLearned: BilingualText;
  keyInsight: BilingualText;
  whatWedDoDifferently: BilingualText;
}

export interface BrokenArea {
  area: BilingualText;
  symptoms: BilingualText[];
}

export interface ROICalculation {
  investment: string;
  returnValue: string;
  roi: string;
  breakdown: BilingualText[];
}

// Full Client Case Study with Story-First Structure
export interface ClientCaseStudy {
  // Identifiers
  id: string;
  slug: string;
  
  // Basic Info
  company: string;
  industry: string;
  stage: string;
  gradient: string;
  confidential: true;
  
  // Filter Tags
  tags: string[];
  challengeType: string; // for filtering: 'cac-crisis' | 'nrr-stuck' | 'growth-stalled' | 'ops-chaos' | 'exit-prep'
  
  // HERO Section
  headline: BilingualText;
  challenge: BilingualText;
  result: BilingualText;
  cardSummary?: BilingualText; // Executive Summary für Kacheln (2 Zeilen)
  investment: string;
  roi: string;
  heroMetrics: CaseStudyMetric[];
  
  // SITUATION Section
  companyDescription: BilingualText;
  crisisStory: BilingualText;
  problemDescription: BilingualText;
  brokenAreas: BrokenArea[];
  situationMetrics: CaseStudyMetric[];
  
  // WHAT WE DID Section
  approach: BilingualText;
  phases: CaseStudyPhase[];
  
  // RESULTS Section
  timeline: string;
  resultMetrics: CaseStudyMetric[];
  roiCalculation: ROICalculation;
  ceoQuote: BilingualText;
  quoteContext: BilingualText;
  
  // KEY LESSONS Section
  lessons: CaseStudyLesson[];
  
  // META
  playbooks: string[];
  downloadUrl?: string;
  
  // RELATED CONTENT (optional)
  relatedSolutions?: RelatedSolution[];
  relatedCaseStudies?: RelatedCaseStudy[];
  relatedPlaybooks?: RelatedPlaybook[];
}

// ============================================
// Related Content Types
// ============================================

export interface RelatedSolution {
  name: BilingualText;
  url: string;
  duration: string;
  investment: string;
  focus: BilingualText;
  outcome: BilingualText;
  type: 'primary' | 'alternative' | 'related';
  whatYouGet?: BilingualText[];
}

export interface RelatedCaseStudy {
  slug: string;
  teaser: BilingualText;
}

export interface RelatedPlaybook {
  slug: string;
  teaser: BilingualText;
}

// Legacy ClientCase (simplified for backward compatibility)
export interface ClientCase {
  id: string;
  company: string;
  industry: string;
  stage?: string;
  challenge: BilingualText;
  solution: BilingualText;
  result: BilingualText;
  metrics: { label: string; value: string }[];
  playbooks?: string[];
  timeline?: string;
  gradient: string;
  confidential: true;
}
