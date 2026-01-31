import { ClientCaseStudy } from './types';

export const caseStudies: ClientCaseStudy[] = [
  {
    id: 'cac-crisis-series-b-saas',
    slug: 'cac-crisis-turnaround',
    company: 'Sales Tech Platform',
    industry: 'B2B SaaS',
    stage: 'Series B',
    gradient: 'from-red-500 to-orange-500',
    confidential: true,
    
    tags: ['cac', 'sales', 'gtm', 'series-b', 'b2b-saas'],
    challengeType: 'cac-crisis',
    
    // HERO
    headline: {
      en: 'CAC Crisis Averted → Back to Growth',
      de: 'CAC-Krise abgewendet → Zurück auf Wachstumskurs'
    },
    challenge: {
      en: 'CAC exploded from €5k to €12k in 6 months. The board demanded a fix—or a new CEO.',
      de: 'CAC explodierte von €5k auf €12k in 6 Monaten. Der Board forderte eine Lösung—oder einen neuen CEO.'
    },
    result: {
      en: 'CAC €12k → €5k (-58%), Win Rate 18% → 40% (+122%), ARR €15M → €28M (+87%)',
      de: 'CAC €12k → €5k (-58%), Win Rate 18% → 40% (+122%), ARR €15M → €28M (+87%)'
    },
    investment: '€120k',
    roi: '5x',
    heroMetrics: [
      { label: 'CAC', before: '€12k', after: '€5k', impact: '-58%' },
      { label: 'Win Rate', before: '18%', after: '40%', impact: '+122%' },
      { label: 'ARR', before: '€15M', after: '€28M', impact: '+87%' }
    ],
    
    // SITUATION
    companyDescription: {
      en: 'A sales tech platform for mid-market companies. €15M ARR, 80 employees, €20M Series B raised 12 months ago. Strong product-market fit, but growth was slowing.',
      de: 'Eine Sales-Tech-Plattform für den Mittelstand. €15M ARR, 80 Mitarbeiter, €20M Series B vor 12 Monaten. Starker Product-Market Fit, aber das Wachstum verlangsamte sich.'
    },
    crisisStory: {
      en: `The CEO walked into the quarterly board meeting feeling confident. ARR was growing (+30% YoY), the team was executing, customers were happy.

But the lead investor opened with a question that changed everything:

"Your CAC has doubled in 6 months. From €5k to €12k. If this continues, you'll run out of money in 9 months. What's your plan?"

The CEO had no answer. They hadn't noticed the CAC creeping up. And now the board was demanding a fix—or a new CEO.

The math was brutal: Current CAC €12k (benchmark: €5k, +140%). Current runway: 18 months. Runway at current CAC trend: 9 months.`,
      de: `Der CEO betrat das Board Meeting voller Zuversicht. ARR wuchs (+30% YoY), das Team lieferte, Kunden waren zufrieden.

Aber der Lead Investor eröffnete mit einer Frage, die alles veränderte:

"Euer CAC hat sich in 6 Monaten verdoppelt. Von €5k auf €12k. Wenn das so weitergeht, ist in 9 Monaten das Geld alle. Was ist euer Plan?"

Der CEO hatte keine Antwort. Sie hatten nicht bemerkt, wie der CAC stieg. Und jetzt forderte der Board eine Lösung—oder einen neuen CEO.

Die Zahlen waren brutal: Aktueller CAC €12k (Benchmark: €5k, +140%). Aktuelle Runway: 18 Monate. Runway bei aktuellem CAC-Trend: 9 Monate.`
    },
    problemDescription: {
      en: 'The company had been scaling aggressively. They hired fast, added new markets, launched new products. But no one had noticed the fundamentals were breaking.',
      de: 'Das Unternehmen hatte aggressiv skaliert. Sie stellten schnell ein, erschlossen neue Märkte, launchten neue Produkte. Aber niemand bemerkte, dass die Grundlagen brachen.'
    },
    brokenAreas: [
      {
        area: { en: 'Sales Process', de: 'Vertriebsprozess' },
        symptoms: [
          { en: 'Sales reps were reinventing the wheel on every deal', de: 'Vertriebsmitarbeiter erfanden das Rad bei jedem Deal neu' },
          { en: 'No one knew which leads to prioritize', de: 'Niemand wusste, welche Leads Priorität haben' },
          { en: 'Salesforce was purchased but never implemented', de: 'Salesforce wurde gekauft, aber nie implementiert' }
        ]
      },
      {
        area: { en: 'Marketing', de: 'Marketing' },
        symptoms: [
          { en: 'Marketing was generating 200+ leads/month', de: 'Marketing generierte 200+ Leads/Monat' },
          { en: 'But only 10% were qualified', de: 'Aber nur 10% waren qualifiziert' },
          { en: 'Sales was wasting time on bad leads', de: 'Vertrieb verschwendete Zeit mit schlechten Leads' }
        ]
      }
    ],
    situationMetrics: [
      { label: 'CAC', before: '€12k', after: '€5k (target)', impact: '+140%' },
      { label: 'Win Rate', before: '18%', after: '40% (target)', impact: '-55%' },
      { label: 'Sales Cycle', before: '8-14 weeks', after: '2-4 weeks (target)', impact: '+200%' },
      { label: 'LTV/CAC', before: '2.5x', after: '5x (target)', impact: '-50%' }
    ],
    
    // WHAT WE DID
    approach: {
      en: 'We ran a 12-week sprint to fix the broken sales process. No long-term transformation, no 6-month roadmap. Just: diagnose the problem, fix the bottlenecks, prove the results.',
      de: 'Wir führten einen 12-Wochen-Sprint durch, um den defekten Vertriebsprozess zu reparieren. Keine langfristige Transformation, keine 6-Monats-Roadmap. Nur: Problem diagnostizieren, Engpässe beheben, Ergebnisse beweisen.'
    },
    phases: [
      {
        name: { en: 'Diagnose the Problem', de: 'Problem diagnostizieren' },
        timeline: 'Week 1-4',
        actions: [
          {
            name: { en: 'Analyze the sales process', de: 'Vertriebsprozess analysieren' },
            description: {
              en: 'We interviewed 10 sales reps, reviewed 50 deals, and analyzed the data. The problem was clear: no repeatable process, no lead qualification, no data.',
              de: 'Wir interviewten 10 Vertriebler, prüften 50 Deals und analysierten die Daten. Das Problem war klar: kein wiederholbarer Prozess, keine Lead-Qualifizierung, keine Daten.'
            },
            deliverables: [
              { en: 'Process audit report', de: 'Prozess-Audit-Bericht' },
              { en: 'Deal win/loss analysis', de: 'Deal Win/Loss-Analyse' },
              { en: 'Data quality assessment', de: 'Datenqualitäts-Assessment' }
            ],
            whyItMattered: {
              en: 'Without understanding the root causes, any fix would be a band-aid. We needed to see the full picture.',
              de: 'Ohne Verständnis der Ursachen wäre jede Lösung nur ein Pflaster. Wir brauchten das vollständige Bild.'
            }
          },
          {
            name: { en: 'Build the ICP', de: 'ICP definieren' },
            description: {
              en: 'We analyzed the top 20% of customers (highest LTV, fastest close). They all had the same profile: 100-500 employees, €50k+ ACV, specific use case.',
              de: 'Wir analysierten die Top 20% der Kunden (höchster LTV, schnellster Abschluss). Alle hatten das gleiche Profil: 100-500 Mitarbeiter, €50k+ ACV, spezifischer Use Case.'
            },
            deliverables: [
              { en: 'ICP definition (who to sell to)', de: 'ICP-Definition (an wen verkaufen)' },
              { en: 'Lead scoring model (how to prioritize)', de: 'Lead-Scoring-Modell (wie priorisieren)' },
              { en: 'Disqualification criteria (who to ignore)', de: 'Disqualifikationskriterien (wen ignorieren)' }
            ],
            whyItMattered: {
              en: 'Sales reps could now focus on the right leads, not waste time on bad fits.',
              de: 'Vertriebler konnten sich jetzt auf die richtigen Leads konzentrieren, statt Zeit mit schlechten Fits zu verschwenden.'
            }
          }
        ]
      },
      {
        name: { en: 'Fix the Infrastructure', de: 'Infrastruktur reparieren' },
        timeline: 'Week 5-8',
        actions: [
          {
            name: { en: 'Implement CRM', de: 'CRM implementieren' },
            description: {
              en: 'We configured Salesforce in 2 weeks (not 6 months). Focus on the 20% of features that drive 80% of value: pipeline tracking, activity logging, reporting.',
              de: 'Wir konfigurierten Salesforce in 2 Wochen (nicht 6 Monate). Fokus auf die 20% der Features, die 80% des Werts liefern: Pipeline-Tracking, Aktivitäts-Logging, Reporting.'
            },
            deliverables: [
              { en: 'Salesforce configuration', de: 'Salesforce-Konfiguration' },
              { en: 'Sales rep training', de: 'Vertriebstraining' },
              { en: 'Dashboard setup', de: 'Dashboard-Setup' }
            ],
            whyItMattered: {
              en: 'For the first time, leadership could see what was actually happening in the pipeline.',
              de: 'Zum ersten Mal konnte die Führung sehen, was wirklich in der Pipeline passierte.'
            }
          },
          {
            name: { en: 'Build sales playbook', de: 'Sales Playbook erstellen' },
            description: {
              en: 'We documented the winning process based on top performers. Step-by-step: discovery call structure, demo flow, objection handling, proposal format.',
              de: 'Wir dokumentierten den erfolgreichen Prozess basierend auf Top-Performern. Schritt für Schritt: Discovery-Call-Struktur, Demo-Flow, Einwand-Behandlung, Proposal-Format.'
            },
            deliverables: [
              { en: 'Sales playbook document', de: 'Sales Playbook-Dokument' },
              { en: 'Call scripts and templates', de: 'Gesprächsleitfäden und Vorlagen' },
              { en: 'Training materials', de: 'Trainingsmaterialien' }
            ],
            whyItMattered: {
              en: 'New hires could now ramp in 4 weeks instead of 12. The process was repeatable.',
              de: 'Neue Mitarbeiter konnten jetzt in 4 Wochen statt 12 eingearbeitet werden. Der Prozess war wiederholbar.'
            }
          }
        ]
      },
      {
        name: { en: 'Prove the Results', de: 'Ergebnisse beweisen' },
        timeline: 'Week 9-12',
        actions: [
          {
            name: { en: 'Run pilot with 3 reps', de: 'Pilot mit 3 Reps durchführen' },
            description: {
              en: 'We tested the new process with 3 sales reps for 4 weeks. Compared their results to the control group (same period, old process).',
              de: 'Wir testeten den neuen Prozess mit 3 Vertrieblern für 4 Wochen. Verglichen ihre Ergebnisse mit der Kontrollgruppe (gleicher Zeitraum, alter Prozess).'
            },
            deliverables: [
              { en: 'A/B test results', de: 'A/B-Test-Ergebnisse' },
              { en: 'CAC comparison', de: 'CAC-Vergleich' },
              { en: 'Win rate comparison', de: 'Win Rate-Vergleich' }
            ],
            whyItMattered: {
              en: 'We had proof, not just theory. The board saw real data showing the fix worked.',
              de: 'Wir hatten Beweise, nicht nur Theorie. Der Board sah echte Daten, die zeigten, dass die Lösung funktionierte.'
            }
          },
          {
            name: { en: 'Roll out to full team', de: 'Rollout für gesamtes Team' },
            description: {
              en: 'Based on pilot success, we rolled out to all 10 reps. Weekly coaching sessions, real-time feedback, continuous optimization.',
              de: 'Basierend auf dem Pilot-Erfolg rollten wir für alle 10 Reps aus. Wöchentliche Coaching-Sessions, Echtzeit-Feedback, kontinuierliche Optimierung.'
            },
            deliverables: [
              { en: 'Full team rollout', de: 'Vollständiger Team-Rollout' },
              { en: 'Weekly metrics tracking', de: 'Wöchentliches Metriken-Tracking' },
              { en: 'Optimization playbook', de: 'Optimierungs-Playbook' }
            ],
            whyItMattered: {
              en: 'The entire sales org was now operating on a proven, scalable process.',
              de: 'Die gesamte Vertriebs-Organisation arbeitete jetzt mit einem bewährten, skalierbaren Prozess.'
            }
          }
        ]
      }
    ],
    
    // RESULTS
    timeline: '12 weeks',
    resultMetrics: [
      { label: 'CAC', before: '€12k', after: '€5k', impact: '-58%' },
      { label: 'Win Rate', before: '18%', after: '40%', impact: '+122%' },
      { label: 'Sales Cycle', before: '8-14 weeks', after: '2-4 weeks', impact: '-67%' },
      { label: 'ARR (12 months)', before: '€15M', after: '€28M', impact: '+87%' }
    ],
    roiCalculation: {
      investment: '€120k',
      returnValue: '€600k',
      roi: '5x',
      breakdown: [
        { en: 'CAC reduction: €7k per customer × 50 customers = €350k saved', de: 'CAC-Reduktion: €7k pro Kunde × 50 Kunden = €350k gespart' },
        { en: 'Win rate increase: 20 additional deals × €50k ACV = €1M ARR', de: 'Win Rate-Steigerung: 20 zusätzliche Deals × €50k ACV = €1M ARR' },
        { en: '12-month value: €600k', de: '12-Monats-Wert: €600k' }
      ]
    },
    ceoQuote: {
      en: '"We went from board pressure to board confidence in 12 weeks. CAC dropped 58%, win rate doubled, and we\'re back to hypergrowth. This was the reset we needed."',
      de: '"Wir gingen in 12 Wochen von Board-Druck zu Board-Zuversicht. CAC sank um 58%, Win Rate verdoppelte sich, und wir sind zurück auf Hypergrowth. Das war der Reset, den wir brauchten."'
    },
    quoteContext: {
      en: 'The CEO presented the results at the next board meeting. The board approved the plan to scale the sales team from 10 to 30 reps.',
      de: 'Der CEO präsentierte die Ergebnisse im nächsten Board Meeting. Der Board genehmigte den Plan, das Sales-Team von 10 auf 30 Reps zu skalieren.'
    },
    
    // KEY LESSONS
    lessons: [
      {
        title: { en: 'Fix the process before scaling the team', de: 'Prozess reparieren, bevor das Team skaliert wird' },
        whatWeLearned: {
          en: 'The company had been hiring aggressively (5 → 10 reps in 6 months). But without a repeatable process, every new hire made the problem worse. CAC went up, not down.',
          de: 'Das Unternehmen hatte aggressiv eingestellt (5 → 10 Reps in 6 Monaten). Aber ohne wiederholbaren Prozess machte jeder neue Mitarbeiter das Problem schlimmer. CAC stieg, anstatt zu fallen.'
        },
        keyInsight: {
          en: 'Scaling a broken process just breaks it faster. Fix the process first, then scale the team.',
          de: 'Einen defekten Prozess zu skalieren macht ihn nur schneller kaputt. Erst den Prozess reparieren, dann das Team skalieren.'
        },
        whatWedDoDifferently: {
          en: 'Pause hiring earlier (at 5 reps, not 10 reps). This would have prevented the CAC crisis.',
          de: 'Einstellung früher pausieren (bei 5 Reps, nicht 10 Reps). Das hätte die CAC-Krise verhindert.'
        }
      },
      {
        title: { en: 'Data beats intuition', de: 'Daten schlagen Intuition' },
        whatWeLearned: {
          en: 'The CEO thought they knew the ICP. But when we analyzed the data, the real ICP was different. The top 20% of customers had a completely different profile than what the CEO thought.',
          de: 'Der CEO dachte, er kennt das ICP. Aber als wir die Daten analysierten, war das echte ICP anders. Die Top 20% der Kunden hatten ein völlig anderes Profil als der CEO dachte.'
        },
        keyInsight: {
          en: 'Your intuition is often wrong. Data tells the truth.',
          de: 'Ihre Intuition liegt oft falsch. Daten sagen die Wahrheit.'
        },
        whatWedDoDifferently: {
          en: 'Build the data infrastructure earlier (Month 1, not Month 6). This would have caught the CAC trend sooner.',
          de: 'Daten-Infrastruktur früher aufbauen (Monat 1, nicht Monat 6). Das hätte den CAC-Trend früher erkannt.'
        }
      },
      {
        title: { en: 'Speed matters', de: 'Geschwindigkeit zählt' },
        whatWeLearned: {
          en: 'We ran a 12-week sprint (not a 6-month transformation). This forced us to focus on the highest-impact actions and ignore everything else.',
          de: 'Wir führten einen 12-Wochen-Sprint durch (keine 6-Monats-Transformation). Das zwang uns, uns auf die wirkungsvollsten Maßnahmen zu konzentrieren und alles andere zu ignorieren.'
        },
        keyInsight: {
          en: 'Constraints force focus. A 12-week deadline eliminates all the "nice to have" projects.',
          de: 'Einschränkungen erzwingen Fokus. Eine 12-Wochen-Deadline eliminiert alle "nice to have"-Projekte.'
        },
        whatWedDoDifferently: {
          en: 'Nothing. 12 weeks was the right timeline.',
          de: 'Nichts. 12 Wochen war der richtige Zeitrahmen.'
        }
      }
    ],
    
    playbooks: ['gtm-revenue', 'growth-engines'],
    downloadUrl: '/downloads/cases/cac-crisis-turnaround.pdf'
  },
  {
    id: 'nrr-breakthrough-analytics',
    slug: 'nrr-machine-breakthrough',
    company: 'Analytics Platform',
    industry: 'Data & Analytics',
    stage: 'Series B',
    gradient: 'from-rose-500 to-pink-500',
    confidential: true,
    
    tags: ['nrr', 'customer-success', 'expansion', 'series-b', 'analytics'],
    challengeType: 'nrr-stuck',
    
    headline: {
      en: 'NRR Stuck at 105% → Broke Through to 142%',
      de: 'NRR bei 105% festgefahren → Durchbruch zu 142%'
    },
    challenge: {
      en: 'NRR stuck at 105% for 18 months. Churn at 8%. Investors wanted 130%+ before next round.',
      de: 'NRR seit 18 Monaten bei 105% festgefahren. Churn bei 8%. Investoren wollten 130%+ vor der nächsten Runde.'
    },
    result: {
      en: 'NRR 105% → 142%, Churn 8% → 3%, Expansion Revenue +180%',
      de: 'NRR 105% → 142%, Churn 8% → 3%, Expansion Revenue +180%'
    },
    investment: '€95k',
    roi: '8x',
    heroMetrics: [
      { label: 'NRR', before: '105%', after: '142%', impact: '+37pp' },
      { label: 'Churn', before: '8%', after: '3%', impact: '-62%' },
      { label: 'Expansion', before: '€1.2M', after: '€3.4M', impact: '+180%' }
    ],
    
    companyDescription: {
      en: 'A data analytics platform for enterprise companies. €12M ARR, 65 employees, solid product adoption but customers weren\'t expanding.',
      de: 'Eine Datenanalyse-Plattform für Enterprise-Unternehmen. €12M ARR, 65 Mitarbeiter, solide Produkt-Adoption, aber Kunden expandierten nicht.'
    },
    crisisStory: {
      en: `The VP of Customer Success sat in the all-hands meeting, dreading the slide she had to present. NRR: 105%. Same as last quarter. And the quarter before.

The CEO had been clear: "We need 130% NRR before the Series C. Investors won't touch us below that."

But nothing was working. Customer health scores were fine. Support tickets were down. Product usage was stable. Yet customers just... weren't buying more.

"Why won't they expand?" the CEO asked. Nobody had a good answer.`,
      de: `Die VP Customer Success saß im All-Hands Meeting und fürchtete die Folie, die sie präsentieren musste. NRR: 105%. Wie letztes Quartal. Und das Quartal davor.

Der CEO war klar gewesen: "Wir brauchen 130% NRR vor der Series C. Investoren fassen uns unter dem Wert nicht an."

Aber nichts funktionierte. Customer Health Scores waren in Ordnung. Support-Tickets gingen zurück. Produktnutzung war stabil. Und trotzdem... kauften Kunden nicht mehr.

"Warum expandieren sie nicht?" fragte der CEO. Niemand hatte eine gute Antwort.`
    },
    problemDescription: {
      en: 'The company had great retention (customers stayed) but no expansion motion. CS team was reactive, not proactive. No systematic approach to identifying expansion opportunities.',
      de: 'Das Unternehmen hatte großartige Retention (Kunden blieben), aber keine Expansion-Motion. Das CS-Team war reaktiv, nicht proaktiv. Kein systematischer Ansatz zur Identifizierung von Expansions-Opportunities.'
    },
    brokenAreas: [
      {
        area: { en: 'Customer Success', de: 'Customer Success' },
        symptoms: [
          { en: 'CS managers focused on support, not growth', de: 'CS-Manager fokussierten auf Support, nicht Wachstum' },
          { en: 'No expansion playbook or triggers', de: 'Kein Expansion-Playbook oder Trigger' },
          { en: 'QBRs were status updates, not strategic sessions', de: 'QBRs waren Status-Updates, nicht strategische Sessions' }
        ]
      },
      {
        area: { en: 'Data & Insights', de: 'Daten & Insights' },
        symptoms: [
          { en: 'No visibility into product usage patterns', de: 'Keine Sichtbarkeit in Produktnutzungs-Muster' },
          { en: 'Health scores didn\'t predict expansion', de: 'Health Scores sagten Expansion nicht vorher' },
          { en: 'No trigger-based alerts for CS team', de: 'Keine trigger-basierten Alerts für das CS-Team' }
        ]
      }
    ],
    situationMetrics: [
      { label: 'NRR', before: '105%', after: '130%+ (target)', impact: '-25pp gap' },
      { label: 'Churn', before: '8%', after: '5% (target)', impact: '+60%' },
      { label: 'Expansion Rate', before: '15%', after: '40% (target)', impact: '-63%' },
      { label: 'CS Ratio', before: '1:40', after: '1:50 (target)', impact: 'inefficient' }
    ],
    
    approach: {
      en: 'We built an "NRR Machine"—a systematic approach to identifying, triggering, and closing expansion opportunities. Data-driven, proactive, scalable.',
      de: 'Wir bauten eine "NRR-Maschine"—einen systematischen Ansatz zur Identifizierung, Triggerung und Abschluss von Expansion-Opportunities. Datengetrieben, proaktiv, skalierbar.'
    },
    phases: [
      {
        name: { en: 'Understand Expansion Patterns', de: 'Expansion-Muster verstehen' },
        timeline: 'Week 1-3',
        actions: [
          {
            name: { en: 'Analyze historical expansions', de: 'Historische Expansionen analysieren' },
            description: {
              en: 'We analyzed every expansion deal from the past 2 years. What triggered them? What usage patterns preceded them? What did successful QBRs look like?',
              de: 'Wir analysierten jeden Expansion-Deal der letzten 2 Jahre. Was triggerte sie? Welche Nutzungsmuster gingen ihnen voraus? Wie sahen erfolgreiche QBRs aus?'
            },
            deliverables: [
              { en: 'Expansion trigger analysis', de: 'Expansion-Trigger-Analyse' },
              { en: 'Usage pattern correlation', de: 'Nutzungsmuster-Korrelation' },
              { en: 'Best practice QBR structure', de: 'Best Practice QBR-Struktur' }
            ],
            whyItMattered: {
              en: 'We found 5 clear "expansion signals" that predicted 80% of successful expansions.',
              de: 'Wir fanden 5 klare "Expansion-Signale", die 80% der erfolgreichen Expansionen vorhersagten.'
            }
          }
        ]
      },
      {
        name: { en: 'Build the Expansion Engine', de: 'Expansion-Engine bauen' },
        timeline: 'Week 4-8',
        actions: [
          {
            name: { en: 'Implement signal detection', de: 'Signal-Erkennung implementieren' },
            description: {
              en: 'Built automated alerts when customers hit expansion triggers: usage thresholds, team growth, feature adoption milestones.',
              de: 'Automatisierte Alerts gebaut, wenn Kunden Expansion-Trigger erreichten: Nutzungs-Schwellenwerte, Team-Wachstum, Feature-Adoptions-Meilensteine.'
            },
            deliverables: [
              { en: 'Expansion signal dashboard', de: 'Expansion-Signal-Dashboard' },
              { en: 'Automated CS alerts', de: 'Automatisierte CS-Alerts' },
              { en: 'Prioritized account list', de: 'Priorisierte Account-Liste' }
            ],
            whyItMattered: {
              en: 'CS managers now knew exactly which accounts to focus on and why—before the customer asked.',
              de: 'CS-Manager wussten jetzt genau, auf welche Accounts sie sich konzentrieren sollten und warum—bevor der Kunde fragte.'
            }
          }
        ]
      },
      {
        name: { en: 'Execute & Optimize', de: 'Ausführen & Optimieren' },
        timeline: 'Week 9-12',
        actions: [
          {
            name: { en: 'Run expansion playbooks', de: 'Expansion-Playbooks durchführen' },
            description: {
              en: 'Deployed new QBR format, expansion talk tracks, and ROI calculators. CS team shifted from reactive support to proactive growth.',
              de: 'Neues QBR-Format, Expansion-Gesprächsleitfäden und ROI-Rechner eingeführt. CS-Team wechselte von reaktivem Support zu proaktivem Wachstum.'
            },
            deliverables: [
              { en: 'New QBR playbook', de: 'Neues QBR-Playbook' },
              { en: 'Expansion talk tracks', de: 'Expansion-Gesprächsleitfäden' },
              { en: 'Customer ROI calculator', de: 'Kunden-ROI-Rechner' }
            ],
            whyItMattered: {
              en: 'Expansion conversations became natural, value-driven discussions instead of awkward upsell pitches.',
              de: 'Expansion-Gespräche wurden natürliche, wertorientierte Diskussionen statt unangenehmer Upsell-Pitches.'
            }
          }
        ]
      }
    ],
    
    timeline: '12 weeks',
    resultMetrics: [
      { label: 'NRR', before: '105%', after: '142%', impact: '+37pp' },
      { label: 'Churn', before: '8%', after: '3%', impact: '-62%' },
      { label: 'Expansion Revenue', before: '€1.2M', after: '€3.4M', impact: '+180%' },
      { label: 'CS Efficiency', before: '1:40', after: '1:55', impact: '+38%' }
    ],
    roiCalculation: {
      investment: '€95k',
      returnValue: '€760k',
      roi: '8x',
      breakdown: [
        { en: 'Expansion revenue increase: €2.2M additional ARR', de: 'Expansion Revenue Steigerung: €2.2M zusätzlicher ARR' },
        { en: 'Churn reduction: €400k ARR saved', de: 'Churn-Reduktion: €400k ARR gespart' },
        { en: '12-month value: €760k', de: '12-Monats-Wert: €760k' }
      ]
    },
    ceoQuote: {
      en: '"We went from NRR mediocrity to best-in-class in one quarter. Series C closed at 3x the valuation we expected. The NRR machine made all the difference."',
      de: '"Wir gingen in einem Quartal von NRR-Mittelmäßigkeit zu Best-in-Class. Series C schloss bei 3x der erwarteten Bewertung ab. Die NRR-Maschine machte den gesamten Unterschied."'
    },
    quoteContext: {
      en: 'The company closed their Series C three months later at a €180M valuation—3x what they expected before the NRR improvement.',
      de: 'Das Unternehmen schloss drei Monate später ihre Series C bei einer €180M-Bewertung ab—3x dessen, was sie vor der NRR-Verbesserung erwartet hatten.'
    },
    
    lessons: [
      {
        title: { en: 'Retention ≠ Expansion', de: 'Retention ≠ Expansion' },
        whatWeLearned: {
          en: 'The company was great at keeping customers (low churn) but had no motion for growing them. These are two different muscles that require different playbooks.',
          de: 'Das Unternehmen war großartig darin, Kunden zu halten (niedriger Churn), aber hatte keine Motion, um sie zu vergrößern. Das sind zwei verschiedene Muskeln, die unterschiedliche Playbooks erfordern.'
        },
        keyInsight: {
          en: 'Happy customers don\'t automatically expand. You need a systematic approach to identify and capture expansion opportunities.',
          de: 'Zufriedene Kunden expandieren nicht automatisch. Man braucht einen systematischen Ansatz, um Expansion-Opportunities zu identifizieren und zu nutzen.'
        },
        whatWedDoDifferently: {
          en: 'Build the expansion motion earlier, not after NRR becomes a crisis.',
          de: 'Die Expansion-Motion früher aufbauen, nicht nachdem NRR zur Krise wird.'
        }
      },
      {
        title: { en: 'Data enables proactivity', de: 'Daten ermöglichen Proaktivität' },
        whatWeLearned: {
          en: 'The CS team wasn\'t lazy—they just didn\'t know which accounts to focus on. Usage data and expansion signals gave them clarity and confidence.',
          de: 'Das CS-Team war nicht faul—sie wussten nur nicht, auf welche Accounts sie sich konzentrieren sollten. Nutzungsdaten und Expansion-Signale gaben ihnen Klarheit und Zuversicht.'
        },
        keyInsight: {
          en: 'Give your team data, not just goals. They\'ll figure out the rest.',
          de: 'Geben Sie Ihrem Team Daten, nicht nur Ziele. Den Rest werden sie selbst herausfinden.'
        },
        whatWedDoDifferently: {
          en: 'Instrument product usage from Day 1. Retroactively building this is painful.',
          de: 'Produktnutzung von Tag 1 an instrumentieren. Das nachträglich aufzubauen ist schmerzhaft.'
        }
      }
    ],
    
    playbooks: ['customer-success', 'growth-engines'],
    downloadUrl: '/downloads/cases/nrr-machine-breakthrough.pdf'
  },
  {
    id: 'partner-channel-transformed',
    slug: 'partner-channel-transformed-scalable-growth',
    company: 'SME Software Provider',
    industry: 'B2B Software',
    stage: 'Established',
    gradient: 'from-blue-500 to-cyan-500',
    confidential: true,
    
    tags: ['partner', 'channel', 'enablement', 'b2b-software', 'established'],
    challengeType: 'partner-channel',
    
    // HERO
    headline: {
      en: 'Partner Channel Transformed → Scalable Growth Accelerated',
      de: 'Partner Channel transformiert → Skalierbares Wachstum beschleunigt'
    },
    challenge: {
      en: 'A nationwide network of 1,000 partners generated high activity but low yield—9,819 monthly contacts produced just 344 SQLs over 6 months.',
      de: 'Ein bundesweites Netzwerk von 1.000 Partnern generierte hohe Aktivität, aber geringe Ausbeute—9.819 monatliche Kontakte ergaben nur 344 SQLs in 6 Monaten.'
    },
    result: {
      en: 'Revenue €543K → €968K (+45.6%), SQLs +31% with -24% contacts, New Customers +40%, ACV +39%',
      de: 'Umsatz €543K → €968K (+45,6%), SQLs +31% bei -24% Kontakte, Neukunden +40%, ACV +39%'
    },
    investment: '€60K-€78K',
    roi: '5x+',
    heroMetrics: [
      { label: 'Revenue Growth', before: '€543K', after: '€968K', impact: '+45.6%' },
      { label: 'SQL Efficiency', before: '344 SQLs', after: '451 SQLs', impact: '+31%' },
      { label: 'New Customers', before: 'Baseline', after: '+40%', impact: '+40%' },
      { label: 'ACV Growth', before: '€4,667', after: '€6,483', impact: '+39%' }
    ],
    
    // SITUATION
    companyDescription: {
      en: 'A leading software provider for SMEs, offering a broad portfolio including ERP, CRM, HR, DMS, eCommerce, and payment solutions. They operated a nationwide network of over 1,000 certified partners delivering implementation, customization, training, and support services.',
      de: 'Ein führender Software-Anbieter für KMU mit einem breiten Portfolio aus ERP, CRM, HR, DMS, eCommerce und Payment-Lösungen. Sie betrieben ein bundesweites Netzwerk von über 1.000 zertifizierten Partnern für Implementierung, Anpassung, Schulung und Support.'
    },
    crisisStory: {
      en: `The existing partner model was largely reactive—centered around updates and technical support for existing customers. There was little emphasis on pipeline generation, new customer acquisition, or strategic partner enablement.

The partner channel had scale—but it lacked structure, efficiency, and growth momentum. Key challenges included:

• High sales activity, but low yield: 9,819 monthly contacts generated just 344 SQLs over 6 months
• Commercial focus was on renewals and upgrades, not new customers
• No defined KPI framework for partners tied to outcomes or conversion
• Market potential remained untapped due to lack of targeting and proactive sales

The math was clear: €543K in revenue and 344 qualified leads over 6 months required nearly 10,000 monthly contacts—a model driven by high effort, low conversion, and limited focus on new customer acquisition.`,
      de: `Das bestehende Partnermodell war weitgehend reaktiv—fokussiert auf Updates und technischen Support für Bestandskunden. Es gab wenig Fokus auf Pipeline-Generierung, Neukundengewinnung oder strategisches Partner-Enablement.

Der Partner-Channel hatte Skalierung—aber es fehlte an Struktur, Effizienz und Wachstumsdynamik. Die wichtigsten Herausforderungen waren:

• Hohe Vertriebsaktivität, aber geringe Ausbeute: 9.819 monatliche Kontakte ergaben nur 344 SQLs in 6 Monaten
• Kommerzieller Fokus lag auf Renewals und Upgrades, nicht auf Neukunden
• Kein definiertes KPI-Framework für Partner mit Ergebnis- oder Conversion-Bezug
• Marktpotenzial blieb ungenutzt durch fehlendes Targeting und proaktiven Vertrieb

Die Zahlen waren eindeutig: €543K Umsatz und 344 qualifizierte Leads in 6 Monaten erforderten fast 10.000 monatliche Kontakte—ein Modell geprägt von hohem Aufwand, geringer Conversion und limitiertem Fokus auf Neukundengewinnung.`
    },
    problemDescription: {
      en: 'The partner channel generated revenue, but the model was fundamentally inefficient. Too much effort, too little yield, and no clear path to scale new customer acquisition through the channel.',
      de: 'Der Partner-Channel generierte Umsatz, aber das Modell war grundlegend ineffizient. Zu viel Aufwand, zu wenig Ergebnis, und kein klarer Weg zur Skalierung der Neukundengewinnung über den Channel.'
    },
    brokenAreas: [
      {
        area: { en: 'Partner Focus', de: 'Partner-Fokus' },
        symptoms: [
          { en: 'Partners focused on support and renewals, not acquisition', de: 'Partner fokussierten auf Support und Renewals, nicht auf Akquise' },
          { en: 'No structured approach to pipeline generation', de: 'Kein strukturierter Ansatz zur Pipeline-Generierung' },
          { en: 'High activity without outcome accountability', de: 'Hohe Aktivität ohne Ergebnisverantwortung' }
        ]
      },
      {
        area: { en: 'Performance Measurement', de: 'Performance-Messung' },
        symptoms: [
          { en: 'KPIs tracked activity volume, not outcomes', de: 'KPIs maßen Aktivitätsvolumen, nicht Ergebnisse' },
          { en: 'No visibility into lead quality or conversion', de: 'Keine Sichtbarkeit in Lead-Qualität oder Conversion' },
          { en: 'Partners not incentivized for new customer wins', de: 'Partner nicht für Neukundengewinne incentiviert' }
        ]
      }
    ],
    situationMetrics: [
      { label: 'Partners', before: '1,000', after: '11 selected', impact: 'Focused' },
      { label: 'Monthly Contacts', before: '9,819', after: 'Reduced', impact: '-24%' },
      { label: 'SQLs (6 months)', before: '344', after: '451', impact: '+31%' },
      { label: 'Revenue (6 months)', before: '€543K', after: '€968K', impact: '+45.6%' }
    ],
    
    // WHAT WE DID
    approach: {
      en: 'We ran a 9-week execution sprint followed by 6 months of enablement and monitoring. The approach: select the right partners, design outcome-focused KPIs, activate with hands-on enablement, and scale what works.',
      de: 'Wir führten einen 9-Wochen-Execution-Sprint durch, gefolgt von 6 Monaten Enablement und Monitoring. Der Ansatz: Die richtigen Partner auswählen, ergebnisorientierte KPIs designen, mit praxisnahem Enablement aktivieren und skalieren, was funktioniert.'
    },
    phases: [
      {
        name: { en: 'Fast Diagnostics & Partner Selection', de: 'Schnelle Diagnostik & Partner-Auswahl' },
        timeline: 'Week 1',
        actions: [
          {
            name: { en: 'Commercial Performance Assessment', de: 'Commercial Performance Assessment' },
            description: {
              en: 'Assessed the commercial performance of the full partner base (1,000 partners). Analyzed revenue contribution, customer acquisition, and growth potential.',
              de: 'Bewerteten die kommerzielle Performance des gesamten Partner-Netzwerks (1.000 Partner). Analysierten Umsatzbeitrag, Kundengewinnung und Wachstumspotenzial.'
            },
            deliverables: [
              { en: 'Partner performance scorecard', de: 'Partner Performance Scorecard' },
              { en: 'Revenue contribution analysis', de: 'Umsatzbeitragsanalyse' },
              { en: 'Growth potential ranking', de: 'Wachstumspotenzial-Ranking' }
            ],
            whyItMattered: {
              en: 'Not all partners are equal. We needed to identify the top performers with the highest potential for growth.',
              de: 'Nicht alle Partner sind gleich. Wir mussten die Top-Performer mit dem höchsten Wachstumspotenzial identifizieren.'
            }
          },
          {
            name: { en: 'Partner Selection & Alignment', de: 'Partner-Auswahl & Alignment' },
            description: {
              en: 'Selected the top 11 partners based on potential, commitment, and segment coverage. Conducted alignment sessions to ensure readiness for a new growth model.',
              de: 'Wählten die Top 11 Partner basierend auf Potenzial, Commitment und Segmentabdeckung aus. Führten Alignment-Sessions durch, um Bereitschaft für ein neues Wachstumsmodell sicherzustellen.'
            },
            deliverables: [
              { en: 'Top 11 partner selection', de: 'Top 11 Partner-Auswahl' },
              { en: 'Partner commitment agreements', de: 'Partner-Commitment-Vereinbarungen' },
              { en: 'Alignment session documentation', de: 'Alignment-Session-Dokumentation' }
            ],
            whyItMattered: {
              en: 'Partner success requires mutual commitment. We needed partners ready to invest in a new way of working.',
              de: 'Partner-Erfolg erfordert gegenseitiges Commitment. Wir brauchten Partner, die bereit waren, in eine neue Arbeitsweise zu investieren.'
            }
          }
        ]
      },
      {
        name: { en: 'KPI Framework & Execution Setup', de: 'KPI Framework & Execution Setup' },
        timeline: 'Week 2',
        actions: [
          {
            name: { en: 'New KPI Logic Design', de: 'Neues KPI-Logik-Design' },
            description: {
              en: 'Designed a new KPI framework focused on outcomes, not activity. Defined metrics for SQLs, conversion rates, revenue contribution, and lead quality.',
              de: 'Designten ein neues KPI-Framework mit Fokus auf Ergebnisse, nicht Aktivität. Definierten Metriken für SQLs, Conversion-Raten, Umsatzbeitrag und Lead-Qualität.'
            },
            deliverables: [
              { en: 'Outcome-based KPI framework', de: 'Ergebnisorientiertes KPI-Framework' },
              { en: 'SQL and conversion metrics', de: 'SQL- und Conversion-Metriken' },
              { en: 'Lead quality scoring model', de: 'Lead-Qualitäts-Scoring-Modell' }
            ],
            whyItMattered: {
              en: 'What you measure is what you get. We needed KPIs that drove the right behavior.',
              de: 'Was man misst, bekommt man. Wir brauchten KPIs, die das richtige Verhalten fördern.'
            }
          },
          {
            name: { en: 'Reporting Rhythm Setup', de: 'Reporting-Rhythmus-Setup' },
            description: {
              en: 'Introduced a lightweight reporting rhythm for visibility and accountability. Weekly pipeline reviews, monthly performance reviews.',
              de: 'Führten einen leichtgewichtigen Reporting-Rhythmus für Sichtbarkeit und Verantwortlichkeit ein. Wöchentliche Pipeline-Reviews, monatliche Performance-Reviews.'
            },
            deliverables: [
              { en: 'Weekly review cadence', de: 'Wöchentliche Review-Kadenz' },
              { en: 'Performance dashboard', de: 'Performance Dashboard' },
              { en: 'Partner enablement plan', de: 'Partner-Enablement-Plan' }
            ],
            whyItMattered: {
              en: 'Regular check-ins kept everyone accountable and allowed for rapid iteration.',
              de: 'Regelmäßige Check-ins hielten alle verantwortlich und ermöglichten schnelle Iteration.'
            }
          }
        ]
      },
      {
        name: { en: 'Channel Activation & Partner Enablement', de: 'Channel-Aktivierung & Partner-Enablement' },
        timeline: 'Weeks 3-12',
        actions: [
          {
            name: { en: 'Targeting Strategies & Enablement', de: 'Targeting-Strategien & Enablement' },
            description: {
              en: 'Co-developed targeting strategies with partners. Delivered hands-on sales enablement workshops covering messaging, qualification, and engagement.',
              de: 'Entwickelten gemeinsam Targeting-Strategien mit Partnern. Lieferten praxisnahe Sales-Enablement-Workshops zu Messaging, Qualifizierung und Engagement.'
            },
            deliverables: [
              { en: 'Target segment definitions', de: 'Zielsegment-Definitionen' },
              { en: 'Sales enablement workshops', de: 'Sales-Enablement-Workshops' },
              { en: 'Messaging and qualification guides', de: 'Messaging- und Qualifizierungs-Guides' }
            ],
            whyItMattered: {
              en: 'Partners needed practical tools and skills to execute the new model.',
              de: 'Partner brauchten praktische Tools und Skills, um das neue Modell umzusetzen.'
            }
          },
          {
            name: { en: 'Structured Pipeline Reviews', de: 'Strukturierte Pipeline-Reviews' },
            description: {
              en: 'Implemented structured pipeline reviews to identify high-leverage activities. Reduced low-value outreach while improving qualification and engagement.',
              de: 'Implementierten strukturierte Pipeline-Reviews zur Identifikation von High-Leverage-Aktivitäten. Reduzierten Low-Value-Outreach bei gleichzeitiger Verbesserung von Qualifizierung und Engagement.'
            },
            deliverables: [
              { en: 'Pipeline review process', de: 'Pipeline-Review-Prozess' },
              { en: 'Activity optimization', de: 'Aktivitäts-Optimierung' },
              { en: 'Feedback loops', de: 'Feedback-Loops' }
            ],
            whyItMattered: {
              en: 'Consistent coaching and feedback embedded the new behaviors.',
              de: 'Kontinuierliches Coaching und Feedback verankerten die neuen Verhaltensweisen.'
            }
          }
        ]
      },
      {
        name: { en: 'Acceleration & Performance Tracking', de: 'Beschleunigung & Performance-Tracking' },
        timeline: 'Months 3-9',
        actions: [
          {
            name: { en: 'Performance Monitoring & Scaling', de: 'Performance-Monitoring & Skalierung' },
            description: {
              en: 'Monitored partner performance through the new KPI system. Identified high-leverage activities and scaled best practices across partner teams.',
              de: 'Monitoren Partner-Performance durch das neue KPI-System. Identifizierten High-Leverage-Aktivitäten und skalierten Best Practices über Partner-Teams.'
            },
            deliverables: [
              { en: 'Performance tracking system', de: 'Performance-Tracking-System' },
              { en: 'Best practice documentation', de: 'Best-Practice-Dokumentation' },
              { en: 'Scaling playbook', de: 'Skalierungs-Playbook' }
            ],
            whyItMattered: {
              en: 'Sustained performance requires ongoing support and optimization.',
              de: 'Nachhaltige Performance erfordert kontinuierliche Unterstützung und Optimierung.'
            }
          },
          {
            name: { en: 'Replicable Playbook Development', de: 'Replizierbares Playbook-Entwicklung' },
            description: {
              en: 'Documented the partner playbook for rollout across the national partner network (1,000 partners). Prepared the model for broader adoption.',
              de: 'Dokumentierten das Partner-Playbook für den Rollout über das nationale Partner-Netzwerk (1.000 Partner). Bereiteten das Modell für breitere Adoption vor.'
            },
            deliverables: [
              { en: 'Partner playbook documentation', de: 'Partner-Playbook-Dokumentation' },
              { en: 'Rollout plan for 1,000 partners', de: 'Rollout-Plan für 1.000 Partner' },
              { en: 'Success metrics framework', de: 'Erfolgsmetriken-Framework' }
            ],
            whyItMattered: {
              en: 'The goal was not just to fix 11 partners, but to create a model that could transform the entire channel.',
              de: 'Das Ziel war nicht nur, 11 Partner zu optimieren, sondern ein Modell zu schaffen, das den gesamten Channel transformieren kann.'
            }
          }
        ]
      }
    ],
    
    // RESULTS
    timeline: '24 months',
    resultMetrics: [
      { label: 'Revenue (6 months)', before: '€543K', after: '€968K', impact: '+45.6%' },
      { label: 'SQLs', before: '344', after: '451', impact: '+31%' },
      { label: 'Contacts/Month', before: '9,819', after: '7,469', impact: '-24%' },
      { label: 'ACV', before: '€4,667', after: '€6,483', impact: '+39%' }
    ],
    roiCalculation: {
      investment: '€60K-€78K',
      returnValue: '€425K+',
      roi: '5x+',
      breakdown: [
        { en: 'Revenue growth: +€425K (€543K → €968K in 6 months)', de: 'Umsatzwachstum: +€425K (€543K → €968K in 6 Monaten)' },
        { en: 'Efficiency gain: 31% more SQLs with 24% fewer contacts', de: 'Effizienzgewinn: 31% mehr SQLs bei 24% weniger Kontakten' },
        { en: 'ACV growth: +€1,816 per customer (+39%)', de: 'ACV-Wachstum: +€1.816 pro Kunde (+39%)' },
        { en: 'Scalable model: Ready for 1,000 partner rollout', de: 'Skalierbares Modell: Bereit für 1.000 Partner-Rollout' }
      ]
    },
    ceoQuote: {
      en: '"We transformed our partner channel from a support extension into a true growth engine. With just 11 partners, we achieved more than we ever had with 1,000. The efficiency gains alone justified the investment—but the scalable playbook is what will transform our business."',
      de: '"Wir haben unseren Partner-Channel von einer Support-Erweiterung in einen echten Growth Engine transformiert. Mit nur 11 Partnern haben wir mehr erreicht als jemals mit 1.000. Die Effizienzgewinne allein haben das Investment gerechtfertigt—aber das skalierbare Playbook wird unser Geschäft transformieren."'
    },
    quoteContext: {
      en: 'The company is now rolling out the partner playbook across their national network of 1,000 partners.',
      de: 'Das Unternehmen rollt jetzt das Partner-Playbook über ihr nationales Netzwerk von 1.000 Partnern aus.'
    },
    
    // KEY LESSONS
    lessons: [
      {
        title: { en: 'Partner success is built on structure—not scale', de: 'Partner-Erfolg basiert auf Struktur—nicht Skalierung' },
        whatWeLearned: {
          en: 'With just 11 partners, we outperformed a network of 1,000 by focusing on quality, execution, and alignment.',
          de: 'Mit nur 11 Partnern übertrafen wir ein Netzwerk von 1.000, indem wir auf Qualität, Execution und Alignment fokussierten.'
        },
        keyInsight: {
          en: 'Scale without structure is just noise. Focus beats volume.',
          de: 'Skalierung ohne Struktur ist nur Lärm. Fokus schlägt Volumen.'
        },
        whatWedDoDifferently: {
          en: 'Start with partner selection earlier. Identify high-potential partners before investing in enablement.',
          de: 'Früher mit Partner-Auswahl beginnen. High-Potential-Partner identifizieren, bevor in Enablement investiert wird.'
        }
      },
      {
        title: { en: 'Lead quality beats volume', de: 'Lead-Qualität schlägt Volumen' },
        whatWeLearned: {
          en: 'A 24% reduction in outreach led to 31% more SQLs—efficiency comes from precision, not pressure.',
          de: 'Eine 24% Reduktion der Outreach führte zu 31% mehr SQLs—Effizienz kommt von Präzision, nicht Druck.'
        },
        keyInsight: {
          en: 'Quality over quantity wins every time. Better targeting creates better results with less effort.',
          de: 'Qualität über Quantität gewinnt immer. Besseres Targeting erzeugt bessere Ergebnisse mit weniger Aufwand.'
        },
        whatWedDoDifferently: {
          en: 'Nothing. This principle was validated from week one.',
          de: 'Nichts. Dieses Prinzip wurde ab Woche eins validiert.'
        }
      },
      {
        title: { en: 'KPI design shapes behavior', de: 'KPI-Design formt Verhalten' },
        whatWeLearned: {
          en: 'Moving from activity-based tracking to outcome-based KPIs changed how partners thought, sold, and delivered.',
          de: 'Der Wechsel von aktivitätsbasiertem Tracking zu ergebnisorientierten KPIs veränderte, wie Partner dachten, verkauften und lieferten.'
        },
        keyInsight: {
          en: 'What you measure is what you get. Design KPIs that drive the right behavior.',
          de: 'Was man misst, bekommt man. KPIs designen, die das richtige Verhalten fördern.'
        },
        whatWedDoDifferently: {
          en: 'Introduce outcome-based KPIs from the start of any partner program.',
          de: 'Ergebnisorientierte KPIs von Beginn jedes Partner-Programms einführen.'
        }
      },
      {
        title: { en: 'ACV growth proves the strategic value of enablement', de: 'ACV-Wachstum beweist den strategischen Wert von Enablement' },
        whatWeLearned: {
          en: 'Higher average contract values reflected not just more deals, but better deals—a sign of improved qualification, messaging, and confidence.',
          de: 'Höhere durchschnittliche Vertragswerte spiegelten nicht nur mehr Deals wider, sondern bessere Deals—ein Zeichen für verbesserte Qualifizierung, Messaging und Zuversicht.'
        },
        keyInsight: {
          en: 'Enablement pays off in deal quality, not just deal volume.',
          de: 'Enablement zahlt sich in Deal-Qualität aus, nicht nur in Deal-Volumen.'
        },
        whatWedDoDifferently: {
          en: 'Track ACV as a primary success metric from day one.',
          de: 'ACV von Tag eins als primäre Erfolgsmetrik tracken.'
        }
      },
      {
        title: { en: 'Short sprints create lasting change', de: 'Kurze Sprints schaffen dauerhafte Veränderung' },
        whatWeLearned: {
          en: 'In just 9 weeks, a new partner model was not only designed—it was live, performing, and already scaling.',
          de: 'In nur 9 Wochen war ein neues Partnermodell nicht nur designed—es war live, performte und skalierte bereits.'
        },
        keyInsight: {
          en: 'Speed matters. Constraints force focus and accelerate learning.',
          de: 'Geschwindigkeit zählt. Einschränkungen erzwingen Fokus und beschleunigen Lernen.'
        },
        whatWedDoDifferently: {
          en: 'Nothing. 9 weeks was the right timeline for design and initial activation.',
          de: 'Nichts. 9 Wochen waren der richtige Zeitrahmen für Design und initiale Aktivierung.'
        }
      },
      {
        title: { en: 'A modern partner channel is a growth asset—not just a support extension', de: 'Ein moderner Partner-Channel ist ein Growth Asset—nicht nur eine Support-Erweiterung' },
        whatWeLearned: {
          en: 'When enabled with the right strategy and tools, partners can become a true lever for acquisition, revenue, and brand reach.',
          de: 'Wenn mit der richtigen Strategie und den richtigen Tools enabled, können Partner ein echter Hebel für Akquise, Umsatz und Markenreichweite werden.'
        },
        keyInsight: {
          en: 'Partners are growth engines, not just support teams. Treat them accordingly.',
          de: 'Partner sind Growth Engines, nicht nur Support-Teams. Behandle sie entsprechend.'
        },
        whatWedDoDifferently: {
          en: 'Position partner channel transformation as a strategic growth initiative from the start.',
          de: 'Partner-Channel-Transformation von Anfang an als strategische Growth-Initiative positionieren.'
        }
      }
    ],
    
    playbooks: ['gtm-revenue', 'strategic-governance'],
    downloadUrl: '/downloads/cases/partner-channel-transformed.pdf',
    
    // RELATED CONTENT
    relatedSolutions: [
      {
        name: { en: 'Boost: Growth Engine', de: 'Boost: Growth Engine' },
        url: '/solutions/boost/growth-engine',
        duration: '90 Days',
        investment: '€60K-€78K',
        focus: { en: 'ARR Growth, Pipeline, Win Rate - Partner as Growth Engine', de: 'ARR-Wachstum, Pipeline, Win Rate - Partner als Growth Engine' },
        outcome: { en: 'ARR Growth +50-100%, Win Rate +30-50%, Pipeline +50-100%', de: 'ARR-Wachstum +50-100%, Win Rate +30-50%, Pipeline +50-100%' },
        type: 'primary'
      },
      {
        name: { en: 'Power Up: Growth Momentum', de: 'Power Up: Growth Momentum' },
        url: '/solutions/power-up/growth-momentum',
        duration: '4-6 Weeks',
        investment: '€23.6K',
        focus: { en: 'Quick Partner Activation Sprint', de: 'Schneller Partner-Aktivierungs-Sprint' },
        outcome: { en: 'ARR Growth +30-60pp, Win Rate +30-50%, Pipeline +50-100%', de: 'ARR-Wachstum +30-60pp, Win Rate +30-50%, Pipeline +50-100%' },
        type: 'alternative'
      },
      {
        name: { en: 'Boost: Efficient Hypergrowth', de: 'Boost: Effizientes Hypergrowth' },
        url: '/solutions/boost/efficient-hypergrowth',
        duration: '90 Days',
        investment: '€60K-€78K',
        focus: { en: 'GTM Engine Rebuild - CAC/LTV Optimization', de: 'GTM-Engine Neuaufbau - CAC/LTV-Optimierung' },
        outcome: { en: 'CAC -40-60%, LTV/CAC +100-200%, Rule of 40 +20-40pp', de: 'CAC -40-60%, LTV/CAC +100-200%, Rule of 40 +20-40pp' },
        type: 'related'
      }
    ],
    relatedCaseStudies: [
      { slug: 'cac-crisis-turnaround', teaser: { en: 'How a Series B SaaS company cut CAC by 58% in 12 weeks', de: 'Wie ein Series B SaaS-Unternehmen CAC in 12 Wochen um 58% senkte' } },
      { slug: 'nrr-machine-breakthrough', teaser: { en: 'How an Analytics Platform broke through NRR 105% to 142%', de: 'Wie eine Analytics-Plattform NRR von 105% auf 142% steigerte' } }
    ],
    relatedPlaybooks: [
      { slug: 'gtm-revenue', teaser: { en: '7-lever framework for AI-native revenue engines', de: '7-Hebel-Framework für AI-native Revenue Engines' } },
      { slug: 'strategic-governance', teaser: { en: '5-component framework for board confidence', de: '5-Komponenten-Framework für Board-Zuversicht' } },
      { slug: 'ai-native-scaling', teaser: { en: 'The complete framework for AI-native execution', de: 'Das komplette Framework für AI-native Execution' } }
    ]
  },
  
  // ============================================
  // CASE STUDY 6: PRICING REDESIGNED
  // ============================================
  {
    id: 'pricing-redesigned-tecdax',
    slug: 'pricing-redesigned-scalable-growth',
    company: 'Post-IPO TecDAX Company',
    industry: 'Social Network / Job Ads',
    stage: 'Post-IPO',
    gradient: 'from-purple-500 to-pink-500',
    confidential: true,
    
    tags: ['pricing', 'recurring-revenue', 'portfolio', 'post-ipo', 'tecdax'],
    challengeType: 'pricing-breakdown',
    
    // HERO
    headline: {
      en: 'Pricing Redesigned → Scalable Growth Unlocked',
      de: 'Pricing Redesign → Skalierbares Wachstum freigeschaltet'
    },
    challenge: {
      en: 'High-margin business with 61% EBITDA—but growth capped by 27 fragmented products, outdated pricing, and no recurring revenue.',
      de: 'Hochmargiges Geschäft mit 61% EBITDA—aber Wachstum begrenzt durch 27 fragmentierte Produkte, veraltetes Pricing und keine wiederkehrenden Einnahmen.'
    },
    result: {
      en: 'Revenue €31M → €44.6M (+33%), EBITDA +€5.2M, Rule of 40: 99%, Portfolio -63% complexity',
      de: 'Revenue €31M → €44.6M (+33%), EBITDA +€5.2M, Rule of 40: 99%, Portfolio -63% Komplexität'
    },
    investment: '€60K-€78K',
    roi: '180x',
    heroMetrics: [
      { label: 'Revenue', before: '€31M', after: '€44.6M', impact: '+33%' },
      { label: 'EBITDA', before: '61% Margin', after: '+€5.2M', impact: 'Reinforced' },
      { label: 'Rule of 40', before: '85%', after: '99%', impact: '+14pp' },
      { label: 'Portfolio', before: '27 Products', after: '10 Core', impact: '-63%' }
    ],
    
    // SITUATION
    companyDescription: {
      en: 'A post-IPO TecDAX company operating a social network for business professionals, with a thriving e-Recruiting business unit focused on job ads and recruiting solutions. €31M revenue, 61% EBITDA margin, Rule of 40 at 85%.',
      de: 'Ein Post-IPO TecDAX-Unternehmen mit einem Social Network für Geschäftsleute und einer florierenden e-Recruiting-Einheit für Stellenanzeigen und Recruiting-Lösungen. €31M Umsatz, 61% EBITDA-Marge, Rule of 40 bei 85%.'
    },
    crisisStory: {
      en: `The company was already a high-margin engine within the group—a post-IPO social network for business professionals, with a thriving e-Recruiting business unit.

At the time of engagement, the unit was generating €31M in revenue, 61% EBITDA margin, and a Rule of 40 score of 85%.

Despite the strong performance, growth was increasingly constrained. Following a strategic acquisition and post-merger integration, the unit sought to fundamentally modernize its core product line, which had become increasingly outdated in terms of pricing logic, product structure, and customer alignment.

The math was clear: A €31M business with 61% EBITDA—but pricing complexity and misaligned value perception capped growth, leaving significant revenue and margin potential untapped.`,
      de: `Das Unternehmen war bereits ein Hochmargen-Motor innerhalb der Gruppe—ein Post-IPO Social Network für Geschäftsleute mit einer florierenden e-Recruiting-Einheit.

Zum Zeitpunkt der Zusammenarbeit generierte die Einheit €31M Umsatz, 61% EBITDA-Marge und einen Rule of 40 Score von 85%.

Trotz der starken Performance war das Wachstum zunehmend eingeschränkt. Nach einer strategischen Akquisition und Post-Merger-Integration wollte die Einheit ihre Kernproduktlinie grundlegend modernisieren, die in Bezug auf Pricing-Logik, Produktstruktur und Kundenausrichtung veraltet war.

Die Rechnung war klar: Ein €31M-Geschäft mit 61% EBITDA—aber Pricing-Komplexität und falsch wahrgenommener Wert begrenzten das Wachstum und ließen erhebliches Umsatz- und Margenpotenzial ungenutzt.`
    },
    problemDescription: {
      en: 'The product portfolio had grown organically into 27 fragmented offerings, each with inconsistent pricing logic, no alignment with perceived customer value, and limited focus on recurring revenue despite clear potential.',
      de: 'Das Produktportfolio war organisch auf 27 fragmentierte Angebote gewachsen, jedes mit inkonsistenter Pricing-Logik, ohne Ausrichtung auf den wahrgenommenen Kundenwert und begrenztem Fokus auf wiederkehrende Einnahmen trotz klarem Potenzial.'
    },
    brokenAreas: [
      {
        area: { en: 'Product Structure', de: 'Produktstruktur' },
        symptoms: [
          { en: '27 product variants with inconsistent pricing logic', de: '27 Produktvarianten mit inkonsistenter Pricing-Logik' },
          { en: 'No alignment with perceived customer value', de: 'Keine Ausrichtung auf wahrgenommenen Kundenwert' },
          { en: 'Product structure difficult to scale or defend competitively', de: 'Produktstruktur schwer zu skalieren oder wettbewerbsfähig zu verteidigen' }
        ]
      },
      {
        area: { en: 'Revenue Model', de: 'Umsatzmodell' },
        symptoms: [
          { en: 'Primarily spot deals with limited predictability', de: 'Primär Einzelverkäufe mit begrenzter Vorhersagbarkeit' },
          { en: 'No recurring revenue despite clear potential', de: 'Keine wiederkehrenden Einnahmen trotz klarem Potenzial' },
          { en: 'LTV constrained by transaction-based model', de: 'LTV eingeschränkt durch transaktionsbasiertes Modell' }
        ]
      }
    ],
    situationMetrics: [
      { label: 'Revenue', before: '€31M', after: '€44.6M (target)', impact: '+33%' },
      { label: 'EBITDA', before: '61% Margin', after: '+€5.2M (target)', impact: 'Growth' },
      { label: 'Products', before: '27 variants', after: '10 core (target)', impact: '-63%' },
      { label: 'Revenue Model', before: 'Spot Deals', after: 'Recurring (target)', impact: 'Shift' }
    ],
    
    // WHAT WE DID
    approach: {
      en: 'We restructured the product portfolio, introduced a recurring revenue model, and designed a pricing system aligned with customer value and market dynamics. The transformation followed a structured three-step approach over 8+ weeks.',
      de: 'Wir haben das Produktportfolio umstrukturiert, ein wiederkehrendes Umsatzmodell eingeführt und ein Pricing-System entwickelt, das auf Kundenwert und Marktdynamik ausgerichtet ist. Die Transformation folgte einem strukturierten Drei-Stufen-Ansatz über 8+ Wochen.'
    },
    phases: [
      {
        name: { en: 'Strategic Pricing Diagnostics', de: 'Strategische Pricing-Diagnostik' },
        timeline: 'Weeks 1-4',
        actions: [
          {
            name: { en: 'Customer Willingness to Pay Analysis', de: 'Kundenbereitschafts-Zahlungsanalyse' },
            description: {
              en: 'Conducted in-depth research on customer value perception. Result: WTP ~90% of actual price. Strategic decision: Rather than reducing price, increase perceived value.',
              de: 'Durchführung einer tiefgreifenden Untersuchung zur Kundenwertwahrnehmung. Ergebnis: WTP ~90% des tatsächlichen Preises. Strategische Entscheidung: Statt Preissenkung, wahrgenommenen Wert erhöhen.'
            },
            deliverables: [
              { en: 'WTP analysis report', de: 'WTP-Analysebericht' },
              { en: 'Value perception mapping', de: 'Wertwahrnehmungs-Mapping' },
              { en: 'Strategic pricing direction', de: 'Strategische Pricing-Richtung' }
            ],
            whyItMattered: {
              en: 'Understanding the gap between price and perceived value revealed the opportunity: redesign what you sell, not just how you price it.',
              de: 'Das Verständnis der Lücke zwischen Preis und wahrgenommenem Wert offenbarte die Chance: Redesign was verkauft wird, nicht nur wie es bepreist wird.'
            }
          },
          {
            name: { en: 'Competitive Benchmarking', de: 'Wettbewerbs-Benchmarking' },
            description: {
              en: 'Analyzed industry trends and competitor pricing. Insight: Industry moving toward recurring models. Opportunity: Lead the market shift.',
              de: 'Analyse von Branchentrends und Wettbewerber-Pricing. Erkenntnis: Branche bewegt sich zu wiederkehrenden Modellen. Chance: Die Marktverschiebung anführen.'
            },
            deliverables: [
              { en: 'Competitive landscape analysis', de: 'Wettbewerbslandschaftsanalyse' },
              { en: 'Industry trend report', de: 'Branchentrendbericht' },
              { en: 'Market positioning strategy', de: 'Marktpositionierungsstrategie' }
            ],
            whyItMattered: {
              en: 'Being first to implement the model at scale would shape buyer expectations and force competitors to catch up.',
              de: 'Als Erster das Modell im großen Maßstab umzusetzen würde Käufererwartungen prägen und Wettbewerber zwingen aufzuholen.'
            }
          }
        ]
      },
      {
        name: { en: 'Product Portfolio Streamlining & Innovation', de: 'Produktportfolio-Straffung & Innovation' },
        timeline: 'Weeks 5-6',
        actions: [
          {
            name: { en: 'Streamline Product Catalog', de: 'Produktkatalog straffen' },
            description: {
              en: 'From 27 fragmented offerings to 10 core products plus 6 structured service components. Result: -63% complexity, +100% clarity.',
              de: 'Von 27 fragmentierten Angeboten zu 10 Kernprodukten plus 6 strukturierten Service-Komponenten. Ergebnis: -63% Komplexität, +100% Klarheit.'
            },
            deliverables: [
              { en: 'Simplified product catalog', de: 'Vereinfachter Produktkatalog' },
              { en: 'Service component structure', de: 'Service-Komponentenstruktur' },
              { en: 'Migration roadmap', de: 'Migrations-Roadmap' }
            ],
            whyItMattered: {
              en: 'Complexity was killing growth. Streamlining created clarity—for customers, sales, and operations—and eliminated internal friction.',
              de: 'Komplexität tötete Wachstum. Straffung schuf Klarheit—für Kunden, Vertrieb und Operations—und eliminierte interne Reibung.'
            }
          },
          {
            name: { en: 'Launch "Company Slots" Innovation', de: '"Company Slots" Innovation launchen' },
            description: {
              en: 'Recurring product bundles offering rotatable job ad slots. Tied to long-term relationships, improving LTV and predictability. Designed for volume use and renewal behavior.',
              de: 'Wiederkehrende Produktbündel mit rotierbaren Stellenanzeigen-Slots. An langfristige Beziehungen gebunden, LTV und Vorhersagbarkeit verbessernd. Für Volumennutzung und Erneuerungsverhalten konzipiert.'
            },
            deliverables: [
              { en: 'Company Slots product design', de: 'Company Slots Produktdesign' },
              { en: 'Pricing model for recurring bundles', de: 'Preismodell für wiederkehrende Bundles' },
              { en: 'Customer value proposition', de: 'Kundenwertversprechen' }
            ],
            whyItMattered: {
              en: 'Company Slots redefined how value is created, priced, and scaled over time. Recurring revenue became the default, not the exception.',
              de: 'Company Slots definierten neu, wie Wert geschaffen, bepreist und über Zeit skaliert wird. Wiederkehrende Einnahmen wurden zum Standard, nicht zur Ausnahme.'
            }
          }
        ]
      },
      {
        name: { en: 'New Pricing Model & Go-to-Market', de: 'Neues Pricing-Modell & Go-to-Market' },
        timeline: 'Weeks 7-8+',
        actions: [
          {
            name: { en: 'Implement Dual Pricing Strategy', de: 'Duale Pricing-Strategie implementieren' },
            description: {
              en: 'Company Slots (recurring focus) with two primary variants + Regular Job Ads (spot deals) with Fixed Price and Click-Based options. Priority sales focus on recurring for long-term revenue visibility.',
              de: 'Company Slots (wiederkehrender Fokus) mit zwei Hauptvarianten + Reguläre Stellenanzeigen (Einzelverkäufe) mit Festpreis und Click-Based Optionen. Vertriebsfokus auf wiederkehrend für langfristige Umsatztransparenz.'
            },
            deliverables: [
              { en: 'Complete pricing model documentation', de: 'Vollständige Preismodell-Dokumentation' },
              { en: 'Sales pricing tools', de: 'Vertriebs-Pricing-Tools' },
              { en: 'Customer pricing communication', de: 'Kunden-Pricing-Kommunikation' }
            ],
            whyItMattered: {
              en: 'Recurring revenue became the new standard, reducing reliance on spot deals and improving revenue predictability.',
              de: 'Wiederkehrende Einnahmen wurden zum neuen Standard, reduzierten Abhängigkeit von Einzelverkäufen und verbesserten Umsatzvorhersagbarkeit.'
            }
          },
          {
            name: { en: 'Go-to-Market Enablement', de: 'Go-to-Market Enablement' },
            description: {
              en: 'Sales training on new pricing model, customer migration strategy, and adoption monitoring. Commercial teams empowered with clearer offerings and higher win rates.',
              de: 'Vertriebstraining zum neuen Preismodell, Kundenmigractionsstrategie und Adoptions-Monitoring. Commercial-Teams befähigt mit klareren Angeboten und höheren Win Rates.'
            },
            deliverables: [
              { en: 'Sales training program', de: 'Vertriebstrainingsprogramm' },
              { en: 'Customer migration playbook', de: 'Kundenmigrations-Playbook' },
              { en: 'Adoption tracking dashboard', de: 'Adoptions-Tracking-Dashboard' }
            ],
            whyItMattered: {
              en: 'The entire commercial organization was empowered with clearer offerings and higher win rates—transformation requires execution, not just strategy.',
              de: 'Die gesamte Commercial-Organisation wurde mit klareren Angeboten und höheren Win Rates befähigt—Transformation erfordert Umsetzung, nicht nur Strategie.'
            }
          }
        ]
      }
    ],
    
    // RESULTS
    timeline: '24 months',
    resultMetrics: [
      { label: 'Revenue', before: '€31M', after: '€44.6M', impact: '+33% (+€13.6M)' },
      { label: 'EBITDA', before: '61% Margin', after: '+€5.2M', impact: 'Margin reinforced' },
      { label: 'Rule of 40', before: '85%', after: '99%', impact: '+14pp' },
      { label: 'Portfolio', before: '27 Products', after: '10 Core + 6 Services', impact: '-63% complexity' }
    ],
    roiCalculation: {
      investment: '€60K-€78K',
      returnValue: '€13.6M',
      roi: '180x',
      breakdown: [
        { en: 'Revenue growth: €31M → €44.6M = +€13.6M', de: 'Umsatzwachstum: €31M → €44.6M = +€13.6M' },
        { en: 'EBITDA improvement: +€5.2M (margin reinforcement)', de: 'EBITDA-Verbesserung: +€5.2M (Margen-Verstärkung)' },
        { en: 'Rule of 40 improvement: 85% → 99% = +14pp', de: 'Rule of 40 Verbesserung: 85% → 99% = +14pp' },
        { en: 'No discounting required—increased perceived value instead', de: 'Keine Rabattierung erforderlich—stattdessen wahrgenommenen Wert erhöht' }
      ]
    },
    ceoQuote: {
      en: '"We didn\'t just change prices—we changed what we were selling. Company Slots redefined how our customers think about job advertising. Recurring revenue became the default, not the exception. And we set a new market standard that competitors are now scrambling to follow."',
      de: '"Wir haben nicht nur Preise geändert—wir haben geändert, was wir verkaufen. Company Slots haben neu definiert, wie unsere Kunden über Stellenwerbung denken. Wiederkehrende Einnahmen wurden zum Standard, nicht zur Ausnahme. Und wir haben einen neuen Marktstandard gesetzt, dem Wettbewerber jetzt hinterherlaufen."'
    },
    quoteContext: {
      en: 'The transformation delivered €13.6M revenue growth without any discounting—proving that pricing is a strategic growth lever, not just a finance exercise.',
      de: 'Die Transformation lieferte €13.6M Umsatzwachstum ohne jegliche Rabattierung—Beweis dafür, dass Pricing ein strategischer Wachstumshebel ist, nicht nur eine Finance-Übung.'
    },
    
    // KEY LESSONS
    lessons: [
      {
        title: { en: 'Great pricing unlocks growth—even in mature businesses', de: 'Großartiges Pricing erschließt Wachstum—selbst in reifen Unternehmen' },
        whatWeLearned: {
          en: 'At 61% EBITDA and Rule of 40 at 85%, the company was already a high performer. But pricing redesign unlocked an additional €13.6M revenue (+33%) and pushed Rule of 40 to 99%.',
          de: 'Bei 61% EBITDA und Rule of 40 bei 85% war das Unternehmen bereits ein High Performer. Aber Pricing-Redesign erschloss zusätzlich €13.6M Umsatz (+33%) und steigerte Rule of 40 auf 99%.'
        },
        keyInsight: {
          en: 'Pricing is not a cost lever. It\'s a strategic growth tool when aligned with perceived value and customer behavior.',
          de: 'Pricing ist kein Kostenhebel. Es ist ein strategisches Wachstumsinstrument, wenn es auf wahrgenommenen Wert und Kundenverhalten ausgerichtet ist.'
        },
        whatWedDoDifferently: {
          en: 'Start pricing diagnostics earlier—even when performance looks strong. The opportunity cost of outdated pricing is invisible until you measure it.',
          de: 'Pricing-Diagnostik früher starten—auch wenn die Performance stark aussieht. Die Opportunitätskosten veralteten Pricings sind unsichtbar, bis man sie misst.'
        }
      },
      {
        title: { en: 'Don\'t just change the price—change what you\'re selling', de: 'Ändere nicht nur den Preis—ändere was du verkaufst' },
        whatWeLearned: {
          en: 'WTP analysis showed customers valued the product at ~90% of price. But instead of discounting, we redesigned the product structure. Company Slots unlocked both buyer understanding and seller confidence.',
          de: 'WTP-Analyse zeigte, dass Kunden das Produkt bei ~90% des Preises bewerteten. Aber statt zu rabattieren, haben wir die Produktstruktur neu designed. Company Slots erschlossen sowohl Käuferverständnis als auch Verkäufervertrauen.'
        },
        keyInsight: {
          en: 'The innovation wasn\'t in the price—it was in the product structure. Changing what you sell can be more powerful than changing what you charge.',
          de: 'Die Innovation lag nicht im Preis—sie lag in der Produktstruktur. Zu ändern was man verkauft kann mächtiger sein als zu ändern was man verlangt.'
        },
        whatWedDoDifferently: {
          en: 'Lead with product innovation, not price negotiation. The best pricing strategies change the conversation, not just the number.',
          de: 'Mit Produktinnovation führen, nicht Preisverhandlung. Die besten Pricing-Strategien ändern das Gespräch, nicht nur die Zahl.'
        }
      },
      {
        title: { en: 'Complexity kills growth', de: 'Komplexität tötet Wachstum' },
        whatWeLearned: {
          en: '27 products → 10 core products = -63% complexity. This single change created clarity for customers (easier to buy), sales (easier to sell), and operations (easier to deliver).',
          de: '27 Produkte → 10 Kernprodukte = -63% Komplexität. Diese einzelne Änderung schuf Klarheit für Kunden (einfacher zu kaufen), Vertrieb (einfacher zu verkaufen) und Operations (einfacher zu liefern).'
        },
        keyInsight: {
          en: 'Simplification is a growth strategy. Every product you eliminate is a decision you remove from both your team and your customers.',
          de: 'Vereinfachung ist eine Wachstumsstrategie. Jedes Produkt das du eliminierst ist eine Entscheidung die du sowohl deinem Team als auch deinen Kunden abnimmst.'
        },
        whatWedDoDifferently: {
          en: 'Simplify earlier and more aggressively. The friction cost of complexity compounds faster than most teams realize.',
          de: 'Früher und aggressiver vereinfachen. Die Reibungskosten von Komplexität wachsen schneller als die meisten Teams realisieren.'
        }
      },
      {
        title: { en: 'Recurring revenue isn\'t just a metric—it\'s a mindset', de: 'Wiederkehrende Einnahmen sind nicht nur eine Metrik—es ist eine Denkweise' },
        whatWeLearned: {
          en: 'Company Slots weren\'t just a new product—they redefined how value is created, priced, and scaled over time. The shift from spot deals to recurring bundles transformed customer relationships.',
          de: 'Company Slots waren nicht nur ein neues Produkt—sie definierten neu, wie Wert geschaffen, bepreist und über Zeit skaliert wird. Die Verschiebung von Einzelverkäufen zu wiederkehrenden Bundles transformierte Kundenbeziehungen.'
        },
        keyInsight: {
          en: 'Recurring revenue requires recurring value. Design products that customers want to renew, not products you have to re-sell.',
          de: 'Wiederkehrende Einnahmen erfordern wiederkehrenden Wert. Produkte designen die Kunden erneuern wollen, nicht Produkte die man neu verkaufen muss.'
        },
        whatWedDoDifferently: {
          en: 'Design for renewal from day one. Every product decision should ask: "Will customers want to renew this?"',
          de: 'Von Tag eins für Erneuerung designen. Jede Produktentscheidung sollte fragen: "Werden Kunden dies erneuern wollen?"'
        }
      },
      {
        title: { en: 'Market standards can be reset—if you execute with conviction', de: 'Marktstandards können neu gesetzt werden—wenn man mit Überzeugung umsetzt' },
        whatWeLearned: {
          en: 'By being first to implement the recurring model at scale, the company shaped buyer expectations and forced competitors to catch up. Market leadership isn\'t just about being better—it\'s about being first.',
          de: 'Indem das Unternehmen als Erstes das wiederkehrende Modell im großen Maßstab umsetzte, prägte es Käufererwartungen und zwang Wettbewerber aufzuholen. Marktführerschaft bedeutet nicht nur besser zu sein—es bedeutet Erster zu sein.'
        },
        keyInsight: {
          en: 'First-mover advantage in pricing is real. The company that sets the new standard defines what "normal" looks like.',
          de: 'First-Mover-Vorteil im Pricing ist real. Das Unternehmen das den neuen Standard setzt definiert wie "normal" aussieht.'
        },
        whatWedDoDifferently: {
          en: 'Move faster on market-shaping opportunities. The window for setting new standards is shorter than you think.',
          de: 'Schneller bei marktgestaltenden Chancen agieren. Das Fenster für neue Standards ist kürzer als man denkt.'
        }
      },
      {
        title: { en: 'A strong starting point is no excuse to stand still', de: 'Ein starker Ausgangspunkt ist keine Entschuldigung stillzustehen' },
        whatWeLearned: {
          en: 'Even with 61% EBITDA and Rule of 40 at 85%, the company identified latent growth potential and executed with discipline to capture it. Complacency would have left €13.6M on the table.',
          de: 'Selbst mit 61% EBITDA und Rule of 40 bei 85% identifizierte das Unternehmen latentes Wachstumspotenzial und setzte diszipliniert um, es zu erschließen. Selbstzufriedenheit hätte €13.6M auf dem Tisch gelassen.'
        },
        keyInsight: {
          en: 'Success can blind you to opportunity. The best time to transform pricing is when you\'re strong enough to do it right.',
          de: 'Erfolg kann für Chancen blind machen. Der beste Zeitpunkt Pricing zu transformieren ist wenn man stark genug ist, es richtig zu machen.'
        },
        whatWedDoDifferently: {
          en: 'Regularly question "good enough." High performance today doesn\'t guarantee competitiveness tomorrow.',
          de: 'Regelmäßig "gut genug" hinterfragen. Hohe Performance heute garantiert nicht Wettbewerbsfähigkeit morgen.'
        }
      }
    ],
    
    playbooks: ['gtm-revenue', 'strategic-governance'],
    downloadUrl: '/downloads/cases/pricing-redesigned.pdf',
    
    // RELATED CONTENT
    relatedSolutions: [
      {
        name: { en: 'Boost: Pricing Dominance', de: 'Boost: Pricing-Dominanz' },
        url: '/solutions/boost/pricing-dominance',
        duration: '90 Days',
        investment: '€60K-€78K',
        focus: { en: 'Pricing Architecture Rebuild - ARPU, Margin, Discounting', de: 'Pricing-Architektur Neuaufbau - ARPU, Marge, Rabattierung' },
        outcome: { en: 'ARPU +50-100%, Gross Margin +15-20pp, Discounting -30-50%', de: 'ARPU +50-100%, Bruttomarge +15-20pp, Rabattierung -30-50%' },
        type: 'primary',
        whatYouGet: [
          { en: 'Pricing Diagnostics (WTP Analysis)', de: 'Pricing-Diagnostik (WTP-Analyse)' },
          { en: 'Product Portfolio Streamlining', de: 'Produktportfolio-Straffung' },
          { en: 'Recurring Revenue Model Design', de: 'Wiederkehrendes Umsatzmodell-Design' },
          { en: 'Pricing Model Implementation', de: 'Preismodell-Implementierung' },
          { en: 'Go-to-Market Enablement', de: 'Go-to-Market Enablement' }
        ]
      },
      {
        name: { en: 'Power Up: Pricing Power', de: 'Power Up: Pricing Power' },
        url: '/solutions/power-up/pricing-power',
        duration: '4-6 Weeks',
        investment: '€23.6K',
        focus: { en: 'Quick Pricing Audit + Value Metric Redesign', de: 'Schnelles Pricing-Audit + Value Metric Redesign' },
        outcome: { en: 'Revenue +10-20%, ARPU +15-30%, Discounting -20-40%', de: 'Revenue +10-20%, ARPU +15-30%, Rabattierung -20-40%' },
        type: 'alternative',
        whatYouGet: [
          { en: 'Pricing Audit', de: 'Pricing-Audit' },
          { en: 'WTP Analysis', de: 'WTP-Analyse' },
          { en: 'Competitive Benchmarking', de: 'Wettbewerbs-Benchmarking' },
          { en: 'Pricing Recommendations', de: 'Pricing-Empfehlungen' },
          { en: 'Implementation Roadmap', de: 'Implementierungs-Roadmap' }
        ]
      },
      {
        name: { en: 'Accelerate: Sustainable Growth', de: 'Accelerate: Nachhaltiges Wachstum' },
        url: '/solutions/accelerate/sustainable-growth',
        duration: '12 Months',
        investment: '€153K',
        focus: { en: 'Long-term Growth Infrastructure - Rule of 40 Focus', de: 'Langfristige Growth-Infrastruktur - Rule of 40 Fokus' },
        outcome: { en: 'Rule of 40 +30-50pp, ARR Growth +100-200%, Burn Multiple -60-80%', de: 'Rule of 40 +30-50pp, ARR-Wachstum +100-200%, Burn Multiple -60-80%' },
        type: 'related'
      }
    ],
    relatedCaseStudies: [
      { slug: 'cac-crisis-turnaround', teaser: { en: 'How a Series B SaaS company cut CAC by 58% in 12 weeks', de: 'Wie ein Series B SaaS-Unternehmen CAC in 12 Wochen um 58% senkte' } },
      { slug: 'partner-channel-transformed-scalable-growth', teaser: { en: 'How an SME software provider achieved +45.6% revenue growth with 11 partners', de: 'Wie ein KMU-Softwareanbieter +45.6% Umsatzwachstum mit 11 Partnern erreichte' } }
    ],
    relatedPlaybooks: [
      { slug: 'gtm-revenue', teaser: { en: '7-lever framework for AI-native revenue engines', de: '7-Hebel-Framework für AI-native Revenue Engines' } },
      { slug: 'strategic-governance', teaser: { en: '5-component framework for board confidence', de: '5-Komponenten-Framework für Board-Zuversicht' } },
      { slug: 'ai-native-scaling', teaser: { en: 'The complete framework for AI-native execution', de: 'Das komplette Framework für AI-native Execution' } }
    ]
  },
  {
    id: 'new-market-segment-b2b-b2c',
    slug: 'new-market-segment-entry',
    company: 'B2B/B2C Company',
    industry: 'Professional Services',
    stage: 'Growth Stage',
    gradient: 'from-emerald-500 to-teal-500',
    confidential: true,
    
    tags: ['market-entry', 'gtm', 'growth', 'b2b-b2c', 'professional-services'],
    challengeType: 'market-entry',
    
    // HERO
    headline: {
      en: 'New Market Segment Entry → Scalable Revenue Engine',
      de: 'Markteintritt in neues Segment → Skalierbare Revenue Engine'
    },
    challenge: {
      en: '€1.3M in bespoke projects with 26 customers. No scalability, no flywheel effect. Leadership knew there was €10M+ potential—but no system to capture it.',
      de: '€1.3M in maßgeschneiderten Projekten mit 26 Kunden. Keine Skalierbarkeit, kein Flywheel-Effekt. Die Führung wusste, es gibt €10M+ Potenzial—aber kein System, es zu nutzen.'
    },
    result: {
      en: 'Revenue €1.3M → €13.72M (+955%), Customers 26 → 208 (8x), Sales Velocity €5.5K → €56K/day (10x), EBITDA -€300K → +€150K',
      de: 'Revenue €1.3M → €13.72M (+955%), Kunden 26 → 208 (8x), Sales Velocity €5.5K → €56K/Tag (10x), EBITDA -€300K → +€150K'
    },
    investment: '€200K-€600K',
    roi: '10x+',
    heroMetrics: [
      { label: 'Revenue', before: '€1.3M', after: '€13.72M', impact: '+955%' },
      { label: 'Customers', before: '26', after: '208', impact: '+700%' },
      { label: 'Sales Velocity', before: '€5.5K/day', after: '€56K/day', impact: '+915%' },
      { label: 'EBITDA', before: '-€300K', after: '+€150K', impact: '+€450K' }
    ],
    
    // SITUATION
    companyDescription: {
      en: 'A B2B/B2C company operating in both sectors, delivering custom, high-touch project work through a dedicated project office. Strong expertise, exceptional results—but no scalable model.',
      de: 'Ein B2B/B2C-Unternehmen, das in beiden Sektoren tätig ist und maßgeschneiderte, hochwertige Projektarbeit über ein dediziertes Projektbüro liefert. Starke Expertise, exzellente Ergebnisse—aber kein skalierbares Modell.'
    },
    crisisStory: {
      en: `The company operated successfully in both B2B and B2C sectors, delivering custom, high-touch project work through a dedicated project office. These "lighthouse projects" delivered exceptional value—but lacked scalability and repeatability.

Before the transformation, the project office delivered roughly €1.3M in revenue from 26 customers, primarily through one-off, high-effort projects. While these were successful, they didn't create a flywheel effect—each deal was custom, resource-heavy, and hard to replicate.

An internal analysis revealed that around €150K/year of these lighthouse projects had the potential to be productized and scaled into a new business segment with €10M+ potential within 60 months.

The leadership team faced a clear choice: continue with bespoke brilliance that couldn't scale, or build a system to transform that expertise into a repeatable growth engine.`,
      de: `Das Unternehmen war erfolgreich in B2B- und B2C-Sektoren tätig und lieferte maßgeschneiderte, hochwertige Projektarbeit über ein dediziertes Projektbüro. Diese "Leuchtturmprojekte" lieferten außergewöhnlichen Wert—aber fehlte es an Skalierbarkeit und Wiederholbarkeit.

Vor der Transformation generierte das Projektbüro etwa €1.3M Umsatz von 26 Kunden, hauptsächlich durch einmalige, ressourcenintensive Projekte. Obwohl diese erfolgreich waren, schufen sie keinen Flywheel-Effekt—jeder Deal war maßgeschneidert, ressourcenintensiv und schwer replizierbar.

Eine interne Analyse ergab, dass etwa €150K/Jahr dieser Leuchtturmprojekte das Potenzial hatten, in ein neues Geschäftssegment mit €10M+ Potenzial innerhalb von 60 Monaten produktisiert und skaliert zu werden.

Das Führungsteam stand vor einer klaren Wahl: weiter maßgeschneiderte Brillanz liefern, die nicht skaliert, oder ein System aufbauen, das diese Expertise in eine wiederholbare Wachstumsmaschine transformiert.`
    },
    problemDescription: {
      en: 'Strong demand—but no scale, no system, no profit. Each deal was custom, each project was high-touch, and the business was stuck at €1.3M with negative EBITDA.',
      de: 'Starke Nachfrage—aber keine Skalierung, kein System, kein Profit. Jeder Deal war maßgeschneidert, jedes Projekt war hochindividuell, und das Geschäft steckte bei €1.3M mit negativem EBITDA fest.'
    },
    brokenAreas: [
      {
        area: { en: 'Product-Market Fit', de: 'Product-Market Fit' },
        symptoms: [
          { en: '26 customers, each with completely different requirements', de: '26 Kunden, jeder mit völlig unterschiedlichen Anforderungen' },
          { en: 'No clear ICP definition', de: 'Keine klare ICP-Definition' },
          { en: 'No repeatable use cases identified', de: 'Keine wiederholbaren Use Cases identifiziert' }
        ]
      },
      {
        area: { en: 'GTM Motion', de: 'GTM-Motion' },
        symptoms: [
          { en: 'No standardized sales process', de: 'Kein standardisierter Vertriebsprozess' },
          { en: 'No playbooks or templates', de: 'Keine Playbooks oder Vorlagen' },
          { en: 'Each deal reinvented from scratch', de: 'Jeder Deal von Grund auf neu erfunden' }
        ]
      },
      {
        area: { en: 'Business Model', de: 'Geschäftsmodell' },
        symptoms: [
          { en: 'EBITDA: -€300K (segment loss)', de: 'EBITDA: -€300K (Segment-Verlust)' },
          { en: 'No path to profitability at current scale', de: 'Kein Weg zur Profitabilität bei aktueller Skalierung' },
          { en: 'High customer acquisition effort', de: 'Hoher Kundenakquisitionsaufwand' }
        ]
      }
    ],
    situationMetrics: [
      { label: 'Revenue', before: '€1.3M', after: '€13.72M (target)', impact: 'Starting point' },
      { label: 'Customers', before: '26', after: '208 (target)', impact: 'Limited base' },
      { label: 'Sales Velocity', before: '€5,516/day', after: '€56K/day (target)', impact: 'Low velocity' },
      { label: 'EBITDA', before: '-€300K', after: '+€150K (target)', impact: 'Segment loss' }
    ],
    
    // WHAT WE DID
    approach: {
      en: 'We executed a structured four-phase market entry program over 24 months: 6 months of intensive market validation, GTM execution, and scaling—followed by 18 months of growth acceleration to reach €13.72M.',
      de: 'Wir führten ein strukturiertes Vier-Phasen-Markteintrittsprogramm über 24 Monate durch: 6 Monate intensive Marktvalidierung, GTM-Execution und Skalierung—gefolgt von 18 Monaten Wachstumsbeschleunigung bis €13.72M.'
    },
    phases: [
      {
        name: { en: 'Market Segment Validation & ICP Alignment', de: 'Marktsegment-Validierung & ICP-Alignment' },
        timeline: 'Months 1-2',
        actions: [
          {
            name: { en: 'ICP & Use Case Refinement', de: 'ICP & Use Case Verfeinerung' },
            description: {
              en: 'We assessed TAM, SAM, and SOM. Identified high-LTV, low-CAC profiles. Defined pain points and repeatable use cases that could scale beyond bespoke projects.',
              de: 'Wir bewerteten TAM, SAM und SOM. Identifizierten Profile mit hohem LTV und niedrigem CAC. Definierten Pain Points und wiederholbare Use Cases, die über maßgeschneiderte Projekte hinaus skalieren können.'
            },
            deliverables: [
              { en: 'TAM/SAM/SOM analysis', de: 'TAM/SAM/SOM-Analyse' },
              { en: 'ICP definition with scoring model', de: 'ICP-Definition mit Scoring-Modell' },
              { en: 'Use case mapping and prioritization', de: 'Use Case Mapping und Priorisierung' }
            ],
            whyItMattered: {
              en: 'Without a clear ICP, the company was chasing every opportunity. With a defined ICP, they could focus resources on the highest-potential segments.',
              de: 'Ohne klares ICP jagte das Unternehmen jeder Gelegenheit nach. Mit definiertem ICP konnten sie Ressourcen auf die Segmente mit dem höchsten Potenzial konzentrieren.'
            }
          },
          {
            name: { en: 'Competitive Positioning', de: 'Wettbewerbspositionierung' },
            description: {
              en: 'We crafted a segment-specific value proposition and identified key differentiators across price, features, and service that would set the company apart from incumbents.',
              de: 'Wir erarbeiteten ein segmentspezifisches Wertversprechen und identifizierten wichtige Differenzierungsmerkmale bei Preis, Features und Service, die das Unternehmen von Wettbewerbern abheben.'
            },
            deliverables: [
              { en: 'Competitive analysis', de: 'Wettbewerbsanalyse' },
              { en: 'Value proposition framework', de: 'Wertversprechen-Framework' },
              { en: 'Positioning statement', de: 'Positionierungsaussage' }
            ],
            whyItMattered: {
              en: 'Clear positioning enabled the sales team to articulate why customers should choose them over alternatives—a critical factor in new market entry.',
              de: 'Klare Positionierung ermöglichte dem Vertriebsteam zu artikulieren, warum Kunden sie gegenüber Alternativen wählen sollten—ein kritischer Faktor beim Markteintritt.'
            }
          }
        ]
      },
      {
        name: { en: 'Market Entry & First Revenue Traction', de: 'Markteintritt & Erste Revenue-Traktion' },
        timeline: 'Months 3-4',
        actions: [
          {
            name: { en: 'Targeted Outbound & ABM Campaigns', de: 'Gezielte Outbound- & ABM-Kampagnen' },
            description: {
              en: 'We launched focused demand-gen and outbound strategies targeting the defined ICP. Built early pipeline with pilot programs and partnerships to establish credibility.',
              de: 'Wir starteten fokussierte Demand-Gen- und Outbound-Strategien für das definierte ICP. Bauten frühe Pipeline mit Pilotprogrammen und Partnerschaften auf, um Glaubwürdigkeit zu etablieren.'
            },
            deliverables: [
              { en: 'ABM campaign playbook', de: 'ABM-Kampagnen-Playbook' },
              { en: 'Pilot program structure', de: 'Pilotprogramm-Struktur' },
              { en: 'Partnership agreements', de: 'Partnerschaftsvereinbarungen' }
            ],
            whyItMattered: {
              en: 'First ARR traction secured within 3-4 months—proving the market entry thesis before committing to full-scale investment.',
              de: 'Erste ARR-Traktion innerhalb von 3-4 Monaten gesichert—die Markteintrittsthese bewiesen, bevor in volle Skalierung investiert wurde.'
            }
          },
          {
            name: { en: 'Pricing & Packaging Iteration', de: 'Pricing & Packaging Iteration' },
            description: {
              en: 'We iterated on pricing and packaging based on early customer feedback. Closed lighthouse deals and created initial case studies to fuel further growth.',
              de: 'Wir iterierten Pricing und Packaging basierend auf frühem Kundenfeedback. Schlossen Leuchtturm-Deals und erstellten erste Fallstudien, um weiteres Wachstum anzutreiben.'
            },
            deliverables: [
              { en: 'Pricing model v1.0', de: 'Pricing-Modell v1.0' },
              { en: 'Package definitions', de: 'Paketdefinitionen' },
              { en: 'Initial case studies', de: 'Erste Fallstudien' }
            ],
            whyItMattered: {
              en: 'High lead-to-deal conversion validated the product-market fit in the new segment and provided confidence to scale.',
              de: 'Hohe Lead-zu-Deal-Conversion validierte den Product-Market Fit im neuen Segment und gab Vertrauen zur Skalierung.'
            }
          }
        ]
      },
      {
        name: { en: 'Scaling & Competitive Positioning', de: 'Skalierung & Wettbewerbspositionierung' },
        timeline: 'Months 5-6',
        actions: [
          {
            name: { en: 'Standardize Winning Sales Motions', de: 'Erfolgreiche Sales Motions Standardisieren' },
            description: {
              en: 'We documented and standardized the winning sales motions into playbooks. Expanded local partners and ecosystem integrations to accelerate market penetration.',
              de: 'Wir dokumentierten und standardisierten die erfolgreichen Sales Motions in Playbooks. Erweiterten lokale Partner und Ökosystem-Integrationen, um Marktdurchdringung zu beschleunigen.'
            },
            deliverables: [
              { en: 'Sales playbook v2.0', de: 'Sales Playbook v2.0' },
              { en: 'Partner program', de: 'Partnerprogramm' },
              { en: 'Ecosystem integration roadmap', de: 'Ökosystem-Integrations-Roadmap' }
            ],
            whyItMattered: {
              en: 'Achieved +30-50% faster market penetration vs. legacy cycles. Created a platform for future scale with growing inbound pull.',
              de: 'Erreichten +30-50% schnellere Marktdurchdringung vs. Legacy-Zyklen. Schufen eine Plattform für zukünftige Skalierung mit wachsendem Inbound-Pull.'
            }
          },
          {
            name: { en: 'Thought Leadership & Moat Building', de: 'Thought Leadership & Moat-Aufbau' },
            description: {
              en: 'We launched PR, analyst relations, and thought leadership initiatives to build visibility. Developed customer advocacy and competitive defense strategies.',
              de: 'Wir starteten PR, Analysten-Beziehungen und Thought Leadership-Initiativen, um Sichtbarkeit aufzubauen. Entwickelten Kunden-Advocacy und kompetitive Verteidigungsstrategien.'
            },
            deliverables: [
              { en: 'Thought leadership content', de: 'Thought Leadership-Inhalte' },
              { en: 'PR & analyst program', de: 'PR & Analysten-Programm' },
              { en: 'Customer advocacy program', de: 'Kunden-Advocacy-Programm' }
            ],
            whyItMattered: {
              en: 'Established market credibility and defensibility—creating barriers to entry for competitors.',
              de: 'Etablierten Marktglaubwürdigkeit und Verteidigungsfähigkeit—schufen Eintrittsbarrieren für Wettbewerber.'
            }
          }
        ]
      },
      {
        name: { en: 'Growth Acceleration', de: 'Wachstumsbeschleunigung' },
        timeline: 'Months 7-24',
        actions: [
          {
            name: { en: 'Operational Scaling', de: 'Operative Skalierung' },
            description: {
              en: 'We scaled team, processes, and systems to support growth from €1.3M to €13.72M. Focused on customer success, retention, and NRR optimization.',
              de: 'Wir skalierten Team, Prozesse und Systeme, um das Wachstum von €1.3M auf €13.72M zu unterstützen. Fokus auf Customer Success, Retention und NRR-Optimierung.'
            },
            deliverables: [
              { en: 'Team expansion plan', de: 'Team-Expansionsplan' },
              { en: 'Process automation', de: 'Prozessautomatisierung' },
              { en: 'Customer success framework', de: 'Customer Success Framework' }
            ],
            whyItMattered: {
              en: 'Revenue reached €13.72M (+955%), customers grew to 208 (8x), and EBITDA swung +€450K from loss to profit.',
              de: 'Revenue erreichte €13.72M (+955%), Kunden wuchsen auf 208 (8x), und EBITDA schwenkte +€450K von Verlust zu Profit.'
            }
          },
          {
            name: { en: 'Strategic Partnerships & Expansion', de: 'Strategische Partnerschaften & Expansion' },
            description: {
              en: 'We established strategic partnerships and explored geographic expansion to unlock additional growth vectors beyond the initial market segment.',
              de: 'Wir etablierten strategische Partnerschaften und erkundeten geografische Expansion, um zusätzliche Wachstumsvektoren jenseits des initialen Marktsegments zu erschließen.'
            },
            deliverables: [
              { en: 'Strategic partnership agreements', de: 'Strategische Partnerschaftsvereinbarungen' },
              { en: 'Geographic expansion plan', de: 'Geografischer Expansionsplan' },
              { en: 'New use case development', de: 'Entwicklung neuer Use Cases' }
            ],
            whyItMattered: {
              en: 'The segment now operates as a repeatable, standalone business line with scale potential beyond €20M+.',
              de: 'Das Segment operiert jetzt als wiederholbare, eigenständige Geschäftslinie mit Skalierungspotenzial jenseits von €20M+.'
            }
          }
        ]
      }
    ],
    
    // RESULTS
    timeline: '24 months',
    resultMetrics: [
      { label: 'Revenue', before: '€1.3M', after: '€13.72M', impact: '+955%' },
      { label: 'Customers', before: '26', after: '208', impact: '+700%' },
      { label: 'Sales Velocity', before: '€5,516/day', after: '€56,000/day', impact: '+915%' },
      { label: 'EBITDA', before: '-€300K', after: '+€150K', impact: '+€450K' }
    ],
    roiCalculation: {
      investment: '€200K-€600K',
      returnValue: '€12.42M',
      roi: '10x+',
      breakdown: [
        { en: 'Revenue growth: €1.3M → €13.72M = +€12.42M', de: 'Umsatzwachstum: €1.3M → €13.72M = +€12.42M' },
        { en: 'EBITDA swing: -€300K → +€150K = +€450K profit', de: 'EBITDA-Schwung: -€300K → +€150K = +€450K Profit' },
        { en: 'Customer base: 26 → 208 = 8x expansion', de: 'Kundenbasis: 26 → 208 = 8x Expansion' },
        { en: 'Strategic optionality: €20M+ segment potential created', de: 'Strategische Optionalität: €20M+ Segment-Potenzial geschaffen' }
      ]
    },
    ceoQuote: {
      en: '"We transformed bespoke brilliance into a repeatable growth engine. From €1.3M to €13.72M in 24 months. Sales velocity went from €5K to €56K per day. The segment now has €20M+ potential—and it\'s only getting started."',
      de: '"Wir transformierten maßgeschneiderte Brillanz in eine wiederholbare Wachstumsmaschine. Von €1.3M auf €13.72M in 24 Monaten. Sales Velocity ging von €5K auf €56K pro Tag. Das Segment hat jetzt €20M+ Potenzial—und es fängt gerade erst an."'
    },
    quoteContext: {
      en: 'The leadership team presented the 24-month results to the board. The segment was established as a standalone business line with dedicated resources and a clear path to €20M+.',
      de: 'Das Führungsteam präsentierte die 24-Monats-Ergebnisse dem Board. Das Segment wurde als eigenständige Geschäftslinie mit dedizierten Ressourcen und einem klaren Weg zu €20M+ etabliert.'
    },
    
    // KEY LESSONS
    lessons: [
      {
        title: { en: 'Start with repeatable pain points, not spreadsheets', de: 'Starte mit wiederholbaren Pain Points, nicht Spreadsheets' },
        whatWeLearned: {
          en: 'Segment selection and use case clarity were more important than any single feature. The company focused on solving real, recurring problems rather than building features based on assumptions.',
          de: 'Segmentauswahl und Use Case Klarheit waren wichtiger als jedes einzelne Feature. Das Unternehmen konzentrierte sich darauf, echte, wiederkehrende Probleme zu lösen, anstatt Features auf Annahmen zu bauen.'
        },
        keyInsight: {
          en: 'Don\'t productize from a spreadsheet. Find the pain points that repeat across customers, then build for those.',
          de: 'Produktisiere nicht aus einem Spreadsheet. Finde die Pain Points, die sich bei Kunden wiederholen, dann baue dafür.'
        },
        whatWedDoDifferently: {
          en: 'We would have run customer discovery interviews even earlier (Month 0, not Month 1) to accelerate ICP clarity.',
          de: 'Wir hätten Customer Discovery Interviews noch früher durchgeführt (Monat 0, nicht Monat 1), um ICP-Klarheit zu beschleunigen.'
        }
      },
      {
        title: { en: 'Focused GTM motion is 10x more effective', de: 'Fokussierte GTM-Motion ist 10x effektiver' },
        whatWeLearned: {
          en: 'Tailoring messaging, pricing, and playbooks to the new segment drastically improved traction and conversion. Generic sales approaches don\'t work in new markets.',
          de: 'Die Anpassung von Messaging, Pricing und Playbooks auf das neue Segment verbesserte Traktion und Conversion drastisch. Generische Vertriebsansätze funktionieren nicht in neuen Märkten.'
        },
        keyInsight: {
          en: 'A focused GTM motion beats a generalized one every time. Customize everything for the segment.',
          de: 'Eine fokussierte GTM-Motion schlägt jedes Mal eine generalisierte. Passe alles für das Segment an.'
        },
        whatWedDoDifferently: {
          en: 'We would have built segment-specific playbooks even faster and tested messaging variations more aggressively.',
          de: 'Wir hätten segmentspezifische Playbooks noch schneller gebaut und Messaging-Variationen aggressiver getestet.'
        }
      },
      {
        title: { en: 'Validate fast, scale smart', de: 'Schnell validieren, intelligent skalieren' },
        whatWeLearned: {
          en: 'The phased approach—from signal → pilot → system—allowed the company to de-risk investments and double down only where it made sense.',
          de: 'Der phasenweise Ansatz—von Signal → Pilot → System—ermöglichte dem Unternehmen, Investitionen zu de-risken und nur dort zu verdoppeln, wo es sinnvoll war.'
        },
        keyInsight: {
          en: 'Don\'t bet big before you have proof. Validate in phases, then scale what works.',
          de: 'Wette nicht groß, bevor du Beweise hast. Validiere in Phasen, dann skaliere, was funktioniert.'
        },
        whatWedDoDifferently: {
          en: 'Nothing. The phased approach prevented costly mistakes and accelerated learning.',
          de: 'Nichts. Der phasenweise Ansatz verhinderte kostspielige Fehler und beschleunigte das Lernen.'
        }
      },
      {
        title: { en: 'Sales velocity is the truth', de: 'Sales Velocity ist die Wahrheit' },
        whatWeLearned: {
          en: 'Sales velocity became the leading indicator of momentum, and the single most telling metric of go-to-market success. It revealed what was working and what wasn\'t, faster than any other metric.',
          de: 'Sales Velocity wurde zum führenden Indikator für Momentum und zur aussagekräftigsten Metrik für Go-to-Market-Erfolg. Sie zeigte schneller als jede andere Metrik, was funktioniert und was nicht.'
        },
        keyInsight: {
          en: 'Track sales velocity daily. It\'s the canary in the coal mine for GTM health.',
          de: 'Tracke Sales Velocity täglich. Sie ist der Kanarienvogel in der Kohlenmine für GTM-Gesundheit.'
        },
        whatWedDoDifferently: {
          en: 'We would have implemented velocity tracking on Day 1, not Week 4.',
          de: 'Wir hätten Velocity-Tracking an Tag 1 implementiert, nicht in Woche 4.'
        }
      },
      {
        title: { en: 'Ecosystem positioning is leverage, not luxury', de: 'Ökosystem-Positionierung ist Hebel, nicht Luxus' },
        whatWeLearned: {
          en: 'PR, analyst engagement, and customer advocacy built trust and drove acceleration far beyond what performance marketing alone could achieve.',
          de: 'PR, Analysten-Engagement und Kunden-Advocacy bauten Vertrauen auf und trieben Beschleunigung weit über das hinaus, was Performance Marketing allein erreichen konnte.'
        },
        keyInsight: {
          en: 'Thought leadership creates inbound pull and competitive moats. Don\'t skip it.',
          de: 'Thought Leadership schafft Inbound-Pull und kompetitive Gräben. Überspinge es nicht.'
        },
        whatWedDoDifferently: {
          en: 'We would have started thought leadership earlier (Month 3, not Month 5) to build credibility faster.',
          de: 'Wir hätten Thought Leadership früher gestartet (Monat 3, nicht Monat 5), um Glaubwürdigkeit schneller aufzubauen.'
        }
      }
    ],
    
    playbooks: ['gtm-revenue', 'product', 'strategic-governance'],
    downloadUrl: '/downloads/cases/new-market-segment-entry.pdf',
    
    // RELATED CONTENT
    relatedSolutions: [
      {
        name: { en: 'Accelerate: Hypergrowth', de: 'Accelerate: Hypergrowth' },
        url: '/solutions/accelerate/hypergrowth',
        duration: '12 Months',
        investment: '€153K',
        focus: { en: 'Full Business Transformation - Time to €100M, CAC, ARR Growth', de: 'Volle Business Transformation - Time to €100M, CAC, ARR Growth' },
        outcome: { en: 'Time to €100M -85-91%, CAC -60-80%, ARR Growth +100-200%', de: 'Time to €100M -85-91%, CAC -60-80%, ARR Growth +100-200%' },
        type: 'primary',
        whatYouGet: [
          { en: 'Full Growth Transformation', de: 'Volle Growth Transformation' },
          { en: 'GTM Engine Rebuild', de: 'GTM-Engine Neuaufbau' },
          { en: 'Market Entry Execution', de: 'Markteintritts-Execution' },
          { en: 'Scaling Playbooks', de: 'Skalierungs-Playbooks' },
          { en: 'Outcome Guarantee', de: 'Ergebnis-Garantie' }
        ]
      },
      {
        name: { en: 'Boost: Growth Engine', de: 'Boost: Growth Engine' },
        url: '/solutions/boost/growth-engine',
        duration: '90 Days',
        investment: '€60K-€78K',
        focus: { en: 'GTM Engine Rebuild - ARR Growth, Win Rate, Pipeline', de: 'GTM-Engine Neuaufbau - ARR Growth, Win Rate, Pipeline' },
        outcome: { en: 'ARR Growth +50-100%, Win Rate +30-50%, Pipeline +50-100%', de: 'ARR Growth +50-100%, Win Rate +30-50%, Pipeline +50-100%' },
        type: 'alternative',
        whatYouGet: [
          { en: 'ICP & Positioning Clarity', de: 'ICP & Positionierungs-Klarheit' },
          { en: 'Sales Process Optimization', de: 'Vertriebsprozess-Optimierung' },
          { en: 'Outbound Playbooks', de: 'Outbound-Playbooks' },
          { en: 'Sales Enablement', de: 'Sales Enablement' },
          { en: 'GTM Iteration Support', de: 'GTM-Iterations-Support' }
        ]
      },
      {
        name: { en: 'Power Up: Growth Momentum', de: 'Power Up: Growth Momentum' },
        url: '/solutions/power-up/growth-momentum',
        duration: '4-6 Weeks',
        investment: '€23.6K',
        focus: { en: 'Quick Growth Activation - ICP, Positioning, Playbooks', de: 'Schnelle Growth-Aktivierung - ICP, Positionierung, Playbooks' },
        outcome: { en: 'ARR Growth +30-60pp, Win Rate +30-50%, Pipeline +50-100%', de: 'ARR Growth +30-60pp, Win Rate +30-50%, Pipeline +50-100%' },
        type: 'related',
        whatYouGet: [
          { en: 'ICP Definition', de: 'ICP-Definition' },
          { en: 'Positioning Framework', de: 'Positionierungs-Framework' },
          { en: 'GTM Recommendations', de: 'GTM-Empfehlungen' },
          { en: 'Quick Win Playbooks', de: 'Quick Win Playbooks' }
        ]
      }
    ],
    relatedCaseStudies: [
      { slug: 'cac-crisis-turnaround', teaser: { en: 'How a Series B SaaS company cut CAC by 58% in 12 weeks', de: 'Wie ein Series B SaaS-Unternehmen CAC in 12 Wochen um 58% senkte' } },
      { slug: 'partner-channel-transformed-scalable-growth', teaser: { en: 'How an SME software provider achieved +45.6% revenue growth with 11 partners', de: 'Wie ein KMU-Softwareanbieter +45.6% Umsatzwachstum mit 11 Partnern erreichte' } },
      { slug: 'pricing-redesigned-scalable-growth', teaser: { en: 'How a post-IPO TecDAX company achieved €13.6M revenue growth', de: 'Wie ein Post-IPO TecDAX-Unternehmen €13.6M Umsatzwachstum erreichte' } }
    ],
    relatedPlaybooks: [
      { slug: 'gtm-revenue', teaser: { en: '7-lever framework for AI-native revenue engines', de: '7-Hebel-Framework für AI-native Revenue Engines' } },
      { slug: 'product', teaser: { en: '5-component framework for AI-native product development', de: '5-Komponenten-Framework für AI-native Produktentwicklung' } },
      { slug: 'strategic-governance', teaser: { en: '5-component framework for board confidence', de: '5-Komponenten-Framework für Board-Zuversicht' } }
    ]
  }
];

// Helper functions
export const getCaseStudyBySlug = (slug: string): ClientCaseStudy | undefined => {
  return caseStudies.find(c => c.slug === slug);
};

export const getCaseStudyById = (id: string): ClientCaseStudy | undefined => {
  return caseStudies.find(c => c.id === id);
};

export const getCaseStudiesByChallenge = (challengeType: string): ClientCaseStudy[] => {
  if (challengeType === 'all') return caseStudies;
  return caseStudies.filter(c => c.challengeType === challengeType);
};

export const getCaseStudiesByIndustry = (industry: string): ClientCaseStudy[] => {
  if (industry === 'all') return caseStudies;
  return caseStudies.filter(c => c.industry.toLowerCase().includes(industry.toLowerCase()));
};
