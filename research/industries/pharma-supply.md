# Pharma Track & Trace (pharma-supply)

## Problem & Current Workflow
Indonesia's drug supply chain runs manufacturer → licensed distributor (PBF) → pharmacy/hospital, governed by BPOM. Every product needs a marketing authorization (NIE); distributors need CDOB (good distribution practice) certification; hospital purchasing for JKN runs through LKPP's e-katalog, whose price-suppression dynamics squeeze margins and are widely blamed for grey-channel sourcing (unverified link).

Serialization is already regulated. PerBPOM 33/2018, revised by PerBPOM 22/2022, mandates 2D barcodes in two tiers: an *identification* barcode (NIE + product identity) for OTC, traditional medicine, supplements, cosmetics and processed food, effective 7 December 2023; and an *authentication* barcode (GS1 DataMatrix carrying GTIN, NIE, batch, expiry, serial number) with reporting of receipt/dispatch/return events into BPOM's Track and Trace Anti-Counterfeit system (TTAC, ttac.pom.go.id). Authentication deadlines: narcotics/psychotropics by 7 December 2025 (now in force), all prescription drugs including biologics by 7 December 2027 (rfxcel regulatory summary, 2025; PerBPOM 22/2022). Consumers and pharmacists can scan codes via BPOM Mobile. BPOM keeps tuning the regime (Keputusan Kepala BPOM 595/2025 on the e-labeling pilot).

## Stakeholders & Who Pays
Manufacturers (Kimia Farma, Kalbe, Dexa, multinationals) pay for serialization lines and TTAC reporting; PBF distributors pay for scanning/aggregation; pharmacies and hospitals do the work of verification; BPOM audits and prosecutes with Polri; Kemenkes/BPJS pay for drugs via e-katalog and bear the public-health cost. Patients bear harm but pay nothing for verification. Disputes arise between BPOM and industry over compliance timelines, and between principals and distributors over diverted or returned stock.

## Trust Breakdown (documented incidents)
- **Vaksin palsu, 2016** — Bareskrim raided a fake-vaccine ring (Pondok Aren, 22 June 2016); the Health Minister named 14 hospitals and 8 midwives/clinics that administered fake vaccines; roughly 20–25 suspects were charged (Hukumonline; Detik, 2016). The defining proof that counterfeits penetrated the *legal* chain.
- **Illegal online channel, 2025** — BPOM reported 197,725 links selling illegal drugs/food during 2025 with claimed "potential economic value" of Rp 49.82 trillion (BPOM, 2025; methodology for the valuation is opaque — treat as an upper-bound agency claim). 14,787 takedown recommendations 2022–Sept 2025 (BPOM).
- **Illegal warehouse, Oct 2025** — BPOM and Polda Metro Jaya seized an illegal pharma warehouse in West Jakarta, evidence valued Rp 2.74 billion including illegal propofol (BPOM, 2025).
- **Recurring counterfeits, 2025–2026** — BPOM named 8 frequently counterfeited drugs (Ponstan, Tramadol, etc.) (Kompas, Feb 2026). Casework: 107 cases (2023), 120 (2024), 76 through Sept 2025 (BPOM).

## Cost of the Problem
Indonesia's pharma market: IDR 176.3 trillion (~USD 11 billion) projected for 2025 (Fitch Ratings, cited by Asian Insiders, 2025). Counterfeit/illegal-channel losses: no credible verified annual figure; BPOM's Rp 49.82 trillion "potential value" (2025) is a link-count extrapolation, not measured sales. Serialization compliance cost per manufacturer (lines, software, TTAC integration) is real mandated spend but no Indonesia-wide total is published (unverified). Harm costs (fake vaccines, propofol) are severe but unquantified.

## Existing Solutions (as of 2026-07)
- **Government:** BPOM TTAC (central serialization repository), BPOM Mobile verification app, e-katalog procurement records.
- **Global serialization vendors actively selling Indonesia compliance:** TraceLink (dedicated Indonesia compliance product), Antares Vision/rfxcel, Utrace, LSPedia, Jekson Vision, plus SAP ATTP inside multinationals.
- **Local/regional integrators:** Sun Teknovation (offline TTAC serialization up to 220 cartons/min), WINS (TTAC connector). Pharmacy SaaS (Farmacare) rides the compliance wave downstream.

