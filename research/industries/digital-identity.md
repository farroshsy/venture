# Digital Identity & Verifiable Credentials (digital-identity)

## Problem & Current Workflow
Identity in Indonesia anchors on Dukcapil's population register (NIK, e-KTP, biometric records). Verification today: a relying party (bank, fintech, telco) collects KTP photo + selfie, runs OCR and face-match against Dukcapil through a licensed access agreement or an e-KYC vendor, then binds the identity to an electronic certificate if a signature is needed. Legally binding signatures require a certificate from a Komdigi-licensed PSrE (roughly ten licensed providers including Privy, VIDA, Peruri, TekenAja, TilakaX; ecampuz list, 2024). Government-side, Dukcapil's IKD app is the official digital ID (activation in person at Dukcapil offices, moving to self-activation with liveness detection), and INA Digital — housed under Peruri as national GovTech — is rolling out INApas (SSO digital identity), INAku, and INAgov; all three remained in limited release as of April 2026 (inapas.go.id; MenPAN-RB, 2024). Credentials such as diplomas, licenses, and certificates are still verified by calling or emailing the issuer; W3C Verifiable Credentials 2.0 became a formal standard in May 2025 (W3C, 2025) but Indonesian issuance is at pilot stage.

## Stakeholders & Who Pays
Dukcapil owns the root registry; Komdigi licenses PSrE; OJK and BI impose KYC obligations that force banks, multifinance, fintech lenders, and crypto exchanges to pay per-verification and per-signature fees — these regulated entities are the paying customers and already pay incumbents. Employers and universities verify credentials; courts and PPATK dispute and investigate identity fraud. Consumers bear fraud losses but pay nothing.

## Trust Breakdown (documented incidents, cited)
- Deepfake/biometric spoofing: fintech losses tied to deepfake cases exceed US$138.5 million, on a 1,550% surge in AI-driven fraud 2022–2024, much of it biometric spoofing during loan applications (VIDA fraud report via vida.id, 2024/2025).
- Account takeover: 97% of Indonesian businesses faced account-takeover attempts in 2024; digital document forgeries up 244% YoY (VIDA, 2025).
- Bulk identity data for sale: alleged 337 million Dukcapil records offered by a hacker (Kumparan, 2023); 279 million records incident (2021); 6 million NPWP records offered for ~Rp150 million (Bjorka post, Tempo, Sept 2024). Cheap stolen NIK/KK data feeds synthetic-identity loan fraud.
- Credential forgery: Udinus became the first Indonesian campus issuing 100% blockchain-based diplomas explicitly to fight ijazah forgery (Udinus, Feb 2026) — indicating both the problem and that issuers are already acting.

## Cost of the Problem
- US$138.5M+ deepfake-linked fintech losses (VIDA, 2025) — vendor-published figure, treat as directional.
- Per-incident and aggregate national identity-fraud losses: (unverified).
- Compliance spend: every OJK-regulated onboarding requires paid e-KYC; total market value (unverified, but Privy alone processed 40M+ signatures/year at Series C — Businesswire, 2022).

## Existing Solutions (as of 2026-07, named)
- State: Dukcapil IKD — 20.5 million active users by July 2026 against a 30% population target (Dirjen Dukcapil via lpc-online, July 2026; weak outlet, figure directionally consistent with Kemendagri statements); INA Digital/INApas in limited release.
- Privy: US$48M Series C led by KKR (Businesswire, Nov 2022); 30M verified users then, >52M by Oct 2024 (Hukumonline, 2024), claims of 71M users and 200k organizations by May 2026 (pojokpapua, 2026 — unverified).
- VIDA: licensed PSrE, aggressive deepfake-detection product line and fraud research.
- Peruri: state-owned PSrE and operator of INA Digital.
- e-KYC/biometrics vendors: Verihubs, Nodeflux, ASLI RI (competitive state as of 2026-07 not re-verified this session).
- Global: Jumio, Sumsub, iProov sell into the region; W3C VC tooling (open source) freely available.

