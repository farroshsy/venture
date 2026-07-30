# Geography Test — Beneficial-Ownership Verification & Entity Linkage

Question asked: would this identical product (tooling that helps an obliged
professional discharge a statutory BO-verification duty) clear the Bootstrap
Bar in another geography? Not a rescore.

## Comparator markets & why

**EU/UK (primary)** and **United States (negative control)**.

- EU/UK picked because the Indonesian trigger — Permenkum 2/2025 putting a
  personal verification duty on notaries — has a near-exact structural twin:
  **EU AMLR 2024/1624**, applying from **10 July 2027**, which names notaries,
  accountants, tax advisers, TCSPs and estate agents as obliged entities and
  requires them to **verify beneficial ownership against multiple sources**
  rather than accept self-declaration (EUR-Lex 2024/1624; Hogan Lovells, 2024).
  The UK is bundled in as the live version of the same motion: mandatory
  Companies House identity verification from **18 November 2025**, discharged
  either directly or through an **Authorised Corporate Service Provider**
  (Companies House / ICAEW, 2025).
- US picked as a negative control because it ran the exact experiment already
  and the result is documented.

## Buyer count

- **50,000+ notaries** represented by the CNUE across 22 EU member states,
  plus ~200,000 employees (CNUE, notariesofeurope.eu). Accountancy and legal
  firms under AMLR are additional and larger but I found no single audited
  count (unverified).
- UK: OPBAS oversees **22 professional body supervisors** covering "thousands"
  of accountancy and legal practices; **no published total firm count** was
  found (FCA/OPBAS materials, 2024-25). AML supervision is being transferred
  to the FCA following an Oct 2025 government decision (Clyde & Co, 2025).
- US (control): FinCEN's original CTA scope was ~32 million reporting
  companies; after the **21/26 March 2025 interim final rule**, the definition
  of "reporting company" was rewritten to cover **only entities formed under
  foreign law and registered to do business in a US state** — every
  US-formed entity is exempt (FinCEN; Morgan Lewis, Davis Polk, Ballard Spahr,
  2025). **New York** then ran the same play: the NY LLC Transparency Act took
  effect 1 Jan 2026 but, after Governor Hochul's **19 Dec 2025 veto of
  SB S8432**, applies only to **non-US-formed LLCs** (Sidley, Holland &
  Knight, Baker McKenzie, 2026). Statutory filing fee **$25** (NY DOS).

## Observed pricing

This is the one comparator where a self-serve, product-led price with real ACV
is actually published:

- **Certivus** (AML software for UK accountants): **£49 / £149 / £499 per
  month**, free tier of 5 checks, explicitly self-serve with no sales contact
  (certivus.com, 2026). ≈ **£588–£5,988/year**.
- **Xama**: ~**£13/month platform fee + ~£2.10 per check + ~£1.58 per entity
  per year** monitoring (via Certivus comparison, 2026).
- **FirmCheck**: **£0.50 per client per month** (same source, 2026).
- **FigsFlow**: **£2.10 + VAT per AML check** (figsflow.com, 2026).
- Quote-only (i.e. sales motion): **SmartSearch, Thirdfort, First AML,
  ComplyCube** — First AML reported with a ~400-check annual minimum (Certivus
  comparison, 2026).

## Incumbents & free substitutes

Crowded in the UK, thinner on the Continent. Incumbents: SmartSearch,
Thirdfort, First AML, Amiqus, ComplyCube, Xama, FirmCheck, Certivus; on the
KYB/UBO data side Sumsub, Didit, Moody's, Kyckr. Free state substitute is
real but partial: **Companies House identity verification via GOV.UK One Login
is free**, so the *identity* leg is state-supplied — but no state supplies the
cross-referencing/nominee-pattern leg, which is where Indonesia's gap also sat.
EU BO registers are accessible to obliged entities but fragmented by member
state. **ACSP registration itself costs £55** (Companies House, 2025).

## Verdict for a solo remote founder

**Marginal — the only one of the three that is not a clean no.** The
arithmetic works product-led for the first time: at Certivus's published
£149/month tier, $1M ARR ≈ **~435 firms**; at £49/month, ~1,300 firms —
against a buyer population of 50,000+ EU notaries plus tens of thousands of
UK/EU accountancy and legal practices, sold through a motion that a
competitor *demonstrably* runs with no sales contact and no security review.
That is a genuine G6-compatible shape, unlike Indonesia.

What holds it back is not economics. It is (a) **regulatory whiplash risk,
now twice documented in twelve months** — FinCEN erased ~32M US buyers in
March 2025 and New York erased its own domestic scope in December 2025, which
is precisely the failure mode a solo founder cannot absorb; (b) **AMLR does
not bite until 10 July 2027**, outside a 12-month first-paying-customer
window (G1); (c) **22 member states, 22 languages, 22 national supervisors**,
which is a localisation cost, not a product cost; and (d) the UK, where the
duty is already live, is the most crowded.

## What would change this

A single named EU jurisdiction (Italy, Spain, Poland — large notariats,
civil-law deed filing closest to Indonesia's SABH) with a *pre-2027* national
BO verification duty already in force, plus one competitor publishing
self-serve pricing in that language. That combination would move this to
"yes"; I did not find it this pass and did not search jurisdiction-by-
jurisdiction.

## Sources

- https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng and Hogan Lovells AMLR BO note (2024)
- https://www.notariesofeurope.eu/en/citizens/european-directory-of-notaries/ (CNUE, 50,000+ notaries)
- https://certivus.com/compare/best-aml-software (2026, published £49/£149/£499 per month)
- https://figsflow.com/uk/cheapest-anti-money-laundering-check-in-the-uk/ (2026, £2.10/check)
- https://companieshouse.blog.gov.uk/2025/03/13/third-party-providers-get-ready-to-register-as-an-authorised-corporate-service-provider (2025, £55 ACSP fee)
- https://www.icaew.com/regulation/aml-supervision/aml-resources/acsp-and-id-verification (2025, free GOV.UK One Login IDV)
- https://www.morganlewis.com/pubs/2025/03/fincen-removes-boi-reporting-requirements-for-us-companies-and-us-persons (Mar 2025)
- https://www.sidley.com/en/insights/newsupdates/2026/02/ny-llc-transparency-act-took-effect-but-governor-veto-exempts-us-formed-llcs (2026)
- https://www.clydeco.com/en/insights/2025/12/fca-s-takeover-of-aml-supervision-analysis-for-law (Dec 2025)
