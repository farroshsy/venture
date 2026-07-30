# Beneficial-Ownership Verification & Entity Linkage

Researched 2026-07-30. Program B, pre-committed rubric. Adjacent to but
distinct from the prior Program A axis `corresponding-kyc.md` (foreign
counterparty verification) — that axis asked whether *foreign* verifiers
reject Indonesia's AHU+apostille anchor (they don't) and was KILLED. This
candidate asks a different question: whether *domestic* notaries and
banks, now carrying a new legal verification duty, will buy tooling to
discharge it.

## Problem & How Truth Is Established Today

A corporation establishes its beneficial owner (BO) by self-declaring
identity, ownership percentage, and control relationships through
bo.ahu.go.id, filed by a notary during any SABH transaction. Until
Permenkum 2/2025 (effective 15 January 2025), this was pure self-
declaration with no independent check. Permenkum 2/2025 replaced that
with a duty: notaries must verify client-submitted BO data under a "know
your service user" principle, corporations must update BO data within 30
days of any ownership/control change and confirm it annually, and
Kemenkumham (Ditjen AHU) added oversight involving the tax directorate
(DJP) and the financial-intelligence unit (PPATK) (hukumonline, 2025;
Permenkum 2/2025 Art. 2, Art. 22). In practice a notary cross-checks the
client's questionnaire against AHU's own registry, KTP/Dukcapil identity
data, and whatever documents the client hands over — no government tool
flags a nominee pattern (the same individual as "owner" across dozens of
unrelated shells) or reconciles a claimed owner against land, tax, or
court records.

## Buyer & Who Pays

Two named domestic segments. (1) Notaries (~3,000+ nationwide, general
professional-population knowledge, **unverified this session**) — they
now carry personal administrative liability (warnings, blacklisting,
AHU-access blocking cascading to their client corporations) if
verification is inadequate, per Permenkum 2/2025 Art. 22. (2) Banks'
corporate KYC/AML desks — PPATK "reporting parties" under existing AML
law, already budgeting for KYB. A softer third segment: company-formation/
corporate-secretarial firms (Cekindo, InCorp, GoLaw, SmartLegal, Legalo,
BP Lawyers, Infiniti — identified via search, 2025-2026) who absorb
compliance risk for foreign-investment clients and already publish
client-facing guidance on this exact regulation, evidencing live pain.

## Documented Failures (cited)

- Compliance gap: as of April 2026, Ditjen AHU director Widodo stated
  roughly 823,000 of Indonesia's 3.5 million registered corporations had
  not filed BO data (portal.ahu.go.id, government primary source, 23-24
  April 2026) — ~23.5% non-compliant nationwide.
- A separately and repeatedly cited figure — 51.17% BO-reporting
  compliance as of September 2025 — appears across several secondary legal
  blogs but traces to no identifiable primary AHU statement found this
  session, and conflicts sharply with the April 2026 AHU figure above.
  **That discrepancy is itself evidence for this candidate's thesis: even
  Indonesia's own compliance-rate reporting on beneficial ownership is not
  independently verifiable.** Treat 51.17% as (unverified).
- Nominee shareholding is legally unrecognized but commonly used to evade
  the foreign-ownership Positive Investment List; sources note regulations
  "confuse the nominee with the Beneficial Owner," enabling abuse (academic
  source via search, unverified precise citation this session).
- Kemenkumham has blocked/revoked incorporation certificates (SK) for
  companies affiliated with online-gambling networks that had already
  passed formation formalities (Antara, 2024, per prior repo research
  `corresponding-kyc.md`) — formation-stage checks miss illicit beneficial
  control.

## Bottom-Up ARR Path

Named segment: notaries with active corporate-transaction practices, plus
corporate-secretarial/company-formation firms. Realistic ACV: no
Indonesia-specific BO-compliance SaaS price was found this session; global
KYB comparables are AsiaVerify ($249 credit packs for KYB/KYC/UBO/AML,
2026) and KYCAID (€10/verification including UBO check) — both per-check,
not subscription. An inferred annual-subscription analogy for a
notary/small-firm tier is roughly Rp15-40 million (~US$1,000-2,500/yr),
**inferred from category norms, not an Indonesian BO-compliance
comparable**. Reachable count: several thousand notaries plus an
identified but uncounted population of corporate-service firms —
**unverified precise count this session**. $1M ARR needs roughly 400-650
customers at $1,500-2,500 ACV — plausible against a population in the
thousands, but both terms rest on inference. Overall evidence quality:
**weak-to-mixed**.

## Existing Solutions (as of mid-2026)

