# CONTEXT — ubiquitous language

Glossary only. No implementation details.

## Terms

**Opportunity Matrix** — Ranked table of ~30 Indonesian industries scored against
the pre-committed rubric (`research/RUBRIC.md`). Measures *market truth* only:
what the strongest opportunity is, independent of who the founder is. Never
contaminated by founder-specific constraints.

**Kill Test** — Four pre-committed pass/fail questions applied to every
opportunity regardless of score: problem survives without blockchain;
PostgreSQL under one trusted operator is insufficient; not shippable as an
incumbent ERP feature in six months; enough value for a standalone company.
Any failure eliminates.

**Founder-Fit Gate** — Second-stage filter applied *after* the Opportunity
Matrix, before deep-dive selection. Tests whether Farros specifically can build
the opportunity (reachable first customer, capital, personal risk, buildable
MVP). Exists so the matrix stays market-truth while the shortlist stays
buildable. All five must pass:
- **G1 First customer** — plausible *paying* customer ≤12 months, reachable
  from Surabaya or remote. Unpaid pilot does not count.
- **G2 Buildable MVP** — 1–2 engineers, ≤3 months, on existing strengths
  (event sourcing, verification APIs, measurement). No hardware/IoT/field ops.
- **G3 Capital** — ≤ ~$10k pre-revenue; no infrastructure or licensing walls.
- **G4 Personal risk** — no adversarial exposure to powerful actors
  (procurement-style risk auto-fails).
- **G5 Regulatory** — no license required before first revenue (PSrE, OJK,
  Bappebti prerequisites fail).

**Deep Dive** — Investment-memo-grade investigation of one matrix survivor that
passed the Founder-Fit Gate. Only written after the user reviews the matrix.

**Custodian-Independent Verifiability (CIV)** — The property this venture must
require: an external verifier (regulator, foreign buyer, court, defrauded
member) can check a record *without trusting any single operator, including
us*. This property — not the "blockchain" label — is the bar. Blockchain
proper is required only when multiple adversarial writers need shared write
access.

**Necessity Ladder** — Mandatory proof in every Deep Dive: rank architectures
from simplest up (plain Postgres → signed append-only log → publicly anchored
transparency log → permissioned chain → public chain), name the verifiers and
threat model at each rung, and identify the *minimum sufficient rung*. If the
minimum sufficient rung is Postgres or an unanchored log, the idea dies even
after surviving the matrix.

**Vertical Wedge** — The single industry product actually sold first: a named
problem with a named budget owner in the top gate-passing matrix industry.

**Horizontal Core** — The generic verifiable-record engine underneath the
wedge, kept industry-agnostic so later verticals reuse it. The cross-cut
trust-failure map defines its requirements. Not sold on its own until at least
one wedge pays.

**Bootstrap Bar** — Program B's hard elimination gate: a credible path to a
durable ≥$1M ARR software business, buildable and operable under gate G1–G6.
Must be established bottom-up (customers × realistic ACV × reachable
customer count, with evidence quality attached to each term), never TAM ×
hypothetical penetration.

**Upside Flag** — Program B's secondary evidence, recorded only for
candidates that already cleared the Bootstrap Bar: a credible expansion path
beyond the initial niche (customers, verticals, geography, regulatory).
Preference-orders survivors. **Never a compensating factor** — a $100M
theoretical market that cannot plausibly reach $1M ARR under G1–G6 is
eliminated; upside cannot rescue a failed Bootstrap Bar.

**Integrity Problem (Program B scope)** — A candidate is in-scope iff the
customer's economic loss is materially caused by uncertainty about the
truth, validity, uniqueness, identity, provenance, or consistency of
economically consequential information — and the product's primary economic
function is establishing, testing, reconciling, or maintaining that truth.
**Scope Test:** if the integrity problem disappeared tomorrow, the
customer's reason for buying must materially disappear. In: fraud/anomaly
analytics, claims integrity, uniqueness registries, entity resolution,
canonical reference data, reconciliation, continuous audit, identity
binding, provenance. Out: generic CRM/workflow, marketplaces, lending
products, paperwork-compliance SaaS, generic BI.

## Decisions log

- 2026-07-29: Research objective is **a real company Farros intends to build**
  (not a research artifact). Matrix stays founder-agnostic; founder constraints
  applied as the separate Founder-Fit Gate. ("A-with-gate")
- 2026-07-29: Founder-Fit Gate criteria G1–G5 pre-committed before matrix
  results arrive — strict G1 (paying, not pilot) and strict G5 accepted.
- 2026-07-29: "Blockchain necessity" defined as the CIV *property*, not the
  label (option B) — conditional on proof: every Deep Dive must carry a
  Necessity Ladder demonstrating the minimum sufficient architecture. Accepted
  cost: winner may not pitch as a "blockchain startup" to crypto funds.
