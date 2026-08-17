export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "className") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v != null) node.setAttribute(k, v);
  }
  for (const child of children.flat()) {
    if (child == null) continue;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return node;
}

export function badge(text, type = "") {
  return el("span", { className: `badge badge-${type}` }, text);
}

export function pageHeader(title, lead) {
  return el("header", { className: "page-header" },
    el("h1", {}, title),
    lead ? el("p", { className: "lead" }, lead) : null
  );
}

export function statCard(label, value, sub = "") {
  return el("div", { className: "stat-card" },
    el("div", { className: "label" }, label),
    el("div", { className: "value" }, value),
    sub ? el("div", { className: "sub" }, sub) : null
  );
}

export function protocolBanner(meta) {
  return el("div", { className: "protocol-banner" },
    el("div", { className: "status" }, `STATUS: ${meta.status || "FROZEN"}`),
    meta.version ? el("div", {}, `Version: ${meta.version}`) : null,
    meta.date ? el("div", {}, `Date: ${meta.date}`) : null,
    meta.hash ? el("div", {}, `SHA-256: ${meta.hash}`) : null
  );
}

export function hashBlock(hash, label = "SHA-256") {
  const wrap = el("div", { className: "hash-block" });
  const text = el("span", {}, `${label}: ${hash}`);
  const btn = el("button", { type: "button" }, "Copy");
  btn.addEventListener("click", () => navigator.clipboard.writeText(hash));
  wrap.append(text, btn);
  return wrap;
}

export function callout(text) {
  return el("div", { className: "callout" }, text);
}

export function tabs(items, active, onChange) {
  const wrap = el("div", { className: "tabs" });
  for (const item of items) {
    wrap.append(el("div", {
      className: `tab${active === item.id ? " active" : ""}`,
      onClick: () => onChange(item.id),
    }, item.label));
  }
  return wrap;
}

export function renderMarkdown(text) {
  if (!text) return el("p", {}, "—");
  const div = el("div", { className: "content" });
  div.innerHTML = marked.parse(text, { breaks: true });
  return div;
}

export function matrixTable(rows, columns, onRowClick, filters = {}) {
  const { search = "", verdict = "", program = "" } = filters;
  let filtered = [...rows];
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(r =>
      Object.values(r).some(v => String(v || "").toLowerCase().includes(q))
    );
  }
  if (verdict) filtered = filtered.filter(r => (r.verdict || "").includes(verdict));
  if (program) filtered = filtered.filter(r => r.program === program);

  const table = el("table");
  const thead = el("thead");
  const headerRow = el("tr");
  const sortState = { col: null, asc: true };

  for (const col of columns) {
    headerRow.append(el("th", {
      onClick: () => {
        if (sortState.col === col.key) sortState.asc = !sortState.asc;
        else { sortState.col = col.key; sortState.asc = true; }
        renderSort();
      },
    }, col.label));
  }
  thead.append(headerRow);
  table.append(thead);

  const tbody = el("tbody");
  table.append(tbody);

  function renderSort() {
    tbody.replaceChildren();
    const sorted = [...filtered];
    if (sortState.col) {
      sorted.sort((a, b) => {
        const av = a[sortState.col];
        const bv = b[sortState.col];
        const cmp = typeof av === "number" ? av - bv : String(av || "").localeCompare(String(bv || ""));
        return sortState.asc ? cmp : -cmp;
      });
    }
    for (const row of sorted) {
      const tr = el("tr", { className: onRowClick ? "clickable" : "" });
      if (onRowClick) tr.addEventListener("click", () => onRowClick(row));
      for (const col of columns) {
        let val = row[col.key];
        if (col.key === "verdict" && val) tr.append(el("td", {}, badge(val, val.includes("REFUT") ? "refuted" : val.includes("KILL") || val === "F" ? "kill" : "pass")));
        else tr.append(el("td", {}, val ?? "—"));
      }
      tbody.append(tr);
    }
  }
  renderSort();
  return el("div", { className: "table-wrap" }, table);
}

export function eliminationBars(counts, total) {
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const wrap = el("div", { className: "elimination-viz" });
  for (const [label, count] of sorted) {
    const pct = Math.round((count / total) * 100);
    wrap.append(el("div", { className: "elim-bar" },
      el("div", { className: "elim-label" }, label),
      el("div", { className: "elim-track" },
        el("div", { className: "elim-fill", style: `width:${pct}%` })
      ),
      el("div", { className: "elim-count" }, String(count))
    ));
  }
  return wrap;
}

export function auditSequence(steps) {
  const wrap = el("div", { className: "audit-sequence" });
  for (const step of steps) {
    wrap.append(el("div", { className: "audit-step" },
      el("h4", {}, step.title),
      el("p", {}, step.text)
    ));
  }
  return wrap;
}
