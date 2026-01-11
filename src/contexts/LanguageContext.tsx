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

  // ============================================
  // ML PAGE TRANSLATIONS
  // ============================================
  
  // ML Hero
  'ml.hero.badge': { en: 'AI-Native Renaissance Leader', de: 'AI-Native Renaissance Leader' },
  'ml.hero.headline': { en: 'I empower people to make the impossible possible.', de: 'Ich befähige Menschen, Unmögliches möglich zu machen.' },
  'ml.hero.value1': { en: 'With leadership that empowers.', de: 'Mit Leadership, das empowert.' },
  'ml.hero.value2': { en: 'With systems that scale.', de: 'Mit Systemen, die skalieren.' },
  'ml.hero.value3': { en: 'With AI that democratizes.', de: 'Mit AI, die demokratisiert.' },
  'ml.hero.value4': { en: 'With joie de vivre that inspires.', de: 'Mit Lebensfreude, die ansteckt.' },
  
  // ML Booking
  'ml.booking.30min': { en: '30 Min Sync Call', de: '30 Min Sync Call' },
  'ml.booking.60min': { en: '60 Min Deep Dive', de: '60 Min Deep Dive' },
  'ml.booking.select': { en: 'Select a booking option:', de: 'Wähle eine Buchungsoption:' },
  
  // ML Section 1: Who I Am
  'ml.section1.title': { en: 'Renaissance Thinking in the AI Era', de: 'Renaissance Thinking in der AI-Ära' },
  'ml.section1.intro': { en: "I'm not a specialist. I'm an orchestrator.", de: 'Ich bin kein Spezialist. Ich bin ein Orchestrator.' },
  'ml.section1.text1': { en: 'Someone who loves complexity and transforms it into clarity.', de: 'Jemand, der Komplexität liebt und in Klarheit verwandelt.' },
  'ml.section1.text2': { en: 'Someone who connects technology with humanity.', de: 'Jemand, der Technologie mit Menschlichkeit verbindet.' },
  'ml.section1.text3': { en: 'Someone who navigates through chaos with optimism.', de: 'Jemand, der mit Optimismus durch Chaos navigiert.' },
  'ml.section1.superpower': { en: 'My superpower? Versatility.', de: 'Meine Superkraft? Vielseitigkeit.' },
  'ml.section1.skill1': { en: 'Strategy × Operations × Technology × People', de: 'Strategie × Operations × Technologie × Menschen' },
  'ml.section1.skill2': { en: 'CFO × CRO × COO × CEO perspective', de: 'CFO × CRO × COO × CEO-Perspektive' },
  'ml.section1.skill3': { en: 'Science × Practice × Innovation', de: 'Wissenschaft × Praxis × Innovation' },
  'ml.section1.why': { en: 'Why does this matter?', de: 'Warum das wichtig ist?' },
  'ml.section1.whyAnswer': { en: "Because the most complex problems aren't solved at desks, but at intersections. I live at these intersections. And in the future.", de: 'Weil die komplexesten Probleme nicht an Schreibtischen gelöst werden, sondern an Schnittstellen. Ich lebe an diesen Schnittstellen. Und in der Zukunft.' },
  
  // ML Section 2: What Drives Me
  'ml.section2.title': { en: 'Leadership is Love in Action', de: 'Leadership ist Liebe in Aktion' },
  'ml.section2.intro': { en: 'My story began with a realization:', de: 'Meine Story begann mit einer Erkenntnis:' },
  'ml.section2.key': { en: "People can do things they didn't think possible.", de: 'Menschen können Dinge tun, die sie selbst nicht für möglich halten.' },
  'ml.section2.condition1': { en: 'When you give them frameworks.', de: 'Wenn du ihnen Rahmenbedingungen gibst.' },
  'ml.section2.condition2': { en: 'When you give them trust.', de: 'Wenn du ihnen Vertrauen schenkst.' },
  'ml.section2.condition3': { en: 'When you make knowledge accessible to them.', de: 'Wenn du ihnen Wissen zugänglich machst.' },
  'ml.section2.definition': { en: "That's leadership. Empowerment instead of control.", de: 'Das ist Leadership. Empowerment statt Kontrolle.' },
  'ml.section2.drive1.title': { en: '1. Empowering people to achieve the impossible', de: '1. Menschen zu Unmöglichem befähigen' },
  'ml.section2.drive1.text': { en: "I love it when people surpass themselves. When they achieve things they didn't believe they could. That's empowerment.", de: 'Ich liebe es, wenn Menschen über sich hinauswachsen. Wenn sie Dinge erreichen, von denen sie selbst nicht glaubten, dass sie es können. Das ist Empowerment.' },
  'ml.section2.drive2.title': { en: '2. Innovation that makes the world better', de: '2. Innovation, die die Welt besser macht' },
  'ml.section2.drive2.text': { en: 'I believe we solve our biggest challenges by rethinking things. And that startups are the way to make our future better. Especially those that democratize expert knowledge.', de: 'Ich glaube, dass wir unsere größten Herausforderungen lösen, indem wir Dinge neu denken. Und dass Startups der Weg sind, um unsere Zukunft besser zu machen. Besonders die, die Expertenwissen demokratisieren.' },
  
  // ML Section 3: My Formulas
  'ml.section3.title': { en: 'The Equations That Define Me', de: 'Die Gleichungen, die mich definieren' },
  'ml.section3.formula1': { en: 'Expertise × Speed = Impact', de: 'Expertise × Speed = Impact' },
  'ml.section3.formula1.text1': { en: "I work damn fast. Not because I'm superficial, but because I quickly grasp connections and recognize patterns.", de: 'Ich arbeite verdammt schnell. Nicht weil ich oberflächlich bin, sondern weil ich Zusammenhänge rasch erfasse und Muster erkenne.' },
  'ml.section3.formula1.text2': { en: 'I understand complex relationships in minutes. What costs others weeks, costs me hours.', de: 'Komplexe Zusammenhänge verstehe ich in Minuten. Was andere Wochen kostet, kostet mich Stunden.' },
  'ml.section3.formula1.text3': { en: 'Speed without expertise is shoddy work. Expertise without speed is a waste of time.', de: 'Geschwindigkeit ohne Expertise ist Pfusch. Expertise ohne Geschwindigkeit ist Zeitverschwendung.' },
  'ml.section3.formula1.result': { en: "Both together? That's impact.", de: 'Beides zusammen? Das ist Impact.' },
  'ml.section3.formula2': { en: 'Growth Engines × Scaling Systems × AI = Hypergrowth', de: 'Growth Engines × Scaling Systems × AI = Hypergrowth' },
  'ml.section3.formula2.text1': { en: "I don't build processes. I build living systems.", de: 'Ich baue nicht Prozesse. Ich baue lebende Systeme.' },
  'ml.section3.formula2.text2': { en: 'Systems that grow with you. Systems that learn. Systems that multiply people instead of replacing them.', de: 'Systeme, die mit dir wachsen. Systeme, die lernen. Systeme, die Menschen multiplizieren statt ersetzen.' },
  'ml.section3.formula2.result': { en: "AI-Native isn't the future. It's the present - for those who are ready.", de: 'AI-Native ist nicht die Zukunft. Es ist die Gegenwart - für die, die bereit sind.' },
  'ml.section3.formula3': { en: 'Leadership × Love × Joie de Vivre = The Impossible', de: 'Leadership × Love × Lebensfreude = Unmögliches' },
  'ml.section3.formula3.text1': { en: 'Scaling is messy. Chaotic. Overwhelming. You need someone who does it with joy.', de: 'Scaling ist messy. Chaotisch. Überwältigend. Du brauchst jemanden, der das mit Freude macht.' },
  'ml.section3.formula3.text2': { en: 'I navigate through chaos with optimism as my superpower. With zest for life, lightness of being. With the conviction that together we can achieve the impossible.', de: 'Ich navigiere durch Chaos mit Optimismus als Superpower. Mit Lebenslust, Leichtigkeit des Seins. Mit der Überzeugung, dass wir gemeinsam Unmögliches erreichen können.' },
  'ml.section3.formula3.result': { en: 'Leadership is love in action. And love is the strongest fuel there is.', de: 'Leadership ist Liebe in Aktion. Und Liebe ist der stärkste Treibstoff, den es gibt.' },
  
  // ML Section 4: Principles
  'ml.section4.title': { en: 'PRICEPLAQE', de: 'PRICEPLAQE' },
  'ml.section4.subtitle': { en: 'The 10 principles I live by', de: 'Die 10 Grundsätze, nach denen ich lebe' },
  'ml.principle.p.title': { en: 'Potential', de: 'Potential' },
  'ml.principle.p.desc': { en: "Everyone is a leader. That's how I see people.", de: 'Jeder ist ein Leader. So sehe ich Menschen.' },
  'ml.principle.r.title': { en: 'Responsibility & Responsiveness', de: 'Responsibility & Responsiveness' },
  'ml.principle.r.desc': { en: 'Taking responsibility for projects, processes, people. And for how we respond to situations.', de: 'Verantwortung übernehmen für Projekte, Prozesse, Menschen. Und für die Art, wie wir auf Situationen reagieren.' },
  'ml.principle.i.title': { en: 'Improve', de: 'Improve' },
  'ml.principle.i.desc': { en: 'Curiosity and self-improvement. You can always learn, experiment, get better.', de: 'Neugier und Selbstverbesserung. Man kann immer lernen, ausprobieren, besser werden.' },
  'ml.principle.c.title': { en: 'Crew / Team / Togetherness', de: 'Crew / Team / Togetherness' },
  'ml.principle.c.desc': { en: 'Achieving goals together. Acting as partners.', de: 'Gemeinsam Ziele erreichen. Als Partner agieren.' },
  'ml.principle.e1.title': { en: 'Experience / Eudaimonia', de: 'Experience / Eudaimonia' },
  'ml.principle.e1.desc': { en: 'Making the most of life. An experience in a certain time - but giving the experience its time.', de: 'Das Beste aus dem Leben machen. Eine Erfahrung in einer bestimmten Zeit - aber der Erfahrung ihre Zeit lassen.' },
  'ml.principle.p2.title': { en: 'Positivity', de: 'Positivity' },
  'ml.principle.p2.desc': { en: 'Think positive. Stay motivated. Remain resilient. Never give up.', de: 'Positiv denken. Motiviert sein. Resilient bleiben. Niemals aufgeben.' },
  'ml.principle.l.title': { en: 'Laserfocus / Impact', de: 'Laserfocus / Impact' },
  'ml.principle.l.desc': { en: 'Focus on the things that really matter. Discard the rest.', de: 'Fokus auf die Dinge, die wirklich wichtig sind. Den Rest verwerfen.' },
  'ml.principle.a.title': { en: 'Ambition', de: 'Ambition' },
  'ml.principle.a.desc': { en: 'Dream big. Think big.', de: 'Träume groß. Denke groß.' },
  'ml.principle.q.title': { en: 'Quality / Excellence', de: 'Quality / Excellence' },
  'ml.principle.q.desc': { en: 'Be excellent at what you do. In the things that really matter.', de: 'Sei exzellent in dem, was du tust. In den Dingen, die wirklich wichtig sind.' },
  'ml.principle.e2.title': { en: 'Equality', de: 'Equality' },
  'ml.principle.e2.desc': { en: 'Everyone is equal. Meet everyone at eye level.', de: 'Jeder ist gleich. Begegne jedem auf Augenhöhe.' },
  
  // ML Section 5: Journey
  'ml.section5.title': { en: 'From Leadership to AI-Native Systems', de: 'Von Leadership zu AI-Native Systems' },
  'ml.section5.origin.title': { en: 'Origin: Leadership as Foundation', de: 'Origin: Leadership als Fundament' },
  'ml.section5.origin.text': { en: 'My story began in the Swiss Army. Not because of discipline or hierarchy. But because I discovered there that I have a talent for leadership. And that knowledge is the foundation for excellence.', de: 'Meine Story begann in der Schweizer Armee. Nicht wegen Disziplin oder Hierarchie. Sondern weil ich dort entdeckte, dass ich ein Talent für Führung habe. Und dass Wissen die Grundlage für Exzellenz ist.' },
  'ml.section5.evolution.title': { en: 'Evolution: University of St. Gallen', de: 'Evolution: Uni St. Gallen' },
  'ml.section5.evolution.text': { en: "At university I found my love for strategy, startups and science. I almost failed. But through hard work I learned: Continuous development doesn't need courses. It needs inner drive.", de: 'An der Uni fand ich meine Liebe zu Strategie, Startups und Wissenschaft. Ich bin fast gescheitert. Aber durch harte Arbeit habe ich gelernt: Kontinuierliche Weiterentwicklung braucht keine Kurse. Sie braucht inneren Antrieb.' },
  'ml.section5.breakthrough.title': { en: 'Breakthrough: smapOne', de: 'Breakthrough: smapOne' },
  'ml.section5.breakthrough.text': { en: 'Finally released the handbrake. Finally degrees of freedom instead of limitations. Recognized AI before ChatGPT came. Expanded market leadership. Grew faster than the market. Then time for the next step: My own path with AI-Native Execution.', de: 'Endlich Handbremse gelöst. Endlich Freiheitsgrade statt Limitierungen. AI erkannt, bevor ChatGPT kam. Marktleadership ausgebaut. Schneller gewachsen als der Markt. Dann Zeit für den nächsten Schritt: Der eigene Weg mit AI-Native Execution.' },
  'ml.section5.now.title': { en: 'Revolution: ScalingX, Fix Growth & AI-Native Systems', de: 'Revolution: ScalingX, Fix Growth & AI-Native Systems' },
  'ml.section5.now.text': { en: '2024: Founded ScalingX. 2025: Founded ScalingX Hypergrowth. Book "Fix Growth. Scale Faster." published. First investments with ScalingX Ventures. 8 customers, 11 projects. From solo to team and company. Built 5 AI tools.', de: '2024: ScalingX gegründet. 2025: ScalingX Hypergrowth gegründet. Das Buch "Fix Growth. Scale Faster." erschienen. Erste Investments mit ScalingX Ventures. 8 Kunden, 11 Projekte. Von Einzelkämpfer zu Team und Company. 5 AI-Tools gebaut.' },
  'ml.section5.vision.title': { en: 'AI-Native Target Pictures:', de: 'AI-Native Zielbilder:' },
  'ml.section5.vision1': { en: 'AI-Native Scaling OS', de: 'AI-Native Scaling OS' },
  'ml.section5.vision2': { en: 'AI-Native Growth', de: 'AI-Native Growth' },
  'ml.section5.vision3': { en: 'AI-Native Board & Venture Governance', de: 'AI-Native Board & Venture Governance' },
  'ml.section5.visionText': { en: 'The vision: Systems that grow with you. That learn. That empower. That multiply people instead of replacing them.', de: 'Die Vision: Systeme, die mit dir wachsen. Die lernen. Die empowern. Die Menschen multiplizieren statt ersetzen.' },
  
  // ML Section 6: Testimonials
  'ml.section6.title': { en: 'What People Say About Me', de: 'Was Menschen über mich sagen' },
  'ml.testimonial1': { en: 'You are one of the most brilliant speakers I have ever seen.', de: 'Du bist einer der brillantesten Redner, die ich je gesehen habe.' },
  'ml.testimonial2': { en: "Through your leadership I learn to trust myself. You are coach, mentor and role model - and yet you always make me feel like we're on the same level.", de: 'Durch deine Führung lerne ich, mir selbst zu vertrauen. Du bist Coach, Mentor und Vorbild - und gibst mir trotzdem immer das Gefühl von Augenhöhe.' },
  'ml.testimonial3': { en: "Jack of all trades. First mentor. That's who I want to be.", de: 'Tausendsassa. Erster Mentor. So möchte ich sein.' },
  'ml.testimonial4': { en: 'I really appreciated that you made business topics so approachable. You were often a voice of reason.', de: 'Ich habe an dir sehr geschätzt, dass du Business-Themen so nahbar gemacht hast. Du warst oft ein Fels der Vernunft.' },
  'ml.testimonial5': { en: "You've accomplished a lot and above all brought professionalism. You're a genuine person with a lot of empathy and have a lot going for you.", de: 'Du hast super viel bewegt und vor allem Professionalität reingebracht. Du bist ein echter Typ mit viel Empathie und hast eine Menge auf dem Kasten.' },
  'ml.testimonial6': { en: "I've had several supervisors in my career. You are one of the few human bosses.", de: 'Ich hatte schon einige Vorgesetzte in meiner beruflichen Laufbahn. Du gehörst zu den wenigen menschlichen Chefs.' },
  'ml.testimonial7': { en: "Your way of inspiring, your open, friendly and winning way of communicating - that's what won me over. You have endless power and knowledge.", de: 'Deine Art zu begeistern, deine offene, freundliche und gewinnende Art zu kommunizieren - damit hast du mich eingenommen. Du hast Power ohne Ende und Wissen.' },
  'ml.testimonial8': { en: 'The project was inspiring, challenging and structured. The result was breathtaking. Unreserved recommendation.', de: 'Das Projekt war inspirierend, herausfordernd und strukturiert. Das Resultat war atemberaubend. Uneingeschränkte Empfehlung.' },
  
  // ML Section 7: Can't Tolerate
  'ml.section7.title': { en: "What I DON'T Stand For", de: 'Wofür ich NICHT stehe' },
  'ml.section7.item1.title': { en: 'Shoddy Work', de: 'Pfusch' },
  'ml.section7.item1.text': { en: 'Avoiding efforts that make absolute sense. Doing things superficially.', de: 'Aufwände scheuen, die absolut sinnvoll sind. Dinge oberflächlich machen.' },
  'ml.section7.item2.title': { en: 'Wasting Time', de: 'Zeitverschwendung' },
  'ml.section7.item2.text': { en: 'Wrong decisions. Delayed topics. Not doing things, doing them too late, doing them wrong.', de: 'Falsche Entscheidungen. Verschleppte Themen. Dinge nicht tun, zu spät tun, falsch tun.' },
  'ml.section7.item3.title': { en: 'People as Means to an End', de: 'Menschen als Mittel zum Zweck' },
  'ml.section7.item3.text': { en: 'Viewing them as merely executing or stupid people.', de: 'Als rein ausführende oder dumme Personen betrachten.' },
  'ml.section7.item4.title': { en: 'Power Imbalance', de: 'Macht-Imbalance' },
  'ml.section7.item4.text': { en: 'When people are negligently or intentionally exploited. When investors are placed above operators.', de: 'Wenn Menschen fahrlässig oder mutwillig ausgenutzt werden. Wenn Investoren über Operators gestellt werden.' },
  'ml.section7.item5.title': { en: 'Change Resistance', de: 'Change Resistance' },
  'ml.section7.item5.text': { en: 'Startups are by design companies that must constantly change. Those who are sluggish are in the wrong place.', de: 'Startups sind per Design Unternehmen, die sich konstant verändern müssen. Wer träge ist, ist am falschen Ort.' },
  
  // ML Section 8: Joy
  'ml.section8.title': { en: 'What Makes Me Shine', de: 'Was mich zum Strahlen bringt' },
  'ml.section8.joyLabel': { en: 'Moment of Joy', de: 'Moment der Freude' },
  'ml.section8.joy1': { en: 'When people have understood it.', de: 'Wenn Menschen es verstanden haben.' },
  'ml.section8.joy2': { en: 'When they have applied it.', de: 'Wenn sie es angewendet haben.' },
  'ml.section8.joy3': { en: 'When they succeed with it. And we celebrate it together.', de: 'Wenn sie damit Erfolg haben.\nUnd wir das gemeinsam feiern.' },
  'ml.section8.motto': { en: '"Happiness is a problem (solved)"', de: '"Happiness is a problem (solved)"' },
  'ml.section8.mottoText': { en: "I believe that happiness and flow moments arise when we solve problems. That's why I do what I do.", de: 'Ich glaube, dass Glück und Flow-Momente entstehen, wenn wir Probleme lösen. Das ist der Grund, warum ich tue, was ich tue.' },
  
  // ML Section 9: Vision
  'ml.section9.title': { en: "The Future I'm Building", de: 'Die Zukunft, die ich baue' },
  'ml.section9.vision1.title': { en: 'AI as Democratizer', de: 'AI als Demokratisierer' },
  'ml.section9.vision1.text': { en: "AI makes expert knowledge accessible. Not for a few. For everyone. That's the revolution. And I'm right in the middle of it.", de: 'AI macht Expertenwissen zugänglich. Nicht für wenige. Für alle. Das ist die Revolution. Und ich bin mittendrin.' },
  'ml.section9.vision2.title': { en: 'Scaling with Soul', de: 'Scaling with Soul' },
  'ml.section9.vision2.text': { en: "You can grow without losing your soul. When you build systems with humanity. When you practice leadership with love.", de: 'Man kann wachsen, ohne die Seele zu verlieren. Wenn man Systeme mit Menschlichkeit baut. Wenn man Leadership mit Liebe praktiziert.' },
  'ml.section9.vision3.title': { en: 'Making the Impossible Possible', de: 'Unmögliches möglich machen' },
  'ml.section9.vision3.text': { en: "The greatest breakthroughs happen when people do things they didn't think they could do.", de: 'Die größten Durchbrüche entstehen, wenn Menschen Dinge tun, die sie selbst nicht für möglich gehalten haben.' },
  
  // ML Closing
  'ml.closing.title': { en: "Let's build the impossible.", de: "Let's build the impossible." },
  'ml.closing.together': { en: 'Together.', de: 'Together.' },
  'ml.closing.text': { en: "I work with smart, cool people who want to make a difference. Not with posers. Not with those who just talk. With those who DO. With those who LOVE what they do. With those who BELIEVE we can make the world better.", de: 'Ich arbeite mit intelligenten, coolen Menschen, die etwas bewirken wollen. Nicht mit Blendern. Nicht mit denen, die nur reden. Mit denen, die TUN. Mit denen, die LIEBEN, was sie tun. Mit denen, die GLAUBEN, dass wir die Welt besser machen können.' },
  'ml.closing.cta.work': { en: 'More about my work', de: 'Mehr über meine Arbeit' },
  'ml.closing.cta.book': { en: 'Fix Growth. Scale Faster.', de: 'Fix Growth. Scale Faster.' },
  'ml.closing.cta.linkedin': { en: 'LinkedIn', de: 'LinkedIn' },
  
  // ML Footer Quotes
  'ml.footer.quote1': { en: '"Leadership is love in action."', de: '"Leadership ist Liebe in Aktion."' },
  'ml.footer.quote2': { en: '"Expertise × Speed = Impact"', de: '"Expertise × Speed = Impact"' },
  'ml.footer.quote3': { en: '"Happiness is a problem (solved)"', de: '"Happiness is a problem (solved)"' },
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
