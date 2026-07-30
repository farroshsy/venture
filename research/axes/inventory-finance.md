# Inventory/Receivables Fabrication in Corporate Lending — axis 2B

## Problem & Current Workflow

Indonesian banks lend working capital against inventory and trade receivables. The verification workflow: borrower submits KAP-audited financials, stock lists and receivable aging schedules; the bank pulls SLIK for existing facilities and reported collateral; a KJPP appraiser values the collateral; account officers make periodic site visits; fidusia over inventory or receivables is registered at AHU as a text description of a rotating, fungible pool; thereafter monitoring rests on borrower-submitted stock reports. For commodity exposure, some banks add a Collateral Management Agreement — a surveyor (Sucofindo, SGS, Bhanda Ghara Reksa) physically controls the warehouse and releases goods only on the bank's written order, a service Danamon pioneered with Sucofindo and BGR in 2012 (Bisnis.com, 2012; Sucofindo, which has run warehousing supervision since 1964). Syndicates rely on the agent bank and the borrower's auditor. When default hits, banks discover whether the stock and receivables ever existed. Repeatedly, they did not.

## Stakeholders & Who Pays

Domestic core with a foreign-creditor edge. Borrowers: corporates and multifinance intermediaries. Lenders who absorb losses: banks (industry credit Rp8,918 trillion per May 2026, working-capital credit growing 8.09% yoy — OJK via Antara, 2026), through bilateral and syndicated exposure. Foreign side, where present: USD bondholders and offshore lenders (Duniatex's $300M Delta Merlin notes; eFishery's global investors) relying on Indonesian audits they cannot independently check. Verifiers paid to do the work: KAP auditors, KJPP appraisers, CMA surveyors. Regulators/police: OJK, BPK for state-owned banks, Bareskrim and prosecutors. Disputes run through commercial courts (PKPU) and criminal courts.

## Trust Breakdown (cited incidents)

- SNP Finance: "added to, duplicated and reused" its receivables list as security at 14 banks; police alleged Rp14 trillion in potential losses; five executives arrested (The Jakarta Post, 2018).
- Tiga Pilar Sejahtera (AISA): EY's fact-based investigation dated 12 March 2019 found ~Rp4 trillion overstatement across receivables, inventory and fixed assets, Rp662 billion fictitious sales, and double bookkeeping (Kontan/EY report, 2019).
- Duniatex: unit DDST missed $13.4 million interest on a $260 million syndicated loan in July 2019; group debt ~$1.33 billion; Fitch cut Delta Merlin six notches in under ten days; Bareskrim opened an investigation into fraud and money-laundering allegations touching the group's auditors, assessors and bankers (The Jakarta Post, 2019; IDNFinancials, 2019; Bloomberg, 2019).
- eFishery: FTI Consulting found revenue for 9M-2024 inflated from an actual $157 million to a reported $752 million, dual books since 2018, and receivables of $63 million on a $220 million asset base of doubtful quality; the founder has been reported convicted and sentenced in 2026 (TechNode Global, 2025; Business Today, 2026).
- Bank Jatim Jakarta branch: fictitious working-capital credit through 2023–2024; BPK's 10 June 2025 audit counted Rp299.39 billion, prosecutors pursue ~Rp569.4 billion; pledged trade receivables and stock "could not be found in the warehouse at inspection" (Hukumonline, 2025; Dandapala, 2025). Hukumonline also reports 102 banking-crime case files involving fictitious credit used to dress up NPLs as of June 2024.

## Cost of the Problem

Episodic but huge: Rp14 trillion alleged (SNP, 2018), ~Rp4 trillion overstatement (AISA/EY, 2019), $1.33 billion group debt in restructuring (Duniatex, 2019), ~$595 million of fabricated revenue in nine months (eFishery/FTI, 2025), Rp569.4 billion (Bank Jatim, 2025). No annual aggregate exists (unverified). Strip for addressability: SNP, Bank Jatim and eFishery all rested on insider fabrication and collusion — including collusive or failed audits — which no registry query detects; the registry-addressable slice (the same real asset pledged to multiple banks) is a minority of these losses and overlaps the receivables-registry candidate.

## Existing Solutions (as of 2026-07)

- OJK SLIK: cross-lender facility and collateral data exchange; catches a borrower's total leverage, not collateral truth.
- AHU fidusia registry: inventory and receivables fidusia registrable as descriptions; fungible pools cannot be uniquely identified.
- CMA/stock-monitoring: Sucofindo, SGS, BGR physical collateral management (Sucofindo, 2026).
- KJPP appraisals, KAP audits, OJK/Kemenkeu sanctions on negligent auditors after SNP (2018).
- Bappebti's Sistem Resi Gudang for warehouse receipts (separate candidate).
- Globally: MonetaGo's Secure Financing utility (ABS Singapore TFR; India Factoring alliance March 2026) deduplicates trade documents — not present in Indonesia and not a solution to fabricated physical stock.

