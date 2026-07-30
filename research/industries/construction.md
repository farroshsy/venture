# Construction — Payments & Approvals (Indonesia)

Researched 2026-07-29. Phase 1 scan, pre-committed rubric.

## Problem & Current Workflow

Indonesian construction payments run on progress billing (termin). A typical private contract pays in tranches — e.g., after 30%, 70%, and 100% completion — while government contracts pay monthly against a Monthly Certificate (Ajaib, 2021; tekniksipil.id). Each payment requires a chain of paper approvals: joint field measurement (opname), a work-inspection report (berita acara pemeriksaan pekerjaan) signed by the supervising consultant, a progress certificate approved by the owner, then invoice, tax documents, and transfer. Milestones close with a berita acara serah terima (BAST); 5% retention is typically held until final handover. Variation orders (pekerjaan tambah/kurang, CCO) need separate owner approval and are a chronic dispute source (Global Arbitration Review, Indonesia construction chapter). Government work is tendered through LPSE e-procurement; contractors must hold an SBU (Sertifikat Badan Usaha) issued via LSBU under LPJK oversight, verifiable online (SmartLegal, 2025).

Subcontractors sit at the end of the chain. "Pay-when-paid" and "pay-when-certified" clauses are legally enforceable in Indonesia and are standard practice, so a subcontractor is paid only after the main contractor is paid, regardless of its own performance (ASCE Journal of Legal Affairs and Dispute Resolution, 2017; ResearchGate, Kajian Aturan Pembayaran Subkontraktor, 2020). Indonesia has no statutory security-of-payment/adjudication regime comparable to the UK or Australia; disputes go to negotiation, BANI arbitration, or court.

## Stakeholders & Who Pays

- Owners: government (PUPR, local governments via LPSE), SOEs, private developers — pay main contractors.
- Main contractors: state (Waskita Karya, WIKA, PP, Adhi Karya) and private — pay hundreds of subcontractors and suppliers ("vendors").
- Subcontractors/vendors: bear the cash-flow risk; finance work from their own balance sheets or expensive credit.
- Supervising consultants (MK/konsultan pengawas) certify progress; BPK/BPKP audit state projects; LPJK/PUPR police licensing; BANI and commercial courts (PKPU) handle disputes; banks provide working capital and supply-chain financing.

## Trust Breakdown (documented incidents)

- Waskita Karya accumulated vendor (subcontractor/supplier) arrears of Rp2.1 trillion due through 2024; ~82% has been paid, leaving Rp383 billion outstanding (Liputan6, 2025; Bloomberg Technoz, 2023 — Waskita held Rp4.6T cash it could not release to vendors because restructuring covenants required creditor consent).
- Vendor PT Megah Bangun Baja Semesta filed a PKPU (suspension-of-payments) petition against Waskita, accepted February 2023 (CNBC Indonesia, 2023).
- Waskita defaulted on Rp1.36 trillion of bond principal and interest (IDNFinancials, 2023). Shares remain suspended on IDX as of mid-2026; total liabilities cut from ~Rp84T (2023) to Rp67.1T, with Rp722 billion of non-guaranteed bonds still to restructure before September 2026 (Indonesia Business Post, 2026; StockWatch, June 2026 — bond restructuring 75% complete).
- WIKA carries Rp29 trillion of interest-bearing debt (Rp19T bank, Rp10T bonds/sukuk) (IDX Channel, 2025). Bondholders approved restructuring of 27 bond and sukuk series in April 2026; completion targeted H2 2026 (Bisnis.com, May 2026).
- Forged SBU business certificates are common enough that LPJK now works with police on criminal enforcement; using fake/expired SBU carries fines up to Rp1 billion under UU 2/2017 (SmartLegal.id, 2025).

## Cost of the Problem

- Rp2.1 trillion vendor arrears at one contractor alone (Waskita; Bloomberg Technoz/Liputan6, 2023–2025).
- Globally, sums in dispute on construction claims average 33.4% of contract budgets (HKA CRUX 8th Annual Report, 2025 — global figure, no Indonesia-specific breakdown published).
- Late payment demonstrably degrades subcontractor financial health and project productivity (Jurnal Konstruksia UMJ; qualitative).
- Indonesia construction market: USD 329.4 billion output in 2026 (Mordor Intelligence, 2026). Aggregate Indonesia-specific dispute/delay cost: (unverified).

## Existing Solutions (as of 2026-07)

