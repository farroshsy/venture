# Insurance Claims & Fraud — Indonesia

## Problem & Current Workflow
Two claim pipelines dominate. **JKN (BPJS Kesehatan)**: a patient presents a JKN card at a contracted hospital/clinic; the provider records diagnoses and procedures, codes them into INA-CBGs case-based tariffs, and submits electronic claims through BPJS's V-Claim system with supporting documents (SEP eligibility letter, medical résumé, billing detail); BPJS verifiers sample-check claims against medical records, then pay per tariff; audits happen after payment, by BPJS, Kemenkes, BPKP, or KPK. **Private health/life/general insurance**: mostly reimbursement or cashless via TPAs (e.g., AdMedika); the insurer's claims analysts check policy validity, exclusions, and documents (invoices, medical records, police reports for motor), often manually, and dispute or negotiate with hospitals. In both pipelines the payer cannot directly observe whether care happened as billed — it sees documents the provider authored.

## Stakeholders & Who Pays
Hospitals/clinics and doctors generate claims; BPJS Kesehatan (282.7 million members, 2025) and ~140 licensed insurers pay; employers and members pay premiums; the state injects money when JKN runs deficits. Kemenkes sets tariffs and runs anti-fraud teams (Tim Pencegahan Kecurangan JKN, formed under Permenkes rules; re-affirmed 2024); OJK regulates insurers, including POJK 36/2025 on the health-insurance ecosystem effective March 2026; KPK and BPKP audit; disputes run through BPJS verification appeals, OJK mediation, and courts.

## Trust Breakdown (documented incidents)
- **Phantom billing, 2024**: KPK, Kemenkes, BPKP, and BPJS jointly found three hospitals (one in Central Java ~Rp 29 billion, two in North Sumatra Rp 4 billion and Rp 1 billion) billing fictitious patients — of 4,341 claimed cases only about 1,000 existed in medical records; methods included harvesting KTP/KK/JKN card numbers and fabricating exam results and medical records (Antara; Tempo; Kompas, July 2024). Total potential loss ~Rp 34 billion (KPK, 2024).
- **Fraud prevalence estimate**: BPJS Kesehatan data presented at the First Indonesian Healthcare Anti-Fraud Forum put potential fraud at 0.6%–15% of total health financing (Media Indonesia, 2025) — a wide, weak range; treat as indicative only.
- **Trust context — investment-side scandals**: Jiwasraya, state loss Rp 16.81 trillion (BPK, 2020; three ex-directors sentenced to life); Asabri, state loss Rp 22.78 trillion (BPK, 2021; two ex-CEOs got 20 years). These were investment fraud, not claims fraud, but they hollowed public trust in Indonesian insurers.
- **Claims-cost spiral**: medical inflation 17.9% in 2025, projected ~17.8–20% for 2026, Asia's highest (AAUI chairman Budi Herawan via Readers.id/CNBC, 2026; Bisnis, 2026); AAJI put the 2025 health-insurance loss ratio at 127.39% (AAJI via Readers.id, 2026) — overtreatment and fraud are named drivers under industry evaluation with Kemenkes and OJK.

## Cost of the Problem
- JKN 2025: claims Rp 191.33 trillion vs premium income Rp 176.72 trillion; claims ratio 108.27%; deficit Rp 14.61 trillion (BPJS Kesehatan public expose via Kompas, July 2026). DJS deficit reported at Rp 17.13 trillion by Katadata (2026) on a different basis.
- If fraud is even 1% of JKN spending, that is ~Rp 1.9 trillion/year (arithmetic on BPJS 2025 figures; fraud share itself unverified).
- Private health claims paid: Rp 26.74 trillion in 2025, +9.1% y/y (AAJI via Readers.id, 2026).
- KPK phantom-billing finding: Rp 34 billion across three hospitals (2024) — the audited tip, not the total.

## Existing Solutions (as of 2026-07, named)
- **BPJS Kesehatan internal systems**: V-Claim submission, verification workflow, and a stated program to use AI for claims analysis and fraud prediction (GovInsider, 2024/2025).
- **State anti-fraud machinery**: KPK–Kemenkes–BPKP–BPJS joint monitoring team (active since 2017; the 2024 phantom-billing cases came from it); Kemenkes anti-fraud prevention teams and sanctions up to practice-license revocation (Kemenkes; Kompas, 2024).
- **Regulation**: POJK 36/2025 (effective March 2026) mandating medical advisory boards, co-payment, and risk-sharing for private health insurance (OJK via Readers.id, 2026); OJK anti-fraud strategy rules for financial institutions.
- **Global vendors in-market**: Shift Technology's fraud detection deployed at Tokio Marine Indonesia since 2020 (Shift Technology, 2020); core systems and TPA analytics from AdMedika (Telkom) across cashless networks.
- **Insurtech**: Qoala, Rey, and others digitize distribution/claims UX (funding/traction numbers unverified).

