import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle 
} from '@/components/ui/dialog';
import SharedHero from '@/components/shared/SharedHero';
import { 
  MessageSquare, ThumbsUp, Bookmark, Share2, Search, 
  Calendar, Users, Video, Award, TrendingUp, CheckCircle2,
  Clock, Star, ArrowUp, MessageCircle, Send, User
} from 'lucide-react';
import { toast } from 'sonner';

interface Reply {
  id: string;
  author: string;
  authorRole: string;
  content: string;
  timestamp: string;
  upvotes: number;
  isExpert?: boolean;
}

interface ForumPost {
  id: string;
  category: string;
  title: string;
  author: string;
  authorRole: string;
  content: string;
  fullContent?: string;
  replies: number;
  upvotes: number;
  views: number;
  timestamp: string;
  tags: string[];
  isExpert?: boolean;
  replyThread?: Reply[];
}

interface QAItem {
  id: string;
  question: string;
  author: string;
  answers: number;
  upvotes: number;
  views: number;
  timestamp: string;
  tags: string[];
  hasAcceptedAnswer: boolean;
  topAnswer?: {
    author: string;
    content: string;
    upvotes: number;
    isExpert: boolean;
  };
}

interface Event {
  id: string;
  type: 'webinar' | 'meetup' | 'conference' | 'office-hours';
  title: string;
  date: string;
  time: string;
  speaker: string;
  attendees: number;
  description: string;
}

interface BestPractice {
  id: string;
  title: string;
  category: string;
  author: string;
  upvotes: number;
  verified: boolean;
}

const communityStats = [
  { value: '2,847', label: { en: 'Members', de: 'Mitglieder' }, color: 'primary' as const },
  { value: '1,234', label: { en: 'Discussions', de: 'Diskussionen' }, color: 'accent' as const },
  { value: '456', label: { en: 'Answers', de: 'Antworten' }, color: 'primary' as const },
  { value: '89', label: { en: 'Events', de: 'Events' }, color: 'accent' as const },
];

const forumCategories = [
  { id: 'general', name: 'General Discussion', nameDE: 'Allgemeine Diskussion', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 'gtm', name: 'GTM & Sales', nameDE: 'GTM & Sales', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'product', name: 'Product & Engineering', nameDE: 'Product & Engineering', icon: <Award className="w-4 h-4" /> },
  { id: 'ops', name: 'Operations & Finance', nameDE: 'Operations & Finance', icon: <Users className="w-4 h-4" /> },
  { id: 'ai', name: 'AI Tools & Stack', nameDE: 'AI Tools & Stack', icon: <Star className="w-4 h-4" /> },
  { id: 'cases', name: 'Case Studies & Wins', nameDE: 'Case Studies & Wins', icon: <CheckCircle2 className="w-4 h-4" /> }
];

