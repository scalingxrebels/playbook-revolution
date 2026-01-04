import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ROICalculator from '@/components/ROICalculator';
import ProblemSection from '@/components/ProblemSection';
import ComparisonSection from '@/components/ComparisonSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import DimensionsGrid from '@/components/DimensionsGrid';
import LASRScorecard from '@/components/LASRScorecard';
import TransformationCases from '@/components/TransformationCases';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import SolutionSection from '@/components/SolutionSection';
import ProofSection from '@/components/ProofSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            {/* SECTION 1: TRIGGER - ROI Calculator shows the gap */}
            <HeroSection />
            <ROICalculator />
            
            {/* SECTION 2: PROBLEM - CEO Observable Facts */}
            <ProblemSection />
            
            {/* SECTION 3: PROOF - Old vs New (Level 1 vs Level 3) */}
            <ComparisonSection />
            
            {/* SECTION 4: FRAMEWORK - 4 Capabilities Interactive */}
            <CapabilitiesSection />
            
            {/* SECTION 5: 8 DIMENSIONS GRID */}
            <DimensionsGrid />
            
            {/* SECTION 6: LASR.io SCORECARD */}
            <LASRScorecard />
            
            {/* SECTION 7: TRANSFORMATION CASES - Before/After */}
            <TransformationCases />
            
            {/* SECTION 7: CASE STUDIES - Midjourney, Cursor, Perplexity */}
            <CaseStudiesSection />
            
            {/* SECTION 6: SOLUTION - 3 Steps: Diagnose, Design, Deploy */}
            <SolutionSection />
            
            {/* SECTION 7: CONVICTION - Proof & Guarantees */}
            <ProofSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
