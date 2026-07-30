# Coalition Loyalty Point Liabilities (axis 3)

## Problem & Current Workflow

Indonesia has no Aeroplan-scale multi-party coalition operator. What exists is (a) one true coalition app — GetPlus, run by PT Global Poin Indonesia (a GDP Venture company), self-described as Indonesia's first coalition loyalty program with 1M+ members and 500+ online/offline partners including BCA, DANA, Blibli and Tiket.com (Antavo, 2025; GPI press materials, 2023) — and (b) hub-and-spoke conversion into airline and telco programs: bank points (Mandiri Livin'poin) and Telkomsel POIN convert one-way into GarudaMiles at contracted rates. The workflow: customer triggers conversion in the issuer's app; the issuer debits its own ledger; a batch file goes to the receiving program; the credit posts days later; the issuer settles cash per point at the contracted rate; monthly invoice reconciliation follows. Unredeemed points sit as deferred revenue under PSAK 72/IFRS 15 on the issuing ledger; breakage accrues by negotiated contract. Scale of the hub: GarudaMiles processed 3.062 billion miles of redemptions in 2024, up 16.5% from 2.629 billion in 2023, against 2.14 million active members (Garuda Indonesia 2024 Annual Report figures via PinterPoin, 2025).

## Stakeholders & Who Pays

Issuing partners pay: they buy miles/points from the program owner per point issued. Program owners (Garuda, Telkomsel, GPI) operate the ledger of record; external auditors value the deferred-revenue liability; consumers dispute through issuer call centers with no independent arbiter. One cross-border pairing exists: Emirates Skywards and GarudaMiles launched reciprocal earn/redeem in February 2025 (Emirates media centre, 2025), settled under bilateral airline agreements — both sides accept each other's ledgers contractually, as airlines have for decades under interline billing.

## Trust Breakdown (cited incidents)

- Coalition breakdowns are commercial, not ledger disputes. Air Canada's May 2017 announcement that it would exit Aeroplan crashed operator Aimia's shares 63% in one day; Aimia derived 57% of C$2.3B gross billings from Aeroplan and suspended dividends weeks later (CBC, 2017; Globe and Mail, 2017). Nobody contested the ledger; the fight was over economics and control.
- Partner-exit friction in Indonesia: when Citibank Indonesia exited retail banking in 2023, cardholders needed a manual claims process to salvage point-to-GarudaMiles conversions (Bisnis.com, 2023).
- Fraud is off-system. Telkomsel POIN is a standing social-engineering lure: WhatsApp impersonation campaigns documented by TurnBackHoax (Aug 2024) and warned against by BCA (Sept 2024); a Medan victim lost Rp9.9 million to a fake point-redemption call (MedanBisnisDaily, 2022). The ledger recorded exactly what fraudsters instructed — these losses must be stripped from addressable sizing.
- Insolvency exposure: Garuda's 2021-22 PKPU restructuring exposed miles holders to program credit risk, though miles were ultimately honored.

## Cost of the Problem

- Indonesia loyalty programs market: US$1.03B in 2025, growing 18.3% YoY (ResearchAndMarkets Indonesia Loyalty Programs Intelligence Report via GlobeNewswire, Sept 2025). That is total program spend, not a settlement-verification TAM; the coalition/settlement slice has no verified figure (unverified) and is plausibly low tens of millions of dollars.
- Global loyalty fraud: over US$1B annually for large travel/hospitality companies (industry estimate cited by Transmit Security, 2024) — dominated by account takeover, off-system.
- GarudaMiles outstanding-liability value: not separately disclosed in available coverage (unverified).

## Existing Solutions (as of 2026-07, named)

Platform vendors run coalition ledgers as SaaS: Antavo (powers GetPlus), Comarch, Giift. Points.com-class exchange infrastructure handles airline/bank transfers globally. Blockchain attempts: the GetPlus × MiL.K partnership (March 2023, PR Newswire) let members swap points into MLK crypto tokens — a redemption novelty, not settlement infrastructure; Loyyal (Emirates pilots ~2018), Singapore Airlines KrisPay (2018) and qiibee represent a decade of pilots with no production coalition running settlement on a shared ledger. Alfamart's parent absorbed the Ponta coalition operator (75% of PT Global Loyalty Indonesia for Rp17.8B, Investor.id/Wartaekonomi, 2019) — coalition economics collapsing back into single-retailer programs.

