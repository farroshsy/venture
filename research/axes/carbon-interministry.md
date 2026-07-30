# Inter-Ministry Carbon Accounting Fragmentation (Axis 5 — CONTROL)

H1 status: this candidate was pre-registered as a control. H1 predicts failure because all the ledgers sit under one sovereign, who can decree a canonical owner. The prediction is tested below against mid-2026 evidence.

## Problem & Current Workflow

Indonesia's carbon economic value (NEK) regime under Perpres 98/2021 splits carbon accounting across at least four government ledgers. (1) SRN PPI — Sistem Registri Nasional Pengendalian Perubahan Iklim, operated by the environment ministry (KLHK until the October 2024 split; now KLH/BPLH) — is the designated national registry: mitigation actions are registered, validated and verified through accredited validators/verifiers, and SPE-GRK carbon credits are issued there. (2) APPLE-Gatrik, run by Ditjen Gatrik at ESDM, is the reporting-and-allowance system for the power-sector cap-and-trade (PTBAE-PU) covering coal plants. (3) IDXCarbon, the OJK-regulated carbon exchange launched 26 September 2023, keeps its own account structure for listed units. (4) Kemenkeu's carbon tax under UU HPP (2021) would require its own liability ledger — but the tax, originally due 1 April 2022, has been postponed repeatedly and was still not in force as of early 2026 (DDTC News; Kemenkeu opini, 2025-2026). A project developer selling internationally additionally needs ministerial authorization and a corresponding-adjustment undertaking, live since the international trading window opened on IDXCarbon on 20 January 2025 (KLH). In the fragmented workflow, a power plant reports to APPLE-Gatrik, mirrors into SRN PPI, trades on IDXCarbon, and would eventually reconcile a tax position with Kemenkeu — four records of one ton.

## Stakeholders & Who Pays

The workers and payers are almost entirely state or state-adjacent: KLH/BPLH (registry owner), ESDM (sectoral MRV), OJK and IDX (exchange), Kemenkeu/BKF (tax design), plus project developers (Pertamina NRE, PLN, forestry concession holders) who bear registration and verification fees, and accredited validation/verification bodies who do the MRV work. Buyers on IDXCarbon (banks, corporates) pay exchange fees. Foreign stakeholders enter only through Article 6 authorization and the mutual-recognition track with Verra and Gold Standard that KLH announced it is preparing (KLH, 2025-2026). Disputes are inter-ministerial — recorded in harmonization meetings, e.g., the 2026 forestry-ministry regulation harmonization minutes discussing overlapping carbon authority and PNBP calculation for forestry carbon (JDIH Kemenhut, 2026) — not adversarial private litigation.

## Trust Breakdown (cited incidents)

There is no documented forgery or double-sale scandal inside the state ledgers. The documented failure mode is coordination friction: legal scholarship and official material flag overlapping authority between ministries and the need for an integrated recording system so traded units are not double-counted (Universitas Mataram private-law journal; DJKN/KPKNL Lampung article on the carbon exchange and its challenges, 2023-2024). The state's own safeguard design — every unit must be registered in SRN PPI before trading, and every international transfer needs a ministerial authorization letter as protection against double counting, double payment, and double claims (KLH; SIP Law Firm) — is an explicit acknowledgment that fragmentation could produce double counting, and simultaneously the state's remedy for it.

## Cost of the Problem

The economic base is small. IDXCarbon recorded 908,000 tCO2e traded worth Rp50.64 billion (~US$3.2M) from launch in September 2023 through December 2024 (Kemenkeu opini article, citing IDX data). Carbon-tax revenue to date: zero, because the tax is not in force (DDTC News). The measurable cost of fragmentation is civil-servant reconciliation time and developer compliance delay — SPE-GRK issuance bottlenecks are widely blamed for thin exchange supply (DJKN article, 2024) — but no rupiah figure exists (unverified). There is no significant private loss pool.

## Existing Solutions (as of 2026-07, named)

The sovereign is solving it, on schedule and by decree:

- 22 January 2024: KLHK and ESDM signed a web-based interconnection agreement between SRN PPI and APPLE-Gatrik (Ditjen Gatrik ESDM, 2024).
- IDXCarbon is automatically connected to SRN PPI and APPLE-Gatrik for registration and retirement flows (KLH/IDX materials).
- June 2026: KLH announced SRN PPI Terintegrasi, a rebuilt "platform satu data iklim nasional" (single national climate-data platform) consolidating mitigation actions, GHG inventories, and emission-reduction achievements across 38 provinces, effective July 2026 (KLH, June 2026).
- Internationally, KLH is preparing mutual recognition arrangements with Verra and Gold Standard, anchoring foreign acceptance to the state registry rather than around it (KLH, 2025-2026).

