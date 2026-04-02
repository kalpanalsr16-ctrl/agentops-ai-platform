
// ═══════════════════════════════════
// COMPANY CONFIGS
// ═══════════════════════════════════
const CONFIGS = {
  ms:{
    name:'Platform A', label:'Microsoft · M365 Copilot Agent Store',
    agentCount:1284, agentDelta:'↑ +12% this month',
    rejRate:'38%', rejDelta:'↑ +7pp · target <25%',
    qualScore:'82%', qualDelta:'↓ below 85% target',
    slaVal:'6.2d', slaDelta:'↑ SLA 5d · 23 overdue',
    latency:'1.8s', latencyNote:'within 2.0s SLA',
    cost:'$2.40', costDelta:'↓ −$0.12 this week',
    tokens:'4.2B', tokensDelta:'↑ +18% vs last week',
    incidents:3, incidentDetail:'2 P0 · 1 P1',
    sysStatus:'Degraded', sysStatusClass:'status-warn', dotClass:'amber',
    revenueRisk:'$847K', usersImpacted:'4,290', churnRisk:'Medium',
    revenueRiskSub:'23 enterprise agents past SLA · 8 blocked in security review · avg deal $37K',
    usersImpactedSub:'1,840 received incorrect response · 2,450 degraded experience · 3.8% thumbs-down',
    churnRiskSub:'Developer response rate 71% (target 85%). 3 enterprise partners SLA-breached.',
    bannerText:'<strong>Delist 2 live agents with P0 safety failures.</strong> Prompt injection confirmed. 23 submissions past SLA — expedite 8 enterprise agents. Rejection rate tracking to 45% by Thursday.',
    top3:[
      {color:'r',title:'Confirm delist — Security Agent + Finance Assistant v1',why:'P0 safety violations live in production. 4,290 users exposed. Auto-delist staged — needs human sign-off within 2h.',link:'incidents'},
      {color:'a',title:'Approve manifest linter build (2 sprints)',why:'Eliminates scope declaration failures — #1 rejection cause (34%). Saves ~934 rejections/year.',link:'execution'},
      {color:'b',title:'Apply temperature override to Finance Assistant v1 (T=0.2)',why:'Root cause confirmed (91% confidence): model version change → hallucination 2.1% → 5.8%.',link:'attr'}
    ],
    categories:['Productivity','IT & Ops','HR & People','Finance','Sales & CRM','Industry'],
    aiCtx:'You are Lumen, embedded in Microsoft M365 Copilot Agent Store (Platform A). 1,284 live agents. 38% rejection rate (target <25%). 2 P0 safety incidents: Security Agent prompt injection, Finance Assistant out-of-scope advice. 23 overdue submissions, $847K revenue at risk. Top issues: scope declaration failures 34%, routing conflict IT & Ops (overlap 0.87), Finance Assistant hallucination from gpt-4o model update (91% confidence attribution). Answer specifically about M365 Copilot agents, enterprise IT/HR/Finance use cases, and Microsoft platform dynamics.'
  },
  intuit:{
    name:'Platform B', label:'Intuit · TurboTax & QuickBooks AI',
    agentCount:847, agentDelta:'↑ +8% this month',
    rejRate:'19%', rejDelta:'↑ +4pp · target <10%',
    qualScore:'84%', qualDelta:'↓ below 88% target',
    slaVal:'2.4d', slaDelta:'↑ SLA 2d · 12 overdue',
    latency:'2.1s', latencyNote:'↑ above 2.0s SLA',
    cost:'$1.80', costDelta:'↑ +$0.22 this week',
    tokens:'1.9B', tokensDelta:'↑ +34% tax season spike',
    incidents:2, incidentDetail:'1 P0 · 1 P1',
    sysStatus:'Warning', sysStatusClass:'status-warn', dotClass:'amber',
    revenueRisk:'$214K', usersImpacted:'1,840', churnRisk:'Low',
    revenueRiskSub:'12 agents past 2-day SLA · Tax season peak · avg enterprise deal $18K',
    usersImpactedSub:'920 received incorrect 2025 tax guidance · 920 hit compliance-risk responses',
    churnRiskSub:'Developer response rate 79% (target 85%). 1 enterprise client escalation open.',
    bannerText:'<strong>P0: Tax Filing Agent v2.3 using stale 2024 IRS bracket data.</strong> 920 users received incorrect 2025 tax guidance. Compliance and regulatory risk. IRS updated income brackets Jan 2025 — knowledge base not refreshed.',
    top3:[
      {color:'r',title:'Remediate Tax Filing Agent — stale 2024 IRS bracket data',why:'IRS updated 2025 income brackets. Agent still using 2024 rates. 920 users got incorrect guidance. SOX/IRS compliance risk.',link:'incidents'},
      {color:'a',title:'Fix Payroll Agent hallucination rate — currently 6.1%',why:'Payroll Agent hallucination 3.1pp above 3% threshold. Root cause: gpt-4o temperature drift on multi-state CA+TX calculations.',link:'attr'},
      {color:'b',title:'Unblock 12 overdue submissions before tax season peak',why:'Tax season starts in 3 weeks. 12 agents waiting avg 2.4 days. Token volume already up 34%.',link:'execution'}
    ],
    categories:['Tax filing','Bookkeeping','Payroll','Invoicing','Credit','Compliance'],
    aiCtx:'You are Lumen, embedded in Intuit TurboTax & QuickBooks AI platform (Platform B). 847 financial AI assistants. 19% rejection rate (target <10%). P0: Tax Filing Agent v2.3 using stale 2024 IRS bracket data — 920 users affected, SOX and IRS compliance risk. Tax season peak approaching — token volume up 34%. Payroll Calculator hallucination rate 6.1% (threshold 3%) on multi-state CA+TX calculations. Answer specifically about tax compliance, IRS bracket rules, QuickBooks bookkeeping, payroll multi-state calculations, and financial regulatory risk.'
  },
  google:{
    name:'Platform C', label:'Google · AI Search & Workspace Agents',
    agentCount:3847, agentDelta:'↑ +21% this month',
    rejRate:'12%', rejDelta:'↑ +2pp this week',
    qualScore:'89%', qualDelta:'↓ below 92% target',
    slaVal:'1.9s', slaDelta:'↑ SLA breach — target 1.8s',
    latency:'1.9s', latencyNote:'↑ SLA breach — target 1.8s',
    cost:'$0.94', costDelta:'↓ −$0.08 this week',
    tokens:'18.7B', tokensDelta:'Stable · within budget',
    incidents:3, incidentDetail:'0 P0 · 3 P1',
    sysStatus:'Warning', sysStatusClass:'status-warn', dotClass:'amber',
    revenueRisk:'$0', usersImpacted:'28,400', churnRisk:'Low',
    revenueRiskSub:'No SLA revenue risk · 3 routing conflicts degrading query resolution rate in Assistant',
    usersImpactedSub:'28,400 queries mis-routed this week · query resolution rate −1.2pp from baseline',
    churnRiskSub:'No partner churn risk. Internal quality miss. Search satisfaction score −0.8pp.',
    bannerText:'<strong>3 routing conflicts in Assistant category — 28,400 queries mis-routed this week.</strong> Query resolution rate dropped 1.2pp. Latency p95 at 1.9s — SLA breach at 1.8s. Search accuracy dropped 1.8pp following Gemini 1.5 Pro model update.',
    top3:[
      {color:'r',title:'Resolve 3 routing conflicts in Assistant category',why:'Overlap scores 0.86–0.91 across 3 agent pairs. 28,400 queries mis-routed. Resolution rate −1.2pp. 1,840 users manually overriding.',link:'attr'},
      {color:'a',title:'Investigate Search accuracy drop — post Gemini 1.5 Pro update',why:'Search accuracy −1.8pp since model update. 91% confidence: model_change attribution. Needs 200-query benchmark rerun.',link:'eval'},
      {color:'b',title:'Reduce latency p95 below 1.8s SLA — currently 1.9s',why:'SLA breach active. p99 at 3.1s. Query volume up 21%. Assistant routing inefficiency adding ~120ms overhead.',link:'obs'}
    ],
    categories:['Search','Assistant','Workspace','Cloud','Maps','Shopping'],
    aiCtx:'You are Lumen, embedded in Google AI Search & Workspace Agents (Platform C). 3,847 agents across Search, Assistant, Workspace, Cloud, Maps, Shopping. 12% rejection rate. 3 routing conflicts in Assistant — 28,400 queries mis-routed. Latency p95 1.9s exceeds 1.8s SLA. Search accuracy −1.8pp post Gemini 1.5 Pro update. Token volume 18.7B/day. Answer specifically about Google Search quality, Workspace agent conflicts, Gemini model accuracy, latency at Google scale, and query resolution rate optimization.'
  },
  uber:{
    name:'Platform D', label:'Uber · Marketplace Decision Systems',
    agentCount:2140, agentDelta:'↑ +6% this month',
    rejRate:'8%', rejDelta:'↑ fraud false positives rising',
    qualScore:'91%', qualDelta:'↓ below 94% target',
    slaVal:'480ms', slaDelta:'↑ 20ms from 500ms hard limit',
    latency:'480ms', latencyNote:'↑ 20ms from 500ms hard limit',
    cost:'$3.10', costDelta:'↑ +$0.44 surge pricing load',
    tokens:'6.8B', tokensDelta:'↑ +12% surge pricing load',
    incidents:2, incidentDetail:'0 P0 · 2 P1',
    sysStatus:'Warning', sysStatusClass:'status-warn', dotClass:'amber',
    revenueRisk:'$1.2M', usersImpacted:'9,200', churnRisk:'High',
    revenueRiskSub:'340 valid driver payouts blocked/day · avg payout $35 · 7-day backlog = $83K blocked',
    usersImpactedSub:'5,800 drivers hit false-positive fraud flags · 3,400 riders got incorrect surge estimates',
    churnRiskSub:'Driver NPS dropped 4 points. 340 payout blocks/day = direct driver churn. High urgency.',
    bannerText:'<strong>Fraud Detection Agent blocking 340 valid driver payouts per day.</strong> $1.2M/week revenue impact. Driver NPS dropped 4 points. Latency p95 at 480ms — only 20ms from hard 500ms SLA. Surge Pricing accuracy −2pp affecting 3,400 riders.',
    top3:[
      {color:'r',title:'Recalibrate Fraud Detection — 340 false-positive payout blocks/day',why:'340 valid driver payouts blocked daily. $1.2M/week revenue at risk. Driver NPS −4. Root cause: precision/recall threshold miscalibrated post gpt-4o update.',link:'incidents'},
      {color:'a',title:'Add latency buffer — p95 at 480ms vs 500ms hard SLA',why:'Only 20ms from hard SLA. Any traffic spike causes immediate failure. Real-time marketplace cannot tolerate this.',link:'obs'},
      {color:'b',title:'Fix Surge Pricing Engine — 3,400 riders affected in NYC/LA/CHI',why:'Surge accuracy −2pp post model update. Rider complaints +18%. Event-season distribution shift suspected.',link:'attr'}
    ],
    categories:['Driver support','Rider support','Surge pricing','Route optimization','Fraud detection','Eats'],
    aiCtx:'You are Lumen, embedded in Uber Marketplace Decision Systems (Platform D). 2,140 real-time decision agents. 500ms is a HARD SLA — exceeding it causes trip booking failures. CRITICAL: Fraud Detection Agent blocking 340 valid driver payouts/day ($1.2M/week). Driver NPS dropped 4 points. Surge Pricing accuracy −2pp affecting 3,400 riders in NYC/LA/CHI. Latency p95 480ms — only 20ms buffer. Token volume 6.8B/day (+12% surge load). Answer specifically about driver/rider marketplace dynamics, fraud detection precision/recall tradeoffs, surge pricing algorithm accuracy, trip completion rate, and the 500ms hard SLA constraint.'
  }
};

