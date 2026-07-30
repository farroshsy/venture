# Renewable Energy Certificates (RECs)

## Problem & Current Workflow

Corporates in Indonesia (RE100 members, export manufacturers, data centers) need auditable renewable-electricity claims for Scope 2 reporting. Two channels exist. (1) **PLN REC**: the state utility sells certificates at Rp 35,000 per MWh-unit, backed by designated PLN plants (largely geothermal and hydro), issued and tracked on APX's TIGR registry, which is accepted for RE100, CDP and SBTi claims (PLN via Invest Indonesia, 2025; REDEX/TIGR documentation). The customer signs up, pays, receives registry-retired certificates, and books the claim. (2) **I-REC(E)**: independent generators register devices on the Evident registry through accredited platform operators, get certificates issued against metered generation, and sell them (spot ~US$3.12/MWh in 2023 to ~US$4.45/MWh in 2025 for Indonesian solar; DataM Intelligence, 2025). Device registration, issuance requests, verification and redemption are the workflow steps; documents are device registrations, generation meter data, and registry redemption statements.

## Stakeholders & Who Pays

PLN is generator, seller and near-monopoly grid operator; buyers are multinationals and their tenants (industrial estates, data centers); registries (APX TIGR, Evident I-REC) act as bookkeepers and de facto auditors; platform operators like REDEX register devices and broker supply; sustainability auditors verify corporate claims. The corporate buyer pays — but at Rp 35,000 (~US$2.2) per MWh, total PLN REC sales since 2020 are 13.68 TWh (PLN, H1 2025), implying cumulative revenue of roughly Rp 479 billion, ~US$30M over five years (computed from PLN volume and price figures; the "Rp 47.88 trillion" figure circulating in one secondary source is arithmetically inconsistent — treated as erroneous). Annual sales: 308,610 MWh (2021), 1,762,953 (2022), 3,543,638 (2023), 5,382,245 (2024), 2,689,117 in H1 2025 (PLN via Invest Indonesia, Aug 2025).

## Trust Breakdown (documented incidents, cited)

Hard search (English and Indonesian) found **no documented forgery, double-issuance or fraud incident involving Indonesian RECs**. The trust issues on record are structural, not criminal:

- **Attribute-ownership disputes** between IPPs and PLN over who owns the environmental attribute of PPA electricity — significant enough that the I-TRACK Foundation publicly noted Indonesia's clarification of attribute ownership as a market-integrity milestone (I-TRACK Foundation, 2024).
- **Double-claim exposure** between Indonesia's NDC accounting and corporate claims, plus generic unbundled-REC criticism (no additionality; certificates from long-existing hydro/geothermal), which is a global critique of RECs rather than an Indonesian scandal (ever.green; Datacenter Dynamics; APERC REC study, 2023).
- Academic work catalogs PLN's REC expansion obstacles — supply concentration and credibility questions — without documenting fraud (ResearchGate, 2025).

## Cost of the Problem

No named fraud loss exists. The measurable costs are: (a) claim-quality risk — if RE100/SBTi tighten rules on non-additional unbundled RECs, Indonesian buyers' claims are devalued (no quantified Indonesian figure; (unverified)); (b) onboarding friction for distributed generators — from 2014 to 2023 fewer than 9,000 devices across all Southeast Asian renewables were registered on Evident; REDEX alone registered 17,564 Indonesian rooftop inverters in eight months of 2024, showing the bottleneck was tooling, since solved (REDEX, 2024); (c) foregone premium revenue for small generators (unquantified, (unverified)).

## Existing Solutions (as of 2026-07, named)

- **PLN REC** on **APX TIGR** — incumbent, growing 14%+ annually (Invest Indonesia, 2025).
- **Evident I-REC(E) registry** — the international standard registry for Indonesia.
- **REDEX** (Singapore) — accredited platform operator, API-integrated with Evident, already solving bulk device registration for Indonesian rooftop solar; offers REHash/REAPI/RESuite (REDEX, 2024).
- Academic blockchain-REC pilots exist in Indonesian literature (PMC, 2025) with no commercial deployment found.

## Why Insufficient

The honest finding is that the existing stack is largely *sufficient*. The single-utility structure means one counterparty (PLN) controls generation data; TIGR and Evident are accepted trusted intermediaries whose records RE100/CDP auditors already rely on. Remaining gaps — additionality, NDC double-claim policy, PPA attribute allocation — are regulatory-policy problems that no third-party ledger fixes. The residual commercial gap (distributed-device onboarding, matching, 24/7 granular certificates) is being filled by funded incumbents, chiefly REDEX.

## Blockchain Test

Single dominant counterparty plus internationally accepted registries. A database under a trusted operator is not the hypothetical fix — it is the current, functioning system. Tamper-evidence changes no behavior because no party disputes the registries' records.

## Kill Test Verdict

1. Problem without blockchain? YES — claim credibility matters. 2. PostgreSQL under a single trusted operator? **YES — TIGR and Evident are exactly that and are accepted by all verifiers. FAIL.** 3. Incumbent ships it in 6 months? **YES — REDEX/Evident/APX already ship it. FAIL.** 4. Standalone economics? **NO — ~US$30M cumulative certificate revenue over five years; a platform take-rate on that cannot support a company. FAIL.** **KILLED** on tests 2, 3 and 4.

## Scores

- Severity 3 — credibility annoyance; no documented losses, no dedicated fraud-management staff.
- Market 3 — verified certificate revenue ~US$30M cumulative over 5 years; well under $50M annual TAM.
- WTP 4 — buyers pay, but tiny amounts; premium products (24/7 CFE) remain speculative here.
- Chain 3 — single-org data source; accepted trusted intermediaries exist.
- Urgency 4 — data-center and RE100 demand growing; no hard deadline forcing new infrastructure.
- Competition 3 — funded, accredited incumbents (REDEX, Evident, APX/TIGR, PLN itself) with traction.
- Moat 3 — any offering would be a copyable feature on existing registries.

**Weighted = 3.3**

## What Would Kill This Idea

Already killed by structure: the registry layer is occupied and accepted; the utility is a monopoly; the money is small. Only a regulatory rupture (e.g., mandatory granular hourly matching, or liberalized retail wheeling creating many competing suppliers) would reopen it.

## Sources

- https://investindonesia.co.id/2025/08/07/pln-renewable-energy-certificate-sales-up-14-in-2025/ (2025)
- https://www.reccessary.com/en/news/use-pln-renewable-energy-certificates-increased-75-percent (2025)
- https://redex.eco/news/redex-registers-more-than-17000-distributed-rooftop-solar-devices-in-8-months/ (2024)
- https://www.trackingstandard.org/indonesia-clarifies-attribute-ownership-signaling-commitment-to-fair-and-robust-market-implementation/ (2024)
- https://redex.eco/about-apx-tigrs/
- https://aseanenergy.org/wp-content/uploads/2024/09/Policy-Brief-Indonesias-REC-Market-Assessment.pdf (2024)
- https://aperc.or.jp/file/2023/5/29/4_Renewable_Energy_Certificates_in_APEC_SEA.pdf (2023)
- https://www.datamintelligence.com/research-report/indonesia-renewable-energy-certificate-market (2025)
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11847093/ (2025)
- https://www.researchgate.net/publication/397520142_PLN's_Obstacles_in_Expanding_Renewable_Energy_Certificates_RECs_in_Indonesia (2025)
