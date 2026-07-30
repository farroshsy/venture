# Foreign Verification of Indonesian Seafarer Certificates (seafarer-verify-foreign, axis 1)

## Problem & Current Workflow
Phase 1 scored the issuance side; this candidate tests the verifier side. An Indonesian seafarer's Certificate of Competency (CoC) or Proficiency (CoP) is issued by the Directorate General of Sea Transportation (DGST/Ditjen Hubla, Kemenhub) and recorded in the national registry at pelaut.dephub.go.id. Anyone — a Panamanian flag administration, a P&I club correspondent, a Singapore manning agent — can verify a certificate by entering the 10-digit seafarer code on that public portal, free of charge; newer e-certificates carry QR codes that resolve directly to the registry record (Kemenhub/Hubla, 2024–2025 digitalization program). To serve on a foreign-flag ship, the seafarer additionally needs a flag-state endorsement under STCW Regulation I/10: the flag state (Panama, Liberia, Marshall Islands, etc.) checks the Indonesian CoC against the issuing administration before issuing its Certificate of Recognition. Liberia issues electronic endorsements within days; Panama routes through licensed agents and consulates and is slower (Learnmarine, 2025; Seamanbooks, 2025). On top of this sit port state control inspections (Tokyo MoU, Paris MoU), P&I club condition surveys, and OCIMF vetting, all of which examine certificates on board.

## Stakeholders & Who Pays
Indonesian side: DGST as issuer and registry custodian; ~360 approved training providers; manning agencies holding SIUPPAK licenses; the seafarers themselves — Kemenhub counted roughly 1.2 million registered Indonesian seafarers (Kemenhub via VOI, 2021), with 2024 statements citing 1.4 million (Kemenhub, 2024); the pelaut.dephub.go.id registry itself displays over 1.59 million records (accessed 2026), and the BIMCO/ICS Seafarer Workforce Report 2026 counts 72,304 Indonesian officers supplied to world shipping (as cited in trade press, 2026). Foreign side: flag administrations (Panama AMP, Liberia LISCR, and others) that issue endorsements; shipowners and ship managers who bear crewing risk; P&I clubs (e.g., West of England) that insure the consequences; port state control regimes that detain. Fees for endorsements are paid by seafarers or manning agencies; verification against the Indonesian registry itself is free; detention losses fall on shipowners.

## Trust Breakdown
- 2020: a joint Polda Metro Jaya–Kemenhub operation arrested 11 people who had printed 5,041 fake seafarer certificates between 2018 and 2020, earning about Rp20 billion, at Rp700 thousand to Rp20 million per certificate. The syndicate bribed a Kemenhub honorary employee to smuggle genuine certificate blanks out of the ministry warehouse (Viva, 2020) and illegally accessed the Kemenhub registration site so fake holders appeared registered when checked online; Kemenhub later said the system was remediated per BSSN recommendations (Antara, 2020; Detik, 2020; Cyberthreat.id, 2020). This is the key incident: the registry custodian's own integrity was compromised from both inside and outside.
- July 2024: West of England P&I Club alerted members after a PSC inspection found a VLCC Master holding fraudulent STCW documentation, warning of vessel detention exposure (West P&I, 2024).
- A frequently cited IMO study found 12,635 forgery cases across supplier states (IMO, 2001 — dated).
- Claims of 145 fraudulent STCW certificates flagged by PSC in 2021–2022 circulate in vendor marketing (QR Mark via TechBullion, 2025) — treat as (unverified).

## Cost of the Problem
- Syndicate turnover Rp20 billion over three years (Antara, 2020) — this is collusion revenue, not addressable spend, and is stripped from sizing.
- Detention cost estimates of $20,000–50,000/day appear only in vendor content (marineinspection.app, 2025) — (unverified).
- Tokyo MoU recorded 32,054 inspections and 1,189 detentions in 2024, but does not break out certificate-fraud detentions (Tokyo MoU Annual Report, 2024).
- Registry verification is free; flag endorsement fees are administrative and captured by flag states. No verified number shows recurring third-party verification spend addressable by a startup.

