# CROSSCUT — Trust-Failure Patterns Across the 30-Industry Scan

Date: 2026-07-29. Input: the 30 Phase 1 industry summaries in `research/industries/`. This document introduces **no new claims**; every number cited below comes from an industry summary and inherits that summary's source attribution and caveats. Grouping method: each industry is assigned to a failure mode only where its listed trust failures directly support the assignment — not where the failure is merely plausible.

## Failure taxonomy

| Code | Failure mode | Definition |
|------|-------------|------------|
| DOC | Document forgery | Forged/fictitious transaction and asset documents: certificates, deeds, permits, manifests, invoices, official blanks |
| CRED | Credential fraud | Person- or firm-bound qualification fraud: diplomas, professional licenses (STR/SIP), competency certs (SKA/SKT/SBU), seafarer certs |
| ID | Identity verification failure | KYC spoofing, synthetic/borrowed identity, deepfake liveness bypass, weak identity binding at point of use |
| PROV | Asset provenance / origin laundering | Physical goods of illegal or unknown origin laundered into legitimate supply chains |
| DUP | Duplicate claims | Same asset pledged, sold, certified, or counted more than once (double-pledge, double-sale, double-claim) |
| FUND | Fund custody opacity | No escrow, no proof-of-reserves, unsegregated or diverted third-party funds |
| EVT | Fabricated event records | Self-reported operational data with no independent attestation: phantom billing, dual books, custodial logs |
| SETT | Handoff & settlement disputes | Payment or liability gated on contested multi-party paper (POD, progress certificates, excursion blame) |
| AUTH | Product authenticity | Counterfeit or adulterated goods inside legitimate channels |
| COLL | Off-system collusion | Bribery and bid-rigging where the records are clean and the deal is struck off-platform |

## Failure-by-industry matrix

| Industry | Wtd | DOC | CRED | ID | PROV | DUP | FUND | EVT | SETT | AUTH | COLL |
|---|---|---|---|---|---|---|---|---|---|---|---|
| mining-nickel * | 6.6 | X | | | X | | | | | | X |
| palm-oil | 6.4 | | | | X | | | | | | X |
| workforce-credentials | 6.3 | X | X | X | | | | | | | X |
| gold-bullion * | 6.2 | | | | X | | X | | | X | X |
| invoice-financing | 6.1 | X | | X | | X | X | | | | |
| cold-chain | 5.9 | | | | | | | X | X | | |
| land-registry | 5.9 | X | | X | | X | | | | | X |
| koperasi | 5.9 | | | | | | X | X | | | |
| halal-certification | 5.9 | | | | | | | X | | X | |
| trade-finance | 5.8 | X | | | | X | | | | | X |
| healthcare-claims | 5.8 | | | X | | | | X | | | X |
| ports-customs | 5.7 | X | | | X | | | | | | X |
| insurance-claims | 5.7 | | | X | | | X | X | | | |
| digital-identity | 5.7 | X | X | X | | | | | | | |
| construction | 5.6 | | X | | | | | | X | | |
| real-estate-presale | 5.4 | | | | | | X | | | | |
| coffee-cocoa | 5.3 | | | | X | | | | | X | |
| notary-civil-docs | 5.3 | X | | | | X | | | | | |
| pharma-supply | 5.2 | | | | X | | | | | X | |
| islamic-social-finance | 5.2 | | | | | | X | | | | |
| domestic-logistics | 5.1 | X | | | | | | X | X | | |
| fisheries | 5.0 | | | | X | | | X | | | |
| ecommerce-authenticity | 5.0 | | | | | | | | | X | |
| ai-content-authenticity | 4.9 | X | | X | | | | | | | |
| carbon-markets | 4.8 | | | | | X | | X | | | |
| procurement | 4.8 | | | | | | | X | | | X |
| education-credentials | 4.7 | | X | | | | | | | | |
| professional-licensing | 4.7 | | X | X | | | | | | | |
| cross-border-remittance | 4.7 | | | X | | | | | | | |
| energy-rec | 3.3 | | | | | X | | | | | |
| **Recurrence** | | **10** | **5** | **9** | **7** | **6** | **6** | **9** | **3** | **5** | **9** |

`*` = survived the four-part kill test. Notes on borderline assignments: islamic-social-finance's uncertified waqf land (41.24% of SIWAK parcels, ATR/BPN via Kompas 2026) is a land-title registration gap, not forgery — it is counted under FUND only but overlaps land-registry's problem space. cross-border-remittance is ID-only by its own summary's admission: "the trust failure sits upstream of settlement, in placement." domestic-logistics' fuel theft (kencing solar) is counted as EVT because concealment runs through falsified delivery records.

