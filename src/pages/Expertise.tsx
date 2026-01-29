import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResearchHub from '@/components/ResearchHub';

const Research: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <ResearchHub />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Research;
