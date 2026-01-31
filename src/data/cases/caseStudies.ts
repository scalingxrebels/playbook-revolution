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
        name: { en: 'Boost: Channel Excellence', de: 'Boost: Channel Excellence' },
        url: '/solutions/boost/channel-excellence',
        duration: '90 Days',
        investment: '€60K-€78K',
        focus: { en: 'Partner Channel Transformation + Enablement', de: 'Partner Channel Transformation + Enablement' },
        outcome: { en: 'Partner Revenue +40-60%, Efficiency +50%', de: 'Partner Revenue +40-60%, Effizienz +50%' },
        type: 'primary'
      },
      {
        name: { en: 'Power Up: Partner Activation', de: 'Power Up: Partner Activation' },
        url: '/solutions/power-up/partner-activation',
        duration: '30 Days',
        investment: '€23.6K',
        focus: { en: 'Quick Partner Enablement Sprint', de: 'Schneller Partner-Enablement-Sprint' },
        outcome: { en: 'Partner Clarity, Quick Wins, Implementation Roadmap', de: 'Partner-Klarheit, Quick Wins, Implementierungs-Roadmap' },
        type: 'alternative'
      },
      {
        name: { en: 'Boost: GTM Transformation', de: 'Boost: GTM Transformation' },
        url: '/solutions/boost/gtm-transformation',
        duration: '90 Days',
        investment: '€60K-€78K',
        focus: { en: 'Repeatable GTM Motion + Playbooks', de: 'Wiederholbare GTM Motion + Playbooks' },
        outcome: { en: 'Sales Velocity +50-100%, Win Rate +30-50%', de: 'Sales Velocity +50-100%, Win Rate +30-50%' },
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
