# Adversarial Verification: JKN Claims Integrity Analytics (hospital-facing)

Date: 2026-07-30. Slug: `jkn-claims-integrity`. Role: refute.

**Claims under test.** (1) K3 PASS — "SATUSEHAT/Kemenkes+KPK serves the payer/regulator
relationship, not the hospital's own pre-submission risk-reduction need… **no evidence of that
extension was found as of this search**." (2) Absorption distance 3, Competition 6, weighted 6.4.
(3) WTP 7 on the ~20% pending-claim rate as a hospital-side pain. (4) K4 PASS on 300-500 private
hospitals × ~Rp100M/yr (self-flagged "weak (inference, not cited)").

## What I searched

WebSearch budget was already exhausted (200/200) at task start. Fell back to Google News RSS
(id + en-ID locales) via curl, a Google News `batchexecute` URL decoder built for this task
(scratchpad `decode.py` — resolves RSS article IDs to publisher URLs), direct publisher fetches,
and WebFetch against primary sources. Queries (EN+ID) covered: SATUSEHAT klaim / dokumen klaim
elektronik; digitalisasi klaim BPJS; verifikasi klaim AI; SmartClaim; SISCA JKN; VIBI; purifikasi
klaim; aplikasi koding INA-CBG; software casemix; audit klaim internal / verifikasi internal /
Vedika modul; Stranas PK klaim fiktif; Permenkes/PMK 6 tahun 2026; INA-DRG/iDRG; e-Klaim versi
terbaru; klaim pending Rp4,8T / SLA; ARSSI tarif + pending klaim; AdMedika/Fullerton; Nexmedis;
iziklaim/Medlinx; SIMRS bridging vendors; Indonesian AI medical-coding startups; regional/global
claims-fraud vendors. Also scraped vendor sites (trustmedis, nexmedis, eclinic, iziklaim, medlinx,
assist.id, teramedik) and the SATUSEHAT Platform developer documentation directly.

## What I found

### 1. The K3 "no evidence found" clause is dead: Kemenkes has already specified the hospital-side claim layer

The SATUSEHAT Platform documentation (`satusehat.kemkes.go.id/platform/docs/id/`) carries two
interoperability modules that did not surface in the Phase-1 memo:

- **`interoperability/klaim-bpjs/` — "Pembiayaan Kesehatan Klaim BPJS Kesehatan."** Hospital→BPJS.
  FHIR `Account, ChargeItem, Claim, ClaimResponse, Coverage, Invoice` plus the clinical resources
  from the outpatient/emergency/inpatient modules. A 14-stage flow in which the facility submits
  Coverage, registers the encounter and clinical data, sends ChargeItem/Invoice, **the E-Klaim
  system submits the Claim bundle together with the RME to BPJS-K**, BPJS-K returns purification
  results as `ClaimResponse`, and **the facility manages purification follow-up through a custom
  non-FHIR `PurificationDecision` resource**, before BPJS-K returns final verification. References
  "Petunjuk Teknis Aplikasi INA-CBG v5" and E-Klaim(INACBG)↔V-Klaim integration guidance.
- **`interoperability/klaim/` — "Pembiayaan Kesehatan Klaim Asuransi Swasta/Non BPJS."** Primary
  payor, secondary/AKT, and OOP. Adds `CoverageEligibilityRequest/Response`, `PaymentNotice`,
  `PaymentReconciliation`, and custom `BillingStatus`/`ChargeItemResponse`. Insurers verify against
  submitted documentation and the module carries a **"kamus rule number validasi"** — a codified
  validation-rule dictionary. **Version 1.3 released 6 January 2026.**

Both are currently sandbox/in-development — but the candidate's K3 pass rested on the absence of any
such extension, and the hospital-side correction workflow (`PurificationDecision`) is precisely the
pre-submission/pending-correction function the venture was to sell. Note this also lands on the
sibling candidate `private-health-claims-validation.md`.

### 2. The hospital-facing pilot is live, in the 12-month window

**Dokumen Klaim Elektronik (DKE)** — Kemenkes, in coordination with BPJS Kesehatan, selected
hospitals nationally as development partners for electronic claim documents on the SATUSEHAT
platform. RSUD Cabangbungin (Bekasi) was assessed **17 July 2026**; the program bridges the RME from
the hospital's SIMRS (KHANZA in this case) into SATUSEHAT↔BPJS interoperability and adds electronic
signature (TTE) to the claim documents, for a claims process the hospital director describes as
"faster, more efficient, transparent, accountable… with higher digital document security"
(Pena Insight, 19 Jul 2026; Pojok Satu Bekasi, 20 Jul 2026; Jabarprov, 20 Jul 2026 — Jabarprov and
Pojok Satu behind WAF/403, content read via Pena Insight).

