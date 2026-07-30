# Mining Provenance & Quotas (Nickel, Coal)

## Problem & Current Workflow

An IUP (mining license) holder must get its annual RKAB (work plan and budget) approved by ESDM's Minerba directorate before it may produce or sell a single tonne. RKAB validity was stretched to three years in 2024, then reverted to annual approval from 2026 to tighten output control (Reuters/Yahoo Finance, Oct 2025). ESDM approved 296.1 Mt of nickel RKAB for 2025 and ~261 Mt for 2026, against smelter demand of ~294 Mt (SMM, 2025; Bloomberg Technoz, 2026). To sell ore, a miner needs: approved RKAB, royalty (PNBP) payment via e-PNBP, surveyor verification of grade and tonnage, port/customs clearance, and — since early 2025 for nickel — transaction approval inside SIMBARA, the inter-ministry system linking ESDM (MOMS/MODI/e-RKAB), the Finance Ministry, and customs. SIMBARA went live for coal in 2023, was extended to nickel and tin in July 2024, became mandatory for nickel ore sales in early 2025, and is being extended to bauxite, copper and gold from 2026 (ESDM; VOA Indonesia, 2024; SMM, 2025; DDTC News, 2026). Buyers are smelters in industrial parks (IMIP, IWIP) buying at the HPM benchmark price.

## Stakeholders & Who Pays

Miners (~1,000+ nickel IUPs) do the paperwork; smelters and traders pay for ore and carry the risk of buying laundered tonnes; ESDM and the Finance Ministry audit via SIMBARA; surveyors (Sucofindo, Surveyor Indonesia) certify shipments; Kejaksaan/KPK prosecute; downstream, EV battery makers and EU regulators audit provenance. From 18 February 2027, EV and industrial batteries >2 kWh placed on the EU market need a Digital Battery Passport with third-party-verified due-diligence data covering nickel (EU Battery Regulation 2023/1542; MyProductPassport, 2025). Compliance budgets sit with smelters, battery-chain investors and exporters — parties already paying surveyors and auditors.

## Trust Breakdown (documented incidents)

- **"Dokumen terbang" (flying documents):** legal RKAB documents are rented out to launder ore from unlicensed pits into smelters; laundered ore trades 10–12.5% below official ore and evades royalty, tax and environmental funds. The practice was reported as rampant again in 2026, driven by the quota deficit (260–270 Mt quota vs ~294 Mt smelter demand); ESDM publicly denied RKAB policy caused it (Bloomberg Technoz, 2026). This is *after* SIMBARA became mandatory.
- **Antam Mandiodo case:** illegal ore sales from the Mandiodo block, Southeast Sulawesi, using fraudulent RKAB documents; state loss estimated at Rp 5.7 trillion (Kejaksaan Agung, 2023). Eight defendants sentenced April 2024, including former Minerba Director-General Ridwan Djamaludin (Kejaksaan; Tempo, 2024–2025).
- **Illegal exports:** KPK found 5.3 Mt of nickel ore shipped to China during 2020–June 2022 despite the export ban, worth ~Rp 14.5 trillion (US$963M), detected via BPS–China customs data discrepancy (KPK; Tempo/Indonesia Business Post, 2023).
- **Scale:** Bareskrim mapped 1,517 illegal mining (PETI) sites across 33 provinces in 2025 (Bisnis, Dec 2025). In February 2026, four Maluku Utara nickel miners were fined for mining outside license areas — one fined Rp 2.27 trillion for 234 ha (Mongabay Indonesia, 2026).

## Cost of the Problem

Named figures: Rp 5.7 trillion state loss in Mandiodo alone (Kejagung, 2023); US$963M of illegal exports 2020–22 (KPK, 2023); >Rp 21 trillion in state losses from illegal mining per APNI (Hukumonline, 2023); Rp 2.27 trillion single fine (Mongabay, 2026); legal miners lose sales to ore discounted 10–12.5% (Bloomberg Technoz, 2026). Aggregate annual leakage across commodities is claimed at Rp 300+ trillion by government statements (unverified). EU-compliance cost of failing traceability: exclusion from battery supply chains from 2027 (magnitude unverified).

## Existing Solutions (as of 2026-07)

- **Government:** SIMBARA (fiscal/transaction gatekeeping, 5 commodities by 2026), MODI/MOMS/e-RKAB (licensing, production reporting).
- **Global vendors:** Circulor (battery-passport traceability; partnerships with Talon Metals, Acculon/Rockwell — no verified Indonesian deployment found), RCS Global/SLR, Minespider. IRMA third-party mine audits are underway at some Indonesian facilities under carmaker pressure (Ford Conflict Minerals Report, 2024).
- **Indonesian:** Baliola (Mandala Chain, Bali) pitches blockchain mineral traceability and won Startup World Cup Indonesia (Baliola, 2025) — pre-traction. Surveyors (Sucofindo, Surveyor Indonesia) remain the incumbent verification layer.

