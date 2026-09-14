# Resume Site Revision — Session Record

**Repo:** `rlwbruce-byte/rachelwbruce` · **Site:** https://rlwbruce-byte.github.io/rachelwbruce/
**Branch:** `claude/resume-website-revisions-irjsbf`
**Worked:** 31 Aug – 1 Sep 2026 · **Record written:** 14 Sep 2026

Source of truth for copy: `Rachel_Bruce_2026Tech.pdf` (the 1 Sep revision). Where the
resume and the site disagree, the resume wins unless a decision below says otherwise.

---

## ⚠️ Status: the work is committed but NOT live

GitHub Pages serves from `main`. This branch was pushed but never merged, so the
public site is still the pre-revision version. Verified 14 Sep 2026:

| Check | Live site today | Should be |
|---|---|---|
| Top timeline entry | Named client, "VP of Marketing" | Anatomy.ai — Fractional CMO |
| `og:image` | `og-image.png` → **404** | `ogimage.png` → 200 |
| Downloadable resume | Prior revision (127,086 bytes) | 2026 revision (126,299 bytes) |
| Hero kicker | "Career Impact Report — Filterable Edition" | "Career Impact Report" |
| JSON-LD / `<noscript>` | absent | present |

**To ship:** open a PR from `claude/resume-website-revisions-irjsbf` into `main` and
merge, or fast-forward `main` to the branch. Pages rebuilds in ~1 minute. Then
re-share the link once to confirm the preview card renders.

---

## Commits on this branch

| SHA | What |
|---|---|
| `2f244ef` | Replace `Rachel-Bruce-Resume.pdf` with the 2026 revision |
| `7e9ac56` | Rework `index.html` + regenerate `ogimage.png` |

---

## What changed

### Positioning
- Top entry is now **Anatomy.ai — Fractional CMO, Sept 2025 – Present**, described as
  "My own consultancy — AI-native go-to-market design, consulting, and fractional
  support for B2B SaaS companies." The prior entry named a client and titled the role
  VP of Marketing.
- **All client work is anonymized**, matching the resume. The conference callout and
  the ISV/SDN partner descriptor were removed, since together with the industry
  descriptor they identified the client outright.
- No scope chips on this entry — the previous team-size and budget chips described the
  client's function, not the practice.
- Hero rewritten in **first person**. "Owns the number" replaces "optimizes the engine
  when it's broken." **Fintech** replaces technology distribution in the vertical list.
- Role line carries availability: *"Fractional CMO at Anatomy.ai. Open to VP and
  Director roles."*

### Content
- Core Competencies reordered — **AI Native first**, Channel First up to sixth — and
  all nine cards converted to first person.
- New Trustwave bullet: marketing-influenced pipeline **62% of total, up from 35%**,
  kept separate from the $9.0M sourced-pipeline bullet.
- Strongest metric per bullet is **bolded in place**. A separate stats band was
  considered and rejected — the underlying pipeline figures are incomplete, so no
  aggregate total is claimed anywhere.
- Agency counts moved out of the scope chips into bullet copy.
- Plus One thought-leadership bullet gains "(written and speaking)".
- Tech stack: added Aimfox, HeyReach, Claude Code, Gamma, Wispr Flow, Zapier;
  Data Studio → Looker Studio; Drift removed; Canva and Notion moved to
  Collaboration; "Social & Engagement" → "Social Media Management".

### Fixes
- **`og:image` was broken.** Meta pointed at `og-image.png`; the file is `ogimage.png`.
  Every link share had been rendering with no preview. Path corrected and the card
  regenerated — the old one still read "AI-native marketing leader … and tech".
- **No heading structure.** The page had one `<h1>` and two `<h4>`s; every section
  title was a plain `<div>`. Now proper `<h2>`/`<h3>` with identical styling.
- **A promise the page didn't keep.** The competencies subtitle advertised
  click-through filtering that was never wired up. Removed, along with the unused
  `link` data behind it.
- **Content invisible without JavaScript.** Everything was injected at runtime, so a
  non-executing crawler saw only the hero. Added a `<noscript>` fallback.
- Added `<link rel="canonical">` and JSON-LD `Person` schema.
- Filter-bar tagline moved from the footer to the filter bar it describes; footer now
  carries the Anatomy sign-off. Stray apostrophe fixed.

