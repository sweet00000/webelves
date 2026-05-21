# webelves — Publish Plan (Cloudflare)

**Master finishing plan.** Ties together `PLAN.md` (landing page) and
`SITE_PLAN.md` (full-site overhaul). This is the doc that takes the whole directory
from "works locally" to "published on Cloudflare with accounts + payments."

Definition of done:
- Whole site served on Cloudflare, fast, with correct headers.
- Every AI surface uses **one** shared reference: 1 LLM GGUF + 1 embedder, via
  wllama, loaded from a single canonical URL.
- Repo is clean, documented, and pleasant to work in.
- No internal contradictions in copy or code.
- Accounts + Stripe subscriptions live, mirroring the `codelves.com` / PreKnowl
  pattern (Firebase Auth → backend verify → Stripe Checkout → entitlement store).

---

## 1. Hosting architecture (Cloudflare)

```
Cloudflare Pages  →  static site (HTML/CSS/JS, the 4 app bundles, demos)
Cloudflare R2     →  the model files (too big for Pages — see constraint)
Pages Functions   →  /api/* (Stripe checkout, webhook, entitlement)  [or a Worker]
```

**Hard constraint — Pages 25 MiB/file limit.** The GGUF models (135–270 MB+)
**cannot live on Pages.** They go in an **R2 bucket** exposed on a custom subdomain
(e.g. `models.webelves.us`) with:
- `Access-Control-Allow-Origin: https://webelves.us`
- `Cross-Origin-Resource-Policy: cross-origin`
- `Cache-Control: public, max-age=31536000, immutable`
- Range-request support (R2 supports it — wllama streams via ranges).

This *is* the answer to "post the models with the static files": static on Pages,
the 2 model files on R2, both under the same domain. One canonical model URL.

**Headers — site-wide `_headers` at repo root** (Pages reads it):
```
/*
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Embedder-Policy: credentialless
  Cross-Origin-Resource-Policy: cross-origin
```
Use **`credentialless`** (not `require-corp`) so cross-origin model/embedder fetches
work without forcing CORP on every third-party byte, while still enabling
`SharedArrayBuffer` (multi-thread wllama). `crossOriginIsolated` stays true.
(The existing `open/webelves/_headers` uses `require-corp` — align it.)

**`_redirects`** at root for the apps' client routing if needed (NotebookELF SPA).

---

## 2. Single model source of truth

Today each app hardcodes a different path → the `models/smollm2-360m-q4_k_m.gguf`
vs `SmolLM2-360M-Instruct-Q4_K_M.gguf` drift (see `SITE_PLAN.md §1`). Fix with one
shared config every surface reads.

**`/shared/models.config.json`** (served static, tiny):
```json
{
  "llm":   { "id": "SmolLM2-360M-Instruct-Q4_K_M",
             "url": "https://models.webelves.us/SmolLM2-360M-Instruct-Q4_K_M.gguf",
             "n_ctx": 1024, "sha256": "..." },
  "embed": { "id": "all-MiniLM-L6-v2",
             "url": "https://models.webelves.us/all-MiniLM-L6-v2/", "kind": "onnx" }
}
```
- **1 LLM** (SmolLM2-360M-Instruct Q4_K_M) + **1 embedder** (all-MiniLM-L6-v2) for now.
- A shared loader module `/shared/elf-runtime.js` wraps wllama: read config → load
  LLM from the one URL → expose `chat()` / `embed()`. The landing hero, NotebookELF,
  Webelves, Forge all import it. One code path, one cache entry in OPFS.
- Removes per-app path drift permanently; swap the model in one place.

**Note:** the apps are compiled bundles. Either (a) rebuild them from source to import
the shared config, or (b) ship a tiny `models.config.json` + a pre-bundle shim and
have each app read it at runtime. Decide per app during execution.

---

## 3. Accounts + payments (mirror PreKnowl, Cloudflare-native)

