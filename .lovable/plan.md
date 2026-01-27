
# Plan: Unterseite /ah für Alban Halili erstellen

## Übersicht

Eine neue Profilseite für Alban Halili wird erstellt, basierend auf der Struktur von `/ml` (Michel Lason). Die Seite präsentiert Albans Positionierung als "Execution Partner" für PE-gestützte Mittelständler mit Fokus auf Exit-Readiness.

---

## Seitenstruktur (basierend auf ML.tsx)

| Sektion | ML-Vorlage | AH-Inhalt |
|---------|------------|-----------|
| Hero | Portrait + Headline + Werte | "Ihr Unternehmen stagniert. Ich mache es exit-ready." |
| Booking | Fillout-Kalender | Gleiche Struktur, neue URLs |
| Section 1 | Wer bin ich | Execution Gap schließen + 360°-Erfahrung |
| Section 2 | Was treibt mich an | Karriere Journey (Timeline) |
| Section 3 | Formeln | Track Record Zahlen (€2.5B+, 60+, 32%, 140+) |
| Section 4 | Prinzipien | Expertise-Bereiche (6 Kategorien) |
| Section 5 | Journey | Case Studies (3 anonymisierte Fälle) |
| Section 6 | Testimonials | 4 Kundenzitate |
| Section 7 | Was ich nicht toleriere | Portfolio/Projekte (12 AI-Tools) |
| Section 8 | Was mich freut | Zertifizierungen |
| Closing | CTA + Links | LinkedIn + Kontakt |

---

## Neue Dateien

### 1. `src/pages/AH.tsx`
Neue Seite nach Vorlage von ML.tsx mit angepasstem Inhalt:

**Hero-Sektion:**
```text
Badge: "Revenue Acceleration & Exit-Readiness Expert"
Headline: "Ihr Unternehmen stagniert. Ich mache es exit-ready."
Values:
- Execution Gap schließen
- +30% EBITDA-Marge
- +40% Sales Velocity
- 60+ Unternehmen transformiert
```

**Karriere Journey (Timeline):**
8 Stationen von 2010 bis heute mit Learnings

**Track Record (Stats Grid):**
- €2.5 Mrd+ Bewertungsvolumen
- 60+ Unternehmen transformiert
- Ø 32% EBITDA-Verbesserung
- 140+ Engagements

**Ergebnisse nach Kundentyp:**
- PE-Portfolio: Exit-Bewertungen 2.1x
- Mittelstand Fertigung: Sales-Zyklen -40%
- B2B-Dienstleister: Pipeline +45%
- Tech: ARR/Mitarbeiter 2x

**Case Studies (3 Karten):**
1. Maschinenbau: 34% EBITDA, 2.4x Multiple
2. Business Services: 87% schnellere Reportings
3. IT-Dienstleistungen: 14 Monate bis Exit

**Expertise (6 Kategorien):**
1. Revenue Acceleration Expert
2. Growth Strategy & Execution
3. Operations & Scaling Expert
4. KI & Künstliche Intelligenz
5. Automation & Integration
6. Digital Transformation

**Portfolio (12 Projekte):**
Pitch Perfect AI, Sales Compass, Brave Leader Funnel, etc.

**Testimonials (4 Zitate):**
Michael K., Sarah M., Thomas B., Lisa R.

**Zertifizierungen:**
- Google Ads Search (aktiv)
- AI-Powered Shopping Ads (aktiv)
- Abgeschlossene: Salesforce, HubSpot, LinkedIn, UiPath, etc.

---

### 2. Bilder

**Vorhandenes Bild verwenden:**
- `/images/team-alban.png` als Hero-Bild

**Empfehlung für zusätzliche Bilder:**
Für ein vollständiges Profil wie ML sollten zusätzliche Bilder hochgeladen werden:
- `ah-hero.png` (Portrait)
- `ah-speaking.png` oder ähnlich

Bis dahin kann `team-alban.png` mehrfach verwendet werden.

---

### 3. Route hinzufügen in `src/App.tsx`

```tsx
const AH = lazy(() => import("./pages/AH"));
// ...
<Route path="/ah" element={<AH />} />
```

---

### 4. Übersetzungen in `src/contexts/LanguageContext.tsx`

Neue Translation-Keys für AH-Seite (analog zu ml.*):

```tsx
// AH Hero
'ah.hero.badge': { en: 'Revenue Acceleration & Exit-Readiness Expert', de: 'Revenue Acceleration & Exit-Readiness Expert' },
'ah.hero.headline': { en: 'Your company is stagnating. I make it exit-ready.', de: 'Ihr Unternehmen stagniert. Ich mache es exit-ready.' },
// ... (50+ neue Translation-Keys)
```

---

## Technische Details

### Fillout-URLs
Die Booking-URLs müssen noch von Alban bereitgestellt werden. Platzhalter:
- 30min: `https://scalingx.fillout.com/t/ah-30min`
- 60min: `https://scalingx.fillout.com/t/ah-60min`

### Lucide Icons (wie auf ML-Seite)
```tsx
import { 
  ArrowRight, Calendar, Clock, Zap, Target, Users, 
  Sparkles, Quote, X, Rocket, Brain, Star, ChevronRight, 
  Linkedin, Globe, TrendingUp, BarChart3, Briefcase, 
  Award, CheckCircle, Building2 
} from 'lucide-react';
```

---

## Betroffene Dateien

| Datei | Aktion | Änderungen |
|-------|--------|------------|
| `src/pages/AH.tsx` | **Neu erstellen** | Komplette Profilseite (~800 Zeilen) |
| `src/App.tsx` | Bearbeiten | Import + Route für /ah |
| `src/contexts/LanguageContext.tsx` | Bearbeiten | ~60 neue Translation-Keys |

---

## Struktur der AH.tsx

```text
1. Imports & State (Booking-Auswahl)
2. Daten-Arrays:
   - careerSteps (8 Stationen)
   - trackRecord (4 Kernzahlen)
   - customerResults (4 Kundentypen)
   - caseStudies (3 Fälle)
   - expertiseAreas (6 Bereiche)
   - projects (12 Portfolio-Projekte)
   - testimonials (4 Zitate)
   - certifications (aktiv + abgeschlossen)
3. Hero Section
4. Booking Fillout Section
5. Section 1: Hauptversprechen & Track Record
6. Section 2: Karriere Journey (Timeline)
7. Section 3: Ergebnisse nach Kundentyp
8. Section 4: Case Studies
9. Section 5: Expertise (6-Grid)
10. Section 6: Portfolio (12 Projekte)
11. Section 7: Testimonials
12. Section 8: Zertifizierungen
13. Closing Section (CTA)
14. Footer Quotes
15. Booking Dialog
```

---

## Visuelles Design

Das Design folgt exakt der ML-Seite:
- Animierter Hintergrund mit Gradients
- Cards mit Border-Hover-Effekten
- Abwechselnde Hintergrundfarben (bg-accent/5, bg-primary/5)
- Gradient-Text für Headlines
- Brutalist Card-Styling
- Responsive Grid-Layouts

---

## Ergebnis

Nach Implementierung ist unter `/ah` die vollständige Profilseite von Alban Halili erreichbar mit:
- Professionellem Hero mit Hauptversprechen
- Interaktiver Booking-Integration
- Karriere-Timeline
- Track Record mit messbaren Zahlen
- Anonymisierte Case Studies
- Expertise-Übersicht
- Portfolio-Showcase
- Testimonials
- Zertifizierungen
- CTA zum Buchen
