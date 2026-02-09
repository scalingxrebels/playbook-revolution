import React, { useState } from 'react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Shield, Brain, AlertTriangle, Heart, Users, 
  DollarSign, BarChart3, CheckCircle, ArrowRight, Lock
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Pillar {
  id: string;
  number: number;
  title: { en: string; de: string };
  question: { en: string; de: string };
  icon: React.ElementType;
  color: string;
  levels: {
    level: string;
    useCases: string;
    criteria: string;
  }[];
  boardActions: string[];
}

const AIBoardGovernancePillars: React.FC = () => {
  const { language } = useLanguage();
  const [activePillar, setActivePillar] = useState<string>('decision-rights');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const pillars: Pillar[] = [
    {
      id: 'decision-rights',
      number: 1,
      title: { en: 'AI Decision Rights Architecture', de: 'AI Decision Rights Architektur' },
      question: { en: 'Which decisions should AI make autonomously?', de: 'Welche Entscheidungen soll AI autonom treffen?' },
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      levels: [
        { level: 'Level 1: AI Autonomous', useCases: 'Content recommendations, email routing', criteria: 'Low risk, high volume, reversible' },
        { level: 'Level 2: AI-Assisted', useCases: 'Pricing changes, hiring decisions', criteria: 'Medium risk, medium volume' },
        { level: 'Level 3: AI-Informed', useCases: 'Strategic partnerships, M&A', criteria: 'High risk, low volume' },
        { level: 'Level 4: Human-Only', useCases: 'CEO hire, IPO decision', criteria: 'Critical risk, irreversible' },
      ],
      boardActions: ['Map all decision types', 'Classify by level (1-4)', 'Define approval workflows', 'Establish escalation paths'],
    },
    {
      id: 'risk-oversight',
      number: 2,
      title: { en: 'AI Risk Oversight', de: 'AI Risiko-Oversight' },
      question: { en: 'How do we monitor and mitigate AI risks?', de: 'Wie überwachen und mindern wir AI-Risiken?' },
      icon: AlertTriangle,
      color: 'from-orange-500 to-amber-500',
      levels: [
        { level: 'Model Risk', useCases: 'AI makes wrong decisions', criteria: 'Testing, monitoring, validation' },
        { level: 'Data Risk', useCases: 'AI trained on biased/bad data', criteria: 'Data quality, diversity audits' },
        { level: 'Operational Risk', useCases: 'AI systems fail/crash', criteria: 'Redundancy, failsafes' },
        { level: 'Regulatory Risk', useCases: 'AI violates laws/regulations', criteria: 'Compliance monitoring' },
      ],
      boardActions: ['Quarterly risk review', 'Annual external audit', 'Real-time escalation for major incidents'],
    },
    {
      id: 'explainability',
      number: 3,
      title: { en: 'AI Explainability Standards', de: 'AI Erklärbarkeits-Standards' },
      question: { en: 'Can we explain why AI made a decision?', de: 'Können wir erklären, warum AI eine Entscheidung getroffen hat?' },
      icon: Lock,
      color: 'from-purple-500 to-pink-500',
      levels: [
        { level: 'Level 1: Black Box', useCases: 'Product recommendations', criteria: 'Low-stakes only' },
        { level: 'Level 2: Feature Importance', useCases: 'Credit scoring', criteria: 'Medium-stakes' },
        { level: 'Level 3: Counterfactual', useCases: 'Loan rejections', criteria: 'High-stakes' },
        { level: 'Level 4: Natural Language', useCases: 'Insurance claims', criteria: 'Customer-facing' },
      ],
      boardActions: ['Quarterly explainability review', 'Annual external audit', 'Regulatory monitoring (EU AI Act)'],
    },
    {
      id: 'ethics',
      number: 4,
      title: { en: 'AI Ethics & Values Governance', de: 'AI Ethik & Werte Governance' },
      question: { en: 'Who defines the ethical boundaries of AI?', de: 'Wer definiert die ethischen Grenzen der AI?' },
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      levels: [
        { level: 'Fairness', useCases: 'AI should not discriminate', criteria: 'Bias testing, diverse training data' },
        { level: 'Transparency', useCases: 'AI decisions explainable', criteria: 'Explainability tools, model cards' },
        { level: 'Privacy', useCases: 'Protect user data', criteria: 'Data minimization, encryption' },
        { level: 'Accountability', useCases: 'Humans responsible for AI', criteria: 'Decision rights, audit trails' },
      ],
      boardActions: ['Ethics Committee (monthly)', 'Regular audits (quarterly)', 'Incident reporting (real-time)'],
    },
    {
      id: 'talent',
      number: 5,
      title: { en: 'AI Talent & Capability Oversight', de: 'AI Talent & Capability Oversight' },
      question: { en: 'Do we have the right AI talent?', de: 'Haben wir das richtige AI-Talent?' },
      icon: Users,
      color: 'from-emerald-500 to-teal-500',
      levels: [
        { level: 'AI Team Size', useCases: 'Current vs. Target', criteria: 'Growth trajectory' },
        { level: 'AI Turnover', useCases: 'Target <10%', criteria: 'Retention strategy' },
        { level: 'AI Compensation', useCases: '90th percentile', criteria: 'Competitive pay' },
        { level: 'AI Leadership', useCases: 'Key hires needed', criteria: 'Succession planning' },
      ],
      boardActions: ['Quarterly talent review', 'Annual capability assessment', '90th+ percentile compensation'],
    },
    {
      id: 'investment',
      number: 6,
      title: { en: 'AI Investment & Capital Allocation', de: 'AI Investment & Kapitalallokation' },
      question: { en: 'How much should we invest in AI?', de: 'Wie viel sollten wir in AI investieren?' },
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      levels: [
        { level: 'Seed - Early A', useCases: '10-20% of budget', criteria: '1-3 AI engineers' },
        { level: 'Series A', useCases: '20-30% of budget', criteria: '5-10 AI engineers' },
        { level: 'Series B', useCases: '30-50% of budget', criteria: '15-30 AI engineers' },
        { level: 'Series C+', useCases: '40-60% of budget', criteria: '30-100+ AI engineers' },
      ],
      boardActions: ['Annual AI budget approval', 'Quarterly investment review', 'Major investments (>€5M) board approval'],
    },
    {
      id: 'metrics',
      number: 7,
      title: { en: 'AI Metrics & Performance Monitoring', de: 'AI Metriken & Performance Monitoring' },
      question: { en: 'How do we measure AI success?', de: 'Wie messen wir AI-Erfolg?' },
      icon: BarChart3,
      color: 'from-cyan-500 to-blue-500',
      levels: [
        { level: 'θ_index (AI Maturity)', useCases: 'Score 0-1', criteria: 'Target: >0.7 (Level 2-3)' },
        { level: 'AI-driven Revenue', useCases: '% of total', criteria: 'Target: >30%' },
        { level: 'Model Uptime', useCases: 'Availability', criteria: 'Target: >99%' },
        { level: 'Major Incidents', useCases: 'Count/year', criteria: 'Target: <2' },
      ],
      boardActions: ['Real-time AI dashboard', 'Quarterly performance review', 'Annual strategic assessment'],
    },
  ];

  const activePillarData = pillars.find(p => p.id === activePillar)!;

  return (
    <section id="governance-pillars" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400">
            {language === 'de' ? '7 Säulen der AI Board Governance' : '7 Pillars of AI Board Governance'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              {language === 'de' ? 'AI Board Governance Framework' : 'AI Board Governance Framework'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? '"Wie regiert man ein Unternehmen, das schneller denkt als man selbst?" – Das 7-Säulen-Framework für Boards'
              : '"How do you govern a company that thinks faster than you do?" – The 7-pillar framework for Boards'}
          </p>
        </div>

        {/* Pillar Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                activePillar === pillar.id
                  ? `bg-gradient-to-r ${pillar.color} text-white border-transparent`
                  : 'bg-card/50 border-border hover:border-primary/30'
              }`}
            >
              <span className="text-sm font-bold">{pillar.number}</span>
              <pillar.icon className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* Active Pillar Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <Card className="lg:col-span-2 p-8 glass border-blue-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${activePillarData.color}`}>
                <activePillarData.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1">Pillar {activePillarData.number}</Badge>
                <h3 className="text-2xl font-bold">{activePillarData.title[language]}</h3>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/30 mb-6">
              <p className="text-lg italic text-muted-foreground">
                "{activePillarData.question[language]}"
              </p>
            </div>

            {/* Levels/Framework */}
            <h4 className="font-semibold mb-4">Framework</h4>
            <div className="space-y-3 mb-6">
              {activePillarData.levels.map((level, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${activePillarData.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{level.level}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <span className="text-primary">Use Cases:</span> {level.useCases}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="text-primary">Criteria:</span> {level.criteria}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Board Actions */}
          <Card className="p-8 glass border-border/50">
            <h4 className="font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              {language === 'de' ? 'Board Actions' : 'Board Actions'}
            </h4>
            
            <ul className="space-y-3 mb-8">
              {activePillarData.boardActions.map((action, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{action}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h5 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                {language === 'de' ? 'Haftungs-Hinweis' : 'Liability Note'}
              </h5>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Board sagt "wir wussten es nicht" → Regulatoren sagen "ihr hättet es wissen müssen" → Board ist haftbar.'
                  : 'Board says "we didn\'t know" → Regulators say "you should have known" → Board is liable.'}
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                {language === 'de' ? 'Board Assessment starten' : 'Start Board Assessment'}
              </button>
            </div>
          </Card>
        </div>
      </div>

      <FilloutBookingModal
        formSlug="inflection-call"
        source="board-governance"
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default AIBoardGovernancePillars;