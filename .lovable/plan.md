

## Plan: "ScalingX" in Team-Headline hervorheben

`src/components/homepage/HomeTeam.tsx` Z.47-49:

```tsx
// Vorher:
{language === 'de'
  ? 'Die Menschen hinter ScalingX.'
  : 'The people behind ScalingX.'}

// Nachher:
{language === 'de'
  ? <>Die Menschen hinter <span className="italic text-gradient">ScalingX.</span></>
  : <>The people behind <span className="italic text-gradient">ScalingX.</span></>}
```

1 Datei, 1 Stelle.

