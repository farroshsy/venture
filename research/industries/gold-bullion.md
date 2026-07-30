# Gold Bullion — Provenance & Custody

## Problem & Current Workflow
Retail: a buyer purchases an Antam Logam Mulia bar at Butik LM, Pegadaian, banks, or marketplaces; the bar ships in packaging with a CertiEye certificate, verified by scanning a QR in Antam's CertiEye app ("AUTHENTICATED" screen). Resale price depends on that certificate; secondary-market buyers must trust packaging plus app. Digital gold: platforms sell gram balances that must be 1:1 physically backed, with trades reported to the futures exchange (ICDX) and clearing (KBI) under Bappebti rules — most recently Peraturan Bappebti No. 3/2025 on the digital physical gold market; roughly five platforms hold licences, including Treasury, Pluang, IndoGold and Lakuemas (Bisnis, 2023). Bullion banking: under POJK 17/2024, OJK licensed Pegadaian (23 Dec 2024) and Bank Syariah Indonesia (12 Feb 2025) to run bullion services — gold deposits, financing, corporate custody, trading — launched by the President on 26 Feb 2025 (OJK, 2025). BSI reported 22.5 tonnes under management after one year (BSI, 2026). Verification of what actually sits in vaults rests on periodic reports to the exchange/regulator and on the operators' own systems.

## Stakeholders & Who Pays
Retail savers and investors bear counterfeit and insolvency risk; Antam (refinery, LBMA-accredited) issues brand and certificates; Pegadaian/BSI custody and finance; digital platforms intermediate; Bappebti (digital gold trading) and OJK (bullion banks) split supervision; Kejaksaan Agung and the corruption courts handle disputes. Budget owners: bullion banks and platforms (compliance and trust are existential for deposit gathering), Antam (brand protection), the state (Rp levies on branding services).

## Trust Breakdown (documented incidents)
- The 109-tonne Antam case: from 2010 to 2021/22, successive heads of Antam's precious-metals unit (UBPP LM) illegally attached the official Antam brand to privately sourced gold — 109 tonnes entered the market outside official issuance. Thirteen defendants; in 2025 the Jakarta Tipikor court sentenced six former UBPP LM executives to 8 years each with Rp750 million fines, and seven private counterparts to 6-9 years (Antara, 2025; Kompas.id, 2025). Indictments put state losses at Rp3.31 trillion (Kompas, 2025); Kejagung separately estimated ~Rp1 trillion and stressed the gold is metallurgically genuine but illegally branded (Tempo, 2025). Appeals trimmed some sentences (e.g., James Tamponawas to 7 years — Suara, Aug 2025).
- A related gold-sale manipulation case saw a former Antam official's sentence increased to 16 years on appeal (Kompas, Feb 2025).
- Counterfeit retail: fake Antam certificates and bars circulate in secondary markets; Pegadaian and Antam publish standing advisories on certificate fraud and CertiEye checking (Pegadaian, undated advisory; Tempo, 2024-2025 explainers). No verified aggregate loss figure exists (unverified).
- Digital gold: PT Tamasia Global Sharia operated unlicensed and in Jan 2023 forced users to sell balances at ~Rp800,000/gram, far below market; Bappebti confirmed it never held a licence (Tempo; Bisnis, 2023).

## Cost of the Problem
Rp3.31 trillion state loss in the 109t indictments (2024-25 court documents via Kompas); Kejagung's ~Rp1 trillion alternative estimate (Tempo, 2025). The scandal triggered a national "is my Antam bar real?" panic in 2024-25 (Tempo explainer traffic, bank clarifications) — a direct trust tax on the government's gold-monetization agenda. Retail counterfeit losses and secondary-market discounting: unquantified (unverified). Bullion banks' compliance/custody assurance spend: unquantified (unverified).

## Existing Solutions (as of 2026-07)
- Antam CertiEye: QR-based certificate authentication (issuer-run).
- LBMA/WGC Gold Bar Integrity programme: the GBI Database built by aXedras on R3 Corda went live January 2025, collecting bar provenance from refineries and London vaults; refiner digitization ~85% by mid-2025 (LBMA, 2025). Antam, as an LBMA Good Delivery refiner, sits inside this wholesale perimeter.
- Bappebti/ICDX/KBI regime: 1:1 physical-backing reporting for digital gold (Bappebti PerBa 3/2025; Bappebti statements via Kontan).
- OJK bullion regime: POJK 17/2024 licensing, with OJK inviting more LJK applicants (Infobanknews, 2025).
- Pegadaian corporate gold custody; BSI gold ecosystem. No Indonesian startup offering custodian-independent bar provenance or continuous proof-of-reserves for gold was found (searched July 2026).

