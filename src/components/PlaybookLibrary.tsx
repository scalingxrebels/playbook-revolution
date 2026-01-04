import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  Search, Filter, BookOpen, Download, Calendar, Clock, 
  Target, TrendingUp, Users, Zap, BarChart3, Settings,
  DollarSign, Brain, Code, Database, Shield, Megaphone,
  X, CheckCircle, ArrowRight, ExternalLink
} from 'lucide-react';

type Dimension = 'GTM' | 'Product' | 'Ops' | 'Finance' | 'Talent' | 'Tech' | 'Data' | 'Culture';
type Capability = 'C₁' | 'C₂' | 'C₃' | 'C₄';
type Stage = 'Seed' | 'Series A' | 'Series B' | 'Series C+';
type Industry = 'B2B SaaS' | 'AI Tools' | 'Marketplaces' | 'Other';

interface Playbook {
  id: string;
  title: string;
  titleDe: string;
  description: string;
  descriptionDe: string;
  dimension: Dimension;
  capabilities: Capability[];
  stage: Stage[];
  industry: Industry[];
  timeline: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  whatYouBuild: string[];
  whatYouBuildDe: string[];
  outcomes: string[];
  outcomesDe: string[];
  caseStudies: string[];
  icon: React.ReactNode;
}

const playbooks: Playbook[] = [
  {
    id: 'ai-native-gtm-sales',
    title: 'AI-Native GTM (Sales-Led)',
    titleDe: 'AI-Native GTM (Sales-Led)',
    description: 'Build an AI-augmented sales motion that scales without linear headcount growth.',
    descriptionDe: 'Baue eine AI-gestützte Sales-Motion, die ohne lineares Headcount-Wachstum skaliert.',
    dimension: 'GTM',
    capabilities: ['C₁', 'C₂'],
    stage: ['Series A', 'Series B'],
    industry: ['B2B SaaS', 'AI Tools'],
    timeline: '8-12 weeks',
    difficulty: 'Medium',
    whatYouBuild: ['AI Lead Scoring System', 'Automated Outreach Sequences', 'Predictive Deal Intelligence', 'AI Sales Copilot'],
    whatYouBuildDe: ['AI Lead Scoring System', 'Automatisierte Outreach-Sequenzen', 'Predictive Deal Intelligence', 'AI Sales Copilot'],
    outcomes: ['+45% Win Rate', '-60% CAC', '3x Pipeline Velocity', '+80% Rep Productivity'],
    outcomesDe: ['+45% Win-Rate', '-60% CAC', '3x Pipeline-Geschwindigkeit', '+80% Rep-Produktivität'],
    caseStudies: ['Harvey', 'Intercom'],
    icon: <Megaphone className="w-6 h-6" />
  },
  {
    id: 'ai-native-gtm-plg',
    title: 'AI-Native GTM (Product-Led)',
    titleDe: 'AI-Native GTM (Product-Led)',
    description: 'Create a self-serve growth engine powered by AI-driven activation and expansion.',
    descriptionDe: 'Erstelle eine Self-Serve Growth Engine mit AI-gesteuerter Aktivierung und Expansion.',
    dimension: 'GTM',
    capabilities: ['C₁', 'C₃'],
    stage: ['Seed', 'Series A'],
    industry: ['B2B SaaS', 'AI Tools'],
    timeline: '6-10 weeks',
    difficulty: 'Hard',
    whatYouBuild: ['AI Onboarding Optimizer', 'Predictive Churn Prevention', 'Automated Upsell Engine', 'Usage-Based Pricing AI'],
    whatYouBuildDe: ['AI Onboarding-Optimierer', 'Predictive Churn-Prävention', 'Automatisierte Upsell-Engine', 'Usage-Based Pricing AI'],
    outcomes: ['+120% Activation', '-40% Churn', '+65% NRR', '10x Signup-to-Paid'],
    outcomesDe: ['+120% Aktivierung', '-40% Churn', '+65% NRR', '10x Signup-to-Paid'],
    caseStudies: ['Cursor', 'Notion', 'Linear'],
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 'ai-native-gtm-clg',
    title: 'AI-Native GTM (Community-Led)',
    titleDe: 'AI-Native GTM (Community-Led)',
    description: 'Build viral community-driven growth with AI-powered engagement and advocacy.',
    descriptionDe: 'Baue virales Community-getriebenes Wachstum mit AI-gestütztem Engagement.',
    dimension: 'GTM',
    capabilities: ['C₂', 'C₃'],
    stage: ['Seed', 'Series A', 'Series B'],
    industry: ['AI Tools', 'Marketplaces'],
    timeline: '10-14 weeks',
    difficulty: 'Medium',
    whatYouBuild: ['AI Community Manager', 'Viral Loop Engine', 'Ambassador Program AI', 'Content Amplification System'],
    whatYouBuildDe: ['AI Community Manager', 'Viral Loop Engine', 'Ambassador-Programm AI', 'Content-Amplification-System'],
    outcomes: ['+200% Organic Growth', '85% CAC Reduction', '+150% Referrals', '5x Community Engagement'],
    outcomesDe: ['+200% Organisches Wachstum', '85% CAC-Reduktion', '+150% Referrals', '5x Community-Engagement'],
    caseStudies: ['Midjourney', 'Figma'],
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 'ai-native-product-velocity',
    title: 'AI-Native Product Velocity',
    titleDe: 'AI-Native Product Velocity',
    description: 'Accelerate product development 10x with AI-augmented engineering and design.',
    descriptionDe: 'Beschleunige Produktentwicklung 10x mit AI-unterstütztem Engineering und Design.',
    dimension: 'Product',
    capabilities: ['C₃', 'C₄'],
    stage: ['Series A', 'Series B', 'Series C+'],
    industry: ['B2B SaaS', 'AI Tools'],
    timeline: '12-16 weeks',
    difficulty: 'Expert',
    whatYouBuild: ['AI Code Review System', 'Automated Testing Pipeline', 'AI Product Copilot', 'Feature Prioritization Engine'],
    whatYouBuildDe: ['AI Code-Review-System', 'Automatisierte Test-Pipeline', 'AI Product Copilot', 'Feature-Priorisierungs-Engine'],
    outcomes: ['10x Deploy Velocity', '-80% Bug Rate', '+300% Feature Output', '-50% Engineering Time'],
    outcomesDe: ['10x Deploy-Geschwindigkeit', '-80% Bug-Rate', '+300% Feature-Output', '-50% Engineering-Zeit'],
    caseStudies: ['Cursor', 'Linear', 'Vercel'],
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 'ai-native-customer-success',
    title: 'AI-Native Customer Success',
    titleDe: 'AI-Native Customer Success',
    description: 'Scale CS operations with AI-driven health scoring and proactive intervention.',
    descriptionDe: 'Skaliere CS-Operationen mit AI-gestütztem Health-Scoring und proaktiver Intervention.',
    dimension: 'GTM',
    capabilities: ['C₂', 'C₃'],
    stage: ['Series A', 'Series B'],
    industry: ['B2B SaaS', 'AI Tools'],
    timeline: '8-12 weeks',
    difficulty: 'Medium',
    whatYouBuild: ['AI Health Score Engine', 'Predictive Churn Model', 'Automated QBR Generator', 'Success Playbook AI'],
    whatYouBuildDe: ['AI Health-Score-Engine', 'Predictive Churn-Modell', 'Automatisierter QBR-Generator', 'Success Playbook AI'],
    outcomes: ['+35% NRR', '-50% Churn', '10x CS Efficiency', '+40% Expansion Revenue'],
    outcomesDe: ['+35% NRR', '-50% Churn', '10x CS-Effizienz', '+40% Expansion-Revenue'],
    caseStudies: ['Intercom', 'Notion'],
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 'ai-native-revops',
    title: 'AI-Native Revenue Operations',
    titleDe: 'AI-Native Revenue Operations',
    description: 'Unify revenue data and automate forecasting with AI-powered RevOps.',
    descriptionDe: 'Vereinheitliche Revenue-Daten und automatisiere Forecasting mit AI-gestützten RevOps.',
    dimension: 'Ops',
    capabilities: ['C₁', 'C₂'],
    stage: ['Series A', 'Series B', 'Series C+'],
    industry: ['B2B SaaS', 'AI Tools'],
    timeline: '10-14 weeks',
    difficulty: 'Hard',
    whatYouBuild: ['AI Forecasting Engine', 'Revenue Intelligence Dashboard', 'Automated Pipeline Analytics', 'Commission AI'],
    whatYouBuildDe: ['AI Forecasting-Engine', 'Revenue-Intelligence-Dashboard', 'Automatisierte Pipeline-Analytics', 'Commission AI'],
    outcomes: ['+95% Forecast Accuracy', '-70% RevOps Time', '+25% Revenue', '3x Reporting Speed'],
    outcomesDe: ['+95% Forecast-Genauigkeit', '-70% RevOps-Zeit', '+25% Revenue', '3x Reporting-Geschwindigkeit'],
    caseStudies: ['Stripe', 'Salesforce'],
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: 'ai-native-operations',
    title: 'AI-Native Operations',
    titleDe: 'AI-Native Operations',
    description: 'Transform operational efficiency with AI-automated workflows and decision systems.',
    descriptionDe: 'Transformiere operative Effizienz mit AI-automatisierten Workflows und Entscheidungssystemen.',
    dimension: 'Ops',
    capabilities: ['C₂', 'C₄'],
    stage: ['Series B', 'Series C+'],
    industry: ['B2B SaaS', 'Marketplaces', 'Other'],
    timeline: '12-16 weeks',
    difficulty: 'Expert',
    whatYouBuild: ['AI Workflow Orchestrator', 'Intelligent Process Mining', 'Automated Decision Engine', 'Operations Copilot'],
    whatYouBuildDe: ['AI Workflow-Orchestrator', 'Intelligentes Process Mining', 'Automatisierte Decision-Engine', 'Operations Copilot'],
    outcomes: ['-60% Operational Cost', '+400% Process Speed', '10x Automation Rate', '-80% Manual Tasks'],
    outcomesDe: ['-60% Operative Kosten', '+400% Prozess-Geschwindigkeit', '10x Automatisierungsrate', '-80% Manuelle Tasks'],
    caseStudies: ['Airbnb', 'Uber'],
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 'ai-native-fpa',
    title: 'AI-Native Finance & FP&A',
    titleDe: 'AI-Native Finance & FP&A',
    description: 'Automate financial planning and analysis with AI-driven insights and forecasting.',
    descriptionDe: 'Automatisiere Finanzplanung und Analyse mit AI-gesteuerten Insights und Forecasting.',
    dimension: 'Finance',
    capabilities: ['C₁', 'C₂'],
    stage: ['Series A', 'Series B', 'Series C+'],
    industry: ['B2B SaaS', 'AI Tools', 'Marketplaces'],
    timeline: '8-12 weeks',
    difficulty: 'Hard',
    whatYouBuild: ['AI Financial Model', 'Automated Reporting Suite', 'Cash Flow Predictor', 'Scenario Planning AI'],
    whatYouBuildDe: ['AI Finanzmodell', 'Automatisierte Reporting-Suite', 'Cash-Flow-Prediktor', 'Szenario-Planungs-AI'],
    outcomes: ['+98% Forecast Accuracy', '-75% Close Time', '5x Planning Speed', 'Real-time Insights'],
    outcomesDe: ['+98% Forecast-Genauigkeit', '-75% Close-Zeit', '5x Planungs-Geschwindigkeit', 'Echtzeit-Insights'],
    caseStudies: ['Stripe', 'Airbnb'],
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    id: 'ai-native-talent',
    title: 'AI-Native Talent & Recruiting',
    titleDe: 'AI-Native Talent & Recruiting',
    description: 'Scale hiring with AI-powered sourcing, screening, and candidate experience.',
    descriptionDe: 'Skaliere Hiring mit AI-gestütztem Sourcing, Screening und Candidate Experience.',
    dimension: 'Talent',
    capabilities: ['C₂', 'C₃'],
    stage: ['Series A', 'Series B'],
    industry: ['B2B SaaS', 'AI Tools', 'Other'],
    timeline: '6-10 weeks',
    difficulty: 'Medium',
    whatYouBuild: ['AI Sourcing Engine', 'Automated Screening System', 'Interview Copilot', 'Culture Fit Predictor'],
    whatYouBuildDe: ['AI Sourcing-Engine', 'Automatisiertes Screening-System', 'Interview Copilot', 'Culture-Fit-Prediktor'],
    outcomes: ['-70% Time-to-Hire', '+60% Candidate Quality', '5x Sourcing Efficiency', '-50% Recruiter Load'],
    outcomesDe: ['-70% Time-to-Hire', '+60% Kandidaten-Qualität', '5x Sourcing-Effizienz', '-50% Recruiter-Last'],
    caseStudies: ['Notion', 'Linear'],
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 'ai-native-tech-arch',
    title: 'AI-Native Tech Architecture',
    titleDe: 'AI-Native Tech Architecture',
    description: 'Design scalable AI-first architecture that grows with your product.',
    descriptionDe: 'Designe skalierbare AI-first-Architektur, die mit deinem Produkt wächst.',
    dimension: 'Tech',
    capabilities: ['C₃', 'C₄'],
    stage: ['Seed', 'Series A', 'Series B'],
    industry: ['AI Tools', 'B2B SaaS'],
    timeline: '14-20 weeks',
    difficulty: 'Expert',
    whatYouBuild: ['AI Infrastructure Blueprint', 'Model Serving Pipeline', 'Feature Store', 'ML Ops Platform'],
    whatYouBuildDe: ['AI Infrastruktur-Blueprint', 'Model Serving Pipeline', 'Feature Store', 'ML Ops Platform'],
    outcomes: ['10x Inference Speed', '-80% Infrastructure Cost', '99.9% Uptime', 'Auto-scaling AI'],
    outcomesDe: ['10x Inference-Geschwindigkeit', '-80% Infrastruktur-Kosten', '99.9% Uptime', 'Auto-scaling AI'],
    caseStudies: ['Cursor', 'Perplexity'],
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: 'ai-native-data',
    title: 'AI-Native Data Infrastructure',
    titleDe: 'AI-Native Data Infrastructure',
    description: 'Build a modern data stack optimized for AI/ML workloads and real-time analytics.',
    descriptionDe: 'Baue einen modernen Data Stack optimiert für AI/ML Workloads und Echtzeit-Analytics.',
    dimension: 'Data',
    capabilities: ['C₃', 'C₄'],
    stage: ['Series A', 'Series B', 'Series C+'],
    industry: ['AI Tools', 'B2B SaaS', 'Marketplaces'],
    timeline: '12-16 weeks',
    difficulty: 'Expert',
    whatYouBuild: ['Real-time Data Pipeline', 'Vector Database', 'Analytics Warehouse', 'Data Quality AI'],
    whatYouBuildDe: ['Echtzeit-Daten-Pipeline', 'Vektor-Datenbank', 'Analytics Warehouse', 'Data Quality AI'],
    outcomes: ['Sub-second Queries', '100% Data Quality', '10x Analytics Speed', 'AI-ready Data'],
    outcomesDe: ['Sub-Sekunden Queries', '100% Datenqualität', '10x Analytics-Geschwindigkeit', 'AI-ready Daten'],
    caseStudies: ['Netflix', 'Spotify'],
    icon: <Database className="w-6 h-6" />
  },
  {
    id: 'ai-native-governance',
    title: 'AI-Native Governance & Compliance',
    titleDe: 'AI-Native Governance & Compliance',
    description: 'Automate compliance and governance with AI-powered monitoring and controls.',
    descriptionDe: 'Automatisiere Compliance und Governance mit AI-gestütztem Monitoring und Controls.',
    dimension: 'Culture',
    capabilities: ['C₄'],
    stage: ['Series B', 'Series C+'],
    industry: ['B2B SaaS', 'AI Tools', 'Other'],
    timeline: '10-14 weeks',
    difficulty: 'Hard',
    whatYouBuild: ['AI Compliance Monitor', 'Automated Audit System', 'Risk Prediction Engine', 'Policy Enforcement AI'],
    whatYouBuildDe: ['AI Compliance-Monitor', 'Automatisiertes Audit-System', 'Risk-Prediction-Engine', 'Policy-Enforcement AI'],
    outcomes: ['100% Compliance Rate', '-90% Audit Time', 'Real-time Risk Alerts', 'Auto-documentation'],
    outcomesDe: ['100% Compliance-Rate', '-90% Audit-Zeit', 'Echtzeit-Risk-Alerts', 'Auto-Dokumentation'],
    caseStudies: ['Stripe', 'Harvey'],
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 'scaling-decision-making',
    title: 'Scaling Decision-Making',
    titleDe: 'Scaling Decision-Making',
    description: 'Build AI-augmented decision systems that maintain quality at 10x scale.',
    descriptionDe: 'Baue AI-unterstützte Entscheidungssysteme, die Qualität bei 10x Skalierung halten.',
    dimension: 'Culture',
    capabilities: ['C₁', 'C₄'],
    stage: ['Series A', 'Series B'],
    industry: ['B2B SaaS', 'AI Tools', 'Marketplaces'],
    timeline: '8-12 weeks',
    difficulty: 'Hard',
    whatYouBuild: ['Decision Framework AI', 'Meeting Intelligence', 'Strategy Copilot', 'OKR Optimization Engine'],
    whatYouBuildDe: ['Decision-Framework AI', 'Meeting-Intelligenz', 'Strategy Copilot', 'OKR-Optimierungs-Engine'],
    outcomes: ['3x Decision Speed', '+80% Decision Quality', '-60% Meeting Time', 'Clear Accountability'],
    outcomesDe: ['3x Entscheidungs-Geschwindigkeit', '+80% Entscheidungs-Qualität', '-60% Meeting-Zeit', 'Klare Verantwortlichkeiten'],
    caseStudies: ['Notion', 'Linear'],
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 'ai-native-culture',
    title: 'AI-Native Culture Building',
    titleDe: 'AI-Native Culture Building',
    description: 'Design and scale company culture with AI-powered engagement and feedback.',
    descriptionDe: 'Designe und skaliere Unternehmenskultur mit AI-gestütztem Engagement und Feedback.',
    dimension: 'Culture',
    capabilities: ['C₂', 'C₃'],
    stage: ['Series A', 'Series B'],
    industry: ['B2B SaaS', 'AI Tools', 'Other'],
    timeline: '10-14 weeks',
    difficulty: 'Medium',
    whatYouBuild: ['Culture Analytics Dashboard', 'AI Engagement Monitor', 'Values Alignment Tracker', 'Team Health Predictor'],
    whatYouBuildDe: ['Culture-Analytics-Dashboard', 'AI Engagement-Monitor', 'Values-Alignment-Tracker', 'Team-Health-Prediktor'],
    outcomes: ['+50% Engagement', '-40% Attrition', '2x Team Performance', 'Scalable Culture'],
    outcomesDe: ['+50% Engagement', '-40% Attrition', '2x Team-Performance', 'Skalierbare Kultur'],
    caseStudies: ['Figma', 'Notion'],
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 'marketplace-ops',
    title: 'AI-Native Marketplace Operations',
    titleDe: 'AI-Native Marketplace Operations',
    description: 'Scale two-sided marketplace operations with AI-driven matching and pricing.',
    descriptionDe: 'Skaliere zweiseitige Marketplace-Operationen mit AI-gesteuertem Matching und Pricing.',
    dimension: 'Ops',
    capabilities: ['C₂', 'C₃', 'C₄'],
    stage: ['Series A', 'Series B', 'Series C+'],
    industry: ['Marketplaces'],
    timeline: '14-18 weeks',
    difficulty: 'Expert',
    whatYouBuild: ['AI Matching Engine', 'Dynamic Pricing AI', 'Supply-Demand Balancer', 'Trust & Safety AI'],
    whatYouBuildDe: ['AI Matching-Engine', 'Dynamic Pricing AI', 'Supply-Demand-Balancer', 'Trust & Safety AI'],
    outcomes: ['+80% Match Rate', '+35% Take Rate', '-70% Fraud', '10x Liquidity'],
    outcomesDe: ['+80% Match-Rate', '+35% Take-Rate', '-70% Fraud', '10x Liquidität'],
    caseStudies: ['Airbnb', 'Uber'],
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 'seed-gtm-playbook',
    title: 'Seed-Stage GTM Playbook',
    titleDe: 'Seed-Stage GTM Playbook',
    description: 'Build your first scalable go-to-market motion with limited resources.',
    descriptionDe: 'Baue deine erste skalierbare Go-to-Market-Motion mit begrenzten Ressourcen.',
    dimension: 'GTM',
    capabilities: ['C₁'],
    stage: ['Seed'],
    industry: ['B2B SaaS', 'AI Tools'],
    timeline: '4-8 weeks',
    difficulty: 'Easy',
    whatYouBuild: ['ICP Definition', 'Founder-Led Sales Playbook', 'First 10 Customers Strategy', 'PMF Validation Framework'],
    whatYouBuildDe: ['ICP-Definition', 'Founder-Led Sales Playbook', 'Erste 10 Kunden Strategie', 'PMF-Validierungs-Framework'],
    outcomes: ['First €100K ARR', 'Clear ICP', 'Repeatable Motion', 'PMF Signals'],
    outcomesDe: ['Erste €100K ARR', 'Klarer ICP', 'Wiederholbare Motion', 'PMF-Signale'],
    caseStudies: ['Cursor', 'Linear'],
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 'series-a-scaling',
    title: 'Series A Scaling Playbook',
    titleDe: 'Series A Scaling Playbook',
    description: 'Scale from €1M to €10M ARR with systematic growth infrastructure.',
    descriptionDe: 'Skaliere von €1M zu €10M ARR mit systematischer Growth-Infrastruktur.',
    dimension: 'GTM',
    capabilities: ['C₁', 'C₂'],
    stage: ['Series A'],
    industry: ['B2B SaaS', 'AI Tools'],
    timeline: '12-16 weeks',
    difficulty: 'Hard',
    whatYouBuild: ['Sales Team Structure', 'Marketing Funnel', 'Customer Success Foundation', 'Revenue Operations'],
    whatYouBuildDe: ['Sales-Team-Struktur', 'Marketing-Funnel', 'Customer Success Foundation', 'Revenue Operations'],
    outcomes: ['10x ARR Growth', 'Scalable Team', 'Clear Metrics', 'Series B Ready'],
    outcomesDe: ['10x ARR-Wachstum', 'Skalierbares Team', 'Klare Metriken', 'Series B Ready'],
    caseStudies: ['Notion', 'Figma'],
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 'series-b-expansion',
    title: 'Series B Expansion Playbook',
    titleDe: 'Series B Expansion Playbook',
    description: 'Expand to €50M+ ARR with international growth and enterprise motion.',
    descriptionDe: 'Expandiere zu €50M+ ARR mit internationalem Wachstum und Enterprise-Motion.',
    dimension: 'GTM',
    capabilities: ['C₂', 'C₃'],
    stage: ['Series B'],
    industry: ['B2B SaaS', 'AI Tools', 'Marketplaces'],
    timeline: '16-24 weeks',
    difficulty: 'Expert',
    whatYouBuild: ['International Expansion Framework', 'Enterprise Sales Motion', 'Partner Channel', 'Multi-product Strategy'],
    whatYouBuildDe: ['Internationale Expansions-Framework', 'Enterprise Sales Motion', 'Partner-Kanal', 'Multi-Produkt-Strategie'],
    outcomes: ['5x ARR Growth', '3+ Markets', 'Enterprise Deals', 'Platform Position'],
    outcomesDe: ['5x ARR-Wachstum', '3+ Märkte', 'Enterprise-Deals', 'Platform-Position'],
    caseStudies: ['Stripe', 'Notion'],
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: 'product-market-fit',
    title: 'AI-Native PMF Validation',
    titleDe: 'AI-Native PMF Validation',
    description: 'Validate product-market fit faster with AI-powered user research and analytics.',
    descriptionDe: 'Validiere Product-Market-Fit schneller mit AI-gestützter User Research und Analytics.',
    dimension: 'Product',
    capabilities: ['C₁'],
    stage: ['Seed'],
    industry: ['B2B SaaS', 'AI Tools', 'Other'],
    timeline: '4-6 weeks',
    difficulty: 'Easy',
    whatYouBuild: ['AI User Research System', 'Behavior Analytics', 'Feature Impact Predictor', 'Churn Risk Model'],
    whatYouBuildDe: ['AI User Research System', 'Behavior-Analytics', 'Feature-Impact-Prediktor', 'Churn-Risk-Modell'],
    outcomes: ['Clear PMF Signals', '10x User Insights', 'Prioritized Roadmap', 'Data-driven Decisions'],
    outcomesDe: ['Klare PMF-Signale', '10x User-Insights', 'Priorisierte Roadmap', 'Datengetriebene Entscheidungen'],
    caseStudies: ['Cursor', 'Perplexity'],
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 'ai-content-engine',
    title: 'AI Content Engine',
    titleDe: 'AI Content Engine',
    description: 'Build a scalable content marketing machine powered by AI generation and optimization.',
    descriptionDe: 'Baue eine skalierbare Content-Marketing-Maschine mit AI-Generierung und Optimierung.',
    dimension: 'GTM',
    capabilities: ['C₂', 'C₃'],
    stage: ['Seed', 'Series A', 'Series B'],
    industry: ['B2B SaaS', 'AI Tools', 'Other'],
    timeline: '6-10 weeks',
    difficulty: 'Medium',
    whatYouBuild: ['AI Content Generator', 'SEO Optimization Engine', 'Content Distribution AI', 'Performance Analytics'],
    whatYouBuildDe: ['AI Content-Generator', 'SEO-Optimierungs-Engine', 'Content-Distribution AI', 'Performance-Analytics'],
    outcomes: ['10x Content Output', '+300% Organic Traffic', '-80% Content Cost', '5x Engagement'],
    outcomesDe: ['10x Content-Output', '+300% Organischer Traffic', '-80% Content-Kosten', '5x Engagement'],
    caseStudies: ['Jasper', 'Notion'],
    icon: <BookOpen className="w-6 h-6" />
  }
];

