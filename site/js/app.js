import {
  el, badge, pageHeader, statCard, protocolBanner, hashBlock,
  callout, tabs, renderMarkdown, matrixTable, eliminationBars, auditSequence,
} from "./components.js";

let corpus = null;
let docCache = {};

const NAV = [
  { group: "Overview", links: [
    { path: "/", label: "Home" },
    { path: "/search", label: "Search" },
  ]},
  { group: "Research Programs", links: [
    { path: "/programs/a", label: "Program A" },
    { path: "/programs/b", label: "Program B" },
    { path: "/programs/c", label: "Program C" },
  ]},
  { group: "Search Space", links: [
    { path: "/candidates", label: "Candidate Explorer" },
    { path: "/industries", label: "Industries" },
    { path: "/axes", label: "Structural Axes" },
    { path: "/geography", label: "Geography Tests" },
  ]},
  { group: "Method", links: [
    { path: "/protocols", label: "Protocols" },
    { path: "/matrices", label: "Matrices" },
    { path: "/elimination", label: "Elimination" },
    { path: "/crosscut", label: "Trust Failures" },
  ]},
  { group: "Verification", links: [
    { path: "/verification", label: "Adversarial Memos" },
    { path: "/audit", label: "Calibration Audit" },
  ]},
  { group: "Findings", links: [
    { path: "/findings", label: "Conclusions" },
  ]},
  { group: "Evidence", links: [
    { path: "/integrity", label: "Integrity & Hashes" },
    { path: "/documents", label: "Document Index" },
  ]},
  { group: "Appendix", links: [
    { path: "/doc/research/INTERVIEW-GUIDE.md", label: "Interview Guide" },
    { path: "/doc/research/BLOCKCHAIN-AGENT-BRIEF.md", label: "Agent Brief" },
    { path: "/doc/CONTEXT.md", label: "Decision Log" },
  ]},
];

async function loadCorpus() {
  if (corpus) return corpus;
  const res = await fetch("data/corpus.json");
  corpus = await res.json();
  return corpus;
}

async function loadDocument(slug) {
  if (docCache[slug]) return docCache[slug];
  const res = await fetch(`data/documents/${slug}.json`);
  docCache[slug] = await res.json();
  return docCache[slug];
}

function navigate(path) {
  history.pushState({}, "", `#${path}`);
  render();
}

function currentPath() {
  return location.hash.slice(1) || "/";
}

function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  const path = currentPath();
  sidebar.replaceChildren(
    el("div", { className: "sidebar-brand" },
      el("h1", {}, "Trust Infrastructure Research"),
      el("p", {}, "Indonesia · July 2026 · Pre-registered")
    ),
    ...NAV.map(g => el("div", { className: "nav-group" },
      el("div", { className: "nav-group-title" }, g.group),
      ...g.links.map(l => el("a", {
        href: `#${l.path}`,
        className: `nav-link${path === l.path || path.startsWith(l.path + "/") ? " active" : ""}`,
        onClick: (e) => { e.preventDefault(); navigate(l.path); },
      }, l.label))
    ))
  );
}

function processChain() {
  const steps = ["Question", "Protocol", "Search", "Candidates", "Scoring", "Kill Tests", "Adversarial Verification", "Audit", "Conclusion"];
  return el("div", { className: "process-chain" },
    ...steps.flatMap((s, i) => i === 0 ? [el("span", { className: "process-step" }, s)] : [el("span", { className: "process-arrow" }, "↓"), el("span", { className: "process-step" }, s)])
  );
}

