import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { customerSuccessData } from '@/data/playbooks/content/customer-success';

const PlaybookCustomerSuccess: React.FC = () => {
  return <PlaybookLandingPage data={customerSuccessData} />;
};

export default PlaybookCustomerSuccess;
