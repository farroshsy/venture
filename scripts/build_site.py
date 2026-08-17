#!/usr/bin/env python3
"""Generate site/data/corpus.json from the research markdown corpus."""

from __future__ import annotations

import hashlib
import json
import re
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RESEARCH = ROOT / "research"
OUT = ROOT / "site" / "data"

FROZEN_DOCS = {
    "research/PROGRAM-A-CONCLUSION.md": "e5ff06827257bbf89c50e62b9064b316154555f39fb8f85ad3ea9d848aa60e65",
    "research/PROGRAM-B-CONCLUSION.md": "c4002cb2f4d0c9a2402132a899c164341133c9dcba1b4b4c168b67ae46acc2c2",
    "research/PROGRAM-B-PROTOCOL.md": "e2951a71d1a5117bcd95c6e2bab4c40e53a8f413b65b735b4d1e83053e65a4c6",
    "research/verify/audit-anchor-application.md": "1d0ce2335297296c6f96d921936eb2c3cb53e6581ba78adc9abf8fb2fee782a6",
}

CROSSCUT_CODES = {
    "DOC": "Document forgery",
    "CRED": "Credential fraud",
    "ID": "Identity verification failure",
    "PROV": "Asset provenance / origin laundering",
    "DUP": "Duplicate claims",
    "FUND": "Fund custody opacity",
    "EVT": "Fabricated event records",
    "SETT": "Handoff & settlement disputes",
    "AUTH": "Product authenticity",
    "COLL": "Off-system collusion",
}

INDUSTRY_CROSSCUT = {
    "mining-nickel": ["DOC", "PROV", "COLL"],
    "palm-oil": ["PROV", "COLL"],
    "workforce-credentials": ["DOC", "CRED", "ID", "COLL"],
    "gold-bullion": ["PROV", "FUND", "AUTH", "COLL"],
    "invoice-financing": ["DOC", "ID", "DUP", "FUND"],
    "cold-chain": ["EVT", "SETT"],
    "land-registry": ["DOC", "ID", "DUP", "COLL"],
    "koperasi": ["FUND", "EVT"],
    "halal-certification": ["EVT", "AUTH"],
    "trade-finance": ["DOC", "DUP", "COLL"],
    "healthcare-claims": ["ID", "EVT", "COLL"],
    "ports-customs": ["DOC", "PROV", "COLL"],
    "insurance-claims": ["ID", "FUND", "EVT"],
    "digital-identity": ["DOC", "CRED", "ID"],
    "construction": ["CRED", "SETT"],
    "real-estate-presale": ["FUND"],
    "coffee-cocoa": ["PROV", "AUTH"],
    "notary-civil-docs": ["DOC", "DUP"],
    "pharma-supply": ["PROV", "AUTH"],
    "islamic-social-finance": ["FUND"],
    "domestic-logistics": ["DOC", "EVT", "SETT"],
    "fisheries": ["PROV", "EVT"],
    "ecommerce-authenticity": ["AUTH"],
    "ai-content-authenticity": ["DOC", "ID"],
    "carbon-markets": ["DUP", "EVT"],
    "procurement": ["EVT", "COLL"],
    "education-credentials": ["CRED"],
    "professional-licensing": ["CRED", "ID"],
    "cross-border-remittance": ["ID"],
    "energy-rec": ["DUP"],
}

VERIFY_MAP = {
    "mining-nickel": "research/verify/mining-nickel.md",
    "gold-bullion": "research/verify/gold-bullion.md",
    "jkn-claims-integrity": "research/verify/b-jkn-claims-integrity.md",
    "permit-overlap-diligence": "research/verify/b-permit-overlap-diligence.md",
    "financial-statement-fraud-detection": "research/verify/b-financial-statement-fraud-detection.md",
    "land-double-certificate-detection": "research/verify/b-land-double-certificate-detection.md",
    "bpr-insider-fraud-continuous-audit": "research/verify/b-bpr-insider-fraud-continuous-audit.md",
    "halal-certificate-integrity": "research/verify/b-halal-certificate-integrity.md",
}

GEOGRAPHY_CANDIDATES = [
    "beneficial-ownership-verification",
    "credential-holder-identity-binding",
    "ekyc-deepfake-injection-detection",
    "indonesia-kyb-verification",
    "cross-registry-credential-platform",
    "fictitious-tax-invoice-screening",
    "synthetic-borrower-detection",
    "mill-mass-balance-reconciliation",
    "collateral-existence-monitoring",
]


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    h.update(path.read_bytes())
    return h.hexdigest()


