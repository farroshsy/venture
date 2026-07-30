# Ports, Customs & Trade Documents (ports-customs)

## Problem & Current Workflow
Import flow today: importer or licensed customs broker (PPJK) lodges the import declaration (PIB) electronically through DJBC's CEISA, routed via the Indonesia National Single Window (INSW); restricted-goods permits (lartas) come from line ministries through single-submission (SSm) modules; duties are paid via e-billing; the shipment is channelled green/yellow/red for document or physical inspection; on release (SPPB) the container exits through Pelindo auto-gates integrated with TPS Online. Exports needing preferential tariffs obtain a certificate of origin (SKA) through Kemendag's e-SKA system. The National Logistics Ecosystem (NLE) stitches these together: as of October 2024 it operated in 46 seaports and 6 airports, covering 97% of sea-cargo and 98% of air-cargo traffic (WCO News No. 105, 2024). Pelindo, post-2021 merger, has rolled out Phinnisi vessel services integrated with Inaportnet across 71 ports and PTOS terminal systems, with domestic manifest integration for inter-island trade begun February 2025 (Pelindo/ILCS, 2024-25).

## Stakeholders & Who Pays
Work: importers/exporters, PPJKs, forwarders, shipping lines, terminal operators (Pelindo, JICT), DJBC officers, quarantine, 15+ ministries in the NLE steering structure (WCO News, 2024). Pays: cargo owners pay duties, port charges, brokerage — and, documented below, bribes. Audits: DJBC post-clearance audit, BPK, KPK, AGO (Kejagung). Disputes: importer vs DJBC over tariff/valuation/COO validity (SKA disputes litigated under PMK-45/2020 then PMK-35/2023 — Supply Chain Indonesia, 2023); state vs smugglers; Indonesia vs partner-country customs over trade-data mismatches.

## Trust Breakdown (documented incidents, cited)
- Blueray Cargo case: owner John Field convicted 10 July 2026 (2 years, Rp300M fine) for bribing DJBC officials to prioritise inspection and speed his containers out of Tanjung Priok; the court found ~Rp61.7 billion in cash bribes over July 2025–January 2026 plus Rp1.4 billion in entertainment; Antara reports total payments of Rp91.77 billion (Kompas; Antara, July 2026). This is a fresh, adjudicated scandal.
- "Mafia pelabuhan": January 2023 Tipikor verdicts — three DJBC officials (2–8 years) and a company director (13 years) for abusing bonded-zone (Kawasan Berikat/KITE) facilities 2015–2021: imported Chinese textiles meant for re-export were sold domestically under false paperwork (Liputan6/Merdeka, 2023).
- Nickel manifest fraud: KPK found ~5.3 million tonnes of nickel ore exported illegally to China January 2020–June 2022 despite the export ban, detected via a Rp14.5 trillion discrepancy between BPS export data and China customs import data; estimated state loss Rp575 billion in royalties/duties (KPK via CNN Indonesia/Detik, June-August 2023).
- SKA/COO abuse: documented scheme routing Chinese textiles via manipulated India origin documents and Batam re-import with falsified papers, including bribing Batam customs officers (Action Research Literate case study, 2022).

## Cost of the Problem
- Dwell time: 3.02 days average across main ports in 2025, improved from 3.52 (2024); customs clearance 0.42 days (DDTC News citing government data, 2026).
- NLE impact survey (2023): processing time down 57.7%, cost down 37.6% for covered services (WCO News, 2024).
- Bribe scale: Rp91.77 billion paid by a single forwarder group in seven months (Antara, 2026) — the price of queue-jumping reveals the value of clearance speed.
- Duty leakage: Rp575 billion state-loss estimate on nickel alone (KPK, 2023). Aggregate customs-fraud leakage: no credible national figure found (unverified).

## Existing Solutions (as of 2026-07, named)
Government owns the stack: INSW (LNSW agency), CEISA 4.0 (DJBC), NLE, e-SKA (Kemendag), Inaportnet (Kemenhub), Pelindo/ILCS systems (Phinnisi, PTOS-M/PK/R, SSM, autogates). Private/global: TradeLens (Maersk/IBM) — shut down Q1 2023 after failing "to achieve commercial scale"; neutrality and governance cited as core failures (Maersk statement 2022; PierNext 2023). GSBN (carrier consortium, China-centred) and Singapore's TradeTrust framework for electronic transferable records exist regionally; no Indonesian startup with meaningful traction in trade-document integrity was found after search (Tracxn logistics-SaaS list, May 2026).

