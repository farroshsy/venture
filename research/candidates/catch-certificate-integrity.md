# Catch Certificate & Seafood Traceability Integrity

Researched 2026-07-30. Program B, pre-committed rubric. This candidate
overlaps heavily with two prior Program A files — `research/axes/
fisheries-multiagency.md` (Axis 5-CONTROL) and `research/industries/
fisheries.md` — both KILLED under Program A's blockchain-necessity test.
Program B re-examines the same underlying facts under the architecture-
unconstrained K1-K4 test; the facts, not the prior verdict, are what
carry over. **Verdict below: does NOT survive**, primarily on K1.

## Problem & How Truth Is Established Today

A vessel >20 GT lands catch at a fisheries port; the port authority (KKP
Ditjen Perikanan Tangkap) issues the Sertifikat Hasil Tangkapan Ikan
(SHTI) initial sheet, anchored on the captain's declaration and the port
officer's transcription of unloading data (bongkaran), cross-checked
against the vessel's e-logbook and inspection results (KKP; PP 27/2021).
EU-bound shipments require a derived sheet under the EU IUU Regulation
1005/2008 scheme. KKP's STELINA (Sistem Ketertelusuran dan Logistik Ikan
Nasional) digitizes and interconnects records from catch through
processing to export, but by its own description operates on
"documented, interconnected" self-reported data at each stage rather than
independently verifying what was caught (Detik, 4 May 2026; KKP/DJPDSKP).
The article introducing STELINA to industry explicitly concedes: "recording
practices are still largely manual, digital literacy is uneven, and data
standards are not fully uniform" — i.e., upstream catch-truth quality is
an acknowledged open problem STELINA does not itself solve. Small vessels
— the numerical majority of Indonesia's fishing fleet — largely sit
outside e-logbook coverage (coverage share unverified, but repeatedly
cited as the weak point across KKP-adjacent sources).

## Buyer & Who Pays

Would-be buyer: seafood processors/exporters (UPI) shipping to the EU, who
bear the compliance and rejection risk. A second possible buyer is KKP
itself (wanting better upstream data for the certificates it issues), but
government procurement is an enterprise/institutional sales motion,
disfavored under the founder-fit gate (G6: self-serve/API adoption).

## Documented Failures (cited)

- EU CATCH digital catch-certificate system became compulsory for EU
  importers on 10 January 2026 (European Commission,
  oceans-and-fisheries.ec.europa.eu, primary source, 12 Jan 2026
  announcement). Within three weeks it was "overwhelmed": the Financial
  Times (27 Jan 2026) and China Daily (28 Jan 2026) both reported fish
  piling up at European ports as the new digital system buckled under
  load — a documented failure of the *importing* side's own system, not
  of Indonesian data specifically, but it confirms the deadline and stakes
  are real.
- IUU fishing loss estimates disagree by roughly 30x: KKP cited over
  Rp13 trillion (~$800M) for 2020-2025 (Jakarta Globe, 2025) versus a KKP
  adviser's $23 billion/year figure (Tempo.co, May 2023, leaning on FAO's
  global 26-million-ton estimate) versus a newer KKP claim of Rp16-16.6
  trillion in prevented losses (Merdeka/Antara, May-June 2026). The spread
  itself is evidence the underlying catch data is untrusted — but it also
  shows the number is contested at the ministry level, not
  independently auditable by a private vendor.
- KKP-BPPMHKP/Barantin SMKHP-KI-1 electronic data-exchange integration
  pilot began 22 July 2026 (karantinaindonesia.go.id; Rakyat Sulbar, 24
  July 2026) — confirms the state is actively building inter-agency
  integration, one week before this research date.
- eFishery: not a catch-certificate case but the sector's canonical
  proof that even *instrumented* Indonesian aquaculture data was
  fabricated by the operator itself for six years (FTI Consulting
  findings; founder sentenced nine years, 29 April 2026) — the strongest
  evidence in the sector that the data custodian can be the adversary.

## Bottom-Up ARR Path

Not credibly reachable given the K1/WTP findings below. The two closest
Indonesian comparables — Aruna (fisher-to-export commerce, raised $65M,
cut ~40% of staff Dec 2024-Jan 2025 amid investor pullback,
DealStreetAsia) and FishLog (cold-chain traceability, cut over half its
staff and explored M&A, DealStreetAsia) — are not exact product analogues
but are the nearest-adjacent Indonesian companies monetizing fisheries
data/traceability, and both failed to sustain the economics. No positive
ARR path is asserted here.

## Existing Solutions (as of mid-2026)

