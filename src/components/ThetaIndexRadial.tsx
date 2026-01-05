import { useLanguage } from '@/contexts/LanguageContext';

interface ThetaIndexRadialProps {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  overall: number;
  color?: string;
}

const ThetaIndexRadial = ({ c1, c2, c3, c4, overall, color = 'hsl(var(--primary))' }: ThetaIndexRadialProps) => {
  const { language } = useLanguage();
  
  const capabilities = [
    { key: 'C₁', label: language === 'en' ? 'Product' : 'Produkt', score: c1 },
    { key: 'C₂', label: language === 'en' ? 'GTM' : 'GTM', score: c2 },
    { key: 'C₃', label: language === 'en' ? 'Ops' : 'Ops', score: c3 },
    { key: 'C₄', label: language === 'en' ? 'Capital' : 'Kapital', score: c4 },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">θ_index</span>
        <span className="text-2xl font-bold" style={{ color }}>{overall}/10</span>
      </div>
      {capabilities.map((cap) => (
        <div key={cap.key} className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{cap.key} {cap.label}</span>
            <span className="font-medium">{cap.score}/10</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-500"
              style={{ 
                width: `${cap.score * 10}%`,
                backgroundColor: color
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThetaIndexRadial;
