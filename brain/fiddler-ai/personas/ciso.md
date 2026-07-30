# Fiddler AI — CISO Persona Summary

## About this persona

Fiddler's own site never names "CISO" as a buyer — its published buying committee lists *Security &
Trust teams* (guardrails, PII/PHI, injection defense), *Approvers* (Security, Compliance, Risk,
Procurement, Legal), and *Executive buyers* (CIO, CTO, VP Engineering, Chief AI Officer). This persona
is synthesized from those roles plus Fiddler's governance/risk messaging — it is the natural executive
owner of the Security & Trust and Approver functions, not a title Fiddler names directly. Flagged here
rather than presented as confirmed on-site language.

Source: `fiddleraibrandoverview.artifact.html` (GTM Overview skill output, July 2026) +
verification pulls from fiddler.ai homepage and fiddler.ai/control-plane, July 2026.

## Persona overview

**Persona name:** CISO (Chief Information Security Officer)
**Role in the buying process:** Approver / risk-owning executive — not the initial champion (that's
Head of AI / Head of ML, per the buying committee), but a required sign-off gate for the Governance/GRC
play, and someone pulled in early on the Guardrails/Trust play once data-leakage or jailbreak exposure
is on the table. Sits alongside Compliance, Risk, Procurement, and Legal as an Approver, and overlaps
with the Executive-buyer tier (CIO/CTO/Chief AI Officer) on budget authority for platform-wide rollout.

**Key titles:** CISO, VP Security, Head of Security & Trust, Chief Risk Officer (regulated-industry
variant), Chief AI Officer (where security and AI risk ownership are combined)

**ICP context:** Enterprise, regulated-industry-heavy — Fiddler's named customer base skews financial
services, insurance, and public sector (Mastercard, Ally, American Family, Elevance Health, DTCC, U.S.
Navy). This is exactly the environment where a CISO has hard sign-off authority over any system
touching production AI/agent traffic, PII/PHI, or regulatory audit trails.

## What they care about

**Core pain points**
- Production LLM/agent apps create a new, largely ungoverned attack surface — prompt injection,
  jailbreaks, PII/PHI leakage through model outputs — that existing AppSec tooling wasn't built to see.
