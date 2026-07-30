# AI Output & Media Authenticity — Indonesia

## Problem & Current Workflow
Two workflows collide here. (a) **Financial onboarding**: banks and fintechs run eKYC — customer submits KTP photo, face capture with liveness check against Dukcapil's biometric database, then account opening or loan disbursement. Fraudsters attack this with face-swap deepfakes injected through virtual cameras. (b) **Content disputes**: when a deepfake video circulates (scam, defamation, political disinfo), the victim reports to police (Dittipidsiber Bareskrim) or files takedown via Komdigi's content-complaint channel; forensics run at Puslabfor; prosecution proceeds under UU ITE and, for fraud, the criminal code. Nothing in either workflow verifies provenance at capture; everything is after-the-fact detection. Regulatory state as of mid-2026, verified: Komdigi's AI ethics circular (SE Menkominfo 9/2023) remains voluntary; Komdigi is finalizing **two draft Presidential Regulations** — a national AI roadmap (white paper went to public consultation, closed 22 August 2025, 400+ submissions) and an AI safety/governance Perpres expected to introduce mandatory rules for high-risk AI, with ministerial-decree roadmap issuance targeted Q1 2026 and phased binding rules 2026–2027 (BABL AI, 2025; Indonesia Business Post, 2026; regulations.ai, 2025). No Indonesian content-labeling mandate is in force as of July 2026.

## Stakeholders & Who Pays
Banks, multifinance, and fintechs pay for fraud prevention (budget owners: fraud/risk teams under OJK supervision). PSrE-licensed providers (VIDA, Privy, Peruri, Digisign and other Komdigi-certified certificate authorities) do identity proofing and digital signatures and sell detection as an add-on. Komdigi audits PSrE; OJK audits bank KYC; Bareskrim investigates; victims and platforms dispute content authenticity. Newsrooms and Bawaslu (elections) consume verification but have thin budgets.

## Trust Breakdown (documented incidents)
- **Prabowo deepfake scam**: AI videos of President Prabowo, VP Gibran, and Finance Minister Sri Mulyani offering "government aid" circulated from November 2024; Bareskrim arrested a perpetrator in Lampung on 16 January 2025 and a second on 4 February 2025; roughly 100 victims across 20 provinces, losses about Rp 65 million (Kompas, 2025; Tempo, 2025; Detik, 2025). Small money, national-scale precedent.
- **Bank KYC bypass**: one Indonesian bank logged 1,100+ deepfake attempts to defeat its digital loan-application KYC in three months in late 2024, using face-swap plus virtual-camera injection against liveness detection (Group-IB, 2024/2025).
- **Fraud-report telemetry**: deepfake incidents in Indonesia up 1,550% from 2022 to 2023 and document forgeries up 244% YoY; 97% of surveyed Indonesian businesses saw account-takeover attempts in 2024; 38.5% unsure their systems can detect deepfakes (VIDA Indonesia Fraud Report, 2025 — vendor-published, treat as one source).

## Cost of the Problem
- Losses attributed to AI-driven fraud in Indonesian fintech stated as exceeding USD 138.5 million across 2022–2024 (IJASIS systematic review, 2025, citing industry data — secondary aggregation, weak provenance; treat as indicative).
- Prabowo-deepfake scam direct losses: Rp 65 million (Bareskrim via Kompas, 2025).
- Per-incident bank fraud losses from the Group-IB case: not disclosed (unverified).
- Compliance cost of upcoming Perpres AI: unknowable until text issues (unverified).

## Existing Solutions (as of 2026-07)
- **Detection embedded in eKYC**: VIDA (Deepfake Shield, ID Fraud Shield), Verihubs (publishes Indonesian deepfake-case content), Privy; global vendors selling into the region: Sumsub, Oz Forensics, Group-IB, iProov. This is where the budget already flows.
- **Provenance**: C2PA Content Credentials — camera-level signing shipped by Leica, Sony, Nikon, Canon (July 2025 firmware), Samsung Galaxy S26; platform-side, Meta reads C2PA and shows AI labels, TikTok labels when credentials present, X displays for Premium since March 2026 — but credential chains still break on upload/transcoding at most platforms (Editors Weblog C2PA tracker, 2026; AttestTrail, 2026). EU AI Act Article 50 transparency obligations bite August 2026 — relevant only to Indonesian firms serving the EU.
- **Government**: Komdigi PSrE certification regime (functioning PKI trust infrastructure); draft Perpres AI possibly including a national AI model registry (regulations.ai, 2025); no state deepfake-detection service.
- **Open source**: C2PA reference tooling, open deepfake detectors — commodity inputs, not products.

