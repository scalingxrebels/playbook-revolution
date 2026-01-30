import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Image, Code, Search, Bot, CreditCard, Palette, FileText,
  TrendingUp, Play, Pause
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts';

interface TimelineCompany {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  founded: number;
  data: { year: number; value: number; label: string; milestone?: string }[];
  metric: string;
}

const companies: TimelineCompany[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    icon: Code,
    color: '#3B82F6',
    founded: 2022,
    metric: 'Valuation ($B)',
    data: [
      { year: 2022, value: 0, label: 'Founded' },
      { year: 2024, value: 0.4, label: '$400M', milestone: 'Series B (Aug 2024)' },
    ],
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    icon: Search,
    color: '#14B8A6',
    founded: 2022,
    metric: 'Valuation ($B)',
    data: [
      { year: 2022, value: 0, label: 'Founded' },
      { year: 2024, value: 0.2, label: '$200M (est.)', milestone: 'Revenue' },
      { year: 2025, value: 9, label: '$9B', milestone: '$9B Valuation' },
    ],
  },
  {
    id: 'openai',
    name: 'OpenAI',
    icon: Bot,
    color: '#10B981',
    founded: 2015,
    metric: 'Valuation ($B)',
    data: [
      { year: 2015, value: 0, label: 'Founded' },
      { year: 2019, value: 1, label: '$1B' },
      { year: 2021, value: 14, label: '$14B' },
      { year: 2023, value: 29, label: '$29B', milestone: 'ChatGPT Launch' },
      { year: 2024, value: 80, label: '$80B+', milestone: '200M Users' },
    ],
  },
  {
    id: 'stripe',
    name: 'Stripe',
    icon: CreditCard,
    color: '#6366F1',
    founded: 2010,
    metric: 'Valuation ($B)',
    data: [
      { year: 2010, value: 0, label: 'Founded' },
      { year: 2015, value: 1, label: '$1B' },
      { year: 2018, value: 20, label: '$20B' },
      { year: 2020, value: 36, label: '$36B' },
      { year: 2023, value: 95, label: '$95B', milestone: '$14B Revenue' },
    ],
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: Palette,
    color: '#F97316',
    founded: 2012,
    metric: 'Valuation ($B)',
    data: [
      { year: 2012, value: 0, label: 'Founded' },
      { year: 2019, value: 2, label: '$2B' },
      { year: 2021, value: 10, label: '$10B', milestone: '5x growth' },
      { year: 2023, value: 20, label: '$20B', milestone: 'Adobe Deal' },
    ],
  },
  {
    id: 'notion',
    name: 'Notion',
    icon: FileText,
    color: '#A855F7',
    founded: 2016,
    metric: 'Valuation ($B)',
    data: [
      { year: 2016, value: 0, label: 'Founded' },
      { year: 2020, value: 2, label: '$2B' },
      { year: 2021, value: 10, label: '$10B', milestone: '5x growth' },
      { year: 2024, value: 10, label: '$10B', milestone: 'Profitability Focus' },
    ],
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    icon: Image,
    color: '#8B5CF6',
    founded: 2021,
    metric: 'Revenue ($M)',
    data: [
      { year: 2021, value: 0, label: 'Founded' },
      { year: 2022, value: 50, label: '$50M' },
      { year: 2023, value: 200, label: '$200M', milestone: '+300%' },
      { year: 2024, value: 300, label: '$300M', milestone: '+50%' },
      { year: 2025, value: 492, label: '$492M', milestone: '107 employees' },
    ],
  },
];

