# Carbon Credits & Registries

## Problem & Current Workflow

A project developer (forestry, energy, waste) drafts a mitigation action document (DRAM), registers it on the national registry SRN-PPI (Kementerian Lingkungan Hidup), undergoes validation and verification by a KAN-accredited body, and receives SPE-GRK certificates (Sertifikat Pengurangan Emisi), which can then be listed on IDXCarbon (launched September 2023), sold bilaterally, or exported under Article 6 authorization. The framework was overhauled by Presidential Regulation 110/2025, which replaced Perpres 98/2021, and by Environment Minister Regulation 10/2026 creating SRUK (Carbon Unit Registry System) — all carbon trades and offsets must now be recorded in SRUK, which runs in parallel with SRN-PPI (SSEK, 2025; ARMA Law, 2026). Internationally, Indonesia and Verra signed a Mutual Recognition Agreement on 2 October 2025 allowing dual VCS + SRN-PPI registration, and forestry projects were cleared to issue credits again in 2025 after a roughly three-year regulatory freeze on foreign sales (Verra, 2025; Fastmarkets, 2025). So a single credit's life now touches: SRN-PPI, a verifier, possibly Verra, SRUK, and IDXCarbon — five record systems reconciled largely by hand.

## Stakeholders & Who Pays

Developers (Rimba Raya/InfiniteEARTH, Katingan, PLN subsidiaries, Pertamina) pay registration and verification costs; buyers are domestic emitters (90% of exchange buyers are local companies; IDX via Reccessary, 2025), banks, and foreign offtakers; KLH/BPLH regulates and can revoke; OJK supervises the exchange; verifiers audit; communities and concession holders dispute carbon rights. Startups (Fairatmos, CarbonEthics) monetize project origination services.

## Trust Breakdown (documented incidents, cited)

- **Rimba Raya (2024):** the Environment Ministry revoked the license of one of the world's largest REDD+ projects, citing unauthorized transfer of the permit to third parties, carbon transactions beyond the permit area including inside Tanjung Puting National Park, and unpaid state obligations. Verra suspended the proponent's registry account in May 2024; Rimba Raya had supplied ~6.84% of all Verra nature-based avoidance credits ever issued. A Jakarta administrative court then voided the revocation in July 2024 — leaving buyers holding credits whose legal basis flipped twice in one year (Carbon Streaming, 2024; S&P Global, 2024; Resilient LLP, 2024).
- **Verra context:** the Guardian/Die Zeit investigation (2023) alleging the large majority of Verra's rainforest avoidance credits were worthless triggered the global registry trust crisis that frames every Indonesian sale.
- **Fraud typologies acknowledged domestically:** sale of nonexistent credits or credits owned by someone else, falsified baseline data, and laundering risks are explicitly flagged in Indonesian legal commentary and by PPATK-adjacent analyses (Detik, 2024; Hukumonline, 2025).
- **Market paralysis as trust evidence:** IDXCarbon traded 8 tonnes in June 2025, a 98.5% collapse (IDNFinancials, 2025); in February 2026 monthly volume was 2,218 tCO2e worth Rp 164 million, with retirements of just 11 tCO2e, 153 participants, and 10 listed projects — nearly all PLN/Pertamina gas or geothermal plants, zero forestry (IDXCarbon Monthly Report, Feb 2026).

## Cost of the Problem

Cumulative IDXCarbon turnover reached only 1,599,326 tCO2e / Rp 77.95 billion (~US$4.8M) by 11 July 2025 (IDX via VOI, 2025); 2026 YTD through February was Rp 4.87 billion (IDXCarbon, 2026). IEEFA (2025) reported March–September 2025 transaction value of ~IDR 1 billion (US$72,621) and attributes stagnation to the hybrid pricing regime and unclear certification procedures. The three-year forestry freeze and the Rimba Raya whiplash imposed opportunity costs on the country's supply pipeline that no source has credibly quantified (unverified). Against this, 3.45 Mt of listed units sit unsold (IDXCarbon, Feb 2026).

## Existing Solutions (as of 2026-07, named)

Government: SRN-PPI and the new SRUK registry, IDXCarbon exchange. International standards: Verra (now with MRA), Gold Standard, Plan Vivo. Local startups: Fairatmos (US$4.5M seed, 2022; GoTo and TBS Energi backing), CarbonEthics (US$2.1M seed, Sep 2024, Intudo), Jejakin (corporate carbon tracking), Koltiva (agri traceability). Global MRV/ratings: Sylvera, BeZero, Pachama — none with verified Indonesian registry integration. Consultancies fill the reconciliation gap manually.

## Why Insufficient

