# Full-Site Overhaul Plan

Companion to `PLAN.md` (landing page) and `WEBSITE_PLAN.md` (`.elf` catalog spec).
This doc covers **every page**, the **AI-model standardization audit**, a
**runbook to hand Claude Code** for a full functionality review, and
**recommendations** spanning business logic → product → marketing → tech.

Principle for this pass: **audit and align, do not change runtime defaults.**
Where a default is already correct, confirm it. Where it diverges, log it — don't
silently flip it.

---

## 0. Page inventory

| Page | Path | Type | Has AI chat? | State |
|------|------|------|--------------|-------|
| Landing | `index.html` | Marketing | Yes (hero ELF) | Rebuilt (new theme) |
| About | `about.html` | Marketing | No | Old theme (`site.css`) |
| Webelves product | `webelves.html` | Marketing | No | Old theme |
| Docs | `docs/index.html` | Docs | No | Old theme |
| NotebookELF | `open/notebook/` | App (Vite) | Yes | Built bundle |
| Codelves IDE | `open/ide/` | App | Yes | Built bundle |
| Webelves search | `open/webelves/` | App (Vite) | Yes | Built bundle |
| Forge | `open/forge/` | App (Vite) | Yes | Built bundle |
| Demos | `demos/*.elf.html` | Artifacts | Yes (self-contained) | Generated |

The four `open/*` apps are compiled bundles — treat them as black boxes for styling,
but their model defaults are auditable via string inspection (done below).

---

## 1. AI-surface audit — model + embedder defaults (CHECK ONLY)

Verified by grepping the built bundles. **No defaults changed.**

| Surface | LLM default | Embedder default | Model path referenced |
|---------|-------------|------------------|-----------------------|
| NotebookELF | SmolLM2-360M-Instruct | `Xenova/all-MiniLM-L6-v2` | `models/default.gguf` (+ `default-embed.gguf`) |
| Codelves IDE | SmolLM2-360M-Instruct | — (no RAG) | bundled |
| Webelves search | SmolLM2 (default) | transformers.js MiniLM | `models/smollm2-360m-q4_k_m.gguf` |
| Forge | SmolLM2-360M-Instruct | `Xenova/all-MiniLM-L6-v2` | bundled |
| Hero (landing) | SmolLM2-360M-Instruct | keyword retrieval (no model) | `/open/webelves/models/SmolLM2-360M-Instruct-Q4_K_M.gguf` |

**Conclusion:** the stack is already standardized — SmolLM2-360M-Instruct for
generation, `all-MiniLM-L6-v2` for embeddings, almost everywhere. Good.

**Divergences logged (verify, do not auto-change):**
1. **Path-name drift.** NotebookELF → `models/default.gguf`; Webelves →
   `models/smollm2-360m-q4_k_m.gguf` (lowercase); repo file is
   `SmolLM2-360M-Instruct-Q4_K_M.gguf` (mixed case). On a case-sensitive host this
   404s. **Action: confirm each app's model URL resolves; align filenames or add
   redirects — but only after confirming what each app actually requests at runtime.**
2. **Heavier optional models** in Webelves (Gemma3-1B split, Phi-4 6-part split)
   and NotebookELF (SmolLM2-1.7B). These are user-selectable upgrades, not defaults.
   Keep as options; just confirm the default lands on SmolLM2-360M.
3. **`open/ide/test-tfjs.html`** uses SmolLM2-135M — a test harness, not the IDE
   default. Leave alone (or exclude from deploy).
4. **Embedder source.** MiniLM is pulled from the HF/Xenova CDN by transformers.js.
   For the "fully offline" promise, confirm whether it's bundled or fetched on first
   use. Log it; decide later.