function viewHome() {
  const s = corpus.stats;
  return el("div", {},
    pageHeader(corpus.question, "A pre-registered, adversarially-verified screen of 86 candidate opportunities across two research programs. Both returned empty. This publication makes the research process, evidence, and elimination mechanisms explorable."),
    processChain(),
    el("div", { className: "outcome-flow" },
      el("div", { className: "numbers" }, `${s.totalCandidates} candidates investigated`),
      el("div", { className: "arrow" }, "↓"),
      el("div", { className: "result" }, `${s.survivors} qualifying opportunities found`)
    ),
    el("div", { className: "stats-grid" },
      statCard("Program A", "56", `Max score ${s.programAMaxScore} / ${s.scoreBar}`),
      statCard("Program B", "30", `Max score ${s.programBMaxScore} / ${s.scoreBar}`),
      statCard("Survivors", "0", "Under fixed protocols"),
      statCard("Adversarial memos", `${s.adversarialRefuted}/${s.adversarialMemos}`, "All refuted"),
      statCard("Geography tests", String(s.geographyTests), "Appendix to Program B"),
      statCard("Research date", s.researchDate, "Desk research")
    ),
    callout("The finding is not that no such business exists globally. Among companies compatible with a solo founder model (product-led, remote, no enterprise sales), no qualifying opportunity was found under these protocols."),
    el("h2", {}, "Major elimination mechanisms"),
    el("div", { className: "card" }, el("p", {}, "1. Accepted anchor occupies the slot — usually the state (SIMBARA, SIHALAL, Dukcapil, BPN, KSEI). 2. Where no anchor exists, economics, authority, custodian data access, or oracle problems bind. 3. Prices exist but are too low against buyer pools too small.")),
    el("h2", {}, "Reading path"),
    el("ul", {},
      el("li", {}, el("a", { href: "#/programs/a", onClick: (e) => { e.preventDefault(); navigate("/programs/a"); } }, "Program A conclusion")),
      el("li", {}, el("a", { href: "#/programs/b", onClick: (e) => { e.preventDefault(); navigate("/programs/b"); } }, "Program B conclusion")),
      el("li", {}, el("a", { href: "#/audit", onClick: (e) => { e.preventDefault(); navigate("/audit"); } }, "Calibration self-audit")),
      el("li", {}, el("a", { href: "#/geography", onClick: (e) => { e.preventDefault(); navigate("/geography"); } }, "Geography appendix"))
    )
  );
}

function viewProgram(id) {
  const prog = corpus.programs.find(p => p.id === id.toUpperCase());
  if (!prog) return el("p", {}, "Program not found");

  const frag = el("div", {},
    pageHeader(prog.name, prog.question),
    el("div", { className: "meta-row" },
      badge(prog.status, prog.status.includes("FROZEN") ? "frozen" : "program-c"),
      badge(`${prog.candidates || prog.candidatesIn} candidates`, `program-${id}`)
    )
  );

  if (id === "a") {
    frag.append(
      protocolBanner({ status: "FROZEN", date: "2026-07-29" }),
      el("h2", {}, "Phases"),
      el("ul", {},
        el("li", {}, "Phase 1: 30 industries — 0 survivors, max 6.6 raw"),
        el("li", {}, "Phase 1.5: 26 structural-axis candidates — 0 survivors, max 5.8"),
        el("li", {}, "H1 unsupported at venture scale in Indonesia")
      ),
      el("h2", {}, "Artifacts"),
      el("ul", {},
        ...["research/RUBRIC.md", "research/PHASE15-PROTOCOL.md", "research/PHASE1-MATRIX.md", "research/PHASE15-MATRIX.md", "research/PROGRAM-A-CONCLUSION.md"].map(p =>
          el("li", {}, el("a", { href: `#/doc/${p}`, onClick: (e) => { e.preventDefault(); navigate(`/doc/${p}`); } }, p))
        )
      ),
      el("p", {}, el("a", { href: "#/matrices", onClick: (e) => { e.preventDefault(); navigate("/matrices"); } }, "View interactive matrices →"))
    );
  } else if (id === "b") {
    frag.append(
      protocolBanner({ status: "FROZEN", date: "2026-07-29", hash: "e2951a71…a4c6" }),
      el("h2", {}, "Method"),
      el("p", {}, "Scope Test → Matrix → Bootstrap Bar (≥$1M ARR) → Kill tests K1–K4 → 7.0 bar. Architecture unconstrained."),
      el("h2", {}, "Results"),
      el("ul", {},
        el("li", {}, "30/30 eliminated"),
        el("li", {}, "9 passed all kill tests, died on score bar"),
        el("li", {}, "6/6 adversarial memos refuted"),
        el("li", {}, "Calibration audit found scoring defect; conclusion held after correction")
      ),
      el("p", {}, el("a", { href: "#/audit", onClick: (e) => { e.preventDefault(); navigate("/audit"); } }, "View calibration audit →"))
    );
  } else {
    frag.append(
      callout("Program C is a budget-first displacement search — different methodology from Programs A and B. It does not reopen the frozen conclusions."),
      el("h2", {}, "Approach"),
      el("p", {}, "Find software categories with proven spending; identify structural reasons incumbents cannot fix customer dissatisfaction."),
      el("h2", {}, "Results"),
      el("ul", {},
        el("li", {}, "35 candidates in; 24 killed on kill tests"),
        el("li", {}, "11 survived K1–K4, consolidated to 8 ranked hypotheses"),
        el("li", {}, "Bars: $6k / $15k / $60k ARR (not the $1M bootstrap bar)")
      ),
      el("p", {}, el("a", { href: "#/doc/research/PROGRAM-C-FINDINGS.md", onClick: (e) => { e.preventDefault(); navigate("/doc/research/PROGRAM-C-FINDINGS.md"); } }, "Read full findings →"))
    );
  }
  return frag;
}

