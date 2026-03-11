export type InsightType = 'article' | 'event' | 'case-study';

export interface InsightCategory {
  id: string;
  label: { en: string; de: string };
  color: string; // tailwind border/badge color class
}

export interface InsightReactionCounts {
  fire: number;
  lightbulb: number;
  thinking: number;
}

export interface InsightArticle {
  id: string;
  type: 'article';
  slug: string;
  category: string;
  title: { en: string; de: string };
  teaser: { en: string; de: string };
  author: string;
  authorRole: string;
  date: string;
  readingTime: number;
  featured?: boolean;
  reactions: InsightReactionCounts;
}

export interface InsightEvent {
  id: string;
  type: 'event';
  slug: string;
  category: string;
  eventType: 'webinar' | 'live-qa' | 'workshop' | 'keynote';
  title: { en: string; de: string };
  description: { en: string; de: string };
  speaker: string;
  date: string;
  time: string;
  duration: string;
  capacity: number;
  registrations: number;
  isFree: boolean;
  isUpcoming: boolean;
  featured?: boolean;
}

export interface InsightCaseStudy {
  id: string;
  type: 'case-study';
  slug: string;
  category: string;
  title: { en: string; de: string };
  teaser: { en: string; de: string };
  persona: string;
  readingTime: number;
  isAnonymized: boolean;
  reactions: InsightReactionCounts;
}

export type InsightItem = InsightArticle | InsightEvent | InsightCaseStudy;

export const insightCategories: InsightCategory[] = [
  { id: 'all', label: { en: 'All', de: 'Alle' }, color: 'border-primary' },
  { id: 'growth-engines', label: { en: 'Growth Engines', de: 'Growth Engines' }, color: 'border-emerald-500' },
  { id: 'operating-systems', label: { en: 'Operating Systems', de: 'Operating Systems' }, color: 'border-blue-500' },
  { id: 'board-governance', label: { en: 'Board & Governance', de: 'Board & Governance' }, color: 'border-amber-500' },
  { id: 'ai-native', label: { en: 'AI-Native', de: 'AI-Native' }, color: 'border-violet-500' },
  { id: 'portfolio', label: { en: 'Portfolio', de: 'Portfolio' }, color: 'border-rose-500' },
  { id: 'strategic-capabilities', label: { en: 'Strategic Capabilities', de: 'Strategic Capabilities' }, color: 'border-cyan-500' },
  { id: 'playbooks', label: { en: 'Playbooks', de: 'Playbooks' }, color: 'border-indigo-500' },
  { id: 'case-studies', label: { en: 'Case Studies', de: 'Case Studies' }, color: 'border-orange-500' },
];

export const getCategoryById = (id: string): InsightCategory | undefined =>
  insightCategories.find(c => c.id === id);

export const getCategoryColor = (id: string): string => {
  const cat = getCategoryById(id);
  return cat?.color || 'border-primary';
};

export const getCategoryBadgeColor = (id: string): string => {
  const map: Record<string, string> = {
    'growth-engines': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    'operating-systems': 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    'board-governance': 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    'ai-native': 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
    'portfolio': 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    'strategic-capabilities': 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    'playbooks': 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    'case-studies': 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  };
  return map[id] || 'bg-primary/10 text-primary';
};

// ============================================================
// SAMPLE DATA — Replace with real content later
// ============================================================

