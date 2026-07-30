# Pre-Title Property (PPJB) Encumbrance Index

Researched 2026-07-30. Program B, pre-committed rubric. Draws on
research/axes/land-double-pjb.md (Program A prior, same sources,
re-tested independently against Program B's K1-K4 and rubric — no score
carried over; Program A's kill maps closely to the K3 evidence below).

## Problem & How Truth Is Established Today

Developers sell housing/apartment units before the title deed (AJB) can
be executed, using a Perjanjian Pengikatan Jual Beli (PPJB). Under Permen
PUPR 11/PRT/M/2019, the PPJB must be a notarial deed, and regulatory
intent is that a part-paid unit is "reserved and not sold to another
party." Workflow: booking form → down payment → notarial PPJB (notary
chosen by the developer) → installments/KPR → certificate splitting →
AJB → BPN registration. The PPJB itself is registered nowhere: each
notary keeps their own protocol, no central index of encumbered units
exists. Academic work (UPH Notary Journal) documents multiple PPJBs
issued by the same landowner/developer and proposes exactly the missing
piece — an electronic PPJB registration system at BPN.

## Buyer & Who Pays

Domestic only. Buyers/consumers bear the loss and generally cannot pay
ex-ante. Developers do the selling and have no incentive to self-police.
Notaries authenticate PPJBs but have no duty or means to check other
notaries' deeds. Banks (BTN and other KPR lenders) finance against
PPJB-stage collateral but typically underwrite at the later AJB stage,
weakening their incentive to pay for a pre-PPJB check. Disputes flow to
BPSK, BPKN, YLKI, and since March 2025 BENAR-PKP.

## Documented Failures (cited)

- Bandarjo Village Permai, Kabupaten Semarang: developer PT Cahaya Bumi
  Teknika issued duplicate PPJBs on the same houses through the same
  notary, 2023-2025; 17 victims, losses ~Rp1.4-1.5 billion; original
  buyers evicted; BPSK mediation failed; victims escalated to DPRD
  15 July 2026; developer committed to a three-stage refund totaling
  ~Rp1.5B (Kompas, 15 Jul 2026; Tribunjateng; Semarang24; Cakram.net).
  *Correction to hint: 17 victims/~Rp1.4-1.5B matches the hint's
  "17+ victims"; a larger scale is not supported by documented sources.*
- BPKN recorded 851 consumer complaints in 2025, potential losses
  Rp438.3 billion, of which Rp402 billion sat in housing (BPKN via
  JPNN, Monitor Indonesia, Liputan6, Koran Jakarta — Dec 2025/2026). Most
  is stalled projects/insolvency, not double-selling; no source isolates
  the double-sale slice.
- Eastcovia, Surabaya: fictitious apartment project marketed inside a
  mall; 112 buyers, potential losses over Rp8.5 billion (Suara Jatim
  Post, year unverified).
- MA No. 1455 K/Pdt/2022 and MA No. 395 K/PDT.SUS-PAILIT/2024: recurring
  PPJB/surat-pesanan disputes reaching the Supreme Court.

## Bottom-Up ARR Path

Named segment: KPR-lending banks and, secondarily, developer
compliance/legal desks. Program A's analysis found the registry-
addressable slice of the Rp402B BPKN housing-loss figure small once
collusion/insolvency losses are stripped, unquantified separately
(unverified). WTP is weak: victims can't pay ex-ante, developers won't
self-fund policing their own conduct, and banks — the only plausible
payer — already underwrite at the AJB stage, after the PPJB-fraud
window closed. No Indonesian ACV comparable was found. This path does
not clear the bar with credible evidence (see K4).

## Existing Solutions (as of 2026-07)

BENAR-PKP: integrated housing-consumer complaint channel launched 26
March 2025 by Kementerian PKP, satgas drawing on BPKN, YLKI, OJK, BP
Tapera, Bank BTN and developer associations; actively mediating real
cases as of July 2026 (LRT City/PT ACP; Meikarta) (pkp.go.id). SIKUMBANG
+ SiKasep: PUPR/PPDPP's existing national developer/subsidized-housing
registry with direct bank integration for KPR-subsidi verification —
220,000 units registered by 2020 (CNBC Indonesia), ongoing. SIRENG
(sireng.pu.go.id): public developer-legality checker. Permen PUPR
11/2019: notarial-deed requirement, form control without a registry. No
Indonesian startup offering PPJB registration/escrow verification was
found; academic proposals for e-PPJB at BPN exist but no product.

## Kill Tests

- **K1 Data access — FAILS.** Detecting a double PPJB needs a complete
  cross-notary index of who already bought a given unit — requiring
  disclosure from the developer or notary involved. A developer already
  committing PPJB fraud has active incentive to withhold exactly this
  evidence; notaries have no shared registry and operate under protocol
  confidentiality norms. This is the K1 kill condition: proof requires
  cooperation from the party being evaluated.
