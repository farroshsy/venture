# Continuous Insider-Fraud Audit for Rural Banks (BPR/BPRS)

## Problem & How Truth Is Established Today
A Bank Perekonomian Rakyat (BPR/BPRS) records loans, deposits and disbursements in its own core-banking system, run by the same Direksi (management) that periodically commits the fraud — fictitious loans, related-party lending dressed as arm's-length credit, unrecorded deposits. Internal control nominally sits with a separate Dewan Komisaris (Board of Commissioners) and, for BUMD-owned BPRs, the regional-government shareholder; external truth-testing is OJK's periodic on-site examination plus, since 2021, the OJK-BOX (OBOX) portal, a supervisory-technology (suptech) system OJK uses to ingest BPR transactional data and claims to flag "anomalies and deviations from expected norms" in real time (OJK/merdeka.com, 2021). POJK 12/2024 (effective 31 October 2024) additionally obliges every financial institution, including all BPR/BPRS, to run a four-pillar anti-fraud strategy — prevention, detection, investigation/reporting/sanctions, monitoring — and to report both the strategy and any significant fraud incident to OJK. Despite both OBOX and POJK 12/2024, fraud continued to surface through mid-2026 largely via prosecutorial investigation or outside reporting, not internal detection.

## Buyer & Who Pays
The buyer is the BPR's own institution — specifically its compliance/internal-audit function and its Komisaris or, for BUMD-owned BPRs, the regional-government (Pemda) shareholder whose capital is wiped out on liquidation. This diverges from a single-owner-operator BPR (where Direksi = Komisaris = owner), which is largely unreachable, but that segment skews toward the smallest, most-consolidated-away institutions. POJK 12/2024 converts "detection capability" from optional to a compliance line-item, giving the institution as a whole — not just the honest fraction — budget-owner motive independent of any individual's complicity.

## Documented Failures (cited)
- LPS liquidated 23 of 26 problem BPR/BPRS handled in 2024–2025 (Antara, cited via multiple 2025 outlets); cumulative liquidations reached 34 since 2024 as of May 2026 (CNBC Indonesia, 8 May 2026), and 154 BPR/BPRS liquidated by LPS since its founding, as of May 2026. LPS attributes closures mainly to fictitious credit and fraud, driven by weak governance and internal control (Pikiran Rakyat, 2025).
- BPR Bank Jepara Artha: KPK named 5 suspects — including the Direktur Utama, Direktur Bisnis dan Operasional, Kepala Divisi Bisnis, Kepala Bagian Kredit and an external party — over 40 fictitious loans worth Rp263.6 billion disbursed in 2022–2024 (KPK press release, kpk.go.id).
- BPR Panca Dana: ex-Direktur Utama charged with initiating fictitious loans to 646 debtors totaling Rp32.43 billion as of August 2024, to disguise the NPL ratio (Sindikat Post/OJK, 2024).
- BPR Purworejo: a Rp41 billion fictitious-credit scandal with 6 named suspects surfaced May 2026 (jejakkasus.id).
- BPR Kerta Raharja Gemilang (Tangerang): Rp19.8 billion in credit to internal management/related parties, alleged financial-statement manipulation, under prosecutorial review as of July 2026 (tangerangekspres.disway.id, bantenekspres.co.id).

## Bottom-Up ARR Path
Population: ~1,100–1,345 BPR/BPRS as of 2025–26, actively shrinking via consolidation (1,345 in March 2025 per IARFC Indonesia; 142 "efektif konsolidasi" by March 2026 per Antara; 57 merged into 18 by April 2026 with 200+ more in process per Bloomberg Technoz; 7 licenses revoked in 2026 alone per CNBC Indonesia). ACV comparable: USSI's IBS/IBSS core-banking pricing is Rp35M implementation + Rp500k/month for conventional BPR, Rp125M + Rp2.5M/month for BPRS (USSI PGS, 2026) — i.e., institutions already pay Rp6M–30M/year for adjacent software. A continuous-audit add-on priced at Rp20M–50M/year is a plausible comparable step-up. Reaching $1M ARR needs roughly 300–500 institutions at that price band — a large fraction of the addressable (multi-shareholder/Pemda-owned) subset, reachable via the Perbarindo association channel, OJK's POJK 12/2024 compliance deadline as a forcing function, and reseller partnerships with incumbent core-banking vendors. Plausible but not proven with a named first-ten-customer list. Evidence quality: mixed (population and ACV are sourced; conversion/penetration is inferred).

## Existing Solutions (as of mid-2026)
OJK's own OBOX/SIPBPR/Early-Warning-System/EDW-BPR (regulator-side, since 2021 for OBOX); SiPEDULI (BPR self-assessment on consumer protection, 343 questions, 2025 deadline). Core-banking vendors — PT USSI (1,730+ institutions), Sinergi Prakarsa Utama/CorSys, Yasa Accounting, Invelli, BPRKu, Mars Banking — sell record-keeping and reporting, not independent continuous audit. Global fraud-detection platforms (Fraudio, SEON, Bureau) target broader digital banking/fintech and were not found localized to BPR-tier institutions. No dedicated Indonesian vendor selling continuous insider-fraud audit specifically to BPR management was found.

