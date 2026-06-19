"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type ContactFormCopy = {
  errorMessage: string;
  fallbackMessage: string;
  pendingLabel: string;
  privacyNote: string;
  submitLabel: string;
  successMessage: string;
};

type SubmissionState = "idle" | "pending" | "success" | "fallback" | "error";
type InquiryType = "" | "job" | "project" | "collaboration" | "general";

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
  const [inquiryType, setInquiryType] = useState<InquiryType>("");

  const isPending = submissionState === "pending";
  const isSubmitting = isPending || submissionState === "fallback";
  const statusMessage =
    submissionState === "success"
      ? contact.successMessage
      : submissionState === "fallback"
        ? contact.fallbackMessage
      : submissionState === "error"
        ? contact.errorMessage
        : "";

  useEffect(() => {
    formRef.current?.setAttribute("data-enhanced", "true");
  }, []);

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
          setSubmissionState("fallback");
          window.setTimeout(() => form.submit(), 100);
          return;
        }

        throw new Error("Form submission failed.");
      }

      formRef.current?.reset();
      setInquiryType("");
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
      data-enhanced="false"
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
      <label className="grid gap-2" htmlFor="inquiry-type">
        <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
          What are you reaching out about?
        </span>
        <select
          className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
          disabled={isPending}
          id="inquiry-type"
          name="inquiryType"
          onChange={(event) => {
            setInquiryType(event.target.value as InquiryType);
            setSubmissionState("idle");
          }}
          required
          value={inquiryType}
        >
          <option value="">Select one</option>
          <option value="job">Job opportunity</option>
          <option value="project">Freelance project</option>
          <option value="collaboration">Collaboration</option>
          <option value="general">General message</option>
        </select>
      </label>
      {inquiryType === "job" ? (
        <fieldset className="grid gap-5 border-y border-[var(--color-outline)]/50 py-5">
          <legend className="px-0 text-sm font-medium text-[var(--color-text)]">
            Role details (optional)
          </legend>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2" htmlFor="job-company">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
                Company
              </span>
              <input
                className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
                disabled={isPending}
                id="job-company"
                name="jobCompany"
                placeholder="Company name"
                type="text"
              />
            </label>
            <label className="grid gap-2" htmlFor="job-role-title">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
                Role title
              </span>
              <input
                className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
                disabled={isPending}
                id="job-role-title"
                name="jobRoleTitle"
                placeholder="Software Engineer"
                type="text"
              />
            </label>
          </div>
          <label className="grid gap-2" htmlFor="job-link">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
              Job link
            </span>
            <input
              className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
              disabled={isPending}
              id="job-link"
              name="jobLink"
              placeholder="https://..."
              type="url"
            />
          </label>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2" htmlFor="job-location">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
                Location or remote expectation
              </span>
              <input
                className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
                disabled={isPending}
                id="job-location"
                name="jobLocation"
                placeholder="Berlin, hybrid, remote..."
                type="text"
              />
            </label>
            <label className="grid gap-2" htmlFor="job-contact-context">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
                Contact context
              </span>
              <input
                className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
                disabled={isPending}
                id="job-contact-context"
                name="jobContactContext"
                placeholder="How you found my profile"
                type="text"
              />
            </label>
          </div>
        </fieldset>
      ) : null}
      {inquiryType === "project" ? (
        <fieldset className="grid gap-5 border-y border-[var(--color-outline)]/50 py-5">
          <legend className="px-0 text-sm font-medium text-[var(--color-text)]">
            Project details (optional)
          </legend>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2" htmlFor="project-type">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
                Project type
              </span>
              <select
                className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
                disabled={isPending}
                id="project-type"
                name="projectType"
              >
                <option value="">Select one</option>
                <option>Website</option>
                <option>AI or workflow system</option>
                <option>Technical prototype</option>
                <option>Other</option>
              </select>
            </label>
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
          </div>
          <div className="grid gap-5 md:grid-cols-2">
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
            <label className="grid gap-2" htmlFor="project-link">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
                Current site or product link
              </span>
              <input
                className="min-h-12 w-full border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
                disabled={isPending}
                id="project-link"
                name="projectLink"
                placeholder="https://..."
                type="url"
              />
            </label>
          </div>
          <label className="grid gap-2" htmlFor="project-goal">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]/80">
              Main goal
            </span>
            <textarea
              className="min-h-24 w-full resize-none border-0 border-b border-[var(--color-outline)] bg-[var(--color-void)] px-3 py-3 text-base text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-outline)]/80 focus:border-[var(--color-primary)]"
              disabled={isPending}
              id="project-goal"
              name="projectGoal"
              placeholder="What needs to be clearer, faster, or easier?"
              rows={3}
            />
          </label>
        </fieldset>
      ) : null}
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
      <Button className="mt-2 w-full" disabled={isSubmitting} type="submit">
        {isSubmitting ? contact.pendingLabel : contact.submitLabel}
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
