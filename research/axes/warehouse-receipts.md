# Warehouse Receipts (Sistem Resi Gudang) — Receipt Integrity (Axis 2A)

## Problem & Current Workflow

Sistem Resi Gudang (SRG) lets farmers and traders deposit commodities (paddy, rice, corn, coffee, pepper, seaweed, salt, tin, others) in an approved warehouse and receive a resi gudang — a document of title that can be sold or pledged to a bank for credit. The integrity question: can receipts be forged, issued against empty warehouses, or double-pledged? The legal basis is UU 9/2006 as amended by UU 9/2011. Workflow today: a Bappebti-approved pengelola gudang (warehouse operator) receives goods; an independent conformity-assessment body (LPK) tests quality; the operator issues the receipt, which must be registered at the Pusat Registrasi — a role held by state-owned PT Kliring Berjangka Indonesia (KBI). Registration, transfers, and security interests (hak jaminan) are all recorded centrally by KBI; banks verify a receipt and register their lien through the same registry before disbursing, commonly with the state-subsidized S-SRG interest scheme. Insurance on stored goods is mandatory. Crucially, KBI replaced its 2010-era registry with IS-Ware NextGen, launched 27 November 2020 together with Kemendag and Bappebti — an application explicitly built on blockchain and smart contracts, with a stated roadmap toward scriptless (paperless) receipts to prevent counterfeiting (Bisnis.com, 2020; The Iconomics, 2020; Kontan, 2020). Post-P2SK, crypto left Bappebti in January 2025 but SRG remained under Bappebti/Kemendag supervision (Kemendag, 2025).

## Stakeholders & Who Pays

