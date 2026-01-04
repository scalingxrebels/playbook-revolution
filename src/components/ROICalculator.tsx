import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign,
  Zap,
  Bot,
  Cpu
} from 'lucide-react';

interface CalculatorInputs {
  employees: number;
  revenue: number;
  growthRate: number;
  cac: number;
}

interface CalculatorResults {
  revenuePerEmployee: number;
  projectedGrowth: number;
  timeTo100M: number;
  coordinationCost: number;
  efficiency: number;
}

const calculateResults = (inputs: CalculatorInputs, mode: 'traditional' | 'aiPowered' | 'aiNative'): CalculatorResults => {
  const { employees, revenue, growthRate, cac } = inputs;
  
  // Base calculations
  const baseRevenuePerEmployee = revenue / employees;
  const baseTimeTo100M = revenue > 0 ? Math.max(1, (100000000 - revenue) / (revenue * (growthRate / 100))) : 10;
  const baseCoordinationCost = (employees * (employees - 1)) / 2; // O(n²) pairs
  
  // Multipliers based on mode (from document data)
  const multipliers = {
    traditional: {
      revenuePerEmployee: 1,
      growth: 1,
      timeReduction: 1,
      coordinationReduction: 1,
      efficiency: 1
    },
    aiPowered: {
      revenuePerEmployee: 2.5, // 150% improvement
      growth: 1.8, // 80% better growth
      timeReduction: 0.5, // 50% faster
      coordinationReduction: 0.4, // 60% reduction
      efficiency: 2.0
    },
    aiNative: {
      revenuePerEmployee: 5, // 400% improvement (€200k → €1M+)
      growth: 3.5, // 250% better growth (10-30x faster)
      timeReduction: 0.25, // 75% faster (10 years → 2.5 years)
      coordinationReduction: 0.05, // 95% reduction (O(n log n))
      efficiency: 5.0
    }
  };
  
  const m = multipliers[mode];
  
  return {
    revenuePerEmployee: baseRevenuePerEmployee * m.revenuePerEmployee,
    projectedGrowth: growthRate * m.growth,
    timeTo100M: baseTimeTo100M * m.timeReduction,
    coordinationCost: baseCoordinationCost * m.coordinationReduction,
    efficiency: m.efficiency * 100
  };
};

const formatNumber = (num: number, decimals = 0): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toFixed(decimals);
};

const formatCurrency = (num: number): string => {
  return '€' + formatNumber(num);
};

