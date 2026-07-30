# PHASE1-MATRIX — Calibrated Results of the 30-Industry Trust-Failure Scan (Indonesia)

Calibration date: 2026-07-29. Rubric committed: 2026-07-28, before scoring (research/RUBRIC.md). Inputs: 30 industry profiles (research/industries/), one adversarial verification memo (research/verify/mining-nickel.md), and the cross-cutting analysis (research/CROSSCUT.md).

## 1. Method

**Pre-registered rubric.** All scores were produced against the rubric committed 2026-07-28: seven dimensions (severity 20%, market 20%, WTP 15%, blockchain necessity 15%, urgency 10%, competition 10%, defensibility 10%), defined anchors per dimension, a four-part kill test where any failure eliminates regardless of score, and an elimination threshold of 7.0 after normalization. The process pre-committed: ten independent research agents (three industries each), an adversarial refutation pass for any candidate scoring ≥6.5 raw that passed the kill test, and a single calibration judge (this document) normalizing all raw scores. A refuted gap claim caps competition at 4.

**Calibration process.** Raw scores from the ten agents were inconsistent in how they treated unverified numbers and whitespace claims. This pass applied three corrections uniformly: (a) any market score ≥6 whose sizing is explicitly "(unverified)" was reduced to 5, the conservative default band — market 9 requires a verified >$1B path and no candidate had one; (b) any competition score ≥7 not backed by an adversarial verify memo was reduced (per the evidence rule that a "nobody has built this" claim requires a documented adversarial search, not an instinct); (c) the one refuted candidate had its competition capped at 4 and every score resting on the refuted premise re-anchored. The kill test was then re-applied to all 30.

**Limitations.** (1) Only one adversarial verification memo was executed (mining-nickel, the only candidate that crossed the ≥6.5-raw trigger and passed the kill test); all other competitive-whitespace claims are therefore unproven by this study's own standard. (2) The verify memo's search ran on degraded tooling (Google News RSS and direct fetches only; major search engines blocked), a coverage limitation it discloses. (3) Several headline loss figures are collusion losses (see §5, COLL) that overstate the addressable problem for verification products; scores were read net of this where flagged. (4) Regional/subnational datasets referenced in the scan carry an unresolved provenance gap; no score in this matrix depends on them. (5) Prior-session context on public procurement is respected: LPSE data access is not the gap — methodology is, and publicly attributing fraud findings to named officials carries documented personal risk (criminalization/SLAPP exposure) to whoever operates such a product. (6) TAM figures marked "(unverified)" in the underlying files remain unverified here; nothing in this matrix launders them into verified numbers.

## 2. Normalization adjustments (raw → normalized)

| Industry | Change | Reason |
|---|---|---|
| mining-nickel | comp 5→4; wtp 7→5; chain 7→5; urgency 8→7; moat 6→5; **6.6 → 5.7** | Gap claim REFUTED (verify memo): EU notified bodies accept RMAP+/IRMA scheme audits — no custodian-independent pit proof is mandated; compliance spend flows to auditors, not custody software; SIMBARA + IDSurvey surveyors + DSI one-door exports form an accepted (state) trusted-operator stack. |
| gold-bullion | wtp 6→5; moat 6→5; **6.2 → 5.9** | Assurance-spend and buyer-count justifications are unquantified "(unverified)"; the cross-org network effect is hypothetical with ~8 institutional buyers. Whitespace claim ("no Indonesian startup found, searched July 2026") has no verify memo — unproven. |
| palm-oil | market 7→5; **6.4 → 6.0** | "$250M–1B (sizing unverified)" fails the market-7 anchor. |
| workforce-credentials | chain 7→5; **6.3 → 6.0** | Own kill verdict concedes the flag state is the accepted intermediary and post-2020 centralized hardening is holding. |
| halal-certification | comp 7→5; **5.9 → 5.7** | Competition 7 ("only academic pilots found") requires an adversarial verify memo; none exists. |
| real-estate-presale | comp 7→5; **5.4 → 5.2** | Same rule: "whitespace-adjacent" claim unverified. |
| construction | market 6→5; **5.6 → 5.4** | Capturable TAM "(unverified)". |
| domestic-logistics | market 7→5; **5.1 → 4.7** | "$250M–1B" rests on a funded-competitor inference, not a named study. |

