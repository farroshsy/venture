# Multi-Agency Fisheries Export Clearance — AXIS 5-CONTROL

H1 prediction: FAILS, because a state-mandated integrator (INSW) is accepted by every party and is visibly consolidating the fragmentation.

## Problem & Current Workflow

An Indonesian fisheries exporter today runs a document relay across at least four authorities. Step by step: (1) vessel >20 GT lands catch at a fisheries port; port authority (KKP Ditjen Perikanan Tangkap) issues the SHTI catch certificate (Lembar Awal, then Lembar Turunan for EU-bound consignments) under the EU IUU Regulation 1005/2008 scheme, Permen KP 13/2012 as amended; since 2025 a parallel SHTI stream applies to Japan under the amended IJEPA protocol (KKP, 2025). (2) The processing plant's quality/safety certificate (SMKHP) comes from KKP's BPPMHKP, mandatory since Permen KP 25/2024. (3) Fish health/quarantine certificate (KI-1) comes from Barantin — the Indonesian Quarantine Agency created by UU 21/2019 and Perpres 45/2023, which absorbed the quarantine half of the former BKIPM, splitting fish quarantine (Barantin) from quality control (BPPMHKP/KKP). (4) Customs export declaration (PEB) to Bea Cukai. Submission increasingly happens once, through INSW: the SSm QC single-submission joint-inspection regime between Customs and Quarantine has been live at 14 main ports since 1 September 2022 (LNSW/Liputan6, 2022).

## Stakeholders & Who Pays

Domestic side: exporters/UPIs pay PNBP fees per certificate plus logistics dwell; KKP, Barantin, Bea Cukai and LNSW (Kemenkeu) do the work; BPK audits; exporters and forwarders dispute delays. Foreign side: the EU Commission (DG MARE/DG SANTE) validates SHTI and health certificates flag-state-to-port-state; the US enforces SIMP data requirements; Japan now requires catch documentation under IJEPA. Crucially, both foreign verifiers accept Indonesian state-issued certificates by treaty design — the EU catch-certificate scheme is explicitly built on flag-state validation.

## Trust Breakdown

The fragmentation is real but the failure mode is friction, not contested truth. Documented: overlapping quality certification after the BKIPM split — SMKHP (KKP) duplicating checks feeding KI-1 (Barantin), acknowledged by both agencies and addressed by PP 25/2025 task division and a joint electronic data-exchange pilot integrating SMKHP into KI-1 issuance that began 22 July 2026 (Barantin; Rakyat Sulbar, July 2026). Historic IUU "catch laundering" through paper SHTI is the standing integrity risk the EU scheme targets; however, hard searching (Indonesian included) surfaced no named forged-SHTI prosecution or EU RASFF rejection tied to certificate fraud in 2024–2026 — Indonesia has never received an EU IUU yellow card. Absence of fresh scandal is itself evidence against severity. The real 2025 scandals were product-integrity, not document-trust: the FDA refused thirteen entry lines of Indonesian shrimp for banned veterinary-drug residues in 2025 versus two across 2019–2024, listed three exporters on Import Alert 99-47, and found suspected Cesium-137 contamination in shrimp from PT Bahari Makmur Sejati (Southern Shrimp Alliance / FDA, 2025). Those certificates were genuine; the product failed independent testing — proof that the foreign verifier re-tests regardless of any document chain, which no ledger changes.

## Cost of the Problem

Fisheries exports were USD 6.27B in 2025, up 5.2%, with the US at USD 1.99B (31.8%), China USD 1.22B, EU USD 451.7M (KKP, January 2026). Friction cost: SSm QC container dwell time averaged 3.31 days against a 3.23-day SLA in July 2022 (LNSW, 2022); per-shipment excess cost of the residual multi-agency steps: (unverified). No credible figure attributes export value loss to certificate distrust; losses from IUU laundering are off-system collusion and must be stripped from addressable sizing.

## Existing Solutions (as of 2026-07)

State: INSW/SSm QC joint inspection (14 ports, expanding); e-SHTI issuance at fishing ports; Stelina (KKP national fish traceability/logistics system); Barantin–BPPMHKP electronic certificate integration piloting July 2026; KKP–BP Batam agreement (23 July 2026) linking KKP certification with the IBOSS licensing system, cutting issuance to 10–15 minutes in the Batam FTZ (Antara, 2026); INSW Gen-3 roadmap (single credential, superapp-style unified export licensing — LNSW). Buyer side: the EU's CATCH digital catch-certificate system is compulsory for all EU importers from 10 January 2026, with third-country authorities onboarding voluntarily — the EU itself now operates the single system of record on its side (European Commission, January 2026). Private: freight-forwarder documentation SaaS, global traceability vendors (Wholechain, ThisFish/Tally used in Indonesian pilots under USAID programs), MSC/Fair Trade chain-of-custody schemes. No dominant private coordinator, because the state occupies the slot.

