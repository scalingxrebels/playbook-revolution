import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, CheckCircle2, RotateCcw } from 'lucide-react';

const questions = [
  {
    id: 1,
    en: 'How much of your core workflow is AI-augmented?',
    de: 'Wie viel Ihres Kernworkflows ist AI-unterstützt?',
    options: [
      { label: '< 20%', score: 1 },
      { label: '20-50%', score: 2 },
      { label: '50-80%', score: 3 },
      { label: '> 80%', score: 4 },
    ],
  },
  {
    id: 2,
    en: 'What\'s your development velocity compared to last year?',
    de: 'Wie ist Ihre Entwicklungsgeschwindigkeit im Vergleich zum Vorjahr?',
    options: [
      { label: 'Same', score: 1 },
      { label: '2x faster', score: 2 },
      { label: '5x faster', score: 3 },
      { label: '10x+ faster', score: 4 },
    ],
  },
  {
    id: 3,
    en: 'How does coordination cost scale with team size?',
    de: 'Wie skalieren Koordinationskosten mit der Teamgröße?',
    options: [
      { label: 'O(n²)', score: 1 },
      { label: 'O(n)', score: 2 },
      { label: 'O(n log n)', score: 3 },
      { label: 'O(log n)', score: 4 },
    ],
  },
  {
    id: 4,
    en: 'What\'s your ARR per employee?',
    de: 'Wie hoch ist Ihr ARR pro Mitarbeiter?',
    options: [
      { label: '< €150K', score: 1 },
      { label: '€150K - €500K', score: 2 },
      { label: '€500K - €2M', score: 3 },
      { label: '> €2M', score: 4 },
    ],
  },
  {
    id: 5,
    en: 'How often does your team ship to production?',
    de: 'Wie oft liefert Ihr Team in Produktion?',
    options: [
      { label: 'Monthly', score: 1 },
      { label: 'Weekly', score: 2 },
      { label: 'Daily', score: 3 },
      { label: 'Multiple/day', score: 4 },
    ],
  },
  {
    id: 6,
    en: 'How are strategic decisions made?',
    de: 'Wie werden strategische Entscheidungen getroffen?',
    options: [
      { label: 'Intuition', score: 1 },
      { label: 'Basic metrics', score: 2 },
      { label: 'Data-driven', score: 3 },
      { label: 'AI-augmented', score: 4 },
    ],
  },
  {
    id: 7,
    en: 'What\'s your customer acquisition efficiency?',
    de: 'Wie effizient ist Ihre Kundenakquise?',
    options: [
      { label: 'CAC > LTV', score: 1 },
      { label: 'CAC = LTV', score: 2 },
      { label: 'LTV 3x CAC', score: 3 },
      { label: 'LTV 5x+ CAC', score: 4 },
    ],
  },
  {
    id: 8,
    en: 'How would you describe your growth trajectory?',
    de: 'Wie würden Sie Ihre Wachstumskurve beschreiben?',
    options: [
      { label: 'Linear', score: 1 },
      { label: 'Polynomial', score: 2 },
      { label: 'Exponential', score: 3 },
      { label: 'Super-linear', score: 4 },
    ],
  },
];

const AssessmentOptimized: React.FC = () => {
  const { language } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const total = answers.reduce((sum, score) => sum + score, 0);
    const max = questions.length * 4;
    return ((total / max) * 100).toFixed(0);
  };

  const getMaturityLevel = (score: number) => {
    if (score >= 85) return { level: 'AI-Native', color: 'text-accent', desc: language === 'de' ? 'Führend in AI-Integration' : 'Leading in AI integration' };
    if (score >= 65) return { level: 'AI-Powered', color: 'text-primary', desc: language === 'de' ? 'Fortgeschrittene AI-Nutzung' : 'Advanced AI usage' };
    if (score >= 40) return { level: 'AI-Aware', color: 'text-muted-foreground', desc: language === 'de' ? 'Grundlegende AI-Adoption' : 'Basic AI adoption' };
    return { level: 'Traditional', color: 'text-destructive', desc: language === 'de' ? 'Noch am Anfang' : 'Just starting' };
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const scrollToBooking = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showResults) {
    const score = parseInt(calculateScore());
    const maturity = getMaturityLevel(score);
    
    return (
      <section id="assessment-section" className="relative min-h-[50vh] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
        
        <div className="container max-w-3xl mx-auto px-6 relative z-10">
          <div className="bg-card border-2 border-border p-8 lg:p-12 animate-scale-in">
            {/* Score Display */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {language === 'de' ? 'Ihr Ergebnis' : 'Your Result'}
                </span>
              </div>
              
              <div className="text-8xl font-display font-bold text-gradient mb-4">
                {score}%
              </div>
              
              <div className={`text-2xl font-bold ${maturity.color} mb-2`}>
                {maturity.level}
              </div>
              <p className="text-muted-foreground">{maturity.desc}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={scrollToBooking}
                className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-bold px-8 py-6 shadow-accent-glow"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {language === 'de' ? 'Beratung buchen' : 'Schedule Consultation'}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={reset}
                className="border-2 font-semibold px-8 py-6"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                {language === 'de' ? 'Neu starten' : 'Start Over'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <section id="assessment-section" className="relative min-h-[50vh] py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      
      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            {language === 'de' ? 'Selbsteinschätzung' : 'Self-Assessment'}
          </span>
          <h2 className="font-display text-display-md text-foreground mb-4">
            {language === 'de' ? 'Wo stehen Sie heute?' : 'Where Are You Today?'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'de' 
              ? '8 Fragen • 2 Minuten • Sofortiges Ergebnis'
              : '8 questions • 2 minutes • Instant results'
            }
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{language === 'de' ? 'Fortschritt' : 'Progress'}</span>
            <span>{currentQuestion + 1} / {questions.length}</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-card border-2 border-border p-8 lg:p-12 animate-fade-in" key={currentQuestion}>
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-8 text-center">
            {language === 'de' ? question.de : question.en}
          </h3>

          {/* Options */}
          <div className="grid gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.score)}
                className="group w-full text-left bg-secondary/50 hover:bg-primary/10 border-2 border-border hover:border-primary/50 p-4 lg:p-6 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {option.label}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentOptimized;
