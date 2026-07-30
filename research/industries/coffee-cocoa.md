# Coffee & Cocoa Provenance (coffee-cocoa)

## Problem & Current Workflow
Coffee: Indonesia produced an estimated 11.3 million 60-kg bags in 2025/26 (87% robusta) with green-bean exports around 6.5–7.8 million bags depending on estimate vintage (USDA FAS Jakarta, May 2025; Daily Coffee News, June 2025). Over 80% of coffee and cocoa comes from smallholders farming under 2 ha, mostly without land certificates, with parcel data scattered across local governments and cooperatives (SKYCO2, 2025). Cherry moves farmer → pengepul (collector) → huller/processor → exporter (Medan, Lampung, Makassar) → roaster. Documents appear only at export: certificate of origin, phytosanitary certificate, Gayo geographical-indication papers for GI lots, and — for EU shipments from 30 December 2026 — an EUDR due-diligence statement with plot polygons (Regulation (EU) 2025/2650, December 2025). Cocoa: production has fallen ~5% annually for a decade; 11 grinders with 750,000 t/yr capacity run at ~60% utilization and the country now imports beans at scale (~354 million kg projected 2026), while cocoa-product exports hit $1.6 billion in the first five months of 2025 against $1.2 billion in all of 2023 on record world prices (Bloomberg, 24 July 2026; StatLedger; Food Business MEA, 2025). Grinders must run EUDR due diligence on imported West African beans re-exported to the EU as processed product. Specialty provenance (Gayo, Toraja, Kintamani, kopi luwak) is asserted by exporter declaration and GI paperwork with weak downstream verification.

## Stakeholders & Who Pays
Work: ~1.8 million coffee-farming households (unverified), collectors, cooperatives (e.g., Gayo cooperatives under MPKG for GI), exporters, grinders (Barry Callebaut, Cargill, ofi, JB Cocoa), specialty importers and roasters. Pays: exporters and grinders fund compliance; EU/US roasters pay origin premiums; donors (GIZ, USAID, Swiss SECO) subsidize farmer registration; farmers cannot pay. Audits: certification bodies (Rainforest Alliance, Fairtrade, organic), Q-graders, EU competent authorities post-2026, GI protection societies. Disputes: cooperatives vs exporters on premium pass-through; roasters vs suppliers on authenticity claims.

## Trust Breakdown (documented incidents)
- Kopi luwak adulteration: an academic test reported ~41% of kopi luwak sold in the US market was adulterated or blended (reported by specialtycoffee.id, citing prior research; primary study not independently verified here — weak source). Gayo arabica is routinely passed off as luwak.
- Gayo counterfeiting: Indonesian consumer press documents persistent fake/oplosan "Gayo" in domestic and export channels (IDN Times; Kompas, 2016–2024); no authority publishes loss figures — economic scale (unverified).
- EUDR panic-buying: anticipation of the original December 2025 deadline triggered heavy front-loading of EU shipments — over 1.4 million bags moved through Belgium and Germany in early 2025 (USDA FAS, 2025) — evidence that origin-compliance uncertainty, not demand, is moving trade.
- Farmer-level data fabrication is the sector's acknowledged weak point: polygons drawn from office desks, borrowed STDB-equivalents, and collector-level mixing mean documents describe farms, not lots. (Pattern documented across EUDR-readiness reporting; AgTech Navigator, August 2025.)

## Cost of the Problem
- Exposure: over 30% of Indonesia's coffee export value is linked to Europe (indonesia-coffee.com, 2025 — secondary, weak); coffee exports earned $1.64 billion in 2024 (Indonesia Investments). Losing EU access is a >$500M/yr revenue risk (derived, unverified).
- Specialty fraud losses: no named Indonesian figure exists — (unverified).
- Compliance cost per farmer polygon/registration: (unverified); donor-funded programs absorb most of it today.

## Existing Solutions (as of 2026-07, named)
Dimitra + PT Surveyor Indonesia launched a national campaign (announced October 2025) to onboard up to 3 million coffee and cocoa smallholders for EUDR using AI, satellite monitoring and blockchain, targeting Kerinci and Central Sulawesi. Koltiva runs KoltiTrace across cocoa and coffee with corporate clients; its subsidiary Sugata won TRANSFORM: BESTARI 2024 funding for cocoa. Fairfood (Netherlands) operates Trace, a blockchain platform used for coffee and spices with Verstegen and others. Enveritas verifies coffee sustainability claims free to roasters via sampling. Corporate systems: ofi AtSource, Cargill Cocoa Promise, Rainforest Alliance certification. EUDR toolers: TraceX, Farmforce, Meridia (land documentation), osapiens. Government: the National Dashboard (Kemenko Perekonomian / PT Surveyor Indonesia) covers coffee and cocoa alongside palm.

