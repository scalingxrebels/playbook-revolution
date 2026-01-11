import { 
  Lightbulb, 
  FileText, 
  Bot, 
  Rocket, 
  Compass, 
  GraduationCap, 
  Presentation, 
  Building2,
  LucideIcon 
} from 'lucide-react';

export interface CheatSheetCategory {
  id: string;
  icon: LucideIcon;
  titleEn: string;
  titleDe: string;
  whenToChooseEn: string;
  whenToChooseDe: string;
  typicalBuyerEn: string;
  typicalBuyerDe: string;
  timelineEn: string;
  timelineDe: string;
  investmentEn: string;
  investmentDe: string;
}

export const cheatSheetCategories: CheatSheetCategory[] = [
  {
    id: 'insights-clarity',
    icon: Lightbulb,
    titleEn: 'Insights & Clarity',
    titleDe: 'Insights & Clarity',
    whenToChooseEn: 'Need to identify your #1 bottleneck and decide what to do next',
    whenToChooseDe: 'Ich muss meinen #1 Engpass identifizieren und entscheiden, was als nächstes zu tun ist',
    typicalBuyerEn: 'CEO / Founder / CMO',
    typicalBuyerDe: 'CEO / Founder / CMO',
    timelineEn: '30-90 Min',
    timelineDe: '30-90 Min',
    investmentEn: 'FREE–€890',
    investmentDe: 'KOSTENLOS–€890',
  },
  {
    id: 'decision-support',
    icon: FileText,
    titleEn: 'Decision Support',
    titleDe: 'Decision Support',
    whenToChooseEn: 'Need decision-ready analysis for board or investor decisions',
    whenToChooseDe: 'Ich brauche entscheidungsreife Analyse für Board oder Investoren',
    typicalBuyerEn: 'CEO / CFO / Board',
    typicalBuyerDe: 'CEO / CFO / Board',
    timelineEn: '3-7 Days',
    timelineDe: '3-7 Tage',
    investmentEn: '€3.9K–€5.9K',
    investmentDe: '€3.9K–€5.9K',
  },
  {
    id: 'ai-powered-tools',
    icon: Bot,
    titleEn: 'AI-Powered Tools',
    titleDe: 'AI-Powered Tools',
    whenToChooseEn: 'Need instant clarity via AI-powered self-assessment & benchmarks',
    whenToChooseDe: 'Ich will sofortige Klarheit durch KI-gestütztes Self-Assessment & Benchmarks',
    typicalBuyerEn: 'CEO / CMO / COO',
    typicalBuyerDe: 'CEO / CMO / COO',
    timelineEn: '12-30 Min',
    timelineDe: '12-30 Min',
    investmentEn: 'FREE',
    investmentDe: 'KOSTENLOS',
  },
  {
    id: 'transformations',
    icon: Rocket,
    titleEn: 'Transformations',
    titleDe: 'Transformationen',
    whenToChooseEn: 'Need hands-on execution to fix bottlenecks and build scalable systems',
    whenToChooseDe: 'Ich brauche hands-on Umsetzung um Engpässe zu beheben und skalierbare Systeme aufzubauen',
    typicalBuyerEn: 'CEO / CMO / COO',
    typicalBuyerDe: 'CEO / CMO / COO',
    timelineEn: '30 Days – 12 Mo',
    timelineDe: '30 Tage – 12 Mo',
    investmentEn: '€23.6K–€269K',
    investmentDe: '€23.6K–€269K',
  },
  {
    id: 'strategic-advisory',
    icon: Compass,
    titleEn: 'Strategic Advisory',
    titleDe: 'Strategic Advisory',
    whenToChooseEn: 'Need ongoing strategic sparring and board-level guidance',
    whenToChooseDe: 'Ich brauche laufenden strategischen Sparringspartner und Board-Level Guidance',
    typicalBuyerEn: 'CEO / Founder',
    typicalBuyerDe: 'CEO / Founder',
    timelineEn: '12+ Months',
    timelineDe: '12+ Monate',
    investmentEn: '€3.9K–€11K/Mo',
    investmentDe: '€3.9K–€11K/Mo',
  },
  {
    id: 'training-enablement',
    icon: GraduationCap,
    titleEn: 'Training & Enablement',
    titleDe: 'Training & Enablement',
    whenToChooseEn: 'Need to upskill leadership teams for AI-native scaling',
    whenToChooseDe: 'Ich muss Leadership-Teams für AI-native Scaling weiterbilden',
    typicalBuyerEn: 'CEO / CHRO / CTO',
    typicalBuyerDe: 'CEO / CHRO / CTO',
    timelineEn: '4-8 Weeks',
    timelineDe: '4-8 Wochen',
    investmentEn: '€5.9K–€9.5K',
    investmentDe: '€5.9K–€9.5K',
  },
  {
    id: 'workshops-keynotes',
    icon: Presentation,
    titleEn: 'Workshops & Keynotes',
    titleDe: 'Workshops & Keynotes',
    whenToChooseEn: 'Need team alignment and momentum at critical moments',
    whenToChooseDe: 'Ich brauche Team-Alignment und Momentum in kritischen Momenten',
    typicalBuyerEn: 'CEO / CMO / COO',
    typicalBuyerDe: 'CEO / CMO / COO',
    timelineEn: '1-2 Days',
    timelineDe: '1-2 Tage',
    investmentEn: '€9.6K–€12.9K',
    investmentDe: '€9.6K–€12.9K',
  },
  {
    id: 'portfolio-investment',
    icon: Building2,
    titleEn: 'Portfolio & Investment Decisions',
    titleDe: 'Portfolio & Investment Decisions',
    whenToChooseEn: 'Need to assess, prioritize and scale value creation across a portfolio',
    whenToChooseDe: 'Ich muss Portfolio bewerten, priorisieren und Value Creation skalieren',
    typicalBuyerEn: 'VC / PE Partner / Operating Partner',
    typicalBuyerDe: 'VC / PE Partner / Operating Partner',
    timelineEn: '2 Weeks – 24 Mo',
    timelineDe: '2 Wochen – 24 Mo',
    investmentEn: '€9.8K–€250K+',
    investmentDe: '€9.8K–€250K+',
  },
];
