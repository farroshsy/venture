# Program B — Calibrated Matrix

**Date:** 2026-07-30. **Protocol:** `research/PROGRAM-B-PROTOCOL.md`
(FROZEN, sha256 e2951a71…a4c6). **Rubric bar:** 7.0, unmoved.
**Result: 0 of 30 survive. Deep-dive shortlist is empty.**

---

## (a) Method & protocol reference

Thirty candidates were sourced two-stage (A-corpus mining + coverage-map
gap-fill), scoped, researched, and self-scored by research agents. This
document is the calibration pass required by §3 of the protocol. It does
not re-litigate the rubric, the weights, or the 7.0 bar.

Weighted = 0.20·severity + 0.20·revenue + 0.15·wtp + 0.15·data +
0.10·absorption + 0.10·competition + 0.10·moat.

**Normalizations applied** (all traceable to §5–§6 anchors):

1. **Bootstrap revenue quality.** Anchor 3 is explicit: *"needs thousands
   of customers, or ACV has no Indonesian pricing comparable."* Agents
   routinely scored 5 while their own text said no Indonesian comparable
   was found. Rule applied uniformly: **no Indonesian comparable at all →
   3**; **Indonesian comparable named but price undisclosed/unreached →
   4**; **Indonesian price actually cited → 5**. Only one candidate
   (`credential-holder-identity-binding`, MedTrack Rp250–350k/month/hospital,
   intraina.id 2026-07) has a cited Indonesian price. No TAM×penetration
   path was used by any agent; no revenue cap on that ground was needed.
2. **Data position.** Anchor 3 is *"the same feed is available to any
   competitor."* Candidates resting on public registries (AHU/SABH,
   Coretax, KKI/SIVIL/SIKI, Dukcapil-resold face-match, Geoportal KSP)
   are capped at **4**.
3. **Competition ≥7 or absorption ≥7 without a memo.** §6 makes both a
   memo trigger; anchor 7 for competition literally requires
   "memo-verified." Four candidates carried an unmemoed 7 —
   `receivables-uniqueness` (abs 7), `gold-bar-provenance-registry`
   (comp 7), `ore-provenance-verification` (comp 7),
   `trade-document-fraud-detection` (comp 7 **and** abs 7). All dropped
   to **5**, the highest band that does not assert a verified negative.
   Unmemoed 6s on whitespace claims (`credential-holder-identity-binding`)
   dropped to 5 for the same reason.
4. **Refuted claims cap the relevant dimension at 4** (§6). Applied to all
   six executed memos; where a memo produced *affirmative* contrary
   evidence rather than mere absence, the dimension falls below 4 (e.g.
   `land-double-certificate-detection` absorption → 2:
   ATR/BPN shipped the exact buyer-facing function 24 Jun 2026).
5. **Data-position / Compounding-moat disjointness.** Three candidates
   scored the *same* cross-customer aggregation on both axes —
   `ekyc-deepfake-injection-detection` (moat 6), `synthetic-borrower-detection`
   (moat 6), `receivables-uniqueness` (moat 7). Moat re-scored on the
   customer side only (integration lock-in = 5; single-tenant switchable = 3).
6. **Unverified sizing → conservative band.** Every "(unverified)" count
   or ACV was read at the bottom of its stated range.

**Verification triggers.** Six candidates crossed a §6 trigger and six
memos were executed: `jkn-claims-integrity`, `permit-overlap-diligence`,
`financial-statement-fraud-detection`, `land-double-certificate-detection`,
`bpr-insider-fraud-continuous-audit`, `halal-certificate-integrity`.
**All six returned REFUTED.** Four candidates crossed the
competition/absorption trigger without a memo being run; per normalization
(3) their claims were not credited. This is a real coverage defect in the
scoring round, logged in §(f).

---

## (b) Ranked matrix

Score = normalized weighted. K-verdicts: P = pass, **F** = fail.
Gate column: `n/a` = the Founder-Fit Gate is only reached by rubric
survivors ≥7.0, and there are none (§(d)). Advisory gate reads for the
top band are in §(c).

