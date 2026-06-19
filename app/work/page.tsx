import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layouts/site-shell";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { caseStudies } from "@/data/work";

export const metadata: Metadata = {
  title: "Selected Work | Mario Salamanca",
  description:
    "Selected engineering case studies covering validation tooling, data workflows, industrial interfaces, documentation systems, and this personal website.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Selected Work | Mario Salamanca",
    description:
      "Selected engineering case studies covering validation tooling, data workflows, industrial interfaces, documentation systems, and this personal website.",
    url: "/work",
  },
  twitter: {
    title: "Selected Work | Mario Salamanca",
    description:
      "Selected engineering case studies covering validation tooling, data workflows, industrial interfaces, documentation systems, and this personal website.",
  },
};

export default function WorkPage() {
  return (
    <SiteShell>
      <section className="border-b border-[var(--color-outline)]/70 bg-[radial-gradient(circle_at_50%_18%,rgba(91,140,255,0.18),transparent_34%),linear-gradient(180deg,#07101f_0%,#060a12_72%)] px-4 pb-16 pt-32 md:px-16 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link
            className="inline-flex items-center text-sm font-medium uppercase tracking-[0.08em] text-[var(--color-outline-strong)] transition hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            href="/"
          >
            Home
          </Link>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-secondary)]">
            Selected work
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-[1.08] text-[var(--color-text)] md:text-[72px] md:leading-[1.02]">
            Engineering work, explained with the context that matters.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            These case studies show how I approach validation, data, interfaces,
            documentation, and product systems. Professional work stays at a safe
            level of abstraction where confidentiality applies.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] px-4 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard caseStudy={caseStudy} key={caseStudy.slug} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
