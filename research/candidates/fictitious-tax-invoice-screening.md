# Fictitious Tax-Invoice (Faktur) Detection & Counterparty Screening

## Problem & How Truth Is Established Today
A PKP (VAT-registered) buyer in Indonesia claims input-VAT credit against a "faktur pajak" it receives from a supplier. If that invoice is later found to be TBTS (Tidak Berdasarkan Transaksi Sebenarnya — not based on an actual transaction), the buyer loses the input-VAT credit and, under Pasal 39A KUP, faces potential criminal exposure for using a fictitious invoice, even without knowing participation (muc.co.id, "Cara Aman Menghindari Risiko Faktur Pajak Fiktif").

Truth today is established in two disconnected layers. (1) DJP's Coretax system, mandatory since 1 Jan 2025, lets a buyer scan a QR code or check its dashboard to confirm an invoice is "sah" (exists, correctly formatted, active NPWP) — but this only confirms the document is real in DJP's ledger, not that the underlying transaction occurred. A shell-company issuer can register valid-looking invoices; DJP's graph-analytics/AI risk models operate DJP-side to flag issuers for audit, not to warn buyers pre-transaction (pajak.com, "Transformasi Pajak Indonesia Lewat Teknologi AI"; SE-8/PJ/2026 risk-based supervision). (2) Buyer-side, corporate tax/finance teams or outside consultants (MUC, RSM Indonesia, SW Indonesia) manually check counterparty PKP status, incorporation documents, physical-office existence and business-profile plausibility — a slow, judgment-based checklist (Enforce A, "Ini Indikasi Awal Wajib Pajak Penerbit Faktur Pajak Fiktif").

## Buyer & Who Pays
Named buyer: corporate tax/finance departments at mid-to-large PKP companies with meaningful B2B purchase volume (manufacturing, distribution, construction — sectors most cited in TBTS enforcement news), and tax-consultancy/KAP firms (MUC, RSM, SW Indonesia) who resell counterparty due-diligence as part of compliance retainers. This is single-side: the buyer bears the loss and pays; the counterparty being screened is not a customer.

## Documented Failures (cited)
- Rp170.29 billion state-loss TBTS case, suspect handed to South Jakarta prosecutors 9 Jan 2026, four issuing companies (PT TNK, PT BKG, PT BTJ, PT ANL), fraud spanning 2021–2022 (DDTC News, investor.id, pajak.go.id, Jan 2026).
- "Faktur village" syndicate, Rp180 billion state loss, cross-region ring using advance-refund schemes, arrests in Banten (Kontan, pajaknow.id, 2026).
- PT SPL case: five suspects including four active "makelar" (brokers) who sourced buyers for TBTS invoices, Rp4.37 billion incl. sanctions, dossiers completed 17 Dec 2025 (pajak.go.id).
- Kaltara PT SEE TBTS case, director referred to Kejati Kaltim, Nov 2025 (pajak.go.id).
- Historical baseline: BPK recorded 525 fictitious-invoice cases 2016–2017, Rp1.01 trillion potential loss (hukumonline.com) — shows this is a chronic, not one-off, pattern.

## Bottom-Up ARR Path
~150–250 mid/large PKP finance teams, or KAP/tax-consultancy firms reselling to client books, at Rp60–120M/year (~US$4–8k) per seat — analogous to enterprise tiers of Mekari/OnlinePajak/Pajakku plus due-diligence retainer add-ons (RSM/SW Indonesia). Yields ~$0.8–1.3M ARR. Evidence: MIXED — loss events and buyer pain are well-cited; ACV/count are inferred by analogy since no dedicated "counterparty tax-risk screening" product with published Indonesian pricing was found.