| # | Candidate | Mechanism | Score | K1 | K2 | K3 | K4 | Gate | One-line kill reason |
|---|---|---|---|---|---|---|---|---|---|
| 1 | credential-holder-identity-binding | identity binding | **5.6** | P | P | P | P | n/a | Survives all four kills; dies on the 7.0 bar — incremental ACV and 600–700-hospital count both inferred, data layer is a resold Dukcapil commodity. |
| 2 | collateral-existence-monitoring | physical-to-digital | **5.6** | P | P | P | P | n/a | Below bar; and the product is IoT/computer-vision field ops — a hard G2 exclusion even if it had scored. |
| 3 | private-health-claims-validation | claims validation | **5.5** | P | P | **F** | P | n/a | **K3 imposed:** SATUSEHAT `interoperability/klaim` (private/non-BPJS insurance module, v1.3, 6 Jan 2026) ships a codified validation-rule dictionary — documented in `verify/b-jkn-claims-integrity.md` §1, which names this candidate. |
| 4 | trade-document-fraud-detection | fraud/anomaly | **5.5** | P | P | P | **F** | n/a | ~20–40 banks with real LC desks, $50–100k ACV reachable only via RFP/security review — enterprise sale, G6 fail by construction. |
| 5 | ekyc-deepfake-injection-detection | identity binding | **5.4** | P | P | P | P | n/a | Below bar; iProov (CEN 18099, Nov 2025) and Paravision (PAD L3, Aug 2025) are already in the exact function, absorption distance 3. |
| 6 | synthetic-borrower-detection | entity resolution | **5.4** | P | P | P | P | n/a | Below bar; VIDA/Trusting Social/PrivyID are funded incumbents in the same buyer set (competition 3), and POJK 8/2026 extends the state's cross-lender hub. |
| 7 | receivables-uniqueness | uniqueness | **5.4** | P | P | P | **F** | n/a | Two-sided cold start — needs competing lenders to pool financed-invoice data with no OJK/AFPI mandate; bank sale is enterprise security review. |
| 8 | bpr-insider-fraud-continuous-audit | continuous audit | **5.4** | P | P | P | **F** | n/a | **REFUTED.** SAF-GEN (saf-gen.id, Rp6.9–9.9jt/month) ships the exact function; SI-INSAF has owned the Perbarindo channel since 2023 at Rp2.6M/BPR. 300–500 customers exceeds the addressable subset. |
| 9 | mill-mass-balance-reconciliation | reconciliation | **5.3** | P | P | P | P | n/a | Below bar; no verified mill count, no mill-level ACV comparable (farmer-side mapping fees are an input, not a price). |
| 10 | cross-registry-credential-platform | credential verification | **5.2** | P | P | P | P | n/a | Below bar; thin wrapper over five free public registries, ACV unobserved, bulk access is CAPTCHA/ToS-exposed. |
| 11 | fictitious-tax-invoice-screening | fraud/anomaly | **5.2** | P | P | P | P | n/a | Below bar; Coretax/AHU/OSS inputs are same-feed commodity, ACV inferred by analogy to unpriced Mekari/OnlinePajak tiers. |
| 12 | indonesia-kyb-verification | credential verification | **5.1** | P | P | P | P | n/a | Below bar; AsiaVerify/Moody's/LSEG/Cekindo/Proximal all hold Indonesia traction (competition 3) and severity is the lowest in the top band. |
| 13 | koperasi-member-fund-integrity | continuous audit | **4.9** | **F** | P | P | **F** | n/a | Buyer is the perpetrator (Indosurya Rp16T) or an unfunded state actor (OJK covers 21 of ~130k coops); members lack record access. |
| 14 | ore-provenance-verification | provenance | **4.9** | P | P | P | **F** | n/a | EU "stop-the-clock" (18 Jul 2025) paused battery-passport due-diligence timelines; buyer universe is a few dozen auditors, consultative sale. |
| 15 | financial-statement-fraud-detection | financial-record | **4.8** | P | P | **F** | **F** | n/a | **REFUTED.** POJK 8/2026 (7 Jul 2026) mandates daily transaction-level reporting into Pusdafil/FDC; PKA licensing (POJK 29/2024) makes the activity licensed; pindar count down to 94. |
| 16 | coretax-erp-tax-reconciliation | continuous audit | **4.6** | P | P | **F** | **F** | n/a | Mekari Klikpajak and Pajakku SIP ship Coretax reconciliation live in 2026; high PJAP switching cost. |
| 17 | beneficial-ownership-verification | compliance verification | **4.6** | P | P | P | P | n/a | Below bar; AHU data is public-commodity, no Indonesian BO-compliance price exists, needs 400–650 notary customers. |
| 18 | eudr-plot-origin-evidence | compliance verification | **4.4** | P | P | **F** | **F** | n/a | Koltiva ships a named "Data Verification" EUDR product (Feb 2026) across 19,000+ business relationships; National Dashboard Indonesia reinforces via state channel. |
| 19 | ppjb-uniqueness-registry | uniqueness | **4.4** | **F** | P | **F** | **F** | n/a | Needs developer/notary disclosure (K1); BENAR-PKP live and mediating cases Jul 2026 plus SIKUMBANG/SiKasep (K3). |
| 20 | jkn-claims-integrity | claims validation | **4.4** | P | P | **F** | **F** | n/a | **REFUTED.** SATUSEHAT `klaim-bpjs` + `PurificationDecision`, Dokumen Klaim Elektronik pilot (17 Jul 2026), BPJS SmartClaim (3 Feb 2026) and free VIBI; PMK 6/2026 tariff ceilings kill ACV. |
| 21 | program-beneficiary-identity-resolution | entity resolution | **4.3** | P | P | **F** | **F** | n/a | DTSEN v3 (ready 8 Jul 2026) has Dukcapil continuous identity-matching built in as a funded function, absorbing the flagship DTKS slice. |
| 22 | gold-bar-provenance-registry | provenance | **4.2** | P | P | P | **F** | n/a | Pegadaian's free in-house appraisal crowds out the dominant buyer; physical assay/lab model, no ACV comparable. |
| 23 | land-double-certificate-detection | uniqueness | **4.2** | P | **F** | **F** | **F** | n/a | **REFUTED.** ATR/BPN Sentuh Tanahku "Berbagi Akses" (24 Jun 2026) gives buyers a free consent-based pre-purchase check; incumbent price is Rp50k via PPAT; residual duplicates are 92.2% paper and not record-inferable. |
| 24 | fidusia-collateral-integrity | reconciliation | **4.1** | P | P | **F** | **F** | n/a | Rapindo (APPI, POJK 47/2020-mandated) already runs double-pledge detection over 32.875M assets; OJK–AHU reconciliation PKS signed 16 Jul 2025. |
| 25 | reserve-backing-attestation | financial-record | **4.1** | P | P | P | **F** | n/a | 40–60 institutions total, no ACV comparable; Indodax and Tokocrypto already self-publish proof-of-reserves. |
| 26 | vehicle-registry-canonical-record | reference-data | **4.1** | **F** | P | **F** | **F** | n/a | Truth requires the disagreeing agencies' own cooperation; Korlantas ERI has been the mandated function since 2017, reaffirmed at Rakornas Samsat 14 Jul 2026. |
| 27 | halal-certificate-integrity | claims validation | **3.9** | P | P | **F** | **F** | n/a | **REFUTED.** Standing Pengawasan JPH Terpadu, UPT BPJPH rollout, Barantin MoU, BPJPH–Korea build (Jul 2026); certificates are lifetime under UU 6/2023, so no renewal trigger exists. |
| 28 | permit-overlap-diligence | inter-org disagreement | **3.9** | P | P | **F** | **F** | n/a | **REFUTED.** OSS issues automatic PKKPR free per-polygon in minutes (570 RDTR integrated, 13 May 2026); Stranas PK 2025–26 Action 1 is literally this function; the candidate's own kill condition (open Geoportal) fired via Perpres 28/2023. |
| 29 | seafarer-registry-integrity | credential verification | **3.7** | P | P | **F** | **F** | n/a | IMO MSC.540/541 mandates signed digital STCW certificates by 2026; Kemenhub already ships QR+TTE e-certs; verification is free by treaty. |
| 30 | catch-certificate-integrity | compliance verification | **0.0** | **F** | **F** | P | **F** | n/a | Small-vessel catch truth is controlled by the captain with no VMS/observer signal reaching that tier; Aruna and FishLog both cut 40–50%+ staff. |