const dimensions: Dimension[] = ['GTM', 'Product', 'Ops', 'Finance', 'Talent', 'Tech', 'Data', 'Culture'];
const capabilities: Capability[] = ['C₁', 'C₂', 'C₃', 'C₄'];
const stages: Stage[] = ['Seed', 'Series A', 'Series B', 'Series C+'];
const industries: Industry[] = ['B2B SaaS', 'AI Tools', 'Marketplaces', 'Other'];

const difficultyColors: Record<string, string> = {
  'Easy': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Medium': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Hard': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Expert': 'bg-red-500/20 text-red-400 border-red-500/30'
};

const PlaybookLibrary: React.FC = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDimensions, setSelectedDimensions] = useState<Dimension[]>([]);
  const [selectedCapabilities, setSelectedCapabilities] = useState<Capability[]>([]);
  const [selectedStages, setSelectedStages] = useState<Stage[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedPlaybook, setSelectedPlaybook] = useState<Playbook | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenPlaybook = (playbook: Playbook) => {
    setSelectedPlaybook(playbook);
    setIsDialogOpen(true);
  };

  const handleDownloadTemplate = (playbook: Playbook) => {
    toast({
      title: language === 'de' ? 'Template Download' : 'Template Download',
      description: language === 'de' 
        ? `${playbook.titleDe} Template wird vorbereitet...`
        : `Preparing ${playbook.title} template...`,
    });
  };

  const handleBookCall = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    setIsDialogOpen(false);
  };

  const filteredPlaybooks = useMemo(() => {
    return playbooks.filter(playbook => {
      const matchesSearch = searchQuery === '' || 
        playbook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        playbook.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDimension = selectedDimensions.length === 0 || 
        selectedDimensions.includes(playbook.dimension);
      
      const matchesCapability = selectedCapabilities.length === 0 || 
        playbook.capabilities.some(c => selectedCapabilities.includes(c));
      
      const matchesStage = selectedStages.length === 0 || 
        playbook.stage.some(s => selectedStages.includes(s));
      
      const matchesIndustry = selectedIndustries.length === 0 || 
        playbook.industry.some(i => selectedIndustries.includes(i));

      return matchesSearch && matchesDimension && matchesCapability && matchesStage && matchesIndustry;
    });
  }, [searchQuery, selectedDimensions, selectedCapabilities, selectedStages, selectedIndustries]);

  const toggleFilter = <T,>(value: T, selected: T[], setSelected: React.Dispatch<React.SetStateAction<T[]>>) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedDimensions([]);
    setSelectedCapabilities([]);
    setSelectedStages([]);
    setSelectedIndustries([]);
    setSearchQuery('');
  };

  const hasActiveFilters = selectedDimensions.length > 0 || selectedCapabilities.length > 0 || 
    selectedStages.length > 0 || selectedIndustries.length > 0 || searchQuery !== '';

  return (
    <section className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent font-mono">
            {playbooks.length} PLAYBOOKS
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            {language === 'de' ? 'Playbook Library' : 'Playbook Library'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Bewährte Frameworks für AI-Native Scaling. Jedes Playbook basiert auf empirischen Daten von 22+ Companies.'
              : 'Proven frameworks for AI-Native scaling. Each playbook is based on empirical data from 22+ companies.'}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder={language === 'de' ? 'Playbooks durchsuchen...' : 'Search playbooks...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border/50"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {language === 'de' ? 'Filter' : 'Filters'}
              {hasActiveFilters && (
                <Badge className="bg-accent text-accent-foreground ml-2">
                  {selectedDimensions.length + selectedCapabilities.length + selectedStages.length + selectedIndustries.length}
                </Badge>
              )}
            </Button>
            {hasActiveFilters && (
              <Button variant="ghost" onClick={clearAllFilters}>
                {language === 'de' ? 'Filter löschen' : 'Clear filters'}
              </Button>
            )}
          </div>

          {/* Filter Panels */}
          {showFilters && (
            <Card className="p-6 glass border-border/50">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Dimension Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">
                    {language === 'de' ? 'DIMENSION' : 'BY DIMENSION'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {dimensions.map(dim => (
                      <Badge
                        key={dim}
                        variant="outline"
                        className={`cursor-pointer transition-all ${
                          selectedDimensions.includes(dim) 
                            ? 'bg-primary text-primary-foreground border-primary' 
                            : 'hover:border-primary/50'
                        }`}
                        onClick={() => toggleFilter(dim, selectedDimensions, setSelectedDimensions)}
                      >
                        {dim}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Capability Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">
                    {language === 'de' ? 'CAPABILITY' : 'BY CAPABILITY'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {capabilities.map(cap => (
                      <Badge
                        key={cap}
                        variant="outline"
                        className={`cursor-pointer transition-all ${
                          selectedCapabilities.includes(cap) 
                            ? 'bg-accent text-accent-foreground border-accent' 
                            : 'hover:border-accent/50'
                        }`}
                        onClick={() => toggleFilter(cap, selectedCapabilities, setSelectedCapabilities)}
                      >
                        {cap}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stage Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">
                    {language === 'de' ? 'STAGE' : 'BY STAGE'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stages.map(stage => (
                      <Badge
                        key={stage}
                        variant="outline"
                        className={`cursor-pointer transition-all ${
                          selectedStages.includes(stage) 
                            ? 'bg-primary text-primary-foreground border-primary' 
                            : 'hover:border-primary/50'
                        }`}
                        onClick={() => toggleFilter(stage, selectedStages, setSelectedStages)}
                      >
                        {stage}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Industry Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">
                    {language === 'de' ? 'INDUSTRY' : 'BY INDUSTRY'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {industries.map(ind => (
                      <Badge
                        key={ind}
                        variant="outline"
                        className={`cursor-pointer transition-all ${
                          selectedIndustries.includes(ind) 
                            ? 'bg-accent text-accent-foreground border-accent' 
                            : 'hover:border-accent/50'
                        }`}
                        onClick={() => toggleFilter(ind, selectedIndustries, setSelectedIndustries)}
                      >
                        {ind}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {language === 'de' 
              ? `${filteredPlaybooks.length} Playbooks gefunden`
              : `${filteredPlaybooks.length} playbooks found`}
          </p>
        </div>

        {/* Playbook Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaybooks.map((playbook) => (
            <Card 
              key={playbook.id}
              className="p-6 glass border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-accent-glow group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground flex-shrink-0">
                  {playbook.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg leading-tight mb-1">
                    {language === 'de' ? playbook.titleDe : playbook.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      {playbook.dimension}
                    </Badge>
                    {playbook.capabilities.map(c => (
                      <Badge key={c} variant="outline" className="text-xs border-accent/30 text-accent">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {language === 'de' ? playbook.descriptionDe : playbook.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {playbook.timeline}
                </Badge>
                <Badge className={`text-xs ${difficultyColors[playbook.difficulty]}`}>
                  {playbook.difficulty}
                </Badge>
                {playbook.stage.slice(0, 2).map(s => (
                  <Badge key={s} variant="outline" className="text-xs">
                    {s}
                  </Badge>
                ))}
              </div>

              {/* What You'll Build */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-muted-foreground mb-2">
                  {language === 'de' ? 'WAS DU BAUST' : "WHAT YOU'LL BUILD"}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {(language === 'de' ? playbook.whatYouBuildDe : playbook.whatYouBuild).slice(0, 3).map((item, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                  {playbook.whatYouBuild.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{playbook.whatYouBuild.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Expected Outcomes */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-muted-foreground mb-2">
                  {language === 'de' ? 'ERWARTETE ERGEBNISSE' : 'EXPECTED OUTCOMES'}
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  {(language === 'de' ? playbook.outcomesDe : playbook.outcomes).slice(0, 4).map((outcome, i) => (
                    <div key={i} className="text-xs text-accent font-medium">
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Studies */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-muted-foreground mb-2">
                  {language === 'de' ? 'FALLSTUDIEN' : 'CASE STUDIES'}
                </h4>
                <div className="flex gap-2">
                  {playbook.caseStudies.map(cs => (
                    <Badge key={cs} variant="outline" className="text-xs">
                      {cs}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-auto pt-4 border-t border-border/50">
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-accent hover:opacity-90"
                  onClick={() => handleOpenPlaybook(playbook)}
                >
                  <BookOpen className="w-4 h-4 mr-1" />
                  {language === 'de' ? 'Lesen' : 'Read'}
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleDownloadTemplate(playbook)}
                >
                  <Download className="w-4 h-4 mr-1" />
                  {language === 'de' ? 'Template' : 'Template'}
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={handleBookCall}
                >
                  <Calendar className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPlaybooks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              {language === 'de' 
                ? 'Keine Playbooks gefunden. Passe deine Filter an.'
                : 'No playbooks found. Adjust your filters.'}
            </p>
            <Button variant="outline" onClick={clearAllFilters}>
              {language === 'de' ? 'Filter zurücksetzen' : 'Reset filters'}
            </Button>
          </div>
        )}

        {/* Playbook Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedPlaybook && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground flex-shrink-0">
                      {selectedPlaybook.icon}
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold mb-2">
                        {language === 'de' ? selectedPlaybook.titleDe : selectedPlaybook.title}
                      </DialogTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{selectedPlaybook.dimension}</Badge>
                        {selectedPlaybook.capabilities.map(c => (
                          <Badge key={c} variant="outline" className="border-accent/30 text-accent">{c}</Badge>
                        ))}
                        <Badge className={difficultyColors[selectedPlaybook.difficulty]}>
                          {selectedPlaybook.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6 mt-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      {language === 'de' ? 'Überblick' : 'Overview'}
                    </h3>
                    <p className="text-foreground">
                      {language === 'de' ? selectedPlaybook.descriptionDe : selectedPlaybook.description}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs uppercase">Timeline</span>
                      </div>
                      <p className="font-semibold">{selectedPlaybook.timeline}</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Target className="w-4 h-4" />
                        <span className="text-xs uppercase">Stage</span>
                      </div>
                      <p className="font-semibold">{selectedPlaybook.stage.join(', ')}</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-xs uppercase">Industry</span>
                      </div>
                      <p className="font-semibold text-sm">{selectedPlaybook.industry.join(', ')}</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Zap className="w-4 h-4" />
                        <span className="text-xs uppercase">Difficulty</span>
                      </div>
                      <p className="font-semibold">{selectedPlaybook.difficulty}</p>
                    </div>
                  </div>

                  {/* What You'll Build */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {language === 'de' ? 'Was du bauen wirst' : "What You'll Build"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {(language === 'de' ? selectedPlaybook.whatYouBuildDe : selectedPlaybook.whatYouBuild).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-muted/20 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expected Outcomes */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {language === 'de' ? 'Erwartete Ergebnisse' : 'Expected Outcomes'}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {(language === 'de' ? selectedPlaybook.outcomesDe : selectedPlaybook.outcomes).map((outcome, i) => (
                        <div key={i} className="p-3 bg-accent/10 rounded-lg text-center">
                          <p className="font-bold text-accent text-lg">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Studies */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {language === 'de' ? 'Erfolgreiche Implementierungen' : 'Successful Implementations'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPlaybook.caseStudies.map(cs => (
                        <Badge key={cs} variant="outline" className="px-4 py-2">
                          {cs}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                    <Button 
                      className="flex-1 bg-gradient-accent hover:opacity-90"
                      onClick={() => handleDownloadTemplate(selectedPlaybook)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {language === 'de' ? 'Template herunterladen' : 'Download Template'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={handleBookCall}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      {language === 'de' ? 'Implementierung besprechen' : 'Discuss Implementation'}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PlaybookLibrary;
