import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  TrendingUp, Zap, Users, DollarSign, 
  CheckCircle, ArrowUpRight, Building, BarChart3
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CompanyData {
  name: string;
  logo: string;
  year2023Revenue: string;
  year2025Revenue: string;
  revenueGrowth: string;
  headcountGrowth: string;
  arrPerEmployee: string;
  superlinearRatio: string;
  scalingCoefficient: string;
}

const SuperlinearGrowthSection: React.FC = () => {
  const { language } = useLanguage();

  const validationMetrics = [
    { metric: 'Revenue Growth vs Headcount', claim: 'Revenue grows 5-10x faster', reality: '3-8x validated', validated: '80%' },
    { metric: 'Marginal ARR/Employee', claim: 'Increases with scale', reality: 'Validated for top performers', validated: '75%' },
    { metric: 'Scaling Coefficient', claim: '>1.5 (super-linear)', reality: '1.3-2.1 validated', validated: '85%' },
    { metric: 'Time to Scale Milestones', claim: 'Exponential acceleration', reality: 'Validated (2-4x faster)', validated: '70%' },
    { metric: 'Cost Structure', claim: 'Fixed costs dominate', reality: 'Validated (70-90% fixed)', validated: '90%' },
    { metric: 'Network Effects', claim: 'Compound with scale', reality: 'Validated', validated: '85%' },
  ];

  const companies: CompanyData[] = [
    {
      name: 'OpenAI',
      logo: '🤖',
      year2023Revenue: '$2.0B',
      year2025Revenue: '$12.7B',
      revenueGrowth: '535%',
      headcountGrowth: '358%',
      arrPerEmployee: '$3.6M',
      superlinearRatio: '3.2x',
      scalingCoefficient: '1.5',
    },
    {
      name: 'Anthropic',
      logo: '🧠',
      year2023Revenue: '$100M',
      year2025Revenue: '$7-9B',
      revenueGrowth: '7000-9000%',
      headcountGrowth: '233%',
      arrPerEmployee: '$14-18M',
      superlinearRatio: '10-12x',
      scalingCoefficient: '2.1',
    },
    {
      name: 'Midjourney',
      logo: '🎨',
      year2023Revenue: '$200M',
      year2025Revenue: '$500M',
      revenueGrowth: '150%',
      headcountGrowth: '228%',
      arrPerEmployee: '$3.8M',
      superlinearRatio: '2.16x',
      scalingCoefficient: '1.3',
    },
    {
      name: 'Perplexity',
      logo: '🔍',
      year2023Revenue: '$5M',
      year2025Revenue: '$148M',
      revenueGrowth: '2860%',
      headcountGrowth: '300%',
      arrPerEmployee: '$1.23M',
      superlinearRatio: '9.5x',
      scalingCoefficient: '1.8',
    },
  ];

  return (
    <section id="superlinear-growth" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-500/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-emerald-500/30 text-emerald-400">
            {language === 'de' ? 'Empirische Validierung' : 'Empirical Validation'} • n=22+ Companies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
              {language === 'de' ? 'Super-Linear Growth Validation' : 'Super-Linear Growth Validation'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'AI-Native Unternehmen skalieren super-linear: Revenue wächst schneller als Headcount, Marginal-Effizienz steigt mit Scale'
              : 'AI-Native companies scale super-linearly: Revenue grows faster than headcount, marginal efficiency increases with scale'}
          </p>
        </div>

        {/* Core Hypothesis */}
        <Card className="p-8 mb-12 glass border-emerald-500/30">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <TrendingUp className="w-12 h-12 mb-4 text-emerald-400" />
              <h3 className="text-lg font-bold mb-2">Revenue &gt; Headcount</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'de' 
                  ? 'Revenue-Wachstum übertrifft Headcount-Wachstum divergierend über Zeit'
                  : 'Revenue growth exceeds headcount growth, diverging over time'}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <ArrowUpRight className="w-12 h-12 mb-4 text-emerald-400" />
              <h3 className="text-lg font-bold mb-2">Marginal Efficiency ↑</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'ARR pro Mitarbeiter STEIGT mit Scale (nicht sinkt)'
                  : 'ARR per employee INCREASES with scale (not decreases)'}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-12 h-12 mb-4 text-emerald-400" />
              <h3 className="text-lg font-bold mb-2">Compounding Effects</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'de'
                  ? 'Network Effects + AI Automation = Compound Efficiency'
                  : 'Network effects + AI automation create compounding efficiency'}
              </p>
            </div>
          </div>
        </Card>

        {/* Validation Matrix */}
        <Card className="p-8 mb-12 glass border-border/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-emerald-400" />
            {language === 'de' ? 'Validierungs-Matrix (80-85% Gesamt)' : 'Validation Matrix (80-85% Overall)'}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Metric</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    {language === 'de' ? 'Super-Linear Behauptung' : 'Super-Linear Claim'}
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    {language === 'de' ? 'Empirische Realität' : 'Empirical Reality'}
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">
                    {language === 'de' ? 'Validiert' : 'Validated'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {validationMetrics.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">{row.metric}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.claim}</td>
                    <td className="py-3 px-4 text-emerald-400">{row.reality}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                        ✅ {row.validated}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Company Case Studies */}
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Building className="w-6 h-6 text-emerald-400" />
          {language === 'de' ? 'AI-Native Super-Linear Unternehmen' : 'AI-Native Super-Linear Companies'}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {companies.map((company) => (
            <Card 
              key={company.name}
              className="p-6 glass border-emerald-500/20 hover:border-emerald-500/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{company.logo}</span>
                <div>
                  <h4 className="text-xl font-bold">{company.name}</h4>
                  <p className="text-sm text-muted-foreground">2023 → 2025</p>
                </div>
                <Badge className="ml-auto bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                  {company.superlinearRatio} Super-Linear
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <DollarSign className="w-3 h-3" />
                    Revenue Growth
                  </div>
                  <div className="text-lg font-bold text-emerald-400">{company.revenueGrowth}</div>
                  <div className="text-xs text-muted-foreground">{company.year2023Revenue} → {company.year2025Revenue}</div>
                </div>
                
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <Users className="w-3 h-3" />
                    Headcount Growth
                  </div>
                  <div className="text-lg font-bold">{company.headcountGrowth}</div>
                </div>
                
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <BarChart3 className="w-3 h-3" />
                    ARR/Employee
                  </div>
                  <div className="text-lg font-bold text-primary">{company.arrPerEmployee}</div>
                </div>
                
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <TrendingUp className="w-3 h-3" />
                    Scaling Coefficient
                  </div>
                  <div className="text-lg font-bold">{company.scalingCoefficient}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Insight */}
        <Card className="p-8 glass border-emerald-500/30">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">
                {language === 'de' ? 'Schlüssel-Erkenntnis' : 'Key Finding'}
              </h4>
              <p className="text-muted-foreground text-lg">
                {language === 'de'
                  ? 'Super-Linearität ist REAL und VALIDIERT. AI-Native Unternehmen zeigen fundamental andere Scaling-Dynamiken als Traditional SaaS. Anthropic zeigt das STÄRKSTE super-lineare Scaling-Muster mit marginal efficiency, die dramatisch mit Scale steigt.'
                  : 'Super-linearity IS REAL and VALIDATED. AI-Native companies demonstrate fundamentally different scaling dynamics than Traditional SaaS. Anthropic shows the STRONGEST super-linear scaling pattern with marginal efficiency increasing dramatically with scale.'}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SuperlinearGrowthSection;