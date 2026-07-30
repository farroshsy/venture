# Does Indonesia have a bootstrap-scale trust-infrastructure company in it?

A pre-registered, adversarially-verified screen of **86 candidate
opportunities** across two research programs. Both returned empty. This
repository is the full record — protocols frozen before scoring, every
elimination reasoned, every optimistic claim tested by an agent whose job
was to refute it, and a self-audit that caught the study's own calibration
pass bending an anchor.

The interesting part is not that nothing survived. It is that the reason is
specific, reproducible, and was allowed to be discovered rather than argued
around.

---

## The two questions, and the two answers

**Program A** — *Identify the single highest-value problem in Indonesia
where blockchain is demonstrably the best technical solution.*

> **No qualifying opportunity was found.** 56 candidates: a 30-industry
> scan, then 26 more selected along five structural axes chosen because the
> first scan's failure mode should not apply there. Maximum score 5.9
> against a pre-committed 7.0 bar.

**Program B** — *Where are Indonesia's largest trust and integrity failures
for which software materially changes the economics, architecture
unconstrained?*

> **No qualifying opportunity was found.** 30 candidates, a lower bar
> (bootstrap-scale ≥$1M ARR rather than venture-scale), the blockchain
> requirement removed entirely. Maximum score 5.6.

Both conclusions are stated as *found under this protocol* — not as claims
that no such business exists. The distinction is enforced throughout.

The scope is narrower still, and worth stating plainly because it makes the
result stronger rather than weaker. Program B eliminated against a founder
model fixed in advance: a solo founder, selling remotely, product-led
adoption only, no enterprise sales motion, no pre-revenue licence. So the
finding is not *"enterprise integrity software is not worth building."* It
is: **among companies compatible with that operating model, none was
found.** Several eliminated candidates are real businesses for a funded team
with a sales organisation.

## What killed everything

Three findings, in order of how much they explain:

**1. The accepted anchor already occupies the slot — usually the state.**
In most eliminations, a ministry registry, statutory custodian, or
contractually accepted vendor is already the neutral party, and regulators,
courts, and foreign counterparties accept it (SATUSEHAT, SIMBARA, SIHALAL,
INSW, Dukcapil, BPN, KSEI, OSS). Program A found this as an *architectural*
objection: custodian-independent verification is unnecessary where a
custodian is trusted. Program B found the same anchor as a *commercial*
one: the anchor ships the function free, which prices the market at zero.

**2. Where no anchor exists, something else binds.** Every genuinely
anchor-less failure died on insufficient economics, doctrinal authority
that tamper-evidence cannot change, a custodian who refuses to release the
data, or an oracle problem — the contested fact is physical or off-system,
outside any software's reach.

**3. Prices exist; they are simply too low against buyer pools too small.**
Program B's most-corrected finding. Indonesian buyers *do* pay for
integrity software — SI-INSAF sells BPR fraud audit at Rp2.6M per bank —
but reaching $1M ARR at that price needs roughly 6,300 customers against a
national population near 1,100–1,518. Meanwhile the state's version is
free.

A fourth pattern, from the exploratory cohort: when a genuinely new trust
surface appears, incumbents capture it within about a year. Agent identity
and payment mandates shipped as features of Visa, Mastercard, Google and
Stripe rails inside twelve months of the problem being named.

