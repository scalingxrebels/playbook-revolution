import type { MechanismCard, CasePreview } from './types';

export const mechanismCards: MechanismCard[] = [
  {
    num: 'M1',
    slug: 'hypothesen-maschine',
    badge: { de: 'Mechanismus', en: 'Mechanism' },
    color: 'primary',
    titleDe: 'Hypothesen-Maschine',
    titleEn: 'Hypothesis Engine',
    headlineDe: 'Wir finden den Hebel — bevor wir handeln.',
    headlineEn: 'We find the lever — before we act.',
    contrastDe: 'Andere fragen um zu verstehen. Wir fragen weil wir bereits wissen.',
    contrastEn: 'Others ask to understand. We ask because we already know.',
    href: '/expertise/hypothesen-maschine',
  },
  {
    num: 'M2',
    slug: 'uebersetzungskompetenz',
    badge: { de: 'Mechanismus', en: 'Mechanism' },
    color: 'primary',
    titleDe: 'Übersetzungskompetenz',
    titleEn: 'Translation Competence',
    headlineDe: 'Strategie die nicht übersetzt wird, ist Meinung.',
    headlineEn: 'Strategy that isn\'t translated is opinion.',
    contrastDe: 'Andere liefern Konzepte. Wir bauen das System das trägt.',
    contrastEn: 'Others deliver concepts. We build the system that holds.',
    href: '/expertise/uebersetzungskompetenz',
  },
  {
    num: 'M3',
    slug: 'funktionierende-synthese',
    badge: { de: 'Mechanismus', en: 'Mechanism' },
    color: 'primary',
    titleDe: 'Funktionierende Synthese',
    titleEn: 'Functioning Synthesis',
    headlineDe: 'Es funktioniert wirklich — nicht nur auf dem Slide Deck.',
    headlineEn: 'It actually works — not just on the slide deck.',
    contrastDe: 'Andere optimieren Teile. Wir bauen das Ganze.',
    contrastEn: 'Others optimize parts. We build the whole.',
    href: '/expertise/funktionierende-synthese',
  },
  {
    num: 'M4',
    slug: 'ai-orchestration',
    badge: { de: 'Multiplier auf M1–M3', en: 'Multiplier on M1–M3' },
    color: 'amber',
    titleDe: 'AI Orchestration als struktureller Vorteil',
    titleEn: 'AI Orchestration as Structural Advantage',
    headlineDe: 'AI als Multiplier — nicht als vierter Mechanismus.',
    headlineEn: 'AI as multiplier — not as a fourth mechanism.',
    contrastDe: 'Andere nutzen AI. Wir setzen sie als Architektur ein.',
    contrastEn: 'Others use AI. We deploy it as architecture.',
    href: '/expertise/ai-orchestration',
  },
];

export type ComparisonStatus = 'yes' | 'partial' | 'no';

export interface ComparisonRow {
  labelDe: string;
  labelEn: string;
  berater: ComparisonStatus;
  mckinsey: ComparisonStatus;
  intern: ComparisonStatus;
  scalingx: ComparisonStatus;
}

export const comparisonRows: ComparisonRow[] = [
  { labelDe: 'Hypothesen-Maschine', labelEn: 'Hypothesis Engine', berater: 'partial', mckinsey: 'yes', intern: 'no', scalingx: 'yes' },
  { labelDe: 'Übersetzungskompetenz', labelEn: 'Translation Competence', berater: 'no', mckinsey: 'partial', intern: 'partial', scalingx: 'yes' },
  { labelDe: 'Funktionierende Synthese', labelEn: 'Functioning Synthesis', berater: 'no', mckinsey: 'no', intern: 'partial', scalingx: 'yes' },
  { labelDe: 'AI als Multiplier', labelEn: 'AI as Multiplier', berater: 'no', mckinsey: 'no', intern: 'no', scalingx: 'yes' },
  { labelDe: 'Speed (30 Tage)', labelEn: 'Speed (30 Days)', berater: 'no', mckinsey: 'no', intern: 'no', scalingx: 'yes' },
];

export const hubCases: CasePreview[] = [
  {
    tagDe: 'Series B · B2B SaaS · DACH',
    tagEn: 'Series B · B2B SaaS · DACH',
    mechanisms: ['M1', 'M4'],
    resultDe: 'CAC von €12k auf €5k in 30 Tagen.',
    resultEn: 'CAC from €12k to €5k in 30 days.',
    ctaDe: 'Case lesen',
    ctaEn: 'Read case',
    href: '/cases/cac-crisis-turnaround',
  },
  {
    tagDe: 'Series A · €8M ARR',
    tagEn: 'Series A · €8M ARR',
    mechanisms: ['M2', 'M3'],
    resultDe: 'ARR +53% in 17 Monaten.',
    resultEn: 'ARR +53% in 17 months.',
    ctaDe: 'Case lesen',
    ctaEn: 'Read case',
    href: '/cases/stage-transition-series-b-ready',
  },
];
