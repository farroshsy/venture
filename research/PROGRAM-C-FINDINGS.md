# Program C Findings — Displacement, not whitespace

**Judged 2026-07-30 against `PROGRAM-C-PROTOCOL.md` (frozen) and
`BAR-SENSITIVITY-NOTE.md`. 35 candidates in; 24 killed; 11 survive K1–K4,
consolidated into 8 ranked hypotheses. Desk research only. No interviews.**

## (a) Method, and what changed from A and B

A and B scored competition as a negative and screened 86 candidates for empty
rooms. Program C makes a named incumbent with an observed price the entry
requirement: a paying incumbent is the cheapest proof the budget line exists.
Three disciplines were applied harder than the protocol requires.

**K1 needs a damage claim, not a cost claim.** "Serving this segment wouldn't
repay the engineering" is what every vendor says until a competitor forces it —
about two quarters. K1 passes only where fixing it *hurts the existing business*:
reprices a book, cannibalises an enterprise SKU, reverses a published strategy, or
produces an artefact contradicting the vendor's own marketing. That alone killed
four appealing candidates.

**Bars are $6k / $15k / $60k a year.** The undefended $1M bar is not
reintroduced. Thirty buyers at $2k/yr is a success here.

**Adjacent-product candidates inherit no demand proof.** Several proposed a
product *beside* the priced category (audit the indexer, prove custody exit, add
case management). Demand proof of 7 for indexing is not demand proof for
indexing-verification. Where it applies it costs rank, not life.

## (b) Every candidate

K = kill tests that **fail**; `—` = all pass. D = demand proof.

