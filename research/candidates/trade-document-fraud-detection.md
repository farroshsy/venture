# Trade Document Forgery & Duplicate-Use Detection

## Problem & How Truth Is Established Today
Banks finance import/export cargo (LC negotiation, invoice/PO discounting, receivables factoring) against paper trade documents — bills of lading, commercial invoices, packing lists, LC presentations — that can be forged, altered, presented after the underlying delivery occurred, or used more than once across different financiers. Checking today is manual UCP 600 paper/PDF review, bank-by-bank, with no shared cross-bank registry in Indonesia to catch the same document financed twice. Electronic bill-of-lading adoption remains ~2% of all B/Ls issued globally as of 2026 (cleareye.ai), and no evidence was found of Indonesian bank participation in the major eBL platforms (CargoX, essDOCS, WaveBL, Bolero).

## Buyer & Who Pays
Named buyer: bank trade-finance/trade-operations and compliance divisions at issuing/negotiating banks (e.g., BNI, Mandiri, BCA, CIMB Niaga, foreign-bank branches, and export-financing institution LPEI). Cross-organizational: catching duplicate financing inherently requires visibility across multiple financing institutions, not just the paying bank's own book — the same underlying cargo/invoice can be presented to a different bank than the one that already financed it.

## Documented Failures (cited)
- **Bank Woori Saudara Indonesia 1906 Tbk**: OJK detected fraud/irregularities in export LC transactions dating to 2023; scandal value ~US$78.5M (~Rp1.28T), initial indications of forged/false documents in matured negotiable LC transactions; bank reported internally, engaged an independent law firm, prepared police reports (mediaindonesia.com; money.kompas.com, OJK's May 2026 anti-fraud mandate). A clean, non-collusion-tainted, Indonesia-specific document-fraud loss.
- **LPEI**: KPK named 5 suspects (including two of LPEI's own Direktur Pelaksana) in a Rp11.7T potential state-loss case across 11 debtors; PT Petro Energy alone (~US$60M/~Rp900B) allegedly used falsified purchase contracts/invoices plus window-dressing (CNN Indonesia, Tempo, Antara, March 2025). **Collusion-tainted**: internal LPEI officials are themselves suspects, so document checking was compromised from within — this sizing is discounted per evidence rules, not read as "better tooling alone would have stopped it."
- Global context only (not Indonesian): Hin Leong (Singapore, ~US$3–4B) and Trafigura/Mongolia nickel fraud (~US$577M) — base-rate industry context per the research hint, not Indonesian documented losses.

## Bottom-Up ARR Path
The realistic buyer set is small: ~20–40 Indonesian banks (BUKU III/IV plus active foreign-bank trade desks, plus LPEI) run meaningful LC/trade-finance operations. Even at an enterprise-SaaS ACV of US$50–100k (closest comparable is Traydstream's bank-platform positioning; no Indonesian-Rupiah price point found), that caps the ceiling near $1–4M ARR — but reaching it requires bank procurement (RFP, security review, compliance sign-off, integration), not self-serve signup. Evidence: WEAK on both count and ACV — no Indonesian pricing comparable exists, and the buyer count is small enough that a few lost deals sink the path.

## Existing Solutions (named, dated)
- **Traydstream** (UK): AI/OCR trade-document checking platform for banks, claims 80% error-rate reduction, processing time cut from 3 days to 40 minutes (Celent profile, 2026); no confirmed Indonesian bank deployment found.
- **MonetaGo**: global duplicate-financing hash-registry provider, deployed with the Association of Banks in Singapore's Trade Finance Registry, FCI (factoring), and Oracle supply-chain finance; no Indonesian deployment found.
- **eBL platforms** (CargoX, essDOCS, WaveBL, Bolero): ~2% global adoption in 2026; first cross-platform interoperability (CargoX↔edoxOnline, May 2025); no confirmed Indonesian participation found.
- **OJK POJK 12/2024** (Anti-Fraud Strategy for Financial Institutions): mandates a four-pillar governance framework (prevention, detection, investigation/reporting, monitoring) — process mandate, not a specific technology.
- No Traydstream-class deployment found in Indonesia as of mid-2026, consistent with the research hint.

## Kill Tests
- **K1 Data access — PASS, with a caveat.** The document-forgery/inconsistency slice (checking a document set a bank already holds for alterations, mismatched stamps/dates, sequence irregularities, carrier-tracking cross-checks) is self-contained — no need for the presenting party's cooperation. The duplicate-use-across-banks slice structurally requires other financing institutions' data — a single customer can't unilaterally supply that; it needs a multi-bank registry (the MonetaGo model), a network cold-start problem rather than a strict "party refuses" kill.
- **K2 Oracle bound — PASS.** Both forgery signals and duplicate-financing facts are recorded, inferable facts once a comparison base exists — not off-system collusion or a physically-fabricated-at-source truth.
- **K3 Absorption — PASS (no 12-month evidence found).** POJK 12/2024 mandates a governance framework, not a specific technology; no bank or vendor was found with an active procurement or roadmap for a Traydstream/MonetaGo-class system in Indonesia.
- **K4 Bootstrap bar — FAIL.** The reachable customer count (~20–40 banks) is small, ACV needed to hit $1M ARR is large, and selling compliance-critical trade-finance infrastructure to banks structurally requires an enterprise sales motion — RFP response, security/vendor review, long integration cycles — failing the founder gate (G6: self-serve/API, evening-sized ops). No self-serve precedent found in Indonesia.

**Survives: no — killed on K4 (bootstrap bar requires an enterprise-sales organization; reachable bank count too small for self-serve economics).**

## Scores
- Severity 8 — a clean, non-collusion Indonesian scandal (Woori Saudara, ~Rp1.28T) plus a criminally-prosecuted trade-finance mega-case (LPEI, though collusion-discounted) show large, recurring, regulator-escalated loss events.
- Bootstrap revenue 3 — reachable count is small (tens of banks) and no Indonesian ACV comparable was found; K4-failing math.
- WTP 7 — named budget owner (bank trade-ops/compliance) already spends on manual review staff and is under an explicit regulatory mandate (POJK 12/2024) to fund anti-fraud measures.
- Data position 5 — a bank's own document set is per-customer, replicable access; no proprietary cross-customer accumulation exists without a registry that isn't built.
- Absorption distance 7 — the actual regulatory mandate is governance/process, not a named technology, so the specific product function sits orthogonal to what's required.
- Competition 7 — only foreign vendors with no confirmed Indonesian traction were found (Traydstream, MonetaGo); documented search, no local player.
- Moat 5 — once embedded in a bank's trade-ops workflow, switching cost is real but single-tenant; no confirmed cross-bank network effect exists yet.
- **Weighted: 5.9**

## Upside Flag
Secondary evidence only, unverified: a bootstrap wedge selling single-document integrity checks (not duplicate-financing) directly to freight forwarders, customs brokers, or exporters — bypassing bank sales cycles — could reopen a self-serve K4 path, but no evidence of demand or willingness-to-pay from that segment was found; speculative.

## What Would Kill This
A large Indonesian bank or LPEI publicly announcing a Traydstream/MonetaGo-class procurement or internal build (flips K3); or evidence that even 20–40 banks each require a 12+ month enterprise sales cycle, making year-one reachable customers effectively zero (reinforces the existing K4 kill).

## Sources
mediaindonesia.com (OJK detects Woori Saudara fraud since 2023); money.kompas.com (OJK mandatory anti-fraud strategy, May 2026); CNN Indonesia, Tempo, Antara, Suara.com (LPEI KPK case, March 2025); Traydstream.com and Celent (2026); MonetaGo.com, Trade Finance Global, GTR (2022–2026); cleareye.ai (eBL adoption 2026); cargox.io (interoperability, May 2025); fraud.net, incomlend.com (trade-finance fraud typologies).
