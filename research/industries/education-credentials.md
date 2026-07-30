# Education Credentials — Diploma & Academic Credential Verification

## Problem & Current Workflow

Issuance: an accredited university reports each graduate to PDDikti (the national higher-education database), obtains a national diploma number via PISN, and prints the ijazah. Since Permendikbudristek 58/2024, primary and secondary schools issue e-ijazah with certified electronic signatures starting 2025 (Kemendikdasmen, 2025). Verification: an employer, BKN (for CPNS), or a foreign evaluator enters the diploma number and name into SIVIL (ijazah.kemdikbud.go.id). If SIVIL returns "data tidak ditemukan," the verifier must contact the university for manual archive checks and legalisir basah (wet-stamp copies). SIVIL only covers graduates from 2002 onward; older diplomas require manual research at the issuing campus or LLDIKTI (Kemendikbudristek guidance, cited by Masoem University and Kissparry, 2023). Commercial background-check firms verify by phoning registrars, per candidate, per request.

## Stakeholders & Who Pays

Universities and LLDIKTI issue and correct records; Kemendiktisaintek operates PDDikti/SIVIL/PISN free of charge. Employers and government recruiters (CPNS/PPPK) bear verification effort and pay screening firms such as Integrity Indonesia (PBSA-accredited) and Veremark when stakes are high. Graduates pay in time when false negatives block job applications. Police and courts absorb disputes (Pasal 263/264 KUHP forgery cases).

## Trust Breakdown (documented incidents)

- May 2023: Kemendikbudristek revoked operating licenses of 23 private universities for fictitious instruction, diploma selling (jual beli ijazah), and KIP-K scholarship abuse, from 52 public complaints; 29 more campuses were under review (CNN Indonesia; Kompas, 2023).
- March–December 2025: the Jokowi ijazah affair — allegations that the ex-president's UGM diploma was fake escalated into a national legal saga; Bareskrim declared the diploma genuine, and Polda Metro Jaya named 8 suspects including Roy Suryo for defamation and data manipulation (Antara; Kompas, 2025). The episode shows that even a president's diploma cannot be settled quickly and publicly by existing verification infrastructure — the dispute ran nine months and ended in criminal court, not in a registry lookup.
- Recurring false negatives: legitimate alumni report diploma numbers missing from SIVIL due to campus reporting lapses (Universitas Trunojoyo alumni complaints, 2023), forcing manual remediation.

## Cost of the Problem

No credible aggregate rupiah figure for diploma fraud exists (unverified). Verified proxies: 23 campuses closed in one 2023 enforcement wave (Kemendikbudristek, 2023); only 15% of universities had adopted digital diplomas as of 2025 (Kemendikbudristek figure reported by Blockchain Media Indonesia, 2025). Manual verification of pre-2002 or unreported diplomas takes days to weeks per case (unverified). Screening-firm fees per candidate: (unverified).

## Existing Solutions (as of 2026-07)

- Government: PDDikti + SIVIL + PISN (free public lookup); e-ijazah with certified digital signature for schools from 2025 (Permendikbudristek 58/2024); SatuDikti app.
- State incumbent moving into blockchain: Peruri Digital Security (PDS) announced a blockchain digital-ijazah collaboration with Kemendikdasmen on 23 June 2025 (PDS, 2025).
- Campus-led: Universitas Dian Nuswantoro (Udinus) launched Indonesia's first "100% blockchain" diplomas on 7 February 2026 with Sealbound UAE, Indonesia Blockchain Center, and Dubai Blockchain Center (Udinus; Detik, 2026).
- Private: background-check firms (Integrity Indonesia, T2 Intelligence, Veremark); certified e-signature providers (PSrE: Peruri, Privy, VIDA); campus SIS vendors (SEVIMA) that already integrate PDDikti reporting.

## Why Insufficient

