# Deliverable-Namen zweisprachig machen

## Änderung

In `src/pages/RevenueArchitectureSystem.tsx`, Zeilen 266–273: `items` von einfachen Strings auf `language`-abhängige Arrays umstellen.

**Deutsche / Englische Übersetzungen:**


| Code | DE (aktuell)                      | EN (neu)                          |
| ---- | --------------------------------- | --------------------------------- |
| D01  | Marktanalyse                      | Market Analysis                   |
| D02  | Challenge-Solution-Matrix         | Challenge-Solution Matrix         |
| D03  | ICP-Profil                        | ICP Profile                       |
| D04  | Customer Journey Map              | Customer Journey Map              |
| D05  | Value Stack                       | Value Stack                       |
| D06  | Market Entry Strategy Blueprint   | Market Entry Strategy Blueprint   |
| D07  | Growth Engine Architecture        | Growth Engine Architecture        |
| D08  | Asset-Plan & Traffic-Architektur  | Asset Plan & Traffic Architecture |
| D09a | Landing Page Blueprint            | Landing Page Blueprint            |
| D09b | Form + DOI-Flow                   | Form + DOI Flow                   |
| D10  | Email Sequencing                  | Email Sequencing                  |
| D11  | Asset Stack & Trust Architecture  | Asset Stack & Trust Architecture  |
| D12  | Funnel Blueprint Compiler         | Funnel Blueprint Compiler         |
| D13  | Revenue System Architecture       | Revenue System Architecture       |
| D14  | Revenue Data Flow & Orchestration | Revenue Data Flow & Orchestration |
| D15  | Automation Priorities             | Automation Priorities             |
| D16* | GTM Execution Stack Map           | GTM Execution Stack Map           |
| D17* | Automation Priority Matrix        | Automation Priority Matrix        |
| D18  | SEO Playbook                      | SEO Playbook                      |
| D19  | SEA Playbook                      | SEA Playbook                      |
| D20  | GEO Playbook                      | GEO Playbook                      |
| D21  | Earned Media Playbook             | Earned Media Playbook             |
| D22  | Content Flywheel Blueprint        | Content Flywheel Blueprint        |


Die meisten Items sind Fachbegriffe und bleiben in beiden Sprachen gleich. Nur D01 (Marktanalyse→Market Analysis), D03 (ICP-Profil→ICP Profile), D08 (Traffic-Architektur→Traffic Architecture) haben echte Unterschiede.

## Umsetzung

Jede Session bekommt `itemsDe` / `itemsEn` Arrays, Rendering nutzt `language === 'de' ? session.itemsDe : session.itemsEn`.