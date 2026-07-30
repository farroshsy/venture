# Trade Finance & LC Fraud — Indonesia

## Problem & Current Workflow
Indonesian import/export trade and large domestic B2B trade run on documentary credit. For cross-border deals the instrument is the letter of credit (L/C); for domestic trade it is the SKBDN (Surat Kredit Berdokumen Dalam Negeri), the domestic L/C regulated by Bank Indonesia. Workflow: (1) buyer applies to its bank for an L/C or SKBDN, pledging collateral or a credit line; (2) issuing bank sends the instrument to the seller's (advising/negotiating) bank; (3) seller ships and assembles documents — commercial invoice, bill of lading or delivery order, packing list, insurance certificate, certificates of origin; (4) seller's bank checks documents against L/C terms and pays or discounts; (5) issuing bank reimburses on document presentation, then collects from the buyer. Parallel to L/Cs, banks extend working-capital credit (KMK) and receivables/invoice financing against the same underlying invoices and cargo documents. Document checking is manual, paper-heavy, and bank-by-bank: no bank can see what documents another bank has already financed.

## Stakeholders & Who Pays
Banks' trade finance and KMK units do the work (Mandiri, BRI, BNI, BCA, plus state export financier LPEI/Indonesia Eximbank). Corporate importers/exporters pay fees and interest. Bank Indonesia regulates SKBDN; OJK supervises bank credit; BPK and KPK/Kejaksaan Agung audit and prosecute when state banks lose money. Disputes run through courts with weak L/C-specific jurisprudence (UI Law Review, 2024, notes legal-certainty problems in Indonesian L/C dispute decisions). Losses land on bank shareholders — for state banks, ultimately the state.

## Trust Breakdown (documented incidents)
- **BNI fictitious L/C, 2003**: Rp 1.7 trillion drained from BNI Kebayoran Baru via fictitious export L/Cs with forged documents and insider cooperation; perpetrator Maria Pauline Lumowa was a fugitive 17 years, extradited from Serbia in 2020 and sentenced to 18 years (JISIP/Mandalanursa journal, 2022; Kejaksaan records).
- **LPEI export-financing corruption, 2024–2026**: Finance Minister Sri Mulyani reported Rp 2.5 trillion of fraudulent export financing across four companies to the Attorney General in March 2024; the case moved to KPK, which by March 2025 had named 12 suspects including two LPEI managing directors, with potential state loss of Rp 11.7 trillion across 11 debtors; mechanisms included falsified documents/financial reports and kickbacks of 2.5–5% of credit value to directors (Kompas.id, 2025; Tempo, 2024).
- **Bank Jakarta (Bank DKI) fictitious invoices, 2026**: BPK findings triggered investigation of Rp 295 billion in working-capital credit to PT Rass Mandiri Utama backed by fictitious invoices and inadequate collateral (Senator.id, July 2026).
- Globally, duplicate financing — pledging the same invoice/cargo to multiple lenders — is trade finance's recognized fraud pattern; GTR documented recycled-invoice and shell-company receivables scams costing individual lenders seven-figure sums, 2022–2024 (GTR Risk, 2024).

## Cost of the Problem
- Rp 1.7 trillion (BNI case, 2003, court records via JISIP 2022).
- Rp 11.7 trillion potential state loss (LPEI case, KPK, 2025).
- Rp 295 billion (Bank Jakarta case, BPK/Senator.id, 2026).
- ADB put the global trade finance gap at US$2.5 trillion for 2022 (ADB Trade Finance Gaps survey, 2024); fraud risk is one driver of high SME rejection rates (ADB: SME rejection ~41–45%, 2023–2025 surveys).
- Aggregate annual Indonesian trade-finance fraud losses: (unverified) — no named source publishes a total.

## Existing Solutions (as of 2026-07, named)
- **MonetaGo Secure Financing via Swift**: hash-based duplicate-financing registry live on the Swift API channel since 2022, accessible to all 11,000+ Swift member institutions — including Indonesian banks (Swift/MonetaGo, 2022; GTR).
- **ABS Trade Finance Registry, Singapore**: Association of Banks in Singapore selected MonetaGo to run a live national duplicate-financing registry (GTR, 2023).
- **Dead consortium chains**: we.trade insolvent 2022, Marco Polo insolvent Feb 2023 (€5.2m debts), Contour shut Nov 2023 processing only 60–70 transactions/month, TradeLens shut 2022 (Ledger Insights, TFG, 2022–2023). Failure cause was economics and adoption, not technology.
- **Document-checking AI**: Traydstream, Conpend/Surecomp scan L/C documents for discrepancies (global vendors; no verified Indonesian deployments found).
- **Indonesia**: SLIK (OJK debtor credit registry) is debtor-level, not document-level; INSW handles customs documents, not bank financing. No Indonesian duplicate-financing registry was found in searches as of July 2026.

