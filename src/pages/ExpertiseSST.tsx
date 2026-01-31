import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SSTLandingPage from '@/components/research/SSTLandingPage';
import { sstPageData } from '@/data/research/sst';

const ExpertiseSST: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <SSTLandingPage data={sstPageData} />
      <Footer />
    </div>
  );
};

export default ExpertiseSST;
