# Pit-to-Shipment Ore Provenance & ESG Evidence

Slug: `ore-provenance-verification` | Mechanism: provenance

## Problem & How Truth Is Established Today

To sell nickel ore, an IUP (mining license) holder needs an ESDM-approved RKAB, a paid PNBP royalty, a surveyor grade/tonnage certificate (Sucofindo, Surveyor Indonesia), and — since early 2025 — a SIMBARA transaction record linking ESDM, the Finance Ministry, and customs. SIMBARA verifies a shipment has valid paperwork and paid royalties; it does not verify the ore physically originated inside the licensed pit. That gap is exploited by "dokumen terbang" (flying documents): legitimate RKAB paperwork rented out to launder ore mined outside license boundaries, trading at a 10-12.5% discount because everyone knows it is unverifiable (Bloomberg Technoz, 19 May 2026). Downstream, EU battery-regulation due diligence is satisfied today by scheme audits — RMAP+ (Harita Nickel, per a Jul 2026 Finance Ministry op-ed) and IRMA (PT Vale, stage-two audit, Dec 2025) — paper/process audits, not satellite-verified pit-boundary evidence.

## Buyer & Who Pays

Cross-organizational: the party bearing compliance risk is not the party controlling the mine. Named segments: OEM/battery-maker sustainability teams sourcing Indonesian nickel; RMAP/IRMA-scheme auditors needing corroboration beyond site-visit interviews; EU notified bodies verifying due-diligence reports. Legitimate miners proving they are not "dokumen terbang" ore are a secondary, smaller-budget segment. The corrupt document-issuers and miners benefiting from ambiguity have no incentive to pay.

## Documented Failures (cited)

- **Antam Mandiodo block**: illegal ore sales in Southeast Sulawesi using fraudulent RKAB documents; state loss Rp5.7 trillion (Kejaksaan Agung, 2023); eight defendants sentenced April 2024, including former Minerba Director-General Ridwan Djamaludin. Collusion-tainted — officials issued/laundered the very documents the state system relies on, why paper-trail-only verification cannot be trusted for this fraud class.
- **Illegal exports**: KPK found 5.3 Mt of nickel ore shipped to China 2020-June 2022 despite an export ban, worth ~US$963M/Rp14.5T, detected via a BPS-China customs discrepancy, not any domestic provenance system (KPK; Tempo, 2023).
- **2026 recurrence**: "dokumen terbang" reported rampant again in 2026, driven by a quota deficit (~260-270 Mt approved RKAB vs ~294 Mt smelter demand), discounting laundered ore 10-12.5% — after SIMBARA became mandatory (Bloomberg Technoz, May 2026).
- **Scale**: Bareskrim mapped 1,517 illegal mining sites across 33 provinces in 2025 (Bisnis, Dec 2025); four Maluku Utara miners fined Feb 2026, one Rp2.27 trillion for mining 234 ha outside license (Mongabay, 2026).

## Bottom-Up ARR Path (K4)

