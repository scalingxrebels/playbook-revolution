import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Clock, DollarSign, Zap } from 'lucide-react';

interface CaseStudy {
  name: string;
  logo: string;
  arr: string;
  employees: number;
  arrPerEmployee: string;
  timeToMilestone: string;
  founded: string;
  level: 'Level 3' | 'Level 2' | 'Level 1';
  highlight: boolean;
  metrics: {
    growth: string;
    coordination: string;
    efficiency: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    name: 'Midjourney',
    logo: 'MJ',
    arr: '€492M',
    employees: 107,
    arrPerEmployee: '€4.6M',
    timeToMilestone: '18 months',
    founded: '2021',
    level: 'Level 3',
    highlight: true,
    metrics: {
      growth: 'Superlinear (70:1)',
      coordination: 'O(n log n)',
      efficiency: '+2,200%'
    }
  },
  {
    name: 'Cursor',
    logo: 'CR',
    arr: '€100M',
    employees: 60,
    arrPerEmployee: '€1.67M',
    timeToMilestone: '12 months',
    founded: '2023',
    level: 'Level 3',
    highlight: true,
    metrics: {
      growth: 'Superlinear (13:1)',
      coordination: 'O(n log n)',
      efficiency: '+735%'
    }
  },
  {
    name: 'Perplexity',
    logo: 'PX',
    arr: '€200M',
    employees: 80,
    arrPerEmployee: '€2.5M',
    timeToMilestone: '24 months',
    founded: '2022',
    level: 'Level 3',
    highlight: true,
    metrics: {
      growth: 'Superlinear (5:1)',
      coordination: 'O(n log n)',
      efficiency: '+1,150%'
    }
  },
  {
    name: 'Harvey',
    logo: 'HV',
    arr: '€100M',
    employees: 120,
    arrPerEmployee: '€833K',
    timeToMilestone: '24 months',
    founded: '2022',
    level: 'Level 3',
    highlight: false,
    metrics: {
      growth: 'Superlinear (4:1)',
      coordination: 'O(n log n)',
      efficiency: '+316%'
    }
  },
  {
    name: 'Traditional SaaS',
    logo: 'TS',
    arr: '€30M',
    employees: 150,
    arrPerEmployee: '€200K',
    timeToMilestone: '5-7 years',
    founded: '2019',
    level: 'Level 1',
    highlight: false,
    metrics: {
      growth: 'Linear (1:1)',
      coordination: 'O(n²)',
      efficiency: 'Baseline'
    }
  }
];

