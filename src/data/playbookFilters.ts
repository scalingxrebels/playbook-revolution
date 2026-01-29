// Filter type definitions for the 5-filter Playbook navigation system

export type NeedForActionTag = 
  | 'revenue-not-growing'
  | 'product-not-scaling'
  | 'pricing-not-working'
  | 'customers-churning'
  | 'operations-chaotic'
  | 'ai-transformation'
  | 'board-wants-results'
  | 'portfolio-underperforming';

export type ImpactTag = 
  | 'reduce-costs'
  | 'increase-revenue'
  | 'improve-margins'
  | 'retain-customers'
  | 'scale-operations'
  | 'accelerate-product'
  | 'raise-capital'
  | 'transform-organization';

export type TimeframeTag = 
  | 'quick-win'      // 4-8 weeks
  | 'mid-term'       // 8-12 weeks
  | 'long-term'      // 12-24 weeks
  | 'transformation'; // 6-12 months

export type CapabilityTag = 
  | 'limited'
  | 'moderate'
  | 'focused';

export type CapacityTag = 
  | 'firefighting'
  | 'goal-oriented'
  | 'transformation-ready';

export interface FilterOption<T extends string> {
  value: T | 'all';
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
  label: { en: 'Need-for-Action', de: 'Handlungsbedarf' },
  icon: 'AlertCircle',
  options: [
    { value: 'all', label: { en: 'All', de: 'Alle' } },
    { value: 'revenue-not-growing', label: { en: 'Revenue not growing', de: 'Umsatz wächst nicht' } },
    { value: 'product-not-scaling', label: { en: 'Product not scaling', de: 'Produkt skaliert nicht' } },
    { value: 'pricing-not-working', label: { en: 'Pricing not working', de: 'Pricing funktioniert nicht' } },
    { value: 'customers-churning', label: { en: 'Customers churning', de: 'Kunden wandern ab' } },
    { value: 'operations-chaotic', label: { en: 'Operations chaotic', de: 'Ops im Chaos' } },
    { value: 'ai-transformation', label: { en: 'AI transformation needed', de: 'AI-Transformation nötig' } },
    { value: 'board-wants-results', label: { en: 'Board wants results', de: 'Board fordert Ergebnisse' } },
    { value: 'portfolio-underperforming', label: { en: 'Portfolio underperforming', de: 'Portfolio underperformt' } },
  ],
};

// Filter 2: Impact
export const impactFilter: FilterDefinition<ImpactTag> = {
  id: 'impact',
  label: { en: 'Impact', de: 'Wirkung' },
  icon: 'Target',
  options: [
    { value: 'all', label: { en: 'All', de: 'Alle' } },
    { value: 'reduce-costs', label: { en: 'Reduce costs', de: 'Kosten senken' } },
    { value: 'increase-revenue', label: { en: 'Increase revenue', de: 'Umsatz steigern' } },
    { value: 'improve-margins', label: { en: 'Improve margins', de: 'Margen verbessern' } },
    { value: 'retain-customers', label: { en: 'Retain customers', de: 'Kunden binden' } },
    { value: 'scale-operations', label: { en: 'Scale operations', de: 'Ops skalieren' } },
    { value: 'accelerate-product', label: { en: 'Accelerate product', de: 'Produkt beschleunigen' } },
    { value: 'raise-capital', label: { en: 'Raise capital', de: 'Kapital beschaffen' } },
    { value: 'transform-organization', label: { en: 'Transform organization', de: 'Organisation transformieren' } },
  ],
};

// Filter 3: Timeframe
export const timeframeFilter: FilterDefinition<TimeframeTag> = {
  id: 'timeframe',
  label: { en: 'Timeframe', de: 'Zeitrahmen' },
  icon: 'Clock',
  options: [
    { value: 'all', label: { en: 'All', de: 'Alle' } },
    { value: 'quick-win', label: { en: 'Quick Win (4-8 weeks)', de: 'Quick Win (4-8 Wochen)' } },
    { value: 'mid-term', label: { en: 'Mid-Term (8-12 weeks)', de: 'Mittelfristig (8-12 Wochen)' } },
    { value: 'long-term', label: { en: 'Long-Term (12-24 weeks)', de: 'Langfristig (12-24 Wochen)' } },
    { value: 'transformation', label: { en: 'Transformation (6-12 months)', de: 'Transformation (6-12 Monate)' } },
  ],
};

// Filter 4: Capability
export const capabilityFilter: FilterDefinition<CapabilityTag> = {
  id: 'capability',
  label: { en: 'Capability', de: 'Team-Reife' },
  icon: 'Gauge',
  options: [
    { value: 'all', label: { en: 'All', de: 'Alle' } },
    { value: 'limited', label: { en: 'Limited', de: 'Begrenzt' } },
    { value: 'moderate', label: { en: 'Moderate', de: 'Moderat' } },
    { value: 'focused', label: { en: 'Focused', de: 'Fokussiert' } },
  ],
};

// Filter 5: Capacity
export const capacityFilter: FilterDefinition<CapacityTag> = {
  id: 'capacity',
  label: { en: 'Capacity', de: 'Kapazität' },
  icon: 'Users',
  options: [
    { value: 'all', label: { en: 'All', de: 'Alle' } },
    { value: 'firefighting', label: { en: 'Firefighting', de: 'Feuerlöschen' } },
    { value: 'goal-oriented', label: { en: 'Goal-oriented', de: 'Zielorientiert' } },
    { value: 'transformation-ready', label: { en: 'Transformation-ready', de: 'Transformationsbereit' } },
  ],
};

// Active filters state interface
export interface ActiveFilters {
  needForAction: NeedForActionTag | 'all';
  impact: ImpactTag | 'all';
  timeframe: TimeframeTag | 'all';
  capability: CapabilityTag | 'all';
  capacity: CapacityTag | 'all';
}

export const defaultFilters: ActiveFilters = {
  needForAction: 'all',
  impact: 'all',
  timeframe: 'all',
  capability: 'all',
  capacity: 'all',
};

// Match-Score calculation weights
export const FILTER_WEIGHTS = {
  needForAction: 30,
  impact: 25,
  timeframe: 20,
  capability: 15,
  capacity: 10,
} as const;
