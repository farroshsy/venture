# BUILD-SPEC — `forkprint`

Written 2026-07-30. Builder: Farros Hilmi Syafei, solo, part-time from ~Sep 2026.

**Up front, adversarially:** this is a narrow tool, not a platform. Most categories in the
evidence set are contested or saturated, and the two that are genuinely open and match this
builder both live in test infrastructure. Building a platform here would fail. Building one
excellent, provable, small thing will not.

---

## The pick

**`forkprint` — content-addressed, state-root-verifiable fork fixtures for EVM tests.**

> `forkprint` is the only tool that *proves* a forked-mainnet test fixture is complete and
> honest: every account and storage slot in a bundle is verified against the pinned block's
> `stateRoot` offline, with no RPC, no API key, and no trust in whoever recorded it.

Existing caches make fork tests *faster*. `forkprint` makes them *checkable* — the fixture
either proves itself against consensus state or refuses to load.

---

## Evidence it is repeatedly rebuilt

Verified 2026-07-30:

- **foundry-rs/foundry #7728** "support offline forks in `vm.createFork`" — filed 2024-04-19,
  **still open, no linked PR** (fetched 2026-07-30).
- **foundry-rs/foundry #9721** "fully offline mode for anvil fork" — filed 2025-01-20, **still
  open**, though its project board is marked *Done*. Honest read: partial `--load-state`
  offline support may exist or be in flight. This weakens the "offline" half of the claim and
  is why the defensible core is *verification*, not offline-ness.

From the supplied evidence, **not independently re-verified**:

- Coinspect, "The RPC Bottleneck in EVM Security Learning" (updated 2026-02-17): built a
  committed `rpc_cache/` plus a Node.js mock RPC proxy because tests "would break when
  providers rate-limited requests, deprecated endpoints, or when free-tier quotas ran out."
  One fully documented in-house rebuild.
- foundry #15897 / #15896 (2026-07-27, open): fork cache keyed by **block number, not hash**,
  so reorged ancestry mixes into one cache directory.
- DeFiHackLabs: ~842 PoCs requiring live archive RPC.
- Foundry's own per-machine, unversioned `~/.foundry/cache/rpc`; Ponder's `ponder_sync` cache.

**The evidence is real but thin on count.** One detailed public rebuild (Coinspect), two
long-open upstream requests, one large dependent corpus. This is *not* "everyone rebuilds
this." It is "the need is documented, upstream has not shipped it in 2.5 years, and the
verification layer has never been attempted by anyone."

---

## Competitive landscape, July 2026

| Tool | Does well | Does not |
|---|---|---|
| Foundry `--fork-url` + `~/.foundry/cache/rpc` | Fast warm reruns; ubiquitous | Per-machine, unversioned, not git-committable, keyed by block *number*, still phones the endpoint on a miss |
| `foundry-fork-db` | Clean cache seam; reusable via alloy | No content addressing, no completeness proof, no offline guarantee |
| `anvil --load-state` / `--dump-state` | Full-state snapshots | Whole-state dumps, not witnesses; unverifiable blob; no provenance to a block |
| Hardhat 3 / EDR forking | Good DX | Requires a live endpoint per run |
| Tenderly Virtual TestNets | Genuinely pins forked state | Hosted, paid, closed — dies with the vendor |
| VCR-style HTTP recorders | Generic replay | Chain-unaware: no block pinning, no reorg semantics, no method canonicalization |

**The specific gap:** no tool produces a fixture that a third party can *verify* is a faithful,
complete witness of a named block's state. Every option above is a trust-me blob. `eth_getProof`
(EIP-1186) makes verification trivially possible and nobody does it.

Yes, the gap is narrow. State that plainly rather than inflating it.

---

## Why this builder specifically

Direct, not strained:

- **Bit-identical deterministic replay** is the shipped signature and is here the literal
  success criterion — same bundle, same forge version, byte-identical trace and gas across
  machines and years.
- **Event sourcing**: a fixture bundle *is* an immutable, content-addressed log of the state a
  run consumed; `serve` is the replay engine over it.
