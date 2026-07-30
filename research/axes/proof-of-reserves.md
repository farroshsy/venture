# Proof of Reserves — Crypto Exchange/Custodian Attestation (Axis 2A)

## Problem & Current Workflow

The question this candidate tests: does an Indonesian crypto customer, or the regulator, need custodian-independent proof that exchange reserves actually back customer balances? Since the formal handover from Bappebti to OJK and Bank Indonesia on 10 January 2025 (BAST signed under PP 49/2024, mandated by UU P2SK; Kemendag, 2025), crypto trading operates inside a state-licensed market structure defined by POJK 27/2024 (effective 10 January 2025) and amended by POJK 23/2025 (enacted 31 October 2025, extending coverage to crypto derivatives and revising bursa and custodian obligations). OJK has licensed a complete ecosystem of 29 entities: one exchange (CFX / PT Bursa Komoditi Nusantara), one clearing-guarantee institution (PT Kliring Komoditi Indonesia), two licensed custodians (PT Tennet Depository Indonesia and PT Kustodian Koin Indonesia / ICC), and 25 licensed traders (PAKD) (OJK press coverage, 2025).

Verification today is two-layered. Structurally, licensed traders transact through the exchange, settle through clearing, and place customer crypto with the licensed custodians, with reporting to OJK. On top of that, proof of reserves is a voluntary marketing practice: Indodax publishes reserve wallet addresses tracked via CoinMarketCap — reserves reported at Rp 18 trillion (Kompas, January 2026) and Rp 13.5 trillion in a mid-January 2026 snapshot (Kontan, 2026) — and Tokocrypto publishes PoR as well (Investor.id, 2023-era coverage). No OJK rule mandates custodian-independent, cryptographically verifiable PoR as of July 2026; the Kontan piece (16 January 2026) frames PoR as an industry standard under the UU P2SK umbrella, not a regulatory requirement.

## Stakeholders & Who Pays

Retail investors: 20.19 million registered crypto consumers as of December 2025 (OJK via Antara, 2026). The 25 PAKD pay exchange, clearing, and custody fees; they would be the buyers of any attestation product. OJK supervises and receives reports; disputes route to OJK consumer protection and the courts. Custodians (Tennet, ICC) and clearing (KKI) do the segregation and reconciliation work. No cross-border side: this is a domestic retail market.

## Trust Breakdown

- FTX collapse, November 2022 (global): the incident that created the PoR norm worldwide — misappropriated customer assets at a custodial exchange.
- Indodax hot-wallet hack, 11 September 2024: roughly $22 million drained (CoinDesk, 2024); CEO stated losses around Rp 300 billion and guaranteed customer balances 100% (Detik, 2024). Attack attributed in analyses to Lazarus-style compromise of a signature machine (Investing.com/Blockchainmedia, 2024). Customer balances were made whole by the exchange.
- Zipmex regional withdrawal freeze, 2022, affected Indonesian users (magnitude for Indonesia unverified).
- Withdrawal-rumor episode, December 2025 – January 2026: social-media rumors of mass withdrawals from local exchanges, framed as fear of an FTX repeat (Liputan6, 2025; Kompas, 3 January 2026). OJK's answer was structural: segregation at licensed custodians under the POJK 23/2025 SRO scheme with routine reconciliation. Exchanges answered with voluntary PoR — Indodax reserves Rp 13.5 trillion, Tokocrypto user assets Rp 5.8 trillion (Suara/Kontan, January 2026). No exchange failed; no mandate followed.

Note what the documented failures are: hot-wallet compromise, offshore insolvency, and a rumor-driven confidence wobble — not forged reserve reports inside the licensed Indonesian structure. No Indonesian post-licensing case of misreported reserves was found in this search.

## Cost of the Problem

Market throughput: Rp 650.61 trillion transaction value in 2024, Rp 482.23 trillion in 2025 (OJK via Antara, 2026). Direct loss from the one major domestic incident: Rp 300 billion (Detik, 2024), absorbed by the exchange, not customers. The cost of absent *independent reserve attestation* specifically: no documented customer loss attributable to it in the licensed era — (unverified/none found). Addressable spend is therefore compliance-and-assurance budget across ~25 traders plus two custodians, not loss recovery.

## Existing Solutions (as of 2026-07)

- State structure: CFX + KKI clearing + Tennet/ICC custodians under POJK 27/2024 jo. POJK 23/2025 — segregation and reconciliation by licensed third parties.
- Voluntary PoR: Indodax and Tokocrypto self-publish wallet-level reserves via CoinMarketCap's free PoR facility.
- Global vendors: Chainlink Proof of Reserve feeds; Merkle-tree PoR tooling any exchange can self-host (Binance-pattern, post-2022); crypto-specialist CPA attestation firms internationally.
- Status check as of mid-2026: PoR remains explicitly non-mandatory ("PoR memang tidak wajib" — Suara, January 2026); at the CFX Crypto Conference (June 2026) OJK's stated posture was adaptive regulation and consumer protection, with no PoR mandate announced (Antara, June 2026). OJK's licensed-trader list stood at 26 in Coinvestasi's mid-2026 tally (counts shift as licenses issue).