## Why Insufficient
The gap is not record integrity — it is coverage and enforcement. TTAC covers the legal chain; the counterfeit economy lives in unserialized online marketplaces and informal resellers, where no barcode regime reaches. Downstream scanning discipline at pharmacies and consumer verification adoption are weak (unverified). None of this is a database-trust failure: BPOM is an accepted, court-recognized single source of truth.

## Blockchain Test
Adversaries exist (counterfeiters), but the verifier everyone accepts is the regulator itself. TTAC is precisely a central database under a single trusted operator, mandated by law; manufacturers, distributors, courts and consumers all defer to it. Tamper-evidence of supply-chain records is not the failing link — physical product substitution outside the recorded chain is. Chain necessity is low.

## Kill Test Verdict — KILLED
1. Problem survives without blockchain? **Yes** (counterfeits are physical). Pass.
2. Would PostgreSQL under a single trusted operator solve it? **Yes — it already exists (TTAC/BPOM).** Fail.
3. Could an incumbent ship it in 6 months? **Effectively already shipped** — TraceLink, Antares Vision, Utrace, LSPedia sell Indonesia compliance today. Fail.
4. Standalone company value? Compliance spend exists but is being captured by entrenched vendors. Marginal.

## Scores
- Severity 7 — documented scandals (2016 vaccines) and recurring enforcement caseload, but day-to-day losses for legal-chain players are contained.
- Market 5 — serialization/compliance software TAM is a thin slice of the USD 11B drug market; no verified figure, plausibly $50–250M cumulative.
- WTP 7 — mandated compliance spend with hard deadlines, but budget owners are already paying incumbent vendors.
- Chain 3 — accepted trusted intermediary (BPOM) with a mandated central repository.
- Urgency 7 — Dec 2025 deadline in force, Dec 2027 deadline inside 24 months.
- Competition 3 — multiple funded global incumbents with Indonesia-specific products and traction.
- Moat 3 — a new entrant's connector is a copyable feature.
- **Weighted: 5.2**

## What Would Kill This Idea
Already killed: the trusted-operator registry exists and is law; the competitive space is occupied by global serialization vendors; the residual counterfeit problem is physical enforcement, which software of any architecture does not solve.

## Sources
- https://ttac.pom.go.id/ (BPOM TTAC)
- https://www.pom.go.id/berita/bersama-lindungi-masyarakat-indonesia-melalui-penerapan-2d-barcode
- https://rfxcel.com/indonesia-track-trace-requirements-bpom/ (deadlines: Dec 2023 / Dec 2025 / Dec 2027)
- https://www.farmacare.id/wajib-tahu-regulasi-2d-barcode-bpom-buat-rantai-pasok-obat-makin-aman (PerBPOM 22/2022 vs 33/2018)
- https://www.hukumonline.com/berita/a/ini-14-rumah-sakit-dan-8-bidan-pengguna-vaksin-palsu-lt57876bdb6f2a2/ (2016)
- https://news.detik.com/berita/d-3383169/gempar-peredaran-vaksin-palsu (2016)
- https://www.infonasional.com/bpom-temukan-penjualan-obat-ilegal-2025 (197,725 links, Rp 49.82T claim)
- https://www.pom.go.id/hot-issue/temuan-obat-palsu ; https://www.kompas.com/tren/read/2026/02/05/133000465/bpom-ungkap-8-obat-yang-sering-ditemukan-palsu-di-indonesia-ada-ponstan (2026)
- https://www.tracelink.com/products/product-orchestration/country-compliance/indonesia-compliance ; https://utracesolutions.com/regulations/indonesia/pharma ; https://www.lspedia.com/regulation/indonesia ; https://www.sunteknovation.com/offline-track-and-trace-for-indonesia
- https://asianinsiders.com/2025/01/28/indonesian-pharmaceutical-industry-2025-outlook/ (Fitch IDR 176.3T)