No Indonesian or comparable global ACV was found for a satellite-x-license-polygon ESG-evidence service sold to auditors/OEMs (search, 2026-07; unverified). The reachable buyer universe is thin: RMAP/IRMA-accredited auditors number in the dozens globally, and OEMs with disclosed Indonesian nickel exposure are a short, named list (Harita, Vale's customers). Reaching $1M ARR from a few dozen accounts needs a high per-account ACV (illustratively $20,000-100,000/yr) with no cited Indonesian precedent, and buyer acquisition looks consultative/relationship-driven, not self-serve (tension with G6). New evidence weakens urgency: the EU Council adopted a "stop-the-clock" law on 18 Jul 2025 pausing battery-regulation due-diligence timelines, removing the forcing deadline that would pressure OEMs to buy now. Evidence quality: **weak** — segment named but small, ACV unverified, and the regulatory clock prior research cited as urgency driver has since been paused.

## Existing Solutions (mid-2026)

Government: SIMBARA (fiscal/customs gatekeeping, 5 commodities by 2026; a Jul 2026 Finance Ministry op-ed frames it toward a "digital chain of custody" aligned with battery-passport concepts, admitting RKAB/interoperability gaps); Danantara's proposed one-door export regime (miners worried about SIMBARA overlap, Jul 2026); AI export surveillance layered onto SIMBARA (Luhut, May 2026). Global vendors: Circulor, RCS Global/SLR, Minespider — OEM/battery end, no verified upstream Indonesian pit-level integration. Baliola (Mandala Chain) pitches blockchain traceability, no verified mining deployment or funding through mid-2026. Audit schemes RMAP+ (Harita) and IRMA (Vale, stage-two) are the path EU notified bodies actually accept.

## Kill Tests

- **K1 (Data access): PASS.** Satellite imagery (Planet, Maxar, Sentinel/ESA) is commercially or freely purchasable independent of any Indonesian party's cooperation; license-polygon boundaries are part of Minerba's MODI/MOMS licensing data. An auditor or OEM can commission independent boundary-compliance analysis without the audited miner or a corrupt SIMBARA administrator cooperating.
- **K2 (Oracle bound): PASS, scope-limited.** Pit-boundary encroachment and surface-disturbance signals are directly inferable from satellite time-series without off-system collusion. Ore *tonnage and grade* fraud (the core of dokumen terbang and Mandiodo) is not — it still depends on surveyor certificates, the exact paper trail corrupted in Mandiodo. The product must scope to boundary/ESG evidence, not volumetric fraud, to keep K2 clean.
- **K3 (Absorption): PASS**, for the narrow satellite-ESG-evidence function. SIMBARA's 2026 direction is fiscal/logistics chain-of-custody, not remote-sensing ESG verification; no cited 12-month roadmap targets this exact function.
- **K4 (Bootstrap bar): FAIL.** No Indonesian/comparable ACV evidence; thin, consultative-sale buyer universe; the regulatory forcing function prior research relied on (Feb 2027 battery-passport deadline) was paused by the EU's July 2025 stop-the-clock law.

**Survives: no.**

## Scores

- Severity 7 — multi-trillion-rupiah documented losses (Mandiodo Rp5.7T, illegal exports Rp14.5T, single Rp2.27T fine) and jailed officials, but this severity is largely fiscal/tonnage fraud the narrow ESG-evidence product does not itself address.
- Revenue quality 3 — no Indonesian or comparable ACV; thin buyer count with no first-customer route evidenced.
- WTP 6 — named budget owners (Harita, Vale) already pay for an inferior alternative (RMAP+/IRMA audits), but the Jul 2025 stop-the-clock delay softens urgency and no cited buyer pays for satellite-augmented evidence specifically.
- Data position 4 — satellite imagery is commodity/replicable; a cross-mine historical compliance database would accrue value but is unbuilt.
- Absorption distance 5 — SIMBARA's stated direction is adjacent (chain-of-custody, battery-passport-aligned language) but not a cited satellite-ESG roadmap.
- Competition 7 — this program's prior adversarial memo found no Indonesian/SEA startup doing pit-level provenance beyond a pre-traction pitch (Baliola); global vendors sit at the OEM end.
- Moat 4 — single-engagement analytical report today; a growing cross-mine polygon-compliance dataset would accrue value if built at scale.

**Weighted: 0.20(7)+0.20(3)+0.15(6)+0.15(4)+0.10(5)+0.10(7)+0.10(4) = 5.1**

## Upside Flag

Secondary evidence only. If the EU un-pauses or hardens battery-passport standards beyond scheme audits, or a named OEM demands satellite corroboration after a scheme-audit failure, the forcing function this candidate needs would return — unevidenced, not scored.

## What Would Kill This

SIMBARA adding geospatial pit-boundary verification itself (no roadmap found, but the Jul 2026 op-ed's framing is a watch item). The EU permanently softening standards rather than resuming the paused clock. Confirmation RMAP/IRMA auditors consider site-visit-plus-document review sufficient with no appetite for a satellite add-on (unconfirmed).

## Sources

- Bloomberg Technoz, "Praktik Dokumen Terbang Marak Imbas Defisit Nikel di Smelter" (19 May 2026); "ESDM Bantah Isu RKAB Nikel Jadi Pemicu Praktik Dokumen Terbang" (2026); "Penambang Waswas Peran DSI Bakal Tumpang Tindih dengan Simbara" (24 Jul 2026)
- https://story.kejaksaan.go.id/berita-utama/8-terdakwa-korupsi-tambang-nikel-pt-antam-tbk-divonis-windu-aji-sutanto-dihukum-8-tahun-penjara-dan-wajib-bayar-uang-pengganti-rp1358-m-118216-mvk.html (2024)
- https://indonesiabusinesspost.com/1045/Politics/kpk-discover-illegal-nickel-export-amounting-to-53-million-tons-to-china (2023)
- https://mongabay.co.id/2026/02/20/4-tambang-nikel-di-maluku-utara-kena-denda-bagaimana-pidananya/ (2026) ; https://ekonomi.bisnis.com/read/20251210/44/1935565/jejak-tambang-ilegal-di-indonesia-yang-kian-marak (2025)
- https://www.cnbcindonesia.com/opini/20260728163041-14-754478/simbara-traceability-dan-masa-depan-green-economy-indonesia (28 Jul 2026) ; https://www.cnbcindonesia.com/news/20260525115830-4-737784/luhut-tegaskan-pengawasan-ekspor-mineral-bakal-pakai-ai (25 May 2026)
- https://www.consilium.europa.eu/en/press/press-releases/2025/07/18/simplification-council-adopts-law-to-stop-the-clock-on-due-diligence-rules-for-batteries/ (18 Jul 2025)
- vale.com, "PT Vale Indonesia Tbk to Undergo Stage-Two IRMA Audit" (30 Dec 2025) ; https://www.baliola.io/enhancing-transparency-in-the-mining-supply-chain-with-blockchain (2025)
- Prior internal research: /Users/farros/Downloads/VENTURE/research/verify/mining-nickel.md ; /Users/farros/Downloads/VENTURE/research/industries/mining-nickel.md