const forumPosts: ForumPost[] = [
  {
    id: '1',
    category: 'gtm',
    title: 'How we reduced CAC by 60% with AI-powered lead scoring',
    author: 'Sarah Chen',
    authorRole: 'VP Sales @ Notion',
    content: 'After implementing our custom AI lead scoring model, we saw dramatic improvements in sales efficiency...',
    fullContent: `After implementing our custom AI lead scoring model, we saw dramatic improvements in sales efficiency. Here's our complete journey:

**The Problem:**
Our sales team was spending 70% of their time on leads that never converted. CAC was climbing, and we knew something had to change.

**Our Solution:**
1. Built a custom ML model trained on 3 years of conversion data
2. Integrated with our CRM for real-time scoring
3. Automated follow-up sequences based on score tiers

**Results after 6 months:**
- CAC reduced by 60%
- Sales cycle shortened by 40%
- Win rate increased from 15% to 28%

Happy to answer any questions about our implementation!`,
    replies: 47,
    upvotes: 234,
    views: 1893,
    timestamp: '2h ago',
    tags: ['AI', 'Sales', 'CAC'],
    isExpert: true,
    replyThread: [
      { id: 'r1', author: 'Tom Harris', authorRole: 'Sales Director @ Stripe', content: 'This is exactly what we needed to hear. What ML framework did you use?', timestamp: '1h ago', upvotes: 23, isExpert: true },
      { id: 'r2', author: 'Sarah Chen', authorRole: 'VP Sales @ Notion', content: 'We used a combination of XGBoost for scoring and GPT-4 for lead enrichment. Happy to share more details!', timestamp: '45m ago', upvotes: 45, isExpert: true },
      { id: 'r3', author: 'Lisa Park', authorRole: 'Growth @ Figma', content: 'How long did the initial training take? We have similar data but unsure about timeline.', timestamp: '30m ago', upvotes: 12 }
    ]
  },
  {
    id: '2',
    category: 'product',
    title: 'AI-Native Product Development: Our 10x Velocity Framework',
    author: 'Marcus Lee',
    authorRole: 'CTO @ Linear',
    content: 'We rebuilt our entire development workflow around AI assistance. Here is what we learned...',
    fullContent: `We rebuilt our entire development workflow around AI assistance. Here's our complete framework:

**The 10x Velocity Framework:**

1. **AI-First Design** - All specs start with AI-generated prototypes
2. **Automated Code Review** - GPT-4 reviews every PR before human review
3. **Smart Testing** - AI generates test cases based on code changes
4. **Continuous Refactoring** - Weekly AI-powered codebase improvements

**Key Metrics:**
- Development velocity increased 10x
- Bug rate decreased by 65%
- Time-to-production reduced from 2 weeks to 2 days

The secret is not replacing developers, but augmenting their capabilities.`,
    replies: 89,
    upvotes: 412,
    views: 3241,
    timestamp: '5h ago',
    tags: ['Product', 'Engineering', 'Velocity'],
    isExpert: true,
    replyThread: [
      { id: 'r1', author: 'Alex Kim', authorRole: 'Engineering Lead @ Vercel', content: 'Incredible results! How did you handle the initial learning curve for the team?', timestamp: '4h ago', upvotes: 34 },
      { id: 'r2', author: 'Marcus Lee', authorRole: 'CTO @ Linear', content: 'We ran 2-week sprints with dedicated AI training. The ROI was visible within the first month.', timestamp: '3h ago', upvotes: 56, isExpert: true }
    ]
  },
  {
    id: '3',
    category: 'ai',
    title: 'Best AI tools for B2B SaaS in 2024 - Complete comparison',
    author: 'Emma Wilson',
    authorRole: 'Founder @ ScaleAI',
    content: 'We tested 50+ AI tools across our stack. Here are the clear winners by category...',
    fullContent: `We tested 50+ AI tools across our stack. Here are the clear winners:

**Sales & Marketing:**
- Lead scoring: Clay + GPT-4
- Content: Jasper for long-form, Copy.ai for ads
- Email: Lavender for personalization

**Engineering:**
- Code: GitHub Copilot + Cursor
- Testing: Testim.io
- Documentation: Mintlify

**Operations:**
- Data: Hex + AI features
- Support: Intercom Fin
- Finance: Runway for FP&A

Each tool was evaluated on: accuracy, speed, integration ease, and ROI.`,
    replies: 156,
    upvotes: 567,
    views: 8923,
    timestamp: '1d ago',
    tags: ['Tools', 'Stack', 'Comparison'],
    replyThread: [
      { id: 'r1', author: 'Mike Chen', authorRole: 'VP Ops @ Notion', content: 'Great list! Any thoughts on AI tools for customer success?', timestamp: '20h ago', upvotes: 28 }
    ]
  },
  {
    id: '4',
    category: 'cases',
    title: 'From €0 to €100M ARR in 18 months: Our journey',
    author: 'David Kim',
    authorRole: 'CEO @ Cursor',
    content: 'A detailed breakdown of our scaling journey and the key decisions that mattered...',
    fullContent: `A detailed breakdown of our scaling journey from €0 to €100M ARR in just 18 months.

**Phase 1: Product-Market Fit (Months 1-3)**
- Focused on developer experience
- Built in public, gathered constant feedback
- Pivoted twice before finding the right angle

**Phase 2: Growth Engine (Months 4-9)**
- Implemented PLG motion
- Viral loops through sharing
- Community-led growth

**Phase 3: Enterprise Scale (Months 10-18)**
- Added enterprise features
- Built sales team
- Expanded globally

**Key Decisions:**
1. Bet everything on AI-native from day 1
2. Hired senior people early
3. Maintained engineering velocity despite growth`,
    replies: 234,
    upvotes: 891,
    views: 12453,
    timestamp: '2d ago',
    tags: ['Case Study', 'Scaling', 'ARR'],
    isExpert: true,
    replyThread: [
      { id: 'r1', author: 'Anna Schmidt', authorRole: 'CEO @ TechScale', content: 'Inspiring story! How did you maintain culture during hypergrowth?', timestamp: '1d ago', upvotes: 67, isExpert: true },
      { id: 'r2', author: 'David Kim', authorRole: 'CEO @ Cursor', content: 'Culture is set by who you hire. We were extremely selective, even when it slowed us down.', timestamp: '1d ago', upvotes: 89, isExpert: true }
    ]
  },
  {
    id: '7',
    category: 'cases',
    title: 'How we achieved 46% CAGR post Series B',
    author: 'Anna Schmidt',
    authorRole: 'CEO @ TechScale',
    content: 'Scaling from €3.6M to €7.7M in 24 months through GTM redesign and AI prototype introduction...',
    fullContent: `Scaling from €3.6M to €7.7M ARR in 24 months. Here's our complete playbook:

**GTM Redesign:**
- Shifted from outbound-heavy to product-led
- Implemented AI-powered qualification
- Built self-serve trial experience

**AI Integration:**
- Introduced AI features that became key differentiators
- Used AI internally for sales and support
- Automated 60% of customer onboarding

**Results:**
- 46% CAGR maintained for 2 years
- CAC:LTV improved from 1:3 to 1:8
- NRR increased to 135%`,
    replies: 89,
    upvotes: 567,
    views: 4521,
    timestamp: '1w ago',
    tags: ['Case Study', 'Series B', 'GTM'],
    isExpert: true,
    replyThread: [
      { id: 'r1', author: 'Max Weber', authorRole: 'CRO @ SaaSCo', content: 'The NRR improvement is impressive. What drove that specifically?', timestamp: '5d ago', upvotes: 34 }
    ]
  },
  {
    id: '8',
    category: 'cases',
    title: '+425k€ New ARR in 6 months: Our GTM-Engine story',
    author: 'Max Weber',
    authorRole: 'CRO @ SaaSCo',
    content: 'Development of a scalable GTM-Engine for a B2B-SaaS-Startup in expansion phase...',
    fullContent: `Building a GTM-Engine that generated €425k new ARR in 6 months.

**The Framework:**
1. **ICP Definition** - Used AI to analyze best customers
2. **Content Engine** - Automated thought leadership
3. **Outbound Machine** - Personalized at scale
4. **Sales Enablement** - AI-assisted demos and proposals

**Tech Stack:**
- Clay for enrichment
- GPT-4 for personalization
- HubSpot for automation
- Gong for intelligence

**Monthly Breakdown:**
- Month 1-2: Foundation (€35k)
- Month 3-4: Optimization (€120k)
- Month 5-6: Scale (€270k)`,
    replies: 156,
    upvotes: 423,
    views: 6789,
    timestamp: '2w ago',
    tags: ['Case Study', 'Revenue', 'GTM-Engine'],
    replyThread: [
      { id: 'r1', author: 'Sarah Chen', authorRole: 'VP Sales @ Notion', content: 'Love the monthly breakdown. How big was the team executing this?', timestamp: '1w ago', upvotes: 45, isExpert: true }
    ]
  },
  {
    id: '5',
    category: 'ops',
    title: 'AI-Native FP&A: How we do 5-day close with 2 people',
    author: 'Jennifer Park',
    authorRole: 'CFO @ Figma',
    content: 'Our finance team is 2 people supporting a $3B company. Here is our entire tech stack...',
    fullContent: `Our finance team of 2 supports a $3B company. Here's how:

**Our Stack:**
- Runway for FP&A and modeling
- Brex for spend management
- Ramp for expense automation
- Hex + AI for ad-hoc analysis

**5-Day Close Process:**
Day 1: Automated data aggregation
Day 2: AI-flagged anomalies review
Day 3: Variance analysis
Day 4: Board deck generation
Day 5: Final review and sign-off

**Key Automations:**
- 95% of journal entries automated
- AI-generated variance explanations
- Automated compliance checks`,
    replies: 78,
    upvotes: 345,
    views: 4521,
    timestamp: '3d ago',
    tags: ['Finance', 'FP&A', 'Automation'],
    isExpert: true,
    replyThread: [
      { id: 'r1', author: 'Tom Wilson', authorRole: 'CFO @ Stripe', content: 'The 5-day close is impressive. What was the biggest challenge in implementation?', timestamp: '2d ago', upvotes: 23, isExpert: true }
    ]
  },
  {
    id: '6',
    category: 'general',
    title: 'Weekly wins thread: Share your scaling victories',
    author: 'Community Team',
    authorRole: 'Moderator',
    content: 'Drop your wins from this week - big or small!',
    fullContent: `Welcome to this week's wins thread! 🎉

Share your scaling victories from this week - whether it's:
- Hit a revenue milestone
- Shipped a key feature
- Improved a metric
- Learned something valuable
- Got great customer feedback

No win is too small. Let's celebrate together and learn from each other!

**Previous Top Wins:**
- @startup_jane: "Crossed €1M ARR this week!"
- @dev_mike: "Reduced deploy time from 30min to 2min"
- @sales_tom: "Closed our biggest deal ever"`,
    replies: 312,
    upvotes: 189,
    views: 2341,
    timestamp: '4h ago',
    tags: ['Community', 'Wins'],
    replyThread: [
      { id: 'r1', author: 'Jane Cooper', authorRole: 'Founder @ StartupX', content: 'Crossed €1M ARR this week! 🎉', timestamp: '3h ago', upvotes: 89 },
      { id: 'r2', author: 'Mike Dev', authorRole: 'CTO @ BuildFast', content: 'Finally shipped our AI feature after 3 months. Users love it!', timestamp: '2h ago', upvotes: 56 },
      { id: 'r3', author: 'Tom Sales', authorRole: 'AE @ ScaleCo', content: 'Closed a 6-figure enterprise deal. Biggest in company history!', timestamp: '1h ago', upvotes: 78 }
    ]
  }
];