- Doxa Connex (Singapore fintech): procure-to-pay for construction with a Subcon module handling progress claims, payment certificates, variation orders; DBS partnership for automated supplier payments; 1,000+ construction companies in ecosystem; piloting in Indonesia via National Hospital Surabaya (Doxa Holdings, 2024–2025).
- Gravel (Indonesia, US$14M from NEA et al., 2023): construction workforce/materials marketplace, 12,000+ projects — adjacent, not payment certification (Katadata, 2023).
- Government systems: LPSE e-procurement, LPJK/SIMPK SBU verification portals.
- Global: Oracle Textura, Procore, GCPay — payment-application platforms; no material Indonesian deployment surfaced in searches.
- Banks: supply-chain financing/invoice financing against contractor receivables; Waskita/WIKA Master Restructuring Agreements govern SOE payment waterfalls.

## Why Insufficient

The approval chain (opname → berita acara → certificate → invoice) is still bilateral paper; subcontractors cannot cheaply prove a certified receivable to a financier, and pay-when-paid remains legal. But the deepest documented failure is solvency, not record integrity: Waskita's vendors held valid, undisputed invoices and still weren't paid because cash was locked by restructuring covenants.

## Blockchain Test

A shared tamper-evident ledger of progress certificates would help subcontractor financing. However, banks are an accepted trusted intermediary in this chain — Doxa+DBS already operate exactly this model on conventional infrastructure. Tamper-evidence does not unlock payment when the payer is insolvent.

## Kill Test Verdict — KILLED

1. Problem survives without blockchain? YES (passes).
2. Would PostgreSQL under a trusted operator solve it? YES — a bank- or platform-operated payment-certification and SCF system (Doxa Connex model) is accepted by all parties. FAILS.
3. Could an incumbent ship it in 6 months? Plausibly — Doxa already ships the Subcon workflow regionally and is entering Indonesia. FAILS.
4. Standalone value? Yes in principle (Doxa's existence proves it), but 2 and 3 already kill the blockchain venture.

## Scores

- Severity 7 — recurring vendor losses, PKPU filings, dedicated restructuring apparatus; documented multi-trillion-rupiah arrears.
- Market 6 — USD 329B output (Mordor, 2026) is verified, but capturable software/fintech TAM is (unverified); between $250M–1B plausible.
- WTP 5 — budget owners exist (owners, banks) but the natural buyers (main contractors) are financially distressed.
- Chain 5 — multi-org, but banks/platforms are accepted trusted intermediaries (anchor case).
- Urgency 5 — restructurings conclude 2026, pressure real, but no regulatory deadline forcing new payment infrastructure.
- Competition 5 — several attempts (Doxa regional, Gravel adjacent, global vendors), none dominant in Indonesia.
- Moat 5 — integration lock-in achievable; workflows copyable.

Weighted: 0.20(7)+0.20(6)+0.15(5)+0.15(5)+0.10(5)+0.10(5)+0.10(5) = **5.6**

## What Would Kill This Idea

Already killed: an accepted neutral intermediary (bank/SCF platform) makes blockchain unnecessary, and the flagship pain (SOE arrears) is insolvency that no ledger cures. It would revive only if a security-of-payment law mandated independent, court-grade certification records across adversarial parties.

## Sources

- https://www.bloombergtechnoz.com/detail-news/14094/penyebab-waskita-wskt-tak-bisa-bayar-vendor-meski-punya-rp4-6-t
- https://www.liputan6.com/bisnis/read/5946275/waskita-karya-belum-bayar-utang-ratusan-miliar-ke-vendor-kenapa
- https://www.cnbcindonesia.com/news/20230705155709-4-451599/terus-muncul-fenomena-bumn-karya-nunggak-bayar-utang-vendor
- https://www.idnfinancials.com/id/news/49817/waskita-karya-gagal-bayar-bunga-dan-pokok-obligasi-rp1-36-triliun
- https://indonesiabusinesspost.com/6937/national-resilience/waskita-s-debt-tests-indonesia-s-fiscal-resilience-despite-s-p-s-bbb-rating
- https://stockwatch.id/hingga-30-juni-2026-restrukturisasi-utang-obligasi-waskita-karya-wskt-capai-75/
- https://www.idxchannel.com/market-news/utang-wika-capai-rp29-triliun-siapkan-restrukturisasi-di-2026
- https://market.bisnis.com/read/20260528/192/1976900/wika-bidik-restrukturisasi-rampung-semester-ii2026-rupo-rupsu-disiapkan
- https://ascelibrary.org/doi/10.1061/%28ASCE%29LA.1943-4170.0000226
- https://smartlegal.id/badan-usaha/2025/09/01/cara-cek-status-sertifikat-badan-usaha-sbu-konstruksi-di-lpjk-secara-online-sl/
- https://www.doxa-holdings.com/module/procure-to-pay
- https://katadata.co.id/digital/startup/656d6becb3021/investor-amerika-suntik-startup-konstruksi-gravel-rp-216-miliar
- https://www.hka.com/news/crux-insight-eighth-annual-report-from-insight-to-foresight/
- https://www.mordorintelligence.com/industry-reports/indonesia-construction-market
