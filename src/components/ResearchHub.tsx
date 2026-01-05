import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScalingXCaseStudies from '@/components/ScalingXCaseStudies';
import { 
  FileText, Download, ExternalLink, BookOpen, 
  BarChart3, Brain, Layers, Settings, ChevronRight,
  Clock, Users, Star
} from 'lucide-react';

interface ResearchPaper {
  id: string;
  title: string;
  titleDe: string;
  shortTitle: string;
  wordCount: string;
  summary: string;
  summaryDe: string;
  keyFindings: string[];
  keyFindingsDe: string[];
  methodology: string[];
  version: string;
  lastUpdated: string;
  citations: number;
  downloads: number;
  icon: React.ReactNode;
}

const researchPapers: ResearchPaper[] = [
  {
    id: 'architecture',
    title: 'Scaling Architecture v4.5.3',
    titleDe: 'Scaling Architektur v4.5.3',
    shortTitle: 'Architecture',
    wordCount: '35,000',
    summary: 'The complete architectural framework for AI-Native scaling. Defines the 4 Capabilities (C₁-C₄), 8 Dimensions Grid, and 5 Operating System dimensions that form the foundation of superlinear growth.',
    summaryDe: 'Das vollständige Architektur-Framework für AI-Native Scaling. Definiert die 4 Capabilities (C₁-C₄), das 8-Dimensionen-Grid und die 5 Operating System Dimensionen, die die Grundlage für superlineares Wachstum bilden.',
    keyFindings: [
      'Companies with θ_index > 0.7 reach €100M ARR 4-10x faster',
      'Coordination cost reduction from O(n²) to O(n log n) enables 10x team efficiency',
      '4 distinct capability levels determine scaling trajectory',
      'AI-Native operating systems enable superlinear growth patterns'
    ],
    keyFindingsDe: [
      'Unternehmen mit θ_index > 0.7 erreichen €100M ARR 4-10x schneller',
      'Koordinationskostenreduktion von O(n²) zu O(n log n) ermöglicht 10x Team-Effizienz',
      '4 verschiedene Capability-Levels bestimmen die Scaling-Trajektorie',
      'AI-Native Operating Systems ermöglichen superlineare Wachstumsmuster'
    ],
    methodology: ['Empirical study of n=22 companies', 'Statistical validation (R²=0.76)', 'Longitudinal analysis 2020-2024'],
    version: '4.5.3',
    lastUpdated: 'December 2024',
    citations: 47,
    downloads: 2341,
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: 'anst',
    title: 'AI-Native Scaling Theory (ANST)',
    titleDe: 'AI-Native Scaling Theory (ANST)',
    shortTitle: 'ANST',
    wordCount: '50,000',
    summary: 'Comprehensive theoretical foundation explaining why AI-Native companies achieve superlinear scaling. Introduces the θ_index metric and validates it against real-world company performance.',
    summaryDe: 'Umfassende theoretische Grundlage, die erklärt, warum AI-Native Unternehmen superlineares Scaling erreichen. Führt die θ_index Metrik ein und validiert sie gegen reale Unternehmensleistung.',
    keyFindings: [
      'θ_index strongly predicts scaling velocity (r=0.89, p<0.001)',
      'AI augmentation shifts growth from linear to superlinear',
      '3 distinct scaling phases: Foundation, Acceleration, Optimization',
      'Network effects compound faster with AI-Native architecture'
    ],
    keyFindingsDe: [
      'θ_index sagt Scaling-Geschwindigkeit stark voraus (r=0.89, p<0.001)',
      'AI-Augmentation verschiebt Wachstum von linear zu superlinear',
      '3 verschiedene Scaling-Phasen: Foundation, Acceleration, Optimization',
      'Netzwerkeffekte verstärken sich schneller mit AI-Native Architektur'
    ],
    methodology: ['Cross-sectional analysis', 'Regression modeling', 'Case study validation'],
    version: '3.2.1',
    lastUpdated: 'November 2024',
    citations: 89,
    downloads: 4567,
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: 'sst',
    title: 'Scaling Stack Theory (SST)',
    titleDe: 'Scaling Stack Theory (SST)',
    shortTitle: 'SST',
    wordCount: '45,000',
    summary: 'Framework for building scalable technology and organizational stacks. Details how AI-Native companies structure their tech, data, and team architectures for maximum velocity.',
    summaryDe: 'Framework für den Aufbau skalierbarer Technologie- und Organisations-Stacks. Beschreibt, wie AI-Native Unternehmen ihre Tech-, Daten- und Team-Architekturen für maximale Velocity strukturieren.',
    keyFindings: [
      '7-layer scaling stack model enables systematic growth',
      'Data layer optimization drives 80% of AI-Native advantage',
      'Team topology patterns correlate with scaling success',
      'Infrastructure automation is prerequisite for Level 3+'
    ],
    keyFindingsDe: [
      '7-Layer Scaling Stack Modell ermöglicht systematisches Wachstum',
      'Daten-Layer-Optimierung treibt 80% des AI-Native Vorteils',
      'Team-Topologie-Muster korrelieren mit Scaling-Erfolg',
      'Infrastruktur-Automatisierung ist Voraussetzung für Level 3+'
    ],
    methodology: ['Technical architecture analysis', 'Team structure interviews', 'Performance benchmarking'],
    version: '2.8.0',
    lastUpdated: 'October 2024',
    citations: 56,
    downloads: 3234,
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 'amf',
    title: 'AI Maturity Framework (AMF)',
    titleDe: 'AI Maturity Framework (AMF)',
    shortTitle: 'AMF',
    wordCount: '40,000',
    summary: 'Diagnostic framework for assessing organizational AI maturity. Provides scoring methodology, benchmarks, and roadmaps for progression from Level 1 to Level 3.',
    summaryDe: 'Diagnostisches Framework zur Bewertung der organisatorischen AI-Reife. Bietet Scoring-Methodik, Benchmarks und Roadmaps für die Progression von Level 1 zu Level 3.',
    keyFindings: [
      '6 maturity dimensions with weighted scoring',
      'Clear progression pathways from each level',
      'Industry-specific benchmarks available',
      'Predictive validity for scaling outcomes'
    ],
    keyFindingsDe: [
      '6 Reifegrad-Dimensionen mit gewichteter Bewertung',
      'Klare Progressionspfade von jedem Level',
      'Branchenspezifische Benchmarks verfügbar',
      'Prädiktive Validität für Scaling-Ergebnisse'
    ],
    methodology: ['Expert panel development', 'Validation across 50+ companies', 'Iterative refinement'],
    version: '3.0.0',
    lastUpdated: 'December 2024',
    citations: 34,
    downloads: 1892,
    icon: <BarChart3 className="w-6 h-6" />
  }
];

