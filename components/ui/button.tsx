import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
};

const variants = {
  primary:
    "border border-[var(--color-primary-strong)] bg-[var(--color-primary-strong)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] focus-visible:outline-[var(--color-primary)]",
  secondary:
    "border border-[var(--color-outline)] bg-transparent text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-white/[0.03] focus-visible:outline-[var(--color-primary)]",
};

const baseClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] px-6 py-3 text-sm font-medium uppercase leading-none tracking-[0.08em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-65";

export function Button({
  children,
  disabled = false,
  href,
  type = "button",
  variant = "primary",
  className,
}: ButtonProps) {
  const buttonClass = cn(baseClass, variants[variant], className);

  if (href) {
    return (
      <Link className={buttonClass} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} disabled={disabled} type={type}>
      {children}
    </button>
  );
}
