# Foreign-Facing Indonesian Company Verification (KYB)

Slug: `indonesia-kyb-verification` | Mechanism: credential verification

## Problem & How Truth Is Established Today

A foreign bank, trade counterparty, or investor verifying an Indonesian company: (1) collects the akta pendirian, SK Kemenkumham, NIB, NPWP from the counterparty; (2) confirms registration against Ditjen AHU (Kemenkumham's SABH) — AHU Online sells extracts (Profil Terakhir Rp50,000, Profil Lengkap Rp500,000) on an Indonesian-language, PNBP-payment-rail portal foreign teams usually can't use directly, so they buy via intermediaries (local counsel, Cekindo/InCorp, AsiaVerify); (3) for cross-border legal force, routes through Kemenkumham's Hague apostille (acceded 5 Oct 2021), Rp150,000, 3-5 days, QR-verifiable at apostille.ahu.go.id; (4) checks beneficial ownership — partially public via AHU since 1 Jul 2022, full dataset only via government-to-government MLA/FIU; (5) screens sanctions/PEP via LSEG World-Check or SWIFT KYC Registry. The registry does not independently verify notary-filed data — deeds are self-declared and accepted unless later contested.

## Buyer & Who Pays

Foreign side (the buyer): correspondent-bank compliance/trade-finance desks, export credit agencies, credit insurers, foreign law firms, KYC utilities. Indonesian side (non-paying, structurally implicated): the company being verified (pays its own fees), notaries as statutory gatekeepers, Ditjen AHU (collects PNBP, not the verifier's vendor). Existing WTP for enhanced due diligence reports is $500-5,000/report through law firms and vendors (pattern consistent across Cekindo/Proximal-type providers; exact figures not published on public pricing pages — evidence quality: mixed).

## Documented Failures

- Notary Adi Pinem, Medan, prosecuted 2025 (prosecutors sought 2 years): two deeds he produced were never registered in SABH and contradicted the official record, per Ministry of Law expert testimony; victim PT Permata Kharisma Indah suffered litigation costs and downstream share-purchaser liability risk (ARN24, Jun 2025).
- PT BGAM, Jakarta: directors reported an alleged forged deed that changed the shareholder structure without original-shareholder approval, implicating a notary; reported to Polda Metro Jaya 3 Jul 2026 after documents deposited for a Bekasi land-licensing matter were allegedly never returned (Metronewstv/Liputan4, Jul 2026).
- Kemenkumham blocked/revoked SK for companies affiliated with online-gambling networks that had already passed formation formalities — formal registration alone did not certify legitimacy (Antara, 2024).
- Permenkumham 2/2025 added BO verification duties and a 30 Jun 2025 compliance deadline precisely because prior BO filings were self-declared and unverified (AHP client alert, 2025; Open Ownership).
- BIS: active correspondent-banking relationships fell ~25% globally since 2011, steepest in developing economies (BIS, 2020) — Indonesia-specific figures (unverified).

## Bottom-Up ARR Path

Named segment: correspondent-bank trade-finance/compliance desks and EDD/KYC-utility providers already serving them. Pricing comparables: AsiaVerify's $249 KYB/KYC/UBO credit pack plus per-investigation UBO pricing (AsiaVerify portal, 2026); EDD reports at $500-5,000 (hint, pattern-consistent with Cekindo/Proximal-type fixed-price EDD offers). Wedge: a specialized *forgery/anomaly-monitoring* layer (deed-history diffing against SABH, shareholder-change alerts, notary cross-reference) sold as a supplement to existing KYB checks, not a replacement for AHU/apostille. Illustrative path: 150-300 accounts (compliance desks, EDD shops, trade-finance fintechs) at $3,000-5,000/yr ≈ $0.6-1.5M ARR. Reachability: same channel AsiaVerify/Cekindo already sell through (compliance conferences, correspondent-bank compliance teams, EDD resellers). Evidence quality: **mixed** — segment and general EDD price band evidenced; ACV for the forgery-monitoring add-on is inferred, not observed.

## Existing Solutions (mid-2026)

State rails (functioning, accepted by both sides): AHU Online paid extracts; e-apostille with public QR verification; partial public BO search; OSS/NIB lookup. Substantive-verification hardening for SABH change filings (directors, share transfers, shareholder renames) became mandatory 27 Oct 2025, adding a ~14-day shareholder-email-confirmation-plus-document-review step (Ditjen AHU/Prolegal/Hukumonline, 2025-2026). Commercial: AsiaVerify ("Enhanced Indonesia KYB" reports, LITE tier, English, APAC-focused); Moody's Orbis/Bureau van Dijk; Dun & Bradstreet; LSEG World-Check/Due Diligence; SWIFT KYC Registry; local shops Cekindo/InCorp, ILA Global, companyhouse.id, Proximal Consulting (fixed-price EDD, price undisclosed). Indonesia joined FATF as a full member (Oct 2023) and is tightening BO verification via Permenkumham 2/2025.

## Kill Tests

- **K1 Data access — PASS.** AHU extracts and apostille QR verification are purchasable by any party without cooperation from the company being evaluated; commercial vendors already resell this.
- **K2 Oracle bound — PASS.** Both failures (Adi Pinem, PT BGAM) were identified by cross-referencing the disputed deed against the authoritative SABH record — inferable from registry/deed-history comparison, not fabricated-at-source or off-system-only.
- **K3 Absorption — PASS.** The Oct 2025 rule hardens *future* SABH filings (real, cited, already-live) but builds no foreign-facing API, no historical deed-chain audit, no continuous monitoring — the residual surface (anomaly/forgery-risk monitoring for foreign buyers) has no cited 12-month roadmap.
- **K4 Bootstrap Bar — PASS (mixed evidence).** Named segment and general EDD/KYB price band evidenced by active competitors (AsiaVerify, Cekindo, Proximal); the differentiated product's ACV is inferred.

**Survives: yes.**

## Scores

- Severity 6 — real prosecuted/reported forgery cases with litigation and ownership-hijack consequences, plus a systemic de-risking trend, but no single scandal quantified at large scale traceable to this exact failure.
- Revenue quality 6 — named segment, general ACV band evidenced by comparable Indonesian/regional EDD and KYB spend; exact ACV for the differentiated wedge is inferred.
- WTP 7 — named budget owners (correspondent-bank compliance, EDD providers) already pay for an inferior/partial alternative (generic KYB reports that do not flag deed-history anomalies), cited via AsiaVerify/Cekindo/Proximal's existence and general EDD pricing.
- Data position 4 — the base registry (AHU/SABH) is commodity/public and resold by many; a continuous deed-history/change-monitoring dataset accrues modestly with use but is not proprietary in the strong sense.
- Absorption distance 5 — the Oct 2025 substantive-verification rule is a real, cited incumbent move adjacent to this problem, narrowing but not absorbing the foreign-facing monitoring function.
- Competition 3 — crowded: AsiaVerify, Moody's, D&B, LSEG, Cekindo, Proximal, ILA Global, companyhouse.id all have real Indonesia traction.
- Moat 4 — reselling/monitoring state data is inherently thin, though per-bank integration and accumulating deed-history data add modest lock-in beyond a pure data reseller.

**Weighted: 0.20(6)+0.20(6)+0.15(7)+0.15(4)+0.10(5)+0.10(3)+0.10(4) = 5.3**

## Upside Flag

Secondary evidence only. A validated forgery-monitoring wedge could expand into pre-transaction M&A/lending diligence (not just correspondent banking) and into adjacent Southeast Asian jurisdictions with similar notary-filed, self-declared registries (not independently verified this pass). Regulatory tailwind (FATF membership, Permenkumham 2/2025) could increase downstream demand for third-party BO/deed-anomaly checks even as it hardens the underlying filing process.

## What Would Kill This

Cited evidence would be: Ditjen AHU shipping an official English-language bulk/API product for foreign compliance teams within 12 months (no such roadmap found as of 2026-07 — Program A's "a decree away" framing was speculative, not a citable commitment, and does not meet Program B's K3 bar); or AHU extending the Oct 2025 substantive-verification hardening to full historical deed-chain re-audit with public change-alerts, which would directly replicate this product's monitoring layer.

## Sources

- https://www.arn24.news/2025/06/perkara-pemalsuan-akta-otentik-notaris.html
- https://www.metronewstv.co.id/2026/07/diduga-melibatkan-oknum-notaris-kasus.html
- https://liputan4.com/direktur-pt-bgam-lapor-polisi-saham-perusahaan-diduga-beralih-lewat-akta-palsu/
- https://www.antaranews.com/berita/4263003/kemenkumham-blokir-hingga-batalkan-sk-perusahaan-terafiliasi-judol
- https://www.openownership.org/en/publications/beneficial-ownership-transparency-in-indonesia-scoping-study/open-ownership-principles-in-use-in-indonesia/
- https://www.ahp.id/indonesia-updates-beneficial-ownership-disclosure-rules-major-changes-that-will-affect-every-business/
- https://www.bis.org/publ/qtrpdf/r_qt2003g.htm
- https://prolegal.id/sk-tidak-lagi-terbit-otomatis-di-sabh-kini-wajib-melalui-verifikasi-substantif/
- https://www.hukumonline.com/berita/a/direktur-badan-usaha-ditjen-ahu--kecepatan-verifikasi-substantif-bergantung-pada-korporasi-dan-notaris-lt692ed87a15fc5/
- https://asiaverify.com/jurisdictions-hub/indonesia/ (fetched directly, 2026-07: no public pricing disclosed)
- https://asiaverify.com/platform/portal/ ($249 credit pack, cited via prior search summary)
- https://www.proximalconsulting.com/indonesia (fetched directly, 2026-07: fixed-price EDD, price undisclosed)
- Prior internal research (Program A, 2026-07-29): /Users/farros/Downloads/VENTURE/research/axes/corresponding-kyc.md
