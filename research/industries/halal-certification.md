# Halal Certification Integrity (halal-certification)

## Problem & Current Workflow
Under UU 33/2014 and PP 42/2024, halal certification is mandatory and state-run through BPJPH (Kemenag). Regular route: business obtains an NIB → applies in BPJPH's SIHALAL portal → selects an accredited LPH (halal inspection body) → halal auditors inspect ingredients, process and facility → findings go to the MUI Fatwa Commission for a halal ruling → BPJPH issues the certificate and label. Self-declare route (micro/small business, low-risk products): a trained assistant (P3H) verifies a statement — no laboratory testing — then fatwa and certificate follow. Upstream, ingredients and slaughter must themselves be halal-certified.

Deadlines: for medium/large food and beverage businesses, certification became mandatory 18 October 2024; micro and small enterprises (UMK) in food, beverage and slaughter must be certified by 17 October 2026 — a deadline roughly three months away as of this scan — with imported products also folded in from October 2026, contingent on recognition of foreign halal bodies (BPJPH, 2024–2026).

## Stakeholders & Who Pays
Producers pay certification fees (or take free SEHATI quotas); BPJPH regulates, issues, and sanctions; 79 LPHs with about 1,740 registered halal auditors nationally (Kemenko PMK, 2024) do inspections — LPPOM MUI alone claims 1,000+ auditors (LPPOM, 2025); MUI holds the fatwa monopoly; P3H assistants shepherd self-declare; BPOM co-polices market products; export buyers and foreign halal authorities (mutual-recognition partners) are external verifiers. Consumers bear the religious-integrity harm but pay nothing.

## Trust Breakdown (documented incidents)
- **Certified products containing pork, April 2025** — joint BPOM–BPJPH sampling found 9 processed foods with porcine DNA/peptides; 7 of them held valid halal certificates. Products were recalled under PP 42/2024 sanctions (BPOM press release; Kompas; Detik, April 2025). This is the core failure: the certificate asserted something laboratory testing disproved.
- **Self-declare abuse** — the 2023 "Nabidz" case, in which a wine-like product obtained a halal certificate via the self-declare route, triggered public criticism of the no-testing pathway (widely reported 2023; not re-verified in this session — (unverified)).
- **Structural gap** — self-declare certificates are issued in the millions (SEHATI quotas: 1 million free certificates in 2025, 1.35 million in 2026, per BPJPH) with no lab verification, while auditor capacity (~1,740) cannot physically inspect the long tail; LPPOM warned of 300–500% application queue surges approaching the 2026 deadline (LPPOM/halalmui.org, 2025 — vendor claim).

## Cost of the Problem
BPJPH certified 5,302,257 products during 2019–2024 (BPJPH, 2024) against a universe of ~62 million UMK (Kemenko PMK, 2024); only ~30% of UMKM held certificates by 2025 (Universitas Islam Indonesia halal center, 2025 — weak source). Certification fees for regular-route SMEs run roughly Rp 300 thousand–5 million per submission (unverified). The April 2025 recall's commercial damage and the value of export access tied to halal recognition: no verified figures. The state absorbs UMK costs via SEHATI, i.e., the beneficiary largely cannot pay.

## Existing Solutions (as of 2026-07)
- **Government:** SIHALAL (end-to-end digital certification and public certificate registry), SEHATI free-certificate program, BPJPH–BPOM joint market surveillance, BPJPH international mutual-recognition agreements.
- **Inspection ecosystem:** LPPOM MUI, Sucofindo, Surveyor Indonesia, university LPHs (79 total).
- **Traceability tech:** as of this search, halal supply-chain blockchain in Indonesia exists only as academic frameworks and pilots (MDPI Economies 2022; MDPI Engineering Proceedings 2025; IEEE bibliometric survey 2025; ScienceDirect "HalalChain" model 2025). No funded Indonesian commercial halal-traceability platform surfaced in searches; the hard-search result is closer to whitespace than to a crowded field.

## Why Insufficient
The certificate registry is already central, digital and authoritative (SIHALAL). What failed in April 2025 was not the registry but the link between certificate and physical product: self-declare skips testing, audits are point-in-time snapshots, and upstream ingredient changes after certification go undetected. Those are physical-verification and sampling-capacity gaps. More lab testing, risk-based sampling, and auditor supply would close more of the gap than any data structure.