def slug_from_path(path: Path) -> str:
    return path.stem


def read_md(rel: str) -> dict:
    rel = str(rel).replace("\\", "/")
    path = ROOT / rel
    text = path.read_text(encoding="utf-8")
    return {
        "path": rel,
        "slug": slug_from_path(path),
        "title": extract_title(text),
        "content": text,
        "hash": sha256(path),
        "frozen": rel in FROZEN_DOCS,
        "expectedHash": FROZEN_DOCS.get(rel),
        "hashMatch": FROZEN_DOCS.get(rel) == sha256(path) if rel in FROZEN_DOCS else None,
    }


def extract_title(text: str) -> str:
    for line in text.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return "Untitled"


def parse_table_rows(text: str, header_hint: str | None = None) -> list[list[str]]:
    rows: list[list[str]] = []
    in_table = False
    for line in text.splitlines():
        if not line.strip().startswith("|"):
            if in_table and rows:
                break
            continue
        if re.match(r"^\|\s*-+", line):
            in_table = True
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if header_hint and header_hint.lower() not in line.lower() and not rows:
            continue
        rows.append(cells)
        in_table = True
    return rows


def parse_matrix_table(text: str, start_marker: str, end_marker: str) -> list[list[str]]:
    """Extract markdown table rows between section markers."""
    start = text.find(start_marker)
    if start < 0:
        return []
    chunk = text[start:]
    end = chunk.find(end_marker, len(start_marker))
    if end > 0:
        chunk = chunk[:end]
    rows = []
    for line in chunk.splitlines():
        if not line.strip().startswith("|"):
            continue
        if re.match(r"^\|\s*-+", line):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if cells and cells[0] == "#":
            continue  # header row
        if cells and re.match(r"^\d+$", cells[0].replace("*", "")):
            rows.append(cells)
    return rows


def parse_phase1_matrix(text: str) -> list[dict]:
    rows = parse_matrix_table(text, "| # | Industry |", "## 4.")
    out = []
    for row in rows:
        if len(row) < 6:
            continue
        out.append(
            {
                "rank": int(re.sub(r"[^\d]", "", row[0]) or 0),
                "name": row[1],
                "slug": slugify(row[1]),
                "coreTrustFailure": row[2],
                "score": float(row[3]) if row[3] else None,
                "verdict": row[4],
                "killReason": row[5] if len(row) > 5 else "",
                "program": "A",
                "phase": "1",
                "category": "industry",
            }
        )
    return out


def parse_phase15_matrix(text: str) -> list[dict]:
    rows = parse_matrix_table(text, "| # | Candidate | Axis |", "## 3.")
    out = []
    for row in rows:
        if len(row) < 7:
            continue
        out.append(
            {
                "rank": int(re.sub(r"[^\d]", "", row[0]) or 0),
                "name": row[1],
                "slug": slugify(row[1]),
                "axis": row[2],
                "coreTrustFailure": row[3],
                "score": float(row[4]) if row[4] else None,
                "verdict": row[5],
                "killReason": row[6] if len(row) > 6 else "",
                "program": "A",
                "phase": "1.5",
                "category": "axis",
            }
        )
    return out


def parse_program_b_matrix(text: str) -> list[dict]:
    rows = parse_matrix_table(text, "| # | Candidate | Mechanism |", "## (c)")
    out = []
    for row in rows:
        if len(row) < 10:
            continue
        out.append(
            {
                "rank": int(re.sub(r"[^\d]", "", row[0]) or 0),
                "name": row[1],
                "slug": slugify(row[1]),
                "mechanism": row[2],
                "score": float(row[3].replace("*", "")) if row[3] else None,
                "k1": row[4],
                "k2": row[5],
                "k3": row[6],
                "k4": row[7],
                "gate": row[8],
                "killReason": row[9] if len(row) > 9 else "",
                "program": "B",
                "phase": "1",
                "category": "candidate",
                "verdict": "SURVIVE" if all(x.strip().upper() == "P" for x in row[4:8]) else "KILL",
                "passedAllKills": all(x.strip().upper() == "P" for x in row[4:8]),
            }
        )
    return out


