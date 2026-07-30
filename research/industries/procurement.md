# Public Procurement Integrity (procurement)

## Problem & Current Workflow
Indonesian government procurement runs through a mature, mandatory digital stack operated by LKPP. Each agency publishes its annual procurement plan in SiRUP; routine purchases go through e-Katalog (e-purchasing), and works or complex services go through competitive tender on SPSE via ~600 local LPSE nodes. Since 1 January 2025, e-Katalog V6 is mandatory and V5 retired (LKPP Surat Edaran, 2024). The V6 flow: budget holder (PPK) defines need and HPS (owner estimate), selects product/vendor in catalog, approval workflow executes, delivery and payment are tracked in one dashboard (LKPP, 2024). Tender flow: announcement on SPSE, vendor registration via SIKAP, bid submission, evaluation by a Pokja Pemilihan, award, contract signed by PPK, then BPK/APIP audit after the fact. Perpres 46/2025 is the current legal umbrella; ICW assessed it as containing no meaningful anti-corruption improvement (ICW, 2025).

The integrity problem is not data availability. LKPP publishes datasets (data.lkpp.go.id), the ISB API exposes tender data, and the open-source pyproc project (wakataw/pyproc, GitHub) already turns SPSE/Inaproc data into MCP tools for LLM agents. The gap is methodology and consequence: turning public records into fraud findings that someone acts on.

## Stakeholders & Who Pays
Work is done by PPK, Pokja, and procurement units (UKPBJ) in ~86,000 spending units; vendors bid; LKPP operates the platforms. Auditors: APIP/inspektorat (internal), BPKP, BPK (external), KPK and police (criminal). Disputes: losing bidders via sanggah, KPPU for bid-rigging cartels. The payer for any integrity tooling is government itself (LKPP, inspektorats) or donors funding civil society (Hivos/OCP funded Opentender.net). The injured party — the public — pays nothing.

## Trust Breakdown (documented incidents, cited)
- ICW recorded 1,189 procurement corruption cases with 2,898 suspects in 2019–2023, dominant modes: fictitious projects, mark-up, fictitious reports, bribery (ICW via Kompas, June 2025).
- KPK: 446 of 1,782 cases handled since 2004 through Dec 2025 — 25% — are procurement-related (KPK spokesperson, April 2026).
- Tulungagung OTT, April 2026: KPK arrested 18 people including the bupati; collusion to steer e-Katalog awards was arranged through "communication outside the system"; KPK publicly demanded total evaluation of e-Katalog (Antara, May 2026).
- ICW/OCP: 1,586 procurement corruption cases 2016–2022, ~US$2.7B state losses (Open Contracting Partnership, 2024).

The signature failure mode: the platform record is clean while the deal is dirty. Steering, HPS inflation, and bid rigging are agreed offline; the system faithfully records the staged outcome.

## Cost of the Problem
- Potential state losses from procurement corruption 2019–2023: Rp47.18 trillion (ICW, reported June 2025).
- Procurement spend at risk: RUP 2024 totaled Rp1,259.2 trillion (LKPP via DPR/emedia, 2025); e-Katalog transactions reached Rp123.3 trillion (LKPP via Tempo, 2025) and Rp56.03 trillion with 18.9 million listed products as of October 2025 (DPR emedia, Oct 2025).
- Efficiency loss share of contract value: (unverified).

## Existing Solutions (as of 2026-07, named)
- LKPP itself: SPSE, SiRUP, SIKAP vendor profiles, e-Katalog V6 with tracked approvals; actively iterating with KPK on V6 anti-corruption design (Antara, 2025).
- Opentender.net (ICW + LKPP): public red-flag analytics using ICW's Potential Fraud Analysis across national and local tenders (OCP/ICW, 2021–2025).
- BPKP/APIP probity audit framework (Perka BPKP 3/2019) — real-time procurement audits.
- pyproc (open source, 2025): SPSE data as MCP tools; confirms data access is commoditized.
- BPK e-audit and KPK's MCP/Stranas PK dashboards (partial, government-internal).
- No funded Indonesian startup selling procurement-integrity analytics was found; the space is occupied by state bodies and civil society, not companies.

