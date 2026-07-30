# Geography Test — ekyc-deepfake-injection-detection

Bounded test, 2026-07-30. Not a rescoring.

## Comparator markets & why

1. **Global self-serve fintech/crypto (US/EU-centred).** Not a country but the
   only *channel* a solo remote founder can actually sell through: public price
   pages, credit-card signup, no procurement. This is the sharpest test of
   Indonesia's "no observable price" failure — if a price is visible anywhere,
   it is visible here.
2. **India.** Largest regional peer by buyer count with a hard regulatory
   forcing function (RBI V-CIP), the same documented attack profile as
   Indonesia (virtual-camera injection into video KYC), and a local funded
   vendor bench to test the incumbent question.

## Buyer count

- India: RBI's V-CIP obligations reach **every scheduled commercial bank,
  regional rural bank, urban cooperative bank, NBFC and payment system
  provider** (Signzy, 2 June 2026; Protean, 2026). Underlying counts: **~121
  scheduled commercial banks** (2025–26, secondary listing citing RBI, 2026);
  **1,826 of 1,950 DICGC-covered banks are cooperative**, ~1,500 UCBs under
  NAFCUB (RBI *FSR* 2026 via Indian Cooperative, 2026). NBFC registration count
  not obtained **(unverified)**. Buyer count is genuinely an order of magnitude
  above Indonesia's — this term does travel.
- Global self-serve: not countable **(unverified)**.
- Demand signal: RBI's annual report cites a 46.4% rise in banking fraud cases
  FY2025→FY2026 and ₹48,021 crore in fraudulent transactions (RBI via HyperVerge,
  2026 — secondary); NBFC video-KYC deepfake losses put at ₹15–20 crore
  (news4hackers, 2026 — weak source).

## Observed pricing

**Indonesia's "no observable price" failure fully reverses — and the price is
what kills the candidate.**

- **Sumsub** (fetched 2026-07-30): **$1.35/verification** Basic ($149/mo
  minimum), **$1.85** Compliance ($299/mo minimum); self-serve signup, 14-day
  trial with 50 free checks. Deepfake/injection defence is **not a separate
  line item** — it is inside the plan.
- **Didit** (fetched 2026-07-30): **500 free verifications every month,
  forever**, no card, no contract — and the free bundle *includes* ID
  verification, passive liveness, face match and device/IP analysis. Paid:
  passive liveness **$0.10**, active liveness **$0.15**, face match **$0.05**,
  full KYC bundle **$0.33**. No separate deepfake/injection price.
- Veriff ~$1.39/KYC and Persona ~$1.50/KYC (Didit comparison pages, 2026 —
  competitor-published; counted as one biased source).
- **Oz Liveness**, a CEN/TS 18099-certified injection-detection vendor: **from
  $2,625/year for 12,500 transactions**, cloud, SDK + API included (Capterra
  listing, 2026). This is the closest thing to a standalone entry ACV.
- Category benchmark: deepfake/injection add-ons at **$0.10–$0.50 per customer
  per month** (deepidv, 2026 — vendor blog, weak).

## Incumbents & free substitutes

- Named as selling injection-attack detection, **June 2026**: AU10TIX, Entrust,
  Facephi, GBG, Innovatrics, ID-Pal, Mitek, Ondato, Persona, Prove, Regula,
  Signicat, Trulioo, Unico, Veriff, Yoti; and in the testing/certification
  cohort BixeLab, iBeta, Identy.io, Incode, Ingenium, Oz Forensics, Youverse
  (Biometric Update, *2026 Injection Attack Detection Market Report and Buyer's
  Guide*, 8 June 2026). Add iProov and Paravision from the frozen Indonesian
  file. That is 20+ vendors, most funded.
- India-local funded incumbents already publishing 2026 injection-attack
  positioning and selling full V-CIP stacks: **HyperVerge, Signzy, Protean,
  Befisc** (their own 2026 material).
- **The free substitute exists here too — commercial rather than state.** Didit
  gives away 500 full-KYC checks/month permanently with liveness and deepfake
  protections bundled, and Sumsub/Veriff/Persona fold injection defence into the
  base per-check price. The Indonesian pattern ("a free substitute already
  answers the question") reproduces in a different form.
- Certification is now table stakes: iBeta launched injection-attack-detection
  testing against CEN/TS 18099:2025 up to Level 3 in **June 2026** (Biometric
  Update, 2026); buyers shortlist on it. Lab fees not published **(unverified)**,
  but a paid third-party evaluation is a plausible G3 wall for a <$10k budget.

## Verdict for a solo remote founder

**No.** Two of three Indonesian failures genuinely reverse abroad — buyer count
(thousands of RBI-regulated entities) and observable pricing (public, self-serve,
per-check). The third mutates rather than disappears, and the reversal is fatal
on its own terms. At Didit's $0.10–0.33 and Oz's $2,625/year entry ACV, $1M ARR
needs roughly **380+ paying accounts at entry price**, acquired self-serve,
against 20+ named vendors, several CEN/TS 18099-certified, one giving the
product away permanently. Injection detection in 2026 is a *bundled feature of
an IDV platform*, not a separately priced product — as Signzy puts it, these are
"the baseline every vendor offers, not a differentiator" (Signzy, June 2026).
India's large buyer count sits behind RBI-regulated vendor security review and
local incumbent relationships, which fails **G6**. The candidate does not travel.

## What would change this

A named buyer paying a *separate* line-item price for injection detection on top
of an existing IDV contract (none found); or a market where the platform vendors
are absent and a device-attestation API sells self-serve above ~$5k ACV. Absent
that, the only viable shape is selling *to* the IDV vendors as a component — a
different company, with ~20 possible customers.

## Sources

- Sumsub pricing (fetched 2026-07-30) — https://sumsub.com/pricing/
- Didit pricing (fetched 2026-07-30) — https://didit.me/pricing
- Capterra listing, 2026 (Oz Liveness from $2,625/yr / 12,500 transactions) — https://www.capterra.com/p/240192/OZ-Liveness/
- Biometric Update, 8 June 2026, *2026 Injection Attack Detection Market Report and Buyer's Guide* — https://www.biometricupdate.com/202606/2026-injection-attack-detection-market-report-and-buyers-guide
- Biometric Update, June 2026 (iBeta launches IAD testing vs CEN/TS 18099) — https://www.biometricupdate.com/202606/ibeta-launches-injection-attack-detection-testing-against-cens-ts-18099
- Signzy, 2 June 2026 (video KYC costs, deepfake risks, liveness limits) — https://www.signzy.com/blogs/video-kyc-costs-deepfake-risks-and-liveness-limitations
- HyperVerge, 2026 (RBI V-CIP deepfake guidelines; RBI annual-report fraud figures) — https://hyperverge.co/blog/rbi-video-kyc-deepfake-guidelines/
- Protean, 2026 (V-CIP compliance checklist for NBFCs) — https://www.proteantech.in/articles/video-kyc-compliance-checklist/
- RBI *FSR* 2026 via Indian Cooperative, 2026 (UCB/DICGC counts) — https://www.indiancooperative.com/from-states/rbi-fsr-2026-urban-cooperative-banks-show-greater-resilience/
- news4hackers, 2026 (NBFC ₹15–20 crore video-KYC deepfake losses — weak) — https://www.news4hackers.com/deepfakes-exploit-video-kyc-nbfcs-suffer-%E2%82%B920-crore-fraud-losses
- Prior Indonesian profile: /Users/farros/Downloads/VENTURE/research/candidates/ekyc-deepfake-injection-detection.md
