# Lender-Facing Receivables Uniqueness Registry

**Mechanism:** uniqueness / double-pledging detection
**Slug:** receivables-uniqueness

## Problem & How Truth Is Established Today

When a lender (bank, multifinance, or P2P fintech) finances an invoice, bill of lading (B/L), or other receivable as collateral, it has no reliable way to confirm that receivable hasn't already been pledged to another lender. Truth is established piecemeal:

- **SLIK** (OJK) records borrower-level credit exposure, not which specific invoice backs a facility — it cannot answer "has this exact document already been financed."
- **Fintech Data Center (FDC)**, run by AFPI, is the P2P-lending equivalent of SLIK but explicitly excludes banks: "unlike SLIK OJK which records credit in banking, FDC specifically records lending activity in online loan applications" (AFPI/Hybrid.co.id, 2024-2025). A bank cannot see what a P2P lender already financed against the same paper, and vice versa.
- **Fidusia registration** (AHU Online, Kemenkumham) is deed-level, not instrument-level — it doesn't de-duplicate the receivables inside a collateral pool.
- **SKBDN** and inter-company invoices sit outside any registry.
- **e-Faktur/Coretax (DJP)** confirms a tax invoice's *existence* but not whether it's already pledged as collateral.

A borrower can present the same invoice, or fabricated ones, to multiple lenders at once, and no single lender's due-diligence — manual review plus a SLIK/FDC pull — surfaces the overlap.

## Buyer & Who Pays

Cross-organizational: the beneficiary is every lender extending receivables-backed credit (bank trade-finance/SCF desks, OJK-registered multifinance, P2P invoice-financing platforms), but value only exists if *multiple, competing* lenders contribute financed-invoice data to a shared pool. Named buyer: bank SCF units and OJK-licensed multifinance/P2P lenders. The natural champion is the credit-risk/collateral-verification function; procurement needs compliance/legal sign-off.

## Documented Failures (cited)

- **KoinWorks (PT Lunaria Annua Teknologi), May 2026:** Kejati DKI Jakarta arrested three executives over Rp600B in credit disbursed via manipulated invoice collateral from BRI, insurance deliberately not taken out (Detik, Kompas, Media Indonesia, May 2026).
- **SNP Finance, 2018:** Police found PT Sunprima Nusantara Pembiayaan pledged fictitious/duplicated receivables to 14 banks. Popular reporting cites ~Rp14T exposure (Batamnews, CNN Indonesia, Liputan6, 2018), but **OJK clarified actual credit extended was closer to ~Rp2.2T** (Bisnis.com, 2018) — Rp14T is the disputed alleged/gross figure, not confirmed loss. Mandiri (~Rp1.4T), BCA (~Rp210B), 11 others exposed.
- **Bank Jakarta (Bank DKI), July 2026:** BPK audit found a Rp295B facility to PT Rass Mandiri Utama involved doubtful collateral and fictitious invoices that passed the Credit Committee unverified; referred to Bareskrim Polri (Senator.id, Realita.co, Trawlmediaindonesia.id, July 2026).

## Bottom-Up ARR Path