function viewCandidates(filter = {}) {
  let list = [...corpus.candidates];
  const { program = "", category = "", q = "" } = filter;

  if (program) list = list.filter(c => c.program === program);
  if (category) list = list.filter(c => c.category === category);
  if (q) {
    const ql = q.toLowerCase();
    list = list.filter(c => [c.name, c.slug, c.mechanism, c.killReason].some(v => String(v || "").toLowerCase().includes(ql)));
  }

  const container = el("div", {},
    pageHeader("Candidate Explorer", `${list.length} of ${corpus.candidates.length} candidates. Every elimination reasoned; every optimistic claim tested where triggers fired.`),
    el("div", { className: "filters" },
      el("input", { type: "search", placeholder: "Search candidates...", value: q, onInput: (e) => navigate(`/candidates?q=${encodeURIComponent(e.target.value)}`) }),
      el("select", { onChange: (e) => navigate(`/candidates?program=${e.target.value}&category=${category}&q=${q}`) },
        el("option", { value: "" }, "All programs"),
        el("option", { value: "A", selected: program === "A" }, "Program A"),
        el("option", { value: "B", selected: program === "B" }, "Program B")
      ),
      el("select", { onChange: (e) => navigate(`/candidates?program=${program}&category=${e.target.value}&q=${q}`) },
        el("option", { value: "" }, "All categories"),
        el("option", { value: "industry", selected: category === "industry" }, "Industries"),
        el("option", { value: "axis", selected: category === "axis" }, "Axes"),
        el("option", { value: "candidate", selected: category === "candidate" }, "Program B candidates")
      )
    ),
    matrixTable(list.map(c => ({
      name: c.name || c.slug,
      slug: c.slug,
      program: c.program,
      category: c.category,
      score: c.matrixScore ?? "—",
      verdict: c.matrixVerdict || (c.killTests ? (c.killTests.k1 === "P" && c.killTests.k2 === "P" && c.killTests.k3 === "P" && c.killTests.k4 === "P" ? "SCORE" : "KILL") : "—"),
      killReason: (c.killReason || "").slice(0, 80) + ((c.killReason || "").length > 80 ? "…" : ""),
    })), [
      { key: "name", label: "Candidate" },
      { key: "program", label: "Program" },
      { key: "category", label: "Category" },
      { key: "score", label: "Score" },
      { key: "verdict", label: "Verdict" },
      { key: "killReason", label: "Kill reason" },
    ], (row) => navigate(`/candidate/${row.slug}`), {})
  );
  return container;
}

