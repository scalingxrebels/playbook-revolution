

# Plan: Team-Bilder Anpassung & Akademische Titel

## Übersicht

Die Team-Bilder in der "Who's Behind This Research?" Section benötigen individuelle CSS-Anpassungen, und akademische Titel sollen ergänzt werden.

---

## Änderungen in `src/components/ResearchHub.tsx`

### 1. Akademische Titel hinzufügen

**Michel Lason:**
```typescript
name: 'Michel Lason',
credentials: 'M.A. HSG',  // NEU
```

**Florian Metzger:**
```typescript
name: 'Florian Metzger',
credentials: 'M.Sc. Bocconi, M.Sc. Lisboa',  // NEU
```

---

### 2. Individuelle Bild-Styling

**Alban Halili - Bild 10% nach unten:**
```typescript
imageStyle: 'object-[center_10%]'  // 10% von oben
```

**Florian Metzger - Bild um 50% vergrößern:**
```typescript
imageStyle: 'scale-150 translate-y-[20%]'  // 50% größer + nach unten verschieben
```

---

### 3. UI-Anpassung für Credentials

Nach dem Namen die Credentials anzeigen:

```tsx
<h3 className="font-bold text-xl mb-1">
  {member.name}
  {member.credentials && (
    <span className="text-muted-foreground font-normal text-base ml-2">
      {member.credentials}
    </span>
  )}
</h3>
```

---

### 4. Image-Rendering mit individuellem Styling

```tsx
<img
  src={member.image}
  alt={member.name}
  className={`w-full h-full object-cover ${member.imageStyle || ''}`}
/>
```

---

## Zusammenfassung der Änderungen

| Person | Bild-Anpassung | Akademischer Titel |
|--------|----------------|-------------------|
| Michel Lason | Keine | M.A. HSG |
| Alban Halili | 10% nach unten (object-[center_10%]) | Keine |
| Florian Metzger | 50% größer (scale-150) | M.Sc. Bocconi, M.Sc. Lisboa |

---

## Datei-Änderungen

| Datei | Aktion |
|-------|--------|
| `src/components/ResearchHub.tsx` | teamMembers erweitern (credentials, imageStyle), UI anpassen |

