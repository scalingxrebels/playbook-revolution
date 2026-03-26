export interface MechanismCard {
  num: string;
  slug: string;
  badge: { de: string; en: string };
  color: 'primary' | 'amber';
  titleDe: string;
  titleEn: string;
  headlineDe: string;
  headlineEn: string;
  contrastDe: string;
  contrastEn: string;
  href: string;
}

export interface ContrastCard {
  titleDe: string;
  titleEn: string;
  bodyDe: string;
  bodyEn: string;
}

export interface Level {
  titleDe: string;
  titleEn: string;
  bodyDe: string;
  bodyEn: string;
}

export interface CasePreview {
  tagDe: string;
  tagEn: string;
  mechanisms: string[];
  resultDe: string;
  resultEn: string;
  ctaDe: string;
  ctaEn: string;
  href: string;
}

export interface SpokeData {
  slug: string;
  num: string;
  color: 'primary' | 'amber';
  overlineDe: string;
  overlineEn: string;
  headlineDe: string;
  headlineEn: string;
  sublineDe: string;
  sublineEn: string;
  stats: Array<{ value: string; labelDe: string; labelEn: string }>;
  // Section 2
  whatItIs: {
    headlineDe: string;
    headlineEn: string;
    bodyDe: string;
    bodyEn: string;
  };
  // Section 3
  whatItIsNot: ContrastCard[];
  // Section 4
  howItWorks: {
    headlineDe: string;
    headlineEn: string;
    levels: Level[];
  };
  // Section 5
  moat: {
    headlineDe: string;
    headlineEn: string;
    bodyDe: string;
    bodyEn: string;
  };
  // Section 6
  caseStudy: CasePreview;
  // Section 7
  connection: {
    bodyDe: string;
    bodyEn: string;
    nextLinkDe: string;
    nextLinkEn: string;
    nextHref: string;
  };
}
