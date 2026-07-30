# eKYC Deepfake Injection Defense

**Mechanism:** identity binding
**Slug:** ekyc-deepfake-injection-detection

## Problem & How Truth Is Established Today

Banks and fintech lenders establish "is this a real, live applicant" through liveness detection (blink/challenge-response or passive AI models) layered on document + selfie eKYC, often checked against Dukcapil population data. The specific failure mode is **injection attacks**: fraudsters use face-swap deepfake tools combined with virtual-camera software to feed a fabricated video stream directly into the verification pipeline, bypassing the physical camera entirely — the liveness model is shown a technically "live-looking" feed that never touched a real camera. This defeats standard liveness checks because the deepfake replicates micro-movements, blinking, and lighting variation that passive-liveness models look for.

## Buyer & Who Pays

Named buyer segment: banks, multifinance, and P2P/digital lenders performing digital onboarding, specifically their fraud/risk and compliance functions that already own an IDV/liveness vendor contract. This is a single-sided market (unlike the receivables-registry candidate) — each institution can adopt independently without needing others to participate, a structural advantage for bootstrapping.

## Documented Failures (cited)

- **Group-IB, late 2024:** one Indonesian bank logged **1,100+ deepfake-driven attempts** to bypass its digital KYC loan-application process in a 3-month window, using AI face-swapping combined with virtual-camera injection tools, despite "robust, multi-layered security measures" (Group-IB, via Forbes, BW Security World, ASEAN Technology & Security Magazine, 2024/2025 coverage). 45 distinct devices identified (41 Android, 4 iOS).
- **Group-IB, Jan-Aug 2025:** the same/similar institution logged **8,065 biometric injection-attack attempts** in 8 months (aggregated 2025-2026 coverage) — the problem *grew*, not shrank, after 2024 disclosure.
- **VIDA, 2022-2024:** fintech losses linked to deepfake fraud reported at **>US$138.5 million**, with a "1,550% surge" in AI-driven fintech fraud over the period (VIDA, cited across Forbes, ASEAN Tech Security, BW Security World). One fetched source states "surpassing USD 135 million" — figures vary slightly across secondary repetitions of the same VIDA claim; treated as one source, not independent corroboration.

## Bottom-Up ARR Path

Customers: OJK-licensed banks (~100+), multifinance, and P2P/digital lenders performing remote onboarding — hundreds when including smaller digital lenders (exact counts not sourced; **(unverified)**). A self-serve/API beachhead is more plausible with the agile P2P-lending/multifinance segment than with large banks, which typically require formal vendor security review. ACV: no directly sourced Indonesian pricing for a standalone injection-detection layer was found; existing eKYC/liveness vendors (Verihubs, VIDA, PrivyID) generally price per-verification API or annual license — by analogy, a plausible add-on ACV is low tens-of-thousands USD/year per mid-size lender — **evidence quality: weak (no direct comparable)**. At an illustrative 100-150 customers × ~$10-15k ACV, this is $1-2.25M, clearing the bar on paper but resting on an unvalidated ACV assumption.

## Existing Solutions (as of mid-2026)

