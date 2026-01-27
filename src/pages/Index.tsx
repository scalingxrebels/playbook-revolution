import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Optimized Homepage Components - 7 Essential Sections
import HeroOptimized from '@/components/homepage/HeroOptimized';
import ProblemOptimized from '@/components/homepage/ProblemOptimized';
import SolutionOptimized from '@/components/homepage/SolutionOptimized';
import HowItWorksOptimized from '@/components/homepage/HowItWorksOptimized';
import FormulaOptimized from '@/components/homepage/FormulaOptimized';
import ProofOptimized from '@/components/homepage/ProofOptimized';
import ROICalculatorOptimized from '@/components/homepage/ROICalculatorOptimized';
import FinalCTAOptimized from '@/components/homepage/FinalCTAOptimized';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            {/* SECTION 1: HERO (100vh) */}
            <HeroOptimized />
            
            {/* SECTION 2: THE PROBLEM (50vh) */}
            <ProblemOptimized />
            
            {/* SECTION 3: THE SOLUTION (50vh) */}
            <SolutionOptimized />
            
            {/* SECTION 4: HOW IT WORKS (60vh) */}
            <HowItWorksOptimized />
            
            {/* SECTION 5: DIE FORMEL (50vh) */}
            <FormulaOptimized />
            
            {/* SECTION 6: PROOF & VALIDATION (50vh) */}
            <ProofOptimized />
            
            {/* SECTION 7: ROI CALCULATOR (70vh) */}
            <ROICalculatorOptimized />
            
            {/* SECTION 8: FINAL CTA with BOOKING FORM (60vh) */}
            <FinalCTAOptimized />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
