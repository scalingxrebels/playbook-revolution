import type { SpokeData } from './types';

export const m2Data: SpokeData = {
  slug: 'uebersetzungskompetenz',
  num: 'M2',
  color: 'primary',
  overlineDe: 'M2 · MECHANISMUS 2 VON 3',
  overlineEn: 'M2 · MECHANISM 2 OF 3',
  headlineDe: 'Strategie die nicht übersetzt wird, ist Meinung.',
  headlineEn: 'Strategy that isn\'t translated is opinion.',
  sublineDe: 'Die Lücke zwischen Slide Deck und operativer Realität ist das eigentliche Problem. Wir schliessen sie.',
  sublineEn: 'The gap between slide deck and operational reality is the real problem. We close it.',
  stats: [
    { value: '3', labelDe: 'Ebenen', labelEn: 'Levels' },
    { value: 'GTM·Ops·Board', labelDe: 'Zielsysteme', labelEn: 'Target Systems' },
    { value: '30–90', labelDe: 'Tage', labelEn: 'Days' },
  ],
  whatItIs: {
    headlineDe: 'Nicht Beratung. Nicht Konzept. Übersetzung.',
    headlineEn: 'Not consulting. Not concept. Translation.',
    bodyDe: 'Wir wissen, in welchem Zielsystem der Hebel wirken muss — und wie er aktiviert wird. Das ist kein Prozess. Das ist Übersetzungskompetenz: die Fähigkeit, Strategie vollständig in operative Realität zu überführen. Ohne M1: Kein Hebel gefunden. Ohne M2: Hebel gefunden — aber falsch eingebaut.',
    bodyEn: 'We know which target system the lever must work in — and how to activate it. This is not a process. This is translation competence: the ability to fully transfer strategy into operational reality. Without M1: No lever found. Without M2: Lever found — but installed wrong.',
  },
  whatItIsNot: [
    {
      titleDe: 'Nicht ein Konzept.',
      titleEn: 'Not a concept.',
      bodyDe: 'Konzepte beschreiben. Wir übersetzen.',
      bodyEn: 'Concepts describe. We translate.',
    },
    {
      titleDe: 'Nicht ein Slide Deck.',
      titleEn: 'Not a slide deck.',
      bodyDe: 'Slide Decks präsentieren. Wir bauen.',
      bodyEn: 'Slide decks present. We build.',
    },
    {
      titleDe: 'Nicht eine Empfehlung.',
      titleEn: 'Not a recommendation.',
      bodyDe: 'Empfehlungen delegieren. Wir tragen mit.',
      bodyEn: 'Recommendations delegate. We carry together.',
    },
  ],
  howItWorks: {
    headlineDe: 'Drei Prinzipien der Übersetzung.',
    headlineEn: 'Three principles of translation.',
    levels: [
      {
        titleDe: 'Prinzip 1 — ICP schärfen bevor die GTM-Maschine läuft',
        titleEn: 'Principle 1 — Sharpen ICP before the GTM machine runs',
        bodyDe: 'Wer die GTM-Maschine aufsetzt bevor der ICP klar ist, verbrennt Budget. Sequenz ist alles.',
        bodyEn: 'If you set up the GTM machine before the ICP is clear, you burn budget. Sequence is everything.',
      },
      {
        titleDe: 'Prinzip 2 — Das richtige Zielsystem identifizieren',
        titleEn: 'Principle 2 — Identify the right target system',
        bodyDe: 'Nicht jeder Hebel wirkt in jedem System gleich. Wir wissen welches Zielsystem für welchen Hebel.',
        bodyEn: 'Not every lever works the same in every system. We know which target system for which lever.',
      },
      {
        titleDe: 'Prinzip 3 — Vollständig übersetzen — ohne Kompromiss',
        titleEn: 'Principle 3 — Translate completely — without compromise',
        bodyDe: 'Teilübersetzungen sind die häufigste Ursache für Scheitern. Wir übersetzen vollständig. Oder gar nicht.',
        bodyEn: 'Partial translations are the most common cause of failure. We translate completely. Or not at all.',
      },
    ],
  },
  moat: {
    headlineDe: 'Warum das schwer zu kopieren ist.',
    headlineEn: 'Why this is hard to copy.',
    bodyDe: 'Übersetzungskompetenz entsteht durch operative Erfahrung in mehreren Systemen — GTM, Ops, Board, Finance — gleichzeitig. Die meisten Berater kennen ein System tief. Wir kennen alle vier — und wie sie zusammenhängen.',
    bodyEn: 'Translation competence emerges from operational experience across multiple systems — GTM, Ops, Board, Finance — simultaneously. Most consultants know one system deeply. We know all four — and how they connect.',
  },
  caseStudy: {
    tagDe: 'Series A · €8M ARR · B2B SaaS',
    tagEn: 'Series A · €8M ARR · B2B SaaS',
    mechanisms: ['M2'],
    resultDe: 'Übersetzung in 3 Zielsysteme gleichzeitig — GTM, Ops, Board-Reporting. ARR +53% in 17 Monaten.',
    resultEn: 'Translation into 3 target systems simultaneously — GTM, Ops, Board Reporting. ARR +53% in 17 months.',
    ctaDe: 'Vollständigen Case lesen',
    ctaEn: 'Read full case',
    href: '/cases',
  },
  connection: {
    bodyDe: 'M2 übersetzt was M1 gefunden hat. M3 baut das System das M2 definiert hat. Ohne M2 ist M3 Bauen ohne Plan.',
    bodyEn: 'M2 translates what M1 found. M3 builds the system M2 defined. Without M2, M3 is building without a plan.',
    nextLinkDe: 'M3: Funktionierende Synthese',
    nextLinkEn: 'M3: Functioning Synthesis',
    nextHref: '/expertise/funktionierende-synthese',
  },
};
