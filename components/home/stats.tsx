import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/data/content";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[50rem] -translate-x-1/2 opacity-40 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(20,184,166,0.5), transparent 65%)" }}
      />
      <div className="container-x relative">
        <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-l border-white/10 px-6">
                <div className="font-display text-5xl font-semibold tracking-tight text-white lg:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-base font-medium text-white">{s.label}</p>
                <p className="mt-1 text-sm text-white/45">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
