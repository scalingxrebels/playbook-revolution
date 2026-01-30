import React from 'react';
import { Building2, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { UnifiedCaseStudyData } from '@/data/research/types';

interface ResearchUnifiedCaseStudySectionProps {
  data: UnifiedCaseStudyData;
}

const ResearchUnifiedCaseStudySection: React.FC<ResearchUnifiedCaseStudySectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="case-study"
      className="relative py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
            <Building2 className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Complete Analysis' : 'Vollständige Analyse'}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Analysis (2/3 width) */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* AMF Analysis */}
            <div className="p-6 rounded-xl border border-violet-500/30 bg-violet-500/10">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30 border">AMF</Badge>
                {data.analysis.amf.headline[language]}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">θ_index</p>
                  <p className="text-2xl font-mono font-bold text-violet-400">{data.analysis.amf.thetaIndex}</p>
                  <p className="text-xs text-muted-foreground">{data.analysis.amf.level}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{language === 'en' ? 'Dimensions' : 'Dimensionen'}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {data.analysis.amf.dimensions.map((dim, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-muted-foreground">{dim.name[language]}</span>
                        <span className="text-foreground font-mono">{dim.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ANST Analysis */}
            <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/10">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 border">ANST</Badge>
                {data.analysis.anst.headline[language]}
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{language === 'en' ? 'Result' : 'Ergebnis'}</p>
                  <p className="text-lg font-semibold text-blue-400">{data.analysis.anst.result[language]}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Enablers</p>
                  <p className="text-sm text-foreground">{data.analysis.anst.enablers[language]}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Capabilities</p>
                  <p className="text-sm font-mono text-foreground">{data.analysis.anst.capabilities}</p>
                </div>
              </div>
            </div>

            {/* SST Analysis */}
            <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 border">SST</Badge>
                {data.analysis.sst.headline[language]}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">C_min</p>
                  <p className="text-2xl font-mono font-bold text-emerald-400">{data.analysis.sst.cMin}</p>
                  <p className="text-xs text-muted-foreground">{data.analysis.sst.bottleneck[language]}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{language === 'en' ? 'Capability Scores' : 'Capability Scores'}</p>
                  <div className="space-y-1 text-xs">
                    {data.analysis.sst.scores.map((score, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-muted-foreground">{score.capability}</span>
                        <span className={`font-mono ${score.score === data.analysis.sst.cMin ? 'text-amber-400' : 'text-foreground'}`}>
                          {score.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* META Analysis */}
            <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/10">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 border">META</Badge>
                {data.analysis.meta.headline[language]}
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{language === 'en' ? 'Predicted' : 'Prognostiziert'}</p>
                  <p className="text-lg font-semibold text-amber-400">{data.analysis.meta.prediction}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{language === 'en' ? 'Actual' : 'Tatsächlich'}</p>
                  <p className="text-lg font-semibold text-foreground">{data.analysis.meta.actual}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{language === 'en' ? 'Validated' : 'Validiert'}</p>
                  <div className="flex items-center gap-2">
                    {data.analysis.meta.validated ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">✓</span>
                      </>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Metrics Sidebar (1/3 width) */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Company Profile Card */}
            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-foreground mb-4">{data.company.name}</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{language === 'en' ? 'Founded' : 'Gegründet'}</span>
                  <span className="text-foreground font-medium">{data.company.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Revenue</span>
                  <span className="text-foreground font-medium">{data.company.revenue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{language === 'en' ? 'Employees' : 'Mitarbeiter'}</span>
                  <span className="text-foreground font-medium">{data.company.employees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{language === 'en' ? 'Time to €100M' : 'Zeit bis €100M'}</span>
                  <span className="text-foreground font-medium">{data.company.timeToRevenue}</span>
                </div>
              </div>
            </div>

            {/* Key Metrics Card */}
            <div className="p-6 rounded-xl border border-primary/30 bg-primary/10">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                {language === 'en' ? 'Key Metrics' : 'Schlüsselkennzahlen'}
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground">θ_index</p>
                  <p className="text-3xl font-mono font-bold text-violet-400">{data.analysis.amf.thetaIndex}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">C_min</p>
                  <p className="text-3xl font-mono font-bold text-emerald-400">{data.analysis.sst.cMin}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{language === 'en' ? 'Time to €100M' : 'Zeit bis €100M'}</p>
                  <p className="text-2xl font-bold text-amber-400">{data.company.timeToRevenue}</p>
                </div>
              </div>
            </div>

            {/* Validation Card */}
            <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Validation
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-foreground">
                    {language === 'en' ? 'Predicted' : 'Prognostiziert'}: {data.analysis.meta.prediction}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-foreground">
                    {language === 'en' ? 'Actual' : 'Tatsächlich'}: {data.analysis.meta.actual}
                  </span>
                </div>
              </div>
            </div>

            {/* Insight */}
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm text-primary">
                {data.insight[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className={`mt-12 p-6 rounded-xl border border-amber-500/30 bg-amber-500/10 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {data.callout.title[language]}
              </h4>
              <p className="text-sm text-muted-foreground">
                {data.callout.content[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchUnifiedCaseStudySection;
