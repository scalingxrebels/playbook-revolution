import { Search, Rocket, Settings, Bot, ArrowRightLeft, Briefcase, LucideIcon } from 'lucide-react';

export type InsightType = 'article' | 'event' | 'case-study';

export interface InsightCategory {
  id: string;
  label: { en: string; de: string };
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
  hidden?: boolean;
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
  hidden?: boolean;
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
  hidden?: boolean;
}

export type InsightItem = InsightArticle | InsightEvent | InsightCaseStudy;

// ============================================================
// 6 CATEGORIES — aligned with Solutions
// ============================================================

export type InsightCategoryId = 'insights-and-levers' | 'growth-engines' | 'scaling-systems' | 'ai-orchestration' | 'translating-strategy' | 'portfolio';

export const insightCategories: InsightCategory[] = [
  { id: 'all', label: { en: 'All', de: 'Alle' } },
  { id: 'insights-and-levers', label: { en: 'Insights & Levers', de: 'Insights & Levers' } },
  { id: 'growth-engines', label: { en: 'Growth Engines', de: 'Growth Engines' } },
  { id: 'scaling-systems', label: { en: 'Scaling Systems', de: 'Scaling Systems' } },
  { id: 'ai-orchestration', label: { en: 'AI Orchestration', de: 'AI Orchestration' } },
  { id: 'translating-strategy', label: { en: 'Translating Strategy', de: 'Translating Strategy' } },
  { id: 'portfolio', label: { en: 'Portfolio', de: 'Portfolio' } },
];

export const getCategoryById = (id: string): InsightCategory | undefined =>
  insightCategories.find(c => c.id === id);

export const getCategoryBadgeColor = (id: string): string => {
  if (id === 'ai-orchestration') return 'bg-amber-500/10 text-amber-500';
  return 'bg-primary/10 text-primary';
};

export const getCategoryAccentClass = (id: string): string => {
  if (id === 'ai-orchestration') return 'text-amber-500';
  return 'text-primary';
};

// ============================================================
// CATEGORY TILES — for Category Navigation section
// ============================================================

export interface InsightCategoryTile {
  id: InsightCategoryId;
  labelEn: string;
  labelDe: string;
  headlineEn: string;
  headlineDe: string;
  bodyEn: string;
  bodyDe: string;
  icon: LucideIcon;
  route: string;
  // Hero copy for category pages
  hero: {
    overlineEn: string;
    overlineDe: string;
    h1En: string;
    h1De: string;
    sublineEn: string;
    sublineDe: string;
  };
}

