# Continuous ERP-to-Coretax Reconciliation

## Problem & How Truth Is Established Today
A taxpaying company (Wajib Pajak Badan) records revenue, VAT, and withholding transactions in its own ERP/accounting system, then separately files VAT invoices (e-Faktur), withholding certificates (e-Bupot) and the annual/periodic SPT through DJP's Coretax Administration System, launched January 2025. Because ERP-to-Coretax data flow is largely manual or semi-automated, entries can duplicate or diverge (Firdaus & Nawangsari, 2025, cited via Binus Bekasi Accounting Technology, 2026), and DJP separately cross-matches counterparty-reported data (other parties' e-Faktur/e-Bupot, banking/AEOI data) against a company's own filings. Where DJP's view and the company's view disagree, DJP issues an SP2DK (Surat Permintaan Penjelasan atas Data dan/atau Keterangan) — DJP issued roughly 250,000 SP2DK letters in the first half of 2026 alone (185,000 for routine supervision, 65,000 for taxpayer-base extensification; IKPI, 2026), now delivered through the taxpayer's own Coretax account (DDTC News, 2026). Truth-testing today is reactive: the company finds out its books diverge from DJP's record only after DJP has already flagged it, then must respond, often via a tax consultant (konsultan pajak). Coretax itself has had documented stability issues — API request-queue congestion during 2026's mass database migration (Kompasiana, 2026) — that complicate any real-time reconciliation building on top of it.

## Buyer & Who Pays
Mid-to-large corporate taxpayers with complex, multi-type tax profiles are the natural buyer, typically via the in-house tax/finance function or an outsourced Kantor Konsultan Pajak (KKP) that manages compliance for multiple client companies — a plausible multiplier channel if not already captured by incumbents.

## Documented Failures (cited)
- DJP issued ~250,000 SP2DK letters in semester I 2026 — 185,000 supervision-driven, 65,000 extensification-driven (IKPI, 2026) — each requiring a company response, often escalating to audit or penalty if unresolved.
- Academic research (Firdaus & Nawangsari, 2025, via Binus, 2026) documents inadequate ERP-Coretax data integration causing manual entry, duplication and inconsistency at the company level.
- DJP's SE-8/PJ/2026 circular confirms a shift to risk-based, technology- and data-driven supervision — web scraping, remote sensing, digital-media analysis, prior-audit mirroring, and cross-agency data networks (PajakOnline.com, 2026) — meaning mismatch-triggered scrutiny is DJP's stated growth direction, not a one-off. The specific "22 Coretax defect classes at January 2025 launch" figure from the initial brief could not be independently corroborated in this research round and should be treated as unverified.

## Bottom-Up ARR Path
No concrete, Indonesia-specific ACV comparable for a standalone reconciliation product was found: Mekari Klikpajak's pricing page offers no enterprise figure, and Pajakku's SIP page provided no published pricing (both sales-assisted, quote-on-request). KKP audit/consulting fees are described only as "personnel × hours × hourly rate," with no headline figure (Mekari Jurnal/agungcpa, 2026). Reachable customer count rests on inference, not a named segment count. Given the crowded incumbent field (below) and high switching cost against displacing an already-integrated PJAP/e-invoicing vendor, a credible first-ten-customer, self-serve route was not established. Evidence quality: weak.

## Existing Solutions (as of mid-2026)
Mekari Klikpajak — official DJP partner (PJAP), offers e-Faktur Coretax API and e-Bupot Unifikasi integrated with Mekari Jurnal ERP, marketed with "automation and auto-reconciliation of data to minimize human error" (klikpajak.id/Mekari Community, 2026). Pajakku — established PJAP; its SIP (Sistem Integrasi Perpajakan) product performs reconciliation/ekualisasi pajak, fiscal correction and SPT-proforma generation, and Pajakku states all its services are integrated with Coretax DJP in real time (pajakku.com, 2026). On direct inspection, Pajakku SIP's reconciliation is framed as identifying/resolving discrepancies within the company's own internal tax administration rather than an explicit line-by-line benchmark against DJP's authoritative Coretax record — a narrower scope than the candidate's proposed function, but close enough, and bundled into infrastructure the taxpayer must use anyway (PJAP integration), to constitute meaningful competitive and absorption pressure.

