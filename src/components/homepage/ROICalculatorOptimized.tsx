import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp, Clock, Users, Flame, Target, ArrowRight, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

// Phase Presets (exakt aus Briefing)
const phasePresets = {
  seed: { arr: 500000, employees: 5, yoyGrowth: 2.0, monthlyBurn: 50000, currentLevel: 'traditional' },
  seriesA: { arr: 3000000, employees: 20, yoyGrowth: 1.5, monthlyBurn: 150000, currentLevel: 'ai_powered' },
  seriesB: { arr: 15000000, employees: 80, yoyGrowth: 1.0, monthlyBurn: 500000, currentLevel: 'ai_powered' },
  seriesC: { arr: 50000000, employees: 250, yoyGrowth: 0.6, monthlyBurn: 1500000, currentLevel: 'ai_enabled' },
  custom: { arr: 6000000, employees: 50, yoyGrowth: 0.8, monthlyBurn: 200000, currentLevel: 'ai_powered' },
};

// Benchmarks (exakt aus Briefing)
const benchmarks = {
  traditional: { theta_index: 0.1, arr_per_employee: 200000, time_to_100m: 72, yoy_growth: 0.5, team_at_100m: 500 },
  ai_powered: { theta_index: 0.35, arr_per_employee: 350000, time_to_100m: 54, yoy_growth: 1.0, team_at_100m: 450 },
  ai_enabled: { theta_index: 0.65, arr_per_employee: 900000, time_to_100m: 30, yoy_growth: 2.0, team_at_100m: 200 },
  ai_native: { theta_index: 0.9, arr_per_employee: 2000000, time_to_100m: 13, yoy_growth: 3.0, team_at_100m: 75 },
};

type LevelKey = keyof typeof benchmarks;

// i18n Labels (exakt aus Briefing)
const translations = {
  en: {
    badge: 'Research-Backed',
    title: 'AI-Native ROI Calculator',
    subtitle: 'How fast can you scale to €100M ARR?',
    phasePreset: 'Quick Preset',
    inputs: 'Your Current State',
    arr: 'Current ARR',
    employees: 'Current Employees',
    yoyGrowth: 'YoY Growth Rate',
    monthlyBurn: 'Monthly Burn',
    currentLevel: 'Current AI Maturity',
    targetLevel: 'Target AI Maturity',
    currentState: 'Your Current State',
    targetState: 'Your Target State',
    theGap: 'The Gap',
    investment: 'Investment',
    valuePool: 'Value Pool (12m)',
    roiMultiple: 'ROI Multiple',
    payback: 'Payback',
    months: 'months',
    timeTo100m: 'Time to €100M',
    arrPerEmployee: 'ARR / Employee',
    projectedArr: '12-Month ARR',
    burnSavings: 'Burn Savings',
    primaryCTA: 'Get your custom roadmap',
    disclaimer: 'Based on validated research (n=22 AI-native companies). Results may vary.',
    levels: {
      traditional: 'Traditional',
      ai_powered: 'AI-Powered',
      ai_enabled: 'AI-Enabled',
      ai_native: 'AI-Native',
    },
    phases: {
      seed: 'Seed',
      seriesA: 'Series A',
      seriesB: 'Series B',
      seriesC: 'Series C',
      custom: 'Custom',
    },
  },
  de: {
    badge: 'Forschungsbasiert',
    title: 'AI-Native ROI Rechner',
    subtitle: 'Wie schnell kannst du auf €100M ARR skalieren?',
    phasePreset: 'Schnellauswahl',
    inputs: 'Dein aktueller Stand',
    arr: 'Aktueller ARR',
    employees: 'Aktuelle Mitarbeiter',
    yoyGrowth: 'YoY Wachstumsrate',
    monthlyBurn: 'Monatlicher Burn',
    currentLevel: 'Aktuelle AI-Reife',
    targetLevel: 'Ziel AI-Reife',
    currentState: 'Dein aktueller Stand',
    targetState: 'Dein Ziel-Stand',
    theGap: 'Die Lücke',
    investment: 'Investment',
    valuePool: 'Value Pool (12m)',
    roiMultiple: 'ROI Multiple',
    payback: 'Payback',
    months: 'Monate',
    timeTo100m: 'Zeit bis €100M',
    arrPerEmployee: 'ARR / Mitarbeiter',
    projectedArr: '12-Monats ARR',
    burnSavings: 'Burn-Ersparnis',
    primaryCTA: 'Hol dir deine individuelle Roadmap',
    disclaimer: 'Basierend auf validierter Forschung (n=22 AI-native Unternehmen). Ergebnisse können variieren.',
    levels: {
      traditional: 'Traditional',
      ai_powered: 'AI-Powered',
      ai_enabled: 'AI-Enabled',
      ai_native: 'AI-Native',
    },
    phases: {
      seed: 'Seed',
      seriesA: 'Series A',
      seriesB: 'Series B',
      seriesC: 'Series C',
      custom: 'Individuell',
    },
  },
};