PreKnowl pattern (from `Downloads/WorkshopPreKnowl/backendLambda.py`): Firebase Auth
on the client → ID token → FastAPI on Lambda verifies token → Stripe Checkout
(subscription) → Firestore stores `users/{uid}.plan`. Webhook keeps it in sync.

Port to Cloudflare (keep the shape, change the host):
- **Auth:** Firebase Auth client SDK (works anywhere). User signs in → gets ID token.
- **API:** Cloudflare **Pages Functions** under `/functions/api/`:
  - `POST /api/checkout` — verify Firebase token, create Stripe Checkout session
    (subscription mode), return URL. (Mirrors `create_checkout_session`.)
  - `POST /api/webhook/stripe` — verify signature, on `checkout.session.completed`
    write entitlement. (Mirrors `stripe_webhook`.)
  - `GET /api/status/:id` and `GET /api/me` — read plan.
- **Entitlement store:** Cloudflare **D1** (or KV) keyed by `uid` → `{plan, status,
  stripeCustomerId}`. (Replaces Firestore; or keep Firestore via REST if preferred.)
- **Secrets** in Pages env (encrypted): `STRIPE_API_KEY`, `STRIPE_WEBHOOK_SECRET`,
  `FIREBASE_PROJECT_ID` / service-account for token verify. Never in client bundle.
- **Tiers — canonical (fix the drift in §5):** decide one scheme. Recommended given
  the donation reframe:
  | Tier | Price | Gate |
  |------|-------|------|
  | Open | $0 | free tools, no account |
  | Subscriber | $20/mo | search + synthesis + history (the old "Pro") |
  | Ultra | $50/mo | batch synthesis, big models |
  | Enterprise | $200/mo | self-host, RBAC, SLA |
  PreKnowl's Stripe package ids are `pro/ultra/enterprise` — keep `pro` as the
  internal id for "Subscriber" to reuse the backend, or rename consistently.

**Copy rule:** "no account required" stays true for **free tools**; accounts only
gate paid tiers. Update the privacy strip wording so this isn't a contradiction (§5).

---

## 4. Repo cleanup — readable, workable, publishable

**Remove from the deployable tree (and git):**
- The committed GGUFs (~4.6 GB): `open/webelves/models/*.gguf` (Phi-4 2.5 GB,
  phi_4 1.7 GB, gemma 253 MB, SmolLM2 270 MB), `open/notebook/models/default.gguf`.
  → move to R2; add to `.gitignore`. They break Pages anyway.
- `build.zip`, `*.original.md` (caveman backups), `open/ide/test-tfjs.html`,
  `**/selftest.html`, `**/tests/` from the deploy (keep tests in a dev-only path).
- The unrelated download in `Downloads` (the Netflix file) — not in repo, ignore.

**Add at root:**
- `README.md` — what each top-level dir is, how to run (`node server.mjs`), how to
  deploy (Pages + R2), where models live. Make onboarding one read.
- `_headers`, `_redirects` (§1).
- `.gitignore` (models, build.zip, node junk, .env).
- `shared/` (§2: `models.config.json`, `elf-runtime.js`).
- `tools/audit.mjs` already exists — document it in README as the pre-release check.

**Structure to aim for:**
```
/                 index.html, about.html, webelves.html  (marketing)
/css              landing.css, site.css, reskin.css
/js               site.js
/docs             docs site
/demos            *.elf.html artifacts
/open             notebook | ide | webelves | forge  (app bundles, no models)
/shared           models.config.json, elf-runtime.js
/functions/api    checkout.js, webhook.js, status.js  (Pages Functions)
/tools            audit.mjs, build_catalog.py (later)
_headers _redirects .gitignore README.md PUBLISH_PLAN.md
```

**Readability:** the marketing pages carry heavy inline styles — fine for now; the
`reskin.css` overlay means they render consistently. Optional later: lift the worst
inline blocks into classes. Not a blocker for publish.

---

## 5. Contradictions found (fix before publish)

