import Link from "next/link";
import { siteData } from "@/data/site";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

export function WorkSection() {
  return (
    <section
      aria-labelledby="work"
      className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-16 md:pb-24"
    >
      <SectionHeading
        action={
          <Link
            className="inline-flex items-center gap-1 text-xs font-medium uppercase leading-none tracking-[0.08em] text-[var(--color-primary)] transition hover:text-[var(--color-secondary)]"
            href="#work"
          >
            View selected work
            <Icon name="external" size={16} />
          </Link>
        }
        id="work"
        title="Selected Builds"
      />
      <p className="mb-8 max-w-2xl text-sm leading-6 text-[var(--color-outline-strong)]">
        Some professional work is summarized at a high level to respect
        confidentiality.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {siteData.work.map((project) => (
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