## Why Insufficient & Who Rejects the Existing Anchor

The honest answer: nobody rejects the anchor. Partners sign contracts accepting the program owner's ledger and audit rights; banks accept Garuda's ledger; merchants accept GPI's. The disputes that do occur (Aimia/Air Canada) are about economics and control, and no tamper-evident ledger changes them. Consumers lack an independent arbiter but are not a paying customer for verification. The genuinely multi-party pain — slow batch settlement, negotiated breakage — is fully served by the operator's database plus contract law.

## Blockchain Test

If blockchain vanished tomorrow, settlement lag and breakage negotiation would remain — pass on kill #1. But a PostgreSQL ledger under the coalition operator is precisely the current architecture, and every economically relevant party accepts it voluntarily — fail #2. Antavo or Comarch could ship any settlement feature within months — fail #3. The coalition slice of a US$1.03B total-spend market, with fraud losses off-system, cannot support a standalone company — fail #4.

## Kill Test Verdict

KILLED (#2, #3, #4). Phase 1's database-is-enough verdict on retail loyalty extends to coalitions: the coalition operator is the accepted trust anchor, by contract.

## Scores

- Severity 4 — settlement lag and partner-exit friction are managed operational costs; no Indonesian ledger scandal found.
- Market 3 — coalition-settlement slice of US$1.03B loyalty spend is well under US$50M (unverified split).
- WTP 4 — budgets exist for loyalty SaaS platforms, not for neutral verification.
- Chain 4 — multi-org, but the hub's ledger is contractually accepted by every partner.
- Urgency 3 — no deadline, no fresh scandal.
- Competition 5 — funded SaaS incumbents dominate the adjacent platform need; blockchain lane holds only abandoned pilots.
- Moat 4 — a settlement network effect would require coalition density Indonesia does not have.

Weighted: 3.8.

## What Would Kill This Idea

Already killed. Revival would require either a multi-airline, multi-bank coalition in which no member accepts another's ledger (none exists in Indonesia), or a regulator forcing loyalty liabilities into segregated, externally verifiable reserves (no such rule; closed-loop points sit outside e-money regulation).

## Sources

- https://www.globenewswire.com/news-release/2025/09/26/3157137/28124/en/Indonesia-Loyalty-Programs-Intelligence-Report-2025-Market-to-Grow-by-18-3-to-Reach-1-03-Billion-this-Year-Future-Growth-Dynamics-to-2029.html
- https://antavo.com/news/getplus-loyalty-program-launch/
- https://www.prnewswire.com/news-releases/koreas-representative-blockchain-based-loyalty-integration-platform-milk-unlocks-indonesia-market-with-getplus-a-leading-coalition-loyalty-program-301769836.html
- https://pinterpoin.com/terdapat-penukaran-3-miliar-garudamiles-di-tahun-2024-lalu-dengan-statistik-yang-mencengangkan/
- https://www.cbc.ca/news/business/air-canada-aeroplan-1.4109868
- https://www.theglobeandmail.com/report-on-business/embattled-aimia-suspends-dividend-three-directors-resign/article35305708/
- https://finansial.bisnis.com/read/20231116/90/1715183/catat-begini-cara-klaim-garudamiles-usai-citibank-indonesia-setop-bisnis-ritel
- https://www.emirates.com/media-centre/emirates-and-garuda-indonesia-expand-partnership-to-offer-reciprocal-loyalty-benefits/
- https://turnbackhoax.id/2024/08/31/penipuan-akun-whatsapp-mengatasnamakan-telkomsel-untuk-penukaran-poin/
- https://www.bca.co.id/en/informasi/awas-modus/2024/09/18/04/27/Waspada-Penipuan-Tukar-Poin-dari-Provider-Telepon-Palsu
- https://medanbisnisdaily.com/news/online/read/2022/11/30/164011/waspada_penipuan_bermodus_telkomsel_poin_kuras_uang_nasabah_dari_rekening_rp_9_9_juta/
- https://transmitsecurity.com/blog/the-rising-threat-of-hospitality-fraud-how-to-protect-your-customers
- https://investor.id/market-and-corporate/192511/induk-alfamart-akuisisi-global-loyalty-indonesia
