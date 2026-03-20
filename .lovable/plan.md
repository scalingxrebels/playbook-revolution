

# Plan: Rebuild RAS Landing Page — D08 v10.2 (revised)

## Summary

Complete rewrite of `src/pages/RevenueArchitectureSystem.tsx` to match D08 v10.2 with 13 sections. No database changes. S12 Apply-Form uses a `FilloutEmbed` placeholder (like other pages), not a custom form.

## Section Order (13 Sections)

```text
S1  HeroSection (updated headline, amber badge, trust signals)
S2  VSLSection (updated fallback line 3 with concrete data)
S3  DeliverablesSection (quality line + D01–D22 grid by session)
S4  ProblemReframeSection (NEW — comparison visual + source)
S5  ResearchCredibilitySection (NEW — 13% stats + 4 differences)
S6  ProgramSection (updated format box with async info)
S7  DifferentiationSection (NEW — Course/Agency/RAS table)
S8  CredibilitySection (updated — anonymized quotes + reference CTA)
S9  PricingSection (moved up, amber urgency box)
S10 ICPFilterSection (NEW — For you / Not for you)
S11 FAQSection (moved after pricing, updated answers)
S12 ApplyFormSection (NEW — FilloutEmbed placeholder)
S13 WaitlistSection (reworked — #0D1F3C bg, ghost button, 2 fields)
```

## Key Changes vs. Previous Plan

- **No database migration** — `cohort_applications` table removed
- **S12 uses `FilloutEmbed`** component with `formType="inquiry"` and a placeholder `formId` — same pattern as other booking/application pages. Surrounding section has the urgency badge, headline, subheadline, and micro-copy from the briefing. The actual Fillout form integration gets configured later.
- **S13 keeps existing `download_leads`** table insert (already exists)

## New Sections Detail

**S4 — ProblemReframeSection:** Headline "Das ist kein Kanal-Problem." + body with inline source *(n=22)* + 4-row comparison grid (what most do → what's actually missing) + result contrast.

**S5 — ResearchCredibilitySection:** Headline "13% haben es gelöst." + methodology framing + 3 stat cards (CAC -34%, Win Rate +23pp, TTR 90→31) + 4 numbered differences.

**S7 — DifferentiationSection:** 6-row comparison table (Kurs €500–€3.500 / Agentur €15.000+ / RAS €6.900) + closing subline.

**S10 — ICPFilterSection:** Two columns — checkmarks (5 items) / crosses (4 items). Time: "6–7 Stunden/Woche".

**S12 — ApplyFormSection:** Urgency badge (repeated from S1) + headline/subheadline + `FilloutEmbed` component (placeholder formId, source="ras-apply") + micro-copy underneath.

## Sections Removed

PreCohortProof, FoundingFrame, ApplicationProcess, CohortStartCard — content absorbed into new structure.

## Files Changed

1. `src/pages/RevenueArchitectureSystem.tsx` — full rewrite (single file, ~1500 lines)