| # | Incumbent / category | Price | D | Complaint | Structural cause | K | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | Chainalysis/TRM — regulator-format reporting (ID) | $50–200k/yr | 8 | 3.8/5, 64 reviews; Indodax CEO Jan 26 | $50k ACV floor; ships a risk score, not OJK/DJP/PPATK filings | — | **→H5** |
| 2 | Same — Indonesian typology labels | as above | 7 | same corpus | Local crime under-labelled | K1 | Kill: labelling *is* their motion; no damage claim |
| 3 | The Graph/Goldsky — index correctness | $2/100k queries | 5 | forum.thegraph.com Apr 24 | All sell availability; nobody owns the numbers | — | **→H8** |
| 4 | Alchemy/Infura — RPC spend caps | $0.45/1M CU | 9 | migration post Oct 25 | Pricing knob | K1 | Kill: eRPC free |
| 5 | Dune — credit metering | ~$399/mo | 7 | Dune's repricing post | Revenue meter | K1 K3 | Kill: fixed in one release |
| 6 | Notabene/Sygna — Travel Rule | unverified | 6 | vendor statements | Counterparty network *is* the product | K2 K4 | Kill: pre-registered |
| 7 | OpenZeppelin Defender (retired) | unpublished | 8 | forum.OZ 2026-03-18 | Revenue is high-ACV audits; SaaS publicly exited | — | **→H7** |
| 8 | Phalcon/Hypernative/Hexagate | $1.2–7.1k/mo | 7 | aisystemscommerce 26 | Analysts set the floor | — | **→H7** |
| 9 | Tenderly | legacy $45/mo | 8 | "Pro Plan Reinstated" 2024-05-03 | Sales-led consolidation | K1 | Kill: reversed once already |
| 10 | Chainalysis — ID VASP AML | unverified | 6 | none found | Localisation cost | K3 K4 | Kill: duplicate of #1 |
| 11 | Blocknative (APIs off Jun 26) | unretrievable | 5 | none found | Commoditised into free RPC | K3 K4 | Kill: dead category |
| 12 | Foundry — fork reproducibility | free | 6 | vendor-authored | none | K1 K4 | Kill: fix ships free as CI default |
| 13 | Fireblocks/Cobo — reconciliation, PoR | $999/mo; $36k/yr | 7 | AWS 2025-02-12 "somewhat manual" | Mandated 70% sits at ICC, so no vendor is in the data path | — | **→H6** |
| 14 | Fireblocks/Copper — sovereign signing plane | $36k/yr | 6 | PeerSpot Sep 24; AWS Mar 26 | Multi-tenant SaaS + SOC/insurance base | K3 | Kill: solo unaudited vendor in a bank's key path needs a team (G6) |
| 15 | Privy/Turnkey — locale wallets | $299–499/mo | 7 | none from a customer | Per-country identity work | K4 | Kill: won't-build, no complaint |
| 16 | Fireblocks/Privy — volume pricing | 0.20%/txn | 7 | AWS Dec 24, Mar 26 | Price indexed to value moved | K1 | Kill: rivals publish per-signature floors |
| 17 | Fireblocks TAP — policy-as-code | bundled | 6 | AWS Mar 26 | Console-first editor | K1 | Kill: two-quarter upsell |
| 18 | Fireblocks — custody exit | $36k/yr | 5 | PeerSpot Sep 24 | Non-exportable shares = retention | K3 | Kill: needs a rival's key material |
| 19 | **Datadog** — telemetry cost | $0.10/GB; $0.10/100 metrics | **10** | G2 Sep 25; HN 41357726 | Revenue is a monotone function of volume emitted; the fix cuts the meter | — | **→H1** |
| 20 | PagerDuty/Opsgenie(EOL)/OnCall(archived) | $21–41/seat/mo | 9 | HN 43283178, named payers | Cheap tiers withdrawn deliberately to consolidate seats | — | **→H4** |
| 21 | Sentry | $26–80/mo | 8 | HN 43725815, 16GB RAM | Self-hosted build is the multi-tenant topology | — | **→H4**; wedge held by GlitchTip/Bugsink |
| 22 | Datadog/Grafana — ID residency | no ID price | 5 | none in EN or ID | No SEA region; residency excludes SaaS | K4 | Kill — **top interview target** |
| 23 | GitHub Actions runners | cut 15–39% Jan 26 | 9 | cost posts | Runner margin | K1 | Kill: repriced in a quarter |
| 24 | Vercel — usage billing | unverified | 8 | not re-sourced | Was architectural; now closed | K1 K4 | Kill: hard caps shipped |
| 25 | **Sumsub/ComplyAdvantage** — DTTOT blocking | $299/mo+$1.85/check | 7 | Capterra Jan 26; no case mgmt, 3 sites | Per-check revenue → zero on a portfolio-wide batch; output is legal documents | — | **→H2** |
| 26 | Offshore SaaS vs Actimize — onshore screening | $99–299/mo vs quote | 7 | same corpus | Cheap tier offshore; onshore tier tier-1 priced | — | Merged into **H2**; alone ≈ a 2-quarter deployment change |
| 27 | Chainalysis + AMLBot — small-VASP KYT | $25.7k–297k vs $99/mo | 9 | Gartner 3.8/5 | Attribution dataset cost base | K1 K3 | Kill: low end held by 5 vendors + free API |
| 28 | PPATK goAML web forms | free | 5 | vendor marketing | Country-specific mapping | K4 | Kill: must beat free-plus-tedium |
| 29 | ComplyAdvantage — case management | $99/mo | 7 | requested by name | Vendors ignored disposition workflow | K1 | Kill: CRUD over an alert queue |
| 30 | **SIMRS vendors** — SATUSEHAT conformance | Rp250k–2.5jt/mo | **9** | RSUD dirut 17 Apr 26, sanctioned anyway | Conformance defined by a third party over systems the vendor doesn't own | — | **→H3** |
| 31 | USSI/SI-INSAF/SAF-GEN — BPR audit | Rp2.6–9.9jt/mo | 7 | **none found** | Rp10–30jt/yr band empty by construction | K4 | Kill: 2nd program to find no BPR complaints |
| 32 | Klikpajak — PPN post-Coretax | Rp75k–999k/mo | 8 | IKPI 34 defects Jan 25 | Pain is DJP-side, not incumbent-side | K1 | Kill: band occupied; DJP client free |
| 33 | Mekari Talenta — payroll | Rp10–50k/emp/mo | 7 | Capterra Jul 26 | Support staffing + bundling | K1 | Kill: hiring line + price-card edit |
| 34 | Assist.id — micro-clinic RME | Rp100–800k/mo | 8 | vendor-authored | Per-facility onboarding floor | K1 K4 | Kill: incumbent gives the tier away free |
| 35 | Vmedis — pharmacy SIPNAP/BPOM | perpetual licence | 6 | **none found** | Perpetual licence can't fund continuous regulatory maintenance | K4 | Kill on evidence only; K1 first-rate — **2nd interview target** |

