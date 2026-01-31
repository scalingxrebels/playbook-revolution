import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface CompanyData {
  name: string;
  founded: string;
  valuation: string;
  valuationNum: number;
  revenue: string;
  revenueNum: number;
  growth: string;
  thetaIndex: number;
  color: string;
  darkColor?: string;
  dataSource: string;
}

const companies: CompanyData[] = [
  { name: 'OpenAI', founded: '2015', valuation: '$80B+', valuationNum: 80, revenue: '$3.4B', revenueNum: 3400, growth: '42.5x/1y', thetaIndex: 0.95, color: '#10B981', dataSource: 'Public data' },
  { name: 'Cursor', founded: '2022', valuation: '$400M', valuationNum: 0.4, revenue: '$100M', revenueNum: 100, growth: '40x/2y', thetaIndex: 0.90, color: '#3B82F6', dataSource: 'AMF v4.1, TechCrunch' },
  { name: 'Stripe', founded: '2010', valuation: '$95B', valuationNum: 95, revenue: '$14B', revenueNum: 14000, growth: '95x/13y', thetaIndex: 0.90, color: '#6366F1', dataSource: 'Public data' },
  { name: 'Midjourney', founded: '2021', valuation: 'N/A', valuationNum: 0, revenue: '$492M', revenueNum: 492, growth: '10x/3y', thetaIndex: 0.88, color: '#8B5CF6', dataSource: 'ANST v4.5.3' },
  { name: 'Figma', founded: '2012', valuation: '$20B', valuationNum: 20, revenue: '$425M', revenueNum: 425, growth: '20x/11y', thetaIndex: 0.87, color: '#F97316', dataSource: 'Public data' },
  { name: 'Perplexity', founded: '2022', valuation: '$9B', valuationNum: 9, revenue: '$200M+', revenueNum: 200, growth: '18x/2y', thetaIndex: 0.85, color: '#14B8A6', dataSource: 'AMF v4.1' },
  { name: 'Notion', founded: '2016', valuation: '$10B', valuationNum: 10, revenue: '$100M+', revenueNum: 100, growth: '10x/8y', thetaIndex: 0.85, color: '#171717', darkColor: '#E5E5E5', dataSource: 'Public data' },
];

type SortKey = 'name' | 'founded' | 'valuationNum' | 'revenueNum' | 'thetaIndex';

const CaseStudyComparisonTable = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [sortKey, setSortKey] = useState<SortKey>('thetaIndex');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');

  // Helper to get theme-aware color
  const getCompanyColor = (company: CompanyData) => 
    (theme === 'dark' && company.darkColor) ? company.darkColor : company.color;

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  const sortedCompanies = [...companies].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    return sortDir === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number);
  });

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return <ArrowUpDown className="h-4 w-4 ml-1 opacity-50" />;
    return sortDir === 'asc' ? <ArrowUp className="h-4 w-4 ml-1" /> : <ArrowDown className="h-4 w-4 ml-1" />;
  };

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <Table>
        <TableHeader>
          <TableRow className="border-border/50 bg-muted/30">
            <TableHead>
              <Button variant="ghost" size="sm" onClick={() => handleSort('name')} className="flex items-center -ml-3">
                {language === 'en' ? 'Company' : 'Unternehmen'}
                <SortIcon column="name" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" onClick={() => handleSort('founded')} className="flex items-center -ml-3">
                {language === 'en' ? 'Founded' : 'Gegründet'}
                <SortIcon column="founded" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" onClick={() => handleSort('valuationNum')} className="flex items-center -ml-3">
                {language === 'en' ? 'Valuation' : 'Bewertung'}
                <SortIcon column="valuationNum" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" onClick={() => handleSort('revenueNum')} className="flex items-center -ml-3">
                Revenue
                <SortIcon column="revenueNum" />
              </Button>
            </TableHead>
            <TableHead>Growth</TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" onClick={() => handleSort('thetaIndex')} className="flex items-center -ml-3">
                θ_index
                <SortIcon column="thetaIndex" />
              </Button>
            </TableHead>
            <TableHead className="text-xs text-muted-foreground">Source</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedCompanies.map((company) => (
            <TableRow key={company.name} className="border-border/30 hover:bg-primary/5 transition-colors duration-200">
              <TableCell className="font-semibold">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: getCompanyColor(company) }}
                  />
                  {company.name}
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{company.founded}</TableCell>
              <TableCell className="font-medium">{company.valuation}</TableCell>
              <TableCell className="font-medium">{company.revenue}</TableCell>
              <TableCell>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {company.growth}
                </span>
              </TableCell>
              <TableCell>
                <span 
                  className="font-bold"
                  style={{ color: getCompanyColor(company) }}
                >
                  {company.thetaIndex}
                </span>
              </TableCell>
              <TableCell className="text-xs text-muted-foreground">{company.dataSource}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CaseStudyComparisonTable;