def slugify(name: str) -> str:
    s = name.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    mapping = {
        "invoice-financing-p2p-fraud": "invoice-financing",
        "migrant-worker-seafarer-credentials": "workforce-credentials",
        "palm-oil-traceability": "palm-oil",
        "gold-provenance-custody": "gold-bullion",
        "cold-chain-food-pharma": "cold-chain",
        "savings-cooperatives-ksp": "koperasi",
        "land-titles-bpn": "land-registry",
        "health-records-bpjs-claims": "healthcare-claims",
        "trade-finance-lc-fraud": "trade-finance",
        "mining-provenance-quotas": "mining-nickel",
        "halal-certification-integrity": "halal-certification",
        "ports-customs-trade-documents": "ports-customs",
        "insurance-claims-fraud": "insurance-claims",
        "digital-identity-vcs": "digital-identity",
        "construction-payments": "construction",
        "notarial-deeds-legalization": "notary-civil-docs",
        "coffee-cocoa-provenance": "coffee-cocoa",
        "property-pre-sales-escrow": "real-estate-presale",
        "pharma-track-trace": "pharma-supply",
        "zakat-waqf-transparency": "islamic-social-finance",
        "fisheries-aquaculture": "fisheries",
        "e-commerce-counterfeits": "ecommerce-authenticity",
        "ai-output-media-authenticity": "ai-content-authenticity",
        "carbon-credits-registries": "carbon-markets",
        "public-procurement-integrity": "procurement",
        "domestic-freight-trucking": "domestic-logistics",
        "diploma-credential-verification": "education-credentials",
        "professional-license-verification": "professional-licensing",
        "migrant-remittances-settlement": "cross-border-remittance",
        "renewable-energy-certificates": "energy-rec",
        "halal-mutual-recognition": "halal-mutual-recognition",
        "timber-legality-abroad-svlk-flegt": "timber-svlk",
        "receivables-uniqueness-registry": "receivables-registry",
        "cross-border-receivables-double-financing": "cross-border-receivables",
        "inventory-receivables-fabrication-in-lending": "inventory-finance",
        "one-map-permit-overlaps": "one-map-overlap",
        "pre-title-property-double-selling-ppjb": "land-double-pjb",
        "music-royalty-collection-lmkn": "music-royalties",
        "ai-agent-identity-payment-authority": "ai-agent-authority",
        "rwa-tokenization-under-ojk-regime": "rwa-tokenization",
        "ai-training-data-licensing-provenance": "ai-data-licensing",
        "digital-ad-spend-reconciliation": "ad-reconciliation",
        "seafarer-certificate-verification-foreign": "seafarer-verify-foreign",
        "fund-nav-custody-attestation": "fund-custody-nav",
        "crypto-proof-of-reserves": "proof-of-reserves",
        "foreign-kyc-on-indonesian-corporates": "corresponding-kyc",
        "electronic-bills-of-lading-mletr": "ebl-mletr",
        "fiducia-double-pledging": "fidusia-collateral",
        "article-6-carbon-transfers": "article6-carbon",
        "health-worker-credential-mobility": "health-worker-mobility",
        "client-fund-segregation-attestation": "client-fund-segregation",
        "digital-gold-custody-attestation": "digital-gold-custody",
        "coalition-loyalty-point-liabilities": "loyalty-coalitions",
        "multi-agency-fisheries-export-clearance": "fisheries-multiagency",
        "warehouse-receipt-integrity-srg": "warehouse-receipts",
        "inter-ministry-carbon-accounting": "carbon-interministry",
    }
    return mapping.get(s, s)


def extract_section(text: str, heading: str) -> str | None:
    pattern = rf"^##+\s+{re.escape(heading)}\s*$"
    m = re.search(pattern, text, re.M | re.I)
    if not m:
        return None
    start = m.end()
    nxt = re.search(r"^##+\s+", text[start:], re.M)
    end = start + nxt.start() if nxt else len(text)
    return text[start:end].strip()


def extract_field(text: str, label: str) -> str | None:
    m = re.search(rf"^\*\*{re.escape(label)}\*\*[:\s]+(.+)$", text, re.M | re.I)
    if m:
        return m.group(1).strip()
    m = re.search(rf"^{re.escape(label)}:\s*(.+)$", text, re.M | re.I)
    return m.group(1).strip() if m else None