---

## Decisions log

Recorded so future edits don't silently reverse them.

| # | Decision |
|---|---|
| 1 | Targeting **both** a full-time seat and more fractional clients |
| 2 | Client **anonymized** on the site, matching the resume; also removed from LinkedIn |
| 3 | Single Anatomy.ai entry for now → nested client sub-blocks once there are more |
| 4 | Engagement count left **unquantified** |
| 5 | Nday Security **stays** on the site; dates correct; not active |
| 6 | **No client roster** here — that belongs on Anatomy |
| 7 | **No aggregate pipeline total** — underlying values incomplete |
| 8 | **No KPI band, no new sections** — existing layout preserved throughout |
| 9 | **No source labels** on metrics — they sit in their own entries |
| 10 | Site titles win over resume at **Moogsoft** and **TBI** (deliberate divergence) |
| 11 | Malwarebytes stays **as-is**, $2.6M budget chip stands |
| 12 | Month-level dates retained (resume uses year-only) |
| 13 | Agent **count dropped**, function list kept — "well past nine now" |
| 14 | **No analytics**, **no custom domain** |

---

## Verification performed

Rendered headless and checked, rather than assumed:

- 8 timeline entries, 9 competency cards, 6 filter tags, 44 stack pills, 12 personal
  cards — all present
- Filter driven end-to-end: activating "AI & Tech" correctly drops Nday Security (its
  only entry with no matching bullet), dims 29 bullets, shows the clear button
- No JavaScript errors — only SSL failures reaching Google Fonts, which is the build
  sandbox having no proxy for Chromium, not a page bug
- JSON-LD parses as a valid `Person`
- `scrollWidth == clientWidth` at mobile width — no horizontal overflow
- Every retired string greps to zero: the client name, the conference callout,
  `og-image.png`, "technology distribution", "Filterable Edition", "nine custom
  agents", the dead `comp-link`

---

## Maintenance notes

### The `<noscript>` block is generated, not hand-written

`tools/build-noscript.js` reads the `DATA`, `COMPETENCIES`, `STACK` and `PERSONAL`
arrays out of `index.html` and regenerates the fallback from them, so the two cannot
drift. **Edit a bullet in the JS and the noscript copy goes stale until you re-run it:**

```bash
node tools/build-noscript.js
```

It replaces whatever is between `<noscript>` and `</noscript>` (or a `<!--NOSCRIPT-->`
marker) in place.

### Regenerating `ogimage.png`

Rendered from HTML with headless Chromium using the site's own Google Fonts, then
composited to exactly 1200×630 in Pillow. The compositing step is not optional —
headless Chromium would not honor the fixed 630px canvas height, so the accent bar
kept landing mid-image. If the role line changes, the card has to be rebuilt to match.

---

## Open items

### Blocking
1. **Merge the branch to `main`.** Nothing above is live until this happens.

### Should decide
2. **"Open to VP and Director roles"** is now the most prominent claim on the page.
   Director is a step below what's been held since 2019. Deliberate widening, or
   should it read VP and CMO?
3. **Moogsoft and TBI titles** differ between site and resume by choice. Worth picking
   one for LinkedIn so at least two of three agree.

### LinkedIn reconciliation
4. Headline — "AI-native growth marketing leader", **fintech** not technology
   distribution
5. Current role — Anatomy.ai, Fractional CMO
6. About section — the resume summary, including "owns the number"
7. Skills — HeyReach, Aimfox, Gamma, Wispr Flow, Claude Code, Zapier
8. Confirm Malwarebytes and Nday are listed, since both appear on the site but not the
   resume

### Anatomy.ai (separate repo)
9. **Add a visible services / fractional line.** The site is positioned purely as a
   free skills library; the only consulting signal is a hidden `mailto` subject. Anyone
   arriving from the resume finds a download page and no CMO.
10. Echo "Built by Rachel Bruce — GTM & AI systems" — already added to this site's
    footer, so the two read as one system.

### Deferred
11. Nested client sub-blocks under Anatomy.ai once there are more engagements
    (decision 3)
12. Custom domain — declined for now; would improve search and answer-engine
    attribution if revisited