This is the missing half. Once the RME travels with the claim into a platform the hospital does not
control, the Phase-1 mechanism — "BPJS pays claims verified only against provider-authored
documents… no independent, real-time cross-check" — stops being true by construction. The KPK's own
2024 method (4,341 billed physiotherapy cases vs 1,072 medical-record entries) becomes a payer-side
query, not a rare joint audit.

### 3. The payer already shipped the exact function, with political top-cover

- **SmartClaim JKN** — one of four AI innovations BPJS Kesehatan launched **3 February 2026**
  (with SISCA JKN, Smart Analytics, Smart Insight). Verbatim: *"sistem verifikasi klaim berbasis AI
  untuk membantu verifikator mempercepat proses verifikasi klaim JKN,"* explicitly to **detect fraud
  and improve the quality of initial claim examination**; staged rollout, still verifier-assisted at
  launch (detikNews, 3 Feb 2026, d-8338381).
- **VIBI — "Aplikasi Verifikasi Bersama Berbasis I-Logic."** Built by BPJS Kesehatan, used
  **jointly by BPJS verifiers and FKRTL hospitals**, handling pending / dispute / non-payable
  claims (ANTARA Sulteng, 26 Mar 2024). A hospital JKN manager quoted: hospitals and BPJS had long
  done joint verification "namun belum ada sistem atau aplikasi yang mendukung proses verifikasi
  tersebut" — VIBI is that system, and it is free to hospitals. Still piloting per BPK (below).
- **Luhut / DEN, 18 Jun 2026:** "AI Bisa Tekan Fraud BPJS, Potensi Hemat Rp20 Triliun" (Tirto).
- **Dirut BPJS Kesehatan (Prihati Pujowaskito), 8 Jul 2026:** fraud losses in health "terus turun
  hingga menjadi Rp6 triliun"; audiensi at KPK to extend the BPJS–KPK anti-fraud MoU that expired
  March 2026 (CNN Indonesia, Kompas, IDX Channel, Tirto, Suara).
- **Stranas PK, 10-12 Jun 2026:** the national anti-corruption strategy team visited RSUD Kapuas
  specifically to observe **SIMRS/RME implementation and the JKN claim process**, framing valid
  electronic medical records as the control that prevents fictitious claims (KIP Kapuas, ANTARA
  Kalteng, KaltengOnline, InfoPublik).
- **Hospital-side integration is already being done as ordinary IT work:** "RSUD Ulin Pelajari
  Implementasi **Full Bridging SIMRS Menuju Smart Claim**" at RSD Idaman Banjarbaru (Mediakita /
  Headline9, 25 Jun 2026).

K3 requires *"existing roadmap, announced regulation, active procurement, funded implementation, or
an incumbent already entering the exact function."* All five categories are present simultaneously.
**K3 fails.** Absorption distance 3 was, if anything, still too high — the honest score is 2.

### 4. The WTP hook is misdiagnosed: the 20% pending rate is a payer-governance failure

BPK's audit findings (via Monitor Indonesia, 3 Mar 2026): **1,972,046 pending claims worth
Rp4,817,980,313,560 as of October 2024** (up from 521,970 cases at the Jan-2024 trough). BPK
attributes this to the absence of (a) a standardised pending-claim confirmation format to hospitals,
(b) **any SLA** for pending-claim resolution, and (c) performance indicators — in 2024 BPJS's KPI was
changed to "efektivitas verifikasi klaim," counting only disputes, so **pending-claim resolution
stopped being measured at all**. Confirmation in the field is still done by **Excel file**, one SEP
at a time, with no answer-editing and character limits. Unresolved claims expire after six months,
forcing hospitals to resubmit with changed coding at a **lower** INA-CBG value.

A hospital-side pre-submission scrubber cannot fix a counterparty that has no SLA, no format
standard, and no KPI. The candidate's WTP-7 rests on a pain whose causal locus is on the other side
of the table.

Confirmed by what the buyer association actually asked for. At ARSSI's Seminar Nasional XIII
(Ritz-Carlton Jakarta, **22 Jul 2026**), chair Dr. drg. Iing Ichsan Hanafi restated the ~20% pending
rate — *"Setiap bulan rumah sakit harus memperbaiki klaim yang pending… sangat memengaruhi cash flow"* —
and ARSSI's formal recommendations were directed **at government and BPJS**: accelerate the derivative
regulations of **Permenkes No. 6/2026**, form a national transition task force, build a
*"sistem pending klaim yang transparan, seragam, dan akuntabel,"* review tariffs against real cost,
and pilot value-based payment. On its own side ARSSI committed to association-level governance
(clinical pathway, tata kelola klaim, pencegahan fraud) — not to procuring software. On AI, ARSSI
positioned it as back-office/administrative efficiency pending clearer regulation.