This is the most competitively contested of the three candidates. Global liveness/IDV vendors are actively racing into injection-attack defense:
- **iProov**: published research (Dec 2025) demonstrating face-swap/virtual-camera bypass of liveness on financial apps, and achieved **CEN 18099 "High" Level 2** injection-attack certification from Ingenium (Nov 2025) — the first standard of its kind for this attack class.
- **Paravision**: achieved PAD Level 3 in an Ingenium evaluation (Aug 2025).
- **Innovatrics**: as of the 2026 sourced article, does **not yet** hold formal injection-attack certification — holds Substantial-level presentation-attack (not injection-attack) certification from CLR Labs (valid 2026-2028) and is "working toward" injection-level certification, though independent testing by Citadelo (2026) found its deployed toolkit (used in Air Bank's biometric pairing flow) rejected an injected sample in that test.
- Sumsub and Mitek are referenced in general industry coverage as building injection detection into 2025-era releases, but this was not independently verified via primary source and should be treated as **weakly sourced**.
- No direct evidence was found confirming which vendor(s) Indonesian banks currently use for liveness, or that any Indonesian-market vendor (VIDA, PrivyID, Verihubs) shipped dedicated injection detection as of mid-2026.

## Kill Tests

- **K1 (Data access): PASS.** The bank/lender already owns the entire onboarding video/device pipeline; detection relies on device, driver, and stream-integrity signals the customer already possesses, not cooperation from the fraudulent applicant.
- **K2 (Oracle bound): PASS.** Injection is technically inferable from camera-driver signature verification, sensor-consistency checks, and dynamic challenge-response (e.g., iProov's Flashmark-style approach) — a demonstrated technical approach, not a fabricated-at-source physical truth.
- **K3 (Absorption): PASS, with the strongest residual risk of the three candidates.** Global incumbent liveness vendors (iProov, Paravision) shipped certified injection-attack defenses within the past 12 months (Aug-Nov 2025) — real, dated evidence of "incumbent already entering the exact function." Falls short of a hard kill only because: (a) no evidence confirms these specific global vendors, rather than a different local incumbent, control the actual customer relationship at Indonesian banks; (b) Group-IB's own data shows continued, growing successful attacks against an Indonesian institution through August 2025, indicating real-world Indonesian deployment lags the certification frontier.
- **K4 (Bootstrap bar): PASS, weak evidence.** Single-sided market (no cold-start problem, unlike the receivables candidate) with a plausible self-serve beachhead in P2P/multifinance lenders, but ACV lacks a real Indonesian comparable and bank-tier customers likely require enterprise-style security review, cutting against pure self-serve for the largest-ACV accounts.

**Survives: YES**, but this is the closest call of the three and carries the highest competitive/absorption risk.

## Scores

- Severity: **9** — documented large-scale, quantified losses ($138.5M/VIDA) and growing, unresolved attack volume (8,065 attempts/8 months, Group-IB).
- Bootstrap revenue quality: **4** — plausible segment, but ACV and reachable-count rest on inference.
- WTP: **7** — named budget owner (bank/lender fraud-risk function) already paying for an inferior alternative (existing liveness vendors demonstrably bypassed).
- Data position: **5** — per-customer integration initially; a cross-customer attack-signature dataset would strengthen with scale but doesn't exist yet.
- Absorption distance: **3** — adjacent, funded, certified incumbents (iProov, Paravision) exist and are moving fast, not confirmed as the exact Indonesian incumbent within 12 months.
- Competition: **4** — funded global incumbents racing into this exact space with recent (2025) certifications; not whitespace.
- Compounding moat: **6** — a cross-customer attack-signature dataset would create switching cost if achieved.

**Weighted: 5.7**

## Upside Flag

OJK's draft POJK on KYC Administration Service Providers and public statements framing "multi-factor authentication, liveness detection, and real-time anomaly detection" as core requirements (OJK official, 2026) suggest regulatory tailwind toward higher IDV standards — a compliance-driven WTP forcing function, though not yet a specific injection-detection mandate (secondary evidence only).

## What Would Kill This

- Confirmation that the vendor(s) Indonesian banks already use (VIDA, PrivyID, Verihubs, or a global vendor via local reseller) shipped or announced injection-attack detection as a bundled feature within 12 months — a direct K3 kill.
- OJK issuing the draft POJK with injection-detection requirements fulfilled through existing vendor relationships rather than a new-vendor requirement.
- Evidence that Indonesian banks' procurement cycles for security tools make a solo-founder sales motion infeasible within a reasonable runway.

## Sources

Group-IB (via Forbes Dec 2025 reprint, BW Security World, ASEAN Technology & Security Magazine, 2024-2025) — 1,100+/8,065 injection-attempt figures; VIDA (same secondary outlets) — 2022-2024 loss figure; researchgate.net systematic review (2025-2026) — Indonesia deepfake-fraud context; iProov.com blog and Biometric Update (Dec 2025) — CEN 18099 certification; ID Tech Wire (2026) — Innovatrics/Citadelo status; makronesia.id (2026, fetch blocked/403, snippet-only) and amatek.co.id, hyperverge.co (2026) — OJK regulatory framing.
