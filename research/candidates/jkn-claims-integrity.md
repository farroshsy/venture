# JKN Claims Integrity Analytics

**Mechanism:** claims validation
**Slug:** jkn-claims-integrity

## Problem & How Truth Is Established Today

Hospitals submit JKN claims to BPJS Kesehatan under the INA-CBG (DRG-style) tariff system. BPJS's own verification layer, **VEDIKA** (Verifikasi Digital Klaim), checks administrative completeness, membership eligibility, and INA-CBG grouping — but it verifies claims *against documents the submitting hospital itself authored*. There is no independent, real-time cross-check of whether the billed service actually occurred. Discovery of phantom billing today happens through rare, resource-intensive joint audits by the **Tim PK-JKN** (Kemenkes + BPKP + KPK + BPJS Kesehatan), which manually reconcile claims-system counts against physical medical-record counts — a process that surfaced only three hospitals in a targeted 2024 pilot, years after billing. Separately, hospitals face an unrelated pain: BPJS routinely returns claims as "pending" for correction, tying up cash flow for weeks.

## Buyer & Who Pays

Two distinct, non-overlapping buyer segments exist:
1. **Payer/regulator side** — BPJS Kesehatan, Kemenkes, KPK — wants to catch phantom billing across the ~3,270-hospital network. Already being addressed by a state-funded initiative (see Absorption below), so not a viable bootstrap buyer.
2. **Provider side** — private hospitals, represented by **ARSSI** — wants to (a) avoid becoming the next phantom-billing headline and (b) reduce the ~20% pending-claim rate that damages cash flow. This is the buyer targeted here: hospital finance/casemix departments paying to self-audit claims *before* submission.

## Documented Failures (cited)

- **KPK, 2024:** Tim PK-JKN found Rp35B in fraudulent JKN claims across three hospitals in three provinces. In physiotherapy, 4,341 billed cases had only 1,072 corresponding medical-record entries — 3,269 phantom cases (KPK/InfoPublik, Tribun Medan, Tirto, July 2024). Breakdown: ~Rp29.4B (one Central Java hospital, 22,550 cases), ~Rp4.2B and ~Rp1.5B (two North Sumatra hospitals). Cataract diagnosis manipulation also found.
- **BPJS Kesehatan deficit:** Rp14.61T deficit for 2025, claim ratio ~108.27-108.72% of premium income (Kontan, Katadata, Kompas, Stabilitas, AFU.id — 2026 reporting on 2025 figures). Katadata separately reports a larger Rp17.1T deficit (124% YoY) — the two figures aren't identical, **(unverified for exact reconciliation)**.
- **ARSSI, 2025-2026:** Pending-claim rate ~20%, cited as materially damaging private-hospital cash flow (Media Indonesia; Tempo, "Klaim Mandek... Rumah Sakit: Kami Hampir Tenggelam").

## Bottom-Up ARR Path

Customers: private hospitals with active JKN contracts, filtered to mid-to-large claim volume (most exposed to pending-claim cash-flow damage and audit risk). ARSSI represents the private-hospital voice nationally; total Indonesian hospitals ≈3,270, of which ~1,862 were actively sending SATUSEHAT data per the source article (dhealth.co.id, 2026) — a proxy for the digitally-capable, reachable subset. A realistic beachhead is the top few hundred private hospitals by claim volume. ACV: no directly sourced Indonesian price point for claims-scrubbing SaaS was found; by analogy to Hospital Information System (SIMRS) module pricing generally discussed in Indonesia's health-IT market, a plausible range is Rp60-150M/year per hospital — **evidence quality: weak (inference, not cited)**. At an illustrative 300-500 hospitals × ~Rp100M/year, this clears $1M ARR, but needs validation with a design partner. Channel: partnership with SIMRS vendors (Khanza, Mediscloud, Equine) as a claims-integrity add-on is the plausible low-friction path, consistent with self-serve/API adoption over a standalone enterprise sales org.

## Existing Solutions (as of mid-2026)

