# Cross-Registry Credential Verification Platform

Slug: `cross-registry-credential-platform` | Mechanism: credential verification

## Problem & How Truth Is Established Today

Indonesia has no single registry of "is this person's professional credential real and current" — it has at least five, each issuer-siloed: KKI (doctors — STR via "Cek Dokter," free public lookup), Kemenkes SATUSEHAT SDMK (STR/SIP lifecycle, live since 11 Oct 2023), Kemendikbud's SIVIL/PDDikti (diploma/ijazah verification), LPJK's SIKI (construction SKA/SKT/SKK), and Kemenhub's pelaut.dephub.go.id (seafarer certificates). Each portal is free, public, one-record-at-a-time, government-owned; none offers a bulk or cross-registry API. Today an employer, hospital credentialing committee, tender panel, or manning agent either checks each registry manually per candidate, pays a generalist background-check firm (e.g. Integrity Indonesia, bundling 24+ check types including "professional certification verification," pricing not published), or — for construction specifically — uses a private LPJK-data wrapper site (cekskk.com) that already monetizes exactly this pattern for one registry.

## Buyer & Who Pays

Single-side buyer, no cross-organizational payment split: the verifier pays. Named segments: hospital credentialing committees (a KARS accreditation requirement); general contractors and tender-preparation/compliance staff who must document workforce SKK coverage (only 629,622 of 8.2M construction workers hold a valid SKK — Kompas/LPJK chair, Jul 2026); HR and staffing/background-check firms; manning agencies (P3MI/SIUPPAK holders) vetting land-based migrant-worker credentials. The issuing registries (KKI, LPJK, Kemendikbud, Kemenhub) are not paid and have no commercial stake in the verifier's product.

## Documented Failures

- SIVIL false negatives: ~150 UTM Trunojoyo 2022-cohort alumni found genuine diploma numbers unregistered in PDDikti/SIVIL, blocking ASN/PPPK/PPG applications for over a month even after correction requests (Spirit Mahasiswa Trunojoyo, Jul 2023).
- Susanto: a non-doctor practiced ~2 years at a Pertamina clinic using a real doctor's stolen identity documents; sentenced 3.5 years, 19 Mar 2024 (ResearchGate case review; Merdeka, 2024) — proves registry lookup alone misses identity-binding fraud.
- Bekasi: a fake doctor practiced 5 years on forged SIP/STR before arrest (Merdeka, 2024). Bantul: a fake practitioner defrauded a patient Rp538.95 million plus a land certificate (Polres Bantul, 2025).
- Lombok Tengah: brokers sold fake STRs to nurses who failed competency exams, Rp1.5-2.5M each (Radar Lombok, 2018).
- Situbondo: 23 contractors used fake SKA/SKT to win APBD tenders worth Rp300M-2B each (LSM Geram Maki, re 2016 projects).
- Banten: a forged PERADI lawyer ID reported to Polda Banten, Aug 2025 (Kominfo.co.id).

## Bottom-Up ARR Path

Segments: ~3,000 hospitals with credentialing committees; general contractors/compliance vendors serving the >7.5M SKK-uncertified construction workforce; staffing/background-check firms; manning agencies. Comparable pricing: cekskk.com already sells an LPJK-only wrapper commercially (existence verified, price undisclosed — mixed); Integrity Indonesia sells multi-check background packages commercially (existence verified, price undisclosed — mixed). No first-party ACV exists for cross-registry API access specifically. Illustrative path: 300-500 paying accounts (hospital credentialing offices, contractor compliance teams, staffing firms) at an inferred $2,500-4,000/yr API+monitoring subscription ≈ $1.0-1.6M ARR. Reachability: cold-outbound to hospital procurement and construction-compliance consultants is a known Indonesian B2B SaaS channel (cekskk.com is the proof of concept). Evidence quality: **weak-to-mixed** — segment and comparable-model existence verified; exact ACV inferred, not observed.

## Existing Solutions (mid-2026)

Government (free, one-at-a-time, no bulk API): KKI Cek Dokter, SATUSEHAT SDMK, SIVIL/PDDikti, LPJK SIKI, Kemenhub pelaut.dephub.go.id. Commercial: cekskk.com (LPJK-only reseller/wrapper); Integrity Indonesia and similar background-check firms (broad, not registry-specialized); hospital SIMRS/credentialing-module vendors reportedly build STR/SIP checks into workflow (per Program A prior research citing "Trustmedis and other vendors" — **unverified** this round, search budget exhausted before re-confirmation). No funded Indonesian startup was found dominating cross-registry credential verification as a single product (search, 2026-07).

## Kill Tests

