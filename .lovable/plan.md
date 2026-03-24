

## Plan: Apply-Form durch Fillout Embed ersetzen

### Datei 1: `src/components/forms/FilloutEmbed.tsx`

**Änderung:** `domain` Prop hinzufügen, damit `data-fillout-domain` unterstützt wird (das Embed nutzt `cal.scalingx.io` statt der Standard-Fillout-Domain).

- Neues optionales Prop: `domain?: string`
- Im Render: `data-fillout-domain={domain}` hinzufügen wenn gesetzt

### Datei 2: `src/pages/RevenueArchitectureSystem.tsx`

**Änderung:** Die gesamte `ApplyFormSection`-Komponente (Zeilen 1096–1370) wird ersetzt durch eine schlanke Sektion, die `FilloutEmbed` einbettet — konsistent mit dem Maxxeed-Pattern.

**Neues Design der Sektion:**
- Section-Wrapper bleibt: `id="apply-section"`, Dark Section mit Gradient-Background, `useScrollAnimation`
- Header bleibt: Section-Label "Bewerbung", Badge, Headline "Bereit?", Subtext
- **Formular:** `FilloutEmbed` mit `formId="sjieneK4Qeus"`, `formType="inquiry"`, `source="ras-apply"`, `domain="cal.scalingx.io"`, `height={500}`
- Wrapper um Embed: `max-w-2xl mx-auto bg-card/10 backdrop-blur-sm border-2 border-border/50 overflow-hidden` (konsistent mit bestehendem Form-Container-Styling)
- 3-Step-Process und "Lieber direkt sprechen?" Link bleiben erhalten
- **Entfällt:** Der gesamte custom Form-State (Schema, Submit-Handler, Supabase-Insert, Zod-Validierung, Success-State) — das übernimmt jetzt Fillout

**Imports aufräumen:** `applySchema`, `supabase`-Import (prüfen ob noch anderweitig genutzt), `Loader2`, `Select`/`SelectContent`/`SelectItem`/`SelectTrigger`/`SelectValue`, `Textarea`, `Input`, `Label` — nur entfernen wenn nicht anderweitig in der Datei genutzt (Waitlist nutzt einige davon).