// ═══════════════════════════════════
// PER-COMPANY DATA TABLES
// All agent tables, incidents, attribution, alerts switch on setCompany()
// ═══════════════════════════════════
const CO_AGENTS = {
  ms:[
    {name:'Service IT Agent v3.2',cat:'IT & Ops',q:94,status:'healthy',risk:'low',last:'2h ago',decision:'—'},
    {name:'HR Policy Bot',cat:'HR & People',q:91,status:'healthy',risk:'low',last:'3h ago',decision:'—'},
    {name:'Procurement v2',cat:'Finance',q:74,status:'degrading',risk:'high',last:'1h ago',decision:'Investigate attribution'},
    {name:'IT Helpdesk v2.1',cat:'IT & Ops',q:77,status:'drifted',risk:'high',last:'30m ago',decision:'Resolve routing conflict'},
    {name:'Finance Assistant v1',cat:'Finance',q:71,status:'critical',risk:'critical',last:'15m ago',decision:'Apply temp override'},
    {name:'Security Agent',cat:'IT & Ops',q:null,status:'safety',risk:'p0',last:'10m ago',decision:'Delist immediately'},
    {name:'Expense Bot',cat:'Finance',q:82,status:'new',risk:'med',last:'8h ago',decision:'Monitor 7 days'},
  ],
  intuit:[
    {name:'Tax Filing Agent v2.3',cat:'Tax filing',q:68,status:'safety',risk:'p0',last:'2h ago',decision:'Refresh IRS 2025 data NOW'},
    {name:'QuickBooks Advisor',cat:'Bookkeeping',q:91,status:'healthy',risk:'low',last:'4h ago',decision:'—'},
    {name:'Payroll Calculator v3',cat:'Payroll',q:72,status:'degrading',risk:'high',last:'45m ago',decision:'Fix multi-state hallucination'},
    {name:'Invoice Assistant',cat:'Invoicing',q:88,status:'healthy',risk:'low',last:'6h ago',decision:'—'},
    {name:'Credit Advisor',cat:'Credit',q:79,status:'drifted',risk:'med',last:'3h ago',decision:'Monitor regulation changes'},
    {name:'Compliance Checker v2',cat:'Compliance',q:85,status:'healthy',risk:'low',last:'1h ago',decision:'—'},
    {name:'TurboTax Self-Employed',cat:'Tax filing',q:83,status:'new',risk:'med',last:'30m ago',decision:'Watch — tax season surge'},
  ],
  google:[
    {name:'Search Quality Agent v4',cat:'Search',q:91,status:'healthy',risk:'low',last:'5m ago',decision:'—'},
    {name:'Assistant Planner',cat:'Assistant',q:82,status:'drifted',risk:'high',last:'12m ago',decision:'Resolve routing conflict'},
    {name:'Workspace Summarizer',cat:'Workspace',q:87,status:'degrading',risk:'med',last:'28m ago',decision:'Narrow capability declaration'},
    {name:'Docs Q&A Agent',cat:'Workspace',q:93,status:'healthy',risk:'low',last:'1h ago',decision:'—'},
    {name:'Maps Local AI',cat:'Maps',q:96,status:'healthy',risk:'low',last:'2h ago',decision:'—'},
    {name:'Shopping Recommender',cat:'Shopping',q:88,status:'healthy',risk:'low',last:'3h ago',decision:'—'},
    {name:'Cloud Ops Assistant',cat:'Cloud',q:78,status:'degrading',risk:'high',last:'40m ago',decision:'Re-eval post Gemini update'},
  ],
  uber:[
    {name:'Fraud Detection v4.1',cat:'Fraud detection',q:71,status:'degrading',risk:'high',last:'2m ago',decision:'Recalibrate precision threshold'},
    {name:'Surge Pricing Engine',cat:'Surge pricing',q:84,status:'drifted',risk:'med',last:'5m ago',decision:'Investigate accuracy drop'},
    {name:'Driver Support Bot',cat:'Driver support',q:89,status:'healthy',risk:'low',last:'15m ago',decision:'—'},
    {name:'Rider Assistant',cat:'Rider support',q:92,status:'healthy',risk:'low',last:'8m ago',decision:'—'},
    {name:'Route Optimizer v3',cat:'Route optimization',q:96,status:'healthy',risk:'low',last:'3m ago',decision:'—'},
    {name:'Eats Recommender',cat:'Eats',q:88,status:'healthy',risk:'low',last:'20m ago',decision:'—'},
    {name:'ETA Predictor v2',cat:'Route optimization',q:78,status:'degrading',risk:'med',last:'10m ago',decision:'Monitor surge load impact'},
  ]
};

const CO_INCIDENTS = {
  ms:[
    {id:'INC-2847',sev:'p0',sevLabel:'P0',title:'Security Agent — prompt injection vulnerability',cause:'Safety / Prompt injection',root:'Agent responds to injected instructions via role-play framing. Multi-step agent in IT & Ops.',impact:'~2,400 sessions exposed. Auto-delist staged, awaiting confirmation.',actions:['delist','disable','rollback'],expanded:true,meta:{sessions:'2,400',detected:'09:14 today',age:'3h open',model:'gpt-4o'}},
    {id:'INC-2841',sev:'p0',sevLabel:'P0',title:'Finance Assistant v1 — safety eval failure',cause:'Safety / Out-of-scope financial advice',root:'Agent providing mortgage and investment advice outside declared capability. 3/18 red-team prompts succeeded.',impact:'~890 sessions with out-of-scope responses. Developer notified.',actions:['disable','updateprompt'],expanded:false,meta:{sessions:'890',detected:'07:32 today',age:'4h open',model:'gpt-4o'}},
    {id:'INC-2836',sev:'p1',sevLabel:'P1',title:'IT Helpdesk v2.1 — routing conflict degradation',cause:'Routing conflict',root:'Intent overlap 0.87 with Service IT Agent v3.2. Routing accuracy 94% → 77%.',impact:'Quality degradation, not safety. Developer notified.',actions:['rollback','updateprompt'],expanded:false,meta:{sessions:'420 misrouted',detected:'14:20 yesterday',age:'1d open',model:'gpt-4o-mini'}}
  ],
  intuit:[
    {id:'INC-INT-041',sev:'p0',sevLabel:'P0',title:'Tax Filing Agent v2.3 — stale IRS 2025 bracket data',cause:'Knowledge staleness / Compliance failure',root:'IRS updated 2025 income brackets (22%→24% at $89K). Agent KB last refreshed Oct 2024. Users in $89K–$100K bracket received wrong rate guidance.',impact:'920 users received incorrect 2025 tax guidance. IRS/SOX compliance exposure.',actions:['disable','updateprompt'],expanded:true,meta:{sessions:'920',detected:'06:10 today',age:'5h open',model:'gpt-4o'}},
    {id:'INC-INT-039',sev:'p1',sevLabel:'P1',title:'Payroll Calculator v3 — multi-state hallucination spike',cause:'Quality / Hallucination',root:'Hallucination rate 6.1% (threshold 3%) on multi-state payroll. gpt-4o temperature change affecting CA+TX combined scenarios.',impact:'~340 payroll calculations may be incorrect. Developer alerted.',actions:['updateprompt','rollback'],expanded:false,meta:{sessions:'340',detected:'Mar 11',age:'3d open',model:'gpt-4o'}}
  ],
  google:[
    {id:'INC-G-7214',sev:'p1',sevLabel:'P1',title:'Assistant Planner — routing conflict with Workspace Summarizer',cause:'Routing conflict',root:'Both agents declare "meeting summarization". Overlap score 0.89. 8,400 queries routed to wrong agent.',impact:'8,400 mis-routed queries. Resolution rate −1.2pp.',actions:['updateprompt','rollback'],expanded:true,meta:{sessions:'8,400',detected:'Mar 13',age:'2d open',model:'Gemini 1.5 Pro'}},
    {id:'INC-G-7208',sev:'p1',sevLabel:'P1',title:'Cloud Ops Assistant — accuracy drop post Gemini update',cause:'Model change',root:'Cloud Ops accuracy 91% → 78% after Gemini 1.5 Pro update. GCP API syntax responses contain outdated deprecations.',impact:'~2,200 developer queries received outdated API guidance.',actions:['rollback','updateprompt'],expanded:false,meta:{sessions:'2,200',detected:'Mar 12',age:'3d open',model:'Gemini 1.5 Pro'}},
    {id:'INC-G-7201',sev:'p1',sevLabel:'P1',title:'Platform-wide latency p95 breach — 1.9s vs 1.8s SLA',cause:'Latency / Infrastructure',root:'Agent routing layer adds ~120ms overhead during peak. 18.7B token throughput straining inference.',impact:'All agents affected. p99 at 3.1s. User satisfaction degrading.',actions:['disable'],expanded:false,meta:{sessions:'All agents',detected:'Mar 14',age:'1d open',model:'All models'}}
  ],
  uber:[
    {id:'INC-UBR-892',sev:'p1',sevLabel:'P1',title:'Fraud Detection v4.1 — false positive rate elevated',cause:'Model calibration / Threshold shift',root:'Precision/recall threshold miscalibrated after gpt-4o update. False positive rate 1.8% → 4.2%. New-market drivers disproportionately flagged.',impact:'340 valid payout blocks/day. $83K/week blocked. Driver NPS −4 points.',actions:['updateprompt','rollback'],expanded:true,meta:{sessions:'340/day',detected:'Mar 12',age:'3d open',model:'gpt-4o'}},
    {id:'INC-UBR-889',sev:'p1',sevLabel:'P1',title:'Surge Pricing Engine — accuracy dropped 2pp',cause:'Distribution shift / Event surge season',root:'Spring event season changed query distribution. Model trained on winter 2024 baseline. Surge multipliers 8–12% too high in NYC/LA/CHI.',impact:'3,400 riders received inflated surge estimates. Rider complaints +18%.',actions:['rollback','updateprompt'],expanded:false,meta:{sessions:'3,400',detected:'Mar 13',age:'2d open',model:'gpt-4o'}}
  ]
};

