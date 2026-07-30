# Client fund segregation attestation — brokers and PSPs (axis 2A)

## Problem & Current Workflow
**Brokers.** Since the post-Sarijaya reforms, an Indonesian retail investor's cash never legally sits in the broker's own account. The client opens a sub-securities account (SRE) at KSEI and a Rekening Dana Nasabah (RDN) — a cash account in the client's own name at an OJK-approved payment bank; trade settlement flows only through the RDN, and securities positions in the SRE are visible to the investor directly via KSEI's AKSes portal, bypassing the broker's own statements (KSEI; IDX RDIS). Brokers must file daily net adjusted working capital (MKBD) reports to OJK, and Indonesia SIPF stands behind residual losses. **PSPs.** E-money issuers must place float 30% in cash/demand deposits at top-tier banks and 70% in government or BI securities (PBI 20/6/PBI/2018); float is legally the users' money, excluded from a failed issuer's bankruptcy estate (UI Scholarhub, 2020), and PBI 23/6/PBI/2021 gives BI a sanctions ladder up to license revocation.

## Stakeholders & Who Pays
Roughly 120 OJK-registered securities firms (EduFulus list, 2024 — count unverified) pay for RDN banking, KSEI participation, and SIPF levies; RDN banks (Mandiri, BCA, BNI, etc.) earn the cash float; KSEI runs SRE bookkeeping; OJK audits and sanctions; Indonesia SIPF compensates up to Rp200 million per investor and Rp100 billion per custodian since 2 January 2021, doubled from Rp100 million (Bareksa/Antara, 2021). On the PSP side, BI licenses and supervises PJPs; issuer shareholders bear compliance cost; users are the protected party. No cross-border verifier is structurally involved — this is a domestic trust chain on both broker and PSP tracks.

## Trust Breakdown (cited incidents)
- **Sarijaya Permana Sekuritas (2008–09)**: president commissioner Herman Ramli used 17 nominee accounts to trade with pooled client cash held in the broker's name; 13,074 clients lost Rp235.6 billion (Detik, 2009). This is the canonical pre-RDN failure that produced the current architecture.
- **Sinergi Millenium Sekuritas (2022)**: OJK revoked its license on 14 July 2022 for brokering repo transactions without client authorization or reporting — client assets pledged without consent (Kontan, 2022).
- **Recapital Sekuritas (2023)**: broker license revoked over regulatory capital failures (Investor.id, 2023 — details unverified).
- **Mirae Asset Sekuritas (2025–26, ongoing)**: clients reported Rp71 billion missing, claims later aggregated to ~Rp200 billion by victims' counsel (Kompas, December 2025); Mirae asserts preliminary findings point to clients sharing passwords; OJK, SROs, PPATK and Bareskrim are investigating. OJK-facilitated mediation was held in December 2025 but failed, and victims are now pressing Polri to complete its criminal probe (Jawa Pos, 2026). Disputed — an account-takeover/fraud case, not yet an established segregation failure; both sides still argue inside the OJK/Polri process.
- **PSP float misuse**: hard search (Indonesian included) found no documented case of a BI-licensed issuer misusing float; the risk literature is prospective (UI/UGM theses, 2020–21).

## Cost of the Problem
Sarijaya's Rp235.6 billion (Detik, 2009) predates the fix and was insider collusion — strip it. Since RDN/SRE became universal, documented segregation losses are small and episodic; SIPF's Rp200 million cap itself signals actuarially minor residual risk (Bareksa, 2021). The Mirae claim of Rp200 billion (Kompas, 2025) is unresolved and, if credential fraud, not a segregation loss. Addressable spend is compliance tooling for ~120 brokers and BI-licensed PJPs — plausibly low single-digit millions USD annually (unverified). No verified recurring loss pool exists to price against.

## Existing Solutions (as of 2026-07)
- **KSEI SRE + AKSes**: investor-facing, custodian-independent view of holdings — the direct answer to "who verifies segregation today."
- **RDN in client's own name** at commercial banks; electronic RDN opening standardized by OJK (2021 guideline).
- **OJK MKBD daily reporting** and inspection; license revocations demonstrably used (2022–2024: Sinergi Millenium, Recapital, Paytren AM on the MI side, May 2024, Bareksa).
- **Indonesia SIPF** compensation fund (IDX Investor Protection page, 2026).
- **BI float rules + sanctions** (PBI 20/6/PBI/2018, PBI 23/6/PBI/2021).
- **Global analogs**: crypto-exchange proof-of-reserves vendors (e.g., Chainlink PoR, audit-firm attestations) exist, but no vendor was found selling custodian-independent segregation attestation for Indonesian brokers or PJPs (search, July 2026).

