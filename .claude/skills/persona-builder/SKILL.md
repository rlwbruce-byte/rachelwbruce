---
name: persona-builder
description: Use when the user wants to build standardized buyer/customer persona documents for a company — given just a company URL, this researches the company (brand, competitors, category, GTM/sales plays, proof points), verifies findings with the user, then generates persona battlecards in a consistent, reusable format. Triggers on requests like "build personas for X", "run the persona builder on this URL", "create buyer personas for [company]".
---

# Persona Builder

Turns a company URL into a set of sales-enablement persona documents, in the same format as a
proven internal example (see `templates/persona-template.md`, a generalized version of the real
three-persona set — Finance / Operations / Product & Engineering — kept verbatim in
`references/example-personas/` as a quality bar for tone, specificity, and section depth). Works
for any company — B2B or B2C, software or not — as long as there's a public web presence to
research.

The process has four phases. **Do not skip the verification phase** — persona docs built on
unverified research produce confidently wrong sales messaging, which is worse than no persona at
all.

## Phase 1 — Collect inputs

Required:
- **Company URL.**

Nice to have, ask for but don't block on:
- **Company name** (if it's not obvious from the URL).
- **Key personas** the user already wants covered (job titles or role clusters). If the user
  doesn't have a list, that's fine — Phase 2 research will surface likely candidates from the
  site itself (nav structure, solutions pages, case study bylines), and Phase 3 confirms them.
- Any existing brand/messaging docs the user wants folded in (positioning doc, sales deck, existing
  persona notes) — treat these as higher priority than what you find on the open web.

If the user gave only a URL with no other context, proceed straight to Phase 2 — don't stall on
questions the research phase can answer itself.

## Phase 2 — Research

Work through `references/research-checklist.md` in full. It covers six questions, run as web
research (WebFetch on the company's own site first — homepage, about, pricing, solutions/use-case
pages, case studies/customers page, careers page; then WebSearch for anything not answerable from
the site itself, e.g. third-party competitor mentions or analyst coverage):

1. Brand colors
2. Competitors
3. Category
4. Sales plays / GTM motion / buyer personas / sales strategy
5. Proof points (customer evidence, ROI metrics, testimonials, analyst validation, supporting assets)
6. Which sales play looks most commonly adopted across the customer portfolio (the throughline
   across multiple case studies/customer stories, if the company publishes more than one)

Cite a source for every fact. If something can't be found publicly, say so — don't fabricate a
brand color, a competitor, or a stat to fill a gap.

## Phase 3 — Verify before building anything

Present a compact research summary (six questions above, a few sentences each, sources noted) back
to the user. Use `AskUserQuestion` to confirm:

- Is this research accurate — anything wrong or outdated?
- Does the persona list look right (propose one based on the buyer titles/roles surfaced in
  research if the user didn't supply one; typically 2-4 personas: usually a primary
  operational/technical champion, a financial/economic buyer, and an internal
  influencer/blocker — but let the actual research drive this, not this default pattern)?
- Any proprietary/internal info (positioning language, sales plays, proof points) the user wants
  substituted in for what's public?

Do not generate persona files until the user confirms or corrects this summary. This is the gate
that keeps the output usable instead of generic.

## Phase 4 — Output options

Once verified, use `AskUserQuestion` to let the user choose delivery format(s) — this can be
multi-select:

- **Individual persona files** — one markdown file per persona (e.g. `personas/finance.md`,
  `personas/operations.md`), following `templates/persona-template.md` exactly, matching the
  structure/section order of the reference example.
- **Consolidated playbook** — a single markdown doc with all personas plus a cross-persona summary
  (competitors, category, proof point library) up front.
- **Rendered artifact** — an HTML battlecard view (one persona per tab/section) for visual review,
  built via the Artifact tool. Good for sharing/skimming, not for pasting into other tools.
- **Sales-enablement export** — a flattened structure (objection/response pairs, headline copy,
  proof points) organized for dropping into a battlecard tool, CRM, or sales enablement platform.

Default to individual persona files if the user just says "build it" without specifying — that
matches the reference example this skill is based on and is the easiest format to hand off or
iterate on persona-by-persona.

## Building each persona doc

For each confirmed persona, fill out `templates/persona-template.md` section by section using only
verified research plus anything the user supplied in Phase 3. Notes on filling it in well:

- **Role in the buying process**: state plainly whether this is the primary champion/first door, a
  second-door evaluator, or an internal influencer/blocker — this should be consistent across the
  persona set (not every persona can be "the primary champion").
- **Messaging pillars**: don't invent pillars per persona. Use the company's actual value
  pillars/positioning themes (found in Phase 2, question 4) and re-cut each one through this
  persona's specific lens — same pillar names across all personas in the set, different framing
  underneath each.
- **Proof points**: pull from the verified proof-point list (Phase 2, question 5), prioritizing the
  ones most relevant to this persona's stated pains and owned metrics. It's fine — expected, even —
  for proof points to repeat across personas if they're broadly relevant, as in the reference
  example where the same customer story anchors multiple personas from different angles.
- **Gaps to fill**: always include this section, honestly. A persona built entirely from public
  research will have real gaps (named customer quotes for a specific angle, a metric the company
  doesn't publish) — flag them rather than papering over with invented specifics.
- Keep the tone and structure consistent with the reference example: concise, sales-usable,
  headline copy that's actually ready to paste into an email or slide — not generic marketing
  filler.

## Handling data quality

If the company's site is thin (little public info, no case studies, no named proof points),
say so explicitly in the verification summary rather than padding out sections with vague claims.
A shorter, honest persona beats a longer fabricated one.
