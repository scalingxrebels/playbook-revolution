import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Lightbulb, Building2, Workflow, Database, Users, Rocket,
  ArrowRight, ArrowLeft, CheckCircle, Target, Sparkles, 
  BarChart3, Play, RotateCcw, ChevronRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Question {
  dimension: string;
  dimensionId: string;
  icon: React.ComponentType<{ className?: string }>;
  question: { en: string; de: string };
  options: {
    score: number;
    text: { en: string; de: string };
  }[];
}

const questions: Question[] = [
  // AI Strategy (20%)
  {
    dimension: 'AI-Strategie',
    dimensionId: 'strategy',
    icon: Lightbulb,
    question: {
      de: 'Wie ist AI in Ihrer Unternehmensstrategie verankert?',
      en: 'How is AI embedded in your corporate strategy?'
    },
    options: [
      { score: 2, text: { de: 'Keine formale AI-Strategie vorhanden', en: 'No formal AI strategy exists' } },
      { score: 4, text: { de: 'Erste Pilotprojekte ohne klare Roadmap', en: 'Initial pilot projects without clear roadmap' } },
      { score: 6, text: { de: 'Definierte AI-Roadmap mit dediziertem Budget', en: 'Defined AI roadmap with dedicated budget' } },
      { score: 8, text: { de: 'AI integral in Geschäftsstrategie eingebettet', en: 'AI embedded in business strategy' } },
      { score: 10, text: { de: 'AI-First: Alle strategischen Entscheidungen AI-getrieben', en: 'AI-First: All strategic decisions AI-driven' } }
    ]
  },
  {
    dimension: 'AI-Strategie',
    dimensionId: 'strategy',
    icon: Lightbulb,
    question: {
      de: 'Wie ist das Board-Commitment für AI?',
      en: 'What is the board commitment to AI?'
    },
    options: [
      { score: 2, text: { de: 'AI ist kein Thema auf Board-Ebene', en: 'AI is not a topic at board level' } },
      { score: 4, text: { de: 'Gelegentliche Updates, aber keine Priorität', en: 'Occasional updates, but not a priority' } },
      { score: 6, text: { de: 'Regelmäßige AI-Reviews auf Board-Ebene', en: 'Regular AI reviews at board level' } },
      { score: 8, text: { de: 'AI KPIs sind Teil der Board-Agenda', en: 'AI KPIs are part of board agenda' } },
      { score: 10, text: { de: 'CEO/Board sind AI-Champions mit klarer Vision', en: 'CEO/Board are AI champions with clear vision' } }
    ]
  },
  // AI Architecture (20%)
  {
    dimension: 'AI-Architektur',
    dimensionId: 'architecture',
    icon: Building2,
    question: {
      de: 'Wie ausgereift ist Ihre AI-Infrastruktur?',
      en: 'How mature is your AI infrastructure?'
    },
    options: [
      { score: 2, text: { de: 'Einzelne AI-Tools ohne Integration', en: 'Individual AI tools without integration' } },
      { score: 4, text: { de: 'Mehrere Tools mit einfachen Integrationen', en: 'Multiple tools with basic integrations' } },
      { score: 6, text: { de: 'Einheitliche AI-Plattform mit geteilten Modellen', en: 'Unified AI platform with shared models' } },
      { score: 8, text: { de: 'AI orchestriert Workflows systemübergreifend', en: 'AI orchestrates workflows across systems' } },
      { score: 10, text: { de: 'Selbstverbessernde, autonome AI-Systeme', en: 'Self-improving, autonomous AI systems' } }
    ]
  },
  // AI Workflows (15%)
  {
    dimension: 'AI-Workflows',
    dimensionId: 'workflow',
    icon: Workflow,
    question: {
      de: 'Wie sind AI-Workflows in Ihre Prozesse integriert?',
      en: 'How are AI workflows integrated into your processes?'
    },
    options: [
      { score: 2, text: { de: 'Manuelle Prozesse, gelegentliche AI-Nutzung', en: 'Manual processes, occasional AI use' } },
      { score: 4, text: { de: 'AI-Workflows für einige Aufgaben definiert', en: 'AI workflows defined for some tasks' } },
      { score: 6, text: { de: 'AI in Kernworkflows systematisch integriert', en: 'AI systematically integrated in core workflows' } },
      { score: 8, text: { de: 'Kontinuierliche Workflow-Optimierung via AI', en: 'Continuous workflow optimization via AI' } },
      { score: 10, text: { de: 'AI erstellt und optimiert Workflows autonom', en: 'AI creates and optimizes workflows autonomously' } }
    ]
  },
  // AI Data (15%)
  {
    dimension: 'AI-Daten',
    dimensionId: 'data',
    icon: Database,
    question: {
      de: 'Wie ist Ihre Datenqualität und -verfügbarkeit für AI?',
      en: 'How is your data quality and availability for AI?'
    },
    options: [
      { score: 2, text: { de: 'Fragmentierte Daten, keine Governance', en: 'Fragmented data, no governance' } },
      { score: 4, text: { de: 'Einige Daten zentralisiert, einfache Qualität', en: 'Some data centralized, basic quality' } },
      { score: 6, text: { de: 'Einheitliche Datenplattform mit Governance', en: 'Unified data platform with governance' } },
      { score: 8, text: { de: 'ML-ready Daten mit Echtzeit-Pipelines', en: 'ML-ready data with real-time pipelines' } },
      { score: 10, text: { de: 'AI managt Datenqualität & Governance autonom', en: 'AI manages data quality & governance autonomously' } }
    ]
  },
  // AI Talent (15%)
  {
    dimension: 'AI-Talent',
    dimensionId: 'talent',
    icon: Users,
    question: {
      de: 'Wie ist Ihre AI-Kompetenz im Unternehmen?',
      en: 'What is your AI competency in the organization?'
    },
    options: [
      { score: 2, text: { de: 'Kein dediziertes AI-Talent vorhanden', en: 'No dedicated AI talent available' } },
      { score: 4, text: { de: 'Einige AI-Skills, externe Unterstützung nötig', en: 'Some AI skills, external support needed' } },
      { score: 6, text: { de: 'Dediziertes AI-Team mit kontinuierlicher Schulung', en: 'Dedicated AI team with continuous training' } },
      { score: 8, text: { de: 'AI Center of Excellence, Skills in allen Teams', en: 'AI Center of Excellence, skills across teams' } },
      { score: 10, text: { de: 'Alle Mitarbeiter AI-kompetent, AI-First-Kultur', en: 'All employees AI-competent, AI-first culture' } }
    ]
  },
  // AI Adoption (15%)
  {
    dimension: 'AI-Adoption',
    dimensionId: 'adoption',
    icon: Rocket,
    question: {
      de: 'Wie viel Arbeit wird durch AI unterstützt oder automatisiert?',
      en: 'How much work is supported or automated by AI?'
    },
    options: [
      { score: 2, text: { de: 'Unter 10% – minimale AI-Nutzung', en: 'Under 10% – minimal AI usage' } },
      { score: 4, text: { de: '10-30% – selektive AI-Adoption in einigen Bereichen', en: '10-30% – selective AI adoption in some areas' } },
      { score: 6, text: { de: '30-50% – signifikante AI-Integration', en: '30-50% – significant AI integration' } },
      { score: 8, text: { de: '50-80% – AI-unterstützte Mehrheit der Arbeit', en: '50-80% – AI-assisted majority of work' } },
      { score: 10, text: { de: '80-100% – AI-getriebene Organisation', en: '80-100% – AI-driven organization' } }
    ]
  }
];