## Horizontal platform candidates (3+ industries)

All ten failure modes clear the 3-industry bar. The question that matters is not recurrence but whether **one product with one buyer and one workflow** can serve the set. Verdicts below.

### DOC — Document forgery (10 industries)
The most recurrent failure and the least buildable as a single product. The forged artifacts share nothing but paper: customs COO/SKA (issuer: DJBC/Kadin), land certificates (BPN), notarial deeds (individual notaries under a paper-protocol legal mandate), RKAB mining quotas (ESDM), LC export documents (banks), seafarer blanks (Kemenhub — whose own registration site was hacked, Polda Metro Jaya 2020). Verification must anchor at the **issuer**, and there is no single issuer: a horizontal "verify any Indonesian document" product requires winning ministry-by-ministry issuance-side adoption, each with its own procurement politics, and Peruri's e-meterai already occupies the state-mandated signing slot. One product cannot serve all ten. The honest framing: DOC is horizontal as a *failure* but strictly vertical as a *go-to-market*; a cryptographic signing/verification layer becomes a platform only after it wins one issuer, and the first issuer choice IS the venture decision.

### CRED — Credential fraud (5 industries: workforce, education, professional-licensing, construction, digital-identity)
The most product-coherent candidate on the board. The verify-side buyer is the same actor everywhere — an employer, hospital, tender committee, or foreign manning agent asking "is this person's qualification real, current, and actually theirs?" — and the workflow (pre-hire/pre-engagement lookup) is identical across all five. The issuer side is fragmented but finite: universities (SIVIL exists but produces documented false negatives — Trunojoyo alumni 2023), KKI/health ministries (STR/SIP), LPJK (SBU/SKK), Kemenhub (seafarers). Two hard caveats. First, the Susanto case (non-doctor practicing ~2 years on a *real* doctor's identity) proves registry lookup alone is insufficient — the failure includes identity *binding* at point of use, which drags in biometrics and pushes the product toward the served digital-identity market. Second, issuance-side adoption is government-dependent, and the Jokowi ijazah affair shows disputes get settled by police forensics, not registries — the state may prefer it that way. Verdict: genuinely horizontal on the verify side; the venture risk is concentrated in issuer adoption, not product breadth.

### ID — Identity verification failure (9 industries)
Recurring nearly everywhere, but this is a **served market**, not a gap: VIDA, Privy, and licensed PSrE/e-KYC providers already sell here, and VIDA's own fraud report (2025) is the source for half the failure evidence. The unserved slice is deepfake-resistant verification (1,100+ deepfake KYC-bypass attempts at one bank in 3 months, Group-IB late 2024) — a feature race incumbents are best positioned to win. Blockchain necessity is weak throughout. Verdict: real cross-cut, wrong entry point for a new company; treat ID as infrastructure to partner for, not to build.

### PROV — Asset provenance (7 industries)
The strongest horizontal by evidence weight — it contains both kill-test survivors (mining-nickel 6.6, gold-bullion 6.2) plus the highest non-survivor (palm-oil 6.4) — and it has converging regulatory forcing functions: EUDR Dec 2026 (palm, coffee/cocoa), EU battery passport Feb 2027 (nickel), BPOM TTAC serialization Dec 2025/2027 (pharma). The abstract data model is identical (registered origin + custody transfers + mass-balance reconciliation) and the adversary is identical (the aggregation layer: palm agents, coffee collectors, ore traders with rented RKAB). But one product cannot span it, because the set splits into two different companies: **(a) high-value minerals** — nickel and gold — where units are large, choke points are few (smelters, refineries), counterparties are corporate, and buyers face hard deadlines with money; and **(b) smallholder soft commodities** — palm, coffee, fisheries — where ~99% of independent farmers lack e-STDB, field operations dominate cost, and the paying buyer (EU-facing exporter) is several layers from the point of fraud. Verdict: the honest horizontal claim is minerals-only; claiming palm-to-nickel breadth in one platform would fail the kill test on operational grounds even though the failure mode is shared.

### DUP — Duplicate claims (6 industries)
Splits cleanly into one buildable product and three that are not. The buildable core: a **receivables/collateral uniqueness registry** serving trade-finance and invoice-financing — same buyer (bank, P2P, multifinance credit desks), same workflow (hash-check the invoice/cargo before disbursing), a proven foreign precedent (MonetaGo, India), and a verified gap (FDC/Pusdafil are borrower-level only; AHU fidusia is deed-level and not invoice-searchable). Land double-certificates and deed double-sales are the same abstract failure but the dedupe authority is BPN's state monopoly — a startup cannot arbitrate title. Carbon/REC double-claims are registry-governance problems with near-zero transaction volume to monetize (11 tCO2e retired in Feb 2026, IDXCarbon). Verdict: yes as a lender-facing financial registry across 2–3 credit verticals; no as a six-industry platform.

### FUND — Fund custody opacity (6 industries)
A shared failure with a fatal shared property: **the party who must adopt the fix is the party who profits from the opacity.** Developers resist presale escrow (no mandate exists — verified legal gap); koperasi management self-reports to Kemenkop ODS with no reconciliation; zakat institutions lost donor trust (ACT) but donors route around them rather than demand audit rails; digital-gold custody surfaced only when Bappebti forced Tamasia's hand. Proof-of-reserves technology is commodity; the scarce input is a per-sector regulatory mandate, and each mandate has a different regulator (OJK, Kemenkop, BAZNAS/Kemenag, Bappebti). Verdict: not one product. Each vertical is a regulatory-capture play with a different champion, and none currently has a champion.

### EVT — Fabricated event records (9 industries)
Broadest after DOC, least coherent as a product. "Prove the event happened" means IoT sensor attestation in cold-chain, claims-vs-medical-record analytics in JKN, e-logbook coverage in fisheries, forensic accounting in koperasi. Evidence types, buyers, and adversaries share nothing. The one slice with a single buyer and quantified loss: **JKN claims integrity** (insurance-claims + healthcare-claims — phantom billing, KPK estimate ~Rp 20T/yr), where BPJS Kesehatan is the sole payer and the KPK 2024 audits (4,341 claims vs ~1,000 real) prove detection is possible with record cross-referencing. That is a vertical analytics business, not a horizontal attestation platform, and it sells to one state buyer with all the concentration risk that implies. Verdict: no horizontal product; the JKN slice is the only fundable fragment.

### SETT — Handoff & settlement disputes (3 industries)
Meets the bar arithmetically, fails it structurally. Logistics ePOD-to-payment, construction progress certification, and cold-chain excursion liability share a skeleton (attested milestone → payment/liability release) but the construction instance is not a verification failure at all: pay-when-paid is *legal*, and Waskita's Rp2.1T vendor arrears are a solvency problem — a perfectly verified progress certificate against an insolvent SOE still doesn't pay. Cold-chain settlement rides on the EVT sensor problem. Verdict: only domestic-logistics has a pure verification-unlocks-payment shape, and it's a single vertical.

### AUTH — Product authenticity (5 industries)
Unit-level serialization plus scan verification could technically serve pharma, halal, gold certificates, and premium coffee GI — but only pharma has a binding mandate (BPOM TTAC, Dec 2025/2027 deadlines), gold's check is issuer-controlled (Antam/CertiEye — and the 109t case shows the *issuer's insiders* were the attack, which serialization by that issuer cannot fix), and e-commerce brand protection is a detection-and-takedown services business (account cycling, live commerce) with different DNA entirely. Verdict: pharma serialization compliance is the beachhead; halal is a plausible second market on the same rails; do not underwrite the platform on the other three.

