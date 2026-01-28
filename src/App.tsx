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
