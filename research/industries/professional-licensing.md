# Professional Licensing — License Verification (Health, Construction, Legal)

## Problem & Current Workflow

Health: under UU Kesehatan 17/2023, every medical and health worker needs an STR (registration) and an SIP (practice permit). STR is now lifetime; SIP is renewed every 5 years against SKP (CPD credit) requirements. Applications run digitally through SATUSEHAT SDMK, launched 11 October 2023 (Kemenkes, 2023). Hospitals run credentialing committees that verify STR, SIP, and diplomas before granting clinical privileges — a KARS accreditation requirement — using the free "Cek Dokter"/STR lookup on the KKI portal plus written confirmation letters (KKI, accessed 2026). Construction: UU 2/2017 obliges every construction worker to hold an SKK issued via BNSP-licensed LSPs and recorded in LPJK's SIKI database; procurement committees check tender submissions against LPJK records. Lawyers: PERADI membership card plus court oath documents; verification is largely visual or by writing to the bar association.

## Stakeholders & Who Pays

Practitioners pay registration and certification fees (SKK costs are borne by workers or contractors). Hospitals and clinics pay credentialing staff time; contractors pay compliance staff for tender document assembly; clients of lawyers have no practical verification channel. Regulators: Konsil Kesehatan Indonesia/KKI, Kemenkes, LPJK under PUPR, BNSP, courts and PERADI. Police and courts absorb impostor cases; patients and clients absorb the harm.

## Trust Breakdown (documented incidents)

- Susanto, a non-doctor who worked roughly two years at a Pertamina site clinic using a real doctor's identity documents, was sentenced to 3.5 years on 19 March 2024 (ResearchGate case review; Merdeka, 2024). The registry entry he exploited was genuine — the fraud was identity substitution, which no registry lookup catches.
- Bekasi, 2024: a fake doctor practiced for five years on forged SIP and STR before arrest (Merdeka, 2024).
- Bantul, 2024–2025: a fake medical practitioner defrauded a patient of Rp538.95 million plus a land certificate (Polres Bantul, 2025).
- Lombok Tengah: brokers sold fake STRs to nurses who repeatedly failed competency exams at Rp1.5–2.5 million each (Radar Lombok, 2018).
- Situbondo: 23 contractors were reported for using fake SKA/SKT certificates to win APBD tenders worth Rp300 million–Rp2 billion each (LSM Geram Maki report, 2016, re local APBD 2016 projects).
- Banten, August 2025: a man using a forged PERADI ID card was reported to Polda Banten for fraud and embezzlement (Kominfo.co.id, 2025).

## Cost of the Problem

No aggregate national figure exists (unverified). Verified case-level costs: Rp538.95 million single-victim loss (Polres Bantul, 2025); tender disqualifications for fake SKK are documented by compliance vendors (CekSKK.com, 2025, anecdotal). Scale of exposure: 1,545,763 health workers nationally (Kemenkes data, 2025); roughly 696,217 nurses with active STR projected for 2025 (KTKI); 8.2 million construction workers of whom only 629,622 hold SKK — under 10% compliance with a statutory mandate (LPJK chair, Kompas, July 2026).

## Existing Solutions (as of 2026-07)

- Government: KKI "Cek Dokter"/STR verification, free and public, explicitly built for hospital credentialing (KKI); SATUSEHAT SDMK for STR/SIP lifecycle (Kemenkes, 2023); LPJK SIKI database with public SKK lookup; BNSP certificate registry; PISN for underlying diplomas.
- Private: cekskk.com and similar aggregators wrapping LPJK data; hospital SIMRS/credentialing modules (Trustmedis and other vendors document STR workflows); background-check firms (Integrity Indonesia) for senior hires.
- No funded Indonesian startup dominates license verification as a product (search, 2026-07).

## Why Insufficient

Registries are siloed per profession and per permit layer (STR national, SIP at local government), so a full practitioner check crosses three systems. More fundamentally, the documented frauds are identity-binding failures: Susanto passed because he presented a real doctor's credentials. A registry can be perfect and still admit an impostor without biometric binding at point of hire and point of care. For construction, the binding failure is presence: certified engineers are "borrowed" for tenders — a labor-market practice no ledger prevents.

## Blockchain Test

Each profession already has an accepted single trusted operator (KKI/Kemenkes, LPJK, BNSP, PERADI). Verifiers trust these registries; the failure modes are identity binding and enforcement, which are orthogonal to tamper-evidence. A blockchain of licenses would replicate SATUSEHAT SDMK with extra steps.

## Kill Test Verdict

KILLED.
1. Problem without blockchain? YES.
2. PostgreSQL under a trusted operator? YES — KKI/SATUSEHAT/SIKI are exactly that and are accepted. FAIL.
3. Incumbent ships it in 6 months? YES — Kemenkes and LPJK routinely extend their portals; SIMRS vendors can add credentialing features. FAIL.
4. Standalone value? Thin against free state lookups. FAIL.

## Scores

- Severity 7 — patient harm and criminal cases yearly; hospitals staff credentialing committees; tender fraud documented.
- Market 4 — credentialing/compliance tooling for ~3,000 hospitals and contractors; no verified TAM above $50M (unverified).
- WTP 5 — accreditation-mandated credentialing budgets exist, but the verification itself is free from government.
- Chain 3 — accepted single trusted registries per profession.
- Urgency 5 — UU 17/2023 transition ongoing; lifetime STR reduces recurring verification pressure.
- Competition 5 — free government portals plus small aggregators; no dominant private player.
- Moat 3 — thin wrapper over state registries, copyable.

Weighted: 4.7.

## What Would Kill This Idea

Already killed: free authoritative government lookups; the impostor problem being biometric/identity rather than ledger-shaped; SIP fragmentation solvable only by the state; sub-10% SKK coverage meaning the constrained resource is certification capacity, not verification.

## Sources

- https://kki.go.id/blog/read/verifikasi-str
- https://rc.kemkes.go.id/news/transformasi-digital-administrasi-tenaga-kesehatan-melalui-satusehat-sdmk-4262db
- https://www.researchgate.net/publication/388389412_Tanggung_Jawab_Hukum_dalam_Pengawasan_Tenaga_Medis_Tinjauan_Kasus_Dokter_Gadungan_Susanto
- https://www.merdeka.com/tag/dokter-gadungan
- https://jogja.polri.go.id/bantul/tribrata-news/online/detail/polres-bantul-bekuk-dokter-gadungan-yang-rugikan-pasiennya-hingga-rp500-juta.html
- https://radarlombok.co.id/str-palsu-perawat-beredar-di-lombok-tengah.html
- https://www.kompas.com/properti/read/2026/07/17/204013121/ironi-sektor-konstruksi-baru-629622-orang-pekerja-bersertifikat
- https://cekskk.com/blog/panduan-wajib-lpjk-skk-konstruksi-terbaru-cek-validitas-dan-hindari-risiko-proyek
- https://www.kominfo.co.id/2025/08/diduga-oknum-advokat-gadungan-dari-lbh.html?m=1
- https://www.tribunnews.com/nasional/7771389/10-provinsi-dengan-tenaga-medis-terbanyak-2025-jawa-barat-hingga-sumatra-utara
- https://www.hukumonline.com/klinik/a/jerat-pidana-untuk-advokat-gadungan-lt5d3811cb1fcce/
- https://sertifikasi.co.id/cara-cek-sertifikat-skk-konstruksi/
