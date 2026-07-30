# Permit-Overlap Diligence — Land/Forestry/Mining Permit-Overlap Risk Analytics

## Problem & How Truth Is Established Today

Indonesia runs at least three parallel, non-reconciled geospatial record systems that each claim authority over the same land: ATR/BPN's cadastral parcels (certificates, HGU/HGB concessions, now migrating to Sertifikat-el), the Forestry Ministry's (KLHK) *kawasan hutan* boundary, and the Energy Ministry's (ESDM) mining WIUP/IUP boundaries, plus provincial/district spatial plans (RTRW). These four map families routinely disagree about who holds valid rights to the same polygon. The government's own reconciliation product, PITTI (Peta Indikatif Tumpang Tindih), found 46.8 million hectares — about 24.6% of Indonesia's land area — in some form of spatial inconsistency (Bisnis.com/Antara/Kompas, 2021, cross-referenced result still cited as the baseline figure through 2026).

Today, a bank, buyer, or concession holder checks overlap through: (1) a one-parcel-at-a-time lookup on ATR/BPN's public Bhumi portal or Sentuh Tanahku app, validating a parcel against BPN's own cadastre only, no cross-check against KLHK forest or ESDM mining boundaries; (2) a KJPP (licensed appraiser) site visit priced per engagement; (3) bespoke, multi-week law-firm legal due diligence; and (4) informal reliance on the government's periodic PITTI publication, a static national indicative map, not a live per-transaction feed. None gives a credit desk or concession holder a continuous, portfolio-level, multi-map overlap score.

## Buyer & Who Pays

- **Agribusiness/mining lending desks at banks** (BRI, Mandiri, BNI, BCA, and regional development banks — BPD — with plantation/mining exposure in Kalimantan, Sumatra, Sulawesi) who cannot risk-score collateral because "overlapping land certificates cannot be used as collateral in banking" per reported cases (search finding, InfoSAWIT/RBTV coverage of Pasangkayu/Ketapang/Lahat disputes, 2025–2026).
- **Palm oil and mining concession holders** who now face an active state clawback campaign (Satgas PKH) and want a defensible, continuously-updated self-audit position before enforcement reaches them.
- **M&A/PE buyers and law firms** doing land-title diligence on plantation or mining assets.

## Documented Failures (cited)

- Satgas PKH reclaimed 5.89 million hectares of palm-oil-sector land plus 12,371.6 hectares in mining, and collected Rp10.27 trillion (Rp3.42T in forestry fines + Rp6.84T in tax revenue) by May 2026 (Kompas, Suara.com, Niaga.Asia, InfoPublik, May 2026).
- PITTI identified 46.8 million ha of spatial inconsistency, ~24.6% of Indonesia's land area (Bisnis.com, Antara, Kompas Properti, 2021; figure still the reference baseline).
- Bank-facing collateral failures: HGU overlapping farmer SHM certificates across 30 villages in Pasangkayu, 12 desa in Ketapang, and a Ministry of Transmigration-flagged case in Lahat under joint ATR/BPN investigation as of July 2026 (InfoSAWIT, 21 July 2026; Sambar.id, 2025; Beritaone.id).

## Bottom-Up ARR Path (K4)

Customers: an estimated 200–500 palm oil/mining concession-holding companies wanting a continuous compliance-shield subscription (Indonesia has roughly 1,500+ palm oil concession holders and thousands of mining permits, so this is a conservative reachable subset), plus 15–30 banks/BPDs with material agribusiness lending books as a higher-ACV, slower tier. ACV: inferred from comparable spend — KJPP appraisal engagements run roughly Rp10–50 million per parcel and legal land DD retainers Rp50–200 million per transaction (search-derived pattern, not a published price list); a recurring self-serve subscription at $3,000–10,000/year per portfolio is analogous to compliance/ESG monitoring SaaS, but this recurring figure is inferred, not directly evidenced locally. Illustrative path: 250 corporate customers × $6,000 ACV ≈ $1.5M ARR from the self-serve corporate tier alone. Evidence quality: mixed — segment and severity well evidenced; ACV inference-based.

## Existing Solutions (as of mid-2026)

- **PITTI** (Kemenko Perekonomian) — government indicative overlap map, periodic/static, not a per-transaction API.
- **Bhumi ATR/BPN** — free public single-parcel check against BPN's own cadastre only (no forestry/mining cross-check).
- **Nusantara Atlas** (TheTreeMap) and **Auriga Nusantara/Mapbiomas Indonesia** — deforestation and land-cover monitoring for supply-chain/NGO use, not lender-facing overlap risk scoring.
- No dedicated commercial startup offering bank-facing, multi-map permit-overlap risk scoring was found in search as of July 2026 — a gap at the productization layer, though the underlying government map data is not new.

## Kill Tests