## Why Insufficient
Every platform depends on self-reported or enumerator-collected farm data; none can prove that a given bag came from the polygon attached to it once collectors blend lots — the mass-balance gap. GI enforcement (Gayo) has paperwork but no lot-level verification, so premiums leak to counterfeiters. Yet the buyers who care (EU regulators, specialty roasters) currently accept exporter declarations and certifier sampling, so the unmet demand for stronger proof is thin.

## Blockchain Test
Multi-org chain with adversarial premium incentives and foreign verifiers looks chain-shaped, but accepted trusted intermediaries already exist (certifiers, Enveritas, state surveyor, Koltiva), and the EU accepts centrally filed DDS. The failure mode is data capture and physical mixing, which no ledger fixes. Isotope/chemical fingerprinting attacks the authenticity problem more directly than consensus does.

## Kill Test Verdict
1. Problem without blockchain: YES — EUDR compliance and origin fraud persist. PASS.
2. PostgreSQL under a trusted operator: Enveritas, Koltiva and Surveyor Indonesia are exactly that and are accepted. FAIL.
3. Six-month ERP feature: EUDR modules already shipped by osapiens/TraceX/Farmforce; certifiers add provenance features routinely. FAIL.
4. Standalone value: for EUDR tooling yes, but incumbents hold it; for specialty-fraud-only, market too small ((unverified) losses). MARGINAL.
Verdict: KILLED (fails 2 and 3).

## Scores
- Severity 6 — real regulatory exposure on >30% of coffee export value; fraud documented but without quantified losses.
- Market 5 — Indonesia coffee+cocoa traceability spend plausibly $50–250M (sizing unverified).
- WTP 7 — mandated compliance; exporters/grinders already paying Koltiva/Dimitra; donors subsidize the rest.
- Chain 4 — accepted intermediaries (certifiers, Enveritas, state surveyor); EU accepts central filings.
- Urgency 7 — EUDR deadline 30 Dec 2026 inside 6 months; panic-buying already observed.
- Competition 3 — Dimitra+Surveyor's 3M-farmer national campaign plus Koltiva incumbency forecloses the wedge.
- Moat 4 — farmer network data is sticky but donors force interoperability; features copyable.
- Weighted: 5.3.

## What Would Kill This Idea
Already killed: the state-blessed Dimitra–Surveyor alliance is doing the exact play at national scale with a two-year head start. Also lethal: EUDR simplification (April 2026 review) removing polygon requirements for standard-risk origins; cocoa import dependence shifting due-diligence work to West African originators, not Indonesian platforms.

## Sources
- https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Coffee+Semi-annual_Jakarta_Indonesia_ID2025-0039
- https://dailycoffeenews.com/2025/06/04/indonesia-coffee-report-exports-up-though-tariffs-and-eudr-linger/
- https://www.indonesia-investments.com/business/commodities/coffee/item186
- https://www.bloomberg.com/news/articles/2026-07-24/indonesia-seeks-to-revive-cocoa-output-after-years-of-decline
- https://www.foodbusinessmea.com/indonesia-steps-up-cocoa-production-revival-to-reduce-imports-boost-processing-capacity/
- https://statledger.com/products/indonesia-cocoa-cocoa-products-market-trend-analysis-forecast-to-2030
- https://www.skyco2.com/en/NewsDetail.aspx?ID=530
- https://blockchain.news/flashnews/eudr-deadline-nears-dimitra-and-pt-surveyor-indonesia-deploy-ai-and-blockchain-to-onboard-3-million-indonesian-coffee-and-cocoa-farmers
- https://tools.prnewswire.com/en-us/live/20813/release/20251001EN88136
- https://www.fairfood.org/what-we-do/trace/
- https://specialtycoffee.id/id/articles/identifying-and-avoiding-fake-kopi-luwak/
- https://www.idntimes.com/food/diet/5-cara-membedakan-kopi-gayo-asli-vs-palsu-pencinta-kopi-wajib-tahu-c1c2-01-5ltmv-bdj60n
- https://www.agtechnavigator.com/Article/2025/08/25/eudr-compliance-digital-tools-empower-smallholders-at-risk-of-being-sidelined/
- https://www.coolset.com/academy/which-products-are-covered-under-the-eudr-sector-by-sector-overview
