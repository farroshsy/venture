# Adversarial Verification: Continuous Insider-Fraud Audit for Rural Banks (BPR/BPRS)

Date: 2026-07-30. Program B. Slug: `bpr-insider-fraud-continuous-audit`.

Role: refute the candidate. Claims under test:

1. **Competition 7/10** — "No dedicated Indonesian vendor selling continuous insider-fraud audit specifically to BPR management was found." (Rubric anchor 7 = "only pilots, abandoned, or foreign-only players — memo-verified".)
2. **Absorption distance 5/10** — OBOX is regulator-side and demonstrably incomplete; no 12-month absorber.
3. **WTP 7/10** — POJK 12/2024 creates "a named, mandatory budget line".
4. **Revenue 6/10, K4 PASS** — ~300–500 institutions at Rp20M–50M/year reaches $1M ARR.

Candidate's own stated kill condition: *"evidence that POJK 12/2024 compliance is being satisfied for free via an OJK-provided tool rather than institution-procured software."* That specific condition did **not** fire. A different one did.

## What I searched

WebSearch budget was exhausted at session start (200/200), so this scan ran on: Google News RSS (id-ID locale) for news discovery; Brave Search and Yahoo Search (both via browser, same-origin fetch) for vendor discovery; direct WebFetch/browser rendering of vendor sites. Google, DuckDuckGo, Mojeek, Ecosia and (mid-run) Brave all served bot-detection/CAPTCHA walls, which I did not attempt to bypass — coverage is therefore Yahoo + Brave + News RSS, not exhaustive.

Query set (ID + EN): `aplikasi audit intern BPR anti fraud POJK 12/2024`; `software continuous audit BPR deteksi fraud kredit fiktif vendor`; `"sistem informasi audit intern" BPR aplikasi`; `"core banking" BPR modul "anti fraud" deteksi transaksi vendor`; `aplikasi SaaS deteksi fraud BPR BPRS langganan bulanan 2026`; `"SI-INSAF" OJK BPR`; `OJK OBOX pengawasan BPR 2026 deteksi dini`; `OJK Sipelaku`; `OJK perketat pengawasan internal bank fraud Juli 2026`; `jumlah BPR BPRS 2026`; `laba/aset BPR 2026`; `OJK relaksasi aturan BPR beban regulasi`; `roadmap BPR/BPRS 2024-2027 infrastruktur TI bersama`; `jumlah BPR milik Pemda/BUMD`; `"fraud detection" startup Indonesia bank 2026`.

## What I found

### 1. The whitespace claim is false: SAF-GEN is a live Indonesian SaaS doing the exact function

