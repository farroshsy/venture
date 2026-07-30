# Synthetic & Duplicate Borrower Detection (entity resolution)

Researched 2026-07-30. Program B, pre-committed rubric.

## Problem & How Truth Is Established Today

P2P lending (pindar) and multifinance onboarding establishes borrower
identity by collecting a KTP photo + selfie, running OCR/face-match
against Dukcapil (directly or via an e-KYC vendor), then checking loan
history through AFPI's Fintech Data Center (FDC) — a mandatory shared
database for OJK-licensed P2P lenders, described by industry sources as
also validating borrower identity and flagging loan-stacking (afpi.or.id/
fdc; idxchannel.com, 2026). Each lender's underwriting team runs this
per-application, in-house, at origination. The check is bounded to what
the applicant submits: it does not cross-reference an applicant's
biometrics/device fingerprint against *other* nominally-different
applicants within the same lender's own book unless the lender builds
that capability itself.

## Buyer & Who Pays

Named buyer: risk/underwriting and fraud teams at OJK-licensed P2P
lenders and multifinance (pembiayaan) companies doing unsecured
consumer/SME onboarding — organizations that already pay AFPI dues and
buy e-KYC/liveness services. No cross-organizational payer is required
for the core product: a single lender is a viable first customer.

## Documented Failures (cited)

