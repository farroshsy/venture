# Working-Capital Collateral Existence Monitoring

Researched 2026-07-30. Program B, pre-committed rubric. This candidate is
a direct revival of the prior Program A axis `research/axes/
inventory-finance.md`, KILLED under Program A's blockchain-necessity test
but explicitly named as the shape that would survive architecture-
unconstrained: *"an IoT/computer-vision collateral-monitoring service with
insurer backing — a competitor to Sucofindo, not verification
infrastructure."* That is what this file evaluates.

## Problem & How Truth Is Established Today

Indonesian banks lend working capital against borrower-submitted stock
lists and receivables-aging schedules. Today's chain: KAP-audited
financials at origination; SLIK pulled for cross-lender facility/
collateral data; a KJPP appraiser values the collateral once; account
officers make periodic site visits; fidusia over the (fungible, rotating)
inventory pool is registered at AHU as a text description with no
object-level truth-check. For higher-value commodity exposure, some banks
add a Collateral Management Agreement (CMA): a surveyor (Sucofindo, SGS,
Bhanda Ghara Reksa) physically controls the warehouse and releases goods
only on the bank's written order — a service Sucofindo has run since 1964
and Danamon pioneered at scale with Sucofindo and BGR in 2012
(Bisnis.com, 2012). Outside CMA-covered commodity trade finance,
post-origination monitoring rests on borrower-submitted reports between
periodic (often annual or ad hoc) physical visits. Whether pledged stock
actually exists is discovered, repeatedly, only at default.

## Buyer & Who Pays

Domestic. Primary buyer: risk/commercial-lending divisions at regional
development banks (BPD, e.g. Bank Jatim) and rural banks (BPR) — the tier
where 2025-2026 fictitious-credit cases concentrate and where CMA budgets
are thinnest. Secondary buyer: mid-tier commercial banks' SME
working-capital desks. Indonesia has roughly 100+ commercial banks plus
over a thousand BPRs and several BPDs (**precise current count unverified
this session**) — a materially larger, more reachable population than the
handful of top-tier banks already running CMA programs.

## Documented Failures (cited)

- Bank Jatim, Jakarta branch: fictitious working-capital credit,
  2023-2024; BPK's 10 June 2025 audit counted Rp299.39 billion, prosecutors
  pursued ~Rp569.4 billion; pledged receivables and stock "could not be
  found in the warehouse at inspection" (Hukumonline, Dandapala, 2025 —
  from `research/axes/inventory-finance.md`). Corroborated independently
  this session: BPK named Rp296-299 billion flowing to a former branch
  official (Tempo, 17 Nov 2025); five defendants sentenced 9 January 2026
  (Tempo, TribunNews); two fugitives tied to a related Rp4.75 billion
  scheme arrested in Surabaya, June 2026 (Merdeka, JPNN, Antara News).
- Hukumonline reports 102 banking-crime case files involving fictitious
  credit dressing up non-performing loans, as of June 2024 (via
  `inventory-finance.md`).
- Five more independently reported 2025-2026 fictitious-credit cases at
  regional/rural banks, found this session: BPR Bank Jepara Artha (KPK
  detained 5 suspects, seized 136 land parcels/vehicles, Detik, 18 Sept
  2025); BPR Bank Purworejo ("kredit topengan," 6 suspects, Kompas, 13 May
  2026); Bank Magelang (official dismissed/prosecuted, Kompas, 25 June
  2026); BPR Panca Dana Depok (Rp46 billion, Detik Finance, 23 Feb 2026);
  BPR SAWA (Rp5.8 billion, Okezone, 11 July 2026). Six cases in roughly
  twelve months is a recurring pattern, not an outlier.

## Bottom-Up ARR Path

Named segment: BPD/BPR risk and commercial-lending divisions with
working-capital books secured by physical inventory. Reachable count: low
hundreds is plausible (over a thousand BPRs plus dozens of BPDs and
mid-tier banks), but the precise subset with material inventory-secured
books is **unverified this session**. ACV: no Indonesian CMA/Sucofindo
pricing was found (search budget exhausted before pricing pages could be
reached) — **unverified/inferred**. A plausible model, inferred from the
value proposition (a fraction of a CMA's inspection fee, priced per
monitored site rather than full custody), needs roughly 20-60 bank
customers at $15,000-50,000/year ACV to clear $1M ARR — both terms rest
on inference. Evidence quality: **mixed** — buyer and pain are strongly
evidenced; pricing and reachable count are not.

## Existing Solutions (as of mid-2026)

OJK SLIK (cross-lender facility/collateral exchange — total leverage, not
collateral truth); AHU fidusia registry (text-description only, no
object-level validation); CMA/physical custody — Sucofindo, SGS, Bhanda
Ghara Reksa (periodic, human-staffed full custody; Sucofindo's own site,
2026, confirms discrete-engagement inspection/audit, not continuous
monitoring); KJPP appraisals and KAP audits (one-time/annual); Bappebti's
Sistem Resi Gudang (SRG, IS-Ware, blockchain since 2020 — a structurally
different product for registered commodity warehouse receipts, not
general working-capital lending against borrower-held inventory). No
Indonesian IoT/computer-vision continuous collateral-monitoring vendor
was identified this session — search budget exhausted before this could
be confirmed as absence rather than a search gap; **not fully verified
"nobody built this."**

