# Buyer Interview Guide

**Purpose: falsify desk research, not validate an idea.** Programs A and B
both name the same largest gap — no customer interviews. The corpus knows
regulations, products, prices and incumbents. It knows nothing about *how a
buyer actually decides*. These conversations exist to attack specific
written assumptions, not to find enthusiasm.

Not pre-registered, not governed by a protocol, and it amends nothing.
Twenty conversations, roughly, over the remaining full-time window.

---

## The rule

**Do not pitch. Do not describe a product.** The moment you describe a
solution, the interview stops producing evidence and starts producing
politeness. Ask what they did last time, not what they would do.

If asked what you're building: *"Nothing yet — I'm researching how
[credential checks / fraud losses / claims disputes] actually work before I
decide whether to build anything."* That is true, and it keeps the data
clean.

## Who to talk to

**Group 1 — buyers in the two best-evidenced pain areas** (~10 people).
These are where the corpus has real documented losses and at least one real
price, so being wrong is most detectable:

- Private hospital HR / credentialing staff, and the medical committee
  member who signs off (`credential-holder-identity-binding`; MedTrack sells
  here at Rp250–350k/month, so budget exists).
- BPR / BPD internal audit and compliance heads (`bpr-insider-fraud-continuous-audit`;
  SI-INSAF Rp2.6M per bank via Perbarindo, SAF-GEN Rp6.9–9.9M/month).

**Group 2 — the sales-motion reality check** (~5 people). Anyone who sells
software into Indonesian regulated buyers. Your friend who sells SaaS to
government and similar entities is the single highest-value conversation in
this entire document — see "The G6 question" below.

**Group 3 — one or two people who tried and stopped.** Founders or product
managers from any incumbent named in the corpus. What they learned from
failing is worth more than what a happy customer says.

## What to attack

Five written assumptions, each with the question that tests it. Every one
was inferred from desk sources and could be wrong.

**A1 — The pain is real and owned.** *Corpus says:* documented fraud,
dedicated staff, real losses.
Ask: "Walk me through the last time a [fake credential / insider fraud /
disputed claim] actually happened here. What did you do that week? Who found
it?" — If nobody can recall an instance, severity scoring across the corpus
is too high.

**A2 — Someone owns a budget line.** *Corpus says:* named budget owners
already pay for inferior alternatives.
Ask: "What do you currently spend on this — software, staff time, an
external auditor? Who signs that off?" — Then: "When did that budget last
change, and why?"

**A3 — The free state substitute is actually used.** *This is the assumption
most likely to be wrong, and it kills the most candidates.* The corpus
concluded that free state tools (SATUSEHAT, VIBI, Berbagi Akses, SIVIL,
automatic PKKPR) close the gap.
Ask: "Do you use [the state system]? For what, exactly? What do you still do
manually or outside it?" — If regulated buyers describe state tools as
unusable, incomplete, or ignored in practice, then a whole class of K3
absorption kills was wrong on the ground while being right on paper. **This
is the single most valuable question in this guide.**

**A4 — Price level.** *Corpus says:* observed prices are an order of
magnitude below bootstrap economics.
Ask: "If something removed this problem entirely, what would that be worth
per year to you?" — then shut up. Do not suggest a number.

**A5 — Sales motion (G6).** *Corpus says:* every ACV large enough is gated
behind procurement and security review, which a solo founder cannot run.
Ask: "How did you buy the last new software tool? How long did it take, who
had to approve it, and was there a security or vendor review?" — If small
tools genuinely get bought on a card by a department head, G6 is less
binding than the corpus assumes.

## The G6 question

After 86 candidates and nine geography memos, **G6 — product-led adoption
only, no enterprise sales motion — is the constraint that binds.** State it
precisely, because the precise version is the stronger claim: G6 does not
kill companies, it *defines the set of companies this search ran over*.
Programs A and B did not show that enterprise integrity software is not
worth building. They showed that **among companies compatible with this
founder model, none was found.** The geography test sharpened it further —
richer markets did not relieve G6, they tightened it.

G6 is a choice, not a fact about the world. It was pre-committed for good
reasons (solo, employment alongside, side-project survivability). Knowing it
is the binding term is what makes the next conversation worth having.

So one conversation matters more than the other nineteen. With the
SaaS-selling friend, establish:

1. Who exactly do they sell to — which agency, institution or company type,
   by name, not "government"?
2. What is a real closed contract size and how long did it take?
3. What did the buyer require — PT, NIB, e-katalog listing, security review,
   references, prior deployments?
4. What was actually paid, and how many months after signature?
5. Would they carry a product they did not build, and on what split?

Under the channel-partner rule (`CONTEXT.md`, 2026-07-29), this only ever
counts if the friend already sells to a candidate's *specific* buyer type,
with dependencies logged first. But the answers change which constraint is
binding — and that is worth knowing before deciding this search is over.

## A6 — the last question, and possibly the best one

End every interview in Group 1 with this, exactly as written:

> **"What software did you buy last year that surprised you?"**

Not "what integrity software." Not "what fraud tools." Just what they
bought. This is a **budget-first search run inside a problem-first
interview** — and budget-first is the direction both frozen conclusions name
as the most promising unexplored one.

If several buyers independently name something that appears nowhere in 86
candidate files, that is worth more than confirming any assumption above:
it means the sourcing process systematically missed a whole spending
category. Record the answer verbatim, even when it sounds irrelevant.
*Especially* when it sounds irrelevant.

## What would count as a surprise

Write these down before starting, so hindsight cannot rewrite them. Any one
of these is a real result:

- Buyers describe the free state substitute as unusable in practice (A3).
- A buyer names a number for A4 more than 5× the corpus's observed prices.
- Small tools are routinely bought without procurement or security review
  (A5) — G6 is looser than assumed.
- Someone volunteers a pain, unprompted, that appears nowhere in 86
  candidate files. **Look hard for this one**: both programs sourced
  problem-first, and the corpus's own recommendation is that a
  *budget-first* search — start from what buyers already pay for, then find
  the integrity slice — is the more promising unexplored direction.
- Two or more buyers give the same A6 answer, and it is absent from the
  corpus. That is the budget-first signal arriving unprompted.

## After the interviews

Write up what was heard within 24 hours of each conversation, before it
blurs. Then one honest page: which of A1–A5 survived, which broke, and
whether anything heard would have changed a kill-test verdict in the frozen
matrices.

If nothing broke, the frozen conclusions stand and this search is genuinely
finished. If A3 or A5 broke, that is grounds to open a new versioned
program — with a pre-registered protocol, per `PROGRAM-B-CONCLUSION.md` §10.
Not to reopen A or B.