**Rubric survivors ≥7.0: none. Eliminated: 30 of 30.**
Highest normalized score: **5.6** — 1.4 points below the bar.
Highest *raw* (pre-calibration) score was 6.6, already below the bar, so
the empty result is not a calibration artifact.

> **Errata (2026-07-30).** A post-hoc audit
> (`research/verify/audit-anchor-application.md`) found that normalization
> rule 1 above introduced a three-tier scoring rule absent from the frozen
> protocol, and that its claim "Only one candidate … has a cited Indonesian
> price" (repeated at §(d)5) is false — at least eight candidate files
> carry cited Indonesian prices. Corrections run in the candidates' favour
> and change no verdict: the arithmetic ceiling with every revenue score
> forced to 9 is 6.7, still below the 7.0 bar. See
> `research/PROGRAM-B-CONCLUSION.md` §4 for the full errata.

---

## (c) Per-survivor paragraphs

**There are no survivors.** No candidate reached 7.0, so this section is
formally empty. What follows is the near-miss band, recorded so the user
can challenge specific calls under review protocol 6b. Gate reads here are
**advisory and non-binding** — the Founder-Fit Gate is not reached.

**credential-holder-identity-binding — 5.6, K1–K4 all pass.** Bottom-up
path: 600–700 hospitals/groups × blended $1,500–2,000/yr ≈ $1.0–1.4M ARR.
This is the only candidate in the corpus with a **cited Indonesian ACV
anchor** — MedTrack (intraina.id, 2026-07) charges Rp250,000–350,000/month
per hospital for STR/SIP credentialing workflow, with 15+ hospital
customers, proving hospitals already budget for this category. That is the
strongest revenue evidence in Program B, and it still only supports a 5:
the *incremental* price for a biometric binding module is inferred, and
600–700 customers exceeds the anchor-7 ceiling of ~500 (it is ~20% of
~3,270 hospitals). Data position is capped at 4 — the Dukcapil-backed
face-match is resold by VIDA, Privy and Verihubs to anyone. **Upside
flag** (secondary only): a verified-once biometric credential becomes a
portable cross-hospital passport, extensible to construction SKK and
PERADI; unverified this pass, and it cannot compensate. **What would kill
it:** MedTrack or SINNAKES bolting a face-match API onto the credentialing
workflow they already own (cheap, no roadmap found as of 2026-07);
SATUSEHAT SDMK exposing a verified-NIK+photo field to institutional API
consumers. *Advisory gate:* G2/G3/G4 pass; G5 passes only because
Dukcapil access is resold by licensed PSrEs; **G6 is the doubt** —
600–700 hospital procurement relationships is not a self-serve motion.

