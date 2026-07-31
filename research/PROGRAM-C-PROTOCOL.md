# Program C Protocol — Displacement, not whitespace

**Pre-committed 2026-07-30, before any candidate was examined.** New program.
Inherits nothing from Programs A and B except their negative constraints and
their evidence discipline. Both remain frozen.

## Why the previous rubric was wrong

Programs A and B scored **competition as a negative** — anchor 9 was "verified
whitespace", anchor 3 was "funded incumbents with traction". In a functioning
market that is backwards: an empty room usually means nobody wants the thing.
86 candidates were screened for empty rooms and the result was reported as a
finding that the rooms were empty.

Competition answers the hardest question in the whole search — *does anyone
actually pay for this?* Program C therefore treats incumbents as **evidence**,
and asks the question that follows: **why has no incumbent taken the whole
market, and why are customers still unhappy?**

## Question

> Find a software category with **proven spending**, establish **why paying
> customers remain dissatisfied**, identify a **structural** reason incumbents
> cannot fix it, and specify an implementation whose advantage can be
> **measured**.

Blockchain, government, Indonesia and AI are candidate *domains*, not the
objective.

## Unit of analysis

An **existing product people pay for** — not a problem, not an industry. Every
candidate starts from a named incumbent with an observed price.

## Scoring (two independent axes, never summed)

**Demand Proof (0–10)** — 0: nobody buying. 3: niche buying. 7: multiple
healthy vendors with published prices. 10: large, documented, recurring spend.

**Displacement Opportunity** — assessed only for candidates with Demand
Proof ≥ 5. Scored on whether the dissatisfaction has a **structural** cause:

- priced for enterprise, cannot profitably serve the small end
- architecture makes the missing capability slow or expensive to add
- support, language or region gap the incumbent won't staff
- incentives favour existing large customers over a new use case
- complexity is the *price* of serving very large organisations
- technical debt or a business-model constraint (licensing, usage pricing)

## Kill tests (any failure eliminates)

1. **Fixable-in-six-months.** If the incumbent could ship this as a feature in
   two quarters, it is a feature gap, not a displacement. **Kill.**
2. **Single-buyer.** One organisation must be able to buy it, deploy it, and
   benefit from it *alone*. Anything requiring two organisations to cooperate
   has no budget owner. (Derived from Programs A and B: nearly every candidate
   that died was a network, registry, or interop play.) **Kill if it needs a
   network.**
3. **Solo-buildable wedge.** One engineer ships a credible v1 in ~3 months.
   **Kill if it needs a team to be credible at all.**
4. **Evidenced complaint.** At least one *paying customer* complaint from a
   review site, forum, migration post, or public thread. **GitHub issues alone
   do not count** — public code artefacts are a biased sample of practice, and
   most software that is actually used is private.

## Evidence rules

Named source and date for every price, complaint and claim, else
"(unverified)". Preferred evidence, in order: published pricing pages; review
platforms (G2, Capterra, TrustRadius); "why we migrated off X" engineering
posts; support forums and feature-request boards; practitioner threads. Several
sources repeating one claim count as one.

## Founder advantages this program may legitimately price in

- **Price floor.** Derived bars are $6k / $15k / $60k per year
  (`BAR-SENSITIVITY-NOTE.md`). A customer worth $500/year is unprofitable for a
  vendor with a sales team and fine for a solo operator. This is a structural
  advantage, not a consolation.
- **Locale.** Indonesian language, regulation and integrations are too small a
  market for a global vendor to staff and large enough for one person.
- **Distribution.** One named channel relationship into Indonesian government
  and enterprise buyers (`CONTEXT.md`, channel-partner rule still applies).

## Output

Not a rejection matrix. A ranked set of **displacement hypotheses**, each with:
incumbent and observed price; cited customer complaints; the structural root
cause; why the incumbent cannot fix it; the architectural change that would;
the segment served first; and a **pre-registered benchmark** — what is measured,
against which baseline, and what result would count as failure.

Then one is built.