State: STELINA, e-logbook, SHTI regime, the July 2026 SMKHP-KI-1
integration pilot, and an INSW/SSm QC joint-inspection single-submission
regime live at 14 ports since September 2022. Global vendors already
selling SIMP/GDST-compliant traceability modules into this exact
buyer set: Wholechain, Trace Register, OpenSC (WWF/BCG pilot), and
ThisFish/Tally (deployed in Indonesian tuna plants under USAID
Oceans-era programs, per prior repo research; current deployment depth
unverified this session). GDST 1.x is the industry interoperability
standard major buyers already require.

## Kill Tests

- **K1 Data access — FAILS.** The contested truth for the core problem as
  scoped (is the SHTI-backing catch declaration accurate, especially for
  small vessels) is controlled by the vessel/captain being evaluated, not
  by any plausible paying customer. Exporters/UPIs receive fish from many
  small-scale boats without e-logbook or VMS coverage and have no
  independent means to verify what was actually caught, where, or by
  whom — proving it requires the cooperation of the party whose
  declaration is in question, which is the named K1 kill condition. A
  narrower scope (mass-balance reconciliation of an exporter's own
  processing-to-export records against its own SHTI/e-logbook paperwork)
  would pass K1, but that narrower function is what Wholechain/Trace
  Register/ThisFish/GDST-compliant tools already sell (see Existing
  Solutions) — collapsing into a crowded, low-differentiation compliance
  checklist product.
- **K2 Oracle bound — FAILS for the core problem, same reasoning as K1.**
  Small-vessel catch truth is fabricated-or-unrecorded-at-source with no
  available signal (no VMS, no independent observer, no weighing
  checkpoint reliably reaching this tier).
- **K3 Absorption — not reached** (K1/K2 already fail), but noted for
  completeness: STELINA is a live, funded state program explicitly
  targeting this exact traceability space, with a fresh integration
  milestone (22 July 2026) inside the 12-month window — this would
  independently support a K3 concern for any narrower documentation-layer
  framing.
- **K4 Bootstrap bar — not reached**, but the sector's two nearest
  Indonesian comparables (Aruna, FishLog) both failed to sustain
  fisheries-data/traceability economics and cut staff in 2024-2025 —
  documented negative WTP evidence, not inference.

## Scores

Not scored — does not survive K1/K2. Scoring a killed candidate would
imply a false credibility the evidence does not support.

## Upside Flag

None asserted. If small-vessel VMS/e-logbook coverage were mandated and
funded to near-universal reach (a regulatory event, not a technology one),
the K1 oracle problem would resolve and this candidate would need
re-scoring from scratch — that is a trigger to watch, not a present
upside.

## What Would Kill This

Already effectively killed by the evidence above. It would need to be
substantially rescoped — e.g., pure exporter-side EU-CATCH documentation
reconciliation, competing directly with Wholechain/Trace Register — and
even then would need to overcome the demonstrated WTP collapse at Aruna
and FishLog before it could be treated as viable.

## Sources

- https://oceans-and-fisheries.ec.europa.eu/news/new-digital-certification-system-tackle-illegal-fishing-2026-01-12_en (primary, EU Commission)
- https://www.ft.com/content/53a977de-ddaf-4b2c-b19a-e2e08af38e0a (2026-01-27)
- chinadaily.com.cn/a/202601/29/WS697a4b8ca310d6866eb36472.html (2026-01-28)
- https://news.detik.com/kolom/d-8473303/stelina-fondasi-daya-saing-perikanan-indonesia (2026-05-04)
- https://karantinaindonesia.go.id/uji-terap/berita/tak-lagi-dua-langkah-kini-satu-sistem-barantin-bppmhkp-percepat-layanan-ekspor-ikan
- https://www.rakyatsulbar.com/2026/07/24/percepat-layanan-ekspor-karantina-sulsel-dan-bppmhkp-implementasikan-pertukaran-data-elektronik/
- https://en.tempo.co/read/1726668/losses-from-iuu-fishing-reach-us23bn-ministry (2023-05)
- https://jakartaglobe.id/news/illegal-fishing-costs-indonesia-over-800-million-in-five-years (2025)
- https://www.dealstreetasia.com/stories/aruna-layoffs-432353
- https://www.dealstreetasia.com/stories/fishlog-layoffs-416440
- https://www.businesstoday.com.my/2026/07/25/unwrapping-the-efishery-scandal/
- research/axes/fisheries-multiagency.md and research/industries/fisheries.md (Program A prior, KILLED, same underlying facts reused with attribution)
