import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { gtmRevenueData } from '@/data/playbooks/content/gtm-revenue';

const PlaybookGtmRevenue: React.FC = () => {
  return <PlaybookLandingPage data={gtmRevenueData} />;
};

export default PlaybookGtmRevenue;
