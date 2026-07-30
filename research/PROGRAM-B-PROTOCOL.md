# Program B Protocol — Pre-committed

**Status: FROZEN — ratified by user 2026-07-29, before any candidate was
scored.** Amendments require a new versioned protocol. Program B is a new program with its
own hypothesis and rubric. It inherits Program A's evidence
(`research/PROGRAM-A-CONCLUSION.md`, frozen) and its Class 1–3 taxonomy as
priors; nothing here reopens Program A.

## 1. Question and hypothesis

> **What are the largest Indonesian trust and integrity failures for which
> software materially changes the economics, architecture unconstrained?**

**HB:** There exists at least one integrity problem in Indonesia that
(a) passes the Scope Test, (b) survives kill tests K1–K4, and (c) scores
≥7.0 on the Program B rubric — i.e., a bootstrap-viable integrity software
business exists. Falsification: an empty matrix under this protocol means
no such business was found under these constraints as of this scan; the
result stands as a valid deliverable (rule 6a applies: at most one
consciously-logged relaxation per round, chosen with the user).

## 2. Scope Gate (pre-research definition filter)

A candidate is in-scope iff **the customer's economic loss is materially
caused by uncertainty about the truth, validity, uniqueness, identity,
provenance, or consistency of economically consequential information**, and
the product's primary economic function is establishing, testing,
reconciling, or maintaining that truth.

**Scope Test:** *if the integrity problem disappeared tomorrow, the
customer's reason for buying must materially disappear.* Integrity as an
incidental feature of a larger workflow is out.

In: fraud/anomaly analytics, claims integrity, uniqueness/double-pledge
checking, reconciliation, entity resolution, canonical reference data,
continuous audit, identity binding, provenance, credential verification.
Out: generic CRM/workflow, marketplaces, lending products, paperwork
automation, generic BI.

## 3. Pipeline

Scope Gate → full research → K1–K4 kill tests → rubric scoring →
calibration judge → matrix (bar 7.0) → Founder-Fit Gate G1–G6 (CONTEXT.md)
→ deep dives → Necessity Ladder (architecture selection only — never an
eliminator in B).

## 4. Kill tests (any failure eliminates; K3 requires evidence)

- **K1 — Data access:** a paying customer controls, or has
  contractual/legal access to, the evidence needed to establish the truth.
  If proof requires cooperation from the party being evaluated, or from a
  platform that refuses every anchor, kill. (Ad-tech lesson.)
- **K2 — Oracle bound:** the contested truth is inferable from available
  records and signals. Fabricated-at-source physical truths and off-system
  collusion kill. (Inventory/COLL lesson.)
