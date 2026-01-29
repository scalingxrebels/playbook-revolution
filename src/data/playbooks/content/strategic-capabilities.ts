import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('strategic-capabilities')!;

export const strategicCapabilitiesData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "Capabilities", de: "Capabilities" },
    title: "Strategic Capabilities (C₁-C₄) Playbook",
    subtitle: { en: "...", de: "..." },
    description: { en: "...", de: "..." },
    trustBadges: [],
    bookingUrl: "#",
    downloadUrl: "#",
    gradient: "from-red-500 to-rose-500"
  },
  summary: {
    problem: { title: { en: "Problem", de: "Problem" }, text: { en: "...", de: "..." } },
    whyItMatters: { title: { en: "Why", de: "Warum" }, text: { en: "...", de: "..." } },
    solution: { title: { en: "Solution", de: "Lösung" }, text: { en: "...", de: "..." } }
  },
  problem: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, bullets: [], metrics: [] },
  framework: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, items: [] },
  bestPractices: { title: { en: "...", de: "..." }, categories: [] },
  roadmap: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, phases: [] },
  caseStudies: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, cases: [] },
  solutionsConnection: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, items: [] },
  whoThisIsFor: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, icp: { en: "...", de: "..." }, personas: [] },
  finalCta: { headline: { en: "...", de: "..." }, subline: { en: "...", de: "..." }, trustSignals: [], bookingUrl: "#", downloadUrl: "#" }
};
