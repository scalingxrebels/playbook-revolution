import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ExpertiseSpoke from '@/components/expertise/ExpertiseSpoke';
import { m3Data } from '@/data/expertise/m3-funktionierende-synthese';

const ExpertiseM3: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <ExpertiseSpoke data={m3Data} />
    <Footer />
  </div>
);

export default ExpertiseM3;
