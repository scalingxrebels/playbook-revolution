import React, { useState, useEffect } from 'react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Target, 
  Settings, 
  Zap, 
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Lightbulb,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Save,
  History,
  Trash2
} from 'lucide-react';

interface SavedResult {
  answers: Record<string, number>;
  scores: Record<string, number>;
  bottleneck: { capability: string; score: number };
  timestamp: string;
}

const STORAGE_KEY = 'sxh-bottleneck-diagnosis';

interface DiagnosticQuestion {
  id: string;
  capability: 'C1' | 'C2' | 'C3' | 'C4';
  question: { en: string; de: string };
  options: {
    value: number;
    label: { en: string; de: string };
    indicator: { en: string; de: string };
  }[];
}

interface CapabilityData {
  id: 'C1' | 'C2' | 'C3' | 'C4';
  name: { en: string; de: string };
  icon: React.ReactNode;
  color: string;
  description: { en: string; de: string };
  recommendations: {
    low: { en: string[]; de: string[] };
    medium: { en: string[]; de: string[] };
    high: { en: string[]; de: string[] };
  };
  quickWins: { en: string[]; de: string[] };
  metrics: { label: { en: string; de: string }; improvement: string }[];
}

const capabilities: CapabilityData[] = [
  {
    id: 'C1',
    name: { en: 'Strategy', de: 'Strategie' },
    icon: <Target className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    description: { 
      en: 'ICP Clarity, Positioning, GTM Strategy',
      de: 'ICP-Klarheit, Positionierung, GTM-Strategie'
    },
    recommendations: {
      low: {
        en: [
          'Define your Ideal Customer Profile (ICP) with 5+ firmographic criteria',
          'Document your unique value proposition vs. top 3 competitors',
          'Map customer journey from awareness to advocacy',
          'Create positioning statement using SXH Positioning Canvas'
        ],
        de: [
          'Definiere dein Ideal Customer Profile (ICP) mit 5+ Firmographics',
          'Dokumentiere dein Unique Value Proposition vs. Top 3 Wettbewerber',
          'Mappe die Customer Journey von Awareness bis Advocacy',
          'Erstelle Positioning Statement mit SXH Positioning Canvas'
        ]
      },
      medium: {
        en: [
          'Refine ICP segmentation with behavioral data',
          'A/B test positioning messages in campaigns',
          'Implement AI-powered ICP scoring model'
        ],
        de: [
          'Verfeinere ICP-Segmentierung mit Verhaltensdaten',
          'A/B-teste Positionierungs-Messages in Kampagnen',
          'Implementiere AI-gestütztes ICP-Scoring-Modell'
        ]
      },
      high: {
        en: [
          'Automate dynamic ICP adjustments',
          'Deploy predictive market sensing',
          'Scale winning playbooks across regions'
        ],
        de: [
          'Automatisiere dynamische ICP-Anpassungen',
          'Deploye predictive Market Sensing',
          'Skaliere erfolgreiche Playbooks über Regionen'
        ]
      }
    },
    quickWins: {
      en: ['ICP Sharpening Workshop (2 days)', 'Competitor Analysis Sprint', 'Win/Loss Analysis'],
      de: ['ICP Sharpening Workshop (2 Tage)', 'Wettbewerberanalyse Sprint', 'Win/Loss Analyse']
    },
    metrics: [
      { label: { en: 'CAC Reduction', de: 'CAC Reduktion' }, improvement: '-30-50%' },
      { label: { en: 'Win Rate', de: 'Win Rate' }, improvement: '+30-50%' },
      { label: { en: 'Sales Cycle', de: 'Sales Cycle' }, improvement: '-25-40%' }
    ]
  },
  {
    id: 'C2',
    name: { en: 'Setup', de: 'Setup' },
    icon: <Settings className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    description: { 
      en: 'Org Structure, Systems, Infrastructure',
      de: 'Org-Struktur, Systeme, Infrastruktur'
    },
    recommendations: {
      low: {
        en: [
          'Audit current tech stack for redundancies and gaps',
          'Implement centralized data warehouse',
          'Define org structure for <3 decision layers',
          'Deploy automation for repetitive manual tasks'
        ],
        de: [
          'Auditiere aktuellen Tech Stack auf Redundanzen und Lücken',
          'Implementiere zentrales Data Warehouse',
          'Definiere Org-Struktur mit <3 Entscheidungsebenen',
          'Deploye Automation für repetitive manuelle Tasks'
        ]
      },
      medium: {
        en: [
          'Integrate AI copilots into core workflows',
          'Establish real-time dashboards for all teams',
          'Reduce approval chains to single-point decisions'
        ],
        de: [
          'Integriere AI-Copilots in Core Workflows',
          'Etabliere Real-time Dashboards für alle Teams',
          'Reduziere Approval Chains auf Single-Point Decisions'
        ]
      },
      high: {
        en: [
          'Deploy autonomous AI agents for operations',
          'Implement self-healing infrastructure',
          'Enable zero-touch deployments'
        ],
        de: [
          'Deploye autonome AI Agents für Operations',
          'Implementiere Self-healing Infrastructure',
          'Ermögliche Zero-Touch Deployments'
        ]
      }
    },
    quickWins: {
      en: ['Tech Stack Audit (1 week)', 'Automation Mapping Sprint', 'Decision Layer Analysis'],
      de: ['Tech Stack Audit (1 Woche)', 'Automation Mapping Sprint', 'Decision Layer Analyse']
    },
    metrics: [
      { label: { en: 'Decision Velocity', de: 'Decision Velocity' }, improvement: '+5-10x' },
      { label: { en: 'Coordination Overhead', de: 'Koordinations-Overhead' }, improvement: '-80-99%' },
      { label: { en: 'System Uptime', de: 'System Uptime' }, improvement: '+99.9%' }
    ]
  },
  {
    id: 'C3',
    name: { en: 'Execution', de: 'Execution' },
    icon: <Zap className="w-6 h-6" />,
    color: 'from-amber-500 to-amber-600',
    description: { 
      en: 'Speed, Quality, Consistency',
      de: 'Geschwindigkeit, Qualität, Konsistenz'
    },
    recommendations: {
      low: {
        en: [
          'Define and document core processes with SOP templates',
          'Implement quality gates at critical checkpoints',
          'Establish sprint cadences with clear deliverables',
          'Create repeatable playbooks for common scenarios'
        ],
        de: [
          'Definiere und dokumentiere Core Processes mit SOP-Templates',
          'Implementiere Quality Gates an kritischen Checkpoints',
          'Etabliere Sprint-Kadenzen mit klaren Deliverables',
          'Erstelle wiederholbare Playbooks für häufige Szenarien'
        ]
      },
      medium: {
        en: [
          'Deploy AI-assisted code review and QA',
          'Automate regression testing and deployments',
          'Implement predictive resource allocation'
        ],
        de: [
          'Deploye AI-unterstütztes Code Review und QA',
          'Automatisiere Regressionstests und Deployments',
          'Implementiere predictive Ressourcenallokation'
        ]
      },
      high: {
        en: [
          'Enable autonomous feature development',
          'Deploy continuous optimization engines',
          'Achieve zero-human-in-loop for standard tasks'
        ],
        de: [
          'Ermögliche autonome Feature-Entwicklung',
          'Deploye Continuous Optimization Engines',
          'Erreiche Zero-Human-in-Loop für Standardtasks'
        ]
      }
    },
    quickWins: {
      en: ['Process Mapping Workshop', 'Bottleneck Identification Sprint', 'Automation Pilot Project'],
      de: ['Process Mapping Workshop', 'Bottleneck Identifikation Sprint', 'Automation Pilotprojekt']
    },
    metrics: [
      { label: { en: 'Time-to-Market', de: 'Time-to-Market' }, improvement: '-60-80%' },
      { label: { en: 'Output Quality', de: 'Output Qualität' }, improvement: '+30-50%' },
      { label: { en: 'Iteration Speed', de: 'Iterations-Speed' }, improvement: '+3-5x' }
    ]
  },
  {
    id: 'C4',
    name: { en: 'Operationalization', de: 'Operationalisierung' },
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'from-emerald-500 to-emerald-600',
    description: { 
      en: 'Monitoring, Optimization, Scaling',
      de: 'Monitoring, Optimierung, Skalierung'
    },
    recommendations: {
      low: {
        en: [
          'Implement real-time KPI dashboards for all functions',
          'Establish weekly optimization reviews',
          'Define scaling triggers and capacity thresholds',
          'Create incident response playbooks'
        ],
        de: [
          'Implementiere Echtzeit-KPI-Dashboards für alle Funktionen',
          'Etabliere wöchentliche Optimierungs-Reviews',
          'Definiere Scaling Triggers und Kapazitätsschwellen',
          'Erstelle Incident Response Playbooks'
        ]
      },
      medium: {
        en: [
          'Deploy anomaly detection and alerting',
          'Automate capacity planning and scaling',
          'Implement A/B testing framework for continuous improvement'
        ],
        de: [
          'Deploye Anomalie-Erkennung und Alerting',
          'Automatisiere Capacity Planning und Scaling',
          'Implementiere A/B Testing Framework für kontinuierliche Verbesserung'
        ]
      },
      high: {
        en: [
          'Enable predictive optimization before issues arise',
          'Deploy autonomous scaling across all systems',
          'Achieve continuous self-improvement loops'
        ],
        de: [
          'Ermögliche predictive Optimierung bevor Probleme entstehen',
          'Deploye autonomes Scaling über alle Systeme',
          'Erreiche Continuous Self-Improvement Loops'
        ]
      }
    },
    quickWins: {
      en: ['KPI Dashboard Setup (1 week)', 'Monitoring Audit', 'Scaling Readiness Assessment'],
      de: ['KPI Dashboard Setup (1 Woche)', 'Monitoring Audit', 'Scaling Readiness Assessment']
    },
    metrics: [
      { label: { en: 'Downtime', de: 'Ausfallzeit' }, improvement: '-90%' },
      { label: { en: 'Operational Efficiency', de: 'Operative Effizienz' }, improvement: '+50-100%' },
      { label: { en: 'Response Time', de: 'Response Time' }, improvement: '-70%' }
    ]
  }
];

