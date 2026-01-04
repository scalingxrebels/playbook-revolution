import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FlaskConical, 
  ShieldCheck, 
  AlertCircle,
  CheckCircle2,
  XCircle,
  BarChart3,
  TrendingUp
} from 'lucide-react';

const ProofSection: React.FC = () => {
  const { language } = useLanguage();

  const validatedFindings = [
    {
      finding: language === 'de' ? 'Level 3 Unternehmen skalieren 4-10x schneller' : 'Level 3 companies scale 4-10x faster',
      metric: '8-18 Monate vs. 60-84 Monate',
      validated: true
    },
    {
      finding: language === 'de' ? 'Koordinationskosten sinken 80-99%' : 'Coordination Cost drops 80-99%',
      metric: 'O(n²) → O(n log n)',
      validated: true
    },
    {
      finding: language === 'de' ? 'Bottleneck-Fixing reduziert Time to €100M um 50%' : 'Bottleneck-Fixing reduces Time to €100M by 50%',
      metric: '24 → 12 Monate',
      validated: true
    },
    {
      finding: language === 'de' ? 'θ_index prognostiziert Time to €100M' : 'θ_index predicts Time to €100M',
      metric: 'r = 0.89, p ≈ 3×10⁻⁸',
      validated: true
    },
    {
      finding: language === 'de' ? '4 Capabilities (C₁-C₄) sind messbar' : '4 Capabilities (C₁-C₄) are measurable',
      metric: '8 Dimensions × 4 Capabilities',
      validated: true
    }
  ];

  const honestRisks = [
    {
      title: language === 'de' ? 'NICHT für Seed Stage' : 'NOT for Seed Stage',
      description: language === 'de' ? 'Du brauchst mindestens Product-Market Fit' : 'You need at least Product-Market Fit',
    },
    {
      title: language === 'de' ? 'NICHT für Bootstrapped' : 'NOT for Bootstrapped',
      description: language === 'de' ? 'Investment erfordert €80K-€180K Minimum' : 'Investment requires €80K-€180K minimum',
    },
    {
      title: language === 'de' ? 'NICHT für Corporates' : 'NOT for Corporates',
      description: language === 'de' ? 'Optimiert für Series A-D Startups' : 'Optimized for Series A-D Startups',
    }
  ];

  const faqs = [
    {
      q: language === 'de' ? 'Ist das nur für AI-Produkte?' : 'Is this only for AI products?',
      a: language === 'de' ? 'Nein! Es geht um AI-NATIVE Organizations, nicht AI-Produkte. Jedes Unternehmen kann Level 3 erreichen.' : 'No! It\'s about AI-NATIVE Organizations, not AI products. Any company can reach Level 3.'
    },
    {
      q: language === 'de' ? 'Wie lange dauert die Transformation?' : 'How long does the transformation take?',
      a: language === 'de' ? 'Model 1: 8-12 Wochen (Bottleneck Resolution). Model 2: 90 Tage (Stage Transition). Model 3: 6-24 Monate (Level Transition).' : 'Model 1: 8-12 weeks (Bottleneck Resolution). Model 2: 90 days (Stage Transition). Model 3: 6-24 months (Level Transition).'
    },
    {
      q: language === 'de' ? 'Was ist die Erfolgsrate?' : 'What\'s the success rate?',
      a: language === 'de' ? 'Model 1: 85% (n=22). Model 2: 65% (n=15). Model 3: 45% Level 1→2, 25% Level 2→3.' : 'Model 1: 85% (n=22). Model 2: 65% (n=15). Model 3: 45% Level 1→2, 25% Level 2→3.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container max-w-7xl mx-auto">
        {/* Scientific Validation Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <FlaskConical className="w-3 h-3 mr-1" />
            {language === 'de' ? 'Wissenschaftlich validiert' : 'Scientifically Validated'}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'de' ? 'Empirische Basis' : 'Empirical Foundation'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            n=22 companies, R²=0.76, r=0.89, p≈3×10⁻⁸
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center glass">
            <div className="text-3xl font-bold text-primary mb-2">250,000+</div>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Wörter Forschung' : 'Words of Research'}</p>
          </Card>
          <Card className="p-6 text-center glass">
            <div className="text-3xl font-bold text-primary mb-2">n=22</div>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Analysierte Unternehmen' : 'Companies Analyzed'}</p>
          </Card>
          <Card className="p-6 text-center glass">
            <div className="text-3xl font-bold text-primary mb-2">R²=0.76</div>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Varianz erklärt' : 'Variance Explained'}</p>
          </Card>
          <Card className="p-6 text-center glass">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Peer-review-ready Papers' : 'Peer-review-ready Papers'}</p>
          </Card>
        </div>

        {/* Validated Findings */}
        <Card className="p-6 glass mb-12">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            {language === 'de' ? 'Validierte Findings' : 'Validated Findings'}
          </h3>
          
          <div className="space-y-4">
            {validatedFindings.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium">{item.finding}</span>
                </div>
                <Badge variant="secondary" className="text-xs">{item.metric}</Badge>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30">
            <p className="text-sm text-center">
              <TrendingUp className="w-4 h-4 inline mr-2 text-accent" />
              {language === 'de' 
                ? 'Das ist NICHT Spekulation. Das ist VALIDIERT.'
                : 'This is NOT speculation. This is VALIDATED.'
              }
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Honest Risks */}
          <Card className="p-6 glass border-destructive/20">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-destructive" />
              {language === 'de' ? 'Ehrliche Risiken' : 'Honest Risks'}
            </h3>
            
            <div className="space-y-4">
              {honestRisks.map((risk, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{risk.title}</p>
                    <p className="text-sm text-muted-foreground">{risk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* FAQ */}
          <Card className="p-6 glass">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent" />
              FAQ
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-lg bg-background/50">
                  <p className="font-medium mb-2">{faq.q}</p>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Foundation Ecosystem */}
        <Card className="mt-12 p-8 glass text-center">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'de' ? 'Basiert auf dem Foundation Ecosystem' : 'Based on the Foundation Ecosystem'}
          </h3>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="font-bold">ANST v4.5.3</p>
              <p className="text-xs text-muted-foreground">AI-Native Scaling Theory</p>
              <p className="text-sm mt-1">50,000 words</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="font-bold">SST v4.5.1</p>
              <p className="text-xs text-muted-foreground">Scaling Stack Theory</p>
              <p className="text-sm mt-1">45,000 words</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="font-bold">AMF v4.5.1</p>
              <p className="text-xs text-muted-foreground">AI Maturity Framework</p>
              <p className="text-sm mt-1">40,000 words</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="font-bold">Document 4 v2.0</p>
              <p className="text-xs text-muted-foreground">Scaling Stack in Practice</p>
              <p className="text-sm mt-1">50,500 words</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {language === 'de' 
              ? 'Die wissenschaftliche Antwort auf "Warum schaffen die das und ich nicht?"'
              : 'The scientific answer to "Why do they achieve this and I don\'t?"'
            }
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ProofSection;