## Why Insufficient
Detection is probabilistic and losing ground to generation; provenance (C2PA) is the structural fix but its chain of custody dies at platform ingestion, and Indonesia has no mandate forcing adoption. The gap is real: no Indonesian provenance infrastructure ties capture-time signing to the PSrE trust hierarchy courts already accept. But that gap is a standards-adoption and regulation problem, not a missing-technology problem — and the parties positioned to close it are the PSrE incumbents the moment the Perpres lands.

## Blockchain Test
C2PA is deliberately built on PKI, not a ledger: signatures travel with the asset and verify against certificate authorities. Indonesia's PSrE regime is precisely the accepted trusted hierarchy. A timestamping ledger adds little a signed hash plus a CA timestamp doesn't. Courts accept PSrE-backed signatures today. Chain necessity is low.

## Kill Test Verdict — KILLED
1. Problem survives without blockchain? YES.
2. PostgreSQL under one trusted operator? YES — PKI plus a CA (a PSrE) is the industry-standard architecture; C2PA proves no ledger is needed. FAIL.
3. Incumbent ships it in six months? YES — VIDA already sells deepfake detection; any PSrE can bolt C2PA-style signing onto its certificate stack when regulation arrives. FAIL.
4. Standalone value? Detection budget is real but already owned by eKYC incumbents; provenance budget doesn't exist pre-mandate.

## Scores
- Severity 7 — documented KYC-bypass campaigns and a presidential-deepfake scam; regulatory exposure for banks.
- Market 4 — Indonesian detection spend rides the eKYC market; standalone authenticity TAM under ~USD 100M today (estimate, unverified).
- WTP 6 — banks quantify fraud-loss avoidance and pay now, but pay incumbents; provenance buyers (media, public) cannot pay.
- Chain 3 — PKI/CA architecture solves it; PSrE is the accepted trust anchor.
- Urgency 7 — Perpres AI expected within 24 months, fresh 2025 scandal, EU AI Act Aug 2026 for exporters.
- Competition 3 — VIDA, Verihubs, Sumsub, Oz Forensics, Group-IB funded and embedded.
- Moat 3 — detection models commoditize; the durable position (PSrE license + standard) belongs to incumbents.
- **Weighted: 4.9**

## What Would Kill This Idea
Already killed on kill-test 2 and 3. Reopen only if the Perpres AI mandates content provenance with a certification niche PSrE incumbents cannot occupy — no evidence of that as of July 2026.

## Sources
- https://babl.ai/indonesia-launches-public-consultation-on-national-ai-roadmap-and-ethics-guidelines/
- https://indonesiabusinesspost.com/5992/cyber-and-espionage/indonesia-prioritizes-ai-regulation-in-2026-says-communications-minister
- https://regulations.ai/regulations/indonesia-2025-9-draft-perpres-ai
- https://nasional.kompas.com/read/2025/02/07/18360001/100-orang-jadi-korban-penipuan-pakai-video-deepfake-prabowo-kerugian-capai
- https://www.tempo.co/hukum/korban-penipuan-video-deepfake-prabowo-capai-100-orang-1204264
- https://news.detik.com/berita/d-7747352/5-fakta-sindikat-deepfake-catut-prabowo-dibongkar-bareskrim-polri
- https://www.forbes.com/councils/forbestechcouncil/2025/06/23/how-deepfakes-are-disrupting-kyc-and-financial-security/ (Group-IB case)
- https://vida.id/en/blog/deepfake-detection-api-for-kyc
- https://xlescience.org/index.php/IJASIS/article/view/1261
- https://editorsweblog.org/2026/04/12/c2pa-adoption-tracker-platforms-content-credentials-2026
- https://attesttrail.com/blog/c2pa-cameras-support
- https://www.biometricupdate.com/202506/vida-joins-eid-easy-for-certified-digital-signatures-in-indonesia
- https://verihubs.com/blog/kasus-deepfake-indonesia
