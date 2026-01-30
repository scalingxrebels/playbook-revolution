import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { strategicGovernanceData } from '@/data/playbooks/content/strategic-governance';

const PlaybookStrategicGovernance: React.FC = () => {
  return <PlaybookLandingPage data={strategicGovernanceData} />;
};

export default PlaybookStrategicGovernance;