**Status: swept across the marketing pages (index/about/webelves/docs) + CSS.**
Decisions applied: all "Forge"; SmolLM2 is the stated default; `hello@webelves.us`
everywhere; tier reverted to "Pro"; free tools = no account, Pro+ = account; footers
carry `© 2026` + a note that the CC license covers the `.elf` format/artifacts and
subscriptions are not a license; Google Fonts dropped (system fonts). Size numbers
removed rather than faked (see note under item 8). Still in compiled app bundles /
generated `.elf` demos (left per "keep all as they are except the opening page"):
Google-Fonts imports in `open/ide`, `open/webelves`; `demos/demo.elf.html` title
"Forge Demo ELF" already correct, others may retain old strings.

Real ones, from a content + code scan:

1. **Product name: "Forge" vs "Foundry".** `index.html`/`about.html` say **Forge**;
   `docs/index.html` says **Foundry** ("Foundry CLI (Pro+)", `#foundry-install`).
   → Pick one (recommend **Forge**); keep the `#foundry` anchors as aliases so links
   don't break, or update links.
2. **Default model story: Qwen vs SmolLM2.** `webelves.html` shows default
   "Qwen2.5-0.5B-Instruct-Q4" and lists Qwen first; `docs` says "Qwen2.5 or similar
   ~400MB"; the standard + hero + IDE default is **SmolLM2-360M**. → Make SmolLM2 the
   stated default everywhere; mention Qwen only as an optional model.
3. **"Offline / no CDN / nothing leaves your machine" vs actual CDN pulls.**
   `about.html` claims "No CDN dependency for core"; privacy strips say "nothing
   leaves your machine / no telemetry / air-gap." But the new hero loads wllama from
   **jsDelivr**, embedders pull MiniLM from **HF CDN**, and pages use **Google Fonts**.
   → Either (a) bundle wllama + models + fonts locally / on R2 (same origin) and drop
   third-party CDNs, or (b) soften the copy to "no inference in the cloud; model
   downloads once, then runs offline." Recommend (a) for the flagship claim to hold.
4. **Email domain: `webelves.us` vs `webelves.ai`.** `index.html` →
   `hello@webelves.us`; `about.html` → `hello@webelves.ai`. → Pick one canonical
   domain (and reconcile with `webelves.us` hub vs `codelves.com`).
5. **Tier vocabulary drift.** `index.html` renamed Pro → "Subscriber Access" but its
   own pricing still says "Everything in Pro," the waitlist says "when Pro opens,"
   and product tags read "Pro"/"Ultra"; `docs`/`about` say "Pro"/"Pro+"/"Ultra."
   → Adopt one tier scheme (§3) and sweep all pages.
6. **"No accounts required" vs adding accounts/payments.** True only for free tools.
   → Reword to "free tools need no account" so paid tiers don't contradict it.
7. **License vs commerce.** Footer is **CC BY-NC-SA (non-commercial)** sitewide, but
   you're selling subscriptions. → Scope the license: the `.elf` format/spec + demo
   artifacts are CC-NC; the hosted service/code is separately licensed. State it.