- **K2 Oracle bound — marginal pass.** The fact pattern is well-defined
  and resolvable *given* a complete index, but no customer/victim has
  independent access to competing PPJBs absent that index — the practical
  dependency mirrors K1.
- **K3 Absorption — KILLS.** Kementerian PKP already operates the
  adjacent infrastructure this candidate would build: (1) SIKUMBANG/
  SiKasep is a live, bank-integrated national developer/unit registry for
  the subsidized segment, proving the pattern runs today, not
  hypothetically; (2) BENAR-PKP, launched March 2025, is an
  actively-staffed ministerial channel covering exactly this problem's
  stakeholders (BPKN, YLKI, OJK, BTN, developer associations), mediating
  live disputes as of July 2026; (3) Permen PUPR 11/2019 already
  regulates PPJB form, amendable by decree to add registration — a far
  lower bar than new legislation. Not "the state could build it" (never
  kills) but a named, dated incumbent already operating the adjacent
  registry pattern and mediation infrastructure, with a low-cost,
  regulation-only extension path directly into this function.
- **K4 Bootstrap bar — FAILS.** Buyer segment cannot pay ex-ante;
  developers won't self-fund; banks underwrite too late to be a strong
  payer; no Indonesian ACV comparable found; Program A's analysis put the
  addressable TAM near a $50M ceiling before Program B's stricter bar.

## Scores

- Severity 7 — documented evictions, Rp1.4-1.5B single-case losses, a
  dedicated ministerial satgas (BENAR-PKP) managing housing complaints.
- Revenue quality 3 — no Indonesian ACV comparable found; addressable
  loss slice is small and unquantified once collusion/insolvency stripped.
- WTP 4 — budget exists nowhere clearly: victims can't pay, developers
  won't self-constrain, banks' incentive is weak given late-stage
  underwriting.
- Data position 3 — needed data (cross-notary PPJB visibility) is not
  even commodity-available; siloed with no aggregation path absent
  developer/notary cooperation.
- Absorption distance 3 — BENAR-PKP and SIKUMBANG are adjacent, active
  state programs already covering this stakeholder set.
- Competition 6 — no product occupies the niche, but the state is
  visibly circling it with live infrastructure.
- Moat 4 — a single regulatory amendment (Permen PUPR 11/2019) would
  erase a private registry's relevance overnight.

Weighted = 0.20(7)+0.20(3)+0.15(4)+0.15(3)+0.10(3)+0.10(6)+0.10(4) = **4.4**

## Upside Flag

Secondary evidence only. If BENAR-PKP proves politically durable but
technically thin, a private registry could pivot to a B2G data-processing
role behind it rather than a standalone product — not scored, not a K4
rescue, and contingent on government partnership, not bootstrap self-serve.

## What Would Kill This

Already killed by K1 and K3. Confirmation that Kementerian PKP declines
to extend BENAR-PKP/SIKUMBANG into PPJB registration, combined with banks
mandating a private pre-PPJB verification step for KPR disbursement,
would be the specific evidence needed to revive it.

## Sources

- https://regional.kompas.com/read/2026/07/15/153140178/beli-rumah-tapi-dijual-lagi-oleh-pengembang-17-warga-kabupaten-semarang
- https://jateng.tribunnews.com/ex-polwil-semarang/1259844/belasan-pembeli-perumahan-di-ungaran-diduga-jadi-korban-penipuan
- https://semarang24.com/detail/45525/17-warga-bandarjo-village-ungaran-rugi-rp-14-miliar-gegara-ppjb-ganda-pengembang-akui-belum-punya-izin
- https://www.jpnn.com/news/gawat-banyak-aduan-pada-sektor-perumahan-kerugiannya-rp-402-miliar
- https://monitorindonesia.com/ekonomi/read/2025/12/618062/bpkn-851-aduan-konsumen-sepanjang-2025-kerugian-capai-rp-438-3-miliar
- https://pkp.go.id/berita/detail/kementerian-pkp-luncurkan-kanal-pengaduan-konsumen-perumahan-terpadu-benar-pkp
- https://pkp.go.id/berita/detail/menteri-pkp-turun-tangan-mediasi-aduan-apartemen-lrt-city-tegaskan-perlindungan-hak-ribuan-konsumen
- https://www.cnbcindonesia.com/news/20201106002856-4-199689/diminati-developer-220000-rumah-gabung-ke-app-sikumbang
- https://ojs.uph.edu/index.php/NJ/article/view/9049
- https://hukumproperti.com/peraturan-menteri-pupr-terbaru-terkait-ppjb-rumah/
- research/axes/land-double-pjb.md (Program A prior, same primary sources)
