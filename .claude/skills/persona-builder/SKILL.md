---
name: persona-builder
description: Use when the user wants to build standardized buyer/customer persona documents for a company — given just a company URL, this runs a clean Q&A intake, researches the company (brand, competitors, category, GTM/sales plays, proof points), verifies findings with the user, then generates a themed HTML persona playbook and a PDF draft. Triggers on requests like "build personas for X", "run the persona builder on this URL", "create buyer personas for [company]".
---

# Persona Builder

A single, portable, self-contained capability. Give it a company URL, answer a short intake, and it
researches that company's own go-to-market, verifies the findings with you, then produces a themed
persona playbook (HTML) plus a PDF draft — ready to hand to sales, or to seed a scoped Claude Project
per persona.

## How to use this file

- **As a Claude Code skill** — already wired via the frontmatter above. Trigger with something like
  "build personas for acme.com."
- **Standalone, anywhere else** — download this file and paste its full contents as the system /
  custom instructions for a new Claude Project or conversation, then send a company URL to begin.
  Nothing in this file depends on the rest of this repo.

Five steps. **Do not skip Step 3 (verification)** — persona docs built on unverified research
produce confidently wrong sales messaging, which is worse than no persona at all.

---

## Step 1 — Intake (clean Q&A)

Ask these in order. Wait for answers before moving to Step 2. None are hard blockers except the
first — if the user only gives a URL, say so and move on; Step 2 research fills in the rest.

1. **Company URL.** (required)
2. **Company name and product name**, if the product is branded differently from the company (e.g.
   company "Continuous," product "Control") or isn't obvious from the URL.
3. **Key personas** you already want covered (job titles or role clusters) — or say "you decide" and
   Step 2 will propose a list from the site itself (nav structure, solutions pages, case study
   bylines) for you to confirm in Step 3.
4. **Ideal Customer Profile (ICP)**, if known: target company size range, industry/vertical, existing
   tech stack the buyer typically runs, ownership type (e.g. PE-backed vs. founder-led) — anything
   that shapes who these personas actually are. Skip if unknown; note that it'll be inferred from
   published case studies instead, flagged as inferred.
5. **Existing internal materials** to prioritize over public research — positioning doc, sales deck,
   brand guide, proof points not yet published. Anything supplied here outranks what's found online.
6. **Brand colors** — official hex codes if you have them, or say "extract from the site" and Step 2
   will pull them from CSS/brand assets.

---

## Step 2 — Research

Answer all six questions below about the company from Step 1. Work the company's own site first
(homepage, about, pricing, solutions/use-case pages, customers/case-studies page, careers page —
careers pages reveal GTM motion through the sales/RevOps roles posted), then use web search for
anything not answerable from the site itself (third-party competitor mentions, analyst coverage,
review-site comparisons).

**Cite a source for every fact.** If something isn't publicly findable, say so in the verification
summary — never fabricate a brand color, a competitor, or a stat to fill a gap.

1. **Brand colors** — hex codes where possible (primary, secondary, accent). If exact hex isn't
   available, describe the palette and flag it as approximate.
2. **Competitors** — check the company's own comparison/alternatives pages first (most telling), then
   cross-check with search and review sites (G2, Capterra, TrustRadius) if applicable. List 3-6,
   noting which are self-named vs. inferred.
3. **Category** — how the company positions itself (homepage H1, meta description, About page) vs.
   how the market/analysts categorize it. A mismatch there is often strategically relevant — note it.
4. **Sales plays / GTM motion / buyer personas / sales strategy** — primary motion (PLG / sales-led /
   channel / hybrid), the buyer personas the site itself targets (titles named in nav, solutions
   pages, gated content), and any named plays (a migration play, a competitive-displacement play, a
   category-creation play).
5. **Proof points** — customer evidence, ROI metrics, testimonials, analyst validation, supporting
   assets (reports, calculators, webinars). Split every proof point into:
   - **Confirmed** — named, attributed, specific enough to quote verbatim.
   - **Directional** — the pattern exists but isn't fully attributed/validated (e.g. an unconfirmed
     customer quote, a stat without a named source).
   Carry this split all the way into the final persona docs. Directional facts get flagged, never
   presented as hard data.