## Existing Solutions (as of 2026-07)
- pelaut.dephub.go.id public verification portal plus QR e-certificates (Kemenhub, live).
- IMO GISIS contact points for certificate verification between administrations (IMO).
- Flag-state digital endorsement systems, Liberia and Marshall Islands being near-fully electronic (Learnmarine, 2025).
- Commercial verification/QR vendors (QR Mark; Cirrus digital STCW assessment tooling, 2025).
- Under the STCW Convention, every party must maintain a register and answer authenticity queries from other parties and companies (IMO STCW Reg I/2).

## Why Insufficient & Who Rejects the Existing Anchor
The honest finding is that no economically relevant party rejects the anchor. The STCW treaty legally designates the issuing state as the single source of truth, and foreign flag states, P&I clubs, and PSC officers all resolve doubt by querying Kemenhub — West P&I's own 2024 circular tells members to "consult the flag states," i.e., to use the state anchor harder, not to replace it. The 2020 hack shows the custodian's integrity can fail, which is the one H1-relevant crack: a hash-anchored, append-only registry would have made retroactive insertion of 5,041 records detectable by outside verifiers. But the remedy adopted was conventional hardening plus QR e-certificates, and foreign acceptance never lapsed.

## Blockchain Test
Custodian-independent verification is structurally unnecessary here because treaty law manufactures acceptance of the custodian. Tamper-evidence would add assurance against insider insertion, but the only party who could deploy it is Kemenhub itself — making it a government IT procurement, not a standalone product.

## Kill Test Verdict — KILLED
1. Without blockchain, does the problem persist? Yes — forgery persists. PASS.
2. Would PostgreSQL under a single trusted operator solve it? Yes — it already does; both sides accept Kemenhub's registry by treaty. FAIL.
3. Can the state ship it in six months? Yes — QR e-certificates are already shipping. FAIL.
4. Standalone economic value? No verified addressable spend; verification is free. FAIL.

## Scores
- Severity 6 — documented fraud syndicate, detention and casualty exposure, but free instant workaround exists for verifiers.
- Market 3 — no verified third-party verification spend; well under $50M addressable.
- WTP 4 — owners/P&I fund vetting, but will not pay to duplicate a free treaty-mandated anchor.
- Chain 5 — multi-org and cross-border, but an accepted trusted intermediary (issuing state) exists by treaty; 2020 registry compromise is the only counter-signal.
- Urgency 5 — recurring fraud alerts (West P&I 2024), STCW digitalization amendments, no hard deadline.
- Competition 4 — the state portal plus flag-state e-systems and QR vendors already occupy the space.
- Moat 3 — a verification layer over a public registry is a copyable feature.
- Weighted: 4.4

## What Would Kill This Idea
Already killed: treaty-established acceptance of the state anchor. It would revive only if a major flag state or the EU (EMSA) formally suspended recognition of Indonesian certificates over registry integrity — no evidence of that as of 2026-07; EMSA assessments continue within the normal dialogue process (EMSA, 2025).

## Sources
- https://www.antaranews.com/berita/1574214/tiga-tahun-beraksi-sindikat-sudah-cetak-5041-sertifikat-pelaut-palsu
- https://metro.tempo.co/read/1357788/polisi-tangkap-sindikat-pemalsu-sertifikat-anak-buah-kapal
- https://www.viva.co.id/berita/kriminal/1280798-jual-sertifikat-pelaut-palsu-oknum-pekerja-honorer-kemenhub-dicokok
- https://news.detik.com/berita/d-5068079/palsukan-sertifikat-pelaut-dengan-meretas-website-kemenhub-11-pria-ditangkap
- https://cyberthreat.id/read/7285/Aplikasi-Registrasi-Sertifikat-Pelaut-Diretas-Kemenhub-Klaim-Telah-Perbaiki-Sistem-Sesuai-Saran-BSSN
- https://www.westpandi.com/news-and-resources/news/july-2024/stcw-fraudulent-certification/
- https://www.imo.org/en/OurWork/HumanElement/Pages/FraudulentCertificates.aspx
- https://pelaut.dephub.go.id/verifikasi
- https://hubla.dephub.go.id/home/post/read/4380/antisipasi-ijazah-pelaut-palsu-kementerian-perhubungan-perketat-pengawasan
- https://www.tokyo-mou.org/wp/wp-content/uploads/ANN24.pdf
- https://learnmarine.com/blog/stcw-certificates-%E2%80%94-what-panama-and-liberia-really-require
- https://voi.id/en/news/33764
- https://www.emsa.europa.eu/visits-to-member-states/standards-for-seafarers.html
