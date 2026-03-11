import React from 'react';
import SharedHero from '@/components/shared/SharedHero';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const InsightsHero: React.FC = () => {
  const scrollToContent = () => {
    document.getElementById('insights-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEvents = () => {
    // Will be handled by filter state in parent
    const event = new CustomEvent('insights-filter', { detail: { tab: 'events' } });
    window.dispatchEvent(event);
    document.getElementById('insights-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SharedHero
      overlineEn="Insights · Articles · Events · Case Studies"
      overlineDe="Insights · Artikel · Events · Case Studies"
      headlineLine1En="Operator-Grade Insights."
      headlineLine1De="Operator-Grade Insights."
      headlineLine2En="For Founders Who Scale."
      headlineLine2De="Für Founder, die skalieren."
      subheadlineEn="Execution-first articles, live events and case studies — AI-native, DACH-focused, built for Series A–C. No theory. No fluff. Just what works."
      subheadlineDe="Execution-first Artikel, Live Events und Case Studies — AI-native, DACH-fokussiert, gebaut für Series A–C. Keine Theorie. Kein Fluff. Nur was funktioniert."
    >
      {/* Qualitative Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto">
        <div className="px-4 py-3 bg-card border-2 border-primary/30 shadow-brutal-sm rounded-lg">
          <span className="block text-sm font-bold text-foreground">Operator-led</span>
          <span className="block text-[10px] text-muted-foreground uppercase tracking-wide">
            Execution-first
          </span>
        </div>
        <div className="px-4 py-3 bg-card border-2 border-accent/30 shadow-brutal-sm rounded-lg">
          <span className="block text-sm font-bold text-foreground">Live Events</span>
          <span className="block text-[10px] text-muted-foreground uppercase tracking-wide">
            Webinars + Q&As
          </span>
        </div>
        <div className="px-4 py-3 bg-card border-2 border-primary/30 shadow-brutal-sm rounded-lg">
          <span className="block text-sm font-bold text-foreground">Free Access</span>
          <span className="block text-[10px] text-muted-foreground uppercase tracking-wide">
            No paywall
          </span>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          size="lg"
          className="bg-gradient-primary text-primary-foreground shadow-brutal-sm hover-brutal group"
          onClick={scrollToContent}
        >
          Browse Articles
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-2 shadow-brutal-sm group"
          onClick={scrollToEvents}
        >
          <Calendar className="mr-2 w-4 h-4" />
          See Upcoming Events
        </Button>
      </div>
    </SharedHero>
  );
};

export default InsightsHero;
