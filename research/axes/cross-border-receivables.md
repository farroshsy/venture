# Cross-Border Receivables Double-Financing (Axis 1)

## Problem & Current Workflow

An Indonesian exporter holding a confirmed purchase order or invoice can raise working capital against it from: (a) an Indonesian bank's trade finance desk, (b) LPEI (Indonesia Eximbank), (c) a licensed P2P/productive-lending fintech, or (d) a foreign cross-border invoice financier (Stenn, Drip Capital, Incomlend and similar firms fund Asian exporters remotely). Each lender independently checks the invoice PDF, the bill of lading, the buyer's confirmation, and the borrower's credit file. Domestic bank exposures appear in OJK's SLIK credit bureau and P2P exposures in AFPI's Fintech Data Center, but both record borrower-level debt, not document-level pledges, and neither is visible to a foreign lender. Security assignments over receivables can be registered in the AHU fiducia registry, but registration is grantor-level, in Indonesian, and foreign financiers do not query it. Nothing stops the same invoice being financed twice in Jakarta and a third time in Singapore; the duplicate surfaces only when the exporter defaults and two lenders claim one cash flow.

## Stakeholders & Who Pays (both sides)

Indonesian side: exporters (borrowers), Indonesian banks and LPEI (credit risk holders), OJK (supervisor), Kejaksaan Agung/KPK (prosecution when fraud is state loss). Foreign side: invoice financiers and trade funds in Singapore, Hong Kong, UAE, UK; their credit insurers (ICISA members); correspondent banks; foreign courts where recovery is litigated. The loss lands on whichever lender is last to perfect its claim; fraud losses are ultimately priced into margins and into reduced SME credit access — ADB's Trade Finance Gaps survey (2023) put the global trade finance gap at US$2.5tn for 2022, with fraud risk a stated reason banks reject SME applications.

## Trust Breakdown (cited incidents)

- SNP Finance, Indonesia, 2018: PT Sunprima Nusantara Pembiayaan pledged fictitious/duplicated consumer receivables lists to 14 banks; police put losses at Rp14tn (~US$950m) (Kompas.id/Polri, 2018) — the domestic precedent for receivables pledged at multiple lenders.
- Qingdao/Dezheng Resources, China, 2014: ~US$4bn default built on duplicate financing and duplicated warehouse collateral (IFA Commercial Factor).
- Hin Leong and Agritrade, Singapore, 2020: forged and duplicated trade documents; ITFA cites >US$800m hidden losses at Hin Leong and ~US$5bn combined creditor exposure (GTR, 2024).
- LPEI, Indonesia: Kemenkeu reported four debtors to the Attorney General for Rp2.5tn of fraudulent export financing built on falsified documents (Tempo, March 2024); a second tranche of six companies with ~Rp3tn indications followed (Tempo, 2024); KPK later put potential state losses at Rp11.7tn (~US$710m) across 11 debtors, including fraudulent contract documents by Petro Energy (Jakarta Globe; article date unverified).
- KoinWorks, Indonesia: three executives detained in 2026 over ~Rp600bn (~US$37m) of bank financing channeled against falsified invoices (DealStreetAsia, 2026); its KoinP2P unit earlier reported ~Rp365bn of borrower fraud (media reports, 2024). Investree's license was revoked by OJK in 2024 amid fraud allegations (Tirto/CNBC Indonesia).

## Cost of the Problem

Indonesia exported US$282.91bn in 2025, up 6.15% from US$266.52bn in 2024 (BPS, January 2026); a large share is financed trade. Direct documented Indonesian fraud: the LPEI complex alone spans Rp2.5tn + Rp3tn reported by Kemenkeu (Tempo, 2024) and Rp11.7tn potential loss per KPK. Caveat for sizing: most LPEI losses involve collusive or fabricated underlying trades — off-system collusion a registry cannot stop — so only the duplicate-pledge slice is addressable; no Indonesia-specific estimate of that slice exists (unverified). Globally, ITFA/ICC treat duplicate financing as a systemic multi-billion-dollar leak (no single audited annual figure; unverified). Deduplication demonstrably expands lending: MonetaGo claims a 286% increase in MSMEs receiving financing on Indian platforms since 2023 (vendor-claimed, IFA Commercial Factor).

## Existing Solutions (as of 2026-07, named)

- MonetaGo Secure Financing: hash-based duplicate-financing registry; powers Singapore's Trade Finance Registry for ABS (live June 2023), the Swift Trade Financing Validation Service (pilot completed with Standard Chartered, 2023; reachable by 11,000+ Swift members), FCI partnership (GTR, 2024), SIDBI India (Nov 2025), Bahrain national registry (Oct 2025), Ghana initiative (2026), India Factoring/FIMBank alliance (FCI, March 2026). Architecture note: MonetaGo ran this exact use case on Hyperledger Fabric, ported to Corda, then publicly abandoned blockchain for a centralized registry on cost and performance grounds (GTR, 2022) — adoption accelerated afterward.
- Haifin (UAE): bank consortium deduplication utility, live since 2021 (GTR, 2024).
- National initiatives underway in Italy, Spain, Thailand, Turkey (GTR/ITFA, 2024). No Indonesian registry exists and no MonetaGo Indonesia deployment was found as of July 2026.
- Domestic partial rails: SLIK (OJK), AFPI Fintech Data Center, AHU fiducia registry — borrower- or grantor-level only.

