import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteData } from "@/data/site";

export function AudiencePathsSection() {
  return (
    <section
      aria-labelledby="audience-paths"
      className="mx-auto w-full max-w-[1440px] px-4 py-16 md:px-16 md:py-24"
    >
      <SectionHeading
        id="audience-paths"
        title="Two ways to work together."
      />
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        {siteData.audiencePaths.map((path) => (
          <article
            className="glass-panel flex min-h-full flex-col rounded-[8px] p-6 md:p-8"
            key={path.title}
          >
            <h3 className="font-serif text-2xl font-medium leading-tight text-[var(--color-text)]">
              {path.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
              {path.body}
            </p>
            <Button className="mt-8 w-full md:w-fit" href={path.href} variant="secondary">
              {path.cta}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
