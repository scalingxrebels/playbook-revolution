import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { operationsData } from '@/data/playbooks/content/operations';

const PlaybookOperations: React.FC = () => {
  return <PlaybookLandingPage data={operationsData} />;
};

export default PlaybookOperations;
