# Geography Test — credential-holder-identity-binding

Bounded test, 2026-07-30. Not a rescoring. One question: sold into another
geography, would the Bootstrap Bar plausibly be met?

## Comparator markets & why

1. **United States.** Largest concentration of the exact buyer (hospital
   credentialing departments), a mandated credentialing process structurally
   like KARS, and the one market where credentialing-software prices are
   publicly observable. Indonesia failed on "no observable price" — the US is
   where that failure should reverse if it reverses anywhere.
2. **India.** The control. Large private-hospital sector, documented
   impostor-doctor prosecutions, and a free national registry — the closest
   structural analogue to Indonesia. Tests whether the Indonesian failure was
   about development level or about the product.
3. **GCC (Saudi/UAE).** The only market where credential verification is a
   mandated, individually-priced, *applicant-paid* product — the one place the
   motion could plausibly be self-serve rather than institutional.

## Buyer count

- US: **6,093–6,100 registered hospitals** (American Hospital Association,
  *Fast Facts on U.S. Hospitals*, 2026 edition, drawn from the 2024 AHA Annual
  Survey). Genuinely 10x Indonesia's reachable hospital population.
- India: private-hospital count not obtained **(unverified)**. Fraud volume is
  real: Rajasthan SOG arrested 18 including a former Rajasthan Medical Council
  registrar, with 90+ individuals identified as having entered healthcare on
  forged documents (Medical Dialogues, 2026).
- GCC: applicant-side population, institution count not obtained **(unverified)**.

## Observed pricing

The Indonesian failure **does reverse** here — prices exist, at two tiers:

- US credentialing software: **$3–50/user/month** software-first for 50+
  provider orgs; **$100–500/provider/year** outsourced (Vouched, *6 Best
  Healthcare Credentialing Software for 2026*, 18 Mar 2026). MedTrainer quoted
  at $70–120/provider/month by pricing aggregators only **(unverified primary)**.
- US discrete check: **professional license verification $12/check**, on
  self-serve plans of $29.99–$79.99/month (Checkr published pricing as reported
  by pricing-aggregator listings, 2026 — single source cluster).
- GCC PSV: SCFHS DataFlow **SAR 1,200–1,800 (~USD 320–480)** per applicant;
  DHA DataFlow **AED 1,150–1,500 (~USD 315–410)** (PrepMedico and GCC MedLicense
  guides, 2026 — licensing-consultancy secondary sources repeating one schedule;
  counted as one source, not DataFlow's own page).

## Incumbents & free substitutes

- **US — the exact product already ships.** Vouched sells AI identity
  verification that "uses biometric analysis to match the provider to their
  document" for provider credentialing (Vouched, Mar 2026); it has raised
  **$30.9M over 5 rounds**, including a **$17M Series A led by Spring Rock
  Ventures, Sept 2025** (Tracxn 2026; GeekWire 2025), serves 300+ banks/fintechs/
  healthcare providers, and its IDV is Epic-integrated. Veridas markets hospital
  "Golden Identity" biometric onboarding against medical identity fraud
  (Veridas, 2026). Medallion raised **$43M, $130M total** (Medallion, 2026).
  Workflow incumbents: symplr, VerityStream/HealthStream, Verisys, MD-Staff,
  MedTrainer, Modio Health (Vouched, Mar 2026).
- **US free/near-free substitute:** state board lookups are free and license
  verification is a $12 commodity check. 2026 tightening pushed payers to reject
  aggregator databases and demand direct primary-source confirmation (Medwave,
  Mar 2026) — which routes work to CVOs, not to a new vendor.
- **India:** NMC's Indian Medical Register offers **free** public doctor
  verification (National Medical Commission, 2026). The Indonesian
  free-state-substitute failure reproduces exactly.
- **GCC:** DataFlow is a regulator-appointed sole-source PSV provider for SCFHS
  and DHA — a mandated monopoly, structurally worse than a free substitute.

## Verdict for a solo remote founder

**No.** The US arithmetic works on paper (200 hospitals x $5k = $1M), but two
things break it. First, **G6**: hospital credentialing is a HIPAA-BAA, SOC 2,
vendor-security-review, procurement sale — there is no product-led path to a
$5k ACV. The genuinely self-serve tier that does exist is the $12 commodity
check, which needs ~83,000 checks/year per $1M and is already Checkr's. Second,
**competition**: the identical function — biometric binding of a provider to
their credential — is already shipped by funded incumbents (Vouched $30.9M,
Medallion $130M, Veridas), one of them inside Epic. India reproduces Indonesia's
free registry at lower prices. GCC is a mandated monopoly. The candidate does
not travel.

## What would change this

Evidence that US telehealth/digital-health companies (not hospitals) buy
provider-identity binding self-serve at >$3k ACV without a BAA-gated security
review; or a named comparator market with a *paid* credential registry, no
incumbent biometric-binding vendor, and a documented self-serve motion.

## Sources

- AHA, *Fast Facts on U.S. Hospitals*, 2026 ed. — https://www.aha.org/statistics/fast-facts-us-hospitals
- Vouched, *6 Best Healthcare Credentialing Software for 2026*, 18 Mar 2026 — https://www.vouched.id/learn/blog/healthcare-credentialing-software
- GeekWire, Sept 2025 (Vouched $17M) — https://www.geekwire.com/2025/id-verification-startup-vouched-raises-17m-as-it-builds-ai-tools-for-new-future-of-identity/ ; Tracxn 2026 ($30.9M/5 rounds)
- Medallion, 2026 ($43M / $130M total) — https://medallion.co/news/medallion-raises-43-million-to-expand-ai-infrastructure-and-launch-credalliance
- Veridas, 2026 (hospital medical identity fraud) — https://veridas.com/en/medical-identity-fraud/
- Checkr pricing, 2026, via aggregator listings ($12/license verification; $29.99–79.99/mo) — https://costbench.com/software/background-checks/checkr/
- Medwave, Mar 2026 (2026 PSV tightening) — https://medwave.io/2026/03/credentialing-2026-updated-standards-best-practices-strategies/
- Medical Dialogues, 2026 (Rajasthan FMGE scam, 18 arrested, 90+ identified) — https://medicaldialogues.in/state-news/rajasthan/rajasthan-fake-fmge-certificate-scam-former-medical-council-registrar-among-18-arrested-167300
- NMC Indian Medical Register (free public verification), 2026 — https://www.nmc.org.in/information-desk/indian-medical-register/
- PrepMedico 2026 / GCC MedLicense 2026 (DataFlow SCFHS/DHA fees) — https://prepmedico.com/scfhs-dataflow-verification-requirements-fees-and-timeline/