export const sampleInsights: InsightItem[] = [
  {
    id: 'article-1',
    type: 'article',
    slug: 'cac-crisis-ki-lead-scoring',
    category: 'growth-engines',
    title: {
      en: 'How We Cut CAC by 60% with AI-Powered Lead Scoring',
      de: 'Wie wir CAC um 60% gesenkt haben mit AI-powered Lead Scoring',
    },
    teaser: {
      en: 'Most Series B SaaS companies burn cash on unqualified leads. Here\'s the exact system we built to fix it — and the 3 metrics that actually matter.',
      de: 'Die meisten Series-B-SaaS-Unternehmen verbrennen Geld mit unqualifizierten Leads. Hier ist das System, das wir gebaut haben — und die 3 Metriken, die wirklich zählen.',
    },
    author: 'Michel Lason',
    authorRole: 'Founder & Managing Partner',
    date: '2026-03-08',
    readingTime: 8,
    featured: true,
    reactions: { fire: 47, lightbulb: 23, thinking: 8 },
  },
  {
    id: 'article-2',
    type: 'article',
    slug: 'scaling-os-coordination-cost',
    category: 'operating-systems',
    title: {
      en: 'The Hidden Cost That Kills Scaling: Coordination Tax',
      de: 'Der versteckte Kostenfaktor, der Skalierung killt: Coordination Tax',
    },
    teaser: {
      en: 'At 50 employees, coordination cost eats 40% of your engineering capacity. At 200, it\'s 60%. Here\'s how AI-native companies reduce it to under 15%.',
      de: 'Bei 50 Mitarbeitern frisst Coordination Cost 40% deiner Engineering-Kapazität. Bei 200 sind es 60%. So reduzieren AI-native Unternehmen sie auf unter 15%.',
    },
    author: 'Michel Lason',
    authorRole: 'Founder & Managing Partner',
    date: '2026-03-01',
    readingTime: 12,
    reactions: { fire: 31, lightbulb: 18, thinking: 5 },
  },
  {
    id: 'article-3',
    type: 'article',
    slug: 'board-reporting-investor-confidence',
    category: 'board-governance',
    title: {
      en: 'Board Reporting That Actually Builds Investor Confidence',
      de: 'Board Reporting, das tatsächlich Investor Confidence aufbaut',
    },
    teaser: {
      en: 'Your board deck shouldn\'t be a data dump. The best Series B CEOs use a 3-layer framework that turns reporting into a strategic advantage.',
      de: 'Dein Board Deck sollte kein Datengrab sein. Die besten Series-B-CEOs nutzen ein 3-Layer-Framework, das Reporting in einen strategischen Vorteil verwandelt.',
    },
    author: 'Michel Lason',
    authorRole: 'Founder & Managing Partner',
    date: '2026-02-22',
    readingTime: 6,
    reactions: { fire: 19, lightbulb: 12, thinking: 3 },
  },
  {
    id: 'article-4',
    type: 'article',
    slug: 'ai-native-revenue-per-employee',
    category: 'ai-native',
    title: {
      en: 'AI-Native Companies Generate 3-5x Revenue Per Employee. Here\'s How.',
      de: 'AI-Native Unternehmen generieren 3-5x Revenue pro Mitarbeiter. So geht\'s.',
    },
    teaser: {
      en: 'We studied 22 AI-native companies and found a clear pattern: the ones that scale fastest don\'t just add AI tools — they redesign their operating model.',
      de: 'Wir haben 22 AI-native Unternehmen untersucht und ein klares Muster gefunden: Die schnellsten Skalierer fügen nicht einfach AI-Tools hinzu — sie redesignen ihr Operating Model.',
    },
    author: 'Alban Halili',
    authorRole: 'AI & Growth',
    date: '2026-02-15',
    readingTime: 10,
    reactions: { fire: 89, lightbulb: 41, thinking: 12 },
  },
  {
    id: 'event-1',
    type: 'event',
    slug: 'cac-crisis-live-qa',
    category: 'growth-engines',
    eventType: 'live-qa',
    title: {
      en: 'CAC Crisis: Live Q&A with Michel Lason',
      de: 'CAC Crisis: Live Q&A mit Michel Lason',
    },
    description: {
      en: 'Bring your CAC challenges. 30 minutes of unfiltered answers on reducing customer acquisition cost in a down market.',
      de: 'Bring deine CAC-Herausforderungen mit. 30 Minuten ungefilterte Antworten zur Senkung der Kundenakquisitionskosten in einem schwierigen Markt.',
    },
    speaker: 'Michel Lason',
    date: '2026-03-24',
    time: '17:00 CET',
    duration: '30 min',
    capacity: 300,
    registrations: 234,
    isFree: true,
    isUpcoming: true,
    featured: true,
  },
  {
    id: 'case-study-1',
    type: 'case-study',
    slug: 'series-b-saas-cac-turnaround',
    category: 'case-studies',
    title: {
      en: 'Series B SaaS: CAC €12k → €5k in 12 Weeks',
      de: 'Series B SaaS: CAC €12k → €5k in 12 Wochen',
    },
    teaser: {
      en: 'A B2B SaaS company with 80 employees was bleeding cash on outbound. We rebuilt their lead scoring, restructured their GTM motion, and cut CAC by 58%.',
      de: 'Ein B2B-SaaS-Unternehmen mit 80 Mitarbeitern verbrannte Geld im Outbound. Wir haben ihr Lead Scoring neu aufgebaut, ihre GTM Motion restructuriert und CAC um 58% gesenkt.',
    },
    persona: 'CEO',
    readingTime: 6,
    isAnonymized: true,
    reactions: { fire: 89, lightbulb: 41, thinking: 12 },
  },
];
