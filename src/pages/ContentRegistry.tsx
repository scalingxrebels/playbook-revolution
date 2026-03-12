import React, { useState, useMemo } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useContentVisibility } from '@/hooks/useContentVisibility';
import Navigation from '@/components/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { LayoutGrid, BookOpen, Lightbulb, FolderOpen, Loader2, Eye, Globe } from 'lucide-react';
import ContentPreviewModal, { type PreviewMode } from '@/components/registry/ContentPreviewModal';
import { solutionTiles } from '@/data/solutionTiles';
import { playbooks } from '@/data/playbooks';
import { caseStudies } from '@/data/cases';
import { sampleInsights } from '@/data/insights';

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 py-3 border-b border-border">
    {children}
  </th>
);

const ContentRegistry: React.FC = () => {
  const { user, loading, isAdmin } = useAuth();
  const { mergeVisibility, toggleVisibility, isLoading: visLoading } = useContentVisibility();
  const [activeTab, setActiveTab] = useState('solutions');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [previewModal, setPreviewModal] = useState<{
    open: boolean;
    mode: PreviewMode;
    contentType: 'solution' | 'playbook' | 'case' | 'insight';
    item: any;
  }>({ open: false, mode: 'card', contentType: 'solution', item: null });

  const openPreview = (mode: PreviewMode, contentType: 'solution' | 'playbook' | 'case' | 'insight', item: any) => {
    setPreviewModal({ open: true, mode, contentType, item });
  };

  // Merge DB overrides into static data
  const mergedSolutions = useMemo(() => mergeVisibility(solutionTiles, 'solution', t => t.slug), [mergeVisibility]);
  const mergedPlaybooks = useMemo(() => mergeVisibility(playbooks, 'playbook', p => p.slug), [mergeVisibility]);
  const mergedCases = useMemo(() => mergeVisibility(caseStudies, 'case', c => c.slug), [mergeVisibility]);
  const mergedInsights = useMemo(() => mergeVisibility(sampleInsights, 'insight', i => i.slug), [mergeVisibility]);

  const filterByStatus = <T extends { hidden: boolean }>(items: T[]) => {
    if (statusFilter === 'live') return items.filter(i => !i.hidden);
    if (statusFilter === 'hidden') return items.filter(i => i.hidden);
    return items;
  };

  const filteredSolutions = useMemo(() => filterByStatus(mergedSolutions), [mergedSolutions, statusFilter]);
  const filteredPlaybooks = useMemo(() => filterByStatus(mergedPlaybooks), [mergedPlaybooks, statusFilter]);
  const filteredCases = useMemo(() => filterByStatus(mergedCases), [mergedCases, statusFilter]);
  const filteredInsights = useMemo(() => filterByStatus(mergedInsights), [mergedInsights, statusFilter]);

  // Summary counts
  const liveCount = (items: { hidden: boolean }[]) => items.filter(i => !i.hidden).length;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth?returnTo=/content-registry" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-3">Zugriff verweigert</h1>
            <p className="text-sm text-muted-foreground mb-6">
              Du bist eingeloggt, hast aber keine Admin-Berechtigung für die Content Registry.
            </p>
            <Link to="/" className="text-primary hover:underline text-sm">
              Zur Startseite
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-foreground">Content Registry</h1>
              {visLoading && <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />}
            </div>
            <p className="text-sm text-muted-foreground">
              Übersicht aller Inhalte. Status per Toggle umschalten – Änderungen werden sofort gespeichert.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Solutions', icon: LayoutGrid, total: mergedSolutions.length, live: liveCount(mergedSolutions) },
              { label: 'Playbooks', icon: BookOpen, total: mergedPlaybooks.length, live: liveCount(mergedPlaybooks) },
              { label: 'Cases', icon: FolderOpen, total: mergedCases.length, live: liveCount(mergedCases) },
              { label: 'Insights', icon: Lightbulb, total: mergedInsights.length, live: liveCount(mergedInsights) },
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

          {/* Filter */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-muted-foreground">Status:</span>
            <ToggleGroup type="single" value={statusFilter} onValueChange={(v) => v && setStatusFilter(v)} size="sm">
              <ToggleGroupItem value="all" className="text-xs px-3">Alle</ToggleGroupItem>
              <ToggleGroupItem value="live" className="text-xs px-3">Live</ToggleGroupItem>
              <ToggleGroupItem value="hidden" className="text-xs px-3">Hidden</ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="solutions">Solutions ({filteredSolutions.length})</TabsTrigger>
              <TabsTrigger value="playbooks">Playbooks ({filteredPlaybooks.length})</TabsTrigger>
              <TabsTrigger value="cases">Cases ({filteredCases.length})</TabsTrigger>
              <TabsTrigger value="insights">Insights ({filteredInsights.length})</TabsTrigger>
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
                        <TableHeader>Sichtbar</TableHeader>
                        <TableHeader>Landing Page</TableHeader>
                        <TableHeader>Links</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSolutions.map((tile, i) => (
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
                          <td className="px-4 py-3">
                            <Switch
                              checked={!tile.hidden}
                              onCheckedChange={(checked) => toggleVisibility('solution', tile.slug, !checked)}
                            />
                          </td>
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
                        <TableHeader>Sichtbar</TableHeader>
                        <TableHeader>Landing Page</TableHeader>
                        <TableHeader>Links</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPlaybooks.map((pb, i) => {
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
                            <td className="px-4 py-3">
                              <Switch
                                checked={!pb.hidden}
                                onCheckedChange={(checked) => toggleVisibility('playbook', pb.slug, !checked)}
                              />
                            </td>
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
                        <TableHeader>Sichtbar</TableHeader>
                        <TableHeader>Landing Page</TableHeader>
                        <TableHeader>Links</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCases.map((cs, i) => {
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
                            <td className="px-4 py-3">
                              <Switch
                                checked={!cs.hidden}
                                onCheckedChange={(checked) => toggleVisibility('case', cs.slug, !checked)}
                              />
                            </td>
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
                        <TableHeader>Sichtbar</TableHeader>
                        <TableHeader>Landing Page</TableHeader>
                        <TableHeader>Links</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInsights.map((item, i) => {
                        const url = `/insights/${item.slug}`;
                        return (
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
                            <td className="px-4 py-3">
                              <Switch
                                checked={!item.hidden}
                                onCheckedChange={(checked) => toggleVisibility('insight', item.slug, !checked)}
                              />
                            </td>
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
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ContentRegistry;