**collateral-existence-monitoring — 5.6, K1–K4 all pass.** 20–60 BPD/BPR
customers × $15,000–50,000/yr. Severity is genuinely strong (six
independently prosecuted fictitious-collateral cases in ~12 months,
Rp569.4B at Bank Jatim alone), and K1 is clean — banks hold contractual
inspection rights via loan and fidusia agreements. But no Indonesian
CMA/Sucofindo price was reached and the reachable count is unverified, so
both ARR terms are inference. **Upside flag:** a cross-bank
fictitious-credit pattern dataset, credit-bureau-adjacent; secondary only.
**What would kill it:** Sucofindo/SGS/BGR shipping continuous IoT
monitoring on a funded timeline; OJK bundling collateral-reporting
tightening with a mandated Rapindo-style platform. *Advisory gate:* **G2
fails hard** — CONTEXT.md excludes hardware/IoT/field ops by name, and
this candidate is Program A's inventory-finance axis revived explicitly as
"an IoT/computer-vision collateral-monitoring service." G6 also fails
(per-warehouse installs, bank enterprise sale).

**ekyc-deepfake-injection-detection — 5.4** and
**synthetic-borrower-detection — 5.4** are the two candidates whose *shape*
best fits G1–G6 (API-delivered, single-sided, self-serve beachhead in
P2P/multifinance). Both fail on the same two axes: no Indonesian ACV
comparable, and funded incumbents already in the buyer set — iProov and
Paravision certified injection defenses in Aug–Nov 2025; VIDA ID
FraudShield, Trusting Social and PrivyID sell fraud/identity into the
exact lenders. Note a *newly surfaced* G5 risk for synthetic-borrower:
`verify/b-financial-statement-fraud-detection.md` §3 documents POJK
29/2024 creating a **licensed** Pemeringkat Kredit Alternatif category for
third-party assessment of borrower profile sold to financial institutions,
with revocable licences. If that perimeter captures a borrower-fraud
scoring API, G5 fails outright. Unresolved; worth a lawyer's read before
any revival.

