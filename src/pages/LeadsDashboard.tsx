import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download, Building2, Users, TrendingUp, Calendar, BarChart3, LogOut, ShieldAlert, Loader2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AdminUserManagement from '@/components/AdminUserManagement';

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

interface DailyDownload {
  date: string;
  downloads: number;
}

export default function LeadsDashboard() {
  const navigate = useNavigate();
  const { user, loading: authLoading, isAdmin, signOut } = useAuth();
  const [stats, setStats] = useState<LeadStats>({
    totalDownloads: 0,
    uniqueCompanies: 0,
    todayDownloads: 0,
    weekDownloads: 0
  });
  const [topCompanies, setTopCompanies] = useState<CompanyCount[]>([]);
  const [recentLeads, setRecentLeads] = useState<RecentLead[]>([]);
  const [dailyDownloads, setDailyDownloads] = useState<DailyDownload[]>([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchDashboardData();
    } else if (user && !authLoading) {
      setLoading(false);
    }
  }, [user, isAdmin, authLoading]);

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

        // Calculate daily downloads for chart (last 30 days)
        const dailyCounts: Record<string, number> = {};
        const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
        
        // Initialize all days with 0
        for (let d = new Date(thirtyDaysAgo); d <= today; d.setDate(d.getDate() + 1)) {
          const dateKey = d.toISOString().split('T')[0];
          dailyCounts[dateKey] = 0;
        }
        
        // Count actual downloads
        leads.forEach(lead => {
          const dateKey = new Date(lead.created_at).toISOString().split('T')[0];
          if (dailyCounts[dateKey] !== undefined) {
            dailyCounts[dateKey]++;
          }
        });

        const chartData = Object.entries(dailyCounts)
          .map(([date, downloads]) => ({
            date: new Date(date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }),
            downloads
          }))
          .sort((a, b) => a.date.localeCompare(b.date));

        setStats({
          totalDownloads: leads.length,
          uniqueCompanies,
          todayDownloads,
          weekDownloads
        });
        setTopCompanies(sortedCompanies);
        setRecentLeads(leads.slice(0, 10));
        setDailyDownloads(chartData);
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

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Show access denied if not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-24 flex items-center justify-center">
          <Card className="w-full max-w-md text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <ShieldAlert className="h-6 w-6 text-destructive" />
              </div>
              <CardTitle>Zugriff verweigert</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Sie haben keine Berechtigung, auf dieses Dashboard zuzugreifen. Bitte kontaktieren Sie einen Administrator.
              </p>
              <Button onClick={handleSignOut} variant="outline" className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                Abmelden
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Lead Analytics Dashboard</h1>
            <p className="text-muted-foreground">Übersicht der Playbook-Downloads und Lead-Daten</p>
          </div>
          <Button onClick={handleSignOut} variant="outline" size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Abmelden
          </Button>
        </div>

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

        {/* Downloads Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Downloads der letzten 30 Tage
            </CardTitle>
          </CardHeader>
          <CardContent>
            {dailyDownloads.length > 0 ? (
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyDownloads} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorDownloads" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }} 
                      tickLine={false}
                      axisLine={false}
                      className="text-muted-foreground"
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }} 
                      tickLine={false}
                      axisLine={false}
                      allowDecimals={false}
                      className="text-muted-foreground"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="downloads" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      fill="url(#colorDownloads)" 
                      name="Downloads"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                Noch keine Daten für den Zeitraum vorhanden
              </p>
            )}
          </CardContent>
        </Card>

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

        {/* Admin User Management */}
        <div className="mt-8">
          <AdminUserManagement currentUserId={user?.id || ''} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
