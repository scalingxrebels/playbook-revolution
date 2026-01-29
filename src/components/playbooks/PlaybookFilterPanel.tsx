import React from 'react';
import PlaybookFilterRowCentered from './PlaybookFilterRowCentered';
import PlaybookFilterRowCompact from './PlaybookFilterRowCompact';
import {
  needForActionFilter,
  impactFilter,
  timeframeFilter,
  capabilityFilter,
  capacityFilter,
  type ActiveFilters,
  type NeedForActionTag,
  type ImpactTag,
  type TimeframeTag,
  type CapabilityTag,
  type CapacityTag,
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
        {/* Filter 1: Need-for-Action */}
        <PlaybookFilterRowCentered<NeedForActionTag>
          filterId={needForActionFilter.id}
          label={needForActionFilter.label}
          icon={needForActionFilter.icon}
          options={needForActionFilter.options}
          value={filters.needForAction}
          onChange={(value) => onFilterChange('needForAction', value)}
        />

        {/* Filter 2: Impact */}
        <PlaybookFilterRowCentered<ImpactTag>
          filterId={impactFilter.id}
          label={impactFilter.label}
          icon={impactFilter.icon}
          options={impactFilter.options}
          value={filters.impact}
          onChange={(value) => onFilterChange('impact', value)}
        />
      </div>

      {/* Compact Section: Timeframe + Capability + Capacity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border/50">
        {/* Filter 3: Timeframe */}
        <PlaybookFilterRowCompact<TimeframeTag>
          filterId={timeframeFilter.id}
          label={timeframeFilter.label}
          icon={timeframeFilter.icon}
          options={timeframeFilter.options}
          value={filters.timeframe}
          onChange={(value) => onFilterChange('timeframe', value)}
        />

        {/* Filter 4: Capability */}
        <PlaybookFilterRowCompact<CapabilityTag>
          filterId={capabilityFilter.id}
          label={capabilityFilter.label}
          icon={capabilityFilter.icon}
          options={capabilityFilter.options}
          value={filters.capability}
          onChange={(value) => onFilterChange('capability', value)}
        />

        {/* Filter 5: Capacity */}
        <PlaybookFilterRowCompact<CapacityTag>
          filterId={capacityFilter.id}
          label={capacityFilter.label}
          icon={capacityFilter.icon}
          options={capacityFilter.options}
          value={filters.capacity}
          onChange={(value) => onFilterChange('capacity', value)}
        />
      </div>
    </div>
  );
};

export default PlaybookFilterPanel;