Global/regional KYB-API vendors covering Indonesia: AsiaVerify (real-time
Indonesian registry + UBO mapping), KYC-Chain, Sumsub, Didit, Verihubs
(Indonesia-focused e-KYC, banking vertical), Ondato, QCC KYC. None found
marketed specifically at Indonesian *notaries* discharging the Permenkum
2/2025 duty — they sell to fintechs/banks doing individual or generic
corporate onboarding. Report shops (Cekindo, InCorp, ILA Global,
companyhouse.id) sell manual due-diligence, not automated red-flagging.
AHU Online sells paid registry extracts (Rp50,000-500,000) with no
cross-referencing.

## Kill Tests

- **K1 Data access — PASSES, scope caveat.** For the achievable function —
  cross-referencing AHU filings, flagging repeat-nominee patterns, and
  checking document/identity consistency — the evidence (AHU public/paid
  search, Dukcapil identity checks notaries already use) is accessible
  without needing a concealing party's cooperation. For the harder
  question — the *true* identity behind a deliberately hidden nominee
  arrangement — no paying customer has access. Scope the product to the
  former.
- **K2 Oracle bound — PASSES, same caveat.** Nominee-pattern and
  inconsistency detection is inferable from records (repeat directors/
  addresses across unrelated shells, ownership-percentage errors,
  circular structures). Deliberate off-system concealment is
  fabricated-at-source and out of scope — true of every KYB vendor
  globally, not a unique disqualifier here.
- **K3 Absorption — PASSES (no 12-month evidence found).** Permenkum
  2/2025 assigns verification *duty* to notaries and adds DJP/PPATK
  *oversight collaboration* — it does not describe Kemenkumham shipping an
  automated cross-referencing tool itself within 12 months; the regulation
  creates demand for tooling rather than removing it.
- **K4 Bootstrap bar — PASSES, weak evidence.** Segment is named and real
  (notaries carry personal sanction risk); count and ACV both rest on
  inference, not a cited Indonesian comparable.

## Scores

- Severity 6 — real personal/corporate sanction risk (blacklist, access
  blocking) under Permenkum 2/2025; losses are administrative, not yet
  criminal-scale in the cited record.
- Revenue quality 4 — plausible segment, but ACV and reachable count both
  rest on inference; no Indonesian BO-compliance pricing comparable found.
- WTP 5 — a budget exists (mandatory compliance, real sanctions) but is
  new and untested for third-party tooling specifically.
- Data position 4 — AHU registry data is public/paid, available to any
  competitor; an accumulating nominee graph is a plausible, unbuilt moat.
- Absorption distance 5 — plausible absorber (AHU already runs the
  registry) but no roadmap found.
- Competition 5 — several funded global KYB vendors cover Indonesia
  generically; none dominant in the specific notary niche.
- Moat 4 — a nominee-detection graph would compound with use, but nothing
  accrued yet; easily switchable single-tenant tool today.

Weighted = 0.20(6)+0.20(4)+0.15(5)+0.15(4)+0.10(5)+0.10(5)+0.10(4) = **4.7**

## Upside Flag

Secondary evidence only. A working nominee/entity-resolution graph across
notary clients would be reusable for bank corporate-KYC onboarding and
private due-diligence buyers (M&A, trade-finance counterparty checks) —
same graph, different customer. Not a rescue for the weak K4 evidence.

## What Would Kill This

Direct evidence that Kemenkumham/AHU is building an automated,
DJP/PPATK/Dukcapil-integrated BO-verification backend on a funded
12-month timeline (flips K3); or a funded KYB vendor shipping an
Indonesia-notary-specific Permenkum 2/2025 product with traction
(worsens Competition).

## Sources

- https://portal.ahu.go.id/id/detail/75-berita-lainnya/6525-obrolan-media-gathering-dirjen-ahu-ungkap-823-000-korporasi-belum-laporkan-beneficial-owner (primary, 2026-04-23/24)
- https://www.hukumonline.com/berita/a/lewat-permenkum-2-2025-tanggung-jawab-pelaporan-beneficial-owner-kini-di-tangan-korporasi-lt685e0dea36853/
- https://www.hukumonline.com/berita/a/negara-perketat-verifikasi-ahu--notaris-dibebani-tanggung-jawab-baru-lt69e5ee8fea367/
- https://senator.id/2025/04/21/memahami-permenkumham-no-2-2025-aturan-baru-pelaporan-beneficial-ownership-di-indonesia/
- https://asiaverify.com/jurisdictions-hub/indonesia/
- https://kyc-chain.com/coverage/indonesia/
- https://didit.me/solutions/countries/indonesia/
- https://verihubs.com/en/blog/kyc-software-indonesia
- https://kycaid.com/pricing/
- research/axes/corresponding-kyc.md (Program A prior, Axis 1, KILLED — different question, adjacent evidence reused with attribution above)
