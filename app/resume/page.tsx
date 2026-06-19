import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/layouts/site-shell";
import { ResumeMarkdown } from "@/components/sections/resume-markdown";
import { Icon } from "@/components/ui/icons";

const resumeMarkdownPath = path.join(process.cwd(), "public/CV/mario-salamanca-cv.md");
const resumePdfPath = "/CV/mario-salamanca-cv.pdf";

export const metadata: Metadata = {
  title: "Resume | Mario Salamanca",
  description:
    "Read Mario Salamanca's software engineering CV and download the public resume PDF.",
};

async function getResumeMarkdown() {
  return readFile(resumeMarkdownPath, "utf8");
}

export default async function ResumePage() {
  const markdown = await getResumeMarkdown();

  return (
    <SiteShell>
      <section className="border-b border-[var(--color-outline)]/70 bg-[radial-gradient(circle_at_50%_18%,rgba(91,140,255,0.18),transparent_34%),linear-gradient(180deg,#07101f_0%,#060a12_72%)] px-4 pb-16 pt-32 md:px-16 md:pb-20 md:pt-40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div>
            <Link
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.08em] text-[var(--color-outline-strong)] transition hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
              href="/"
            >
              <Icon name="arrow" size={16} className="rotate-180" />
              Home
            </Link>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-secondary)]">
              Public CV
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.08] text-[var(--color-text)] md:text-[72px] md:leading-[1.02]">
              Mario Salamanca
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Software Engineer focused on reliable tools, automation, systems
              integration, and full-stack product work.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-[var(--color-primary-strong)] bg-[var(--color-primary-strong)] px-6 py-3 text-sm font-medium uppercase leading-none tracking-[0.08em] text-[var(--color-on-primary)] transition duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                download
                href={resumePdfPath}
              >
                Download CV
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-[var(--color-outline)] bg-transparent px-6 py-3 text-sm font-medium uppercase leading-none tracking-[0.08em] text-[var(--color-primary)] transition duration-200 hover:border-[var(--color-primary)] hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                href={resumePdfPath}
                rel="noreferrer"
                target="_blank"
              >
                Open PDF
                <Icon name="external" size={17} />
              </a>
            </div>
          </div>

          <div className="w-full max-w-[240px] overflow-hidden rounded-[8px] border border-[var(--color-outline)]/70 bg-[var(--color-surface)] shadow-2xl shadow-black/30 lg:justify-self-end">
            <Image
              alt="Mario Salamanca"
              className="h-auto w-full object-cover"
              height={512}
              priority
              src="/brand/CV_PIC.JPG"
              width={512}
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] px-4 py-12 md:px-16 md:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-secondary)]">
              Engineering profile
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[var(--color-text)] md:text-4xl">
              Systems-minded engineering for tools that need to hold up in use.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
              I am open to software engineering roles involving tooling,
              automation, validation, integration, data workflows, backend
              systems, and product-facing applications. My experience spans
              aerospace and industrial software, from integration test benches
              and communication layers to Python data tooling and web products.
            </p>
          </div>
          <aside className="rounded-[8px] border border-[var(--color-outline)]/70 bg-[var(--color-void)] p-6">
            <h2 className="font-serif text-2xl font-semibold text-[var(--color-text)]">
              Professional links
            </h2>
            <ul className="mt-5 grid gap-3 text-sm text-[var(--color-primary)]">
              <li>
                <a
                  className="underline decoration-[var(--color-primary)]/40 underline-offset-4 transition hover:text-[var(--color-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  href="https://github.com/mario-ah-salamanca"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="underline decoration-[var(--color-primary)]/40 underline-offset-4 transition hover:text-[var(--color-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  href="https://www.linkedin.com/in/mario-ah-salamanca/"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="underline decoration-[var(--color-primary)]/40 underline-offset-4 transition hover:text-[var(--color-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  href="mailto:mario.ah.salamanca@gmail.com"
                >
                  Email Mario
                </a>
              </li>
              <li>
                <Link
                  className="underline decoration-[var(--color-primary)]/40 underline-offset-4 transition hover:text-[var(--color-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                  href="/#contact"
                >
                  Discuss a role
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--color-void)] px-4 py-16 md:px-16 md:py-24">
        <article className="mx-auto max-w-4xl rounded-[8px] border border-[var(--color-outline)]/70 bg-[var(--color-surface-low)] px-5 py-8 shadow-2xl shadow-black/20 md:px-10 md:py-12">
          <ResumeMarkdown markdown={markdown} />
        </article>
      </section>
    </SiteShell>
  );
}