## Why Insufficient & Who Rejects the Existing Anchor

Remaining gaps: agency systems still reconcile bilaterally (the July 2026 pilot proves integration is unfinished); small-vessel catch data below 20 GT is thin, limiting SIMP/EU traceability depth. But no economically relevant party rejects the anchor. Exporters want INSW to work, not to be replaced; the EU, US and Japan accept flag-state certificates by regulation; the agencies accept INSW because a Presidential mandate compels them. There is no adversarial pair needing custodian-independent proof — only ministries with a coordination backlog and a sovereign actively clearing it.

## Blockchain Test

Multi-org, single accepted intermediary already mandated (INSW). Tamper-evidence changes no behavior: certificates are distrusted for content (was the fish really that vessel's catch?), which a ledger cannot attest — only observers, logbooks and port inspectors can. Chain necessity ~2/10.

## Kill Test Verdict — KILLED (H1 prediction confirmed)

1. Problem survives without blockchain? YES — pure inter-agency workflow.
2. PostgreSQL under one trusted operator? YES — INSW is precisely that, and both sides of the border accept it (foreign verifiers accept the state anchor by treaty). FAIL.
3. State ships it in six months? It is shipping now: SSm QC since 2022, PP 25/2025, SMKHP–KI-1 integration pilot July 2026. FAIL.
4. Standalone company value? Documentation-brokering SaaS against a free, mandated state platform — no. FAIL.

## Scores

- Severity 5 — measurable dwell/duplication cost (3.31-day dwell, LNSW 2022) but no scandal, no export access loss.
- Market 4 — compliance-software slice of a USD 6.27B export flow, realistically sub-$50–100M (unverified).
- WTP 4 — exporters pay fees but expect clearance to be a free public service; budget owner is the state.
- Chain 2 — mandated accepted intermediary exists; foreign verifiers accept flag-state certificates.
- Urgency 4 — pressure is declining as integrations land; no external deadline forcing change.
- Competition 3 — INSW is a funded incumbent with a presidential mandate; traceability pilots crowd the rest.
- Moat 3 — any integration layer is displaced the day INSW ships the same connection.
- Weighted: 3.7

## What Would Kill This Idea

It is dead under H1. Revival would require an EU yellow card explicitly citing distrust of Indonesian state certificate issuance, or US SIMP rejecting state attestations in favor of custodian-independent chain-of-custody — neither exists as of July 2026.

## Sources

- https://kkp.go.id/news/news-detail/ekspor-perikanan-tembus-usd-627-miliar-di-2025-kkp-komoditas-indonesia-makin-bernilai-di-pasar-global-krB5.html
- https://www.antaranews.com/berita/5419610/nilai-ekspor-produk-perikanan-capai-rp1055-triliun-pada-2025
- https://www.liputan6.com/bisnis/read/5049318/ssm-pabean-karantina-berlaku-di-14-pelabuhan-per-1-september-202
- https://www.liputan6.com/bisnis/read/4295562/pertama-di-indonesia-tpks-terapkan-join-inspection-tekan-waktu-dwelling-time
- https://karantinaindonesia.go.id/uji-terap/berita/tak-lagi-dua-langkah-kini-satu-sistem-barantin-bppmhkp-percepat-layanan-ekspor-ikan
- https://www.rakyatsulbar.com/2026/07/24/percepat-layanan-ekspor-karantina-sulsel-dan-bppmhkp-implementasikan-pertukaran-data-elektronik/
- https://pipp.kkp.go.id/shti
- https://oceans-and-fisheries.ec.europa.eu/news/new-digital-certification-system-tackle-illegal-fishing-2026-01-12_en
- https://en.antaranews.com/news/424135/indonesia-integrates-batam-fish-export-certification-services
- https://shrimpalliance.com/fdas-enforcement-actions-raise-broad-concerns-regarding-indonesian-shrimp/
- https://govinsider.asia/intl-en/article/indonesia-implements-single-window-clearance-to-drive-business-process-efficiency
- https://insw.go.id/
