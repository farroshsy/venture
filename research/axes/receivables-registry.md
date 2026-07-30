# Lender-Facing Receivables Uniqueness Registry (MonetaGo Shape, Scored as a Venture) — axis 2B

## Problem & Current Workflow

An Indonesian SME holding an unpaid invoice can finance it at a bank (supply-chain finance or working-capital line), a multifinance factor (anjak piutang), or a licensed P2P platform. The lender's workflow: collect the invoice plus purchase order and delivery documents; confirm the payor (often only by phone or an assignment acknowledgment the borrower itself procures); pull SLIK for the borrower's existing facilities; P2P lenders additionally query AFPI's Fintech Data Center (FDC), which is keyed to the borrower's NIK; disburse 60–80% of face value; wait for the payor to pay — frequently to the borrower, not the lender, in undisclosed factoring. At no step does any lender learn whether the same invoice document is already financed at another institution. e-Faktur/Coretax validation proves a VAT invoice exists in DJP's system; it says nothing about financing status, and DJP's own enforcement shows tax invoices themselves are forged at scale. This is precisely the gap MonetaGo's hash registries close in India (TReDS), Singapore (ABS Trade Finance Registry) and Thailand.

## Stakeholders & Who Pays

Domestic case. Borrowers: SME suppliers. Payors: corporate buyers. Lenders who eat the loss and would pay per-query fees: banks (BRI, Mandiri, and channeling banks behind P2P), multifinance factors, and the ~90 licensed LPBBTI platforms whose productive-sector book was Rp34.95 trillion, 33.70% of Rp103.73 trillion outstanding, per May 2026 (OJK via Kontan, 2026). AFPI operates FDC for members; OJK operates SLIK and Pusdafil and supervises everyone; DJP owns invoice existence; credit bureaus (Pefindo Biro Kredit, CLIK, CRIF) sell borrower-level reports. Auditors: KAP for lender books. Disputes: lender-versus-lender priority fights over twice-assigned receivables land in civil courts.

## Trust Breakdown (cited incidents)

- KoinWorks/Lunaria: prosecutors detained the CEO, commissioner and COO in May 2026 for channeling ~Rp600 billion of BRI money against manipulated invoice collateral ("manipulasi agunan berupa invoice") (Kompas.com, Jakarta Post, 2026). A bank could not see through a platform's invoice claims.
- Investree: license revoked 21 October 2024 (OJK); co-founder repatriated from Qatar to face charges of illegally raising ~Rp2.7 trillion, 2022–2024 (IDNFinancials, 2025); an invoice-financing pioneer collapsed with 90-day NPL above 16% (Dealroom/Fintech News, 2024).
- SNP Finance: "added to, duplicated and reused" its receivables list as security at 14 banks; police alleged Rp14 trillion in potential losses (The Jakarta Post, 2018).
- Fictitious tax invoices persist under e-Faktur: a Rp170.2 billion TBTS case handed to prosecutors January 2026 (DDTC/investor.id, 2026) and a "faktur village" syndicate at Rp180 billion (DJP via pajaknow, 2026).

## Cost of the Problem

No Indonesia-wide duplicate-financing loss statistic exists (unverified). Verified anchors: Rp600 billion KoinWorks (Kejaksaan via Kompas, 2026); Rp14 trillion alleged at SNP (police via Jakarta Post, 2018 — includes collusion and fabrication, so only partially registry-addressable); TWP90 at 4.42% of Rp103.73 trillion per May 2026 (OJK, 2026) bounds credit losses but does not isolate fraud. MonetaGo claims its registries "prevented billions" in losses since 2018 (MonetaGo.com, 2026, self-reported). Strip: pure fabrication with insider collusion (much of KoinWorks, SNP) is only partly addressable by a uniqueness check; the registry catches the duplicate-use pattern, not the first fabricated document.

## Existing Solutions (as of 2026-07)