**Everything else in the near-miss band (mill 5.3, cross-registry 5.2,
tax-invoice 5.2, KYB 5.1)** shares one signature: a real, documented
integrity failure attached to a buyer whose willingness to pay for a
*third-party* product has never been observed in Indonesia at any price.

---

## (d) HB verdict

> **HB:** There exists at least one integrity problem in Indonesia that
> passes the Scope Test, survives K1–K4, and scores ≥7.0.

**UNSUPPORTED.** The falsification clause in §1 fired.

Evidence:

1. **No candidate reached 7.0, before or after calibration.** Raw maximum
   6.6 (`bpr-insider-fraud-continuous-audit`); normalized maximum 5.6.
   Unlike a marginal result, the cohort sits 1.4–3.0 points below the bar.
2. **Every executed adversarial memo refuted its candidate — 6 of 6.**
   Program A ran two memos and refuted two. Program B ran six and refuted
   six. Eight for eight across two programs is no longer a sampling
   accident; optimistic competition/absorption scoring did not survive
   contact with evidence in a single instance.
3. **The refutations concentrate on one mechanism.** In five of six, the
   absorber was *the state or a state-mandated utility shipping the exact
   function inside the 12-month window*: SATUSEHAT `klaim-bpjs`/DKE +
   BPJS SmartClaim (JKN); ATR/BPN "Berbagi Akses" (land); OSS automatic
   PKKPR + Stranas PK Action 1 (permits); POJK 8/2026 Pusdafil daily
   reporting (financial statements); Pengawasan JPH Terpadu + UPT BPJPH
   (halal). The sixth (BPR) was refuted by a *commercial* incumbent,
   SAF-GEN, publicly priced at Rp6.9–9.9jt/month.
4. **This is Program A's Class 1 law, reproduced with the blockchain
   constraint removed.** A's conclusion held that where an accepted anchor
   exists, custodian-independent verification is unnecessary. B tested
   whether *software of any architecture* changes the economics and found
   the same anchor occupies the slot — not as an architectural objection
   but as a commercial one: the anchor ships the function free, and prices
   the market at zero (VIBI free, Berbagi Akses free, PKKPR free, Rp50k
   PPAT check, SIPELAKU free).
5. **A second, independent binding constraint: no Indonesian price exists
   for third-party integrity verification.** Across 30 candidates, exactly
   one produced a cited Indonesian ACV comparable, and it was for
   credentialing *workflow*, not integrity. Twenty-nine bottom-up paths
   rest on inference. Under K4's explicit evidence-quality requirement,
   that is not a scoring nuance — it is the finding.

Boundary conditions: desk research, no customer interviews;
Indonesia-scoped, timestamped 30 Jul 2026; every memo ran with the
WebSearch budget exhausted, on Google News RSS + direct fetch, which
weakens *negative* competitor findings specifically (the b-BPR memo notes
SAF-GEN surfaced on a single Yahoo query and would have been missed by a
narrower scan — raising, not lowering, the estimated number of
undiscovered Indonesian entrants).

---

## (e) Coverage audit — was B broader than A?

All 14 protocol mechanisms were scanned. Diversity rule (max 3 per row)
respected everywhere; no row is empty.

| Mechanism | In A (protocol table) | Scanned in B | Candidates |
|---|---|---|---|
| Fraud/anomaly detection | partial | **2** | fictitious-tax-invoice, trade-document |
| Claims validation | partial | **3** | jkn, private-health, halal |
| Uniqueness/double-pledging | yes | **3** | receivables, land-double-cert, ppjb |
| Reconciliation | partial | **2** | fidusia, mill-mass-balance |
| Entity resolution | **absent** | **2** | synthetic-borrower, program-beneficiary |
| Reference-data accuracy | **absent** | **1** | vehicle-registry |
| Provenance | yes (heavily) | **2** | gold-bar, ore-provenance |
| Identity binding | yes | **2** | ekyc-deepfake, credential-holder |
| Continuous audit | **absent** | **3** | bpr, koperasi, coretax-erp |
| Compliance verification | partial | **3** | eudr, beneficial-ownership, catch-certificate |
| Credential verification | yes | **3** | cross-registry, seafarer, indonesia-kyb |
| Financial-record integrity | partial | **2** | financial-statement, reserve-backing |
| Physical-to-digital integrity | yes | **1** | collateral-existence |
| Inter-organizational record disagreement | yes | **1** | permit-overlap |

