# Cold Chain — Food & Pharma (cold-chain)

## Problem & Current Workflow
Pharma: manufacturer or importer → CDOB-certified distributor (PBF) → hospital/pharmacy/puskesmas. BPOM's CDOB (Good Distribution Practice) rules require validated cold rooms, calibrated monitoring, and — for cold-chain products such as vaccines — checking transit temperature records and Vaccine Vial Monitor (VVM) indicators at every receipt; storage at 2–8°C or −15 to −25°C by product class (BPOM CDOB standard; Kemenkes guidance). BPOM Regulation No. 20/2025 refreshed the CDOB sanction ladder (written warning → suspension → CDOB certificate revocation, now executable electronically after failed CAPA cycles); Regulation No. 5/2026 extends supervision into health facilities and retail (Farmasetika, April 2026). Food: producer → processor → cold storage → reefer truck → distribution center → retail/horeca, with far patchier monitoring; documents are delivery notes plus, at best, a printed logger strip. At each handoff the receiver signs off; when product arrives warm or spoiled, the argument is over whose leg of the chain broke it.

## Stakeholders & Who Pays
Work: cold storage operators, reefer fleets (MGM Bosco and peers), PBFs, food processors, fisheries, importers. Pays: brand owners and PBFs pay for compliant logistics; insurers pay spoilage claims; consumers pay via waste priced into food. Audits: BPOM (pharma), buyers' QA teams, insurers' surveyors, export buyers' auditors. Disputes: shipper vs carrier vs warehouse over excursion liability; insured vs insurer over claim validity; PBF vs BPOM over documentation findings.

## Trust Breakdown (documented incidents, cited)
- The structural failure: temperature logs are custodial and self-reported. Each party runs its own logger; gaps, resets, or transcription happen at precisely the handoffs where liability transfers. BPOM treats failure to document storage temperature as a serious violation (Farmasetika, 2026), which is itself evidence the records are where integrity breaks.
- Sanctions exist and are used: BPOM Reg 20/2025 codifies suspension and electronic revocation of CDOB certificates for critical findings (BPK regulation database, 2025). Named public enforcement cases tied specifically to falsified temperature logs: none found in search (unverified — disputes appear to settle privately via insurance and commercial deduction).
- Waste scale: Bappenas' FLW study (2021) put Indonesian food loss and waste at 23–48 million tonnes/year, an economic loss of Rp213–551 trillion/year (4–5% of GDP); loss (pre-retail, cold-chain-addressable) was ~45% of the total by 2019.
- Global reference: claims that up to 50% of vaccines are wasted globally from cold-chain breaks circulate in vendor literature (unverified; WHO-derived figure, contested methodology).

## Cost of the Problem
- Food loss economic cost: Rp213–551 trillion/yr (Bappenas, 2021) — only a fraction is attributable to cold-chain trust rather than absent cold-chain capacity (attribution unverified).
- Market context: Indonesia cold chain market ~USD 3.0B in 2024 growing ~9.5% CAGR to 2030 (MarkNtel, 2025); a rival estimate says USD 8.4B in 2026 (MarkWide, 2026) — definitions differ, treat both as vendor estimates.
- Fisheries: with proper cold chain, losses reportedly fall to 5–8% (Daxtro vendor blog, 2025 — unverified).
- Pharma dispute/claims cost in Indonesia: no named figure found (unverified).

## Existing Solutions (as of 2026-07, named)
- Indonesian operators: Coldspace (integrated cold chain, $3.8M seed May 2023 from Intudo/ASSA/Triputra; ~3,000t own capacity plus 30,000t marketplace at raise), MGM Bosco (merged transport+storage incumbent, 100+ cities), Deliveree and Waresix touch reefer freight marginally.
- Monitoring vendors (global, present via distributors): Sensitech, Berlinger, Elpro, Controlant-style real-time IoT loggers; local integrators retrofit reefers with cellular sensors (market reports, 2025-26). One market report claims IoT loggers with "blockchain-anchored data integrity" feeding BPOM e-submission (MarkWide, 2026 — vendor-speak, unverified).
- Government: BPOM CDOB certification + inspection regime; Kemenkes cold-chain infrastructure program for immunization (Kemenkes, 2023).
- No funded Indonesian startup focused on neutral cross-party temperature evidence was found after search — but the adjacent ops/monitoring space is occupied.

