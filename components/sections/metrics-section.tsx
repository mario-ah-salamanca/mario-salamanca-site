import { siteData } from "@/data/site";

export function MetricsSection() {
  return (
    <section className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-4 px-4 pb-16 md:grid-cols-4 md:px-16 md:pb-24">
      {siteData.metrics.map((metric) => (
        <div
          className="rounded-[4px] border border-[var(--color-outline)]/50 bg-[var(--color-surface-low)] px-4 py-5 text-center"
          key={metric.label}
        >
          <div className="font-serif text-2xl font-medium leading-none text-[var(--color-primary)]">
            {metric.value}
          </div>
          <div className="mt-3 text-[11px] font-semibold uppercase leading-tight tracking-[0.08em] text-[var(--color-muted)]">
            {metric.label}
          </div>
        </div>
      ))}
    </section>
  );
}
