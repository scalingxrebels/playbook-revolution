import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import TwinklingStars from '@/components/TwinklingStars';
import GrowthTrails from '@/components/GrowthTrails';

const NotFoundContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleGoBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      {/* Hero Section - Dark Theme */}
      <section className="dark-section relative flex-1 flex flex-col justify-center items-center overflow-hidden noise pt-16">
        {/* Deep Space Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-mesh opacity-60" />

        {/* Twinkling Stars */}
        <div className="absolute inset-0">
          <TwinklingStars />
        </div>

        {/* Growth Trails */}
        <GrowthTrails />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />

        {/* Main Content */}
        <div className="container max-w-4xl mx-auto px-6 py-24 relative z-10 text-center">
          {/* Overline */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <span className="h-px w-12 bg-gradient-primary" />
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
              404 - Page Not Found
            </span>
            <span className="h-px w-12 bg-gradient-primary" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 animate-blur-in text-foreground">
            Oops! Looks Like You Took a Wrong Turn..
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            But don't worry – we specialize in getting things back on track.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="outline"
              size="lg"
              onClick={handleGoBack}
              className="border-foreground/20 text-foreground hover:bg-foreground/10 font-semibold px-8 py-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Take me back to safety
            </Button>
            
            <Button 
              size="lg"
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-8 py-6 shadow-accent-glow hover:shadow-glow transition-all duration-400"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="404"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

const NotFound = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NotFoundContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default NotFound;