const diagnosticQuestions: DiagnosticQuestion[] = [
  // C1 - Strategy Questions
  {
    id: 'c1_1',
    capability: 'C1',
    question: {
      en: 'How clearly defined is your Ideal Customer Profile (ICP)?',
      de: 'Wie klar definiert ist dein Ideal Customer Profile (ICP)?'
    },
    options: [
      { value: 0.2, label: { en: 'Vague', de: 'Vage' }, indicator: { en: 'No documented ICP', de: 'Kein dokumentiertes ICP' } },
      { value: 0.5, label: { en: 'Basic', de: 'Basis' }, indicator: { en: 'Some criteria defined', de: 'Einige Kriterien definiert' } },
      { value: 0.8, label: { en: 'Precise', de: 'Präzise' }, indicator: { en: 'Data-validated ICP', de: 'Datenvalidiertes ICP' } },
      { value: 1.0, label: { en: 'Dynamic', de: 'Dynamisch' }, indicator: { en: 'AI-optimized continuously', de: 'AI-optimiert kontinuierlich' } }
    ]
  },
  {
    id: 'c1_2',
    capability: 'C1',
    question: {
      en: 'How differentiated is your market positioning?',
      de: 'Wie differenziert ist deine Marktpositionierung?'
    },
    options: [
      { value: 0.2, label: { en: 'Commodity', de: 'Commodity' }, indicator: { en: 'Indistinguishable', de: 'Nicht unterscheidbar' } },
      { value: 0.5, label: { en: 'Similar', de: 'Ähnlich' }, indicator: { en: 'Some differentiation', de: 'Etwas Differenzierung' } },
      { value: 0.8, label: { en: 'Clear', de: 'Klar' }, indicator: { en: 'Unique value prop', de: 'Unique Value Prop' } },
      { value: 1.0, label: { en: 'Category Leader', de: 'Kategorie-Leader' }, indicator: { en: 'Category defining', de: 'Kategorie-definierend' } }
    ]
  },
  // C2 - Setup Questions  
  {
    id: 'c2_1',
    capability: 'C2',
    question: {
      en: 'How many approval layers for typical decisions?',
      de: 'Wie viele Genehmigungsebenen für typische Entscheidungen?'
    },
    options: [
      { value: 0.2, label: { en: '5+ Layers', de: '5+ Ebenen' }, indicator: { en: 'Heavy bureaucracy', de: 'Starke Bürokratie' } },
      { value: 0.4, label: { en: '3-4 Layers', de: '3-4 Ebenen' }, indicator: { en: 'Traditional', de: 'Traditionell' } },
      { value: 0.7, label: { en: '2 Layers', de: '2 Ebenen' }, indicator: { en: 'Lean', de: 'Lean' } },
      { value: 1.0, label: { en: '1 or Less', de: '1 oder weniger' }, indicator: { en: 'Autonomous teams', de: 'Autonome Teams' } }
    ]
  },
  {
    id: 'c2_2',
    capability: 'C2',
    question: {
      en: 'What percentage of tasks are automated?',
      de: 'Welcher Prozentsatz der Tasks ist automatisiert?'
    },
    options: [
      { value: 0.2, label: { en: '<10%', de: '<10%' }, indicator: { en: 'Mostly manual', de: 'Hauptsächlich manuell' } },
      { value: 0.5, label: { en: '10-40%', de: '10-40%' }, indicator: { en: 'Some automation', de: 'Etwas Automatisierung' } },
      { value: 0.8, label: { en: '40-70%', de: '40-70%' }, indicator: { en: 'AI-assisted', de: 'AI-unterstützt' } },
      { value: 1.0, label: { en: '>70%', de: '>70%' }, indicator: { en: 'AI-native ops', de: 'AI-native Ops' } }
    ]
  },
  // C3 - Execution Questions
  {
    id: 'c3_1',
    capability: 'C3',
    question: {
      en: 'How fast can you ship a new feature (idea to production)?',
      de: 'Wie schnell kannst du ein neues Feature shippen (Idee bis Produktion)?'
    },
    options: [
      { value: 0.2, label: { en: 'Months', de: 'Monate' }, indicator: { en: '>8 weeks', de: '>8 Wochen' } },
      { value: 0.5, label: { en: 'Weeks', de: 'Wochen' }, indicator: { en: '2-8 weeks', de: '2-8 Wochen' } },
      { value: 0.8, label: { en: 'Days', de: 'Tage' }, indicator: { en: '1-7 days', de: '1-7 Tage' } },
      { value: 1.0, label: { en: 'Hours', de: 'Stunden' }, indicator: { en: '<24 hours', de: '<24 Stunden' } }
    ]
  },
  {
    id: 'c3_2',
    capability: 'C3',
    question: {
      en: 'How consistent is your execution quality?',
      de: 'Wie konsistent ist deine Ausführungsqualität?'
    },
    options: [
      { value: 0.2, label: { en: 'Variable', de: 'Variabel' }, indicator: { en: 'Person-dependent', de: 'Personenabhängig' } },
      { value: 0.5, label: { en: 'Improving', de: 'Verbessernd' }, indicator: { en: 'Some standards', de: 'Einige Standards' } },
      { value: 0.8, label: { en: 'High', de: 'Hoch' }, indicator: { en: 'Clear processes', de: 'Klare Prozesse' } },
      { value: 1.0, label: { en: 'Excellent', de: 'Exzellent' }, indicator: { en: 'AI-ensured quality', de: 'AI-gesicherte Qualität' } }
    ]
  },
  // C4 - Operationalization Questions
  {
    id: 'c4_1',
    capability: 'C4',
    question: {
      en: 'How real-time is your KPI visibility?',
      de: 'Wie real-time ist deine KPI-Sichtbarkeit?'
    },
    options: [
      { value: 0.2, label: { en: 'Monthly', de: 'Monatlich' }, indicator: { en: 'Batch reports', de: 'Batch Reports' } },
      { value: 0.5, label: { en: 'Weekly', de: 'Wöchentlich' }, indicator: { en: 'Weekly dashboards', de: 'Wöchentliche Dashboards' } },
      { value: 0.8, label: { en: 'Daily', de: 'Täglich' }, indicator: { en: 'Daily updates', de: 'Tägliche Updates' } },
      { value: 1.0, label: { en: 'Real-time', de: 'Real-time' }, indicator: { en: 'Live dashboards', de: 'Live Dashboards' } }
    ]
  },
  {
    id: 'c4_2',
    capability: 'C4',
    question: {
      en: 'How do you handle scaling needs?',
      de: 'Wie handhabst du Scaling-Anforderungen?'
    },
    options: [
      { value: 0.2, label: { en: 'Reactive', de: 'Reaktiv' }, indicator: { en: 'After issues', de: 'Nach Problemen' } },
      { value: 0.5, label: { en: 'Planned', de: 'Geplant' }, indicator: { en: 'Scheduled reviews', de: 'Geplante Reviews' } },
      { value: 0.8, label: { en: 'Proactive', de: 'Proaktiv' }, indicator: { en: 'Predictive triggers', de: 'Predictive Triggers' } },
      { value: 1.0, label: { en: 'Autonomous', de: 'Autonom' }, indicator: { en: 'Auto-scaling AI', de: 'Auto-Scaling AI' } }
    ]
  }
];