def parse_candidate_file(doc: dict, program: str, category: str) -> dict:
    text = doc["content"]
    slug_line = re.search(r"Slug:\s*`([^`]+)`", text)
    slug = slug_line.group(1) if slug_line else doc["slug"]
    mechanism = None
    if "| Mechanism:" in text.split("\n", 1)[0]:
        mechanism = text.split("| Mechanism:")[1].split("|")[0].strip()

    kill_section = extract_section(text, "Kill Tests") or extract_section(text, "Kill Test Verdict")
    scores_section = extract_section(text, "Scores")
    sources_section = extract_section(text, "Sources")

    return {
        "id": slug,
        "slug": slug,
        "name": doc["title"].replace(" — ", " — ").split(" — ")[0] if " — " in doc["title"] else doc["title"],
        "program": program,
        "category": category,
        "path": doc["path"],
        "mechanism": mechanism,
        "hypothesis": extract_section(text, "Problem & How Truth Is Established Today")
        or extract_section(text, "Problem & Current Workflow")
        or extract_section(text, "Problem"),
        "workflow": extract_section(text, "Existing Solutions (mid-2026)")
        or extract_section(text, "Existing Solutions (as of 2026-07)")
        or extract_section(text, "Existing Solutions"),
        "buyer": extract_section(text, "Buyer & Who Pays")
        or extract_section(text, "Stakeholders & Who Pays"),
        "economics": extract_section(text, "Bottom-Up ARR Path (K4)")
        or extract_section(text, "Cost of the Problem"),
        "trustFailure": extract_section(text, "Documented Failures (cited)")
        or extract_section(text, "Trust Breakdown (documented incidents)"),
        "killTest": kill_section,
        "scores": scores_section,
        "verdict": extract_field(kill_section or "", "Survives") or extract_field(text, "VERDICT"),
        "whatWouldKill": extract_section(text, "What Would Kill This")
        or extract_section(text, "What Would Kill This Idea"),
        "sources": parse_sources(sources_section or ""),
        "verificationMemo": VERIFY_MAP.get(slug),
        "verificationStatus": "refuted" if slug in VERIFY_MAP else ("memo_pending" if slug in {
            "receivables-uniqueness", "gold-bar-provenance-registry", "ore-provenance-verification", "trade-document-fraud-detection"
        } else "none"),
        "geographyTest": f"research/geography/{slug}.md" if slug in GEOGRAPHY_CANDIDATES else None,
        "crosscutCodes": INDUSTRY_CROSSCUT.get(slug, []),
        "relatedCandidates": find_related(slug, text),
    }


def parse_sources(section: str) -> list[dict]:
    sources = []
    for line in section.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        line = re.sub(r"^[-*]\s+", "", line)
        urls = re.findall(r"https?://[^\s;)]+", line)
        sources.append({"raw": line, "urls": urls})
    return sources


def find_related(slug: str, text: str) -> list[str]:
    refs = set()
    for m in re.finditer(r"research/(?:candidates|industries|axes)/([a-z0-9-]+)\.md", text):
        if m.group(1) != slug:
            refs.add(m.group(1))
    for m in re.finditer(r"`([a-z0-9-]+)`", text):
        if m.group(1) != slug and len(m.group(1)) > 4:
            refs.add(m.group(1))
    return sorted(refs)[:12]


def parse_verify_memo(doc: dict) -> dict:
    text = doc["content"]
    candidate = re.search(r"\*\*Candidate:\*\*\s*`([^`]+)`", text)
    verdict = re.search(r"## Verdict:\s*\*\*([^*]+)\*\*", text)
    return {
        "slug": doc["slug"],
        "path": doc["path"],
        "candidate": candidate.group(1) if candidate else doc["slug"].replace("b-", ""),
        "verdict": verdict.group(1).strip() if verdict else None,
        "title": doc["title"],
        "isAudit": "audit" in doc["slug"],
    }


def build_search_index(docs: list[dict], candidates: list[dict]) -> list[dict]:
    index = []
    for doc in docs:
        for i, line in enumerate(doc["content"].splitlines()):
            if line.strip():
                index.append(
                    {
                        "path": doc["path"],
                        "title": doc["title"],
                        "line": i + 1,
                        "text": line.strip()[:300],
                    }
                )
    for c in candidates:
        index.append(
            {
                "path": c["path"],
                "title": c.get("name", c["slug"]),
                "type": "candidate",
                "slug": c["slug"],
                "program": c["program"],
                "text": " ".join(
                    filter(
                        None,
                        [
                            c.get("name"),
                            c.get("mechanism"),
                            c.get("killTest", "")[:200] if c.get("killTest") else None,
                        ],
                    )
                )[:400],
            }
        )
    return index