- **Benchmarking rigor + pre-registration**: the headline claim ("committed fixtures survive
  where live RPC and warm caches do not") is only worth anything if the falsifier is declared
  first. That is his standing practice.
- **Found a defect in a widely-copied reference dataset**: the same instinct — `verify` exists
  to find *incomplete or dishonest fixtures*, including his own.

Weak spot, stated: Rust + MPT proof verification is new ground. Budget ~3 weeks of the 12 for
`alloy-trie` and revm internals.

---

## Architecture sketch

Rust; `alloy` (RPC + types), `alloy-trie` (MPT proofs), `revm` only for the optional executor.

```
forkprint record --upstream <ARCHIVE_RPC> --block <HASH|NUMBER> --out foo.forkprint
    Local JSON-RPC proxy on 127.0.0.1. Point any tool at it:
      forge test --fork-url http://127.0.0.1:8545
    Forwards upstream, records the witness, pins every block tag to a block HASH.
    On exit, fetches eth_getProof for each touched account+slot and writes the bundle.

forkprint verify foo.forkprint            # OFFLINE. The differentiator.
    - recompute keccak(code) == codeHash for every account
    - verify each account proof against manifest.stateRoot
    - verify each storage proof against that account's storageRoot
    - walk headers by parentHash to the pinned block (BLOCKHASH ancestry)
    - nonzero exit naming the first unproven key

forkprint serve foo.forkprint --port 8545 # OFFLINE archive-node subset
    eth_chainId|blockNumber|getBalance|getCode|getStorageAt|getTransactionCount
    |getProof|getBlockByNumber|getBlockByHash
    Miss => hard error naming the missing (address, slot). Never a silent network call.

forkprint replay -- forge test -vvvv      # serve + egress default-deny + trace hash
forkprint replay --expect <traceHash>     # the CI assertion
forkprint diff a.forkprint b.forkprint    # localize divergence to an account/slot
```

**Bundle layout** (content-addressed; bundle id = hash of `manifest`):

```
manifest.json   chainId, blockHash, blockNumber, stateRoot, toolVersion, bundleRoot
accounts/       addr -> {nonce, balance, codeHash, storageRoot} + account proof
storage/        (addr, slot) -> value + storage proof
code/           codeHash -> bytecode          # dedupes across every bundle
headers/        RLP headers, parentHash-chained to the pinned block
```

`code/` keyed by `codeHash` is the compounding asset: most DeFi fixtures share the same WETH,
USDC, and Uniswap bytecode, so the marginal bundle is kilobytes once a corpus exists.

No upstream buy-in required — it is a proxy, so forge, anvil, Hardhat 3, ape, and viem test
clients all work today.

---

## The measurable claim (pre-registered before writing code)

Corpus: **60 PoCs sampled from DeFiHackLabs**, sampling rule and RNG seed committed to git
*before* any run. Baselines: **B1** live archive RPC; **B2** warm `~/.foundry/cache/rpc`;
**B3** `anvil --dump-state`/`--load-state`.

| ID | Metric | Pass | Failure |
|---|---|---|---|
| M1 | Offline replay rate with egress blocked, identical pass/fail vs B1 | ≥95% | <80% |
| M2 | Byte-identical `forge test --json` trace + total gas across 3 machines (macOS arm64, Linux x86_64, Linux arm64) × 3 runs, pinned forge version | 100% | any undeclared mismatch |
| M3 | Same bundles across forge releases spanning ≥6 months | *report drift, claim nothing* | — |
| M4 | Bundles passing `verify` against pinned `stateRoot` | 100% | any unprovable witness |
| M5 | Median bundle size / record time vs B1, B2 | <5 MB; replay ≥5× faster than cold B1 | not a headline |
| **M6** | **Of the 60, how many fail on B1/B2 *today*** (rate limits, dead endpoints, expired keys, block-number keying) | **≥15** | **≤3 ⇒ premise is weak; publish that** |

M6 is the falsifier. If live RPC and the warm cache just work, the project has no reason to
exist and the write-up must say so.

---

## Milestone 1 (~3 months, part-time)

Ships: `record` / `verify` / `serve` / `replay`; the bundle format spec v0.1; the 60-fixture
published corpus; the pre-registration doc committed with a timestamp **before** any result.

What makes an infra engineer take it seriously, specifically:
1. `forkprint verify` **rejecting an incomplete bundle** — demonstrated in the README on a
   deliberately truncated fixture. Nothing else in the ecosystem can do that.
2. Pre-registration timestamped before results, results published including M6 if it fails.
3. Works against unmodified `forge` with one flag change.

Explicitly *not* in M1: registry, L2 semantics, mutation-robust witness capture, GUI.

---

## Years 1–3 (compounds, no rewrite)

- **Y1** — L2/alt-EVM semantics (Arbitrum `block.number`, OP L1-fee fields); Hardhat 3/EDR and
  ape adapters; one bundle added per new DeFiHackLabs PoC. Maintenance *is* corpus growth.
- **Y2** — content-addressed bundle registry with `codeHash` dedup; `forkprint pull <id>`;
  witness completeness under code mutation (over-approximate the touched closure so an edited
  test still replays offline).
- **Y3** — differential execution: same verified bundle through revm vs geth vs reth,
  byte-compare state root and gas. A verified witness is exactly the input a cross-client
  divergence harness needs — the natural expansion, reached by addition, not rewrite.

The format is the durable artifact; everything else is additive.

---

## What would kill this

1. **Foundry ships it.** #9721's board already reads *Done*. If `foundry-fork-db` gains content
   addressing plus true offline, `forkprint` shrinks to `verify` alone. "We do Merkle proofs"
   is a thin moat. This is the single largest risk and it is not small.
2. **`eth_getProof` at historical blocks is not reliably served.** Many affordable archive
   providers restrict or omit it. If proofs cannot be obtained for most of the corpus, M4
   collapses and the tool degrades to "a nicer cache" — much less interesting. **Test this in
   week 1, before committing 12 weeks.**
3. **Nobody adopts.** RPC keys are cheap; `--fork-block-number` plus a warm cache is good
   enough; security researchers tolerate flaky tests. M6 is the honest early read on this.
4. **Determinism turns out not to matter.** If forge changes trace formatting or gas accounting
   each release, "bit-identical across years" is unachievable through no fault of the fixture,
   and the claim must retreat to "identical across machines at a pinned forge version" — true,
   useful, far less quotable.

---

## Rejected alternatives

- **Deterministic fuzzing campaign replay** — best determinism fit in the set, but the
  deliverable is rewriting a fuzzer's multi-worker scheduler in Haskell/Go, and shipping
  credibly solo in 3 months is not realistic. *Strong runner-up; revisit in Y2.*
- **Cross-version differential replay / POI divergence (graph-node)** — real 2026 evidence, but
  requires running multiple graph-node versions on real infra; graphix's dormancy signals thin
  demand, and The Graph's indexer audience is shrinking.
- **Cross-fuzzer corpus interchange format** — open and determinism-perfect, but success needs
  three vendors to adopt a format; three years of prior attempts died exactly there.
- **Neutral indexer conformance/benchmark suite** — good method fit, but it is a report, not a
  tool engineers install; heavy per-engine infra cost.
- **Cross-engine indexer conformance** — same problem, plus semantic-equivalence definitions
  across incompatible data models is a research project.
- **Index-to-chain reconciliation** — no canonical ground truth for derived aggregates; the
  hard part is protocol-specific, so it never generalizes.
- **Reorg simulation / rollback conformance harness** — good, contested; every framework ships
  reorg logic, and deep-fork synthesis needs chain infrastructure a solo builder cannot fund.
- **Sync-cache cold-vs-warm equivalence** — same invariant as the pick but requires cheap full
  reindexes as an oracle; cost dominates.
- **Completeness/liveness invariants for indexers** — determinism is only medium; the hard part
  is an independent oracle, i.e. data access, not replay.
- **Multi-upstream RPC gateway** — saturated; eRPC, dRPC, proxyd, PATH. Gateway #11.
- **Cross-provider RPC correctness audit** — genuinely open and great method fit, but recurring
  paid multi-provider access is a cost the builder cannot sustain; it is a monitor, not an
  install.
- **Cross-client RPC divergence detection** — same cost problem; EF already owns this turf.
  Reachable later via `forkprint` Y3.
- **Transaction simulation fidelity** — needs archive replay at scale; measurement-only output.
- **Archive node cost / data availability** — capex and storage engineering; disqualifying.
- **Cross-client EVM differential fuzzing** — EF/client-team territory; weakest rebuild signal.
- **ERC-4337 gas-estimation conformance** — good defect class, but 4337 momentum is moving to
  EIP-7702; shrinking audience.
- **Clear-signing / calldata rendering conformance** — contested, three competing standards, EF
  working group with 8 orgs already in it.
- **Backend transaction manager / relayer** — contested; OZ's Rust relayer is the incumbent and
  building #5 is not a portfolio win.
- **Offchain policy engine, TEE attestation verification** — saturated by funded custodians;
  neutral-monitor slice has a tiny audience.