function viewCandidate(slug) {
  const c = corpus.candidates.find(x => x.slug === slug);
  if (!c) return el("p", {}, "Candidate not found");

  const wrap = el("div", { className: "candidate-detail" },
    pageHeader(c.name || c.slug, c.mechanism || ""),
    el("div", { className: "meta-row" },
      badge(`Program ${c.program}`, `program-${c.program.toLowerCase()}`),
      badge(c.category, "frozen"),
      c.matrixScore != null ? badge(`Score ${c.matrixScore}`, "kill") : null,
      c.verificationMemo ? badge("Adversarial memo", "refuted") : null,
      c.geographyTest ? badge("Geography test", "pass") : null
    ),
    el("p", {}, el("a", { href: `#/doc/${c.path}`, onClick: (e) => { e.preventDefault(); navigate(`/doc/${c.path}`); } }, "View source document →"))
  );

  const sections = [
    ["Original hypothesis", c.hypothesis],
    ["Buyer", c.buyer],
    ["Workflow / existing solutions", c.workflow],
    ["Economics", c.economics],
    ["Trust failure / documented incidents", c.trustFailure],
    ["Kill test", c.killTest],
    ["Scores", c.scores],
    ["What would kill this", c.whatWouldKill],
  ];

  for (const [title, content] of sections) {
    if (content) wrap.append(el("section", {}, el("h2", {}, title), renderMarkdown(content)));
  }

  if (c.sources?.length) {
    wrap.append(el("section", {}, el("h2", {}, "Sources"),
      el("ul", {}, ...c.sources.map(s => el("li", { className: "source-link" },
        s.urls?.length ? el("a", { href: s.urls[0], target: "_blank", rel: "noopener" }, s.raw.slice(0, 120)) : s.raw.slice(0, 120)
      )))
    ));
  }

  if (c.relatedCandidates?.length) {
    wrap.append(el("section", {}, el("h2", {}, "Related"),
      el("ul", {}, ...c.relatedCandidates.map(r =>
        el("li", {}, el("a", { href: `#/candidate/${r}`, onClick: (e) => { e.preventDefault(); navigate(`/candidate/${r}`); } }, r))
      ))
    ));
  }

  return wrap;
}

function viewMatrices() {
  const state = { tab: "phase1", search: "", verdict: "" };
  const container = el("div", {});

  function render() {
    container.replaceChildren(
      pageHeader("Interactive Matrices", "Sortable, filterable views of all three research matrices. Source tables preserved in linked documents."),
      tabs([
        { id: "phase1", label: "Phase 1 (30 industries)" },
        { id: "phase15", label: "Phase 1.5 (26 axes)" },
        { id: "programB", label: "Program B (30 candidates)" },
      ], state.tab, (id) => { state.tab = id; render(); }),
      el("div", { className: "filters" },
        el("input", { type: "search", placeholder: "Filter...", onInput: (e) => { state.search = e.target.value; render(); } }),
        el("select", { onChange: (e) => { state.verdict = e.target.value; render(); } },
          el("option", { value: "" }, "All verdicts"),
          el("option", { value: "KILL" }, "KILL"),
          el("option", { value: "SCORE" }, "SCORE"),
          el("option", { value: "REFUTED" }, "REFUTED")
        )
      )
    );

    const data = state.tab === "phase1" ? corpus.matrices.phase1
      : state.tab === "phase15" ? corpus.matrices.phase15
      : corpus.matrices.programB;

    const cols = state.tab === "programB"
      ? [{ key: "rank", label: "#" }, { key: "name", label: "Candidate" }, { key: "mechanism", label: "Mechanism" }, { key: "score", label: "Score" }, { key: "k1", label: "K1" }, { key: "k2", label: "K2" }, { key: "k3", label: "K3" }, { key: "k4", label: "K4" }, { key: "killReason", label: "Kill reason" }]
      : [{ key: "rank", label: "#" }, { key: "name", label: "Name" }, { key: "score", label: "Score" }, { key: "verdict", label: "Verdict" }, { key: "killReason", label: "Kill reason" }];

    container.append(matrixTable(data, cols, (row) => navigate(`/candidate/${row.slug}`), { search: state.search, verdict: state.verdict }));

    const src = state.tab === "phase1" ? "research/PHASE1-MATRIX.md"
      : state.tab === "phase15" ? "research/PHASE15-MATRIX.md"
      : "research/PROGRAM-B-MATRIX.md";
    container.append(el("p", { style: "margin-top:1.5rem" },
      el("a", { href: `#/doc/${src}`, onClick: (e) => { e.preventDefault(); navigate(`/doc/${src}`); } }, "View exact source matrix →")
    ));
  }
  render();
  return container;
}

