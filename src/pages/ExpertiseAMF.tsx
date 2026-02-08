import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResearchLandingPage from '@/components/research/ResearchLandingPage';
import { amfPageData } from '@/data/research/amf';

const ExpertiseAMF: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ResearchLandingPage data={amfPageData} researchType="amf" />
      <Footer />
    </div>
  );
};

export default ExpertiseAMF;
