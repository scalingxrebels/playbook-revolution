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
import ThetaSelfTest from '@/components/ThetaSelfTest';
import ThreePillarsModel from '@/components/ThreePillarsModel';
import BoardGovernanceSection from '@/components/BoardGovernanceSection';
import C1StrategyDetail from '@/components/C1StrategyDetail';
import SuperlinearGrowthSection from '@/components/SuperlinearGrowthSection';
import AIBoardGovernancePillars from '@/components/AIBoardGovernancePillars';
import SquadModelSection from '@/components/SquadModelSection';
import CapitalStrategySection from '@/components/CapitalStrategySection';
import EcosystemMap from '@/components/EcosystemMap';
import MarketAnalysisSection from '@/components/MarketAnalysisSection';
import ServiceMatrixSection from '@/components/ServiceMatrixSection';
import BenefitsDashboard from '@/components/BenefitsDashboard';
import GTMFunnelSection from '@/components/GTMFunnelSection';
import WhatWeCreatedSection from '@/components/WhatWeCreatedSection';
import SCQASection from '@/components/SCQASection';
import BottleneckWizard from '@/components/BottleneckWizard';

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
            
            {/* SECTION 2: SCQA - Situation, Complication, Question, Answer */}
            <SCQASection />
            
            {/* SECTION 3: WHAT WE CREATED - Deductive Derivation */}
            <WhatWeCreatedSection />
            
            {/* SECTION 4: PROBLEM - CEO Observable Facts */}
            <ProblemSection />
            
            {/* SECTION 5: PROOF - Old vs New (Level 1 vs Level 3) */}
            <ComparisonSection />
            
            {/* SECTION 4: GROWTH VISUALIZATION */}
            <GrowthChart />
            
            {/* SECTION 5: AI-LEVERAGE BENCHMARKS */}
            <AILeverageBenchmarks />
            
            {/* SECTION 6: THREE PILLARS MODEL */}
            <ThreePillarsModel />
            
            {/* SECTION 7: FRAMEWORK - 4 Capabilities Interactive */}
            <CapabilitiesSection />
            
            {/* SECTION 7b: BOTTLENECK WIZARD - Identify weakest capability */}
            <BottleneckWizard />
            
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
            
            {/* SECTION 16: θ_index SELF-TEST (Interactive Quiz) */}
            <ThetaSelfTest />
            
            {/* SECTION 17: LASR.io SCORECARD */}
            <LASRScorecard />
            
            {/* SECTION 17: SUPER-LINEAR GROWTH VALIDATION */}
            <SuperlinearGrowthSection />
            
            {/* SECTION 18: 7 PILLARS AI BOARD GOVERNANCE */}
            <AIBoardGovernancePillars />
            
            {/* SECTION 19: SQUAD MODEL (Organizational Architecture) */}
            <SquadModelSection />
            
            {/* SECTION 20: CAPITAL STRATEGY (VC Playbook) */}
            <CapitalStrategySection />
            
            {/* SECTION 21: ECOSYSTEM MAP (16 Documents Overview) */}
            <EcosystemMap />
            
            {/* SECTION 22: MARKET ANALYSIS (TAM/SAM/SOM, ICP) */}
            <MarketAnalysisSection />
            
            {/* SECTION 23: 3×3 SERVICE MATRIX */}
            <ServiceMatrixSection />
            
            {/* SECTION 24: BENEFITS DASHBOARD (7 Categories, 32+ Benefits) */}
            <BenefitsDashboard />
            
            {/* SECTION 25: GTM FUNNEL (Tool-First Strategy) */}
            <GTMFunnelSection />
            
            {/* SECTION 26: TRANSFORMATION CASES - Before/After */}
            <TransformationCases />
            
            {/* SECTION 27: CASE STUDIES - Midjourney, Cursor, Perplexity */}
            <CaseStudiesSection />
            
            {/* SECTION 28: SOLUTION - 3 Steps: Diagnose, Design, Deploy */}
            <SolutionSection />
            
            {/* SECTION 29: CONVICTION - Proof & Guarantees */}
            <ProofSection />
            
            {/* SECTION 30: BOOKING CTA */}
            <BookingCTA />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;