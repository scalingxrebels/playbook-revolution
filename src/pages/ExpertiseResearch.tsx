import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResearchHub from '@/components/ResearchHub';

const ExpertiseResearch: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ResearchHub />
      <Footer />
    </div>
  );
};

export default ExpertiseResearch;