**SAF-GEN — "Compliance Engine for BPR/BPRS"** (https://saf-gen.id), rendered and read 2026-07-30. Self-described: *"SAF-GEN (Smart Anti-Fraud Generation untuk BPR/BPRS Indonesia) membantu BPR Konvensional dan BPRS Syariah mendigitalisasi pemenuhan kewajiban tata kelola POJK 12/2024 dan otomatisasi pelaporan APOLO OJK secara akurat."*

It is not a self-assessment questionnaire. It is the candidate's product, feature for feature:

- **Pillar 2, detection:** *"Sistem pintar secara mandiri mengawasi dan menganalisis setiap aktivitas kas, tabungan, atau kredit untuk mengidentifikasi pola penyelewengan dana internal maupun eksternal."* — continuous monitoring of cash, deposit and **credit** activity for **internal** misappropriation patterns. That is the candidate's exact thesis (unrecorded deposits, fictitious loans), stated as a shipped pillar.
- **Pillar 1, prevention:** rejects abnormal transactions *"langsung di sistem utama perbankan"* — inline at the core banking system.
- **Core-banking integration:** *"Proses integrasi dan pertukaran data dengan sistem inti perbankan (Core Banking) dilindungi metode enkripsi jaringan yang ketat."* — the integration the candidate treated as its per-customer data-position moat.
- **AI stack named:** "AI Fraud Detection (Vertex AI + Isolation Forest)" — unsupervised anomaly detection, i.e. the same technique class.
- **Immutable audit trail:** "Penerapan algoritma kriptografi Hash Chain SHA-256" — even the tamper-evidence layer.
- **Centralized Multi-Branch Monitoring**, Rule Engine Management with SLA timers, customer/staff profile pages for investigation, APOLO OJK report export (POJK 23/2024), Financial Risk Calculator projecting late-reporting penalties.
- Explicitly mapped to **Pasal 5 POJK 12/2024 ayat (2)a–(2)d**, i.e. all four pillars.
- Data residency in Indonesia (UU PDP), SSL, Midtrans payment gateway with automatic subscription activation, `/#/login` app route, free sandbox demo.

**Published pricing:** Starter Rp6,9 juta/**bulan** (small BPR), Profesional Rp9,9 juta/bulan, Enterprise on request — i.e. **Rp82.8M–118.8M per year list**.

No company identity, customer logos, or traction figures are published, so I cannot verify revenue or installed base. But the rubric anchor at 7 requires "only pilots, abandoned, or foreign-only players." A domestic, Indonesian-hosted, publicly priced, self-serve-billable SaaS built for BPR/BPRS and mapped article-by-article to POJK 12/2024 is none of those. **The gap claim is refuted on its own terms.**

### 2. The POJK 12/2024 budget line is already occupied — and it is cheap

The candidate identified Perbarindo as its distribution channel and POJK 12/2024 as its forcing function. Both are taken, since before the regulation:

- **SI-INSAF (Sistem Informasi Penerapan Strategi Anti Fraud)**, sold by **PT Nusantara Bona Pasogit** — an "Aplikasi Digital" covering Strategi Anti Fraud, Self Assessment Efektifitas SAF, Know Your Employee (KYE), Whistleblowing System. Price: **"Rp. 2.600.000 / BPR"**, bundled as "2 peserta + 1 Aplikasi SI-I[NSAF]" with training for directors, risk managers, compliance officers and internal audit staff (ptnbp.com/si-insaf, listing dated 4 May 2023 — i.e. **18 months before POJK 12/2024 took effect**).
- Distributed through the exact channel the candidate named: **DPD Perbarindo DKI Jakarta** ("Training Aplikasi Online SI-INSAF … Berbasis Teknologi Digital untuk Meningkatkan Pengendalian Risiko Fraud pada BPR", perbarindojakarta.id/pendidikan/topic/617) and **DPD Perbarindo Jateng** ("PJJ Aplikasi Digital SI-INSAF APOLO — Sesuai Pasal 11 POJK No. 12 Tahun 2024 … BPR–BPRS wajib mengirimkan SOP Penerapan Strategi Anti Fraud", 10 Dec 2024).
- **Creva Business Consulting** runs a product family on the same model — **SIPPATUH** (Sistem Informasi Penerapan Kepatuhan), **SIP-PTI** (for POJK 34/2025 on IT governance: cybersecurity maturity assessment, RCSA, IT SOPs), plus POJK 12/2024 follow-up advisory. A third app, **"Terlaksana"** (Sistem Informasi Penerapan Tata Kelola, per SEOJK 12/SEOJK.03/2024), covers governance self-assessment.
- OJK itself published a free **"Buku Panduan Strategi Anti Fraud Bagi Industri Bank Perkreditan Rakyat"** (ojk.go.id, 10 Mar 2022), written specifically for BPR.

So there is a functioning cottage industry — training bundle + per-BPR digital app at **Rp2.6M** — that already owns the compliance officer's attention, the association channel, and the POJK 12/2024 line item. WTP 7 ("named budget owner already paying for an inferior alternative") technically survives; but the *size* of that payment is now evidenced, and it is ~1/10th of the candidate's assumed ACV floor.

Counter-signal on appetite for more compliance spend: Infobanknews, "Hari BPR-BPRS: Regulasi **'Overdosis'** bagi BPR di Tengah Layunya Ekonomi Rakyat Perlu Relaksasi" (31 May 2026) and "The Finance Top 100 BPR: BPR Perlu 'Doping' Relaksasi Akibat 'Overdosis' Regulasi" (19 Jun 2026). The industry's public posture in 2026 is that it is over-regulated and needs relief, not that it wants to buy more compliance software.

### 3. The bottom-up ARR path collapses from both ends

Population, all sourced:

| Fact | Source |
|---|---|
| 1,518 BPR + BPRS, May 2025 | OJK via Infobanknews, 20 Jun 2025 |
| 142 BPR/BPRS "efektif konsolidasi", Mar 2026 | ANTARA, 19 Mar 2026 |
| 81 BPR merged into 24, approved | Kompas.com, 8 Jul 2026 |
| 200+ still in the merger queue, per end-June 2026 | Kompas/detikFinance/publika, 25–26 Jul 2026 |
| 10 licences revoked in 2026 YTD | suarasiber.com, 29 Jul 2026 |
| 34 cumulative BPR/BPRS closures since 2024 | CNBC Indonesia, 8 May 2026 |
| Industry assets Rp236.69 T, +3.70% (Mar 2026) | OJK via ANTARA/kontan, 2 Jun 2026 |

The candidate needs **300–500 paying institutions**. That is 20–33% of the *entire* BPR+BPRS population and it is shrinking every month by regulatory design. Worse, the candidate itself excludes single-owner-operator BPRs as "largely unreachable" and targets the multi-shareholder / Pemda-owned subset. That subset is small: Kemendagri counts 1,057 BUMD of *all* types nationally including 27 BPD (detikFinance/iNews, 14 Oct 2024), and Infobank's benchmark ranking for this segment is "**The Best 50** BPR Milik Pemda" (Feb 2025). Low hundreds, not 300–500 buyers. **300–500 customers likely exceeds 100% of the addressable subset the candidate defined.**

ACV is now bracketed by two evidenced Indonesian prices, and neither rescues it:

- At the **evidenced anti-fraud comparable (SI-INSAF, Rp2.6M/BPR)**: $1M ARR ≈ Rp16.5 bn/yr (at ~Rp16,500/USD, *unverified*) needs **~6,300 institutions** — over 4× the entire national population. Impossible.
- At the candidate's assumed **Rp20–50M/yr**: needs 330–825 institutions — i.e. between "all of the addressable subset" and "more than half of every BPR in Indonesia," against a base contracting via mandated merger. Not credible.
- At **SAF-GEN's list price (Rp82.8M–118.8M/yr)**: ~140–200 customers would do it — but that price is 14–20× a BPR's entire core banking system (USSI: Rp35M implementation + Rp500k/month = Rp6M/yr for conventional BPR), it is unvalidated by any disclosed customer, and it is *already claimed by an incumbent competitor*.

Add G6 (no enterprise-sales organisation): landing 300–500 individually-owned rural banks scattered across the archipelago, each requiring a bespoke integration into one of a dozen core-banking systems, is a field-sales-and-implementation motion by definition. The Perbarindo channel sells seats at Rp2.6M training webinars; it does not carry core-banking integrations. **K4 fails.**

### 4. Absorption: no clean 12-month kill, but the distance score falls

Nothing I found meets K3's evidentiary bar ("existing roadmap, announced regulation, active procurement, funded implementation, or an incumbent already entering the exact function") for an actor that controls the BPR customer relationship. But absorption distance 5 ("plausible absorber, no roadmap") is now generous:

- **OJK SIPELAKU (Sistem Informasi Pelaku Sektor Keuangan)** — POJK issued Jan 2025 (kontan, 13 Jan 2025), launched with IASC on 11 Feb 2025 (CNBC/CNN/kontan/ANTARA), OJK stating the database "akan terus diperkaya dengan berbagai sumber." A free, regulator-run registry of financial-sector fraud perpetrators that prevents offenders moving between banks — this *is* the KYE pillar of POJK 12/2024, provided by the state at zero cost. Still being promoted as fraud-detection technology in July 2026 (feedberry, 28 Jul 2026).
- **OJK supervisory direction**, Kepala Eksekutif Pengawas Perbankan **Dian Ediana Rae**, written answers to RDKB June 2026 (Katadata, 28 Jul 2026): *"OJK juga akan terus memperkuat pendekatan yang lebih proaktif dan berbasis risiko, serta memanfaatkan teknologi untuk mendeteksi adanya indikasi fraud sejak dini."* Regulator-side, but an explicit stated direction rather than the "no roadmap" the score assumed. Same statement pushes banks onto three lines of defence and effective, independent internal audit.
- **Core-banking incumbents entering the framing**: PT Collega Inti Pratama published "Pencegahan Fraud melalui Core Banking System" in ID and EN (collega.id, 26 Jan 2026) — *"Core Banking System (CBS) plays a crucial role in preventing fraud in banking, through monitoring transactions in real-time…"*. Marketing posture, not a shipped module I could verify, but it is the vendor that owns the ledger positioning itself on the function. In every mature market the community-bank fraud-monitoring layer ends up inside the core provider.
- **OJK actively recruiting more competitors**: **OJK Fintech Startup Accelerator 2026** under OJK Infinity, announced 23 Jul 2026 (Katadata), with Kepala Eksekutif Adi Budiarso naming priority areas — startups developing *"AI, fraud detection, embedded finance, tokenisasi aset dunia nyata platform koperasi digital, [dan] platform berbasis ESG"* — supported by regulatory sandbox, regulatory clinic and mentoring. The regulator is funnelling new entrants into exactly this function with a compliance on-ramp a bootstrapper cannot match.

Absorption distance should read **3** ("adjacent incumbent/state program exists, no 12-month evidence"), not 5.

### 5. Does the buyer pay for this anywhere today?

Weakly, and not in this shape. What BPRs demonstrably buy against fraud is (a) **training** — a dense market of Rp1–3M seminars (Perbarindo DPDs, pelatihanpro.co.id "Training Strategi Pencegahan Fraud Pada BPR Tahun 2025", in-house sessions at BPR Dhana Lestari, BPR Sukorejo Makmur, Bank Eka Dharma through 2025–26) — and (b) **cheap per-BPR compliance apps** (SI-INSAF Rp2.6M; Creva's SIPPATUH/SIP-PTI family). What surfaces for "audit intern BPR" is documents, not software: annual audit plans, `Pedoman dan Tata Tertib Audit Intern`, risk-based internal audit manuals (Scribd; bankkulonprogo.co.id 2025; bprdanamasterbahtera.co.id IT audit report 2024). The internal-audit function at a BPR is a person with a checklist, at an institution whose whole core banking system costs Rp6M/year. There is no evidenced Indonesian precedent of a BPR paying eight figures annually for detection analytics.

## Verdict: REFUTED

Three independent failures, any one sufficient:

1. **Competition claim false (primary).** SAF-GEN (saf-gen.id) is a live, Indonesian-hosted, publicly priced BPR/BPRS SaaS whose Pillar 2 is continuous monitoring of cash/deposit/credit activity for *internal* misappropriation, integrated into the core banking system, mapped clause-by-clause to POJK 12/2024, with SHA-256 hash-chain audit trail and APOLO export. The memo's "no dedicated Indonesian vendor found" is wrong as of July 2026. Per Program B rule 6, a refuted claim **caps competition at 4**: weighted recomputes 0.20·9 + 0.20·6 + 0.15·7 + 0.15·5 + 0.10·5 + 0.10·**4** + 0.10·6 = **6.3**, below the 7.0 bar. With absorption also corrected to 3, **6.1**.
2. **K4 fails.** 300–500 customers exceeds the addressable multi-shareholder/Pemda subset (low hundreds), against a population contracting by regulatory design (81→24, 200+ queued, 10 licences pulled in 2026). At the only evidenced anti-fraud ACV (Rp2.6M) the path needs ~6,300 institutions — 4× the country. At the only price point that closes the math (Rp82.8M+/yr) the seat is already taken and unvalidated.
3. **Channel and budget line pre-owned.** Perbarindo distribution and the POJK 12/2024 line item were occupied by SI-INSAF from 2023 — before the regulation the candidate treats as its forcing function — at 1/10th the assumed ACV, while the industry publicly lobbies for regulatory *relaxation* ("regulasi overdosis", May–Jun 2026).

The candidate's stated kill condition (free OJK-provided tool satisfying POJK 12/2024) did not fire — SI-INSAF is commercial, and SIPELAKU covers only the KYE pillar. It died of the opposite: the function is commercially occupied, and the money in it is far smaller than assumed.

**Severity 9 is not disputed.** The fraud is real, large, and prosecuted. The problem is genuine; the *business* is not bootstrap-viable at this bar.

**Surviving gap (narrow, unfunded):** every product found — SAF-GEN, SI-INSAF, core-banking modules — is procured, configured and administered by the same Direksi that commits the fraud, so all of them inherit the collusion problem the candidate's own K1 analysis identified. The genuinely unoccupied position is *shareholder-side* assurance: read-only, tamper-evident ledger analytics reporting to the Dewan Komisaris, the Pemda shareholder, or LPS/OJK rather than to management. It has no evidenced buyer, no budget line, and a buyer count in the low hundreds — a services or LPS-procured shape, not a bootstrap SaaS.

## Key sources

- SAF-GEN — Anti-Fraud Platform BPR/BPRS, features, POJK 12/2024 Pasal 5 mapping, core-banking integration, pricing Rp6,9jt–9,9jt/bulan — https://saf-gen.id (rendered 2026-07-30)
- SI-INSAF, PT Nusantara Bona Pasogit — "Rp. 2.600.000 / BPR", SAF + Self Assessment + KYE + WBS — https://ptnbp.com/si-insaf/
- DPD Perbarindo DKI Jakarta — "Training Aplikasi Online SI-INSAF (Sistem Informasi Strategi Anti Fraud)…" — https://perbarindojakarta.id/pendidikan/topic/617
- DPD Perbarindo Jateng — "PJJ Aplikasi Digital SI-INSAF APOLO… Pasal 11 POJK No. 12 Tahun 2024" (10 Dec 2024) — https://www.perbarindodpdjateng.or.id/pjj/2024/aa
- Creva Business Consulting — SIPPATUH, SIP-PTI (POJK 34/2025), POJK 12/2024 advisory — https://www.crevabusinessconsulting.com/
- Collega, "Pencegahan Fraud melalui Core Banking System" / EN version (26 Jan 2026) — https://www.collega.id/blog/
- Katadata, "OJK Cari Startup AI dan Fraud Detection untuk Perkuat Sektor Keuangan" (23 Jul 2026), OJK Fintech Startup Accelerator 2026 / OJK Infinity, Adi Budiarso — https://katadata.co.id/digital/fintech/6a6209e100322/ojk-cari-startup-ai-dan-fraud-detection-untuk-perkuat-sektor-keuangan
- Katadata, "Marak Penipu Berkedok Pegawai Bank, OJK Bikin Teknologi Deteksi Penipuan" (28 Jul 2026), Dian Ediana Rae, RDKB Juni 2026
- OJK SIPELAKU: kontan "Minimalkan Fraud… OJK Terbitkan POJK Sistem Informasi Pelaku" (13 Jan 2025); CNBC/CNN/kontan/ANTARA launch coverage (11 Feb 2025); ANTARA "Database Sipelaku akan terus diperkaya"
- OJK, "Buku Panduan Strategi Anti Fraud Bagi Industri Bank Perkreditan Rakyat" (10 Mar 2022) — ojk.go.id
- Population/consolidation: Infobanknews "OJK Catat Ada 1.518 BPR-BPRS hingga Mei 2025" (20 Jun 2025); ANTARA "142 BPR-BPRS telah efektif konsolidasi per Maret 2026" (19 Mar 2026); Kompas "OJK Restui 81 BPR Merger Jadi 24 BPR" (8 Jul 2026); suarasiber "OJK Cabut Izin Usaha 10 BPR Sepanjang 2026" (29 Jul 2026)
- Industry size: ANTARA/kontan "Total aset BPR-BPRS tumbuh 3,70 persen capai Rp236,69 T per Maret [2026]" (2 Jun 2026)
- WTP counter-signal: Infobanknews "Hari BPR-BPRS: Regulasi 'Overdosis' bagi BPR… Perlu Relaksasi" (31 May 2026); "The Finance Top 100 BPR: BPR Perlu 'Doping' Relaksasi Akibat 'Overdosis' Regulasi" (19 Jun 2026)
- Addressable subset: detikFinance/iNews "Kemendagri Ungkap Pemda Punya 1.057 BUMD" incl. 27 BPD (14 Oct 2024); Bank Tapin, "THE BEST 50 BPR MILIK PEMDA" (12 Feb 2025)
- ACV baseline retained from candidate: USSI IBS/IBSS Rp35M + Rp500k/month conventional BPR — https://ussipgs.com/pricing/super-package/

## Coverage caveat

Google, DuckDuckGo, Mojeek and Ecosia served bot-detection walls; Brave began the run open and closed mid-run. Vendor discovery therefore rests on Brave (early) + Yahoo + Google News RSS. SAF-GEN surfaced on a single Yahoo query and would have been missed by a narrower scan — I treat the possibility of further undiscovered Indonesian entrants as *raised*, not lowered, by this. SAF-GEN's revenue and installed base are unverified; the refutation does not depend on its traction, only on its existence as a domestic, priced, non-pilot product in the exact function.
