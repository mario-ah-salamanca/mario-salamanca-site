import { siteData } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "#";

export function ResourcesSection() {
  return (
    <section
      aria-labelledby="resources"
      className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-16 md:pb-24"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div>
          <SectionHeading id="resources" title="Free resources I'm building" />
          <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
            Small tools and templates for founders, builders, and creators who
            want more clarity before they build.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {siteData.resources.map((resource) => (
              <article
                className="rounded-[8px] border border-[var(--color-outline)]/40 bg-[var(--color-surface-low)] p-5"
                key={resource.title}
              >
                <h3 className="font-serif text-xl font-medium leading-tight text-[var(--color-text)]">
                  {resource.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {resource.body}
                </p>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">
                  {resource.cta}
                </div>
              </article>
            ))}
          </div>
        </div>

        <form
          action={formEndpoint}
          className="glass-panel rounded-[8px] p-6 md:p-8"
          method="POST"
        >
          {/* TODO: Configure NEXT_PUBLIC_FORMSPREE_ENDPOINT before launch. */}
          <input name="formType" type="hidden" value="resource-waitlist" />
          <label className="grid gap-2" htmlFor="resource-email">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
              Email
            </span>
            <input
              className="min-h-12 w-full rounded-[4px] border border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
              id="resource-email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </label>
          <Button className="mt-5 w-full" type="submit">
            Notify me
          </Button>
        </form>
      </div>
    </section>
  );
}
