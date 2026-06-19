import { siteData } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services"
      className="mx-auto w-full max-w-[1440px] px-4 py-16 md:px-16 md:py-24"
    >
      <SectionHeading id="services" title="Work With Me" />
      <p className="mb-8 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
        Engineering roles are my primary focus. I am also available for select
        freelance projects that need clarity, structure, and practical execution.
      </p>

      <div className="mb-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
        {siteData.workWithMe.map((path) => (
          <article
            className="rounded-[8px] border border-[var(--color-outline)]/60 bg-[var(--color-surface-low)] p-6 md:p-8"
            key={path.title}
          >
            <h3 className="font-serif text-2xl font-medium leading-tight text-[var(--color-text)]">
              {path.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
              {path.body}
            </p>
            <Button className="mt-6 w-full md:w-fit" href={path.href} variant="secondary">
              {path.cta}
            </Button>
          </article>
        ))}
      </div>

      <h3 className="mb-6 font-serif text-2xl font-medium leading-tight text-[var(--color-text)] md:text-3xl">
        Select freelance project offers
      </h3>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {siteData.services.map((service) => (
          <article
            className="glass-panel flex min-h-full flex-col rounded-[8px] p-6 md:p-8"
            key={service.title}
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[4px] border border-[var(--color-outline)]/70 bg-[var(--color-surface-high)] text-[var(--color-primary)]">
              <Icon name={service.icon} size={21} />
            </div>
            <h3 className="font-serif text-2xl font-medium leading-tight text-[var(--color-text)]">
              {service.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-muted)]">
              {service.body}
            </p>
            <div className="mt-6 rounded-[6px] border border-[var(--color-primary)]/20 bg-[var(--color-primary-strong)]/10 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">
                Outcome
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">
                {service.outcome}
              </p>
            </div>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--color-muted)]">
              {service.deliverables.map((deliverable) => (
                <li className="flex gap-3" key={deliverable}>
                  <Icon
                    className="mt-1 shrink-0 text-[var(--color-secondary)]"
                    name="check"
                    size={16}
                  />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full md:w-fit" href="#contact">
              {service.cta}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
