
# Vollständige Fillout-Formular-Integration mit UTM + Source Tracking

## Übersicht der Formulare

| Formular | URL-Slug | Verwendung |
|----------|----------|------------|
| **Inflection Call** | `inflection-call` | Hauptformular für "Book a Call", Playbook-CTAs, etc. |
| **Expert Session** | `expert-session` | Expert Session Seite |
| **Inquiry** | `inquiry` | Homepage eingebettet (Form ID: bE8Mpbmb4mus) |
| **ML Sync** | `ml-sync` | Michel 30-Min Call |
| **ML Deep Dive** | `ml-deep-dive` | Michel 60-Min Call |
| **AH Sync** | `ah-sync` | Alban 30-Min Call |
| **AH Deep Dive** | `ah-deep-dive` | Alban 60-Min Call |
| **FM Sync** | `fm-sync` | Florian 30-Min Call |
| **FM Deep Dive** | `fm-deep-dive` | Florian 60-Min Call |

---

## Aktuelle Probleme

### 1. Team-Seiten verwenden alte Formular-URLs

| Seite | Aktuell | Soll |
|-------|---------|------|
| ML.tsx | `fillout.com/t/fvUsJguCaVus` | `fillout.com/ml-sync` + UTM |
| ML.tsx | `fillout.com/t/wMcijwFXM1us` | `fillout.com/ml-deep-dive` + UTM |
| AH.tsx | `fillout.com/t/ah-30min` | `fillout.com/ah-sync` + UTM |
| AH.tsx | `fillout.com/t/ah-60min` | `fillout.com/ah-deep-dive` + UTM |
| FM.tsx | `fillout.com/t/fm-30min` | `fillout.com/fm-sync` + UTM |
| FM.tsx | `fillout.com/t/fm-60min` | `fillout.com/fm-deep-dive` + UTM |

### 2. Homepage Inquiry-Formular fehlt Source-Parameter

- Aktuell: Nur `data-fillout-inherit-parameters`
- Problem: Kein expliziter `source`-Parameter

### 3. Playbook "Book a Call" Buttons öffnen externe Links

- Aktuell: `<a href={data.bookingUrl} target="_blank">`
- Problem: Kein Popup-Modal, keine UTM/Source-Parameter

---

## Implementierungsplan

### Phase 1: Neue Modal-Komponente für Booking-Formulare

**Neue Datei: `src/components/forms/FilloutBookingModal.tsx`**

- Wiederverwendbares Modal für alle Booking-Formulare
- Parameter: `formSlug`, `source`, `isOpen`, `onClose`
- Breite: 900px (wie gewünscht)
- Automatische UTM-Parameter aus sessionStorage
- iframe mit dynamisch generierter URL

```text
┌─────────────────────────────────────────────────────────────────┐
│  Fillout Booking Modal (900px)                              [X] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │              Fillout iFrame                               │  │
│  │                                                           │  │
│  │  URL: scalingx.fillout.com/{formSlug}                     │  │
│  │       ?utm_source=...                                     │  │
│  │       &utm_medium=...                                     │  │
│  │       &utm_campaign=...                                   │  │
│  │       &utm_content=...                                    │  │
│  │       &utm_term=...                                       │  │
│  │       &source={source}                                    │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Phase 2: Team-Seiten aktualisieren

**Dateien: ML.tsx, AH.tsx, FM.tsx**

Änderungen:
1. Import von `FilloutBookingModal`
2. Neue Formular-Slugs verwenden
3. Popup-Dialog durch `FilloutBookingModal` ersetzen
4. Source-Parameter: `team-ml`, `team-ah`, `team-fm`

| Datei | 30-Min Slug | 60-Min Slug | Source |
|-------|-------------|-------------|--------|
| ML.tsx | `ml-sync` | `ml-deep-dive` | `team-ml` |
| AH.tsx | `ah-sync` | `ah-deep-dive` | `team-ah` |
| FM.tsx | `fm-sync` | `fm-deep-dive` | `team-fm` |

### Phase 3: Homepage Inquiry-Formular erweitern

**Datei: `src/components/homepage/FinalCTAOptimized.tsx`**

Änderungen:
1. Import der UTM-Persistenz-Hook
2. Form-URL mit dynamischen Parametern generieren
3. Statt `data-fillout-inherit-parameters` explizite URL bauen

```
URL-Aufbau:
https://scalingx.fillout.com/inquiry
  ?utm_source={aus sessionStorage}
  &utm_medium={aus sessionStorage}
  &utm_campaign={aus sessionStorage}
  &utm_content={aus sessionStorage}
  &utm_term={aus sessionStorage}
  &source=website
