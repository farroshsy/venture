# Geography Test — KYB / Corporate-Record Verification

Question asked: would this identical product clear the Bootstrap Bar if the
*verified jurisdiction* were somewhere other than Indonesia? Not a rescore.

## Comparator markets & why

**United States (primary)**, with **UK** as a structural control and
**Vietnam** as a regional-peer control.

- US picked because it is the one large market where **no free unified company
  register exists** — KYB data must be assembled from 50 Secretary-of-State
  offices plus the IRS, which is exactly why Middesk exists. It therefore
  removes Indonesia's "free state substitute" failure by construction, and it
  has the largest population of compliance buyers anywhere.
- UK picked as the control: same product, but Companies House publishes
  everything free, so it tests whether the free-substitute failure is
  Indonesia-specific (it is not).
- Vietnam picked as the regional peer with a paywalled, non-English registry
  and a brand-new BO disclosure duty (Law 76/2025/QH15, in force 1 Jul 2025 —
  Watson Farley & Williams / Duane Morris, 2025) — i.e. Indonesia's structure
  with a fresher regulatory trigger.

## Buyer count

- US: **4,379 FDIC-insured commercial banks and savings institutions**
  (FDIC Quarterly Banking Profile, Q3 2025) plus **10,412 US fintech
  companies** (Statista, Jun 2024). Marketplaces and B2B platforms add an
  uncounted tail.
- Vietnam: **195,100 newly registered enterprises in 2025** (VnEconomy / GSO,
  2025) — but that is *entities to be verified*, not buyers. The buyer for
  Vietnam KYB is the same small set of foreign compliance desks that made
  Indonesia fail; no larger count found.

So the US genuinely fixes buyer count. Vietnam does not.

## Observed pricing

Developed-market KYB *does* fix Indonesia's "no observable price" failure:

- **Sumsub**: $1.35 per business verification (non-regulated) with a
  **$149/month minimum**; $1.85 (regulated) with a **$299/month minimum**
  (sumsub.com/pricing, 2026).
- **Didit**: **$2.00 per business verification**, plus $0.33 per linked UBO
  KYC and $0.20 per person AML screen (Didit pricing docs, 2026).
- **Middesk**: **$8,000–$15,000+/year**, usage-based with monthly or annual
  minimum commitments (Vendr marketplace listing, 2026) — quote-based, no
  public rate card.
- **Kyckr**: **no published pricing** (TrustRadius / Datarade, 2026) — the
  same finding Indonesia produced, in a listed company.

## Incumbents & free substitutes

Funded and dense. **Middesk raised a $57M Series B co-led by Insight Partners
and Canapi, with Sequoia and Accel participating (Jun 2022 — Insight Partners
/ PR Newswire)**, and in **March 2025 sued competitor Osiris Ratings (d/b/a
Baselayer) and former employees** — evidence of an active, litigious
competitive field rather than an empty one. Alongside: Sumsub, Didit,
ComplyCube, Moody's Orbis, Dun & Bradstreet, LSEG, Kyckr, plus AsiaVerify /
QCC KYC / companieshouse.vn on the APAC side.

Free state substitute: absent in the US, **present in the UK** — the Companies
House Public Data API serves all public register data **free of charge, no
per-call fee, no commercial restriction, 600 requests / 5 minutes**
(developer.company-information.service.gov.uk, 2026), with OpenCorporates
aggregating registers free for public-benefit use. So Indonesia's
free-substitute problem is not an Indonesian pathology; it recurs verbatim in
the richest comparator.

## Verdict for a solo remote founder

**No.** The US removes two of Indonesia's three failures (buyer count, price
observability) and replaces them with a worse one. The arithmetic: at $2.00
per verification, $1M ARR means **~500,000 verifications a year**, which means
winning a handful of high-volume fintechs — a land-and-expand motion where
every bank and fintech runs vendor security review, SOC 2, DPA and
data-provenance diligence before first invoice. That is a direct G6 failure.
The tier where ACV actually works ($8–15k/year, Middesk-class) is explicitly
quote-based with minimum commitments — also G6. The tier that is genuinely
self-serve ($149–299/month floors) prices the whole category as a commodity
API against a $57M-funded incumbent with a US-registry data moat a solo
founder in Surabaya cannot rebuild under ~$10k (G3).

Vietnam fails for Indonesia's original reason: buyer count. The UK fails for
Indonesia's original reason: free state substitute.

## What would change this

A named channel that removes the security-review gate — e.g. a documented
marketplace or B2B2B reseller path where an existing KYB vendor buys
jurisdiction coverage as an API at a published price. No such published price
was found (Kyckr, Middesk and AsiaVerify all withhold rate cards). Absent
that, geography does not rescue this candidate.

## Sources

- https://sumsub.com/pricing/ (2026)
- https://didit.me/pricing/ and https://docs.didit.me/getting-started/pricing (2026)
- https://www.vendr.com/marketplace/middesk (2026)
- https://www.insightpartners.com/ideas/leading-business-identity-platform-middesk-raises-57m-series-b-co-led-by-insight-partners-and-canapi-ventures/ (Jun 2022)
- https://www.fdic.gov/news/press-releases/2025/fdic-insured-institutions-reported-return-assets-127-percent-and-net (Q3 2025)
- https://www.statista.com/statistics/1476784/us-number-of-fintechs/ (Jun 2024)
- https://developer.company-information.service.gov.uk/overview (2026, free API)
- https://www.trustradius.com/products/kyckr/pricing (2026, no published price)
- https://en.vneconomy.vn/vietnams-business-landscape-in-2025.htm (2025)
- https://www.wfw.com/articles/key-2025-amendments-to-vietnams-law-on-enterprises/ (2025)