function viewElimination() {
  const e = corpus.elimination;
  return el("div", {},
    pageHeader("Elimination Visualization", "How candidates were eliminated. Counts are non-exclusive where multiple kill tests apply (Program B). Derived from matrix data and conclusion memos."),
    el("h2", {}, `${corpus.stats.totalCandidates} candidates → ${corpus.stats.survivors} survivors`),
    eliminationBars(e.counts, corpus.stats.totalCandidates),
    el("h2", {}, "Program B kill test breakdown"),
    el("p", {}, "From PROGRAM-B-CONCLUSION.md §5 (non-exclusive):"),
    el("ul", {},
      el("li", {}, `${e.programBKillTests.passedAllKills} passed all four kill tests, died on 7.0 bar`),
      el("li", {}, `${e.programBKillTests.failedK3} failed K3 (absorption)`),
      el("li", {}, `${e.programBKillTests.failedK4} failed K4 (Bootstrap Bar)`),
      el("li", {}, `${e.programBKillTests.failedK1} failed K1 (data access)`),
      el("li", {}, `${e.programBKillTests.failedK2} failed K2 (oracle bound)`)
    ),
    el("h2", {}, "Adversarial verification"),
    el("div", { className: "outcome-flow" },
      el("div", { className: "numbers" }, `${e.adversarial.entered} candidates entered adversarial verification`),
      el("div", { className: "arrow" }, "↓"),
      el("div", { className: "result" }, `${e.adversarial.refuted} were refuted`)
    ),
    callout("Elimination category counts from matrix kill-reason keyword mapping may overlap. Program B K-test counts are authoritative from the frozen conclusion memo.")
  );
}

function viewVerification() {
  const memos = corpus.verification.filter(v => !v.isAudit);
  return el("div", {},
    pageHeader("Adversarial Verification", "8 memos across both programs. Optimistic competition and whitespace scoring did not survive contact with evidence in any instance."),
    el("div", { className: "outcome-flow" },
      el("div", { className: "numbers" }, "8 entered"),
      el("div", { className: "arrow" }, "↓"),
      el("div", { className: "result" }, "8 refuted")
    ),
    el("div", { className: "table-wrap" },
      el("table", {},
        el("thead", {}, el("tr", {},
          el("th", {}, "Candidate"), el("th", {}, "Verdict"), el("th", {}, "Memo")
        )),
        el("tbody", {}, ...memos.map(m => el("tr", { className: "clickable", onClick: () => navigate(`/doc/${m.path}`) },
          el("td", {}, m.candidate),
          el("td", {}, badge(m.verdict || "REFUTED", "refuted")),
          el("td", {}, el("code", {}, m.path))
        )))
      )
    )
  );
}

function viewAudit() {
  return el("div", {},
    pageHeader("Calibration Self-Audit", "An independent audit caught the study's own calibration pass bending an anchor. Corrections ran in the candidates' favour; the conclusion still held."),
    auditSequence([
      { title: "Original protocol", text: "PROGRAM-B-PROTOCOL.md frozen before scoring (sha256 e2951a71…a4c6). Bootstrap revenue anchors: 3/5/7/9." },
      { title: "Calibration", text: "Judge applied three-tier rule not in protocol: no comparable=3, undisclosed=4, cited=5." },
      { title: "Audit discovered defect", text: "audit-anchor-application.md — invented scoring rule absent from frozen anchors." },
      { title: "Original rule found unsupported", text: "Anchor 7 requires 'comparable Indonesian spend' — judge applied stricter incremental-module test." },
      { title: "Correction", text: "Scoring may reference only frozen anchors. Matrix errata: 'only one cited price' claim was false (≥8 had prices)." },
      { title: "Candidate-favourable recalculation", text: "Top candidate revenue forced to 9 → max score 6.4, still below 7.0 bar." },
      { title: "Conclusion still holds", text: "Calibration defect was non-decisive. Empty result robust to scoring choices." },
    ]),
    el("p", {}, el("a", { href: "#/doc/research/verify/audit-anchor-application.md", onClick: (e) => { e.preventDefault(); navigate("/doc/research/verify/audit-anchor-application.md"); } }, "Read full audit document →"))
  );
}