const qaItems: QAItem[] = [
  {
    id: '1',
    question: 'What is the optimal θ_index score before scaling from Seed to Series A?',
    author: 'Alex Turner',
    answers: 12,
    upvotes: 89,
    views: 1234,
    timestamp: '3h ago',
    tags: ['θ_index', 'Seed', 'Series A'],
    hasAcceptedAnswer: true,
    topAnswer: {
      author: 'Michel Lason',
      content: 'Based on our research across 22 companies, a θ_index of 0.65+ correlates with successful Series A transitions. Key is having C₁ and C₂ capabilities at Level 2+.',
      upvotes: 67,
      isExpert: true
    }
  },
  {
    id: '2',
    question: 'How to implement AI-native sales without losing personal touch?',
    author: 'Rachel Green',
    answers: 8,
    upvotes: 56,
    views: 892,
    timestamp: '6h ago',
    tags: ['Sales', 'AI', 'Human-in-loop'],
    hasAcceptedAnswer: true,
    topAnswer: {
      author: 'Sarah Chen',
      content: 'The key is AI augmentation, not replacement. We use AI for research, scoring, and follow-up timing, but reps still do all strategic conversations.',
      upvotes: 43,
      isExpert: true
    }
  },
  {
    id: '3',
    question: 'Best practices for AI-native customer success at scale?',
    author: 'Tom Wilson',
    answers: 15,
    upvotes: 78,
    views: 1567,
    timestamp: '1d ago',
    tags: ['CS', 'Scaling', 'AI'],
    hasAcceptedAnswer: false
  },
  {
    id: '4',
    question: 'How do Level 3 companies structure their engineering teams?',
    author: 'Lisa Wang',
    answers: 23,
    upvotes: 145,
    views: 2341,
    timestamp: '2d ago',
    tags: ['Engineering', 'Team Structure', 'Level 3'],
    hasAcceptedAnswer: true
  }
];

