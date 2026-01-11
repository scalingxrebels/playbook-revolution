import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cheatSheetCategories } from '@/data/solutionCheatSheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SolutionCheatSheet: React.FC = () => {
  const { language } = useLanguage();

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
            <TableHead className="font-bold text-foreground hidden lg:table-cell">
              {language === 'de' ? 'Typischer Käufer' : 'Typical Buyer'}
            </TableHead>
            <TableHead className="font-bold text-foreground hidden md:table-cell">
              {language === 'de' ? 'Zeitrahmen' : 'Timeline'}
            </TableHead>
            <TableHead className="font-bold text-foreground text-right">
              {language === 'de' ? 'Investition' : 'Investment'}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cheatSheetCategories.map((category) => {
            const Icon = category.icon;
            return (
              <TableRow 
                key={category.id}
                className="hover:bg-accent/5 transition-colors"
              >
                <TableCell className="font-semibold">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{language === 'de' ? category.titleDe : category.titleEn}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {language === 'de' ? category.whenToChooseDe : category.whenToChooseEn}
                </TableCell>
                <TableCell className="text-muted-foreground hidden lg:table-cell">
                  {language === 'de' ? category.typicalBuyerDe : category.typicalBuyerEn}
                </TableCell>
                <TableCell className="text-muted-foreground hidden md:table-cell">
                  {language === 'de' ? category.timelineDe : category.timelineEn}
                </TableCell>
                <TableCell className="text-right font-mono text-sm whitespace-nowrap">
                  {language === 'de' ? category.investmentDe : category.investmentEn}
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
