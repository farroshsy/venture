# Movable Collateral Double-Pledging (Fidusia) — axis 2B

## Problem & Current Workflow

Fidusia (UU 42/1999) lets a debtor keep possession of a movable asset — vehicle, machinery, inventory, receivables — while the creditor takes security title. The workflow: financing agreement signed; notary draws up the fidusia deed; the notary registers it through AHU Online (electronic since March 2013, per SE AHU-06.OT.03.01), paying PNBP; a certificate with executorial force issues the same day. POJK 35/POJK.05/2018 obliges multifinance companies to register within 30 calendar days of the consumer agreement. Object data — chassis and engine numbers for vehicles — is self-declared; the AHU FAQ and user guides describe no validation of object truth and historically no block on conflicting registrations, only a paid public search (by certificate number, serial number, or grantor) that a diligent lender may run. Priority between competing registrations goes to whoever registered first (Art 28); re-pledging an encumbered object (fidusia ulang) is flatly prohibited (Art 17) but was not system-enforced. Since Constitutional Court decision 18/PUU-XVII/2019 (6 January 2020, reaffirmed by 2/PUU-XIX/2021), a creditor cannot self-repossess unless the debtor admits default and surrenders voluntarily; otherwise execution runs through the district court like a final judgment.

## Stakeholders & Who Pays

Domestic case. Debtors: consumers and SMEs pledging BPKB-documented vehicles, equipment, stock. Creditors who eat losses: multifinance companies (receivables Rp513.19 trillion per May 2026, NPF gross 3.06% — OJK via Kontan/Infobank, 2026), banks in joint-financing and executing schemes, BPR, pawn businesses and informal lenders outside the regulated perimeter. Registrar: Ditjen AHU, Kemenkumham — fidusia PNBP is 65–85% of its non-tax revenue (Kemenkumham, 2025). Supervisor: OJK. Association utility: APPI's PT Rapi Utama Indonesia (Rapindo), the asset-recording institution. Vehicle identity: Korlantas Polri (BPKB). Notaries do the filing; courts and debt collectors handle disputes and recovery.

## Trust Breakdown (cited incidents)

- BPK found discrepancies of up to 35 million transactions between OJK financing reports and Ditjen AHU fidusia data for 2022–2024, with estimated state (PNBP) losses above Rp20 billion; double fidusia registration and undeleted old certificates were named among root causes at a 14 November 2025 AHU–OJK–BPK forum (Kemenkumham Kepri, 2025).
- Surabaya: one Mitsubishi Pajero turned out to have two BPKBs, pledged at Astra Credit Companies and BCA Finance simultaneously; counsel alleged a "leasing mafia" (Jawa Pos, 2022).
- Lampung: a coffee trader's stock was claimed by multiple creditors each holding fidusia over the same goods; the Supreme Court gave priority to the creditor whose certificate described the objects most specifically (Hukumonline, 2025).
- The 2016–2017 double-financing wave — the same vehicle financed at more than one lender — was severe enough that banks curtailed funding to multifinance and APPI created Rapindo in response (Bisnis.com, 2024; Bisnis.com, 2019). Kredit ganda cases still generate bank and multifinance litigation today (CNBC Indonesia, 2024).

## Cost of the Problem

No aggregate double-pledging loss figure exists for Indonesia (unverified). Verified anchors: Rp20 billion+ state PNBP loss 2022–2024 (BPK via Kemenkumham, 2025); multifinance NPF gross 3.06% of Rp513.19 trillion per May 2026 (OJK, 2026) bounds credit losses without isolating fraud; fidusia registrations ran 6.3–7.8 million per year with PNBP of Rp558.76 billion in 2015 (Bisnis.com, 2018). Strip: most double-BPKB fraud involves forged documents or insider collusion (the Surabaya duplicate BPKB required a fake police-issued book), which a registry query alone does not stop.

## Existing Solutions (as of 2026-07)

- AHU Online fidusia registry: nationwide, paid search by serial number; Ditjen AHU states it has restricted double registration in-system since 2024, is accelerating deletion of stale certificates, and is building web-service data exchange with OJK plus a joint task force with notary boards and financing associations (Kemenkumham, 2025).
- Rapindo (APPI): asset registry holding 32.875 million records as of 30 June 2024 — 32.7 million vehicles, 120,220 heavy equipment, plus factoring receivables — built explicitly to stop double financing; membership in an asset-recording institution is an OJK licensing obligation for financing companies (POJK 47/POJK.05/2020; Bisnis.com, 2024; Kontan).
- OJK SLIK: exchanges debtor facility and collateral (agunan) data across banks and non-banks.
- Korlantas e-BPKB: RFID-chipped electronic BPKB rolled out from March 2025, mandatory for new cars by 2027, designed to link vehicle identity directly with banks, leasing and pawn systems (Antara, 2026).

## Why Insufficient & Who Rejects the Existing Anchor