### 5. Buyer-incentive inversion — and a Scope Test problem

Under INA-CBG the claim *is* the hospital's revenue. A tool whose function is to flag the hospital's
own upcoding, unbundling, or unsupported volume reduces the hospital's own income and transfers the
benefit to BPJS. The provider-side product that hospitals would actually buy — code to the full
legitimate tariff, get paid faster, fewer pendings — is revenue-cycle workflow, in which integrity is
incidental. Program B's Scope Gate excludes exactly that: *"Integrity as an incidental feature of a
larger workflow is out."* The version that passes the Scope Test has a negative business case for the
only buyer identified as viable.

The candidate's own third kill condition also fired: with Kejaksaan Negeri Jember pursuing three
hospitals and an orthopaedic surgeon over JKN claim manipulation across Oct 2025 – May 2026 (ANTARA,
Radar Jember, beritajatim, AFU.id, KISS FM Jember 25 Jul 2026), a formalised, discoverable internal
self-audit trail is a litigation exhibit as much as a control. That suppresses WTP rather than
raising it.

### 6. Bottom-up ARR collapses on both terms

- **Reachable customers.** Dirjen Kesehatan Lanjutan Kemenkes, Dr. Azhar Jaya (22 Jul 2026):
  ~3,200 hospitals, **>2,000 private, ~1,200 government**; per BPJS data of 30 Apr 2026, **66.53%
  of FKRTL serving JKN are private**. The nominal pool is larger than assumed — but the *payable*
  subset must clear three filters the memo did not apply: budget, not already served free
  (VIBI + Kemenkes e-Klaim + DKE + SmartClaim), and willing to formalise a discoverable audit trail.
- **ACV.** ARSSI, 22 Jul 2026: private hospitals receive **no government subsidy**, are paid the
  **same BPJS tariff as government hospitals**, and tariffs have **not been adjusted for nearly three
  years** while operating costs rise — forcing "efisiensi." **PMK No. 6/2026, effective 12 June
  2026**, puts hospital tariffs under Kemenkes/governor-set **maximum ceilings**, pushes unit-cost
  discipline, and requires **audited financial statements submitted to Kemenkes**
  (manajemenrumahsakit.net webinar reportage, Jul 2026). Earlier: 439 hospitals in East Java
  reported Rp500B in losses tied to BPJS (harian.disway.id, Jan 2025). This is a margin-squeeze
  climate with a state-set price ceiling, not a Rp100M/yr discretionary-SaaS climate. The Rp60-150M
  figure was self-flagged as uncited inference; nothing found supports it, and every available
  pricing anchor (free e-Klaim, free VIBI, bridging bundled into SIMRS contracts) points lower.

**K4 fails** on evidence quality: both terms of customers × ACV move against the path, and the ARR
math never had a cited Indonesian comparable.

### 7. Competition 6/10 was too generous

Named entrants in or immediately adjacent to the exact function, none in the Phase-1 memo:

| Player | Position |
|---|---|
| **BPJS SmartClaim JKN** (Feb 2026) | AI claim verification + fraud detection at the payer |
| **BPJS VIBI** (I-Logic joint verification) | Hospital+payer shared pending/dispute workflow, free |
| **Kemenkes SATUSEHAT `klaim-bpjs` / `klaim` + DKE pilot** | National hospital-side claim rails, incl. `PurificationDecision` and a validation-rule dictionary |
| **Nexmedis** (East Ventures + Forge Ventures, Feb 2025) | AI HIS + MaleoCDS returning **ICD-10 codes** in seconds inside the EMR; MaleoScribe ambient documentation; **400+ facilities, 10k+ clinicians** — owns the coding-integrity upstream |
| **AdMedika Group** → **Fullerton Health** (acquisition completed Jun 2026) | Hospital host-to-host claim bridging (Bethsaida, RS Azra), BPJS Kesehatan partnership, TPA scale, now regional capital |
| **iziklaim / PT Medlinx Asia Teknologi** (since 2009) | "Sistem Klaim Elektronik" for hospitals ↔ Asuransi/TPA/ASO |

Plus SIMRS vendors treating full-bridging-to-SmartClaim as standard integration work. Honest
competition score: **3-4** ("funded incumbents with Indonesian traction"), not 6.

