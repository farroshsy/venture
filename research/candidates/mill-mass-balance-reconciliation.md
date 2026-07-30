# Mill FFB Mass-Balance Reconciliation

## Problem & How Truth Is Established Today

Palm mills receive fresh fruit bunches (FFB/TBS) from a mix of company estates, contracted "plasma" smallholders, and open-market agents (tengkulak/RAM operators) aggregating fruit from many small, often unmapped plots. "Truth" about a truckload's origin is established, at best, at the aggregate supply-shed level: companies commission polygon mapping of known suppliers (Koltiva, internal sustainability teams, PT Surveyor Indonesia's National Dashboard) and produce company-wide "traceability to plantation" (TTP) percentages. None of this verifies a *specific truckload* at the weighbridge against a *specific verified plot* at delivery — the receiving dock typically records volume and supplier/agent name, not plot-level provenance. Once fruit is mixed in storage bins (mass balance), a legitimate polygon on file for the supply shed proves nothing about any individual load, and illegal fruit from forest-area plantings can enter through an agent layer off-the-shelf polygon-mapping tools do not reach.

## Buyer & Who Pays

Primary buyer: compliance/sustainability managers at independent (non-integrated) CPO mills and mid-size refiners/exporters who sell into EU-linked supply chains and must produce EUDR due-diligence statements by the Dec 30, 2026 deadline for medium/large operators (Jun 30, 2027 for micro/small — Regulation (EU) 2025/2650, per H2 Compliance/PSQR reporting). Secondary buyer: downstream buyers/traders (Wilmar, Musim Mas, GAR, Apical/RGE) who push traceability requirements down to their mill suppliers but are themselves enterprise accounts, not a bootstrap-reachable segment.

## Documented Failures (cited)

- Satgas PKH (state forest-area task force) reclaimed 3.314 million ha of forest-area oil palm plantings Feb-Sept 2025; 833,413 ha handed to state enterprise PT Agrinas, 81,793 ha returned to conservation (Tesso Nilo National Park), 2.4M ha still in process (ipol.id, Aug 2025; RRI.co.id, citing Rp371.1 trillion "saved state assets").
- PP 45/2025 introduced a flat Rp25 million/ha/year fine for unauthorized forest-area plantation use — 5-7x prior rates, reaching Rp375 million/ha for 20 years unpermitted operation (Kompas, Oct 5 2025; sawitindonesia.com).
- Mongabay Indonesia (Apr 30, 2026) physically tracked trucks carrying FFB from Tesso Nilo National Park — sealed by Satgas PKH Jun 10, 2025 — to named mills PT Gemilang Sawit Lestari (Apical/RGE-affiliated, Aug 8 2025) and PT Usaha Kita Makmur (900 t/day, Mar 2 2026), with CPO onward to PT Sari Dumai Sejati (Apical subsidiary). A documented, dated instance of the exact laundering mechanism, nearly a year into the crackdown.
- The EC's EUDR FAQ (secondary: Farmerline blog, citing an Apr 2025 iteration) reportedly rules out mass-balance for EU-bound compliance, forcing segregation — not independently verified against primary EU text.
- EUDR-compliant CPO reportedly trades at a $150–220/MT premium over mass-balance material (GLOBOIL Intelligence, secondary, methodology unverified).

## Bottom-Up ARR Path (customers x ACV x reachability)

Segment: independent/mid-size CPO mills and smaller exporters directly exposed to the Dec 2026 EUDR deadline (excludes the ~10-20 vertically-integrated conglomerates, who are enterprise accounts). No independently verified total count of Indonesian CPO mills was obtained this pass (**unverified**). ACV has no direct Indonesian comparable for a mill-level receiving-dock verification SaaS; the closest proxies are one-time farmer-side mapping fees (Rp150,000–1,000,000/ha via drone, or ~Rp250,000/plot for <4 ha — technogis.co.id, jasapemetaan.co.id), which are inputs to a mill's compliance cost, not the product's own price. A defensible-but-inferred ACV sits in the low-tens-of-millions-of-rupiah/year range, justified by the cited EUDR price premium rather than an observed comparable spend. **Evidence quality: moderate-weak (5) — plausible segment and WTP logic, but count and ACV both rest on inference.**

