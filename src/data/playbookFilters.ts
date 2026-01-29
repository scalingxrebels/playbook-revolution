// Filter type definitions for the 3-filter Playbook navigation system

// FILTER 1: Impact (Multi-Select) - Maps to Playbook categories
export type ImpactTag = 
  | 'growth-engines'
  | 'operating-systems'
  | 'board-governance'
  | 'portfolio'
  | 'strategic-capabilities';

// FILTER 2: Bottleneck (Multi-Select) - User-friendly terms for C1-C4
export type BottleneckTag = 
  | 'strategy'
  | 'setup'
  | 'execution-focus'
  | 'operationalization';

// FILTER 3: Role (Single-Select)
export type RoleTag = 
  | 'ceo'
  | 'cmo-cro'
  | 'coo'
  | 'cfo'
  | 'cto'
  | 'cpo'
  | 'vc-board';

export interface FilterOption<T extends string> {
  value: T | 'all' | 'none';
  label: { en: string; de: string };
}

export interface FilterDefinition<T extends string> {
  id: string;
  label: { en: string; de: string };
  icon: string; // Lucide icon name
  options: FilterOption<T>[];
}

// Filter 1: Impact (Which area?)
export const impactFilter: FilterDefinition<ImpactTag> = {
  id: 'impact',
  label: { en: 'Which area?', de: 'Welcher Bereich?' },
  icon: 'Target',
  options: [
    { value: 'all', label: { en: 'All', de: 'Alle' } },
    { value: 'growth-engines', label: { en: 'Growth Engines', de: 'Wachstumsmotoren' } },
    { value: 'operating-systems', label: { en: 'Operating Systems', de: 'Betriebssysteme' } },
    { value: 'board-governance', label: { en: 'Board & Governance', de: 'Board & Governance' } },
    { value: 'portfolio', label: { en: 'Portfolio', de: 'Portfolio' } },
    { value: 'strategic-capabilities', label: { en: 'Strategic Capabilities', de: 'Strategische Fähigkeiten' } },
  ],
};

// Filter 2: Bottleneck
export const bottleneckFilter: FilterDefinition<BottleneckTag> = {
  id: 'bottleneck',
  label: { en: "What's your bottleneck?", de: 'Was ist dein Engpass?' },
  icon: 'Gauge',
  options: [
    { value: 'none', label: { en: 'None', de: 'Keiner' } },
    { value: 'strategy', label: { en: 'Strategy', de: 'Strategie' } },
    { value: 'setup', label: { en: 'Setup', de: 'Setup' } },
    { value: 'execution-focus', label: { en: 'Execution Focus', de: 'Umsetzungsfokus' } },
    { value: 'operationalization', label: { en: 'Operationalization', de: 'Operationalisierung' } },
  ],
};

// Filter 3: Role
export const roleFilter: FilterDefinition<RoleTag> = {
  id: 'role',
  label: { en: 'Who are you?', de: 'Wer bist du?' },
  icon: 'User',
  options: [
    { value: 'all', label: { en: 'All', de: 'Alle' } },
    { value: 'ceo', label: { en: 'CEO', de: 'CEO' } },
    { value: 'cmo-cro', label: { en: 'CMO/CRO', de: 'CMO/CRO' } },
    { value: 'coo', label: { en: 'COO', de: 'COO' } },
    { value: 'cfo', label: { en: 'CFO', de: 'CFO' } },
    { value: 'cto', label: { en: 'CTO', de: 'CTO' } },
    { value: 'cpo', label: { en: 'CPO', de: 'CPO' } },
    { value: 'vc-board', label: { en: 'VC/Board', de: 'VC/Board' } },
  ],
};

// Active filters state interface
export interface ActiveFilters {
  impact: ImpactTag | 'all';
  bottleneck: BottleneckTag | 'none';
  role: RoleTag | 'all';
}

export const defaultFilters: ActiveFilters = {
  impact: 'all',
  bottleneck: 'none',
  role: 'all',
};

// Match-Score calculation weights (total: 100)
export const FILTER_WEIGHTS = {
  impact: 45,
  bottleneck: 35,
  role: 20,
} as const;
