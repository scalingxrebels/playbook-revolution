import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import HeroV2 from '@/components/homepage/HeroV2';
import ShiftSection from '@/components/homepage/ShiftSection';
import MechanismsGrid from '@/components/homepage/MechanismsGrid';
import CasesTeaser from '@/components/homepage/CasesTeaser';
import WorkWithUs from '@/components/homepage/WorkWithUs';
import MichelSection from '@/components/homepage/MichelSection';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <HeroV2 />
            <ShiftSection />
            <MechanismsGrid />
            <CasesTeaser />
            <WorkWithUs />
            <MichelSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