### COLL — Off-system collusion (9 industries) — ANTI-CANDIDATE
The most recurrent failure of all, and the one no verification product addresses, because **the records are already clean**. Procurement's summary states it exactly: SPSE/e-Katalog data is public while deals are rigged off-platform; DJBC bribes (Rp91.77B, conviction Jul 2026), LPEI insider kickbacks, mafia pelabuhan, Antam insiders — all executed by authorized actors producing valid records. This matters beyond COLL itself: several headline loss figures that make other categories look large (mining's Antam Mandiodo Rp5.7T, trade-finance's LPEI Rp11.7T) are collusion losses that provenance or document rails would **not** have prevented. Any Phase 2 candidate whose market-size case leans on COLL-tainted numbers should have those numbers stripped out and be re-scored.

## Implications for Phase 2

1. **Genuinely horizontal (one buyer type, one workflow):** CRED (verify-side), DUP (lender-facing financial subset). These are the only two where "platform" is honest on day one.
2. **Horizontal failure, vertical product — pick one wedge:** PROV (split minerals vs smallholder; minerals is where both kill-test survivors sit), AUTH (pharma first), EVT (JKN slice only), DOC (pick one issuer), SETT (logistics only).
3. **Anti-candidates as platforms:** COLL (verification doesn't bind colluders), ID (served market), FUND (no willing buyer without per-sector mandates).
4. **Scoring hygiene:** re-check any weighted score whose severity evidence is dominated by COLL-type cases before advancing it.
