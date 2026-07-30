# Workforce Credentials — Migrant Worker & Seafarer Credentials

## Problem & Current Workflow

Land-based migrant workers (PMI): a candidate registers through a licensed placement company (P3MI), which matches a job order and applies for an SIP2MI recruitment permit; the worker completes medical checks, competency training, orientation (OPP), and departure via official channels. Since August 2025 the whole pipeline — registration, SIP2MI, monitoring — runs through KemenP2MI's SISKOP2MI single-channel system, free and national, including migrant crew on merchant and fishing vessels (KemenP2MI, 2025). Seafarers: training at approved diklat centers leads to Certificates of Competency/Proficiency issued by Kemenhub's Directorate General of Sea Transportation, recorded against a 10-digit seafarer code and verifiable at pelaut.dephub.go.id, now with QR and certified e-signature (TTE); foreign flag states verify Indonesian certificates before issuing endorsements. The IMO cleared electronic STCW certificates from 1 January 2025 (MSC.1/Circ.1665).

## Stakeholders & Who Pays

Workers pay agencies, training centers, and — in the fraud economy — brokers. P3MI/manning agencies pay for compliance and licensing; foreign employers and shipowners pay manning fees and bear the risk of incompetent crew. KemenP2MI (ex-BP2MI), Kemenhub, Imigrasi, and police audit and enforce; SBMI and NGOs dispute on behalf of victims; foreign port state control audits certificates at sea.

## Trust Breakdown (documented incidents)

- 2018–2020: a syndicate printed 5,041 fake seafarer certificates over three years, earning about Rp20 billion, by bribing a Kemenhub honorary employee to steal authentic certificate blanks and hacking the ministry's registration website so fakes appeared valid in the official database; prices ran Rp700 thousand to Rp20 million; 11 arrests (Antara; Detik, 2020). BSSN-guided remediation followed (Cyberthreat.id, 2020). This is the defining incident: the trusted custodian itself was compromised at both the human and system layer.
- December 2024–January 2025: KemenP2MI uncovered three TPPO cases with 10 victim CPMI, including falsified authentic data and broker-made passports at Rp7–8 million per person; total victim losses Rp93 million (KemenP2MI, 2025).
- A Libya trafficking suspect earned Rp11.6 billion placing workers unprocedurally (Media Indonesia, 2025).
- Scale: BP2MI head Benny Rhamdhani stated 4.6 million PMI are nonprocedural, against 4.4 million registered, citing World Bank's 9 million total (Medcom, December 2021). Minister Karding put registered PMI at 5,076,000 and illegal PMI above 5 million (2025 statements, Antara/BatamNow).

## Cost of the Problem

- Remittances at risk/context: US$15.7 billion in 2024, up 10.56% YoY (Bank Indonesia, via Antara/Kompas, 2025); roughly Rp288 trillion in 2025, up 14% (Minister P2MI, Antara, 2026).
- Fraud economics: Rp20 billion syndicate revenue over three years (Polda Metro Jaya, 2020); Rp11.6 billion single trafficking operation (Media Indonesia, 2025); Rp93 million across three early-2025 TPPO cases (KemenP2MI, 2025).
- 25,403 PMI repatriated as problem cases during 2025 (KP2MI, 2025). 90% of nonprocedural workers were victims of unofficial placement (BP2MI, 2021).
- Aggregate annual loss to document fraud: (unverified).

## Existing Solutions (as of 2026-07)

- Government: SISKOP2MI single-channel placement (launched August 2025); KP2MI/BP3MI enforcement posts; Kemenhub's pelaut.dephub.go.id and dokumenpelaut.dephub.go.id with QR verification and certified e-signatures; 296,948 legal placements in 2025 against a 259,144 target (KP2MI, 2026).
- International: IMO e-certificate framework (PKI-based, flag-state authority) effective January 2025; IMO GISIS for administration-to-administration checks.
- Private/startup: no dominant Indonesian or regional startup in migrant/seafarer credential verification surfaced after search (2026-07); global maritime blockchain credential pilots (c. 2018–2019) did not reach production dominance. Background-check and manning software exists but not as a credential trust layer.

## Why Insufficient

Verification remains custodial: a foreign employer or port state checking an Indonesian certificate ultimately queries the same ministry infrastructure that was hacked and internally bribed in 2018–2020. Workers hold paper or PDFs, not portable verifiable credentials; agencies in destination countries have no low-friction API; and the nonprocedural pipeline exists precisely because brokers can fabricate or bypass documents faster than the official channel processes them. The strongest counterpoint: post-2020 hardening (TTE, QR, BSSN remediation) is centralized — and no comparable syndicate breach has been documented since (search, 2026-07), suggesting the centralized fix is holding.

