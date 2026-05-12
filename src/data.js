// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update site content. Single source of truth.
// ─────────────────────────────────────────────────────────────

export const contact = {
  email: "josephwquinn90@outlook.com",
  linkedin: "https://www.linkedin.com/in/joseph-quinn-730622218",
  github: "https://github.com/Shineoverthemoon",
  gumroad: "https://quinnster215.gumroad.com/l/aws-clf-c02-study-bundle",
  // Resume: leave as "" to HIDE the Resume buttons site-wide.
  // To enable: drop a real PDF into /public and set this to its path, e.g. "/joseph-quinn-resume.pdf"
  resume: "",
};

export const identity = {
  name: "Joseph Quinn",
  role: "AI-Enabled Integration & Automation Engineer",
  headline:
    "I build automation, AI-assisted tools, and workflow systems that turn messy processes into usable products, reports, and demos.",
  subheadline:
    "Healthcare integration engineer with experience across Mirth, HL7, SQL, APIs, SFTP workflows, Python automation, AI tooling, web apps, and productized systems.",
  location: "United States",
};

// "What I Build" cards
export const capabilities = [
  {
    title: "Workflow Automation",
    body: "Python, scripts, schedulers, and integrations that remove repetitive admin work and replace fragile manual processes.",
    icon: "Workflow",
  },
  {
    title: "AI-Assisted Tools",
    body: "Retrieval, classification, and generation pipelines tuned for narrow business problems — not chatbots for the sake of chatbots.",
    icon: "BrainCircuit",
  },
  {
    title: "Healthcare Integrations",
    body: "Mirth Connect, HL7 v2, SFTP, EHR feeds, parser logic, and validation tooling for clinical and operational data.",
    icon: "HeartPulse",
  },
  {
    title: "Web Apps & Dashboards",
    body: "React + Vite single-page apps, lightweight dashboards, intake flows, and internal tools that ship without a backend army.",
    icon: "LayoutDashboard",
  },
  {
    title: "Digital Products",
    body: "Productized study guides, templates, and tooling published end-to-end — from draft to live storefront.",
    icon: "Package",
  },
  {
    title: "Interactive Experiments",
    body: "Educational and exploratory builds — visualizations, simulators, and small games that make abstract ideas tangible.",
    icon: "FlaskConical",
  },
];

