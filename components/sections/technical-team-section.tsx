import { SectionHeading } from "@/components/ui/section-heading";
import { siteData } from "@/data/site";

export function TechnicalTeamSection() {
  return (
    <section
      aria-labelledby="technical-teams"
      className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-16 md:pb-24"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <SectionHeading
            id="technical-teams"
            title="Why I'm useful on technical teams"
          />
          <p className="max-w-xl text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
            I am comfortable where software meets real-world constraints:
            unclear requirements, validation work, documentation gaps, and
            tools that need to be useful rather than flashy.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {siteData.technicalTeamStrengths.map((strength) => (
            <article
              className="glass-panel rounded-[8px] p-5 md:p-6"
              key={strength.title}
            >
              <h3 className="font-serif text-xl font-medium leading-tight text-[var(--color-text)]">
                {strength.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {strength.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