All other raw scores were consistent with the anchors and stand. Note: even before calibration, no candidate reached 7.0 (raw maximum 6.6). The empty shortlist in §6 is therefore robust to these adjustments, not produced by them.

## 3. Ranked matrix (all 30)

Verdict key: KILL = failed kill test; SCORE = passed kill test but below 7.0; REFUTED = adversarial memo disproved the gap claim.

| # | Industry | Core trust failure | Norm. | Verdict | Kill reason (one line) |
|---|---|---|---|---|---|
| 1 | Invoice financing & P2P fraud | Fake and double-pledged invoices behind loans | 6.1 | KILL | An invoice-level extension of AFPI's FDC or an OJK-mandated central registry solves it; DJP e-Faktur already holds the authoritative invoice record. |
| 2 | Migrant worker & seafarer credentials | Forged certificates incl. ministry-insider blanks | 6.0 | KILL | STCW/IMO e-certs are PKI under flag-state authority; Kemenhub owns the root of trust, post-2020 hardening holds, SISKOP2MI is the mandated channel. |
| 3 | Palm oil traceability | Illegal-origin FFB laundered into EUDR-bound supply | 6.0 | KILL | EU accepts centrally filed DDS; Surveyor Indonesia/Koltiva/osapiens are accepted operators shipping now; the binding constraint is farmgate data capture, which a ledger cannot make true. |
| 4 | Gold provenance & custody | Issuer-insider branding (109t); unverifiable 1:1 backing | 5.9 | SCORE | Passes the kill test but normalizes at 5.9 < 7.0: ~8 institutional buyers, no compliance deadline mandating provenance tech, whitespace claim unverified, LBMA GBI/OJK could close the gap top-down. |
| 5 | Cold chain (food & pharma) | Self-reported temperature logs at custody handoffs | 5.9 | KILL | A neutral monitoring vendor whose feed is contractually accepted (Controlant model) is a trusted single operator and already wins global pharma. |
| 6 | Savings cooperatives (KSP) | Self-reported books hiding related-party lending | 5.9 | KILL | OJK/Kemenkop-run reporting plus incumbent core-banking vendors deliver member visibility; supervision capacity, not tamper-evidence, binds. |
| 7 | Land titles & BPN | Forged/double certificates, insider transfers | 5.9 | KILL | Only BPN can legally operate the registry; a private tamper-evidence layer has no legal force and collapses into a politically hard procurement against the funded state e-certificate program. |
| 8 | Health records & BPJS claims | Phantom billing, fabricated medical records | 5.8 | KILL | Fraud is fabricated at source, so tamper-evidence misses it; BPJS/Kemenkes are accepted central operators and analytics incumbents ship detection. |
| 9 | Trade finance & LC fraud | Fictitious LC documents; duplicate pledging | 5.8 | KILL | Singapore's ABS registry and Swift/MonetaGo prove a centralized hash DB under a trusted operator stops duplicate financing; OJK/BI could mandate it without a chain. |
| 10 | Mining provenance & quotas | Ore laundering via rented RKAB (dokumen terbang) | 5.7 | REFUTED | EU compliance runs through scheme audits (Harita RMAP+, Vale IRMA), not pit-custody software; the state (SIMBARA/Perpres 94/2025, DSI) is absorbing the layer; venture-scale claim collapses. |
| 11 | Halal certification integrity | Certified products failing physical integrity (porcine DNA) | 5.7 | KILL | SIHALAL is the statutory central registry; the 2025 failure is physical testing capacity; the paying customer is absent (state subsidizes UMK). |
| 12 | Ports, customs & trade documents | Bribery for clearance; manifest mismatch | 5.7 | KILL | INSW/NLE is the accepted state-run neutral operator; the only buyer is government/consortium — TradeLens died on exactly this with Maersk behind it. |
| 13 | Insurance claims & fraud | Phantom/inflated medical claims | 5.7 | KILL | Payer-side analytics on data BPJS/insurers already hold; Shift Technology and BPJS's own AI ship it today; no custodian-independent proof needed. |
| 14 | Digital identity & VCs | Deepfake KYC bypass; synthetic identities | 5.7 | KILL | Dukcapil root + licensed PSrE are accepted operators; Privy/VIDA/Peruri can ship W3C VCs as a feature; compliance revenue already captured. |
| 15 | Construction payments | Contested progress certificates; SOE arrears | 5.4 | KILL | Banks/SCF platforms are accepted intermediaries (Doxa Connex + DBS ship the rails regionally); flagship arrears are insolvency, which no ledger fixes. |
| 16 | Notarial deeds & legalization | Forged authentic deeds in mafia-tanah schemes | 5.3 | KILL | The state is the legally exclusive trust operator; a Kemenkumham hash registry on AHU rails solves it; no evidentiary status for a private ledger under UUJN. |
| 17 | Coffee & cocoa provenance | Origin fraud; parcel-less smallholder EUDR supply | 5.3 | KILL | Accepted intermediaries exist (Enveritas, Koltiva, Dimitra+Surveyor 3M-farmer campaign); EUDR modules already shipped; specialty-fraud-only market unquantified. |
| 18 | Property pre-sales & escrow | Unsegregated, divertible presale buyer funds | 5.2 | KILL | A regulated bank escrow with milestone release solves it (Malaysia HDA precedent); the missing piece is a legal mandate, and developers won't adopt voluntarily. |
| 19 | Pharma track & trace | Counterfeits inside the legal chain | 5.2 | KILL | TTAC is a central DB under trusted BPOM; global serialization vendors already sell Indonesia compliance; residual counterfeiting is physical enforcement. |
| 20 | Zakat & waqf transparency | Opaque flows; distrusted last-mile distribution | 5.2 | KILL | Distrust targets last-mile distribution (an oracle problem); SIMBA/SIWAK are the accepted single-operator path; WTP thin. |
| 21 | Fisheries & aquaculture | Self-declared catch certs; fabricated farm data | 5.0 | KILL | Flag-state certificates are the accepted trust anchor; Wholechain/Trace Register own SIMP-GDST compliance; sector WTP collapsed post-eFishery. |
| 22 | E-commerce counterfeits | Counterfeit listings; account cycling | 5.0 | KILL | Single-operator SaaS and marketplace IP portals already solve it; QR-on-Postgres equals chain for physical goods; funded incumbents saturate. |
| 23 | AI output & media authenticity | Deepfakes defeating eKYC liveness | 4.9 | KILL | C2PA proves PKI + CA (PSrE) suffices without a ledger; eKYC incumbents already ship deepfake detection and will absorb any provenance mandate. |
| 24 | Carbon credits & registries | Hand-reconciled multi-registry records; distrusted baselines | 4.8 | KILL | SRUK is the legally mandated single registry; US$4.8M cumulative exchange turnover in 22 months (IDXCarbon) is no economic base. |
| 25 | Public procurement integrity | Off-system collusion behind clean records | 4.8 | KILL | LKPP is the accepted single operator; fraud happens off-ledger; no aligned paying buyer; documented personal risk to the operator. |
| 26 | Domestic freight & trucking | Paper POD disputes; cargo/fuel theft concealment | 4.7 | KILL | Platforms are accepted trusted operators; e-POD already shipped by McEasy/Kargo/Deliveree; disputes are bilateral, settled by payment leverage. |
| 27 | Diploma & credential verification | Fake diplomas; registry false negatives | 4.7 | KILL | SIVIL/PDDikti is an accepted single operator; gaps are coverage, not trust; state incumbent Peruri already shipping e-ijazah with the ministry. |
| 28 | Professional license verification | Impostors on forged or borrowed credentials | 4.7 | KILL | Free accepted state registries exist; documented frauds are identity-binding failures at point of care, which no ledger fixes. |
| 29 | Migrant remittances & settlement | Placement-layer fraud; KYC exclusion | 4.7 | KILL | BIS Nexus and QRIS cross-border are the accepted multilateral operators; BI bans crypto as payment; payers have no institutional budget. |
| 30 | Renewable energy certificates | Structural double-claim critique; no documented fraud | 3.3 | KILL | TIGR/Evident are accepted single-operator registries; ~US$30M cumulative REC revenue over 5 years supports no standalone company. |