// Featured Projects — filterable
// categories: Automation | AI | Healthcare | Web Apps | Digital Products | Lab
// status: Live | In Progress | Synthetic Demo | Private System | Demo | Sanitized Demos
// linkType:
//   "live"      → public link, opens new tab (use `link` + `linkLabel`)
//   "request"   → case study only, "Demo available on request"
//   "sanitized" → no public demo, "Sanitized demo only — no real client data"
//   "soon"      → "Case study coming soon"
export const projects = [
  {
    id: "ops-automation-lab",
    title: "Ops Automation Lab",
    category: "Automation",
    tags: ["Automation", "Services", "Demos"],
    status: "Live",
    linkType: "live",
    description:
      "Fixed-scope workflow automation offer with interactive demos for CSV cleanup, report generation, intake follow-up, ROI calculation, and repetitive admin workflows.",
    link: "https://shineoverthemoon.github.io/ops-automation-site/",
    linkLabel: "Visit site",
    note: null,
  },
  {
    id: "aws-cert-bundle",
    title: "AWS Cert Bundle Store",
    category: "Digital Products",
    tags: ["AWS", "CLF-C02", "Gumroad"],
    status: "Live",
    linkType: "live",
    description:
      "Published AWS Cloud Practitioner CLF-C02 study bundle — study guide, practice exam, answer key, cheat sheet, flashcards, timed quiz, and a 7-day study plan.",
    link: "https://quinnster215.gumroad.com/l/aws-clf-c02-study-bundle",
    linkLabel: "View on Gumroad",
    note: null,
  },
  {
    id: "vision-intelligence",
    title: "Vision Intelligence System",
    category: "AI",
    tags: ["RAG", "Research", "Pipelines"],
    status: "Private System",
    linkType: "request",
    description:
      "Private transcript intelligence system used to search large public-video archives, extract repeated market signals, and generate structured opportunity briefs.",
    link: null,
    linkLabel: null,
    note: "High-level case study only. Internal pipeline details are private.",
  },
  {
    id: "shipgate",
    title: "ShipGate",
    category: "Lab",
    tags: ["AI Safety", "DevTools", "CLI"],
    status: "In Progress",
    linkType: "soon",
    description:
      "CLI-style launch-risk auditor for AI-generated projects. Scans repos for placeholders, exposed secrets, weak documentation, unsafe claims, and launch-readiness issues.",
    link: null,
    linkLabel: null,
    note: null,
  },
  {
    id: "mirth-ai-triage",
    title: "Mirth AI Triage Demo",
    category: "Healthcare",
    tags: ["Mirth", "HL7", "AI"],
    status: "Synthetic Demo",
    linkType: "request",
    description:
      "AI-assisted troubleshooting demo for synthetic Mirth/HL7-style integration errors — classifies issues, suggests likely causes, and produces validation steps.",
    link: null,
    linkLabel: null,
    note: "Uses synthetic demo data only. No employer, client, or PHI data.",
  },
  {
    id: "neural-network-explorer",
    title: "Neural Network Explorer",
    category: "Lab",
    tags: ["Education", "Interactive", "Viz"],
    status: "Demo",
    linkType: "soon",
    description:
      "Interactive educational tool that visualizes how signals move through a simplified neural network — layers, weights, parameters, and output behavior.",
    link: null,
    linkLabel: null,
    note: null,
  },
  {
    id: "ai-game-lab",
    title: "AI Game Lab",
    category: "Lab",
    tags: ["Experiments", "RL", "Games"],
    status: "Demo",
    linkType: "soon",
    description:
      "Browser-based experiments — AI chess self-play, reinforcement learning concepts, mobile-friendly games, and high-score tracking.",
    link: null,
    linkLabel: null,
    note: null,
  },
  {
    id: "smb-workflow-demos",
    title: "Small Business Workflow Demos",
    category: "Web Apps",
    tags: ["React", "Dashboards", "CRM"],
    status: "Sanitized Demos",
    linkType: "sanitized",
    description:
      "Sanitized client-style demos — booking flows, CRM dashboards, artist portfolios, commerce workflows, admin panels, and lead tracking systems.",
    link: null,
    linkLabel: null,
    note: "All public examples use demo data and remove real client/customer information.",
  },
];

// Filter chips for the project grid
export const filters = [
  "All",
  "Automation",
  "AI",
  "Healthcare",
  "Web Apps",
  "Digital Products",
  "Lab",
];

// Services / "Ways I Can Help"
export const services = [
  { title: "Workflow automation & cleanup", body: "Replace repetitive manual processes with scripts, schedulers, and validated pipelines." },
  { title: "Website & form fixes", body: "Broken intake flows, slow pages, busted forms, deployment gremlins — fixed without rewriting your whole site." },
  { title: "Data & report automation", body: "From messy spreadsheets and exports to clean, repeatable reports and dashboards." },
  { title: "Resume & LinkedIn audits", body: "Engineering-credible reviews for technical and operations roles — clarity, signal, and positioning." },
  { title: "AI-assisted internal tools", body: "Narrow, useful tools that classify, summarize, or extract — not generic chatbots." },
  { title: "Integration troubleshooting", body: "Mirth, HL7, SFTP, APIs, queues — diagnosis, log triage, and validation workflows." },
];

// Operating Style — proof bullets
export const operatingStyle = [
  "Ship a working demo before writing a proposal.",
  "Synthetic data and sanitized fixtures — never real PHI or client data in public.",
  "Plain-English changelogs and runbooks alongside the code.",
  "Fixed-scope offers when possible. No open-ended retainers for first engagements.",
  "Comfortable in healthcare-grade environments: change control, audit trails, validation.",
];
