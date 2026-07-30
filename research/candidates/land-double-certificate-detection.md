# Land Double-Certificate, Overlap & Title-Risk Detection

Researched 2026-07-30. Program B, pre-committed rubric. Draws on
research/industries/land-registry.md (Program A prior, same sources,
independently re-tested against Program B's K1-K4 and rubric — no score
carried over).

## Problem & How Truth Is Established Today

Land registration is a state monopoly under ATR/BPN (PP 24/1997, amended
PP 18/2021). A citizen or PPAT checks a certificate's status via Sentuh
Tanahku (free app, Digital-KTP-integrated 2026) or BHUMI map portal, or a
PPAT runs an "electronic certificate check" at BPN before an AJB.
Mortgages register electronically via HT-el since 2020. But 89.4 million
of 97.4 million certificated parcels (92.2%) remain paper as of March
2026, and pre-1997 certificates sit outside the digital cadastral map,
particularly KW4-6 "unmapped" parcels — exactly where boundary conflicts
and duplicate issuance occur (research/industries/land-registry.md,
ATR/BPN via Infonasional 2026; Kompas Properti, May-June 2026). Nobody
outside BPN can independently reconstruct issuance history; BPN's own
process is the source of documented double-issuance.

## Buyer & Who Pays

Named buyers: bank risk/legal departments doing KPR and commercial
collateral DD (currently pay KJPP appraisers Rp1-3.5M/property for
*value* appraisal, not title-risk verification — 99.co, brighton.co.id);
PPAT/notaries, who face civil liability under KUHPerdata Art. 1365
(onrechtmatige daad) and Art. 1243 (contractual negligence) for missed
double certificates (media.neliti.com); property buyers and law firms
doing manual DD on larger transactions. No cross-border party.

## Documented Failures (cited)

- Mbah Tupon (Bantul, 2025): a 68-year-old illiterate farmer's 1,655 m²
  certificate was transferred to another name and pledged for a Rp1.5
  billion bank loan without his knowledge; 7 perpetrators, incl. a former
  village head/DPRD member, arrested April 2025, convicted November 2025;
  certificate returned April 2026 (Detik, 2025; Antara Yogyakarta, 2026).
- Malang double certificates: BPN Kabupaten Malang issued a 2024 SHM over
  land already covered by a 1994 SHM held by residents 30 years; dozens
  filed reports with Polda Jatim (Beritajatim, 2025).
- Case load: 3,260 land dispute/conflict/crime cases recorded through
  September 2025 (Detik Finance, 24 Nov 2025).
- Satgas Anti-Mafia Tanah 2025: 90 cases resolved (target 65), 185
  suspects named, 14,315 ha saved, Rp23.265-23.38 trillion averted
  (figure varies by outlet, same ATR/BPN release) (Harianjogja, BorneoTribun,
  Antara Sumbar, Asajabar — December 2025).
- Double/forged certificates persist into the e-certificate era (Tatkala,
  June 2026).

## Bottom-Up ARR Path

Named segment: regional/mid-size banks' collateral-DD desks, PPAT/notary
offices (tens of thousands active; exact 2026 count unconfirmed this
session), and law firms handling property transactions. ACV comparable:
KJPP appraisal fee (Rp1-3.5M/property) is the closest Indonesian pricing
comparable, though for value not title-risk — a title-risk report
plausibly prices similarly or higher given Rp1.5B+ exposure per incident.
Two paths: (a) self-serve per-report sales at Rp500K-2M/report — needs
high volume (thousands/year), triggering the rubric's "needs thousands of
customers" caution; (b) a monthly subscription (Rp2-5M/month, unlimited
checks) to notary offices/regional banks — ~300-500 offices clears $1M
ARR, reachable via INI's digital member-registration channel (ini.id)
without enterprise bank sales. Evidence quality: plausible segment, real
adjacent ACV comparable; count rests on inference.

## Existing Solutions (as of 2026-07)

