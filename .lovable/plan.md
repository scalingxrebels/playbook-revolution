
## Ziel
Das mobile Hamburger-Menü soll zuverlässig wie ein “Glass Overlay” wirken:
- Hintergrund sichtbar **mit ~80% Deckkraft** (nicht “quasi transparent”)
- Text/Icons bleiben **100%** lesbar
- Desktop-Navigation bleibt **exakt unverändert** (Light + Dark)

## Was wir bereits wissen
- Der Inline-Style mit `backgroundColor: rgba(..., 0.8)` ist im DOM vorhanden, aber der visuelle Effekt ist trotzdem zu transparent.
- Das spricht dafür, dass **der Hintergrund-Farbauftrag auf dem Overlay-Container nicht zuverlässig “greift”** (z.B. durch CSS `background: ... !important`, Shorthand-Overrides, oder Interaktion mit Backdrop-Filter/Stacking).

## Lösung (robust): Zwei-Layer-Overlay statt nur backgroundColor am Container
Wir trennen:
1) **Backdrop-Blur Layer** (auf dem Container)  
2) **Farb-Layer** als eigenes absolut positioniertes Kind-Element (damit die Farbe garantiert sichtbar ist, selbst wenn der Container-Hintergrund überschrieben wird)

### Warum das funktioniert
- Selbst wenn irgendeine Regel den Container-Hintergrund “kaputt macht”, bleibt der **separate Farb-Layer** als echtes Element sichtbar.
- Backdrop-Blur bleibt auf dem Container aktiv.
- Text/Links bleiben in einem **relativen Content-Layer** oben drüber.

## Konkrete Änderungen

### Datei: `src/components/Navigation.tsx`
#### 1) Mobile Overlay Container anpassen
Aktuell (vereinfacht):
```tsx
<div
  className="md:hidden fixed inset-0 top-16 z-40 animate-fade-in backdrop-blur-xl"
  style={{ backgroundColor: theme === 'dark' ? 'rgba(15, 15, 20, 0.8)' : 'rgba(250, 249, 247, 0.8)' }}
>
  <div className="container ...">...</div>
</div>
```

Neu:
- Container bekommt zusätzlich `relative` (für absolute Kinder) und optional `isolate` (saubere Layer-Komposition).
- Der Hintergrund kommt in ein Kind-`div` als Layer.
- Inhalt-Container wird `relative z-10`, damit er sicher über dem Hintergrund-Layer liegt.

Beispielstruktur:
```tsx
<div className="md:hidden fixed inset-0 top-16 z-40 animate-fade-in backdrop-blur-xl relative isolate">
  <div
    className="absolute inset-0"
    style={{
      backgroundColor: theme === 'dark'
        ? 'rgba(0, 0, 0, 0.8)'
        : 'rgba(250, 249, 247, 0.8)',
    }}
  />
  <div className="container px-4 py-8 relative z-10">
    ...
  </div>
</div>
```

#### 2) Dark-Mode-Farbwert minimal anpassen (optional, aber empfehlenswert)
Aktuell Dark: `rgba(15, 15, 20, 0.8)` liegt sehr nah am typischen “Noir”-Hero – dadurch wirkt 80% optisch wie “kaum vorhanden”.
Empfehlung: `rgba(0, 0, 0, 0.8)` (immer noch 80% Opazität, aber visuell klarer als Overlay erkennbar).

Light bleibt bei `rgba(250, 249, 247, 0.8)`.

## Abgrenzung: Desktop bleibt unangetastet
Alle Änderungen passieren ausschließlich im Block:
- `{mobileMenuOpen && (...)}`
- mit `md:hidden`
Damit bleibt die Desktop-Navigation so wie sie ist.

## Test-Checkliste (nach Umsetzung)
1) Mobile Menü öffnen auf `/` (Hero dunkel) → Overlay muss sichtbar abdunkeln/aufhellen, Text bleibt klar.
2) Mobile Menü auf hellen Sections → Overlay bleibt konsistent.
3) Theme Toggle (Light/Dark) → Overlay wechselt korrekt.
4) iOS Safari optional mitprüfen (nur als Bonus, auch wenn du aktuell Chrome/Edge nutzt).

## Wenn es danach immer noch “zu transparent” wirkt
Dann ist es kein technischer Bug mehr, sondern reine Wahrnehmung/Design auf dunklem Hero. Dann können wir entweder:
- Opazität auf 0.85–0.9 erhöhen (nur für Dark Mode), oder
- zusätzlich einen leichten Shadow/Border am Overlay ergänzen (wirkt “solider” ohne Opazität stark zu erhöhen).