## Why Insufficient
CertiEye authenticates the certificate, and the 109t case proves the issuer's own insiders were the attack vector — issuer-run verification cannot prove issuer integrity. The LBMA GBI database covers the wholesale London/refinery chain, not Indonesian retail circulation, pawn custody, or domestic vaults. Exchange reporting for digital gold is periodic and non-public: customers of Tamasia discovered the backing gap only at collapse. External verifiers — courts, OJK, and millions of retail holders — currently have no proof of provenance or reserves that does not route through the very custodian in question.

## Blockchain Test
Adversarial parties (issuer insiders vs. state, platforms vs. depositors) plus external verifiers (courts convicting on brand provenance, OJK, foreign LBMA counterparties) needing custodian-independent evidence: this matches the strong case for tamper-evident shared records. The neutral-party candidates (Antam, exchange, regulator) have each been the failure point or lack operational registries.

## Kill Test Verdict
1. Problem without blockchain: YES — counterfeits, insider branding, unbacked balances. 2. Single-operator PostgreSQL: NO — the operator/custodian is precisely who failed (Antam insiders, Tamasia); proof must be independent of any one custodian. 3. Incumbent six-month feature: CertiEye exists and failed the insider threat; aXedras/LBMA could extend but Indonesian retail-custody coverage in six months is unrealistic — NO, with risk noted. 4. Standalone value: bullion-bank ecosystem, mandated 1:1 backing, and brand-protection budgets support it — YES, though thinner than it looks. VERDICT: SURVIVES (watch test 3).

## Scores
- Severity 8 — 109t insider scandal with 2025 convictions and Rp3.31T alleged losses; trust is existential for bullion deposit-taking.
- Market 5 — bullion banks, ~5 licensed platforms, refiners, pawn network; assurance-tech TAM plausibly $50-250M (unverified basis).
- WTP 6 — regulated players already pay for mandated reporting/audits; loss-avoidance is quantified by the scandal, but buyers are few.
- Chain 7 — no accepted neutral registry; courts/regulators/buyers need custodian-independent proof; issuer self-certification discredited.
- Urgency 6 — fresh verdicts (2025) and a presidential bullion-bank push (Feb 2025) create momentum, but no compliance deadline mandates provenance tech.
- Competition 4 — LBMA GBI/aXedras live upstream, CertiEye at retail, ICDX reporting entrenched; whitespace is only the domestic custody/retail layer.
- Moat 6 — a registry spanning refiner, custodians, and platforms would carry cross-org switching costs.
- Weighted: 6.2

## What Would Kill This Idea
Antam plugging domestic issuance into the LBMA GBI database and OJK mandating a centralized reserve-reporting portal would close the gap top-down. Few buyers (two bullion banks, five platforms, one refiner) means one lost anchor account kills the network.

## Sources
- https://www.tempo.co/hukum/kejagung-pastikan-109-ton-emas-antam-asli-berikut-daftar-13-nama-tersangka-di-kasus-ini-1219633
- https://www.antaranews.com/berita/4864397/tujuh-pihak-swasta-divonis-6-9-tahun-penjara-di-kasus-korupsi-emas
- https://www.kompas.com/jawa-barat/read/2025/03/12/145656588/membongkar-fakta-kasus-korupsi-pt-antam-kerugian-negara-rp-33-t-dan
- https://bertuahpos.com/hukum/6-mantan-pejabat-antam-divonis-8-tahun-penjara-dalam-kasus-emas-ilegal-109-ton.html
- https://www.suara.com/news/2025/08/09/153557/korupsi-emas-antam-pt-dki-jakarta-korting-hukuman-james-tamponawas-jadi-7-tahun-bui
- https://nasional.kompas.com/read/2025/02/27/15013281/kasus-manipulasi-pembelian-emas-hukuman-eks-pejabat-antam-diperberat-jadi-16
- https://www.tempo.co/ekonomi/warganet-keluhkan-tamasia-bappebti-sebut-perusahaan-jual-emas-itu-tidak-berizin-227819
- https://finansial.bisnis.com/read/20230119/563/1619708/heboh-tamasia-ini-5-daftar-platform-jual-beli-emas-digital-yang-sudah-berizin-bappebti
- https://ojk.go.id/id/berita-dan-kegiatan/siaran-pers/Pages/Kegiatan-Usaha-Bulion-Layanan-Bank-Emas-di-Indonesia--.aspx
- https://www.bankbsi.co.id/news-update/berita/setahun-bullion-bank-bsi-perkuat-ekosistem-emas-nasional-dengan-kelolaan-capai-225-ton
- https://www.lbma.org.uk/gold-bar-integrity-ecosystem
- https://www.axedras.com/milestones
- https://pegadaian.co.id/artikel/emas/sertifikat-emas-antam-palsu
- https://siplawfirm.id/tabungan-emas-digital/?lang=id