const CO_ATTR = {
  ms:[
    {name:'Finance Assistant v1',before:84,after:71,delta:-13,cause:'model_change',causeLabel:'Model version change',causeColor:'cr',confidence:91,detail:'Accuracy dropped 13pp over 3 weeks. Onset Feb 28 — correlates with model update (gpt-4o-mini → gpt-4o). Hallucination rate on compound tax calculations rose 2.1% → 5.8%.',action:'Apply temperature override (T=0.2) for financial calculation tasks. Re-run full 50-prompt eval suite. Timeline: 2–3 days.',timeline:[{t:'Feb 28',e:'Model updated — gpt-4o-mini → gpt-4o',c:'tld-r'},{t:'Mar 1',e:'First hallucination reports in thumbs-down data',c:'tld-a'},{t:'Mar 3',e:'Statistical anomaly: thumbs-down 2.1× baseline',c:'tld-a'},{t:'Mar 7',e:'Attribution correlates drop with model changelog',c:'tld-b'},{t:'Mar 10',e:'Confirmed — model_change, 91% confidence',c:'tld-g'}]},
    {name:'IT Helpdesk v2.1',before:88,after:77,delta:-11,cause:'routing_conflict',causeLabel:'Routing conflict',causeColor:'cp',confidence:87,detail:'Routing accuracy 94% → 77% after Service IT Agent v3.2 published. Both declare "IT helpdesk support". Overlap: 0.87 (threshold 0.85).',action:'Narrow IT Helpdesk to "M365 IT support". Re-run collision detection. Timeline: 1 day.',timeline:[{t:'Mar 5',e:'Service IT Agent v3.2 published in IT & Ops',c:'tld-b'},{t:'Mar 5',e:'Routing mismatch rate rising',c:'tld-a'},{t:'Mar 7',e:'Overlap score 0.87 detected',c:'tld-a'},{t:'Mar 8',e:'Developer notified',c:'tld-b'},{t:'Mar 10',e:'Confirmed — routing_conflict, 87% confidence',c:'tld-g'}]},
    {name:'Procurement v2',before:91,after:74,delta:-17,cause:'prompt_shift',causeLabel:'Prompt distribution shift',causeColor:'ca',confidence:78,detail:'Procurement queries now include vendor risk and compliance language outside training distribution. Embedding distance 0.31 (threshold 0.25).',action:'Expand capability declaration. Add 15 vendor risk prompts to eval library. Timeline: 5–7 days.',timeline:[{t:'Feb 15',e:'Company procurement policy updated',c:'tld-b'},{t:'Feb 20',e:'New query cluster in traffic',c:'tld-b'},{t:'Mar 1',e:'Embedding distance exceeds threshold',c:'tld-a'},{t:'Mar 6',e:'Statistical trigger fires',c:'tld-a'},{t:'Mar 10',e:'Confirmed — prompt_shift, 78% confidence',c:'tld-g'}]}
  ],
  intuit:[
    {name:'Tax Filing Agent v2.3',before:94,after:68,delta:-26,cause:'staleness',causeLabel:'Knowledge staleness',causeColor:'cr',confidence:96,detail:'IRS published updated 2025 income brackets Jan 15, 2025. Agent KB last refreshed Oct 2024. The $89K threshold change causes incorrect tax rate for users in the 22%/24% bracket transition. 920 affected queries identified.',action:'Immediate: disable Tax Filing Agent v2.3. Refresh KB with IRS 2025 Publication 15-T. Re-eval with 25 bracket-specific test prompts. Timeline: 4–6 hours.',timeline:[{t:'Jan 15, 2025',e:'IRS published 2025 income tax brackets',c:'tld-b'},{t:'Oct 2024',e:'Agent KB last refreshed — BEFORE IRS update',c:'tld-r'},{t:'Mar 10',e:'User complaints: incorrect rate for $89K–$100K bracket',c:'tld-a'},{t:'Mar 14, 06:10',e:'P0 flagged — 920 affected sessions confirmed',c:'tld-r'},{t:'Mar 14, 08:00',e:'Confirmed — staleness, 96% confidence',c:'tld-g'}]},
    {name:'Payroll Calculator v3',before:91,after:72,delta:-19,cause:'model_change',causeLabel:'Model temperature change',causeColor:'ca',confidence:82,detail:'Hallucination rate 2.4% → 6.1% after gpt-4o temperature parameter changed. CA+TX combined scenarios most affected — agent fabricates state-specific deductions.',action:'Apply temperature override (T=0.1) for multi-state payroll tasks. Add 20 CA+TX scenario prompts to eval library. Timeline: 1–2 days.',timeline:[{t:'Mar 8',e:'gpt-4o temperature parameter changed',c:'tld-r'},{t:'Mar 9',e:'Thumbs-down spike on payroll calculations',c:'tld-a'},{t:'Mar 11',e:'Statistical trigger: hallucination 2× baseline',c:'tld-a'},{t:'Mar 12',e:'Developer notified',c:'tld-b'},{t:'Mar 13',e:'Confirmed — model_change, 82% confidence',c:'tld-g'}]}
  ],
  google:[
    {name:'Assistant Planner',before:94,after:82,delta:-12,cause:'routing_conflict',causeLabel:'Routing conflict',causeColor:'cp',confidence:91,detail:'Workspace Summarizer published Mar 12 with overlapping "meeting summarization" capability. Overlap 0.89. 8,400 queries mis-routed in 48h.',action:'Narrow Assistant Planner to "scheduling and task planning". Exclude "does not summarize meeting content". Re-run collision detection. Timeline: 6 hours.',timeline:[{t:'Mar 12',e:'Workspace Summarizer published with overlap capability',c:'tld-b'},{t:'Mar 12',e:'Routing mismatch rising in Assistant category',c:'tld-a'},{t:'Mar 13',e:'Overlap score 0.89 detected',c:'tld-a'},{t:'Mar 13',e:'Both developers notified',c:'tld-b'},{t:'Mar 14',e:'Confirmed — routing_conflict, 91% confidence',c:'tld-g'}]},
    {name:'Cloud Ops Assistant',before:91,after:78,delta:-13,cause:'model_change',causeLabel:'Model update regression',causeColor:'cr',confidence:88,detail:'Gemini 1.5 Pro update changed how GCP SDK documentation is handled. Deprecated API syntax (v1 → v2) cited incorrectly in 18% of API-related responses.',action:'Add grounding instruction: "Use only GCP docs dated 2024 or later." Add 30 GCP v2 SDK test prompts. Timeline: 2 days.',timeline:[{t:'Mar 11',e:'Gemini 1.5 Pro deployed',c:'tld-b'},{t:'Mar 12',e:'Developer complaints: outdated API syntax',c:'tld-a'},{t:'Mar 13',e:'Accuracy 2.1σ below baseline',c:'tld-a'},{t:'Mar 13',e:'Attribution correlates with model changelog',c:'tld-b'},{t:'Mar 14',e:'Confirmed — model_change, 88% confidence',c:'tld-g'}]}
  ],
  uber:[
    {name:'Fraud Detection v4.1',before:94,after:71,delta:-23,cause:'model_change',causeLabel:'Model calibration shift',causeColor:'cr',confidence:89,detail:'False positive rate 1.8% → 4.2% after gpt-4o update changed fraud classification decision boundary. New-market drivers (cities added last 3 months) disproportionately flagged — their trip patterns appear "unusual" vs established market baselines.',action:'Adjust fraud threshold from 0.72 → 0.68 for drivers in markets <90 days old. Re-train on new-market cohort. Run 48h shadow mode before re-deploy. Timeline: 24–48h.',timeline:[{t:'Mar 10',e:'gpt-4o update deployed to Fraud Detection',c:'tld-b'},{t:'Mar 11',e:'Driver payout block rate rising — ops flagged',c:'tld-a'},{t:'Mar 12',e:'False positive rate confirmed 4.2%',c:'tld-r'},{t:'Mar 13',e:'Pattern: new-market drivers disproportionately affected',c:'tld-a'},{t:'Mar 14',e:'Confirmed — model_change, 89% confidence',c:'tld-g'}]},
    {name:'Surge Pricing Engine',before:94,after:84,delta:-10,cause:'prompt_shift',causeLabel:'Distribution shift — event surge',causeColor:'ca',confidence:74,detail:'Surge accuracy degraded in event-heavy metros (NYC/LA/CHI). Spring event season began — query distribution shifted outside winter 2024 training baseline.',action:'Add 15 event-surge scenario prompts. Fine-tune on spring 2024 event data. Adjust surge cap for stadium/concert events. Timeline: 3–5 days.',timeline:[{t:'Mar 1',e:'Spring event season begins — query pattern shifts',c:'tld-b'},{t:'Mar 8',e:'Surge accuracy dip in NYC/LA/CHI',c:'tld-a'},{t:'Mar 11',e:'Embedding distance 0.28 (threshold 0.25)',c:'tld-a'},{t:'Mar 13',e:'Rider complaints +18% in 3 metros',c:'tld-a'},{t:'Mar 14',e:'Confirmed — prompt_shift, 74% confidence',c:'tld-g'}]}
  ]
};

const CO_ALERTS = {
  ms:[
    {t:'Today, 09:14',e:'P0: Security Agent — prompt injection confirmed. Auto-delist staged.',c:'tld-r'},
    {t:'Today, 07:32',e:'Finance Agent thumbs-down 2.1× baseline. Drift probe triggered.',c:'tld-a'},
    {t:'Yesterday, 18:45',e:'SLA breach: 23 submissions overdue. Oldest 11 days.',c:'tld-a'},
    {t:'Yesterday, 14:20',e:'Routing conflict: IT & Ops — overlap 0.87. Investigation open.',c:'tld-b'},
    {t:'Mar 12',e:'Model update: gpt-4o-mini → gpt-4o. Regression detected 48h later.',c:'tld-r'},
    {t:'Mar 10',e:'Weekly eval — 847 prompts run. 3 new test cases added.',c:'tld-b'}
  ],
  intuit:[
    {t:'Today, 06:10',e:'P0: Tax Filing Agent v2.3 — stale IRS 2025 bracket data. 920 users affected.',c:'tld-r'},
    {t:'Today, 08:15',e:'Token volume up 34% — tax season surge. Latency at 2.1s, above 2.0s SLA.',c:'tld-a'},
    {t:'Mar 13',e:'Payroll Calculator v3 hallucination rate 6.1% — threshold 3%. Drift probe active.',c:'tld-a'},
    {t:'Mar 12',e:'12 agent submissions past 2-day SLA. Tax season deadline pressure.',c:'tld-a'},
    {t:'Mar 11',e:'Credit Advisor drift signal — embedding distance 0.21 (threshold 0.25).',c:'tld-b'},
    {t:'Mar 10',e:'Weekly eval — 312 prompts across 7 tax agents. 2 new compliance test cases.',c:'tld-b'}
  ],
  google:[
    {t:'Today',e:'P1: Platform latency p95 at 1.9s — SLA breach (target 1.8s). Infra review triggered.',c:'tld-a'},
    {t:'Mar 13',e:'3 routing conflicts in Assistant category. Overlap scores 0.86–0.91.',c:'tld-a'},
    {t:'Mar 12',e:'Search accuracy −1.8pp post Gemini 1.5 Pro update. Eval rerun scheduled.',c:'tld-r'},
    {t:'Mar 12',e:'Workspace Summarizer published — routing conflict with Assistant Planner triggered.',c:'tld-b'},
    {t:'Mar 11',e:'Gemini 1.5 Pro model update deployed across all agents.',c:'tld-b'},
    {t:'Mar 10',e:'Weekly eval — 2,100 prompts across 28 agents. 6 routing conflict test cases added.',c:'tld-b'}
  ],
  uber:[
    {t:'Today',e:'P1: Fraud Detection false positive 4.2% — 340 valid driver payouts blocked today.',c:'tld-r'},
    {t:'Today',e:'Latency p95 at 480ms — 20ms from 500ms hard SLA. Infra on alert.',c:'tld-a'},
    {t:'Mar 13',e:'Surge Pricing accuracy −2pp in NYC/LA/CHI. Rider complaints +18%.',c:'tld-a'},
    {t:'Mar 12',e:'Driver NPS dropped 4 points — payout blocks identified as root cause.',c:'tld-r'},
    {t:'Mar 11',e:'ETA Predictor showing latency increase under surge load.',c:'tld-b'},
    {t:'Mar 10',e:'gpt-4o update deployed. Fraud Detection threshold recalibration pending.',c:'tld-b'}
  ]
};

