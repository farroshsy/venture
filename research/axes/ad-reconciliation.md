# Digital Ad Spend Reconciliation — axis 3

## Problem & Current Workflow

An Indonesian advertiser's budget passes through an agency, a DSP, exchanges/SSPs and publishers, or goes straight into walled gardens (Google, Meta, TikTok). Each hop reports its own numbers. Settlement today: the platform self-reports impressions/clicks/spend in its dashboard; the agency compiles a campaign report and invoices the advertiser; if a third-party verifier (DoubleVerify, IAS, HUMAN) is deployed, its measured numbers are compared against platform-reported numbers; discrepancies inside a contractual tolerance are ignored, larger ones trigger make-goods or credit negotiations. Inside walled gardens the platform is simultaneously seller, ad server, auctioneer and auditor of record — the advertiser reconciles against the platform's own console because no independent log exists. For open-web programmatic, log-level data is fragmented across intermediaries that each take undisclosed fees.

## Stakeholders & Who Pays (cross-border, both sides)

Indonesian side: advertisers (FMCG, e-commerce, telcos, government campaigns), media agencies (GroupM/WPP, Dentsu, Publicis affiliates plus locals), and local publishers. Foreign side: the platforms that receive most of the spend — Google and Meta (US), TikTok/ByteDance (China/Singapore) — plus global ad-tech intermediaries. The advertiser ultimately pays for waste; agencies absorb reconciliation labor; verifiers are paid by advertisers as a percentage of measured media; nobody audits the walled gardens' logs directly — accredited audits of their measurement methodology (MRC-style) substitute for log access.

## Trust Breakdown (cited incidents)

