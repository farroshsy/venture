# Government Program Roster Identity Resolution (DTKS/e-RDKK/Dapodik/Payroll)

## Problem & How Truth Is Established Today
Four government program rosters — DTKS (social-assistance targeting, Kemensos), e-RDKK (fertilizer-subsidy eligibility, Kementan), Dapodik (student data underlying BOS funding, Kemendikbudristek), and ASN/PNS payroll (BKN/BKD) — carry duplicate, deceased, or fictitious NIKs because each is compiled on its own cadence rather than continuously reconciled against Dukcapil's population/death registry and against each other. Today's process is periodic and manual: village musyawarah for DTKS proposals, door-to-door BPS census sweeps (Regsosek), self-reported ASN re-verification (MySAPK), ad hoc ministry "pemutakhiran" drives — not event-driven reconciliation.

## Buyer & Who Pays
Named potential buyers: BPKP and BPK (state audit bodies with a standing audit mandate), Kemensos/BPS (already building their own fix — see K3), Kementan/pemda agriculture offices for e-RDKK, Kemendikbudristek/Disdikbud for Dapodik/BOS, and BKN/BKD for payroll. Cross-organizational: Dukcapil holds the ground-truth population/death registry and gates access via renewable two-year data-cooperation agreements — a private vendor needs Dukcapil's cooperation for NIK-matching rights (dukcapil.kemendagri.go.id).

## Documented Failures (cited)
- BPK: 10,992,479 household members with invalid NIK, 16,373,682 with invalid KK numbers, 86,465 duplicate NIKs in DTKS data as of Jan 2020 (CNN Indonesia, 2022, reporting FY2021 audit) — dated but still the most-cited baseline.
- BPK: Rp6.93 trillion in misallocated PKH/BPNT/BST assistance, incl. payments to deceased recipients still listed as KPM and to households never in DTKS (CNN Indonesia, Suara.com, Sindonews, all reporting the same FY2021 audit, 2022). No more recent equivalent BPK figure found; historical baseline, not a fresh 2025–26 finding.
- Ombudsman RI: 13% of ~6.3M e-RDKK-registered farmer NIKs invalid, 68%+ of "valid" farmers did not redeem subsidized fertilizer 2022–2024 (ombudsman.go.id, 2025).
- BKN "97,000 ghost PNS": a 2014-vintage finding, resurfaced 2021; BKN itself says resolved by 2016 via MySAPK (CNN Indonesia, idxchannel, viva.co.id). **Stale** — no 2025–26 equivalent found; weak sub-case.
- Dapodik: ~11,000 alleged phantom SMK students in Banten, ~Rp17 billion alleged loss, reported July 2026 by a citizen monitoring group (DPP-FPK) — recent but single-source, still "diduga" (alleged) (mediakriminalitas.com, July 2026).

## Bottom-Up ARR Path
No credible self-serve path was found. The natural buyers (BPKP, BPK, pemda, line ministries) procure via LPSE government tender, not self-serve signup; no Indonesian SaaS pricing comparable for a private "roster reconciliation" product sold into this channel was found. Even a narrow, well-evidenced sub-case (e-RDKK, ~200+ pemda agriculture offices) would require ministry-level relationships and tender participation. Evidence: WEAK — no named ACV or self-serve channel found.

## Existing Solutions (named, dated)
- **DTSEN v3**: announced ready 8 July 2026, consolidating DTKS + Regsosek + P3KE, with Dukcapil performing "pemadanan identitas" as a continuously-updating, built-in function, replacing DTKS as the primary reference (itera.ac.id, 2026; public portal still showed v2.0 as of this research).
- **Kemendikbudristek**: auto-hides students flagged "NIK Tidak Padan" from rombel menus to block fictitious BOS claims (pusatinformasi.kemendikdasmen.go.id) — a partial, blunt filter.
- **Kementan**: Permentan 15/2025 allows within-year e-RDKK updates — a process fix, not identity-matching tech; no Dukcapil cross-check for e-RDKK found beyond the raw NIK field.
- **BKN MySAPK**: self-reported ASN status app, last meaningfully referenced 2014–2016; no refresh found.
- **Privy, VIDA**: licensed PSrE/digital-identity providers verifying individual identity against Dukcapil at registration for fintech/KYC — not a batch roster-deduplication service for program administrators. No vendor selling that service to BPKP/pemda/line ministries was found.

