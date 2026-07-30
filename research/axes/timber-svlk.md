# Timber Legality Acceptance Abroad — SVLK/FLEGT (timber-svlk) — axis 1

## Problem & Current Workflow
Indonesian timber exporters must prove legality to foreign buyers. Workflow: (1) harvest and transport are documented in the ministry's SIPUHH online system with SKSHHK transport certificates; (2) firms obtain SVLK certification from an accredited LVLK certification body (audit plus periodic surveillance); (3) each export consignment gets a V-Legal Document — issued as a FLEGT licence for EU-bound shipments — through the ministry's SILK system; (4) EU member-state competent authorities check the FLEGT licence, which since November 2016 has exempted Indonesian timber from EUTR due diligence (EEAS, 2016); other markets (US Lacey Act, Japan Clean Wood Act, Australia) give no green lane, so buyers run their own due diligence with V-Legal as one input; (5) from 30 December 2026 the EUDR replaces the EUTR for medium/large operators (30 June 2027 for micro/small) after the second postponement adopted in December 2025 (Council of the EU, December 2025). Under EUDR, a FLEGT licence covers only the legality leg; every EU operator must still prove the product is deforestation-free with plot-level geolocation and file a due diligence statement (European Commission Green Forum, 2025; EFI, 2025). Note the hint is stale: Indonesia is no longer the only FLEGT-licensed country — Ghana became the second on 15 August 2025, with licences effective in the EU from 8 October 2025 (EEAS Ghana, 2025; Ghana Ministry of Lands, 2025).

## Stakeholders & Who Pays (both sides)
Indonesian side: thousands of SVLK-certified mills and furniture makers; LVLK certification bodies; the Forestry Ministry (SILK, SIPUHH, Gakkum enforcement); JPIK independent forest monitors; associations (APHI, HIMKI, Asmindo). Exporters pay certification — around Rp 30–40 million per certification cycle, called burdensome by Asmindo (Antara, 2015) — with government subsidies for small firms (Kemenko Perekonomian, 2021). Foreign side: EU importers/operators who bear EUDR due diligence costs and penalties, EU competent authorities running risk-based checks (3% of operators for standard-risk countries under the benchmarking system), plus buyers and regulators in Japan, the US, and Australia. NGOs (EIA, JPIK) act as adversarial auditors of both sides.

## Trust Breakdown (cited incidents)
- EIA/JPIK "Permitting Crime" (2014): SVLK/TLAS-certified companies engaged in timber laundering, mixing illegal wood into certified flows exportable as FLEGT-licensed.
- Nabire, Papua (2018): SVLK-certified firms — PT Mutiara Lestari Papua, CV Mandiri Perkasa, CV Wani Star, CV Puspa Yoga, PT Intico Pratama — caught using falsified documents to move illegal timber (Mongabay Indonesia, 2018).
- EIA (2016–2021): certification bodies certified illegally clear-cut timber as legal; complaint-handling weaknesses shielded auditors; courts let convicted timber traders keep certificates (EIA "Court out", 2021).
- Permendag 15/2020: the Trade Ministry briefly abolished the V-Legal export requirement, provoking EU objections before revocation — the state itself wobbled on its own anchor (Mongabay, 2020; Forest Digest, 2020).
- Balikpapan, East Kalimantan (July 2026): a Forestry Ministry joint task force seized 1,205 logs moved with SKSHHK documents whose serial numbers had been reused from other shipments — document-cloning against the state's own transport system, operation dated 6 July 2026 (Antara, July 2026).

## Cost of the Problem
EU+UK imports of Indonesian timber products: US$1.11 billion (2016), US$1.33 billion (2019), US$1.19 billion (2020), about 8.9% of Indonesia's US$12.0 billion total timber exports in 2020 (FLEGT IMM country profile, citing Eurostat COMEXT/STIX). First-year FLEGT-licensed shipments exceeded EUR 1 billion (European Commission DG INTPA, 2017). SVLK certification cost: Rp 30–40 million per certification (Antara, 2015). EUDR compliance cost per EU operator and per Indonesian exporter: (unverified). State losses to illegal logging are largely off-system collusion losses and are stripped from addressable sizing; the addressable problem is compliance-evidence spend on ~US$1.2 billion of EU-bound trade plus reputational-verification spend in Japan/US/Australia.

## Existing Solutions (as of 2026-07, named)
State systems: SVLK, SILK, SIPUHH, V-Legal/FLEGT licensing; Ghana's GhLAS now parallel. EU-side compliance SaaS shipping EUDR modules today: osapiens, Global Traceability (RADIX Tree), Preferred by Nature Sourcing Hub, IntegrityNext, 11Foundry, Sourcemap. Indonesian/regional: Koltiva (Jakarta-based traceability, EUDR-focused), PT BRIK Quality Services. Private standards: FSC and PEFC chain-of-custody as buyer-trusted parallel anchors. The Commission's TRACES-based information system receives due diligence statements.

