
# 404 Error Page Redesign

## Ziel
Redesign der 404-Seite mit Navigation, Footer und Hero-Styling der Homepage.

## Aktuelle Situation
Die NotFound-Seite ist minimalistisch: nur ein zentrierter Text mit "404" und einem einfachen Link.

## Neue Struktur

```text
/src/pages/NotFound.tsx
├── ThemeProvider + LanguageProvider
├── Navigation (fixed header)
├── Hero Section (dark-section mit Stars/Trails)
│   ├── Overline: "404 - Page Not Found"
│   ├── Title: "Oops! Looks Like You Took a Wrong Turn.."
│   ├── Subtitle: "But don't worry – we specialize in getting things back on track."
│   └── CTAs:
│       ├── "Take me back to safety" (Outline, navigate back)
│       └── "Book a Call" (Primary, link to /#booking-form)
└── Footer
```

## Technische Details

### Imports
```typescript
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import TwinklingStars from '@/components/TwinklingStars';
import GrowthTrails from '@/components/GrowthTrails';
```

### Hero Styling
Übernommen von HeroOptimized:
- `dark-section` mit deep space gradient
- TwinklingStars Komponente
- GrowthTrails Komponente (S-Kurven)
- Grid pattern overlay
- Animations (fade-in, blur-in, slide-up)

### CTAs
| Button | Style | Aktion |
|--------|-------|--------|
| Take me back to safety | Outline/Secondary | `navigate(-1)` oder `navigate('/')` falls keine History |
| Book a Call | Primary (gradient-accent) | Link zu `/#booking-form` |

### Responsive Design
- Mobile: Buttons untereinander (flex-col)
- Desktop: Buttons nebeneinander (flex-row gap-4)

## Änderungen

**Datei:** `src/pages/NotFound.tsx`

- Wrapper mit ThemeProvider + LanguageProvider hinzufügen
- Navigation Komponente importieren und einbinden
- Hero-Section mit dark-section Styling erstellen
- TwinklingStars und GrowthTrails für visuellen Effekt
- Overline "404 - Page Not Found"
- H1: "Oops! Looks Like You Took a Wrong Turn.."
- Subtitle: "But don't worry – we specialize in getting things back on track."
- Zwei Buttons mit entsprechender Logik
- Footer Komponente am Ende
- Console error logging beibehalten

## Ergebnis

Die 404-Seite wird:
- Visuell konsistent mit der Homepage (Brand Identity)
- Professionell und on-brand
- Funktionale Navigation (User kann weiternavigieren)
- Conversion-Chance durch "Book a Call" CTA
