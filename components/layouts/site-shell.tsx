import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { siteData } from "@/data/site";

type SiteShellProps = {
  children: ReactNode;
};

const footerLinkClass =
  "grid gap-1 text-left transition hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]";

const footerPlaceholderClass =
  "grid gap-1 text-left text-[var(--color-outline-strong)]/70";

export function SiteShell({ children }: SiteShellProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="deep-signal-bg min-h-screen overflow-x-hidden bg-[var(--color-void)] text-[var(--color-text)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-outline)]/50 bg-[var(--color-surface)]/80 backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 md:h-20 md:px-16 lg:h-24"
        >
          <Link
            className="inline-flex shrink-0 items-center rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            href="#"
          >
            <Image
              alt={siteData.logo.alt}
              className="h-auto w-[174px] sm:w-[220px] lg:w-[280px] xl:w-[328px]"
              height={siteData.logo.height}
              src={siteData.logo.src}
              priority
              width={siteData.logo.width}
            />
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {siteData.nav.map((item, index) => (
              <Link
                className={
                  index === 0
                    ? "border-b-2 border-[var(--color-primary)] pb-1 text-[var(--color-primary)]"
                    : "text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
                }
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            className="hidden rounded-[4px] bg-[var(--color-primary-strong)] px-4 py-3 text-sm font-medium leading-none text-[var(--color-on-primary)] transition hover:bg-[var(--color-primary)] lg:inline-flex"
            href="#contact"
          >
            Start a project
          </Link>

          <Link
            className="inline-flex rounded-[4px] bg-[var(--color-primary-strong)] px-3 py-3 text-xs font-medium uppercase leading-none tracking-[0.08em] text-[var(--color-on-primary)] transition hover:bg-[var(--color-primary)] lg:hidden"
            href="#contact"
          >
            Start a project
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[var(--color-outline)]/70 bg-[var(--color-surface-low)]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 py-16 md:grid-cols-[1fr_auto] md:px-16">
          <div>
            <Image
              alt={`${siteData.logo.alt} logo`}
              className="h-auto w-[180px] sm:w-[232px] md:w-[288px] lg:w-[328px]"
              height={siteData.logo.height}
              src={siteData.logo.src}
              width={siteData.logo.width}
            />
            <div className="mt-3 text-base text-[var(--color-secondary)]">
              © {currentYear} {siteData.fullName}.{" "}
              {siteData.footer.trustStatement}
            </div>
          </div>

          <nav
            aria-label="Professional links"
            className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-[var(--color-outline-strong)] sm:grid-cols-3 md:flex md:flex-wrap md:justify-end"
          >
            {siteData.footer.trustLinks.map((link) => {
              const note =
                "note" in link ? (
                  <span className="text-xs text-[var(--color-muted)]">
                    {link.note}
                  </span>
                ) : null;

              if (link.status === "planned") {
                return (
                  <span
                    aria-label={`${link.label}: ${link.note}`}
                    className={footerPlaceholderClass}
                    key={link.label}
                  >
                    <span>{link.label}</span>
                    {note}
                  </span>
                );
              }

              const content = (
                <>
                  <span>{link.label}</span>
                  {note}
                </>
              );

              if (link.href.startsWith("#") || link.href.startsWith("/")) {
                return (
                  <Link
                    className={footerLinkClass}
                    href={link.href}
                    key={link.label}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <a
                  className={footerLinkClass}
                  href={link.href}
                  key={link.label}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  {content}
                </a>
              );
            })}
          </nav>
        </div>
      </footer>
    </div>
  );
}