## 4. Survivors

**None.** No industry clears the pre-registered bar (≥7.0 normalized and a clean kill test). This holds even on the uncalibrated raw scores (maximum 6.6).

Two candidates deserve an explicit account of why they are not survivors:

**Gold provenance & custody (5.9)** is the only industry that passes the kill test after calibration, and its evidence quality is the best in the scan for the core claim: the 109-tonne Antam case (13 defendants, six ex-executives sentenced 8 years each, Tipikor 2025; Rp3.31T per indictment, Kompas 2025, vs Kejagung's ~Rp1T alternative estimate, Tempo 2025) proves the issuer's own insiders were the attack vector, so issuer-run verification (CertiEye) cannot certify issuer integrity, and Tamasia (Bappebti via Tempo, 2023) proves periodic reporting hides backing gaps until collapse. That is a genuine "custodian is the failure" structure. It still falls: the buyer universe is roughly two bullion banks, ~5 licensed platforms, and one refiner — one lost anchor account kills the network; assurance-tech spend is unquantified (unverified); no compliance deadline mandates provenance tech; and the whitespace claim was never adversarially verified. What would kill it outright: Antam plugging domestic issuance into the LBMA GBI/aXedras database (live Jan 2025, ~85% refiner digitization mid-2025, LBMA 2025) and OJK mandating a centralized reserve-reporting portal. What would revive it: a POJK/Bappebti rule requiring custodian-independent proof of reserves — worth monitoring, not worth a deep dive now.

**Mining provenance (5.7)** had the highest raw score (6.6) and passed its agents' kill test, which is exactly why it was the one candidate to receive the pre-registered adversarial pass — and the pass refuted it. Harita is under RMAP+ audit and PT Vale under stage-two IRMA (vale.com, Dec 2025); EU Battery Regulation due diligence is satisfied through recognized schemes, with no cryptographic pit-custody mandate; and the state is claiming the layer itself (Perpres 94/2025, SIMBARA downstream expansion May 2026, DSI one-door exports, Bloomberg Technoz Jul 2026). The surviving fragment — satellite-based pit-level ESG evidence sold as audit support — is a service business, not the scored venture.

## 5. Horizontal trust-failure findings

Across 30 industries, four findings dominate (full taxonomy in CROSSCUT.md):

1. **The modal killer is an accepted trusted operator, usually the state.** In the large majority of eliminations, kill test 2 failed because a ministry registry, state utility, or contractually accepted vendor already occupies the neutral-party slot (SIMBARA, SIHALAL, SIVIL, SRUK, INSW, TTAC, Dukcapil/PSrE, LKPP, BPN, Nexus). Indonesia's trust deficits are being answered by state centralization, and regulators, courts, and foreign counterparties accept it.

2. **Off-system collusion (COLL) is the most recurrent failure (9 industries) and no verification product addresses it.** Authorized actors produce clean records while deals are rigged off-platform (DJBC bribery conviction Jul 2026; Antam insiders; LPEI kickbacks). It also taints sizing: headline losses like Mandiodo Rp5.7T and LPEI Rp11.7T are collusion losses that provenance or document rails would not have prevented. Any future candidate leaning on COLL-tainted numbers must be re-scored with them stripped.

3. **Only two failure modes are honestly horizontal:** credential fraud (CRED — one verify-side buyer and workflow across five industries, but issuer adoption is government-dependent and identity binding drags it into the served e-KYC market) and duplicate claims in the lender-facing financial subset (DUP — a receivables/collateral uniqueness registry across trade and invoice financing, MonetaGo precedent, verified gap in FDC/Pusdafil/fidusia). Both, however, sit inside industries that failed the kill test as scored, because a mandated central registry solves each.

4. **Compliance deadlines route money to audit schemes and incumbents, not new rails.** EUDR (Dec 2026), the EU battery passport (Feb 2027), BPOM TTAC (Dec 2025/2027), and mandatory halal (Oct 2026) all create real spend — captured by certifiers, scheme auditors, and entrenched serialization/traceability vendors. "Mandated spend" was repeatedly mis-scored as WTP for a new entrant; calibration corrected this wherever the file itself documented incumbent capture.

## 6. Recommended deep-dive shortlist

**Empty.** Under the pre-registered rubric there are no genuine survivors at ≥7.0, and the instruction not to pad is honored: recommending deep dives here would spend Phase 2 budget disproving what Phase 1 already shows. The result is robust — it does not depend on the calibration adjustments (§2), since no raw score reached 7.0 either.

Recommended next actions instead of deep dives (not shortlist entries): (a) commission the missing adversarial verify memo on gold-bullion's whitespace claim — it is the sole kill-test survivor and the memo is cheap relative to its information value; (b) if any Phase 1.5 re-scoping is undertaken, score the two crosscut-derived product shapes that were never scored as industries — the lender-facing receivables uniqueness registry (DUP) and JKN claims-integrity analytics (~Rp20T/yr KPK estimate, one state buyer) — as ventures in their own right, noting both are non-blockchain shapes; (c) monitor the two revival triggers named in §4 (an OJK/Bappebti custodian-independent proof-of-reserves mandate; EU tightening battery-passport verification beyond scheme audits).

## 7. Verification log summary

- **Memos triggered:** 1 of 30. Per the pre-registered rule (raw ≥6.5 + kill-test pass), only mining-nickel qualified (raw 6.6). Gold-bullion (raw 6.2) fell below the trigger and therefore carries an unverified competitive-whitespace claim — treated as unproven throughout this matrix.
- **Memo outcome:** mining-nickel — REFUTED (2026-07-29). Key evidence: Harita RMAP+ and Vale stage-two IRMA audits satisfying EU due diligence; Perpres 94/2025 and SIMBARA's chain-of-custody/battery-passport framing (MoF expert-staff op-ed, CNBC Indonesia, Jul 28 2026); DSI one-door export regime (Bloomberg Technoz, Jul 24 2026). Consequence applied: competition capped at 4; dependent scores re-anchored; kill tests 2 and 4 re-scored as failures.
- **Memo limitations:** search ran on Google News RSS and direct fetches only (major engines blocked); the finding of "no new private competitor" is therefore weaker than the finding that the buyer path is closing, which rests on primary/state sources.
- **Evidence-rule enforcement in calibration:** four market scores and two competition scores downgraded for unverified bases (§2); contested figures left flagged, not resolved (Pertamina Rp968.5T AGO estimate; IUU losses spanning Rp13T–$23B/yr across mutually inconsistent official sources; kopi luwak ~41% adulteration from a weak secondary source).
- **Standing caveats carried forward:** procurement-adjacent products expose their operator to documented personal legal risk; regional datasets retain an unresolved provenance gap; every "nobody built this" claim without a verify memo remains unproven.