## Kill Tests
- **K1 Data access — PASS.** The company controls its own ERP and has legal access to its own Coretax account; no third-party cooperation required.
- **K2 Oracle bound — PASS.** For the target case (honestly-kept but systemically-misaligned books), mismatches are fully inferable from the company's own records plus its own Coretax filings.
- **K3 Absorption — FAIL (killed).** Mekari Klikpajak (auto-reconciliation bundled with Jurnal ERP and e-Bupot Unifikasi) and Pajakku (SIP reconciliation/fiscal-correction product, Coretax-integrated) are funded, Indonesia-traction incumbents already shipping this function as of 2026 (klikpajak.id, 2026; pajakku.com, 2026) — not a roadmap claim but a live, dated feature set from the two vendors best positioned to bundle it (the leading ERP-adjacent SaaS company and an official PJAP).
- **K4 Bootstrap bar — FAIL.** No Indonesia-specific ACV comparable was found for a standalone product; reachable-customer count rests on inference; incumbent PJAP integration creates switching cost that works against, not for, a new self-serve entrant.

## Scores
- Severity 7 — 250,000 SP2DK letters in H1 2026 alone represents a large, recurring, dedicated-staff compliance burden, short of anchor-9 scandal/insolvency events.
- Revenue 3 — no distinct ACV comparable found; reachable count unestablished.
- WTP 6 — companies already spend on Mekari/Pajakku subscriptions and KKP retainers, but the specific line-item this product would displace is unclear.
- Data 5 — per-customer ERP integration only, replicable by any competitor with API access.
- Absorption 3 — incumbents already shipping the function, per K3 evidence.
- Competition 3 — funded incumbents (Mekari, Pajakku) with documented Indonesian traction.
- Moat 3 — customers are already embedded in an incumbent's PJAP/e-invoicing rails; a new entrant has no comparable lock-in.
- Weighted: 4.6

## Upside Flag
DJP's SE-8/PJ/2026 signals continued growth in mismatch-driven scrutiny (web scraping, cross-agency data, prior-exam mirroring), which should keep demand for compliance tooling high — but the supply side is already being filled by incumbents' bundled features, not a gap a new entrant can claim as whitespace (secondary evidence only).

## What Would Kill This
Already killed on K3/K4: two funded, Coretax-integrated incumbents (Mekari, Pajakku) already market reconciliation features to the same buyer over the same rails a new entrant would need to build on.

## Sources
- https://ikpi.or.id/en/djp-tebar-250-ribu-surat-cinta-ke-wajib-pajak-ada-apa/
- https://news.ddtc.co.id/berita/nasional/1820368/sp2dk-dikirim-via-coretax-wp-perlu-perhatikan-notifikasi-di-akunnya
- https://binus.ac.id/bekasi/accounting-technology/2026/03/11/integrasi-erp-dan-coretax-dalam-meningkatkan-kepatuhan-pajak-perusahaan/
- https://www.kompasiana.com/oktilova0852/69ca4b1834777c780a02e852/coretax-2026-antara-harapan-digitalisasi-dan-masalah-lama-yang-belum-usai
- https://www.pajakonline.com/djp-terbitkan-se-8-pj-2026-pengawasan-kepatuhan-wajib-pajak-berbasis-analisis-risiko/
- https://klikpajak.id/
- https://community.mekari.com/forums/topic/target-pajak-2026-lebih-tinggi-purbaya-bakal-andalkan-peran-coretax/
- https://pajakku.com/products/analytics-planning-monitoring/sip
- https://pajakku.com/artikel/simplifikasi-dan-efisiensi-di-era-coretax-solusi-pajak-online-yang-mudah-untuk-wajib-pajak
- https://klikpajak.id/harga/