const CO_TREND = {
  ms:{labels:['Jan W3','Jan W4','Feb W1','Feb W2','Feb W3','Feb W4','Mar W1','Mar W2'],approved:[82,91,98,103,108,115,89,54],rejected:[18,22,28,24,32,31,39,54]},
  intuit:{labels:['Jan W3','Jan W4','Feb W1','Feb W2','Feb W3','Feb W4','Mar W1','Mar W2'],approved:[88,94,101,98,105,110,95,72],rejected:[12,14,18,17,21,22,24,20]},
  google:{labels:['Jan W3','Jan W4','Feb W1','Feb W2','Feb W3','Feb W4','Mar W1','Mar W2'],approved:[410,445,468,490,512,535,497,463],rejected:[52,58,64,61,70,72,68,64]},
  uber:{labels:['Jan W3','Jan W4','Feb W1','Feb W2','Feb W3','Feb W4','Mar W1','Mar W2'],approved:[195,201,208,212,218,224,215,209],rejected:[14,16,14,18,16,18,19,20]}
};

const CO_FAIL_TYPES = {
  ms:[
    {icon:'📋',label:'Scope declaration incomplete',sub:'Missing manifest fields',freq:18,pct:34,trend:'+2',color:'amber'},
    {icon:'💭',label:'Hallucination / wrong answer',sub:'Incorrect facts asserted',freq:12,pct:22,trend:'+3',color:'red'},
    {icon:'🔀',label:'Out-of-scope response',sub:'Answered outside capability',freq:10,pct:18,trend:'−1',color:'red'},
    {icon:'🛡',label:'Safety failure',sub:'Red-team prompt succeeded',freq:5,pct:10,trend:'+1',color:'red'},
  ],
  intuit:[
    {icon:'📅',label:'Knowledge staleness',sub:'IRS / regulatory data outdated',freq:14,pct:41,trend:'+8',color:'red'},
    {icon:'💭',label:'Hallucination — calculations',sub:'Incorrect tax / payroll values',freq:9,pct:26,trend:'+3',color:'red'},
    {icon:'📋',label:'Compliance scope miss',sub:'Responded to out-of-scope tax query',freq:6,pct:18,trend:'+1',color:'amber'},
    {icon:'⏱',label:'Latency breach',sub:'p95 above 2.0s SLA',freq:5,pct:15,trend:'+2',color:'blue'},
  ],
  google:[
    {icon:'🔀',label:'Routing conflict',sub:'Intent overlap between agents',freq:24,pct:38,trend:'+6',color:'purple'},
    {icon:'⏱',label:'Latency breach',sub:'p95 above 1.8s SLA',freq:18,pct:28,trend:'+4',color:'amber'},
    {icon:'💭',label:'Accuracy degradation',sub:'Post model update regression',freq:14,pct:22,trend:'+2',color:'red'},
    {icon:'📭',label:'Context missing',sub:'Query outside training distribution',freq:8,pct:12,trend:'−1',color:'blue'},
  ],
  uber:[
    {icon:'⚠️',label:'False positive — fraud block',sub:'Valid transaction blocked',freq:28,pct:45,trend:'+12',color:'red'},
    {icon:'📈',label:'Surge pricing inaccuracy',sub:'Multiplier outside expected range',freq:16,pct:26,trend:'+3',color:'amber'},
    {icon:'⏱',label:'Latency near SLA',sub:'p95 approaching 500ms limit',freq:11,pct:18,trend:'+2',color:'amber'},
    {icon:'🔀',label:'Route optimization miss',sub:'Suboptimal path recommendation',freq:7,pct:11,trend:'−1',color:'blue'},
  ]
};


// ═══════════════════════════════════
// DATE RANGE DATA
// ═══════════════════════════════════
const DATE_DATA = {
  week:{rej:'38%',rejD:'↑ +7pp this week',ag:'1,284',qs:'82%',qsD:'↓ below 85% target',sla:'6.2d',slaD:'↑ SLA 5d · 23 overdue'},
  last:{rej:'31%',rejD:'↑ +5pp vs prior',ag:'1,241',qs:'84%',qsD:'↑ improving',sla:'5.8d',slaD:'↑ SLA breached · 18 overdue'},
  month:{rej:'28%',rejD:'↑ trending up',ag:'1,189',qs:'83%',qsD:'— near target',sla:'5.4d',slaD:'↑ marginal breach'}
};

// ═══════════════════════════════════
// MODEL COST/QUALITY DATA (NEW)
// ═══════════════════════════════════
const MODELS = {
  cheap:{tsr:'74%',tsrClass:'warn',hall:'7.8%',hallClass:'bad',lat:'0.9s',latClass:'',cost:'$0.18',costClass:'good'},
  balanced:{tsr:'87%',tsrClass:'good',hall:'4.1%',hallClass:'warn',lat:'1.8s',latClass:'',cost:'$2.40',costClass:''},
  premium:{tsr:'96%',tsrClass:'good',hall:'0.8%',hallClass:'good',lat:'4.2s',latClass:'warn',cost:'$18.50',costClass:'bad'}
};

// ═══════════════════════════════════
// REPLAY STATE (NEW)
// ═══════════════════════════════════
let replayInterval = null;
let replayStep = 0;
let replaySteps = [];
let currentTraceRun = null;

// ═══════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════
let curView='overview';
function nav(v){
  curView=v;
  document.querySelectorAll('.view').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.si').forEach(el=>el.classList.remove('active'));
  const vEl=document.getElementById('view-'+v);
  if(vEl)vEl.classList.add('active');
  const ni=document.getElementById('n-'+v);
  if(ni)ni.classList.add('active');
  const names={overview:'Overview',incidents:'Incident Command',risk:'Risk Simulator',eval:'Evaluation Framework',canary:'Canary Deployment',cost:'Cost vs Quality',trace:'Trace & Replay',attr:'Failure Attribution',obs:'Observability',feedback:'Feedback Loop',compare:'Agent Comparison',exec:'Exec Briefing',devsb:'Developer View',execution:'Execution Tracking',intel:'System Intelligence',arch:'System Design',prd:'PRD & Tradeoffs',schema:'Data Schema'};
  document.getElementById('tb-bc').textContent=names[v]||v;
  if(v==='overview')renderCharts();
  if(v==='eval')renderEvalChart();
  if(v==='obs'){renderAlerts();renderLatChart();}
  if(v==='feedback')renderFbChart();
  if(v==='compare')setTimeout(renderCompareChart,60);
  if(v==='exec')setTimeout(renderExecChart,60);
  if(v==='trace')renderRunList();
  if(v==='incidents')renderIncidents();
  if(v==='attr')renderFailBreakdown();
  if(v==='cost')setTimeout(renderCostChart,60);
  if(v==='intel')setTimeout(renderIntelChart,60);
}