**The standardization task is therefore an alignment + verification task**, not a
default change. The only real fix candidate is the model-path drift (#1).

---

## 2. Per-page work plan (all pages)

Goal: every page reaches the landing page's quality bar (theme, copy, correctness).

**Marketing pages → adopt the new theme** (`css/landing.css` system):
- `about.html` — re-skin to new theme. Keep button/info density close to
  `codelves.com`. Sections: mission, the `.elf` format, Forge deep-dive (#foundry
  anchor must survive), team/contact, waitlist. One primary CTA per section.
- `webelves.html` — re-skin. Product page for the Pro search tool. Hero + how it
  works (fetch → rank → answer) + a live/mock search box + link to `/open/webelves/`.
- `docs/index.html` — re-skin to a docs shell (sidebar nav + content). Keep the
  existing anchors (`#guide-notebookelf`, `#guide-codelves`, `#guide-webelves`,
  `#foundry-install`) so landing links don't break.

**App pages → leave functionally alone; light brand alignment only:**
- Don't restyle compiled bundles. Optionally inject a thin top-bar "← webelves" link
  for navigation back to the hub, via each app's `index.html` shell if it has room.
- Verify each loads, model resolves, chat answers, export works.

**Shared:**
- Consistent nav/footer across marketing pages (extract into the theme).
- Consistent brand: webelves = hub, `codelves.com` link, `.elf` format.
- Favicon, OG/meta tags, sitemap on every page.

---

## 3. Standardization plan (SmolLM2 + embedder) — verification recipe

Do NOT edit defaults. Run this checklist per app and record pass/fail:

1. Open each app, open devtools network tab.
2. Trigger model load. Record: which `.gguf` URL is requested, HTTP status, size.
3. Confirm it's SmolLM2-360M-Instruct Q4_K_M and returns 200 (not 404 from path drift).
4. Trigger an embedding (add a source / run a search). Record the embedder model id
   and whether it's fetched from CDN or served locally.
5. Confirm chat produces a grounded, cited answer.
6. Log results in a table. Only after the full log, decide on fixes (likely just the
   path-name alignment from §1.1).

If a single shared default is desired later: standardize all apps on the path
`/models/SmolLM2-360M-Instruct-Q4_K_M.gguf` + `Xenova/all-MiniLM-L6-v2`, and have
each app's `default.gguf` symlink/redirect to it. Defer until the audit is logged.

---

## 4. Runbook to hand Claude Code (the "plan to make a plan")

Paste this as a fresh task. It tells Claude Code to audit the whole site and report —
**review only, no edits unless told.**

> **Task: Full-site functionality + quality audit (report only, do not modify).**
>
> Context: static site at `D:\cc\website-v2`, served by `node server.mjs` on :3333
> (sets COOP/COEP for SharedArrayBuffer). Hub brand = webelves; products =
> NotebookELF, Codelves, Webelves search, Forge; open format = `.elf`. Standard model
> = SmolLM2-360M-Instruct GGUF, embedder = `all-MiniLM-L6-v2`.
>
> Do this for **every** page (`index`, `about`, `webelves`, `docs/`, the four
> `open/*` apps, the `demos/*.elf.html`):
> 1. **Loads?** Serve the site, open each route, record HTTP status + console errors.
> 2. **Links?** Crawl every `href`/`src`; list 404s and dead anchors.
> 3. **AI works?** For each chat surface: confirm the model URL resolves (no path
>    drift), the model loads, and a test prompt returns a grounded answer. Note load
>    time + size. Do NOT change model defaults — just verify and report.
> 4. **Offline claim true?** Flag any runtime fetch to a third-party origin
>    (CDN model/embedder pulls) that contradicts "runs on your machine."
> 5. **Consistency?** Brand names, nav, footer, pricing tiers, CTA counts across
>    pages. Flag mismatches.
> 6. **Responsive + a11y?** Check mobile layout, color contrast, alt text, focus order.
> 7. **SEO/meta?** Title, description, OG tags, favicon per page.
>
> Output a single report: a per-page table (load / links / AI / offline / a11y /
> SEO = pass|warn|fail) plus a prioritized punch list (P0 broken, P1 should-fix,
> P2 polish). Recommend fixes; implement none until I approve.

Keep the runbook in this repo so it can be re-run each release.

---

## 5. Recommendations — business → product → marketing → tech

### Business logic
- **Reframe paid tier as donation-for-access** (done on landing). Lean into it:
  "open-source, funded by subscribers." Lower refund/▸support burden, higher goodwill.
- **One clear conversion event:** free tool → hit a ceiling → subscribe. Don't gate
  the free tools harder; gate compute/synthesis and convenience (hosted, batch).
- **Pricing clarity:** 4 tiers may be one too many for a donation model. Consider
  Free / Subscriber / Enterprise (drop or merge Ultra into Subscriber as a usage
  tier). Validate against `codelves.com` parity request.

### Product details
- **Make "offline" provable, not just claimed.** A visible "0 network requests"
  badge or a devtools-network screenshot in docs is worth more than copy.
- **Standardize model UX:** same model picker, same "Load model (size)" affordance,
  same cache behavior across all four apps. Today they differ.
- **Cross-link the family.** Every app should have a "← webelves" hub link and a
  "made with `.elf`" footer. Right now they're islands.

### Marketing + advertising
- **Lead with the demo, not the pitch.** The working hero ELF is the strongest asset
  — the whole funnel should push "try it in your browser, now, free."
- **Proof artifacts:** the `demos/*.elf` files are shareable lead magnets. Give each
  a clean share URL + OG card so a single `.elf` link previews well on social.
- **Positioning:** "Perplexity/NotebookLM, but it never leaves your machine." Privacy
  + portability is the wedge against cloud incumbents. Target privacy-conscious,
  air-gapped, education, and offline/field-work audiences.
- **Content engine:** auto-generated `.elf` knowledge files double as SEO landing
  pages (catalog from `WEBSITE_PLAN.md`). Each generated topic = an indexable page.

### Tech
- **Fix model-path drift (§1.1)** — the one concrete bug risk. Verify, then align.
- **Bundle wllama + the model locally** to honor the offline promise and drop the
  CDN dependency the new hero introduced (`open/webelves/assets/` already has wllama).
- **Single source of truth for models:** one `/models/` dir, one canonical filename,
  apps reference it. Kills the path drift permanently.
- **COOP/COEP headers in production** (not just `server.mjs`) — required for
  SharedArrayBuffer / multi-thread inference. Set them at the host/CDN edge.
- **Lazy-load everything heavy.** Models only on user action (hero already does this).
- **Cache models in Cache API / OPFS** so repeat visits are instant (NotebookELF
  already uses OPFS; make it uniform).

---

## 6. Phasing

- **Phase 1 — Audit (no changes).** Run the §4 runbook, fill the §3 table, confirm
  model defaults + find 404s. Output: punch list.
- **Phase 2 — Marketing re-skin.** [DONE] `about`, `webelves`, `docs` onto the new
  theme via `css/reskin.css` overlay (palette remap + system fonts + sharp corners,
  no body rewrites). `codelves.com` nav link + gradient logos added. Ambient
  twirling-geometry background (blurred hex outlines on landing, smoke conic-gradient
  on content pages; both reduced-motion safe) added for engagement. App bundles
  untouched.
  - Optional next visual: swap geometry for real imagery (product screenshots /
    abstract renders) if static art is preferred over CSS motion. Decide later.
- **Phase 3 — Fixes from Phase 1.** Path-drift alignment, dead links, offline leaks.
- **Phase 4 — Cross-family polish.** Hub links in apps, uniform model UX, local
  wllama bundle, production COOP/COEP.
- **Phase 5 — Growth.** `.elf` catalog (per `WEBSITE_PLAN.md`) as SEO + lead magnet;
  donation/Stripe wiring; waitlist backend.

Open decisions before Phase 2: keep 4 pricing tiers or simplify; canonical domain
(`webelves.us` vs fold into `codelves.com`); embedder bundled vs CDN.