## Kill Tests
- **K1 Data access — PASS.** The addressable buyer (Komisaris/Pemda-owner via compliance function) has statutory oversight standing and legal access to the BPR's own core-banking records; POJK 12/2024 makes detection capability a compliance obligation of the institution, not a favor to the fraudster.
- **K2 Oracle bound — PASS.** Fictitious loans and unrecorded deposits leave a digital trail in the core-banking ledger, disbursement logs and KYC records — fully inferable, not physical/off-system.
- **K3 Absorption — PASS (not killed).** OBOX is regulator-facing (feeds OJK's own supervision), not a BPR-management-facing internal continuous-audit tool, and fraud losses continued through 2026 despite OBOX's five years of operation — evidence against, not for, absorption.
- **K4 Bootstrap bar — PASS (plausible).** ~300–500 customers at Rp20M–50M/year ACV against a comparable Indonesian spend baseline (USSI pricing) is a credible, evidenced path, though penetration assumptions are not yet validated with named customers.

## Scores
- Severity 9 — 34 liquidations since 2024, Rp263.6B/Rp41B/Rp32.43B/Rp19.8B named fraud cases, criminal prosecutions.
- Revenue 6 — named segment, ACV evidenced by Indonesian core-banking comparable, channel identified; reachable count is large relative to a 500-customer soft cap.
- WTP 7 — POJK 12/2024 creates a named, mandatory budget line; institutions already spend on adjacent core-banking software.
- Data 5 — per-customer core-banking integration, replicable; cross-BPR fraud-typology aggregation is a future upside, not yet built.
- Absorption 5 — OBOX is a plausible eventual absorber but is regulator-side and demonstrably incomplete.
- Competition 7 — only global, non-localized fraud platforms found; no dedicated Indonesian BPR-focused vendor.
- Moat 6 — cross-institution fraud-pattern network effects are plausible as the customer base grows.
- Weighted: 6.6

## Upside Flag
POJK 12/2024's four-pillar mandate applies to all Lembaga Jasa Keuangan, not just BPR — the same detection engine could extend to multifinance companies, pawnshops (pegadaian) and insurers under the same regulation (secondary evidence, not scored).

## What Would Kill This
Evidence that OJK is building a BPR-management-facing (not just regulator-facing) continuous-audit product under a funded 12-month mandate; or evidence that POJK 12/2024 compliance is being satisfied for free via an OJK-provided tool rather than institution-procured software.

## Sources
- https://www.antaranews.com/berita/5217661/lps-tangani-26-bank-bermasalah-dalam-setahun-dan-likuidasi-23-bank
- https://www.cnbcindonesia.com/market/20260508215713-17-733619/daftar-bpr-bprs-tutup-tambah-lagi-total-ada-34-bank-ini-namanya
- https://www.pikiran-rakyat.com/ekonomi/pr-0110241956/lps-ungkap-penyebab-banyak-bpr-bprs-ditutup-mayoritas-sudah-tak-bisa-diselamatkan
- https://www.kpk.go.id/id/ruang-informasi/berita/kpk-tahan-lima-tersangka-korupsi-kredit-fiktif-pada-pt-bpr-bank-jepara-artha-ta-2022-2024
- https://www.sindikatpost.com/hukum-kriminal/782386160/ojk-seret-tiga-tersangka-kasus-kredit-fiktif-dan-penilapan-deposito-bpr-panca-dana-ke-kejaksaan
- https://www.jejakkasus.id/2026/05/skandal-kredit-fiktif-rp41-miliar-di.html
- https://tangerangekspres.disway.id/tangerang-hub/read/39029/kumpulkan-bukti-kasus-kredit-fiktif-dan-fraud-bpr-kejari-kabupaten-tangerang-periksa-saksi-pelapor
- https://ojk.go.id/en/regulasi/Documents/Pages/12-Tahun-2024-Penerapan-Strategi-Anti-Fraud-bagi-Lembaga-Jasa-Keuangan/POJK%2012%20Tahun%202024%20Penerapan%20Strategi%20Anti%20Fraud%20bagi%20Lembaga%20Jasa%20Keuangan.pdf
- https://www.merdeka.com/perbankan/lewat-obox-pengawasan-bpr-dan-bprs-kini-berbasis-teknologi.html
- https://iarfcindonesia.com/news/jumlah-bpr-terus-menurun-ojk-catat-ada-1-345-bank-rakyat-hingga-maret-2025
- https://www.antaranews.com/berita/5485290/ojk-142-bpr-bprs-telah-efektif-konsolidasi-per-maret-2026
- https://www.bloombergtechnoz.com/detail-news/109189/ojk-57-bpr-sudah-merger-pada-2026-200-lebih-masih-berproses
- https://ussipgs.com/pricing/super-package/
