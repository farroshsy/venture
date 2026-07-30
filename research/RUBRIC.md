# Phase 1 Scoring Rubric — Pre-committed

Date committed: 2026-07-28, before any industry was scored. Changes after scoring
begins require a new rubric version and a full re-score of everything.

## Weights

| Dimension | Weight |
|---|---|
| Problem severity | 20% |
| Market size | 20% |
| Willingness to pay | 15% |
| Blockchain necessity | 15% |
| Urgency | 10% |
| Competition (higher = more open) | 10% |
| Technical defensibility | 10% |

Weighted score = 0.20·severity + 0.20·market + 0.15·wtp + 0.15·chain +
0.10·urgency + 0.10·competition + 0.10·moat, rounded to one decimal.

**Elimination rule:** below 7.0 after normalization, or any kill-test failure,
regardless of score.

## Anchors (1–10; score to the nearest defined anchor)

**Severity** — 3: annoyance with a cheap workaround. 5: measurable cost, under ~1% of
revenue. 7: recurring losses or regulatory exposure; dedicated staff exist to manage it.
9: documented large-scale fraud/scandal, legal or existential risk.

**Market** — 3: under $50M Indonesia TAM. 5: $50–250M. 7: $250M–1B. 9: over $1B with a
verified basis (no unverified TAM slides).

**Willingness to pay** — 3: the beneficiary cannot pay (consumers, smallholders).
5: budget exists but procurement is slow. 7: a clear budget owner already pays for an
inferior alternative. 9: mandated compliance spend or direct, quantified loss avoidance.

**Blockchain necessity** — 3: single-organization problem; a database is fine.
5: multi-organization but an accepted trusted intermediary exists. 7: multi-organization,
no accepted neutral party, tamper-evidence materially changes behavior. 9: adversarial
parties plus external verifiers (regulator, foreign buyer, court) who need proof
independent of any custodian — the centralized custodian is itself the failure.

**Urgency** — 3: nice to have. 5: growing pressure. 7: regulation or hard deadline inside
24 months. 9: deadline already in force or a fresh scandal forcing action now.

**Competition** (higher = more open) — 3: funded incumbents with traction. 5: several
attempts, none dominant. 7: only pilots or abandoned efforts. 9: verified whitespace
after an adversarial search.

**Defensibility** — 3: a copyable feature. 5: integration lock-in. 7: cross-organization
network effects or a data moat. 9: standard/protocol position with real switching costs.

## Kill test (any failure eliminates, regardless of score)

1. If blockchain disappeared tomorrow, would the customer still have this problem?
   (must be YES)
2. Would PostgreSQL under a single trusted operator solve it just as well? (must be NO)
3. Can an incumbent ERP/SaaS vendor ship this as a feature in six months? (must be NO)
4. Is enough economic value created to support a standalone company? (must be YES)

## Process (pre-registered)

1. Ten independent research agents, three industries each: full profile file per
   industry plus raw scores against these anchors.
2. Adversarial refutation pass for every candidate scoring ≥6.5 raw that passes the
   kill test: a separate agent tasked to disprove the gap claim.
3. A single calibration judge normalizes all raw scores against these anchors.
   A refuted gap claim caps the competition score at 4.
4. Ranked matrix of all 30; below 7.0 eliminated; the deep-dive shortlist contains only
   genuine survivors — it is not padded to five.

## Evidence rules

- No number without a named source and year; otherwise it is marked "(unverified)".
- Several secondary sources repeating one figure count as one source, not corroboration.
- Competitive state is checked as of July 2026; a "nobody has built this" claim requires
  a documented search, not an instinct.
