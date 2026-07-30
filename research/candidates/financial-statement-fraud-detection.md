# Independent Financial-Statement & Revenue Verification

## Problem & How Truth Is Established Today

Indonesian lenders and investors rely on three thin layers to trust a corporate's reported financials: (1) annual statutory audit by a KAP (sample-based, backward-looking, trust-dependent on management representations); (2) OJK's SLIK system, which reports credit history and debt exposure but not whether reported revenue/receivables/physical operating metrics are real; and (3) ad hoc, expensive forensic-accounting engagements (Big 4, boutiques) triggered only after suspicion arises. None continuously binds reported revenue/receivables to independent transaction-level evidence (bank flows, tax filings, counterparty confirmation, physical/IoT telemetry). This gap is exactly how eFishery ran two sets of books from 2018 until exposure in 2024/2025 — inflating revenue and its physical asset base (fish-feeder count) past auditors and blue-chip investors for six years.

## Buyer & Who Pays

- **Multifinance/factoring and receivables-based lenders** (~180 OJK-registered multifinance companies) — the exact profile of SNP Finance's 14 creditor banks, who had no independent way to verify the receivables pledged as collateral were real.
- **Invoice-financing and receivables-based fintech lenders** needing per-invoice/per-borrower verification before disbursing.
- **Mid-tier KAP audit firms** wanting an analytics layer to strengthen substantive audit-testing procedures (the beachhead "audit-testing variant" buyer).
- **Corporate/bond credit-risk teams at banks** doing ongoing covenant monitoring.

## Documented Failures (cited)

- **eFishery**: reported $752M revenue for 9M-2024, ~80% fabricated — actual revenue ~$157M, with a $35.4M loss; dual books (internal vs. investor-facing) traced back to 2018; founder Gibran Huzaifah sentenced to 9 years in April 2026 (Bloomberg, April 2025; CareerCandour, 2026).
- **SNP Finance**: Rp14 trillion embezzled from 14 creditor banks using fictitious receivables as collateral (Bareskrim Polri findings, reported via Bisnis.com/Kompas.id, 2018); OJK found actual financing disbursed by the 14 banks was only ~Rp2.2 trillion against much larger claimed collateral.
- **PT Tiga Pilar Sejahtera (AISA)**: 2017 financial-statement manipulation — Rp4 trillion asset overstatement and Rp1.78 trillion in fund flows to affiliated parties; two former executives sentenced to 4 years (Kontan.co.id).
- **Waskita Karya/Waskita Beton Precast**: fictitious-project procurement fraud 2016–2020, ~Rp2.5 trillion state loss (Antara Kalteng, Mediaindonesia); a related fictitious-document toll-road case ("Terpeka") was still under active witness examination as of 28 July 2026 (berjayanews.com).

## Bottom-Up ARR Path (K4)

Customers: ~180 OJK-registered multifinance/factoring companies + several dozen invoice-financing fintech lenders + ~20 mid-tier/regional KAPs as an audit-testing add-on ≈ 200–250 reachable named-segment customers. ACV: no confirmed Indonesian SaaS price point exists for this exact product; nearest comparables are project-based forensic-accounting engagements (Big 4/Kroll-style, priced per engagement, not disclosed) and global analytics tools like MindBridge/AppZen, whose Indonesia pricing is unverified. Illustrative path: 150 customers × $10,000 ACV ≈ $1.5M ARR via a self-serve/API subscription — plausible, but ACV rests on inference, not a confirmed local comparable.

## Existing Solutions (as of mid-2026)

- **MindBridge** (Canada) — AI general-ledger anomaly/risk-scoring for auditors; no confirmed Indonesia presence found.
- **AppZen** (US) — AI fraud/risk detection for finance teams, expense/AP-focused; no confirmed Indonesia presence found.
- **Big 4 forensic practices** (KPMG, EY, Deloitte, PwC) — established, funded, project-based, expensive; the default for post-suspicion investigation, not continuous monitoring.
- **Brick, Ayoconnect** — Indonesian open-banking/data-aggregation APIs (Brick covers the seven largest banks, ~90%+ of accounts; Ayoconnect serves 100+ companies) — infrastructure rails a fraud-detection product sits on, not analytics-layer competitors.
- No Indonesian-native, self-serve SaaS competitor doing continuous independent revenue/receivables verification was found as of July 2026.

## Kill Tests