## (c) Surviving hypotheses, ranked by displacement strength

Ranked on how structural the cause is, how clearly a segment is priced out, and
how credibly one engineer with a $6–60k/yr floor reaches it. **Not market size.**

### H1 — Datadog telemetry cost reduction (1)

**Incumbent** Datadog: $15–23/host/mo, $0.10/GB ingest, $0.10 per 100 *ingested*
custom metrics (billing docs 2026-07-30); Cribl is the sales-led remediation
incumbent. **Complaints** G2 Sep 2025 (3.5★) "costs scale quickly and
unpredictably, especially with logs"; 71 review mentions of cost; HN 41357726
(2024-08-26) "$83,000/year to store your log files for you"; Coinbase ~$65M/yr
(HN 35864540). Best-evidenced set in the corpus. **Cause** revenue is a monotone
function of volume and cardinality emitted; Metrics without Limits cuts indexed
series but still bills on ingest. **Unfixable because** Grafana ships this
recommender free (Adaptive Metrics) — cutting a rival's usage is Grafana's wedge,
while for Datadog the identical feature cuts the number its own growth is priced
on. The only *observed* two-vendor asymmetry in the set. **Segment** orgs at
~$30–300k/yr: 30–50% matters, below Cribl's inferred $40–50k floor. **Change**
read-only API crawler builds a usage graph (dashboards, monitors, SLOs, query
history) → drop-and-aggregate plan → Agent/OTel/Vector config killing series at
source. **Wedge** the audit alone: a read-only report naming unreferenced series
and their cost. **Benchmark** % invoice change 60 days after applying config, ≥5
orgs, against each org's trailing 3-month average at flat host count, plus
false-drop rate. **Fails if** median reduction <15%; any monitor fails to fire
from a dropped series; or fewer than 3 of 5 orgs pay ≥$500/mo.

### H2 — Indonesian statutory watchlist screening and blocking (2)

**Incumbent** Sumsub Compliance $299/mo + $1.85/check; ComplyAdvantage Starter
$99/mo to 2,000 entities; Didit $0.20/check — otherwise Excel and an OJK SIGAP
email. **Complaints** Capterra/Sumsub, Freddy A. (Jan 2026) "Occasional false
positives require manual review"; ComplyAdvantage across Capterra/G2/TrustRadius
(2026) — false positives its most-cited weakness, no case management, teams fall
back to spreadsheets. **Cause** incumbents sell an onboarding-time per-check
decision; SEOJK 38/2017 compels a *portfolio-wide re-screen* triggered by an
emailed police letter, whose outputs are Indonesian legal documents — *berita
acara* within one working day, or *laporan nihil*. False positives come from
matchers mishandling mononyms and transliteration variants (Muhammad/Mochammad).
**Unfixable because** per-check revenue collapses on a recurring whole-table
batch — the fix destroys the meter; onshore single-tenant deployment breaks
multi-tenant economics; statutory annexes need permanent local upkeep. **Segment**
10k–500k customers with a 1–3 person APU-PPT team: 1,472 BPR/BPRS, koperasi,
multifinance, 26 crypto traders, PJP — too small for Actimize, too regulated for
offshore SaaS. **Change** Indonesian-morphology matcher (mononym-aware,
transliteration equivalence, §7a field separation) scoring a parsed DTTOT/DPPSPM
against the customer table as an onshore batch, emitting statutory documents with
an audit trail; no PII leaves the tenant. **Wedge** matcher plus the two
documents, against a CSV export. **Benchmark** on one real or
ground-truth-seeded table: recall and false positives per 100k records against
their current process on the same input, plus SIGAP-email-to-signed-*berita
acara* wall clock against recorded turnaround. **Fails if** FP rate is not ≥50%
below incumbent at equal or better recall; turnaround exceeds one working day; or
any known variant is missed.