```

### Phase 4: Playbook Hero/CTA Buttons umstellen

**Dateien:**
- `src/components/playbooks/sections/PlaybookHeroSection.tsx`
- `src/components/playbooks/sections/PlaybookFinalCTASection.tsx`

Änderungen:
1. "Book a Call" Button öffnet `FilloutBookingModal` statt externem Link
2. Formular: `inflection-call`
3. Source: `playbook`

### Phase 5: Expert Session Seite

**Datei: `src/pages/ExpertSession.tsx`**

Prüfen, ob Booking-Buttons vorhanden sind und diese auf `FilloutBookingModal` umstellen mit:
- Formular: `expert-session`
- Source: `expert-session`

### Phase 6: Boost/PowerUp Seiten

**16 Dateien** (bereits analysiert):
- BoostGrowthEngine.tsx
- BoostScalingOS.tsx
- BoostNRRMachine.tsx
- BoostPricingDominance.tsx
- BoostEfficientHypergrowth.tsx
- PowerUpAIQuickWins.tsx
- PowerUpNRREngine.tsx
- PowerUpGrowthMomentum.tsx
- PowerUpPricingPower.tsx
- PowerUpScalingVelocity.tsx
- PowerUpCACCrisis.tsx
- PowerUpBoardReadiness.tsx
- PowerUpCustomSprint.tsx
- PowerUpPortfolioPerformance.tsx
- Maxxeed.tsx

Diese verwenden bereits eingebettete Formulare mit `data-fillout-inherit-parameters`. Umstellung auf FilloutEmbed-Komponente mit explizitem `source`-Parameter.

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| **NEU** `FilloutBookingModal.tsx` | Neue Modal-Komponente für Booking-Formulare |
| `FilloutEmbed.tsx` | `source` Prop hinzufügen |
| `ML.tsx` | Neue Formular-Slugs + UTM/Source via Modal |
| `AH.tsx` | Neue Formular-Slugs + UTM/Source via Modal |
| `FM.tsx` | Neue Formular-Slugs + UTM/Source via Modal |
| `FinalCTAOptimized.tsx` | Explizite UTM/Source Parameter |
| `PlaybookHeroSection.tsx` | Modal statt externer Link |
| `PlaybookFinalCTASection.tsx` | Modal statt externer Link |
| 16× Boost/PowerUp Seiten | FilloutEmbed mit `source` |

---

## Source-Werte Zuordnung

| Seite/Kontext | source-Wert |
|---------------|-------------|
| Homepage | `website` |
| Playbook Landing Pages | `playbook` |
| Solutions Hub | `solutions` |
| Case Study Seiten | `case_study` |
| Expert Session | `expert-session` |
| Team ML | `team-ml` |
| Team AH | `team-ah` |
| Team FM | `team-fm` |
| Partner (Maxxeed) | `partner` |

---

## Resultat nach Implementierung

Alle Formulare übergeben konsistent:

```
?utm_source={value}
&utm_medium={value}
&utm_campaign={value}
&utm_content={value}
&utm_term={value}
&source={context}
```

Dies ermöglicht vollständiges Tracking:
- Woher kam der Lead? (UTM)
- Von welcher Seite kam er? (source)