Unit provenance across SRN-PPI, SRUK, Verra and IDXCarbon is reconciled administratively, which is precisely the double-counting surface the MRA tries to paper over. Buyer distrust is about project *quality and legal tenure* (whose forest, whose carbon rights, which permit area) — demonstrated by Rimba Raya — and about baseline integrity, not about ledger tampering. Supply is throttled by regulatory discretion, not record-keeping.

## Blockchain Test

Multiple organizations, yes — but the state has answered the neutrality question by mandate: Perpres 110/2025 and SRUK make the government registry the single authoritative record, and the Verra MRA defines reconciliation government-to-registry. A private tamper-evident layer cannot out-authority the state registry it would mirror, and buyers' actual trust deficit (baselines, tenure) is not a tamper-evidence problem.

## Kill Test Verdict

1. Problem without blockchain? YES — double counting and credit quality are real. 2. PostgreSQL under a single trusted operator? **YES — SRUK is that operator by law; Verra's crisis was governance, not database integrity. FAIL.** 3. Incumbent in 6 months? Partial — registries and rating agencies occupy the space; Fairatmos/CarbonEthics pivot easily. Weak pass at best. 4. Standalone economics? **NO — US$4.8M cumulative exchange turnover in 22 months and Rp 4.9 billion YTD 2026 cannot fund a company on any take-rate. FAIL.** **KILLED** on tests 2 and 4.

## Scores

- Severity 6 — a flagship project suspended and de-licensed, national reputation exposure; but losses concentrated on few parties, not recurring line items for most firms.
- Market 4 — exchange turnover is single-digit US$ millions; project-development and MRV services plausibly $50–100M with Article 6 upside (no verified TAM).
- WTP 4 — developers pay verifiers because they must; buyers are scarce and price-sensitive; procurement slow.
- Chain 5 — multi-org, but a legally mandated single registry (SRUK) is the accepted intermediary.
- Urgency 6 — fresh regulatory overhaul (Perpres 110/2025, SRUK 2026) and Article 6 window create pressure, no hard private-sector deadline.
- Competition 4 — funded local startups, entrenched international standards, and two government registries.
- Moat 4 — integration lock-in possible with verifiers; standard-setting position is occupied by the state.

**Weighted = 4.8**

## What Would Kill This Idea

Already killed: the state monopolized the registry layer; demonstrated transaction values are two orders of magnitude too small; and the binding constraints (land tenure, baseline credibility, regulatory discretion) are not software problems. It would revive only if SRUK failed publicly while export demand under Article 6/CORSIA surged, forcing buyers to demand independent proof.

## Sources

- IDXCarbon Monthly Report February 2026 — https://www.idxcarbon.co.id/document/share/161/caf49365-34e4-4582-8cd3-bb660ebb126c
- https://voi.id/en/economy/495269 (2025)
- https://www.idnfinancials.com/news/55927/carbon-trading-plunges-98-5-in-june-2025-idx-chief-responds (2025)
- https://ieefa.org/resources/two-years-after-launch-indonesias-carbon-market-struggles-find-momentum (2025)
- https://verra.org/verra-and-indonesia-sign-milestone-agreement-to-advance-carbon-markets/ (2025)
- https://ssek.com/blog/indonesia-introduces-new-carbon-trading-framework-under-presidential-regulation-no-110-of-2025/ (2025)
- https://www.arma-law.com/news-event/newsflash/wiring-up-the-carbon-registry-minister-of-environment-bplh-regulation-no-10-of-2026-on-the-carbon-unit-registry-system-sruk (2026)
- https://www.carbonstreaming.com/news/carbon-streaming-announces-update-on-the-status-of-the-rimba-raya-verra-account-and-concession-license/ (2024)
- https://resilientllp.com/2024/07/17/jakarta-court-declares-revocation-of-rimba-raya-forest-license-void/ (2024)
- https://www.fastmarkets.com/insights/indonesia-clears-forestry-projects-to-issue-carbon-credits-after-three-year-freeze/ (2025)
- https://www.dealstreetasia.com/stories/fairatmos-seed-round-319769 (2022)
- https://technode.global/2024/09/18/indonesias-carbonethics-bags-2-1m-seed-round-seed-round-led-by-intudo-ventures/ (2024)
- https://news.detik.com/berita/d-7340546/modus-dan-contoh-kasus-kejahatan-dalam-perdagangan-karbon (2024)
- https://www.hukumonline.com/berita/a/menyelisik-kejahatan-karbon--dari-fraud-kredit-hingga-money-laundering-lt68f0cf695c695/ (2025)
- https://www.reccessary.com/en/news/domestic-demand-dominates-indonesia-carbon-market (2025)
