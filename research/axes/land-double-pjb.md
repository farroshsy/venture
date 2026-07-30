# Pre-Title Property Double-Selling (PPJB Layer) — axis 2B

## Problem & Current Workflow

Indonesian developers sell housing and apartment units before the title deed (AJB) can be executed, using the Perjanjian Pengikatan Jual Beli (PPJB). Under Permen PUPR 11/PRT/M/2019 the PPJB must be a notarial deed, and the regulation's stated intent is that a partially paid unit is "reserved and not sold to another party" (Leks&Co/hukumproperti, 2019). The workflow: buyer signs a booking form (surat pesanan), pays a down payment, signs the PPJB before a notary chosen by the developer, then pays installments or draws a KPR mortgage; only after construction, payment completion and certificate splitting does the PPAT execute the AJB, which BPN then registers. The critical gap: the PPJB itself is registered nowhere. Each notary keeps their own protocol; there is no central index of which units are already encumbered by a PPJB. Academic work in the UPH Notary Journal documents "multiple PPJB" by negligent landowners and developers and proposes exactly the missing piece — an electronic PPJB registration system at BPN. Phase 1 killed the BPN registry itself as a candidate; this candidate is the pre-registry layer where the state anchor has not yet extended.

## Stakeholders & Who Pays

Domestic only — no cross-border party. Buyers (consumers, including subsidized-housing KPR debtors) bear the loss. Developers do the selling; notaries authenticate PPJBs but have no duty or means to check other notaries' deeds. Banks (BTN and other KPR lenders) finance against PPJB-stage collateral. Disputes flow to BPSK consumer arbitration, BPKN, YLKI, the new BENAR-PKP channel of the Housing Ministry (Kementerian PKP), and civil/criminal courts. The state's 3-million-houses program (324,213 units realized by mid-June 2026, 181,291 via the developer channel — Antara/BeritaSatu, June 2026) is expanding exactly the pre-title sales volume at risk.

## Trust Breakdown (cited incidents)

- Bandarjo Village Permai, Kabupaten Semarang: developer PT Cahaya Bumi Teknika issued two PPJBs on the same houses through the same notary over 2023-2025; at least 17 victims, losses ~Rp1.4-1.5 billion; original buyers evicted; BPSK mediation failed; victims went to the DPRD on 15 July 2026 (Kompas, 2026).
- Eastcovia, Surabaya: fictitious apartment project marketed inside a mall; 112 buyers, potential losses over Rp8.5 billion, uncovered by Polda Jatim (Suara Jatim Post, year unverified).
- West Point Apartment (PT Multi Artha Griya), Supreme Court No. 1455 K/Pdt/2022, one of a steady stream of PPJB/surat-pesanan disputes (legalindonesia.id).
- MA No. 395 K/PDT.SUS-PAILIT/2024: PPJB buyers of unsplit land fighting for their units inside developer bankruptcy (Notaire, Unair, 2024).

## Cost of the Problem

BPKN recorded 851 consumer complaints in 2025 with potential losses of Rp438.3 billion, of which Rp402 billion (~US$25M) sat in housing (BPKN via JPNN, 2026). Housing complaints rose 28.6% to 404 reports in 2024 from 314 in 2023 (BPKN via detik, 2025). Kompas.id (2025) reports 55.1% of housing complaints concern land title, permits and PPJB documents. Note the strip: most of the Rp402 billion is stalled projects and insolvency, not double-selling per se; the double-sale-specific, registry-addressable slice is a fraction of that and no source quantifies it separately (unverified).

## Existing Solutions (as of 2026-07)

- BENAR-PKP: integrated housing-consumer complaint channel launched 26 March 2025 by Kementerian PKP (WhatsApp 0812-88888-911), with a Satgas drawing on BPKN, YLKI, OJK, BP Tapera, Bank BTN and developer associations; actively mediating (LRT City/PT Adhi Commuter Properti, 24 July 2026; Meikarta follow-ups) (pkp.go.id, 2025-2026).
- Permen PUPR 11/2019 notarial-deed requirement — form control without a registry.
- Bank KPR due diligence and developer whitelists (BTN) — protects the bank's tranche only.
- No Indonesian startup offering PPJB registration/escrow verification was found in this search; academic proposals for e-PPJB at BPN exist but no product.

