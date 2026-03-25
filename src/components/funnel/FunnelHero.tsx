import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import TwinklingStars from '@/components/TwinklingStars';

interface FunnelHeroProps {
  onBookClick: () => void;
}

const FunnelHero: React.FC<FunnelHeroProps> = ({ onBookClick }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" />
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <TwinklingStars />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-10" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10 py-24">
        <div className="text-center space-y-8">
          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground animate-blur-in">
            Deine Strategie funktioniert<br />
            auf dem Slide Deck.
            <span className="block text-gradient bg-gradient-primary italic mt-2">
              In der Realität nicht.
            </span>
          </h1>

          {/* Subline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Wir finden den Hebel der wirklich zieht.
            <br />Und wir setzen ihn um. In 30 Tagen.
          </p>

          {/* CTA */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="xl"
              variant="gradient"
              onClick={onBookClick}
              className="group"
            >
              Kostenloses Strategiegespräch buchen
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Video Embed Placeholder */}
          <div className="max-w-2xl mx-auto mt-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div 
              className="relative aspect-video bg-card/10 backdrop-blur-sm border-2 border-border/30 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setVideoPlaying(true)}
            >
              {!videoPlaying ? (
                <>
                  <img
                    src="/images/ml-speaking.png"
                    alt="Michel Lason — Warum der Impact ausbleibt"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-muted-foreground">
                    90 Sek · „Warum der Impact ausbleibt — und wie wir das ändern."
                  </p>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <p className="text-sm">Video wird geladen…</p>
                </div>
              )}
            </div>
          </div>

          {/* Micro-copy */}
          <p className="text-sm text-muted-foreground/70 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            Bereits genutzt von CEOs aus B2B SaaS · Series A & B · DACH
          </p>
        </div>
      </div>
    </section>
  );
};

export default FunnelHero;
