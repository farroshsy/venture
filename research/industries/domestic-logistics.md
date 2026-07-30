# Domestic Freight & Trucking (domestic-logistics)

## Problem & Current Workflow
A typical inter-city FTL shipment: shipper issues a delivery order (DO) to a 3PL or forwarder; the job is frequently re-brokered one or two layers down to a vendor fleet or individual truck owner. The driver carries a paper surat jalan (delivery note) listing cargo, route and consignee; at destination the consignee signs it, and the signed copy becomes the proof of delivery (POD). The physical POD must travel back to the carrier, because most shippers only release payment against the returned, signed POD — the surat jalan doubles as the billing basis for trucking services (Muat.com; Kargo Tech documentation, undated). Payment terms after POD return are commonly 30–90 days (unverified — industry practice, no named survey found). Damage/shortage claims are argued off the same paper trail.

## Stakeholders & Who Pays
Work: drivers, truck-owner SMEs (often 1–10 units), vendor fleets, brokers/forwarders, 3PLs. Pays: cargo owners (FMCG, manufacturing, commodities) pay freight; carriers absorb fraud, theft and claim deductions; financiers (invoice financing) absorb document risk. Audits: shippers' logistics and AP departments, insurers' surveyors. Disputes: carrier vs shipper over POD-based deductions; broker vs vendor over diverted or short cargo; carrier vs driver over fuel and cargo losses.

## Trust Breakdown (documented incidents, cited)
- Driver cargo embezzlement (penggelapan muatan) is routine and criminal-court documented: three expedition drivers in Surabaya diverted portions of loads en route, company loss Rp108 million (Kompas, May 2026); a driver contracted to PT Global Link Logistic charged with embezzling cargo worth nearly Rp200 million (Berita Keadilan, 2026); a trusted driver absconded with a dump truck, loss Rp225 million (Nusabali, April 2026); 17 tonnes of paddy diverted to a mill in Lampung via a "triangle" scam (Lensanaga, March 2026).
- Fictitious-load scams: drivers lured with fake cargo orders (RRI, 2025-26).
- Fuel fraud: "kencing solar" — tank-truck drivers siphoning hundreds of litres per trip — described in a DPR/parliamentary discussion (Wartajatim, November 2025). At national scale, the 2025 Pertamina case alleged adulteration of subsidised fuel with prosecutors' loss estimate of Rp968.5 trillion (Wikipedia summary of AGO figure, 2025 — estimate contested, treat as allegation).
- Truck hijacking/begal on expedition routes, packages worth hundreds of millions of rupiah taken (Berita Cianjur, 2025-26).

## Cost of the Problem
- Logistics cost to GDP: Bappenas puts it at 14.29% (2023, new methodology), down from 23.8% (2018, old methodology) — the two are not comparable; one DPR brief still cites ~23.27% for 2023 under the broader definition (DPR Info Singkat, October 2025). Any pitch using "24% of GDP" is stale.
- World Bank LPI 2023: Indonesia ranked 61 of 139, down from 46 (2018).
- Cargo crime: only case-level figures exist (Rp108M–Rp360M per incident, 2026 court/police reports); no national aggregate found (unverified).
- POD-driven working-capital drag: no named study found (unverified).

## Existing Solutions (as of 2026-07, named)
- McEasy (Surabaya): telematics + TMS SaaS, ~$19M raised, Series A+ led by Granite Asia closed December 2024 (Tracxn/SaaS News) — alive and funded.
- Kargo Technologies: marketplace, Series B July 2024, pivoting into EV fleet (500 e-trucks planned 2025; DealStreetAsia) — alive.
- Deliveree: ~$110M raised, GTV >$100M claimed 2024 (Techloy/Tracxn) — alive, regional.
- Waresix: $179M raised, still listed operating (Tracxn, May 2026). Logisly: operating, profitability-focused (LinkedIn/company posts, 2024). Andalin: operating, ~69 employees (PitchBook, 2026).
- All major platforms already ship e-POD (photo + geotag + digital signature) inside their apps. Global visibility vendors (project44, FourKites) have thin Indonesian presence (unverified).

