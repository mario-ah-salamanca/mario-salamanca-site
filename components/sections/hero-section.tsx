import Link from "next/link";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import Aurora from "../backgrounds/aurora";

const heroAuroraColors = ["#003fbf", "#4c67ff", "#0639dc"];

export function HeroSection() {
  const { hero } = siteData;

  return (
    <section className="relative flex min-h-[680px] items-start overflow-hidden border-b border-[var(--color-outline)]/70 bg-[radial-gradient(circle_at_50%_18%,rgba(91,140,255,0.22),transparent_34%),linear-gradient(180deg,#07101f_0%,#060a12_72%)] px-4 pb-16 pt-32 md:min-h-screen md:items-center md:bg-[var(--color-void)] md:px-16 md:pb-20 md:pt-40">
      <div className="absolute inset-0 z-0 hidden md:block">
        <Aurora colorStops={heroAuroraColors} amplitude={0.7} blend={0.55} />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(91,140,255,0.1),transparent_42%),linear-gradient(180deg,rgba(6,10,18,0.2),rgba(6,10,18,0.84))] md:bg-[radial-gradient(circle_at_center,rgba(91,140,255,0.1),transparent_42%),linear-gradient(180deg,rgba(6,10,18,0.08),rgba(6,10,18,0.62))]" />
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
        <div className="h-[560px] w-[560px] rounded-full bg-[var(--color-primary-strong)] opacity-[0.05] blur-[110px] md:h-[800px] md:w-[800px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-[999px] border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-2 md:hidden">
          <span className="signal-dot" />
          <span className="text-xs font-medium uppercase leading-none tracking-[0.1em] text-[var(--color-primary)]">
            {hero.availability}
          </span>
        </div>

        <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.08] text-[var(--color-text)] md:text-[64px] md:leading-[1.1]">
          {hero.title}
          <br />
          <span className="text-[var(--color-primary)] md:text-[var(--color-primary-strong)]">
            {hero.emphasis}
          </span>
        </h1>

        <p className="mt-5 max-w-[290px] text-base leading-7 text-[var(--color-muted)] md:mt-8 md:max-w-2xl md:text-lg md:leading-8">
          {hero.body}
        </p>

        <div className="mt-9 flex w-full flex-col gap-4 sm:max-w-md sm:flex-row sm:justify-center md:mt-12">
          <Button className="w-full sm:w-auto" href="#contact">
            {hero.primaryCta}
            <Icon className="md:hidden" name="arrow" size={18} />
          </Button>
          <Button className="w-full sm:w-auto" href="#work" variant="secondary">
            {hero.secondaryCta}
          </Button>
        </div>

        <Link
          className="mt-5 inline-flex items-center gap-2 rounded-[4px] text-sm font-medium text-[var(--color-outline-strong)] transition hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
          href={hero.resumeHref}
        >
          {hero.resumeCta}
          <Icon name="arrow" size={16} />
        </Link>

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