## Blockchain Test
Multi-party chain (ingredient suppliers → processors → LPH → MUI → BPJPH → foreign buyers) and genuine external verifiers (importing countries' halal authorities) fit the pattern. But an accepted neutral party exists and is legally unavoidable: BPJPH. Its registry is the ground truth by statute. A ledger cannot detect pork in a certified product; the 2025 scandal would have looked identical on-chain. Chain necessity is moderate at best (upstream ingredient provenance for exporters), low for the domestic mandate.

## Kill Test Verdict — KILLED
1. Problem survives without blockchain? **Yes.** Pass.
2. PostgreSQL under a single trusted operator? **Yes — SIHALAL is exactly that**, and the residual failures are physical, not custodial. Fail.
3. Incumbent ships it in 6 months? Certification workflow: already BPJPH's product. Traceability add-ons could be shipped by LPPOM or SIHALAL vendors, though none have. Partial fail.
4. Standalone value? Weak — UMK cannot pay (state pays via SEHATI); LPHs are small buyers; only exporters have real WTP. Fail.

## Scores
- Severity 7 — a certified-haram scandal in 2025 with recalls and regulatory exposure; reputational stakes for the whole regime.
- Market 5 — certification/integrity services around a multi-million-product mandate; tooling TAM plausibly $50–250M, unverified.
- WTP 4 — primary beneficiaries (UMK, consumers) cannot pay; the state gives certification away free; exporters are the only strong payers.
- Chain 5 — multi-org supply chain, but BPJPH/MUI are accepted (statutory) intermediaries.
- Urgency 9 — the UMK mandatory deadline of 17 October 2026 is in force ~3 months out, with queue surges predicted.
- Competition 7 — hard search found only academic pilots for halal traceability; SIHALAL owns workflow, nobody owns integrity.
- Moat 5 — integration with SIHALAL/LPH workflows could lock in, but no cross-org network effect is guaranteed.
- **Weighted: 5.9**

## What Would Kill This Idea
Killed on the kill test despite the best competition and urgency profile of this batch: the trust failure is physical (what is in the product) rather than informational (what the record says), the statutory central registry already exists, and the paying customer is missing — the state subsidizes precisely the segment with the deadline. Revival condition: if foreign halal authorities begin demanding ingredient-level provenance proof independent of BPJPH for Indonesian exports, the exporter-paid traceability wedge reopens; no such requirement was found as of July 2026.

## Sources
- https://bpjph.halal.go.id/detail/bpjph-17-oktober-2026-produk-makanan-minuman-umk-harus-sudah-bersertifikat-halal-bagaimana-dengan-produk-luar-negeri/
- https://bpjph.halal.go.id/read/kewajiban-sertifikasi-halal-produk-umk-ditunda-menag-bentuk-keberpihakan-pemerintah
- https://www.republika.id/posts/52823/selain-produk-umk-wajib-sertifikasi-halal-tetap-berlaku-mulai-oktober-2024
- https://www.pom.go.id/berita/sinergi-pengawasan-produk-halal-bpom-dan-bpjph-temukan-9-produk-pangan-olahan-mengandung-babi (April 2025)
- https://www.kompas.com/tren/read/2025/04/22/111500465/bpom-rilis-daftar-9-produk-pangan-mengandung-babi-7-di-antaranya
- https://kemenkopmk.go.id/sertifikasi-halal-siap-mendunia-indonesia-masih-butuh-auditor-halal (auditor counts)
- https://bpjph.halal.go.id/read/bpjph-buka-kuota-1-juta-sertifikasi-halal-gratis-tahun-2025-bagi-pelaku-umk
- https://bpjph.halal.go.id/detail/kepala-bpjph-capaian-capaian-bpjph-adalah-bagian-dari-legasi-terbaik-kementerian-agama/ (5.3M products 2019–2024)
- https://halalmui.org/sertifikasi-halal-2026-panduan-cara-daftar/ (queue surge claim)
- https://www.mdpi.com/2227-7099/10/6/134 ; https://www.mdpi.com/2673-4591/84/1/27 ; https://ieeexplore.ieee.org/document/10913468/ ; https://www.sciencedirect.com/science/article/pii/S259012302502660X (academic-only traceability landscape)