const dimensionWeights: Record<string, number> = {
  strategy: 0.20,
  architecture: 0.20,
  workflow: 0.15,
  data: 0.15,
  talent: 0.15,
  adoption: 0.15
};

const ThetaSelfTest: React.FC = () => {
  const { language } = useLanguage();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (score: number) => {
    const newAnswers = { ...answers, [currentQuestion]: score };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateDimensionScores = () => {
    const dimensionScores: Record<string, { total: number; count: number }> = {};
    
    questions.forEach((q, index) => {
      if (answers[index] !== undefined) {
        if (!dimensionScores[q.dimensionId]) {
          dimensionScores[q.dimensionId] = { total: 0, count: 0 };
        }
        dimensionScores[q.dimensionId].total += answers[index];
        dimensionScores[q.dimensionId].count += 1;
      }
    });

    return Object.entries(dimensionScores).map(([id, data]) => ({
      id,
      score: data.count > 0 ? Math.round(data.total / data.count) : 0,
      dimension: questions.find(q => q.dimensionId === id)?.dimension || id,
      icon: questions.find(q => q.dimensionId === id)?.icon || Lightbulb
    }));
  };

  const calculateThetaIndex = () => {
    const dimensionScores = calculateDimensionScores();
    let weightedSum = 0;
    
    dimensionScores.forEach(dim => {
      const weight = dimensionWeights[dim.id] || 0;
      weightedSum += (dim.score / 10) * weight;
    });
    
    return Math.round(weightedSum * 100);
  };

  const getMaturityLevel = (theta: number) => {
    if (theta >= 80) return { 
      level: 3, 
      label: 'AI-Native', 
      color: 'text-accent', 
      bgColor: 'bg-accent/20',
      borderColor: 'border-accent/30',
      desc: { 
        de: 'Sie sind ein Vorreiter der AI-Transformation. Ihr Unternehmen ist AI-first positioniert.',
        en: 'You are a pioneer of AI transformation. Your company is AI-first positioned.'
      }
    };
    if (theta >= 50) return { 
      level: 2, 
      label: 'AI-Enabled', 
      color: 'text-primary', 
      bgColor: 'bg-primary/20',
      borderColor: 'border-primary/30',
      desc: {
        de: 'Gute Basis vorhanden. Mit gezielten Maßnahmen können Sie zum AI-Native werden.',
        en: 'Good foundation in place. With targeted measures you can become AI-Native.'
      }
    };
    if (theta >= 20) return { 
      level: 1, 
      label: 'AI-Powered', 
      color: 'text-amber-500', 
      bgColor: 'bg-amber-500/20',
      borderColor: 'border-amber-500/30',
      desc: {
        de: 'Erste AI-Experimente laufen. Systematischer Ansatz wird Ihre Transformation beschleunigen.',
        en: 'Initial AI experiments running. Systematic approach will accelerate your transformation.'
      }
    };
    return { 
      level: 0, 
      label: 'Traditional', 
      color: 'text-destructive', 
      bgColor: 'bg-destructive/20',
      borderColor: 'border-destructive/30',
      desc: {
        de: 'Klassische Organisation ohne AI-Integration. Jetzt ist der richtige Zeitpunkt zu starten.',
        en: 'Traditional organization without AI integration. Now is the right time to start.'
      }
    };
  };

  const getTimeToScale = (theta: number) => {
    if (theta >= 80) return { time: '8-18', unit: language === 'de' ? 'Monate' : 'months', speed: 'Fast Track' };
    if (theta >= 50) return { time: '18-36', unit: language === 'de' ? 'Monate' : 'months', speed: 'Medium' };
    return { time: '36+', unit: language === 'de' ? 'Monate' : 'months', speed: 'Slow' };
  };

  const restart = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  // Start Screen
  if (!started) {
    return (
      <section id="theta-selftest" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
              θ_index • AI Maturity Self-Assessment
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                {language === 'de' ? 'Ermitteln Sie Ihren θ_index' : 'Calculate Your θ_index'}
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              {language === 'de' 
                ? 'Bewerten Sie Ihre AI-Maturity in 6 Dimensionen und erhalten Sie eine wissenschaftlich fundierte Einschätzung Ihres Scaling-Potenzials.'
                : 'Evaluate your AI maturity across 6 dimensions and get a scientifically-based assessment of your scaling potential.'}
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <Card className="p-4 glass border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">7</div>
                <div className="text-sm text-muted-foreground">{language === 'de' ? 'Fragen' : 'Questions'}</div>
              </Card>
              <Card className="p-4 glass border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">2</div>
                <div className="text-sm text-muted-foreground">{language === 'de' ? 'Minuten' : 'Minutes'}</div>
              </Card>
              <Card className="p-4 glass border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">6</div>
                <div className="text-sm text-muted-foreground">{language === 'de' ? 'Dimensionen' : 'Dimensions'}</div>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: Lightbulb, label: 'Strategie' },
                { icon: Building2, label: 'Architektur' },
                { icon: Workflow, label: 'Workflows' },
                { icon: Database, label: 'Daten' },
                { icon: Users, label: 'Talent' },
                { icon: Rocket, label: 'Adoption' }
              ].map((dim, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/50 text-sm">
                  <dim.icon className="w-4 h-4 text-primary" />
                  <span>{dim.label}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              onClick={() => setStarted(true)}
              className="group px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              {language === 'de' ? 'Selbsttest starten' : 'Start Self-Test'}
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-xs text-muted-foreground mt-6">
              {language === 'de' 
                ? 'Basierend auf AMF v4.5.2 • Empirisch validiert (n=22 Companies, r=0.89)'
                : 'Based on AMF v4.5.2 • Empirically validated (n=22 companies, r=0.89)'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Results Screen
  if (showResults) {
    const theta = calculateThetaIndex();
    const maturity = getMaturityLevel(theta);
    const dimensionScores = calculateDimensionScores();
    const timeToScale = getTimeToScale(theta);
    const weakestDimension = dimensionScores.reduce((min, d) => d.score < min.score ? d : min, dimensionScores[0]);

    return (
      <section id="theta-selftest" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                θ_index Ergebnis
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ihr AI-Maturity Score
              </h2>
            </div>

            {/* Main Score Card */}
            <Card className={`p-8 mb-8 glass ${maturity.borderColor}`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="text-sm text-muted-foreground mb-2">θ_index</div>
                  <div className="text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                    {theta}%
                  </div>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${maturity.bgColor} ${maturity.color}`}>
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-bold">Level {maturity.level}: {maturity.label}</span>
                  </div>
                </div>

                <div className="flex-1 max-w-sm w-full">
                  <div className="h-4 rounded-full bg-muted/30 overflow-hidden mb-2">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${theta}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Traditional</span>
                    <span>AI-Powered</span>
                    <span>AI-Enabled</span>
                    <span>AI-Native</span>
                  </div>
                </div>
              </div>

              <p className="text-center md:text-left text-muted-foreground mt-6">
                {maturity.desc[language]}
              </p>
            </Card>

            {/* Dimension Scores */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {dimensionScores.map((dim) => {
                const DimIcon = dim.icon;
                const isWeakest = dim.id === weakestDimension.id;
                
                return (
                  <Card 
                    key={dim.id} 
                    className={`p-5 glass ${isWeakest ? 'border-amber-500/50 bg-amber-500/5' : 'border-border/50'}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${isWeakest ? 'bg-amber-500/20 text-amber-500' : 'bg-primary/20 text-primary'}`}>
                        <DimIcon className="w-5 h-5" />
                      </div>
                      <span className="font-medium flex-1">{dim.dimension}</span>
                      <span className="text-2xl font-bold">{dim.score}/10</span>
                    </div>
                    <Progress value={dim.score * 10} className="h-2" />
                    {isWeakest && (
                      <div className="mt-2 text-xs text-amber-500 flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        {language === 'de' ? 'Größtes Verbesserungspotenzial' : 'Biggest improvement potential'}
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Predictions */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card className="p-6 glass border-primary/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Time to €100M ARR</span>
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{timeToScale.time}</span>
                  <span className="text-muted-foreground">{timeToScale.unit}</span>
                </div>
                <Badge variant="outline" className="mt-2">{timeToScale.speed}</Badge>
              </Card>

              <Card className="p-6 glass border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Expected ARR/Employee</span>
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <div className="text-4xl font-bold">
                  €{theta >= 80 ? '1M-5M' : theta >= 50 ? '500K-1M' : '200K-500K'}
                </div>
              </Card>
            </div>

            {/* CTA */}
            <Card className="p-8 glass border-primary/30 text-center">
              <h3 className="text-xl font-bold mb-3">
                {language === 'de' ? 'Bereit, Ihren θ_index zu steigern?' : 'Ready to increase your θ_index?'}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                {language === 'de' 
                  ? 'In einem 30-minütigen Diagnose-Gespräch analysieren wir Ihre größten Hebel und erstellen Ihren individuellen Transformationsplan.'
                  : 'In a 30-minute diagnostic call, we analyze your biggest levers and create your individual transformation plan.'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5" />
                  {language === 'de' ? 'Diagnose-Gespräch buchen' : 'Book Diagnostic Call'}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Button variant="outline" onClick={restart} className="px-8 py-4">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  {language === 'de' ? 'Nochmal starten' : 'Start again'}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  // Question Screen
  const currentQ = questions[currentQuestion];
  const CurrentIcon = currentQ.icon;

  return (
    <section id="theta-selftest" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
              <span>
                {language === 'de' ? 'Frage' : 'Question'} {currentQuestion + 1} / {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-8 glass border-border/50">
            {/* Dimension Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-primary/20 text-primary">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <Badge variant="secondary">{currentQ.dimension}</Badge>
              <Badge variant="outline" className="ml-auto">
                {dimensionWeights[currentQ.dimensionId] * 100}% Weight
              </Badge>
            </div>

            {/* Question */}
            <h3 className="text-2xl font-bold mb-8">
              {currentQ.question[language]}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.score)}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 text-left group
                    ${answers[currentQuestion] === option.score 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border/50 bg-card/30 hover:border-primary/50 hover:bg-primary/5'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300
                      ${answers[currentQuestion] === option.score 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-muted-foreground/30 group-hover:border-primary'
                      }`}
                    >
                      <span className="text-sm font-bold">{option.score}</span>
                    </div>
                    <span className="flex-1">{option.text[language]}</span>
                    {answers[currentQuestion] === option.score && (
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {language === 'de' ? 'Zurück' : 'Back'}
              </button>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThetaSelfTest;
