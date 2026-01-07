import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, Building2, Users, TrendingUp, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface LeadStats {
  totalDownloads: number;
  uniqueCompanies: number;
  todayDownloads: number;
  weekDownloads: number;
}

interface CompanyCount {
  company: string;
  count: number;
}

interface RecentLead {
  id: string;
  email: string;
  name: string | null;
  company: string | null;
  created_at: string;
}

export default function LeadsDashboard() {
  const [stats, setStats] = useState<LeadStats>({
    totalDownloads: 0,
    uniqueCompanies: 0,
    todayDownloads: 0,
    weekDownloads: 0
  });
  const [topCompanies, setTopCompanies] = useState<CompanyCount[]>([]);
  const [recentLeads, setRecentLeads] = useState<RecentLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch all leads
      const { data: leads, error } = await supabase
        .from('playbook_leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (leads) {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

        // Calculate stats
        const todayDownloads = leads.filter(l => new Date(l.created_at) >= today).length;
        const weekDownloads = leads.filter(l => new Date(l.created_at) >= weekAgo).length;

        // Count companies
        const companyCounts: Record<string, number> = {};
        leads.forEach(lead => {
          const company = lead.company || 'Nicht angegeben';
          companyCounts[company] = (companyCounts[company] || 0) + 1;
        });

        const uniqueCompanies = Object.keys(companyCounts).filter(c => c !== 'Nicht angegeben').length;

        const sortedCompanies = Object.entries(companyCounts)
          .map(([company, count]) => ({ company, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 10);

        setStats({
          totalDownloads: leads.length,
          uniqueCompanies,
          todayDownloads,
          weekDownloads
        });
        setTopCompanies(sortedCompanies);
        setRecentLeads(leads.slice(0, 10));
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Lead Analytics Dashboard</h1>
          <p className="text-muted-foreground">Übersicht der Playbook-Downloads und Lead-Daten</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Gesamt Downloads
                  </CardTitle>
                  <Download className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.totalDownloads}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Unternehmen
                  </CardTitle>
                  <Building2 className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.uniqueCompanies}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Heute
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.todayDownloads}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Diese Woche
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.weekDownloads}</div>
                </CardContent>
              </Card>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Companies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Top Unternehmen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {topCompanies.length > 0 ? (
                    <div className="space-y-3">
                      {topCompanies.map((item, index) => (
                        <div key={item.company} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-muted-foreground w-6">
                              {index + 1}.
                            </span>
                            <span className="font-medium">{item.company}</span>
                          </div>
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                            {item.count} {item.count === 1 ? 'Download' : 'Downloads'}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      Noch keine Daten vorhanden
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Recent Leads */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Neueste Leads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {recentLeads.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>E-Mail</TableHead>
                          <TableHead>Unternehmen</TableHead>
                          <TableHead className="text-right">Datum</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentLeads.map((lead) => (
                          <TableRow key={lead.id}>
                            <TableCell className="font-medium truncate max-w-[150px]">
                              {lead.email}
                            </TableCell>
                            <TableCell className="truncate max-w-[100px]">
                              {lead.company || '–'}
                            </TableCell>
                            <TableCell className="text-right text-sm text-muted-foreground">
                              {formatDate(lead.created_at)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      Noch keine Leads vorhanden
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
