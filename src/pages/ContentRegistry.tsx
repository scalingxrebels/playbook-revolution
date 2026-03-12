import React, { useState, useMemo } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Navigation from '@/components/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye, EyeOff, LayoutGrid, BookOpen, Lightbulb, FolderOpen } from 'lucide-react';
import { solutionTiles, visibleSolutionTiles } from '@/data/solutionTiles';
import { playbooks, visiblePlaybooks } from '@/data/playbooks';
import { caseStudies, visibleCaseStudies } from '@/data/cases';
import { sampleInsights, visibleInsights } from '@/data/insights';

const StatusBadge = ({ hidden }: { hidden?: boolean }) => (
  <Badge variant={hidden ? 'secondary' : 'default'} className={hidden 
    ? 'bg-muted text-muted-foreground' 
    : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'}>
    {hidden ? <><EyeOff className="w-3 h-3 mr-1" /> Hidden</> : <><Eye className="w-3 h-3 mr-1" /> Live</>}
  </Badge>
);

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 py-3 border-b border-border">
    {children}
  </th>
);

const ContentRegistry: React.FC = () => {
  const { user, loading, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('solutions');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/auth?returnTo=/content-registry" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Content Registry</h1>
            <p className="text-sm text-muted-foreground">
              Übersicht aller Inhalte. Status, Landing Pages und Verknüpfungen.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Solutions', icon: LayoutGrid, total: solutionTiles.length, live: visibleSolutionTiles.length },
              { label: 'Playbooks', icon: BookOpen, total: playbooks.length, live: visiblePlaybooks.length },
              { label: 'Cases', icon: FolderOpen, total: caseStudies.length, live: visibleCaseStudies.length },
              { label: 'Insights', icon: Lightbulb, total: sampleInsights.length, live: visibleInsights.length },
            ].map(({ label, icon: Icon, total, live }) => (
              <div key={label} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">{live}</span>
                  <span className="text-xs text-muted-foreground">/ {total} total</span>
                  {total - live > 0 && (
                    <span className="text-xs text-muted-foreground">({total - live} hidden)</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="solutions">Solutions ({solutionTiles.length})</TabsTrigger>
              <TabsTrigger value="playbooks">Playbooks ({playbooks.length})</TabsTrigger>
              <TabsTrigger value="cases">Cases ({caseStudies.length})</TabsTrigger>
              <TabsTrigger value="insights">Insights ({sampleInsights.length})</TabsTrigger>
            </TabsList>

            {/* Solutions Tab */}
            <TabsContent value="solutions">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <TableHeader>#</TableHeader>
                        <TableHeader>Titel</TableHeader>
                        <TableHeader>Typ</TableHeader>
                        <TableHeader>Tier</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Landing Page</TableHeader>
                        <TableHeader>Links</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {solutionTiles.map((tile, i) => (
                        <tr key={tile.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 text-xs text-muted-foreground">{i + 1}</td>
                          <td className="px-4 py-3">
                            <span className="text-sm font-medium text-foreground">{tile.headlineDe}</span>
                            <br />
                            <span className="text-xs text-muted-foreground">{tile.slug}</span>
                          </td>
                          <td className="px-4 py-3">
                            <Badge variant="outline" className="text-xs">{tile.solutionType}</Badge>
                          </td>
                          <td className="px-4 py-3 text-xs text-muted-foreground">
                            {tile.transformationTier || '—'}
                          </td>
                          <td className="px-4 py-3"><StatusBadge hidden={tile.hidden} /></td>
                          <td className="px-4 py-3">
                            <code className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                              {tile.primaryCtaUrl || `/${tile.slug}`}
                            </code>
                          </td>
                          <td className="px-4 py-3">
                            <Link to={tile.primaryCtaUrl || `/${tile.slug}`} target="_blank" className="text-primary hover:underline inline-flex items-center gap-1 text-xs">
                              <ExternalLink className="w-3 h-3" /> Öffnen
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Playbooks Tab */}
            <TabsContent value="playbooks">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <TableHeader>#</TableHeader>
                        <TableHeader>Titel</TableHeader>
                        <TableHeader>Ebene</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Landing Page</TableHeader>
                        <TableHeader>Links</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {playbooks.map((pb, i) => {
                        const url = `/playbooks/${pb.slug}`;
                        return (
                          <tr key={pb.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                            <td className="px-4 py-3 text-xs text-muted-foreground">{i + 1}</td>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium text-foreground">{pb.title.de}</span>
                              <br />
                              <span className="text-xs text-muted-foreground">{pb.slug}</span>
                            </td>
                            <td className="px-4 py-3">
                              <Badge variant="outline" className="text-xs">Ebene {pb.ebene}</Badge>
                            </td>
                            <td className="px-4 py-3"><StatusBadge hidden={pb.hidden} /></td>
                            <td className="px-4 py-3">
                              <code className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{url}</code>
                            </td>
                            <td className="px-4 py-3">
                              <Link to={url} target="_blank" className="text-primary hover:underline inline-flex items-center gap-1 text-xs">
                                <ExternalLink className="w-3 h-3" /> Öffnen
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Cases Tab */}
            <TabsContent value="cases">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <TableHeader>#</TableHeader>
                        <TableHeader>Titel</TableHeader>
                        <TableHeader>Industry</TableHeader>
                        <TableHeader>Stage</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Landing Page</TableHeader>
                        <TableHeader>Links</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {caseStudies.map((cs, i) => {
                        const url = `/cases/${cs.slug}`;
                        return (
                          <tr key={cs.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                            <td className="px-4 py-3 text-xs text-muted-foreground">{i + 1}</td>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium text-foreground">{cs.headline.de}</span>
                              <br />
                              <span className="text-xs text-muted-foreground">{cs.slug}</span>
                            </td>
                            <td className="px-4 py-3 text-xs text-muted-foreground">{cs.industry}</td>
                            <td className="px-4 py-3">
                              <Badge variant="outline" className="text-xs">{cs.stage}</Badge>
                            </td>
                            <td className="px-4 py-3"><StatusBadge hidden={cs.hidden} /></td>
                            <td className="px-4 py-3">
                              <code className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{url}</code>
                            </td>
                            <td className="px-4 py-3">
                              <Link to={url} target="_blank" className="text-primary hover:underline inline-flex items-center gap-1 text-xs">
                                <ExternalLink className="w-3 h-3" /> Öffnen
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Insights Tab */}
            <TabsContent value="insights">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <TableHeader>#</TableHeader>
                        <TableHeader>Titel</TableHeader>
                        <TableHeader>Typ</TableHeader>
                        <TableHeader>Kategorie</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Links</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleInsights.map((item, i) => (
                        <tr key={item.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 text-xs text-muted-foreground">{i + 1}</td>
                          <td className="px-4 py-3">
                            <span className="text-sm font-medium text-foreground">{item.title.de}</span>
                            <br />
                            <span className="text-xs text-muted-foreground">{item.slug}</span>
                          </td>
                          <td className="px-4 py-3">
                            <Badge variant="outline" className="text-xs">{item.type}</Badge>
                          </td>
                          <td className="px-4 py-3 text-xs text-muted-foreground">{item.category}</td>
                          <td className="px-4 py-3"><StatusBadge hidden={item.hidden} /></td>
                          <td className="px-4 py-3">
                            <Link to={`/insights/${item.slug}`} target="_blank" className="text-primary hover:underline inline-flex items-center gap-1 text-xs">
                              <ExternalLink className="w-3 h-3" /> Öffnen
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ContentRegistry;
