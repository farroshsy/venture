# Foreign Counterparty Verification of Indonesian Corporate Records (Axis 1)

## Problem & Current Workflow

A foreign bank, trade counterparty, or investor that must verify an Indonesian company today runs a multi-rail process. Step 1: collect documents from the counterparty itself — akta pendirian (notarial deed of establishment), SK Kemenkumham (ministerial ratification), NIB (business number from OSS), NPWP (tax number). Step 2: independently confirm registration against the state registry, Ditjen AHU (Kemenkumham). AHU Online sells a company extract to anyone: Profil Terakhir at Rp50,000 or Profil Lengkap at Rp500,000, paid as PNBP through Indonesian bank channels on a largely Indonesian-language portal (AHU Online; Legalmondo/AsiaVerify guides, 2025-2026). Foreign compliance teams therefore usually buy through an intermediary — local counsel, Cekindo/InCorp, companyhouse.id, ILA Global, or an API vendor such as AsiaVerify. Step 3: if the document must carry legal force abroad (or vice versa), it goes through the Hague apostille: Indonesia acceded to the Apostille Convention on 5 October 2021, Kemenkumham is the sole competent authority, fee Rp150,000 per document, 3-5 working days, and the certificate is issued electronically with a QR code verifiable by anyone at apostille.ahu.go.id (Ditjen AHU; SmartLegal, 2025). Step 4: beneficial-ownership check — a subset of BO data has been publicly accessible via AHU since 1 July 2022; the full dataset requires government-to-government channels such as MLA or FIU exchange (Open Ownership scoping study). Step 5: sanctions/PEP screening via LSEG World-Check or equivalents; bank-to-bank KYC via the SWIFT KYC Registry.

## Stakeholders & Who Pays (both sides)

Foreign side: correspondent banks and trade-finance desks (compliance budget owners), export credit agencies, credit insurers, foreign law firms, KYC utilities. Indonesian side: the company being verified (pays apostille and notary fees), notaries as statutory gatekeepers who file into AHU/SABH, Ditjen AHU (collects PNBP), PPATK (FIU), and Indonesian banks whose correspondent relationships depend on the country's AML standing. Disputes are litigated in Indonesian courts (deed forgery) or resolved by banks simply declining the relationship — de-risking. Globally, active correspondent-banking relationships fell about 25% from 2011 (BIS, 2020); the FSB runs a standing action plan because respondent banks losing access demonstrably reduces their clients' exports (CEPR). Indonesia-specific correspondent-relationship decline figures: (unverified).

## Trust Breakdown (cited incidents)

- Notary Adi Pinem, Medan, prosecuted 2025: two notarial deeds he produced were never registered in SABH/AHU and contradicted the official record — the deed existed on paper, the registry disagreed (ARN24, June 2025).
- PT BGAM, Jakarta, July 2026: directors reported an alleged forged authentic deed changing shareholders to Polda Metro Jaya, implicating a notary (Metronewstv, July 2026).
- Kemenkumham blocked and revoked the SK of companies affiliated with online gambling networks — companies that had passed formation formalities (Antara, 2024).
- Structural weakness: BO filings are self-declared by companies through notaries; Permenkumham 2/2025 added verification duties, documentation standards, and annual updates with a 30 June 2025 compliance deadline precisely because prior filings were unverified (AHP client alert, 2025; Open Ownership).

## Cost of the Problem

No audited number exists for what foreign parties spend verifying Indonesian companies; (unverified) throughout. Observable proxies: apostille throughput — the DKI Jakarta regional office alone printed 8,647 apostille certificates between July 2023 and April 2024 (Kanwil Kemenkumham DKI, 2024), with national volume in the tens of thousands per year across 120+ destination countries; at Rp150,000 the direct legalization market is trivially small (low single-digit US$ millions). The real spend is enhanced-due-diligence reports at US$500-5,000 each through law firms and vendors, plus the opportunity cost of de-risking, neither of which is publicly quantified (unverified). ADB and FSB literature attributes measurable trade loss to correspondent de-risking, but attribution to corporate-record verification specifically is not isolatable.

## Existing Solutions (as of 2026-07, named)

- State rails, functioning: AHU Online paid extracts; e-apostille with online QR verification open to any foreign relying party; partially public BO search; OSS/NIB lookup; notary-register check on the Kemenkumham site.
- Commercial aggregators: AsiaVerify (real-time Indonesian registry retrieval, English, marketed to APAC compliance teams), Moody's Orbis/Bureau van Dijk, Dun & Bradstreet, LSEG World-Check/Due Diligence, SWIFT KYC Registry (bank-to-bank), plus local report shops (Cekindo/InCorp, ILA Global, companyhouse.id, InvestinAsia).
- Regulatory trajectory: Indonesia joined FATF as a full member (October 2023) and tightened BO rules via Permenkumham 2/2025 — the state is closing the data-quality gap itself.

