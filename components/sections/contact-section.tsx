import { siteData } from "@/data/site";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const { contact } = siteData;

  return (
    <section
      className="mx-auto w-full max-w-[1440px] px-4 pb-20 md:px-16 md:pb-28"
      id="contact"
    >
      <div className="glass-panel deep-glow relative mx-auto max-w-3xl overflow-hidden rounded-[8px] border-[var(--color-primary)]/20 p-6 md:p-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <h2 className="font-serif text-3xl font-medium leading-tight text-[var(--color-text)] md:text-4xl">
          {contact.title}
        </h2>
        <p className="mt-4 max-w-md text-base leading-7 text-[var(--color-muted)]">
          {contact.body}
        </p>
        <form className="mt-7 grid gap-5">
          <label className="grid gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
              {contact.emailLabel}
            </span>
            <input
              className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
              placeholder={contact.emailPlaceholder}
              type="email"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
              {contact.briefLabel}
            </span>
            <textarea
              className="min-h-28 w-full resize-none border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
              placeholder={contact.briefPlaceholder}
              rows={4}
            />
          </label>
          <Button className="mt-2 w-full" type="submit">
            {contact.submitLabel}
          </Button>
        </form>
      </div>
    </section>
  );
}