- ANA Programmatic Media Supply Chain Transparency Study (2023): of the ~$88 billion open-web programmatic market, up to $20 billion (23%) is waste; made-for-advertising sites alone took 15% of spend; the study needed months of legal work just to obtain log-level data — demonstrating that the data custodians resist inspection.
- Fraudlogix (Q1 2026): Indonesia's invalid-traffic rate climbed from 53.12% to 59.17%, among the world's highest, versus a global IVT rate of 20.64% across 105.7 billion impressions measured in 2025. Indonesia is repeatedly named a click-farm source market.
- The 2016-2018 wave of blockchain reconciliation pilots (IBM-Mediaocean ledger, Lucidity's GameStop/Toyota tests, MetaX adChain) was itself triggered by documented advertiser-agency distrust after the ANA's 2016 rebate transparency report (AdExchanger, 2018).
- Indonesia-specific reconciliation dispute cases in the public record are thin: no named Indonesian advertiser-agency discrepancy lawsuit was found in this search (absence noted, not evidence of absence).

## Cost of the Problem

Indonesia digital ad market: US$3.23 billion in 2025, forecast US$3.41 billion in 2026 (Mordor Intelligence, 2025). GroupM projected digital would take 75% of total Indonesian ad spend in 2025, growing 13.8% (Campaign Indonesia, 2024). Applying the ANA 23% open-web waste share to Indonesia's programmatic slice yields a nine-figure waste estimate, but that is an extrapolation, not a measured Indonesian figure (unverified). Fraud at >50% IVT (Fraudlogix, 2026) sits mostly in low-quality inventory that sophisticated buyers already filter. Strip: much "waste" is collusive or negligent media buying (agency incentives, cheap-reach KPIs) that no verification layer converts into recoverable value — the addressable reconciliation delta is the disputed remainder, plausibly low tens of millions US$ in Indonesia (unverified).

## Existing Solutions (as of 2026-07)

- MRC-accredited verification incumbents: DoubleVerify, Integral Ad Science, HUMAN (all US, global coverage including SEA), operating as the accepted neutral measurement layer.
- Walled-garden self-reporting plus third-party measurement partnerships that platforms permit on their own terms.
- TAG TrustNet, powered by Fiducia (UK): distributed-ledger reconciliation, 95%+ match rate in its UK cross-industry pilot (Nestlé, McDonald's, Unilever, WPP, Publicis and others), formally launched 2020 with UK government co-funding; expansion beyond the UK announced, but no evidence of Indonesian or SEA deployment found as of July 2026 (tagtoday.net; IPA).
- Blockchain graveyard, verified: Lucidity was acquired by crypto-oracle project Umbrella Network in September 2021 and exited standalone ad verification (CoinDesk, 2021); IBM-Mediaocean's ledger and MetaX adChain show no substantive activity in the record after 2018 (AdExchanger, 2018); the hint that these efforts are "mostly dead" checks out.
- Indonesian or regional startups dedicated to ad reconciliation: none found in this search.

## Why Insufficient & Who Rejects the Existing Anchor

Two distinct refusals. (1) Advertisers do not fully accept agency- and platform-reported numbers — that distrust is documented (ANA 2016/2023). (2) The walled gardens reject every external anchor: they do not release log-level data and would not write to a shared ledger, and they hold the majority of Indonesian spend. This second refusal is fatal to the blockchain thesis rather than supportive of it: a tamper-evident ledger is only as good as the data written into it, and the dominant custodian declines to write. For the open web, an accepted intermediary does exist — the MRC-accredited verifiers — and both advertisers and platforms contractually accept their numbers. TAG TrustNet's stall despite a successful pilot shows the marginal value of DLT over the verifier layer did not cover its coordination cost.

## Blockchain Test

Test 1 passes: the reconciliation problem predates and outlives blockchain. Test 2 fails: a centralized verifier database (which DV/IAS already are) is accepted by both the Indonesian and foreign sides where data access exists at all; where it doesn't (walled gardens), no ledger fixes a refusal to share source data. Test 3 fails: incumbents ship reconciliation dashboards today. Test 4 doubtful after stripping collusion-driven waste.

## Kill Test Verdict

KILLED. Fails tests 2 and 3. Nuance for H1: this looks like a "no shared anchor" case but is really a "custodian refuses all anchors" case — custodian-independent verification cannot bootstrap when the custodian monopolizes the raw event stream. H1 should be refined accordingly.

## Scores

- Severity 7 — 23% waste (ANA 2023) and >50% Indonesian IVT (Fraudlogix 2026); agencies staff reconciliation teams.
- Market 4 — Indonesia verification/reconciliation take on US$3.23B digital spend is tens of millions US$ at best.
- WTP 5 — budget owners exist and already pay verifiers; no unmet mandated spend.
- Chain 4 — multi-org and adversarial, but accepted intermediaries (MRC-accredited verifiers) exist and walled gardens won't feed any ledger.
- Urgency 4 — chronic problem, no deadline or fresh Indonesian scandal.
- Competition 3 — funded, accredited global incumbents with SEA presence.
- Moat 3 — a reconciliation layer without proprietary data access is a copyable feature.

Weighted: 4.6.

## What Would Kill This Idea

Already killed by: incumbent verifier acceptance, walled-garden data refusal, and the verified failure of every blockchain attempt (Lucidity, adChain, IBM) plus TAG TrustNet's failure to scale beyond the UK. It would only revive if Indonesian regulation forced platforms to expose auditable log-level data to third parties — at which point the state, not a startup, defines the anchor.

## Sources

- https://www.ana.net/content/show/id/pr-2023-06-programmaticstudy
- https://www.mediapost.com/publications/article/386433/ana-finds-as-much-as-20b-wasted-on-programmatic-a.html
- https://www.fraudlogix.com/stats/ad-fraud-by-country
- https://www.fraudlogix.com/stats/ad-fraud-statistics-2026
- https://www.mordorintelligence.com/industry-reports/indonesia-digital-advertising-market
- https://www.campaignindonesia.id/article/groupm-75-persen-total-belanja-iklan-indonesia-dikuasai-digital-di-2025/1899589
- https://www.coindesk.com/business/2021/09/23/umbrella-network-acquires-digital-advertising-oracle-lucidity-for-tens-of-millions
- https://www.adexchanger.com/online-advertising/whats-the-latest-for-blockchain-in-ad-tech/
- https://www.tagtoday.net/trustnet
- https://ipa.co.uk/news/tag-trustnet
- https://www.dentsu.com/id/en/insights/our-blog/dentsu-digital-advertising-market-report-2025