const ROICalculator: React.FC = () => {
  const { t } = useLanguage();
  const [activeMode, setActiveMode] = useState<'traditional' | 'aiPowered' | 'aiNative'>('traditional');
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 80,
    revenue: 15000000,
    growthRate: 80,
    cac: 5000
  });

  const results = useMemo(() => ({
    traditional: calculateResults(inputs, 'traditional'),
    aiPowered: calculateResults(inputs, 'aiPowered'),
    aiNative: calculateResults(inputs, 'aiNative')
  }), [inputs]);

  const currentResults = results[activeMode];
  const traditionalResults = results.traditional;

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs(prev => ({ ...prev, [field]: numValue }));
  };

  const getImprovement = (current: number, baseline: number, isReduction = false): string => {
    if (baseline === 0) return '0%';
    const diff = isReduction 
      ? ((baseline - current) / baseline) * 100 
      : ((current - baseline) / baseline) * 100;
    return (diff > 0 ? '+' : '') + diff.toFixed(0) + '%';
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case 'traditional': return <Users className="w-4 h-4" />;
      case 'aiPowered': return <Zap className="w-4 h-4" />;
      case 'aiNative': return <Cpu className="w-4 h-4" />;
      default: return null;
    }
  };

  const getModeColor = (mode: string): string => {
    switch (mode) {
      case 'traditional': return 'bg-muted-foreground/20 text-muted-foreground data-[state=active]:bg-muted-foreground data-[state=active]:text-background';
      case 'aiPowered': return 'bg-primary/20 text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground';
      case 'aiNative': return 'bg-accent/20 text-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground';
      default: return '';
    }
  };

  return (
    <section id="calculator" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{t('calc.title')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('calc.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Input Panel */}
          <Card className="lg:col-span-2 p-6 glass">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              Your Numbers
            </h3>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="employees" className="text-sm font-medium">
                  {t('calc.employees')}
                </Label>
                <Input
                  id="employees"
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', e.target.value)}
                  className="bg-background/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="revenue" className="text-sm font-medium">
                  {t('calc.revenue')}
                </Label>
                <Input
                  id="revenue"
                  type="number"
                  value={inputs.revenue}
                  onChange={(e) => handleInputChange('revenue', e.target.value)}
                  className="bg-background/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="growthRate" className="text-sm font-medium">
                  {t('calc.growthRate')}
                </Label>
                <Input
                  id="growthRate"
                  type="number"
                  value={inputs.growthRate}
                  onChange={(e) => handleInputChange('growthRate', e.target.value)}
                  className="bg-background/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cac" className="text-sm font-medium">
                  {t('calc.cac')}
                </Label>
                <Input
                  id="cac"
                  type="number"
                  value={inputs.cac}
                  onChange={(e) => handleInputChange('cac', e.target.value)}
                  className="bg-background/50"
                />
              </div>
            </div>
          </Card>

          {/* Results Panel */}
          <Card className="lg:col-span-3 p-6 glass overflow-hidden">
            <Tabs 
              value={activeMode} 
              onValueChange={(v) => setActiveMode(v as typeof activeMode)}
              className="w-full"
            >
              <TabsList className="grid grid-cols-3 mb-8 bg-muted/50">
                <TabsTrigger 
                  value="traditional" 
                  className={`flex items-center gap-2 transition-all ${getModeColor('traditional')}`}
                >
                  {getModeIcon('traditional')}
                  <span className="hidden sm:inline">{t('calc.traditional')}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="aiPowered" 
                  className={`flex items-center gap-2 transition-all ${getModeColor('aiPowered')}`}
                >
                  {getModeIcon('aiPowered')}
                  <span className="hidden sm:inline">{t('calc.aiPowered')}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="aiNative" 
                  className={`flex items-center gap-2 transition-all ${getModeColor('aiNative')}`}
                >
                  {getModeIcon('aiNative')}
                  <span className="hidden sm:inline">{t('calc.aiNative')}</span>
                </TabsTrigger>
              </TabsList>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Revenue per Employee */}
                <ResultCard
                  icon={<DollarSign className="w-5 h-5" />}
                  label={t('calc.revenuePerEmployee')}
                  value={formatCurrency(currentResults.revenuePerEmployee)}
                  improvement={activeMode !== 'traditional' ? getImprovement(currentResults.revenuePerEmployee, traditionalResults.revenuePerEmployee) : undefined}
                  mode={activeMode}
                />

                {/* Projected Growth */}
                <ResultCard
                  icon={<TrendingUp className="w-5 h-5" />}
                  label={t('calc.projectedGrowth')}
                  value={`${currentResults.projectedGrowth.toFixed(0)}%`}
                  improvement={activeMode !== 'traditional' ? getImprovement(currentResults.projectedGrowth, traditionalResults.projectedGrowth) : undefined}
                  mode={activeMode}
                />

                {/* Time to €100M */}
                <ResultCard
                  icon={<Clock className="w-5 h-5" />}
                  label={t('calc.timeTo100M')}
                  value={`${currentResults.timeTo100M.toFixed(1)} ${t('calc.years')}`}
                  improvement={activeMode !== 'traditional' ? getImprovement(traditionalResults.timeTo100M, currentResults.timeTo100M) : undefined}
                  mode={activeMode}
                  isReduction
                />

                {/* Coordination Cost */}
                <ResultCard
                  icon={<Users className="w-5 h-5" />}
                  label={t('calc.coordinationCost')}
                  value={formatNumber(currentResults.coordinationCost)}
                  improvement={activeMode !== 'traditional' ? getImprovement(traditionalResults.coordinationCost, currentResults.coordinationCost) : undefined}
                  mode={activeMode}
                  isReduction
                />
              </div>
            </Tabs>

            {/* Visual Comparison Bar */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Efficiency Comparison</p>
              <div className="space-y-3">
                <ComparisonBar 
                  label={t('calc.traditional')} 
                  value={100} 
                  maxValue={500} 
                  color="bg-muted-foreground/40"
                  isActive={activeMode === 'traditional'}
                />
                <ComparisonBar 
                  label={t('calc.aiPowered')} 
                  value={200} 
                  maxValue={500} 
                  color="bg-primary"
                  isActive={activeMode === 'aiPowered'}
                />
                <ComparisonBar 
                  label={t('calc.aiNative')} 
                  value={500} 
                  maxValue={500} 
                  color="bg-accent"
                  isActive={activeMode === 'aiNative'}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface ResultCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  improvement?: string;
  mode: string;
  isReduction?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ icon, label, value, improvement, mode, isReduction }) => {
  const getBorderColor = () => {
    switch (mode) {
      case 'aiPowered': return 'border-primary/30';
      case 'aiNative': return 'border-accent/30';
      default: return 'border-border';
    }
  };

  const getGlowColor = () => {
    switch (mode) {
      case 'aiPowered': return 'shadow-primary/20';
      case 'aiNative': return 'shadow-accent/20';
      default: return '';
    }
  };

  return (
    <div className={`p-4 rounded-lg bg-background/50 border ${getBorderColor()} ${mode !== 'traditional' ? `shadow-lg ${getGlowColor()}` : ''} transition-all duration-300`}>
      <div className="flex items-center gap-2 text-muted-foreground mb-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">{value}</span>
        {improvement && (
          <span className={`text-sm font-medium ${isReduction ? 'text-accent' : 'text-accent'}`}>
            {improvement}
          </span>
        )}
      </div>
    </div>
  );
};

interface ComparisonBarProps {
  label: string;
  value: number;
  maxValue: number;
  color: string;
  isActive: boolean;
}

const ComparisonBar: React.FC<ComparisonBarProps> = ({ label, value, maxValue, color, isActive }) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className={`flex items-center gap-4 transition-opacity ${isActive ? 'opacity-100' : 'opacity-50'}`}>
      <span className="text-sm w-24 truncate">{label}</span>
      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-700 ease-out ${isActive ? 'shadow-glow' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-medium w-16 text-right">{value}%</span>
    </div>
  );
};

export default ROICalculator;
