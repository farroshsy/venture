# AI Training Data Licensing Provenance (Indonesia) — AXIS 4-EXPLORATORY

Exploratory cohort: genuinely adversarial, cross-border, no single accepted anchor — the closest live test of H1's positive branch. Scored honestly, it still dies on market size and on incumbents occupying the intermediary slot.

## Problem & Current Workflow

There is barely a workflow. AI crawlers scrape Indonesian news and content sites; publishers detect it in logs, block via robots.txt and CDN rules, and have no way to prove what was already taken or negotiate priced access. The emerging licensed path: Tempo Digital launched a content-and-data licensing business for AI platforms in 2026, blocking unlicensed AI bots while offering paid programmatic access through OpenMined infrastructure (Tempo, 2026). Regulatory settlement is being designed, not practiced: the revision of the Copyright Law (RUU Hak Cipta) — accepted as a DPR initiative in March 2026, targeted for completion in 2026 — would oblige platforms to pay compensation when aggregating, previewing, or using news content for AI training, routed through a state-supervised collective management organization (LMK) (Kompas, July 2026; Viva, 2026).

## Stakeholders & Who Pays

Indonesian side: publishers (Tempo, KG Media, AMSI members), Dewan Pers (Regulation 1/2025 on AI in journalism; 2026 National Press Declaration demanding AI royalties), Komdigi and DJKI drafting rules; publishers are the would-be payees, not payers. Foreign side: AI labs (OpenAI, Google, Anthropic, Meta, Perplexity) are the would-be payers; their compliance teams and courts in their home jurisdictions are the real settlement venues. Infrastructure intermediaries: Cloudflare, TollBit, ProRata, RSL Collective, OpenMined. Disputes are adjudicated nowhere yet in Indonesia — no deal between a major AI lab and an Indonesian publisher was found as of July 2026 (hard search, Indonesian included).

## Trust Breakdown

- Publishers cannot verify training use; labs' self-reports are the only record — the core custodian-integrity failure. Globally litigated: NYT v. OpenAI (filed 2023, ongoing 2026); Anthropic's ~USD 1.5B settlement with authors over pirated training books (Bartz v. Anthropic, 2025); dozens more tracked through 2026 (Presenc.ai tracker, 2026).
- Scraping despite blocks: Cloudflare moved to default-blocking AI crawlers and launched Pay Per Crawl precisely because robots.txt was ignored (Cloudflare, July 2025).
- Dewan Pers stated publicly that AI companies have never paid for Indonesian journalistic works used as training material (CNN Indonesia, June 2026); the Law Minister affirmed commercial use of journalistic works will require royalty payment under the revision (Antara, 2026).
- Indonesian damage signal: Tempo pageviews fell ~33.5% and users ~19.4% in 2025, hitting programmatic ad revenue (Tempo, 2026); 800+ Indonesian media workers laid off 2024–July 2025 (Dewan Pers, 2025). Attribution of these losses to AI answer engines specifically is asserted by the industry, not proven — treat as directional.

## Cost of the Problem

Global licensing comps exist (News Corp–OpenAI reported ~USD 250M/5yr, 2024 (unverified)); only ~4 in 10 major 2026 content deals still include training rights (Media and the Machine, 2026). Indonesian-content licensing value: no figure exists (unverified); given global deal concentration in English-language premium publishers, Indonesia's near-term addressable licensing flow is plausibly single-digit millions USD annually — below venture scale. The LMK route, if the law passes, would create a mandated domestic payment pool of unknown size (unverified).

## Existing Solutions (as of 2026-07)

Global: Cloudflare Pay Per Crawl (private beta July 2025, evolving to Pay Per Use, Forbes July 2026) plus Cloudflare's acquisition of the Human Native licensing marketplace to build a licensed AI-data marketplace at the CDN layer (TechInformed, 2026); RSL — Really Simple Licensing standard (Sept 2025; Reddit, Yahoo, Medium, Quora, Ziff Davis); TollBit crawler-toll marketplace; ProRata attribution-based ad-revenue split (500+ publishers, LLM Pulse 2026); C2PA for content provenance (media authenticity, not licensing); DATA Foundation — the a16z-backed Story Protocol rebranded June 2026 into on-chain AI-training-data provenance with its Trace registry (CoinDesk, June 2026) — the direct blockchain incumbent for this exact thesis. Indonesia: Tempo x OpenMined; Dewan Pers/AMSI guidelines; draft LMK mechanism.

## Why Insufficient & Who Rejects the Existing Anchor

The anchor question cuts both ways. Publishers reject labs' self-attestation; labs will not accept an Indonesian LMK's untested usage claims — in Kemkomdigi's July 2026 industry discussions Google explicitly proposed B2B deal mechanisms as an alternative to the collective (LMK) scheme (BeritaKaltim, July 2026), and the Deputy Minister acknowledged the Indonesia–US trade agreement constrains how hard publisher-rights obligations can bind American platforms (Bisnis, February 2026). The Indonesian state cannot compel foreign labs outside its jurisdiction — so no single sovereign anchor spans both sides. That is the H1-positive pattern. But a commercial anchor is filling the slot: Cloudflare sits in the traffic path of much of the web and both sides already transact through it; RSL provides the licensing vocabulary. The residual unsolved piece — proving what was in a completed model's training set — is not solvable by any registry, blockchain or otherwise, without lab cooperation or interpretability advances; the ledger can only notarize offers and crawls, which Cloudflare logs already do with sufficient credibility.

