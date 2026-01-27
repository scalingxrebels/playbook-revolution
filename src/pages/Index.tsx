import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Optimized Homepage Components - 7 Essential Sections
import HeroOptimized from '@/components/homepage/HeroOptimized';
import ProblemOptimized from '@/components/homepage/ProblemOptimized';
import SolutionOptimized from '@/components/homepage/SolutionOptimized';
import HowItWorksOptimized from '@/components/homepage/HowItWorksOptimized';
import ProofOptimized from '@/components/homepage/ProofOptimized';
import ROICalculatorOptimized from '@/components/homepage/ROICalculatorOptimized';
import FinalCTAOptimized from '@/components/homepage/FinalCTAOptimized';
import BookingCTA from '@/components/BookingCTA';

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
            
            {/* SECTION 5: PROOF & VALIDATION (50vh) */}
            <ProofOptimized />
            
            {/* SECTION 6: ROI CALCULATOR (70vh) */}
            <ROICalculatorOptimized />
            
            {/* SECTION 7: FINAL CTA (40vh) */}
            <FinalCTAOptimized />
            
            {/* BOOKING FORM */}
            <div id="booking-form">
              <BookingCTA />
            </div>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
