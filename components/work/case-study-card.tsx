import Link from "next/link";
import type { CaseStudy } from "@/data/work";
import { Tag } from "@/components/ui/tag";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[8px] border border-[var(--color-outline)]/70 bg-[var(--color-surface-raised)] p-6 md:p-8">
      <div className="flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-[var(--color-text)]">
        {caseStudy.title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
        {caseStudy.summary}
      </p>
      <Link
        className="mt-7 inline-flex w-fit min-h-11 items-center rounded-[4px] border border-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
        href={`/work/${caseStudy.slug}`}
      >
        Read case study
      </Link>
    </article>
  );
}
