import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbulb, Target, Map, Rocket, Shield, ArrowRight, CheckCircle, Database, FileText, Globe } from 'lucide-react';

const WhatWeCreatedSection = () => {
  const { language } = useLanguage();

  const empiricalBasis = [
    {
      finding: language === 'de' ? 'Level 3 skaliert 4-10x schneller' : 'Level 3 scales 4-10x faster',
      detail: language === 'de' ? '8-18 Monate vs. 60-84 Monate zu €100M ARR' : '8-18 months vs. 60-84 months to €100M ARR',
      stat: '4-10x',
    },
    {
      finding: language === 'de' ? 'Coordination Cost sinkt 80-99%' : 'Coordination Cost drops 80-99%',
      detail: 'O(n²) → O(n log n)',
      stat: '-87%',
    },
    {
      finding: language === 'de' ? 'Bottleneck-Fixing reduziert Time to €100M' : 'Bottleneck-Fixing reduces Time to €100M',
      detail: language === 'de' ? 'Von 24 Monate → 12 Monate' : 'From 24 months → 12 months',
      stat: '-50%',
    },
    {
      finding: language === 'de' ? 'θ_index predicts Time to €100M' : 'θ_index predicts Time to €100M',
      detail: 'r = 0.89, p ≈ 3×10⁻⁸',
      stat: 'R²=0.76',
    },
  ];

  const ceoObservableFacts = [
    {
      icon: '📉',
      fact: language === 'de' ? 'Wachstum stagniert' : 'Growth is stagnating',
      detail: '150% → 80% YoY',
    },
    {
      icon: '🔄',
      fact: language === 'de' ? 'Chaos nimmt zu' : 'Chaos is increasing',
      detail: '80 Leute = 4,950 coordination pairs',
    },
    {
      icon: '💰',
      fact: language === 'de' ? 'Kapital knapp' : 'Capital is scarce',
      detail: language === 'de' ? '18 Monate Runway, braucht 5-7 Jahre' : '18 months runway, needs 5-7 years',
    },
    {
      icon: '⏱️',
      fact: 'Board Pressure',
      detail: language === 'de' ? '6-12 Monate für Turnaround' : '6-12 months for turnaround',
    },
    {
      icon: '💔',
      fact: language === 'de' ? 'Kultur zerbricht' : 'Culture is breaking',
      detail: '20% Churn, 60h/Woche',
    },
  ];

  const ceoNeeds = [
    { icon: Lightbulb, need: 'VERSTEHEN', question: language === 'de' ? 'Warum schaffen die das und ich nicht?' : 'Why can they do it and I can\'t?' },
    { icon: Target, need: 'DIAGNOSE', question: language === 'de' ? 'Wo bin ich? Was fehlt?' : 'Where am I? What\'s missing?' },
    { icon: Map, need: 'PLAN', question: language === 'de' ? 'Wie komme ich von Level 1 zu Level 3?' : 'How do I get from Level 1 to Level 3?' },
    { icon: Rocket, need: 'EXECUTION', question: language === 'de' ? 'Wer hilft mir dabei?' : 'Who helps me with this?' },
    { icon: Shield, need: 'GARANTIE', question: language === 'de' ? 'Was, wenn es nicht funktioniert?' : 'What if it doesn\'t work?' },
  ];

  const whatWeCreated = [
    {
      name: 'Foundation Ecosystem',
      icon: Database,
      purpose: 'VERSTEHEN',
      description: language === 'de' 
        ? 'WARUM schaffen AI-native Companies das? 250,000+ Wörter wissenschaftliche Basis.' 
        : 'WHY do AI-native companies achieve this? 250,000+ words scientific foundation.',
      stat: '250K+ Wörter',
    },
    {
      name: 'SXH Ecosystem',
      icon: FileText,
      purpose: 'DIAGNOSE + PLAN + EXECUTION',
      description: language === 'de' 
        ? 'WIE schaffe ich das? 16 Dokumente, 180K Wörter, verkaufbare Services.' 
        : 'HOW do I achieve this? 16 documents, 180K words, sellable services.',
      stat: '180K Wörter',
    },
    {
      name: 'Homepage',
      icon: Globe,
      purpose: 'ERLEBBAR',
      description: language === 'de' 
        ? 'Der Beweis, dass es einen messbaren, garantierten Weg gibt.' 
        : 'The proof that there is a measurable, guaranteed path.',
      stat: '30+ Sektionen',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            {language === 'de' ? 'DEDUKTIVE HERLEITUNG' : 'DEDUCTIVE DERIVATION'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'de' ? 'Was wir wirklich geschaffen haben' : 'What We Really Created'}
            <span className="text-gradient block mt-2">
              {language === 'de' ? 'Der messbare Weg von Linear zu Superlinear' : 'The Measurable Path from Linear to Superlinear'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Nicht besseres Consulting. Nicht bessere Tools. Sondern: Der garantierte Weg zur Transformation.'
              : 'Not better consulting. Not better tools. But: The guaranteed path to transformation.'}
          </p>
        </div>

        {/* Empirical Basis */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">n=22</span>
            {language === 'de' ? 'Empirische Basis (Validiert)' : 'Empirical Basis (Validated)'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {empiricalBasis.map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-xl border border-accent/30 hover:border-accent transition-all">
                <div className="text-3xl font-bold text-accent mb-2">{item.stat}</div>
                <p className="font-semibold mb-1">{item.finding}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            {language === 'de' 
              ? 'Das ist NICHT Spekulation. Das ist VALIDIERT (R²=0.76, p≈3×10⁻⁸).' 
              : 'This is NOT speculation. This is VALIDATED (R²=0.76, p≈3×10⁻⁸).'}
          </p>
        </div>

        {/* CEO Observable Facts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'de' ? 'Was der CEO SIEHT (Observable Facts)' : 'What the CEO SEES (Observable Facts)'}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {ceoObservableFacts.map((item, idx) => (
              <div 
                key={idx}
                className="bg-destructive/5 border border-destructive/30 p-4 rounded-xl flex items-center gap-3 min-w-[200px]"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-sm">{item.fact}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logical Conclusion */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 rounded-2xl border border-primary/20 mb-16">
          <h3 className="text-xl font-bold text-center mb-6">
            {language === 'de' ? 'Logische Konklusion' : 'Logical Conclusion'}
          </h3>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { label: language === 'de' ? 'Prämisse 1' : 'Premise 1', text: language === 'de' ? 'Mein Unternehmen wächst linear' : 'My company grows linearly' },
              { label: language === 'de' ? 'Prämisse 2' : 'Premise 2', text: language === 'de' ? 'Winner wachsen superlinear' : 'Winners grow superlinearly' },
              { label: language === 'de' ? 'Prämisse 3' : 'Premise 3', text: language === 'de' ? 'Nicht genug Kapital für linear' : 'Not enough capital for linear' },
              { label: language === 'de' ? 'Prämisse 4' : 'Premise 4', text: language === 'de' ? 'Board gibt 6-12 Monate' : 'Board gives 6-12 months' },
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-4 rounded-lg border border-border text-center">
                <p className="text-xs text-primary font-medium mb-1">{item.label}</p>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <ArrowRight className="w-8 h-8 text-accent mx-auto mb-4" />
            <p className="text-xl font-bold">
              {language === 'de' 
                ? '→ Ich MUSS von linear zu superlinear transformieren.' 
                : '→ I MUST transform from linear to superlinear.'}
            </p>
          </div>
        </div>

        {/* CEO Needs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'de' ? 'Was der CEO BRAUCHT' : 'What the CEO NEEDS'}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {ceoNeeds.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-card p-4 rounded-xl border border-primary/30 hover:border-primary transition-all flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{idx + 1}. {item.need}</p>
                    <p className="text-xs text-muted-foreground">{item.question}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* What We Created */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'de' ? 'Was wir geschaffen haben' : 'What We Created'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {whatWeCreated.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.name}
                  className="bg-card p-6 rounded-2xl border-2 border-accent/30 hover:border-accent transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <span className="text-xs text-accent">{item.purpose}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">{item.stat}</span>
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Real Innovation */}
        <div className="bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 p-8 rounded-2xl border border-accent/30 text-center">
          <h3 className="text-2xl font-bold mb-6">
            {language === 'de' ? 'Die eigentliche Innovation' : 'The Real Innovation'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-destructive/10 p-6 rounded-xl border border-destructive/30">
              <p className="font-bold text-destructive mb-3">NICHT:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Besseres Consulting</li>
                <li>❌ Bessere Tools</li>
                <li>❌ Bessere Methodology</li>
              </ul>
            </div>
            <div className="bg-accent/10 p-6 rounded-xl border border-accent/30">
              <p className="font-bold text-accent mb-3">SONDERN:</p>
              <p className="text-lg font-bold">
                {language === 'de' 
                  ? 'Der messbare, garantierte Weg von Linear zu Superlinear' 
                  : 'The measurable, guaranteed path from Linear to Superlinear'}
              </p>
            </div>
          </div>
          <p className="text-xl font-bold text-accent">
            {language === 'de' 
              ? '→ Das gibt dem CEO HOFFNUNG, dass er es schaffen kann.' 
              : '→ This gives the CEO HOPE that they can make it.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreatedSection;