- **K1 Data access — PASS.** All five source registries are free, public, queryable without cooperation from the person being checked. Risk noted, not fatal: portals are built for single lookups (likely CAPTCHA-gated), no official bulk API exists, so scraping-at-scale carries ToS/legal-access risk that would need per-registry resolution.
- **K2 Oracle bound — PASS**, with a scope caveat. "Is this STR/SKA/ijazah number real and current" is fully inferable from the registries. Identity-*binding* fraud (Susanto) is a different, adjacent problem (does the holder match the person in front of you) that a registry-truth product does not solve — must be sold as "credential authenticity," not "impostor detection."
- **K3 Absorption — PASS.** No cited 12-month roadmap for a *unified* cross-registry bulk-verification API was found. Each registry keeps digitizing independently (SATUSEHAT SDMK, SIVIL, SIKI), which is per-registry hardening, not cross-registry aggregation — the product's exact function.
- **K4 Bootstrap Bar — PASS (weak-to-moderate evidence).** Plausible named segments and a proven-to-exist commercial-wrapper model (cekskk.com), but no first-party Indonesian ACV disclosed for this exact product shape.

**Survives: yes.**

## Scores

- Severity 7 — documented prosecutions/patient harm yearly across professions; hospitals and tender committees run dedicated credentialing/compliance staff.
- Revenue quality 5 — plausible named segments; ACV rests on inference from unpriced comparables (cekskk.com, Integrity Indonesia).
- WTP 6 — named budget owners (hospital credentialing, tender compliance) already pay for an inferior/partial alternative, but price undisclosed.
- Data position 4 — underlying registries are commodity/public; value would come mainly from continuous change-history monitoring (revocations, re-verification over time), which is a thin but real accumulating asset.
- Absorption distance 5 — plausible state or SIMRS-vendor absorber, no cited roadmap for the cross-registry function specifically.
- Competition 5 — several narrow attempts (cekskk.com, generalist background-check firms), none dominant across all five registries.
- Moat 5 — thin wrapper over public data on its own, but embedding into a hospital's or contractor's compliance workflow creates real integration lock-in.

**Weighted: 0.20(7)+0.20(5)+0.15(6)+0.15(4)+0.10(5)+0.10(5)+0.10(5) = 5.4**

## Upside Flag

Secondary evidence only. If a bulk API wedge works in construction/health, the same shape extends to legal (PERADI), notaries, and eventually exports to Philippines/Vietnam, whose professional registries are similarly fragmented (not independently verified this pass). A B2G contract to become the state's official cross-registry aggregator is a plausible but speculative expansion, not a base-case revenue assumption.

## What Would Kill This

A single GovTech Indonesia / Satu Data initiative shipping a unified, bulk, English-and-Indonesian credential-verification API within 12 months would directly absorb the function (no such roadmap found as of 2026-07, so this is a monitoring flag, not a current kill). Persistent CAPTCHA/ToS blocks across all five registries that make bulk access legally or technically infeasible would also kill K1. If SIMRS credentialing vendors are confirmed (next pass) to already ship real-time multi-registry API checks bundled free into hospital software, the health-vertical wedge specifically would be absorbed.

## Sources

- https://spiritmahasiswa.trunojoyo.ac.id/2023/07/alumni-utm-keluhkan-nomor-ijazah-yang.html
- https://www.researchgate.net/publication/388389412_Tanggung_Jawab_Hukum_dalam_Pengawasan_Tenaga_Medis_Tinjauan_Kasus_Dokter_Gadungan_Susanto
- https://www.merdeka.com/tag/dokter-gadungan
- https://jogja.polri.go.id/bantul/tribrata-news/online/detail/polres-bantul-bekuk-dokter-gadungan-yang-rugikan-pasiennya-hingga-rp500-juta.html
- https://radarlombok.co.id/str-palsu-perawat-beredar-di-lombok-tengah.html
- https://www.kompas.com/properti/read/2026/07/17/204013121/ironi-sektor-konstruksi-baru-629622-orang-pekerja-bersertifikat
- https://cekskk.com/blog/panduan-wajib-lpjk-skk-konstruksi-terbaru-cek-validitas-dan-hindari-risiko-proyek
- https://www.kominfo.co.id/2025/08/diduga-oknum-advokat-gadungan-dari-lbh.html?m=1
- https://kki.go.id/blog/read/verifikasi-str
- https://rc.kemkes.go.id/news/transformasi-digital-administrasi-tenaga-kesehatan-melalui-satusehat-sdmk-4262db
- https://www.integrity-indonesia.com/services/employment-background-check-indonesia/
- Prior internal research (Program A, 2026-07-29): /Users/farros/Downloads/VENTURE/research/industries/professional-licensing.md, /Users/farros/Downloads/VENTURE/research/industries/workforce-credentials.md, /Users/farros/Downloads/VENTURE/research/CROSSCUT.md