function viewGeography() {
  const header = el("div", { className: "comparison-grid" },
    el("div", { className: "cell header" }, "Candidate"),
    el("div", { className: "cell header" }, "Comparator market"),
    el("div", { className: "cell header" }, "What changed"),
    el("div", { className: "cell header" }, "Binding constraint")
  );

  for (const g of corpus.geography) {
    header.append(
      el("div", { className: "cell" }, el("a", { href: `#/candidate/${g.slug}`, onClick: (e) => { e.preventDefault(); navigate(`/candidate/${g.slug}`); } }, g.slug)),
      el("div", { className: "cell" }, g.comparator),
      el("div", { className: "cell" }, `Buyers: ${g.buyerCount}; Pricing: ${g.pricing}; Bar: ${g.barPlausible}`),
      el("div", { className: "cell" }, g.bindingBlocker)
    );
  }

  return el("div", {},
    pageHeader("Geography Appendix", "Nine candidates that passed all kill tests and died only on economics — tested whether Indonesia constraint caused the negative result."),
    callout("Verdict: Indonesian negative result is not caused by Indonesian market structure. Binding constraint is sales motion (G6) — general, not Indonesian."),
    header,
    el("p", { style: "margin-top:1.5rem" }, el("a", { href: "#/doc/research/GEOGRAPHY-NOTE.md", onClick: (e) => { e.preventDefault(); navigate("/doc/research/GEOGRAPHY-NOTE.md"); } }, "Read GEOGRAPHY-NOTE.md →"))
  );
}

function viewCrosscut() {
  const codes = corpus.crosscut.codes;
  const map = corpus.crosscut.industryMap;
  const container = el("div", {});

  function showCode(code) {
    const industries = Object.entries(map).filter(([, codes]) => codes.includes(code)).map(([slug]) => slug);
    container.replaceChildren(
      pageHeader(`Trust failure: ${code}`, codes[code]),
      el("p", {}, `${industries.length} industries in Phase 1 scan.`),
      el("ul", {}, ...industries.map(slug =>
        el("li", {}, el("a", { href: `#/candidate/${slug}`, onClick: (e) => { e.preventDefault(); navigate(`/candidate/${slug}`); } }, slug))
      )),
      el("p", {}, el("a", { href: "#/crosscut", onClick: (e) => { e.preventDefault(); navigate("/crosscut"); } }, "← Back to taxonomy"))
    );
  }

  const path = currentPath();
  const codeMatch = path.match(/^\/crosscut\/(\w+)$/);
  if (codeMatch && codes[codeMatch[1]]) {
    showCode(codeMatch[1]);
    return container;
  }

  container.replaceChildren(
    pageHeader("Trust-Failure Taxonomy", "From CROSSCUT.md — ten failure modes across 30 industries. Click a type to see affected industries."),
    el("div", { className: "crosscut-grid" },
      ...Object.entries(codes).map(([code, label]) => {
        const count = Object.values(map).filter(codes => codes.includes(code)).length;
        return el("div", {
          className: "crosscut-card",
          onClick: () => navigate(`/crosscut/${code}`),
        },
          el("div", { className: "code" }, code),
          el("div", {}, label),
          el("div", { className: "count" }, `${count} industries`)
        );
      })
    ),
    el("p", {}, el("a", { href: "#/doc/research/CROSSCUT.md", onClick: (e) => { e.preventDefault(); navigate("/doc/research/CROSSCUT.md"); } }, "View source taxonomy →"))
  );
  return container;
}