6. **Most commonly adopted sales play** — across the case studies/customer stories found in (5), the
   pattern that repeats most: same trigger event, same buyer title, same before/after shape, same
   product entry point. State it explicitly — it tells you which persona is usually the primary
   champion vs. secondary in the set you're about to build.

---

## Step 3 — Verify before building anything

Present a compact summary: the six research answers above, the ICP (confirmed or inferred), and a
proposed persona list (if the user didn't supply one in Step 1 — typically 2-4 personas: a primary
operational/technical champion, a financial/economic buyer, and an internal influencer/blocker, but
let the actual research drive this, not that default pattern).

Confirm with the user:
- Is this research accurate — anything wrong, outdated, or missing?
- Does the persona list look right?
- Any proprietary info from Step 1 (Q5) that should override what was found publicly?

**Do not generate persona content until this is confirmed or corrected.** This is the gate that
keeps the output usable instead of generic.

---

## Step 4 — Confirm output format

Ask which deliverable the user wants (default to the first if they just say "build it"):

- **Themed HTML playbook + PDF draft** (default / key output) — one HTML file covering all confirmed
  personas, styled with the company's own brand colors from Step 2, plus a PDF rendered from it. See
  "Generating the output" below.
- **Plain markdown** — one `.md` file per persona, same content, no styling. Useful for pasting into
  other tools or per-persona Claude Projects.

Both can be produced from the same underlying content — build the content once (Step 5), then render
whichever format(s) were requested.

---

## Step 5 — Persona content

For each confirmed persona, produce the following, using only verified research (Step 2/3) plus
anything supplied in Step 1. This is the schema whether the final render is HTML, PDF, or markdown.

**Persona overview**
- Persona name and a short archetype label (e.g. "The Practical Problem Solver")
- Role in the buying process — state plainly: primary champion / first door, second-door evaluator,
  economic buyer, or internal influencer/blocker. Keep this consistent across the set — not every
  persona in a portfolio can be "the primary champion."
- Key titles — 5-8 real job titles this persona covers
- ICP context — the target company profile this persona shows up in (from Step 1 Q4 or inferred)

**What they care about**
- Core pain points — 4-7 specific, evidence-backed pains, in language this persona would actually
  use about their own day-to-day (not generic categories)
- Desired outcomes — the "after" state to each pain, roughly 1:1

**Metrics that matter to them** — real, ownable operational metrics, grouped by sub-domain if the
persona spans several areas

**Messaging pillars (persona lens)** — don't invent pillars per persona. Use the company's actual
value pillars/positioning themes from Step 2 (question 4) and re-cut each one through this persona's
specific lens: same pillar names across every persona in the set, different framing underneath each.

**Proof points** — pulled from the verified Step 2 (question 5) list, split into:
- *Confirmed (use freely)* — prioritize whichever are most relevant to this persona's pains/metrics
- *Directional (pending validation)* — included but explicitly marked as unconfirmed

**Competitive & objection landscape** — a table of 4-6 objections this persona would actually raise,
paired with responses grounded in the company's real differentiators (never a generic rebuttal)

**Headline messages (ready to use)** — 6-10 short lines this persona would stop scrolling for: a bold
claim, a proof-point-backed stat, a reframe of the pain, a tagline variant

**Email outreach notes**
- Tone — calibrated to how this persona actually communicates
- Constraints — under 150 words, no jargon, asset embedded in body, ends with a meeting/demo ask
- Angle by title — one line per title cluster within the persona
- Cadence — 5-7 business days between touches

**Assets available** — the supporting collateral relevant to this persona from Step 2 (case study
videos, decks, one-pagers, ebooks, calculators)

**Persona-specific nuance** *(optional — include only if research surfaces something worth naming)*
— deal-context dynamics that don't fit elsewhere: e.g. this persona is usually the entry point and
wants to "be the hero" internally, or this persona is typically pulled in as a skeptical blocker after
another team has already championed the deal. Name the dynamic and how outreach should account for it.

