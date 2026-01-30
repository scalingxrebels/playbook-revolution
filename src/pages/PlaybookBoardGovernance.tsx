import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { boardGovernanceData } from '@/data/playbooks/content/board-governance';

const PlaybookBoardGovernance: React.FC = () => {
  return <PlaybookLandingPage data={boardGovernanceData} />;
};

export default PlaybookBoardGovernance;
