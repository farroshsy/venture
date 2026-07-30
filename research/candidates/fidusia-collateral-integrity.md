# Fidusia Collateral Reconciliation & Duplicate-Pledge Detection

## Problem & How Truth Is Established Today

A fidusia guarantee (jaminan fidusia) lets a debtor keep possession of collateral (a vehicle, inventory, receivables) while legal title sits with the creditor until the loan is repaid. Truth about "is this asset already pledged elsewhere" is established today through three disconnected systems: (1) **Ditjen AHU's Fidusia Online registry** (fidusia.ahu.go.id) — the legal system of record, searchable by financing-company name and agreement number, not by chassis/plate number; (2) **SLIK** (OJK's credit information system) — debtor credit history, not a collateral-object registry; (3) **Rapindo**, a private asset-registration platform owned outright by APPI (the financing-company association), operating under a regulatory mandate (POJK 47/2020) requiring financing companies to register objects at an asset-recording institution. Rapindo records chassis/frame/serial numbers specifically to catch double-financing and double-pledging among member institutions, reporting 32.875 million assets on file by June 30, 2024 (Bisnis.com, Aug 13, 2024). Reconciliation of AHU's own registration data against OJK's supervisory financing data is a separate, government-internal process a July 2025 audit found badly broken.

## Buyer & Who Pays

Two distinct buyer segments exist. (1) Institutional: multifinance companies and banks originating vehicle/asset-backed loans, who already pay AHU's PNBP registration fee (tiered Rp50,000–Rp13,300,000 by collateral value, PP 28/2019) and, if APPI members, Rapindo's membership/query fees. (2) Government: Ditjen AHU (Kemenkum) and OJK, who bear the reconciliation cost of keeping the legal registry internally consistent — this is a state budget line, not a private one.

## Documented Failures (cited)

- BPK audit (2022–2024 period): discrepancy of up to 35 million transactions between OJK financing reports and Ditjen AHU fidusia registration data; causes cited include no separation between new registrations and amendment records, and double fidusia guarantees on the same object; estimated state revenue loss >Rp20 billion (kepri.kemenkum.go.id, "Perkuat Akurasi Data Nasional…," undated 2025 government release summarizing the BPK finding — primary BPK LHP not independently retrieved this pass, so treat as government-secondary, not primary).
- Fidusia PNBP contributed 65–85% of Ditjen AHU's non-tax state revenue over the last five years (same source) — showing the registry's fiscal centrality.
- Samuel Hartono Goenawan case, Surabaya District Court (proceedings dated July 29, 2021 — differs from the brief's "2022" hint): a Mitsubishi Pajero Sport's BPKB, held in fidusia by U Finance, was secretly re-pledged to a private lender for Rp315 million, part of debt reaching Rp1 billion across three vehicles (surabayapagi.com).
- OJK and Ditjen AHU signed a formal data-exchange cooperation agreement July 16, 2025 explicitly to strengthen fidusia oversight (CNBC Indonesia, Jul 24, 2025) — itself an admission the gap is live.

## Bottom-Up ARR Path (customers x ACV x reachability)

No credible independent path found. The natural institutional buyer (multifinance/bank underwriting teams) already has a regulator-mandated, industry-owned tool (Rapindo) built for exactly this check, priced near cost-recovery for its ~120+ member institutions. A new entrant's ACV would have to undercut or duplicate a mandated incumbent with an 8-year head start and 32.8M records — no Indonesian pricing comparable supports a premium product here. A consumer/used-car-buyer "clean title check" wedge (Carfax-style, sold via marketplaces) is conceptually open — AHU's public search requires knowing the financing company and agreement number, not a simple plate lookup — but no Indonesian ACV comparable for such a per-query consumer product was found, and reach requires a marketplace distribution partnership (OLX Autos, Carsome), which pushes toward partnership/BD motion rather than self-serve. **Evidence quality: weak (3).**

## Existing Solutions (named, dated)

- **AHU Fidusia Online** (fidusia.ahu.go.id) — legal system of record, Kemenkumham, ongoing.
- **Rapindo** (rapindo.co.id) — APPI-owned asset registry, live since Jan 2, 2019, mandated under POJK 47/2020, 32.875M assets by Jun 2024; only 2 banks had joined as of 2019 (Bisnis.com), current bank participation rate not reconfirmed this pass.
- **SLIK** (OJK) — debtor credit-history system, migrating to a unified portal (data.ojk.go.id/SJKPublic) from Nov 2025.
- **PEFINDO Biro Kredit / IdScore** — private credit bureau (since 2017), debtor-level scoring only.
- No Indonesian "Carfax-style" consumer title-check startup was identified.

## Kill Tests

- **K1 (Data access): PASS.** Institutional buyers already hold or can obtain access to AHU's public registry, their own SLIK credentials, and Rapindo membership.
- **K2 (Oracle bound): PASS.** Duplicate-pledge truth is inferable from existing digital records (AHU, SLIK, Rapindo) for the institutional segment; informal/off-registry lending (e.g., the Agus Wijaya case) is genuinely off-oracle and excluded.
- **K3 (Absorption): FAIL — KILL.** Rapindo is a regulator-mandated (POJK 47/2020), industry-owned incumbent already performing double-pledge/double-financing detection for the institutional segment (32.875M assets, live since 2019; Bisnis.com Aug 2024), and OJK–Ditjen AHU signed a direct data-reconciliation cooperation agreement Jul 16, 2025 (CNBC Indonesia) addressing the government-side gap. Both the private and public absorption paths are already funded and operating.
- **K4 (Bootstrap bar): FAIL.** With the institutional segment's exact function already served by a mandated near-free incumbent, and no evidenced ACV for a consumer wedge, no credible >=$1M ARR path survives without either replicating Rapindo's regulatory mandate or building an enterprise marketplace-partnership motion.

## Scores

- Severity: 7 — BPK-documented multi-year national-scale discrepancy with fiscal impact >Rp20B and dedicated agency response.
- Bootstrap revenue quality: 3 — institutional ACV undercut by mandated incumbent; consumer ACV has no Indonesian comparable.
- WTP: 4 — budget exists but is already captured by Rapindo/AHU/SLIK spend.
- Data position: 4 — evidence (AHU public search, SLIK) is a commodity feed, not exclusive.
- Absorption distance: 3 — incumbent (Rapindo) already occupies the exact function.
- Competition: 3 — funded, regulator-mandated incumbent with clear Indonesian traction.
- Moat: 3 — no cross-customer network effect available once Rapindo owns the network.

**Weighted: 4.1**

## Upside Flag

If Rapindo's coverage genuinely stops at APPI-member financing companies (unconfirmed current bank/cooperative participation rate), a narrow wedge could exist selling reconciliation-as-a-service to non-APPI lenders (cooperatives, P2P vehicle-backed lenders) or to used-car marketplaces for buyer-side title checks — but this is secondary-evidence speculation, not verified this pass.

## What Would Kill This

Already killed: Rapindo (APPI/POJK 47/2020) plus the July 2025 OJK–AHU reconciliation PKS jointly demonstrate the exact function is funded, mandated, and operating for the addressable institutional buyer.

## Sources

kepri.kemenkum.go.id (BPK finding summary, 2025); CNBC Indonesia, Jul 24, 2025; Bisnis.com, Aug 13, 2024; CNN Indonesia, Aug 20, 2019; rapindo.co.id; surabayapagi.com (case dated Jul 29, 2021); PP 28/2019 PNBP tariff via harga.web.id; idscore.id.