## Verdict: REFUTED

The literal Phase-1 sentence — no dedicated Indonesian claims-integrity vendor selling to private
hospitals — is still roughly true, and it is still the wrong question. Every load-bearing assumption
underneath it has moved:

1. **K3 fails outright.** Kemenkes has published the hospital-side claim modules (`klaim-bpjs` with
   `PurificationDecision`; `klaim` v1.3 with a validation-rule dictionary, 6 Jan 2026), is running
   the **Dokumen Klaim Elektronik** hospital pilot as of **17 Jul 2026**, and BPJS shipped
   **SmartClaim JKN** (AI claim verification + fraud detection) on **3 Feb 2026** alongside the free
   joint-verification app **VIBI** — with Luhut/DEN, KPK, and Stranas PK all pushing the same
   function in June-July 2026. That is roadmap, regulation, funded implementation, and an incumbent
   in the exact function, at once.
2. **The mechanism is being retired.** Attaching the RME to the claim bundle inside a
   state-controlled platform removes "verified only against provider-authored documents" as a
   standing condition — which was the entire premise.
3. **The WTP hook is misattributed.** BPK locates the Rp4.8T / ~2M pending-claim problem in BPJS's
   own absence of SLA, format standard, and KPI. Provider-side software cannot reach it, and ARSSI's
   July 2026 asks are aimed at the payer, not at a vendor.
4. **The buyer's incentive is inverted**, and the version of the product that hospitals would buy
   fails Program B's own Scope Test as incidental-integrity workflow.
5. **K4 fails** — state-ceilinged tariffs (PMK 6/2026), a three-year tariff freeze, no subsidy, and
   an uncited ACV.

Weighted 6.4 does not survive. Re-scoring absorption 2, competition 3, WTP 4, revenue quality 3 puts
this well under the 7.0 bar even before the K3/K4 kills, which are dispositive on their own.

## Surviving gap (narrow, service-shaped)

The one adjacent function the state cannot absorb without auditing itself: **hospital-side appeal
evidence** — reconstructing, from the hospital's own RME/DKE record, the proof that a pended,
disputed, or expired claim was correct, so the hospital can contest a BPJS decision. Incentives are
aligned (the buyer recovers cash rather than surrendering it), the absorber would have to build a
tool that argues against its own verification, and BPK has documented that ~2M claims sit in a
process with no SLA and Excel-based confirmation. Against that: VIBI is BPJS's free answer to the
same workflow, the volume is concentrated in a few hundred high-volume hospitals under a tariff
ceiling, and the work is closer to a forensic/consulting engagement than SaaS. Adjacent and
similarly service-shaped: forensic claim reconstruction for hospitals already under Kejaksaan/KPK
investigation. Neither is the claimed platform.

## Key sources

