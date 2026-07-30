# Land Titles & BPN (Indonesia)

Researched 2026-07-29. Phase 1 scan, pre-committed rubric.

## Problem & Current Workflow

Land registration is a state monopoly of Kementerian ATR/BPN under PP 24/1997 (amended by PP 18/2021). First-time registration runs either sporadically (owner applies at the local land office) or systematically through PTSL, the mass-titling program running since 2017. Steps: application with basis-of-right documents (girik/letter C village records, inheritance papers), cadastral survey, public announcement period, then issuance of a land book and certificate. Transfers require a PPAT (land-deed official) to execute an AJB after an electronic certificate check, payment of BPHTB and income tax, then name transfer (balik nama) at the land office. Mortgages register electronically via HT-el since 2020.

Status mid-2026: 126.55 million parcels registered by April 2026 (125.6 million by end-2025, of which 97.4 million certificated) (ATR/BPN via Bisnis.com/Infopriangan, 2025–2026). Electronic certificates: all land offices implement issuance since October 2024, but only 7.6 million e-certificates existed by March 2026 — 7.8% of the stock; 89.4 million certificates (92.2%) remain paper (ATR/BPN via Infonasional, 2026). The minister has stated all certificates issued from 2026 will be digital, with "blockchain and smart contracts" targeted for 2028 (Inilah.com, 2025) — that is a plan, not a deployment; no production blockchain registry was verified.

## Stakeholders & Who Pays

- ATR/BPN and ~480 land offices: operate the registry; government budget pays.
- PPAT/notaries: gatekeep transactions, charge fees.
- Village/kelurahan officials: hold pre-registration records (letter C) — a recurring fraud vector.
- Banks: rely on certificates as collateral; pay HT-el and checking fees.
- Buyers, developers, and citizens: bear fraud losses; courts (PN/PTUN) and the Satgas Anti-Mafia Tanah (ATR/BPN + Polri + Kejaksaan, since 2018) handle disputes.

## Trust Breakdown (documented incidents)

- Mbah Tupon case (Bantul, 2025): a 68-year-old illiterate farmer's 1,655 m² certificate was transferred to another name and pledged for a Rp1.5 billion loan without his knowledge; seven perpetrators including a former village head/DPRD member were arrested April 2025 and convicted November 2025; certificates returned April 2026 (detik, 2025; ANTARA Yogyakarta, 2026).
- Malang double certificates (2025): BPN Kabupaten Malang issued a 2024 SHM over land already covered by a 1994 SHM held by residents for 30 years; dozens reported the case to Polda Jatim (Beritajatim, 2025).
- Satgas Anti-Mafia Tanah 2025 results: 90 cases resolved (target 65), 185 suspects named, Rp23.38 trillion in potential state losses averted, 14,315 ha of land saved (ATR/BPN via detik/Harianjogja, December 2025).
- Case load: 3,260 land dispute/conflict cases recorded through September 2025 (detik, November 2025); 6,015 cases received October 2024–October 2025, 50.02% resolved (ATR/BPN, 2025).
- Double and forged certificates persist into the e-certificate era (Tatkala, June 2026).

## Cost of the Problem

- Rp23.38 trillion potential losses averted by the anti-mafia task force in 2025 alone (ATR/BPN, 2025).
- Rp9.67 trillion in potential losses saved via dispute/conflict resolution October 2024–October 2025 (ATR/BPN, 2025).
- Individual exposure is existential: single-family losses of Rp1.5 billion+ (Mbah Tupon, 2025). Aggregate private losses, litigation cost, and collateral-value drag: (unverified).

## Existing Solutions (as of 2026-07)

- ATR/BPN's own modernization: sertifikat elektronik (Permen ATR 3/2023), Sentuh Tanahku app, BHUMI map portal, HT-el electronic mortgage, electronic certificate checking for PPATs, PTSL mass titling (~4.3 million parcels/year average; 2026 target 1.87 million after budget cuts — Bisnis.com, 2025/2026).
- Satgas Anti-Mafia Tanah (enforcement, not prevention).
- Blockchain: academic pilots and readiness studies only (STPN journals, UI thesis); ministerial roadmap statements for 2028. No verified production system.
- Meridia (Netherlands): smallholder land documentation in Indonesia for agri supply chains (EUDR-driven) — parcel mapping, not registry integrity (Common Fund for Commodities; meridia.land).
- Manual due-diligence services (law firms, e.g., Putranto Alliance certificate verification).

## Why Insufficient

