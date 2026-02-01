import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Button } from '@/components/ui/button';
import { 
  Target, Settings, Zap, BarChart3, AlertTriangle, Sparkles, ArrowLeft,
  TrendingUp, Layers, Clock, DollarSign, Users, Database, Shield, Briefcase,
  Calculator, FlaskConical, Gauge, ShoppingCart, Package, HeartHandshake, Cog, Landmark, UserCog, Server, Scale
} from 'lucide-react';

const Glossar: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // 4 Core Capabilities
  const capabilities = [
    {
      icon: Target,
      name: 'Strategy',
      symbol: 'C₁',
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
      symbol: 'C₂',
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
      symbol: 'C₃',
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
      symbol: 'C₄',
      label: language === 'de' ? 'Skalieren' : 'Scale',
      description: language === 'de'
        ? 'AI-Dashboards, automatisierte Playbooks, AI-gesteuerte Automation'
        : 'AI dashboards, automated playbooks, AI-driven automation',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
    },
  ];

  const aiMultiplier = {
    icon: Sparkles,
    name: 'AI as Multiplier',
    label: language === 'de' ? 'Der Verstärker' : 'The Force Multiplier',
    description: language === 'de'
      ? 'AI multipliziert die Wirkung aller 4 Capabilities – nicht additiv, sondern exponentiell'
      : 'AI multiplies the impact of all 4 capabilities – not additive, but exponential',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
  };

  // 8 Business Dimensions (D₁-D₈)
  const dimensions = [
    { id: 'D₁', name: 'GTM', icon: ShoppingCart, description: language === 'de' ? 'Sales, Marketing, Partnerships' : 'Sales, Marketing, Partnerships', metric: 'CAC, LTV/CAC, Growth Rate' },
    { id: 'D₂', name: 'Product', icon: Package, description: language === 'de' ? 'Development, Roadmap, AI Features' : 'Development, Roadmap, AI Features', metric: 'PMF, Retention' },
    { id: 'D₃', name: 'Customer Success', icon: HeartHandshake, description: language === 'de' ? 'Onboarding, Support, Retention' : 'Onboarding, Support, Retention', metric: 'NRR, Churn, Expansion' },
    { id: 'D₄', name: 'Operations', icon: Cog, description: language === 'de' ? 'Business Ops, Prozesse, Tools' : 'Business Ops, Processes, Tools', metric: language === 'de' ? 'Effizienz, Koordinationskosten' : 'Efficiency, Coordination Cost' },
    { id: 'D₅', name: 'Finance', icon: Landmark, description: language === 'de' ? 'FP&A, Reporting, Investor Relations' : 'FP&A, Reporting, Investor Relations', metric: 'Unit Economics, Burn Rate' },
    { id: 'D₆', name: 'Talent', icon: UserCog, description: language === 'de' ? 'Hiring, Culture, Performance' : 'Hiring, Culture, Performance', metric: language === 'de' ? 'Team-Qualität, Turnover' : 'Team Quality, Turnover' },
    { id: 'D₇', name: 'Data/Tech', icon: Server, description: language === 'de' ? 'Data Infrastructure, AI Tools' : 'Data Infrastructure, AI Tools', metric: 'AI Maturity, Tech Debt' },
    { id: 'D₈', name: 'Governance', icon: Scale, description: language === 'de' ? 'Board, Compliance, Risk' : 'Board, Compliance, Risk', metric: language === 'de' ? 'Board Confidence, Investor Readiness' : 'Board Confidence, Investor Readiness' },
  ];

  // 4 AI Maturity Levels
  const maturityLevels = [
    { level: 0, name: 'Traditional', score: '0-20%', timeToARR: '84 months', arrPerEmployee: '€150K', description: language === 'de' ? 'Keine AI (manuelle Workflows)' : 'No AI (manual workflows)' },
    { level: 1, name: 'AI-Powered', score: '20-50%', timeToARR: '48 months', arrPerEmployee: '€250K', description: language === 'de' ? 'AI als Tool (ChatGPT, Copilot)' : 'AI as tool (ChatGPT, Copilot)' },
    { level: 2, name: 'AI-Enabled', score: '50-80%', timeToARR: '24 months', arrPerEmployee: '€600K', description: language === 'de' ? 'AI als Capability (40-60% automatisiert)' : 'AI as capability (40-60% automated)' },
    { level: 3, name: 'AI-Native', score: '80-100%', timeToARR: '18 months', arrPerEmployee: '€1.2M', description: language === 'de' ? 'AI als Operating System (80-90% automatisiert)' : 'AI as operating system (80-90% automated)' },
  ];

  // 6 AI Maturity Dimensions
  const maturityDimensions = [
    { name: 'Strategy', weight: '20%', description: language === 'de' ? 'Klare AI-Strategie, AI im Business Model, ROI-Messung' : 'Clear AI strategy, AI in business model, ROI measurement' },
    { name: 'Architecture', weight: '15%', description: language === 'de' ? 'Data Warehouse, AI-Infrastruktur, AI-ready Tech Stack' : 'Data warehouse, AI infrastructure, AI-ready tech stack' },
    { name: 'Workflow', weight: '25%', description: language === 'de' ? 'AI-powered Workflows, AI-Playbooks, AI in Daily Ops' : 'AI-powered workflows, AI playbooks, AI in daily ops' },
    { name: 'Data', weight: '15%', description: language === 'de' ? 'Saubere Daten, Data Pipelines, Data-driven Decisions' : 'Clean data, data pipelines, data-driven decisions' },
    { name: 'Talent', weight: '15%', description: language === 'de' ? 'AI-Skills im Team, AI-first Hiring, AI-Training' : 'AI skills in team, AI-first hiring, AI training' },
    { name: 'Adoption', weight: '10%', description: language === 'de' ? 'Daily AI Usage, Adoption Tracking, AI-Kultur' : 'Daily AI usage, adoption tracking, AI culture' },
  ];

  // 3 Intervention Models
  const interventionModels = [
    { 
      name: language === 'de' ? 'Engpass-Auflösung' : 'Bottleneck Resolution',
      timeline: '8-12 weeks', 
      investment: '€80K-€180K',
      roi: '5-8x',
      target: 'Series A-C, €2M-€50M ARR',
      description: language === 'de' 
        ? '1 spezifischer Engpass (C₁-C₄ < 0.6), 1 konkretes Problem'
        : '1 specific bottleneck (C₁-C₄ < 0.6), 1 concrete problem',
      color: 'border-blue-500/30 bg-blue-500/10'
    },
    { 
      name: language === 'de' ? 'Stage Transition' : 'Stage Transition',
      timeline: '90 days', 
      investment: '€150K-€300K',
      roi: '8-12x',
      target: 'Series B-C, €10M-€100M ARR',
      description: language === 'de'
        ? 'Multiple Engpässe (2-3 Capabilities), Stage-Übergang'
        : 'Multiple bottlenecks (2-3 capabilities), stage transition',
      color: 'border-purple-500/30 bg-purple-500/10'
    },
    { 
      name: language === 'de' ? 'Level Transition' : 'Level Transition',
      timeline: '6-24 months', 
      investment: '€1.2M-€5M',
      roi: '10-17x',
      target: 'Series B-D, €20M-€200M ARR',
      description: language === 'de'
        ? 'Level-Übergang (Level 1→2 oder 2→3), Paradigmenwechsel'
        : 'Level transition (Level 1→2 or 2→3), paradigm shift',
      color: 'border-amber-500/30 bg-amber-500/10'
    },
  ];

  // Empirical Evidence
  const evidence = [
    { finding: language === 'de' ? 'AI Maturity sagt Skalierungsgeschwindigkeit voraus' : 'AI Maturity predicts scaling velocity', data: 'r=-0.89, p<0.001', source: 'ANST v4.5.3' },
    { finding: language === 'de' ? 'Engpässe begrenzen Skalierungserfolg' : 'Bottlenecks limit scaling success', data: 'r=-0.76, p<0.001', source: 'SST v4.5.1' },
    { finding: language === 'de' ? 'AI verstärkt alle Capabilities' : 'AI amplifies all capabilities', data: '+60-100%', source: 'AMF v4.5.1' },
    { finding: language === 'de' ? 'Level 3 skaliert 8.2x schneller als Level 0' : 'Level 3 scales 8.2x faster than Level 0', data: '18 vs 84 months', source: 'ANST v4.5.3' },
  ];

  // Extended glossary entries (25+)
  const glossaryEntries = [
    { technical: 'θ_index', replacement: 'AI Maturity Score', context: language === 'de' ? 'Messwerte, Metriken' : 'Metrics, Measurements' },
    { technical: 'θ_index 0.3', replacement: 'AI Maturity Score 30%', context: language === 'de' ? 'Konkrete Werte (0-1 → 0-100%)' : 'Concrete values (0-1 → 0-100%)' },
    { technical: 'C_min', replacement: language === 'de' ? '#1 Blocker / Größte Schwachstelle' : '#1 Blocker / Biggest Weakness', context: language === 'de' ? 'Engpass-Diagnose' : 'Bottleneck Diagnosis' },
    { technical: 'C₁', replacement: 'Strategy', context: language === 'de' ? 'Capability-Bereich' : 'Capability Area' },
    { technical: 'C₂', replacement: 'Setup', context: language === 'de' ? 'Capability-Bereich' : 'Capability Area' },
    { technical: 'C₃', replacement: 'Execution', context: language === 'de' ? 'Capability-Bereich' : 'Capability Area' },
    { technical: 'C₄', replacement: 'Operationalization', context: language === 'de' ? 'Capability-Bereich' : 'Capability Area' },
    { technical: 'D₁', replacement: 'GTM (Go-to-Market)', context: language === 'de' ? 'Business Dimension' : 'Business Dimension' },
    { technical: 'D₂', replacement: 'Product', context: language === 'de' ? 'Business Dimension' : 'Business Dimension' },
    { technical: 'D₃', replacement: 'Customer Success', context: language === 'de' ? 'Business Dimension' : 'Business Dimension' },
    { technical: 'D₄', replacement: 'Operations', context: language === 'de' ? 'Business Dimension' : 'Business Dimension' },
    { technical: 'D₅', replacement: 'Finance', context: language === 'de' ? 'Business Dimension' : 'Business Dimension' },
    { technical: 'D₆', replacement: 'Talent', context: language === 'de' ? 'Business Dimension' : 'Business Dimension' },
    { technical: 'D₇', replacement: 'Data/Tech', context: language === 'de' ? 'Business Dimension' : 'Business Dimension' },
    { technical: 'D₈', replacement: 'Governance', context: language === 'de' ? 'Business Dimension' : 'Business Dimension' },
    { technical: 'S', replacement: 'Scaling Success', context: language === 'de' ? 'Ergebnis-Metrik' : 'Outcome Metric' },
    { technical: 'min(C₁, C₂, C₃, C₄)', replacement: language === 'de' ? 'Schwächste Capability' : 'Weakest Capability', context: language === 'de' ? 'Engpass-Prinzip' : 'Bottleneck Principle' },
    { technical: 'Level 0', replacement: language === 'de' ? 'Traditional (0-20% AI Maturity)' : 'Traditional (0-20% AI Maturity)', context: 'AI Maturity Level' },
    { technical: 'Level 1', replacement: language === 'de' ? 'AI-Powered (20-50% AI Maturity)' : 'AI-Powered (20-50% AI Maturity)', context: 'AI Maturity Level' },
    { technical: 'Level 2', replacement: language === 'de' ? 'AI-Enabled (50-80% AI Maturity)' : 'AI-Enabled (50-80% AI Maturity)', context: 'AI Maturity Level' },
    { technical: 'Level 3', replacement: language === 'de' ? 'AI-Native (80-100% AI Maturity)' : 'AI-Native (80-100% AI Maturity)', context: 'AI Maturity Level' },
    { technical: 'Model 1', replacement: language === 'de' ? 'Engpass-Auflösung (8-12 Wochen)' : 'Bottleneck Resolution (8-12 weeks)', context: language === 'de' ? 'Interventionsmodell' : 'Intervention Model' },
    { technical: 'Model 2', replacement: 'Stage Transition (90 days)', context: language === 'de' ? 'Interventionsmodell' : 'Intervention Model' },
    { technical: 'Model 3', replacement: 'Level Transition (6-24 months)', context: language === 'de' ? 'Interventionsmodell' : 'Intervention Model' },
    { technical: 'AMF', replacement: 'AI Maturity Framework', context: language === 'de' ? 'Research-Dokument' : 'Research Document' },
    { technical: 'ANST', replacement: 'AI-Native Scaling Theory', context: language === 'de' ? 'Research-Dokument' : 'Research Document' },
    { technical: 'SST', replacement: 'Scaling Stack Theory', context: language === 'de' ? 'Research-Dokument' : 'Research Document' },
    { technical: 'META', replacement: 'Unified Formula System', context: language === 'de' ? 'Research-Dokument' : 'Research Document' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container max-w-5xl mx-auto px-4 py-24">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === 'de' ? 'Zurück' : 'Back'}
        </Button>

        <h1 className="font-display text-4xl md:text-5xl italic mb-4">
          {language === 'de' ? 'Glossar' : 'Glossary'}
        </h1>
        
        <p className="text-muted-foreground mb-12 text-lg">
          {language === 'de' 
            ? 'Diese Seite erklärt das vollständige AI-Native Scaling Framework und dokumentiert die Übersetzung technischer Begriffe in CEO-freundliche Sprache.'
            : 'This page explains the complete AI-Native Scaling Framework and documents the translation of technical terms into CEO-friendly language.'}
        </p>

        {/* SECTION 1: THE CORE IDEA */}
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
              <li>• {language === 'de' ? 'Koordinationskosten explodieren (O(n²))' : 'Coordination costs explode (O(n²))'}</li>
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
                      <span className={cap.color}>{cap.symbol}: {cap.name}</span>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{cap.label}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{cap.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI as Multiplier - Full Width */}
            <Card className={`${aiMultiplier.bgColor} ${aiMultiplier.borderColor} border mt-4`}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-center gap-2 text-xl">
                  <aiMultiplier.icon className={`h-6 w-6 ${aiMultiplier.color}`} />
                  <span className={aiMultiplier.color}>{aiMultiplier.name}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground text-center">{aiMultiplier.label}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center">{aiMultiplier.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Results Comparison Table */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">
              {language === 'de' ? 'Das Ergebnis' : 'The Result'}
            </h3>
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-bold">{language === 'de' ? 'Metrik' : 'Metric'}</TableHead>
                    <TableHead className="font-bold">Traditional</TableHead>
                    <TableHead className="font-bold">AI-Native</TableHead>
                    <TableHead className="font-bold">{language === 'de' ? 'Verbesserung' : 'Improvement'}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">{language === 'de' ? 'Zeit bis €100M ARR' : 'Time to €100M ARR'}</TableCell>
                    <TableCell className="text-muted-foreground">8-12 years</TableCell>
                    <TableCell className="text-primary font-medium">18-24 months</TableCell>
                    <TableCell><Badge variant="secondary" className="bg-green-500/20 text-green-400">8.2x faster</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ARR/Employee</TableCell>
                    <TableCell className="text-muted-foreground">€150K-€200K</TableCell>
                    <TableCell className="text-primary font-medium">€750K-€5M</TableCell>
                    <TableCell><Badge variant="secondary" className="bg-green-500/20 text-green-400">5-30x higher</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{language === 'de' ? 'Koordinationskosten' : 'Coordination Cost'}</TableCell>
                    <TableCell className="text-muted-foreground">O(n²)</TableCell>
                    <TableCell className="text-primary font-medium">O(n)</TableCell>
                    <TableCell><Badge variant="secondary" className="bg-green-500/20 text-green-400">-90%</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Source: n=22 AI-native companies (2021-2025), r=-0.89, p&lt;0.001
            </p>
          </div>
        </section>

        {/* SECTION 2: 8 BUSINESS DIMENSIONS */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            {language === 'de' ? 'Die 8 Business Dimensionen (D₁-D₈)' : 'The 8 Business Dimensions (D₁-D₈)'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'de' 
              ? '4 Capabilities × 8 Dimensionen = 32 Capability-Bereiche für die vollständige Diagnose.'
              : '4 Capabilities × 8 Dimensions = 32 capability areas for complete diagnosis.'}
          </p>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold w-16">ID</TableHead>
                  <TableHead className="font-bold">{language === 'de' ? 'Dimension' : 'Dimension'}</TableHead>
                  <TableHead className="font-bold">{language === 'de' ? 'Beschreibung' : 'Description'}</TableHead>
                  <TableHead className="font-bold">{language === 'de' ? 'Key Metrics' : 'Key Metrics'}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dimensions.map((dim) => (
                  <TableRow key={dim.id}>
                    <TableCell className="font-mono text-primary font-bold">{dim.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <dim.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{dim.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{dim.description}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{dim.metric}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* SECTION 3: AI MATURITY SCORE */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            AI Maturity Score (θ)
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'de' 
              ? 'Misst, wie tief AI in deinem Business verankert ist (0-100%). Nicht "wie viele AI-Tools?", sondern "wie tief in Workflows, Systemen und Kultur?"'
              : 'Measures how deeply AI is embedded in your business (0-100%). Not "how many AI tools?" but "how deeply in workflows, systems, and culture?"'}
          </p>

          {/* Maturity Levels Table */}
          <h3 className="font-semibold text-lg mb-3">
            {language === 'de' ? 'Die 4 AI Maturity Levels' : 'The 4 AI Maturity Levels'}
          </h3>
          <div className="border rounded-lg overflow-hidden mb-8">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold">Level</TableHead>
                  <TableHead className="font-bold">Score</TableHead>
                  <TableHead className="font-bold">{language === 'de' ? 'Beschreibung' : 'Description'}</TableHead>
                  <TableHead className="font-bold">{language === 'de' ? 'Zeit bis €100M' : 'Time to €100M'}</TableHead>
                  <TableHead className="font-bold">ARR/Employee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {maturityLevels.map((level) => (
                  <TableRow key={level.level}>
                    <TableCell>
                      <Badge variant={level.level === 3 ? 'default' : 'outline'} className={level.level === 3 ? 'bg-primary' : ''}>
                        Level {level.level}: {level.name}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-primary">{level.score}</TableCell>
                    <TableCell className="text-muted-foreground">{level.description}</TableCell>
                    <TableCell className="font-medium">{level.timeToARR}</TableCell>
                    <TableCell className="font-medium">{level.arrPerEmployee}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* 6 AI Maturity Dimensions */}
          <h3 className="font-semibold text-lg mb-3">
            {language === 'de' ? 'Die 6 AI Maturity Dimensionen' : 'The 6 AI Maturity Dimensions'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {maturityDimensions.map((dim) => (
              <Card key={dim.name} className="border border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{dim.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">{dim.weight}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dim.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 4: BOTTLENECK PRINCIPLE */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            {language === 'de' ? 'Das Engpass-Prinzip' : 'The Bottleneck Principle'}
          </h2>

          <Alert className="mb-6 border-amber-500/50 bg-amber-500/10">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <AlertDescription className="ml-2">
              <span className="font-semibold">
                {language === 'de' ? 'Kernprinzip: ' : 'Core Principle: '}
              </span>
              {language === 'de'
                ? '"Deine schwächste Capability begrenzt dein gesamtes Skalierungspotenzial—egal wie stark die anderen sind."'
                : '"Your weakest capability limits your entire scaling potential—no matter how strong the others are."'}
            </AlertDescription>
          </Alert>

          {/* Formula Box */}
          <div className="mb-6 p-6 bg-muted/50 rounded-lg border border-primary/30">
            <h3 className="font-semibold text-lg mb-3">{language === 'de' ? 'Die Formel' : 'The Formula'}</h3>
            <div className="font-mono text-xl text-center p-4 bg-background/50 rounded-lg">
              <span className="text-muted-foreground">Scaling Success</span>
              <span className="text-white/50 mx-2">=</span>
              <span className="text-amber-400">min</span>
              <span className="text-white/50">(</span>
              <span className="text-purple-400">C₁</span>
              <span className="text-white/50">, </span>
              <span className="text-blue-400">C₂</span>
              <span className="text-white/50">, </span>
              <span className="text-green-400">C₃</span>
              <span className="text-white/50">, </span>
              <span className="text-amber-400">C₄</span>
              <span className="text-white/50">)</span>
              <span className="text-white/50 mx-2">×</span>
              <span className="text-cyan-400">AI Maturity Score</span>
            </div>
          </div>

          {/* Example Box */}
          <div className="mb-6 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="font-semibold text-lg mb-3">{language === 'de' ? 'Beispiel' : 'Example'}</h3>
            <div className="font-mono text-sm space-y-1 bg-background/50 p-4 rounded-lg">
              <p className="text-muted-foreground">Company A:</p>
              <p>├── <span className="text-purple-400">Strategy (C₁):</span> 0.8 <span className="text-muted-foreground">(strong)</span></p>
              <p>├── <span className="text-blue-400">Setup (C₂):</span> <span className="text-red-400 font-bold">0.4</span> ← <span className="text-red-400">#1 BLOCKER</span></p>
              <p>├── <span className="text-green-400">Execution (C₃):</span> 0.7 <span className="text-muted-foreground">(good)</span></p>
              <p>├── <span className="text-amber-400">Operationalization (C₄):</span> 0.6 <span className="text-muted-foreground">(moderate)</span></p>
              <p>├── <span className="text-cyan-400">AI Maturity Score:</span> 0.5</p>
              <p>└── <span className="text-primary font-bold">Scaling Success:</span> min(0.8, 0.4, 0.7, 0.6) × 0.5 = <span className="text-primary">0.4 × 0.5 = 0.20</span></p>
              <p className="mt-4 pt-4 border-t border-border text-green-400">
                → {language === 'de' 
                  ? 'C₂ von 0.4 auf 0.75 zu verbessern = +88% Scaling Success'
                  : 'Fixing C₂ from 0.4 to 0.75 = +88% Scaling Success'}
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold">{language === 'de' ? 'Ansatz' : 'Approach'}</TableHead>
                  <TableHead className="font-bold">Impact</TableHead>
                  <TableHead className="font-bold">Timeline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-muted-foreground">{language === 'de' ? 'Alles um 10% verbessern' : 'Improve all capabilities by 10%'}</TableCell>
                  <TableCell>+10%</TableCell>
                  <TableCell>12-18 months</TableCell>
                </TableRow>
                <TableRow className="bg-green-500/5">
                  <TableCell className="font-medium text-green-400">{language === 'de' ? '#1 Blocker beheben (C₂: 0.4 → 0.75)' : 'Fix #1 blocker (C₂: 0.4 → 0.75)'}</TableCell>
                  <TableCell className="font-bold text-green-400">+88%</TableCell>
                  <TableCell className="font-bold text-green-400">8-12 weeks</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* SECTION 5: 3 INTERVENTION MODELS */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            {language === 'de' ? 'Die 3 Interventionsmodelle' : 'The 3 Intervention Models'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'de' 
              ? 'Je nach Ausgangslage und Zielsetzung unterscheiden sich Investment, Timeline und erwarteter ROI.'
              : 'Depending on starting point and goals, investment, timeline, and expected ROI differ.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {interventionModels.map((model, index) => (
              <Card key={model.name} className={`border ${model.color}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Model {index + 1}</Badge>
                    <Badge className="bg-primary/20 text-primary border-0">{model.timeline}</Badge>
                  </div>
                  <CardTitle className="text-lg">{model.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Investment:</span>
                    <span className="font-medium">{model.investment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">ROI:</span>
                    <span className="font-bold text-green-400">{model.roi}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground">Target: {model.target}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 6: EMPIRICAL EVIDENCE */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            {language === 'de' ? 'Empirische Evidenz' : 'Empirical Evidence'}
          </h2>
          
          <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-primary" />
              <span className="font-medium">n=22</span>
              <span className="text-muted-foreground text-sm">AI-native Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="font-medium">r=-0.89</span>
              <span className="text-muted-foreground text-sm">correlation</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-primary" />
              <span className="font-medium">p&lt;0.001</span>
              <span className="text-muted-foreground text-sm">significance</span>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold">Finding</TableHead>
                  <TableHead className="font-bold">Data</TableHead>
                  <TableHead className="font-bold">Source</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {evidence.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.finding}</TableCell>
                    <TableCell className="font-mono text-primary">{item.data}</TableCell>
                    <TableCell className="text-muted-foreground">{item.source}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* SECTION 7: TERMS & TRANSLATIONS */}
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
                <TableRow className="bg-muted/50">
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