### H3 — SATUSEHAT conformance reconciler (3)

**Incumbent** SIMRS implementation "puluhan sampai ratusan juta rupiah"; RME
Rp250k–2.5jt/month; Kemenkes dashboards free. **Complaint** RSUD Sosodoro
director Ani Pudjiningrum, 17 Apr 2026 (blokbojonegoro.com): the hospital had
"sudah mengupdate RME 100 persen sesuai dashboard Kemenkes" and was sanctioned
anyway; letter YM.02.02/D/971/2026 sanctioned 1,306 of ~3,000–3,200 hospitals.
*Weakness: a press quote, not a review site.* **Cause** SIMRS is sold as an
implementation project over the hospital's workflow, while conformance is defined
by Kemenkes DTO over lab, radiology and pharmacy resources the vendor does not own
and that are often still on paper. **Unfixable because** "Bridging SATUSEHAT" is
every SIMRS vendor's headline claim, and an honest per-resource completeness
report contradicts it across the whole installed base at once; closing the real
gap means digitising lab/radiology/pharmacy on site — billable change requests the
vendor is incentivised to keep selling. **Segment** the 1,306 sanctioned
hospitals, mostly type C/D and small private, facing accreditation downgrade or
licence freeze and unable to tell which records SATUSEHAT accepted. **Change**
read-only reconciler on the hospital's own credentials: re-query the FHIR server
for what was *accepted*, diff against source-system encounters and orders per day
and per resource type, emit a remediation queue with rejection reasons,
independent of vendor send logs. **Wedge** the FHIR half only. **Benchmark** two
hospitals, 30 days: accepted counts per resource type against the hospital's own
encounter/order counts, with the Kemenkes dashboard and vendor send log as
baselines. **Fails if** the reconciler agrees with the dashboard within 2% on
every resource type at both sites (no gap to sell); or no hospital grants
read-only use of its credentials.

### H4 — Flat-fee, self-hostable on-call (4)

**Incumbent** PagerDuty $21–41/user/mo; Opsgenie Standard was $19.95, sales ended
2025-06-04, EOS 2027-04-05; Grafana OnCall OSS archived 2026-03-24; Sentry
$26–80/mo. **Complaints** HN 43283178 (2025-03-06) — rdsubhas "We're a large
Opsgenie customer"; karamanolev "too expensive for us... We need something
simple, barebones, that just works"; G2 PagerDuty "Expensive" ×17; HN 43725815 on
Sentry self-hosting at 16GB RAM. **Cause** both cheap options were withdrawn *deliberately* to move seats into
JSM/Compass and Grafana Cloud; Sentry's self-hosted build is its multi-tenant
Kafka/ClickHouse topology. **Unfixable because** reviving either tier reverses a
consolidation each vendor already staffed against and re-creates the seat
cannibalisation it existed to prevent. **Segment** ex-Opsgenie teams of 10–60
engineers, plus residency-constrained shops stranded by the OnCall archival.
**Candidate 22's Indonesian residency market is this same product**, which is why
H4 does not need candidate 22's missing K4 evidence to be built. **Change**
single binary plus Postgres: Alertmanager/webhook ingestion, schedules,
escalation policies, notification delivery pluggable (Twilio, WhatsApp BSP, local
telco) rather than bundled; priced per organisation. **Wedge** escalation and
schedules only — error tracking comes later, since GlitchTip and Bugsink hold
that wedge. **Benchmark** 30 days dual-routed against the org's PagerDuty on the
same alert stream: delivery success rate, median alert-to-notification latency,
TCO at actual seat count. **Fails if** >1% missed; >30s median added latency; or
TCO not below the $21/seat equivalent at 15 seats.

