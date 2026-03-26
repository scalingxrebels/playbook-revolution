import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HomeShift: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const deContent = [
    'Du hast eine Strategie. Sie sieht auf dem Slide Deck gut aus.',
    'Aber der Impact kommt nicht. Das Board wartet. Das Team ist frustriert. Und du fragst dich: Woran liegt es eigentlich?',
    'Das ist kein Versagen. Das ist ein Systemfehler. Früher war Strategie das Problem. Heute hat jedes Startup eine Strategie. Das Problem ist die Lücke zwischen dem was auf dem Slide Deck steht — und dem was im Unternehmen passiert.',
    'Und AI hat die Spielregeln neu geschrieben: Wer AI als Multiplier nutzt, bewegt sich 10x schneller. Wer es nicht tut, verliert nicht langsam. Er verliert schnell. Das ist der Moment in dem wir operieren.',
  ];

  const enContent = [
    'You have a strategy. It looks great on the slide deck.',
    "But the impact isn't coming. The board is waiting. The team is frustrated. And you're wondering: What's actually going wrong?",
    "This isn't failure. It's a system error. Strategy used to be the problem. Today every startup has a strategy. The problem is the gap between what's on the slide deck — and what's happening in the company.",
    "And AI has rewritten the rules: Those who use AI as a multiplier move 10x faster. Those who don't don't lose slowly. They lose fast. That's the moment we operate in.",
  ];

  const content = language === 'de' ? deContent : enContent;

  return (
    <section
      id="shift-section"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="container max-w-3xl mx-auto px-6">
        <h2
          className={`font-display text-3xl md:text-4xl lg:text-5xl mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {language === 'de' ? (
            <>Die Welt hat sich verändert.<br />Deine Strategie noch nicht.</>
          ) : (
            <>The world has changed.<br />Your strategy hasn't.</>
          )}
        </h2>

        <div className="space-y-6">
          {content.map((paragraph, i) => (
            <p
              key={i}
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeShift;
