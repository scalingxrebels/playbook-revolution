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

// Client Case (Anonymized) - for /cases
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