- **K1 (Data access): PASS.** Lenders can contractually require bank-statement/ERP access as a financing condition via consented open-banking rails (Brick/Ayoconnect cover >90% of bank accounts); forensic-DD engagements already get contractual data-room and third-party confirmation access. Weaker for pre-investment VC due diligence without financing leverage, but the lender/factoring beachhead has real, non-adversarial access.
- **K2 (Oracle bound): PASS.** Revenue/receivables reality is inferable from bank transaction flows, tax e-Faktur data, counterparty confirmations, and physical/IoT telemetry (eFishery's real feeder count was itself a telemetry signal) — a records-based inference problem, not an unrecoverable fabricated-at-source truth.
- **K3 (Absorption): PASS.** No cited evidence of OJK/SLIK or a KAP building a self-serve continuous FS-fraud-analytics product on a 12-month roadmap; SLIK's scope is credit history, not revenue/receivables verification.
- **K4 (Bootstrap bar): PASS (moderate confidence).** ~200–250 named reachable customers; ACV plausible but inferred rather than directly evidenced by a local SaaS comparable.

**Survives: yes.**

## Scores

- Severity 9 — multiple documented large-scale losses, prosecutions, and a 9-year sentence traceable directly to the integrity failure.
- Bootstrap revenue quality 5 — plausible named segment; ACV rests on inference (no confirmed Indonesian SaaS comparable).
- WTP 7 — lenders already pay for an inferior alternative (forensic audit, post-hoc investigation) and have been directly burned (SNP Finance's 14 banks).
- Data position 5.5 — accessible via commodity open-banking rails at first; a cross-borrower fraud-pattern dataset could become defensible with scale but starts replicable.
- Absorption distance 6.5 — function orthogonal to SLIK's credit-history focus; no incumbent roadmap found.
- Competition 5 — global analytics tools exist but unconfirmed in Indonesia; Big 4 forensic practices are funded incumbents but project-based, not productized self-serve competitors.
- Compounding moat 6 — potential cross-lender fraud-pattern network effect (credit-bureau-like), though early-stage is single-tenant integration lock-in.

**Weighted: 6.4**

## Upside Flag

A cross-lender shared fraud-signal network (secondary evidence only, not scored) — similar in structure to a credit bureau — could let the product flag a borrower already caught inflating receivables at one lender before it reaches a second, compounding value with each additional subscriber.

## What Would Kill This

Evidence OJK is building a mandatory continuous transaction-verification requirement into SLIK itself; evidence Big 4 firms are productizing forensic-audit tooling into a self-serve subscription within 12 months; or evidence MindBridge/AppZen already signed Indonesian bank/multifinance customers.

## Sources

- [How Faked Financials Led to a $300 Million Collapse: The eFishery Scandal — AInvest, 2025](https://www.ainvest.com/news/faked-financials-led-300-million-collapse-efishery-scandal-2505/)
- [How Indonesian Startup eFishery's ex-CEO Gibran Huzaifah Faked the Numbers — Bloomberg, April 2025](https://www.bloomberg.com/news/features/2025-04-15/how-indonesian-startup-efishery-s-ex-ceo-gibran-huzaifah-faked-the-numbers)
- [The eFishery Scandal Explained: Fraud, Fallout, and the 9-Year Sentence — CareerCandour, 2026](https://careercandour.com/p/efishery-scandal-fraud-fallout-9-year-sentence)
- [Kasus SNP Finance Picu Keraguan atas Pengawasan Bank — Bisnis.com, 2018](https://finansial.bisnis.com/read/20180926/90/842287/kasus-snp-finance-picu-keraguan-atas-pengawasan-bank)
- [Belajar dari Kasus SNP Finance — Kompas.id](https://www.kompas.id/artikel/belajar-dari-kasus-snp-finance/amp)
- [KASUS FRAUD PT. TIGA PILAR SEJAHTERA — Binus Accounting, 2021](https://accounting.binus.ac.id/2021/12/27/kasus-fraud-pt-tiga-pilar-sejahtera-masalah-fraud/)
- [Manipulasi laporan keuangan, dua eks bos Tiga Pilar (AISA) divonis 4 tahun penjara — Kontan](https://nasional.kontan.co.id/news/manipulasi-laporan-keuangan-dua-eks-bos-tiga-pilar-aisa-divonis-4-tahun-penjara)
- [Kerugian negara akibat kasus korupsi Waskita capai Rp2,5 triliun — Antara Kalteng](https://kalteng.antaranews.com/berita/578721/kerugian-negara-akibat-kasus-korupsi-waskita-capai-rp25-triliun)
- [Korupsi Tol Terpeka, Saksi Buka Suara Soal Modus Dokumen dan Material Fiktif Waskita Karya — berjayanews, 28 July 2026](https://berjayanews.com/2026/07/28/korupsi-tol-terpeka-saksi-buka-suara-soal-modus-dokumen-dan-material-fiktif-waskita-karya/)
- [Brick — financial API provider, TechCrunch 2021](https://techcrunch.com/2021/03/17/financial-api-provider-brick-is-building-the-infrastructure-for-open-banking-in-southeast-asia)
- [Ayoconnect — Payments and Banking Enablement for Indonesia](https://www.ayoconnect.com/en/home)
- [MindBridge General Ledger Analytics](https://www.mindbridge.ai/general-ledger-analytics/)
- [AppZen — AI-powered fraud and risk detection for finance teams](https://www.appzen.com/use-case-fraud-and-risk-detection)
