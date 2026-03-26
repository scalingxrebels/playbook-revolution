import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ROICalculatorContent } from '@/components/homepage/ROICalculatorOptimized';

const PlaybookSoftCTASection: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [isROIModalOpen, setIsROIModalOpen] = useState(false);

  return (
    <>
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="relative py-16 md:py-24 border-t border-border/10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] to-background" />
        
        <div className={`container max-w-3xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Overline */}
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6 block">
            {language === 'de' ? 'Bereit es umzusetzen?' : 'Ready to implement?'}
          </span>

          {/* Headline */}
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === 'de'
              ? <>Das Playbook zeigt wie.{' '}<span className="italic text-gradient">Wir helfen dir es zu tun.</span></>
              : <>The playbook shows how.{' '}<span className="italic text-gradient">We help you do it.</span></>
            }
          </h2>

          {/* Body */}
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
            {language === 'de'
              ? 'Nicht irgendwann. In 30 Tagen. Mit Systemen die bleiben — nicht mit Slides die verschwinden.'
              : 'Not someday. In 30 days. With systems that stay — not slides that disappear.'}
          </p>

          {/* 2 Ghost CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
              asChild
            >
              <Link to="/solutions">
                <ArrowRight className="w-4 h-4 mr-2" />
                {language === 'de' ? 'Wie wir das umsetzen' : 'How we implement this'}
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-border/50 text-muted-foreground hover:bg-muted/20 hover:border-border"
              onClick={() => setIsROIModalOpen(true)}
            >
              <Calculator className="w-4 h-4 mr-2" />
              {language === 'de' ? 'Deinen ROI berechnen' : 'Calculate your ROI'}
            </Button>
          </div>

          {/* Micro-copy */}
          <p className="text-xs text-muted-foreground/60">
            {language === 'de'
              ? 'Unverbindlich · Kein Formular · Direkt mit Michel'
              : 'No commitment · No form · Directly with Michel'}
          </p>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      <Dialog open={isROIModalOpen} onOpenChange={setIsROIModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-background border-border">
          <div className="p-6">
            <ROICalculatorContent />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlaybookSoftCTASection;
