# Migrant Remittances & Settlement — Indonesia

## Problem & Current Workflow
Roughly 4–5 million Pekerja Migran Indonesia (PMI) — count varies by source, many undocumented (unverified) — remit from Malaysia, Saudi Arabia, Hong Kong, Taiwan, Singapore, Korea, Japan. Sending workflow today: worker is placed via a P3MI placement agency (contract, placement-cost schedule, KP2MI registration); abroad, she remits through (a) bank counters or Indonesian bank subsidiaries (BNI/BRI/Mandiri remittance units in HK/Malaysia), (b) licensed money-transfer operators (Western Union, MoneyGram, Merchantrade-type agents) with passport/permit KYC, (c) fintech apps where permitted, or (d) informal "titip" carriers and unlicensed agents — the channel of necessity for non-procedural workers who fear KYC. Funds route via correspondent accounts or MTO netting; family receives at a bank, Pos Indonesia, or agent. Receiving-side documents: KTP and pickup code. Disputes go to the operator, BI consumer protection, or KP2MI. Settlement takes minutes (MTO) to days (SWIFT bank wires). BI licenses transfer operators (Penyelenggara Transfer Dana under the payment-system framework); crypto is prohibited as a payment instrument under the Currency Law — rupiah is sole legal tender (Chambers, 2026; Lightspark, 2026), and crypto-asset supervision moved from Bappebti to OJK in January 2025 (HBT Law, 2025).

## Stakeholders & Who Pays
Workers pay fees and FX margin; families bear delays. Operators (banks, MTOs, fintechs) pay licensing and compliance. BI regulates payments; OJK regulates crypto-assets and consumer protection; KP2MI/BP2MI protects workers; PPATK monitors AML. P3MI agencies control the placement funnel and are also the locus of overcharging disputes.

## Trust Breakdown (documented incidents)
This corridor's trust failures sit mostly **upstream of the money rail**: overcharging of placement fees and non-procedural migration exposing workers to fraud and trafficking are the persistent, government-acknowledged problems (Kemenko PM consultation, Antara, 2025; KP2MI "Migran Aman" campaign, 2025). Informal remittance channels persist because non-procedural workers cannot pass sending-side KYC — a legal-status problem, not a ledger problem. Documented rail-level fraud (operator theft, double-spend, forged pickup) did not surface in searches as a recurring pattern; the corridor's licensed rails largely work. No single well-documented large remittance-fraud scandal found for 2024–2026 (absence noted, not proof).

## Cost of the Problem
- Volume: PMI remittances Rp 253.3 trillion (~USD 15.8B) in 2024 (KP2MI via Kompas, April 2025); 2025 up ~14% to roughly Rp 288 trillion (Minister of P2MI via Antara, 2025/2026); BI put the PMI contribution at USD 14.22B for the prior period (BI via CNBC Indonesia, May 2024). Remittances ≈1.2% of GDP (KP2MI via Antara, 2026).
- Price: global average remittance cost 6.49% (World Bank Remittance Prices Worldwide Issue 53, March 2025); Malaysia→Indonesia via Western Union 3.24% total cost as of October 2025 (World Bank RPW corridor data, 2025). At a blended 3–5% on ~USD 16B, workers pay roughly USD 0.5–0.8B/year in fees and FX (derived from the above; blend unverified).
- Overcharging/placement-fee losses: no verified aggregate (unverified).

## Existing Solutions (as of 2026-07)
- **State infrastructure (the big one)**: BI joined the BIS **Project Nexus**; Nexus Global Payments incorporated in Singapore by BNM, BSP, MAS, BOT, RBI with BI as special observer; BI plans BI-FAST linkage with domestic settlement kept onshore; go-live targeted 2026–2027 (Antara, 2025; The Asian Banker, 2026; Compliance Corylated, 2026). **QRIS cross-border** live with Thailand, Malaysia, Singapore: ~IDR 1.66 trillion and 5.5M+ transactions by mid-2025, 225% growth (UNCTAD contribution, 2026; PS Engage, 2025) — tourist/merchant payments today, remittance-adjacent tomorrow.
- **Fintech**: Wise, Topremit (Medan-based BI-licensed remitter), Flip Globe — active Indonesian corridors (operational status widely reported; sites blocked verification 2026-07, license details unverified); incumbent MTOs Western Union/MoneyGram; bank remittance subsidiaries.
- **Crypto rails**: stablecoin settlement is used by some regional B2B providers, but industry is still lobbying BI for legal recognition of stablecoins for payments (Coinpedia, 2025); using them consumer-facing in Indonesia is prohibited.