### H5 — Regulator-format reporting for Indonesian crypto licensees (5)

**Incumbent** Chainalysis $50–200k/yr; average contract $174,700, range
$25,700–297,300 (Vendr Feb 2026). **Complaints** KYT 3.8/5 across 64 reviews (rfp.wiki 2026) on tuning burden;
Indodax's CEO attributing sector losses to compliance costs offshore platforms
avoid (pasardana.id, 28 Jan 2026); ChainAware.ai (2026) on $100–500k/yr stacks
sold to small firms. *Honest gap: the cost complaint is customer-voiced, the
format gap is not.* **Cause** a global labelling org plus field sales needs $50k+
contracts, and the deliverable is a generic risk score — not the Bahasa OJK
periodic report, PMK 108/2025 CARF return or PPATK goAML XML the law compels.
**Unfixable because** a $5k/yr tier reprices their global enterprise book, which
is the business, and three Indonesian schemas maintained for ~30 buyers repays
nobody. **Segment** 20+ smaller loss-making licensed PAKD, custodians and
remittance firms carrying Indodax's obligations with no compliance engineering.
**Change** regulator-format-first: treat the filing as the schema and derive it
from exchange ledger plus on-chain attribution, single-tenant on-prem. **Wedge**
one format — the OJK periodic report from a ledger CSV. **Benchmark** for one
licensee: does the filing validate and clear on first submission, and
analyst-hours per period close against their spreadsheet? **Fails if** rejection
persists after two correction cycles; hours saved <50%; or no licensee shares a
period's ledger extract.
**Stated risk** this segment is underserved *because it is insolvent* — OJK
reports ~72% of licensed PAKD loss-making at end-2025, and a buyer who cannot
afford $50k/yr may equally not afford $3k/yr.

### H6 — Custody reconciliation and proof-of-reserve, Indonesia (6)

**Incumbent** Fireblocks Essentials $999/mo (capped ~6 months), Custom from
$36,000/yr plus 0.20%/txn above $1M quarterly outbound; Cobo $299–999/mo.
**Complaints** AWS Marketplace verified — Skibble (2025-02-12) reconciliation
"somewhat manual", accounting alignment by hand; Daniel L. (2024-12-04) "Higher
cost and additional hidden cost for almost any additional requirements".
**Cause** vendors stay jurisdiction-neutral because regulator formats do not
reuse; decisively, Indonesia mandates 70% of customer assets sit at ICC, not at
any vendor, so no custody vendor is in the data path to be the system of record
for reserves. **Unfixable because** per-jurisdiction report engineering plus
Bahasa support for ~26 mostly-unprofitable licensees sits below a $36k/yr floor
and far below an enterprise sales cost base. **Segment** ~19 loss-making smaller
PAKD plus OJK-sandbox tokenization issuers (gold, SBN, property, IDR stablecoin)
reconciling in spreadsheets. **Change** make the evidence the product, not the
vault: an append-only, independently verifiable reserve ledger rebuilt from chain
data, ICC/KKI/CFX statements and the internal ledger via custody-neutral
adapters, emitting OJK packs and a public Merkle proof-of-reserve. **Wedge** the
daily three-way break report — chain versus ICC statement versus ledger.
**Benchmark** one licensee, 30 daily closes: breaks detected against their manual
process on the same days, and time to produce the OJK reserve pack. **Fails if**
fewer breaks than manual; close time not cut ≥50%; or ICC/KKI statements prove
not machine-parseable, killing the adapter thesis outright.

### H7 — Hosted contract monitoring below the analyst floor (7)

