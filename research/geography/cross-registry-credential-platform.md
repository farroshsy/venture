# Geography test — Cross-Registry Credential Verification Platform

Bounded test, 2026-07-30. One question only: sold into a comparable-technical
market, would the Bootstrap Bar plausibly be met? No rescoring.

## Comparator markets & why

**United States.** Same product shape (many issuer-siloed registries: state
licensure boards, universities, federal data banks), but with a mature paid
verification market, a countable institutional buyer set, and — critically —
vendors that publish self-serve prices. The strongest available test of
Indonesia's "no observable price" finding.

**United Kingdom.** Chosen because the *exact* product already exists there as a
single national service with a public per-check price: HEDD. It answers the
question "what happens when someone builds one API over the registries" with an
observed outcome rather than an inference.

Philippines (PRC/CHED registries, large manning and BPO hiring) is the obvious
regional analogue but was not investigated this pass (**unverified**).

## Buyer count

- US hospitals: **6,093 hospitals, of which 5,112 community hospitals** (AHA
  *Fast Facts on U.S. Hospitals 2025*, from the 2023 AHA Annual Survey) — each
  with a credentialing function. Staffing firms, contractors and screening
  companies not counted this pass (**unverified**).
- UK: HEDD covers UK higher-education institutions; institution and employer
  counts not verified this pass (**unverified**).

Buyer count is comfortably not the binding constraint here.

## Observed pricing

This is where geography genuinely changes the Indonesian finding — prices are
public. They are also commodity per-transaction prices:

- **HEDD: ~£14 per degree verification**, varying slightly by institution
  (£12 at University of Manchester, £14 at Heriot-Watt; hedd.ac.uk FAQ and
  university pages, 2025/26). Registration is free.
- **GoodHire: $29.99 (Basic+), $54.99 (Essential), $79.99 (Professional) per
  check**, with education and employment verification included at the
  Professional tier (goodhire.com/pricing, 2026). Fully self-serve.
- **NPDB (US federal): $2.50 per query**, one-time or continuous-query
  enrolment (npdb.hrsa.gov billing and fees, 2024/25).

So the price is observable, product-led, and sits between $2.50 and $80 per
transaction. $1M ARR at £14/check is ~71,000 verifications a year; at GoodHire's
$79.99 full-check price it is ~12,500 checks a year — but that price includes
criminal and employment screening a registry-lookup product does not perform.

## Incumbents & free substitutes

The aggregation layer this candidate proposes to build is, in both markets,
already owned:

- **National Student Clearinghouse** is the de facto single US channel for
  degree verification (universities delegate to it). **HEDD** is the equivalent
  UK sector-owned service. Both *are* the "one API over several registries."
- **NPDB** is a federal, near-free ($2.50) national credential/adverse-action
  data bank; state licensure boards run free public lookups.
- Funded credentialing incumbents: **Medallion — $43M raised Aug 2025, $130M
  total, launching CredAlliance, a national credentialing clearinghouse**
  (PR Newswire/MobiHealthNews, 2025); **CertifyOS — $40M Series B, 2025**;
  **Verifiable — $47.1M total, Series B** (CB Insights, 2026). Screening:
  GoodHire, Checkr, Sterling, HireRight, First Advantage.

And there is a licence wall Indonesia did not have. In the US, anyone who
regularly assembles credential information for third parties making employment
decisions is a **consumer reporting agency under the FCRA**, and most states
additionally require a private-investigator or screening-agency licence to
operate (FTC business guidance for background screening companies; LegalClarity
licensing overview, 2025).

## Verdict for a solo remote founder

**No.** The geography test flips Indonesia's missing-price finding — and the
answer it returns is unfavourable. The observed price is a commodity per-check
fee, the cross-registry aggregation function is already a single national
incumbent per market (NSC, HEDD, NPDB), and the surrounding workflow layer has
absorbed >$200M of venture funding in the US alone. Worse for the gates: in the
US the product is a regulated CRA activity requiring state licences before first
revenue — a direct **G5 failure** — and hospital credentialing sales run through
procurement and accreditation review, failing **G6**. The UK removes the licence
problem but replaces it with a sector-owned monopoly holding the source data.

## What would change this

Selling the same engine for a **non-employment-decision** purpose (marketplaces
or platforms verifying practitioners for their own risk, not for hiring), which
sidesteps FCRA/CRA status — but then it competes with free public lookups and
needs a fresh buyer count and price. Or a market where registries are fragmented
*and* no national aggregator exists *and* prices are published: none of US, UK
or Indonesia is that market; the Philippines is untested.

## Sources

- https://www.aha.org/system/files/media/file/2025/01/Fast-Facts-on-US-Hospitals-2025.pdf
- https://hedd.ac.uk/faq and https://www.hw.ac.uk/students/manage-your-studies/your-student-record/confirming-your-student-status/third-party-verifications (£14/£12 per verification)
- https://www.goodhire.com/pricing/ (2026 published tiers)
- https://www.npdb.hrsa.gov/hcorg/pds.jsp and https://www.npdb-hipdb.com/practitioners/billing-and-fees/ ($2.50 per query)
- https://www.studentclearinghouse.org/solutions/ed-verifications/
- https://www.prnewswire.com/news-releases/medallion-raises-43-million-to-expand-ai-infrastructure-and-launch-the-first-national-credentialing-clearinghouse-302532154.html
- https://www.certifyos.com/company/news/certifyos-raises-14.5m-in-series-a-funds-for-credentialing-automation-platform and https://www.cbinsights.com/company/certifyos (Series B, 2025)
- https://www.cbinsights.com/company/verifiable (funding total)
- https://www.ftc.gov/business-guidance/resources/what-employment-background-screening-companies-need-know-about-fair-credit-reporting-act
- https://legalclarity.org/how-to-get-certified-to-do-background-checks-fcra-licensing/ (state licensing, 2025)
