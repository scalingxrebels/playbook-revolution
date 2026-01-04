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
import InterventionModels from '@/components/InterventionModels';
import GrowthEngines from '@/components/GrowthEngines';
import OperatingSystem from '@/components/OperatingSystem';
import ThetaIndexAssessment from '@/components/ThetaIndexAssessment';
import ThreePillarsModel from '@/components/ThreePillarsModel';
import BoardGovernanceSection from '@/components/BoardGovernanceSection';
import C1StrategyDetail from '@/components/C1StrategyDetail';

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
            
            {/* SECTION 6: THREE PILLARS MODEL */}
            <ThreePillarsModel />
            
            {/* SECTION 7: FRAMEWORK - 4 Capabilities Interactive */}
            <CapabilitiesSection />
            
            {/* SECTION 8: C₁ STRATEGY DETAIL (4 Components) */}
            <C1StrategyDetail />
            
            {/* SECTION 9: 8 DIMENSIONS GRID */}
            <DimensionsGrid />
            
            {/* SECTION 10: BOARD & GOVERNANCE */}
            <BoardGovernanceSection />
            
            {/* SECTION 11: SCALING STAGES */}
            <ScalingStages />
            
            {/* SECTION 12: 3 INTERVENTION MODELS */}
            <InterventionModels />
            
            {/* SECTION 13: 3 GROWTH ENGINES */}
            <GrowthEngines />
            
            {/* SECTION 14: AI-NATIVE OPERATING SYSTEM (5 Dimensions) */}
            <OperatingSystem />
            
            {/* SECTION 15: θ_index ASSESSMENT (6 Dimensions) */}
            <ThetaIndexAssessment />
            
            {/* SECTION 16: LASR.io SCORECARD */}
            <LASRScorecard />
            
            {/* SECTION 17: TRANSFORMATION CASES - Before/After */}
            <TransformationCases />
            
            {/* SECTION 18: CASE STUDIES - Midjourney, Cursor, Perplexity */}
            <CaseStudiesSection />
            
            {/* SECTION 19: SOLUTION - 3 Steps: Diagnose, Design, Deploy */}
            <SolutionSection />
            
            {/* SECTION 20: CONVICTION - Proof & Guarantees */}
            <ProofSection />
            
            {/* SECTION 21: BOOKING CTA */}
            <BookingCTA />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;