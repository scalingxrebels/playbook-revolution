import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'en' | 'de';

interface Translations {
  [key: string]: {
    en: string;
    de: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', de: 'Start' },
  'nav.calculator': { en: 'ROI Calculator', de: 'ROI-Rechner' },
  'nav.frameworks': { en: 'Frameworks', de: 'Frameworks' },
  'nav.caseStudies': { en: 'Case Studies', de: 'Fallstudien' },
  'nav.knowledge': { en: 'Knowledge Base', de: 'Wissensdatenbank' },
  'nav.playbooks': { en: 'Playbooks', de: 'Playbooks' },
  'nav.community': { en: 'Community', de: 'Community' },
  'nav.research': { en: 'Research', de: 'Forschung' },
  
  // Hero - ScalingX
  'hero.tagline': { en: 'EXPERTISE × SPEED = IMPACT', de: 'EXPERTISE × SPEED = IMPACT' },
  'hero.headline': { 
    en: 'Scaling fails at the system.', 
    de: 'Skalierung scheitert am System.' 
  },
  'hero.subheadline': { 
    en: "We deliver systems and create impact. Growth shouldn't be a struggle, it should have a system.", 
    de: 'Wir liefern Systeme und schaffen Impact. Wachstum sollte kein Kampf sein, es sollte System haben.' 
  },
  'hero.cta': { en: 'Book Inflection Call', de: 'Inflection Call buchen' },
  'hero.learnMore': { en: 'Learn More', de: 'Mehr erfahren' },
  
  // Stats
  'stats.faster': { en: 'faster scaling', de: 'schnelleres Scaling' },
  'stats.efficiency': { en: 'efficiency gain', de: 'Effizienzgewinn' },
  'stats.costReduction': { en: 'cost reduction', de: 'Kostenreduktion' },
  'stats.timeTo100m': { en: 'time to €100M', de: 'Zeit zu €100M' },
  
  // ROI Calculator
  'calc.title': { en: 'ROI Calculator', de: 'ROI-Rechner' },
  'calc.subtitle': { 
    en: 'Compare your potential across different scaling approaches', 
    de: 'Vergleiche dein Potenzial über verschiedene Scaling-Ansätze' 
  },
  'calc.employees': { en: 'Number of Employees', de: 'Anzahl Mitarbeiter' },
  'calc.revenue': { en: 'Annual Revenue (€)', de: 'Jahresumsatz (€)' },
  'calc.growthRate': { en: 'Current Growth Rate (%)', de: 'Aktuelle Wachstumsrate (%)' },
  'calc.cac': { en: 'Customer Acquisition Cost (€)', de: 'Kundenakquisitionskosten (€)' },
  
  'calc.traditional': { en: 'Traditional', de: 'Traditionell' },
  'calc.aiPowered': { en: 'AI-Powered', de: 'AI-Unterstützt' },
  'calc.aiNative': { en: 'AI-Native', de: 'AI-Nativ' },
  
  'calc.revenuePerEmployee': { en: 'Revenue/Employee', de: 'Umsatz/Mitarbeiter' },
  'calc.projectedGrowth': { en: 'Projected Growth', de: 'Prognostiziertes Wachstum' },
  'calc.timeTo100M': { en: 'Time to €100M', de: 'Zeit zu €100M' },
  'calc.coordinationCost': { en: 'Coordination Cost', de: 'Koordinationskosten' },
  'calc.years': { en: 'years', de: 'Jahre' },
  'calc.months': { en: 'months', de: 'Monate' },
  
  'calc.baseline': { en: 'Baseline', de: 'Ausgangswert' },
  'calc.improvement': { en: 'improvement', de: 'Verbesserung' },
  'calc.reduction': { en: 'reduction', de: 'Reduktion' },
  
  // Comparison
  'comparison.title': { en: 'Why Traditional Scaling Fails', de: 'Warum traditionelles Scaling versagt' },
  'comparison.traditional.title': { en: 'Traditional Scaling', de: 'Traditionelles Scaling' },
  'comparison.traditional.desc': { 
    en: 'Linear growth with exponential coordination costs', 
    de: 'Lineares Wachstum mit exponentiellen Koordinationskosten' 
  },
  'comparison.aiPowered.title': { en: 'AI-Powered Scaling', de: 'AI-unterstütztes Scaling' },
  'comparison.aiPowered.desc': { 
    en: 'Accelerated growth with optimized processes', 
    de: 'Beschleunigtes Wachstum mit optimierten Prozessen' 
  },
  'comparison.aiNative.title': { en: 'AI-Native Scaling', de: 'AI-natives Scaling' },
  'comparison.aiNative.desc': { 
    en: 'Superlinear growth with near-zero coordination costs', 
    de: 'Superlineares Wachstum mit nahezu null Koordinationskosten' 
  },

  // Capabilities (DimensionsGrid)
  'capability1': { en: 'Strategy', de: 'Strategie' },
  'capability2': { en: 'Setup', de: 'Setup' },
  'capability3': { en: 'Execution', de: 'Execution' },
  'capability4': { en: 'Operationalization', de: 'Operationalisierung' },
  
  // Team Section
  'team.title': { en: 'The Team', de: 'Das Team' },
  'team.subtitle': { en: "We're not consultants.", de: 'Wir sind keine Berater.' },
  'team.description': { en: "We're walking Inflection Points.", de: 'Wir sind wandelnde Inflection Points.' },
  
  // Hypergrowth System
  'hypergrowth.title': { en: 'Scaling Systems:', de: 'Scaling Systems:' },
  'hypergrowth.subtitle': { en: 'Growth engines that roar.', de: 'Wachstumsmotoren, die brummen.' },
  
  // Offerings
  'offerings.title': { en: 'Strategies', de: 'Strategies' },
  'offerings.subtitle': { en: 'Three paths to measurable impact', de: 'Drei Wege zu messbarem Impact' },
  
  // Footer
  'footer.rights': { en: 'All rights reserved', de: 'Alle Rechte vorbehalten' },
  'footer.privacy': { en: 'Privacy', de: 'Datenschutz' },
  'footer.terms': { en: 'Terms', de: 'AGB' },
  
  // Theme
  'theme.light': { en: 'Light', de: 'Hell' },
  'theme.dark': { en: 'Dark', de: 'Dunkel' },
  
  // General
  'general.loading': { en: 'Loading...', de: 'Laden...' },
  'general.error': { en: 'Error', de: 'Fehler' },
  'general.readMore': { en: 'Read More', de: 'Mehr erfahren' },
  'general.bookCall': { en: 'Book Call', de: 'Call buchen' },
  'general.download': { en: 'Download', de: 'Herunterladen' },
  'general.filter': { en: 'Filter', de: 'Filtern' },
  'general.search': { en: 'Search', de: 'Suchen' },
  'general.all': { en: 'All', de: 'Alle' },
  
  // Playbooks
  'playbooks.title': { en: 'Playbook Library', de: 'Playbook-Bibliothek' },
  'playbooks.subtitle': { en: 'Battle-tested frameworks for AI-Native scaling', de: 'Praxiserprobte Frameworks für AI-Native Scaling' },
  
  // Community
  'community.title': { en: 'Community Hub', de: 'Community Hub' },
  'community.subtitle': { en: 'Connect with scaling experts', de: 'Vernetze dich mit Scaling-Experten' },
  
  // Research
  'research.title': { en: 'Research Foundation', de: 'Research Foundation' },
  'research.subtitle': { en: 'Academic foundations of AI-Native Scaling', de: 'Akademische Grundlagen des AI-Native Scaling' },

  // =====================================================
  // ML (Michel Lindenberg) Page Translations
  // =====================================================

  // ML Hero
  'ml.hero.badge': { en: 'Founder & Managing Partner', de: 'Gründer & Managing Partner' },
  'ml.hero.headline': { en: 'Turning Chaos into Clarity', de: 'Vom Chaos zur Klarheit' },
  'ml.hero.value1': { en: 'Scaling Expert', de: 'Scaling-Experte' },
  'ml.hero.value2': { en: 'System Architect', de: 'System-Architekt' },
  'ml.hero.value3': { en: 'AI Strategist', de: 'AI-Stratege' },
  'ml.hero.value4': { en: 'Growth Partner', de: 'Growth Partner' },

  // ML Booking
  'ml.booking.select': { en: 'Choose your format:', de: 'Wähle dein Format:' },
  'ml.booking.30min': { en: '30 Min Sync', de: '30 Min Sync' },
  'ml.booking.60min': { en: '60 Min Deep Dive', de: '60 Min Deep Dive' },

  // ML Placeholder (legacy - kept for compatibility)
  'ml.placeholder.hero': { en: 'Hero Portrait', de: 'Hero Portrait' },
  'ml.placeholder.hero.desc': { en: 'Professional headshot', de: 'Professionelles Portraitfoto' },
  'ml.placeholder.speaking': { en: 'Speaking', de: 'Speaking' },
  'ml.placeholder.speaking.desc': { en: 'On stage', de: 'Auf der Bühne' },
  'ml.placeholder.workshop': { en: 'Workshop', de: 'Workshop' },
  'ml.placeholder.workshop.desc': { en: 'Team session', de: 'Team-Session' },
  'ml.placeholder.thinking': { en: 'Thinking', de: 'Nachdenken' },
  'ml.placeholder.thinking.desc': { en: 'Contemplating', de: 'Kontemplierend' },
  'ml.placeholder.casual': { en: 'Casual', de: 'Casual' },
  'ml.placeholder.casual.desc': { en: 'Relaxed', de: 'Entspannt' },
  'ml.placeholder.closeup': { en: 'Closeup', de: 'Closeup' },
  'ml.placeholder.closeup.desc': { en: 'Detail shot', de: 'Detailaufnahme' },

  // ML Section 1: Who I Am
  'ml.section1.title': { en: 'Who I Am', de: 'Wer ich bin' },
  'ml.section1.intro': { en: "I'm Michel – a scaling architect who transforms complexity into clarity.", de: 'Ich bin Michel – ein Scaling-Architekt, der Komplexität in Klarheit verwandelt.' },
  'ml.section1.text1': { en: 'For over 15 years, I have been helping founders and leadership teams unlock their next level of growth. My approach combines strategic thinking with hands-on execution.', de: 'Seit über 15 Jahren helfe ich Gründern und Führungsteams, ihr nächstes Wachstumslevel zu erreichen. Mein Ansatz kombiniert strategisches Denken mit praktischer Umsetzung.' },
  'ml.section1.text2': { en: 'I believe that every company has untapped potential – the key is finding the right system to unlock it.', de: 'Ich glaube, dass jedes Unternehmen ungenutztes Potenzial hat – der Schlüssel ist, das richtige System zu finden, um es freizusetzen.' },
  'ml.section1.text3': { en: "My mission: Building companies that scale without breaking – and leaders who grow with their organizations.", de: 'Meine Mission: Unternehmen bauen, die skalieren ohne zu brechen – und Führungskräfte, die mit ihren Organisationen wachsen.' },
  'ml.section1.superpower': { en: 'My Superpower:', de: 'Meine Superkraft:' },
  'ml.section1.skill1': { en: 'Seeing patterns others miss', de: 'Muster sehen, die andere übersehen' },
  'ml.section1.skill2': { en: 'Simplifying complexity', de: 'Komplexität vereinfachen' },
  'ml.section1.skill3': { en: 'Connecting strategy with execution', de: 'Strategie mit Umsetzung verbinden' },
  'ml.section1.why': { en: 'Why ScalingX?', de: 'Warum ScalingX?' },
  'ml.section1.whyAnswer': { en: 'Because scaling is not about doing more – it\'s about doing the right things in the right system.', de: 'Weil Skalieren nicht bedeutet, mehr zu tun – sondern die richtigen Dinge im richtigen System zu tun.' },

  // ML Section 2: What Drives Me
  'ml.section2.title': { en: 'What Drives Me', de: 'Was mich antreibt' },
  'ml.section2.intro': { en: 'I wake up every day with one question: How can I help more founders break through their growth ceiling?', de: 'Ich wache jeden Tag mit einer Frage auf: Wie kann ich mehr Gründern helfen, ihre Wachstumsdecke zu durchbrechen?' },
  'ml.section2.key': { en: 'Potential only becomes reality under the right conditions:', de: 'Potenzial wird nur unter den richtigen Bedingungen Realität:' },
  'ml.section2.condition1': { en: '• Clear strategy that everyone understands', de: '• Klare Strategie, die jeder versteht' },
  'ml.section2.condition2': { en: '• Systems that scale with the team', de: '• Systeme, die mit dem Team skalieren' },
  'ml.section2.condition3': { en: '• Leaders who grow with their challenges', de: '• Führungskräfte, die mit ihren Herausforderungen wachsen' },
  'ml.section2.definition': { en: 'That\'s my definition of sustainable scaling.', de: 'Das ist meine Definition von nachhaltigem Scaling.' },
  'ml.section2.drive1.title': { en: 'Impact over Income', de: 'Impact über Einkommen' },
  'ml.section2.drive1.text': { en: 'I measure success by the transformations I enable, not by the hours I bill.', de: 'Ich messe Erfolg an den Transformationen, die ich ermögliche, nicht an den Stunden, die ich abrechne.' },
  'ml.section2.drive2.title': { en: 'Systems over Shortcuts', de: 'Systeme statt Abkürzungen' },
  'ml.section2.drive2.text': { en: 'Quick fixes create technical debt. Sustainable systems create compound growth.', de: 'Schnelle Lösungen erzeugen technische Schulden. Nachhaltige Systeme erzeugen exponentielles Wachstum.' },

  // ML Section 3: My Formulas
  'ml.section3.title': { en: 'My Formulas', de: 'Meine Formeln' },
  'ml.section3.formula1': { en: 'Clarity × Focus = Velocity', de: 'Klarheit × Fokus = Geschwindigkeit' },
  'ml.section3.formula1.text1': { en: 'Most companies are not slow because they lack talent. They are slow because they lack clarity.', de: 'Die meisten Unternehmen sind nicht langsam, weil ihnen Talent fehlt. Sie sind langsam, weil ihnen Klarheit fehlt.' },
  'ml.section3.formula1.text2': { en: 'When everyone knows exactly what to do and why, execution accelerates exponentially.', de: 'Wenn jeder genau weiß, was zu tun ist und warum, beschleunigt sich die Umsetzung exponentiell.' },
  'ml.section3.formula1.text3': { en: 'The first step is always: Remove the fog.', de: 'Der erste Schritt ist immer: Den Nebel beseitigen.' },
  'ml.section3.formula1.result': { en: 'Result: Teams that move 3x faster with half the meetings.', de: 'Ergebnis: Teams, die 3x schneller arbeiten mit der Hälfte der Meetings.' },
  'ml.section3.formula2': { en: 'Systems > Willpower', de: 'Systeme > Willenskraft' },
  'ml.section3.formula2.text1': { en: 'Willpower is a finite resource.', de: 'Willenskraft ist eine begrenzte Ressource.' },
  'ml.section3.formula2.text2': { en: 'The best companies don\'t rely on heroic efforts – they build systems that make success inevitable.', de: 'Die besten Unternehmen verlassen sich nicht auf heroische Anstrengungen – sie bauen Systeme, die Erfolg unvermeidlich machen.' },
  'ml.section3.formula2.result': { en: 'Result: Consistent growth that doesn\'t depend on individual performance.', de: 'Ergebnis: Konsistentes Wachstum, das nicht von Einzelleistungen abhängt.' },
  'ml.section3.formula3': { en: 'AI × Human = Superlinear', de: 'AI × Mensch = Superlinear' },
  'ml.section3.formula3.text1': { en: 'AI is not here to replace humans. It\'s here to amplify human potential.', de: 'AI ist nicht hier, um Menschen zu ersetzen. Sie ist hier, um menschliches Potenzial zu verstärken.' },
  'ml.section3.formula3.text2': { en: 'The companies that win will be those who master the human-AI collaboration.', de: 'Die Unternehmen, die gewinnen, werden diejenigen sein, die die Mensch-AI-Kollaboration meistern.' },
  'ml.section3.formula3.result': { en: 'Result: 10x output with the same headcount.', de: 'Ergebnis: 10x Output mit der gleichen Mitarbeiterzahl.' },

  // ML Section 4: Principles (PRICEPLAQE)
  'ml.section4.title': { en: 'My Principles', de: 'Meine Prinzipien' },
  'ml.section4.subtitle': { en: 'The PRICEPLAQE Framework', de: 'Das PRICEPLAQE Framework' },
  'ml.principle.p.title': { en: 'Purpose First', de: 'Purpose First' },
  'ml.principle.p.desc': { en: 'Every action starts with "why"', de: 'Jede Handlung beginnt mit "warum"' },
  'ml.principle.r.title': { en: 'Results over Activity', de: 'Ergebnisse statt Aktivität' },
  'ml.principle.r.desc': { en: 'Outcomes matter, not hours worked', de: 'Ergebnisse zählen, nicht Arbeitsstunden' },
  'ml.principle.i.title': { en: 'Iterate Rapidly', de: 'Schnell iterieren' },
  'ml.principle.i.desc': { en: 'Small experiments beat big plans', de: 'Kleine Experimente schlagen große Pläne' },
  'ml.principle.c.title': { en: 'Clarity Always', de: 'Immer Klarheit' },
  'ml.principle.c.desc': { en: 'If it\'s not clear, it\'s not ready', de: 'Wenn es nicht klar ist, ist es nicht bereit' },
  'ml.principle.e1.title': { en: 'Embrace Constraints', de: 'Grenzen umarmen' },
  'ml.principle.e1.desc': { en: 'Limitations spark creativity', de: 'Einschränkungen fördern Kreativität' },
  'ml.principle.p2.title': { en: 'People over Process', de: 'Menschen über Prozesse' },
  'ml.principle.p2.desc': { en: 'Trust your team, not just the system', de: 'Vertraue deinem Team, nicht nur dem System' },
  'ml.principle.l.title': { en: 'Learn Continuously', de: 'Kontinuierlich lernen' },
  'ml.principle.l.desc': { en: 'Growth mindset in everything', de: 'Growth Mindset in allem' },
  'ml.principle.a.title': { en: 'Act with Urgency', de: 'Mit Dringlichkeit handeln' },
  'ml.principle.a.desc': { en: 'Speed is a competitive advantage', de: 'Geschwindigkeit ist ein Wettbewerbsvorteil' },
  'ml.principle.q.title': { en: 'Question Everything', de: 'Alles hinterfragen' },
  'ml.principle.q.desc': { en: 'Sacred cows make the best hamburgers', de: 'Heilige Kühe machen die besten Burger' },
  'ml.principle.e2.title': { en: 'Execute with Excellence', de: 'Exzellent umsetzen' },
  'ml.principle.e2.desc': { en: 'Details matter at scale', de: 'Details zählen bei der Skalierung' },

  // ML Section 5: Journey
  'ml.section5.title': { en: 'My Journey', de: 'Mein Weg' },
  'ml.section5.origin.title': { en: 'The Origin', de: 'Der Ursprung' },
  'ml.section5.origin.text': { en: 'Started as a developer, quickly realized that code is just one piece of the puzzle. The real challenge is building systems that work for humans.', de: 'Begonnen als Entwickler, schnell erkannt, dass Code nur ein Teil des Puzzles ist. Die wahre Herausforderung ist, Systeme zu bauen, die für Menschen funktionieren.' },
  'ml.section5.evolution.title': { en: 'The Evolution', de: 'Die Evolution' },
  'ml.section5.evolution.text': { en: 'Moved from building products to building companies. Learned that the best technology means nothing without the right team and culture.', de: 'Vom Produkte-Bauen zum Unternehmen-Bauen gewechselt. Gelernt, dass die beste Technologie nichts bedeutet ohne das richtige Team und die richtige Kultur.' },
  'ml.section5.breakthrough.title': { en: 'The Breakthrough', de: 'Der Durchbruch' },
  'ml.section5.breakthrough.text': { en: 'Discovered that scaling follows patterns. The same principles that work for startups work for enterprises – just at different magnitudes.', de: 'Entdeckt, dass Skalierung Mustern folgt. Die gleichen Prinzipien, die für Startups funktionieren, funktionieren für Enterprises – nur in anderen Größenordnungen.' },
  'ml.section5.now.title': { en: 'Today', de: 'Heute' },
  'ml.section5.now.text': { en: 'Building ScalingX to democratize scaling knowledge. Making AI-Native growth accessible to every ambitious founder.', de: 'Baue ScalingX, um Scaling-Wissen zu demokratisieren. AI-Native Wachstum für jeden ambitionierten Gründer zugänglich machen.' },
  'ml.section5.vision.title': { en: 'What I\'m Building:', de: 'Was ich baue:' },
  'ml.section5.vision1': { en: 'The operating system for scaling companies', de: 'Das Betriebssystem für skalierende Unternehmen' },
  'ml.section5.vision2': { en: 'AI-Native tools that amplify human potential', de: 'AI-Native Tools, die menschliches Potenzial verstärken' },
  'ml.section5.vision3': { en: 'A community of founders helping founders', de: 'Eine Community von Gründern, die Gründern helfen' },
  'ml.section5.visionText': { en: 'The future belongs to those who build systems, not just products.', de: 'Die Zukunft gehört denen, die Systeme bauen, nicht nur Produkte.' },

  // ML Section 6: Testimonials
  'ml.section6.title': { en: 'What People Say', de: 'Was andere sagen' },
  'ml.testimonial1': { en: 'Michel sees what others miss. He transformed our chaos into a scaling machine.', de: 'Michel sieht, was andere übersehen. Er verwandelte unser Chaos in eine Skalierungsmaschine.' },
  'ml.testimonial2': { en: 'Working with Michel is like having a GPS for growth. He always knows the fastest route.', de: 'Mit Michel zu arbeiten ist wie ein GPS für Wachstum zu haben. Er kennt immer die schnellste Route.' },
  'ml.testimonial3': { en: 'The clarity Michel brings is worth 10x what you pay. Everything suddenly makes sense.', de: 'Die Klarheit, die Michel bringt, ist 10x wert, was man zahlt. Plötzlich ergibt alles Sinn.' },
  'ml.testimonial4': { en: 'We went from 5M to 25M ARR in 18 months. Michel\'s systems made it possible.', de: 'Wir gingen von 5M auf 25M ARR in 18 Monaten. Michels Systeme haben es möglich gemacht.' },
  'ml.testimonial5': { en: 'He doesn\'t just consult – he transforms. Our entire leadership team operates differently now.', de: 'Er berät nicht nur – er transformiert. Unser gesamtes Führungsteam arbeitet jetzt anders.' },
  'ml.testimonial6': { en: 'Michel asked the questions we were afraid to ask ourselves. Game changer.', de: 'Michel stellte die Fragen, die wir uns selbst nicht zu stellen wagten. Game Changer.' },
  'ml.testimonial7': { en: 'If you want to scale without burning out your team, Michel is the person to call.', de: 'Wenn du skalieren willst, ohne dein Team auszubrennen, ist Michel die richtige Person.' },
  'ml.testimonial8': { en: 'The best investment we made was getting Michel involved early. Saved us years of mistakes.', de: 'Die beste Investition war, Michel früh einzubeziehen. Hat uns Jahre von Fehlern erspart.' },

  // ML Section 7: Can't Tolerate
  'ml.section7.title': { en: 'What I Can\'t Tolerate', de: 'Was ich nicht toleriere' },
  'ml.section7.item1.title': { en: 'Fake Hustle', de: 'Fake Hustle' },
  'ml.section7.item1.text': { en: 'Busyness is not productivity. I optimize for outcomes, not optics.', de: 'Geschäftigkeit ist keine Produktivität. Ich optimiere für Ergebnisse, nicht für Optik.' },
  'ml.section7.item2.title': { en: 'Ego over Impact', de: 'Ego über Impact' },
  'ml.section7.item2.text': { en: 'When personal agendas block company progress, everyone loses.', de: 'Wenn persönliche Agenden den Unternehmensfortschritt blockieren, verlieren alle.' },
  'ml.section7.item3.title': { en: 'Excuses', de: 'Ausreden' },
  'ml.section7.item3.text': { en: 'Reasons why it won\'t work are easy. Solutions are what matter.', de: 'Gründe, warum es nicht funktioniert, sind einfach. Lösungen sind das, was zählt.' },
  'ml.section7.item4.title': { en: 'Status Quo Thinking', de: 'Status-Quo-Denken' },
  'ml.section7.item4.text': { en: '"That\'s how we\'ve always done it" is the most dangerous sentence in business.', de: '"So haben wir es schon immer gemacht" ist der gefährlichste Satz im Business.' },
  'ml.section7.item5.title': { en: 'Complexity Theater', de: 'Komplexitäts-Theater' },
  'ml.section7.item5.text': { en: 'Making things complicated to seem smart is the opposite of smart.', de: 'Dinge kompliziert zu machen, um klug zu wirken, ist das Gegenteil von klug.' },

  // ML Section 8: Joy
  'ml.section8.title': { en: 'What Brings Me Joy', de: 'Was mir Freude bringt' },
  'ml.section8.joyLabel': { en: 'Joy', de: 'Freude' },
  'ml.section8.joy1': { en: 'Seeing the "aha moment" when complexity suddenly becomes simple.', de: 'Den "Aha-Moment" sehen, wenn Komplexität plötzlich einfach wird.' },
  'ml.section8.joy2': { en: 'Watching founders grow into the leaders their companies need.', de: 'Gründer dabei beobachten, wie sie zu den Führungskräften werden, die ihre Unternehmen brauchen.' },
  'ml.section8.joy3': { en: 'Building systems that keep working long after I\'m gone.', de: 'Systeme bauen, die noch lange funktionieren, nachdem ich weg bin.' },
  'ml.section8.motto': { en: 'My motto:', de: 'Mein Motto:' },
  'ml.section8.mottoText': { en: 'Leave every company, team, and person better than you found them.', de: 'Hinterlasse jedes Unternehmen, Team und jede Person besser, als du sie vorgefunden hast.' },

  // ML Section 9: Vision
  'ml.section9.title': { en: 'My Vision', de: 'Meine Vision' },
  'ml.section9.vision1.title': { en: 'AI-Native Everything', de: 'AI-Native überall' },
  'ml.section9.vision1.text': { en: 'A world where AI amplifies human potential in every organization.', de: 'Eine Welt, in der AI menschliches Potenzial in jeder Organisation verstärkt.' },
  'ml.section9.vision2.title': { en: 'Scaling Without Suffering', de: 'Skalieren ohne Leiden' },
  'ml.section9.vision2.text': { en: 'Growth that energizes instead of exhausts. Systems that serve humans.', de: 'Wachstum, das energetisiert statt erschöpft. Systeme, die Menschen dienen.' },
  'ml.section9.vision3.title': { en: 'Founders United', de: 'Gründer vereint' },
  'ml.section9.vision3.text': { en: 'A global community where scaling knowledge flows freely between founders.', de: 'Eine globale Community, in der Scaling-Wissen frei zwischen Gründern fließt.' },

  // ML Closing
  'ml.closing.title': { en: "Let's Build Something", de: 'Lass uns etwas bauen' },
  'ml.closing.together': { en: 'Extraordinary Together', de: 'Außergewöhnliches zusammen' },
  'ml.closing.text': { en: 'Whether you\'re stuck, scaling, or just getting started – I\'d love to hear your story and see if we can create something amazing together.', de: 'Ob du feststeckst, skalierst oder gerade erst anfängst – ich würde gerne deine Geschichte hören und sehen, ob wir zusammen etwas Großartiges schaffen können.' },
  'ml.closing.cta.work': { en: 'Explore Our Work', de: 'Unsere Arbeit entdecken' },
  'ml.closing.cta.book': { en: 'Read My Book', de: 'Mein Buch lesen' },
  'ml.closing.cta.linkedin': { en: 'Connect on LinkedIn', de: 'Auf LinkedIn vernetzen' },

  // ML Footer
  'ml.footer.quote1': { en: '"The best time to build a system was yesterday. The second best time is now."', de: '"Die beste Zeit, ein System zu bauen, war gestern. Die zweitbeste Zeit ist jetzt."' },
  'ml.footer.quote2': { en: 'Clarity × Focus = Velocity', de: 'Klarheit × Fokus = Geschwindigkeit' },
  'ml.footer.quote3': { en: 'Michel Lindenberg • ScalingX', de: 'Michel Lindenberg • ScalingX' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
