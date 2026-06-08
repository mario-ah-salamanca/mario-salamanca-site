import Link from "next/link";
import type { ReactNode } from "react";
import { siteData } from "@/data/site";
import { Icon } from "@/components/ui/icons";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="deep-signal-bg min-h-screen overflow-x-hidden bg-[var(--color-void)] text-[var(--color-text)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-outline)]/50 bg-[var(--color-surface)]/80 backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-4 md:h-20 md:px-16"
        >
          <Link
            className="font-serif text-xl font-bold leading-none text-[var(--color-text)] md:text-2xl"
            href="#"
          >
            {siteData.name}
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
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
            className="hidden rounded-[4px] bg-[var(--color-primary-strong)] px-4 py-3 text-sm font-medium leading-none text-[var(--color-on-primary)] transition hover:bg-[var(--color-primary)] md:inline-flex"
            href="#contact"
          >
            Start a project
          </Link>

          <button
            aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-[var(--color-muted)] transition hover:bg-white/[0.04] hover:text-[var(--color-primary)] md:hidden"
            type="button"
          >
            <Icon name="menu" size={22} />
          </button>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[var(--color-outline)]/70 bg-[var(--color-surface-low)]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-4 py-16 text-center md:flex-row md:justify-between md:px-16 md:text-left">
          <div className="font-serif text-2xl text-[var(--color-muted)]">
            {siteData.name}
          </div>
          <div className="text-base text-[var(--color-secondary)]">
            © 2024 Mario Salamanca. Built for reliability.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-base text-[var(--color-outline-strong)]">
            {siteData.footerLinks.map((link) => (
              <Link
                className="transition hover:text-[var(--color-primary)]"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
