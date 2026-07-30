# Adversarial Verification — Independent Financial-Statement & Revenue Verification

**Slug:** `financial-statement-fraud-detection`
**Program:** B (integrity software, architecture unconstrained)
**Trigger:** raw weighted 6.4 ≥ 6.0 (Protocol §6 adversarial-memo trigger)
**Date of scan:** 30 July 2026
**Verdict: REFUTED.** K3 (absorption) fails on the protocol's own evidence
standard; K4 (bootstrap bar) collapses; competition and absorption-distance
scores are both overstated and capped at 4 under Protocol §6.

---

## 0. Method note and evidence-quality warning

The session's WebSearch budget was exhausted before this memo began. Research
was conducted by direct document fetch plus systematic Google News RSS index
queries (Indonesian `hl=id&gl=ID` and English). Consequence: several findings
below are **headline + source + date from the Google News index**, not full
article reads. Every claim is tagged with its verification level in §7. No
claim in the verdict rests on a level-C item alone.

---

## 1. What the candidate claimed

That Indonesian lenders and investors have no continuous, independent way to
bind reported revenue/receivables to transaction-level evidence; that the
function is orthogonal to SLIK (absorption distance 6.5); that global tools
(MindBridge, AppZen) have no confirmed Indonesian presence and Big 4 forensic
is project-based rather than productized (competition 5); and that ~200–250
reachable lenders/KAPs × ~$10k ACV yields a ≥$1M ARR bootstrap path (K4 PASS,
revenue 5).

Four attacks follow. Three land hard.

---

## 2. ATTACK 1 — K3 absorption FAILS on the protocol's own evidence standard

Protocol §4 K3 kills on "existing roadmap, **announced regulation**, active
procurement, funded implementation, or an incumbent already entering the exact
function." Three independent items clear that bar, all inside the 12-month
window, all from the actor that both controls the customer relationship and
owns the data (OJK).

**(a) POJK 8/2026 — announced 7 July 2026 — mandates daily transaction-level
reporting.** Kontan (7 Jul 2026) reports OJK issued POJK 8/2026 governing
"pelaporan data transaksi pendanaan LPBBTI **secara harian**" — daily funding-
transaction data reporting by all licensed P2P lenders into two systems, **Pusat
Data Fintech Lending (Pusdafil)** and the **Fintech Data Center (FDC)**. The same
article states the regulation also covers "mekanisme dan cakupan permintaan
informasi penerima dana atau borrower" — mechanisms and scope for requesting
borrower information. That is, in substance, the transaction-level, cross-lender,
borrower-linked evidence layer this candidate proposed to sell. Announced
three weeks before this scan. [Level A — article fetched.]

**(b) Pusdafil is an operating, mandatory, state-run cross-lender data hub —
and it pre-empts the Upside Flag.** Loan-level reporting to Pusdafil became
mandatory for every fintech lending provider from **1 July 2024** (investor.id,
29 Feb 2024; cnbcindonesia, 21 Feb 2024); 102 providers were already integrated
as of Nov 2021 (kontan, 9 Nov 2021). The candidate's Upside Flag was a
"cross-lender shared fraud-signal network… similar in structure to a credit
bureau." That network exists, is compulsory, is operated by the regulator, and
is being upgraded to daily granularity. The Upside Flag is not upside; it is the
incumbent. [Level B/A.]

**(c) SLIK's scope has already been extended past "credit history."** The memo
scored absorption distance 6.5 on the premise that "SLIK's scope is credit
history, not revenue/receivables verification." OJK required fintech lending
providers to become **SLIK reporters from 31 July 2025** (kontan, 19 Jun 2025),
following the new SLIK POJK issued Aug 2024 (kontan, 13 Aug 2024). SLIK is
being actively widened, not held static — the exact opposite of the "orthogonal
to every incumbent roadmap" reading that a 6.5 requires. [Level C — headline,
date, source; three concordant headlines.]

**(d) OJK is already performing the detection itself, with full data access.**
In the Crowde case, OJK's own investigators completed a criminal investigation
finding **fictitious lending to 62 borrowers**, and handed suspects to the
Jakarta Selatan prosecutor in January 2026 (ANTARA News, 28 Jan 2026; Bloomberg
Technoz, 28 Jan 2026; Infobanknews, 28 Jan 2026). Fictitious-receivables
detection at a licensed lender was executed by the supervisor, not by a vendor.
[Level C — three concordant headlines.]

