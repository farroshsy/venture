# Notarial Deeds & Document Legalization (notary-civil-docs)

## Problem & Current Workflow
Authentic deeds (akta autentik) — company incorporations, land sale deeds (AJB via PPAT), credit agreements, wills — must be executed before a notary: parties appear physically, sign the minuta with fingerprints, the notary keeps the protocol (paper archive) and issues salinan (copies). Company deeds are then registered electronically through AHU Online (Ditjen AHU, Kemenkumham), as are fidusia registrations and wasiat reports. Documents going abroad use apostille via apostille.ahu.go.id since June 2022 (Permenkumham 6/2022, replaced by Permenhukum 50/2025); verification takes 3–5 days and certificates now print at all regional Kanwil (Ditjen AHU, 2023–2025). Stamp duty uses e-Meterai, issued exclusively by state-owned Peruri and sold through authorized distributors. "Cyber notary" authority nominally exists in the elucidation of Art. 15(3) UUJN, but scholarship and court practice hold that an electronically executed notarial deed degrades to a private deed because UUJN still demands physical presence and fingerprints (Notaire/Unair, 2021; tatkala.co, 2026). So the trust core of the system — minuta, protocol, signatures — remains paper.

## Stakeholders & Who Pays
Roughly 3,000 notaries practice in Central Java alone (Kemenkum Jateng, April 2025); the national figure is commonly put above 20,000 (unverified). Parties to transactions pay notary fees; banks pay for credit and collateral deeds; companies pay for corporate acts. Oversight: Majelis Pengawas (MPD/MPW/MPP) and Kemenkumham; INI is the professional body. Disputes land in civil and criminal courts; police and ATR/BPN task forces handle mafia tanah. Peruri monopolizes the e-Meterai revenue; Kemenkumham collects PNBP on AHU services.

## Trust Breakdown (documented incidents, cited)
- Forged deeds are the operating tool of the land mafia. ATR/BPN uncovered 86 land-mafia cases with 159 suspects in 2023, claiming Rp13.2 trillion in potential losses averted (Kompas, March 2024); the Grobogan case alone was valued at Rp3.41 trillion and the Dago Elos/Bandung case at Rp3.65 trillion, both built on falsified documents and false statements inserted into authentic deeds (Antara, 2024; InfoPublik, 2024).
- Notaries as perpetrators: a Gresik notary/PPAT was arrested in 2025 for forging survey documents and signatures that shrank a victim's certified land by thousands of square meters (detik, 2025); a Malang notary was reported to police for deed forgery and double sale after MPD channels failed (Suara Pancasila, 2026); a Kudus notary was reported in March 2025 for a forged signature in a 2021 AJB (search record, 2025). In the Nirina Zubir case, family land worth Rp17 billion was transferred using forged powers of attorney processed through notaries (detik, 2021).
- e-Meterai stress: during CASN 2024 registration Peruri's e-meterai site failed for days, spawning warnings about counterfeit e-meterai sold by third parties; Peruri published visual authenticity checks (CNBC Indonesia, Sept 2024; Jawa Pos, 2024).

## Cost of the Problem
- Land-mafia potential losses in one year's uncovered cases: Rp13.2 trillion (ATR/BPN via Kompas, 2024). Deed forgery is a core enabling step in these schemes.
- Litigation cost and duration for deed disputes: (unverified).
- Total annual notary-services fee pool: (unverified).

## Existing Solutions (as of 2026-07, named)
- State systems: AHU Online (incorporation, fidusia, wasiat), apostille.ahu.go.id with QR-verifiable certificates, e-Meterai (Peruri monopoly), IKD/PSrE signatures for private documents.
- Licensed PSrE (Privy, VIDA, Peruri) provide legally valid electronic signatures — but these cannot produce an authentic notarial deed under current UUJN.
- Legaltech: Kontrak Hukum, Legalku and similar startups broker incorporation and notary services online; they digitize intake, not deed integrity.
- Verification: no national public registry lets a bank or buyer cryptographically verify an arbitrary deed's existence and content; checking means asking the notary or Kemenkumham. No funded Indonesian startup doing deed integrity/verification was found (searched; absence of evidence, mid-2026).

## Why Insufficient
The forgery surface survives digitization because the authentic-deed layer is legally locked to paper: protocols sit in notary offices, salinan can be fabricated, and third parties have no independent verification path. AHU registers outcomes (company data) but not deed contents; apostille verifies the official's signature, not the underlying document's truth.