8. **Model size claims** — RESOLVED by removing the specific numbers ("~350/230/170
   MB", "≈270 MB") and replacing with "downloads once, then runs offline." NOTE: the
   request was to claim "<25 MB," but a real SmolLM2-360M is ~270 MB — claiming <25 MB
   would be false advertising. Kept honest. If a literal <25 MB on-Pages model is
   wanted, we must ship a genuinely tiny model (e.g. a ~30–60 M-param int8 ONNX), which
   is far weaker than SmolLM2. Open decision.

---

## 6. Pre-publish checklist

**Hosting**
- [ ] Cloudflare Pages project connected to the repo.
- [ ] Root `_headers` with COOP/COEP `credentialless` + CORP.
- [ ] R2 bucket created; 1 LLM gguf + 1 embedder uploaded; CORS + CORP + immutable
      cache set; custom domain (`models.webelves.us`).
- [ ] `_redirects` for SPA routes (NotebookELF) if needed.
- [ ] Confirm `crossOriginIsolated === true` on the deployed origin (SAB works).

**Models / AI**
- [ ] `shared/models.config.json` is the only place model URLs are defined.
- [ ] `shared/elf-runtime.js` wraps wllama; hero + apps import it.
- [ ] Every chat surface loads from the one R2 URL (no path drift, no 404).
- [ ] First load downloads once → cached in OPFS/Cache API → offline thereafter.
- [ ] Embedder source decided (R2-hosted ONNX, not HF CDN, if §5.3 = bundle).

**Accounts / payments**
- [ ] Firebase Auth project; client config in env (public keys only).
- [ ] Pages Functions: `/api/checkout`, `/api/webhook/stripe`, `/api/status`, `/api/me`.
- [ ] Stripe products/prices for each tier; webhook endpoint + signing secret.
- [ ] Entitlement store (D1/KV) writes plan on `checkout.session.completed`.
- [ ] Secrets in Pages env, not in the client bundle.
- [ ] Full checkout tested end-to-end on the live URL.

**Content correctness**
- [ ] All 8 contradictions in §5 resolved and swept across pages.
- [ ] One product name (Forge), one default model (SmolLM2), one email, one tier scheme.
- [ ] Privacy/offline copy matches reality (§5.3, §5.6).

**Repo hygiene**
- [ ] Big binaries removed from git; `.gitignore` in place.
- [ ] `build.zip`, test/selftest files, `*.original.md` excluded from deploy.
- [ ] Root `README.md` explains layout, run, deploy.
- [ ] `node tools/audit.mjs` passes: 0 dead links, 0 missing model paths.

**Final**
- [ ] Lighthouse / mobile / a11y pass on each page.
- [ ] OG/meta + favicon on every page.
- [ ] Manual browser test of each app: load, chat, export.

---

## 7. Phased execution

- **P1 — Decisions & cleanup.** Lock domain, tier scheme, product name, license scope.
  Strip big binaries, add `.gitignore` + `README` + root `_headers`/`_redirects`.
- **P2 — Model source of truth.** R2 bucket + upload; `shared/models.config.json` +
  `elf-runtime.js`; point hero (and rebuildable apps) at it; verify offline cache.
- **P3 — Contradiction sweep.** Fix all of §5 across every page.
- **P4 — Accounts + payments.** [DONE, frontend] Reuses the existing **Lambda**
  backend (not Cloudflare Functions — those were removed). `shared/auth.js` = Firebase
  web auth (config is public/inline) + `startCheckout()` POSTing the ID token to
  `https://zq52asec3gspp2sregscamgbja0pqgae.lambda-url.us-east-1.on.aws/api/checkout/create-session`.
  Sign-in modal + Pro button ("Get Pro →") wired in `index.html`. No secret served —
  Stripe keys stay on the Lambda. REMAINING (config, not code):
  (1) Firebase console → Authorized domains: add `webelves.us` + Pages preview domain;
  (2) enable Email/Password + Google providers;
  (3) Lambda env `FRONTEND_ORIGINS`/`FRONTEND_BASE_URL` += `https://webelves.us` (CORS).
- **P5 — Publish.** Connect Pages, deploy, run the §6 checklist, go live.

---

## 8. Open decisions (block P1)

1. Canonical domain: `webelves.us`, `codelves.com`, or both (hub vs company)?
2. Product name: **Forge** or **Foundry**? (Recommend Forge.)
3. Tier names: keep "Subscriber Access" framing or revert to Pro? (Backend uses `pro`.)
4. Offline claim: bundle everything same-origin (honor the claim) or soften the copy?
5. Embedder: host ONNX on R2, or accept the HF CDN pull on first use?
6. Auth: Firebase (mirrors PreKnowl) or a Cloudflare-native option (Access / magic link)?
