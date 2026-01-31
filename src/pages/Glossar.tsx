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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Target, Settings, Zap, BarChart3, AlertTriangle } from 'lucide-react';

const Glossar: React.FC = () => {
  const { language } = useLanguage();

  const capabilities = [
    {
      icon: Target,
      name: 'Strategy',
      label: language === 'de' ? 'Wo spielen, Wie gewinnen' : 'Where to play, How to win',
      description: language === 'de' 
        ? 'Klares ICP, differenzierte Positionierung, AI-native Strategie'
        : 'Clear ICP, differentiated positioning, AI-native strategy',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
    },
    {
      icon: Settings,
      name: 'Setup',
      label: language === 'de' ? 'Fundament bauen' : 'Build the foundation',
      description: language === 'de'
        ? 'Org-Struktur, AI-gestützte Systeme, automatisierte Prozesse'
        : 'Org structure, AI-powered systems, automated processes',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: Zap,
      name: 'Execution',
      label: language === 'de' ? 'Ergebnisse liefern' : 'Deliver results',
      description: language === 'de'
        ? 'GTM, Product, Customer Success – alles AI-gestützt'
        : 'GTM, Product, Customer Success – all AI-powered',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
    },
    {
      icon: BarChart3,
      name: 'Operationalization',
      label: language === 'de' ? 'Skalieren' : 'Scale',
      description: language === 'de'
        ? 'AI-Dashboards, automatisierte Playbooks, AI-gesteuerte Automation'
        : 'AI dashboards, automated playbooks, AI-driven automation',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
    },
  ];

  const metrics = [
    { value: '10-30x', label: language === 'de' ? 'schnellere Skalierung' : 'faster scaling' },
    { value: '8-18', label: language === 'de' ? 'Monate bis €100M ARR' : 'months to €100M ARR' },
    { value: '2-5x', label: language === 'de' ? 'ARR pro Mitarbeiter' : 'ARR per employee' },
  ];

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
        
        <p className="text-muted-foreground mb-12">
          {language === 'de' 
            ? 'Diese Seite erklärt die Grundidee des AI-Native Scaling und dokumentiert die Übersetzung technischer Begriffe in CEO-freundliche Sprache.'
            : 'This page explains the core idea of AI-Native Scaling and documents the translation of technical terms into CEO-friendly language.'}
        </p>

        {/* AI-Native Scaling Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            {language === 'de' ? 'Die Grundidee: AI-Native Scaling' : 'The Core Idea: AI-Native Scaling'}
          </h2>

          {/* Problem Statement */}
          <div className="mb-8 p-6 bg-muted/50 rounded-lg border border-border">
            <h3 className="font-semibold text-lg mb-3">
              {language === 'de' ? 'Das Problem' : 'The Problem'}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {language === 'de' ? 'Traditionelles Skalieren = Linear (Revenue ≈ People)' : 'Traditional scaling = Linear (Revenue ≈ People)'}</li>
              <li>• {language === 'de' ? '8-12 Jahre bis €100M ARR' : '8-12 years to €100M ARR'}</li>
              <li>• {language === 'de' ? '60-80% der Unternehmen stagnieren bei €10-30M ARR' : '60-80% of companies stagnate at €10-30M ARR'}</li>
            </ul>
          </div>

          {/* Solution - 4 Capabilities Grid */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">
              {language === 'de' ? 'Die Lösung: 4 Kern-Capabilities' : 'The Solution: 4 Core Capabilities'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <Card key={cap.name} className={`${cap.bgColor} ${cap.borderColor} border`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <cap.icon className={`h-5 w-5 ${cap.color}`} />
                      <span className={cap.color}>{cap.name}</span>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{cap.label}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{cap.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Principle Alert */}
          <Alert className="mb-8 border-amber-500/50 bg-amber-500/10">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertDescription className="ml-2">
              <span className="font-semibold">
                {language === 'de' ? 'Kernprinzip: ' : 'Core Principle: '}
              </span>
              {language === 'de'
                ? '"Ist eine Capability schwach, begrenzt sie dein gesamtes Skalierungspotenzial—egal wie stark die anderen sind."'
                : '"If one capability is weak, it limits your entire scaling potential—no matter how strong the others are."'}
            </AlertDescription>
          </Alert>

          {/* Results Metrics */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">
              {language === 'de' ? 'Das Ergebnis' : 'The Result'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {metrics.map((metric, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-base">
                  <span className="font-bold text-primary mr-2">{metric.value}</span>
                  <span className="text-muted-foreground">{metric.label}</span>
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary Table Section */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            {language === 'de' ? 'Begriffe & Übersetzungen' : 'Terms & Translations'}
          </h2>
          <p className="text-muted-foreground mb-6">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Glossar;
