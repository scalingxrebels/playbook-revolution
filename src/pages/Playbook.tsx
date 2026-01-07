import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronRight, 
  Download, 
  BookOpen, 
  Target, 
  Zap, 
  TrendingUp, 
  Shield, 
  ArrowRight,
  Play,
  Pause,
  CheckCircle2,
  AlertTriangle,
  Users,
  Clock,
  BarChart3,
  Layers
} from 'lucide-react';

interface Chapter {
  id: string;
  number: number;
  titleDe: string;
  titleEn: string;
  icon: React.ElementType;
  color: string;
}

const chapters: Chapter[] = [
  { id: 'executive', number: 0, titleDe: 'Executive Summary', titleEn: 'Executive Summary', icon: BookOpen, color: 'from-primary to-primary/60' },
  { id: 'chapter1', number: 1, titleDe: 'Die Frage, die keiner stellt', titleEn: 'The Question Nobody Asks', icon: Target, color: 'from-amber-500 to-orange-500' },
  { id: 'chapter2', number: 2, titleDe: 'Warum Traditional Scaling nicht mehr funktioniert', titleEn: 'Why Traditional Scaling No Longer Works', icon: AlertTriangle, color: 'from-red-500 to-rose-500' },
  { id: 'chapter3', number: 3, titleDe: 'Das AI-Native Playbook', titleEn: 'The AI-Native Playbook', icon: Zap, color: 'from-emerald-500 to-teal-500' },
  { id: 'chapter4', number: 4, titleDe: 'Die 3 Interventionsmodelle', titleEn: 'The 3 Intervention Models', icon: Layers, color: 'from-blue-500 to-cyan-500' },
  { id: 'chapter5', number: 5, titleDe: '5 Case Studies + ROI', titleEn: '5 Case Studies + ROI', icon: TrendingUp, color: 'from-violet-500 to-purple-500' },
  { id: 'chapter6', number: 6, titleDe: 'Die 5 Hauptrisiken', titleEn: 'The 5 Main Risks', icon: Shield, color: 'from-slate-500 to-gray-500' },
];