## Kill Tests

- **K1 Data access — PASSES.** Banks already hold contractual
  inspection/audit rights over pledged collateral via loan and fidusia
  agreements; IoT sensors/cameras/RFID as a credit condition extends the
  CMA model banks already accept, not cooperation beyond a covenant.
- **K2 Oracle bound — PASSES.** Physical stock presence/weight/count in a
  monitored warehouse is a directly observable signal (sensors,
  computer-vision, RFID) — unlike concealed BO or small-vessel catch,
  this is not fabricated-at-source, provided sensor installation is
  itself tamper-monitored.
- **K3 Absorption — PASSES (no 12-month evidence found).** CMA incumbents
  occupy the physical-custody layer, but no evidence of any shipping a
  continuous IoT/computer-vision product on a committed timeline;
  current offering remains discrete-engagement inspection/audit. OJK
  could tighten SLIK collateral reporting by decree, but that mandates
  *reporting*, not a shipped monitoring tool.
- **K4 Bootstrap bar — PASSES, mixed evidence.** Buyer and pain strongly
  documented (six independent 2025-2026 cases); count and ACV rest on
  inference, not a cited Indonesian price.

## Scores

- Severity 8 — six independently reported, criminally prosecuted
  fictitious-collateral cases across bank tiers within twelve months,
  named rupiah figures up to ~Rp569 billion at one regional bank.
- Revenue quality 5 — plausible, well-evidenced buyer and pain; ACV and
  precise reachable count both rest on inference, not citation.
- WTP 6 — banks already pay for an inferior, non-continuous alternative
  (CMA/appraisal); Program A's prior finding that "banks under-buy CMA on
  cost" suggests price sensitivity, cutting toward a cheaper continuous
  product rather than against WTP outright.
- Data position 5 — sensor/inspection data is per-customer integration
  access, replicable by a competitor; a cross-customer fraud-pattern
  dataset would accrue with use but is unbuilt.
- Absorption distance 5 — CMA incumbents are a plausible absorber
  (adjacent physical-layer business) but no roadmap into continuous
  monitoring was found.
- Competition 5 — CMA incumbents entrenched on the adjacent full-custody
  model but not confirmed active in continuous low-cost IoT monitoring;
  no dedicated Indonesian competitor identified (unverified absence, not
  confirmed whitespace).
- Moat 5 — per-warehouse sensor integration creates switching cost once
  installed; a cross-bank fraud-pattern graph is a plausible, unbuilt
  network effect.

Weighted = 0.20(8)+0.20(5)+0.15(6)+0.15(5)+0.10(5)+0.10(5)+0.10(5) = **5.8**

## Upside Flag

Secondary evidence only. A working per-warehouse fraud-pattern dataset
(borrowers/guarantors/addresses recurring across multiple lenders'
fictitious-credit incidents) would be reusable as a cross-bank
early-warning signal — closer to a credit-bureau-adjacent asset than a
pure monitoring tool. Not a rescue for the inferred K4 terms above.

## What Would Kill This

Evidence that Sucofindo, SGS, or BGR is shipping a continuous IoT/
computer-vision monitoring product to Indonesian banks on a funded
12-month timeline (flips K3); or that OJK's collateral-reporting
tightening comes bundled with a mandated state/association monitoring
platform (Rapindo-style) rather than a reporting requirement banks must
independently satisfy.

## Sources

- research/axes/inventory-finance.md (Program A prior; Bank Jatim, Rp569.4B/
  Rp299.39B, 102-case-file figures, CMA/Sucofindo history, and the
  "IoT/computer-vision... competitor to Sucofindo" revival note all
  originate here, reused with attribution; underlying citations:
  Hukumonline 2025, Dandapala 2025, Bisnis.com 2012, Sucofindo 2026)
- https://www.sucofindo.co.id/ (2026, confirmed inspection/audit services)
- Bing News, 2026-06-03/04: Merdeka, JPNN, Antara News — Bank Jatim Rp4.75B
  fugitives arrested in Surabaya
- Bing News, 2025-11-17: Tempo — BPK auditor names Rp296-299B recipient
- Bing News, 2026-01-09: Tempo, TribunNews — Bank Jatim Jakarta verdict
- Bing News, 2025-09-18: Detik — BPR Bank Jepara Artha, KPK case
- Bing News, 2026-05-13: Kompas — BPR Bank Purworejo "kredit topengan"
- Bing News, 2026-06-25: Kompas — Bank Magelang fictitious credit
- Bing News, 2026-02-23: Detik Finance — BPR Panca Dana Depok, Rp46B
- Bing News, 2026-07-11: Okezone — BPR SAWA, Rp5.8B
