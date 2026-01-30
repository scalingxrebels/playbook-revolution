import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { operatingSystemsData } from '@/data/playbooks/content/operating-systems';

const PlaybookOperatingSystems: React.FC = () => {
  return <PlaybookLandingPage data={operatingSystemsData} />;
};

export default PlaybookOperatingSystems;
