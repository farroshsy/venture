# Fisheries & Aquaculture Traceability (fisheries)

## Problem & Current Workflow
Capture fisheries: a licensed vessel (SIPI) files an e-logbook, lands at a designated port where unloading data (bongkaran) is recorded, and the port authority issues the initial sheet that anchors the Sertifikat Hasil Tangkapan Ikan (SHTI) — the catch certificate required for EU-bound shipments under the EU IUU Regulation — cross-checked against logbook, inspection results and RFMO vessel lists (KKP; PP 27/2021). KKP mandates STELINA (Sistem Ketertelusuran dan Logistik Ikan Nasional) for flagship export commodities, digitally linking catch/farm, processing, distribution and export (KKP DJPDSKP; Antara). US-bound shipments in 13 species groups (including shrimp and tuna) require Seafood Import Monitoring Program (SIMP) chain-of-custody data covering roughly one-third of US seafood imports (Congressional Research Service R48469, 2025). Health certificates come from the quarantine agency. Aquaculture (shrimp is the export backbone): pond → collector → cold storage/processor → exporter, with traceability reconstructed from processor lot records rather than captured at the pond. Exports reached $983 million by mid-March 2026 (KKP via Antara, 18 March 2026); full-year value (unverified).

Regulatory direction is softening on the US side: Executive Order 14276 (April 2025) directed Commerce to consider revising or rescinding recent SIMP expansions, after NOAA had already withdrawn its 2022 expansion rule; Congress still funded SIMP in January 2026 (CRS, 2025–2026).

## Stakeholders & Who Pays
Work: ~2.7 million fishers and fish farmers (unverified), port officers, processors/cold chains, exporters. Pays: exporters bear certificate and documentation costs; KKP funds STELINA and enforcement; US/EU importers bear filing burdens; investors and lenders pay for diligence on aquaculture ventures. Audits: KKP port inspectors, quarantine agency, NOAA/CBP audits of SIMP records, EU DG MARE reviews of catch-certificate regimes, and — after eFishery — forensic accountants. Disputes: fishers vs quota policy (PIT), NGOs (Destructive Fishing Watch, EJF) vs operators, investors vs founders.

