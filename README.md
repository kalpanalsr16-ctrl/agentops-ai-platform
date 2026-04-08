# Lumen OS

**The control plane for AI agents — monitor, debug, and improve agent reliability in real time.**

🔗 **[Live Demo → lumen-os.netlify.app](https://lumen-os.netlify.app)**

---

## The Problem

AI agents are moving fast into production. The tooling has not kept up.

Teams running AI agents at scale face the same set of problems:

- Quality degrades silently — failures surface via user complaints, not alerts
- Root cause takes days — no attribution layer, just manual log-digging
- Model updates break things unpredictably — no regression safety net
- User feedback never reaches evaluation — the loop stays open
- Cost vs quality tradeoffs are invisible — decisions made by gut, not data

This is the early DevOps gap — production systems existed before the monitoring tools did. Lumen OS is built for this moment.

---

## The Solution

Lumen OS is an AI agent reliability platform. It sits above your agents as a control and observability layer — watching whether agents are performing well, safely, and cost-effectively, and surfacing exactly what to do when they aren't.

One surface. From detecting a failure to recommending the fix.

---

## Key Features

- **Incident Command** — P0/P1 incident queue with severity triage, root cause, and recommended action
- **Failure Attribution** — Automated root cause analysis: which agent, which change, with confidence score
- **Evaluation & Canary** — Regression safety net for model updates + A/B traffic splitting with live quality comparison
- **Observability** — Latency p95/p99, token volume, cost tracking, and a real-time alert feed
- **Feedback Loop** — Closes the gap between user thumbs-down signals and evaluation — the loop most platforms miss
- **Exec Briefing** — One-page narrative for leadership: platform risk, pending decisions, owners, and deadlines
- **Ask Lumen (AI assistant)** — Embedded AI advisor, context-aware per platform, for instant root cause Q&A

---

## How It Works

The dashboard simulates four real-world AI agent platforms. Switch between them using the top-bar selector — every metric, chart, incident, and decision updates instantly.

| Platform | Scenario |
|---|---|
| Microsoft M365 Copilot | Security P0 + Finance attribution failure across 1,284 agents |
| Intuit TurboTax & QuickBooks | Tax filing data staleness — P0 during peak season across 847 agents |
| Google AI Search & Workspace | Routing conflicts post Gemini 1.5 Pro update — 28,400 queries mis-routed |
| Uber Marketplace | Fraud detection blocking valid driver payouts — $1.2M/week revenue at risk |

Three role-based views are built in — switch between **PM**, **Dev**, and **Exec** to see the same platform through a different lens.

---

## Core Modules

Lumen OS is structured across five modules, covering the full AI agent lifecycle:

1. **Monitoring** — Live health, control bar metrics, and platform overview
2. **Debugging** — Trace & Replay, Failure Attribution, Observability
3. **Governance** — Risk Simulator, Evaluation Framework, Canary Deployment, Cost vs Quality
4. **Improvement** — Feedback Loop, Agent Comparison, System Intelligence
5. **Decision-making** — Exec Briefing, Execution Tracking

---

## What Lumen OS Is Not

- Not an AI model provider
- Not a workflow automation tool
- Not a data labeling platform

Lumen OS sits above these systems as a control and observability layer.

---

## Tech Approach

Built as a **single HTML file** — no framework, no npm, no build step. Vanilla JS, CSS custom properties, Chart.js for visualisation, and Google Fonts. Deployed via GitHub → Netlify CI/CD (push to main = live in ~30s).

The entire prototype was built with AI-assisted development (Claude) using a strict tokenisation discipline — scoped edits, no full-file rewrites, exact line targeting.

---

## Why This Project Is Interesting

Most AI observability tools today focus on LLM calls — token counts, latency, cost per request. That's infrastructure monitoring.

Lumen OS operates at a higher level: **agent reliability**. Did the agent make the right decision? Did it degrade after a model update? Did a routing conflict cause 28,000 users to get the wrong answer? These are product questions, not infra questions — and no existing tool answers them well.

The vision: the same way Datadog became the default observability layer for backend systems, Lumen OS is positioned to become the default control plane for AI agent platforms.

---

## Long-Term Vision

- Real-time monitoring across heterogeneous agent fleets
- Automated root cause detection — mean time to diagnosis under 1 hour
- Self-improving evaluation loops driven by production feedback
- Autonomous agent optimisation recommendations

The trajectory: from observability tool → to reliability platform → to the operating system for AI agents.

---

## Disclaimer

Lumen OS is a high-fidelity product prototype. All platform data is simulated. No real agent telemetry is connected. Built to demonstrate product thinking, UX design, and technical execution — not as a production-ready SaaS.

---

*Built by a PM. Shipped as a single file. Designed to start a conversation.*
