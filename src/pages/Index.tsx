import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ROICalculator from '@/components/ROICalculator';
import ProblemSection from '@/components/ProblemSection';
import ComparisonSection from '@/components/ComparisonSection';
import GrowthChart from '@/components/GrowthChart';
import AILeverageBenchmarks from '@/components/AILeverageBenchmarks';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import DimensionsGrid from '@/components/DimensionsGrid';
import ScalingStages from '@/components/ScalingStages';
import LASRScorecard from '@/components/LASRScorecard';
import TransformationCases from '@/components/TransformationCases';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import SolutionSection from '@/components/SolutionSection';
import ProofSection from '@/components/ProofSection';
import BookingCTA from '@/components/BookingCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            {/* SECTION 1: TRIGGER - Hero + ROI Calculator */}
            <HeroSection />
            <ROICalculator />
            
            {/* SECTION 2: PROBLEM - CEO Observable Facts */}
            <ProblemSection />
            
            {/* SECTION 3: PROOF - Old vs New (Level 1 vs Level 3) */}
            <ComparisonSection />
            
            {/* SECTION 4: GROWTH VISUALIZATION */}
            <GrowthChart />
            
            {/* SECTION 5: AI-LEVERAGE BENCHMARKS */}
            <AILeverageBenchmarks />
            
            {/* SECTION 6: FRAMEWORK - 4 Capabilities Interactive */}
            <CapabilitiesSection />
            
            {/* SECTION 7: 8 DIMENSIONS GRID */}
            <DimensionsGrid />
            
            {/* SECTION 8: SCALING STAGES */}
            <ScalingStages />
            
            {/* SECTION 9: LASR.io SCORECARD */}
            <LASRScorecard />
            
            {/* SECTION 10: TRANSFORMATION CASES - Before/After */}
            <TransformationCases />
            
            {/* SECTION 11: CASE STUDIES - Midjourney, Cursor, Perplexity */}
            <CaseStudiesSection />
            
            {/* SECTION 12: SOLUTION - 3 Steps: Diagnose, Design, Deploy */}
            <SolutionSection />
            
            {/* SECTION 13: CONVICTION - Proof & Guarantees */}
            <ProofSection />
            
            {/* SECTION 14: BOOKING CTA */}
            <BookingCTA />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;