// ═══════════════════════════════════
// COMPANY / ENV / PERSONA
// ═══════════════════════════════════
let currentCo='ms';
let envProd=true;
function setEl(id,val){const el=document.getElementById(id);if(el)el.textContent=val;}
function setInner(id,val){const el=document.getElementById(id);if(el)el.innerHTML=val;}
function setCompany(co){
  currentCo=co;
  const c=CONFIGS[co];

  // ── Topbar company label ──
  setEl('tb-company-label', c.label);

  // ── Control bar — all 7 metrics ──
  setEl('ctrl-fail', c.rejRate);
  setEl('ctrl-fail-d', c.rejDelta);
  setEl('ctrl-lat', c.latency);
  setEl('ctrl-lat-d', c.latencyNote);
  setEl('ctrl-cost', c.cost);
  setEl('ctrl-cost-d', c.costDelta);
  setEl('ctrl-tokens', c.tokens);
  setEl('ctrl-tokens-d', c.tokensDelta);
  setEl('ctrl-inc', c.incidents);
  setEl('ctrl-inc-d', c.incidentDetail);
  setEl('ctrl-agents', c.agentCount.toLocaleString());
  setEl('ctrl-agents-d', c.agentDelta);
  setEl('ctrl-qs', c.qualScore);
  setEl('ctrl-qs-d', c.qualDelta);
  setEl('ctrl-status-text', c.sysStatus);
  const pill=document.getElementById('ctrl-status-pill');
  if(pill) pill.className='ctrl-status '+c.sysStatusClass;
  const dot=document.getElementById('ctrl-dot');
  if(dot) dot.className='live-dot '+c.dotClass+' pulse';

  // ── Sidebar incident badge ──
  setEl('n-incidents-badge', c.incidentDetail.split(' ')[0]);

  // ── Overview stats grid ──
  setEl('s-rej', c.rejRate);
  setEl('s-rej-d', c.rejDelta);
  setEl('s-ag', c.agentCount.toLocaleString());
  setEl('s-ag-d', c.agentDelta);
  setEl('s-qs', c.qualScore);
  setEl('s-qs-d', c.qualDelta);
  setEl('s-sla', c.slaVal);
  setEl('s-sla-d', c.slaDelta);
  setEl('ov-count', c.agentCount.toLocaleString());
  setEl('ov-chip', c.agentCount.toLocaleString()+' active');

  // ── Decision banner ──
  setInner('ov-banner-text', c.bannerText);

  // ── Business impact cards ──
  setEl('imp-rev', c.revenueRisk);
  setEl('imp-rev-sub', c.revenueRiskSub);
  setEl('imp-users', c.usersImpacted);
  setEl('imp-users-sub', c.usersImpactedSub);
  setEl('imp-churn', c.churnRisk);
  setEl('imp-churn-sub', c.churnRiskSub);

  // ── Top 3 actions ──
  const top3el=document.getElementById('top3-list');
  if(top3el) top3el.innerHTML=c.top3.map((a,i)=>`
    <div class="top3-item">
      <div class="top3-num ${a.color}">${i+1}</div>
      <div style="flex:1">
        <div class="top3-action">${a.title}</div>
        <div class="top3-why">${a.why}</div>
        <button class="top3-cta" onclick="nav('${a.link}')">Go to ${a.link.charAt(0).toUpperCase()+a.link.slice(1)} →</button>
      </div>
    </div>`).join('');

  // ── Live agent health table — company-specific agents ──
  renderAgents(CO_AGENTS[co]);

  // ── Incidents — company-specific ──
  // Store for renderIncidents() to pick up
  window._activeIncidents = CO_INCIDENTS[co];
  if(curView==='incidents') renderIncidents();

  // ── Failure Attribution — company-specific ──
  window._activeAttr = CO_ATTR[co];
  selAttr = null;
  renderAttrList();
  const ad=document.getElementById('attr-db');
  if(ad) ad.innerHTML='<div style="padding:32px;text-align:center;color:var(--text3);font-size:12px">← Select a degraded agent to see root cause analysis</div>';

  // ── Observability alerts — company-specific ──
  window._activeAlerts = CO_ALERTS[co];
  if(curView==='obs') renderAlerts();

  // ── Exec briefing ──
  setEl('exec-rej', c.rejRate);
  setEl('exec-agents-growth', c.agentDelta.replace('↑ ',''));
  setEl('exec-qs', c.qualScore);
  setEl('exec-inc', String(c.incidents));

  // ── Exec narrative (company-specific) ──
  const execNarrative = document.getElementById('exec-narrative');
  if(execNarrative && c.exec && c.exec.narrative) execNarrative.innerHTML = c.exec.narrative;

  // ── Exec decisions table (company-specific) ──
  const execTbody = document.getElementById('exec-decisions-tbody');
  const execCount = document.getElementById('exec-dec-count');
  if(execTbody && c.exec && c.exec.decisions){
    const dueColors={late:'var(--red)',soon:'var(--amber)',ok:'var(--green)'};
    execTbody.innerHTML = c.exec.decisions.map(d=>`
      <tr>
        <td><span class="chip ${d.sev}">${d.sevLabel}</span></td>
        <td><strong>${d.title}</strong><br><span style="font-size:11px;color:var(--text2)">${d.sub}</span></td>
        <td style="font-size:11px;color:var(--amber)">${d.impact}</td>
        <td style="font-size:11px;color:var(--text2)">${d.owner}</td>
        <td style="font-family:var(--mono);font-size:11px;color:${dueColors[d.dueClass]||'var(--text2)'}">${d.due}</td>
      </tr>`).join('');
    if(execCount) execCount.textContent = c.exec.decisions.length + ' items';
  }

  // ── Risk Simulator category dropdown ──
  const sc=document.getElementById('sim-cat');
  if(sc) sc.innerHTML=c.categories.map(cat=>`<option>${cat}</option>`).join('');

  // ── Re-render active charts ──
  if(curView==='overview') renderCharts();
  else if(curView==='exec') setTimeout(renderExecChart,60);
  else if(curView==='obs') { renderAlerts(); renderLatChart(); }
}
function toggleEnv(){
  envProd=!envProd;
  const b=document.getElementById('env-badge');
  b.textContent=envProd?'Production':'Staging';
  b.className='env-badge '+(envProd?'env-prod':'env-stg');
}
let currentPersona='pm';
function setPersona(p){
  currentPersona=p;
  ['pm','dev','exec'].forEach(id=>{const el=document.getElementById('pb-'+id);if(el)el.classList.toggle('active',id===p);});
  if(p==='exec')nav('exec');
  else if(p==='dev')nav('devsb');
  else nav('overview');
}

// ═══════════════════════════════════
// EXPANDABLE
// ═══════════════════════════════════
function toggleExp(id){
  const body=document.getElementById(id+'-body');
  const icon=document.getElementById(id+'-icon');
  if(!body)return;
  const open=body.classList.toggle('open');
  if(icon)icon.textContent=open?'▾':'▸';
}

// ═══════════════════════════════════
// DATE RANGE
// ═══════════════════════════════════
function setDateRange(range,btn){
  document.querySelectorAll('.btn').forEach(b=>{if(b.textContent.match(/This week|Last week|30 days/))b.classList.remove('active');});
  btn.classList.add('active');
  const d=DATE_DATA[range];
  document.getElementById('s-rej').textContent=d.rej;
  document.getElementById('s-rej-d').textContent=d.rejD;
  document.getElementById('s-ag').textContent=d.ag;
  document.getElementById('s-qs').textContent=d.qs;
  document.getElementById('s-qs-d').textContent=d.qsD;
  document.getElementById('s-sla').textContent=d.sla;
  document.getElementById('s-sla-d').textContent=d.slaD;
}

// ═══════════════════════════════════
// AGENT TABLE
// ═══════════════════════════════════
function renderAgents(agents){
  agents = agents || CO_AGENTS[currentCo] || [];
  const sm={healthy:'<span class="chip cg">Healthy</span>',degrading:'<span class="chip ca">Degrading</span>',drifted:'<span class="chip cp">Drifted</span>',critical:'<span class="chip cr">Critical</span>',safety:'<span class="chip cr">Safety ⚠</span>',new:'<span class="chip cb2">New·Watch</span>'};
  const rm={low:'<span class="chip cg">Low</span>',med:'<span class="chip cb2">Med</span>',high:'<span class="chip ca">High</span>',critical:'<span class="chip cr">Critical</span>',p0:'<span class="chip cr">P0</span>'};
  const tbody=document.getElementById('agent-tbody');
  if(!tbody)return;
  tbody.innerHTML=agents.map(a=>{
    const qc=a.q?(a.q>=88?'var(--green)':a.q>=75?'var(--amber)':'var(--red)'):'var(--text3)';
    const qv=a.q?`<span style="font-family:var(--mono);color:${qc}">${a.q}%</span>`:'<span style="color:var(--text3)">—</span>';
    const ds=a.risk==='p0'?'color:var(--red);font-size:11px':'font-size:11px;color:var(--text2)';
    const action=a.risk==='p0'?`<button onclick="nav('incidents')" style="padding:3px 8px;border-radius:3px;font-size:10px;background:var(--red-bg);color:var(--red);border:1px solid var(--red-bd);cursor:pointer">Delist</button>`:a.status==='degrading'||a.status==='drifted'?`<button onclick="nav('attr')" style="padding:3px 8px;border-radius:3px;font-size:10px;background:var(--blue-bg);color:var(--blue);border:1px solid var(--blue-bd);cursor:pointer">Investigate</button>`:`<span style="color:var(--text3);font-size:11px">—</span>`;
    return `<tr><td>${a.name}</td><td style="color:var(--text2)">${a.cat}</td><td>${qv}</td><td>${sm[a.status]||''}</td><td>${rm[a.risk]||''}</td><td style="${ds}">${a.decision}</td><td>${action}</td></tr>`;
  }).join('');
}

// ═══════════════════════════════════
// RISK SIMULATOR
// ═══════════════════════════════════
const SIGNALS=[{name:'Intent overlap',weight:0.30,raw:76},{name:'Safety eval',weight:0.25,raw:94},{name:'Accuracy eval',weight:0.20,raw:68},{name:'Latency probe',weight:0.15,raw:88},{name:'Scope completeness',weight:0.10,raw:40}];
function renderSignals(){
  const c=document.getElementById('risk-signals');
  if(!c)return;
  c.innerHTML=SIGNALS.map(s=>{
    const col=s.raw>=80?'sfg':s.raw>=60?'sfa':'sfr';
    const tc=s.raw>=80?'var(--green)':s.raw>=60?'var(--amber)':'var(--red)';
    return `<div class="srow"><span class="slbl" style="width:130px">${s.name}</span><div class="strack"><div class="sfill ${col}" style="width:${s.raw}%"></div></div><span style="font-family:var(--mono);font-size:10px;color:var(--text3);width:28px;text-align:right;flex-shrink:0">${Math.round(s.weight*100)}%</span><span class="snum" style="color:${tc}">${s.raw}</span></div>`;
  }).join('');
}
function runSim(){
  const composite=Math.round(SIGNALS.reduce((acc,s)=>acc+s.raw*s.weight,0));
  document.getElementById('risk-num').textContent=composite;
  const arc=document.getElementById('arc-fill');
  const offset=204-(composite/100*204);
  arc.setAttribute('stroke-dashoffset',offset);
  const rn=document.getElementById('risk-num');
  const rl=document.getElementById('risk-lbl');
  if(composite>=70){rn.style.color='var(--red)';rl.textContent='HIGH RISK';arc.setAttribute('stroke','#dc2626');}
  else if(composite>=45){rn.style.color='var(--amber)';rl.textContent='MEDIUM RISK';arc.setAttribute('stroke','#d97706');}
  else{rn.style.color='var(--green)';rl.textContent='LOW RISK';arc.setAttribute('stroke','#059669');}
  renderSignals();
  const latVal=parseInt(document.getElementById('sl-lat').value);
  const projected=Math.max(0,composite-Math.round((2000-latVal)/200));
  if(latVal<2000){
    document.getElementById('whatif-panel').style.display='block';
    document.getElementById('wir-val').textContent=projected;
    document.getElementById('wir-sub').textContent=`If latency improves to ${latVal}ms, projected risk: ${projected} ${projected<45?'(Low Risk)':projected<70?'(Medium Risk)':'(High Risk)'}`;
  }else{document.getElementById('whatif-panel').style.display='none';}
}
function updateSV(name,val){
  const el=document.getElementById('sv-'+name);
  if(!el)return;
  if(name==='intent')el.textContent=parseFloat(val).toFixed(2);
  else if(name==='safety')el.textContent=val+'%';
  else el.textContent=val;
}
function resetSim(){
  ['sl-intent','sl-safety','sl-lat'].forEach((id,i)=>{const el=document.getElementById(id);if(el){el.value=[0.85,80,2000][i];updateSV(['intent','safety','lat'][i],[0.85,80,2000][i]);}});
  runSim();
}

// ═══════════════════════════════════
// EVAL MODE
// ═══════════════════════════════════
function setEM(m){
  ['pre','post','reg'].forEach(id=>{const el=document.getElementById('em-'+id);if(el)el.classList.toggle('active',id===m);});
  const badge=document.getElementById('em-badge');
  const d={pre:{tsr:'87%',hall:'4.1%',safe:'94%',lat:'1.8s',badge:'Pre-publish'},post:{tsr:'83%',hall:'5.2%',safe:'91%',lat:'2.1s',badge:'Post-publish'},reg:{tsr:'79%',hall:'6.4%',safe:'88%',lat:'2.3s',badge:'Regression'}};
  const v=d[m];
  ['ev-tsr','ev-hall','ev-safe','ev-lat'].forEach((id,i)=>{const el=document.getElementById(id);if(el)el.textContent=[v.tsr,v.hall,v.safe,v.lat][i];});
  if(badge)badge.textContent=v.badge;
}