const ResearchHub: React.FC = () => {
  const { language } = useLanguage();
  const [selectedPaper, setSelectedPaper] = useState<string | null>(null);

  const activePaper = researchPapers.find(p => p.id === selectedPaper);

  return (
    <section className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent font-mono">
            RESEARCH FOUNDATION
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            {language === 'de' ? 'Forschungs-Hub' : 'Research Hub'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Die wissenschaftliche Grundlage des AI-Native Scaling Frameworks. 170,000+ Wörter empirisch validierter Forschung.'
              : 'The scientific foundation of the AI-Native Scaling Framework. 170,000+ words of empirically validated research.'}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-4 glass text-center">
            <p className="text-2xl font-bold text-accent">170K+</p>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Wörter' : 'Words'}</p>
          </Card>
          <Card className="p-4 glass text-center">
            <p className="text-2xl font-bold text-accent">22</p>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Unternehmen analysiert' : 'Companies Analyzed'}</p>
          </Card>
          <Card className="p-4 glass text-center">
            <p className="text-2xl font-bold text-accent">226</p>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Zitierungen' : 'Citations'}</p>
          </Card>
          <Card className="p-4 glass text-center">
            <p className="text-2xl font-bold text-accent">12K+</p>
            <p className="text-sm text-muted-foreground">Downloads</p>
          </Card>
        </div>

        {/* Papers Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {researchPapers.map(paper => (
            <Card 
              key={paper.id}
              className={`p-6 glass border-border/50 hover:border-accent/50 transition-all cursor-pointer ${
                selectedPaper === paper.id ? 'border-accent ring-2 ring-accent/20' : ''
              }`}
              onClick={() => setSelectedPaper(selectedPaper === paper.id ? null : paper.id)}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground flex-shrink-0">
                  {paper.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-xl">
                      {language === 'de' ? paper.titleDe : paper.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">v{paper.version}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {language === 'de' ? paper.summaryDe : paper.summary}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {paper.wordCount} {language === 'de' ? 'Wörter' : 'words'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {paper.citations} citations
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {paper.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {paper.lastUpdated}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {selectedPaper === paper.id && (
                <div className="mt-6 pt-6 border-t border-border/50">
                  <Tabs defaultValue="findings">
                    <TabsList className="mb-4">
                      <TabsTrigger value="findings">
                        {language === 'de' ? 'Kernerkenntnisse' : 'Key Findings'}
                      </TabsTrigger>
                      <TabsTrigger value="methodology">
                        {language === 'de' ? 'Methodik' : 'Methodology'}
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="findings">
                      <ul className="space-y-2">
                        {(language === 'de' ? paper.keyFindingsDe : paper.keyFindings).map((finding, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="methodology">
                      <ul className="space-y-2">
                        {paper.methodology.map((method, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="flex gap-3 mt-6">
                    <Button className="bg-gradient-accent flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      {language === 'de' ? 'Paper herunterladen' : 'Download Paper'}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {language === 'de' ? 'Online lesen' : 'Read Online'}
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Executive Summary Section */}
        <Card className="p-8 glass border-accent/20 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
              {language === 'de' ? 'Executive Summary' : 'Executive Summary'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'de' 
                ? 'Die wichtigsten Erkenntnisse aus 170,000+ Wörtern Forschung'
                : 'The key insights from 170,000+ words of research'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">C₁-C₄</span>
              </div>
              <h3 className="font-bold mb-2">{language === 'de' ? '4 Capabilities' : '4 Capabilities'}</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'de' 
                  ? 'Strategy, Execution, Learning, Adaptive'
                  : 'Strategy, Execution, Learning, Adaptive'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">8D</span>
              </div>
              <h3 className="font-bold mb-2">{language === 'de' ? '8 Dimensionen' : '8 Dimensions'}</h3>
              <p className="text-sm text-muted-foreground">
                GTM, Product, Ops, Finance, Talent, Tech, Data, Culture
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">θ</span>
              </div>
              <h3 className="font-bold mb-2">θ_index</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'de' 
                  ? 'AI-Maturity Score mit r=0.89 Prädiktivität'
                  : 'AI-Maturity score with r=0.89 predictivity'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">L3</span>
              </div>
              <h3 className="font-bold mb-2">{language === 'de' ? '3 Levels' : '3 Levels'}</h3>
              <p className="text-sm text-muted-foreground">
                {language === 'de' 
                  ? 'Linear → Sublinear → Superlinear'
                  : 'Linear → Sublinear → Superlinear'}
              </p>
            </div>
          </div>
        </Card>

        {/* Case Studies Section */}
        <div id="cases" className="scroll-mt-24">
          <ScalingXCaseStudies />
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'de' ? 'Möchtest du die Forschung anwenden?' : 'Want to Apply the Research?'}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {language === 'de' 
              ? 'Buche einen Diagnose-Call, um deine θ_index zu berechnen und einen personalisierten Scaling-Plan zu erhalten.'
              : 'Book a diagnostic call to calculate your θ_index and get a personalized scaling plan.'}
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90">
              {language === 'de' ? 'Diagnose-Call buchen' : 'Book Diagnostic Call'}
            </Button>
            <Button size="lg" variant="outline">
              {language === 'de' ? 'Alle Papers herunterladen' : 'Download All Papers'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHub;