## Why Insufficient

SIMBARA verifies that a shipment has valid documents and paid royalties; it does not verify that the ore physically came from the licensed pit — which is exactly the fraud (dokumen terbang persisted into 2026). Surveyor certificates are point-in-time, bribable, and not machine-verifiable downstream. Nothing links pit-level provenance (geolocation, license polygon, ESG data: deforestation, tailings, carbon intensity) to the shipment records that EU notified bodies must verify from 2027. Global vendors sit at the battery/OEM end and lack upstream Indonesian pit-level integration.

## Blockchain Test

Multi-org and adversarial: miners, smelters, surveyors and officials have all been convicted of colluding; foreign verifiers (EU notified bodies, OEMs) need proof independent of any Indonesian custodian — including the government whose own former DG was jailed. Tamper-evident, cryptographically chained custody records materially change behavior here. Domestic fiscal tracking, however, is already served by SIMBARA as a state-run single operator.

## Kill Test Verdict

1. Problem without blockchain? **YES** — fraud and EU compliance exist regardless. 2. PostgreSQL under one trusted operator? **NO** for the export-facing provenance layer: the trusted-operator candidate (government) is itself a documented fraud participant, and EU verifiers need custodian-independent proof. 3. Incumbent feature in 6 months? **NO** — requires pit-level integration, surveyor workflow and SIMBARA interfacing, though Circulor is the credible threat. 4. Standalone value? **YES** — mandated compliance spend plus quantified fraud losses. **SURVIVES**, with the caveat that SIMBARA expansion could absorb parts of the layer.

## Scores

- Severity 8 — multi-trillion-rupiah documented fraud, officials jailed, buyers exposed to laundered ore.
- Market 5 — plausible $50–250M Indonesia TAM for provenance/compliance software across ~1,000 IUPs and 50+ smelters (no verified TAM study; conservative).
- WTP 7 — miners/smelters already pay surveyors; EU due diligence is mandated spend from Feb 2027.
- Chain 7 — adversarial multi-org parties plus external verifiers needing custodian-independent proof.
- Urgency 8 — EU battery passport deadline Feb 2027 (~7 months out) plus fresh 2026 dokumen terbang scandal.
- Competition 5 — Circulor/RCS/Minespider global, Baliola local, SIMBARA governmental; none owns Indonesian pit-to-passport.
- Moat 6 — integration with SIMBARA/surveyors plus cross-org network effects once smelters require it.

**Weighted = 6.6**

## What Would Kill This Idea

SIMBARA adding geospatial pit-level provenance itself; EU accepting government attestations or paper audits as sufficient; Circulor landing IMIP/IWIP park-wide deals; smelters preferring the ambiguity that lets them buy discounted laundered ore (the buyer of provenance may be the fraud's beneficiary).

## Sources

- https://www.bloombergtechnoz.com/detail-news/109340/praktik-dokumen-terbang-marak-imbas-defisit-nikel-di-smelter (2026)
- https://www.bloombergtechnoz.com/detail-news/109604/esdm-bantah-isu-rkab-nikel-jadi-pemicu-praktik-dokumen-terbang (2026)
- https://story.kejaksaan.go.id/berita-utama/8-terdakwa-korupsi-tambang-nikel-pt-antam-tbk-divonis-windu-aji-sutanto-dihukum-8-tahun-penjara-dan-wajib-bayar-uang-pengganti-rp1358-m-118216-mvk.html (2024)
- https://indonesiabusinesspost.com/1045/Politics/kpk-discover-illegal-nickel-export-amounting-to-53-million-tons-to-china (2023)
- https://www.esdm.go.id/id/media-center/arsip-berita/simbara-tingkatkan-penerimaan-negara-dan-tata-kelola-minerba
- https://www.voaindonesia.com/a/pemerintah-luncurkan-simbara-untuk-nikel-dan-timah/7708089.html (2024)
- https://news.ddtc.co.id/berita/nasional/1814988/optimalkan-penerimaan-simbara-kini-cakup-5-komoditas-ini (2026)
- https://mongabay.co.id/2026/02/20/4-tambang-nikel-di-maluku-utara-kena-denda-bagaimana-pidananya/ (2026)
- https://ekonomi.bisnis.com/read/20251210/44/1935565/jejak-tambang-ilegal-di-indonesia-yang-kian-marak (2025)
- https://www.hukumonline.com/berita/a/10-usul-apni-soal-penambangan-ilegal-lt64070b6d8eeca/ (2023)
- https://myproductpassport.eu/blog/battery-passport-requirements-under-espr (2025)
- https://finance.yahoo.com/news/indonesia-shortens-mining-production-quotas-104901971.html (2025)
- https://www.metal.com/en/newscontent/103558390 (2025)
- https://www.baliola.io/enhancing-transparency-in-the-mining-supply-chain-with-blockchain (2025)
- https://www.sec.gov/Archives/edgar/data/37996/000003799624000108/ex1012023.htm (Ford, 2024)
