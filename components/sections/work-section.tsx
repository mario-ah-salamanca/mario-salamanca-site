import Link from "next/link";
import { siteData } from "@/data/site";
import { getCaseStudyByTitle } from "@/data/work";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

export function WorkSection() {
  return (
    <section
      aria-labelledby="work"
      className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-16 md:pb-24"
    >
      <SectionHeading id="work" title="Selected Engineering & Product Work" />
      <p className="mb-8 max-w-2xl text-sm leading-6 text-[var(--color-outline-strong)]">
        Selected examples of systems, tooling, and product work. Professional
        work is summarized at a high level to respect confidentiality.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {siteData.work.map((project) => {
          const caseStudy = getCaseStudyByTitle(project.title);

          return (
          <article
            className="overflow-hidden rounded-[8px] border border-white/[0.07] bg-[var(--color-surface-raised)]"
            key={project.title}
          >
            <div className="code-preview h-[240px] md:h-[320px]" aria-hidden="true">
              <div className="code-preview__bar">
                <span />
                <span />
                <span />
              </div>
              <div className="code-preview__body">
                <div className="code-preview__label">{project.codeLabel}</div>
                {project.codeLines.map((line) => (
                  <div className="code-preview__line" key={line}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <h3 className="font-serif text-2xl font-medium leading-tight text-[var(--color-text)]">
                {project.title}
              </h3>
              <p className="text-base leading-7 text-[var(--color-muted)]">
                {project.body}
              </p>
              {caseStudy ? (
                <Link
                  className="inline-flex w-fit min-h-11 items-center rounded-[4px] border border-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  href={`/work/${caseStudy.slug}`}
                >
                  Read case study
                </Link>
              ) : null}
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