function viewIntegrity() {
  return el("div", {},
    pageHeader("Integrity & Hashes", "Frozen documents with SHA-256 verification. Closed to edits beyond typographical correction."),
    el("h2", {}, "Verify with"),
    el("code", {}, "shasum -a 256 <file>"),
    el("h2", {}, "Frozen documents"),
    ...corpus.integrity.frozenDocuments.map(d => el("div", { style: "margin-bottom:1.5rem" },
      el("p", {}, el("strong", {}, d.path), " ", badge(d.match ? "VERIFIED" : "MISMATCH", d.match ? "pass" : "kill")),
      hashBlock(d.actualHash),
      d.match ? null : callout(`Expected: ${d.expectedHash}`)
    )),
    el("h2", {}, "Versioning"),
    el("p", {}, "Programs A and B permanently frozen. Future work is a new versioned program referencing these memos, not amending them.")
  );
}

function viewFindings() {
  return el("div", {},
    pageHeader("Program Conclusions", "Frozen conclusion memos for both primary research programs."),
    ...corpus.programs.filter(p => p.id !== "C").map(p => el("div", { className: "card", key: p.id },
      el("h3", {}, p.name, " ", badge("FROZEN", "frozen")),
      el("p", {}, p.question),
      el("p", {}, `Result: ${p.survivors} survivors of ${p.candidates} candidates. Max score ${p.maxScore}.`),
      el("p", {}, el("a", { href: `#/doc/${p.conclusionPath}`, onClick: (e) => { e.preventDefault(); navigate(`/doc/${p.conclusionPath}`); } }, "Read conclusion →"))
    )),
    el("h2", {}, "Cross-program finding"),
    callout("86 candidate slots, 8/8 adversarial memos refuted, no survivor under either fixed evidence standard. B adds economic constraint that A never tested.")
  );
}

function viewProtocols() {
  const protocols = [
    { path: "research/RUBRIC.md", status: "FROZEN", date: "2026-07-28", name: "Program A Rubric" },
    { path: "research/PHASE15-PROTOCOL.md", status: "FROZEN", date: "2026-07-29", name: "Phase 1.5 Protocol" },
    { path: "research/PROGRAM-B-PROTOCOL.md", status: "FROZEN", date: "2026-07-29", hash: "e2951a71d1a5117bcd95c6e2bab4c40e53a8f413b65b735b4d1e83053e65a4c6", name: "Program B Protocol" },
    { path: "research/PROGRAM-C-PROTOCOL.md", status: "PRE-COMMITTED", date: "2026-07-30", name: "Program C Protocol" },
  ];
  return el("div", {},
    pageHeader("Protocols", "Pre-committed rules that existed BEFORE candidates were evaluated."),
    ...protocols.map(p => el("div", { className: "card" },
      protocolBanner(p),
      el("h3", {}, p.name),
      el("p", {}, el("a", { href: `#/doc/${p.path}`, onClick: (e) => { e.preventDefault(); navigate(`/doc/${p.path}`); } }, "Read full protocol →"))
    ))
  );
}

function viewSearch() {
  const params = new URLSearchParams(location.hash.split("?")[1] || "");
  const q = params.get("q") || "";
  const results = q.length >= 2
    ? corpus.searchIndex.filter(i => i.text?.toLowerCase().includes(q.toLowerCase()) || i.title?.toLowerCase().includes(q.toLowerCase())).slice(0, 50)
    : [];

  return el("div", {},
    pageHeader("Full-text Search", "Search across the research corpus."),
    el("div", { className: "filters" },
      el("input", {
        type: "search",
        placeholder: "Search documents, candidates, sections...",
        value: q,
        onInput: (e) => { location.hash = `#/search?q=${encodeURIComponent(e.target.value)}`; render(); },
        style: "max-width:480px;flex:1",
      })
    ),
    el("div", { className: "search-results" },
      q.length < 2 ? el("p", {}, "Enter at least 2 characters.") :
      results.length === 0 ? el("p", {}, "No results.") :
      ...results.map(r => el("div", {
        className: "search-result",
        onClick: () => r.slug ? navigate(`/candidate/${r.slug}`) : navigate(`/doc/${r.path}`),
      },
        el("div", {}, r.title || r.slug),
        el("div", { className: "path" }, r.path + (r.line ? `:${r.line}` : "")),
        el("div", { className: "snippet" }, r.text?.slice(0, 200))
      ))
    )
  );
}

