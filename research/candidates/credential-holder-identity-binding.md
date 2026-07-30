# Credential-to-Person Binding at Point of Hire/Care

Slug: `credential-holder-identity-binding` | Mechanism: identity binding

## Problem & How Truth Is Established Today

Indonesia's professional registries (KKI/"Cek Dokter" for STR, SATUSEHAT SDMK, LPJK SIKI, BNSP, PERADI) answer "is this credential number real and current?" — a sibling candidate (`cross-registry-credential-platform.md`) covers that layer and explicitly carves out identity-binding as a different problem. None answer "is the person in front of me the same natural person the credential belongs to?" That link is established by a human visually comparing a printed photo on a submitted STR/SIP/diploma scan to the candidate's face — a check performed once at hire, with no biometric reference to a government source of truth. Once hired, nothing re-checks the binding at point of care.

## Buyer & Who Pays

Single-side buyer: the employer/verifier pays, no cross-organizational split. Named segments: hospital credentialing committees (a KARS-accreditation requirement, dedicated staff); hospital chains (Siloam, Mayapada, Hermina-scale) centralizing HR across dozens of facilities; corporate occupational-health operators staffing third-party site clinics (the structure PT Pelindo Husada Citra used at Pertamina's Cepu clinic). The credentialed professional and issuing registry are not paid and have no stake in the product.

## Documented Failures (cited)

- **Susanto**: presented the genuine STR of dr. Anggi Yurikno with only the photo swapped, and worked as a "doctor" at PT PHC's Pertamina K3 clinic in Cepu for roughly two years before a 2023 contract-renewal check caught the photo/STR mismatch; sentenced 3.5 years (CNN Indonesia, 4 Oct 2023). Wage fraud: Rp7.5M/month x 35 payments ≈ Rp226M (Jawa Pos); a separate figure cites Rp262M in Surabaya-area losses (CNBC Indonesia). Reportedly deceived seven institutions total (Jawa Pos).
- **Bekasi, 2024**: "Sunaryo" ran an unlicensed clinic five years with no genuine STR/SIP at all — cruder, but evidence the impostor-practitioner market recurs (Merdeka, 2024).
- **Bantul, 2024-25**: a fake practitioner defrauded a patient of Rp538.95M plus a land certificate (Polres Bantul, 2025).
- **Situbondo**: 23 contractors used fake SKA/SKT certificates to win APBD tenders worth Rp300M-2B each — a construction variant of the same binding gap (LSM Geram Maki, re 2016).
- **Banten, Aug 2025**: a forged PERADI lawyer ID card used for fraud/embezzlement (Kominfo.co.id).

## Bottom-Up ARR Path (K4)

Comparable Indonesian pricing exists at the base layer: MedTrack (intraina.id), a credentialing-workflow SaaS with 15+ hospital customers, charges Rp250,000-350,000/month/hospital for STR/SIP/competency document management (verified via product page, 2026-07) — confirming hospitals already budget for credentialing software. Neither MedTrack nor rival SINNAKES/Kredensial.com ("ratusan fasilitas kesehatan") advertises biometric/liveness identity-binding (verified, 2026-07) — the gap is real and unaddressed by name. An identity-binding module (Dukcapil liveness selfie + KTP-NIK cross-check against the STR/SIP holder name, run at hire and periodically after) could sell as a premium add-on, or a per-hire fee analogous to background-check pricing (Integrity Indonesia, T2 Intelligence — quote-only, undisclosed). Illustrative path: 600-700 hospitals/groups at a blended $1,500-2,000/yr ≈ $1.0-1.4M ARR. Evidence quality: **mixed** — base-layer ACV is Indonesia-verified; incremental price and reachable count are inferred.

## Existing Solutions (mid-2026)

Registry lookups: KKI Cek Dokter (free, public, name/number only — no photo/NIK exposed to third parties, institutional API unverified). Credentialing workflow: MedTrack, SINNAKES/Kredensial.com — document storage and KARS-audit workflow, no biometric binding. Generic eKYC/biometric-liveness vendors: Verihubs, VIDA, Privy, Didit — Dukcapil-backed face-match APIs sold to banks/fintechs, none marketed at hospital hiring specifically. Generic background-check firms: Integrity Indonesia, T2 Intelligence, eeCheck — document/reference/criminal-record checks, not biometric binding. Government: Kemendagri/Dukcapil's biometric-liveness push (RFP deadline 10 Mar 2026, ~$10.3M World Bank-backed) targets the citizen-facing IKD digital-ID wallet, not a third-party hiring-verification API (biometricupdate.com, Jan 2026). No vendor combining registry validity + biometric identity-binding for healthcare hiring was found (search, 2026-07).

## Kill Tests

- **K1 (Data access): PASS.** The hospital already collects the candidate's KTP, photo, and STR/SIP scans and can require live biometric consent at hire; Dukcapil-backed face-match is already commercially resellable via licensed API providers (VIDA, Privy, Verihubs), independent of the impostor's or the issuing registry's cooperation.
- **K2 (Oracle bound): PASS.** "Does the person presenting these documents match their own government identity, and does that identity's name match the credential holder's name" is inferable from Dukcapil biometric liveness plus OCR'd document cross-checks — no off-system collusion required; Susanto acted alone.
- **K3 (Absorption): PASS.** No cited 12-month roadmap ties Dukcapil's IKD biometric build to third-party hospital-hiring verification; MedTrack/SINNAKES advertise no biometric-binding feature today. Risk noted, not fatal: both incumbents already own the credentialing relationship and could bolt on a face-match API cheaply.
- **K4 (Bootstrap bar): PASS (mixed evidence).** A real Indonesian base-layer comparable exists (MedTrack); the incremental identity-binding price and full reachable count rest on inference.

**Survives: yes.**

## Scores

- Severity 7 — recurring documented prosecutions and losses (Rp226-262M Susanto, Rp538.95M Bantul, tender fraud) with KARS-mandated credentialing staff/process managing the risk; no single scandal-scale aggregate figure.
- Revenue quality 5 — plausible named segment; base ACV Indonesia-evidenced (MedTrack), incremental biometric pricing inferred.
- WTP 7 — named budget owners (hospital credentialing committees) already pay for an inferior document-only alternative, cited (MedTrack, SINNAKES).
- Data position 4 — Dukcapil-backed face-match is a commodity API resellable by any competitor (Verihubs, VIDA, Privy all offer it); a cross-hospital impostor-registry would accrue value but is unbuilt.
- Absorption distance 5 — plausible absorber (MedTrack/SINNAKES bolt-on) exists but no cited roadmap.
- Competition 6 — no dedicated identity-binding-for-hiring vendor found despite EN+ID search; adjacent generic-eKYC and generic-background-check players exist but none combine the two functions.
- Moat 5 — integration lock-in today; a reusable cross-hospital "verified-once" credential passport would create real network effects if built.

**Weighted: 0.20(7)+0.20(5)+0.15(7)+0.15(4)+0.10(5)+0.10(6)+0.10(5) = 5.7**

## Upside Flag

Secondary evidence only. A verified-once biometric credential could become a portable "professional passport" reused across hospitals in a chain without re-verification, creating a cross-customer network effect (a de-facto shared impostor registry). Same shape extends to construction (SKK holder-borrowing for tenders) and law (PERADI card fraud, cited above) — not scored, not independently verified this pass.

## What Would Kill This

MedTrack or SINNAKES shipping a free biometric-liveness module (no roadmap found as of 2026-07, would flip K3). SATUSEHAT SDMK exposing a verified-NIK field with photo/biometric match to institutional API consumers (would commoditize the core check). Confirmation KKI's STR record holds no NIK even internally, collapsing the strongest binding claim to name-matching alone (unconfirmed — kki.go.id fetch failed, HTTP 500).

## Sources

- https://www.cnnindonesia.com/nasional/20231004162123-12-1007129/susanto-dokter-gadungan-divonis-35-tahun-penjara ; https://www.jawapos.com/surabaya-raya/012962087/profil-susanto-sang-dokter-gadungan-yang-2-tahun-tipu-rs-phc-surabaya-ternyata-kibuli-banyak-institusi
- https://www.researchgate.net/publication/388389412_Tanggung_Jawab_Hukum_dalam_Pengawasan_Tenaga_Medis_Tinjauan_Kasus_Dokter_Gadungan_Susanto
- https://mediaindonesia.com/megapolitan/659982/kepolisian-bekasi-bongkar-klinik-dokter-gadungan
- https://jogja.polri.go.id/bantul/tribrata-news/online/detail/polres-bantul-bekuk-dokter-gadungan-yang-rugikan-pasiennya-hingga-rp500-juta.html
- https://cekskk.com/blog/panduan-wajib-lpjk-skk-konstruksi-terbaru-cek-validitas-dan-hindari-risiko-proyek ; https://www.kominfo.co.id/2025/08/diduga-oknum-advokat-gadungan-dari-lbh.html?m=1
- https://medtrack.intraina.id/ (fetched 2026-07-30: Rp250,000-350,000/month/hospital, 15+ customers, no biometric-binding advertised)
- https://kredensial.com/ (SINNAKES, fetched 2026-07-30: "ratusan fasilitas kesehatan," no biometric-binding advertised)
- https://verihubs.com/en/product/face-recognition/ ; https://vida.id/id/blog/verifikasi-identitas-biometrik ; https://www.integrity-indonesia.com/services/employment-background-check-indonesia/
- https://www.biometricupdate.com/202601/indonesia-seeks-biometric-liveness-detection-in-push-against-id-fraud (IKD liveness RFP, gov-facing scope)
- Prior internal research: /Users/farros/Downloads/VENTURE/research/industries/professional-licensing.md, /Users/farros/Downloads/VENTURE/research/candidates/cross-registry-credential-platform.md