## Existing Solutions (named, dated)

- **National Dashboard Indonesia** — government commodity traceability dashboard (palm, coffee, cocoa, rubber), established via Kemenko Perekonomian Decision 178/2024, operated by PT Surveyor Indonesia, EU co-funded, launched 2025 (Mongabay, Apr 2025; rm.id). Criticized by Greenpeace Indonesia/Sawit Watch/Satya Bumi as insufficiently rigorous ("akal-akalan" — betahita.id, theiconomics.com).
- **Koltiva/KoltiTrace** — Indonesia-based, 19,000+ upstream/downstream business customers, offers polygon mapping, "Data Verification" audits, and EUDR modules (koltiva.com; agreads.com, Feb 2026); by its own admission ~40% of Indonesian smallholders still face traceability/certification gaps.
- **PT Surveyor Indonesia** independently developed an EUDR traceability platform (InfoSAWIT, May 2024).
- **Musim Mas / PT SMART Tbk (Sinar Mas)** — internal supply-chain traceability programs claiming up to 99% TTP for their own contracted supply (smart-tbk.com) — company-scheme fruit only, not open-market agent fruit.
- **Satelligence, Orbify, TraceX** — foreign SaaS/satellite vendors active in Indonesian EUDR compliance, none specifically at the truckload/agent layer.

## Kill Tests

- **K1 (Data access): PASS.** The paying mill controls its own receiving-dock process and can require agent-level declarations, cross-checked against independently purchasable satellite/deforestation layers.
- **K2 (Oracle bound): PASS.** Plot-vs-forest-area overlay (the same method Satgas PKH itself uses) plus logistics/GPS timestamps make the truth inferable from available signals, not fabricated-at-source.
- **K3 (Absorption): PASS — no strong 12-month evidence found.** Koltiva and the National Dashboard operate at the aggregate/polygon level, not the truckload/agent layer; no roadmap, mandate, or funded implementation targeting this specific sub-function was found.
- **K4 (Bootstrap bar): PASS, weakly.** A founder-led motion selling a receiving-dock verification module to independent mills via industry channels (e.g., GAPKI) is plausible but unproven; ACV and reachable count both rest on inference rather than a named comparable.

## Scores

- Severity: 8 — large documented loss/penalty exposure (PP45/2025, up to Rp375M/ha) plus an active, dated 2025-2026 laundering case.
- Bootstrap revenue quality: 5 — plausible segment, ACV/count inferred, no direct comparable.
- WTP: 6 — real budget owner, strong payback logic via EUDR premium, but not yet a named line item.
- Data position: 5 — per-client integration, replicable, not yet an accumulating proprietary dataset.
- Absorption distance: 5 — plausible extenders exist (Koltiva, National Dashboard) but no roadmap found at this specific layer.
- Competition: 4 — crowded adjacent space (Koltiva, National Dashboard, Satelligence, Orbify, TraceX), none dominant at the truckload/agent layer specifically.
- Moat: 5 — integration lock-in per mill, no cross-customer network effect yet.

**Weighted: 5.7**

## Upside Flag

If a receiving-dock verification layer accumulates cross-mill agent-reputation data (which agents/plots repeatedly correlate with flagged land), it could become a de-facto blacklist registry with network effects across mills and buyers — a genuine moat path, but unverified this pass (secondary/speculative).

## What Would Kill This

Koltiva or the National Dashboard announcing a specific receiving-dock/weighbridge-integration product with a funded rollout timeline; or Satgas PKH-style enforcement expanding to real-time mill-gate inspection (would substitute state enforcement for private verification).

## Sources

ipol.id, Aug 2025; RRI.co.id (Rp371.1T claim); Kompas, Oct 5, 2025; sawitindonesia.com (PP45/2025); mongabay.co.id, Apr 30, 2026 (Tesso Nilo tracking); Mongabay, Apr 2025 (National Dashboard); betahita.id/theiconomics.com (NGO criticism); koltiva.com; agreads.com, Feb 2026; smart-tbk.com; technogis.co.id; jasapemetaan.co.id; Farmerline blog (secondary, mass-balance ban claim); GLOBOIL Intelligence (secondary, price premium).
