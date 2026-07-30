# Palm Oil Traceability (palm-oil)

## Problem & Current Workflow
Indonesia has ~17.3 million ha of oil palm; roughly 40% is managed by smallholders (Koltiva, 2025). Fresh fruit bunches (FFB) move from farmer plots through tengkulak (collectors), small and large agents, and delivery-order holders before reaching a mill (SPKS supply-chain study, 2020; SMART Tbk supplier vlog). Legality at the farm level rests on the STDB cultivation registration and land documents; sustainability rests on ISPO certification, mandatory under Perpres 44/2020 and expanded upstream-to-downstream by Perpres 16/2025. For EU export, the operator must file an EUDR due-diligence statement with plot-level geolocation polygons. EUDR status as of 2026-07: Regulation (EU) 2025/2650 (December 2025) postponed application again — large operators comply from 30 December 2026, micro/small enterprises from 30 June 2027 — and a Commission simplification review was due 30 April 2026 (Access2Markets; CMS Law, 2025). Indonesia was classified "standard risk" under Implementing Regulation (EU) 2025/1093 (22 May 2025), so full due diligence applies; the European Parliament voted 373–289 on 9 July 2025 to reject the benchmarking methodology, but the list remains in force (Coolset, updated June 2026).

The reality on the ground: only 1.07% of independent farmers held e-STDB as of July 2024 (Agriculture Ministry, via Koltiva); at the November 2025 ISPO mandatory deadline only ~39.8% of planted area was certified and independent smallholders held ~1% of certified area (Oleochemicals Asia, 2025). Mills are supposed to reject FFB without complete origin documentation; many do not.

## Stakeholders & Who Pays
Work: ~2.4 million smallholder households (unverified), agents, cooperatives, mills, refiners (Wilmar, Musim Mas, GAR, Astra Agro), exporters. Pays: exporters and EU-facing buyers fund traceability (they already pay Koltiva, Surveyor Indonesia, certification bodies); government funds the National Dashboard; smallholders cannot pay. Audits: ISPO/RSPO certification bodies, PT Surveyor Indonesia and Sucofindo, EU member-state competent authorities. Disputes: WALHI, Sawit Watch, Eyes on the Forest (EoF); Satgas PKH (forest-area enforcement task force); Attorney General's Office.

## Trust Breakdown (documented incidents)
- 3.3 million ha of oil palm sits illegally inside designated forest areas (government data since 2019; Satgas PKH reported controlling 3.31 million ha, with 915,206 ha transferred to ministries — Kompas, October 2025). Illegal fruit is laundered into mills through the agent layer; the EoF coalition has repeatedly documented mills buying FFB from illegal plantings and demanded purchase stops (Betahita, 2024).
- Surya Darmadi / Duta Palma: 37,095 ha cultivated without permits in Indragiri Hulu, Riau, 2003–2022; prosecutors calculated Rp73.9–78 trillion in state/economic losses; cassation verdict 16 years plus Rp2.2 trillion restitution; PK rejected September 2024 (Kompas.id; CNN Indonesia, 2024). Case implicated a former Riau governor.
- "Pemutihan" (amnesty) of illegal plantations: 2,130 companies identified for Articles 110A/110B sanctions; Sawit Watch estimated Rp105 trillion in cash flows around legalizing 2.1 million ha with indications of corruption in fine calculation (Mongabay Indonesia, 2023; Tempo, 2024). The Attorney General searched KLHK offices in October 2024 over palm-in-forest governance (Mongabay, 2024).

## Cost of the Problem
- PP 45/2025 sets administrative fines of Rp25 million/ha/year for plantations in forest areas — 5–7x prior levels (Kompas, October 2025). Applied to 3.3 million ha this is a multi-trillion-rupiah annual exposure.
- Duta Palma alone: Rp73.9–78 trillion claimed losses (Kejagung, 2024).
- EUDR non-compliance for EU operators: fines up to at least 4% of EU turnover (Regulation 2023/1115, Art. 25); for Indonesia the cost is market exclusion — market share already declined in the Netherlands, Italy and Spain post-EUDR/RED II announcement (Tarjih Agribusiness Development Journal, 2025). Value of palm exports to the EU: (unverified).
- Cost of compliance per smallholder polygon/registration: (unverified).

## Existing Solutions (as of 2026-07, named)
Government: National Dashboard for Sustainable Commodities ("Dashboard Sawit") built by PT Surveyor Indonesia under Kemenko Perekonomian, blockchain-based per government statements, covering palm, coffee, cocoa, rubber, timber; ISPO Information System now linked to licensing, spatial-planning and forest-area data under Perpres 16/2025; e-STDB. Private: Koltiva (KoltiTrace; Series A led by AC Ventures 2023, oversubscribed extension 2024, works with 40%-smallholder EUDR gap); SawitPRO (active; site claims 4.79M deliveries and 34.4B kg FFB handled, unverified); Dimitra with PT Surveyor Indonesia (AI+blockchain, EUDR onboarding); global EUDR platforms osapiens, LiveEO TradeAware, TraceX, Satelligence; RSPO PalmTrace for certified volumes; majors' internal supplier-traceability systems (Wilmar, Musim Mas). Watchdog tech: Ground-truthed.id (Kaoem Telapak).