## Why Insufficient
e-POD exists only inside each platform's silo. The multi-broker chain means a load crosses two or three firms with incompatible systems, so the paper surat jalan remains the lowest common denominator, and payment still waits on it. Driver-level fraud is a physical-custody problem (diverting goods, siphoning fuel) that no document layer prevents — telematics + seals attack it better than records do.

## Blockchain Test
The disputes are bilateral (shipper vs carrier, carrier vs driver) and resolved through payment leverage and courts. A shared registry operated by the shipper's TMS vendor — or any single platform — is acceptable to all parties today; nobody demands proof independent of a custodian. Chain necessity is low.

## Kill Test Verdict — KILLED
1. Problem survives without blockchain? YES (fraud and POD friction are real). 2. PostgreSQL under one trusted operator? YES, it suffices — platforms already are that operator. FAIL. 3. Six-month incumbent feature? YES — e-POD is already shipped by McEasy, Kargo, Deliveree. FAIL. 4. Standalone value? Only as a full logistics platform, a crowded funded field.

## Scores
- Severity 6 — recurring criminal losses and payment friction, but each incident is bounded and managed by ops staff.
- Market 7 — freight-tech spend plausibly $250M–1B on top of a multi-tens-of-billions freight market (basis: funded competitor set, not a named TAM study).
- WTP 6 — shippers/carriers already pay for telematics and TMS; trust layer alone has no separate budget line.
- Chain 3 — bilateral disputes, accepted intermediaries (platforms) exist.
- Urgency 4 — chronic problem, no deadline or fresh forcing scandal at the shipper level.
- Competition 3 — five funded, living incumbents (McEasy, Deliveree, Kargo, Waresix, Logisly).
- Moat 4 — integration lock-in at best; e-POD is copyable.
- Weighted: 5.1

## What Would Kill This Idea
Already killed: incumbents ship the feature; the neutral-party gap does not exist because payment leverage substitutes for it. A cross-platform POD-interchange standard would be the only wedge, and that is a consortium play with no early revenue — TradeLens economics at truck scale.

## Sources
- https://surabaya.kompas.com/read/2026/05/18/124539478/aksi-3-sopir-ekspedisi-gelapkan-barang-perusahaan-kerugian-rp-108-juta
- https://beritakeadilan.com/gelapkan-muatan-sopir-truk-mitra-pt-global-link-logistic-didakwa-gelapkan-barang-senilai-hampir-rp200-juta/
- https://www.nusabali.com/berita/217167/sopir-gelapkan-truk-ditangkap-di-lumajang
- https://lensanaga.id/modus-segitiga-tipu-juragan-gabah-17-ton-beras-diduga-nyasar-ke-pabrik-di-lampung-tengah/
- https://www.wartajatim.co.id/nasional/1931950859/terungkap-kecurangan-bbm-subsidi-kian-brutal-kencing-solar-hingga-mobil-mewah-beli-solar-subsidi
- https://en.wikipedia.org/wiki/2025_Pertamina_corruption_case
- https://berkas.dpr.go.id/pusaka/files/info_singkat/Info%20Singkat-XVII-19-I-P3DI-Oktober-2025-230-EN.pdf
- https://www.pwc.com/id/en/media-centre/infrastructure-news/november-2024/boosting-logistics-performance.html
- https://tracxn.com/d/companies/mceasy/
- https://www.dealstreetasia.com/stories/kargo-enters-ev-market-465184
- https://www.techloy.com/indonesian-logistics-startup-deliveree-raises-70-million-in-series-c-funding/
- https://tracxn.com/d/explore/logistics-saas-startups-in-indonesia/
- https://muat.com/delivery-order/
- https://www.kargo.tech/post/apa-itu-surat-jalan-pod-pengertian-fungsi-dan-contoh-format-1
