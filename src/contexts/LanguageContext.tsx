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
  'ml.hero.badge': { en: 'Scaling Expert | Infl. Point', de: 'Scaling Xpert | Infl. Point' },
  'ml.hero.headline': { en: 'I empower people to make the impossible possible.', de: 'Ich befähige Menschen, Unmögliches möglich zu machen.' },
  'ml.hero.value1': { en: 'Scaling Architectures', de: 'Skalierbare Architekturen' },
  'ml.hero.value2': { en: 'AI-Native Systems', de: 'AI-Native Systeme' },
  'ml.hero.value3': { en: 'Founder Coaching', de: 'Founder Coaching' },
  'ml.hero.value4': { en: 'Growth Strategies', de: 'Wachstumsstrategien' },

  // ML Booking
  'ml.booking.select': { en: 'Choose your format:', de: 'Wähle dein Format:' },
  'ml.booking.30min': { en: '30 Min Sync', de: '30 Min Sync' },
  'ml.booking.60min': { en: '60 Min Deep Dive', de: '60 Min Deep Dive' },

  // ML Section 1: Renaissance Thinking
  'ml.section1.title': { en: 'Renaissance Thinking in the AI Era', de: 'Renaissance Thinking in der AI-Ära' },
  'ml.section1.intro': { en: "I'm an autodidact in the best Renaissance tradition – a versatile thinker whose diverse knowledge creates unique connections.", de: 'Ich bin ein Autodidakt im besten Renaissance-Stil – ein vielseitiger Denker, dessen breites Wissen einzigartige Verbindungen schafft.' },
  'ml.section1.text1': { en: 'My passion lies in connecting seemingly unrelated areas of knowledge into systemic solutions. Where others see silos, I see synergies. Where others see complexity, I see patterns.', de: 'Meine Leidenschaft liegt darin, scheinbar unzusammenhängende Wissensbereiche zu systemischen Lösungen zu verbinden. Wo andere Silos sehen, sehe ich Synergien. Wo andere Komplexität sehen, sehe ich Muster.' },
  'ml.section1.text2': { en: 'My journey has led me through many disciplines: from technology to strategy, from psychology to systems theory, from startups to corporations.', de: 'Mein Weg hat mich durch viele Disziplinen geführt: von Technologie zu Strategie, von Psychologie zu Systemtheorie, von Startups zu Konzernen.' },
  'ml.section1.text3': { en: 'This breadth is not a weakness – it is my superpower. In a world of specialists, we need people who see the big picture.', de: 'Diese Breite ist keine Schwäche – sie ist meine Superkraft. In einer Welt der Spezialisten braucht es Menschen, die das große Ganze sehen.' },
  'ml.section1.superpower': { en: 'My Superpowers:', de: 'Meine Superkräfte:' },
  'ml.section1.skill1': { en: 'Seeing patterns where others see chaos', de: 'Muster sehen, wo andere Chaos sehen' },
  'ml.section1.skill2': { en: 'Connecting knowledge across domains', de: 'Wissen über Domänen hinweg verbinden' },
  'ml.section1.skill3': { en: 'Translating complexity into clarity', de: 'Komplexität in Klarheit übersetzen' },
  'ml.section1.skill4': { en: 'Building systems that scale themselves', de: 'Systeme bauen, die sich selbst skalieren' },

  // ML Section 2: Leadership is Love
  'ml.section2.title': { en: 'Leadership is Love in Action', de: 'Leadership ist Liebe in Aktion' },
  'ml.section2.intro': { en: 'I believe that true leadership is a form of love – love for the people you lead, for the mission you serve, and for the potential you unlock.', de: 'Ich glaube, dass wahre Führung eine Form der Liebe ist – Liebe für die Menschen, die du führst, für die Mission, der du dienst, und für das Potenzial, das du freisetzt.' },
  'ml.section2.key': { en: 'This is what drives me every single day:', de: 'Das treibt mich jeden einzelnen Tag an:' },
  'ml.section2.drive1.title': { en: 'People over Processes', de: 'Menschen über Prozesse' },
  'ml.section2.drive1.text': { en: 'Every system, every strategy, every framework is ultimately about people. Technology is a means, humanity is the goal.', de: 'Jedes System, jede Strategie, jedes Framework dreht sich letztlich um Menschen. Technologie ist Mittel, Menschlichkeit ist das Ziel.' },
  'ml.section2.drive2.title': { en: 'Potential over Performance', de: 'Potenzial über Performance' },
  'ml.section2.drive2.text': { en: 'I see in people not what they are, but what they can become. My greatest satisfaction comes from helping others exceed their own expectations.', de: 'Ich sehe in Menschen nicht, was sie sind, sondern was sie werden können. Meine größte Befriedigung liegt darin, anderen zu helfen, ihre eigenen Erwartungen zu übertreffen.' },

  // ML Section 3: Equations
  'ml.section3.title': { en: 'The Equations That Define Me', de: 'Die Gleichungen, die mich definieren' },
  'ml.section3.formula1': { en: 'Expertise × Speed = Impact', de: 'Expertise × Speed = Impact' },
  'ml.section3.formula1.text1': { en: 'In a world that moves ever faster, depth without speed is wasted potential.', de: 'In einer Welt, die sich immer schneller dreht, ist Tiefe ohne Geschwindigkeit verschenktes Potenzial.' },
  'ml.section3.formula1.text2': { en: "It's not about choosing between quality and speed – it's about mastering both simultaneously.", de: 'Es geht nicht darum, zwischen Qualität und Geschwindigkeit zu wählen – es geht darum, beides gleichzeitig zu meistern.' },
  'ml.section3.formula2': { en: 'Growth Engines × Scaling System × AI = Future', de: 'Growth Engines × Scaling System × AI = Zukunft' },
  'ml.section3.formula2.text1': { en: 'The future belongs to those who combine proven growth mechanisms with intelligent systems and the power of AI.', de: 'Die Zukunft gehört denen, die bewährte Wachstumsmechanismen mit intelligenten Systemen und der Kraft der AI kombinieren.' },
  'ml.section3.formula2.text2': { en: "This is not a vision – it's a roadmap.", de: 'Das ist keine Vision – das ist ein Fahrplan.' },
  'ml.section3.formula3': { en: 'Leadership + Love + Joie de Vivre = The Impossible', de: 'Leadership + Love + Lebensfreude = Das Unmögliche' },
  'ml.section3.formula3.text1': { en: 'When leadership comes from the heart, when love drives our actions, and when joie de vivre guides our journey – then the impossible becomes possible.', de: 'Wenn Führung aus dem Herzen kommt, wenn Liebe unsere Handlungen antreibt und Lebensfreude unseren Weg bestimmt – dann wird das Unmögliche möglich.' },
  'ml.section3.formula3.text2': { en: "This is my life philosophy, distilled into a formula.", de: 'Das ist meine Lebensphilosophie, destilliert in eine Formel.' },

  // ML Section 4: Principles (PRICEPLAQE)
  'ml.section4.title': { en: 'PRICEPLAQE', de: 'PRICEPLAQE' },
  'ml.section4.subtitle': { en: 'A Principle for Living', de: 'Ein Prinzip fürs Leben' },
  'ml.principle.p.title': { en: 'Progress', de: 'Progress' },
  'ml.principle.p.desc': { en: 'Continuous improvement. Every day a little better than yesterday.', de: 'Kontinuierliche Verbesserung. Jeden Tag ein bisschen besser als gestern.' },
  'ml.principle.r.title': { en: 'Resilience', de: 'Resilienz' },
  'ml.principle.r.desc': { en: 'Standing up after failure. Antifragility as a mindset.', de: 'Aufstehen nach dem Fallen. Antifragilität als Mindset.' },
  'ml.principle.i.title': { en: 'Integrity', de: 'Integrität' },
  'ml.principle.i.desc': { en: 'Acting according to values. Even when no one is watching.', de: 'Handeln nach Werten. Auch wenn niemand zusieht.' },
  'ml.principle.c.title': { en: 'Curiosity', de: 'Curiosity' },
  'ml.principle.c.desc': { en: 'The endless quest for knowledge. Questions are more valuable than answers.', de: 'Die endlose Suche nach Wissen. Fragen sind wertvoller als Antworten.' },
  'ml.principle.e1.title': { en: 'Empathy', de: 'Empathie' },
  'ml.principle.e1.desc': { en: 'Understanding perspectives. Leading with humanity.', de: 'Perspektiven verstehen. Führen mit Menschlichkeit.' },
  'ml.principle.p2.title': { en: 'Purpose', de: 'Purpose' },
  'ml.principle.p2.desc': { en: 'Acting with meaning. Every action serves a higher goal.', de: 'Handeln mit Sinn. Jede Aktion dient einem höheren Ziel.' },
  'ml.principle.l.title': { en: 'Love', de: 'Love' },
  'ml.principle.l.desc': { en: 'The foundation of everything. Leadership is love in action.', de: 'Die Grundlage von allem. Führung ist Liebe in Aktion.' },
  'ml.principle.a.title': { en: 'Authenticity', de: 'Authentizität' },
  'ml.principle.a.desc': { en: 'Being true to yourself. Wearing masks costs too much energy.', de: 'Sich selbst treu bleiben. Masken tragen kostet zu viel Energie.' },
  'ml.principle.q.title': { en: 'Quality', de: 'Qualität' },
  'ml.principle.q.desc': { en: 'Excellence in execution. Details matter.', de: 'Exzellenz in der Ausführung. Details machen den Unterschied.' },
  'ml.principle.e2.title': { en: 'Energy', de: 'Energie' },
  'ml.principle.e2.desc': { en: 'Positive power. Energy flows where attention goes.', de: 'Positive Kraft. Energie fließt, wo Aufmerksamkeit hingeht.' },

  // ML Section 5: Journey
  'ml.section5.title': { en: 'From Leadership to AI-Native Systems', de: 'Von Leadership zu AI-Native Systems' },
  'ml.section5.origin.title': { en: 'The Beginning', de: 'Der Anfang' },
  'ml.section5.origin.text': { en: '20+ years ago I began my journey as an entrepreneur and leader – always driven by the question: "How do we scale without losing our soul?"', de: 'Vor 20+ Jahren begann ich meinen Weg als Unternehmer und Führungskraft – immer angetrieben von der Frage: "Wie skalieren wir, ohne unsere Seele zu verlieren?"' },
  'ml.section5.evolution.title': { en: 'The Realization', de: 'Die Erkenntnis' },
  'ml.section5.evolution.text': { en: 'I recognized: Traditional scaling leads to bureaucracy, politics, and the loss of what made the company special. There had to be a better way.', de: 'Ich erkannte: Traditionelles Skalieren führt zu Bürokratie, Politik und dem Verlust dessen, was das Unternehmen besonders machte. Es musste einen besseren Weg geben.' },
  'ml.section5.breakthrough.title': { en: 'The Synthesis', de: 'Die Synthese' },
  'ml.section5.breakthrough.text': { en: 'The synthesis of my experience: AI-Native Systems that maintain human values while enabling exponential growth.', de: 'Die Synthese aus meiner Erfahrung: AI-Native Systeme, die menschliche Werte bewahren und gleichzeitig exponentielles Wachstum ermöglichen.' },
  'ml.section5.now.title': { en: 'Today', de: 'Heute' },
  'ml.section5.now.text': { en: 'With ScalingX I help companies achieve their inflection point – the moment when growth becomes superlinear.', de: 'Mit ScalingX helfe ich Unternehmen, ihren Inflection Point zu erreichen – den Moment, in dem Wachstum superlinear wird.' },
  'ml.section5.vision.title': { en: 'What I Am Building:', de: 'Was ich aufbaue:' },
  'ml.section5.vision1': { en: 'The Operating System for scaling companies', de: 'Das Operating System für skalierende Unternehmen' },
  'ml.section5.vision2': { en: 'AI-Native Tools that amplify human potential', de: 'AI-Native Tools, die menschliches Potenzial verstärken' },
  'ml.section5.vision3': { en: 'A community of founders helping founders', de: 'Eine Community von Gründern, die Gründern helfen' },
  'ml.section5.visionText': { en: 'The future belongs to those who build systems that amplify humanity, not replace it.', de: 'Die Zukunft gehört denen, die Systeme bauen, die Menschlichkeit verstärken, nicht ersetzen.' },

  // ML Section 6: Testimonials
  'ml.section6.title': { en: 'What People Say About Me', de: 'Was Menschen über mich sagen' },
  'ml.testimonial1': { en: '"Michel\'s ability to cut through complexity is unparalleled. He helped us see what we couldn\'t see ourselves."', de: '"Michels Fähigkeit, durch Komplexität zu schneiden, ist beispiellos. Er half uns zu sehen, was wir selbst nicht sehen konnten."' },
  'ml.testimonial1.author': { en: 'K., CEO Tech Scale-up', de: 'K., CEO Tech Scale-up' },
  'ml.testimonial2': { en: '"Working with Michel transformed not just our business, but how I think about leadership. True impact."', de: '"Die Arbeit mit Michel hat nicht nur unser Geschäft transformiert, sondern auch wie ich über Führung denke. Echter Impact."' },
  'ml.testimonial2.author': { en: 'M., Founder SaaS Company', de: 'M., Gründer SaaS Unternehmen' },
  'ml.testimonial3': { en: '"Michel connects dots that others don\'t even see. His systems thinking is world-class."', de: '"Michel verbindet Punkte, die andere nicht mal sehen. Sein Systemdenken ist Weltklasse."' },
  'ml.testimonial3.author': { en: 'S., COO Growth Company', de: 'S., COO Wachstumsunternehmen' },
  'ml.testimonial4': { en: '"The clarity Michel brings to chaotic situations is remarkable. He made the impossible feel achievable."', de: '"Die Klarheit, die Michel in chaotische Situationen bringt, ist bemerkenswert. Er ließ das Unmögliche erreichbar erscheinen."' },
  'ml.testimonial4.author': { en: 'A., Managing Director', de: 'A., Geschäftsführer' },
  'ml.testimonial5': { en: '"Michel doesn\'t just advise – he transforms. Our scaling journey accelerated dramatically after working with him."', de: '"Michel berät nicht nur – er transformiert. Unsere Skalierungsreise beschleunigte sich dramatisch nach der Arbeit mit ihm."' },
  'ml.testimonial5.author': { en: 'T., CEO Enterprise Tech', de: 'T., CEO Enterprise Tech' },
  'ml.testimonial6': { en: '"His combination of strategic depth and practical execution is rare. Michel delivers results."', de: '"Seine Kombination aus strategischer Tiefe und praktischer Umsetzung ist selten. Michel liefert Ergebnisse."' },
  'ml.testimonial6.author': { en: 'L., VP Operations', de: 'L., VP Operations' },
  'ml.testimonial7': { en: '"Michel helped us find our inflection point. Three months later, we achieved what we thought would take three years."', de: '"Michel half uns, unseren Inflection Point zu finden. Drei Monate später erreichten wir, was wir dachten, würde drei Jahre dauern."' },
  'ml.testimonial7.author': { en: 'R., Founder & CEO', de: 'R., Gründer & CEO' },
  'ml.testimonial8': { en: '"If you\'re serious about scaling, Michel is the person you want in your corner. Exceptional."', de: '"Wenn du es mit Skalierung ernst meinst, ist Michel die Person, die du an deiner Seite willst. Außergewöhnlich."' },
  'ml.testimonial8.author': { en: 'D., Board Member', de: 'D., Vorstandsmitglied' },

  // ML Section 7: Can't Tolerate
  'ml.section7.title': { en: "What I DON'T Stand For", de: 'Wofür ich NICHT stehe' },
  'ml.section7.item1.title': { en: 'Ego over Impact', de: 'Ego über Impact' },
  'ml.section7.item1.text': { en: 'When personal agendas block company progress, everyone loses. Impact must always come first.', de: 'Wenn persönliche Agenden den Unternehmensfortschritt blockieren, verlieren alle. Impact muss immer an erster Stelle stehen.' },
  'ml.section7.item2.title': { en: 'Complexity Theater', de: 'Komplexitäts-Theater' },
  'ml.section7.item2.text': { en: 'Making things complicated to seem smart is the opposite of smart. Simplicity is the ultimate sophistication.', de: 'Dinge kompliziert zu machen, um klug zu wirken, ist das Gegenteil von klug. Einfachheit ist die höchste Form der Raffinesse.' },
  'ml.section7.item3.title': { en: 'Status Quo Preservation', de: 'Status-Quo-Bewahrung' },
  'ml.section7.item3.text': { en: '"We\'ve always done it this way" is the most dangerous sentence in business. Evolution or extinction.', de: '"Das haben wir schon immer so gemacht" ist der gefährlichste Satz im Business. Evolution oder Aussterben.' },
  'ml.section7.item4.title': { en: 'Fake Hustle', de: 'Fake Hustle' },
  'ml.section7.item4.text': { en: 'Busyness is not productivity. Working smart beats working hard. Results matter, not hours.', de: 'Geschäftigkeit ist nicht Produktivität. Klug arbeiten schlägt hart arbeiten. Ergebnisse zählen, nicht Stunden.' },
  'ml.section7.item5.title': { en: 'Fear-Based Leadership', de: 'Angstbasierte Führung' },
  'ml.section7.item5.text': { en: 'Fear creates compliance, not commitment. True leadership inspires, not intimidates.', de: 'Angst erzeugt Gehorsam, nicht Engagement. Wahre Führung inspiriert, statt einzuschüchtern.' },

  // ML Section 8: Joy
  'ml.section8.title': { en: 'What Brings Me Joy', de: 'Was mir Freude bringt' },
  'ml.section8.joy1.title': { en: 'Breakthrough Moments', de: 'Durchbruchsmomente' },
  'ml.section8.joy1.text': { en: 'That instant when someone sees their own potential for the first time. When the impossible suddenly becomes achievable.', de: 'Der Augenblick, wenn jemand zum ersten Mal sein eigenes Potenzial sieht. Wenn das Unmögliche plötzlich erreichbar wird.' },
  'ml.section8.joy2.title': { en: 'Deep Conversations', de: 'Tiefe Gespräche' },
  'ml.section8.joy2.text': { en: 'Authentic exchanges about ideas, dreams, and what really matters. Conversations that change perspectives.', de: 'Authentischer Austausch über Ideen, Träume und was wirklich zählt. Gespräche, die Perspektiven verändern.' },
  'ml.section8.joy3.title': { en: 'Building Systems', de: 'Systeme bauen' },
  'ml.section8.joy3.text': { en: 'Creating structures that help people flourish. Systems that amplify human potential, not restrict it.', de: 'Strukturen schaffen, die Menschen zum Aufblühen bringen. Systeme, die menschliches Potenzial verstärken, nicht einschränken.' },
  'ml.section8.motto': { en: 'My Life Motto:', de: 'Mein Lebensmotto:' },
  'ml.section8.mottoText': { en: '"Make the impossible possible – every single day."', de: '"Mache das Unmögliche möglich – jeden einzelnen Tag."' },

  // ML Section 9: Vision
  'ml.section9.title': { en: 'My Vision', de: 'Meine Vision' },
  'ml.section9.vision1.title': { en: 'AI-Augmented Humans', de: 'AI-verstärkte Menschen' },
  'ml.section9.vision1.text': { en: 'A world where AI amplifies human potential, not replaces it. Technology in service of humanity.', de: 'Eine Welt, in der AI menschliches Potenzial verstärkt, nicht ersetzt. Technologie im Dienst der Menschlichkeit.' },
  'ml.section9.vision2.title': { en: 'Scaling with Soul', de: 'Skalieren mit Seele' },
  'ml.section9.vision2.text': { en: 'Companies that grow exponentially while maintaining their humanity. Growth that energizes, not exhausts.', de: 'Unternehmen, die exponentiell wachsen und dabei ihre Menschlichkeit bewahren. Wachstum, das energetisiert, nicht erschöpft.' },
  'ml.section9.vision3.title': { en: 'Founders United', de: 'Gründer vereint' },
  'ml.section9.vision3.text': { en: 'A global community where scaling knowledge flows freely. Founders helping founders achieve the impossible.', de: 'Eine globale Community, in der Scaling-Wissen frei fließt. Gründer, die Gründern helfen, das Unmögliche zu erreichen.' },

  // ML Closing
  'ml.closing.title': { en: 'Ready to Make', de: 'Bereit, das Unmögliche' },
  'ml.closing.together': { en: 'the Impossible Possible?', de: 'möglich zu machen?' },
  'ml.closing.text': { en: "Let's explore together how we can unlock your potential and achieve your inflection point.", de: 'Lass uns gemeinsam erkunden, wie wir dein Potenzial freisetzen und deinen Inflection Point erreichen können.' },
  'ml.closing.cta.work': { en: 'Explore ScalingX', de: 'ScalingX erkunden' },
  'ml.closing.cta.book': { en: 'Read My Book', de: 'Mein Buch lesen' },
  'ml.closing.cta.linkedin': { en: 'Connect on LinkedIn', de: 'Auf LinkedIn vernetzen' },
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
