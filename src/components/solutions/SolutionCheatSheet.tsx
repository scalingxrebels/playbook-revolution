import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { solutionCategories } from '@/data/solutions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight } from 'lucide-react';

const SolutionCheatSheet: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="bg-card/80 backdrop-blur-sm border-2 border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="font-bold text-foreground">
              {language === 'de' ? 'Kategorie' : 'Category'}
            </TableHead>
            <TableHead className="font-bold text-foreground">
              {language === 'de' ? 'Wann wählen?' : 'When to Choose'}
            </TableHead>
            <TableHead className="font-bold text-foreground hidden md:table-cell">
              {language === 'de' ? 'Typischer Käufer' : 'Typical Buyer'}
            </TableHead>
            <TableHead className="font-bold text-foreground text-right">
              {language === 'de' ? 'Investition' : 'Investment'}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {solutionCategories.map((category) => {
            const Icon = category.icon;
            return (
              <TableRow 
                key={category.id}
                className="cursor-pointer hover:bg-accent/5 transition-colors group"
                onClick={() => navigate(`/solutions/${category.id}`)}
              >
                <TableCell className="font-semibold">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <span>{language === 'de' ? category.titleDe : category.titleEn}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {language === 'de' ? category.whenToChooseDe : category.whenToChooseEn}
                </TableCell>
                <TableCell className="text-muted-foreground hidden md:table-cell">
                  {language === 'de' ? category.typicalBuyerDe : category.typicalBuyerEn}
                </TableCell>
                <TableCell className="text-right font-mono text-sm">
                  €{category.pricingMin === 0 ? '0' : `${category.pricingMin/1000}K`} - €{category.pricingMax/1000}K{category.pricingUnit}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default SolutionCheatSheet;
