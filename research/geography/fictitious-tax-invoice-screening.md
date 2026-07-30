# Geography Test — Fictitious Tax-Invoice Screening

Question asked: would this identical product clear the Bootstrap Bar if sold
into another geography? Not a rescore. Indonesia held fixed in all prior work.

## Comparator markets & why

**India (GST fake-ITC screening)** and **Mexico (SAT Art. 69-B / EFOS
screening)**. Both were picked because the technical requirement is
*identical*, not merely similar: both run mandatory clearance-model
e-invoicing (India's IRP/e-invoice, Mexico's CFDI) exactly as Indonesia runs
Coretax, both have a buyer that loses a tax credit when a supplier's invoice
turns out to be fabricated, and both have documented, prosecuted, large-scale
fake-invoice syndicates. A product built for faktur pajak TBTS screening
needs no redesign to serve either. Regional peers (PH/VN/TH/MY) were skipped:
none has a comparably large clearance-invoicing taxpayer base. The EU/UK were
skipped: ViDA-era e-invoicing tooling is sold by SAP/Sovus/Pagero into
enterprise procurement, which fails G6 on its face.

## Buyer count

- India: **1.51 crore (15.1M) active GST registrations as of 30 Apr 2025**,
  rising to **1.53 crore at 30 Jun 2025** (GSTN, *GST @ 8 Years Report*, 2025,
  via caclubindia / A2Z Taxcorp). E-invoicing is mandatory above ₹5 crore
  turnover since 1 Aug 2023 (IndiaFilings/TaxGuru, 2023-2026); a reduction to
  ₹2 crore from Oct 2025 is reported in secondary trade blogs only
  (unverified).
- Mexico: SAT's padrón held **87.9 million active taxpayers, ~97% personas
  físicas** (SAT, cited via accountancy press 2025) → roughly **2.6 million
  personas morales** (derived by me from those two figures, not a published
  SAT count — treat as derived).

Both are one to two orders of magnitude above Indonesia's "150–250 mid/large
PKP finance teams". Buyer count is not the binding constraint here.

## Observed pricing

This is where the test resolves. Unlike Indonesia, price *is* observable — and
it is near zero.

- India, GSTIN validation credits: **₹0.80/credit** (1,000 min) and
  **₹0.60/credit** (2,500 min), 1-year validity, self-serve (gstincheck.co.in
  pricing page, 2026). ≈ US$0.007–0.010 per check.
- India, secondary quote: **₹2 per GST lookup** (Surepass blog, 2026).
- India, the tier with real ACV: **ClearTax GST enterprise price "available on
  request"** (Techjockey listing, 2026) — quote-based, i.e. a sales motion.
- Mexico, EFOS/69-B certification: **199 MXN/month (Professional) and 499
  MXN/month (Enterprise)** (valida-cfdi.com.mx, 2026) ≈ US$130–330/year.
- Mexico, bulk RFC/69-B verification: **~$0.30 per 1,000 RFCs** (Apify
  "Verificador RFC Mexico" listing, 2026).

$1M ARR at ₹0.70/check requires roughly **125 million verifications a year**.
At Mexico's top self-serve tier (~US$330/yr) it requires **~3,000 paying
Spanish-language SMBs**.

## Incumbents & free substitutes

- India: ClearTax (venture-funded), Surepass, Perfios, HyperVerge, Cashfree,
  Attestr, GSTZen, gstincheck (Surepass 2026 provider roundup). The free state
  substitute is **stronger than Coretax, not weaker**: GSTN launched the
  **Invoice Management System (IMS) on 14 Oct 2024**, letting every recipient
  accept / reject / hold each supplier invoice before it enters GSTR-2B and
  their ITC (GSTN advisory; ClearTax, BDO, 2024-2025). That is precisely the
  buyer-facing control Indonesia lacks. DGGI separately runs its own detection
  (₹36,374 crore fake ITC, FY24; 17,818 fake firms / ₹35,132 crore, FY25 —
  Deccan Herald, 2024/2025).
- Mexico: SAT publishes the 69-B EFOS list **publicly and free**; SAT Fácil
  offers a free seven-list RFC check ("Consultar Lista 69-B y las 7 Listas del
  SAT Gratis", satfacil.com.mx, 2026). Commercial wrappers: EdiFactMx
  Valida69B, ValidaCFDI, Induxsoft, SW sapien, 69b.mx.

## Verdict for a solo remote founder

**No.** The Indonesian failure inverts but does not resolve. Indonesia had no
observable price; India and Mexico have one, and it prices this function as a
commodity lookup at $0.007–$0.10 per check or $130–330/year. The only tier
with an ACV that could reach $1M (ClearTax-class enterprise) is quote-based —
G6 fail. And in both comparators the state has shipped *more* free
substitution than DJP has, not less: IMS gives Indian buyers per-invoice
reject rights for free, and SAT gives Mexican buyers the fraudulent-issuer
list itself for free.

## What would change this

A comparator where the tax authority publishes the invoice ledger but
explicitly refuses to publish an issuer-risk signal, *and* where a third party
already sells that signal at a documented ≥$3k/yr self-serve price. None of
the two markets examined shows this. Also changed if India's e-invoicing
buyer-side risk layer were withdrawn (no evidence of that).

## Sources

- https://gstincheck.co.in/pricing.html (2026, per-credit pricing)
- https://surepass.io/blog/top-gst-verification-api-providers/ (2026)
- https://www.techjockey.com/detail/cleartax-gst-software (2026, "price on request")
- https://valida-cfdi.com.mx/features/certificado-validacion-efos (2026, 199/499 MXN/mo)
- https://apify.com/leongael/verificador-rfc-mexico (2026)
- https://www.satfacil.com.mx/consultar-efos (2026, free)
- https://cleartax.in/s/invoice-management-system-ims-under-gst + tutorial.gst.gov.in IMS advisory (2024-2025)
- https://www.caclubindia.com/news/gst-marks-8-years-of-transformative-journey-25607.asp (GSTN, 2025)
- https://www.deccanherald.com/business/fake-itc-claims-detection-by-central-gst-officers-up-51-at-rs-36374-crore-in-fy24-3126661 (2024)
