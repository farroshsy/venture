# E-commerce Counterfeits & Brand Protection — Indonesia

## Problem & Current Workflow
Counterfeit goods circulate at scale on Indonesian marketplaces (Shopee, Tokopedia/ShopTokopedia, Bukalapak, Lazada, TikTok Shop live commerce). A brand that wants a fake removed today follows this chain: (1) hold a registered trademark at DJKI (Direktorat Jenderal Kekayaan Intelektual) — registration certificate is the gating document; (2) enroll in each marketplace's IP portal (Tokopedia IP Protection, Shopee's IPR reporting flow), submitting the certificate plus power of attorney; (3) monitor listings manually or via a brand-protection SaaS; (4) validate with a test purchase; (5) file a takedown per listing; (6) for repeat offenders, escalate to DJKI's PPNS investigators or police under UU Merek 20/2016 — a delik aduan (complaint-based offense), so nothing moves without the rights holder filing; (7) optionally record the mark with Bea Cukai for border seizure. Enforcement is listing-by-listing while sellers cycle accounts; TikTok Shop live-stream selling leaves little listing evidence to act on (Magpie IQ, 2026). Since TikTok took 75.01% of Tokopedia for USD 840M (completed January 2024; GoTo press release, 2024), TikTok Shop and Tokopedia moderation run under one entity, fined by KPPU in 2025 for late merger notification (China-Global South Project, 2025).

## Stakeholders & Who Pays
Work is done by brand-protection teams at consumer brands (cosmetics, fashion, pharma, auto parts), their law firms (Rouse, AFFA), and SaaS vendors. Brands pay. Marketplaces bear moderation cost and reputational/USTR exposure. DJKI and Bea Cukai audit and enforce; MIAP (Masyarakat Indonesia Anti Pemalsuan) lobbies. Consumers dispute via marketplace refund flows; sellers dispute takedowns claiming parallel imports.

## Trust Breakdown (documented incidents)
- USTR 2024 Notorious Markets Review again lists Shopee and Bukalapak for "high volumes of counterfeit products" and weak repeat-offender penalties; Tokopedia was delisted after removing 80M+ infringing listings and sanctioning 43,000+ sellers in 2023 (USTR via Magpie IQ / Conventus Law, 2024).
- Indonesia has sat on the USTR Priority Watch List for IP for 16 consecutive years (USTR, 2025).
- DJKI's December 2025 evidence-destruction event cited seized counterfeit goods with potential losses of Rp 3.07 billion in that batch alone (Tempo, 2025).
- Seller evasion is systematic: account cycling after takedowns, image reuse, 40–70% price undercutting (Magpie IQ, 2026).

## Cost of the Problem
- Economy-wide counterfeiting cost Rp 291 trillion, Rp 967 billion in lost tax, and 2M+ lost jobs per the MIAP–IEALP UPH study of 2020 (published 2021; MIAP runs it five-yearly) — the canonical figure, dated, and economy-wide rather than e-commerce-specific.
- 5–10% of Indonesian marketplace transactions estimated fraudulent (Cube Asia, 2025).
- Indonesia e-commerce GMV exceeded USD 75B in 2024 (Magpie IQ citing industry data, 2025) — even 5% counterfeit share implies multi-billion-dollar flows (derived, unverified).
- Brand-side spend on monitoring subscriptions, test purchases, and legal fees: no Indonesia-specific aggregate found (unverified).

## Existing Solutions (as of 2026-07)
- **Marketplace-native**: Tokopedia IP Protection portal, Shopee IPR flow, TikTok Shop "zero tolerance" policy with automated pre-listing detection.
- **Government**: DJKI trademark registry and PPNS enforcement; DJKI anti-counterfeiting mall certification program (2025); Bea Cukai IP recordation; DJKI–IDEA marketplace MoU track.
- **Global SaaS**: Red Points, Corsearch (Zeal), MarqVision (publishes Tokopedia takedown guides), BrandShield, Podqi — all cover Indonesian platforms.
- **Indonesia-focused**: Magpie IQ "Owl" (monitors six Indonesian platforms, transaction-signal detection); Shieldtag (Jakarta, hologram + QR + PIN authentication, used by Azarine, Zoya); SeQure (copy-proof QR); CekKeaslian. BPOM pharma serialization (2D barcode track-and-trace) is mandated compliance for drugs.