Merges candidates 7 and 8: same buyer, same product. **Incumbent** OZ Defender
retired 2026-07-01 (successor: self-hosted OSS or a sales-led Managed Service);
Phalcon $1,200–7,100/mo; Hypernative and Hexagate enterprise-only. **Complaints**
forum.openzeppelin.com, Santiago_Hoyos, 2026-03-18, "[Defender Sunset] No
migration path for CREATE2 deterministic deployments", no OZ reply;
aisystemscommerce (2026) on Hypernative being "out of reach for smaller stores
and early-stage projects". *Weakness: the named complaint concerns deployment, a
feature v1 deliberately excludes.* **Cause** OZ's revenue is high-ACV audits and self-serve SaaS across 70+
networks is margin-dilutive, so it was publicly exited; the paid rivals sell
analyst-backed detection and humans set a $1,200/mo floor. **Unfixable because**
re-entry reverses a published strategy and rebuilds a dismantled support org; for
the rivals, $150/mo means dropping the analysts, invalidating the accuracy claims
that justify six-figure contracts and handing existing accounts a cheaper SKU to
negotiate against. **Segment** protocols under ~20 contracts and ~$10M TVL,
$50–400/mo, no SRE. **Change** multi-tenant control plane over the single-tenant
OSS Monitor binary: per-tenant config isolation in one process pool with shared
cached RPC, so marginal cost per tenant nears zero; deterministic invariants only;
a pre-signed pause tx the customer's own signer broadcasts, never holding keys.
**Wedge** hosted OSS Monitor with bundled RPC and four invariant templates.
**Benchmark** replay 10 known incidents: detection rate and latency against
self-hosted OZ Monitor defaults, plus marginal infra cost per tenant at 25
tenants. **Fails if** >2 of 10 missed; >$8/mo per tenant, which makes $50/mo
unprofitable; or >1 false alert per tenant per week.

### H8 — Independent verification of indexed on-chain data (8)

**Incumbent** The Graph Studio $2/100k queries above 100k free; Goldsky
$0.05/worker-hr, $1.00/100k events. **Complaint** forum.thegraph.com "Subgraph
missing events" (2024-04-08) — a deployed subgraph indexed pre-deployment events
yet stopped indexing new deposits; Infura documents `eth_getLogs`
empty-versus-missing ambiguity near head. **Cause** every vendor sells availability and the SLAs are uptime SLAs; reorgs,
log-range caps and silently failing handlers produce wrong rows that look healthy,
and nobody is contractually on the hook for the numbers. **Unfixable because** —
the strongest single K1 argument in the corpus — the product's primary output is a
measurement of the vendor's own error rate, so shipping it invites liability,
hands rivals a public benchmark, and contradicts the reorg-safe marketing claim.
**Why still last** demand proof 5 measures the *indexing* category (The Graph's
whole network booked $98,667 in Q4 2025), not the verification product, which
nobody sells at any price: the adjacent-product trap from (a). **Segment**
exchanges, custodians and treasury teams whose money depends on indexed data.
**Change** an independent second reader — recompute per-block canonical digests
(log counts, transfer sums, balance deltas) from a different RPC source and diff
against the served database, reorg-aware, with a signed evidence trail. **Wedge**
a CLI diffing one subgraph against a second RPC over a block range. **Benchmark**
a corrupted replay (injected reorg, dropped log range): detection rate, block
latency to detection, false-alarm rate over 30 clean days. **Fails if** any
injected drop is missed; >1 false alarm/week (operators mute it); or no operator
grants read access to their served database.

## (d) What would kill each

- **H1** — Datadog extends Metrics without Limits into a full
  unreferenced-series recommender with relief on *ingest*; or the API stops
  exposing dashboard/monitor definitions; or savings land under 15%.
- **H2** — an incumbent ships an Indonesian batch re-screen at a flat price with
  DTTOT templates; or a free OJK tool satisfies the duty; or vendor due diligence
  blocks an unincorporated solo vendor (G6).