## Blockchain Test
Multi-party, adversarial, and courts need proof — superficially a fit. But Indonesia has an accepted, legally exclusive trust operator for exactly this layer: the state. Kemenkumham could add a hash-registry to AHU; Peruri's e-Meterai monopoly shows the state claims document-trust infrastructure for itself (instructive precedent per the research hint). A private chain of notarized hashes has no evidentiary status under UUJN, and with physical-presence requirements intact, the paper minuta remains the legal original whatever gets anchored.

## Kill Test Verdict
1. Problem survives without blockchain: YES. 2. PostgreSQL under a trusted operator just as good: YES — fails. A central deed-hash registry run by Kemenkumham (which already runs AHU/apostille) solves verification; courts would accept it precisely because it is the state's. 3. Incumbent ships in 6 months: plausibly YES — Peruri/AHU can mandate it; PSrE can bolt on document verification. 4. Standalone value: NO — the monetizable trust-anchor position is state-reserved, and notaries are fragmented low-WTP buyers. KILLED on test 2, with test 4 also failing.

## Scores
- Severity 8 — forged authentic deeds enable trillion-rupiah land fraud and criminal exposure for parties and notaries (ATR/BPN 2024; detik 2025).
- Market 4 — notary fees are large in aggregate, but the addressable software/verification slice is well under $250M (unverified, conservative).
- WTP 4 — 20k+ fragmented small offices; banks would pay but expect the state to provide the registry.
- Chain 5 — multi-org with an accepted trusted intermediary (Kemenkumham/Peruri) exactly matching the anchor.
- Urgency 5 — recurring mafia-tanah scandals create pressure, but UUJN revision has been "coming" for a decade with no deadline.
- Competition 6 — no private player owns deed verification; only state systems and incorporation brokers; pilots/whitespace but for structural reasons.
- Moat 4 — workflow integration with notary offices is sticky, yet the state can subsume the trust layer at any time.

Weighted: 5.3

## What Would Kill This Idea
Already killed: the state monopoly on document trust (e-Meterai precedent, AHU rails) plus UUJN's paper-original requirement means a private ledger has neither legal force nor a defensible position. A UUJN revision enabling cyber notary would help incumbent state bodies and PSrE first, not a startup.

## Sources
- https://www.detik.com/jatim/hukum-dan-kriminal/d-7963417/nyambi-jadi-mafia-tanah-notaris-di-gresik-ditangkap
- https://www.detik.com/jatim/hukum-dan-kriminal/d-7966412/14-orang-diperiksa-terkait-kasus-notaris-gresik-nyambi-mafia-tanah
- https://suarapancasila.id/skandal-dugaan-mafia-tanah-oknum-notaris-di-malang-dilaporkan-terkait-pemalsuan-akta-dan-penjualan-ganda/
- https://news.detik.com/berita/d-5816228/polisi-segera-panggil-2-notaris-di-kasus-mafia-tanah-rp-17-m-nirina-zubir
- https://www.kompas.com/properti/read/2024/03/09/060000721/ungkap-86-kasus-mafia-tanah-bpn-selamatkan-rp-13-2-triliun-
- https://www.antaranews.com/berita/4197990/menteri-ahy-ungkap-kasus-mafia-tanah-terbesar-senilai-rp341-triliun
- https://infopublik.id/kategori/nasional-ekonomi-bisnis/878957/menteri-atr-bpn-ahy-ungkap-kasus-mafia-tanah-di-bandung-selamatkan-kerugian-rp365-triliun
- https://www.cnbcindonesia.com/tech/20240905122136-37-569358/peruri-buka-suara-alasan-e-meterai-cpns-2024-error-dan-sulit-diakses
- https://www.jawapos.com/ekonomi/015054603/e-meterai-peruri-jadi-dokumen-cpns-2024-begini-cara-cek-meterai-elektronik-asli-atau-palsu
- https://portal.ahu.go.id/id/detail/20-publication/3810-kabar-gembira-mulai-saat-ini-pencetakan-sertifikat-apostille-bisa-di-kanwil-kemenkumham-seluruh-indonesia
- https://syafiraservices.com/panduan-apostille-kemenkumham-2026/
- https://tatkala.co/2026/04/01/cybernotary-uujn-dan-uu-ite-2025-payung-hukum-ada-notaris-masih-di-persimpangan-digital/
- https://e-journal.unair.ac.id/NTR/article/view/67806
- https://jateng.kemenkum.go.id/berita-utama/tambah-186-orang-notaris-jawa-tengah-genap-3000
