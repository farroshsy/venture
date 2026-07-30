# Health Records & BPJS Claims (healthcare-claims)

## Problem & Current Workflow
JKN, run by BPJS Kesehatan, is the world's largest single-payer scheme. A hospital claim works like this: patient eligibility check and SEP (Surat Eligibilitas Peserta) issued through BPJS's V-Claim system → clinician documents care in the medical record → coder maps the episode to an INA-CBG tariff group → claim file plus supporting documents submitted digitally (Vedika, BPJS's digital claim verification) → BPJS verifiers approve, return ("pending"), or dispute the claim → payment. Audits come later: BPJS internal audit, Kemenkes, BPKP, and since 2017 the joint KPK–Kemenkes–BPJS–BPKP anti-fraud team (PK-JKN). In parallel, PMK 24/2022 obliges every healthcare facility to run electronic medical records integrated with SATUSEHAT, Kemenkes's HL7 FHIR R4 exchange platform; compliance enforcement is tightening through 2026 (dHealth/Medminutes compliance guides, 2025–2026). Private insurers run their own claim adjudication, increasingly AI-assisted.

## Stakeholders & Who Pays
Hospitals and clinics do the documentation and coding and carry cash-flow risk when claims pend. BPJS Kesehatan pays claims from a pool around Rp 150 trillion (2024, per KPK statements). Kemenkes sets tariffs and owns SATUSEHAT; BPKP and KPK audit; hospital associations (PERSI) dispute verification outcomes; private insurers (Allianz, Astra Life, etc.) and reinsurers (Tugure) pay commercial claims and fight leakage. Patients' identities are the raw material of fraud.

## Trust Breakdown (documented incidents)
- **Phantom billing, July 2024** — the PK-JKN team found fictitious claims at 3 private hospitals: one in Central Java (Rp 29 billion) and two in North Sumatra (Rp 4 billion and Rp 1 billion), ~Rp 34 billion total; KPK took the case criminal (Kompas; Tempo; BPK Sumut, 2024). Actors included doctors and hospital directors (CNBC Indonesia, 2024).
- **Records vs claims mismatch, 2024** — at those hospitals, 4,341 physiotherapy claims vs 1,072 documented cases: 3,269 fictitious claims worth Rp 501.27 million; phantom physiotherapy was ~75% of case volume (CNBC Indonesia/KPK, 2024).
- **Identity harvesting, 2024** — KPK described rings collecting KTP/BPJS numbers via fake community health events (baksos) to fabricate claims (Merdeka, 2024).
- **Systemic estimate, Sept 2024** — KPK Deputy Chair Alexander Marwata: healthcare fraud losses ~Rp 20 trillion, roughly 10% of ~Rp 150 trillion in health funds, in some cases with facility staff cooperating with BPJS personnel (Monitor Indonesia; Tirto, 2024). This is an official's estimate, not an audited figure.
- **Response** — Kemenkes formed a dedicated fraud-prevention team and sanctions regime (Kemenkes/Sehat Negeriku, July 2024).

## Cost of the Problem
Fraud: ~Rp 20 trillion/year if the KPK estimate holds (KPK, 2024) — an order of magnitude above JKN's historical deficits. Verified floor: Rp 34 billion from just three hospitals (KPK/BPK, 2024). Administrative drag: claim pendings and disputes tie up hospital working capital (magnitude unverified). SATUSEHAT/RME compliance is a real mandated IT spend for ~3,000 hospitals and tens of thousands of clinics and puskesmas (total unverified).

## Existing Solutions (as of 2026-07)
- **Government/payer:** BPJS V-Claim and Vedika (digital verification with rule-based screening), PK-JKN joint audit team, SATUSEHAT interoperability platform.
- **SIMRS/RME vendors** shipping SATUSEHAT integration: Infokes (eClinic), dHealth, and a crowded local SIMRS field.
- **AI fraud/claims tooling:** Badr Interactive sells healthcare fraud detection for the Indonesian ecosystem; Allianz Indonesia and Astra Life run AI claim automation; reinsurer Tugure pushes AI cost-containment (Infobank, 2026); insurers began deploying agentic AI for claims in 2026 (Bisnis.com, July 2026).

## Why Insufficient
Detection is post-hoc and sample-based: the 2024 cases were caught by manually comparing claims against medical records — records the same hospital authors and can fabricate. There is no independent, time-stamped evidence that care events happened. SATUSEHAT moves data but does not make it trustworthy. Nothing today gives an auditor proof that a record existed, unaltered, at the time of care.

## Blockchain Test
Superficially strong: adversarial parties (hospitals vs payer, even payer staff implicated) and external verifiers (KPK, BPKP, courts) who need proof independent of any custodian. But the dominant fraud mode is fabrication *at source* — a phantom patient is written into the record before any ledger sees it. Anchoring record hashes at creation time would harden the KPK's record-vs-claim audits and stop retroactive editing, yet garbage-in survives, and both Kemenkes (SATUSEHAT) and BPJS function as accepted central operators whose databases courts already accept.

## Kill Test Verdict — KILLED
1. Problem survives without blockchain? **Yes.** Pass.
2. PostgreSQL under a single trusted operator? **Largely yes** — BPJS/Kemenkes are accepted operators; the binding constraint is analytics and enforcement capacity, not custodian trust. Fail.
3. Incumbent ships it in 6 months? **Plausible** — Vedika rule engines, SIMRS vendors, and AI vendors (Badr, insurer stacks) are already shipping fraud-detection features. Fail.
4. Standalone value? The value pool is huge, but the buyer is one state payer with slow procurement. Marginal.

## Scores
- Severity 9 — Rp 20T official fraud estimate, criminal cases, existential pressure on JKN finances.
- Market 5 — claims-integrity software TAM (payer procurement plus hospital SIMRS modules) plausibly $50–250M; no verified figure.
- WTP 6 — budget owners exist (BPJS, Kemenkes, insurers) and pay for inferior analytics, but the biggest buyer is slow state procurement.
- Chain 4 — multi-org and adversarial, yet accepted trusted intermediaries (BPJS, Kemenkes) run mandated central systems.
- Urgency 7 — fresh 2024–2025 scandal, KPK cases live, SATUSEHAT enforcement tightening in 2026.
- Competition 4 — no dominant claims-integrity player, but BPJS internal systems plus active AI vendors and insurer stacks.
- Moat 4 — integration lock-in possible; core detection features are copyable.
- **Weighted: 5.8**

## What Would Kill This Idea
The kill already fired: fraud is fabricated at source, so tamper-evidence attacks the wrong link; the only buyer that matters (BPJS) trusts its own database and procures slowly; incumbent AI/SIMRS vendors can ship detection features faster than a startup can win a state contract. Watch item: if KPK/courts start requiring provably unaltered records as evidence, the chain score changes — no sign of that as of mid-2026.

## Sources
- https://nasional.kompas.com/read/2024/07/24/18514361/kpk-usut-dugaan-korupsi-3-rumah-sakit-yang-ajukan-klaim-palsu-ke-bpjs
- https://www.tempo.co/hukum/kpk-mengendus-skandal-3-rumah-sakit-nakal-klaim-tagihan-fiktif-ke-bpjs-kesehatan-36243
- https://sumut.bpk.go.id/wp-content/uploads/2025/09/KPK-TEMUKAN-FRAUD-KLAIM-BPJS-KESEHATAN-DI-SUMUT-DAN-JATENG-MERUGIKAN-NEGARA-RP-34-MILIAR-1.pdf
- https://www.cnbcindonesia.com/news/20240725070249-4-557428/terungkap-aktor-di-balik-fraud-bpjs-dokter-dirut-rumah-sakit
- https://monitorindonesia.com/ekonomi/read/2024/09/595847/kpk-sebut-kerugian-fraud-kesehatan-rp-20-triliun-manipulasi-dilakukan-fakses-bekerja-sama-dengan-bpjs-kesehatan ; https://tirto.id/kpk-ada-kerugian-rp20-t-dalam-pengelolaan-layanan-kesehatan-g3VV
- https://www.merdeka.com/peristiwa/kpk-deteksi-klaim-fiktif-layanan-kesehatan-modus-kumpulkan-data-ktp-hingga-bpjs-berkedok-baksos-169640-mvk.html
- https://sehatnegeriku.kemkes.go.id/baca/umum/20240725/1546077/cegah-fraud-kemenkes-bentuk-tim-pencegahan/
- https://medminutes.io/blog/regulasi-digital-health-rumah-sakit-2026-compliance-map/ ; https://www.dhealth.co.id/post/satusehat-2026-tahapan-integrasi-yang-wajib-dipenuhi-setiap-faskes ; https://www.infokes.co.id/satusehat-integrasi-klinik/
- https://badr.co.id/service-page/healthcare-fraud-detection/
- https://finansial.bisnis.com/read/20260703/215/1985614/asuransi-mulai-manfaatkan-agent-ai-percepat-proses-klaim ; https://infobanknews.com/tekan-lonjakan-klaim-kesehatan-tugure-soroti-peran-ai-dalam-strategi-cost-containment
