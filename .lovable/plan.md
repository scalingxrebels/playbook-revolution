

## Plan: ICP-Filter Schlusstext anpassen

### Datei: `src/pages/RevenueArchitectureSystem.tsx` — Zeile 680–684

### Änderung

Ersetze den aktuellen italic `<p>` durch einen Text, der Besucher auf der "rechten Seite" (nicht passend) freundlich zum Inflection Call weiterleitet, mit klickbarem Link der das Booking-Modal öffnet.

**Neuer deutscher Text:**
"Falls du rechts stehst, ist das Revenue Architecture System nicht das richtige für dich — lass uns besprechen, was für dich passt. [Buche hier einen Inflection Call →]"

**Neuer englischer Text:**
"If you're on the right, the Revenue Architecture System isn't the right fit — let's discuss what works for you. [Book an Inflection Call here →]"

**Technisch:**
- Der `<p>` wird zu einem `<p>` mit einem `<button>` oder `<span>` darin, der `onClick` das bestehende Booking-Modal (`openBookingModal` CustomEvent oder lokaler State) triggert
- Styling: Link-Teil als `text-primary hover:underline cursor-pointer font-medium` (nicht italic)
- Prüfen ob die Sektion bereits einen `isBookingModalOpen` State hat oder ob das CustomEvent genutzt wird

