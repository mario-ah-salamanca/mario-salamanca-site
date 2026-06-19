export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  tags: readonly string[];
  context: string;
  problem: string;
  constraints: string;
  role: string;
  approach: string;
  architecture: string;
  technologies: readonly string[];
  implementationHighlights: readonly string[];
  result: string;
  whatItDemonstrates: string;
  nextImprovement: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "aerospace-test-tooling",
    title: "Aerospace Test Tooling Experience",
    summary:
      "Verification tools, mock simulation layers, integration support, and reporting workflows for aerospace hardware-integration test benches.",
    tags: ["Engineering", "Validation", "Tooling"],
    context:
      "Aerospace integration work depends on repeatable evidence that software and connected systems behave as expected. I worked on software components and supporting tools used in hardware-integration test-bench workflows across Windows and Linux environments.",
    problem:
      "Test-bench and integration activities need useful validation support without making the people running them reconstruct every scenario or result by hand. The work needed software that could help exercise scenarios, surface useful evidence, and support troubleshooting as a system bench came together.",
    constraints:
      "The work involved confidential aerospace systems, so this account intentionally excludes program names, system designs, requirements, test data, defects, and performance figures. The description stays at the level of tools, workflows, and engineering responsibilities.",
    role:
      "Software Engineer contributing C, C++, and Python components, verification tooling, mock simulation support, automated reporting, and technical troubleshooting during system integration.",
    approach:
      "I approached the work through validation workflows: clarify the scenario and interfaces, support repeatable checks with tools or simulation layers, capture results in usable form, and work with the integration context when a result needed investigation.",
    architecture:
      "The work connected test-bench software components, mock or simulation layers, validation cases, communication interfaces, and reporting outputs. It was designed to support evidence and investigation around system behavior rather than present an isolated user-facing application.",
    technologies: [
      "C and C++",
      "Python",
      "pytest",
      "Windows and Linux",
      "Hardware-integration test benches",
      "HTTP, CAN, AFDX, and RS-422 communication contexts",
    ],
    implementationHighlights: [
      "Built verification tools and mock simulation layers to support bench validation and system integration workflows.",
      "Contributed software support and troubleshooting while a new system bench was integrated.",
      "Supported automated reporting and validation evidence for engineering workflows.",
      "Worked with communication support across HTTP, CAN, AFDX, and RS-422 contexts.",
    ],
    result:
      "The work contributed practical software support for validation and integration activities. Its value was in making engineering checks, evidence, and troubleshooting more repeatable within the wider bench and system workflow.",
    whatItDemonstrates:
      "A reliability-focused approach to tooling: understand interfaces and constraints, make validation repeatable, and keep evidence useful for the people integrating and reviewing a system.",
    nextImprovement:
      "For a public technical walkthrough, I would build a separate, non-confidential demonstration that models a small validation workflow end to end, including simulated inputs, checks, and traceable reporting.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyByTitle(title: string) {
  return caseStudies.find((caseStudy) => caseStudy.title === title);
}
