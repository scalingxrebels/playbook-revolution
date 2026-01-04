import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Users, Brain, Zap, Target, Code, Palette, 
  BarChart3, Bot, CheckCircle, ArrowRight, Clock
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SquadModelSection: React.FC = () => {
  const { language } = useLanguage();

  const squadRoles = [
    { role: 'Product Manager', icon: Target, description: 'Squad Lead, owns OKRs' },
    { role: '3 Engineers', icon: Code, description: 'Full-Stack, build features' },
    { role: '1 Designer', icon: Palette, description: 'UX/UI Design' },
    { role: '1 Data Analyst', icon: BarChart3, description: 'Metrics, A/B tests' },
    { role: 'AI Squad Assistant', icon: Bot, description: 'Automation, Insights, Coordination' },
  ];

  const aiAssistantFunctions = [
    { function: 'Sprint Planning', benefit: 'Auto-generates sprint plans based on OKRs' },
    { function: 'Progress Tracking', benefit: 'Real-time dashboard updates (Jira, Linear)' },
    { function: 'Standup Automation', benefit: 'Async standup summaries (Slack, Notion)' },
    { function: 'Blocker Detection', benefit: 'AI identifies blockers, suggests solutions' },
    { function: 'Decision Support', benefit: 'Provides data-driven recommendations' },
    { function: 'Meeting Summaries', benefit: 'Auto-transcribe and action items' },
  ];

  const squadComparison = [
    { aspect: 'Decision Velocity', traditional: '1 week (manual coordination)', aiNative: '1 day (AI-powered)', multiplier: '7x faster' },
    { aspect: 'Sprint Planning', traditional: '2 hours (manual)', aiNative: '30 min (AI-generated)', multiplier: '4x faster' },
    { aspect: 'Standup', traditional: '15 min/day × 5 = 75 min/week', aiNative: 'Async (5 min/day)', multiplier: '3x faster' },
    { aspect: 'Progress Tracking', traditional: 'Manual updates (30 min/day)', aiNative: 'Real-time (automated)', multiplier: '10x faster' },
    { aspect: 'Total Coordination', traditional: '~10 hours/week', aiNative: '~2 hours/week', multiplier: '5x reduction' },
  ];

  const squadTypes = [
    { type: 'Stream-Aligned', percentage: '60-70%', mission: 'Aligned to value stream (customer journey)', examples: 'Onboarding Squad, Checkout Squad, Growth Squad' },
    { type: 'Enabling Teams', percentage: '20-30%', mission: 'Help Stream-Aligned Teams succeed', examples: 'Platform Engineering, Data Team, Design System' },
    { type: 'Complicated-Subsystem', percentage: '5-10%', mission: 'Deep expertise in complex domain', examples: 'ML/AI Team, Security Team, Payments Team' },
    { type: 'Platform Teams', percentage: '5-10%', mission: 'Self-service platforms for other teams', examples: 'DevOps Platform, Data Platform, Internal Tools' },
  ];

  const scalingPattern = [
    { stage: 'Seed - Series A', people: '10-50', squads: '6-8', tribes: '1', ratio: '80% Stream-Aligned, 20% Enabling' },
    { stage: 'Series A - B', people: '50-200', squads: '12-15', tribes: '3', ratio: '65% Stream-Aligned, 35% Enabling' },
    { stage: 'Series B - C', people: '200-500', squads: '25-30', tribes: '4-5', ratio: '60% Stream-Aligned, 40% Enabling' },
  ];

  return (
    <section id="squad-model" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyan-500/30 text-cyan-400">
            {language === 'de' ? 'Organizational Architecture' : 'Organizational Architecture'} • C₂ (Setup)
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {language === 'de' ? 'Das AI-Native Squad Modell' : 'The AI-Native Squad Model'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Cross-funktionale, autonome Teams mit AI Squad Assistant – 5x weniger Koordinationskosten, 7x schnellere Entscheidungen'
              : 'Cross-functional, autonomous teams with AI Squad Assistant – 5x less coordination costs, 7x faster decisions'}
          </p>
        </div>

        {/* Squad Composition */}
        <Card className="p-8 mb-12 glass border-cyan-500/30">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-cyan-400" />
            {language === 'de' ? 'Squad Zusammensetzung (5-9 Personen)' : 'Squad Composition (5-9 People)'}
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {squadRoles.map((role, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl text-center ${
                  role.role === 'AI Squad Assistant' 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30' 
                    : 'bg-muted/30'
                }`}
              >
                <role.icon className={`w-8 h-8 mx-auto mb-2 ${role.role === 'AI Squad Assistant' ? 'text-cyan-400' : 'text-muted-foreground'}`} />
                <div className="font-semibold text-sm">{role.role}</div>
                <div className="text-xs text-muted-foreground mt-1">{role.description}</div>
              </div>
            ))}
          </div>

          {/* AI Squad Assistant Functions */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyan-400" />
              AI Squad Assistant Functions
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {aiAssistantFunctions.map((func, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-sm">{func.function}</div>
                    <div className="text-xs text-muted-foreground">{func.benefit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Traditional vs AI-Native Comparison */}
        <Card className="p-8 mb-12 glass border-border/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            {language === 'de' ? 'Traditional vs. AI-Native Squad' : 'Traditional vs. AI-Native Squad'}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Aspect</th>
                  <th className="text-left py-3 px-4 font-medium text-destructive">Traditional Squad</th>
                  <th className="text-left py-3 px-4 font-medium text-cyan-400">AI-Native Squad</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">AI Multiplier</th>
                </tr>
              </thead>
              <tbody>
                {squadComparison.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">{row.aspect}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.traditional}</td>
                    <td className="py-3 px-4 text-cyan-400">{row.aiNative}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                        {row.multiplier}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Squad Types (Team Topologies) */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 glass border-border/50">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              {language === 'de' ? 'Squad-Typen (Team Topologies)' : 'Squad Types (Team Topologies)'}
            </h3>
            
            <div className="space-y-4">
              {squadTypes.map((type, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{type.type}</span>
                    <Badge variant="outline">{type.percentage}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    <span className="text-primary">Mission:</span> {type.mission}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-primary">Examples:</span> {type.examples}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Scaling Pattern */}
          <Card className="p-8 glass border-border/50">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-primary" />
              {language === 'de' ? 'Scaling Pattern: 50 → 500 People' : 'Scaling Pattern: 50 → 500 People'}
            </h3>
            
            <div className="space-y-4">
              {scalingPattern.map((stage, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30">
                  <div className="font-semibold mb-2">{stage.stage}</div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-xs text-muted-foreground">People</div>
                      <div className="font-medium">{stage.people}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Squads</div>
                      <div className="font-medium">{stage.squads}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Tribes</div>
                      <div className="font-medium">{stage.tribes}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{stage.ratio}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Metrics */}
        <Card className="p-8 glass border-cyan-500/30">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-cyan-400" />
            {language === 'de' ? 'C₂ (Setup) Metriken' : 'C₂ (Setup) Metrics'}
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-muted/30 text-center">
              <div className="text-3xl font-bold text-cyan-400">8x</div>
              <div className="text-sm font-medium mt-1">Less Complex</div>
              <div className="text-xs text-muted-foreground">Organizational Complexity</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 text-center">
              <div className="text-3xl font-bold text-cyan-400">5x</div>
              <div className="text-sm font-medium mt-1">Less Overhead</div>
              <div className="text-xs text-muted-foreground">Coordination Time: 7.5% vs 37.5%</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 text-center">
              <div className="text-3xl font-bold text-cyan-400">14x</div>
              <div className="text-sm font-medium mt-1">Faster</div>
              <div className="text-xs text-muted-foreground">Decision Latency: 1 day vs 2 weeks</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 text-center">
              <div className="text-3xl font-bold text-cyan-400">2.4x</div>
              <div className="text-sm font-medium mt-1">More Accessible</div>
              <div className="text-xs text-muted-foreground">Information: 95% vs 40%</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SquadModelSection;