## Trust Breakdown (documented incidents)
- eFishery (2025): Indonesia's aquaculture unicorn fabricated its core operational data — FTI Consulting found revenue inflated from an actual ~$157M to a claimed $752M for 9M-2024, a claimed $16M profit versus a real ~$35M loss, and ~24,000 active eFeeders versus 400,000+ claimed, with dual books since 2018. Founder-CEO Gibran Huzaifah was sentenced to nine years for embezzlement and money laundering on 29 April 2026; ~90% of staff were cut; Malaysia's KWAP expects under 10 cents on the dollar (FTI findings via CNBC/DealStreetAsia, Feb 2025; Business Today, July 2026). This is the canonical proof that farm-level data in Indonesian aquaculture is fabricated at scale — and that audits, boards and tier-1 VCs (SoftBank, Temasek) missed it for six years.
- IUU fishing losses: KKP put losses at over Rp13 trillion (~$800M) for 2020–2025 (Jakarta Globe, 2025); a KKP adviser cited $23 billion in 2023 (Tempo.co, May 2023, leaning on FAO's global 26M-ton figure); older Supreme Audit Agency work suggested up to Rp300 trillion (Fair Observer, undated). The 30x spread among official figures is itself evidence that catch data is untrusted.
- Benjina slavery case (AP investigation, 2015): trafficked crews and laundered catch moved through Indonesian ports into US supply chains — the origin story for SIMP.

## Cost of the Problem
- IUU losses: Rp13T/2020–2025 (KKP via Jakarta Globe, 2025) to $23B/yr (KKP staffer, Tempo 2023) — figures conflict; treat all as weakly grounded.
- eFishery: ~$1.4B in equity value destroyed (The Runway/CNBC, 2025); KWAP's RM163.4M investment near-wiped (Business Today, 2026).
- Cost of SIMP/SHTI paperwork per shipment: (unverified). US SIMP program cost: $6.2M/yr federal appropriation FY2024–25 (CRS, 2025).

## Existing Solutions (as of 2026-07, named)
Government: STELINA (mandatory for export commodities; real adoption depth unverified), e-logbook, SHTI regime, PIT quota policy. Startups: Aruna (fisher-to-export commerce; $65M raised, ~40% staff cut Dec 2024–Jan 2025 amid investor pullback — DealStreetAsia/Heaptalk); FishLog (cold-chain traceability; cut over half its staff and weighed M&A — DealStreetAsia); eFishery (collapsed, run by FTI). Global: Wholechain (SIMP-oriented traceability), ThisFish Tally (processor software, deployed in Indonesian tuna plants under USAID Oceans-era programs — deployment currency unverified), Trace Register, OpenSC (WWF/BCG pilot lineage). Standards: GDST 1.x interoperability standard for seafood traceability adopted by major buyers.

## Why Insufficient
STELINA digitizes documents but the initial sheet still relies on port officers transcribing what a captain declares; small vessels (the majority) largely sit outside e-logbook coverage (coverage share unverified). Processor-level records reconstruct provenance after mixing. In aquaculture, the eFishery lesson is that even instrumented data (feeder telemetry) was falsified by the operator itself — the custodian was the adversary. Buyers' response has been distrust and discounting, not procurement of better tooling.

## Blockchain Test
The eFishery case is the strongest single-custodian-fraud story in the country: an operator falsifying its own database for six years is precisely the chain-shaped scenario. But the parties who needed proof (investors, auditors) buy audits, not protocols; and for trade compliance, flag-state certificates are the internationally accepted trust anchor — NOAA and the EU trust states, not ledgers. No neutral-party vacuum exists that a chain would fill with paying demand.

## Kill Test Verdict
1. Problem without blockchain: YES — IUU, catch-cert fraud, fabricated farm data all persist. PASS.
2. PostgreSQL under a trusted operator: the accepted model already — state registries (STELINA, SHTI) and processor systems; verifiers accept them. FAIL.
3. Six-month ERP feature: Wholechain/Trace Register/ThisFish already sell SIMP- and GDST-compliant modules. FAIL.
4. Standalone economic value: sector WTP has collapsed — Aruna and FishLog cut staff for lack of margin, eFishery imploded; exporters treat documentation as a cost to minimize. FAIL.
Verdict: KILLED (fails 2, 3 and 4).

## Scores
- Severity 7 — recurring IUU losses, forced-labor history, and a $1.4B fraud collapse; but costs land on the state and investors, not one budget-holder.
- Market 4 — Indonesian fisheries traceability software spend plausibly under $100M (sizing unverified); export base ~$1B/quarter.
- WTP 4 — exporters minimize paperwork cost; startups serving the sector are all distressed; state budget slow.
- Chain 5 — multi-org, but flag state is the accepted trusted intermediary for every foreign verifier.
- Urgency 5 — EO 14276 points to SIMP retrenchment, not expansion; no fresh deadline; eFishery scandal fading.
- Competition 5 — several attempts, none dominant, incumbents distressed — open but for bad reasons.
- Moat 4 — GDST standard exists; port/processor integrations give some lock-in.
- Weighted: 5.0.

## What Would Kill This Idea
Already killed: no solvent buyer, accepted state trust anchor, and global vendors own the compliance niche. Watch instead: if the US reverses course and expands SIMP to all imports, or the EU cards Indonesia (never carded to date), urgency and WTP re-rate — the file to reopen this is a regulatory event, not a technology.

## Sources
- https://www.congress.gov/crs-product/R48469
- https://stelina.kkp.go.id/
- https://kkp.go.id/djpdskp/kkp-perkuat-sistem-ketertelusuran-industri-perikanan-dengan-implementasi-stelina65c304728914e/detail.html
- https://www.antaranews.com/berita/2028120/untuk-ekspor-kkp-semua-tangkapan-ikan-nelayan-harus-dapat-ditelusuri
- https://en.antaranews.com/ (fishery exports US$983M as of March 2026, 18 Mar 2026)
- https://www.cnbc.com/2025/02/07/efishery-the-impact-a-scandal-has-on-ecosystem-already-in-deep-water.html
- https://www.businesstoday.com.my/2026/07/25/unwrapping-the-efishery-scandal/
- https://stratsea.com/hard-lessons-from-efisherys-fishy-business/
- https://en.tempo.co/read/1726668/losses-from-iuu-fishing-reach-us23bn-ministry
- https://jakartaglobe.id/news/illegal-fishing-costs-indonesia-over-800-million-in-five-years
- https://www.fairobserver.com/more/environment/iuu-fishing-a-devastating-threat-to-indonesia-and-the-world/
- https://www.dealstreetasia.com/stories/aruna-layoffs-432353
- https://www.dealstreetasia.com/stories/fishlog-layoffs-416440
- https://heaptalk.com/news/investor-confidence-wanes-indonesias-fisheries-aruna-lays-off-its-workforce/
- https://www.seafoodsource.com/news/environment-sustainability/noaa-fisheries-plan-to-expand-seafood-import-monitoring-program-still-elaves-questions
