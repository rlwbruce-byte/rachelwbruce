# Discovery research checklist

Run this checklist for every new company before drafting personas. Answer every question with a
cited source (URL) — never guess or fill from general knowledge of the category. If a question
can't be answered from public sources, say so explicitly in the verification summary instead of
inventing an answer.

## 1. Brand colors
- Pull from the site's CSS/design tokens if inspectable, the press/brand kit page, or a favicon +
  hero section read.
- Report as hex codes where possible (primary, secondary, accent). If exact hex isn't available,
  describe the palette (e.g. "deep navy + a single warm coral accent") and flag it as approximate.

## 2. Competitors
- Check the site's own comparison/alternatives pages first ("X vs Y", "Why us" pages) — these show
  who *they* think their competition is, which is more useful than a generic category search.
- Cross-check with a web search for "{{company}} competitors" and "{{company}} alternatives" and
  review-site comparison pages (G2, Capterra, TrustRadius) if the company is software.
- List 3-6 named competitors, noting which ones the company directly names vs. which are inferred.

## 3. Category
- What category does the company use for itself (check homepage H1/meta description, About page,
  and any analyst-category language like "Gartner Magic Quadrant for X")?
- Note if there's a mismatch between how the company self-categorizes and how the market/analysts
  categorize them — that mismatch is often strategically relevant.

## 4. Sales plays / GTM motion / buyer personas / sales strategy
- Look for: solutions pages segmented by role or industry, pricing page structure (self-serve vs.
  sales-led vs. enterprise), case studies grouped by use case, careers page sales/GTM job postings
  (titles and territory language reveal motion), and any public GTM commentary (podcasts, exec
  LinkedIn posts, funding announcements describing go-to-market).
- Identify: primary GTM motion (PLG / sales-led / channel / hybrid), the buyer personas the site
  itself targets (titles named in nav, solutions pages, or gated content), and any named "plays"
  (e.g. a specific migration play, a competitive displacement play, a category-creation play).

## 5. Proof points
- Customer evidence: named customer logos, case studies, quotes with attribution (name + title).
- ROI metrics: %, $, or time-based outcomes claimed anywhere on site (homepage, case studies,
  resources).
- Testimonials: direct quotes, video testimonials, review-site excerpts.
- Analyst validation: Gartner/Forrester/IDC mentions, awards, "leader" badges.
- Supporting assets: named reports, benchmark data, ROI calculators, webinars featuring customers.
- Capture proof points with enough specificity to reuse verbatim later (exact number, exact quote,
  exact attribution) — vague paraphrases aren't usable in persona docs.

## 6. Most commonly adopted sales play
- Across the case studies / customer stories found in (5), look for the pattern that repeats most:
  same trigger event, same buyer title, same before/after story shape, same product entry point.
- State the pattern explicitly (e.g. "most customer stories start with a specific ops pain and land
  on a finance-owned ROI metric") — this becomes the throughline for which persona is likely primary
  vs. secondary in the personas you build.

## Output of this phase
Produce a short verification summary (not full persona docs yet) covering all six questions above,
each with 1-3 sentences and a source. Present it to the user with `AskUserQuestion` (or plain
confirmation if AskUserQuestion isn't available) before writing any persona files — the user may
correct, add, or remove facts you found. Do not proceed to persona drafting until this is confirmed.
