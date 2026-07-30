# Audit — Anchor Application in the Program B Calibration Pass

**Date:** 2026-07-30. **Method:** two independent agent lenses, run after
`PROGRAM-B-MATRIX.md` was produced and before
`PROGRAM-B-CONCLUSION.md` was frozen. Neither lens was told the other's
question. Both were instructed not to rescue any candidate.

**Audit question.** Did the calibration judge apply the frozen
bootstrap-revenue anchors (`PROGRAM-B-PROTOCOL.md` §5) as written; and does
that anchor systematically penalise workflow-adjacent integrity products —
those sold as a module inside an already-budgeted workflow, where the
integrity increment has no separately observable price by construction?

---

## Lens A — anchor-literal reading

**Verdict: anchors were NOT applied as written.**

- The three-tier rule used at calibration (no comparable = 3; comparable
  named but price undisclosed = 4; Indonesian price cited = 5) appears
  nowhere in §5. The frozen anchors are 3/5/7/9 — no 4-band, and no cap
  tied to price disclosure.
- Anchor 7 verbatim: *"named segment; ACV evidenced by comparable
  Indonesian spend; ≤ ~500 customers; channels identified."* The word is
  **comparable**, not identical or incremental. The exact-module test the
  judge applied is imported from K4's "evidence quality attached to each
  term", not from §5.
- Internal inconsistency: the same MedTrack citation was credited at
  willingness-to-pay anchor 7 (`credential-holder-identity-binding.md`)
  and refused at revenue anchor 7.

**Score ladder for `credential-holder-identity-binding`** (the only
candidate with a cited Indonesian ACV anchor; other six dimensions held at
the judge's normalized values — severity 7, WTP 7, data 4, absorption 5,
competition 5, moat 5):

| Revenue score | Weighted total |
|---|---|
| 5 (as calibrated) | 5.55 → published as 5.6 |
| 6 (lens A's most defensible literal reading) | 5.75 |
| 7 (anchor-7 granted in full) | 5.95 |
| 9 (impossible upper bound) | 6.35 → 6.4 |

Lens A's reasoning for 6 rather than 7: the named segment condition is met
and a comparable Indonesian price is cited (MedTrack Rp250–350k/month ≈
$185–260/yr), but the candidate's bottom-up path uses a blended
$1,500–2,000/yr ACV, 6–11× the comparable — so the comparable does not
evidence the ACV actually used; the customer count (600–700) sits above the
anchor's "≤ ~500"; channels are thin. Above anchor 5, below anchor 7, using
the same interpolation the judge applied elsewhere.

**Conclusion:** the invented rule was not outcome-determinative. Bar is
7.0; the most generous defensible reading reaches 5.95, and the arithmetic
ceiling reaches 6.4.

---

## Lens B — workflow-adjacent class sweep

**Verdict: the penalty is NOT systematic. No class-wide blind spot.**

- 17 of 30 candidates classify as workflow-adjacent:
  credential-holder-identity-binding, bpr-insider-fraud-continuous-audit,
  koperasi-member-fund-integrity, jkn-claims-integrity,
  coretax-erp-tax-reconciliation, fictitious-tax-invoice-screening,
  halal-certificate-integrity, land-double-certificate-detection,
  permit-overlap-diligence, fidusia-collateral-integrity,
  beneficial-ownership-verification, ekyc-deepfake-injection-detection,
  synthetic-borrower-detection, mill-mass-balance-reconciliation,
  eudr-plot-origin-evidence, trade-document-fraud-detection,
  program-beneficiary-identity-resolution.
- **Mean raw revenue score is higher for workflow-adjacent candidates
  (4.29) than for standalone ones (3.96)** — host prices were scored as
  assets, not penalties. This is the finding that refutes the hypothesis.
  (Means computed over candidates carrying a raw revenue score; one
  candidate, `catch-certificate-integrity`, was killed on K1/K2 before
  scoring and carries a 0.0 placeholder.)
- 8 candidates cite an Indonesian price for an adjacent product, a state
  registry fee, or a manual substitute service — MedTrack Rp250–350k/month;
  USSI Rp500k–2.5M/month (×2); BPJPH Rp2–5M/audit; KJPP valuation fees
  (×2); AHU PNBP extract fees (×2) — yet were revenue-capped for lacking an
  integrity-increment ACV.
- Where the integrity increment **is** separately observable, it is priced
  rather than absent: SI-INSAF Rp2.6M/BPR via Perbarindo; SAF-GEN
  Rp6.9–9.9M/month (list price, no disclosed customer); PPAT title check
  Rp50k. Where the state supplies it, it is free: VIBI, Sentuh Tanahku
  "Berbagi Akses", automatic PKKPR, Rapindo.

**Bounded defect identified.** The matrix's normalization rule 1 asserts
"Only one candidate … has a cited Indonesian price"; this is false against
at least eight candidate files. Only two of the resulting caps were
load-bearing. Forcing revenue to 9 across the cohort moves the maximum from
5.6 to **6.7** — `trade-document-fraud-detection`, normalized revenue 3,
gains more than the top-ranked candidate does. (Lens B originally reported
6.4 here, carrying over lens A's single-candidate ladder; corrected
2026-07-30 on re-verification.) **No candidate's verdict flips under any
correction.**

---

## Effect on the Program B result

Both lenses correct *in the candidates' favour*, and the verdict survives
both. The calibration defect is non-decisive: it changed intermediate
scores, not the decision. Consequences recorded in
`PROGRAM-B-CONCLUSION.md` §4.