## Existing Solutions (named, dated)
- **Coretax DJP** (mandatory since Jan 2025): validates invoice existence/format via QR/dashboard; does not score counterparty shell-company risk.
- **Mekari Klikpajak, OnlinePajak, Pajakku**: e-Faktur management platforms that surface Coretax's own validity check to users; no proprietary risk-scoring layer found (searched mid-2026).
- **Tax consultancies** (MUC, RSM Indonesia, SW Indonesia, Enforce A): manual advisory checklists and due-diligence engagements, not software.
- **"Taxpert"**-style AI assistants: general tax-question chatbots, not counterparty screening tools.
- No dedicated Indonesian startup offering automated shell-company/counterparty risk scoring for VAT invoices was found as of mid-2026 (documented search, Indonesian- and English-language queries).

## Kill Tests
- **K1 Data access — PASS.** Buyer holds the invoices it receives and can query Coretax NPWP/PKP validation plus AHU/OSS licensing lookups without the counterparty's cooperation. No unified shell-detection API exists, but the needed inputs are self-obtainable.
- **K2 Oracle bound — PASS.** TBTS-ness leaves inferable traces: invoice-to-delivery mismatch, price/volume anomalies, geographic/network clustering of issuers (the "one village" pattern DJP found), rapid formation-dissolution cycles. DJP's own graph-analytics use confirms these signals are extractable.
- **K3 Absorption — PASS (no 12-month evidence found).** Coretax validates existence/format and DJP runs its own audit-targeting models, but neither warns buyers pre-transaction before they claim input credit — no roadmap or vendor announcement for that buyer-facing function was found.
- **K4 Bootstrap bar — PASS (weak-mixed confidence).** A self-serve, per-lookup or subscription API sold to finance/AP teams, or embedded into existing e-Faktur SaaS (B2B2B via Mekari/OnlinePajak/Pajakku, or KAP resale), is plausible without an enterprise-sales org, similar to existing self-serve KYB APIs (e.g., Kredibel) in Indonesia. ACV/count remain inferred, not directly evidenced.

**Survives: yes (all four pass, K4 on weak-mixed evidence).**

## Scores
- Severity 7 — recurring documented state-loss prosecutions (Rp170B, Rp180B) plus criminal exposure under Pasal 39A create dedicated consultant/staff spend, but no confirmed buyer insolvency events.
- Bootstrap revenue 5 — plausible named segment, but ACV/count rest on analogy, not a directly cited comparable product price.
- WTP 6 — buyers already pay consultants (MUC, RSM, SW) for manual versions of this check; budget exists but is not consolidated around a single owned line item.
- Data position 5 — Coretax/AHU/OSS lookups are largely commodity, same-feed-to-anyone; some uplift possible from cross-customer pattern accumulation.
- Absorption distance 5 — DJP is visibly active in this exact space (AI/graph analytics) even though not buyer-facing; a plausible absorber with no confirmed roadmap.
- Competition 5 — Mekari/OnlinePajak/Pajakku sit adjacent with basic validity checks; none purpose-built for risk scoring, but the adjacency is real.
- Moat 5 — integration into a buyer's AP/tax workflow creates moderate switching cost; no cross-customer network effect confirmed.
- **Weighted: 5.6**

## Upside Flag
Secondary evidence only, unverified: a counterparty-risk API for VAT screening could extend to general corporate counterparty/shell-company checks (procurement fraud, KYB for lenders) — plausible, not evidenced by any specific deal or customer request found.

## What Would Kill This
Coretax or a DJP-linked service publicly launching a pre-transaction counterparty risk score for buyers (flips K3); or Mekari/OnlinePajak/Pajakku shipping a proprietary shell-company risk-scoring feature into their existing e-Faktur products.

## Sources
DDTC News (news.ddtc.co.id, various 2025–2026 TBTS case reports); pajak.go.id case releases (Jan 2026, Dec 2025, Nov 2025); investor.id (Jan 2026); Kontan/pajaknow.id ("desa" syndicate, 2026); hukumonline.com (BPK 2016–17 baseline); muc.co.id and Enforce A (buyer-side risk guidance); Mekari, OnlinePajak, Pajakku product pages; pajak.com/satvika.co.id (DJP AI use); DDTC (SE-8/PJ/2026, PMK-28/2026 risk-based compliance).
