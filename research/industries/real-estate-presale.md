# Property Pre-Sales & Escrow (Indonesia)

Researched 2026-07-29. Phase 1 scan, pre-committed rubric.

## Problem & Current Workflow

Indonesian developers finance construction with buyer money. Pre-project selling works as: developer secures land and building approval (PBG), then markets units under a PPJB (preliminary sale-purchase agreement). PP 12/2021 permits PPJB marketing only after land-status certainty, PBG, utility availability, and at least 20% construction progress (for rusun, 20% of construction volume of the marketed tower) (asriman.com; Industri Properti, on PP 12/2021). In practice, marketing frequently starts earlier via booking fees (NUP) and down payments, and enforcement of the 20% rule is weak. The buyer then pays a DP and installments — or a bank disburses a KPR indent — directly into the developer's operating account. There is no legal provision mandating escrow for pre-construction buyer funds; academic reviews confirm the gap explicitly (Al-Zayn Jurnal Ilmu Sosial & Hukum, 2024; Fundamental Journal, Universitas Bumigora). Title transfer (AJB, then SHMSRS for strata) happens only at handover, so for years the buyer holds an unsecured contractual claim against the developer's balance sheet.

When projects stall, remedies are post-hoc: complaints (now via the government's BENAR-PKP channel), civil suits, or insolvency petitions — and the Supreme Court's position that developer disputes fail the "simple proof" requirement makes PKPU/bankruptcy against developers largely unusable; buyers who do reach bankruptcy rank as concurrent creditors behind secured lenders (MNL Law; Leo Siregar & Associates; Properti Indonesia, list of apartment PKPU cases).

## Stakeholders & Who Pays

- Buyers/consumers: pay first, carry all completion risk.
- Developers (Lippo/Meikarta, Agung Podomoro, mid-tier and small developers): control the funds; resist any lock-up of presale cash.
- Banks: disburse KPR indent to developers; also sell voluntary escrow accounts (Kontan explainer) — not mandated for presales.
- Notaries/PPAT: paper the PPJB and AJB.
- Kementerian PKP: runs BENAR-PKP complaints; drafting a new Housing Law (UU Perumahan) in 2026 to tackle the backlog (ANTARA, 2026).
- YLKI, courts, and occasionally police (fraud) absorb the disputes.

## Trust Breakdown (documented incidents)

- Meikarta (Lippo, Cikarang): sold aggressively from 2017, stalled; by May 2025 the BENAR-PKP service logged 567 consumer reports. The ministry split refunds into 4 stages: stage 1 = 124 complainants owed Rp30 billion; stage 2 = 274 complainants under validation, Rp73 billion. As of February 2026 only Rp3.5 billion had been paid to 13 consumers — about 11% of stage 1 — after the July 2025 deadline lapsed (Kementerian PKP via Kompas, Feb 2026; detik, 2025–2026). Lippo says further refunds await unit sales (detik, 2025). One buyer group alone reported Rp4.5 billion in losses (Kompas, April 2025).
- Antasari 45 (Jakarta): construction halted since 2014; PKPU filed 2020; rebranded Antasari Place (Properti Indonesia).
- YLKI 2024: 49 individual housing complaints (4.94% of individual complaints) plus 177 group housing complaints; leading issues: stalled construction (30%), documents/certificates (20%), refunds (16%) (YLKI via Industri Properti/Liputan6, 2025).
- Buyer trauma is now a demand-side drag: consumers choosing to rent rather than buy presale units (Koran Properti; Kompas, July 2026, "Kenapa konsumen masih terjerat rayuan pengembang nakal?").

## Cost of the Problem

- Meikarta alone: Rp103 billion in validated/queued refund claims across stages 1–2 of four stages, from 567 reports (Kementerian PKP, 2025–2026).
- Rp4.5 billion loss for one consumer group (Kompas, 2025).
- National aggregate of buyer funds trapped in stalled projects: (unverified) — no official consolidated figure found.
- Indirect cost: presale distrust suppressing apartment absorption (qualitative; Koran Properti, 2025).

## Existing Solutions (as of 2026-07)

- Regulation: UU 1/2011 and UU 20/2011 plus PP 12/2021 (PPJB conditions, 20% threshold) — conduct rules, not fund segregation. New Housing Law in drafting (ANTARA, 2026); no mandatory escrow provision verified as of July 2026.
- BENAR-PKP (Kementerian PKP consumer complaint and mediation service, operating since 2025) — post-hoc, non-binding leverage.
- Bank escrow accounts: exist as a voluntary commercial product (Kontan); used in some B2B property deals, not standard in consumer presales.
- Proptech: Rumah123, Pinhome, Jendela and marketplace/mortgage players do listings and financing referral; hard search found no Indonesian startup operating presale escrow or milestone-release fund custody as of mid-2026.
- Regional precedent: Malaysia's Housing Development Account, Singapore project accounts, Dubai RERA escrow — mandated by law in those markets.

## Why Insufficient

Buyer money still lands on the developer's balance sheet on day one. The 20% rule is under-enforced, disclosure is unaudited, PKPU is blocked, and refunds depend on the developer's goodwill and liquidity — Meikarta's 11% refund completion a year past deadline shows the enforcement void. Nothing in the stack segregates funds, releases them against verified construction milestones, or gives buyers a secured position.

## Blockchain Test

The fix is fund segregation plus independent milestone verification. Both are delivered by a bank escrow agent operating under regulation — banks are an accepted, trusted, regulated intermediary in Indonesia. A ledger adds nothing a bank trust account plus an audited progress certificate does not; the binding constraint is law, not tamper-evidence.

## Kill Test Verdict — KILLED

1. Problem survives without blockchain? YES (passes).
2. PostgreSQL under a trusted operator? YES — a bank-operated escrow with milestone release solves it outright; Malaysia does this with ordinary banking infrastructure. FAILS.
3. Incumbent ships it in 6 months? Largely — any large bank could productize presale escrow quickly once demand or mandate exists. FAILS.
4. Standalone value? Only with a mandate: good developers do not need escrow to sell, bad developers will not adopt it voluntarily — adverse selection guts the market absent regulation. FAILS.

## Scores

- Severity 8 — documented national scandal (Meikarta), life-savings losses, broken refund process persisting into 2026.
- Market 5 — escrow/custody fees on presale volume plausibly $50–250M TAM; (unverified) precisely.
- WTP 3 — beneficiaries (consumers) cannot pay; developers will not pay to constrain their own cash; no compliance mandate exists.
- Chain 4 — multi-party, but a regulated bank is an accepted trusted intermediary; anchor case for "database fine."
- Urgency 6 — refund failures live through 2026 and a new Housing Law is in drafting, but no escrow mandate is on a clock.
- Competition 7 — verified whitespace-adjacent: no operating presale-escrow venture found; only a government complaint channel.
- Moat 4 — if escrow were mandated, banks capture it; the workflow is copyable.

Weighted: 0.20(8)+0.20(5)+0.15(3)+0.15(4)+0.10(6)+0.10(7)+0.10(4) = **5.4**

## What Would Kill This Idea

Already killed: it is a regulatory gap wearing a technology costume. Watch item: if the draft Housing Law introduces mandatory buyer-fund escrow, the compliance-infrastructure opportunity (milestone verification + fund release rails for banks) becomes real — WTP jumps to mandated spend and the timing question reopens.

## Sources

- https://www.kompas.com/properti/read/2026/02/03/060700921/ara-jawab-keluhan-pembeli-meikarta-belum-terima-refund
- https://www.detik.com/properti/berita/d-8024113/meikarta-mau-refund-38-konsumen-tunggu-apartemen-laku
- https://www.detik.com/properti/berita/d-8047135/refund-belum-dibayar-puluhan-konsumen-meikarta-tagih-janji-pengembang
- https://www.kompas.com/properti/read/2025/04/10/130000421/konsumen-meikarta-rugi-rp-45-miliar-minta-ganti-unit-atau-refund
- https://pkp.go.id/berita/detail/siap-kawal-proses-kasus-meikarta-kementerian-pkp-gelar-pertemuan-guna-pengumpulan-dan-verifikasi-dokumen-konsumen
- https://ejournal.yayasanpendidikandzurriyatulquran.id/index.php/AlZayn/article/view/1734
- https://asriman.com/begini-sistem-ppjb-dalam-pemasaran-perumahan-menurut-pp-no-12-tahun-2021-sebagai-turunan-dari-uu-cipta-kerja/
- https://www.industriproperti.com/headline/simak-perubahan-aturan-ppjb-di-pp-12-2021/
- https://mnllaw.co.id/developer-apartemen-dan-atau-rumah-susun-tidak-bisa-dipailitkan/
- https://www.propertiindonesia.id/post/deretan-apartemen-yang-digugat-pkpu-dalam-tiga-tahun-terakhir
- https://www.industriproperti.com/nasional/catatan-ylki-sektor-perumahan/
- https://www.liputan6.com/bisnis/read/5894403/ylki-terima-1675-pengaduan-konsumen-sepanjang-2024
- https://www.antaranews.com/berita/5663436/menteri-pkp-godok-uu-perumahan-demi-atasi-backlog-nasional
- https://koranproperti.com/trauma-apartemen-mangkrak-konsumen-pilih-sewa-ketimbang-beli/
- https://finansial.kontan.co.id/news/apa-itu-rekening-escrow-di-bank-ini-pengertian-fungsi-dan-cara-aksesnya