## Why Insufficient
Red-flag analytics exist but produce leads, not consequences; follow-through depends on APIP capacity and political will. V6 closes workflow gaps yet the Tulungagung case shows collusion simply moved off-platform. The binding constraints are enforcement incentives and auditor capacity — neither is a software gap a private vendor can close, and the natural buyer (an agency) is often the party a tool would expose.

## Blockchain Test
Records in SPSE are not being tampered with after the fact; they are truthful records of corrupted decisions. Tamper-evidence therefore changes nothing. LKPP is a functioning, accepted single operator; a PostgreSQL-backed audit trail under LKPP (which already exists) captures everything a chain would. Chain necessity: low.

## Kill Test Verdict
1. Problem survives without blockchain: YES (it is a collusion problem). 2. PostgreSQL under a trusted operator just as good: YES — fails. LKPP is that operator today. 3. Incumbent ships it in 6 months: YES — fails. LKPP iterates V6 continuously and owns the mandate. 4. Standalone company value: NO — buyers are the audited, or donor-funded NGOs. KILLED. Added factor per prior context: publicly attributing fraud findings to named officials carries real personal risk (criminalization/SLAPP exposure of anti-corruption researchers in Indonesia is documented practice).

## Scores
- Severity 9 — Rp47.18T documented losses, 25% of all KPK cases (ICW 2025; KPK 2026).
- Market 3 — TAM for integrity tooling (agency audit budgets + donors) plausibly under $50M; procurement spend itself is not addressable revenue.
- WTP 3 — beneficiary is the public; agency buyers have weak incentive to purchase self-exposure.
- Chain 3 — single accepted operator (LKPP) exists; falsification happens off-system.
- Urgency 7 — fresh scandal (Tulungagung, April 2026) and KPK pressure, but pressure lands on LKPP, not on a startup's buyer.
- Competition 5 — Opentender.net, BPKP probity audit, pyproc: several attempts, none commercial, none dominant.
- Moat 3 — public data, publishable methodology; copyable.

Weighted: 4.8

## What Would Kill This Idea
Already killed: no paying customer with aligned incentives, LKPP as accepted operator, fraud executed off-ledger, and personal legal risk to the operator of an accusatory analytics product.

## Sources
- https://nasional.kompas.com/read/2025/06/11/16270211/icw-catat-ada-1189-kasus-korupsi-pengadaan-barang-dan-jasa-dalam-4-tahun
- https://antikorupsi.org/sites/default/files/dokumen/Laporan%20Hasil%20Pemantauan%20Tren%20Korupsi%20Tahun%202024.pdf
- https://nasional.kompas.com/read/2026/04/21/08243251/kpk-25-persen-kasus-korupsi-berkaitan-dengan-pengadaan-barang-dan-jasa
- https://www.antaranews.com/berita/5578916/kpk-nilai-pengadaan-barang-dan-jasa-lewat-e-katalog-perlu-dievaluasi
- https://www.antaranews.com/berita/4596510/kepala-lkpp-sambangi-kpk-bahas-pencegahan-korupsi-e-katalog-v6
- https://www.lkpp.go.id/read/s/siaran-pers-sistem-e-katalog-versi-6-0-lkpp-resmi-meluncur-lebih-responsif-bisa-lacak-pengiriman-dan-pembayaran
- https://www.tempo.co/ekonomi/lkpp-sebut-nilai-transaksi-pengadaan-barang-dan-jasa-lewat-e-katalog-naik-jadi-rp-123-3-triliun-152135
- https://emedia.dpr.go.id/news/2025/10/17/apresiasi-penerapan-katalog-elektronik-puteri-komarudin-ajak-umkm-ikut-manfaatkan
- https://www.open-contracting.org/2024/08/28/empowering-auditors-indonesia-uses-data-driven-oversight-to-clean-up-its-corruption-prone-procurement-sector/
- https://antikorupsi.org/en/article/opentendernet-site-helping-indonesians-spot-shady-government-spending
- https://antikorupsi.org/id/perpres-pbj-2025-formalitas-pemberantasan-korupsi-pengadaan
- https://github.com/wakataw/pyproc
- https://finance.detik.com/berita-ekonomi-bisnis/d-7716191/3-5-juta-transaksi-pengadaan-barang-jasa-pemerintah-lewat-e-katalog-v6