**"B is broader than A" — HELD, with a caveat.** The three rows A never
covered (entity resolution, reference-data accuracy, continuous audit),
plus financial-record integrity — which the frozen protocol table marks
"partial", covered by A only outside detection software — received 8 of 30
candidates, and Stage 2's emphasis instruction was followed. Three rows
are thin at one candidate each — reference-data accuracy,
physical-to-digital integrity, inter-organizational record disagreement —
and the single reference-data candidate scored 4.1 with three kill-test
failures, so that row is effectively untested rather than tested-and-empty.

Roster construction (selector notes): 30 selected from ~100 raw entries
after merging (invoice dedup ×4, EUDR ×3, BO ×3, reserve attestation ×4,
beneficiary dedup ×7, health identity folded into JKN). Five scope
rejects logged: presale escrow (fund custody), halal multi-scheme
(workflow), e-POD interchange (workflow), procurement red-flags and HPS
benchmark (Program A). Carbon/REC family dropped — no documented incident
and the state is building its own fix. Prior candidates
(`receivables-uniqueness`, `jkn-claims-integrity`) received no privilege
and both were eliminated, as §7 required the matrix to be free to do.

---

## (f) Verification log

**Memos executed (6/6 REFUTED)** — `research/verify/`:

| Memo | Trigger | Verdict | Load-bearing evidence |
|---|---|---|---|
| b-bpr-insider-fraud-continuous-audit.md | raw 6.6; comp 7 | REFUTED | SAF-GEN live priced SaaS; SI-INSAF Rp2.6M via Perbarindo since 2023. **K3 explicitly did NOT fire** — the memo says nothing met K3's bar; the kill is K4 + capped competition. |
| b-jkn-claims-integrity.md | raw 6.4 | REFUTED | SATUSEHAT `klaim-bpjs`/`PurificationDecision`, `klaim` v1.3 (6 Jan 2026), DKE pilot (17 Jul 2026), SmartClaim (3 Feb 2026), free VIBI, PMK 6/2026. |
| b-financial-statement-fraud-detection.md | raw 6.4 | REFUTED | POJK 8/2026 daily transaction reporting; Pusdafil mandatory since 1 Jul 2024; POJK 29/2024 PKA licensing; pindar 101→94. |
| b-permit-overlap-diligence.md | raw 6.2 | REFUTED | OSS automatic PKKPR (570 RDTR, 13 May 2026); PP 28/2025; Stranas PK Action 1; Perpres 28/2023 + Geoportal KSP 2.0 (158 layers). |
| b-land-double-certificate-detection.md | raw 6.2; comp 7 | REFUTED | Sentuh Tanahku "Berbagi Akses" (24 Jun 2026); PPAT check Rp50,000; 92.2% of certificates still paper (Mar 2026). |
| b-halal-certificate-integrity.md | comp 7 | REFUTED | Pengawasan JPH Terpadu (1,068 locations); UPT BPJPH build-out; BPJPH–Barantin MoU; BPJPH–Korea (23 Jul 2026); lifetime validity under UU 6/2023. |

**Triggers fired without a memo (coverage defect, claims not credited):**
`receivables-uniqueness` (absorption 7), `gold-bar-provenance-registry`
(competition 7), `ore-provenance-verification` (competition 7),
`trade-document-fraud-detection` (competition 7 + absorption 7). All four
had already failed K4 independently, so no unmemoed claim is load-bearing
for any elimination — but the omission is recorded.

**K3 rulings reviewed.** Twelve K3 kills were claimed by researchers (a
thirteenth is imposed below). All twelve rest on cited, dated evidence (live product, announced regulation, funded
implementation, or named incumbent in the exact function) — **none was
reversed as hypothetical.** One clause was struck as non-load-bearing:
`ppjb-uniqueness-registry`'s "Permen PUPR 11/2019 amendable by decree" is
speculation, but that kill stands on BENAR-PKP being live and mediating
cases in Jul 2026, and K1 fails independently.

**K3 kill imposed (researcher missed one).**
`private-health-claims-validation` scored K3 PASS on "no cited 12-month
roadmap for the cross-payer function." `verify/b-jkn-claims-integrity.md`
§1 documents SATUSEHAT `interoperability/klaim/` — the **private/non-BPJS
insurance** claims module, v1.3 released 6 Jan 2026, carrying
`CoverageEligibilityRequest/Response`, `PaymentReconciliation` and an
explicit *"kamus rule number validasi"* (codified validation-rule
dictionary) — and states in terms that the finding "also lands on the
sibling candidate `private-health-claims-validation.md`." That is a
published roadmap from the actor controlling the national health data
rails, inside the window. **K3 → FAIL, absorption 5 → 3.**

