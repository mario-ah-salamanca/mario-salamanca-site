import { siteData } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function CredibilitySection() {
  return (
    <section
      aria-labelledby="credibility"
      className="mx-auto w-full max-w-[1440px] px-4 py-16 md:px-16 md:py-24"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            id="credibility"
            title="Built in environments where reliability matters."
          />
          <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
            My background includes software engineering work across aerospace
            and mechanical systems, where validation, documentation,
            integration, and precision are not optional. That experience shapes
            how I build digital products: clear structure, careful
            implementation, and fewer fragile shortcuts.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {siteData.proof.map((proof) => (
            <article
              className="glass-panel rounded-[8px] p-5 md:p-6"
              key={proof.title}
            >
              <h3 className="font-serif text-xl font-medium leading-tight text-[var(--color-text)]">
                {proof.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {proof.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
