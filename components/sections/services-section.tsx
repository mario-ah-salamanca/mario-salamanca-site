import { siteData } from "@/data/site";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services"
      className="mx-auto w-full max-w-[1440px] px-4 py-16 md:px-16 md:py-24"
    >
      <SectionHeading id="services" title="Architecture & Code" />
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {siteData.services.map((service) => (
          <article className="glass-panel rounded-[8px] p-6 md:p-8" key={service.title}>
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[4px] border border-[var(--color-outline)]/70 bg-[var(--color-surface-high)] text-[var(--color-primary)]">
              <Icon name={service.icon} size={21} />
            </div>
            <h3 className="font-serif text-2xl font-medium leading-tight text-[var(--color-text)]">
              {service.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-muted)]">
              {service.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
