# Bar Sensitivity Note — Correction to Program B

**Dated 2026-07-30. Appendix to `research/PROGRAM-B-CONCLUSION.md` (frozen).
It corrects a methodological defect in that document's *reasoning*. It does
not reopen Program A or Program B, and amends no score or kill-test verdict.**

---

## 1. The defect, stated plainly

Program B's hard gate was a **≥$1M ARR Bootstrap Bar**. That number was never
derived from anything.

Its entire provenance is one line in the decision log (`CONTEXT.md`,
2026-07-29): *"Program B Q1 = dual-track (option C, user-refined): hard gate
is the Bootstrap Bar (≥$1M ARR bottom-up under G1–G6)."* It was proposed as
part of a menu option during protocol design, ratified the same day, and
carried verbatim into `PROGRAM-B-PROTOCOL.md` §4 (K4). It is **not** inherited
from Program A: `RUBRIC.md` (2026-07-28) contains no revenue bar at all — its
market anchor is TAM bands. No sentence in either the rubric or the protocol
defends $1M against the founder's actual economics: a solo developer in
Surabaya, no employees, a salaried job alongside, near-100% gross margin, and
0% tax on the first Rp500M of turnover. $1M ARR is a Silicon Valley
seed-stage convention. It was imported, not reasoned to.

Why it matters is mechanical. The bar is not confined to K4: the **revenue
anchors themselves silently encode it** — *"3: needs thousands of customers"*,
*"7: ≤ ~500 customers"*, *"9: ≤ ~200 customers"*. Thousands of customers to
reach *what*? $1M. Those bands are 20% of the composite, so the undefended
number propagated into all thirty candidates, including the nine that passed
every kill test and died on the 7.0 bar.

## 2. Income anchors — what the bar should have been derived from

| Anchor | Annual USD | Source |
|---|---|---|
| Fresh informatics grad, Surabaya | $3,800–5,800 | ITS Tracer Study 2024 (n=4,110, FTEIC avg Rp8.05M/mo); floor UMK Surabaya 2026 Rp5,288,796 (Kepgub Jatim 100.3.3.1/937/013/2025) |
| Fresh grad SE, Jakarta | $5,800–8,700 | Kompas.com 2026 (verified); Jobstreet ID 2026; PERSOL Guide 2026 (gated) |
| Mid/senior SE, Indonesian employer | $9,000–25,000; modal ~$12–18k | Kompas.com 2026 (verified); Jobstreet ID 2026 |
| Indonesian engineer, remote for US/SG | $24,000–60,000 typical | Arc.dev 2026 (self-reported, upward-biased); Plane.com 2026 median $48,332 |
| Living cost, single professional, Surabaya | $4,000–8,000 | BPS Susenas 2025 via Databoks; Numbeo Jul 2026; Wise 2026 |
| UMKM final-tax structure | 0% to $27,600 turnover; 0.5% to $265,000 | PP 20/2026 (eff. 22 Apr 2026), DJP (verified) |

FX Rp18,087/USD (Trading Economics, 30 Jul 2026). Solo and unstaffed, ~85–90%
of revenue survives processing and hosting, and tax is zero to $27.6k — so
revenue ≈ take-home. Three honestly-derived bars follow:

- **(a) Pocket money — $6,000/yr.** Covers full Surabaya living cost for a
  single professional. Below this the venture is a hobby.
- **(b) Equals a good local salary — $15,000/yr.** Mid/senior Jakarta pay;
  the level at which quitting employment is arguable.
- **(c) Clearly beats employment — $60,000/yr.** Top of the remote-for-foreign
  band plus a risk premium. Above this the choice is not close.

**The $1M bar is 17× (c) and 167× (a).**

## 3. Achievable ARR — the nine all-kills-passed candidates

Desk arithmetic on the existing corpus: reachable count × defensible ACV ×
a judged 3-year share. Low and high are the ends of that band.