## Why Insufficient & Who Rejects the Existing Anchor

The H1 question is who refuses to accept the existing anchor. Answer: no economically relevant party. Retail investors accept OJK licensing as the trust signal; banks and payment partners accept OJK; and the party whose integrity is genuinely in question — the exchange — is precisely the one the structure disintermediates by mandating placement with independent licensed custodians and clearing reconciliation. The residual gap (periodic reporting instead of continuous cryptographic proof) is a feature, not a company: OJK can compel it by circular (SEOJK) and exchanges already self-supply it for marketing. The January 2026 run-scare is the natural experiment: when trust actually wobbled, the market was calmed by the OJK segregation structure plus self-published PoR — the anchor held under stress, and no paying constituency demanded custodian-independent proof.

## Blockchain Test

Reserves are themselves on-chain assets, so tamper-evident proof is trivially available to the custodian and exchange without any third party — which is exactly why self-published PoR already exists. Custodian-independence adds value only if OJK and its licensed custodians are jointly distrusted; no paying constituency holds that position domestically.

## Kill Test Verdict

1. Problem survives without blockchain? YES — custody misappropriation predates crypto. PASS.
2. PostgreSQL under a single trusted operator? Effectively yes — KKI clearing plus licensed custodians under OJK are accepted by every party. FAIL.
3. Incumbent/state ships it in six months? YES — Indodax already ships PoR; OJK can mandate by SEOJK. FAIL.
4. Standalone company value? NO — ~27 addressable institutional buyers. FAIL.

Killed (as H1 predicts for anchored domestic markets).

## Scores

- Severity 6 — one documented Rp 300 billion hack (Detik, 2024) and regulatory exposure, but customers were made whole.
- Market 3 — ~25 PAKD + 2 custodians as buyers; well under $50M TAM.
- WTP 4 — transparency/marketing budget exists but the free CoinMarketCap route is the current standard.
- Chain 5 — multi-org, but an accepted trusted intermediary (OJK-licensed clearing/custody) occupies the slot.
- Urgency 5 — POJK 23/2025 tightening continues; no PoR mandate in force.
- Competition 3 — Chainlink PoR, self-serve Merkle tooling, free CMC publication.
- Moat 3 — attestation is a copyable feature.

Weighted: 0.20(6)+0.20(3)+0.15(4)+0.15(5)+0.10(5)+0.10(3)+0.10(3) = **4.3**

## What Would Kill This Idea

Already killed by the anchor: the OJK/CFX/KKI/custodian structure. Revival triggers (monitor): OJK issues a custodian-independent PoR mandate naming external attestors; a reserve-misreporting scandal *inside* the licensed structure; or Indonesian custodians seeking foreign institutional clients who refuse OJK-only assurance.

## Sources

- https://www.kemendag.go.id/index.php/berita/pojok-media/bappebti-kemendag-resmi-alihkan-tugas-pengaturan-dan-pengawasan-aset-kripto-serta-derivatif-keuangan-kepada-ojk-dan-bi
- https://ojk.go.id/id/regulasi/Pages/POJK-27-2024-AKD-AK.aspx
- https://ojk.go.id/id/berita-dan-kegiatan/siaran-pers/Pages/POJK-23-Tahun-2025-Perubahan-POJK-27-Tahun-2024-Penyelenggaraan-Perdagangan-Aset-Keuangan-Digital-Termasuk-Aset-Kripto.aspx
- https://www.coindesk.com/markets/2024/09/11/indonesian-crypto-exchange-indodax-hacked-for-22m-pauses-activity-before-bigger-hit
- https://finance.detik.com/fintech/d-7554640/bos-indodax-ungkap-fakta-di-balik-peretasan-kerugian-rp-300-m
- https://www.antaranews.com/berita/5341597/ojk-catat-transaksi-kripto-pada-2025-capai-rp48223-triliun
- https://investasi.kontan.co.id/news/urgensi-proof-of-reserve-dan-uu-p2sk-dalam-menguatkan-keamanan-dana-investor-kripto
- https://money.kompas.com/read/2026/01/06/182239026/cadangan-aset-indodax-rp-18-triliun-sinyal-pasar-kripto-menguat
- https://jakartaglobe.id/business/indonesias-financial-regulator-publishes-list-of-29-licensed-crypto-traders
- https://money.kompas.com/read/2026/01/03/113000426/isu-tarik-dana-kripto-menguat-ojk-tegaskan-skema-baru-lindungi-nasabah
- https://www.liputan6.com/crypto/read/6248641/ramai-isu-penarikan-dana-dari-exchange-kripto-lokal-kasus-ftx-jadi-perhatian
- https://www.suara.com/bisnis/2026/01/18/191122/alasan-proof-of-reserve-por-penting-dalam-bursa-kripto-ini-penjelasannya
- https://m.antaranews.com/amp/berita/5599385/ojk-dan-cfx-dorong-inovasi-regulasi-adaptif-industri-kripto-nasional
- https://coinvestasi.com/berita/daftar-exchange-kripto-berizin-ojk-di-indonesia