- SATUSEHAT Platform docs — `interoperability/klaim-bpjs/` (Claim bundle + RME via E-Klaim, BPJS
  purification, `PurificationDecision`) and `interoperability/klaim/` (v1.3, 6 Jan 2026, "kamus rule
  number validasi") — https://satusehat.kemkes.go.id/platform/docs/id/interoperability/klaim-bpjs/ ;
  https://satusehat.kemkes.go.id/platform/docs/id/interoperability/klaim/
- Pena Insight, 19 Jul 2026 — RSUD Cabangbungin selected for Kemenkes **Dokumen Klaim Elektronik**
  development, assessed 17 Jul 2026, RME bridging via KHANZA SIMRS + TTE —
  https://www.penainsight.com/rsud-cabangbungin-bekasi-terpilih-dukung-pengembangan-dokumen-klaim-elektronik-satusehat-kemenkes
  (also Jabarprov 24770 and bekasi.pojoksatu.id/1137463552, both WAF-blocked to fetch)
- detikNews, 3 Feb 2026 — BPJS four AI innovations; **SmartClaim JKN** = "sistem verifikasi klaim
  berbasis AI… mendeteksi fraud" —
  https://news.detik.com/berita/d-8338381/optimalkan-layanan-jkn-bpjs-kesehatan-hadirkan-4-inovasi-berbasis-ai
- ANTARA Sulteng, 26 Mar 2024 — **VIBI**, BPJS joint hospital–payer verification app —
  https://sulteng.antaranews.com/berita/309027/tingkatkan-kualitas-hasil-verifikasi-klaim-melalui-aplikasi-vibi
- Monitor Indonesia, 3 Mar 2026 — BPK: 1,972,046 pending claims / Rp4.82T (Oct 2024); no SLA, no
  format standard, KPI dropped pending claims in 2024; Excel-based confirmation; VIBI still piloting —
  https://monitorindonesia.com/hukum/read/2026/03/621652/klaim-pending-bpjs-kesehatan-tembus-rp-4-8-triliun-tanpa-sla-dan-tanpa-indikator-kinerja
- Berita Kota, 22 Jul 2026 — ARSSI Seminar Nasional XIII: 66.53% of FKRTL private (BPJS data
  30 Apr 2026); ~3,200 hospitals / >2,000 private / ~1,200 government (Dirjen Azhar Jaya); no
  subsidy, same tariff, ~3 years without adjustment; recommendations aimed at government/BPJS —
  https://beritakota.id/seminar-arssi-2026-rumah-sakit-swasta-jadi-tulang-punggung-jkn-desak-reformasi-tarif-bpjs/
- CNN Indonesia, 8 Jul 2026 — Dirut BPJS: fraud losses down to Rp6T; KPK MoU renewal (expired
  Mar 2026); Rp190T contributions, 286M participants (2025) —
  https://www.cnnindonesia.com/nasional/20260708140052-12-1378333/dirut-bpjs-kerugian-fraud-bidang-kesehatan-turun-jadi-rp6-triliun
- Tirto, 18 Jun 2026 — "Luhut Sebut AI Bisa Tekan Fraud BPJS, Potensi Hemat Rp20 Triliun" —
  https://tirto.id/luhut-sebut-ai-bisa-tekan-fraud-bpjs-potensi-hemat-rp20-triliun-hycy
- Stranas PK at RSUD Kapuas, 10-12 Jun 2026 (SIMRS/RME + JKN claim process observation) — KIP Kapuas;
  ANTARA Kalteng; KaltengOnline; InfoPublik "KPK Soroti Digitalisasi RSUD Kapuas" (11 Jun 2026)
- manajemenrumahsakit.net, Jul 2026 — PMK No. 6/2026 effective 12 Jun 2026: Kemenkes/governor
  maximum tariff ceilings, unit-cost discipline, audited financials to Kemenkes —
  https://manajemenrumahsakit.net/2026/07/reportase-webinar-sustainability-dan-strategi-keuangan-rumah-sakit-pasca-pmk-no-6-tahun-2026/
- East Ventures, 18 Feb 2025 — Nexmedis funding; product pages (MaleoCDS ICD-10 output, AI-powered
  HIS, MaleoScribe; 400+ facilities, 10k+ clinicians) — https://east.vc/id/berita/press-release/nexmedis-sistem-informasi-kesehatan-ai-meraih-pendanaan-dari-east-ventures-dan-forge-ventures ;
  https://nexmedis.com
- Telkom Indonesia, 9 Mar 2026 + Media Asuransi, 3 Jun 2026 — Fullerton Health completes AdMedika
  Group acquisition —
  https://www.telkom.co.id/sites/berita/id_ID/news/telkommetra-lakukan-penataan-portofolio-bisnis-admedika-group-siap-masuki-fase-pertumbuhan-baru-ke-kancah-regional-di-bawah-fullerton-health-3669
- iziklaim / PT Medlinx Asia Teknologi — "Sistem Klaim Elektronik bagi peserta Asuransi/TPA/ASO…
  digunakan oleh Rumah sakit" — https://iziklaim.co.id ; https://medlinx.co.id
- Mediakita / Headline9, 25 Jun 2026 — RSUD Ulin studies RSD Idaman's "Full Bridging SIMRS Menuju
  Smart Claim"

## Caveats

- The SATUSEHAT `klaim-bpjs` and `klaim` modules are documented as **sandbox / in development**, and
  DKE is at pilot stage (July 2026). The refutation does not claim they are in production; K3's bar
  is evidence of likely absorption within 12 months, and roadmap + funded implementation + launched
  incumbent product all sit inside that window.
- Jabarprov, Pojok Satu, Tirto, Media Indonesia and Tempo article bodies were WAF/paywall-blocked;
  where used, the same facts were taken from an accessible outlet carrying the story (Pena Insight,
  CNN Indonesia, Berita Kota, Monitor Indonesia) or from the Google News headline+date+outlet only,
  which is marked as such.
- BPJS's "fraud losses down to Rp6T" is a self-reported figure from the payer and is **(unverified)**
  as an independent measurement; it is cited as evidence of institutional activity, not of efficacy.
- No Indonesian pricing comparable for hospital-side claims-integrity SaaS was found in either
  direction, so the ACV critique rests on the tariff/margin environment and on free substitutes,
  not on a competing price point.
