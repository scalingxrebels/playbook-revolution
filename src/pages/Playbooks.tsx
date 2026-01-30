import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PlaybookLibrary from '@/components/PlaybookLibrary';

const Playbooks: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <PlaybookLibrary />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Playbooks;
