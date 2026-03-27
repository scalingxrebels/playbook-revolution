

## Plan: LinkedIn-Icon hinter "M.A. HSG" setzen

`src/components/homepage/HomeTeam.tsx` Z.68 + Z.80-87:

LinkedIn-Icon aus dem separaten Link unten entfernen und direkt in die h3-Zeile nach "M.A. HSG" einfügen:

```tsx
// Z.68 neu:
<h3 className="font-display text-2xl mb-1 text-foreground flex items-center gap-2">
  Michel Lason <span className="text-accent text-lg font-normal">M.A. HSG</span>
  <a href="https://www.linkedin.com/in/michellason/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn Michel Lason">
    <Linkedin className="h-4 w-4" />
  </a>
</h3>
```

Separaten LinkedIn-Link (Z.80-87) entfernen.

1 Datei, 2 Stellen.

