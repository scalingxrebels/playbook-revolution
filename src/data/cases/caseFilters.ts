import { BilingualText } from './types';

export interface CaseFilterOption {
  id: string;
  label: BilingualText;
}

// Synchronized with Solutions page challenges
export const challengeFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Cases', de: 'Alle Cases' } },
  { id: 'cac-crisis', label: { en: 'CAC Crisis', de: 'CAC-Krise' } },
  { id: 'growth-stalled', label: { en: 'Growth Stalled', de: 'Wachstum stagniert' } },
  { id: 'pricing-breakdown', label: { en: 'Pricing Breakdown', de: 'Pricing-Problem' } },
  { id: 'nrr-stuck', label: { en: 'NRR Stuck', de: 'NRR festgefahren' } },
  { id: 'scaling-chaos', label: { en: 'Scaling Chaos', de: 'Skalierungs-Chaos' } },
  { id: 'ai-transformation', label: { en: 'AI Transformation', de: 'AI-Transformation' } },
  { id: 'board-pressure', label: { en: 'Board Pressure', de: 'Board-Druck' } },
  { id: 'exit-prep', label: { en: 'Exit Prep', de: 'Exit-Vorbereitung' } },
  { id: 'partner-channel', label: { en: 'Partner Channel', de: 'Partner Channel' } },
  { id: 'market-entry', label: { en: 'Market Entry', de: 'Markteintritt' } },
  { id: 'orientation', label: { en: 'Need Orientation', de: 'Orientierung' } },
];

// Cleaned industry filters based on actual case study data
export const industryFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Industries', de: 'Alle Branchen' } },
  { id: 'b2b-saas', label: { en: 'B2B SaaS', de: 'B2B SaaS' } },
  { id: 'b2b-services', label: { en: 'B2B Services', de: 'B2B Services' } },
  { id: 'b2b-software', label: { en: 'B2B Software', de: 'B2B Software' } },
  { id: 'martech', label: { en: 'MarTech', de: 'MarTech' } },
  { id: 'analytics', label: { en: 'Data & Analytics', de: 'Daten & Analytics' } },
  { id: 'professional-services', label: { en: 'Professional Services', de: 'Professional Services' } },
];

// Unified business-phase logic (not funding rounds)
export const stageFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Stages', de: 'Alle Phasen' } },
  { id: 'early-stage', label: { en: 'Early Stage', de: 'Frühphase' } },
  { id: 'growth-stage', label: { en: 'Growth Stage', de: 'Wachstumsphase' } },
  { id: 'established', label: { en: 'Established', de: 'Etabliert' } },
  { id: 'post-ipo', label: { en: 'Post-IPO / Public', de: 'Post-IPO / Börsennotiert' } },
];

export const timelineFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Durations', de: 'Alle Dauern' } },
  { id: 'sprint', label: { en: 'Sprint (4-12 weeks)', de: 'Sprint (4-12 Wochen)' } },
  { id: 'project', label: { en: 'Project (3-6 months)', de: 'Projekt (3-6 Monate)' } },
  { id: 'transformation', label: { en: 'Transformation (6-18 months)', de: 'Transformation (6-18 Monate)' } },
];
