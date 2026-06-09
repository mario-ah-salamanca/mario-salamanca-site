import type { IconName } from "@/components/ui/icons";

export const siteData = {
  name: "M. Salamanca",
  fullName: "Mario Salamanca",
  nav: [
    { label: "Home", href: "#" },
    { label: "Proof", href: "#credibility" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Resources", href: "#resources" },
    { label: "Build Log", href: "#build-log" },
    { label: "About", href: "#about" },
  ],
  footerLinks: [
    { label: "GitHub", href: "https://github.com/mario-ah-salamanca" },
    {
      label: "Source Code",
      href: "https://github.com/mario-ah-salamanca/mario-salamanca-site",
    },
  ],
  footerTodoLinks: [
    { label: "LinkedIn", note: "TODO: Add verified LinkedIn URL." },
    { label: "Email", note: "TODO: Add verified public email." },
  ],
  hero: {
    title: "Mario Salamanca.",
    emphasis: "Software Developer. Systems Builder. Creative Founder.",
    mobileTitle: "Mario Salamanca.",
    mobileEmphasis: "Systems Builder.",
    availability: "Available for new projects",
    desktopBody:
      "I help founders, creators, and small teams turn messy ideas into clear websites, workflows, prototypes, and digital systems - built with the discipline of dependable software engineering.",
    mobileBody:
      "I help turn messy ideas into clear websites, workflows, and prototypes.",
    primaryCta: "Work with me",
    mobilePrimaryCta: "Start a project",
    secondaryCta: "View selected work",
    mobileSecondaryCta: "View work",
    stack: [
      "C / C++ / Python",
      "React / Next.js",
      "System Integration",
      "Validation",
      "Automation",
      "AI Workflows",
    ],
  },
  services: [
    {
      title: "Website Clarity Sprint",
      body: "A focused website build for founders, freelancers, creators, and small businesses that need a clear, professional online presence.",
      outcome:
        "Launch a clear, responsive website that explains what you do and helps people take action.",
      deliverables: [
        "Homepage or landing page",
        "Clear section structure",
        "Copy direction",
        "Responsive design",
        "Contact flow",
        "Basic SEO",
        "Launch support",
      ],
      cta: "Get a clear website",
      icon: "terminal",
    },
    {
      title: "AI-Ready Workflow Setup",
      body: "A structured system for organizing project knowledge, files, prompts, documentation, and repeatable workflows.",
      outcome:
        "Turn scattered project knowledge into an organized workflow that AI tools can understand and support.",
      deliverables: [
        "Project documentation system",
        "Folder structure",
        "Prompt instruction files",
        "Decision log",
        "Task backlog",
        "Workflow map",
        "Automation recommendations",
      ],
      cta: "Organize my workflow",
      icon: "database",
    },
    {
      title: "Technical Prototype Blueprint",
      body: "A practical roadmap for turning a rough idea into a scoped, buildable first version.",
      outcome:
        "Clarify the idea, reduce technical uncertainty, and define the first buildable version.",
      deliverables: [
        "Idea clarification",
        "MVP scope",
        "Feature priorities",
        "Tech stack recommendation",
        "Architecture sketch",
        "Data model direction",
        "Prototype roadmap",
      ],
      cta: "Clarify my idea",
      icon: "blueprint",
    },
  ] satisfies Array<{
    title: string;
    body: string;
    outcome: string;
    deliverables: string[];
    cta: string;
    icon: IconName;
  }>,
  proof: [
    {
      title: "System Integration",
      body: "Experience connecting software, hardware-adjacent workflows, tools, and engineering environments where reliability matters.",
    },
    {
      title: "Validation & Testing",
      body: "Practical experience with test suites, validation workflows, integration checks, and software quality discipline.",
    },
    {
      title: "Data Modeling",
      body: "Experience transforming scattered configuration data into structured models, relational storage, and usable outputs.",
    },
    {
      title: "Automation Tooling",
      body: "Experience building scripts, parsers, CLI utilities, and reporting tools that reduce repetitive engineering work.",
    },
  ],
  work: [
    {
      title: "Aerospace Test Tooling Experience",
      body: "Verification tools, mock simulation layers, integration support, validation workflows, and automated reporting for complex engineering systems.",
      tags: ["Engineering", "Validation", "Tooling"],
      codeLabel: "validation-suite.ts",
      codeLines: [
        "const checks = mapValidationCases(systemInputs);",
        "await simulationLayer.runScenario(testCase);",
        "report.write(integrationResults);",
        "assertTraceability(requirements, evidence);",
      ],
    },
    {
      title: "Data Model & ETL Tooling",
      body: "A normalized data model, ETL pipeline, parsers, CLI tooling, and automated reports for turning scattered configuration data into usable engineering outputs.",
      tags: ["Data Modeling", "Python", "SQLite"],
      codeLabel: "etl_pipeline.py",
      codeLines: [
        "records = parser.read_configuration_files()",
        "model = normalize(records, schema)",
        "sqlite.write(model.tables)",
        "reports.export(engineering_outputs)",
      ],
    },
    {
      title: "Industrial HMI & CAN Communication",
      body: "C++/C# interfaces, CAN communication layers, and Angular-based HMI work for industrial machine interfaces.",
      tags: ["Embedded Systems", "HMI", "CAN"],
      codeLabel: "machine-interface.cpp",
      codeLines: [
        "canBus.connect(channelConfig);",
        "controller.publish(machineState);",
        "hmi.render(statusPanel);",
        "diagnostics.log(frame.health);",
      ],
    },
    {
      title: "Nocturne Personal Website System",
      body: "A premium personal website and design system built to position my work across engineering, websites, workflows, and creative projects.",
      tags: ["Next.js", "Design System", "Personal Brand"],
      codeLabel: "personal-site.tsx",
      codeLines: [
        "const sections = composeBrandNarrative();",
        "render(<DeepSignalLayout />);",
        "captureLead(contactFlow);",
        "shipStaticExport('github-pages');",
      ],
    },
    {
      title: "AI-Ready Documentation Kit",
      body: "A structured documentation system for projects, prompts, decisions, architecture notes, task backlogs, and changelogs.",
      tags: ["AI Workflows", "Documentation", "Systems"],
      codeLabel: "project-operating-system.md",
      codeLines: [
        "docs.add('architecture-notes');",
        "prompts.store(projectContext);",
        "decisions.log(tradeoff, reason);",
        "backlog.prioritize(nextClearStep);",
      ],
    },
  ],
  contact: {
    title: "Have a messy idea?",
    body: "Send me the rough version - the notes, screenshots, half-clear concept, unfinished plan, or problem you cannot structure yet. I'll help you find the next clear step.",
    submitLabel: "Send the messy version",
    privacyNote:
      "Privacy note: Your details are used only to reply to this inquiry. Because this site is operated from Germany, I keep the first exchange minimal; this form is processed through Formspree, so please avoid secrets or confidential data.",
  },
  resources: [
    {
      title: "Website Clarity Checklist",
      body: "The 10 questions your website must answer before people trust you.",
      cta: "Join the waitlist",
    },
    {
      title: "AI-Ready Project Documentation Template",
      body: "A structure for project notes, architecture, prompts, decisions, backlog, and changelog.",
      cta: "Get notified",
    },
    {
      title: "Idea to MVP Worksheet",
      body: "A simple framework to turn a messy idea into a buildable first version.",
      cta: "Download soon",
    },
  ],
  buildLog: [
    "Building my personal website as a digital operating system",
    "How I organize a Next.js project before writing components",
    "What aerospace software taught me about validation",
    "My first notes on Broken Access Control",
    "How I use AI to document software projects faster",
    "Why I'm learning Shopify after frontend fundamentals",
  ],
} as const;
