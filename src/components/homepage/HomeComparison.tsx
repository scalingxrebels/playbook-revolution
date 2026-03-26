import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, X, AlertTriangle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Status = 'yes' | 'partial' | 'no';

interface Row {
  labelDe: string;
  labelEn: string;
  mckinsey: Status;
  freelancer: Status;
  intern: Status;
  wir: Status;
}

const rows: Row[] = [
  { labelDe: 'M1 Hypothesen-Maschine', labelEn: 'M1 Hypothesis Engine', mckinsey: 'yes', freelancer: 'partial', intern: 'no', wir: 'yes' },
  { labelDe: 'M2 Übersetzungskompetenz', labelEn: 'M2 Translation Competence', mckinsey: 'yes', freelancer: 'partial', intern: 'partial', wir: 'yes' },
  { labelDe: 'M3 Funktionierende Synthese', labelEn: 'M3 Functioning Synthesis', mckinsey: 'no', freelancer: 'partial', intern: 'yes', wir: 'yes' },
  { labelDe: 'M4 AI Orchestration', labelEn: 'M4 AI Orchestration', mckinsey: 'no', freelancer: 'no', intern: 'no', wir: 'yes' },
  { labelDe: 'Speed (30 Tage)', labelEn: 'Speed (30 Days)', mckinsey: 'no', freelancer: 'partial', intern: 'no', wir: 'yes' },
];

const StatusIcon = ({ status, highlight }: { status: Status; highlight?: boolean }) => {
  if (status === 'yes') {
    return <Check className={`h-5 w-5 ${highlight ? 'text-accent' : 'text-emerald-500'}`} />;
  }
  if (status === 'partial') {
    return <AlertTriangle className="h-5 w-5 text-amber-500" />;
  }
  return <X className="h-5 w-5 text-muted-foreground/50" />;
};

const HomeComparison: React.FC = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="dark-section relative py-24 md:py-32 overflow-hidden noise"
    >
      {/* Deep space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E] via-[#0F0F1A] to-[#0A0A0F]" />
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-10" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Overline */}
        <p
          className={`text-xs font-medium uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {language === 'de' ? 'Unser USP' : 'Our USP'}
        </p>

        <h2
          className={`font-display text-3xl md:text-4xl lg:text-5xl mb-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {language === 'de' ? 'Warum wir.' : 'Why us.'}
        </h2>

        <p
          className={`text-lg text-muted-foreground mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {language === 'de'
            ? 'Nicht einer der vier Mechanismen allein. Die Kombination.'
            : 'Not one mechanism alone. The combination.'}
        </p>

        {/* Formula Badge */}
        <div
          className={`inline-block px-5 py-2.5 rounded-full border-2 border-accent/40 bg-accent/10 text-accent text-sm font-bold tracking-wider mb-10 shadow-brutal-sm transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          EXPERTISE × SPEED = IMPACT
        </div>

        {/* Comparison Table */}
        <div
          className={`w-full overflow-x-auto rounded-xl border-2 border-border/50 bg-card transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <Table>
            <TableHeader>
              <TableRow className="border-border/30 bg-white/5">
                <TableHead className="min-w-[180px]" />
                <TableHead className="text-center text-muted-foreground font-medium">McKinsey</TableHead>
                <TableHead className="text-center text-muted-foreground font-medium">Freelancer</TableHead>
                <TableHead className="text-center text-muted-foreground font-medium">
                  {language === 'de' ? 'Intern' : 'Internal'}
                </TableHead>
                <TableHead className="text-center font-bold text-accent border-l-2 border-accent/30 bg-accent/10">
                  {language === 'de' ? 'Wir' : 'Us'}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i} className="border-border/20">
                  <TableCell className="font-medium text-foreground text-sm">
                    {language === 'de' ? row.labelDe : row.labelEn}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center"><StatusIcon status={row.mckinsey} /></div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center"><StatusIcon status={row.freelancer} /></div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center"><StatusIcon status={row.intern} /></div>
                  </TableCell>
                  <TableCell className="text-center border-l-2 border-accent/30 bg-accent/5">
                    <div className="flex justify-center"><StatusIcon status={row.wir} highlight /></div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default HomeComparison;
