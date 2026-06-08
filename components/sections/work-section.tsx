import Link from "next/link";
import { siteData } from "@/data/site";
import { Icon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

export function WorkSection() {
  return (
    <section
      aria-labelledby="work"
      className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-16 md:pb-24"
    >
      <SectionHeading
        action={
          <Link
            className="inline-flex items-center gap-1 text-xs font-medium uppercase leading-none tracking-[0.08em] text-[var(--color-primary)] transition hover:text-[var(--color-secondary)]"
            href="#"
          >
            All
            <Icon name="external" size={16} />
          </Link>
        }
        id="work"
        title="Selected Builds"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        {siteData.work.map((project) => (
          <article
            className="overflow-hidden rounded-[8px] border border-white/[0.07] bg-[var(--color-surface-raised)]"
            key={project.title}
          >
            <div className="code-preview h-[240px] md:h-[320px]" aria-hidden="true">
              <div className="code-preview__bar">
                <span />
                <span />
                <span />
              </div>
              <div className="code-preview__body">
                {[
                  "const stream = createSignal(feed);",
                  "await ledger.sync(orderBook);",
                  "latency.p95 < 50 ? ship() : tune();",
                  "socket.on('tick', reconcile);",
                  "validate.risk(exposure.matrix);",
                  "render(<TradingTerminal />);",
                ].map((line) => (
                  <div className="code-preview__line" key={line}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <h3 className="font-serif text-2xl font-medium leading-tight text-[var(--color-text)]">
                {project.title}
              </h3>
              <p className="text-base leading-7 text-[var(--color-muted)]">
                {project.body}
              </p>
            </div>
          </article>
        ))}

        <div
          className="hidden rounded-[8px] border border-[var(--color-outline)]/50 bg-[var(--color-surface-low)] p-8 lg:block"
          id="build-log"
        >
          <div className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-primary)]">
            Build Log
          </div>
          <h3 className="mt-4 font-serif text-3xl font-medium leading-tight text-[var(--color-text)]">
            Field notes from systems that need to stay dependable.
          </h3>
          <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
            Prototypes, integrations, validation passes, and product decisions
            written with the same precision as the code behind them.
          </p>
        </div>
      </div>
    </section>
  );
}
