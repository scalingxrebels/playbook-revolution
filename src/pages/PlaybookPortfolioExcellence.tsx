import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { portfolioExcellenceData } from '@/data/playbooks/content/portfolio-excellence';

const PlaybookPortfolioExcellence: React.FC = () => {
  return <PlaybookLandingPage data={portfolioExcellenceData} />;
};

export default PlaybookPortfolioExcellence;