- KoinP2P (PT Lunaria Annua Teknologi, KoinWorks subsidiary): borrower
  "MT" submitted loan applications using 279 separate KTP identity
  documents, drawing Rp330 billion; a second suspect "BAA" drew Rp35
  billion via bilateral loans — combined losses Rp365 billion. Fraud
  surfaced only when PT LAT tried collecting from defaulted borrowers in
  October 2024, not at underwriting. Charges: forgery (KUHP 263), fraud
  (378), embezzlement (372), money laundering; OJK summoned management
  (Kompas, 21 Nov 2024; Katadata, 2024; Antara, 2024; Suara.com, 2024).
  *Correction to hint: Rp365B is the combined total of two schemes (MT's
  Rp330B + BAA's Rp35B), not one Rp365B/279-KTP case.*
- Dukcapil breach: 337 million population records (NIK, KK, birth
  certs, parents' NIK) allegedly sold by hacker "RRR" on BreachForums,
  July 2023 (Kompas.id, Detik, VOI, 2023); a separate 279M-record breach
  reported in 2021 (Tempo, cited in research/industries/digital-identity.md).
  BSSN found no trace in the central SIAK system (Detik, 2023) — leak
  contested by government but independently reported by multiple outlets.
- VIDA: deepfake-linked fintech losses exceeding US$138.5M on a 1,550%
  surge in AI-driven fraud, 2022-2024 (vida.id, 2024/2025) — vendor-
  published, directional only.
- OJK's Indonesia Anti-Scam Centre (IASC): Rp9.1 trillion in losses from
  432,000 reports, Nov 2024-Jan 2026 (readers.id, 2026) — broader
  financial-fraud figure, not synthetic-identity-specific.

## Bottom-Up ARR Path

Named segment: fraud/risk teams at OJK-licensed P2P lenders and
multifinance companies without in-house entity-resolution capability
(large players like Kredivo/Akulaku build in-house or already buy VIDA/
Trusting Social; the addressable tier is mid-size and smaller licensed
lenders). Reachable count: order-of-magnitude only — this session's
search budget was exhausted before a current, cited 2026 count of
licensed P2P platforms/multifinance companies could be confirmed; treat
as **(unverified)**. ACV: no Indonesian public pricing was found for VIDA
ID FraudShield, Trusting Social, or Advance.ai (pricing pages unreached
before budget exhaustion); ACV is **inferred** from SEA mid-market
fraud/KYC SaaS norms, not an Indonesian comparable. A plausible model —
inferred low-to-mid five-figure-USD ACV x 50-70 mid-tier lenders — clears
$1M ARR, but both terms rest on inference, capping evidence quality.

## Existing Solutions (as of 2026-07)

AFPI's FDC (mandatory cross-lender loan-history + identity-validation
database, demonstrably did not catch the 279-KTP MT scheme before
default). VIDA — licensed PSrE, ID FraudShield (biometric liveness +
device-fraud engine: VPN, emulator, cloned-app, fake-location detection)
marketed directly at this failure mode (investortrust.id, 2026). Trusting
Social — AI identity verification/fraud prevention sold to Indonesian
FIs (trustingsocial.co.id). PrivyID — 52M+ verified users by Oct 2024
(Hukumonline, 2024), added NFC KTP-reading. Advance.ai — regional
KYC/fraud-scoring vendor active in Indonesia (not re-verified this
session). Credit bureaus PEFINDO Biro Kredit (~85% share) and Credit
Bureau Indonesia/KBIJ — credit history, not fraud/synthetic-identity
scoring. IFSoc is publicly advocating a "universal fraud database" as of
December 2025 (Antara) — an industry proposal, not a shipped product or
announced regulation.

## Kill Tests

- **K1 Data access — PASSES.** The flagship failure (MT/KoinP2P) was
  entirely within one lender's own applicant pool: 279 KTPs against
  presumably few physical faces/devices. Duplicate-biometric/device
  detection within a lender's own submitted applications needs no
  cooperation from the fraudster or any third platform. Cross-lender
  enrichment is upside, not a precondition.
- **K2 Oracle bound — PASSES.** Synthetic/duplicate identity is inferable
  from face-match duplicates, device-fingerprint reuse, and velocity
  patterns across nominally distinct NIKs — exactly what VIDA and
  Trusting Social already sell. Not a fabricated-at-source physical truth.
- **K3 Absorption — PASSES (no 12-month evidence found).** AFPI's FDC
  performs adjacent loan-history/identity-validation functions but
  demonstrably missed the largest documented case. IFSoc's "universal
  fraud database" is advocacy-stage discussion (Dec 2025), not an
  announced regulation, funded implementation, or procurement — the
  likeliest kill vector on a longer horizon, scored via Absorption
  distance below rather than killed outright.
- **K4 Bootstrap bar — PASSES, weak evidence.** Named segment exists;
  reachable count and ACV both rest on inference, not an Indonesian
  comparable found this session.

## Scores

- Severity 8 — documented Rp365B single-incident loss, criminal
  prosecution, OJK summons, mass breached-identity supply (337M records);
  slightly diffuse across the industry rather than one clean attributable
  aggregate.
- Revenue quality 5 — plausible segment, but ACV and reachable count are
  inferred, not cited to an Indonesian comparable this session.
- WTP 7 — lenders already pay VIDA/Trusting Social/PrivyID for adjacent
  KYC/fraud products that evidently missed the largest case.
- Data position 6 — cross-lender entity-resolution graph would accrue
  with use, but underlying KTP/biometric data is not exclusive; a funded
  incumbent (AFPI/FDC or VIDA) could replicate it.
- Absorption distance 4 — AFPI/FDC occupies adjacent ground and IFSoc is
  actively discussing a shared fraud database; no committed roadmap found,
  but the direction of travel is toward incumbent absorption.
- Competition 3 — VIDA, Trusting Social, and PrivyID are funded incumbents
  already selling into this exact buyer set with Indonesian traction.
- Moat 6 — cross-customer network effect is the mechanism if a consortium
  forms, but unproven against funded competitors.

Weighted = 0.20(8)+0.20(5)+0.15(7)+0.15(6)+0.10(4)+0.10(3)+0.10(6) = **5.9**

## Upside Flag

Secondary evidence only. A working entity-resolution layer (device
fingerprint + biometric + document forensics) is directly reusable for
insurance-claims fraud and multifinance vehicle-loan fraud — not scored
here, not a K4 rescue.

## What Would Kill This

Cited evidence that OJK mandates FDC (or a successor) to add synthetic-
identity/biometric-duplicate detection as a required member function on a
funded timeline; or VIDA/Trusting Social publicly shipping a cross-lender
consortium product with AFPI's backing.

## Sources

- https://www.suara.com/bisnis/2024/11/21/135808/satu-orang-tarik-pinjaman-rp330-miliar-dengan-279-ktp-di-pinjol-koinworks
- https://www.kompas.com/tren/read/2024/11/21/154500865/kronologi-penipuan-koinworks-uang-dibawa-kabur-kerugian-rp-365-m
- https://katadata.co.id/digital/fintech/673db3c66755b/peminjam-yang-tipu-fintech-koinp2p-pakai-279-ktp-diduga-terlibat-tppu
- https://www.antaranews.com/berita/4480765/polisi-dalami-penipuan-anak-perusahaan-koinworks-senilai-rp365-miliar
- https://inet.detik.com/security/d-6826145/337-juta-data-dukcapil-bocor-pakar-data-yang-bocor-terlalu-lengkap
- https://www.kompas.id/artikel/en-337-juta-data-dukcapil-diduga-bocor
- https://afpi.or.id/fdc
- https://www.idxchannel.com/milenomic/pengertian-fintech-data-center-fdc-slik-nya-p2p-lending-begini-cara-kerjanya
- https://investortrust.id/business/102810/vida-luncurkan-id-fraudshield-untuk-lawan-penipuan-digital-berlapis
- https://www.trustingsocial.co.id/
- https://www.antaranews.com/berita/4539478/ifsoc-dorong-universal-fraud-database-persempit-ruang-gerak-fraudster
- https://www.readers.id/sinergi-finansial-tangani-fraud-digital
- research/industries/digital-identity.md (Program A prior, VIDA/Privy figures)