No Indonesian or regional startup was found operating an inter-ministry reconciliation layer; the role does not exist to be sold.

## Why Insufficient & Who Rejects the Existing Anchor

Nobody economically relevant rejects SRN PPI. ESDM signed an interconnection agreement with it; OJK's exchange requires registration in it; Kemenkeu's own published material treats SRN recording as the precondition for the tax base; foreign standards bodies are negotiating recognition of it; and Article 6 counterparties transact through its authorization letters. Every party that could have demanded custodian-independent proof instead accepted the custodian — because the custodian is the sovereign whose NDC accounting is the entire point. The only genuine external-verifier pressure (UNFCCC Article 6 reporting, CORSIA eligibility) is handled state-to-state through corresponding adjustments, not through any private tamper-evident layer.

## Blockchain Test

Fails cleanly. All four ledgers answer to one government; Perpres 98/2021 already names the canonical registry; the July 2026 integrated SRN PPI is a single-operator database being built by the operator itself. Tamper-evidence changes no behavior: the parties who would need to distrust each other are ministries of the same state, and their disputes are resolved in harmonization meetings, not by cryptographic proof. Chain necessity ~2.

## Kill Test Verdict

1. Problem exists without blockchain — YES, as bureaucratic friction (pass). 2. PostgreSQL under a single trusted operator — YES, and it is literally being shipped as SRN PPI Terintegrasi, July 2026 (FAIL). 3. State ships by decree within 6 months — it already has: interconnection MoU (Jan 2024), integrated platform (Jul 2026) (FAIL). 4. Standalone company value — a ~US$3M/15-month exchange turnover and a zero-revenue tax cannot fund a vendor (FAIL). Verdict: KILLED on tests 2, 3 and 4. H1 CONTROL PREDICTION CONFIRMED: a single sovereign decreed the canonical owner and the fragmentation is dissolving without any custodian-independent verification.

## Scores

- Severity 4 — real coordination overhead and issuance delays, but no large documented loss and no existential private risk.
- Market 2 — IDXCarbon turnover ~US$3.2M over 15 months; TAM far below US$50M.
- WTP 2 — the beneficiary is the state; no private budget owner would pay for an unofficial reconciliation layer.
- Chain 2 — single sovereign; decree plus one database resolves it, demonstrated in practice.
- Urgency 3 — the state's July 2026 deadline is urgency for the state's own build, closing rather than opening a vendor window.
- Competition 2 — the sovereign occupies the slot with a funded, mandated system.
- Moat 2 — nothing defensible remains beside a state monopoly registry.

Weighted: 0.20(4)+0.20(2)+0.15(2)+0.15(2)+0.10(3)+0.10(2)+0.10(2) = **2.5**

## What Would Kill This Idea

Already dead as predicted. The only revival scenario is external: a foreign buyer bloc or UNFCCC review formally distrusting SRN PPI data quality after a double-counting incident crossing borders — which would migrate the problem to axis 1 (foreign-verifier axis), where the Article 6 candidate already sits.

## Sources

- https://kemenlh.go.id/news/detail/indonesia-masuki-era-baru-data-iklim-nasional-srn-ppi-terintegrasi-berlaku-mulai-juli-2026
- https://kemenlh.go.id/news/detail/klh-luncurkan-srn-ppi-terbaru-perkuat-transparansi-iklim-dan-implementasi-nilai-ekonomi-karbon-di-indonesia
- https://gatrik.esdm.go.id/berita/?slug=perkuat-perdagangan-karbon-ditjen-gatrik-tandatangani-kerja-sama-berbasis-web-dengan-klhk
- https://kemenlh.go.id/news/detail/peresmian-perdagangan-karbon-luar-negeri
- https://kemenlh.go.id/news/detail/wamen-diaz-klhbplh-dorong-kerja-sama-internasional-siapkan-mra-dengan-verra-dan-gold-standard
- https://apple-gatrik.esdm.go.id/
- https://www.djkn.kemenkeu.go.id/kpknl-lampung/baca-artikel/17264/Mengenal-Bursa-Karbon-Indonesia-Indonesia-Carbon-Exchange-dan-Tantangannya-di-Masa-Depan.html
- https://opini.kemenkeu.go.id/pages/read/pajak-karbon-ujian-konsistensi-fiskal-hijau-indonesia
- https://news.ddtc.co.id/implementasi-pajak-karbon-ditunda-lagi-begini-penjelasan-kepala-bkf-40062
- https://jdih.kehutanan.go.id/new2/uploads/files/2026notulensi06.pdf_2026_O86Gv93HKfw70lekv4RnQkfAt3dH8Ur3xVhRa5LE.pdf.pdf
- https://siplawfirm.id/hukum-perdagangan-karbon-di-indonesia