- AFPI FDC (since 2021): borrower-NIK-level duplicate-loan detection, P2P members only — banks and multifinance are outside it (AFPI, 2021).
- OJK SLIK: facility-level, monthly-cycle; fintech lenders became mandatory SLIK reporters 31 July 2025 under POJK 11/2024 (CNBC Indonesia, 2025).
- DJP e-Faktur/Coretax: invoice existence validation only.
- OnlinePajak: e-Faktur-connected invoice financing origination with OJK-licensed lenders — origination rail, not a cross-lender uniqueness check (online-pajak.com, 2026).
- MonetaGo + FCI: partnership announced 23 October 2024 to roll registries out globally; live in Thailand, Singapore, Turkey, UAE, Italy, Spain — not Indonesia (GTR, 2024); a March 2026 India Factoring alliance shows continued regional momentum (IFA Commercial Factor, 2026).
- Rapindo (APPI's asset-recording institution, membership mandated for multifinance under POJK 47/POJK.05/2020): held 26,223 factoring-receivable asset records as of 30 June 2024 alongside 32.7 million vehicles (Bisnis.com, 2024) — an embryonic receivables-recording rail inside the association, though marginal in scale and multifinance-only.
- No dedicated Indonesian invoice-uniqueness registry found after search in Indonesian and English.

## Why Insufficient & Who Rejects the Existing Anchor

No current anchor records "this invoice is financed." SLIK is borrower-keyed and monthly — a same-invoice-two-lenders event never surfaces. FDC excludes the banks that fund most invoice credit. DJP's mandate is tax, not lien priority, and it will not serve lender queries about financing status. Competing lenders do not trust each other's word. But critically, nobody rejects OJK or AFPI as a legitimate operator of such a registry — every economically relevant party is domestic and already submits to both. The anchor is missing, not contested. That is the non-H1 configuration: a functional gap an accepted institution can fill, and in India and Singapore the same gap was filled by association/regulator-blessed utilities run on conventional infrastructure.

## Blockchain Test

Test 1 passes: duplicate financing predates and outlives any ledger. Test 2 fails: a centrally operated hash registry under OJK/AFPI blessing solves it fully — MonetaGo itself migrated its TReDS fingerprinting off DLT to confidential computing, and its stack today is explicitly "encryption and confidential computing," not blockchain (MonetaGo.com, 2026; AMD case study). The privacy problem is solved by hashing, not decentralization. Test 3 is genuinely hard for incumbents: FDC took years, and a decree does not conjure a working document-hash utility in six months — but the decree path makes the venture a procurement contractor, and MonetaGo/FCI sit one border away in Thailand. Test 4 borderline: per-check fees on a Rp35 trillion productive P2P book plus bank SCF is a thin utility revenue pool.

## Kill Test Verdict

KILLED as a blockchain venture — fails test 2 outright; test 4 doubtful. Survives as a conventional RegTech utility play whose realistic endgame is being AFPI/OJK's procured vendor before MonetaGo arrives. Consistent with H1: all relevant parties are domestic and accept a state/association anchor, so custodian-independent verification is unnecessary — the strongest evidence being that the category leader abandoned blockchain.

## Scores

- Severity 7 — Rp600B KoinWorks (2026), Investree collapse, SNP: recurring fraud with criminal exposure; lenders staff dedicated fraud teams.
- Market 4 — registry fee pool on Indonesia's invoice-finance volumes is likely under $50M/yr (unverified); utilities price per-check, thin.
- WTP 6 — lenders already pay SLIK/FDC/bureau fees and are post-scandal motivated; no mandate yet compels invoice-level spend.
- Chain 4 — multi-org, but an accepted trusted intermediary (OJK/AFPI) exists; MonetaGo's own de-blockchaining proves a chain adds nothing.
- Urgency 7 — fresh May 2026 scandal plus POJK 40/2024 governance tightening; no hard registry deadline.
- Competition 6 — domestic whitespace after hard search, but MonetaGo/FCI adjacency and state absorption risk cap the openness.
- Moat 6 — cross-lender network effects if won; but the position is granted by association mandate, not earned, and can be re-granted.

Weighted: 5.6.

## What Would Kill This Idea

Killed by: blockchain non-necessity (test 2) and thin standalone economics. As a conventional venture it dies the day OJK/AFPI either extends FDC to document hashes or procures MonetaGo via FCI. It would revive only if OJK formally declined to host invoice-level data and banks plus P2P jointly mandated an independent private utility — the ABS-Singapore pattern with a local vendor.

## Sources

- https://money.kompas.com/read/2026/05/08/163350326/manipulasi-agunan-berupa-invoice-cara-koinworks-cairkan-kredit-rp-600-miliar
- https://www.thejakartapost.com/business/2026/05/07/jakarta-prosecutors-detain-three-in-35m-koinworks-graft-probe
- https://www.thejakartapost.com/news/2018/09/25/consumer-finance-firm-allegedly-defrauds-banks-of-rp-14-trillion.html
- https://www.idnfinancials.com/news/57507/interpol-and-ojk-repatriate-investree-boss-adrian-gunadi
- https://fintechnews.sg/102586/indonesia/ojk-investree-license-revoke/
- https://keuangan.kontan.co.id/news/tumbuh-2560-pembiayaan-fintech-lending-capai-rp-10373-triliun-per-mei-2026
- https://keuangan.kontan.co.id/news/porsi-pembiayaan-fintech-lending-ke-sektor-produktif-turun-jadi-3370-per-mei-2026
- https://www.cnbcindonesia.com/market/20250629073510-17-644633/pinjol-masuk-data-slik-ojk-per-31-juli-2025
- https://afpi.or.id/fdc
- https://www.gtreview.com/news/digital-trade/fci-partners-with-monetago-to-fight-invoice-finance-fraud/
- https://www.monetago.com/
- https://news.ddtc.co.id/berita/nasional/1816494/djp-ungkap-kasus-faktur-pajak-fiktif-yang-rugikan-negara-rp170-m
- https://www.online-pajak.com/invoice-financing/pinjaman-invoice-financing
- https://finansial.bisnis.com/read/20240813/89/1790601/appi-dorong-leasing-lakukan-asset-registry-untuk-cegah-kredit-ganda
- https://magazine.factoring.org/news/monetagos-fraud-prevention-technology-enables-india-factoring-to-expand-msme-financing-capabilities
