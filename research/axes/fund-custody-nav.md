# Fund NAV and custody attestation (axis 2A)

## Problem & Current Workflow
An Indonesian mutual fund (reksa dana) is run by an investment manager (manajer investasi, MI) but its assets sit at a custodian bank, which by design is the party that computes the daily net asset value (NAV/NAB) using OJK's standard formula — the manager does not price its own fund (SEOJK 1/SEOJK.04/2015). Since August 2016 every mutual fund transaction must flow through S-INVEST, KSEI's integrated investment-management system, mandatory under POJK 28/POJK.04/2016; MIs, selling agents, and custodian banks share one database covering static data, order routing, post-trade processing, and reporting. Since 17 February 2021 custodians no longer mail confirmations; investors pull statements themselves from KSEI's AKSes portal (Bisnis.com, 2021). OJK supervises, and where a state-owned investor is the victim, BPK computes losses and the Attorney General prosecutes.

## Stakeholders & Who Pays
26 commercial banks are registered custodians (Pintu, 2024); the largest, HSBC Indonesia, held Rp976.13 trillion in custody as of September 2023 (Pintu, 2023). Custody fees of roughly 0.1–0.25% of AUM are embedded in NAV (Pintu, 2024 — approximate). ~90 licensed MIs pay S-INVEST usage fees to KSEI. Investors — retail, plus institutions like BPJS, pension funds, and insurers — bear the fees. Foreign investors access the market through global sub-custodians (HSBC, Citi, Standard Chartered) that are themselves KSEI participants. Disputes go to OJK, BPKN-style mediation, or criminal courts.

## Trust Breakdown (cited incidents)
- **Jiwasraya**: BPK's investigative audit put state losses at Rp16.81 trillion — Rp4.65 trillion from equities and Rp12.16 trillion from mutual funds used as wrappers for manipulated, illiquid stocks (BPK, 2020).
- **Asabri**: Rp22.78 trillion in state losses, 2012–2019, through arranged placements in stocks and mutual funds tied to the manipulators (BPK, 2021).
- **Minna Padi AM**: OJK dissolved 6 funds worth Rp5.72 trillion AUM that promised "guaranteed" 11% returns (OJK/CNBC Indonesia, 2019).
- **Narada AM**: suspended after failing to pay Rp177.78 billion for stock purchases (OJK/Bisnis, 2019).
- **Kresna AM**: 24 funds suspended by OJK (August 2020).
- **Custodian layer**: OJK found NAV miscalculations, late NAV reporting, and weak valuation oversight, ordering corrective action at 11 custodian banks and compliance exams at 3 (Bisnis.com, 2020).
- **Underlying assets**: SNP Finance's fictitious and double-pledged receivables backed Rp1.85 trillion of MTN that defaulted in 2018 (Tirto/Bisnis, 2018), poisoning portfolios that held them.
- In February 2026 Bareskrim named suspects for mutual-fund price manipulation: two Narada AM executives (president commissioner and a director) and three at Minna Padi AM; underlying stocks came from projects controlled by insiders via affiliates and nominees. Roughly Rp674 billion of client funds remain locked in the suspended funds (Fin.co.id, 2026), and investigators blocked/seized securities worth about Rp207 billion plus six mutual-fund accounts holding roughly Rp467 billion in stock (Investor.id, 2026) — enforcement is still running six years after suspension.

## Cost of the Problem
Industry NAB was Rp652.90 trillion (~US$40B) at end-June 2026, down 3.32% year-to-date and 4.79% month-on-month (OJK RDK press release, June 2026); it stood at Rp726.26 trillion in February and Rp685.76 trillion in May 2026 (OJK, 2026) — an industry in outflow, not growth. The headline scandal losses (Rp16.81T + Rp22.78T, BPK 2020/2021) were overwhelmingly collusion between state insurers, MIs, and stock manipulators — off-system fraud that must be stripped from addressable sizing. What remains addressable is oversight spend: shadow-NAV/contingency tooling and custody attestation for 26 custodians and ~90 MIs. Benchmarked against global NAV-oversight SaaS pricing, that is plausibly single-digit millions of dollars a year in Indonesia (unverified).

