# Program B — Conclusion Memo

**Status: FROZEN as of 2026-07-30.** Closes Program B. Amendments require a
new, versioned document. Program A's conclusion
(`research/PROGRAM-A-CONCLUSION.md`, frozen) is not reopened by anything
here.

---

## 1. The question

> What are the largest Indonesian trust and integrity failures for which
> software materially changes the economics, architecture unconstrained?

Program B was opened after Program A eliminated 56 blockchain-shaped
candidates, to test whether the underlying integrity problems supported a
business once the architectural constraint was removed. Its hard gate was
deliberately *lower* than A's: not venture scale, but the **Bootstrap Bar**
— a credible bottom-up path to ≥$1M ARR buildable and operable by a solo
founder under gate G1–G6, established as customers × realistic ACV ×
reachable count, never TAM × penetration.

## 2. The answer

**No qualifying opportunity was found under this protocol.** Thirty
candidates were sourced, scoped, researched, and kill-tested; twenty-nine
were scored and calibrated, and one (`catch-certificate-integrity`) was
killed on K1/K2 before scoring. None reached the 7.0 bar. Highest normalized score 5.6; highest
raw score 6.6, already below the bar before calibration. The deep-dive
shortlist is empty and was not padded.

**HB was not supported under the frozen protocol and the evidence available
as of July 2026.** This is a statement about what this search found under
these criteria — not a claim that no such business exists.

## 3. Method

Protocol committed 2026-07-29 (`research/PROGRAM-B-PROTOCOL.md`, frozen at
sha256 `e2951a71…a4c6`) before any candidate was scored: the Scope Test as
a pre-research definition gate; four kill tests (K1 data access, K2 oracle
bound, K3 12-month absorption *with evidence required*, K4 Bootstrap Bar);
a seven-dimension rubric with fixed anchors; a 7.0 elimination bar;
adversarial memo triggers at raw ≥6.0, competition ≥7, or absorption ≥7;
and the evidence rules inherited from Program A. Candidates were sourced in
two stages — mining Program A's 56-profile corpus, then gap-filling against
a 14-mechanism coverage map so that "B is broader than A" could be audited
rather than asserted. Prior candidates (receivables uniqueness, JKN claims)
entered with no privilege; both were eliminated.

The bar was never moved. Sourcing, kill tests, scoring, and the
zero-survivor rule were all fixed before results were seen.

## 4. Errata

Two distinct defects were found by a post-hoc adversarial audit of the
calibration pass (two independent lenses, 2026-07-30, archived at
`research/verify/audit-anchor-application.md`). Both are recorded because
the audit is part of the result.

### 4.1 Calibration defect (methodological)

The calibration judge introduced a scoring rule **not present in the frozen
protocol**: *no Indonesian comparable = 3; comparable named but price
undisclosed = 4; Indonesian price actually cited = 5*. The frozen anchors
are 3/5/7/9 with no 4-band and no cap tied to price disclosure. The judge
also read anchor 7's "ACV evidenced by **comparable** Indonesian spend" as
requiring evidence for the *incremental integrity module specifically* — a
stricter test imported from K4's evidence-quality clause. (A third charge
was examined and dropped: anchor 7's conditions are conjunctive, so the
"≤ ~500 customers" clause is individually necessary and the judge was right
to enforce it; only the approximation marker `~` gives any tolerance.) One
internal inconsistency followed: the same
MedTrack citation was credited at willingness-to-pay anchor 7 and refused
at revenue anchor 7.

Correction of record: scoring may reference only the frozen anchors. An
unstated rule introduced at calibration time is not part of the experiment.

### 4.2 Empirical correction

The matrix states, at §(d)5, "Across 30 candidates, exactly one produced a
cited Indonesian ACV comparable," and at §(a)1, "Only one candidate … has a
cited Indonesian price." **Both are false on the matrix's own record.** At
least eight candidate files carry cited Indonesian prices — for an adjacent
product, a state registry fee, or a manual substitute service — including
MedTrack Rp250–350k/month/hospital; USSI Rp500k–2.5M/month (×2); BPJPH
Rp2–5M/product audit; KJPP valuation fees (×2); AHU PNBP extract fees (×2).
The matrix contradicts itself directly: its own §(d)3 cites SAF-GEN's
published price.

The corrected finding is stated in §6 and is stronger than the claim it
replaces: it argues from observed prices rather than from absence.

### 4.3 Robustness — the correction cannot change the verdict

Every correction above runs *in the candidates' favour*, and the conclusion
survives all of them. The ladder below is computed for
`credential-holder-identity-binding` — one of two candidates tied at the
5.6 top score, and the only one carrying a cited Indonesian ACV anchor —
holding its other six dimensions at the judge's normalized values and
varying only revenue (weight 0.20); full derivation in the archived audit:

| Revenue score for the top candidate | Weighted total |
|---|---|
| 5 — as calibrated | 5.6 |
| 6 — most defensible literal reading of the frozen anchors | 5.75 |
| 7 — anchor 7 granted in full | 5.95 |
| **9 — arithmetic ceiling, not defensible** | **6.4** |
| Bar | **7.0** |

Forcing revenue to 9 across the whole cohort moves the maximum higher —
to 6.7 (`trade-document-fraud-detection`, whose normalized revenue was 3,
so it gains more) — and still not to the bar. Only two of the disputed
caps were load-bearing at all, and no
candidate's kill-test verdict changes under any reading. The calibration
defect is therefore **non-decisive**: it affected intermediate scores, not
the decision.

This sequence — freeze protocol → produce matrix → audit matrix → find a
calibration defect → correct it in the candidates' favour → verdict
unchanged — is the strongest evidence in the document that the result is
robust rather than an artifact of scoring choices.

### 4.4 Audit finding that did *not* fire

The audit also tested whether the bootstrap-revenue anchor systematically
penalises **workflow-adjacent** integrity products — those sold as a module
inside an already-budgeted workflow, where the integrity increment has no
separately observable price by construction. If true, the empty result
would have been partly rubric design. **It is not true.** Of 30 candidates,
17 are workflow-adjacent, and their mean raw revenue score is *higher* than
the standalone candidates' (4.29 vs 3.96, computed over the 29 candidates
carrying a raw revenue score) — host-workflow prices were scored as assets,
not penalties. No class-wide blind spot exists.

## 5. Failure modes — not one story

Program A's headline was state absorption. Program B's failures are more
varied, and collapsing them into absorption alone would overstate the
evidence. Counting by kill test (non-exclusive; several candidates fail
more than one):

- **9 of 30 passed all four kill tests** and died on the 7.0 bar. Their
  binding constraints were evidence quality, thin reachable customer
  counts, commodity data positions, and incumbent density. Absorption is
  not wholly absent from this group — two carried scored-down residual
  absorption (`ekyc-deepfake-injection-detection` at distance 3;
  `synthetic-borrower-detection` downgraded 4→3 on POJK 8/2026) — and one,
  `collateral-existence-monitoring`, is excluded by gate G2 regardless as
  IoT/field-ops work.
- **13 of 30 failed K3 (absorption)** — 12 claimed by researchers, all on
  cited, dated evidence, none reversed as hypothetical on review, plus one
  *imposed* on `private-health-claims-validation`, whose researcher missed
  it. The matrix flags that imposed kill as one of the two calls most worth
  challenging on evidence quality, since it rests on sandbox and
  in-development modules and was imported from a sibling candidate's memo.
- **20 of 30 failed K4 (Bootstrap Bar)** — the most common single failure,
  usually on reachable customer count or ACV rather than on severity.
- **4 failed K1 (data access)** and **2 failed K2 (oracle bound)**.

The accurate summary: **state or state-mandated absorption is the dominant
failure mode among public-sector integrity opportunities, while
private-sector candidates more often failed on observable willingness to
pay, reachable customer counts, incumbent density, or an enterprise-sales
shape excluded by gate G6.**

## 6. The corrected market finding

Indonesian buyers **do** pay for integrity-related software. Across the
observed market, however, documented prices and reachable customer counts
remained below the level a bootstrap software business requires under this
protocol's evidence standard. Where an equivalent state service existed, it
frequently established an effective price ceiling by supplying the function
at no additional charge.

The clearest single datum: SI-INSAF sells BPR insider-fraud audit software
through the Perbarindo association at **Rp2.6M per BPR** (a 2023
training-plus-app bundle listing, periodicity not stated, distributed
through at least two Perbarindo DPD training programmes — DKI Jakarta, and
Jateng on 10 Dec 2024). Reaching $1M ARR
at that price would require roughly 6,300 BPR customers — at an unverified
~Rp16,500/USD — against a national population variously reported at
~1,100–1,345 BPR/BPRS (candidate file, 2025–26) and 1,518 BPR+BPRS (OJK via
the adversarial memo, May 2025), and consolidating. A second vendor, SAF-GEN, lists the same
function at Rp6.9–9.9M/month, though that price is unvalidated by any
disclosed customer and runs 14–20× a BPR's entire core banking system. So:
SI-INSAF shows the category is *purchased*; SAF-GEN shows only that it is
*priced*. Neither price × its reachable customer base clears the Bootstrap
Bar. Meanwhile the state's versions are free (VIBI, Sentuh Tanahku "Berbagi
Akses", automatic PKKPR), and the state-mandated, association-run one
(Rapindo, under POJK 47/2020) occupies its slot regardless of price.

In the segments this scan observed, price discovery is not absent. It is
present, and it is low against customer bases that are small.

## 7. Verification record

