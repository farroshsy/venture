# Tamper-Evident Seafarer Certificate Verification

Slug: `seafarer-registry-integrity` | Mechanism: credential verification

## Problem & How Truth Is Established Today

An Indonesian seafarer's Certificate of Competency/Proficiency is issued by Kemenhub's Directorate General of Sea Transportation (DGST/Ditjen Hubla) and recorded under a 10-digit seafarer code at pelaut.dephub.go.id, free and public. Foreign flag administrations (Panama, Liberia, Marshall Islands), P&I clubs, manning agents, and port state control (Tokyo/Paris MoU) all resolve doubt the same way: query Kemenhub's registry or ask the flag state to confirm. Under STCW Regulation I/2, the issuing party must answer verification queries from other parties, so the registry custodian is the treaty-designated source of truth — no alternative anchor is permitted.

## Buyer & Who Pays

Cross-organizational: Indonesian side is DGST/Kemenhub (issuer/custodian, unpaid for verification), manning agencies (SIUPPAK holders), and ~1.4-1.6 million registered Indonesian seafarers (Kemenhub 2024; pelaut.dephub.go.id shows 1.59M+ records, accessed 2026). Foreign side — the theoretical buyer — is flag administrations issuing endorsements, shipowners/managers bearing crewing risk, and P&I clubs (e.g. West of England) insuring the consequences. Registry verification and flag endorsement checks are free; no recurring third-party verification spend was found.

## Documented Failures

- 2018-2020: a syndicate printed 5,041 fake seafarer certificates, earning ~Rp20 billion, by bribing a Kemenhub honorary employee to smuggle genuine blanks out of a ministry warehouse and hacking the registration website so fakes appeared registered when checked online — the custodian was compromised at both the human and system layer. 11 arrests, Polda Metro Jaya/Kemenhub joint operation (Antara, 2020; Detik, 2020; Viva, 2020; Cyberthreat.id, 2020, citing BSSN-guided remediation).
- 26 Jul 2024: West of England P&I Club circular — a port state control inspection found a VLCC Master holding fraudulent STCW documentation, unqualified for his role, exposing the vessel to detention. The Club's prescribed remedy: "consult the flag states during the vetting period" and confirm certificates directly with the issuing administration — lean on the state anchor harder, not adopt a third-party verifier (West P&I, Jul 2024).
- No comparable custodian breach documented since 2020 (search, 2026-07), consistent with post-2020 hardening (TTE e-signatures, QR e-certificates) holding.

## Bottom-Up ARR Path

No credible path found. Registry verification is free by treaty design; the market's own documented response to fraud (West P&I 2024) is "query the flag state," not "buy independent verification." No Indonesian ACV comparable exists for third-party seafarer-certificate verification. Evidence quality: **weak** — this is the term that fails K4, not merely scores low.

## Existing Solutions (mid-2026)

- pelaut.dephub.go.id public verification portal, now with QR codes on e-certificates and certified electronic signatures (TTE) (Kemenhub/Hubla digitalization program, 2024-2025).
- IMO amendments MSC.540(107)/541(107), effective January 2025, let administrations issue fully digital, internationally recognized STCW certificates; industry sources describe elliptic-curve/SHA-256-384 cryptographic authentication and QR-scan verification for PSC, digital-by-default for new/revalidated certificates from 2026 (Cirrus Assessment, 2026; Seaplify, 2026).
- BIMCO launched a seafarer digital-certificates charter (9 Jun 2026) with an interoperability pilot scheduled September 2026; early signatories are commercial vendors LEDGID, Maritime Passport, Crewdentials (Smart Maritime Network, Jun 2026) — Indonesia/Kemenhub's participation not confirmed in this source.
- Philippines precedent: MARINA, ICS, and Lloyd's Register OneOcean signed a tripartite MOU (12 Feb 2025, IMO HQ) for a real-time digital certificate platform with an API to MARINA's MISMO system (LR press release, 2025) — a neighboring flag state already moving on the exact function.
- IMO GISIS provides administration-to-administration verification contact points.

## Kill Tests