- 2026-07-29: Proof standard (option C): every Deep Dive gets a *written*
  Necessity Ladder; only the selected winner gets a prototype benchmark with
  pre-registered, git-timestamped pass/fail criteria where the Postgres
  strawman must measurably fail. If the strawman passes, the winner dies and
  selection returns to the shortlist. "Pre-registered" = criteria committed
  before the benchmark runs — not an academic publication.
- 2026-07-29: Sequencing (option C): Vertical Wedge sold first, Horizontal
  Core underneath. Discipline: no vertical assumptions leak into the core; no
  platform pitch before wedge #1 generates revenue.
- 2026-07-29: Zero-survivor rule (6a): an empty shortlist is a valid final
  deliverable. At most ONE consciously-logged relaxation per round (widen scan
  / relax one gate criterion / accept 6.5–7.0 borderliners), chosen with the
  user. Never silent, never two at once.
- 2026-07-29: Matrix review protocol (6b): user ratifies or challenges
  specific kills (challenge must name the disputed score/refutation; triggers
  re-verification with evidence, not re-scoring) and approves the deep-dive
  shortlist. Rubric itself is not re-litigated.
- 2026-07-29: Founder capacity (stated facts): solo until revenue (+1
  possible later); graduates ~Sep 2026, coursework finished; full-time
  available NOW until a job lands, then the venture runs alongside
  employment. Explicitly not all-in: intended as a compounding long-run
  project, not a burn-the-boats startup sprint.
- 2026-07-29: G6 adopted — sixth gate criterion, side-project survivability:
  wedge must grow product-led (self-serve/API adoption, no founder-driven
  enterprise sales cycle, evening-sized ops surface, no year-one pager SLA;
  prefer wedges whose record base compounds on its own). Windowed
  sequencing: prototype + first-customer push scheduled inside the full-time
  window (now → job start); first paying customer or pre-committed kill
  decision before employment absorbs the founder.
- 2026-07-29: Channel-partner rule: named friend sells SaaS to government/
  entity buyers. A wedge may pass G1 via this channel ONLY if the friend
  already sells to that wedge's specific buyer type; dependencies logged
  first (named partner + rev share, PT/NIB/e-katalog entity lead time as a
  G3/G5 cost, B2G payment latency). Channel may upgrade a wedge, never be
  the sole reason it survives. Channel-first wedge selection rejected.
- 2026-07-29: Phase 1 returned zero survivors (30/30 eliminated, raw max
  6.6). Per rule 6a the user chose ONE relaxation: widen the scan along
  structural axes (Phase 1.5C), blockchain premise retained. Protocol
  pre-committed in research/PHASE15-PROTOCOL.md: H1 theory test, axes
  1/2A/2B/3 + exploratory cohort (axis 4) + control group (axis 5), verify
  triggers widened (raw ≥6.0 OR necessity ≥7 OR competition ≥7), 7.0 bar
  unchanged. GPT-review amendments adopted: H1 sharpened to existence claim,
  axis 2 split (custodian fraud vs asset uniqueness), axis 5 as control.
