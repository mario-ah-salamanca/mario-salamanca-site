import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layouts/site-shell";
import { Tag } from "@/components/ui/tag";
import { caseStudies, getCaseStudyBySlug } from "@/data/work";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.title} | Mario Salamanca`,
    description: caseStudy.summary,
    alternates: {
      canonical: `/work/${caseStudy.slug}`,
    },
    openGraph: {
      title: `${caseStudy.title} | Mario Salamanca`,
      description: caseStudy.summary,
      url: `/work/${caseStudy.slug}`,
    },
    twitter: {
      title: `${caseStudy.title} | Mario Salamanca`,
      description: caseStudy.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <SiteShell>
      <article>
        <header className="border-b border-[var(--color-outline)]/70 bg-[radial-gradient(circle_at_50%_18%,rgba(91,140,255,0.18),transparent_34%),linear-gradient(180deg,#07101f_0%,#060a12_72%)] px-4 pb-16 pt-32 md:px-16 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-4xl">
            <Link
              className="inline-flex items-center text-sm font-medium uppercase tracking-[0.08em] text-[var(--color-outline-strong)] transition hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
              href="/work"
            >
              All work
            </Link>
            <div className="mt-8 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.08] text-[var(--color-text)] md:text-[72px] md:leading-[1.02]">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              {caseStudy.summary}
            </p>
          </div>
        </header>

        <div className="bg-[var(--color-surface-low)] px-4 py-16 md:px-16 md:py-24">
          <div className="mx-auto grid max-w-4xl gap-10">
            <CaseStudySection title="Context">{caseStudy.context}</CaseStudySection>
            <CaseStudySection title="Problem">{caseStudy.problem}</CaseStudySection>
            <CaseStudySection title="Constraints">{caseStudy.constraints}</CaseStudySection>
            <CaseStudySection title="My role">{caseStudy.role}</CaseStudySection>
            <CaseStudySection title="Approach">{caseStudy.approach}</CaseStudySection>
            <CaseStudySection title="Architecture and workflow">{caseStudy.architecture}</CaseStudySection>
            <CaseStudyList title="Technologies used" items={caseStudy.technologies} />
            <CaseStudyList title="Implementation highlights" items={caseStudy.implementationHighlights} />
            <CaseStudySection title="Result or current status">{caseStudy.result}</CaseStudySection>
            <CaseStudySection title="What this work demonstrates">{caseStudy.whatItDemonstrates}</CaseStudySection>
            <CaseStudySection title="What I would improve next">{caseStudy.nextImprovement}</CaseStudySection>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}

type CaseStudySectionProps = {
  title: string;
  children: string;
};

function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <section className="border-t border-[var(--color-outline)]/70 pt-8">
      <h2 className="font-serif text-3xl font-semibold leading-tight text-[var(--color-text)]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{children}</p>
    </section>
  );
}

type CaseStudyListProps = {
  title: string;
  items: readonly string[];
};

function CaseStudyList({ title, items }: CaseStudyListProps) {
  return (
    <section className="border-t border-[var(--color-outline)]/70 pt-8">
      <h2 className="font-serif text-3xl font-semibold leading-tight text-[var(--color-text)]">
        {title}
      </h2>
      <ul className="mt-4 grid gap-3 text-base leading-7 text-[var(--color-muted)]">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-secondary)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
