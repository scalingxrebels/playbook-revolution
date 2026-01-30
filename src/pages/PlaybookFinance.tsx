import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { financeData } from '@/data/playbooks/content/finance';

const PlaybookFinance: React.FC = () => {
  return <PlaybookLandingPage data={financeData} />;
};

export default PlaybookFinance;
