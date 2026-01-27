

# Aktualisierung der "How It Works" Section

## Übersicht der Änderungen

Die 4 Capabilities werden komplett überarbeitet mit neuem Content und teilweise neuem Icon:

| # | Vorher | Nachher | Icon-Änderung |
|---|--------|---------|---------------|
| 1 | Strategie / Strategy | Strategie / Strategy | Brain → Brain (bleibt) |
| 2 | Systeme & Prozesse | Setup | Cpu → Cpu (bleibt) |
| 3 | Team & Organisation | Execution | Users → Users (bleibt) |
| 4 | Finanzen & Kapital | Operationalisierung | BarChart3 → **Zap** (NEU) |

---

## Neue Inhalte

### Capability 1: Strategie

| Feld | Deutsch | Englisch |
|------|---------|----------|
| Titel | Strategie | Strategy |
| Beschreibung | Wo willst du hin? Wie gewinnst du? Klare Strategie ist der Startpunkt für alles andere. | Where do you want to go? How do you win? Clear strategy is the starting point for everything else. |
| Beispiele | • Wer ist dein idealer Kunde?<br>• Wie positionierst du dich gegen Wettbewerber?<br>• Welche Märkte greifst du an? | • Who is your ideal customer?<br>• How do you position against competitors?<br>• Which markets are you targeting? |

### Capability 2: Setup

| Feld | Deutsch | Englisch |
|------|---------|----------|
| Titel | Setup | Setup |
| Beschreibung | Wie organisierst du dich für Wachstum? Struktur, Systeme und Prozesse, die skalieren. | How do you organize for growth? Structure, systems and processes that scale. |
| Beispiele | • Wie ist dein Team organisiert?<br>• Welche Tools und Systeme nutzt du?<br>• Wie triffst du Entscheidungen? | • How is your team organized?<br>• What tools and systems do you use?<br>• How do you make decisions? |

### Capability 3: Execution

| Feld | Deutsch | Englisch |
|------|---------|----------|
| Titel | Execution | Execution |
| Beschreibung | Wie schnell lieferst du? Von der Idee zur Umsetzung – ohne Verzögerung. | How fast do you deliver? From idea to execution – without delay. |
| Beispiele | • Wie schnell gewinnst du Kunden?<br>• Wie schnell entwickelst du Features?<br>• Wie schnell reagierst du auf Feedback? | • How fast do you acquire customers?<br>• How fast do you develop features?<br>• How fast do you respond to feedback? |

### Capability 4: Operationalisierung

| Feld | Deutsch | Englisch |
|------|---------|----------|
| Titel | Operationalisierung | Operationalization |
| Beschreibung | Wie machst du es wiederholbar? Automatisierung und Systeme, die ohne dich laufen. | How do you make it repeatable? Automation and systems that run without you. |
| Beispiele | • Sind deine Prozesse automatisiert?<br>• Hast du Dashboards und Metriken?<br>• Läuft der Laden auch ohne dich? | • Are your processes automated?<br>• Do you have dashboards and metrics?<br>• Does the business run without you? |

---

## Technische Umsetzung

### 1. Icon-Import aktualisieren (Zeile 4)

```tsx
// VORHER:
import { ArrowRight, Brain, Cpu, Users, BarChart3 } from 'lucide-react';

// NACHHER:
import { ArrowRight, Brain, Cpu, Users, Zap } from 'lucide-react';
```

### 2. Areas-Array komplett ersetzen (Zeilen 7-52)

```tsx
const areas = [
  {
    id: '1',
    icon: Brain,
    titleEn: 'Strategy',
    titleDe: 'Strategie',
    descEn: 'Where do you want to go? How do you win? Clear strategy is the starting point for everything else.',
    descDe: 'Wo willst du hin? Wie gewinnst du? Klare Strategie ist der Startpunkt für alles andere.',
    exampleEn: '• Who is your ideal customer?\n• How do you position against competitors?\n• Which markets are you targeting?',
    exampleDe: '• Wer ist dein idealer Kunde?\n• Wie positionierst du dich gegen Wettbewerber?\n• Welche Märkte greifst du an?',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: '2',
    icon: Cpu,
    titleEn: 'Setup',
    titleDe: 'Setup',
    descEn: 'How do you organize for growth? Structure, systems and processes that scale.',
    descDe: 'Wie organisierst du dich für Wachstum? Struktur, Systeme und Prozesse, die skalieren.',
    exampleEn: '• How is your team organized?\n• What tools and systems do you use?\n• How do you make decisions?',
    exampleDe: '• Wie ist dein Team organisiert?\n• Welche Tools und Systeme nutzt du?\n• Wie triffst du Entscheidungen?',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: '3',
    icon: Users,
    titleEn: 'Execution',
    titleDe: 'Execution',
    descEn: 'How fast do you deliver? From idea to execution – without delay.',
    descDe: 'Wie schnell lieferst du? Von der Idee zur Umsetzung – ohne Verzögerung.',
    exampleEn: '• How fast do you acquire customers?\n• How fast do you develop features?\n• How fast do you respond to feedback?',
    exampleDe: '• Wie schnell gewinnst du Kunden?\n• Wie schnell entwickelst du Features?\n• Wie schnell reagierst du auf Feedback?',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: '4',
    icon: Zap,
    titleEn: 'Operationalization',
    titleDe: 'Operationalisierung',
    descEn: 'How do you make it repeatable? Automation and systems that run without you.',
    descDe: 'Wie machst du es wiederholbar? Automatisierung und Systeme, die ohne dich laufen.',
    exampleEn: '• Are your processes automated?\n• Do you have dashboards and metrics?\n• Does the business run without you?',
    exampleDe: '• Sind deine Prozesse automatisiert?\n• Hast du Dashboards und Metriken?\n• Läuft der Laden auch ohne dich?',
    color: 'from-emerald-500 to-teal-500',
  },
];
```

### 3. Beispiele-Rendering anpassen (Zeile 125-127)

Da die Beispiele jetzt als Bullet-Liste mit `\n` formatiert sind, muss das Rendering angepasst werden:

```tsx
// VORHER:
<p className="text-xs text-muted-foreground italic">
  {language === 'de' ? area.exampleDe : area.exampleEn}
</p>

// NACHHER:
<div className="text-xs text-muted-foreground space-y-1">
  {(language === 'de' ? area.exampleDe : area.exampleEn).split('\n').map((line, i) => (
    <p key={i}>{line}</p>
  ))}
</div>
```

---

## Betroffene Datei

| Datei | Änderungen |
|-------|------------|
| `src/components/homepage/HowItWorksOptimized.tsx` | Icon-Import (Zeile 4), Areas-Array (Zeilen 7-52), Beispiele-Rendering (Zeilen 125-127) |