function viewDocuments() {
  const docs = corpus.documents.sort((a, b) => a.path.localeCompare(b.path));
  return el("div", {},
    pageHeader("Document Index", `${docs.length} markdown files in the research corpus.`),
    el("div", { className: "table-wrap" },
      el("table", {},
        el("thead", {}, el("tr", {}, el("th", {}, "Document"), el("th", {}, "Status"), el("th", {}, "Hash"))),
        el("tbody", {}, ...docs.map(d => el("tr", { className: "clickable", onClick: () => navigate(`/doc/${d.path}`) },
          el("td", {}, d.path),
          el("td", {}, d.frozen ? badge("FROZEN", "frozen") : "—"),
          el("td", {}, el("code", { style: "font-size:0.7rem" }, d.hash.slice(0, 16) + "…"))
        )))
      )
    )
  );
}

async function viewDocument(path) {
  const docMeta = corpus.documents.find(d => d.path === path);
  const slug = path.replace(/^research\//, "").replace(/\//g, "-").replace(/\.md$/, "") || path.replace(/\.md$/, "").replace(/\//g, "-");
  const slugAlt = path.split("/").pop().replace(".md", "");
  let doc;
  try { doc = await loadDocument(slugAlt); } catch { try { doc = await loadDocument(slug); } catch { return el("p", {}, `Document not found: ${path}`); } }

  return el("div", {},
    el("div", { className: "meta-row" },
      docMeta?.frozen ? badge("FROZEN", "frozen") : null,
      el("a", { href: `#/documents`, onClick: (e) => { e.preventDefault(); navigate("/documents"); } }, "← Index")
    ),
    el("div", { className: "doc-viewer", html: marked.parse(doc.content) })
  );
}

function viewIndustries() {
  return viewCandidates({ category: "industry" });
}

function viewAxes() {
  return viewCandidates({ category: "axis" });
}

async function render() {
  await loadCorpus();
  renderSidebar();
  const app = document.getElementById("app");
  const path = currentPath();
  app.replaceChildren(el("p", {}, "Loading…"));

  try {
    let view;
    if (path === "/") view = viewHome();
    else if (path === "/candidates") {
      const p = new URLSearchParams(location.hash.split("?")[1] || "");
      view = viewCandidates({ program: p.get("program") || "", category: p.get("category") || "", q: p.get("q") || "" });
    }
    else if (path.startsWith("/candidate/")) view = viewCandidate(path.split("/")[2]);
    else if (path === "/programs/a") view = viewProgram("a");
    else if (path === "/programs/b") view = viewProgram("b");
    else if (path === "/programs/c") view = viewProgram("c");
    else if (path === "/matrices") view = viewMatrices();
    else if (path === "/elimination") view = viewElimination();
    else if (path === "/verification") view = viewVerification();
    else if (path === "/audit") view = viewAudit();
    else if (path === "/geography") view = viewGeography();
    else if (path.startsWith("/crosscut")) view = viewCrosscut();
    else if (path === "/integrity") view = viewIntegrity();
    else if (path === "/findings") view = viewFindings();
    else if (path === "/protocols") view = viewProtocols();
    else if (path === "/search") view = viewSearch();
    else if (path === "/documents") view = viewDocuments();
    else if (path === "/industries") view = viewIndustries();
    else if (path === "/axes") view = viewAxes();
    else if (path.startsWith("/doc/")) view = await viewDocument(decodeURIComponent(path.slice(5)));
    else view = el("p", {}, "Page not found.");

    app.replaceChildren(view);
  } catch (err) {
    app.replaceChildren(el("p", {}, `Error: ${err.message}`));
    console.error(err);
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
