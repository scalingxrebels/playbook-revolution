import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ShiftSection: React.FC = () => {
  const { language } = useLanguage();

  const de = {
    headline: ['Die Welt hat sich verändert.', 'Deine Strategie noch nicht.'],
    paragraphs: [
      'Du hast eine Strategie. Sie sieht auf dem Slide Deck gut aus.',
      'Aber der Impact kommt nicht. Das Board wartet. Das Team ist frustriert. Und du fragst dich: Woran liegt es eigentlich?',
      'Das ist kein Versagen. Das ist ein Systemfehler. Früher war Strategie das Problem. Heute hat jedes Startup eine Strategie. Das Problem ist die Lücke zwischen dem was auf dem Slide Deck steht — und dem was im Unternehmen passiert.',
      'Und AI hat die Spielregeln neu geschrieben: Wer AI als Multiplier nutzt, bewegt sich 10x schneller. Wer es nicht tut, verliert nicht langsam. Er verliert schnell.',
      'Das ist der Moment in dem wir operieren.',
    ],
  };

  const en = {
    headline: ['The world has changed.', 'Your strategy hasn\'t.'],
    paragraphs: [
      'You have a strategy. It looks great on the slide deck.',
      'But the impact isn\'t coming. The board is waiting. The team is frustrated. And you\'re wondering: what\'s actually going wrong?',
      'This isn\'t failure. It\'s a systems error. Strategy used to be the problem. Today, every startup has a strategy. The problem is the gap between what\'s on the slide deck — and what\'s actually happening in the company.',
      'And AI has rewritten the rules: those who use AI as a multiplier move 10x faster. Those who don\'t aren\'t losing slowly. They\'re losing fast.',
      'That\'s the moment we operate in.',
    ],
  };

  const content = language === 'de' ? de : en;

  return (
    <section id="shift-section" className="py-24 md:py-32 bg-background noise">
      <div className="container max-w-3xl mx-auto px-6">
        {/* Headline */}
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 leading-tight">
          {content.headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* Narrative Body */}
        <div className="space-y-6">
          {content.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-base md:text-lg leading-relaxed ${
                i === content.paragraphs.length - 1
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground'
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;
