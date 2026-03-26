import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ExpertiseHub from '@/components/expertise/ExpertiseHub';

const Expertise: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ExpertiseHub />
      <Footer />
    </div>
  );
};

export default Expertise;