const CaseStudiesSection: React.FC = () => {
  const { language } = useLanguage();

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Level 3': return 'bg-accent/20 text-accent border-accent/30';
      case 'Level 2': return 'bg-primary/20 text-primary border-primary/30';
      default: return 'bg-muted text-muted-foreground border-muted';
    }
  };

  return (
    <section id="cases" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            n=22 Companies, R²=0.76
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'de' ? 'Empirisch validierte Ergebnisse' : 'Empirically Validated Results'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Warum skalieren Midjourney, Cursor und Perplexity 10-30x schneller?' 
              : 'Why do Midjourney, Cursor, and Perplexity scale 10-30x faster?'}
          </p>
        </div>

        {/* Main Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard 
            icon={<TrendingUp className="w-5 h-5" />}
            value="4-10x"
            label={language === 'de' ? 'Schnelleres Scaling' : 'Faster Scaling'}
            sublabel="Level 3 vs Level 1"
          />
          <StatCard 
            icon={<Clock className="w-5 h-5" />}
            value="8-18"
            label={language === 'de' ? 'Monate zu €100M' : 'Months to €100M'}
            sublabel={language === 'de' ? 'vs. 60-84 Monate' : 'vs. 60-84 months'}
          />
          <StatCard 
            icon={<Users className="w-5 h-5" />}
            value="-95%"
            label={language === 'de' ? 'Koordinationskosten' : 'Coordination Cost'}
            sublabel="O(n²) → O(n log n)"
          />
          <StatCard 
            icon={<DollarSign className="w-5 h-5" />}
            value="€750K-5M"
            label="ARR/Employee"
            sublabel={language === 'de' ? 'vs. €150-200K' : 'vs. €150-200K'}
          />
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.filter(c => c.highlight).map((study) => (
            <Card 
              key={study.name}
              className={`p-6 glass border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-accent-glow group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold">
                    {study.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{study.name}</h3>
                    <span className="text-sm text-muted-foreground">Founded {study.founded}</span>
                  </div>
                </div>
                <Badge className={getLevelColor(study.level)}>{study.level}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <MetricBox 
                  label="ARR" 
                  value={study.arr} 
                  icon={<DollarSign className="w-4 h-4" />}
                />
                <MetricBox 
                  label={language === 'de' ? 'Team' : 'Team'} 
                  value={`${study.employees}`} 
                  icon={<Users className="w-4 h-4" />}
                />
                <MetricBox 
                  label="ARR/Employee" 
                  value={study.arrPerEmployee} 
                  icon={<Zap className="w-4 h-4" />}
                />
                <MetricBox 
                  label={language === 'de' ? 'Zeit zu €100M' : 'Time to €100M'} 
                  value={study.timeToMilestone} 
                  icon={<Clock className="w-4 h-4" />}
                />
              </div>

              <div className="pt-4 border-t border-border/50 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{language === 'de' ? 'Wachstum' : 'Growth'}</span>
                  <span className="font-medium text-accent">{study.metrics.growth}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{language === 'de' ? 'Koordination' : 'Coordination'}</span>
                  <span className="font-medium">{study.metrics.coordination}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{language === 'de' ? 'Effizienz' : 'Efficiency'}</span>
                  <span className="font-medium text-accent">{study.metrics.efficiency}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="mt-12 p-6 glass overflow-x-auto">
          <h3 className="font-bold text-lg mb-4">
            {language === 'de' ? 'Vollständiger Vergleich' : 'Full Comparison'}
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 px-2">{language === 'de' ? 'Unternehmen' : 'Company'}</th>
                <th className="text-right py-3 px-2">ARR</th>
                <th className="text-right py-3 px-2">{language === 'de' ? 'Team' : 'Employees'}</th>
                <th className="text-right py-3 px-2">ARR/Employee</th>
                <th className="text-right py-3 px-2">{language === 'de' ? 'Zeit zu €100M' : 'Time to €100M'}</th>
                <th className="text-center py-3 px-2">Level</th>
              </tr>
            </thead>
            <tbody>
              {caseStudies.map((study) => (
                <tr key={study.name} className={`border-b border-border/30 ${study.level === 'Level 1' ? 'opacity-60' : ''}`}>
                  <td className="py-3 px-2 font-medium">{study.name}</td>
                  <td className="py-3 px-2 text-right">{study.arr}</td>
                  <td className="py-3 px-2 text-right">{study.employees}</td>
                  <td className="py-3 px-2 text-right font-medium text-accent">{study.arrPerEmployee}</td>
                  <td className="py-3 px-2 text-right">{study.timeToMilestone}</td>
                  <td className="py-3 px-2 text-center">
                    <Badge className={`${getLevelColor(study.level)} text-xs`}>{study.level}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Statistical Validation */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Statistical Validation:</span> θ_index → log(Time to €100M): r = 0.89, p ≈ 3×10⁻⁸ (n=22)
          </p>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, sublabel }) => (
  <div className="p-4 rounded-xl bg-card border border-border/50 text-center">
    <div className="flex items-center justify-center gap-2 text-accent mb-1">
      {icon}
      <span className="text-2xl font-bold">{value}</span>
    </div>
    <p className="text-sm font-medium">{label}</p>
    <p className="text-xs text-muted-foreground">{sublabel}</p>
  </div>
);

interface MetricBoxProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const MetricBox: React.FC<MetricBoxProps> = ({ label, value, icon }) => (
  <div className="p-3 rounded-lg bg-background/50">
    <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
      {icon}
      <span>{label}</span>
    </div>
    <p className="font-bold">{value}</p>
  </div>
);

export default CaseStudiesSection;