The real gaps are coverage and data hygiene, not absence of a trust anchor: pre-2002 graduates, closed campuses, non-degree certificates, and unreported cohorts fall outside SIVIL; false negatives punish honest graduates. None of this is fixed by adding a second ledger — it requires backfilling records the state already owns. Identity binding (is the person holding the diploma its subject?) also remains unsolved by every current system.

## Blockchain Test

Multiple parties exist (campuses, employers, state), but all parties already accept a single trusted intermediary: PDDikti/SIVIL. A PostgreSQL registry under Kemendiktisaintek is literally the incumbent architecture, and its failures are data-completeness failures. Blockchain adds nothing an authenticated API and signed PDF do not.

## Kill Test Verdict

KILLED.
1. Problem without blockchain? YES (fraud is real).
2. PostgreSQL under a trusted operator? YES, it solves it — SIVIL is that system; gaps are coverage, not trust. FAIL.
3. Incumbent ships it in 6 months? YES — Peruri/Kemendikdasmen are already shipping blockchain e-ijazah; SEVIMA could add verification features. FAIL.
4. Standalone company value? Doubtful against a free state portal. FAIL.

## Scores

- Severity 7 — recurring scandals, campus closures, and a politically explosive 2025 saga; dedicated screening industry exists.
- Market 4 — education-verification slice of Indonesian background screening is small; no verified TAM above $50M (unverified).
- WTP 5 — employers already pay screening firms, but the state alternative is free, capping price.
- Chain 3 — accepted single trusted operator (PDDikti/SIVIL) exists.
- Urgency 6 — e-ijazah regulation in force for 2025 cohorts and fresh scandal, but the deadline binds government, not customers.
- Competition 4 — state incumbent Peruri plus Udinus/Sealbound already shipping; screening firms entrenched.
- Moat 3 — a verification layer over someone else's registry is a copyable feature.

Weighted: 4.7.

## What Would Kill This Idea

Already killed: Peruri (state-owned, ministry-partnered) occupying the blockchain-ijazah slot; SIVIL closing coverage gaps by administrative backfill; free government verification making a paid product unsellable.

## Sources

- https://www.cnnindonesia.com/nasional/20230526154147-20-954438/kemendikbud-cabut-izin-operasional-23-perguruan-tinggi-bermasalah
- https://www.kompas.com/edu/read/2023/05/30/143106171/23-kampus-ditutup-akibat-jual-beli-ijazah-dan-gunakan-dana-kip-kuliah
- https://megapolitan.kompas.com/read/2025/12/17/06534091/rangkaian-peristiwa-kasus-tudingan-ijazah-palsu-jokowi-sejak-maret-2025
- https://lampung.antaranews.com/berita/804425/polda-metro-jaya-tetapkan-8-tersangka-kasus-ijazah-palsu-jokowi
- https://ijazah.kemdikbud.go.id/
- https://masoemuniversity.ac.id/artikel/ijazah-tidak-terdaftar-di-sivil-sistem-verifikasi-ijazah-elektronik-langkah-administratif-yang-harus-diambil/
- https://bpmpkalteng.kemendikdasmen.go.id/kemendikdasmen-terapkan-ijazah-elektronik-dan-cetak-mandiri-untuk-sekolah-mulai-tahun-2025/
- https://pds.id/pemanfaatan-blockchain-untuk-ijazah-digital-langkah-strategis-peruri-digital-security-bersama-kemendikdasmen
- https://dinus.ac.id/en/2026/02/antisipasi-pemalsuan-udinus-jadi-kampus-pertama-di-indonesia-dengan-ijazah-100-berbasis-blockchain/
- https://www.detik.com/edu/edutainment/d-8427972/udinus-gunakan-ijazah-blockchain-pratama-arhan-jadi-lulusan-pertama-yang-menerima
- https://www.integrity-indonesia.com/services/employment-background-check-indonesia/
- https://spiritmahasiswa.trunojoyo.ac.id/2023/07/alumni-utm-keluhkan-nomor-ijazah-yang.html