const events: Event[] = [
  {
    id: '1',
    type: 'webinar',
    title: 'AI-Native GTM Masterclass',
    date: 'Jan 15, 2026',
    time: '4:00 PM CET',
    speaker: 'Michel Lason',
    attendees: 234,
    description: 'Deep dive into building AI-augmented go-to-market motions'
  },
  {
    id: '2',
    type: 'office-hours',
    title: 'Weekly θ_index Office Hours',
    date: 'Every Thursday',
    time: '5:00 PM CET',
    speaker: 'SXH Team',
    attendees: 45,
    description: 'Live Q&A on scaling diagnostics and playbook implementation'
  },
  {
    id: '3',
    type: 'meetup',
    title: 'AI-Native Founders Berlin',
    date: 'Jan 22, 2026',
    time: '7:00 PM CET',
    speaker: 'Various',
    attendees: 89,
    description: 'Monthly meetup for AI-native startup founders in Berlin'
  },
  {
    id: '4',
    type: 'conference',
    title: 'Scaling Summit 2026',
    date: 'Mar 15-16, 2026',
    time: 'All Day',
    speaker: 'Multiple Speakers',
    attendees: 500,
    description: '2-day conference on AI-native scaling strategies'
  }
];

const bestPractices: BestPractice[] = [
  { id: '1', title: 'AI Lead Scoring Implementation Guide', category: 'GTM', author: 'Community', upvotes: 234, verified: true },
  { id: '2', title: 'Building AI-Native Product Teams', category: 'Product', author: 'Linear Team', upvotes: 189, verified: true },
  { id: '3', title: 'Revenue Operations Automation Playbook', category: 'Ops', author: 'Stripe Team', upvotes: 156, verified: true },
  { id: '4', title: 'AI-Native Hiring Framework', category: 'Talent', author: 'Notion Team', upvotes: 134, verified: true },
  { id: '5', title: 'Customer Health Score Models', category: 'CS', author: 'Intercom Team', upvotes: 123, verified: true },
  { id: '6', title: 'Board Reporting for AI Companies', category: 'Governance', author: 'Community', upvotes: 98, verified: false }
];

