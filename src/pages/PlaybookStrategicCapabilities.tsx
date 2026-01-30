import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { strategicCapabilitiesData } from '@/data/playbooks/content/strategic-capabilities';

const PlaybookStrategicCapabilities: React.FC = () => {
  return <PlaybookLandingPage data={strategicCapabilitiesData} />;
};

export default PlaybookStrategicCapabilities;
