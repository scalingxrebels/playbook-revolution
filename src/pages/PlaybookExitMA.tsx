import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { exitMaData } from '@/data/playbooks/content/exit-ma';

const PlaybookExitMA: React.FC = () => {
  return <PlaybookLandingPage data={exitMaData} />;
};

export default PlaybookExitMA;