## Why Insufficient
Detection-takedown is a treadmill: enforcement is per-listing while sellers respawn, and live commerce evades listing-based monitoring entirely. Cross-platform repeat-offender identity is not shared between marketplaces, so a banned Shopee seller reopens on TikTok Shop. Physical authentication (Shieldtag-style) only protects brands that opt in and shifts verification burden to consumers. But these are coordination and incentive gaps, not missing-ledger gaps.

## Blockchain Test
Provenance-on-chain does not bind a token to a physical good any better than a QR code bound to a Postgres row; the counterfeiter copies the code either way. Marketplace, brand, and regulator already accept trusted intermediaries (DJKI registry, marketplace portals). A shared repeat-offender blacklist could be multi-org, but IDEA or Komdigi as operator is an accepted neutral party. Chain necessity is low.

## Kill Test Verdict — KILLED
1. Problem survives without blockchain? YES (physical counterfeiting).
2. Would PostgreSQL under one trusted operator solve it? YES — brand-protection SaaS and serialization registries are exactly that, and they function. FAIL.
3. Could an incumbent ship it in six months? YES — marketplaces already run IP portals; Red Points/MarqVision already cover Indonesia. FAIL.
4. Standalone value? Exists, but already captured by funded incumbents.

## Scores
- Severity 7 — recurring losses, USTR/regulatory exposure, dedicated brand-protection staff exist.
- Market 5 — Indonesian brand-protection spend plausibly USD 50–250M; economy-wide damage is large but not addressable revenue.
- WTP 7 — brands already pay Red Points/Corsearch/law firms for an imperfect alternative.
- Chain 3 — single-org detection; database plus QR suffices.
- Urgency 5 — annual USTR pressure, no hard deadline.
- Competition 3 — funded incumbents with traction, global and local.
- Moat 3 — detection features are copyable; no protocol position available.
- **Weighted: 5.0**

## What Would Kill This Idea
Already killed: kill-test questions 2 and 3 fail, and competition is saturated. The only defensible variant — a cross-marketplace seller-identity blacklist — belongs to IDEA/Komdigi or the platforms themselves, not a startup.

## Sources
- https://magpieiq.com/insights/state-of-counterfeiting-indonesia-marketplaces-2026/
- https://en.tempo.co/read/1564221/tokopedia-shopee-bukalapak-cited-in-u-s-notorious-market-report
- https://conventuslaw.com/report/notorious-markets-and-counterfeit-goods-on-e-commerce-marketplaces-in-asia/
- https://kumparan.com/kumparanbisnis/peredaran-barang-palsu-rugikan-ekonomi-ri-hingga-rp-291-t-1xcn3xMbnX1
- https://www.beritasatu.com/ekonomi/869879/kerugian-ekonomi-akibat-produk-palsu-capai-rp-291-triliun
- https://www.gotocompany.com/en/news/press/goto-and-tiktok-announce-transaction-completion-formalizing-strategic-partnership-for-indonesia
- https://chinaglobalsouth.com/2025/09/30/indonesia-fines-tiktok-tokopedia-deal/
- https://www.tempo.co/info-tempo/berantas-produk-ilegal-djki-lakukan-pemusnahan-barang-bukti-pelanggaran-ki-2097421
- https://www.inilah.com/djki-targetkan-100-mall-bersertifikasi-anti-pemalsuan-pada-tahun-ini
- https://www.redpoints.com/blog/red-points-vs-corsearch/
- https://www.marqvision.com/blog/tokopedias-ip-protection
- https://www.shieldtag.co/en/
- https://sequre.id/
