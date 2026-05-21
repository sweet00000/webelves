# webelves — Landing Page + Business Plan

Working reference for the landing-page rebuild. Sibling docs: `WEBSITE_PLAN.md`
(the `.elf` catalog/viewer spec, separate effort). This file covers only the
**marketing landing page** (`index.html`) and the business model behind it.

---

## 0. Brand structure (locked)

| Name | What it is | Where |
|------|-----------|-------|
| **webelves** | The hub / main menu. The umbrella you land on. | `webelves.us` |
| **Codelves** | Parent company *and* a product (browser Python IDE). Also: an example of what anyone can build free with `.elf`. | `codelves.com` (PreKnowl) |
| **PreKnowl** | The `codelves.com` site / public face of the company. | `codelves.com` |
| **.elf** | The open file format everything produces or consumes. | open spec |

Rule of thumb for copy: the **hub brand on this site is `webelves`**. Codelves is
referenced as both a product in the family and the parent company. Don't rename
webelves. Mention PreKnowl / codelves.com lightly (footer + one nav link is enough).

Product family (all speak `.elf`):
- **NotebookELF** — sources → grounded AI chat → portable `.elf`. Free.
- **Codelves** — real Python in a browser tab (Pyodide). Free.
- **Webelves** — Perplexity-style local search, client-side GGUF. Pro.
- **Forge** — AI synthesis pipeline; writes/grades/packages `.elf` files. Ultra.

---

## 1. Business model

**Shape:** open-core. The browser tools are free and account-free; money starts
at the synthesis pipeline (compute is the real cost).

| Tier | Price | Who | What unlocks |
|------|-------|-----|--------------|
| Open | $0 | Everyone, no account | NotebookELF, Codelves, `.elf` format, demos |
| Pro | $20/mo | Solo power users | Webelves local search, Wikiforge, autoresearch, run history |
| Ultra | $50/mo | Builders | Forge builder, batch synthesis, larger model slots, webhooks |
| Enterprise | $200/mo+ | Teams / air-gapped | Self-hosted Forge, RBAC, SLA, custom contracts |

**Why this works:**
- Free tier is genuinely useful and runs 100% on-device → trust + word of mouth.
- The expensive thing (server-side generation / GPU compute) is exactly what's
  gated → costs line up with revenue.
- "Price locks in at signup" on Pro creates urgency without discounting.

**Conversion path:** land on hub → try a free tool or open a demo `.elf` → hit the
ceiling (want search / batch synthesis) → join waitlist or upgrade.

**Primary CTA on the landing page:** *Open NotebookELF* (free, instant, no signup).
**Secondary CTA:** *View a live `.elf` demo*. Waitlist is the capture for Pro/Ultra
until billing is wired.

---

## 2. What to show first (page order)

Priority is: prove it's real and free in <5 seconds, then explain, then price.

1. **Hero** — one-line promise (offline / portable / private AI), primary CTA
   (Open NotebookELF), secondary CTA (live demo), 4-stat trust bar.
2. **Privacy strip** — "runs on your computer only / no cloud / no telemetry."
   This is the differentiator; show it immediately, not buried.
3. **Products (bento grid)** — the 4 tools, one format. Skimmable, each links to
   the real working app or its detail.
4. **Pricing** — the 4 tiers. Free first, Pro highlighted as "Most Popular."
5. **Live demos** — real `.elf` artifacts the visitor can open right now. This is
   the proof. Removes "is this vaporware?" doubt.
6. **Waitlist** — capture email for Pro/Ultra.
7. **Footer** — license (CC BY-NC-SA), PreKnowl / codelves.com link.

---

## 3. Main displays (the hero visual + key components)

- **Hero mock terminal** — a fake `.elf` chat window (filename bar, a Q, a cited
  answer, an input). Sells the product in one glance. Mock, not interactive.