**(e) The bank-side buyer's revealed response is in-house control, not
procurement.** BNI's answer to KUR fraud exposure is "pengawasan berlapis hingga
audit rutin" — layered supervision and routine internal audit (Info Indonesia,
13 Jul 2026). OJK's own anti-fraud push (POJK anti-fraud for all LJK, Aug 2024;
"OJK Wajibkan Bank Terapkan Strategi Anti-Fraud," Kompas.com, 17 May 2026;
"Cegah Fraud, OJK Perketat Pengawasan Internal Bank," investor.id, 24 Jul 2026)
mandates *internal* detection capability at the regulated entity. A mandate to
build an internal control function is not a mandate to buy an external
verification SaaS — it more often funds headcount and core-system modules.
[Level C.]

**Conclusion: K3 = FAIL.** Absorption distance capped at **3** ("adjacent
incumbent/state program exists" understates it; an announced regulation shipping
the data layer is worse than 3, but 3 is the floor of the relevant band).

---

## 3. ATTACK 2 — Competition is understated, and the activity is now LICENSED

**(a) OJK created a licensed regulatory category for exactly this economic
function.** **POJK 29/2024 (Pemeringkat Kredit Alternatif / PKA — "Innovative
Credit Scoring")** was issued in January 2025. PKA providers deliver "layanan
penilaian kelayakan, kondisi, dan profil konsumen" — assessment of a subject's
creditworthiness, condition and profile — using innovative/alternative data
sources, sold to financial institutions. The regulation covers "prinsip dan
ruang lingkup PKA, kelembagaan, tata kelola, penyelenggaraan PKA, pengawasan,
penghentian kegiatan dan **pencabutan izin usaha**" — i.e. an institutional
licensing regime with revocable business licences. [Level A — Infobanknews
article fetched, 22 Jan 2025; corroborated by RRI.co.id, 29 Jan 2025 and
Liputan6, 21 Jan 2025 headlines.]

This is doubly fatal. It is competition (a licensed incumbent class occupies the
independent-third-party-assessment slot, with registered players — e.g. **VICI
Score**, registered with OJK as an Innovative Credit Scoring fintech since Jan
2022, SWA.co.id; **CLIK / PT Kredit Biro Indonesia Jaya**, an operating private
credit bureau, SWA.co.id 26 Jun 2024). And it is a founder-fit barrier: selling
independent assessment of a borrower's financial condition into OJK-supervised
lenders in Indonesia is a **licensed activity**, not a self-serve API business.
**POJK 30/2025 + SEOJK 34/2025**, strengthening ITSK governance and risk
management, take effect **July 2026** (Stabilitas.id 7 Feb 2026; Iconomics
7 Feb 2026: "Regulasi yang Efektif Juli 2026"). The compliance perimeter is
tightening precisely now. [Level C for POJK 30/2025 specifics.]

**(b) The memo's classification of the open-finance layer is stale — and the
staleness cuts against the candidate.** The memo treats Brick and Ayoconnect as
"infrastructure rails a fraud-detection product sits on, not analytics-layer
competitors," citing Brick's coverage of the seven largest banks. As of this
scan, **Brick's public product line is payments only** — Disbursement API, BI
Fast, Payment Link, E-Wallet Acceptance, QRIS, Virtual Account, Checkout —
with *no* income verification, bank-statement analysis, financial-data
aggregation, or underwriting product listed (onebrick.io, fetched 30 Jul 2026).
**Brankas** likewise now leads with Direct/Disburse/Payment Infrastructure and
an Open Finance API Hub (brankas.com, fetched 30 Jul 2026). Ayoconnect's
`/products/financial-data` path returns 404.

Three separately funded Indonesian open-finance companies built consented
bank-data aggregation for lending decisions and have visibly repositioned toward
payments. That is not a competitive vacuum; it is a **demand verdict** on the
adjacent product. The rails the candidate assumed are also less certain than the
memo's ">90% of bank accounts" claim implies. [Level A — three sites fetched.]

**(c) Local point competitors exist in the verification stack.** Verihubs
(Indonesian) lists **"Income Check"** and **"KYB (Know Your Business)"** among its
enquiry categories alongside its published ID/liveness/deepfake products
(verihubs.com, fetched 30 Jul 2026). [Level B.]

**(d) The forensic incumbent won the actual work.** When Indonesia's flagship
financial-statement fraud broke, the engagement went to **FTI Consulting**
("Indonesian unicorn eFishery hires FTI Consulting amid fraud allegations,"
Consultancy.asia, 11 Feb 2025; FTI's recovery report covered by DealStreetAsia,
24 Feb 2025). Not to a SaaS tool. [Level C — headlines.]

**Competition capped at 4** (Protocol §6: refuted claims cap the relevant
dimension at 4). Note this is *not* because a direct Indonesian SaaS clone was
found — a targeted Indonesian-language index search for an Indonesian AI
financial-statement-fraud-detection vendor returned only commentary pieces, no
vendor. Eighteen months after a $315M scandal, in a market with 90+ licensed
lenders and hundreds of KAPs, **nobody local built it**. Absent whitespace with
a screaming trigger event is weak evidence of opportunity and strong evidence of
absent willingness to pay.

---

## 4. ATTACK 3 — K4 bootstrap bar COLLAPSES

The claimed path: ~200–250 reachable customers, 150 × $10k = $1.5M ARR. Each
term fails.

**Denominator is shrinking, not stable.** Licensed fintech lenders (pindar) fell
from 101 (Feb 2024) → 98 (Jul 2024) → 96 (Jan 2026) → 95 (Mar 2026) → **94
(Jun–Jul 2026)** (InvestorTrust 1 Jun 2026; Bisnis.com 4 Jul 2026; Kompas.com
series). OJK's moratorium on new P2P licences was **still not lifted as of March
2026** (Bloomberg Technoz, 26 Mar 2026), and Bisnis.com (23 Feb 2026) forecasts
further consolidation and exits: "Pinjol Legal Kian Berkurang, Konsolidasi dan
Exit P2P Lending Diprediksi Meningkat." [Level C — many concordant headlines.]

**A material share of the denominator cannot buy anything.** As of March 2026,
**8 multifinance companies and 11 pindar had not met minimum equity**
(Infobanknews, 5 May 2026); as of June 2026, **14 P2P lenders were still below
the Rp12.5bn minimum equity** (kontan, 6 Jun 2026). CNBC Indonesia (5 May 2026):
"Jumlah Multifinance Modal Cekak Naik Dua Kali Lipat" — the count of
thin-capital multifinance doubled. A capital-deficient lender fighting for its
licence does not sign a new verification subscription. [Level C.]

**Most of the multifinance denominator has no corporate-financial-statement
problem at all.** OJK data as reported: total multifinance receivables
Rp512.14T (Feb 2026); **multiguna (consumer multipurpose) alone Rp256.77T ≈ 50%**
(kontan/Infobanknews, May 2026); vehicle financing Rp402.49T (May 2026); and
**productive financing only Rp242.08T, contracting −1.97%** (kontan, 13 Jul
2026). The candidate's buyer is the lender exposed to a corporate running dual
books. That is the productive/working-capital slice — the minority slice, and
the shrinking one. Captive auto and consumer lenders, which dominate the count,
buy consumer credit scoring, not corporate revenue verification. [Level C.]

**Arithmetic.** Strip the captive consumer/auto multifinance, the
capital-deficient firms, and the exiting pindar, and the genuinely reachable
corporate-exposure buyer set is plausibly **40–70 institutions**, not 200–250. At
the memo's own unevidenced $10k ACV that is **$0.4M–$0.7M ARR at 100%
penetration**. Even at the original 250, 150 paying customers is **60–75% market
penetration** — a figure no bootstrap first-product achieves, and the memo
supplies no Indonesian ACV comparable to anchor the $10k anyway (its own text:
"ACV rests on inference, not a confirmed local comparable"). The remaining route
to $1M is corporate credit-risk teams at the ~15–20 banks that do real corporate
lending — an enterprise-sales motion, which **fails G6 by construction**.

**K4 = FAIL. Bootstrap revenue quality capped at 3** (Protocol §5 anchor: "ACV
has no Indonesian pricing comparable").

---

## 5. ATTACK 4 — does the buyer pay for this anywhere? (partial hit)

Not conclusively refuted, but the evidence points to **episodic engagement
spend, not subscription spend**:

- The realised spend after Indonesia's canonical case went to a forensic
  consultancy (FTI Consulting, Feb 2025), engagement-priced.
- The pre-investment control that was supposed to catch it had **already been
  bought and had already failed**: Malaysia's KWAP publicly stated its eFishery
  investment "sudah lewati kajian" — had passed review (Editor Indonesia,
  20 Jul 2026; ketik.com, 17 Jul 2026; Konteks.co.id, 21 Jul 2026). A buyer
  whose existing diligence spend failed does not automatically conclude "buy a
  different tool"; the Indonesian commentary reaction was governance reform and
  valuation-method diversification (kompas.id, 26 Jan 2025), not analytics
  procurement.
- Banks' revealed response is internal controls and routine audit (BNI, Jul 2026).

**WTP marked down 7 → 5** ("budget exists, unowned or slow"). Not capped —
this attack is suggestive, not dispositive.

**K2 note (not a kill, but the oracle is thinner than scored).** The memo scores
K2 PASS on the theory that revenue reality is inferable from bank flows, tax
data and counterparty confirmations. The one Indonesian case with a documented
resolution path was surfaced by an end-2024 audit and then resolved by a
forensic engagement with full counterparty access — not by transaction analytics
(Wikipedia, "An audit at the end of 2024 showed that eFishery allegedly
committed financial fraud"; Consultancy.asia 11 Feb 2025). Revenue inflated
through round-tripped or related-party cash produces *genuine* bank inflows,
which is precisely what the proposed oracle reads. Maklumat.id's Feb 2025 piece
is titled "Alarm yang Terabaikan" — alarms that were ignored — implying the
binding constraint was governance and incentive, not signal availability. Data
position marked down 5.5 → 4.

---

## 6. Re-scored under Protocol §6 caps

| Dimension | Was | Now | Basis |
|---|---|---|---|
| Severity | 9 | 9 | unchanged — the loss evidence is real |
| Bootstrap revenue quality | 5 | **3** | K4 fail; no Indonesian ACV comparable; denominator shrinking |
| WTP | 7 | 5 | spend is episodic/forensic, not subscription |
| Data position | 5.5 | 4 | commodity rails, and the rails providers pivoted away |
| Absorption distance | 6.5 | **3** | POJK 8/2026, Pusdafil, SLIK extension — capped |
| Competition | 5 | **4** | licensed PKA category + credit bureaus + FTI — capped |
| Compounding moat | 6 | 3 | the cross-lender network is Pusdafil, state-run and compulsory |

**Weighted = 0.20(9) + 0.20(3) + 0.15(5) + 0.15(4) + 0.10(3) + 0.10(4) +
0.10(3) = 1.80 + 0.60 + 0.75 + 0.60 + 0.30 + 0.40 + 0.30 = 4.75.**

Bar is 7.0. **Eliminated.** Two independent kill tests (K3, K4) also fail
outright, so the score is redundant.

This is a textbook instance of Program A's **Class 1** law carried into Program
B: an accepted anchor — the state — already occupies the neutral-verifier slot,
and is actively extending it (daily transaction reporting, July 2026).

---

## 7. Verification log

**Level A — full document fetched and read this session**
- kontan.co.id, "OJK Terbitkan POJK 8/2026, Atur Pelaporan Data Transaksi Pendanaan Fintech Lending" (7 Jul 2026) — daily LPBBTI transaction reporting to Pusdafil + FDC; borrower-information request mechanism.
- Infobanknews, "OJK Terbitkan Aturan Pemeringkat Kredit Alternatif, Simak Detailnya" (22 Jan 2025) — POJK 29/2024; PKA scope, licensing, revocation.
- onebrick.io homepage (fetched 30 Jul 2026) — payments-only product line; no income verification / bank-statement / financial-data product listed.
- brankas.com homepage (fetched 30 Jul 2026) — Direct, Disburse, Payment Infrastructure, Open Finance API Hub.
- ayoconnect.com/en/products/financial-data (fetched 30 Jul 2026) — HTTP 404.
- verihubs.com/en (fetched 30 Jul 2026) — published products are ID/liveness/deepfake/OTP; "Income Check" and "KYB" appear as enquiry categories only.
- finbox.in homepage (fetched 30 Jul 2026) — India-focused; **Indonesia not named**. The India-origin bank-statement-analysis competitor hypothesis is **NOT confirmed**; do not cite FinBox as an Indonesian competitor.
- en.wikipedia.org/wiki/EFishery — "An audit at the end of 2024 showed that eFishery allegedly committed financial fraud"; no whistleblower or auditor named.

**Level B — indexed with source+date, partially corroborated**
- Pusdafil mandatory reporting from 1 Jul 2024 (investor.id 29 Feb 2024; cnbcindonesia 21 Feb 2024); 102 providers integrated (kontan 9 Nov 2021).
- Consultancy.asia, "Indonesian unicorn eFishery hires FTI Consulting amid fraud allegations" (11 Feb 2025); DealStreetAsia, FTI recovery report (24 Feb 2025).

**Level C — Google News index headline + source + date only (not read)**
- SLIK reporting obligation for fintech lending from 31 Jul 2025 (kontan 19 Jun 2025); new SLIK POJK (kontan 13 Aug 2024).
- Crowde: OJK investigation found fictitious disbursement to 62 borrowers, suspects handed to Kejari Jaksel (ANTARA 28 Jan 2026; Bloomberg Technoz 28 Jan 2026; Infobanknews 28 Jan 2026).
- Licensed pindar counts: 101 (Feb 2024) → 96 (Jan 2026) → 95 (Mar 2026) → 94 (Jun–Jul 2026); moratorium not lifted (Bloomberg Technoz 26 Mar 2026); consolidation forecast (Bisnis.com 23 Feb 2026).
- Equity shortfalls: 8 multifinance + 11 pindar (Infobanknews 5 May 2026); 14 P2P below Rp12.5bn (kontan 6 Jun 2026); thin-capital multifinance doubled (CNBC Indonesia 5 May 2026).
- Portfolio mix: receivables Rp512.14T (kontan 6 Apr 2026); multiguna Rp256.77T (Infobanknews 22 Jul 2026); vehicle Rp402.49T and productive Rp242.08T −1.97% (kontan 13 Jul 2026).
- POJK 30/2025 + SEOJK 34/2025 ITSK governance, effective Jul 2026 (Stabilitas.id 7 Feb 2026; Iconomics 7 Feb 2026).
- Anti-fraud mandates: POJK anti-fraud for LJK (ANTARA/Tirto 13–14 Aug 2024); "OJK Wajibkan Bank Terapkan Strategi Anti-Fraud" (Kompas.com 17 May 2026); "Cegah Fraud, OJK Perketat Pengawasan Internal Bank" (investor.id 24 Jul 2026).
- BNI layered supervision + routine audit on KUR (Info Indonesia 13 Jul 2026).
- KWAP: eFishery investment "sudah lewati kajian" (Editor Indonesia 20 Jul 2026; ketik.com 17 Jul 2026; Konteks.co.id 21 Jul 2026).
- VICI Score registered with OJK as Innovative Credit Scoring fintech (SWA.co.id 17 Jan 2022); CLIK credit bureau (SWA.co.id 26 Jun 2024).

**Attempted and NOT established (do not treat as findings)**
- Big 4 Indonesia productised audit/forensic analytics (Helix / Halo / Clara / Omnia deployment on Indonesian engagements) — pwc.com/id returned 403, kpmg.com/id returned 404. The memo's "project-based, not productized" claim is **unrefuted**, though it is not load-bearing for the verdict.
- Mid-tier KAP tooling supply via global network membership — **not verified**.
- CaseWare IDEA / Diligent ACL Indonesian distribution — **not verified** (403/404).
- MindBridge or AppZen Indonesian customers — **not found, not disproven**.
- Exact count of OJK-licensed multifinance companies as of 2026 — **not obtained**; the K4 argument is built on portfolio composition and equity-shortfall counts instead, which do not depend on it.

---

## 8. What survives

A narrow residual gap, explicitly *outside* everything absorbed above:
**pre-investment and covenant-monitoring verification of private-company revenue
for VC/PE funds and the ~15–20 banks doing genuine corporate lending.** SLIK,
Pusdafil, POJK 8/2026 and the PKA regime are all aimed at consumer/UMKM
borrowers and licensed lenders — none of them verifies a private corporate's
revenue for an equity investor.

But that gap does not rescue the candidate under Program B's constraints: the
buyer count is two dozen, not two hundred; the demonstrated spend is episodic
forensic engagement (FTI, Big 4) rather than subscription; the sale is
enterprise (G6 fail); and the one buyer type with the strongest possible
motivation — a sovereign pension fund that lost Rp880bn — had already paid for
diligence that did not catch it.

## 9. What would revive this

- Evidence an Indonesian VC/PE or bank corporate-credit team has signed a
  **recurring** verification subscription at a disclosed price (would establish
  the missing ACV comparable and flip WTP).
- OJK or IAPI mandating **independent third-party** (not internal, not
  network-supplied) continuous verification of borrower or issuer financials —
  a mandate that creates an external buyer rather than an internal function.
- Confirmation that PKA licensing under POJK 29/2024 does **not** capture a
  corporate-facing, lender-sold verification tool, removing the licensing
  barrier. (Worth a lawyer's read before this is ever reconsidered.)
