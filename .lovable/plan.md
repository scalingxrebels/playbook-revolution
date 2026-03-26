

## Plan: Expertise Hub + Spokes Design-Konsistenz mit Home

### Probleme und Fixes

**1a + 2b. MechanismFlowDiagram zu klein**
- `max-w-2xl` → `max-w-4xl` (wie das 2x2 Grid auf Home)
- M1-M3 Cards: `p-5` → `p-6 md:p-8`, Title `text-sm` → `text-base md:text-lg`
- M4 Bar: `p-5` → `p-6 md:p-8`, Title `text-sm` → `text-base md:text-lg`
- Arrow SVGs: `width="16"` → `width="24"`, proportional skalieren

**1b. Mechanismus-Cards auf Hub nicht konsistent mit Home**
- Home (`HomeMechanisms`): Jede Card hat ein **Icon** (Eye, ArrowRightLeft, Settings, Cpu), ein `w-10 h-10 rounded-lg bg-accent/10` Icon-Container, Title in `text-xl`, Description in voller Grösse (`text-muted-foreground` ohne `text-sm`)
- Expertise Hub: Kein Icon, Title in `text-lg`, Description in `text-sm`
- **Fix**: Icons + Icon-Container von HomeMechanisms übernehmen, Title `text-lg` → `text-xl`, Description `text-sm` entfernen, `M`-Badge in `absolute top-4 right-4` wie Home

**1c. Cases auf Hub zu dünn vs. Home**
- Home (`HomeCases`): Tag-Pill (`rounded-full bg-accent/10`), Title (`text-lg`), Body-Text, **3 Metrics** (value + label), Investment-Zeile, CTA
- Expertise Hub: Nur Tag (plain text), Mechanism-Badges, ein Result-Satz, CTA — viel weniger Inhalt
- **Fix**: Hub-Cases auf HomeCases-Struktur umbauen. Metrics + Investment aus den echten Cases einbauen. Dafür `hubCases` Datenstruktur erweitern (title, body, metrics, investment hinzufügen). Grid `md:grid-cols-2` beibehalten (nur 2 Cases).

**1d + 2c. CTA-Button nicht konsistent mit Home**
- Home (`HomeWorkWithUs`): Nutzt `<Button>` mit `bg-accent shadow-accent-glow` + `FilloutBookingModal`
- Expertise: Plain `<a>` mit `bg-accent` ohne Shadow, ohne Modal
- **Fix Hub + Spokes**: `FilloutBookingModal` einbauen, Primary CTA als `<Button className="bg-gradient-accent shadow-accent-glow text-lg px-8 py-4">`, Secondary als `<Link>` mit `border-2 border-border`

**2a. Stats auf Spokes weglassen**
- Stats-Prop aus dem SharedHero-Aufruf in `ExpertiseSpoke.tsx` entfernen

### Betroffene Dateien

| Datei | Änderung |
|---|---|
| `MechanismFlowDiagram.tsx` | max-w-4xl, grössere Cards + Arrows |
| `ExpertiseHub.tsx` | Icons auf Mechanism-Cards, Cases mit Metrics/Body, CTA mit FilloutBookingModal |
| `ExpertiseSpoke.tsx` | Stats entfernen, CTA mit FilloutBookingModal |
| `hub.ts` | hubCases erweitern: title, body, metrics, investment |

4 Dateien. Rein visuelle + Copy-Anpassungen.