- **Stat bar** — 100% browser / 0 installs / Python via Pyodide / Open source.
- **Bento product cards** — uneven grid (model's `col-span 8/4` rhythm) so the
  eye moves; each card = name, status, tagline, link.
- **Pricing cards** — 4 columns, Pro highlighted with a soft glow + badge.
- **Demo cards** — 3 real `.elf` files, each opens in a new tab.

---

## 4. Aesthetic — "blend"

Model = premium minimal SaaS (Linear/Vercel). Current = terminal/technical.
Blend keeps the model's **layout, whitespace, type scale, and motion** but retains
**one restrained accent (teal)** and a light technical character (mono labels).

- **Background:** near-black `#08090a`, soft single radial glow. No scanlines.
- **Accent:** teal `#5fcfb8` only (life). White + neutral grays do the rest.
- **Headings:** gradient white→teal on the key phrase (model signature move).
- **Fonts (lean — no heavy imports):**
  - Headings + body: `system-ui` stack. **Zero web-font import.**
  - Mono accents (eyebrows, code, filenames): **IBM Plex Mono** — the only import.
  - Cabinet Grotesk and the multi-font stack from the model are dropped on purpose.
- **Motion:** scroll-reveal fade-up via `IntersectionObserver` (plain JS, no
  framer-motion dependency).
- **Spacing:** generous section padding (model's `py-24/32` rhythm), max-width ~1100px.

---

## 5. Real vs mock

**Real links (must work):**
- `/open/notebook/` — NotebookELF
- `/open/ide/` — Codelves
- `/open/webelves/` (and `webelves.html`) — Webelves
- `/open/forge/` — Forge
- `demos/bayes.elf.html`, `demos/kalman.elf.html`, `demos/demo.elf.html`
- `about.html`, `docs/`

**Mock (no backend yet):**
- Waitlist form → stores email in `localStorage`, shows a toast. Swap for a real
  endpoint (Resend / Buttondown / edge fn) later.
- Pricing CTAs for Pro/Ultra/Enterprise → scroll to waitlist / mailto. No Stripe yet.

---

## 6. Build steps

- [x] Brand + business model locked (this doc).
- [x] `css/landing.css` — blended premium theme, isolated from `site.css` so other
      pages (`about.html`, `webelves.html`) don't break.
- [x] `index.html` rebuilt: glass nav, hero + mock terminal, privacy strip, bento
      products, pricing, demos, waitlist, footer. Real links wired, rest mocked.
- [x] Inline JS: smooth-scroll nav, scroll-reveal, mobile menu, waitlist toast.
- [x] Sharpened corners across the theme (radii ~halved).
- [x] "Pro" tier reframed as "→ Subscriber Access ←" (donate to unlock). PreKnowl
      link labelled literally `codelves.com`.
- [x] **Working hero ELF**: the Bayes terminal is a real GGUF chat. Lazy "Load
      model" button → wllama (jsDelivr CDN ESM, pinned 2.3.1) loads the local
      `SmolLM2-360M-Instruct-Q4_K_M.gguf` (~270 MB), grounded on a 6-passage
      inline Bayes KB, keyword retrieval, streaming output + `[P#]` citations.
      Needs COOP/COEP (server.mjs sets them) for SharedArrayBuffer.
- [ ] Wire waitlist to a real endpoint when billing/email is chosen.
- [ ] Roll the same theme into `about.html` + `docs/` — keep their button/info
      counts close to `codelves.com` (next pass).
- [ ] Hook Stripe / donation flow to the Subscriber Access CTA when live.
- [ ] Consider bundling wllama locally (repo has assets under
      `open/webelves/assets/`) to drop the CDN dependency and stay fully offline.

---

## 7. Open questions (resolve before next pass)

1. Canonical domain for the hub — `webelves.us` or fold under `codelves.com`?
2. Is "Webelves" (the Pro search product) too easily confused with "webelves"
   (the hub)? Consider renaming the product.
3. Waitlist backend: Resend, Buttondown, or a Google-Sheet webhook?
4. Do about/docs adopt this exact theme, or stay on `site.css`?
