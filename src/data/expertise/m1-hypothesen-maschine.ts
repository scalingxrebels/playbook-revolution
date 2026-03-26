import type { SpokeData } from './types';

export const m1Data: SpokeData = {
  slug: 'hypothesen-maschine',
  num: 'M1',
  color: 'primary',
  overlineDe: 'M1 · MECHANISMUS 1 VON 3',
  overlineEn: 'M1 · MECHANISM 1 OF 3',
  headlineDe: 'Wir finden den Hebel — bevor wir handeln.',
  headlineEn: 'We find the lever — before we act.',
  sublineDe: 'Die meisten starten mit Aktionen. Wir starten mit Hypothesen. Das ist der Unterschied zwischen Raten und Wissen.',
  sublineEn: 'Most start with actions. We start with hypotheses. That\'s the difference between guessing and knowing.',
  stats: [
    { value: '3', labelDe: 'Ebenen', labelEn: 'Levels' },
    { value: 'M+F+M', labelDe: 'Musterbibliothek + Frameworks + Mut', labelEn: 'Pattern Library + Frameworks + Courage' },
    { value: 'A–B', labelDe: 'Series A–B DACH', labelEn: 'Series A–B DACH' },
  ],
  whatItIs: {
    headlineDe: 'Nicht Intuition. Nicht Erfahrung. Ein Mechanismus.',
    headlineEn: 'Not intuition. Not experience. A mechanism.',
    bodyDe: 'Wir kommen in jedes Gespräch mit einer Theorie darüber, wo der echte Hebel liegt — bevor das Gespräch beginnt. Diese Theorie ist nicht Intuition. Sie ist das Ergebnis von Markttiefe, Mustererkennung und operativer Erfahrung. Die Fragen, die wir stellen, sind der Beweis dieser Theorie — nicht die Suche danach.',
    bodyEn: 'We enter every conversation with a theory about where the real lever is — before the conversation begins. This theory is not intuition. It\'s the result of market depth, pattern recognition and operational experience. The questions we ask are proof of this theory — not the search for it.',
  },
  whatItIsNot: [
    {
      titleDe: 'Nicht Marktforschung.',
      titleEn: 'Not market research.',
      bodyDe: 'Marktforschung beschreibt was ist. Wir erklären warum.',
      bodyEn: 'Market research describes what is. We explain why.',
    },
    {
      titleDe: 'Nicht Bauchgefühl.',
      titleEn: 'Not gut feeling.',
      bodyDe: 'Bauchgefühl ist nicht reproduzierbar. Unser Mechanismus ist es.',
      bodyEn: 'Gut feeling is not reproducible. Our mechanism is.',
    },
    {
      titleDe: 'Nicht Best Practice.',
      titleEn: 'Not best practice.',
      bodyDe: 'Was andere Startups machen ist kein Hebel. Dein Markt ist anders.',
      bodyEn: 'What other startups do is not a lever. Your market is different.',
    },
  ],
  howItWorks: {
    headlineDe: 'Warum wir treffende Hypothesen formulieren können.',
    headlineEn: 'Why we can formulate accurate hypotheses.',
    levels: [
      {
        titleDe: 'Ebene 1 — Musterbibliothek',
        titleEn: 'Level 1 — Pattern Library',
        bodyDe: 'Was wir gesehen haben. B2B SaaS DACH, Series A–B: die typischen Fehler, die typischen Muster, die typischen Hebel. Nicht abstrakt — operativ.',
        bodyEn: 'What we\'ve seen. B2B SaaS DACH, Series A–B: the typical mistakes, the typical patterns, the typical levers. Not abstract — operational.',
      },
      {
        titleDe: 'Ebene 2 — Frameworks',
        titleEn: 'Level 2 — Frameworks',
        bodyDe: 'Was wir damit machen. Fremde Frameworks als Linsen. Eigene Frameworks als destillierte Erfahrung. Hier entsteht die Hypothese.',
        bodyEn: 'What we do with it. External frameworks as lenses. Our own frameworks as distilled experience. This is where the hypothesis is born.',
      },
      {
        titleDe: 'Ebene 3 — Hypothesen-Mut',
        titleEn: 'Level 3 — Hypothesis Courage',
        bodyDe: 'Was wir damit tun. Die Bereitschaft, eine Hypothese auszusprechen — bevor sie bewiesen ist. Und die Disziplin, sie zu verwerfen wenn die Realität widerspricht.',
        bodyEn: 'What we do with it. The willingness to state a hypothesis — before it\'s proven. And the discipline to discard it when reality contradicts.',
      },
    ],
  },
  moat: {
    headlineDe: 'Warum das schwer zu kopieren ist.',
    headlineEn: 'Why this is hard to copy.',
    bodyDe: 'Musterbibliotheken entstehen durch Jahre operativer Erfahrung — nicht durch Lesen. Wir haben sie. Die meisten Berater haben sie nicht.\n\nFrameworks entstehen durch Destillation — nicht durch Übernahme. Wir haben eigene. Die meisten nutzen fremde.\n\nHypothesen-Mut entsteht durch Vertrauen in das System — nicht durch Selbstüberschätzung. Das ist der Unterschied.',
    bodyEn: 'Pattern libraries emerge from years of operational experience — not from reading. We have them. Most consultants don\'t.\n\nFrameworks emerge from distillation — not adoption. We have our own. Most use others\'.\n\nHypothesis courage comes from trust in the system — not overconfidence. That\'s the difference.',
  },
  caseStudy: {
    tagDe: 'Series B · B2B SaaS · DACH',
    tagEn: 'Series B · B2B SaaS · DACH',
    mechanisms: ['M1'],
    resultDe: 'Hypothese in Gespräch 1 — ICP zu breit, falsche Segment-Priorisierung. CAC von €12k auf €5k in 30 Tagen.',
    resultEn: 'Hypothesis in conversation 1 — ICP too broad, wrong segment prioritization. CAC from €12k to €5k in 30 days.',
    ctaDe: 'Vollständigen Case lesen',
    ctaEn: 'Read full case',
    href: '/cases',
  },
  connection: {
    bodyDe: 'M1 findet den Hebel. M2 weiss wo er eingebaut werden muss. Ohne M1 ist M2 Raten. Ohne M2 ist M1 wertlos.',
    bodyEn: 'M1 finds the lever. M2 knows where it needs to be installed. Without M1, M2 is guessing. Without M2, M1 is worthless.',
    nextLinkDe: 'M2: Übersetzungskompetenz',
    nextLinkEn: 'M2: Translation Competence',
    nextHref: '/expertise/uebersetzungskompetenz',
  },
};
