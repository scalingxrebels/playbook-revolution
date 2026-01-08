import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Zap, Brain, Network, TrendingUp, ArrowRight, CheckCircle,
  AlertTriangle, Target, Gauge, BarChart3, Sparkles, ArrowLeft
} from 'lucide-react';

const LASRScorecard = () => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      category: 'C₁ - Decision Intelligence',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      question: 'Wie schnell können Sie auf Marktveränderungen reagieren?',
      options: [
        { score: 1, text: 'Wochen bis Monate – manuelle Analyse und Meetings' },
        { score: 2, text: 'Tage – wir haben einige Dashboards und Reports' },
        { score: 3, text: 'Stunden – AI-gestützte Insights, aber menschliche Entscheidung' },
        { score: 4, text: 'Echtzeit – AI erkennt Signale und schlägt Aktionen vor' },
        { score: 5, text: 'Proaktiv – AI handelt autonom basierend auf Vorhersagen' },
      ]
    },
    {
      category: 'C₁ - Decision Intelligence',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      question: 'Wie werden strategische Entscheidungen in Ihrem Unternehmen getroffen?',
      options: [
        { score: 1, text: 'Bauchgefühl der Führungsebene' },
        { score: 2, text: 'Excel-basierte Analysen und Präsentationen' },
        { score: 3, text: 'BI-Tools mit historischen Daten' },
        { score: 4, text: 'AI-generierte Szenarien mit Wahrscheinlichkeiten' },
        { score: 5, text: 'AI-Agents simulieren Outcomes in Echtzeit' },
      ]
    },
    {
      category: 'C₂ - Execution Velocity',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      question: 'Wie viel Zeit verbringt Ihr Team mit Routineaufgaben vs. strategischer Arbeit?',
      options: [
        { score: 1, text: '80%+ Routine – wenig Zeit für Innovation' },
        { score: 2, text: '60% Routine – gelegentlich strategische Projekte' },
        { score: 3, text: '40% Routine – Balance zwischen beiden' },
        { score: 4, text: '20% Routine – AI übernimmt repetitive Tasks' },
        { score: 5, text: '<10% Routine – AI-Agents erledigen fast alles automatisch' },
      ]
    },
    {
      category: 'C₂ - Execution Velocity',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      question: 'Wie schnell können Sie neue Features oder Produkte launchen?',
      options: [
        { score: 1, text: '6+ Monate – lange Entwicklungszyklen' },
        { score: 2, text: '3-6 Monate – klassische Sprints' },
        { score: 3, text: '4-8 Wochen – agile Entwicklung' },
        { score: 4, text: '1-2 Wochen – AI-beschleunigte Entwicklung' },
        { score: 5, text: 'Tage – AI generiert und testet Code automatisch' },
      ]
    },
    {
      category: 'C₃ - Coordination Efficiency',
      icon: Network,
      color: 'from-orange-500 to-amber-500',
      question: 'Wie funktioniert die Kommunikation zwischen Teams?',
      options: [
        { score: 1, text: 'Silos – Teams sprechen selten miteinander' },
        { score: 2, text: 'Meetings – viele Abstimmungsrunden nötig' },
        { score: 3, text: 'Slack/Teams – schnelle Kommunikation, aber manuell' },
        { score: 4, text: 'AI-gestützte Zusammenfassungen und Routing' },
        { score: 5, text: 'AI-Agents koordinieren Teams autonom' },
      ]
    },
    {
      category: 'C₃ - Coordination Efficiency',
      icon: Network,
      color: 'from-orange-500 to-amber-500',
      question: 'Wie werden Abhängigkeiten zwischen Teams gemanagt?',
      options: [
        { score: 1, text: 'Gar nicht – Überraschungen sind normal' },
        { score: 2, text: 'Manuelle Tracking-Sheets' },
        { score: 3, text: 'Projekt-Management-Tools (Jira, Asana)' },
        { score: 4, text: 'AI erkennt Konflikte und warnt proaktiv' },
        { score: 5, text: 'AI löst Blocking-Issues automatisch' },
      ]
    },
    {
      category: 'C₄ - Learning Loops',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      question: 'Wie schnell lernt Ihre Organisation aus Fehlern?',
      options: [
        { score: 1, text: 'Langsam – gleiche Fehler wiederholen sich' },
        { score: 2, text: 'Post-Mortems nach großen Problemen' },
        { score: 3, text: 'Regelmäßige Retros und Dokumentation' },
        { score: 4, text: 'AI analysiert Patterns und gibt Empfehlungen' },
        { score: 5, text: 'AI verhindert Fehler bevor sie passieren' },
      ]
    },
    {
      category: 'C₄ - Learning Loops',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      question: 'Wie werden Best Practices im Unternehmen verbreitet?',
      options: [
        { score: 1, text: 'Gar nicht – jedes Team macht sein eigenes Ding' },
        { score: 2, text: 'Dokumentation, die niemand liest' },
        { score: 3, text: 'Knowledge Base mit aktiver Pflege' },
        { score: 4, text: 'AI empfiehlt relevante Best Practices kontextbezogen' },
        { score: 5, text: 'AI implementiert Best Practices automatisch' },
      ]
    },
  ];

  const handleAnswer = (score: number) => {
    setAnswers({ ...answers, [currentQuestion]: score });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScores = () => {
    const categories = {
      'C₁ - Decision Intelligence': { total: 0, count: 0 },
      'C₂ - Execution Velocity': { total: 0, count: 0 },
      'C₃ - Coordination Efficiency': { total: 0, count: 0 },
      'C₄ - Learning Loops': { total: 0, count: 0 },
    };

    questions.forEach((q, index) => {
      if (answers[index]) {
        categories[q.category as keyof typeof categories].total += answers[index];
        categories[q.category as keyof typeof categories].count += 1;
      }
    });

    return Object.entries(categories).map(([name, data]) => ({
      name,
      score: data.count > 0 ? Math.round((data.total / data.count) * 20) : 0,
      rawScore: data.count > 0 ? (data.total / data.count).toFixed(1) : '0',
    }));
  };

  const getThetaIndex = () => {
    const scores = calculateScores();
    const avg = scores.reduce((acc, s) => acc + s.score, 0) / scores.length;
    return Math.round(avg);
  };

  const getMaturityLevel = (theta: number) => {
    if (theta >= 80) return { level: 'AI-Native', color: 'text-emerald-400', desc: 'Sie sind ein Vorreiter der AI-Transformation' };
    if (theta >= 60) return { level: 'AI-Powered', color: 'text-blue-400', desc: 'Gute Basis, aber noch Potenzial für mehr Autonomie' };
    if (theta >= 40) return { level: 'AI-Assisted', color: 'text-amber-400', desc: 'Erste AI-Experimente, aber nicht systematisch' };
    return { level: 'Traditional', color: 'text-red-400', desc: 'Klassische Organisation ohne AI-Integration' };
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const scores = calculateScores();
    const theta = getThetaIndex();
    const maturity = getMaturityLevel(theta);

    return (
      <section id="scorecard" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">lasr.io</span>
                </div>
                <span className="text-muted-foreground">|</span>
                <span className="text-lg font-medium">AI-Maturity Scorecard</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ihr <span className={maturity.color}>{maturity.level}</span> Score
              </h2>
              <p className="text-xl text-muted-foreground">{maturity.desc}</p>
            </div>

            {/* Theta Index */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-card/80 to-card/40 border border-border/50 backdrop-blur-sm mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="text-sm text-muted-foreground mb-2">θ_index (AI-Maturity Score)</div>
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {theta}%
                  </div>
                </div>
                <div className="flex-1 max-w-md">
                  <div className="h-4 rounded-full bg-muted/30 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${theta}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Traditional</span>
                    <span>AI-Assisted</span>
                    <span>AI-Powered</span>
                    <span>AI-Native</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Capability Scores */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {scores.map((score, index) => {
                const Icon = [Brain, Zap, Network, TrendingUp][index];
                const colors = [
                  'from-blue-500 to-cyan-500',
                  'from-purple-500 to-pink-500',
                  'from-orange-500 to-amber-500',
                  'from-emerald-500 to-teal-500',
                ][index];
                
                return (
                  <div key={score.name} className="p-6 rounded-2xl bg-card/50 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${colors}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium">{score.name.split(' - ')[0]}</span>
                      <span className="ml-auto text-2xl font-bold">{score.score}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${colors} transition-all duration-1000`}
                        style={{ width: `${score.score}%` }}
                      />
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {score.name.split(' - ')[1]} • Durchschnitt: {score.rawScore}/5
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recommendations */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Ihre nächsten Schritte
              </h3>
              <div className="space-y-4">
                {scores
                  .sort((a, b) => a.score - b.score)
                  .slice(0, 2)
                  .map((score, index) => (
                    <div key={score.name} className="flex items-start gap-3">
                      <div className={`p-1 rounded-full ${index === 0 ? 'bg-red-500/20' : 'bg-amber-500/20'}`}>
                        <AlertTriangle className={`w-4 h-4 ${index === 0 ? 'text-red-400' : 'text-amber-400'}`} />
                      </div>
                      <div>
                        <div className="font-medium">{score.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {index === 0 
                            ? 'Höchste Priorität: Dieser Bereich limitiert Ihr gesamtes Scaling-Potenzial'
                            : 'Zweite Priorität: Verbesserungen hier haben große Hebelwirkung'}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Bereit, Ihren θ_index zu verbessern?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#solution"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Sparkles className="w-5 h-5" />
                  Kostenloses Diagnose-Gespräch
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                  className="px-8 py-4 rounded-xl border border-border hover:border-primary/50 font-semibold transition-all duration-300"
                >
                  Nochmal starten
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="scorecard" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <Zap className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">lasr.io</span>
              </div>
              <span className="text-muted-foreground">|</span>
              <span className="text-lg font-medium">AI-Maturity Scorecard</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Ermitteln Sie Ihren θ_index
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              8 Fragen • 2 Minuten • Sofortige Auswertung
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Frage {currentQuestion + 1} von {questions.length}</span>
              <span>{Math.round(progress)}% abgeschlossen</span>
            </div>
            <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="p-8 rounded-3xl bg-card/50 border border-border backdrop-blur-sm">
            {/* Category Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentQ.color} bg-opacity-20 border border-white/10 mb-6`}>
              <currentQ.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{currentQ.category}</span>
            </div>

            {/* Question */}
            <h3 className="text-2xl font-bold mb-8">{currentQ.question}</h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full p-4 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300`}>
                      <span className="text-sm font-medium">{option.score}</span>
                    </div>
                    <span className="flex-1">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zur vorherigen Frage
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LASRScorecard;
