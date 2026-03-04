import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import HeroWithChart from '@/components/homepage/HeroWithChart';
import ProblemOptimized from '@/components/homepage/ProblemOptimized';
import SolutionOptimized from '@/components/homepage/SolutionOptimized';
import HowItWorksOptimized from '@/components/homepage/HowItWorksOptimized';
import FormulaOptimized from '@/components/homepage/FormulaOptimized';
import ProofOptimized from '@/components/homepage/ProofOptimized';
import GrowthCurveOptimized from '@/components/homepage/GrowthCurveOptimized';
import ROICalculatorOptimized from '@/components/homepage/ROICalculatorOptimized';
import FinalCTAOptimized from '@/components/homepage/FinalCTAOptimized';

const IndexV2 = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            {/* HERO with inline Growth Chart */}
            <HeroWithChart />

            {/* THE PROBLEM */}
            <ProblemOptimized />

            {/* THE SOLUTION */}
            <SolutionOptimized />

            {/* HOW IT WORKS */}
            <HowItWorksOptimized />

            {/* DIE FORMEL */}
            <FormulaOptimized />

            {/* PROOF & VALIDATION */}
            <ProofOptimized />

            {/* INTERACTIVE GROWTH CURVE (full version with toggles) */}
            <GrowthCurveOptimized />

            {/* ROI CALCULATOR */}
            <ROICalculatorOptimized />

            {/* FINAL CTA */}
            <FinalCTAOptimized />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default IndexV2;
