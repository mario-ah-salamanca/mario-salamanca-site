import { siteData } from "@/data/site";
import { ContactForm } from "@/components/sections/contact-form";

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

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
        <ContactForm contact={contact} endpoint={formEndpoint} />
      </div>
    </section>
  );
}
