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

export const caseStudies: readonly CaseStudy[] = [];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyByTitle(title: string) {
  return caseStudies.find((caseStudy) => caseStudy.title === title);
}