**And one correction the study made to itself.** Both programs held
geography fixed at Indonesia — the one variable never tested. A bounded
appendix ([`research/GEOGRAPHY-NOTE.md`](research/GEOGRAPHY-NOTE.md)) took
the nine candidates that passed every kill test and died only on economics,
and asked whether they clear the bar elsewhere. Two of the Indonesian
failure terms *do* reverse abroad — buyer counts and price observability
are small-market artefacts. The candidates still fail, because those terms
were never the binding ones. Richer markets ship *more* free state
substitution, not less (UK Companies House, GSTN IMS, RBI's MuleHunter.AI,
SSA's eCBSV), and every contract large enough to matter sits behind
procurement and security review. The binding constraint turned out to be
the sales motion — and that is general, not Indonesian.

## Why the method is the point

Most idea-screening optimizes for generating candidates. This optimized for
surviving falsification.

- **Rubrics were frozen before scoring** and never moved — including
  immediately after the first empty result, when moving the bar would have
  been easiest.
- **Kill tests were binary and pre-committed.** In Program B, a kill on
  "an incumbent might absorb this" required *documented* evidence — a
  roadmap, announced regulation, funded implementation. Hypotheticals were
  not allowed to kill.
- **Adversarial verification.** Any candidate crossing a pre-set trigger
  got an agent tasked to refute it. **8 of 8 refuted.** Optimistic
  competition and whitespace scoring never once survived contact with
  evidence — a methodological result independent of any candidate.
- **A control group.** Program A included three candidates predicted to
  fail by a stated mechanism. All three failed, by that mechanism. The kill
  test discriminates; it does not reject everything indiscriminately.
- **Self-audit before freezing.** An independent audit of Program B's
  calibration found the judge had invented a scoring rule absent from the
  frozen protocol, and that a headline claim was false. Corrections ran *in
  the candidates' favour*; the conclusion held anyway. Both the defect and
  the correction are published.
- **Empty results were accepted as deliverables**, not padded into
  shortlists.

## Reading path

Roughly an afternoon, in this order:

1. [`research/PROGRAM-A-CONCLUSION.md`](research/PROGRAM-A-CONCLUSION.md) —
   frozen. The blockchain question, answered.
2. [`research/PROGRAM-B-CONCLUSION.md`](research/PROGRAM-B-CONCLUSION.md) —
   frozen. The software question, answered, with the errata section.
3. [`research/verify/audit-anchor-application.md`](research/verify/audit-anchor-application.md)
   — the self-audit, if you want to see the study check itself.
4. [`research/GEOGRAPHY-NOTE.md`](research/GEOGRAPHY-NOTE.md) — an appendix
   testing the one variable both programs held fixed.
5. [`research/PHASE1-MATRIX.md`](research/PHASE1-MATRIX.md),
   [`research/PHASE15-MATRIX.md`](research/PHASE15-MATRIX.md),
   [`research/PROGRAM-B-MATRIX.md`](research/PROGRAM-B-MATRIX.md) — every
   candidate ranked, with a one-line kill reason each.

## Repository map

| Path | Contents |
|---|---|
| `research/RUBRIC.md` | Program A rubric, committed before scoring |
| `research/PHASE15-PROTOCOL.md` | Program A's structural-axis protocol |
| `research/PROGRAM-B-PROTOCOL.md` | Program B protocol (frozen, hashed) |
| `research/industries/` | 30 industry profiles (Program A, phase 1) |
| `research/axes/` | 26 structural-axis candidates (Program A, phase 1.5) |
| `research/candidates/` | 30 integrity-software candidates (Program B) |
| `research/verify/` | 8 adversarial refutation memos + the calibration audit |
| `research/CROSSCUT.md` | Trust-failure taxonomy across industries |
| `CONTEXT.md` | Glossary and full decision log |

Each candidate file carries: the workflow as it works today, who pays,
documented failures with sources, existing solutions as of mid-2026, the
kill-test verdict, and an explicit *what would kill this idea* section.

## Integrity of the record

Frozen documents, SHA-256:

```
e5ff06827257bbf89c50e62b9064b316154555f39fb8f85ad3ea9d848aa60e65  research/PROGRAM-A-CONCLUSION.md
c4002cb2f4d0c9a2402132a899c164341133c9dcba1b4b4c168b67ae46acc2c2  research/PROGRAM-B-CONCLUSION.md
e2951a71d1a5117bcd95c6e2bab4c40e53a8f413b65b735b4d1e83053e65a4c6  research/PROGRAM-B-PROTOCOL.md
1d0ce2335297296c6f96d921936eb2c3cb53e6581ba78adc9abf8fb2fee782a6  research/verify/audit-anchor-application.md
```

Verify with `shasum -a 256 <file>`. These documents are closed: no further
edits beyond typographical correction. Any future work in this territory is
a new, versioned program that references them rather than amending them.

## Limits

Desk research. **No customer interviews** — the single largest gap, and the
one that would move the conclusions most. Indonesia-scoped and timestamped
July 2026; a bounded appendix tests whether the findings are
Indonesia-specific. Adversarial memos ran with degraded search tooling,
which weakens *negative* competitor findings specifically — one memo notes
its decisive competitor surfaced on a single query. Eliminations were made
at a bootstrap bar for a solo founder; several rejected opportunities are
real businesses for a funded team, and a few are viable service niches at
sub-venture scale.

Every number here carries a named source and year, or is explicitly marked
unverified. Several secondary sources repeating one figure were counted as
one source, not as corroboration.