## Existing Solutions (as of 2026-07)
- **KSEI S-INVEST** — the state-mandated shared system of record for the entire fund industry since 2016.
- **Custodian banks** as regulated independent NAV calculators, with SEOJK 1/2015 error-correction procedure.
- **OJK reform program** — post-2020 supervision tightening continuing into 2026 (Bareksa, May 2026).
- **Global vendors**: FundGuard (AI contingency/oversight NAV, e.g. Ultimus partnership), Milestone pControl, Broadridge — none observed with Indonesian deployments (search, July 2026).
- **DLT infrastructure**: Calastone Tokenised Distribution integrated with Polygon, November 2025; OJK sandbox graduates in tokenization (Blocktogo gold, Nano's KPD securities tokenization, GORO property — OJK sandbox, 2025). None target NAV attestation.

## Why Insufficient & Who Rejects the Existing Anchor
The honest answer: no economically relevant party rejects the anchor. Foreign sub-custodians clear through KSEI; institutional investors accept OJK-supervised custodian NAVs; courts accept BPK audits. Every major loss occurred through collusion or valuation fraud inside the perimeter — manipulated prices of thinly traded stocks fed into a correctly executed NAV formula. A tamper-evident ledger records the same garbage immutably. The gap that exists (valuation oversight, custodian calculation quality) is a supervision-and-analytics problem OJK is already addressing by decree.

## Blockchain Test
If blockchain disappeared, the problem (valuation fraud, weak custodian oversight) persists — pass. But a single trusted operator's database already exists and is accepted by all parties: S-INVEST literally is that PostgreSQL, run by KSEI — fail. OJK/KSEI can extend it by regulation within months, and FundGuard-class vendors sell the oversight layer as SaaS — fail. H1 prediction confirmed: an accepted state anchor occupies the slot.

## Kill Test Verdict
**KILLED.** Fails kill tests #2 and #3. The customer problem is real (#1 passes) but the accepted neutral operator exists, and incumbents/state can ship the remedy. Standalone economics (#4) also doubtful once collusion losses are stripped.

## Scores
- Severity 7 — recurring regulatory exposure and documented scandals; dedicated compliance staff exist at every custodian/MI.
- Market 3 — attestation/oversight software for ~116 institutions is well under $50M TAM.
- WTP 4 — budgets exist but the levy already goes to KSEI/custodians; no one is paying for an inferior third-party alternative.
- Chain 4 — multi-org, but a fully accepted trusted intermediary (KSEI) already operates the shared ledger.
- Urgency 5 — 2026 Bareskrim cases and OJK reform keep pressure on, no hard deadline for new attestation infrastructure.
- Competition 3 — the state incumbent occupies the slot; funded global vendors cover the oversight layer.
- Moat 3 — a shadow-NAV or attestation service is a copyable feature.
- **Weighted: 4.3**

## What Would Kill This Idea
Already killed. It would only revive if OJK mandated custodian-independent, investor-verifiable proof of asset existence (e.g., for tokenized funds sold cross-border where foreign distributors refuse KSEI statements) — no sign of that as of July 2026.

## Sources
- https://www.bpk.go.id/news/kerugian-negara-kasus-jiwasraya-rp1681-triliun (BPK, 2020)
- https://www.bpk.go.id/news/kerugian-negara-kasus-pt-asabri-rp2278-triliun (BPK, 2021)
- https://www.cnbcindonesia.com/market/20191122062056-17-117089/ojk-bubarkan-6-reksa-dana-minna-padi-izin-dirut-dibekukan (CNBC Indonesia, 2019)
- https://www.cnbcindonesia.com/market/20200819135419-17-180846/gagal-bayar-suspensi-hingga-digugat-ada-apa-dengan-kresna (CNBC Indonesia, 2020)
- https://market.bisnis.com/read/20200703/92/1261101/reformasi-pengawasan-pasar-modal-pil-pahit-demi-jaga-kepercayaan (Bisnis.com, 2020 — 11 custodian banks)
- https://market.bisnis.com/read/20260205/7/1950264/rapor-merah-narada-am-dan-minna-padi-am-dari-gagal-bayar-hingga-saham-gorengan (Bisnis.com, 2026)
- https://investor.id/national/427133/usut-manipulasi-reksa-dana-pt-nam-dan-pt-mpam-bareskrim-sudah-ada-tersangka (Investor.id, 2026)
- https://news.fin.co.id/2026/02/04/skandal-goreng-saham-terbongkar-bos-minna-padi-dan-narada-jadi-tersangka-dana-nasabah-rp674-miliar-terkunci (Fin.co.id, 2026)
- https://ojk.go.id/id/berita-dan-kegiatan/siaran-pers/Documents/Pages/RDKB-Juni-2026/SP%20131%20Resiliensi%20Dan%20Kinerja%20Intermediasi%20Sektor%20Jasa%20Keuangan%20Terjaga%20Sebagai%20Modalitas%20Mendorong%20Pertumbuhan%20RDKB%20Juni%202026.pdf (OJK RDK, June 2026)
- https://www.ksei.co.id/services/types/management-of-investment-accounts/S-Invest (KSEI)
- https://market.bisnis.com/read/20210217/92/1357494/mulai-besok-transaksi-reksa-dana-bisa-dipantau-online-via-akses-ksei (Bisnis.com, 2021)
- https://swa.co.id/read/471600/tren-reksa-dana-di-kuartal-i2026-turun-ini-kata-bei-dan-ojk (SWA/OJK, 2026)
- https://tirto.id/kasus-snp-finance-upaya-menutup-celah-curang-keuangan-cMdD (Tirto, 2018)
- https://www.fundguard.com/ultimus-partners-with-fundguard-to-provide-a-technology-driven-nav-contingency-solution/ (FundGuard)
- https://www.calastone.com/news/calastone-launches-tokenised-distribution-solution-to-unlock-the-future-of-fund-distribution/ (Calastone, 2025)
- https://pintu.co.id/blog/bank-kustodian-adalah (Pintu, 2024 — custodian count/fees)
