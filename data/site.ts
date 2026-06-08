import type { IconName } from "@/components/ui/icons";

export const siteData = {
  name: "M. Salamanca",
  fullName: "Mario Salamanca",
  nav: [
    { label: "Home", href: "#" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Build Log", href: "#build-log" },
    { label: "About", href: "#about" },
  ],
  footerLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Source Code", href: "#" },
    { label: "Privacy", href: "#" },
  ],
  hero: {
    title: "Mario Salamanca.",
    emphasis: "Software Developer. Systems Builder. Creative Founder.",
    mobileTitle: "Engineering",
    mobileEmphasis: "Precision.",
    availability: "Available for new projects",
    desktopBody:
      "I help founders, creators, and small teams turn messy ideas into clear websites, workflows, prototypes, and digital systems - built with the discipline of dependable software engineering.",
    mobileBody:
      "I build high-performance web applications and robust infrastructure for forward-thinking teams.",
    primaryCta: "Work with me",
    mobilePrimaryCta: "Start a project",
    secondaryCta: "View selected work",
    mobileSecondaryCta: "View Build Log",
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
      title: "Frontend Systems",
      body: "Performant React & Vue architectures designed for scale and complex state management.",
      icon: "terminal",
    },
    {
      title: "Backend Infrastructure",
      body: "Resilient Node.js microservices and database design optimized for high-throughput.",
      icon: "database",
    },
  ] satisfies Array<{ title: string; body: string; icon: IconName }>,
  metrics: [
    { value: "99.9%", label: "Uptime Avg" },
    { value: "<50ms", label: "P95 Latency" },
    { value: "12+", label: "Enterprise Deployments" },
    { value: "100%", label: "Test Coverage Target" },
  ],
  work: [
    {
      title: "LedgerX Trading Terminal",
      body: "A high-frequency trading dashboard with real-time WebSocket integrations.",
      tags: ["Fintech", "React"],
    },
  ],
  contact: {
    title: "Initialize Sequence",
    body: "Ready to build? Drop your details and project specs.",
    emailLabel: "Email Address",
    emailPlaceholder: "sysadmin@domain.com",
    briefLabel: "Project Brief",
    briefPlaceholder: "Outline the architecture needs...",
    submitLabel: "Transmit Signal",
  },
} as const;