## Blockchain Test

This is the strongest chain case of the three: adversarial parties (brokers, corrupt insiders), plus external verifiers (foreign flag states, port state control, employers) who rationally should not trust the custodian, given documented custodian compromise. Tamper-evident, worker-held credentials would have defeated the 2020 blank-theft-plus-database-hack attack. However, the international standard that governs acceptance (STCW/IMO e-certs) is PKI-under-flag-state, and only Kemenhub can issue; a third party cannot own the root of trust.

## Kill Test Verdict

KILLED — narrowly, on tests 2 and 4.
1. Problem without blockchain? YES, emphatically.
2. PostgreSQL under a trusted operator? Mostly YES — internationally, the flag state is the accepted intermediary; post-2020 centralized hardening appears effective. FAIL (marginal).
3. Incumbent ships it in 6 months? Kemenhub already shipped QR/TTE verification; SISKOP2MI is live. FAIL.
4. Standalone value? Issuance authority is sovereign; a startup is confined to workflow tooling around free government rails. FAIL.

## Scores

- Severity 8 — documented large-scale fraud inside the issuing ministry, trafficking deaths and repatriations, millions unprotected.
- Market 5 — placement compliance, training certification, and manning tooling plausibly $50–250M; seafarer counts like 140,000 international crew are (unverified).
- WTP 6 — workers demonstrably pay Rp0.7–20 million even for fakes; agencies and shipowners pay for compliance.
- Chain 7 — external foreign verifiers plus documented custodian compromise; tamper-evidence would change behavior.
- Urgency 6 — IMO e-cert framework live 2025, SISKOP2MI rollout, TPPO politically hot; no deadline forcing private purchase.
- Competition 6 — government platforms under construction; no dominant private player; prior global pilots abandoned.
- Moat 5 — integration lock-in across agencies and training centers possible; IMO/Kemenhub own the standard, capping it.

Weighted: 6.3.

## What Would Kill This Idea

Kemenhub extending TTE/QR e-certificates to full IMO-compliant PKI e-certs (in progress); KemenP2MI mandating SISKOP2MI as the only legal channel (done, August 2025); the observation that fraud now routes around documents (nonprocedural departure) rather than through forged ones — a verification product does not touch the bypass channel.

## Sources

- https://www.antaranews.com/berita/1574214/tiga-tahun-beraksi-sindikat-sudah-cetak-5041-sertifikat-pelaut-palsu
- https://news.detik.com/berita/d-5068079/palsukan-sertifikat-pelaut-dengan-meretas-website-kemenhub-11-pria-ditangkap
- https://cyberthreat.id/read/7285/Aplikasi-Registrasi-Sertifikat-Pelaut-Diretas-Kemenhub-Klaim-Telah-Perbaiki-Sistem-Sesuai-Saran-BSSN
- https://www.medcom.id/nasional/peristiwa/ZkeE9ePk-bp2mi-ungkap-4-6-juta-pmi-nonprosedural-di-luar-negeri
- https://kp2mi.go.id/berita-detail/kemenp2mi-sosialisasikan-layanan-digital-siskop2mi-permudah-p3mi-ajukan-sip2mi-bagi-awak-kapal-niaga-dan-perikanan-migran
- https://www.antaranews.com/berita/5311765/kp2mi-penempatan-pekerja-migran-lampaui-target-2025-tembus-286000
- https://money.kompas.com/read/2025/04/21/180008026/remitansi-pekerja-migran-indonesia-rp-2533-triliun-sepanjang-2024
- https://www.antaranews.com/berita/5435930/menteri-p2mi-remitansi-pmi-2025-naik-14-persen-dari-2024
- https://mediaindonesia.com/megapolitan/914412/tersangka-kasus-tppo-libya-raup-keuntungan-rp116-miliar
- https://lingkar.news/nasional/25-403-pmi-dipulangkan-sepanjang-2025-kp2mi-perkuat-rehabilitasi-dan-pemberdayaan/
- https://pelaut.dephub.go.id/form-verifikasi-dokumen-keabsahan
- https://marinepublic.com/blogs/marine-law/887924-stcw-guide-certificates-latest-2026-amendments-costs