Every safeguard runs through the same custodian. The fraud pattern is insider-mediated: village heads, rogue notaries, and compromised land-office processes produce genuine-looking (or genuinely issued) conflicting certificates. E-certificates centralize the record further without giving citizens, banks, or courts a way to verify history independently of BPN. The Malang case is precisely a failure BPN's own database cannot self-police: the registry issued the second certificate.

## Blockchain Test

This is the strongest chain fit of the three: multi-party (BPN, notaries, banks, courts, citizens), the custodian itself is the distrusted element, and external verifiers need proof independent of the record-keeper — a genuine anchor-7+ scenario. A PostgreSQL under BPN is exactly what exists and exactly what fails.

## Kill Test Verdict — KILLED

1. Problem survives without blockchain? YES (passes).
2. PostgreSQL under a single trusted operator? NO — the operator (BPN) is the party whose integrity is in question (passes).
3. Incumbent ERP feature in 6 months? NO (passes).
4. Enough value for a standalone company? NO — only BPN can legally operate the registry; a private tamper-evidence layer has no legal force in court or at a bank. The venture collapses into winning a politically fraught government IT procurement against an incumbent state program already funded and rolling out. Hint confirmed: politically hard. FAILS.

## Scores

- Severity 9 — documented mass fraud, Rp23T-scale exposure, existential losses for victims, criminal syndicates.
- Market 5 — government land-IT budget plus bank due-diligence spend plausibly $50–250M TAM for a vendor; (unverified) precisely.
- WTP 3 — victims (citizens) cannot pay; government procurement is slow and political; banks pay only small checking fees.
- Chain 7 — multi-org, no accepted neutral party besides the distrusted custodian; independent verifiability would change bank and court behavior.
- Urgency 7 — conversion of 89.4M paper certificates is in force now; fresh scandals (Mbah Tupon) keep political attention high.
- Competition 4 — the funded incumbent with traction is the state's own e-certificate program; competing means displacing or supplying it.
- Moat 5 — a mandate would confer protocol position, but that mandate is the unobtainable part.

Weighted: 0.20(9)+0.20(5)+0.15(3)+0.15(7)+0.10(7)+0.10(4)+0.10(5) = **5.9**

## What Would Kill This Idea

Already killed on standalone-company grounds. It would revive only if ATR/BPN formally procured an independent anchoring/verification layer (the 2028 blockchain roadmap becoming a funded tender) — worth monitoring, not building ahead of.

## Sources

- https://finance.detik.com/infrastruktur/d-8240985/bpn-selesaikan-90-kasus-mafia-tanah-selamatkan-rp-23-38-t
- https://www.harianjogja.com/read/2025/12/12/652/1238889/atrbpn-ungkap-capaian-satgas-mafia-tanah-2025
- https://finance.detik.com/infrastruktur/d-8225678/bpn-catat-3-260-kasus-sengketa-hingga-konflik-pertanahan-hingga-september-2025
- https://news.detik.com/berita/d-7889591/pilu-mbah-tupon-asal-bantul-sertifikat-tanahnya-tiba-tiba-berganti-nama
- https://jogja.antaranews.com/berita/820151/pemkab-bantul-menyerahkan-sertifikat-tanah-mbah-tupon
- https://beritajatim.com/puluhan-warga-malang-laporkan-mafia-tanah-ke-polda-jatim-sertifikat-ganda-jadi-sorotan
- https://tatkala.co/2026/06/19/sertifikat-ganda-dan-pertanyaan-yang-tak-kunjung-terjawab-dokumen-negara-bisa-dipalsukan-menutup-celah-mafia-tanah/
- https://www.infonasional.com/target-sertifikat-tanah-elektronik-atr-bpn
- https://www.hukumonline.com/berita/a/atr-bpn-gencarkan-sertifikat-elektronik-demi-layanan-cepat-dan-bebas-mafia-tanah-lt67a1930701860/
- https://infopriangan.com/berita-nasional/ptsl-2026-biaya-resmi-dan-capaian-pendaftaran-tanah/
- https://ekonomi.bisnis.com/read/20250710/47/1892057/nusron-wahid-bidik-4-juta-bidang-tanah-terdaftar-ptsl-di-2026
- https://www.inilah.com/kementerian-atrbpn-semua-sertifikat-tanah-mulai-2026-akan-berbentuk-digital
- https://jurnalwidyabhumi.stpn.ac.id/index.php/JWB/article/view/43
- https://common-fund.org/meridia-netherlands-ghana-indonesia-cote-divoire