const formatCurrency = (value: number): string => {
  if (value >= 1000000) {
    return `€${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `€${(value / 1000).toFixed(0)}K`;
  }
  return `€${value.toFixed(0)}`;
};

const formatPercent = (value: number): string => {
  return `${(value * 100).toFixed(0)}%`;
};

const ROICalculatorOptimized = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const t = translations[language as keyof typeof translations] || translations.en;

  // State
  const [selectedPreset, setSelectedPreset] = useState<string>('seriesA');
  const [arrEur, setArrEur] = useState(3000000);
  const [employees, setEmployees] = useState(20);
  const [yoyGrowth, setYoyGrowth] = useState(1.5);
  const [monthlyBurn, setMonthlyBurn] = useState(150000);
  const [currentLevel, setCurrentLevel] = useState<LevelKey>('ai_powered');
  const [targetLevel, setTargetLevel] = useState<LevelKey>('ai_native');

  // Apply preset
  const applyPreset = (presetKey: string) => {
    const preset = phasePresets[presetKey as keyof typeof phasePresets];
    if (preset) {
      setSelectedPreset(presetKey);
      setArrEur(preset.arr);
      setEmployees(preset.employees);
      setYoyGrowth(preset.yoyGrowth);
      setMonthlyBurn(preset.monthlyBurn);
      setCurrentLevel(preset.currentLevel as LevelKey);
      // Set target to next level
      const levels: LevelKey[] = ['traditional', 'ai_powered', 'ai_enabled', 'ai_native'];
      const currentIdx = levels.indexOf(preset.currentLevel as LevelKey);
      setTargetLevel(levels[Math.min(currentIdx + 1, levels.length - 1)]);
    }
  };

  // Calculations (exakt aus Briefing)
  const results = useMemo(() => {
    const currentBenchmark = benchmarks[currentLevel];
    const targetBenchmark = benchmarks[targetLevel];

    // Theta Gap
    const thetaGap = targetBenchmark.theta_index - currentBenchmark.theta_index;

    // YoY Growth (User Input Based)
    const targetYoYGrowth = yoyGrowth * (1 + thetaGap * 1.5);

    // Monthly Burn (User Input Based)
    const targetMonthlyBurn = monthlyBurn * (1 - thetaGap * 0.3);

    // Time to €100M
    const calculateTimeToTarget = (arr: number, growth: number): number => {
      const targetARR = 100000000;
      if (arr >= targetARR) return 0;
      return Math.round(Math.log(targetARR / arr) / Math.log(1 + growth / 12));
    };

    const currentTimeToTarget = calculateTimeToTarget(arrEur, yoyGrowth);
    const targetTimeToTarget = calculateTimeToTarget(arrEur, targetYoYGrowth);

    // 12-Month ARR
    const current12MonthARR = arrEur * (1 + yoyGrowth);
    const target12MonthARR = arrEur * (1 + targetYoYGrowth);

    // ARR per Employee
    const currentArrPerEmployee = arrEur / employees;
    const targetArrPerEmployee = targetBenchmark.arr_per_employee;

    // Value Pool (Includes Burn Savings)
    const arrIncrease = target12MonthARR - current12MonthARR;
    const burnSavings = (monthlyBurn - targetMonthlyBurn) * 12;
    const valuePool = arrIncrease + burnSavings;

    // ROI
    const investment = 200000;
    const roiMultiple = valuePool / investment;
    const paybackMonths = investment / (valuePool / 12);

    return {
      thetaGap,
      currentYoYGrowth: yoyGrowth,
      targetYoYGrowth,
      currentMonthlyBurn: monthlyBurn,
      targetMonthlyBurn,
      currentTimeToTarget,
      targetTimeToTarget,
      current12MonthARR,
      target12MonthARR,
      currentArrPerEmployee,
      targetArrPerEmployee,
      arrIncrease,
      burnSavings,
      valuePool,
      investment,
      roiMultiple,
      paybackMonths,
    };
  }, [arrEur, employees, yoyGrowth, monthlyBurn, currentLevel, targetLevel]);

  const levels: LevelKey[] = ['traditional', 'ai_powered', 'ai_enabled', 'ai_native'];

  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="roi-calculator"
      ref={ref}
      className="relative min-h-[70vh] py-16 md:py-24 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div
          className={cn(
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Calculator className="w-4 h-4" />
              {t.badge}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              {language === 'de' ? '2 von 3 Ergebnissen garantiert' : '2 of 3 results guaranteed'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {language === 'de' 
              ? 'Wie schnell kannst du auf €100M skalieren – mit Garantie?' 
              : 'How fast can you scale to €100M – with a guarantee?'}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' 
              ? 'Wir garantieren 2 von 3 Ergebnissen – oder du bekommst 50% zurück. Kein anderer Consultant bietet das.'
              : 'We guarantee 2 out of 3 results – or you get 50% back. No other consultant offers this.'}
          </p>
        </div>

        {/* Calculator Grid */}
        <div
          className={cn(
            'grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* LEFT: Inputs */}
          <div className="space-y-6">
            {/* Phase Presets */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t.phasePreset}
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(phasePresets).map((key) => (
                  <button
                    key={key}
                    onClick={() => applyPreset(key)}
                    className={cn(
                      'px-4 py-2 rounded-md text-sm font-medium transition-all',
                      selectedPreset === key
                        ? 'bg-primary text-primary-foreground shadow-brutal-sm'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    )}
                  >
                    {t.phases[key as keyof typeof t.phases]}
                  </button>
                ))}
              </div>
            </div>

            {/* Current AI Maturity */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t.currentLevel}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => {
                      setCurrentLevel(level);
                      setSelectedPreset('custom');
                      // Ensure target is higher
                      const currentIdx = levels.indexOf(level);
                      const targetIdx = levels.indexOf(targetLevel);
                      if (targetIdx <= currentIdx) {
                        setTargetLevel(levels[Math.min(currentIdx + 1, levels.length - 1)]);
                      }
                    }}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-all',
                      currentLevel === level
                        ? 'bg-primary text-primary-foreground shadow-brutal-sm'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    )}
                  >
                    {t.levels[level]}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-card space-y-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {t.inputs}
              </h3>

              {/* ARR Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    {t.arr}
                  </label>
                  <span className="text-sm font-bold text-primary">{formatCurrency(arrEur)}</span>
                </div>
                <Slider
                  value={[Math.log10(arrEur)]}
                  onValueChange={(v) => {
                    setArrEur(Math.round(Math.pow(10, v[0]) / 100000) * 100000);
                    setSelectedPreset('custom');
                  }}
                  min={5}
                  max={7.7}
                  step={0.05}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>€100K</span>
                  <span>€50M</span>
                </div>
              </div>

              {/* Employees Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    {t.employees}
                  </label>
                  <span className="text-sm font-bold text-primary">{employees}</span>
                </div>
                <Slider
                  value={[employees]}
                  onValueChange={(v) => {
                    setEmployees(v[0]);
                    setSelectedPreset('custom');
                  }}
                  min={3}
                  max={500}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>3</span>
                  <span>500</span>
                </div>
              </div>

              {/* YoY Growth Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    {t.yoyGrowth}
                  </label>
                  <span className="text-sm font-bold text-primary">{formatPercent(yoyGrowth)}</span>
                </div>
                <Slider
                  value={[yoyGrowth * 100]}
                  onValueChange={(v) => {
                    setYoyGrowth(v[0] / 100);
                    setSelectedPreset('custom');
                  }}
                  min={20}
                  max={400}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>20%</span>
                  <span>400%</span>
                </div>
              </div>

              {/* Monthly Burn Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Flame className="w-4 h-4 text-primary" />
                    {t.monthlyBurn}
                  </label>
                  <span className="text-sm font-bold text-primary">{formatCurrency(monthlyBurn)}</span>
                </div>
                <Slider
                  value={[Math.log10(monthlyBurn)]}
                  onValueChange={(v) => {
                    setMonthlyBurn(Math.round(Math.pow(10, v[0]) / 10000) * 10000);
                    setSelectedPreset('custom');
                  }}
                  min={4}
                  max={6.7}
                  step={0.05}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>€10K</span>
                  <span>€5M</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="space-y-6">
            {/* Target AI Maturity */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-card">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t.targetLevel}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {levels.map((level) => {
                  const currentIdx = levels.indexOf(currentLevel);
                  const levelIdx = levels.indexOf(level);
                  const isDisabled = levelIdx <= currentIdx;

                  return (
                    <button
                      key={level}
                      onClick={() => !isDisabled && setTargetLevel(level)}
                      disabled={isDisabled}
                      className={cn(
                        'px-3 py-2 rounded-md text-sm font-medium transition-all',
                        targetLevel === level
                          ? 'bg-accent text-accent-foreground shadow-brutal-sm'
                          : isDisabled
                          ? 'bg-muted text-muted-foreground opacity-50 cursor-not-allowed'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      )}
                    >
                      {t.levels[level]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Current State */}
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {t.currentState}
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground">{t.projectedArr}</p>
                    <p className="text-lg font-bold text-foreground">{formatCurrency(results.current12MonthARR)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.timeTo100m}</p>
                    <p className="text-lg font-bold text-foreground">{results.currentTimeToTarget} {t.months}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.monthlyBurn}</p>
                    <p className="text-lg font-bold text-foreground">{formatCurrency(results.currentMonthlyBurn)}</p>
                  </div>
                </div>
              </div>

              {/* Target State */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-4 shadow-card">
                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  {t.targetState}
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground">{t.projectedArr}</p>
                    <p className="text-lg font-bold text-foreground">
                      {formatCurrency(results.target12MonthARR)}
                      <span className="text-xs font-normal text-accent ml-1">
                        +{formatPercent((results.target12MonthARR - results.current12MonthARR) / results.current12MonthARR)}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.timeTo100m}</p>
                    <p className="text-lg font-bold text-foreground">
                      {results.targetTimeToTarget} {t.months}
                      <span className="text-xs font-normal text-accent ml-1">
                        -{results.currentTimeToTarget - results.targetTimeToTarget}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t.monthlyBurn}</p>
                    <p className="text-lg font-bold text-foreground">
                      {formatCurrency(results.targetMonthlyBurn)}
                      <span className="text-xs font-normal text-accent ml-1">
                        -{formatPercent((results.currentMonthlyBurn - results.targetMonthlyBurn) / results.currentMonthlyBurn)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Summary */}
            <div className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground rounded-lg p-6 shadow-glow">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5" />
                <h4 className="text-sm font-semibold uppercase tracking-wider">ROI Summary</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs opacity-80">{t.investment}</p>
                  <p className="text-xl font-bold">{formatCurrency(results.investment)}</p>
                </div>
                <div>
                  <p className="text-xs opacity-80">{t.valuePool}</p>
                  <p className="text-xl font-bold">{formatCurrency(results.valuePool)}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-foreground/20">
                <div>
                  <p className="text-xs opacity-80">{t.roiMultiple}</p>
                  <p className="text-3xl font-bold">{results.roiMultiple.toFixed(1)}x</p>
                </div>
                <div>
                  <p className="text-xs opacity-80">{t.payback}</p>
                  <p className="text-3xl font-bold">{Math.round(results.paybackMonths)} {t.months}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={scrollToBooking}
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-brutal hover:shadow-brutal-sm transition-all"
            >
              {t.primaryCTA}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground text-center">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorOptimized;
