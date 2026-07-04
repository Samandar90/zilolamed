import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Aurora } from "@/components/ui/aurora";
import { Reveal } from "@/components/ui/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-16 pt-36 lg:pb-20 lg:pt-44">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 grid-lines mask-fade-b opacity-40" />
      <div className="container-x relative">
        {breadcrumb && (
          <Reveal>
            <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted">
              <Link href="/" className="transition-colors hover:text-ink-900">
                Home
              </Link>
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                  {b.href ? (
                    <Link href={b.href} className="transition-colors hover:text-ink-900">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-ink-900">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