const BottleneckWizard: React.FC = () => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [savedResult, setSavedResult] = useState<SavedResult | null>(null);
  const [showSavedBanner, setShowSavedBanner] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Load saved results on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as SavedResult;
        setSavedResult(parsed);
      }
    } catch (e) {
      console.error('Error loading saved diagnosis:', e);
    }
  }, []);

  // Save results when entering results screen
  useEffect(() => {
    if (currentStep === 'results' && Object.keys(answers).length > 0) {
      const scores = calculateCapabilityScores();
      const bottleneck = getBottleneck();
      const result: SavedResult = {
        answers,
        scores,
        bottleneck,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
      setSavedResult(result);
      setShowSavedBanner(true);
      setTimeout(() => setShowSavedBanner(false), 3000);
    }
  }, [currentStep, answers]);

  const loadSavedResult = () => {
    if (savedResult) {
      setAnswers(savedResult.answers);
      setCurrentStep('results');
    }
  };

  const deleteSavedResult = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSavedResult(null);
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentQuestion < diagnosticQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentStep('results');
    }
  };

  const calculateCapabilityScores = () => {
    const scores: Record<string, number> = { C1: 0, C2: 0, C3: 0, C4: 0 };
    const counts: Record<string, number> = { C1: 0, C2: 0, C3: 0, C4: 0 };
    
    Object.entries(answers).forEach(([questionId, value]) => {
      const question = diagnosticQuestions.find(q => q.id === questionId);
      if (question) {
        scores[question.capability] += value;
        counts[question.capability]++;
      }
    });
    
    return Object.keys(scores).reduce((acc, key) => ({
      ...acc,
      [key]: counts[key] > 0 ? scores[key] / counts[key] : 0
    }), {} as Record<string, number>);
  };

  const getBottleneck = () => {
    const scores = calculateCapabilityScores();
    let minKey = 'C1';
    let minValue = scores.C1 || 1;
    
    Object.entries(scores).forEach(([key, value]) => {
      if (value < minValue) {
        minKey = key;
        minValue = value;
      }
    });
    
    return { capability: minKey as 'C1' | 'C2' | 'C3' | 'C4', score: minValue };
  };

  const getScoreLevel = (score: number): 'low' | 'medium' | 'high' => {
    if (score < 0.4) return 'low';
    if (score < 0.7) return 'medium';
    return 'high';
  };

  const resetWizard = () => {
    setCurrentStep('intro');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const progress = ((currentQuestion + 1) / diagnosticQuestions.length) * 100;

  return (
    <section id="bottleneck-wizard" className="py-20 px-4 relative bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-destructive/30 text-destructive">
            <AlertTriangle className="w-3 h-3 mr-1" />
            {language === 'de' ? 'Diagnose-Tool' : 'Diagnostic Tool'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'de' ? 'Bottleneck-Diagnose Wizard' : 'Bottleneck Diagnosis Wizard'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Identifiziere dein schwächstes Capability in 8 Fragen und erhalte maßgeschneiderte Handlungsempfehlungen.'
              : 'Identify your weakest capability in 8 questions and receive tailored action recommendations.'}
          </p>
        </div>

        {/* INTRO SCREEN */}
        {currentStep === 'intro' && (
          <Card className="p-8 glass border-primary/30 animate-fade-in">
            <div className="text-center">
              {/* Saved Result Banner */}
              {savedResult && (
                <div className="mb-6 p-4 rounded-xl bg-accent/10 border border-accent/30">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <History className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">
                      {language === 'de' ? 'Gespeicherte Diagnose gefunden' : 'Saved Diagnosis Found'}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    {language === 'de' ? 'Vom' : 'From'} {new Date(savedResult.timestamp).toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={loadSavedResult}
                      className="gap-1 border-accent/30 text-accent hover:bg-accent/10"
                    >
                      <History className="w-3 h-3" />
                      {language === 'de' ? 'Ergebnisse laden' : 'Load Results'}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={deleteSavedResult}
                      className="gap-1 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-3 h-3" />
                      {language === 'de' ? 'Löschen' : 'Delete'}
                    </Button>
                  </div>
                </div>
              )}

              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Target className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                {language === 'de' ? 'Finde deinen Flaschenhals' : 'Find Your Bottleneck'}
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                {language === 'de'
                  ? 'Deine Scaling-Geschwindigkeit wird durch dein schwächstes Capability begrenzt. Dieser Wizard analysiert alle 4 Capabilities (C₁-C₄) und zeigt dir genau, wo du ansetzen musst.'
                  : 'Your scaling velocity is limited by your weakest capability. This wizard analyzes all 4 capabilities (C₁-C₄) and shows you exactly where to focus.'}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {capabilities.map((cap) => (
                  <div key={cap.id} className="p-4 rounded-lg bg-muted/50">
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${cap.color} flex items-center justify-center text-white`}>
                      {cap.icon}
                    </div>
                    <p className="text-sm font-medium">{cap.id}</p>
                    <p className="text-xs text-muted-foreground">{cap.name[language]}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {language === 'de' ? '~2 Min' : '~2 min'}
                </span>
                <span>•</span>
                <span>8 {language === 'de' ? 'Fragen' : 'Questions'}</span>
                <span>•</span>
                <span>{language === 'de' ? 'Sofortige Ergebnisse' : 'Instant Results'}</span>
              </div>

              <Button 
                size="lg" 
                onClick={() => setCurrentStep('questions')}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                {language === 'de' ? 'Diagnose starten' : 'Start Diagnosis'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        )}

        {/* QUESTIONS SCREEN */}
        {currentStep === 'questions' && (
          <Card className="p-8 glass border-border/50 animate-fade-in">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  {language === 'de' ? 'Frage' : 'Question'} {currentQuestion + 1}/{diagnosticQuestions.length}
                </span>
                <Badge variant="outline" className={`bg-gradient-to-r ${capabilities.find(c => c.id === diagnosticQuestions[currentQuestion].capability)?.color} bg-clip-text text-transparent border-border/50`}>
                  {diagnosticQuestions[currentQuestion].capability}
                </Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-8">
              {diagnosticQuestions[currentQuestion].question[language]}
            </h3>

            <div className="space-y-3">
              {diagnosticQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(diagnosticQuestions[currentQuestion].id, option.value)}
                  className="w-full p-4 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {option.label[language]}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {option.indicator[language]}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>

            {currentQuestion > 0 && (
              <Button 
                variant="ghost" 
                onClick={() => setCurrentQuestion(prev => prev - 1)}
                className="mt-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'de' ? 'Zurück' : 'Back'}
              </Button>
            )}
          </Card>
        )}

        {/* RESULTS SCREEN */}
        {currentStep === 'results' && (() => {
          const scores = calculateCapabilityScores();
          const bottleneck = getBottleneck();
          const bottleneckCapability = capabilities.find(c => c.id === bottleneck.capability)!;
          const level = getScoreLevel(bottleneck.score);
          const recommendations = bottleneckCapability.recommendations[level];

          return (
            <div className="space-y-8 animate-fade-in">
              {/* Saved Banner */}
              {showSavedBanner && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground shadow-lg">
                    <Save className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {language === 'de' ? 'Ergebnisse gespeichert!' : 'Results saved!'}
                    </span>
                  </div>
                </div>
              )}

              {/* Bottleneck Alert */}
              <Card className="p-8 glass border-destructive/30 bg-destructive/5">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${bottleneckCapability.color} flex items-center justify-center text-white shrink-0`}>
                    {bottleneckCapability.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      <span className="text-sm font-medium text-destructive">
                        {language === 'de' ? 'Kritischer Bottleneck identifiziert' : 'Critical Bottleneck Identified'}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {bottleneck.capability}: {bottleneckCapability.name[language]}
                    </h3>
                    <p className="text-muted-foreground">
                      {bottleneckCapability.description[language]}
                    </p>
                  </div>
                  <div className="ml-auto text-center shrink-0">
                    <div className="text-4xl font-bold text-destructive">
                      {(bottleneck.score * 100).toFixed(0)}%
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'de' ? 'Aktueller Score' : 'Current Score'}
                    </p>
                  </div>
                </div>
              </Card>

              {/* All Capability Scores */}
              <Card className="p-6 glass">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  {language === 'de' ? 'Alle Capability-Scores' : 'All Capability Scores'}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {capabilities.map((cap) => {
                    const score = scores[cap.id] || 0;
                    const isBottleneck = cap.id === bottleneck.capability;
                    return (
                      <div 
                        key={cap.id} 
                        className={`p-4 rounded-xl ${isBottleneck ? 'bg-destructive/10 border border-destructive/30' : 'bg-muted/50'}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cap.color} flex items-center justify-center text-white`}>
                            {cap.icon}
                          </div>
                          <span className="font-medium text-sm">{cap.id}</span>
                        </div>
                        <div className={`text-2xl font-bold ${isBottleneck ? 'text-destructive' : score >= 0.7 ? 'text-accent' : 'text-foreground'}`}>
                          {(score * 100).toFixed(0)}%
                        </div>
                        <Progress value={score * 100} className="h-1.5 mt-2" />
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Recommendations */}
              <Card className="p-6 glass border-primary/30">
                <h4 className="font-bold mb-6 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  {language === 'de' ? 'Empfohlene Maßnahmen' : 'Recommended Actions'}
                </h4>
                <div className="space-y-3">
                  {recommendations[language].map((rec, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                      <p className="text-sm">{rec}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Wins */}
              <Card className="p-6 glass border-accent/30">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  {language === 'de' ? 'Quick Wins' : 'Quick Wins'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {bottleneckCapability.quickWins[language].map((win, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent/10 text-accent border-accent/30">
                      {win}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Expected Impact */}
              <Card className="p-6 glass">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-accent" />
                  {language === 'de' ? 'Erwartete Verbesserungen' : 'Expected Improvements'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {bottleneckCapability.metrics.map((metric, index) => (
                    <div key={index} className="p-4 rounded-lg bg-accent/10 text-center">
                      <p className="text-2xl font-bold text-accent">{metric.improvement}</p>
                      <p className="text-sm text-muted-foreground">{metric.label[language]}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  onClick={resetWizard}
                  className="gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  {language === 'de' ? 'Erneut testen' : 'Retake Test'}
                </Button>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg gap-2"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  <Users className="w-4 h-4" />
                  {language === 'de' ? 'Kostenloses Diagnose-Gespräch' : 'Free Diagnosis Call'}
                </Button>
              </div>

              <FilloutBookingModal
                formSlug="inflection-call"
                source="bottleneck-wizard"
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
              />
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default BottleneckWizard;
