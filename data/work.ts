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
  {
    slug: "industrial-hmi-can-communication",
    title: "Industrial HMI & CAN Communication",
    summary:
      "C++ and C# interface work, CAN communication support, and Angular HMI development for industrial machine workflows.",
    tags: ["Embedded Systems", "HMI", "CAN"],
    context:
      "Industrial equipment needs software that makes machine state and operating modes understandable to people while reliably exchanging data with connected components. I worked on interfaces and communication support for an industrial attachment-device and filling-machine context.",
    problem:
      "The implementation needed to connect operating modes and machine information across a CAN communication layer, software integration points, and a human-machine interface. Each part had to support the surrounding workflow instead of behaving as an isolated feature.",
    constraints:
      "This was professional industrial work. Product names, customer details, machine specifications, production data, and performance figures are omitted. The case study describes the technologies and responsibilities without disclosing proprietary implementation details.",
    role:
      "Software Developer working with C++11, C#, CAN communication, an Angular HMI, and an integration layer between system resources and a NoSQL database.",
    approach:
      "I worked across the interface boundaries: implement the communication support needed for real-time exchange, connect software artifacts where integration was required, and build HMI functionality around the machine workflow people needed to operate.",
    architecture:
      "The solution spanned a C++ communication layer for CAN-bus exchange, application-level C++ and C# interfaces for operating modes and device behavior, an Angular HMI for workflow interaction, and a C# integration layer connected to a NoSQL data store.",
    technologies: [
      "C++11",
      "C#",
      "Angular",
      "CAN bus",
      "NoSQL database integration",
      "Jira, Bitbucket, and Atlassian Cloud",
    ],
    implementationHighlights: [
      "Developed C++11 and C# software for attachment-device interfaces and operating modes over CAN.",
      "Implemented a C++ communication layer for real-time CAN-bus data exchange.",
      "Built Angular HMI functionality for filling-machine workflows.",
      "Implemented a C# layer connecting system resources and artifacts to a NoSQL database.",
    ],
    result:
      "The work delivered software across the communication, interface, and operator-facing layers needed by the industrial workflow. It provided hands-on experience with the practical coupling between machine communication and usable software interfaces.",
    whatItDemonstrates:
      "Ability to work across embedded-adjacent communication, application integration, and HMI concerns while treating the interfaces between them as first-class engineering work.",
    nextImprovement:
      "A public demonstrator could make the interaction easier to inspect by simulating CAN frames, showing operator states in a small HMI, and documenting the boundary between communication, application, and UI layers.",
  },
  {
    slug: "data-model-etl-tooling",
    title: "Data Model & ETL Tooling",
    summary:
      "A SQLite-backed canonical model, Python ETL and parser workflows, CLI utilities, and reporting support for fragmented engineering configuration data.",
    tags: ["Data Modeling", "Python", "SQLite"],
    context:
      "Engineering workflows often accumulate configuration and signal information across legacy, file-based sources. I worked on a data-tooling effort that brought those disjointed inputs into a more structured foundation for engineering users.",
    problem:
      "When information lives in separate source formats, it is difficult to validate, query, initialize, or report on consistently. The work needed a canonical model and repeatable import path that could make the data usable without relying on ad hoc manual interpretation.",
    constraints:
      "The underlying engineering data, file formats, schema details, and generated outputs are confidential. This case study therefore explains the data-engineering approach and tools without publishing source data, proprietary rules, or scale claims.",
    role:
      "Software Engineer designing a SQLite-backed canonical data model and implementing Python ETL, parsing, CLI, reporting, and pytest validation workflows.",
    approach:
      "I treated the source inputs as a data-contract problem: inspect and parse the available files, normalize useful entities into a canonical structure, persist the model, and expose repeatable import and reporting operations through tooling rather than one-off scripts.",
    architecture:
      "The workflow moved from file-based configuration and signal sources through Python parsers and transformations into a SQLite-backed canonical model. CLI commands supported project initialization and batch import, while reports and validation checks consumed the structured data for engineering use.",
    technologies: [
      "Python",
      "Pandas",
      "SQLite and SQL",
      "Regular expressions",
      "CLI tooling",
      "pytest",
    ],
    implementationHighlights: [
      "Designed a SQLite-backed canonical model for legacy configuration and signal data.",
      "Implemented ETL and parser workflows using Python, Pandas, regular expressions, and SQL.",
      "Built command-line tooling for initialization, batch import, and compliance or report generation.",
      "Added validation coverage for unit logic, database integrity, and integration workflows.",
    ],
    result:
      "The resulting workflow gave engineering users a more structured path from scattered file-based inputs to normalized storage and usable outputs. It shifted repeatable work into versionable tooling and validation checks.",
    whatItDemonstrates:
      "Ability to turn ambiguous, fragmented data into a model and tooling workflow that is easier to inspect, validate, rerun, and extend.",
    nextImprovement:
      "Given a non-confidential dataset, I would add a public example with sample inputs, a schema diagram, data-quality checks, and before-and-after reporting so the design tradeoffs can be inspected end to end.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyByTitle(title: string) {
  return caseStudies.find((caseStudy) => caseStudy.title === title);
}
