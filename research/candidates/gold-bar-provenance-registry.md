# Custodian-Independent Gold Bar Provenance & Authentication

Slug: `gold-bar-provenance-registry` | Mechanism: provenance

## Problem & How Truth Is Established Today

At retail, pawn, and marketplace point-of-trade, gold-bar authenticity is established by the issuer, not an independent party. An Antam Logam Mulia bar ships with a CertiEye QR certificate scanned in Antam's own app for an "AUTHENTICATED" screen — issuer-run software authenticating an issuer-run claim. Pegadaian (the dominant pawn/custody network, ~97% of licensed bullion-ecosystem tonnage as of Feb 2026, per this program's prior gold-bullion memo) runs its own free in-house taksiran (appraisal) — typically visual/weight/dimension checks, not routine XRF or ultrasonic assay per branch. Marketplace sellers (Tokopedia, Shopee) provide no authentication step; buyers rely on seller reputation and after-the-fact disputes. Independent physical assay (XRF spectroscopy, ultrasonic gauging for tungsten-filled fakes) exists but is confined to specialist jewelry appraisers, not standard at pawn or marketplace point-of-sale.

## Buyer & Who Pays

No cross-organizational split: whoever wants assurance pays. Candidate segments: independent (non-Pegadaian) pawnshop networks; marketplace platforms' trust-and-safety teams; individual sellers/buyers in high-value private resale (inheritance bars, estate sales). Pegadaian itself is simultaneously the largest theoretical buyer and the most conflicted — its business model depends on being trusted as custodian, so a product whose value proposition is "verify independently of the custodian" cuts against its own positioning.

## Documented Failures (cited)

- **109-tonne Antam case**: 2010-2022, successive heads of Antam's precious-metals unit illegally attached the genuine brand to privately sourced gold; six former executives sentenced 8 years each in 2025, seven private counterparts 6-9 years; state loss Rp3.31 trillion (Kompas.id, 2025; Antara, 2025). Metallurgically real but illegitimately branded — proof issuer-run authentication cannot catch issuer-insider fraud.
- **Counterfeit CertiCards**: Pegadaian/Antam maintain standing public advisories on fake Antam certificates in circulation (Pegadaian, 1 Jul 2025); no aggregate loss figure exists (unverified).
- **Marketplace fraud**: recurring Media Konsumen complaints of counterfeit/repackaged precious-metal items on Tokopedia, including a Rp12 million logam-mulia repack case (Mar 2023) — a documented pattern across 2021, 2023, 2025.
- **Tamasia collapse** (Jan 2023): forced liquidation at ~Rp800,000/gram against a same-day official price of Rp1,043,000/gram once Bappebti confirmed the platform was never licensed — a backing failure, not bar authenticity, but the same "no independent verification" pattern (Tempo; CNBC Indonesia, 2023).

## Bottom-Up ARR Path (K4)

No Indonesian pricing comparable was found for independent third-party gold-bar authentication as a standalone paid service (search, 2026-07) — Pegadaian's own appraisal is free/bundled into the pawn transaction, and no competing paid product has established a benchmark price. The realistic buyer universe is either thousands of fragmented small pawnshops (low willingness-to-pay, high acquisition cost) or a handful of large platforms (Pegadaian, Tokopedia, Shopee) unlikely to be self-serve buyers at bootstrap stage. A physical-assay/lab-service model (XRF device plus certificate-issuance app) is inherently ops-heavy — equipment, logistics, in-person or mail-in testing — in tension with a founder-led, evening-sized path. Evidence quality: **weak** — no Indonesian ACV comparable, and the buyer-count/ops-model combination does not fit a bootstrap SaaS shape.

## Existing Solutions (mid-2026)

Antam CertiEye (QR certificate check, issuer-run). UBS Gold publicly asserts it "memastikan keaslian produknya" (ANTARA Yogyakarta, 8 Oct 2025) — also issuer-run. LBMA/aXedras Gold Bar Integrity database (live Jan 2025, 100% Good Delivery refiners onboard by start-2026, incl. Antam) — wholesale refiner/vault chain only, not Indonesian retail circulation. Blocktogo/GIDR tokenization, OJK-sandbox-approved Aug 2025, custodied at Pegadaian — state-blessed, not an independent authentication product. OJK's Bullion Roadmap 2026-2031 and POJK 2/2026 (gold ETF) further anchor trust around Pegadaian/BSI. No Indonesian startup offering independent, custodian-agnostic retail bar/certificate authentication was found (this pass, and prior adversarial memo `research/verify/gold-bullion.md`).

## Kill Tests

