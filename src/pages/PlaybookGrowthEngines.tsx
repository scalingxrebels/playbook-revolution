import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { growthEnginesData } from '@/data/playbooks/content/growth-engines';

const PlaybookGrowthEngines: React.FC = () => {
  return <PlaybookLandingPage data={growthEnginesData} />;
};

export default PlaybookGrowthEngines;