## Why Insufficient
Monitoring hardware answers "what was the temperature" but not "whose record governs when parties disagree." In practice the shipper's logger, the carrier's telematics, and the warehouse's WMS each tell their own story, and insurers arbitrate with discretionary haircuts. CDOB compels documentation but accepts custodial records, so a compliant-looking paper trail and a truthful one are indistinguishable to BPOM.

## Blockchain Test
The gap has a proven non-blockchain answer: a third-party monitoring vendor whose single feed is contractually accepted by shipper, carrier, and insurer — the Controlant model that won global pharma logistics — is PostgreSQL under a trusted operator. Multi-org, yes; but an accepted neutral intermediary is buildable and is how the market already resolves this elsewhere.

## Kill Test Verdict — KILLED
1. Problem survives without blockchain? YES. 2. PostgreSQL under one trusted operator? YES — neutral-vendor telemetry accepted by contract solves it (fails). 3. Six-month incumbent feature? Partially — hardware+certification takes longer, a genuine barrier (passes). 4. Standalone value? YES globally (Controlant precedent). Dies on test 2: tamper-evidence is a nice-to-have where a trusted feed already changes behavior.

## Scores
- Severity 7 — spoilage is direct product loss and CDOB findings threaten distribution licenses; dedicated QA staff manage it.
- Market 5 — the monitoring/compliance layer of a ~$3B logistics market is plausibly $50–250M in Indonesia (basis stated, no named TAM).
- WTP 6 — CDOB is mandated compliance spend for pharma; food side has weak payers.
- Chain 5 — multi-org, but an accepted trusted intermediary (neutral monitoring vendor) exists as a model.
- Urgency 7 — BPOM Reg 20/2025 and Reg 5/2026 are in force now, tightening documentation and sanction exposure inside 24 months.
- Competition 6 — ops incumbents exist (Coldspace, MGM Bosco) but no one owns the evidence layer; global vendors thinly localized.
- Moat 5 — sensor fleet plus insurer/BPOM acceptance is integration lock-in, not a protocol position.
- Weighted: 5.9

## What Would Kill This Idea
It is killed as a blockchain venture by test 2. As a conventional play (neutral IoT evidence vendor for CDOB compliance) it is the strongest of these three — what would kill that variant: Controlant/Sensitech entering via a pharma-distributor partnership, or BPOM standing up its own mandated telemetry portal, which Reg 5/2026's expanded digital supervision hints at (verify before any Phase 2).

## Sources
- https://peraturan.bpk.go.id/Details/326278/peraturan-bpom-no-20-tahun-2025
- https://farmasetika.com/2026/04/23/era-baru-pengawasan-obat-bedah-peraturan-bpom-nomor-5-tahun-2026-di-fasyanfar-dan-retail/
- https://distribusifarmasi.web.id/peraturan-bpom-no-20-tahun-2025-tentang-cdob/
- https://lcdi-indonesia.id/2022/01/31/kelola-mubazir-pangan-food-loss-and-waste-flw-untuk-mendukung-pembangunan-rendah-karbon-dan-ekonomi-sirkular-di-indonesia
- https://www.marknteladvisors.com/research-library/indonesia-cold-chain-market.html
- https://markwideresearch.com/indonesia-cold-chain-logistics-market
- https://technode.global/2023/05/03/indonesias-coldspace-raises-3-8m-seed-fund-led-by-intudo-ventures-assa-triputra-group/
- https://mgmbosco.com/en/about
- https://kemkes.go.id/id/%20pemerintah-sediakan-rantai-dingin-cold-chain-menjaga-kualitas-vaksin
- https://www.indonesian-publichealth.com/penyebab-kerusakan-vaksin/
- https://daxtro.id/cold-chain-abf-untuk-menekan-food-loss-perikanan/
- https://www.verifiedmarketresearch.com/product/indonesia-cold-chain-logistics-market/
