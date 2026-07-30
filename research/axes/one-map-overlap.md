# One-Map Permit Overlaps (Land / Forestry / Plantation) — AXIS 5-CONTROL

H1 prediction: FAILS, because the sovereign can and does force a single canonical map by decree.

## Problem & Current Workflow

Indonesian land-use rights are issued from parallel map universes: KLHK (now KemenHut) gazettes kawasan hutan, ATR/BPN issues HGU plantation titles, ESDM issues mining permits, and regional governments issued location permits — historically against different base maps at different scales. Verification today: a company or bank checks its concession against the One Map geoportal (satupeta.go.id, launched December 2018), KLHK's forest-area maps and PIPPIB moratorium map, and ATR/BPN land records; conflicts are resolved not by any registry but by administrative decree, the courts, or since February 2025 by Satgas PKH (forest-area enforcement task force), which simply takes the land back. Settlement of overlaps is a state political act, not a data-reconciliation act.

## Stakeholders & Who Pays

Work: BIG and Kemenko Perekonomian's One Map secretariat compile 158 thematic maps from 24 ministries/agencies and 34 provinces (Perpres 9/2016 as amended by Perpres 23/2021). Payers: the state budget; companies pay lawyers, surveyors and "keterlanjuran" administrative fines under UUCK/PP 24/2021. Auditors: BPK, KPK. Disputants: KLHK/KemenHut vs ATR/BPN vs ESDM vs bupati-issued permits; companies and indigenous communities against all of them. All economically relevant parties are domestic and subordinate to the Presidency.

## Trust Breakdown (documented)

- Compiling the One Map exposed 10.4M ha of overlapping claims in Kalimantan and 6.4M ha in Sumatra (government figures, Mongabay 2018).
- PITTI Ketidaksesuaian mapped 46.8M ha of spatial-use inconsistency, ~24.6% of national land area (Kemenko Perekonomian, September 2021). The broader indication figure — 77.3M ha, 40.6% of assessed area, showing overlapping permits/spatial mismatch — was cited by Auriga Nusantara from government thematic maps (ForestDigest, 2022); Kemenko Perekonomian reported the overlap down to ~57M ha (30.1%) by 2024 (Detik Finance, 2024).
- KLHK's PIPPIB shows over 1M ha of oil-palm overlap with peat/primary forest and forest estate (PIPPIB Rev. V, cited 2025).
- ATR/BPN refused for years to release HGU plantation maps despite Supreme Court ruling 121 K/TUN/2017 ordering disclosure (Mongabay 2017–2019) — an institution hiding the very data others must verify against.
- The canonical map itself is contested: legal experts and industry argue SK Menhut 36/2025 cannot lawfully determine forest-area status (Majalah Hortus, 2025); Ombudsman pressed ATR to resolve palm-oil overlaps (Antara, 2025).
- Enforcement: Satgas PKH reclaimed 5,889,141 ha of oil palm in forest areas by May 2026, transferring ~4.12M ha to PT Agrinas Palma Nusantara, with Rp10.27 trillion in administrative fines handed to the Finance Ministry on 13 May 2026 (Kejagung/Satgas PKH, 2026).

## Cost of the Problem

KPK's 2025 forestry-governance study found potential state losses of Rp355.34 trillion from round timber alone, 2015–2023 (KPK, reported 2026). The Attorney General identified US$8.5B in potential 2026 fines — Rp109.6T from palm, Rp32.63T from mining — for illegal operation in forest areas (Reuters, December 2025). Company-side: fines and seizures above; legal certainty discount on plantation assets (unverified). Much of the historic loss is off-system collusion (permits knowingly sold twice by officials) — that portion must be stripped from addressable sizing, leaving verification/diligence spend that is far smaller (unverified, plausibly tens of millions USD).

## Existing Solutions (as of 2026-07)

State: One Map geoportal (all 158 IGT compiled; 141 integrated, 86% of PITTI synchronized as of March 2024, BIG); Perpres 5/2025 on forest-area arrangement; Satgas PKH; OSS spatial-conformity checks (KKPR). Private/NGO: Nusantara Atlas (TheTreeMap), Satelligence, Global Forest Watch for deforestation/concession analytics; EUDR-driven traceability vendors (Koltiva, Meridia) touch plot legality. No blockchain player of consequence.

## Why Insufficient & Who Rejects the Existing Anchor