The residual gap is real but is one of coverage and reconciliation, not contested trust: banks, pawnshops and informal lenders sit partly outside Rapindo; AHU, SLIK and Rapindo are three unreconciled databases (hence BPK's 35-million mismatch); registration is self-declared. But no economically relevant party rejects any anchor. Multifinance accepts Rapindo by mandate; everyone accepts AHU because priority flows from it by law; vehicle identity is being welded to lender systems by Korlantas e-BPKB by decree. Three accepted anchors exist and the state is actively merging them. This is the anti-H1 configuration in its purest form.

## Blockchain Test

Test 1 passes — double-pledging predates any ledger. Test 2 fails: a single trusted operator's database is exactly what exists (three of them), and the fix underway is integration, not decentralization; tamper-evidence is irrelevant when the failure mode is unregistered or falsely described objects. Test 3 fails: the state is shipping it — AHU's 2024 double-registration restriction, the AHU–OJK web service, and e-BPKB are all decree-driven, and Rapindo can extend features on OJK request. Test 4 fails: the utility position is occupied; per-record fees on top of PNBP plus Rapindo dues leave no standalone pool.

## Kill Test Verdict

KILLED — fails tests 2, 3 and 4. The problem persists as an execution gap inside an accepted-anchor system, which predicts a government integration project or an APPI vendor contract, not a venture. Consistent with H1's negative case.

## Scores

- Severity 6 — recurring lender losses and litigation (BPK 35M mismatch; kredit ganda cases through 2024), but incident sizes are small relative to books.
- Market 3 — registry/query fees over multifinance volumes are a sub-$50M utility pool already shared by AHU PNBP and Rapindo dues.
- WTP 5 — membership is mandated and lenders pay today, but fees are administrative-scale and procurement runs through APPI/OJK.
- Chain 3 — accepted anchors exist (state and association); multi-org but fully domestic and regulator-supervised.
- Urgency 4 — state consolidation underway (e-BPKB 2027, AHU-OJK exchange) reduces, not increases, the opening.
- Competition 2 — Rapindo is an entrenched mandated incumbent; AHU and Korlantas are statutory.
- Moat 4 — network effects exist in theory but are already captured by the association utility.

Weighted: 4.0.

## What Would Kill This Idea

Already killed by incumbency and decree. Revival would require: Rapindo demonstrably failing (e.g., a mass double-financing scandal despite membership), OJK declining to force bank participation, AND Korlantas abandoning e-BPKB-lender integration — jointly implausible. A narrow service business (reconciliation tooling for the AHU-OJK task force) is procurement work, not a company.

## Sources

- https://kepri.kemenkum.go.id/berita-utama/perkuat-akurasi-data-nasional-ditjen-ahu-ojk-dan-bpk-bersinergi-tingkatkan-pengelolaan-jaminan-fidusia
- https://finansial.bisnis.com/read/20240813/89/1790601/appi-dorong-leasing-lakukan-asset-registry-untuk-cegah-kredit-ganda
- https://keuangan.kontan.co.id/news/wajibkan-jadi-anggota-asset-registry-ojk-tambah-pojk-tentang-izin-multifinance
- https://www.ojk.go.id/id/regulasi/Documents/Pages/Perizinan-Usaha-dan-Kelembagaan-Perusahaan-Pembiayaan-dan-Perusahaan-Pembiayaan-Syariah/pojk%2047-2020.pdf
- https://ojk.go.id/id/regulasi/Documents/Pages/Penyelenggaraan-Usaha-Perusahaan-Pembiayaan/pojk%2035-2018.pdf
- https://www.jawapos.com/surabaya-raya/01376533/satu-mobil-punya-dua-bpkb-pengacara-duga-praktik-mafia-leasing
- https://www.hukumonline.com/berita/a/strategi-hukum-mengefektifkan-jaminan-fidusia-lt67c5c0ec36ece/
- https://megapolitan.antaranews.com/berita/485874/korlantas-polri-targetkan-penggunaan-bpkb-elektronik-wajib-untuk-mobil-baru-pada-2027
- https://keuangan.kontan.co.id/news/piutang-pembiayaan-multifinance-tumbuh-171-menjadi-rp-51319-triliun-per-mei-2026
- https://www.djkn.kemenkeu.go.id/kpknl-bekasi/baca-artikel/12953/PUTUSAN-MAHKAMAH-KONSTITUSI-NOMOR-18PUU-XVII2019-APA-IMPLIKASINYA-BAGI-PROSES-BISNIS-LELANG.html
- https://portal.ahu.go.id/page/faq/faq-fidusia
- https://www.cnbcindonesia.com/mymoney/20240822152253-74-565547/langkah-hukum-bank-hingga-multifinance-hadapi-kasus-kredit-ganda
- https://finansial.bisnis.com/read/20180909/215/836598/pendaftaran-sertifikat-jaminan-fidusia-meningkat
- https://rapindo.co.id/