State: Sentuh Tanahku (free, self-check, Digital-KTP-integrated 2026),
BHUMI portal, e-certificate program (Permen ATR 3/2023, only 7.8% of
stock converted by March 2026), HT-el electronic mortgage registration,
PTSL mass titling (~1.87M parcels targeted 2026 after budget cuts),
Satgas Anti-Mafia Tanah (enforcement, post-hoc, not a DD product).
Minister has stated a 2028 blockchain/smart-contract target — a plan, not
a deployment. No title insurance exists in Indonesia: legal scholarship
explicitly identifies this as an unfilled gap ("lembaga asuransi
pendaftaran tanah... belum" — Jurnal Bina Mulia Hukum). No dedicated
Indonesian title-verification/DD startup was found (Rukamen and similar
sites are informational blogs); DD is handled manually by law firms
(Fast Legal Indonesia, Putranto Alliance) on a bespoke basis. Global
comparable: the US title-insurance industry (First American, Stewart,
Fidelity National) is a mature multi-billion-dollar market built on
exactly this uncertainty — structurally absent in Indonesia.

## Kill Tests

- **K1 Data access — PASSES, narrower scope.** Sentuh Tanahku/BHUMI
  per-parcel lookup is free/public; court/PTUN filings are public; a
  paying customer (bank, notary) can legally query these and contribute
  its own case history to a compounding flagged-parcel database — a
  private title-abstractor model, not requiring BPN cooperation. A fuller
  version predicting BPN's own future insider-mediated issuance errors is
  NOT achievable without bulk historical access BPN doesn't grant.
- **K2 Oracle bound — PASSES for detection, not adjudication.** Overlap
  between two already-issued certificates is inferable by geo-matching
  boundaries across the digitized cadastral layer plus court filings.
  Determining who is legally correct in a pre-1997 girik/letter-C chain
  dispute is closer to a fabricated-at-source, off-system-collusion
  problem (village-level, insider-mediated per land-registry.md) and out
  of scope for a detection/flagging product.
- **K3 Absorption — PASSES (no 12-month evidence found).** ATR/BPN's
  digitization (e-certificates, PTSL, Sentuh Tanahku) improves the
  state's own registry but is not a bank/buyer-facing DD product; Satgas
  Anti-Mafia Tanah is enforcement, not prevention. No cited roadmap for
  any state actor to ship a third-party diligence product in 12 months.
- **K4 Bootstrap bar — PASSES, moderate evidence.** Named segment
  (notaries, regional banks, law firms), real Indonesian ACV comparable
  (KJPP fee), subscription model avoiding enterprise-sales dependency;
  reachable-count figure is inferred.

## Scores

- Severity 9 — Rp23.3T+ averted in 2025 alone, Rp1.5B+ individual
  exposure, criminal convictions, 3,260 active dispute cases.
- Revenue quality 5 — plausible segment with a real adjacent ACV
  comparable, but reachable-count evidence is inferred.
- WTP 5 — legal liability creates real latent incentive, but no evidence
  anyone pays for third-party verification beyond the free state check.
- Data position 4 — underlying registry data is free/commodity (Sentuh
  Tanahku open to any citizen); accumulating flagged-case layer is a
  secondary, unproven asset.
- Absorption distance 6 — BPN's digitization is adjacent but doesn't
  cover third-party DD-as-a-service; no cited roadmap into this function.
- Competition 7 — no productized Indonesian competitor found; only
  manual, bespoke law-firm DD and a documented absence of title insurance.
- Moat 7 — a cross-customer flagged-parcel database compounds: a parcel
  flagged risky by one bank benefits every subsequent customer checking
  it.

Weighted = 0.20(9)+0.20(5)+0.15(5)+0.15(4)+0.10(6)+0.10(7)+0.10(7) = **6.2**

## Upside Flag

Secondary evidence only. A working flagged-parcel/title-risk database is
structurally the missing precursor to Indonesian title insurance — the
natural underwriting input for an insurer to finally launch the product
legal scholars have called for. Not scored, not a K4 rescue.

## What Would Kill This

Evidence that ATR/BPN opens bulk historical-parcel API access to licensed
third parties (commoditizing the data layer), or that a bank
consortium/OJK mandates a shared collateral title-risk registry with
state backing on a funded timeline.

## Sources

- https://finance.detik.com/infrastruktur/d-8240985/bpn-selesaikan-90-kasus-mafia-tanah-selamatkan-rp-23-38-t
- https://www.harianjogja.com/read/2025/12/12/652/1238889/atrbpn-ungkap-capaian-satgas-mafia-tanah-2025
- https://finance.detik.com/infrastruktur/d-8225678/bpn-catat-3-260-kasus-sengketa-hingga-konflik-pertanahan-hingga-september-2025
- https://news.detik.com/berita/d-7889591/pilu-mbah-tupon-asal-bantul-sertifikat-tanahnya-tiba-tiba-berganti-nama
- https://jogja.antaranews.com/berita/820151/pemkab-bantul-menyerahkan-sertifikat-tanah-mbah-tupon
- https://kaltimpost.jawapos.com/utama/2385960542/sertifikat-tanah-mbah-tupon-digadaikan-tanpa-izin-lelang-rp15-miliar-mendadak-dihentikan
- https://beritajatim.com/puluhan-warga-malang-laporkan-mafia-tanah-ke-polda-jatim-sertifikat-ganda-jadi-sorotan
- https://tatkala.co/2026/06/19/sertifikat-ganda-dan-pertanyaan-yang-tak-kunjung-terjawab-dokumen-negara-bisa-dipalsukan-menutup-celah-mafia-tanah/
- https://jurnal.fh.unpad.ac.id/index.php/jbmh/article/view/769
- https://www.99.co/id/panduan/tips-properti-72350-panduan-lengkap-cara-cek-sertifikat-tanah-online-offline-id.html
- https://media.neliti.com/media/publications/35455-ID-tanggung-jawab-kantor-pertanahan-akibat-dikeluarkannya-sertipikat-ganda-yang-men.pdf
- research/industries/land-registry.md (Program A prior, same primary sources)
