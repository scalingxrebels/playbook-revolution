import { BilingualText } from './types';

export interface CaseFilterOption {
  id: string;
  label: BilingualText;
}

export const challengeFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Cases', de: 'Alle Cases' } },
  { id: 'cac-crisis', label: { en: 'CAC Crisis', de: 'CAC-Krise' } },
  { id: 'nrr-stuck', label: { en: 'NRR Stuck', de: 'NRR festgefahren' } },
  { id: 'growth-stalled', label: { en: 'Growth Stalled', de: 'Wachstum stagniert' } },
  { id: 'ops-chaos', label: { en: 'Ops Chaos', de: 'Ops-Chaos' } },
  { id: 'exit-prep', label: { en: 'Exit Prep', de: 'Exit-Vorbereitung' } },
];

export const industryFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Industries', de: 'Alle Branchen' } },
  { id: 'b2b-saas', label: { en: 'B2B SaaS', de: 'B2B SaaS' } },
  { id: 'fintech', label: { en: 'FinTech', de: 'FinTech' } },
  { id: 'martech', label: { en: 'MarTech', de: 'MarTech' } },
  { id: 'enterprise', label: { en: 'Enterprise', de: 'Enterprise' } },
  { id: 'analytics', label: { en: 'Data & Analytics', de: 'Daten & Analytics' } },
];

export const stageFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Stages', de: 'Alle Phasen' } },
  { id: 'seed', label: { en: 'Seed', de: 'Seed' } },
  { id: 'series-a', label: { en: 'Series A', de: 'Series A' } },
  { id: 'series-b', label: { en: 'Series B', de: 'Series B' } },
  { id: 'series-c', label: { en: 'Series C', de: 'Series C' } },
  { id: 'pe-backed', label: { en: 'PE-Backed', de: 'PE-Backed' } },
];

export const timelineFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Durations', de: 'Alle Dauern' } },
  { id: 'sprint', label: { en: 'Sprint (4-12 weeks)', de: 'Sprint (4-12 Wochen)' } },
  { id: 'project', label: { en: 'Project (3-6 months)', de: 'Projekt (3-6 Monate)' } },
  { id: 'transformation', label: { en: 'Transformation (6-18 months)', de: 'Transformation (6-18 Monate)' } },
];