const GrowthTimelineVisualization = () => {
  const { language } = useLanguage();
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>(['cursor', 'openai', 'stripe']);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(1);
  const [hoveredPoint, setHoveredPoint] = useState<{ company: string; year: number } | null>(null);

  const toggleCompany = (id: string) => {
    setSelectedCompanies(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id)
        : [...prev, id]
    );
  };

  const startAnimation = () => {
    setAnimationProgress(0);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating && animationProgress < 1) {
      const timer = setTimeout(() => {
        setAnimationProgress(prev => Math.min(prev + 0.02, 1));
      }, 50);
      return () => clearTimeout(timer);
    } else if (animationProgress >= 1) {
      setIsAnimating(false);
    }
  }, [isAnimating, animationProgress]);

  const selectedData = companies.filter(c => selectedCompanies.includes(c.id));
  
  // Find min and max years across all selected companies
  const allYears = selectedData.flatMap(c => c.data.map(d => d.year));
  const minYear = Math.min(...allYears);
  const maxYear = Math.max(...allYears);
  
  // Create unified timeline data
  const timelineData: { year: number; [key: string]: number | string | undefined }[] = [];
  for (let year = minYear; year <= maxYear; year += 0.5) {
    const point: { year: number; [key: string]: number | string | undefined } = { year };
    selectedData.forEach(company => {
      const dataPoint = company.data.find(d => d.year === year);
      const prevPoint = company.data.filter(d => d.year <= year).pop();
      if (dataPoint) {
        const animatedValue = dataPoint.value * animationProgress;
        point[company.id] = animatedValue;
        point[`${company.id}_label`] = dataPoint.label;
        point[`${company.id}_milestone`] = dataPoint.milestone;
      } else if (prevPoint && year > prevPoint.year) {
        const nextPoint = company.data.find(d => d.year > year);
        if (nextPoint) {
          const progress = (year - prevPoint.year) / (nextPoint.year - prevPoint.year);
          const interpolated = prevPoint.value + (nextPoint.value - prevPoint.value) * progress;
          point[company.id] = interpolated * animationProgress;
        }
      }
    });
    timelineData.push(point);
  }

  const formatYear = (year: number) => {
    if (year % 1 === 0) return year.toString();
    return '';
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    
    return (
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl">
        <p className="text-sm font-medium text-foreground mb-2">{Math.floor(label)}</p>
        {payload.map((entry: any) => {
          const company = companies.find(c => c.id === entry.dataKey);
          if (!company) return null;
          return (
            <div key={entry.dataKey} className="flex items-center gap-2 text-sm">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: company.color }}
              />
              <span className="text-muted-foreground">{company.name}:</span>
              <span className="font-semibold" style={{ color: company.color }}>
                ${entry.value?.toFixed(1)}B
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            {language === 'de' ? 'Wachstums-Timeline' : 'Growth Timeline'}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            {language === 'de' 
              ? 'Von Gründung bis zur aktuellen Bewertung' 
              : 'From founding to current valuation'}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={startAnimation}
          disabled={isAnimating}
          className="flex items-center gap-2"
        >
          {isAnimating ? (
            <>
              <Pause className="w-4 h-4" />
              {language === 'de' ? 'Animiert...' : 'Animating...'}
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              {language === 'de' ? 'Animation starten' : 'Play Animation'}
            </>
          )}
        </Button>
      </div>

      {/* Company Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {companies.map(company => {
          const Icon = company.icon;
          const isSelected = selectedCompanies.includes(company.id);
          return (
            <button
              key={company.id}
              onClick={() => toggleCompany(company.id)}
              className={`
                flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium
                transition-all duration-200 border
                ${isSelected 
                  ? 'border-transparent text-white shadow-lg' 
                  : 'border-border bg-background/50 text-muted-foreground hover:text-foreground hover:border-primary/50'
                }
              `}
              style={isSelected ? { backgroundColor: company.color } : undefined}
            >
              <Icon className="w-4 h-4" />
              {company.name}
            </button>
          );
        })}
      </div>

      {/* Chart */}
      <div className="h-[350px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={timelineData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis 
              dataKey="year" 
              tickFormatter={formatYear}
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tickFormatter={(value) => `$${value}B`}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {selectedData.map(company => (
              <Line
                key={company.id}
                type="monotone"
                dataKey={company.id}
                stroke={company.color}
                strokeWidth={3}
                dot={false}
                activeDot={{ 
                  r: 6, 
                  fill: company.color,
                  stroke: 'hsl(var(--background))',
                  strokeWidth: 2
                }}
                connectNulls
              />
            ))}

            {/* Milestone dots */}
            {selectedData.map(company => 
              company.data
                .filter(d => d.milestone)
                .map((d, i) => (
                  <ReferenceDot
                    key={`${company.id}-${i}`}
                    x={d.year}
                    y={d.value * animationProgress}
                    r={8}
                    fill={company.color}
                    stroke="hsl(var(--background))"
                    strokeWidth={2}
                  />
                ))
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend with Milestones */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedData.map(company => {
          const Icon = company.icon;
          const latestData = company.data[company.data.length - 1];
          const milestones = company.data.filter(d => d.milestone);
          
          return (
            <div 
              key={company.id}
              className="bg-background/50 rounded-xl p-4 border border-border/50"
            >
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${company.color}20` }}
                >
                  <Icon className="w-4 h-4" style={{ color: company.color }} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{company.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'de' ? 'Gegründet' : 'Founded'} {company.founded}
                  </p>
                </div>
              </div>
              
              <div className="space-y-1">
                {milestones.slice(-3).map((m, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted-foreground">{Math.floor(m.year)}</span>
                    <span className="font-medium" style={{ color: company.color }}>
                      {m.label}
                    </span>
                    {m.milestone && (
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {m.milestone}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GrowthTimelineVisualization;
