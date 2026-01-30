import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { productData } from '@/data/playbooks/content/product';

const PlaybookProduct: React.FC = () => {
  return <PlaybookLandingPage data={productData} />;
};

export default PlaybookProduct;
