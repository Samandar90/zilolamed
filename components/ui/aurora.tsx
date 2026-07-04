import { cn } from "@/lib/utils";

/**
 * Floating gradient "aurora" orbs — the signature ambient backdrop.
 * Purely decorative, GPU-friendly, respects reduced motion via CSS.
 */
export function Aurora({
  className,
  intensity = "soft",
}: {
  className?: string;
  intensity?: "soft" | "bold";
}) {
  const op = intensity === "bold" ? "opacity-70" : "opacity-45";
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div
        className={cn(
          "absolute -left-[10%] top-[-8%] h-[34rem] w-[34rem] rounded-full blur-[120px]",
          op,
        )}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(45,212,191,0.55), transparent 60%)",
          animation: "float-orb 18s ease-in-out infinite",
        }}
      />
      <div
        className={cn(
          "absolute right-[-6%] top-[12%] h-[28rem] w-[28rem] rounded-full blur-[120px]",
          op,
        )}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.5), transparent 62%)",
          animation: "float-orb 22s ease-in-out infinite reverse",
        }}
      />
      <div
        className={cn(
          "absolute bottom-[-14%] left-[38%] h-[30rem] w-[30rem] rounded-full blur-[130px]",
          op,
        )}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.45), transparent 62%)",
          animation: "float-orb 26s ease-in-out infinite",
        }}
      />
    </div>
  );
}