- **K1 (Data access): PASS**, scope-limited. A private pawnshop or individual holder physically possesses the bar and can commission independent XRF/ultrasonic/density testing without needing Antam's or Pegadaian's cooperation — proving purity/genuineness. Confirming a bar was genuinely Antam-*issued* (vs. stolen/laundered) needs Antam's issuance ledger, not shared with third parties (LBMA GBI access is refiner/vault-only) — that narrower claim fails K1, but the dominant pain point (counterfeit/underweight/tungsten-filled bars) does not depend on it.
- **K2 (Oracle bound): PASS.** Physical composition is a directly measurable fact (density, XRF spectral signature) requiring no party's cooperation and no trust in any paper record — among the most oracle-bound claims in this program.
- **K3 (Absorption): PASS**, for this narrow retail/pawn/marketplace niche specifically. The state-anchored roadmap (OJK Bullion Roadmap, Blocktogo/Pegadaian tokenization, LBMA GBI) targets the wholesale/institutional layer; no cited 12-month roadmap targets independent retail point-of-sale authentication. Risk noted: Pegadaian's core competency is appraisal, and it could extend in-house XRF coverage without any external announcement.
- **K4 (Bootstrap bar): FAIL.** No Indonesian ACV comparable; realistic buyer base is either too fragmented (small pawnshops) or too large/non-self-serve (Pegadaian, marketplaces); physical-lab/device service model is ops-heavy, in tension with a founder-led self-serve path (G6).

**Survives: no.**

## Scores

- Severity 6 — the 109t case is a documented Rp3.31T scandal with 2025 convictions, but that harm sits upstream of retail; the retail/pawn/marketplace niche has recurring complaints and standing advisories, not its own aggregate loss figure.
- Revenue quality 3 — no Indonesian ACV comparable; buyer base fragmented or non-self-serve.
- WTP 4 — loss is real but diffuse per-transaction; Pegadaian's free in-house appraisal crowds out a paid budget line for the dominant buyer.
- Data position 3 — physical assay readings are commodity/replicable by any competitor with equivalent equipment.
- Absorption distance 5 — Pegadaian is a plausible in-house absorber (appraisal is its core business) with no cited roadmap for this extension.
- Competition 7 — no independent Indonesian retail-authentication startup found across two search passes; CertiEye/UBS Gold are issuer-run, not competing directly.
- Moat 3 — single-tenant, easily switchable; a second XRF device or competing lab service is a low-friction substitute.

**Weighted: 0.20(6)+0.20(3)+0.15(4)+0.15(3)+0.10(5)+0.10(7)+0.10(3) = 4.4**

## Upside Flag

Secondary evidence only. If OJK's coming wave of sandbox gold-token issuers (beyond Blocktogo) needs third-party reserve attestation to differentiate from Pegadaian-anchored incumbents, a services-hybrid attestation product could emerge — this program's `reserve-backing-attestation.md` candidate covers that adjacent shape and independently fails K4 on a thin, non-self-serve buyer universe.

## What Would Kill This

Pegadaian rolling out in-house XRF/ultrasonic testing across its branch network (no such rollout found as of 2026-07, would directly absorb the pawn-side niche). A marketplace platform (Tokopedia/Shopee) building native precious-metal authentication into trust-and-safety. Confirmation no fragmented pawnshop segment will pay for third-party testing when free in-house appraisal exists (consistent with current evidence, not fully confirmed).

## Sources

- https://www.kompas.com/jawa-barat/read/2025/03/12/145656588/membongkar-fakta-kasus-korupsi-pt-antam-kerugian-negara-rp-33-t-dan ; https://www.antaranews.com/berita/4864397/tujuh-pihak-swasta-divonis-6-9-tahun-penjara-di-kasus-korupsi-emas
- https://pegadaian.co.id/artikel/emas/sertifikat-emas-antam-palsu
- https://www.lbma.org.uk/gold-bar-integrity-ecosystem ; https://www.axedras.com/milestones
- https://coinvestasi.com/berita/pegadaian-dan-blocktogo-rilis-tokenisasi-emas-gidr ; https://goidr.co.id/faq
- https://www.stabilitas.id/ojk-rilis-roadmap-bulion-2026-2031-kelolaan-emas-pegadaian-bsi-tembus-153-ton/
- https://www.tempo.co/ekonomi/warganet-keluhkan-tamasia-bappebti-sebut-perusahaan-jual-emas-itu-tidak-berizin-227819
- ANTARA News Yogyakarta, "UBS Gold pastikan keaslian produknya," 8 Oct 2025
- Media Konsumen, "Tokopedia Membiarkan Penjual Menjual Barang Palsu di Platformnya?" 9 Jul 2025; "Tokopedia Membela Penipu... Logam Mulia Senilai 12 Juta Rupiah," 21 Mar 2023
- Prior internal research: /Users/farros/Downloads/VENTURE/research/verify/gold-bullion.md ; /Users/farros/Downloads/VENTURE/research/industries/gold-bullion.md
