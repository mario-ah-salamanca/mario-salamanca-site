import Link from "next/link";
import { siteData } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function BuildLogPreviewSection() {
  return (
    <section
      aria-labelledby="build-log"
      className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-16 md:pb-24"
    >
      <SectionHeading id="build-log" title="Build Log" />
      <p className="max-w-3xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
        I document what I build, what I learn, and how I think through
        software, systems, freelancing, AI workflows, security, and creative
        discipline.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {siteData.buildLog.map((post) => (
          <Link
            className="rounded-[8px] border border-[var(--color-outline)]/40 bg-[var(--color-surface-low)] p-5 transition hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-surface-raised)]"
            href="#"
            key={post}
          >
            <h3 className="font-serif text-xl font-medium leading-tight text-[var(--color-text)]">
              {post}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
