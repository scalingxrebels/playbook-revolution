import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

const InsightsCTA: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" />

      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            {language === 'de' ? 'Der nächste Schritt' : 'The next step'}
          </p>

          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? (
              <>
                Wenn ein Artikel relevant war —
                <span className="block italic text-gradient">gibt es dazu auch eine Solution.</span>
              </>
            ) : (
              <>
                If an article was relevant —
                <span className="block italic text-gradient">there's a solution for that.</span>
              </>
            )}
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            {language === 'de'
              ? 'Kein Pitch. Kein Formular. Nur ein Gespräch, wenn es passt.'
              : 'No pitch. No form. Just a conversation, if it fits.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="shadow-brutal hover-brutal group"
              onClick={() => setIsBookingModalOpen(true)}
            >
              <Phone className="mr-2 w-5 h-5" />
              {language === 'de' ? 'Gespräch buchen' : 'Book a call'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-2"
              onClick={() => navigate('/solutions')}
            >
              {language === 'de' ? 'Solutions ansehen' : 'View Solutions'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="insights"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default InsightsCTA;