Customers: OJK-licensed multifinance plus bank SCF units plus P2P invoice-financing fintechs — a segment in the low hundreds nationally (exact count not sourced; **(unverified)**). Reachable first customers: institutions already burned by a duplicate-collateral incident (KoinWorks' funders, Bank Jakarta, the 14 SNP-exposed banks) — a warm-outreach list. ACV: no direct Indonesian comparable was found for a receivables-dedup subscription; by analogy to enterprise fraud-data/bureau subscriptions, a plausible range is tens of millions to ~Rp150M/year per institution — **evidence quality: weak (inference, not sourced)**. At an illustrative 150-250 customers × ~Rp100M/year, this clears $1M ARR on paper, but rests on an unvalidated analog.

## Existing Solutions (as of mid-2026)

- **MonetaGo** (global, India-focused): Hyperledger Fabric invoice "fingerprinting" to detect duplicate financing, deployed via three RBI-licensed TReDS exchanges since 2018, cross-checked against India's GSTN and eWay Bill portal; addresses ~1-2% of global invoice financing subject to duplicate fraud (CEO Jesse Chenard, via IBS Intelligence/Businesswire 2018-2022). No evidence found of MonetaGo or an equivalent operating in Indonesia.
- **CekFaktur.com**: Indonesian third-party API validating tax-invoice authenticity against DJP/Kemenkumham data — solves *authenticity*, not *uniqueness-of-financing*.
- No dedicated Indonesian lender-facing receivables-uniqueness registry was found.

## Kill Tests

- **K1 (Data access): PASS, with caveat.** Each lender controls its own book of financed invoices; no cooperation from the borrower being evaluated is required. But the needed evidence — what *other* lenders have financed — is third-party data competing institutions have no natural incentive to share with a startup-run pool absent a mandate or trusted-utility status. Captured below under K4 rather than a strict K1 kill.
- **K2 (Oracle bound): PASS.** Duplicate-pledging is inferable from hashed/fingerprinted invoice identifiers submitted by participating lenders, exactly as MonetaGo demonstrated, combined with e-Faktur/Coretax as an independent authenticity check. Pure off-system collusion (a fabricated invoice never re-submitted elsewhere) evades this, but that isn't the documented failure pattern.
- **K3 (Absorption): PASS — no 12-month evidence found.** SLIK, FDC, and fidusia are each structurally incapable of instrument-level dedup (borrower-level, borrower-level-excluding-banks, deed-level respectively); no OJK/AFPI announcement, procurement, or funded roadmap for a receivables-uniqueness layer was found.
- **K4 (Bootstrap bar): FAIL.** Core value requires competing lenders to contribute proprietary data to a third party — a two-sided cold-start problem that historically required a state/central-bank anchor (RBI's TReDS mandate) or an incumbent body (AFPI for FDC). Selling into banks/multifinance also typically requires vendor security review and multi-month procurement — an enterprise-sales motion, not evening-sized self-serve ops.

**Survives: NO** (K4 fails).

## Scores

- Severity: **9** — documented large-loss/prosecution events (KoinWorks, SNP, Bank Jakarta).
- Bootstrap revenue quality: **4** — plausible named segment, but ACV and reachable-count both rest on inference, no sourced Indonesian comparable.
- WTP: **5** — a real budget exists (credit-risk/collateral verification spend) but is unowned and slow absent a forcing mandate.
- Data position: **5** — per-customer integration data initially; only becomes a defensible aggregated asset once network critical mass is reached, which is unproven.
- Absorption distance: **7** — function is orthogonal to every incumbent registry found (SLIK, FDC, fidusia, e-Faktur).
- Competition: **6** — no Indonesian competitor found; MonetaGo is India-only; search not adversarially exhaustive.
- Compounding moat: **7** — once adopted, leaving the pool means losing dedup coverage (classic registry network effect) — but this only manifests after the cold-start hurdle is cleared.

**Weighted: 6.1**

## Upside Flag

If OJK or AFPI ever mandated a shared receivables/collateral dedup check (analogous to the fidusia registration mandate or SLIK reporting), a first-mover operator could become the de-facto rail overnight — this is the main venture-upside path, but it depends on regulatory action the founder cannot control or force (secondary evidence only, not counted toward K4).

## What Would Kill This

- Confirmation that OJK/AFPI is actively drafting a mandatory receivables-dedup reporting rule (would flip this from opportunity to state-absorbed within the review window).
- Evidence that banks/multifinance treat financed-invoice identities as too commercially sensitive to share with any non-state pooled registry, even anonymized/hashed.
- A credible pilot showing fewer than ~10 institutions willing to be design partners in year one (kills the cold-start thesis directly).

## Sources

Detik, Kompas, Media Indonesia (2026) — KoinWorks; Batamnews, CNN Indonesia, Liputan6, Bisnis.com (2018) — SNP Finance; Senator.id, Realita.co, Trawlmediaindonesia.id (2026) — Bank Jakarta/BPK; IBS Intelligence, Businesswire, PYMNTS, Trade Finance Global (2018-2022) — MonetaGo; AFPI/Hybrid.co.id, Infobanknews, ItWorks (2024-2025) — FDC; docs.cekfaktur.com, klikpajak.id, pajakku.com — e-Faktur/Coretax; OJK POJK 35/2018 — fidusia framework.
