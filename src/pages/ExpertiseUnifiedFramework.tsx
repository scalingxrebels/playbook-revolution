import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedFrameworkLandingPage from '@/components/research/UnifiedFrameworkLandingPage';
import { unifiedFrameworkPageData } from '@/data/research/unified-framework';

const ExpertiseUnifiedFramework: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <UnifiedFrameworkLandingPage data={unifiedFrameworkPageData} />
      <Footer />
    </div>
  );
};

export default ExpertiseUnifiedFramework;
