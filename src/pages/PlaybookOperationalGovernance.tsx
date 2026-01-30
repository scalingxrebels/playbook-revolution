import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { operationalGovernanceData } from '@/data/playbooks/content/operational-governance';

const PlaybookOperationalGovernance: React.FC = () => {
  return <PlaybookLandingPage data={operationalGovernanceData} />;
};

export default PlaybookOperationalGovernance;
