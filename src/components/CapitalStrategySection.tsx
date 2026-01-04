import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  DollarSign, TrendingUp, Users, Percent, 
  ArrowRight, CheckCircle, Building, Target
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CapitalStrategySection: React.FC = () => {
  const { language } = useLanguage();

  const traditionalVsAINative = {
    traditional: {
      title: 'Traditional SaaS',
      path: '€0 → €100M ARR',
      capital: '€90M',
      time: '72 months',
      team: '400 people',
      arrPerEmployee: '€250k',
      dilution: '55%',
    },
    aiNative: {
      title: 'AI-Native',
      path: '€0 → €100M ARR',
      capital: '€16M',
      time: '24 months',
      team: '50 people',
      arrPerEmployee: '€2M',
      dilution: '28%',
    },
  };

  const fundraisingComparison = [
    { stage: 'Seed', traditional: { amount: '€2M', dilution: '10%' }, aiNative: { amount: '€1M', dilution: '8%' } },
    { stage: 'Series A', traditional: { amount: '€10M', dilution: '20%' }, aiNative: { amount: '€5M', dilution: '12%' } },
    { stage: 'Series B', traditional: { amount: '€30M', dilution: '15%' }, aiNative: { amount: '€10M', dilution: '8%' } },
    { stage: 'Series C', traditional: { amount: '€50M', dilution: '10%' }, aiNative: { amount: 'Not needed', dilution: '0%' } },
    { stage: 'Total', traditional: { amount: '€92M', dilution: '55%' }, aiNative: { amount: '€16M', dilution: '28%' } },
  ];

  const valuationPremiumFactors = [
    { factor: 'Unit Economics', description: '3-5x better LTV/CAC ratio', impact: '+100-200%' },
    { factor: 'Growth Velocity', description: '2-3x faster scaling', impact: '+50-100%' },
    { factor: 'Defensible Moats', description: 'Data network effects, model moats', impact: '+100-150%' },
    { factor: 'Higher Margins', description: '2x higher profitability', impact: '+50-100%' },
  ];

  const cursorCaseStudy = {
    name: 'Cursor',
    arr: '€100M',
    year: '2024',
    valuation: '€3B',
    multiple: '30x ARR',
    metrics: [
      { label: 'CAC', value: '€50' },
      { label: 'LTV', value: '€10k' },
      { label: 'LTV:CAC', value: '200:1' },
      { label: 'Time to €100M', value: '24 months' },
      { label: 'Gross Margin', value: '95%' },
    ],
  };

  return (
    <section id="capital-strategy" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-green-500/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-green-500/30 text-green-400">
            {language === 'de' ? 'AI Capital Strategy' : 'AI Capital Strategy'} • VC Playbook
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 bg-clip-text text-transparent">
              {language === 'de' ? 'Die Kapitaleffizienz-Revolution' : 'The Capital Efficiency Revolution'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'AI-Native Unternehmen brauchen 70-80% weniger Kapital, skalieren 2-3x schneller, und Founder behalten 75-85% Ownership'
              : 'AI-Native companies need 70-80% less capital, scale 2-3x faster, and founders keep 75-85% ownership'}
          </p>
        </div>

        {/* Traditional vs AI-Native Path */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Traditional */}
          <Card className="p-8 glass border-destructive/30">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-destructive" />
              <div>
                <h3 className="text-xl font-bold">{traditionalVsAINative.traditional.title}</h3>
                <p className="text-sm text-muted-foreground">{traditionalVsAINative.traditional.path}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-xs text-muted-foreground">Capital Raised</div>
                <div className="text-2xl font-bold text-destructive">{traditionalVsAINative.traditional.capital}</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-xs text-muted-foreground">Time</div>
                <div className="text-2xl font-bold">{traditionalVsAINative.traditional.time}</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-xs text-muted-foreground">Team Size</div>
                <div className="text-2xl font-bold">{traditionalVsAINative.traditional.team}</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-xs text-muted-foreground">ARR/Employee</div>
                <div className="text-2xl font-bold">{traditionalVsAINative.traditional.arrPerEmployee}</div>
              </div>
            </div>
            
            <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Total Dilution</div>
                <div className="text-3xl font-bold text-destructive">{traditionalVsAINative.traditional.dilution}</div>
              </div>
            </div>
          </Card>

          {/* AI-Native */}
          <Card className="p-8 glass border-green-500/30">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold">{traditionalVsAINative.aiNative.title}</h3>
                <p className="text-sm text-muted-foreground">{traditionalVsAINative.aiNative.path}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-xs text-muted-foreground">Capital Raised</div>
                <div className="text-2xl font-bold text-green-400">{traditionalVsAINative.aiNative.capital}</div>
                <div className="text-xs text-green-400">-82%</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-xs text-muted-foreground">Time</div>
                <div className="text-2xl font-bold text-green-400">{traditionalVsAINative.aiNative.time}</div>
                <div className="text-xs text-green-400">-67%</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-xs text-muted-foreground">Team Size</div>
                <div className="text-2xl font-bold text-green-400">{traditionalVsAINative.aiNative.team}</div>
                <div className="text-xs text-green-400">-88%</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-xs text-muted-foreground">ARR/Employee</div>
                <div className="text-2xl font-bold text-green-400">{traditionalVsAINative.aiNative.arrPerEmployee}</div>
                <div className="text-xs text-green-400">+700%</div>
              </div>
            </div>
            
            <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Total Dilution</div>
                <div className="text-3xl font-bold text-green-400">{traditionalVsAINative.aiNative.dilution}</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Fundraising Comparison */}
        <Card className="p-8 mb-12 glass border-border/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" />
            {language === 'de' ? 'Fundraising Playbook Vergleich' : 'Fundraising Playbook Comparison'}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Stage</th>
                  <th className="text-center py-3 px-4 font-medium text-destructive" colSpan={2}>Traditional</th>
                  <th className="text-center py-3 px-4 font-medium text-green-400" colSpan={2}>AI-Native</th>
                </tr>
                <tr className="border-b border-border/50">
                  <th></th>
                  <th className="text-center py-2 px-4 text-sm text-muted-foreground">Amount</th>
                  <th className="text-center py-2 px-4 text-sm text-muted-foreground">Dilution</th>
                  <th className="text-center py-2 px-4 text-sm text-muted-foreground">Amount</th>
                  <th className="text-center py-2 px-4 text-sm text-muted-foreground">Dilution</th>
                </tr>
              </thead>
              <tbody>
                {fundraisingComparison.map((row, i) => (
                  <tr key={i} className={`border-b border-border/50 ${row.stage === 'Total' ? 'bg-muted/20 font-bold' : ''}`}>
                    <td className="py-3 px-4">{row.stage}</td>
                    <td className="py-3 px-4 text-center text-destructive">{row.traditional.amount}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.traditional.dilution}</td>
                    <td className="py-3 px-4 text-center text-green-400">{row.aiNative.amount}</td>
                    <td className="py-3 px-4 text-center text-green-400">{row.aiNative.dilution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Valuation Premium */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Premium Factors */}
          <Card className="p-8 glass border-border/50">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Percent className="w-6 h-6 text-primary" />
              {language === 'de' ? 'Warum VCs 3-10x mehr zahlen' : 'Why VCs Pay 3-10x More'}
            </h3>
            
            <div className="space-y-4">
              {valuationPremiumFactors.map((factor, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <div className="font-semibold">{factor.factor}</div>
                    <div className="text-sm text-muted-foreground">{factor.description}</div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 shrink-0">
                    {factor.impact}
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">AI-Native Valuation Premium</div>
                <div className="text-3xl font-bold text-green-400">15-30x ARR</div>
                <div className="text-xs text-muted-foreground">vs. 5-10x for Traditional SaaS</div>
              </div>
            </div>
          </Card>

          {/* Cursor Case Study */}
          <Card className="p-8 glass border-green-500/30">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-green-400" />
              Case Study: {cursorCaseStudy.name}
            </h3>
            
            <div className="flex items-center justify-between mb-6 p-4 rounded-lg bg-muted/30">
              <div>
                <div className="text-sm text-muted-foreground">ARR ({cursorCaseStudy.year})</div>
                <div className="text-2xl font-bold">{cursorCaseStudy.arr}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Valuation</div>
                <div className="text-2xl font-bold text-green-400">{cursorCaseStudy.valuation}</div>
              </div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                {cursorCaseStudy.multiple}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {cursorCaseStudy.metrics.map((metric, index) => (
                <div key={index} className="p-3 rounded-lg bg-muted/30 text-center">
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                  <div className="text-lg font-bold text-green-400">{metric.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  {language === 'de'
                    ? 'LTV:CAC von 200:1 ist 20-40x besser als Traditional SaaS (5-10:1). Das rechtfertigt 3x höhere Multiples.'
                    : 'LTV:CAC of 200:1 is 20-40x better than Traditional SaaS (5-10:1). This justifies 3x higher multiples.'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CapitalStrategySection;