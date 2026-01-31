import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ANSTLandingPage from '@/components/research/ANSTLandingPage';
import { anstPageData } from '@/data/research/anst';

const ExpertiseANST: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ANSTLandingPage data={anstPageData} />
      <Footer />
    </div>
  );
};

export default ExpertiseANST;