## Why Insufficient
Costs above the UN 3% SDG target persist on Gulf corridors, and non-procedural workers remain locked out of formal rails. But the deficit is being closed by exactly the actor best placed to close it: central banks interlinking instant-payment systems multilaterally. What remains unsolved — worker legal status, placement-fee abuse — is not addressable by a settlement layer.

## Blockchain Test
The trust problem between sending PSP, receiving PSP, and regulators is being solved by an accepted neutral intermediary (Nexus Global Payments, owned by the central banks themselves). BI explicitly requires settlement to remain in domestic systems. A blockchain rail would have to route around BI in a jurisdiction where crypto payment is illegal — the regulatory wall is the moat of the incumbent, not the entrant.

## Kill Test Verdict — KILLED
1. Problem survives without blockchain? YES (fees, exclusion).
2. PostgreSQL under one trusted operator? YES — Nexus is literally a trusted multilateral operator interlinking existing ledgers; anchors say chain=5 territory at best. FAIL.
3. Incumbent ships in six months? Not in six months, but central banks and Wise/Topremit are already shipping the roadmap; a startup adds no wedge. Effectively FAIL.
4. Standalone value? Fee pool exists (~USD 0.5B+), but margin is compressing by policy design, and the licensable path forbids the blockchain variant.

## Scores
- Severity 5 — measurable cost (3–6% of transfers) with working workarounds; upstream abuses are severe but out of scope for a settlement product.
- Market 7 — fee pool on ~USD 16B verified flows sits in the USD 250M–1B band.
- WTP 3 — payers are price-sensitive migrant workers; no institutional budget owner for a new rail.
- Chain 5 — multi-org, but accepted trusted intermediaries exist and are strengthening (Nexus, QRIS x-border).
- Urgency 5 — growing policy momentum, no deadline forcing private action.
- Competition 3 — Wise, MTOs, licensed local fintechs, and state infrastructure all funded and moving.
- Moat 3 — a new entrant's only moat would be licenses incumbents already hold.
- **Weighted: 4.7**

## What Would Kill This Idea
Already killed: kill-test 2 fails, BI's crypto-payment prohibition forecloses the blockchain variant outright, and Nexus/QRIS compress the margin the business would need. Revisit only if Nexus stalls past 2028 AND BI licenses stablecoin settlement — neither indicated as of July 2026.

## Sources
- https://money.kompas.com/read/2025/04/21/180008026/remitansi-pekerja-migran-indonesia-rp-2533-triliun-sepanjang-2024
- https://www.antaranews.com/berita/5435930/menteri-p2mi-remitansi-pmi-2025-naik-14-persen-dari-2024
- https://www.cnbcindonesia.com/news/20240531124752-4-542759/gokil-pekerja-migran-indonesia-sumbang-us-1422-miliar-ke-cadev
- https://remittanceprices.worldbank.org/corridor/Malaysia/Indonesia
- https://remittanceprices.worldbank.org/sites/default/files/rpw_main_report_and_annex_q125_1_0.pdf
- https://en.antaranews.com/news/402630/indonesia-joins-bis-nexus-project-for-instant-cross-border-payments
- https://www.theasianbanker.com/updates-and-articles/project-nexus-to-transform-global-payments-going-live-in-2026
- https://www.compliancecorylated.com/news/bis-multilateral-instant-payments-become-reality-in-asia-pacific/
- https://unctad.org/system/files/non-official-document/ditc_tsce_2026_myem_trade_services_contribution_indonesia.pdf
- https://practiceguides.chambers.com/practice-guides/blockchain-crypto-assets-2026/indonesia/trends-and-developments
- https://www.hbtlaw.com/insights/2025-05/ojk-assumes-regulatory-oversight-digital-financial-assets
- https://coinpedia.org/news/exclusive-crypto-indonesia-2025-ojk-rules-cfx-launch-and-stablecoin-debate/
- https://m.antaranews.com/amp/berita/5305042/kemenko-pm-jaring-masukan-lintas-sektor-soal-aturan-pekerja-migran