def categorize_elimination(row: dict) -> list[str]:
    cats = []
    reason = (row.get("killReason") or "").lower()
    if row.get("program") == "B":
        if row.get("passedAllKills"):
            cats.append("Score below bar")
        if row.get("k1", "").upper() == "F":
            cats.append("Data access (K1)")
        if row.get("k2", "").upper() == "F":
            cats.append("Oracle problem (K2)")
        if row.get("k3", "").upper() == "F":
            cats.append("Absorption (K3)")
        if row.get("k4", "").upper() == "F":
            cats.append("Economics (K4)")
    else:
        if "anchor" in reason or "state" in reason or "accepted" in reason or "custodian" in reason:
            cats.append("Trust anchor")
        if "econom" in reason or "wtp" in reason or "buyer" in reason or "thin" in reason:
            cats.append("Economics")
        if "oracle" in reason or "physical" in reason or "off-system" in reason:
            cats.append("Oracle problem")
        if "authority" in reason or "doctrinal" in reason or "legal" in reason:
            cats.append("Authority")
        if "data access" in reason or "custodian refuses" in reason or "walled garden" in reason:
            cats.append("Custodian/data access")
        if "enterprise" in reason or "sales" in reason or "procurement" in reason:
            cats.append("Sales motion")
        if row.get("verdict") == "REFUTED":
            cats.append("Adversarial verification")
        if not cats:
            cats.append("Other documented kill")
    return cats or ["Other documented kill"]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    all_docs: list[dict] = []
    for path in sorted(ROOT.rglob("*.md")):
        rel = str(path.relative_to(ROOT)).replace("\\", "/")
        if rel.startswith("site/"):
            continue
        all_docs.append(read_md(rel))

    phase1 = parse_phase1_matrix(read_md("research/PHASE1-MATRIX.md")["content"])
    phase15 = parse_phase15_matrix(read_md("research/PHASE15-MATRIX.md")["content"])
    program_b = parse_program_b_matrix(read_md("research/PROGRAM-B-MATRIX.md")["content"])

    candidates: list[dict] = []
    for rel, program, category in [
        *[(f"research/industries/{p.stem}.md", "A", "industry") for p in (RESEARCH / "industries").glob("*.md")],
        *[(f"research/axes/{p.stem}.md", "A", "axis") for p in (RESEARCH / "axes").glob("*.md")],
        *[(f"research/candidates/{p.stem}.md", "B", "candidate") for p in (RESEARCH / "candidates").glob("*.md")],
    ]:
        doc = read_md(rel)
        c = parse_candidate_file(doc, program, category)
        matrix_row = next(
            (r for r in (phase1 + phase15 + program_b) if r.get("slug") == c["slug"] or slugify(r.get("name", "")) == c["slug"]),
            None,
        )
        if matrix_row:
            c["matrixScore"] = matrix_row.get("score")
            c["matrixVerdict"] = matrix_row.get("verdict")
            c["killReason"] = matrix_row.get("killReason")
            c["eliminationCategories"] = categorize_elimination(matrix_row)
            if program == "B":
                c["killTests"] = {
                    "k1": matrix_row.get("k1"),
                    "k2": matrix_row.get("k2"),
                    "k3": matrix_row.get("k3"),
                    "k4": matrix_row.get("k4"),
                }
        candidates.append(c)

    verify_memos = [
        parse_verify_memo(read_md(str(p.relative_to(ROOT)).replace("\\", "/")))
        for p in sorted((RESEARCH / "verify").glob("*.md"))
    ]

    elimination_counts: dict[str, int] = {}
    for row in phase1 + phase15 + program_b:
        for cat in categorize_elimination(row):
            elimination_counts[cat] = elimination_counts.get(cat, 0) + 1

    geography_rows = parse_table_rows(read_md("research/GEOGRAPHY-NOTE.md")["content"], "Candidate")
    geography = []
    for row in geography_rows[1:]:
        if len(row) >= 6 and row[0].startswith("`"):
            slug = row[0].strip("`")
            geography.append(
                {
                    "slug": slug,
                    "comparator": row[1],
                    "buyerCount": row[2],
                    "pricing": row[3],
                    "barPlausible": row[4],
                    "bindingBlocker": row[5],
                    "path": f"research/geography/{slug}.md",
                }
            )

    corpus = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "question": "Does Indonesia have a bootstrap-scale trust-infrastructure company in it?",
        "stats": {
            "totalCandidates": 86,
            "programACandidates": 56,
            "programBCandidates": 30,
            "survivors": 0,
            "programAMaxScore": 5.9,
            "programBMaxScore": 5.6,
            "scoreBar": 7.0,
            "adversarialMemos": 8,
            "adversarialRefuted": 8,
            "geographyTests": 9,
            "researchDate": "July 2026",
        },
        "programs": [
            {
                "id": "A",
                "name": "Program A",
                "question": "Identify the single highest-value problem in Indonesia where blockchain is demonstrably the best technical solution.",
                "status": "FROZEN",
                "candidates": 56,
                "phases": ["Phase 1 (30 industries)", "Phase 1.5 (26 structural axes)"],
                "maxScore": 5.9,
                "survivors": 0,
                "conclusionPath": "research/PROGRAM-A-CONCLUSION.md",
                "protocolPaths": ["research/RUBRIC.md", "research/PHASE15-PROTOCOL.md"],
                "matrixPaths": ["research/PHASE1-MATRIX.md", "research/PHASE15-MATRIX.md"],
            },
            {
                "id": "B",
                "name": "Program B",
                "question": "Where are Indonesia's largest trust and integrity failures for which software materially changes the economics, architecture unconstrained?",
                "status": "FROZEN",
                "candidates": 30,
                "maxScore": 5.6,
                "survivors": 0,
                "conclusionPath": "research/PROGRAM-B-CONCLUSION.md",
                "protocolPath": "research/PROGRAM-B-PROTOCOL.md",
                "matrixPath": "research/PROGRAM-B-MATRIX.md",
                "auditPath": "research/verify/audit-anchor-application.md",
            },
            {
                "id": "C",
                "name": "Program C",
                "question": "Find a software category with proven spending, establish why paying customers remain dissatisfied, identify a structural reason incumbents cannot fix it.",
                "status": "COMPLETE (not frozen)",
                "role": "Budget-first displacement search — different methodology from A/B",
                "candidatesIn": 35,
                "candidatesKilled": 24,
                "hypothesesSurviving": 8,
                "protocolPath": "research/PROGRAM-C-PROTOCOL.md",
                "findingsPath": "research/PROGRAM-C-FINDINGS.md",
                "note": "Program C is a separate search paradigm; it does not reopen Programs A or B.",
            },
        ],
        "matrices": {
            "phase1": phase1,
            "phase15": phase15,
            "programB": program_b,
        },
        "candidates": candidates,
        "verification": verify_memos,
        "geography": geography,
        "crosscut": {
            "codes": CROSSCUT_CODES,
            "industryMap": INDUSTRY_CROSSCUT,
        },
        "elimination": {
            "counts": elimination_counts,
            "programBKillTests": {
                "passedAllKills": 9,
                "failedK1": 4,
                "failedK2": 2,
                "failedK3": 13,
                "failedK4": 20,
                "note": "Non-exclusive; from PROGRAM-B-CONCLUSION.md §5",
            },
            "adversarial": {"entered": 8, "refuted": 8},
        },
        "integrity": {
            "frozenDocuments": [
                {
                    "path": p,
                    "expectedHash": h,
                    "actualHash": sha256(ROOT / p),
                    "match": sha256(ROOT / p) == h,
                }
                for p, h in FROZEN_DOCS.items()
            ],
            "verifyCommand": "shasum -a 256 <file>",
        },
        "documents": [{k: v for k, v in d.items() if k != "content"} for d in all_docs],
        "searchIndex": build_search_index(all_docs, candidates),
    }

    (OUT / "corpus.json").write_text(json.dumps(corpus, indent=2), encoding="utf-8")

    docs_dir = OUT / "documents"
    docs_dir.mkdir(exist_ok=True)
    for doc in all_docs:
        (docs_dir / f"{doc['slug']}.json").write_text(
            json.dumps({k: v for k, v in doc.items()}, indent=2),
            encoding="utf-8",
        )

    print(f"Built corpus: {len(candidates)} candidates, {len(all_docs)} documents")
    print(f"Output: {OUT / 'corpus.json'}")


if __name__ == "__main__":
    main()
