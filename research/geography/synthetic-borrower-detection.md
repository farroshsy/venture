# Geography test — Synthetic & Duplicate Borrower Detection

Bounded test, 2026-07-30. One question only: sold into a comparable-technical
market, would the Bootstrap Bar plausibly be met? No rescoring.

## Comparator markets & why

**United States.** The only market where synthetic identity is a named,
benchmarked fraud class with a countable regulated buyer population and a
statutory identity oracle. If observable price and buyer count exist anywhere,
they exist here — the strongest possible test of the Indonesian findings.

**India.** Closest structural twin to Indonesia at roughly an order of
magnitude more lenders: thousands of registered non-bank lenders, an API-first
verification vendor culture where product-led/self-serve adoption is normal,
and a central bank that intervenes in fraud infrastructure the way OJK/AFPI do.
Tests whether raw buyer count alone fixes the Indonesian failure.

Philippines, Vietnam, Thailand were not investigated this pass: each has a
state-mandated central credit registry that reproduces the AFPI/FDC substitute
structure, and none has a larger licensed-lender population than Indonesia
(**unverified** — not researched).

## Buyer count

- US: **4,336 FDIC-insured institutions** (FDIC Quarterly Banking Profile, Q4
  2025) and **4,287 federally insured credit unions** (NCUA Q4 2025 system
  performance data), ~8,600 regulated depositories. Non-bank fintech lenders
  not counted this pass (**unverified**).
- Evidence the segment is already saturated: SentiLink reports **500+ partners
  / ~350 clients including 11 of the 15 largest US banks and 6 of the top 10
  credit unions** (SentiLink fraud benchmarking release, PR Newswire, 2025-26).
- India: **"over 9,000" RBI-registered NBFCs** as of 2025 (secondary —
  Cyril Amarchand FIG Paper No. 42, Mar 2025; indiastat). RBI operationalised a
  public Digital Lending Apps directory in July 2025; no total published in
  sources reached (**unverified**).

Buyer count is not the binding constraint in either market.

## Observed pricing

- **No public price found for the exact product** in either market. SentiLink,
  Socure, Alloy, Prove and LexisNexis Risk publish no rate card (search,
  Jul 2026) — the identical finding Indonesia produced for VIDA and Trusting
  Social.
- Nearest adjacent product with a real published price: **Sumsub — $1.35 per
  verification (Basic, $149/mo minimum), $1.85 (Compliance, $299/mo minimum)**
  (sumsub.com/pricing, accessed Jul 2026). That is ID verification, not
  entity resolution across nominally distinct applicants.
- The US **state** substitute is priced and cheap: SSA's eCBSV charges
  **$5,100/yr for up to 10,000 transactions and $37,125/yr for 10,001-75,000**
  (Federal Register 90 FR 15030, 7 Apr 2025) — roughly $0.50/check at Tier 1.
  That is a hard price ceiling on "is this identity real."
- India: no published per-call rate found from Surepass, Zoop.one or Cashfree's
  verification suites (search, Jul 2026) — Indonesia's finding, repeated.

## Incumbents & free substitutes

US: SentiLink (**$85M raised**, Forbes/startup databases, 2025), Socure, Alloy,
Prove, LexisNexis Risk — all selling this exact function into this exact buyer
set. The "free state substitute" is not absent, it is *statutory and priced*:
eCBSV exists precisely to kill synthetic-SSN fraud.

India: the central bank built and distributes the substitute itself. **RBI
Innovation Hub's MuleHunter.AI**, announced Dec 2024, is supplied to banks;
**23 banks had implemented it** by Dec 2025 (Medianama RTI report, Dec 2025),
and RBIH signed an MoU with I4C to extend AI-driven mule/fraud detection (PIB,
2026). This is the AFPI/FDC pattern reproduced exactly, at national scale.

## Verdict for a solo remote founder

**No.** Both Indonesian failure modes travel. Price stays unobservable for the
exact product; a state substitute exists in both markets (eCBSV, MuleHunter.AI).
The one term that improves — buyer count — is neutralised by the motion. Selling
identity-fraud scoring into a US depository means vendor risk management, SOC 2,
GLBA safeguards, model-risk documentation (SR 11-7) and FCRA/ECOA adverse-action
explainability, plus eCBSV "permitted entity" enrolment to reach the best data.
That is a security-review/enterprise motion — **G6 fails**, and G5 is
questionable. India adds RBI digital-lending data-localisation obligations and
funded local incumbents. A big rich market bought bigger incumbents, not an
easier sale.

## What would change this

A self-serve, published-price API business demonstrably reaching regulated
lenders without a security review (none found); or a non-regulated buyer segment
(marketplaces, gig platforms, crypto onramps) where the same entity-resolution
engine sells product-led — a different candidate, not this one.

## Sources

- https://www.fdic.gov/quarterly-banking-profile/quarterly-banking-profile-q3-2025 (FDIC QBP, Q4 2025 count via FDIC release, 2026)
- https://ncua.gov/newsroom/press-release/2026/ncua-releases-fourth-quarter-2025-credit-union-system-performance-data
- https://www.prnewswire.com/news-releases/sentilink-releases-fraud-benchmarking-report-for-2h-2025-analyzing-over-236-million-financial-applications-302709619.html
- https://www.forbes.com/companies/sentilink/ (funding)
- https://sumsub.com/pricing/ (accessed 2026-07)
- https://www.federalregister.gov/documents/2025/04/07/2025-05905/notice-of-tier-fee-decrease-for-our-electronic-consent-based-social-security-number-verification
- https://www.medianama.com/2025/12/223-rti-23-banks-mulehunter-mule-accounts/
- https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260277 (I4C-RBIH MoU)
- https://corporate.cyrilamarchandblogs.com/2025/03/fig-paper-no-42-series-1-regulatory-trends-in-nbfc-sector/ (secondary, NBFC count)