## Why Insufficient & Who Rejects the Existing Anchor

The anchor is not rejected — it is absent one layer down. Buyers, banks, courts and developers all accept BPN and the notariat as the truth source; the failure is that the accepted anchor simply does not cover the PPJB stage, so nothing stops a second deed on the same object. Nobody economically relevant refuses a state registry; victims are demanding more state, not custodian-independent proof. That is the opposite of the H1 condition.

## Blockchain Test

If blockchain vanished the problem remains (test 1 passes). But a plain database of PPJBs keyed to unit/parcel IDs, run by BPN, Kementerian PKP, or the notary association (INI), solves it entirely — every party accepts that operator (test 2 fails). The state can ship it by decree: Permen PUPR 11/2019 already regulates PPJB form; one amendment mandating registration, riding the BENAR-PKP momentum, closes the gap (test 3 fails). Standalone economics are thin once collusion/insolvency losses are stripped (test 4 doubtful).

## Kill Test Verdict

KILLED. Fails tests 2 and 3 (and probably 4). Consistent with H1: a single accepted domestic trust anchor exists; the gap is coverage, not trust-anchor legitimacy.

## Scores

- Severity 7 — documented evictions and Rp-billion frauds, government satgas formed.
- Market 4 — registry-addressable slice of Rp402B complaint losses is small; SaaS/fee TAM likely near the $50M line (unverified).
- WTP 4 — victims can't pay ex-ante, developers won't self-constrain; banks are the only plausible payer.
- Chain 3 — single accepted operator (state/notariat) suffices; classic database problem.
- Urgency 7 — fresh July 2026 case, 3-juta-rumah expands exposure, ministry actively intervening.
- Competition 6 — no product occupies the niche yet, but the state is visibly circling it.
- Moat 4 — a state mandate erases a private registry overnight.

Weighted: 5.0.

## What Would Kill This Idea

Already killed by: state decree risk (e-PPJB at BPN), universal acceptance of the state anchor, and thin standalone economics. It would only revive if the government formally declined to register PPJBs and banks mandated a private verification layer for KPR disbursement.

## Sources

- https://regional.kompas.com/read/2026/07/15/153140178/beli-rumah-tapi-dijual-lagi-oleh-pengembang-17-warga-kabupaten-semarang
- https://ojs.uph.edu/index.php/NJ/article/view/9049
- https://www.jpnn.com/news/gawat-banyak-aduan-pada-sektor-perumahan-kerugiannya-rp-402-miliar
- https://www.detik.com/properti/berita/d-7844085/bpkn-ungkap-sederet-aduan-konsumen-perumahan-apa-yang-paling-banyak
- https://www.kompas.id/artikel/en-aduan-sektor-properti-tergiur-promosi-hingga-lepas-tanggung-jawab
- https://pkp.go.id/berita/detail/kementerian-pkp-luncurkan-kanal-pengaduan-konsumen-perumahan-terpadu-benar-pkp
- https://pkp.go.id/berita/detail/menteri-pkp-turun-tangan-mediasi-aduan-apartemen-lrt-city-tegaskan-perlindungan-hak-ribuan-konsumen
- https://hukumproperti.com/peraturan-menteri-pupr-terbaru-terkait-ppjb-rumah/
- https://legalindonesia.id/indonesia-property-ppjb-risks/
- https://e-journal.unair.ac.id/NTR/article/view/73756
- https://www.antaranews.com/berita/5610987/realisasi-program-3-juta-rumah-capai-324213-unit-hingga-juni-2026
- https://suarajatimpost.com/ditreskrimum-polda-jatim-ungkap-kasus-penipuan-dan-penggelapan-proyek-fiktif-apartemen-di-surabaya