- **K1 Data access — PASS.** Foreign verifiers have free, treaty-mandated access to the issuing registry; no cooperation from the seafarer being evaluated is required to query it.
- **K2 Oracle bound — PASS.** The contested fact (is this certificate genuine and current) is inferable from the registry/flag-state cross-check; not a fabricated-at-source physical truth or off-system collusion.
- **K3 Absorption — FAIL (KILL). Cited evidence:** IMO MSC.540(107)/541(107) (effective Jan 2025, digital-by-default from 2026) is an announced international regulation directly governing this exact function; Kemenhub has already shipped QR e-certificates plus certified e-signatures (2024-2025, per Hubla program); BIMCO's charter and September 2026 interoperability pilot show the industry actively building the verifier-facing layer this candidate would occupy, with commercial vendors (LEDGID, Maritime Passport, Crewdentials) already signed on; a neighboring flag state (Philippines/MARINA) has a funded, dated implementation (MOU Feb 2025) for the identical mechanism. This is existing roadmap + announced regulation + incumbent-adjacent implementation together, the strongest evidentiary combination K3 requires.
- **K4 Bootstrap Bar — FAIL.** No verified addressable spend; the documented market response to fraud is to use the free state/flag-state channel harder, not to pay a third party.

**Survives: no. Killed on K3 (and independently would fail K4).**

## Scores

- Severity 6 — documented multi-year custodian-compromise fraud and a dated 2024 P&I fraud alert, but the market response is procedural reliance on the existing anchor, not dedicated third-party-verification spend.
- Revenue quality 3 — no Indonesian ACV comparable; verification is free by treaty and by practice.
- WTP 3 — budget owners (P&I clubs, flag states) are not paying to duplicate a free, treaty-anchored lookup; West P&I's own guidance directs members back to the state anchor.
- Data position 3 — the underlying registry is a free public feed available to any competitor.
- Absorption distance 3 — this is the dimension the K3 kill evidence anchors: an active 12-month international rollout (IMO amendments, BIMCO pilot, Philippines MOU) directly targets the same function.
- Competition 4 — not whitespace: state QR/TTE system, IMO's own e-certificate framework, and three named commercial digital-certificate vendors (LEDGID, Maritime Passport, Crewdentials) are already active, though none confirmed Indonesia-specific yet.
- Moat 3 — a verification layer over a free public/treaty-anchored registry is copyable and is exactly what the IMO framework standardizes away.

**Weighted: 0.20(6)+0.20(3)+0.15(3)+0.15(3)+0.10(3)+0.10(4)+0.10(3) = 3.7**

## Upside Flag

None credible. The IMO/BIMCO digitization wave is the opposite of an opening — it is the incumbent absorbing the exact mechanism this candidate proposed (cryptographic, tamper-evident, QR-verifiable certificates immune to retroactive database insertion, which is precisely what would have defeated the 2018-2020 attack).

## What Would Kill This (already killed; noted for completeness)

Already killed by the IMO MSC.540/541 rollout and Kemenhub's own QR/TTE program. It would only be worth revisiting if a major flag state or the EU (EMSA) formally suspended recognition of Indonesian certificates over registry integrity specifically — no evidence of that as of 2026-07.

## Sources

- https://www.antaranews.com/berita/1574214/tiga-tahun-beraksi-sindikat-sudah-cetak-5041-sertifikat-pelaut-palsu
- https://news.detik.com/berita/d-5068079/palsukan-sertifikat-pelaut-dengan-meretas-website-kemenhub-11-pria-ditangkap
- https://www.viva.co.id/berita/kriminal/1280798-jual-sertifikat-pelaut-palsu-oknum-pekerja-honorer-kemenhub-dicokok
- https://cyberthreat.id/read/7285/Aplikasi-Registrasi-Sertifikat-Pelaut-Diretas-Kemenhub-Klaim-Telah-Perbaiki-Sistem-Sesuai-Saran-BSSN
- https://www.westpandi.com/news-and-resources/news/july-2024/stcw-fraudulent-certification/ (fetched directly, 2026-07: Jul 26 2024 circular, VLCC Master fraudulent STCW documentation, remedy = consult flag states)
- https://cirrusassessment.com/stcw-certificates-go-digital-what-maritime-training-providers-need-to-know/ (fetched directly, 2026-07: MSC.540/541 details, elliptic-curve/SHA-256-384 signing, QR verification, digital-by-default 2026)
- https://smartmaritimenetwork.com/2026/06/09/bimco-launches-seafarer-digital-certificates-charter/ (fetched directly, 2026-07: charter signatories LEDGID/Maritime Passport/Crewdentials, Sept 2026 interoperability pilot)
- https://www.lr.org/en/knowledge/press-room/press-listing/press-release/2025/landmark-mou-signed-to-simplify-the-future-of-digital-seafarer-certification/
- https://pelaut.dephub.go.id/verifikasi
- https://www.imo.org/en/OurWork/HumanElement/Pages/FraudulentCertificates.aspx
- Prior internal research (Program A, 2026-07-29): /Users/farros/Downloads/VENTURE/research/axes/seafarer-verify-foreign.md, /Users/farros/Downloads/VENTURE/research/industries/workforce-credentials.md
