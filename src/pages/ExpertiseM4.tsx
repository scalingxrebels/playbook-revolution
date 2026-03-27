import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ExpertiseSpoke from '@/components/expertise/ExpertiseSpoke';
import { m4Data } from '@/data/expertise/m4-ai-orchestration';

const ExpertiseM4: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <ExpertiseSpoke data={m4Data} />
    <Footer />
  </div>
);

export default ExpertiseM4;