## Why Insufficient & Who Rejects the Existing Anchor
This is the genuine H1 pattern of the three candidates: the foreign verifier explicitly refuses the national anchor. The EU accepts the FLEGT licence for legality only — EUDR still forces every operator to independently prove deforestation-free status with geolocation, and Indonesia calls the benchmarking system discriminatory while resisting plot-data demands (Mongabay, 2025). NGOs reject SVLK because certified firms and auditors have been repeatedly documented certifying crime; the July 2026 serial-reuse case shows the state's own transport documents are forgeable in ways the issuing custodian does not detect. But the rejection resolves one-sidedly: the EU regulator accepts centralized due-diligence SaaS chosen by the EU operator, so the operator, not a neutral ledger, is the accountable anchor.

## Blockchain Test
Adversarial parties plus an external verifier exist — the strongest chain profile in this batch. Tamper-evident, custodian-independent evidence (e.g., duplicate-detection on SKSHHK/V-Legal serials across mills) would change behavior. But the economically relevant verifier (EU competent authority) already accepts single-operator systems, and the paying customer can comply without a shared ledger.

## Kill Test Verdict
1. Problem exists without blockchain: YES. 2. Single-operator database acceptable: YES — EUDR compliance is an operator-side obligation satisfied by centralized SaaS the regulator accepts; FAIL. 3. Incumbent ships it in six months: YES — osapiens/Koltiva-class vendors already ingest SVLK documents and geolocation; FAIL. 4. Standalone value: plausible but crowded; PASS-weak. KILLED on tests 2 and 3, despite being the best-evidenced trust failure of the three.

## Scores
- Severity 7 — recurring documented fraud, seizure and market-access risk, dedicated compliance staff on both sides.
- Market 4 — compliance-evidence spend on ~US$1.2B EU-bound timber is likely under US$250M Indonesia-addressable.
- WTP 7 — EUDR is mandated compliance spend with named budget owners (EU operators, exporters defending access).
- Chain 6 — no anchor accepted by all parties, tamper-evidence would matter, but the verifier tolerates centralized custodians.
- Urgency 8 — hard deadline 30 December 2026, in force within five months; fresh July 2026 enforcement case.
- Competition 3 — crowded EUDR SaaS field plus free state systems plus a funded local player (Koltiva).
- Moat 4 — mill-level data network conceivable, but document features are copyable.
Weighted: 5.7.

## What Would Kill This Idea
It is killed as a blockchain-necessity venture by kill tests 2–3. What would revive it: the EU (or Japanese buyers) formally requiring custodian-independent verification of producer-country documents, or a documented EUDR rejection wave of SVLK-backed due diligence statements after December 2026 that centralized SaaS demonstrably cannot fix. Watch the first EUDR enforcement statistics in 2027.

## Sources
- https://eeas.europa.eu/headquarters/headquarters-homepage/14827/indonesia-begins-issuing-flegt-licensing-scheme-verified-legal-timber-products_fr
- https://www.eeas.europa.eu/delegations/ghana/ghana-breaks-new-ground-forest-governance-issues-africa%E2%80%99s-first-flegt-timber-licence_en?s=101
- https://mlnr.gov.gh/ghanas-flegt-licensing-system-to-go-live-in-european-market-on-october-8-2025-lands-minister/
- https://www.consilium.europa.eu/en/press/press-releases/2025/12/18/deforestation-council-signs-off-targeted-revision-to-simplify-and-postpone-the-regulation/
- https://green-forum.ec.europa.eu/nature-and-biodiversity/deforestation-regulation-implementation_en
- https://efi.int/news/geolocation-under-eudr-compliance-requirement-supply-chain-opportunity-2025-12-05
- https://flegtimm.eu/country-profiles/indonesia/
- https://ec.europa.eu/newsroom/intpa/items/615236/en
- https://www.antaranews.com/berita/5647417/kemenhut-ungkap-modus-pemalsuan-dokumen-ribuan-kayu-di-kaltim
- https://regional.kompas.com/read/2026/07/14/074847778/tim-gabungan-bongkar-peredaran-kayu-ilegal-di-balikpapan-endus-modus
- https://www.mongabay.co.id/2018/08/31/dokumen-palsu-kayu-kayu-dari-hutan-nabire/
- https://eia-international.org/press-releases/court-out-how-indonesias-legal-system-is-failing-to-properly-punish-timber-criminals/
- https://eia-international.org/wp-content/uploads/Still-Permitting-Crime-Indonesian-FINAL.pdf
- https://news.mongabay.com/2020/03/indonesia-eu-timber-wood-legality-svlk-license-logging/
- https://www.forestdigest.com/detail/600/aturan-penghapusan-svlk-dicabut
- https://news.mongabay.com/2025/04/indonesia-raises-concerns-over-eu-deforestation-laws-impact-on-smallholders/
- https://www.antaranews.com/berita/523828/asmindo-biaya-sertifikasi-svlk-tergolong-mahal
- https://ekon.go.id/publikasi/detail/1376/dorong-ekspor-sistem-verifikasi-legalitas-kayu-kini-jangkau-pelaku-umkm