// ═══════════════════════════════════
// ATTRIBUTION
// ═══════════════════════════════════
let selAttr=null;
function renderAttrList(){
  const c=document.getElementById('attr-list');
  if(!c)return;
  const data = window._activeAttr || CO_ATTR[currentCo] || [];
  c.innerHTML=data.map((a,i)=>`
    <div style="border:1px solid var(--border);border-radius:var(--r);padding:10px 12px;margin-bottom:8px;cursor:pointer;background:${selAttr===i?'var(--blue-bg)':'var(--white)'};border-color:${selAttr===i?'var(--blue-bd)':'var(--border)'};" onclick="selectAttr(${i})">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px"><span style="font-size:12px;font-weight:500">${a.name}</span><span style="font-family:var(--mono);font-size:10px;color:var(--text3)">${a.confidence}% confidence</span></div>
      <div style="margin-bottom:3px"><span class="chip ${a.causeColor}">${a.causeLabel}</span></div>
      <div style="font-family:var(--mono);font-size:11px;color:var(--red)">${a.before}% → ${a.after}% (${a.delta}pp)</div>
    </div>`).join('');
  // Update decision banner with first two agents
  const bt=document.getElementById('attr-banner-text');
  if(bt && data.length>0){
    const a0=data[0], a1=data[1];
    bt.innerHTML=`<strong>${a0.name} dropped ${a0.delta}pp</strong> — attributed to ${a0.causeLabel.toLowerCase()} (${a0.confidence}% confidence). ${a1?a1.name+' also degraded — '+a1.causeLabel.toLowerCase()+' ('+a1.confidence+'% confidence).':''}`;
  }
  const ba=document.getElementById('attr-banner-acts');
  if(ba && data.length>0){
    ba.innerHTML=data.slice(0,2).map((a,i)=>`<button class="db-btn ${i===0?'primary':'secondary'}" onclick="selectAttr(${i})">View ${a.name.split(' ').slice(0,2).join(' ')} →</button>`).join('');
  }
}
  selAttr=i; renderAttrList();
  const data = window._activeAttr || CO_ATTR[currentCo] || [];
  const a=data[i];
  if(!a) return;
  document.getElementById('attr-dt').textContent=a.name+' — Root cause';
  document.getElementById('attr-db').innerHTML=`
    <div style="margin-bottom:12px"><div class="slb">Attributed cause</div><span class="chip ${a.causeColor}">${a.causeLabel}</span><span style="font-family:var(--mono);font-size:10px;color:var(--text3);margin-left:7px">${a.confidence}% confidence</span></div>
    <div style="margin-bottom:12px"><div class="slb">Quality delta</div><span style="font-family:var(--mono);font-size:20px;color:var(--text2)">${a.before}%</span><span style="color:var(--text3);margin:0 7px">→</span><span style="font-family:var(--mono);font-size:20px;color:var(--red)">${a.after}%</span><span style="font-family:var(--mono);font-size:12px;color:var(--red);margin-left:5px">(${a.delta}pp)</span></div>
    <div style="margin-bottom:12px"><div class="slb">Analysis</div><div style="font-size:12px;color:var(--text2);line-height:1.6">${a.detail}</div></div>
    <div style="margin-bottom:12px"><div class="slb">Event timeline</div><div class="tl">${a.timeline.map(tl=>`<div class="tli"><div class="tld ${tl.c}"></div><div class="tlt">${tl.t}</div><div class="tldesc">${tl.e}</div></div>`).join('')}</div></div>
    <div><div class="slb">Recommended action</div><div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:9px 12px;font-size:12px;line-height:1.6">${a.action}</div></div>`;
}

// ═══════════════════════════════════
// FAILURE BREAKDOWN (NEW)
// ═══════════════════════════════════
function renderFailBreakdown(){
  const c=document.getElementById('fail-breakdown');
  if(!c)return;
  const data = CO_FAIL_TYPES[currentCo] || CO_FAIL_TYPES.ms;
  c.innerHTML=data.map(f=>`
    <div class="fail-row">
      <div class="fr-icon" style="background:var(--${f.color==='purple'?'purple':f.color}-bg)">${f.icon}</div>
      <div style="flex:1"><div class="fr-label">${f.label}</div><div class="fr-sub">${f.sub}</div></div>
      <div class="fr-bar-wrap"><div class="fr-bar" style="width:${f.pct}%;background:var(--${f.color==='purple'?'purple':f.color})"></div></div>
      <div class="fr-freq" style="color:var(--text2)">${f.freq}</div>
      <div class="fr-trend" style="color:${f.trend.startsWith('+')&&f.color!=='blue'&&f.color!=='purple'?'var(--red)':'var(--green)'}">${f.trend}</div>
    </div>`).join('');
  renderFailTrendChart();
}

// ═══════════════════════════════════
// INCIDENT COMMAND (NEW)
// ═══════════════════════════════════
function renderIncidents(){
  const c=document.getElementById('incidents-list');
  if(!c)return;
  const data = window._activeIncidents || CO_INCIDENTS[currentCo] || [];
  c.innerHTML=data.map((inc,i)=>`
    <div class="incident-card ${inc.sev}" id="inc-${i}">
      <div class="ic-head" onclick="toggleIncident(${i})">
        <div class="ic-sev sev-${inc.sev}">${inc.sevLabel}</div>
        <div>
          <div class="ic-id">${inc.id}</div>
          <div class="ic-title">${inc.title}</div>
        </div>
        <div class="ic-meta">
          <span class="chip cgr" style="font-size:9px">${inc.meta.age}</span>
          <span class="chip ${inc.sev==='p0'?'cr':inc.sev==='p1'?'ca':'cb2'}">${inc.meta.sessions} affected</span>
          <span class="ic-expand-icon ${inc.expanded?'open':''}" id="inc-icon-${i}">▸</span>
        </div>
      </div>
      <div class="ic-body ${inc.expanded?'open':''}" id="inc-body-${i}">
        <div class="ic-grid">
          <div class="ic-stat"><div class="ic-stat-lbl">Root cause</div><div style="font-size:12px;margin-top:2px">${inc.cause}</div></div>
          <div class="ic-stat"><div class="ic-stat-lbl">Impact</div><div style="font-size:11px;color:var(--text2);margin-top:2px">${inc.impact}</div></div>
          <div class="ic-stat"><div class="ic-stat-lbl">Model version</div><div class="ic-stat-val" style="font-size:12px;margin-top:2px">${inc.meta.model}</div></div>
        </div>
        <div style="font-size:11px;color:var(--text2);margin-bottom:10px;line-height:1.5"><strong>Root cause detail:</strong> ${inc.root}</div>
        <div class="ic-actions">
          ${inc.actions.includes('delist')?`<button class="ia-btn ia-danger" onclick="confirmDelist()">🗑 Delist agent</button>`:''}
          ${inc.actions.includes('disable')?`<button class="ia-btn ia-warn" onclick="showAction('Tool disabled for ${inc.id}')">⊘ Disable agent</button>`:''}
          ${inc.actions.includes('rollback')?`<button class="ia-btn ia-blue" onclick="showAction('Version rolled back for ${inc.id}')">↺ Rollback version</button>`:''}
          ${inc.actions.includes('updateprompt')?`<button class="ia-btn ia-green" onclick="showAction('Prompt update queued for ${inc.id}')">✎ Update prompt</button>`:''}
          <button class="ia-btn" style="background:var(--bg);color:var(--text2);border:1px solid var(--border)" onclick="loadTrace('failed')">▶ Replay trace</button>
        </div>
      </div>
    </div>`).join('');
}
function toggleIncident(i){
  const body=document.getElementById('inc-body-'+i);
  const icon=document.getElementById('inc-icon-'+i);
  if(!body)return;
  const open=body.classList.toggle('open');
  if(icon)icon.classList.toggle('open',open);
}
function confirmDelist(){
  const badge=document.getElementById('inc-badge');
  const incCount=document.getElementById('ctrl-inc');
  const status=document.getElementById('ctrl-status-text');
  const dot=document.getElementById('ctrl-dot');
  if(incCount){incCount.textContent='1';incCount.classList.remove('crit');}
  if(status){status.textContent='Warning';const pill=document.getElementById('ctrl-status-pill');if(pill){pill.className='ctrl-status status-warn';}}
  if(dot){dot.className='live-dot amber pulse';}
  alert('P0 delist confirmed. Security Agent removed from store. Incident report queued for developer notification.');
}
function showAction(msg){alert(msg+' — action queued.');}

// ═══════════════════════════════════
// TRACE & REPLAY (NEW)
// ═══════════════════════════════════
function renderRunList(){
  const tbody=document.getElementById('run-list-tbody');
  if(!tbody)return;
  const sm={success:'<span class="chip cg">Success</span>',failed:'<span class="chip cr">Failed</span>'};
  tbody.innerHTML=RUNS.map((r,i)=>`<tr onclick="selectRun(${i})" style="cursor:pointer"><td style="font-family:var(--mono);font-size:10px;color:var(--text3)">${r.id.slice(0,10)}</td><td>${r.agent}</td><td>${sm[r.status]}</td><td style="font-family:var(--mono);font-size:10px;color:var(--text2)">${r.duration}</td><td><button onclick="selectRun(${i});event.stopPropagation()" style="padding:2px 7px;border-radius:3px;font-size:10px;border:1px solid var(--border);background:var(--bg);cursor:pointer;color:var(--blue)">Inspect →</button></td></tr>`).join('');
}
function loadTrace(type){
  const idx=type==='failed'?0:1;
  selectRun(idx);
  nav('trace');
}
function selectRun(i){
  currentTraceRun=i;
  resetReplay();
  const r=RUNS[i];
  document.getElementById('trace-title').textContent=r.agent+' — '+r.id.slice(0,10);
  document.getElementById('trace-chip').className='chip '+(r.status==='success'?'cg':'cr');
  document.getElementById('trace-chip').textContent=r.status==='success'?'Success':'Failed';
  replaySteps=r.steps;
  renderTrace(r.steps,-1);
  const bar=document.getElementById('replay-bar');
  if(bar)bar.style.display='flex';
}
function renderTrace(steps,activeIdx){
  const body=document.getElementById('trace-body');
  if(!body)return;
  body.innerHTML='<div style="padding:12px">'+steps.map((s,i)=>{
    const cls=i===activeIdx?'trace-step active-step':s.status==='fail'?'trace-step fail':'trace-step';
    const dot=i>activeIdx&&activeIdx>=0?'ts-dot pending':s.status==='ok'?'ts-dot ok':s.status==='fail'?'ts-dot fail':'ts-dot ok';
    return `<div class="${cls}" onclick="toggleStepExpand(this)">
      <div class="${dot}"></div>
      <div class="ts-content">
        <div class="ts-header">
          <span class="ts-name">${s.name}</span>
          <span class="ts-lat">${s.lat||''}</span>
          ${i===activeIdx?'<span class="chip ca" style="font-size:9px">Running…</span>':''}
        </div>
        <div class="ts-desc">${s.desc}</div>
        ${s.error?`<div class="ts-error">✗ ${s.error}</div>`:''}
        ${s.error?`<div class="ts-expand-btn" onclick="event.stopPropagation();toggleStepDetail(this)">Show request/response ↓</div>`:''}
        ${s.payload?`<div class="ts-expanded"><div class="ts-code">${s.payload}</div></div>`:''}
      </div>
    </div>`;
  }).join('')+'</div>';
}
function toggleStepDetail(btn){
  const expanded=btn.nextElementSibling;
  if(!expanded)return;
  expanded.classList.toggle('open');
  btn.textContent=expanded.classList.contains('open')?'Hide ↑':'Show request/response ↓';
}
function toggleStepExpand(el){/* handled by detail button */}