## Kill Tests
- **K1 Data access — PASS.** Government auditors (BPKP/BPK) have a legal mandate to the underlying data; a private-vendor route also exists — Dukcapil already runs formal two-year cooperation agreements with ~242 institutions, ~200 more (BPRs, insurers, fintechs) in queue (dukcapil.kemendagri.go.id) — cooperation is realistically obtainable, if slow.
- **K2 Oracle bound — PASS.** Duplicate/deceased/fictitious NIK status is a well-defined, recorded fact resolvable by cross-referencing Dukcapil's civil registry — a database-matching problem, not off-system collusion or a physically-fabricated truth.
- **K3 Absorption — FAIL (kill).** DTSEN v3, announced ready 8 July 2026, has Dukcapil performing continuous identity matching as a core, funded function that explicitly replaces DTKS — the single largest and best-evidenced sub-case here (Rp6.93T, 10.99M invalid NIKs). This is a named, dated, funded government implementation already entering the exact function proposed for the flagship sub-case (itera.ac.id, 2026). e-RDKK, Dapodik, and payroll show weaker or no comparable absorption, but the candidate as scoped includes DTKS, and its flagship piece is being absorbed.
- **K4 Bootstrap bar — FAIL.** The remaining non-absorbed sub-cases (e-RDKK, Dapodik, payroll) route through LPSE government-tender procurement to a small number of ministry/pemda buyers — no self-serve/API channel or Indonesian pricing comparable found; also fails the founder gate (G6).

**Survives: no — killed on K3 (DTSEN v3 is a funded, dated, named government absorption of the flagship DTKS sub-case) and independently on K4 (remaining sub-cases require government-tender enterprise sales, no self-serve path evidenced).**

## Scores
- Severity 7 — large, recurring, institutionally-tracked losses across registries (Rp6.93T bansos, Rp17B alleged Dapodik) with standing BPK/Ombudsman/BPKP oversight, though the largest figure is 2021-vintage and the newest (2026) is single-source/alleged.
- Bootstrap revenue 3 — no self-serve channel or Indonesian ACV comparable found; buyer is government-tender-gated.
- WTP 5 — audit/oversight budgets exist at BPKP/BPK/pemda level but are slow-moving, tender-gated, not owned by any single accessible buyer.
- Data position 3 — the Dukcapil feed, once an MOU is obtained, is the same commodity feed available to any cooperating institution — no accumulation edge for a private vendor.
- Absorption distance 3 — a concrete absorber (DTSEN) already exists with cited 12-month evidence for the flagship sub-case.
- Competition 5 — no dedicated private startup found for this niche, but the state's own DTSEN/Dapodik-filter systems occupy the space.
- Moat 3 — any private-vendor relationship is single-tenant/switchable per ministry, since Dukcapil gates data equally to all.
- **Weighted: 4.3**

## Upside Flag
Secondary evidence only, unverified: a narrower wedge focused only on e-RDKK or Dapodik (sub-cases DTSEN does not yet cover) sold as a report-only product to BPKP-adjacent auditors, journalists, or NGOs monitoring subsidy leakage could theoretically dodge the K3 kill — but no evidence of an actual buyer, price point, or demand was found; purely speculative.

## What Would Kill This
Already killed as scoped. Worth revisiting only if DTSEN v3's rollout stalls or fails to functionally cover identity resolution (contradicting itera.ac.id), or if a specific non-government buyer (e.g., an NGO/media consortium with budget) is identified for the e-RDKK/Dapodik-only wedge.

## Sources
CNN Indonesia, Suara.com, Sindonews, tvOne (BPK DTKS/bansos findings, 2022 reporting FY2021 audit); ombudsman.go.id (e-RDKK findings, 2025); idxchannel.com, idntimes.com, indozone.id, viva.co.id (97k PNS case, 2014/2021); mediakriminalitas.com (Banten Dapodik case, July 2026); pusatinformasi.rumahpendidikan.kemendikdasmen.go.id (NIK Tidak Padan filter); itera.ac.id (DTSEN v3, July 2026); dukcapil.kemendagri.go.id (data-access cooperation framework); askopindo.co.id, pdiperjuanganbali.id, kyowa-indonesia.co.id (DTSEN/DTSEN desil system, 2026); privy.id, vida.id (identity-verification vendor scope).