export const insightCategoryTiles: InsightCategoryTile[] = [
  {
    id: 'insights-and-levers',
    labelEn: 'Insights & Levers',
    labelDe: 'Insights & Levers',
    headlineEn: 'Finding the right lever.',
    headlineDe: 'Den richtigen Hebel finden.',
    bodyEn: 'Before the conversation begins.',
    bodyDe: 'Bevor das Gespräch beginnt.',
    icon: Search,
    route: '/insights/insights-and-levers',
    hero: {
      overlineEn: 'INSIGHTS & LEVERS',
      overlineDe: 'INSIGHTS & LEVERS',
      h1En: 'Finding the right lever.',
      h1De: 'Den richtigen Hebel finden.',
      sublineEn: 'Before the conversation begins, we have a hypothesis. M1 is the first mechanism: We see what others don\'t. That\'s the lever — everything else is execution.',
      sublineDe: 'Bevor das Gespräch beginnt, haben wir eine Hypothese. M1 ist der erste Mechanismus: Wir sehen was andere nicht sehen. Das ist der Hebel — alles andere ist Ausführung.',
    },
  },
  {
    id: 'growth-engines',
    labelEn: 'Growth Engines',
    labelDe: 'Growth Engines',
    headlineEn: 'GTM, Revenue, Sales, Product.',
    headlineDe: 'GTM, Revenue, Sales, Product.',
    bodyEn: 'Growth as a system — not a tactic.',
    bodyDe: 'Wachstum als System — nicht als Taktik.',
    icon: Rocket,
    route: '/insights/growth-engines',
    hero: {
      overlineEn: 'GROWTH ENGINES',
      overlineDe: 'GROWTH ENGINES',
      h1En: 'Growth as a system.',
      h1De: 'Wachstum als System.',
      sublineEn: 'GTM, Revenue, Sales, Product — not as silos. As a connected system that works. That\'s the difference between tactic and mechanism.',
      sublineDe: 'GTM, Revenue, Sales, Product — nicht als Silos. Als zusammenhängendes System, das funktioniert. Das ist der Unterschied zwischen Taktik und Mechanismus.',
    },
  },
  {
    id: 'scaling-systems',
    labelEn: 'Scaling Systems',
    labelDe: 'Scaling Systems',
    headlineEn: 'Ops, Finance, Talent, Data.',
    headlineDe: 'Ops, Finance, Talent, Data.',
    bodyEn: 'The infrastructure behind growth.',
    bodyDe: 'Die Infrastruktur hinter dem Wachstum.',
    icon: Settings,
    route: '/insights/scaling-systems',
    hero: {
      overlineEn: 'SCALING SYSTEMS',
      overlineDe: 'SCALING SYSTEMS',
      h1En: 'The infrastructure behind growth.',
      h1De: 'Die Infrastruktur hinter dem Wachstum.',
      sublineEn: 'Ops, Finance, Talent, Data/Tech — the foundation. Without functioning systems, every growth breaks down. We build what carries.',
      sublineDe: 'Ops, Finance, Talent, Data/Tech — das Fundament. Ohne funktionierende Systeme bricht jedes Wachstum zusammen. Wir bauen was trägt.',
    },
  },
  {
    id: 'ai-orchestration',
    labelEn: 'AI Orchestration',
    labelDe: 'AI Orchestration',
    headlineEn: 'AI as structural advantage.',
    headlineDe: 'AI als struktureller Vorteil.',
    bodyEn: 'Not as a tool. As a multiplier.',
    bodyDe: 'Nicht als Tool. Als Multiplier.',
    icon: Bot,
    route: '/insights/ai-orchestration',
    hero: {
      overlineEn: 'AI ORCHESTRATION',
      overlineDe: 'AI ORCHESTRATION',
      h1En: 'AI as structural advantage.',
      h1De: 'AI als struktureller Vorteil.',
      sublineEn: 'Not as a tool. As a multiplier on M1–M3. AI Orchestration makes hypotheses sharper, translation faster, synthesis more complete. That\'s the difference.',
      sublineDe: 'Nicht als Tool. Als Multiplier auf M1–M3. AI Orchestration macht Hypothesen schärfer, Übersetzung schneller, Synthese vollständiger. Das ist der Unterschied.',
    },
  },
  {
    id: 'translating-strategy',
    labelEn: 'Translating Strategy',
    labelDe: 'Translating Strategy',
    headlineEn: 'Translating strategy into systems.',
    headlineDe: 'Strategie in Systeme übersetzen.',
    bodyEn: 'From slide deck to operational reality.',
    bodyDe: 'Vom Slide Deck in die operative Realität.',
    icon: ArrowRightLeft,
    route: '/insights/translating-strategy',
    hero: {
      overlineEn: 'TRANSLATING STRATEGY',
      overlineDe: 'TRANSLATING STRATEGY',
      h1En: 'Strategy that truly works.',
      h1De: 'Strategie, die wirklich wirkt.',
      sublineEn: 'From slide deck to operational reality. Strategy doesn\'t fail at thinking — it fails at translation. M2 is the mechanism that changes that.',
      sublineDe: 'Vom Slide Deck in die operative Realität. Strategie scheitert nicht am Denken — sie scheitert an der Übersetzung. M2 ist der Mechanismus, der das ändert.',
    },
  },
  {
    id: 'portfolio',
    labelEn: 'Portfolio',
    labelDe: 'Portfolio',
    headlineEn: 'VC/PE & Portfolio Transformation.',
    headlineDe: 'VC/PE & Portfolio-Transformation.',
    bodyEn: 'AI-native scaling for portfolio companies.',
    bodyDe: 'AI-Native Skalierung für Portfolio-Unternehmen.',
    icon: Briefcase,
    route: '/insights/portfolio',
    hero: {
      overlineEn: 'PORTFOLIO',
      overlineDe: 'PORTFOLIO',
      h1En: 'AI-native scaling for portfolios.',
      h1De: 'AI-Native Skalierung für Portfolios.',
      sublineEn: 'VC/PE companies looking to transform their portfolio companies. Not with consulting. With mechanisms that work. Fast. Measurable. Without dependency.',
      sublineDe: 'VC/PE-Unternehmen, die ihre Portfolio-Companies transformieren wollen. Nicht mit Beratung. Mit Mechanismen, die funktionieren. Schnell. Messbar. Ohne Abhängigkeit.',
    },
  },
];

// ============================================================
// SAMPLE ARTICLES — re-tagged to 6 categories
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
    category: 'scaling-systems',
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
    category: 'scaling-systems',
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
    category: 'ai-orchestration',
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
];

// Visible insights (excludes hidden)
export const visibleInsights = sampleInsights.filter(i => !i.hidden);

// Helper: count articles per category
export const getArticleCountByCategory = (categoryId: string): number => {
  return sampleInsights.filter(i => i.type === 'article' && !i.hidden && i.category === categoryId).length;
};