let replayPlaying=false;
function toggleReplay(){
  if(!currentTraceRun&&currentTraceRun!==0)return;
  replayPlaying=!replayPlaying;
  const btn=document.getElementById('replay-btn');
  if(btn)btn.textContent=replayPlaying?'⏸ Pause':'▶ Replay';
  if(btn)btn.classList.toggle('active',replayPlaying);
  if(replayPlaying)runReplay();
  else{clearInterval(replayInterval);}
}
function runReplay(){
  const r=RUNS[currentTraceRun];
  if(replayStep>=r.steps.length){stopReplay();return;}
  replayInterval=setInterval(()=>{
    if(replayStep>=r.steps.length){stopReplay();return;}
    renderTrace(r.steps,replayStep);
    const pct=Math.round((replayStep+1)/r.steps.length*100);
    const fill=document.getElementById('replay-fill');if(fill)fill.style.width=pct+'%';
    const lbl=document.getElementById('replay-lbl');if(lbl)lbl.textContent=`Step ${replayStep+1} / ${r.steps.length}`;
    replayStep++;
  },900);
}
function stopReplay(){
  clearInterval(replayInterval);replayPlaying=false;
  const btn=document.getElementById('replay-btn');
  if(btn){btn.textContent='▶ Replay';btn.classList.remove('active');}
  const r=RUNS[currentTraceRun];
  renderTrace(r.steps,-1);
}
function resetReplay(){
  clearInterval(replayInterval);replayPlaying=false;replayStep=0;
  const fill=document.getElementById('replay-fill');if(fill)fill.style.width='0%';
  const lbl=document.getElementById('replay-lbl');if(lbl)lbl.textContent='Step 0 / 0';
  const btn=document.getElementById('replay-btn');if(btn){btn.textContent='▶ Replay';btn.classList.remove('active');}
}

// ═══════════════════════════════════
// CANARY DEPLOYMENT (NEW)
// ═══════════════════════════════════
function updateTraffic(v){
  document.getElementById('sv-traffic').textContent=v+'%';
  document.getElementById('canary-split-chip').textContent=v+'% / '+(100-v)+'%';
  document.getElementById('traffic-a').style.width=v+'%';
  document.getElementById('traffic-b').style.width=(100-v)+'%';
  const rec=document.getElementById('canary-rec');
  const banner=document.getElementById('canary-banner');
  if(parseInt(v)>70){
    rec.innerHTML='<strong>Caution — high traffic on control version.</strong> Shift more traffic to challenger before drawing conclusions. Statistical significance may be compromised at this split ratio.';
    banner.className='decision-banner warn';
  }else{
    rec.innerHTML='<strong>Promote v2.1 to 100%.</strong> Statistically significant improvement: task success +5pp (p=0.03), hallucination −1.1pp, user satisfaction +7pp. No safety regressions. Recommend full rollout after 48h observation.';
    banner.className='decision-banner ok';
  }
}
function runCanary(){
  const v=document.getElementById('sl-traffic').value;
  updateTraffic(v);
}

// ═══════════════════════════════════
// COST vs QUALITY (NEW)
// ═══════════════════════════════════
function setModel(m){
  ['cheap','balanced','premium'].forEach(id=>{const el=document.getElementById('mt-'+id);if(el)el.classList.toggle('active',id===m);});
  const d=MODELS[m];
  document.getElementById('m-tsr').textContent=d.tsr;document.getElementById('m-tsr').className='mm-val '+d.tsrClass;
  document.getElementById('m-hall').textContent=d.hall;document.getElementById('m-hall').className='mm-val '+d.hallClass;
  document.getElementById('m-lat').textContent=d.lat;document.getElementById('m-lat').className='mm-val '+d.latClass;
  document.getElementById('m-cost').textContent=d.cost;document.getElementById('m-cost').className='mm-val '+d.costClass;
  ['cheap','balanced','premium'].forEach(id=>{
    const row=document.getElementById('row-'+id);
    if(row)row.style.background=id===m?'var(--blue-bg)':'';
  });
}

// ═══════════════════════════════════
// OBSERVABILITY
// ═══════════════════════════════════
function renderAlerts(){
  const c=document.getElementById('obs-tl');
  if(!c)return;
  const data = window._activeAlerts || CO_ALERTS[currentCo] || [];
  c.innerHTML=data.map(e=>`<div class="tli"><div class="tld ${e.c}"></div><div class="tlt">${e.t}</div><div class="tldesc">${e.e}</div></div>`).join('');
}

// ═══════════════════════════════════
// COMPARISON
// ═══════════════════════════════════
function runComparison(){renderCompareChart();}

// ═══════════════════════════════════
// REAL-TIME SIMULATION
// ═══════════════════════════════════
function startRealtime(){
  const latencyByco={
    ms:['1.7s','1.8s','1.9s','1.8s','1.7s','1.8s'],
    intuit:['2.0s','2.1s','2.2s','2.1s','2.0s','2.1s'],
    google:['1.8s','1.9s','2.0s','1.9s','1.8s','1.9s'],
    uber:['470ms','480ms','490ms','475ms','482ms','478ms']
  };
  const costByco={
    ms:['$2.38','$2.40','$2.42','$2.39','$2.41'],
    intuit:['$1.78','$1.80','$1.82','$1.79','$1.81'],
    google:['$0.92','$0.94','$0.96','$0.93','$0.95'],
    uber:['$3.08','$3.10','$3.12','$3.09','$3.11']
  };
  let idx=0;
  setInterval(()=>{
    const co=currentCo;
    const latArr=latencyByco[co]||latencyByco.ms;
    const costArr=costByco[co]||costByco.ms;
    const latEl=document.getElementById('ctrl-lat');
    if(latEl){latEl.textContent=latArr[idx%latArr.length];latEl.classList.add('flash');setTimeout(()=>latEl.classList.remove('flash'),400);}
    const costEl=document.getElementById('ctrl-cost');
    if(costEl)costEl.textContent=costArr[idx%costArr.length];
    const timeEl=document.getElementById('ov-time');
    if(timeEl)timeEl.textContent='updated '+new Date().toLocaleTimeString();
    idx++;
  },4000);
}

// ═══════════════════════════════════
// CHARTS
// ═══════════════════════════════════
const charts={};
function mkChart(id,cfg){if(charts[id])charts[id].destroy();const ctx=document.getElementById(id);if(!ctx)return;charts[id]=new Chart(ctx,cfg);}
const CD={plugins:{legend:{labels:{color:'#64635d',font:{size:11,family:"'Instrument Sans',sans-serif"}}}},scales:{x:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9e9d96',font:{size:10}}},y:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9e9d96',font:{size:10}}}}};