## Why Insufficient & Who Rejects the Existing Anchor

Three distinct failures hide in this candidate. (1) Duplicate pledging of the same receivable — the receivables-registry problem, solvable by a central hash utility. (2) Fabricated inventory — unsolvable by any registry, because inventory is fungible: only physical attestation (CMA) or honest audit binds the record to reality, and banks under-buy CMA on cost. (3) Collusive audit failure — Duniatex's foreign bondholders and eFishery's foreign investors are genuine external verifiers who distrusted the local attestation chain after the fact; but their remedy is forensic audit and security structure, and domestic banks continue to accept OJK, SLIK and the KAP system as anchors. Nobody demands a custodian-independent ledger; they demand better boots in warehouses.

## Blockchain Test

Test 1 passes — fabrication predates ledgers. Test 2 fails in the decisive way: neither PostgreSQL nor a blockchain solves it, because the failing link is the physical-world oracle; where deduplication does help (documents), a single-operator utility under OJK/AFPI suffices, per the receivables-registry finding. Test 3 partially fails: OJK can tighten SLIK collateral reporting by decree, and CMA incumbents already sell the physical layer. Test 4 fails after stripping collusion losses: the addressable remainder funds inspection services and audit reform, not verification-infrastructure venture economics.

## Kill Test Verdict

KILLED — fails tests 2 and 4 (test 3 partial). The trust failure is real and severe, but it is an oracle problem plus an audit-integrity problem inside an accepted-anchor system. Supports H1's negative case: adversarial lenders exist, yet every party still accepts state anchors, and the binding constraint is physical verification no ledger provides.

## Scores

- Severity 8 — serial multi-trillion-rupiah frauds (SNP, AISA, Duniatex, eFishery, Bank Jatim) with criminal and existential consequences for lenders.
- Market 5 — collateral verification/monitoring spend plausibly $50–250M given Rp8,918T bank credit, but no direct figure (unverified basis).
- WTP 6 — banks already pay CMA surveyors and appraisers (an inferior alternative with a clear budget owner); spend is discretionary, not mandated.
- Chain 3 — accepted domestic anchors (OJK, SLIK, KAP regime); fungible assets make tamper-evidence moot at the point of failure.
- Urgency 5 — fresh cases through 2025–2026 keep pressure on, but no deadline or mandate forces new infrastructure.
- Competition 3 — Sucofindo/SGS/BGR entrenched on the physical layer; MonetaGo one border away on the document layer.
- Moat 4 — an inspection-plus-data service is copyable; no standards position available.

Weighted: 5.2.

## What Would Kill This Idea

Killed by the oracle problem and collusion-stripped sizing. It would revive only as a different company: an IoT/computer-vision collateral-monitoring service with insurer backing — a competitor to Sucofindo, not verification infrastructure — or it collapses into the receivables-registry utility for the document-shaped slice, which itself failed the blockchain test.

## Sources

- https://www.thejakartapost.com/news/2018/09/25/consumer-finance-firm-allegedly-defrauds-banks-of-rp-14-trillion.html
- https://insight.kontan.co.id/news/hasil-investigasi-ungkap-banyak-kejanggalan-di-laporan-keuangan-tiga-pilar-aisa
- https://www.idnfinancials.com/archive/news/28878/Bareskrim-investigates-allegations-of-fraud-and-money-laundering-in-Duniatex-case
- https://www.thejakartapost.com/news/2019/07/25/fitch-cuts-rating-of-duniatex-subsidiary-by-six-notches-in-less-than-10-days.html
- https://www.bloomberg.com/news/articles/2019-09-25/the-worst-junk-bond-in-asia-shows-how-rapidly-fortunes-can-turn
- https://technode.global/2025/01/22/indonesias-efishery-unicorn-allegedly-faked-most-of-its-sales-report/
- https://www.businesstoday.com.my/2026/07/25/unwrapping-the-efishery-scandal/
- https://www.hukumonline.com/stories/article/lt682288fb70807/modus-kredit-fiktif-dan-upaya-hukum-pemulihan-kerugian-perbankan/
- https://dandapala.com/article/detail/sidang-kredit-fiktif-bank-jatim-nilai-kerugian-hampir-setengah-triliun
- https://www.antaranews.com/berita/5639169/ojk-catat-kredit-industri-perbankan-capai-rp8918-triliun-per-mei-2026
- https://www.sucofindo.co.id/en/layanan-jasa/manajemen-agunan-atau-persediaan/
- https://kabar24.bisnis.com/read/20120410/186/71962/pembiayaan-komoditas-danamon-gandeng-sucofindo-and-bhanda-ghara-reksa
- https://www.theasianbanker.com/press-releases/monetago-selected-by-abs-to-deliver-trade-finance-registry
- https://magazine.factoring.org/news/monetagos-fraud-prevention-technology-enables-india-factoring-to-expand-msme-financing-capabilities
