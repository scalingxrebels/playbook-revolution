import { useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

import FunnelHero from '@/components/funnel/FunnelHero';
import FunnelPain from '@/components/funnel/FunnelPain';
import FunnelReframe from '@/components/funnel/FunnelReframe';
import FunnelSolution from '@/components/funnel/FunnelSolution';
import FunnelProof from '@/components/funnel/FunnelProof';
import FunnelFounder from '@/components/funnel/FunnelFounder';
import FunnelQualification from '@/components/funnel/FunnelQualification';
import FunnelCTA from '@/components/funnel/FunnelCTA';

const FunnelV2 = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => setIsBookingOpen(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          {/* No Navigation — pure conversion funnel */}
          <main>
            <FunnelHero onBookClick={handleBookClick} />
            <FunnelPain />
            <FunnelReframe />
            <FunnelSolution />
            <FunnelProof />
            <FunnelFounder />
            <FunnelQualification />
            <FunnelCTA />
          </main>
          {/* No Footer */}

          <FilloutBookingModal
            formSlug="inflection-call"
            source="funnel-v2"
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default FunnelV2;
