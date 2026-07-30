# Digital Gold Custody — Backing Attestation (Axis 2A)

## Problem & Current Workflow

Indonesian retail savers buy fractional "digital gold" through apps (Pluang, Treasury, IndoGold, Lakuemas, Pegadaian's Tabungan Emas/Tring). The trust question: does physical gold actually back every gram sold? Since the Tamasia episode (2023), the regulated answer is a mandated custody chain. Under Bappebti's digital physical gold market rules (Perba 4/2019 lineage, most recently Perba 3/2025 on digital gold trading through the futures exchange; Bappebti, 2025), a licensed pedagang emas digital must first deposit physical gold 1:1 against the digital gold it sells into a separate, Bappebti-approved Pengelola Tempat Penyimpanan (depository); at most 20% may be held as cash equivalents placed with the clearing institution (Bappebti via Kontan, 2025). Approved clearing institutions are PT Kliring Berjangka Indonesia (KBI) and PT Indonesia Clearing House (ICH); approved depository operators are PT ICDX Logistik Berikat and PT Kinesis Monetary Indonesia (Kontan/Dupoin, 2025). The clearing house monitors that stored gold matches outstanding digital balances; Bappebti supervises. In parallel, a second regime emerged: OJK licensed bullion banks — PT Pegadaian (22 December 2024) and Bank Syariah Indonesia (12 February 2025) — supervised directly by OJK under the P2SK bullion framework (OJK via press coverage, 2025; Pegadaian, 2025). Oversight of digital gold thus splits: bullion banks under OJK, other platforms under Bappebti — digital gold stayed with Bappebti after the January 2025 P2SK handover because it is classified as physical commodity trading, not a digital financial asset. Bappebti's licensed pedagang emas digital number six: Treasury, Quantum Metal, Syariah Koin Indonesia, IndoGold, Lakuemas, Pluang Emas Sejahtera (Bappebti list, current 2026).

## Stakeholders & Who Pays

Retail savers bear the ultimate risk but cannot pay for attestation. Licensed pedagang emas digital (roughly five to seven firms) pay depository, clearing, and exchange fees — they are the only plausible buyers of an attestation product. Depositories and clearing houses do the physical verification work; Bappebti and OJK audit; disputes go to Bappebti/OJK and the courts. Antam supplies most physical bars. Domestic market only; no cross-border verifier.

## Trust Breakdown

- Tamasia, January 2023 (the Phase 1 anchor): Bappebti confirmed the digital gold app was operating without a license after users complained of being forced to sell their gold balances by 15 February 2023 at below-market prices (Kompas, 2023; Bisnis, 2023). The failure occurred *outside* the licensed custody chain — Tamasia never entered it. Loss magnitude: (unverified).
- Antam branded-gold case: prosecutions concluded in 2025 over 109 tonnes of gold improperly stamped with Antam's brand by insiders between 2010 and 2021 (Indonesian court proceedings, 2025; Phase 1 anchor). This is a provenance/branding failure at the state refiner, adjacent to but distinct from platform custody attestation.
- China digital-gold platform collapse, 2025–2026 (external): retail investors lost billions of yuan on unredeemable digital gold (Kumparan, 2026). Bappebti and ICDX responded by publicly invoking the 1:1 depository chain to distinguish the local market (ICDX press release, 2026). A fresh external scare, absorbed by the state anchor rather than creating demand for independent attestation.
- Within the licensed depository regime since 2023: no documented backing shortfall found in this search, repeated in July 2026 — (none found).

## Cost of the Problem

Digital physical gold transactions reached Rp 53.3 trillion (43.9 tonnes) in January–November 2024, up 556% from Rp 8.1 trillion in the same period of 2023 (Bappebti via Tempo, 2024). Growth continued: ICDX digital gold volume was 58.65 million grams in 2025, up 25.2% on 2024; January 2026 alone recorded 11.9 million grams, up 229% year-on-year (ICDX, 2026). The bullion-bank track scaled fast too — BSI reported 22.5 tonnes under management after one year (BSI, 2026). Documented consumer loss inside the licensed regime: none found. Tamasia-type losses are off-system (unlicensed operator) and must be stripped from addressable sizing per protocol. The addressable spend is attestation/audit budget across fewer than ten licensed platforms plus two bullion banks.

## Existing Solutions (as of 2026-07)

- State custody chain: 1:1 physical deposit at ICDX Logistik Berikat or Kinesis Monetary Indonesia, max 20% cash at KBI/ICH clearing, Bappebti supervision (Kontan, 2025).
- Kinesis Monetary Indonesia: a blockchain-based gold platform that is itself an approved depository operator — the "tokenized, auditable gold" slot already exists inside the regulated ecosystem.
- Bullion banks: Pegadaian and BSI under direct OJK prudential supervision, with Pegadaian's Tring app as a licensed retail channel (Pegadaian, 2025). The national program was launched by President Prabowo on 26 February 2025; OJK remains open to further bullion-bank applicants, and as of September 2025 no other institution had applied (Infobanknews, 2025).
- Globally: LBMA chain-of-custody standards; tokenized gold products (PAXG, XAUT) — not Indonesia-licensed retail channels.

## Why Insufficient & Who Rejects the Existing Anchor

Nobody economically relevant rejects the anchor. Retail savers trust the Bappebti/OJK license badge (the Tamasia lesson as reported domestically was "check the license," not "demand independent proof"). Platforms accept depository and clearing oversight as their cost of doing business. Banks lending against gold accept Pegadaian/OJK. The only failure modes documented occurred outside the system (Tamasia, unlicensed) or upstream at the state refiner (Antam branding). A custodian-independent attestation layer would need a buyer who distrusts Bappebti, OJK, KBI, ICH, and the depositories simultaneously; no such paying constituency exists domestically.

## Blockchain Test

Multi-org in form (platform, depository, clearing, regulator), but the state-supervised clearing house is an accepted neutral party performing exactly the reconciliation a chain would do. Kinesis already offers blockchain-native gold inside the licensed perimeter, and it has not become the trust standard — evidence that cryptographic verification is not the binding constraint; licensing is.

## Kill Test Verdict

1. Problem survives without blockchain? YES — unbacked gold claims predate crypto (Tamasia). PASS.
2. PostgreSQL under a single trusted operator? YES — the depository-plus-clearing ledger under Bappebti/OJK is accepted by all parties. FAIL.
3. State/incumbent ships it in six months? Already shipped — the 1:1 depository mandate is in force; OJK's bullion regime extends it. FAIL.
4. Standalone company value? NO — under ten licensed platform buyers plus two bullion banks. FAIL.

Killed, consistent with H1: an accepted state anchor occupies the slot.

## Scores

- Severity 5 — real consumer harm documented (Tamasia, 2023) but confined to the unlicensed fringe; licensed regime clean so far.
- Market 3 — attestation TAM spans <10 platforms and 2 bullion banks despite Rp 53.3T flows; well under $50M.
- WTP 4 — platforms already pay depository/clearing fees and treat them as sufficient; no budget for a second layer.
- Chain 4 — accepted trusted intermediaries (KBI/ICH + approved depositories) exist; multi-org but anchored.
- Urgency 4 — 556% growth and bullion-bank rollout raise scrutiny, but no deadline or fresh licensed-regime scandal.
- Competition 3 — Kinesis (blockchain gold, funded, inside the ecosystem) and state infrastructure occupy the space.
- Moat 3 — attestation over a state-run custody chain is a copyable feature.

Weighted: 0.20(5)+0.20(3)+0.15(4)+0.15(4)+0.10(4)+0.10(3)+0.10(3) = **3.8**

## What Would Kill This Idea

Already killed by the accepted anchor. Revival triggers: a documented backing shortfall at a *licensed* platform or depository; OJK forcing bullion banks to obtain external, custodian-independent attestations; or export/Islamic-finance counterparties refusing Bappebti-supervised attestation and demanding independent proof.

## Sources

- https://www.tempo.co/ekonomi/transaksi-emas-fisik-secara-digital-capai-43-9-ton-di-2024-senilai-rp53-3-triliun--1188743
- https://money.kompas.com/read/2023/01/19/144620926/warganet-keluhkan-aplikasi-tamasia-bappebti-perusahaan-itu-tidak-berizin
- https://market.bisnis.com/read/20230118/94/1619592/bappebti-pastikan-tamasia-yang-paksa-pengguna-jual-emas-harga-murah-belum-berizin
- https://finansial.kontan.co.id/news/dana-emas-digital-di-indonesia-aman-bappebti-ungkap-mekanisme-penjaminannya
- https://www.antaranews.com/berita/5412354/bappebti-icdx-pastikan-perdagangan-pasar-fisik-emas-digital-di-ri-aman
- https://bappebti.go.id/resources/docs/peraturan/sk_kep_kepala_bappebti/sk_kep_kepala_bappebti_2025_06_25_uvhclkjl_id.pdf
- https://pegadaian.co.id/artikel/berita/bank-emas-pegadaian
- https://www.icdx.co.id/news-detail/press-release/ditengah-issue-negatif-investasi-emas-digital-di-china-bappebti-dan-icdx-sebut-perdagangan-pasar-fisik-emas-secara-digital-di-indonesia-aman
- https://kumparan.com/kumparanbisnis/fomo-emas-digital-investor-china-rugi-miliaran-yuan-usai-tak-bisa-dicairkan-26khYVSkpJB
- https://www.bankbsi.co.id/news-update/berita/setahun-bullion-bank-bsi-perkuat-ekosistem-emas-nasional-dengan-kelolaan-capai-225-ton
- https://infobanknews.com/susul-bsi-dan-pegadaian-ojk-buka-peluang-ljk-ajukan-izin-usaha-bullion-bank/
- https://www.kalderanews.com/2024/10/13/inilah-6-pedagang-emas-digital-yang-sudah-kantongi-izin-resmi-bappebti/
- https://bappebti.go.id/pedagang_emas