## Blockchain Test

Adversarial parties, cross-border, external verifiers (courts) — structurally the strongest chain case in this cohort (chain 6). Yet tamper-evidence changes behavior only at the crawl/consent boundary, where an accepted commercial intermediary already operates, and DATA Foundation already occupies the on-chain variant.

## Kill Test Verdict — KILLED (exploratory, honest)

1. Without blockchain, problem persists? YES.
2. PostgreSQL under one operator? Largely YES — Cloudflare's position is exactly a trusted single operator both sides tolerate; domestic flows would route through the state LMK. FAIL (weak).
3. Incumbent ships it in six months? Cloudflare shipped Pay Per Crawl in months; RSL exists; DATA Foundation covers the crypto flank. FAIL.
4. Standalone Indonesian company value? Licensing flows likely single-digit USD millions/yr (unverified) — no. FAIL.

## Scores

- Severity 6 — real, documented revenue collapse for publishers (Tempo -33.5% pageviews, 2026), but provenance is not where the loss accrues; bargaining power is.
- Market 3 — Indonesia-addressable licensing-infrastructure TAM well under $50M (unverified, directionally robust).
- WTP 4 — payees are cash-poor publishers; payer WTP appears only if the copyright revision passes and binds.
- Chain 6 — genuinely no accepted cross-border anchor, but the verifiable surface (crawl/consent) is already served.
- Urgency 7 — RUU Hak Cipta targeted for 2026 completion; Dewan Pers escalating publicly.
- Competition 4 — Cloudflare, TollBit, ProRata, RSL, DATA Foundation; none dominant in Indonesia, all better funded.
- Moat 4 — a local standard/LMK-integration position is conceivable but capturable by Cloudflare or the state overnight.
- Weighted: 4.8

## What Would Kill This Idea / Revival Triggers

Killed by market size and incumbent coverage. Revive if: (a) the copyright revision passes with a mandatory training-use royalty and the LMK needs independent usage evidence foreign labs accept; (b) regional aggregation (ASEAN publishers) pools enough content value to matter; (c) courts start requiring custodian-independent crawl evidence that Cloudflare's private logs fail to satisfy. Monitor all three; none holds as of July 2026.

## Sources

- https://www.tempo.co/info-tempo/tempo-luncurkan-bisnis-penyediaan-konten-untuk-platform-ai-2272855
- https://nasional.kompas.com/read/2026/07/13/16350991/ruu-hak-cipta-bakal-lindungi-karya-jurnalistik-di-tengah-maraknya-ai
- https://www.viva.co.id/berita/nasional/1894074-karya-jurnalistik-dieksploitasi-platform-digital-dan-ai-pemerintah-percepat-revisi-uu-hak-cipta-rampung-tahun-ini
- https://dewanpers.or.id/read/news/30-12-2025-catatan-akhir-tahun-dewan-pers-2025-kemerdekaan-pers-profesionalisme-dan-ekonomi-media-jadi-tantangan
- https://teropongmedia.id/deklarasi-pers-nasional-2026-negara-diminta-lindungi-karya-jurnalistik-dari-pembajakan-ai/
- https://www.theregister.com/2025/09/11/rsl_content_grabbing_ai_digital_licensing/
- https://www.forbes.com/sites/sandycarter/2026/07/01/cloudflare-moves-to-make-ai-pay-for-the-content-it-consumes/
- https://www.coindesk.com/business/2026/06/25/a16z-backed-crypto-firm-rebrands-shifts-focus-to-solving-ai-s-global-copyright-headache
- https://mediacopilot.ai/ai-revenue-platforms-comparison/
- https://presenc.ai/research/ai-training-data-lawsuit-tracker-2026
- https://llmpulse.ai/blog/ai-content-licensing-deals/
- https://www.cnnindonesia.com/nasional/20260615193214-20-1369483/dewan-pers-ungkap-perusahaan-ai-tak-pernah-bayar-karya-jurnalistik
- https://www.antaranews.com/berita/5631884/menkum-pemanfaatan-komersial-karya-jurnalistik-wajib-bayar-royalti
- https://beritakaltim.co/2026/07/29/kemkomdigi-buka-diskusi-industri-bahas-tata-kelola-hak-cipta-di-era-ai/
- https://teknologi.bisnis.com/read/20260224/84/1955508/wamenkomdigi-perjanjian-dengan-as-tak-berpengaruh-langsung-kepada-publisher-rights
- https://techinformed.com/cloudflare-buys-human-native-to-build-licensed-ai-data-marketplace/