## Why Insufficient & Who Rejects the Existing Anchor

The friction is real: Indonesian-language portal, PNBP payment rails foreigners cannot easily use, notary-filed data the registry does not independently verify, and self-declared BO. But the H1 axis-1 question is whether foreign verifiers refuse to accept the state anchor — and they do not. AHU extract plus QR-verifiable e-apostille is exactly the chain foreign banks, courts, and 120+ Hague member states accept; the Apostille Convention is a functioning interstate trust bridge, and Indonesia's implementation is already electronic and custodian-hosted yet universally relied upon. What foreign parties distrust is the quality of the underlying filings (forged deeds, straw BO declarations) — garbage-in that no custodian-independent ledger fixes, since the forgery happens at the notary/filing layer before any ledger entry. The access-friction residue is an aggregation-and-translation business that AsiaVerify and peers already run.

## Blockchain Test

No economically relevant party demands proof independent of AHU; they demand faster, English, verified data from AHU. Tamper-evidence adds nothing: contested cases (Adi Pinem, BGAM) were resolved precisely by treating the AHU/SABH record as authoritative against the forged paper. Chain necessity ~3.

## Kill Test Verdict

1. Problem exists without blockchain — YES (pass). 2. Single trusted operator acceptable to both sides — YES: AHU plus the Hague apostille mechanism is that operator, accepted by both sides today (FAIL). 3. Incumbent ships in 6 months — the state already shipped e-apostille QR verification, and commercial aggregators cover the friction layer; an AHU English API is a decree away (FAIL). 4. Standalone value — a data-reseller niche with thin margins against funded aggregators (weak). Verdict: KILLED on tests 2 and 3.

## Scores

- Severity 5 — measurable compliance friction and occasional forgery losses; workarounds (counsel, vendors) are routine.
- Market 4 — Indonesia-specific KYB/legalization spend plausibly under US$100M; no verified basis.
- WTP 6 — compliance budgets exist and already pay vendors; mandated AML spend adjacent.
- Chain 3 — accepted trusted anchor exists (AHU + apostille); single-org database suffices.
- Urgency 5 — FATF membership and Permenkumham 2/2025 deadlines create steady, not acute, pressure.
- Competition 3 — AsiaVerify, Moody's, D&B, SWIFT registry and local vendors; several funded players, none dominant in the Indonesia niche.
- Moat 3 — reselling state data is copyable; no network effect accrues to the verifier.

Weighted: 0.20(5)+0.20(4)+0.15(6)+0.15(3)+0.10(5)+0.10(3)+0.10(3) = **4.3**

## What Would Kill This Idea

Killed by the anchor being accepted. It would revive only if a major verifier bloc (e.g., US/EU correspondent banks under a FATF grey-listing scenario) formally stopped accepting AHU-sourced records — the opposite of the current trajectory, since Indonesia entered FATF in 2023 and is tightening BO verification.

## Sources

- https://www.openownership.org/en/publications/beneficial-ownership-transparency-in-indonesia-scoping-study/open-ownership-principles-in-use-in-indonesia/
- https://www.ahp.id/indonesia-updates-beneficial-ownership-disclosure-rules-major-changes-that-will-affect-every-business/
- https://www.legalmondo.com/product/how-find-company-information-indonesia/
- https://asiaverify.com/company-verification-in-indonesia-2025-guide/
- https://portal.ahu.go.id/id/detail/75-berita-lainnya/3053-luncurkan-layanan-apostille-kemenkumham-pangkas-proses-legalisasi-dokumen
- https://jakarta.kemenkum.go.id/berita-utama/sosialisasi-layanan-apostille-berikan-kemudahan-legalisasi-apostille-pada-dokumen-publik
- https://indonesiatranslator.id/blog/cara-cek-keaslian-apostille-online/
- https://www.arn24.news/2025/06/perkara-pemalsuan-akta-otentik-notaris.html
- https://www.metronewstv.co.id/2026/07/diduga-melibatkan-oknum-notaris-kasus.html
- https://www.antaranews.com/berita/4263003/kemenkumham-blokir-hingga-batalkan-sk-perusahaan-terafiliasi-judol
- https://www.bis.org/publ/qtrpdf/r_qt2003g.htm
- https://cepr.org/voxeu/columns/impact-de-risking-correspondent-banks-international-trade