const PlaybookPage: React.FC = () => {
  const { language } = useLanguage();
  const [activeChapter, setActiveChapter] = useState('executive');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const sections = chapters.map(ch => document.getElementById(ch.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveChapter(chapters[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToChapter = (chapterId: string) => {
    setIsScrolling(true);
    const element = document.getElementById(chapterId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {language === 'de' ? 'Version 3.0 • Januar 2026' : 'Version 3.0 • January 2026'}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                AI-Native Scaling
                <span className="block text-primary italic">Playbook</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                {language === 'de' 
                  ? 'Warum schaffen Midjourney, Cursor und Perplexity das – und Sie nicht? Ein wissenschaftlich fundierter Leitfaden für CEOs.'
                  : 'Why can Midjourney, Cursor and Perplexity do it – and you can\'t? A scientifically-backed guide for CEOs.'}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>n=22 {language === 'de' ? 'Companies analysiert' : 'Companies analyzed'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>R²=0.76, p&lt;0.001</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>250,000+ {language === 'de' ? 'Wörter Research' : 'Words Research'}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground shadow-brutal-sm hover-brutal">
                  <Download className="w-5 h-5 mr-2" />
                  {language === 'de' ? 'PDF herunterladen' : 'Download PDF'}
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToChapter('executive')}>
                  {language === 'de' ? 'Jetzt lesen' : 'Read now'}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Quick Stats Card */}
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 w-full lg:w-auto">
              <h3 className="font-semibold mb-4 text-lg">
                {language === 'de' ? 'Die Kernfrage' : 'The Core Question'}
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Traditional Scaling</p>
                  <p className="font-mono text-lg">Time to €100M: <span className="text-red-500">5-7 Jahre</span></p>
                  <p className="font-mono text-sm text-muted-foreground">ARR/Employee: €150k-€200k</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary mb-2">AI-Native Scaling</p>
                  <p className="font-mono text-lg">Time to €100M: <span className="text-primary font-bold">8-18 Monate</span></p>
                  <p className="font-mono text-sm text-muted-foreground">ARR/Employee: €750k-€5M</p>
                </div>
                <div className="text-center pt-2">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    4-10x {language === 'de' ? 'schneller' : 'faster'}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content with Sticky Navigation */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            {/* Sticky Chapter Navigation */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  {language === 'de' ? 'Kapitel' : 'Chapters'}
                </h3>
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => scrollToChapter(chapter.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all flex items-center gap-3 group ${
                      activeChapter === chapter.id 
                        ? 'bg-primary/10 text-primary border-l-2 border-primary' 
                        : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${chapter.color} flex items-center justify-center`}>
                      <chapter.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {chapter.number === 0 ? '' : `${language === 'de' ? 'Kapitel' : 'Chapter'} ${chapter.number}`}
                      </p>
                      <p className="text-sm font-medium truncate">
                        {language === 'de' ? chapter.titleDe : chapter.titleEn}
                      </p>
                    </div>
                  </button>
                ))}
                
                {/* Download CTA in Sidebar */}
                <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    {language === 'de' ? 'Das komplette Playbook als PDF' : 'The complete playbook as PDF'}
                  </p>
                  <Button size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    {language === 'de' ? 'Download' : 'Download'}
                  </Button>
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <div className="flex-1 max-w-4xl">
              {/* Executive Summary */}
              <article id="executive" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-display font-bold">Executive Summary</h2>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h3>{language === 'de' ? 'Die Situation' : 'The Situation'}</h3>
                  <p>
                    {language === 'de' 
                      ? 'Sie führen ein Series B/C SaaS-Unternehmen. €10M-€50M ARR. 50-200 Mitarbeiter. Product-Market Fit. Finanziert. Wachstum 80-150% YoY.'
                      : 'You run a Series B/C SaaS company. €10M-€50M ARR. 50-200 employees. Product-Market Fit. Funded. Growth 80-150% YoY.'}
                  </p>
                  
                  <div className="not-prose my-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="p-4 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20">
                        <p className="text-sm text-muted-foreground mb-1">Midjourney</p>
                        <p className="text-2xl font-bold text-violet-500">€0 → €492M ARR</p>
                        <p className="text-sm text-muted-foreground">18 Monate • 107 MA</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                        <p className="text-sm text-muted-foreground mb-1">Cursor</p>
                        <p className="text-2xl font-bold text-blue-500">€0 → €100M ARR</p>
                        <p className="text-sm text-muted-foreground">12 Monate • 60 MA</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
                        <p className="text-sm text-muted-foreground mb-1">Perplexity</p>
                        <p className="text-2xl font-bold text-emerald-500">€0 → €200M ARR</p>
                        <p className="text-sm text-muted-foreground">24 Monate • 80 MA</p>
                      </Card>
                    </div>
                  </div>

                  <h3>{language === 'de' ? 'Die Frage' : 'The Question'}</h3>
                  <blockquote className="text-2xl font-display italic border-l-4 border-primary pl-6 my-8">
                    "{language === 'de' ? 'Warum schaffen die das – und ich nicht?!' : 'Why can they do it – and I can\'t?!'}"
                  </blockquote>
                  
                  <h3>{language === 'de' ? 'Die Antwort' : 'The Answer'}</h3>
                  <p>
                    {language === 'de'
                      ? 'AI-native Companies nutzen ein anderes Playbook. Traditional Playbook (Linear Scaling): Revenue Growth ≈ People Growth. AI-Native Playbook (Superlinear Scaling): Revenue Growth >>> People Growth.'
                      : 'AI-native companies use a different playbook. Traditional Playbook (Linear Scaling): Revenue Growth ≈ People Growth. AI-Native Playbook (Superlinear Scaling): Revenue Growth >>> People Growth.'}
                  </p>
                  
                  <div className="not-prose my-8">
                    <Card className="p-6 bg-card">
                      <h4 className="font-semibold mb-4">{language === 'de' ? 'Was Sie in diesem Playbook lernen' : 'What you\'ll learn in this playbook'}</h4>
                      <ol className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
                          <span><strong>WARUM</strong> AI-native Companies 10-30x schneller skalieren</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
                          <span><strong>WO</strong> Ihr Bottleneck liegt (4 Capabilities × 8 Dimensionen)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
                          <span><strong>WIE</strong> Sie von linear zu superlinear switchen</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
                          <span><strong>WAS</strong> Sie erreichen können (5 Case Studies, ROI 5-17x)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">5</span>
                          <span><strong>WELCHE</strong> Risiken existieren (5 Hauptrisiken + Mitigation)</span>
                        </li>
                      </ol>
                    </Card>
                  </div>
                </div>
              </article>

              {/* Chapter 1 */}
              <article id="chapter1" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{language === 'de' ? 'Kapitel' : 'Chapter'} 1</p>
                    <h2 className="text-3xl font-display font-bold">
                      {language === 'de' ? 'Die Frage, die keiner stellt' : 'The Question Nobody Asks'}
                    </h2>
                  </div>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground italic">
                    München, Dezember 2025. 9:00 Uhr morgens.
                  </p>
                  <p>
                    {language === 'de'
                      ? 'Sarah sitzt im Boardroom ihres Series B SaaS-Unternehmens. €15M ARR. 80 Mitarbeiter. Wachstum 80% YoY. Auf dem Papier läuft alles gut.'
                      : 'Sarah sits in the boardroom of her Series B SaaS company. €15M ARR. 80 employees. Growth 80% YoY. On paper, everything looks good.'}
                  </p>
                  <p>
                    {language === 'de'
                      ? 'Dann stellt ein Board Member die Frage:'
                      : 'Then a board member asks the question:'}
                  </p>
                  <blockquote className="text-xl border-l-4 border-amber-500 pl-6">
                    "Sarah, {language === 'de' ? 'warum wachsen wir langsamer als Cursor, Perplexity und Midjourney?' : 'why are we growing slower than Cursor, Perplexity and Midjourney?'}"
                  </blockquote>
                  
                  <div className="not-prose my-8 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4"></th>
                          <th className="text-left py-3 px-4">{language === 'de' ? 'Ihr Unternehmen' : 'Your Company'}</th>
                          <th className="text-left py-3 px-4">Midjourney</th>
                          <th className="text-left py-3 px-4">Cursor</th>
                          <th className="text-left py-3 px-4">Perplexity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">ARR</td>
                          <td className="py-3 px-4 text-muted-foreground">€10M → €15M</td>
                          <td className="py-3 px-4 text-violet-500 font-semibold">€0 → €492M</td>
                          <td className="py-3 px-4 text-blue-500 font-semibold">€0 → €100M</td>
                          <td className="py-3 px-4 text-emerald-500 font-semibold">€0 → €200M</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">{language === 'de' ? 'Mitarbeiter' : 'Employees'}</td>
                          <td className="py-3 px-4 text-muted-foreground">60 → 80</td>
                          <td className="py-3 px-4">11 → 107</td>
                          <td className="py-3 px-4">60</td>
                          <td className="py-3 px-4">80</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3 px-4 font-medium">ARR/Employee</td>
                          <td className="py-3 px-4 text-muted-foreground">€188k</td>
                          <td className="py-3 px-4 text-violet-500 font-semibold">€4.6M</td>
                          <td className="py-3 px-4 text-blue-500 font-semibold">€1.67M</td>
                          <td className="py-3 px-4 text-emerald-500 font-semibold">€2.5M</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">{language === 'de' ? 'Zeit' : 'Time'}</td>
                          <td className="py-3 px-4 text-muted-foreground">24 Monate</td>
                          <td className="py-3 px-4">18 Monate</td>
                          <td className="py-3 px-4">12 Monate</td>
                          <td className="py-3 px-4">24 Monate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    {language === 'de'
                      ? 'Die Frage, die Sarah nicht loslässt:'
                      : 'The question that won\'t leave Sarah alone:'}
                  </p>
                  <blockquote className="text-2xl font-display italic border-l-4 border-primary pl-6 my-8">
                    "{language === 'de' ? 'Was machen die fundamental anders?' : 'What are they doing fundamentally different?'}"
                  </blockquote>
                </div>
              </article>

              {/* Chapter 2 */}
              <article id="chapter2" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{language === 'de' ? 'Kapitel' : 'Chapter'} 2</p>
                    <h2 className="text-3xl font-display font-bold">
                      {language === 'de' ? 'Warum Traditional Scaling nicht mehr funktioniert' : 'Why Traditional Scaling No Longer Works'}
                    </h2>
                  </div>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h3>{language === 'de' ? 'Das alte Playbook: Linear Scaling' : 'The Old Playbook: Linear Scaling'}</h3>
                  <p>
                    {language === 'de'
                      ? 'Revenue ≈ People. Mehr Revenue = Mehr Menschen. Time to €100M: 5-7 Jahre. ARR/Employee: €150k-€200k (konstant).'
                      : 'Revenue ≈ People. More Revenue = More People. Time to €100M: 5-7 years. ARR/Employee: €150k-€200k (constant).'}
                  </p>
                  
                  <h3>{language === 'de' ? 'Die drei tödlichen Muster' : 'The Three Deadly Patterns'}</h3>
                  
                  <div className="not-prose my-8 space-y-4">
                    <Card className="p-6 border-red-500/20 bg-red-500/5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                          <Users className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-500 mb-2">{language === 'de' ? 'Muster 1: Coordination Cost Explosion' : 'Pattern 1: Coordination Cost Explosion'}</h4>
                          <p className="text-sm text-muted-foreground">
                            {language === 'de'
                              ? 'Coordination Cost explodiert quadratisch O(n²). Bei 100 Leuten: 4,950 Coordination Pairs. Team verbringt 50-70% der Zeit in Meetings.'
                              : 'Coordination Cost explodes quadratically O(n²). At 100 people: 4,950 coordination pairs. Team spends 50-70% of time in meetings.'}
                          </p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 border-red-500/20 bg-red-500/5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-500 mb-2">{language === 'de' ? 'Muster 2: Decision Velocity Kollaps' : 'Pattern 2: Decision Velocity Collapse'}</h4>
                          <p className="text-sm text-muted-foreground">
                            {language === 'de'
                              ? 'Entscheidungen: 2-3 Tage → 2-4 Wochen. Time-to-Market steigt +100-300%. Competitors überholen Sie.'
                              : 'Decisions: 2-3 days → 2-4 weeks. Time-to-Market increases +100-300%. Competitors overtake you.'}
                          </p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 border-red-500/20 bg-red-500/5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-500 mb-2">{language === 'de' ? 'Muster 3: Culture Erosion' : 'Pattern 3: Culture Erosion'}</h4>
                          <p className="text-sm text-muted-foreground">
                            {language === 'de'
                              ? 'Silos entstehen, Mission wird unklar. Top Talent verlässt das Unternehmen (+50-100% Churn). "Wir vs. Sie" Mentalität.'
                              : 'Silos emerge, mission becomes unclear. Top talent leaves the company (+50-100% churn). "Us vs. Them" mentality.'}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <blockquote className="text-xl border-l-4 border-red-500 pl-6">
                    {language === 'de'
                      ? '"Linear Scaling bedeutet: Mehr Revenue = Mehr Menschen = Mehr Coordination Cost = Weniger Velocity = Weniger Revenue → Teufelskreis"'
                      : '"Linear Scaling means: More Revenue = More People = More Coordination Cost = Less Velocity = Less Revenue → Vicious Cycle"'}
                  </blockquote>
                </div>
              </article>

              {/* Chapter 3 */}
              <article id="chapter3" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{language === 'de' ? 'Kapitel' : 'Chapter'} 3</p>
                    <h2 className="text-3xl font-display font-bold">
                      {language === 'de' ? 'Das AI-Native Playbook' : 'The AI-Native Playbook'}
                    </h2>
                  </div>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h3>{language === 'de' ? 'Superlinear Scaling: Der Paradigmenwechsel' : 'Superlinear Scaling: The Paradigm Shift'}</h3>
                  
                  <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 border-red-500/20">
                      <h4 className="font-semibold mb-4 text-red-500">Traditional (Linear)</h4>
                      <ul className="space-y-2 text-sm">
                        <li>Revenue ≈ People</li>
                        <li>Coordination Cost: O(n²)</li>
                        <li>ARR/Employee: €150k-€200k</li>
                        <li>Time to €100M: 5-7 Jahre</li>
                      </ul>
                    </Card>
                    <Card className="p-6 border-emerald-500/20 bg-emerald-500/5">
                      <h4 className="font-semibold mb-4 text-emerald-500">AI-Native (Superlinear)</h4>
                      <ul className="space-y-2 text-sm">
                        <li>Revenue &gt;&gt;&gt; People</li>
                        <li>Coordination Cost: O(n log n)</li>
                        <li>ARR/Employee: €750k-€5M</li>
                        <li>Time to €100M: 8-18 Monate</li>
                      </ul>
                    </Card>
                  </div>

                  <h3>{language === 'de' ? 'Die wissenschaftliche Basis' : 'The Scientific Foundation'}</h3>
                  <p>
                    {language === 'de'
                      ? 'Basierend auf n=22 AI-native Companies (Midjourney, Cursor, Perplexity, Harvey, etc.)'
                      : 'Based on n=22 AI-native companies (Midjourney, Cursor, Perplexity, Harvey, etc.)'}
                  </p>
                  
                  <div className="not-prose my-6 p-6 bg-muted/50 rounded-lg font-mono text-sm">
                    <p className="text-muted-foreground mb-2">Regression Analysis:</p>
                    <p className="text-lg">log(Time to €100M) = 8.35 - 7.12 × θ_index</p>
                    <p className="text-muted-foreground mt-2">R² = 0.76 (76% explained variance) | p &lt; 0.001</p>
                  </div>

                  <h3>{language === 'de' ? 'Die 4 Capabilities × 8 Dimensionen' : 'The 4 Capabilities × 8 Dimensions'}</h3>
                  <p>
                    θ_index {language === 'de' ? 'misst, wie AI-native Ihr Unternehmen ist (0.0 = Traditional, 1.0 = Fully AI-Native).' : 'measures how AI-native your company is (0.0 = Traditional, 1.0 = Fully AI-Native).'}
                  </p>
                  
                  <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h5 className="font-semibold mb-2">C₁: Strategy Capability</h5>
                      <p className="text-sm text-muted-foreground">{language === 'de' ? 'Wie gut definieren Sie Strategie?' : 'How well do you define strategy?'}</p>
                    </Card>
                    <Card className="p-4">
                      <h5 className="font-semibold mb-2">C₂: Setup Capability</h5>
                      <p className="text-sm text-muted-foreground">{language === 'de' ? 'Wie schnell bauen Sie Infrastructure?' : 'How fast do you build infrastructure?'}</p>
                    </Card>
                    <Card className="p-4">
                      <h5 className="font-semibold mb-2">C₃: Execution Capability</h5>
                      <p className="text-sm text-muted-foreground">{language === 'de' ? 'Wie schnell und gut liefern Sie?' : 'How fast and well do you deliver?'}</p>
                    </Card>
                    <Card className="p-4">
                      <h5 className="font-semibold mb-2">C₄: Operationalization</h5>
                      <p className="text-sm text-muted-foreground">{language === 'de' ? 'Wie gut systematisieren Sie?' : 'How well do you systematize?'}</p>
                    </Card>
                  </div>
                </div>
              </article>

              {/* Chapter 4 */}
              <article id="chapter4" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{language === 'de' ? 'Kapitel' : 'Chapter'} 4</p>
                    <h2 className="text-3xl font-display font-bold">
                      {language === 'de' ? 'Die 3 Interventionsmodelle' : 'The 3 Intervention Models'}
                    </h2>
                  </div>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    {language === 'de'
                      ? 'Es gibt 3 Interventionsmodelle, basierend auf Ihrer aktuellen Situation, Ihrem Bottleneck und Ihrer Ambition.'
                      : 'There are 3 intervention models, based on your current situation, your bottleneck, and your ambition.'}
                  </p>
                  
                  <div className="not-prose my-8 space-y-6">
                    <Card className="p-6 border-blue-500/20 hover:border-blue-500/40 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shrink-0">
                          <span className="text-white font-bold text-2xl">1</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2">Bottleneck Resolution</h4>
                          <p className="text-muted-foreground mb-4">{language === 'de' ? 'Wenn Sie einen klaren Bottleneck haben (C_min < 0.6)' : 'When you have a clear bottleneck (C_min < 0.6)'}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8-12 {language === 'de' ? 'Wochen' : 'Weeks'}</span>
                            <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" /> €80k-€180k</span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> 85% Success</span>
                            <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> 2-5x Impact</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 border-violet-500/20 hover:border-violet-500/40 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center shrink-0">
                          <span className="text-white font-bold text-2xl">2</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2">Stage Transition</h4>
                          <p className="text-muted-foreground mb-4">{language === 'de' ? 'Für Stage-Wechsel (Series A→B oder B→C)' : 'For stage transitions (Series A→B or B→C)'}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 90 {language === 'de' ? 'Tage' : 'Days'}</span>
                            <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" /> €150k-€300k</span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-yellow-500" /> 65% Success</span>
                            <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> 5-15x Impact</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 border-amber-500/20 hover:border-amber-500/40 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0">
                          <span className="text-white font-bold text-2xl">3</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2">Level Transition</h4>
                          <p className="text-muted-foreground mb-4">{language === 'de' ? 'Für AI-Maturity Level-Wechsel (1→2 oder 2→3)' : 'For AI-Maturity level transitions (1→2 or 2→3)'}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6-24 Monate</span>
                            <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" /> €1.2M-€5M</span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-red-500" /> 25-45% Success</span>
                            <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> 10-50x Impact</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </article>

              {/* Chapter 5 */}
              <article id="chapter5" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{language === 'de' ? 'Kapitel' : 'Chapter'} 5</p>
                    <h2 className="text-3xl font-display font-bold">
                      {language === 'de' ? '5 Case Studies + ROI' : '5 Case Studies + ROI'}
                    </h2>
                  </div>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="not-prose space-y-6">
                    {[
                      { title: 'Case Study 1: Setup Bottleneck (GTM)', model: 'Model 1', timeline: '12 Wochen', roi: '5x', result: 'CAC -38%, Lead Volume +300%' },
                      { title: 'Case Study 2: Stage Transition (Series A→B)', model: 'Model 2', timeline: '90 Tage', roi: '12x', result: 'ARR +140%, Pipeline +300%' },
                      { title: 'Case Study 3: Level Transition (1→2)', model: 'Model 3', timeline: '9 Monate', roi: '11x', result: 'θ_index 0.35 → 0.65, ARR +80%' },
                      { title: 'Case Study 4: Level Transition (2→3)', model: 'Model 3', timeline: '18 Monate', roi: '229x', result: 'ARR +150%, Valuation +200%' },
                      { title: 'Case Study 5: VC Portfolio', model: 'Portfolio', timeline: '12 Monate', roi: '175x', result: 'Portfolio Valuation +70%' },
                    ].map((cs, i) => (
                      <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Badge variant="secondary" className="mb-2">{cs.model}</Badge>
                            <h4 className="text-lg font-semibold mb-2">{cs.title}</h4>
                            <p className="text-sm text-muted-foreground">{cs.result}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-3xl font-bold text-primary">{cs.roi}</p>
                            <p className="text-xs text-muted-foreground">ROI</p>
                            <p className="text-sm mt-1">{cs.timeline}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </article>

              {/* Chapter 6 */}
              <article id="chapter6" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-gray-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{language === 'de' ? 'Kapitel' : 'Chapter'} 6</p>
                    <h2 className="text-3xl font-display font-bold">
                      {language === 'de' ? 'Die 5 Hauptrisiken' : 'The 5 Main Risks'}
                    </h2>
                  </div>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    {language === 'de'
                      ? 'Nicht alle schaffen es. Success Rates: Model 1 (85%), Model 2 (65%), Model 3 Level 1→2 (45%), Model 3 Level 2→3 (25%).'
                      : 'Not everyone makes it. Success Rates: Model 1 (85%), Model 2 (65%), Model 3 Level 1→2 (45%), Model 3 Level 2→3 (25%).'}
                  </p>
                  
                  <div className="not-prose my-8 space-y-4">
                    {[
                      { risk: language === 'de' ? 'Kein CEO-Commitment' : 'No CEO Commitment', pct: '40%', desc: language === 'de' ? 'CEO muss persönlich involviert sein, nicht delegieren' : 'CEO must be personally involved, not delegate' },
                      { risk: language === 'de' ? 'Kein Board Buy-In' : 'No Board Buy-In', pct: '30%', desc: language === 'de' ? 'Board muss Budget, Timeline und Risk verstehen' : 'Board must understand budget, timeline and risk' },
                      { risk: 'Talent Gap', pct: '20%', desc: language === 'de' ? 'Ohne AI-Expertise im Team scheitern 60%' : 'Without AI expertise in the team, 60% fail' },
                      { risk: 'Change Management', pct: '40%', desc: language === 'de' ? 'Team widersteht neuen Tools/Prozessen' : 'Team resists new tools/processes' },
                      { risk: language === 'de' ? 'Unrealistische Erwartungen' : 'Unrealistic Expectations', pct: '30%', desc: language === 'de' ? 'Results brauchen 8-12 Wochen, nicht 4 Wochen' : 'Results take 8-12 weeks, not 4 weeks' },
                    ].map((r, i) => (
                      <Card key={i} className="p-4 border-border/50">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                            <span className="text-lg font-bold text-muted-foreground">{r.pct}</span>
                          </div>
                          <div>
                            <h5 className="font-semibold">{language === 'de' ? 'Risiko' : 'Risk'} {i + 1}: {r.risk}</h5>
                            <p className="text-sm text-muted-foreground">{r.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </article>

              {/* Final CTA */}
              <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-display font-bold mb-4">
                  {language === 'de' ? 'Bereit für Superlinear Scaling?' : 'Ready for Superlinear Scaling?'}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {language === 'de'
                    ? 'Laden Sie das komplette Playbook herunter oder buchen Sie einen Inflection Call mit unserem Team.'
                    : 'Download the complete playbook or book an Inflection Call with our team.'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary text-primary-foreground shadow-brutal-sm hover-brutal">
                    <Download className="w-5 h-5 mr-2" />
                    {language === 'de' ? 'Playbook herunterladen' : 'Download Playbook'}
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => window.open('https://scalingx.fillout.com/inflection-call', '_blank')}>
                    {language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlaybookPage;
