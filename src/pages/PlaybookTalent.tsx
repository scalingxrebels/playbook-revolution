import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { talentData } from '@/data/playbooks/content/talent';

const PlaybookTalent: React.FC = () => {
  return <PlaybookLandingPage data={talentData} />;
};

export default PlaybookTalent;