- **H3** — the 30 Jun 2026 window closes the story with no second sanction wave;
  or Kemenkes ships per-resource completeness free; or hospitals withhold
  credentials.
- **H4** — Atlassian extends Opsgenie EOS or ships a cheap JSM alerting SKU; or
  one of 10+ funded entrants reaches a flat self-hosted tier first. A race against
  entrants, not incumbents.
- **H5** — OJK or PPATK publishes a free reference reporting tool; or the cohort
  consolidates to a handful who can afford Chainalysis; or it has no cash.
- **H6** — ICC/KKI/CFX statements prove PDF-only or unavailable in machine form;
  or OJK mandates a single vendor for reserve reporting.
- **H7** — OZ reverses with self-serve under $500/mo; or BlockSec ships an
  unattended sub-$300/mo SKU; or hosting OSS Monitor for others breaches licence.
- **H8** — no operator pays for a number that makes them look bad; or the vendors
  ship first-party attestation, falsifying the K1 argument.

## (e) Founder fit, stated without steering

**The strongest displacement is not blockchain.** H1 has the best demand proof
(10), the best complaint corpus, the only *observed* structural asymmetry, the
cleanest solo wedge, and the only sales motion that never touches procurement. It
has zero blockchain content, zero locale advantage, and the channel relationship
is useless to it. H2 and H3 follow, and are regulated fintech and health IT.

The blockchain-adjacent survivors are H5–H8. H5 and H6 combine blockchain, locale
and channel — the theoretical best fit — and rank 5th and 6th because their buyer
universe is ~26 licensees of whom OJK says ~72% lose money. H7 and H8 are
blockchain-native and globally addressable but carry the weakest evidence.

Plainly: preference and evidence point in different directions. Choosing H5 or H7
for the experience is defensible — it costs roughly two ranks of displacement
strength, and for H5 it accepts a segment that may be unable to pay at any price.

## (f) Honest limits

1. **Desk research, no interviews.** Every segment size, willingness-to-pay and
   "they cannot fix it" is an argument, not an observation.
2. **Complaint evidence is skewed to vocal customers** — HN, G2 and Capterra
   over-represent English-speaking engineers with strong opinions.
3. **That skew systematically penalises the founder's own advantage.** Four
   Indonesian candidates (22, 31, 34, 35) died on K4 with "none found", often
   indistinguishable from "this market writes no public reviews in any language".
   Candidate 31 is the *second* independent program to find no BPR complaint
   corpus. **Candidates 22 and 35 have strong K1 arguments and fail only on a
   search result** — one conversation each would settle them, and they are the
   highest-value items for Interview 0.
4. **Several prices are unverified** and labelled so. Cribl's ~$40–50k floor,
   load-bearing for H1's segment definition, is inferred.
5. **One demand event has already passed.** The SATUSEHAT correction window ran
   30 Mar–30 Jun 2026, closing a month before this judgement; H3's urgency depends
   on a second wave that is not evidenced.
6. **G6 is untested.** Program B found sales motion binding in seven of nine
   cases; this ranking assumes it still binds, which is why H1 and H4 outrank
   better-fitting Indonesian candidates. If Interview 0 shows the channel carries
   third-party software easily, H2, H3, H5 and H6 all move up.
7. **Relation to `BUILD-SPEC.md`** (untracked draft, `forkprint`): Program C kills
   the fork *reproducibility* thesis on K1 (candidate 12 — Foundry ships caching
   free as the CI default). The fork *verification* thesis belongs to H8's family,
   which ranks last on demand proof rather than on its structural argument. That
   draft should be re-read against this finding.

**Nothing here failed for lack of structural weakness.** Of 24 kills, 12 died on
K1 (the incumbent genuinely can, and often already did, fix it), 7 on K4 (no
evidenced complaint), 5 on K2/K3. Structural weakness was abundant; evidence and
buildability were the binding constraints — the opposite of the A/B result, and
the clearest signal that inverting the competition axis was correct.