## Why Insufficient
The binding constraint is farmgate ground truth, not record-keeping: 98.9% of independent farmers lack e-STDB, the agent layer strips origin information, and mass-balance mixing at mills means a valid polygon proves nothing about a given truckload. The Dashboard centralizes data under a government that is simultaneously running an amnesty for the illegal plantations the data would expose — a real conflict of interest, but EU authorities nonetheless accept operator DDS filings through TRACES without demanding custody-independent proof.

## Blockchain Test
Multi-party and adversarial (mills vs regulators vs NGOs vs EU buyers), and the state custodian is conflicted — that argues for tamper-evidence. But the EU accepts centrally filed DDS; certification bodies and state surveyors are accepted intermediaries; and the dominant failure is fabricated or absent source data, which a ledger records immutably but cannot make true. Chain necessity is moderate at best.

## Kill Test Verdict
1. Problem without blockchain: YES — EUDR and illegal-FFB laundering persist. PASS.
2. PostgreSQL under a trusted operator: would largely solve it — Surveyor Indonesia and Koltiva are accepted operators today. FAIL.
3. Six-month ERP feature: osapiens/TraceX already sell EUDR DDS modules; Koltiva ships the full stack. FAIL.
4. Standalone value: yes for the category, but it is being captured by incumbents. PASS.
Verdict: KILLED (fails 2 and 3).

## Scores
- Severity 8 — documented Rp78T fraud case, 3.3M ha illegal supply base, regulatory exposure with dedicated task force.
- Market 7 — compliance and traceability spend across a 17.3M-ha export industry plausibly $250M–1B (sizing unverified).
- WTP 8 — mandated compliance spend; exporters already pay Koltiva/Surveyor/certifiers.
- Chain 4 — accepted trusted intermediaries exist (state surveyor, certifiers); EU accepts central DDS.
- Urgency 8 — hard deadline 30 Dec 2026, but two postponements have taught the market to discount it.
- Competition 3 — funded incumbents with traction (Koltiva, Dimitra+Surveyor, osapiens) plus a state dashboard.
- Moat 5 — integration lock-in at mills possible; polygon data itself is commoditizing.
- Weighted: 6.4.

## What Would Kill This Idea
Already killed by kill test: the trust layer is not the bottleneck and incumbents own the compliance wedge. Also lethal: a third EUDR delay or the April 2026 simplification review gutting plot-level requirements; government mandating the national Dashboard as the sole channel.

## Sources
- https://trade.ec.europa.eu/access-to-markets/en/news/delay-until-december-2026-and-other-developments-implementation-eudr-regulation
- https://cms.law/en/deu/legal-updates/eu-resets-the-countdown-on-the-eudr-and-postpones-the-regulation-once-again
- https://www.coolset.com/academy/eudr-country-risk-benchmarking-rejected-what-this-means-for-compliance
- https://www.preferredbynature.org/news/european-commission-publishes-first-list-country-benchmarks-under-eu-deforestation-regulation
- https://www.koltiva.com/post/indonesia-40-palm-oil-smallholders-face-traceability-and-certification-gaps-as-eudr-compliance
- https://www.oleochemicalsasia.com/market-insights/ispo-mandate-deadline-indonesia-smallholder-compliance
- https://money.kompas.com/read/2025/10/05/130831726/denda-rp-25-juta-per-hektar-pp-baru-soal-kawasan-hutan-picu-kekhawatiran-di?page=all
- https://www.walhi.or.id/pengampunan-3-3-juta-hektar-sawit-dalam-hutan-tunduknya-pemerintah-terhadap-korporasi
- https://www.mongabay.co.id/2023/11/04/pemutihan-kebun-sawit-ilegal-hitungan-denda-negara-berisiko-merugi/
- https://www.kompas.id/artikel/kasus-duta-palma-group-jerat-bapak-dan-anak-kejagung-kejar-rp-739-triliun
- https://www.cnnindonesia.com/nasional/20240927192729-12-1149266/ma-tolak-pk-surya-darmadi-tetap-dihukum-16-tahun-bui-dan-bayar-rp2-t
- https://www.betahita.id/berita/6227/koalisi-eof-perusahaan-harus-setop-beli-tbs-dari-kebun-ilegal
- https://www.indonesiapalmoilfacts.com/indonesia-takes-initiative-with-national-dashboard/
- https://ekon.go.id/publikasi/detail/6384/kembangkan-sistem-tracing-pemerintah-dorong-daya-saing-global-industri-kelapa-sawit-nasional
- https://www.sawitpro.id/
- https://www.eco-business.com/press-releases/koltiva-announces-over-subscribed-funding-round-to-expand-transparency-capabilities-in-agri-sector/
- https://jurnal-umsi.ac.id/agribisnis/article/view/1063