## Why Insufficient
Verification is retrospective sampling on provider-authored documents: BPJS verifiers see the claim file, not the encounter, so phantom billing survives until a joint audit physically reconciles medical records — which happened for three hospitals out of ~3,100+ contracted (hospital count unverified). Private insurers each fight the same hospitals separately, with no shared fraud blacklist or claims-history exchange across payers, so a provider caught inflating claims at one insurer continues at the next. Incentive design (fee-for-service outside INA-CBGs, tariff gaming inside it) is untouched by detection tools.

## Blockchain Test
The data needed to catch fraud — medical records, claims, membership — already sits with BPJS or each insurer; detection is analytics inside one payer's perimeter. A cross-payer fraud registry would be multi-org, but OJK/Kemenkes are accepted authorities and could host it centrally. No external verifier needs custodian-independent proof; auditors need access, not immutability. Chain necessity 3/10 — this is a database-plus-ML problem.

## Kill Test Verdict
1. Problem persists without blockchain — PASS.
2. PostgreSQL under a trusted operator (BPJS/OJK-hosted analytics and shared registry) solves it as well — FAIL.
3. Six-month incumbent feature: Shift Technology, core-system vendors, and BPJS's own AI program already ship this — FAIL.
4. Standalone value exists (deficit pressure) but the buyer is one state agency plus insurers served by incumbents.
**KILLED on questions 2 and 3.**

## Scores
- Severity 9 — 108% claims ratio, Rp 14.6T deficit, KPK criminal cases, and sector trust destroyed by Jiwasraya/Asabri.
- Market 5 — anti-fraud/claims-analytics spend by BPJS plus ~140 insurers plausibly US$50–250M TAM; the loss pool is huge but not the software market.
- WTP 7 — quantified loss avoidance and deficit pressure; BPJS is a motivated but slow single government buyer.
- Chain 3 — payer-side analytics on data the payer already holds; single trusted operator is fine.
- Urgency 8 — deficit widened 124% in 2025 and POJK 36/2025 took effect March 2026; action is being forced now.
- Competition 3 — Shift Technology live in Indonesia, BPJS building AI internally, global vendors abundant.
- Moat 3 — detection models and registries are copyable features for incumbents with the data.

**Weighted: 5.7** — below 7.0 cutoff and killed on the kill test.

## What Would Kill This Idea
It is already killed: BPJS's internal AI program plus the KPK-Kemenkes audit machinery occupy the JKN side, and Shift-class vendors occupy private insurers. The only defensible wedge — a cross-payer provider-fraud exchange — would be commissioned by OJK/Kemenkes as a centralized utility, not bought from a blockchain startup. The 0.6–15% fraud range is too wide to underwrite a business case.

## Sources
- https://www.antaranews.com/berita/4214447/kpk-bakal-usut-klaim-fiktif-bpjs-kesehatan-oleh-tiga-rumah-sakit
- https://www.tempo.co/hukum/kpk-mengendus-skandal-3-rumah-sakit-nakal-klaim-tagihan-fiktif-ke-bpjs-kesehatan-36243
- https://nasional.kompas.com/read/2024/07/24/20284041/kemenkes-ingatkan-rs-yang-ajukan-klaim-fiktif-ke-bpjs-izin-praktek-bisa
- https://nasional.kompas.com/read/2026/07/02/19451181/bpjs-kesehatan-pengeluaran-layanan-2025-tembus-rp-19133-triliun-rasio-klaim
- https://katadata.co.id/finansial/keuangan/6a462f6ee51e3/defisit-bpjs-kesehatan-bengkak-124-di-2025-tembus-rp-17-1-triliun-ada-apa
- https://www.bloombergtechnoz.com/detail-news/111405/rasio-klaim-jkn-tembus-108-72-bpjs-bayang-bayangi-defisit
- https://mediaindonesia.com/humaniora/894169/pencegahan-fraud-diperkuat-di-tengah-lonjakan-biaya-medis
- https://www.readers.id/inflasi-medis-ojk-pojk-asuransi-kesehatan
- https://www.cnbcindonesia.com/news/20260603145243-4-739793/inflasi-medis-sentuh-179-asuransi-kesehatan-bisa-tempuh-langkah-ini/amp
- https://www.bpk.go.id/news/kerugian-negara-kasus-jiwasraya-rp1681-triliun
- https://keuangan.kontan.co.id/news/melebihi-jiwasraya-kerugiaan-kasus-asabri-mencapai-rp-2278-triliun
- https://www.shift-technology.com/news/tokio-marine-indonesia-implements-shift-technology-to-fight-auto-insurance-fraud
- https://govinsider.asia/intl-en/article/bpjs-kesehatan-to-use-ai-improve-efficiency-healthcare-services
- https://kemkes.go.id/id/cegah-fraud-kemenkes-bentuk-tim-pencegahan