- **K1 (Data access): PASS.** The evidence layers (BPN cadastre, KLHK forest boundary, ESDM mining WIUP, RTRW plans) are public government records; a customer holds/can obtain its own parcel's certificate/NIB as anchor, no cooperation needed from a disputing party.
- **K2 (Oracle bound): PASS.** Overlap is a geometric computation between published polygon datasets from disagreeing state sources — not a fabricated-at-source physical truth.
- **K3 (Absorption): PASS.** No cited 12-month roadmap or procurement to turn PITTI/Bhumi into a bank-facing commercial risk-scoring API; both are adjacent existing state products, not evidence of imminent absorption of this specific commercial function.
- **K4 (Bootstrap bar): PASS (moderate confidence).** ~250–500 reachable corporate customers with an inferred but plausible ACV comparable; self-serve/API model is founder-gate compatible.

**Survives: yes.**

## Scores

- Severity 8 — documented large-scale seizures/fines (Rp10.27T, 5.89M ha) traceable to map disagreement.
- Bootstrap revenue quality 6 — named segment, count plausible, ACV rests partly on inference from appraisal/legal-DD comparables.
- WTP 7.5 — banks and concession holders already pay for an inferior alternative (KJPP, legal DD) and face an active enforcement threat.
- Data position 5 — underlying geospatial layers are public/commodity; accumulating a reconciled multi-source dataset adds some but not exclusive defensibility.
- Absorption distance 4 — PITTI/Bhumi are adjacent state programs already doing the core mapping; no 12-month evidence of bank-facing productization.
- Competition 6 — no direct commercial competitor for this exact use case, but adjacent deforestation-monitoring players (Nusantara Atlas, Auriga) exist.
- Compounding moat 5.5 — workflow/integration lock-in likely once embedded in lending or compliance processes; no network effect yet.

**Weighted: 6.2**

## Upside Flag

Expansion into EUDR/deforestation-linked supply-chain compliance analytics for palm oil exporters (secondary evidence only; not scored) — the same geospatial reconciliation engine could serve EU-facing exporters needing deforestation-free proof.

## What Would Kill This

Evidence Kemenko Perekonomian/ATR-BPN is building a bank-facing overlap-risk API on a funded 12-month roadmap; evidence KSP Geoportal access is opening free to all lenders/corporates; or evidence PITTI's next release ships a queryable per-parcel API.

## Sources

- [Satgas PKH Serahkan Rp10,27 Triliun dan 2,3 Juta Hektare Lahan ke Negara — Kompas, May 2026](https://nasional.kompas.com/read/2026/05/13/14475461/satgas-pkh-serahkan-rp-1027-triliun-dan-23-juta-hektare-lahan-ke-negara?page=all)
- [Satgas PKH Setor Rp10,27 Triliun — Suara.com, May 2026](https://www.suara.com/foto/2026/05/13/201454/satgas-pkh-setor-rp1027-triliun-dan-237-juta-hektare-lahan-hutan-ke-negara)
- [Peta Tumpang Tindih Tata Ruang Rampung, 46,8 Juta Ha Lahan Tak Sesuai — Bisnis.com, 2021](https://ekonomi.bisnis.com/read/20210914/9/1441881/peta-tumpang-tindih-tata-ruang-rampung-468-juta-ha-lahan-tak-sesuai)
- [PITTI Ketidaksesuaian identifikasi 46,8 juta hektar — Antara News](https://www.antaranews.com/berita/2390129/pitti-ketidaksesuaian-identifikasi-468-juta-hektar-permasalahan)
- [Dugaan Tumpang Tindih HGU Sawit dengan Lahan Transmigrasi di Lahat — InfoSAWIT, 20 July 2026](https://www.infosawit.com/2026/07/20/dugaan-tumpang-tindih-hgu-sawit-dengan-lahan-transmigrasi-di-lahat-diselidiki-kementerian-transmigrasi-gandeng-atr-bpn/)
- [HGU Perusahaan Sawit Tumpang Tindih dengan SHM 30 Desa di Pasangkayu — Sambar.id, 2025](https://www.sambar.id/2025/04/hgu-perusahaan-sawit-tumpang-tindih.html)
- [HGU Terbitan BPN Ketapang Tumpang Tindih Dengan Lahan Petani Sawit di 12 Desa — Beritaone.id](https://beritaone.id/news/detail/1589/hgu-terbitan-bpn-ketapang-tumpang-tindih-dengan-lahan-petani-sawit-di-12-desa)
- [Nusantara Atlas — TheTreeMap](https://nusantara-atlas.org/)
- [Apa itu Bhumi ATR/BPN](https://kaltim.atrbpn.go.id/infografis/apa-itu-bhumi-atrbpn)
- [Pemanfaatan Data Geospasial dalam Kebijakan Satu Peta Diperluas — Kompas.id](https://www.kompas.id/artikel/en-pemanfaatan-data-geospasial-dalam-kebijakan-satu-peta-diperluas)
