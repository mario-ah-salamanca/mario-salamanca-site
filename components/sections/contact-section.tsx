import { siteData } from "@/data/site";
import { ContactForm } from "@/components/sections/contact-form";

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;

export function ContactSection() {
  const { contact } = siteData;
  const { scheduling } = contact;

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
        <ContactForm contact={contact} endpoint={formEndpoint} />
        <div className="mt-7 border-t border-[var(--color-outline)]/50 pt-6">
          <h3 className="text-base font-medium text-[var(--color-text)]">
            {scheduling.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
            {scheduling.body}
          </p>
          {schedulingUrl ? (
            <a
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-[4px] border border-[var(--color-outline)] px-5 py-3 text-sm font-medium uppercase leading-none tracking-[0.08em] text-[var(--color-primary)] transition duration-200 hover:border-[var(--color-primary)] hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
              href={schedulingUrl}
              rel="noreferrer"
              target="_blank"
            >
              {scheduling.cta}
            </a>
          ) : (
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              {scheduling.unavailable}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
