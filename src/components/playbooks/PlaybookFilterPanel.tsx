import React from 'react';
import PlaybookFilterRowCentered from './PlaybookFilterRowCentered';
import PlaybookFilterRowCompact from './PlaybookFilterRowCompact';
import {
  needForActionFilter,
  impactFilter,
  bottleneckFilter,
  roleFilter,
  type ActiveFilters,
  type NeedForActionTag,
  type ImpactTag,
  type BottleneckTag,
  type RoleTag,
} from '@/data/playbookFilters';

interface PlaybookFilterPanelProps {
  filters: ActiveFilters;
  onFilterChange: <K extends keyof ActiveFilters>(key: K, value: ActiveFilters[K]) => void;
}

const PlaybookFilterPanel: React.FC<PlaybookFilterPanelProps> = ({ 
  filters, 
  onFilterChange 
}) => {
  return (
    <div className="space-y-6">
      {/* Full-Width Section: Need-for-Action + Impact */}
      <div className="space-y-6">
        {/* Filter 1: Need-for-Action (What's your challenge?) */}
        <PlaybookFilterRowCentered<NeedForActionTag>
          filterId={needForActionFilter.id}
          label={needForActionFilter.label}
          icon={needForActionFilter.icon}
          options={needForActionFilter.options}
          value={filters.needForAction}
          onChange={(value) => onFilterChange('needForAction', value as NeedForActionTag | 'all')}
        />

        {/* Filter 2: Impact (Which area?) */}
        <PlaybookFilterRowCentered<ImpactTag>
          filterId={impactFilter.id}
          label={impactFilter.label}
          icon={impactFilter.icon}
          options={impactFilter.options}
          value={filters.impact}
          onChange={(value) => onFilterChange('impact', value as ImpactTag | 'all')}
        />
      </div>

      {/* Compact Section: Bottleneck + Role (2 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border/50">
        {/* Filter 3: Bottleneck (What's your bottleneck?) */}
        <PlaybookFilterRowCompact<BottleneckTag>
          filterId={bottleneckFilter.id}
          label={bottleneckFilter.label}
          icon={bottleneckFilter.icon}
          options={bottleneckFilter.options}
          value={filters.bottleneck}
          onChange={(value) => onFilterChange('bottleneck', value as BottleneckTag | 'none')}
        />

        {/* Filter 4: Role (Who are you?) */}
        <PlaybookFilterRowCompact<RoleTag>
          filterId={roleFilter.id}
          label={roleFilter.label}
          icon={roleFilter.icon}
          options={roleFilter.options}
          value={filters.role}
          onChange={(value) => onFilterChange('role', value as RoleTag | 'all')}
        />
      </div>
    </div>
  );
};

export default PlaybookFilterPanel;
