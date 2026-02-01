

# Robots.txt Update: Balancierte AI-Strategie

## Ziel
- **Suchmaschinen-Crawling erlauben** (SEO)
- **AI-Search/Browsing erlauben** (Bei LLM-Antworten erscheinen)
- **AI-Training blockieren** (Keine Nutzung für Modell-Training)
- **Pure Scraper blockieren** (Firecrawl, Manus)

## Strategie

| Kategorie | Bots | Aktion | Grund |
|-----------|------|--------|-------|
| Search Engines | Googlebot, Bingbot | ✅ Erlaubt | SEO |
| Social Media | Twitter, LinkedIn, Slack | ✅ Erlaubt | Link-Previews |
| AI Search/Browsing | ChatGPT-User, PerplexityBot, ClaudeBot | ✅ Erlaubt | In LLM-Ergebnissen erscheinen |
| AI Training | GPTBot, Google-Extended, CCBot | ❌ Blockiert | Kein Modell-Training |
| Pure Scraper | Firecrawl, Manus | ❌ Blockiert | Keine Daten-Extraktion |

## Änderungen

### Datei: `public/robots.txt`

```text
# =============================================
# Search Engines - ALLOWED (SEO)
# =============================================
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# =============================================
# Social Media - ALLOWED (Link Previews)
# =============================================
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: Slackbot
Allow: /

# =============================================
# AI Search & Browsing - ALLOWED
# (Damit die Website in LLM-Antworten erscheint)
# =============================================

# OpenAI ChatGPT Browsing (nicht Training!)
User-agent: ChatGPT-User
Allow: /

# Perplexity (Search + Zitate)
User-agent: PerplexityBot
Allow: /

# Anthropic Claude (Search/Browsing)
User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

# =============================================
# AI Training - BLOCKED
# (Kein Training von Modellen mit unseren Inhalten)
# =============================================

# OpenAI Training Bot
User-agent: GPTBot
Disallow: /

# Google AI Training (Gemini etc.)
User-agent: Google-Extended
Disallow: /

# Common Crawl (Dataset für AI Training)
User-agent: CCBot
Disallow: /

# Cohere AI Training
User-agent: cohere-ai
Disallow: /

# ByteDance/TikTok AI
User-agent: Bytespider
Disallow: /

# Meta AI Training
User-agent: Meta-ExternalAgent
Disallow: /

# Apple AI Training
User-agent: Applebot-Extended
Disallow: /

# =============================================
# Pure Scrapers - BLOCKED
# (Keine Daten-Extraktion Tools)
# =============================================

# Firecrawl
User-agent: Firecrawl
Disallow: /

User-agent: firecrawl
Disallow: /

# Manus AI
User-agent: Manus
Disallow: /

User-agent: ManusBot
Disallow: /

# Other Scrapers
User-agent: Diffbot
Disallow: /

User-agent: Omgilibot
Disallow: /

# =============================================
# Default - Allow (für unbekannte Crawler)
# =============================================
User-agent: *
Allow: /
```

## Ergebnis

| Dienst | Bot | Status | Effekt |
|--------|-----|--------|--------|
| Google Search | Googlebot | ✅ | SEO funktioniert |
| ChatGPT Browsing | ChatGPT-User | ✅ | Website wird zitiert |
| ChatGPT Training | GPTBot | ❌ | Kein Training |
| Perplexity | PerplexityBot | ✅ | Website wird zitiert |
| Claude | ClaudeBot | ✅ | Website wird zitiert |
| Firecrawl | Firecrawl | ❌ | Kein Scraping |
| Manus | ManusBot | ❌ | Kein Scraping |

## Hinweise

1. **Anthropic-Bots**: Da Anthropic aktuell keinen separaten Training-Bot hat, erlauben wir alle Claude-Bots. Falls sich das ändert, können wir anpassen.

2. **Perplexity**: Verwendet denselben Bot für Search und eventuelles Training. Da der Hauptnutzen (Zitate in Antworten) wichtiger ist, erlauben wir ihn.

3. **robots.txt Limitation**: Dies ist ein "Gentlemen's Agreement" - seriöse Anbieter halten sich daran, aber es ist keine technische Sperre.

