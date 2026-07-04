import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { serviceGroups } from "@/lib/data/services";

export function Services() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]" />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] opacity-40 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.5), transparent 60%)" }}
      />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            light
            eyebrow="Услуги клиники"
            title={<>Диагностика, лечение<br className="hidden sm:block" /> и процедуры.</>}
            description="Полный цикл помощи в одном месте: консультации, функциональная и УЗ-диагностика, лаборатория, физиотерапия и гинекология."
          />
          <Link
            href="/uslugi"
            className="group hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-white lg:inline-flex"
          >
            Все услуги
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 transition-all group-hover:bg-white group-hover:text-ink-900">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/uslugi#${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-teal-400/40 hover:bg-white/[0.06]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aurora text-white">
                  <s.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{s.short}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.items.slice(0, 4).map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-white/60">
                      <Check className="h-3.5 w-3.5 shrink-0 text-teal-400" /> {it}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-300">
                  Подробнее
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