Farmers, cooperatives, and traders deposit goods and pay storage plus registration fees; they are the intended beneficiaries but have minimal ability to pay. Warehouse operators do issuance; LPK does quality attestation; KBI operates the registry and collects registration fees; banks (BRI, BJB, regional banks) lend against receipts and pay verification effort; Bappebti audits operators and warehouses; the state subsidizes interest. Disputes go to Bappebti and the courts (Mahkamah Agung's directory lists SRG-related civil disputes). Domestic system; no foreign verifier is party to any receipt.

## Trust Breakdown

- Warehouse operator failure: the documented legal failure mode is operator default/bankruptcy leaving receipt holders and lien holders exposed — analyzed in Indonesian legal literature on receipt-holder protection when the pengelola gudang goes bankrupt (ResearchGate/UNES law journal, 2022). Specific loss figures: (unverified).
- Receipt forgery/double-pledge: a hard search (Indonesian-language, including the Supreme Court decision directory), repeated in July 2026, surfaced SRG-related civil disputes but no large documented case of forged or double-pledged receipts *inside* the KBI registry since IS-Ware; the registry's single-point registration is the designed control. (None found — this absence is itself evidence against the candidate.)
- Bank hesitancy: legal studies document that banks remain reluctant SRG lenders due to commodity price risk, execution difficulty on collateral, and operator quality — not due to inability to verify receipts (Jurnal Hukum Samudra Keadilan, 2023).
- Large Indonesian commodity-collateral frauds (empty-warehouse credit cases) have occurred in bilateral bank collateral-management arrangements outside SRG; per protocol these off-system collusion losses are stripped from sizing. Specifics: (unverified).

## Cost of the Problem

The system is small. SRG transaction value 2024: Rp 2.87 trillion, up 202.64% from Rp 946 billion in 2023; SRG-backed financing 2024: Rp 1.89 trillion, up 199.36% from Rp 631 billion in 2023; 280 SRG warehouses across 29 provinces (Bappebti via Liputan6, 2025; Kemendag, 2025). The 2025 trajectory flattened rather than compounding: reported receipt issuance for 2025 exceeded Rp 1.9 trillion across 531 receipts (92.68 thousand tonnes), with SRG value of Rp 1.89 trillion and financing of Rp 928.6 billion as of November 2025, and 176 active SRG warehouses across 29 provinces as of September 2025 (Bappebti via press/InfoPublik, 2025–2026; figure bases differ between "transaction value" and "issuance value", so year-on-year comparability is unverified). Even if an integrity layer captured 50 basis points of all SRG financing, that is under Rp 10 billion (~$600k) a year. Fraud-loss cost inside the registry: none documented (see above).

## Existing Solutions (as of 2026-07)

- PT KBI Pusat Registrasi running IS-Ware NextGen — blockchain and smart-contract based, state-owned, fee-funded, integrated with Bappebti supervision (Bisnis.com, 2020; Kontan, 2020). KBI and Bappebti continued extending the system through 2025, including rail-linked warehouse logistics pilots (Liputan6, 2025) — the state operator is expanding, not retreating.
- Bappebti approval/audit regime for warehouse operators plus mandatory LPK quality testing and insurance.
- Global comparators: national warehouse receipt registries (e.g., electronic registries in India's WDRA regime) are likewise state-anchored single operators.

## Why Insufficient & Who Rejects the Existing Anchor

No one rejects the anchor. Banks demonstrably accept KBI registration — SRG financing tripled in 2024 on the strength of it. Bappebti, Kemendag, and the state subsidy scheme all route through the same registry. The binding constraints on SRG growth are commodity price risk, warehouse economics, and farmer awareness — commercial problems a verification startup does not solve. The slot a blockchain venture would claim (neutral tamper-evident registry) is occupied by a state-owned operator that already markets its system as blockchain-based.

## Blockchain Test

This is the cleanest Phase 1-pattern kill in the cohort: a single accepted trusted operator (KBI) exists, every economically relevant party accepts it, and the operator has itself already deployed blockchain — demonstrating the technology adds no independent trust premium here. Tamper-evidence does not change any party's behavior because no party doubts the registry.

## Kill Test Verdict

1. Problem survives without blockchain? YES — receipt fraud is a paper-era problem. PASS.
2. PostgreSQL under a single trusted operator? YES — KBI's registry (whatever its backend) is exactly that, and it is accepted by banks, Bappebti, and depositors. FAIL.
3. State/incumbent ships it in six months? Already shipped — IS-Ware NextGen, 2020. FAIL.
4. Standalone company value? NO — Rp 1.89 trillion total financing base cannot support a venture-scale fee layer. FAIL.

Killed. H1 holds: accepted state anchor, candidate dies.

## Scores

- Severity 4 — operator-default risk is real but undocumented at scale; no registry fraud found; system too small for large losses.
- Market 2 — integrity-layer TAM on Rp 1.89T financing is far below $50M.
- WTP 3 — farmers cannot pay; banks already pay KBI fees and accept them.
- Chain 3 — single accepted registry operator; blockchain already present without changing behavior.
- Urgency 3 — growth is policy-driven; no scandal, no deadline.
- Competition 3 — a state-owned incumbent with a blockchain product occupies the exact slot.
- Moat 3 — nothing defensible against the statutory registry.

Weighted: 0.20(4)+0.20(2)+0.15(3)+0.15(3)+0.10(3)+0.10(3)+0.10(3) = **3.0**

## What Would Kill This Idea

Already killed three ways: statutory monopoly registry, microscopic market, no documented registry fraud. Revival triggers: a multi-bank double-pledge scandal that KBI's registry failed to catch; SRG receipts becoming export-finance collateral where foreign lenders refuse KBI attestation; or privatization/fragmentation of the Pusat Registrasi role.

## Sources

- https://www.liputan6.com/bisnis/read/5895607/naik-200-transaksi-sistem-resi-gudang-bappebti-pada-2024-capai-rp-287-triliun
- https://www.kemendag.go.id/berita/pojok-media/capaian-bappebti-2024-jadi-pijakan-tingkatkan-peran-pbk
- https://market.bisnis.com/read/20201202/94/1325316/permudah-registrasi-kliring-berjangka-indonesia-luncurkan-aplikasi-sistem-resi-gudang
- https://www.theiconomics.com/innovation/kliring-berjangka-indonesia-luncurkan-aplikasi-resi-gudang-berbasis-teknologi-blockchain/
- https://investasi.kontan.co.id/news/kbi-terus-tingkatkan-kemudahan-srg-termasuk-dengan-blokchain
- https://www.researchgate.net/publication/365778760_Perlindungan_Hukum_Bagi_Pemegang_Resi_Gudang_Dan_Penerima_Hak_Jaminan_Resi_Gudang_Terhadap_Pengelola_Gudang_Yang_Pailit
- https://ejurnalunsam.id/index.php/jhsk/article/view/11223
- https://putusan3.mahkamahagung.go.id/search.html/?q=%22Sistem+resi+gudang%22
- https://infopublik.id/kategori/nasional-ekonomi-bisnis/882767/bappebti-optimalkan-sistem-resi-gudang-untuk-dukung-swasembada-pangan-dan-ekspor
- https://www.liputan6.com/bisnis/read/7893096/kliring-berjangka-indonesia-dan-bappebti-kembangkan-resi-gudang-berbasis-rel
