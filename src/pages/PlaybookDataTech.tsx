import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { dataTechData } from '@/data/playbooks/content/data-tech';

const PlaybookDataTech: React.FC = () => {
  return <PlaybookLandingPage data={dataTechData} />;
};

export default PlaybookDataTech;
