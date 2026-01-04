import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, CheckCircle, Clock, AlertCircle, Layers, Target, BarChart3, Settings, Users, Briefcase } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  status: 'complete' | 'in_progress' | 'pending';
  wordCount: string;
  icon: React.ElementType;
  description: string;
}

const EcosystemMap = () => {
  const { language } = useLanguage();

  const coreDocuments: Document[] = [
    { id: '00', name: 'Architecture Document', status: 'complete', wordCount: '25K', icon: Layers, description: language === 'de' ? 'Master Reference für das SXH Ecosystem' : 'Master Reference for SXH Ecosystem' },
    { id: '01', name: 'Marktanalyse', status: 'complete', wordCount: '30K', icon: BarChart3, description: language === 'de' ? 'TAM/SAM/SOM, ICP, Konkurrenz' : 'TAM/SAM/SOM, ICP, Competition' },
    { id: '02', name: 'Positionierung', status: 'complete', wordCount: '15K', icon: Target, description: language === 'de' ? 'AI-Native Execution Consulting Positionierung' : 'AI-Native Execution Consulting Positioning' },
    { id: '03', name: 'Services & Programs', status: 'complete', wordCount: '20K', icon: Briefcase, description: language === 'de' ? '3×3 Service Matrix, Pricing, Packaging' : '3×3 Service Matrix, Pricing, Packaging' },
    { id: '04', name: 'Sales & Marketing', status: 'complete', wordCount: '18K', icon: Users, description: language === 'de' ? 'GTM Strategie, Tool-First Funnel' : 'GTM Strategy, Tool-First Funnel' },
    { id: '05', name: 'Website Structure', status: 'complete', wordCount: '12K', icon: Settings, description: language === 'de' ? 'IA, Wireframes, Content' : 'IA, Wireframes, Content' },
    { id: '06', name: 'Content Strategy', status: 'in_progress', wordCount: '8K', icon: FileText, description: language === 'de' ? 'Thought Leadership, SEO' : 'Thought Leadership, SEO' },
    { id: '07', name: 'Case Studies', status: 'complete', wordCount: '15K', icon: FileText, description: language === 'de' ? 'Midjourney, Cursor, Perplexity' : 'Midjourney, Cursor, Perplexity' },
    { id: '08', name: 'Playbook External', status: 'complete', wordCount: '19K', icon: FileText, description: language === 'de' ? 'AI-Native Scaling Playbook für CEOs' : 'AI-Native Scaling Playbook for CEOs' },
    { id: '09', name: 'Video Scripts', status: 'pending', wordCount: '0K', icon: FileText, description: language === 'de' ? 'YouTube, LinkedIn Content' : 'YouTube, LinkedIn Content' },
  ];

  const salesMarketingDocs: Document[] = [
    { id: 'S1', name: 'External Playbook Part 1', status: 'complete', wordCount: '10K', icon: FileText, description: language === 'de' ? 'AI-Native Scaling Foundations' : 'AI-Native Scaling Foundations' },
    { id: 'S2', name: 'External Playbook Part 2', status: 'complete', wordCount: '9K', icon: FileText, description: language === 'de' ? 'Implementation Guide' : 'Implementation Guide' },
    { id: 'S3', name: 'Sales Deck', status: 'pending', wordCount: '0K', icon: FileText, description: language === 'de' ? 'Pitch Deck für Sales Calls' : 'Pitch Deck for Sales Calls' },
    { id: 'S4', name: 'One-Pagers', status: 'pending', wordCount: '0K', icon: FileText, description: language === 'de' ? 'Service One-Pagers' : 'Service One-Pagers' },
    { id: 'S5', name: 'Email Sequences', status: 'pending', wordCount: '0K', icon: FileText, description: language === 'de' ? 'Nurture & Follow-up' : 'Nurture & Follow-up' },
    { id: 'S6', name: 'LinkedIn Content', status: 'pending', wordCount: '0K', icon: FileText, description: language === 'de' ? 'Thought Leadership Posts' : 'Thought Leadership Posts' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return <CheckCircle className="w-4 h-4 text-accent" />;
      case 'in_progress': return <Clock className="w-4 h-4 text-yellow-500" />;
      default: return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      complete: 'bg-accent/20 text-accent border-accent/30',
      in_progress: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
      pending: 'bg-muted text-muted-foreground border-border'
    };
    const labels = {
      complete: '✓ Complete',
      in_progress: '⏳ In Progress',
      pending: '○ Pending'
    };
    return (
      <span className={`px-2 py-0.5 text-xs rounded-full border ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const coreComplete = coreDocuments.filter(d => d.status === 'complete').length;
  const salesComplete = salesMarketingDocs.filter(d => d.status === 'complete').length;
  const totalComplete = coreComplete + salesComplete;
  const totalDocs = coreDocuments.length + salesMarketingDocs.length;

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            SXH ECOSYSTEM MAP v3.1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'de' ? '16 Dokumente. 180.000 Wörter.' : '16 Documents. 180,000 Words.'}
            <span className="text-gradient block mt-2">
              {language === 'de' ? 'Ein operatives Ökosystem.' : 'One Operative Ecosystem.'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' 
              ? 'Das SXH Ecosystem transformiert 250.000 Wörter wissenschaftlicher Forschung in ein verkaufbares, marktfähiges System.' 
              : 'The SXH Ecosystem transforms 250,000 words of scientific research into a sellable, market-ready system.'}
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-3xl font-bold">{totalComplete}/{totalDocs}</p>
                <p className="text-muted-foreground">{language === 'de' ? 'Dokumente fertig' : 'Documents Complete'}</p>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-accent h-2 rounded-full transition-all" style={{ width: `${(totalComplete / totalDocs) * 100}%` }} />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{Math.round((totalComplete / totalDocs) * 100)}% {language === 'de' ? 'abgeschlossen' : 'complete'}</p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold">~180K</p>
                <p className="text-muted-foreground">{language === 'de' ? 'Wörter gesamt' : 'Total Words'}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'de' ? 'Kern: ~160K • Sales & Marketing: ~20K' : 'Core: ~160K • Sales & Marketing: ~20K'}
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Layers className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-3xl font-bold">n=22+</p>
                <p className="text-muted-foreground">{language === 'de' ? 'AI-Native Companies analysiert' : 'AI-Native Companies Analyzed'}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'de' ? 'Empirische Validierung der Frameworks' : 'Empirical validation of frameworks'}
            </p>
          </div>
        </div>

        {/* Core Documents */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">{coreComplete}/10</span>
            {language === 'de' ? 'Kern-Dokumente' : 'Core Documents'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreDocuments.map((doc) => {
              const Icon = doc.icon;
              return (
                <div 
                  key={doc.id} 
                  className={`bg-card p-4 rounded-xl border transition-all hover:shadow-lg ${
                    doc.status === 'complete' ? 'border-accent/30 hover:border-accent' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    {getStatusIcon(doc.status)}
                  </div>
                  <p className="font-semibold text-sm mb-1">{doc.id}: {doc.name}</p>
                  <p className="text-xs text-muted-foreground mb-2">{doc.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{doc.wordCount} words</span>
                    {getStatusBadge(doc.status)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sales & Marketing Documents */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">{salesComplete}/6</span>
            {language === 'de' ? 'Sales & Marketing Dokumente' : 'Sales & Marketing Documents'}
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {salesMarketingDocs.map((doc) => {
              const Icon = doc.icon;
              return (
                <div 
                  key={doc.id} 
                  className={`bg-card p-4 rounded-xl border transition-all hover:shadow-lg ${
                    doc.status === 'complete' ? 'border-accent/30 hover:border-accent' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    {getStatusIcon(doc.status)}
                  </div>
                  <p className="font-semibold text-sm mb-1">{doc.name}</p>
                  <p className="text-xs text-muted-foreground mb-2">{doc.description}</p>
                  {getStatusBadge(doc.status)}
                </div>
              );
            })}
          </div>
        </div>

        {/* Transformation Formula */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 rounded-2xl border border-primary/20">
          <div className="text-center">
            <p className="text-sm font-medium text-primary mb-4">THE TRANSFORMATION</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl font-mono">
              <span className="px-4 py-2 bg-card rounded-lg border border-border">WISSENSCHAFT (v4.5.3)</span>
              <span className="text-2xl text-accent">→</span>
              <span className="px-4 py-2 bg-accent/20 rounded-lg border border-accent/30 text-accent">PRAXIS (SXH v2.1)</span>
            </div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {language === 'de' 
                ? '250.000 Wörter Wissenschaft → 10 verkaufbare Dokumente • Theorie → Marktanalyse, Positionierung • Formeln → Service Matrix • Playbooks → GTM, Content, Website'
                : '250,000 words of science → 10 sellable documents • Theory → Market Analysis, Positioning • Formulas → Service Matrix • Playbooks → GTM, Content, Website'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemMap;
