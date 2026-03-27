import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ExpertiseSpoke from '@/components/expertise/ExpertiseSpoke';
import { m1Data } from '@/data/expertise/m1-hypothesen-maschine';

const ExpertiseM1: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <ExpertiseSpoke data={m1Data} />
    <Footer />
  </div>
);

export default ExpertiseM1;