const CommunityHub: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('forum');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newReply, setNewReply] = useState('');

  const eventTypeColors: Record<string, string> = {
    'webinar': 'bg-primary/20 text-primary border-primary/30',
    'meetup': 'bg-accent/20 text-accent border-accent/30',
    'conference': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'office-hours': 'bg-green-500/20 text-green-400 border-green-500/30'
  };

  const handleOpenPost = (post: ForumPost) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  const handleReply = (postTitle: string) => {
    toast.info(language === 'de' ? `Antwort auf: ${postTitle}` : `Reply to: ${postTitle}`);
  };

  const handleUpvote = (postTitle: string) => {
    toast.success(language === 'de' ? 'Upvote hinzugefügt!' : 'Upvote added!');
  };

  const handleSave = (postTitle: string) => {
    toast.success(language === 'de' ? 'Gespeichert!' : 'Saved!');
  };

  const handleShare = (postTitle: string) => {
    navigator.clipboard.writeText(window.location.href);
    toast.success(language === 'de' ? 'Link kopiert!' : 'Link copied!');
  };

  const handleSubmitReply = () => {
    if (!newReply.trim()) return;
    toast.success(language === 'de' ? 'Antwort gepostet!' : 'Reply posted!');
    setNewReply('');
  };

  return (
    <section className="pb-16">
      <SharedHero
        overlineEn="Expertise × Speed = Impact"
        overlineDe="Expertise × Speed = Impact"
        headlineLine1En="Scaling Community"
        headlineLine1De="Scaling Community"
        headlineLine2En="Learn from the Best"
        headlineLine2De="Lerne von den Besten"
        subheadlineEn="Connect with AI-Native founders, share learnings, and learn from the best."
        subheadlineDe="Verbinde dich mit AI-Native Founders, teile Learnings und lerne von den Besten."
        stats={communityStats}
      />

      <div className="container max-w-7xl mx-auto px-4">

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-xl mx-auto">
            <TabsTrigger value="forum" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Forum
            </TabsTrigger>
            <TabsTrigger value="qa" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Q&A
            </TabsTrigger>
            <TabsTrigger value="best-practices" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              {language === 'de' ? 'Best Practices' : 'Best Practices'}
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Events
            </TabsTrigger>
          </TabsList>

          {/* Forum Tab */}
          <TabsContent value="forum" className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant="outline"
                className={`cursor-pointer ${selectedCategory === 'all' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </Badge>
              {forumCategories.map(cat => (
                <Badge
                  key={cat.id}
                  variant="outline"
                  className={`cursor-pointer flex items-center gap-1 ${selectedCategory === cat.id ? 'bg-primary text-primary-foreground' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.icon}
                  {language === 'de' ? cat.nameDE : cat.name}
                </Badge>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder={language === 'de' ? 'Diskussionen durchsuchen...' : 'Search discussions...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card"
              />
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {forumPosts
                .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
                .map(post => (
                  <Card key={post.id} className="p-6 glass border-border/50 hover:border-accent/50 transition-all">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center gap-1 text-center min-w-[60px]">
                        <Button variant="ghost" size="sm" className="p-1">
                          <ArrowUp className="w-5 h-5" />
                        </Button>
                        <span className="font-bold text-accent">{post.upvotes}</span>
                        <span className="text-xs text-muted-foreground">{language === 'de' ? 'Stimmen' : 'votes'}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 
                            className="font-bold text-lg hover:text-accent cursor-pointer"
                            onClick={() => handleOpenPost(post)}
                          >
                            {post.title}
                          </h3>
                          {post.isExpert && (
                            <Badge className="bg-accent/20 text-accent border-accent/30">Expert</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.content}</p>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {post.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">{post.author}</span>
                            <span>•</span>
                            <span>{post.authorRole}</span>
                            <span>•</span>
                            <span>{post.timestamp}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" /> {post.replies}
                            </span>
                            <span>{post.views} views</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" onClick={() => handleReply(post.title)}>
                            <MessageSquare className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => handleUpvote(post.title)}>
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Upvote
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => handleSave(post.title)}>
                            <Bookmark className="w-4 h-4 mr-1" />
                            Save
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => handleShare(post.title)}>
                            <Share2 className="w-4 h-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Q&A Tab */}
          <TabsContent value="qa" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{language === 'de' ? 'Fragen & Antworten' : 'Questions & Answers'}</h2>
              <Button className="bg-gradient-accent">
                {language === 'de' ? 'Frage stellen' : 'Ask Question'}
              </Button>
            </div>

            <div className="space-y-4">
              {qaItems.map(item => (
                <Card key={item.id} className="p-6 glass border-border/50 hover:border-accent/50 transition-all">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-1 text-center min-w-[60px]">
                      <span className="font-bold text-lg">{item.upvotes}</span>
                      <span className="text-xs text-muted-foreground">votes</span>
                      <div className={`mt-2 p-2 rounded-lg ${item.hasAcceptedAnswer ? 'bg-green-500/20 text-green-400' : 'bg-muted'}`}>
                        <span className="font-bold text-sm">{item.answers}</span>
                        <p className="text-xs">{language === 'de' ? 'Antworten' : 'answers'}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg hover:text-accent cursor-pointer mb-2">{item.question}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      
                      {item.topAnswer && (
                        <div className="bg-muted/50 rounded-lg p-4 mb-3">
                          <div className="flex items-center gap-2 mb-2">
                            {item.topAnswer.isExpert && (
                              <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">Expert</Badge>
                            )}
                            <span className="font-medium text-sm">{item.topAnswer.author}</span>
                            <span className="text-xs text-muted-foreground">• Top Answer</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.topAnswer.content}</p>
                          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{item.topAnswer.upvotes}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{language === 'de' ? 'Gefragt von' : 'Asked by'} {item.author} • {item.timestamp}</span>
                        <span>{item.views} views</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Best Practices Tab */}
          <TabsContent value="best-practices" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestPractices.map(bp => (
                <Card key={bp.id} className="p-4 glass border-border/50 hover:border-accent/50 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{bp.category}</Badge>
                    {bp.verified && (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <h3 className="font-bold mb-2 hover:text-accent cursor-pointer">{bp.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{bp.author}</span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" /> {bp.upvotes}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {events.map(event => (
                <Card key={event.id} className="p-6 glass border-border/50 hover:border-accent/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={eventTypeColors[event.type]}>
                      {event.type.replace('-', ' ')}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <span className="text-muted-foreground">{language === 'de' ? 'Sprecher:' : 'Speaker:'}</span> {event.speaker}
                    </span>
                    <Button size="sm" className="bg-gradient-accent">
                      {event.type === 'office-hours' 
                        ? (language === 'de' ? 'Teilnehmen' : 'Join')
                        : (language === 'de' ? 'Anmelden' : 'Register')}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Post Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  {selectedPost.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                  {selectedPost.isExpert && (
                    <Badge className="bg-accent/20 text-accent border-accent/30">Expert</Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl">{selectedPost.title}</DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium text-foreground">{selectedPost.author}</span>
                  <span>•</span>
                  <span>{selectedPost.authorRole}</span>
                  <span>•</span>
                  <span>{selectedPost.timestamp}</span>
                </div>
              </DialogHeader>

              {/* Post Content */}
              <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                  {selectedPost.fullContent || selectedPost.content}
                </div>
              </div>

              {/* Post Actions */}
              <div className="flex items-center gap-4 mt-4 py-4 border-y border-border/50">
                <Button size="sm" variant="outline" onClick={() => handleUpvote(selectedPost.title)}>
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {selectedPost.upvotes}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleSave(selectedPost.title)}>
                  <Bookmark className="w-4 h-4 mr-1" />
                  {language === 'de' ? 'Speichern' : 'Save'}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => handleShare(selectedPost.title)}>
                  <Share2 className="w-4 h-4 mr-1" />
                  {language === 'de' ? 'Teilen' : 'Share'}
                </Button>
                <span className="text-sm text-muted-foreground ml-auto">
                  {selectedPost.views} {language === 'de' ? 'Aufrufe' : 'views'}
                </span>
              </div>

              {/* Reply Thread */}
              <div className="mt-4">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  {selectedPost.replies} {language === 'de' ? 'Antworten' : 'Replies'}
                </h4>

                {selectedPost.replyThread && selectedPost.replyThread.length > 0 ? (
                  <div className="space-y-4">
                    {selectedPost.replyThread.map((reply) => (
                      <div key={reply.id} className="p-4 bg-muted/20 rounded-lg border border-border/30">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                            <User className="w-4 h-4 text-accent" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">{reply.author}</span>
                              {reply.isExpert && (
                                <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">Expert</Badge>
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground">{reply.authorRole} • {reply.timestamp}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground ml-10">{reply.content}</p>
                        <div className="flex items-center gap-2 mt-2 ml-10">
                          <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => handleUpvote(reply.author)}>
                            <ThumbsUp className="w-3 h-3 mr-1" />
                            {reply.upvotes}
                          </Button>
                          <Button size="sm" variant="ghost" className="h-7 px-2">
                            <MessageSquare className="w-3 h-3 mr-1" />
                            {language === 'de' ? 'Antworten' : 'Reply'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    {language === 'de' ? 'Noch keine Antworten. Sei der Erste!' : 'No replies yet. Be the first!'}
                  </p>
                )}

                {/* New Reply Input */}
                <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <h5 className="font-medium mb-3">
                    {language === 'de' ? 'Deine Antwort' : 'Your Reply'}
                  </h5>
                  <Textarea
                    placeholder={language === 'de' ? 'Schreibe eine Antwort...' : 'Write a reply...'}
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    className="mb-3 min-h-[100px]"
                  />
                  <Button onClick={handleSubmitReply} className="bg-gradient-accent">
                    <Send className="w-4 h-4 mr-2" />
                    {language === 'de' ? 'Antwort senden' : 'Post Reply'}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CommunityHub;