- **BPJS Kesehatan VEDIKA**: payer-side digital verification, not a hospital-side pre-submission tool.
- **Kemenkes/KPK SATUSEHAT Klaim integration**: active, mandated (2026 deadline for hospital RME-SATUSEHAT integration; ~1,862/3,270 hospitals integrated per the sourced article), framed by Kemenkes and KPK as supporting "real-time, one-door" claim submission and reducing duplicate data entry to "strengthen fraud oversight" (setjen.kemkes.go.id / dhealth.co.id, 2026). Payer/regulator-facing infrastructure, not a hospital cash-flow or self-audit tool.
- Generic "AI healthcare fraud detection" marketing content exists from Indonesian dev agencies (badr.co.id, GITS.ID) but no established, named claims-integrity product for the private-hospital market was found. Global claims-scrubbing vendors (Waystar, Optum, Change Healthcare) run on US payer rules, not INA-CBG, and weren't found operating in Indonesia.

## Kill Tests

- **K1 (Data access): PASS.** The hospital buyer already owns its EMR, billing, and casemix data outright — no cooperation from an adversarial party is required.
- **K2 (Oracle bound): PASS.** The KPK's own methodology (billed-case count vs. medical-record count) is a computable internal-consistency check; volume/capacity anomalies (e.g., billed session-hours exceeding physically available practitioner-hours) and INA-CBG coding-rule violations (upcoding, unbundling) are inferable from records the hospital already holds. Fully collusive fabrication with a compliant patient is out of scope (oracle-unbound) but is not the documented failure pattern.
- **K3 (Absorption): PASS, with a flagged residual risk.** The SATUSEHAT/Kemenkes+KPK initiative is real, funded, and mandated with a 2026 timeline, but it serves the payer/regulator relationship, not the hospital's own pre-submission risk-reduction need — a materially different buyer and value proposition. If Kemenkes later extends SATUSEHAT into a hospital-facing pre-submission validator, that would directly absorb this function; no evidence of that extension was found as of this search.
- **K4 (Bootstrap bar): PASS.** Named segment (ARSSI-affiliated private hospitals), plausible channel (SIMRS vendor partnerships), SaaS-module pricing model — a self-serve/channel-distributed motion is credible without an enterprise sales org, though the ACV figure is not yet evidenced by a real deal.

**Survives: YES.**

## Scores

- Severity: **9** — KPK-documented fraud prosecution risk plus a system-wide Rp14.6-17.1T deficit.
- Bootstrap revenue quality: **5** — plausible segment and channel, ACV rests on inference.
- WTP: **7** — named budget owner (hospital finance/casemix) already spending on an inferior alternative (manual Vedika prep, generic SIMRS), with a cited recurring cash-flow loss (20% pending claims).
- Data position: **6** — per-customer EMR/claims integration that deepens with use; cross-hospital benchmarking possible at scale.
- Absorption distance: **3** — a real, funded, state-mandated adjacent initiative (SATUSEHAT Klaim) exists, even though it targets a different buyer.
- Competition: **6** — no dedicated Indonesian claims-integrity vendor for private hospitals found; global vendors don't operate on INA-CBG.
- Compounding moat: **7** — embedding in the claim-submission workflow via SIMRS integration creates high switching cost.

**Weighted: 6.4**

## Upside Flag

If Kemenkes's SATUSEHAT push stalls (only ~57% of hospitals integrated as of the sourced article) or remains payer-facing only, a hospital-side product could become the de-facto "clean claim" layer nationally, with expansion into other national-insurance claim types beyond JKN (secondary evidence only).

## What Would Kill This

- Kemenkes/KPK announcing a hospital-facing (not just payer-facing) SATUSEHAT claim-validation feature with a funded rollout — would directly absorb this.
- ARSSI or a SIMRS incumbent shipping a native claims-integrity module — no evidence found yet, but plausible given SIMRS vendors already sit inside the workflow.
- Confirmation that hospitals view coding self-audit as legally risky to formalize (i.e., prefer plausible deniability over a documented internal-audit trail) — would suppress WTP.

## Sources

KPK/InfoPublik, Tribun Medan, Tirto, era.id (2024) — phantom-billing case; Kontan, Katadata, Kompas, Stabilitas, AFU.id (2026) — 2025 deficit/claim ratio; Media Indonesia, Tempo (2025-2026) — ARSSI pending-claim rate; setjen.kemkes.go.id, dhealth.co.id, advomed.id (2026) — SATUSEHAT/RME integration mandate; repository.unej.ac.id, e-journal.unair.ac.id (academic) — VEDIKA mechanics; badr.co.id, GITS.ID — Indonesian AI fraud-detection marketing content (weak sourcing, noted as such).
