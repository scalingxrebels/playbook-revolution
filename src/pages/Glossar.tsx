import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Glossar: React.FC = () => {
  const { language } = useLanguage();

  const glossaryEntries = [
    {
      technical: 'θ_index',
      replacement: 'AI Maturity Score',
      context: language === 'de' ? 'Messwerte, Metriken' : 'Metrics, Measurements',
    },
    {
      technical: 'θ_index 0.3',
      replacement: 'AI Maturity Score 30%',
      context: language === 'de' ? 'Konkrete Werte (0-1 → 0-100%)' : 'Concrete values (0-1 → 0-100%)',
    },
    {
      technical: 'C_min',
      replacement: language === 'de' ? '#1 Blocker / Größte Schwachstelle' : '#1 Blocker / Biggest Weakness',
      context: language === 'de' ? 'Engpass-Diagnose' : 'Bottleneck Diagnosis',
    },
    {
      technical: 'C₁',
      replacement: 'Strategy',
      context: language === 'de' ? 'Capability-Bereich' : 'Capability Area',
    },
    {
      technical: 'C₂',
      replacement: 'Setup',
      context: language === 'de' ? 'Capability-Bereich' : 'Capability Area',
    },
    {
      technical: 'C₃',
      replacement: 'Execution',
      context: language === 'de' ? 'Capability-Bereich' : 'Capability Area',
    },
    {
      technical: 'C₄',
      replacement: 'Operationalization',
      context: language === 'de' ? 'Capability-Bereich' : 'Capability Area',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container max-w-4xl mx-auto px-4 py-24">
        <h1 className="font-display text-4xl md:text-5xl italic mb-4">
          {language === 'de' ? 'Glossar' : 'Glossary'}
        </h1>
        
        <p className="text-muted-foreground mb-8">
          {language === 'de' 
            ? 'Diese Tabelle dokumentiert die Übersetzung von technischen Fachbegriffen in CEO-freundliche Sprache, die wir in unseren Solutions und Landing Pages verwenden.'
            : 'This table documents the translation of technical terms into CEO-friendly language that we use throughout our Solutions and Landing Pages.'}
        </p>

        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">
                  {language === 'de' ? 'Technischer Begriff' : 'Technical Term'}
                </TableHead>
                <TableHead className="font-bold">
                  {language === 'de' ? 'CEO-freundlicher Ersatz' : 'CEO-friendly Replacement'}
                </TableHead>
                <TableHead className="font-bold">
                  {language === 'de' ? 'Kontext' : 'Context'}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {glossaryEntries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-sm">{entry.technical}</TableCell>
                  <TableCell className="font-medium text-primary">{entry.replacement}</TableCell>
                  <TableCell className="text-muted-foreground">{entry.context}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Glossar;
