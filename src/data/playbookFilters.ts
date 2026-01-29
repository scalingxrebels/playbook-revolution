// Filter type definitions for the 4-filter Playbook navigation system (Michel's Definition)

// FILTER 1: Need-for-Action (Multi-Select)
export type NeedForActionTag = 
  | 'revenue-not-growing'
  | 'product-not-scaling'
  | 'customers-churning'
  | 'operations-chaotic'
  | 'costs-too-high'
  | 'need-ai-transformation'
  | 'board-wants-results'
  | 'portfolio-underperforming';

// FILTER 2: Impact (Multi-Select) - Maps to Playbook categories
export type ImpactTag = 
  | 'growth-engines'
  | 'operating-systems'
  | 'board-governance'
  | 'portfolio'
  | 'strategic-capabilities';

// FILTER 3: Bottleneck (Multi-Select) - Replaces C1-C4 with user-friendly terms
export type BottleneckTag = 
  | 'strategy'
  | 'setup'
  | 'execution-focus'
  | 'operationalization';

// FILTER 4: Role (Single-Select)
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

// Filter 1: Need-for-Action
export const needForActionFilter: FilterDefinition<NeedForActionTag> = {
  id: 'needForAction',
  label: { en: "What's your challenge?", de: 'Was ist deine Herausforderung?' },
  icon: 'AlertCircle',
  options: [
    { value: 'all', label: { en: 'All', de: 'Alle' } },
    { value: 'revenue-not-growing', label: { en: 'Revenue not growing', de: 'Umsatz wächst nicht' } },
    { value: 'product-not-scaling', label: { en: 'Product not scaling', de: 'Produkt skaliert nicht' } },
    { value: 'customers-churning', label: { en: 'Customers churning', de: 'Kunden wandern ab' } },
    { value: 'operations-chaotic', label: { en: 'Operations chaotic', de: 'Ops im Chaos' } },
    { value: 'costs-too-high', label: { en: 'Costs too high', de: 'Kosten zu hoch' } },
    { value: 'need-ai-transformation', label: { en: 'Need AI transformation', de: 'AI-Transformation nötig' } },
    { value: 'board-wants-results', label: { en: 'Board wants results', de: 'Board fordert Ergebnisse' } },
    { value: 'portfolio-underperforming', label: { en: 'Portfolio underperforming', de: 'Portfolio underperformt' } },
  ],
};

// Filter 2: Impact (Which area?)
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

// Filter 3: Bottleneck
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

// Filter 4: Role
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
  needForAction: NeedForActionTag | 'all';
  impact: ImpactTag | 'all';
  bottleneck: BottleneckTag | 'none';
  role: RoleTag | 'all';
}

export const defaultFilters: ActiveFilters = {
  needForAction: 'all',
  impact: 'all',
  bottleneck: 'none',
  role: 'all',
};

// Match-Score calculation weights
export const FILTER_WEIGHTS = {
  needForAction: 30,
  impact: 30,
  bottleneck: 25,
  role: 15,
} as const;