- **K3 — Absorption (12-month, evidence-required):** kill only on strong
  evidence that an actor already controlling the customer relationship and
  data is likely to ship, mandate, or absorb the function within 12 months:
  existing roadmap, announced regulation, active procurement, funded
  implementation, or an incumbent already entering the exact function.
  "The state/incumbent could build it" never kills. (Class 1/3 lesson,
  bounded by A's own evidence rule.)
- **K4 — Bootstrap Bar:** a credible bottom-up path to ≥$1M ARR under
  G1–G6: customers × realistic ACV × reachable customer count, with
  evidence quality attached to each term. No TAM × penetration. No venture
  upside rescue. An ARR path requiring an enterprise-sales organization
  fails (G6).

## 5. Rubric (bar: 7.0 after calibration; anchors fixed now)

Weighted = 0.20·severity + 0.20·revenue + 0.15·wtp + 0.15·data +
0.10·absorption + 0.10·competition + 0.10·moat.

**Severity (20%)** — 3: nuisance losses absorbed silently. 5: measurable
recurring loss under ~1% of customer revenue/budget, cited. 7: documented
recurring losses or penalties with dedicated staff/processes managing them.
9: documented large loss events (scandal, insolvency, prosecution)
traceable to the integrity failure.

**Bootstrap revenue quality (20%)** — evidence quality of the bottom-up
path, not market size. 3: needs thousands of customers, or ACV has no
Indonesian pricing comparable. 5: plausible segment but count or ACV rests
on inference. 7: named segment; ACV evidenced by comparable Indonesian
spend; ≤ ~500 customers; channels identified. 9: ≤ ~200 customers; ACV
evidenced by what buyers already pay for an inferior alternative; concrete
first-ten-customer route.

**Willingness to pay (15%)** — 3: beneficiary cannot pay or loss is
diffuse. 5: budget exists, unowned or slow. 7: named budget owner already
paying for an inferior alternative, cited. 9: displaceable line-item spend,
or quantified loss avoidance the buyer accepts.

**Data position (15%) — evidence side only.** 3: commodity data; the same
feed is available to any competitor (privileged API access alone scores
low). 5: per-customer integration access, replicable. 7: defensible access
(contractual exclusivity or cross-customer aggregation) AND the data asset
accrues with use. 9: proprietary accumulating dataset a competitor cannot
reconstruct without repeating the same multi-customer history.

**Absorption distance (10%)** — residual risk beyond K3's evidence
threshold. 3: adjacent incumbent/state program exists (no 12-month
evidence). 5: plausible absorber, no roadmap. 7: function orthogonal to
every incumbent roadmap found. 9: absorption would require the absorber to
act against its own incentives (e.g., auditing its own records).

**Competition (10%)** — 3: funded incumbents with Indonesian traction.
5: several attempts, none dominant. 7: only pilots, abandoned, or
foreign-only players — memo-verified. 9: whitespace verified by adversarial
memo.

**Compounding moat (10%) — customer side only** (disjoint from Data
position by rule). 3: single-tenant switchable tool. 5: integration
lock-in. 7: cross-customer network effects or workflow depth with high
switching cost. 9: de-facto standard — leaving means losing the shared
integrity network.

## 6. Evidence and verification rules (carried from A, unchanged)

No number without named source and year, else "(unverified)"; secondary
repetition is one source; collusion-tainted sizing stripped; competitive
state checked at scan time. **Adversarial memo triggers:** raw weighted
≥6.0, OR competition ≥7, OR absorption distance ≥7 (absorption optimism is
B's analogue of A's necessity optimism). Refuted claims cap the relevant
dimension at 4.

## 7. Candidate sourcing (two-stage)

**Stage 1 — A-corpus mining.** Agents re-read all 56 Program A profiles,
the crosscut, and both memos, extracting every software-shaped integrity
opportunity. The underlying problem is the candidate — not A's discarded
architecture.

**Stage 2 — structural gap-fill against a coverage map.** Fourteen
integrity mechanisms; Stage 2 deliberately generates candidates in the
mechanisms A under-covered, making "B is broader than A" auditable:

| Mechanism | In A? |
|---|---|
| Fraud/anomaly detection | partial (as blockchain shapes only) |
| Claims validation | partial (BPJS profile, never as analytics venture) |
| Uniqueness/double-pledging | yes (axis 2B) |
| Reconciliation | partial (ad, carbon) |
| Entity resolution | absent |
| Reference-data accuracy | absent (mentioned only in region-data caveat) |
| Provenance | yes (heavily) |
| Identity binding | yes |
| Continuous audit | absent |
| Compliance verification | partial (as CIV shapes) |
| Credential verification | yes |
| Financial-record integrity | partial (never as detection software) |
| Physical-to-digital integrity | yes (cold chain, inventory) |
| Inter-organizational record disagreement | yes (axis 5) |

Stage 2 emphasis: the four absent + four partial rows. (Preliminary
markings above; sourcing agents verify against the corpus and correct
before generation.)

**Merge → dedupe → Scope Gate.** Target ~30 candidates; minimum 25
legitimate, fully scorable. No padding to reach the target. If
over-generated, select 25–30 by pre-committed diversity rule: at most 3
candidates per mechanism row, ties broken by severity evidence quality.

**Priors get no privilege.** Receivables uniqueness and JKN claims
integrity enter as *prior candidates, not prior survivors*: same Scope
Gate, same K1–K4, same rubric, no score bonus, no automatic deep dive. The
matrix must be free to kill both.

## 8. Outputs

`research/PROGRAM-B-MATRIX.md`: full ranked matrix; per-survivor paragraph
(evidence quality, what would kill it); Upside Flag recorded per survivor
(secondary evidence only — never compensates for the Bootstrap Bar);
Founder-Fit Gate verdicts G1–G6 per survivor; verification log; coverage
map audit (which mechanisms were actually scanned). Review protocol 6b
applies: user ratifies or challenges kills with named evidence, approves
the deep-dive shortlist.
