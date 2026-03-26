import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ExpertiseSpoke from '@/components/expertise/ExpertiseSpoke';
import { m2Data } from '@/data/expertise/m2-uebersetzungskompetenz';

const ExpertiseM2: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <ExpertiseSpoke data={m2Data} />
    <Footer />
  </div>
);

export default ExpertiseM2;