## Why Insufficient & Who Rejects the Existing Anchor

Domestically, Indonesia has accepted anchors (OJK's SLIK, the fiducia registry) but they operate at the wrong granularity and are legally closed to foreign lenders. Cross-border, each national anchor stops at the border: a Singapore fund cannot query SLIK, an Indonesian bank cannot see a UK financier's book, and privacy law plus competitive secrecy block direct data sharing (ITFA, 2024). So the party rejecting the existing anchor is the foreign lender, who has no lawful access to it — and vice versa. However, the market's answer has been to elect a neutral private intermediary, not to eliminate intermediaries: banks on both sides increasingly accept Swift + MonetaGo's confidentiality-preserving hash registry as the shared anchor.

## Blockchain Test

The failure H1 looks for exists (no single national institution accepted by both sides), but the observed resolution is a trusted neutral operator: MonetaGo's global system runs as a centralized hash registry over Swift APIs, not a public chain. Tamper-evidence is provided by hashing; custodian independence has not been demanded by any economically relevant party. Chain necessity is therefore mid-scale (5), not 7+.

## Kill Test Verdict

1. Problem exists without blockchain — YES (pass). 2. Single-operator database acceptable to both sides — YES, Swift/MonetaGo is exactly that and both sides accept it (FAIL). 3. Incumbent ships in 6 months — effectively already shipped: any Indonesian bank can consume the Swift validation service today, and OJK/AFPI could mandate a domestic registry (FAIL). 4. Standalone value — plausible for a registry operator, but the position is being taken (weak pass). Verdict: KILLED on tests 2 and 3, despite being a real, expensive, documented problem.

## Scores

- Severity 7 — repeated multi-trillion-rupiah documented frauds (LPEI, KoinWorks) with dedicated prosecution.
- Market 4 — huge underlying flows, but registry-fee TAM in Indonesia likely $50-100M at best; addressable duplicate-pledge slice unverified.
- WTP 6 — banks and insurers already pay for fraud controls; Singapore banks funded ABS's registry.
- Chain 5 — multi-org, cross-border, but an accepted neutral intermediary (Swift/MonetaGo) exists and suffices.
- Urgency 6 — LPEI/KoinWorks scandals fresh; OJK tightening P2P; no statutory deadline.
- Competition 3 — funded incumbent with global traction actively expanding country-by-country.
- Moat 5 — registry network effects real but accrue to whoever wins the mandate first.

Weighted: 0.20(7)+0.20(4)+0.15(6)+0.15(5)+0.10(6)+0.10(3)+0.10(5) = **5.3**

## What Would Kill This Idea

Already largely killed: MonetaGo/Swift announcing an Indonesian deployment, or OJK mandating SLIK/AFPI invoice-hash extension, closes the whitespace. Conversely, evidence that Indonesian banks refuse a foreign-operated registry on data-sovereignty grounds would partially revive a local-operator play — as a MonetaGo franchise, not a blockchain venture.

## Sources

- https://www.gtreview.com/news/global/invoice-registries-key-to-fighting-damaging-trade-finance-fraud-itfa-says/
- https://www.gtreview.com/news/fintech/exclusive-monetago-ditches-blockchain-amid-scalability-concerns/
- https://www.kompas.id/baca/utama/2018/09/26/14-bank-diduga-dibobol
- https://fci.nl/en/news/india-factoring-expands-msme-financing-capabilities-monetagos-fraud-prevention-technology
- https://itfa.org/itfas-fraud-working-group-releases-first-white-paper-may-2024/
- https://www.gtreview.com/news/asia/singapore-goes-live-with-anti-fraud-registry-to-eliminate-duplicate-financing/
- https://www.sc.com/en/press-release/weve-completed-the-industry-first-pilot-of-trade-financing-validation-service-provided-by-monetago-over-swift/
- https://www.gtreview.com/news/digital-trade/fci-partners-with-monetago-to-fight-invoice-finance-fraud/
- https://www.monetago.com/
- https://magazine.factoring.org/magazine-articles/the-hidden-risks-of-fraud-in-factoring-and-invoice-discounting
- https://en.tempo.co/read/1846383/finance-minister-sri-mulyani-reports-alleged-fraud-in-indonesia-eximbank-worth-rp2-5-trillion
- https://jakartaglobe.id/news/kpk-investigates-indonesia-eximbank-over-suspicious-700-million-credit-deals
- https://www.dealstreetasia.com/stories/koinworks-loan-case-481512
- https://tirto.id/daftar-startup-fintech-yang-tersandung-kasus-fraud-hvWB
- https://id.investing.com/news/economy-news/naik-615-bps-catat-ekspor-indonesia-tembus-us28291-miliar-di-2025-2922597
- https://www.tradefinanceglobal.com/posts/icc-united-kingdom-launches-initiative-combat-trade-finance-fraud/
