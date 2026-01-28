import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import CookieBanner from "./components/CookieBanner";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Playbooks = lazy(() => import("./pages/Playbooks"));
const Solutions = lazy(() => import("./pages/Solutions"));
const SolutionCategory = lazy(() => import("./pages/SolutionCategory"));
const Expertise = lazy(() => import("./pages/Expertise"));
const Community = lazy(() => import("./pages/Community"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const AGB = lazy(() => import("./pages/AGB"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Cases = lazy(() => import("./pages/Cases"));
const About = lazy(() => import("./pages/About"));
const LeadsDashboard = lazy(() => import("./pages/LeadsDashboard"));
const Auth = lazy(() => import("./pages/Auth"));
const ML = lazy(() => import("./pages/ML"));
const AH = lazy(() => import("./pages/AH"));
const FM = lazy(() => import("./pages/FM"));
const PowerUpCACCrisis = lazy(() => import("./pages/PowerUpCACCrisis"));
const PowerUpGrowthMomentum = lazy(() => import("./pages/PowerUpGrowthMomentum"));
const PowerUpPricingPower = lazy(() => import("./pages/PowerUpPricingPower"));
const PowerUpNRREngine = lazy(() => import("./pages/PowerUpNRREngine"));
const PowerUpScalingVelocity = lazy(() => import("./pages/PowerUpScalingVelocity"));
const PowerUpAIQuickWins = lazy(() => import("./pages/PowerUpAIQuickWins"));
const PowerUpBoardReadiness = lazy(() => import("./pages/PowerUpBoardReadiness"));
const PowerUpPortfolioPerformance = lazy(() => import("./pages/PowerUpPortfolioPerformance"));
const PowerUpCustomSprint = lazy(() => import("./pages/PowerUpCustomSprint"));
const BoostEfficientHypergrowth = lazy(() => import("./pages/BoostEfficientHypergrowth"));
const BoostGrowthEngine = lazy(() => import("./pages/BoostGrowthEngine"));
const BoostPricingDominance = lazy(() => import("./pages/BoostPricingDominance"));
const BoostNRRMachine = lazy(() => import("./pages/BoostNRRMachine"));
const BoostScalingOS = lazy(() => import("./pages/BoostScalingOS"));
const BoostAIMaturity = lazy(() => import("./pages/BoostAIMaturity"));
const BoostBoardExcellence = lazy(() => import("./pages/BoostBoardExcellence"));
const BoostPortfolioValue = lazy(() => import("./pages/BoostPortfolioValue"));
const BoostCustomProgram = lazy(() => import("./pages/BoostCustomProgram"));
const AccelerateHypergrowth = lazy(() => import("./pages/AccelerateHypergrowth"));
const AccelerateSustainableGrowth = lazy(() => import("./pages/AccelerateSustainableGrowth"));
const AccelerateExitReadiness = lazy(() => import("./pages/AccelerateExitReadiness"));
const AccelerateAINativeScaling = lazy(() => import("./pages/AccelerateAINativeScaling"));
const AcceleratePortfolioTransformation = lazy(() => import("./pages/AcceleratePortfolioTransformation"));
const StrategicAdvisory = lazy(() => import("./pages/StrategicAdvisory"));
const VCDueDiligenceSimulation = lazy(() => import("./pages/VCDueDiligenceSimulation"));
const GTMEffectivenessReview = lazy(() => import("./pages/GTMEffectivenessReview"));
const PricingPackagingReview = lazy(() => import("./pages/PricingPackagingReview"));
const ScalingReadinessAssessment = lazy(() => import("./pages/ScalingReadinessAssessment"));
const AIMaturityAssessment = lazy(() => import("./pages/AIMaturityAssessment"));
const PortfolioAssessment = lazy(() => import("./pages/PortfolioAssessment"));
const InvestorReadinessPitchDeckCheck = lazy(() => import("./pages/InvestorReadinessPitchDeckCheck"));
const CustomAnalysisReport = lazy(() => import("./pages/CustomAnalysisReport"));
const Workshop = lazy(() => import("./pages/Workshop"));
const Keynote = lazy(() => import("./pages/Keynote"));
const ExpertSession = lazy(() => import("./pages/ExpertSession"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/playbooks" element={<Playbooks />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions/:category" element={<SolutionCategory />} />
                <Route path="/expertise" element={<Expertise />} />
                <Route path="/community" element={<Community />} />
                <Route path="/cases" element={<Cases />} />
                <Route path="/about" element={<About />} />
                <Route path="/case-study/:id" element={<CaseStudy />} />
                <Route path="/leads-dashboard" element={<LeadsDashboard />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/agb" element={<AGB />} />
                <Route path="/ml" element={<ML />} />
                <Route path="/ah" element={<AH />} />
                <Route path="/fm" element={<FM />} />
                <Route path="/solutions/power-up/cac-crisis" element={<PowerUpCACCrisis />} />
                <Route path="/solutions/power-up/growth-momentum" element={<PowerUpGrowthMomentum />} />
                <Route path="/solutions/power-up/pricing-power" element={<PowerUpPricingPower />} />
                <Route path="/solutions/power-up/nrr-engine" element={<PowerUpNRREngine />} />
                <Route path="/solutions/power-up/scaling-velocity" element={<PowerUpScalingVelocity />} />
                <Route path="/solutions/power-up/ai-quick-wins" element={<PowerUpAIQuickWins />} />
                <Route path="/solutions/power-up/board-readiness" element={<PowerUpBoardReadiness />} />
                <Route path="/solutions/power-up/portfolio-performance" element={<PowerUpPortfolioPerformance />} />
                <Route path="/solutions/power-up/custom-sprint" element={<PowerUpCustomSprint />} />
                <Route path="/solutions/boost/efficient-hypergrowth" element={<BoostEfficientHypergrowth />} />
                <Route path="/solutions/boost/growth-engine" element={<BoostGrowthEngine />} />
                <Route path="/solutions/boost/pricing-dominance" element={<BoostPricingDominance />} />
                <Route path="/solutions/boost/nrr-machine" element={<BoostNRRMachine />} />
                <Route path="/solutions/boost/scaling-os" element={<BoostScalingOS />} />
                <Route path="/solutions/boost/ai-maturity" element={<BoostAIMaturity />} />
                <Route path="/solutions/boost/board-excellence" element={<BoostBoardExcellence />} />
                <Route path="/solutions/boost/portfolio-value" element={<BoostPortfolioValue />} />
                <Route path="/solutions/boost/custom-program" element={<BoostCustomProgram />} />
                <Route path="/solutions/accelerate/hypergrowth" element={<AccelerateHypergrowth />} />
                <Route path="/solutions/accelerate/sustainable-growth" element={<AccelerateSustainableGrowth />} />
                <Route path="/solutions/accelerate/exit-readiness" element={<AccelerateExitReadiness />} />
                <Route path="/solutions/accelerate/ai-native-scaling" element={<AccelerateAINativeScaling />} />
                <Route path="/solutions/accelerate/portfolio-transformation" element={<AcceleratePortfolioTransformation />} />
                <Route path="/solutions/strategic-advisory" element={<StrategicAdvisory />} />
                <Route path="/solutions/vc-dd-simulation" element={<VCDueDiligenceSimulation />} />
                <Route path="/solutions/gtm-effectiveness-review" element={<GTMEffectivenessReview />} />
                <Route path="/solutions/pricing-packaging-review" element={<PricingPackagingReview />} />
                <Route path="/solutions/scaling-readiness-assessment" element={<ScalingReadinessAssessment />} />
                <Route path="/solutions/ai-maturity-assessment" element={<AIMaturityAssessment />} />
                <Route path="/solutions/portfolio-assessment" element={<PortfolioAssessment />} />
                <Route path="/solutions/investor-readiness-pitch-deck-check" element={<InvestorReadinessPitchDeckCheck />} />
                <Route path="/solutions/custom-analysis-report" element={<CustomAnalysisReport />} />
                <Route path="/solutions/workshop" element={<Workshop />} />
                <Route path="/solutions/keynote" element={<Keynote />} />
                <Route path="/solutions/expert-session" element={<ExpertSession />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <CookieBanner />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
