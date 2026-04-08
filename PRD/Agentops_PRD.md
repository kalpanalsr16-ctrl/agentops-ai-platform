# Lumen OS — Product Requirements Document

**Version:** 4.6  
**Status:** Live · [lumen-os.netlify.app](https://lumen-os.netlify.app)  
**Last updated:** April 2026  
**Owner:** Product

---

## TL;DR

Lumen OS is a control plane for AI agents — helping teams monitor, debug, and improve agent performance in real time.

As AI systems scale, teams struggle with silent failures, lack of observability, and slow debugging cycles. Lumen OS solves this by providing a unified layer for agent reliability, evaluation, and decision-making.

---

## Table of Contents

1. [What is Lumen OS?](#1-what-is-lumen-os)
2. [Why now](#2-why-now)
3. [The problem](#3-the-problem)
4. [What Lumen OS is not](#4-what-lumen-os-is-not)
5. [Target users & personas](#5-target-users--personas)
6. [Core modules](#6-core-modules)
7. [Platform simulation](#7-platform-simulation)
8. [The AI assistant (Ask Lumen)](#8-the-ai-assistant-ask-lumen)
9. [Real-time simulation](#9-real-time-simulation)
10. [The 4 recurring bugs](#10-the-4-recurring-bugs)
11. [Deployment & CI/CD](#11-deployment--cicd)
12. [AI-assisted development rules](#12-ai-assisted-development-rules)
13. [Product roadmap & known gaps](#13-product-roadmap--known-gaps)
14. [Long-term vision](#14-long-term-vision)

---

## 1. What is Lumen OS?

Lumen OS is an **AI Agent Reliability Operating System** — a dashboard that lets platform operators monitor, govern, debug, and improve AI agents at scale.

It sits *above* AI agents as an operating layer. Where individual agents do tasks (filing taxes, routing tickets, detecting fraud), Lumen OS watches whether those agents are doing their tasks well, safely, and cost-effectively.

**In one sentence:** Lumen OS is the control plane for AI agent platforms — from detecting a failure to recommending the exact fix.

---

## 2. Why Now

AI agents are rapidly moving from experimentation to production systems. However, the tooling ecosystem has not caught up:

- No unified observability layer
- No standard evaluation workflows  
- No real-time debugging interface

This creates a gap similar to early DevOps — where systems existed before monitoring tools did. Lumen OS is positioned to fill this gap.

---

## 3. The Problem

Enterprise AI platforms face a shared operational crisis that no existing tool solves cleanly:

| Problem | What happens today |
|---|---|
| Agent quality degrades silently | Teams discover failures via user complaints, not monitoring |
| Root cause takes days | No automated attribution — engineers manually comb through logs |
| Safety incidents have no command center | P0 failures handled ad-hoc across Slack, Jira, and email |
| Model updates break things unexpectedly | No regression safety net between model changes and production |
| Cost vs quality tradeoffs are invisible | PMs and engineers guess instead of having data |
| Feedback from users never reaches eval | Thumbs-down signals die in analytics — the loop never closes |

Lumen OS responds to all six gaps — giving operators a single surface to go from "something is wrong" to "here is the exact agent, the exact cause, and the exact fix" in under a working day.

---

## 4. What Lumen OS Is Not

- Not an AI model provider
- Not a workflow automation tool
- Not a data labeling platform

Lumen OS sits *above* these systems as a control and observability layer.

---

## 5. Target Users & Personas

The dashboard has a **persona switcher** (PM / Dev / Exec) in the top bar. Clicking it navigates directly to the most relevant view for that role.

### PM (default)
Landing view: **Overview**. Sees business impact first — revenue at risk, users impacted, churn risk — then the live agent health table. Primary job: decide which agents to approve, block, or prioritise for investigation.

### Dev
Landing view: **Developer Sandbox**. Sees technical metrics: latency distributions, trace replays, model scoring, canary deployments. Primary job: diagnose why an agent is failing and fix it before re-submitting.

### Exec
Landing view: **Exec Briefing**. One-page narrative summary: platform health, 3–5 pending decisions with business impact, a quality-vs-rejection trend chart, and a decision table with owners and deadlines. Primary job: understand platform risk at a glance and approve high-stakes decisions.

---

## 6. Core Modules

Lumen OS is structured across 5 core modules, each supporting a key stage in the AI agent lifecycle:

1. **Monitoring** — Overview dashboard, live control bar metrics, Observability feed
2. **Debugging** — Trace & Replay, Failure Attribution, Incident Command
3. **Governance** — Risk Simulator, Evaluation Framework, Canary Deployment, Cost vs Quality
4. **Improvement** — Feedback Loop, Agent Comparison, System Intelligence, Execution Tracking
5. **Decision-making** — Exec Briefing, Developer Sandbox, role-based views

> For the full list of 18 view IDs and nav keys, see the [Appendix](#appendix-view-id--nav-key-reference).

---

## 7. Platform Simulation

Lumen OS simulates four real-world AI agent platforms, switchable via the top-bar dropdown. Switching platforms updates every metric, chart, incident, and decision across the entire dashboard instantly.

| Platform | Scenario |
|---|---|
| **A** — Microsoft M365 Copilot Agent Store | Security P0 + Finance attribution failure · 1,284 agents |
| **B** — Intuit TurboTax & QuickBooks AI | Tax filing data staleness — P0 during peak season · 847 agents |
| **C** — Google AI Search & Workspace | Routing conflicts post Gemini 1.5 Pro update — 28,400 queries mis-routed · 3,847 agents |
| **D** — Uber Marketplace Decision Systems | Fraud detection blocking valid driver payouts — $1.2M/week at risk · 2,140 agents |

All data is hardcoded but dynamically rendered via the `setCompany(co)` function, which is also the intended integration point for a real data API in production.

### The three-part data rule

Every platform-specific value requires all three of the following — missing any one causes silent failure:

1. An `id="xxx"` on the HTML element
2. A value in all 4 platform entries in the `CONFIGS` object
3. A `setEl('xxx', c.value)` call in `setCompany()`

---

## 8. The AI Assistant (Ask Lumen)

The **Ask Lumen** panel is an embedded AI assistant powered by the Anthropic API. It is context-aware per platform — each platform injects a tailored system prompt covering its agents, active incidents, and live metrics. This means Ask Lumen gives platform-specific answers, not generic responses.

Example queries it handles: "Why is latency spiking?", "Which agent should I investigate first?", "What's the revenue risk if I don't act on the current P1?"

---

## 9. Real-Time Simulation

A `setInterval` ticker fires every 4 seconds, making small random adjustments to live metrics (agent count, latency, cost, quality score). This keeps the dashboard feeling alive without requiring a backend. The ticker respects the active platform and stays within realistic bounds for each scenario.

---

## 10. The 4 Recurring Bugs

These bugs have appeared multiple times during development. Every contributor must internalise them before touching the file.

### Bug 1 — Blank screen from view N onwards
**Cause:** An unclosed `<div>` inside view N-1. The browser nests all subsequent views inside it; when N-1 hides, everything hides too.  
**Fix:** Count `<div` vs `</div>` inside every edited view. They must be equal.

### Bug 2 — A component appears on every page
**Cause:** HTML placed between `<div class="view">` wrappers, outside any view. `.view { display: none }` cannot hide it.  
**Rule:** Every element inside `<main>` must be inside a `.view` div. No exceptions.

### Bug 3 — Platform data doesn't change when switching A/B/C/D
**Cause:** Missing `id` on element, missing value in `CONFIGS`, or missing `setEl()` call in `setCompany()`.  
**Rule:** All three parts of the data rule are required (see Section 7).

### Bug 4 — Navigation clicks do nothing
**Cause:** A second `nav()` function was added (overwrites the first), or `onclick="nav('xxx')"` was used on a sidebar item.  
**Rule:** One `nav()` function only. Sidebar items always use `data-nav='xxx'`, never inline `onclick`.

---

## 11. Deployment & CI/CD

- **Repository:** GitHub (`main` branch)
- **Hosting:** Netlify
- **Deploy trigger:** Push to `main` → Netlify auto-deploys in ~30 seconds
- **Build:** None — Netlify serves `index.html` directly

> ⚠️ **Never drag-and-drop** a file into Netlify manually. Always push to GitHub. Manual deploys are overwritten by the next CI push.

There is no staging environment. Test locally by opening `index.html` in a browser before pushing.

---

## 12. AI-Assisted Development Rules

When using Claude, Cursor, or similar tools to modify this file:

1. Never output the full file for a small change — only the changed section plus 3 lines of context
2. For HTML changes: only the affected view div
3. For JS changes: only the changed function
4. For CSS changes: only the new rules to append
5. For data changes: only the new `CONFIGS` properties
6. Always state exact line numbers before showing code (`Replace lines 1400–1407 with:`)
7. Always read the current state before editing — never edit from memory
8. If a change touches more than 3 views, output the full file and state line count before and after

> For detailed implementation patterns, CSS token reference, chart inventory, and navigation internals — see `ARCHITECTURE.md`.

---

## 13. Product Roadmap & Known Gaps

### Known technical debt
- **Duplicate nav initialisation:** `initSidebarNav()` and an orphan `nav()` script need consolidation
- **Orphan `#incidents` div:** A test element outside the view system — needs removal or proper integration
- **Chart re-render on platform switch:** Some charts don't re-render when switching platforms mid-session
- **Hardcoded "What changed" timeline:** Should be generated from a `CO_EVENTS` data table

### Missing features (v5 scope)
- **Real data integration** — `setCompany()` is the integration point; swap `CONFIGS` mock objects for API responses
- **Agent submission flow** — Submit modal with schema validation
- **Push notifications** — Alerts for new P0/P1 incidents without requiring a page refresh
- **Multi-tenancy** — Platform selector becomes authentication-scoped in production
- **PDF export** — Exec Briefing export for board packets
- **Mobile optimisation** — Dense views (attribution, trace) need mobile-specific layouts

---

## 14. Long-Term Vision

Lumen OS evolves into a full-stack agent reliability platform:

- Real-time monitoring across heterogeneous agent fleets
- Automated root cause detection — mean time to diagnosis under 1 hour
- Self-improving evaluation loops driven by production feedback signals
- Autonomous agent optimisation recommendations

Similar to how Datadog and Grafana became essential infrastructure for backend systems, Lumen OS aims to become the default observability and control layer for AI agent platforms.

---

## Appendix: View ID → Nav Key Reference

| View element ID | Nav key | Module |
|---|---|---|
| `view-overview` | `overview` | Monitoring |
| `view-obs` | `obs` | Monitoring |
| `view-trace` | `trace` | Debugging |
| `view-attr` | `attr` | Debugging |
| `view-incidents` | `incidents` | Debugging |
| `view-risk` | `risk` | Governance |
| `view-eval` | `eval` | Governance |
| `view-canary` | `canary` | Governance |
| `view-cost` | `cost` | Governance |
| `view-feedback` | `feedback` | Improvement |
| `view-compare` | `compare` | Improvement |
| `view-intel` | `intel` | Improvement |
| `view-execution` | `execution` | Improvement |
| `view-exec` | `exec` | Decision-making |
| `view-devsb` | `devsb` | Decision-making |
| `view-arch` | `arch` | Reference |
| `view-prd` | `prd` | Reference |
| `view-schema` | `schema` | Reference |

---

*For any discrepancy between this document and `index.html`, the file is authoritative.*
