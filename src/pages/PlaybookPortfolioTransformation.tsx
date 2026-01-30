import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { portfolioTransformationData } from '@/data/playbooks/content/portfolio-transformation';

const PlaybookPortfolioTransformation: React.FC = () => {
  return <PlaybookLandingPage data={portfolioTransformationData} />;
};

export default PlaybookPortfolioTransformation;
