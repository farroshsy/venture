# Adversarial Verification: Land Double-Certificate, Overlap & Title-Risk Detection

Date: 2026-07-30. Program B. Role: refute the candidate
(`research/candidates/land-double-certificate-detection.md`, raw weighted
6.2). Claims under test: competition 7 ("no productized Indonesian
competitor found"), absorption distance 6 ("BPN's digitization doesn't
cover third-party DD-as-a-service; no cited roadmap into this function"),
WTP 5, revenue quality 5 (Rp500K–2M/report or Rp2–5M/month to 300–500
notary offices), moat 7 (compounding flagged-parcel database).

## Method and its limits (stated up front)

The session's WebSearch budget (200/200) was already exhausted before this
task began. Evidence below comes from Google News RSS listings (id + en-ID
+ en-IN locales) via WebFetch. **Article bodies could not be retrieved**:
Google News redirect links do not resolve through WebFetch, duckduckgo.com
and html.duckduckgo.com return "certificate has expired", mojeek returns
403, and atrbpn.go.id is JS-rendered (empty to WebFetch). Findings are
therefore **headline-and-date level, corroborated across independent
outlets**, not full-text verified. Where the exact scope of a state
feature matters, that limit is flagged inline. This is sufficient to
establish that a function *exists and is being promoted*; it is not
sufficient to describe every field it exposes.

## 1. Absorption: the incumbent shipped the exact function five weeks ago

The candidate's K3 passed on "no cited roadmap for any state actor to ship
a third-party diligence product in 12 months." That is now false at the
scan date, not in 12 months.

**ATR/BPN launched a prospective-buyer certificate check in Sentuh
Tanahku, announced 24 June 2026**, carried by the ministry and at least
four independent outlets within 48 hours:

- atrbpn.go.id, 24 Jun 2026 — "Cek Informasi Tanah **Sebelum Membeli**,
  Manfaatkan Fitur Berbagi Akses di Aplikasi Sentuh Tanahku"
- Media Indonesia, 24 Jun 2026 — "ATR/BPN Dorong Transparansi Transaksi
  Tanah, **Calon Pembeli Kini Bisa Cek Sertipikat** Lewat Sentuh Tanahku"
- RRI.co.id, 26 Jun 2026 — "Fitur Aplikasi Sentuh Tanahku ATR/BPN
  Permudah **Cek Tanah sebelum Transaksi**"
- Triaspolitika.id, 26 Jun 2026 — "Kementerian ATR/BPN Permudah Pembeli
  Cek Sertipikat Lewat Fitur Bagikan Akses"

This is not a plan. It is in field rollout: Kantah Kabupaten Tabanan
promoting it 30 Jun 2026 (suryaindonesia.net); Kantah Kaimana running
roadshows to Bapenda, Bawaslu and Navy personnel 8 and 13 Jul 2026
(Kaimana News); TVRI News 19 Jul 2026, "Kementerian ATR/BPN Dorong
Masyarakat Manfaatkan Sentuh Tanahku".

The candidate named the exact buyer — "property buyers... doing manual DD"
and the bank/notary pre-transaction check — and the state now serves that
buyer directly, free, with consent-gated access to the authoritative
record. K3's evidence bar ("an incumbent already entering the exact
function") is met by the incumbent that owns both the data and the
customer relationship.

Surrounding the same function, all within the scan window:

- **Verified-PPAT directory in the app** (atrbpn.go.id + Kompas.com +
  Kompas.tv, 16 Dec 2025) — the counterparty-verification half.
- **Barcode / "kode rahasia" authentication of e-certificates** (Kompas,
  14 May 2026: "Dilengkapi Kode Rahasia, Sertifikat Tanah Elektronik
  Diklaim Minim Risiko Manipulasi") — anti-forgery moved into the
  document, not into a third-party detector.
- **Swaplotting (owner self-mapping of unmapped parcels)** — attacks the
  KW4-6 unmapped population that the candidate identified as the
  detectable-overlap gap. (Feature list is headline/summary level.)
- **Girik void from 2 Feb 2026** (Bisnis.com 2 Feb; Harianjogja 3 Feb;
  MetroTVNews 4 Feb 2026) — retires a whole class of pre-1997 informal
  competing claims by decree.
- **"Mulai 2028 layanan pertanahan sepenuhnya digital"** (ANTARA News
  Megapolitan, 6 Oct 2025) and Nusron's framing of digitization *as* the
  anti-mafia instrument (atrbpn.go.id, 20 Oct 2025: "Perkuat Digitalisasi
  Pertanahan untuk Melawan Mafia Tanah").
- **BPN pre-empting double certificates regionally**: lampungcorner.com,
  23 Jul 2026, "Lampung Rawan Sertifikat Ganda, ATR/BPN Siapkan Langkah
  Antisipasi"; KPK + ATR/BPN + Pemprov Lampung joint resolution track
  (sundalanews, Pikiran Lampung, 23 Jul 2026).

Absorption distance 6 is not defensible. The correct read is 2–3: an
incumbent state program is not merely adjacent, it has entered.

## 2. WTP: the incumbent price for this exact function is Rp50,000 — or free

The candidate anchored ACV to KJPP appraisal fees (Rp1–3.5M) while
conceding those are for *value*, not title risk. The real anchor for title
risk exists and is two orders of magnitude lower:

- **Tribunbanyumas.com, 8 May 2026** — "Cara Cek Keaslian Sertifikat Tanah
  Tak Perlu ke BPN: **Cukup Lewat PPAT, Biaya Rp50 Ribu**"; companion
  piece Tribunjateng.com same day quoting the Head of BPN Banyumas.
- Sentuh Tanahku self-check: **free** (Kompas.tv 23 Dec 2025, "Cara Cek
  Sertifikat Tanah Asli atau Palsu, Bisa Gunakan Aplikasi HP"; Kompas.com
  27 Mar 2026).
- Berbagi Akses buyer check (Jun 2026): **free**.

A product priced at Rp500K–2M per report is 10–40× the statutory cost of
the authoritative check, and the subscription path (Rp2–5M/month to notary
offices) asks a PPAT to pay Rp24–60M/year for a signal that is redundant
to the Rp50k check the PPAT is *legally the one who performs* and already
bills to the client. No evidence was found of any Indonesian buyer paying
a third party for title-risk verification. WTP 5 → 3.

## 3. K2 fails on the residual: what is detectable is now free, what is not free is not detectable

Split the problem in two.

**(a) Forged/stale certificate presented by a seller.** Detectable by
reading BPN's record — and that read is now free and consent-native
(Berbagi Akses, barcode scan). No paid layer survives here.

**(b) A genuine second certificate issued by BPN itself, or an
insider-mediated transfer.** In the candidate's own flagship case (Mbah
Tupon), the register said the transfer was valid; an external product
reading the register would have returned "clean". The corrupted artifact
*is* the oracle. Detecting overlap between two issued certificates
requires the cadastral geometry of both — but 92.2% of the 97.4M
certificated parcels were still paper as of March 2026 (Nusron via
detik.com, 31 Mar 2026: only 7.8% electronic), and the KW4-6 unmapped
parcels where duplicates concentrate have no digital geometry at all.
You cannot geo-match a polygon that does not exist.

Independent expert confirmation of the oracle bound, dated two days before
this memo: Universitas Airlangga FH, 28 Jul 2026 — "Masalah Tumpang Tindih
Sertifikat Tanah, Pakar FH UNAIR Tegaskan **Pentingnya Pembuktian
Yuridis**." Overlap is resolved by juridical proof in court, not inferred
from records. That is Program B's K2 kill condition (fabricated at source
/ off-system collusion), applied to the residual that the free state
feature does not already cover.

## 4. Data position and moat: the compounding database cannot lawfully be built

Berbagi Akses is **owner-consent, per-parcel, owner-initiated**. That is
the legal shape of land-data access in Indonesia: a startup gets no bulk
history, and each lookup is authorized by the very party whose parcel is
being examined. A "cross-customer flagged-parcel database" would mean
retaining third parties' ownership data obtained under single-transaction
consent — squarely exposed under UU 27/2022 (PDP) and BPN's own data
rules, and rendered largely moot once the owner can produce the
authoritative view for free. The candidate's own moat 7 and data 4 rest on
an asset that is legally hazardous to accumulate and commercially
redundant once assembled. Data 4 → 3; moat 7 → 3.

The candidate's stated kill condition was "ATR/BPN opens bulk historical
API access to third parties." BPN did something functionally worse for the
venture: it kept the data closed to third parties *and* gave the end buyer
a free channel to it. Both sides of the business model are foreclosed at
once.

## 5. Competition: the whitespace claim is literally true and commercially irrelevant

No dedicated Indonesian title-verification startup surfaced (consistent
with the candidate). But the slot is not empty of *supply*:

- **State, free**: Sentuh Tanahku Berbagi Akses, barcode/kode-rahasia
  authentication, verified-PPAT directory, swaplotting, blokir mechanism.
- **PPAT at Rp50k**: a licensed intermediary holding the practical
  monopoly on the authoritative check — the check runs through a PPAT, so
  a startup cannot perform it and would resell it.
- **Law firms / KJPP**: bespoke DD (Fast Legal, Putranto Alliance), the
  paid tier that exists because it delivers legal opinion and liability,
  which software does not.
- **Regional proof-of-model that cuts the wrong way**: Landeed (Hyderabad,
  Y Combinator; INR 19.5 Cr pre-seed 2022, $8.3M led by Draper Associates
  Jan 2023, $5M Jan 2025, Rs 30 Cr deployment reported by Rediff 7 Jul
  2026) works because Indian state land records are publicly queryable in
  bulk — the precondition Indonesia denies. It is also a $13M+ VC-funded
  build, i.e. evidence against the bootstrap path (G6), not for it.
- **Titl** (US, $2.5M seed, PR Newswire 14 Jan 2026) — "instant &
  automated title" — same shape, same public-records precondition.
- Indonesian proptech funding in the period went elsewhere (e.g. GORO's
  $1M pre-seed, TNGlobal 2023 — fractional property, not title).

Competition 7 (whitespace verified) → 4: not funded Indonesian
incumbents, but the exact function is occupied by a free state product
plus a statutory Rp50k intermediary.

## 6. The bottom-up ARR path collapses

- **Per-report path**: Rp500K–2M against a free/Rp50k substitute; needs
  thousands of paying transactions; zero cited instance of anyone paying
  it. Fails the rubric's own "needs thousands of customers" caution.
- **Subscription path**: 300–500 notary/PPAT offices at Rp2–5M/month is
  the entire $1M ARR thesis. PPATs are the incumbent providers of the
  check, not its buyers; the spend would be net-new cost for a
  non-authoritative duplicate of a service they bill at Rp50k. The
  Indonesian notary office is a small practice; no comparable software
  spend at that ACV was found.
- **Bank path**: banks instruct notaries and pass the fee to the borrower;
  they buy KJPP *valuation*, and the candidate already conceded that is a
  different job. Reaching bank risk/legal committees is enterprise sales —
  G6 failure.

Revenue quality 5 → 3.

## 7. Rescored

| Dimension | Candidate | Post-refutation | Basis |
|---|---|---|---|
| Severity | 9 | **9** | unchanged; Rp23.3T averted 2025, 3,260 cases, 2026 cases in Kukar, Samarinda, Lampung |
| Revenue quality | 5 | **3** | no ACV comparable survives; Rp50k anchor |
| WTP | 5 | **3** | incumbent price Rp50k / free; no cited third-party payer |
| Data position | 4 | **3** | consent-gated per-parcel; bulk access denied; PDP exposure |
| Absorption | 6 | **2** | incumbent shipped the exact buyer-facing function Jun 2026 |
| Competition | 7 | **4** | free state feature + statutory PPAT channel occupy the function |
| Moat | 7 | **3** | flagged-parcel database unlawful to accumulate and redundant |

Weighted = 0.20(9)+0.20(3)+0.15(3)+0.15(3)+0.10(2)+0.10(4)+0.10(3) =
**4.2** — well below the 7.0 bar. Per protocol §6, refuted claims cap the
relevant dimension at 4; absorption and moat fall further on affirmative
evidence, not merely absent evidence.

## Verdict: REFUTED

The severity is real and undisputed — this remains one of Indonesia's most
damaging integrity failures. The *venture* does not survive. Three
independent causes, any one sufficient:

1. **K3 fired.** ATR/BPN shipped prospective-buyer certificate checking
   (Sentuh Tanahku "Berbagi Akses", 24 Jun 2026) five weeks before the
   scan, and is actively pushing it through regional land offices. The
   absorption the candidate said had no roadmap already happened.
2. **K2 fails on the residual.** What is inferable from records is now
   free; what is not free (BPN's own insider-mediated double issuance,
   pre-1997 paper/unmapped parcels) is not inferable from records — 92.2%
   paper as of Mar 2026, and UNAIR experts state the remedy is juridical
   proof in court (28 Jul 2026).
3. **K4 fails.** The only Indonesian price anchor for this exact function
   is Rp50,000 via PPAT (May 2026) or free in-app. Both ARR paths price
   10–40× a free/near-free authoritative substitute, and the subscription
   path sells to PPATs — the parties who perform the check today.

The candidate's own named kill condition was BPN opening bulk data. BPN
did the reverse-and-worse: kept third parties out while giving the end
buyer free access. That forecloses the supply side and the demand side
simultaneously.

## Surviving gap (narrow, different shape)

Not open-market title DD. What survives is **portfolio-side collateral
title monitoring for lenders**: continuous re-checking of parcels *already
pledged to the bank* — roya/discharge state, blokir/sita flags, HGB expiry
— where the bank is the creditor of record and therefore has standing and
consent for the whole book, and where the customer owns the list. That is
monitoring an existing portfolio (K1 clean, no bulk-registry ask), not
detecting fraud in the open market, and it overlaps the repo's
`collateral-existence-monitoring` candidate rather than reviving this one.
Also unresolved and unaddressed by any product found: the pre-1997
paper/KW4-6 population — but that is a cadastral survey problem (PTSL,
swaplotting), not a software-detection problem.

## Key sources (all headline-level; article bodies unretrievable this session)

- atrbpn.go.id, 24 Jun 2026 — "Cek Informasi Tanah Sebelum Membeli, Manfaatkan Fitur Berbagi Akses di Aplikasi Sentuh Tanahku"
- Media Indonesia, 24 Jun 2026 — "ATR/BPN Dorong Transparansi Transaksi Tanah, Calon Pembeli Kini Bisa Cek Sertipikat Lewat Sentuh Tanahku"
- RRI.co.id, 26 Jun 2026 — "Fitur Aplikasi Sentuh Tanahku ATR/BPN Permudah Cek Tanah sebelum Transaksi"
- Triaspolitika.id, 26 Jun 2026; suryaindonesia.net (Kantah Tabanan), 30 Jun 2026; Kaimana News, 8 & 13 Jul 2026; TVRI News, 19 Jul 2026
- Tribunbanyumas.com / Tribunjateng.com, 8 May 2026 — PPAT certificate authenticity check, **Rp50,000**
- Kompas.tv, 23 Dec 2025; Kompas.com, 27 Mar 2026 — free app-based authenticity check
- atrbpn.go.id + Kompas.com + Kompas.tv, 16 Dec 2025 — verified-active PPAT directory in Sentuh Tanahku
- Kompas.com, 14 May 2026 — e-certificate "kode rahasia", "minim risiko manipulasi"
- detik.com, 31 Mar 2026 — Nusron: only **7,8%** of certificates electronic; "Ada Ribuan Polemik soal Tanah di RI, Baru 219 Kasus yang Selesai di 2026"
- Bisnis.com 2 Feb 2026 / Harianjogja 3 Feb 2026 / MetroTVNews 4 Feb 2026 — girik void from 2 Feb 2026
- ANTARA News Megapolitan, 6 Oct 2025 — "Mulai 2028 layanan pertanahan sepenuhnya digital"
- atrbpn.go.id, 20 Oct 2025 — "Menteri Nusron Perkuat Digitalisasi Pertanahan untuk Melawan Mafia Tanah"
- lampungcorner.com, 23 Jul 2026 — "Lampung Rawan Sertifikat Ganda, ATR/BPN Siapkan Langkah Antisipasi"; sundalanews / Pikiran Lampung, 23 Jul 2026 — KPK + ATR/BPN + Pemprov
- Universitas Airlangga (unair.ac.id), 28 Jul 2026 — "Masalah Tumpang Tindih Sertifikat Tanah, Pakar FH UNAIR Tegaskan Pentingnya Pembuktian Yuridis"
- detakkaltim.com & korankaltim.com, 25 May 2026 (Kukar transmigrant double certificates); kutaipanrita.id, 6 May 2026 (DPRD Samarinda)
- Economic Times 23 Jan 2025 / Times of India 25 Jan 2025 / YourStory 13 Sep 2022 & 24 Jan 2023 / Entrackr 24 Nov 2022 / Rediff 7 Jul 2026 — Landeed funding and model
- PR Newswire, 14 Jan 2026 — Titl, $2.5M seed, automated title
- TNGlobal, 9 Aug 2023 — GORO $1M pre-seed (Indonesian proptech, not title)