## Why Insufficient & Who Rejects the Existing Anchor
Nobody economically relevant rejects the anchor. Retail investors check AKSes; brokers accept KSEI; PSP users trust BI-regulated banks holding the float; even in the Mirae dispute both sides argue inside OJK's process rather than around it. The residual failure modes — credential sharing, insider fraud at the broker, arranged repos — happen at the instruction layer, before any ledger entry, and a blockchain faithfully records fraudulent instructions too. The 2008 problem this candidate targets was solved by decree: the state built exactly the "independent second ledger" (KSEI/AKSes + client-name RDN) that a startup would propose, and it is accepted.

## Blockchain Test
Without blockchain the problem still exists in principle — pass. But a single trusted operator solves it, and that operator (KSEI for securities/cash flows, BI plus commercial banks for float) already exists and is accepted by every party on both sides of every dispute found — fail. The state shipped this exact feature by decree once already (2009–2012 reforms) and can extend it (e.g., real-time RDN reconciliation) the same way — fail. Standalone value after stripping collusion losses is thin — fail.

## Kill Test Verdict
**KILLED.** Fails kill tests #2, #3, and #4. Cleanest confirmation of H1's control prediction: a state anchor accepted by all parties occupies the trust slot, and post-anchor loss events are either disputed or off-system fraud.

## Scores
- Severity 5 — measurable episodic incidents; existing rails contain them; no dedicated loss-management staffing beyond standard compliance.
- Market 3 — attestation tooling for ~120 brokers plus PJPs is far below $50M TAM.
- WTP 4 — compliance budgets exist but already flow to KSEI, SIPF levies, and RDN banks.
- Chain 4 — multi-org, but KSEI/BI are accepted trusted intermediaries already operating the shared records.
- Urgency 5 — Mirae case (Dec 2025) creates pressure, but toward access-security rules, not new attestation infrastructure.
- Competition 3 — state systems occupy the slot; no startup whitespace that matters.
- Moat 3 — any reconciliation/attestation layer is a copyable feature of KSEI or RDN banks.
- **Weighted: 3.9**

## What Would Kill This Idea
Already killed. Revival would require evidence that AKSes/RDN data itself is being falsified at scale (custodian-level fraud KSEI cannot see), or a cross-border broker/PSP structure where a foreign counterparty refuses KSEI/BI records — neither found as of July 2026.

## Sources
- https://finance.detik.com/bursa-dan-valas/d-1063713/komut-sarijaya-sekuritas-diduga-gelapkan-dana-nasabah-ratusan-miliar (Detik, 2009)
- https://www.viva.co.id/arsip/28745-bapepam-beberkan-kronologis-kasus-sarijaya (Viva, 2009)
- https://investasi.kontan.co.id/news/kena-sanksi-administrasi-ojk-cabut-izin-sinergi-millenium-sekuritas (Kontan, 2022)
- https://nasional.kompas.com/read/2025/12/09/15441691/pengacara-korban-kerugian-kasus-mirae-asset-bertambah-jadi-rp-200-miliar (Kompas, 2025)
- https://www.jawapos.com/kasuistika/017232152/kasus-hilangnya-dana-nasabah-sekuritas-rp-200-m-gagal-selesai-lewat-mediasi-polri-diminta-segera-tuntaskan-penyelidikan (Jawa Pos, 2026)
- https://money.kompas.com/read/2025/12/23/152008126/filonomics-investasi-rp-200-miliar-nasabah-mirae-diduga-lenyap-siapa-bermain (Kompas, 2025)
- https://www.bareksa.com/berita/pasar-modal/2021-01-05/indonesia-sipf-tingkatkan-batasan-ganti-rugi-pemodal-jadi-rp200-juta (Bareksa, 2021)
- https://www.idx.co.id/id/investor/perlindungan-investor (IDX, 2026)
- https://rdis.idx.co.id/id/events/apa-itu-rdn-dalam-investasi-saham (IDX RDIS)
- https://web.ksei.co.id/faqs (KSEI)
- https://www.bi.go.id/id/peraturan/sistem-pembayaran/Pages/PBI-200618.aspx (Bank Indonesia, 2018)
- https://www.bi.go.id/id/publikasi/peraturan/Pages/PBI_230621.aspx (Bank Indonesia, 2021)
- https://scholarhub.ui.ac.id/dharmasisya/vol1/iss3/24/ (UI, 2020)
- https://www.bareksa.com/berita/reksa-dana/2024-05-13/ojk-cabut-izin-usaha-paytren-aset-manajemen-dan-larang-5-hal-ini (Bareksa, 2024)