The maps still disagree and access is politically rationed (HGU secrecy). But the crucial H1 question — who refuses the anchor? — has the fatal answer: nobody who matters can refuse. Ministries dispute each other, yet all answer to the President, who has already acted by decree (Perpres 23/2021, Perpres 5/2025) and by force (Satgas PKH). Foreign parties (EUDR buyers) verify plots against state maps plus satellite imagery; they do not demand a custodian-independent Indonesian ledger. A blockchain among ministries would notarize contradictory claims without resolving whose claim is law — resolution is a sovereign prerogative.

## Blockchain Test

Multi-org, yes; but a single accepted arbiter exists (the state, ultimately the Presidency). Tamper-evidence does not change behavior: the dispute is over legal authority and boundary interpretation, not over whether a record was altered. Chain necessity ~2/10.

## Kill Test Verdict — KILLED (H1 prediction confirmed)

1. Problem survives without blockchain? YES — it is a governance problem.
2. PostgreSQL under one trusted operator? YES it suffices — satupeta.go.id under BIG/Kemenko IS that operator, and every relevant party is subject to it. FAIL.
3. Can the state ship it by decree in six months? It already has — Perpres 5/2025 plus a task force with prosecutors. FAIL.
4. Standalone company value? Only as geospatial-diligence SaaS competing with free state portals and NGO tools. Marginal. FAIL.

## Scores

- Severity 8 — 5.89M ha seized and Rp10.27T fines make overlap existential for titleholders (Satgas PKH 2026).
- Market 4 — diligence/analytics spend after stripping collusion losses is likely sub-$100M (unverified).
- WTP 6 — plantation and mining firms already pay counsel and consultants to survive penertiban.
- Chain 2 — sovereign arbiter exists and is exercising authority; ledger notarizes, cannot adjudicate.
- Urgency 8 — enforcement in force now; 2026 declared "no compromise" continuation (Satgas PKH).
- Competition 4 — free state geoportal plus established satellite-analytics vendors.
- Moat 3 — any GIS shop can replicate overlay analytics; data belongs to the state.
- Weighted: 5.1

## What Would Kill This Idea

Already dead under H1. It would only revive if Indonesia fragmented institutionally (ministries refusing presidential arbitration for years) or if foreign buyers formally rejected state maps and demanded independent plot provenance — EUDR currently does not.

## Sources

- https://news.mongabay.com/2018/12/one-map-to-rule-them-all-indonesia-launches-unified-land-use-chart/
- https://www.forestdigest.com/detail/1858/areal-tumpang-tindih-izin-77-3-juta-hektare
- https://finance.detik.com/infrastruktur/d-7433789/masalah-tumpang-tindih-lahan-turun-drastis-dalam-5-tahun-ini-datanya
- https://www.mining.com/web/indonesia-plans-to-fine-palm-oil-growers-miners-8-5b-for-forest-encroachment/ (Reuters wire, Dec 2025)
- https://nasional.kompas.com/read/2026/05/13/14475461/satgas-pkh-serahkan-rp-1027-triliun-dan-23-juta-hektare-lahan-ke-negara
- https://www.antaranews.com/berita/2390129/pitti-ketidaksesuaian-identifikasi-468-juta-hektar-permasalahan
- https://ekonomi.bisnis.com/read/20210914/9/1441881/peta-tumpang-tindih-tata-ruang-rampung-468-juta-ha-lahan-tak-sesuai
- https://riauaktual.com/news/detail/117565/satgas-pkh-kuasai-kembali-589-juta-hektar-lahan-sawit-411-juta-hektar-diserahkan-ke-agrinas
- https://www.niaga.asia/satgas-pkh-kuasai-kembali-kawasan-hutan-dari-perkebunan-sawit-dan-pertamabngan-5-901-51289-hektare/
- https://www.seanteronews.com/2026/05/01/kerugian-negara-rp355-triliun-kpk-bongkar-borok-sektor-kehutanan/
- https://www.mongabay.co.id/2017/03/14/mahkamah-agung-putuskan-pemerintah-wajib-buka-data-hgu-sawit-di-kalimantan/
- https://news.majalahhortus.com/sk-menhut-no-36-tahun-2025-tidak-bisa-dijadikan-dasar-menentukan-kawasan-hutan/
- https://www.antaranews.com/berita/4474493/kementerian-atr-diminta-ombudsman-tuntaskan-tumpang-tindih-lahan-sawit
- https://big.go.id/content/news/big-ungkapkan-hasil-dan-implementasi-percepatan-kebijakan-satu-peta
- https://dml.or.id/penertiban-lahan-sawit-dan-urgensi-kebijakan-satu-peta-hutan/
