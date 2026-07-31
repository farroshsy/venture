# Brief for a separate Claude Code agent — blockchain infrastructure portfolio project

Paste this into a **fresh Claude Code session in a new empty directory.** It
needs its own context window. Do not run it in the `rota` repo.

---

## Who you are working for

Farros Hilmi Syafei. Solo engineer, Surabaya, Indonesia. ITS Informatics,
graduating ~September 2026, will hold a salaried job alongside this. Shipped
work: an event-sourced adaptive tutoring system with bit-identical
deterministic replay benchmarked against BKT/DKT/SAKT; a stateless Indonesian
document verification API; a pre-registered Polymarket calibration study; and
a verification pass that found a real defect in a reference dataset every
Indonesian library copies.

The through-line is **correctness in event-driven systems** — determinism,
replay, verification, benchmarking. Rust and Go are fair game; he will learn
what the project needs.

## What this project is, and is not

He runs **two products with two different objective functions.** Do not merge
them.

- **The business** is `rota`, a self-hosted flat-fee on-call tool. It optimises
  for paying customers. It is not your concern and must not be referenced.
- **This project** optimises for **demonstrated engineering capability** to
  blockchain infrastructure teams — protocol teams, L2s, indexers, node
  providers, custody, MEV, and the portfolio companies of funds like Hashed.
  Revenue is explicitly **not** a success criterion. Adoption is a bonus, not
  the goal.

Success looks like: an engineer at a protocol team stars it, opens an issue
because they depend on it, or asks in an interview *"why did you design it
this way?"* Failure looks like a technically pretty repo that no practitioner
would recognise as addressing a real operational problem.

## Hard rules, learned expensively

Three prior research programs screened 121 candidates and produced two frozen
negative results. These rules are the residue. Violating them repeats months
of work.

1. **Never start from his capabilities.** The single most repeated failure in
   this project was: *"he is good at deterministic replay, therefore build a
   replay tool."* That reasoning is unfalsifiable — every domain contains
   something unmeasured — and it produced four dead proposals. Start from a
   documented operational problem that someone actually has. Map to his
   strengths only *after* the problem is established, and say plainly when the
   mapping is weak.

2. **Public evidence is biased.** Most software that is actually used is
   private, and deals happen through relationships. GitHub issue counts are a
   sample of what people rebuild *in public*, not what they rebuild. Weight
   engineering blogs, postmortems, incident writeups, job postings, conference
   talks and practitioner threads above issue counts. Say "(unverified)" when
   you cannot source something.

3. **Apply these kill tests. Any failure eliminates.**
   - **K1 — fixable in six months?** If the incumbent, an upstream maintainer,
     or a foundation could ship this as a feature in two quarters, it is a
     feature gap, not a project. Demand a reason why fixing it is *against
     their interest* or structurally hard, not merely unprioritised.
   - **K2 — single beneficiary.** One team must get value alone, without
     needing a second organisation to adopt anything. Standards efforts and
     interchange formats die here; three years of prior attempts in this space
     died exactly there.
   - **K3 — solo-buildable.** One engineer ships something credible in ~3
     months and can maintain it part-time for years. Anything needing a team,
     sustained paid multi-provider archive access, or significant capex is out.
   - **K4 — real practitioner pain, evidenced.** At least one named, dated
     source of someone who operates this in production describing the problem.
     Not a vendor blog. Not your inference.

4. **The blockchain-necessity test, run in both directions.**
   - *"If blockchain disappeared tomorrow, would this project still make
     sense?"* If **yes**, it is not a blockchain project — it is a general
     tool, and it belongs in the other product.
   - Then: *"Who specifically benefits because this is blockchain-native?"*
     You must be able to name a concrete operator — a validator operator, a
     rollup sequencer team, a bridge operator, a relayer, an oracle node
     runner — not "the ecosystem."

## Already eliminated — do not re-propose

A prior scout examined 25 blockchain infrastructure components. Rejected, with
reasons that still hold as of July 2026:

- **Saturated:** multi-upstream RPC gateways (eRPC, dRPC, proxyd, PATH — you
  would be entrant #11); wallet/key/account-abstraction infra (Privy, Turnkey,
  Dynamic, Safe, Pimlico, ZeroDev, Fireblocks).
- **Report, not a tool:** indexer conformance suites, cross-engine benchmark
  suites. Nobody installs a report.
- **Needs vendor adoption (K2):** cross-fuzzer corpus interchange formats.
- **Capex-bound (K3):** cross-provider RPC correctness auditing, archive-node
  cost work, anything needing recurring paid multi-provider access.
- **Upstream is shipping it (K1):** fork-cache reproducibility — Foundry ships
  caching free as the CI default. A related idea, `forkprint` (offline
  state-root-verifiable fork fixtures), was specced and then killed; its
  evidence was two GitHub issues and one blog post, which fails K4.
- **Weak demand for the adjacent product:** independent verification of indexed
  on-chain data. The structural argument is the strongest anyone found — the
  product's output measures the vendor's own error rate, so shipping it invites
  liability — but **nobody sells verification at any price.** Demand for
  indexing is not demand for indexing-verification. Treat this as a cautionary
  pattern, not an opportunity.

## One hypothesis worth testing, not assuming

Protocol operators run infrastructure and have on-call problems that generic
tools serve badly: missed block proposals, sequencer stalls, bridge liveness,
relayer failures, oracle heartbeat gaps, validator slashing risk. The operator
is a single team (K2 passes), the pain is operational and dated, and the domain
knowledge is not general SRE knowledge.

**Test it, do not assume it.** Two honest objections you must address:
integration work is shallow engineering and makes a weak portfolio piece; and
several monitoring vendors already serve this. If your investigation says the
hard part is genuinely hard — consensus-aware state, correct liveness
detection under reorgs, distinguishing "the chain is slow" from "our node is
broken" — say so with evidence. If it says the hard part is writing API
clients, kill it and look elsewhere.

## What to produce

1. **Two weeks of investigation, maximum, then stop.** Prior programs
   overspent on desk research; the failure mode is researching forever.
2. A short findings document: candidates examined, K1–K4 verdicts, and the
   evidence behind each — sources named and dated.
3. **One selected project**, with: the operational problem in one sentence; who
   has it, by name; why existing tools fail them; the architecture; the *hard*
   engineering problem at its centre; and a **pre-registered benchmark** —
   what is measured, against which baseline, and what result counts as failure,
   written down before implementation.
4. **Then build it.** Working, tested code beats another document. The user has
   said this repeatedly and is right. Ship a v0 that a practitioner could run,
   not a scaffold.

## Standing evidence rules

No number without a named source and year, else mark it "(unverified)".
Several secondary sources repeating one figure count as one source. Check the
competitive state at the time you recommend, not from memory — this space moves
in months. Report what would kill the idea, not only what would make it work.
When you are wrong, say so plainly and continue.