**Gaps to fill** — a checklist of proof points, quotes, or data this persona's messaging is still
missing. Always include this section, honestly — a persona built from public research alone will have
real gaps. Flag them; don't paper over with invented specifics.

If the company's site is thin (little public info, no case studies, no named proof points), say so in
the Step 3 verification summary rather than padding sections with vague claims. A shorter, honest
persona beats a longer fabricated one.

---

## Generating the output

### Themed HTML playbook

Map the Step 2 brand colors to CSS variables and build one HTML file covering every confirmed
persona. Use the skeleton below: keep the `<style>` block and structure, fill the placeholders, and
duplicate the `<section class="persona">` block once per confirmed persona (add a TOC link for each).

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>{{COMPANY_NAME}} {{PRODUCT_NAME}} — Persona Playbook</title>
<style>
  :root{
    --primary: {{PRIMARY_HEX}};
    --secondary: {{SECONDARY_HEX}};
    --accent: {{ACCENT_HEX}};
    --ink:#1c1c1c; --paper:#faf9f7; --card:#ffffff; --muted:#767267;
    --font-body: -apple-system, "Segoe UI", Roboto, sans-serif;
    --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  }
  *{box-sizing:border-box;}
  body{margin:0; background:var(--paper); color:var(--ink); font-family:var(--font-body); line-height:1.5;}
  header.cover{background:var(--primary); color:#fff; padding:56px 40px;}
  header.cover h1{margin:0 0 8px; font-size:clamp(28px,5vw,44px);}
  header.cover .meta{font-family:var(--font-mono); font-size:13px; opacity:.85;}
  nav.toc{background:var(--ink); padding:14px 40px; display:flex; gap:14px; flex-wrap:wrap;}
  nav.toc a{color:#fff; text-decoration:none; font-family:var(--font-mono); font-size:12.5px;
    text-transform:uppercase; letter-spacing:.04em; border:1px solid #ffffff55; padding:6px 12px; border-radius:3px;}
  .persona{max-width:880px; margin:0 auto; padding:48px 40px; border-bottom:2px solid #e5e0d8;}
  .persona h2{font-size:30px; margin:0 0 4px; color:var(--primary);}
  .persona .archetype{color:var(--secondary); font-weight:600; margin-bottom:4px;}
  .persona .rolebar{font-family:var(--font-mono); font-size:12.5px; color:var(--muted); margin-bottom:24px;}
  .card{background:var(--card); border:1px solid #e5e0d8; border-radius:8px; padding:20px 22px; margin-bottom:20px;}
  .card h3{margin-top:0; font-size:15px; text-transform:uppercase; letter-spacing:.04em; color:var(--primary);}
  .pillar{border-left:3px solid var(--accent); padding-left:14px; margin-bottom:14px;}
  .proof-confirmed{border-left:3px solid var(--primary); padding-left:12px; margin-bottom:8px;}
  .proof-directional{border-left:3px dashed var(--muted); padding-left:12px; margin-bottom:8px; opacity:.8;}
  .proof-directional .tag{font-family:var(--font-mono); font-size:10px; text-transform:uppercase;
    background:#fdeee0; color:#a05a1c; padding:2px 6px; border-radius:3px; margin-left:6px;}
  table{width:100%; border-collapse:collapse; font-size:14px;}
  th,td{text-align:left; padding:10px; border-bottom:1px solid #e5e0d8; vertical-align:top;}
  .headline-list li{margin-bottom:8px; font-weight:600;}
  .gaps li{margin-bottom:6px;}
  .persona-footer{font-family:var(--font-mono); font-size:11.5px; color:var(--muted); margin-top:12px;}
  @media print{
    nav.toc{display:none;}
    .persona{page-break-before:always; border:none;}
    body{background:#fff;}
  }
</style>
</head>
<body>

<header class="cover">
  <h1>{{COMPANY_NAME}} {{PRODUCT_NAME}} — Persona Playbook</h1>
  <div class="meta">Generated {{GENERATED_DATE}} · Category: {{CATEGORY}} · Competitors: {{COMPETITORS_SHORT}}</div>
</header>

<nav class="toc">
  <!-- one <a href="#persona-slug"> per confirmed persona -->
  <a href="#persona-{{PERSONA_SLUG}}">{{PERSONA_NAME}}</a>
</nav>

<!-- Repeat this whole <section> once per confirmed persona -->
<section class="persona" id="persona-{{PERSONA_SLUG}}">
  <h2>{{PERSONA_NAME}}</h2>
  <div class="archetype">The {{PERSONA_ARCHETYPE}}</div>
  <div class="rolebar">{{ROLE_IN_BUYING_PROCESS}} · Key titles: {{KEY_TITLES}}</div>

  <div class="card">
    <h3>ICP Context</h3>
    <p>{{ICP_CONTEXT}}</p>
  </div>

  <div class="card">
    <h3>Core Pain Points</h3>
    <ul>{{PAIN_POINTS_LIST}}</ul>
    <h3>Desired Outcomes</h3>
    <ul>{{DESIRED_OUTCOMES_LIST}}</ul>
  </div>

  <div class="card">
    <h3>Metrics That Matter</h3>
    <p>{{METRICS}}</p>
  </div>

  <div class="card">
    <h3>Messaging Pillars ({{PERSONA_NAME}} Lens)</h3>
    <!-- repeat .pillar block per company pillar -->
    <div class="pillar"><strong>{{PILLAR_NAME}}</strong> — <em>"{{PILLAR_TAGLINE}}"</em><p>{{PILLAR_PERSONA_FRAMING}}</p></div>
  </div>

  <div class="card">
    <h3>Proof Points</h3>
    <!-- repeat per confirmed proof point -->
    <div class="proof-confirmed">{{PROOF_POINT_CONFIRMED}}</div>
    <!-- repeat per directional proof point -->
    <div class="proof-directional">{{PROOF_POINT_DIRECTIONAL}}<span class="tag">Directional</span></div>
  </div>

  <div class="card">
    <h3>Objection Handling</h3>
    <table>
      <tr><th>Objection</th><th>Response</th></tr>
      <!-- repeat <tr> per objection -->
      <tr><td>{{OBJECTION}}</td><td>{{RESPONSE}}</td></tr>
    </table>
  </div>

  <div class="card">
    <h3>Headline Copy</h3>
    <ul class="headline-list">{{HEADLINE_COPY_LIST}}</ul>
  </div>

  <div class="card">
    <h3>Email Outreach Notes</h3>
    <p><strong>Tone:</strong> {{TONE}}<br>
       <strong>Cadence:</strong> 5–7 business days between touches</p>
    <p>{{ANGLE_BY_TITLE_LIST}}</p>
  </div>

  <div class="card">
    <h3>Assets Available</h3>
    <ul>{{ASSETS_LIST}}</ul>
  </div>

  <div class="card gaps">
    <h3>Gaps to Fill</h3>
    <ul class="gaps">{{GAPS_LIST}}</ul>
  </div>

  <div class="persona-footer">Last updated: {{MONTH_YEAR}} · Internal use only — {{COMPANY_NAME}} GTM</div>
</section>

</body>
</html>
```

Fill every `{{PLACEHOLDER}}` from the Step 5 content. Save the rendered file as
`{{company-slug}}-persona-playbook.html`.

### PDF draft

- **If a headless browser / code-execution tool is available** (e.g. this environment's Playwright +
  Chromium): render the saved HTML file and print it to PDF using the `@media print` rules already in
  the stylesheet above (one persona per page). Save as `{{company-slug}}-persona-playbook.pdf`.
- **If no code-execution is available** (e.g. a plain chat surface): output the complete rendered HTML
  in a fenced code block, tell the user to save it as `.html`, open it in a browser, and use
  **Print → Save as PDF** — the print stylesheet is already tuned for that path (page break per
  persona, TOC hidden).

Deliver both the `.html` and (where possible) the `.pdf` to the user, plus offer the plain-markdown
version if they asked for it in Step 4.
