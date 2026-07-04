import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-300 rounded-full whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "btn-sheen bg-ink-900 text-white shadow-[0_10px_30px_-10px_rgba(10,16,32,0.5)] hover:shadow-[0_16px_40px_-12px_rgba(13,148,136,0.55)] hover:-translate-y-0.5",
  dark: "btn-sheen bg-aurora text-white shadow-[0_10px_30px_-10px_rgba(6,182,212,0.55)] hover:-translate-y-0.5",
  outline:
    "border border-ink-900/15 text-ink-900 bg-white/60 hover:bg-white hover:border-ink-900/30 hover:-translate-y-0.5",
  ghost: "text-ink-900 hover:bg-ink-900/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
} & Partial<ComponentProps<"button">> &
  Partial<ComponentProps<typeof Link>>;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a {...(props as ComponentProps<"a">)} href={href} className={classes}>
          <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </a>
      );
    }
    return (
      <Link {...(props as Omit<ComponentProps<typeof Link>, "href">)} href={href} className={classes}>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }
  return (
    <button className={classes} {...(props as ComponentProps<"button">)}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
