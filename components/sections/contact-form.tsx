"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type ContactFormCopy = {
  errorMessage: string;
  pendingLabel: string;
  privacyNote: string;
  submitLabel: string;
  successMessage: string;
};

type SubmissionState = "idle" | "pending" | "success" | "error";

type ContactFormProps = {
  endpoint?: string;
  contact: ContactFormCopy;
};

function isAjaxProtectionResponse(response: Response, responseText: string) {
  return (
    response.status === 403 &&
    /submit via AJAX|reCAPTCHA must be disabled/i.test(responseText)
  );
}

export function ContactForm({ endpoint, contact }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  const isPending = submissionState === "pending";
  const statusMessage =
    submissionState === "success"
      ? contact.successMessage
      : submissionState === "error"
        ? contact.errorMessage
        : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!endpoint) {
      setSubmissionState("error");
      return;
    }

    setSubmissionState("pending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const responseText = await response.text();

        if (isAjaxProtectionResponse(response, responseText)) {
          form.submit();
          return;
        }

        throw new Error("Form submission failed.");
      }

      formRef.current?.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  return (
    <form
      ref={formRef}
      action={endpoint}
      className="mt-7 grid gap-5"
      method="POST"
      onSubmit={handleSubmit}
    >
      <label className="grid gap-2" htmlFor="contact-name">
        <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
          Name
        </span>
        <input
          className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
          disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
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
            disabled={isPending}
            id="budget-range"
            name="budgetRange"
          >
            <option>Not sure yet</option>
            <option>Under €1,000</option>
            <option>€1,000-€3,000</option>
            <option>€3,000-€5,000</option>
            <option>€5,000+</option>
          </select>
        </label>
        <label className="grid gap-2" htmlFor="timeline">
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
            Timeline
          </span>
          <select
            className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
            disabled={isPending}
            id="timeline"
            name="timeline"
          >
            <option>As soon as possible</option>
            <option>This month</option>
            <option>Next 1-3 months</option>
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
          disabled={isPending}
          id="message"
          name="message"
          placeholder="Send the notes, screenshots, half-clear concept, or rough problem."
          required
          rows={4}
        />
      </label>
      <Button className="mt-2 w-full" disabled={isPending} type="submit">
        {isPending ? contact.pendingLabel : contact.submitLabel}
      </Button>
      <div aria-live="polite" className="min-h-6" role="status">
        {statusMessage ? (
          <p className="text-sm leading-6 text-[var(--color-muted)]">
            {statusMessage}
          </p>
        ) : null}
      </div>
      <p className="text-sm leading-6 text-[var(--color-muted)]">
        {contact.privacyNote}
      </p>
    </form>
  );
}