- 2026-07-29: Phase 1.5 returned zero survivors (26/26, max 5.8); H1
  unsupported; P2 control confirmed 3/3; gold whitespace refuted → Phase 1
  survivors retroactively zero. **Program A CLOSED and FROZEN** per user
  ruling (A → freeze → B as separate program). Conclusion memo:
  research/PROGRAM-A-CONCLUSION.md, adversarially fact-checked (12 defects
  found and fixed), frozen at sha256
  e5ff06827257bbf89c50e62b9064b316154555f39fb8f85ad3ea9d848aa60e65.
  Decision rule: no rerun unless a named revival trigger fires; any rerun is
  a new versioned protocol. Program B ("largest Indonesian trust/integrity
  failures where software materially changes the economics, architecture
  unconstrained") is a NEW program: own hypothesis, own rubric, blank sheet;
  inherits A's evidence and Class 1–3 taxonomy as priors; never reopens A.
- 2026-07-29: Program B Q1 = dual-track (option C, user-refined): hard gate
  is the Bootstrap Bar (≥$1M ARR bottom-up under G1–G6); Upside Flag is
  secondary evidence among survivors only, never compensating. An ARR path
  requiring an enterprise-sales organization is eliminated (G6).
- 2026-07-29: Program B Q2 = scope boundary accepted (GPT-refined wording):
  Integrity Problem definition + Scope Test as entry filter; fraud/anomaly
  analytics IN (JKN shape), reference/data-quality products IN. A's
  CIV-shaped kill tests do NOT carry into B; B pipeline: Scope gate →
  Matrix → Bootstrap Bar → G1–G6 → Deep Dive → Necessity Ladder only as
  architecture-selection tool, never eliminator.
- 2026-07-29: Program B Q3 = kill test locked. K1 data access (paying
  customer controls/has legal access to the evidence; hard kill). K2 oracle
  bound (truth inferable from available records/signals; fabricated-at-source
  and off-system collusion die; hard kill). K3 absorption, 12-month horizon,
  EVIDENCE REQUIRED — kills only on documented roadmap/announced regulation/
  active procurement/funded implementation/incumbent entering the exact
  function; "the state could build it" never kills. K4 Bootstrap Bar
  (bottom-up ≥$1M ARR; no TAM rescue). Scope Test runs pre-research as
  definition gate. K4 and G1–G6 overlap intentionally: K4 = abstract
  economics, G1–G6 = operational reality.
- 2026-07-29: Program B Q4 = rubric locked. Severity 20%, Bootstrap revenue
  quality 20% (renamed from "market quality" — bottom-up path evidence, no
  TAM pull), WTP 15%, Data position 15%, Absorption distance 10%,
  Competition 10% (whitespace still requires adversarial memos), Compounding
  moat 10%. Bar stays 7.0. Urgency deliberately excluded (A showed
  deadline-driven spend routes to incumbents; severity+WTP already capture
  "bleeding now"). Anchor-level disjointness rule: Data position = evidence
  side (access defensibility + data accrual; same-feed-available-to-all
  scores low); Compounding moat = customer side only (switching costs,
  integration, network effects) — prevents double-counting compounding
  across 25% of the score. Founder fit never scored, only gated (G1–G6).
- 2026-07-29: Program B Q5 = sourcing locked. Two-stage: Stage 1 mines A's
  corpus (underlying problem is the candidate, not A's discarded
  architecture); Stage 2 gap-fills using a pre-built coverage map of 14
  integrity mechanisms so "broader than A" is auditable. Merge → dedupe →
  Scope Gate → full research → K1–K4 → scoring. Priors (receivables, JKN)
  are "prior candidates, not prior survivors" — no bonus, no auto deep
  dive. Target ~30, minimum 25 legitimate; no padding; if over-generated,
  select 25–30 by pre-committed diversity rule. Grilling concluded;
  protocol to be written and frozen after user review.
- 2026-07-29: Program B protocol RATIFIED and FROZEN at sha256
  e2951a71d1a5117bcd95c6e2bab4c40e53a8f413b65b735b4d1e83053e65a4c6
  (research/PROGRAM-B-PROTOCOL.md), including the added diversity tiebreak
  (max 3 per mechanism, severity-evidence quality breaks ties). Scoring
  workflow launched same day.
- 2026-07-30: Program B research-stage agents were run on Sonnet (workflow
  `opts.model`) to survive rate limits; refutation memos and the
  calibration judge stayed on Opus. The calibration pass corrected the
  resulting score drift (matrix §(a) normalization rules); the anchor audit
  (research/verify/audit-anchor-application.md) bounds how much any of it
  could matter.
- 2026-07-30: **Program B CLOSED and FROZEN.** 30/30 eliminated, HB not
  supported under the frozen protocol. Conclusion memo
  research/PROGRAM-B-CONCLUSION.md at sha256
  c4002cb2f4d0c9a2402132a899c164341133c9dcba1b4b4c168b67ae46acc2c2; audit
  artifact at sha256
  1d0ce2335297296c6f96d921936eb2c3cb53e6581ba78adc9abf8fb2fee782a6. Two
  adversarial fact-check rounds run before freeze (4 HIGH + 16 MED, then 7
  residual, all fixed); errata banner added to the matrix. Corrected
  headline finding: Indonesian buyers DO pay for integrity software, but
  observed prices × reachable customer counts sit below bootstrap
  economics, and free state services cap the price (SI-INSAF Rp2.6M/BPR
  needs ~6,300 customers vs ~1,100-1,518 BPRs). Decision rule: not rerun
  under this protocol; future work is a new versioned program.
  **Program C seed (not opened):** budget-first search — find buyers
  already spending, then identify which part of that spend is an integrity
  problem. Both programs to date ran problem-first.
- 2026-07-30: **Programs A and B permanently frozen.** No further edits
  beyond typographical correction; all four hashes re-verified on close.
  Agreed next sequence, in place of opening Program C: (1) freeze;
  (2) package the corpus for a reader (README.md); (3) ONE bounded
  geography test on the nine candidates that passed all kill tests and died
  only on economics — an appendix to Program B, not a new program, no
  rescoring and no new candidates; (4) spend the remaining full-time window
  on buyer interviews and the job hunt. **Rationale:** the dominant
  uncertainty has changed — it is no longer "is there a company here?" but
  "is the negative result caused by Indonesian market structure or is it
  general?" Geography was the one variable held fixed across all 86
  candidates. Desk research is exhausted; both conclusions name the absence
  of customer interviews as the largest evidence gap. No further full
  protocol before graduation (~Sep 2026): the scarce resource is calendar
  time, not research capacity.
