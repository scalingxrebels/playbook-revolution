
# Plan: Unterseite /fm für Florian Metzger erstellen

## Übersicht

Eine neue Profilseite für Florian Metzger wird erstellt, basierend auf der Struktur von `/ml`. Die Seite präsentiert Florian als "Architect of Growth & Human-Centered Innovation" mit Fokus auf Business Psychology, Design Thinking und Venture Building.

---

## Seitenstruktur (basierend auf ML.tsx)

| Sektion | ML-Vorlage | FM-Inhalt |
|---------|------------|-----------|
| Hero | Portrait + Headline + Werte | "I build bridges between human needs and business success" |
| Booking | Fillout-Kalender | Gleiche Struktur, Platzhalter-URLs |
| Section 1 | Wer bin ich | "A Psychologist's Mind in a Builder's World" |
| Section 2 | Was treibt mich an | "Collaboration is the Engine of Innovation" |
| Section 3 | Formeln | Die 3 Gleichungen (Empathy x Creativity, Strategy x Execution, Curiosity x Adaptability) |
| Section 4 | Prinzipien | BUILD-Prinzipien (Boldness, User-Centricity, Integrity, Learning, Drive) |
| Section 5 | Journey | Karriere-Timeline (Foundation -> Exploration -> Specialization -> Application) |
| Section 6 | Testimonials | "What I Stand For" (5 Werte) |
| Section 7 | Was ich nicht toleriere | "What I DON'T Stand For" (5 Anti-Werte) |
| Section 8 | Was mich freut | "What Makes Me Shine" (3 Joy-Momente) |
| Section 9 | Vision | "The Future I'm Building" (Human-Centered AI, Sustainable Ventures, Empowered Teams) |
| Closing | CTA + Links | LinkedIn + Email |
| Footer | Zitate | Die 3 Formeln als Footer-Quotes |

---

## Neue Datei: `src/pages/FM.tsx`

### Hero-Sektion
```text
Badge: "Architect of Growth & Human-Centered Innovation"
Headline: "I build bridges between human needs and business success."
Values:
- With empathy that uncovers real problems.
- With creativity that designs valuable solutions.
- With strategy that creates sustainable growth.
- With a passion for building what's next.
```

### Section 1: Thinking ("A Psychologist's Mind in a Builder's World")
- Key Message: "I'm not just a business developer. I'm a student of human behavior, obsessed with finding the 'why' behind the 'what'."
- Background in business psychology as secret weapon
- Connecting psychology, technology, and business

### Section 2: Working Philosophy ("Collaboration is the Engine of Innovation")
- Experience in Milan and Lisbon
- Radical Collaboration, Psychological Safety, Leading with Questions

### Section 3: The Equations
1. **Empathy x Creativity = Innovation**
2. **Strategy x Execution = Growth**
3. **Curiosity x Adaptability = Resilience**

### Section 4: BUILD Principles
| Letter | Principle | Description |
|--------|-----------|-------------|
| B | Boldness | Dare to challenge the status quo |
| U | User-Centricity | The user is the hero |
| I | Integrity | Do the right thing, always |
| L | Learning | Stay curious, stay humble |
| D | Drive | Passion and perseverance |

### Section 5: Journey Timeline
1. **Foundation**: Business Psychology - understanding human drivers
2. **Exploration**: MAHLE, MTU, Haufe Group trainee program
3. **Specialization**: Master's degrees at Bocconi and Católica Lisbon
4. **Application**: Venture Architect at ScalingX, Design Thinking certification (HPI)

### Section 6: What I Stand For (5 Werte)
- Pragmatic Solutions
- Creative Problem-Solving
- Customer Obsession
- Clear Communication
- Strong Perseverance

### Section 7: What I DON'T Stand For (5 Anti-Werte)
- Innovation Theatre
- Analysis Paralysis
- Ignoring the User
- Siloed Thinking
- Change Resistance

### Section 8: What Makes Me Shine (Joy-Momente)
1. The 'Aha!' moment in user interviews
2. Cross-functional team rallying around a shared vision
3. Seeing a product make a real, positive impact

Motto-Zitat: "My passion lies in the development of creative solutions, the realisation of strategic growth projects and the development of new business models."

