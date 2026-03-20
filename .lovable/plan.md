

# Fix: Revenue Architecture System fehlt im Solutions Hub

## Diagnose

Die `content_visibility`-Tabelle hat **keinen Eintrag** für `revenue-architecture-system`. Theoretisch sollte der Fallback (`staticHidden: undefined → false`) die Kachel sichtbar machen. Da sie trotzdem nicht erscheint, ist der sicherste Fix ein expliziter DB-Eintrag.

**Aktuelle sichtbare Tiles:** 4 mit `hidden: false` in DB + 11 ohne DB-Eintrag (Fallback visible) = 15 erwartet, 14 angezeigt.

## Fix

**1 Migration:** `content_visibility`-Eintrag für `revenue-architecture-system` mit `hidden = false` einfügen:

```sql
INSERT INTO content_visibility (content_type, content_id, hidden)
VALUES ('solution', 'revenue-architecture-system', false)
ON CONFLICT (content_type, content_id) DO UPDATE SET hidden = false;
```

Das stellt sicher, dass RAS explizit als sichtbar markiert ist — unabhängig von Fallback-Logik.

