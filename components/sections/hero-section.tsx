import { siteData } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

export function HeroSection() {
  const { hero } = siteData;

  return (
    <section className="relative flex min-h-[680px] items-start overflow-hidden border-b border-[var(--color-outline)]/70 px-4 pb-16 pt-32 md:min-h-screen md:items-center md:px-16 md:pb-20 md:pt-40">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[560px] w-[560px] rounded-full bg-[var(--color-primary-strong)] opacity-[0.07] blur-[110px] md:h-[800px] md:w-[800px]" />
      </div>

      <div className="deep-glow relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-[999px] border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-2 md:hidden">
          <span className="signal-dot" />
          <span className="text-xs font-medium uppercase leading-none tracking-[0.1em] text-[var(--color-primary)]">
            {hero.availability}
          </span>
        </div>

        <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.08] text-[var(--color-text)] md:text-[64px] md:leading-[1.1]">
          <span className="hidden md:inline">
            {hero.title}
            <br />
            <span className="text-[var(--color-primary-strong)]">
              {hero.emphasis}
            </span>
          </span>
          <span className="md:hidden">
            {hero.mobileTitle}
            <br />
            <span className="text-[var(--color-primary)]">
              {hero.mobileEmphasis}
            </span>
          </span>
        </h1>

        <p className="mt-5 max-w-[290px] text-base leading-7 text-[var(--color-muted)] md:mt-8 md:max-w-2xl md:text-lg md:leading-8">
          <span className="md:hidden">{hero.mobileBody}</span>
          <span className="hidden md:inline">{hero.desktopBody}</span>
        </p>

        <div className="mt-9 flex w-full flex-col gap-4 sm:max-w-md sm:flex-row sm:justify-center md:mt-12">
          <Button className="w-full sm:w-auto" href="#contact">
            <span className="md:hidden">{hero.mobilePrimaryCta}</span>
            <span className="hidden md:inline">{hero.primaryCta}</span>
            <Icon className="md:hidden" name="arrow" size={18} />
          </Button>
          <Button className="w-full sm:w-auto" href="#work" variant="secondary">
            <span className="md:hidden">{hero.mobileSecondaryCta}</span>
            <span className="hidden md:inline">{hero.secondaryCta}</span>
          </Button>
        </div>

        <div className="mt-20 hidden flex-wrap items-center justify-center gap-2 text-sm uppercase tracking-[0.08em] text-[var(--color-outline-strong)] md:flex">
          {hero.stack.map((item, index) => (
            <span className="contents" key={item}>
              <span>{item}</span>
              {index < hero.stack.length - 1 ? (
                <span className="text-[var(--color-outline)]">•</span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
