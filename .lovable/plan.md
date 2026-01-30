
# Plan: Entferne Sub-Playbooks Section von Strategic Capabilities

## Hintergrund
Die Strategic Capabilities Playbook Page zeigt aktuell eine "Deep Dive Playbook" Section (Zeilen 421-446), die auf ein nicht existierendes Sub-Playbook verweist. Da es kein "Strategic Capabilities Deep Dive" gibt, sollte diese Section entfernt werden.

## Änderung

**Datei:** `src/data/playbooks/content/strategic-capabilities.ts`

**Aktion:** Entferne die `subPlaybooks` Property (Zeilen 421-446)

```typescript
// ENTFERNEN (Zeilen 421-446):
subPlaybooks: {
  title: { 
    en: "Deep Dive Playbook", 
    de: "Deep Dive Playbook" 
  },
  subtitle: { ... },
  items: [
    {
      id: 18,
      slug: 'strategic-capabilities/deep-dive',
      ...
    }
  ]
}
```

## Ergebnis
- Die Strategic Capabilities Landing Page zeigt keine Sub-Playbooks Section mehr
- Die Page endet nach der Final CTA Section
- Konsistent mit der Tatsache, dass Strategic Capabilities ein eigenständiges Ebene 2 Domain Playbook ohne Sub-Playbooks ist