**Absorption downgrade without a kill.** `synthetic-borrower-detection`
absorption 4 → 3: POJK 8/2026 (7 Jul 2026) mandates daily transaction-level
reporting into Pusdafil/FDC and covers borrower-information request
mechanisms. This builds the cross-lender substrate but does not ship
within-lender biometric/device duplicate detection — the candidate's actual
wedge — so it is scored, not killed.

**Founder-Fit Gate G1–G6.** Not reached. The gate applies to rubric
survivors ≥7.0 (protocol §3); there are none, so no per-criterion verdicts
are recorded as binding. Advisory reads for the near-miss band are in
§(c). **Channel-partner rule:** cannot satisfy G1 for any candidate in
this matrix. The rule (CONTEXT.md, 2026-07-29) permits G1 satisfaction
only where the named friend *already sells to that wedge's specific buyer
type*, with the named partner, revenue share, PT/NIB/e-katalog lead time
and B2G payment latency logged first. The near-miss band's buyers are
private hospitals, P2P lenders, BPD/BPR risk divisions and CPO mills; no
file logs the partner as already selling to any of them, and no
dependency log exists. The rule is unavailable, not merely unused.

**Upside Flags.** Recorded per protocol only for candidates clearing the
Bootstrap Bar and the rubric bar. None cleared, so no Upside Flag is
operative. Flags asserted in candidate files (portable credential
passport, cross-bank fraud dataset, cross-payer fraud registry,
cross-mill agent blacklist) are all secondary and speculative; per
CONTEXT.md they cannot compensate and did not.

---

## (g) Recommended deep-dive shortlist

**Empty.**

Zero candidates passed the 7.0 rubric bar, so zero were eligible for the
Founder-Fit Gate, so zero are eligible for a deep dive. Per the
zero-survivor rule (CONTEXT.md, 6a) an empty shortlist is a valid final
deliverable and is **not** padded with the 5.6 near-miss band.

**What the user decides next (rule 6a — at most ONE consciously-logged
relaxation, chosen with the user, never silent, never two at once).**
The options, stated neutrally:

- **Accept the result and close Program B.** Two pre-registered programs,
  86 candidates, zero survivors, 8/8 adversarial memos refuted. The
  structural finding is stronger than either program alone: in Indonesia
  as of Jul 2026, the state ships integrity functions free and fast enough
  that no third-party verification business established a price.
- **Relax the bar to 6.5–7.0 borderliners.** Would change nothing —
  the normalized maximum is 5.6 and even the raw maximum was 6.6.
- **Relax one gate criterion.** Also changes nothing at this stage;
  the gate was never reached.
- **Widen the scan.** The auditable gaps are the three thin coverage rows
  (reference-data accuracy, physical-to-digital integrity,
  inter-organizational record disagreement, 1 candidate each) and the
  four unmemoed competition/absorption triggers.
- **Re-verify a specific kill under 6b.** A challenge must name the
  disputed score or refutation and triggers re-verification with evidence,
  not re-scoring. The two calls most worth challenging on evidence
  quality: the `private-health-claims-validation` K3 kill (imposed here
  from a sibling memo, sandbox/in-development modules) and the
  `credential-holder-identity-binding` revenue-5 ceiling (the only cited
  Indonesian ACV in the corpus).

Four residual gaps were logged by the memos as real but *not*
bootstrap-shaped, and are recorded so they are not re-discovered as new
candidates: hospital-side JKN appeal evidence (service-shaped, VIBI is
free); historical map-version provenance for permit litigation
(absorption-distance 9, but per-dispute litigation support); lender-side
portfolio collateral-title monitoring (overlaps
`collateral-existence-monitoring`); shareholder-side BPR assurance
reporting to Komisaris/LPS rather than the Direksi who procures every
existing tool (no evidenced buyer).

---

*Artifacts: `research/PROGRAM-B-PROTOCOL.md` (frozen), 30 candidate files
in `research/candidates/`, six adversarial memos in `research/verify/b-*.md`,
`research/PROGRAM-A-CONCLUSION.md` (frozen prior), decision log in
`CONTEXT.md`.*
