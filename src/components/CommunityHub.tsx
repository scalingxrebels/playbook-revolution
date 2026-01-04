import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageSquare, ThumbsUp, Bookmark, Share2, Search, 
  Calendar, Users, Video, Award, TrendingUp, CheckCircle2,
  Clock, Star, ArrowUp, MessageCircle
} from 'lucide-react';

interface ForumPost {
  id: string;
  category: string;
  title: string;
  author: string;
  authorRole: string;
  content: string;
  replies: number;
  upvotes: number;
  views: number;
  timestamp: string;
  tags: string[];
  isExpert?: boolean;
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
    replies: 47,
    upvotes: 234,
    views: 1893,
    timestamp: '2h ago',
    tags: ['AI', 'Sales', 'CAC'],
    isExpert: true
  },
  {
    id: '2',
    category: 'product',
    title: 'AI-Native Product Development: Our 10x Velocity Framework',
    author: 'Marcus Lee',
    authorRole: 'CTO @ Linear',
    content: 'We rebuilt our entire development workflow around AI assistance. Here is what we learned...',
    replies: 89,
    upvotes: 412,
    views: 3241,
    timestamp: '5h ago',
    tags: ['Product', 'Engineering', 'Velocity'],
    isExpert: true
  },
  {
    id: '3',
    category: 'ai',
    title: 'Best AI tools for B2B SaaS in 2024 - Complete comparison',
    author: 'Emma Wilson',
    authorRole: 'Founder @ ScaleAI',
    content: 'We tested 50+ AI tools across our stack. Here are the clear winners by category...',
    replies: 156,
    upvotes: 567,
    views: 8923,
    timestamp: '1d ago',
    tags: ['Tools', 'Stack', 'Comparison']
  },
  {
    id: '4',
    category: 'cases',
    title: 'From €0 to €100M ARR in 18 months: Our journey',
    author: 'David Kim',
    authorRole: 'CEO @ Cursor',
    content: 'A detailed breakdown of our scaling journey and the key decisions that mattered...',
    replies: 234,
    upvotes: 891,
    views: 12453,
    timestamp: '2d ago',
    tags: ['Case Study', 'Scaling', 'ARR'],
    isExpert: true
  },
  {
    id: '5',
    category: 'ops',
    title: 'AI-Native FP&A: How we do 5-day close with 2 people',
    author: 'Jennifer Park',
    authorRole: 'CFO @ Figma',
    content: 'Our finance team is 2 people supporting a $3B company. Here is our entire tech stack...',
    replies: 78,
    upvotes: 345,
    views: 4521,
    timestamp: '3d ago',
    tags: ['Finance', 'FP&A', 'Automation'],
    isExpert: true
  },
  {
    id: '6',
    category: 'general',
    title: 'Weekly wins thread: Share your scaling victories',
    author: 'Community Team',
    authorRole: 'Moderator',
    content: 'Drop your wins from this week - big or small!',
    replies: 312,
    upvotes: 189,
    views: 2341,
    timestamp: '4h ago',
    tags: ['Community', 'Wins']
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

  const eventTypeColors: Record<string, string> = {
    'webinar': 'bg-primary/20 text-primary border-primary/30',
    'meetup': 'bg-accent/20 text-accent border-accent/30',
    'conference': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'office-hours': 'bg-green-500/20 text-green-400 border-green-500/30'
  };

  return (
    <section className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent font-mono">
            {language === 'de' ? 'COMMUNITY' : 'COMMUNITY'}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            {language === 'de' ? 'Scaling Community' : 'Scaling Community'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Verbinde dich mit AI-Native Founders, teile Learnings und lerne von den Besten.'
              : 'Connect with AI-Native founders, share learnings, and learn from the best.'}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 glass text-center">
            <p className="text-2xl font-bold text-accent">2,847</p>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Mitglieder' : 'Members'}</p>
          </Card>
          <Card className="p-4 glass text-center">
            <p className="text-2xl font-bold text-accent">1,234</p>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Diskussionen' : 'Discussions'}</p>
          </Card>
          <Card className="p-4 glass text-center">
            <p className="text-2xl font-bold text-accent">456</p>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Antworten heute' : 'Answers today'}</p>
          </Card>
          <Card className="p-4 glass text-center">
            <p className="text-2xl font-bold text-accent">89</p>
            <p className="text-sm text-muted-foreground">{language === 'de' ? 'Events' : 'Events'}</p>
          </Card>
        </div>

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
                          <h3 className="font-bold text-lg hover:text-accent cursor-pointer">{post.title}</h3>
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
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                          <Button size="sm" variant="ghost">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Upvote
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Bookmark className="w-4 h-4 mr-1" />
                            Save
                          </Button>
                          <Button size="sm" variant="ghost">
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
    </section>
  );
};

export default CommunityHub;