## Why Insufficient
NLE integrates submission, not truth: documents remain self-declared attestations, and the KPK nickel case shows nothing reconciles Indonesian manifests against destination-country records. The Blueray case shows corruption routes around the system (inspection prioritisation is human discretion). Cross-border verification — Indonesian regulator, foreign customs, courts each needing proof independent of the other — is a genuinely high blockchain-necessity pattern.

## Blockchain Test
Domestically, INSW is the accepted neutral operator; a PostgreSQL under LNSW is literally the current architecture and is trusted. The unmet need is bilateral state-to-state data reconciliation — but that is treaty/G2G territory (ASEAN Single Window already exchanges ATIGA e-Form D), not a startup product surface.

## Kill Test Verdict — KILLED
1. Problem survives without blockchain? YES. 2. PostgreSQL under a trusted operator? YES for the domestic 95% — the state operates it. FAIL. 3. Six-month incumbent feature? Mostly no (government-scale), a partial pass. 4. Standalone company value? NO — the buyer is government/consortium; TradeLens died on exactly this, and it had Maersk's balance sheet. FAIL.

## Scores
- Severity 8 — adjudicated large-scale bribery (2026 verdict) and duty fraud with KPK involvement; legal exposure is existential for participants.
- Market 5 — Indonesian trade-document software spend realistically $50–250M; the big money is duties, which the state keeps in-house (no named TAM study — basis stated).
- WTP 4 — government procurement is slow; importers demonstrably pay bribes, not software, for speed.
- Chain 6 — multi-org and cross-border verifiers exist, but INSW is an accepted domestic neutral party.
- Urgency 6 — fresh July 2026 scandal forces action, but the actor forced is DJBC, not a private buyer.
- Competition 4 — state systems dominate the space; private field is empty for structural, not opportunity, reasons.
- Moat 6 — a standards position, if ever achieved, would be sticky; reaching it is the unsolved part.
- Weighted: 5.7

## What Would Kill This Idea
Already killed for a startup: the counterparty is the state, procurement is the moat of incumbents (Telkom/ILCS orbit), and the one honest gap — international manifest reconciliation — is G2G. TradeLens' failure with far more leverage is the controlling precedent. Revisit only if LNSW ever tenders a private verification layer.

## Sources
- https://mag.wcoomd.org/magazine/wco-news-105-issue-3-2024/national-logistics-ecosystem-indonesia/
- https://news.ddtc.co.id/berita/nasional/1816572/2025-dwelling-time-tercatat-rata-rata-302-hari
- https://nasional.kompas.com/read/2026/07/10/13530371/suap-pejabat-bea-cukai-bos-blueray-cargo-john-field-divonis-2-tahun-penjara
- https://www.antaranews.com/berita/5644243/hakim-pemilik-blueray-cargo-beri-suap-rp9177-m-ke-pejabat-bea-cukai
- https://www.liputan6.com/news/read/5194024/3-pejabat-bea-cukai-divonis-2-8-tahun-bui-di-kasus-mafia-pelabuhan-direktur-eldin-citra-13-tahun
- https://www.cnnindonesia.com/nasional/20230623174843-12-965881/kpk-ungkap-selisih-ekspor-ore-nikel-ilegal-ke-china-tembus-rp145-t
- https://finance.detik.com/industri/d-6804909/kpk-sebut-ada-ekspor-ilegal-ore-nikel-ke-china-begini-data-bps
- https://arl.ridwaninstitute.co.id/index.php/arl/article/view/350
- https://supplychainindonesia.com/pmk-45-2020-ke-pmk-35-2023-kajian-kritis-atas-regulasi-dan-sengketa-surat-keterangan-asal-ska/
- https://www.maersk.com/news/articles/2022/11/29/maersk-and-ibm-to-discontinue-tradelens
- https://piernext.portdebarcelona.cat/en/technology/the-closure-of-tradelens
- https://sustainableworldports.org/project/pt-pelabuhan-indonesia-persero-pelindo-digital-transformation/
- https://indoshippinggazette.com/2026/year-end-reflection-pelindo-charts-bold-strategy-ahead-of-2026/
- https://e-ska.kemendag.go.id/home.php/home/form