function renderCharts(){
  const t = CO_TREND[currentCo] || CO_TREND.ms;
  mkChart('chart-trend',{type:'bar',data:{labels:t.labels,datasets:[
    {label:'Approved',data:t.approved,backgroundColor:'rgba(5,150,105,0.12)',borderColor:'rgba(5,150,105,0.5)',borderWidth:1},
    {label:'Rejected',data:t.rejected,backgroundColor:'rgba(220,38,38,0.08)',borderColor:'rgba(220,38,38,0.4)',borderWidth:1}
  ]},options:{responsive:true,maintainAspectRatio:false,...CD,scales:{...CD.scales,x:{...CD.scales.x,stacked:true},y:{...CD.scales.y,stacked:true}}}});
}
function renderEvalChart(){mkChart('chart-eval',{type:'line',data:{labels:['Run 1','Run 2','Run 3','Run 4','Run 5','Run 6','Current'],datasets:[{label:'Functional',data:[91,89,90,88,87,86,87],borderColor:'rgba(5,150,105,0.7)',backgroundColor:'transparent',tension:0.3,pointRadius:3},{label:'Safety',data:[96,95,96,94,95,94,94],borderColor:'rgba(26,86,219,0.7)',backgroundColor:'transparent',tension:0.3,pointRadius:3},{label:'Quality',data:[85,83,81,80,79,78,79],borderColor:'rgba(217,119,6,0.7)',backgroundColor:'transparent',tension:0.3,pointRadius:3}]},options:{responsive:true,maintainAspectRatio:false,...CD,scales:{...CD.scales,y:{...CD.scales.y,min:70,max:100}}}});}
function renderLatChart(){mkChart('chart-lat',{type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{label:'p50',data:[820,840,830,860,850,820,810],borderColor:'rgba(5,150,105,0.7)',backgroundColor:'transparent',tension:0.4,pointRadius:3},{label:'p95',data:[1600,1700,1750,1820,1800,1750,1800],borderColor:'rgba(217,119,6,0.7)',backgroundColor:'transparent',tension:0.4,pointRadius:3},{label:'p99',data:[2100,2200,2350,2400,2300,2200,2300],borderColor:'rgba(220,38,38,0.7)',backgroundColor:'transparent',tension:0.4,pointRadius:3},{label:'SLA',data:[2000,2000,2000,2000,2000,2000,2000],borderColor:'rgba(220,38,38,0.2)',backgroundColor:'transparent',pointRadius:0,borderDash:[4,4]}]},options:{responsive:true,maintainAspectRatio:false,...CD,scales:{...CD.scales,y:{...CD.scales.y,ticks:{...CD.scales.y.ticks,callback:v=>v+'ms'}}}}});}
function renderAbChart(){mkChart('chart-ab',{type:'bar',data:{labels:['Task success','Safety pass','Thumbs-up','Latency (inv.)'],datasets:[{label:'v2.0 (A)',data:[82,92,74,71],backgroundColor:'rgba(217,119,6,0.15)',borderColor:'rgba(217,119,6,0.5)',borderWidth:1},{label:'v2.1 (B)',data:[87,94,81,85],backgroundColor:'rgba(5,150,105,0.12)',borderColor:'rgba(5,150,105,0.45)',borderWidth:1}]},options:{responsive:true,maintainAspectRatio:false,...CD,scales:{...CD.scales,y:{...CD.scales.y,min:60,max:100}}}});}
function renderFbChart(){mkChart('chart-fb',{type:'line',data:{labels:['Q3 2025','Q4 2025','Jan','Feb','Mar W1','Mar W2','Current'],datasets:[{label:'Test cases in eval library',data:[340,480,580,680,790,824,847],borderColor:'rgba(26,86,219,0.6)',backgroundColor:'rgba(26,86,219,0.04)',fill:true,tension:0.4,pointRadius:3}]},options:{responsive:true,maintainAspectRatio:false,...CD}});}
function renderCompareChart(){mkChart('chart-compare',{type:'radar',data:{labels:['Quality','Task success','Safety','Routing accuracy','Latency (inv.)','Thumbs-up'],datasets:[{label:'Service IT Agent v3.2',data:[94,93,98,96,88,92],borderColor:'rgba(5,150,105,0.8)',backgroundColor:'rgba(5,150,105,0.07)',pointRadius:4},{label:'IT Helpdesk v2.1',data:[77,81,96,77,74,72],borderColor:'rgba(220,38,38,0.7)',backgroundColor:'rgba(220,38,38,0.05)',pointRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#64635d',font:{size:11}}}},scales:{r:{min:60,max:100,grid:{color:'rgba(0,0,0,0.06)'},pointLabels:{color:'#64635d',font:{size:11}},ticks:{color:'#9e9d96',font:{size:9},stepSize:10}}}}});}
const CO_EXEC_TREND = {
  ms:{q:[86,87,86,85,84,84,83,82],r:[18,20,22,24,26,28,32,38]},
  intuit:{q:[90,91,90,89,88,87,86,84],r:[8,9,11,13,15,17,19,21]},
  google:{q:[93,93,92,92,91,91,90,89],r:[8,9,10,10,11,11,12,13]},
  uber:{q:[95,95,94,94,93,93,92,91],r:[5,5,6,6,7,7,8,8]}
};
function renderExecChart(){
  const t=CO_EXEC_TREND[currentCo]||CO_EXEC_TREND.ms;
  mkChart('chart-exec',{type:'line',data:{labels:['Jan W3','Jan W4','Feb W1','Feb W2','Feb W3','Feb W4','Mar W1','Mar W2'],datasets:[
    {label:'Quality %',data:t.q,borderColor:'rgba(26,86,219,0.7)',backgroundColor:'transparent',tension:0.3,pointRadius:3,yAxisID:'y'},
    {label:'Rejection %',data:t.r,borderColor:'rgba(220,38,38,0.7)',backgroundColor:'rgba(220,38,38,0.04)',fill:true,tension:0.3,pointRadius:3,yAxisID:'y2'}
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#64635d',font:{size:11}}}},scales:{
    y:{type:'linear',position:'left',min:60,max:100,grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9e9d96',font:{size:10},callback:v=>v+'%'}},
    y2:{type:'linear',position:'right',min:0,max:50,grid:{drawOnChartArea:false},ticks:{color:'#9e9d96',font:{size:10},callback:v=>v+'%'}}
  }}});
}
function renderFailTrendChart(){mkChart('chart-fail-trend',{type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{label:'Hallucination',data:[3,4,5,4,6,5,6],borderColor:'rgba(220,38,38,0.7)',backgroundColor:'transparent',tension:0.3,pointRadius:3},{label:'Tool failure',data:[1,2,2,3,3,2,3],borderColor:'rgba(217,119,6,0.7)',backgroundColor:'transparent',tension:0.3,pointRadius:3},{label:'Latency spike',data:[1,1,2,1,2,1,1],borderColor:'rgba(26,86,219,0.6)',backgroundColor:'transparent',tension:0.3,pointRadius:3},{label:'Context missing',data:[1,1,1,2,1,1,1],borderColor:'rgba(217,119,6,0.4)',backgroundColor:'transparent',tension:0.3,pointRadius:3,borderDash:[4,3]}]},options:{responsive:true,maintainAspectRatio:false,...CD}});}
function renderCostChart(){mkChart('chart-cost',{type:'scatter',data:{datasets:[{label:'gpt-4o-mini',data:[{x:0.18,y:74}],backgroundColor:'rgba(217,119,6,0.7)',pointRadius:10},{label:'gpt-4o (current)',data:[{x:2.40,y:87}],backgroundColor:'rgba(26,86,219,0.7)',pointRadius:12},{label:'o1-preview',data:[{x:18.50,y:96}],backgroundColor:'rgba(5,150,105,0.7)',pointRadius:10}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#64635d',font:{size:11}}}},scales:{x:{title:{display:true,text:'Cost per 1K queries ($)',color:'#9e9d96'},grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9e9d96',font:{size:10}}},y:{title:{display:true,text:'Task success rate (%)',color:'#9e9d96'},min:60,max:100,grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9e9d96',font:{size:10},callback:v=>v+'%'}}}}});}

// ═══════════════════════════════════
// AI ASSISTANT
// ═══════════════════════════════════
let aiOpen=false;
function toggleAI(){aiOpen=!aiOpen;document.getElementById('aip').classList.toggle('open',aiOpen);document.getElementById('main').style.marginRight=aiOpen?'320px':'0';}
function askQ(q){document.getElementById('ai-inp').value=q;sendMsg();}
async function sendMsg(){
  const inp=document.getElementById('ai-inp');const msg=inp.value.trim();if(!msg)return;inp.value='';
  addMsg('usr',msg);addMsg('bot','<span style="color:var(--text3);font-style:italic">Thinking…</span>');
  const thinkEl=document.getElementById('ai-msgs').lastChild;
  const co=CONFIGS[currentCo];
  const sys=`${co.aiCtx} Keep answers concise (max 150 words), specific to this platform's actual data, and actionable.`;
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json','anthropic-version':'2023-06-01'},body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:350,system:sys,messages:[{role:'user',content:msg}]})});
    const data=await res.json();const reply=data.content?.[0]?.text||'No response.';
    thinkEl.className='aim bot';thinkEl.innerHTML=reply.replace(/\n/g,'<br>');
  }catch(e){thinkEl.className='aim bot';thinkEl.innerHTML='Add your Anthropic API key to the fetch headers to enable Ask Lumen.';}
}
function addMsg(role,content){const msgs=document.getElementById('ai-msgs');const d=document.createElement('div');d.className='aim '+role;d.innerHTML=content;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}

// ═══════════════════════════════════
// SCENARIO TESTING (NEW)
// ═══════════════════════════════════
const SCENARIOS = {
  model:{rows:[
    {m:'Rejection rate',b:'38%',a:'52%',cls:'bad'},
    {m:'Hallucination rate',b:'4.1%',a:'7.8%',cls:'bad'},
    {m:'Task success rate',b:'87%',a:'74%',cls:'bad'},
    {m:'Latency p95',b:'1.8s',a:'0.9s',cls:'good'},
    {m:'Cost / 1K ops',b:'$2.40',a:'$0.18',cls:'good'},
  ],verdict:'do-not-ship',msg:'⚠ Do not ship. Model downgrade improves cost and latency but quality regression exceeds acceptable threshold.'},
  prompt:{rows:[
    {m:'Rejection rate',b:'38%',a:'31%',cls:'good'},
    {m:'Hallucination rate',b:'4.1%',a:'2.8%',cls:'good'},
    {m:'Task success rate',b:'87%',a:'88%',cls:'good'},
    {m:'Latency p95',b:'1.8s',a:'1.9s',cls:'neutral'},
    {m:'Refusal rate',b:'2.1%',a:'3.3%',cls:'neutral'},
  ],verdict:'ship',msg:'✓ Ship. Grounding instruction improves hallucination rate to 2.8% — below 3% threshold. Small increase in refusal rate is acceptable.'},
  traffic:{rows:[
    {m:'Rejection rate',b:'38%',a:'38%',cls:'neutral'},
    {m:'Latency p95',b:'1.8s',a:'4.1s',cls:'bad'},
    {m:'P0 alerts triggered',b:'0',a:'2 predicted',cls:'bad'},
    {m:'Task success rate',b:'87%',a:'79%',cls:'bad'},
    {m:'Cost / 1K ops',b:'$2.40',a:'$2.40',cls:'neutral'},
  ],verdict:'do-not-ship',msg:'⚠ Do not ship without traffic controls. 10× traffic spike causes latency breach (4.1s vs 2.0s SLA) and predicted P0 alerts. Implement rate limiting first.'},
};
function setScenario(sc){
  document.querySelectorAll('.scenario-btn').forEach(b=>b.classList.remove('active'));
  const btn=document.getElementById('sc-'+sc);
  if(btn)btn.classList.add('active');
  const s=SCENARIOS[sc];
  if(!s)return;
  const res=document.getElementById('scenario-result');
  if(!res)return;
  const colorMap={bad:'bad',good:'good',neutral:'neutral'};
  res.innerHTML=`<div class="slb" style="margin-bottom:8px">Projected outcome — if shipped today</div>`+
    s.rows.map(r=>`<div class="sr-row"><span class="sr-metric">${r.m}</span><span class="sr-before">${r.b}</span><span class="sr-arrow">→</span><span class="sr-after ${colorMap[r.cls]}">${r.a}</span></div>`).join('')+
    `<div style="margin-top:10px;padding:8px 10px;background:${s.verdict==='ship'?'var(--green-bg)':'var(--red-bg)'};border:1px solid ${s.verdict==='ship'?'var(--green-bd)':'var(--red-bd)'};border-radius:3px;font-size:11px;color:${s.verdict==='ship'?'var(--green)':'var(--red)'}">
      ${s.msg}
    </div>`;
}

// ═══════════════════════════════════
// SYSTEM INTELLIGENCE CHART (NEW)
// ═══════════════════════════════════
function renderIntelChart(){
  mkChart('chart-intel',{type:'line',data:{
    labels:['Q3 2025','Q4 2025','Jan 2026','Feb 2026','Mar 2026'],
    datasets:[
      {label:'Time to root cause (h)',data:[28,11.8,8.2,5.9,4.2],borderColor:'rgba(5,150,105,0.7)',backgroundColor:'transparent',tension:0.4,pointRadius:4,yAxisID:'y'},
      {label:'Repeat failure rate (%)',data:[51,34,28,19,12],borderColor:'rgba(220,38,38,0.7)',backgroundColor:'transparent',tension:0.4,pointRadius:4,yAxisID:'y2'},
      {label:'Auto-resolved (%)',data:[3,8,14,22,31],borderColor:'rgba(26,86,219,0.6)',backgroundColor:'rgba(26,86,219,0.04)',fill:true,tension:0.4,pointRadius:4,yAxisID:'y2'},
    ]
  },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#64635d',font:{size:11}}}},scales:{
    y:{type:'linear',position:'left',min:0,grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#9e9d96',font:{size:10},callback:v=>v+'h'}},
    y2:{type:'linear',position:'right',min:0,max:60,grid:{drawOnChartArea:false},ticks:{color:'#9e9d96',font:{size:10},callback:v=>v+'%'}}
  }}});
}

// ═══════════════════════════════════
// INIT
// ═══════════════════════════════════
document.addEventListener('DOMContentLoaded',()=>{
  // Seed active data for default company (ms)
  window._activeIncidents = CO_INCIDENTS['ms'];
  window._activeAttr = CO_ATTR['ms'];
  window._activeAlerts = CO_ALERTS['ms'];
  // setCompany handles all rendering
  setCompany('ms');
  runSim();
  startRealtime();
  document.getElementById('n-ab') && document.getElementById('n-ab').addEventListener('click',()=>setTimeout(renderAbChart,60));
  document.getElementById('n-canary') && document.getElementById('n-canary').addEventListener('click',()=>setTimeout(renderAbChart,60));
});
