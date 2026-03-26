import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import HomeHero from '@/components/homepage/HomeHero';
import HomeShift from '@/components/homepage/HomeShift';
import HomeMechanisms from '@/components/homepage/HomeMechanisms';
import FormulaOptimized from '@/components/homepage/FormulaOptimized';
import HomeCases from '@/components/homepage/HomeCases';
import HomeWorkWithUs from '@/components/homepage/HomeWorkWithUs';
import HomeTeam from '@/components/homepage/HomeTeam';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            {/* SECTION 1: HERO */}
            <HomeHero />
            {/* SECTION 2: THE SHIFT */}
            <HomeShift />
            {/* SECTION 3: WINNING MECHANISMS GRID */}
            <HomeMechanisms />
            {/* SECTION 4: DIE FORMEL FÜR HYPERGROWTH */}
            <FormulaOptimized />
            {/* SECTION 5: CASES TEASER */}
            <HomeCases />
            {/* SECTION 6: WORK WITH US */}
            <HomeWorkWithUs />
            {/* SECTION 7: MENSCHEN HINTER SCALINGX */}
            <HomeTeam />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
