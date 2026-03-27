import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Optimized Homepage Components - 7 Essential Sections (archived AI-Native version)
import HeroOptimized from '@/components/homepage/HeroOptimized';
import ProblemOptimized from '@/components/homepage/ProblemOptimized';
import SolutionOptimized from '@/components/homepage/SolutionOptimized';
import HowItWorksOptimized from '@/components/homepage/HowItWorksOptimized';
import FormulaOptimized from '@/components/homepage/FormulaOptimized';
import ProofOptimized from '@/components/homepage/ProofOptimized';
import GrowthCurveOptimized from '@/components/homepage/GrowthCurveOptimized';
import ROICalculatorOptimized from '@/components/homepage/ROICalculatorOptimized';
import FinalCTAOptimized from '@/components/homepage/FinalCTAOptimized';

const AINativeHome = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <HeroOptimized />
            <ProblemOptimized />
            <SolutionOptimized />
            <HowItWorksOptimized />
            <FormulaOptimized />
            <ProofOptimized />
            <GrowthCurveOptimized />
            <ROICalculatorOptimized />
            <FinalCTAOptimized />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default AINativeHome;
