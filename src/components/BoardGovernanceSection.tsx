import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Shield, Target, Package, Settings, DollarSign, Users, 
  Heart, Compass, Building, CheckCircle2, TrendingUp, AlertTriangle
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BoardGovernanceSection: React.FC = () => {
  const { language } = useLanguage();

  const dimensions = [
    {
      id: 'gtm',
      name: 'GTM/Revenue',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      governance: 'Revenue Governance, Pricing Policies, Sales Compliance',
      aiMultiplier: 'AI-powered Revenue Forecasting, Dynamic Pricing',
      outcome: '+15% Revenue Predictability',
    },
    {
      id: 'product',
      name: 'Product',
      icon: Package,
      color: 'from-purple-500 to-pink-500',
      governance: 'Product Governance, Roadmap Oversight, Quality Standards',
      aiMultiplier: 'AI-powered Product Analytics, Risk Detection',
      outcome: '-30% Product Risks',
    },
    {
      id: 'operations',
      name: 'Operations',
      icon: Settings,
      color: 'from-orange-500 to-amber-500',
      governance: 'Operational Risk Management, Compliance Frameworks',
      aiMultiplier: 'AI Risk Detection, Compliance Automation',
      outcome: '-50% Operational Risks',
    },
    {
      id: 'finance',
      name: 'Finance',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-500',
      governance: 'Financial Governance, Audit, Investor Relations',
      aiMultiplier: 'AI-powered Financial Forecasting, Board Dashboards',
      outcome: '+20% Investor Confidence',
    },
    {
      id: 'talent',
      name: 'Talent',
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      governance: 'Talent Governance, Compensation Policies, DEI Oversight',
      aiMultiplier: 'AI-powered Talent Analytics, Bias Detection',
      outcome: '+25% Talent Retention',
    },
    {
      id: 'customer-success',
      name: 'Customer Success',
      icon: Heart,
      color: 'from-red-500 to-orange-500',
      governance: 'Customer Governance, SLA Management, Escalation Policies',
      aiMultiplier: 'AI-powered Customer Risk Detection, Escalation Automation',
      outcome: '-40% Escalations',
    },
    {
      id: 'strategy',
      name: 'Strategy',
      icon: Compass,
      color: 'from-cyan-500 to-blue-500',
      governance: 'Strategic Governance, Board Oversight, Competitive Monitoring',
      aiMultiplier: 'AI-powered Competitive Intelligence, Scenario Planning',
      outcome: '2x Strategic Agility',
    },
    {
      id: 'governance',
      name: 'Governance',
      icon: Building,
      color: 'from-slate-500 to-zinc-500',
      governance: 'Board Effectiveness, Risk Management, Regulatory Compliance',
      aiMultiplier: 'AI Risk Detection, Regulatory Compliance, Board Intelligence',
      outcome: '50% Risk Reduction',
    },
  ];

  const traditionalVsAI = [
    {
      aspect: 'Board Strategy Reviews',
      traditional: '4x/year (annual)',
      aiNative: 'Continuous (real-time dashboards)',
    },
    {
      aspect: 'Competitive Analysis',
      traditional: 'Quarterly reports (manual)',
      aiNative: 'Daily alerts (AI-powered)',
    },
    {
      aspect: 'Strategic Adjustments',
      traditional: 'Reactive (respond to crises)',
      aiNative: 'Proactive (AI simulates market shifts)',
    },
    {
      aspect: 'Risk Detection',
      traditional: 'Post-mortem analysis',
      aiNative: 'Predictive risk scoring',
    },
    {
      aspect: 'Compliance Monitoring',
      traditional: 'Periodic audits',
      aiNative: 'Real-time compliance automation',
    },
  ];

  return (
    <section id="board-governance" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-purple-500/30 text-purple-400">
            Pillar 3 • Board & Venture Governance
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              AI-Native Board & Governance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' 
              ? 'Die dritte Ebene: Oversight & Risk Management, die Wachstum steuert und absichert – AI-powered für 2x Strategic Agility'
              : 'The third level: Oversight & Risk Management that steers and secures growth – AI-powered for 2x Strategic Agility'}
          </p>
        </div>

        {/* Function Definition */}
        <Card className="p-8 mb-12 glass border-purple-500/30">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Value Control</h3>
              <p className="text-muted-foreground text-sm">
                {language === 'de' ? 'Was steuert und kontrolliert?' : 'What steers and controls?'}
              </p>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Risk Management</h3>
              <p className="text-muted-foreground text-sm">
                {language === 'de' ? 'Proaktive Risikoerkennung' : 'Proactive Risk Detection'}
              </p>
            </div>
            <div>
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Compliance</h3>
              <p className="text-muted-foreground text-sm">
                {language === 'de' ? 'Automatisierte Compliance' : 'Automated Compliance'}
              </p>
            </div>
          </div>
        </Card>

        {/* 8 Dimensions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {dimensions.map((dim) => {
            const DimIcon = dim.icon;
            return (
              <Card 
                key={dim.id}
                className="p-5 glass border-purple-500/20 hover:border-purple-500/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${dim.color} text-white`}>
                    <DimIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold">{dim.name}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Governance:</p>
                    <p className="text-sm">{dim.governance}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">AI Multiplier:</p>
                    <p className="text-sm text-purple-400">{dim.aiMultiplier}</p>
                  </div>
                  
                  <div className="pt-3 border-t border-border/50">
                    <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                      {dim.outcome}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Traditional vs AI-Native Comparison */}
        <Card className="p-8 glass border-border/50 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {language === 'de' ? 'Traditional vs. AI-Native Governance' : 'Traditional vs. AI-Native Governance'}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Aspect</th>
                  <th className="text-left py-3 px-4 font-medium text-destructive">Traditional</th>
                  <th className="text-left py-3 px-4 font-medium text-accent">AI-Native</th>
                </tr>
              </thead>
              <tbody>
                {traditionalVsAI.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">{row.aspect}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.traditional}</td>
                    <td className="py-3 px-4 text-accent">{row.aiNative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Key Insight */}
        <Card className="p-8 glass border-accent/30">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/20 text-accent shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Key Insight</h4>
              <p className="text-muted-foreground">
                {language === 'de'
                  ? 'AI-native Board & Governance ist nicht nur Oversight, sondern proaktive, datengetriebene Steuerung, die durch AI unterstützt wird. Ergebnis: 2x Strategic Agility und 50% Risk Reduction.'
                  : 'AI-native Board & Governance is not just oversight, but proactive, data-driven steering supported by AI. Result: 2x Strategic Agility and 50% Risk Reduction.'}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BoardGovernanceSection;