- **Ten memo triggers fired; six memos were executed and all six refuted**
  (the other four are the coverage defect below). Combined with Program A's
  two-for-two, **8 of 8 adversarial memos across both programs refuted the
  candidate they tested.** Within Program B, optimistic competition and
  absorption scoring did not survive contact with evidence in a single
  instance; Program A's two memos tested blockchain necessity and
  commercial whitespace rather than those dimensions.
- **Coverage audit:** all 14 protocol mechanisms were scanned; the three
  mechanisms Program A never covered, plus financial-record integrity
  (which A covered only outside detection software), received 8 of 30
  candidates. Three rows are thin at one candidate each. Only
  reference-data accuracy is genuinely untested — its single candidate
  scored 4.1 with three kill-test failures; physical-to-digital integrity's
  single candidate scored 5.6 and passed all four kills, so that row was
  tested, just narrowly.
- **Logged coverage defect:** four candidates crossed a memo trigger
  without a memo being run. All four failed K4 independently, so no
  unmemoed claim is load-bearing for any elimination — but the omission is
  recorded rather than smoothed over.
- **Founder-Fit Gate G1–G6 was never reached** (it applies only to rubric
  survivors ≥7.0). The channel-partner rule was unavailable, not merely
  unused: no file logs the named partner as already selling to any
  near-miss buyer type.

## 8. Boundary conditions

Desk research, no customer interviews. Indonesia-scoped, timestamped 30
July 2026. Thirty candidates from a two-stage sourcing process, not a
census. Every memo ran with its web-search budget exhausted, on news feeds
and direct fetches, which weakens *negative* competitor findings
specifically — one memo notes its decisive competitor surfaced on a single
query and would have been missed by a narrower scan, which raises rather
than lowers the estimated number of undiscovered Indonesian entrants.

Three further constraints bound the result in opposite directions. (i)
Research-stage scoring ran on a smaller model than the calibration pass
(logged in `CONTEXT.md`, 2026-07-30); the calibration pass corrected the
resulting drift, and §4.3 bounds how much any of it could matter. (ii) The
calibration applied a corpus-wide downward bias — matrix normalization rule
6, "Every '(unverified)' count or ACV was read at the bottom of its stated
range" — on exactly the terms that produced the empty result. (iii) The
pre-committed diversity cap of at most three candidates per mechanism row
bounds coverage independently of evidence: a mechanism containing four good
opportunities could contribute at most three.

## 9. What remains open

Recorded so they are not rediscovered as new work, and not pursued here:

1. **A budget-first search.** Every candidate in both programs was generated
   problem-first: find an integrity failure → find a buyer → prove a
   business. The inverse — find buyers already spending meaningful money →
   determine which part of that spend is an integrity problem — is a
   legitimately different search that would surface different companies. It
   is the natural response to §6, since it starts from observed prices
   rather than from failures.
2. **Candidates that failed on economics rather than absorption** are worth
   revisiting on a longer horizon: economics change, structural absorption
   rarely reverses. The nine all-kills-passed candidates are that set, with
   three carve-outs: `collateral-existence-monitoring` is excluded by G2 as
   IoT/field-ops work; `synthetic-borrower-detection` carries an unresolved
   G5 risk (whether POJK 29/2024's licensed Pemeringkat Kredit Alternatif
   perimeter captures a borrower-fraud scoring API); and both it and
   `ekyc-deepfake-injection-detection` carry residual scored-down
   absorption (§5), so "economics rather than absorption" holds for this
   set only in the sense that none of them failed K3.
3. **Reference-data accuracy** is genuinely untested at one weak candidate;
   two further rows are thin.
4. **Four residual gaps** the memos logged as real but not
   bootstrap-shaped, recorded so they are not rediscovered: hospital-side
   JKN appeal evidence; historical map-version provenance for permit
   litigation; lender-side portfolio collateral-title monitoring;
   shareholder-side BPR assurance reporting.

## 10. Decision rule

Program B is closed. It is not rerun under this protocol. A future search
in this territory is a new, versioned program with its own hypothesis and
rubric, referencing this memo — not an amendment to it.

The combined evidence base at close: **86 candidate slots across two
pre-registered programs, 8 of 8 adversarial memos refuting the optimistic
case, and no survivor under either fixed evidence standard.** The two
programs are not two independent samples — B's Stage 1 sourcing mined A's
56 profiles, and one hypothesis is nested in the other. What B adds is a
second, economic constraint that A never tested: B reproduces A's Class 1
pattern (the accepted anchor occupies the slot) while showing that removing
the architectural requirement does not by itself produce a business.

---

*Artifacts: `research/PROGRAM-B-PROTOCOL.md` (frozen),
`research/PROGRAM-B-MATRIX.md`, 30 candidate files in
`research/candidates/`, six adversarial memos in `research/verify/b-*.md`,
the calibration audit in `research/verify/audit-anchor-application.md`,
`research/PROGRAM-A-CONCLUSION.md` (frozen prior), decision log in
`CONTEXT.md`.*