### Section 9: The Future I'm Building
1. **Human-Centered AI** - AI that solves real human problems
2. **Sustainable Ventures** - Businesses that are profitable, sustainable, and ethical
3. **Empowered Teams** - Environments where people do their best work

### Closing Section
```text
Headline: "Let's build the future."
Subline: "Together."
Text: "I partner with ambitious founders, innovative companies, and passionate teams who are driven to solve meaningful problems."
Links: LinkedIn, Email
```

### Footer Quotes
"Empathy x Creativity = Innovation" • "Strategy x Execution = Growth" • "Curiosity x Adaptability = Resilience"

---

## Bilder

**Vorhandenes Bild:**
- `/images/team-florian.png` als Hero-Bild

**Hinweis:** Für ein vollständiges Profil wie bei ML werden zusätzliche Bilder empfohlen:
- fm-hero.png (Portrait)
- fm-workshop.png (Team-Kollaboration)
- fm-thinking.png (Contemplating)

Bis dahin wird `team-florian.png` verwendet.

---

## Route hinzufügen

In `src/App.tsx`:
```tsx
const FM = lazy(() => import("./pages/FM"));
// ...
<Route path="/fm" element={<FM />} />
```

---

## Fillout Booking URLs

Platzhalter bis finale URLs bereitgestellt werden:
- 30min: `https://scalingx.fillout.com/t/fm-30min`
- 60min: `https://scalingx.fillout.com/t/fm-60min`

---

## Lucide Icons

```tsx
import { 
  ArrowRight, Calendar, Clock, Zap, Heart, Lightbulb, 
  Target, Users, Sparkles, Quote, X, Smile, Eye, Rocket, 
  Brain, Star, ChevronRight, Linkedin, Mail, Globe,
  Shield, BookOpen, Compass, Palette, HandHeart
} from 'lucide-react';
```

---

## Betroffene Dateien

| Datei | Aktion | Änderungen |
|-------|--------|------------|
| `src/pages/FM.tsx` | **Neu erstellen** | Komplette Profilseite (~750 Zeilen) |
| `src/App.tsx` | Bearbeiten | Import + Route für /fm |

---

## Struktur der FM.tsx

```text
1. Imports & State (Booking-Auswahl)
2. Daten-Arrays:
   - buildPrinciples (5 BUILD-Buchstaben)
   - journeySteps (4 Karriere-Stationen)
   - standFor (5 Werte)
   - dontStandFor (5 Anti-Werte)
   - equations (3 Formeln)
   - futureVision (3 Zukunftsthemen)
3. Hero Section (Portrait + Values)
4. Booking Fillout Section
5. Section 1: Thinking (Psychologist's Mind)
6. Section 2: Working Philosophy (Collaboration)
7. Section 3: The Equations (3 Formeln)
8. Section 4: BUILD Principles (5-Grid)
9. Section 5: Journey Timeline (4 Stationen)
10. Section 6: What I Stand For (5 Werte)
11. Section 7: What I DON'T Stand For (5 Anti-Werte)
12. Section 8: What Makes Me Shine (Joy-Momente)
13. Section 9: The Future I'm Building (3 Vision-Cards)
14. Closing Section (CTA)
15. Footer Quotes
16. Booking Dialog
```

---

## Visuelles Design

Das Design folgt exakt der ML-Seite:
- Animierter Hintergrund mit Gradients
- Cards mit Border-Hover-Effekten
- Abwechselnde Hintergrundfarben (bg-accent/5, bg-primary/5)
- Gradient-Text für Headlines
- Timeline mit farbigen Dots
- Responsive Grid-Layouts

---

## Ergebnis

Nach Implementierung ist unter `/fm` die vollständige Profilseite von Florian Metzger erreichbar mit:
- Professionellem Hero mit Human-Centered Positionierung
- Interaktiver Booking-Integration
- Business Psychology Background
- BUILD-Prinzipien
- Karriere-Timeline (MAHLE, MTU, Haufe, Bocconi, Católica, ScalingX)
- Werte & Anti-Werte
- Joy-Momente
- Zukunftsvision
- CTA mit LinkedIn & Email