| Candidate | Market | Reachable | Defensible ACV | Achievable ARR | Ev. | Ceiling reason |
|---|---|---|---|---|---|---|
| `beneficial-ownership-verification` | UK/EU obliged professionals | 50,000+ EU notaries (CNUE) | £588–1,788/yr (Certivus, live) | **$37,500–681,000** | cited | 22-language/22-supervisor fragmentation; crowded UK |
| `ekyc-deepfake-injection-detection` | Global self-serve fintech | 500–1,000 self-serve fintechs | $2,625–6,000 (Oz, Capterra 2026) | **$39,375–300,000** | cited | Bundled IDV feature; Didit free tier |
| `synthetic-borrower-detection` | Indonesia, 94 pindar + ~180 multifinance | ~150 mid/small | $5,000–7,200 (SAF-GEN list) | **$60,000–162,000** | partly | New-logo rate; every buyer runs vendor security review |
| `fictitious-tax-invoice-screening` | Indonesia PKP finance teams | 150–250 | $330–4,000 (only cited: MXN 199/499) | **$4,950–200,000** | partly | ~250 buyers; Coretax checks free |
| `mill-mass-balance-reconciliation` | Indonesian EU-exposed mills | ~120–200 | $3,000–7,000 (EU comparables) | **$18,000–140,000** | inferred | Per-site weighbridge install capacity |
| `indonesia-kyb-verification` | Indonesia-facing KYB, non-bank EDD tail | 60–150 | $1,800–3,600 (Sumsub self-serve) | **$10,800–108,000** | partly | Budget sits behind SOC 2; tail buys $2.00/check |
| `collateral-existence-monitoring` | Indonesian BPD/BPR desks | 30–60 (inferred) | $3,000–8,000 (no observed price) | **$4,500–72,000** | inferred | **G2** — needs sensors/site visits |
| `cross-registry-credential-platform` | 1,862 SATUSEHAT-active hospitals | 1,862 | $185–400 (MedTrack, verified) | **$6,900–44,700** | cited | Five source registries are free |
| `credential-holder-identity-binding` | ~300–700 ID facilities buying credentialing SW | ~700 | $250–600 (MedTrack + inferred premium) | **$3,750–33,600** | partly | ACV, not buyer count — MedTrack's whole book is $3–4k |

## 4. Sensitivity verdict

Highest bar cleared on the **low** (conservative) end of each band, with the
high end in brackets:

| Bar | Clears on low case | Clears only on high case | Cannot clear at all |
|---|---|---|---|
| **(a) $6,000** | ekyc, synthetic-borrower, BO-verification, mill, kyb, cross-registry (6) | credential-holder, collateral, fictitious-tax (3) | none |
| **(b) $15,000** | ekyc, synthetic-borrower, BO-verification, mill (4) | the other five (5) | none |
| **(c) $60,000** | synthetic-borrower (at exactly $60k) (1) | ekyc, BO-verification, mill, fictitious-tax, kyb, collateral (6) | credential-holder ($33.6k), cross-registry ($44.7k) |
| **$1M (as frozen)** | none | none | **all nine** |

**Plainly: yes. At an honestly-derived bar, candidates Program B treated as
economically dead are not dead.** All nine clear the pocket-money bar
somewhere in their band; four clear a good local salary on their *conservative*
end; seven can reach the beats-employment bar. At $1M, none reach even the
optimistic ceiling — the best is `beneficial-ownership-verification` at $681k,
68% of a bar nobody derived.

The bar was outcome-determinative for the *description* of the result. Program
B reported an economic failure. What it found is that no candidate supports a
venture-scale business — which nobody in this situation needed.

## 5. What this does and does not change

**Does not reopen Programs A or B.** Of the 21 candidates outside the nine,
**15 failed K1 (data access), K2 (oracle bound), or K3 (documented
absorption)**. Those die at any revenue bar and are untouched here.

One correction to the framing of that scope: it is 15, not 21. **Six
candidates — `trade-document-fraud-detection`, `receivables-uniqueness`,
`bpr-insider-fraud-continuous-audit`, `ore-provenance-verification`,
`gold-bar-provenance-registry`, `reserve-backing-attestation` — passed K1, K2
and K3 and failed *only* K4**, the very bar under correction — eliminated by an
undefended number. On their recorded kill reasons, five of six die
independently on sales motion (G6: RFP/security review, consultative sale) or
G2 physical assay, and one on incumbents owning the channel — but that is a
judgement made here, not a kill test rerun. They are not cleared; they are no
longer cleanly eliminated.

**Does the frozen conclusion survive?** Only in the narrower form. "No
qualifying opportunity was found" survives strictly as **"none at a $1M bar."**
The composite 7.0 verdict does survive independently — §4.3 of the frozen memo
already showed that forcing revenue to 9 across the whole cohort tops out at
6.7. So the decision holds while its stated reason does not: the nine died on
data position, competition and evidence quality, not on economics that a
re-derived bar can rescue.

## 6. Honest limits

Desk arithmetic on existing corpus evidence. No interviews, no new sourcing.
Every share assumption (3%–20% over three years) is judgement, not observation;
three of nine ACVs have no observed price in any market. The high ends are
arithmetic ceilings, not forecasts.

Most importantly: **the founder constraint is untouched by any revenue bar.**
`GEOGRAPHY-NOTE.md` §3 found G6 — sales motion — binding in seven of nine
cases, and lowering the revenue target does not convert an enterprise sale
into a self-serve one. `synthetic-borrower-detection` clears $60,000 on its
conservative end and still requires every OJK-licensed buyer to run a vendor
security review. `collateral-existence-monitoring` clears $60,000 on its high
end and is still IoT field work excluded by G2. A candidate that clears a
lower bar but still needs enterprise selling has not become buildable.

Exactly one candidate clears the top bar *and* has a demonstrated self-serve
motion: `beneficial-ownership-verification` ($37.5k–$681k, cited live pricing,
no sales contact). This note reached it by revenue arithmetic; the geography
note reached the same one by sales motion, independently. That convergence is
the only positive signal here, and it is a reason to open a new versioned
program — not a survivor, not a build decision.