## Why Insufficient
Real gaps exist: breached static data means possession of NIK+selfie no longer proves personhood; credentials are not machine-verifiable across issuers; IKD and INApas overlap confusingly. But every gap sits on territory already claimed: the state owns the root registry and is building the wallet; licensed PSrE own the signature/KYC revenue and are shipping deepfake defense. A verifiable-credentials layer is a product feature for Privy/VIDA/Peruri, not a missing company.

## Blockchain Test
Multi-org, yes — but every relying party already accepts trusted intermediaries: Dukcapil as identity root and PSrE as certifiers. W3C VC works fine with plain PKI; a chain adds nothing the Komdigi trust list doesn't provide. Issuer-independent verification (the one honest chain argument, e.g., diplomas surviving issuer collapse) is niche and already being piloted by universities themselves.

## Kill Test Verdict
1. Problem survives without blockchain: YES. 2. PostgreSQL under a trusted operator just as good: YES — fails. Dukcapil + licensed PSrE are exactly that, and are accepted by regulators and courts. 3. Incumbent ships it in 6 months: YES — fails. Privy or VIDA can add VC issuance/verification atop existing rails trivially; Udinus shows issuers self-serving. 4. Standalone value: for a new entrant, NO — the compliance revenue pools are captured. KILLED on tests 2 and 3.

## Scores
- Severity 7 — recurring, rising fraud losses with dedicated fraud teams at every lender (VIDA 2025), but not existential for the payers.
- Market 6 — mandated e-KYC/signature spend across all OJK-regulated onboarding plausibly $250M+; verified basis thin, so scored below 7.
- WTP 8 — mandated compliance spend; buyers demonstrably pay incumbents today.
- Chain 4 — accepted trusted intermediaries exist at both root (Dukcapil) and certification (PSrE) layers.
- Urgency 6 — deepfake surge and INApas rollout create pressure, but no deadline forcing a new vendor.
- Competition 3 — funded incumbents with traction (Privy $48M+, VIDA, Peruri) plus the state itself.
- Moat 4 — PSrE licensing is a barrier that protects incumbents, not entrants; integrations lock in the installed base.

Weighted: 5.7

## What Would Kill This Idea
Already killed: incumbent capture. The only survivable wedge would be issuer-independent credential provenance for cross-border verification (workers, diplomas) — narrow, low WTP, and attackable by incumbents the moment it shows revenue.

## Sources
- https://www.lpc-online.com/2026/07/pengguna-aktif-ikd-tembus-205-juta.html
- https://inapas.go.id/
- https://menpan.go.id/site/berita-terkini/wujudkan-indonesia-terintegrasi-tiga-produk-inovasi-ina-digital-mulai-dirilis-secara-terbatas
- https://www.businesswire.com/news/home/20221113005093/en/KKR-Leads-Series-C-Round-in-Indonesian-Digital-Trust-Provider-Privy
- https://www.hukumonline.com/berita/a/privy-tawarkan-solusi-tanda-tangan-elektronik-berbasis-sertifikasi-kominfo-untuk-berbagai-sektor-bisnis-lt6712077f415ca/
- https://www.pojokpapua.id/rekomendasi-aplikasi-tanda-tangan-elektronik-terbaik
- https://vida.id/en/blog/deepfake-fraud-trends-in-banking
- https://vida.id/en/blog/four-emerging-ai-generated-fraud-in-indonesia
- https://kumparan.com/kumparannews/diduga-337-juta-data-penduduk-indonesia-dijual-hacker-20npf34Pt9A
- https://www.tempo.co/politik/daftar-kebocoran-data-pribadi-di-era-jokowi-paling-banyak-di-instansi-pemerintah--7403
- https://dinus.ac.id/en/2026/02/antisipasi-pemalsuan-udinus-jadi-kampus-pertama-di-indonesia-dengan-ijazah-100-berbasis-blockchain/
- https://www.w3.org/press-releases/2025/verifiable-credentials-2-0/
- https://blog.ecampuz.com/daftar-penyelenggara-sertifikasi-elektronik-resmi/