- Passive monitoring isn't enough: detecting a leak after it happened doesn't satisfy a CISO's mandate
  to *prevent* it. ("Continuous monitoring and auditable governance unlike passive evaluation" is
  Fiddler's own framing of this gap.)
- Regulatory mapping is fragmented — EU AI Act, HIPAA, SR 11-7, NIST AI RMF, ISO/IEC 42001, NAIC each
  demand different evidence, and stitching that together manually doesn't scale as agent fleets grow.
- Vendor sprawl / consolidation fatigue — security-adjacent point tools (guardrail scanners, red-team
  tools, prompt-firewall products) each cover a slice, none give one governed control point.
- No clean audit trail from "what did the agent see and do" to "what can we prove to a regulator or
  auditor" — incident response and audit prep both become forensic exercises instead of a lookup.
- AI/ML engineering teams are moving fast (agent deployment) and Security is structurally a step
  behind, evaluating tooling only after production exposure already exists.

**Desired outcomes**
- Inline, preventative enforcement (blocking, not just flagging) on the request/response path of every
  production agent — not passive after-the-fact evaluation.
- A single, auditable governance layer mapped to the regulatory frameworks that already apply to the
  business (EU AI Act, HIPAA, SR 11-7, NIST AI RMF, ISO/IEC 42001, NAIC), not generic "AI safety."
- One control plane across the agent fleet instead of a patchwork of point security tools — fewer
  vendors to diligence, fewer integration points to secure.
- Enforcement that doesn't cost latency or block engineering velocity — security that ships alongside
  the product, not after it.
- Provable, exportable evidence for audits and incident response, on demand rather than reconstructed
  under deadline.

## Metrics that matter to them

- Guardrail/enforcement latency (Fiddler claims <80ms for PII/PHI redaction and prompt-injection/
  jailbreak defense)
- Jailbreak-block precision / toxic-content detection rate
- Time to produce an audit trail / regulatory evidence package
- Incident response time for an AI-related security event
- Number of point security tools consolidated into one control plane
- Coverage — % of production agent traffic actually passing through enforcement, not just monitored

## Messaging pillars (CISO lens)

Fiddler's own site organizes around three recurring themes; re-cut here for a security executive.

**1. Prevention over passive evaluation** — *"The system of trust for your agents."*
Fiddler positions guardrails as inline, enforcing controls on the request/response path — blocking
harmful outputs and PII/PHI/secrets exposure before they leave the system — not a dashboard that tells
you after the fact. For a CISO, that's the difference between a monitoring tool and a control they can
actually rely on for a security posture claim.

**2. Auditable governance, mapped to real regulation** — *"Protect from risks. Maximize ROI."*
Explicit mapping to NIST AI RMF, ISO/IEC 42001, HIPAA, SR 11-7, NAIC, and the EU AI Act, plus a
continuous audit trail across the agent fleet. This turns "we have an AI governance program" into
something a CISO can hand to an auditor or regulator directly.

**3. One control plane, not another point tool** — *(Play #6: Enterprise Control Plane / Consolidation)*
Positioned to replace a patchwork of guardrail scanners, prompt-firewalls, and observability point
tools with a single governed layer. For a CISO already managing tool sprawl, this is a vendor-reduction
argument as much as a capability argument.

## Proof points

**Confirmed (use freely)**
- U.S. Navy (PMS 408): 97% reduction in time to update ATR models — a hard, named, regulated-sector
  reference.
- Nielsen: 99% jailbreak-block precision / 100% toxic-content detection — directly answers "does this
  actually prevent attacks."
- SOC 2 Type 2 and HIPAA compliance — baseline trust signals a CISO will check first.
- 30M+ traces/day at Fortune-20 scale — enterprise production scale, not a pilot-only claim.
- Named regulated-industry customer base: Mastercard, Ally, American Family, Elevance Health, DTCC,
  U.S. Navy — proof this sells into environments with real security sign-off processes.
- Third-party validation: Forrester (x2, Q2 2026), Gartner Market Guide, IDC ProductScape, CB Insights
  (Leader, AI Agent Security & Risk Management Market), FirstMark MAD 2025, a Defense Innovation Unit
  success memo.

**Directional (pending validation)**
- No CISO-attributed named quote currently surfaced — existing testimonials skew toward Head of AI/ML
  and technical buyers, not security leadership specifically.
- No published dollar-quantified cost-avoidance or risk-reduction figure — Fiddler's own material
  flags that "most detailed ROI still sits behind gated case studies."
- No independent third-party penetration-test or red-team report surfaced publicly — would be a strong
  addition for a persona this skeptical of vendor security claims.

## Competitive & objection landscape

| Objection | Response |
|---|---|
| "We already have a prompt-security/red-teaming tool (Lakera, Protect AI, CalypsoAI)." | Those cover a slice of the attack surface. Fiddler is the governed control plane across the whole agent fleet — enforcement, observability, and audit trail in one place, not another point tool to diligence and integrate. |
| "Our cloud provider (Azure AI, Bedrock, Vertex) already has this built in." | Platform-native controls stop at that platform's boundary. Most enterprises run agents across multiple clouds and models — a control plane that isn't locked to one vendor is the only way to get one consistent policy and one audit trail. |
| "This will add latency to production agents." | Enforcement runs inline at under 80ms — built to sit in the request/response path without becoming the bottleneck engineering will route around. |
| "How do we know this actually blocks attacks instead of just logging them?" | Nielsen's validated numbers — 99% jailbreak-block precision, 100% toxic-content detection — are enforcement outcomes, not detection-rate marketing. |
| "We need this mapped to our specific regulatory obligations, not generic AI safety." | Direct mapping to NIST AI RMF, ISO/IEC 42001, HIPAA, SR 11-7, NAIC, and the EU AI Act — this is built for exactly the audit conversation, not a general-purpose safety pitch. |
| "We're managing enough AI/security vendor sprawl already." | That's the Enterprise Control Plane play directly — Fiddler is positioned to replace the patchwork, not add to it. |

## Headline copy (ready to use)

- "The system of trust for your agents."
- "Protect from risks. Maximize ROI."
- "Prevention, not passive evaluation — enforcement in under 80ms."
- "Mapped to NIST AI RMF, ISO/IEC 42001, HIPAA, SR 11-7, and the EU AI Act — not generic AI safety."
- "99% jailbreak-block precision. Validated at Nielsen."
- "SOC 2 Type 2. HIPAA. Built for regulated AI, at Fortune-20 scale."
- "One control plane. Not another point tool."
- "97% faster model updates for the U.S. Navy — under real operational constraints."

## Email outreach notes

- **Tone:** Evidence-driven, risk-literate, skeptical of AI-hype framing. Lead with regulatory
  specificity and hard enforcement numbers, not category language. A CISO will discount "AI safety"
  messaging that doesn't map to a control they can name.
- **Length:** Under 150 words. No jargon beyond what a security leader already uses daily. Asset
  (Buyer's Guide or a named compliance mapping) embedded in the body. Ends with a meeting/demo request.
- **Cadence:** 5–7 business days between touches.

**Angle by title:**
- **CISO / VP Security:** Prevention vs. passive monitoring, regulatory mapping, audit-trail
  completeness, vendor consolidation.
- **Chief Risk Officer (regulated industries):** Named-regulation mapping (SR 11-7, NAIC, HIPAA),
  incident-response time, audit evidence on demand.
- **Chief AI Officer (where security ownership is combined):** Control-plane consolidation, enforcement
  latency, scale proof (30M+ traces/day).

## Assets available

- AI Control Plane Buyer's Guide
- TCO Calculator
- SOC 2 Type 2 and HIPAA compliance documentation
- Analyst validation: Forrester (x2), Gartner Market Guide, IDC ProductScape, CB Insights AI 100 /
  Security & Risk Management Leader report, FirstMark MAD 2025
- Nielsen and U.S. Navy (PMS 408) case studies

## Persona-specific nuance

A CISO is rarely the deal's starting point — Head of AI/ML or a Platform/MLOps champion typically
initiates, with Security pulled in once the app is headed toward production or a compliance deadline
forces the question. Outreach to this persona should assume skepticism by default: lead with the
prevention-vs-monitoring distinction and named regulatory frameworks before any category language,
since generic "AI governance" pitches get filtered out fast by a buyer who reviews vendor security
claims for a living.

## Gaps to fill

- [ ] A named, attributed CISO or security-leadership quote (current references skew Head of AI/ML)
- [ ] A dollar-quantified cost-avoidance or risk-reduction figure (currently gated/unpublished)
- [ ] An independent third-party penetration-test or red-team validation report
- [ ] Confirmation of exact SOC 2 report scope/date and any FedRAMP status, given the U.S. Navy reference

---
*Last updated: July 2026 · Internal use only — Fiddler AI GTM*
*Sources: Fiddler AI GTM Brand Overview artifact (July 2026); fiddler.ai homepage and /control-plane,
verified July 2026.*
