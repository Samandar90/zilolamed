import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-ink-900";
  const sub = variant === "light" ? "text-white/50" : "text-muted";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-aurora shadow-[0_8px_20px_-8px_rgba(6,182,212,0.6)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" aria-hidden>
          <path
            d="M2 12h4l2-6 3 12 3-9 2 3h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/25" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.05rem] font-semibold tracking-tight", text)}>
          Zilola<span className="text-aurora"> Medical</span>
        </span>
        <span className={cn("text-[0.6rem] font-medium uppercase tracking-[0.22em]", sub)}>
          Клиника · Ташкент
        </span>
      </span>
    </span>
  );
}
