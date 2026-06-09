import { siteData } from "@/data/site";
import { Button } from "@/components/ui/button";

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "#";

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
        <form action={formEndpoint} className="mt-7 grid gap-5" method="POST">
          {/* TODO: Configure NEXT_PUBLIC_FORMSPREE_ENDPOINT before launch. */}
          <label className="grid gap-2" htmlFor="contact-name">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
              Name
            </span>
            <input
              className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
              id="contact-name"
              name="name"
              placeholder="Your name"
              required
              type="text"
            />
          </label>
          <label className="grid gap-2" htmlFor="contact-email">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
              Email
            </span>
            <input
              className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
              id="contact-email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </label>
          <label className="grid gap-2" htmlFor="project-type">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
              Project type
            </span>
            <select
              className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
              id="project-type"
              name="projectType"
              required
            >
              <option value="">Select one</option>
              <option>I need a website</option>
              <option>I need an AI/workflow system</option>
              <option>I need a prototype</option>
              <option>I want to collaborate</option>
              <option>Other</option>
            </select>
          </label>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2" htmlFor="budget-range">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
                Budget range
              </span>
              <select
                className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
                id="budget-range"
                name="budgetRange"
              >
                <option>Not sure yet</option>
                <option>Under €1,000</option>
                <option>€1,000–€3,000</option>
                <option>€3,000–€5,000</option>
                <option>€5,000+</option>
              </select>
            </label>
            <label className="grid gap-2" htmlFor="timeline">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
                Timeline
              </span>
              <select
                className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
                id="timeline"
                name="timeline"
              >
                <option>As soon as possible</option>
                <option>This month</option>
                <option>Next 1–3 months</option>
                <option>Flexible</option>
              </select>
            </label>
          </div>
          <label className="grid gap-2" htmlFor="message">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
              Message
            </span>
            <textarea
              className="min-h-28 w-full resize-none border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
              id="message"
              name="message"
              placeholder="Send the notes, screenshots, half-clear concept, or rough problem."
              required
              rows={4}
            />
          </label>
          <Button className="mt-2 w-full" type="submit">
            {contact.submitLabel}
          </Button>
          <p className="text-sm leading-6 text-[var(--color-muted)]">
            {contact.privacyNote}
          </p>
        </form>
      </div>
    </section>
  );
}