## Why Insufficient
Indonesian banks still cannot answer "has this invoice/bill of lading already been financed elsewhere?" SLIK shows a borrower's loans, not the documents behind them. Swift/MonetaGo coverage is opt-in per bank and oriented to cross-border flows; SKBDN and rupiah KMK/invoice financing sit outside any registry. The LPEI and Bank Jakarta cases show insider-approved fraud against state lenders continues through 2026.

## Blockchain Test
The verification problem is multi-bank, but the parties are all regulated by BI/OJK, which are accepted neutral authorities. Singapore solved the identical problem with a centralized hash registry run by one vendor under the banking association — no chain. Contour/we.trade/Marco Polo demonstrate that consortium DLT adds governance cost without adoption. Tamper-evidence is not the binding constraint; participation and mandate are. Chain necessity is low-moderate (4/10).

## Kill Test Verdict
1. Without blockchain, problem persists — PASS.
2. PostgreSQL under a trusted operator (OJK/BI-mandated registry, MonetaGo model) solves it just as well — FAIL.
3. Six-month ERP feature — pass (it is a cross-bank utility, not a feature), but Swift already distributes MonetaGo to Indonesian banks.
4. Standalone value — plausible but consortium sales to state banks are slow.
**KILLED on question 2.**

## Scores
- Severity 8 — repeated trillion-rupiah frauds (BNI, LPEI) with criminal and regulatory exposure.
- Market 5 — registry/verification software TAM in Indonesia plausibly US$50–250M; core losses are large but the sellable product is small.
- WTP 6 — banks budget for fraud controls, but consortium procurement is slow and needs a regulator push.
- Chain 4 — multi-org, yet BI/OJK are accepted neutral operators; centralized registry proven equivalent.
- Urgency 6 — LPEI prosecution and Bank Jakarta case are live in 2025–2026; no hard regulatory deadline found.
- Competition 5 — global registries and doc-check vendors exist and reach Indonesia via Swift; no local incumbent dominant.
- Moat 6 — a mandated national registry would enjoy network effects, but MonetaGo could win that mandate.

**Weighted: 5.8** — below 7.0 cutoff and killed on the kill test.

## What Would Kill This Idea
Exactly what the kill test found: OJK/BI or Himbara banks adopting the Swift/MonetaGo service or commissioning a centralized national registry; MonetaGo signing an ABS-style deal with an Indonesian banking association. Also: SKBDN volumes may be too small to matter (volume data unverified), and the biggest documented losses (LPEI) were insider-approved — a registry does not stop directors taking kickbacks to approve financing they know is bad.

## Sources
- https://www.tempo.co/hukum/kronologi-korupsi-lpei-yang-ditangani-kpk-berapa-kerugian-negara--1224488
- https://www.kompas.id/artikel/en-kpk-tetapkan-lima-tersangka-baru-korupsi-lpei-negara-berpotensi-merugi-rp-117-triliun
- https://www.voaindonesia.com/a/menkeu-laporkan-dugaan-korupsi-pembiayaan-ekspor-triliunan-rupiah-ke-kejaksaan-agung/7533594.html
- https://www.researchgate.net/publication/365599203_KASUS_LC_FIKTIF_BNI_PENYALAHGUNAAN_LETTER_OF_CREDIT_DALAM_PERDAGANGAN_EKSPOR_IMPOR_DALAM_PERSPEKTIF_TINDAK_PIDANA_PENCUCIAN_UANG
- https://senator.id/2026/07/14/dugaan-kelalaian-bank-jakarta-modus-invoice-fiktif-dan-jaminan-tak-laik/
- https://www.ledgerinsights.com/contour-blockchain-trade-finance-network-shutter/
- https://www.tradefinanceglobal.com/posts/marco-polo-network-runs-insolvent/
- https://www.gtreview.com/supplements/gtr-risk-2024/trade-finances-latest-fraud-problem/
- https://www.gtreview.com/news/asia/singapore-goes-live-with-anti-fraud-registry-to-eliminate-duplicate-financing/
- https://www.businesswire.com/news/home/20221026005617/en/SWIFT-and-MonetaGo-deliver-major-milestone-in-fight-against-trade-finance-fraud
- https://www.adb.org/news/global-trade-finance-gap-reaches-16-trillion-smes-hardest-hit-adb
- https://scholarhub.ui.ac.id/ilrev/vol14/iss2/8/
